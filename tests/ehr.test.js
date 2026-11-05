import test from 'node:test';
import assert from 'node:assert/strict';
import { SignJWT, exportSPKI, generateKeyPair } from 'jose';
import { normalizeLaunchClaims, EhrError } from '../server/ehr/patient.js';
import { loadEhrConfig, parseClients } from '../server/ehr/config.js';
import { verifyLaunchToken, createSession, readSession, pseudonym } from '../server/ehr/token.js';
import { createReplayGuard } from '../server/ehr/routes.js';

const AUD = 'https://example.com';
const NOW = Date.parse('2026-11-05T12:00:00-03:00');
const PATIENT = { mrn: '123', name: 'RN de Teste', sex: 'F', birthDateTime: '2026-11-03T14:20:00-03:00', gestationalAgeAtBirth: { weeks: 32, days: 4 }, birthWeightG: 1650, weightKg: 1.58, weightMeasuredAt: '2026-11-05T06:00:00-03:00', heightCm: 42 };
const SECRET = new TextEncoder().encode('x'.repeat(40));

async function hospital(alg = 'ES256', extra = {}) {
  const { publicKey, privateKey } = await generateKeyPair(alg, { extractable: true });
  const client = { iss: 'hospital-a', name: 'Hospital A', system: 'MV', alg, publicKey: await exportSPKI(publicKey), active: true, ...extra };
  const sign = (claims = {}, { iat = NOW / 1000, ttl = 240, jti = 'jti-0001-abc', headerAlg = alg, key = privateKey, iss = client.iss, aud = AUD } = {}) =>
    new SignJWT({ patient: PATIENT, ...claims }).setProtectedHeader({ alg: headerAlg }).setIssuer(iss).setAudience(aud).setJti(jti).setIssuedAt(iat).setExpirationTime(iat + ttl).sign(key);
  return { client, sign, privateKey };
}

const rejects = (promise, code) => assert.rejects(promise, error => error instanceof EhrError && error.code === code);

test('normalizes valid launch claims and keeps the hospital wall-clock time', () => {
  const ctx = normalizeLaunchClaims({ patient: { ...PATIENT, weightKg: '1,58' }, encounter: { id: 'AT-1', unit: 'UTIN' } }, { now: NOW });
  assert.equal(ctx.patient.weightKg, 1.58);
  assert.equal(ctx.patient.birthDateTime, '2026-11-03T14:20:00-03:00');
  assert.deepEqual(ctx.encounter, { id: 'AT-1', unit: 'UTIN' });
  assert.ok(Object.isFrozen(ctx.patient));
});

test('rejects implausible or ambiguous clinical values instead of clamping them', () => {
  const bad = [
    { weightKg: 1580 },                        // grams sent as kg
    { birthWeightG: 1.65 },                    // kg sent as grams
    { birthDateTime: '2026-11-03T14:20:00' },  // no time zone
    { birthDateTime: '2026-12-01T00:00:00-03:00' }, // future
    { sex: 'X' },
    { name: '' },
    { gestationalAgeAtBirth: { weeks: 32.5 } },
    { weightMeasuredAt: null }                 // weight without measurement time
  ];
  for (const patch of bad) assert.throws(() => normalizeLaunchClaims({ patient: { ...PATIENT, ...patch } }, { now: NOW }), EhrError, JSON.stringify(patch));
});

test('EHR config: invalid clients disable the integration; production requires a secret', () => {
  assert.throws(() => parseClients('[{"iss":"h1x","alg":"HS256","publicKey":"x"}]'), /alg/);
  assert.equal(loadEhrConfig({ EHR_CLIENTS: '[{"iss":"h1x","alg":"HS256"}]', EHR_SESSION_SECRET: 'y'.repeat(40) }, { production: true }).enabled, false);
  assert.equal(loadEhrConfig({}, { production: true }).enabled, false, 'nothing configured');
  assert.equal(loadEhrConfig({ EHR_SANDBOX: 'true' }, { production: true }).enabled, false, 'sandbox without secret');
  const dev = loadEhrConfig({}, { production: false });
  assert.equal(dev.enabled && dev.sandbox && dev.ephemeralSecret, true, 'dev defaults to sandbox with ephemeral secret');
  const prodSandbox = loadEhrConfig({ EHR_SANDBOX: 'true', EHR_SESSION_SECRET: 'y'.repeat(40) }, { production: true });
  assert.equal(prodSandbox.enabled && prodSandbox.sandbox, true);
  assert.equal(loadEhrConfig({ EHR_SESSION_SECRET: 'short', EHR_SANDBOX: 'true' }, { production: true }).enabled, false);
});

test('verifies a hospital token (ES256 and RS256)', async () => {
  for (const alg of ['ES256', 'RS256']) {
    const h = await hospital(alg);
    const result = await verifyLaunchToken(await h.sign(), { clients: [h.client], audience: AUD, now: NOW });
    assert.equal(result.client.iss, 'hospital-a');
    assert.equal(result.context.patient.mrn, '123');
  }
});

test('rejects forged, expired, long-lived, foreign-audience and unknown-issuer tokens', async () => {
  const h = await hospital();
  const other = await hospital();
  const opts = { clients: [h.client], audience: AUD, now: NOW };
  await rejects(verifyLaunchToken(await h.sign({}, { key: other.privateKey }), opts), 'bad_signature');
  await rejects(verifyLaunchToken(await h.sign({}, { iat: NOW / 1000 - 900 }), opts), 'expired');
  await rejects(verifyLaunchToken(await h.sign({}, { ttl: 3600 }), opts), 'bad_claims');
  await rejects(verifyLaunchToken(await h.sign({}, { aud: 'https://evil.example' }), opts), 'bad_claims');
  await rejects(verifyLaunchToken(await h.sign({}, { iss: 'hospital-z' }), opts), 'unknown_issuer');
  await rejects(verifyLaunchToken(await h.sign({}, { jti: 'x' }), opts), 'bad_claims');
  await rejects(verifyLaunchToken('not-a-jwt', opts), 'invalid_token');
  await rejects(verifyLaunchToken(await h.sign({ patient: { ...PATIENT, weightKg: 999 } }), opts), 'invalid_claims');
});

test('rejects algorithm confusion: HS256 signed with the public key text', async () => {
  const h = await hospital();
  const forged = await new SignJWT({ patient: PATIENT }).setProtectedHeader({ alg: 'HS256' }).setIssuer(h.client.iss).setAudience(AUD).setJti('jti-0001-abc').setIssuedAt(NOW / 1000).setExpirationTime(NOW / 1000 + 60).sign(new TextEncoder().encode(h.client.publicKey));
  await rejects(verifyLaunchToken(forged, { clients: [h.client], audience: AUD, now: NOW }), 'bad_alg');
});

test('inactive licence blocks new launches and existing sessions', async () => {
  const h = await hospital('ES256');
  const inactive = { ...h.client, active: false };
  await rejects(verifyLaunchToken(await h.sign(), { clients: [inactive], audience: AUD, now: NOW }), 'license_inactive');
  const session = await createSession(SECRET, { iss: h.client.iss, hospital: h.client.name }, NOW);
  assert.equal((await readSession(SECRET, session, [h.client], NOW)).hospital, 'Hospital A');
  assert.equal(await readSession(SECRET, session, [inactive], NOW), null);
  assert.equal(await readSession(SECRET, session, [h.client], NOW + 13 * 3600 * 1000), null, 'expires after 12 h');
  assert.equal(await readSession(new TextEncoder().encode('z'.repeat(40)), session, [h.client], NOW), null, 'other secret');
});

test('launch tokens are single use', () => {
  const consume = createReplayGuard();
  assert.equal(consume('h:j1', NOW / 1000 + 60, NOW), true);
  assert.equal(consume('h:j1', NOW / 1000 + 60, NOW), false);
  assert.equal(consume('h:j2', NOW / 1000 + 60, NOW), true);
});

test('pseudonyms are stable per key and do not expose the MRN', () => {
  const a = pseudonym(SECRET, 'hospital-a', 'patient', '123');
  assert.equal(a, pseudonym(SECRET, 'hospital-a', 'patient', '123'));
  assert.notEqual(a, pseudonym(SECRET, 'hospital-b', 'patient', '123'));
  assert.ok(!a.includes('123') && a.length === 64);
});

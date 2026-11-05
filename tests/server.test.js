import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

const APP_URL = 'https://example.com';
const NO_INTEGRATIONS = { SUPABASE_URL: '', SUPABASE_ANON_KEY: '', SUPABASE_SERVICE_ROLE_KEY: '', STRIPE_SECRET_KEY: '', STRIPE_PRICE_MONTHLY: '', STRIPE_PRICE_ANNUAL: '', RAILWAY_PUBLIC_DOMAIN: '', EHR_CLIENTS: '', EHR_SESSION_SECRET: '', EHR_SANDBOX: '' };
const SUPABASE = { SUPABASE_URL: 'https://example.supabase.co', SUPABASE_ANON_KEY: 'test-anon-key-0123456789', SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key-0123456789' };
const STRIPE = { STRIPE_SECRET_KEY: 'sk_test_placeholder', STRIPE_PRICE_MONTHLY: 'price_test_monthly', STRIPE_PRICE_ANNUAL: 'price_test_annual' };
const PROTECTED = ['/files/apgar.html', '/files/NutriPedWebapp/index.html', '/files/ballard/ballard.htm', '/%66iles/apgar.html', '/FILES/apgar.html', '/selecao_calculadoras.html', '/CALCULADORAS_NEONATAIS.HTML', '/calculadoras_pediatricas.html'];
const PUBLIC = ['/', '/index.html', '/conta.html', '/planos.html', '/bibliografia.html', '/advertencias.html', '/css/neoped-modern.css', '/js/catalog-data.js'];
const jsonPost = (body = {}) => ({ method: 'POST', headers: { 'Content-Type': 'application/json', Origin: APP_URL }, body: JSON.stringify(body) });

async function startServer(t, port, extraEnv) {
  const child = spawn(process.execPath, ['server/index.js'], { env: { ...process.env, NODE_ENV: 'production', HOST: '127.0.0.1', PORT: String(port), APP_URL, ...NO_INTEGRATIONS, ...extraEnv }, stdio: 'pipe' });
  let output = '';
  child.stdout.on('data', chunk => { output += chunk; });
  child.stderr.on('data', chunk => { output += chunk; });
  t.after(() => child.kill());
  const base = 'http://127.0.0.1:' + port;
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(base + '/health')).ok) return { base, logs: () => output }; } catch {}
    if (child.exitCode !== null) throw new Error('server exited: ' + output);
    await delay(100);
  }
  throw new Error('server did not start: ' + output);
}

async function assertProtectedBlocked(base, location) {
  for (const file of PROTECTED) {
    const response = await fetch(base + file, { redirect: 'manual' });
    assert.equal(response.status, 303, file);
    assert.equal(response.headers.get('location'), location, file);
    assert.match(response.headers.get('cache-control'), /no-store/, file);
  }
}

test('fatal essential config: production without APP_URL exits with an identifiable error', async () => {
  const child = spawn(process.execPath, ['server/index.js'], { env: { ...process.env, NODE_ENV: 'production', APP_URL: '', ...NO_INTEGRATIONS }, stdio: 'pipe' });
  let output = ''; child.stderr.on('data', chunk => { output += chunk; });
  const [code] = await once(child, 'exit');
  assert.notEqual(code, 0);
  assert.match(output, /Falha fatal de configuração: .*APP_URL/);
});

test('production without Supabase and Stripe starts, serves public pages and keeps paid content locked', async t => {
  const { base, logs } = await startServer(t, 3181, {});
  const health = await fetch(base + '/health');
  assert.equal(health.status, 200);
  const body = await health.json();
  assert.deepEqual({ status: body.status, application: body.application, environment: body.environment, integrations: body.integrations }, { status: 'ok', application: 'NeoPedCalc', environment: 'production', integrations: { supabase: 'not_configured', stripe: 'not_configured', ehr: 'not_configured' } });
  assert.equal((await fetch(base + '/api/health')).status, 200, 'Railway healthcheck path still works');
  for (const page of PUBLIC) assert.equal((await fetch(base + page)).status, 200, page);
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
  assert.equal((await fetch(base + '/api/account')).status, 503);
  assert.equal((await fetch(base + '/api/auth/login', jsonPost({ email: 'user@example.com', password: 'x' }))).status, 503);
  assert.equal((await fetch(base + '/api/checkout', jsonPost({ plan: 'monthly' }))).status, 503);
  assert.equal((await fetch(base + '/api/billing-portal', jsonPost())).status, 503);
  const config = await (await fetch(base + '/api/config')).json();
  assert.equal(config.demo, false, 'production never advertises a free preview');
  assert.equal(config.billing, false);
  assert.match(logs(), /Supabase: DESATIVADO/);
  assert.match(logs(), /Stripe: DESATIVADO/);
});

test('Supabase configured but Stripe missing: login path exists, checkout and paid content stay blocked', async t => {
  const { base } = await startServer(t, 3182, SUPABASE);
  const health = await (await fetch(base + '/health')).json();
  assert.deepEqual(health.integrations, { supabase: 'configured', stripe: 'not_configured', ehr: 'not_configured' });
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
  assert.equal((await fetch(base + '/api/account')).status, 401, 'anonymous user still needs to sign in');
  assert.equal((await fetch(base + '/api/checkout', jsonPost({ plan: 'annual' }))).status, 401);
  const config = await (await fetch(base + '/api/config')).json();
  assert.deepEqual({ demo: config.demo, billing: config.billing, auth: config.auth }, { demo: false, billing: false, auth: true });
});

test('Stripe configured but Supabase missing: no identity, so nothing paid is reachable', async t => {
  const { base } = await startServer(t, 3183, STRIPE);
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
  assert.equal((await fetch(base + '/api/checkout', jsonPost({ plan: 'monthly' }))).status, 503);
  assert.equal((await fetch(base + '/api/account')).status, 503);
});

test('malformed credentials do not crash the server and are treated as not configured', async t => {
  const { base } = await startServer(t, 3184, { ...SUPABASE, ...STRIPE, SUPABASE_URL: 'not-a-url', STRIPE_SECRET_KEY: 'pk_live_wrong' });
  const health = await (await fetch(base + '/health')).json();
  assert.deepEqual(health.integrations, { supabase: 'not_configured', stripe: 'not_configured', ehr: 'not_configured' });
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
});

test('full configuration: anonymous users are redirected to sign in, secrets and cross-origin writes blocked', async t => {
  const { base } = await startServer(t, 3179, { ...SUPABASE, ...STRIPE });
  const health = await (await fetch(base + '/health')).json();
  assert.deepEqual(health.integrations, { supabase: 'configured', stripe: 'configured', ehr: 'not_configured' });
  assert.doesNotMatch(JSON.stringify(health), /sk_test|price_test|example\.supabase/, 'health never leaks credentials');
  await assertProtectedBlocked(base, '/conta.html');
  for (const file of ['/.env', '/server/index.js', '/server/config.js', '/server/schema.sql', '/package.json', '/README.md']) assert.equal((await fetch(base + file)).status, 404, file);
  assert.equal((await fetch(base + '/api/account')).status, 401);
  assert.equal((await fetch(base + '/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://attacker.example' }, body: JSON.stringify({ email: 'user@example.com', password: 'a' }) })).status, 403);
  const publicPage = await fetch(base + '/conta.html');
  assert.equal(publicPage.status, 200);
  assert.match(publicPage.headers.get('content-security-policy'), /default-src 'self'/);
});

test('web app install assets are served from the site root with correct types', async t => {
  const { base } = await startServer(t, 3186, {});
  const manifest = await fetch(base + '/manifest.webmanifest');
  assert.equal(manifest.status, 200);
  assert.match(manifest.headers.get('content-type'), /application\/manifest\+json/);
  const data = await manifest.json();
  assert.equal(data.short_name, 'NeoPedCalc');
  assert.ok(data.icons.some(icon => icon.purpose === 'maskable' && icon.sizes === '512x512'));
  for (const icon of data.icons) assert.equal((await fetch(base + icon.src)).status, 200, icon.src);
  for (const [route, type] of [['/favicon.ico', /image\/x-icon/], ['/apple-touch-icon.png', /image\/png/], ['/apple-touch-icon-precomposed.png', /image\/png/]]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get('content-type'), type, route);
  }
});

test('OPEN_ACCESS=true temporarily unlocks calculators in production and is reported', async t => {
  const { base, logs } = await startServer(t, 3187, { OPEN_ACCESS: 'true' });
  for (const file of ['/files/apgar.html', '/files/ballard/ballard.htm', '/selecao_calculadoras.html', '/calculadoras_neonatais.html', '/calculadoras_pediatricas.html']) assert.equal((await fetch(base + file, { redirect: 'manual' })).status, 200, file);
  assert.equal((await (await fetch(base + '/api/config')).json()).openAccess, true);
  assert.equal((await (await fetch(base + '/health')).json()).openAccess, true);
  assert.match(logs(), /OPEN_ACCESS=true/);
});

test('server listens on the PORT provided by the platform', async t => {
  const { base } = await startServer(t, 3185, { RAILWAY_PUBLIC_DOMAIN: 'neo.up.railway.app', APP_URL: '' });
  assert.equal((await fetch(base + '/health')).status, 200);
});

test('hospital licence: a signed EHR launch replaces login, is single use and keeps clinical data off the server', async t => {
  const { SignJWT, exportSPKI, generateKeyPair } = await import('jose');
  const { publicKey, privateKey } = await generateKeyPair('ES256', { extractable: true });
  const client = { iss: 'hospital-teste', name: 'Hospital Teste', system: 'TASY', alg: 'ES256', publicKey: await exportSPKI(publicKey) };
  const { base, logs } = await startServer(t, 3188, { EHR_CLIENTS: JSON.stringify([client]), EHR_SESSION_SECRET: 's'.repeat(48), EHR_SANDBOX: 'false' });
  assert.match(logs(), /Prontuário: 1 hospital\(is\) configurado\(s\)/);
  assert.equal((await (await fetch(base + '/health')).json()).integrations.ehr, 'configured');
  assert.equal((await fetch(base + '/ehr/sandbox')).status, 404, 'sandbox off');
  const launchPage = await fetch(base + '/ehr/launch');
  assert.equal(launchPage.status, 200);
  assert.equal(launchPage.headers.get('referrer-policy'), 'no-referrer');
  const patient = { mrn: 'MRN-9', name: 'RN Teste', sex: 'M', birthDateTime: new Date(Date.now() - 86400000).toISOString(), weightKg: 3.1, weightMeasuredAt: new Date().toISOString() };
  const token = await new SignJWT({ patient, encounter: { id: 'AT-9' } }).setProtectedHeader({ alg: 'ES256' }).setIssuer(client.iss).setAudience(APP_URL).setJti('jti-integration-1').setIssuedAt().setExpirationTime('4m').sign(privateKey);

  const opened = await fetch(base + '/api/ehr/session', jsonPost({ token }));
  assert.equal(opened.status, 200);
  const context = await opened.json();
  assert.equal(context.patient.weightKg, 3.1);
  assert.equal(context.hospital.name, 'Hospital Teste');
  const cookie = opened.headers.get('set-cookie');
  assert.match(cookie, /np_ehr=.*HttpOnly/i);
  assert.ok(!/MRN-9|RN Teste/.test(cookie), 'cookie carries no patient data');
  const session = cookie.split(';')[0];

  const calc = await fetch(base + '/files/apgar.html', { redirect: 'manual', headers: { cookie: session } });
  assert.equal(calc.status, 200, 'licensed hospital reaches calculators without Supabase/Stripe');
  assert.equal((await (await fetch(base + '/api/ehr/status', { headers: { cookie: session } })).json()).session.hospital, 'Hospital Teste');
  assert.equal((await fetch(base + '/files/apgar.html', { redirect: 'manual' })).status, 303, 'no cookie → still locked');
  assert.equal((await fetch(base + '/files/apgar.html', { redirect: 'manual', headers: { cookie: session + 'x' } })).status, 303, 'tampered cookie');

  const replay = await fetch(base + '/api/ehr/session', jsonPost({ token }));
  assert.equal(replay.status, 409, 'link is single use');
  const foreign = await fetch(base + '/api/ehr/session', { ...jsonPost({ token }), headers: { 'Content-Type': 'application/json', Origin: 'https://evil.example' } });
  assert.equal(foreign.status, 403, 'cross-origin launch exchange blocked');
  assert.equal((await fetch(base + '/api/ehr/session', jsonPost({ token: 'a.b.c' }))).status, 401);
  assert.ok(!/MRN-9|RN Teste/.test(logs()), 'server logs never contain patient identifiers');
});

test('EHR sandbox (fake hospital) works end-to-end when explicitly enabled', async t => {
  const { base, logs } = await startServer(t, 3189, { EHR_SANDBOX: 'true', EHR_SESSION_SECRET: 's'.repeat(48) });
  assert.match(logs(), /EHR_SANDBOX=true em produção/);
  assert.equal((await fetch(base + '/ehr/sandbox')).status, 200);
  const patient = { mrn: 'T-1', name: 'Teste', sex: 'F', birthDateTime: '2026-01-10T08:00:00-03:00' };
  const issued = await fetch(base + '/api/ehr/sandbox-token', jsonPost({ patient }));
  assert.equal(issued.status, 200);
  const { url, token } = await issued.json();
  assert.ok(url.startsWith(APP_URL + '/ehr/launch#token='));
  const opened = await fetch(base + '/api/ehr/session', jsonPost({ token }));
  assert.equal(opened.status, 200);
  assert.equal((await opened.json()).hospital.sandbox, true);
  const invalid = await fetch(base + '/api/ehr/sandbox-token', jsonPost({ patient: { ...patient, weightKg: 900, weightMeasuredAt: '2026-01-10T08:00:00-03:00' } }));
  assert.equal(invalid.status, 400);
});

test('EHR disabled in production without a session secret: nothing is unlocked', async t => {
  const { base } = await startServer(t, 3190, { EHR_SANDBOX: 'true' });
  assert.equal((await fetch(base + '/ehr/sandbox')).status, 404);
  assert.equal((await fetch(base + '/api/ehr/session', jsonPost({ token: 'a.b.c' }))).status, 503);
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
});

// Launch-token verification (hospital → NeoPedCalc) and the NeoPedCalc session
// token that replaces a user login for licensed hospitals.

import { createHmac } from 'node:crypto';
import { SignJWT, decodeJwt, decodeProtectedHeader, importSPKI, jwtVerify, errors } from 'jose';
import { EhrError, normalizeLaunchClaims } from './patient.js';

export const LAUNCH_MAX_AGE_S = 5 * 60;
export const SESSION_TTL_S = 12 * 60 * 60;
const CLOCK_TOLERANCE_S = 30;
const SESSION_AUDIENCE = 'neopedcalc-ehr-session';
const SESSION_ISSUER = 'neopedcalc';

const keyCache = new Map();
async function publicKeyFor(client) {
  if (client.keyObject) return client.keyObject;
  const cacheKey = client.iss + ':' + client.alg + ':' + client.publicKey;
  if (!keyCache.has(cacheKey)) keyCache.set(cacheKey, await importSPKI(client.publicKey, client.alg));
  return keyCache.get(cacheKey);
}

function mapJoseError(error) {
  if (error instanceof EhrError) return error;
  if (error instanceof errors.JWTExpired) return new EhrError('expired', 'O link do prontuário expirou. Abra o NeoPedCalc novamente pelo prontuário.', 401);
  if (error instanceof errors.JWSSignatureVerificationFailed) return new EhrError('bad_signature', 'Assinatura do prontuário inválida.', 401);
  if (error instanceof errors.JWTClaimValidationFailed) return new EhrError('bad_claims', 'Token do prontuário inválido (' + error.claim + ').', 401);
  return new EhrError('invalid_token', 'Token do prontuário inválido.', 401);
}

/**
 * Verifies a hospital launch token and returns the normalised clinical context.
 * @param {string} token
 * @param {{ clients: Array<object>, audience: string, now?: number }} options
 */
export async function verifyLaunchToken(token, { clients, audience, now = Date.now() }) {
  if (typeof token !== 'string' || token.length > 8192 || token.split('.').length !== 3) {
    throw new EhrError('invalid_token', 'Token do prontuário ausente ou malformado.', 401);
  }
  let header, unverified;
  try { header = decodeProtectedHeader(token); unverified = decodeJwt(token); } catch { throw new EhrError('invalid_token', 'Token do prontuário malformado.', 401); }
  const client = clients.find(c => c.iss === unverified.iss);
  if (!client) throw new EhrError('unknown_issuer', 'Hospital não reconhecido.', 401);
  if (!client.active) throw new EhrError('license_inactive', 'A licença deste hospital está inativa.', 403);
  if (header.alg !== client.alg) throw new EhrError('bad_alg', 'Algoritmo de assinatura não permitido.', 401);
  try {
    const { payload } = await jwtVerify(token, await publicKeyFor(client), {
      algorithms: [client.alg],
      issuer: client.iss,
      audience,
      requiredClaims: ['exp', 'iat', 'jti'],
      maxTokenAge: LAUNCH_MAX_AGE_S,
      clockTolerance: CLOCK_TOLERANCE_S,
      currentDate: new Date(now)
    });
    if (typeof payload.jti !== 'string' || payload.jti.length < 8 || payload.jti.length > 128) throw new EhrError('bad_claims', 'jti inválido.', 401);
    if (payload.exp - payload.iat > LAUNCH_MAX_AGE_S) throw new EhrError('bad_claims', `Validade do token acima de ${LAUNCH_MAX_AGE_S / 60} minutos.`, 401);
    return { client, jti: payload.jti, exp: payload.exp, context: normalizeLaunchClaims(payload, { now }) };
  } catch (error) {
    throw mapJoseError(error);
  }
}

/** Keyed pseudonym: lets audits correlate launches without storing the MRN. */
export function pseudonym(secret, ...parts) {
  return createHmac('sha256', secret).update(parts.join('\u001f')).digest('hex');
}

export async function createSession(secret, { iss, hospital }, now = Date.now()) {
  const issuedAt = Math.floor(now / 1000);
  return new SignJWT({ hosp: hospital })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(SESSION_ISSUER).setAudience(SESSION_AUDIENCE).setSubject(iss)
    .setIssuedAt(issuedAt).setExpirationTime(issuedAt + SESSION_TTL_S)
    .sign(secret);
}

/** @returns {Promise<{ iss: string, hospital: string, exp: number } | null>} */
export async function readSession(secret, token, clients, now = Date.now()) {
  if (!secret || typeof token !== 'string' || !token) return null;
  try {
    const { payload } = await jwtVerify(token, secret, { algorithms: ['HS256'], issuer: SESSION_ISSUER, audience: SESSION_AUDIENCE, currentDate: new Date(now) });
    // License is re-checked on every request: deactivating a hospital cuts access immediately.
    const client = clients.find(c => c.iss === payload.sub);
    if (!client?.active) return null;
    return { iss: client.iss, hospital: client.name, exp: payload.exp };
  } catch {
    return null;
  }
}

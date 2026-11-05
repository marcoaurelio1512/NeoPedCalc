// HTTP surface of the EHR integration.
//   GET  /ehr/launch            page opened by MV/Tasy in a new tab (#token=JWT)
//   POST /api/ehr/session       verifies the launch token → licence cookie + patient context
//   GET  /api/ehr/status        is this browser in a hospital session?
//   POST /api/ehr/logout        ends the hospital session
//   GET  /ehr/sandbox, POST /api/ehr/sandbox-token   fake hospital for tests (EHR_SANDBOX)
// No clinical data is persisted: the patient context goes back to the tab only.

import express from 'express';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { rateLimit } from 'express-rate-limit';
import { SignJWT, generateKeyPair } from 'jose';
import { SANDBOX_ISSUER } from './config.js';
import { EhrError, normalizeLaunchClaims } from './patient.js';
import { LAUNCH_MAX_AGE_S, SESSION_TTL_S, createSession, pseudonym, readSession, verifyLaunchToken } from './token.js';

export const EHR_COOKIE = 'np_ehr';
const SANDBOX_ALG = 'ES256';
const REPLAY_CACHE_LIMIT = 50000;
const REPLAYED_MESSAGE = 'Este link do prontuário já foi utilizado. Abra o NeoPedCalc novamente pelo prontuário.';

/** Single-use launch tokens (per process; the audit table adds a cross-instance guarantee). */
export function createReplayGuard() {
  const seen = new Map();
  return function consume(key, expSeconds, now = Date.now()) {
    for (const [k, exp] of seen) if (exp * 1000 < now) seen.delete(k);
    if (seen.has(key)) return false;
    if (seen.size >= REPLAY_CACHE_LIMIT) seen.delete(seen.keys().next().value);
    seen.set(key, expSeconds);
    return true;
  };
}

async function createSandboxIssuer() {
  const { publicKey, privateKey } = await generateKeyPair(SANDBOX_ALG);
  const client = Object.freeze({ iss: SANDBOX_ISSUER, name: 'Hospital de Teste (sandbox)', system: 'OTHER', alg: SANDBOX_ALG, keyObject: publicKey, active: true });
  return { client, privateKey };
}

export async function createEhrIntegration({ ehr, appUrl, production, root, admin }) {
  const sandbox = ehr.sandbox ? await createSandboxIssuer() : null;
  const clients = sandbox ? [...ehr.clients, sandbox.client] : ehr.clients;
  const consume = createReplayGuard();
  const cookieOptions = { httpOnly: true, sameSite: 'lax', secure: production, path: '/' };

  async function sessionFor(req) {
    if (!ehr.enabled) return null;
    return readSession(ehr.sessionSecret, req.cookies?.[EHR_COOKIE], clients);
  }

  async function audit({ client, jti, context }) {
    const row = {
      issuer: client.iss,
      patient_ref: pseudonym(ehr.sessionSecret, client.iss, 'patient', context.patient.mrn),
      encounter_ref: context.encounter.id ? pseudonym(ehr.sessionSecret, client.iss, 'encounter', context.encounter.id) : null,
      jti_ref: pseudonym(ehr.sessionSecret, client.iss, 'jti', jti)
    };
    if (!admin) {
      console.info('[NeoPedCalc] Abertura via prontuário', row.issuer, 'paciente', row.patient_ref.slice(0, 12));
      return;
    }
    const { error } = await admin.from('ehr_launch_audit').insert(row);
    if (error?.code === '23505') throw new EhrError('replayed', REPLAYED_MESSAGE, 409);
    // Audit storage outage must not block care; the in-memory guard still prevents reuse.
    if (error) console.error('[NeoPedCalc] Falha ao gravar auditoria do prontuário:', error.code || error.message);
  }

  const router = express.Router();
  const pageHeaders = res => res.set({ 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' });
  const sendError = (res, error) => {
    if (error instanceof EhrError) return res.status(error.status).json({ error: error.message, code: error.code });
    console.error('[NeoPedCalc] Falha na integração com prontuário:', error?.message);
    return res.status(503).json({ error: 'Integração com o prontuário temporariamente indisponível.' });
  };
  const disabled = res => res.status(503).json({ error: 'Integração com prontuário não está ativa neste servidor.', code: 'disabled' });

  router.get('/ehr/launch', (req, res) => { pageHeaders(res); res.sendFile(path.join(root, 'ehr_launch.html')); });

  router.post('/api/ehr/session', rateLimit({ windowMs: 15 * 60 * 1000, limit: 60, message: { error: 'Muitas aberturas seguidas. Aguarde alguns minutos.' } }), async (req, res) => {
    if (!ehr.enabled) return disabled(res);
    try {
      const launch = await verifyLaunchToken(req.body?.token, { clients, audience: appUrl });
      if (!consume(launch.client.iss + ':' + launch.jti, launch.exp)) throw new EhrError('replayed', REPLAYED_MESSAGE, 409);
      await audit(launch);
      const session = await createSession(ehr.sessionSecret, { iss: launch.client.iss, hospital: launch.client.name });
      res.cookie(EHR_COOKIE, session, { ...cookieOptions, maxAge: SESSION_TTL_S * 1000 });
      res.json({
        hospital: { name: launch.client.name, system: launch.client.system, sandbox: launch.client.iss === SANDBOX_ISSUER },
        ...launch.context,
        sessionExpiresAt: new Date(Date.now() + SESSION_TTL_S * 1000).toISOString()
      });
    } catch (error) { sendError(res, error); }
  });

  router.get('/api/ehr/status', async (req, res) => {
    const session = await sessionFor(req);
    res.json({ enabled: ehr.enabled, sandbox: Boolean(sandbox), session: session ? { hospital: session.hospital, expiresAt: new Date(session.exp * 1000).toISOString() } : null });
  });

  router.post('/api/ehr/logout', (req, res) => { res.clearCookie(EHR_COOKIE, cookieOptions); res.json({ ok: true }); });

  if (sandbox) {
    router.get('/ehr/sandbox', (req, res) => { pageHeaders(res); res.sendFile(path.join(root, 'ehr_sandbox.html')); });
    router.post('/api/ehr/sandbox-token', rateLimit({ windowMs: 15 * 60 * 1000, limit: 120 }), async (req, res) => {
      try {
        const claims = { patient: req.body?.patient, encounter: req.body?.encounter, practitioner: req.body?.practitioner };
        const context = normalizeLaunchClaims(claims); // friendly validation before signing
        const token = await new SignJWT({ ...context })
          .setProtectedHeader({ alg: SANDBOX_ALG, typ: 'JWT' })
          .setIssuer(SANDBOX_ISSUER).setAudience(appUrl).setJti(randomUUID())
          .setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1000) + LAUNCH_MAX_AGE_S)
          .sign(sandbox.privateKey);
        res.json({ url: appUrl + '/ehr/launch#token=' + token, token });
      } catch (error) { sendError(res, error); }
    });
  }

  return { router, sessionFor, sandboxEnabled: Boolean(sandbox) };
}

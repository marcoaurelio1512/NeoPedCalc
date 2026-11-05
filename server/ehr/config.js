// EHR (prontuário) integration configuration.
// Hospitals are registered through EHR_CLIENTS (JSON array). Each one signs its
// launch tokens with its OWN private key; only the public key lives here.
// A missing or malformed configuration disables the integration — it never
// grants access.

import { randomBytes } from 'node:crypto';

export const ALLOWED_ALGS = Object.freeze(['RS256', 'PS256', 'ES256']);
export const SANDBOX_ISSUER = 'neopedcalc-sandbox';
const SYSTEMS = new Set(['MV', 'TASY', 'OTHER']);
const MIN_SECRET_LENGTH = 32;

function parseClient(raw, index) {
  const where = `EHR_CLIENTS[${index}]`;
  if (!raw || typeof raw !== 'object') throw new Error(`${where}: objeto esperado`);
  const iss = typeof raw.iss === 'string' ? raw.iss.trim() : '';
  if (!/^[a-z0-9][a-z0-9._-]{2,63}$/i.test(iss)) throw new Error(`${where}.iss inválido`);
  if (iss === SANDBOX_ISSUER) throw new Error(`${where}.iss é reservado`);
  if (!ALLOWED_ALGS.includes(raw.alg)) throw new Error(`${where}.alg deve ser ${ALLOWED_ALGS.join(', ')}`);
  if (typeof raw.publicKey !== 'string' || !raw.publicKey.includes('BEGIN PUBLIC KEY')) throw new Error(`${where}.publicKey deve ser PEM (SPKI)`);
  const system = String(raw.system || 'OTHER').toUpperCase();
  if (!SYSTEMS.has(system)) throw new Error(`${where}.system deve ser MV, TASY ou OTHER`);
  return Object.freeze({
    iss,
    name: typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim().slice(0, 120) : iss,
    system,
    alg: raw.alg,
    publicKey: raw.publicKey.replace(/\\n/g, '\n'),
    active: raw.active !== false
  });
}

export function parseClients(json) {
  if (!json?.trim()) return [];
  const list = JSON.parse(json);
  if (!Array.isArray(list)) throw new Error('EHR_CLIENTS deve ser um array JSON');
  const clients = list.map(parseClient);
  const duplicated = clients.find((c, i) => clients.findIndex(o => o.iss === c.iss) !== i);
  if (duplicated) throw new Error(`EHR_CLIENTS: iss duplicado (${duplicated.iss})`);
  return clients;
}

/**
 * @returns {{ enabled: boolean, sandbox: boolean, clients: object[], sessionSecret: Uint8Array|null, problems: string[], ephemeralSecret: boolean }}
 */
export function loadEhrConfig(env, { production }) {
  const problems = [];
  let clients = [];
  try { clients = parseClients(env.EHR_CLIENTS); } catch (error) { problems.push(error.message); }
  const sandboxFlag = env.EHR_SANDBOX?.trim().toLowerCase();
  // Sandbox (fake hospital) is on by default only outside production.
  const sandbox = sandboxFlag ? sandboxFlag === 'true' : !production;
  let secret = env.EHR_SESSION_SECRET?.trim() || '';
  let ephemeralSecret = false;
  if (secret && secret.length < MIN_SECRET_LENGTH) {
    problems.push(`EHR_SESSION_SECRET deve ter pelo menos ${MIN_SECRET_LENGTH} caracteres`);
    secret = '';
  }
  if (!secret && !production) {
    // Development only: sessions are lost on restart, which is acceptable locally.
    secret = randomBytes(32).toString('hex');
    ephemeralSecret = true;
  }
  if (!secret && (clients.length || sandbox)) problems.push('EHR_SESSION_SECRET ausente');
  const enabled = Boolean(secret) && problems.length === 0 && (clients.length > 0 || sandbox);
  return {
    enabled,
    sandbox: enabled && sandbox,
    clients: enabled ? clients : [],
    sessionSecret: enabled ? new TextEncoder().encode(secret) : null,
    problems,
    ephemeralSecret
  };
}

export function describeEhr(state) {
  if (state.enabled) return `Prontuário: ${state.clients.length} hospital(is) configurado(s)${state.sandbox ? ' + SANDBOX ATIVO' : ''}`;
  if (state.problems.length) return `Prontuário: DESATIVADO (${state.problems.join('; ')})`;
  return 'Prontuário: não configurado';
}

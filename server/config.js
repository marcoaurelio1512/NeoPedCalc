// Startup configuration, validated per integration.
// Only the essentials (public URL, port) are fatal. Supabase and Stripe are
// validated independently: a missing or malformed integration is disabled and
// logged, never initialised with bad credentials, and never treated as
// "access granted" (see the protected-path middleware in index.js).

const DEFAULT_PORT = 8080;
const DEV_URL = 'http://localhost:' + DEFAULT_PORT;

const SUPABASE_KEYS = ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY'];
const STRIPE_KEYS = ['STRIPE_SECRET_KEY', 'STRIPE_PRICE_MONTHLY', 'STRIPE_PRICE_ANNUAL'];

function isHttpsUrl(value) {
  try { return new URL(value).protocol === 'https:'; } catch { return false; }
}

const SUPABASE_RULES = {
  SUPABASE_URL: isHttpsUrl,
  SUPABASE_ANON_KEY: value => value.length >= 20,
  SUPABASE_SERVICE_ROLE_KEY: value => value.length >= 20
};
const STRIPE_RULES = {
  STRIPE_SECRET_KEY: value => /^(sk|rk)_(test|live)_\S+$/.test(value),
  STRIPE_PRICE_MONTHLY: value => /^price_\S+$/.test(value),
  STRIPE_PRICE_ANNUAL: value => /^price_\S+$/.test(value)
};

export function checkIntegration(env, keys, rules) {
  const missing = keys.filter(key => !env[key]?.trim());
  const invalid = keys.filter(key => env[key]?.trim() && !rules[key](env[key].trim()));
  return { configured: missing.length === 0 && invalid.length === 0, missing, invalid };
}

function resolveAppUrl(env, production) {
  const raw = env.APP_URL?.trim() || (env.RAILWAY_PUBLIC_DOMAIN ? 'https://' + env.RAILWAY_PUBLIC_DOMAIN.trim() : '');
  if (!raw) {
    if (production) throw new Error('Configuração essencial ausente: APP_URL (ou RAILWAY_PUBLIC_DOMAIN).');
    return DEV_URL;
  }
  // Accept a bare domain ("app.up.railway.app"), as often pasted into hosting panels.
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : 'https://' + raw;
  let origin;
  try { origin = new URL(withScheme).origin; } catch { throw new Error('APP_URL inválida: informe uma URL completa, ex.: https://exemplo.com'); }
  if (production && !origin.startsWith('https://')) throw new Error('APP_URL deve utilizar HTTPS em produção.');
  return origin;
}

function resolvePort(env) {
  const port = Number(env.PORT || DEFAULT_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT inválida: ' + env.PORT);
  return port;
}

// Throws only for fatal (essential) problems; everything else is reported.
export function loadConfig(env) {
  const production = env.NODE_ENV === 'production';
  const supabase = checkIntegration(env, SUPABASE_KEYS, SUPABASE_RULES);
  const stripe = checkIntegration(env, STRIPE_KEYS, STRIPE_RULES);
  return {
    production,
    environment: production ? 'production' : (env.NODE_ENV || 'development'),
    appUrl: resolveAppUrl(env, production),
    port: resolvePort(env),
    // Development keeps listening on loopback only; production must bind every interface.
    host: env.HOST?.trim() || (production ? '0.0.0.0' : '127.0.0.1'),
    supabase,
    stripe,
    // Free local preview (calculators unlocked) exists ONLY outside production.
    demo: !production && !(supabase.configured && stripe.configured),
    // TEMPORARY test switch: OPEN_ACCESS=true unlocks the calculators for everyone,
    // even in production. Remove the variable to restore the paywall (no code change).
    openAccess: env.OPEN_ACCESS?.trim().toLowerCase() === 'true'
  };
}

export function describeIntegration(name, state) {
  if (state.configured) return `${name}: configurado`;
  const parts = [];
  if (state.missing.length) parts.push('ausentes ' + state.missing.join(', '));
  if (state.invalid.length) parts.push('inválidas ' + state.invalid.join(', '));
  return `${name}: DESATIVADO (${parts.join('; ')})`;
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

const APP_URL = 'https://example.com';
const NO_INTEGRATIONS = { SUPABASE_URL: '', SUPABASE_ANON_KEY: '', SUPABASE_SERVICE_ROLE_KEY: '', STRIPE_SECRET_KEY: '', STRIPE_PRICE_MONTHLY: '', STRIPE_PRICE_ANNUAL: '', RAILWAY_PUBLIC_DOMAIN: '' };
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
  assert.deepEqual({ status: body.status, application: body.application, environment: body.environment, integrations: body.integrations }, { status: 'ok', application: 'NeoPedCalc', environment: 'production', integrations: { supabase: 'not_configured', stripe: 'not_configured' } });
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
  assert.deepEqual(health.integrations, { supabase: 'configured', stripe: 'not_configured' });
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
  assert.deepEqual(health.integrations, { supabase: 'not_configured', stripe: 'not_configured' });
  await assertProtectedBlocked(base, '/conta.html?service=unavailable');
});

test('full configuration: anonymous users are redirected to sign in, secrets and cross-origin writes blocked', async t => {
  const { base } = await startServer(t, 3179, { ...SUPABASE, ...STRIPE });
  const health = await (await fetch(base + '/health')).json();
  assert.deepEqual(health.integrations, { supabase: 'configured', stripe: 'configured' });
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

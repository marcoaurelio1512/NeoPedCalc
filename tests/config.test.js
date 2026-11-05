import test from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig, describeIntegration } from '../server/config.js';

const SUPABASE = { SUPABASE_URL: 'https://example.supabase.co', SUPABASE_ANON_KEY: 'anon-key-0123456789abcdef', SUPABASE_SERVICE_ROLE_KEY: 'service-key-0123456789abcdef' };
const STRIPE = { STRIPE_SECRET_KEY: 'sk_test_placeholder', STRIPE_PRICE_MONTHLY: 'price_test_monthly', STRIPE_PRICE_ANNUAL: 'price_test_annual' };
const PROD = { NODE_ENV: 'production', APP_URL: 'https://neopedcalc-production.up.railway.app' };

test('production starts with only essentials and reports both integrations disabled', () => {
  const config = loadConfig(PROD);
  assert.equal(config.production, true);
  assert.equal(config.demo, false, 'production is never a free preview');
  assert.equal(config.supabase.configured, false);
  assert.equal(config.stripe.configured, false);
  assert.deepEqual(config.supabase.missing, ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY']);
});

test('production defaults to 0.0.0.0:8080 and honours PORT/HOST from the platform', () => {
  assert.equal(loadConfig(PROD).host, '0.0.0.0');
  assert.equal(loadConfig(PROD).port, 8080);
  assert.equal(loadConfig({ ...PROD, PORT: '5123' }).port, 5123);
  assert.equal(loadConfig({ NODE_ENV: 'development' }).host, '127.0.0.1', 'dev stays on loopback');
});

test('essential configuration problems are fatal', () => {
  assert.throws(() => loadConfig({ NODE_ENV: 'production' }), /APP_URL/);
  assert.throws(() => loadConfig({ ...PROD, APP_URL: 'http://insecure.example' }), /HTTPS/);
  assert.throws(() => loadConfig({ ...PROD, APP_URL: 'not a url' }), /APP_URL inválida/);
  assert.throws(() => loadConfig({ ...PROD, PORT: 'abc' }), /PORT/);
});

test('APP_URL without scheme is treated as HTTPS', () => {
  assert.equal(loadConfig({ NODE_ENV: 'production', APP_URL: 'neopedcalc-production.up.railway.app' }).appUrl, 'https://neopedcalc-production.up.railway.app');
});

test('APP_URL falls back to the Railway public domain', () => {
  assert.equal(loadConfig({ NODE_ENV: 'production', RAILWAY_PUBLIC_DOMAIN: 'neo.up.railway.app' }).appUrl, 'https://neo.up.railway.app');
});

test('each integration is validated independently', () => {
  const onlySupabase = loadConfig({ ...PROD, ...SUPABASE });
  assert.equal(onlySupabase.supabase.configured, true);
  assert.equal(onlySupabase.stripe.configured, false);
  const onlyStripe = loadConfig({ ...PROD, ...STRIPE });
  assert.equal(onlyStripe.supabase.configured, false);
  assert.equal(onlyStripe.stripe.configured, true);
  const full = loadConfig({ ...PROD, ...SUPABASE, ...STRIPE });
  assert.equal(full.supabase.configured && full.stripe.configured, true);
});

test('malformed credentials disable the integration instead of being used', () => {
  const config = loadConfig({ ...PROD, ...SUPABASE, ...STRIPE, SUPABASE_URL: 'not-a-url', STRIPE_SECRET_KEY: 'pk_live_wrong_key_type', STRIPE_PRICE_ANNUAL: '  ' });
  assert.equal(config.supabase.configured, false);
  assert.deepEqual(config.supabase.invalid, ['SUPABASE_URL']);
  assert.equal(config.stripe.configured, false);
  assert.deepEqual(config.stripe.invalid, ['STRIPE_SECRET_KEY']);
  assert.deepEqual(config.stripe.missing, ['STRIPE_PRICE_ANNUAL']);
});

test('free preview only exists outside production', () => {
  assert.equal(loadConfig({ NODE_ENV: 'development' }).demo, true);
  assert.equal(loadConfig({ NODE_ENV: 'development', ...SUPABASE, ...STRIPE }).demo, false);
});

test('log description names variables but never their values', () => {
  const text = describeIntegration('Stripe', loadConfig({ ...PROD, STRIPE_SECRET_KEY: 'sk_test_secretvalue' }).stripe);
  assert.match(text, /DESATIVADO/);
  assert.match(text, /STRIPE_PRICE_MONTHLY/);
  assert.doesNotMatch(text, /secretvalue/);
});

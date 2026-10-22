import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { rateLimit } from 'express-rate-limit';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { hasAccess, isProtectedPath, publicUser } from './access.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = process.env;
const production = env.NODE_ENV === 'production';
const required = ['APP_URL','SUPABASE_URL','SUPABASE_ANON_KEY','SUPABASE_SERVICE_ROLE_KEY','STRIPE_SECRET_KEY','STRIPE_PRICE_MONTHLY','STRIPE_PRICE_ANNUAL'];
const configured = required.every(key => Boolean(env[key]));
const demo = !configured && !production;
if (production && !configured) throw new Error('Configuração de produção incompleta: ' + required.filter(key => !env[key]).join(', '));
const appUrl = new URL(env.APP_URL || 'http://localhost:3000').origin;
if (production && !appUrl.startsWith('https://')) throw new Error('APP_URL deve utilizar HTTPS em produção.');
const stripe = configured ? new Stripe(env.STRIPE_SECRET_KEY, { maxNetworkRetries: 2, timeout: 15000 }) : null;
const supabaseOptions = { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } };
const admin = configured ? createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, supabaseOptions) : null;
const userClient = () => createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, supabaseOptions);
const prices = [env.STRIPE_PRICE_MONTHLY, env.STRIPE_PRICE_ANNUAL];
const app = express();
app.disable('x-powered-by');
if (env.TRUST_PROXY) app.set('trust proxy', Number(env.TRUST_PROXY));
app.use(helmet({ contentSecurityPolicy: { directives: {
  defaultSrc: ["'self'"], scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net', 'https://unpkg.com'],
  scriptSrcAttr: ["'unsafe-inline'"], styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
  imgSrc: ["'self'", 'data:', 'blob:', 'https:'], fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
  connectSrc: ["'self'", 'https://cdn.jsdelivr.net', 'https://cdnjs.cloudflare.com'], frameSrc: ["'self'", 'blob:'], objectSrc: ["'none'"],
  upgradeInsecureRequests: production ? [] : null
} }, crossOriginEmbedderPolicy: false, strictTransportSecurity: production ? undefined : false }));
app.use(cookieParser());
app.use(express.json({ limit: '20kb' }));
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store');
  if (!['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    if (req.headers.origin !== appUrl || !req.is('application/json')) return res.status(403).json({ error: 'Origem da solicitação inválida.' });
  }
  next();
});
const cookieOptions = { httpOnly: true, sameSite: 'lax', secure: production, path: '/', maxAge: 30 * 86400000 };
function setSession(res, session) {
  res.cookie('np_access', session.access_token, cookieOptions);
  res.cookie('np_refresh', session.refresh_token, cookieOptions);
}
function clearSession(res) {
  res.clearCookie('np_access', cookieOptions);
  res.clearCookie('np_refresh', cookieOptions);
}
async function authenticate(req, res) {
  if (!configured) return null;
  const auth = userClient();
  let token = req.cookies.np_access;
  let result = token ? await auth.auth.getUser(token) : null;
  if (!result?.data?.user && req.cookies.np_refresh) {
    const refreshed = await auth.auth.refreshSession({ refresh_token: req.cookies.np_refresh });
    if (refreshed.data.session) {
      setSession(res, refreshed.data.session);
      token = refreshed.data.session.access_token;
      result = await auth.auth.getUser(token);
    }
  }
  if (!result?.data?.user) return null;
  return { user: result.data.user, token };
}
async function requireAuth(req, res, next) {
  const identity = await authenticate(req, res);
  if (!identity) return res.status(401).json({ error: configured ? 'Entre na sua conta para continuar.' : 'Login indisponível na prévia. Configure os serviços no servidor.' });
  req.identity = identity;
  next();
}
async function customerId(user, create = false) {
  const { data, error } = await admin.from('billing_accounts').select('stripe_customer_id').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  if (data) return data.stripe_customer_id;
  if (!create) return null;
  const customer = await stripe.customers.create({ email: user.email, metadata: { supabase_user_id: user.id } }, { idempotencyKey: 'neoped-customer-' + user.id });
  const saved = await admin.from('billing_accounts').upsert({ user_id: user.id, stripe_customer_id: customer.id }, { onConflict: 'user_id' });
  if (saved.error) throw saved.error;
  return customer.id;
}
async function billingStatus(user) {
  const customer = await customerId(user);
  if (!customer) return { active: false, customer: null, status: 'none', hasSubscription: false };
  const subscriptions = await stripe.subscriptions.list({ customer, status: 'all', limit: 100 });
  return { hasSubscription: subscriptions.data.some(s => !['canceled','incomplete_expired'].includes(s.status) && s.items.data.some(item => prices.includes(item.price.id))), active: hasAccess(subscriptions.data, prices), customer, status: subscriptions.data.find(s => s.items.data.some(item => prices.includes(item.price.id)))?.status || 'none' };
}
app.get('/api/health', (req,res) => res.json({ ok: true, mode: demo ? 'preview' : 'configured' }));
let pricingCache = null;
app.get('/api/config', async (req, res) => {
  if (demo) return res.json({ demo: true, prices: {} });
  if (!pricingCache || pricingCache.expires < Date.now()) {
    const data = await Promise.all(prices.map(id => stripe.prices.retrieve(id)));
    pricingCache = { expires: Date.now() + 60000, data: Object.fromEntries(data.map((price, index) => [index ? 'annual' : 'monthly', { amount: price.unit_amount, currency: price.currency, interval: price.recurring?.interval, active: price.active }])) };
  }
  res.json({ demo: false, prices: pricingCache.data });
});
const authLimiter = rateLimit({ windowMs: 15*60*1000, limit: 25, standardHeaders: 'draft-8', legacyHeaders: false, message: { error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' } });
app.use('/api/auth', authLimiter);
app.post('/api/auth/:action', async (req, res) => {
  if (!configured) return res.status(503).json({ error: 'Esta é uma prévia local. Configure Supabase e Stripe para ativar contas e assinaturas.' });
  const { action } = req.params;
  const { email, password, terms, access_token, refresh_token, token_hash, type } = req.body;
  const auth = userClient();
  if (['login','register','recover'].includes(action) && (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)) return res.status(400).json({ error: 'Informe um e-mail válido.' });
  if (['login','register','password'].includes(action) && (typeof password !== 'string' || password.length < (action === 'login' ? 1 : 12) || password.length > 128)) return res.status(400).json({ error: 'A nova senha deve ter entre 12 e 128 caracteres.' });
  if (action === 'register') {
    if (terms !== true) return res.status(400).json({ error: 'Leia e aceite os termos para criar sua conta.' });
    const { data, error } = await auth.auth.signUp({ email, password, options: { emailRedirectTo: appUrl + '/conta.html', data: { terms_version: '2026-10-16', terms_accepted_at: new Date().toISOString() } } });
    if (error) return res.status(400).json({ error: 'Não foi possível criar a conta. Confira os dados ou tente recuperar sua senha.' });
    if (data.session) setSession(res, data.session);
    return res.json({ confirmationRequired: !data.session });
  }
  if (action === 'login') {
    const { data, error } = await auth.auth.signInWithPassword({ email, password });
    if (error || !data.session) return res.status(401).json({ error: 'E-mail ou senha inválidos. Verifique também a confirmação do seu e-mail.' });
    setSession(res, data.session); return res.json({ ok: true });
  }
  if (action === 'recover') {
    await auth.auth.resetPasswordForEmail(email, { redirectTo: appUrl + '/conta.html?recovery=1' });
    return res.json({ message: 'Se houver uma conta com esse e-mail, você receberá as instruções de recuperação.' });
  }
  if (action === 'verify') {
    let result;
    if (typeof token_hash === 'string' && ['signup','recovery','email'].includes(type)) result = await auth.auth.verifyOtp({ token_hash, type });
    else if (typeof access_token === 'string' && typeof refresh_token === 'string') result = await auth.auth.setSession({ access_token, refresh_token });
    else return res.status(400).json({ error: 'Link inválido.' });
    if (result.error || !result.data.session) return res.status(400).json({ error: 'Link expirado ou inválido. Solicite um novo e-mail.' });
    const verified = await auth.auth.getUser(result.data.session.access_token);
    if (!verified.data.user) return res.status(401).json({ error: 'Não foi possível verificar sua conta.' });
    setSession(res, result.data.session); return res.json({ ok: true });
  }
  if (action === 'logout') {
    if (req.cookies.np_access) await admin.auth.admin.signOut(req.cookies.np_access, 'local').catch(() => {});
    clearSession(res); return res.json({ ok: true });
  }
  if (action === 'password') {
    const identity = await authenticate(req, res);
    if (!identity) return res.status(401).json({ error: 'Link expirado. Solicite uma nova recuperação de senha.' });
    const client = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, { ...supabaseOptions, global: { headers: { Authorization: 'Bearer ' + identity.token } } });
    const result = await client.auth.updateUser({ password });
    if (result.error) return res.status(400).json({ error: 'Não foi possível atualizar a senha. Tente uma senha diferente.' });
    return res.json({ ok: true });
  }
  res.status(404).json({ error: 'Operação não encontrada.' });
});
app.get('/api/account', requireAuth, async (req, res) => res.json({ user: publicUser(req.identity.user), billing: await billingStatus(req.identity.user) }));
app.post('/api/checkout', rateLimit({ windowMs: 15*60*1000, limit: 20, message: { error: 'Aguarde antes de tentar iniciar outro pagamento.' } }), requireAuth, async (req, res) => {
  const plan = req.body.plan;
  if (!['monthly','annual'].includes(plan)) return res.status(400).json({ error: 'Plano inválido.' });
  const status = await billingStatus(req.identity.user);
  if (status.hasSubscription) return res.status(409).json({ error: 'Você já possui uma assinatura. Gerencie o plano ou regularize o pagamento em Gerenciar assinatura.' });
  const customer = status.customer || await customerId(req.identity.user, true);
  const price = plan === 'monthly' ? prices[0] : prices[1];
  const selected = await stripe.prices.retrieve(price);
  if (!selected.active || selected.type !== 'recurring' || selected.recurring.interval !== (plan === 'monthly' ? 'month' : 'year') || selected.recurring.interval_count !== 1) throw new Error('Preço recorrente incompatível com o plano.');
  const open = await stripe.checkout.sessions.list({ customer, status: 'open', limit: 100 });
  let session = open.data.find(item => item.metadata?.plan === plan && item.mode === 'subscription');
  if (!session) {
    for (const item of open.data.filter(item => item.mode === 'subscription')) await stripe.checkout.sessions.expire(item.id);
    session = await stripe.checkout.sessions.create({ customer, mode: 'subscription', line_items: [{ price, quantity: 1 }], client_reference_id: req.identity.user.id, metadata: { plan }, subscription_data: { metadata: { supabase_user_id: req.identity.user.id } }, success_url: appUrl + '/conta.html?checkout=success', cancel_url: appUrl + '/conta.html?checkout=cancelled', allow_promotion_codes: true }, { idempotencyKey: `checkout-${req.identity.user.id}-${plan}-${Math.floor(Date.now()/30000)}` });
  }
  res.json({ url: session.url });
});
app.post('/api/billing-portal', requireAuth, async (req, res) => {
  const customer = await customerId(req.identity.user);
  if (!customer) return res.status(400).json({ error: 'Sua conta ainda não possui uma assinatura.' });
  const session = await stripe.billingPortal.sessions.create({ customer, return_url: appUrl + '/conta.html' });
  res.json({ url: session.url });
});
app.use('/api', (req,res) => res.status(404).json({ error: 'Rota não encontrada.' }));
// All calculator documents and their assets are protected on the SERVER.
// A successful checkout redirect is never treated as proof of payment.
app.use(async (req,res,next) => {
  if (!isProtectedPath(req.path)) return next();
  res.set('Cache-Control', 'private, no-store');
  if (demo) return next();
  const identity = await authenticate(req,res);
  if (!identity) return res.redirect(303, '/conta.html');
  const status = await billingStatus(identity.user);
  if (!status.active) return res.redirect(303, '/conta.html?subscription=required');
  next();
});
const staticOptions = { dotfiles: 'deny', index: false, redirect: false, setHeaders(res, file) {
  const relative = path.relative(root,file).split(path.sep).join('/');
  if (relative.startsWith('files/')) res.set('Cache-Control','private, no-store');
  else if (relative.startsWith('js/vendor/')) res.set('Cache-Control','public, max-age=31536000, immutable');
  else res.set('Cache-Control','public, max-age=0, must-revalidate');
} };
app.get('/', (req,res) => res.sendFile(path.join(root,'index.html')));
// Only named public directories are served. Source files, secrets and backups are never exposed.
for (const dir of ['css','js','images','files']) app.use('/'+dir, express.static(path.join(root,dir),staticOptions));
const publicPages = new Set(['index.html','selecao_calculadoras.html','calculadoras_neonatais.html','calculadoras_pediatricas.html','bibliografia.html','advertencias.html','privacidade.html','planos.html','conta.html','pagina_indisponivel.html']);
app.get('/:page', (req,res,next) => publicPages.has(req.params.page) ? res.sendFile(path.join(root,req.params.page)) : next());
app.use((req,res) => res.status(404).sendFile(path.join(root,'404.html')));
app.use((error,req,res,next) => {
  console.error('Falha no servidor:', error.code || error.type || error.name);
  if (res.headersSent) return next(error);
  const status = error.type === 'entity.parse.failed' ? 400 : error.type === 'entity.too.large' ? 413 : 503;
  const message = status === 503 ? 'Serviço temporariamente indisponível. Tente novamente em instantes.' : 'Solicitação inválida.';
  res.status(status).set('Cache-Control','no-store');
  if (req.path.startsWith('/api')) res.json({ error: message });
  else res.type('html').send('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>NeoPedCalc</title><body><h1>'+message+'</h1><a href="/conta.html">Voltar à conta</a></body></html>');
});
const port = Number(env.PORT || 3000);
app.listen(port, env.HOST || '127.0.0.1', () => console.log(`NeoPedCalc: ${appUrl} (${demo ? 'prévia local, sem cobrança' : 'autenticação e cobrança configuradas'})`));

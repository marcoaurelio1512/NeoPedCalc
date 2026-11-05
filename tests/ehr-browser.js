// E2E do fluxo prontuário → NeoPedCalc usando o hospital de teste (sandbox).
// Uso: TEST_BASE_URL=http://127.0.0.1:8095 node tests/ehr-browser.js  (servidor com EHR_SANDBOX ativo)
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:8080';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
const errors = [];
context.on('page', p => p.on('pageerror', e => errors.push(e.message)));
await mkdir('artifacts', { recursive: true });

const sandbox = await context.newPage();
await sandbox.goto(base + '/ehr/sandbox');
const [tab] = await Promise.all([context.waitForEvent('page'), sandbox.getByRole('button', { name: /Abrir NeoPedCalc/ }).click()]);
await tab.waitForURL('**/selecao_calculadoras.html');
assert.equal(new URL(tab.url()).hash, '', 'token removed from the address bar');
const banner = tab.locator('#np-ehr-banner');
await banner.waitFor();
assert.match(await banner.textContent(), /RN de Maria Teste da Silva/);
assert.match(await banner.textContent(), /TESTE/);
assert.match(await banner.textContent(), /IG corrigida/);
await tab.screenshot({ path: 'artifacts/ehr-selecao-desktop.png' });

async function open(file) {
  await tab.goto(base + '/files/' + file);
  await tab.locator('#np-ehr-banner').waitFor();
  const legal = tab.locator('#neoped-legal-checkbox');
  if (await legal.isVisible().catch(() => false)) { await legal.check(); await tab.locator('#neoped-legal-accept-btn').click(); }
}
const val = sel => tab.locator(sel).inputValue();

await open('drogas_neurologicas_neonatal.html');
assert.equal(await val('#peso'), '1.58', 'kg field');
assert.match(await val('#dataNascimento'), /^\d{4}-\d{2}-\d{2}$/, 'birth date');
await tab.screenshot({ path: 'artifacts/ehr-drogas-neonatal.png' });

await open('TRIPs%20Score.html');
assert.equal(await val('#peso'), '1580', 'grams field');
await open('crib2_neonatal.html');
assert.equal(await val('#peso'), '1650', 'birth weight (g) field');
await open('avaliacao_ictericia_neonatal_NICE_UK.html');
assert.match(await val('#nascimento'), /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, 'datetime-local birth');
await open('calculadora-obstetrica.html');
assert.equal(await val('#data_nascimento'), '', 'obstetric calculator untouched');

await open('antropometria.html');
assert.equal(await val('#peso'), '1.58');
await tab.fill('#peso', '1.7');
await tab.evaluate(() => navigator.clipboard.writeText('Relatório de teste'));
let copied = await tab.evaluate(() => navigator.clipboard.readText());
assert.match(copied, /^━━ NeoPedCalc · Identificação \(prontuário\)/);
assert.match(copied, /Registro: T-100234/);
assert.match(copied, /⚠ Alterado manualmente nesta calculadora: .*1\.7/);
assert.ok(copied.endsWith('Relatório de teste'));
await tab.evaluate(() => { const t = document.createElement('textarea'); t.value = 'Via execCommand'; document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); });
copied = await tab.evaluate(() => navigator.clipboard.readText());
assert.match(copied, /Paciente: RN de Maria Teste da Silva/, 'execCommand path also gets the header');
assert.ok(copied.endsWith('Via execCommand'));

await tab.setViewportSize({ width: 375, height: 800 });
await tab.screenshot({ path: 'artifacts/ehr-antropometria-375.png' });
const overflow = await tab.evaluate(() => document.getElementById('np-ehr-banner').scrollWidth > window.innerWidth);
assert.equal(overflow, false, 'banner fits at 375px');

tab.once('dialog', d => d.accept());
await tab.getByRole('button', { name: 'Encerrar paciente' }).click();
await tab.waitForLoadState('load');
assert.equal(await tab.locator('#np-ehr-banner').count(), 0, 'patient ended');

assert.deepEqual(errors, [], 'no page errors');
await browser.close();
console.log('EHR browser flow OK');

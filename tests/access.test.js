import test from 'node:test';
import assert from 'node:assert/strict';
import { hasAccess, isProtectedPath } from '../server/access.js';
const sub = (status, price = 'price_monthly', extra = {}) => ({ status, items: { data: [{ price: { id: price } }] }, ...extra });
const prices = ['price_monthly','price_annual'];
test('only an active or trialing subscription for this product grants access', () => {
  for (const status of ['active','trialing']) assert.equal(hasAccess([sub(status)], prices), true);
  for (const status of ['past_due','unpaid','canceled','incomplete','incomplete_expired','paused','unknown']) assert.equal(hasAccess([sub(status)],prices),false);
  assert.equal(hasAccess([sub('active','price_other')],prices),false);
  assert.equal(hasAccess([sub('active','price_monthly',{ pause_collection: { behavior:'void' } })],prices),false);
  assert.equal(hasAccess([], prices),false);
});
test('all calculator resources are protected, including encoded or uppercase paths', () => {
  for (const pathname of ['/files/apgar.html','/files/ballard/ballard.htm','/files/NutriPedWebapp/js/chart.min.js','/FILES/apgar.html','/%66iles/apgar.html','/files%2fapgar.html','/calculadoras_neonatais.html','/selecao_calculadoras.html','/CALCULADORAS_PEDIATRICAS.HTML','/%bad']) assert.equal(isProtectedPath(pathname),true,pathname);
  for (const pathname of ['/','/conta.html','/planos.html','/css/neoped-modern.css','/js/catalog-data.js','/privacidade.html']) assert.equal(isProtectedPath(pathname),false,pathname);
});

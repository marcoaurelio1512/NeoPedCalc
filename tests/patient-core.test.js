import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Load the browser module without a DOM: only the pure core is exported.
const sandbox = {};
vm.runInNewContext(readFileSync(new URL('../js/neoped-patient.js', import.meta.url), 'utf8'), sandbox);
const core = sandbox.NeopedPatientCore;

const NOW = Date.parse('2026-11-05T12:00:00-03:00');
const PATIENT = { mrn: '123', name: 'RN de Teste', sex: 'F', birthDateTime: '2026-11-03T14:20:00-03:00', gestationalAgeAtBirth: { weeks: 32, days: 4 }, birthWeightG: 1650, weightKg: 1.58, weightMeasuredAt: '2026-11-05T06:00:00-03:00', heightCm: 42 };
const CTX = { hospital: { name: 'Hospital A', sandbox: false }, patient: PATIENT, encounter: { id: 'AT-1', unit: 'UTIN' }, receivedAt: NOW };

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    get length() { return data.size; },
    key: i => [...data.keys()][i] ?? null,
    getItem: k => (data.has(k) ? data.get(k) : null),
    setItem: (k, v) => data.set(k, String(v)),
    removeItem: k => data.delete(k)
  };
}
const plain = value => JSON.parse(JSON.stringify(value));
const field = (id, extra = {}) => ({ id, type: 'number', label: '', min: null, max: null, currentValue: '', ...extra });

test('age is shown in hours for the first 72 h, then days+hours, months, years', () => {
  assert.equal(core.formatAge('2026-11-05T02:00:00-03:00', NOW, 'pt'), '10 h');
  assert.equal(core.formatAge(PATIENT.birthDateTime, NOW, 'pt'), '45 h');
  assert.equal(core.formatAge('2026-10-20T12:00:00-03:00', NOW, 'pt'), '16 d 0 h');
  assert.match(core.formatAge('2026-03-01T12:00:00-03:00', NOW, 'pt'), /^8 m \d+ d$/);
  assert.equal(core.formatAge('2020-01-10T12:00:00-03:00', NOW, 'pt'), '6 a 9 m');
  assert.equal(core.formatAge('2020-01-10T12:00:00-03:00', NOW, 'en'), '6 y 9 mo');
});

test('corrected gestational age adds full days elapsed since birth', () => {
  assert.deepEqual(plain(core.correctedGestationalAge({ weeks: 32, days: 4 }, PATIENT.birthDateTime, NOW)), { weeks: 32, days: 5 });
  assert.deepEqual(plain(core.correctedGestationalAge({ weeks: 32, days: 4 }, '2026-10-29T12:00:00-03:00', NOW)), { weeks: 33, days: 4 });
  assert.equal(core.correctedGestationalAge(null, PATIENT.birthDateTime, NOW), null);
});

test('kg calculators get kg; date fields get the hospital wall-clock date', () => {
  const plan = core.prefillPlan('drogas_neurologicas_neonatal.html', [
    field('peso', { label: 'Peso (kg):' }), field('dataNascimento', { type: 'date' }), field('outro')
  ], PATIENT);
  assert.deepEqual(plain(plan), [{ id: 'peso', source: 'weightKg', value: '1.58' }, { id: 'dataNascimento', source: 'birthDate', value: '2026-11-03' }]);
  const nice = core.prefillPlan('avaliacao_ictericia_neonatal_NICE_UK.html', [field('nascimento', { type: 'datetime-local' })], PATIENT);
  assert.equal(nice[0].value, '2026-11-03T14:20');
});

test('audited gram and birth-weight pages get the right unit and source', () => {
  assert.equal(core.prefillPlan('TRIPs Score.html', [field('peso', { label: 'Peso atual do recém-nascido em gramas (g)', min: '0' })], PATIENT)[0].value, '1580');
  assert.equal(core.prefillPlan('Guideline_europeu_sdr.html', [field('peso', { label: 'Peso atual (g)', min: '300', max: '7000' })], PATIENT)[0].value, '1580');
  const crib = core.prefillPlan('crib2_neonatal.html', [field('peso', { label: 'Peso ao Nascer', min: '300', max: '6000' })], PATIENT);
  assert.deepEqual(plain(crib), [{ id: 'peso', source: 'birthWeightG', value: '1650' }]);
  assert.equal(core.prefillPlan('balanco_hidrico_neonatal.html', [field('peso', { label: 'Peso do RN (kg):', min: '0.1', max: '10' })], PATIENT)[0].value, '1.58');
  assert.equal(core.prefillPlan('dbp_neonatal.html', [field('pesoNascer', { label: 'Peso ao nascer (g, opcional):', min: '300', max: '6000' })], PATIENT)[0].value, '1650');
  assert.equal(core.prefillPlan('pressao_arterial_neonatal.html', [field('pesoNascimento', { label: 'Peso ao Nascer (gramas):', min: '400', max: '5000' })], PATIENT)[0].value, '1650');
});

test('safety net: never fills when label, limits or page disagree with the source', () => {
  // An unaudited page whose #peso is actually in grams: label says (g) → skipped.
  assert.equal(core.prefillPlan('nova_calculadora.html', [field('peso', { label: 'Peso (g)' })], PATIENT).length, 0);
  // Limits contradict the unit (kg value into a field with min 300) → skipped.
  assert.equal(core.prefillPlan('nova_calculadora.html', [field('peso', { min: '300' })], PATIENT).length, 0);
  // Current weight never goes into a birth-weight field.
  assert.equal(core.prefillPlan('nova_calculadora.html', [field('peso', { label: 'Peso ao nascer (kg)' })], PATIENT).length, 0);
  // Out of the calculator's range (21 kg child in a neonatal field limited to 5 kg) → skipped.
  assert.equal(core.prefillPlan('funcao_renal_neonato.html', [field('peso', { label: 'Peso Atual (kg):', min: '0.3', max: '5' })], { ...PATIENT, weightKg: 21 }).length, 0);
  // Obstetric calculator: birth date is the mother's → nothing prefilled.
  assert.equal(core.prefillPlan('calculadora-obstetrica.html', [field('data_nascimento', { type: 'date' })], PATIENT).length, 0);
  // Already typed (or restored) values are never overwritten.
  assert.equal(core.prefillPlan('apgar.html', [field('peso', { currentValue: '2.1' })], PATIENT).length, 0);
  // Missing data → nothing.
  assert.equal(core.prefillPlan('antropometria.html', [field('peso')], { ...PATIENT, weightKg: null }).length, 0);
});

test('report header identifies patient, data provenance and manual edits', () => {
  const header = core.buildReportHeader(CTX, { lang: 'pt', now: NOW, calculatedAt: '05/11/2026 12:00', pageTitle: 'Apgar', edited: ['Peso (kg) = 1.7'] });
  assert.match(header, /Paciente: RN de Teste · Registro: 123 · Atendimento: AT-1/);
  assert.match(header, /Nascimento: 03\/11\/2026 14:20 · Sexo: Feminino · Idade: 45 h/);
  assert.match(header, /IG ao nascer: 32s 4d · IG corrigida: 32s 5d/);
  assert.match(header, /Peso \(medido em 05\/11\/2026 06:00\): 1.58 kg/);
  assert.match(header, /⚠ Alterado manualmente nesta calculadora: Peso \(kg\) = 1.7/);
  const report = 'Apgar 1º min: 8';
  const once = core.withHeader(report, header);
  assert.ok(once.endsWith(report) && once.startsWith('━━ NeoPedCalc'));
  assert.equal(core.withHeader(once, header), once, 'never duplicated');
  assert.equal(core.withHeader('', header), '', 'empty copy untouched');
});

test('context storage: expires, and a new patient wipes previous form state', () => {
  const storage = memoryStorage({ neoped_state_apgar: '{"peso":{"value":"3"}}', neoped_legal_accept_v1: '1' });
  core.saveContext(storage, { patient: PATIENT, hospital: CTX.hospital }, NOW);
  assert.equal(storage.getItem('neoped_state_apgar'), null, 'old patient form state removed');
  assert.equal(storage.getItem('neoped_legal_accept_v1'), '1', 'unrelated keys kept');
  assert.equal(core.readContext(storage, NOW + 1000).patient.mrn, '123');
  assert.equal(core.readContext(storage, NOW + core.CONTEXT_TTL_MS + 1), null, 'expired');
  assert.equal(storage.getItem(core.STORAGE_KEY), null, 'expired context deleted');
  storage.setItem(core.STORAGE_KEY, '{broken');
  assert.equal(core.readContext(storage, NOW), null);
});

// Normalises and validates the clinical claims of an EHR launch token.
// Anything outside a plausible range is REJECTED (never silently clamped):
// a wrong weight prefilled into a dose calculator is worse than no prefill.

export class EhrError extends Error {
  constructor(code, message, status = 400) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

const LIMITS = Object.freeze({
  weightKg: [0.2, 250],
  birthWeightG: [200, 7000],
  heightCm: [20, 250],
  gaWeeks: [20, 45],
  gaDays: [0, 6]
});
const MAX_TEXT = 120;
const MAX_AGE_YEARS = 25;
const FUTURE_TOLERANCE_MS = 5 * 60 * 1000;
const SEXES = new Set(['M', 'F', 'I']);

const fail = (field, reason) => { throw new EhrError('invalid_claims', `Campo inválido no token: ${field} (${reason}).`); };

function text(value, field, { required = false } = {}) {
  if (value == null || value === '') {
    if (required) fail(field, 'obrigatório');
    return null;
  }
  if (typeof value !== 'string' && typeof value !== 'number') fail(field, 'deve ser texto');
  const clean = String(value).replace(/[\u0000-\u001f\u007f]/g, '').trim();
  if (!clean && required) fail(field, 'obrigatório');
  if (clean.length > MAX_TEXT) fail(field, `máximo ${MAX_TEXT} caracteres`);
  return clean || null;
}

function number(value, field, [min, max]) {
  if (value == null || value === '') return null;
  const n = typeof value === 'string' ? Number(value.replace(',', '.')) : value;
  if (typeof n !== 'number' || !Number.isFinite(n)) fail(field, 'deve ser numérico');
  if (n < min || n > max) fail(field, `fora do intervalo ${min}–${max}`);
  return n;
}

// Requires an explicit UTC offset so a birth time is never re-interpreted
// in the server's or the browser's time zone.
function instant(value, field, { required = false, now }) {
  if (value == null || value === '') {
    if (required) fail(field, 'obrigatório');
    return null;
  }
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(value)) {
    fail(field, 'use ISO 8601 com fuso, ex.: 2026-11-03T14:20:00-03:00');
  }
  const ms = Date.parse(value);
  if (Number.isNaN(ms)) fail(field, 'data inexistente');
  if (ms > now + FUTURE_TOLERANCE_MS) fail(field, 'data no futuro');
  return value;
}

function gestationalAge(value) {
  if (value == null) return null;
  if (typeof value !== 'object' || Array.isArray(value)) fail('patient.gestationalAgeAtBirth', 'use { weeks, days }');
  const weeks = number(value.weeks, 'gestationalAgeAtBirth.weeks', LIMITS.gaWeeks);
  if (weeks == null || !Number.isInteger(weeks)) fail('gestationalAgeAtBirth.weeks', 'inteiro obrigatório');
  const days = number(value.days ?? 0, 'gestationalAgeAtBirth.days', LIMITS.gaDays);
  if (!Number.isInteger(days)) fail('gestationalAgeAtBirth.days', 'inteiro');
  return Object.freeze({ weeks, days });
}

function optionalObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

export function normalizeLaunchClaims(claims, { now = Date.now() } = {}) {
  const p = claims?.patient;
  if (!p || typeof p !== 'object' || Array.isArray(p)) fail('patient', 'obrigatório');
  const sex = text(p.sex, 'patient.sex', { required: true }).toUpperCase();
  if (!SEXES.has(sex)) fail('patient.sex', 'use M, F ou I');
  const birthDateTime = instant(p.birthDateTime, 'patient.birthDateTime', { required: true, now });
  if (now - Date.parse(birthDateTime) > MAX_AGE_YEARS * 365.25 * 86400000) fail('patient.birthDateTime', `idade acima de ${MAX_AGE_YEARS} anos`);
  const weightKg = number(p.weightKg, 'patient.weightKg', LIMITS.weightKg);
  const weightMeasuredAt = instant(p.weightMeasuredAt, 'patient.weightMeasuredAt', { now });
  if (weightKg != null && !weightMeasuredAt) fail('patient.weightMeasuredAt', 'obrigatório quando weightKg é enviado');
  const encounter = optionalObject(claims.encounter);
  const practitioner = optionalObject(claims.practitioner);
  return Object.freeze({
    patient: Object.freeze({
      mrn: text(p.mrn, 'patient.mrn', { required: true }),
      name: text(p.name, 'patient.name', { required: true }),
      sex,
      birthDateTime,
      gestationalAgeAtBirth: gestationalAge(p.gestationalAgeAtBirth),
      birthWeightG: number(p.birthWeightG, 'patient.birthWeightG', LIMITS.birthWeightG),
      weightKg,
      weightMeasuredAt,
      heightCm: number(p.heightCm, 'patient.heightCm', LIMITS.heightCm)
    }),
    encounter: Object.freeze({ id: text(encounter.id, 'encounter.id'), unit: text(encounter.unit, 'encounter.unit') }),
    practitioner: Object.freeze({ name: text(practitioner.name, 'practitioner.name'), crm: text(practitioner.crm, 'practitioner.crm') })
  });
}

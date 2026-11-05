/* Sandbox: simula o MV/Tasy gerando o link assinado de abertura. Somente dados fictícios. */
(function () {
  'use strict';
  var HOUR = 3600000, DAY = 86400000;
  var HOSPITAL_OFFSET = '-03:00';
  var form = document.getElementById('sbx-form');
  var errorBox = document.getElementById('sbx-error');

  // Wall-clock in UTC-3 for the datetime-local field.
  function localInput(msAgo) { return new Date(Date.now() - msAgo - 3 * HOUR).toISOString().slice(0, 16); }
  var PRESETS = {
    preterm: { name: 'RN de Maria Teste da Silva', mrn: 'T-100234', encounter: 'AT-55001', unit: 'UTIN', sex: 'F', birth: localInput(2 * DAY + 3 * HOUR), gaWeeks: 32, gaDays: 4, birthWeightG: 1650, weightKg: 1.58, heightCm: 42 },
    term: { name: 'RN de Ana Teste Souza', mrn: 'T-100871', encounter: 'AT-55020', unit: 'Alojamento conjunto', sex: 'M', birth: localInput(10 * HOUR), gaWeeks: 39, gaDays: 2, birthWeightG: 3320, weightKg: 3.25, heightCm: 49.5 },
    infant: { name: 'Pedro Teste Lima', mrn: 'T-200410', encounter: 'AT-56102', unit: 'Enfermaria pediátrica', sex: 'M', birth: localInput(243 * DAY), gaWeeks: 38, gaDays: 0, birthWeightG: 3010, weightKg: 7.9, heightCm: 68 },
    child: { name: 'Júlia Teste Rocha', mrn: 'T-300077', encounter: 'AT-57310', unit: 'UTI pediátrica', sex: 'F', birth: localInput(6 * 365.25 * DAY), gaWeeks: '', gaDays: '', birthWeightG: '', weightKg: 21, heightCm: 116 }
  };

  function applyPreset(key) {
    var preset = PRESETS[key];
    Object.keys(preset).forEach(function (name) { if (form.elements[name]) form.elements[name].value = preset[name]; });
    form.elements.practitioner.value = 'Dra. Teste (CRM 00000)';
    document.querySelectorAll('[data-preset]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.preset === key)); });
  }
  document.querySelectorAll('[data-preset]').forEach(function (b) { b.addEventListener('click', function () { applyPreset(b.dataset.preset); }); });
  applyPreset('preterm');

  function num(name) { var v = form.elements[name].value; return v === '' ? null : Number(v); }
  function now() { return new Date(Date.now() - 3 * HOUR).toISOString().slice(0, 19) + HOSPITAL_OFFSET; }

  function claims() {
    var f = form.elements;
    var weeks = num('gaWeeks');
    var patient = {
      mrn: f.mrn.value, name: f.name.value, sex: f.sex.value,
      birthDateTime: f.birth.value ? f.birth.value + ':00' + HOSPITAL_OFFSET : '',
      gestationalAgeAtBirth: weeks == null ? null : { weeks: weeks, days: num('gaDays') || 0 },
      birthWeightG: num('birthWeightG'), weightKg: num('weightKg'),
      weightMeasuredAt: num('weightKg') == null ? null : now(), heightCm: num('heightCm')
    };
    return { patient: patient, encounter: { id: f.encounter.value, unit: f.unit.value }, practitioner: { name: f.practitioner.value } };
  }

  function decode(token) {
    var part = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(escape(atob(part))));
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    errorBox.textContent = '';
    // Open the tab synchronously (popup blockers), then point it at the signed link.
    var tab = window.open('about:blank', '_blank');
    fetch('/api/ehr/sandbox-token', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(claims()) })
      .then(function (r) { return r.json().then(function (body) { if (!r.ok) throw new Error(body.error || 'Erro ' + r.status); return body; }); })
      .then(function (body) {
        document.getElementById('sbx-payload').textContent = JSON.stringify(decode(body.token), null, 2);
        document.getElementById('sbx-out').hidden = false;
        if (tab) { tab.opener = null; tab.location.href = body.url; } else location.href = body.url;
      })
      .catch(function (error) { if (tab) tab.close(); errorBox.textContent = error.message; });
  });
})();

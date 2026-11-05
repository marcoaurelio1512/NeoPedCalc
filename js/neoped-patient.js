/**
 * NeoPedCalc — paciente vindo do prontuário (MV, Tasy...).
 * Ativo apenas quando a aba foi aberta por /ehr/launch (contexto em sessionStorage).
 *  - faixa fixa com a identificação do paciente (evita calcular no paciente errado);
 *  - preenche peso/altura/nascimento SOMENTE em campos vazios e com unidade confirmada;
 *  - acrescenta a identificação do paciente ao relatório copiado.
 * A parte "core" é pura (sem DOM) e é testada em tests/patient-core.test.js.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'neoped_ehr_context_v1';
  var FORM_STATE_PREFIX = 'neoped_state_';
  var CONTEXT_TTL_MS = 2 * 60 * 60 * 1000;
  var HEADER_MARK = 'NeoPedCalc · ';
  var HOUR = 3600000, DAY = 86400000;

  var TEXT = {
    pt: { region: 'Paciente do prontuário', patient: 'Paciente', mrn: 'Registro', encounter: 'Atendimento', born: 'Nascimento', sex: 'Sexo', age: 'Idade', gaBirth: 'IG ao nascer', gaCorrected: 'IG corrigida', weight: 'Peso', weightAt: 'medido em', birthWeight: 'Peso ao nascer', height: 'Estatura', hospital: 'Hospital', calculatedAt: 'Calculado em', calculator: 'Calculadora', edited: 'Alterado manualmente nesta calculadora', end: 'Encerrar paciente', endConfirm: 'Encerrar este paciente nesta aba? Os campos não serão mais preenchidos.', test: 'TESTE', filled: 'Preenchido a partir do prontuário', headerTitle: 'Identificação (prontuário)', sexes: { M: 'Masculino', F: 'Feminino', I: 'Indeterminado' }, u: { h: 'h', d: 'd', mo: 'm', y: 'a', w: 's' } },
    en: { region: 'Patient from health record', patient: 'Patient', mrn: 'MRN', encounter: 'Encounter', born: 'Born', sex: 'Sex', age: 'Age', gaBirth: 'GA at birth', gaCorrected: 'Corrected GA', weight: 'Weight', weightAt: 'measured', birthWeight: 'Birth weight', height: 'Height', hospital: 'Hospital', calculatedAt: 'Calculated at', calculator: 'Calculator', edited: 'Manually changed in this calculator', end: 'End patient', endConfirm: 'End this patient in this tab? Fields will no longer be prefilled.', test: 'TEST', filled: 'Prefilled from health record', headerTitle: 'Identification (health record)', sexes: { M: 'Male', F: 'Female', I: 'Undetermined' }, u: { h: 'h', d: 'd', mo: 'mo', y: 'y', w: 'w' } },
    es: { region: 'Paciente de la historia clínica', patient: 'Paciente', mrn: 'Registro', encounter: 'Atención', born: 'Nacimiento', sex: 'Sexo', age: 'Edad', gaBirth: 'EG al nacer', gaCorrected: 'EG corregida', weight: 'Peso', weightAt: 'medido el', birthWeight: 'Peso al nacer', height: 'Talla', hospital: 'Hospital', calculatedAt: 'Calculado el', calculator: 'Calculadora', edited: 'Modificado manualmente en esta calculadora', end: 'Cerrar paciente', endConfirm: '¿Cerrar este paciente en esta pestaña? Los campos ya no se completarán.', test: 'PRUEBA', filled: 'Completado desde la historia clínica', headerTitle: 'Identificación (historia clínica)', sexes: { M: 'Masculino', F: 'Femenino', I: 'Indeterminado' }, u: { h: 'h', d: 'd', mo: 'm', y: 'a', w: 's' } }
  };

  // Field id → data source. 'birth' resolves by the input type (date, datetime-local, time).
  var DEFAULT_FIELDS = {
    peso: 'weightKg', weight: 'weightKg', altura: 'heightCm', height: 'heightCm',
    pesoNascimento: 'birthWeightG', pesoNascer: 'birthWeightG',
    dataNascimento: 'birth', data_nascimento: 'birth', birthDate: 'birth', 'birth-date': 'birth',
    nascimento: 'birth', paciente_data_nascimento: 'birth', horaNascimento: 'birth'
  };
  // Audited per calculator (2026-11-05): pages whose #peso is in grams or is the BIRTH weight.
  // null = no prefill at all on that page.
  var PAGE_FIELDS = {
    'Guideline_europeu_sdr.html': { peso: 'weightG' },
    'LUS_Score_Neonatal_modal.html': { peso: 'weightG' },
    'TRIPs Score.html': { peso: 'weightG' },
    'avaliacao_anoxia_neonatal.html': { peso: 'weightG' },
    'crib2_neonatal.html': { peso: 'birthWeightG' },
    'snapp2_neonatal.html': { peso: 'birthWeightG' },
    'calculadora-obstetrica.html': null // data de nascimento é da gestante
  };

  function t(lang) { return TEXT[lang] || TEXT.pt; }

  /** Wall-clock text as recorded by the hospital ("2026-11-03T14:20:00-03:00" → "03/11/2026 14:20"). */
  function formatWallClock(iso) {
    if (typeof iso !== 'string' || iso.length < 16) return '';
    return iso.slice(8, 10) + '/' + iso.slice(5, 7) + '/' + iso.slice(0, 4) + ' ' + iso.slice(11, 16);
  }

  function storageKeys(storage) {
    var keys = [];
    for (var i = 0; i < storage.length; i++) keys.push(storage.key(i));
    return keys;
  }

  function readContext(storage, now) {
    var raw;
    try { raw = storage.getItem(STORAGE_KEY); } catch (e) { return null; }
    if (!raw) return null;
    var ctx;
    try { ctx = JSON.parse(raw); } catch (e) { ctx = null; }
    var valid = ctx && ctx.patient && typeof ctx.patient.name === 'string' && typeof ctx.patient.birthDateTime === 'string' &&
      typeof ctx.receivedAt === 'number' && now - ctx.receivedAt < CONTEXT_TTL_MS && now >= ctx.receivedAt - 60000;
    if (!valid) { try { storage.removeItem(STORAGE_KEY); } catch (e) {} return null; }
    return ctx;
  }

  function clearContext(storage) {
    storageKeys(storage).forEach(function (key) {
      if (key === STORAGE_KEY || (key && key.indexOf(FORM_STATE_PREFIX) === 0)) storage.removeItem(key);
    });
  }

  function saveContext(storage, launchResponse, now) {
    // A new patient must never inherit form values typed for the previous one.
    clearContext(storage);
    var ctx = Object.assign({}, launchResponse, { receivedAt: now });
    storage.setItem(STORAGE_KEY, JSON.stringify(ctx));
    return ctx;
  }

  function formatAge(birthIso, now, lang) {
    var u = t(lang).u;
    var ms = now - Date.parse(birthIso);
    if (!(ms >= 0)) return '';
    if (ms < 72 * HOUR) return Math.floor(ms / HOUR) + ' ' + u.h;
    if (ms < 28 * DAY) return Math.floor(ms / DAY) + ' ' + u.d + ' ' + Math.floor((ms % DAY) / HOUR) + ' ' + u.h;
    var birth = new Date(Date.parse(birthIso)), today = new Date(now);
    var months = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
    if (today.getDate() < birth.getDate()) months -= 1;
    if (months < 24) {
      var anchor = new Date(birth.getTime()); anchor.setMonth(anchor.getMonth() + months);
      return months + ' ' + u.mo + ' ' + Math.max(0, Math.floor((now - anchor.getTime()) / DAY)) + ' ' + u.d;
    }
    return Math.floor(months / 12) + ' ' + u.y + ' ' + (months % 12) + ' ' + u.mo;
  }

  function correctedGestationalAge(ga, birthIso, now) {
    if (!ga || typeof ga.weeks !== 'number') return null;
    var elapsedDays = Math.floor((now - Date.parse(birthIso)) / DAY);
    if (!(elapsedDays >= 0)) return null;
    var total = ga.weeks * 7 + (ga.days || 0) + elapsedDays;
    return { weeks: Math.floor(total / 7), days: total % 7 };
  }

  function formatGa(ga, lang) { return ga ? ga.weeks + t(lang).u.w + ' ' + (ga.days || 0) + 'd' : ''; }

  function resolveSource(spec, inputType) {
    if (spec !== 'birth') return spec;
    return inputType === 'datetime-local' ? 'birthDateTime' : inputType === 'time' ? 'birthTime' : 'birthDate';
  }

  function valueFor(source, patient) {
    switch (source) {
      case 'weightKg': return patient.weightKg == null ? null : String(Math.round(patient.weightKg * 1000) / 1000);
      case 'weightG': return patient.weightKg == null ? null : String(Math.round(patient.weightKg * 1000));
      case 'birthWeightG': return patient.birthWeightG == null ? null : String(Math.round(patient.birthWeightG));
      case 'heightCm': return patient.heightCm == null ? null : String(patient.heightCm);
      case 'birthDate': return patient.birthDateTime.slice(0, 10);
      case 'birthDateTime': return patient.birthDateTime.slice(0, 16);
      case 'birthTime': return patient.birthDateTime.slice(11, 16);
      default: return null;
    }
  }

  var GRAMS = /\(g\b|\bg\)|gramas|gramos|grams|\bem g\b/i;
  var KILOS = /\bkg\b/i;
  // "ao nascer"/"nascimento" — but NOT "recém-nascido" (a current-weight label).
  var AT_BIRTH = /ao nascer|nascimento|at birth|birth weight|al nacer|de nacimiento/i;

  /**
   * Defence in depth: even with the audited map, never fill a field whose label,
   * unit or limits disagree with the data source.
   */
  function isCompatible(source, field) {
    var label = field.label || '';
    var type = field.type || 'text';
    if (source === 'birthDate') return type === 'date';
    if (source === 'birthDateTime') return type === 'datetime-local';
    if (source === 'birthTime') return type === 'time';
    if (type !== 'number' && type !== 'text') return false;
    if (source !== 'heightCm') {
      var isGrams = source === 'weightG' || source === 'birthWeightG';
      if (isGrams && KILOS.test(label)) return false;
      if (!isGrams && GRAMS.test(label)) return false;
      var birthField = AT_BIRTH.test(label);
      if (source === 'birthWeightG' ? !birthField : birthField) return false;
    }
    var n = Number(field.value);
    if (field.min !== '' && field.min != null && n < Number(field.min)) return false;
    if (field.max !== '' && field.max != null && n > Number(field.max)) return false;
    return true;
  }

  /** @returns {Array<{id: string, source: string, value: string}>} */
  function prefillPlan(pageKey, fields, patient) {
    var overrides = Object.prototype.hasOwnProperty.call(PAGE_FIELDS, pageKey) ? PAGE_FIELDS[pageKey] : {};
    if (overrides === null) return [];
    var map = Object.assign({}, DEFAULT_FIELDS, overrides);
    return fields.reduce(function (plan, field) {
      var spec = map[field.id];
      if (!spec || field.currentValue) return plan;
      var source = resolveSource(spec, field.type);
      var value = valueFor(source, patient);
      if (value == null) return plan;
      if (!isCompatible(source, Object.assign({}, field, { value: value }))) return plan;
      return plan.concat([{ id: field.id, source: source, value: value }]);
    }, []);
  }

  function buildReportHeader(ctx, options) {
    var lang = options.lang, now = options.now, s = t(lang), p = ctx.patient;
    var line = function (parts) { return parts.filter(Boolean).join(' · '); };
    var corrected = correctedGestationalAge(p.gestationalAgeAtBirth, p.birthDateTime, now);
    var weight = p.weightKg != null ? s.weight + ' (' + s.weightAt + ' ' + formatWallClock(p.weightMeasuredAt) + '): ' + p.weightKg + ' kg' : '';
    var lines = [
      '━━ ' + HEADER_MARK + s.headerTitle + ' ━━',
      line([s.patient + ': ' + p.name, s.mrn + ': ' + p.mrn, ctx.encounter && ctx.encounter.id ? s.encounter + ': ' + ctx.encounter.id : '']),
      line([s.born + ': ' + formatWallClock(p.birthDateTime), s.sex + ': ' + (s.sexes[p.sex] || p.sex), s.age + ': ' + formatAge(p.birthDateTime, now, lang)]),
      line([p.gestationalAgeAtBirth ? s.gaBirth + ': ' + formatGa(p.gestationalAgeAtBirth, lang) : '', corrected ? s.gaCorrected + ': ' + formatGa(corrected, lang) : '']),
      line([weight, p.birthWeightG != null ? s.birthWeight + ': ' + p.birthWeightG + ' g' : '', p.heightCm != null ? s.height + ': ' + p.heightCm + ' cm' : '']),
      line([ctx.hospital ? s.hospital + ': ' + ctx.hospital.name + (ctx.hospital.sandbox ? ' [' + s.test + ']' : '') : '', ctx.encounter && ctx.encounter.unit]),
      line([s.calculatedAt + ': ' + options.calculatedAt, options.pageTitle ? s.calculator + ': ' + options.pageTitle : '']),
      options.edited && options.edited.length ? '⚠ ' + s.edited + ': ' + options.edited.join(', ') : '',
      '────────────────────────────'
    ];
    return lines.filter(Boolean).join('\n') + '\n';
  }

  function withHeader(text, header) {
    if (typeof text !== 'string' || !text.trim() || text.indexOf(HEADER_MARK) !== -1) return text;
    return header + text;
  }

  global.NeopedPatientCore = {
    STORAGE_KEY: STORAGE_KEY, CONTEXT_TTL_MS: CONTEXT_TTL_MS, PAGE_FIELDS: PAGE_FIELDS,
    readContext: readContext, saveContext: saveContext, clearContext: clearContext,
    formatAge: formatAge, correctedGestationalAge: correctedGestationalAge, formatGa: formatGa, formatWallClock: formatWallClock,
    prefillPlan: prefillPlan, isCompatible: isCompatible, buildReportHeader: buildReportHeader, withHeader: withHeader, text: t
  };
  if (typeof document === 'undefined' || global.__NEOPED_PATIENT_UI__ || document.documentElement.hasAttribute('data-np-ehr-launch')) return;
  global.__NEOPED_PATIENT_UI__ = true;

  /* ───────────────────────── Interface (navegador) ───────────────────────── */
  var ctx = readContext(sessionStorage, Date.now());
  if (!ctx) return;
  var lang = function () { return (global.NEOPED_I18N && global.NEOPED_I18N.lang) || 'pt'; };
  var filled = new Map(); // element → value written from the record

  function pageKey() {
    var path = decodeURIComponent(location.pathname);
    var at = path.indexOf('/files/');
    return at === -1 ? path.split('/').pop() : path.slice(at + 7);
  }
  function labelFor(input) {
    var label = input.id && document.querySelector('label[for="' + CSS.escape(input.id) + '"]');
    if (label) return label.textContent;
    var wrap = input.closest('label');
    if (wrap) return wrap.textContent;
    var prev = input.previousElementSibling;
    return (prev && prev.textContent) || input.getAttribute('aria-label') || input.placeholder || '';
  }

  function prefill() {
    var inputs = Array.from(document.querySelectorAll('input[id]:not([data-np-ehr-checked])')).filter(function (input) { return !input.closest('#np-ehr-banner'); });
    if (!inputs.length) return;
    var byId = {};
    var fields = inputs.map(function (input) {
      input.setAttribute('data-np-ehr-checked', '');
      byId[input.id] = input;
      return { id: input.id, type: input.type, label: labelFor(input), min: input.getAttribute('min'), max: input.getAttribute('max'), currentValue: input.value };
    });
    prefillPlan(pageKey(), fields, ctx.patient).forEach(function (item) {
      var input = byId[item.id];
      input.value = item.value;
      input.classList.add('np-ehr-filled');
      input.title = t(lang()).filled;
      filled.set(input, item.value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  function editedLabels() {
    var out = [];
    filled.forEach(function (value, input) {
      var edited = input.isConnected && input.value !== value;
      input.classList.toggle('np-ehr-edited', edited);
      if (edited) out.push(labelFor(input).replace(/\s+/g, ' ').trim().slice(0, 40) + ' = ' + input.value);
    });
    return out;
  }

  function header() {
    var now = Date.now();
    var calculatedAt = new Intl.DateTimeFormat((global.NEOPED_I18N && global.NEOPED_I18N.locale) || 'pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(now);
    var title = (document.querySelector('h1') || {}).textContent || document.title;
    return buildReportHeader(ctx, { lang: lang(), now: now, calculatedAt: calculatedAt, pageTitle: String(title).replace(/\s+/g, ' ').trim().slice(0, 80), edited: editedLabels() });
  }

  function selectedText() {
    var active = document.activeElement;
    if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT') && typeof active.selectionStart === 'number') return active.value.slice(active.selectionStart, active.selectionEnd);
    return String(global.getSelection ? global.getSelection() : '');
  }

  function hookClipboard() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      var original = navigator.clipboard.writeText.bind(navigator.clipboard);
      navigator.clipboard.writeText = function (text) { return original(withHeader(text, header())); };
    }
    var copying = false;
    var exec = document.execCommand.bind(document);
    document.execCommand = function (command) {
      if (String(command).toLowerCase() !== 'copy') return exec.apply(null, arguments);
      copying = true;
      try { return exec.apply(null, arguments); } finally { copying = false; }
    };
    // Bubble phase on window: runs after any page-level copy handler, so it can wrap its data.
    global.addEventListener('copy', function (event) {
      if (!copying || !event.clipboardData) return;
      var text = event.defaultPrevented ? event.clipboardData.getData('text/plain') : selectedText();
      var wrapped = withHeader(text, header());
      if (wrapped === text) return;
      event.clipboardData.setData('text/plain', wrapped);
      event.preventDefault();
    });
  }

  function node(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

  function renderBanner() {
    var s = t(lang()), p = ctx.patient, now = Date.now();
    var old = document.getElementById('np-ehr-banner');
    if (old) old.remove();
    var bar = node('aside', 'np-ehr-banner'); bar.id = 'np-ehr-banner';
    bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', s.region);
    var who = node('div', 'np-ehr-who');
    who.append(node('strong', 'np-ehr-name', p.name));
    if (ctx.hospital && ctx.hospital.sandbox) who.append(node('span', 'np-ehr-test', s.test));
    who.append(node('span', 'np-ehr-meta', s.mrn + ' ' + p.mrn + (ctx.encounter && ctx.encounter.id ? ' · ' + s.encounter + ' ' + ctx.encounter.id : '') + (ctx.hospital ? ' · ' + ctx.hospital.name : '')));
    var facts = node('dl', 'np-ehr-facts');
    var corrected = correctedGestationalAge(p.gestationalAgeAtBirth, p.birthDateTime, now);
    [
      [s.born, formatWallClock(p.birthDateTime)],
      [s.age, formatAge(p.birthDateTime, now, lang())],
      [s.sex, s.sexes[p.sex] || p.sex],
      p.gestationalAgeAtBirth && [s.gaBirth, formatGa(p.gestationalAgeAtBirth, lang())],
      corrected && [s.gaCorrected, formatGa(corrected, lang())],
      p.weightKg != null && [s.weight, p.weightKg + ' kg', s.weightAt + ' ' + formatWallClock(p.weightMeasuredAt)],
      p.birthWeightG != null && [s.birthWeight, p.birthWeightG + ' g'],
      p.heightCm != null && [s.height, p.heightCm + ' cm']
    ].filter(Boolean).forEach(function (item) {
      var group = node('div', 'np-ehr-fact');
      group.append(node('dt', '', item[0]));
      var dd = node('dd', '', item[1]);
      if (item[2]) dd.append(node('small', '', item[2]));
      group.append(dd); facts.append(group);
    });
    var end = node('button', 'np-ehr-end', s.end); end.type = 'button';
    end.addEventListener('click', function () {
      if (!global.confirm(s.endConfirm)) return;
      clearContext(sessionStorage);
      location.reload();
    });
    bar.append(who, facts, end);
    document.body.prepend(bar);
  }

  function injectStyles() {
    var script = Array.from(document.scripts).find(function (s) { return /\/neoped-patient\.js(?:\?|$)/.test(s.src); });
    if (!script || document.getElementById('np-ehr-css')) return;
    var link = document.createElement('link');
    link.id = 'np-ehr-css'; link.rel = 'stylesheet'; link.href = new URL('../css/neoped-patient.css', script.src).href;
    document.head.appendChild(link);
  }

  function start() {
    injectStyles();
    renderBanner();
    prefill();
    hookClipboard();
    document.addEventListener('input', function (event) { if (filled.has(event.target)) editedLabels(); }, true);
    // Some calculators (e.g. VancoCalc) build their fields after a choice: fill them when they appear.
    var pending = false;
    new MutationObserver(function () {
      if (pending) return; pending = true;
      requestAnimationFrame(function () { pending = false; prefill(); });
    }).observe(document.body, { childList: true, subtree: true });
    document.addEventListener('neoped:langchange', renderBanner);
    setTimeout(function () { clearContext(sessionStorage); location.reload(); }, Math.max(0, ctx.receivedAt + CONTEXT_TTL_MS - Date.now()));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})(typeof window !== 'undefined' ? window : globalThis);

/**
 * NeoPedCalc – digitação de datas pelo teclado (dispositivos com mouse).
 *
 * O campo nativo do Chrome tem um timer interno por segmento: com pausa de ~1 s entre dígitos,
 * o ano trava (0020) e o datetime-local fica vazio. Não há como ajustar esse timer.
 * Por isso, cada input date/datetime-local ganha à frente um campo de texto com máscara
 * (dd/mm/aaaa [hh:mm]; em inglês aaaa-mm-dd). O input nativo continua no DOM com o mesmo id
 * e valor ISO: recebe o valor (com eventos input/change) quando a data fica completa e válida,
 * e abre o calendário pelo botão (showPicker). Valores definidos pelo código da página
 * (.value, .valueAsDate) aparecem no campo de texto.
 * Em telas de toque o seletor nativo é mantido.
 */
(function () {
  'use strict';
  if (window.__NEOPED_DATE_TYPING__) return;
  window.__NEOPED_DATE_TYPING__ = true;
  if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;

  var MIN_YEAR = 1900;
  var MAX_YEAR = 2100;
  var HAS_TIME_BY_TYPE = { date: false, 'datetime-local': true };
  var NATIVE_SELECTOR = 'input[type="date"],input[type="datetime-local"]';
  var VALUE_DESC = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var mounted = [];

  var CSS =
    '.neoped-dtm{position:relative;display:block;width:100%;min-width:0;box-sizing:border-box}' +
    'html .neoped-dtm>input.neoped-dtm-text{width:100%;box-sizing:border-box;padding-right:2.6em}' +
    'html .neoped-dtm>button.neoped-dtm-pick{position:absolute;top:50%;right:.35em;transform:translateY(-50%);' +
    'width:2em!important;height:2em!important;min-width:0!important;min-height:0!important;margin:0!important;' +
    'padding:0!important;display:inline-flex;align-items:center;justify-content:center;border:0!important;' +
    'border-radius:6px!important;background:transparent!important;box-shadow:none!important;color:inherit!important;' +
    'opacity:.7;cursor:pointer;transition:opacity .15s,background-color .15s}' +
    'html .neoped-dtm>button.neoped-dtm-pick:hover{opacity:1;background:rgba(127,127,127,.16)!important}' +
    'html .neoped-dtm>button.neoped-dtm-pick:focus-visible{opacity:1;outline:2px solid currentColor;outline-offset:1px}' +
    'html .neoped-dtm>button.neoped-dtm-pick:disabled{display:none}' +
    'html .neoped-dtm>input.neoped-dtm-invalid{border-color:#c62828!important;box-shadow:inset 0 0 0 1px #c62828!important}' +
    'html input.neoped-dtm-native[type]{position:absolute!important;width:1px!important;max-width:1px!important;' +
    'height:1px!important;min-height:0!important;padding:0!important;margin:0!important;border:0!important;' +
    'opacity:0!important;pointer-events:none!important}';

  function tr(text) {
    var i18n = window.NEOPED_I18N;
    return i18n && typeof i18n.t === 'function' ? i18n.t(text) : text;
  }

  function isEnglish() {
    var i18n = window.NEOPED_I18N;
    return !!i18n && i18n.lang === 'en';
  }

  /** Segmentos na ordem de digitação: { key, len, sep } (sep vem antes do segmento). */
  function layout(hasTime) {
    var date = isEnglish()
      ? [{ key: 'y', len: 4, sep: '' }, { key: 'm', len: 2, sep: '-' }, { key: 'd', len: 2, sep: '-' }]
      : [{ key: 'd', len: 2, sep: '' }, { key: 'm', len: 2, sep: '/' }, { key: 'y', len: 4, sep: '/' }];
    return hasTime ? date.concat([{ key: 'h', len: 2, sep: ' ' }, { key: 'i', len: 2, sep: ':' }]) : date;
  }

  function placeholder(hasTime) {
    var names = { d: 'dd', m: 'mm', y: isEnglish() ? 'yyyy' : 'aaaa', h: 'hh', i: 'mm' };
    return layout(hasTime).map(function (s) { return s.sep + names[s.key]; }).join('');
  }

  function totalDigits(segs) {
    return segs.reduce(function (n, s) { return n + s.len; }, 0);
  }

  function formatDigits(digits, segs) {
    var out = '';
    var pos = 0;
    for (var k = 0; k < segs.length && pos < digits.length; k++) {
      out += segs[k].sep + digits.substr(pos, segs[k].len);
      pos += segs[k].len;
    }
    return out;
  }

  function caretAfterDigits(text, count) {
    if (count <= 0) return 0;
    var seen = 0;
    for (var i = 0; i < text.length; i++) {
      if (/\d/.test(text.charAt(i)) && ++seen === count) return i + 1;
    }
    return text.length;
  }

  /** ISO (aaaa-mm-dd[Thh:mm]) ou null se a data estiver incompleta ou não existir. */
  function isoFromDigits(digits, segs, hasTime) {
    if (digits.length !== totalDigits(segs)) return null;
    var p = {};
    var pos = 0;
    segs.forEach(function (s) { p[s.key] = digits.substr(pos, s.len); pos += s.len; });
    var y = +p.y;
    var m = +p.m;
    var d = +p.d;
    if (y < MIN_YEAR || y > MAX_YEAR || m < 1 || m > 12) return null;
    if (d < 1 || d > new Date(y, m, 0).getDate()) return null;
    var iso = p.y + '-' + p.m + '-' + p.d;
    if (!hasTime) return iso;
    if (+p.h > 23 || +p.i > 59) return null;
    return iso + 'T' + p.h + ':' + p.i;
  }

  function digitsFromIso(iso, segs) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(iso || '');
    if (!m) return '';
    var parts = { y: m[1], m: m[2], d: m[3], h: m[4] || '00', i: m[5] || '00' };
    return segs.map(function (s) { return parts[s.key]; }).join('');
  }

  function nativeValue(state) {
    return VALUE_DESC.get.call(state.native);
  }

  function setInvalid(state, isInvalid) {
    state.text.classList.toggle('neoped-dtm-invalid', isInvalid);
    state.text.setCustomValidity(isInvalid ? tr('Data inválida.') : '');
    if (isInvalid) state.text.setAttribute('aria-invalid', 'true');
    else state.text.removeAttribute('aria-invalid');
  }

  /** Mostra no campo de texto o valor atual do input nativo. */
  function syncFromNative(state) {
    if (state.isCommitting) return;
    var segs = layout(state.hasTime);
    var formatted = formatDigits(digitsFromIso(nativeValue(state), segs), segs);
    if (state.text.value !== formatted) state.text.value = formatted;
    setInvalid(state, false);
  }

  /** Repassa ao input nativo o que foi digitado, como o próprio campo nativo faria. */
  function commit(state, digits, segs) {
    var iso = isoFromDigits(digits, segs, state.hasTime);
    setInvalid(state, digits.length === totalDigits(segs) && !iso);
    var next = iso || '';
    if (nativeValue(state) === next) return;
    VALUE_DESC.set.call(state.native, next);
    state.isCommitting = true;
    try {
      state.native.dispatchEvent(new Event('input', { bubbles: true }));
      state.native.dispatchEvent(new Event('change', { bubbles: true }));
    } finally {
      state.isCommitting = false;
    }
  }

  function setDigits(state, digits, caretDigits) {
    var segs = layout(state.hasTime);
    var clean = digits.slice(0, totalDigits(segs));
    var formatted = formatDigits(clean, segs);
    state.text.value = formatted;
    if (document.activeElement === state.text) {
      var pos = caretAfterDigits(formatted, Math.min(caretDigits, clean.length));
      state.text.setSelectionRange(pos, pos);
    }
    commit(state, clean, segs);
  }

  function onTextInput(state) {
    var raw = state.text.value;
    var caret = state.text.selectionStart == null ? raw.length : state.text.selectionStart;
    var caretDigits = raw.slice(0, caret).replace(/\D/g, '').length;
    setDigits(state, raw.replace(/\D/g, ''), caretDigits);
  }

  function openPicker(state) {
    try {
      state.native.showPicker();
    } catch (err) {
      state.text.focus();
    }
  }

  function onTextKeydown(state, ev) {
    if (ev.altKey && ev.key === 'ArrowDown') {
      ev.preventDefault();
      openPicker(state);
      return;
    }
    var text = state.text;
    var pos = text.selectionStart;
    var isCollapsed = pos === text.selectionEnd;
    /* Backspace logo após "/", " " ou ":" apaga o dígito anterior em vez de travar no separador. */
    if (ev.key === 'Backspace' && isCollapsed && pos > 0 && /\D/.test(text.value.charAt(pos - 1))) {
      ev.preventDefault();
      var before = text.value.slice(0, pos).replace(/\D/g, '');
      var after = text.value.slice(pos).replace(/\D/g, '');
      setDigits(state, before.slice(0, -1) + after, before.length - 1);
    }
  }

  function hookNativeValue(state) {
    ['value', 'valueAsDate', 'valueAsNumber'].forEach(function (prop) {
      var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, prop);
      if (!desc || !desc.set) return;
      Object.defineProperty(state.native, prop, {
        configurable: true,
        enumerable: desc.enumerable,
        get: function () { return desc.get.call(this); },
        set: function (v) {
          desc.set.call(this, v);
          syncFromNative(state);
        }
      });
    });
  }

  function mirrorAttributes(state) {
    var native = state.native;
    state.text.disabled = native.disabled;
    state.text.readOnly = native.readOnly;
    state.text.required = native.required;
    state.btn.disabled = native.disabled || native.readOnly;
  }

  function labelText(native) {
    var labels = native.labels;
    if (!labels || !labels.length) return native.getAttribute('aria-label') || '';
    return (labels[0].textContent || '').replace(/\s+/g, ' ').trim();
  }

  function applyLanguage(state) {
    state.text.placeholder = placeholder(state.hasTime);
    state.btn.setAttribute('aria-label', tr('Abrir calendário'));
    state.btn.title = tr('Abrir calendário');
    var label = labelText(state.native);
    if (label) state.text.setAttribute('aria-label', label);
    syncFromNative(state);
  }

  function calendarIcon() {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('d', 'M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z');
    svg.appendChild(path);
    return svg;
  }

  function buildControls(native) {
    var wrap = document.createElement('span');
    wrap.className = 'neoped-dtm';
    var text = document.createElement('input');
    text.type = 'text';
    text.inputMode = 'numeric';
    text.autocomplete = 'off';
    text.spellcheck = false;
    text.className = (native.className.replace(/\bneoped-dt-input\b/g, '') + ' neoped-dtm-text').trim();
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'neoped-dtm-pick';
    btn.appendChild(calendarIcon());
    wrap.appendChild(text);
    wrap.appendChild(btn);
    native.insertAdjacentElement('afterend', wrap);
    return { text: text, btn: btn };
  }

  function mount(native) {
    if (!native || native.__neopedDtm || !(native.type in HAS_TIME_BY_TYPE)) return;
    var controls = buildControls(native);
    var state = {
      native: native,
      text: controls.text,
      btn: controls.btn,
      hasTime: HAS_TIME_BY_TYPE[native.type],
      isCommitting: false
    };
    native.__neopedDtm = state;
    native.classList.add('neoped-dtm-native');
    native.tabIndex = -1;
    native.setAttribute('aria-hidden', 'true');

    hookNativeValue(state);
    mirrorAttributes(state);
    applyLanguage(state);

    state.text.addEventListener('input', function () { onTextInput(state); });
    state.text.addEventListener('keydown', function (ev) { onTextKeydown(state, ev); });
    state.btn.addEventListener('click', function () { openPicker(state); });
    native.addEventListener('focus', function () { state.text.focus(); });
    native.addEventListener('input', function () { syncFromNative(state); });
    native.addEventListener('change', function () { syncFromNative(state); });
    if (native.form) {
      native.form.addEventListener('reset', function () { setTimeout(function () { syncFromNative(state); }, 0); });
    }
    if (window.MutationObserver) {
      new MutationObserver(function () { mirrorAttributes(state); })
        .observe(native, { attributes: true, attributeFilter: ['disabled', 'readonly', 'required'] });
    }
    mounted.push(state);
  }

  function mountAll(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var list = scope.querySelectorAll(NATIVE_SELECTOR);
    for (var i = 0; i < list.length; i++) mount(list[i]);
  }

  function injectStyles() {
    if (document.getElementById('neoped-dtm-style')) return;
    var style = document.createElement('style');
    style.id = 'neoped-dtm-style';
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function init() {
    injectStyles();
    mountAll(document);
    document.addEventListener('neoped:langchange', function () {
      mounted.forEach(applyLanguage);
    });
  }

  window.neopedMountDateTyping = function (inp) {
    if (inp && inp.matches && inp.matches(NATIVE_SELECTOR)) mount(inp);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/**
 * NeoPedCalc – marca ancestrais de inputs date/time/datetime-local/month
 * com .neoped-dt-chain (CSS em neoped-datetime-mobile.css).
 * Deve carregar antes de neoped-nav.js (ou sozinho).
 */
(function () {
  'use strict';
  if (window.__NEOPED_DT_FIX_INIT__) return;
  window.__NEOPED_DT_FIX_INIT__ = true;

  var DT_FIX_TIMER = null;
  var DT_SEL =
    'input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]';

  /*
   * Ano com 4 dígitos. Sem "max", o Chrome aceita até 6 dígitos no ano: em datetime-local, a hora
   * digitada depois do ano entra no ano (2025 + 12 → 202512) e o cursor nunca chega à hora.
   * Com um "max" de 4 dígitos o ano para em 4 e o foco avança sozinho.
   */
  var YEAR_MAX_BY_TYPE = {
    date: '9999-12-31',
    'datetime-local': '9999-12-31T23:59',
    month: '9999-12'
  };
  /* Enquanto o ano é digitado, o valor passa por 0002, 0020, 0202; nenhuma data real tem ano < 1000. */
  var MIN_COMPLETE_YEAR = 1000;
  var PARTIAL_YEAR_MSG = 'Digite o ano com 4 dígitos.';

  function neopedLimitYearDigits(inp) {
    var max = YEAR_MAX_BY_TYPE[inp.type];
    if (max && !inp.hasAttribute('max')) inp.setAttribute('max', max);
  }

  function yearOf(value) {
    var m = /^(\d{4,6})-/.exec(value || '');
    return m ? parseInt(m[1], 10) : null;
  }

  function translate(text) {
    var i18n = window.NEOPED_I18N;
    return i18n && typeof i18n.t === 'function' ? i18n.t(text) : text;
  }

  /* Não deixa a calculadora reagir a um ano ainda incompleto (idades absurdas durante a digitação). */
  function neopedGuardPartialYear(ev) {
    var inp = ev.target;
    if (!inp || !YEAR_MAX_BY_TYPE[inp.type]) return;
    var year = yearOf(inp.value);
    if (year !== null && year < MIN_COMPLETE_YEAR) {
      inp.setCustomValidity(translate(PARTIAL_YEAR_MSG));
      ev.stopImmediatePropagation();
      return;
    }
    if (inp.validationMessage === translate(PARTIAL_YEAR_MSG)) inp.setCustomValidity('');
  }

  window.addEventListener('input', neopedGuardPartialYear, true);
  window.addEventListener('change', neopedGuardPartialYear, true);

  /* Digitação lenta: o campo nativo perde o ano. Com mouse/teclado, carrega o campo com máscara. */
  (function loadDateTyping() {
    var self = document.currentScript;
    if (!self || !self.src || !window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    var s = document.createElement('script');
    s.src = self.src.replace(/neoped-datetime-fix\.js(\?.*)?$/, 'neoped-date-typing.js');
    (document.head || document.documentElement).appendChild(s);
  })();

  function neopedClearDatetimeChain() {
    var els = document.querySelectorAll('.neoped-dt-chain, .neoped-dt-input');
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('neoped-dt-chain');
      els[i].classList.remove('neoped-dt-input');
    }
  }

  function neopedApplyDatetimeChainCore() {
    var list;
    try {
      list = document.querySelectorAll(DT_SEL);
    } catch (e) {
      return;
    }
    for (var j = 0; j < list.length; j++) {
      var inp = list[j];
      if (!inp || inp.type === 'hidden') continue;
      inp.classList.add('neoped-dt-input');
      neopedLimitYearDigits(inp);
      if (window.neopedMountDateTyping) window.neopedMountDateTyping(inp);
      var p = inp.parentElement;
      var depth = 0;
      while (p && depth < 8) {
        if (p.nodeType !== 1) break;
        var tag = (p.tagName || '').toUpperCase();
        if (tag === 'BODY' || tag === 'HTML') break;
        if (p.id === 'neoped-app-nav') break;
        p.classList.add('neoped-dt-chain');
        p = p.parentElement;
        depth++;
      }
    }
  }

  function neopedApplyDatetimeContainment(immediate) {
    if (!document.body) return;
    function run() {
      neopedClearDatetimeChain();
      neopedApplyDatetimeChainCore();
    }
    if (immediate) {
      run();
      return;
    }
    clearTimeout(DT_FIX_TIMER);
    DT_FIX_TIMER = setTimeout(run, 100);
  }

  window.neopedApplyDatetimeContainment = neopedApplyDatetimeContainment;

  function initDt() {
    neopedApplyDatetimeContainment(true);
    if (window.MutationObserver && document.body) {
      try {
        var mo = new MutationObserver(function (records) {
          var added = false;
          for (var r = 0; r < records.length; r++) {
            if (records[r].addedNodes && records[r].addedNodes.length) {
              added = true;
              break;
            }
          }
          if (added) neopedApplyDatetimeContainment(false);
        });
        mo.observe(document.body, { childList: true, subtree: true });
      } catch (e1) {}
    }
    window.addEventListener('resize', function () {
      neopedApplyDatetimeContainment(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDt);
  } else {
    initDt();
  }
})();

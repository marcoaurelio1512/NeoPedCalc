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

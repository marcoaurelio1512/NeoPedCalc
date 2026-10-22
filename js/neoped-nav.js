window.neopedEscapeHtml = function (value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character];
  });
};
/**
 * NeoPedCalc - Navegação interna para PWA/mobile
 * Botão Voltar seguro, Home, preservação de estado (formulários).
 * Uso: incluir em todas as páginas; barra é injetada automaticamente.
 */
(function () {
  'use strict';

  var STORAGE_PREFIX = 'neoped_state_';
  var NAV_ID = 'neoped-app-nav';
  var MIN_TOUCH_PX = 44;
  var LEGAL_KEY = 'neoped_legal_accept_v1';
  var LEGAL_BANNER_ID = 'neoped-legal-banner';
  var LEGAL_OVERLAY_ID = 'neoped-legal-overlay';

  function updateNeopedBottomInset() {
    var root = document.documentElement;
    if (!root) return;
    var nav = document.getElementById(NAV_ID);
    var navH = nav ? Math.max(Math.ceil(nav.getBoundingClientRect().height), 52) : 0;
    var ban = document.getElementById(LEGAL_BANNER_ID);
    var banH = ban ? Math.ceil(ban.getBoundingClientRect().height) : 0;
    root.style.setProperty('--neoped-nav-inset', navH + banH + 'px');
    if (ban) {
      ban.style.bottom = navH + 'px';
    }
  }
  function getAppBase() {
    var script = Array.from(document.scripts).find(function (el) { return /\/neoped-nav\.js(?:\?|$)/.test(el.src); });
    return script ? new URL('../', script.src).href : new URL('./', location.href).href;
  }

  function getHomeUrl() {
    var base = getAppBase();
    if (!base) {
      var pathname = window.location.pathname || '';
      var depth = 0;
      if (pathname.indexOf('files') !== -1) {
        var parts = pathname.split('/').filter(Boolean);
        depth = parts.length - 1;
      }
      var rel = depth ? '../'.repeat(depth) + 'index.html' : 'index.html';
      return new URL(rel, window.location.href).href;
    }
    return base + (base.endsWith('/') ? '' : '/') + 'index.html';
  }

  function getPageKey() {
    return (window.location.pathname || window.location.href || 'default').replace(/\//g, '_');
  }

  function serializeFormState() {
    var out = {};
    Array.from(document.querySelectorAll('input, select, textarea')).forEach(function (el, index) {
      if (el.closest('[role="dialog"]') || /^(password|hidden|file|button|submit)$/.test(el.type) || el.autocomplete === 'off' || el.hasAttribute('data-no-persist')) return;
      var key = el.id || (el.name ? el.name + ':' + index : '');
      if (!key) return;
      out[key] = { value: String(el.value).slice(0, 5000), checked: el.checked, type: el.type };
    });
    return out;
  }

  function restoreFormState(state) {
    if (!state || typeof state !== 'object') return;
    Array.from(document.querySelectorAll('input, select, textarea')).forEach(function (el, index) {
      if (el.closest('[role="dialog"]') || /^(password|hidden|file|button|submit)$/.test(el.type) || el.autocomplete === 'off' || el.hasAttribute('data-no-persist')) return;
      var key = el.id || (el.name ? el.name + ':' + index : '');
      var saved = state[key];
      // Ignore old ambiguous radio values; restoring them could select the wrong option.
      if (!saved || typeof saved !== 'object' || saved.type !== el.type) return;
      if (/^(checkbox|radio)$/.test(el.type)) el.checked = saved.checked === true;
      else if (el.tagName === 'SELECT') {
        if (Array.from(el.options).some(function (option) { return option.value === saved.value; })) el.value = saved.value;
      } else el.value = saved.value;
    });
  }

  function saveState() {
    try {
      var key = STORAGE_PREFIX + getPageKey();
      var state = serializeFormState();
      if (Object.keys(state).length) {
        sessionStorage.setItem(key, JSON.stringify(state));
      }
    } catch (e) {}
  }

  function loadState() {
    try {
      var key = STORAGE_PREFIX + getPageKey();
      var raw = sessionStorage.getItem(key);
      if (raw) {
        var state = JSON.parse(raw);
        restoreFormState(state);
      }
    } catch (e) {}
  }

  function goBack() {
    saveState();
    if (window.history.length > 1 && document.referrer && new URL(document.referrer).origin === location.origin) {
      window.history.back();
    } else {
      window.location.href = getHomeUrl();
    }
  }

  function goHome() {
    saveState();
    window.location.href = getHomeUrl();
  }

  function getPageTitle() {
    var body = document.body;
    if (body && body.getAttribute('data-neoped-title')) {
      return body.getAttribute('data-neoped-title');
    }
    var h1 = document.querySelector('h1, .main-title, header h1');
    if (h1 && h1.textContent) {
      return h1.textContent.trim().substring(0, 50);
    }
    return document.title || 'NeoPedCalc';
  }

  var ICON_BACK = '<svg class="neoped-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  var ICON_HOME = '<svg class="neoped-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';

  function injectNav() {
    if (document.getElementById(NAV_ID)) return;

    var homeUrl = getHomeUrl();

    var nav = document.createElement('div');
    nav.id = NAV_ID;
    nav.className = 'neoped-nav neoped-nav-bottom';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navegação principal');
    nav.innerHTML =
      '<button type="button" class="neoped-nav-btn neoped-nav-back" aria-label="Voltar">' + ICON_BACK + '<span>Voltar</span></button>' +
      '<a href="#" class="neoped-nav-btn neoped-nav-home" aria-label="Início">' + ICON_HOME + '<span>Início</span></a>';

    var backBtn = nav.querySelector('.neoped-nav-back');
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      goBack();
    });

    var homeLink = nav.querySelector('.neoped-nav-home');
    homeLink.setAttribute('href', homeUrl);
    homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      goHome();
    });

    document.body.appendChild(nav);
    document.body.classList.add('neoped-has-nav');
    document.documentElement.classList.add('neoped-has-nav');

    function setNavInsetPx() {
      updateNeopedBottomInset();
    }

    setNavInsetPx();
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(function () {
        setNavInsetPx();
      });
    }
    setTimeout(setNavInsetPx, 50);
    setTimeout(setNavInsetPx, 300);
    window.addEventListener('resize', setNavInsetPx);
    window.addEventListener('orientationchange', function () {
      setTimeout(setNavInsetPx, 200);
      setTimeout(setNavInsetPx, 500);
    });
    if (typeof window.ResizeObserver === 'function') {
      try {
        var ro = new window.ResizeObserver(function () {
          setNavInsetPx();
        });
        ro.observe(nav);
      } catch (e) {}
    }
  }

  function injectLegal() {
    if (!document.body || document.body.getAttribute('data-neoped-skip-legal') === 'true') {
      return;
    }

    function legalAccepted() {
      try {
        return window.localStorage.getItem(LEGAL_KEY) === '1' || window.sessionStorage.getItem(LEGAL_KEY) === '1';
      } catch (e) {
        try {
          return window.sessionStorage.getItem(LEGAL_KEY) === '1';
        } catch (e2) {
          return false;
        }
      }
    }

    function persistLegalAccept() {
      try {
        window.localStorage.setItem(LEGAL_KEY, '1');
      } catch (e) {
        try {
          window.sessionStorage.setItem(LEGAL_KEY, '1');
        } catch (e2) {}
      }
    }

    var previousFocus = null;
    var previousOverflow = '';
    function closeLegalOverlay(overlay) {
      if (!overlay) return;
      overlay.style.display = 'none';
      overlay.setAttribute('hidden', '');
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus.isConnected) previousFocus.focus();
    }

    function mountLegalBanner() {
      if (document.getElementById(LEGAL_BANNER_ID)) {
        updateNeopedBottomInset();
        return;
      }
      var bar = document.createElement('div');
      bar.id = LEGAL_BANNER_ID;
      bar.className = 'neoped-legal-banner';
      bar.setAttribute('role', 'status');
      bar.innerHTML =
        '<div class="neoped-legal-banner-inner">' +
        '<span class="neoped-legal-banner-text">Ferramenta educacional e informativa · Não substitui avaliação clínica</span>' +
        '<button type="button" class="neoped-legal-banner-btn" id="neoped-legal-open-term">Termo completo</button>' +
        '</div>';
      document.body.appendChild(bar);
      var btnOpen = bar.querySelector('#neoped-legal-open-term');
      if (btnOpen) {
        btnOpen.addEventListener('click', function () {
          openLegalTermModal(false);
        });
      }
      updateNeopedBottomInset();
      if (typeof window.ResizeObserver === 'function') {
        try {
          var ro2 = new window.ResizeObserver(function () {
            updateNeopedBottomInset();
          });
          ro2.observe(bar);
        } catch (e) {}
      }
    }

    function openLegalTermModal(requireAccept) {
      var existing = document.getElementById(LEGAL_OVERLAY_ID);
      if (existing) existing.remove();
      previousFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;

      var fullText =
        'Este aplicativo tem finalidade exclusivamente educacional e informativa, destinado a profissionais de saúde para apoio ao raciocínio clínico. As informações apresentadas são baseadas em diretrizes científicas e referências bibliográficas reconhecidas. O aplicativo não realiza diagnóstico, não prescreve tratamento e não substitui avaliação clínica individualizada. A interpretação dos dados e a decisão clínica são de responsabilidade exclusiva do profissional de saúde. Os resultados devem ser sempre confirmados com julgamento clínico independente, protocolos institucionais e referências oficiais vigentes.';

      var ov = document.createElement('div');
      ov.id = LEGAL_OVERLAY_ID;
      ov.className = 'neoped-legal-overlay';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      ov.setAttribute('aria-labelledby', 'neoped-legal-title');

      var inner =
        '<div class="neoped-legal-dialog">' +
        '<h2 id="neoped-legal-title" class="neoped-legal-title">Aviso legal</h2>' +
        '<div class="neoped-legal-scroll">' +
        '<p class="neoped-legal-p">' +
        fullText +
        '</p>' +
        '<p class="neoped-legal-p neoped-legal-muted">As referências bibliográficas de cada módulo aparecem na própria calculadora. Este texto é informativo e não constitui orientação médica.</p>' +
        '</div>';

      if (requireAccept) {
        inner +=
          '<label class="neoped-legal-check-row">' +
          '<input type="checkbox" id="neoped-legal-checkbox" />' +
          '<span>Li e compreendi que esta ferramenta possui caráter informativo e não substitui decisão clínica profissional.</span>' +
          '</label>' +
          '<button type="button" class="neoped-legal-primary" id="neoped-legal-accept-btn" disabled>Continuar</button>';
      } else {
        inner += '<button type="button" class="neoped-legal-primary" id="neoped-legal-close-btn">Fechar</button>';
      }
      inner += '</div>';
      ov.innerHTML = inner;
      document.body.appendChild(ov);

      if (requireAccept) {
        var cb = ov.querySelector('#neoped-legal-checkbox');
        var ab = ov.querySelector('#neoped-legal-accept-btn');
        if (cb && ab) {
          cb.addEventListener('change', function () {
            ab.disabled = !cb.checked;
          });
          ab.addEventListener('click', function () {
            if (!cb.checked) return;
            persistLegalAccept();
            closeLegalOverlay(ov);
            mountLegalBanner();
            updateNeopedBottomInset();
          });
        }
      } else {
        var cl = ov.querySelector('#neoped-legal-close-btn');
        if (cl) {
          cl.addEventListener('click', function () {
            closeLegalOverlay(ov);
          });
        }
        ov.addEventListener('click', function (e) {
          if (e.target === ov) closeLegalOverlay(ov);
        });
      }

      ov.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !requireAccept) { event.preventDefault(); closeLegalOverlay(ov); }
        if (event.key !== 'Tab') return;
        var focusable = Array.from(ov.querySelectorAll('button:not(:disabled), input, a[href]'));
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      });
      ov.style.display = 'flex';
      setTimeout(function () { var target = ov.querySelector('input, button:not(:disabled)'); if (target) target.focus(); }, 0);
      document.body.style.overflow = 'hidden';
    }

    window.neopedLegalReportFooter = function () {
      return (
        '\n\n—\nNeoPedCalc · Uso exclusivamente educacional e informativo. Não realiza diagnóstico nem prescreve tratamento. Interpretação e decisão clínica: responsabilidade do profissional de saúde. Gerado em ' +
        new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) +
        '.'
      );
    };

    if (legalAccepted()) {
      mountLegalBanner();
      updateNeopedBottomInset();
      return;
    }
    openLegalTermModal(true);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function applyFooterYear() {
    var y = new Date().getFullYear();
    var els = document.querySelectorAll('[data-neoped-year]');
    Array.prototype.forEach.call(els, function (el) {
      el.textContent = String(y);
    });
  }

  function init() {
    applyFooterYear();
    if (!document.body || document.body.getAttribute('data-neoped-no-restore') === 'true') {
      /* Páginas com estado complexo (ex.: RCP Pediátrica) não restauram do sessionStorage para não quebrar a inicialização */
    } else {
      loadState();
    }
    if (!document.body.classList.contains('np-portal')) {
      var brand = document.createElement('div');
      brand.className = 'neoped-module-brand';
      var home = document.createElement('a'); home.href = getHomeUrl(); home.innerHTML = '<strong>✚ NeoPedCalc</strong>';
      var library = document.createElement('a'); library.href = getAppBase() + 'selecao_calculadoras.html'; library.textContent = 'Todas as calculadoras →';
      brand.append(home, library); document.body.prepend(brand);
      injectNav();
    }
    if (typeof window.atualizarScore === 'function' && document.getElementById('apgarForm')) {
      window.atualizarScore(1); window.atualizarScore(5);
      document.querySelectorAll('.radio-option').forEach(function (option) {
        var radio = option.querySelector('input[type="radio"]');
        if (radio) option.classList.toggle('selected', radio.checked);
      });
    }
    injectLegal();
    if (typeof window.neopedApplyDatetimeContainment === 'function') {
      window.neopedApplyDatetimeContainment(true);
    }
    window.addEventListener('pagehide', saveState);
    window.addEventListener('beforeunload', saveState);

    window.addEventListener('popstate', function () {
      loadState();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/**
 * Mensagem breve na tela (toast) — útil quando a ação não muda de página.
 * Disponível em qualquer página que inclua neoped-nav.js: neopedToast('Texto').
 */
(function () {
  'use strict';
  var toastEl = null;
  var hideTimer = null;
  window.neopedToast = function (msg, durationMs) {
    if (!msg) return;
    durationMs = durationMs == null ? 2500 : durationMs;
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'neoped-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      toastEl.style.cssText =
        'position:fixed;left:50%;bottom:calc(var(--neoped-nav-inset, 72px) + 12px);transform:translateX(-50%);z-index:10002;max-width:min(92vw,360px);padding:11px 16px;border-radius:12px;background:#1e293b;color:#f8fafc;font-size:0.9rem;line-height:1.35;text-align:center;box-shadow:0 8px 28px rgba(0,0,0,0.25);opacity:0;transition:opacity .2s ease;pointer-events:none;font-family:system-ui,-apple-system,sans-serif';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      toastEl.style.opacity = '0';
    }, durationMs);
  };

  var MSG_COPY_OK =
    'Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.';
  var MSG_COPY_FAIL =
    'Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.';

  window.neopedCopySuccess = function () {
    if (typeof window.neopedToast === 'function') window.neopedToast(MSG_COPY_OK);
    else alert(MSG_COPY_OK);
  };
  window.neopedCopyFail = function () {
    if (typeof window.neopedToast === 'function') window.neopedToast(MSG_COPY_FAIL);
    else alert(MSG_COPY_FAIL);
  };
})();

/* Keyboard support for legacy calculator dialogs, preserving their existing close handlers. */
(function () {
  'use strict';
  function install() {
    var active = null, opener = null;
    function visibleDialog() {
      var dialogs = Array.from(document.querySelectorAll('.modal[id], .modal-overlay[id]')).filter(function (el) {
        return el.id !== 'neoped-legal-overlay' && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden';
      });
      return dialogs[dialogs.length - 1] || null;
    }
    function sync() {
      var current = visibleDialog();
      if (current === active) return;
      if (!current) {
        active = null;
        if (opener && opener.isConnected) opener.focus();
        opener = null; return;
      }
      opener = document.activeElement; active = current;
      current.setAttribute('role', 'dialog'); current.setAttribute('aria-modal', 'true');
      if (!current.hasAttribute('aria-label') && !current.hasAttribute('aria-labelledby')) {
        var title = current.querySelector('h1,h2,h3');
        current.setAttribute('aria-label', title ? title.textContent.trim() : 'Informações');
      }
      var close = current.querySelector('.close,.close-btn,.modal-close,button[aria-label="Fechar"]');
      if (close) {
        if (close.tagName !== 'BUTTON') { close.setAttribute('role','button'); close.tabIndex = 0; }
        close.setAttribute('aria-label', 'Fechar'); close.focus();
      } else { current.tabIndex = -1; current.focus(); }
    }
    document.addEventListener('keydown', function (event) {
      if (!active || document.getElementById('neoped-legal-overlay')?.getClientRects().length) return;
      var close = active.querySelector('.close,.close-btn,.modal-close,button[aria-label="Fechar"]');
      if (event.key === 'Escape' && close) { event.preventDefault(); close.click(); }
      if ((event.key === 'Enter' || event.key === ' ') && event.target === close && close.tagName !== 'BUTTON') { event.preventDefault(); close.click(); }
      if (event.key !== 'Tab') return;
      var controls = Array.from(active.querySelectorAll('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex="0"]')).filter(function (el) { return el.getClientRects().length; });
      if (!controls.length) { event.preventDefault(); return; }
      var first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || !active.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !active.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
    });
    new MutationObserver(sync).observe(document.body, { subtree:true, attributes:true, attributeFilter:['style','class'], childList:true });
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install); else install();
})();

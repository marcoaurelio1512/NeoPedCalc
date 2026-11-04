/**
 * NeoPedCalc — internacionalização (pt-BR, en, es).
 *
 * As páginas continuam escritas em português. Cada dicionário mapeia o texto
 * original em português para [inglês, espanhol]:
 *   NEOPED_I18N.register({ 'Calculadoras': ['Calculators', 'Calculadoras'] });
 * Textos com partes variáveis usam padrões:
 *   NEOPED_I18N.registerPatterns([[/^(\d+) ferramentas$/, '$1 tools', '$1 herramientas']]);
 * Uma calculadora traduzida chama NEOPED_I18N.markPageTranslated() no seu dicionário.
 * Trechos que não devem ser traduzidos (citações, nomes) usam translate="no".
 */
(function () {
  'use strict';

  var LANGS = ['pt', 'en', 'es'];
  var LOCALES = { pt: 'pt-BR', en: 'en', es: 'es' };
  var LABELS = { pt: 'Português', en: 'English', es: 'Español' };
  var LANG_INDEX = { en: 0, es: 1 };
  var STORAGE_KEY = 'neoped_lang';
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1 };
  var HAS_LETTERS = /[A-Za-zÀ-ú]/;

  var dictionary = new Map();
  var patterns = [];
  var textMemory = new WeakMap();
  var attrMemory = new WeakMap();
  var headMemory = {};
  var pageTranslated = false;
  var observer = null;
  var lang = detectLang();

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function writeStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* sem armazenamento: vale só nesta página */ }
  }

  // Português é o padrão: o idioma só muda por escolha no seletor ou por link com ?lang=en|es.
  // (Não seguimos o idioma do navegador para não mudar a experiência de quem já usa o app.)
  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && LANGS.indexOf(fromUrl) !== -1) { writeStored(fromUrl); return fromUrl; }
    var stored = readStored();
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    return 'pt';
  }

  function normalizeKey(text) {
    return String(text).replace(/\s+/g, ' ').trim();
  }

  function register(entries) {
    Object.keys(entries || {}).forEach(function (pt) {
      var value = entries[pt];
      if (Array.isArray(value) && value.length === 2) dictionary.set(normalizeKey(pt), value);
    });
    if (document.body && lang !== 'pt') applyAll();
  }

  function registerPatterns(list) {
    (list || []).forEach(function (item) {
      if (item && item[0] instanceof RegExp) patterns.push(item);
    });
  }

  function lookup(key, target) {
    var hit = dictionary.get(key);
    if (hit) return hit[LANG_INDEX[target]];
    for (var i = 0; i < patterns.length; i++) {
      var rule = patterns[i];
      if (rule[0].test(key)) return key.replace(rule[0], rule[1 + LANG_INDEX[target]]);
    }
    return null;
  }

  /** Traduz um texto em português para o idioma ativo (ou o informado). Sem tradução, devolve o original. */
  function t(text, target) {
    var to = target || lang;
    if (to === 'pt' || text == null) return text;
    var raw = String(text);
    var key = normalizeKey(raw);
    if (!key) return raw;
    var out = lookup(key, to);
    if (out == null) return raw;
    return raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0];
  }

  function isSkipped(el) {
    for (var node = el; node && node.nodeType === 1; node = node.parentNode) {
      if (SKIP_TAGS[node.tagName] || node.isContentEditable) return true;
      if (node.getAttribute('translate') === 'no' || node.classList.contains('notranslate')) return true;
    }
    return false;
  }

  /** O texto original (pt) de um valor, mesmo que já esteja traduzido. */
  function sourceOf(saved, current) {
    return saved && saved.out === current ? saved.src : current;
  }

  function translateTextNode(node) {
    if (!node.parentNode || isSkipped(node.parentNode)) return;
    var src = sourceOf(textMemory.get(node), node.data);
    if (!HAS_LETTERS.test(src)) return;
    var out = t(src);
    textMemory.set(node, { src: src, out: out });
    if (node.data !== out) node.data = out;
  }

  function translateAttrs(el) {
    if (isSkipped(el)) return;
    var saved = attrMemory.get(el) || {};
    var next = {};
    ATTRS.forEach(function (name) {
      if (!el.hasAttribute(name)) return;
      var current = el.getAttribute(name);
      var src = sourceOf(saved[name], current);
      var out = t(src);
      next[name] = { src: src, out: out };
      if (current !== out) el.setAttribute(name, out);
    });
    attrMemory.set(el, next);
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1) return;
    translateAttrs(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    for (var node = walker.nextNode(); node; node = walker.nextNode()) {
      if (node.nodeType === 3) translateTextNode(node); else translateAttrs(node);
    }
  }

  function translateHead() {
    document.documentElement.lang = LOCALES[lang];
    var title = sourceOf(headMemory.title, document.title);
    headMemory.title = { src: title, out: t(title) };
    document.title = headMemory.title.out;
    var meta = document.querySelector('meta[name="description"]');
    if (!meta) return;
    var desc = sourceOf(headMemory.desc, meta.content);
    headMemory.desc = { src: desc, out: t(desc) };
    meta.content = headMemory.desc.out;
  }

  function onMutations(records) {
    records.forEach(function (record) {
      if (record.type === 'characterData') translateTextNode(record.target);
      else if (record.type === 'attributes') translateAttrs(record.target);
      else record.addedNodes.forEach(translateTree);
    });
  }

  function watch() {
    if (observer || !document.body) return;
    observer = new MutationObserver(onMutations);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  function applyAll() {
    translateHead();
    if (!document.body) return;
    translateTree(document.body);
    // Em português não há o que traduzir: o observador só é ligado nos outros idiomas.
    if (lang !== 'pt') watch();
    updateSwitchers();
    updateNotice();
  }

  function setLang(next) {
    if (LANGS.indexOf(next) === -1 || next === lang) return;
    lang = next;
    writeStored(next);
    applyAll();
    document.dispatchEvent(new CustomEvent('neoped:langchange', { detail: { lang: lang } }));
  }

  function updateSwitchers() {
    document.querySelectorAll('.np-lang button[data-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
  }

  function createLangButton(code) {
    var button = document.createElement('button');
    button.type = 'button';
    button.dataset.lang = code;
    button.textContent = code.toUpperCase();
    button.title = LABELS[code];
    button.setAttribute('aria-label', LABELS[code]);
    button.setAttribute('lang', LOCALES[code]);
    button.setAttribute('aria-pressed', String(code === lang));
    button.addEventListener('click', function () { setLang(code); });
    return button;
  }

  /** Cria o seletor PT · EN · ES dentro do elemento informado. */
  function mountSwitcher(container, options) {
    if (!container || container.querySelector('.np-lang')) return null;
    var opts = options || {};
    var group = document.createElement('div');
    group.className = 'np-lang' + (opts.dark ? ' np-lang-dark' : '');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Idioma · Language · Idioma');
    group.setAttribute('translate', 'no');
    LANGS.forEach(function (code) { group.appendChild(createLangButton(code)); });
    if (opts.before) container.insertBefore(group, opts.before);
    else container.appendChild(group);
    return group;
  }

  /** Calculadoras ainda não traduzidas avisam que o conteúdo segue em português. */
  function updateNotice() {
    var existing = document.getElementById('np-lang-notice');
    var isModule = !document.body.classList.contains('np-portal');
    var show = isModule && lang !== 'pt' && !pageTranslated;
    if (!show) { if (existing) existing.remove(); return; }
    var brand = document.querySelector('.neoped-module-brand');
    if (existing || !brand) return;
    var notice = document.createElement('p');
    notice.id = 'np-lang-notice';
    notice.className = 'np-lang-notice';
    notice.setAttribute('role', 'note');
    notice.textContent = 'Esta ferramenta ainda está disponível apenas em português. A tradução está em andamento.';
    brand.insertAdjacentElement('afterend', notice);
  }

  function markPageTranslated() {
    pageTranslated = true;
    if (document.body) updateNotice();
  }

  function init() {
    var header = document.querySelector('.np-header-inner');
    if (header) mountSwitcher(header, { before: header.querySelector('.np-account') });
    applyAll();
  }

  window.NEOPED_I18N = {
    t: t,
    register: register,
    registerPatterns: registerPatterns,
    markPageTranslated: markPageTranslated,
    mountSwitcher: mountSwitcher,
    setLang: setLang,
    refresh: applyAll,
    get lang() { return lang; },
    get locale() { return LOCALES[lang]; },
    languages: LANGS.slice()
  };

  document.documentElement.lang = LOCALES[lang];
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

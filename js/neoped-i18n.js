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
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1 };
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

  function lookupExact(key, target) {
    var hit = dictionary.get(key);
    if (hit) return hit[LANG_INDEX[target]];
    for (var i = 0; i < patterns.length; i++) {
      var rule = patterns[i];
      if (rule[0].test(key)) return key.replace(rule[0], rule[1 + LANG_INDEX[target]]);
    }
    return null;
  }

  var AFFIX = /^([^A-Za-zÀ-ú]*)([\s\S]*?)([^A-Za-zÀ-ú]*)$/;
  var NUMBER_SPLIT = /([<>≤≥±]?\s*-?\d+(?:[.,]\d+)*\s*)/;

  /** Ignora emojis, símbolos e pontuação nas pontas: "📊 Resultado:" usa a entrada "Resultado". */
  function lookupCore(key, target) {
    var exact = lookupExact(key, target);
    if (exact != null) return exact;
    var m = key.match(AFFIX);
    if (!m || (!m[1] && !m[3]) || !m[2]) return null;
    var out = lookupExact(m[2], target);
    return out == null ? null : m[1] + out + m[3];
  }

  /** Textos montados com números ("Escore total: 7 pontos") são traduzidos por trechos. */
  function lookupFragments(key, target) {
    var parts = key.split(NUMBER_SPLIT);
    if (parts.length < 2) return null;
    var changed = false;
    var out = parts.map(function (part) {
      var trimmed = part.trim();
      if (!HAS_LETTERS.test(trimmed)) return part;
      var hit = lookupCore(trimmed, target);
      if (hit == null) return part;
      changed = true;
      return part.replace(trimmed, hit);
    });
    return changed ? out.join('') : null;
  }

  function lookupPiece(piece, target) {
    var out = lookupCore(piece, target);
    return out != null ? out : lookupFragments(piece, target);
  }

  var SEGMENT_SPLIT = /(:\s+|\s+[|·—–]\s+|\s+-\s+)/;

  /** Linhas "rótulo: valor" ou "A | B" (relatórios, doses) são traduzidas por segmento. */
  function lookupSegments(key, target) {
    var parts = key.split(SEGMENT_SPLIT);
    if (parts.length < 3) return null;
    var changed = false;
    var out = parts.map(function (part, index) {
      if (index % 2 === 1) return part;
      var trimmed = part.trim();
      if (!HAS_LETTERS.test(trimmed)) return part;
      var hit = lookupPiece(trimmed, target);
      if (hit == null) return part;
      changed = true;
      return part.replace(trimmed, hit);
    });
    return changed ? out.join('') : null;
  }

  function lookup(key, target) {
    var out = lookupPiece(key, target);
    return out != null ? out : lookupSegments(key, target);
  }

  /** Mensagens com várias linhas são traduzidas linha a linha. */
  function translateMessage(message) {
    if (lang === 'pt' || message == null) return message;
    return String(message).split('\n').map(function (line) { return t(line); }).join('\n');
  }

  // Relatórios copiados ou compartilhados saem no idioma escolhido.
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    var writeText = navigator.clipboard.writeText.bind(navigator.clipboard);
    navigator.clipboard.writeText = function (text) { return writeText(translateMessage(text)); };
  }

  if (typeof navigator.share === 'function') {
    var nativeShare = navigator.share.bind(navigator);
    navigator.share = function (data) {
      if (!data || typeof data !== 'object') return nativeShare(data);
      var copy = {};
      Object.keys(data).forEach(function (k) { copy[k] = (k === 'text' || k === 'title') ? translateMessage(data[k]) : data[k]; });
      return nativeShare(copy);
    };
  }

  function selectedText() {
    var el = document.activeElement;
    if (el && /^(TEXTAREA|INPUT)$/.test(el.tagName) && typeof el.selectionStart === 'number') {
      return el.value.slice(el.selectionStart, el.selectionEnd);
    }
    return window.getSelection ? String(window.getSelection()) : '';
  }

  document.addEventListener('copy', function (event) {
    if (lang === 'pt' || !event.clipboardData) return;
    var text = selectedText();
    var out = translateMessage(text);
    if (!text || out === text) return;
    event.clipboardData.setData('text/plain', out);
    event.preventDefault();
  });

  var SHARE_URL = /^(https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/|mailto:)/i;
  var SHARE_PARAMS = ['text', 'body', 'subject'];
  function translateShareUrl(url) {
    if (lang === 'pt' || typeof url !== 'string' || !SHARE_URL.test(url)) return url;
    var q = url.indexOf('?');
    if (q === -1) return url;
    var params = url.slice(q + 1).split('&').map(function (pair) {
      var eq = pair.indexOf('=');
      var name = eq === -1 ? pair : pair.slice(0, eq);
      if (eq === -1 || SHARE_PARAMS.indexOf(name.toLowerCase()) === -1) return pair;
      try {
        var value = decodeURIComponent(pair.slice(eq + 1).replace(/\+/g, ' '));
        return name + '=' + encodeURIComponent(translateMessage(value));
      } catch (e) { return pair; }
    });
    return url.slice(0, q + 1) + params.join('&');
  }
  var openWindow = window.open;
  window.open = function (url) {
    var args = Array.prototype.slice.call(arguments);
    args[0] = translateShareUrl(url);
    return openWindow.apply(window, args);
  };
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (link && lang !== 'pt' && SHARE_URL.test(link.getAttribute('href'))) link.setAttribute('href', translateShareUrl(link.getAttribute('href')));
  }, true);

  ['alert', 'confirm', 'prompt'].forEach(function (name) {
    var original = window[name];
    if (typeof original !== 'function') return;
    window[name] = function (message) {
      var args = Array.prototype.slice.call(arguments);
      args[0] = translateMessage(message);
      return original.apply(window, args);
    };
  });

  /** Traduz um texto em português para o idioma ativo (ou o informado). Sem tradução, devolve o original. */
  function t(text, target) {
    var to = target || lang;
    if (to === 'pt' || text == null) return text;
    var raw = String(text);
    var key = normalizeKey(raw);
    if (!key) return raw;
    var out = lookup(key, to);
    if (out == null) return localizeDates(raw, to);
    return localizeDates(raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0], to);
  }

  // O app só gera datas no formato brasileiro (dd/mm/aaaa). Em inglês, "03/11/2026" seria lido como
  // 11 de março; por isso, em inglês, elas viram ISO (2026-11-03). Espanhol usa dd/mm/aaaa nativamente.
  var BR_DATE = /\b(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/(\d{4})\b/g;
  function localizeDates(text, to) {
    if (to !== 'en' || text.indexOf('/') === -1) return text;
    return text.replace(BR_DATE, function (m, d, mo, y) {
      return y + '-' + (mo.length === 1 ? '0' + mo : mo) + '-' + (d.length === 1 ? '0' + d : d);
    });
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

  /** <option> sem value usa o texto visível como valor; fixa o valor original para a lógica não mudar. */
  function pinOptionValue(el) {
    if (el.tagName === 'OPTION' && !el.hasAttribute('value')) el.setAttribute('value', el.value);
  }

  function translateTextNode(node) {
    if (!node.parentNode || isSkipped(node.parentNode)) return;
    if (lang !== 'pt') pinOptionValue(node.parentNode);
    var src = sourceOf(textMemory.get(node), node.data);
    if (!HAS_LETTERS.test(src) && !(lang === 'en' && /\d\/\d{1,2}\/\d{4}/.test(src))) return;
    var out = translateBlock(src, node.parentNode);
    textMemory.set(node, { src: src, out: out });
    if (node.data !== out) node.data = out;
  }

  function preservesLineBreaks(el) {
    if (el.tagName === 'PRE') return true;
    var ws = window.getComputedStyle ? window.getComputedStyle(el).whiteSpace : '';
    return /^pre/.test(ws) || ws === 'break-spaces';
  }

  /**
   * Em elementos que exibem as quebras de linha (<pre>, white-space: pre*), cada linha é traduzida
   * separadamente (a não ser que o bloco inteiro tenha entrada exata). Nos demais, quebras no código-fonte
   * HTML são só espaço e o texto é traduzido inteiro.
   */
  function translateBlock(text, parent) {
    if (lang === 'pt') return text;
    if (text.indexOf('\n') === -1 || !/\S\s*\n\s*\S/.test(text) || !preservesLineBreaks(parent)) return t(text);
    var exact = lookupExact(normalizeKey(text), lang);
    return exact != null ? exact : translateMessage(text);
  }

  function translateAttrs(el) {
    // Em <textarea> o conteúdo é do usuário, mas placeholder/title/aria-label são da interface.
    var scope = el.tagName === 'TEXTAREA' ? el.parentNode : el;
    if (!scope || scope.nodeType !== 1 || isSkipped(scope)) return;
    var saved = attrMemory.get(el) || {};
    var next = {};
    var isButtonInput = el.tagName === 'INPUT' && /^(button|submit|reset)$/i.test(el.type);
    var names = isButtonInput ? ATTRS.concat('value') : (el.tagName === 'OPTGROUP' ? ATTRS.concat('label') : ATTRS);
    names.forEach(function (name) {
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
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS.concat('value', 'label') });
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

  var FLOATING_DELAY_MS = 1500;

  /** Páginas sem a barra das calculadoras (ex.: RCP Neonatal) recebem um seletor flutuante. */
  function mountFloatingSwitcher() {
    if (document.querySelector('.np-lang') || document.body.classList.contains('np-portal')) return;
    var group = mountSwitcher(document.body, { dark: true });
    if (group) group.classList.add('np-lang-floating');
  }

  function init() {
    var header = document.querySelector('.np-header-inner');
    if (header) mountSwitcher(header, { before: header.querySelector('.np-account') });
    applyAll();
    setTimeout(mountFloatingSwitcher, FLOATING_DELAY_MS);
  }

  window.NEOPED_I18N = {
    t: t,
    has: function (text) { return lookup(normalizeKey(text), 'en') != null; },
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

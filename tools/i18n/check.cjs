#!/usr/bin/env node
/**
 * Verifica calculadoras traduzidas: textos visíveis que continuam iguais ao português,
 * erros de JavaScript que só aparecem em inglês/espanhol e se a página foi marcada como traduzida.
 * Uso: node tools/i18n/check.cjs files/apgar.html [outros.html...]
 */
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const SKIP = 'script,style,[translate="no"],.np-lang';

async function snapshot(browser, file, lang) {
  const context = await browser.newContext();
  await context.addInitScript(l => { localStorage.setItem('neoped_lang', l); localStorage.setItem('neoped_legal_accept_v1', '1'); }, lang);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e.message).slice(0, 120)));
  await page.goto(pathToFileURL(path.resolve(file)).href);
  await page.waitForTimeout(800);
  const data = await page.evaluate(skip => {
    const texts = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const el = n.parentElement;
      if (!el || el.closest(skip) || !el.getClientRects().length) continue;
      const s = n.data.replace(/\s+/g, ' ').trim();
      if (/[A-Za-zÀ-ú]{3}/.test(s)) texts.push(s);
    }
    const i18n = window.NEOPED_I18N;
    return {
      texts,
      intentional: texts.filter(s => i18n && i18n.has(s)),
      translated: !document.getElementById('np-lang-notice'),
      title: document.title
    };
  }, SKIP);
  await context.close();
  return { ...data, errors };
}

(async () => {
  const files = process.argv.slice(2);
  const browser = await chromium.launch();
  let failed = false;
  for (const file of files) {
    const pt = await snapshot(browser, file, 'pt');
    const result = { file };
    for (const lang of ['en', 'es']) {
      const other = await snapshot(browser, file, lang);
      const ptSet = new Set(pt.texts);
      const keep = new Set(other.intentional);
      const same = [...new Set(other.texts.filter(s => ptSet.has(s) && !keep.has(s) && !/^[A-Z0-9 ()/+-]{1,12}$/.test(s)))];
      result[lang] = { markedTranslated: other.translated, title: other.title, newErrors: other.errors.filter(e => !pt.errors.includes(e)), stillPortuguese: same };
      if (!other.translated || result[lang].newErrors.length) failed = true;
    }
    console.log(JSON.stringify(result, null, 1));
  }
  await browser.close();
  process.exit(failed ? 1 : 0);
})();

#!/usr/bin/env node
/**
 * Lista os textos em português de uma calculadora que ainda não têm tradução.
 * Uso: node tools/i18n/extract.cjs files/apgar.html > /tmp/apgar.json
 * Fontes: texto e atributos do HTML (inclusive ocultos) e strings do JavaScript embutido.
 */
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const HAS_TEXT = /[A-Za-zÀ-ú]{2}/;
const CODE_LIKE = /^[#.[]|[{};=]|=>|\bfunction\b|\.(js|css|html|png|svg|json)\b|^https?:|^[\w-]+\(|px\b|^[a-z]+[A-Z]\w*$|^[a-z0-9_-]+$/;

function isUiText(text) {
  const s = text.trim();
  if (!HAS_TEXT.test(s) || CODE_LIKE.test(s)) return false;
  if (/^[A-Z0-9_]+$/.test(s) && s.length <= 6) return false; // siglas e constantes
  return true;
}

/** Strings literais do JS; HTML e template literals viram os trechos de texto entre tags/expressões. */
function scriptStrings(source) {
  const out = [];
  const literal = /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g;
  for (let m = literal.exec(source); m; m = literal.exec(source)) {
    const body = m[2].replace(/\\n/g, '\n').replace(/\\(['"`\\])/g, '$1');
    const pieces = body.split(/\$\{[^}]*\}|<[^>]*>/).map(p => p.replace(/\s+/g, ' ').trim());
    pieces.filter(isUiText).forEach(p => out.push(p));
  }
  return out;
}

(async () => {
  const file = process.argv[2];
  if (!file || !fs.existsSync(file)) { console.error('Arquivo não encontrado: ' + file); process.exit(1); }
  const html = fs.readFileSync(file, 'utf8');
  const inline = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]).join('\n');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.addInitScript(() => { localStorage.setItem('neoped_lang', 'en'); localStorage.setItem('neoped_legal_accept_v1', '1'); });
  const page = await context.newPage();
  await page.goto(pathToFileURL(path.resolve(file)).href);
  await page.waitForTimeout(800);
  const domTexts = await page.evaluate(() => {
    const out = [document.title];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) out.push(meta.content);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const el = n.parentElement;
      if (el && !el.closest('script,style,[translate="no"],.neoped-module-brand,#neoped-app-nav,#neoped-legal-banner,#np-lang-notice')) out.push(n.data);
    }
    document.querySelectorAll('[placeholder],[aria-label],[title],[alt],input[type=button],input[type=submit]').forEach(el => {
      ['placeholder', 'aria-label', 'title', 'alt', 'value'].forEach(a => { if (el.hasAttribute(a) && (a !== 'value' || /button|submit/.test(el.type))) out.push(el.getAttribute(a)); });
    });
    return out;
  });
  const candidates = [...domTexts.map(s => s.replace(/\s+/g, ' ').trim()), ...scriptStrings(inline)].filter(isUiText);
  const unique = [...new Set(candidates)];
  const missing = await page.evaluate(list => list.filter(s => !window.NEOPED_I18N.has(s)), unique);
  await browser.close();
  process.stdout.write(JSON.stringify(missing, null, 1) + '\n');
  console.error(`${file}: ${missing.length} textos sem tradução (de ${unique.length} candidatos)`);
})();

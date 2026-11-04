#!/usr/bin/env node
/**
 * Captura o texto que uma calculadora copia para a área de transferência, em cada idioma.
 * Uso: node tools/i18n/copy-probe.cjs <página> "<código JS que preenche e calcula>" "<código JS que dispara a cópia>"
 * Imprime o texto copiado em pt, en e es, para conferir tradução e números.
 */
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

(async () => {
  const [file, fillCode, copyCode] = process.argv.slice(2);
  const browser = await chromium.launch();
  for (const lang of ['pt', 'en', 'es']) {
    const context = await browser.newContext();
    await context.addInitScript(l => {
      localStorage.setItem('neoped_lang', l); localStorage.setItem('neoped_legal_accept_v1', '1');
      // Gravador instalado antes do núcleo de idiomas, que o envolve com a tradução.
      const record = text => { window.__copied = String(text); return Promise.resolve(); };
      try { Object.defineProperty(navigator, 'clipboard', { value: { writeText: record, readText: () => Promise.resolve(window.__copied || '') }, configurable: true }); } catch (e) {}
      document.addEventListener('copy', e => setTimeout(() => { if (!window.__copied) window.__copied = '[execCommand copy] ' + String(getSelection()); }, 0));
    }, lang);
    const page = await context.newPage();
    page.on('dialog', d => d.accept());
    await page.goto(pathToFileURL(path.resolve(file)).href);
    await page.waitForTimeout(600);
    if (fillCode) await page.evaluate(fillCode).catch(e => console.log('fill error:', e.message));
    await page.waitForTimeout(300);
    if (copyCode) await page.evaluate(copyCode).catch(e => console.log('copy error:', e.message));
    await page.waitForTimeout(500);
    console.log(`===== ${lang} =====\n` + (await page.evaluate(() => window.__copied || '(nada copiado)')));
    await context.close();
  }
  await browser.close();
})();

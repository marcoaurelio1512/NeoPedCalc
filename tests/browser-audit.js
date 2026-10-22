import { chromium } from 'playwright';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes:true });
  const result=[];
  for (const entry of entries) { const file=path.join(dir,entry.name); if (entry.isDirectory()) result.push(...await walk(file)); else if (/\.html?$/.test(file)) result.push(file); }
  return result;
}
const paths = [...(await readdir('.')).filter(name => name.endsWith('.html') && name !== '404.html'), ...await walk('files')];
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel:'chrome', headless:true });
const context = await browser.newContext();
await context.addInitScript(() => localStorage.setItem('neoped_legal_accept_v1','1'));
const page = await context.newPage();
const report=[];
for (const file of paths) {
  const errors=[]; const failed=[];
  const onError=error=>errors.push(error.message);
  const onResponse=response=>{ if(response.status()>=400 && response.url().startsWith(base) && !response.url().includes('/api/account'))failed.push({status:response.status(),url:response.url()}); };
  page.on('pageerror',onError);page.on('response',onResponse);
  try {
    await page.setViewportSize({width:1440,height:1000});
    const response=await page.goto(base+'/'+file.split('/').map(encodeURIComponent).join('/'),{waitUntil:'load',timeout:20000});
    await page.waitForTimeout(80);
    const dimensions=[];
    for (const width of [1440,390,320]) {
      await page.setViewportSize({width,height:900});
      await page.waitForTimeout(30);
      dimensions.push(await page.evaluate(()=>({width:innerWidth,documentWidth:document.documentElement.scrollWidth,bodyWidth:document.body.scrollWidth})));
    }
    report.push({file,status:response.status(),errors:[...new Set(errors)],failed,dimensions});
  } catch(error){report.push({file,error:error.message,errors});}
  page.off('pageerror',onError);page.off('response',onResponse);
}
await writeFile('artifacts/browser-audit.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({pages:report.length,issues:report.filter(result=>result.error||result.errors?.length||result.failed?.length||result.dimensions?.some(d=>d.documentWidth>d.width+1))},null,2));
await browser.close();

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

test('production refuses to start without authentication and payment configuration', async () => {
  const child=spawn(process.execPath,['server/index.js'],{env:{...process.env,NODE_ENV:'production',APP_URL:'https://example.com',SUPABASE_URL:'',SUPABASE_ANON_KEY:'',SUPABASE_SERVICE_ROLE_KEY:'',STRIPE_SECRET_KEY:'',STRIPE_PRICE_MONTHLY:'',STRIPE_PRICE_ANNUAL:''},stdio:'ignore'});
  const [code]=await once(child,'exit');assert.notEqual(code,0);
});
test('server blocks anonymous calculator access, secrets and cross-origin writes in production', async t => {
  const port=3179;
  const child=spawn(process.execPath,['server/index.js'],{env:{...process.env,NODE_ENV:'production',PORT:String(port),HOST:'127.0.0.1',APP_URL:'https://example.com',SUPABASE_URL:'https://example.supabase.co',SUPABASE_ANON_KEY:'test-anon-key',SUPABASE_SERVICE_ROLE_KEY:'test-service-role-key',STRIPE_SECRET_KEY:'sk_test_placeholder',STRIPE_PRICE_MONTHLY:'price_test_monthly',STRIPE_PRICE_ANNUAL:'price_test_annual'},stdio:'pipe'});
  let output='';child.stderr.on('data',chunk=>{output+=chunk});
  t.after(()=>child.kill());
  const base='http://127.0.0.1:'+port;
  let ready=false;
  for(let i=0;i<50;i++){
    try{const response=await fetch(base+'/api/health');if(response.ok){ready=true;break;}}catch{}
    if(child.exitCode!==null)throw new Error(output);
    await delay(100);
  }
  assert.equal(ready,true,'server started');
  for(const file of ['/files/apgar.html','/files/NutriPedWebapp/index.html','/files/ballard/ballard.htm','/%66iles/apgar.html','/FILES/apgar.html','/selecao_calculadoras.html','/CALCULADORAS_NEONATAIS.HTML']){
    const response=await fetch(base+file,{redirect:'manual'});assert.equal(response.status,303,file);assert.equal(response.headers.get('location'),'/conta.html');assert.match(response.headers.get('cache-control'),/no-store/);
  }
  for(const file of ['/.env','/server/index.js','/server/schema.sql','/package.json','/README.md']) assert.equal((await fetch(base+file)).status,404,file);
  assert.equal((await fetch(base+'/api/account')).status,401);
  assert.equal((await fetch(base+'/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://attacker.example'},body:JSON.stringify({email:'user@example.com',password:'a'})})).status,403);
  const publicPage=await fetch(base+'/conta.html');assert.equal(publicPage.status,200);assert.match(publicPage.headers.get('content-security-policy'),/default-src 'self'/);
});

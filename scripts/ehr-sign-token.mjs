#!/usr/bin/env node
// Ferramenta de referência para a TI do hospital (e para testes).
//   node scripts/ehr-sign-token.mjs keygen <pasta>
//       gera par de chaves ES256; a PRIVADA fica com o hospital, a PÚBLICA vai para EHR_CLIENTS.
//   node scripts/ehr-sign-token.mjs sign --key <privada.pem> --iss <id-hospital> --app <https://app> --claims <paciente.json>
//       imprime a URL de abertura (válida por 5 minutos, uso único).
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { SignJWT, exportPKCS8, exportSPKI, generateKeyPair, importPKCS8 } from 'jose';

const ALG = 'ES256';
const TTL_SECONDS = 4 * 60;
const [command, ...rest] = process.argv.slice(2);
const flag = name => { const i = rest.indexOf('--' + name); return i === -1 ? undefined : rest[i + 1]; };
const die = message => { console.error(message); process.exit(1); };

if (command === 'keygen') {
  const dir = rest[0] || 'ehr-keys';
  const { publicKey, privateKey } = await generateKeyPair(ALG, { extractable: true });
  await mkdir(dir, { recursive: true, mode: 0o700 });
  await writeFile(path.join(dir, 'private.pem'), await exportPKCS8(privateKey), { mode: 0o600 });
  const pub = await exportSPKI(publicKey);
  await writeFile(path.join(dir, 'public.pem'), pub);
  console.log(`Chaves em ${dir}/ (private.pem NUNCA sai do hospital).\nEntrada para EHR_CLIENTS:\n` +
    JSON.stringify({ iss: 'hospital-exemplo', name: 'Hospital Exemplo', system: 'MV', alg: ALG, publicKey: pub }));
} else if (command === 'sign') {
  const [keyFile, iss, app, claimsFile] = ['key', 'iss', 'app', 'claims'].map(flag);
  if (!keyFile || !iss || !app || !claimsFile) die('Uso: sign --key private.pem --iss <id> --app <https://app> --claims paciente.json');
  const origin = new URL(app).origin;
  const claims = JSON.parse(await readFile(claimsFile, 'utf8'));
  const key = await importPKCS8(await readFile(keyFile, 'utf8'), ALG);
  const token = await new SignJWT(claims).setProtectedHeader({ alg: ALG, typ: 'JWT' })
    .setIssuer(iss).setAudience(origin).setJti(randomUUID()).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1000) + TTL_SECONDS)
    .sign(key);
  console.log(`${origin}/ehr/launch#token=${token}`);
} else {
  die('Comandos: keygen <pasta> | sign --key ... --iss ... --app ... --claims ...');
}

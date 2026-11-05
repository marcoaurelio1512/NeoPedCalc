# Integração NeoPedCalc ↔ Prontuário (MV, Tasy e outros)

Para: equipes de TI/integração dos hospitais e para quem configura o servidor do NeoPedCalc.

## Como funciona

1. O médico clica em **"Abrir NeoPedCalc"** no prontuário (botão/link externo configurado pela TI).
2. O sistema do hospital gera um **token JWT assinado** com a chave privada do hospital, contendo os dados do paciente, e abre em **nova aba**:
   `https://<NeoPedCalc>/ehr/launch#token=<JWT>`
3. O NeoPedCalc valida a assinatura, a validade e o uso único. Depois abre a sessão da **licença do hospital** (não há login individual) e guarda o paciente **somente naquela aba**.
4. As calculadoras mostram uma faixa com a identificação do paciente e preenchem peso, altura e nascimento quando a unidade do campo confere.
5. O médico copia o relatório, que já sai com o cabeçalho de identificação, e cola na evolução do prontuário.

**Integração somente leitura.** O NeoPedCalc não grava no prontuário e **não armazena dados clínicos**: o servidor apenas valida e devolve os dados para a aba. A auditoria guarda só pseudônimos (HMAC) do registro, do atendimento e do token.

## Contrato do token (JWT)

- **Assinatura:** `ES256` (recomendado), `RS256` ou `PS256`. Chave privada exclusiva do hospital. `HS256` é recusado.
- **Local do token:** fragmento `#token=`. O fragmento não vai para logs de servidor nem é repassado para outros sites. `?token=` também é aceito, mas não é recomendado.

| Claim | Obrigatório | Regra |
|---|---|---|
| `iss` | sim | identificador do hospital combinado com o NeoPedCalc (ex.: `hospital-sao-lucas`) |
| `aud` | sim | origem exata do NeoPedCalc (ex.: `https://neopedcalc.com.br`) |
| `iat`, `exp` | sim | segundos Unix. `exp − iat` ≤ 300 s (5 min) |
| `jti` | sim | identificador único por clique (UUID). Cada token só pode ser usado uma vez |
| `patient.mrn` | sim | número do registro/prontuário |
| `patient.name` | sim | nome como aparece no prontuário |
| `patient.sex` | sim | `M`, `F` ou `I` |
| `patient.birthDateTime` | sim | ISO 8601 **com fuso**, ex.: `2026-11-03T14:20:00-03:00` |
| `patient.gestationalAgeAtBirth` | não | `{ "weeks": 32, "days": 4 }` (inteiros) |
| `patient.birthWeightG` | não | **gramas**, 200–7000 |
| `patient.weightKg` | não | **quilogramas**, 0,2–250 |
| `patient.weightMeasuredAt` | se houver peso | ISO 8601 com fuso: quando o peso foi aferido |
| `patient.heightCm` | não | centímetros, 20–250 |
| `encounter.id`, `encounter.unit` | não | atendimento e unidade (ex.: `UTIN`) |
| `practitioner.name`, `practitioner.crm` | não | médico que abriu |

Valores fora das faixas fazem o token ser **recusado inteiro**. Isso é intencional: peso em gramas enviado como kg, por exemplo, não pode ser aceito silenciosamente.

Exemplo do payload:
```json
{
  "iss": "hospital-sao-lucas", "aud": "https://neopedcalc.com.br",
  "iat": 1762354800, "exp": 1762355040, "jti": "2f6c1f0e-8a7e-4f7b-9a51-0f5a0e3b8d11",
  "patient": {
    "mrn": "123456", "name": "RN de Maria Silva", "sex": "F",
    "birthDateTime": "2026-11-03T14:20:00-03:00",
    "gestationalAgeAtBirth": { "weeks": 32, "days": 4 },
    "birthWeightG": 1650, "weightKg": 1.58, "weightMeasuredAt": "2026-11-05T06:00:00-03:00", "heightCm": 42
  },
  "encounter": { "id": "AT-998877", "unit": "UTIN" },
  "practitioner": { "name": "Dra. Ana Souza", "crm": "CRM-SP 000000" }
}
```

## Gerar chaves e um link de teste

```bash
node scripts/ehr-sign-token.mjs keygen ehr-keys          # private.pem fica no hospital; imprime a entrada de EHR_CLIENTS
node scripts/ehr-sign-token.mjs sign --key ehr-keys/private.pem --iss hospital-exemplo \
     --app https://neopedcalc.com.br --claims paciente.json  # imprime a URL de abertura
```

Qualquer biblioteca JOSE/JWT padrão serve no lado do hospital, por exemplo Nimbus JOSE (Java), `System.IdentityModel.Tokens.Jwt` (.NET), PyJWT, `jose` (Node) ou PL/SQL via serviço intermediário. No MV e no Tasy, normalmente quem gera o link é o **motor de integração** do hospital, ou um pequeno serviço chamado pelo botão de link externo.

## Configuração no servidor NeoPedCalc

| Variável | Uso |
|---|---|
| `EHR_SESSION_SECRET` | ≥ 32 caracteres aleatórios. **Obrigatória em produção.** Assina a sessão da licença e os pseudônimos de auditoria |
| `EHR_CLIENTS` | array JSON com os hospitais licenciados: `[{"iss":"...","name":"...","system":"MV\|TASY\|OTHER","alg":"ES256","publicKey":"-----BEGIN PUBLIC KEY-----\n..."}]`. `"active": false` suspende a licença na hora, inclusive para sessões já abertas |
| `EHR_SANDBOX` | `true` libera `/ehr/sandbox` (hospital de teste). Ligado por padrão só fora de produção. **Em produção, ligue apenas para testes e desligue depois**: ele permite abrir as calculadoras sem licença |

Também é preciso executar `server/schema.sql` no Supabase (tabela `ehr_launch_audit`). Sem Supabase, a auditoria vai só para o log, com pseudônimo.

Validade: o link vale 5 min e uma única vez. A sessão da licença dura 12 h no navegador. O paciente fica na aba por até 2 h ou até "Encerrar paciente" / fechar a aba.

## Segurança do paciente

- A faixa fixa em todas as telas mostra nome, registro, nascimento, idade (em horas nas primeiras 72 h), IG ao nascer, IG corrigida e peso com a data da aferição.
- O preenchimento acontece **só em campos vazios**, segundo um mapa auditado por calculadora (gramas × kg, peso atual × peso ao nascer). Há uma checagem extra contra o rótulo e os limites `min`/`max` do campo: se houver qualquer divergência, o campo não é preenchido.
- A **idade gestacional não é preenchida automaticamente**, porque há campos em semanas decimais e campos em "s+d", e a conversão é ambígua. Ela aparece na faixa para o médico digitar.
- A calculadora obstétrica não recebe preenchimento (lá a data de nascimento é da gestante).
- Campos alterados depois do preenchimento ficam âmbar e saem listados no relatório copiado.

## Testes

- `npm test`: contrato do token, segurança da sessão e lógica de preenchimento.
- `node tests/ehr-browser.js`: fluxo completo no navegador via sandbox (com o servidor rodando).

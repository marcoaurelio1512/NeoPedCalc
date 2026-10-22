# Publicar o NeoPedCalc no Railway

A configuração `railway.json` utiliza o `Dockerfile`, com verificação em `/api/health` e reinício em caso de falha. O processo executa como usuário `node`, escuta em `0.0.0.0` e respeita a variável `PORT`. Os arquivos copiados pertencem a esse usuário, inclusive os módulos legados que têm permissões restritas no projeto original.

## 1. Preparar os serviços

- Configure Supabase Auth e execute `server/schema.sql`, conforme `PUBLICACAO.md`.
- Configure na Stripe os dois preços recorrentes e ative o Customer Portal.
- Disponibilize esta pasta em um repositório privado. Não envie `.env` nem credenciais. Inclua `package-lock.json`, `railway.json`, `Dockerfile`, `server/`, `css/`, `js/`, `images/`, `files/` e os arquivos HTML da raiz.

Também é possível usar a CLI do Railway para enviar a pasta; `.railwayignore` exclui dependências locais, credenciais e evidências de testes. Não foi realizado upload nem deploy nesta preparação.

## 2. Criar o serviço

No Railway, crie um projeto e um serviço a partir do repositório. Use a raiz desta aplicação como Root Directory. A configuração no código seleciona o Dockerfile; não configure um comando de build adicional nem um servidor de arquivos estáticos. O comando de início já é `node server/index.js`, definido na imagem.

Em Networking, gere o domínio público do serviço ou configure seu domínio próprio. Copie a origem HTTPS para `APP_URL` antes do deploy final. Uma primeira tentativa sem as variáveis obrigatórias falhará propositalmente; preencha-as e faça um novo deploy. Use a mesma origem nos links de confirmação e recuperação do Supabase.

## 3. Definir as variáveis do serviço

Em **Variables**, preencha:

```dotenv
NODE_ENV=production
HOST=0.0.0.0
APP_URL=https://SEU-SERVICO.up.railway.app
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_ANON_KEY=PREENCHER
SUPABASE_SERVICE_ROLE_KEY=PREENCHER
STRIPE_SECRET_KEY=PREENCHER
STRIPE_PRICE_MONTHLY=price_PREENCHER
STRIPE_PRICE_ANNUAL=price_PREENCHER
TRUST_PROXY=1
```

Os valores acima são exemplos, não credenciais funcionais. Preencha diretamente no painel. Não reutilize o `.env.example` local sem alterar `NODE_ENV` e `HOST`.

`TRUST_PROXY=1` pressupõe que o aplicativo recebe as requisições por um único proxy confiável. Confira a cadeia real da implantação, especialmente se adicionar outro proxy/CDN. O rate limit desta versão é em memória por processo; use uma única réplica inicialmente. Escalar réplicas exige armazenamento compartilhado dos limites e homologação da concorrência no checkout.

O servidor usa `process.env.PORT`; não precisa fixar a porta no painel. Se definir uma porta manualmente ou um Target Port, mantenha ambos consistentes. Não há volume local obrigatório: contas/vínculos ficam no Supabase, pagamentos na Stripe, e os dados dos módulos permanecem no navegador do usuário.

## 4. Validar o deploy

- Aguarde o health check de `/api/health`. Ele valida o processo, não as credenciais dos provedores.
- Abra o domínio HTTPS. O banner de prévia local não deve aparecer.
- Teste cadastro, confirmação do e-mail e recuperação de senha com os endereços públicos autorizados no Supabase.
- Acesse `/files/apgar.html` sem login: deve redirecionar para a conta.
- Homologue checkout, liberação do acesso e gerenciamento/cancelamento usando Stripe em modo de teste antes de configurar pagamentos reais.
- Ao trocar para domínio próprio, atualize `APP_URL` e a configuração de retorno do Supabase. Entrar pelo domínio antigo pode exibir a interface, mas operações de escrita são recusadas se a origem não corresponder a `APP_URL`; utilize um único domínio de acesso.

Se aparecer “Configuração de produção incompleta”, faltam variáveis obrigatórias. Se aparecer “Application failed to respond”, confira `HOST`, `PORT`, Target Port e os logs. Se login/checkout retornar erro de origem, verifique se `APP_URL` é exatamente a origem HTTPS acessada, sem caminho.

## Documentação oficial consultada

- [Configuração em código](https://docs.railway.com/config-as-code/reference)
- [Dockerfiles](https://docs.railway.com/builds/dockerfiles)
- [Rede pública e portas](https://docs.railway.com/networking/public-networking)
- [Health checks](https://docs.railway.com/deployments/healthchecks)

As pendências de ativação comercial e revisão clínica permanecem descritas em `PUBLICACAO.md`.

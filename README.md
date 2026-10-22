# NeoPedCalc 2

Aplicação web educacional de neonatologia e pediatria. Interface responsiva, catálogo de 80 ferramentas únicas, busca, filtros, favoritos, referências e estrutura de assinatura mensal/anual com login.

## Executar a prévia local

Requisitos: Node.js 22 ou superior e npm. Para a auditoria estrutural, Python 3.

```sh
npm ci
npm run dev
```

Abra **http://localhost:3000**. Sem credenciais, o servidor abre uma **prévia local** com as calculadoras liberadas para revisão. Cadastro e cobrança ficam indisponíveis e a interface informa essa condição. O servidor escuta somente em `127.0.0.1` por padrão.

A prévia não deve ser publicada para compradores. `NODE_ENV=production` impede inicialização sem a configuração completa e exige HTTPS no endereço público.

## Hospedar no Railway

O projeto inclui `railway.json`, Dockerfile e health check. Siga [docs/RAILWAY.md](docs/RAILWAY.md) para criar o serviço, configurar o domínio e preencher as variáveis. Nenhum deploy externo foi executado nesta preparação.

## Ativar contas e assinaturas

1. Crie um projeto Supabase e execute [server/schema.sql](server/schema.sql).
2. Ative autenticação por e-mail/senha, confirmação de e-mail e SMTP de produção.
3. Configure o endereço público como Site URL e permita o retorno em `https://SEU-DOMINIO/conta.html` e `https://SEU-DOMINIO/conta.html?recovery=1`.
4. Na Stripe, crie dois preços recorrentes: mensal e anual, com intervalo de uma unidade, e ative o Customer Portal com a política desejada de cancelamento/renovação. Os valores exibidos são lidos desses preços; nenhum valor fictício foi definido.
5. Copie `.env.example` para `.env` e preencha as variáveis. Nunca publique `.env`, a chave `service_role` ou a chave secreta Stripe.
6. Faça os testes em ambiente de homologação e, depois, use credenciais e preços de produção na hospedagem.

Leia [docs/PUBLICACAO.md](docs/PUBLICACAO.md) para configuração, fluxo de confirmação/recuperação, publicação Docker e verificações antes do lançamento.

## Arquitetura

- HTML/CSS/JavaScript preservam os módulos existentes; a camada visual compartilhada é `css/neoped-modern.css`.
- `js/catalog-data.js` conserva os destinos e áreas do catálogo original.
- `server/index.js` serve somente diretórios e páginas permitidos. Os módulos em `/files/` e os catálogos exigem autenticação e assinatura válida em produção.
- Supabase Auth verifica a identidade. Tokens permanecem em cookies `HttpOnly`, `SameSite=Lax` e `Secure` em produção.
- A tabela `billing_accounts` relaciona usuário e cliente Stripe, com RLS e sem permissões para clientes públicos.
- O servidor consulta o estado atual da assinatura na Stripe para liberar acesso. O retorno do checkout não libera acesso por si só. Esta versão não depende de webhook nem conserva uma cópia local do status da assinatura.
- Pagamentos e alteração/cancelamento de planos acontecem nas páginas hospedadas da Stripe. Os dados completos do cartão não passam pelo aplicativo.
- Dados clínicos continuam no navegador, conforme o comportamento dos módulos legados; não existe prontuário em nuvem. Logout apaga o armazenamento local e de sessão do domínio. Use domínio exclusivo para esta aplicação.

## Verificação

```sh
npm test
npm run check
npm run test:browser
npm run audit:browser
```

Os dois últimos comandos precisam do servidor local e do Google Chrome instalado. `tests/browser-audit.js` verifica abertura e erros JavaScript das páginas em 1440, 390 e 320 px; `tests/smoke.js` testa os fluxos de navegação, busca, favoritos, aceite, ajuda, exemplos numéricos e conta. Evidências são gravadas em `artifacts/`, ignorada pelo Git.

Os testes automatizados não constituem validação clínica de todas as calculadoras. Os fluxos reais de confirmação de e-mail, recuperação, pagamento, renovação e cancelamento dependem dos serviços configurados e precisam ser homologados antes das vendas.

Consulte [docs/REVISAO.md](docs/REVISAO.md) para alterações, achados e limites da revisão.

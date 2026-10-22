# Publicação e ativação comercial

## Situação da entrega

Interface, servidor de autenticação, integração de checkout e bloqueio de acesso estão implementados. A versão local funciona sem credenciais apenas como prévia. Não foram criadas contas nos provedores nem efetuadas cobranças ou publicação externa.

Ainda dependem do responsável: preços, credenciais, domínio, hospedagem, configuração de e-mail e políticas comerciais. A revisão clínica completa das fórmulas, dados de referência, alertas e adequação da finalidade declarada também precisa ser concluída antes do lançamento. A aparência ou o aviso educacional não comprovam validação clínica ou adequação regulatória.

## Variáveis

| Variável | Finalidade |
| --- | --- |
| `NODE_ENV` | `production` na publicação; proíbe fallback de prévia |
| `APP_URL` | Origem pública HTTPS, sem caminho, ex.: `https://app.seudominio.com.br` |
| `HOST` | `0.0.0.0` em containers/hospedagem; local usa `127.0.0.1` |
| `PORT` | Porta definida pela hospedagem; padrão 3000 |
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_ANON_KEY` | Chave pública para autenticação |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave privada de servidor, nunca enviada ao navegador |
| `STRIPE_SECRET_KEY` | Chave secreta do modo correto: teste ou produção |
| `STRIPE_PRICE_MONTHLY` | ID do preço recorrente mensal |
| `STRIPE_PRICE_ANNUAL` | ID do preço recorrente anual |
| `TRUST_PROXY` | Número real de proxies entre cliente e servidor; configure conforme a hospedagem |

Use um domínio exclusivo: a saída da conta limpa o armazenamento do domínio. Não hospede o aplicativo como uma pasta de outro sistema que use o mesmo armazenamento.

## Supabase

Execute `server/schema.sql` no SQL Editor. Não adicione políticas de leitura pública à tabela de cobrança. O servidor usa a chave privada para os vínculos e a chave pública para as operações de autenticação.

Ative o provedor e-mail/senha e a confirmação de cadastro. Configure SMTP e revise limites de envio antes de aceitar compradores. Configure Site URL e Redirect URLs para a origem de produção e os caminhos de conta usados no README.

Os links padrão de confirmação e recuperação do Supabase podem devolver a sessão no fragmento da URL. A página de conta remove o fragmento da barra de endereço, envia os tokens ao servidor para verificação e recebe cookies `HttpOnly`. Também há suporte a modelos de e-mail com `token_hash`, por exemplo:

- Confirmação: `{{ .SiteURL }}/conta.html?token_hash={{ .TokenHash }}&type=signup`
- Recuperação: `{{ .SiteURL }}/conta.html?token_hash={{ .TokenHash }}&type=recovery`

Valide os templates com um cadastro e recuperação reais em homologação. Senhas novas exigem no mínimo 12 caracteres. Configure os demais requisitos e proteções disponíveis no projeto Supabase conforme sua política de contas.

## Stripe

Crie produtos/preços na moeda e valores escolhidos pelo responsável. Os IDs devem representar recorrências de **um mês** e **um ano**. A interface lê os valores do servidor. O checkout valida o intervalo e utiliza as páginas hospedadas da Stripe.

Ative o Customer Portal: atualização de forma de pagamento, consulta das cobranças e cancelamento da renovação. Defina no painel as regras de cancelamento, mudança de plano e eventuais créditos. Essas decisões não foram inventadas no código.

O acesso é conferido pelo servidor consultando assinaturas do cliente. Apenas `active` e `trialing`, com preço deste produto e sem pausa de cobrança, liberam módulos. `past_due`, `unpaid`, `paused`, `canceled` e estados incompletos não liberam acesso. Uma assinatura existente com cobrança pendente deve ser gerenciada pelo portal, evitando nova assinatura duplicada.

Não é necessário webhook nesta arquitetura: o estado é consultado diretamente na Stripe a cada verificação. Isso tem custo de latência e chamadas de API. Para escala maior, implemente cache com invalidação por webhooks assinados e testes de ordenação/idempotência; não substitua a verificação por um indicador no `localStorage`.

## Hospedagem

A hospedagem escolhida é o Railway. O passo a passo específico está em [RAILWAY.md](RAILWAY.md).

Publique como **serviço Node/container**, com todas as rotas passando pelo servidor. Publicar somente os arquivos em hospedagem estática deixa os módulos acessíveis e ignora a autenticação.

O Dockerfile usa Node 24, instala dependências de produção e executa com usuário sem privilégios. Crie a imagem localmente ou conecte o repositório à hospedagem de sua escolha:

```sh
docker build -t neopedcalc .
docker run --env-file .env.production -p 3000:3000 neopedcalc
```

O arquivo de ambiente deve conter `NODE_ENV=production`, `HOST=0.0.0.0`, as credenciais e `APP_URL` com domínio HTTPS. `.env.production` não entra na imagem nem no Git. O TLS termina no proxy/hospedagem; configure corretamente `TRUST_PROXY`. Não publique a porta local diretamente sem TLS.

Use `/api/health` como health check. Ele verifica disponibilidade do processo; não valida as credenciais dos provedores. Monitore falhas HTTP e disponibilidade de Supabase/Stripe. Os logs do servidor não imprimem senhas, tokens ou dados clínicos.

## Homologação comercial necessária

Com Stripe em modo de teste e Supabase configurado, execute os seguintes fluxos antes de usar credenciais reais:

1. Cadastro, confirmação do e-mail, login, logout e recuperação de senha.
2. Usuário sem assinatura tentando abrir diretamente `/files/apgar.html`: deve voltar à conta.
3. Assinatura mensal e anual com pagamento confirmado: a conta deve liberar acesso apenas após confirmação na Stripe.
4. Checkout cancelado ou pagamento recusado: acesso permanece bloqueado.
5. Cliente com assinatura existente: nova contratação deve ser impedida, oferecendo gerenciamento pelo portal.
6. Renovação, atraso de pagamento, cancelamento imediato e ao fim do período, conforme as regras configuradas.
7. Solicitações de suporte, exclusão de conta e tratamento dos dados de cobrança: testar o procedimento operacional. A exclusão da conta no Supabase não cancela a cobrança automaticamente; cancele/verifique a assinatura na Stripe antes de excluir a conta.
8. Revisão dos termos, identificação do fornecedor, política de reembolso/cancelamento, privacidade e suporte com o responsável pelo lançamento. Complete as condições comerciais e os procedimentos antes de vender.
9. Validação clínica documentada de cada módulo, unidades, faixas de entrada, fórmulas, referências, interpretações e resultados exportados.

A prévia não processa pagamentos e os testes locais não substituem esses fluxos reais.

## Fontes técnicas

- [Supabase: verificação de identidade no servidor](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
- [Supabase: atualização de sessão](https://supabase.com/docs/reference/javascript/auth-refreshsession)
- [Stripe: objeto de assinatura e estados](https://docs.stripe.com/api/subscriptions/object)

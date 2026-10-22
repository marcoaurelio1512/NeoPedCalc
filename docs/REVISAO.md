# Revisão da aplicação — 16/10/2026

## Entrega

- Identidade visual compartilhada em verde profundo, superfícies claras, tipografia consistente e layouts responsivos.
- Página inicial, catálogos, planos, conta, privacidade, termos, página de acesso e erro 404 redesenhados.
- Catálogo original preservado: 46 entradas neonatais + 43 pediátricas, totalizando 80 destinos únicos. Busca tolerante a acentos, filtros por área/especialidade, favoritos persistentes e estado de busca na URL.
- Bibliografia preservada, com 354 itens e busca por texto.
- Camada visual compartilhada aplicada às 94 páginas HTML/HTM, preservando estruturas e comportamentos particulares dos módulos e as exceções de tema/NutriPed.
- Nova estrutura de assinatura: Supabase Auth, cookies HttpOnly, Stripe Checkout, Customer Portal, vínculo de cobrança protegido por RLS e autorização no servidor.
- Dockerfile, exemplo de variáveis, instruções de publicação e testes automatizados.

## Problemas corrigidos

| Problema | Correção |
| --- | --- |
| Estilos globais apagavam todos os focos e bordas semânticas | Retiradas as regras universais destrutivas; foco visível e estados próprios dos módulos preservados |
| Aparência divergente e cabeçalhos sem navegação consistente | Camada visual comum e acesso ao catálogo nos módulos |
| Catálogos duplicavam implementações e tinham estrelas sem suporte adequado ao teclado | Catálogo comum, botões com nomes acessíveis e estados de favorito atualizados após remoção |
| Leitura de favoritos podia falhar com armazenamento indisponível/corrompido | Tratamento de erros e estado em memória para a sessão |
| Campos de rádio podiam ser restaurados incorretamente pelo utilitário global | Estado individual por campo, com booleano explícito; senhas, arquivos e campos sensíveis de autenticação excluídos |
| Apgar restaurava os campos, mas podia manter o contador de escore anterior à restauração | Recalculados os contadores após restauração; seleção visual sincronizada |
| Apgar permitia tratar grupos não respondidos como zero no relatório | Grupos obrigatórios e validação antes de gerar relatório |
| Termo completo reabria o mesmo modal obrigatório, sem botão de fechar | Modal reconstruído conforme o modo de leitura; fechamento e foco corrigidos |
| Modal legal sem contenção de foco e retorno ao controle de origem | Suporte a Tab, foco inicial e retorno; Escape no modo de leitura |
| Banner legal podia aparecer fora da tela quando não havia barra inferior | Posicionamento inferior calculado também no portal |
| URL de início incorreta em abertura por arquivo local | Base calculada a partir da URL real do script |
| Navegação de volta podia encaminhar para outro site | Retorno ao histórico apenas com referência da mesma origem |
| Duas páginas de fenobarbital falhavam na inicialização | Eliminado bloqueio legado de gestos e corrigida terminação da atribuição de `window.onclick` |
| 37 módulos bloqueavam gestos nativos e o NutriPed bloqueava zoom por gesto/teclado | Removidos esses bloqueios; meta viewport permite zoom |
| Fenobarbital: resultado em dias rotulado como horas | Conversão explícita ×24 na tela, relatório e explicação, com teste numérico |
| Fenobarbital: divisão por zero/valores não físicos | Validação de finitude, idade não negativa e demais entradas estritamente positivas; resultado anterior descartado na falha |
| Inserções confirmadas de nomes/textos em HTML | Escape de texto em pontos identificados de listas, resumos e relatórios; IDs legados inválidos filtrados na tabela PALS |
| Plotly legado dependia de `eval` e falhava com a política de segurança | Plotly strict 4.1.2 local; gráfico gerado e verificado no navegador com CSP ativa |
| Dependências do módulo NICE carregadas de CDN em runtime | Bootstrap 5.3.8 e Plotly versionados localmente, com hashes e script de obtenção |
| Verificador antigo usava diretório e nomes de arquivos incorretos | Auditoria portátil de todas as páginas, recursos locais e sintaxe de scripts |
| Projeto estático não protegia conteúdo comercial | Servidor bloqueia catálogo, documentos e recursos de `/files/` sem assinatura em produção |

A relação farmacocinética usada na correção dimensional é discutida em [How Transporters Have Changed Basic Pharmacokinetic Understanding](https://pmc.ncbi.nlm.nih.gov/articles/PMC7241423/). A conversão de unidades foi verificada pela análise dimensional: L ÷ (L/dia) = dias; ×24 = horas. Isso não valida o modelo de estimativa de clearance, as premissas, os volumes de distribuição ou as decisões terapêuticas do módulo.

## Verificações executadas

- Auditoria estrutural: 94 páginas; nenhum recurso local ausente ou erro de sintaxe inline no resultado final.
- Auditoria no Chrome: 93 páginas navegáveis, verificadas em 1440, 390 e 320 px; resultado em `artifacts/browser-audit.json`. O documento de erro 404 é verificado no teste de fluxo.
- Fluxos no navegador: navegação, aceite inicial e reabertura do termo, busca, ausência de resultados, favoritos adicionados/removidos após recarregar, ajuda pelo teclado, cálculo e restauração de Apgar, exemplos numéricos e divisão por zero em fenobarbital, geração do gráfico NICE com bibliotecas locais, aviso de conta indisponível na prévia e 404.
- Testes do servidor: início de produção recusado com configuração ausente, bloqueio de páginas e assets sem sessão, caminhos codificados e maiúsculos, segredos e arquivos internos não publicados, requisições de escrita de outra origem rejeitadas e estados de assinatura que concedem/revogam acesso.
- Auditoria npm das dependências de produção: nenhuma vulnerabilidade reportada na execução da revisão. Essa verificação não abrange os scripts legados/vendorizados nem equivale a uma auditoria completa de segurança.

## Limites e ativação pendente

Esta revisão automatiza abertura, sintaxe, recursos locais e alguns fluxos representativos. **Não representa revisão clínica completa de todas as fórmulas, doses, faixas, textos interpretativos ou referências.** Não foram homologados pagamentos nem e-mails reais: as credenciais dos serviços não foram fornecidas.

Os módulos legados conservam dados no dispositivo. Isso é informado na interface e na política de privacidade; não há base de prontuários no servidor. Antes de oferecer o produto, conclua a revisão clínica e as políticas de privacidade/comercialização conforme a finalidade do software, além da configuração e homologação descritas em `PUBLICACAO.md`.

A proteção de conteúdo depende do servidor Node. Hospedagem estática não oferece o bloqueio implementado. A política CSP mantém `unsafe-inline` porque os módulos legados usam scripts e handlers inline; eliminá-los exige refatoração posterior com testes por módulo. A versão não inclui sincronização de favoritos em nuvem, prontuário em nuvem, auditoria clínica, exclusão automática de conta/cobrança nem aplicação nativa.

Backup anterior às alterações: `/tmp/neopedcalc-before-modernization.tar.gz` (temporário, fora da pasta publicada).

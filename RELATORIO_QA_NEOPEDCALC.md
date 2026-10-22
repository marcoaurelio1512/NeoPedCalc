# Relatório de QA – NeoPedCalc

**Data:** 11/03/2025  
**Escopo:** Aplicação completa NeoPedCalc (calculadoras neonatais e pediátricas)  
**Tipo de aplicação:** HTML estático (sem backend; servidor de arquivos apenas)

---

## FASE 1 — Preparação do ambiente

### 1.1 Estrutura do projeto

- **Raiz:** `index.html`, `selecao_calculadoras.html`, `calculadoras_neonatais.html`, `calculadoras_pediatricas.html`, `advertencias.html`, `bibliografia.html`, `pagina_indisponivel.html`
- **CSS global:** `css/neoped-responsive.css`
- **JS global:** `js/neoped-nav.js` (navegação Voltar/Home e estado de formulários)
- **Assets:** `images/img14536001.png`, `images/ecg/` (ECG RCP), `images/NICE logo.png`
- **Módulos:** 80+ arquivos HTML em `files/` e subpastas (`files/BSA/`, `files/ballard/`, `files/Neurointensivismo/`, `files/NutriPedWebapp/`, `files/manuseio_ventilacao_*`, `files/Ritmos ECG PALs 2025/`)

### 1.2 Como executar

- **Backend:** Nenhum (sem Flask, FastAPI, Node).
- **Servidor:** Servidor HTTP estático.
- **Comando usado:** `python3 -m http.server 8765` (na raiz do projeto).
- **URL de acesso:** `http://127.0.0.1:8765/` ou `http://localhost:8765/`

### 1.3 Verificação

- Ambiente virtual Python: **não aplicável** (projeto 100% estático).
- Servidor iniciado na porta **8765**.
- Todos os arquivos HTML e recursos referenciados existem no disco (ver Fase 2).

---

## FASE 2 — Teste estrutural e mapeamento

### 2.1 Módulos mapeados

| Módulo | Descrição | Páginas / Observação |
|--------|-----------|------------------------|
| **Navegação principal** | Entrada e seleção | index, selecao_calculadoras, calculadoras_neonatais, calculadoras_pediatricas |
| **Avisos e legal** | Termos e avisos | advertencias, bibliografia, pagina_indisponivel |
| **Calculadoras neonatais** | Medicações, escores, avaliações, RCP neonatal, etc. | 50+ links em calculadoras_neonatais.html |
| **Calculadoras pediátricas** | Medicações, escores, NutriPed, RCP PALS, etc. | 45+ links em calculadoras_pediatricas.html |
| **Formulários clínicos** | Doses, escores, gasometria, ventilação, etc. | 1 formulário por HTML em files/ |
| **Resultados** | Exibição de scores e cálculos | Dentro de cada calculadora (resultados em página) |
| **Navegação interna** | Voltar / Home | neoped-nav.js injetado em todas as páginas que carregam o script |

### 2.2 Links verificados

- **Total de destinos únicos checados:** 83 (incl. css e arquivos em files/).
- **Existência no disco:** Todos os 83 destinos existem (OK).
- **Links quebrados conhecidos:** Nenhum (todos os href apontam para arquivos existentes).

### 2.3 Recursos estáticos

- **CSS:** `css/neoped-responsive.css` – referenciado por todos os HTML (caminhos `css/`, `../css/`, `../../css/` conforme profundidade).
- **JS:** `js/neoped-nav.js` – referenciado de forma consistente; em `rcp-pediatrica-pals2025.html` o script no README popup usa `<\/script>` (escapado) para não fechar o bloco (correto).
- **Imagens:**
  - Logo: `images/img14536001.png` – existe.
  - RCP Pediátrica: `files/Ritmos ECG PALs 2025/*.webp` – pasta e arquivos existem.
  - BSA: `files/BSA/BSA.png` – existe.
  - Neurointensivismo: `files/Neurointensivismo/image002.png` – existe.

### 2.4 Problemas estruturais identificados

| Severidade | Item | Detalhe |
|------------|------|---------|
| **MÉDIO** | Nome do arquivo com caractere especial | `Score_de_Avaliacao_Sedação_escala_Confort_B_e_AAM.html` contém “ç”. Em alguns ambientes (servidores, builds, URLs) pode haver diferença entre NFC/NFD ou encoding, podendo quebrar o link em `calculadoras_pediatricas.html` (linha 396). |
| **BAIXO** | Página “Não concordo” | O botão “Não concordo com esses termos” em `index.html` leva para `pagina_indisponivel.html` – comportamento esperado, mas o usuário não tem como voltar ao fluxo principal exceto por “Voltar” do navegador ou barra NeoPedCalc (após abrir outra página). |

---

## FASE 3 — Teste funcional (por análise de código)

*Nota: Testes manuais (cliques, preenchimento de formulários, cálculos ao vivo) não foram executados; a análise baseia-se em revisão de HTML/JS e consistência de IDs/funções.*

### 3.1 Páginas de entrada

- **index.html:** Botões “Eu li, concordo” e “Não concordo” com href corretos; script atualiza `.subtitle` com data em pt-BR; `neoped-nav.js` carregado.
- **selecao_calculadoras.html:** Dois cards com links para `calculadoras_neonatais.html` e `calculadoras_pediatricas.html`; mesmo padrão de data e nav.

### 3.2 Listagens de calculadoras

- **calculadoras_neonatais.html / calculadoras_pediatricas.html:** Sistema de favoritos (localStorage, estrelas, `favoritesSection`/`favoritesList`) implementado; `toggleFavorite`, `loadFavorites`, `updateFavoritesList` e `removeFavoriteFromList` presentes e coerentes com os IDs no HTML.

### 3.3 Módulos em `files/`

- Cada calculadora carrega `neoped-responsive.css` e `neoped-nav.js` com caminho relativo (`../` ou `../../`) correto para sua profundidade.
- **NutriPedWebapp:** Usa `../../css/neoped-responsive.css` e `../../js/neoped-nav.js`; também `js/chart.min.js` e `js/jspdf.min.js` (relativos a `files/NutriPedWebapp/`) – paths consistentes.

### 3.4 Riscos funcionais (a validar em teste manual)

| Severidade | Módulo | Risco |
|------------|--------|--------|
| **MÉDIO** | Múltiplas calculadoras | Campos obrigatórios sem `required` ou validação JS podem permitir envio com dados vazios e resultados incoerentes. |
| **MÉDIO** | Cálculos clínicos | Fórmulas e constantes devem ser conferidas com a literatura (fora do escopo desta QA de código). |
| **BAIXO** | Clipboard | Uso de `navigator.clipboard.writeText` (ex.: APGAR, RCP) pode falhar em contextos não seguros (não-HTTPS) ou com permissão negada. |
| **BAIXO** | localStorage/sessionStorage | Favoritos e estado de formulários dependem de storage; modo privado ou políticas do navegador podem impedir persistência. |

---

## FASE 4 — Teste JavaScript (análise estática)

### 4.1 Scripts globais

- **neoped-nav.js:** IIFE, `getAppBase`, `getHomeUrl`, `getPageKey`, `serializeFormState`, `restoreFormState`, `saveState`, `loadState`, `goBack`, `goHome`, `getPageTitle`, `injectNav`, `escapeHtml`, `init` – sem referências a APIs inexistentes; compatível com navegadores modernos.

### 4.2 Inline e embutidos

- **apgar.html:** Funções `atualizarScore`, `calcularScore`, `interpretarScore`, `gerarRelatorio`, etc.; elementos referenciados por ID (`apgarForm`, `freqCardiaca1`, `score1`, `results`, `modalInfo`, etc.) existem no HTML.
- **score_alvarado.html:** Uso de `getElementById('modalInfo')`, `('scoreNumber')`, `('results')`, `('interpretation')`, `('criteriaList')`, `('nome')`, `('idade')`, `('data')` – IDs presentes no documento.

### 4.3 Possíveis fontes de erro em tempo de execução

| Severidade | Arquivo / contexto | Descrição |
|------------|--------------------|-----------|
| **ALTO** | Páginas com script dinâmico | Qualquer página que chame `getElementById` antes do DOM estar pronto pode retornar `null`; a maioria usa `DOMContentLoaded` ou script no final do body – verificar páginas que não usem. |
| **MÉDIO** | NutriPedWebapp (14k+ linhas) | Grande volume de JS; risco de variáveis ou funções indefinidas em fluxos pouco usados; recomendado teste manual e inspeção do console. |
| **BAIXO** | RCP Pediátrica / Neonatal | Uso de `localStorage` e estado complexo; erros de parsing (ex.: dados corrompidos) podem gerar exceções se não houver try/catch. |

### 4.4 Dependências externas

- Nenhum CDN; apenas Chart.js e jsPDF locais em `files/NutriPedWebapp/js/`. Quebra de carregamento desses scripts afetaria apenas NutriPedWebapp.

---

## FASE 5 — Teste de responsividade (análise de CSS)

### 5.1 CSS global (`neoped-responsive.css`)

- Contém regras para `max-width: 100%`, `overflow-x: hidden`, contenção de inputs/datetime, media queries para 768px e 480px.
- Cards, formulários e modais com `width: 100%`, `box-sizing: border-box`, `min-width: 0` para evitar overflow.

### 5.2 Riscos de layout

| Severidade | Item | Observação |
|------------|------|------------|
| **MÉDIO** | Tabelas em várias calculadoras | Uso de `.table-responsive` ou `overflow-x: auto` não verificado em todos os HTML; tabelas largas podem causar scroll horizontal em mobile. |
| **BAIXO** | Modais | Altura máxima com `calc(100vh - ...)`; teclado virtual em mobile pode reduzir viewport e sobrepor campos. |
| **BAIXO** | Barra de navegação injetada | `neoped-nav.js` insere barra no topo; em telas muito pequenas o título pode ser cortado se não houver truncamento ou quebra de linha. |

---

## FASE 6 — Teste visual

- Padronização de bordas/cores foi aplicada anteriormente (CSS global neutro em `neoped-responsive.css` e ajustes em vários HTML).
- **A validar em teste manual:** alinhamento de campos, sobreposição de elementos, fontes e espaçamento em cada módulo, especialmente em NutriPedWebapp e RCP.

---

## FASE 7 — Teste de navegação

- **Voltar:** `neoped-nav.js` implementa “‹ Voltar” com `history.back()` ou redirecionamento para `getHomeUrl()` (index).
- **Home:** Link “Home” para `index.html` (base calculada a partir do script).
- **Profundidade:** Páginas em `files/` e `files/BSA/`, `files/Neurointensivismo/`, etc. usam `../` ou `../../` para CSS/JS; navegação entre páginas mantém histórico, então Voltar deve funcionar.
- **Risco:** Se o usuário abrir uma calculadora em nova aba, `history.length` pode ser 1 e “Voltar” irá para Home em vez da listagem – comportamento aceitável.

---

## FASE 8 — Auditoria de código

### 8.1 HTML

- Diversas páginas com blocos `<style>` longos (duplicação de estilos comuns entre arquivos).
- Uso consistente de `lang="pt-BR"`, `meta charset="UTF-8"`, `viewport` para responsividade.

### 8.2 CSS

- **Duplicação:** Temas (variáveis :root, cards, botões) repetidos em index, selecao, calculadoras_neonatais, calculadoras_pediatricas; poderia ser centralizado em `neoped-responsive.css` ou em um segundo CSS de tema.
- **Específico:** `neoped-responsive.css` já contém regras de cards, formulários e modais; overlap com estilos embutidos pode causar especificidade confusa.

### 8.3 JavaScript

- **Funções não utilizadas:** Não mapeado de forma exaustiva; em arquivos grandes (NutriPedWebapp, rcp-pediatrica, rcp-neonatal) pode haver funções mortas.
- **Scripts redundantes:** Não há inclusão duplicada evidente do mesmo script na mesma página.
- **Elementos mortos:** IDs e classes usados em JS parecem existir no HTML nas amostras verificadas (apgar, score_alvarado).

### 8.4 Dependências

- Nenhuma dependência npm/yarn; apenas arquivos estáticos. Sem package.json ou requirements.txt.

---

## FASE 9 — Resumo de problemas por severidade

### CRÍTICO

- Nenhum problema crítico identificado (links e arquivos existem; servidor estático adequado; navegação e recursos principais coerentes).

### ALTO

1. **Validação de formulários:** Muitas calculadoras não possuem validação explícita de campos obrigatórios ou faixas numéricas; risco de resultados clínicos incorretos ou mensagens de erro pouco claras.
2. **Possível null em getElementById:** Em páginas com script no head ou sem `DOMContentLoaded`, acesso a elementos pode ocorrer antes do DOM estar disponível (não verificado em todos os 80+ HTML).

### MÉDIO

1. **Nome do arquivo com “ç”:** `Score_de_Avaliacao_Sedação_escala_Confort_B_e_AAM.html` – risco de quebra em alguns servidores ou URLs.
2. **Tabelas em mobile:** Uso de `overflow-x` em tabelas não garantido em todos os módulos; risco de layout quebrado em telas pequenas.
3. **Clipboard e storage:** Uso de clipboard e localStorage sem fallback ou mensagem clara em caso de falha (contexto não seguro ou storage desabilitado).

### BAIXO

1. **Página “Não concordo”:** Redirecionamento para `pagina_indisponivel.html` sem opção de retorno na própria página.
2. **Duplicação de CSS:** Estilos repetidos em várias páginas; manutenção e consistência visual poderiam ser melhoradas com mais centralização.
3. **Barra de navegação em viewports muito pequenos:** Título longo pode ser cortado.
4. **NutriPedWebapp:** Tamanho do arquivo e quantidade de JS recomendam testes manuais e auditoria de console em fluxos principais.

---

## FASE 10 — Preparação para correção

Para cada problema, indicação de **arquivo**, **linha (aproximada)**, **causa** e **sugestão de correção**. Nenhuma alteração foi aplicada; apenas o relatório.

### 1. Nome do arquivo com “ç”

- **Arquivo:** `calculadoras_pediatricas.html` (href); nome do arquivo em disco: `files/Score_de_Avaliacao_Sedação_escala_Confort_B_e_AAM.html`
- **Linha:** ~396 (href do link “Score de Avaliação de Sedação - Confort B e AAM”).
- **Causa:** Caractere “ç” no nome do arquivo pode ser normalizado de forma diferente (NFC/NFD) em servidores ou em URLs.
- **Sugestão:** Renomear o arquivo para usar apenas ASCII (ex.: `Score_de_Avaliacao_Sedacao_escala_Confort_B_e_AAM.html`) e atualizar o href em `calculadoras_pediatricas.html` para o novo nome.

### 2. Validação de formulários

- **Arquivos:** Diversos em `files/*.html` (formulários de dose, peso, idade, etc.).
- **Linhas:** N/A (varia por arquivo).
- **Causa:** Ausência de `required`, `min`/`max` ou validação em JS antes de calcular/exibir resultado.
- **Sugestão:** Em cada calculadora, adicionar `required` onde fizer sentido, validar faixas (ex.: peso > 0 e < 200) em `submit` ou no evento de cálculo, e exibir mensagem clara em caso de dado inválido (evitando apenas “NaN” ou resultado vazio).

### 3. getElementById antes do DOM

- **Arquivos:** Qualquer HTML que execute script no `<head>` ou no início do `<body>` e acesse elementos por ID.
- **Causa:** O elemento ainda não existe quando o script roda.
- **Sugestão:** Garantir que todo script que usa `getElementById`/`querySelector` rode após o DOM (ex.: colocar script no final do `body` ou dentro de `DOMContentLoaded`).

### 4. Tabelas em mobile

- **Arquivos:** HTML que contêm `<table>` sem container com overflow (ex.: várias calculadoras em `files/`).
- **Causa:** Tabelas largas sem `.table-responsive` ou `overflow-x: auto` geram scroll horizontal na página.
- **Sugestão:** Envolver cada `<table>` em `<div class="table-responsive" style="overflow-x: auto;">` (ou classe equivalente já definida em `neoped-responsive.css`) nas páginas que ainda não tiverem.

### 5. Clipboard / localStorage sem fallback

- **Arquivos:** Ex.: `apgar.html`, `rcp-pediatrica-pals2025.html`, `rcp-neonatal-2025.html` (clipboard); `calculadoras_neonatais.html`, `calculadoras_pediatricas.html` (localStorage).
- **Causa:** `navigator.clipboard.writeText` pode falhar (não-HTTPS, permissão); `localStorage.setItem` pode falhar (modo privado, política).
- **Sugestão:** Usar `try/catch` em chamadas a clipboard e storage; em caso de falha, exibir mensagem ao usuário (ex.: “Copie manualmente o texto abaixo” ou “Favoritos não disponíveis neste navegador”).

### 6. Página “Não concordo”

- **Arquivo:** `pagina_indisponivel.html` (e possivelmente `index.html` no texto do botão).
- **Causa:** Página de “não concordo” não oferece link de volta (ex.: para index ou seleção).
- **Sugestão:** Incluir em `pagina_indisponivel.html` um link ou botão “Voltar ao início” apontando para `index.html`, além da barra injetada por `neoped-nav.js` (se a página carregar o script).

### 7. Duplicação de CSS

- **Arquivos:** `index.html`, `selecao_calculadoras.html`, `calculadoras_neonatais.html`, `calculadoras_pediatricas.html`.
- **Causa:** Blocos `<style>` com :root, .card, .cta-button, etc. repetidos.
- **Sugestão:** Extrair temas comuns para um arquivo (ex.: `css/neoped-theme.css`) e referenciá-lo nas quatro páginas; manter nos HTML apenas estilos realmente específicos da página.

### 8. Barra de navegação em telas pequenas

- **Arquivo:** `js/neoped-nav.js` (injeção do título) e `css/neoped-responsive.css` (estilos da barra).
- **Causa:** Título longo em uma única linha pode estourar ou ser cortado.
- **Sugestão:** No CSS da barra, aplicar `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` no elemento do título, ou limitar largura máxima e permitir quebra de linha com `white-space: normal` e `line-clamp` se preferir múltiplas linhas.

---

## Checklist final

- [x] Estrutura do projeto analisada  
- [x] Forma de execução identificada (servidor estático)  
- [x] Servidor local iniciado (porta 8765)  
- [x] Todos os links das páginas principais verificados (83 destinos existem)  
- [x] Módulos e listagens de calculadoras mapeados  
- [x] Recursos (CSS, JS, imagens) conferidos  
- [x] Possíveis erros de JS e riscos funcionais listados  
- [x] Responsividade e navegação consideradas  
- [x] Problemas classificados por severidade (CRÍTICO / ALTO / MÉDIO / BAIXO)  
- [x] Sugestões de correção indicadas por problema (arquivo, causa, ação sugerida)  

**Recomendação:** Executar testes manuais em ambiente local (navegador) para cada calculadora (botões, formulários, cálculos e resultados) e inspecionar o console (F12) em todas as páginas principais e em uma amostra de calculadoras para capturar erros em tempo de execução e comportamentos inesperados.

---

## Correções aplicadas (pós-relatório)

| Item | Ação realizada |
|------|-----------------|
| **Nome do arquivo com "ç"** | Criada cópia do arquivo com nome em ASCII: `files/Score_de_Avaliacao_Sedacao_escala_Confort_B_e_AAM.html`. Link em `calculadoras_pediatricas.html` atualizado para o novo nome. O arquivo original (com ç) permanece para compatibilidade. |
| **Página "Não concordo"** | Adicionado link "← Voltar ao início" em `pagina_indisponivel.html` (já existia "Revisar Termos" e links no rodapé). |
| **Clipboard com fallback** | Em `apgar.html`, `rcp-neonatal-2025.html`: em caso de falha do `clipboard.writeText` e do `execCommand('copy')`, exibida mensagem orientando cópia manual. RCP pediátrica já tinha mensagem adequada. |
| **localStorage com fallback** | Em `calculadoras_neonatais.html` e `calculadoras_pediatricas.html`: `setItem` e `getFavorites` (incl. `JSON.parse`) envolvidos em `try/catch`; em modo privado ou storage indisponível, favoritos não quebram e um aviso é registrado no console. |
| **Barra de navegação** | Sem alteração: `.neoped-nav-title` já possui `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` em `neoped-responsive.css`. |
| **Tabelas / table-responsive** | Sem alteração em massa: a classe `.table-responsive` já existe no CSS global; novas páginas com tabelas podem usá-la. |
| **Validação de formulários** | Não alterado: recomendado implementar por calculadora em etapas futuras. |

> Atualização 16/10/2026: a camada final de estilo é `css/neoped-modern.css`, carregada após `neoped-responsive.css`. Ela define a identidade atual, preserva foco e cores semânticas e substitui a paleta descrita abaixo. O portal usa classes `np-*`; módulos mantêm suas estruturas. Consulte também `README.md` e `docs/REVISAO.md`. Este documento permanece como referência das estruturas legadas.

# NeoPedCalc — Padrão visual e de UI (referência para novas calculadoras)

Este documento descreve as **configurações visuais e de interface** adotadas no projeto NeoPedCalc para que **novas calculadoras** possam ser implementadas de forma alinhada ao restante do app. Foi escrito para ser usado como contexto por **humans** e por **ferramentas de IA (ex.: Cursor)** ao criar ou revisar páginas.

**Idioma:** textos de interface em **português (pt-BR)**.  
**Tom de conteúdo:** uso **educativo/informativo** (ver secção 7).

---

## 1. Arquivos obrigatórios (stack comum)

Em cada página HTML de calculadora (salvo exceções indicadas abaixo), inclua:

| Recurso | Caminho típico (a partir de `files/`) | Função |
|--------|----------------------------------------|--------|
| CSS global responsivo + tema | `../css/neoped-responsive.css` | Layout responsivo, botões, modais, tipografia, variáveis `--neoped-*`, barra inferior |
| CSS datas (importado pelo anterior) | `css/neoped-datetime-mobile.css` (via `@import` no CSS acima) | Consistência de campos de data/hora em mobile |
| Navegação + rodapé legal + utilitários | `../js/neoped-nav.js` | Barra inferior (voltar/início), banner legal, `neopedLegalReportFooter()`, `--neoped-nav-inset` |

**Ordem sugerida no `<head>`:** `<link rel="stylesheet" href="../css/neoped-responsive.css" />` antes de estilos locais muito específicos, se precisar sobrescrever.  
**Antes de `</body>`:** `<script src="../js/neoped-nav.js"></script>` (e outros scripts da página).

### Exceções conhecidas

- **NutriPedWebapp:** `html` com classe `nutriped-app` — muitas regras globais do NeoPedCalc são **desligadas** para não conflitar com o layout próprio.
- **Tema escuro:** `html[data-neoped-theme="dark"]` — paleta alternativa; novas calculadoras podem focar primeiro no modo claro padrão.

---

## 2. Variáveis CSS globais (`:root` em `neoped-responsive.css`)

Valores de referência (modo claro, calculadoras):

- **Fonte:** `--neoped-font` — `system-ui, -apple-system, "Segoe UI", Roboto, …`
- **Fundo de página:** `--neoped-page-bg` — gradiente cinza-azulado claro.
- **Texto:** `--neoped-text` (#111827), `--neoped-text-muted` (#374151).
- **Raios:** `--neoped-radius` (12px), `--neoped-radius-lg` (16px).
- **Sombra de cards:** `--neoped-card-shadow`.
- **Botões (gradientes 135°):**
  - `--neoped-btn-1-a/b` — índigo/roxo (ação primária).
  - `--neoped-btn-2-a/b` — verde-água/verde (secundário / sucesso).
  - `--neoped-btn-3-a/b` — laranja (aviso).
  - `--neoped-btn-4-a/b` — cinza (neutro).
  - `--neoped-btn-info-a/b` — azul (#0284c7 → #0369a1) — **“Como usar”**.
  - `--neoped-btn-danger-a/b` — vermelho (perigo/limpar quando aplicável).
- **Sombras de botão:** `--neoped-btn-shadow`, `--neoped-btn-shadow-hover`.

Novas telas devem **preferir** estas classes sem redefinir cores soltas, para manter consistência.

---

## 3. Botões — hierarquia e classes

### 3.1 Semântica por classe

| Classe | Uso típico |
|--------|------------|
| `btn-primary` | Ação principal (calcular, gerar, confirmar). |
| `btn-secondary` | Ação secundária (limpar, alternativa). |
| `btn-info` | **“Como usar”** e ajuda contextual — não usar como botão de fechar. |
| `btn-danger` / `.btn.danger` | Destruir dados, limpar com risco, ações destrutivas. |
| `btn-warning` / `.btn.warning` | Ações que exigem atenção. |
| `.neoped-btn-1` … `.neoped-btn-4` | Uso manual quando não se aplica `btn-primary`/`secondary` mas se quer a mesma paleta. |

### 3.2 Ordem cromática em linhas de ação

Em grupos como `.footer-actions-inner`, `.header-actions`, `.top-actions`, `.button-group`, `.modal-footer`, `.modal-actions`, o CSS aplica **ciclo de 4 cores** (`nth-child(4n+1)` … `4n+4)`): índigo → verde-água → laranja → cinza, repetindo.

**Evite** misturar muitos botões com estilos inline que quebrem esse ciclo sem necessidade.

### 3.3 “Como usar” no cabeçalho

Quando o botão “Como usar” estiver em `.header-actions`, use **sempre** `button.btn-info` com `type="button"`. O arquivo global já ajusta padding, largura `auto` e gradiente info.

### 3.4 HTML

- Todos os botões que **não** submetem formulário: `type="button"`.
- Evitar `Fechar` como texto no botão de fechar de modal — usar **`×`** (`&times;`) com `aria-label="Fechar"` (ver secção 4).

---

## 4. Modais — estrutura e botão fechar

### 4.1 Estrutura recomendada

```html
<div id="modalInfo" class="modal" role="dialog" aria-modal="true" aria-labelledby="idDoTitulo">
  <div class="modal-content" onclick="event.stopPropagation()"> <!-- se usar backdrop click -->
    <div class="modal-header">
      <h2 id="idDoTitulo">Como usar — Nome da calculadora (educativo)</h2>
      <button type="button" class="close" onclick="fecharModal()" aria-label="Fechar">&times;</button>
    </div>
    <div class="modal-body">
      <!-- conteúdo -->
    </div>
    <div class="modal-footer"><!-- opcional --></div>
  </div>
</div>
```

### 4.2 Estilo do fechar (padrão NeoPedCalc)

- Classe: **`close`** (ou `modal-close` / `close-btn` — equivalentes no CSS global).
- Aparência: **círculo vermelho** `#d40000`, **× preta**, **36×36px**, canto superior direito do cabeçalho.
- **Não** usar `btn-primary`/`btn-secondary` para o fechar.
- Cabeçalho: `.modal-header` com `position: relative` e espaço à direita (`padding-right` ~52px) — já tratado no CSS global.

### 4.3 Modal especial LUS (iframe)

- Botão: classe **`lus-modal-close`** (mesmo visual do `close` após padronização).
- Cabeçalho: **`.lus-modal-head`** — não usar só `modal-header` se for o overlay do Guideline.

### 4.4 Conflito `[class*="modal"]`

O seletor genérico `[class*="modal"]` no CSS global pode atingir classes como `lus-modal-close`. Para o botão fechar, a classe **`.lus-modal-close` está excluída** dessa regra onde necessário. **Novas classes** que contenham a substring `modal` no nome do botão devem ser revisadas para não perderem sombra/borda.

### 4.5 Acessibilidade e mobile

- **Escape** fecha o modal (implementar em JS se a página só usar backdrop).
- **`.modal-body`:** `padding-bottom` considerando a barra inferior — ver secção 5.
- **`.modal-footer` / `.modal-actions`:** podem usar `position: sticky; bottom: 0` no global para não ficarem atrás da navegação.

### 4.6 Backdrop e borda

O global remove `border`/`box-shadow` de vários seletores de modal. Se o diálogo ficar “invisível”, use **ID** ou classe específica na página com `!important` só para o necessário (ex.: `#modalBackdrop .modal { border, box-shadow }`).

---

## 5. Barra inferior fixa e espaçamento (`--neoped-nav-inset`)

O `neoped-nav.js` define **`--neoped-nav-inset`** no `document.documentElement` para compensar a altura da **barra de navegação** + **banner legal** (quando existir).

- **Body com navegação:** `body.neoped-has-nav` — modais usam `padding-bottom` no `.modal-body` com `calc(var(--neoped-nav-inset, 72px) + 20px)`.
- Em páginas com **CSS local** para modal, repetir essa lógica no `.modal-body` ou confiar no global se a estrutura `.modal-body` existir.

---

## 6. Layout responsivo (regras gerais)

- **Sem overflow horizontal:** `html`/`body` com `overflow-x: hidden`; containers `max-width: 100%`.
- **Evitar `100vw`** em larguras (causa scroll horizontal no Safari iOS).
- **Tabelas:** envolver em `.table-responsive`, `.table-wrap` ou equivalente com `overflow-x: auto`.
- **Toque:** botões e alvos principais com altura mínima ~**44px** em mobile (regras globais).
- **Inputs no iOS:** `font-size` mínimo **16px** em campos para evitar zoom indesejado ao focar.

---

## 7. Conteúdo educativo / relatórios (alinhamento com o produto)

Para manter consistência com o restante do app:

- **`<title>`:** `NeoPedCalc — Nome da calculadora (educativo)`.
- **Modal “Como usar”:** título `Como usar — Nome (educativo)`; secção **Objetivo (educativo)** com linguagem neutra, sem prescrição.
- **Relatórios gerados:** cabeçalho tipo `RESUMO INFORMATIVO — … (EDUCATIVO)`; nota inicial padronizada com `NOTA: Texto gerado por calculadora; nao constitui diagnostico formal nem prescricao...` (ajustar conforme texto já usado nas calculadoras existentes).
- **Rodapé legal em texto copiado:** chamar `neopedLegalReportFooter()` de `neoped-nav.js` ao montar o string; se a função não existir, fallback com o mesmo texto informativo.

```javascript
// Exemplo de append ao relatório
var rodape = typeof neopedLegalReportFooter === "function"
  ? neopedLegalReportFooter()
  : "\n\n—\nNeoPedCalc · Uso educacional e informativo. ...";
```

### Mensagens de cópia (clipboard)

- **Sucesso:** `Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.`
- **Fallback:** `Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.`

### Rótulos de botão de relatório

Evitar “Copiar para prontuário eletrônico” como única mensagem; preferir **“Copiar texto informativo”** / **“Gerar e copiar texto informativo”** conforme o fluxo da calculadora.

---

## 8. Checklist rápido para nova calculadora

- [ ] Incluir `neoped-responsive.css` e `neoped-nav.js`.
- [ ] `type="button"` em botões que não são submit.
- [ ] Botão **Como usar** = `btn-info` + modal com **`modal-header` + `button.close`** (`&times;`).
- [ ] Modal com `role="dialog"`, `aria-modal="true"`, `aria-labelledby` no título.
- [ ] Relatório com nota educativa + `neopedLegalReportFooter()` quando houver cópia.
- [ ] Alerts de cópia com os textos padronizados (secção 7).
- [ ] Título da página e cabeçalhos no tom **educativo**.
- [ ] Testar em mobile: último conteúdo do modal e botões do rodapé **não** escondidos atrás da barra inferior.

---

## 9. Onde ajustar o padrão global

- **Estilo e componentes:** `css/neoped-responsive.css` (e imports).
- **Navegação, legal, `neopedLegalReportFooter`:** `js/neoped-nav.js`.
- **Temas / exceções:** buscar `nutriped-app`, `data-neoped-theme`, `[class*="modal"]` no CSS antes de alterar seletores.

---

*Documento gerado para o repositório NeoPedCalc. Atualize este README quando o padrão visual evoluir.*

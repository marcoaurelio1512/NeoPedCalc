# Navegação mobile – Barra inferior (estilo app nativo)

## Resumo da implementação

A navegação foi alterada de **barra superior com texto** (“‹ Voltar” e “Home”) para **barra fixa inferior com ícones**, em todas as páginas que carregam `neoped-nav.js`.

---

## 1. Arquivos alterados

| Arquivo | Alteração |
|---------|-----------|
| **js/neoped-nav.js** | Barra passou a ser injetada no **final do body** (bottom bar). Botões substituídos por ícones SVG (seta esquerda = Voltar, casa = Home). Removido título do meio. Comportamento de `goBack()` e `goHome()` mantido. |
| **css/neoped-responsive.css** | Estilos da barra superior removidos. Novos estilos para `.neoped-nav-bottom`: barra fixa em `bottom: 0`, fundo branco, borda superior neutra, ícones centralizados, área de toque ≥ 48px, `env(safe-area-inset-bottom)` e `padding-bottom` no body para não cobrir conteúdo. |

Nenhum arquivo HTML foi editado: a barra é injetada pelo script em todas as páginas que já referenciam `neoped-nav.js`.

---

## 2. Como a navegação inferior foi implementada

### 2.1 Componente (neoped-nav.js)

- **Um único elemento** de navegação: `<div id="neoped-app-nav" class="neoped-nav neoped-nav-bottom">` inserido com `body.appendChild(nav)` (no final do body).
- **Dois controles:**
  - **Voltar:** `<button>` com ícone SVG de seta para a esquerda. Clique chama `goBack()` (histórico se `history.length > 1`, senão redireciona para a home).
  - **Início:** `<a href="...">` com ícone SVG de casa. Clique chama `goHome()` (redireciona para `index.html` calculado por `getHomeUrl()`).
- **Ícones:** SVG inline (24×24), stroke, sem dependência de fontes. `aria-label` em cada botão/link; `aria-hidden="true"` nos SVGs.
- **Comportamento:** Preservação de estado de formulários (sessionStorage), `beforeunload`/`pagehide` e `popstate` continuam iguais.

### 2.2 Estilos (neoped-responsive.css)

- **Barra:** `position: fixed; bottom: 0; left: 0; right: 0;`; `background: #fff`; `border-top: 1px solid #e5e7eb`; sem sombra forte.
- **Safe area:** `padding-bottom` e `padding-left`/`padding-right` da barra com `max(..., env(safe-area-inset-*))` para iPhone e dispositivos com notch.
- **Conteúdo:** `body.neoped-has-nav` recebe `padding-bottom: calc(56px + max(8px, env(safe-area-inset-bottom)))` para o conteúdo não ficar atrás da barra.
- **Toque:** Botões com `min-width/min-height: 48px`, `touch-action: manipulation`, `-webkit-tap-highlight-color: transparent`.
- **Foco:** `outline: none` e `box-shadow: 0 0 0 2px rgba(0,0,0,0.08)` no `:focus` para acessibilidade discreta.
- **Desktop (≥769px):** Mesma barra inferior, altura um pouco menor (52px) e padding ajustado.

---

## 3. Páginas em que a barra foi aplicada

A barra aparece em **todas as páginas que carregam `neoped-nav.js`**. Não foi necessário alterar HTML: o script já era incluído em 83 arquivos, entre eles:

- Raiz: `index.html`, `selecao_calculadoras.html`, `calculadoras_neonatais.html`, `calculadoras_pediatricas.html`, `advertencias.html`, `bibliografia.html`, `pagina_indisponivel.html`
- Todas as calculadoras em `files/*.html` e subpastas (`files/BSA/`, `files/Neurointensivismo/`, `files/NutriPedWebapp/index.html`, `files/manuseio_ventilacao_*`, etc.)

Ou seja, a navegação inferior com ícones está aplicada em **todos os módulos** do NeoPedCalc que já usavam a navegação anterior.

---

## 4. Ajustes de espaçamento no rodapé

- **Nenhum HTML precisou de ajuste manual.** O espaçamento é feito globalmente no CSS:
  - O script adiciona a classe `neoped-has-nav` ao `<body>`.
  - O arquivo `neoped-responsive.css` define `padding-bottom` para `body.neoped-has-nav`, suficiente para que o conteúdo (incluindo footers) fique acima da barra fixa.
- Páginas com footer próprio (ex.: index, calculadoras, avisos) continuam com o footer no fluxo do documento; o `padding-bottom` do body evita que o último bloco fique escondido atrás da barra.

---

## 5. Verificações recomendadas

- **Telas pequenas:** Barra fixa no rodapé; ícones centralizados; sem sobreposição do conteúdo.
- **Toque:** Botões com área ≥ 48px; resposta ao toque em iOS/Android.
- **Navegação:** Voltar usa histórico quando existir; caso contrário vai para a home; Home sempre leva à página principal.
- **PWA / web app:** Mesmo CSS e JS; `env(safe-area-inset-bottom)` adequado para standalone em iPhone.
- **Acessibilidade:** `aria-label` em Voltar e Início; foco visível com box-shadow neutro.

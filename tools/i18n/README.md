# Translating a NeoPedCalc calculator (pt-BR → en, es)

NeoPedCalc pages stay written in Brazilian Portuguese. Translation is applied in the browser by
`js/neoped-i18n.js` from per-page dictionaries. This guide is the procedure for one calculator page.

## How the engine works

- Each dictionary entry maps the **exact Portuguese text** of a DOM text node or attribute
  (placeholder, aria-label, title, alt, value of button inputs) to `[English, Spanish]`.
  Whitespace is normalized.
- A MutationObserver translates text that JS inserts later (innerHTML/textContent).
- `alert`/`confirm`/`prompt` and everything copied to the clipboard (`navigator.clipboard.writeText`,
  `execCommand('copy')`, WhatsApp/mailto share links) are translated line by line.
- `<pre>` blocks are translated line by line.
- When there is no exact entry, the engine falls back in this order:
  1. It ignores leading and trailing non-letters (emoji, bullets, `- `, `:`).
  2. It splits around numbers and translates the text pieces: `"Escore: 7 pontos"` uses `"Escore"` and `"pontos"`.
  3. It splits `label: value`, `A | B`, `A · B`, `A — B` and `A - B` lines and translates each segment.
- Elements with `translate="no"` (or class `notranslate`) are skipped.
- Shared strings are in `js/i18n/common.js` (chrome, legal notice, common report vocabulary such as
  `NOTA: Texto gerado...`, `observacoes`, `interpretacao`, `Como usar`) and in `js/i18n/portal.js`.
  **Do not edit these, `js/neoped-i18n.js` or CSS** when translating a page; duplicate a string in the
  page dictionary if you need it.

## Procedure

1. **Extract:** `node tools/i18n/extract.cjs <page> > <scratch>/<slug>.json` lists untranslated
   candidates from the HTML (hidden modals included) and the inline JS string literals.
   - The extractor is heuristic. Skip code-like items (CSS, ids, keys, console messages).
   - It also misses things. Read the page's JS for runtime-built text: result and interpretation
     strings, alerts, and especially the **copied report templates**, whose labels are often written
     lowercase and without accents (`- frequencia cardiaca: ${x} bpm`). Register those labels exactly
     as written, e.g. `'frequencia cardiaca'`.
   - Do not add bare function words ("de", "e", "a") as keys.
2. **Dictionary:** create `js/i18n/pages/<slug>.js`. The slug is the file basename without its
   extension, lowercased, with non-alphanumerics turned into `-`.

   ```js
   /* <Calculator name> (<page path>) — [inglês, espanhol]. */
   (function (i18n) {
     'use strict';
     if (!i18n) return;
     i18n.register({
       'Texto em português': ['English text', 'Texto en español'],
     });
     i18n.markPageTranslated();
   })(window.NEOPED_I18N);
   ```

   - Use `i18n.registerPatterns([[/^Escore: (\d+) pontos$/, 'Score: $1 points', 'Puntuación: $1 puntos']])`
     only when the fallbacks are not enough.
   - Keep each file under about 800 lines. Split into `<slug>.js` and `<slug>-2.js` if needed.
   - Pages that are exact copies of each other can share one dictionary.
3. **Load it:** add one tag right after the page's existing `<script src="…js/i18n/common.js"></script>`,
   using the same relative prefix: `<script src="../js/i18n/pages/<slug>.js"></script>`. Some pages load
   `common.js` near `</body>`; put the tag right after it there too. Never insert tags inside JS strings.

## Translation rules (clinical content: accuracy over style)

- **Never** change numbers, doses, units, ranges, thresholds, operators (`<`, `>`, `≥`), concentrations,
  infusion rates, intervals or score values.
- **Decimal separators:** Spanish keeps Brazilian formatting. In English, a decimal comma in a dose can
  be misread (`142.500 UI` reads as 142.5 IU in the US).
  - Where the page displays computed doses or volumes in Brazilian format and you have verified in the
    code how the number is formatted, you may add patterns that render that specific output in US
    format.
  - Never write a generic numeric conversion.
  - If you are unsure, leave it unchanged and report it.
- **Drug names:** use the INN in each language (EN: phenobarbital, epinephrine, acetaminophen;
  ES: fenobarbital, adrenalina/epinefrina, paracetamol). Keep brand names as they are.
- **Names and acronyms:** keep score names and international acronyms. Use the target-language acronym
  where one is standard (LCR → CSF in EN; VM → MV in EN, VM in ES; PCR → CPR in EN, RCP in ES when it
  means cardiac arrest).
- **Language:** English is standard US medical English. Spanish is neutral international medical
  Spanish, formal "usted".
- **Clinical terms:** use the established terms of each instrument or guideline (PALS, NRP, Neofax, KDIGO,
  Glasgow, PRISM, PIM…) rather than literal translations.
- **Citations** stay in their original language. You may add `translate="no"` to the element that wraps a
  reference list. That and the script tag are the only HTML changes allowed.
- **Portuguese text and calculation logic are never edited.** If the source looks wrong (a help modal that
  contradicts the calculator, wrong units), translate it faithfully and report it.

## Mandatory checks

**A. Logic that reads displayed text.** Grep the page JS for `.textContent`, `.innerText`, `.text`,
`options[...].text`, `.value === '<letters>'` on buttons, and `includes`/`indexOf` applied to DOM text.
Translation changes that text, so code that branches on it can break.
- Protect the element with `translate="no"` if that is safe; otherwise report it with file:line.
- Reading such text only to build a report is fine.

**B. Numeric parity.** Write a Playwright script and run it with `NODE_PATH="$PWD/node_modules" node x.cjs`.
- Open the page by `file://` URL and set the language with
  `context.addInitScript(l => { localStorage.setItem('neoped_lang', l); localStorage.setItem('neoped_legal_accept_v1','1'); }, lang)`.
- Fill realistic inputs, run the calculation, and capture the result area in pt, en and es.
- Test at least two scenarios per page (normal and abnormal or high-dose).
- Numbers must match across languages (separator-only changes allowed in English as described above),
  and result, interpretation and alert text must be in the target language.

**C. Copied report.** Run
`node tools/i18n/copy-probe.cjs <page> "<JS that fills and calculates>" "<JS that triggers copy>"`.
- Report labels and values must be translated in en and es, and numbers must match pt.

**D. Final check.** `node tools/i18n/check.cjs <pages…>` must show `markedTranslated: true` and no
`newErrors` for en and es. `stillPortuguese` should be empty or list only intentional items (brand,
acronyms, units, formulas, citations).

## Report back

Report per page:
- dictionary path and entry count
- A findings
- B scenarios and whether the numbers matched
- C result
- what remains in Portuguese and why
- clinical terminology the physician-owner should review, and source-content problems you noticed

Do not commit.

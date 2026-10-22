#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Extrai referências bibliográficas de calculadoras HTML e funde com bibliografia.html (sem editar calculadoras)."""

from __future__ import annotations

import html as html_module
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Frases que não são citações (listas de limitações / ajuda)
SKIP_SUBSTRINGS = (
    "não substitui",
    "variações individuais",
    "fatores não incluídos",
    "interpretação clínica",
    "protocolos institucionais",
    "disponibilidade técnica",
    "consentimento familiar",
    "estimativa aproximada",
    "avaliação clínica",
    "ajuste individual",
    "correlação clínica",
    "requer monitoramento",
    "pode variar entre",
    "necessita ajuste",
    "baseado em evidências limitadas",
    "requer experiência",
    "considerações de compliance",
    "estimativas aproximadas",
    "monitoramento clínico",
    "interpretação experiente",
    "informe a idade",
    "o card não",
    "clique no número",
    "esta aplicação foi estruturada",
    "ciatox",
    "distribuição dos 12,2 milhões",
    "folder.",
    "manual msd para profissionais",  # linha genérica sem autores completos
    "escore silverman-anderson para avaliacao de dispneia",
    "escore silverman-anderson para avaliação de dispneia",
)

SKIP_EXACT_PREFIXES = (
    "obs:",
    "nota:",
    "fonte:",
)


def strip_tags(s: str) -> str:
    s = re.sub(r"<script[^>]*>.*?</script>", " ", s, flags=re.DOTALL | re.I)
    s = re.sub(r"<style[^>]*>.*?</style>", " ", s, flags=re.DOTALL | re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    return s


def clean_text(s: str) -> str:
    s = html_module.unescape(strip_tags(s))
    s = re.sub(r"\s+", " ", s).strip()
    return s


def normalize_key(s: str) -> str:
    """Chave para deduplicação: alfanumérico (preserva acentos latinos); pontuação vira espaço (evita 19:864 virar 19864)."""
    k = clean_text(s).lower()
    k = re.sub(r"^[\d]+\.\s*", "", k)
    k = re.sub(r"^[-–•]\s*", "", k)
    k = re.sub(r"[:;,.]", " ", k)
    k = re.sub(r"[^a-z0-9áàâãéêíóôõúçüñ\s]", "", k, flags=re.I)
    k = re.sub(r"\s+", " ", k).strip()
    return k[:800]


def strip_leading_enum(s: str) -> str:
    s = clean_text(s)
    s = re.sub(r"^[\d]+\.\s*", "", s)
    return s.strip()


def is_plausible_citation(s: str) -> bool:
    t = clean_text(s)
    if len(t) < 28:
        return False
    low = t.lower()
    for sub in SKIP_SUBSTRINGS:
        if sub in low:
            return False
    for p in SKIP_EXACT_PREFIXES:
        if low.startswith(p):
            return False
    # deve parecer referência: ano ou DOI ou volume de periódico ou "ed." ou ISBN-like
    if re.search(r"\b(19|20)\d{2}\b", t):
        return True
    if re.search(r"\bdoi\s*:", low):
        return True
    if re.search(r"\d+\s*\(\d+\)\s*:\s*\d", t):  # vol(issue):pages
        return True
    if re.search(r";\s*\d+\s*\(", t):  # journal abbrev pattern
        return True
    if re.search(r"\.(com|org|gov)\b", low) and len(t) < 120:
        return True  # URLs curtas tipo sociedades
    if "guidelines" in low or "consensus" in low or "manual" in low:
        return True
    if re.search(r"\b(ed|edition|ed\.)\b", low) and len(t) > 40:
        return True
    if re.search(r"\bvol\.?\s*\d+", low):
        return True
    # fallback: sobrenome em maiúsculas no início (muitas refs da página principal)
    if re.match(r"^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-ZÁÉÍÓÚÂÊÔÃÕÇa-záéíóúâêôãõç\s]+,", t):
        return True
    # diretrizes / sociedades com data (ex.: SBP anemia)
    if re.search(r"\b(número|numero|diretriz|guideline)\b", low) and re.search(
        r"\b(19|20)\d{2}\b", t
    ):
        return True
    return len(t) > 55


def extract_reference_box(content: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']reference-box["\'][^>]*>.*?Referências:.*?</strong>(.*?)</div>',
        content,
        re.DOTALL | re.I,
    ):
        block = m.group(1)
        parts = re.split(r"<br\s*/?>", block, flags=re.I)
        for p in parts:
            c = clean_text(p)
            c = re.sub(r"^[-–•]\s*", "", c).strip()
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_after_strong_referencias(content: str) -> list[str]:
    """Blocos <strong>Referências:</strong> sem reference-box (ex.: só <br> lines)."""
    out: list[str] = []
    for m in re.finditer(
        r"<strong>\s*Referências\s*:</strong>\s*<br\s*/?>\s*(.*?)(?=<h\d|<div\s+class=|<ul|<ol|</div>\s*</div>\s*</div>|</body>)",
        content,
        re.DOTALL | re.I,
    ):
        block = m.group(1)
        # só até próximo fechamento de modal-body comum
        block = re.split(r"</div>\s*</div>", block, maxsplit=1)[0]
        parts = re.split(r"<br\s*/?>", block, flags=re.I)
        for p in parts:
            c = clean_text(p)
            c = re.sub(r"^[-–•]\s*", "", c).strip()
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_ol_li_after_heading(content: str, heading_pattern: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(heading_pattern, content, re.I):
        start = m.end()
        sub = content[start : start + 25000]
        om = re.search(r"<ol[^>]*>(.*?)</ol>", sub, re.DOTALL | re.I)
        if not om:
            continue
        ol_inner = om.group(1)
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", ol_inner, re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_reference_list_class(content: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(
        r'class=["\'][^"\']*reference-list[^"\']*["\'][^>]*>(.*?)</ol>',
        content,
        re.DOTALL | re.I,
    ):
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", m.group(1), re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_details_summary_referencias(content: str) -> list[str]:
    """<details><summary>Referências bibliográficas</summary><ol>...</ol> (ex.: LUS Score)."""
    out: list[str] = []
    for m in re.finditer(
        r"<summary>\s*Referências\s+bibliográficas\s*</summary>\s*<ol[^>]*>(.*?)</ol>",
        content,
        re.DOTALL | re.I,
    ):
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", m.group(1), re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_ref_list_class(content: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(
        r'class=["\'][^"\']*ref-list[^"\']*["\'][^>]*>(.*?)</ol>',
        content,
        re.DOTALL | re.I,
    ):
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", m.group(1), re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if len(c) > 15:  # emergência tem itens curtos institucionais
                out.append(c)
    return out


def extract_div_references_class(content: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']references["\'][^>]*>(.*?)</div>',
        content,
        re.DOTALL | re.I,
    ):
        inner = m.group(1)
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", inner, re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
        for pm in re.finditer(r"<p[^>]*>(.*?)</p>", inner, re.DOTALL | re.I):
            c = clean_text(pm.group(1))
            c = re.sub(r"^\d+\.\s*", "", c)
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_class_bibliography_ol(content: str) -> list[str]:
    """<div class="bibliography"><ol><li>...</li></ol> (ex.: SSIADH)."""
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']bibliography["\'][^>]*>\s*<ol[^>]*>(.*?)</ol>',
        content,
        re.DOTALL | re.I,
    ):
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", m.group(1), re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_numbered_p_referencias(content: str) -> list[str]:
    """<h3>Referências Bibliográficas</h3> seguido de <p>1. ..."""
    out: list[str] = []
    for m in re.finditer(
        r"Referências\s+Bibliográficas.*?</h\d>(.*?)(?=<h\d|</div>\s*</div>|</body>)",
        content,
        re.DOTALL | re.I,
    ):
        block = m.group(1)
        for pm in re.finditer(r"<p[^>]*>(.*?)</p>", block, re.DOTALL | re.I):
            c = clean_text(pm.group(1))
            if re.match(r"^\d+\.", c) and is_plausible_citation(c):
                c = re.sub(r"^\d+\.\s*", "", c).strip()
                out.append(c)
    return out


def extract_single_p_strong_referencias(content: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(
        r"<p><strong>Referências:\s*</strong>\s*(.*?)</p>", content, re.DOTALL | re.I
    ):
        c = clean_text(m.group(1))
        if is_plausible_citation(c):
            out.append(c)
    return out


def extract_reference_box_plain(content: str) -> list[str]:
    """reference-box sem rótulo Referências: (ex.: anemia.html — texto direto da SBP)."""
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']reference-box["\'][^>]*>(.*?)</div>',
        content,
        re.DOTALL | re.I,
    ):
        inner = m.group(1)
        if re.search(r"Referências\s*:\s*</strong>", inner, re.I):
            continue
        c = clean_text(inner)
        if is_plausible_citation(c):
            out.append(c)
    return out


def extract_reference_info_div(content: str) -> list[str]:
    """div.reference-info com parágrafos (ex.: policitemia — mistura ref + notas clínicas)."""
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']reference-info["\'][^>]*>(.*?)</div>',
        content,
        re.DOTALL | re.I,
    ):
        for pm in re.finditer(r"<p[^>]*>(.*?)</p>", m.group(1), re.DOTALL | re.I):
            c = clean_text(pm.group(1))
            low = c.lower()
            if "policitemia neonatal:" in low and "ronald" not in low:
                continue
            if "indicações de tratamento" in low or "fórmula de cálculo" in low:
                continue
            if "definida como hematócrito" in low or "volume de hemodiluição" in low:
                continue
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_paper_citation_divs(content: str) -> list[str]:
    """div.paper-citation (ex.: prognóstico HDC)."""
    out: list[str] = []
    for m in re.finditer(
        r'class=["\']paper-citation["\'][^>]*>(.*?)</div>',
        content,
        re.DOTALL | re.I,
    ):
        c = clean_text(m.group(1))
        c = re.sub(r"\s*Contribuição\s*:\s*.*$", "", c, flags=re.I | re.S)
        c = c.strip()
        if is_plausible_citation(c):
            out.append(c)
    return out


def extract_bibliografia_ul_after_strong(content: str) -> list[str]:
    """<strong>Bibliografia:</strong></p> + <ul><li>...</li> (manuseio ventilação)."""
    out: list[str] = []
    for m in re.finditer(
        r"<strong>Bibliografia:\s*</strong>\s*</p>\s*<ul[^>]*>(.*?)</ul>",
        content,
        re.DOTALL | re.I,
    ):
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", m.group(1), re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_referencias_plaintext_block(content: str) -> list[str]:
    """Bloco 'Referências:' ou 'Referencias:' com linhas '-' (ex.: string JS no Silverman)."""
    out: list[str] = []
    for m in re.finditer(
        r"Refer[eé]ncias\s*:\s*\r?\n((?:\s*-\s*[^\r\n]+\r?\n?)+)",
        content,
        re.I,
    ):
        for line in m.group(1).splitlines():
            line = line.strip()
            if not line.startswith("-"):
                continue
            c = clean_text(line[1:].strip())
            if is_plausible_citation(c):
                out.append(c)
    return out


def extract_nice_guideline_li(content: str) -> list[str]:
    """Itens NICE em modais (icterícia UK)."""
    out: list[str] = []
    for m in re.finditer(
        r"<li>(NICE\s+Clinical\s+Guideline[^<]+)</li>",
        content,
        re.I,
    ):
        c = clean_text(m.group(1))
        if len(c) > 20:
            out.append(c)
    return out


def extract_nutriped_refs(content: str) -> list[str]:
    out: list[str] = []
    if "REFERÊNCIAS BIBLIOGRÁFICAS" not in content and "REFERENCIAS BIBLIOGRAFICAS" not in content:
        return out
    # primeiro bloco grande ol após o h4 de referências
    idx = content.find("REFERÊNCIAS BIBLIOGRÁFICAS")
    if idx == -1:
        idx = content.find("REFERENCIAS BIBLIOGRAFICAS")
    if idx == -1:
        return out
    sub = content[idx : idx + 120000]
    for om in re.finditer(r"<ol[^>]*>(.*?)</ol>", sub, re.DOTALL | re.I):
        inner = om.group(1)
        if "World Health Organization" not in inner and "Schofield" not in inner and "ESPGHAN" not in inner:
            continue
        for lm in re.finditer(r"<li[^>]*>(.*?)</li>", inner, re.DOTALL | re.I):
            c = clean_text(lm.group(1))
            if len(c) > 40:
                out.append(c)
        break
    # blocos finais "Referências Gerais" etc.
    for m in re.finditer(
        r"<strong>Referências[^<]*:</strong>\s*<br\s*/?>\s*(.*?)(?=<strong>|</div>\s*</div>|</body>)",
        content,
        re.DOTALL | re.I,
    ):
        block = m.group(1)
        for line in re.split(r"<br\s*/?>", block):
            c = clean_text(line)
            c = re.sub(r"^[-–•]\s*", "", c).strip()
            if is_plausible_citation(c):
                out.append(c)
    return out


def parse_existing_bibliografia(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    items: list[str] = []
    for m in re.finditer(
        r'<li class="bibliography-item">(.*?)</li>', text, re.DOTALL | re.I
    ):
        c = clean_text(m.group(1))
        if c:
            items.append(c)
    return items


def escape_li_content(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def collect_all_files() -> list[Path]:
    files: list[Path] = []
    for base in [ROOT / "files", ROOT / "files" / "BSA", ROOT / "files" / "manuseio_ventilacao_criancas", ROOT / "files" / "manuseio_ventilacao_neonatos", ROOT / "files" / "Neurointensivismo"]:
        if base.is_dir():
            files.extend(base.rglob("*.html"))
    nut = ROOT / "files" / "NutriPedWebapp" / "index.html"
    if nut.is_file():
        files.append(nut)
    return sorted(set(files))


def main() -> None:
    bib_path = ROOT / "bibliografia.html"
    existing = parse_existing_bibliografia(bib_path)
    seen: dict[str, str] = {}
    for e in existing:
        k = normalize_key(e)
        e2 = strip_leading_enum(e)
        if k not in seen or len(e2) > len(seen[k]):
            seen[k] = e2

    all_files = collect_all_files()
    for fp in all_files:
        try:
            content = fp.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        chunks: list[str] = []
        chunks.extend(extract_reference_box(content))
        chunks.extend(extract_after_strong_referencias(content))
        chunks.extend(extract_reference_list_class(content))
        chunks.extend(extract_ref_list_class(content))
        chunks.extend(extract_details_summary_referencias(content))
        chunks.extend(extract_div_references_class(content))
        chunks.extend(extract_numbered_p_referencias(content))
        chunks.extend(extract_class_bibliography_ol(content))
        chunks.extend(extract_single_p_strong_referencias(content))
        chunks.extend(extract_reference_box_plain(content))
        chunks.extend(extract_reference_info_div(content))
        chunks.extend(extract_paper_citation_divs(content))
        chunks.extend(extract_bibliografia_ul_after_strong(content))
        chunks.extend(extract_referencias_plaintext_block(content))
        chunks.extend(extract_nice_guideline_li(content))
        chunks.extend(
            extract_ol_li_after_heading(
                content, r"Referências\s+bibliográficas|Referências\s+da\s+aplicação"
            )
        )
        if "NutriPedWebapp" in str(fp):
            chunks.extend(extract_nutriped_refs(content))
        # Guideline SDR details summary (Sweet DG...)
        if "Sweet DG" in content and "European Consensus" in content:
            for m in re.finditer(
                r"(Sweet DG[^<]+European Consensus Guidelines[^<]+(?:DOI[^<]+)?)",
                content,
                re.I,
            ):
                c = clean_text(m.group(1))
                if len(c) > 80:
                    chunks.append(c)

        for c in chunks:
            c = strip_leading_enum(c)
            if not c:
                continue
            k = normalize_key(c)
            if not k:
                continue
            if k not in seen or len(c) > len(seen[k]):
                seen[k] = c

    # ordenação: alfabética pela chave normalizada (locale-insensitive)
    ordered = sorted(seen.values(), key=lambda x: normalize_key(x))

    out_lines = [
        '                <ul class="bibliography-list">',
    ]
    for item in ordered:
        esc = escape_li_content(item)
        out_lines.append(f'                    <li class="bibliography-item">{esc}</li>')
    out_lines.append("                </ul>")

    frag_text = "\n".join(out_lines) + "\n"
    out_path = ROOT / "tools" / "bibliography_merged_fragment.html"
    out_path.write_text(frag_text, encoding="utf-8")

    bib_path = ROOT / "bibliografia.html"
    bib = bib_path.read_text(encoding="utf-8")
    new_bib, nrep = re.subn(
        r"<ul class=\"bibliography-list\">.*?</ul>\s*",
        frag_text,
        bib,
        count=1,
        flags=re.DOTALL,
    )
    if nrep != 1:
        raise SystemExit(f"Esperado 1 bloco <ul class=bibliography-list> em bibliografia.html, encontrado {nrep}")
    bib_path.write_text(new_bib, encoding="utf-8")

    print(f"Total entradas únicas: {len(ordered)}")
    print(f"Atualizado: {bib_path}")
    print(f"Fragmento: {out_path}")


if __name__ == "__main__":
    main()

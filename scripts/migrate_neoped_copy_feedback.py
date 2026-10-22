#!/usr/bin/env python3
"""Migra feedback de cópia para neopedCopySuccess / neopedCopyFail (neoped-nav.js)."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

SUCCESS = (
    "if (typeof window.neopedCopySuccess === 'function') window.neopedCopySuccess(); "
    "else alert('Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.');"
)
FAIL = (
    "if (typeof window.neopedCopyFail === 'function') window.neopedCopyFail(); "
    "else alert('Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.');"
)

SUCCESS_DQ = (
    'if (typeof window.neopedCopySuccess === \'function\') window.neopedCopySuccess(); '
    'else alert("Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.");'
)
FAIL_DQ = (
    'if (typeof window.neopedCopyFail === \'function\') window.neopedCopyFail(); '
    'else alert("Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.");'
)


def rel_nav_path(path: Path) -> str:
    rel = path.relative_to(ROOT)
    depth = len(rel.parts) - 1
    return ("../" * depth) + "js/neoped-nav.js"


def ensure_neoped_nav(content: str, path: Path) -> str:
    if "neoped-nav.js" in content:
        return content
    if "navigator.clipboard" not in content and "execCommand" not in content.lower():
        return content
    tag = f'  <script src="{rel_nav_path(path)}"></script>\n'
    return re.sub(r"</body>", tag + "</body>", content, count=1, flags=re.IGNORECASE)


def patch_ictericia(content: str) -> str:
    """Evita duplicar if/else ao substituir alert em copiarRelatorio."""
    old = """  navigator.clipboard.writeText(relatorioTexto).then(() => {
    if (typeof window.neopedCopySuccess === 'function') window.neopedCopySuccess();
    else alert("Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.");
  }).catch(err => {
    console.error('Erro ao copiar: ', err);
    if (typeof window.neopedCopyFail === 'function') window.neopedCopyFail();
    else alert("Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.");
  });"""
    new = (
        "  navigator.clipboard.writeText(relatorioTexto).then(() => {\n"
        "    " + SUCCESS_DQ + "\n"
        "  }).catch(err => {\n"
        "    console.error('Erro ao copiar: ', err);\n"
        "    " + FAIL_DQ + "\n"
        "  });"
    )
    return content.replace(old, new)


def migrate(content: str) -> str:
    content = content.replace(
        "alert('Erro ao copiar automaticamente. Revise o texto e copie manualmente para uso informativo:\\n\\n' + relatorio);",
        FAIL,
    )
    content = content.replace(
        "        .then(() => alert('Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.'))\n"
        "        .catch(() => alert('Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.'));",
        "        .then(() => { " + SUCCESS + " })\n"
        "        .catch(() => { " + FAIL + " });",
    )
    content = content.replace(
        "        .then(() => alert('Texto copiado. Revise antes de arquivar ou compartilhar.'))\n"
        "        .catch(() => alert('Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.'));",
        "        .then(() => { " + SUCCESS + " })\n"
        "        .catch(() => { " + FAIL + " });",
    )
    content = content.replace(
        "alert('✅ Resultado copiado para a área de transferência!\\n\\nCole no prontuário do paciente.');",
        SUCCESS,
    )
    content = content.replace(
        "alert('Relatório gerado e copiado para a área de transferência!');",
        SUCCESS,
    )
    content = content.replace(
        "alert('Texto copiado para a área de transferência. Revise antes de arquivar ou compartilhar.');",
        SUCCESS,
    )
    content = content.replace("alert(msgCopia);", SUCCESS)
    content = content.replace(
        "alert('Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.');",
        SUCCESS,
    )
    content = content.replace(
        "alert('Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.');",
        FAIL,
    )
    content = content.replace(
        'alert("Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.");',
        SUCCESS_DQ,
    )
    content = content.replace(
        'alert("Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.");',
        FAIL_DQ,
    )
    return content


def patch_trips(content: str) -> str:
    old = """    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        alert("Texto copiado. Revise antes de arquivar ou compartilhar.");
      } catch {
        alert("Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.");
      }
    }"""
    new = f"""    async function copyText(text) {{
      try {{
        await navigator.clipboard.writeText(text);
        {SUCCESS_DQ}
      }} catch {{
        {FAIL_DQ}
      }}
    }}"""
    return content.replace(old, new)


def patch_lus(content: str) -> str:
    old = (
        '    function copiarRelatorio(){ const area=document.getElementById("relatorio"); if(!area.value.trim()) gerarRelatorio(); '
        'area.select(); area.setSelectionRange(0, 99999); document.execCommand("copy"); alert("Relatório copiado."); }'
    )
    new = (
        '    function copiarRelatorio(){ const area=document.getElementById("relatorio"); if(!area.value.trim()) gerarRelatorio(); '
        "area.select(); area.setSelectionRange(0, 99999); const ok = document.execCommand(\"copy\"); "
        "if (ok) { " + SUCCESS + " } else { " + FAIL + " } }"
    )
    return content.replace(old, new)


def patch_infeccoes(content: str) -> str:
    old = (
        '            function copiar() {\n'
        '                const t = $("texto").textContent || "";\n'
        "                if (!t) return;\n"
        '                navigator.clipboard.writeText(t).catch(showErr);\n'
        "            }"
    )
    new = (
        '            function copiar() {\n'
        '                const t = $("texto").textContent || "";\n'
        "                if (!t) return;\n"
        "                navigator.clipboard.writeText(t).then(function() { "
        + SUCCESS
        + " }).catch(function(e) { "
        + FAIL
        + " showErr(e); });\n"
        "            }"
    )
    return content.replace(old, new)


def patch_catch_modal_relatorio(content: str) -> str:
    old = (
        "            }).catch(function(err) {\n"
        "                console.error('Erro ao copiar relatorio: ', err);\n"
        "                mostrarRelatorioModal(relatorio);\n"
        "            });"
    )
    new = (
        "            }).catch(function(err) {\n"
        "                console.error('Erro ao copiar relatorio: ', err);\n"
        "                " + FAIL + "\n"
        "                mostrarRelatorioModal(relatorio);\n"
        "            });"
    )
    return content.replace(old, new)


def patch_indices_catch(content: str) -> str:
    old = "            }).catch(function(err) {\n                // Fallback: mostrar em modal\n"
    new = "            }).catch(function(err) {\n                " + FAIL + "\n                // Fallback: mostrar em modal\n"
    if old not in content:
        return content
    return content.replace(old, new, 1)


def patch_drogas_gastro(content: str) -> str:
    needle = (
        "            navigator.clipboard.writeText(relatorio).then(() => {\n"
        "                " + SUCCESS + "\n"
        "            });\n"
        "        }\n\n        // Event listeners"
    )
    repl = (
        "            navigator.clipboard.writeText(relatorio).then(() => {\n"
        "                " + SUCCESS + "\n"
        "            }).catch(function(err) {\n"
        "                console.error(err);\n"
        "                " + FAIL + "\n"
        "            });\n"
        "        }\n\n        // Event listeners"
    )
    return content.replace(needle, repl, 1)


def main() -> None:
    html_files = [p for p in ROOT.rglob("*.html") if ".git" not in str(p)]
    changed = 0
    for path in sorted(html_files):
        try:
            raw = path.read_text(encoding="utf-8")
        except OSError:
            continue
        if "navigator.clipboard" not in raw and "execCommand" not in raw.lower():
            continue
        new = raw
        rel = path.relative_to(ROOT)
        new = migrate(new)
        # Depois de migrate: evita expandir alert() dentro de FAIL_DQ em patch_ictericia.
        if str(rel) == "files/avaliacao_ictericia_neonatal_NICE_UK.html":
            new = patch_ictericia(new)
        new = patch_trips(new)
        if str(rel) == "files/LUS_Score_Neonatal_modal.html":
            new = patch_lus(new)
        if str(rel) == "files/infeccoes_congenitas.html":
            new = patch_infeccoes(new)
        if str(rel) in (
            "files/funcao_renal_neonato.html",
            "files/gasometria_arterial_crianca.html",
            "files/funcao_renal_crianca.html",
        ):
            new = patch_catch_modal_relatorio(new)
        if str(rel) == "files/indices_gradientes_ventilatorios.html":
            new = patch_indices_catch(new)
        if str(rel) == "files/drogas_gastrointestinais_neonatal.html":
            new = patch_drogas_gastro(new)

        new = ensure_neoped_nav(new, path)
        if new != raw:
            path.write_text(new, encoding="utf-8")
            changed += 1
            print("updated:", rel)

    print("total updated:", changed)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Auditoria portátil de links/recursos locais e sintaxe de scripts inline."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, subprocess, sys, tempfile
ROOT = Path(__file__).resolve().parent.parent
class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs=[]; self.scripts=[]; self.in_script=False; self.code=''
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        for attr in (['href'] if tag in ('a','link') else ['src'] if tag in ('script','img','iframe','source','video','audio') else []):
            if attrs.get(attr): self.refs.append(attrs[attr])
        if tag=='script':
            self.in_script=not attrs.get('src') and attrs.get('type','text/javascript') in ('text/javascript','module','application/javascript')
            self.code=''
    def handle_data(self,data):
        if self.in_script:self.code+=data
    def handle_endtag(self,tag):
        if tag=='script' and self.in_script:
            self.scripts.append(self.code); self.in_script=False
pages=sorted(list(ROOT.glob('*.html'))+list((ROOT/'files').rglob('*.html'))+list((ROOT/'files').rglob('*.htm')))
missing=[]; syntax=[];count=0
for page in pages:
    parser=PageParser();parser.feed(page.read_text(errors='replace'))
    for ref in parser.refs:
        parsed=urlsplit(ref)
        if parsed.scheme or parsed.netloc or not parsed.path:continue
        target=(ROOT / unquote(parsed.path).lstrip('/') if parsed.path.startswith('/') else page.parent / unquote(parsed.path))
        if not target.exists():missing.append({'page':str(page.relative_to(ROOT)),'reference':ref})
        count+=1
    for index,script in enumerate(parser.scripts):
        if not script.strip():continue
        result=subprocess.run(['node','--check','--input-type=commonjs'],input=script,text=True,capture_output=True)
        if result.returncode:syntax.append({'page':str(page.relative_to(ROOT)),'script':index,'error':result.stderr[:650]})
result={'pages':len(pages),'local_references':count,'missing':missing,'syntax_errors':syntax}
print(json.dumps(result,ensure_ascii=False,indent=2))
sys.exit(bool(missing or syntax))

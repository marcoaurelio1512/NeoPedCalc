#!/usr/bin/env python3
"""Obtém versões fixas das bibliotecas de interface; sem alterar dados clínicos."""
from pathlib import Path
from urllib.request import urlopen
import hashlib, json
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/'js/vendor'
ASSETS={
 'plotly-strict-4.1.2.min.js':'https://cdn.jsdelivr.net/npm/plotly.js-strict-dist-min@4.1.2/plotly-strict.min.js',
 'bootstrap-5.3.8.min.css':'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css',
 'bootstrap-5.3.8.bundle.min.js':'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js'
}
DEST.mkdir(exist_ok=True)
checksums={}
for name,url in ASSETS.items():
 data=urlopen(url,timeout=60).read()
 checksums[name]={'url':url,'sha256':hashlib.sha256(data).hexdigest()}
 (DEST/name).write_bytes(data)
 print(name,len(data))
(DEST/'checksums.json').write_text(json.dumps(checksums,indent=2)+'\n')

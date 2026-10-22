#!/bin/sh
# Executável a partir de qualquer diretório; verifica todas as páginas e scripts.
set -eu
APP_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec python3 "$APP_DIR/scripts/audit.py"

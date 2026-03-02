#!/usr/bin/env bash -eu

cd "$( dirname "$( realpath "$0" )" )/.." || exit 1
ls -1 .logs | sort -r | head -1 | sed 's|^|.logs/|'

#!/bin/bash -eu
DIR="$( dirname "$0" )"
set -x
cd "$DIR"
ln -sf biblical-annotated-text--MODERN.txt biblical-annotated-text.txt

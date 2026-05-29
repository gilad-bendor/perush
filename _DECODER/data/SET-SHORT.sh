#!/bin/bash -eu
DIR="$( dirname "$0" )"
set -x
cd "$DIR"
ln -sf biblical-annotated-text--SHORT.txt biblical-annotated-text.txt

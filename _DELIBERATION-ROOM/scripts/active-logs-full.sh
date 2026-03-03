#!/usr/bin/env bash -eu

cd "$( dirname "$( realpath "$0" )" )/.." || exit 1
log_path="$( ./scripts/active-logs-path.sh )"
if [[ -n "$log_path" ]] ; then
  if [[ "${1:-}" == "-f" ]] ; then
    tail -f "$log_path"
  else
    cat "$log_path"
  fi
fi

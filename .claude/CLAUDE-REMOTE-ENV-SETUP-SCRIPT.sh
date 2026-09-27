#!/bin/bash

# NOTE: The environment snapshot (made after this script runs) also contains the repo's clone -
#       and new sessions restore it and check out the snapshot's *stale* local branch
#       (see https://github.com/anthropics/claude-code/issues/93585).
#       `.claude/cloud-session-start.sh` then pulls - but only if the snapshot's commit contains that logic.
#       Any edit to this script (in the environment's "Setup script" box) rebuilds the snapshot.
#       Snapshot version: 2

# Install the latest Node.js 26 into /opt/node26 (saved with the environment snapshot)
set -uo pipefail
DEST=/opt/node26
BASE=https://nodejs.org/dist/latest-v26.x
if [ ! -x "$DEST/bin/node" ]; then
  mkdir -p "$DEST"
  TARBALL=$(curl -fsSL "$BASE/SHASUMS256.txt" | grep -oE 'node-v26\.[0-9.]+-linux-x64\.tar\.xz' | head -1)
  if [ -n "$TARBALL" ] && curl -fsSL "$BASE/$TARBALL" | tar -xJ -C "$DEST" --strip-components=1; then
    echo "Installed $TARBALL from nodejs.org"
  else
    echo "nodejs.org failed - falling back to npm registry"
    TMP=$(mktemp -d)
    (cd "$TMP" && npm pack --silent node-linux-x64@26 >/dev/null) \
      && tar -xzf "$TMP"/node-linux-x64-*.tgz -C "$DEST" --strip-components=1
    rm -rf "$TMP"
  fi
fi
"$DEST/bin/node" --version || echo "WARNING: Node 26 install failed"

exit 0
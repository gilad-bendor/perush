#!/bin/bash

# ==================================   IMPORTANT !   ==================================
# This script should be copied into the Claude environment's "Setup script":
# 1. Open a Claude session on our repo and branch
# 2. At the top of the session, expand the options-icon to the left of the remote-environment name
# 3. Copy this file's contents and paste into the "Setup script" textbox
#
# This means that this script is executed from two places:
# 1. Before the Claude session starts (the "Setup script" textbox)
# 2. From the session-hooks - after the Claude session starts - see `.claude/settings.json`
#
# NOTE: this script must always "exit 0". Claude "sees" stdout, but not stderr.
# Problems should be output to stdout, like "Instructions to Claude: Please warn the user that ..."
# =====================================================================================

# Do nothing on your Mac.
if [[ "${CLAUDE_CODE_REMOTE:-}" != "true" ]] ; then
  exit 0
fi

# Make sure the expected Node version is installed and used.
NODE_VERSION=26
if ! node --version 2>/dev/null | grep -q "^v$NODE_VERSION\\." ; then
  # Install the required Node.js version
  NODE_PATH="/opt/node$NODE_VERSION"
  (
    NODE_URL="https://nodejs.org/dist/latest-v$NODE_VERSION.x"
    if [ ! -x "$NODE_PATH/bin/node" ]; then
      echo "Installing node v$NODE_VERSION..."
      mkdir -p "$NODE_PATH"
      TARBALL=$(curl -fsSL "$NODE_URL/SHASUMS256.txt" | grep -oE "node-v$NODE_VERSION"'\.[0-9.]+-linux-x64\.tar\.xz' | head -1)
      if [ -n "$TARBALL" ] && curl -fsSL "$NODE_URL/$TARBALL" | tar -xJ -C "$NODE_PATH" --strip-components=1; then
        echo "Installed $TARBALL from nodejs.org"
      else
        echo "nodejs.org failed - falling back to npm registry"
        TMP=$(mktemp -d)
        (
          (cd "$TMP" && npm pack --silent "node-linux-x64@$NODE_VERSION" >/dev/null) &&
          tar -xzf "$TMP"/node-linux-x64-*.tgz -C "$NODE_PATH" --strip-components=1
        ) || true
        rm -rf "$TMP"
      fi
    fi
  ) 1>&2   # so the output doesn't go into Claude's context
  if [[ -x "$NODE_PATH/bin/node" ]] ; then
    PATH_COMMAND="export PATH=\"$NODE_PATH/bin:\$PATH\""
    eval "$PATH_COMMAND"
    echo "$PATH_COMMAND" >> "${CLAUDE_ENV_FILE:-/dev/null}"
  fi

  if ! node --version 2>/dev/null | grep -q "^v$NODE_VERSION\\." ; then
    echo "Instructions to Claude: Please warn the user that Node v$NODE_VERSION can't be installed:"
    ( set -x ; node --version ) 2>&1 || true
    echo
  fi
fi

# Cd to the project's dir
if ! [[ -d "$CLAUDE_PROJECT_DIR" ]] ; then
    echo "Instructions to Claude: Please warn the user that the variable \$CLAUDE_PROJECT_DIR=\"$CLAUDE_PROJECT_DIR\" if not a folder"
    echo
    exit 0
fi
cd "$CLAUDE_PROJECT_DIR"

# Make sure Git is up-to-date (only if the current branch tracks an upstream).
if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1 ; then

  OLD_HEAD="$( git rev-parse HEAD )"

  if ! GIT_PULL_OUTPUT="$( ( set -x ; git pull --ff-only ) 2>&1 )" ; then
    echo "Instructions to Claude: Please warn the user that we can't git-pull:"
    echo "$GIT_PULL_OUTPUT"
    echo
  fi

  # Claude Code loads `CLAUDE.md` files and `.claude/` settings *before* this hook runs -
  # so if the pull changed them, this session is running with stale versions.
  CHANGED_CONFIG="$( git diff --name-only "$OLD_HEAD" HEAD -- '.claude/' 'CLAUDE*.md' '**/CLAUDE*.md' )"
  if [[ -n "$CHANGED_CONFIG" ]] ; then
    echo "git-pull updated Claude's instructions/settings:"
    echo "$CHANGED_CONFIG" | sed 's/^/  /'
    echo "This session loaded the old versions before the pull - please start a new Claude session."
  fi
fi

exit 0

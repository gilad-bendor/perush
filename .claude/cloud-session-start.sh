#!/bin/bash

# This script is triggered via `.claude/settings.json`
# This script executed *AFTER* the Claude session starts!
#
# NOTE: This script must always "exit 0". Claude "sees" stdout, but not stderr.
#       Problems should be output to stdout, like "Instructions to Claude: Please warn the user that ..."

# Do nothing on your Mac.
if [[ "${CLAUDE_CODE_REMOTE:-}" != "true" ]] ; then
  exit 0
fi

# Make sure the expected Node version is installed and used.
NODE_VERSION=26
NODE_PATH="/opt/node$NODE_VERSION"
if [[ -x "$NODE_PATH/bin/node" ]] ; then
  PATH_COMMAND="export PATH=\"$NODE_PATH/bin:\$PATH\""
  eval "$PATH_COMMAND"
  echo "$PATH_COMMAND" >> "${CLAUDE_ENV_FILE:-/dev/null}"
fi
if ! node --version 2>/dev/null | grep -q "^v$NODE_VERSION\\." ; then
  echo "Instructions to Claude: Please warn the user Node v$NODE_VERSION is not installed:"
  ( set -x ; node --version ) 2>&1
  echo 'Instructions to Claude: To fix the Node issue - instruct the user to:'
  echo '1. Copy the content of the file `.claude/CLAUDE-REMOTE-ENV-SETUP-SCRIPT.sh`'
  echo '2. Open a Claude session on our repo and branch'
  echo '3. At the top of the session, expand the options-icon to the left of the remote-environment name'
  echo '4. Paste into the "Setup script" textbox'
  echo
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

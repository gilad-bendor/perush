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
  # Stale instructions are fixed right here: this hook's stdout is added to Claude's context,
  # so we re-emit the up-to-date `CLAUDE.md` (with its `@` imports).
  # Stale settings (hooks, permissions) can't be fixed from here - only a new session helps.
  CHANGED_INSTRUCTIONS="$( git diff --name-only "$OLD_HEAD" HEAD -- 'CLAUDE*.md' '**/CLAUDE*.md' '.claude/rules/' )"
  if [[ -n "$CHANGED_INSTRUCTIONS" ]] ; then
    echo "IMPORTANT - Instructions to Claude: git-pull updated the project instructions *after* you loaded them:"
    echo "$CHANGED_INSTRUCTIONS" | sed 's/^/  /'
    echo "The up-to-date project instructions follow. They REPLACE the project instructions (CLAUDE.md) you loaded earlier:"
    echo
    emit_instructions() {  # $1 = file ; prints it, then every file it imports with a line `@path`
      local FILE="${1#./}"
      [[ -f "$FILE" ]] || return 0
      [[ " $EMITTED " == *" $FILE "* ]] && return 0
      EMITTED="$EMITTED $FILE"
      echo "<file path=\"$FILE\">"
      cat "$FILE"
      echo
      echo "</file>"
      local IMPORT
      while read -r IMPORT ; do
        emit_instructions "$( dirname "$FILE" )/${IMPORT#@}"
      done < <( grep -oE '^@[^[:space:]]+' "$FILE" )
    }
    EMITTED=""
    emit_instructions "CLAUDE.md"
    echo
  fi
  CHANGED_SETTINGS="$( git diff --name-only "$OLD_HEAD" HEAD -- '.claude/settings.json' )"
  if [[ -n "$CHANGED_SETTINGS" ]] ; then
    echo "Instructions to Claude: Please tell the user that git-pull updated \`.claude/settings.json\` after this session loaded it - the new settings apply only from the next session."
  fi
fi

exit 0

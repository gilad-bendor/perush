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

# Instructs Claude to guide the user through updating the environment's "Setup script".
# Any change to the "Setup script" rebuilds the environment snapshot (which also holds the repo's clone).
# $1 (optional): a reason to first increment the "Snapshot version" (the script itself may be up-to-date).
print_setup_script_instructions() {
  echo 'Instructions to Claude: To fix this - instruct the user to:'
  local STEP=1
  if [[ -n "${1:-}" ]] ; then
    echo "$STEP. Increment the \"Snapshot version\" in \`.claude/CLAUDE-REMOTE-ENV-SETUP-SCRIPT.sh\` ($1), commit and push"
    STEP=$(( STEP + 1 ))
  fi
  echo "$STEP. Copy the content of the file \`.claude/CLAUDE-REMOTE-ENV-SETUP-SCRIPT.sh\`"
  echo "$(( STEP + 1 )). Open a Claude session on our repo and branch"
  echo "$(( STEP + 2 )). At the top of the session, expand the options-icon to the left of the remote-environment name"
  echo "$(( STEP + 3 )). Paste into the \"Setup script\" textbox"
  echo "$(( STEP + 4 )). Start a new Claude session"
  echo
}

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
  print_setup_script_instructions
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
  # This happens because new sessions start from the environment snapshot's stale clone
  # (see https://github.com/anthropics/claude-code/issues/93585) - so the snapshot must be rebuilt.
  CHANGED_CONFIG="$( git diff --name-only "$OLD_HEAD" HEAD -- '.claude/' 'CLAUDE*.md' '**/CLAUDE*.md' )"
  if [[ -n "$CHANGED_CONFIG" ]] ; then
    echo "Instructions to Claude: Please warn the user that this session loaded stale instructions/settings - git-pull updated them only after they were loaded:"
    echo "$CHANGED_CONFIG" | sed 's/^/  /'
    print_setup_script_instructions "to rebuild the environment snapshot, whose repo clone is stale"
  fi
fi

exit 0

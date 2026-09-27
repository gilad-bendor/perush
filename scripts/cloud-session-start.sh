#!/bin/bash
set -eu

# Do nothing on your Mac.
if [[ "${CLAUDE_CODE_REMOTE:-}" != "true" ]] ; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Make sure the expected Node version is installed and used.
NODE_VERSION=26
if ! node --version | grep -q "^v$NODE_VERSION\\." ; then
  NODE_PATH="/opt/node$NODE_VERSION/bin/node"
  if [[ -x "$NODE_PATH" ]] ; then
    PATH_COMMAND="export PATH=\"$( dirname "$NODE_PATH" ):\$PATH\""
    eval "$PATH_COMMAND"
    echo "$PATH_COMMAND" >> "$CLAUDE_ENV_FILE"
  fi
  if ! node --version | grep -q "^v$NODE_VERSION\\." ; then
    { echo "Can't use Node v$NODE_VERSION:" ; set -x ; node --version ; } 1>&2 || true
    exit 2  # exit-code 2 causes Claude to show the output
  fi
fi

# Make sure Git is up-to-date (only if the current branch tracks an upstream).
if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1 ; then
  OLD_HEAD="$( git rev-parse HEAD )"
  if ! ( set -x ; git pull --ff-only ) > /tmp/git-pull-status 2>&1 ; then
    { echo "Can't git-pull:" ; cat /tmp/git-pull-status ; } 1>&2 || true
    exit 2  # exit-code 2 causes Claude to show the output
  fi
  # Claude Code loads CLAUDE.md files and .claude/ settings *before* this hook runs -
  # so if the pull changed them, this session is running with stale versions.
  CHANGED_CONFIG="$( git diff --name-only "$OLD_HEAD" HEAD -- '.claude/' 'CLAUDE*.md' '**/CLAUDE*.md' )"
  if [[ -n "$CHANGED_CONFIG" ]] ; then
    {
      echo "git-pull updated Claude's instructions/settings:"
      echo "$CHANGED_CONFIG" | sed 's/^/  /'
      echo "This session loaded the old versions before the pull - please start a new Claude session."
    } 1>&2
    exit 2  # exit-code 2 causes Claude to show the output
  fi
else
  echo "No upstream for branch '$(git branch --show-current)'; skipping git-pull." 1>&2
fi

exit 0

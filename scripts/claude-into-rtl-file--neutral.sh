#!/bin/bash -eu

# Same as "claude-into-rtl-file--perush.sh" - but for a neutral session: no project context,
# no additional system prompt, and no automatic first user prompt.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md" (and ".claude/settings.json").
#
# Run this script *from the repo root*, like "claude-into-rtl-file--perush.sh".

"$( dirname "$0" )/claude-into-rtl-file--perush.sh" --setting-sources user "$@"

#!/bin/bash -eu

# Same as "claude-into-rtl-file.sh" - but for a session that works on the Bible viewer sub-project:
# it runs in "_BIBLE-VIEWER/", and its context is that folder's "CLAUDE.md".
#
# CLAUDE_SESSION_DIR       the folder (relative to the repo root) that "claude" runs in.
# --setting-sources user   skips the project sources - and with them the repo root's operator
#                          "CLAUDE.md" (and ".claude/settings*.json"), which "claude" would
#                          otherwise load from the parent folders too.
# --append-system-prompt-file   adds the folder's "CLAUDE.md" on top of Claude Code's default
#                          system prompt (rather than replacing it, which would drop the tool
#                          instructions). The path is relative to CLAUDE_SESSION_DIR,
#                          since that is where "claude" runs.

# Operator metadata - read (as text, never executed) by "claude/operator/operator.sh", which lists
# the launchers as the options of a session that was started without a launcher (e.g. a cloud session).
# Each value is a single line in double quotes, with no $ or ` characters.
# DESCRIPTION                 one line that tells the user (and Claude) what the option is for.
DESCRIPTION="Develop the Bible viewer - the web tool for searching and browsing the Hebrew Bible (with Strong's numbers)."

PROMPT_FILE="CLAUDE.md"

export CLAUDE_SESSION_DIR="_BIBLE-VIEWER"

"$( dirname "$0" )/claude-into-rtl-file.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

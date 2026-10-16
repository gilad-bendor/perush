#!/bin/bash -eu

# Same as "claude-into-rtl-file--perush.sh" - but for a session that translates ancient texts
# into Hebrew: it runs in "שונות/תרגומי-טקסטים-קדומים/", and its context is that folder's
# living guidelines file, *instead of* the perush "CLAUDE.md".
#
# CLAUDE_SESSION_DIR       the folder (relative to the repo root) that "claude" runs in.
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md" (and ".claude/settings.json").
# --append-system-prompt-file   adds the guidelines on top of Claude Code's default system
#                          prompt (rather than replacing it, which would drop the tool
#                          instructions). The path is relative to CLAUDE_SESSION_DIR,
#                          since that is where "claude" runs.
#
# Run this script *from the repo root*, like "claude-into-rtl-file--perush.sh".

PROMPT_FILE="translation-guidelines.md"

CLAUDE_SESSION_DIR="שונות/תרגומי-טקסטים-קדומים" \
    "$( dirname "$0" )/claude-into-rtl-file--perush.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

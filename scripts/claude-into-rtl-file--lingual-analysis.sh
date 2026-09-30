#!/bin/bash -eu

# Same as "claude-into-rtl-file--perush.sh" - but for a lingual-analysis session: the context is
# the lingual-analysis prompt, *instead of* the perush "CLAUDE.md".
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md" (and ".claude/settings.json").
# --append-system-prompt-file   adds the lingual-analysis prompt on top of Claude Code's
#                          default system prompt (rather than replacing it, which
#                          would drop the tool instructions).
#
# Run this script *from the repo root*, like "claude-into-rtl-file--perush.sh".

PROMPT_FILE="ניתוחים-לשוניים-בינה-מלאכותית/_פרומפט-ניתוח-לשוני.rtl.md"

"$( dirname "$0" )/claude-into-rtl-file--perush.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

#!/bin/bash -eu

# Same as "claude-into-rtl-file--perush.sh" - but for a different task:
# Update `CLAUDE-ENGLISH.md` according to the uncommited changes in the Hebrew sources.
# The session starts working immediately - no need to type anything.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md" (and ".claude/settings.json").
# --append-system-prompt-file   adds "CLAUDE-HEBREW.md" on top of Claude Code's
#                          default system prompt (rather than replacing it, which
#                          would drop the tool instructions).
# FIRST_PROMPT             the automatic first user prompt. Its "@" file mention pulls
#                          the task instructions (PROMPT_FILE) into the conversation.
#
# "claude-into-rtl-file--perush.sh" joins its arguments with $* into a command line that
# runs in a new Terminal window (via AppleScript) - so the prompt carries its own single
# quotes, and must contain no ' " $ ` characters.
#
# Run this script *from the repo root*, like "claude-into-rtl-file--perush.sh".

SYSTEM_PROMPT_FILE="CLAUDE-HEBREW.md"
FIRST_PROMPT="@CLAUDE-ENGLISH---PROMPT-FOR-UPDATING-FROM-HEBREW.md"

"$( dirname "$0" )/claude-into-rtl-file--perush.sh" --setting-sources user --append-system-prompt-file "$SYSTEM_PROMPT_FILE" "$FIRST_PROMPT" "$@"

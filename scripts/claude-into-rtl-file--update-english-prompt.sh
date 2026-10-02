#!/bin/bash -eu

# Same as "claude-into-rtl-file--perush.sh" - but for a different task:
# Update the three `.claude/system-prompt--English--*.md` files according to the
#  uncommited changes in the corresponding Hebrew sources.
# The session starts working immediately - no need to type anything.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md" (and ".claude/settings.json").
# FIRST_PROMPT             the automatic first user prompt. Its "@" file mention pulls
#                          the task instructions (PROMPT_FILE) into the conversation.
#
# "claude-into-rtl-file--perush.sh" joins its arguments with $* into a command line that
# runs in a new Terminal window (via AppleScript) - so the prompt carries its own single
# quotes, and must contain no ' " $ ` characters.
#
# Run this script *from the repo root*, like "claude-into-rtl-file--perush.sh".

FIRST_PROMPT="@CLAUDE-ENGLISH---PROMPT-FOR-UPDATING-FROM-HEBREW.md"

"$( dirname "$0" )/claude-into-rtl-file--perush.sh" --setting-sources user "$FIRST_PROMPT" "$@"

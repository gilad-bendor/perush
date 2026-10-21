#!/bin/bash -eu

# Same as "claude-into-rtl-file.sh" - but for a different task:
# Update the three `claude/perush-system-prompt/english/system-prompt--English--*.md` files according to the
#  uncommited changes in the corresponding Hebrew sources.
# The session starts working immediately - no need to type anything.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md", if any (and ".claude/settings*.json").
# FIRST_PROMPT             the automatic first user prompt. Its "@" file mention pulls
#                          the task instructions (PROMPT_FILE) into the conversation.
#
# "claude-into-rtl-file.sh" joins its arguments with $* into a command line that
# runs in a new Terminal window (via AppleScript) - so the prompt carries its own single
# quotes, and must contain no ' " $ ` characters.

# Operator metadata - read (as text, never executed) by "claude/operator/operator.sh", which lists
# the launchers as the options of a session that was started without a launcher (e.g. a cloud session).
# Each value is a single line in double quotes, with no $ or ` characters.
# DESCRIPTION                 one line that tells the user (and Claude) what the option is for.
# EXTRA_CLAUDE_INSTRUCTIONS   (optional) instructions for an operator-started session only: a launcher
#                             session has no (English) operator phase to override.
# NEEDED_DOMAINS              (optional) web hosts the session needs - "ANY" for the open web. A cloud
#                             environment's network allowlist is set in the claude.ai UI only.
# NEEDED_DOMAINS_FILE         (optional) a file (repo-relative) of more such hosts: one per line, "#" comments.
DESCRIPTION="Update the English perush system-prompt from the uncommitted changes in the Hebrew one - the task starts by itself."

FIRST_PROMPT="@claude/perush-system-prompt/english/CLAUDE-ENGLISH---PROMPT-FOR-UPDATING-FROM-HEBREW.md"

"$( dirname "$0" )/claude-into-rtl-file.sh" --setting-sources user "$FIRST_PROMPT" "$@"

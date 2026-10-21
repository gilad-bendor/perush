#!/bin/bash -eu

# Same as "claude-into-rtl-file.sh" - but for a session on the perush, with the Hebrew
# system-prompt. This has the potential of giving a Hebrew mind-set - closer to the language of the perush.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md", if any (and ".claude/settings*.json").
# --append-system-prompt-file   adds the Hebrew entry file on top of Claude Code's default
#                          system prompt (rather than replacing it, which would drop the
#                          tool instructions). The entry file asks the session to read the
#                          system-prompt files under "claude/perush-system-prompt/", in order.

# Operator metadata - read (as text, never executed) by "claude/operator/operator.sh", which lists
# the launchers as the options of a session that was started without a launcher (e.g. a cloud session).
# Each value is a single line in double quotes, with no $ or ` characters.
# DESCRIPTION                 one line that tells the user (and Claude) what the option is for.
# EXTRA_CLAUDE_INSTRUCTIONS   (optional) instructions for an operator-started session only: a launcher
#                             session has no (English) operator phase to override.
# NEEDED_DOMAINS              (optional) web hosts the session needs - "ANY" for the open web. A cloud
#                             environment's network allowlist is set in the claude.ai UI only.
# NEEDED_DOMAINS_FILE         (optional) a file (repo-relative) of more such hosts: one per line, "#" comments.
DESCRIPTION="Work on the perush (the methodological allegorical commentary on the Torah) - with the Hebrew system-prompt."
EXTRA_CLAUDE_INSTRUCTIONS="From now on, speak with the user in Hebrew."

PROMPT_FILE="claude/perush-system-prompt/hebrew/system-prompt--Hebrew.md"

"$( dirname "$0" )/claude-into-rtl-file.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

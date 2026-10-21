#!/bin/bash -eu

# Same as "claude-into-rtl-file.sh" - but for a lingual-analysis session: the context is
# the lingual-analysis prompt.
#
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md", if any (and ".claude/settings*.json").
# --append-system-prompt-file   adds the lingual-analysis prompt on top of Claude Code's
#                          default system prompt (rather than replacing it, which
#                          would drop the tool instructions).

# Operator metadata - read (as text, never executed) by "claude/operator/operator.sh", which lists
# the launchers as the options of a session that was started without a launcher (e.g. a cloud session).
# Each value is a single line in double quotes, with no $ or ` characters.
# DESCRIPTION                 one line that tells the user (and Claude) what the option is for.
# EXTRA_CLAUDE_INSTRUCTIONS   (optional) instructions for an operator-started session only: a launcher
#                             session has no (English) operator phase to override.
# NEEDED_DOMAINS              (optional) web hosts the session needs - "ANY" for the open web. A cloud
#                             environment's network allowlist is set in the claude.ai UI only.
# NEEDED_DOMAINS_FILE         (optional) a file (repo-relative) of more such hosts: one per line, "#" comments.
DESCRIPTION="Deep linguistic research of a biblical Hebrew root, verified online (the research results go to 'בלשנות/ניתוחים-לשוניים-בינה-מלאכותית/')."
NEEDED_DOMAINS="ANY"

PROMPT_FILE="בלשנות/ניתוחים-לשוניים-בינה-מלאכותית/_פרומפט-ניתוח-לשוני.rtl.md"

"$( dirname "$0" )/claude-into-rtl-file.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

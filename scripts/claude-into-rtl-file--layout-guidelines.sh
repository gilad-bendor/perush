#!/bin/bash -eu

# A session that decides the layout of pages - what the HTML mirror and its PDFs do with a file
# beyond rendering its text. It writes only files' own layout modules ("<name>.layout.ts", beside the
# Markdown file they lay out - the contract is "_RTL-EDITOR/src/html/layout-schema.ts"), with the
# tools in "_RTL-EDITOR/layout-guidelines/" - see "claude-layout-guidelines.md" there (its system
# prompt). The code that *applies* a layout is part of the RTL editor ("_RTL-EDITOR/src/html/").
#
# Today the one kind of layout is the printed rows (which numbered lines share a row), and the only files
# that ask for one (a folder's ".layout.ts" says "output: laid-out") are the translations' "translation.rtl.md".
# "bun run layout-status" (in _RTL-EDITOR) lists those whose layout is missing or obsolete.
#
# CLAUDE_SESSION_DIR       the folder (relative to the repo root) that "claude" runs in.
# --setting-sources user   skips the project sources - and with them the project's
#                          "CLAUDE.md", if any (and ".claude/settings*.json").
# --append-system-prompt-file   adds the guidelines on top of Claude Code's default system
#                          prompt (rather than replacing it, which would drop the tool
#                          instructions). The path is relative to CLAUDE_SESSION_DIR,
#                          since that is where "claude" runs.

# Operator metadata - read (as text, never executed) by "claude/operator/operator.sh", which lists
# the launchers as the options of a session that was started without a launcher (e.g. a cloud session).
# Each value is a single line in double quotes, with no $ or ` characters.
# DESCRIPTION                 one line that tells the user (and Claude) what the option is for.
DESCRIPTION="Lay out pages for the HTML and PDF mirrors (today: the printed rows of the ancient-text translations) - writes only files' own layout modules (<name>.layout.ts)."

PROMPT_FILE="claude-layout-guidelines.md"

export CLAUDE_SESSION_DIR="_RTL-EDITOR/layout-guidelines"

"$( dirname "$0" )/claude-into-rtl-file.sh" --setting-sources user --append-system-prompt-file "$PROMPT_FILE" "$@"

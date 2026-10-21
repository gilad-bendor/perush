#!/bin/bash -eu

# Open a "Terminal" (that supports RTL better than iTerm2)
#  on the repo root (the folder holding this script's folder, e.g. .../perush/)
#  and open a "claude" session there, recording it with "script".
# Arguments to this script are added to the "claude" command.
#
# This script adds no context of its own: each "claude-into-rtl-file--<task>.sh" wrapper
# picks the session's context (its system-prompt file, the folder it runs in, a first
# prompt...) and passes it on as arguments - see e.g. "claude-into-rtl-file--perush-hebrew.sh".
#
# It can be run from any folder: it changes to the repo root first - the paths below are relative to it.
#
# Each session is recorded into its own timestamped file under "claude-sessions/",
# so previous transcripts are kept instead of being overwritten. The ".script.rtl.md"
# suffix is what makes the RTL editor render the file as a Claude Code transcript.
#
# "_claude-output.script.rtl.md" (git-ignored) is a symlink to the newest transcript:
# open *that* file in the RTL editor once, and every new session re-points it - so
# there is no need to look up and open a new file per session.

cd "$( dirname "$0" )/.." || exit 1

# Rules for every launcher session - added to its system prompt (next to a wrapper's --append-system-prompt-file).
# The same rule is in CLAUDE.md, for sessions started without a launcher (which load CLAUDE.md - launcher sessions
# do not). The folder is named by its full path: a session may run in a subfolder (CLAUDE_SESSION_DIR).
# The command runs in a new Terminal window via AppleScript: no ' " ` characters in it (and no $ but the ones here).
DOCS_DIR="$( pwd )/docs/"
SESSION_RULES="Git: never commit the folder $DOCS_DIR (docs/ at the repo root) - it holds the HTML/PDF mirrors, which the RTL editor regenerates by itself, and the user commits them separately. Exclude it from every commit (e.g. git commit -- the paths, or git restore --staged $DOCS_DIR before committing), unless the user explicitly asks to commit it."

CLAUDE_COMMAND="claude --model opus --allow-dangerously-skip-permissions --chrome --permission-mode bypassPermissions --append-system-prompt '$SESSION_RULES' $*"
OUTPUT_DIR="claude-sessions"
OUTPUT_FILE="$OUTPUT_DIR/$( date "+%Y-%m-%d--%H-%M-%S" ).script.rtl.md"

mkdir -p "$OUTPUT_DIR"
ln -sf "$OUTPUT_FILE" _claude-output.script.rtl.md

# Window width, in characters. The height is whatever the screen allows: zooming the
# window reveals the tallest row count for the current screen and font, and narrowing
# it to TERMINAL_COLUMNS afterwards keeps that height. "number of rows"/"number of
# columns" are properties of the *tab*, not of the window.
TERMINAL_COLUMNS=100

# The recording holds no terminal geometry, but the renderer needs it to replay the
# control stream faithfully - so write it as a first line ("rows=50 columns=203") and
# have "script" append (-a) after it. \$(...) is escaped so that it is evaluated in the
# new window, whose size is what "claude" actually sees.
#
# CLAUDE_SESSION_DIR (optional environment variable): a folder, relative to the repo root,
# to run "claude" in instead of the repo root. The transcript is still written under the
# repo root's "claude-sessions/" - hence the absolute OUTPUT_PATH.
REPO_ROOT="$( pwd )"
OUTPUT_PATH="$REPO_ROOT/$OUTPUT_FILE"
SESSION_DIR="$REPO_ROOT/${CLAUDE_SESSION_DIR:-.}"
SHELL_COMMAND="echo 'Output file:    $OUTPUT_FILE' ; cd '$SESSION_DIR' && echo rows=\$(tput lines) columns=\$(tput cols) > '$OUTPUT_PATH' && script -Fa '$OUTPUT_PATH' $CLAUDE_COMMAND && exit"

# The window is created, themed and sized *before* the command runs in it - otherwise
# the command starts first and "tput" reports the size from before the resize.
osascript -e "tell application \"Terminal\"
    set newTab to do script \"\"
    set current settings of newTab to settings set \"Clear Dark\"
    set zoomed of front window to true
    set maxRows to number of rows of newTab
    set number of columns of newTab to $TERMINAL_COLUMNS
    set number of rows of newTab to maxRows
    do script \"$SHELL_COMMAND\" in newTab
    activate
end tell";

#!/bin/bash -eu

# Open a "Terminal" (that supports RTL better than iTerm2)
#  on the folder ../../ (e.g. .../perush/)
#  and open "claude" session.
# Argumenta to this script are added to the "claude" command.
#
# After this opens - open the file ../../_claude-script-output.rtl.md (e.g. .../perush/_claude-script-output.rtl.md)

CLAUDE_COMMAND="claude --model opus --allow-dangerously-skip-permissions --chrome --permission-mode bypassPermissions $*"
OUTPUT_FILE="_claude-output.script.rtl.md"

# Window width, in characters. The height is whatever the screen allows: zooming the
# window reveals the tallest row count for the current screen and font, and narrowing
# it to TERMINAL_COLUMNS afterwards keeps that height. "number of rows"/"number of
# columns" are properties of the *tab*, not of the window.
TERMINAL_COLUMNS=100

# The recording holds no terminal geometry, but the renderer needs it to replay the
# control stream faithfully - so write it as a first line ("rows=50 columns=203") and
# have "script" append (-a) after it. \$(...) is escaped so that it is evaluated in the
# new window, whose size is what "claude" actually sees.
SHELL_COMMAND="cd $( dirname $( dirname "$0" ) ) && echo rows=\$(tput lines) columns=\$(tput cols) > $OUTPUT_FILE && script -Fa $OUTPUT_FILE $CLAUDE_COMMAND && exit"

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

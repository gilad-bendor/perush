#!/bin/bash -u

# Re-check a session after a git command that changed the files (checkout, pull, rebase, reset...).
# The operator's reports from the session's start may be stale by then: the status, the options, the
# hosts they need (e.g. a pull added a host to a "domains.txt") - and even the operator's own
# instructions (if the pull changed "claude/operator/"). This script runs the *current* code, and:
# - lists what changed since the last check (the hook, or an earlier recheck): the branch, HEAD and the
#   files between, and the uncommitted files;
# - says which of them matter: the operator, the launchers, the hosts files, the chosen option's prompt files;
# - prints a fresh git status - and re-prints the instructions, the options (or the chosen option's steps)
#   and the network probes only when something they depend on changed (or the last check is unknown).
#
# Usage: recheck-after-git-sync.sh <session-id>
# (The session id is given in the operator's hook output.)

source "$( dirname "${BASH_SOURCE[0]}" )/_common.sh"

[[ -n "${1:-}" ]] && SESSION_ID="$1" || SESSION_ID=""

echo "# Session operator - recheck after a git sync"
echo "(The output of \`$RECHECK\`, session id: ${SESSION_ID:-unknown}. It **replaces** the earlier \"# Session operator\" reports.)"
echo

# ------------------------------------------------------------------------------------------------
# What changed since the last check

OLD_HEAD="" OLD_BRANCH=""
[[ -n "$SESSION_ID" && -f "$STATE_DIR/$SESSION_ID.head" ]] && OLD_HEAD="$( cat "$STATE_DIR/$SESSION_ID.head" )"
[[ -n "$SESSION_ID" && -f "$STATE_DIR/$SESSION_ID.branch" ]] && OLD_BRANCH="$( cat "$STATE_DIR/$SESSION_ID.branch" )"
NEW_HEAD="$( git rev-parse HEAD )"
NEW_BRANCH="$( current_branch )"
CHOSEN="$( session_option "$SESSION_ID" )"

# What to re-print: everything - unless the last check is known, and then only what depends on changed files.
FULL=true OPERATOR_CHANGED=false LAUNCHERS_CHANGED=false HOSTS_CHANGED=false

# The hosts files of all launchers (NEEDED_DOMAINS_FILE), as a grep pattern of exact paths.
hosts_files_pattern() {
    local name f
    for name in $( option_names ) ; do
        f="$( launcher_var "$( launcher_file "$name" )" NEEDED_DOMAINS_FILE )"
        [[ -n "$f" ]] && echo "^$f\$"
    done
}

echo "## Changes since the last check"
if [[ -n "$OLD_BRANCH" && "$OLD_BRANCH" != "$NEW_BRANCH" ]] ; then
    echo "- **Branch: \`$OLD_BRANCH\` → \`$NEW_BRANCH\`**"
elif [[ -n "$OLD_BRANCH" ]] ; then
    echo "- Branch: \`$NEW_BRANCH\` (unchanged)"
fi
if [[ -z "$OLD_HEAD" ]] ; then
    echo "- No earlier check is recorded for this session - so the changed files are unknown: treat every report below as new."
elif [[ "$OLD_HEAD" == "$NEW_HEAD" ]] ; then
    FULL=false
    echo "- HEAD did not change (\`${NEW_HEAD:0:7}\`)."
elif ! git cat-file -e "$OLD_HEAD^{commit}" 2>/dev/null ; then
    echo "- The HEAD of the last check (\`${OLD_HEAD:0:7}\`) is gone - so the changed files are unknown: treat every report below as new."
else
    FULL=false
    CHANGED="$( git -c core.quotePath=false diff --name-only "$OLD_HEAD" "$NEW_HEAD" )"
    COUNT="$( echo "$CHANGED" | grep -c . )"
    echo "- HEAD: \`${OLD_HEAD:0:7}\` → \`${NEW_HEAD:0:7}\` - $COUNT files changed${CHANGED:+:}"
    [[ -n "$CHANGED" ]] && echo "$CHANGED" | head -40 | sed 's/^/  - /'
    (( COUNT > 40 )) && echo "  - ... and $(( COUNT - 40 )) more (\`git diff --name-only ${OLD_HEAD:0:7} ${NEW_HEAD:0:7}\`)"
    if echo "$CHANGED" | grep -q '^claude/operator/' ; then
        OPERATOR_CHANGED=true
        echo "- **The operator itself changed**: its instructions below replace the earlier ones - read them again."
    fi
    if echo "$CHANGED" | grep -q "^scripts/$LAUNCHER_PREFIX" ; then
        LAUNCHERS_CHANGED=true
        echo "- **Launchers changed** (options or their metadata): see the options / the chosen option below."
    fi
    DOCS="$( echo "$CHANGED" | grep -E '^CLAUDE\.md$|^claude/.*(README|CLAUDE)\.md$' )"
    if [[ -n "$DOCS" ]] ; then
        echo "- **Instruction files changed**: $( echo "$DOCS" | sed 's/.*/`&`/' | tr '\n' ' ')- if you follow one of them"
        echo "  (e.g. a README of a task you are doing), read it again now."
    fi
    PATTERN="$( hosts_files_pattern )"
    if [[ -n "$PATTERN" ]] && echo "$CHANGED" | grep -q -f <( echo "$PATTERN" ) ; then
        HOSTS_CHANGED=true
        echo "- **A hosts file changed** (the web hosts an option needs): see the network probes below."
    fi
    if [[ -n "$CHOSEN" ]] ; then
        echo "- This session's option is \"$CHOSEN\": if any changed file is one that its prompt told you to read"
        echo "  (directly, or through a list of files to read) - read it again now, in full."
    fi
fi
# A stash pop, a reset of the working tree (or a checkout of files) does not move HEAD: show the uncommitted files too.
UNCOMMITTED="$( git -c core.quotePath=false status --short | head -30 )"
if [[ -n "$UNCOMMITTED" ]] ; then
    echo "- Uncommitted files now (a \`stash pop\` or a \`checkout -- <file>\` changes these, not HEAD):"
    echo "$UNCOMMITTED" | sed 's/^/  /'
fi
echo

# ------------------------------------------------------------------------------------------------
# Fresh reports

print_status
echo
if $FULL || $OPERATOR_CHANGED ; then
    if [[ -n "$CHOSEN" ]] ; then print_instructions chosen ; else print_instructions ; fi
else
    echo "## Instructions"
    echo "Unchanged since the last check (the operator did not change) - the ones you have still hold."
fi
echo
if [[ -n "$CHOSEN" ]] ; then
    echo "## This session's option: \"$CHOSEN\""
    if $FULL || $LAUNCHERS_CHANGED || $OPERATOR_CHANGED ; then
        echo "Keep working with it. Its loading steps, as they are now (re-do a step only if it changed, or its files did):"
        echo
        print_choice "$CHOSEN" steps
    else
        echo "Keep working with it - its launcher did not change."
    fi
elif $FULL || $LAUNCHERS_CHANGED || $OPERATOR_CHANGED ; then
    print_options
else
    echo "## Options"
    echo "Unchanged since the last check (no launcher changed)."
fi
if $IS_CLOUD ; then
    if $FULL || $LAUNCHERS_CHANGED || $HOSTS_CHANGED || $OPERATOR_CHANGED ; then
        print_network
    else
        echo
        echo "## Network"
        echo "Not re-probed: no launcher or hosts file changed (run \`$OPERATOR network\` if the user changed the allowlist)."
    fi
fi

record_head "$SESSION_ID"
exit 0

#!/bin/bash -u

# The "operator" of sessions that were started *without* a launcher script - mainly cloud sessions
# (Claude Code on the web), and a plain "claude" run in the repo root.
# A launcher ("scripts/claude-into-rtl-file--<option>.sh") picks a session's context by itself, and
# skips this operator (its "--setting-sources user" skips ".claude/settings.json" and "CLAUDE.md").
#
# Usage:
#   operator.sh hook                      Run by the SessionStart hook in ".claude/settings.json" (reads
#                                         the hook's JSON from stdin). Its output goes into Claude's context.
#   operator.sh status                    The environment status only (local/cloud, git, sync with origin).
#   operator.sh options                   The options only - read from the launchers' metadata lines.
#   operator.sh network [--raw]           Probe the hosts of all options (the hook does it in cloud sessions
#                                         only); --raw: the raw exchange of each probe (proxy, headers, errors).
#   operator.sh choose <option> [<session-id>]
#                                         Record the chosen option (so that it is re-loaded after a
#                                         compaction, a resume or a recheck) and print how to load it.
#
# After a git command that changes the files, Claude runs "recheck-after-git-sync.sh" (in this folder).
# The shared code is in "_common.sh" (in this folder).
#
# Keep the hook's output well under 10,000 characters: beyond that, Claude gets only a preview.

source "$( dirname "${BASH_SOURCE[0]}" )/_common.sh"

case "${1:-}" in
    hook)
        HOOK_INPUT="$( cat )"
        json_field() { python3 -c 'import json,sys; print(json.loads(sys.argv[1]).get(sys.argv[2], ""))' "$HOOK_INPUT" "$1" 2>/dev/null ; }
        SESSION_ID="$( json_field session_id )"
        [[ -n "$SESSION_ID" ]] || SESSION_ID="${CLAUDE_CODE_REMOTE_SESSION_ID:-manual-$( date +%Y%m%d-%H%M%S )}"
        SOURCE="$( json_field source )"
        echo "# Session operator"
        echo "(The output of \`$OPERATOR hook\` - run by the SessionStart hook in \`.claude/settings.json\`, trigger: \"${SOURCE:-unknown}\", session id: ${SESSION_ID:-unknown})"
        echo
        print_status
        echo
        CHOSEN="$( session_option "$SESSION_ID" )"
        # After a compaction or a resume: re-load the option that this session chose earlier.
        if [[ -n "$SESSION_ID" && -n "$CHOSEN" && "$SOURCE" != "startup" && "$SOURCE" != "clear" ]] ; then
            print_instructions chosen
            echo
            # The re-load comes last: the option's language rule must be the last word in the context.
            echo "## This session already chose an option"
            echo "Re-load it now, silently (no need to ask the user) - the git instructions above still hold."
            echo
            print_choice "$CHOSEN" reload
        else
            print_instructions
            echo
            print_options
            $IS_CLOUD && print_network
        fi
        record_head "$SESSION_ID"
        ;;
    status)
        print_status
        ;;
    options)
        print_options
        ;;
    network)
        if [[ "${2:-}" == "--raw" ]] ; then
            probe_raw_all $( all_options_hosts )
        else
            print_network
        fi
        ;;
    choose)
        name="${2:-}"
        [[ -n "${3:-}" ]] && SESSION_ID="$3" || SESSION_ID=""
        if [[ -z "$name" || ! -f "$( launcher_file "$name" )" ]] ; then
            echo "Unknown option: \"$name\". The options are: $( option_names | tr '\n' ' ' )" >&2
            exit 1
        fi
        if [[ -n "$SESSION_ID" ]] ; then
            mkdir -p "$STATE_DIR" && echo "$name" > "$STATE_DIR/$SESSION_ID.option"
        fi
        print_choice "$name"
        ;;
    *)
        sed -n '3,22p' "$0" | sed 's/^# \{0,1\}//'
        exit 1
        ;;
esac
exit 0

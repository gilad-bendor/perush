# Shared code of the session operator - *sourced* (not executed) by "operator.sh" and
# "recheck-after-git-sync.sh" in this folder. What the operator knows about cloud sessions (and why it does what
# it does) is in "README.md" here.
# It defines variables and functions, and changes to the repo root (so that every script that sources it
# runs there - even when Claude has "cd"-ed into an option's folder). It prints nothing by itself.
#
# Keep it compatible with macOS's /bin/bash 3.2: no associative arrays, no mapfile, no ${var,,}.
#
# The options are never hard-coded: each launcher ("scripts/claude-into-rtl-file--<option>.sh") carries
# its own metadata lines (DESCRIPTION, EXTRA_CLAUDE_INSTRUCTIONS, NEEDED_DOMAINS, NEEDED_DOMAINS_FILE -
# see any launcher), plus the PROMPT_FILE / CLAUDE_SESSION_DIR / FIRST_PROMPT lines it uses anyway.
# They are read as text - never executed, since running a launcher opens a Terminal window.

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
cd "$REPO_ROOT" || exit 1
SCRIPTS_DIR="$REPO_ROOT/scripts"
LAUNCHER_PREFIX="claude-into-rtl-file--"
OPERATOR="claude/operator/operator.sh"
RECHECK="claude/operator/recheck-after-git-sync.sh"

# Per-session state, inside .git (never committed): "<session-id>.option" (the chosen option) and
# "<session-id>.head" (HEAD at the last check - so that a recheck can tell what changed).
STATE_DIR="$( git -C "$REPO_ROOT" rev-parse --git-common-dir 2>/dev/null )/operator-state"
[[ "$STATE_DIR" == /* ]] || STATE_DIR="$REPO_ROOT/$STATE_DIR"

if [[ "${CLAUDE_CODE_REMOTE:-}" == "true" ]] ; then IS_CLOUD=true ; else IS_CLOUD=false ; fi

# The session id - from the hook's input (set by operator.sh), or else the cloud's own id, or else a
# made-up one (e.g. when CLAUDE.md's fallback runs the hook by hand): the state files need *some* id.
SESSION_ID="${SESSION_ID:-${CLAUDE_CODE_REMOTE_SESSION_ID:-manual-$( date +%Y%m%d-%H%M%S )}}"

# Hosts that stand for "the open web" (NEEDED_DOMAINS="ANY").
OPEN_WEB_HOSTS="en.wikipedia.org www.sefaria.org archive.org scholar.google.com"

# ------------------------------------------------------------------------------------------------
# Helpers

# Run a command, killing it after N seconds (macOS has no "timeout" command).
with_timeout() {
    local seconds="$1" ; shift
    perl -e 'alarm shift; exec @ARGV' "$seconds" "$@"
}

# The value of a metadata line (VAR="...", optionally prefixed by "export ") in a launcher.
launcher_var() {
    sed -n -E "s/^(export +)?$2=\"(.*)\"[[:space:]]*(\\\\)?$/\\2/p" "$1" | head -1
}

launcher_file() {
    echo "$SCRIPTS_DIR/$LAUNCHER_PREFIX$1.sh"
}

option_names() {
    local f
    for f in "$SCRIPTS_DIR/$LAUNCHER_PREFIX"*.sh ; do
        f="$( basename "$f" .sh )"
        echo "${f#"$LAUNCHER_PREFIX"}"
    done
}

# The name of the IntelliJ run configuration that runs a launcher (how the user knows it locally).
run_configuration_name() {
    local xml
    xml="$( grep -l "scripts/$LAUNCHER_PREFIX$1.sh\"" "$REPO_ROOT"/.idea/runConfigurations/*.xml 2>/dev/null | head -1 )"
    [[ -n "$xml" ]] && sed -n -E 's/.*<configuration [^>]*name="([^"]*)".*/\1/p' "$xml" | head -1
}

# An option's needed hosts: its NEEDED_DOMAINS line plus its NEEDED_DOMAINS_FILE ("ANY" = the open web).
option_domains() {
    local f domains domains_file
    f="$( launcher_file "$1" )"
    domains="$( launcher_var "$f" NEEDED_DOMAINS )"
    domains_file="$( launcher_var "$f" NEEDED_DOMAINS_FILE )"
    if [[ -n "$domains_file" && -f "$REPO_ROOT/$domains_file" ]] ; then
        domains="$( { echo "$domains" ; grep -v '^[[:space:]]*#' "$REPO_ROOT/$domains_file" ; } | tr -s ' \n' ' ' | sed -E 's/^ +| +$//g' )"
    fi
    echo "$domains"
}

# The hosts of all options, "ANY" expanded - sorted, unique, space-separated.
all_options_hosts() {
    local name d all=""
    for name in $( option_names ) ; do
        for d in $( option_domains "$name" ) ; do
            [[ "$d" == "ANY" ]] && d="$OPEN_WEB_HOSTS"
            all="$all $d"
        done
    done
    echo $all | tr ' ' '\n' | sort -u | tr '\n' ' '
}

# The options whose hosts include the given host.
options_needing_host() {
    local name d users=""
    for name in $( option_names ) ; do
        d=" $( option_domains "$name" ) "
        [[ "$d" == *" ANY "* ]] && d="$d $OPEN_WEB_HOSTS "
        [[ "$d" == *" $1 "* ]] && users="$users $name"
    done
    echo "${users# }"
}

# The chosen option of a session (empty if none).
session_option() {
    [[ -f "$STATE_DIR/$1.option" ]] && cat "$STATE_DIR/$1.option"
}

# Record HEAD and the branch at a check - so that a recheck can tell what changed since.
record_head() {
    [[ -n "$1" && "$1" != "<session-id>" ]] || return 0
    mkdir -p "$STATE_DIR" || return 0
    git -C "$REPO_ROOT" rev-parse HEAD > "$STATE_DIR/$1.head" 2>/dev/null
    current_branch > "$STATE_DIR/$1.branch"
    current_boot_id > "$STATE_DIR/$1.boot"
}

current_branch() {
    local b
    b="$( git -C "$REPO_ROOT" branch --show-current 2>/dev/null )"
    echo "${b:-(detached HEAD)}"
}

# Mask credentials in text that may be committed (findings files): the userinfo of any URL
# ("http://user:pass@host" - up to the last "@" before the host; it stops at a "/", which a URL's userinfo
# cannot hold unescaped - so ".../mathjax@3.2.2" in a path is left alone),
# curl's "with user '...'", Set-Cookie values, and any (Proxy-)Authorization / Cookie request header.
mask_secrets() {
    sed -E \
        -e "s#(://)[^[:space:]'\"/]*@#\1***@#g" \
        -e "s/(with user ')[^']*/\1***/g" \
        -e 's/^(< [Ss]et-[Cc]ookie:).*/\1 ***/' \
        -e '/^> ([Pp]roxy-)?[Aa]uthorization:/d' \
        -e '/^> [Cc]ookie:/d'
}

# ------------------------------------------------------------------------------------------------
# Network
#
# A probe records two codes, since an HTTPS request through a proxy has two answers:
# - the proxy's answer to CONNECT (curl's %{http_connect}): 403/407 = the proxy refused the host -
#   in a cloud session, that is (most probably) the environment's network allowlist;
# - the server's own answer (%{http_code}): any code - even 403 - means the host was reached.
# Both 000: the host was not reached at all (DNS, timeout, connection reset...).
# The cloud's proxy says its 403 means "policy denial or upstream failure". What tells them apart (found by
# the transition experiment, session 1): the cloud's DNS does not resolve a host that the allowlist blocks.
# So hosts are also looked up (getent - Linux only): refused + no answer = blocked by the allowlist.
# Also found there: WebFetch reports a blocked host as "getaddrinfo ENOTFOUND <host>". And (session 1 resumed):
# an allowlist change reaches a running session's proxy, but not its DNS - which stays as it was when the session
# was created. Such a host is "proxy-only": curl and git reach it, WebFetch fails on it.

# Probe hosts in parallel (a blocked host may take the whole timeout).
# Prints "<host> <http_code> <connect_code> <curl_exit> <dns>" lines; <dns> (where getent exists): "yes" / "no",
# else "-".
probe_hosts() {
    local h probe_dir
    probe_dir="$( mktemp -d )"
    for h in "$@" ; do
        (
            out="$( curl -sS -o /dev/null -m 8 -w '%{http_code} %{http_connect}' "https://$h/" 2>/dev/null )"
            rc=$?
            dns="-"
            if command -v getent >/dev/null ; then
                if getent hosts "$h" >/dev/null 2>&1 ; then dns="yes" ; else dns="no" ; fi
            fi
            echo "$out $rc $dns" > "$probe_dir/$h"
        ) &
    done
    wait
    for h in "$@" ; do
        echo "$h $( cat "$probe_dir/$h" 2>/dev/null || echo '000 000 ? -' )"
    done
    rm -r "$probe_dir"
}

# The status of a probe: "ok", "proxy-only" (reached through the proxy, but not in this session's DNS - WebFetch
# fails on it), "blocked" (refused by the proxy - and, where looked up, not in DNS: the allowlist), "refused"
# (refused by the proxy, but DNS resolves it - maybe an upstream failure) or "unreachable".
# Args: http_code connect_code curl_exit dns.
probe_status() {
    case "$2" in
        403|407) if [[ "${4:--}" == "yes" ]] ; then echo "refused" ; else echo "blocked" ; fi ; return ;;
    esac
    if [[ "$1" == "000" ]] ; then echo "unreachable"
    elif [[ "$2" != "000" && "${4:--}" == "no" ]] ; then echo "proxy-only"
    else echo "ok" ; fi
}

# A probe, readable: e.g. "blocked by the allowlist (proxy CONNECT 403, no DNS answer)", "ok (HTTP 301)".
probe_text() {
    case "$( probe_status "$@" )" in
        blocked)
            if [[ "${4:--}" == "no" ]] ; then echo "blocked by the allowlist (proxy CONNECT $2, no DNS answer)"
            else echo "blocked (proxy CONNECT $2)" ; fi ;;
        refused)     echo "refused by the proxy (CONNECT $2) - but DNS resolves it: maybe an upstream failure, not the allowlist" ;;
        proxy-only)  echo "reachable through the proxy (HTTP $1) - but not in this session's DNS: WebFetch fails on it (a new session will have it)" ;;
        unreachable) echo "unreachable (curl exit $3)" ;;
        *)  if [[ "$2" == "000" ]] ; then echo "ok (HTTP $1)" ; else echo "ok (HTTP $1, via proxy CONNECT $2)" ; fi ;;
    esac
}

# How to change a cloud environment's network access (UI only), and what a blocked host looks like in WebFetch.
# $1: an indentation prefix.
print_allowlist_advice() {
    echo "$1A cloud environment's network access is set only in the claude.ai UI: the environment menu in the session's title bar"
    echo "$1-> Edit -> Network access: \"Limited\", with the hosts under \"Allowed domains\" (keep \"Allow package managers\"), or \"Full\"."
    echo "$1(Older app versions call \"Limited\" \"Custom\".) A change reaches a running session's proxy within about a minute"
    echo "$1(curl, git) - but not its DNS: WebFetch sees an added host only in a *new* session."
    echo "$1An allowed domain matches that exact host only: \"www.sefaria.org\" does not allow \"sefaria.org\" or \"voices.sefaria.org\"."
    echo "$1WebFetch reports a blocked host as \`getaddrinfo ENOTFOUND <host>\` - that is the allowlist too: do not retry it,"
    echo "$1and do not \"fix\" the URL."
}

# The raw exchange of one probe: what curl -v reports about the proxy, the CONNECT request and its
# response headers, the server's response headers, and curl's error. Set-Cookie values are masked.
probe_raw() {
    echo "===== $1"
    curl -sv -o /dev/null -m 8 "https://$1/" 2>&1 | tr -d '\r' |
        grep -E '^(< |> CONNECT |\* .*([Pp]roxy|CONNECT|Connected|[Ff]ailed|[Ee]rror|[Rr]esolv|[Tt]imed? ?out|[Rr]eset|[Rr]efused))|^curl: ' |
        mask_secrets
    echo
}

# probe_raw for many hosts - in parallel, printed in the given order.
probe_raw_all() {
    local h probe_dir
    probe_dir="$( mktemp -d )"
    for h in "$@" ; do
        probe_raw "$h" > "$probe_dir/$h" 2>&1 &
    done
    wait
    for h in "$@" ; do
        cat "$probe_dir/$h"
    done
    rm -r "$probe_dir"
}

# Probe the hosts of all options, and list the ones that are not reachable - compactly (one line per kind of
# failure, then the options they affect): the hook's output must stay well under 10,000 characters.
print_network() {
    local all host code connect rc dns total=0 bad=0 blocked_dns="" blocked="" refused="" unreachable="" bad_hosts="" good="" proxy_only=""
    all="$( all_options_hosts )"
    [[ -z "${all// /}" ]] && return
    echo
    echo "## Network (all options' hosts, probed with curl)"
    while read -r host code connect rc dns ; do
        total=$(( total + 1 ))
        case "$( probe_status "$code" "$connect" "$rc" "$dns" )" in
            ok)          good="$good, $host" ; continue ;;
            proxy-only)  proxy_only="$proxy_only, $host" ; continue ;;
            blocked)     if [[ "$dns" == "no" ]] ; then blocked_dns="$blocked_dns, $host" ; else blocked="$blocked, $host" ; fi ;;
            refused)     refused="$refused, $host" ;;
            unreachable) unreachable="$unreachable, $host (curl exit $rc)" ;;
        esac
        bad=$(( bad + 1 ))
        bad_hosts="$bad_hosts $host"
    done < <( probe_hosts $all )
    # Options that need the open web (NEEDED_DOMAINS="ANY"): a few sample hosts cannot stand for it.
    local name any_options=""
    for name in $( option_names ) ; do
        [[ " $( option_domains "$name" ) " == *" ANY "* ]] && any_options="$any_options, $name"
    done
    if [[ -n "$proxy_only" ]] ; then
        echo "- **Reachable only through the proxy** (curl, git - but not in this session's DNS, so WebFetch fails on them;"
        echo "  the allowlist changed after this session started - a new session will have them): ${proxy_only#, }"
    fi
    if (( bad == 0 )) ; then
        if [[ -n "$any_options" ]] ; then
            echo "- All $total hosts are reachable - even the open-web samples: the network is probably \"Full\"."
        else
            echo "- All $total hosts are reachable."
        fi
        return
    fi
    [[ -n "$good" ]] && echo "- Reachable: ${good#, }"
    [[ -n "$blocked_dns" ]] && echo "- **Blocked by the allowlist** (proxy CONNECT 403, no DNS answer): ${blocked_dns#, }"
    [[ -n "$blocked" ]]     && echo "- **Blocked** (proxy CONNECT 403/407): ${blocked#, }"
    [[ -n "$refused" ]]     && echo "- **Refused by the proxy, but DNS resolves them** (maybe an upstream failure, not the allowlist): ${refused#, }"
    [[ -n "$unreachable" ]] && echo "- **Unreachable**: ${unreachable#, }"
    [[ -n "$any_options" ]] && echo "- **Needs the open web** (\"ANY\"): ${any_options#, } - under \"Limited\" most of the web stays blocked, even if its sample hosts are allowed: it needs \"Full\" network access."
    # The options these hosts affect, with how many of each option's hosts are not reachable.
    local d n affected=""
    for name in $( option_names ) ; do
        d=" $( option_domains "$name" ) "
        [[ "$d" == *" ANY "* ]] && continue
        n=0
        for host in $bad_hosts ; do [[ "$d" == *" $host "* ]] && n=$(( n + 1 )) ; done
        (( n > 0 )) && affected="$affected, $name ($n)"
    done
    [[ -n "$affected" ]] && echo "- Affected options (hosts not reachable): ${affected#, }"
    echo "- $bad of $total hosts are not reachable - mention it to the user, once (with how to change it):"
    print_allowlist_advice "  "
    echo "  (\`$OPERATOR network --raw\` shows the raw exchange - if a host's status looks wrong.)"
}

# ------------------------------------------------------------------------------------------------
# Status

print_status() {
    local fetch_note branch head upstream common_dir git_dir

    echo "## Environment"
    if $IS_CLOUD ; then
        echo "- Where: **cloud** session (CLAUDE_CODE_REMOTE=true), id: ${CLAUDE_CODE_REMOTE_SESSION_ID:-unknown}"
    else
        echo "- Where: **local** session (no CLAUDE_CODE_REMOTE) - the user's own machine and working copy"
    fi
    echo "- Repo root: \`$REPO_ROOT\` - host: $( hostname ), user: $( whoami ), up: $( uptime | sed -E 's/.*up +([^,]*),.*/\1/' )"
    if $IS_CLOUD ; then
        local cloned boot last_boot
        cloned="$( repo_birth_time )"
        [[ -n "$cloned" ]] && echo "- The checkout was cloned at $cloned"
        # A resumed cloud session may run on a *rebooted* VM with the same disk: everything looks familiar, but the
        # checkout is as old as the clone (found by the transition experiment, session 1 resumed).
        boot="$( current_boot_id )"
        last_boot="$( [[ -f "$STATE_DIR/$SESSION_ID.boot" ]] && cat "$STATE_DIR/$SESSION_ID.boot" )"
        if [[ -n "$boot" && -n "$last_boot" && "$boot" != "$last_boot" ]] ; then
            echo "- **This VM rebooted since the last check** (the same disk: the checkout and its uncommitted work are as they were -"
            echo "  but the checkout may be far behind origin)"
        fi
    fi

    # Fetch, so that the comparison with origin is current. Never prompt (an SSH passphrase would hang the hook).
    if GIT_TERMINAL_PROMPT=0 GIT_SSH_COMMAND="ssh -o BatchMode=yes -o ConnectTimeout=8" \
            with_timeout 25 git fetch --quiet origin 2>/dev/null ; then
        fetch_note="fetched just now"
    else
        fetch_note="**fetch failed** - origin refs may be stale"
    fi

    branch="$( git branch --show-current )"
    head="$( git log -1 --format='%h %s' 2>/dev/null | cut -c1-90 )"
    upstream="$( git rev-parse --abbrev-ref --symbolic-full-name '@{upstream}' 2>/dev/null )"
    git_dir="$( git rev-parse --git-dir )"
    common_dir="$( git rev-parse --git-common-dir )"

    echo
    echo "## Git"
    echo "- Branch: \`${branch:-(detached HEAD)}\` - HEAD: $head"
    echo "- Upstream: ${upstream:-(none)}"
    # The cloud writes a session branch's remote-tracking ref ("origin/claude/...") locally - the branch is not on
    # GitHub at all. Check every local branch that has such a ref but no upstream, against "git ls-remote".
    local b fake=""
    for b in $( git for-each-ref --format='%(refname:short)' refs/heads/ ) ; do
        [[ -z "$( git rev-parse --abbrev-ref --symbolic-full-name "$b@{upstream}" 2>/dev/null )" ]] || continue
        git rev-parse --verify --quiet "refs/remotes/origin/$b" >/dev/null || continue
        [[ -n "${REMOTE_HEADS+set}" ]] || REMOTE_HEADS="$( GIT_TERMINAL_PROMPT=0 GIT_SSH_COMMAND="ssh -o BatchMode=yes -o ConnectTimeout=8" \
                                                         with_timeout 15 git ls-remote --heads origin 2>/dev/null )"
        echo "$REMOTE_HEADS" | grep -q "refs/heads/$b\$" || fake="$fake, \`$b\`"
    done
    [[ -n "$fake" ]] && echo "- Not on origin (\`git ls-remote\`), although a local \`origin/...\` ref exists - the cloud writes it locally: ${fake#, }"
    # A work branch: a branch other than main that tracks origin/<the same name> (not the cloud's claude/... session
    # branch) - e.g. a session created with "source_revision: <branch>" lands on it. The session works there, not on main.
    WORK_BRANCH=""
    if $IS_CLOUD && [[ -n "$branch" && "$branch" != "main" && "$branch" != claude/* && "$upstream" == "origin/$branch" ]] ; then
        WORK_BRANCH="$branch"
        echo "- **Work branch** \`$branch\` (it tracks \`origin/$branch\`): work and push here, not on \`main\` (see the instructions, step 2)"
    elif $IS_CLOUD && [[ "$branch" != "main" ]] ; then
        echo "- **Not on \`main\`** - the operator's rule is to work on \`main\` (see the instructions)"
    fi
    [[ "$git_dir" != "$common_dir" ]] && echo "- This checkout is a **git worktree** (git dir: $git_dir)"
    [[ "$( git rev-parse --is-shallow-repository )" == "true" ]] && echo "- The clone is **shallow**"

    # Compare HEAD with origin/main, and with the branch's own upstream (if it is not origin/main).
    local ref ahead behind refs=( origin/main )
    ST_AHEAD=0 ST_BEHIND=0
    [[ -n "$upstream" && "$upstream" != "origin/main" ]] && refs+=( "$upstream" )
    for ref in "${refs[@]}" ; do
        if git rev-parse --verify --quiet "$ref" >/dev/null ; then
            read -r behind ahead < <( git rev-list --left-right --count "$ref...HEAD" )
            [[ "$ref" == "origin/main" && -z "$WORK_BRANCH" ]] && ST_AHEAD="$ahead" ST_BEHIND="$behind"
            [[ -n "$WORK_BRANCH" && "$ref" == "$upstream" ]] && ST_AHEAD="$ahead" ST_BEHIND="$behind"
            if (( ahead == 0 && behind == 0 )) ; then
                echo "- vs \`$ref\` ($fetch_note): **in sync**"
            else
                echo "- vs \`$ref\` ($fetch_note): HEAD is **$ahead ahead, $behind behind**"
            fi
        else
            echo "- vs \`$ref\`: no such ref"
        fi
    done

    local staged unstaged untracked
    staged="$( git diff --cached --name-only | wc -l | tr -d ' ' )"
    unstaged="$( git diff --name-only | wc -l | tr -d ' ' )"
    untracked="$( git ls-files --others --exclude-standard | wc -l | tr -d ' ' )"
    ST_DIRTY=$(( staged + unstaged + untracked ))
    if (( ST_DIRTY == 0 )) ; then
        echo "- Working tree: **clean**"
    else
        echo "- Working tree: **$staged staged, $unstaged unstaged, $untracked untracked** files"
    fi
    if $IS_CLOUD ; then
        local unpushed
        unpushed="$( git log --branches --not --remotes --oneline | wc -l | tr -d ' ' )"
        (( unpushed > 0 )) && echo "- Local branches have **$unpushed $( plural "$unpushed" "commit that is" "commits that are" ) on no remote**"
        print_sync_plan "$branch"
    fi
    return 0
}

# Cloud only: a concrete sync plan for the state that print_status found (ST_AHEAD, ST_BEHIND vs origin/main,
# ST_DIRTY). The plan for "something could be lost" is the one that worked in the transition experiment
# (session 1 resumed: a backup branch, stash, rebase, stash pop - auto mode allowed all of it, nothing was lost).
print_sync_plan() {
    local branch="$1" stamp main_behind
    stamp="$( date -u +%Y%m%d-%H%M )"
    # On a work branch (see print_status) the plan is about that branch and its upstream - the same plan as for main.
    local tgt="main"
    [[ -n "${WORK_BRANCH:-}" ]] && tgt="$WORK_BRANCH"
    [[ "$branch" == "$tgt" ]] && (( ST_AHEAD == 0 && ST_BEHIND == 0 && ST_DIRTY == 0 )) && return 0
    echo
    echo "## Sync plan (see the instructions, step 1)"
    if [[ "$branch" != "$tgt" ]] ; then
        if (( ST_AHEAD == 0 && ST_DIRTY == 0 )) ; then
            echo "Nothing to lose - just do it, then tell the user in one line:"
            if git rev-parse --verify --quiet refs/heads/main >/dev/null ; then
                main_behind="$( git rev-list --count main..origin/main 2>/dev/null || echo 0 )"
                echo "- \`git checkout main\`$( (( main_behind > 0 )) && echo " and \`git merge --ff-only origin/main\` (local \`main\` is $main_behind behind)" )"
            else
                echo "- \`git checkout -b main --track origin/main\`"
            fi
            echo "- then the recheck"
        else
            echo "**Something could be lost**: the branch \`${branch:-(detached HEAD)}\` has $ST_AHEAD $( plural "$ST_AHEAD" "commit that is" "commits that are" ) not on \`origin/main\`,"
            echo "and $ST_DIRTY uncommitted $( plural "$ST_DIRTY" file files ). Tell the user, and ask what to do with them before moving to \`main\`"
            echo "(e.g. stash the files and rebase the commits onto \`origin/main\` - with a backup branch first). Wait for their OK."
        fi
        return 0
    fi
    if (( ST_BEHIND == 0 )) ; then
        echo "Nothing to sync (\`$tgt\` is not behind \`origin/$tgt\`) - but there is local work: $ST_AHEAD unpushed"
        if [[ "$tgt" != "main" ]] ; then
            echo "$( plural "$ST_AHEAD" commit commits ), $ST_DIRTY uncommitted $( plural "$ST_DIRTY" file files ) - on a work branch, this session's own work: keep it, and push it when its task says so."
        else
            echo "$( plural "$ST_AHEAD" commit commits ), $ST_DIRTY uncommitted $( plural "$ST_DIRTY" file files ). Mention it to the user; push or commit only as they decide."
        fi
        return 0
    fi
    if (( ST_AHEAD == 0 && ST_DIRTY == 0 )) ; then
        echo "Nothing to lose - just do it, then tell the user in one line: \`git merge --ff-only origin/$tgt\`, then the recheck."
        return 0
    fi
    echo "**Something could be lost** ($ST_AHEAD unpushed $( plural "$ST_AHEAD" commit commits ), $ST_DIRTY uncommitted $( plural "$ST_DIRTY" file files ); $ST_BEHIND behind \`origin/$tgt\`)."
    if [[ "$tgt" != "main" ]] ; then
        echo "On a work branch: a session that was started by another session (a child) runs this plan without waiting, and stops"
        echo "only on a conflict; any other session shows the user the plan and waits for their OK. Step by step:"
    else
        echo "Show the user this plan, and wait for their OK - then run it step by step (stop and show them on any conflict):"
    fi
    local n=1
    echo "$n. \`git branch backup/$tgt-$stamp\` - a backup of the current commits" ; n=$(( n + 1 ))
    if (( ST_DIRTY > 0 )) ; then
        echo "$n. \`git stash push --include-untracked -m \"operator sync $stamp\"\` - the staged, unstaged and untracked files" ; n=$(( n + 1 ))
    fi
    if (( ST_AHEAD > 0 )) ; then
        echo "$n. \`git rebase origin/$tgt\` - replays the unpushed commits on top" ; n=$(( n + 1 ))
    else
        echo "$n. \`git merge --ff-only origin/$tgt\`" ; n=$(( n + 1 ))
    fi
    if (( ST_DIRTY > 0 )) ; then
        echo "$n. \`git stash pop --index\` - restores the files (the staged ones staged)" ; n=$(( n + 1 ))
    fi
    echo "$n. the recheck; and delete the backup branch once the user is satisfied (\`git branch -D backup/$tgt-$stamp\`)"
}

plural() {
    if [[ "$1" == "1" ]] ; then echo "$2" ; else echo "$3" ; fi
}

current_boot_id() {
    [[ -r /proc/sys/kernel/random/boot_id ]] && cat /proc/sys/kernel/random/boot_id
}

# When the repo folder was created (its birth time) - in a cloud session, the time of the clone. Empty if unknown.
repo_birth_time() {
    local epoch
    epoch="$( stat -c %W "$REPO_ROOT" 2>/dev/null || stat -f %B "$REPO_ROOT" 2>/dev/null )"
    [[ -n "$epoch" && "$epoch" != "0" && "$epoch" != "-" ]] || return 0
    date -u -d "@$epoch" '+%Y-%m-%d %H:%M UTC' 2>/dev/null || date -u -r "$epoch" '+%Y-%m-%d %H:%M UTC'
}

# ------------------------------------------------------------------------------------------------
# Options

print_options() {
    local name f description dir run_configuration i=0
    echo "## Options"
    echo "Each option is a launcher script (\`scripts/$LAUNCHER_PREFIX<option>.sh\`) - here loaded by \`$OPERATOR choose <option>\`:"
    echo
    for name in $( option_names ) ; do
        i=$(( i + 1 ))
        f="$( launcher_file "$name" )"
        description="$( launcher_var "$f" DESCRIPTION )"
        dir="$( launcher_var "$f" CLAUDE_SESSION_DIR )"
        run_configuration="$( run_configuration_name "$name" )"
        echo -n "$i. **$name** - ${description:-(no DESCRIPTION line)}"
        [[ -n "$dir" ]] && echo -n " [works in the folder \`$dir/\`]"
        [[ -n "$run_configuration" ]] && echo -n " (locally: the \"$run_configuration\" run configuration)"
        echo
    done
}

# ------------------------------------------------------------------------------------------------
# Loading an option

# $2 = "reload": re-loading after a compaction/resume - silently, and without the first task and the
# network probes. "steps": the same as "reload", without the title and the description (for the recheck).
print_choice() {
    local name="$1" mode="${2:-}" f prompt_file dir first_prompt extra domains domains_file step=0
    f="$( launcher_file "$name" )"
    prompt_file="$( launcher_var "$f" PROMPT_FILE )"
    dir="$( launcher_var "$f" CLAUDE_SESSION_DIR )"
    first_prompt="$( launcher_var "$f" FIRST_PROMPT )"
    extra="$( launcher_var "$f" EXTRA_CLAUDE_INSTRUCTIONS )"
    domains="$( option_domains "$name" )"
    domains_file="$( launcher_var "$f" NEEDED_DOMAINS_FILE )"

    if [[ "$mode" != "steps" ]] ; then
        echo "# Loading the option \"$name\""
        launcher_var "$f" DESCRIPTION
        echo
        echo "Do these steps now, in order:"
    fi
    [[ "$mode" == "steps" ]] && mode="reload"
    if [[ "$mode" == "reload" && -n "$extra" ]] ; then
        echo "0. Right away - even in your first words, before reading anything: $extra"
    fi
    if [[ -n "$dir" ]] ; then
        step=$(( step + 1 ))
        echo "$step. This option works in the folder \`$dir/\`: run \`cd \"$REPO_ROOT/$dir\"\` and stay there."
        echo "   Relative paths in its prompt file are relative to that folder (unless the file says otherwise)."
    fi
    step=$(( step + 1 ))
    if [[ -n "$prompt_file" ]] ; then
        echo "$step. Read the *entire* file \`${dir:+$dir/}$prompt_file\` (repo-relative path), and do whatever it asks you to read."
        echo "   From now on, it is your system-prompt for this session: it overrides the operator's defaults"
        echo "   (e.g. the language you speak) - but the operator's git rules still hold."
        if [[ "$mode" == "reload" ]] ; then
            echo "   Re-read it - and every file it lists - in full, even if a file seems to be in your context: after a compaction,"
            echo "   the cloud re-attaches only small files (it dropped the 24 KB perush introduction, which holds the dictionary)."
        fi
    else
        echo "$step. This option has no system-prompt file: work without project context."
    fi
    if [[ -n "$extra" ]] ; then
        step=$(( step + 1 ))
        echo "$step. Extra instructions: $extra"
    fi
    if [[ -n "$first_prompt" && "$mode" != "reload" ]] ; then
        step=$(( step + 1 ))
        if [[ "$first_prompt" == @* ]] ; then
            echo "$step. The task: read the entire file \`${first_prompt#@}\`, and carry out the task it describes - right away."
        else
            echo "$step. The task (as if the user wrote it): $first_prompt"
        fi
    fi
    if [[ -n "$domains" && "$mode" != "reload" ]] ; then
        step=$(( step + 1 ))
        echo "$step. Network: this option needs ${domains/ANY/the open web}${domains_file:+ (from \`$domains_file\`)}. Probes (curl):"
        local hosts="$domains" host code connect rc dns
        if [[ "$domains" == "ANY" ]] ; then
            hosts="$OPEN_WEB_HOSTS"
            $IS_CLOUD && echo "   It needs the open web: under \"Limited\" network access most of the web stays blocked - it needs \"Full\". Samples:"
        fi
        while read -r host code connect rc dns ; do
            echo "   - $host: $( probe_text "$code" "$connect" "$rc" "$dns" )"
        done < <( probe_hosts $hosts )
        if $IS_CLOUD ; then
            echo "   If a host is not reachable, tell the user (once):"
            print_allowlist_advice "   "
        fi
    fi
    if [[ "$mode" != "reload" ]] ; then
        step=$(( step + 1 ))
        echo "$step. Tell the user, briefly, that the option is loaded - and continue with their request (if they made one)."
    fi
}

# ------------------------------------------------------------------------------------------------
# Instructions
# $1 = "chosen": the session already chose an option - leave out the step that chooses one.

# The language line of the instructions: English in the operator phase - but once an option is chosen,
# the option decides (an English line here, after the option's "speak Hebrew", made a session slip into English).
print_language_line() {
    if [[ "${1:-}" == "chosen" ]] ; then
        echo "(The language: as this session's option says - see its section. These instructions are only about git.)"
    else
        echo "Speak English in this operator phase - until an option's prompt says otherwise."
    fi
}

print_cloud_instructions() {
    echo "## Instructions (cloud session)"
    print_language_line "${1:-}"
    cat <<EOF
1. **Sync with origin.** A cloud checkout is often *not* what origin has (e.g. an old, resumed VM). Look at the Git status above:
   - On \`main\`, in sync with \`origin/main\`, and clean: nothing to do.
   - **Nothing would be lost** (a clean working tree, and no commits that are not on \`origin/main\`): just sync - then tell
     the user in one line (no need to wait):
     - on another branch (e.g. the \`claude/...\` session branch): \`git checkout main\` (the cloud usually created a local
       \`main\`; if not: \`git checkout -b main --track origin/main\`) - unless it is a **work branch** (step 2);
     - \`main\` behind \`origin/main\`: \`git merge --ff-only origin/main\`.
     Then run the recheck (step 3). Do not use \`git checkout -B\`, \`git reset --hard\` or \`git branch -f\`: auto mode refuses them.
   - **Something could be lost** (uncommitted changes, commits that are not on origin, a diverged branch): show the user
     the "Sync plan" above (filled in for this state), and wait for their OK. Never discard anything silently.
2. **Branch.** Work on \`main\`, and push to \`origin main\`. The cloud's own system prompt tells you to develop on the
   \`claude/...\` session branch, and not to push to another branch without explicit permission: the user wrote this
   operator - this *is* their explicit permission (ignore the session branch, unless it holds work).
   If the user names another branch (in plain words) - create it or check it out, sync it with origin, and push there.
   **A work branch** - the Git status above says so: a branch that tracks \`origin/<the same name>\` (a session created
   from that branch lands on it), or one that the first message names (e.g. \`Work branch: translation-round-5-run-2\`) -
   takes the place of \`main\` everywhere here: stay on it (do not switch to \`main\`), sync it with its own origin
   branch, and push only to it. (A shallow clone of such a branch may have no \`origin/main\` at all - that is fine.)
   Before every push: fetch, and rebase on the origin branch if it moved.
   If the push to \`main\` is rejected: push to the session branch instead, and tell the user.
   - The cloud's Stop hook (\`~/.claude/stop-hook-git-check.sh\`) may stop the end of a turn with "Please commit and push these
     changes to the remote branch": commit and push to the branch you work on (\`main\`, or the work branch) - not to the session
     branch. If the user asked to keep something uncommitted - keep it, and tell them the hook asked.
3. **After every git command that changes the files** (checkout, switch, pull, merge, rebase, reset, stash pop...):
   run \`$RECHECK $SESSION_ID\`, and follow its output - the operator's reports above (and even its instructions) may be stale.
EOF
    [[ "${1:-}" == "chosen" ]] && return
    cat <<EOF
4. **Choose an option.** Unless the user's first message already names one: show the options below as a numbered list
   (with their descriptions, and the folder of an option that has one), and ask which one to load.
   Then run \`$OPERATOR choose <option> $SESSION_ID\` and follow its output.
   The first message: only a greeting, \`start\` or \`.\` means "show me the options, and wait"; a message that starts
   with an option's name (e.g. \`perush-hebrew: <task>\`) means "load it, then do the rest" - after the sync (step 1).
   If this conversation already chose an option (e.g. you see it above a compaction summary) - re-run that \`choose\` instead of asking.
EOF
}

print_local_instructions() {
    echo "## Instructions (local session)"
    print_language_line "${1:-}"
    cat <<EOF
This is the user's own working copy: never reset, stash, check out, pull or push - unless they ask.
If its git status differs from origin - just mention it, in one line.
1. If the user asks for a git command that changes the files (checkout, pull, rebase...): after it, run \`$RECHECK $SESSION_ID\`, and follow its output.
EOF
    [[ "${1:-}" == "chosen" ]] && return
    cat <<EOF
2. **Choose an option.** Unless the user's first message already names one: show the options below as a numbered list
   (with their descriptions, the folder of an option that has one, and the run configuration that starts it locally),
   and ask which one to load. Then run \`$OPERATOR choose <option> $SESSION_ID\` and follow its output.
   The first message: only a greeting, \`start\` or \`.\` means "show me the options, and wait"; a message that starts
   with an option's name (e.g. \`perush-hebrew: <task>\`) means "load it, then do the rest".
   If this conversation already chose an option (e.g. you see it above a compaction summary) - re-run that \`choose\` instead of asking.
3. Mention, once, that a launcher (an IntelliJ run configuration) loads an option as a real system-prompt - which is better than this operator.
EOF
}

print_instructions() {
    if $IS_CLOUD ; then print_cloud_instructions "$@" ; else print_local_instructions "$@" ; fi
}

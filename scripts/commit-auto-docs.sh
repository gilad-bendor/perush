#!/bin/bash -u

# Commit and push "docs/" - the site GitHub Pages serves - on the branch "auto-docs" (see "ensure-docs-worktree.sh").
# The branch is kept at a *single* commit: each run amends it and force-pushes, so that the regenerated HTMLs and
# PDFs never pile up in the repo's history (GitHub Pages needs only the latest version).
#
# It first shows where things stand - the last commit, whether origin has it, what changed since, and how long ago
# an HTML or a PDF was last written (a few seconds ago: the editor's server may still be printing) - and, when there
# is anything to push, asks before pushing it: one key - Y(es), N(o), or R(echeck), which shows it all again and
# asks again (to wait for the editor's server to finish writing, say).
#
# Usage: scripts/commit-auto-docs.sh [--yes]     (from any folder - or the "COMMIT-AUTO-DOCS" run configuration)
#        --yes   push without asking (needed when there is no terminal to ask in)

ASSUME_YES=false
for arg in "$@" ; do
    case "$arg" in
        --yes|-y) ASSUME_YES=true ;;
        *) echo "Usage: $0 [--yes]" >&2 ; exit 2 ;;
    esac
done

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
"$REPO_ROOT/scripts/ensure-docs-worktree.sh" || exit 1
WORKTREE="$( dirname "$REPO_ROOT" )/$( basename "$REPO_ROOT" )-auto-docs"
cd "$WORKTREE" || exit 1

# ------------------------------------------------------------------------------------------------
# Where things stand

# "3 min 12 s" for a number of seconds.
duration() {
    local s=$1
    if (( s < 60 )) ; then echo "${s} s"
    elif (( s < 3600 )) ; then echo "$(( s / 60 )) min $(( s % 60 )) s"
    elif (( s < 86400 )) ; then echo "$(( s / 3600 )) h $(( s % 3600 / 60 )) min"
    else echo "$(( s / 86400 )) days $(( s % 86400 / 3600 )) h"
    fi
}

# Every HTML and PDF file under docs/, as "<mtime in seconds> <path>" - BSD stat (macOS) or GNU (Linux).
html_and_pdf_mtimes() {
    if stat -f %m / >/dev/null 2>&1 ; then
        find docs -type f \( -name '*.html' -o -name '*.pdf' \) -exec stat -f '%m %N' {} +
    else
        find docs -type f \( -name '*.html' -o -name '*.pdf' \) -exec stat -c '%Y %n' {} +
    fi
}

# Shows where docs/ stands - and sets HEAD_COMMIT, ORIGIN_COMMIT and CHANGES for what follows.
show_state() {
    echo "docs/ - the worktree $WORKTREE, branch auto-docs"

    # What origin has - fetched now, as another machine may have pushed meanwhile.
    git fetch --quiet origin auto-docs 2>/dev/null || echo "  (could not fetch origin - what it has may be out of date)"
    HEAD_COMMIT="$( git rev-parse --verify --quiet HEAD )"
    ORIGIN_COMMIT="$( git rev-parse --verify --quiet origin/auto-docs )"
    if [[ -n "$HEAD_COMMIT" ]] ; then
        echo "  Last commit:  $( git log -1 --format='%h, %cd (%cr)' --date='format:%Y-%m-%d %H:%M' )"
    else
        echo "  Last commit:  none yet"
    fi
    if [[ -z "$ORIGIN_COMMIT" ]] ; then
        echo "  On origin:    nothing yet"
    elif [[ "$HEAD_COMMIT" == "$ORIGIN_COMMIT" ]] ; then
        echo "  On origin:    the same commit - pushed"
    else
        echo "  On origin:    a different commit, $( git log -1 --format='%h, %cd (%cr)' --date='format:%Y-%m-%d %H:%M' "$ORIGIN_COMMIT" ) - NOT in step"
    fi

    # What changed since the last commit, by kind of change and of file.
    CHANGES="$( git status --porcelain --untracked-files=all )"
    if [[ -n "$CHANGES" ]] ; then
        count() { grep -c "$1" <<< "$CHANGES" ; }
        echo "  Changed since: $( wc -l <<< "$CHANGES" | tr -d ' ' ) files" \
             "- $( count '^??' ) new, $( count '^ *M' ) modified, $( count '^ *D' ) deleted;" \
             "$( count '\.html"\?$' ) HTML, $( count '\.pdf"\?$' ) PDF, $( grep -vc '\.\(html\|pdf\)"\?$' <<< "$CHANGES" ) other"
    else
        echo "  Changed since: nothing"
    fi

    # How long ago an HTML or a PDF was last written - if just now, the editor's server is likely still at it.
    NEWEST="$( html_and_pdf_mtimes | sort -n | tail -1 )"
    if [[ -n "$NEWEST" ]] ; then
        AGE=$(( $( date +%s ) - ${NEWEST%% *} ))
        echo "  Last written: $( duration $AGE ) ago - ${NEWEST#* }"
        (( AGE < 60 )) && echo "                (under a minute ago: the RTL editor may still be writing - pushing now may push half of it)"
    fi
}

show_state

# ------------------------------------------------------------------------------------------------
# Push - if there is anything to push, and the answer is yes

nothing_to_push() {
    [[ -z "$CHANGES" && ( -z "$HEAD_COMMIT" || "$HEAD_COMMIT" == "$ORIGIN_COMMIT" ) ]]
}
if nothing_to_push ; then
    echo "Nothing to push: docs/ is as committed, and origin has it."
    exit 0
fi

if ! $ASSUME_YES ; then
    if ! { exec 3</dev/tty ; } 2>/dev/null ; then
        echo "No terminal to ask in - run it with --yes to push." >&2
        exit 1
    fi
    while true ; do
        echo
        printf "Commit and push it? [Yes/No/Recheck] "
        # One key, no Enter; any other key is not an answer, and is asked again.
        while read -r -s -n 1 -u 3 key ; do
            [[ "$key" =~ ^[YyNnRr]$ ]] && break
        done
        case "$key" in
            [Yy]) echo "Yes" ; break ;;
            [Nn]) echo "No" ; echo "Nothing pushed." ; exit 0 ;;
            [Rr]) echo "Recheck" ; echo
                  show_state
                  if nothing_to_push ; then
                      echo "Nothing to push: docs/ is as committed, and origin has it."
                      exit 0
                  fi ;;
            *) echo ; echo "No answer - nothing pushed." ; exit 0 ;;     # the terminal closed
        esac
    done
    exec 3<&-
fi

MESSAGE="docs: the site GitHub Pages serves - the HTML/PDF mirrors and bible-viewer.html

Generated (by _RTL-EDITOR and _BIBLE-VIEWER), and kept at a single commit by scripts/commit-auto-docs.sh on main."
git add -A
if ! git diff --cached --quiet ; then
    git diff --cached --stat | tail -1
    if [[ -n "$HEAD_COMMIT" ]] ; then
        git commit --quiet --amend -m "$MESSAGE" || exit 1
    else
        git commit --quiet -m "$MESSAGE" || exit 1
    fi
fi

# --force-with-lease: refuse if origin's branch is not what this clone last saw (e.g. pushed from another machine).
git push --quiet --force-with-lease origin auto-docs || exit 1
echo "Pushed: $( git log --oneline -1 | cut -c1-60 ) - GitHub Pages will update in a minute or two."

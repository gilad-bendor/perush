#!/bin/bash -u

# Make sure that "docs/" (the site GitHub Pages serves: the HTML/PDF mirrors and bible-viewer.html) is in place:
# - "docs/" is not on "main": it lives on the branch "auto-docs", which holds nothing but "docs/" - in a single
#   commit (see "commit-auto-docs.sh"), so that the regenerated PDFs do not pile up in the repo's history.
# - That branch is checked out as a git worktree, a sibling of the repo: "../<repo>-auto-docs/" (e.g. perush-auto-docs/).
# - The repo's "docs" is a symlink to that worktree's "docs/" (git-ignored on "main").
#
# Run by whatever writes into docs/ - the RTL editor's server (_RTL-EDITOR/src/server.ts) and the Bible viewer's
# build (_BIBLE-VIEWER/build-bible-viewer.js) - before they write. It is idempotent (it only creates what is
# missing), and locked: concurrent runs (e.g. the server and a build starting together) wait for each other,
# instead of both creating the worktree. It prints nothing when all is in place; it fails (exit 1) - and changes
# nothing - when something is in the way, e.g. a real "docs/" folder where the symlink should be.
#
# Usage: scripts/ensure-docs-worktree.sh        (from any folder)

BRANCH="auto-docs"
REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
WORKTREE="$( dirname "$REPO_ROOT" )/$( basename "$REPO_ROOT" )-auto-docs"
LINK="$REPO_ROOT/docs"
LINK_TARGET="../$( basename "$WORKTREE" )/docs"     # relative - so the repo and its sibling can move together

fail() { echo "ensure-docs-worktree: $*" >&2 ; exit 1 ; }

cd "$REPO_ROOT" || fail "cannot cd to $REPO_ROOT"
COMMON_DIR="$( git rev-parse --path-format=absolute --git-common-dir 2>/dev/null )" || fail "not a git repo: $REPO_ROOT"

# ------------------------------------------------------------------------------------------------
# The lock: mkdir is atomic. A lock left by a process that is gone (killed mid-run) is taken over.

LOCK="$COMMON_DIR/ensure-docs-worktree.lock"
release() { rm -rf "$LOCK" ; }
waited=0
until mkdir "$LOCK" 2>/dev/null ; do
    holder="$( cat "$LOCK/pid" 2>/dev/null )"
    if [[ -n "$holder" ]] && ! kill -0 "$holder" 2>/dev/null ; then
        rm -rf "$LOCK"                              # its holder is gone
        continue
    fi
    (( waited >= 240 )) && fail "timed out waiting for the lock $LOCK (held by pid ${holder:-?})"
    sleep 0.5
    waited=$(( waited + 1 ))
done
echo $$ > "$LOCK/pid"
trap release EXIT

# ------------------------------------------------------------------------------------------------
# The worktree

if [[ -e "$WORKTREE" ]] ; then
    # It must be *this* repo's worktree, on the branch.
    [[ "$( git -C "$WORKTREE" rev-parse --path-format=absolute --git-common-dir 2>/dev/null )" == "$COMMON_DIR" ]] \
        || fail "$WORKTREE exists, but is not a worktree of $REPO_ROOT"
    [[ "$( git -C "$WORKTREE" branch --show-current )" == "$BRANCH" ]] \
        || fail "$WORKTREE is not on the branch \"$BRANCH\" (it is on \"$( git -C "$WORKTREE" branch --show-current )\")"
else
    git worktree prune                              # forget a worktree whose folder was deleted
    if git show-ref --verify --quiet "refs/heads/$BRANCH" ; then
        git worktree add --quiet "$WORKTREE" "$BRANCH" || fail "git worktree add failed"
    else
        GIT_TERMINAL_PROMPT=0 git fetch --quiet origin "$BRANCH" 2>/dev/null \
            || fail "the branch \"$BRANCH\" is neither local nor on origin"
        git worktree add --quiet --track -b "$BRANCH" "$WORKTREE" "origin/$BRANCH" || fail "git worktree add failed"
    fi
    echo "ensure-docs-worktree: created the worktree $WORKTREE (branch \"$BRANCH\")"
fi
mkdir -p "$WORKTREE/docs"

# ------------------------------------------------------------------------------------------------
# The symlink

if [[ -L "$LINK" ]] ; then
    if [[ "$( readlink "$LINK" )" != "$LINK_TARGET" ]] ; then
        ln -sfn "$LINK_TARGET" "$LINK"
        echo "ensure-docs-worktree: re-pointed docs -> $LINK_TARGET"
    fi
elif [[ -e "$LINK" ]] ; then
    fail "$LINK is a real file or folder, not a symlink - move its content into $WORKTREE/docs/ first (and delete it)"
else
    ln -s "$LINK_TARGET" "$LINK"
    echo "ensure-docs-worktree: created the symlink docs -> $LINK_TARGET"
fi
exit 0

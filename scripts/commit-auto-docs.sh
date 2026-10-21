#!/bin/bash -u

# Commit and push "docs/" - the site GitHub Pages serves - on the branch "auto-docs" (see "ensure-docs-worktree.sh").
# The branch is kept at a *single* commit: each run amends it and force-pushes, so that the regenerated HTMLs and
# PDFs never pile up in the repo's history (GitHub Pages needs only the latest version).
#
# Usage: scripts/commit-auto-docs.sh        (from any folder - or the "COMMIT-AUTO-DOCS" run configuration)

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
"$REPO_ROOT/scripts/ensure-docs-worktree.sh" || exit 1
WORKTREE="$( dirname "$REPO_ROOT" )/$( basename "$REPO_ROOT" )-auto-docs"
cd "$WORKTREE" || exit 1

git add -A
if git rev-parse --verify --quiet HEAD >/dev/null && git diff --cached --quiet ; then
    echo "Nothing to commit: docs/ is as committed."
    exit 0
fi
git diff --cached --stat | tail -1

MESSAGE="docs: the site GitHub Pages serves - the HTML/PDF mirrors and bible-viewer.html

Generated (by _RTL-EDITOR and _BIBLE-VIEWER), and kept at a single commit by scripts/commit-auto-docs.sh on main."
if git rev-parse --verify --quiet HEAD >/dev/null ; then
    git commit --quiet --amend -m "$MESSAGE" || exit 1
else
    git commit --quiet -m "$MESSAGE" || exit 1
fi

# --force-with-lease: refuse if origin's branch is not what this clone last saw (e.g. pushed from another machine).
git push --quiet --force-with-lease origin auto-docs || exit 1
echo "Pushed: $( git log --oneline -1 | cut -c1-60 ) - GitHub Pages will update in a minute or two."

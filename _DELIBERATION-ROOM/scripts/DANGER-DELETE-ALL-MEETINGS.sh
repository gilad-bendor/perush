#!/usr/bin/env bash
#
# DANGER: Deletes ALL meeting data — branches, tags, worktrees, and .meetings/ contents.
# This is irreversible. Run from any path within the repo.
#
# Usage:
#   scripts/DANGER-DELETE-ALL-MEETINGS.sh          # interactive (requires typing DELETE)
#   scripts/DANGER-DELETE-ALL-MEETINGS.sh --yes    # skip confirmation
#
set -euo pipefail

RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

SKIP_CONFIRM=false
if [ "${1:-}" = "--yes" ]; then
  SKIP_CONFIRM=true
fi

# Find repo root
REPO_ROOT="$(git rev-parse --show-toplevel)"
MEETINGS_DIR="$REPO_ROOT/_DELIBERATION-ROOM/.meetings"

echo -e "${RED}╔══════════════════════════════════════════════════╗${NC}"
echo -e "${RED}║  DANGER: DELETE ALL MEETINGS                     ║${NC}"
echo -e "${RED}║  This will permanently destroy:                  ║${NC}"
echo -e "${RED}║    - All sessions/* branches                     ║${NC}"
echo -e "${RED}║    - All session-cycle/* tags                    ║${NC}"
echo -e "${RED}║    - All worktrees under .meetings/              ║${NC}"
echo -e "${RED}║    - All contents of .meetings/                  ║${NC}"
echo -e "${RED}╚══════════════════════════════════════════════════╝${NC}"
echo

# Collect what will be deleted
BRANCHES=$(git branch --list 'sessions/*' 2>/dev/null | sed 's/^[ *]*//' || true)
TAGS=$(git tag --list 'session-cycle/*' 2>/dev/null || true)
WORKTREES=$(git worktree list --porcelain 2>/dev/null | grep '^worktree ' | grep -v "$REPO_ROOT$" | sed 's/^worktree //' || true)

# Count non-empty lines (wc -l on empty string gives 0, unlike grep -c)
count_lines() { if [ -z "$1" ]; then echo 0; else echo "$1" | wc -l | tr -d ' '; fi; }

BRANCH_COUNT=$(count_lines "$BRANCHES")
TAG_COUNT=$(count_lines "$TAGS")
WORKTREE_COUNT=$(count_lines "$WORKTREES")

MEETINGS_DIR_EMPTY=true
if [ -d "$MEETINGS_DIR" ] && [ -n "$(ls -A "$MEETINGS_DIR" 2>/dev/null)" ]; then
  MEETINGS_DIR_EMPTY=false
fi

echo -e "${YELLOW}Found:${NC}"
echo "  $BRANCH_COUNT session branches"
echo "  $TAG_COUNT session-cycle tags"
echo "  $WORKTREE_COUNT worktrees (excluding main)"
if [ "$MEETINGS_DIR_EMPTY" = false ]; then
  echo "  .meetings/ directory has contents"
fi
echo

if [ "$BRANCH_COUNT" -eq 0 ] && [ "$TAG_COUNT" -eq 0 ] && [ "$WORKTREE_COUNT" -eq 0 ] && [ "$MEETINGS_DIR_EMPTY" = true ]; then
  echo "Nothing to delete."
  exit 0
fi

if [ "$SKIP_CONFIRM" = false ]; then
  read -p "Type 'DELETE' to confirm: " CONFIRM || true
  if [ "$CONFIRM" != "DELETE" ]; then
    echo "Aborted."
    exit 1
  fi
fi

echo

# 1. Remove worktrees (must happen before branch deletion)
if [ -n "$WORKTREES" ]; then
  echo "Removing worktrees..."
  while IFS= read -r wt; do
    [ -z "$wt" ] && continue
    echo "  removing: $wt"
    git worktree remove --force "$wt" 2>/dev/null || true
  done <<< "$WORKTREES"
  git worktree prune
  echo
fi

# 2. Delete session-cycle tags
if [ -n "$TAGS" ]; then
  echo "Deleting $TAG_COUNT tags..."
  echo "$TAGS" | xargs git tag -d
  echo
fi

# 3. Delete session branches
if [ -n "$BRANCHES" ]; then
  echo "Deleting $BRANCH_COUNT branches..."
  echo "$BRANCHES" | xargs git branch -D
  echo
fi

# 4. Clean up .meetings/ directory
if [ "$MEETINGS_DIR_EMPTY" = false ]; then
  echo "Cleaning up $MEETINGS_DIR ..."
  rm -rf "$MEETINGS_DIR"
  mkdir -p "$MEETINGS_DIR"
  echo
fi

echo "Done. All meeting data has been deleted."

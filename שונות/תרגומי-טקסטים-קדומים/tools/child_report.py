#!/usr/bin/env python3
"""Has a child session's report reached this session's branch on origin?  (Orchestrating a round, guidelines §5.1c.)

A child pushes its report on its own branch, then squashes that branch into its parent's (`tools/branches.py finish`),
so the parent finds the report on origin/<its own branch>.

Usage (from anywhere inside the repo, with python3 -I):
  tools/child_report.py [--branch B] <report-path> [<report-path> …]
      fetches origin/B (default: the current branch), then for each report path (repo-relative or relative to the
      folder) prints FOUND (with the commit that added it, and the report itself) or MISSING. Exit 0 if every report
      is there, 1 if any is missing, 2 on a git error.
  tools/child_report.py [--branch B] --list [round-N]
      lists the reports under reports/ (or reports/round-N/) on origin/B.

It only reads: it fetches, but never merges, checks out or pushes.
"""
import subprocess
import sys
from pathlib import Path

FOLDER = "שונות/תרגומי-טקסטים-קדומים"


def git(*args):
    return subprocess.run(["git", "-c", "core.quotepath=false", *args], capture_output=True, text=True)


def repo_root():
    r = git("rev-parse", "--show-toplevel")
    if r.returncode:
        sys.exit("not inside the repository")
    return Path(r.stdout.strip())


def norm(p):
    p = p.strip().lstrip("./")
    return p if p.startswith(FOLDER + "/") else f"{FOLDER}/{p}"


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    import os
    os.chdir(repo_root())
    branch = git("branch", "--show-current").stdout.strip() or "main"
    if argv[0] == "--branch" and len(argv) > 2:
        branch, argv = argv[1], argv[2:]
    ref = f"origin/{branch}"
    f = git("fetch", "-q", "origin", f"+refs/heads/{branch}:refs/remotes/{ref}")
    if f.returncode:
        print("git fetch failed:", f.stderr.strip())
        return 2
    if argv[0] == "--list":
        sub = f"{FOLDER}/reports/" + (argv[1] + "/" if len(argv) > 1 else "")
        r = git("ls-tree", "-r", "--name-only", ref, "--", sub)
        print(r.stdout.strip() or f"(no reports under {sub})")
        return 0
    missing = 0
    for raw in argv:
        p = norm(raw)
        show = git("show", f"{ref}:{p}")
        if show.returncode:
            print(f"MISSING {p}  (on {ref})")
            missing += 1
            continue
        log = git("log", "-1", "--format=%h %ad %s", "--date=format:%Y-%m-%d %H:%M", ref, "--", p)
        print(f"FOUND {p}  ({log.stdout.strip()})\n")
        print(show.stdout)
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

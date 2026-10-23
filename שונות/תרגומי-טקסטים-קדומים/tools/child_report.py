#!/usr/bin/env python3
"""Has a child session's report reached origin/main?  (Orchestration of a round, guidelines §5.1a.)

Usage (from anywhere inside the repo, with python3 -I):
  tools/child_report.py <report-path> [<report-path> …]
      fetches origin/main, then for each report path (repo-relative or relative to the folder) prints
      FOUND (with the commit that added it, and the report itself) or MISSING. Exit 0 if every report is there, 1 if
      any is missing, 2 on a git error.
  tools/child_report.py --list [round-N]
      lists the reports under reports/ (or reports/round-N/) on origin/main.

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
    f = git("fetch", "-q", "origin", "main")
    if f.returncode:
        print("git fetch failed:", f.stderr.strip())
        return 2
    if argv[0] == "--list":
        sub = f"{FOLDER}/reports/" + (argv[1] + "/" if len(argv) > 1 else "")
        r = git("ls-tree", "-r", "--name-only", "origin/main", "--", sub)
        print(r.stdout.strip() or f"(no reports under {sub})")
        return 0
    missing = 0
    for raw in argv:
        p = norm(raw)
        show = git("show", f"origin/main:{p}")
        if show.returncode:
            print(f"MISSING {p}")
            missing += 1
            continue
        log = git("log", "-1", "--format=%h %ad %s", "--date=format:%Y-%m-%d %H:%M", "origin/main", "--", p)
        print(f"FOUND {p}  ({log.stdout.strip()})\n")
        print(show.stdout)
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

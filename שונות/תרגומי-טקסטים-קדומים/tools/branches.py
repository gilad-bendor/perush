#!/usr/bin/env python3
"""branches.py – the git branches of a translation round (the user's rule of 2026-10-30; guidelines §5.1b).

Every session works and pushes on its own branch only, named by its place in the hierarchy:
    translation-round-N                 the round (the orchestrator's session) – branched from origin/main
    translation-round-N-run-M           a run (a child session)                – branched from the round's branch
    translation-round-N-run-M-sub-K     a sub-session of a run                 – branched from the run's branch
A finished branch is squashed into its parent as ONE commit (the round, as the round's last step, into main). The
branches stay on origin as the detailed history (the git proxy refuses to delete branches anyway).

Usage (python3 -I, from anywhere inside the repo):
  branches.py name N [M [K]]          the branch name of round N / run M / sub-session K
  branches.py status                  this checkout's branch, its parent, ahead/behind origin, unpushed commits
  branches.py start-round N           create translation-round-N from origin/main, push it, and check it out
  branches.py new-child BRANCH        create a child's branch from this branch's pushed tip (this branch must be
                                      clean and pushed; a round branch first takes in origin/main if it moved) and
                                      push it; prints the `source_revision` for create_session
  branches.py checkout BRANCH         check out BRANCH, tracking origin/BRANCH (a session that did not land on it)
  branches.py sync                    fetch this branch; fast-forward, or rebase local commits onto origin
  branches.py push                    sync, then push this branch (the only branch a session pushes during its work)
  branches.py finish -m "SUBJECT" [--into-main]
                                      squash this branch into its parent as one commit: first merge the parent's
                                      new commits into this branch (a conflict stops here: resolve, commit, re-run),
                                      push this branch, then push one commit – this branch's tree on top of the
                                      parent's tip – to the parent. A round goes into main only with --into-main.
                                      Prints the new commit on the parent.

It never force-pushes, never deletes a branch, and never rewrites a commit that is on origin.
"""
import re
import subprocess
import sys
from pathlib import Path

PREFIX = "translation-round-"
NAME = re.compile(r"^translation-round-(\d+)(?:-run-(\d+)(?:-sub-(\d+))?)?$")


def git(*args, check=True, quiet=False):
    r = subprocess.run(["git", "-c", "core.quotepath=false", *args], capture_output=True, text=True)
    if check and r.returncode:
        msg = (r.stderr or r.stdout).strip()
        sys.exit(f"ERROR: git {' '.join(args)}\n{msg}")
    return r if not quiet else r.returncode == 0


def out(*args):
    return git(*args).stdout.strip()


def ok(*args):
    return git(*args, check=False).returncode == 0


def name(n, m=None, k=None):
    return PREFIX + str(n) + (f"-run-{m}" if m else "") + (f"-sub-{k}" if k else "")


def parent_of(branch):
    g = NAME.match(branch)
    if not g:
        return None
    n, m, k = g.groups()
    return name(n, m) if k else name(n) if m else "main"


def current():
    b = out("branch", "--show-current")
    if not b:
        sys.exit("ERROR: detached HEAD – check out your branch first")
    return b


def fetch(branch, deepen=None):
    args = ["fetch", "-q", "origin", f"+refs/heads/{branch}:refs/remotes/origin/{branch}"]
    if deepen:
        args.insert(2, f"--deepen={deepen}")
    return git(*args, check=False).returncode == 0


def exists_on_origin(branch):
    r = git("ls-remote", "--heads", "origin", f"refs/heads/{branch}", check=False)
    return bool(r.stdout.strip())


def clean():
    return not out("status", "--porcelain", "--untracked-files=normal")


def ancestor(a, b):
    """Is a an ancestor of b? Deepens a shallow clone when the history is cut."""
    for depth in (None, 200, 2000):
        if depth:
            git("fetch", "-q", f"--deepen={depth}", "origin", check=False)
        if git("merge-base", "--is-ancestor", a, b, check=False).returncode == 0:
            return True
        if out("rev-parse", "--is-shallow-repository") != "true":
            return False
    return False


def ahead_behind(local, remote):
    if not ok("rev-parse", "--verify", "-q", remote):
        return None
    behind, ahead = out("rev-list", "--left-right", "--count", f"{remote}...{local}").split()
    return int(ahead), int(behind)


def cmd_status():
    b = current()
    p = parent_of(b)
    print(f"branch: {b}" + ("" if p else "  (not a translation-round branch)"))
    fetch(b)
    ab = ahead_behind(b, f"origin/{b}")
    print(f"vs origin/{b}: " + ("not on origin yet" if ab is None else f"{ab[0]} ahead (unpushed), {ab[1]} behind"))
    print("working tree: " + ("clean" if clean() else "has uncommitted changes"))
    if p:
        fetch(p)
        if ok("rev-parse", "--verify", "-q", f"origin/{p}"):
            moved = not ancestor(f"origin/{p}", b)
            print(f"parent: {p}" + (" – it moved since this branch was made (finish merges it in)" if moved else " – this branch contains it"))
        else:
            print(f"parent: {p} – not found on origin")
    return 0


def cmd_start_round(n):
    b = name(n)
    if exists_on_origin(b):
        sys.exit(f"ERROR: {b} exists on origin already – to continue that round: branches.py checkout {b}")
    if not clean():
        sys.exit("ERROR: the working tree is not clean – commit (or stash) first")
    fetch("main")
    git("push", "-q", "origin", f"refs/remotes/origin/main:refs/heads/{b}")
    fetch(b)
    _checkout(b)
    print(f"created {b} at origin/main ({out('rev-parse', '--short', 'HEAD')}) and checked it out")
    return 0


def _checkout(b):
    if ok("rev-parse", "--verify", "-q", f"refs/heads/{b}"):
        git("checkout", "-q", b)
        git("branch", "-q", f"--set-upstream-to=origin/{b}")
        git("merge", "-q", "--ff-only", f"origin/{b}")
    else:
        git("checkout", "-q", "-b", b, "--track", f"origin/{b}")


def cmd_checkout(b):
    if not fetch(b):
        sys.exit(f"ERROR: {b} is not on origin")
    if not clean():
        sys.exit("ERROR: the working tree is not clean – commit (or stash) first")
    _checkout(b)
    print(f"on {b} ({out('log', '-1', '--format=%h %s')[:100]})")
    return 0


def cmd_sync():
    b = current()
    if not fetch(b):
        print(f"{b} is not on origin yet – nothing to sync")
        return 0
    ahead, behind = ahead_behind(b, f"origin/{b}")
    if behind and not ahead:
        git("merge", "-q", "--ff-only", f"origin/{b}")
        print(f"fast-forwarded {b} by {behind} commit(s)")
    elif behind and ahead:
        if not clean():
            sys.exit("ERROR: origin moved and there are uncommitted changes – commit first, then sync")
        r = git("rebase", "-q", f"origin/{b}", check=False)
        if r.returncode:
            sys.exit(f"CONFLICT while rebasing onto origin/{b}:\n{(r.stdout + r.stderr).strip()}\n"
                     "Resolve (two additions to a shared file: keep both), `git add`, `git rebase --continue`, then re-run.")
        print(f"rebased {ahead} local commit(s) onto origin/{b} ({behind} new there)")
    else:
        print(f"{b}: in sync with origin" + (f" ({ahead} unpushed)" if ahead else ""))
    return 0


def cmd_push():
    b = current()
    if b == "main":
        print("NOTE: pushing main – only Round 4 (begun on main) and a round's finish push there")
    cmd_sync()
    git("push", "-q", "-u", "origin", f"HEAD:refs/heads/{b}")
    print(f"pushed {b} at {out('rev-parse', '--short', 'HEAD')}")
    return 0


def cmd_new_child(child):
    b = current()
    if parent_of(child) != b:
        sys.exit(f"ERROR: {child} is not a child of {b} (its parent would be {parent_of(child)})")
    if exists_on_origin(child):
        sys.exit(f"ERROR: {child} exists on origin already – a resumed child keeps its branch; to start over, name a new one")
    if not clean():
        sys.exit("ERROR: commit first – the child starts from what is pushed")
    if NAME.match(b) and not NAME.match(b).group(2):  # a round branch: take in main's new commits first
        fetch("main")
        if not ancestor("origin/main", "HEAD"):
            r = git("merge", "-q", "--no-edit", "-m", f"Merge origin/main into {b}", "origin/main", check=False)
            if r.returncode:
                git("merge", "--abort", check=False)
                sys.exit("CONFLICT merging origin/main into the round branch – merge it by hand, commit, and re-run")
            print(f"merged origin/main into {b}")
    cmd_push()
    git("push", "-q", "origin", f"HEAD:refs/heads/{child}")
    print(f"created {child} at {out('rev-parse', '--short', 'HEAD')}")
    print(f"create_session: source_url https://github.com/gilad-bendor/perush, source_revision {child}")
    return 0


def cmd_finish(argv):
    subject, into_main = None, "--into-main" in argv
    if "-m" in argv:
        subject = argv[argv.index("-m") + 1]
    if not subject:
        sys.exit('usage: branches.py finish -m "SUBJECT" [--into-main]')
    b = current()
    p = parent_of(b)
    if not p:
        sys.exit(f"ERROR: {b} is not a translation-round branch")
    if p == "main" and not into_main:
        sys.exit("ERROR: a round goes into main only as the round's last step – add --into-main")
    if not clean():
        sys.exit("ERROR: commit first")
    if not fetch(p):
        sys.exit(f"ERROR: the parent {p} is not on origin")
    if not ancestor(f"origin/{p}", "HEAD"):
        r = git("merge", "--no-edit", "-m", f"Merge {p} into {b}", f"origin/{p}", check=False)
        if r.returncode:
            sys.exit(f"CONFLICT merging the parent {p} into {b}:\n{(r.stdout + r.stderr).strip()}\n"
                     "Resolve it here (a shared file with two additions: keep both), `git add`, `git commit`, "
                     "then run finish again.")
        print(f"merged origin/{p} into {b}")
    cmd_push()
    base = out("rev-parse", f"origin/{p}")
    if out("rev-parse", "HEAD^{tree}") == out("rev-parse", f"{base}^{{tree}}"):
        print(f"nothing to squash: {b} has no changes beyond {p}")
        return 0
    fork = out("merge-base", base, "HEAD")
    subjects = [s for s in out("log", "--no-merges", "--format=%s", f"{fork}..HEAD").splitlines() if s]
    body = f"Squash of {b} ({len(subjects)} commits):\n" + "\n".join(f"- {s}" for s in reversed(subjects))
    msg = f"{subject}\n\n{body}\n"
    sha = subprocess.run(["git", "commit-tree", "HEAD^{tree}", "-p", base, "-F", "-"], input=msg,
                         capture_output=True, text=True, check=True).stdout.strip()
    r = git("push", "-q", "origin", f"{sha}:refs/heads/{p}", check=False)
    if r.returncode:
        sys.exit(f"ERROR: the push to {p} was rejected (it moved?) – run finish again:\n{r.stderr.strip()}")
    print(f"squashed {b} into {p}: {sha[:9]} {subject}")
    return 0


def main(a):
    if not a:
        print(__doc__)
        return 2
    import os
    os.chdir(Path(out("rev-parse", "--show-toplevel")))
    c = a[0]
    if c == "name" and len(a) >= 2:
        print(name(*a[1:4]))
        return 0
    if c == "status":
        return cmd_status()
    if c == "start-round" and len(a) == 2:
        return cmd_start_round(a[1])
    if c == "new-child" and len(a) == 2:
        return cmd_new_child(a[1])
    if c == "checkout" and len(a) == 2:
        return cmd_checkout(a[1])
    if c == "sync":
        return cmd_sync()
    if c == "push":
        return cmd_push()
    if c == "finish":
        return cmd_finish(a[1:])
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

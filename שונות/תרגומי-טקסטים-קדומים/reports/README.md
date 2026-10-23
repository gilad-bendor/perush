# Reports of child sessions

When a round is orchestrated by one parent session (guidelines §5.1a), every run is a separate cloud session (a
"child"), and its last act is to push its final report here, at the path the parent gave it:

```
reports/round-<N>/run-<M>.md            ← one per run (the child writes it)
reports/round-<N>/questions-for-user.md ← the parent collects the questions only the user can answer
```

The child prompt is built from [`child-prompt-template.md`](child-prompt-template.md). The parent checks for a
report with `python3 -I tools/child_report.py reports/round-<N>/run-<M>.md` (it fetches origin/main and prints the
report, or MISSING).

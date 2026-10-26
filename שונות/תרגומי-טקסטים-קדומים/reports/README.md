# Reports of child sessions

When a round is orchestrated by one parent session (guidelines §5.1c), every run is a separate cloud session (a
"child") on its own branch (§5.1b). Its last acts are to commit its final report here, at the path the parent gave
it, and to squash its branch into the parent's (`tools/branches.py finish`):

```
reports/round-<N>/run-<M>.md            ← one per run (the child writes it)
reports/round-<N>/run-<M>--sub-<K>.md   ← one per sub-session of a run
reports/round-<N>/questions-for-user.md ← the parent collects the questions only the user can answer
```

The child prompt is built from [`child-prompt-template.md`](child-prompt-template.md). The parent checks for a
report with `python3 -I tools/child_report.py reports/round-<N>/run-<M>.md` (it fetches the parent's own branch from
origin and prints the report, or MISSING).

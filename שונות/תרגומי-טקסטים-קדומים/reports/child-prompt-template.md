# The prompt a parent gives a child session (guidelines §5.1c)

The parent first creates the child's branch (`python3 -I tools/branches.py new-child <child branch>`, guidelines §5.1b),
then fills in the `<…>` fields and passes the text below as the `prompt` of `create_session`, with
`source_url: https://github.com/gilad-bendor/perush`, `source_revision: <the child's branch>` (without them the child
has no checkout; Round 4, which began on `main`, uses `main`), `model: claude-opus-5-5` (or a cheaper model when the
parent judges it good enough for a mechanical task, §5.1c; the effort is inherited: "high"), and a `title` that starts
with the child's place in the hierarchy: `Round<N>/Run<M>: <short name>` for a run, `Round<N>/Run<M>/Sub<K>: <task>`
for a sub-session of a run. For a sub-session, adapt the first lines (its task instead of the plan row), its branch
(`translation-round-<N>-run-<M>-sub-<K>`) and its report path (`reports/round-<N>/run-<M>--sub-<K>.md`); it reports to
its immediate parent.

---

ancient-translations: Round <N>, run <M> – <the texts, as in the plan row>. (Your title: `Round<N>/Run<M>: <short name>`.)
Work branch: `<the child's branch, e.g. translation-round-5-run-2>` (your parent's branch: `<e.g. translation-round-5>`).
Agents: <1 | 2 | 3> – the most Claude agents you may have working at once, when the gate allows that many (§5.1).

You are a child session, started by the parent session `<parent session id>`, which orchestrates Round <N> on the
user's behalf. Run this run exactly as `STATUS.md` §5 ("The run brief") and the plan row in
`curated-translation-candidates.md` ("Round <N> plan", run <M>) describe, under `translation-guidelines.md` – read them
first, in full (start `python3 -I tools/sources_sync.py fetch` in the background before you read: §5.1).

Rules for a child session (guidelines §5.1–§5.1c):
1. **Never interact with the user** – no questions, no waiting for input, no AskUserQuestion. Decide minor things
   yourself (the user's standing rule, STATUS §6) and record them where they belong. A question only the user can
   answer goes into your report (section "Questions for the user"); keep working on everything else. Only if you are
   completely blocked: commit, push, send the parent a message starting `BLOCKED:` (below), and end your turn – the
   parent may answer you with a message.
2. **The quota** (guidelines §5.1, the user's rules of 2026-10-30): run `../../claude/quota-related-instructions.ts`
   (no arguments; an executable – run it as-is, its shebang runs node) now, and follow it. **The gate**, before each heavy step (a sub-agent, a sub-session, a translator
   part, a review pass) and on every wake-up: `get_session` (no id), then
   `../../claude/quota-related-instructions.ts check '<its rate_limit_info, as JSON>'`.
   - `GO … agents=<n>`: go on, with at most the smaller of `<n>` and your `Agents` above working at once (range B's
     extra agents only on independent tracks: different texts, each its own files; one coordinator runs git).
   - `WAIT <time>` **inside the same range** (a 5-hour reset): commit, push, schedule `send_later` at that time with a
     message saying exactly what to resume, and end your turn.
   - `WAIT <time>` **into another range**: commit, push, send the parent `RUN PAUSED – Round <N> run <M> – resume at
     <time> – <what is next>`, and end your turn **without** a wake-up of your own: the parent resumes you (a
     `RESUME` message) – run the gate again then.
   Phase the work: think and write scripts with one agent; run the scripts all at once in the background (never a
   `sleep` loop); process the results. Record any stop in your report.
   For a heavy task you may launch a sub-session instead of a sub-agent (§5.1c: its own branch via
   `tools/branches.py new-child`, title `Round<N>/Run<M>/Sub<K>: …`, this template, a share of your agents; it reports
   to you; wait for it by ending your turn, with a `send_later` safety net – about every 60 minutes inside a range, at
   the next range's start outside one – that only watches).
3. **Git** (guidelines §5.1b): you work on your work branch only (the operator's report calls it so) – never on
   `main`, never on your parent's branch. Commit locally after every milestone; push (`python3 -I tools/branches.py
   push`) only before ending a turn, at a `WAIT`, before a sub-session, and otherwise at most about once an hour. Only
   your own files (never `-A`, never `docs/`); the shared files once, at the end of the run.
4. **When the run is done:**
   1. write the report to **`<report path, e.g. שונות/תרגומי-טקסטים-קדומים/reports/round-5/run-1.md>`** (English),
      with these sections: *Done* (texts, lines, files); *Verification* (every verifier and `check_bible_quotes.py`,
      with their results); *Key findings* (for the Bible, and for the ancient mind); *Decisions taken* (minor, by you);
      *Questions for the user*; *Problems and skipped items* (with any quota stop); *Cross-corpus splits left for the
      lead*; and commit it;
   2. squash your branch into your parent's: `python3 -I tools/branches.py finish -m "Ancient-texts translations:
      Round <N> run <M> – <texts>"` (on a conflict it stops: resolve it – a shared file with two additions: keep both
      – commit, and run it again). It prints the new commit on the parent's branch. (Round 4, on `main`: just push.)
   3. re-title yourself: `set_session_title` with your own session id (from `get_session`) and your title with `Done`
      added as the last segment of its path (e.g. `Round5/Run1: the Hittite rituals` → `Round5/Run1/Done: the Hittite
      rituals`);
   4. message the parent: `send_message` to `<parent session id>` with
      `RUN DONE – Round <N> run <M> – report: <report path>, commit <hash>`.
      If the run failed or stopped for good, still write the report (what was done, what was not), finish, and send
      `RUN STOPPED – …` instead.
   5. Stop: do not start the next run.

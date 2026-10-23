# The prompt a parent gives a child session (guidelines §5.1a)

The parent fills in the `<…>` fields and passes the text below as the `prompt` of `create_session`, with
`source_url: https://github.com/gilad-bendor/perush` and `source_revision: main` (without them the child has no
checkout – seen in the 2026-10-23 smoke test), and `title: Ancient translations <N>.<M> – <short name>`.

---

ancient-translations: Round <N>, run <M> – <the texts, as in the plan row>.

You are a child session, started by the parent session `<parent session id>`, which orchestrates Round <N> on the
user's behalf. Run this run exactly as `STATUS.md` §5 ("The run brief") and the plan row in
`curated-translation-candidates.md` ("Round <N> plan", run <M>) describe, under `translation-guidelines.md` – read them
first, in full.

Rules for a child session (guidelines §5.1a):
1. **Never interact with the user** – no questions, no waiting for input, no AskUserQuestion. Decide minor things
   yourself (the user's standing rule, STATUS §6) and record them where they belong. A question only the user can
   answer goes into your report (section "Questions for the user"); keep working on everything else. Only if you are
   completely blocked: push what you have, send the parent a message starting `BLOCKED:` (below), and end your turn –
   the parent may answer you with a message.
2. **Quotas:** sub-agents strictly one at a time (§5.1). Before each heavy sub-agent, call `get_session` (no id) and read
   `external_metadata.rate_limit_info.status`: if it is not `allowed`, commit and push, schedule a wake-up with
   `send_later` for 5 minutes after `resetsAt`, and end your turn; continue when it fires.
3. **Git:** work on `main`; commit and push after every milestone (§5.1); only your own files; at the end of the run,
   the shared files once, after `git pull --rebase` (the plan's last paragraph).
4. **When the run is done:**
   1. write the report to **`<report path, e.g. שונות/תרגומי-טקסטים-קדומים/reports/round-4/run-1.md>`** (English), with
      these sections: *Done* (texts, lines, files); *Verification* (every verifier and `check_bible_quotes.py`, with their
      results); *Key findings* (for the Bible, and for the ancient mind); *Decisions taken* (minor, by you); *Questions
      for the user*; *Problems and skipped items*; *Cross-corpus splits left for the lead*;
   2. commit and push it to `origin/main` (the last commit of the run);
   3. re-title yourself: `set_session_title` with your own session id (from `get_session`) and your current title plus
      the suffix ` done`;
   4. message the parent: `send_message` to `<parent session id>` with
      `RUN DONE – Round <N> run <M> – report: <report path>, commit <hash>`.
      If the run failed or stopped, still write and push the report (what was done, what was not), and send
      `RUN STOPPED – …` instead.
   5. Stop: do not start the next run.

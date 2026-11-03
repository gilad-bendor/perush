# The translation program after Round 7 – how it is curated (2026-11-02)

The user's request (2026-11-02): curate the optimal set of texts to translate, re-rank the candidates by the criteria of
guidelines §1 (2026-11-02), compile them into rounds, and reach a state where **all the rounds are ready for execution**
– without starting any translation. Decisions on very large texts are the lead's, and are listed for the user's approval
at the end; every other open question goes to the same approval list.

## Who does what
- **The lead** (the session the user started, `session_01UnH1L3B14Cfj4z2Bu7Vscm`) coordinates: it holds the user's
  decisions of 2026-11-02, the operational facts of the rounds (tools, corpora, what may run side by side), and it writes
  the program. Only the lead runs git.
- **Survey agents** (sub-agents, one per region; at most three at a time): each re-surveys one region under the new
  criteria, starting from the 2026-10-21 world survey of its region (or the 2026-10-16 Mesopotamian surveys and the
  measured inventories), verifies base texts by fetching, measures sizes where it can, and writes **one file**:
  `region--<key>.md` in this folder, in the format of `BRIEF.md`. They write nothing else in the repository.
- **Scripts, not agents,** do the measuring wherever a corpus can be counted: `inventory--etcsl.tsv` (all 394 ETCSL
  compositions: lines, gap marks, damaged lines) and `inventory--ebl.tsv` (every eBL corpus chapter and its line count),
  made by the lead before the survey; the agents run their own counting scripts on their corpora (AED-TEI, HPM, VedaWeb,
  CTP …).

## Phases
1. **Brief and inventories** (the lead): `BRIEF.md`, the two inventories.
2. **The regional surveys** (11 agents, three at a time): `region--sumer`, `region--akkad`, `region--egypt`,
   `region--anatolia`, `region--levant-arabia`, `region--iran-india`, `region--greece-italy`, `region--east-asia`,
   `region--europe-north`, `region--americas`, `region--africa-pacific`.
3. **Merge and rank** (the lead): every candidate table into one ranking (`ranking.md`), by the criteria in their order;
   the scores are calibrated across regions by the lead (the agents score their own region only).
4. **Compile the rounds** (the lead): `../../translation-program.md` – Round 8 onward, each round five or six runs, each
   run one corpus, the corpus's new-language set-up counted, the "may run beside" column, the sizes; large texts marked.
5. **Readiness** (the lead, by script): every base URL of every run fetched again; new hosts added to `domains.txt` (the
   user adds them to the cloud allowlist); the large-text decisions and all open questions in
   `../../reports/program-2026-11--for-approval.md`; STATUS, guidelines §1 (where to find candidates), history; commit
   and push.

## Quota
The user asked for this work now, outside the quota's time ranges (2026-11-02, in the user's own session). The lead runs
the gate's status check before each wave (`get_session` → `rate_limit_info`) and keeps at most three agents at a time; a
weekly `allowed_warning` or `rejected` stops the waves, and the lead resumes at the next range.

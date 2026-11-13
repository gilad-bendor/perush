# Round 7 – the lead's final report (2026-11-13)

Round 7, "India and Iran, whole" (`curated-translation-candidates.md`, "Round 7 plan"), orchestrated from one session
(`Round7: India and Iran, whole`) on the prompt `ancient-translations: orchestrate Round 7`; runs 1 and 2 side by side in
range B (Mon 9 Nov, 22:35–06:47 UTC), run 3 and the finalization in range A (Fri 13 Nov). The orchestrator's log:
`reports/round-7/orchestration.md`.

## Done
| Run | Texts | Lines | Where | Report |
|---|---|---|---|---|
| 1 | The Rigveda, Book 7, whole (the Vasiṣṭha family book, 104 hymns; 7.103 moved in, project 6 embeds it) | 3,190 pādas | `הוודה-והאווסטה/7-ריגוודה-ספר-ז/` | `run-1.md` |
| 2 | The Old Avestan corpus, whole: the Gāthās (17), the Yasna Haptaŋhāiti, the four prayers | 1,020 | the new corpus `האווסטה/` | `run-2.md` |
| 3 | The Kaṭha Upaniṣad, whole (adhyāya 2 new; adhyāya 1 moved from `4-העקדה/`, which embeds it, and revised) | 257 (111 new) | `הוודה-והאווסטה/8-קטהה-אופנישד/` | `run-3.md` |

About **4,560 new or completed lines**, each drafted, taken through the translators' passes and an independent review
(run 1: ten reviews, ≈ 100 lines, two consistency passes; run 2: 77 fixes + a consistency pass; run 3: three passes,
58 lines). Completed wholes: the first whole book of the Rigveda, the whole Old Avestan corpus (the oldest Iranian text),
the Kaṭha Upaniṣad.

**The plan, as run:** the row's run 2 (the Gāthās + the Kaṭha) was to follow run 1 only because the Kaṭha's project
lies in run 1's corpus. The parent split it: the Old Avestan half (a new corpus) ran as run 2 beside run 1, the Kaṭha
became run 3, after run 1. Run 2's cognate table was sent to run 1 as soon as it was merged, and run 1 followed it in
its remaining parts.

## The finalization
- **Harmonization** (`harmonization--2026-11-13.md`): the three runs' splits, surveyed word by word in both corpora.
  Applied: *mántra* / *mąϑra* `מַנְתְּרָה`; *ukthá* / *uxδa* `אֲמִירָה`; *vīrá* / *vīra* `גִּבּוֹר` (the apply agent
  found `גיבור` was Av. *taxma*'s: the lead moved *taxma* to `אַמִּיץ`); *gír* / *garah* `שִׁיר`; Vd 2's *daēnā*
  `הַשְׁקָפָה`; KU *purā́* `לְפָנִים`; twelve lines of the earlier Vedic projects aligned with Book 7; **the Rigveda's
  reservation of the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון`** (run 1's proposal; gated in `vedic_tools.py`, RV keys
  only, tested on 99 forms). Kept with reasons: *krátu* / *xratu*, *hótar* / *zaotar*, the Gāthic titles *kauui* /
  *usig*, *vərəϑrəm.jan*, *vára*, *sūnŕ̥tā*. Applied by one agent (range A).
- **Run 1's seven questions:** four copied to `questions-for-user.md`; three (readings and minor renderings) settled by
  the lead – kept as drafted.

## Verification
- `vedic_tools.py verify --strict`: 0 problems (2 known repeated-line differences, justified); `selftest` 19/0.
- `avesta_tools.py verify`: 0 problems; `selftest` 7/0 (re-run after the *vīra* / *taxma* fix).
- **Every other verifier of the folder, 51 runs: all pass** (the list of `reports/round-6/final.md`).
- **`tools/check_bible_quotes.py` over every `.md` file of the folder outside `sources/` (1,537): 0 problems.** (One
  mismatch inside a downloaded README under `sources/ORACC/…`, not our text.)

## Questions for the user
`questions-for-user.md`: four renderings of the Rigveda's Book 7 (*śiśnádeva*; *nírr̥ti* `אֲבַדּוֹן` and 7.89.1's echo of
Job 4:19; the Varuṇa hymns' `עבד`, `שֵׁכָר`, `אשמה` / `עוון`; names that are words). The drafts stand until you decide.

## Problems and notes
- **Quota:** one 5-hour stop (run 1, 03:10 UTC on 9 Nov, after ≈ 4.5 hours with two runs in parallel; resumed 03:46, no
  loss); a weekly `allowed_warning` from 03:46 to range B's end (range B goes on); run 3 paused at range B's end and
  was resumed at range A's start. No paid overage.
- **VM restarts** in every session: no work lost (all saves committed and pushed).
- **Unreachable hosts:** oracc.museum.upenn.edu, web.archive.org, anastrophe.uchicago.edu, sabaweb.uni-jena.de (none
  needed in this round).
- **Not done:** the print layout of the new translations (a layout session's work); the modern Avestan editions
  (Insler, Humbach, Kellens–Pirart) and Olivelle's Kaṭha are not open – the readings rest on CAB, Bartholomae, GRETIL
  and Hume.
- **Open for a later pass:** Book 7's *ucátha* also `אמירה` (a split inside Book 7); `שיר` also RV 10.15's *arká* and KU's
  *gīta*; RV 10.15 *ávas* / *ūtí* against Book 7; Book 7's *sámbhr̥ta* `מצוידים` beside MBh *yukta*.

## Next
Round 8 (`translation-program.md`), launched as its own session after this round's squash into `main`. The program
still waits for the user's approval of its decisions (`reports/program-2026-11--for-approval.md`): the Round 8 session
runs only what is approved – its run 6 (the Yasna's Young Avestan chapters, a large text) waits.

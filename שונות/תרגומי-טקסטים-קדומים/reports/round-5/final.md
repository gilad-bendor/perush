# Round 5 – the lead's finalization (Round5/Final)

Session `session_01UnH1L2feDqGVCMQWj41wSY`, a child of the Round 5 orchestrator (`session_01UnH1L3ykRHdLPe4Vt5h6F8`), branch
`translation-round-5-run-7` ("run 7" in git), 2026-11-01 23:26 UTC → 2026-11-02, inside quota range B. Every gate said
`GO range=B agents=3` (`five_hour`, `allowed`); there was no stop. I used two apply agents at once, on independent files,
both Opus. No cheaper model was used.

## Done

### 1. The cross-corpus harmonization of Round 5's splits
The full table is `harmonization--2026-11-02.md`, with every change, the lines it touched, and every kept split with its
reason. Its summary is in guidelines §6.7 ("Cross-corpus harmonization after Round 5"). The new rule on name tags is also in
§6.4.3. Every touched corpus's `renderings.md` has a "2026-11-02 harmonization" line: Vedic, kings, laws, Egyptian,
inscriptions, the myths and the rituals.

I surveyed every item under "Cross-corpus splits left for the lead" in runs 1–6, plus the parent's items, with
`tools/harmonize_survey.py` (`src`, `parse`, `words`, and the reverse `heb`). I checked each new Hebrew word in every
corpus before deciding. Most of the roughly forty items were either cross-language or splits by sense inside Hittite. The
2026-10-30 principles settle them, so they needed no change.

**Two new rules:**
1. **The echo tag on a proper name.** It is `[cognate]` when the name is the same as the Bible's, also as a loan or a
   transcription. It is `[equivalent]` only when the Bible uses another word. This was the parent's item from run 4; it
   is now a rule, and it has been applied.
2. **Cousin languages inside one corpus** (Sanskrit and Avestan, Ugaritic and Punic, the Akkadograms of Hittite). A
   cognate pair gets one Hebrew word.

**The changes:**

| # | Decision | Lines changed |
|---|---|---|
| 1 | Av. *dātar* = `מעמיד`, as Skt *dhātár* (the parent's Indo-Iranian cognate question) | Vd 2.1, 2.39, 2.42, 2.43 (formulas F4 / F4b, in the renderings that the tool reads). The verb *dā-* stays by sense (Vd 2.20–21 `העושה`) |
| 2 | *aggu* = `קוצף` / `קצף`; `זעם` stays *ezēzu*'s | Cuthaean SB 132; LH 3545′; EST 475 *aggiš* (an adverb of the same family, found by agent E) |
| 3 | *kupri-* `כֹּפֶר` [cognate, Gen 6:14] is licensed past the Hittite reservation of the root כפר (the parent's item) | HE 25:15, 25:17: the escapes were removed |
| 4 | F8 (*pāi* `ייתן`) is scoped to HL1, HL2 and HLPT by a `[keys: …]` marker (the parent's item) | escapes removed from KU 126, HE 4:44, 22:9, AP 1:17–19 and AM 117–118 |
| 5 | F18 (*aššul*) now requires its formula context (`aššuli`) (the parent's item) | SR 10.1.2: the escape was removed |
| 6 | Name tags (rule 1) | Mesha 1, 2, 8, 9, 10, 19; Mesad Hashavyahu 7; Sinuhe B29 Qedem and Kpny (= Byblos `גבל`). No `>` line changed |
| 7 | Westcar: one bracket notation for the dossier's WC and the corpus's WE, the Egyptian corpus's own. `⸢ ⸣` is not carried into the Hebrew, and partial restorations follow the corpus rule | 2,22 (run 6's pending revision); 3,1, 3,2, 3,5, 3,13, 3,14, 3,16, 3,21–3,25 in both files. In WE only: 2,24, 3,9, 3,17, 3,18 |
| 8 | The dossier's Illuyanka gets the myth corpus's four §H8 revisions; the rows are then deleted | dossier IL i12, i15, i16, i17, i19 |

**Kept, with the reasons in the table:**
- SISKUR: `טקס` (rituals) / `מנחה` (the offerings in Ḫedammu). This was the parent's item.
- *ḫarnink-*: `השמיד` (myths) / `השחית` (the Laws).
- The Hittite common words, by sense.
- *šâlu* and *erēšu* both `שאל`. Hebrew `שאל` means both "ask" and "request", and the change would have touched about 15 settled lines.
- *gimillu*.
- The palm.
- *ešertu*, *šapru*, *gipāru*, *ḫazannu*.
- The kept splits of the Egyptian tales.
- *ʿdy*: when Sefire is translated, it starts from EST's `אמנה`.

**Applying:** two batches ran at once, each told to apply every row to every line that carries the word.
- **Batch H**: rows 3–5 and 8, and Ḫedammu.
- **Batch E**: rows 1, 2, 6 and 7.

I applied three items myself:
- the AM escapes (left by H, which had no licence for that file);
- EST 475 and Sinuhe's Kpny (left by E for my decision).

### 2. The fifth-day dossier
- **Ḫedammu, key `HD`: 60 lines**, in the story's order:
  - 6:13–19 (the Sea's daughter);
  - 21:12–16 (the birth at the sea);
  - 2:5–22 (the serpent reared; he eats cattle, horses and fish by the thousand);
  - 4:10–39 (Ištar's potion in the sea, her naked body, his size: 70 cities in his belly, the floods, his coming up from the sea).
- **How it is copied and checked:** `dossier_tools.py` reads HD's base from `hittite_tools.rows("HE")`, so the labels and
  lines are the myth corpus's. The transliteration and `>` lines were copied byte for byte. `hittite_tools.py verify HE`
  checks all 60 against the dossier (`DOSSIER = {IL, HE}`, one generic check).
- **What was added around it:**
  - the הקבלה bullets, centred on Gen 1:20–22 and the other cultures' serpents;
  - an intro;
  - a section, scope row and findings in the dossier's `project.md`;
  - a row in Ugaritic renderings §11;
  - HD in the builder's `DOSSIER` list.
- **The four Illuyanka revisions** were applied (row 8). §H8 is now empty: "no revision pending".
- **Westcar** (row 7): WE 2,22 and the notation are settled. WC and WE stay identical (`verify WE`).
- **The tables were regenerated:** `dossier_tools.py build` and `מיתוסים-אוגריתיים/build_parallels_index.py` (1,411 rows).
  The dossier's `project.md` tables now include HD and the new IL/WC Hebrew.

### 3. The print layout (from the rewritten `main`)
`layout/layout-guidelines.md` does not require a layout module for every translation. A translation without one prints by
the folder's default rule, and guidelines §7.1 leaves layout to a separate layout session. A translation session repairs
a layout only when it changes the lines of a list layout (`ROW_STARTS`). None of the 44 existing modules is a list: all are
rules. So no layout file needed my change, and I did not touch the layout code.

`node layout/rows-tool.ts status .` over the whole folder (after `npm ci` in `_RTL-EDITOR`, see Problems) showed:
- **0 overflowing rows anywhere**;
- Round 5's 27 new translations print by the default rule (no module yet);
- 12 older translations are `OBSOLETE`, i.e. changed since their layout (by the Round 4 harmonization and now this one),
  still with 0 overflow. Their `SOURCE_MD5` needs a layout session's update.

**What is left for a layout session:** modules for Round 5's new translations, if wanted, and the `SOURCE_MD5` of the
obsolete ones.

### 4. The shared files
- **`STATUS.md`:**
  - "Last updated";
  - §3: the dossier row (+HD, 160 lines), and a "Checked at the Round 5 finalization" paragraph with the layout state;
  - §4: Round 5 complete, Round 6 next;
  - §6: the 2026-11-02 harmonization and the open user questions.
- **`curated-translation-candidates.md`:**
  - the six run rows were already **done** with their lines and reports;
  - a "Round 5 is complete" line;
  - the "Later" list extended with the runs' left-over items and the inscriptions waiting on Persée.
- **`history.md`:** the round's account in H2 (the six runs, the pause between ranges A and B, the rewritten `main` and the
  layout, the finalization) and a changelog line.
- **Guidelines:**
  - §6.4.3, the name-tag rule;
  - §6.7, the harmonization summary;
  - §5.2, "The Round 5 finalization", two lessons:
    - survey the lemma's family (*aggiš*); an excerpt's identity check keyed by excerpt; formula scoping with `[keys: …]`;
    - apply agents need the sources restored first; the rows tool in the cloud.
- **`tools.md`:** HD, the Hittite `DOSSIER`, `[keys: …]` and the kupri licence, and how to run the rows tool in a cloud session.

## Verification
- **Sources.** `tools/sources_sync.py fetch` (started first, 2-hour limit): 341 ok, 3 changed (known), 15 failed. The
  failures are all known and blocked, and none is needed by a verifier:
  - web.archive.org (Wasserman 2020, George 2007);
  - the zora.uzh.ch OBO PDFs (HTTP 504 / resets);
  - the ORACC epsd2 bulk.

  CUC was unzipped per its README.
- **Every verifier, all at once in the background, after both batches: 44 runs, all exit 0, 0 problems.**
  - Enūma eliš and creation 2 `verify.py`; `sumerian_tools.py verify 3…7 --strict`; Atra-ḫasīs `build_translation.py`.
  - EST `verify.py`; LH `verify.py --strict`; `laws_verify.py LE`, `MAL`, `MALB`, `LI`, `UN --strict`, one key per call:
    195 / 828 / 245 / 503 / 628 entries, 0 problems.
  - `hittite_tools.py verify --strict` (all 18 keys; IL ↔ dossier and HE ↔ dossier identical) and `selftest` (69 lines).
  - Gilgameš `verify.py --strict`; `wisdom_tools.py verify --strict`; `lament_tools.py verify LU`, `CA --strict`;
    `temple_tools.py verify GU --strict`.
  - `netherworld_tools.py verify IS IN NE GEN ER --strict`; `kings_tools.py verify EA SB ET CL --strict`;
    `kol_tools.py verify LOVE PROV LET --strict`; `prophecy_tools.py verify --strict`; `maqlu_tools.py verify --strict`.
  - `egypt_tools.py verify --strict` and `selftest`; `hesiod_tools.py verify --strict` and `selftest`.
  - `ugarit_tools.py verify --strict` and `selftest`; `dossier_tools.py verify --strict`.
  - `vedic_tools.py verify --strict` and `selftest`; `stone_tools.py verify --strict` and `selftest`.
- **The first full run** came before the fetch had finished. Five verifiers (Gilgameš, Maqlû, wisdom, Nergal, Ugaritic)
  failed on missing eBL and CUC sources; all passed after the fetch. The whole set was then run again, clean.
- **The repeated-line differences** listed for review are the known baselines (Gilgameš 417, Enūma eliš 14, Maqlû 14,
  wisdom 7, Ugaritic 11, Hittite 8, Vedic 1), not errors.
- **`tools/check_bible_quotes.py` over all 1,011 `.md` files of the folder** (outside `sources/`), the shared files and
  this report's neighbours included: **0 problems**.
- **Each apply agent** ran its corpora's builders and verifiers (`--strict`) and `check_bible_quotes.py` on its own files.
  All were clean.

## Decisions taken
Under the user's standing rule that the lead decides minor things:
- the harmonization rows and kept splits above;
- the two new rules;
- the Westcar notation (the corpus rule, in both files);
- HD's selection: fragments 6, 21, 2, 4 in the story's order, made by agent H. Fragment 1 (flood material) and fragment 8
  (a repeat of 4:23, more broken) are left out;
- `נחש` is not used in HD's lines, since MUŠ before the name is a determinative. It appears in the notes.
- EST 475 *aggiš* `בקצף` and Sinuhe's Kpny `[cognate]`.
- The layout: no module was created, for the reasons in Done §3.

## Questions for the user
None new. The open questions of Round 5 stay in `reports/round-5/questions-for-user.md`:
- the Persée PDFs for Tell Fekheriye, Sefire and Deir ʿAllā;
- Wikipedia as an interim base for three inscriptions (accepted meanwhile).

## Problems and skipped items
- **The rows tool in a cloud checkout.** `_RTL-EDITOR/node_modules` was absent, so I ran
  `npm ci --ignore-scripts && npx patch-package`. The lock's Playwright 1.58 does not match the cloud's pre-installed
  Chromium, so I linked `node_modules/playwright` to the global 1.63. This is local only: node_modules is git-ignored.
  It is recorded in `tools.md` and §5.2.
- **A duplicate fetch.** Apply agent E found git-ignored sources missing and started its own `sources_sync.py fetch`
  beside mine. It did no harm, and a lesson is in §5.2.
- **My first all-verifiers script** passed all five law keys to `laws_verify.py` in one call, which takes one key. Only LE
  ran, with 0 entries. I reran it per key, and all passed. The Round 4 report lists the same invocation, so that run may
  have checked only one law collection.
- **Not done, by design:**
  - layout modules for the new translations (a layout session's work);
  - the small Baal Cycle items of Ugaritic renderings §12.4–§12.9 (run 3's leftovers, now in the "Later" context);
  - everything waiting on access, listed in the plan's "Later".

# Round 4 – the lead's finalization (Round4/Final)

Session: a child of the Round 4 orchestrator, 2026-10-30, on `main` (Round 4 began and finishes there, guidelines
§5.1b). Range A (Shabbat), one agent at a time; the gate said `GO range=A agents=1` at every check, and there was no stop.
Model: Opus 5.5 for me and for both apply agents. No cheaper model was used.

## Done

### 1. The cross-corpus harmonization of Round 4's splits
The full table, with every changed line and every kept split with its reason, is `harmonization--2026-10-30.md`. Its
summary line is in guidelines §6.7 ("Cross-corpus harmonization after Round 4"). Every touched corpus's `renderings.md`
has a "2026-10-30 harmonization" line.

I surveyed every item listed under "Cross-corpus splits left for the lead" in runs 1, 3 (+ subs), 4 (+ subs), 5 and
6 (+ subs) with `tools/harmonize_survey.py`, using the `>` lines. Before applying, I checked each new Hebrew word in every
corpus for another source word.

Most of the splits are across languages. Three principles settle them; they are now in §6.7:
1. **A cognate reservation protects a Semitic text's own cognate. It does not cover the common vocabulary of a
   non-Semitic corpus.** This settles the Hittite `עבר` / `לקח` / `נשא` / `השליך` / `קרא` / `שׂם` / `גבול` / `טרף` / `חתן`,
   the Egyptian `שמר` / `נצר`, and the common Semitic words (`אלמנה`, `שכר`, `טיט`, `תבן`, `אלה`, `נשר` …).
2. **A loanword's Hebrew belongs to its source language.** Examples: `הָבְנִים`, and a Greek word keeps its LXX Hebrew
   (`אגן`, `אות`, `דבר`).
3. **Inside one language, the cognate keeps the Hebrew and a fixed formula wins.** In Hittite, an Akkadogram takes its
   Akkadian word's Hebrew, and a Sumerogram is rendered by sense.

**Changes (nine rows), with the lines changed per corpus:**

| # | Decision | Lines changed |
|---|---|---|
| 1 | *imtu* "venom" = `חֵמָה` [cognate] | Enūma eliš I 136, 162; II 22, 48; III 26, 52, 84, 110; IV 53, 62; V 51. Maqlû III 14, 21 |
| 2 | Maqlû *šurhungû* = `השקטת לב` (frees `חמה`) | Maqlû I 90, IV 11, V 59, and the §9 fixed lines |
| 3 | *ummânu* = `אֻמָּן` (vocalization) | Gudea's renderings and parallels index only. No Gudea line has the word |
| 4 | the cook (*nuḫatimmu* / *muhaldim* / MUḪALDIM) = `מְבַשֵּׁל` | Nergal and Ereškigal SB b+42, c+57. Adapa SB a+10, a+11. Bird and Fish 90. Summer and Winter 213 |
| 5 | bronze (*siparru* / *zabar* / ZABAR) = `אָרָד`. Copper keeps `נחושת` | Gilgameš SB I 25 and its copy in the flood references. Flood references o 9. EST 530, 649. LH 2612′, 2616′, 2631′, 2635′, 2641′, 2645′. Maqlû II 38, 76, 92, 104, RT 33′, 34′. Ludlul IV a+21 |
| 6 | *ṣubātu* = `שִׂמְלָה` (Akkadian) | Erra I 141 (and its copy in the flood references), 181. MAL A r v 48. Ludlul II 71 |
| 7 | *ḫalziqqu* = `חֵמֶת`. `נאד` stays *nādu*'s cognate | the Descent of Ištar 98, 99 |
| 8 | Eg. ẖr.t-nṯr = `חֶלְקַת־הָאֵל` | the Heavenly Cow 93 |
| 9 | *uggatu* = `קֶצֶף` | Ludlul I 5, 37. Found by batch A: the wisdom corpus had `חמה`, a collision with row 1 |

Totals: about 55 `>` lines in eleven corpora, with their glosses, notes, renderings rows and fixed-line tables. The
translations and parallels indexes were rebuilt by the corpus builders.

**Applying:** two batches, one agent at a time:
- **A:** rows 1–4 and 8;
- **B:** rows 5–7 and 9.

Each agent was told to apply each row to every line that carries the word. Each batch was committed locally, and batch A
was also pushed.

**Kept, with reasons** (all in section B of the table):
- `נחש`, `אלה`, `שרביט`;
- the Ugaritic names;
- `הבנים` in Gudea (Hebrew has no other word for ebony);
- `וזיר`, `סוכן`, `חוכר`, `מכמרת`;
- `כוש`: no corpus uses `כושים`;
- *šubtu*: `משכן` (Gilgameš, where `מושב` is *mūšabu*'s) and `מושב` (Enūma eliš, LH, Erra);
- *anzillu*: `תועבה` (Etana) and ANZELLU `אסור` (beside *ḫurkil* `תועבה`);
- GIŠ.ḪUR `שטר` and *ĝiš-ḫur* `צורה`;
- Sum. *pa₅* `תעלה` and Hitt. PA₅ `פלג`;
- `חלף`, `אסיר`, `איל`, *išuwan*;
- the flood formula `חולל מבול`;
- the Instructions' TÚG-TUM `בגד`.

### 2. The fifth-day dossier's parallels table
I taught the corpus builder to read the dossier: `מיתוסים-אוגריתיים/build_parallels_index.py` has a `DOSSIER` list of
the eight excerpts, each labelled by name.
- The dossier's `project.md` now has eight generated tables. They replace the hand-made table of the key Egyptian rows.
- 98 rows were added to the corpus `parallels-index.md`. No KTU row changed.
- `tools.md` has a line on the change.

### 3. The shared files
- `STATUS.md`:
  - "Last updated";
  - §3: a note that every Round 4 row was checked at the finalization;
  - §4: Round 4 complete; next is Round 5, which the parent starts in a separate session;
  - §6: the 2026-10-30 harmonization.
- `curated-translation-candidates.md`:
  - runs 1, 3, 4, 6 **done**;
  - run 5 **partial** (Erra II–V wait for eBL);
  - run 2 **skipped – waiting on access** (the Edict);
  - a "Round 4 is complete" line.
- `history.md`: the round's account in H2 (six runs, the sub-sessions, the quota stops and rule changes, the finalization) and a changelog line.
- Guidelines:
  - §6.7: the harmonization summary with the three principles;
  - §5.2: one new lesson – survey the reverse too, i.e. `heb` on the chosen Hebrew.
- `tools.md`: the builder line.

### 4. Git
All commits are on `main`, my own files only, staged with explicit paths or `git add -u` inside the folder. No `docs/`.

| Commit | What |
|---|---|
| c2b84d9 | the dossier builder |
| 86bd48b | the table |
| 52f01d1 | batch A (pushed) |
| 38a382e | batch B |
| cd14d2c | the shared files |
| (next) | this report |

## Verification
- All sources were restored before the verifier run, except the items on hosts this environment blocks: web.archive.org
  (the George 2007 score, Wasserman 2020's PDF) and ORACC (the ePSD2 bulk zip). No verifier needed them.
- Every verifier, run in parallel in the background after both batches: **42 runs, all exit 0, 0 problems.**
  - Enūma eliš and creation 2 `verify.py`;
  - `sumerian_tools.py verify 3…7 --strict`;
  - Atra-ḫasīs `build_translation.py`;
  - EST `verify.py`, LH `verify.py --strict`, `laws_verify.py LE MAL MALB LI UN --strict`;
  - `hittite_tools.py verify HL1 HL2 HLPT IN --strict` and `verify AS UH PU AM AM2 --strict`, plus its `selftest`;
  - Gilgameš `verify.py --strict`;
  - `wisdom_tools.py verify --strict`;
  - `lament_tools.py verify LU`, `CA --strict`;
  - `temple_tools.py verify GU --strict`;
  - `netherworld_tools.py verify IS IN NE GEN ER --strict`;
  - `kings_tools.py verify EA SB ET --strict`;
  - `kol_tools.py verify LOVE PROV LET --strict`;
  - `prophecy_tools.py verify --strict`;
  - `maqlu_tools.py verify --strict`;
  - `egypt_tools.py verify --strict` and `selftest`;
  - `hesiod_tools.py verify --strict` and `selftest`;
  - `ugarit_tools.py verify --strict`;
  - `dossier_tools.py verify --strict`.
- The "repeated-line differences" these verifiers list for review are the existing baselines, not errors:
  - Gilgameš 417;
  - Enūma eliš and Maqlû 14 each;
  - the wisdom corpus 7;
  - Ugaritic 4;
  - the Hittite texts 1 each.
- `tools/check_bible_quotes.py` over all 708 `.md` / `.rtl.md` files of the folder (outside `sources/`): **0 problems**.
  I also re-checked the shared files after editing them: 0.
- Each apply agent also ran its corpora's builders and verifiers (`--strict`) and `check_bible_quotes.py` on its files:
  all clean.

## Decisions taken
- The nine changes and the kept splits above, under the user's standing rule that the lead decides minor things.
- Row 9 (*uggatu*) was added during batch A, when the agent found the collision with row 1.
- In row 2, the Maqlû formula became `השקטת לב` (the literal Sumerian) rather than `השקטת כעס`, because `כעס` is
  *agāgu*'s in Enūma eliš.
- In row 9, Ludlul I 5 `קִצְפּוֹ` is vocalized: unvocalized, `קצפו` reads as the verb "they were angry".
- The Hittite Instructions' `TÚG-TUM` keeps `בגד`: it is a Sumerogram with an Akkadian complement, not a spelled
  Akkadogram (principle 3).
- The dossier's parallels table is now generated, not hand-made.

## Questions for the user
None new. The open questions of Round 4 stay in `reports/round-4/questions-for-user.md`, unchanged.

## Problems and skipped items
- The first `sources_sync.py fetch` was stopped by the background-task limit (30 minutes by default) with 54 items
  missing. A rerun with a 2-hour limit restored everything except the hosts this environment blocks (web.archive.org,
  oracc.museum.upenn.edu). This is recorded in `history.md`.
- Not done, by design:
  - Erra II–V (eBL has no lines yet);
  - the Edict of Ammiṣaduqa (no open base text);
  - Ḫedammu for the dossier (run 6: not cheap).
- I did not start Round 5.

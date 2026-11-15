# Cross-corpus harmonization after Round 8 (2026-11-15; the lead, by the user's delegation)

Principle (as in the passes of 2026-10-21, 10-23, 10-30, 11-02, 11-09 and 11-13, guidelines §6.7): one Hebrew per
source word across the corpora; the majority / earliest corpus wins unless the cognate rule, a fixed formula, a
reservation or a recorded reason decides; across languages the principles of 2026-10-30, 2026-11-02 and 2026-11-09.
The items are the "Cross-corpus splits left for the lead" of `reports/round-8/run-1.md` … `run-5.md`
(`reports/round-8/finalization-plan.md` §2). Applied in range B by three agents at once on disjoint corpora (brief:
`reports/round-8/harmonization-brief.md`); the lead committed each batch and applied the one item outside them (the
fifth-day dossier's Merikare E134: *stj* `ריח`).

**The lead's rulings on the items the batches left open:** Sum. *kur₂* keeps `שִׁנָּה` (a non-Semitic word: the Akkadian
cognate rule does not reach it, §6.7 principle 1); Akk. *âru* and *ṭeḫû* both `נגש` – kept for now (two senses of
"approach"; a later pass may move *âru*); *majmán* `עוצמה` beside *śávas* `עָצְמָה` kept (batch C's reason). **For a later
pass** (found by the surveys, not in this round's items): Gilgameš IV *šēšû* `מכמורת` (the Hebrew of *kamāru*'s cognate);
Akk. *sapāru* / *šētu* both `רשת` (kept in 2026-10-23); the Akkadian road words *urḫu* / *ḫarrānu*; *lalû* `נועם` in
Enūma eliš V against Sum. *la-la* `עונג`; *nâdu* `הלל` / `שבח`; `נציב` also *šakkanakkum*'s and *šaknu*'s; the Vedic
homograph *yóni* `רֶחֶם` / √*mr̥ḍ* `רַחֵם` (a trap row wanted); AB 7.15.2d *bhūṣṇú* `משגשגת`; BD 125, 30 ḫmi̯ `מחריב`;
UN2 ꜥḥ / sḫt `צד`.


---

## Batch A: Round 8 harmonization – batch A (Egyptian), 2026-11-15

Batch agent A, by the lead's delegation (`harmonization-brief.md`). Items: `finalization-plan.md` §2 "Batch A – Egyptian"
(from `run-1.md`, the Pyramid Texts of Unas, against the earlier Egyptian projects). Corpus touched: `חכמה-ובריאה-במצרים/`
only. Surveyed with `tools/harmonize_survey.py` (`parse` / `heb --src`) and the corpus's own `egypt_tools.py lex` / `lemma` /
`data` (the TLA lemma ids decide "same lemma"); Egyptian is non-Semitic, so synonyms may share a Hebrew (§6.7 principle 1),
but one lemma takes one Hebrew unless a recorded sense split, and a lemma does not take a Hebrew that the corpus gives
another lemma. Counts below are lines.

### A. Changes

| # | Source word | Hebrew (binding) | Survey before | Lines changed | Reason |
|---|---|---|---|---|---|
| 1 | nḏ "guard, protect" | `שָׁמַר` | PT600 `ישמור` 1, BD (NU1, NU2, NU6, NU9) `שמר` 6; UN `הגן` 5 | UN4 223.7 `אשר שומרת עליו`, 224.4 = 224.18 `שמור על ילדיך! הישמר לך`, UN6 250.6 `השמור`, 254.46 `שמר אונאס על עצמו` (5; notes, UN `project.md` decision line) | the earliest and the majority; `הגן` is ḫwi̯'s (UN1–UN2 `הגן – פן …`, AM, PT600, BD). nḏ / zꜣu̯ were a kept pair "never in one line" (renderings §10.12.3); 224.4 now has both – `שמור על` / `הישמר`: the binyan keeps them apart, as the Egyptian pairs two guard verbs (recorded) |
| 2 | ꜥb.w tla36300 "impurity, filth; wrong" | `טֻמְאָה` | UN4 `טומאה` 2 (222.25, 222.32); NU3 `עבֵרה` 1 | NU3 105.4 `הטומאה הרעה ההיא שעשיתי` (1; note; BD `project.md` row) | one lemma (TLA: "Schmutz", "Sündhaftes"); the majority, and the lemma's base sense; `עבירה` is jw's (NU1 17.21 `עבירותיי`) – the move frees it. ꜥb.w tla36740 "purity" stays `זוך` |
| 3 | bd "natron (pellets)" | `בֹּרִית` | HC 76, UN1 (≈ 8) `בורית`; NU3 105.3 `נתר` | NU3 105.3 `בורית וקטורת` (1; its note, NU4 79.7's note); the `נתר` gate in `egypt_tools.py` widened from the UN keys to the whole corpus | the earliest (HC, Round 4) and the majority; `נֶתֶר` is the loanword of nṯr.j (gated), BD's ḥzmn is `נתרון` – Jer 2:22's pair stays with its two Egyptian words |
| 4 | mds "be violent; slaughter" | the root ערץ (`עָרִיץ`, `עוֹרֵץ`) | BD `עריץ`/`עורץ` 4 (NU1 17.86, NU9 144.18–19 – the verb too, NU10 149.77), UN6 254.18 `העריצים`; UN7 `קוטל` 1 | UN7 273-274.28 `חוֹנְסוּ, העורץ את האדונים` (1; note) | the majority and the earliest; BD 144.19 already keeps one root for the verb ("Der sie niedermetzelt" `עורץ־אותם`); `קטל` is Merikare's sqr (MR) |
| 5 | sḏr "lie, spend the night" | `שָׁכַב` | tales, BD, UN `שכב` ≈ 30 (renderings §11.3, gated); UN9 `לנו` 1 | UN9 302.10 `אשר שוכבים כשהם עושים את הבכי הזה של האל` (1; note) | §11.3; the night vigil of the mourners is BD 18.15's `שכיבת אִיסִיס`. **Kept:** the sense "sleep" (opposite of rs "wake") `ישן` – AM 5.13, 9.17, 16.9, 19.11 (Round 4) and UN3 210.2 `הָקִיצוּ, ישנים!` |
| 6 | ḥꜣi̯ tla100710 "be naked" | `עֵירֹם` | UN9 308.5 `עירומות` 1; NU8 96.9 `חשוף` 1 | NU8 96.9 `עירום היום לפניי` (1; notes) | `חשף` is kfi̯'s (tla164200: UN9 302.8, NU3 63A.4, NU7 115.8, AM 7.3); the same idiom as the note's Job 26:6 `עָרוֹם שְׁאוֹל נֶגְדּוֹ` (printed from the Tanakh) |
| 7 | sṯj tla148990 "scent" | `רֵיחַ` | UN1, UN5, UN7 `ריח` 5, NU4 86.2 1; MK = MR E134 `בושם` 2 | MK E134 and MR E134 `*[מן] הריח*?` (2; parse, notes) | the majority; `בושם` is bdd's (UN5 200.4 `ריחך … בושמך`). **The fifth-day dossier's copy** (`מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md` E134) is not this batch's: MK E134 carries `[סטייה מן התיק: …]` and `verify` lists it as a pending dossier revision (see "For the lead") |
| 8 | Sbk (Sobek); Mꜣfd.t (Mafdet) | `סוֹבֶּךְ`; `מַאפְדֶת` | BD (BD 92, NU1 17.48, NU8 153A.6) `סוֹבֶּךְ` 3, UN `סֻבֶּךְ` 4; NU2 34.3, NU10 149.51 `מַאפְדֶת` 2, UN `מָאפְדֶת` 4 | Sobek: UN8 301.30, UN9 308.8, 317.2, 317.9; Mafdet: UN5 230.3, UN8 295.1, 297.2, 298.3 (8 lines) and every note in UN2, UN5, UN7, UN8, UN9; renderings §13.2's row; the UN `project.md` name lists | one form per name in the corpus: the earliest (BD) |
| 9 | Ndj / Ndw tla90700 (a sun-god epithet) | `נֶדִי` | UN4 222.5, 222.33 `נֶדִי` 2 (+ Ndj.t `נֶדִית`); NU5 64L.24 `נֶדוּ` 1 | NU5 64L.24 `לפני נֶדִי` (1; parse; BD `project.md` names table) | one TLA lemma; the majority, the TLA's form Ndj, and one stem with the place Ndj.t |
| 10 | ḏwj.w "jar"; hꜣṯs "(crystal) jar" | `קַנְקַן`; `לָגִין` | ḏwj.w: WE 1,15, 4,15, 6,20, NU10 149.2, 150.D15 `קנקן` 5, UN1 110.3 `כד` 1; hꜣṯs: UN1 `קנקן` 3 | UN1 110.3 `כד, אחד` → `קנקן, אחד`; UN1 43.4, 47.4, 48.3 `קנקן־גביש` → `לָגִין־גביש` / `לגין־גביש` (4; parse; the rubric example in the UN1 intro, `project.md`, renderings §13.6.8) | ḏwj.w: the earliest and the majority; `כד` is ds's (WE, BD 114, NU4, NU9, UN2 151.3 – kept). hꜣṯs had to leave `קנקן` (ḏwj.w's): `לָגִין` (the wine jar of the Mishnah) is free in every corpus of the folder (`צפחת` is Sumerian and Ugaritic lines' word, `פך` an oil flask) |
| 11 | wpi̯ "open, cleave; part, judge" | by the corpus's recorded sense split (renderings §12.6.2.3, NU2 `project.md`): `פִּלַּח` (cleave, open a way / the earth); `פָּסַק בֵּין` (judge between); `פָּתַח` only in wpi̯ rʾ "open the mouth" | BD `פילח` ≈ 12, wpi̯ rʾ `פתח` (SS 67/81, NU9 137A.37, 151; UN ×10), `פסק בין` (AM 8.12, MT 7, 12a, TB 6,5, NU8 4.1, NU9 126.3); UN wpi̯ `פתח` also for "open a way / the earth" (3) and `הפולח (בין)` (1); NU2 23.4 wpi̯ rʾ `פילח … פי` (1) | UN1 81.7 `תפלחי את דרכו`, UN4 222.30 `תפלח את דרכך`, UN6 254.19 `פילח הוא את הארץ`, UN6 252.6 `הפוסק (בין) שני האֵלִים`, NU2 23.4 `אשר פָּתַח בה את פי הָאֵלִים` (vocalized beside the god `פְּתָח`: the trap) (5; parses, notes) | the run's in-project pair wn / wpi̯ `פתח`: wpi̯ had three Hebrews in Unas and collided with wn `פתח` where the corpus keeps them apart (BD 1 sets them in parallel); the BD's wpi̯ wꜣ.t `פילח את האורחות` (NU2 1.18, 42.27, NU4 117.3), NU8 4.1 `הפוסק בין שני העמיתים` (Horus and Seth, as UN6 252.6) |
| 12 | spr "arrive, reach" | `הִגִּיעַ` | `הגיע` in every project (MT, TB, WE, BD, SI, SS, MR, UN3 218.3) ≈ 18; UN7 `ניגש` 1 | UN7 268.17 `הגיע אליו הכָּא שלו` (1; parse) | one Hebrew per lemma; `נגש` is the tales' mz |
| 13 | n sḏm=f (run 1's question 2) and ḫmi̯ "harm, destroy" | the corpus's practice: n sḏm=f past by default; present for rḫ, sḫm, wnn; **future in a promise**, above all in the passive; ḫmi̯ `הרס` | see "The negated sḏm=f" below; ḫmi̯ tla117020: BD `הרס` 10 (NU4, NU7, NU8 44.4, NU9), UN6 `נפגע` / `פוגע` 1 | UN6 258-259.10 `לא ייהרס הוא; אין הורס אותו שם;`, 258-259.11 `לא יֵשֵׁב הוא בוועד האל.` (2; parse, the TLA notes, UN `project.md`) | aligns Unas with the corpus (below) and ḫmi̯ with the BD |

**Total: 33 `>` lines** (UN1 5, UN4 4, UN5 1, UN6 6, UN7 2, UN8 4, UN9 4, NU2 1, NU3 2, NU5 1, NU8 1, MK 1, MR 1), plus notes, the
UN and BD `project.md` decision lines (annotated, not rewritten), renderings §13.2 and the §13.6 lists (annotated), the
UN1 intro's rubric example, the corpus `parallels-index.md` and the per-project parallels tables (regenerated by
`build_parallels_index.py`), and the generated `translation*.rtl.md` (rebuilt).

### The negated sḏm=f (run 1's settled question 2)
Surveyed in every project's פירוק bullets (≈ 80 segments of n + sḏm=f, not sḏm.n=f / sḏm.t=f / nn):
- **Past** is the corpus's default: BD 125's denials (`לא עשיתי`, `לא דיכאתי` …), NU3–NU9 (`לא נצליתי`, `לא אבד שמי`,
  `לא ידעתי` …), the tales (SI `לא אמרתי`, `לא סברתי`), and Unas (UN3 215.17–18, UN4 219.2–3 and the litany, UN5 230.7–8 …).
- **Present** for verbs of knowing, being and ability: rḫ (WE 9,3 `אינני יודע`, SI B42, SS 148, NU7 112.3), wnn (NU7 130.10),
  sḫm (NU7 154.15 `אין הוא שולט בי`), gr (NU10 149.55).
- **Future in a promise**, above all in the passive: the corpus's own earlier Pyramid Text PT571 (`לא ייענש פפי זה`, `לא
  ימות פפי זה בגלל מלך`), the BD passives NU7 130.8 `לא יהדפו`, 130.18, 89.8, 154.21, 115.4, 189.9, NU8 44.4 `לא אֵהָרֵס`
  (the same verb ḫmi̯), NU6 179.7; and Unas itself already: UN3 211.1, 215.16, 215.35, UN7 273-274.67 (and the reasoned
  exceptions UN5 242.1, 246.6, UN6 258-259.2, 260.25, UN7 269.18, 273-274.58 listed in UN `project.md`).
- So "past throughout" was never the whole of Unas's practice, and the Pyramid Texts do not differ from the corpus: in
  Old Egyptian n sḏm=f also negates the prospective (Middle Egyptian moved that to nn sḏm=f), which is why the corpus's
  Middle Egyptian texts show future mostly in the passive and in nn. **Aligned:** UN6 258-259.10–11, the one promise the
  run left in the past against the TLA's future (the lead's open question) – now future, with `יֵשֵׁב` vocalized
  (unvocalized `ישב` reads as past). The PT 219 litany `לא מת הוא – לא מת אונאס זה` stays (unvocalized `מת` reads as
  "is not dead", which is the litany's sense).

### B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| ꜥ tla34360 | `ספל` (the offering lists' measure, UN1–UN2 ≈ 25) / `זרוע`, `יד` (arm, hand: the whole corpus) | one TLA id covers two words (Wb's ꜥ "arm" and ꜥ "bowl, portion"); the TLA glosses the measure "Portion"; a measure is not an arm – a split by real sense |
| jp | `פָּקַד` (UN3 215.18, 215.20, 217.23, 218.2: "assess the hearts") / `מָנָה` (count, assign: UN2, UN4, BD ≈ 20) | the corpus already gives jp's judgment sense the root פקד – renderings §12.3 binds jp `מִפְקָד` (BD 6, 68; NU1 18.19 `במפקד האחים`); UN3's verb is that judgment (Jer 17:10 in the apparatus), recorded by UN4 as a sense split |
| mz | `קָרַב` / `קֵרַב` (PT600, UN2 138.1, UN4 223.8) / `נִגַּשׁ` / `הִגִּישׁ` (WE 10,3, 10,12, 10,20, 10,26, SI B269, SS 175) | split by text, with a collision either way: in the offering ritual `הגשה` is ḥnk's rubric (≈ 25 lines, the very spells, e.g. 138.1–138.2), and moving the tales to `הקריב` would rewrite WE's fixed three-births strings and lend the sacrificial verb to the necklaces handed to the king. The Pyramid Texts (Round 4's PT600, the earliest) keep `קרב` |
| ds | `כד` (WE, BD 114, NU4 122-1.5, NU9 126.11, UN2 151.3) | already one Hebrew; ds "knife" `מאכלת` and ds "flint" `צור` are other lemmas |
| zḫz tla142980 | `עקר` (UN2 163.1, 164.1: Seth tears out the Eye) / NU5 64L.14 `ייסוטו` (bolts drawn back) | one TLA id, two senses ("ausreißen (Horusauge)" / "aufschieben (Riegel)"), recorded by the UN2 note; `עקר` is also AM 7.13's tfi̯ "remove (the boundary)" – a synonym pair, never in one line (principle 1). zḫz tla142990 "hurry" (SI B227 `מיהרו`) is another lemma |
| mꜣj / rw "lion" | both `אריה` | synonyms, both `אריה` in every project (tales mꜣj, BD rw, UN both); never in one line |
| the in-project pairs | zj / šmj `הלך`; bḏ / pꜣḏ `כדור`; ḥnw.t "horn" / ꜥb `קרן`; spr "rib" / šbtjw `צלע`; jni̯ tla26870 "reach the boundary" / pḥ / spr `הגיע` | synonyms in a non-Semitic corpus (§6.7 principle 1): zj is Old Egyptian only, bḏ and ḥnw.t "horn" occur once each, spr "rib" / šbtjw are UN2 / UN4's only rib words; none of them is a lemma with two Hebrews, and no line renders two of them alike. ḥnw.t "bowl" `קערה` (UN1) is another lemma. (jni̯ "bring" tla26860 stays `הביא`) |

### Verification
- `python3 -I -B חכמה-ובריאה-במצרים/egypt_tools.py build` (all keys): rebuilt every `translation-<KEY>.rtl.md` and each
  project's `translation.rtl.md`.
- `python3 -I -B חכמה-ובריאה-במצרים/build_parallels_index.py`: the per-project parallels tables and `parallels-index.md`
  (2,006 rows) regenerated.
- `python3 -I -B חכמה-ובריאה-במצרים/egypt_tools.py verify --strict` (every key): exit 0, **0 problems**; the one repeated-line
  difference is the pre-existing NU5 132.1 / 132-2.1 (Round 6, a `[…]` in one copy); `MK: 7 line(s) shared with the
  dossier's MK checked; pending dossier revisions: E134`; `MR: 9 line(s) shared with project 2's MK checked`.
  (The first run showed two Allen-line gate errors, UN7 271.6 and UN8 284.1: the local, git-ignored
  `sources/Allen-2013-…/allen-transcription.json` was missing on this VM, so the `{אלן}` lines had no licence text;
  `egypt_tools.py allen-convert` regenerated it from the PDF – 842 spells – and the errors went. Not a content problem.)
- `python3 -I -B חכמה-ובריאה-במצרים/egypt_tools.py selftest`: 45 lines, 0 failures.
- `python3 -I tools/check_bible_quotes.py` over every `.md` of `חכמה-ובריאה-במצרים/`: 0 problems.
- Gate changes in `egypt_tools.py`: (1) the `נתר` gate (נֶתֶר only for nṯr.j) now covers the whole corpus, not only the UN
  keys; (2) `check_excerpt` takes the WC rule for the dossier's MK: a line marked `[סטייה מן התיק: <reason>]` is listed
  as a pending dossier revision, not an error (MR's identity with project 2's MK is still exact).
- No git command was run.

### For the lead
1. **The fifth-day dossier's MK E134** (`מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md`, its `project.md` table
   row and `מיתוסים-אוגריתיים/parallels-index.md` row 389): `*[מן] הבושם*?` → `*[מן] הריח*?` (row 7), so that the excerpt
   equals project 2's MK again; then the `[סטייה מן התיק: …]` tag in `2-בריאה-במצרים/annotated-MK.rtl.md` E134's note can
   go. Not in any batch's corpus.
2. Seen in passing, not in the plan: BD 125, 30's god name `j ḫmi̯.y` "Destroyer" is `מחריב` while ḫmi̯ is `הרס`
   elsewhere (a name in BD 125's fixed denial list – left); UN2's "ꜥḥ, sḫt both `צד`" (renderings §13.6.9.3) was not in
   the batch's list and is not reviewed here; AM's sḏr `ישן` (row 5) is kept by sense and could be revisited if the
   lead wants sḏr in one Hebrew.
3. The plan's "ds `כד` / WE `קנקן`" was in fact ḏwj.w (row 10): ds is `כד` everywhere.

---

## Batch B: Round 8 harmonization – batch B: Sumerian and Akkadian (2026-11-15, by the lead's delegation)

Items: `finalization-plan.md` §2, "Batch B" (from `run-2.md`, the school canon `קנון-בית-הטבלה/`, and `run-4.md`,
projects 8–11 of `אגדות-מלכים/`). Principles as in `harmonization--2026-11-13.md` and guidelines §6.7: one Hebrew per
source word across the corpora; the majority / earliest corpus wins unless the cognate rule, a fixed formula or a
recorded reason decides; the cross-language principles of 2026-10-30 (a cognate reservation protects a Semitic text's
own cognate; inside one language the cognate keeps the Hebrew and the other word moves), rule (2) of 2026-11-02 and the
rule of 2026-11-09 (a cognate's Hebrew is not lent to a non-cognate equivalent). Surveyed both ways with
`tools/harmonize_survey.py` (`parse` / `src` on the lemma family, `heb` with `--src` on each candidate Hebrew), and
entry by entry with two scratch helpers (`scratchpad/batch-B/show.py`, `src.py`: the entries whose `>` line /
transliteration match). Every corpus whose renderings.md was touched has a "2026-11-15 harmonization (after Round 8)"
line.

### A. Changes

| # | Source word | Hebrew (binding) | Survey before | Lines changed | Reason |
|---|---|---|---|---|---|
| 1 | Sum. *maškim* | `נְצִיב` | canon LB 44 `נציב`; Gudea B ix 23, LI epil. 499′ `הממונה` | `בניין-המקדש/1-גליליות-גודאה/annotated-B1` B.ix.23 `הנציב המשוטט של נינגירסו` (+ the section heading B.ix.15–23, notes, renderings row, parallels row); `חוקים-ובריתות/5-חוקי-ליפית-אישתר/annotated-3--epilogue` 499′ `הנציב שלה, אשר לא ישונה, יהיה` (+ notes, renderings row, project/parallels rows) – 2 lines | `ממונה` is *nu-banda₃*'s in six Sumerian projects (creation 4 and 6, Gilgameš AG, kings 5, proverbs, canon NG 88): one Hebrew per source word, the other word moves. `נציב` is otherwise only Akkadian (*šakkanakkum* LE 157, *šaknu* ZL iii 26 – see D) |
| 2 | Sum. *sumun₂* (proverbs c1-3 D53) | `פָּרַת־בָּר` | D53 `ראמה`; *u₃-sumun₂* elsewhere `פרת־הבר` | `קולות-היום-יום/2-משלים-שומריים/annotated-c1-3` D53 `למעלה – פרת־בר; למטה – דג.` (+ note) – 1 line | the rule of 2026-11-09: `רְאֵמָה` is Akk. *rīmtu*'s cognate (Gilgameš, love songs) and is not lent to its Sumerian equivalent |
| 3 | Sum. *gaz* in the slaughter formula *gud gaz* | `הָרַג` (`הורג שוורים`) | Hoe & Plough 25, Enki's Journey 93, Šulgi A 52 `הורג`; CA 237 `מכה־השוורים … יכה`; Ziusudra D11 `שוחט שור` | `קינות-על-ערים/2-קללת-אכד/annotated-2` 237 `הורג־השוורים – את אשתו יהרוג!`; `סיפורי-המבול-המסופוטמיים/3-…זיוסודרה/annotated` D11 (211) `המלך הורג שור, צאן מרבה.` (+ notes, the CA renderings row, the CA project/parallels rows, the flood project table and parallels row) – 2 lines | the canon's binding *gaz* `הרג` (renderings §5, line 319) and the fixed formula *gud gaz udu šar₂*; `טבח` stays *šum*'s (CA 238) |
| 4 | Sum. *in-di₃* "path" | `שְׁבִיל` | Lugalbanda (kings 5) `שביליה`, `שבילים`; canon EB 51, 110 `דרכי` | `קנון-בית-הטבלה/1-העשירייה/annotated-EB` 51 `ההר – את שביליי *יראה*!`, 110 (= 51) – 2 lines | `דרך` is *kaskal*'s (the canon's binding, renderings §5); the earlier corpus's word for *in-di₃* |
| 5 | Sum. *nam-en* | `אַדְנוּת` | ≈ 30 lines in 7 projects `אדנות` (incl. LSU's "gipar of the *nam-en*", an en-priest context); IB 4, 107 `כהונת־האֵן` | `קנון-בית-הטבלה/1-העשירייה/annotated-IB` 4 `האוהבת את הכתר הנאמן, היאה לאדנות,`, 107 `את הכתר הנאמן של האדנות – (ממני) נטל;` (+ notes: the en-priestess explained) – 2 lines | majority and earliest; the corpora render *nam-en* `אדנות` even where the office is priestly (LSU 152…), and "the crown of the *nam-en*" is `כתר האדנות` in Enmerkar 542 |
| 6 | Sum. *la-la* | `עֹנֶג` | S&W 171, IB 88, 147, 148 `עתרת`, SA 73 `התענוג`; `עתרת` = Akk. *nuḫšu* (LH prol. 55, 106, 119, 213, 224; EE VII 60, 69; Eridu rev. 20′); Akk. *lalû* `עונג` (Gilgameš I 59, 193, VII 106, OB III 234; NE d+54, 56; prophecy 03 iii 37; Ludlul V 107) | `סיפורי-הבריאה-המסופוטמיים/7-הקיץ-והחורף/annotated` 171 `בשד[ה] עונג אני מעמיד`; `קנון-בית-הטבלה/1-העשירייה/annotated-IB` 88 `שעונגו בַּל שָׁב`, 147 `עונג – הרחיק והרחיק`, 148 `עונג טעונה`; `annotated-SA` 73 `בלבי מלא העונג` (+ notes, S&W renderings row) – 5 lines | `עתרת` belongs to *nuḫšu* (the earliest, LH); a Sumerian word takes its Akkadian equivalent's Hebrew (*la-la* = *lalû*, `עונג`, Gilgameš); ETCSL's "attractions / delight" fit |
| 7 | Akk. *perʾu* | `חֹטֶר` | Gilgameš I 133, V 94, 170 `חוטר` (earliest); CL SB.25, ID.94, PM 38 `צאצא`; *bukru* `צאצא` (EE 8, AN 3+, kings 10 2) | `אגדות-מלכים/4-אגדת-כותה/annotated-SB` SB.25 `אִט חוטריו, אִט חוטרי חוטריו`; `11-פסל-אידרימי/annotated-ID` ID.94 `את חוטרו תלקט` (+ the note of 93); `ספרות-החכמה-…/7-העני-מניפור/annotated-PM` 38 `יפריחו את חוטריו` (+ notes; CL and ID1 parallels rows) – 3 lines | settles run 4's split (1): *bukru* keeps `צֶאֱצָא` (Enūma eliš, the corpus's precedent, the majority), *perʾu* takes Gilgameš's `חֹטֶר` (Isa 11:1 noted in CL SB.25); `זֶרַע` stays *zēru*'s |
| 8 | Akk. *nakāru* D / Dt "change, remove" | `הֵמִיר` (change), `הֵסִיר` (remove, the monument-curse formula) | `המיר`: Gilgameš I 220, 238, VII 63; EE II 161, III 63, 121 `יוּמַר`; KAR 4 `יומר`; `הסיר`: LH epil. 3309′, 3352′, 3374′, 3398′, EST; `שינה`: ID.96, Erra I 148 (= flood §7 148), Maqlû I 120, prophecy S02 iii 9′ | `אגדות-מלכים/11-פסל-אידרימי/annotated-ID` ID.96 `מי אשר יסיר אותו וימחק אותו?`; `העולם-התחתון/5-ארה-ואישום/annotated` 148 and `סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated` 148 `… הֵמַרְתִּי, ולא הראיתי לאיש.` (+ the fixed-line table, renderings §12.6); `כשפים-ולחשים/1-מקלו/annotated-I` 120 `אשר לא תוּמַר`; `נבואה-ומלכות/1-נבואות-אשוריות/annotated-02` iii.9′ `מתי – תְּמוּרַת הארץ תהיה?` (+ notes, notes-S02 rows; the kings renderings §0.3 revised) – 5 lines | settles run 4's split (2): inside Akkadian the cognate *šanû* keeps `שִׁנָּה` (EST *šunnû*, AN, RE) and *nakāru* moves – to the Hebrew the earliest corpora already gave it (Gilgameš, Enūma eliš; LH for "remove"). Sum. *kur₂* keeps `שִׁנָּה` (B) |
| 9 | Dagan (the god) | `דָּגָן` | Ugarit (*dgn*, `בֶּן דָּגָן`, many), canon (Dagan, Iddin-Dagan, Išme-Dagan), AN (several) `דָּגָן`; LH prol. 235 `דָּגַן` | `חוקים-ובריתות/2-חוקי-חמורבי/annotated-01--prologue` 235 `(ב)אות דָּגָן` (+ note; the LH and LI renderings rows) – 1 line | the majority and the name's own etymology (Ugarit: *dgn* "grain" is the same word [cognate]); the LH vowel distinction from Ašnan `דָּגָן` (personified Grain) is a note now, as in the canon, where both stand side by side. The Ugaritic corpus needed no change |
| 10 | Akk. *zību* | `עַיִט` | Gilgameš V 124, EST 426, 520, Maqlû VIII B+4 `עיט` (all beside *erû* `נשר`); GU.17 `זאב` (with *barbaru* `זאב` in the same line) | `אגדות-מלכים/10-אפוסים-מלכותיים-בבליים-קדומים/annotated-GU` GU.17 `… [כ]זאב – אכול! כ[ע]יט – (אכול)!` (+ note) – 1 line | settles run 4's split (4): the majority and earliest, and SEAL's "vulture"; the etymological kinship with `זְאֵב` (*ḏiʾb*) is a false friend in sense (the Akkadian word is the carrion bird); `זְאֵב` is *barbaru*'s (CL, Gilgameš, Erra), so the line's two predators stay two words |
| 11 | Akk. *dalālu* | `פֵּאֵר` | Ludlul I 1 `אֲפָאֵר`, III 57, V 82, 119; Theodicy 4; Šamaš Hymn 166; Maqlû II 17, 75 `פאר`; EE VII 24 `יפארו`; AN III.b+134 `הללתיך` | `אגדות-מלכים/8-אפוס-אנזו/annotated-III` III.b+134 `… […] פֵּאַרְתִּיךָ.` (+ note) – 1 line | run 4's item (5): one Hebrew per source word (the wisdom corpus, earliest and majority); `הלל` is the Akkadian *alālu*'s [cognate] (EE II 145, 147, V 81, VII 46; PV) – and the Psalms vocabulary the canon reserves stays out of the Anzû hymn |
| 12 | Akk. *ernittu* "victory" | `נִצָּחוֹן` | EE I 74, IV 125 `נצחון` (earliest); love songs 16 o.ii 25, 29 `ניצחון`; Akkade legends EN.12, 13, FL i7′ `נצחון`; LH epil. 3265′, 3578′ `תשועה` (avoiding the root of *dāru* `נצח`); Gilgameš OB III *ernittu* "wish" `משאלה` (another sense) | `חוקים-ובריתות/2-חוקי-חמורבי/annotated-11--epilogue-1` 3265′ `ואת נצחון מרדוך`; `annotated-12--epilogue-2` 3578′ `את נצחוני,` (+ notes, project parallels row) – 2 lines | found by the survey of run 4's item (5): `תְּשׁוּעָה` was shared by *ernittu* (LH) and *lītu* (Gilgameš OB, AN, GU). *ernittu* follows Enūma eliš and the majority; `נִצָּחוֹן` and `נֶצַח` are two words (EE already has both); *lītu* keeps `תְּשׁוּעָה` (B). (An interim step moved the Akkade legends to `תשועה`; it was reverted when EE I 74 surfaced – those three lines are unchanged) |
| 13 | Run 2's gate workarounds (school canon) | the plain words | EB 174 `תוף` (*ub*), NG 113–114 `מיטבו` (*niĝ₂ saĝ*), EB 46, 105 `אשר בו`, KH 46 `בּוּרִים` (*bur₃*), KH 112 `הכוהן־לָל` | `קנון-בית-הטבלה/1-העשירייה/annotated-EB` 174 `לגָּלָה – תֹּף־אוּבּ ולִילִיס נתתי;` (= CA 201), 46 and 105 `אל עושה־הרע שֶׁבּוֹ – גרזן אעמידה;`; `annotated-NG` 113, 114 `את מבחרו – יביא לי!`; `annotated-KH` 46 `בית – למעלה עשרה בּוּר, למטה חמישה בּוּר;` (+ notes) – 6 lines. **`canon_tools.py`**: the `בחר` gate skips the noun `מבחר` (a lookahead, as the `מקדש` fix); the corpus-wide `אוב` gate is split – `אוב` / `אובות` licensed by *ub* / *ub₃* / `{kuš}ub`, `ידעוני` … stay reserved; `בור` licensed by *bur₃*; `gate_view()` lets the vocalized `שֶׁבּוֹ` "that is in it" through the `שוב` gate (unvocalized `שבו` still fails). Tested: plain `שבו`, `בחרו`, `אוב`, `בור`, `ידעוני` still fail; the restored forms pass | the gate misread a plain word (a prefix class: מ + `בחר`; homographs: `אוּבּ`, `בּוּר`, `שֶׁבּוֹ`); licensed in the corpus tool, not bent in the line. KH 112 `הכוהן־לָל` **kept**: the gate is right about unvocalized `הלל`, and `כּוֹהֵן־` + the title is the cross-corpus form of priest titles (Gilgameš `כּוֹהֲנֵי־אֵן`, `־לַגָּר`, `־לוּמַחּוּ`) |

**Total: 33 `>` lines in 23 annotated files (12 corpora), plus `canon_tools.py`.**

### B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| Sum. *u₃-sumun₂* / *immal₂* | both `פרת־הבר` (kings 1, 5, 6, 7; proverbs; canon IB, NI) | two Sumerian near-synonyms for the wild cow (ETCSL "wild cow" for both); Hebrew has no second word: `רְאֵמָה` is Akk. *rīmtu*'s cognate (rule of 2026-11-09), `פָּרָה` is the plain cow (Hoe 50, Gudea B iv 8 *immal* "cow" keep `פרה` by sense). The canon coordinator's recorded split, confirmed |
| Sum. *sa-par₃/₄* / Akk. *kamāru* | both `מִכְמֹרֶת` (Sum.: Enmerkar 244, Lugalbanda 499, Hoe 77, 95, EWO 279, Dumuzid 181A, canon EL 26, NG 6, 25, 38 – 10 lines; Akk.: EE IV 112, Šamaš Hymn 87) | a cross-language overlap, not a loan of the cognate to an equivalent: *sa-par*'s Akkadian equivalent is *saparru* (`רשת`), not *kamāru*, so the rule of 2026-11-09 does not apply; principle (1) of 2026-10-30 (a cognate reservation protects the Semitic text's own cognate, not a non-Semitic text's common word); the Sumerian rendering is the earliest (creation corpus) and consistent in seven projects |
| `דרך`: *kaskal* / *a-ra₂* / *ĝiri₃* | *kaskal* `דרך` (binding); *a-ra₂* "way, conduct" `דרך` (Gilgameš DB, Hoe & Plough 104, letters 13, canon LA 39, NG 4); the *ĝiri₃* idioms (*ĝiri₃ dab₅* "take the road": LSU's refrain `דרך נכריה תפס` ×12, NG 39, 44; *ĝiri₃ ĝal₂*) | by sense: *a-ra₂* is "the way of" a god / a thing (Akk. *alaktu*, `דרך` in Enūma eliš too), *kaskal* the road; *ĝiri₃* itself is `רגל` – `דרך` renders the idiom, not the noun. Only *in-di₃* moved (row 4) |
| Sum. *gaz* outside the slaughter formula | `הכה` (CA 3, LU 224), `רִצֵּץ` (of heads: LU 184, LSU 94, 406), `ניפץ` (Bird and Fish) | the lament corpus's recorded sense split (renderings §4: "kill, smash"); row 3 aligned only the formula *gud gaz* |
| Sum. *kur₂* | `שִׁנָּה` / `שׁוֹנֶה` (≈ 50 lines: LSU, LU, CA, proverbs, canon, Gudea, LI, UN, Šuruppak) | after row 8 *kur₂* no longer meets *nakāru*'s Hebrew (the kings §0.3 equation, revised). Moving it would cost ≈ 50 lines in eight corpora; principle (1) of 2026-10-30 lets a non-Semitic line keep the natural Hebrew. **For the lead to confirm** (the rule of 2026-11-09 could be read to forbid it if *kur₂* is taken as *šanû*'s equivalent) |
| Akk. *lītu* | `תְּשׁוּעָה` (Gilgameš OB Ishchali 11′, AN II.107, 129, GU.39) | the Gilgameš precedent (`ניצחון` refused there for the root of *dārû*) and the majority; biblical `תְּשׁוּעָה` is victory in battle (1 Sam 19:5, 2 Sam 23:10, both already in the apparatus). The canon's Psalms reservation (`ישועה`, `הושיע`) binds that corpus's hymns, not the Akkadian epics; after row 12 `תשועה` is *lītu*'s alone |
| Akk. *âru* / *ṭeḫû* (AN's `הר אין־גישה` beside `ניגש`) | both `נִגַּשׁ`: *âru* in EE VII 45, NE b+41, c+56, e+30, Erra 26, PM 129 (`אין־גישה`), AN (4); *ṭeḫû* in Gilgameš (≈ 15), Maqlû (13), Ludlul (4), CW, Akkade legends, AN (6) | two near-synonyms "go to, approach" that the corpora have rendered alike since Round 1; separating them needs a corpus-wide Hebrew for *âru* (≈ 20 lines in six corpora) and none of the candidates is free (`קרב` is *qerēbu*'s, `מבוא` *nērebu*'s, `הלך`, `עלה` are other verbs'). **Left for the lead** |
| canon KH 112 *lal₃* | `הכוהן־לָל` | see row 13 |

### C. Verification

- Builds: `canon_tools.py build` (both projects); `temple_tools.py build GU`; `lament_tools.py build CA`; `kol_tools.py build PROV`;
  `sumerian_tools.py build 7`; `kings_tools.py build CL|AN|AK|RE|ID` (AK twice, after the revert of row 12's interim step);
  `wisdom_tools.py build`; `netherworld_tools.py build ER` (first run: the fixed line 148 differed from renderings §12.6 –
  the table row updated, then OK); `maqlu_tools.py build`; `prophecy_tools.py build PROPH`; `חוקים-ובריתות/laws_build_translation.py LI`;
  `2-חוקי-חמורבי/build_translation.py`. The flood projects 3 (Ziusudra) and 6 (the references) have **no build tool**: their
  `translation.rtl.md` lines (D11, 148) were changed in place with the annotated lines.
- `build_parallels_index.py` re-run in אגדות-מלכים (838 rows), חוקים-ובריתות (3090), בניין-המקדש (561), קינות-על-ערים (475),
  כשפים-ולחשים (567), נבואה-ומלכות (786), קנון-בית-הטבלה (307 table lines), קולות-היום-יום (527), ספרות-החכמה (1770),
  העולם-התחתון (810); the flood corpus's index row (D 10–11) edited by hand (no generator).
- Verifiers, all `--strict`, all exit 0 (final run after every edit): `canon_tools.py verify all` (12 keys OK);
  `temple_tools.py verify GU`; `lament_tools.py verify CA`; `kol_tools.py verify PROV`; `sumerian_tools.py verify 7`;
  `kings_tools.py verify CL`, `AN`, `AK`, `RE`, `ID`; `wisdom_tools.py verify PM`; `netherworld_tools.py verify ER`;
  `maqlu_tools.py verify I` (1 repeated-line difference, I 144 / II 1, pre-existing); `prophecy_tools.py verify PROPH`;
  `laws_verify.py LI` (503 entries, 0 problems); `2-חוקי-חמורבי/verify.py` (3641 entries, 0 problems).
- Gate test of the new licences in `canon_tools.py` (a scratch call of `nw.check_reserved` + `gate_view`): unvocalized `שבו`,
  `בחרו`, `אוב` (without *ub*), `בור` (without *bur₃*), `ידעוני` fail; `שֶׁבּוֹ`, `מבחרו`, `תֹּף־אוּבּ`, `בּוּר` pass.
- `python3 -I tools/check_bible_quotes.py` on the 85 files of the touched set (annotated, translations, project, notes, renderings,
  parallels): first run 1 problem (a backticked `תְּמוּרָה` beside "איוב טו:לא" read as a quotation; reworded to quote
  `תְמוּרָתוֹ`), then **0 problems**. Isa 11:1 (CL SB.25's new note) was printed from `../../תנך-מנוקד/` before use.
- A final grep of the old strings over the 13 corpora: the remaining hits are decision logs and review histories
  (project.md / project--*.md narrative, renderings §5 coordinator lines), left as history, each superseded by the new
  renderings line.

### D. For the lead

1. **Sum. *kur₂* `שִׁנָּה`** (B): confirm the keep, or rule a move (≈ 50 lines, eight corpora).
2. **Akk. *âru* / *ṭeḫû*** both `נִגַּשׁ` (B): a corpus-wide ruling is needed if they are to be separated.
3. Collisions found by the survey, outside the listed items (not changed):
   - Gilgameš IV 13, 46, 91, 133, 174 *šēšû* `מִכְמֹרֶת` – inside Akkadian, the cognate *kamāru* keeps it (principle 3); *šēšû*
     should move (5 lines; the Gilgameš note chose it because `רֶשֶׁת` is *pūgu*'s).
   - Akk. *sapāru* "net" `רשת` (LH prol. 134, EE IV 112) against *šētu* `רשת` (wisdom renderings §11.8, Etana).
   - The Akkadian road words: *urḫu* (the cognate of `אֹרַח`) is mostly `דרך` (Gilgameš, Etana, Akkade legends, Theodicy),
     *ḫarrānu* mostly `אורח` (Gilgameš, Maqlû, netherworld; Sum. *ḫar-ra-an* `אורח` in the kings corpus and the canon),
     *alaktu* `דרך` (EE) – the cognate rule points the other way.
   - Akk. *lalû*: `עונג` (Gilgameš, NE, prophecy, Ludlul) / EE V 89, 122 `נועם`. Sum. *giri₁₇-zal* (Enki and Ninḫursaĝa 71)
     and *e-ne* (LSU 516) now share `עונג` with *la-la*; *giri₁₇-zal* is elsewhere `חדווה`.
   - Akk. *nâdu* "praise": `הלל` (prophecies 01–03, Atraḫasis I 297) / `שבח` (AN), beside *alālu* `הלל` [cognate] (EE).
   - `נציב`: Sum. *maškim* (row 1) and Akk. *šakkanakkum* (LE 157), *šaknu* (ZL iii 26): different words in two languages.
4. Ugaritic: Dagan was already `דָּגָן` in `מיתוסים-אוגריתיים/` – nothing to apply there.
5. Process: I ran one read-only `git diff --stat` by mistake while checking a build (no git write of any kind). The
   shared files (guidelines §6.7, STATUS, history, tools.md) are untouched; the guidelines line and a tools.md note for the
   new `canon_tools.py` licences (`gate_view`, the split `אוב` gate, `בור` by *bur₃*, `מבחר`) are the lead's.

---

## Batch C: Round 8 harmonization – batch C: Vedic and Hittite (2026-11-15; by the lead's delegation)

Items: `finalization-plan.md` §2, "Batch C" (from `run-3.md` – Rigveda Book 2 against Book 7 and the Kaṭha – and `run-5.md`
– the Hittite myths). Principle as in `harmonization--2026-11-13.md`: one Hebrew per source word; inside the Vedic corpus
the lemma's corpus majority wins (Book 7 is the corpus majority overall, but a lemma that Book 7 has once and Book 2 many
times follows its own majority), a different lemma or a different sense keeps its own Hebrew. The Vedic and Hittite
corpora write the lemma plain in the פירוק bullet, so the survey was by segment (`` `form` – lemma "gloss" … ("Hebrew") ``,
a scratch script over every `annotated*.md` of the corpus), both ways: the lemma family, then each candidate Hebrew for
collisions; `tools/harmonize_survey.py heb` for the other corpora. Avestan: no Vedic–Avestan cognate pair touched,
`האווסטה/` not edited.

### A. Changes

| # | Source word | Hebrew (binding) | Survey before | Lines changed | Reason |
|---|---|---|---|---|---|
| 1 | Skt √*vakṣ* "grow, wax" (Zurich also files *ukṣitá*, *ukṣámāṇa* under it) | `פָּרַח` | Book 2 `פרח` 7 (2.2.4a, 2.3.6a, 2.16.1c, 2.21.3b, 2.22.3b, 2.24.11b, 2.34.4a); Book 7 `שגשג` 1 (7.8.2d). `שגשג` is √*puṣ*'s: Book 7 4 (7.32.9c, 16b, 7.56.5b, 7.57.5d), Book 2 2 (2.12.4d, 2.27.15b). Reverse survey of `פרח`: AB 7.15.2d *puṣpín* `פורחות` – the same lemma is `מלבלב` in RV 2.13.7a | `הוודה-והאווסטה/7-ריגוודה-ספר-ז/annotated-RV7.8` 2d `שחור־החישוק, בצמחים פרח.` (+ פירוק, note); **and** *puṣpín* → `מְלַבְלֵב`: `4-העקדה/annotated-AB7` 15.2d `"מלבלבות שתי שוקי הנודד;` (+ פירוק, note) – 2 lines | Book 2's consistency pass split the two roots (√*puṣ* `שגשג`, √*vakṣ* `פרח`); 7.8.2d was the one line that still gave √*vakṣ* the √*puṣ* word. The collision check found AB's *puṣpín* on `פרח`: it takes Book 2's `מלבלב` (one Hebrew per lemma) |
| 2 | Skt √*jinv* (Zurich √*ji* 2) "quicken, promote" | `קִדֵּם` | Book 2 `קידם` 4 (2.23.19b, 2.24.16b, 2.40.3d, 6a); Book 7 `עורר` 1 (7.104.6d). `עורר` / `התעורר` is √*budh*'s (≈ 25 lines, both books; caus. 7.44.2a, 7.79.1b) | `7-ריגוודה-ספר-ז/annotated-RV7.104` 6d `את הנוסחים האלה קדמו, כשני אדוני־גברים!` (+ פירוק, note) – 1 line | the lemma's majority; `עורר` belongs to √*budh*. The compound *parjányajinvita* (7.103.1c) is kept – section B |
| 3 | Skt *yuvatí* "young woman" | `צְעִירָה` | Book 7 `צעירה` 2 (7.77.1a, 7.80.2c), `הנערה` 1 (7.1.6a); Book 2 `הצעירות` 2 (2.35.4a, 11c); RV 10.18.10c `עלמה` 1. `נערה` is *yóṣā*'s (10.10.4c, 7.69.4a, 7.75.5a, 7.77.1a); `עלמה` is *kanyā̀*'s (2.15.7a) | `7-ריגוודה-ספר-ז/annotated-RV7.1` 6a `אשר אליו באה הצעירה, אל רב־הכשרון,` (+ פירוק, note); `5-יאמה-והמתים/annotated-RV10.18` 10c `צעירה רכה כצמר למי שנתן את שכר־הכוהנים –` (+ פירוק) – 2 lines | the majority (the feminine of *yúvan* `צעיר`); each of the other two Hebrew words is another lemma's. RV 10.18.10c is the same sense (the earth "like a young woman"), as Book 7's own record (`project.md`, "RV 10.18.10c `עלמה` … older") already said |
| 4 | Skt √*śū* "swell, wax strong" | `תָּפַח` | Book 7 `תפח` 3 (7.20.2a, 7.32.6b, 7.93.2b), `התעצמו` 1 (7.74.6c); Book 2 `יתפח` 1 (2.25.1b). `התעצם`: no other lemma | `7-ריגוודה-ספר-ז/annotated-RV7.74` 6c `וגם בעצמתם שלהם תפחו הגברים,` (+ פירוק, note: the play *śávasā śūśuvuḥ* is not kept in Hebrew) – 1 line | the lemma's majority in both books. The 7.74 intro and section heading do not quote the word |
| 5 | Skt √*guh* "hide" | `הֶחְבִּיא` (`חָבוּי`) | the Rigveda `החביא` / `חבוי` 9 (RV 10.129.3a, 10.72.7c, 10.17.2a, 7.100.6c, 7.76.4c, 7.80.2b, 2.11.5a, 2.24.3d, 2.40.2b); `בהסתירה` 1 (7.104.17b). `נסתר` is *niṇyá*'s (7.33.9a, 7.56.4a, 7.61.5d) | `7-ריגוודה-ספר-ז/annotated-RV7.104` 17b `בהחביאה את גופה בשקר –` (+ פירוק) – 1 line | the majority; `הסתיר` / `נסתר` is *niṇyá*'s word. The Kaṭha's *gūḍha* / *guhya* kept – section B |
| 6 | Skt √*str̥* (with *ní*) "lay low, strew flat" | `שִׁטַּח` | Book 7 `פיזר` 1 (7.18.11b); Book 2 `שיטח` 1 (2.11.20b). `פיזר` is √*vap*'s (7.56.3a, 2.14.6d, 7b, 2.15.9a, 2.33.11d) and √*kr̥̄*'s (1.32.13b); √*str̥̄* "spread" is `הציע` (7.17.1b, 7.43.2c, 2.3.4b, 2.11.16c). `שיטח`: no other lemma | `7-ריגוודה-ספר-ז/annotated-RV7.18` 11b `עמים של שני הוַאיקַרְנָה – שיטח המלך ארצה;` (+ פירוק, note) – 1 line | a tie of one line each: decided by the collision – Book 7's `פיזר` is another root's word in both books |
| 7 | Skt *haṃsá* "(wild) goose" | `אַוָּז` | the Rigveda `אווזים` 2 (7.59.7b, 2.34.5c); KU `הברבור` 1 (5.2a). `ברבור` in the other corpora: Greek κύκνος (Hesiod, Shield 316) | `8-קטהה-אופנישד/annotated-KU2` 5.2a `האווז היושב בבהיר, …` (+ פירוק, the תרגומים bullet) – 1 line | one Hebrew per lemma, the majority; the Kaṭha's verse is itself a Rigveda verse (RV 4.40.5, the note says so); `ברבור` is the Greek κύκνος's |
| 8 | Skt *yóni* (renderings §11.19) | `רֶחֶם` (*vásman* `קֵן`) | *yóni* `רחם` 14 lines in four projects (5, 7, 8, 9) (Book 7's 7.97.4a changed by run 3); `קן` for *yóni* only RV 10.34.11b (by sense, renderings §11.8) | `הוודה-והאווסטה/renderings.md` §11.19 (*yóni* `קן` in 7.97 marked superseded); the note of `9-ריגוודה-ספר-ב/annotated-RV2.31` 1c (it still said `קן` was shared with *yóni* in 7.97) – no `>` line | the record follows the lines |

**Total: 9 `>` lines** (RV7.1 6a, RV7.8 2d, RV7.18 11b, RV7.74 6c, RV7.104 6d and 17b, RV10.18 10c, KU2 5.2a, AB7 15.2d),
their פירוק segments and notes, one Book 2 note, the renderings (§11.19 amended, §11.28 new: "2026-11-15 harmonization
(after Round 8)"). Rebuilt with `vedic_tools.py build`: `translation-RV7.1`, `-RV7.8`, `-RV7.18`, `-RV7.74`, `-RV7.104`,
`translation-RV10.18`, `translation-KU2`, `translation-AB7` and the project `translation.rtl.md` of projects 4, 5, 7, 8.
No intro, section heading or print stub quoted a changed word (grepped over the whole folder: none of the old strings
remains outside Book 2's `project.md` hand-off list, a historical record).

### B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| Skt *ucátha* / *ukthá* | both `אֲמִירָה` (*ucátha* 3: 7.18.5c, 2.19.7a, 2.20.5a; *ukthá* ≈ 12 + the compounds) | two nouns of √*vac* in one sense ("utterance, recitation"), like √*sr̥* / √*sru* `זרם`, *jaraṇā́* / *jarás* `זקנה`, *rohít* / *aruṇá* `אדום` (kept 2026-11-13). The Avestan cognate pair (*uxδa*) is *ukthá*'s only; a new word for a three-line by-form would split both books |
| Skt *majmán* / *śávas* | `עוֹצְמָה` (4: 7.82.5b, 2.1.15a, 2.17.4a, 2.22.2c) / `עָצְמָה` (≈ 25) | it is one Hebrew word in two spellings, and the split is real; but both books agree on *majmán*, and every free Hebrew word of strength or greatness is another lemma's: *ójas* `חוסן`, *sáhas* `עוז`, *tavasyà* `עוצם`, *túviṣmant* `רב־התוקף`, *mahimán* `גדולה`, *mahitvá* `גודל`, *máhas* `רוממות`, *vīryà* `גבורה`, *dyumná* `הדר`, *svadhā́* `כוח עצמי`; `גדלות` (the √*mah* family) reads as "adulthood". Moving it would open a new collision. Kept; the lead may rule otherwise |
| Skt *parjányajinvita* (RV 7.103.1c, also printed in project 6) | `שעורר פַּרְגַ'נְיָה` | a compound (another lemma, as *dhiyaṃjinvá* `מפיחי־ההגות`, 7.33.1b), and its sense is literally "awakened": the frogs wake at the first rain (the hymn's own intro). 7.104.6d's note now says so |
| Skt *gūḍha*, *guhya* (KU 1.29b, 2.12a, 5.6a) / RV √*guh* | `הַנִּסְתָּר` / `חבוי`, `החביא` | the Upaniṣad's term for the hidden Self, beside *gúhā* `סֵתֶר` "the secret place" (KU 1.14b, 2.12a, 3.1a, 4.6b): one family in the Kaṭha's own vocabulary, by sense |
| Hitt. GURUŠ | `עֶלֶם` (GI 1:13, 1:26, 1:38, 1:45, 1:74, 5:6) / `בָּחוּר` (HE 22:6–7, AP 1:42); GURUŠ-*tar* `עלומים` (KU 72, 76) | **the lead's ruling** (finalization plan §2): the Hittite Gilgameš keeps the Babylonian epic's Hebrew where the Hittite has its word (*eṭlu* `עלם`), renderings M4 |
| Hitt. DANNA | `בֵּרוּ` (GI 1:110–111) / `פַּרְסָה`, `פרסאות` (HLPT 22, HE 1:1, 6:18, UL 1:19) | **the lead's ruling**: GI follows the epic (*bēru* `בֵּרוּ`); the Laws and the other myths keep `פרסאות` |
| Hitt. *šamnai-* | `עִצֵּב` (GI 1:2, 1:3 and 4 more: the gods fashion Gilgameš) / `הִצִּיב` (HE 23:2; UL 3.1:179, 207 "set up against", and its iterative `מציב`) | confirmed by survey: "fashion a being" against "set up (a rival) against"; `יצר`, `צלם`, `דמות` reserved in every myth line (M4, §H3) |
| Hitt. *ara-* | `רֵעַ` (GI, Enkidu "friend") / `חָבֵר` (HL1, HL2 ×4, IN ×2: "fellow, colleague") | confirmed: GI keeps the epic's *ibru* `רֵעַ` (the Gilgameš corpus `רעי`, `רעהו` …); the Laws' and Instructions' "colleague" is another sense |
| Hitt. *nanna-* | `דחק?` (SI 2:56) / `העביר?` (KU 277, of a word) / `הרחק` (AM 33, 79, 159, 251, the rituals' imperative "drive away") | confirmed: "drive" of captives, "send on" of a message, "drive off" of evil; two of the three readings are marked `?` (broken context) |
| Hitt. *weya-* / *wiya-* / *wai-* | `בכה` (SI 4:9 weeping) / `צעק` (KU 146, GI 1:189) / `יילל` (IL 52, EL 1.1:30, 42: *wai-* "wail") | confirmed: three senses (weep, cry out, wail – *wai-* is also a separate lemma in HPM) |
| Hitt. *maniyaḫḫ-* | `ניהל` (SI 5:18, 5:21 "govern") / `הפקיד` (UL 3.1:5, 101 "hand over") / `מנה` (IN 6.4, 16.3 "assign"); SR *maniyaḫḫai-* `מחוז` (a noun) | confirmed by sense |
| Hitt. *ninink-* | `עורר` (LA 1:116 animals) / `הניע` (UL 2:88, 3.1:8; EL 1.1:5 objects) / `השתולל` (IN 12.4, middle) | confirmed by sense (and voice) |
| Hitt. *išḫiya-* / *išḫai-* | `כרך` (AZ 6, *anda* "wrap in") / `אסר` (AS 18, rams tied up) / `כבול` (SR 10.4.5) / `חייב` (HL1 525, 533, 535; HLPT 203 "impose") / `אלם` (HL2 158a.1, sheaves) | confirmed by sense, each recorded in its corpus's renderings (myths M4, rituals §R, Laws). (run 5's report says "SG"; the line is AZ 6) |

### Verification
- `python3 -I -B הוודה-והאווסטה/vedic_tools.py verify --strict` (whole corpus): before **0 problems**; after the build
  **0 problems** (the 2 known repeated-line differences, RV 10.10.13d/14b and 7.38.6b/7.52.3b, unchanged; RV 1.32 ↔ the
  fifth-day dossier untouched).
- `vedic_tools.py build RV7.1 RV7.8 RV7.18 RV7.74 RV7.104 RV10.18 KU2 AB7`: done; the new strings are in the generated
  `translation-*.rtl.md` and the projects' `translation.rtl.md`; no old string left in any file of the folder.
- `vedic_tools.py selftest`: 23 lines, 0 failures.
- `python3 -I tools/check_bible_quotes.py` on the ten changed files, then on every `.md` of `הוודה-והאווסטה/`: 0 problems.
- `python3 -I -B tools/hittite_tools.py verify --strict` (all Hittite keys): 0 problems; IL ↔ dossier identical, HE ↔ dossier
  60 entries identical; 10 repeated-line notices (the known ones). `hittite_tools.py selftest`: 69 lines, 0 failures.
  `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems. (No Hittite file was edited.)
- Surveys: a segment script (scratch, `batch-C/vsurvey.py`) over the Vedic and Hittite corpora; `tools/harmonize_survey.py
  parse` (GURUŠ, DANNA), `heb` (`ברבור`, `חוסן`, the `רע` family) for the other corpora.

### For the lead
- **Nothing outside batch C's corpora** needed a change; no gate bug.
- **A homograph, now corpus-wide:** *yóni* `רֶחֶם` (14 lines) and √*mr̥ḍ* "be merciful" `רַחֵם` / `ירחם` (≈ 19 lines) are
  the same unvocalized string – the reason Book 7's part 9 had chosen `קן` for 7.97.4a. Run 3 chose `רחם`; I kept it (the
  sense is right, and the lines read in context), but a trap row in renderings §7.3 with vocalized *yóni* lines would be
  the clean fix – a gate change over 14 lines, left to you.
- **Seen in passing, not changed:** AB 7.15.2d *bhūṣṇú* "thriving" (√*bhū*) `משגשגת` shares `שגשג` with √*puṣ* (another
  lemma, prose gāthā); RV 10.15.4c–d *ávas* / *ūtí* against Book 7 (already reported 2026-11-13).
- *majmán* (section B) is the one item kept against a real Hebrew-side identity; overrule if you prefer a new word.
- No `האווסטה/` file and no Hittite renderings were touched (the Hittite items were all confirmed, so no "2026-11-15"
  line was added to those corpora's renderings; the Vedic renderings carry §11.28).

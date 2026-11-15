# Round 8 harmonization – batch A (Egyptian), 2026-11-15

Batch agent A, by the lead's delegation (`harmonization-brief.md`). Items: `finalization-plan.md` §2 "Batch A – Egyptian"
(from `run-1.md`, the Pyramid Texts of Unas, against the earlier Egyptian projects). Corpus touched: `חכמה-ובריאה-במצרים/`
only. Surveyed with `tools/harmonize_survey.py` (`parse` / `heb --src`) and the corpus's own `egypt_tools.py lex` / `lemma` /
`data` (the TLA lemma ids decide "same lemma"); Egyptian is non-Semitic, so synonyms may share a Hebrew (§6.7 principle 1),
but one lemma takes one Hebrew unless a recorded sense split, and a lemma does not take a Hebrew that the corpus gives
another lemma. Counts below are lines.

## A. Changes

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

## B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| ꜥ tla34360 | `ספל` (the offering lists' measure, UN1–UN2 ≈ 25) / `זרוע`, `יד` (arm, hand: the whole corpus) | one TLA id covers two words (Wb's ꜥ "arm" and ꜥ "bowl, portion"); the TLA glosses the measure "Portion"; a measure is not an arm – a split by real sense |
| jp | `פָּקַד` (UN3 215.18, 215.20, 217.23, 218.2: "assess the hearts") / `מָנָה` (count, assign: UN2, UN4, BD ≈ 20) | the corpus already gives jp's judgment sense the root פקד – renderings §12.3 binds jp `מִפְקָד` (BD 6, 68; NU1 18.19 `במפקד האחים`); UN3's verb is that judgment (Jer 17:10 in the apparatus), recorded by UN4 as a sense split |
| mz | `קָרַב` / `קֵרַב` (PT600, UN2 138.1, UN4 223.8) / `נִגַּשׁ` / `הִגִּישׁ` (WE 10,3, 10,12, 10,20, 10,26, SI B269, SS 175) | split by text, with a collision either way: in the offering ritual `הגשה` is ḥnk's rubric (≈ 25 lines, the very spells, e.g. 138.1–138.2), and moving the tales to `הקריב` would rewrite WE's fixed three-births strings and lend the sacrificial verb to the necklaces handed to the king. The Pyramid Texts (Round 4's PT600, the earliest) keep `קרב` |
| ds | `כד` (WE, BD 114, NU4 122-1.5, NU9 126.11, UN2 151.3) | already one Hebrew; ds "knife" `מאכלת` and ds "flint" `צור` are other lemmas |
| zḫz tla142980 | `עקר` (UN2 163.1, 164.1: Seth tears out the Eye) / NU5 64L.14 `ייסוטו` (bolts drawn back) | one TLA id, two senses ("ausreißen (Horusauge)" / "aufschieben (Riegel)"), recorded by the UN2 note; `עקר` is also AM 7.13's tfi̯ "remove (the boundary)" – a synonym pair, never in one line (principle 1). zḫz tla142990 "hurry" (SI B227 `מיהרו`) is another lemma |
| mꜣj / rw "lion" | both `אריה` | synonyms, both `אריה` in every project (tales mꜣj, BD rw, UN both); never in one line |
| the in-project pairs | zj / šmj `הלך`; bḏ / pꜣḏ `כדור`; ḥnw.t "horn" / ꜥb `קרן`; spr "rib" / šbtjw `צלע`; jni̯ tla26870 "reach the boundary" / pḥ / spr `הגיע` | synonyms in a non-Semitic corpus (§6.7 principle 1): zj is Old Egyptian only, bḏ and ḥnw.t "horn" occur once each, spr "rib" / šbtjw are UN2 / UN4's only rib words; none of them is a lemma with two Hebrews, and no line renders two of them alike. ḥnw.t "bowl" `קערה` (UN1) is another lemma. (jni̯ "bring" tla26860 stays `הביא`) |

## Verification
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

## For the lead
1. **The fifth-day dossier's MK E134** (`מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md`, its `project.md` table
   row and `מיתוסים-אוגריתיים/parallels-index.md` row 389): `*[מן] הבושם*?` → `*[מן] הריח*?` (row 7), so that the excerpt
   equals project 2's MK again; then the `[סטייה מן התיק: …]` tag in `2-בריאה-במצרים/annotated-MK.rtl.md` E134's note can
   go. Not in any batch's corpus.
2. Seen in passing, not in the plan: BD 125, 30's god name `j ḫmi̯.y` "Destroyer" is `מחריב` while ḫmi̯ is `הרס`
   elsewhere (a name in BD 125's fixed denial list – left); UN2's "ꜥḥ, sḫt both `צד`" (renderings §13.6.9.3) was not in
   the batch's list and is not reviewed here; AM's sḏr `ישן` (row 5) is kept by sense and could be revisited if the
   lead wants sḏr in one Hebrew.
3. The plan's "ds `כד` / WE `קנקן`" was in fact ḏwj.w (row 10): ds is `כד` everywhere.

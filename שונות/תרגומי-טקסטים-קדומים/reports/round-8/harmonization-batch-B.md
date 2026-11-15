# Round 8 harmonization – batch B: Sumerian and Akkadian (2026-11-15, by the lead's delegation)

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

## A. Changes

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

## B. Kept, with reasons

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

## C. Verification

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

## D. For the lead

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

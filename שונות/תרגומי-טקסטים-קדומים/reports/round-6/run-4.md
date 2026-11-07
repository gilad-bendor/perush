# Round 6, run 4 – the Sumerian companions (report, 2026-11-07)

## Done
Three texts in three corpora, **1,289 new entries**, all in range A (Shabbat), one agent at a time, no quota stop.

| Key | Text | ETCSL | Entries | Project / files |
|---|---|---|---|---|
| LSU | The Lament for Sumer and Urim | 2.2.3 | 524 (1–519 with 80A, 80B, 219A, 361A, 362A, 386A, 407A–C, 412A, 425A, 477A) | `קינות-על-ערים/3-הקינה-על-שומר-ואור/annotated-1.rtl.md` (1–284, kirugu 1–2), `annotated-2.rtl.md` (289–519, kirugu 3–5) |
| DD | Dumuzid's Dream | 1.4.3 | 264 (1–261 with 144A, 181A, 251A) | `העולם-התחתון/6-חלומו-של-דומוזיד/annotated-1.rtl.md` (1–130), `annotated-2.rtl.md` (131–261) |
| P2, P3 | Proverb collections 2 (+6) and 3, completed | 6.1.02, 6.1.03 | 214 + 287 new (306 + 347 in all, with the 92 + 60 of Round 2) | `קולות-היום-יום/2-משלים-שומריים/annotated-c2.rtl.md`, `annotated-c3.rtl.md` |

- Each new project has `project.md` (scope, base, the translator's parts, parallels indexes LSU1/LSU2, DD1/DD2, open decisions with rulings, proposals), its own `renderings.md`, `translation--intro.rtl.md` and the generated `translation.rtl.md`; print stubs `הדפסה/קינות-על-ערים/3-הקינה-על-שומר-ואור.rtl.md`, `הדפסה/העולם-התחתון/6-חלומו-של-דומוזיד.rtl.md` (the proverbs' stub already existed). The proverbs project's headers, sections (15 + 18 thematic headings) and scope now describe complete collections; its `translation.rtl.md` was rebuilt (1,001 lines).
- **Base texts:** ETCSL 2.2.3 and 1.4.3 from the live ETCSL pages (`tools/etcslhtml2md.py`; the OTA zip is still unreachable); ORACC Q000380 and Q000347 (lemma + morph) from the epsd2-literary zip, downloaded with `curl --cacert` + `tools/certs/` (oracc.museum works with the intermediate, though the operator's probe calls it unreachable). README per folder; all CC / CC0, committed (no recipes needed).
- **Tools:** `lament_tools.py` key LSU; `netherworld_tools.py` key DD with a content alignment of ORACC (`align_content`); `kol_tools.py` P2/P3 without `select`; both builders of the parallels indexes read the new projects; new **`tools/sumerian_rel.py`** (near-identical lines across every annotated file, with their Hebrew).
- **Process:** coordinator setup (sources, keys, skeletons, `sumerian_rel.py` output for every skeleton, a run brief `reports/round-6/run-4--translator-brief.md`); three translators in sequence (DD, LSU, the proverbs), each with three review passes; then one independent fidelity reviewer over all 1,289 new lines: **32 fixes** (28 brackets, 3 additions, 1 word order; no negation, person or tense errors) – log `reports/round-6/run-4--fidelity-log.md`.
- Indexes: `העולם-התחתון/parallels-index.md` 810 rows (DD 68), `קינות-על-ערים/parallels-index.md` 475 rows (LSU 88), `קולות-היום-יום/parallels-index.md` 527 rows.

## Verification
- `netherworld_tools.py verify IS IN NE GEN ER DD --strict`: all OK (DD 264). Four "same source, different Hebrew" notes in DD, all intended (the dream's `לי` vs. the interpretation's `לך`; the sister's `תגלי` vs. the friend's `תגלה`).
- `lament_tools.py verify LU CA LSU --strict`: all OK (after the `ארר` licence learnt *nam … kud*, LSU 26, 239).
- `kol_tools.py verify LOVE PROV LET --strict`: OK.
- `tools/check_bible_quotes.py` over every `.md` file of the three corpora (corpus and project files), the run's reports and the edited shared files: **0 problems**. (The proverbs translator's three verses quoted from memory – Prov 26:27, 14:13, Ps 23:5 – were caught by it and corrected.)
- The proverbs' layout module is a layout by rule (no `ROW_STARTS`): nothing to repair; the new translations have no layout module yet (a layout session's work).
- `sources_sync.py fetch` (started at the beginning): 2,850 ok, 17 failed (the ETCSL `_bulk` items on llds.ling-phil.ox.ac.uk and the web.archive.org items – expected), 10 changed (online editions).

## Key findings
**The ancient mind.**
- **The Lament for Sumer and Urim is a theology of time, not of guilt.** It opens with some thirty purpose clauses of the gods' decree ("to overturn the days, to obliterate the plans …", 1–54) before the four gods are named (55); the destruction then fulfils them word for word (95–96, 101–102, 324, 337, 346), city after city; Ibbi-Suen is led to Elam; Nanna pleads with his father, and Enlil answers: "To Urim kingship was indeed given – a term of eternity was not given" (366); even a city's destruction is "a term" (462). The closing prayer `אַן אַל יְשַׁנֶּה!` (493–511) turns the decree inside out. The only "sin" (*nam-tag*, 244) is in a broken line with no clear subject; the fallen crown (100) has no "for we have sinned".
- **Dumuzid's Dream fulfils itself to the letter.** The dream (26–40), the sister's interpretation quoting each image back (44–69), and the poem's end (250–260) carry it out in the same words; its last line (260) is the dream's last (40). The sister and the friend differ by one sign: in the bribe lines (copied from Inana's Descent 273–274) she "did not stretch out her hand", he did; even the *galla* marvel at a sister who will not reveal her brother (138–139). The old woman Belili pours water and heaps flour (207–209) – exactly what the *galla* "do not drink, do not eat" (112–113).
- **The proverbs:** a cycle on fate (*nam-tar*: the biting dog, the clinging rags, "born on a day of bitter fate"); the school mocked (the syllable drill, the pupil "pierced" like carnelian, "a barber who knows Sumerian!"); jokes on the Emesal-speaking lamentation priest; Utu's "abominations" (3.8) are manners and cleanliness (unwashed hands, uncovered spittle, kissing in the midday sun); household voices (the child refused a second helping, 3.115; the fuller swearing by Enki, 3.148); and history kept in schoolbooks (Nanni, Išbi-Erra, Elam, the Martu).

**The Bible parallels the apparatus records** (all in the apparatus; the `>` lines keep echo control):
- LSU 366 [divergence] the dynastic promise `עַד עוֹלָם` (2 Sam 7:16; Ps 89) and [equivalent] Jer 27:7, Dan 2:21 ("מְהַשְׁנֵא עִדָּנַיָּא" ~ LSU 1), Dan 4:29; Lamentations: 399 ↔ Lam 1:20 (death inside and out), 304 ↔ Lam 4:5, 273 ↔ Lam 1:1, 442 ↔ Lam 1:10, 404 ↔ Lam 2:9, 406 ↔ Lam 4:2; the axes on the carvings 382, 420 ↔ Ps 74; the storm turned on Elam 486–491 ↔ Jer 49:36; the straightened highways and the returning god 472, 475 ↔ Isa 40:3, Ezek 43:4. ETCSL's "exile" (375: *gir₅* "stranger"), "glory" (426: *u₆* "wonder"), "looked favourably" (23) and "altered the course" (25: *aš₂ bal* "cursed") manufactured echoes: corrected.
- DD: *bur₂* (Akk. *pašāru*) ~ Aram. `פְּשַׁר` (Dan 2:4; Qoh 8:1); Joseph reversed (betrayed by kin / saved by kin, betrayed by a friend); Gideon's dream told to a companion (Judg 7:13–14); "feet like gazelles" (Ps 18:34; Hab 3:19); the cords of death (Ps 18:6); the fugitive fed by a woman (1 Kgs 17:10–11); the quenched coal (2 Sam 14:7); Ezek 8:14 (Tammuz) at 3 and 261 only.
- Proverbs: 2.94 ↔ Amos 5:19; 3.18 *eme sig gu₇* (Akk. *karṣī akālu*) ↔ Dan 3:8 `אֲכַלוּ קַרְצֵיהוֹן`; 3.65 ↔ Amos 8:5; 2.115 ↔ Prov 3:7; 3.107, 3.157 ↔ Qoh 1:9, 1:3; 3.168 the necromancer ↔ 1 Sam 28:7.

## Decisions taken
- LSU's labels are ETCSL's straight numbers (converted without `--seg-prefix`, which had given B113 … for a text numbered through its segments).
- One translator per text (sequential), both parts in one chain; the fidelity review by one reviewer over all three texts.
- *nam … kud* = *nam … ku₅* `ארר` in every corpus: both tools' licences widened; proverb 3.59 aligned (`האדון – את אוּנוּג – אורר; …`, was a gate-forced `גורל חָתַךְ (=קילל)`); `שמאל` licensed by *gab₂-bu* too (3.123 left as drafted).
- Accepted the translators' rulings recorded in the `project.md` files (LSU 10, DD 17, proverbs 13), among them: *bala* `תְּקוּפָה`; the decree chain `לְ` + infinitive / `שֶׁלֹּא` + future; LSU 486–492 *ḫe₂-* as a wish, 441 *na-* as affirmative (the reviewer left both; the reasoning is in the apparatus); DD *bur₂* `פרש`, *pad₃* `מצא` / `גילה`; the two Round 2 proverb lines with *ĝen* imperative corrected to `לכי`.
- The translators' proposals merged as corpus rules: `קינות-על-ערים/renderings.md` §10, `העולם-התחתון/renderings.md` §13, `קולות-היום-יום/renderings.md` §9 (Round 6 run 4); guidelines §5.2 ("The Sumerian companions") and §6.7.

## Questions for the user
None.

## Problems and skipped items
- No quota stop (range A, gate GO before every heavy step).
- The ETCSL bulk zip (llds.ling-phil.ox.ac.uk) and web.archive.org remain unreachable; the live ETCSL pages served.
- `sumerian_workbench.py` needs the ETCSL zip for its XML commands; the translators used ORACC's morph and marked the rest "ניתוח שלנו".
- Not done in this run: the new translations' print layout modules (a layout session's work).

## Cross-corpus splits left for the lead
1. *kaskal*: `מסילה` (LSU, beside *ḫar-ra-an* `דרך` in one line) / `דרך` (the kings corpus).
2. *bala*: `תְּקוּפָה` (LSU) / `תקופת שלטון` (LU 113) – propose LU 113 → `תקופה`.
3. *tum₂* / *de₆* `נשא` (DD, as Inana 283) beside *gur₃* `נושא` (Inana 371): two Sumerian verbs, one Hebrew word.
4. *sig₉* and *niĝ₂-me-ĝar* both `דממה` (DD, following two earlier texts).
5. *an-za-am* `גביע` (DD) – the Sumerian source of Akk. *assammu*, `גביעים` in the OB Gilgameš: one word across the languages (confirm).
6. *engiz* `מבשל` (LSU) shares the harmonized Hebrew of Akk. *muḫaldim*.
7. *uru₄* "plough" rendered `זרע` in the proverbs (2.91, 2.140) after collection 1's precedent – review.
8. DD's proposed always-vocalized words (`מָנוּ`, `רֵעַ` + suffixes, `שָׂמִים`, `אֵלָה`), new reserved words (`מקוה`, `ערב רב`, `פתר`, `איילות`) and formulas (the seizure ×3, the prayer ×3, the dream / interpretation pairs) for `netherworld_tools.py` – recorded in the project, not yet in the tool.

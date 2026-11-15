# Round 8, run 2 – the Old Babylonian school canon (report)

Session `Round8/Run2`, branch `translation-round-8-run-2`, 2026-11-13, range A (one agent at a time). Plan row SU1
(`translation-program.md`), candidates sumer-01 and sumer-16.

## Done
- **A new corpus, `קנון-בית-הטבלה/`** (the school canon), named by the coordinator: `corpus.md`, `renderings.md` (names,
  key terms, the gates; §5 the translators' merged proposals and every coordinator decision), `translator-brief.md`,
  `reviewer-brief.md`, `canon_tools.py`, `build_parallels_index.py`, `parallels-index.md` (307 rows).
- **Project 1, `1-העשירייה/` – the Decad** (1,141 lines): Šulgi A (SA, 108), Lipit-Eštar A (LA, 108), Inana B (IB, 154),
  Enlil A (EL, 171), the Keš temple hymn (KH, 165), Enki's Journey to Nibru (EJ, 130), Inana and Ebiḫ (EB, 184),
  Nungal A (NG, 121). The Decad's other two texts are **pointed to** at their place in the order
  (`translation--pointer-HOE.rtl.md` → the Song of the Hoe in `סיפורי-הבריאה-המסופוטמיים/2-…`; `translation--pointer-HA.rtl.md`
  → Bilgameš and Ḫuwawa A in `אפוס-גילגמש/3-…`): a text lives once, whole.
- **Project 2, `2-הרביעייה/` – the Tetrad** (379 lines): Lipit-Eštar B (LB, 63), Iddin-Dagan B (ID, 79), Enlil-bāni A
  (EN, 171), Nisaba A (NI, 57 + the 9 lines of the Lagaš stone version).
- Per text: `annotated-<KEY>.rtl.md` (every line with פירוק, תרגומים, הקבלה, הערות), `translation--intro-<KEY>.rtl.md`;
  per project: `translation.rtl.md` (generated), `project.md` (the translators' parts, open decisions, the three
  reviews, the generated parallels tables); print stubs `הדפסה/קנון-בית-הטבלה/1-העשירייה.rtl.md`, `2-הרביעייה.rtl.md`.
- **Sources**: ETCSL c-/t-files of the twelve (from the local OTA zip) and ORACC epsd2/literary lemma + morph of all
  twelve (from the local zip – so ORACC's morphology *was* available after all), with READMEs; sources-registry §4.4z.
- Shared files: guidelines §5.2 (one lesson block), `tools.md`, `history.md` (a "Learned on" block and the changelog),
  `STATUS.md`, the plan row.
- **Process**: three translators, each resumed part by part (T1 the five royal hymns in three parts; T2 Nisaba, Enlil A,
  Keš, Enki's Journey in two; T3 Inana B, Ebiḫ, Nungal in two), each with three passes; then three independent
  reviewers (R1 529 lines: 9 lines changed; R2 532: 14; R3 459: 18, then a corpus-wide consistency pass: about 25 more
  lines). The coordinator merged each part's proposals and settled its open decisions before the next part.

## Verification
- `python3 -I -B קנון-בית-הטבלה/canon_tools.py verify all` – all 12 keys OK (1,520 entries = ETCSL's line lists;
  `translation.rtl.md` = the `>` lines: 1,141 + 379 lines).
- `python3 -I tools/check_bible_quotes.py` on every file of the corpus (annotated, intros, translations, project.md,
  parallels-index.md) – 0 problems.
- Neighbours untouched and still passing: `netherworld_tools.py verify GEN`, `bilgames_tools.py verify HA` – OK.
- The gates were tested on samples before the first line (`תהילה`, `גיבור`, `בחר`, `ישר`, `משפט`, `זמר`, the Keš and
  Dagan traps) and the tool was fixed three times on the translators' reports (below).
- The layout: the two new `translation.rtl.md` files have no layout module yet (a layout session's task).

## Key findings
**The ancient mind.** The first thing a pupil copied made the king a perfect scribe: Nisaba straightened his fingers on
the clay, and the hymns ask that his praise not cease "in the house of the tablet" (LB, ID; ID blesses "the junior
scribe who wrote this"). Šulgi runs from Nibru to Urim and back in a day "so that my name not fall from the mouth" – and
the pupils copying it are that mouth; Lipit-Eštar A is a portrait made of a hundred "I am" lines, and its judge is slow
("I hurry over nothing; I seek its end"). Enlil-bāni A's king "loosens sin and its illness" (sin as a bond that makes
one ill) and "does not strike a head with wood". Enlil A's Nibru is a moral city: the younger brother "makes heavy" the
elder; the son humble to his mother lengthens his old age. The Keš hymn ends in a paradox of holiness: "the man who
approaches – does not approach". In Enki's Journey the temple's bricks speak and take counsel. Inana B is a lawsuit in
Enheduana's own voice: her plea "may your heart return to its place for me" is answered in the same words. Ebiḫ is
punished for its height and beauty. Nungal's prison "gives birth to the true man", and its goddess is a midwife.

**The Bible in the apparatus** (307 rows; 118 in the Psalms – a shared world of the royal and temple hymn, not a source):
- royal hymns ↔ Ps 2:7, 21, 45:8 (love justice, hate wickedness: SA 23–25), 72, 110:1; temple hymns ↔ Ps 24:3, Exod 19:12
  (KH 128–131), Isa 66:8 and Ps 87:5 (who has seen such a birth?); the son builds, the father confirms ↔ 2 Sam 7:13 (EJ);
- word-for-word meetings: IB 145 "her prayer – she took" ↔ Ps 6:10 `יְהוָה תְּפִלָּתִי יִקָּח` (*šu ti* = Akk. *leqû*);
  EL 2 ↔ Ps 89:35 `וּמוֹצָא שְׂפָתַי לֹא אֲשַׁנֶּה`; LA 3 "the cedar's young shoot" ↔ Ezek 17:22; EN's "clay of life" ↔ the
  book of life (Ps 69:29); IB 73 *saḫar* + *gi₄* "returned to dust" ↔ Gen 3:19; the prison's door-bolt *si-ĝar* `מסגר` ↔
  Ps 142:8, Isa 42:7; the silver polished "from the dust" ↔ Mal 3:3 (NG);
- [cognate]: `מֵישָׁרִים` ~ *niĝ₂-si-sa₂* via Akk. *mīšarum* (LB 38 ↔ Ps 99:4), `נוֹקֵד` ~ *na-gada* (Amos 1:1), `אִכָּר` ~
  *engar*, `רָחֵל` ~ *u₈*, `אַלּוֹן` ~ *allanum*, the Tigris `חִדֶּקֶל`;
- corrected false echoes of ETCSL's English: "created by An", "your divine creator", "the good shepherd", "justice and
  righteousness" (`נאמנות ונכונה`), "holy sceptre", "never destroys a just person", ID 40's reversed support (the king
  relies on Enlil: Ps 21:8), IB's added "not yet" (117, 122, 134), "vanished" (IB 73), KH 128's added imperative.

## Decisions taken (minor, by the coordinator; all recorded in `renderings.md` §5)
- The corpus name `קנון-בית-הטבלה`; two projects (the Decad, the Tetrad), one annotated file per text; the Hoe and
  Bilgameš and Ḫuwawa A pointed to, not copied.
- The Psalms' vocabulary reserved or gated (§4); pre-set names (Lipit-Eštar `לִיפִּית־אִישְׁתַּר` as the laws corpus;
  Nisaba `נִיסָבָּה` as the Song of the Hoe; Keš `כֵּשׁ`, Iddin-Dagan `אִידִּין־דָּגָן`, Ebiḫ `אֶבִּיחַ` always vocalized).
- `canon_tools.py`: *eš₃* `מקדש` passes the `קדש` gate; licences without ETCSL's notes; the vocalization check skips
  one- and two-word lines; the intros avoid `מזמור`.
- *ulutim₂* `תואר` (LA 13 changed from `דמות`); *maškim* `נציב` (*nu-banda₃* keeps `ממונה`); *gaz* `הרג`, *šar₂* `שחט`;
  *tur₃* `רפת` / *amaš* `דיר`; *muš₃* `מראה`; *ḫur-saĝ* `רכס`/`הררים` against *kur* `הר`; *ḫar-ra-an* `אורח`, *kaskal* `דרך`;
  KH 128–131 *na-* + ḫamṭu = a negation (`לא ניגש`), EB 30–35 likewise; the splits by sense the reviewers kept.

## Questions for the user
None that only the user can answer.

## Problems and skipped items
- No quota stop: the gate said GO (range A, one agent) at every step.
- Gate workarounds left in place (recorded): EB 174 `תוף` for *ub* (`אוב` gate), NG 113–114 `מיטבו` (`מבחר` read as
  מ + `בחר`), EB 46, 105 `אשר בו` (`שבו` trips `שוב`), vocalized `בּוּרִים` for the area unit *bur₃* (`בור` gate),
  `הכוהן־לָל` (`הלל` reserved). A later tool revision may license them and restore the plain words.
- Open per-text decisions remain in the two `project.md` files (uncertain readings, marked in the lines).
- The ETCSL catalogue notes in the first lines ("Cited in OB catalogue …") are mentioned in the headers, not translated.
- `sources_sync.py fetch` ran in the background (not needed for this run: its bases are committed); it reported
  `CHANGED` for several OBO PDFs and CAB files and `FAILED` for Wasserman 2020 (web.archive.org unreachable) – nothing
  this run uses.
- The new translations have no layout module (`translation.rtl.layout.ts`): for a layout session.

## Cross-corpus splits left for the lead
- *maškim*: `נציב` here; the laws (LI epil. 499′) and Gudea (B ix 23) keep `הממונה`.
- *u₃-sumun₂* and *immal₂* both `פרת־הבר` (here and in the kings and everyday corpora): two Sumerian words, one Hebrew.
- *sa-par₃* `מכמורת` overlaps with Akk. *kamāru* across languages.
- *gaz*: `הרג` here and in most corpora; the Curse of Agade 237 has `מכה`.
- `דרך` shared by *kaskal*, *a-ra₂*, *in-di₃*, *ĝiri₃* where the sense is "way".
- *nam-en* `כהונת־האֵן` (of a priestess, IB) vs `אדנות` (EN): a split by sense, to confirm against the temple corpus's `אֵן`.
- *la-la* `עתרת` here; LH uses `עתרת` for *nuḫšum*.

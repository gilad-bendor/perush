# Project 8: The Epic of Anzû (eBL L/1/10), all versions – Round 8 run 4 (2026-11-14)

## Scope
The whole epic in every version eBL edits: OB II (82 lines), OB III (35), SB I (201), SB II (154), SB III (155), the
Neo-Assyrian Sultantepe (Ḫuzirina) tablet (67) – 694 entries, one annotated file per eBL chapter (`annotated-<key>.rtl.md`,
labels `<key>.<eBL label>`). The bird Anzû steals the Tablet of Destinies and Enlil's power; the gods despair; Adad,
Girra and Šara refuse to fight; Ea and Mami send Ninurta; the first battle fails (the arrow turns back), Ea's second
counsel (cut the wings) wins; the gods give Ninurta his names.

## Base edition
eBL corpus L/1/10, ed. A. C. Heinrich, rev. T. D. N. Mitto, E. Jiménez, A. Hätinen; English B. R. Foster (rank 3);
fetched by `../../tools/ebl_fetch.py` into `../../sources/eBL/Anzu-{OB-II,OB-III,SB-I,SB-II,SB-III,NA}/` (© eBL, git-ignored;
restored by `sources_sync.py`). Rank 4: eBL's notes (Annus 2001, Vogelzang 1988, Hallo–Moran 1979 cited there).

## Tools
`../kings_tools.py` key AN: `data`, `pars`, `fill`, `verify`, `build` (the Etana / Cuthaean machinery). Gates RESERVED_R8
(renderings §13.4).

## Progress
| Part | Lines | Status |
|---|---|---|
| AN1 | SB I | drafted, three passes; independently reviewed (2026-11-14) |
| AN2 | SB II–III | drafted, three passes; independently reviewed (2026-11-14) |
| AN3 | OB II, OB III, NA | drafted, three passes; independently reviewed (2026-11-14) |

## Open decisions
(see the parts' `project--AN<n>.md`)

## Independent review (2026-11-14)
An independent fidelity reviewer (who drafted none of it) read all 694 entries against eBL's normalization, lemmas and
every manuscript's ATF (`kings_tools.py data AN`), built a lemma → Hebrew map from the eBL lemmas and the `>` lines, compared
every pair of near-identical normalizations across the six chapters, and applied the coordinator's two decisions.

**Lines changed: 33 `>` lines** (apparatus fixed with each), plus 2 section headings:

| File | Lines | Kinds |
|---|---|---|
| annotated-I | 5 | tense 3 (the refusal's *immi* is a present: `יהיה לטיט`, b+108, b+129, b+150); brackets 2 (b+101 `[אל]`, b+102 `[אבי, אל]`) |
| annotated-II | 10 (+1 heading) | decisions 8 (*ṭehû* `ניגש` II.61, 67, 77, 83, 94, 100; *mēlulu* `יְשַׂחֲקוּ` II.114, 136); number 1 (II.10 *šukudu … libilšu* singular: `החץ – חֵמָה יביא לו!`); agreement 1 (II.53 `ראוי למבול`); heading `כְּרֹת אֶת אֶבְרוֹתָיו` (was `אֲבָרָיו`, "limbs") |
| annotated-III | 4 (+1 heading) | decision 1 (III.28 `יְשַׂחֵק`); tense 1 (III.a+63 *iliṣ* `ו[עלץ כבדם]`); consistency 2 (*bēlu* `אדון`, as *bēl uzni* `אדון הבינה`: III.b+123 `אדון הסוד`, b+141 `אדון היתד`); heading and notes `הַשֶּׁבַח` (was `הַהַלֵּל`, the liturgy's word) |
| annotated-OBII | 5 | tense 1 (OB II.22 *iwwi* present, = SB); lemma 2 (OB II.35, 42 *itrurū* = *tarāru* `רעדו`, as SB I.b+164; was eBL's *darāru* `*השתחררו*`); number 1 (OB II.76 *mummilat* singular `מעוררת`); addition 1 (OB II.49: a `ו` not in the Akkadian) |
| annotated-OBIII | 6 | decisions 2 (OB III.15 `ניגש`, a+24 `יְשַׂחֲקוּ`); lemma 1 (OB III.11 *išgum* `שאג` – the line had `העלה` while its note said `שאג`); lexical 1 (a+33 *nâšu* `נעה`, Gilgameš II 115; `רעד` is *tarāru*'s); grammar 1 (a+35 *abaršu* is the subject: `אבר[ו נפל]`, no `את`); brackets 1 (a+29 `[בארבעת הקצוות]`) |
| annotated-NA | 3 | lexical 1 (a+7 *gamāru* `גומרים`, as SB I.b+71, III.b+114); stem 1 (a+65 *lillûšu* D + suffix `[יעלוהו]`); brackets 1 (a+31 `הוקדר`: *-tādir* is preserved in HuzNA2) |

**Apparatus only:** reserved and echo words removed from notes and glosses (`בטרם` I.6; `העליון` / `עליון` in three glosses,
I.16, III.b+143, NA.a+36; `הקודש הפנימי` I.a+55 → `החדר הפנימי (הדביר)`); `וְשִׂחַקְתִּי לִפְנֵי יְהוָה` (שמואל ב ו:כא) [equivalent] added
at II.114 and III.28; the header's refusal string and story updated (`יהיה לטיט`); the stale tool note at I.b+108 marked fixed.

**Checked and left as they are:** brackets were found to follow the ATF, not eBL's normalization brackets (e.g. I.b+109
`[נרפים]`: the normalization has no bracket, but every manuscript is broken there) – only the five above were wrong; the
three refusals, Anu's speech, the battle chains and the messenger formulas are identical wherever the Akkadian is (the
differences that remain follow the Akkadian: *-ma*, *ana māhāzīka*, *qerbīssu*, singular and plural *kappu*); `verify`'s
identical-source list is empty.

**Built and checked:** `translation--intro.rtl.md` written (what the text is, its versions, the story, how to enter its world,
the Bible as shared motif and the two lexical contacts, the reserved words, the signs); `build AN` (694 lines);
`verify AN --strict` OK; `check_bible_quotes.py` on the six annotated files, the intro, the translation and the project files:
0 problems. No layout module exists yet for `translation.rtl.md`.

**Open, for the lead:**
1. The refusal's `הר אין־גישה` (*lā aʾāri*, *âru*) now shares the root of *ṭehû* `ניגש`: a bound string, left; another word
   (e.g. `הר אין־מבוא`?) would need the lead, since `מָבוֹא` is *nērebu*'s.
2. *lītu* `תשועה` (II.107, 129; Gilgameš precedent) carries the Bible's "salvation"; *dalālu* `הִלֵּל` (III.b+134) is Psalm
   vocabulary – both accepted earlier, flagged for the consistency pass.
3. *irūbaššu* / *irubbū* (SB II.36, OB II.81 = OB III.1, NA.a+29): eBL has *râbu* "quake" (NA, OB III) and *erēbu* (SB);
   the translator's *raʾābu* `רגז` was kept, since `רגז` also means "quake".
4. I.b+87 ends the council's question with `?` over a precative (*lišarbi*); OB II.81 / OB III.1 make Anzû the subject of
   *īruhšum* (Foster: Ninurta) – both possible readings, left.
5. The tables in `project--AN1.md`–`project--AN3.md` keep the pre-review strings (II.10, the *ṭehû* and *mēlulu* lines, the
   refusal's `היה לטיט`, the terms *ṭehû* `קרב`, *mēlulu* `רקד`); this section supersedes them.

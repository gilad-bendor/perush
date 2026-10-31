# Round 5, run 5 – Mesopotamian literature from eBL: report

Session `session_01UnH1L1u5p8XLadhLtwpYUU` (title `Round5/Run5: Cuthaean Legend, Poor Man, fables`), branch
`translation-round-5-run-5`, 2026-10-31, 06:30–09:40 UTC, inside quota range A (one agent at a time throughout). Model:
Opus 5.5 for the coordinator and every sub-agent.

## Done

**The whole selection of the plan row, 960 lines**, in two existing corpora:

| Project | Text | eBL | Labels |
|---|---|---|---|
| `אגדות-מלכים/4-אגדת-כותה/` | the Cuthaean Legend of Narām-Sîn, all five versions: OB I (74), OB II (13), MB A (63), MB B (15), SB (180) | `L/1/12` | **345** |
| `ספרות-החכמה-והצדיק-הסובל/7-העני-מניפור/` | the Poor Man of Nippur | `L/1/11` | **161** |
| `ספרות-החכמה-והצדיק-הסובל/8-משלי-המחלוקת/` | Palm and Vine (54), the Poplar (82), Ox and Horse (217), the Spider (59), the Wren (42) | `L/2/12`, `8`, `9`, `11`, `13` | **454** |

Each text has its annotated file(s) (`annotated-<KEY>.rtl.md`: eBL's N filled by the tool, the Hebrew, פירוק, תרגומים,
הקבלה with tags, הערות), an introduction, the built clean translation, the translators' sections in `project.md`
(progress and passes, parallels index, key findings, open decisions, proposals), and a print stub
(`הדפסה/אגדות-מלכים/4-אגדת-כותה.rtl.md`, `הדפסה/ספרות-החכמה-והצדיק-הסובל/7-העני-מניפור.rtl.md`, `…/8-משלי-המחלוקת.rtl.md`).

Also:
- **Sources:** the eleven eBL chapters fetched with `tools/ebl_fetch.py` (no empty **N:** lines), gitignored, 11 items
  added to `sources/MANIFEST.json` (built-in eBL rule); `sources-registry.md` §4.4y.
- **Tools:** `kings_tools.py` key **CL** (the eBL reader generalized: the chapter list and the eBL text number per project,
  `Parallels:` ranges linked line by line; RESERVED_CL, TRAPS, eight formulas; a new `fill` command); its
  `build_parallels_index.py` reads CL. `wisdom_config.py` keys PM, PV, PO, OH, SP, WR; four new RESERVED rows in
  `wisdom_tools.py` (`נקם`, `אטד`, `כבשה`, `עכביש`); its `build_parallels_index.py` reads projects 7–8. `tools.md`.
- **Corpus files:** `אגדות-מלכים/renderings.md` §11 (pre-set, then §11.6.1–§11.6.3 one merge record per part),
  `translator-brief--cuthaean.md`, `corpus.md`, `parallels-index.md` (key findings at the top; 455 rows);
  `ספרות-החכמה-והצדיק-הסובל/renderings.md` §12 (§12.4.1–§12.4.4), `translator-brief--round5-run5.md`, `corpus.md`,
  `parallels-index.md` (findings 22–26; 1,770 rows).
- **Shared files** (once, at the end): `STATUS.md`, the plan row, guidelines §5.2 ("Mesopotamian literature from eBL") and
  §6.7 (two entries), `history.md` (the story and the changelog line), `sources-registry.md`, `tools.md`, `MANIFEST.json`.

**Process.** The coordinator set up each corpus (tool key, renderings, brief) before its first line. Three translators,
one at a time, each resumed part by part: the Cuthaean Legend in four parts (SB 1–93, SB 94–180, MB A–B, OB I–II; the
fullest version first, the others copying its Hebrew), the Poor Man in one, the fables in three (PV+PO, OH, SP+WR). Each
did its own three passes; the coordinator merged every part's proposals into the renderings, fixed the tool (FORMULAS
for the Cuthaean formulas, the Magan licence) and committed. Then one **independent fidelity reviewer** went through all
960 entries in four batches.

## Verification
- `kings_tools.py verify CL --strict`: 345 entries, **OK** (one note: SB 16 / 74 / 110 share a normalization; 16 is the
  restored 3rd-person copy – justified). `verify EA`, `SB`, `ET --strict`: OK (the generalized reader leaves Etana intact).
- `wisdom_tools.py verify --strict` (all 17 files): **0 problems**; PM, PV, PO, OH, SP, WR 0 repeated-line differences
  (the 7 listed are the corpus's old ones: Ludlul III, SH, CW, DP).
- `build CL` and `wisdom_tools.py build`: the clean translations equal the `>` lines (checked by verify).
- `tools/check_bible_quotes.py` over all 975 `.md` files of the folder outside `sources/`, shared files included:
  **0 problems**. Every translator printed every verse before quoting it.
- **Independent review: 56 fixes**, all brackets but two: SB 173 `משאלות` (a word carrying the reserved root שאל of
  *šâlu*, for an unrelated *taṣbâtu*) → `מילוי־חפצים`; PM 77/79 *izzimtu* `משאלה` → `מַאֲוַי` (a Hebrew-only pun on
  *išāl*). No errors of meaning, person, number, tense, stem or negation were found. The wisdom files' convention line
  had said a partly broken word takes no brackets; the coordinator ruled (with the corpus convention `ק[יץ]`) that only
  the lost letters are bracketed, and the six files were aligned.
- `tools/sources_sync.py fetch` (started first): 3,602 ok, 9 changed, 5 failed (as in run 3: the zora OBO PDFs, the ORACC
  bulk; eBL Atrahasis-MB-Priv and Lenzi 2023 CHANGED, known) – none concerns this run.

## Key findings
Full lists with lines and tags: the top of `אגדות-מלכים/parallels-index.md` and of `ספרות-החכמה-והצדיק-הסובל/parallels-index.md`.

**For the Bible**
1. **Asking the god before battle** (the Cuthaean Legend): *šâlu* is the cognate of `שָׁאַל` in the Bible's own idiom
   (1 Sam 23:2, 14:37, 28:6), and the method is extispicy (Ezek 21:26). The king's defiance ("which lion consulted a
   diviner?") reverses 1 Sam 15:23; after he obeys, the omens order mercy and the Morning Star forbids destroying the
   enemy – the reverse of 1 Sam 15 (`וְלֹא תַחְמֹל`).
2. **The created host and the Flood:** the enemy is "built" by the gods (`בָּנָה`, never `בָּרָא`), suckled by Tiāmat,
   "the work of Enlil", tested with a pin ("if blood comes out, they are humans like us"; Num 13:32–33). Ea recalls the
   gods' decision "to destroy the seed of mankind" and to keep people in being (Gen 6:7 and 9:11 in one speech); in MB A
   Ea alone builds the host and curses it "so that it not destroy mankind"; OB I compares Akkad's ruin to "the flood of
   water (*abūb mê*)" (Gen 6:17's `הַמַּבּוּל מַיִם`).
3. **The stela's counsel to a future king** (Deut 17:18–20 in form, Isa 7:4, 30:15 in content): stay home, "in your wife's
   lap do your work" (Deut 24:5, Qoh 9:9), answer "Yes, my lord!", requite wrong with kindness (1 Sam 24:17, Gen 50:20,
   Prov 25:21–22). The curses gather the Bible's own (Isa 19:2's civil strife, 2 Kgs 7:1's famine units). Kutha and
   Nergal (2 Kgs 17:24, 30).
4. **The Poor Man and Nathan's parable** (2 Sam 12:1–4): one animal bought, taken by the powerful, the requital
   multiplied (threefold, by the victim himself); `עֵז מְשֻׁלֶּשֶׁת` (Gen 15:9), *šulmānu* = Isa 1:23's `שַׁלְמֹנִים`,
   *ina ṭēmi šarri* = Jonah 3:7; the poor man's only garment (Exod 22:25–26); Prov 20:22 forbids his course.
5. **Judg 9 reversed** (Palm and Vine): the palm claims the title "king" for its gifts, where Jotham's useful trees
   refuse it; its "good shade" is Hos 4:13 [cognate], the verb is "lean", not Judg 9:15's "take refuge" (eBL's English
   manufactured it); wine gladdens heart and face (Ps 104:15). **Ox and Horse:** the horse as the emblem of rule (Deut
   17:16 reversed; `אֻרְוֹת סוּסִים`, 1 Kgs 5:6), Ps 32:9 and Prov 14:4 argued by the Ox. **The Spider:** the god creates
   and names the beasts (Gen 2:19–20, where man names them). **The Wren:** "may Eagle not say 'lofty is my mountain'"
   (Obad 1:4), "he whom Bēl is with builds a nest" (Ps 127:1).
6. **False echoes of the English, corrected:** Judg 9:15's "refuge", Baal-zebub's "master of flies" (SP 19), Job 1:1's
   "there once was" (PM 1), Foster's "holy" (*ellu* "pure"), "stab" (*lapātu* "touch").

**For the ancient mind**
- A king between the gods' signs and his own will; the despair of a king who has lost three armies; non-resistance as
  political wisdom because the enemy is the gods' own work; across a millennium the enemy turns from historical peoples
  (OB) into a created race (SB), and the king from blaming the god to blaming himself.
- The dead need a name on a stela more than a son; one verb, "touch", tests both the enemy's flesh and the gods' will.
- The citizen of Nippur under divine protection; honour worn as a garment; the gift economy and the shame of a feast
  without beer; the trickster as royal envoy and physician; a requital kept as a debt count.
- The disputation as court entertainment and moral school: each tree or beast lists what it gives gods, king and people;
  the weak bird's faith in the sun-god's justice.

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- **Placement:** the Cuthaean Legend in `אגדות-מלכים/` as Etana's sibling; **the Poor Man and the fables in the wisdom
  corpus**, not `קולות-היום-יום/`: the fables are wisdom in eBL's own classification (`L/2`) and Lambert's *BWL*, the Poor
  Man is a moral tale of the wronged poor and his requital with this corpus's vocabulary (*riābu* `גָּמַל`, *ṭātu*), and
  `wisdom_tools.py` reads eBL natively while `kol_tools.py` reads none (renderings §12, corpus.md).
- Accepted translator revisions of pre-set rows: *wuʾʾuru* `צִוָּה`, *guḫšû* `מִתְקַן־קָנֶה` (`מִזְבֵּחַ` reserved),
  *umma* `לאמור`, Anunītu `אֲנוּנִיתוּ`, Subartu `סוּבַּרְתּוּ`; *qāta wabālu* `הֵבִיא יָד` (`שָׁלַח יָד` in the
  apparatus); *šakin abūbu* `מבול מְחוֹלָל`; Kutha `כּוּתָה` ★ (2 Kgs 17:24); *dumqu* `חֶסֶד`; *ḫazannu* `חַזָּן`
  [cognate] kept; the fables' contestants as names without the article; Palm and Vine's title `הדקל והיין`.
- The bracket ruling for partly preserved roots (above); PM *izzimtu* `מַאֲוַי`; the translators' other open choices stand
  as drafted (listed in each `project.md`).
- The Cuthaean part files `project--CL1…4.md` merged into `project.md` (its "Parts" section), as Etana's.

## Questions for the user
None that block, and none that need the user under the standing rule. Each project's open decisions (cruxes translated
with a choice and noted: e.g. Cuthaean SB 29 *pagrī u pūtī*, SB 88 *akkala*, MB A *zummû*, OB I b+11 *ilu* as subject
or vocative, PV *ušurtu* `מַעַשְׂרוֹת?`, WR *duqduqqu* `גִּדְרוֹן`) are left for the user's review of the drafts.

## Problems and skipped items
- **No quota stop.** Every gate said `GO range=A agents=1` (`five_hour`, `allowed`). Nothing skipped.
- The plan's "if the whole selection does not fit" order was not needed: all of it fitted in range A.
- A coordinator slip, corrected: a pre-set renderings line had a stray mention of a New Testament verse (removed before
  the first translator); `MANIFEST.json` was first re-sorted by a script (a 15,000-line diff) – redone by appending the
  11 new items only.
- Tool gaps recorded in `tools.md`: `wisdom_tools.py pars` does not resolve eBL's bare category-I links ("L I.11 16");
  verify's identical-normalization check covered them. The wisdom corpus's `הנה` gate fires on "hither" (escaped by
  rewording).
- The reviewer's caveat: it checked partial brackets wherever eBL's normalization brackets part of a word; a word that
  each manuscript loses in a different place without a bracket in N would not be flagged (none found in the SB's full
  line-by-line pass).

## Cross-corpus splits left for the lead
- *gimillu* `חֶמְלָה` (Cuthaean SB) against Enūma eliš / Gilgameš *gimilla turru* `הֵשִׁיב גְּמוּל` (kept so that `גָּמַל`
  stays *riābu*'s).
- *aggu* (SB 132) and *ezēzu* `זָעַם` (OB I; Erra, Ludlul) share the root זעם.
- *ešertu* `בֵּית־אֵל` / `בתי האלים` (`מִקְדָּשׁ` is gated to *eš₃* in the kings corpus); *šapru* `שָׁלִיחַ` = *mār šipri*'s word.
- *arhānû* `דֶּקֶל` (the fables) against Sum. *ĝišimmar* `דקל` (Gudea, Lipit-Ištar, EWO); this corpus keeps `תָּמָר` for
  *gišimmaru*.
- *gipāru* `מכלאה` (PM) / `מרעה` (Erra) / `אחו` (Enūma eliš), by sense.
- *šâlu* `שָׁאַל` [cognate] (Cuthaean) against the netherworld corpus's *erēšu* = Sum. *al dug₄* `שָׁאַל`: the cognate
  should keep it (guidelines §5.2); not changed here.
- *ḫazannu* `חַזָּן` (PM): the modern "cantor" sense; an alternative `ראש העיר` if the lead prefers.

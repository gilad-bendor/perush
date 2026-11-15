# Round 8, run 5 – the Hittite myths completed: report

Session `session_01UnH1L3B4XYa57XCA7aLpBQ` (title `Round8/Run5: the Hittite myths completed`), branch
`translation-round-8-run-5`, 2026-11-14 ≈ 07:24–10:20 UTC (the VM's clock), inside quota range A, one agent at a time
throughout. Model: Opus 5.5 for the coordinator, the three translators and the three reviewers.

## Done
**The plan row whole: 1,728 clauses in seven texts**, in the corpus `מיתוסים-חתיים-וחוריים/` (base: the HPM "Mythen der
Hethiter" editions, Rieken et al., CC BY-SA 4.0). Each text has `annotated-<KEY>.rtl.md` (the clause, פירוק, תרגומים –
HPM's German read after drafting –, הקבלה with tags, הערות), an intro, a built `translation-<KEY>.rtl.md`, and Proposals /
Progress in its project's `project.md`.

| Project | KEY: text | Clauses |
|---|---|---|
| `5-טליפינו-והאלים-הנעלמים/` (renamed from `5-טליפינו/`: the project follows its scope) | SG: the Sun-god's disappearance and return (CTH 323.1 + 323.2) | 219 |
| | LI: the Storm-god in Liḫzina (CTH 331.1 + 331.2) | 104 |
| | AZ: Anzili and Zukki (CTH 333) | 104 |
| | MU: the Storm-god's *mugawar* (CTH 325; 31 % damaged, taken whole) | 274 |
| `2-מחזור-קומרבי/` | LA: the Kingship of LAMMA (CTH 343.1–6) | 223 |
| | SI: the Song of Silver (CTH 364.1–6) | 193 |
| `6-גילגמש-החתי/` (new; pointed to from `אפוס-גילגמש/corpus.md` as its project 4) | GI: the Hittite Gilgameš (CTH 341.III.1–19) | 611 |

Also: project intros (`5-…/translation--intro.rtl.md` new, `2-…` updated), the built project translations, the print stub
`הדפסה/מיתוסים-חתיים-וחוריים/6-גילגמש-החתי.rtl.md` (and project 5's stub renamed), `parallels-index.md` rebuilt (356
rows; SG 3, LI 1, AZ 4, MU 1, LA 9, SI 7, GI 114 – most of GI's are comparisons with the Akkadian epic, filed under "No
specific verse"), `renderings.md` M4 (pre-set terms, names in §H2, reserved rows in §H3, the decisions after the drafts),
`translator-brief--round8-run5.md`, `corpus.md`; sources: 38 HPM editions (`sources/HPM/MYTH--CTH-323.1` … `341.III.19`,
parsed files committed, raw HTML ignored) and seven TLHdig folders (`CTH-323`, `325`, `331`, `333`, `341`, `343`, `364`);
the tool `tools/hittite_tools.py` (seven keys, six fixes, below). Shared files (one commit at the end): STATUS, the plan
row, guidelines §5.2 (one lesson) and §6.7 (the myth line extended), history (story + changelog), sources-registry,
tools.md, the HPM and TLHdig READMEs.

**Process:** the coordinator fetched the bases (a four-way parallel fetch), added the keys, fixed the renderings and wrote
the brief and per-key skeletons (≈ 25 minutes); then translator 1 (SG, LI, AZ; resumed for MU), translator 2 (LA, SI),
translator 3 (GI in two parts, resumed), each merged, verified and committed at once, with the tool bugs they reported
fixed between parts; then three independent reviewers (A: SG LI AZ MU – 40 lines; B: LA SI – 42 lines; C: GI – 192
lines), one at a time.

## Verification
- `python3 -I -B tools/hittite_tools.py verify --strict` (all 25 Hittite keys – the Laws, Instructions, rituals and myths):
  **0 problems**; entries = base lines and translation lines = annotated `>` lines for every key; IL ↔ dossier identical,
  HE ↔ dossier 60 entries identical. 10 repeated-line notices: the 8 old ones (justified in their entries) and two broken
  one-word lines (GI 11:5 ~ UL 2:6; GI 6:33 ~ UL 2:168 ~ LA 1:159), not real repeats.
- `hittite_tools.py selftest`: 69 lines, 0 failures.
- `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems.
- `tools/check_bible_quotes.py` over every `.md` of `מיתוסים-חתיים-וחוריים/`, its print stubs and `אפוס-גילגמש/corpus.md`:
  **0 problems** (translator 3 caught a misremembered Qoh 9:7 in its draft).
- The reviewers scanned notes and intros for the reserved words (the tool checks `>` lines only) and removed every use
  (`בעל`, `מדבר`, `הכה`, `מקדש`, `גורל`, `תהום` in a misquoted SB I 1).

## Key findings
**What the texts show of the ancient mind.** The vanishing-god myths are one Old Anatolian theology told five times: a
god's anger is a withdrawal, and his absence is a frozen or withered world (Ḫaḫḫima, "Torpor", seizes the land and binds
even the gods; the animals reject their young; gods and men starve at a feast that does not satisfy); the remedy is not
penance but persuasion – offerings, analogical spells, a path strewn for the god's return, the *mugawar* that entreats
him home, and the anger buried in bronze cauldrons in the dark earth. The texts repeat Telipinu's wording so closely that
one Hebrew serves all five (copied byte for byte). LAMMA and Silver complete the Kumarbi cycle's politics of heaven: a
protective god raised to kingship who neglects the gods' offerings and is brought down; a fatherless boy mocked as an
orphan ("you too, like us, an orphan child!") who learns that Kumarbi is his father and overpowers Sun and Moon. The
Hittite Gilgameš shows how a foreign epic was retold for Ḫattuša: the gods fashion Gilgameš (eleven cubits tall), the
scenes are compressed and re-numbered (nine spans instead of four, eight winds instead of thirteen, the hunter named
Šangašu), the prologue, Uruk's walls, Ninsun and the dreams on the road are absent from what survives, and the end of the
journey (Šiduri, Ur-šanabi, the stone figures, a voyage to Ullu) and the gods' sentence "Enkidu shall die, Gilgameš shall
not" keep the Babylonian core.

**The Bible in the apparatus** (all typological; details and verses in `parallels-index.md`): the withdrawn and "sleeping"
god (Ps 44:24, 78:65; 1 Kgs 18:27) and the withering of land and flock (Jer 14, Joel 1, Hag 1, Deut 28:23–24) as for
Telipinu; frost and ice before the god's cold (Job 37:10, Ps 147:17; SG 1:41); the right thigh as the portion (Lev 7:31;
SG 1:174); sins cast into the depths of the sea against anger buried in the dark earth (Mic 7:19 [divergence]; LI 1:36);
the good reed (Jer 6:20; SG 1:139); LAMMA's self-exaltation and fall in words only (Isa 14, Ezek 28, Ps 82); the gods
fashioning Gilgameš's figure against Gen 1:26–27 / 2:7 [divergence] (ALAM `תואר`, *šamnai-* `עיצב`: `צלם`, `דמות`, `יצר`
reserved, so the comparison is the apparatus's, not the line's); the giant hero (Gen 6:4) and the flood hero Ullu in words
only.

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- **Placement:** the vanishing-god myths join Telipinu's project, renamed `5-טליפינו-והאלים-הנעלמים/`; LAMMA and Silver
  join `2-מחזור-קומרבי/`; the Hittite Gilgameš is a new project 6 of the myth corpus (its tool and tables are Hittite),
  pointed to from `אפוס-גילגמש/corpus.md` (project 4 there), whose names bind it.
- **Scope:** CTH 325 (31 % damaged) taken whole (the survey left it to the lead: it is the plan row's named text); the
  small second versions 323.2 and 331.2 included as `2:` parts; the small vanishing-god fragments (CTH 322, 326–328, 332,
  334–337) and the other Telipinu versions left out (fragments); the Boğazköy Akkadian and Hurrian Gilgameš (CTH 341.I–II)
  out of scope (the plan).
- **Renderings (M4):** Ḫaḫḫima `קִפָּאוֹן`; *mugai-* / *mugawar* `הפציר` / `הפצרה`; {D}LAMMA `אֵל הַמָּגֵן`; Silver `כֶּסֶף`
  as a name; ALAM / *ešri-* `תואר`, *šamnai-* `עיצב`; {D}UTU-ŠĪ `שִׁמְשִׁי` (MU's `הוד מלכותי` aligned to the law table);
  *ambašši-* `שְׂרֵפָה?` (the translator's `עולה` replaced: Lev 1's word kept out of the line); *patalḫa-* `כבל־רגליים` (KU
  207 aligned with SI); the Gilgameš names from the Gilgameš corpus (Šanḫatu = `שַׁמְחַת` ★); the splits kept and the
  homonyms listed in M4.
- **Tool fixes** (each reported by a translator, fixed between parts, all keys re-verified): the name-vocalization finder
  (a preposition `אל` before `אֵל הַסְּעָרָה`; brackets inside a name); plene names accepted (`גילגמש`); MU's doubled clause
  178 → `178b`; an empty composite stored by `hpm2md.py` as manuscript "--" recovered (LA 1:82, and HE 21:2, a Round 5 entry
  now translated `[…] קומרבי […]`); the law {D}UTU-ŠI rows read the macron; the Ḫatra name row anchored to `{uru}`; the
  Enki row no longer reads {D}EN.KI.DÙ; `למחצה` exempt from the `מחץ` gate, `לגבור` from the `גבור` gate.

## Questions for the user
None that block. Two minor choices could be revisited:
1. Silver's name is translated (`כֶּסֶף`, as Hesiod's speaking names), not transliterated; and Ḫaḫḫima is `קִפָּאוֹן`.
2. The Hittite Gilgameš keeps the Akkadian epic's Hebrew where the Hittite has the Akkadian's word (GURUŠ `עלם`, DANNA
   `בֵּרוּ`), against the myth corpus's `בחור` / `פרסאות` elsewhere – so that the reader sees the Hittite retelling against
   the Babylonian one.

## Problems and skipped items
- **No quota stop**: every gate said GO (range A, `five_hour` `allowed`).
- **The print layouts** of projects 1, 2 and 5 are by rule (`rowBreak`), so nothing needed repair; their `SOURCE_MD5` is
  now obsolete (a layout session's work); project 6 has no layout module yet and prints by the folder's default rule.
- **Escapes left in the files** (`[היתר שער: …]`), each with its reason: the known gap that a gate licensed by lemma does
  not see a word inside a restoration (MU 44, 63; SI 2:37, 2:42), *šešdu* without a lemma (GI 1:55), a half-bracketed
  `{G]}IŠERIN` (GI 1:118), the clitic hiding *taknaš=at {d}UTU-aš* (MU 226); F30 firing instead of F31 when a word stands
  between EGIR-*pa* and the verb (SI 4:10); the `קרבו` gate blocking "his battle" (SI 1:5). Not fixed in this run.
- Open cruxes are listed in each project's Proposals (GI's broken divine name in 1:2, *mītar* 1:28, the cursing scene
  3:67–71 with no Babylonian parallel; MU's damaged middle; LA's order of fragments). Five of translator 3's fixed strings
  changed in review (GI 1:78, 1:169, 3:22, 3:33, 3:109; the new forms are in the Progress line).
- `verify` checks reserved words in `>` lines only; a notes/intros scan (skipping mentions of a word *as* reserved) would
  have saved the reviewers' manual scans – proposed, not built.

## Cross-corpus splits left for the lead
- GURUŠ `עלם` (GI, after the Akkadian epic's *eṭlu*) / `בחור` (HE, AP); DANNA `בֵּרוּ` (GI, after *bēru*) / `פרסאות` (HLPT, HE).
- *šamnai-* `עיצב` (GI) / `הציב` (HE 23:2, UL 3.1:179, 207) – kept by sense; *ara-* `רֵעַ` (GI) / `חבר` (the Laws);
  *šanḫ-* `דרש` (aligned with TE and IN in SG 1:65).
- *nanna-* `דחק` (SI) / `העביר?` (KU 277, of a word) / `הרחיק` (AM); *weya-* `בכה` (SI) / `צעק` (KU 146); *maniyaḫḫ-* `ניהל`
  (SI) / `הפקיד` (UL); *ninink-* `עורר` (LA) / `הניע` (UL); *išḫiya-* `כרך` (SG) / `חייב` (the Laws) – all kept by sense,
  listed in renderings M4.
- `קִפָּאוֹן` (Ḫaḫḫima) beside M4's *ekun-* `קָפָא` (one root for torpor and freezing: harmless, noted).

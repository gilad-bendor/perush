# Round 5, run 3 – the Ugaritic epics and a ritual selection: report

Session `session_01UnH1L3mJ547LSY8avuhBU7` (title `Round5/Run3: Ugaritic epics`), branch `translation-round-5-run-3`,
2026-10-31, inside quota range A (one agent at a time throughout). Model: Opus 5.5 for the coordinator and every
sub-agent.

## Done

**The whole selection of the plan row, plus three ritual texts, 1,424 lines**, as projects 4–7 of the existing corpus
`מיתוסים-אוגריתיים/` (the tool extended, not rebuilt). Each tablet has an annotated file (`annotated-<KEY>.rtl.md`: the CUC
line filled by the tool, the Hebrew, פירוק, תרגומים, הקבלה with tags, הערות), an intro, the built clean translation, and a
section (decisions, open decisions, progress with the three passes and the review, proposals) in its project's
`project.md`.

| Project | Tablets | Base | Lines |
|---|---|---|---|
| `4-אקהת/` | Aqhat: KTU 1.17, 1.18, 1.19 | CUC v0.2.8 (KTU³) | 189 + 76 + 224 = **489** |
| `5-כרתא/` | Kirta: KTU 1.14, 1.15, 1.16 | **EUPT 2025** for the readings (rank 1), on CUC's line skeleton | 300 + 136 + 267 = **703** |
| `6-הרפאים/` | the Rephaim: KTU 1.20, 1.21, 1.22; the royal funerary liturgy KTU 1.161 | CUC | 23 + 14 + 60 + 34 = **131** |
| `7-טקסים/` | rituals: KTU 1.40 (atonement / purification), 1.119 (a month's offerings and the prayer for a besieged city), 1.39 (a sacrifice list) | CUC | 43 + 36 + 22 = **101** |

Also:
- **EUPT:** its TextAPI serves KTU 1.14–1.16 (Kirta), CC BY-SA 4.0. Saved in `sources/EUPT/`: the README, the raw HTML
  (git-ignored by `sources/EUPT/.gitignore`, re-fetched by the tool) and the converted `text/KTU-<t>.json` / `.md`
  (committed). Converter: `tools/eupt2md.py`.
- **`ugarit_tools.py`:**
  - 16 new keys;
  - the `eupt` command;
  - EUPT's transliteration added to a Kirta line's licence text;
  - new gates: `נֶשֶׁר`, `אַלְמָנָה`, `יָתוֹם`, `מַצֵּבָה`, `קֶשֶׁת`, `בְּכוֹר`, `נֶדֶר`, and the root כפר;
  - formula checks for *rḫp* (the root רחף), *mt rpi* and *mt hrnmy*;
  - selftest rows;
  - licence fixes made by the translators (listed below).
- **`build_parallels_index.py`:**
  - the new keys added;
  - it keeps hand-written blocks in place (it had deleted the dossier's RV 1.32 note);
  - it writes a file only when the file changes.
- **Corpus files:**
  - `renderings.md` §12–§12.9 (the epics' names, terms, gates; one merge record per translator part; the review);
  - `translator-brief--ugaritic.md` §9;
  - `corpus.md` (the new projects, reading order, what is left);
  - `parallels-index.md` (Round 5 run 3's key findings at the top; 1,390 rows).
- **Print stubs:** `הדפסה/מיתוסים-אוגריתיים/{4-אקהת,5-כרתא,6-הרפאים,7-טקסים}.rtl.md`.
- **Shared files, edited once at the end:**
  - `STATUS.md` and the plan row;
  - guidelines §5.2 ("Ugaritic epics": four lessons) and §6.7 (the epics' renderings, false friends and traps);
  - `history.md` (the story and the changelog line);
  - `sources-registry.md` §4.4r (EUPT re-checked);
  - `tools.md`.

**Process:**
1. The coordinator set up the tool, renderings and brief, then checked EUPT and found Kirta.
2. Three translators worked one at a time, each resumed for its later tablets: translator 1 Aqhat (1.17; then 1.18–1.19),
   translator 2 Kirta (1.14; then 1.15–1.16), translator 3 the Rephaim + 1.161, then the rituals. Each did its own three
   passes. The coordinator merged every part's Proposals into the renderings, re-verified and committed.
3. One independent fidelity reviewer then went through all 16 tablets, resumed per batch.

The fifth-day dossier (`3-…`) was not edited. Its `project.md` came out of the new parallels builder byte-identical.

## Verification

- `python3 -I -B ugarit_tools.py verify --strict` (all 30 tablets): **0 problems**.
  - It lists 11 repeated-line differences: the 4 old ones and 7 new ones in Kirta and Aqhat. Each is the tablet's own
    change (command vs execution tense, *yḥd* / *aḥd*, *hyt* / *hmt* …) and is justified in its entry.
- `ugarit_tools.py selftest`: 51 lines, 0 failures.
- `ugarit_tools.py build`: run. The translations equal the `>` lines (checked by verify).
- `3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems (the dossier untouched).
- `tools/check_bible_quotes.py` over all 900 `.md` files of the folder outside `sources/`, the shared files included:
  **0 problems**.
- `build_parallels_index.py`: 1,390 rows.
- Three self-review passes per tablet (fidelity, consistency, Hebrew), logged in the project sections. Then an
  **independent fidelity review** of every tablet: **194 lines fixed**.
  - Kirta: 96 (1.15–1.16: 70; 1.14: 26).
  - Aqhat: 63.
  - The Rephaim and rituals: 35.
  - About 85% were brackets (the partial-restoration rule, words the tablet preserves). The rest:
    - two lost verbs (1.16 I:39–40, 61–62);
    - person, number and tense;
    - three imperatives that read like their executions;
    - an addition outside `( )`;
    - legible words left untranslated;
    - one participle that manufactured Gen 1:2's form (1.18 IV:32).
  - Every fix carries a `(תיקון סוקר: …)` note.
- `tools/sources_sync.py fetch` (started first thing): 1,358 ok. 9 FAILED: four OBO PDFs from zora.uzh.ch with their text
  extracts, and the ORACC epsd2 bulk (oracc is unreachable from this environment). 5 CHANGED (eBL Atrahasis-MB-Priv,
  Gilgamesh-OB-II, Maqlû II; two archive.org texts). None of them concerns Ugaritic.

## Key findings

The full list, with lines and tags, is at the top of `מיתוסים-אוגריתיים/parallels-index.md`.

**For the Bible**
1. **Gen 1:2's `מְרַחֶפֶת` has its Ugaritic cognate (*rḫp*) in Aqhat, used of birds of prey over a victim.**
   - Anat's eagles hover over Aqhat as he eats (1.18 IV:20, 31). Anat "hovered" (IV:32: past, as the reviewer corrected).
     The eagles hover over Danel's house of mourning (1.19 I:32).
   - With 1.108:8, the subject is always a winged goddess or her birds.
   - Deut 32:11's eagle over its young is the closer biblical use. Gen 1:2 is a [cognate] with a divergence of subject and
     setting.
2. **The son's duties** (1.17 I:26–33, four copies): the son takes his father's hand when he is drunk and carries him when
   he is sated with wine. Against **Gen 9:20–27** this is a [divergence]: in Ugarit a duty without shame, in Genesis the
   scene of Ham's sin. The son also sets up the stele of the father's god (2 Sam 18:18, Gen 35:14, 20).
3. **Danel**, the righteous of Ezek 14:14:
   - he judges the widow and the orphan at the gate (Ex 22:21, Deut 10:18, Jer 5:28);
   - he feeds a god as his guest, with Gen 18:2's idiom "he lifted his eyes and saw";
   - his son is granted after an incubation (Gen 15:2–4, 28:11; 1 Sam 1).
4. **Immortality offered and refused** (1.17 VI). Anat offers "no death". Aqhat answers "the death of all men I shall
   die" (Gen 2:17, 3:4, 3:22; Num 16:29).
5. **The curse on the rain**, "seven years … eight" (2 Sam 1:21, 1 Kgs 17:1). **The towns nearest the murder** are cursed
   "for all generations" (Deut 21:1–9, where such a town atones; Gen 4:10–12).
6. **Kirta and the Torah's war laws:**
   - the new bridegroom *goes out* to war (Deut 20:7, 24:5: the same three words, the opposite rule);
   - the besieger refuses the peace gifts (Deut 20:10–11);
   - the god's offer of wealth is refused for an heir, in a dream (1 Kgs 3:5–15, Gen 15:1–3);
   - the conditional vow (Gen 28:20–22) is forgotten and punished (Deut 23:22).
7. **The youngest made firstborn** (1.15 III:16 *abkrn* ↔ Deut 21:16 `לְבַכֵּר`): what the Torah forbids. The heir is
   nursed by goddesses (Isa 60:16).
8. **"Do gods die?"** (1.16 I–II ↔ **Ps 82:6–7**). The healer is pinched from clay by El (`קָרַץ טיט` ↔ Job 33:6), where
   Gen 2:7 has `יָצַר` and `עָפָר`: the verb is the finding. The son charges his father that he no longer judges the widow
   (Isa 1:23, Ps 82:3, 2 Sam 15:4), and the father curses the son (Gen 9:25, 49:4).
9. **The Rephaim** (`רְפָאִים`):
   - in 1.20–1.22 they are guests who ride to a feast;
   - in 1.161 they are summoned to a king's burial, the throne weeps, and Šapšu sends the king "down … to the dust".
     Against Isa 14:9 this is a [divergence], since there the Rephaim rise from their thrones; cf. Isa 47:1, Gen 3:19;
   - 1.161 ends in "peace" for the new king (Ps 122:7);
   - "the sacrifice of the shades" ↔ Ps 106:28 `זִבְחֵי מֵתִים`.
10. **KTU 1.40 against Lev 16 and Lev 4:**
    - the offering is "borne" (*nšʾ*) **up** to the father of the gods, not away, and it is a donkey or a ram;
    - the city's groups by status include the resident alien `גֵּר` (Lev 4; Num 15:26);
    - sins are listed as possibilities (Num 21:4 `וַתִּקְצַר נֶפֶשׁ`);
    - **the root כפר is not on the tablet**.
11. **KTU 1.119:** the prayer for a besieged city (Ps 121:1; Judg 11:30; Gen 28:22). **The famous "firstborn" offering is
    not on the tablet**: it reads *dkr* "male". So 2 Kgs 3:27 is a parallel of situation only.

**Famous details that are not on the tablets**, each found by a translator or the reviewer:
- the "wine of El's choice" (1.22 I:20);
- the firstborn of 1.119;
- Kirta's "eight wives" (they are brothers);
- the bridegroom exempt from war.

**For the ancient mind**
- A son is defined by his duties to his father, alive and dead.
- A goddess covets a bow, offers immortality, kills through her eagles, and weeps.
- A land dies with its heir. A father cuts open birds to find a bone to bury.
- A sister arms herself under a woman's dress: the answer to "shall women hunt?".
- A king wants sons more than gold. He obeys a dream to the letter, forgets one vow and sickens. His children cannot
  believe a king can die. The gods are silent seven times, and El makes the healer himself. Kingship is judging the widow.
- The dead kings come to feast, and are sent down to the dust. A whole city, its foreigners included, is purified with a
  donkey borne up to the gods.

## Decisions taken (minor, by the coordinator, under the user's standing rule)

- **Placement and scope:**
  - projects 4–7 of `מיתוסים-אוגריתיים/`;
  - KTU 1.161 added to the Rephaim project, although it is outside the plan's range 1.39–1.148, because it is the
    Rephaim's own ritual and the key witness for Isa 14:9 / Ps 88:11;
  - from the 1.39–1.148 selection: 1.119 and 1.39.
- **Kirta's base:** EUPT (2025, collated, CC BY-SA) is rank 1 for the readings. CUC keeps the line skeleton and the
  parses; about 55 departures from KTU³ are marked `EUPT:`. EUPT's translations and notes were read only after drafting.
- **The new gates and checks** (renderings §12): the *rḫp* check, and the root כפר gated to *kpr*.
- **Collisions settled:**
  - *adr* / *aliy(n)* both `אַדִּיר`: an accepted split, the formula kept.
  - *ḥẓ* takes `חֵץ`; *qṣʿt* stays `*חצים*`.
  - *zbl* "carried" `הַסָּבוּל`, so that *dw* keeps `דָּוֶה`.
  - *ṯrrt* `*הנשגבת*`: 1.100:64 was changed, since its old `*העזה*` collided with *ʿz*.
  - *šqrb* `הקריב` / *ṯʿ* `הגשה`; *rišyt* `ראשית`, so 1.22's *prʿ* became `*תנובה*`.
  - *ilnym* `אֵלִיִּים` (the corpus form).
- **Accepted as noted splits:**
  - *nrt* / *nyr* `נִיר`;
  - *ḥtṯ* / *ksp* `כסף`;
  - *aṯr* / *aḫr* `אחר`;
  - *ʔtw* / *bwʾ* `בא`;
  - *ddn* (1.161) `דִּדָּן` beside *dtn* `דִּתָּן`;
  - *dmm* / *dm*;
  - *smkt* / *mrym*.
- **Translators' tool fixes, all reviewed and kept:**
  - `eupt --tr`;
  - EUPT in the licence text;
  - the licences of the `אור`, `גד`, `כסא`, `נדר` and `גדל` gates (*ur* "fire", *npṣ* `בגדי`, the deletion in
    *k{i}si*, *mḏr*, *mdgl*);
  - the *rḫp* check accepts plene `ריחפ`.
- **The translators' own open decisions** (e.g. *uzr*, *l aḥwy*, *mhr št*, *ṯar um*, *npy* `טָהֳרָה`, *ġbr*
  `גִּבְרִי`, *ilhm* transcribed) stand as drafted. Each is translated with the defensible choice and the alternative is in
  its note; the full lists are in the project sections.

## Questions for the user

None that block, and none that need the user under the standing rule. Each tablet's `### Open decisions for the user`
lists its cruxes (about 40 in all, e.g. *uzr* "girded" or "offering", 1.16 *mtm* "men" or "the dead", *npy*
"purification" or "atonement"). Each is translated with a choice and noted. They are left for the user's review of the
drafts.

## Problems and skipped items

- **No quota stop.** Every gate said `GO range=A agents=1` (`five_hour`, `allowed`).
- **Left (recorded in `corpus.md`):**
  - the rest of KTU 1.39–1.148 (1.41 / 1.87, 1.43, 1.46 …);
  - 1.113 (the king list);
  - the letters.
- **Aqhat and the Rephaim stay on KTU³:** EUPT has not published them. Re-check them when it does.
- **Small items left in the Baal Cycle** (renderings §12.4–§12.9):
  - *dt* `*גידי*` against *gd* `גִּיד`;
  - *gmr* `*אביר*` against *ibr* `אַבִּיר`;
  - *yp* `יֹפִי` against *ysmt* `יופי`;
  - *irš* (1.3 V:28 `תחפצי`);
  - *išryt* / 1.3 V:31.
- **Coordinator slip, corrected:** the Kirta `project.md` was first made from Aqhat's by `sed` and carried the Aqhat
  translator's sections. Translator 2 noticed, and the sections were removed.
- **A builder fault, fixed:** a translator ran `build_parallels_index.py` once by mistake, and it deleted the dossier's
  RV 1.32 block. The translator restored the block by hand, and the builder now keeps such blocks.
- Some entries of repeated lines carry only a `[מקבילה: …]` note (the parse is at the first copy). The reviewer checked
  each one and added a פירוק wherever the line differs from its parallel.
- `sources_sync.py`: the 9 failures and 5 changes listed under Verification; none affects this run.

## Cross-corpus splits left for the lead

- *mšr* `מֵישָׁרִים` (1.40) is the cognate of Akk. *mīšarum* `מֵישָׁרִים` (the law corpus): consistent across the languages.
- *ġzr* `גִּבּוֹר` here, while the Hurro-Hittite myths gate `גִּבּוֹר` to UR.SAG. This is cross-language and allowed by the
  2026-10-30 principles; noted.
- *ṯʿ* `הגשה` / `הגיש`, and *dbḥ* / *šlmm* `זבח` / `שלמים`, against the Hittite rituals' SISKUR `טקס` / `מנחה`: different
  languages, noted.
- `אַלְמָנָה` / `יָתוֹם`: Ugaritic cognates here. The law corpus has *almattum* `אַלְמָנָה` and Sum. *nu-ma-su* `אלמנה`:
  consistent.
- `נֶשֶׁר` = Akk. *erû* `נֶשֶׁר` (Etana) = Ug. *nšr*: consistent.
- `קֶשֶׁת`: Ug. *qšt*, Akk. *qaštu* (Erra), and the Hesiod corpus: consistent across the languages.
- Danel `דָּנִאֵל`: the Bible's Dan'el. No other corpus has him.
- The fifth-day dossier: untouched. Run 2's four pending revisions and Ḫedammu remain for the lead.

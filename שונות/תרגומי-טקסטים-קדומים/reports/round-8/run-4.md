# Round 8, run 4 – Anzû and the epics of Akkade (report, 2026-11-14)

## Done
All four candidates (akkad-01, akkad-12, akkad-27, akkad-23) were translated whole into `אגדות-מלכים/`, the corpus of the
Akkade cycle. That is 1,651 entries, against the plan's ≈ 1,629.

| # | Project | Texts | Base | Entries |
|---|---|---|---|---|
| 8 | `8-אפוס-אנזו/` | The Epic of Anzû in all six eBL versions: OB II, OB III, SB I–III, NA Sultantepe | eBL L/1/10 | 694 |
| 9 | `9-אגדות-מלכי-אכד/` | Sargon the Conquering Hero, Sargon in Foreign Lands, Sargon the Lion, the King of Battle (EA 359), the Great Revolt against Narām-Sîn A and B, Narām-Sîn and the Lord of Apišal, Erra and Narām-Sîn | SEAL ×7; CDLI P270858 | 532 |
| 10 | `10-אפוסים-מלכותיים-בבליים-קדומים/` | The Epic of Zimrī-Lîm, the Song of Bazi, the Gulkišar epic | SEAL ×3 | 321 |
| 11 | `11-פסל-אידרימי/` | The statue inscription of Idrimi | CDLI P500443 (ATF) | 104 |

Each project has the following files:
- one annotated file per version or text;
- `translation--intro.rtl.md`;
- `translation.rtl.md`, built by `kings_tools.py build`;
- `project.md` (with an "Independent review" section) and `project--<part>.md`;
- a print stub in `הדפסה/אגדות-מלכים/`.

The corpus files were updated: `corpus.md`; `renderings.md` §13 (fixed before drafting; §13.7 holds the merges of parts AN1–ID1); and `parallels-index.md` (rebuilt with 161 new rows).

New tools: `tools/seal_base.py`, plus `kings_tools.py` keys AN, AK, RE and ID (a new base type, `tsv`, and new reserved-word gates, `RESERVED_R8`).

New sources:
- eBL: `Anzu-*`.
- SEAL: ten text folders.
- CDLI: EA 359 and Idrimi, both CC0 and committed.

The shared files were updated: `STATUS`, the plan row, `history`, `tools.md`, `sources-registry`, the guidelines §5.2, `fetch-recipes`, and the `MANIFEST` (new items only).

**How the work ran:** three translators worked one at a time, each resumed part by part: A did Anzû in three parts, B the Akkade legends in two, C the epics and then Idrimi. Two independent reviewers followed, one for Anzû and one for the rest. Everything ran in range A, 03:53–07:45 UTC.

## Verification
- `kings_tools.py verify AN|AK|RE|ID --strict`: OK, with 694 + 532 + 321 + 104 entries. Each `translation.rtl.md` equals its `>` lines.
- The corpus's older keys still pass after the gate changes: ET, CL, EA, SB, LC, LZ and ES all give `verify --strict` OK.
- `tools/check_bible_quotes.py` on every annotated file, intro, translation, project file and `renderings.md` of projects 8–11: 0 problems.
- The independent reviewers changed 33 lines in Anzû and 32 in projects 9–11. The changes covered tenses, brackets, consistency, the coordinator's word decisions, one echo removed (`דרך הים` at Idrimi 32), and words dropped at line ends.
- The translators reported 17 gate bugs. All were fixed in the tool between parts; no Hebrew was bent to get past a gate.
- The page layout of the four new translations has not been done. They have no `translation.rtl.layout.ts` yet, which is left for a layout session.

## Key findings
**The ancient mind**
- **Anzû:** power goes with the Tablet itself, not with any right to it: whoever holds it "decrees like Duranki". God after god refuses the fight. The mother goddess gives up her beloved son. Ea's counsel turns Anzû's own spell back on him: Anzû had sent each part of the arrow back to its source (reed, wood, sinew, feather), and Ea has Ninurta cut the wings so that the bird calls "wing to wing" and is undone. The victory ends in a list of names that makes one city's god the god of every city.
- **Anzû's versions:** the OB hero is Ningirsu of Lagaš. NA tells the victory as a storm of the four winds, ending with good news and joy in Ekur.
- **The Akkade legends:** battle is a "festival of men" that no warrior should miss. The heart is a chain of command: the mouth commands the heart, the heart commands the knees. The merchants of EA 359 say "we are not warriors". The gods "walk with" the king.
- **Zimrī-Lîm:** he is named in the womb, yet tells his soldiers "a mother like yours bore me". He drinks from the waterskins with the infantry, takes counsel from the tribal heads, asks the gods before battle, and hears Mari's prophet, the *āpilum* ("answerer"). He calls mercy his "taboo".
- **Bazi:** strikes the mountain for water; his house holds waters of "half life, half death".
- **Idrimi:** the exiled younger son refuses to be "a servant among the sons of Emar". He waits seven years among the Ḫapiru, reading birds and lambs, until the storm-god "turned to my head".

**Bible parallels, as the apparatus tags them**
- **Anzû:** Isa 14:12–15 (the run of "let me …") [divergence]. Isa 6:8 and 1 Kgs 22 (the council: "who will go?") [equivalent]. *ṣīt pî* `מוֹצָא פִי` (Deut 8:3) [cognate]. *ṭēma šakānu* `שִׂים טְעֵם` (Ezra 4:19), an Aramaic calque of the Akkadian [cognate]. Zech 9:13 (`דרך קשת`, "filled the bow"). Jer 23:18 ("stand in the council and hear"). OB Anu's "I will make his name great" (Gen 12:2). I.b+103 is *kamû* "bind", not "who is like", so Exod 15:11 is not there; III.b+115 does have "who is like you".
- **The Akkade legends:** Deut 20's vocabulary is not in the Akkadian, and every contact is a divergence:
  - the festival of battle, against the exemptions of Deut 20:5–8;
  - cutting the trees, against Deut 20:19;
  - the god walking with the king (AP ii3; EN 34–36), against Deut 20:4.

  Also EA 359 against the spies' report (Num 13); Judg 5:20 (the stars fight); *andurāru* `דרור` (Lev 25:10) [cognate].
- **The royal epics:**
  - Ps 21:5 (the king who "asks life" after victory);
  - asking the god before battle (1 Sam 23:2, 30:8);
  - *imtu* `חֵמָה` and *enēnu* `חָנַן` (Deut 7:2) [cognates];
  - water from the mountain (Exod 17:6; Ezek 47:1).
- **Idrimi:** Jephthah and David as exiles who gather outcasts (Judg 11:3; 1 Sam 22:2); Canaan and Ḥeth (Gen 10:15) [cognates]; Mt Ḫazi as Baal-Ṣaphon (Exod 14:2); the curses of Deut 27–29. The Ḫapiru are always `חַבִּירוּ`, and `עברים` appears only in the notes.

## Decisions taken (minor, by me)
- **Anzû's corpus:** `אגדות-מלכים/`, chosen for three reasons: its bird is the Anzud of project 6; it is a multi-version eBL text like Etana and the Cuthaean Legend; and its theme is kingship. Its tie to Enūma eliš is kept through the shared Hebrew `לוח הגורלות` (renderings §13).
- **The cognate rule settled the splits between translators:** *raqādu* keeps `רָקַד`, so Anzû's *mēlulu* moved to `שִׂחֵק`; *qerēbu* keeps `קָרַב`, so *ṭeḫû* moved to `נִגַּשׁ`; *balālu* `בָּלוּל` is licensed.
- *ayyābu* = `צַר` (Gilgameš precedent); *zību* = `זְאֵב`; *tamḫāru* = `עִמּוּת`, which made the ST title `מלך העִמּוּת`; *tāhāzu* = `מַעֲרָכָה`; *kiṣṣu* = `מָעוֹן`; Dagan = `דָּגָן` ★; *ēnu* = `אֵן`; *etēqu* Š = `נתן לחלוף`.
- The Gulkišar epic (47% broken) was translated, because the plan groups it with the other two epics. Its broken lines are entries with `[…]`.
- Sargon the Lion is a score: one entry per composite line. The fuller witness is translated and the other's differences go in the notes.

## Questions for the user
None.

## Problems and skipped items
- **Idrimi** rests on CDLI's ATF alone. ORACC's lemmatized and translated edition (`aemw/alalakh/idrimi`) was unreachable from the cloud (TLS). Five readings are marked uncertain (*urtabbiaku urāk*, *innaḫū*, *…anwanda*, *uzakki*, *ušaqqûšunu*) and wait for that check. Some readings in EA 359 (ST 21, 24′) should be checked against Rainey or Izre'el.
- SEAL's base had two defects, both fixed in `seal_base.py`: HTML attributes had leaked into Erra and Narām-Sîn 59, and a label read "ii5" for ii51. SEAL's lemmas have about 20 slips; the translators followed the form and listed each slip in the project files.
- No quota stop: the gate said GO throughout (status `allowed`).
- The page layout modules for projects 8–11 are not made (left for a layout session).

## Cross-corpus splits left for the lead
1. *bukru* `צֶאֱצָא` (Anzû, following Enūma eliš) against the Cuthaean Legend's *perʾu* `צֶאֱצָא`.
2. *šanû* "repeat, change" `שִׁנָּה` (here, the cognate) against §0.3's *nakāru* `שִׁנָּה` (Idrimi 96 has *nakāru*, AP v8 *šanû*).
3. The god Dagan: `דָּגָן` (Ugarit, the school canon, here) against Lipit-Ištar's `דָּגַן`.
4. *zību* `זְאֵב` (here) against Gilgameš's *zību* `עַיִט`. GU 17 now has *barbaru* and *zību* both as `זְאֵב`.
5. Anzû's *lītu* `תשועה` and *dalālu* `הלל`, both Psalms vocabulary that the school-canon corpus reserves. Consider them in the harmonization.
6. Anzû's refusal formula has `הר אין־גישה` (*âru*), which now shares a root with `ניגש` (*ṭeḫû*).

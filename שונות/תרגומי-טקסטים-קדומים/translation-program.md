# The translation program: Rounds 8–27 (2026-11-02)

The whole plan of the translations after Round 7, made at the user's request of 2026-11-02 ("curate the optimal set of
texts to translate … compile them into rounds … reach a state where *all* the rounds are ready for execution"). Rounds 6
and 7 are in `curated-translation-candidates.md`; this file takes over from Round 8. **Nothing here is started.** Each
round is started like the earlier ones, with `ancient-translations: orchestrate Round <N>`: the orchestrator reads its
table below as the round's plan (guidelines §5.1c), and each run's coordinator reads its candidates' entries in the
region files (`curation-surveys/program-2026-11/region--<region>.md`, by the ids in the last column) for the base, the
dictionaries, the risks and the set-up.

**Before the user's approval** of the decisions listed in `reports/program-2026-11--for-approval.md` (above all the
large texts), the program is a proposal: a round whose runs depend on a decision the user changes is re-scheduled (below).

## How it was made
- **The survey** (`curation-surveys/program-2026-11/`: `PLAN.md`, `BRIEF.md`): eleven regional survey agents, each
  starting from the 2026-10-21 world survey (or the Mesopotamian surveys and two measured inventories – all ETCSL
  compositions, all eBL chapters) and re-surveying under the criteria of guidelines §1 (2026-11-02), with the Bible
  ignored. They verified 158 of the program's 164 bases (the other six wait for access, or are keyed from scans) by fetching them on 2026-11-02 and measured most sizes and
  conditions by script. 272 candidates in all (`ranking.tsv`, merged by `scripts/merge.py`).
- **The score**, in the criteria's order: `5·C1 + 4·C2 + 3·C3 + 3·C4 + 2·C5` (C1 antiquity by the absolute date, C2 the
  fidelity of the voice, C3 what the culture treasured, C4 the inner world, C5 breadth; each 1–5, defined in `BRIEF.md`).
  Wholeness and readability are gates: a very short or highly damaged text is not a candidate, nor a text readable only
  "low"; a base that is not open is not a candidate (it waits).
- **The cut:** every candidate scoring 58 or more, readable and with an open base, grouped into whole-text runs; plus,
  under the exception of guidelines §1 (a culture still in its own ancient stage), the strongest text of each culture the
  folder has not touched (the Kumulipo, the Māori cosmogony, the Edda, the Norito and the Kojiki, the Muʿallaqāt, the
  Popol Vuh). The rest is in the reserve (below), each with its reason.
- **The runs** (`scripts/runs.py`): 118 runs, each one coordinator in one corpus, sized like the runs of Rounds 4–6
  (about 1,000–3,000 lines, or up to about 30,000 words of prose); a large text in consecutive runs. **Completing comes
  before starting:** a run that completes a partly translated text gets +10 (the Rigveda, the Yasna and the Vīdēvdād,
  the Aitareya Brāhmaṇa 7–8, the Decad, the King List, the Dumuzid cycle, the Akkade cycle, the Unas pyramid, papyrus
  Bremner-Rhind, the Ugaritic corpus, the Hittite myth cycles, the Kojiki and the Edda of the dossier's excerpts).
- **The rounds** (`scripts/schedule.py`, by priority): at most six runs a round; **one run per track** (a corpus, or a
  tool that two parallel runs must not both edit), a second only to fill a round – so every round can run three side by
  side in range B; at most two new-language set-ups a round; a run after the runs it depends on (a language's first
  run sets it up for the rest).
- **The biggest translations go last** (the user, 2026-11-03): a whole text split over two or more runs (the Rigveda's
  Books 1, 8, 9, 10, the Atharvaveda, the Shijing, the Kojiki, the Vīdēvdād, the Shangshu, the Analects, the Sutta
  Nipāta, the Oresteia, Plato's tetralogy, the Popol Vuh, the Iliad, the Odyssey) loses 40 + 3 per run of its text in
  priority, so these fill the rounds after the normal-size texts, the biggest last (Homer closes the program, Round 26).
  A language is set up by a normal-size run (Classical Chinese by the Zhouyi run), so its small texts need not wait.
- **The texts that wait for access are a dedicated last round**, Round 27 (the user, 2026-11-03), so that no round
  waits for them: Tell Fekheriye and Sefire (the Persée PDFs a person must save), the court poetry of Nineveh (SAA 3)
  and the scholars' letters (SAA 10) (ORACC, which fails TLS from the cloud). Each of its runs goes ahead only if its
  access has come, and is skipped otherwise.
- **New corpora** follow the renderings of their closest existing corpus, which bind them (Homer, tragedy and Plato:
  `הסיודוס/`; the Atharvaveda, the Upaniṣads and the epic: `הוודה-והאווסטה/`; the Avestan corpus of Round 7: the same,
  under the cousin-language rule of §6.7); each new corpus has its own tool module and renderings file, so that parallel
  runs never edit one file.

## Changing the program
Edit `scripts/runs.py` (a run's texts, its priority, a large-text decision), then run
`python3 -I scripts/schedule.py ranking.tsv <out-dir>` (from `curation-surveys/program-2026-11/`) and paste its
`rounds.md`, `large.md` and `reserve.md` over the three sections below. Rounds already finished keep their numbers: when
the program is re-scheduled mid-way, set `FIRST` in `schedule.py` to the next round and remove the finished runs.
Before each round, its orchestrator re-checks the bases of its runs (eBL, ORACC and the TLA are living editions) and the
hosts (`domains.txt`).

## The rounds

### Round 8

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (EG1) | The Pyramid Texts of Unas, the whole pyramid (≈ 225 spells: burial chamber, antechamber, corridor) | `חכמה-ובריאה-במצרים/` (a new project; project 2's PT spells embedded or pointed to) | AED-TEI (144 Unas records + later copies of the rest); Allen 2013 as the check | ≈ 1,630 lines |  | the Pyramid Text spells of project 2 | 2, 3, 4, 5, 6 | egypt-01 |
| 2 (SU1) | The Old Babylonian school canon: the Decad's eight texts not yet translated (Šulgi A, Lipit-Eštar A, Inana B, Enlil A, the Keš hymn, Enki's Journey, Inana and Ebiḫ, Nungal A) and the Tetrad (Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A) | a new corpus of the school canon (the coordinator names it); the Song of the Hoe and Bilgameš and Ḫuwawa A are embedded or pointed to | ETCSL (local zip) | 1,523 lines |  | the Decad (the Song of the Hoe done; Bilgameš and Ḫuwawa A in Round 6) | 1, 3, 4, 5, 6 | sumer-01, sumer-16 |
| 3 (RV2) | The Rigveda, Book 2 whole (the Gṛtsamada book) | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | 1,694 pādas |  | the Rigveda | 1, 2, 4, 5, 6 | iran-india-01 |
| 4 (AK1) | Epics of gods and kings: Anzû (all versions), the OB legends of the kings of Akkade (Sargon the Conquering Hero, Sargon in Foreign Lands …), the OB royal epics (Zimrī-Lîm, Bazi, Gulkišar), the statue of Idrimi | `אגדות-מלכים/` (the Akkade cycle completed); Anzû a new project (the coordinator decides its corpus) | eBL; SEAL; CDLI | 1,629 lines |  | the Akkade cycle (the Sargon Birth Legend and the Cuthaean Legend done) | 1, 2, 3, 5, 6 | akkad-01, akkad-12, akkad-27, akkad-23 |
| 5 (HI1) | The Hittite myths completed: the vanishing-god myths beside Telipinu (the Sun-god, the Storm-god's *mugawar* …), the rest of the Kumarbi cycle (LAMMA, Silver), the Hittite Gilgameš | `מיתוסים-חתיים-וחוריים/`; the Hittite Gilgameš pointed to from `אפוס-גילגמש/` | HPM; TLHdig | 1,704 clauses |  | the vanishing-god myths, the Kumarbi cycle, the Gilgameš tradition | 1, 2, 3, 4, 6 | anatolia-21, anatolia-20, anatolia-23 |
| 6 (AVS1) | The Yasna as recited: its Young Avestan chapters around the Gāthās (Y 0–27, 52, 55–72) | `האווסטה/` (the Avestan corpus begun in Round 7) | CAB | ≈ 12,300 words |  | the Yasna (Round 7's Old Avestan corpus) | 1, 2, 3, 4, 5 | iran-india-06 |

### Round 9

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV3) | The Rigveda, Book 3 whole (Viśvāmitra's book) | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | 2,357 pādas |  | the Rigveda | 2, 3, 4, 5, 6 | iran-india-02 |
| 2 (SU2) | Ur III kingship: the five long Šulgi hymns (B, C, D, E, X), the Death of Ur-Namma, the Sumerian King List whole (with the Rulers of Lagaš) | `אגדות-מלכים/` (new projects); the flood references' King List excerpt kept identical by script | ETCSL | ≈ 2,260 lines |  | the Sumerian King List (an excerpt in the flood references) | 1, 3, 4, 5, 6 | sumer-09, sumer-12, sumer-15 |
| 3 (UP1) | The principal Upaniṣads, each whole (Aitareya, Taittirīya, Kauṣītaki, Kena, Īśa, Muṇḍaka, Praśna, Māṇḍūkya, Śvetāśvatara) and the Aitareya Brāhmaṇa 7–8 whole (the royal consecration, around Śunaḥśepa) | a new corpus of the Upaniṣads (it follows the Vedic renderings); AB 7.13–18 of `4-העקדה/` kept identical by script | GRETIL; TITUS (local use: Kena, Muṇḍaka, Kauṣītaki) | ≈ 19,000 words |  | the Aitareya Brāhmaṇa's Śunaḥśepa (7.13–18) | 1, 2, 4, 5, 6 | iran-india-14, iran-india-10 |
| 4 (EG2) | The Instructions, each whole papyrus: papyrus Prisse (Kagemni's end, Ptahhotep), papyrus Sallier II (Amenemhat, the Satire of the Trades, the Hymn to the Nile), Any, Neferti, Khakheperreseneb | `חכמה-ובריאה-במצרים/` | AED-TEI | 618 papyrus lines (≈ 10,500 words) |  |  | 1, 2, 3, 5, 6 | egypt-02, egypt-07, egypt-08, egypt-06 |
| 5 (LE1) | The Ugaritic corpus completed: the remaining myths, hymns and charms, the divination and horse-medicine texts, the remaining well-preserved rituals, the letters (51) | `מיתוסים-אוגריתיים/` | CUC (Zenodo); EUPT | 2,120 lines |  | the Ugaritic corpus | 1, 2, 3, 4, 6 | levant-arabia-04, levant-arabia-12, levant-arabia-11, levant-arabia-03 |
| 6 (LE2) | Aramaic: the Words of Ahiqar (the Elephantine papyrus whole) and the Elephantine family and community archives | a new corpus of Aramaic (the coordinator names it) | Cowley 1923 (PD; read from the page images); DEAPS consulted; CAL | 943 lines | Imperial Aramaic |  | 1, 2, 3, 4, 5 | levant-arabia-01, levant-arabia-07 |

### Round 10

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV4) | The Rigveda, Book 4 whole (Vāmadeva's book) | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | 2,247 pādas |  | the Rigveda | 2, 3, 4, 5, 6 | iran-india-03 |
| 2 (SU3) | Sumerian myths of the gods: Lugal-e and Angim (Ninurta's two epics), Inana and Enki, Enlil and Ninlil, Enlil and Sud | a new corpus of Sumerian myths (the coordinator names it) | ETCSL | 1,859 lines |  |  | 1, 3, 4, 5, 6 | sumer-02, sumer-08, sumer-04 |
| 3 (EG3) | The great discourses and a real archive: the Eloquent Peasant, the Dialogue of a Man and his Ba, the Admonitions of Ipuwer; the Late Ramesside Letters | `חכמה-ובריאה-במצרים/` | AED-TEI | ≈ 2,000 papyrus lines (≈ 27,000 words) |  |  | 1, 2, 4, 5, 6 | egypt-03, egypt-04, egypt-05, egypt-17 |
| 4 (HI2) | The Hittite prayers: Muršili II's (the Plague Prayers …), the Middle Hittite prayers to the Sun-deities (Kantuzili, Arnuwanda and Ašmunikal), the later royal prayers (Muwatalli II, Puduḫepa) | a new corpus of Hittite prayers (the coordinator names it) | HPM | 2,639 clauses |  |  | 1, 2, 3, 5, 6 | anatolia-01, anatolia-02, anatolia-03 |
| 5 (AK2) | Old Babylonian hymns and prayers: the hymns to Ištar (Agušaya A + B, the Louvre hymn …), Papulegara, the hymns to Hammurabi, the Akkadian 'Man and his God', the OB laments | a new corpus of Akkadian hymns and prayers (the coordinator names it) | SEAL | 1,928 lines |  |  | 1, 2, 3, 4, 6 | akkad-02, akkad-15 |
| 6 (UP2) | The Bṛhadāraṇyaka Upaniṣad whole (Kāṇva) | the Upaniṣads corpus of UP1 | GRETIL | 3,109 clauses (19,536 words) |  |  | 1, 2, 3, 4, 5 | iran-india-12 |

### Round 11

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV5) | The Rigveda, Book 5 whole (the Atri book) | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | 2,860 pādas |  | the Rigveda | 2, 3, 4, 5, 6 | iran-india-04 |
| 2 (SU4) | Inana: Enheduana's Inana C and the Temple Hymns, Iddin-Dagan A, the Dumuzid–Inana songs (27 songs) | a new corpus of Inana's hymns and songs, or `קולות-היום-יום/` (the coordinator decides) | ETCSL | 2,258 lines |  |  | 1, 3, 4, 5, 6 | sumer-03, sumer-10, sumer-05 |
| 3 (EG4) | Papyrus Bremner-Rhind whole (the Songs of Isis and Nephthys, Bringing out Sokar, the Overthrowing of Apophis); the Victory Stela of Piye; the Heqanakht papers | `חכמה-ובריאה-במצרים/`; the fifth-day dossier's Apophis excerpts kept identical by script | AED-TEI | 1,215 lines (≈ 18,600 words) |  | the Apophis excerpts of the fifth-day dossier | 1, 2, 4, 5, 6 | egypt-16, egypt-20, egypt-18 |
| 4 (HI3) | Rites of kingship and the dead: the Old Hittite rituals for the royal couple, the royal funerary ritual *šalliš waštaiš* (with the journey of the soul), the rites of the deep gods and the new temple, the oracle inquiry into the deity of Arušna | `טקסי-שילוח-וטיהור/` (its scope widens: retitle) | HPM; TLHdig | ≈ 2,460 clauses |  |  | 1, 2, 3, 5, 6 | anatolia-19, anatolia-14, anatolia-17, anatolia-24 |
| 5 (UP3) | The Chāndogya Upaniṣad whole | the Upaniṣads corpus of UP1 | GRETIL | 3,235 clauses (17,907 words) |  |  | 1, 2, 3, 4, 6 | iran-india-13 |
| 6 (ZH4) | The Zhouyi core text (64 hexagram and 386 line statements) and the great Western Zhou bronze inscriptions (Da Yu ding, Mao Gong ding, Shi Qiang pan …) | a new corpus of Western Zhou texts (the coordinator names it) | Kanripo; the bronze texts' open transcriptions | ≈ 1,780 clause-lines + ≈ 3,000 characters | Classical Chinese |  | 1, 2, 3, 4, 5 | east-asia-05, east-asia-14 |

### Round 12

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV6) | The Rigveda, Book 6 whole (Bharadvāja's book) | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | 2,919 pādas |  | the Rigveda | 2, 3, 4, 5, 6 | iran-india-05 |
| 2 (SU5) | Sumerian companions II: the laments for Nibru and Eridug, the Dumuzid cycle completed (Dumuzid and Ĝeštin-ana, Inana and Bilulu), Lu-diĝira's two elegies, A Man and his God, proverb collections 4, 5, 8, 13 | `קינות-על-ערים/`, `העולם-התחתון/`, `קולות-היום-יום/`, `ספרות-החכמה-והצדיק-הסובל/` (one coordinator, one text at a time) | ETCSL | 1,577 lines |  | the Dumuzid cycle | 1, 3, 4, 5, 6 | sumer-11, sumer-13, sumer-17, sumer-18, sumer-22 |
| 3 (HI4) | The Hittite kings speak (I): Anitta, the Testament of Ḫattušili I, his Annals and the Palace Chronicle, the Proclamation of Telipinu, the Apology of Ḫattušili III | a new corpus of Hittite historical texts (our TLHdig composites) | TLHdig composites (HPM has no historical editions) | ≈ 1,080 lines |  |  | 1, 2, 4, 5, 6 | anatolia-06, anatolia-05, anatolia-04 |
| 4 (EG5) | Songs and hymns: the New Kingdom love songs (all collections), the Harpers' Songs, papyrus Chester Beatty IV (hymns to Amun-Re; the praise of the ancient writers), the Great Hymn to the Aten with the Amarna hymns | `חכמה-ובריאה-במצרים/` | AED-TEI | ≈ 1,000 lines (≈ 12,000 words) |  |  | 1, 2, 3, 5, 6 | egypt-11, egypt-12, egypt-14, egypt-13 |
| 5 (AK3) | Standard Babylonian hymns and prayers: the šuʾila prayers (the whole eBL corpus), the Great Hymns to Gula, the Great Prayers to Nabû and Ištar, the theological hymns, the Elevation of Babylon | the hymns-and-prayers corpus of AK2 | eBL; Rozzi 2024 (CC BY 4.0) | 2,768 lines |  |  | 1, 2, 3, 4, 6 | akkad-03, akkad-08, akkad-10, akkad-11, akkad-28 |
| 6 (AK4) | The pre-canonical incantations (Old Akkadian, Old Assyrian, OB: dogs, scorpions, snakes, birth, the evil eye …) | `כשפים-ולחשים/` (a new project); the love incantations of `קולות-היום-יום/1-…` pointed to | SEAL | 2,608 lines |  |  | 1, 2, 3, 4, 5 | akkad-04 |

### Round 13

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (SU6) | Lagaš: the hymns of divine justice (Nanše A, Ḫendursaĝa A), Gudea's statue inscriptions, the Pre-Sargonic Lagaš inscriptions (Enmetena's cone, Uru-inimgina's reforms and lament) | `בניין-המקדש/` (its scope widens to Lagaš: retitle) | ETCSL; CDLI composites (RIME 1, 3/1) | 464 lines + 2,277 short case lines |  |  | 2, 3, 4, 5, 6 | sumer-06, sumer-19, sumer-07 |
| 2 (AK5) | Wisdom, humour and divine love: the OB and MB wisdom and humour texts (A Father and his Son, the Scholars of Uruk, At the Cleaner's …), the Divine Love Lyrics of Babylon | `ספרות-החכמה-והצדיק-הסובל/` and `קולות-היום-יום/` (the coordinator decides) | SEAL; eBL | ≈ 2,520 lines |  |  | 1, 3, 4, 5, 6 | akkad-16, akkad-21 |
| 3 (PA1) | The Dhammapada whole | a new corpus of early Buddhism (the coordinator names it) | SuttaCentral (CC0; GitHub); GRETIL | 423 verses (≈ 1,700 pādas) | Pali |  | 1, 2, 4, 5, 6 | iran-india-20 |
| 4 (AK6) | The royal inscriptions of the kings of Akkade (Sargon, Rimuš, Maništušu, Narām-Sîn: the Old Akkadian originals and the OB copies) | `אגדות-מלכים/` (beside the legends of AK1) | CDLI (with English line by line) | 4,546 short case lines, 6,065 words |  |  | 1, 2, 3, 5, 6 | akkad-13 |
| 5 (EG6) | Tales and letters of the New Kingdom: the Contendings of Horus and Seth, the Report of Wenamun, the Doomed Prince and the other Late Egyptian tales, the Kadesh Poem, the Satirical Letter of Hori | `חכמה-ובריאה-במצרים/` | AED-TEI | ≈ 900 lines (≈ 19,000 words) |  |  | 1, 2, 3, 4, 6 | egypt-09, egypt-10, egypt-21, egypt-15, egypt-19 |
| 6 (PR1) | The Ācārāṅga, Book I whole (the Jain 'Bambhacera') | a new corpus (Jain Ardhamāgadhī; the coordinator names it) | GRETIL / TITUS | ≈ 9,600 words | Ardhamāgadhī Prakrit |  | 1, 2, 3, 4, 5 | iran-india-23 |

### Round 14

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (EG7) | Papyrus Ebers whole (the remedies, the incantations, the treatise on the heart and its vessels) | `חכמה-ובריאה-במצרים/` (or a new corpus of medicine) | AED-TEI | 2,340 lines (25,733 words) |  |  | 2, 3, 4, 5, 6 | egypt-22 |
| 2 (NO1) | The Poetic Edda, the mythological poems whole (Völuspá, Hávamál, Vafþrúðnismál, Grímnismál, Hymiskviða, Þrymskviða, Lokasenna, Skírnismál …) | a new corpus of the Edda; the fifth-day dossier's HY excerpt kept identical by script | Bugge 1867 (PD) | 744 stanzas (≈ 2,530 long lines) | Old Norse | the fifth-day dossier's HY excerpt | 1, 3, 4, 5, 6 | europe-north-01 |
| 3 (HI5) | Oaths and duties: the Military Oaths, the royal instructions (the border governor, the bodyguard, the mayor of Ḫattuša …) | `חוקים-ובריתות/` | HPM; TLHdig | ≈ 1,190 lines |  |  | 1, 2, 4, 5, 6 | anatolia-12, anatolia-13 |
| 4 (SU7) | Sumerian myths II: Inana and Šu-kale-tuda, Nanna-Suen's Journey to Nibru, the Marriage of Martu, the Heron and the Turtle and the Home of the Fish | the Sumerian myths corpus of SU3 | ETCSL | 1,087 lines |  |  | 1, 2, 3, 5, 6 | sumer-20, sumer-21, sumer-24, sumer-23 |
| 5 (AK7) | Ritual and exorcism: Bīt mēseri (with the seven sages), Marduk's Address to the Demons, the akītu (New Year) ritual of Babylon | `כשפים-ולחשים/` | eBL; SEAL | 1,423 lines |  |  | 1, 2, 3, 4, 6 | akkad-05, akkad-09, akkad-07 |
| 6 (AK8) | Omens: Šumma ālu, the tablets on human behaviour (T. 80–120, as edited on eBL), and the Venus section of Enūma Anu Enlil (EAE 55–57) | a new corpus of omens (the coordinator names it) | eBL (Project Ālu Geneva) | 2,125 lines |  |  | 1, 2, 3, 4, 5 | akkad-06, akkad-26 |

### Round 15

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (HI7) | The Neo-Hittite kings speak: the Hieroglyphic Luwian inscriptions of Karatepe (Azatiwada, with Çineköy) and Karkamiš (Katuwa, Yariri, Kamani …) | a new corpus (Hieroglyphic Luwian) | eDiAna remake (morpheme-glossed) | ≈ 1,160 §§ (≈ 4,350 words) | Hieroglyphic Luwian |  | 2, 3, 4, 5, 6 | anatolia-26, anatolia-27 |
| 2 (ZH7) | The Chuci core: the Li Sao, the Nine Songs, the Tianwen, the two Summons of the Soul | a new corpus of the Chuci | Kanripo; zh.wikisource | 1,320 lines |  |  | 1, 3, 4, 5, 6 | east-asia-07, east-asia-04, east-asia-08, east-asia-15 |
| 3 (ZH8) | The Zhuangzi, the seven Inner Chapters | a new corpus of the Masters (the coordinator names it) | Kanripo (the SBCK branch) | 13,681 characters (≈ 2,970 lines) |  |  | 1, 2, 4, 5, 6 | east-asia-10 |
| 4 (GR1) | Greek sacred law and the afterlife: the Bacchic-Orphic gold tablets (all), the Cyrene cathartic law, the Law Code of Gortyn | a new corpus (the coordinator names it); or `טקסי-שילוח-וטיהור/` and `חוקים-ובריתות/` | Diels / Bernabé (PD parts); SEG; Comparetti 1893 (PD; keyed from the scans) | ≈ 1,090 lines |  |  | 1, 2, 3, 5, 6 | greece-italy-04, greece-italy-19, greece-italy-18 |
| 5 (HI6) | Healing and purification: the 'Old Women's' rituals (Maštigga …), the Kizzuwatna purification and birth rites (Papanikri, Ammiḫatna …), more sending-away rituals (Zarpiya, Ambazzi against slander …) | `טקסי-שילוח-וטיהור/` | HPM | ≈ 2,540 clauses |  |  | 1, 2, 3, 4, 6 | anatolia-15, anatolia-16, anatolia-18 |
| 6 (HH1) | The Homeric Hymns, the whole collection (33 hymns: Demeter, Apollo, Hermes, Aphrodite …) | `הסיודוס/` (it shares Hesiod's base and tool) | Perseus + treebank | 2,342 lines |  |  | 1, 2, 3, 4, 5 | greece-italy-03 |

### Round 16

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (GR2) | The Linear B religious tablets (Pylos Tn, Un, Fr, Es, Ep; Knossos Fp, Gg, Fs …) | a new corpus (Mycenaean Greek) | DAMOS (CC BY-NC-SA) | ≈ 60–100 tablets | Mycenaean Greek (Linear B) |  | 2, 3, 4, 5, 6 | greece-italy-20 |
| 2 (AK9) | The Amarna letters, the great kings' correspondence (EA 1–44: Egypt with Babylon, Mittani, Assyria, Ḫatti, Alašiya) | a new corpus of letters (the coordinator names it) | CDLI (transliteration); Knudtzon 1915 (PD) | 2,695 lines |  |  | 1, 3, 4, 5, 6 | akkad-14 |
| 3 (OP1) | The Old Persian royal inscriptions, with Behistun whole (Darius, Xerxes …) | a new corpus (Old Persian) | TITUS (local use); Kent 1953 checked by a person | ≈ 1,000 lines (DB 414) | Old Persian |  | 1, 2, 4, 5, 6 | iran-india-26 |
| 4 (HI8) | The Hittite kings speak (II): Muršili II's own dossier (the Tawananna), the Ten-Year Annals, the Deeds of Šuppiluliuma I | the historical corpus of HI4 | TLHdig composites | ≈ 1,530 lines |  |  | 1, 2, 3, 5, 6 | anatolia-08, anatolia-07, anatolia-09 |
| 5 (ZH9) | The Daodejing, 81 chapters, and the Liji's Tan gong I–II (mourning and ritual) | the Masters corpus of ZH8 | Kanripo | 1,179 + 2,242 lines |  |  | 1, 2, 3, 4, 6 | east-asia-09, east-asia-17 |
| 6 (LE3) | Words in stone II: the Phoenician royal and funerary inscriptions (Byblos, Sidon: Eshmunazar, Tabnit …) and the Old Aramaic royal inscriptions (Zakkur, Hadad, Panamuwa, Bar-Rakib, Nerab, Taymāʾ; Tell Fekheriye and Sefire are run LE6, the last round) | `מילים-באבן/` | Lidzbarski, Cooke (PD); KAI | ≈ 380 lines |  |  | 1, 2, 3, 4, 5 | levant-arabia-06, levant-arabia-05 |

### Round 17

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (HI9) | The treaties of Ḫattuša: the Akkadian treaties (Šattiwaza, Šunaššura …) and the Hittite vassal treaties (Ḫuqqana, Tuppi-Teššub …) | `חוקים-ובריתות/` | HPM | ≈ 2,620 clauses |  |  | 2, 3, 4, 5, 6 | anatolia-10, anatolia-11 |
| 2 (LE4) | South Arabia and Aksum: the Haramic confession texts, Karibʾil Watar's annals, the royal inscriptions of ʿEzana | a new corpus (the coordinator names it) | CIH, RES (PD; Sabaweb per word; no DASI); Littmann 1913 (PD; keyed from the page images) | ≈ 550 lines | Sabaic; Ge'ez |  | 1, 3, 4, 5, 6 | levant-arabia-09, levant-arabia-13, africa-pacific-09 |
| 3 (PR2) | Aśoka's edicts (the Major Rock Edicts, the Kalinga edicts, the Pillar Edicts, the minor edicts) | a new corpus (or with PR1's) | Hultzsch 1925 (PD; keyed from the scans) | ≈ 35 inscriptions |  |  | 1, 2, 4, 5, 6 | iran-india-27 |
| 4 (PC1) | The Kumulipo whole (16 wā) | a new corpus of the Pacific (the coordinator names it) | the 1889 Hawaiian text (PD); Liliʻuokalani 1897 (PD) | 2,102 lines | Hawaiian |  | 1, 2, 3, 5, 6 | africa-pacific-01 |
| 5 (UP4) | From the Mahābhārata, three whole episodes: the Bhagavad Gītā, Nala and Damayantī, Sāvitrī | the Upaniṣads corpus, or a new corpus of the epic (the coordinator decides) | GRETIL (BORI) | 1,898 verses |  |  | 1, 2, 3, 4, 6 | iran-india-28, iran-india-29 |
| 6 (RV9.1) | The Rigveda, Book 9 whole – part 1 of 2 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 1,880 pādas (Book 9: 3,760) |  | the Rigveda | 1, 2, 3, 4, 5 | iran-india-17 |

### Round 18

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (PR3) | Hāla's Sattasaī, the 700 (village love lyrics) | the Prakrit corpus of PR1 | Weber (PD) | 1,400 lines |  |  | 2, 3, 4, 5, 6 | iran-india-32 |
| 2 (JA1) | The Norito: Engishiki book 8, all 27 prayers | a new corpus of ancient Japan (the coordinator names it) | zh.wikisource (PD text); ONCOJ (CC BY 4.0) for the Old Japanese | 11,065 characters | Old Japanese (kanbun and senmyō) |  | 1, 3, 4, 5, 6 | east-asia-03 |
| 3 (LE5) | Arabia before Islam: the Muʿallaqāt (the seven odes) and the Cairn of Hāniʾ (Safaitic laments of one kin group) | a new corpus (the coordinator names it) | Lyall 1894 (PD); OCIANA (Zenodo, CC BY 4.0) | 829 verses + 197 inscriptions | Classical Arabic; Safaitic |  | 1, 2, 4, 5, 6 | levant-arabia-02, levant-arabia-08 |
| 4 (RV9.2) | The Rigveda, Book 9 whole – part 2 of 2 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 1,880 pādas (Book 9: 3,760) |  | the Rigveda | 1, 2, 3, 5, 6 | iran-india-17 |
| 5 (AVS2) | The Vīdēvdād whole – part 1 of 2 (fargards 1–11) | `האווסטה/`; Vd 2 of `הוודה-והאווסטה/3-המבול/` kept identical by script | CAB | ≈ 13,000 words |  | Vīdēvdād 2 | 1, 2, 3, 4, 6 | iran-india-07 |
| 6 (ZH1) | The Shijing whole – part 1 of 3: the Daya and the Song (the court and temple hymns) | a new corpus of the Shijing | Kanripo (CC BY-SA 4.0); zh.wikisource | 2,431 lines |  |  | 1, 2, 3, 4, 5 | east-asia-01 |

### Round 19

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (PC2) | Te Rangikāheke's 'Ko nga tama a Rangi' and the Māui cycle (Grey 1854) | the Pacific corpus of PC1 (its own project) | Grey 1854 (PD) | 11,053 words | Māori |  | 2, 3, 4, 5, 6 | africa-pacific-02 |
| 2 (RV10.1) | The Rigveda, Book 10 whole – part 1 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,138 pādas (Book 10: 6,416) |  | the Rigveda | 1, 3, 4, 5, 6 | iran-india-08 |
| 3 (AVS3) | The Vīdēvdād whole – part 2 of 2 (fargards 12–22) | `האווסטה/` | CAB | ≈ 13,000 words |  | Vīdēvdād 2 | 1, 2, 4, 5, 6 | iran-india-07 |
| 4 (ZH2) | The Shijing whole – part 2 of 3: the Xiaoya | the Shijing corpus | Kanripo | ≈ 2,700 lines |  |  | 1, 2, 3, 5, 6 | east-asia-01 |
| 5 (ZH5) | The Shangshu, the authentic (New Text) chapters – part 1 of 2 | the Western Zhou corpus of ZH4 | Kanripo | ≈ 1,900 lines |  |  | 1, 2, 3, 4, 6 | east-asia-06 |
| 6 (AV1) | The Atharvaveda (Śaunaka) whole – part 1 of 4 (books 1–6) | a new corpus of the Atharvaveda (it follows the renderings of `הוודה-והאווסטה/`) | VedaWeb / GRETIL | ≈ 2,850 half-verses (whole: 11,387) |  |  | 1, 2, 3, 4, 5 | iran-india-15 |

### Round 20

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (AVS4) | The Yašts, all 21 (Mithra, Anāhitā, Tištrya, the Glory and Yima's fall …) | `האווסטה/` | CAB; Geldner | ≈ 1,007 stanzas |  |  | 2, 3, 4, 5, 6 | iran-india-18 |
| 2 (RV10.2) | The Rigveda, Book 10 whole – part 2 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,138 pādas (Book 10: 6,416) |  | the Rigveda | 1, 3, 4, 5, 6 | iran-india-08 |
| 3 (ZH3) | The Shijing whole – part 3 of 3: the Guofeng (the airs of the states) | the Shijing corpus | Kanripo | ≈ 2,700 lines |  |  | 1, 2, 4, 5, 6 | east-asia-01 |
| 4 (AV2) | The Atharvaveda (Śaunaka) whole – part 2 of 4 (books 7–12) | a new corpus of the Atharvaveda (it follows the renderings of `הוודה-והאווסטה/`) | VedaWeb / GRETIL | ≈ 2,850 half-verses (whole: 11,387) |  |  | 1, 2, 3, 5, 6 | iran-india-15 |
| 5 (ZH6) | The Shangshu, the authentic chapters – part 2 of 2 | the Western Zhou corpus | Kanripo | ≈ 1,900 lines |  |  | 1, 2, 3, 4, 6 | east-asia-06 |
| 6 (PA2) | The Sutta Nipāta whole – part 1 of 2 | the early-Buddhism corpus | SuttaCentral (CC0) | ≈ 2,300 pādas |  |  | 1, 2, 3, 4, 5 | iran-india-19 |

### Round 21

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV10.3) | The Rigveda, Book 10 whole – part 3 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,138 pādas (Book 10: 6,416) |  | the Rigveda | 2, 3, 4, 5, 6 | iran-india-08 |
| 2 (AV3) | The Atharvaveda (Śaunaka) whole – part 3 of 4 (books 13–18) | a new corpus of the Atharvaveda (it follows the renderings of `הוודה-והאווסטה/`) | VedaWeb / GRETIL | ≈ 2,850 half-verses (whole: 11,387) |  |  | 1, 3, 4, 5, 6 | iran-india-15 |
| 3 (PA3) | The Sutta Nipāta whole – part 2 of 2 | the early-Buddhism corpus | SuttaCentral (CC0) | ≈ 2,300 pādas |  |  | 1, 2, 4, 5, 6 | iran-india-19 |
| 4 (JA2) | The Kojiki whole – part 1 of 3 (the preface and Book 1 (the age of the gods), with its songs) | the ancient-Japan corpus; the fifth-day dossier's KJ excerpt kept identical by script | zh.wikisource; ONCOJ for the songs | ≈ 14,000 characters |  | the fifth-day dossier's KJ excerpt | 1, 2, 3, 5, 6 | east-asia-02 |
| 5 (TR1) | Aeschylus, the Oresteia whole – part 1 of 2 (Agamemnon) | a new corpus of Greek tragedy | Perseus; GLAUx | 1,673 lines |  |  | 1, 2, 3, 4, 6 | greece-italy-08 |
| 6 (PL1) | Plato, the death of Socrates – part 1 of 2: Euthyphro, Apology, Crito | a new corpus of Plato | Perseus (Burnet, PD); GLAUx | ≈ 18,000 words |  |  | 1, 2, 3, 4, 5 | greece-italy-15 |

### Round 22

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (PA4) | The Therīgāthā whole (the first Buddhist nuns) | the early-Buddhism corpus | SuttaCentral (CC0) | 524 verses (≈ 2,100 pādas) |  |  | 2, 3, 4, 5, 6 | iran-india-21 |
| 2 (RV1.1) | The Rigveda, Book 1 whole – part 1 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,581 pādas (Book 1: 7,745) |  | the Rigveda | 1, 3, 4, 5, 6 | iran-india-09 |
| 3 (AV4) | The Atharvaveda (Śaunaka) whole – part 4 of 4 (books 19–20) | a new corpus of the Atharvaveda (it follows the renderings of `הוודה-והאווסטה/`) | VedaWeb / GRETIL | ≈ 2,850 half-verses (whole: 11,387) |  |  | 1, 2, 4, 5, 6 | iran-india-15 |
| 4 (JA3) | The Kojiki whole – part 2 of 3 (Book 2, with its songs) | the ancient-Japan corpus; the fifth-day dossier's KJ excerpt kept identical by script | zh.wikisource; ONCOJ for the songs | ≈ 14,000 characters |  | the fifth-day dossier's KJ excerpt | 1, 2, 3, 5, 6 | east-asia-02 |
| 5 (TR2) | Aeschylus, the Oresteia whole – part 2 of 2 (the Libation Bearers, the Eumenides) | the tragedy corpus | Perseus; GLAUx | ≈ 2,120 lines |  |  | 1, 2, 3, 4, 6 | greece-italy-08 |
| 6 (PL2) | Plato, the death of Socrates – part 2 of 2: the Phaedo | the Plato corpus | Perseus; GLAUx | ≈ 23,000 words |  |  | 1, 2, 3, 4, 5 | greece-italy-15 |

### Round 23

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (TR3) | Sophocles: Antigone and Oedipus Tyrannus | the tragedy corpus | Perseus; GLAUx | 2,883 lines |  |  | 2, 3, 4, 5, 6 | greece-italy-11, greece-italy-12 |
| 2 (PL3) | Plato, the Symposium | the Plato corpus | Perseus; GLAUx | 17,414 words |  |  | 1, 3, 4, 5, 6 | greece-italy-16 |
| 3 (RV1.2) | The Rigveda, Book 1 whole – part 2 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,581 pādas (Book 1: 7,745) |  | the Rigveda | 1, 2, 4, 5, 6 | iran-india-09 |
| 4 (JA4) | The Kojiki whole – part 3 of 3 (Book 3, with its songs) | the ancient-Japan corpus; the fifth-day dossier's KJ excerpt kept identical by script | zh.wikisource; ONCOJ for the songs | ≈ 14,000 characters |  | the fifth-day dossier's KJ excerpt | 1, 2, 3, 5, 6 | east-asia-02 |
| 5 (ZH10) | The Analects whole – part 1 of 2 (books 1–10) | the Masters corpus | Kanripo | ≈ 1,960 lines |  |  | 1, 2, 3, 4, 6 | east-asia-13 |
| 6 (IL1) | Homer, the Iliad whole – part 1 of 6 (books 1–4) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | 1, 2, 3, 4, 5 | greece-italy-01 |

### Round 24

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (TR4) | Euripides' Bacchae and [Aeschylus'] Prometheus Bound | the tragedy corpus | Perseus; GLAUx | 2,485 lines |  |  | 2, 3, 4, 5, 6 | greece-italy-13, greece-italy-10 |
| 2 (RV1.3) | The Rigveda, Book 1 whole – part 3 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,581 pādas (Book 1: 7,745) |  | the Rigveda | 1, 3, 4, 5 | iran-india-09 |
| 3 (IL2) | Homer, the Iliad whole – part 2 of 6 (books 5–8) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | 1, 2, 4, 5, 6 | greece-italy-01 |
| 4 (ZH11) | The Analects whole – part 2 of 2 (books 11–20) | the Masters corpus | Kanripo | ≈ 1,960 lines |  |  | 1, 2, 3, 5, 6 | east-asia-13 |
| 5 (AM1) | The Popol Vuh whole – part 1 of 3 | a new corpus of the Americas | Brasseur 1861 (PD); Christenson's © text as a local control only | ≈ 2,900 lines (whole: 8,717) | Colonial K'iche' |  | 1, 2, 3, 4, 6 | americas-01 |
| 6 (RV8.1) | The Rigveda, Book 8 whole – part 1 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,021 pādas (Book 8: 6,064) |  | the Rigveda | 1, 3, 4, 5 | iran-india-16 |

### Round 25

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (RV8.2) | The Rigveda, Book 8 whole – part 2 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,021 pādas (Book 8: 6,064) |  | the Rigveda | 2, 3, 5, 6 | iran-india-16 |
| 2 (IL3) | Homer, the Iliad whole – part 3 of 6 (books 9–12) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | 1, 3, 4, 6 | greece-italy-01 |
| 3 (AM2) | The Popol Vuh whole – part 2 of 3 | a new corpus of the Americas | Brasseur 1861 (PD); Christenson's © text as a local control only | ≈ 2,900 lines (whole: 8,717) |  |  | 1, 2, 4, 5 | americas-01 |
| 4 (RV8.3) | The Rigveda, Book 8 whole – part 3 of 3 | `הוודה-והאווסטה/`, a new project per book | VedaWeb (CC BY 4.0) | ≈ 2,021 pādas (Book 8: 6,064) |  | the Rigveda | 2, 3, 5, 6 | iran-india-16 |
| 5 (IL4) | Homer, the Iliad whole – part 4 of 6 (books 13–16) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | 1, 3, 4, 6 | greece-italy-01 |
| 6 (AM3) | The Popol Vuh whole – part 3 of 3 | a new corpus of the Americas | Brasseur 1861 (PD); Christenson's © text as a local control only | ≈ 2,900 lines (whole: 8,717) |  |  | 1, 2, 4, 5 | americas-01 |

### Round 26

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (IL5) | Homer, the Iliad whole – part 5 of 6 (books 17–20) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | – | greece-italy-01 |
| 2 (IL6) | Homer, the Iliad whole – part 6 of 6 (books 21–24) | a new corpus of Homer (it follows the renderings of `הסיודוס/`) | Perseus + the treebank; GLAUx | ≈ 2,600 lines (whole: 15,687) |  |  | – | greece-italy-01 |
| 3 (OD1) | Homer, the Odyssey whole – part 1 of 4 (books 1–6) | the Homer corpus | Perseus + the treebank; GLAUx | ≈ 3,030 lines (whole: 12,107) |  |  | – | greece-italy-02 |
| 4 (OD2) | Homer, the Odyssey whole – part 2 of 4 (books 7–12) | the Homer corpus | Perseus + the treebank; GLAUx | ≈ 3,030 lines (whole: 12,107) |  |  | – | greece-italy-02 |
| 5 (OD3) | Homer, the Odyssey whole – part 3 of 4 (books 13–18) | the Homer corpus | Perseus + the treebank; GLAUx | ≈ 3,030 lines (whole: 12,107) |  |  | – | greece-italy-02 |
| 6 (OD4) | Homer, the Odyssey whole – part 4 of 4 (books 19–24) | the Homer corpus | Perseus + the treebank; GLAUx | ≈ 3,030 lines (whole: 12,107) |  |  | – | greece-italy-02 |

### Round 27

| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |
|---|---|---|---|---|---|---|---|---|
| 1 (LE6) | Tell Fekheriye (the Aramaic side) and the Sefire treaties I–III, added to LE3's Old Aramaic corpus | `מילים-באבן/` (the Old Aramaic corpus of LE3) | the Persée PDFs a person saves (reports/program-2026-11--for-approval.md §3.1) | ≈ 213 lines (Fekheriye 23, Sefire ≈ 190) |  |  | 2, 3, 4 | levant-arabia-05 |
| 2 (OR1) | The court poetry of Nineveh (SAA 3), its well-preserved core: Assurbanipal and Nabû, the Coronation Hymn, the elegy of a woman dead in childbirth, the righteous sufferer's prayer to Nabû, the Psalm to Uruk, the Underworld Vision of an Assyrian Prince | the hymns-and-prayers corpus of AK2 (the Underworld Vision pointed to from `העולם-התחתון/`) | ORACC saao/saa03 (CC BY-SA) – needs ORACC access | ≈ 620 lines |  |  | 1, 3, 4 | akkad-22 |
| 3 (OR2) | The letters of the scholars to Esarhaddon and Assurbanipal (SAA 10) whole – part 1 of 2: the astrologers and the haruspices (the eclipses, the substitute king) | the letters corpus of AK9 | ORACC saao/saa10 (CC BY-SA) – needs ORACC access | ≈ 195 letters (whole: c. 390; to be measured when ORACC answers) |  |  | 1, 2 | akkad-20 |
| 4 (OR3) | The letters of the scholars (SAA 10) whole – part 2 of 2: the exorcists, the physicians and the lamentation priests (the royal family's health, the king's grief) | the letters corpus of AK9 | ORACC saao/saa10 – needs ORACC access | ≈ 195 letters |  |  | 1, 2 | akkad-20 |

## The decisions on large texts (for the user's approval)

- **AVS1** (from Round 8): the Yasna's Young Avestan chapters are LARGE by repetition: the lead decided to translate them whole, completing the Yasna.
- **UP2** (from Round 10): the Bṛhadāraṇyaka (3,109 clauses) is LARGE: the lead decided to translate it whole.
- **UP3** (from Round 11): the Chāndogya (3,235 clauses) is LARGE: the lead decided to translate it whole.
- **AK8** (from Round 14): Šumma ālu (≈ 120 tablets) and Enūma Anu Enlil are LARGE and only partly edited: the lead chose their self-contained parts on eBL (T. 80–120; EAE 55–57), not the wholes.
- **NO1** (from Round 14): the mythological poems (5,054 printed half-lines, ≈ 2,530 long lines) are LARGE only by half-lines: the lead decided one run, whole.
- **ZH8** (from Round 15): the Zhuangzi's Inner Chapters (≈ 3,000 lines) are borderline LARGE: the lead decided to translate them whole.
- **AK9** (from Round 16): the Amarna archive (EA 1–382, 13,232 lines) is LARGE: the lead chose its self-contained first part, the great kings' letters (EA 1–44), not the whole.
- **RV9.1** (from Round 17): the Rigveda's Book 9 is LARGE (3,760 pādas): the lead decided to translate it whole, in 2 runs (the whole Rigveda over the program).
- **UP4** (from Round 17): the Mahābhārata (73,438 ślokas) and the Rāmāyaṇa (18,761 verses) whole are declined; three whole episodes instead.
- **AVS2** (from Round 18): the Vīdēvdād (913 §§, 26,264 words) is LARGE: the lead decided to translate it whole, in 2 runs (completing Vd 2).
- **ZH1** (from Round 18): the Shijing (305 poems, 7,805 lines) is LARGE: the lead decided to translate it whole, in 3 runs.
- **RV10.1** (from Round 19): the Rigveda's Book 10 is LARGE (6,416 pādas): the lead decided to translate it whole, in 3 runs (the whole Rigveda over the program).
- **AV1** (from Round 19): the Atharvaveda is LARGE (5,838 stanzas): the lead decided to translate it whole, in 4 runs.
- **ZH5** (from Round 19): the Shangshu's authentic chapters (3,810 lines) are LARGE: the lead decided to translate them whole, in 2 runs.
- **AVS4** (from Round 20): the Yašts (≈ 1,007 stanzas) are LARGE: the lead decided to translate all 21.
- **PA2** (from Round 20): the Sutta Nipāta (≈ 4,600 pādas) is LARGE: the lead decided to translate it whole, in 2 runs.
- **JA2** (from Round 21): the Kojiki (41,521 characters + 112 songs) is LARGE: the lead decided to translate it whole, in 3 runs (it completes the KJ excerpt).
- **TR1** (from Round 21): the Oresteia (3,796 lines) is LARGE: the lead decided to translate the trilogy whole, in 2 runs.
- **PL1** (from Round 21): the first tetralogy (40,910 words) is LARGE: the lead decided to translate it whole, in 2 runs.
- **RV1.1** (from Round 22): the Rigveda's Book 1 is LARGE (7,745 pādas): the lead decided to translate it whole, in 3 runs (the whole Rigveda over the program).
- **ZH10** (from Round 23): the Analects (3,920 lines) are LARGE: the lead decided to translate them whole, in 2 runs.
- **IL1** (from Round 23): the Iliad (15,687 lines) is LARGE: the lead decided to translate it whole, in 6 runs.
- **RV8.1** (from Round 24): the Rigveda's Book 8 is LARGE (6,064 pādas): the lead decided to translate it whole, in 3 runs (the whole Rigveda over the program).
- **AM1** (from Round 24): the Popol Vuh (8,717 lines) is LARGE, and after 500 CE: the lead decided to translate it whole, in 3 runs, as the Americas' one central text (the exception).
- **OD1** (from Round 26): the Odyssey (12,107 lines) is LARGE: the lead decided to translate it whole, in 4 runs.
- **OR2** (from Round 27): SAA 10 (c. 390 letters) is LARGE: the lead decided to translate it whole, in 2 runs by the scholars' professions, in the last round (it needs ORACC).
## Waiting on access (not in the program until their bases open)
- **Tell Fekheriye and Sefire** (Old Aramaic): their editions are free on Persée, which refuses scripts – a person must save
  the PDFs (`sources/_records-only--Words-in-stone/README.md`; the five articles are listed in `region--levant-arabia.md`).
  When saved, run LE6 – **the last round, Round 27, dedicated to them** – translates them into LE3's Old Aramaic corpus.
- **ORACC** (TLS fails from the cloud): SAA 3 (court poetry) and SAA 10 (the scholars' letters) are runs OR1–OR3 of
  Round 27, the last. Only aids wait beside them: RINAP's English, ePSD2 (the Sumerian morphology – the Sumerian runs of
  Rounds 8–14 work without it, marking the forms "our analysis"; restoring its zip in a local session improves them),
  Assurbanipal's Prism A and the Middle Assyrian Palace Decrees (records only), eCUT (Urartian: not readable with
  control anyway).
- **Udug-ḫul** (Geller 2016 ©; OAPEN's and De Gruyter's bot walls), **the Mari prophetic letters** (Archibab's TLS),
  **Šurpu** (not on eBL), **Erra II–V**, **the Edict of Ammiṣaduqa**, **Šūpê-amēlu**, **the Fox** (eBL has no lines),
  **the Lachish and Arad letters** (no open edition found), **Karatepe's Phoenician side** (no open edition).

## The reserve (272 candidates − 164 in the program)

| Candidate | Text | Score | Why not in the program |
|---|---|---|---|
| africa-pacific-07 | I La Galigo, NBG 188 vol. 1 (the gods' council, Batara Guru's descent, Luwuq, the rice goddess, the first generations) | 61 | not readable with control (readable: low) |
| africa-pacific-08 | The Ngaju death-cult texts (Schärer, *Der Totenkult der Ngadju Dajak*: the myths and the *Tantolak matei*, "pushing away the dead") | 57 | not readable with control (readable: low) |
| africa-pacific-15 | The Mansi creation songs and bear-feast songs (Munkácsi, *Vogul népköltési gyűjtemény* I and III) | 57 | not readable with control (readable: low) |
| africa-pacific-04 | Ko nga moteatea me nga hakirara (Grey's Māori song collection), whole | 54 | LARGE: kept in reserve |
| africa-pacific-12 | The Akan proverbs (Rattray's 830, drawn from Christaller's 3,600) | 54 | below the program's cut (score 54) |
| africa-pacific-16 | A Sakha olonkho, one whole poem (*Er Sogotokh* or Pekarsky's field texts) | 54 | not readable with control (readable: low) |
| africa-pacific-14 | Tantara ny Andriana eto Madagascar (the Merina royal traditions) | 51 | LARGE: kept in reserve |
| africa-pacific-06 | Mangaian myths, songs and dirges (Gill 1876: the songs and *eva* dirges with their originals) | 49 | not readable with control (readable: low) |
| africa-pacific-17 | Kaladlit okalluktualliait (the Greenlandic tales, written by Greenlanders for Rink) | 48 | not readable with control (readable: low) |
| africa-pacific-03 | The hero cycles of Grey 1854, Part I (Rupe and Hinauri, Kae, Tuhuruhuru, Tāwhaki, Wahieroa–Rata–Whakatau, Poutini; pp. 31–69) | 47 | below the program's cut (score 47) |
| africa-pacific-05 | The sacred songs of the hula (Emerson's corpus: the altar prayers to Laka, the hula chants, Pele and Hiʻiaka chants) | 47 | below the program's cut (score 47) |
| africa-pacific-10 | The Religious System of the Amazulu (Callaway), whole: I Unkulunkulu, II Amatongo (the ancestors), III Izinyanga zokubula (divination), IV Abatakati ( | 47 | LARGE: kept in reserve |
| africa-pacific-11 | Specimens of Bushman Folklore (Bleek & Lloyd), whole: the Mantis, Sun and Moon (incl. the origin of death), the stars, animal fables, legends, poetry, | 47 | not readable with control (readable: low) |
| africa-pacific-13 | The Masai: their language and folklore (Hollis), Parts II–IV: stories, proverbs and sayings, customs, prayers and ceremonies in Maa | 42 | not readable with control (readable: low) |
| akkad-17 | Gilgameš: the versions not yet translated (OB Schøyen₁₋₃ rest, UM, CUNES, SM; MB Boğazköy₁₋₃, Emar₁₋₂, Megiddo, Nippur, Ur, Ugarit₁₋₂, Priv₁; NA x, y) | 69 | highly damaged (45% broken): the rule of 2026-11-02 |
| akkad-18 | Udug-ḫul (Utukkū lemnūtu), the canonical bilingual series against evil demons | 69 | the base is not open (Geller 2016 ©, bot wall; Thompson 1903 superseded) |
| akkad-19 | The Mari prophetic and dream letters (ARM 26/1, the letters of prophets, dreamers and diviners to Zimrī-Lîm) | 69 | the base is not verified (Archibab's TLS fails; CDLI's ARM 26/1 entries mostly empty) |
| akkad-24 | Sargon II's Eighth Campaign, the letter to Aššur (714 BCE) | 56 | below the program's cut (score 56) |
| akkad-25 | The NA royal annals in their final editions: Esarhaddon's Nineveh A prism (RINAP 4 1) and Sennacherib's Taylor/Chicago prism (RINAP 3/1 22) | 56 | below the program's cut (score 56) |
| akkad-29 | The Late Babylonian chronicles and historical-literary texts (ABC 7 the Nabonidus Chronicle, ABC 17, 22, 23; the BHLT epics; the Dynastic Prophecy BHL | 52 | below the program's cut (score 52) |
| americas-10 | Teocuicatl: the Twenty Sacred Hymns (with their Nahuatl gloss) | 56 | not readable with control (readable: low) |
| americas-18 | The Palenque inscriptions: Temple of the Inscriptions tablets + Temple XIX platform + the Cross Group tablets | 56 | not readable with control (readable: low) |
| americas-12 | Leyenda de los Soles ("Manuscript of 1558"), whole | 54 | not readable with control (readable: low) |
| americas-02 | Florentine Codex Book 6: Rhetoric and Moral Philosophy (the huehuetlatolli), whole | 53 | LARGE: kept in reserve |
| americas-22 | The Iroquois Book of Rites (the Condolence: the Canienga and Onondaga books) | 52 | not readable with control (readable: low) |
| americas-19 | The Huarochirí manuscript (*Runa yndio ñiscap machoncuna*), whole | 50 | not readable with control (readable: low) |
| americas-15 | Rabinal Achí (*Xajooj Tun*), whole | 49 | not readable with control (readable: low) |
| americas-03 | Florentine Codex Book 3: The Origins of the Gods, whole | 48 | below the program's cut (score 48) |
| americas-11 | Cantares mexicanos, whole (91 song sets + 1) | 48 | not readable with control (readable: low) |
| americas-17 | Book of Chilam Balam of Chumayel, whole (its Maya chapters) | 47 | not readable with control (readable: low) |
| americas-20 | *Ayvu Rapyta* (the Mbyá "foundation of speech"), whole | 46 | not readable with control (readable: low) |
| americas-04 | Florentine Codex Book 7: The Sun, Moon, Stars and the Binding of the Years, whole | 45 | below the program's cut (score 45) |
| americas-07 | Florentine Codex Book 2: The Ceremonies, whole | 43 | LARGE: kept in reserve |
| americas-08 | Florentine Codex Book 4: The Art of Divination, whole | 43 | LARGE: kept in reserve |
| americas-21 | Iroquoian cosmology, the Onondaga version (Hewitt 1903) | 43 | not readable with control (readable: low) |
| americas-06 | Florentine Codex Book 5: The Omens (with its appendix of "superstitions"), whole | 42 | below the program's cut (score 42) |
| americas-13 | Anales de Cuauhtitlan, whole | 41 | not readable with control (readable: low) |
| americas-05 | Florentine Codex Book 1: The Gods, whole | 40 | below the program's cut (score 40) |
| americas-09 | Florentine Codex Book 12: The Conquest of Mexico, whole | 40 | LARGE: kept in reserve |
| americas-16 | Annals of the Kaqchikels (*Memorial de Sololá*, Xajil chronicle), Brinton's text §§1–164 | 39 | not readable with control (readable: low) |
| americas-14 | Ruiz de Alarcón, the Nahuatl incantations (*Tratado de las supersticiones*, 1629: all the charms) | 38 | below the program's cut (score 38) |
| anatolia-28 | The KI.LAM festival (CTH 627) | 68 | LARGE (6,339 lines, 27% broken) and repetitive; the surveyor advised against it |
| anatolia-29 | The Urartian royal annals and the Meher Kapısı offering list (Argišti I's Ḫorḫor annals, Sarduri II's annals, Išpuini and Minua's niche) | 60 | not readable with control (readable: low) |
| anatolia-25 | The letters of the Hittite kingdom: the Maşat (Tapikka) letters (CTH 186–190) and the royal correspondence (CTH 151–183: Tawagalawa, Milawata, Puduḫep | 58 | LARGE (≈ 7,000 lines), mostly administrative (C3 1) |
| anatolia-22 | The Hurrian-milieu tales: the Sun-god, the Cow and the Fisherman (363, with the Ištar hymn on the same tablet KUB 24.7), Kešši the hunter (361.I, Hitt | 52 | below the program's cut (score 52) |
| east-asia-19 | The Zuozhuan, whole | 60 | LARGE (198,226 characters): declined |
| east-asia-21 | The Mencius, 7 books | 60 | LARGE (7,401 lines): kept in reserve |
| east-asia-11 | The Man'yōshū, 20 books | 59 | LARGE (4,516 poems), after 500 CE: declined |
| east-asia-12 | The Orkhon inscriptions: Kül Tegin, Bilge Qaghan, Tonyukuk | 56 | below the program's cut (score 56) |
| east-asia-20 | The Shanhaijing, 18 books | 54 | LARGE: kept in reserve |
| east-asia-16 | The Old Tibetan Chronicle (PT 1287) | 52 | below the program's cut (score 52) |
| east-asia-24 | The rest of the Chuci core: the Nine Pieces (Jiu zhang), Far Roaming, Divination, The Fisherman, Nine Changes (Jiu bian) | 52 | below the program's cut (score 52) |
| east-asia-23 | The Old Tibetan funerary narratives (PT 1042, 1068, 1134, 1136) | 51 | not readable with control (readable: low) |
| east-asia-25 | The Secret History of the Mongols, 282 sections | 48 | not readable with control (readable: low) |
| east-asia-18 | The Nihon shoki, books 1–2 (the Age of the Gods, with its "one writing says" variants) | 47 | LARGE: kept in reserve |
| east-asia-22 | The five surviving Fudoki | 44 | LARGE: kept in reserve |
| egypt-25 | The Pyramid Texts, the whole corpus (Unas to the queens of Pepi II) | 79 | a duplicate: the Pyramid Texts as a whole corpus is LARGE and repetitive; the Unas pyramid (EG1) is the whole object chosen |
| egypt-23 | Setne Khamwas I and II (Demotic) | 53 | not readable with control (readable: low) |
| egypt-24 | The Myth of the Sun's Eye (pLeiden I 384, Demotic) | 49 | not readable with control (readable: low) |
| europe-north-08 | The Martyrdom of Queen Šušanik (*Martvilobay Šušanikisi*, by Iakob Curtaveli, her confessor) | 63 | not readable with control (readable: low) |
| europe-north-07 | Movses Khorenatsi, *History of the Armenians*, Book I ("the genealogy of Greater Armenia": Hayk and Bel, Aram, Ara the Fair and Šamiram, Tigran and Až | 55 | below the program's cut (score 55) |
| europe-north-03 | The Finnic world-creation song (*Maailmansyntyruno*: the bird nesting on the sea, the egg, heaven, earth, sun and moon from it) in its regional redact | 54 | below the program's cut (score 54) |
| europe-north-05 | Arhippa Perttunen's epic songs, dictated to Lönnrot at Latvajärvi (Viena Karelia), April 1834: all 29 epic recordings of one singer (the Sampo, Tuonel | 54 | LARGE: kept in reserve |
| europe-north-09 | The pre-Christian runic inscriptions: the Elder-Futhark corpus (Gallehus, Tune, Eggja, Björketorp, Stentoften, Kylver, the bracteates) with the long p | 53 | below the program's cut (score 53) |
| europe-north-21 | The Latvian mythological dainas: the songs of Saule (the Sun), Mēness, Pērkons, Dievs and the Sons of God, Laima | 53 | the base is not verified (see its region file) |
| europe-north-04 | The Finnic origin charms (*synnyt*: the origins of iron, fire, the serpent, the bear) with the bear-feast songs (*karhunpeijaiset*): one full recordin | 52 | below the program's cut (score 52) |
| europe-north-02 | The pagan skaldic poems on gods, the dead and kings: Ragnarsdrápa, Haustlǫng, Ynglingatal, Eiríksmál, Hákonarmál, Sonatorrek, Arinbjarnarkviða, Háleyg | 51 | below the program's cut (score 51) |
| europe-north-11 | Táin Bó Cúailnge, Recension I | 50 | not readable with control (readable: low) |
| europe-north-20 | The Ossetian Nart tales: Gardanti's Digor collection (1927) as entered in the TITUS Nart corpus | 50 | not readable with control (readable: low) |
| europe-north-17 | Snorri's Edda: the Prologue and Gylfaginning | 49 | below the program's cut (score 49) |
| europe-north-12 | Togail Bruidne Da Derga (the Destruction of Da Derga's Hostel) | 48 | not readable with control (readable: low) |
| europe-north-06 | The Poetic Edda, the heroic poems: Völundarkviða, the Helgi poems, the Sigurd and Guðrún cycle, Atlakviða, Atlamál, Guðrúnarhvöt, Hamðismál | 47 | LARGE: kept in reserve |
| europe-north-22 | The Four Branches of the Mabinogi (Pwyll, Branwen, Manawydan, Math) | 47 | below the program's cut (score 47) |
| europe-north-10 | The West Germanic charms: the two Merseburg charms with the Old High German and Old Saxon charm corpus (Steinmeyer: 25 charms), and the twelve Old Eng | 46 | below the program's cut (score 46) |
| europe-north-16 | Old Irish wisdom: Audacht Morainn, Tecosca Cormaic, Trecheng Breth Féne (the Triads of Ireland) | 46 | not readable with control (readable: low) |
| europe-north-18 | Beowulf | 45 | LARGE: kept in reserve |
| europe-north-14 | Immram Brain and Echtrae Chonnlai (the Voyage of Bran; the Adventure of Connla): the Otherworld across the sea | 43 | not readable with control (readable: low) |
| europe-north-13 | Cath Maige Tuired (the Second Battle of Mag Tuired) | 42 | not readable with control (readable: low) |
| europe-north-19 | The West Germanic heroic remnants: the Hildebrandslied, Widsith, Deor | 41 | below the program's cut (score 41) |
| europe-north-15 | Three Ulster tales: Scéla Mucce Meic Dathó, Longes mac nUislenn, Aided Óenfir Aífe | 40 | not readable with control (readable: low) |
| greece-italy-21 | The Iguvine Tables (the seven bronzes of the Atiedian Brethren) | 69 | not readable with control (readable: low) |
| greece-italy-23 | Virgil, the Aeneid (12 books) | 66 | LARGE, and late by the absolute date (C1 2): declined |
| greece-italy-07 | Pindar, the Victory Odes (Olympian, Pythian, Nemean, Isthmian: 45 odes) | 61 | LARGE (3,459 lines): kept in reserve |
| greece-italy-06 | The Theognidea (Books I–II) | 57 | below the program's cut (score 57) |
| greece-italy-14 | Aristophanes, the Frogs | 57 | below the program's cut (score 57) |
| greece-italy-17 | Herodotus, the Histories (9 books) | 57 | LARGE (185,048 words): declined |
| greece-italy-09 | Aeschylus, the Persians | 55 | below the program's cut (score 55) |
| greece-italy-24 | Livy, Ab urbe condita Book 1 (the kings: Romulus to the expulsion of Tarquin) | 54 | below the program's cut (score 54) |
| greece-italy-05 | The Orphic Hymns (the proem to Musaeus + 87 hymns, each with its incense) | 52 | below the program's cut (score 52) |
| greece-italy-25 | Ovid, the Fasti (the Roman ritual year, January–June) | 49 | LARGE, late: declined |
| greece-italy-22 | Cato, De agricultura (whole, 162 chapters, with the farm prayers and charms) | 48 | below the program's cut (score 48) |
| iran-india-22 | Dīgha Nikāya, whole (34 long discourses: the Brahmā's Net, the Fruits of Recluseship, the Great Final Nibbāna DN 16, the Aggañña DN 27 – the Buddhist  | 69 | LARGE (141,565 words): the Dīgha Nikāya whole is declined |
| iran-india-11 | Śatapatha Brāhmaṇa, Book 1, whole (the new- and full-moon offerings: the gods and asuras, Manu and the fish, the sacrificial essence passing from man  | 62 | LARGE: the Śatapatha Brāhmaṇa is not taken whole; its two excerpts stay excerpts |
| iran-india-24 | Kuṟuntokai, whole (401 short love poems, each a speaker's voice in a coded landscape) | 59 | below the program's cut (score 59) |
| iran-india-30 | The Mahābhārata, whole | 58 | LARGE: declined (three whole episodes in UP4) |
| iran-india-31 | The Rāmāyaṇa of Vālmīki, whole | 58 | LARGE: declined |
| iran-india-25 | Puṟanāṉūṟu, whole (400 poems of the "outer" world: kings and war, hero stones, the widow, the bard's poverty, "every town is our town") | 57 | LARGE: kept in reserve |
| levant-arabia-17 | The Aksumite royal inscriptions of ʿEzana (the pagan ones invoking Maḥrem, and the turn to the "Lord of Heaven") | 55 | below the program's cut (score 55) |
| levant-arabia-19 | The Six Poets (al-Aʿlam al-Shantamarī's school canon: Imruʾ al-Qays, al-Nābigha, ʿAntara, Ṭarafa, Zuhayr, ʿAlqama) | 53 | LARGE: kept in reserve |
| levant-arabia-20 | Hebrew letters of the last century of Judah: the Lachish ostraca (the legible ones), the Arad Eliashib archive, the Siloam inscription | 53 | the base is not verified (see its region file) |
| levant-arabia-10 | The Mufaḍḍaliyyāt (al-Mufaḍḍal al-Ḍabbī's anthology, whole) | 52 | below the program's cut (score 52) |
| levant-arabia-14 | The Nabataean tomb inscriptions of Hegra (the whole set of dated façade texts) | 50 | below the program's cut (score 50) |
| levant-arabia-18 | The dīwān of al-Khansāʾ (the elegies for Ṣakhr and Muʿāwiya) | 50 | the base is not verified (see its region file) |
| levant-arabia-21 | The Letter of Mara bar Serapion to his son | 43 | below the program's cut (score 43) |
| levant-arabia-15 | Philo of Byblos, the Phoenician History (Eusebius, *PE* I.9.20–I.10.55) | 40 | below the program's cut (score 40) |
| levant-arabia-16 | Lucian (?), On the Syrian Goddess (*De Dea Syria*, whole) | 35 | below the program's cut (score 35) |
| sumer-25 | Udug-ḫul, the canonical Sumerian–Akkadian exorcism series (16 tablets) | 70 | the base is not open (Geller 2016 ©, bot wall) |
| sumer-14 | The Sumerian letters, the rest of ETCSL: the Royal Correspondence of Ur (21 letters, 3.1.*), the Isin–Larsa royal letters (3.2.*) and the nine remaini | 57 | below the program's cut (score 57) |

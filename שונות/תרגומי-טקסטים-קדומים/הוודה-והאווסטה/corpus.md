# The Vedic and Avestan corpus (`הוודה-והאווסטה/`) – "Vedic Genesis"

The folder's **first Sanskrit and Avestan corpus** (Round 5 run 1, 2026-10-30; world list Tier 1 #5). Texts of
Indo-Iranian peoples who **never met Israel**: every parallel to the Bible is a shared motif (the apparatus says so in
words), and the corpus is a far-away control for what is universal and what is particular in Gen 1–3, 6–9 and 22 – and,
for the flood, a three-way control beside the finished Mesopotamian flood corpus (`../סיפורי-המבול-המסופוטמיים/`).
The second purpose (guidelines §1) is as strong: the oldest oral poetry of India (kept word for word, accents and all,
for three thousand years), the Brāhmaṇas' ritual thinking, and Zoroastrian Iran.

## The texts (reading order = the commentary's priority)
| # | Project | KEY | Text | Lines | Bible (look for) |
|---|---|---|---|---|---|
| 1 | `1-מזמורי-הראשית/` | RV10.129 | Rigveda 10.129 "Then there was neither non-being nor being" | 28 | Gen 1:1–2 |
|  |  | RV10.121 | 10.121 the Golden Embryo ("To which god …?") | 40 | Gen 1:1–2, 1:9 |
|  |  | RV10.72 | 10.72 the birth of the gods (Aditi, Dakṣa; "being from non-being") | 36 | Gen 1:1–2 |
|  |  | RV10.190 | 10.190 Order and Truth from heat; the year; "as before" | 12 | Gen 1:14–18 |
|  |  | RV10.90 | 10.90 the Man (Puruṣa) sacrificed | 64 | Gen 1:26–27, 2:21–24 |
| 2 | `2-אינדרה-והנחש/` | RV1.32 | 1.32 Indra and the serpent of the waters (the whole hymn; the fifth-day dossier's excerpt aligned by script) | 60 | Gen 1:21; Ps 74:13–17 |
| 3 | `3-המבול/` | SB1.8.1 | Śatapatha Brāhmaṇa 1.8.1.1–10: Manu and the fish | 20 | Gen 6–9 |
|  |  | MBH3.185 | Mahābhārata 3.185: the fish, the ship, "all the seeds" | 116 | Gen 6–9 (7:3) |
|  |  | VD2 | Vīdēvdād 2: Yima, the three enlargements of the earth, the winter, the enclosure | 43 | Gen 6:14–7:3, 8:22; 10 |
| 4 | `4-העקדה/` | AB7 | Aitareya Brāhmaṇa 7.13–18: Śunaḥśepa | 250 | Gen 22; Ex 13:13; Judg 11 |
|  |  | SB1.2.3 | Śatapatha Brāhmaṇa 1.2.3.6–9: the sacrificial essence passes from man to the animals and the grain | 8 | Gen 22:13; Ex 13:13, 34:20 |
|  |  | KU1 | Kaṭha Upaniṣad, adhyāya 1 (vallīs 1–3): Naciketas given to Death | 143 | Gen 22 (a father gives his son) |
| 5 | `5-יאמה-והמתים/` | RV10.10 | 10.10 Yamī and Yama | 56 | Gen 4–5 (Cain's wife), 19:30–38; Lev 18:9 |
|  |  | RV10.14–18 | the funeral hymns | 288 | Gen 3:19; 5 |
| 6 | `6-המהמר-והצפרדעים/` | RV10.34, RV7.103 | the gambler; the frogs | 96 | (the soul); Ex 7:26–8:11 (the frogs) |

## Bases and tools
- `vedic_tools.py` (this folder): `convert` builds the line data from the raw sources; `data`, `tr`, `fill`, `mw`, `gra`,
  `ave`, `avelemma`, `lemma`, `lexmap`, `verify`, `build`, `grep`, `gates`, `selftest` (its docstring; `../tools.md`).
- Bases: VedaWeb (the Zurich text + morphology, CC BY 4.0) for the Rigveda; TITUS (Weber's ŚB, Aufrecht's AB; local
  only); GRETIL (MBh, the BORI text; the Kaṭha TEI, CC BY-NC-SA); CAB (Vd 2). Dictionaries: Monier-Williams and
  Grassmann (csl-orig, local), CAB's Avestan dictionary with Bartholomae's lemmas (online, per word).
  Rank 3: VedaWeb's translation layers (Griffith, Grassmann, Geldner, Elizarenkova), Jamison's online commentary, and the
  public-domain translations (Eggeling, Keith, Ganguli, Darmesteter, Hume) in `../sources/Archive-org--PD-translations/`.
- `renderings.md` (binding), `translator-brief--vedic.md` (for the translators), `parallels-index.md` (generated).

## Status
See each `project.md`, and the run's report (`../reports/round-5/run-1.md`).

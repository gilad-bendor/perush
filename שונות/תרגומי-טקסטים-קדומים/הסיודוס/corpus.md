# The Hesiod corpus: the Theogony and the Works and Days (`הסיודוס/`)

Round 4, run 4 (2026-10-24): the folder's **first Archaic Greek corpus** (the fifth-day dossier of the Ugaritic corpus
already had Th. 237–336 and 820–828, and the flood corpus has Berossus' Hellenistic Greek). The plan row:
`../curated-translation-candidates.md`, "Round 4 plan", run 4; the world list: `../curated-translation-candidates--world.md`
Tier 1 #3; the survey: `../curation-surveys/world-survey--greek-aegean-italic--2026-10-21.md` §2.1.

## The texts and why

| Project | Text | Date | Why (Bible) | Why (the ancient mind) |
|---|---|---|---|---|
| `1-תולדות-האלים/` | **The Theogony** (1,022 lines + the 20 lines Galen quotes after 929) | c. 730–680 BCE (oral-traditional; one poet with a name, Th. 22) | **Gen 1:1–5** (the Gap first; Night bears Day), **1:21** (Keto, whose name is the LXX's κήτη; Typhoeus the δράκων), 1:6–8 (Sky lying on Earth), 2:7, 2:22 (the first woman moulded from earth), **6:1–4** (the gods' unions with mortals, the Titans), 8:20–21 (the sacrifice at Mekone), the succession myth's Near Eastern antecedents (Kumarbi, Enūma eliš, Ugarit's Baal and Zaphon) | a cosmos born by sex and violence that ends in a just king; the poet called by the Muses; the gods' honours and their oath |
| `2-מעשים-וימים/` | **The Works and Days** (828 lines) | c. 700 BCE | **Gen 2–3** (Pandora and the jar; "before, men lived without toil"; WD 289's sweat ↔ Gen 3:19), **6:1–4** (the race of heroes, "demigods", WD 159–160), Lev 26 / Deut 28 (the just and the unjust city, WD 225–247), Gen 2:3 (the holy seventh day, WD 770), Gen 8:22 (the farmer's year), Job 9:9, 38:31, Amos 5:8 (the Pleiades and Orion), Proverbs (the neighbour, WD 342–346), Judg 9:8–15 (the fable of the hawk) | the first Greek "I": a farmer quarrelling with his brother, fearing debt, trusting Zeus' justice against bribe-eating kings; the five races; work as the human condition; the calendar of a peasant's year and its taboos |

Reading order: the Theogony (the gods), then the Works and Days (men).

## Base texts (`../sources-registry.md`)
- **Evelyn-White 1914** (Loeb; public domain), as encoded by the Perseus Digital Library (`canonical-greekLit`, markup CC
  BY-SA 4.0), committed under `../sources/Perseus--Hesiod/`.
- **The Perseus Ancient Greek Dependency Treebank 2.1** (lemma, morphology and syntax for every word; CC BY-SA 3.0),
  committed under `../sources/Perseus-Treebank--Hesiod/`; aligned to the lines by `../tools/perseus2md.py`.
- **The Septuagint** (Rahlfs 1935, from Greek Wikisource; git-ignored, licence unclear): `../sources/LXX-Rahlfs-1935--el-wikisource/`,
  read by `../tools/lxx_verses.py` – for the LXX layer (guidelines §6.4 rule 5; renderings §6).
- **LSJ** per word through Logeion (`hesiod_tools.py lsj <lemma>`).
- Rank 3 checks: Evelyn-White's own English (PD), and what the translators know of West 1988 / 1966 / 1978, Most 2006,
  Athanassakis, Lattimore (not in the folder: described, never quoted from memory). The Hebrew translations (Spann 1956,
  Shabtai 2004, Bouzaglo 2017) are copyrighted and were not consulted.

## Shared files
- `renderings.md` – the conventions, the names (and the speaking names translated), the grammar mapping, the key terms,
  the LXX layer, the reserved words, the formulas, the repeated lines, the self-test (`hesiod_tools.py gates`, `selftest`).
- `translator-brief--greek.md` – the brief every translator gets (the ★ rules).
- `hesiod_tools.py` – units / data / fill / lemma / lexmap / lsj / lxx / verify / build / grep / gates / selftest.
- `parallels-index.md` – the projects' parallels, by Bible verse (`build_parallels_index.py`).

## Status
See each `project.md`. Verify with `python3 -I -B hesiod_tools.py verify --strict` and `selftest`.

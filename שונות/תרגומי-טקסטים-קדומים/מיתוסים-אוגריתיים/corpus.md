# Corpus: the Ugaritic myths (`מיתוסים-אוגריתיים/`)

Created 2026-10-23 by Round 4, run 1 (`../curated-translation-candidates.md`, "Round 4 plan"; the world list
`../curated-translation-candidates--world.md`, Tier 1 #1 and §5A). **The folder's first non-Mesopotamian corpus, and its
first Ugaritic.** It holds the mythological texts of Ugarit (Ras Shamra, on the Syrian coast; tablets of the late 13th
century BCE): the Baal Cycle, copied by the scribe Ilimilku, and the short myths, hymns and charms. Later candidates in
the same language ("Ugarit II": Aqhat, the Rephaim texts, Kirta; "Ugarit III": the ritual texts; the letters) would join
it, after checking Göttingen's EUPT edition.

## Why these texts (both purposes, guidelines §1)

- **The Bible.** Ugarit is the closest literature to the Bible's own: the same poetic pairs, the same divine names (El,
  Baal, Anat, Athirat / Asherah, Resheph, Dagan, Yam, Mot), and the monsters of the sea that Gen 1:21 makes into
  creatures: *tnn* (`תַּנִּין`), *ltn* (`לִוְיָתָן`), the twisting *bṯn* (Isa 27:1). The commentary is writing Gen 1:20–23
  now. Beyond the fifth day: Baal's window in the clouds and the "windows of the sky" (Gen 7:11, 8:2), El at the source of
  the two rivers (Gen 2:10), the seventy sons of Athirat (Gen 10; Deut 32:8), El drunk and carried home (Gen 9:20–27),
  the mourning rites the Torah forbids (Lev 19:27–28; Deut 14:1), Rapiʾu in Ashtaroth and Edrei (Deut 1:4, 3:11), Ex 15's
  mountain of inheritance.
- **The ancient mind.** How a Levantine city imagined the rain and its absence (Baal's death and return), kingship won
  and a palace built, the old father-god and the young king, a fierce maiden goddess, death as a throat that is never
  full; the feast, the drunken god, the haggling over a bride-price, a mare's plea for her bitten foal, the dead kings
  invited to drink.

## The texts

| Project | Text | Base text | Lines | Status |
|---|---|---|---|---|
| `1-מחזור-בעל/` | **The Baal Cycle**, KTU 1.1–1.6 (Ilimilku's six tablets; the order of 1.1–1.2 is debated) | CUC v0.2.8 (KTU³), `../sources/CUC/` | 1,372 (1.1 118, 1.2 132, 1.3 258, 1.4 447, 1.5 172, 1.6 245) | **first draft, 2026-10-23** (Round 4 run 1; three passes, `ugarit_tools.py verify --strict`) |
| `2-מיתוסים-ולחשים/` | **The short myths and charms**: KTU 1.23 (Šaḥar and Šalim), 1.24 (Nikkal and Yarikh), 1.114 (El's banquet), 1.100 and 1.107 (the serpent charms), 1.108 (Rapiʾu, king of eternity), 1.82 and 1.83 (charms against the serpent and the *tnn*) | CUC v0.2.8 | 377 (1.23 76, 1.24 50, 1.114 31, 1.100 79, 1.107 54, 1.108 27, 1.82 43, 1.83 17) | **first draft, 2026-10-23** (Round 4 run 1) |
| `3-תיק-היום-החמישי/` | **The fifth-day dossier** (Gen 1:20–23): short excerpts from the other cultures (world list §5A), each from its own language | per excerpt (see its `project.md`) | 100 (six excerpts: Egyptian, Greek, Hittite, Vedic, Old Norse, Old Japanese) | **first draft, 2026-10-23** (`dossier_tools.py verify --strict`) |

## How the parts relate

The Baal Cycle tells how Baal, the storm god, became king: his fight with Yam (Sea) / Nahar (River) (1.1–1.2), Anat's
feast, slaughter and boast of the monsters she smote (1.3), the building of his palace with its window (1.3–1.4), his
descent into the throat of Mot (Death) and the mourning of El and Anat (1.4 VIII–1.5), Anat's destruction of Mot, Baal's
return and the last fight (1.6), and a hymn to Šapšu with the sea monsters (1.6 VI). The short texts share its gods,
formulas and epithets (El's banquet, the *tnn* charms, the "birds of heaven and fish of the sea" of 1.23). Reading order:
1.1 → 1.6, then the short texts; for the fifth day: 1.3 III 38–46, 1.5 I 1–8, 1.6 VI 44–53, 1.83, 1.82, 1.23:58–64.

## Tools and files

- `ugarit_tools.py` (in this folder): `units`, `data`, `fill`, `pars`, `lex`, `dulat`, `verify [--strict]`, `build`,
  `grep [--all]`, `gates`, `selftest`. It reads CUC through `../tools/cuc2md.py` (the converter from CUC's Text-Fabric
  dataset). See its docstring and `../tools.md`.
- `renderings.md` binds every translator; `translator-brief--ugaritic.md` is the common brief.
- `parallels-index.md`: generated from the annotated **הקבלה** bullets by `build_parallels_index.py`.

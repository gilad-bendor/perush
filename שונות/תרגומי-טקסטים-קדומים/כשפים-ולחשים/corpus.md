# Corpus: witchcraft and incantations (`כשפים-ולחשים/`)

Created 2026-10-21/23 by Round 3, run 6 (`curated-translation-candidates.md`, "Round 3 plan"). The corpus holds texts
against witchcraft and the rites of the exorcist: how a Mesopotamian who believed himself bewitched named his fear,
went to law with the witch before the gods, and burned her in effigy. The first text is the great anti-witchcraft
ceremony **Maqlû**; later candidates (Šurpu, the CMAwRo rituals, the Lamaštu incantations, Hittite elimination
rituals) would join it.

## Why these texts (both purposes, guidelines §1)

- **The Bible.** Exod 22:17 `מְכַשֵּׁפָה לֹא תְחַיֶּה` names the Akkadian *kaššāptu* with its own cognate; Deut 18:10–11
  lists the practitioners; 2 Kgs 9:22 and Nah 3:4 accuse Jezebel and Nineveh of *kešāfîm*; Isa 47:9–14 mocks Babylon's
  sorceries that the fire will consume; Ezek 13:17–23 attacks the women who "hunt souls"; Lev 14 and 16 purify with
  cedar, sprinkling and a substitute that carries sin away; Num 5 makes words dissolve in water. Maqlû is the fullest
  ancient script of the world those laws forbid.
- **The ancient mind.** Maqlû shows what a Babylonian feared (the neighbour's evil eye, a stolen hem or footprint, an
  image buried with a corpse), how he imagined justice (a night court before the gods, the witch as defendant, the
  sentence executed by fire), and how a body was cleansed and handed back to life at dawn.

## The texts

| Project | Text | Base text | Lines | Status |
|---|---|---|---|---|
| `1-מקלו/` | **Maqlû** ("Burning"), Tablets I–VIII and the Ritual Tablet (Standard Babylonian, 1st millennium BCE; manuscripts from Nineveh, Assur, Huzirina, Sippar, Nippur, Babylon, Uruk) | eBL `Mag/1/1` (ed. T. Abusch, rev. D. Schwemer; translation Abusch): `../sources/eBL/Maqlu-I/` … `Maqlu-RT/` | 1,595 eBL labels (I 152, II 231, III 202, IV 155, V 181, VI 161, VII 198, VIII 133, RT 182) | in progress |

## How the parts relate

The eight incantation tablets are the words of one ceremony; the Ritual Tablet (RT) prescribes the acts that go with
each incantation, quoting its first line. Every tablet ends with the first line of the next (a catch-line), and
Tablet VIII recalls incipits of the earlier tablets. Reading order: I–VIII, then RT (or RT beside each incantation it
quotes). Night (I–V: the witch's figurines are burned before Nuska and Girra, then the fire is quenched) gives way to
morning (VI–VIII: fumigation, washing, the substitute, the sunrise prayers).

## Tools and files

- `maqlu_tools.py` (in this folder): `fill`, `pars`, `lem` (lemma candidates from ORACC cmawro: eBL lemmatized only
  Tablet I), `norm`, `incipits`, `lines`, `verify [--strict]`, `build`, `grep [--all]`. See its docstring and
  `../tools.md`.
- `renderings.md` binds every translator; `translator-brief.md` is the common brief.
- `parallels-index.md`: generated from the annotated **הקבלה** bullets by `build_parallels_index.py`.

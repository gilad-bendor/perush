# Project: the Baal Cycle (KTU 1.1–1.6)

Round 4, run 1 (`../../curated-translation-candidates.md`, "Round 4 plan"). Coordinator: the run's session (a child
session of the Round 4 orchestrator); translators as sub-agents, **one at a time** (guidelines §5.1), each with
`../translator-brief--ugaritic.md`.

## Scope

The six tablets of the Baal Cycle as CUC (KTU³) gives them, 1,372 lines: KTU 1.1 (cols. II–V; 118 lines), 1.2 (I–IV;
132), 1.3 (I–VI; 258), 1.4 (I–VIII; 447), 1.5 (I–VI; 172), 1.6 (I–VI; 245, with Ilimilku's colophon). Every line is
translated, wholly broken lines included (`> […]`). KTU 1.8 (a duplicate fragment, now joined to 1.3 in KTU³) and
1.9–1.13 are not in CUC.

## Base text and versions

- **Base text:** the Copenhagen Ugaritic Corpus v0.2.8 (`../../sources/CUC/`, CC BY-NC 4.0, git-ignored): KTU³'s
  readings, with its marks; `python3 -I -B ../ugarit_tools.py data <KEY>`.
- **Parses:** CUC's machine parses (DULAT lemmas and glosses), human-reviewed for 1.3 and 1.5 I–II: a first pass only.
- **Dictionary:** DULAT³ through CUC's lexicon (`../ugarit_tools.py dulat`); DULAT itself is paid (not used).
- **Rank 3:** the modern translations (Smith & Pitard; Pardee, *COS* I; Wyatt; Smith in *UNP*) are © and not online:
  the translators check against what they know of them, without quoting (brief §3). **Rank 5–6:** Cassuto 1951
  (`../../sources/Ben-Yehuda--Cassuto-1951--HaEla-Anat/`), Hebrew, KTU 1.3 and parts of others.
- **EUPT** (Göttingen) has not published the Baal Cycle (checked 2026-10-23).

## Line numbering

KTU's (= CUC's): `### <column>:<line>` (`### III:38`). The modern translations use the same numbering.

## Files

- `annotated-<KEY>.rtl.md` (KEY = 1.1 … 1.6): the working translation (guidelines §7.2); one per tablet.
- `translation--intro-<KEY>.rtl.md`: the translator's title and introduction; `translation--head.rtl.md`: the head of
  the whole cycle (coordinator).
- `translation-<KEY>.rtl.md` and `translation.rtl.md`: **generated** by `python3 -I -B ../ugarit_tools.py build`.
- Below: one section per tablet, appended by its translator (format: `../translator-brief--ugaritic.md` §7).

## Decisions (coordinator, before the first line)

- The corpus renderings (`../renderings.md`) bind: names, the transliteration convention, the grammar mapping, the key
  terms, the reserved words, the formulas (§6) and the fixed Gen 1:21 lines (§7).
- **Order of drafting:** KTU 1.3 first (the best preserved tablet, with a human-reviewed parse; it holds Anat's boast of
  the *tnn* and most of the cycle's formulas, so its translator fixes them for the others); then 1.4 (the palace and the
  window), 1.5 and 1.6 (Mot; Litan; the Šapšu hymn with the *tnn*), and last 1.1 and 1.2 (the most damaged, where the
  restorations lean on the parallels the earlier tablets fix). One translator at a time; each sees the Hebrew of the
  earlier tablets through `pars` / `data`.

## Progress log (coordinator)

- 2026-10-23: base text secured (CUC v0.2.8); `../../tools/cuc2md.py` and `../ugarit_tools.py` written; renderings,
  gates (selftest 45 lines, 0 failures) and the translator brief fixed before the first line.

## Parallels index

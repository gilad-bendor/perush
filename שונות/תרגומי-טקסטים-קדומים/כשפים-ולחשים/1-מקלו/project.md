# Project: Maqlû ("Burning"), Tablets I–VIII and the Ritual Tablet

Round 3, run 6 (`../../curated-translation-candidates.md`, "Round 3 plan"). Coordinator: the run's session; translators
as sub-agents, **one at a time** (guidelines §5.1), each with `../translator-brief.md`.

## Scope

The whole of Maqlû in eBL's edition: the eight incantation tablets and the Ritual Tablet, 1,595 eBL labels (I 152,
II 231, III 202, IV 155, V 181, VI 161, VII 198, VIII 133, RT 182). Every label is translated, including rubrics
(`KA.INIM.MA …`, labels such as `36a`), colophons, catch-lines and wholly broken lines (`> […]`).

## Base text and versions

- **Base text:** eBL `Mag/1/1`, ed. T. Abusch, rev. D. Schwemer (`../../sources/eBL/Maqlu-<KEY>/reading-edition.md`):
  the normalized reconstruction (N), Abusch's English (T), the notes, and every manuscript's transliteration (the ATF
  block under each line: use it for the brackets).
- **Lemmas:** eBL's for Tablet I only; for II–RT, `python3 -I -B ../maqlu_tools.py lem KEY FROM [TO]` (candidates
  from ORACC cmawro's glossary, by normalized form: a lookup, not a parse).
- **Rank 3:** Abusch's translation in eBL (T) – the only open modern translation. **Rank 5:** Tallqvist 1895
  (`../../sources/Tallqvist-1895--Maqlu/`), German, for the history of interpretation only.

## Line numbering

eBL's labels, as `### <label>` in the annotated files: plain numbers, `a`-lines (`36a`, `101a`, `144a`), primed lines
in RT (`2'`–`180'`, and the range `78'-79'`), and the fragment sections of VIII (`A+1`–`A+46`, `B+1`–`B+22`).
Abusch's older numbering (AMD 10) is the same for most lines; eBL notes give differences.

## Files

- `annotated-<KEY>.rtl.md` (KEY = I … VIII, RT): the working translation (guidelines §7.2); one per tablet.
- `translation--intro-<KEY>.rtl.md`: the translator's title and introduction for each tablet; `translation--head.rtl.md`:
  the head of the whole work (coordinator).
- `translation-<KEY>.rtl.md` and `translation.rtl.md`: **generated** by `python3 -I -B ../maqlu_tools.py build`.
- Below: one section per tablet, appended by its translator (format: `../translator-brief.md` §7).

## Decisions (coordinator, before the first line)

- The corpus renderings (`../renderings.md`) bind: names, the witchcraft lexicon, the formulas, the reserved words, and
  §9, the fixed Hebrew of every line shared between tablets I–VII.
- One translator at a time, tablet by tablet in order (I → VIII, RT): each sees the Hebrew of the earlier tablets;
  Tablet VIII and RT copy the incipits they quote (`maqlu_tools.py incipits`).

## Open decisions for the user

(Collected from the translators' sections at the end of the run.)

## Progress log

- 2026-10-21: base text fetched (eBL, all nine chapters); `tools/ebl_fetch.py` fixed for Maqlû's line types.
- 2026-10-23: synced with `main` after the VM reboot; renderings aligned with the corpora finished meanwhile; tools,
  renderings §9 and brief ready; translation starts with Tablet I.

## Parallels index

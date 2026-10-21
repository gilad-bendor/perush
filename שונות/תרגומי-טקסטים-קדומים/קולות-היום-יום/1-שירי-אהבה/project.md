# Project 1: the Old Babylonian love literature (LAOS 4 01–07, 10, 13–18, 20, 22–26)

## Scope
All Old Babylonian (and the one Old Akkadian) Akkadian love lyrics, love dialogues and love incantations that have an open base text: the 25 OB / OAkk texts of ORACC AkkLove (= Wasserman 2016, LAOS 4) – 835 lines, many of them broken. Not included: the Middle Babylonian / Middle Assyrian love texts (LAOS 4 08, 09, 11, 12, 19, 21: outside "OB"; a later run) and the Isin incantation tablet IB 1554 (LAOS 4 27–34; no text in the ORACC export). Selection and reasons: `../corpus.md`.

## Base text
ORACC **AkkLove** (`../../sources/ORACC/akklove--Akkadian-Love-Literature/`; CC0): Wasserman's transliteration, normalization (`norm:`) and lemmatization, and his English translation (rank 3, `…--translation.md`). LAOS 4 itself (commentary) is not owned; SEAL has the same editions (not downloaded).

## Line numbering
ORACC labels (= LAOS 4), written without spaces: `o.i.12` (obverse, column i, line 12), `r.3'`, `b.e.36`, `t.e.1'`. One annotated file per text (`annotated-NN.rtl.md`; the Kiš fragments 14a–f in `annotated-14.rtl.md`, the incantations 20, 23–26 in `annotated-20-26.rtl.md`).

## Translation order (priority)
10 (Nanaya and Muʾati), 15 (Rīm-Sîn), 16 + 04 (the "faithful lover" dialogue and its duplicate), 07, 06, 02, 03, 01, 13, 18, 17, 05, 14a–f, 22, 20, 23–26.

## Repeated lines (fixed before drafting)
- LAOS 4 10: o.7 = o.8 and o.9 = o.10 except the address (*bēlī* / *Muʾati*): identical Hebrew except the name; o.12 ≈ o.13.
- LAOS 4 04 o.1–16 ≈ 16 o.ii.10–13 and o.i.1–8 (the man's rejection speech): the later file copies the earlier file's Hebrew where the Akkadian is identical (`kol_tools.py verify` lists the differences).

## Sources consulted
Wasserman 2016 via AkkLove (rank 3); the Gilgameš corpus renderings (binding).

## Open decisions
1. *māru* "son" as a term of endearment for the lover (07 o.9, 16 r.iii.23, 01 passim): rendered literally `בן` / `בני` (LAOS 4 03 o.4 `נער` by sense). Alternative: `יקירי` (Wasserman's "darling").
2. *sukannīnu* (a dove; 06 o.i.9, 17) = `תּוֹר`, because `יוֹנָה` is reserved for *summatu*; the identification of the species is uncertain.
3. *šumšû* (07) and *biātu* (06) "spend the night" both = `לִין` (two Akkadian verbs, one Hebrew verb).
4. *irimmu* "bead (love-charm)" = `חרוז` throughout (10, 15, 16, 04, 02); Wasserman "love-charm".
5. *ḫabābu*: `חִבֵּק` (caress; Gilgameš binding) but `הָמָה` of the heart and of water (03 r.32; renderings §3.1) – one lemma, two Hebrew verbs by sense.

## Progress
Drafted by the run-7 coordinator acting as the translator (no sub-agent tool was available; see `../handoff--round2-run7.md` §6), text by text in the priority order, with `kol_tools.py verify` and `check_bible_quotes.py` clean after each text:
- 2026-10-21: LAOS 4 10 (39 lines), 15 (43), 16 (110), 04 (50; the shared lines copied from 16), 07 (43), 06 (62), 02 (23), 03 (36), 01 (142).

# Project 5: Erra and Išum, Tablet I (Round 4, run 5)

## Scope
- **Erra and Išum** (*Erra and Išum*, eBL `L/1/5`), the Standard Babylonian epic of the plague and war god Erra, his vizier Išum and the Seven (the Sebetti), Tablet I: **all 191 lines** (eBL 1–191).
- **Tablets II–V are not in scope**: on 2026-10-24 eBL's chapters II–V list their manuscripts (13, 14, 13 and 20) but have no edited lines ("An edition of this text is in preparation by the eBL team. It will be uploaded in the course of 2025/2026"); the manuscripts' Fragmentarium records carry no transliteration; ORACC (unreachable from the cloud) has only Neo-Assyrian Tablet I copies (CAMS/GKAB); the only full editions, Cagni 1969 (*L'epopea di Erra*) and 1970 (*Das Erra-Epos: Keilschrifttext*), are © and lending-only on archive.org (`daserraeposkeils0000cagn`, `lepopeadierra0034unse`): records only (guidelines §2.3; the user's rule, no purchases). The plan row's "now all five tablets" was not true of the published edition. **Re-check with `python3 -I ../../tools/ebl_fetch.py L 1 5 "Standard Babylonian" II …`** before the next round; when II–V appear, they become parts 2–5 of this project (the plan's Torah focus – Ex 12:13, 23, Deut 31:17–18, 32:22–25, the amulet use – lies mostly there: Marduk's absence and Erra's rule II–III, Išum's march IV, the amulet colophon V 49–61).
- Corpus: the netherworld corpus (`../corpus.md`): Erra is Nergal's other name (project 3), and the corpus's renderings, tool and Nergal precedents bind (the coordinator's decision; a new corpus for one tablet was not worth its set-up).

## Base text
- eBL `L/1/5`, Standard Babylonian I, ed. Enrique Jiménez, rev. T. D. N. Mitto, Z. J. Földi, A. Hätinen, G. Rozzi; translation Jiménez (English). Fetched 2026-10-24 with `tools/ebl_fetch.py` into `../../sources/eBL/Erra-SB-I/` (git-ignored; restored by `sources_sync.py`). 191 lines, no empty **N:** line (checked 2026-10-24, guidelines §5.2 "Scripts"); four lines with a variant reconstruction (80, 93, 100–101, 146).
- Manuscripts: Huzirina / Sultantepe (HuzNA1 = STT 16), Aššur, Nineveh, Babylon, Tarbiṣu, etc. (`manuscripts.md` there).
- Rank 3: Jiménez's eBL translation (consulted after drafting). Rank 4: the eBL notes (Cagni 1969, Foster, George, Taylor, Müller and others as quoted there). Not available: Cagni 1969 / 1970, Foster's *Before the Muses*, Dalley 1989, George's and Taylor's studies except as eBL quotes them.

## Numbering
eBL's line numbers (1–191). The literature (Cagni) numbers Tablet I the same way.

## Shared lines (fixed before drafting)
- **126–162** are already translated in the flood corpus (`../../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md`, §7, 2026-10-16). They are copied letter for letter in the revised form of the corpus renderings §12.6 (rules fixed after 2026-10-16: `עולם`, `יצר`, `אות`, `שׂם`, *ebbu* `צח`, the speech formula…); `verify ER` checks the copy against §12.6 and against the flood references, which the coordinator aligns to §12.6 at the end of the run.
- Atra-ḫasīs's noise lines, Gilg. XI 135 and Nergal and Ereškigal's formulas: renderings §12.1, §12.4.

## Parallels to watch (look for; never "translate as")
- **Ex 12:13, 23** (*ha-mashḥit*, the night, the door): Išum the night-walker who guides lad and girl safely (21–22), "Išum is a door: before them (the Seven) it is barred" (27); Anunnaki / *gallû* rising (175–177). The root שחת is reserved (renderings §12.5).
- **Deut 32:22–25** (and 32:33, 42): the Seven's commissions (32–38: fire, lion, weapons, wind, "venom of the viper"): *imtu* `חֵמָה` and *bašmu* `פֶּתֶן` are cognates of Deut 32:24, 33; arrows (*uṣṣu* `חֵץ`), sword (*namṣaru* `חֶרֶב`).
- **Deut 31:17–18** (*hester panim*): Marduk's absence from his seat (123, 132–133, 170–178, 181–189) – the god who leaves his seat, and what follows; `הסתיר` is reserved.
- **Gen 6:1–4**: the Seven, warrior gods born of Anu by Earth (28–29); the seven sages sent down to the Apsû (147, 162; Gen 4:20–22, 6:4).
- **The flood** (Gen 6–9): Marduk's flood (132–146; the flood references' parallels index already lists most); the noise of mankind (41, 73, 82; Atra-ḫasīs; Gen 6:5, 11).
- The sleeping god (15–20; Ps 44:24, 78:65, 121:4; 1 Kgs 18:27); the litany "let X hear and tremble" (62–74; Ex 15:14–16); Išum's plea (102–103; Ex 32:12; Gen 50:20); the sharpened sword (88–91; Ezek 21:14–16); "spare no one" (37; Ezek 9:5–6); naming (29; Gen 5:2); giving orders, *ṭēma šakānu* (31; Ezra's `שָׂם טְעֵם`); the guardians at the gate (189; Gen 4:7, 3:24).
- **The soul of the ancients:** the god of war who cannot rest; the soldier's ethos against the city (47–59); the gods' need for quiet; the cult statue and its craftsmen (the god's "body", *šīr ilī*); the netherworld and heaven sewn together (*šipīt šamê u erṣeti*).

## Open decisions
1. (for the lead) *imtu* = `חֵמָה` [cognate] here, against Enūma eliš and Maqlû (`אֶרֶס`): the cognate rule; recorded in the report as a cross-corpus split.

## Progress
- 2026-10-24: sources secured (Tablet I; II–V recorded as unavailable); renderings §12 fixed; `netherworld_tools.py` key `ER`; skeleton `annotated.rtl.md` generated (191 entries, normalization filled by script, 126–162 pre-filled from §12.6).

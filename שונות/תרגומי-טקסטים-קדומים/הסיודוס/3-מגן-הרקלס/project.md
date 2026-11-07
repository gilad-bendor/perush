# Project 3: the Shield of Heracles (Ἀσπὶς Ἡρακλέους), whole – `3-מגן-הרקלס/`

Round 6, run 5 (2026-11-07; plan: `../../curated-translation-candidates.md`, "Round 6 plan", run 5). It completes the
Hesiodic corpus (the Catalogue of Women is fragmentary: not a candidate, guidelines §1).

## Scope
The whole poem: **479 lines** (1–480 in the standard numbering; the base has 479 `<l>`, every label 1–479 present –
see "Line numbering"). KEY `SH` in `../hesiod_tools.py`.

## The text
An Archaic hexameter poem transmitted under Hesiod's name; ancient critics already doubted it (Aristophanes of
Byzantium, the hypothesis), and modern scholarship dates it to the early 6th century BCE (Janko 1986: c. 580–570; the
shield's ekphrasis, 139–320, is modelled on the shield of Achilles, Iliad 18.478–608). Lines 1–56 (Alcmene, Amphitryon,
Zeus' night with her, the twins' birth) are the opening of a Catalogue-of-Women *ehoie* ("or like her who…", fr. 195
M-W), which the poem took over; 57–480 tell Heracles' fight with Cycnus, son of Ares, at Pagasae / the precinct of
Apollo, with the long description of the shield in the middle. Sections:
1–56 Alcmene and the conception; 57–138 Cycnus, Iolaus, the arming; 139–320 the shield; 321–479 the fight, Ares
wounded, Cycnus' burial washed away by the Anauros.

## Base
- Greek: Evelyn-White 1914 (Loeb, PD), Perseus `tlg0020.tlg003.perseus-grc2` (`../../sources/Perseus--Hesiod/`, CC BY-SA
  markup; retrieved 2026-11-07 from raw GitHub).
- Lemma and morphology: the Perseus treebank AGDT 2.1 `tlg0020.tlg003.perseus-grc1.tb.xml`
  (`../../sources/Perseus-Treebank--Hesiod/`; retrieved 2026-11-07). `../../tools/perseus2md.py check`: 479 lines, 3,315
  treebank words, 0 unmatched words either way; 45 `cite` mismatches (the treebank's line cites run one ahead in 139 and
  304–309): the letter alignment is complete, so our labels are the TEI's.
- **The base's marks:** whole lines in `<del>` (Evelyn-White's square brackets: suspected): **204, 210** – the `>` line
  opens with `{חשודה}`; `<del>` inside a line (the bracketed half-lines 203, 205, 209, 211, also suspected – not a
  papyrus, unlike WD 169a–d): the `>` line opens with `{חשודה בחלקה}` and the suspected words stand in `⟦ ⟧`
  (renderings §14; the tool's `MARK_TAG_KEY`).

## Line numbering
The base's labels 1–479 in order. (The vulgate numbering runs to 480: Evelyn-White's text has no line where some
editions count one more – recorded here if a translator finds where.)

## Sources consulted
Rank 3: Evelyn-White's English (PD); the translators' knowledge of Most 2006/2018 (Loeb), Athanassakis, Lattimore,
described, never quoted from memory. Commentary (rank 4): Russo 1965, Solmsen, Janko 1986 – described only.
Iliad 18 (the shield of Achilles) and Iliad 5 (Ares wounded by Diomedes) as the poem's models: Perseus `tlg0012.tlg001`
if a translator needs a line (fetch per need).

## Open decisions
(see the translators' sections below)

## Progress log
- 2026-11-07: project set up; KEY SH added to `../hesiod_tools.py` and `../build_parallels_index.py`; the skeleton made.

## Parallels index
Generated into `../parallels-index.md` by `../build_parallels_index.py`.

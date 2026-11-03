# Region survey – greece-italy (2026-11-02)

The Aegean and Italy: Mycenaean Greek (Linear B); Archaic, Classical, Hellenistic and Imperial Greek where the content is ancient; Old Latin and Latin; Umbrian and Oscan; Etruscan.

**How sizes were measured.** Sizes marked `(m)` were counted today by `python3 -I` scripts. The bases were fetched from raw GitHub:
- Perseus `canonical-greekLit` and `canonical-latinLit` TEI: counts of `<l>` elements per book or poem, the last numbered line, `<gap>` marks, words in the body;
- First1KGreek;
- GLAUx (`alekkeersmaekers/glaux`, the automatically lemmatized and parsed Greek corpus).

Other counts:
- the Greek Wikisource (the Orphic Hymns, Abel 1885: verse lines in the rendered pages);
- the TITUS Osco-Umbrian corpus (Iguvine lines per tablet side);
- IGCyr EpiDoc (`<lb>`, `<gap>`, `<supplied>`);
- the Latin Library (words).

Scratch data and scripts: `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/greece-italy/` (`scripts/measure.py`, `scripts/ou.py`; downloads in `dl/`).

## Key findings

- **How I drew the line.** By absolute date the whole of Greek and Latin literature to c. 500 CE is "ancient". The criteria still rank inside it.
  - **Placed first:** the oldest content transmitted closest to its voice:
    - Homer, formulaic oral poetry whose tradition reaches into the Bronze Age;
    - the Homeric Hymns;
    - the ritual texts that are their own artifacts: the gold tablets, the Iguvine bronzes, the Gortyn wall, the Cyrene stele, the Linear B tablets.
  - **Placed next:** authored literature of 500–380 BCE, but only where the culture made it its canon for centuries (C3 ≥ 4) *and* it opens the inner world (C4 ≥ 4): Aeschylus, Sophocles, Euripides' *Bacchae*, Aristophanes' *Frogs*, Plato's death-of-Socrates tetralogy and *Symposium*, Pindar, the Theognidea, Herodotus.
  - **Admitted from Hellenistic and Imperial texts:** only a cult's own liturgy (the Orphic Hymns) and Rome's one undisputed canon (the *Aeneid*).
  - **Admitted for Rome:** because Rome's own ancient voice survives almost only through later authors, three Roman texts are admitted at the bottom of the list: Livy 1, Ovid's *Fasti* and Cato's *De agricultura*. The lead may cut them first.
  - **Left below the line:** everything else authored after c. 380 BCE (see Excluded).
- **Homer is the centre of the region and is LARGE twice.**
  - The Iliad is 15,687 lines in 24 books (611–909 lines each, all measured). The Odyssey is 12,107 lines (331–847 per book).
  - Both have a public-domain base (Monro–Allen OCT; Murray's Loeb) with a full Perseus treebank.
  - Each needs the user's approval as a whole. Self-contained parts:
    - Il. 1 (611);
    - Il. 6 (529);
    - Il. 9, the embassy (709);
    - Il. 23–24, the funeral and the ransom (897 + 804);
    - Od. 11, the Nekyia (640);
    - Od. 9–12, the wanderings (2,232).
- **The Homeric Hymns as a whole collection are 2,342 lines (m), under the LARGE mark, and are the best ready-to-run candidate of the region.**
  - The four long hymns are Demeter 498, Apollo 552, Hermes 586 and Aphrodite 293. The 29 short hymns add 413.
  - They use the same diction, base (Evelyn-White) and Perseus pipeline as the finished Hesiod corpus. `tools/perseus2md.py` and `hesiod_tools.py` extend to them directly.
- **Excluded under the wholeness rule:** Sappho, Alcaeus, Archilochus, Alcman, Solon, the Presocratics, the Hesiodic *Catalogue*, the Epic Cycle, the Orphic Rhapsodies, the Derveni papyrus and the Twelve Tables (a modern reconstruction from quotations, ≈700 words). The Theognidea is the one Archaic lyric-elegiac collection that survives whole (1,389 numbered lines; GLAUx has it lemmatized, CC BY-SA).
- **Ritual and law reachable today:**
  - **The Iguvine Tables** (Umbrian; 448 bronze lines, ≈4,660 words, measured from the TITUS transliteration; ≈1% damaged). They are a whole liturgy, but Umbrian is only partly understood: readable `low`.
  - **The Cyrene cathartic law** (IGCyr EpiDoc; 158 lines, fair).
  - **The Gortyn Code** (≈630 lines, good). It has **no open digital Greek text**: only public-domain 1885–86 scans (Baunack; Bücheler–Zitelmann; Merriam), so the run must key it from page images.
  - CGRN (the sacred-law corpus) and PHI are still unreachable.
- **DAMOS (Linear B) is reachable now** (it was blocked on 2026-10-21). It is CC BY-NC-SA 4.0, and its item API (`/ajaxitem/<n>/`) returns transliterations with a "themes" tag (e.g. "religion"). The religious tablets are a corpus of the oldest Greek: C1 and C2 are 5, but C3 and C4 are low. A bulk count was not made (see the Linear B entry).
- **Etruscan cannot be read with control.** Its secure vocabulary is a few hundred words, and the Liber Linteus (≈1,200 legible words) is understood only in outline. Claude would be guessing, so it is excluded. Oscan and the other Italic languages survive in short texts.
- **Tools are excellent for Greek.**
  - The Perseus AGDT treebank (manual) covers the Iliad, the Odyssey, the Hymn to Demeter, Hesiod, *Agamemnon*, *Eumenides*, *Oedipus Tyrannus* and *Euthyphro*.
  - **GLAUx** (CC BY-SA 4.0, automatic lemma + morphology + syntax, in the same AGDT format) covers every other Greek candidate here except the Orphic Hymns. It is a new resource for the folder.
  - The Logeion API (`anastrophe.uchicago.edu`, in `domains.txt`) **did not answer today** (connection failed twice). Its web page answers, and the Perseus LSJ and Lewis & Short XML on raw GitHub do.
- **Latin is new to the folder** (C5 high), and Umbrian and Mycenaean are new languages. Greek is "covered" only by Hesiod, so Homer counts as the culture's first central text after him (C5 4).

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| greece-italy-01 | Homer, the Iliad (24 books) | Greek / Epic (Ionic with Aeolic and Mycenaean layers) | c. 1200–700 BCE (oral tradition) | c. 750–650 BCE | papyri 3rd c. BCE; Venetus A (10th c.) | C | 15,687 lines (m) | good (4 bracketed lines, 0 gaps) | Perseus `tlg0012.tlg001.perseus-grc2` (Monro–Allen OCT 1908–20, PD; markup CC BY-SA 4.0) + AGDT treebank `tlg0012.tlg001.perseus-grc1.tb.xml`, verified 2026-11-02 | high | 4 | 4 | 5 | 5 | 4 | LARGE | Books: 1 611, 2 877, 3 461, 4 544, 5 909, 6 529, 7 482, 8 565, 9 709, 10 579, 11 847, 12 471, 13 837, 14 521, 15 746, 16 867, 17 761, 18 617, 19 424, 20 503, 21 611, 22 515, 23 897, 24 804 (m). Natural self-contained units: Il. 1 (the wrath, 611); Il. 6 (Hector and Andromache, 529); Il. 9 (the embassy, 709); Il. 22–24 (Hector's death, the funeral games, the ransom: 2,216) |  |  |
| greece-italy-02 | Homer, the Odyssey (24 books) | Greek / Epic | c. 1100–650 BCE (oral tradition) | c. 725–650 BCE | papyri 3rd c. BCE; Laurentianus 32.24 (10th c.) | C | 12,107 lines (m) | good (0 gaps) | Perseus `tlg0012.tlg002.perseus-grc2` (Murray, Loeb 1919, PD; CC BY-SA markup) + AGDT treebank, verified 2026-11-02 | high | 4 | 4 | 5 | 5 | 4 | LARGE | Books: 1 444, 2 434, 3 497, 4 847, 5 493, 6 331, 7 347, 8 586, 9 566, 10 573, 11 640, 12 453, 13 440, 14 533, 15 557, 16 480, 17 606, 18 428, 19 604, 20 394, 21 434, 22 501, 23 371, 24 548 (m). Units: Od. 9–12 (the wanderings told by Odysseus, 2,232); Od. 11 alone (the Nekyia, 640); Od. 5–8 (Calypso to the Phaeacians, 1,757); Od. 19–23 (recognition and return, 2,301) |  |  |
| greece-italy-03 | The Homeric Hymns, the whole collection (33 hymns) | Greek / Epic | c. 700–480 BCE | 7th–5th c. BCE | papyri (Demeter, Roman period); cod. Leidensis BPG 33H (M, 14th–15th c.) + 15th-c. family | C | 2,342 lines (m): Demeter 498, Apollo 552, Hermes 586, Aphrodite 293, the 29 short hymns 413 | good (Demeter has 2 lacunae; Hymn 1 is fragmentary, 21 lines; 8 `<gap>` in all) | Perseus `tlg0013.tlg001–033.perseus-grc2` (Evelyn-White 1914, PD; CC BY-SA markup); AGDT treebank for Demeter; GLAUx for all, verified 2026-11-02 | high | 3 | 4 | 4 | 5 | 3 |  | (alternatives if split: the four long hymns 1,929; Demeter alone 498) |  | extends `הסיודוס/` (same diction, base and tools: `perseus2md.py`, `hesiod_tools.py`) |
| greece-italy-04 | The Bacchic-Orphic gold tablets (all ≈40 lamellae, Hipponion to Rome) | Greek / Epic hexameter and prose formulas | c. 500–400 BCE (formulas) | c. 400 BCE – 3rd c. CE | the tablets themselves (Hipponion c. 400 BCE) | A | ≈40 texts, ≈300 lines (r); Diels DK 1 B17–21 in First1KGreek: 7 texts (m) | good to fair (some tablets abbreviated or corrupt) | First1KGreek `tlg0579.tlg010.1st1K-grc1` (Diels, CC BY-SA 4.0), verified 2026-11-02; Tzifopoulos 2010 *Paradise Earned* (CHS, CC 3.0, online), verified 2026-11-02; the post-1922 finds (Pelinna, Pherai, Entella, Hipponion) only in © editions (Bernabé, Graf–Johnston): consult, cite numbers | medium | 3 | 5 | 3 | 5 | 3 |  |  | chs.harvard.edu |  |
| greece-italy-05 | The Orphic Hymns (the proem to Musaeus + 87 hymns, each with its incense) | Greek / Epic hexameter | 2nd–3rd c. CE (a cult hymnal; older material) | 2nd–3rd c. CE | 15th-c. manuscripts (with the Homeric Hymns) | D | 88 pieces, ≈1,106 lines (m, verse lines in the rendered Wikisource pages) | good | Greek Wikisource `Ορφικοί ύμνοι` (Abel, *Orphica* 1885, PD; transcribed from the djvu), verified 2026-11-02 | high | 2 | 3 | 3 | 5 | 3 |  |  |  |  |
| greece-italy-06 | The Theognidea (Books I–II) | Greek / Ionic elegiac | c. 600–480 BCE (a sympotic compilation) | 5th–4th c. BCE (compiled) | cod. Mutinensis A (10th c.) | D | 1,389 numbered lines; 1,426 with the a-lines (Book I 1,259, Book II 167) (m) | good | GLAUx `xml/0002-001.xml` (source Perseus, CC BY-SA 4.0; lemma + morphology, automatic), verified 2026-11-02; el.wikisource `Ελεγείαι Θεόγνιδος` (1,389 lines), verified 2026-11-02 | high | 3 | 3 | 4 | 4 | 3 |  |  |  |  |
| greece-italy-07 | Pindar, the Victory Odes (Olympian, Pythian, Nemean, Isthmian: 45 odes) | Greek / Doric choral lyric | 498–446 BCE | 5th c. BCE | papyri; Vaticanus gr. 1312 (B, 12th c.) | D | 3,459 lines (m) | good (1 bracketed line) | Perseus `tlg0033.tlg001–004.perseus-grc2` (Sandys, Loeb 1915, PD; CC BY-SA markup); GLAUx, verified 2026-11-02 | medium | 3 | 4 | 4 | 4 | 3 | LARGE | Olympian (14 odes) 1,011; Pythian (12) 1,213 (Pyth. 4, the Argonauts, 300); Nemean (11) 760; Isthmian (8) 475 (m) |  |  |
| greece-italy-08 | Aeschylus, the Oresteia (Agamemnon, Libation Bearers, Eumenides) | Greek / Attic tragedy | 458 BCE | 458 BCE | cod. Mediceus Laur. 32.9 (c. 1000 CE; Agamemnon partly in later mss) | D | 3,796 numbered lines (Ag. 1,673, Cho. 1,076, Eum. 1,047); 3,768 `<l>` (m) | good (11 gaps marked, the opening of Cho. lost in M) | Perseus `tlg0085.tlg005–007.perseus-grc2` (Smyth, Loeb 1926, PD); AGDT treebank for Ag. and Eum.; GLAUx, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 3 | LARGE | Agamemnon 1,673; Libation Bearers 1,076; Eumenides 1,047 (the homicide court; m) |  |  |
| greece-italy-09 | Aeschylus, the Persians | Greek / Attic tragedy | 472 BCE | 472 BCE | Mediceus (c. 1000 CE) | D | 1,076 lines (m) | good | Perseus `tlg0085.tlg002.perseus-grc2` (Smyth 1926, PD); GLAUx, verified 2026-11-02 | high | 3 | 3 | 4 | 4 | 2 |  |  |  |  |
| greece-italy-10 | [Aeschylus], Prometheus Bound | Greek / Attic tragedy | c. 460–430 BCE (authorship debated) | 5th c. BCE | Mediceus (c. 1000 CE) | D | 1,093 lines (m) | good | Perseus `tlg0085.tlg003.perseus-grc2` (Smyth 1926, PD); GLAUx, verified 2026-11-02 | high | 3 | 3 | 4 | 5 | 2 |  |  |  | the Prometheus of `הסיודוס/` (Th. 507–616, WD 42–105) |
| greece-italy-11 | Sophocles, Antigone | Greek / Attic tragedy | c. 442 BCE | 5th c. BCE | Laur. 32.9 (10th c.) | D | 1,353 lines (m) | good | Perseus `tlg0011.tlg002.perseus-grc2` (Storr, Loeb 1912, PD); GLAUx, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 2 |  |  |  |  |
| greece-italy-12 | Sophocles, Oedipus Tyrannus | Greek / Attic tragedy | c. 429 BCE | 5th c. BCE | Laur. 32.9 (10th c.) | D | 1,530 lines (m) | good | Perseus `tlg0011.tlg004.perseus-grc2` (Storr 1912, PD) + AGDT treebank; GLAUx, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 2 |  |  |  |  |
| greece-italy-13 | Euripides, the Bacchae | Greek / Attic tragedy | 405 BCE | late 5th c. BCE | Laur. 32.2 (L) and Pal. gr. 287 (P), 14th c. | D | 1,392 lines (m) | fair (a large lacuna after 1329; 17 gaps marked) | Perseus `tlg0006.tlg017.perseus-grc2` (Murray OCT, PD; CC BY-SA 4.0 in the file); GLAUx, verified 2026-11-02 | high | 3 | 3 | 4 | 5 | 3 |  |  |  |  |
| greece-italy-14 | Aristophanes, the Frogs | Greek / Attic comedy | 405 BCE | 405 BCE | cod. Ravennas 429 (10th c.) | D | 1,533 lines (m) | good | Perseus `tlg0019.tlg009.perseus-grc2` (Hall–Geldart OCT 1906–07, PD; CC BY-SA 4.0 in the file); GLAUx, verified 2026-11-02 | high | 3 | 3 | 4 | 4 | 3 |  |  |  |  |
| greece-italy-15 | Plato, the first tetralogy: Euthyphro, Apology, Crito, Phaedo (the trial and death of Socrates) | Greek / Attic prose | 399–c. 385 BCE | 4th c. BCE | Petrie papyrus of the Phaedo (3rd c. BCE); Bodl. Clarkianus 39 (895 CE) | D | 40,910 words (m) (Euth. 5,417, Apol. 8,753, Crito 4,282, Phaedo 22,458), 112 Stephanus pages, ≈4,100 OCT-line equivalents | good | Perseus `tlg0059.tlg001.perseus-grc1`, `tlg002–004.perseus-grc2` (Burnet OCT, PD); AGDT treebank for Euthyphro; GLAUx for all, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 3 | LARGE | Euthyphro (14 pp.); Apology (25 pp.); Crito (12 pp.); Phaedo (61 pp., ≈2,250 line equivalents); Apology + Crito together 13,035 words |  |  |
| greece-italy-16 | Plato, the Symposium | Greek / Attic prose | c. 385–370 BCE | 4th c. BCE | Bodl. Clarkianus 39 (895 CE) | D | 17,414 words (m), 51 Stephanus pages | good | Perseus `tlg0059.tlg011.perseus-grc2` (Burnet, PD); GLAUx, verified 2026-11-02 | high | 3 | 3 | 5 | 5 | 2 |  |  |  |  |
| greece-italy-17 | Herodotus, the Histories (9 books) | Greek / Ionic prose | c. 550–430 BCE (oral logoi), written c. 440–425 | 5th c. BCE | papyri; Laur. 70.3 (10th c.) | D | 185,048 words (m), 1,578 chapters | good (15 gaps marked) | Perseus `tlg0016.tlg001.perseus-grc2` (Godley, Loeb 1920, PD; CC BY-SA 4.0 in the file); GLAUx, verified 2026-11-02 | high | 3 | 3 | 4 | 4 | 3 | LARGE | Books (words / chapters): 1 29,086 / 216 (Croesus and Solon, Cyrus, Babylon); 2 24,667 / 188 (Egypt); 3 21,169 / 160; 4 22,411 / 205 (Scythia, Libya); 5 14,795; 6 15,591; 7 26,710; 8 15,820; 9 14,799 (m) |  |  |
| greece-italy-18 | The Law Code of Gortyn (IC IV 72, the "Great Code", 12 columns) | Greek / Cretan Doric (epigraphic) | c. 480–450 BCE (older laws behind it) | c. 480–450 BCE | the inscription itself (Gortyn) | A | 12 columns, ≈630 lines (r) | good (col. XII damaged) | **no open digital text**: PD scans Baunack 1885 (archive.org `dieinschriftvon00baungoog`), Bücheler–Zitelmann 1885 (`dasrechtvongort01philgoog`), Merriam 1886 (`lawcodegortynai00cretgoog`), all NOT_IN_COPYRIGHT, metadata verified 2026-11-02; the text itself NOT verified (Greek OCR unusable; to be keyed from page images; PHI 403) | medium | 3 | 5 | 3 | 3 | 3 |  |  | dn*.archive.org / ia*.us.archive.org (scans; "Full" access) | extends `חוקים-ובריתות/` |
| greece-italy-19 | The Cyrene cathartic law ("Apollo declared…", SEG 9.72) | Greek / Cyrenaean Doric (epigraphic) | 7th–4th c. BCE (presented as Apollo's oracle to the founders) | c. 330–300 BCE | the stele itself | A | 158 lines, 1,271 words (m) | fair (29 gaps, 189 supplements) | IGCyr `igcyr016700.xml` (EpiDoc, CC BY-NC 4.0), verified 2026-11-02 | medium | 3 | 5 | 2 | 4 | 3 |  |  | igcyr.unibo.it | extends `טקסי-שילוח-וטיהור/` (purity) or `חוקים-ובריתות/` |
| greece-italy-20 | The Linear B religious tablets (the Pylos Tn, Un, Fr, Es, Ep series and the Knossos Fp, Gg, Fs offerings to the gods) | Greek / Mycenaean (Linear B) | c. 1400–1180 BCE | same | the tablets themselves | A | ≈60–100 tablets, mostly 2–15 lines each (r) | good (fire-baked; some edges lost) | DAMOS (Oslo; CC BY-NC-SA 4.0): the item API answers (`/ajaxitem/<n>/`: transliteration + "themes"), verified 2026-11-02 on sample items (KN Fp 1, PY Un 2) | medium | 5 | 5 | 1 | 2 | 5 |  |  | damos.hf.uio.no |  |
| greece-italy-21 | The Iguvine Tables (the seven bronzes of the Atiedian Brethren) | Umbrian (Umbrian and Latin scripts) | ritual older than the bronzes (3rd c. BCE or earlier) | c. 200–70 BCE | the bronzes themselves (Gubbio) | A | 448 lines, ≈4,660 words (m): I 79, II 73, III 35, IV 34, V 47, VI 123, VII 57 | good (≈6 damaged lines) | TITUS Osco-Umbrian corpus (Gippert–Slunečko, transliteration; © TITUS: local use only), verified 2026-11-02; Poultney 1959 (archive.org `bronzetablesofig00poul`, "out of copyright", text + translation + glossary), verified 2026-11-02; Buck 1904 (PD) | low | 3 | 5 | 4 | 4 | 5 |  | (alternatives: the duplicated lustration I ↔ VIa–VIIa, 202 lines; VIa–VIIb alone, 180 lines, the Latin-letter version) | | extends `טקסי-שילוח-וטיהור/` (lustration, expulsion) |
| greece-italy-22 | Cato, De agricultura (whole, 162 chapters, with the farm prayers and charms) | Latin / Old and early Latin prose | prayers older; written c. 160 BCE | c. 160 BCE | Paris. lat. 6842A (12th–13th c.) and Politian's collation of the lost Marcianus | D | ≈15,700 words (m, Latin Library page) | good | The Latin Library `cato/cato.agri.html`, verified 2026-11-02; LacusCurtius (Goetz 1922 + Hooper–Ash Loeb 1934, both PD per Thayer), reported (its URL moved) | high | 2 | 3 | 3 | 3 | 4 |  | (alternative: the religious chapters only – 83, 131–132, 134, 139–141, 160) | www.thelatinlibrary.com, penelope.uchicago.edu |  |
| greece-italy-23 | Virgil, the Aeneid (12 books) | Latin / epic | 29–19 BCE (myth older) | 19 BCE | Vergilius Mediceus, Palatinus, Romanus (4th–5th c.) | D | 9,896 lines (m) | good | Perseus `phi0690.phi003.perseus-lat2` (Greenough 1900, PD; CC BY-SA markup) + LDT treebank (6.1–336), verified 2026-11-02 | high | 2 | 4 | 5 | 5 | 5 | LARGE | Books: 1 756, 2 804, 3 718, 4 705, 5 871, 6 901, 7 817, 8 731, 9 818, 10 909, 11 915, 12 952 (m). Units: Book 6 (the underworld, 901); Books 1–4 (Troy's fall, Dido, 2,983); Book 2 + 4 (1,509) |  |  |
| greece-italy-24 | Livy, Ab urbe condita Book 1 (the kings: Romulus to the expulsion of Tarquin) | Latin / prose | the regal-period traditions (8th–6th c. BCE), written c. 27–25 BCE | c. 27–25 BCE | 9th–10th-c. Nicomachean manuscripts | D | 17,608 words, 60 chapters (m) | good | Perseus `phi0914.phi001.perseus-lat2` (Weissenborn–Müller, PD; CC BY-SA markup), verified 2026-11-02 | high | 2 | 3 | 4 | 4 | 4 |  |  |  |  |
| greece-italy-25 | Ovid, the Fasti (the Roman ritual year, January–June) | Latin / elegiac | the festivals are old; written 2–17 CE | c. 8–17 CE | cod. Reginensis 1709 (10th c.) | D | 4,971 lines (m) | good | Perseus `phi0959.phi007.perseus-lat2` (Frazer, Loeb 1931: US public domain only from 2027-01-01 unless not renewed, so check before committing; Perseus markup CC BY-SA), verified 2026-11-02 | high | 2 | 3 | 3 | 4 | 3 | LARGE | Books: I January 724; II February 864 (Lupercalia, Parentalia, Terminalia); III March 884; IV April 954 (Parilia, Cerealia, the Great Mother); V May 733 (Lemuria); VI June 812 (m) |  |  |

### greece-italy-01 – Homer, the Iliad
- **What it is.** Fifty days of the tenth year at Troy: the wrath of Achilles, its cost, the death of Patroclus and of Hector, and Priam's ransom.
  - The gods are a quarrelling family. Death is final: the psyche goes to Hades "like smoke".
  - The two jars of Zeus (24.527–533) sum up the Greek view of fate.
  - It is the text the Greeks themselves treasured most: recited at the Panathenaea, taught to every schoolboy for a thousand years.
- **Scores.** C1 4: the diction keeps Mycenaean objects and forms (the boar's-tusk helmet, the tower shield, *-phi* endings), and the tradition was formed c. 1200–700. C2 4: formulaic oral poetry, fixed early.
- **Base and tools.** Monro–Allen (Perseus) + the full manual AGDT treebank; `tools/perseus2md.py` aligns them; LSJ (Perseus XML), Cunliffe and Autenrieth (PD).
- **Risks.**
  - Size: a whole Iliad needs the user's approval and several runs (≈6–8 at 2,000–2,500 lines each).
  - Formula consistency over 15,000 lines needs a formula table in the renderings from the first run (`hesiod_tools.py` already checks formulas).
  - Hebrew versions exist (Tchernichovsky, PD; Shabtai), which is not a criterion. Echo control must also keep Tchernichovsky's diction out.
- **A run needs:** a new corpus (`הומרוס/`) or an extension of `הסיודוס/` into an "early Greek epic" corpus, sharing renderings (the gods' epithets are shared). The tool is generalized from `hesiod_tools.py`.

### greece-italy-02 – Homer, the Odyssey
- **What it is.** The return of a man through monsters, the dead and disguise to a wife and son. It is the Greek picture of hospitality (*xenia*), the gods' justice (Zeus's speech 1.32–43) and the dead (Book 11: the mother he three times tries to embrace).
- **Base and tools.** As above (Murray; full treebank).
- **Risks and parts.** LARGE. Book 11 (640) and Books 9–12 (2,232) are self-contained and the natural first choice; Books 19–23 make the recognition.
- **A run needs:** the same as -01; the two epics share one renderings file.

### greece-italy-03 – The Homeric Hymns
- **What it is.** The proems the rhapsodes sang to a god before epic recitation.
  - The four long hymns are four myths of how a god took their place in the world:
    - Demeter: the rape of Persephone, the mother's grief, the failed immortalizing of Demophon, the founding of the Eleusinian Mysteries;
    - Apollo: Delos and Pytho, the dragoness;
    - Hermes: the infant thief and the lyre, the region's best humour;
    - Aphrodite and Anchises: Tithonus' immortality without youth.
  - The 29 short hymns are the shape of a Greek prayer.
- **Base and tools.** Evelyn-White (Perseus), the editor already used for Hesiod; the Demeter treebank; GLAUx for the rest; `perseus2md.py` works unchanged; the hexameter renderings of `הסיודוס/` transfer.
- **Risks.** Low. Hymn 1 (to Dionysus) is fragmentary in Evelyn-White (21 lines); the newer papyrus lines are in West's © Loeb, so mark it.
- **A run needs:** one run (≈2,340 lines), as a new project in `הסיודוס/` or a renamed early-epic corpus. The Hymn to Demeter pairs with Inana's and Ištar's descents (`העולם-התחתון/`).

### greece-italy-04 – The gold tablets
- **What it is.** Instructions buried with initiates, telling the soul what to say in the underworld. Examples:
  - "the spring on the left by the white cypress – do not approach it";
  - "I am a child of Earth and starry Heaven";
  - "now you have died and now you have been born, thrice blessed".

  Together they are the one corpus of Greek eschatology in the believers' own words, on the artifacts themselves.
- **Base.** Diels' seven texts (First1KGreek, CC BY-SA) and Tzifopoulos 2010 (CHS, CC 3.0: the Cretan tablets, with comparative texts). Hipponion, Pelinna, Pherai and the other post-1922 finds are only in © editions (Bernabé PEG II, Graf–Johnston 2013). The run keys their few lines from the © texts and records the edition. This is the folder's practice for supplements, but a © base must not be committed.
- **Risks.** Small items: the whole corpus is ≈300 lines. Several tablets are abbreviated or ungrammatical (that is evidence, not damage).
- **A run needs:** half a run, perhaps with greece-italy-05 as an "Orphic" corpus.

### greece-italy-05 – The Orphic Hymns
- **What it is.** The hymnal of a Dionysiac-Orphic cult group in Roman Asia Minor. Each hymn names the incense to burn: Night, Heaven, Protogonos, Nature, Pan, Persephone, Dionysus in many forms, Death (87). It is the only complete liturgical book of Greek paganism, a prayer cycle.
- **Base.** Abel 1885 on the Greek Wikisource (PD; the text is transcribed from the djvu and was checked in the rendered pages). The standard edition, Quandt (1955), is ©, so record its divergences only from memory and flag them.
- **Risks.** C1 2: the collection is Imperial, though its gods and epithets are old. GLAUx does not have it, so lemmatize from LSJ (dense compound epithets).
- **A run needs:** one run (≈1,100 lines), with -04 if the lead wants an Orphic corpus.

### greece-italy-06 – The Theognidea
- **What it is.** The sympotic book of Archaic Greece: advice to the boy Cyrnus, class bitterness, friendship and betrayal, wine, old age, "best for men never to be born" (425–428), and the erotic Book II.
  - It is the only Archaic elegy that survives as a book rather than as quotations.
  - It was copied as a school text for centuries.
- **Base.** GLAUx (Perseus source, CC BY-SA) with automatic lemma and morphology; el.wikisource as a check. The source edition is not named on the Wikisource page; GLAUx says "Perseus", so record which edition before the run.
- **Risks.** It is a compilation with doublets (lines repeated with variants); keep them, they are its nature.
- **A run needs:** one run; a renderings file for elegy (shared with Hesiod's diction).

### greece-italy-07 – Pindar's Victory Odes
- **What it is.** Choral songs for victors at the four great games, performed in procession at home. Myth, prayer and the limits of mortals: "creatures of a day: what is one? what is one not? a dream of a shadow is man" (Pyth. 8.95–96), and the afterlife of Ol. 2.
- **Base.** Sandys (Loeb 1915, PD) + GLAUx.
- **Risks.** Pindar is the hardest Greek of the region: compressed syntax, Doric forms, allusive myth. Readable `medium`. The total is LARGE by 459 lines, so one book per run: the Olympians (1,011) first.
- **A run needs:** a choral-lyric renderings section; the scholia are not open (Drachmann is PD on archive.org, if wanted).

### greece-italy-08 – Aeschylus, the Oresteia
- **What it is.** The only surviving tragic trilogy. A curse in a house, a sacrifice of a daughter, a wife's murder of her husband, a son's matricide, the Furies, and the founding of the Areopagus where blood-guilt passes from vengeance to a court. It is the Greek mind on justice, pollution and the gods.
- **Base.** Smyth (Loeb 1926, PD); AGDT treebank for Ag. and Eum.; GLAUx for Cho.
- **Risks.** LARGE (3,796). Choral lyrics are corrupt in places (Smyth's text is older than Page's OCT, which is ©), so flag the cruxes. Each play is a whole unit (1,047–1,673), as the alternatives.
- **A run needs:** a tragedy renderings file (meters: iambic vs. lyric), shared with -09 to -13.

### greece-italy-09 – Aeschylus, the Persians
- **What it is.** The oldest surviving play (472 BCE). It shows the defeat at Salamis from the Persian court: a queen's dream, the messenger's catalogue of the dead, and the ghost of Darius raised by necromancy to name the cause, hubris. It is a lament for the enemy.
- **Base.** Smyth + GLAUx.
- **Risks.** Low.
- **A run needs:** the tragedy renderings.

### greece-italy-10 – [Aeschylus], Prometheus Bound
- **What it is.** The Titan nailed to the Caucasus for giving fire and the arts to mortals, against a new and tyrannical Zeus. Io wanders through the known world. It is the tragic counterpart of the Hesiodic Prometheus already in the folder.
- **Base.** Smyth + GLAUx.
- **Risks.** Authorship is debated (perhaps 440–430); say so in the introduction.
- **A run needs:** the tragedy renderings, and cross-references to `הסיודוס/`.

### greece-italy-11 – Sophocles, Antigone
- **What it is.** A sister buries a brother against the king's edict: "the unwritten and unfailing laws of the gods" (450–457) against the city's. It holds the Ode on Man (332–375) and her lament as a bride of Hades.
- **Base.** Storr (Loeb 1912, the Greek is Jebb's; PD) + GLAUx.
- **Risks.** Low.
- **A run needs:** the tragedy renderings.

### greece-italy-12 – Sophocles, Oedipus Tyrannus
- **What it is.** A plague, an oracle, a pollution to be driven out, and a king who discovers that he is the polluter. It is the Greek view of fate, the oracle and the limits of knowledge, and the central play of the ancient canon (Aristotle's model).
- **Base.** Storr + the AGDT treebank (manual).
- **Risks.** Low.
- **A run needs:** the tragedy renderings.

### greece-italy-13 – Euripides, the Bacchae
- **What it is.** Dionysus comes home to Thebes; the women go to the mountain; the king who resists is torn apart by his mother. It is the fullest picture of maenadic ritual and of a god's terrible epiphany.
- **Base.** Murray (OCT, PD; CC BY-SA in the file) + GLAUx.
- **Risks.** The lacuna after 1329 (Agave's lament and the god's speech) is partly restored from the *Christus Patiens*. Mark it; do not fill it.
- **A run needs:** the tragedy renderings.

### greece-italy-14 – Aristophanes, the Frogs
- **What it is.** Dionysus goes down to Hades to fetch back a dead poet. On the way are the frog chorus and the chorus of Eleusinian initiates in the meadows of the blessed; then comes the contest of Aeschylus and Euripides.
  - It is the region's best witness to how the Greeks laughed at their gods and at death.
  - It was one of the three Aristophanes plays of the Byzantine school canon.
- **Base.** Hall–Geldart (OCT, PD; CC BY-SA) + GLAUx.
- **Risks.** Puns and topical jokes need a dense apparatus. Obscenity is translated, not softened.
- **A run needs:** a comedy section in the renderings.

### greece-italy-15 – Plato's first tetralogy (the death of Socrates)
- **What it is.** Thrasyllus' first tetralogy, as antiquity arranged it.
  - Piety questioned at the court door (Euthyphro).
  - The defence speech (Apology).
  - The refusal to escape (Crito).
  - The last day, the arguments for the soul's immortality, the myth of the true earth and the underworld rivers, and the death (Phaedo, the most-read Greek prose text of late antiquity).
- **Base.** Burnet (OCT, PD); Euthyphro treebanked; GLAUx for all.
- **Risks.** LARGE as a unit (≈41,000 words). The Apology + Crito (13,035 words) and the Phaedo alone are the alternatives. The C1 3 / C2 3 scores reflect that this is authored philosophy; the scores for what the culture treasured and for the inner world carry it.
- **A run needs:** a prose renderings file (philosophical terms: ψυχή, ἀρετή, τὸ καλόν), new for the folder.

### greece-italy-16 – Plato, the Symposium
- **What it is.** Seven speeches on Eros at a drinking party:
  - Aristophanes' myth of the cut-in-half humans;
  - Diotima's ladder of love;
  - the drunken Alcibiades' praise of Socrates.

  It is the ancient text on love.
- **Base.** Burnet + GLAUx.
- **Risks.** Low. Erotic content is translated as written.
- **A run needs:** the prose renderings (with -15).

### greece-italy-17 – Herodotus, the Histories
- **What it is.** The first history. It is also the first ethnography: how Egyptians, Persians, Scythians, Babylonians and Greeks prayed, buried, married and judged. Solon and Croesus on happiness (1.30–33) is the Greek wisdom of the limit.
- **Base.** Godley (Loeb, PD; CC BY-SA) + GLAUx.
- **Risks.** Very LARGE (185,000 words). Only books are realistic: Book 1 (29,086 words) or Book 2 (24,667). Hebrew translations exist (not a criterion).
- **A run needs:** the prose renderings. It overlaps the Egypt and Mesopotamia corpora (names).

### greece-italy-18 – The Gortyn Code
- **What it is.** The longest Greek law, cut c. 450 BCE on a curved wall in boustrophedon. It covers:
  - procedure;
  - rape and adultery tariffs by status;
  - divorce;
  - the children of slaves;
  - inheritance;
  - the heiress (*patroiōkos*), who must marry her nearest paternal kinsman;
  - adoption.

  It is how a Greek city ordered family, slavery and property, in the city's own words.
- **Base.** No open digital text: PHI (Willetts' text) answers 403, and no EpiDoc edition exists. The 1885–86 public-domain editions on archive.org (Baunack; Bücheler–Zitelmann; Merriam) must be transcribed from page images, as the Egypt run did for Demotic. Check against Willetts 1967 (©).
- **Risks.** Keying errors, and archaic Cretan letters (no η/ω, digamma).
- **A run needs:** the archive.org page-image downloads (they redirect to `dn….archive.org`: "Full" network access, or a person downloads them); the `חוקים-ובריתות/` tools (`laws_*.py` model).

### greece-italy-19 – The Cyrene cathartic law
- **What it is.** Apollo's purity rules for the colony:
  - birth pollutes "the roof", while those outside it are not polluted;
  - sex by night or by day;
  - the tithes;
  - the treatment of suppliants and "visitants" (ἱκέσιοι, spirits to be laid).

  It is the best-preserved Greek purity law with an open text.
- **Base.** IGCyr EpiDoc (CC BY-NC 4.0; the licence is not in the XML, it is stated on the site).
- **Risks.** Fair condition: 189 supplements and 29 gaps (the supplements are the editors', so mark them). C3 is low (a city's law).
- **A run needs:** `igcyr.unibo.it`. It joins `טקסי-שילוח-וטיהור/` or a Greek law project with -18.

### greece-italy-20 – The Linear B religious tablets
- **What it is.** The oldest Greek: palace records of offerings to Poseidon, Zeus, Hera, "the Mistress", Dionysus and the Erinys.
  - PY Tn 316, the gold vessels, perhaps written in the palace's last days;
  - PY Un 718, offerings to Poseidon by king, war-leader and people;
  - PY Ep 704, the priestess's lawsuit;
  - the Fr perfumed-oil tablets;
  - KN Fp 1, oil to "all the gods" by month.
- **Base.** DAMOS (CC BY-NC-SA 4.0) answers now. The item API returns the transliteration and a "themes" tag, so the set can be built by filtering on "religion".
- **Why the size is reported.** I did not bulk-download DAMOS. The session's permission check refused a scan of all ≈6,400 item ids, so the count (≈60–100 tablets) is reported. The lead may ask the site's maintainer for a dump, or build the list from a published selection (Palaima; Bendall 2007).
- **Risks.** The texts are terse, logograms carry the meaning, and the syllabary is ambiguous; the apparatus does the work. C3 1 and C4 2: chance documents of an administration. Whether a thematic set counts as "one whole" is the lead's call.
- **A run needs:** `damos.hf.uio.no`; a Linear B set-up (syllabary → transcription table, logogram list, Aura Jorro's *Diccionario micénico* is ©: consult).

### greece-italy-21 – The Iguvine Tables
- **What it is.** The rule-book of a priestly brotherhood of Iguvium (Gubbio):
  - the bird-augury before the rite;
  - the lustration of the Fisian Mount, with sacrifices at three gates to Jupiter, Mars and Vofionus Grabovius;
  - the prayers repeated three times;
  - the lustration of the people, with the ritual curse and expulsion of the neighbouring peoples;
  - the brotherhood's dues.

  The main rite was cut twice (I in the Umbrian alphabet, VIa–VIIa expanded in Latin letters), which shows how it was valued. It is the longest ritual text of ancient Italy, and the only whole one.
- **Base.**
  - TITUS (complete transliteration; © TITUS, so local use only and not committed, like the ŚB pages in `הוודה-והאווסטה/`).
  - Poultney 1959 (out of copyright, verified: text, translation, commentary, glossary).
  - Buck 1904 (PD grammar and glossary).
- **Risks.** Umbrian is partly understood: about 20–30% of the words are uncertain, so the translation leans on Poultney's and Weiss's interpretations. Every crux needs a visible mark.
- **A run needs:** an Umbrian set-up (see New languages); TITUS (in `domains.txt`) and archive.org.

### greece-italy-22 – Cato, De agricultura
- **What it is.** The oldest Latin prose book: a farm manual of the 2nd century BCE that keeps the old Roman prayers and charms. Examples:
  - the lustration of the fields with pig, sheep and bull, *Mars pater te precor quaesoque* (141);
  - the expiation before cutting a grove, *si deus si dea es* (139);
  - the offering to Jupiter Dapalis (132);
  - the charm for a dislocation (160).

  Read whole, it shows the prayers inside the life they served.
- **Base.** The Latin Library (verified); LacusCurtius (PD Goetz + Loeb) reported. Its old URL now answers 404; find the current one.
- **Risks.** C1 2 and C3 3. Most chapters are practical (wine, oil, slaves). The religious chapters alone are the alternative. They are a dozen passages from a whole book, so they are not a whole text.
- **A run needs:** a Latin set-up (new to the folder); Lewis & Short (Perseus XML on raw GitHub, verified); `www.thelatinlibrary.com`.

### greece-italy-23 – Virgil, the Aeneid
- **What it is.** Rome's own epic, the school text of the Latin West from the start. It tells:
  - the fall of Troy;
  - Dido;
  - the underworld of Book 6 (the souls' purification and rebirth, the parade of the unborn Romans);
  - the war in Latium.

  It is Rome's picture of piety, fate and loss.
- **Base.** Greenough (PD) + the LDT treebank for 6.1–336.
- **Risks.** LARGE (9,896). Book 6 (901) is the natural self-contained part. C1 2: authored in 19 BCE; the scores for the other criteria carry it.
- **A run needs:** the Latin set-up; a Latin hexameter renderings file.

### greece-italy-24 – Livy, Book 1
- **What it is.** Rome's account of its kings: Romulus and Remus, the rape of the Sabines, and Numa's founding of the priesthoods and calendar. It keeps the fetial treaty oath with the struck pig (1.24) and the fetial declaration of war (1.32), the Horatii, Lucretia and the end of kingship. The archaic formulas survive here, in a whole book.
- **Base.** Weissenborn–Müller (Perseus, PD).
- **Risks.** It is a retelling 500 years after the events (C2 3).
- **A run needs:** the Latin set-up, prose renderings.

### greece-italy-25 – Ovid, the Fasti
- **What it is.** The Roman religious calendar, January to June, day by day: the Lupercalia, the Parentalia for the dead, the Terminalia, the Parilia, the Lemuria (beans thrown at night to the ghosts), with the rites and their aetiologies. It is the fullest picture of Roman ritual life.
- **Base.** Frazer (Loeb 1931).
- **Risks.**
  - US copyright status: 1931 works enter the public domain on 2027-01-01, unless the copyright was not renewed. Check before committing; until then keep the text local.
  - It is LARGE (4,971 lines); each month-book (724–954) is a part.
  - Ovid plays with his material, so separate the rite from his wit in the apparatus.
- **A run needs:** the Latin set-up; an elegiac renderings section.

## Excluded

- **Sappho, Alcaeus, Anacreon, Archilochus, Alcman (the Partheneion ≈100 damaged lines), Ibycus, Stesichorus.** Fragmentary; the open bases are PD scans with unusable Greek OCR, and Voigt and PMGF are ©. Sappho's four whole poems are very short.
- **Solon, Tyrtaeus, Mimnermus, Semonides, Xenophanes.** Fragments, quoted by later authors; no whole text.
- **The Presocratics** (Anaximander, Heraclitus, Parmenides ≈160 lines of B1–B19, Empedocles with the Strasbourg papyrus, Pherecydes). Fragmentary; Diels is PD but the Greek OCR is unusable; Laks–Most ©.
- **The Hesiodic *Catalogue of Women*, the *Shield*.** The Catalogue is fragmentary (papyri, © best text); the Shield is planned in Round 6.
- **The Epic Cycle.** Proclus' summaries and fragments.
- **The Orphic Rhapsodies, the Derveni papyrus.** The Rhapsodies are fragments. Derveni has only the tops of 26 columns; its text is © Olschki 2006 (consult only).
- **Berossus and Abydenus as whole texts.** Fragments in Josephus, Eusebius and Syncellus; the flood excerpt is already in the folder.
- **The Twelve Tables.** Not a surviving whole: a modern reconstruction of ≈100 clauses from quotations (≈700 words on the Latin Library); Crawford 1996 is ©.
- **The Carmen Arvale (96 words), the Carmen Saliare, the Lapis Niger, the Duenos vase, the Praeneste fibula, the Scipionic elogia, the SC de Bacchanalibus (≈30 lines).** Very short, or highly damaged.
- **The Acta Fratrum Arvalium.** Damaged annual records (21 BCE–304 CE); Scheid's edition is ©.
- **The devotio (Livy 8.9) and the evocatio (Macrobius 3.9).** Excerpts of larger works.
- **The Laudatio Turiae.** About half is lost.
- **Etruscan (the Liber Linteus ≈1,200 legible words; the Tabula Capuana; the Cippus Perusinus; the Pyrgi tablets; the Piacenza liver).** Not readable with control: the secure vocabulary is a few hundred words and continuous translation is speculative. Pyrgi and the liver are also very short; the Phoenician Pyrgi tablet belongs to the Levant survey.
- **Oscan (the Tabula Bantina, the Cippus Abellanus, the Agnone tablet), South Picene, Faliscan, Venetic, Messapic.** Short, damaged or poorly understood. The Agnone tablet (a list of gods in a grove) could be appended to -21.
- **Linear A, Cretan hieroglyphic, the Phaistos disc, Cypro-Minoan, Eteocretan, Eteocypriot, the Lemnos stele.** Undeciphered or not understood.
- **The Idalion bronze (Cypriot syllabary, 31 lines), the Dreros law (≈6 lines), Draco's homicide law (≈20 legible lines), the Teos curses.** Very short or damaged; Teos has no open base.
- **The Selinous lex sacra.** Fair condition, but its edition (Jameson–Jordan–Kotansky 1993) is ©, and CGRN (open) is unreachable (connection refused). NOT verified; revisit if CGRN opens.
- **The CGRN sacred laws as a corpus.** Unreachable (`cgrn.uliege.be`, `cgrn.ulg.ac.be` refused). NOT verified.
- **Greek curse tablets, Nestor's cup, the Dipylon jug, the Mantiklos Apollo, Phrasikleia.** Very short single items; no open corpus (PHI 403; Wünsch and Audollent are scans).
- **The Delphic paeans, the Hymn of the Kouretes, Cleanthes' Hymn to Zeus, Isyllus, the Isis aretalogies.** Short (or damaged musical inscriptions).
- **Aeschylus' Suppliants and Seven, the other plays of Sophocles (Ajax, Electra, Trachiniae, Philoctetes, Oedipus at Colonus) and Euripides (Alcestis, Medea, Hippolytus …).** Whole and open (Perseus, measured 1,072–1,779 lines), but below the line against the chosen ones. Any can be swapped in. Oedipus at Colonus (1,779) is the closest runner-up, for the death and hero-cult of Oedipus.
- **Aristophanes' Birds (1,765; the Orphic egg) and Clouds (1,511).** Open and whole; below the line against the Frogs.
- **Thucydides, Xenophon, the orators, Aristotle, the Hippocratic corpus.** Authored, classical or later; lower on the inner-world criterion, or technical.
- **Hellenistic poetry (Callimachus' Hymns, Theocritus, Apollonius' Argonautica, Aratus' Phaenomena 1,154 lines (m), Lycophron).** Authored, after 300 BCE, below the line. Aratus is the runner-up: much loved in antiquity, with Dike's departure from earth.
- **Imperial Greek (Apollodorus' Bibliotheca, Pausanias, Plutarch, Lucian).** Retellings or descriptions; useful in the apparatus. Plutarch's *Isis and Osiris* belongs to the Egypt survey, and Lucian's *De Dea Syria* to the Levant survey.
- **Aesop.** The collections are Imperial and Byzantine compilations.
- **The Greek Magical Papyri, the Mithras Liturgy, the Hermetica, the Chaldaean Oracles, the Sibylline Oracles.** Late (2nd–5th c. CE), syncretistic or Jewish-Christian. The Hermetica belong to the Egypt survey.
- **Lucretius, Catullus, Horace, Propertius, Tibullus, Ovid's Metamorphoses (12,002 lines (m)), Seneca, Plautus, Terence, Ennius, Livius Andronicus, Naevius.** Below the line: authored literature (Plautus and Terence adapt Greek comedy; the Metamorphoses retell Greek myth already reachable in Greek; the early epic poets survive in fragments).
- **The Res Gestae of Augustus.** Political, with little of the inner world.
- **Iberian, Celtiberian (Botorrita), Tartessian, Lusitanian.** Not understood, or very short. Gaulish belongs to the Europe survey.
- **Tainted or false material.** The 2014 "Brothers" and "Kypris" Sappho poems (the Obbink provenance affair); the Loeb and Ventris–Chadwick PDFs on archive.org (unauthorized uploads); "decipherments" of Etruscan from outside academia.

## New languages

- **Latin** (new to the folder; Old Latin in Cato and the Livian formulas).
  - Base: Perseus `canonical-latinLit` (PD editions, CC BY-SA markup), the Latin Library.
  - Dictionaries: Lewis & Short (Perseus XML, raw GitHub, verified); the OLD is © (consult).
  - Morphology: the LDT treebank covers only Aeneid 6.1–336 and Metamorphoses 1. Otherwise Claude's own parsing, checked against Lewis & Short. The open LASLA and LiLa lemmatized corpora could be checked by the lead; not verified here.
  - Claude's confidence: high.
  - Set-up: a Latin → Hebrew grammar mapping (the ablative absolute, the gerundive, the sequence of tenses, the subjunctive of prayer), a name table (Latin god-names vs. their Greek equivalents: keep the Latin), and the renderings.
- **Umbrian.**
  - Base: TITUS (transliteration, local use only).
  - Interpretation: Poultney 1959 (out of copyright: text, translation, commentary, glossary) and Buck 1904 (PD grammar and glossary); Untermann 2000 *Wörterbuch des Oskisch-Umbrischen* and Weiss 2010 are © (consult).
  - Morphology: none machine-readable; Buck's grammar tables.
  - Claude's confidence: low to medium. The grammar is clear (an Italic sister of Latin) and the rite's structure is clear from the repetitions, but much of the vocabulary is uncertain.
  - Set-up: a word-by-word glossary with each gloss's source (Poultney, Buck, Untermann) and its certainty, and a note on the two scripts.
- **Mycenaean Greek (Linear B).**
  - Base: DAMOS (CC BY-NC-SA).
  - Dictionaries: Aura Jorro's *Diccionario micénico* (©; its host `dge.cchs.csic.es` failed on 2026-10-21); Ventris–Chadwick² (©); the *Companion to Linear B* (©).
  - Claude's confidence: medium. It reads the syllabary and the conventions, but the spelling's ambiguity and the logograms need the dictionary.
  - Set-up: a syllabary and logogram table, and a rule for showing the transcription beside the Greek interpretation.
- **Greek dialects** (not new languages). Cretan Doric (Gortyn) and Cyrenaean Doric need a short dialect note in the renderings (ā for η, the archaic alphabet, digamma). Attic tragedy and prose need prose and choral-lyric sections beside Hesiod's epic renderings. GLAUx (CC BY-SA 4.0, `raw.githubusercontent.com/alekkeersmaekers/glaux/main/xml/<TLG>.xml`, e.g. `0002-001.xml`) gives AGDT-format lemma, morphology and syntax for every Greek candidate except the Orphic Hymns. `tools/perseus2md.py` should read it with little change.

## Hosts

Hosts not in `domains.txt` that the region needs:
- `www.thelatinlibrary.com`: Cato (-22), the Twelve Tables and Carmen Arvale for reference. Reachable today.
- `penelope.uchicago.edu`: LacusCurtius (Cato's PD Latin and Loeb translation; other Latin texts). Its old Cato URL answered 404 today; the host answers.
- `igcyr.unibo.it`: the Cyrene cathartic law, EpiDoc (-19). Reachable.
- `damos.hf.uio.no`: Linear B, DAMOS (-20). Reachable today (it was refused on 2026-10-21).
- `chs.harvard.edu` (and `www-current.chs.harvard.edu`): Tzifopoulos 2010, the gold tablets (-04); the Derveni pages for reference. Reachable.
- `dn….archive.org` / `ia….us.archive.org`: the page images and texts of the public-domain scans (Gortyn -18, Poultney and Buck -21). `archive.org` itself is listed, but its downloads redirect to changing hosts ("Full" access, or a person downloads them).
- Optional:
  - `logeion.uchicago.edu` (the web view; its API host `anastrophe.uchicago.edu` is listed but failed today);
  - `glaux.be` (the GLAUx query interface; the data itself is on raw GitHub);
  - `www.attalus.org` (Iguvine and SEG links; reachable);
  - `scaife.perseus.org` (reader; reachable).

Still refused today, to unblock if the user can:
- `cgrn.uliege.be` / `cgrn.ulg.ac.be` (the Greek sacred laws);
- `inscriptions.packhum.org` (PHI Greek inscriptions, 403: Gortyn, Draco, Teos);
- `www.etp.classics.umass.edu`, `www.mnamon.sns.it`, `www.thesaurus-linguae-etruscae.de` (Etruscan; not needed since Etruscan is excluded);
- `db.edcs.eu` (Latin inscriptions).

Sources fetched for this survey (all on 2026-11-02):
- the Perseus TEI and treebank files under `raw.githubusercontent.com/PerseusDL/…`;
- First1KGreek `tlg0579.tlg010`;
- GLAUx `metadata.txt` and `xml/0002-001.xml`;
- el.wikisource (the Orphic Hymns, the Theognidea);
- TITUS `texte/etcs/ital/oskumb/oskum001–012.htm`;
- IGCyr `igcyr016700.xml`;
- DAMOS (home page, the about page, `ajaxitem/1/`, `/100/`, `/5000/`);
- archive.org metadata and advanced search;
- the Latin Library;
- the CHS Tzifopoulos page.

One web search was used: [Gortyn digital editions](https://grbs.library.duke.edu/article/viewFile/6271/5147) (Gagarin on the standard edition IC IV 72); [Roby's English Gortyn](https://amesfoundation.law.harvard.edu/RL/mats/GortynCode_Roby.pdf); [BnF record of Willetts 1967](https://catalogue.bnf.fr/ark:/12148/cb33072916k); [Kallipos chapter](https://repository.kallipos.gr/handle/11419/11325). No open digital Greek text of Gortyn was found.

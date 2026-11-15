# Allen 2013 – A New Concordance of the Pyramid Texts, vol. I

- **What:** James P. Allen, *A New Concordance of the Pyramid Texts*, vol. I: Introduction, Occurrences, Transcription
  (Brown University, 2013; six PDF volumes, "freely available via the internet"). Vol. I lists every occurrence of every
  spell in the pyramids of Unas to Pepi II's queens (wall codes, with Sethe's and Jéquier's old column numbers) and
  transcribes every spell line by line: Allen's sequential line numbers per spell (`PT 213.1`), Sethe's Pyr. paragraph
  under each, and the variant readings of the pyramids (the oldest first; `NN` for the king's name).
- **URL:** https://isac-idb-static.uchicago.edu/multimedia/301963/PT%20I%20(Introduction).pdf (retrieved 2026-11-13; the
  other volumes, hieroglyphic, on the same host).
- **Licence:** © J. P. Allen (free to read, no open licence). **Git-ignored** (the PDF, its text and our parse); only this
  README is committed. Consulted per spell, never reproduced in the translation files.
- **Here (local only):** `PT I (Introduction).pdf`; `PT I (Introduction).txt` and `allen-transcription.json` (made by
  `python3 -I -B ../../חכמה-ובריאה-במצרים/egypt_tools.py allen-convert`: every spell's numbered lines, Pyr. §, variants).
- **Used for** the Pyramid Texts of Unas (`חכמה-ובריאה-במצרים/10-טקסטי-הפירמידה-של-אונאס/`, Round 8 run 1): (1) the
  **line division and numbering** of the composite (our labels `<spell>.<Allen line>`: the citation system, not his
  text); (2) the **wall order** of Unas's 231 occurrences ("Occurrences", Sethe's columns 1–649); (3) a **check** of the
  AED base, line by line (`egypt_tools.py data UN…` prints it); (4) the base of the few spells AED lacks (siglum `A` in
  `composite-UN.tsv`: PT 271 and a few offering-ritual and antechamber spells whose AED copies are missing or do not match),
  read here and translated – the annotated files carry only a reference in place of the transliteration line.
- **Line numbering:** per spell, 1…n; two slips in his numbering (PT 278 "2, 2, 3"; PT 301 "35, 35") are labelled `2b`,
  `35b` by our tools.
- **Usefulness:** essential – the only complete, current transliteration of every spell and the standard numbering.
  Its Unas readings are from photographs (vol. I, preface).

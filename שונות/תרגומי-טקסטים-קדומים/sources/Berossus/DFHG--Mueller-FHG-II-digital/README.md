# Digital Fragmenta Historicorum Graecorum (DFHG) — Berosus Chaldaeus (FHG II 495–510) and Abydenus (FHG IV 279–285)

- **Editors:** Monica Berti & Gianluca Cumani (Universität Leipzig), digitising Karl (Carl) Müller, *Fragmenta Historicorum Graecorum*, vol. II (Paris: Didot, 1848) and vol. IV (1851).
- **URLs:** project http://www.dfhg-project.org/ ; API http://www.dfhg-project.org/DFHG/api.php?author=BEROSUS%20CHALDAEUS and …?author=ABYDENUS ; browse http://www.dfhg-project.org/DFHG/index.php?volume=Volumen%20secundum . CTS URN of the flood fragment: `urn:lofts:fhg.2.berosus_chaldaeus.berosi_chaldaei_fragmenta.de_rebus_babyloniorum.e_libro_secundo:7`.
- **Retrieved:** 2026-10-16
- **Licence:** "Contents of the DFHG project are licensed under a Creative Commons Attribution-ShareAlike 4.0 International License"; Müller's 19th-c. text is public domain.

## Files
- `dfhg-api--BEROSUS-CHALDAEUS.json` (37 records), `dfhg-api--ABYDENUS.json` (13 records) — raw API output (fields: fragment_number, witness, page, text, translation [Müller's Latin], note, commentary, urn).
- **`Berossus-fr7--Xisouthros-flood--Greek.md`** — the flood fragment: Greek (Syncellus p. 30 A Paris ed., Alexander Polyhistor's excerpt, sections (1)–(7)) + Müller's Latin version from the *Armenian* Eusebius (Mai's ed. p. 14) + Müller's notes.
- `Berossus--all-fragments-FHG-II.md` — all Berosus fragments (incl. fr. 1 creation/Oannes, fr. 4–5 the ten antediluvian kings, fr. 6 Abraham, etc.).
- `Abydenus--fr1-3-flood--FHG-IV.md` — Abydenus' kings and flood (Seisithros: Kronos' warning, birds, ark in Armenia).
- Converter: `../../../tools/dfhg2md.py`.

## Text conventions
Polytonic Greek exactly as DFHG has it (NFC Unicode). The only normalisation: DFHG's OCR artefact "space + U+0313" for elision (e.g. `παρ ̓`) → `’`. Müller's inline critical remarks are kept in parentheses (e.g. `(deb. Ὀτιάρτου)`, `(Σιππάροις Scaliger)`, `(quindecim, Eus.)`, `(scr. πεζῇ; pedestri itinere Eus.)`). Some residual OCR errors are possible (e.g. "Eused." for "Euseb.", "otirtae" in the Latin); verify against the scan in `../Mueller-FHG-II/`.

## Line/section numbering
Müller's fragment numbers (fr. 7) and his section numbers (2)–(7) inside the fragment; FHG page (501). Concordance: FHG fr. 7 = FGrH 680 F4.

## Assessment
**Best freely available clean Greek of the Berossus flood story.** Müller's text is old (1848) but adequate; Jacoby (1958) is the critical standard.

## Correction (2026-10-16)
DFHG's digital text omits a whole printed line in fr. 7 §2. The cause is homoeoteleuton: καὶ π… is followed by καὶ π…. Müller prints "ἐνθέσθαι δὲ βρώματα **καὶ πόματα, ἐμβαλεῖν δὲ καὶ ζῶα πτηνὰ καὶ τετράποδα,** καὶ πάντα εὐτρεπισάμενον πλεῖν" (FHG II p. 501, left column = PDF p. 566 of the scan in `../Mueller-FHG-II/`). The restored words are inserted in `Berossus-fr7--Xisouthros-flood--Greek.md` between ⟨ ⟩. The raw API JSON is left as downloaded. **Lesson:** always check digital Greek against the page images.

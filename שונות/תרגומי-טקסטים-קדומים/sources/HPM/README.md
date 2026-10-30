# HPM – Hethitologie-Portal Mainz: critical editions (Hittite)

- **What:** the clause-numbered critical editions ("kola") of the Hethitologie-Portal Mainz, `hethport.net` (the new address
  of `hethiter.net`; it was offline on 2026-10-21 and answered again on 2026-10-23/24). Each edition gives, per clause, the
  editor's composite (`--`), every manuscript's line with its tablet label, and the editor's translation.
  - `CHiL--CTH-291.1` … `CHiL--CTH-291.PT`: **the Corpus of Hittite Laws** (G. Torri, L. Warbinek, A. Carnevale, ed.,
    hethiter.net/: CTH 291.x, TX 2026-08-30, TR 2026-07-31), the first tablet "If a man" in its six versions: 291.1 the
    Old Hittite manuscripts (KBo 6.2 = KBo 22.62+ etc.), 291.2 the 13th-century standard text (KBo 6.3 etc.; the base of
    the usual § numbering, HL 1–100), 291.3–291.5 deviating versions, 291.PT the "late parallel text" (KBo 6.4, the
    scribe Ḫanikkuili; §§ I–XLI). Words carry TLHdig's lemma and German gloss; the translation is **Italian**.
    CTH 292 (the second tablet, "If a vine", HL 101–200) is **not edited** in CHiL yet (2026-10-24): its composite is ours,
    from TLHdig (`../TLHdig/CTH-292/`).
  - `BESRIT--CTH-394` (Ašḫella, A. Chrzanowska, TX 13.07.2016, German), `BESRIT--CTH-410` (Uḫḫamuwa, S. Görke, German),
    `BESRIT--CTH-407` (Puliša, B.-J. Collins, English), `BESRIT--CTH-391.1` and `BESRIT--CTH-391.2` (Ambazzi and its second
    version, B. Christiansen, German): the project "Beschwörungsrituale der Hethiter" (txhet_besrit).
  - The Instructions for Temple Personnel (CTH 264) have **no HPM edition** (2026-10-24): composite ours, from TLHdig.
  - `MYTH--CTH-<n>` (added 2026-10-30, Round 5 run 2): **"Mythen der Hethiter"** (E. Rieken et al., Marburg, 2009–;
    `txhet_myth`, German), the same page format as BESRIT: CTH 321 (Illuyanka), 324.1–9 (Telipinu), 342.1.1–2.5
    (Elkunirša), 344 (the Song of Emergence), 345.I.1–10 (Ullikummi), 346.1–21 (Kumarbi fragments), 348.I.1–29 (Ḫedammu),
    360.1–4 (Appu). Fetch: `python3 -I tools/hpm2md.py fetch MYTH "CTH 348.I.1" sources/HPM/MYTH--CTH-348.I.1 "E. Rieken et
    al." DE`, then `parse`. The index: `https://hethport.net/txhet_myth/textindex.php?g=myth&x=`. Not in HPM: the Tale of
    Zalpa (CTH 3) and the Song of Release (CTH 789): our composites from TLHdig.
- **URL:** `https://hethport.net/txhet_chil/partitur.php?xst=CTH%20291.2&lang=EN&praep=1`;
  `https://hethport.net/txhet_besrit/partitur.php?xst=CTH%20394&prgr=§1&lg=DE&ed=A.%20Chrzanowska` (one page per §) and
  `…/translatio.php?…`.
- **Retrieved:** 2026-10-24 (Round 4 run 6).
- **Licence:** **CC BY-SA 4.0** (stated on every page: "This work is licensed under a Creative Commons Attribution-ShareAlike
  4.0 International License"). The parsed files are committed; the raw HTML (`*/raw/`, 8 MB) is git-ignored and re-fetched
  by `python3 -I tools/hpm2md.py fetch CHIL "CTH 291.2" sources/HPM/CHiL--CTH-291.2` (or `fetch BESRIT "CTH 394"
  sources/HPM/BESRIT--CTH-394 "A. Chrzanowska" DE`), then `parse`.
- **Files per edition:** `edition.json` (sections, clauses: composite, words with lemma and gloss [CHiL], manuscripts,
  translation, notes), `reading-edition.md` (no translation), `translation-rank3.md` (the editor's translation: **rank 3,
  read only after drafting**), `fetch-meta.json`.
- **Numbering:** the clause numbers ("kola") of each edition are our line labels (the HPM citation form "CTH 394 §2, kolon
  4"); the Laws' § numbers (HL n, Hoffner's numbering) are CHiL's section titles; the manuscript labels are the tablets'
  (Vs./Rs. column line).
- **Usefulness:** rank 1 for the composite (a current critical edition with every manuscript), rank 3 for the
  translations. Read through `tools/hpm2md.py` and `tools/hittite_tools.py`.

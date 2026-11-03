# Region survey – egypt (2026-11-02)

Old, Middle and Late Egyptian and Demotic. Coptic is out of scope (Christian, after 500 CE) and is listed under Excluded.
All sizes marked `(m)` were measured today with a regex script over the AED-TEI files (3,215 files fetched from raw GitHub: every literary, Pyramid Text, letter, Ramesside, funerary-ritual, medical and Late Period text, and the Amarna hymns). `lb` means `<lb>` lines. `lost` means the share of words that are `<gap>` or mostly `<supplied reason="lost">`. "Broken lines" are lines that are half or more lost. Scratch data: `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/egypt/` (`m.tsv` = one row per file, `scripts/measure.py`).

## Key findings

- **Egypt's own centre was three things: the funerary liturgy (the Pyramid Texts, then the Coffin Texts and the Book of the Dead), the instructions (*sbꜣyt*) and the school classics (Ptahhotep, Kemit, Khety, Amenemhat, Any, copied on hundreds of ostraca), and the hymns.** The folder has the Book of the Dead (Round 6), Amenemope, Merikare (Round 6), and four tales. Still missing are the oldest liturgy as a whole object, the classic instructions, the dialogues and laments, the songs, and the hymns.
- **The Pyramid Texts of Unas, measured as one object, are not LARGE.** They come to about 225 spells, ≈1,630 lines in Allen's numbering, and ≈650 wall columns. Allen 2013 transliterates all of them (counted by script).
  - AED holds 144 Unas records: 589 lb, 8,667 words, **0.8% lost**, covering 462 of the ≈650 columns.
  - The ≈80 missing Unas spells (including the long litany PT 219, cols 241–268) are in AED as later copies from Teti, Pepi I, Pepi II and Neith. So the whole pyramid can be built from AED (CC BY-SA), with Allen 2013 as the check.
  - It is the oldest substantial religious text on earth: **the strongest candidate of the region**.
- **The rest of the Pyramid Texts is LARGE and damaged.**
  - Pepi I: 527 spells, ≈6,300 Allen lines; AED 1,823 lb, 21% lost.
  - Pepi II: 593 spells, ≈6,100 lines; AED 1,021 lb, 14% lost.
  - Teti: 218 spells; AED has only 103 records, 314 lb.
  - Neith: AED 757 lb, 6% lost.
- **The Great Hymn to the Aten is in AED after all.** The earlier survey's empty record (`W227UWMJ…`, "Großer Sonnenhymnus") is only a heading. The text itself is `OMHRPP2KC5B5NNXEUP34OYYX44` ("Westwand//Hymnus", tomb of Ay, Davies 1908 pl. 27): 13 columns, 759 words, 0.8% lost. I checked its German against the hymn ("Wie zahlreich ist das, was du geschaffen hast … O einziger Gott").
- **AED (TLA 2018, CC BY-SA) holds almost all the Middle and Late Egyptian classics, in excellent condition.**
  - Ptahhotep in pPrisse: 0.1% lost.
  - The Peasant (B1): 2.4%.
  - The Man and his Ba: 3.5%.
  - Horus and Seth: 0.9%.
  - pSallier II (Amenemhat + Khety + the Nile Hymn): ~1%.
  - The Kadesh Poem papyrus: 2.9%.
  - The whole Bremner-Rhind papyrus: 0.2%.
  - The Late Ramesside Letters: 62 letters, 6.4%.
- **Not in AED, and with no open transliteration anywhere I could reach:** the Leiden I 350 and Cairo (pBoulaq 17) Amun hymns, the Coffin Texts, the netherworld books (Amduat, Gates, Caverns, the Litany of Re: only two Amduat fragments from a Late tomb), and the Chester Beatty III dream book. These are excluded until a base is found.
- **Several "central" instructions survive only in broken school copies, not as whole texts.**
  - A Man for his Son: 28 witnesses, 54% lost.
  - Hordjedef: 53% lost.
  - Kemit: 25% lost.
  - The Loyalist Teaching: only its first half is whole, on the stela CG 20538.
  - These are excluded under the wholeness rule. Khety's Satire of the Trades is whole in pSallier II.
- **Demotic has no open digital base.**
  - The TLA Demotic data is published only as intact sentences without text IDs (Hugging Face, CC BY-SA), which cannot rebuild a text (verified on its dataset card). ORAEC (GitHub `oraec/corpus_raw_data`) is the same 2018 snapshot, with no Demotic.
  - The open bases are **public-domain editions with transliteration**, on archive.org from Toronto library scans, verified today: Griffith 1900 (Setne I and II), Spiegelberg 1917 (the Myth of the Sun's Eye), Griffith–Thompson 1904 (the London–Leiden magical papyrus).
  - Their OCR is noisy, so a run must transcribe from page images, as was done for El Hawary.
  - **Ankhsheshonqy and Insinger have no open base** (Glanville 1955 and Lexa 1926 are not on archive.org as full view).
- Egypt is already a well-covered culture (8 projects; the Book of the Dead and Merikare are planned), so C5 is mostly 2–3. The case for Egypt now is criterion 1 (very old texts, often in contemporary manuscripts) together with genres the folder lacks: the oldest liturgy, dialogues and laments, songs, hymns, letters, satire and Demotic.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| egypt-01 | The Pyramid Texts of Unas (the whole pyramid: burial chamber, antechamber, corridor; c. 225 spells) | Egyptian / Old Egyptian | before 2350 BCE (oral liturgy, partly Early Dynastic) | c. 2350 BCE | pyramid of Unas, Saqqara, c. 2350 BCE | A | ≈225 spells, ≈1,630 lines (Allen's line numbers), ≈650 columns (m); AED: 144 records, 589 lb, 8,667 words (m) | good (AED Unas 0.8% lost, 4 broken lines; the ≈80 spells not recorded for Unas are taken from AED's later copies) | AED-TEI (TLA 2018) Unas records + parallels from T/P/N/Nt, CC BY-SA 4.0, verified 2026-11-02; check: Allen 2013, *A New Concordance of the Pyramid Texts* I (free PDF, ©, full transliteration of every spell), verified 2026-11-02 | medium | 5 | 5 | 5 | 5 | 3 |  |  | isac-idb-static.uchicago.edu | `חכמה-ובריאה-במצרים/2-…` (PT 571, 486, 527, 600 are excerpts of the corpus, not of Unas) |
| egypt-02 | Papyrus Prisse whole: the end of Kagemni + the Instruction of Ptahhotep | Egyptian / Middle Egyptian | c. 1900 BCE (12th dyn.; ascribed to a 5th-dyn. vizier) | c. 1900 BCE | pPrisse (pBN 183–194), 12th dyn. | A | 216 lb, 3,354 words (m) | good (0.2% lost) | AED-TEI KI7QRD7K… + DKAFDVSX…, CC BY-SA 4.0, verified 2026-11-02; versions L1, L2 in AED; Junge 2003 OBO 193 (OA) | high | 5 | 5 | 5 | 4 | 2 |  |  |  |  |
| egypt-03 | The Eloquent Peasant (composite: R for the opening, B1, B2) | Egyptian / Middle Egyptian | c. 1850 BCE | c. 1850 BCE | pRamesseum A, pBerlin 3023, 3025 (late 12th–13th dyn.) | A | B1 357 lb + B2 147 lb + R 195 lb (overlapping); ≈520 lines whole (m) | good (B1 2.4%, B2 5%; R 20% but only its opening is needed) | AED-TEI PVLMEE7Y…, TTH5MM5D…, 2NTZNJ65…, CC BY-SA 4.0, verified 2026-11-02 | high | 5 | 5 | 3 | 5 | 3 |  |  |  |  |
| egypt-04 | The Dialogue of a Man and his Ba | Egyptian / Middle Egyptian | c. 1850 BCE | c. 1850 BCE | pBerlin 3024 + pAmherst 3 (12th dyn.) | A | 164 lb, 1,236 words (m) | good (3.5% lost; the opening is lost) | AED-TEI XZIG534K…, CC BY-SA 4.0, verified 2026-11-02 | high | 5 | 5 | 2 | 5 | 3 |  |  |  |  |
| egypt-05 | The Admonitions of Ipuwer | Egyptian / Middle Egyptian | c. 1800–1650 BCE | c. 1800–1650 BCE | pLeiden I 344 recto (19th dyn.) | A | 225 lb, 3,435 words (m) | fair (9.9% lost; 30 broken lines; start and end lost) | AED-TEI GJA5VMSJ…, CC BY-SA 4.0, verified 2026-11-02; Gardiner 1909 (PD) | high | 5 | 4 | 2 | 5 | 2 |  |  |  |  |
| egypt-06 | The Prophecy of Neferti + the Complaints of Khakheperreseneb | Egyptian / Middle Egyptian | c. 1900–1800 BCE | c. 1900–1800 BCE | pPetersburg 1116B (c. 1420 BCE); writing board BM EA 5645 (18th dyn.) | A | 71 + 20 = 91 lb, 1,697 words (m) | good (7.0% and 1.2% lost) | AED-TEI SSUM6V6C…, ES5N6FKJ…, CC BY-SA 4.0, verified 2026-11-02 | high | 5 | 4 | 4 | 4 | 2 |  |  |  |  |
| egypt-07 | Papyrus Sallier II whole: the Instruction of Amenemhat, the Satire of the Trades (Khety), the Hymn to the Nile | Egyptian / Middle Egyptian (Ramesside copy) | c. 1950–1900 BCE (12th dyn.) | 12th dyn. | pSallier II (pBM EA 10182), c. 1200 BCE (Seti II) | D | 28 + 69 + 35 = 132 lb, 2,757 words (m) | good (≈1% lost) | AED-TEI 2SOSQYN3…, L4M2NZM2…, PMARXRST…, CC BY-SA 4.0, verified 2026-11-02 (+ 18 Khety witnesses, Millingen for Amenemhat) | high | 5 | 4 | 5 | 4 | 2 |  |  |  |  |
| egypt-08 | The Instruction of Any | Egyptian / Late Middle / Late Egyptian | c. 1400 BCE (18th dyn.) | 18th dyn. | pBoulaq 4 (21st–22nd dyn.) + 12 other witnesses | D | 179 lb, 2,876 words (pBoulaq 4) (m); all witnesses 331 lb | good (3.9% lost; the opening from other witnesses) | AED-TEI PPIUFRFO… + witnesses, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 4 | 4 | 4 | 2 |  |  |  |  |
| egypt-09 | The Contendings of Horus and Seth (pChester Beatty I recto) | Egyptian / Late Egyptian | myth older; this text c. 1150 BCE | c. 1145 BCE | pChester Beatty I (Ramesses V) | A | 199 lb, 4,776 words (m) | good (0.9% lost) | AED-TEI W25WDE27…, CC BY-SA 4.0, verified 2026-11-02; Ramses Online (consult) | high | 4 | 5 | 3 | 5 | 2 |  | (the whole papyrus: + love songs 31–47 and the hymn to Ramesses V, ≈330 lb) |  |  |
| egypt-10 | The Report of Wenamun | Egyptian / Late Egyptian | c. 1070–1050 BCE | c. 1050 BCE | pMoscow 120 (21st–22nd dyn.) | A | 144 lb, 3,044 words (m) | good (3.9% lost; the end lost) | AED-TEI HSPTIJAB…, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 2 | 4 | 2 |  |  |  |  |
| egypt-11 | The New Kingdom love songs, all collections (pHarris 500 1–19, Cairo vase 20–27, Turin 1966 28–30, Chester Beatty I 31–47, ostraca) | Egyptian / Late Egyptian | c. 1300–1150 BCE | c. 1300–1150 BCE | pHarris 500 (Seti I) | A | main collections 232 lb (m); all 39 witnesses 483 lb, 5,466 words (m) | good (Harris and Chester Beatty 0–6%; Turin 17%; whole set 16%) | AED-TEI (39 records), CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 3 | 5 | 3 |  |  |  |  |
| egypt-12 | The Harpers' Songs (the Antef song, the three Neferhotep songs, the other tomb songs) | Egyptian / Middle–Late Egyptian | Antef song perhaps late MK; others 1350–1150 BCE | NK | Paatenemheb (Saqqara), c. 1340 BCE; pHarris 500 | A | 26 texts, 343 lb, 3,442 words (m) | fair (14% lost overall; Antef song in Harris 0.9%; Neferhotep 0–14%) | AED-TEI (26 records), CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 3 | 5 | 3 |  |  |  |  |
| egypt-13 | The Great Hymn to the Aten, with the Amarna tomb hymns and prayers (the "Short Hymn", the morning and evening hymns) | Egyptian / Late Middle Egyptian | c. 1350–1340 BCE | c. 1340 BCE | tomb of Ay, Amarna (TA 25) | A | Great Hymn 13 columns, 759 words (m); with the other hymns ≈20 texts, ≈230 lb (m) | good (Great Hymn 0.8%; the others 0–30%) | AED-TEI OMHRPP2KC5B5NNXEUP34OYYX44 (the Great Hymn; W227UWMJ… is only its empty heading) + bbawamarna hymns, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 2 | 5 | 3 |  |  |  |  |
| egypt-14 | Papyrus Chester Beatty IV whole: the hymns to Amun-Re (recto) + the praise of the ancient writers and the scribal teachings (verso) | Egyptian / Late Egyptian | c. 1250 BCE | 19th dyn. | pChester Beatty IV (pBM EA 10684), 19th dyn. | A | 145 + 141 = 286 lb, ≈3,400 words (m) | fair (recto 10.6% lost; verso 1–12%, except a final list 34%) | AED-TEI AOIMS4GP… + 8 verso records, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 3 | 5 | 3 |  |  |  |  |
| egypt-15 | The Kadesh Poem of Ramesses II | Egyptian / Late Egyptian | 1274 BCE | c. 1270 BCE | temple walls (Luxor, Karnak, Abydos, Ramesseum, Abu Simbel) + pRaifé–Sallier III | A | pRaifé–Sallier III 119 lb, 2,691 words; Luxor L2 80 lb, 2,927 words (m) | good (papyrus 2.9%; L2 10%) | AED-TEI KAMEJLAD… (+ L1, L2, K1 records), CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 4 | 3 | 3 |  |  |  |  |
| egypt-16 | Papyrus Bremner-Rhind whole: the Songs of Isis and Nephthys, the Ritual of Bringing Out Sokar, the Book of Overthrowing Apophis (with the "Book of Knowing the Creations of Re"), the Names of Apophis, colophon | Egyptian / Middle Egyptian (Late copy) | NK–Late Period liturgy | before 311 BCE | pBM 10188 (c. 311 BCE) | D | 921 lb, 12,348 words (m) | good (0.2% lost) | AED-TEI 45APBFH7…, 5IIW4OYC…, A2PTGDCY…, 2Z3OHH5E…, N37VGOQ3…, CC BY-SA 4.0, verified 2026-11-02 | medium | 3 | 4 | 4 | 5 | 3 |  |  |  | the Apophis excerpts in the fifth-day dossier (`מיתוסים-אוגריתיים/3-…`) |
| egypt-17 | The Late Ramesside Letters (the Theban archive of Dhutmose, Butehamun and Piankh) | Egyptian / Late Egyptian | c. 1080–1070 BCE | same | the letters themselves | A | 62 letters, 1,035 lb, 13,008 words (m) | good (6.4% lost) | AED-TEI (62 bbawbriefe records dated Ramesses XI), CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 1 | 3 | 3 |  |  |  |  |
| egypt-18 | The Heqanakht papers (four letters and an account of a farming household) | Egyptian / Middle Egyptian | c. 1950 BCE | same | pMMA Hekanakhte I–IV | A | 5 texts, 135 lb, 1,899 words (m) | good (≈2% lost) | AED-TEI (pMMA Hekanakhte I–IV + pCairo 31061), CC BY-SA 4.0, verified 2026-11-02 | high | 5 | 5 | 1 | 3 | 3 |  | (option: + the Letters to the Dead pLeiden I 371, 37 lb, and oLouvre 698, 44 lb) |  |  |
| egypt-19 | The Satirical Letter of Hori (pAnastasi I) | Egyptian / Late Egyptian | c. 1250 BCE | 19th dyn. | pAnastasi I (Seti II) + about 80 ostraca | A | 231 lb, 4,560 words (m) | good (6.4% lost) | AED-TEI YSMXWV2H…, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 4 | 3 | 3 |  | (option: + pLansing, the "Be a scribe" teaching, 167 lb, 2.8% lost) |  |  |
| egypt-20 | The Victory Stela of Piye | Egyptian / Middle Egyptian (Kushite) | c. 727 BCE | c. 727 BCE | Gebel Barkal stela (Cairo JE 48862) | A | 159 lb, 4,379 words (m) | good (2.2% lost) | AED-TEI VVKFZM2A… (Textfeld), CC BY-SA 4.0, verified 2026-11-02 | high | 3 | 5 | 2 | 4 | 3 |  |  |  |  |
| egypt-21 | The remaining Late Egyptian tales: the Doomed Prince, the Taking of Joppa (pHarris 500 verso), Truth and Falsehood (pChester Beatty II) | Egyptian / Late Egyptian | c. 1300–1200 BCE | 19th dyn. | pHarris 500 (Seti I); pChester Beatty II | A | 72 + 41 + 80 = 193 lb, 3,414 words (m) | fair (12.7%, 10.6%, 15.8% lost; ends or beginnings lost) | AED-TEI MTBRL3MI…, SSS2W6HD…, 5UEPUHOX…, CC BY-SA 4.0, verified 2026-11-02 | high | 4 | 5 | 2 | 4 | 1 |  |  |  |  |
| egypt-22 | Papyrus Ebers whole (remedies, incantations, the treatise on the heart and the vessels) | Egyptian / Middle Egyptian | before 1550 BCE (older compilations) | c. 1550 BCE | pEbers (c. 1550 BCE) | D | 53 records, 2,340 lb, 25,733 words (m) | good (≈0% lost) | AED-TEI (53 sawmedizin records), CC BY-SA 4.0, verified 2026-11-02 | medium | 5 | 4 | 4 | 3 | 3 |  | (option instead: pEdwin Smith, 431 lb, 2.7% lost) |  |  |
| egypt-23 | Setne Khamwas I and II (Demotic) | Egyptian / Demotic | Ptolemaic (Setne II Roman) | 3rd c. BCE – 1st c. CE | pCairo CG 30646 (Ptolemaic); pBM EA 10822 (1st c. CE) | A | Setne I: 4 columns, ≈150 lines; Setne II: 7 columns, ≈220 lines (r) | fair (Setne I columns 1–2 lost; Setne II opening damaged) | Griffith 1900, *Stories of the High Priests of Memphis* (PD; archive.org `storiesofhighpri00grifuoft`, Toronto scan, transliteration + translation), verified 2026-11-02 | low | 2 | 4 | 3 | 4 | 3 |  |  |  |  |
| egypt-24 | The Myth of the Sun's Eye (pLeiden I 384, Demotic) | Egyptian / Demotic | Ptolemaic (the myth of the distant goddess is older) | Ptolemaic | pLeiden I 384 (2nd c. CE) | D | 22 columns, ≈700 lines (r) | fair (the beginning lost) | Spiegelberg 1917 (PD; archive.org `dergyptischemy01leyduoft`, Toronto scan, transliteration + German + glossary), verified 2026-11-02 | low | 2 | 3 | 3 | 4 | 3 |  |  |  |  |
| egypt-25 | The Pyramid Texts, the whole corpus (Unas to the queens of Pepi II) | Egyptian / Old Egyptian | before 2350–2200 BCE | 2350–2200 BCE | the pyramids of Saqqara | A | ≈828 spells (Allen) (m); AED 1,378 records, 5,041 lb (m) | fair to poor outside Unas (Pepi I 21% lost, Pepi II 11%, Teti and Merenre badly damaged on the walls) | AED-TEI (1,378 records), CC BY-SA 4.0, verified 2026-11-02; Allen 2013 I–VI (free, ©) | medium | 5 | 5 | 5 | 5 | 2 | LARGE | Unas ≈225 spells / ≈1,630 lines (= egypt-01); Teti 218 / ≈1,890 (AED 103 records, 314 lb, 2.7% lost); Pepi I 527 / ≈6,330 (AED 1,823 lb, 21% lost); Merenre 381 / ≈4,320 (AED 365 lb); Pepi II 593 / ≈6,120 (AED 1,021 lb, 14%); Neith 280 / ≈2,290 (AED 757 lb, 6.3%) – Allen's line totals count each spell's full length | isac-idb-static.uchicago.edu | egypt-01 |

### egypt-01 – The Pyramid Texts of Unas
- **What it is.** The spells carved in the burial chamber and antechamber of the last king of the 5th dynasty. They are the king's resurrection liturgy:
  - the offering ritual (PT 23–171);
  - the serpent spells on the gables (226–243);
  - the "Cannibal Hymn" (273–274), in which the king eats the gods;
  - the ferrymen and ladders to the sky, Nut and the stars.
- **Why it matters.** It is the oldest large religious text on earth, and the oldest record of how Egyptians imagined death, the sky and divine power, in a contemporary artifact. As a whole pyramid it is a text "as its culture knew it", with the spells in their wall order (Allen's room/wall codes).
- **Base.** AED's 144 Unas records (CC BY-SA; lemmatized, damage-marked). For the ≈80 Unas spells AED lacks (PT 219 and others), AED's Teti, Pepi I or Pepi II copies with the Unas variants supplied from Allen 2013 vol. I. That volume transliterates every spell, all pyramids side by side; it is free on the web but ©, so it is consulted per spell and never committed.
- **Tools.** `egypt_tools.py` (it already reads AED's PT `<lb>` sigla). Allen's WAW 23/38 translation is the rank-3 check (©).
- **Risks.** Old Egyptian is archaic and the mythology obscure. The serpent spells PT 232–238 may be Semitic (Steiner 2011), which needs a note.
- **What a run needs.** The wall order from Allen's "Occurrences" list, and a decision on how to mark parallel-supplied spells.
- **Size.** About 650 columns: one run, not LARGE.

### egypt-02 – Papyrus Prisse (Kagemni end + Ptahhotep)
- **What it is.** The oldest literary papyrus with a classic instruction: 37 maxims on speech, humility, the household, love of one's wife, greed and the listening son. The end of Kagemni precedes it on the same roll. Copied into the New Kingdom.
- **Base.** AED, 0.2% lost. Versions L1/L2 (BM) are in AED for the variants. Junge 2003 (OBO 193, open access) is the check.
- **Risks.** Low. The maxims are terse and hard in places, and Shupak's Hebrew exists (©, consult only after drafting).

### egypt-03 – The Eloquent Peasant
- **What it is.** A peasant robbed on the road makes nine petitions for justice. The richest statement of *maat*, in elaborate imagery (the balance, the rudder, the plumb-line).
- **Base.** AED B1 (357 lb, 2.4%) and B2 (147 lb), with R (pRamesseum A) for the opening section only (R as a whole is 20% lost). Composite line numbering as in Parkinson (B1 numbering).
- **Risks.** Dense rhetoric. Copied only in the Middle Kingdom, so C3 is 3.

### egypt-04 – The Man and his Ba
- **What it is.** A man weary of life argues with his *ba* about death and suicide. The poems "Death is before me today", "To whom can I speak today?" and "my name reeks". The deepest Egyptian text on death and despair.
- **Base.** AED, 164 lb, 3.5% lost (its opening is lost in the manuscript).
- **Risks.** The interpretation is disputed: the framing and the opening.

### egypt-05 – The Admonitions of Ipuwer
- **What it is.** The world turned upside down, and a reproach to the creator ("Where is he today? Is he asleep?"). The most radical theodicy in Egypt.
- **Base.** AED, 225 lb, 9.9% lost, with its beginning and end lost. Fair, but the surviving body is long and continuous.
- **Risks.** The damage. The run should record the Velikovsky claim only as a rejected reading, under the brief's rule that the Bible plays no part.

### egypt-06 – Neferti + Khakheperreseneb
- **What it is.** Two short Middle Kingdom classics of the "chaos and the saviour king" and "nothing new to say" type.
  - Neferti was a school text copied on many New Kingdom ostraca.
  - Khakheperreseneb is a whole text on one writing board.
- **Base.** AED, both good.
- **Why paired.** Each alone is short (71 and 20 lb). Together they make one medium unit; each stays whole.

### egypt-07 – Papyrus Sallier II whole
- **What it is.** One Ramesside school roll with three classics:
  - the murdered king Amenemhat's bitter advice ("trust no brother");
  - Khety's Satire of the Trades, the humour of the scribal class, its most-copied text;
  - the Hymn to Hapy, the Nile.
- **Base.** All in AED with ~1% lost. The 18 Khety witnesses and pMillingen (Amenemhat) are in AED for the variants.
- **Risks.** The ostraca tradition is corrupt, but Sallier II is a good copy. Khety is notoriously hard in places (trade vocabulary).

### egypt-08 – The Instruction of Any
- **What it is.** A New Kingdom instruction of a middle-class scribe. Duty to one's mother, "the woman from abroad", and the son's reply, which doubts that teaching can change nature.
- **Base.** AED pBoulaq 4 (179 lb, 3.9%) with 12 other witnesses for the lost opening.
- **Risks.** The language mixes Middle and Late Egyptian; Boulaq 4 is a corrupt copy.

### egypt-09 – Horus and Seth
- **What it is.** An 80-year divine lawsuit over Osiris's throne: Isis's tricks, Hathor's self-exposure to cheer the sulking sun god, the lettuce episode, the stone boats. The gods as comic and litigious.
- **Base.** AED, 0.9% lost. Ramses Online (Liège) for consultation only (no licence).
- **Whole-papyrus option.** The whole pChester Beatty I adds the love songs 31–47 (overlapping egypt-11) and a hymn to Ramesses V.
- **Risks.** Low. The sexual episodes need a plain, faithful rendering.

### egypt-10 – Wenamun
- **What it is.** An envoy of Amun humiliated at Dor and Byblos at the end of empire, with the ecstatic seer at Byblos. A late, ironic voice.
- **Base.** AED, 3.9% lost; its end is lost.

### egypt-11 – The love songs
- **What it is.** The "brother" and the "sister", the door-bolt, the speaking trees of the garden, the crocodile in the river: the most direct emotion in Egyptian writing.
- **The unit.** All the songs, ≈55 by Fox's numbering. The collections are each a cycle, and together one corpus.
- **Base.** AED's 39 records. The main papyri are almost undamaged; the ostraca are fragmentary and can be marked as an appendix.
- **Risks.** Low. Fox's Hebrew (1985, ©) exists; consult it only after drafting.

### egypt-12 – The Harpers' Songs
- **What it is.** "Make holiday, do not weary of it; none who goes comes back." The Antef song and its replies in the Theban tombs (Neferhotep TT 50), which argue against its scepticism. A small, self-contained debate about death.
- **Base.** AED's 26 records. The Antef song in pHarris 500 is almost intact; some tomb copies are damaged.

### egypt-13 – The Great Hymn to the Aten and the Amarna hymns
- **What it is.** Akhenaten's sun hymn: night as death, the chick in the egg, the many peoples and tongues, "O sole god". With it, the shorter hymns and prayers of the officials' tombs, its copies and echoes.
- **Base.** The Great Hymn is AED `OMHRPP2KC5B5NNXEUP34OYYX44`: 13 columns, 0.8% lost, read from Davies 1908 (pl. 27). This corrects the earlier survey, which saw only the empty heading record. Davies 1908 (PD, archive.org) is the check.
- **Risks.** The Ay tomb wall is now partly destroyed: the TLA text rests on Bouriant's and Davies's copies, which needs a note.

### egypt-14 – Papyrus Chester Beatty IV whole
- **What it is.** Recto: hymns to Amun-Re as creator and hidden god. Verso: the famous praise of the ancient authors ("a book is better than a tomb chapel"), "be a scribe" and the teachings on education and innate nature. One roll that holds both Ramesside piety and the scribes' idea of immortality.
- **Base.** AED, 9 records.
- **Risks.** Recto 10.6% lost; the final verso list (57 lb, 34% lost) may be left as an appendix.

### egypt-15 – The Kadesh Poem
- **What it is.** Ramesses II, abandoned by his army, prays to Amun ("What is it, my father Amun?") and fights alone. Royal epic poetry, carved on five temples and copied on papyrus.
- **Base.** AED pRaifé–Sallier III (2.9% lost), with the Luxor L1/L2 versions for the opening.
- **Risks.** Propaganda; the many versions need a policy (translate the papyrus, give the variants).

### egypt-16 – Papyrus Bremner-Rhind whole
- **What it is.**
  - The **Songs of Isis and Nephthys**: the goddesses' lament for Osiris, a temple liturgy of mourning.
  - The Sokar ritual.
  - The Book of Overthrowing Apophis, with the cosmogony "I am he who came into being as Khepri".
  - The Names of Apophis.
- **Base.** AED, 0.2% lost.
- **Fit with the folder.** It completes the Apophis excerpts already in the fifth-day dossier (keep them identical by verifier, as with Westcar).
- **Risks.** A late copy of older liturgy (C1 3). Medium size (921 lb, but the Apophis book has long lines: 8,397 words).

### egypt-17 – The Late Ramesside Letters
- **What it is.** Letters of the necropolis scribe Dhutmose, his son Butehamun and the general Piankh, at the collapse of the New Kingdom. Fear for a sick father on campaign, family worries, and a secret order to kill two policemen. The largest group of unguarded voices.
- **Base.** AED, 62 records dated Ramesses XI.
- **Risks.** Formulaic openings; prosopography needs a name table. C3 is 1 (chance documents), so it ranks below the literary texts.

### egypt-18 – The Heqanakht papers
- **What it is.** A farmer-priest of c. 1950 BCE writes home: grain rations in a hard year, quarrels in the household, "do not let my concubine be harassed". The oldest private family letters of substance.
- **Base.** AED, ≈2% lost.
- **Option.** The two well-preserved Letters to the Dead in AED (pLeiden I 371, a widower to his dead wife; oLouvre 698).
- **Risk.** Short (135 lb).

### egypt-19 – The Satirical Letter of Hori (pAnastasi I)
- **What it is.** A scribe mocks a rival's ignorance: a mock-erudite tour of Canaan's roads, and the humiliations of a scribe in a chariot. Egyptian satire, copied on about 80 ostraca.
- **Base.** AED, 6.4% lost.
- **Option.** pLansing (the school teaching "be a scribe", 167 lb).

### egypt-20 – The Victory Stela of Piye
- **What it is.** The Kushite king's conquest of Egypt (c. 727 BCE). He refuses to receive the "unclean" fish-eating princes, and grieves more for the starved horses of Hermopolis than for the city. A rare Late voice, with piety and judgement in a long narrative.
- **Base.** AED, 2.2% lost.

### egypt-21 – The remaining Late Egyptian tales
- **What it is.** The Doomed Prince (fated to die by crocodile, snake or dog), the Taking of Joppa (soldiers in baskets) and Truth and Falsehood (an allegory of the blinded Truth). Each is a whole tale with one end lost. Together they would complete the folder's Late Egyptian tales.
- **Base.** AED.
- **Rank.** Fair condition (11–16% lost) and C5 1, so a later candidate.

### egypt-22 – Papyrus Ebers whole
- **What it is.** The largest Egyptian medical book: remedies, incantations against demons of disease, and the "secret of the physician", the treatise on the heart and the vessels. How Egyptians felt and explained the body and its fear.
- **Base.** AED, 53 records, essentially undamaged (2,340 lb). Just under the LARGE line.
- **Risks.** Technical vocabulary (plants, diseases), so medium readability.
- **Alternative.** Edwin Smith (431 lb), the surgical case book.

### egypt-23 – Setne Khamwas I and II (Demotic)
- **What it is.** The prince-magician who steals the Book of Thoth from a tomb and is humiliated by Tabubu; his son Si-Osire's tour of the underworld, where a rich man's and a poor man's fates are reversed. The great Demotic narratives.
- **Base.** Griffith 1900 (PD). It gives a Latin transliteration and translation; I verified the "Transliteration and translation of the first tale" (p. 82) and "of the second tale" (p. 142) in its table of contents in the OCR.
- **What a run needs.** A transcription of the transliteration from the page images: the OCR is noisy, as with El Hawary. Griffith's transliteration is old-fashioned and must be mapped to modern conventions with the TLA Demotic sentences (Hugging Face) as a glossed example bank.
- **Risks.** High: Demotic, an old base, a new language stage.

### egypt-24 – The Myth of the Sun's Eye (Demotic)
- **What it is.** Thoth, as a little dog-ape, coaxes the angry goddess Tefnut back from Nubia with fables (the lion and the mouse). A Greek translation shows its popularity.
- **Base.** Spiegelberg 1917 (PD): line-by-line transliteration, German and a glossary (OCR verified, noisy).
- **Risks.** As egypt-23; and late (Roman manuscript; C1 2).

### egypt-25 – The Pyramid Texts as a whole corpus (LARGE)
- **What it is.** Every pyramid from Unas to Pepi II's queens: ≈828 spells.
- **Base.** AED holds 1,378 records (5,041 lb). Outside Unas the walls are damaged: Pepi I 21% lost and Merenre fragmentary in AED.
- **Proposal.** Unas whole (egypt-01) now. Then, if the user approves, Teti and Neith, the best preserved of the rest, as self-contained parts; Pepi I and Pepi II only with the user's specific approval.

## Excluded

- **The Coffin Texts.** No open transliteration: de Buck I–VII (ISAC, free) is hieroglyphic hand-copy only, and they are not in AED. Revisit only if a transliterated base appears.
- **The Amduat, Book of Gates, Book of Caverns, Litany of Re, Book of Nut.** No open base: Hornung's editions are ©, and AED has only two Amduat fragments from a Late tomb.
- **The Leiden I 350 and Cairo (pBoulaq 17) Amun hymns.** Not in AED; the public-domain editions (Gardiner 1905, Mariette) are hieroglyphic only, and TLA v20 cannot be scraped. NOT verified.
- **The Chester Beatty III dream book.** Not in AED; Gardiner 1935 is ©.
- **The Memphite Theology.** Already translated (project 2).
- **Astarte and the Sea.** Too damaged: 26% lost, 141 gaps.
- **Apophis and Seqenenre.** Short (23 lb), 19% lost, and the end is lost.
- **Neferkare and Sasenet; the Kahun Horus and Seth; the Sporting King; the Pleasures of Fishing and Fowling; the Tale of Hay; the "Götterstreit" of pTurin 54033 (36% lost).** Fragments.
- **A Man for his Son (54% lost), Hordjedef (53%), Kemit (25%; mostly letter formulae), Amennakht (24%; 17 lb).** Only broken school copies survive.
- **The Loyalist Teaching.** Whole only in its first half (stela CG 20538); the rest is in papyri 28–52% lost.
- **The Dispute between Head and Body.** 8 lines.
- **The Ramesside Miscellanies (pAnastasi II–VI, Sallier I/IV, Bologna 1094, Koller …).** Mostly short model letters; the best (pAnastasi I, pLansing) are in egypt-19.
- **The Book of the Dead of Iuefankh (pTurin 1791, 165 chapters).** The Book of the Dead is covered by Round 6 (Nu).
- **The other BD papyri.** Same reason.
- **The Ritual of the Glorification of Osiris, the Embalming Ritual (pBoulaq 3), the Late temple handbooks (pBrooklyn 47.218.84, pSalt 825, Tebtunis Sobek ritual).** Late (Ptolemaic–Roman), technical. They could come later, beside Bremner-Rhind.
- **The Old Kingdom autobiographies (Weni, Harkhuf).** Short. Weni is not among AED's named records (the tomb corpus has unnamed biography records), and Harkhuf's letter is 330 words.
- **The Merneptah stela.** Not in AED; 28 lines.
- **The Famine Stela.** Not in AED; Barguet 1953 is ©; Ptolemaic.
- **The Execration Texts.** Formulaic lists of names.
- **Ankhsheshonqy, pInsinger.** No open base: Glanville 1955 and Thissen are ©, Lexa 1926 is not found in full view, and the TLA Demotic data is sentences only. NOT verified.
- **Petubastis (Spiegelberg 1910), the Demotic Chronicle (Spiegelberg 1914).** Fragmentary or short. Both are PD on archive.org if wanted later.
- **The London–Leiden Demotic magical papyrus (Griffith–Thompson 1904, PD, verified on archive.org).** 3rd c. CE, syncretistic with Greek magic: too late with no exception.
- **Coptic.** Christian and after 500 CE.
- **The Coptic magical papyri.** Late, and reshaped by Christianity.
- **Meroitic.** The language is not understood.
- **The Amarna letters.** Akkadian (Levant/Mesopotamian agents).
- **The Elephantine papyri.** Aramaic.
- **The Hermetica, the Potter's Oracle, Manetho.** Greek.
- **Hoaxes.** The "Emerald Tablets", the Kolbrin, the Tulli papyrus.

## New languages

- **Old Egyptian** (the Pyramid Texts): used only for four short spells so far.
  - Base: AED (CC BY-SA, lemmatized) + Allen 2013 (free, ©, consult).
  - Dictionaries and morphology: TLA lemma ids and the `_wt` glosses; Allen's *Inflection of the Verb in the Pyramid Texts* and WAW translations (©) as checks.
  - Claude's confidence: medium (archaic grammar, allusive mythology).
- **Demotic** (new to the folder).
  - Base: public-domain editions with Latin transliteration (Griffith 1900, Spiegelberg 1917) that must be transcribed from page images.
  - Dictionaries: the Chicago Demotic Dictionary (free PDFs from ISAC, reported); Erichsen 1954 (©, consult).
  - Morphology: none open beyond the TLA Demotic sentence set (Hugging Face, CC BY-SA: 13,383 intact sentences, lemmatized and glossed, usable as an example bank, not as a text).
  - Claude's confidence: low. A grammar mapping (Demotic verb forms: First Present, sDm=f, the Conjunctive) and a modern-transliteration conversion table are needed before the first line.

## Hosts

- `isac-idb-static.uchicago.edu`: Allen 2013, *A New Concordance of the Pyramid Texts* (vols I–VI, free PDFs): the full transliteration and wall order of the Unas and the other pyramids (egypt-01, egypt-25). Reachable today.
- `huggingface.co`: the TLA sentence datasets (Earlier Egyptian, Late Egyptian, Demotic; CC BY-SA), a glossed example bank, essential for Demotic. Reachable today.
- `ramses.ulg.ac.be`: Ramses Online (Late Egyptian, French glosses; no licence, consult only), for egypt-09, -10, -17, -21. Reachable.
- `sites.cs.st-andrews.ac.uk`: Nederhof's interlinear PDFs (the Peasant, the Ba, Ptahhotep; consult only). Reachable.
- `api.thesaurus-linguae-aegyptiae.de`: MdC → Unicode and the thesauri (optional). Reachable.
- `pyramidtextsonline.com`: an Unas reading aid (optional).
- `www.trismegistos.org`: Demotic metadata (optional). Blocked today.

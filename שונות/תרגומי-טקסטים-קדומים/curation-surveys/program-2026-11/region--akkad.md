# Region survey – akkad (2026-11-02)

Akkadian in all its stages (Old Akkadian to Late Babylonian), with the Sumero-Akkadian bilinguals where the Akkadian is the
text. **Sizes and conditions were measured by script today** wherever the base could be fetched:
- **eBL**: all 146 candidate chapters fetched through the `display` API. A line counts as "broken" when ≥ 50% of its word
  slots are in `BROKEN_AWAY` or are `…`.
- **SEAL**: 640 node pages (the lemmatized `_ts_ln` rows). A line counts as broken when ≥ 50% of its sign characters are
  inside `[ ]`.
- **CDLI**: artifact JSON, ATF text lines and `#tr.en` lines. Its "with [" figure counts any bracket, so it overstates the
  damage.

The scripts and tables are in `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/akkad/`:
- the scripts: `scripts/ebl_damage.py`, `seal_damage.py`, `seal_node.py`, `cdli_measure.py`;
- the tables: `ebl-damage.tsv`, `seal-incant-damage.tsv`, `cdli-amarna.tsv`, `cdli-art-range.tsv`.

The earlier 2026-10-16 surveys gave facts only; their Bible ratings were ignored.

## Key findings
- **The Akkadian canon that is still untouched is the cult and its texts.** The folder has done the great narratives
  (Atra-ḫasīs, Gilgameš, Enūma eliš, Erra I) and wisdom. Babylonians spent most of their scribal effort on four other
  things:
  - prayer: the šuʾila "hand-lifting" prayers and the Great Hymns;
  - exorcism: Bīt mēseri, Udug-ḫul, Marduk's Address to the Demons;
  - omens: Šumma ālu and Enūma Anu Enlil;
  - ritual: the akītu festival.

  All four are open on eBL or SEAL and in good condition, and **none is in the folder**. They are the region's main
  contribution.
- **Anzû (eBL, 694 lines, 18% broken)** is the one major myth left. Its Old Babylonian content is from c. 1800 BCE, and it
  was Ninurta's epic for a thousand years, the model for Enūma eliš.
- **eBL has grown since October.** Bīt mēseri now has its Incantation Tablet, 611 lines from 55 manuscripts (727 with the
  ritual and the figurine tablet, 11% broken), including the myth of the seven sages. The Elevation of Babylon has 134
  lines. Šumma ālu has 3,001 lines in four groups. The šuʾilas are 1,290 lines in 46 chapters (14% broken). The Great
  Hymns are 1,597 lines without the Šamaš hymn, which is done.
- **SEAL is richer than the October survey saw.**
  - It holds **c. 2,600 lines of Old Akkadian, Old Assyrian and OB incantations outside the love spells** (174 texts, 8%
    broken): dogs, scorpions, birth, the crying baby, Lamaštu, the evil eye.
  - Its new "Late Babylonian Priestly Literature" project has **the akītu ritual of Babylon** (DT 15 + DT 109 +
    MNB 1848 + DT 114: 443 lines, 14% broken) and 1,294 lines of temple ritual in all.
  - It also has the 2025 **Divine Love Lyrics** of Babylon (46 manuscripts), the LB chronicles, and the OB Ištar hymns
    (Agušaya, the Louvre hymn; 815 lines, 9% broken).
- **CDLI (allowlisted) opens three corpora that ORACC holds but cannot serve here:**
  - the **Amarna letters**: 378 tablets, 13,232 ATF lines (transliteration only, mirrored from ORACC aemw/amarna). Knudtzon
    1915 (VAB 2, public domain) is on archive.org;
  - the **inscriptions of the kings of Akkade**: RIME 2, 168 composites with English, 4,546 short case lines, about 6,000
    words, c. 2300 BCE. These are the oldest Semitic royal voice;
  - **RINAP composites in ATF without English**: Sennacherib 1–38, Esarhaddon 1–50, and Sargon II's Eighth Campaign (430
    lines).
- **ORACC is unreachable from this cloud session**: TLS fails although the host is in `domains.txt`. Strong candidates
  wait on it:
  - SAA 10 (the scholars' letters to the king);
  - the well-preserved core of SAA 3;
  - Assurbanipal's Prism A (RINAP 5; not on CDLI);
  - most of RIBo / RINBE (Nabonidus, Adad-guppi);
  - the Middle Assyrian Palace Decrees.

  **Archibab** (the OB and Mari letters) fails TLS too ("unable to get local issuer certificate").
- **Two LARGE wholes**, Šumma ālu (c. 120 tablets) and the Amarna archive (13,232 lines), are proposed through their
  natural parts. Enūma Anu Enlil is LARGE as well, but eBL has only 455 lines of it.
- **Completions:**
  - Gilgameš: the remaining OB, MB and NA versions, 795 lines, but 45% broken;
  - the Akkade legends cycle beside the Cuthaean Legend and the Sargon Birth Legend: 510 lines, open on SEAL and CDLI;
  - the folder's love-incantation project, through the other OB incantations.
- **Not reachable:** Šurpu, Muššuʾu, Udug-ḫul by script (Geller 2016 is open access but behind a bot wall), the dream book,
  Šumma izbu, the Diagnostic Handbook, the Tukulti-Ninurta Epic, Erra II–V (still empty on eBL), Šūpê-amēlu, and the Fox.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| akkad-01 | Anzû, all versions (OB II–III, SB I–III, NA Ḫuzirina) | Babylonian / Akkadian (OB, SB) | c. 1900–1700 BCE | OB c. 1750; SB c. 1200–1000 BCE | OB tablets c. 1700 BCE | A | 694 lines (m) | fair (18% broken; SB II 5%, SB III 31%) | eBL `L/1/10` (Heinrich), https://www.ebl.lmu.de/corpus/L/1/10, © eBL, per-text use; verified 2026-11-02 | high | 5 | 4 | 5 | 4 | 3 |  |  |  |  |
| akkad-02 | The OB hymns to Ištar: Agušaya A + B, the Louvre hymn, Ammī-ditāna's hymn, "Ištar Baghdad" | Old Babylonian / Akkadian (hymnic-epic) | c. 1800–1650 BCE | same | the OB tablets (VS 10 214, RA 15 159, AO …) | A | 815 lines (m) | good–fair (9% broken; Agušaya A 13%) | SEAL nodes 7493, 7494, 7498, 7495, 1813 (transliteration, lemmas, English), https://seal.huji.ac.il/node/7493, © HUJI (unclear); verified 2026-11-02 | high | 5 | 5 | 3 | 4 | 3 |  |  |  |  |
| akkad-03 | The šuʾila prayers ("hand-lifting"), the whole eBL corpus: to Ištar (16), Šamaš (6), Adad (5), Enlil, Ea, Gula, Bēlet-ilī, Damkina, Dilbat, Anu | Babylonian / Akkadian (SB) | c. 1200–700 BCE | MB–NA | NA (Nineveh, Assur), NB | A | 1,290 lines (m), 46 chapters | good (14% broken; Ištar 2: 123 lines, 5%) | eBL `Mag/2/*`, `Šui/1/*` (Lenzi, CASPo), © eBL; verified 2026-11-02. CASPo (shuilas.org, CC BY-NC) has only the catalogue | high | 4 | 4 | 4 | 5 | 3 |  |  |  |  |
| akkad-04 | The pre-canonical incantations: Old Akkadian, Old Assyrian and OB (dogs, scorpions, snakes, birth, the crying baby, Lamaštu, the evil eye, colic, anger, the trial) – all but the love spells | Old Akkadian, Old Assyrian, Old Babylonian / Akkadian | c. 2300–1600 BCE | same | the tablets themselves | A | 2,608 lines in 174 texts (m) | good (8% broken) | SEAL "Incantations" (470 nodes; 212 with English), https://seal.huji.ac.il/taxonomy/term/74, © HUJI; verified 2026-11-02 | high | 5 | 5 | 2 | 4 | 3 |  |  |  | `קולות-היום-יום/1-שירי-אהבה` (its love incantations; extends it) |
| akkad-05 | Bīt mēseri ("House of Enclosure"): Incantation Tablet, Ritual Tablet A, Figurines | Babylonian–Assyrian / Akkadian (+ Sumerian lines) | c. 1200–800 BCE (est.) | canonical by the NA period | NA 7th c. BCE (55 mss) | A | 727 lines (m): IT 611, RTA 77, FI 39 | good (11% broken) | eBL `Mag/4/1`, © eBL; verified 2026-11-02 (RT has no lines yet) | high | 4 | 4 | 4 | 4 | 3 |  |  |  |  |
| akkad-06 | Šumma ālu ("If a city …"), the terrestrial omen series | Babylonian–Assyrian / Akkadian (SB) | OB–MB c. 1800–1100 BCE | canonical c. 1100–700 BCE | NA (Nineveh) | A | c. 120 tablets (r); on eBL 3,001 lines (m) | fair (T.80–108: 17%; T.1–21: 15%; T.50–63: 12%; NZK: 35%) | eBL `D/2/2`, `D/2/4`, `D/2/6`, `D/2/1` (Mittermayer, Geneva), © eBL; verified 2026-11-02. Geneva working editions: archive-ouverte.unige.ch | high | 4 | 4 | 4 | 4 | 3 | LARGE | T.80–120 human behaviour: 1,670 lines in 25 ch. (sex, dogs and pigs, the king, stars falling on houses, processions); T.1–21 the house: 309; T.50–63 environment: 273; Nabû-zuqup-kēnu's series: 749 (35% broken) | archive-ouverte.unige.ch (optional) |  |
| akkad-07 | The akītu (New Year) ritual of Babylon, Nisannu days 2–5 (DT 15, DT 109, MNB 1848, DT 114), with the other Babylon and Uruk temple rituals of SEAL's LBPL | Babylonian / Akkadian (LB) | NB, c. 700–500 BCE (the festival older) | LB / Seleucid copies | 3rd–2nd c. BCE | D | 443 lines (m); all 17 LBPL rituals 1,294 (m) | fair (akītu 14% broken) | SEAL nodes 38079, 37757, 39359, 37964 (Linssen 2004 base, English), © HUJI; verified 2026-11-02. Thureau-Dangin 1921 (public domain): archive.org `rituelsaccadiens00thuruoft` | high | 3 | 4 | 4 | 5 | 3 |  |  |  |  |
| akkad-08 | The Great Hymns to Gula: Bullussa-rabi's hymn and the Syncretistic Hymn to Gula | Babylonian / Akkadian (SB) | Kassite, c. 1400–1100 BCE | MB–NA | NA/NB | A | 426 lines (m) | good (12%; Bullussa-rabi 0%) | eBL `L/3/7`, `L/3/12`, © eBL; verified 2026-11-02 | high | 4 | 4 | 4 | 4 | 3 |  |  |  |  |
| akkad-09 | Marduk's Address to the Demons | Babylonian / Akkadian (SB) | late 2nd mill. BCE (est.) | MB–NA | NA/NB (71 mss) | A | 253 lines (m) | good (4%) | eBL `L/3/3` (Peterson), © eBL; verified 2026-11-02 | high | 3 | 4 | 4 | 4 | 3 |  |  |  |  |
| akkad-10 | The Great Prayers to Nabû and to Ištar | Babylonian / Akkadian (hymnic-epic) | late 2nd – early 1st mill. BCE | same | NA (Nineveh), NB | A | 409 lines on eBL (m); 236 + 247 in Rozzi (r) | fair–poor (39% broken on eBL) | Rozzi 2024, *The Akkadian Great Hymns and Prayers*, CC BY 4.0, PDF https://edizionicafoscari.unive.it/media/pdf/books/978-88-6969-753-1/978-88-6969-753-1_pYbqMf6.pdf (downloaded, 390 pp.); eBL `L/3/5`, `L/3/9`; verified 2026-11-02 | high | 4 | 4 | 3 | 5 | 2 |  |  | edizionicafoscari.unive.it, phaidra.unipd.it |  |
| akkad-11 | The theological hymns: Eriš šummi (Marduk), Ninurta as Saviour, the Macranthropic Hymn to Ninurta, the Syncretistic Hymn to Ištar, the Hymn to the Queen of Nippur | Babylonian / Akkadian (SB) | c. 1200–700 BCE | MB–NA | NA/NB | A | 509 lines (m) | fair (21%; Queen of Nippur 36%) | eBL `L/3/6`, `L/3/8`, `L/3/10`, `L/3/11`, `L/3/13`, © eBL; verified 2026-11-02 | high | 3 | 4 | 3 | 4 | 3 |  |  |  |  |
| akkad-12 | The OB legends of the kings of Akkade: Sargon the Conquering Hero, Sargon in Foreign Lands, Sargon the Lion, the Great Revolt against Narām-Sîn A–B, Narām-Sîn and the Lord of Apišal, Erra and Narām-Sîn; with *šar tamḫāri* (EA 359) | Old Babylonian (+ MB Amarna) / Akkadian | c. 1900–1700 BCE | same | OB tablets; EA 359 c. 1350 BCE | A | 510 lines (m): SEAL 446 + EA 359 64 | fair (12% broken) | SEAL nodes 1548, 1547, 7525, 1540, 1542, 7255, 1539 (English); CDLI P270858 = EA 359 (ATF); verified 2026-11-02 | high | 5 | 5 | 3 | 3 | 2 |  |  |  | `אגדות-מלכים/` (the Akkade cycle: Sargon Birth Legend, Cuthaean Legend) |
| akkad-13 | The royal inscriptions of the kings of Akkade (Sargon, Rimuš, Maništušu, Narām-Sîn incl. Bassetki, Šar-kali-šarrī, and contemporaries; RIME 2) | Old Akkadian (+ Sumerian versions) | c. 2330–2190 BCE | same (monuments; OB Nippur copies) | originals and OB copies | A | 4,546 case lines / 6,065 words (m), 168 composites | good (12% of lines with any [ ]) | CDLI RIME 2 composites (e.g. P461926 = Sargon 1), English on every line, CDLI terms (free reuse with attribution); verified 2026-11-02 | medium-high (Old Akkadian orthography) | 5 | 5 | 3 | 2 | 4 |  | by king: Sargon 912 case lines, Rimuš 770, Maništušu 146, Narām-Sîn 1,808, Šar-kali-šarrī 234, others 676 |  |  |
| akkad-14 | The Amarna letters (EA 1–382), the archive of Amenhotep III and Akhenaten | Middle Babylonian "peripheral" Akkadian (Canaanite-Akkadian; EA 24 Hurrian, EA 31–32 Hittite) | c. 1360–1330 BCE | same | the tablets themselves | A | 13,232 ATF lines on 374 tablets (m) | fair (≈ 6% heavily broken; 48% of lines touch a bracket) | CDLI ATF (from ORACC aemw/amarna; transliteration only), e.g. https://cdli.earth/artifacts/270887; Knudtzon 1915 VAB 2 (public domain, transliteration + German), archive.org `dieelamarnatafel01knud`, `…02knud`; verified 2026-11-02 | medium | 4 | 5 | 2 | 3 | 4 | LARGE | EA 1–44 the great powers: 2,695 lines (Babylonia 878, Mitanni 1,278 (the Hurrian EA 24 has no ATF on CDLI), Alašiya 269, Hatti 130, Arzawa 63, Assyria 77); Byblos / Rib-Hadda EA 68–138: 3,522; Syria–Lebanon EA 139–250: 3,195; southern Canaan EA 251–339: 2,161 (Jerusalem EA 285–290: 320); the scholarly tablets EA 340–382: 932 |  |  |
| akkad-15 | OB prayers and laments: Papulegara, the hymns to Hammurabi, Akkadian "Man and his God", the Marduk lament CT 44 21, Mama, Anuna, the diviner's prayers YOS 11 22–23 | Old Babylonian / Akkadian | c. 1850–1600 BCE | same | the OB tablets | A | 1,113 lines (m) | fair (11% broken) | SEAL nodes 7511, 7521, 7523, 1808, 1814, 1815, 1829, 26600, 26977 (YOS 11 23 has no English), © HUJI; verified 2026-11-02 | high | 5 | 5 | 2 | 4 | 3 |  |  |  |  |
| akkad-16 | OB and MB wisdom and humour: A Father and his Son, the Scholars of Uruk, At the Cleaner's, On Wolves and Kings, "Life is only a glance" (Emar), Enlil and Namzitara | Old / Middle Babylonian / Akkadian (+ Sumerian) | c. 1800–1200 BCE | same | OB tablets; Emar/Ugarit c. 1200 | A | 824 lines (m) | fair–poor (27%; A Father and his Son 32%) | SEAL nodes 1738, 1751, 1655, 1754, 1801, 1563, © HUJI; verified 2026-11-02 | high | 5 | 5 | 2 | 4 | 3 |  |  |  | `ספרות-החכמה-והצדיק-הסובל/` |
| akkad-17 | Gilgameš: the versions not yet translated (OB Schøyen₁₋₃ rest, UM, CUNES, SM; MB Boğazköy₁₋₃, Emar₁₋₂, Megiddo, Nippur, Ur, Ugarit₁₋₂, Priv₁; NA x, y) | Babylonian, peripheral / Akkadian | OB c. 1800 BCE onward | OB–MB | c. 1700–1200 BCE | A | 795 lines (m): OB 139 + MB/NA 656 | poor (MB/NA 45% broken; Ug₁ 0%, Boğ₁ 72%) | eBL `L/1/4` chapters, © eBL; verified 2026-11-02 | high | 4 | 5 | 5 | 4 | 1 |  |  |  | `אפוס-גילגמש/` (completes the epic's versions) |
| akkad-18 | Udug-ḫul (Utukkū lemnūtu), the canonical bilingual series against evil demons | Babylonian / Sumerian–Akkadian | OB forerunners; canonical late 2nd mill. BCE | MB–NA | NA/NB (OB forerunners) | A | 16 tablets (r; Geller 2016) | fair (r) | Geller 2016, BAM 8 (open access, "all rights reserved"), OAPEN 20.500.12657/24657 / De Gruyter 10.1515/9781614513094; NOT verified (both serve a bot challenge to scripts: a person must save the PDF). Thompson 1903–4 (public domain, superseded), archive.org | medium (bilingual) | 4 | 4 | 5 | 4 | 3 |  |  | www.degruyterbrill.com |  |
| akkad-19 | The Mari prophetic and dream letters (ARM 26/1, the letters of prophets, dreamers and diviners to Zimrī-Lîm) | Old Babylonian (Mari) / Akkadian | c. 1775–1761 BCE | same | the letters themselves | A | c. 50 letters (r) | fair (r) | Archibab (Durand's ARM 26 transliterations), https://www.archibab.fr/; NOT verified (TLS: unable to get local issuer certificate). CDLI ARM 26/1 entries mostly empty | high | 5 | 5 | 1 | 5 | 3 |  |  | www.archibab.fr |  |
| akkad-20 | SAA 10, the letters of Assyrian and Babylonian scholars to Esarhaddon and Assurbanipal | Neo-Assyrian / Neo-Babylonian Akkadian | 680–650 BCE | same | the letters themselves | A | c. 390 letters (r) | fair (r) | ORACC saao/saa10 (CC BY-SA 3.0); NOT verified (ORACC TLS fails from this cloud) | high | 3 | 5 | 1 | 4 | 4 | LARGE (r) | by sender: the astrologers (eclipses, the substitute king), the haruspices, the exorcists, the physicians – each a natural part |  |  |
| akkad-21 | The Divine Love Lyrics of Babylon (the love and jealousy rites of Marduk, Zarpanītu and Ištar of Babylon; lyrics, ritual tablets, commentaries) | Babylonian / Akkadian (NB–LB) | 1st mill. BCE | NB–LB | NA (Nineveh, K 4247+) and LB | A | c. 1,700 manuscript lines on 46 mss (m, numbered) | fair–poor (≥ 30% broken where parsed) | SEAL "DLL" project (2025 edition; per manuscript, English), https://seal.huji.ac.il/taxonomy/term/11654, © HUJI; verified 2026-11-02 | medium (per-manuscript; no composite) | 3 | 5 | 3 | 5 | 3 |  |  |  |  |
| akkad-22 | The court poetry of Nineveh (SAA 3), its well-preserved core: Assurbanipal and Nabû, the Coronation Hymn, the righteous sufferer's prayer to Nabû, the Psalm to Uruk, the hymn to the Ištars of Nineveh and Arbela, Nabû and Tašmetu's love lyrics, the elegy for a woman dead in childbirth, the Marduk Ordeal (Assur), the Underworld Vision of an Assyrian Prince | Neo-Assyrian / Akkadian | 7th c. BCE | same | Nineveh tablets | A | c. 620 lines (r, the October measure) | fair (3–40% lost by text) | ORACC saao/saa03 (CC BY-SA 3.0); NOT verified (ORACC TLS fails) | high | 3 | 5 | 2 | 5 | 3 |  |  |  |  |
| akkad-23 | The statue inscription of Idrimi of Alalaḫ | Peripheral Akkadian (Alalaḫ) | c. 1450 BCE | same | the statue | A | 104 lines (m) | good (4 lines with [) | CDLI P500443 (ATF; no English), ORACC aemw/alalakh/idrimi (unreachable); verified 2026-11-02 (CDLI) | medium-high | 4 | 5 | 1 | 4 | 3 |  |  |  |  |
| akkad-24 | Sargon II's Eighth Campaign, the letter to Aššur (714 BCE) | Neo-Assyrian / SB Akkadian | 714 BCE | same | the Louvre tablet AO 5372 | A | 430 lines (m) | good–fair (18% of lines with [) | CDLI P285665 (RINAP 2 65 ex. 1, ATF); Thureau-Dangin 1912, TCL 3 (public domain), archive.org `unerelationdelah00thuruoft`; verified 2026-11-02 | high | 3 | 5 | 2 | 3 | 3 |  |  |  |  |
| akkad-25 | The NA royal annals in their final editions: Esarhaddon's Nineveh A prism (RINAP 4 1) and Sennacherib's Taylor/Chicago prism (RINAP 3/1 22) | Neo-Assyrian / SB Akkadian | 691 and 673 BCE | same | the prisms | A | 993 lines (m): 493 + 500 | good (composite, no [ ]) | CDLI P462851 and P462830 (ATF from ORACC RINAP; English not included), CDLI terms; verified 2026-11-02 | high | 3 | 5 | 2 | 3 | 3 |  | Esarhaddon Nineveh A 493 (the brothers' revolt, the signs, the return); Sennacherib 22 500 (eight campaigns, Judah, Babylon) |  |  |
| akkad-26 | Enūma Anu Enlil, the Venus (Ištar) section (EAE 55, 56A, 56B, 57 on eBL) | Babylonian–Assyrian / Akkadian (SB) | OB onward (the Venus omens of Ammiṣaduqa c. 1640 BCE) | canonical c. 1100–700 BCE | NA (Nineveh) | A | 455 lines (m) | good (4% broken) | eBL `D/1/4`, © eBL; verified 2026-11-02 | high | 4 | 4 | 5 | 2 | 3 | LARGE (the whole series, c. 70 tablets, r) | on eBL only EAE 55–57 (455); EAE 63 (the Venus Tablet of Ammiṣaduqa) not on eBL |  |  |
| akkad-27 | OB royal epics: the Zimrī-Lîm Epic (Mari), the Song of Bazi, the Gulkišar epic | Old / Middle Babylonian / Akkadian | c. 1770–1500 BCE | same | the tablets | A | 321 lines (m) | fair (19%; Gulkišar 47%) | SEAL nodes 1552, 1551, 1597, © HUJI; verified 2026-11-02 | high | 5 | 5 | 2 | 3 | 3 |  |  |  |  |
| akkad-28 | The Elevation of Babylon (hymn to Marduk, Esagil, Babylon and the Babylonians) | Babylonian / Akkadian (SB) | late 2nd mill. BCE (est.) | NB | 7th c. BCE (20 mss, to the 1st c. BCE) | A | 134 lines (m; c. 2/3 of c. 250) | fair (25% broken) | eBL `L/1/3`, © eBL; verified 2026-11-02 | high | 3 | 4 | 3 | 4 | 3 |  |  |  |  |
| akkad-29 | The Late Babylonian chronicles and historical-literary texts (ABC 7 the Nabonidus Chronicle, ABC 17, 22, 23; the BHLT epics; the Dynastic Prophecy BHLT 3) | Late Babylonian / Akkadian | 7th–3rd c. BCE | LB / Seleucid | LB tablets | A | 791 lines (m): chronicles 277, epics 428, prophecy 86 | fair (12–21%) | SEAL LBPL nodes (34840, 34399, 34571, 34808, 35151–35952, 36918), © HUJI; verified 2026-11-02 | high | 3 | 4 | 2 | 3 | 3 |  |  |  |  |

### akkad-01 – Anzû
This is the epic of Ninurta. The bird Anzû steals the Tablet of Destinies, the gods despair one by one, and the young
warrior wins back the order of the world and receives his names. It is the Babylonian myth of cosmic usurpation and its
undoing, and Enūma eliš took its plot and Tiāmat's role from it. It was copied from the OB period to the Neo-Assyrian
libraries. eBL gives a normalized composite, lemmas and English for every line, so `ebl_fetch.py` is enough.
- **Risks:** OB III (34% broken) and SB III (31%) have gaps. The SB I–III and OB II–III versions overlap, which wants a
  version-aligned layout like the folder's Etana or the Cuthaean Legend.
- **Run:** `ebl_fetch.py` for the six chapters, a key in `kings_tools.py` or the netherworld or creation corpus, and its
  renderings. The cheapest strong run of the region.

### akkad-02 – The OB hymns to Ištar
- **Agušaya** (A + B) is the OB poem of Ištar's wildness. Ea creates her double, Ṣaltu ("Strife"), to tame her, and the
  feast of whirling (*gūštû*) is founded. The text is contemporary and hymnic-epic.
- **The Louvre hymn** praises Ištar's rule. Ammī-ditāna's hymn (60 lines, intact) and "Ištar Baghdad" complete the OB
  Ištar corpus.

These texts are the goddess as the Babylonians first sang her, older than every SB text the folder has. SEAL gives a
lemmatized transliteration and English. `seal2md.py` exists.
- **Risks:** Agušaya's language is hard (rare forms, hapaxes). Its sides A and B are two tablets of one poem with a gap
  between them.
- **Run:** `seal2md.py`; the folder's netherworld corpus has the Ištar renderings (the Descent).

### akkad-03 – The šuʾila prayers
The "hand-lifting" prayer was the Babylonian's standard way to speak to a god. It runs: praise, the self-presentation
"I, so-and-so, son of his god", the complaint of sin and sickness, the plea, then the vow of praise. The rubric
*šu-íl-la-kam* names the genre itself, so the corpus is native, not modern. Ištar 2 ("I pray to you, lady of ladies",
123 lines) is the most famous Akkadian prayer. The corpus is whole on eBL in Lenzi's CASPo editions.
- **Risks:** many prayers are short (17–60 lines), but they make one whole. A few chapters are stubs (1 line) and are left
  out. Rituals are attached to some.
- **Run:** `ebl_fetch.py` × 46 chapters (`Šui` must be percent-encoded), and a corpus tool on the Maqlû model. The folder
  has no prayer corpus yet: a new corpus or `כשפים-ולחשים/`.

### akkad-04 – The pre-canonical incantations
These are the oldest Akkadian magic, from the Old Akkadian, Old Assyrian and OB periods, 174 texts and 2,608 lines:
- the rabid dog and the scorpion;
- the snake;
- the woman in labour ("the cow of Sîn");
- the baby who keeps the house awake;
- Lamaštu;
- the evil eye;
- colic, anger, the lawsuit.

It is the most unguarded voice of everyday fear and hope in the region. The folder already did the love spells of the
same corpus (LAOS 4). SEAL's theme taxonomy gives the natural parts.
- **Risks:** the texts are short and many. Each needs its own little apparatus; Wasserman's and Zomer's notes are
  copyrighted, but SEAL's own notes may be used.
- **Run:** `seal2md.py` over the incantation nodes; `kol_tools.py` (the LOVE key as model).

### akkad-05 – Bīt mēseri
The "House of Enclosure" protects a house and its sick owner with figurines buried at its corners. It holds the canonical
list of **the seven antediluvian sages (apkallū)**, each with his city and his offence against the gods (l. 300:
"Piriĝgalabzu … hung his seal on a goat-fish; having enraged Enki …"). It also has the prescriptions for the figurines
(FI) and the ritual (RTA). It is canonical āšipūtu: it stands in the Exorcist's Manual, and the incantation tablet has 55
manuscripts.
- **Risks:** RT (the main ritual tablet) is still empty on eBL. Some lines are Sumerian, with Akkadian translation.
- **Run:** `ebl_fetch.py` × 3; a key in `כשפים-ולחשים/`, beside Maqlû.

### akkad-06 – Šumma ālu (LARGE)
This is the omen series of everyday life: the house, the city, animals, sex, the king, what a man sees on the street. It
is the Babylonian catalogue of what to fear and what to hope from the ordinary world. "If a dog approaches a woman (for
sex): end of the reign …"; "If a star falls onto a man's staircase: the owner of the house will die."

The whole series is c. 120 tablets, so it is LARGE. eBL holds four self-contained groups (3,001 lines). **The
human-behaviour group T.80–120 (1,670 lines, 17% broken)** is the natural first part. The Geneva team's score editions
are open working papers on archive-ouverte.unige.ch.
- **Risks:** the protases repeat in long lists, and much of the inner world sits in the apodoses' terse phrases. The team
  said the edition is still growing.
- **Run:** `ebl_fetch.py` × 25 chapters; a new omen corpus (renderings for protasis/apodosis, *šumma*, the omen
  vocabulary). It is the first omen text in the folder, so its set-up cost is moderate.

### akkad-07 – The akītu ritual of Babylon
On days 2–5 of Nisannu:
- the high priest prays to Bēl before dawn;
- on day 4 Enūma eliš is recited before the god;
- on day 5 the temple is purified with a ram's carcass, the king is stripped of his insignia and struck on the cheek;
  if his tears flow, Bēl is well disposed.

It is the central festival of Babylon, and the only place where we see how Enūma eliš was used, so it is the natural
companion to the folder's creation corpus. SEAL's LBPL project gives it with English. The other 13 temple rituals of
Babylon and Uruk (851 lines) can follow.
- **Risks:** the copies are late (Seleucid), so the dating of the ritual's content is uncertain, and the late frame
  should be marked. 14% broken.
- **Run:** `seal2md.py`; a project in `סיפורי-הבריאה-המסופוטמיים/` or a ritual corpus.

### akkad-08 – The Great Hymns to Gula
Bullussa-rabi's hymn is a signed composition (the author's name is in an acrostic). Gula, the healer, speaks in the first
person, alternating with praise of her husband, and every stanza is a self-portrait. The syncretistic hymn identifies her
with every goddess of every city. Together they show the Babylonian theology of healing and of "one goddess under many
names".
- **Risks:** the syncretistic hymn is 23% broken.
- **Run:** `ebl_fetch.py` × 2; a hymn corpus shared with akkad-09 – 11, which can be one run (≈ 1,600 lines).

### akkad-09 – Marduk's Address to the Demons
The god speaks: "I am Asalluḫi …" (ll. 10–107). A small myth follows, then a litany of what demons do to a sick man. It
is the longest incantation in which a god speaks against the demons, and it had 71 manuscripts. It is the exorcist's
self-understanding put in the god's mouth.
- **Risks:** few (4% broken).
- **Run:** with akkad-08 / 11.

### akkad-10 – The Great Prayers to Nabû and to Ištar
These are the two long penitential prayers of the "Great Hymns" group. In each, the hymnic praise turns into a long
lament of the sufferer, confession and plea. The Nabû prayer has a wisdom passage (ll. 173–185) on suffering as the way
to happiness. They are Ludlul's neighbours in thought.
- **Base:** eBL alone is poor (39% broken). Rozzi 2024 is a new critical edition with a new fragment of the Nabû prayer,
  CC BY 4.0, and was downloaded here.
- **Risks:** hard hymnic-epic language and hapaxes.
- **Run:** Rozzi's PDF converted (pdftotext) beside eBL; the wisdom corpus (`ספרות-החכמה-והצדיק-הסובל/`) is the natural
  home.

### akkad-11 – The theological hymns
- **Eriš šummi** names Marduk part by part.
- **The Macranthropic Hymn to Ninurta** makes the god's body out of the other gods: "your eyes are Enlil and Ninlil …".
- **Ninurta as Saviour** and **the Syncretistic Hymn to Ištar** are smaller pieces of the same kind.
- **The Hymn to the Queen of Nippur** is a long hymn to Ištar, probably composite.

These texts are the Babylonian speculation on the unity and plurality of the divine.
- **Risks:** the Queen of Nippur is 36% broken. Its structure is unknown.
- **Run:** with akkad-08 / 09.

### akkad-12 – The OB legends of the kings of Akkade
In these legends the OB scribes made heroes of Sargon and Narām-Sîn:
- Sargon's speeches to his troops before the campaign into the forest (*Conquering Hero*, *in Foreign Lands*);
- the rebellion of all the lands against Narām-Sîn;
- the Lord of Apišal;
- the Amarna *šar tamḫāri*, Sargon's march to Puruš-ḫanda for the merchants.

They complete the folder's Akkade cycle (the Sargon Birth Legend, the Cuthaean Legend).
- **Risks:** short pieces of different versions; Sargon the Lion parsed to fewer lines than SEAL reports (77). EA 359 has
  no English on CDLI (Knudtzon's German, public domain).
- **Run:** `seal2md.py` + `cdli_composite2md.py`; `kings_tools.py`.

### akkad-13 – The inscriptions of the kings of Akkade
These are the first Semitic royal texts, c. 2330–2190 BCE:
- Sargon's victories ("Enlil gave him no rival");
- Rimuš's campaigns;
- the Maništušu obelisk;
- Narām-Sîn's deification by his city, the Bassetki statue: the people "asked for him as god of their city";
- the curse formulas.

Most survive as exact OB copies of the monuments at Nippur. The scribes preserved and studied them, which is why the
legends of akkad-12 exist. The CDLI composites have English line by line.
- **Risks:** the case lines are short (1–3 words), so 4,546 lines is only c. 6,000 words. Old Akkadian orthography and
  the Sumerian versions need care. The content is mostly military; the inner world sits in the curses and the
  deification.
- **Run:** `cdli_composite2md.py`; a project in `אגדות-מלכים/` (with akkad-12) or a new "royal voice" corpus.

### akkad-14 – The Amarna letters (LARGE)
This is the oldest diplomatic archive, 13,232 lines:
- the great kings call each other "brother" and bargain over gold, daughters and the death of a princess (EA 1–44);
- Rib-Hadda of Byblos sends 60 letters of growing despair;
- the Canaanite vassals bow "seven times and seven times", and the ʿApiru appear.

It is the most direct voice of the Late Bronze Age, from kings to small rulers.
- **Base:** CDLI (from ORACC aemw/amarna) has the transliteration of every tablet, without English. Knudtzon 1915 (public
  domain) has transliteration + German.
- **Risks:** the Akkadian is peripheral, with Canaanite verb forms and glosses. EA 24 is in Hurrian (a new language, and it has no ATF on CDLI; leave it out). EA 31–32 are in Hittite (`hittite_tools.py`). 48% of lines touch a bracket, but only ≈ 6% are
  heavily broken.
- **Parts:** EA 1–44 (2,695 lines) is the natural first part.
- **Run:** `cdli_composite2md.py` adapted to ATF without translations, and a renderings file for the Amarna formulae.

### akkad-15 – OB prayers and laments
These are the OB personal and cultic prayers:
- Papulegara's hymn;
- the hymns that make Hammurabi a god's beloved;
- the Akkadian "Man and his God" (the sufferer restored by his personal god);
- the great lament to Marduk (CT 44 21);
- the prayers of the diviner YOS 11 22–23, the bārû's *ikribu*, which pray for a true answer.

It is the OB counterpart of akkad-03.
- **Risks:** a loose corpus. YOS 11 23 has no English on SEAL. 11% broken.
- **Run:** `seal2md.py`; with akkad-02 as one OB hymn run (≈ 1,900 lines).

### akkad-16 – OB and MB wisdom and humour
- A Father and his Son: a long OB instruction, 32% broken.
- The Scholars of Uruk: satire.
- At the Cleaner's: a comic dialogue with a laundryman.
- On Wolves and Kings.
- The Ballad of Early Rulers, "life is only a glance" (Emar), whose Sumerian twin is in ETCSL.
- Enlil and Namzitara.

These are the unguarded and comic voices the folder lacks for Akkadian.
- **Risks:** fair–poor (27%). The Ballad is bilingual; coordinate with the Sumer survey.
- **Run:** `seal2md.py`; `wisdom_tools.py`.

### akkad-17 – Gilgameš: the remaining versions
This completes the epic as the ancients knew it beyond the SB and the nine OB tablets done:
- the Hittite-capital Akkadian (Boğazköy);
- Emar;
- Megiddo, the Gilgameš fragment found in the Land of Israel;
- Ugarit;
- the Ur tablet;
- the small OB pieces.

**Risks:** 45% broken overall. Only Ugarit₁, Ur, Boğ₂ and Priv₁ are fair. The lead may prefer the fair half (c. 300
lines). **Run:** `ebl_fetch.py`; `אפוס-גילגמש/` project 3 (the folder's verifier exists).

### akkad-18 – Udug-ḫul
This is the canonical bilingual series against the evil *utukku* demons. The Babylonians kept its core recited for 1,500
years (OB forerunners to the Seleucid period). With Maqlû it is the backbone of exorcism.
- **Base:** Geller 2016 is open access (OAPEN), but OAPEN and De Gruyter both serve a bot challenge to scripts, so the
  base is **not verified**: a person must save the PDF. Thompson 1903–4 (public domain) is obsolete.
- **Risks:** a bilingual text (the folder's Sumerian tools help). The size is unmeasured and may approach 3,000 lines.
- **Run:** the PDF saved by the user into `sources/` (git-ignored), then pdftotext.

### akkad-19 – The Mari prophetic and dream letters
The officials and women of Zimrī-Lîm's court report what prophets (*āpilum*, *muḫḫûm*) and dreamers said: "the god sent
me …". These are the oldest prophetic speeches, inside contemporary letters. The base is Archibab, which **fails TLS from
here**; CDLI's ARM 26/1 entries are mostly empty. **Run:** needs `www.archibab.fr` to work (or a person saves the pages).

### akkad-20 – SAA 10 (LARGE, reported)
The scholars write to the king:
- an eclipse threatens him, so a substitute king sits on the throne;
- the exorcist treats the prince;
- the king's grief for a dead child.

This is the inner life of the court, unguarded. **ORACC only** (unreachable here). The natural parts are by profession.

### akkad-21 – The Divine Love Lyrics
These are the cultic love songs, and the jealousy rites, of Marduk, his wife Zarpanītu and his lover Ištar of Babylon.
They are ribald and tender, and the folder has nothing like them. The base is SEAL's new 2025 edition, but only
**manuscript by manuscript** (46 manuscripts, no composite), so a run must build its own composite.
- **Risks:** ≥ 30% broken where it could be parsed. The obscene vocabulary needs echo control.

### akkad-22 – SAA 3, the core
The well-preserved texts of Assurbanipal's court:
- the king's dialogue with Nabû ("your ears, Assurbanipal, which I made…");
- the coronation hymn;
- the elegy of a woman dead in childbirth;
- the Underworld Vision of an Assyrian Prince, whose Netherworld fits the folder's netherworld corpus.

Most of SAA 3 is too damaged; only this core (c. 620 lines) is a candidate. **ORACC only.**

### akkad-23 – Idrimi
The exiled prince of Aleppo writes in the first person: he flees to Emar, lives seven years among the Ḫapiru and reads
the omens, then sails back to win his kingdom. It is the first autobiography in Akkadian, carved over the statue's whole
body. CDLI has the ATF (104 lines, almost intact); ORACC has the English. **Risk:** the peripheral Akkadian is hard.

### akkad-24 – Sargon II's Eighth Campaign
This is a report written as a letter to the god Aššur. It describes the mountains of Urartu, the Urartian king's flight,
and the plunder of Muṣaṣir and its god. It is the most literary Assyrian royal text. CDLI has the ATF (430 lines) and
Thureau-Dangin 1912 (public domain) has text and translation.

### akkad-25 – Two NA royal annals
- **Esarhaddon's Nineveh A** tells how his father chose him, how his brothers rebelled and murdered their father, the
  signs the gods sent, and his return to the throne. It is the Assyrian royal self-justification at its most personal.
- **Sennacherib's final prism** is the canonical campaign account (Judah, Babylon).

CDLI has the composites in ATF (from ORACC; no English). The lead may take one only. Inner world: moderate.

### akkad-26 – Enūma Anu Enlil, Venus (LARGE whole)
This is the celestial omen series, the most valued scholarship of the Assyrian court, on which the letters of akkad-20
are built. eBL has only EAE 55–57 (Venus, 455 lines, 4% broken), so a small, technical part. EAE 63 (Ammiṣaduqa's Venus
tablet) is not there. **Low priority** unless a run takes the omen genre (akkad-06) whole.

### akkad-27 – OB royal epics
The Zimrī-Lîm Epic is the king's war in Mari's own idiom, contemporary. The Song of Bazi and the Gulkišar epic are the
others. These are small epics (321 lines), and Gulkišar is 47% broken. They could join akkad-12.

### akkad-28 – The Elevation of Babylon
This is a hymn to Marduk the healer, to Esagil, to Babylon and its river, and to the generosity of the Babylonians. It is
the city praising itself. Only c. two-thirds is recovered (134 of c. 250 lines), and it is 25% broken. It could join
akkad-07.

### akkad-29 – LB chronicles and historical-literary texts
- The Nabonidus Chronicle (the fall of Babylon, 539 BCE).
- The religious chronicle ABC 17.
- The late historical epics (BHLT).
- The Dynastic Prophecy (empires rise and fall, Alexander).

These texts are the Babylonians' late view of their own history. The early chronicles (ABC 1–20) have no open base:
Grayson and Glassner are copyrighted.

## Excluded
- **Erra and Išum II–V**: eBL `L/1/5` II–V have 0 lines (checked again 2026-11-02). They wait for eBL.
- **Instructions of Šūpê-amēlu (`L/2/6`), Aluzinnu (`L/2/7`), the Series of the Fox (`L/2/10`), Prayers to Marduk 1–2
  (`L/3/1–2`)**: 0 lines on eBL. **Angim SB** and **Tintir**: 1 line each.
- **Catalogue of Texts and Authors** (`L/0/0`, 98 lines): 40% broken, and a list.
- **Saĝba** (`Mag/3/10`): Tablet I has only 25 lines on eBL; Tablet II is absent. Too short.
- **"Stomach" 1** (`Med/1/8`, 75 lines): the series' other tablets are empty. The medical corpora (BAM, the Diagnostic
  Handbook Sakikkû) have no open base.
- **Šurpu**: not on eBL. Reiner 1958 is copyrighted. Zimmern 1901 (public domain) predates the reconstruction, so it is
  not a controlled base.
- **Muššuʾu** (Böck 2007), **the Lamaštu series** (Farber 2014; the OB Lamaštu spells are in akkad-04), **Namburbi** (Maul
  1994), **dingir.šà.dib.ba** (Lambert 1974), **Mīs pî** (Walker–Dick 2001): copyrighted only, not on eBL.
- **The dream book** (Oppenheim 1956), **Šumma izbu** (Leichty 1970), **Bārûtu** (Koch): copyrighted only, not on eBL.
- **The Tukulti-Ninurta Epic**: SEAL node 1592 is a catalogue entry only, and Machinist 1978 is not open.
- **The Marduk Prophecy, the Šulgi Prophecy, the Uruk Prophecy** (SEAL 37062 empty), **the Theogony of Dunnu** (SEAL 35148
  empty), **the Elegy on the Death of Narām-Sîn** (SEAL 1817 empty): no text.
- **The Cyrus Cylinder** (CDLI, 45 lines): short. It belongs with Nabonidus if RIBo becomes reachable.
- **Nabonidus's inscriptions and the Adad-guppi stele**: RINBE 2 composites on CDLI are partial (Nabonidus 01, 34 with
  English); Adad-guppi was not found. They need ORACC `ribo` (record).
- **Assurbanipal's Prism A** (RINAP 5/1 11): not on CDLI. ORACC-only (record).
- **OB letters (AbB) in general**: CDLI holds scattered modern volumes (AbB 12 and 13 nearly whole, 4,092 + 3,783 lines,
  no English), not native archives. Archives such as Hammurabi's letters to Šamaš-ḫāzir need Archibab (TLS fails).
- **Old Assyrian merchants' letters**: CDLI coverage is spotty (AKT 1–3 transliterations without English; AKT 8 only 7
  items), and oatp.net answers 502. No whole archive verified.
- **The Edict of Ammiṣaduqa**: CDLI P594313 / P595447 have no transliteration, and there is no eBL chapter.
- **Hammurabi §66–99** (the gap in the base): no open edition of the restored laws found (Roth 1997 is copyrighted).
- **The Neo-Babylonian Laws** (CDLI P579641): catalogue only.
- **The Middle Assyrian Palace Decrees and the Coronation Ritual**: ORACC tcma only (record).
- **The rest of SAA 3** (the epics, the Assurbanipal paeans, the divine letters): 40–82% of words lost.
- **The AkkLove remainder** (KAR 158, the MA catalogue of incipits): a list of first lines, not songs.

## New languages
None. Everything here is Akkadian, which the folder has used since Round 1 (guidelines §6.3). Dialect set-ups a run
would need:
- **Old Akkadian** (akkad-13): the orthography (no mimation loss, *š* for later *s*, the Sumerograms) and Sumerian
  versions beside the Akkadian. Claude's confidence is high with the CDLI English as a control.
- **Peripheral (Amarna, Alalaḫ) Akkadian** (akkad-14, 23): the Canaanite verb forms (yaqtulu), the glosses, the
  West-Semitic words. Confidence medium, since there is no lemmatized open base here (ORACC aemw would give one).
  Excluded or marked inside akkad-14: **Hurrian** (EA 24, the long Mitanni letter; no ATF on CDLI; a new language, reading confidence low) and **Hittite** (EA 31–32; the folder's `hittite_tools.py`).
- **The Sumerian lines of the bilinguals** (Bīt mēseri, Udug-ḫul, the šuʾila rubrics): the folder's `sumerian_workbench.py`.
- **Late Babylonian** (akkad-07, 21, 29): the late orthography. Confidence high with SEAL's English.

## Hosts
Hosts the region needs that are **not** in `domains.txt`:
- `edizionicafoscari.unive.it`: Rozzi 2024, *The Akkadian Great Hymns and Prayers* (CC BY 4.0), the PDF (akkad-10).
  Reachable today.
- `phaidra.unipd.it`: Rozzi's repository record and licence (akkad-10).
- `archive-ouverte.unige.ch`: the Geneva Šumma ālu working editions (akkad-06; optional, since eBL has the text).
  Reachable today; the site is a JavaScript app, so a search needs a browser.
- `www.archibab.fr`: OB and Mari letters (akkad-19; the AbB archives). **TLS fails** ("unable to get local issuer
  certificate"); HTTP only redirects.
- `www.degruyterbrill.com`: Geller 2016 Udug-hul (akkad-18). It serves a bot challenge to scripts; the OAPEN copy
  (`library.oapen.org`, already listed) does the same.
- `www.sbl-site.org`: Lenzi (ed.) 2011, *Reading Akkadian Prayers and Hymns* (open access PDF; a second opinion for
  akkad-03 and 08). Reachable today.
- `oatp.net`: the Old Assyrian Text Project (OA letters; excluded). 502 from the proxy.

Listed but failing: **`oracc.museum.upenn.edu`** fails TLS from this cloud. It is needed for SAA 10 (akkad-20), SAA 3
(akkad-22), the English of RINAP 2–4 (akkad-24, 25), RINAP 5, RIBo/RINBE, aemw/amarna (lemmatized Amarna) and
aemw/alalakh/idrimi. Already listed and working: `www.ebl.lmu.de`, `seal.huji.ac.il`, `cdli.earth`, `archive.org`
(Knudtzon 1915, Thureau-Dangin 1912 and 1921, Thompson 1903).

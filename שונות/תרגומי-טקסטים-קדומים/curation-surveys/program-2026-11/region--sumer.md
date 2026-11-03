# Region survey – sumer (2026-11-02)

Sumerian literature, c. 2600–1600 BCE and its later copies (Emesal included). Sizes and conditions below were **measured by
script** on the ETCSL TEI transliterations (`<l>` lines; a line is "broken" when ≥ 50% of its words are wholly restored
`[ ]` or illegible; `gap` = the lines ETCSL counts as missing, outside the line total) and on the CDLI ATF composites
(case lines, words, lines with `[`). Script and per-text table: `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/sumer/scripts/damage.py`,
`…/curation/sumer/damage-all.tsv`, `…/curation/sumer/scripts/sets.py`. This is a stricter measure than the inventory's
`damaged_lines` column (any mark), so its percentages are lower.

## Key findings
- **The Sumerians themselves named their core, and we hold almost none of it.** The OB scribal curriculum's **Decad**
  (Tinney 1999; confirmed by the OB catalogues) has ten texts: Šulgi A, Lipit-Eštar A, the Song of the Hoe, Inana B,
  Enlil A, the Keš temple hymn, Enki's Journey to Nibru, Inana and Ebiḫ, Nungal A, Bilgameš and Ḫuwawa A. The Song of the
  Hoe is done and Bilgameš and Ḫuwawa A is in Round 6. **The other eight are 1,144 lines, and they are nearly
  intact: 3 broken lines in all** (measured). It is the region's strongest candidate on every criterion. The
  **Tetrad**, the introductory set, adds 379 lines (Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A).
- **The genre we lack is the hymn**, which is what Sumerian literature mostly is. The folder has myths, debates,
  laments, proverbs, a temple-building text and wisdom, but no Sumerian hymn yet. The hymns that count are
  Enheduana's (Inana B and C, the Temple Hymns, Inana and Ebiḫ), the temple hymns, Enlil A, Nanše A (justice for the
  orphan and the widow), Nungal A (the prison as divine judgement) and the royal hymns (Šulgi, Iddin-Dagan A, the
  sacred marriage).
- **Ninurta's two epics, Lugal-e (712 lines) and Angim (208), are the Sumerian texts most copied into the 1st
  millennium** (bilingual copies down to the Seleucid period). They are well preserved (5% broken) and not in any plan.
- **Wholeness is decisive in this corpus.** Many famous texts fail it: Inana and An, Dumuzid and his Sisters, Copper and
  Silver, the Lament for Unug, most proverb collections after 3, and most minor Šulgi and Nanna hymns. Inana and Enki
  passes only as a "fair to poor" central myth: 24% of its lines are broken and c. 237 lines are lost.
- **Some candidates complete what the folder began:** the city laments (Nibru and Eridug, beside Ur and
  Sumer-and-Urim); the Dumuzid cycle (Dumuzid and Ĝeštin-ana, and Inana and Bilulu, beside Inana's Descent and
  Dumuzid's Dream); the Sumerian letters (the Royal Correspondence of Ur and the rest of ETCSL's letters, beside the
  eight done); the Sumerian King List whole (ll. 1–47 done); the Gudea statues (beside the Cylinders); further proverb
  collections.
- **The oldest stratum is reachable on CDLI** (cdli.earth, allowlisted; ATF composites with ETCSRI's English, line by
  line). Verified: the Pre-Sargonic Lagaš inscriptions, c. 2450–2350 BCE – Enmetena's cone, Uru-inimgina's reforms
  and his lament over Lagaš – and Gudea's statues (B: 365 lines). These are contemporary artifacts, the earliest
  historical, legal-ethical and penitential prose in the world. The Keš hymn's Early Dynastic witnesses from Abū
  Ṣalābīḫ (c. 2600 BCE) are also on CDLI.
- **Base and licence.** Every ETCSL candidate was verified today on the live site (`etcsl.orinst.ox.ac.uk`, the
  transliteration and English pages answer 200) and in the local OTA transliterations. The licence is CC BY-NC-SA 3.0.
  **The cloud copy lacks the ETCSL bulk** (`sources/ETCSL/_bulk/` holds only its README) and the ePSD2 zip
  (`sources/ORACC/_bulk/` is absent). A run must restore the ETCSL zip from llds (allowlisted). **ORACC fails TLS from
  this session**, so `sumerian_workbench.py morph | line | gloss` (ePSD2 morphology and glossary) cannot run: every new
  text would be read from ETCSL's own lemmas (every word lemmatised with an English label) and ETCSL's English,
  without parsed morphology.
- **What is not reachable:** the Emesal canonical liturgies (balaĝ, eršemma, eršaḫuĝa: Cohen 1988 and Gabbay are ©,
  and ePSD2 is on ORACC); the school (Eduba) texts beyond Eduba C, the dialogues and most diatribes; the Instructions
  of Ur-Ninurta and the Sumerian Counsels of Wisdom (not in ETCSL; Alster 2005 is ©); Tree and Reed (Mittermayer 2019
  is open access but behind OAPEN's bot check); Udug-ḫul (Geller 2016 on OAPEN, same bot check).
- **No candidate is `LARGE`.** The largest units are the Šulgi hymns (all 20 besides A: 2,143 lines), the
  Dumuzid–Inana songs (1,247), the Gudea statues and the Lagaš inscriptions (1,326 and 1,586 short case lines). Every
  hymn, letter or song collection here is a set of whole texts. The lead may run them part by part.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| sumer-01 | **The Decad, the eight texts not yet taken**: Šulgi A (2.4.2.01), Lipit-Eštar A (2.5.5.1), Inana B, the Exaltation of Inana (4.07.2), Enlil A (4.05.1), the Keš temple hymn (4.80.2), Enki's Journey to Nibru (1.1.4), Inana and Ebiḫ (1.3.2), Nungal A (4.28.1) | Sumerian (Old Babylonian school canon) | c. 2600 BCE (Keš) to c. 1930 BCE (Lipit-Eštar) | ED IIIa (Keš); Sargonic–Ur III; Isin | c. 2600 BCE (Keš, Abū Ṣalābīḫ, CDLI Literary 000751); the rest OB c. 1800 | A (OB close copies; the Keš hymn edited between ED and OB) | 1,144 lines (m) | good: 3 broken lines (0.3%); 4 lines in gaps | ETCSL c./t. (OTA 2518 + etcsl.orinst.ox.ac.uk), CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 5 | 5 | 3 |  | Šulgi A 108, Lipit-Eštar A 108, Inana B 154, Enlil A 171, Keš 165, Enki's Journey 133, Inana and Ebiḫ 184, Nungal A 121 | etcsl.orinst.ox.ac.uk (optional) | the Decad: the Song of the Hoe (done), Bilgameš and Ḫuwawa A (Round 6) |
| sumer-02 | **Ninurta's two epics**: Lugal-e, Ninurta's Exploits (1.6.2), and Angim, Ninurta's Return to Nibru (1.6.1) | Sumerian (later bilingual Sumerian–Akkadian) | c. 2150–2050 BCE (Gudea / Ur III) | Ur III–OB | OB c. 1800; bilingual MB–Seleucid copies | A (OB) + D (the 1st-millennium bilingual recension) | 920 lines (m) | good: 46 broken (5%); 17 lines in gaps | ETCSL c./t. 1.6.2, 1.6.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 5 | 5 | 3 |  | Lugal-e 712, Angim 208 | etcsl.orinst.ox.ac.uk (optional) |  |
| sumer-03 | **Enheduana's other works**: Inana C, the "Stout-hearted Lady" (4.07.3), and the Temple Hymns, 42 hymns to the temples of Sumer and Akkad (4.80.1). Inana B and Inana and Ebiḫ are in sumer-01 | Sumerian (Sargonic court poetry) | c. 2280 BCE (attributed to Enheduana, Sargon's daughter; the Temple Hymns have Ur III additions) | Sargonic–Ur III | OB c. 1800 (also Ur III fragments of the Temple Hymns) | A (OB copies of an attributed author) | 770 lines (m) | good: 68 broken (9%); 49 lines in gaps (Inana C) | ETCSL c./t. 4.07.3, 4.80.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 5 | 5 | 3 |  | Inana C 233, Temple Hymns 537 (42 hymns) | etcsl.orinst.ox.ac.uk (optional) |  |
| sumer-04 | **Enlil's two marriages**: Enlil and Ninlil (1.2.1) and Enlil and Sud (1.2.2) | Sumerian | 3rd millennium (Nippur theology) | Ur III–OB | OB c. 1800 (Enlil and Sud also MA / NA bilingual) | A | 347 lines (m) | good: 28 broken (8%); 9 lines in gaps | ETCSL c./t. 1.2.1, 1.2.2, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 4 | 5 | 3 |  | Enlil and Ninlil 154, Enlil and Sud 193 |  |  |
| sumer-05 | **The Dumuzid–Inana songs** (4.08.01–4.08.33, 4.08.a: the balbale, kunĝar and tigi love songs, with Dumuzid and Enkimdu) | Sumerian, largely Emesal | Ur III–OB (c. 2050–1800 BCE) | Ur III–OB | Ur III (the Šu-Suen songs) / OB | A | 1,247 lines in 27 songs (m) | fair: 199 broken (16%); 82 lines in gaps; the worst songs (M, V, F1) are short | ETCSL c./t. 4.08.*, CC BY-NC-SA 3.0, verified 2026-11-02 (t.4.08.01) | medium (Emesal) | 5 | 4 | 3 | 5 | 3 |  | 27 songs, 6–145 lines each (P 145, C1 106, Enkimdu 87, D1 70, B1 59, A 57 …) |  | the love songs of `קולות-היום-יום/1` (Akkadian): their Sumerian counterpart |
| sumer-06 | **Nanše A and Ḫendursaĝa A**, the two Lagaš hymns of divine justice (4.14.1, 4.06.1) | Sumerian | c. 2100 BCE (Lagaš II; Nanše A names Gudea's god) | Lagaš II–OB | OB c. 1800 | A | 464 lines (m) | good: 29 broken (6%); 65 lines in gaps (Ḫendursaĝa) | ETCSL c./t. 4.14.1, 4.06.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 5 | 3 |  | Nanše A 256, Ḫendursaĝa A 208 |  | `בניין-המקדש/` (Gudea's Lagaš) |
| sumer-07 | **The Pre-Sargonic Lagaš inscriptions**: Enmetena's cone (the Lagaš–Umma border war, RIME 1.9.5.1), Uru-inimgina's three reform texts (1.9.9.1–3) and his lament over Lagaš (1.9.9.5); optionally Eanatum's Stele of the Vultures (1.9.3.1) | Sumerian, Early Dynastic IIIb | c. 2450–2350 BCE | the same (stone, clay cones) | c. 2400 BCE (the monuments themselves) | A | 951 case lines / 1,615 words (m); with the Stele 1,586 / 2,654 | good (composites intact); the Stele poor (43% of its case lines bracketed on the witness) | CDLI composites P431117, P431154–56, P431158 (+ P431075) with ETCSRI's English per line, CDLI terms (free re-use with attribution), verified 2026-11-02 | medium (ED orthography; no ETCSRI morphology) | 5 | 5 | 2 | 4 | 3 |  | Enmetena 223; reforms 334 + 145 + 144; lament 105; Stele 635 |  |  |
| sumer-08 | **Inana and Enki**, the transfer of the *me* from Eridu to Uruk (1.3.1) | Sumerian | Ur III–OB | OB | OB c. 1800 (mainly one Nippur tablet) | A | 592 lines + c. 237 lost (m) | fair–poor: 145 broken (24%), c. 237 lines in 10 gaps | ETCSL c./t. 1.3.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 5 | 3 |  | segments A–I |  | the Enki myths of `סיפורי-הבריאה-המסופוטמיים/` |
| sumer-09 | **The Šulgi hymns, the five long ones**: Šulgi B, C, D, E, X (2.4.2.02–05, .24); optionally the other 15 short hymns (2.4.2.07–b, 867 lines) | Sumerian (Ur III royal hymns) | c. 2090–2050 BCE | Ur III | Ur III / OB | A | 1,276 lines (m); all 20 besides A: 2,143 | fair: 134 broken (11%); 193 lines in gaps (D: 135) | ETCSL c./t. 2.4.2.*, CC BY-NC-SA 3.0, verified 2026-11-02 (t.2.4.2.02) | high | 5 | 4 | 4 | 3 | 3 |  | B 385, C 253, D 262, E 221, X 155 |  | Šulgi A (in sumer-01) |
| sumer-10 | **Iddin-Dagan A**, the sacred-marriage hymn to Inana as the evening star (2.5.3.1) | Sumerian (Isin) | c. 1970 BCE | Isin | OB | A | 241 lines (m) | good: 2 broken (1%) | ETCSL c./t. 2.5.3.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 5 | 3 |  |  |  |  |
| sumer-11 | **The city laments for Nibru and Eridug** (2.2.4, 2.2.6) | Sumerian (Emesal passages) | c. 2000–1950 BCE (after the fall of Ur; Nibru under Išme-Dagan) | Isin | OB | A | 517 lines (m) | good: 38 broken (7%; Nibru 1%, Eridug 18%) | ETCSL c./t. 2.2.4, 2.2.6, CC BY-NC-SA 3.0, verified 2026-11-02 (t.2.2.4) | high | 5 | 4 | 3 | 5 | 1 |  | Nibru 326, Eridug 191 |  | `קינות-על-ערים/`: with Ur (done) and Sumer and Urim (Round 6), four of the five city laments (Unug: too broken) |
| sumer-12 | **The Death of Ur-Namma** (Ur-Namma A), the king's journey to the netherworld (2.4.1.1) | Sumerian | c. 2095 BCE | Ur III–OB | OB (Nippur, Susa) | A | 396 lines (m) | fair: 74 broken (19%); 26 lines in gaps | ETCSL c./t. 2.4.1.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 5 | 2 |  | segments A–D |  | `העולם-התחתון/` (the netherworld corpus) |
| sumer-13 | **The Dumuzid cycle completed**: Dumuzid and Ĝeštin-ana (1.4.1.1) and Inana and Bilulu, an ulila (1.4.4) | Sumerian (Emesal in Bilulu) | Ur III–OB | OB | OB | A | 210 lines (m) | good–fair: 19 broken (9%); 40 lines in gaps (Bilulu) | ETCSL c./t. 1.4.1.1, 1.4.4, CC BY-NC-SA 3.0, verified 2026-11-02 (t.1.4.1.1) | high | 5 | 4 | 3 | 5 | 1 |  | Ĝeštin-ana 73, Bilulu 137 |  | `העולם-התחתון/`: Inana's Descent (done), Dumuzid's Dream (Round 6) |
| sumer-14 | **The Sumerian letters, the rest of ETCSL**: the Royal Correspondence of Ur (21 letters, 3.1.*), the Isin–Larsa royal letters (3.2.*) and the nine remaining letter-prayers and petitions (3.3.02–05, 09, 21, 22, 27, 39) | Sumerian (OB school collection) | Ur III (claimed: 2090–2004 BCE) to OB | OB | OB c. 1800 (Nippur, Ur) | D (school versions of royal letters; authenticity debated) | 1,017 lines in 35 letters (m) | fair: 139 broken (14%); 24 lines in gaps | ETCSL c./t. 3.1–3.3, CC BY-NC-SA 3.0, verified 2026-11-02 (t.3.1.01) | high | 5 | 3 | 3 | 3 | 1 |  | RCU 691, Isin–Larsa 113, letter-prayers 213 |  | `קולות-היום-יום/3-מכתבים/` (Lu-diĝira + 8 letters) |
| sumer-15 | **The Sumerian King List, whole** (2.1.1), optionally with the Rulers of Lagaš (2.1.2) | Sumerian | c. 2100 BCE (Ur III list), edited in Isin | Ur III–OB | Ur III (the USKL) / OB | D (recensions differ) | 435 lines (m; 47 done); + 155 | good: 19 broken (4%); Lagaš fair–poor (22%) | ETCSL c./t. 2.1.1, 2.1.2, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 3 | 4 | 3 | 2 |  | SKL 435; Rulers of Lagaš 155 (c. 49 done) |  | `סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/` (excerpt SKL 1–47; Lagaš 1–31, 99–124) |
| sumer-16 | **The Tetrad**, the introductory school set: Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A (2.5.5.2, 2.5.3.2, 2.5.8.1, 4.16.1) | Sumerian (Isin royal hymns, a hymn to the goddess of writing) | c. 1970–1850 BCE | Isin | OB (often on one tablet or prism) | A | 379 lines (m) | good: 7 broken (2%) | ETCSL c./t., CC BY-NC-SA 3.0, verified 2026-11-02 (t.2.5.5.2) | high | 5 | 5 | 4 | 3 | 2 |  | Lipit-Eštar B 63, Iddin-Dagan B 79, Enlil-bāni A 171, Nisaba A 66 |  | sumer-01 (the curriculum) |
| sumer-17 | **The two elegies of Lu-diĝira**, for his father Nannaya and his wife Nawirtum (5.5.2, 5.5.3; one Pushkin Museum tablet) | Sumerian | OB c. 1800 BCE | OB | OB (the tablet itself) | A | 178 lines (m) | fair: 28 broken (16%; Nannaya 23%) | ETCSL c./t. 5.5.2, 5.5.3, CC BY-NC-SA 3.0, verified 2026-11-02 (t.5.5.2) | high | 5 | 5 | 1 | 5 | 3 |  | Nannaya 112, Nawirtum 66 |  | `קולות-היום-יום/3-מכתבים/` (the Message of Lu-diĝira) |
| sumer-18 | **A Man and his God**, the Sumerian righteous sufferer (5.2.4) | Sumerian | OB | OB | OB (Nippur) | A | 141 lines (m) | fair: 28 broken (20%) | ETCSL c./t. 5.2.4, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 5 | 2 |  |  |  | `ספרות-החכמה-והצדיק-הסובל/` (Ludlul, the Theodicy) |
| sumer-19 | **Gudea's statue inscriptions**, Statues A–Z (RIME 3/1.1.7.St*) | Sumerian (Lagaš II) | c. 2125 BCE | the same (diorite statues) | c. 2125 BCE (the statues, Louvre) | A | 1,326 case lines / 2,391 words in 24 inscriptions (m) | good: 49 bracketed case lines (4%) | CDLI composites P431883–P431908 with ETCSRI's English, CDLI terms, verified 2026-11-02 | medium–high | 5 | 5 | 3 | 3 | 1 |  | B 365, E 183, G 107, D 80, F 71, L 70, C 65 + 17 short | | `בניין-המקדש/1` (the Cylinders) |
| sumer-20 | **Inana and Šu-kale-tuda**, the gardener who violated the goddess (1.3.3) | Sumerian | OB | OB | OB | A | 298 lines (m) | fair: 66 broken (22%); 12 lines in gaps | ETCSL c./t. 1.3.3, CC BY-NC-SA 3.0, verified 2026-11-02 (local; t-file from the same site) | high | 5 | 4 | 2 | 5 | 2 |  |  |  |  |
| sumer-21 | **Nanna-Suen's Journey to Nibru** (1.5.1) | Sumerian | Ur III | OB | OB | A | 328 lines (m) | fair: 70 broken (21%); 34 lines in gaps | ETCSL c./t. 1.5.1, CC BY-NC-SA 3.0, verified 2026-11-02 | high | 5 | 4 | 3 | 4 | 2 |  | optionally Pabilsaĝ's Journey (1.7.8, 82) and Ninurta B (4.27.02, 96) |  | sumer-01 (Enki's Journey: the same genre) |
| sumer-22 | **Proverb collections 4, 5, 8, 13** (6.1.04, .05, .08, .13; 5 holds the animal fables) | Sumerian | OB | OB | OB (Nippur) | A | 531 lines (m) | fair: 69 broken (13%); 40 lines in gaps | ETCSL c./t. 6.1.*, CC BY-NC-SA 3.0, verified 2026-11-02 (local) | high | 5 | 4 | 3 | 4 | 1 |  | 4: 66, 5: 240, 8: 120, 13: 105 |  | `קולות-היום-יום/2-משלים-שומריים/` (collections 1–3) |
| sumer-23 | **The Heron and the Turtle and the Home of the Fish** (5.9.2, 5.9.1) | Sumerian | OB | OB | OB | A | 326 lines (m) | fair: 42 broken (13%); 50 lines in gaps | ETCSL c./t. 5.9.2, 5.9.1, CC BY-NC-SA 3.0, verified 2026-11-02 (local) | high | 5 | 4 | 2 | 3 | 2 |  | Heron 198, Fish 128 |  | the debate poems of `סיפורי-הבריאה-המסופוטמיים/` |
| sumer-24 | **The Marriage of Martu** (1.7.1) | Sumerian | OB (the Amorites) | OB | OB | A | 135 lines (m) | fair: 22 broken (16%); 8 lines in gaps | ETCSL c./t. 1.7.1, CC BY-NC-SA 3.0, verified 2026-11-02 (local) | high | 5 | 4 | 2 | 4 | 2 |  |  |  |  |
| sumer-25 | **Udug-ḫul**, the canonical Sumerian–Akkadian exorcism series (16 tablets) | Sumerian, Akkadian interlinear | OB forerunners (c. 1800 BCE) | OB forerunners; canon 1st millennium | OB | D (canonised and translated into Akkadian) | c. 2,500 lines (r) | fair (r) | Geller 2016, BAM 8 (open to read on OAPEN; "all rights reserved"), NOT verified (OAPEN bot check, 403) | medium | 5 | 3 | 5 | 4 | 3 |  | 16 tablets |  | `כשפים-ולחשים/` (Maqlû); shared with the akkad region |

### sumer-01 – the Decad (eight texts)
What every Babylonian scribe learned by heart after the elementary course, c. 1800 BCE: king (Šulgi A, Lipit-Eštar A),
goddess (Inana B, Enheduana's great hymn: the goddess exalted above An), god and temple (Enlil A, the Keš hymn – also the
oldest literary text with a long afterlife, ED witnesses c. 2600 BCE), Enki building his temple and travelling to Enlil,
Inana destroying the mountain that would not bow (Inana and Ebiḫ, also Enheduana's), and the prison-goddess who judges
the guilty and frees the innocent (Nungal A). Read together, it is the Sumerians' own answer to "what must one know":
the cosmos as temples, the king between gods and men, the terrible Inana, justice. **Base:** ETCSL c- and t-files
(lemmatised; the English line-grouped). **Tools:** `sumerian_workbench.py lemmas | conc` (after restoring the ETCSL
bulk), a new corpus tool of the `lament_tools.py` kind (the Song of the Hoe's renderings to be reused; Bilgameš and
Ḫuwawa A from Round 6 joined by a pointer). **Risks:** the hymnic vocabulary (epithets, temple names) is dense; Inana B is
famously hard; no ePSD2 morphology. A run: one corpus (a new "hymns" corpus, or a "Decad" project), about 1,150 lines,
one coordinator. The **sources** need `sources/ETCSL/<no>--…/` folders like the existing ones.

### sumer-02 – Lugal-e and Angim
Ninurta defeats Asag and the stone warriors and then fixes the fate of each stone, blessing or cursing it. The poem
explains the mountains, the rivers and the Tigris flood as the order a young god made out of chaos. Angim is his return
to Nibru in triumph. Both were copied for two thousand years, in the 1st millennium with an Akkadian translation
between the lines. Few texts show better what the Sumerians thought a cosmos-founding victory was. **Base:** ETCSL
(Sumerian only; the bilingual recension is in Van Dijk 1983 and Cooper 1978, ©, records only). **Tools:** ETCSL lemmas,
`sumerian_workbench.py conc` (the stone formulas). **Risks:** the long stone catalogue in Lugal-e (its second half) needs one
fixed rendering per stone, made in advance (a renderings table). A run: one coordinator, 920 lines.

### sumer-03 – Enheduana: Inana C and the Temple Hymns
The first author in history known by name. Inana C is a 274-line litany of Inana's power to overturn: the man made woman,
the woman made man, laments into songs. The Temple Hymns are 42 short hymns, each addressing one temple as a living
being, closed by the colophon "the compiler of the tablet is Enheduana". Together with sumer-01's Inana B and Ebiḫ they
are her whole corpus. The Temple Hymns count as one whole (one cycle, one colophon). **Base:** ETCSL. **Risks:**
temple names and epithets (one name table for the Temple Hymns and Gudea); the attribution is ancient but debated.
Translate it as the tradition gives it and say so.

### sumer-04 – Enlil and Ninlil; Enlil and Sud
Two answers to how Nippur's chief god got his wife. In one he takes the girl by the canal, is banished to the
netherworld, and fathers the moon and three underworld gods on the way. In the other he courts her through a
go-between, with bride-gifts. Between them they hold Sumerian marriage, sexual crime and divine punishment.
**Base:** ETCSL. Enlil and Ninlil is excellent (3% broken); Sud is fair (12%; its MA and NA bilingual copies are not in
ETCSL). A short run (347 lines), or a companion of sumer-01 (Enlil A).

### sumer-05 – the Dumuzid–Inana songs
The world's oldest love songs in dialogue: the girl's mother, the lettuce, the bed, the "honey-man", the shepherd and
the farmer. They are the Sumerian base under the sacred marriage, and the counterpart of the Akkadian lyrics already
translated. **Base:** ETCSL 4.08 (27 items). Many are in Emesal, which ETCSL lemmatises to main-dialect lemmas: an
Emesal table is needed (the lament corpus has one start). **Risks:** short songs damaged at the edges (16% broken in all).
The weakest (M 16 lines, 62% broken; V; F1) may be left out with a note, not silently. One run, 1,247 lines, possibly with
sumer-10.

### sumer-06 – Nanše A and Ḫendursaĝa A
Nanše of Lagaš inspects the people on New Year's Day: the orphan, the widow, the false
weight and the short measure. Ḫendursaĝa, her herald, keeps the rules of the household and the street. This is
Sumerian ethics stated as the gods' audit, from Gudea's state. **Base:** ETCSL. Nanše A is good (2% broken),
Ḫendursaĝa A fair (11%; 65 lines in gaps). Fits `בניין-המקדש/` (the same city, gods and names) or a hymns corpus.

### sumer-07 – the Pre-Sargonic Lagaš inscriptions
Enmetena's cone tells the oldest war history: the border Mesalim drew, Umma's breach, the battle, the oath. In his
reforms (c. 2350 BCE) Uru-inimgina "made a compact with Ninĝirsu that the powerful would not wrong the orphan and the
widow". His lament (the last Lagaš inscription) blames Umma's ruler, whose sin his goddess must carry. All are
contemporary artifacts, about 600 years before the OB copies of the literary canon. **Base:** CDLI composites, ATF
with ETCSRI's English per line (cdli.earth, allowlisted; terms: free re-use with attribution). **Tools:** a CDLI ATF
converter (the laws corpus parses CDLI composites: `laws_config.py`). **Risks:** Early Dynastic orthography (unwritten
verbal prefixes, sign order) and no ETCSRI morphology (ORACC unreachable). Readability medium. The Stele of the Vultures
is too broken to stand alone: it is optional. The public-domain Thureau-Dangin 1905/1907 (`sources/Thureau-Dangin-1905-1907…`
is already held for Gudea) gives a second, old reading.

### sumer-08 – Inana and Enki
Inana drinks with Enki in Eridu, he gives her the *me* (the hundred-odd powers and arts of civilisation, listed), and she
carries them by boat to Uruk past his monsters. It is the Sumerians' own list of what culture is. **Base:** ETCSL (mostly
one tablet). **Risks:** fair to poor – 24% of the lines broken and c. 237 lines lost in ten gaps. The *me* lists repeat,
which lets some restorations be checked. Rank it below the intact texts. Under the wholeness rule it is borderline but
admissible: the central myth survives.

### sumer-09 – the Šulgi hymns (B, C, D, E, X)
The king in his own voice: he runs from Nibru to Urim in a day, reads omens, speaks the foreign tongues, masters the
scribal art, and is married to Inana (X). This is royal ideology and the early ideal of the educated king. Šulgi A is
in sumer-01. **Base:** ETCSL. B, E and X are good; C and D fair (D loses 135 lines). The 15 short hymns (867 lines) are
mostly damaged: optional. A run of 1,276 lines; the Šulgi name table is shared with the Royal Correspondence of Ur
(sumer-14).

### sumer-10 – Iddin-Dagan A
Inana as the evening star surveys the "black-headed people" and their sacrifices. Then the New Year rite: the bed is
prepared and the king lies with the goddess. It is the one clear description of the sacred marriage, in a perfect
text (1% broken). **Base:** ETCSL. A short run, or with sumer-05.

### sumer-11 – the Laments for Nibru and Eridug
The rest of the city-lament genre whose two great members are done or planned. Nibru (326 lines, 1% broken) ends in
restoration under Išme-Dagan. Eridug (191, fair) mourns Enki's city. **Base:** ETCSL; `lament_tools.py` (a PROJECTS
entry each, its FORMULAS and Emesal refrains reused). The Lament for Unug (24% broken, c. 301 lines lost) is excluded.

### sumer-12 – the Death of Ur-Namma
The founder of Ur dies in battle, is buried, gives gifts to the seven gods of the netherworld, and laments from below that
he cannot finish his house or see his wife. It is the only Sumerian account of a king's own descent, and an inner view of
death. **Base:** ETCSL (four segments; 19% broken). `netherworld_tools.py` (a new key, like GEN).

### sumer-13 – Dumuzid and Ĝeštin-ana; Inana and Bilulu
Two short pieces that end the Dumuzid story the folder is translating. In one the demons hunt Dumuzid while his sister
refuses to give him up. In the other Inana avenges him on the old woman Bilulu. Neither is a candidate alone (73 and
137 lines). Together, as the end of a cycle whose large parts are done, they are. **Base:** ETCSL. Joined to the Round
6 Dumuzid's Dream project, as its tail or as companions.

### sumer-14 – the Sumerian letters
The Royal Correspondence of Ur is the school's collection of letters between Šulgi, his generals and the last kings of Ur:
the Amorite wall, grain prices, Išbi-Erra's treason. With them go the Isin–Larsa letters and the remaining letter-prayers
to gods. Here the empire's collapse speaks in the first person. **Base:** ETCSL (Michalowski 2011, the standard
edition, is ©, records only). **Risks:** the letters' authenticity is debated (D). Many are short, so they belong as one
collection. `kol_tools.py` (new units).

### sumer-15 – the Sumerian King List, whole
"After kingship had descended from heaven": the list that made one kingship pass from city to city. 47 lines are done in
the flood references, so this completes the text. **Base:** ETCSL (4% broken). C4 is middling: a list, but the list is
the Sumerian philosophy of history. The Rulers of Lagaš (its parody-like rival, 22% broken) is optional. The Victory of
Utu-ḫeĝal (2.1.6, 62 lines, good) could follow it as an appendix. The flood references' excerpt is kept identical by
script (guidelines §1).

### sumer-16 – the Tetrad
Four short, intact hymns that began the literary course: two Isin kings, Enlil-bāni and Nisaba, the goddess of writing
and the scribe's patron. Of value as the curriculum's threshold, and for Nisaba. Best paired with sumer-01 in one run.

### sumer-17 – the elegies of Lu-diĝira
A son is told his father is dying and mourns him. A husband mourns his wife, and wishes her a good place among the
dead. It is a private voice of grief from c. 1800 BCE, on one tablet, by the same Lu-diĝira whose message to his
mother is done. A chance document (C3 1), but one of the few unguarded voices about death in the corpus.

### sumer-18 – A Man and his God
A young man's god has turned from him; he lists his suffering, confesses that "never was a sinless child born to its
mother", and is restored. It is the oldest form of the righteous-sufferer theme, beside Ludlul and the Theodicy (done).
Fair (20% broken).

### sumer-19 – Gudea's statues
Twenty-four statue inscriptions of the builder of the Eninnu. Statue B (365 case lines, intact) retells the building
and the purity rules of the city, and curses whoever removes the statue. These are contemporary artifacts. The set
completes Gudea beside the Cylinders. **Base:** CDLI composites with ETCSRI's English; `temple_tools.py` (a new key).
C5 is low (well covered by the Cylinders).

### sumer-20 – Inana and Šu-kale-tuda
A gardener violates the sleeping goddess. She fills the land's wells with blood and hunts him down. This is Inana's rage and sexual crime, unguarded. Fair (22%); few copies.

### sumer-21 – Nanna-Suen's Journey to Nibru
The moon god loads a boat with gifts, sails from Ur past the cities of Sumer to Enlil, and gets the blessing of
fertility for Ur. It is the "journey" genre, of which the Decad holds Enki's. Fair (21%). Optional companions: Pabilsaĝ's
Journey and Ninurta B.

### sumer-22 – proverb collections 4, 5, 8 and 13
The better-preserved collections beyond 1–3. Collection 5 is the animal one (the fox, the dog, the lion), which brings
fable into the folder's Sumerian. They complete the proverb project further. The rest (7, 9, 11–28, 6.2) are
30–60% broken: excluded.

### sumer-23 – the Heron and the Turtle; the Home of the Fish
A fable-debate (the turtle wrecks the heron's nest, Enki judges) and a lure-song inviting the fish into a house.
Humour and the natural world. Fair.

### sumer-24 – the Marriage of Martu
The Amorite god wants a city wife. Her friend warns her of him: he eats raw meat, has no house, is not buried when he
dies. It is the Sumerian view of the nomad, and her answer: "I will marry Martu". Fair (16%), short but whole.

### sumer-25 – Udug-ḫul
The canonical series against evil demons. Its Sumerian goes back to OB forerunners and it was copied in the
exorcists' canon for a millennium: demons, sickness, Asalluḫi and Enki's dialogue. **Base:** Geller 2016 (OAPEN, open to
read; not verified today: OAPEN's "Anubis" check refuses scripts, so a person must save the PDF, as for Mittermayer 2019).
Size reported, not measured. It belongs as much to the akkad region, so the lead should merge the two entries. The
risk is the base: a PDF transliteration, © (like eBL), without lemmas.

## Excluded
- Inana and An (1.3.5, 108 lines): 26% broken, 40 lines lost – too damaged.
- Dumuzid and his Sisters (1.4.1.3, 97): 37% broken, 133 lines lost.
- The Debate between Copper and Silver (5.3.6, 320): 27% broken plus ten gaps of unknown size.
- The Lament for Unug (2.2.5, 259): 24% broken and c. 301 lines lost.
- Inana and Gudam (1.3.4, 48), Ninurta and the Turtle (1.6.3, 68), How Grain Came to Sumer (1.7.6, 32), the Šumunda Grass
  (1.7.7, 61), the History of the Tummal (2.1.3, 34), Date Palm and Tamarisk (5.3.7, Sumerian 19 lines): too short.
- Ninĝišzida's Journey to the Netherworld (1.7.3, 96): short; at most a companion of sumer-12.
- Sargon and Ur-Zababa (2.1.4, 82; good): short. At most an appendix of the Sargon Birth Legend (`אגדות-מלכים/2`).
- The Victory of Utu-ḫeĝal (2.1.6, 62): short. At most an appendix of sumer-15.
- The Poem of Early Rulers (5.2.5, 16): already translated whole (its whole preserved composite, ll. 6–21) in the flood references.
- The minor Šulgi hymns (2.4.2.07–b), the Ur-Namma hymns C–I, Šu-Suen, Ibbi-Suen, Ḫammurabi and Samsu-iluna hymns, and
  the short Nanna and Inana hymns: short (mostly < 70 lines) and/or 20–70% broken. Only as optional members of sumer-09.
- Išme-Dagan A + V (2.5.4.01, 474): royal praise, 13% broken plus c. 69 lines lost; a lesser royal hymn after sumer-09/16.
- Inana D (4.07.4, 195): 21% broken; a lesser Inana hymn after sumer-01/03.
- Nanše C, Nanše and the Birds (4.14.3, 127): 20% broken; Bau A (4.02.1): 27%; Šul-pa-e A, Nuska A, Ninurta G: damaged or minor.
- Proverb collections 7, 9, 11, 12, 14–28 and the 6.2 proverbs (Nibru, Urim, unknown provenance): 30–60% broken.
- The OB literary catalogues (0.1–0.2): lists of incipits, not texts. They were used to identify the Decad.
- The Eduba (school) compositions A, B, D, E, the dialogues and the diatribes (except 5.4.11–12, 33–35 lines): **not in ETCSL**
  (only Eduba C, 77 lines, short). They need ORACC/ePSD2 or a modern edition (Volk, Civil, Vanstiphout; ©).
- The Instructions of Ur-Ninurta and the Sumerian Counsels of Wisdom: not in ETCSL; Alster 2005 is ©; no open base reachable.
- Tree and Reed, Ewe and Wheat (the debates outside ETCSL): Mittermayer 2019 (UAVA 15, OA CC BY-NC-ND) is behind OAPEN's bot
  check – a person must save it, then re-assess.
- The Emesal canonical liturgies (balaĝ, eršemma, eršaḫuĝa) and the Uruk lamentations: no open composite (Cohen 1988 CLAM,
  Gabbay 2014–15, Maul 1988 are ©). The ePSD2 corpus is on ORACC, unreachable. CDLI has single tablets only.
- The Zame hymns and the other Abū Ṣalābīḫ literary tablets (c. 2600 BCE): UD.GAL.NUN orthography, readable only with low
  confidence; no open composite with translation (Biggs 1974 OIP 99, Krebernik 1998 ©).
- The Barton Cylinder (CDLI P222183, ED IIIb myth, 268 case lines): 33% bracketed, obscure ED literary language.
- The Stele of the Vultures alone (CDLI P431075): poor; only as an optional part of sumer-07.
- ETCSRI's other royal inscriptions (Ur III, Isin–Larsa building texts): formulaic, little inner world; not needed beyond sumer-07 and 19.
- Already translated or planned (STATUS §3, Rounds 6–7) and so not candidates: the Flood Story, Enki and Ninḫursaĝa,
  Enki and Ninmaḫ, the Song of the Hoe, the five debates done, Enki and the World Order, the Farmer's Instructions, the Lament
  for Ur, the Curse of Agade, the Gudea Cylinders, Inana's Descent, Bilgameš Enkidu and the Netherworld, Enmerkar and Aratta,
  Šuruppag, proverbs 1–3, Lu-diĝira and eight letters; the Bilgameš poems, Lugalbanda I–II, Enmerkar and En-suḫgir-ana, the
  Lament for Sumer and Urim, Dumuzid's Dream (Round 6).

## New languages
No new language: every candidate is Sumerian, which the folder reads (eleven projects so far). Three set-ups are new,
though:
- **Emesal** (sumer-05, 11, 13): ETCSL lemmatises Emesal forms to their main-dialect lemmas, and the lament corpus has an
  Emesal start. A run needs an Emesal ↔ Emegir table (*mu-* for *ĝeš-*, *ga-ša-an* for *nin*, *umun* for *en* …)
  in its brief. Claude's confidence: medium-high.
- **Early Dynastic orthography** (sumer-07; Gudea for sumer-19 is close to OB): CDLI ATF (ASCII *sz*, *s,*, `{d}`), case lines,
  unwritten prefixes. Needs a CDLI-ATF converter (adapt `laws_config.py`'s parser or `cdl2md.py`) and a brief on ED spelling.
  Confidence: medium, with ETCSRI's English line by line as the rank-3 control.
- **No morphology in this cloud**: the ePSD2 zip (ORACC) cannot be restored here, so `sumerian_workbench.py morph | line |
  gloss` do not run. ETCSL's lemmas and labels (`lemmas`, `conc`) work once the ETCSL bulk is restored from llds. Earlier
  Sumerian runs used ORACC morph where it existed. For these texts the translators would write "our analysis"
  throughout. Recommended: restore `sources/ORACC/_bulk/epsd2-literary.zip` in a session where ORACC answers (a local
  session), before the Sumerian runs.

## Hosts
- `etcsl.orinst.ox.ac.uk` – **not in `domains.txt`; reachable today (200)**: the live ETCSL (transliteration and translation pages,
  the catalogue). Optional – the OTA zip on `llds.ling-phil.ox.ac.uk` (allowlisted) has the same c- and t-files – but useful for
  checks and the bibliography pages.
- `oracc.museum.upenn.edu` – in `domains.txt` but **failing TLS from this cloud session** (curl exit 60): ePSD2 (morphology,
  glossary), ETCSRI (morphology of sumer-07 and 19), any Emesal liturgy. Not counted on.
- `library.oapen.org` – in `domains.txt` but answers scripts with a bot check (403, "Anubis"): Geller 2016 (sumer-25),
  Mittermayer 2019. A person must download them.
- `cdli.earth`, `llds.ling-phil.ox.ac.uk` – allowlisted and working today: CDLI composites (sumer-07, 19, the Keš ED witnesses)
  and the ETCSL zip.

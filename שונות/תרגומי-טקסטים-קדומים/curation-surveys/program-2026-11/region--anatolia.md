# Region survey – anatolia (2026-11-02)

Hittite, Hurrian, Luwian (cuneiform and hieroglyphic), Palaic, Urartian; Lydian, Lycian, Phrygian checked.
Measured today from **TLHdig 0.3** (the Zenodo zip, md5 `f9acbc8d…` = the manifest; 830 CTH folders counted by script) and
from the **HPM edition indexes** (`hethport.net`: prayers `txhet_gebet`, myths `txhet_myth`, incantation rituals
`txhet_besrit`, treaties `txhet_svh`, edicts `txhet_ke`, festivals `txhet_festrit`, divination `txhet_hdivt`, Hittite-Luwian
`txhet_heluwt`; 1,134 editions listed). For 360 editions the translatio page was fetched and its **clauses counted**. The
HPM clause is the unit the folder's Hittite keys already use: Telipinu 1 = 267 clauses = the TE key's 267 lines.
"Damaged" means two things. For an HPM edition it is the share of clauses whose translation is ≥ 50 % inside [ ]. For
TLHdig it is the share of manuscript lines with ≥ 50 % of their letters inside [ ].
Scratch: `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/anatolia/`
(`cthcounts.tsv`, `trcounts.tsv`, `dl/hpm/editions.tsv`, `dl/ediana/hl_list.tsv`, `scripts/`).

## Key findings
- **What the Hittites themselves treasured, and the folder lacks: the prayers** (`arkuwar`, a plea before the gods). They
  are the deepest Hittite window on sin, inherited guilt, illness and death, and they are all on HPM in clause-numbered
  critical editions (Rieken et al., CC BY-SA). Muršili II's prayers come to 977 clauses (≈ 13 % damaged). The Middle
  Hittite prayers to the Sun-deities, Kantuzili's among them, come to 784. The late royal prayers (Muwatalli, Ḫattušili
  and Puduḫepa) come to 878. Three runs, ≈ 2,640 clauses.
- **Royal self-presentation is the second unfilled pillar.** It covers the Old Kingdom texts (Anitta, Ḫattušili I's
  Testament and Annals, the Palace Chronicle), the Proclamation of Telipinu, the Apology of Ḫattušili III and Muršili's
  Ten-Year Annals. HPM has **no historical-texts edition** (its link returns 404). These need TLHdig composites, as Zalpa
  and HL2 had: the Apology's main tablet KUB 1.1+ has 328 lines, 5 % broken; the Ten-Year Annals' KBo 3.4+ has 292 lines,
  5 % broken.
- **Treaties are on HPM** (Wilhelm, Fuscagni), Akkadian and Hittite: Šattiwaza, Šunaššura, Ḫuqqana, Tuppi-Teššub,
  Manapa-Tarḫunta and Šaušgamuwa. The Bronze Tablet is in TLHdig: 353 lines, 0 % broken, the best-preserved Hittite text.
- **Completions within the folder's own Hittite projects are cheap**, because the HPM editions are fetched with
  `hpm2md.py` and read by `hittite_tools.py`:
  - the rest of the Kumarbi cycle: LAMMA and Silver, 416 clauses;
  - the vanishing-god myths beside Telipinu: the Sun-god, CTH 323.1, 211 clauses, only 7 % damaged;
  - the Hurrian-milieu tales beside Appu: the Sun-god and the Cow, Kešši, Gurparanzaḫ, 498 clauses;
  - more sending-away rituals beside Ašḫella: Zarpiya, and Ambazzi's second ritual against slander, 440 clauses;
  - the Hittite Gilgameš, 611 clauses, a companion of the Gilgameš corpus.
- **The great rituals of the inner world** are also on HPM:
  - the royal funerary ritual *šalliš waštaiš*: 4 day-editions, 741 clauses, 23 % damaged, days 3–7 lost;
  - the Journey of the Soul to the netherworld;
  - the "Old Women's" rituals (Maštigga, Paškuwatti, Alli: 1,057 clauses, 6 %);
  - the Kizzuwatna birth and purification rites (Papanikri: 209 clauses, 0 %);
  - the Old Script rituals for the royal couple (CTH 416, contemporary Old Hittite tablets).
- **Festivals are LARGE and lacunose.** The *nuntarriyašḫa* edition (HPM, Kryszeń) has no text at all for 22 of its 39
  day-units. KI.LAM is 6,339 manuscript lines with 27 % broken lines. AN.TAḪ.ŠUM and *ḫišuwa* are larger still. Only
  KI.LAM is listed, as a `LARGE` decision for the lead.
- **Hieroglyphic Luwian is reachable and glossed:** the **eDiAna remake** (`www.ediana-remake.gwi.uni-muenchen.de`, LMU,
  "under CC license") has 287 HLuw texts (12,012 words), each word glossed by morpheme. That includes Karatepe 1 (73 §§
  in the Hu version) and Çineköy. **ACLT** answers over HTTP, but its results page fails ("TRANSFORMATION LOADING
  ERROR"), so it is no base.
- **Urartian is not verified.** eCUT (ORACC, CC BY-SA; lemmatised, with English) is the only base, and ORACC fails TLS
  from this cloud (curl 60, also with the proxy CA bundle). Even with it, the readability is low.
- **Not readable, and so not candidates:** Hurrian (all monolingual texts), Hattic, Palaic, the Luwian songs and
  incantations, Lydian, Lycian, Carian and Phrygian. Their corpora are small, or poorly understood, or both (eDiAna: Lycian
  5,238 words in 187 texts, Lydian 1,680 words).

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| anatolia-01 | The prayers of Muršili II: the Plague Prayers (CTH 378.1–8, 379), the hymn-prayers to the Sun-goddess of Arinna (376.1–4) and to Telipinu (377), the prayer for Gaššuliyawiya (380) | Hittite (NH) | c. 1320–1300 BCE | c. 1320–1300 BCE | 14th–13th-c. NS tablets (KUB 14.8, 14.14+, 24.3+) | A | 977 clauses (m) (17 HPM editions; TLHdig 378 = 773 ms lines in 14 mss) | good–fair (≈ 13 % of clauses damaged; 378.2 7 %) | HPM "Hymnen und Gebete" (Rieken et al.), hethport.net/txhet_gebet, CC BY-SA 4.0 + TLHdig 0.3 (CC BY 4.0), verified 2026-11-02 | high | 4 | 5 | 4 | 5 | 3 |  |  |  |  |
| anatolia-02 | The Middle Hittite prayers to the Sun-deities: to the Sun-goddess of the Earth (371), Hymn and prayer to the Sun-god (372), Kantuzili (373), a king's prayer (374), Arnuwanda I and Ašmunikal on the Kaška (375.1–17) | Hittite (MH) | c. 1450–1380 BCE | c. 1400 BCE | MS tablets (KUB 30.10, KUB 17.21+) | A | 784 clauses (m) (22 editions; 375's 16 small duplicates = 165) | fair (≈ 15 %; Kantuzili 5 %) | HPM txhet_gebet, CC BY-SA 4.0; TLHdig, verified 2026-11-02 | high | 4 | 5 | 4 | 5 | 3 |  |  |  |  |
| anatolia-03 | The later royal prayers: Muwatalli II to the assembly of gods (381) and to the Storm-god of Kummanni (382), Ḫattušili III and Puduḫepa (383), Puduḫepa to the Sun-goddess of Arinna (384), Muršili III / Urḫi-Teššub (387.1) | Hittite (NH) | c. 1295–1240 BCE | same | contemporary NS tablets (KUB 6.46, KUB 21.27+) | A | 878 clauses (m) (8 editions) | good–fair (≈ 10 %; 381 0 %) | HPM txhet_gebet, CC BY-SA 4.0; TLHdig, verified 2026-11-02 | high | 4 | 5 | 3 | 4 | 2 |  |  |  |  |
| anatolia-04 | The Apology of Ḫattušili III (CTH 81) | Hittite (NH) | c. 1267–1240 BCE | same | contemporary NS copies (KUB 1.1+) | A | ≈ 330 lines (r); TLHdig 1,106 ms lines in 19 mss, KUB 1.1+ = 328 (m) | good (5 % of ms lines broken) | TLHdig 0.3, CTH 81 (no HPM edition: our composite), CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 4 | 4 | 3 |  |  |  |  |
| anatolia-05 | The Proclamation (Edict) of Telipinu (CTH 19), Hittite with the Akkadian version's fragments | Hittite (late OH) + Akkadian | c. 1525–1500 BCE | c. 1500 BCE | NS copies (KBo 3.1 in KBo 12.7+) | D | ≈ 250 lines (r); TLHdig 648 ms lines (495 Hit + 153 Akk) in 10 mss, main 208 (m) | good–fair (14 %) | TLHdig 0.3, CTH 19 (our composite), verified 2026-11-02 | high | 5 | 4 | 4 | 4 | 3 |  |  |  |  |
| anatolia-06 | The Old Kingdom texts: Anitta (CTH 1), the Testament of Ḫattušili I (CTH 6, Akkadian–Hittite bilingual), the Annals of Ḫattušili I (CTH 4, bilingual), the Palace Chronicle (CTH 8) | Hittite (OH) + Akkadian | c. 1750 (Anitta) – 1550 BCE | 17th–16th c. BCE | OS tablet KBo 3.22 (Anitta, 16th c.); the others NS copies | A (Anitta) / D | ≈ 500 lines (r); TLHdig 177 + 228 + 338 + 284 = 1,027 ms lines (m) | fair (Anitta 31 % over all mss, KBo 3.22 itself 15 %; CTH 6 11 %; CTH 4 17 %; CTH 8 16 %) | TLHdig 0.3 (our composites), verified 2026-11-02 | high (Akk. columns: high) | 5 | 4 | 4 | 4 | 3 |  |  |  |  |
| anatolia-07 | The Ten-Year Annals of Muršili II (CTH 61.I) | Hittite (NH) | c. 1310 BCE | same | NS (KBo 3.4 + KUB 23.125) | A | ≈ 300 lines (r); the main join = 292 ms lines (m) | good (5 %) | TLHdig 0.3, CTH 61 (our composite), verified 2026-11-02 | high | 4 | 4 | 3 | 3 | 3 |  | the alternative unit, the Comprehensive Annals (61.II): ≈ 2,650 ms lines in 58 mss, 12 % broken (m) |  |  |
| anatolia-08 | Muršili II's own dossier: the indictment of the Tawananna for his wife's death (CTH 70) and the ritual for his lost speech (CTH 486) | Hittite (NH) | c. 1310–1300 BCE | same | NS (KUB 14.4) | A | ≈ 230 lines (r): CTH 70 313 ms lines, main 116 (m); CTH 486 79 clauses (m) | good (CTH 70 7 %; 486 3 %) | TLHdig (CTH 70) + HPM txhet_besrit (CTH 486, Görke), verified 2026-11-02 | high | 4 | 5 | 2 | 4 | 2 |  |  |  |  |
| anatolia-09 | The Deeds of Šuppiluliuma I, written by Muršili II (CTH 40) | Hittite (NH) | c. 1320 BCE | same | NS copies (KBo 5.6 = tablet 7) | D | ≈ 900–1,100 lines (r); TLHdig 1,829 ms lines in 77 mss (m) | fair–poor (18 %; many small fragments; tablet 7 good) | TLHdig 0.3, CTH 40 (HAnn folder; our composite), verified 2026-11-02 | high | 4 | 4 | 3 | 3 | 2 |  |  |  |  |
| anatolia-10 | The Akkadian treaties of Ḫattuša: Šattiwaza of Mittani (CTH 51–52), Šunaššura of Kizzuwatna (CTH 41, with the Hittite version) | Akkadian (Hittite chancery) + Hittite | c. 1400–1340 BCE | same | contemporary tablets (KBo 1.1, KBo 1.5) | A | 1,018 clauses (m) (8 HPM editions) | good–fair (≈ 12 %; 41.I.2 1 %, 51.I 4 %) | HPM txhet_svh (Wilhelm, Fuscagni), CC BY-SA 4.0; TLHdig; Weidner 1923 (archive.org, PD), verified 2026-11-02 | high | 4 | 5 | 3 | 3 | 2 |  |  |  |  |
| anatolia-11 | The Hittite-language vassal treaties: Ḫuqqana of Ḫayaša (42), Tuppi-Teššub of Amurru (62), Manapa-Tarḫunta (69), Šaušgamuwa (105), the Bronze Tablet with Kurunta (106), Alakšandu of Wilusa (76) | Hittite (MH–NH) | c. 1345–1235 BCE | same | contemporary tablets; the Bronze Tablet the original of 1235 BCE | A | ≈ 1,600 lines (m+r): HPM 947 clauses (42, 62, 69, 105) + Bronze Tablet 353 ms lines + CTH 76 main 296 | good–fair (HPM 15 %; Bronze Tablet 0 %; CTH 76 13 %) | HPM txhet_svh, CC BY-SA 4.0 + TLHdig (106, 76), verified 2026-11-02 | high | 4 | 5 | 3 | 3 | 2 |  | the six treaties are separate whole texts: 42 (301), 62 (231), 69 (233), 105 (182), 106 (≈ 350), 76 (≈ 300) |  |  |
| anatolia-12 | The Military Oaths, First and Second (CTH 427–428) | Hittite (MH) | c. 1400 BCE | same | MS (KBo 6.34 in KBo 53.33+) | A | ≈ 350 lines (r); TLHdig 328 + 310 ms lines, main mss 168 + 106 (m) | good–fair (8 % / 18 %) | TLHdig 0.3 (our composite), verified 2026-11-02 | high | 4 | 5 | 3 | 4 | 3 |  |  |  |  |
| anatolia-13 | The royal instructions: the border governor (BĒL MADGALTI, CTH 261), the royal bodyguard (MEŠEDI, 262), the palace servants (265) | Hittite (MH) | c. 1400 BCE | same | MS / NS (IBoT 1.36) | A | ≈ 840 lines (r); TLHdig 978 + 318 + 174 ms lines (m) | fair (16 %; 262 3 %) | TLHdig 0.3 (our composites), verified 2026-11-02 | high | 4 | 5 | 3 | 2 | 2 |  |  |  | `חוקים-ובריתות/9-הוראות-לאנשי-בית-האל` (the instructions genre) |
| anatolia-14 | The royal funerary ritual *šalliš waštaiš* (CTH 450, the surviving days 1–2, 8–9, 10–11, 12–13), with the bone-transfer rites (451) and the Journey of the Soul to the netherworld (457.7) | Hittite (NH, older roots) | 15th–13th c. BCE | NH | NS copies (KUB 30.16+, 30.21+, 39.8+) | D | 879 clauses (m) (HPM: 450 = 741; 451 = 25; 457.7 = 113) | fair–poor (≈ 23 %; days 3–7 lost) | HPM txhet_besrit (Kapełuś, EN; Görke; Fuscagni), CC BY-SA 4.0; TLHdig 2,234 ms lines in 74 mss, verified 2026-11-02 | medium | 4 | 4 | 4 | 5 | 3 |  |  |  | `העולם-התחתון/` (a Hittite netherworld project) |
| anatolia-15 | The "Old Women's" healing rituals: Maštigga against family quarrel (404.1.I–III), Paškuwatti against impotence (406), Alli against sorcery (402), Tunnawiya of the river (409) | Hittite (MH; Luwian milieu) | c. 1450–1350 BCE | same | MS/NS (KBo 2.3+, KUB 7.8+, KUB 7.53+) | D | ≈ 1,330 lines (m+r): HPM 1,057 clauses + Tunnawiya ≈ 270 (TLHdig 1,374 ms lines, main 237) | good (HPM 6 %; 409 11 %) | HPM txhet_besrit (Mouton, FR) + TLHdig (409), verified 2026-11-02 | medium | 4 | 4 | 4 | 4 | 2 |  |  |  | extends `טקסי-שילוח-וטיהור/` |
| anatolia-16 | The Kizzuwatna purification and birth rites: Papanikri (476), Ammiḫatna (471), Ammiḫatna, Tulbi and Mati (472), the birth ritual (477), Kuwanni (474.1) | Hittite with Hurrian / Luwian terms | 15th–14th c. BCE | same | NS (KBo 5.1) | D | 767 clauses (m) | good (≈ 7 %; Papanikri 0 %) | HPM txhet_besrit (Mouton, Strauß, Görke), CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 4 | 3 | 4 | 2 |  |  |  | extends `טקסי-שילוח-וטיהור/` |
| anatolia-17 | The rites of the deep gods and the new temple: the ritual for the primeval / infernal deities (CTH 446) and the expansion of the Goddess of the Night's cult (CTH 481) | Hittite (MH, Kizzuwatna) | 15th–14th c. BCE | same | NS (KBo 10.45+, KUB 29.4+) | D | ≈ 520 lines (r); TLHdig 747 + 517 ms lines, mains 259 + 258 (m) | good (446 8 %; KUB 29.4+ 1 %) | TLHdig 0.3 (our composites), verified 2026-11-02 | medium | 4 | 4 | 3 | 5 | 2 |  |  |  |  |
| anatolia-18 | More sending-away rituals: Zarpiya against plague (757), Ambazzi against slander (429.1), Tapalazunauli against plague (424.1), Uruwanda against slander (411) | Hittite with Luwian incantations | 15th–14th c. BCE | same | NS (KUB 9.31) | D | 440 clauses (m) | good (≈ 7 %) | HPM txhet_besrit (Görke, Christiansen, Fuscagni), CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 4 | 3 | 4 | 1 |  |  |  | `טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים` |
| anatolia-19 | The Old Hittite rituals of kingship: the four rituals for the royal couple (CTH 416, Old Script) and the palace-building ritual (414.1) | Hittite (OH) | c. 1650–1550 BCE | same | OS tablets (KBo 17.1+, 16th c.) | A | 510 clauses (m) | good (≈ 5 %) | HPM txhet_besrit (Montuori, IT; Görke), CC BY-SA 4.0; TLHdig, verified 2026-11-02 | medium | 5 | 5 | 3 | 4 | 3 |  |  |  |  |
| anatolia-20 | The rest of the Kumarbi cycle: the Kingship of LAMMA (343) and the Song of Silver (364) | Hittite rendering of Hurrian songs | 15th–14th c. BCE | 14th–13th c. BCE | NS copies (KBo 51.10, KUB 33.115) | C | 416 clauses (m) (13 editions) | fair (≈ 22 %; LAMMA 8 %, Silver 34 %) | HPM txhet_myth, CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 3 | 4 | 4 | 1 |  |  |  | `מיתוסים-חתיים-וחוריים/2-מחזור-קומרבי` |
| anatolia-21 | The vanishing-god myths beside Telipinu: the Sun-god (323.1), the Storm-god (*mugawar*, 325), the Storm-god in Liḫzina (331.1), Anzili and Zukki (333) | Hittite (OH, Hattic substrate) | c. 1650–1500 BCE | MH copies | MS/NS | D | 677 clauses (m) | fair (≈ 20 %; 323.1 7 %, 331.1 11 %, 325 31 %) | HPM txhet_myth, CC BY-SA 4.0, verified 2026-11-02 | high | 5 | 4 | 4 | 5 | 1 |  |  |  | `מיתוסים-חתיים-וחוריים/5-טליפינו` |
| anatolia-22 | The Hurrian-milieu tales: the Sun-god, the Cow and the Fisherman (363, with the Ištar hymn on the same tablet KUB 24.7), Kešši the hunter (361.I, Hittite version), the Deeds of Gurparanzaḫ (362) | Hittite (from Hurrian tales) | 15th–14th c. BCE | 14th–13th c. BCE | NS | C | 498 clauses (m) (13 editions) | fair–poor (≈ 23 %) | HPM txhet_myth, CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 3 | 2 | 4 | 1 |  |  |  | `מיתוסים-חתיים-וחוריים/4-זלפה-אפו-ואלקונירשה` |
| anatolia-23 | The Hittite Gilgameš (CTH 341.III, the three tablets and fragments) | Hittite adaptation | c. 1400–1300 BCE | same | MS/NS (KBo 10.47c, KBo 6.1+) | D | 611 clauses (m) (19 editions; the Hurrian and Akkadian Boğazköy fragments aside) | fair (≈ 22 %) | HPM txhet_myth, CC BY-SA 4.0, verified 2026-11-02 | medium | 4 | 3 | 3 | 4 | 1 |  |  |  | `אפוס-גילגמש/` (an adaptation beside the SB and OB epic) |
| anatolia-24 | A god's anger and a queen's vows: the oracle inquiry into the deity of Arušna and the king's illness (CTH 566, KUB 22.70) and the dream-vows of the royal couple (CTH 584) | Hittite (NH) | 13th c. BCE | same | contemporary (KUB 22.70, KUB 15.1+) | A | ≈ 550 lines (r): 566 = 154 ms lines (1 ms); 584 = 726 ms lines in 17 mss (m) | good (566 1 %; 584 8 %) | HPM txhet_hdivt (566, Christiansen) + TLHdig (584), verified 2026-11-02 | medium | 4 | 5 | 2 | 4 | 3 |  |  |  |  |
| anatolia-25 | The letters of the Hittite kingdom: the Maşat (Tapikka) letters (CTH 186–190) and the royal correspondence (CTH 151–183: Tawagalawa, Milawata, Puduḫepa to Ramesses) | Hittite + Akkadian | c. 1400–1200 BCE | same | the letters themselves | A | ≈ 7,000 ms lines (m) (186–190 ≈ 4,500; 151–183 ≈ 2,800), mostly single copies | fair (10–15 %) | TLHdig 0.3; HPM txhet_hdivt for some letters, verified 2026-11-02 | medium | 4 | 5 | 1 | 3 | 3 | LARGE | the Maşat letters (≈ 4,500 ms lines; the king's letters to the frontier) · the royal letters (≈ 2,800; Tawagalawa 275, Milawata 92, Puduḫepa's 88) |  |  |
| anatolia-26 | The Karatepe bilingual of Azatiwada (KARATEPE 1, both versions Hu and Ho) with the Çineköy bilingual of Warika | Hieroglyphic Luwian (+ Phoenician, KAI 26) | c. 720–700 BCE | same | the stones in situ | A | 159 §§ / 649 words (Karatepe 1–5) + Çineköy 13 §§ / 71 words (m) | good | eDiAna remake, www.ediana-remake.gwi.uni-muenchen.de/corpus/hieroglyphic/105 (morpheme-glossed; "under CC license"), verified 2026-11-02; the Phoenician text with the Levant survey | medium | 3 | 5 | 3 | 3 | 5 |  |  | www.ediana-remake.gwi.uni-muenchen.de |  |
| anatolia-27 | The Neo-Hittite kings speak: the Karkamiš inscriptions (Katuwa, Yariri, Kamani, A1–A31), Tell Ahmar (Hamiyata, Ariyahina), and the seven Assur lead letters | Hieroglyphic Luwian | c. 1000–700 BCE | same | originals (stone, lead) | A | ≈ 3,700 words / ≈ 1,000 §§ (m): Karkamiš 2,604 w (768 §§, of which the fragments are 546 w), Tell Ahmar 608 w, Assur letters 498 w | good–fair | eDiAna remake (as 26), verified 2026-11-02 | medium–low | 4 | 5 | 3 | 3 | 4 |  |  | www.ediana-remake.gwi.uni-muenchen.de |  |
| anatolia-28 | The KI.LAM festival (CTH 627) | Hittite (+ Hattic chants) | c. 1600–1500 BCE | OH–NH | NS (OS fragments) | D | 6,339 ms lines in 192 mss (m); composite ≈ 2,500–3,000 (r) | fair–poor (27 %) | TLHdig 0.3 (HFR basiscorpus: transliteration only, no HPM edition), verified 2026-11-02 | medium | 5 | 4 | 5 | 2 | 3 | LARGE | the three days of the festival (the processions to the gate-house; the "drinking of the gods"; the cult-singers) – sizes to be set from Singer's day division |  |  |
| anatolia-29 | The Urartian royal annals and the Meher Kapısı offering list (Argišti I's Ḫorḫor annals, Sarduri II's annals, Išpuini and Minua's niche) | Urartian | c. 830–735 BCE | same | the rock and stele inscriptions | A | ≈ 1,000 lines (r) | good (r) | eCUT (ORACC, CC BY-SA 3.0, after Salvini's CTU), NOT verified (ORACC fails TLS here: curl 60, also with the proxy CA bundle) | low | 3 | 5 | 3 | 2 | 5 |  |  |  |  |

### anatolia-01 – The prayers of Muršili II
- **What it is.** A twenty-year plague, and the king searching out its cause. Old tablets and oracles give two answers:
  his father broke an oath with Egypt, and the offerings to the Euphrates were neglected. Muršili confesses ("the father's
  sin comes upon the son") and pleads as if in court. He bargains ("if you kill us all, who will bring you bread and
  libations?"). He builds hymns to the Sun-goddess and Telipinu out of older models, and he mourns his wife
  Gaššuliyawiya.
- **Why it matters.** It is the most personal theology of guilt in the Bronze Age, and it was copied again and again: 378
  survives in 14 manuscripts.
- **Base and tools.** HPM `txhet_gebet` (17 editions, every manuscript, German translation = rank 3). `hpm2md.py` needs a
  `GEBET` kind; the page format is the MYTH/BESRIT one. `hittite_tools.py` would get a new key family and a new corpus
  folder (prayers).
- **Risks.** 378.5–8 and 376.2–4 are small duplicates, to be folded in as variants rather than translated separately. The
  folder's existing Hittite renderings apply.

### anatolia-02 – The Middle Hittite prayers to the Sun-deities
- **What it is.** Kantuzili's sick man: "since my mother bore me, you, my god, have raised me". He gives an oath of
  innocence: "life is bound up with death, and death with life". The Hymn to the Sun-god is a Hittite reworking of a
  Babylonian Šamaš hymn, and it was reused in later prayers (374, 376). Arnuwanda and Ašmunikal lament the temples the
  Kaška burned.
- **Why it matters.** It is the oldest stratum of Hittite prayer, on contemporary MS tablets.
- **Base and tools.** HPM, as for 01.
- **Risks.** 375 survives in 17 editions, most of them tiny. Base it on 375.1 and treat the duplicates as variants. The
  run should follow 01 or run together with it, in one corpus.

### anatolia-03 – The later royal prayers
- **What it is.** Muwatalli II's model prayer to the assembly of the gods (381) is a litany of the gods of every town,
  with a ritual frame: 223 clauses, none damaged. Beside it stand his prayer to the Storm-god of Kummanni and the royal
  couple's prayers for Ḫattušili's health. Puduḫepa's (384.1) is a queen's bargaining with the goddess, with
  vow-like promises.
- **Base.** HPM `txhet_gebet`.
- **Risks.** 381 is largely a list of gods: its inner world is in its frame. C3 is lower than for 01–02.

### anatolia-04 – The Apology of Ḫattušili III
- **What it is.** A usurper's life under Ištar of Šamuḫa: the sickly boy given to the goddess after a dream, the loyal
  brother, the nephew's injustice, the "lawsuit" before the gods. It is the first sustained first-person life story of
  antiquity, and it was copied 19 times.
- **Base.** TLHdig only. Build our composite on KUB 1.1+ (328 lines) with the duplicates (KBo 3.6+ 291, KUB 19.67+ 151),
  via `comp-init` / `comp-check` (the Zalpa and HL2 model).
- **Risks.** It is only medium-length and in good condition, so a single run. The German glosses come from TLHdig and the
  CHD (L–Š) is free per word.

### anatolia-05 – The Proclamation of Telipinu
- **What it is.** History moralised: unity brought conquest, "and the blood became great" brought ruin. Then the law of
  succession, and the rule that the murderer pays with his own head "but his house, wife and children are not harmed".
- **Why it matters.** The kingdom's foundational charter, kept in Hittite and Akkadian.
- **Base.** TLHdig composite: KBo 3.1 in the `KBo 12.7+` join, with KBo 71.215+ (the Akkadian) and KBo 19.96+.
- **Risks.** The second half (the land-donations and the decree on sorcery) is more broken.

### anatolia-06 – The Old Kingdom texts
- **What it is.** The oldest Hittite voices:
  - Anitta's conquest of Neša and Ḫattuša, with the curse on its resettler, on an Old Script tablet;
  - Ḫattušili I's deathbed testament, disinheriting his nephew ("his mother is a snake") and charging the tablet to be
    read before Muršili;
  - his Annals, crossing the Euphrates like Sargon;
  - the Palace Chronicle, comic and cruel anecdotes of officials punished by "the king's father".
- **Base.** TLHdig composites; the Akkadian columns of CTH 4 and 6 suit the folder's Akkadian competence.
- **Risks.** Anitta's duplicates are damaged (31 % over all its manuscripts), but its main tablet KBo 3.22 is good.

### anatolia-07 – The Ten-Year Annals of Muršili II
- **What it is.** Year by year, "the gods ran before me". Arzawa is struck by the Storm-god's *kalmišana* (a bolt from
  the sky). It shows how a Hittite king framed war as divine judgment.
- **Base.** TLHdig composite on KBo 3.4 + KUB 23.125 (292 lines, 5 % broken).
- **The larger unit.** The Comprehensive Annals (61.II) is the alternative: much larger and more broken, a
  lead-and-user decision if a whole Muršili corpus is wanted.

### anatolia-08 – Muršili II's own dossier
- **What it is.** The king's case against his stepmother, the Tawananna: she cursed his wife to death, and the gods are
  asked to judge (CTH 70). And the ritual after the king's speech "went crooked" in a storm (CTH 486). An unguarded,
  private voice beside 01.
- **Base.** TLHdig (CTH 70, our composite) + HPM (486).
- **Risks.** Short, so it is best run with 01.

### anatolia-09 – The Deeds of Šuppiluliuma
- **What it is.** Muršili's history of his father. It includes the Egyptian queen's letter ("my husband is dead, I have
  no son") and the murder of prince Zannanza.
- **Base.** TLHdig, 77 manuscripts.
- **Risks.** The condition is fair–poor: a run would translate only the connected tablets (tablet 7, KBo 5.6, and the
  larger joins) and mark the rest as fragments. A lower priority.

### anatolia-10 – The Akkadian treaties
- **What it is.**
  - Šattiwaza: the historical prologue of Mittani's fall, the deposit "before the Sun-goddess of Arinna", the
    thousand gods as witnesses, curses and blessings.
  - Šunaššura: a near-parity treaty with mutual extradition, and its Hittite version.
- **Why it matters.** It shows how Bronze Age states made kinship by oath.
- **Base.** HPM `txhet_svh` (Wilhelm's editions); Weidner 1923 is a PD check. Akkadian, so readability is high.
- **Risks.** The genre is covered by the Esarhaddon treaty (C5 2).

### anatolia-11 – The Hittite vassal treaties
- **What it is.** Ḫuqqana's treaty is the warmest. It sets rules of sexual conduct ("in Ḫatti it is a capital matter")
  and tells the cautionary tale of Mariya, killed for looking at a palace woman. The Bronze Tablet is a perfect original
  with border lists and witnesses. Alakšandu's treaty is with Wilusa.
- **Base.** HPM for four treaties, TLHdig for the Bronze Tablet and Alakšandu.
- **Runs.** Each treaty is a whole text, so the lead can choose any two or three.

### anatolia-12 – The Military Oaths
- **What it is.** Recruits swear through enacted curses: wax melts, a woman's spindle replaces the bow, a blind woman and
  a deaf man are led past. The soldiers answer "so be it" after each curse. Fear of perjury made visible.
- **Base.** TLHdig composites; Oettinger 1976 is © and serves only for checking.
- **Size.** Compact and in good condition.

### anatolia-13 – The royal instructions
- **What it is.** The frontier governor must judge "rightly": not favour a brother or a friend, take no bribe, keep the
  temples and the roads. The royal bodyguard's rules are a minute-by-minute choreography of the king's safety. The
  palace servants are warned "if a hair is found" in the king's water.
- **Base.** TLHdig composites.
- **Risks.** It is administrative in large part (C4 2), and it extends a covered genre.

### anatolia-14 – The royal funerary ritual
- **What it is.** "When a great sin occurs in Ḫattuša" (the king "becomes a god"): the pyre, the women gathering the
  bones with silver tongs into fine oil, the "stone house", the meadow given to the soul, the weighing of life and death.
  The Journey of the Soul (457.7) follows the dead on the "great road". The deepest Hittite text on death.
- **Base.** HPM (Kapełuś's English edition of four day-tablets).
- **Risks.** Days 3–7 are lost, and day 8–9 is 37 % damaged. Present the surviving days as the whole that exists, and
  mark the gaps. It would join the netherworld corpus.

### anatolia-15 – The "Old Women's" healing rituals
- **What it is.** The practitioner (MUNUS ŠU.GI) as healer of a family's rifts:
  - Maštigga cuts clay tongues and has a sheep take the curses;
  - Paškuwatti trades the spindle for the bow ("I took away womanhood and gave manhood");
  - Alli unbinds sorcery;
  - Tunnawiya purifies at the river.
- **Base.** HPM (Mouton's editions, French = rank 3) + a TLHdig composite for 409.
- **Risks.** Ritual nouns (breads, materials) are often untranslatable, as in the done rituals (gates in the renderings).

### anatolia-16 – The Kizzuwatna purification and birth rites
- **What it is.** Papanikri: the broken birth-stool, the woman's impurity, the blood (*zurki*) and fat offerings.
  Ammiḫatna's rites for a polluted temple. Birth, as a danger to be ritually framed.
- **Base.** HPM, every edition in good condition.
- **Risks.** Hurrian ritual terms (*zurki*, *uzi*, *keldi*) are glossed, not translated.

### anatolia-17 – The rites of the deep gods and the new temple
- **What it is.** CTH 446 digs pits to the netherworld and calls the "primeval gods" (Aduntarri the diviner, Zulki the
  dream-interpreter …) to bind a house's bloodshed and perjury below. CTH 481 "divides" the Goddess of the Night and
  draws her into a new temple: how a god is reproduced.
- **Base.** TLHdig composites (no HPM edition).

### anatolia-18 – More sending-away rituals
- **What it is.** Zarpiya feeds the plague god Šanta, with Luwian incantations. Ambazzi's ritual against slander is a
  companion of her done CTH 391.
- **Base.** HPM.
- **Fit.** The done project's own tables and verifier apply, so this is the cheapest completion in the region. Zarpiya's
  Luwian lines are given as readings with ACLT / eDiAna glosses, not translated independently.

### anatolia-19 – The Old Hittite rituals of kingship
- **What it is.** Spells for the royal couple on Old Script tablets of the 16th c. (CTH 416). The palace-building ritual,
  in which the throne-goddess and the king speak ("to me, the king, the gods … have given the land").
- **Why it matters.** The oldest Hittite ritual voice, as written.
- **Base.** HPM (Montuori's Italian edition, rank 3).
- **Risks.** Old Hittite grammar is harder (the sentence particles *ta / šu*).

### anatolia-20 – The rest of the Kumarbi cycle
- **What it is.** LAMMA, the protective god made king, who neglects the gods and is punished. Silver, the fatherless boy
  mocked by his playmates, who learns that Kumarbi is his father and drags down Sun and Moon. With these the folder holds
  every substantial song of the cycle.
- **Base.** HPM `txhet_myth`, already the base of the KU and UL keys.
- **Risks.** Silver's damage is 34 %. Translate the Proem and the Birth (364.1–2) and keep the small fragments in the
  apparatus, or drop them as the CTH 346 fragments were.

### anatolia-21 – The vanishing-god myths beside Telipinu
- **What it is.** The Sun-god's disappearance (frost seizes the land; even the gods freeze) and the Storm-god's
  (*mugawar*: the evocation that calls him home). The same Old Anatolian picture as Telipinu: divine anger as a
  withdrawal that stops life.
- **Base.** HPM.
- **Risks.** 323.1 is good (7 %). 325 is 31 % damaged and lies at the user's limit: propose 323.1 + 331.1 + 333 firmly,
  and 325 as the lead's call.

### anatolia-22 – The Hurrian-milieu tales
- **What it is.** The Sun-god impregnates a cow, the cow wants to eat her human child, and a childless fisherman and his
  wife take it in. Kešši loves his wife so much that he neglects the gods and his mother (seven dreams follow).
  Gurparanzaḫ, an archer-hero.
- **Base.** HPM.
- **Risks.** Kešši and Gurparanzaḫ are fragmentary (23–39 %, up to 62 % in the small pieces). Lead with the Sun-god and
  the Cow (170 clauses).

### anatolia-23 – The Hittite Gilgameš
- **What it is.** A retelling, not a translation: the gods create Gilgameš eleven cubits tall, and the Ḫuwawa episode is
  expanded. It shows how a foreign epic was re-shaped for a Hittite audience.
- **Base.** HPM.
- **Fit.** Belongs beside the folder's Akkadian epic. The Boğazköy Akkadian Gilgameš fragments are a separate question,
  for the Mesopotamian survey.

### anatolia-24 – A god's anger and a queen's vows
- **What it is.**
  - KUB 22.70: a whole inquiry, by oracle, into why the king is ill. The deity of Arušna is angry over cult objects
    given away, and the court bargains with the god question by question.
  - CTH 584: the queen's dreams and the gifts she vows for her husband's life.
- **Why it matters.** Unguarded documents of anxiety before the gods.
- **Base.** HPM HDivT (566) + TLHdig (584).
- **Risks.** The oracle jargon is technical, with abbreviated protocols.

### anatolia-25 – The letters of the Hittite kingdom
- **What it is.** The frontier commander at Tapikka (Maşat) and the king: grain, Kaška raids, men to be sent, scribes'
  postscripts to each other. The royal letters include Tawagalawa, Milawata (Wilusa and Aḫḫiyawa), and the
  Puduḫepa–Ramesses correspondence ("my sister").
- **Size.** `LARGE` as a whole. Its natural parts are the Maşat archive and the royal correspondence.
- **Base.** TLHdig. Hoffner's WAW 15 is © (the SBL copy belongs to the ICI, not ours).

### anatolia-26 – The Karatepe bilingual
- **What it is.** Azatiwada, servant of Tarḫunt: "Tarḫunt made me father and mother to Adana". He built fortresses
  "where formerly men feared to walk, and in my days even women walk with spindles". The longest Hieroglyphic Luwian
  text, in two copies (the Hu and Ho gates), with the Phoenician version for control. Çineköy adds "the king of Assur
  became father and mother to me".
- **Why it matters.** It is the first Luwian text of the folder.
- **Base.** eDiAna remake. Every word is analysed into lemma, syllabic string, logogram, gloss, morphology and part of
  speech (Yakubovich's annotation; Hawkins 2000 / Çambel 1999 as editions).
- **Risks.** A new script convention. The Phoenician text belongs with the Levant survey, and the two should be run
  together.

### anatolia-27 – The Neo-Hittite kings speak
- **What it is.**
  - Katuwa of Karkamiš ("I seized the city … I made the gods' house").
  - Yariri the regent ("I knew twelve languages"; the writing "of the city, the Phoenician, the Assyrian and the
    Aramaean").
  - Hamiyata of Masuwari.
  - Seven private lead letters found at Assur, 8th c.: the region's unguarded voices.
- **Base.** eDiAna.
- **Risks.** Readability is medium–low outside the formulae; many logograms (DEUS, URBS …).

### anatolia-28 – The KI.LAM festival
- **What it is.** The great Old Hittite state festival of the gate-house: processions of the gods' animals, the king
  "drinking" the gods, the singers. It was performed and copied for four centuries (C3 5), but it is a protocol (C4 2).
- **Size.** `LARGE`, and 27 % of its lines are broken. Listed so that the lead and the user decide once. Recommendation:
  not as a whole. At most a day, if the lead wants the festival genre.

### anatolia-29 – The Urartian royal annals
- **What it is.**
  - Argišti I's and Sarduri II's year-by-year campaigns: so many men killed, so many cattle taken, for Ḫaldi.
  - The Meher Kapısı, an offering list ranking the whole pantheon by bulls and sheep.
- **Why it matters.** Urartu's first central text.
- **Base.** eCUT (ORACC). **Not verified:** ORACC fails TLS from this cloud. Urartian is only partly understood, so a run
  would lean on eCUT's English (rank 3), which is close to the brief's limit.
- **Recommendation.** Keep it as a candidate only if a session reaches eCUT. A low priority.

## Excluded
- **Telipinu versions 2–9 (CTH 324.2–9):** dropped by the user's rules; measured today at 28–78 % damaged.
- **The Kumarbi fragments (CTH 346.1–21), the small Song of Release fragments, the Song of Release's Hurrian side:**
  dropped by the user's rules.
- **Telipinu and the Daughter of the Sea (322.1–4):** 43 + 59 clauses, 21–47 % damaged; too short and too damaged.
- **Ḫannaḫanna and the other vanishing-god fragments (334, 335, 327, 328, 332):** small editions, 13–82 % damaged.
- **The Hittite Atramḫasis (347):** 61 clauses; too short.
- **The Tešub-cycle fragments (349) and the mythological fragments (370.I.1–97):** fragments.
- **The Moon that Fell from Heaven (CTH 727, Hattic–Hittite):** 110 Hittite ms lines, 21 % broken; too short.
- **The Ritual and Myth of the Euphrates (365, 45 clauses), the Ritual of the Sea (436, 45), Advice for a King (438, 47),
  the creation-of-man river ritual (434.1, 41):** too short.
- **The ritual against incest (445):** 26 clauses, 44 % damaged; too short.
- **The *nuntarriyašḫa* festival (CTH 626):** HPM has no text for 22 of its 39 day-units; lacunose as a whole, and
  repetitive.
- **The AN.TAḪ.ŠUM festival (CTH 604–625):** 38 days scattered over many fragmentary tablets (625 = 1,554 ms lines,
  19 % broken); repetitive.
- **The *ḫišuwa* festival (628):** 9,137 ms lines, 30 % broken, with Hurrian chants.
- **The festivals of the Ištanuwa and Lallupiya people (771–773, with the "steep Wilusa" song):** a festival frame; the
  Luwian songs are not understood with control.
- **The Palaic festival rituals (750–753):** Palaic is barely understood.
- **The Kuwattalla and Puriyanni Luwian rituals (758–763):** 26–55 % of lines broken; the Luwian incantations are
  obscure.
- **The Hittite-Luwian conjurations (HPM 764–766, Ivanov & Yakubovich 2025):** 39 small editions, 1,082 text lines,
  mostly fragments.
- **The Hurrian *itkalzi* series (777) and the Hurrian ritual corpus (791):** Hurrian, unreadable with control.
- **The Mittani letter (EA 24):** Hurrian; not in TLHdig.
- **Kešši's Hurrian version:** Hurrian.
- **The Hurrian hymns of Ugarit (h.6):** not understood.
- **Puduḫepa's great vow (CTH 585):** 44 mss, 36 % broken.
- **The dreams (CTH 590):** 143 small fragments.
- **The oracle series as such (CTH 570, 582; thousands of lines):** technical and fragmentary; KUB 22.70 represents them
  (anatolia-24).
- **The edicts on HPM (CTH 9.6, 23.3, 258.1, 272):** 35–70 clauses each; too short.
- **Cult inventories (501–530), the palace administrative corpus (PTAC), land grants, the Kululu lead strips:**
  administrative.
- **The Hittite King of Battle (CTH 310) and the Hittite Narām-Sîn (311):** 227 and 191 ms lines, 15 % broken; short.
  At most an appendix to `אגדות-מלכים/` (Cuthaean Legend, Sargon).
- **The Empire-period HLuw inscriptions (Yalburt, Südburg, Emirgazi):** short (27–140 words each) and obscure.
- **Lydian (1,680 words), Lycian A/B (5,238 words; the Xanthos stele, the Letoon trilingual), Carian, Sidetic,
  Pisidian, Milyan:** small and poorly understood (eDiAna counts).
- **Phrygian:** formulaic, poorly understood, no glossed open base found.
- **"Kalašmaic":** too small, unedited.
- **The Old Assyrian Kaneš letters:** Akkadian; the Mesopotamian survey's.
- **"Beyköy 2", the Dorak treasure, "Luwian" Phaistos readings:** forgeries / fringe.

## New languages
- **Hieroglyphic Luwian** (anatolia-26, 27).
  - Base: the eDiAna remake corpus (287 texts, 12,012 words, 88 % glossed). Each word carries lemma, syllabic string,
    logogram, gloss, morphology and part of speech. The editions follow Hawkins 2000 (CHLI I) and Çambel 1999 (©,
    consulted only by citation).
  - Dictionaries: eDiAna's dictionary module (the same host). ACLT's glossaries (HTTP only; its search runs, but its
    results page fails).
  - Set-up: a new tool, an `ediana2md.py` that parses the per-text pages (the interlinear tables are in the HTML).
    Then a key in a new corpus tool, a name table (Azatiwada, Tarḫunt, Adana / Hiyawa), and a grammar mapping (the
    quotative *-wa*, the logograms with phonetic complements, the particle chains).
  - Claude's reading confidence: medium for the royal formulae with the glosses and the Phoenician control, low for
    the rarer lexicon.
- **Urartian** (anatolia-29).
  - Base: eCUT (ORACC JSON, CC BY-SA, lemmatised, with English), unreachable here.
  - No other open dictionary.
  - Claude's reading confidence: low. Outside the formulae a run would depend on eCUT's English.
- **Not new:** Hittite (18 keys done, `hittite_tools.py`, the CHD L–Š per word, TLHdig German glosses) and Akkadian
  (anatolia-10).
- **What a Hittite run needs from the current tools:**
  - `hpm2md.py`: kinds for `txhet_gebet`, `txhet_svh` and `txhet_hdivt`, with the same page format as MYTH/BESRIT.
  - `hittite_tools.py`: new keys, and new corpus folders for the prayers and the historical texts.
  - TLHdig: extract the new CTH folders from the ignored zip into `sources/TLHdig/CTH-*` (the recipe exists).

## Hosts
- **`www.ediana-remake.gwi.uni-muenchen.de`:** the eDiAna remake (LMU), the base of the HLuw texts and the
  minor-Anatolian dictionary. Verified (200) today. Not in `domains.txt`.
- **`ediana.gwi.uni-muenchen.de`:** the legacy eDiAna (301 today). Not needed if the remake stays up.
- **`web-corpora.net`:** ACLT, Yakubovich's annotated Luwian corpus, plain HTTP only. Its glossaries are a check, not a
  base. Not in `domains.txt`.
- **`oracc.museum.upenn.edu`:** eCUT. It is already in `domains.txt`, but **TLS fails** from this cloud
  ("unable to get local issuer certificate", also with `/root/.ccr/ca-bundle.crt`). This is an environment issue to
  raise; the Sumerian survey hit the same failure.
- **Already listed and verified today:** `hethport.net` (every HPM index and edition), `zenodo.org` (TLHdig),
  `isac-assets.s3.amazonaws.com` / `isac.uchicago.edu` (the CHD), `archive.org` (Weidner 1923).

# Region survey – levant-arabia (2026-11-02)

The Levant and Syria (Ugaritic, Phoenician and Punic, Old and Imperial Aramaic and later non-scriptural Aramaic, Moabite,
Ammonite, Edomite, epigraphic Hebrew, Eblaite); Arabia (Old South Arabian, Safaitic and the other Ancient North Arabian
scripts, Nabataean, pre-Islamic Arabic poetry); Ethiopia (Geʿez, ancient only). Bible parallels played no part in this
survey. The 2026-10-21 surveys (`world-survey--levant-nw-semitic--…`, `world-survey--arabia-africa--…`) supplied the facts,
and I re-checked them today.

**How I measured.** Sizes marked `(m)` come from scripts run today:
- **Ugaritic:** the repo's `tools/cuc2md.py` over a fresh CUC v0.2.8 download. "Heavy" means a line that is more than
  half restored or lost.
- **Aramaic and Phoenician:** DEAPS edition lines, counted from its record pages.
- **Arabic:** OpenITI raw files, counting verses by the hemistich separator.
- **Safaitic:** the 10,105-page OCIANA PDF (`pdftotext`, 31,745 records parsed).
- **Bases:** archive.org items checked through the metadata API (full view, not restricted).

Scratch (scripts, counts and downloads):
`/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/levant-arabia/` – `cuc_stats.tsv`
(one row per CUC tablet), `ahiqar_upper.txt`, `dl/deaps/tad/counts.txt`, `dl/ociana/saf.json`, `scripts/`.

## Key findings

- **What these cultures held central, in their own antiquity:**
  - Ugarit: the poetic myths and the temple's liturgy.
  - The Arameans: the royal monument and the sworn treaty. Their one literary classic is *Ahiqar*, copied and
    re-translated for 1,500 years.
  - Phoenicia: the royal and funerary inscription, the king's voice on his grave and his gods.
  - Arabia: before Islam, the *qaṣīda* ("the dīwān of the Arabs"). Before that, on stone: the Sabaean king's annals and the
    penitent's public confession in the south, and the nomad's lament carved on a cairn in the north.

  The folder has the Ugaritic myths and epics, and a few Hebrew, Moabite and Punic inscriptions. **It has no Aramaic, no
  Phoenician royal text, and nothing at all from Arabia or Ethiopia.**
- **The Aramaic Ahiqar is the region's strongest new text, and it is now measurable.**
  - DEAPS (Moore, updated 2026-11-01) holds a full line-by-line edition of the Elephantine papyrus.
  - The upper text (14 columns) has **229 lines and 2,224 words (m)**, with only 14 lines heavily broken. The lacunae are
    at the line ends.
  - The base can be Cowley 1923 (PD, full view, verified). Its OCR has no Aramaic, so the base is read from the page
    images, as the stone corpus read Cooke. DEAPS (no licence stated) is consulted line by line.
- **Ugarit still has substantial unread material that is whole and readable. Measured in CUC:**
  - The letters: 105 tablets and 1,788 lines in all. **51 letters of 8 lines or more are ≤20% heavy: 1,081 lines, 6%
    heavy.**
  - The remaining myths, hymns and charms: 9 tablets, 202 lines, 8% heavy.
  - The remaining well-preserved ritual tablets: 20 tablets, 573 lines, 12% heavy.
  - Divination and horse medicine: 264 lines.
  - The king list KTU 1.113 is **not** a candidate: about 14 lines of names, behind a broken hymn.
  - EUPT still serves only Kirta (1.14–1.16), checked today.
- **The Old Aramaic royal corpus, with Fekheriye and Sefire, makes one whole of about 400 lines.**
  - DEAPS editions, measured: Fekheriye 23, Zakkur 47, Hadad 34, Panamuwa 23, Bar-Rakib 20.
  - Sefire, about 190 lines (reported), has **no** DEAPS edition. With Fekheriye, it is waiting on the Persée PDFs that a
    person must save: Sefire's 1957 *CRAI* article, 1960 *Mémoires AIBL* edition and 2009 *Topoi* article, and Fekheriye's
    1981 *CRAI* and 1983 *Syria* articles. The URLs are in `sources/_records-only--Words-in-stone/README.md`.
  - Cooke 1903 (PD) has Hadad, Panamuwa, Bar-Rakib, Nerab I–II and the Taymāʾ stele. Lidzbarski's *Ephemeris* III (PD,
    archive.org) has Zakkur.
- **The Phoenician royal inscriptions (~190 lines) are a natural corpus with good bases:**
  - DEAPS editions, measured: Eshmunazar 22, Tabnit 8, Yehawmilk 16, Kilamuwa 16, Karatepe 96 incl. the copies, Pyrgi 10.
  - Cooke (PD) has Byblos, Tabnit and Eshmunazar.
  - Wikipedia has transcriptions (CC BY-SA) for Kilamuwa, Tabnit and Ahiram.
  - Karatepe has no open edition: DEAPS consult only.
- **Arabia: the pre-Islamic odes are the culture's own canon and the most readable text of the region.**
  - Measured in OpenITI: the seven Muʿallaqāt are 829 verses (in al-Zawzanī's commentary); the Mufaḍḍaliyyāt are 131
    poems and 2,726 verses.
  - They are 6th-century CE, so `1 EXC`. The exception holds: this is the voice of pagan Arabia before Islam, kept by
    reciters. Its weak point is criterion 2 (fixed in the 8th–9th c. by Muslim philologists, with variants).
  - **No Hebrew translation of the Muʿallaqāt was found** (search today).
  - PD bases, verified: Lyall 1894 (Tibrīzī's ten odes), Ahlwardt 1870 (the Six Poets), Lyall 1918–24 (the
    Mufaḍḍaliyyāt).
- **Safaitic: individual graffiti are short, but the culture itself made wholes – the memorial cairns.**
  - **The Cairn of Hāniʾ (HCH) is a whole:** 197 inscriptions and 2,091 words (m), 70 of them laments, carved by one kin
    group over one dead man. It is in the OCIANA Preliminary Edition (Zenodo, CC BY 4.0, verified).
  - In the whole edition: 1,080 *wgm* "he grieved" texts and 163 *s²wq* "he longed" texts. Only 731 of the 31,745 records
    have 25 or more words.
- **Old South Arabian without DASI.**
  - DASI still answers scripts with an Anubis bot wall (500, today). Its AI-use condition stands: no DASI text is used
    without an agreement.
  - Two corpora are usable without it:
    - **Karibʾil Watar's annals RES 3945–3946** (7th c. BCE): in RES vol. VI (PD, archive.org; I found RES 3945 in the OCR
      today).
    - **The Haramic confession texts** published in CIH (CIS IV, PD; Toronto's scans of parts 1, 2b, 2c, 3a are on
      archive.org) and in RES.
  - Both are checked per word against Sabaweb (http, reachable).
  - The Minaic confessions of Barāqish and the Qāniya hymn exist only in post-2000 © editions and in DASI: not usable.
- **Not reachable or not a candidate:**
  - Eblaite: EbDA's terms allow research use only, and the language is logographic with no tools.
  - Deir ʿAllā, Khirbet el-Qom, Ketef Hinnom I and the ʿAjrud wall poem: dropped by the user's rule.
  - Papyrus Amherst 63: no open base.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| levant-arabia-01 | **The Words of Ahiqar**, Elephantine papyrus whole (TAD C1.1, the upper text: the story + the sayings, 14 columns) | Aramean / Imperial Aramaic (sayings in an older, Syrian Aramaic) | 8th–6th c. BCE (sayings possibly older) | c. 500 BCE | palimpsest papyrus c. 475 BCE (Berlin P. 13446 + Cairo) | A | 229 lines, 2,224 words (m) | fair (69% of lines have some gap at the edges; 14 lines = 6% heavy) | Cowley 1923 pp. 204–248 (PD; archive.org `aramaicpapyrioff00ahikuoft`, page images – the OCR has no Aramaic); Sachau 1911 (PD, `aramischepapyr02sachuoft`, plates); DEAPS record 12283 (Moore's edition, no licence: consult) – all verified 2026-11-02 | high | 3 | 5 | 5 | 5 | 5 |  |  |  |  |
| levant-arabia-02 | **The Muʿallaqāt** (the seven odes; the ten of al-Tibrīzī as the fuller canon) | pre-Islamic Arabs / Classical Arabic | c. 500–600 CE | 8th–9th c. CE (Ḥammād, the Kufan and Basran philologists) | mss 10th c. and later | C | 7 odes, 829 verses (m, OpenITI al-Zawzanī); 10 odes ≈ 990 verses (r) | good (variant readings, no gaps) | Lyall 1894, *A Commentary on Ten Ancient Arabic Poems* (al-Tibrīzī; PD; archive.org `india.history.resource.111027`); Ahlwardt 1870 (PD, `divanssixancien00alqgoog`), both verified 2026-11-02; OpenITI files (modern Shamela text: local check only) | high | 1 EXC | 3 | 5 | 5 | 5 |  |  | ejtaal.net, arabiclexicon.hawramani.com |  |
| levant-arabia-03 | **The Ugaritic letters** (KTU 2, the 51 well-preserved letters as one corpus; the whole KTU 2 as the frame) | Ugarit / Ugaritic | 13th–early 12th c. BCE | same | the tablets (RS, the last decades of Ugarit) | A | 51 letters, 1,081 lines, 2,912 words (m); all KTU 2: 105 tablets, 1,788 lines (m) | good (51 letters: 6% heavy lines; all KTU 2: 17%) | CUC v0.2.8 (Zenodo 21380577, CC BY-NC 4.0; human-reviewed parses for 2.10–2.16, 2.38), verified 2026-11-02 | medium | 4 | 5 | 1 | 3 | 3 |  |  |  | `מיתוסים-אוגריתיים/` (a new genre in the corpus) |
| levant-arabia-04 | **The remaining Ugaritic myths, hymns and charms**: 1.92 (ʿAthtartu the huntress), 1.101 (Baal enthroned), 1.133 (Mot's challenge), 1.96 (the evil eye), 1.169 (against sorcerers), 1.124 (Ditanu consulted for a sick child), 1.179 (a star incantation), 1.65 (litany of El's names), 1.93 | Ugarit / Ugaritic | LB (older traditions) | 13th c. BCE | the tablets | A | 9 tablets, 202 lines, 836 words (m) | fair (54% of lines have some loss, 8% heavy; 1.179 lost its left edge) | CUC v0.2.8 (CC BY-NC 4.0), verified 2026-11-02 | medium | 4 | 5 | 3 | 5 | 1 |  |  |  | `מיתוסים-אוגריתיים/2-…` (the short myths and charms: completes the CUC-held set) |
| levant-arabia-05 | **The Old Aramaic royal inscriptions as one corpus**: Tell Fekheriye (Aramaic side), Sefire I–III, Zakkur, Hadad and Panamuwa (Samʾal), Bar-Rakib, Nerab I–II; + the Taymāʾ stele as an appendix | Arameans / Old Aramaic, Samʾalian | c. 850–650 BCE (Taymāʾ 5th c.) | same | the stones | A | ≈400 lines: Fekheriye 23, Zakkur 47, Hadad 34, Panamuwa 23, Bar-Rakib 20 (m, DEAPS); Sefire ≈190, Nerab 24, Taymāʾ ≈23 (r) | fair (Fekheriye, Hadad, Panamuwa, Nerab good; Sefire I–II with gaps, III good) | Cooke 1903 nos. 61–65, 69 (PD, `textbookofnorths00cookuoft`, verified); Lidzbarski, *Ephemeris* III (PD, `ephemerisfursemi313unse`, item verified, contents reported) for Zakkur; DEAPS 11642, 11654–11656, 11749 (consult); **Sefire and Fekheriye: NOT verified as open – Persée PDFs a person must save** | high | 3 | 5 | 2 | 4 | 4 |  |  |  | `מילים-באבן/` (the inscriptions corpus: its first Aramaic) |
| levant-arabia-06 | **The Phoenician royal and funerary inscriptions**: Byblos (Ahiram, Yehimilk, Elibaal, Shipitbaal, Yehawmilk), Sidon (Tabnit, Eshmunazar II, Bodashtart), Kilamuwa, Karatepe (Phoenician side), Pyrgi | Phoenicians / Phoenician | c. 1000–300 BCE | same | the stones, sarcophagi, gold tablets | A | ≈190 lines: Eshmunazar 22, Tabnit 8, Yehawmilk 16, Kilamuwa 16, Karatepe 96 (with its copies), Pyrgi 10, Ahiram 2 (m, DEAPS); the small Byblian texts ≈20 (r) | good | Cooke 1903 nos. 3–7 (PD, verified); Wikipedia (Kilamuwa, Tabnit, Ahiram transcriptions, CC BY-SA, verified); Lidzbarski *Ephemeris* III (Kilamuwa, PD); DEAPS 11441–11466, 11717 (consult); **Karatepe: no open base, NOT verified** | high | 3 | 5 | 2 | 4 | 3 |  |  |  | `מילים-באבן/` (Punic is translated there; this adds the Phoenician royal voice) |
| levant-arabia-07 | **The Elephantine family and community archives**: Mibtaḥiah (TAD B2, 11 docs), Ananiah and Tamet (B3, 13 docs), the communal letters (A4: the Passover letter, the temple petitions and memorandum) | the Judean garrison at Elephantine / Imperial Aramaic | 471–399 BCE | same | the papyri | A | 34 documents, 714 lines, 8,616 words (m, DEAPS) | good (9 heavy lines in 714) | Cowley 1923 (PD, verified; page images) + Sachau 1911, Ungnad 1911 (PD, verified); DEAPS editions (consult) | high | 3 | 5 | 1 | 3 | 3 |  |  |  |  |
| levant-arabia-08 | **The Cairn of Hāniʾ**: all the inscriptions of one memorial cairn (HCH 1–196 + Field Museum 158704) | Safaitic nomads / Safaitic (Old Arabic) | 1st c. BCE – 4th c. CE | same | the cairn stones | A | 197 inscriptions, 2,091 words (m); 70 laments | good (the edition gives full readings; a few `{ }` doubtful letters) | OCIANA, *The Corpus of Safaitic Inscriptions: Preliminary Edition* (Al-Manaser & Macdonald 2017), Zenodo 5604411, CC BY 4.0, verified 2026-11-02 (transliteration + English) | medium | 2 | 5 | 2 | 4 | 5 |  |  | ociana.osu.edu (optional) |  |
| levant-arabia-09 | **The Haramic (Sabaic) confession texts** in CIH and RES (CIH 523 = Haram 40, 532, 533 and the others there) | Sabaeans of the Jawf / Sabaic (Haramic dialect) | c. 3rd c. BCE – 1st c. CE (r) | same | bronze and stone tablets | A | ≈10–15 texts, ≈150 lines (r) | good (r) | CIS IV (PD; archive.org `corpusinscriptio41acad`, `…42acad`, `…42acad_0`, `…43acad`, the Toronto scans – which part holds which CIH number is not checked) and RES (PD, `repertoiredepigr0001unse` …`0008unse`) verified 2026-11-02; Sabaweb (German context translation per word; no licence: per word); **not DASI** | medium | 2 | 5 | 2 | 5 | 5 |  |  | sabaweb.uni-jena.de |  |
| levant-arabia-10 | **The Mufaḍḍaliyyāt** (al-Mufaḍḍal al-Ḍabbī's anthology, whole) | pre-Islamic Arabs / Classical Arabic | c. 500–620 CE | c. 770–780 CE | mss 10th c.+ | C | 131 poems, 2,726 verses (m, OpenITI) | good | Lyall 1918–24 (Arabic text + al-Anbārī + translation + notes; PD; `mufaddaliyatant01mufauoft`, `mufaddaliyatanth00mufauoft`), verified 2026-11-02 | high | 1 EXC | 3 | 4 | 5 | 4 |  | (2,726 verses: just under the LARGE line; Lyall's vol. I order, poems 1–66 and 67–131 as two runs) | ejtaal.net, arabiclexicon.hawramani.com |  |
| levant-arabia-11 | **The remaining well-preserved Ugaritic ritual texts**: 1.41 + 1.87 (the vintage-month ritual, two copies), 1.43 (the entry of the gods), 1.46, 1.104–1.106, 1.109, 1.111, 1.112, 1.115, 1.130, 1.132, 1.162, 1.164, 1.168, 1.173, 1.175, 1.90, 1.91 | Ugarit / Ugaritic | 13th c. BCE | same | the tablets | A | 20 tablets, 573 lines, 2,424 words (m) | fair (12% heavy; 1.41 and 1.87 38–39% each, but they restore each other) | CUC v0.2.8 (CC BY-NC 4.0), verified 2026-11-02 | medium | 4 | 5 | 3 | 3 | 1 |  |  |  | `מיתוסים-אוגריתיים/7-…` (rituals 1.40, 1.119, 1.39) |
| levant-arabia-12 | **Ugaritic divination and horse medicine**: the dream and birth omens (1.86, 1.103), the omen texts 1.127, 1.163, 1.140, the eclipse 1.78; the hippiatric text 1.85 with its copies 1.71, 1.72 | Ugarit / Ugaritic | 13th c. BCE (Babylonian models) | same | the tablets | A | 264 lines (163 + 101), 1,127 words (m) | fair (divination 16% heavy; 1.85 good, its copies damaged) | CUC v0.2.8, verified 2026-11-02 | medium | 4 | 5 | 3 | 3 | 3 |  |  |  | `מיתוסים-אוגריתיים/` |
| levant-arabia-13 | **Karibʾil Watar's annals** (RES 3945 + 3946, the Ṣirwāḥ temple of Almaqah) | Sabaeans / Early Sabaic | c. 685 BCE (r) | same | the stone | A | RES 3945 20 very long lines + RES 3946 (r), ≈1,000 words (r) | good (r) | RES vol. VI no. 3945–3946 (PD; `repertoiredepigr0006unse`, found in the OCR today, verified 2026-11-02); Sabaweb per word | medium | 3 | 5 | 2 | 2 | 5 |  |  | sabaweb.uni-jena.de |  |
| levant-arabia-14 | **The Nabataean tomb inscriptions of Hegra** (the whole set of dated façade texts) | Nabataeans / Nabataean Aramaic | 1 BCE – 75 CE | same | the tomb façades | A | ≈30–38 texts, ≈250 lines (r); 15 in Cooke | good | Cooke 1903 nos. 79–93 (PD, verified); Jaussen & Savignac 1909–14 (PD, `missionarcheolog02jaus`, verified); CIS II (PD, `CorpusInscriptionumSemiticarumII1`, verified) | high | 2 | 5 | 1 | 3 | 4 |  |  |  |  |
| levant-arabia-15 | **Philo of Byblos, the Phoenician History** (Eusebius, *PE* I.9.20–I.10.55) | Phoenicians, through a Greek-writing heir / Greek | claimed old (Sanchuniathon); written c. 100 CE | c. 100 CE; quoted c. 315 CE | medieval mss of Eusebius | E | ≈3,500 words (m on 2026-10-21) | good | First1KGreek `tlg2018.tlg001` (Dindorf 1867), CC BY-SA 4.0, raw GitHub, verified 2026-11-02 | high | 2 | 1 | 1 | 5 | 4 |  |  |  |  |
| levant-arabia-16 | **Lucian (?), On the Syrian Goddess** (*De Dea Syria*, whole) | Syrians of Hierapolis, seen by a Syrian writing Greek / Ionic Greek | c. 150 CE | same | medieval mss | E | 60 sections, 6,325 words (m) | good | Perseus `tlg0062.tlg041.perseus-grc2` (Harmon 1925; CC BY-SA markup), raw GitHub, verified 2026-11-02 | high | 2 | 1 | 1 | 4 | 3 |  |  |  |  |
| levant-arabia-17 | **The Aksumite royal inscriptions of ʿEzana** (the pagan ones invoking Maḥrem, and the turn to the "Lord of Heaven") | Aksum / Geʿez (with Greek and pseudo-Sabaic versions) | c. 330–360 CE | same | the stones | A | ≈10–15 texts, ≈350 lines (r) | good (r) | Littmann, *Deutsche Aksum-Expedition* IV (1913; PD in the US) `sabaischegriechi00litt`, verified 2026-11-02; Dillmann's *Lexicon* (PD) | medium | 2 | 5 | 2 | 3 | 5 |  |  | www.betamasaheft.uni-hamburg.de (optional) |  |
| levant-arabia-18 | **The dīwān of al-Khansāʾ** (the elegies for Ṣakhr and Muʿāwiya) | pre-Islamic Arabs / Classical Arabic | c. 600–620 CE | 8th–9th c. (Thaʿlab's recension) | mss 10th c.+ | C | ≈880 verse lines (m, OpenITI JK edition; not checked against a PD edition) | good | **NOT verified** as a PD edition (the 19th-c. Beirut edition was not looked for); OpenITI (local check only) | high | 1 EXC | 3 | 4 | 5 | 3 |  |  | ejtaal.net |  |
| levant-arabia-19 | **The Six Poets** (al-Aʿlam al-Shantamarī's school canon: Imruʾ al-Qays, al-Nābigha, ʿAntara, Ṭarafa, Zuhayr, ʿAlqama) | pre-Islamic Arabs / Classical Arabic | c. 500–610 CE | 8th–9th c.; the canon 11th c. | mss 10th c.+ | C | ≈4,100 verse lines in the OpenITI JK dīwāns (m); Ahlwardt's text shorter (not counted) | good (authenticity of many single poems disputed) | Ahlwardt 1870 (PD, verified 2026-11-02) | high | 1 EXC | 3 | 5 | 5 | 3 | LARGE | Imruʾ al-Qays ≈570, al-Nābigha ≈700, ʿAntara ≈1,700 (OpenITI includes spurious poems; Ahlwardt's is far shorter), Ṭarafa ≈440, Zuhayr ≈470, ʿAlqama ≈210 verse lines (m) | ejtaal.net, arabiclexicon.hawramani.com |  |
| levant-arabia-20 | **Hebrew letters of the last century of Judah**: the Lachish ostraca (the legible ones), the Arad Eliashib archive, the Siloam inscription | Judah / Hebrew (as readings) | c. 700–588 BCE | same | the ostraca | A | ≈250 lines (r) | fair (Lachish partly faded) | Cooke 1903 no. 2 (Siloam, PD, verified); DEAPS Arad (consult); **Lachish and Arad: NOT verified as open** | high | 3 | 5 | 1 | 3 | 3 |  |  |  | `מילים-באבן/` (Hebrew readings: Mesad Hashavyahu, Gezer) |
| levant-arabia-21 | **The Letter of Mara bar Serapion to his son** | a Syrian (Samosata) Stoic / Syriac | c. 73 CE or later (debated) | same | BL Add. 14658, 6th–7th c. | D | ≈1,000 words (r) | good | Cureton, *Spicilegium Syriacum* 1855 (PD; `spicilegiumsyria00cureuoft`), verified 2026-11-02 | medium | 2 | 3 | 1 | 4 | 3 |  |  |  |  |

### levant-arabia-01 – The Words of Ahiqar
- **What it is.** Two things, both whole as the papyrus has them:
  - the story of the Assyrian sage Ahiqar, betrayed by the nephew he adopted and saved by the officer he once spared;
  - about 100 sayings in a Syrian Aramaic older than the story: on the tongue and silence, the king's word "like a flame",
    the bramble and the pomegranate, the leopard and the goat, the poor man and the rich.

  It is the Aramaic-speaking world's own wisdom classic. Arameans and others copied it for 1,500 years (Syriac, Arabic,
  Armenian, Old Slavonic, Ethiopic). It is the region's best window onto ethics, the household and the court.
- **Base.** Cowley 1923 (PD), from the page images. DEAPS (Moore's edition with tagged lacunae, measured today) is
  consulted line by line. CAL is the lexicon, one entry at a time.
- **Risks.**
  - The column order is debated, and the sayings are partly lost at the edges.
  - The Syriac version (Conybeare, Harris & Lewis 1913, `storyofahikar0000cony`; Nau 1920, `documentsrelatif00ahik`:
    both full view, verified) is whole but rewritten in a Christian milieu. It is an apparatus witness, not the base.
- **A run needs:**
  - the folder's first Aramaic renderings file and grammar mapping;
  - an extension of `stone_tools.py` (translation mode) to Aramaic, or a new `aramaic_tools.py`;
  - the page images of Cowley pp. 204–248.

### levant-arabia-02 – The Muʿallaqāt
- **What it is.** The seven (or ten) "suspended" odes, the classic *qaṣīda*. It moves through:
  - the halt at the effaced campsite and the lost beloved;
  - the she-camel and the desert crossing;
  - wine, the hunt, honour and the tribe;
  - Zuhayr on war and peace, Labīd on Time (*dahr*) and death.

  The Arabs knew them by heart as their poetry's summit for centuries. It is the culture's first central text and the
  folder's first Arabic.
- **Why `EXC`.** The content is pre-Islamic and pagan; the poets died before Islam. The text was fixed by reciters and then
  by Muslim philologists of the 8th–9th c., so criterion 2 is the safeguard. Translate the transmitted text, and mark the
  variants and the doubted verses.
- **Base and tools.**
  - Lyall 1894 (Arabic, al-Tibrīzī's commentary; PD).
  - Ahlwardt 1870 for six of the poets.
  - The commentators (al-Zawzanī, al-Tibrīzī, al-Anbārī) are the controls.
  - Lane's *Lexicon* online (ejtaal.net, hawramani).
- **Risks.** A hard Bedouin lexicon (camels, terrain, weapons). A Hebrew register that must not turn into medieval Andalusian
  imitation.
- **A run needs:** a new Arabic set-up (renderings file, metre notation, a tool for verse-and-hemistich lines).

### levant-arabia-03 – The Ugaritic letters
- **What it is.** The private and royal correspondence of the last generations of Ugarit:
  - "to the queen, my mother: at my mother's feet I fall seven times and seven times";
  - news of grain, ships and the Hittite overlord;
  - the enemy ships at the end.

  Unguarded voices of a city we know only through its myths.
- **Base.** CUC (as the folder's Ugaritic corpus), with `ugarit_tools.py` extended to the KTU 2 keys. The letters chosen
  are the 51 measured as ≤20% heavy; the rest go into a list.
- **Risk.** A formulaic but idiomatic epistolary language; DULAT's per-word glosses are in CUC.

### levant-arabia-04 – The remaining Ugaritic myths, hymns and charms
- **What it is.** The rest of the mythic and magical tablets that CUC holds:
  - ʿAthtartu hunting in the steppe (1.92);
  - Baal enthroned on Ṣapan with his seven lightnings (1.101);
  - Mot's speech of appetite (1.133);
  - the evil eye (1.96) and the sorcerers who torment a youth (1.169);
  - the divine Ditanu consulted for a sick child (1.124).
- **Why.** Completing the folder's short-myths project. 1.12 ("Baal and the Devourers") and 1.10, 1.11 and 1.13 are not in
  CUC and have no open base.
- **Risk.** Short, partly broken tablets: translate whole, with the gaps shown.

### levant-arabia-05 – The Old Aramaic royal inscriptions
- **What it is.** The Aramean kings in their own words:
  - Hadad-yithʿi's statue praying to Hadad "who rains abundance" (Fekheriye);
  - the treaty of Bar-Gaʾyah and Matiʿel with its simile-curses (Sefire);
  - Zakkur besieged and answered by his god through seers;
  - Panamuwa asking that his soul "eat and drink with Hadad";
  - the priest Si-gabbar of Nerab, whose mouth "was not closed from words" on the day he died.

  As the user ruled, Fekheriye stands only inside this corpus.
- **What a person must save** (Persée, free to read, refuses scripts): Sefire – *CRAI* 1957, *Mémoires AIBL* 15 (1960),
  *Topoi* 16 (2009); Fekheriye – *CRAI* 1981, *Syria* 60 (1983). The URLs are in the folder's records-only README.
- **A run needs:**
  - `stone_tools.py` in translation mode for Aramaic;
  - CAL per entry;
  - Cooke's page images for the Samʾal and Nerab texts.

  Without Persée the corpus is still ≈190 lines (Samʾal, Zakkur, Nerab, Taymāʾ), and Sefire and Fekheriye can be added
  later.

### levant-arabia-06 – The Phoenician royal and funerary inscriptions
- **What it is.** The kings of Byblos and Sidon on their graves and gods:
  - Ahiram's curse on whoever opens his coffin;
  - Eshmunazar, "an orphan, son of a widow", asking that no violator have "a resting place with the Rephaim";
  - Kilamuwa, "father to some, mother to others";
  - Azatiwada of Karatepe, in whose days "a woman walked alone with her spindles".
- **Base.** Cooke and Wikipedia (open). Karatepe needs an open edition. If none is found, it stays in the corpus from DEAPS
  only after the user decides; otherwise it is left out.
- **Tools.** `stone_tools.py` translation mode, already set up for Punic.

### levant-arabia-07 – The Elephantine family and community archives
- **What it is.** Three dossiers of one garrison community, whole as found:
  - Mibtaḥiah's marriages, divorce clause, property and lawsuits;
  - the slave-woman Tamet and her husband Ananiah, their house and their daughter's marriage;
  - the community's letters: the Passover instructions, the plea after the destruction of the YHW temple, and the
    memorandum allowing meal-offering and incense.

  These are the records of ordinary people: love, money, status, and how a temple is lost.
- **Base.** Cowley (PD, page images) with DEAPS consulted.
- **Risk.** Legal formulae need a careful Hebrew register. Echo control is heavy, because this is Hebrew-adjacent legal
  language.

### levant-arabia-08 – The Cairn of Hāniʾ
- **What it is.** A man, Hāniʾ son of ʿqrb, died. His kinsmen and others built his cairn and carved about 200 inscriptions on
  it:
  - "he grieved for Hāniʾ, humbled by Fate";
  - "he built for his paternal uncle who had perished";
  - with prayers and other dead remembered.

  It is the single best natural whole the Safaitic corpus offers: a community mourning, in its own script.
- **Base.** The OCIANA Preliminary Edition (CC BY 4.0), with a transliteration and English for every text.
- **Risks.** The Safaitic lexicon is thin, and the edition's English must be checked, not copied (guidelines §3).
  Al-Jallad & Jaworska's *Dictionary* (©) is consulted per word. Al-Jallad 2022 (OA, CC BY-NC-ND) explains the rites.
- **Alternatives.** Another cairn ("Cairn 10", 366 records in the edition), or a lament corpus across the edition (1,080 *wgm*
  texts). A cross-edition selection is ours, not the culture's whole.

### levant-arabia-09 – The Haramic confession texts
- **What it is.** People of Haram set up a public confession to the god Ḏū-Samāwī: "I sinned, I lay with her while she was
  menstruating… and he struck me". Then they paid and were forgiven. It is the only first-person penitential genre of
  pre-Islamic Arabia, often a woman's voice.
- **Base without DASI.** The texts printed in CIH (CIS IV) and RES, both PD. Sabaweb's German context per word is the check.
  The list of sigla must be assembled from Sabaweb's attestations (root *ḥyḍ* gives CIH 523, 533, ...), not from DASI.
- **Risks.** The CIS IV text volumes vs. its "Atlas" plates on archive.org are not checked part by part. Sabaic is a new
  language with moderate LLM confidence.

### levant-arabia-10 – The Mufaḍḍaliyyāt
The oldest anthology of the poetry: outlaws (Taʾabbaṭa Sharran opens it), laments, raids, old age, women's voices. Lyall's
PD edition gives the Arabic, al-Anbārī's commentary and an English check. At 2,726 verses it is just under the LARGE line:
if verses are counted as hemistichs, the lead may treat it as LARGE (two halves of Lyall's order).

### levant-arabia-11 – The remaining Ugaritic ritual texts
- **What it is.** The king's liturgical calendar, as Ugarit performed it:
  - the vintage month, with the king's purification and the day of the full moon (1.41 + 1.87);
  - the gods brought into the palace (1.43);
  - offerings to each god by name.

  It completes the folder's ritual project (1.40, 1.119, 1.39).
- **Risk.** Lists with technical vocabulary; C4 is moderate.

### levant-arabia-12 – Ugaritic divination and horse medicine
- **What it is.** A "document of dreams" (1.86), birth omens on the Babylonian model (1.103), lunar omens, and the recipes
  for a sick horse (1.85): how Ugarit read signs and cured.
- **Risk.** The omen texts are partly broken, and 1.71 and 1.72 serve only as copies of 1.85.

### levant-arabia-13 – Karibʾil Watar's annals
- **What it is.** The Sabaean mukarrib's account of his campaigns: cities burned and peoples counted, lands given to Almaqah,
  and the federation sworn. It is the oldest long text of South Arabia, and the state ideology in its own words.
- **Base.** RES vol. VI (PD), with Sabaweb. Nebes's new editions are ©.
- **Risk.** Very long lines and Early Sabaic.

### levant-arabia-14 – The Hegra tomb inscriptions
The legal-religious façades of a Nabataean necropolis: who may be buried, the fines to Dushara and the king, the curses on a
violator. A whole set, dated by regnal years. Nabataean is Aramaic, so readable.

### levant-arabia-15 – Philo of Byblos
The only connected Phoenician cosmogony and culture-history: the wind and the primal chaos, *Mōt*, the inventors, El-Kronos.
It survives in Greek and through Eusebius, who quotes it hostilely (transmission E). Ugarit confirms some of the names.

### levant-arabia-16 – On the Syrian Goddess
A description of the temple of Hierapolis: its myths, the flood story of Deucalion told there, the self-castrated galli, the
pilgrims' tattoos and the hair offerings. The Greece-Italy survey assigned it here. Outsider-ethnography (E), though the
writer was Syrian.

### levant-arabia-17 – ʿEzana's inscriptions
War annals of a king who first calls himself "son of the invincible Maḥrem" and later thanks the "Lord of Heaven". It is
the first Geʿez text and the moment a culture changed its gods. Geʿez is new; Dillmann's *Lexicon* (PD) is on archive.org.

### levant-arabia-18 – al-Khansāʾ
The great woman lamenter of Arabia. Her elegies for her brothers are pre-Islamic in content and rite. The base edition is
still to be found (PD 19th-c. Beirut edition, not checked).

### levant-arabia-19 – The Six Poets
- **What it is.** The canon that Arabic schools taught for a millennium. It is LARGE in the OpenITI dīwāns; Ahlwardt's PD
  text is shorter and should be counted from its pages before a decision.
- **Parts.** Each poet's dīwān is a natural part. Imruʾ al-Qays and Zuhayr are the strongest.

### levant-arabia-20 – Hebrew letters of the last century of Judah
Officers, quartermasters and the tunnel-diggers in their own words, in the stone corpus's reading mode. It is weak on the
base: Lachish has no open edition found; Arad is in DEAPS only.

### levant-arabia-21 – Mara bar Serapion
A father's letter from prison to his son about wisdom, the fall of tyrants and the deaths of Socrates and Pythagoras. A
pagan Syriac voice, copied in a Christian manuscript. Syriac is a new language.

## Excluded

- **Tell Fekheriye alone** – 23 lines; only inside levant-arabia-05 (the user's ruling).
- **Deir ʿAllā, Khirbet el-Qom, Ketef Hinnom I, the Kuntillet ʿAjrud wall poem** – too short or damaged (the user's rule).
- **KTU 1.113 (the king list)** – about 14 lines of royal names behind a broken hymn (CUC: 26 lines, 15% heavy, most
  half-lost).
- **KTU 1.7** – 61% of its lines heavy (m).
- **KTU 1.8–1.13 (incl. 1.12 "Baal and the Devourers") and 1.148** – not in CUC; no open base.
- **KTU 1.71 and 1.72 alone** – damaged (66% and 40% heavy); only as copies of 1.85.
- **The god lists 1.47, 1.118, 1.102** – lists of names; no inner world beyond the order.
- **KTU 3 (legal texts, 35 tablets, 584 lines) and KTU 4 (administrative)** – documents with little inner world.
- **Hurrian texts from Ugarit (incl. the h.6 hymn)** – Hurrian is too poorly understood.
- **Ebla (ARET 5, 11, 13)** – EbDA's terms allow research use only (checked today). It is logographic and has no
  dictionary or tools; it could only be done from Fronzaroli's © translations.
- **Papyrus Amherst 63** – no open base (Steiner & Nims on Academia; van der Toorn paid); its Aramaic is reconstructed from
  Demotic.
- **The Arslan Tash amulets** – authenticity disputed.
- **Forgeries and hoaxes** – the Moussaieff ostraca, the Jehoash tablet, the ivory pomegranate, Wagenfeld's Sanchuniathon,
  Paraíba, Bat Creek, Los Lunas, the Mt Ebal "curse tablet".
- **The Tel Dan stele** – 13 broken lines.
- **Ammonite (Amman Citadel, Tell Siran) and Edomite (Horvat ʿUza)** – each under 10 lines.
- **The Ekron dedication, the Lachish comb, Proto-Sinaitic** – too short.
- **The Punic tophet stelae** – thousands of short formulae.
- **The Palmyrene Tariff and the Palmyrene and Hatran inscriptions** – administrative, or short epitaphs.
- **The Arshama letters, the Idumean ostraca, the Samaria papyri** – administrative; © editions.
- **The Hermopolis letters (TAD A2)** – a good family set, but no open base was verified (Bresciani & Kamil 1966 ©). If
  DEAPS editions become licensed, they could join levant-arabia-07.
- **Qumran Aramaic, the Targums, the incantation bowls, Syriac Christian texts** – Jewish or Christian scripture and its
  milieu; outside this region's brief.
- **Ibn al-Kalbī's *Kitāb al-Aṣnām*** – a 9th-century Muslim antiquarian's report, not a voice of the culture. The exception
  fails; it is apparatus for 02, 08 and 14.
- **Umayya b. Abī l-Ṣalt, ʿAdī b. Zayd** – authenticity in doubt; their themes were chosen for biblical lore.
- **The *kāhin* rhymed prose and the Ayyām al-ʿArab** – scattered, late-shaped, authenticity doubtful.
- **The *Ḥamāsa*** – a 9th-century anthology that mixes Islamic-era poets.
- **The Qāniya hymn and the Minaic confession texts of Barāqish** – only in post-2000 © editions and in DASI; no use
  without a DASI agreement.
- **The Minaean lists of foreign wives** – lists.
- **The OSA minuscule letters** – © editions (Stein); a hard script.
- **Dadanitic and Taymanitic** – short graffiti and dedications (the Nabonidus texts are a few lines each).
- **Thamudic B–D, Hismaic, Dumaitic, Hasaitic** – short.
- **Dhofari** – undeciphered.
- **ʿĒn ʿAvdat (6 lines) and Namāra (5 lines)** – too short. They could be appendices to 14.
- **The Himyarite monotheist and Jewish inscriptions (4th–6th c.)** – after a universal religion reshaped the culture.
- **Kaleb's inscription (6th c.), the Kebra Nagast, 1 Enoch, Jubilees** – late, Christian, or Jewish scripture.

## New languages

The folder has used Ugaritic, Hebrew/Moabite (as readings) and Punic, but none of the following.

- **Aramaic (Old, Imperial, Nabataean)** – needed by 01, 05, 07 and 14.
  - Bases: Cowley, Sachau, Cooke, Lidzbarski, CIS II (PD).
  - Lexicon: CAL, one entry at a time (curl gets a "do not scrape" page; WebFetch of single entries works). DEAPS
    per-word lexicon (consult).
  - Morphology: DEAPS's word analyses (consult). There is no open morphological layer to commit.
  - Confidence: **high** – close to Biblical Aramaic and Hebrew. The risk is echo control, not reading.
- **Phoenician** (06) – Punic's mother tongue; the stone corpus's Punic set-up carries over.
  - Lexicon: Krahmalkov (©, per word); Lidzbarski's glossary (PD).
  - Confidence: high to medium. There are no vowel letters, and the relative *ʾš* and the verb *kn* must be handled.
- **Classical Arabic** (02, 10, 18, 19).
  - Bases: Lyall 1894 and 1918–24, Ahlwardt 1870 (PD). OpenITI is for local checking only.
  - Lexica: Lane (ejtaal.net, hawramani); the ancient commentaries.
  - Morphology: none needed beyond the commentaries.
  - Confidence: **high** for the language, **medium** for the Bedouin lexicon.
  - Set-up: metre and hemistich handling in a new tool, and a Hebrew register decision.
- **Safaitic** (08).
  - Base: the OCIANA PDF (CC BY 4.0).
  - Lexicon: Al-Jallad & Jaworska 2019 (©, per word); Al-Jallad 2022 (OA).
  - Grammar: Al-Jallad 2015 (©).
  - Confidence: **medium-low**. The formulae are simple and every text has the editors' English. Use that as a check,
    never as the source.
- **Sabaic** (09, 13).
  - Bases: CIS IV, RES (PD).
  - Lexicon: Sabaweb (per word, German contexts). Beeston's *Sabaic Dictionary* (©; the archive.org "mo3sab" upload is
    unauthorized – not to be used).
  - Confidence: **medium-low**; the Haramic dialect is a further risk. **No DASI text without an agreement.**
- **Geʿez** (17).
  - Base: Littmann 1913 (PD in the US).
  - Lexicon: Dillmann 1865 (PD, archive.org); Leslau (©).
  - Confidence: medium.
- **Syriac** (21; and the later Ahiqar as an apparatus witness).
  - Base: Cureton 1855 (PD).
  - Lexicon: Payne Smith (PD); SEDRA (online, not checked).
  - Confidence: high.
- **Greek** (15, 16) – already set up (Hesiod); prose this time.

## Hosts

Hosts not in `domains.txt` that these runs would use:

- `sabaweb.uni-jena.de` – the Sabaic Online Dictionary (**http only**; https fails): per-word German contexts for 09 and 13.
- `ejtaal.net` and `arabiclexicon.hawramani.com` – Lane's *Arabic-English Lexicon* (scans and text): 02, 10, 18, 19.
- `ociana.osu.edu` – the live OCIANA records (later readings, cited, not bulk-copied): optional for 08. The base is on
  Zenodo, already allowed.
- `www.betamasaheft.uni-hamburg.de` – Geʿez reference (optional for 17; Dillmann is on archive.org).
- `dasi.cnr.it` – only if the user obtains a DASI agreement. It needs a browser (Anubis bot wall, 500 today).

Already allowed and used: `zenodo.org` (CUC, OCIANA), `raw.githubusercontent.com` (OpenITI, First1KGreek, Perseus),
`archive.org` (all PD bases), `deaps.osu.edu`, `cal.huc.edu`, `eupt.uni-goettingen.de`, `en.wikipedia.org`, `www.persee.fr`
(a person saves the PDFs).

Checked and not needed: `ebda.cnr.it` (reachable over http; its terms allow research use only).

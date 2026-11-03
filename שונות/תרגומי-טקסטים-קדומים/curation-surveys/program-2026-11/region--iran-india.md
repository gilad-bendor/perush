# Region survey – iran-india (2026-11-02)

Vedic and Classical Sanskrit, Pali and the Prakrits, Old Tamil; Avestan and Old Persian (Elamite and Middle Persian
only where the content is ancient). Sizes were **measured by script** on the downloaded bases unless marked `(r)`.
Scripts: `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/iran-india/scripts/`
(`rvcount.py` VedaWeb TEI → per-hymn stanzas and pādas; `avcount.py` GRETIL AVŚ; `upbold.py` / `upparts.py` the root
text inside Śaṅkara's commentary, GRETIL TEI; `cab2.py` the CAB Avestan corpus; `mbhcount.py` GRETIL MBh; `palicount.py`,
`tamcount.py`, `generic.py`). Per-hymn Rigveda tables: `…/curation/iran-india/rv_hymns_01.tsv` … `rv_hymns_10.tsv`;
MBh per adhyāya: `…/curation/iran-india/mbh_adhy.json`. Units: RV = pādas (the unit Round 7 used for Book 7); verse texts
= stanzas and half-verse lines; prose = sections, clauses (daṇḍa-separated) and words. The earlier survey's Bible
ratings are ignored throughout.

## Key findings
- **The Rigveda's ten books, measured (VedaWeb TEI, all ten downloaded today): 1,028 hymns, 10,552 stanzas, 39,832
  pādas.** Book 1: 191 hymns / 2,006 st / 7,745 pādas; 2: 43 / 429 / 1,694; 3: 62 / 617 / 2,357; 4: 58 / 589 / 2,247;
  5: 87 / 727 / 2,860; 6: 75 / 765 / 2,919; 7: 104 / 841 / 3,190 (approved, Round 7; the plan's "≈ 3,300" is 3,190);
  8: 103 / 1,716 / 6,064; 9: 114 / 1,108 / 3,760; 10: 191 / 1,754 / 6,996. **The five oldest family books (2–6) are each
  under 3,000 pādas – each is one whole book for one run, no approval needed** – and they are the region's strongest
  candidates on every criterion: the oldest stratum of Indian poetry, kept word for word (accents included) by the
  recited Śākhā. Books 1, 8, 9, 10 are `LARGE`; their natural parts (the poet collections of Book 1, the Vālakhilya of
  Book 8, the two halves of Book 10) are given below.
- **What India itself treasured, in its own order:** the Saṃhitās as recited (the Ṛgveda first; the Atharvaveda), the
  Brāhmaṇas and Upaniṣads (the "end of the Veda"), then the epics and the Gītā; for the śramaṇa traditions the Pali
  canon (Sutta Nipāta, Dhammapada, the Thera-/Therīgāthā, the Dīgha Nikāya) and the Jain Āgamas (Ācārāṅga I first).
  The folder holds excerpts of several of these; **"completing" candidates** are: RV 1 and RV 10 (1.32 and 12 hymns of
  Book 10 done), the AB's royal books 7–8 (7.13–18 done), ŚB Book 1 (1.2.3.6–9 and 1.8.1 done), MBh 3 (3.185 done), the
  Vīdēvdād (Vd 2 done) and **the Yasna as recited** (Round 7 takes the Old Avestan core; the Young Avestan liturgy around
  it, c. 12,300 words in CAB without repetitions, would complete it).
- **The principal Upaniṣads, measured from GRETIL's TEI (the root text marked inside Śaṅkara's commentary):**
  Bṛhadāraṇyaka 422 sections / 3,109 clauses / 19,536 words (`LARGE`; six adhyāyas 1,554–4,310 words); Chāndogya 761 /
  3,235 / 17,907 (`LARGE`; eight prapāṭhakas 2,012–2,573 words); Taittirīya 51 sections / 2,332 words; Aitareya 31 /
  912; Praśna 52 / 1,461; Īśa 18 stanzas / 331; Śvetāśvatara 113 st / 1,850; Māṇḍūkya 12 sections; Kena, Muṇḍaka and
  Kauṣītaki are on TITUS only (verified, local use). The nine short ones make one natural unit (Śaṅkara's canon).
- **The Atharvaveda Śaunaka, measured:** 20 books, 731 hymns, 5,838 stanzas, 11,387 half-verse lines (`LARGE`). The
  life-cycle books 14 (wedding, 139 st) and 18 (funeral, 283 st) are one run together and extend the folder's Yama and
  the dead project; books 1–7 are the short charms (2,029 st).
- **The epics, measured on GRETIL:** the Mahābhārata (BORI text) 73,438 ślokas in 18 parvans; the Rāmāyaṇa (Baroda text,
  TEI) 18,761 verses in 7 kāṇḍas (every kāṇḍa `LARGE`, 1,941–4,436 verses). Self-contained episodes under the limit:
  the Bhagavad Gītā 700, Nala 901, Sāvitrī 297, Śakuntalā 305, Ṛṣyaśṛṅga 101, the Strīparvan (a whole parvan) 730, the
  Sauptika 772, the last two parvans 300.
- **Pali and Jain:** SuttaCentral's bilara-data (Pali root + Sujato's English, **CC0**) answers on GitHub raw; the whole
  Dīgha Nikāya measured 141,565 words (DN 16 14,805; DN 27 2,864). The Sutta Nipāta (1,149 verses ≈ 4,600 pādas) and the
  Theragāthā (1,279 v) are `LARGE`; the Dhammapada (423 v) and the Therīgāthā (524 v) are not. The Jain Ācārāṅga I
  (GRETIL, c. 9,600 words) is the first text of a tradition the folder has not touched.
- **Old Tamil is reachable** (GRETIL / Project Madurai): Kuṟuntokai 401 poems, 2,455 lines (measured); Puṟanāṉūṟu 396
  poems, 5,497 lines (`LARGE`); Naṟṟiṇai, Akanāṉūṟu and Kalittokai are on Project Madurai (`www.projectmadurai.org`, not
  in `domains.txt`; Naṟṟiṇai verified). No open morphology or critical edition (Wilden's are ©; Tamilex in Hamburg is
  building a historical dictionary); the Tamil Lexicon (1924–36) is PD on archive.org and online at DSAL. **Claude's Old
  Tamil is the weakest reading in the region** (readable: low–medium): short poems keep errors local, but every poem
  needs the lexicon and a modern commentary.
- **Iran:** the CAB corpus (downloaded today) gives the Vīdēvdād whole: 22 fargards, 913 §§, 26,264 words (`LARGE`).
  The Yašts are in CAB too, but its "without repetitions" corpus mis-sizes some (Yt 19); their stanza counts below are
  Geldner's `(r)`. The Old Persian corpus is on TITUS (local use only): Behistun = 414 lines in five columns (96 / 98 /
  92 / 92 / 36, counted) + 98 lines of captions. Elamite and Middle Persian contribute no candidate (administrative, or
  redacted in the 9th c. CE under Islam).
- **Not reachable or not open:** a clean e-text of Aśoka's edicts (only Hultzsch 1925, a public-domain scan; no TEI corpus
  found); Kent's *Old Persian* (archive.org lending-only); DCS (connection reset today); ORACC (TLS); MPCD (418).

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| iran-india-01 | **Rigveda, Book 2, whole** (the Gṛtsamada family book: 43 hymns – Agni, Indra 2.12 "he, o people, is Indra", Bṛhaspati, Rudra 2.33, Varuṇa 2.28, the Āprī, the waters) | Vedic Sanskrit | c. 1500–1200 BCE | oral (verbatim, with padapāṭha); written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 1,694 pādas, 429 stanzas, 43 hymns (m) | good (perfect oral text) | VedaWeb TEI `rv_book_02.tei` (Zurich text + morphology CC BY 4.0; other layers CC BY-NC-SA), verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 |  |  |  |  |
| iran-india-02 | **Rigveda, Book 3, whole** (Viśvāmitra's book: 62 hymns; the Gāyatrī 3.62.10, the most recited verse in India; Viśvāmitra and the rivers 3.33) | Vedic Sanskrit | c. 1500–1200 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 2,357 pādas, 617 st, 62 hymns (m) | good | VedaWeb TEI `rv_book_03.tei`, CC BY 4.0 (Zurich), verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 |  |  |  |  |
| iran-india-03 | **Rigveda, Book 4, whole** (Vāmadeva's book: 58 hymns; Indra's birth 4.18, the soma-eagle 4.26–27, the Ṛbhus, Trasadasyu 4.42) | Vedic Sanskrit | c. 1500–1200 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 2,247 pādas, 589 st, 58 hymns (m) | good | VedaWeb TEI `rv_book_04.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 |  |  |  |  |
| iran-india-04 | **Rigveda, Book 5, whole** (the Atri book: 87 hymns; Varuṇa 5.85, the eclipse 5.40, Saptavadhri 5.78, the Maruts, Parjanya 5.83) | Vedic Sanskrit | c. 1500–1200 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 2,860 pādas, 727 st, 87 hymns (m) | good | VedaWeb TEI `rv_book_05.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 |  |  |  |  |
| iran-india-05 | **Rigveda, Book 6, whole** (Bharadvāja's book: 75 hymns; the cows 6.28, the weapons of war 6.75, Pūṣan, Sarasvatī 6.61) | Vedic Sanskrit | c. 1500–1200 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 2,919 pādas, 765 st, 75 hymns (m) | good | VedaWeb TEI `rv_book_06.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 |  |  |  |  |
| iran-india-06 | **The Yasna as recited: the Young Avestan chapters around the Gāthās** (Y 0–27, 52, 55–72: the opening invocations, the Hōm Yašt Y 9–11, the creed Y 12, the Ahuna Vairiia commentaries Y 19–21, the Srōš Yašt Y 57, the waters Y 65, the fire Y 62) | Young Avestan (+ Old Avestan core) | c. 900–500 BCE (YAv); the OAv core older | oral liturgy; Sasanian written archetype c. 5th–6th c. CE | mss 1323 CE (J2, r) | B | c. 12,300 words (m, CAB "without repetitions"; the recited text is longer) | good (text); fair (YAv grammar) | CAB basis edition, `get_corpus_plain.xql` (licence "CC", version not stated → local), verified 2026-11-02 | medium | 3 | 5 | 5 | 4 | 3 | LARGE | Y 0–8 opening (c. 4,000 w); Y 9–11 Hōm Yašt (1,632 w); Y 12–27 creed and Staota Yesniia frame (c. 2,840 w); Y 52, 55–61 (c. 1,570 w); Y 62–72 fire, waters, close (c. 2,190 w) (all m, CAB; Y 54.1 is one of Round 7's four prayers) |  | Round 7's Old Avestan project → the whole Yasna |
| iran-india-07 | **The Vīdēvdād, whole** (22 fargards: the sixteen lands, Yima, the earth's joy, contracts and assault, the corpse-demon and purification, the dog, the menstruant, the temptation of Zarathustra, the healing) | Young Avestan | c. 6th–4th c. BCE (redaction debated) | oral liturgy (the night Vīdēvdād rite); Sasanian archetype | mss 1323 CE (L4, K1, r) | B | 913 §§, 26,264 words (m, CAB) | good, with corrupt passages | CAB basis edition, local, verified 2026-11-02 (Geldner 1896, PD, archive.org) | medium | 3 | 4 | 4 | 5 | 3 | LARGE | Vd 1 (20 §§ / 459 w); 2 done (43); 3 (42 / 1,104); 4 (55 / 1,430); 5–9 corpse and purity (355 / 10,750); 10–12 (61 / 2,753); 13–15 the dog, women, children (125 / 3,210); 16–18 (105 / 2,363); 19 (47 / 1,234); 20–22 healing (60 / 1,790) (m) |  | Vd 2 (`הוודה-והאווסטה/3-המבול`) |
| iran-india-08 | **Rigveda, Book 10, whole** (191 hymns: cosmogony, the funeral and wedding hymns, Purūravas and Urvaśī 10.95, Vāc 10.125, the healing plants 10.97, the gambler) | Vedic Sanskrit | c. 1100–900 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 6,996 pādas, 1,754 st (m); 12 hymns done (580 pādas); 6,416 pādas left | good | VedaWeb TEI `rv_book_10.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 | LARGE | 10.1–84: 868 st / 3,487 pādas; 10.85–191: 886 st / 3,509 pādas (each half minus the hymns done) |  | `הוודה-והאווסטה/` projects 1, 5, 6 (10.10, 10.14–18, 10.34, 10.72, 10.90, 10.121, 10.129, 10.190) |
| iran-india-09 | **Rigveda, Book 1, whole** (191 hymns of nine poet collections; the riddle hymn 1.164, Uṣas 1.113, Śunaḥśepa's hymns 1.24–30) | Vedic Sanskrit | c. 1300–1000 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 7,745 pādas, 2,006 st (m); 1.32 done (60 pādas) | good | VedaWeb TEI `rv_book_01.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 5 | 3 | LARGE | 1.1–50 (599 st / 2,023 pādas: Madhucchandas 350, Medhātithi 433, Śunaḥśepa 325, Kaṇva 327 …); 1.51–191 by poet: Savya 288, Nodhas 296, Parāśara 242, Gotama 778, Kutsa 938, Kakṣīvant 601, Paruchepa 671, Dīrghatamas 960 (1.140–164), Agastya 948 (1.165–191) (pādas, m) |  | RV 1.32 (`2-אינדרה-והנחש`); the AB's Śunaḥśepa (1.24–30 are his hymns) |
| iran-india-10 | **Aitareya Brāhmaṇa, pañcikās 7–8, whole** (the royal consecration: the rājasūya, the Śunaḥśepa story in its ritual frame, Indra's great anointing, the king's purohita) | Vedic Sanskrit prose (+ old gāthās) | c. 8th–6th c. BCE | oral (Ṛgvedic Śākhā); written 2nd mill. CE | mss 2nd mill. CE (r) | B | 62 khaṇḍas (7: 34, 8: 28) of the AB's 285 (m, TITUS page count); 6 done | good | TITUS mirror (Aufrecht 1879; local use only; Aufrecht PD, Keith HOS 25 PD on archive.org), verified 2026-11-02 | high | 3 | 5 | 4 | 4 | 3 |  |  |  | AB 7.13–18 (`4-העקדה`) |
| iran-india-11 | **Śatapatha Brāhmaṇa, Book 1, whole** (the new- and full-moon offerings: the gods and asuras, Manu and the fish, the sacrificial essence passing from man to the animals) | Vedic Sanskrit prose (Mādhyandina) | c. 8th–6th c. BCE | oral; written 2nd mill. CE | mss 2nd mill. CE (r) | B | 817 kaṇḍikās, c. 18,700 words, 9 adhyāyas (m) | good (GRETIL has 15 "..." data-entry gaps in book 1; TITUS is complete) | GRETIL `sb_01_u.htm` (Weber; "reference only" → local) + TITUS (accented, local), verified 2026-11-02 | high | 3 | 5 | 4 | 3 | 3 | LARGE | 9 adhyāyas (c. 2,000 w each); the whole ŚB, kaṇḍikās by book (m, GRETIL; book 12 only on TITUS): 1 817, 2 548, 3 859, 4 648, 5 470, 6 529, 7 398, 8 437, 9 402, 10 369, 11 437, 13 430, 14 778 |  | ŚB 1.8.1 and 1.2.3.6–9 (`3-המבול`, `4-העקדה`) |
| iran-india-12 | **Bṛhadāraṇyaka Upaniṣad, whole** (Kāṇva: the horse-cosmos, the Self alone who split in two, Yājñavalkya and Maitreyī, the debates at Janaka's court, dreams and death) | Late Vedic Sanskrit prose | c. 7th–6th c. BCE | oral (ŚB 14); written 2nd mill. CE | mss 2nd mill. CE (r) | B | 422 sections, 3,109 clauses, 19,536 words (m) | good | GRETIL TEI `sa_bRhadAraNyakopaniSadkANva-recension-comm.xml`, CC BY-NC-SA 4.0, verified 2026-11-02 | high | 3 | 5 | 5 | 5 | 3 | LARGE | adhyāya 1 (653 clauses / 4,118 w); 2 (447 / 2,961); 3 (550 / 3,527); 4 (668 / 4,310); 5 (261 / 1,554); 6 (530 / 3,066) – the Madhu-, Yājñavalkya- and Khila-kāṇḍas = 1–2, 3–4, 5–6 |  |  |
| iran-india-13 | **Chāndogya Upaniṣad, whole** (the Sāman and the syllable, Uddālaka and Śvetaketu "you are that", Satyakāma, Indra and Virocana, the five fires) | Late Vedic Sanskrit prose | c. 6th c. BCE | oral (Sāmavedic); written 2nd mill. CE | mss 2nd mill. CE (r) | B | 761 sections, 3,235 clauses, 17,907 words (m) | good | GRETIL TEI `sa_chAndogyopaniSad-comm.xml`, CC BY-NC-SA 4.0, verified 2026-11-02 | high | 3 | 5 | 5 | 5 | 3 | LARGE | prapāṭhakas 1–8: 2,573 / 2,030 / 2,151 / 2,296 / 2,486 / 2,012 / 2,203 / 2,154 words (m) |  |  |
| iran-india-14 | **The other principal Upaniṣads, each whole**: Aitareya, Taittirīya, Kauṣītaki, Kena, Īśa, Muṇḍaka, Praśna, Māṇḍūkya, Śvetāśvatara (the Kaṭha is in Round 7) | Late Vedic / early Classical Sanskrit | c. 6th–2nd c. BCE | oral (each in its Śākhā); written 2nd mill. CE | mss 2nd mill. CE (r) | B (the Vedic ones) / D | c. 12,000–13,000 words (est.): Taittirīya 51 sections / 2,332 w, Aitareya 31 / 912, Praśna 1,461, Īśa 331, Śvetāśvatara 113 st / 1,850 w (m); Kauṣītaki 4 ch., Kena 35 sections, Muṇḍaka 64 st, Māṇḍūkya 12 (r) | good | GRETIL TEI (Taitt., Ait., Praśna, Īśa, Māṇḍ., Śvet.; CC BY-NC-SA 4.0) + TITUS (Kena, Muṇḍaka, Kauṣītaki; local), verified 2026-11-02 | high | 3 | 4 | 5 | 5 | 3 |  |  |  | the Kaṭha (Round 7) |
| iran-india-15 | **Atharvaveda (Śaunaka), whole** (charms against fever, worms, snakes and rivals; love and conception; the Earth hymn 12.1; Time; the Brahmacārin; the Vrātya; the wedding and the funeral books) | Vedic Sanskrit | c. 1200–900 BCE | oral (Śaunaka Śākhā); written 2nd mill. CE | mss 16th c.+ (r) | B | 731 hymns, 5,838 stanzas, 11,387 half-verse lines (m) | good | GRETIL `avs___u.htm` (Orlandi / Roth–Whitney; "reference only" → local; Whitney–Lanman 1905 PD), verified 2026-11-02 | medium–high | 4 | 5 | 4 | 5 | 3 | LARGE | books 1–7, the short charms: 437 hymns / 2,029 st / 4,040 lines (1: 153 st, 2: 206, 3: 230, 4: 324, 5: 376, 6: 454, 7: 286); 8–12 the long hymns: 1,526 st / 3,036 lines (12 incl. the Earth hymn: 303 st); 13 (187); **14 + 18, wedding and funeral: 422 st / 827 lines (one run)**; 15 Vrātya (141); 16–17 (123); 19 (453); 20 mostly RV (957) (m) |  | AV 14 + 18 beside `5-יאמה-והמתים` |
| iran-india-16 | **Rigveda, Book 8, whole** (the Kāṇva book: Indra, the Aśvins, Apālā 8.91, the gift-praises; the Vālakhilya 8.49–59) | Vedic Sanskrit | c. 1300–1000 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 6,064 pādas, 1,716 st, 103 hymns (m) | good | VedaWeb TEI `rv_book_08.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 4 | 3 | LARGE | 8.1–48 and 8.60–103 (5,750 pādas, splittable at 8.48/8.60); the Vālakhilya 8.49–59 (80 st / 314 pādas) (m) |  |  |
| iran-india-17 | **Rigveda, Book 9, whole** (the Soma Maṇḍala: 114 hymns to Soma Pavamāna; 9.112 "each of us has his own trade", 9.113 "make me immortal there") | Vedic Sanskrit | c. 1400–1000 BCE | oral; written c. 1000 CE | mss c. 11th–15th c. CE (r) | B | 3,760 pādas, 1,108 st, 114 hymns (m) | good | VedaWeb TEI `rv_book_09.tei`, CC BY 4.0, verified 2026-11-02 | high | 4 | 5 | 5 | 4 | 3 | LARGE | 9.1–67 (the gāyatrī hymns) and 9.68–114 – each under 3,000 pādas (per-hymn sizes in `rv_hymns_09.tsv`) |  |  |
| iran-india-18 | **The Yašts** (the hymns to the yazatas: Mithra Yt 10, the Glory and Yima's fall Yt 19, Anāhitā Yt 5, Tištrya Yt 8, the fravašis Yt 13, Vərəθraγna Yt 14, Aši Yt 17, Vayu Yt 15; with the Hādōxt Nask, the soul meeting its daēnā) | Young Avestan (Indo-Iranian myth) | c. 900–500 BCE (myth older) | oral; Sasanian archetype | mss 14th c.+ (r) | C | c. 1,007 stanzas in 21 Yašts (r, Geldner); CAB (m, without repetitions): Yt 10 129 st / 3,274 w, Yt 5 87 / 2,127, Yt 13 155 / 4,291, Yt 8 55 / 1,372, Yt 14 54 / 1,222, Yt 17 44 / 1,090, Yt 15 41 / 1,074, HN 1–2 55 / 1,743 | good, some corrupt passages | CAB basis edition (local), verified 2026-11-02; Geldner PD; Darmesteter SBE 23 PD | medium | 3 | 4 | 4 | 5 | 3 | LARGE | each Yašt is whole (r, Geldner stanzas): **Yt 10 Mihr 145**; **Yt 19 Zamyād 97**; Yt 5 Ābān 132; Yt 8 Tištar 62; Yt 13 Fravardīn 158; Yt 14 Wahrām 64; Yt 17 Ard 62; Yt 15 Rām 58; Yt 1 33, Yt 9 33, Yt 12 47, Yt 11 23, Yt 3 19, Yt 16 20, minor 2–15; the Hādōxt Nask 1–2 (55 §§, m) |  |  |
| iran-india-19 | **Sutta Nipāta, whole** (five vaggas: the Rhinoceros Sutta, the Aṭṭhakavagga and Pārāyanavagga – the oldest Buddhist poetry, quoted by name in the canon) | Pali | c. 5th–3rd c. BCE | oral (bhāṇakas); written Sri Lanka 1st c. BCE | mss 18th–19th c. (r) | B | 1,149 verses (r, PTS) ≈ 4,600 pādas + prose; 1,225 numbered units in GRETIL's BJT text (m) | good | SuttaCentral bilara-data (Mahāsaṅgīti root + Sujato English, **CC0**) on raw GitHub, verified 2026-11-02 (`snp4.1`); GRETIL BJT | high | 3 | 4 | 4 | 5 | 4 | LARGE | Uragavagga v. 1–221 (221); Cūḷavagga 222–404 (183); Mahāvagga 405–765 (361); **Aṭṭhakavagga 766–975 (210)**; **Pārāyanavagga 976–1149 (174)** (r, PTS) |  |  |
| iran-india-20 | **Dhammapada, whole** (26 vaggas of verse sayings) | Pali | c. 3rd c. BCE (sayings older) | oral; written 1st c. BCE | mss 18th–19th c.; the Gāndhārī version, birch bark, 1st–2nd c. CE (r) | B | 423 verses ≈ 1,700 pādas (r; GRETIL BJT 454 numbered units, m) | good | SuttaCentral bilara-data (`dhp1-20` …, CC0), verified 2026-11-02 | high | 3 | 4 | 5 | 5 | 4 |  |  |  |  |
| iran-india-21 | **Therīgāthā, whole** (73 poems of the first Buddhist nuns: Muttā, Kisā Gotamī, Paṭācārā, Ambapālī's ageing body, Subhā) | Pali | c. 5th–3rd c. BCE | oral; written 1st c. BCE | mss 18th–19th c. (r) | B | 524 verses in 73 poems (r) ≈ 2,100 pādas | good | SuttaCentral bilara-data (`thig1.1` …, CC0), verified 2026-11-02 | high | 3 | 4 | 3 | 5 | 4 |  |  |  |  |
| iran-india-22 | **Dīgha Nikāya, whole** (34 long discourses: the Brahmā's Net, the Fruits of Recluseship, the Great Final Nibbāna DN 16, the Aggañña DN 27 – the Buddhist Genesis) | Pali | c. 5th–3rd c. BCE (with later strata) | oral; written 1st c. BCE | mss 18th–19th c. (r) | B | 141,565 words in 34 suttas (m, bilara root; repetitions abbreviated) | good | SuttaCentral bilara-data (`dn1`–`dn34`, CC0), verified 2026-11-02 | high | 3 | 4 | 5 | 5 | 4 | LARGE | **DN 16 14,805 w**; **DN 27 2,864 w**; DN 2 6,993; DN 1 7,733; DN 14 8,476; DN 33 8,362; vagga 1 (DN 1–13) 44,301, vagga 2 (14–23) 52,682, vagga 3 (24–34) 44,582 (m) |  |  |
| iran-india-23 | **Ācārāṅga, Book I (Bambhacera), whole** (nine lectures: the six classes of living beings, non-violence, the monk's renunciation, and the Uvahāṇasuya – Mahāvīra's austerities, the oldest account of him) | Ardhamāgadhī Prakrit | c. 4th–3rd c. BCE | oral; written at Valabhī c. 453/466 CE (r) | mss 2nd mill. CE (r) | B | c. 9,600 words, 9 ajjhayaṇas (m words; units r); the Uvahāṇasuya 96 numbered verses (m) | good | GRETIL `2_prakrt/ayarangu.htm` (Schubring's text, input Ousaka–Yamazaki; "reference only" → local; Jacobi SBE 22 PD), verified 2026-11-02 | medium | 3 | 4 | 4 | 5 | 5 |  |  |  |  |
| iran-india-24 | **Kuṟuntokai, whole** (401 short love poems, each a speaker's voice in a coded landscape) | Old Tamil | c. 1st–3rd c. CE | anthologized c. 5th–8th c. CE; palm leaf | palm-leaf mss 17th–19th c.; printed 1915 (r) | C | 401 poems, 2,455 lines (m) | good | GRETIL / Project Madurai PM0110 (ISO romanization; "free distribution"), verified 2026-11-02 | low–medium | 2 | 3 | 4 | 5 | 5 |  |  | www.projectmadurai.org (optional), dsal.uchicago.edu |  |
| iran-india-25 | **Puṟanāṉūṟu, whole** (400 poems of the "outer" world: kings and war, hero stones, the widow, the bard's poverty, "every town is our town") | Old Tamil | c. 1st c. BCE–3rd c. CE | anthologized c. 5th–8th c. CE | palm-leaf mss 17th–19th c.; printed 1894 (r) | C | 396 poems, 5,497 lines (m; 267–268 lost) | good (two poems lost, some damaged) | GRETIL / Project Madurai PM0057, verified 2026-11-02 | low–medium | 2 | 3 | 4 | 5 | 4 | LARGE | poems 1–100 (1,583 lines); 101–200 (1,231); 201–300 (1,085); 301–400 (1,621) (m) | www.projectmadurai.org, dsal.uchicago.edu |  |
| iran-india-26 | **The Old Persian royal inscriptions, with Behistun (DB) as one whole** (Darius's account of his rise against "the Lie"; DNa, DNb – the king's ethics; DSf, DSe – Susa; XPh – the daiva inscription) | Old Persian (+ Elamite, Akkadian, Aramaic versions) | 520–338 BCE | the inscriptions themselves | DB 520–519 BCE; Aramaic DB papyrus c. 420 BCE | A | DB 414 lines in 5 columns (96 / 98 / 92 / 92 / 36) + 98 lines of captions (m); the corpus c. 1,430 lines on 110 TITUS pages (m, partial) | fair (DB col. V and parts of IV damaged; gaps restored from the other versions) | TITUS mirror Old Persian corpus (local use only), verified 2026-11-02; King & Thompson 1907 (archive.org `sculpturesinscri00brituoft`, PD) | medium–high | 3 | 5 | 3 | 3 | 5 |  |  | www.livius.org (rank 3, optional) |  |
| iran-india-27 | **Aśoka's edicts** (the 14 Major Rock Edicts + the two Kalinga edicts, the 7 Pillar Edicts, the minor rock edicts; the king's remorse after Kalinga, RE 13) | Aśokan Prakrits (Brāhmī; Kharoṣṭhī in the NW) | 268–232 BCE | the inscriptions themselves | the stones, 3rd c. BCE | A | c. 35 inscriptions, several versions each (r) | good to fair (per site) | Hultzsch, CII I (1925), archive.org `InscriptionsOfAsoka.NewEditionByE.Hultzsch` (PD mark), item verified 2026-11-02; NOT verified as e-text (scan only; no TEI corpus found) | medium | 3 | 5 | 2 | 4 | 4 |  |  | gandhari.org (the NW versions) |  |
| iran-india-28 | **The Bhagavad Gītā** (MBh 6.23–40, whole) | Epic Sanskrit | c. 2nd c. BCE–1st c. CE | oral bardic → the MBh's written redaction | mss 2nd mill. CE (r) | D | 700 verses, 18 adhyāyas (m) | good | GRETIL `mbh_06_u.htm` (BORI text; "reference only" → local), verified 2026-11-02 | high | 2 | 3 | 5 | 5 | 3 |  |  |  |  |
| iran-india-29 | **Nala and Damayantī and Sāvitrī** (MBh 3.50–78 and 3.277–283: two whole episodes of the forest book) | Epic Sanskrit | c. 300 BCE–300 CE | MBh redaction | mss 2nd mill. CE (r) | D | 1,198 verses: Nala 901 (29 adhy.), Sāvitrī 297 (7 adhy.) (m) | good | GRETIL `mbh_03_u.htm`, local, verified 2026-11-02 | high | 2 | 3 | 4 | 5 | 3 |  |  |  | MBh 3.185 (`3-המבול`) |
| iran-india-30 | **The Mahābhārata, whole** | Epic Sanskrit | c. 400 BCE–400 CE | redacted c. 4th c. CE | mss 2nd mill. CE (r) | D | 73,438 ślokas in 18 parvans (m) | good | GRETIL `mbh_01`–`18_u.htm` (BORI critical text), local, verified 2026-11-02 | high | 2 | 3 | 5 | 5 | 3 | LARGE | parvans (ślokas, m): 1 Ādi 6,958; 2 Sabhā 2,391; 3 Āraṇyaka 10,234; 4 Virāṭa 1,824; 5 Udyoga 6,063; 6 Bhīṣma 5,406; 7 Droṇa 8,152; 8 Karṇa 3,871; 9 Śalya 3,315; **10 Sauptika 772; 11 Strī 730**; 12 Śānti 12,808; 13 Anuśāsana 6,536; 14 Āśvamedhika 2,743; 15 Āśramavāsika 1,062; 16 Mausala 273; **17–18 the ascent and heaven 300**. Episodes: Gītā 700; Nala 901; Sāvitrī 297; Śakuntalā 1.62–69 305; Ṛṣyaśṛṅga 3.110–113 101; the Yakṣa's questions 3.297–298 102; the Rāmopākhyāna 3.257–276 727; the dicing 2.43–72 966; Vidura's counsel 5.33–40 530; the Anugītā 14.16–50 996 |  | MBh 3.185 |
| iran-india-31 | **The Rāmāyaṇa of Vālmīki, whole** | Epic Sanskrit | c. 5th c. BCE–1st c. CE (Bāla and Uttara later) | redacted early CE | mss 2nd mill. CE (r) | D | 18,761 verses, 606 sargas (m) | good | GRETIL TEI `sa_rAmAyaNa.xml` (Baroda text via J. Smith; CC BY-NC-SA 4.0), verified 2026-11-02 | high | 2 | 3 | 5 | 5 | 3 | LARGE | kāṇḍas (verses, m): Bāla 1,941 (76 sargas; 1.1–4, the frame and the birth of poetry: 176); Ayodhyā 3,160; Araṇya 2,060; Kiṣkindhā 1,987; Sundara 2,487; Yuddha 4,436; Uttara 2,690 – every kāṇḍa over 3,000 half-lines |  |  |
| iran-india-32 | **Hāla's Sattasaī (Gāhāsattasaī), the 700** (village love lyrics in two-line gāthās: the wife, the lover, the farmer's daughter, the rains) | Mahārāṣṭrī Prakrit | c. 1st–3rd c. CE (Sātavāhana court; compiled to c. 5th c.) | manuscript tradition (several recensions) | mss 2nd mill. CE (r) | D | 700 gāthās = 1,400 lines (m; Weber's 1–700; 999 in his full edition) | good | GRETIL `2_prakrt/halsatsu.htm` (Weber 1881, PD; input Ollett; "reference only" → local), verified 2026-11-02 | medium | 2 | 3 | 4 | 5 | 5 |  |  |  |  |

### iran-india-01 – Rigveda, Book 2
The smallest of the family books and the closest to the old core: Gṛtsamada's hymns to Agni and Indra (2.12, the creed
of Indra against the doubters: "he of whom they ask 'where is he?'"), Bṛhaspati opening the cave, Varuṇa the keeper of
order (2.28, a prayer against sin and bad dreams), Rudra asked for healing (2.33). The Veda as one poet family composed
and kept it, not a selection of favourites. Base: VedaWeb (Zurich morphology for every word, Grassmann lemmas, Geldner,
Griffith, Elizarenkova, strata); `vedic_tools.py convert` already reads `rv_book_NN.tei` – a run only adds the book's
UNITS. Dictionaries: Grassmann, Monier-Williams (csl-orig, local); Jamison's commentary (allowlisted). Risk: the
Ṛgvedic riddling; the same controls as Book 7. **Each of 01–05 is one run, and they share Book 7's renderings file: they
run one after another in `הוודה-והאווסטה/`, never side by side.**

### iran-india-02 – Rigveda, Book 3
Viśvāmitra's book: the fire-churning, Indra and the rivers that let the Bharatas cross (3.33, a dialogue with two
rivers), the Gāyatrī (3.62.10), recited at every dawn for three thousand years. Base and tools as 01.

### iran-india-03 – Rigveda, Book 4
Vāmadeva's book: Indra's strange birth through his mother's side and the poet's "I was Manu, I was the sun" (4.18,
4.26), the eagle who brought soma (4.27), the craftsmen Ṛbhus who became gods. Base and tools as 01.

### iran-india-04 – Rigveda, Book 5
The Atri family: Varuṇa who measured the earth (5.85, a confession), Atri freeing the sun from the demon of the eclipse
(5.40), the storm-gods, Parjanya's rain (5.83). Base and tools as 01.

### iran-india-05 – Rigveda, Book 6
Bharadvāja's book: the cows (6.28), the war-chariot and the weapons blessed one by one (6.75), Pūṣan the god of
roads, Sarasvatī the river. 2,919 pādas – the largest book still under the limit. Base and tools as 01.

### iran-india-06 – The Yasna as recited
The Yasna is the Zoroastrian liturgy itself, recited daily with the haoma rite; the Gāthās sit inside it. Round 7 takes
the Old Avestan core (Y 28–54); the rest is Young Avestan: the invocations of Y 1–8, the Hōm Yašt (Y 9–11: Haoma, Yima's
golden age, Θraētaona and the dragon), the creed Y 12, the commentaries on the Ahuna Vairiia (Y 19–21), the Srōš Yašt
(Y 57), the waters (Y 65). Base: CAB (the same corpus `vedic_tools.py ave` already queries; Bartholomae's lemmas online);
Geldner PD; Mills SBE 31 PD. Risk: CAB's corpus drops repetitions – the run must rebuild the liturgy's repeated blocks
(CAB's ritual editions do this) and decide how far to print them. Completes the Gāthās project into the text as its
culture knew it.

### iran-india-07 – The Vīdēvdād, whole
"The law against the demons": Ahura Mazdā answers Zarathustra on how to keep the good creation pure from the
corpse-demon – a world where death is pollution, the dog is holy and the farmer is righteous. Recited whole in a night
ceremony, so its text was kept. Base: CAB (Vd 1–22; Vd 2 done from it), Geldner, Darmesteter SBE 4 (PD); the Pahlavi Zand
on TITUS for Vd 10–15 and 19 (local). Risk: the Vīdēvdād's late, often ungrammatical Avestan; two review passes against
Darmesteter and the Zand. Natural run units: the parts listed.

### iran-india-08 – Rigveda, Book 10
The book of speculation and of life's rites; twelve hymns are done. Completing it is two runs (the halves), with the done
hymns embedded or pointed to. Base as 01.

### iran-india-09 – Rigveda, Book 1
Nine poet collections bound into one book; the riddle hymn of Dīrghatamas (1.164) and the Agastya collection (with
Lopāmudrā's dialogue 1.179) are its peaks. Its parts are the poets' own collections, so they are natural run units.
Base as 01.

### iran-india-10 – Aitareya Brāhmaṇa 7–8
Śunaḥśepa (done) is told at the king's consecration; pañcikās 7–8 give that rite whole: the rājasūya, the anointing of
Indra and of the human king, the oath of the king to his priest. Base: TITUS (local only; the only accessible e-text),
already converted by `vedic_tools.py`; Keith (HOS 25, PD) as rank 3.

### iran-india-11 – Śatapatha Brāhmaṇa, Book 1
The two ŚB excerpts already translated both lie in Book 1; the book whole is the ritualist's world in its first, most
narrative form. 817 kaṇḍikās (c. 18,700 words) is `LARGE`; its 9 adhyāyas are the parts. Base: TITUS (accented, local),
GRETIL (unaccented, with gaps), Eggeling SBE 12 (PD).

### iran-india-12 – Bṛhadāraṇyaka Upaniṣad
The oldest Upaniṣad: the Self that was alone, afraid, and split into man and woman; Yājñavalkya's debates and his
farewell to Maitreyī; the person in dreams and at death. Base: GRETIL TEI (the root text is the bold `<hi>` inside
Śaṅkara's commentary; extraction tested by `upbold.py`). A new extraction step for `vedic_tools.py`. `LARGE`: the three
kāṇḍas are the natural runs.

### iran-india-13 – Chāndogya Upaniṣad
The Sāmavedic Upaniṣad: the chant and the syllable, Uddālaka teaching his son ("you are that"), the boy Satyakāma whose
mother does not know his father, Indra's hundred-and-one years with Prajāpati. Base as 12; parts the 8 prapāṭhakas.

### iran-india-14 – The other principal Upaniṣads
Śaṅkara's canon of ten (with the BAU, CU and Kaṭha): prose Upaniṣads of the Ṛg- and Yajurveda (Aitareya's creation of
the world-man, Taittirīya's sheaths of the self, Kauṣītaki's journey of the dead to the moon) and the verse ones (Kena,
Īśa, Muṇḍaka, Praśna, Māṇḍūkya, Śvetāśvatara). Several are too short alone; as a set they are one run. Base: GRETIL TEI
for six, TITUS (local) for Kena, Muṇḍaka, Kauṣītaki (verified on its first pages).

### iran-india-15 – Atharvaveda (Śaunaka)
The Veda of the household: fevers, worms, jealous co-wives, love spells, childbirth, the Earth as mother (12.1), Time
(19.53–54), the student (11.5). The closest Indian counterpart to Maqlû and the Akkadian love incantations. Base: GRETIL
(text by book.hymn.stanza; "reference only" → local); the Paippalāda TEI (CC BY-NC-SA, verified) for variants. No
morphology in the base (DCS, which has one, reset the connection today): Whitney's grammar, Monier-Williams,
Whitney–Lanman (PD) as rank 3. `LARGE`; **the run unit to start with is books 14 + 18** (wedding and funeral), beside the
RV funeral hymns already done.

### iran-india-16 – Rigveda, Book 8
The Kāṇva poets: Indra and the Aśvins, the girl Apālā who cures her skin by soma (8.91), the gift-praises of patrons;
the Vālakhilya hymns 8.49–59 are a natural separate part. Base as 01.

### iran-india-17 – Rigveda, Book 9
All hymns to Soma as it is pressed and purified: the liturgy's core, and its end-hymns on the world of the immortal dead
(9.113). Barely `LARGE` (3,760); its two halves (gāyatrī and the rest) are under the limit. Base as 01.

### iran-india-18 – The Yašts
Hymns to the yazatas, full of old Indo-Iranian myth: Mithra of the contract with ten thousand eyes (Yt 10), the Glory
that fled Yima when he lied (Yt 19), Tištrya the white horse fighting the drought-demon (Yt 8), the river-goddess Anāhitā
(Yt 5), and – in the Hādōxt Nask – the soul at the bridge meeting its own conscience as a maiden. Each Yašt is whole;
Yt 10 and Yt 19 are the strongest first runs. Base: CAB (local); Geldner, Darmesteter SBE 23 (PD). Risk: corrupt passages,
an old dictionary (Bartholomae); CAB's corpus mis-sizes Yt 19 (one label swallows c. 11,900 words), so re-measure on
Geldner before planning.

### iran-india-19 – Sutta Nipāta
The oldest Buddhist poetry: the Rhinoceros Sutta ("wander alone like the rhinoceros horn"), the Aṭṭhakavagga that gives
up all views, the sixteen Brahmin students' questions in the Pārāyanavagga. Base: bilara-data (CC0, line-segmented with
English), PTS edition; dictionaries: PTS Pali–English (DSAL; PD), the Digital Pali Dictionary (dpd-db on raw GitHub;
licence to check). A new language (Pali) and a new corpus tool (from the bilara JSON). `LARGE` by pādas; the two old
vaggas together (384 v) are one run.

### iran-india-20 – Dhammapada
The most treasured Pali text: 423 verses in 26 chapters on the mind, heedfulness, death and the end of craving. Base as 19.

### iran-india-21 – Therīgāthā
The first anthology of women's voices in India: a wife freed from "mortar, pestle and a crooked husband", mothers who
lost their children, a courtesan describing her body growing old. Base as 19. Its sister text, the **Theragāthā**
(264 poems, 1,279 verses, `LARGE`; parts: the 21 nipātas, the 1–2-verse poems first), can follow it.

### iran-india-22 – Dīgha Nikāya
The long discourses, recited by their own bhāṇaka school: the Buddha's last journey and death (DN 16), his satire of
Brahmin cosmogony (DN 27), the rival teachers (DN 2), the sixty-two wrong views (DN 1). `LARGE` (c. 141,600 words);
DN 16 and DN 27 are each one run. Base as 19.

### iran-india-23 – Ācārāṅga I
The oldest Jain text: every element and plant is alive, so every act harms; the monk's renunciation; and Mahāvīra's
naked wandering, beaten by villagers and bitten by dogs. A new tradition and a new language (Ardhamāgadhī). Base: GRETIL
(local); Jacobi SBE 22 (PD); Sheth's *Pāia-sadda-mahaṇṇavo* (1928, PD on archive.org) and Monier-Williams through the
Sanskrit equivalents. Risk: Prakrit sandhi and Jain technical terms; the text is terse prose with verse.

### iran-india-24 – Kuṟuntokai
The finest single collection of Tamil love poetry: 401 poems, 4–8 lines each, each spoken by the heroine, her friend, the
hero, in one of five landscapes whose flowers, birds and seasons are a code for feeling. The first central text of a
culture the folder has never touched. Base: Project Madurai / GRETIL (romanized); Tamil Lexicon (DSAL; PD scan on
archive.org); Vaidehi Herbert's English (©, rank 3); Wilden's edition (©, not held). Risk: Claude's Old Tamil – the low
reading confidence must be visible in the apparatus; every poem checked word by word against the Lexicon and a modern
commentary.

### iran-india-25 – Puṟanāṉūṟu
The "outer" anthology: praise and rebuke of kings, the battlefield, the hero stone, the widow's austerities, the bard's
hunger. With Kuṟuntokai it gives the two halves of the Caṅkam world. `LARGE` (5,497 lines); parts by hundreds. Base and
risks as 24. Next in line, not in this table: Naṟṟiṇai (400 poems, Project Madurai PM0296, verified), Akanāṉūṟu (400,
r ≈ 7,000 lines), Aiṅkuṟunūṟu (500, r ≈ 2,250 lines), the Ten Idylls (r ≈ 3,550 lines).

### iran-india-26 – The Old Persian royal inscriptions
The only first-person voice of the Persian empire: Darius's story of Gaumāta and the nine liar-kings, his tomb's
confession of what a king should be (DNb), Xerxes suppressing the daivas. Small, well understood, original artifacts;
Behistun alone is a 414-line whole. Base: TITUS (local only); King & Thompson 1907 (PD) for all three versions;
Kent 1953 is lending-only (a gap); Schmitt 1991 / 2009 (©). A new language (Old Persian) and script; Livius's English as
rank 3.

### iran-india-27 – Aśoka's edicts
The first deciphered Indian writing: an emperor's remorse over a hundred thousand dead, his law of dhamma, hospitals for
men and beasts, tolerance of sects. The culture forgot them (the script was read again only in 1837), so C3 is low, but
they are contemporary artifacts. Base: Hultzsch 1925 (PD scan; no TEI corpus exists – a run keys one version, Girnār or
Kālsī, from the scan); gandhari.org for Shahbazgarhi and Mansehra. A new language (Aśokan Prakrit, regional variants).

### iran-india-28 – The Bhagavad Gītā
Kṛṣṇa's teaching to Arjuna on the battlefield: duty, action without attachment, the vision of the god as Time. A text
India read apart from its epic, taught and commented for 1,500 years. Base: GRETIL BORI text (local). In Hebrew already
(Theodor 2002), which plays no part in ranking.

### iran-india-29 – Nala and Sāvitrī
Two whole stories the epic tells in the forest: a king who gambles away his kingdom and wanders mad, and the wife who
finds him; a wife who follows Death and argues her husband back. Both completes MBh 3 a step beyond 3.185. Base as 28.

### iran-india-30 – The Mahābhārata
`LARGE` (73,438 ślokas). Proposed only through its parts: the women's lament over the battlefield (the Strīparvan, a whole
parvan of 730), the night massacre (Sauptika 772), the last journey (17–18, 300) are whole parvans under the limit.

### iran-india-31 – The Rāmāyaṇa
`LARGE` (18,761 verses); every kāṇḍa is itself over 3,000 lines. The self-contained opening (1.1–4: Nārada's summary,
the hunter who killed the crane and the birth of the śloka from grief; 176 verses) is the natural first part.

### iran-india-32 – Hāla's Sattasaī
Seven hundred two-line poems collected at the Sātavāhana court: a wife alone in the rains, a lover's lie, a village's
gossip – the most unguarded voices of ancient India. A new language (Mahārāṣṭrī); Weber's edition gives the text; Sheth's
dictionary and Weber's notes. Risk: the recensions differ beyond the core; take Weber's first 700.

## Excluded
- **Sāmaveda Saṃhitā** – all but c. 75 of its stanzas are Ṛgvedic; what it adds is the melody, which a translation cannot carry.
- **The Yajurveda Saṃhitās** (TS, VS, MS, KS; TITUS) – ritual formulas; a later candidate only: the Śatarudrīya (VS 16 / TS 4.5), a whole litany to Rudra.
- **The Śrauta- and Gṛhyasūtras** – technical ritual manuals; the Gṛhya life-cycle rites are a later companion to AV 14 + 18.
- **The Dharmasūtras** (Āpastamba 11,756 w, Gautama 5,402, Baudhāyana 15,581, Vasiṣṭha 7,395; GRETIL TEI, CC BY-NC-SA, verified) – below the cut (law and purity, c. 3rd–1st c. BCE); a later round.
- **Manusmṛti** (c. 2nd c. CE; GRETIL TEI) – later than the Dharmasūtras and `LARGE`; after them.
- **The Arthaśāstra** – statecraft manual, disputed date, little inner world.
- **The Paippalāda Atharvaveda** (GRETIL TEI, 7,674 stanzas, verified) – the second recension; for variants of 15, not a separate run.
- **The Jaiminīya, Pañcaviṃśa and Kauṣītaki Brāhmaṇas** – single myths only (short), the rest ritual; TITUS / GRETIL.
- **Kālidāsa** (Meghadūta 111 st, Śakuntalā, Kumārasaṃbhava; GRETIL TEI verified) – 4th–5th c. CE classical court poetry; a later round.
- **Aśvaghoṣa's Buddhacarita** – the Sanskrit survives for cantos 1–14 of 28 only; not whole in the original.
- **Uttarajjhāyā** (1,676 verses, m; `LARGE`), **Isibhāsiyāiṃ** (45 lectures), **Sūyagaḍa**, **Dasaveyāliya** (GRETIL) – Jain texts after the Ācārāṅga; a later round.
- **The Jātaka** – the prose is a 5th-c. CE commentary; only the verses are old.
- **The Gāndhārī Dharmapada and the Gāndhārī scrolls** – fragmentary.
- **Paripāṭal** (22 of c. 70 poems survive) and **Patiṟṟuppattu** (80 of 100; the first and last decades lost) – incomplete.
- **Kalittokai**, **Tirukkuṟaḷ**, **Cilappatikāram**, **Maṇimēkalai** – later layer (c. 5th–6th c. CE or after); the Kuṟaḷ is a later-round candidate.
- **Tolkāppiyam** – a grammar and poetics: a tool for the Caṅkam runs, not a candidate.
- **The Indus inscriptions** – undeciphered.
- **Elamite** (the Persepolis Fortification tablets; the Middle Elamite royal inscriptions) – administrative or poorly understood.
- **Middle Persian** (Bundahišn, Dēnkard, Ardā Wirāz, Zand ī Wahman Yasn) – redacted in the 9th–10th c. CE under Islam; **Draxt ī Asūrīg** and **Ayādgār ī Zarērān** – no open e-text found (not on TITUS; MPCD 418).
- **Manichaean, Sogdian, Bactrian, Khotanese texts** – a universal religion or later periods.
- **The Nīrangistān and Hērbedestān** – technical priestly law (CAB `N`, `H`).
- **The Purāṇas and the Harivaṃśa** – redacted after 300 CE (the Purāṇas later than 500 CE).
- **Forgeries**: the Bhaviṣya Purāṇa's "Adam and Noah", the Ezourvedam, the Dasātīr, Notovitch, the Vaimānika Śāstra.
- **The Hāthīgumphā and other short or damaged inscriptions** – too short or too damaged.
- **The philosophical sūtras** (Yoga, Nyāya, Brahma, Sāṃkhyakārikā) – short aphorisms that need a commentary.

## New languages
- **Pali** (19–22): base bilara-data (CC0, root + English, line-segmented); PTS Pali–English Dictionary (PD; DSAL); the
  Digital Pali Dictionary (dpd-db, raw GitHub, with inflection tables; licence to check); Geiger's grammar. Claude's
  reading: high (it is close to Sanskrit, the canon is formulaic and widely translated).
- **Ardhamāgadhī Prakrit** (23): base GRETIL; Sheth 1928 (PD); Pischel's grammar (PD). Reading: medium.
- **Mahārāṣṭrī Prakrit** (32): base GRETIL (Weber 1881); Sheth; Weber's notes. Reading: medium.
- **Old Tamil** (24–25): base Project Madurai / GRETIL; Tamil Lexicon (PD, DSAL); no open morphology or critical edition;
  Wilden's *Grammar of Old Tamil* (©). Reading: low–medium – the region's highest risk; a translator brief must set a
  word-by-word gloss gate and a rank-3 check on every poem.
- **Old Persian** (26): base TITUS (local; cuneiform + transliteration + normalization), King & Thompson 1907 (PD); no open
  Kent. Reading: medium–high (small, well-understood corpus).
- **Aśokan Prakrit** (27): base Hultzsch 1925 (PD scan; to be keyed); Reading: medium.
- (Vedic, Avestan and Epic Sanskrit are already set up in `הוודה-והאווסטה/`; Young Avestan beyond Vd 2 needs a renderings
  extension, not a new set-up.)

## Hosts
Hosts not in `domains.txt` (all answered 200 from this session today):
- `www.projectmadurai.org` – the Tamil anthologies not on GRETIL (Naṟṟiṇai PM0296, Akanāṉūṟu PM0490/0523/0534, Kalittokai PM0221); optional for 24–25.
- `dsal.uchicago.edu` – the Tamil Lexicon and the PTS Pali–English Dictionary online (per word).
- `suttacentral.net` – the SuttaCentral API (optional: bilara-data is on raw.githubusercontent.com, allowlisted).
- `gandhari.org` – the Gāndhārī versions of Aśoka's NW edicts and the Gāndhārī dictionary (27).
- `www.livius.org` – English of the Old Persian inscriptions (rank 3, optional, 26).
- `www.tamilex.uni-hamburg.de` – the Hamburg historical dictionary of Classical Tamil (to watch; not open data yet).
- `ada.geschkult.fu-berlin.de` – the Avestan Digital Archive (manuscript images; optional, 06–07, 18).
- Already allowlisted and used: `raw.githubusercontent.com` (VedaWeb, bilara-data, csl-orig, dpd-db), `gretil.sub.uni-goettingen.de`,
  `cab.geschkult.fu-berlin.de`, `titus.fkidg1.uni-frankfurt.de`, `archive.org`, `rigvedacommentary.alc.ucla.edu`.
- Failing today: `www.sanskrit-linguistics.org` (DCS; connection reset), `oracc.museum.upenn.edu` (TLS), `mpcorpus.org`.

Sources consulted by web search (2 of the 15 allowed): [gandhari.org on Aśoka's edicts](https://gandhari.org/blog/?p=190);
[Indology list, Asokan inscriptions online?](https://list.indology.info/pipermail/indology/2004-July/028425.html);
[SuttaCentral forum, Asokan edicts](https://discourse.suttacentral.net/t/asokan-edicts/14348);
[Tamilex, Akanāṉūṟu](https://www.tamilex.uni-hamburg.de/research/akananuru.html);
[Eva Wilden, Hamburg](https://www.aai.uni-hamburg.de/indtib/personen/wilden.html).

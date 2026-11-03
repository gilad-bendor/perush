# Region survey – the Americas (2026-11-02)

Mesoamerica (Classic Maya inscriptions; colonial K'iche', Achi, Kaqchikel, Yucatec; Nahuatl), the Andes (Quechua), lowland
South America (Guarani), North America. Survey agent `americas`, for the program of 2026-11 (`BRIEF.md`). It starts from
`../world-survey--americas--2026-10-21.md`. Its Bible ratings are ignored, and its facts are used only where they were
checked again today. Nothing from this region is translated or planned (STATUS §3; Rounds 6–7).
**Measured** (`(m)`) means counted today by a script on the downloaded base. Scratch work (downloads, counting scripts
`fc_count.py`, `pv_lines.py`, `cantares.py`, `cak.py`, `nahlines.py`, `gutbody.py`) is in
`/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/americas/`.

**How sizes are given.** A Florentine Codex manuscript column line holds about 4.7 word-pieces (about 4 words), and a
Cantares verse line about 4.6 words; Christenson's K'iche' poetic lines average 3.1 words (27,400 words in 8,717
lines). So **one MS column line or verse line counts as one line** for the `LARGE` threshold (about 3,000 lines). Where
only words could be counted (Achi, Kaqchikel), lines are estimated at about 3.1 words per line and marked "est.".

**The date rule here.** Every text below except the Classic inscriptions was written after 1520, and those inscriptions
are themselves after 500 CE. So every C1 is `1 EXC`, and the entries say how strongly the exception holds. That depends
on three things: whether the record comes from people still living in the pre-Christian world, or one generation from
it; how far Christianity reaches into the text; and what fossils, use and outside confirmation mark its old core. The
guidelines themselves name "the core of the Popol Vuh" as an exception case.

## Key findings

- **The two great centres are the K'iche' Popol Vuh and the Nahuatl "ancient word" (huehuetlatolli) of the Florentine
  Codex, Book 6.** Both are `LARGE`: the Popol Vuh is 8,717 poetic lines (m) and Book 6 is 11,612 MS lines (m). Both
  split into one-run parts. The Popol Vuh's mythic core is confirmed by older art: the bird-deity shooting at San
  Bartolo (c. 100 BCE) and the Hero Twins on Classic vases. That makes it the strongest exception in the region.
- **The Florentine Codex is fully open and countable.** It is on Zenodo 7213020 (CC BY 4.0, verified again; all 12
  books downloaded and measured). Books 3 (1,301 lines), 7 (1,186), 1 (1,251) and 5 (735) are whole books that each
  fit one run. Books 2, 4, 6, 10, 11 and 12 are `LARGE`.
- **The Cantares mexicanos are open in full, chapter by chapter, at IIH-UNAM** (León-Portilla et al. 2011:
  paleography and Spanish; "reproduction authorised for non-profit use, unaltered"). All 92 song-chapter PDFs were
  downloaded today: about 9,860 Nahuatl verse lines (m), so `LARGE`. Christian names (Dios, Santa María) occur in 65
  of the 92 chapters (m), so the exception is weak. The host needs a missing GlobalSign intermediate certificate. The
  2026-10-21 fix works again today, with verification fully on.
- **The Leyenda de los Soles is reachable only as photographs.** IIH-UNAM's 2019 *Códice Chimalpopoca* has
  Velázquez's Spanish translation (Leyenda 5,799 words; Anales de Cuauhtitlan 35,679 words, m) and a 57 MB facsimile.
  No open Nahuatl transcription was found. A run would re-transcribe from the photographs: high value, low
  readability.
- **The Rabinal Achí's Achi text is open and proofread** (Gutenberg 15309, Brasseur 1862: 9,379 words (m), about 3,000
  couplet lines, borderline `LARGE`). It is the least Christianised text in the region: a pre-contact dance-drama still
  performed.
- **The Classic Maya inscriptions are the only contemporary artifacts, but Claude cannot read glyphs.** Guenter's
  block-by-block edition of the Temple of the Inscriptions (Mesoweb, ©, free) has 617 blocks (m), of which 27 (4%)
  are unread. Stuart's Temple XIX edition is also there. A translation can only re-render a cited epigrapher's
  transliteration. Readability is low, and the codices (Dresden) are excluded.
- **The Andes' central text, the Huarochirí manuscript (Quechua, c. 1608), still has no open base.** BDH answers 403.
  Taylor and Salomon–Urioste are ©. The archive.org and blog PDFs of Taylor are unauthorised. It stays blocked: buying
  a copy is the user's call.
- **Guarani and North America:** the *Ayvu Rapyta* (USP PDF verified; © Cadogan heirs, local use only) and the
  Iroquoian texts (Hewitt 1903 and Hale 1883, PD) are open but late, outsider-recorded and low in readability. Several
  North American corpora are **restricted living ceremonial knowledge**: the Cherokee formulas, the Navajo chantways
  and the Zuni prayers are excluded (guidelines §2.3). The *Ayvu Rapyta* and the Iroquois Condolence are flagged for
  the user.
- **Beware:** archive.org item `popol-vuh-kiche-original-text` is Christenson's © transcription re-uploaded with a
  false "Public Domain" mark. It is not to be used.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| americas-01 | **Popol Vuh** (Popol Wuj, the K'iche' "Council Book"), whole | K'iche' Maya / colonial K'iche' | mythic core by c. 100 BCE–900 CE (San Bartolo, Izapa, Classic vases); lineage history 13th–16th c. | 1554–58 | Ximénez copy c. 1701–03 (Newberry Ayer MS 1515) | D | 8,717 poetic lines (m, Christenson's numbering); ~27,400 words (r) | good (one witness, complete) | Brasseur 1861, K'iche' + French, archive.org `popolvuhlelivres00bras_0` / `Ayer_F1465_P814_1861` (Newberry, open access), PD, verified 2026-11-02; control: Christenson `PV-Literal.pdf` + `PV-Original.pdf`, mesoweb (©, free, local only), verified 2026-11-02 | medium | 1 EXC | 2 | 5 | 5 | 5 | LARGE | I creation, failed peoples, flood ≈ 1–830; II Seven Macaw, Zipacna, Cabracan ≈ 830–1,730; III Hun Hunahpu, Xquic, the Twins in Xibalba, sun and moon ≈ 1,730–4,850 (~3,100; split at the Twins' own descent); IV maize people, the dawn, Tulan ≈ 4,850–6,500; V migrations, Q'umarkaj, lineages ≈ 6,500–8,717 (m, by the first lines of key names) | www.mesoweb.com, www.famsi.org | |
| americas-02 | **Florentine Codex Book 6: Rhetoric and Moral Philosophy** (the huehuetlatolli), whole | Nahua (Mexica) / Classical Nahuatl | pre-1521 ritual oratory | 1547 (per Sahagún) | Florentine Codex 1575–77 (Laurenziana, Med. Palat. 218–220) | E (verbatim, by Nahua scribes from elders) | 11,612 MS lines, 54,855 word-pieces (m), 43 chapters | good | Berthoud 2022, Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 5 | 5 | 5 | LARGE | chs 1–9 prayers (Tezcatlipoca, Tlaloc; confession) 2,108; chs 10–22 rulers' speeches, father and mother to son and daughter 3,903; chs 23–40 marriage, pregnancy, the midwife, birth, bathing 4,406; chs 41–43 adages, riddles, metaphors 1,184 (m, MS lines) | gdn.iib.unam.mx, nahuatl.wired-humanities.org | |
| americas-03 | **Florentine Codex Book 3: The Origins of the Gods**, whole | Nahua / Classical Nahuatl | pre-1521 myth | 1550s–60s | Florentine Codex 1575–77 | E | 1,301 MS lines, 5,525 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 4 | 5 | 4 | | | | |
| americas-04 | **Florentine Codex Book 7: The Sun, Moon, Stars and the Binding of the Years**, whole | Nahua / Classical Nahuatl | pre-1521 myth and rite | 1550s–60s | Florentine Codex 1575–77 | E | 1,186 MS lines, 4,884 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 4 | 4 | 4 | | | | |
| americas-05 | **Florentine Codex Book 1: The Gods**, whole | Nahua / Classical Nahuatl | pre-1521 | 1550s–60s | Florentine Codex 1575–77 | E | 1,251 MS lines, 5,779 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 3 | 4 | 3 | | | | |
| americas-06 | **Florentine Codex Book 5: The Omens** (with its appendix of "superstitions"), whole | Nahua / Classical Nahuatl | pre-1521 folk belief | 1550s–60s | Florentine Codex 1575–77 | E | 735 MS lines, 3,376 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 3 | 4 | 4 | | | | |
| americas-07 | **Florentine Codex Book 2: The Ceremonies**, whole | Nahua / Classical Nahuatl | pre-1521 calendar ritual | 1550s–60s | Florentine Codex 1575–77 | E | 5,879 MS lines, 28,253 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 4 | 4 | 3 | LARGE | the 18 monthly feasts and the movable feasts, each a self-contained chapter (about 150–400 lines; sizes not measured per chapter); appendix on the temples and offerings | | |
| americas-08 | **Florentine Codex Book 4: The Art of Divination**, whole | Nahua / Classical Nahuatl | pre-1521 divination (260-day count) | 1550s–60s | Florentine Codex 1575–77 | E | 4,647 MS lines, 23,690 word-pieces (m) | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 4 | 4 | 3 | LARGE | the 20 day-signs / trecenas with the fates of those born in them (about 230 lines each on average) | | |
| americas-09 | **Florentine Codex Book 12: The Conquest of Mexico**, whole | Nahua (Tlatelolco) / Classical Nahuatl | events 1519–21, told by survivors | 1550s | Florentine Codex 1575–77 | E | 4,738 MS lines, 26,191 word-pieces (m), 41 chapters | good | Zenodo 7213020, CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 2 | 3 | 4 | 3 | LARGE | chs 1–14 the omens and the approach; 15–27 Tenochtitlan and the temple massacre; 28–41 the siege and fall (chapter groups; not measured) | | |
| americas-10 | **Teocuicatl: the Twenty Sacred Hymns** (with their Nahuatl gloss) | Nahua / archaic liturgical Nahuatl | pre-Hispanic temple liturgy (15th c. or older) | 1558–61 (Primeros Memoriales, Tepepulco) | Primeros Memoriales (Madrid); FC Book 2 appendix | C (verbatim liturgy, recorded) | 20 hymns, c. 120 verses, ~1,500 Nahuatl words (m on 17 hymns of Brinton 1890) + the gloss | fair (obscure; copy variants) | Brinton 1890 *Rig Veda Americanus*, archive.org `libraryofaborigi08brinuoft`, PD, verified 2026-11-02; Garibay 1958 (IIH-UNAM, non-profit reproduction; host verified today, title not re-fetched) | low | 1 EXC | 4 | 5 | 4 | 4 | | | historicas.unam.mx | |
| americas-11 | **Cantares mexicanos**, whole (91 song sets + 1) | Nahua / Classical Nahuatl (song register) | genres pre-Hispanic; songs 15th c.–1580s | c. 1550s–1580s | BNM MS 1628 bis | E | ~9,860 Nahuatl verse lines, ~45,300 words (m, heuristic over 92 chapter PDFs) | good | León-Portilla et al. 2011, IIH-UNAM `publicadigital/libros/cantares/cm02.html`, `cm03.html` (paleography + Spanish; non-profit unaltered reproduction), verified 2026-11-02 (with the GlobalSign intermediate); PD alternatives: Brinton 1887 (27 songs, Gutenberg 12219, verified) and Peñafiel 1904 facsimile (archive.org `cantaresenidioma00peuoft`) | low | 1 EXC | 2 | 4 | 5 | 4 | LARGE | vol. II/1, ff. 1r–42r, cantos I–LIX: 4,722 lines; vol. II/2, cantos LX–XCII: 5,115 lines (m); each song set 20–300 lines (genres: spring, orphanhood, war, flower songs) | historicas.unam.mx (+ the GlobalSign intermediate) | |
| americas-12 | **Leyenda de los Soles** ("Manuscript of 1558"), whole | Nahua / Classical Nahuatl | pre-Hispanic cosmogony | 22 May 1558 (glossing a pictorial) | Codex Chimalpopoca (lost 1949); photographs | D | c. 900 lines est. (Velázquez's Spanish: 5,799 words, m) | fair (only photographs survive) | Velázquez 1945, *Códice Chimalpopoca*, IIH-UNAM 2019 PDF (facsimile + Spanish; non-profit reproduction), verified 2026-11-02 (Spanish section downloaded; facsimile 57 MB, HEAD 200). **No open Nahuatl transcription** (Paso y Troncoso 1903 not found online; Lehmann 1938, Bierhorst 1992, Tena 2011 ©) | low | 1 EXC | 3 | 4 | 5 | 5 | | | historicas.unam.mx | |
| americas-13 | **Anales de Cuauhtitlan**, whole | Nahua / Classical Nahuatl | cosmogony and Toltec cycle (pre-Hispanic) + year-annals to 1519 | c. 1570 | Codex Chimalpopoca (lost 1949); photographs | D | c. 5,000 lines est. (Velázquez's Spanish: 35,679 words, m) | fair | as americas-12, verified 2026-11-02 (Spanish 69 pp.) | low | 1 EXC | 3 | 3 | 3 | 3 | LARGE | the opening (the suns, the Topiltzin Quetzalcoatl cycle, about the first eighth); the year-annals (Toltec, Chichimec, Cuauhtitlan, Mexica) | historicas.unam.mx | |
| americas-14 | **Ruiz de Alarcón, the Nahuatl incantations** (*Tratado de las supersticiones*, 1629: all the charms) | Nahua (Guerrero, Morelos) / Nahuatl | pre-Hispanic charm genre (*nahualtocaitl*), in use 1610s–20s | 1617–29 | the 1629 MS (Mexico) | E | ~60 charms; ~5,200 Nahuatl words, ~1,100 lines est. (884 Nahuatl OCR lines, m, heuristic) | good (fair OCR) | Paso y Troncoso (ed.) 1892, *Idolatrías y supersticiones de los indios* (Anales del Museo Nacional 6), archive.org `idolatrasysupers00ponc`, PD, verified 2026-11-02 | medium | 1 EXC | 1 | 3 | 4 | 4 | | | | |
| americas-15 | **Rabinal Achí** (*Xajooj Tun*), whole | Achi Maya / Achi (K'iche'an) | pre-contact dance-drama (events 15th c.) | 1850 (Bartolo Sis) | Brasseur 1862 | C (living performed text) | 9,379 words (m) ≈ 3,000 couplet lines est.; ~40 numbered speeches (m) | good | Brasseur 1862, Achi text, Gutenberg 15309 (proofread from BnF images), PD, verified 2026-11-02 | low | 1 EXC | 3 | 4 | 4 | 4 | LARGE | (borderline) before the walls of Rabinal (speeches 1–~8, the challenge and capture); before Lord Five Rain (the captive's last wishes, the dance, the death), about half each | www.gutenberg.org | |
| americas-16 | **Annals of the Kaqchikels** (*Memorial de Sololá*, Xajil chronicle), Brinton's text §§1–164 | Kaqchikel Maya / colonial Kaqchikel | origin myth (Tulan, the obsidian stone), older; history 15th c.–1560 | 1571–1604 | 17th-c. copy (BnF) | D | ~14,600 Kaqchikel words (m, heuristic) ≈ 4,700 lines est.; 164 numbered paragraphs (m) | good (the OCR mangles Coto's letters) | Brinton 1885, archive.org `libraryofaborigi06brinuoft`, PD, verified 2026-11-02 | low | 1 EXC | 2 | 3 | 3 | 4 | LARGE | the origin from Tulan and the migration (the mythic core, the opening paragraphs); the kingdom and its wars; the plague of 1519–21 and the conquest (to be fixed by paragraph) | | |
| americas-17 | **Book of Chilam Balam of Chumayel**, whole (its Maya chapters) | Yucatec Maya / colonial Yucatec | katun lore from Postclassic books; colonial layers | 16th–18th c. | Hoil's copy 1782 (Princeton) | D | ~107 MS pages (r) | fair | Gordon 1913 photographic facsimile, archive.org `bookofchilambala00hoil`, `bookofchilambala05hofluoft`, PD, verified 2026-11-02 (**facsimile only**: Roys 1933 not open on archive.org; Edmonson 1986 ©) | low | 1 EXC | 2 | 4 | 4 | 5 | LARGE (probably) | the katun prophecies; the katun 11 Ahau creation and flood; the Language of Zuyua (riddles); the Itzá history; the Christian chapters are the later frame | | |
| americas-18 | **The Palenque inscriptions**: Temple of the Inscriptions tablets + Temple XIX platform + the Cross Group tablets | Classic Maya / Classic Mayan (logo-syllabic) | 692–736 CE (mythic dates back to 3000 BCE) | the same | the monuments | A | TI 617 glyph blocks (m); TXIX c. 220 blocks (m, approx.); Cross Group several hundred blocks (r) | good: TI 27 of 617 blocks unread (4%), 49 partly restored (m) | Guenter 2007, `mesoweb.com/articles/guenter/TI.pdf`, and Stuart 2005, `mesoweb.com/publications/Stuart/TXIX.s.pdf` (©, free; transliteration block by block), verified 2026-11-02; Cross Group: no open block-by-block edition verified | low | 1 EXC | 5 | 4 | 3 | 5 | | | www.mesoweb.com | |
| americas-19 | **The Huarochirí manuscript** (*Runa yndio ñiscap machoncuna*), whole | Andean (Checa, Huarochirí) / colonial Quechua | living huaca cult, pre-Inca to Inca layers | c. 1598–1608 | BNE MS 3169 (one MS, with corrections) | D | 31 chapters + 2 supplements (r); est. 15–20k words | good (r) | **NOT verified** (no open transcription: BDH 403; Taylor 1987/2008 and Salomon–Urioste 1991 ©; the archive.org and blog PDFs are unauthorised) | low | 1 EXC | 2 | 4 | 5 | 5 | LARGE (probably) | chs 1–8 (origins, Cuniraya, the flood, the sun's death, Huatyacuri); chs 9–18 (Pariacaca and his cult); chs 19–31 (other huacas, festivals, the dead); the supplements | bdh.bne.es | |
| americas-20 | ***Ayvu Rapyta*** (the Mbyá "foundation of speech"), whole | Mbyá Guarani / Mbyá Guarani | oral sacred speech of unknown age | 1940s–50s (dictated to Cadogan) | Cadogan 1959 | E | 19 chapters, ~1,900 Guarani verse lines (m, heuristic) | good (rough OCR) | Cadogan 1959, USP repository `bore.usp.br/.../ANTROPOLOGIA_N-5_1959.pdf`, © Cadogan heirs (openly hosted; local use only), verified 2026-11-02 | low | 1 EXC | 1 | 4 | 5 | 5 | | | bore.usp.br | |
| americas-21 | **Iroquoian cosmology, the Onondaga version** (Hewitt 1903) | Haudenosaunee / Onondaga | attested for the Huron 1623–36 (Sagard, Brébeuf) | dictated 1889 | Hewitt 1903 (BAE 21st Annual Report) | E | pp. 141–220, interlinear + free translation (r) | good (OCR poor in the native lines) | Hewitt 1903, archive.org `iroquoiancosmolo00hewi`, PD, verified 2026-11-02 | low | 1 EXC | 1 | 4 | 4 | 5 | | | | |
| americas-22 | **The Iroquois Book of Rites** (the Condolence: the Canienga and Onondaga books) | Haudenosaunee / Mohawk, Onondaga | the League's condolence rite (15th–16th c.) | written by Iroquois chiefs, 1830s–(r) | Hale 1883 | B | Canienga book pp. 116–139, Onondaga pp. 140–145 (r) | good | Hale 1883 (Brinton's Library 2), archive.org `libraryofaborigi02brinuoft`, PD, verified 2026-11-02 | low | 1 EXC | 3 | 5 | 4 | 4 | | | | |

### americas-01 – Popol Vuh
The K'iche' lords wrote it in the 1550s "under Christianity", because the old book "can no longer be seen". It holds
the world before creation ("only the sky alone… only the sea pooled"), the gods' three failed attempts at humankind
(the beings had to *speak and remember* the gods), and the Hero Twins' trial in Xib'alb'a, the house of death, where
cunning defeats death. Then come the maize people, whose sight the gods dim "as breath on a mirror", the weeping for
the first dawn, and the lineages.
**Exception:** strong. Its fossils are the couplet poetics, the paired divine names and the calendar names. The
outside confirmation is the San Bartolo West Wall (c. 100 BCE), the Izapa bird-deity scenes, and the Twins and the
maize god's rebirth on Classic vases. Christian influence (Vico's *Theologia Indorum*, 1553–54) is debated for the
creation-by-word framing, the Tulan language change and Xkik's conception. The frame is explicitly Christian; the core
is not.
**Base:** Brasseur's 1861 text (PD) is the committable base. Christenson's literal line-by-line (©, local only) is the
control, with his K'iche'–English dictionary (FAMSI) and Kaufman's PMED.
**Risks:** anchoring on Tedlock and Christenson; Brasseur's orthography and word division. The run makes its own
normalised text keyed to Christenson's line numbers (references only).
**Run:** `LARGE`, so the user approves. Parts I+II (about 1,730 lines) make a natural first run.

### americas-02 – Florentine Codex Book 6
The huehuetlatolli ("the ancient word"): prayers to Tezcatlipoca in plague and war, confession before Tlazolteotl,
the speeches at a ruler's installation, and a father's and a mother's counsel to their daughter ("the earth is
slippery"). Then the midwife's words to the newborn ("you have come to suffer"), and the adages, riddles and metaphors.
It is the clearest view in the Americas of how these people prayed, raised their children and faced death.
**Exception:** holds. The informants were elders formed before 1521, and the formal oratory is verbatim: its fossils
are the difrasismos, the reverential forms and the formulaic openings. Sahagún's selection and some Christian glosses
are visible and separable.
**Base:** Zenodo (CC BY 4.0, a diplomatic transcription with MS line breaks; it needs a normalising pass).
**Tools:** the Gran Diccionario Náhuatl (Molina, Carochi and others), the Wired Humanities dictionary, the Axolotl
parallel corpus.
**Risks:** anchoring on Dibble–Anderson. Difrasismos are to be rendered literally and explained.
**Run:** `LARGE`; the four parts above each make one run (parts 2 and 3 are near 4,000 lines; split at ch. 17 and
ch. 32 if needed).

### americas-03 – Florentine Codex Book 3
Huitzilopochtli's birth at Coatepec (Coatlicue, Coyolxauhqui and the 400 Huitznahua), Tezcatlipoca's tricks, the fall
of Quetzalcoatl at Tollan, and the appendix on where the dead go (Mictlan, Tlalocan, the sun's house) and on the
schools. It is the Mexica state myth and their eschatology in one book. One run, 1,301 lines. It pairs naturally with
americas-04 and americas-10 (a "Mexica gods" run of about 2,700 lines).

### americas-04 – Florentine Codex Book 7
The gods gather in darkness at Teotihuacan and ask "who will carry the burden, who will be the sun?". Nanahuatzin leaps
into the fire, a rabbit dims the moon, and the wind sets them moving (ch. 2, about 330 lines). The book also holds the
stars, the eclipses, and the New Fire ceremony that "binds the years" every 52 years: the fear that the world ends. One
run.

### americas-05 – Florentine Codex Book 1
The gods' portraits, with their attributes and feasts. Its appendix is a **Christian refutation in Nahuatl**
(Sahagún's), which a run must mark as the later frame or leave out by decision. It is weaker on the inner world than
Books 3 and 7, but a whole small book.

### americas-06 – Florentine Codex Book 5
Omens (the owl, the weasel, the night-axe sound) and the "superstitions": what a household feared. These are
unguarded voices of daily belief. It is small (735 lines) and could be added to a Book 3 + 7 run.

### americas-07 – Florentine Codex Book 2
The eighteen monthly feasts, their sacrifices, songs and processions, and the temple precinct: the ritual year in
full. It is `LARGE`, and each feast chapter is self-contained. The twenty hymns are not in this transcription (see
americas-10).

### americas-08 – Florentine Codex Book 4
The 260-day count and the fates of those born under each sign. This is fate, luck and character as the Nahua saw them.
It is `LARGE` in 20 natural parts.

### americas-09 – Florentine Codex Book 12
The conquest from the Tlatelolco side: the omens, the temple massacre, the siege and its lament. The exception is weak
here: it is the end of the ancient stage, told one generation later by its survivors. It ranks below the books on the
old world.

### americas-10 – Teocuicatl, the twenty sacred hymns
The temple hymns to Huitzilopochtli, Tlaloc, the mother goddesses, Xipe, Xochipilli and the gods of wine. Sahagún left
them untranslated as "the devil's songs", and his own informants glossed them with difficulty. That difficulty is the
best fossil in the region (C2 4). The corpus is small but one whole cycle.
**Base:** Brinton 1890 (PD: text + gloss), checked against Garibay 1958 (IIH-UNAM) and Seler 1904 (German).
**Risks:** heavy uncertainty, vocables, and corrupt copies. Every line needs its uncertainty mark.

### americas-11 – Cantares mexicanos
"Flower and song": transience ("not forever on earth, only a little while here"), friendship, war as flowery death,
and the orphan songs after the conquest. It is the richest lyric voice of the Americas.
**Exception:** weak. Most songs were composed or reshaped after 1521 (Bierhorst's "ghost songs" thesis against
León-Portilla), and Christian names occur in 65 of 92 chapters. The old core is the genres, the imagery and the
refrains, not the individual songs.
**Base:** the IIH paleography and Spanish (non-profit use; keep local). The attributions to named poets
(Nezahualcoyotl) are headings, not authorship.
**Run:** `LARGE`; vol. II/1 and II/2 are each above 4,700 lines, so a run takes a song-genre selection or about 25
songs per part.

### americas-12 – Leyenda de los Soles
The four destroyed suns. Then the flood, whose survivors' fish-smoke *angers* the gods, who turn them into dogs.
Quetzalcoatl steals the bones from Mictlan and bleeds on them to make humankind ("deserved" by penance). Then the
theft of maize and the birth of the fifth sun. It is the least Christianised Nahuatl cosmogony (exception strong:
written from a pictorial; no Christian elements noted).
**Blocker:** the Nahuatl exists only in photographs. A run must paleograph about 10 facsimile pages, checking against
Velázquez's paragraph-by-paragraph Spanish (and locally against Bierhorst / Tena if obtained). High value; readability
low until a transcription exists. A good small project if the user accepts our own paleography.

### americas-13 – Anales de Cuauhtitlan
The Toltec Quetzalcoatl cycle and the suns, then year-by-year annals. It is mostly historical. Only the opening ranks
high, and the whole is `LARGE` and photograph-only (as americas-12).

### americas-14 – Ruiz de Alarcón's incantations
Charms for hunting, fishing, wood-cutting, love, childbirth, fever and scorpion sting. Tools and illnesses are
addressed by hidden names ("I myself, the priest, the lord of spells"). It is a pre-Hispanic genre still in use a
century after the conquest, with almost no Christian matter. The exception holds moderately: it comes from
practitioners' confessions to an extirpator (C2 1).
**Base:** PD 1892 (OCR fair; re-check against the page images). Alarcón's Spanish paraphrases help control.

### americas-15 – Rabinal Achí
A captured K'iche' warrior and his Rabinal captor exchange formal speeches. Each repeats the other's words before
answering. The captive asks for his last wishes (to drink, to dance with the Mother of Quetzal Feathers, to see his
mountains and valleys) and dies. These are honour, homesickness and dignity before death.
**Exception:** holds well. It is a pre-contact genre performed without a break, there is no Christian content, and
its formulae ("o sky, o earth") and couplets are fossils. Its wars are confirmed in the K'iche' títulos and the Popol
Vuh.
**Base:** Brasseur's Achi text (PD, proofread on Gutenberg).
**Risks:** Brasseur's orthography, and there is no open literal translation (Tedlock 2003, Breton 1994 ©). The K'iche'
tools of americas-01 apply. It is best done after the Popol Vuh.

### americas-16 – Annals of the Kaqchikels
The origin from Tulan, the obsidian stone Chay Abaj, the crossing of the sea, the migration, the wars, and the
epidemic of 1519–21 ("great was the stench of the dead"). Only the opening is mythic: the exception covers that part
alone. Brinton's OCR turns Coto's special letters (tresillo, cuatrillo) into `^-` and `£`, so the text must be
re-keyed from the page images. It is `LARGE` and low in readability.

### americas-17 – Chilam Balam of Chumayel
The katun prophecies ("in 11 Ahau…"), the cosmogony of the defeat of the Thirteen by the Nine, the fallen sky, the
flood and the four coloured world-trees, and the riddles of Zuyua. It mixes these with Christian chapters. The
exception covers the katun and cosmogony chapters only.
**Base:** only the 1913 facsimile (images of an 18th-c. hand), so a run means paleography. Roys 1933 (US status
unverified) is not reachable. Readability low: record it for a later, better base.

### americas-18 – The Palenque inscriptions
They are the only contemporary texts of the region, written by a culture wholly in its own world. The Temple of the
Inscriptions is the longest legible Maya text: Pakal's k'atun rites and the Triad's gifts. Temple XIX tells GI's
accession under Itzamnaaj and the beheading of the cosmic caiman. The Cross Group gives the births of the gods before
the era.
**Honestly:** Claude cannot read Maya glyphs from images with control. It can only re-render a published,
block-by-block transliteration (Guenter, Stuart; © free PDFs, local only), cite every reading, and mark contested
blocks. A Hebrew version would be a translation of the epigraphers' readings, not an independent reading.
**Content:** much of it is calendrical and dynastic (C4 3).
**Run:** one run (TI + TXIX ≈ 840 blocks), if the user accepts that dependence.

### americas-19 – The Huarochirí manuscript
The Andes' one long native-language religious text: Cuniraya and the fruit-child, the llama-warned flood, the
five-day death of the sun, poor Huatyacuri's contests, Pariacaca born from five eggs, the female huaca Chaupiñamca,
and the dead who return after five days.
**Exception:** holds. It was written from a living cult about 70 years after contact, in its own language. The
author's Christian asides are separable.
**Blocked:** there is no open base. BDH (MS 3169) refuses scripts, so a person would have to save the facsimile. Or
the user buys Taylor 2008 / Salomon–Urioste 1991 (the text is 1608 and PD; the editions are ©).

### americas-20 – Ayvu Rapyta
Ñamandu unfolds himself in the primal darkness and, before the earth, creates "the foundation of human speech", then
love, then the sacred hymn. The soul is a "word-soul" that stands up in the child. These are then the first earth and
its flood.
**Exception:** weak and contested. The words were recorded in the 1940s after four centuries of contact (Jesuit
reductions nearby, though the Mbyá avoided them). There is no outside confirmation, and the recording is an
outsider's (C2 1).
**§2.3 flag:** these were esoteric "beautiful words" given to Cadogan as an initiate, and the Mbyá are a living
people. Their own use is public now (republished in Paraguay), but **the user decides**. © Cadogan heirs: local use
only.

### americas-21 – Iroquoian cosmology (Onondaga)
Sky Woman falls from the sky world past the uprooted tree. The animals dive for earth, which is spread on the
Turtle's back. The twins create and counter-create. The core is attested in the 1630s Jesuit Relations. Onondaga is
unread by Claude, so the run would work through Hewitt's word-by-word interlinear, said so in `project.md`.
Readability low.

### americas-22 – The Iroquois Book of Rites
The Condolence ("Requickening"): wiping the mourners' eyes, clearing their ears and throat, the roll call of the
founders. It was written in Mohawk by Iroquois chiefs themselves, so C2 is better than Hewitt's. It is small and
whole.
**§2.3 flag:** a living ceremony performed at every raising of chiefs; ask the user. Readability low
(interlinear-dependent).

## Excluded
- **Christenson's K'iche' text as the committed base**: © (local control only); the archive.org item `popol-vuh-kiche-original-text` is an unauthorised re-upload falsely marked PD.
- **Título de Totonicapán, Título de Yax and the other títulos**: their creation section is copied from Vico's *Theologia Indorum* (Christian); reception only.
- **Theologia Indorum (Vico), Psalmodia christiana, the Nahuatl catechisms**: Christian works.
- **Romances de los señores de la Nueva España**: no open base (Garibay 1964, Bierhorst 2009 ©).
- **Bautista's *Huehuetlatolli* (1600), the *Coloquios* (1564)**: Christianised or reconstructed; no open base checked; Book 6 is the stronger text.
- **Historia Tolteca-Chichimeca, the Annals of Tlatelolco, Chimalpahin, the *Crónica Mexicayotl***: historical and late; no open Nahuatl base (the archive.org copies are lending-only or unauthorised).
- **Florentine Codex Books 8–11** (kings, merchants, the people, earthly things): `LARGE` and mostly social or natural history; Book 10 ch. 29 (the peoples' origins) could be an annex to Book 3 later.
- **Brinton's *Maya Chronicles* (u kahlay katunob)**: short historical katun counts; little inner world.
- **The Chilam Balam books of Tizimin, Maní, Kaua, Ixil**: no open transcription; largely parallel to Chumayel.
- **The Dresden, Madrid, Paris and Grolier codices**: no continuous text (captions of a few blocks); the readings exist only in the Maya Codices Database (mayacodices.org: connection fails); a glyph reading from images is not controllable.
- **Other Classic Maya texts** (Tikal Stela 31, Quiriguá Stela C, the Vase of the Seven Gods K2796, Tortuguero Mon. 6): short, or political; the Copán Hieroglyphic Stairway is jumbled and damaged.
- **Ritual of the Bacabs; Songs of Dzitbalché**: no open base (Roys 1965, Arzápalo 1987, Barrera Vásquez 1965 ©; the USF copy of Roys is withdrawn).
- **The Mixtec and Borgia-group codices**: pictorial, not texts.
- **Zapotec Villa Alta songs (1704)**: no open corpus (Tavárez 2022 ©); Northern Zapotec unreadable.
- **Isthmian (Epi-Olmec), Zapotec glyphs, Teotihuacan, khipus**: undeciphered.
- **Molina's Quechua prayers (1575) and Santa Cruz Pachacuti's hymns (c. 1613)**: very short and corrupt; at most an appendix to americas-19.
- **Guaman Poma (1615)**: mostly Spanish and Christian.
- ***Ollantay***: an 18th-c. colonial drama.
- **Betanzos, Cieza, Sarmiento, Garcilaso, the *Historia de los mexicanos por sus pinturas*, the *Relación de Michoacán***: not in the original language.
- **Aymara**: no early native text of size.
- **Cherokee Sacred Formulas (Mooney 1891)**: restricted medicine knowledge of a living tradition (§2.3).
- **Navajo Night Chant (Matthews 1902) and the other chantways**: living ceremonial knowledge held by singers (§2.3).
- **Zuni origin myths and ritual poetry (Bunzel 1932)**: Zuni religious knowledge is restricted (§2.3).
- **Osage rites (La Flesche 1921–30)**: sacred rites of a living nation; late; Osage unreadable (§2.3: ask before any use).
- **Kuna *Mu-Igala***: © (Holmer & Wassén 1953) and a living healers' chant (§2.3).
- **Northwest Coast, Plains, Subarctic and Inuit text collections (Boas, Swanton, Sapir, Bloomfield, Deloria, Thalbitzer)**: recorded 1890s–1930s from cultures long in contact; readable only through the editors' interlinear; no single central text.
- **Nimuendajú 1914 (Apapocúva), Lenz (Mapuche), Gusinde (Selk'nam, Yámana)**: German or Spanish with fragments, or late.
- **Walam Olum; the Los Lunas "Decalogue", Bat Creek, Kensington and the other "Old World" inscriptions; the "Nezahualcoyotl poems" as authored works**: hoaxes or false attributions.
- **The Getty Digital Florentine Codex**: TLS fails from here; licence unverified (Zenodo suffices).

## New languages
- **Classical Nahuatl** (americas-02 to -14). Bases: Zenodo FC (CC BY 4.0); IIH-UNAM paleographies; PD 1890s editions. Dictionaries: the Gran Diccionario Náhuatl (`gdn.iib.unam.mx`: Molina 1571, Carochi, Olmos and 20+ more), the Wired Humanities Online Nahuatl Dictionary, Karttunen 1983 (©, print). Corpus: Axolotl (Nahuatl–Spanish parallel). There is no morphological analyser in the folder: the run builds a glossary and a difrasismo list. The FC transcription needs a normalisation pass (MS line breaks split words). Confidence: **medium** for prose (Books 3, 5, 6, 7), **low** for song and hymn (Cantares, Teocuicatl).
- **Colonial K'iche' and Achi** (americas-01, -15). Bases: Brasseur 1861 / 1862 (PD). Control: Christenson's literal text and dictionary (©, local), Kaufman's PMED (FAMSI). No morphology. Confidence: **medium** with Christenson's line-by-line; **low** for Achi without it.
- **Colonial Kaqchikel** (americas-16). Base: Brinton 1885 (re-key the special letters). Tools: Coto's *Thesaurus verborum* (©, print), the PMED. Confidence: **low**.
- **Colonial Yucatec** (americas-17). Base: facsimile only. Tools: the Cordemex dictionary (print), Bolles's compilation (FAMSI URL dead). Confidence: **low**.
- **Classic Mayan (glyphic)** (americas-18). Bases: the published transliterations (Guenter, Stuart; © free). Tools: Boot's vocabulary (Mesoweb), the Montgomery dictionary (FAMSI), the TWKM sign catalogue (classicmayan.org; the corpus is not public). Confidence: **low**; never from images.
- **Colonial Quechua** (americas-19). Base missing. Tools: González Holguín 1608 and Santo Tomás 1560 (PD), runasimi.de. Confidence: **low to medium**.
- **Mbyá Guarani** (americas-20). Base: Cadogan 1959 (©; rough OCR, re-key from images). Tools: Montoya's *Tesoro* 1639 (PD), Dooley's Mbyá dictionary (SIL, reported), Cadogan's own notes. Confidence: **low to medium**.
- **Onondaga, Mohawk** (americas-21, -22). Bases: Hewitt, Hale (PD). Only the editors' interlinear glosses are available. Confidence: **low** (a translation through the gloss, to be stated).

## Hosts
Not in `domains.txt` (archive.org, zenodo.org and en.wikipedia.org are already there):
- `www.mesoweb.com`: Christenson's Popol Vuh literal text and transcription (the control), Guenter's and Stuart's Palenque editions, Boot's Classic Mayan vocabulary. It answered 206 today.
- `www.famsi.org` (only with `www`): Christenson's K'iche' dictionary, Kaufman's PMED, the Montgomery glyph dictionary.
- `historicas.unam.mx`: IIH-UNAM free books (the Cantares paleography, the *Códice Chimalpopoca*, Garibay's *Veinte himnos*). Its TLS chain is incomplete. The fix: fetch `http://secure.globalsign.com/cacert/gsgccr46ovtlsca2025.crt` (DER → PEM) and pass it in a `--cacert` bundle with the system and proxy CAs. So **`secure.globalsign.com`** is needed too, or the PEM must be stored in the repo (a public certificate).
- `www.gutenberg.org`: the Rabinal Achí Achi text (15309); Brinton's *Ancient Nahuatl Poetry* (12219) and *Maya Chronicles* (20205).
- `bore.usp.br`: the *Ayvu Rapyta* PDF.
- `gdn.iib.unam.mx`: the Gran Diccionario Náhuatl (per word).
- `nahuatl.wired-humanities.org`, `enl.wired-humanities.org`: the Online Nahuatl Dictionary and the Early Nahuatl Library.
- `axolotl-corpus.mx`: the Nahuatl–Spanish parallel corpus (optional).
- `bdh.bne.es`: the Huarochirí MS facsimile (403 to scripts even so; a person must save it).
- `www.runasimi.de`: a Quechua dictionary (only if americas-19 is unblocked).

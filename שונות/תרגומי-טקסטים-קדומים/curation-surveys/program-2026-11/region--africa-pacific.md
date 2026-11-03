# Region survey – Africa beyond Egypt, the Pacific, Island and classical Southeast Asia, Australia, Siberia and the Arctic (2026-11-02)

Survey agent `africa-pacific`, for the program of 2026-11 (`BRIEF.md`). It starts from
`../world-survey--pacific-australia-siberia--2026-10-21.md` and the Africa part of `../world-survey--arabia-africa--2026-10-21.md`.
Their Bible ratings are ignored; their facts are used only where checked again today. Nothing from this region is translated
or planned (STATUS §3; Rounds 6–7). **Measured** (`(m)`) means counted today by a script on the downloaded base; `(r)` reported;
`(est.)` estimated from a measured quantity, with the rule stated. Scratch work (downloads in `dl/`, counting scripts
`kumu.py`, `seg.py`, `galigo.py`, `litt.py`, `haw.py`, `mang.py`, `maori.py` in `scripts/`) is in
`/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/africa-pacific/`.

**How sizes are given.** Verse is counted in lines. Prose is counted in words of the original language. For the `LARGE`
threshold, prose is converted at **10 words = 1 line** (a translation unit of one sentence or clause). For bilingual books
(original and English on facing pages or in alternate lines), the original is taken as **half** the measured words.
Where only a letter filter could find the verse lines (Hawaiian, Mangaian, Māori), the count is a **lower bound**: the
same filter finds only 1,042 of the Kumulipo's 2,102 lines.

**The date rule here.** Only the Aksumite inscriptions of ʿEzana (4th c. CE) hold content formed in antiquity proper, and
Meroitic, the one older literate culture, cannot be read. Everything else was recorded between 1849 and 1930. So every other
C1 is `1 EXC`, and each entry says how strongly the exception holds. It depends on four things: whether the culture was still
outside a universal religion when the text was made (and how long before the recording); whether the text has fossils
(archaic language, fixed formula, genealogy); whether it was in use (ritual, recitation); and who recorded it.
**C2 is graded thus in this file:**
- 5: a contemporary artifact.
- 4: a verbatim chant or formulaic poetry written down by insiders, in the original language.
- 3: a fixed chant or song taken down verbatim by an outsider, in the original language; or prose written by insiders.
- 2: prose dictated to an outsider, in the original language.
- 1: an outsider's paraphrase. Not a candidate: no base.

## Key findings

- **The Kumulipo is still the region's best text, and the strongest `EXC` anywhere in it.** Verified and measured today:
  **2,102 lines in 16 wā** (m). The cosmogony runs to l. 643 (wā 1–8) and the genealogies to l. 2102. Wā 11 alone is a
  genealogy of 838 lines. It was composed c. 1700 (before contact in 1778) for a chief's birth, as a verbatim genealogical
  chant. It was written down in Hawaiian by Hawaiians (Kalākaua's Board of Genealogy, printed 1889). It is the right size
  for one run (not `LARGE`).
- **Māori is the most reachable culture in the region.** Grey's 1854 *Ko nga mahinga* was mostly written by Te
  Rangikāheke, an insider (73,557 words in all, m). The cosmogony "Ko nga tama a Rangi" (2,808 words, m) and the Māui
  cycle (8,245, m) make one run. A script search found no Christian names in the book (*Ihowa*, *Karaiti*, *Hehu*: 0
  hits, m). Grey's 1853 *Ko nga moteatea* holds about 313 song headings: 164 waiata, 82 tangi, 38 karakia, 21 haka (m).
  It has ≥ 15,900 Māori verse lines (m, lower bound), so it is `LARGE` and splits by genre.
- **The only content formed in antiquity proper is ʿEzana's inscriptions** (c. 330–360 CE). They show a king's gods
  (Maḥrem, ʿAstar, Beḥer, Medr) giving way to the "Lord of Heaven". The corpus is small (≈ 150–200 Ge'ez lines, est.). Its
  only open base, Littmann 1913 (US-PD), prints the Ge'ez in Ethiopic type, which the OCR cannot read. A run must key the
  text from the page images.
- **Island Southeast Asia has two great sacred-chant corpora, both `LARGE`, both read with a facing translation.**
  - *I La Galigo*, vol. 1 (Bugis): 10,400 Bugis lines (m), © KITLV-Jakarta, local use only. Its creation episode, pp.
    65–176 of the edition, is about 2,200 lines (est.).
  - Schärer's Ngaju *Basa Sangiang* death-cult texts: 333,094 words (m, bilingual), **CC BY-NC 3.0**.
- **Africa: the strong texts are 19th-c. dictations in the original language, all PD, all `EXC` of moderate strength.**
  - Callaway's Zulu *Religious System* (4 parts, 196,280 words bilingual, m).
  - Bleek & Lloyd's /Xam *Specimens* (1911; the only hunter-gatherer religion recorded in its own words; /Xam cannot be
    read, so readability is low).
  - Rattray's Akan proverbs: **830 proverbs (m)**, Twi + English, a natural corpus.
  - Callet's Merina *Tantara ny Andriana* (703,443 words, m: `LARGE`).
  - Hollis's Maasai (1905).
- **Siberia and the Arctic are reachable only in part.**
  - Munkácsi's Mansi volumes (PD) were verified: the creation songs and the bear-feast songs.
  - The **Sakha olonkho base could not be verified today**: `nlrs.ru` returns 403, where it worked on 2026-10-21.
  - Rink's Greenlandic tales, written by Greenlanders (1859–63), are PD.
  - Claude reads none of these languages with control. The facing Hungarian, Russian or Danish carries the run.
- **Classical Southeast Asia (Old Javanese, Old Malay, Old Khmer, Cham) is excluded as a whole, though it is open and
  well edited.** It was all formed after 500 CE, inside a Hindu-Buddhist writing culture imported from India, so no `EXC`
  holds. It would be the region's first choice if the lead counted "classical pre-Islamic Southeast Asia" as its own
  antiquity (see Excluded).
- **Restricted sacred knowledge is excluded outright:**
  - Aboriginal Australian secret-sacred songs and narratives: the Strehlows' Aranda, Berndt's Djanggawul and Kunapipi /
    Wawilak (guidelines §2.3).
  - The Ifá corpus is © anyway, and its archive.org copy is an unauthorized upload.

  Two judgement calls are flagged for the lead:
  - The Mansi bear-feast songs: published in 1892–1921, but part of a living ritual.
  - The Kumulipo: a living sacred chant, performed at ʻIolani Palace today, but public.
- **Licences to note:**
  - Beckwith's 1951 Kumulipo (the English in Stampe's interlinear) is *reported* not renewed. Sacred-texts and a
    Wikipedia talk page say so, but no Copyright Office record was found. The Hawaiian text itself is PD (1889).
  - Littmann (d. 1958) and Hollis (d. 1961) are PD in the US but © in the EU and UK until 2028 and 2031.
  - La Galigo is ©: local use only.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| africa-pacific-01 | **The Kumulipo**, whole (16 wā) | Hawaiian / Hawaiian | c. 1700 CE (genealogical date: for Ka-ʻī-i-mamao); cosmogonic core older, shared East Polynesian *pō* sequence | 1880s (Kalākaua's Board of Genealogy) | print 1889 (*He pule hoolaa alii*); Bastian 1881 (part) | B | 2,102 lines (m) | good (complete; OCR misses 31 line numbers, text present) | Stampe's interlinear of Beckwith 1951 (Hawaiian of the 1889 text + Beckwith's English), archive.org `kumulipo-hawaiian-english` (PD Mark; Hawaiian PD; Beckwith's English reported not renewed), verified 2026-11-02 | medium | 1 EXC | 4 | 5 | 5 | 5 |  |  | www.wehewehe.org (Pukui–Elbert; Cloudflare-blocked) |  |
| africa-pacific-02 | **Ko nga tama a Rangi + the Māui cycle** (Te Rangikāheke's cosmogony, Grey 1854 pp. 1–30) | Māori / Māori | pre-contact East Polynesian (settlement c. 1250–1300; motifs shared with Tahiti, Hawaiʻi) | 1849–53 (Te Rangikāheke's MSS) | Grey 1854 print; MSS Auckland Public Library | D | 11,053 words (m: Rangi 2,808, Māui 8,245) ≈ 1,100 lines (est.) | good (OCR fair, no macrons) | Grey, *Ko nga mahinga a nga tupuna Maori* (1854), archive.org `kongamahingaang00greygoog`, PD, verified 2026-11-02 | medium | 1 EXC | 3 | 5 | 5 | 5 |  |  | maoridictionary.co.nz |  |
| africa-pacific-03 | **The hero cycles of Grey 1854, Part I** (Rupe and Hinauri, Kae, Tuhuruhuru, Tāwhaki, Wahieroa–Rata–Whakatau, Poutini; pp. 31–69) | Māori / Māori | pre-contact (Tāwhaki and Rata are pan-Polynesian) | 1849–53 | Grey 1854 | D | 13,398 words (m) ≈ 1,340 lines (est.) | good | as 02, verified 2026-11-02 | medium | 1 EXC | 3 | 4 | 4 | 3 |  |  | maoridictionary.co.nz | extends 02 |
| africa-pacific-04 | **Ko nga moteatea me nga hakirara** (Grey's Māori song collection), whole | Māori / Māori (song language, archaic) | songs 17th–mid-19th c.; karakia older (formula) | 1840s–53 (written by Māori for Grey) | Grey 1853 (Wellington) | C | ≥ 15,900 verse lines (m, letter filter, lower bound); 123,519 words (m); ≈ 313 song headings (m) | good (OCR fair) | Grey 1853, archive.org `kongamoteateame00greygoog`, PD, verified 2026-11-02 | medium | 1 EXC | 4 | 4 | 5 | 3 | LARGE | by genre (m, headings): tangi/laments 82; karakia 38; waiata 164 (aroha, whaiāipo, etc.); haka 21; whakaaraara, matakite, oriori, popo 8 | maoridictionary.co.nz | extends 02 |
| africa-pacific-05 | **The sacred songs of the hula** (Emerson's corpus: the altar prayers to Laka, the hula chants, Pele and Hiʻiaka chants) | Hawaiian / Hawaiian | pre-contact repertoire (some 19th-c. compositions) | 1880s–1909 (from hula masters) | Emerson 1909 (BAE Bull. 38) | C | ≥ 1,149 Hawaiian lines (m, filter, lower bound) ≈ 2,000–2,500 (est.); ≈ 250 chants (r) | good | Emerson, *Unwritten Literature of Hawaii* (1909), Gutenberg #20299 (PD), verified 2026-11-02 (archive.org scans too) | medium | 1 EXC | 3 | 4 | 4 | 3 |  |  | www.gutenberg.org | extends 01 |
| africa-pacific-06 | **Mangaian myths, songs and dirges** (Gill 1876: the songs and *eva* dirges with their originals) | Cook Islands Māori (Mangaian) / Mangaian | songs c. 1790–1824 (dated by Gill to named events and composers), myths older | 1852–72 (Gill, LMS missionary) | Gill 1876 | C | ≥ 1,098 Mangaian lines (m, filter, lower bound) ≈ 1,500–2,000 (est.) | good | Gill, *Myths and Songs from the South Pacific* (1876), archive.org `mythssongsfromso00gill`, PD, verified 2026-11-02 | low | 1 EXC | 3 | 3 | 5 | 4 |  |  |  |  |
| africa-pacific-07 | **I La Galigo, NBG 188 vol. 1** (the gods' council, Batara Guru's descent, Luwuq, the rice goddess, the first generations) | Bugis / Bugis (archaic *Galigo* register, 5-syllable metre) | pre-Islamic (world of c. 13th–15th c., estimate); Islam 1605–11 | 18th-c. lontar MSS; NBG 188 copied 1852–72 by Colliq Pujié | NBG 188 (Leiden) | C | 10,400 Bugis lines (m, vol. 1 of the edition) | good | Salim, Enre, Rahman, Koolhof & Tol (eds), *La Galigo menurut naskah NBG 188* I (2nd ed. 2017), oxis.org PDF, **© KITLV-Jakarta (local use only)**, verified 2026-11-02 | low | 1 EXC | 4 | 5 | 5 | 5 | LARGE | creation, pp. 65–176 (the council to the origin of Sangiang Serri) ≈ 2,200 lines (est.); births and rites of Batara Lattuq, pp. 177–342 ≈ 3,300 (est.); Tompoq Tikkaq and the deaths, pp. 343–516 ≈ 3,500 (est.); vol. 2 continues | oxis.org |  |
| africa-pacific-08 | **The Ngaju death-cult texts** (Schärer, *Der Totenkult der Ngadju Dajak*: the myths and the *Tantolak matei*, "pushing away the dead") | Ngaju Dayak / *Basa Sangiang* (priests' archaic ritual language) | pre-Christian, pre-Islamic Kaharingan religion (age unknown) | 1932–39 (Schärer, Basel missionary, from the priests) | Schärer 1966 (posthumous) | C | 333,094 words (m, bilingual) ≈ 16,000 lines (est.) | good (one witness; the editors completed Schärer's typescript) | Schärer 1966, 2 vols (VKI 51), archive.org mirror `oapen-20.500.12657-32191` (`613419_djvu.txt`), **CC BY-NC 3.0** (OAPEN/DOAB, r), verified 2026-11-02 | low | 1 EXC | 3 | 5 | 5 | 5 | LARGE | Part I, the myths (origin of the world and of the Sangiang, the origin of death, the substitute-sacrifice myths); Part II, the rites and texts of the death cult, incl. the *Tantolak matei* (from p. 414); sizes per part to be measured |  |  |
| africa-pacific-09 | **The royal inscriptions of ʿEzana** (DAE 6/7, 9, 10, 11 = RIÉ 185, 186, 188, 189; with the Greek DAE 4 and the pseudo-Sabaic versions as witnesses) | Aksum / Ge'ez (unvocalized and vocalized), with Greek and Ge'ez in pseudo-Sabaic letters | c. 330–360 CE | the stones | the stones (Aksum) | A | ≈ 150–200 Ge'ez lines (est. from Littmann's numbered translations: 26, 25, 38, ≈ 49 lines) | fair (DAE 9 hard to read in places; 10, 11 good) | Littmann, *Deutsche Aksum-Expedition* IV (1913), archive.org `sabaischegriechi00litt` (Princeton; US-PD, EU © to 2028), page images verified 2026-11-02; **Ethiopic type not in the OCR**: the text must be keyed | medium | 2 | 5 | 3 | 3 | 5 |  |  | betamasaheft.eu (bot check) |  |
| africa-pacific-10 | **The Religious System of the Amazulu** (Callaway), whole: I Unkulunkulu, II Amatongo (the ancestors), III Izinyanga zokubula (divination), IV Abatakati (sorcery; incomplete) | Zulu / isiZulu | pre-Christian Zulu religion (age unknown) | 1850s–60s (dictated by named Zulu informants) | Callaway 1868–70 | E | ≈ 98,000 Zulu words (est.: half of 196,280, m) ≈ 9,800 lines (est.) | good | Callaway 1868–70, archive.org `relamazulu00calluoft` (all four parts), PD, verified 2026-11-02 | medium | 1 EXC | 2 | 3 | 5 | 5 | LARGE | I Unkulunkulu ≈ 27,600 Zulu words; II Amatongo ≈ 28,000; III Izinyanga ≈ 34,000; IV Abatakati ≈ 8,800 (est., halves of m) |  |  |
| africa-pacific-11 | **Specimens of Bushman Folklore** (Bleek & Lloyd), whole: the Mantis, Sun and Moon (incl. the origin of death), the stars, animal fables, legends, poetry, customs | /Xam San / /Xam (!Ui; extinct) | hunter-gatherer tradition, undatable (very old way of life) | 1870–84 (dictated by //Kabbo, Diä!kwain, /Han≠kass'o and others) | Bleek & Lloyd 1911 | E | ≈ 74,000 /Xam words (est.: half of 147,920, m) ≈ 7,400 lines (est.); ≈ 90 texts (r) | good | Bleek & Lloyd 1911, archive.org `specimensofbushm00blee`, PD, verified 2026-11-02; the notebooks at digitalbleeklloyd.uct.ac.za (200) | low | 1 EXC | 2 | 3 | 5 | 5 | LARGE | A.I–III (the Mantis; Sun and Moon; stars) ≈ 70 pp.; A.IV–VI (fables, legends, poetry); B (history, customs, beliefs) | digitalbleeklloyd.uct.ac.za |  |
| africa-pacific-12 | **The Akan proverbs** (Rattray's 830, drawn from Christaller's 3,600) | Akan (Asante) / Twi | pre-colonial Asante (proverbs undatable; formula) | 1870s (Christaller, *Twi mmebusɛm*, 1879) | Christaller 1879; Rattray 1916 | C | 830 proverbs (m) | good | Rattray, *Ashanti Proverbs* (1916; Twi + English + notes), archive.org `ashantiproverbst00rattuoft`, PD, verified 2026-11-02; Christaller 1879 (3,600) not found online | medium | 1 EXC | 3 | 5 | 4 | 5 |  | (Christaller's full 3,600 would be `LARGE`: not reachable) |  |  |
| africa-pacific-13 | **The Masai: their language and folklore** (Hollis), Parts II–IV: stories, proverbs and sayings, customs, prayers and ceremonies in Maa | Maasai / Maa | pre-Christian pastoral tradition | 1900–04 (Hollis, with the Maasai writer Justin Lemenye) | Hollis 1905 | E | Part II 33,597 words (m, interlinear); III 5,875 (m); IV 34,387 (m) ≈ 37,000 Maa words (est.) ≈ 3,700 lines (est.) | good | Hollis 1905, archive.org `masaitheirlangua00holluoft`, US-PD (UK © to 2031), verified 2026-11-02 | low | 1 EXC | 2 | 3 | 4 | 4 | LARGE | II stories ≈ 1,700 lines; III proverbs ≈ 300; IV customs and prayers ≈ 1,700 (est.) |  |  |
| africa-pacific-14 | **Tantara ny Andriana eto Madagascar** (the Merina royal traditions) | Merina / Malagasy | 16th–early-19th c. royal history; older Vazimba lore; the *sampy* cult | 1860s–70s (Malagasy informants and MSS; ed. Callet, Jesuit) | Callet 1873–1902 (2nd ed. 1878) | D | ≈ 700,000 Malagasy words (m: 703,443 incl. French intro) | good | Callet (rev. Malzac), 1908 ed., archive.org `tantaramyandria00antagoog` (Harvard), PD, verified 2026-11-02 | medium | 1 EXC | 3 | 4 | 4 | 5 | LARGE | the origins and the Vazimba; the sampy (royal idols) and their rites; the *fandroana* (royal bath); the reigns to Andrianampoinimerina (sizes to be measured) |  |  |
| africa-pacific-15 | **The Mansi creation songs and bear-feast songs** (Munkácsi, *Vogul népköltési gyűjtemény* I and III) | Mansi (Vogul) / Mansi (song language) | old Ob-Ugric tradition (earth-diver, bear cult) | 1843–44 (Reguly), 1888–89 (Munkácsi) | Munkácsi 1892–1921 | C | 4 vols (r); vol. I = creation (r) | good | Munkácsi, archive.org `f1vogulnpklt01munkuoft` (vol. I) and the vol. II–IV items, PD, verified 2026-11-02 | low | 1 EXC | 3 | 5 | 5 | 5 | LARGE | vol. I the creation songs and tales; vol. III the bear songs; vol. II, IV (sizes to be measured) |  |  |
| africa-pacific-16 | **A Sakha olonkho**, one whole poem (*Er Sogotokh* or Pekarsky's field texts) | Sakha (Yakut) / Sakha | medieval Turkic-Mongol epic world (estimate) | 1880s–1910s | Pekarsky, *Obraztsy* (1907–18) | C | 4,000–36,000 lines per olonkho (r) | good (r) | Pekarsky, *Obraztsy narodnoi literatury yakutov*, PD; **NOT verified (nlrs.ru 403 today; no archive.org copy found)** | low | 1 EXC | 3 | 5 | 4 | 5 | LARGE | per olonkho (to be chosen and measured) | nlrs.ru, prometeus.nsc.ru |  |
| africa-pacific-17 | **Kaladlit okalluktualliait** (the Greenlandic tales, written by Greenlanders for Rink) | West Greenland Inuit / Kalaallisut | Thule-culture tradition (from c. 1200 CE; pre-Christian content) | 1850s (written by Greenlanders, e.g. Aron of Kangeq) | Rink 1859–63, 4 vols | D | 4 vols (r) | good | Rink (ed.), archive.org `kaladlitokalluk00mlgoog`, PD, verified 2026-11-02 (metadata) | low | 1 EXC | 3 | 3 | 4 | 5 | LARGE | per volume, or the Sea Woman, shaman and Raven tales (to be measured) |  |  |

### africa-pacific-01 – The Kumulipo
The Hawaiian cosmogony as a chant of births. "Hānau ka pō", the night gave birth. Out of the slime and the dark come
the coral polyp and the sea creatures (wā 1, ll. 1–122), each paired with a land plant that "guards" it. Then come the
fishes (wā 2, 123–272), the birds and insects (wā 3, 273–377), the creeping things (wā 4), the land animals and the
terror of the night (wā 5–7), and humans and the gods at dawn (wā 8, 595–643). The genealogies (wā 9–16, 644–2102) bring the
lineage down to the chief: the cosmos is his ancestry. Wā 1–16 start at lines 1, 123, 273, 378, 481, 539, 566, 595, 644,
673, 708, 1546, 1735, 1814, 1930, 2049 (m).
- **Why the `EXC` holds, strongly.**
  - It was composed before contact, for a chief's birth (c. 1700), and kept by verbatim memorization (genealogy).
  - Its vocabulary is archaic (Beckwith flags many cruxes).
  - It was written down by Hawaiians, in Hawaiian.
  - The verb is *hānau* "be born" throughout; the Bible's *hana* "make" never occurs. There is no seven-day frame.
- **Base and tools.**
  - Stampe's line-numbered interlinear (archive.org); the 1889 print itself has not been found as a scan.
  - Liliʻuokalani 1897 (PD) is not on archive.org.
  - Dictionaries: Andrews 1865 (`dictionaryofhawa00andrrich`, PD); Pukui–Elbert on wehewehe.org (©, Cloudflare-blocked).
- **Risks.**
  - Hundreds of species names: fish, plants and shellfish need Pukui–Elbert and Titcomb.
  - Wā 11 is 838 lines of names.
  - Respect for a living sacred chant.
- **A run needs:** a Hawaiian name table and renderings file; a line-data tool over the interlinear (Hawaiian line +
  Beckwith's English as rank 3); the wehewehe.org host.

### africa-pacific-02 – Ko nga tama a Rangi and the Māui cycle
The Māori beginning, as Te Rangikāheke of Te Arawa wrote it for Grey (1849–53):
- Sky and Earth clasped in darkness; the sons' debate; Tāne's separation of them, head down and feet pushing up; the
  parents' grief.
- Tāwhiri's war; Tangaroa's children split between sea and land ("let us go inland" / "to the water").
- Tū's victory over his brothers, the origin of the karakia and of food.
- Then Māui, the trickster demigod: the fire, the sun snared, the land fished up, and his death in Hine-nui-te-pō,
  which fixes human mortality.
- **Why the `EXC` holds, moderately.**
  - The content is pre-contact and attested across Polynesia (outside confirmation).
  - The writer was an insider in his own language, but a Christian convert, writing prose a generation after the
    missions came.
  - The embedded karakia are fossils.
  - Measured: no Christian names in the whole book.
- **Base and tools.**
  - Grey 1854 (archive.org OCR, fair; no macrons).
  - Grey's free English, *Polynesian Mythology* (1855), as rank 3.
  - Variants in White, *Ancient History of the Maori*, vol. I (`ancienthistoryof01whit`, PD, verified present).
  - Dictionaries: Te Aka (maoridictionary.co.nz, 200); Williams 1852 (`adictionarynewz00willgoog`) and Tregear 1891, both PD.
- **Risks:** the 19th-c. orthography (vowel length unmarked); OCR cleaning. The *Io* texts (1913) are not part of it.
- **A run needs:** a Māori set-up (name table, renderings); one OCR-cleaning pass checked against the page images.

### africa-pacific-03 – The hero cycles of Grey 1854, Part I
These follow the Māui cycle in the same book:
- Rupe's ascent to the heavens to find his sister Hinauri.
- Kae's theft of the whale Tutunui.
- Tāwhaki's climb to the sky and his blood-vengeance, and the cycle of Wahieroa, Rata and Whakatau.

It is the pan-Polynesian heroic myth, the natural second run after 02. Base, tools and risks are as for 02. The migration
traditions (pp. 70–106, 12,121 words, m) are a further part, closer to history.

### africa-pacific-04 – Ko nga moteatea (Grey 1853)
Māori song poetry, written down by Māori for Grey:
- the laments (*waiata tangi*), which are some of the great elegies of the world;
- love songs, cursing songs, lullabies that teach cosmogony (*oriori*);
- the karakia, incantations in an archaic, formulaic language;
- the haka.

Song and karakia change slowly, so this is the most faithful Māori voice (C2 4). Many songs are datable by their composers
(17th–19th c.); some are post-contact. Each song's date and any Christian vocabulary must be checked: the book has 2 hits for
Christian names (m). Ngata and Te Hurinui's *Ngā Mōteatea* (©) is the key commentary, for local reference only. `LARGE`: the
lead should choose a genre for one run. The 38 karakia, or the 82 laments (≈ 3,000–4,000 lines, est.), are the natural
first parts.

### africa-pacific-05 – The sacred songs of the hula (Emerson 1909)
Hawaiian sacred song:
- the *pule kuahu*, the altar prayers to Laka, goddess of the hula;
- the hula chants (*mele*);
- the Pele and Hiʻiaka chants.

They are fixed texts, learned verbatim in the hālau under kapu. Emerson (son of missionaries) took them down from hula
masters and gives the Hawaiian with an English version. **The `EXC` is moderate.** The hula was suppressed after 1820 and
revived under Kalākaua, and some chants are post-contact. Emerson's English is free and his commentary is of its era.
- **Base:** Gutenberg #20299 (proofread); the archive.org scans (`cu31924026916415`) for checking.
- **Tools:** as 01.
- **Gutenberg is not in `domains.txt`.** The archive.org scans work, with OCR.

### africa-pacific-06 – Mangaian myths, songs and dirges (Gill 1876)
- The Mangaian cosmos is a coconut shell, with the "Very Beginning" (Vari-ma-te-takere), a woman, tearing her children
  from her own sides.
- The *eva* dirges and "death-talks" for named people, composed before and around the 1824 conversion.
- The Rongo cult songs.

Gill, an LMS missionary of twenty years on the island, prints the originals with literal translations (Max Müller's
preface). **The `EXC` is moderate to strong:** the songs predate the mission, though the recorder was the missionary
himself.
- **Readability is low.** Mangaian is a Cook Islands Māori dialect: no dedicated dictionary was checked, so read it
  through Māori, Tregear and Gill's English.
- **A run needs** a Cook Islands Māori dictionary (Savage 1962, ©: per word only).

### africa-pacific-07 – I La Galigo, NBG 188 vol. 1
The Bugis sacred cycle opens in the sky-palace. The high god sees that the Middle World is empty, and the gods hold a
council "to fill the Middle World". Batara Guru goes down in a bamboo and marries Wé Nyiliq Timoq, who rises from the
underworld sea. They found Luwuq. The rice goddess Sangiang Serri is born from their dead first child.
- **Why the `EXC` holds, moderately.** The world of the cycle is pre-Islamic. It was recited by the *bissu* priests. Its
  5-syllable metre and archaic diction are fossils. It was copied in Bugis by Bugis scribes (C2 4). But the society that
  copied it had been Muslim since 1605.
- **Base:** the 2017 edition. It has romanized Bugis with line numbers in sections, and a facing Indonesian translation
  that is modern and line-aligned. Vol. 1 has 263 Bugis pages and 183 sections (m); vol. 2 is also on oxis.org (200).
- **Tools:** Matthes's *Boeginesch-Hollandsch woordenboek* (1874, PD) was not found on archive.org today; the edition's
  glossary (*Daftar Kata*).
- **Risks.**
  - © KITLV-Jakarta: local use only, gitignored, the copy kept re-obtainable.
  - Bugis is weak for Claude, so the Indonesian carries much of the reading. The apparatus must say so.
- **A run needs:** pdftotext extraction (done here as a test: clean), the oxis.org host, a Bugis set-up.

### africa-pacific-08 – The Ngaju death-cult texts (Schärer 1966)
- **The myths** (vol. I): the hornbill and the water-snake, the two halves of the cosmos; the tree of life (*batang
  garing*) destroyed in their fight; why man is mortal; the lost water of life; the substitute sacrifice.
- **The ritual texts** of the death cult in the *Basa Sangiang*, the priests' "language of the spirits", above all the
  *Tantolak matei*. It sends the dead on the soul-boat to the village of the dead.

It is one of the richest priestly liturgies ever taken down.
- **Why the `EXC` holds.** The inland Ngaju were outside Islam and Christianity in the 1930s (the Kaharingan religion).
  The ritual register is archaic: ordinary Ngaju did not understand it, a fossil. The texts are recited ritual. The
  recorder was a sympathetic missionary who printed the original line by line with German.
- **Base:** the archive.org mirror (OAPEN itself is bot-blocked; `library.oapen.org` is in `domains.txt`).
- **Dictionary:** Hardeland 1859 (`dajackschdeutsch00hard`, PD).
- **Risks.** Readability is low: in practice the text is read through Schärer's German. CC BY-NC is compatible with the
  public repository (non-commercial), with attribution.
- **A run needs:** to measure the texts per part (Part II from p. 414); a German-pivot protocol stated on the title page.

### africa-pacific-09 – The royal inscriptions of ʿEzana
The war annals of the king of Aksum in the 4th c. CE: the campaigns against the Beja and the Noba, the dead and the
captives counted, the thrones set up for the gods. In the pagan texts (DAE 6/7, 9, 10) the king is "son of the invincible
Maḥrem". In DAE 11 he fights "in the power of the Lord of Heaven". So the corpus holds a culture's turn from its own gods to
a universal religion, in contemporary stone (C2 5). It is the region's only text formed before 500 CE that can be read.
- **Base:** Littmann 1913, with the text in Ethiopic, a vocalized transcription and a German translation. The Ethiopic type
  is garbage in the OCR, so a run keys the text from the page images (a small corpus).
  - RIÉ (1991–2000) is ©.
  - Wenig's DAI digital re-edition is free to read but limited to private use (r).
  - Beta maṣāḥǝft has TEI records (RIÉ 185) behind a bot check: not used.
- **Tools:** Dillmann's *Lexicon* (1865, `lexiconlinguaeae00dilluoft`, PD) and grammar. Ge'ez is fairly well known to
  Claude (medium).
- **Risks:** small (borderline on wholeness, but a closed royal corpus); DAE 9 is partly uncertain (Littmann).
- **A run needs:** a Ge'ez set-up and a keyed base checked twice. It could share a corpus with the Sabaic inscriptions
  (the levant-arabia region), which use the same script family.

### africa-pacific-10 – The Religious System of the Amazulu (Callaway 1868–70)
The Zulu religion in the words of named Zulu men and women, dictated in Zulu:
- Unkulunkulu, "the very old one", who broke off people from the reed-bed;
- the chameleon and the lizard, the messengers of life and death;
- the *amatongo*, the ancestor spirits, in dreams and in snakes;
- the call and the training of a diviner;
- possession and sorcery.

It holds the inner world in the first person: fear, dream, illness, the ancestors' anger.
- **Why the `EXC` holds, moderately.** Zulu religion was very much alive in 1850s Natal. But some informants were converts,
  Callaway's questions shaped the answers, and the debate over "Unkulunkulu as creator" is partly about colonial framing
  (flag).
- **Tools:** Colenso's dictionary (1861 / 1884, PD); Bryant 1905 (PD). Claude reads Zulu moderately; the 19th-c.
  orthography differs.
- **`LARGE`:** Part I (≈ 2,760 lines, est.) is the natural first run.

### africa-pacific-11 – Specimens of Bushman Folklore (Bleek & Lloyd 1911)
The religion of a southern African hunter-gatherer people, told by /Xam men to Bleek and Lloyd in 1870–84:
- the Mantis, /Kaggen;
- the Moon's message of rebirth, which the hare ruins, so that people die;
- the girl of the early race who threw ashes into the sky to make the Milky Way;
- the rain-bull; prayers to the young moon and to a star; songs.

The culture-stage `EXC` is the strongest in Africa. But the narrators were prisoners, from a people being destroyed.
- **Readability is low.** Claude cannot read /Xam, and Bleek's *Bushman Dictionary* (1956) is ©. The very literal English,
  made with the narrators, would carry the run; the /Xam on the facing page would be checked for names and keywords. That
  is close to the brief's "not from a translation" line. The lead should decide; the apparatus must say it.
- **Host:** `digitalbleeklloyd.uct.ac.za` (the notebooks).

### africa-pacific-12 – The Akan proverbs (Rattray 1916)
830 Twi proverbs (m), each with Rattray's English and notes. They come from Christaller's 1879 collection of 3,600, made
with Akan collaborators. "Of all the wide earth, the Supreme Being is the elder" (no. 1). The Akan moral world, in the form
the culture itself treasured most: "the wise are spoken to in proverbs".
- **Why the `EXC` holds, moderately.** The proverbs are fixed formulae from the pre-colonial Asante kingdom. The collection
  was made through the Basel Mission.
- **Tools:** Christaller's *Dictionary* (1881, `dictionaryofasan00chriuoft`, PD) and *Grammar* (1875, PD). Twi is fairly
  readable for Claude, with Rattray's notes.
- **A whole, well-preserved corpus in one run.** A run needs a Twi set-up, keyed to Rattray's numbers and Christaller's.

### africa-pacific-13 – The Masai (Hollis 1905)
- Maasai tales (Part II, interlinear) and proverbs (III).
- In Part IV, in Maa: the clans, the age-sets, the ceremonies, the laibon (prophets), prayers to Enkai, and the story of
  Le-eyo, who refused the burial words and so brought death.

The pastoral world before mission. **The `EXC` is moderate.** The texts were largely written by Justin Lemenye, a Christian
Maasai, for a colonial official. Readability is low: Maa is weak, but the interlinear helps.
**Licence:** US-PD; © in the UK until 2031 (Hollis d. 1961). Merker 1904 is to be avoided (unreliable).

### africa-pacific-14 – Tantara ny Andriana (Callet)
The Merina kingdom's own account of itself, from manuscripts and informants in Malagasy (1860s–70s):
- the Vazimba, the first people;
- the royal genealogies;
- the *sampy*, the royal palladia, and their keepers;
- the *fandroana* new-year bath;
- the taboos and the funerals of kings.

**The `EXC` is moderate to weak.** The court converted in 1869 and the editor was a Jesuit, but the informants remembered
the old rites. Malagasy is medium for Claude (Richardson 1885, Abinal–Malzac 1888, both PD). `LARGE` (≈ 70,000 lines, est.):
only chosen parts. The *sampy* and *fandroana* chapters would be a run.

### africa-pacific-15 – The Mansi creation and bear songs (Munkácsi)
- The Mansi creation songs: the earth-diver bird sent by Numi-Tōrem ("I found no earth"), the fire-flood.
- The bear-feast songs, which send the slain bear's soul back to its heavenly father.

They are the central sacred songs of the Ob-Ugrians, sung verbatim, partly from Reguly's records of 1843–44. **The `EXC` is
moderate:** nominal Orthodox Christianity came from the 1710s; possible Christian or Iranian colouring of the dualism is
debated. Readability is low: Mansi through Munkácsi's Hungarian, in an idiosyncratic orthography. Flag for the lead: the
bear feast is a living, revived ritual. It is not restricted knowledge in the AIATSIS sense, but it needs respect.

### africa-pacific-16 – A Sakha olonkho
The Sakha epic of the three worlds:
- the Upper World of the *aiyy*;
- the Middle World, which the hero clears of the *abaasy* monsters of the Lower World;
- the world-tree Aal Luuk Mas.

It is sung in a formulaic, archaic style (UNESCO 2005). **Not verified today:** the National Library of Sakha (nlrs.ru)
answers 403, and no archive.org copy of Pekarsky's *Obraztsy* was found. The Novosibirsk bilingual series is ©. Oyunsky's
*Nyurgun Bootur* is an authorial synthesis: not a base. Readability is low (Pekarsky's dictionary is PD). If the base is
reached, it is `LARGE`: one olonkho opening (the creation of the Middle World) would be a part.

### africa-pacific-17 – Kaladlit okalluktualliait (Rink 1859–63)
Greenlandic tales written down by Greenlanders themselves for Hinrich Rink:
- the Sea Woman, whose severed finger-joints became the sea mammals;
- the shamans' journeys; Raven; the feuds and the hunger.

They are insiders' texts in the language. But West Greenland had been Christian for a century, so the `EXC` is weak to
moderate. East Greenland (Thalbitzer's Ammassalik texts, recorded 1905–06 just after the 1894 mission) would be stronger,
but its text volume was not verified today. Readability is low (Kalaallisut; Kleinschmidt 1871, PD; Rink's own English
of 1875).

## Excluded

- **Meroitic** (Kush, 2nd c. BCE–4th c. CE): the script is read, the language is not understood. Unreadable.
- **Libyco-Berber inscriptions**: mostly names; poorly understood; tiny yield.
- **Old Nubian** (8th–15th c.): Christian and late.
- **Kebra Nagast** (Ge'ez, 14th c.): Christian, late. No `EXC`.
- **Ge'ez Christian literature**, and **1 Enoch / Jubilees** (Jewish, preserved in Ge'ez): out of this region's criteria;
  1 Enoch belongs to a Second Temple survey (flag to the lead).
- **Kaleb's and the later Aksumite inscriptions** (6th c.): Christian, after 500 CE. ʿEzana's texts (09) are the whole.
- **Old Javanese kakawin** (*Rāmāyaṇa* c. 870s, Arjunawiwāha, Sutasoma, Deśawarṇana) and the **Tantu Panggĕlaran** (c.
  15th c.):
  - why: after 500 CE, inside the imported Hindu-Buddhist writing culture, so no `EXC`;
  - what is open: OJED on sealang.net (http) and Robson's 2015 Rāmāyaṇa (TUFS, 503 today);
  - what Claude reads: Old Javanese at medium-low.
  - The first choice if the lead admits "classical pre-Islamic Southeast Asia" as an antiquity of its own.
- **Old Malay Śrīvijaya inscriptions** (682–686 CE): Buddhist state, after 500, and short (≈ 100 lines in all). DHARMA,
  CC BY-SA.
- **Old Khmer and Cham inscriptions** (611 CE on; Đông Yên Châu, 4th–6th c.?): after 500 or too short; Hindu-Buddhist
  donative formulae. DHARMA, CC BY.
- **Old Mon, Pyu, Old Burmese, Ram Khamhaeng**: short and Buddhist; Pyu poorly understood; Ram Khamhaeng's authenticity is
  debated.
- **Laguna Copperplate** (900 CE, Philippines): too short.
- **Sunjata / Son-Jara** (Maninka):
  - fixed in the 20th c., in an Islamized frame;
  - every bilingual edition is © (Innes 1974, Johnson 1986, Jansen et al. 1995);
  - Maninka is weak for Claude.
- **Ifá (Yoruba)** (Abimbola, Bascom):
  - all ©; the archive.org *Sixteen Great Poems* is an unauthorized upload;
  - a living priestly tradition with initiatory parts;
  - recorded from the 1960s.
- **Mwindo, Ozidi, Kaïdara**: © modern editions. Kaïdara is partly shaped by Hampâté Bâ. The archive.org Mwindo is
  unauthorized.
- **Dogon cosmology** (Griaule): French only; largely the ethnographer's construction (van Beek 1991).
- **Zulu izibongo** (praise poems): no open original-language base verified. Cope 1968 is ©; Stuart's readers of the 1920s
  were not found.
- **Sesotho** (Jacottet 1908, PD, verified present): the Basotho were heavily missionized from 1833. Weaker than 10; not now.
- **Nandi** (Hollis 1909): verified present; weaker than 13 and in the same genre. Not now.
- **Tigre** (Littmann 1910–15) and **Oromo** (Cerulli 1922): Muslim / Christian frames; Cerulli not found. Not now.
- **Malagasy hainteny**: Paulhan 1913 is © in the EU until 2039; Dahle 1877 was not found online.
- **Swahili, Hausa, Somali poetry**: Islamic and late (18th–20th c.).
- **Rwanda *Ubwiru*** (royal ritual code): © (d'Hertefelt & Coupez 1964).
- **Bamum texts of King Njoya**: 20th c.
- **Kabyle and Tuareg poetry** (Hanoteau 1867, Foucauld): Islamic, 19th–20th c.; Berber is weak for Claude.
- **Arabic-language African chronicles** (Tārīkh al-Sūdān, Kano, Kilwa): Islamic, 17th c. and later.
- **Aboriginal Australian secret-sacred songs and narratives** (Carl and T. G. H. Strehlow's Aranda; Berndt's Djanggawul,
  Kunapipi / Wawilak): **restricted sacred knowledge of living peoples** (guidelines §2.3; AIATSIS Code 2020; ATSILIRN
  Protocol 6).
- **Other Aboriginal texts** (Moon-Bone, Tiwi, Spencer & Gillen): © or English-only, and partly restricted. Public
  narratives only with community consent.
- **Hawaiian Kumuhonua / Nuʻu legends** (Fornander, Kepelino): biblicized 19th-c. "tradition". A contamination control at
  most (the apparatus of 01).
- **Fornander Collection as a whole** (Gutenberg #72686 etc., PD, verified): a mine of variants and chants, not one text.
  Mixed with Christian-era material.
- **Hawaiian newspaper corpus** (Hiʻiakaikapoliopele etc.): Christian-era prose; Papakilo / Ulukau are blocked.
- **Māori *Io* texts** (Smith 1913; Hare Hongi 1907): post-contact or reworked.
- **Tuamotuan *Kiho* texts** (Stimson 1933): suspect, like Io; also not yet PD in the US.
- **Tahitian chants** (Henry, *Ancient Tahiti*, 1928):
  - base not reachable: US-PD and full view on HathiTrust (`babel.hathitrust.org` is 403 here); Bishop Museum sells it;
  - mostly English, with selected Tahitian chant texts;
  - missionary-recorded.
  - Revisit if HathiTrust is reachable.
- **Samoan, Tongan, Marquesan traditions** (Krämer 1901, German facing; Gifford 1924, English; Handy 1930, mostly English):
  weak original-language bases.
- **Rapa Nui rongorongo**: undeciphered.
- **Moriori karakia** (JPS, Shand): the JPS archive is blocked; short.
- **Trobriand magic** (Malinowski): *Argonauts* (1922, PD) gives too few whole spells. *Coral Gardens* II (1935) exists on
  archive.org only as unauthorized DLI / universallibrary uploads.
- **Hainuwele** (Seram, Jensen 1939): German only; no original-language text.
- **Ifugao hudhud**: no open base (Lambrecht's texts are not online); the terraces' antiquity is debated.
- **Darangen, Hinilawod, Ulahingan** (Philippines): © modern recordings; very weak languages.
- **Batak pustaha, Malay mantra, Old Sundanese, Balinese lontar**: Islamized or Indic, late, or not editions of a whole.
- **Formosan myths** (Ogawa & Asai 1935): © in Japan to 2039 (East Asia region).
- **Ainu kamuy yukar** (Chiri 1923): the East Asia region.
- **Lĩnh Nam chích quái** (Vietnamese origin myths, Classical Chinese): the East Asia region.
- **Koryak and Chukchi Raven cycles** (Bogoras 1910, 1917; verified present): the interlinear English is the real base;
  Koryak is unreadable for Claude.
- **Altai (Radloff, *Proben* I, 1866)**: the Altai volume was not identified on archive.org today. The Ülgen–Erlik dualism
  may be Christian / Manichaean-coloured. The Kyrgyz Manas (Proben V) belongs to Central Asia (East Asia region).
- **Khanty, Nenets, Evenki, Ket, Nivkh, Buryat Geser oral versions**: © modern editions, Russian only, or not reached.
- **Inuit (Rasmussen 1929–31)**: mostly English, with few original song texts; *The Netsilik Eskimos* (1931) is still © in
  the US. Thalbitzer's East Greenlandic text volume was not verified (17 notes it).
- **Oyunsky's *Nyurgun Bootur***: an authorial synthesis, like the Kalevala.
- **"Mu" / Naacal tablets**: a hoax.

## New languages

Every language below is new to the folder.

| Language | Candidates | Base | Dictionaries | Morphology | Claude's reading |
|---|---|---|---|---|---|
| Hawaiian | 01, 05 | Stampe interlinear; Emerson (Gutenberg) | Andrews 1865 (PD, archive.org); Parker 1922 (PD); Pukui–Elbert (©, wehewehe.org: blocked) | none (isolating; the particles are the grammar) | **medium**. Good on the grammar, weak on species names and archaic words. Beckwith's notes are essential. |
| Māori | 02, 03, 04 | Grey 1853, 1854 (archive.org OCR) | Te Aka (online, 200); Williams 1852 / 1892 and Tregear 1891 (PD) | none | **medium**. Vowel length is unmarked in the 19th-c. spelling; the karakia are archaic. |
| Cook Islands Māori (Mangaian) | 06 | Gill 1876 | Savage 1962 (©); through Māori / Tregear | none | **low** |
| Bugis | 07 | 2017 edition (romanized, facing Indonesian) | Matthes 1874 (PD; not located today); the edition's glossary | none | **low**. The Indonesian is read well. |
| Ngaju / Basa Sangiang | 08 | Schärer 1966 (with German) | Hardeland 1859 (PD) | none | **low**. Via the German. |
| Ge'ez | 09 | Littmann 1913 (page images; must be keyed) | Dillmann 1865 lexicon and grammar (PD); Leslau (©) | none open | **medium**. Fair knowledge of Ge'ez; the epigraphic unvocalized script needs care. |
| isiZulu | 10 | Callaway (archive.org OCR) | Colenso 1861 / 1884; Bryant 1905 (PD) | none | **medium**. 19th-c. orthography. |
| /Xam | 11 | Bleek & Lloyd 1911 | Bleek 1956 (©) | none | **very low**. Via the editors' literal English. |
| Twi (Akan) | 12 | Rattray 1916 | Christaller 1881 dictionary, 1875 grammar (PD) | none | **medium-low**. Tone unmarked. |
| Maa (Maasai) | 13 | Hollis 1905 (interlinear) | Hollis's vocabulary | none | **low** |
| Malagasy | 14 | Callet 1908 (OCR) | Richardson 1885; Abinal & Malzac 1888 (PD) | none | **medium** |
| Mansi | 15 | Munkácsi (with Hungarian) | Munkácsi–Kálmán 1986 (©) | none | **very low**. Via the Hungarian. |
| Sakha | 16 | Pekarsky (not reached) | Pekarsky's dictionary 1907–30 (PD, r) | none | **low** |
| Kalaallisut | 17 | Rink 1859–63 | Kleinschmidt 1871 (PD); Schultz-Lorentzen 1927 | none | **low**. Polysynthetic; Rink's English. |

Every new language needs its own grammar mapping, name table and renderings file before its first line (guidelines §1).
A generic **OCR-text line-data tool** would serve most of these runs: archive.org `_djvu.txt` → labelled lines → the
original line, the facing translation and the dictionary hits. None of the folder's existing tools fits. The nearest
models are `stone_tools.py` (a keyed TSV base, for 09) and `kol_tools.py` (a corpus of short units, for 12).

## Hosts

Hosts this region needs that are not in `domains.txt` (archive.org and library.oapen.org are already there):
- `www.gutenberg.org`: Emerson (05); Fornander (variants for 01, 05). 200 today. The archive.org scans are a fallback.
- `oxis.org`: the La Galigo edition PDFs, vols 1–2 (07). 200 today.
- `maoridictionary.co.nz`: Te Aka, the Māori dictionary (02–04, 06). 200 today.
- `www.wehewehe.org`: Pukui–Elbert, the Hawaiian dictionary (01, 05). **Cloudflare challenge (403) today**; also
  `puke.ulukau.org` (the Hawaiian book library; same block).
- `betamasaheft.eu`: Ge'ez texts and the RIÉ 185 TEI record (09). It serves a bot-check page to scripts: needs a person or
  an allowlist.
- `digitalbleeklloyd.uct.ac.za`: the Bleek & Lloyd notebooks (11). 200 today.
- `nlrs.ru`: the National Library of Sakha's olonkho collection (16). **403 today.**
- `www.prometeus.nsc.ru`: the Novosibirsk folklore series' contents (16).
- `babel.hathitrust.org`: Henry's *Ancient Tahiti*, full view (the excluded Tahitian chants). **403 here.**
- `sealang.net`: OJED, the Old Javanese dictionary (only if the lead admits Old Javanese). http only.
- `tufs.repo.nii.ac.jp`: Robson's Old Javanese Rāmāyaṇa (the same condition). **503 today.**

Sources consulted for the two web searches:
- Beckwith's renewal status: [Wikipedia, Kumulipo](https://en.wikipedia.org/wiki/Kumulipo);
  [Talk:Kumulipo](https://wikipedia.com/wiki/Talk:Kumulipo);
  [the sacred-texts mirror](https://neonvagabond.xyz/mirrors/sacred-texts/pac/ku/index.htm);
  [WorldCat](https://search.worldcat.org/oclc/1253793).
- The Aksumite editions: [Beta maṣāḥǝft RIÉ 185](https://betamasaheft.eu/works/LIT4850pseudotrilingual);
  [RIÉ 189](https://betamasaheft.eu/manuscripts/RIE189);
  [DAI (Wenig)](https://publications.dainst.org/books/dai/catalog/view/2046/2621/4726).
- Henry, *Ancient Tahiti*: [HathiTrust](https://catalog.hathitrust.org/Record/001635222.marc);
  [Bishop Museum bulletins](https://hbs.bishopmuseum.org/PUBS-ONLINE/bpbm-bulletins.html).

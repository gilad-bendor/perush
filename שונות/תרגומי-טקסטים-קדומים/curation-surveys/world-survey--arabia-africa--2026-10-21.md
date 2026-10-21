# World survey – Arabia, Ethiopia and Africa beyond Egypt: ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Legend: **verified** = fetched today, with the expected content seen; **reported** = from search results, catalogues or my own knowledge, not fetched. Bible benefit and Soul benefit are each rated HIGH / MED-HIGH / MEDIUM / LOW.
Scope: Old South Arabian (Sabaic, Minaic, Qatabanic, Hadramitic); Ancient North Arabian (Safaitic, Hismaic, Dadanitic, Taymanitic, Thamudic, Dumaitic); Nabataean and Old Arabic; pre-Islamic Arabic poetry and lore; Ge'ez (Aksumite inscriptions); Meroitic; Libyco-Berber and Berber oral poetry; sub-Saharan oral traditions recorded in their own languages. Egypt is surveyed elsewhere. Jewish and Christian scripture in Ge'ez (1 Enoch, Jubilees) is out of scope here, but see §3: it matters for Gen 5–6.
Caveat on method: the session's shared web-search budget ran out part-way (after about 45 searches by this agent). Details I could not confirm after that are marked "verify".

---

## 0. Key findings

1. **The richest "soul" corpus in the region is Safaitic.** It has tens of thousands of nomad graffiti (1st c. BCE–4th c. CE): laments for the dead, yearning for absent loved ones, prayers to Allāt, Dushara and Baʿalšamīn, raids, curses and blessings.
   - **OCIANA** has moved to Ohio State (`ociana.osu.edu`; the old Oxford URL is dead). Each record has a transliteration and an English translation (verified).
   - The **2017 OCIANA "Preliminary Edition" PDFs** of the Safaitic, Hismaic, Dadanitic and Taymanitic corpora are on Zenodo under **CC BY 4.0** (verified). This gives an open, committable base text.
2. **The Sabaean confession (penitential) inscriptions are the region's best Torah control for Lev 12, 15 and 18:19.** They are public confessions, set up in a temple, by people who had intercourse with a menstruating woman, or did not wash after intercourse, and so on. Illness or misfortune followed, then expiation and a fine.
   - The **Sabaic Online Dictionary (Sabaweb, Jena)** is reachable over plain http (verified).
   - It has German translations of **6,294 Sabaic texts (193,567 words)**, among them RES 3945/3946 (Karibʾil Watar), the Haram texts, and the confession texts CIH 523 and CIH 533 under the root *ḥyḍ* "to menstruate" (verified).
3. **DASI (Pisa/CNR), the main Old South Arabian corpus, blocks scripts with an Anubis bot challenge** (verified). WebFetch gets "Access Denied".
   - Its data are reported to be released under CC BY 4.0.
   - However, its news page reportedly **"deprecates" reuse in resources offering "AI-generated responses, summaries, or interpretations"** without an institutional agreement.
   - **Ask permission before building an AI-translated Sabaic corpus from DASI.** Use Sabaweb, public-domain CIH/RES and the literature instead.
4. **Pre-Islamic Arabic poetry is the most feasible large corpus.** Classical Arabic is the language here that an LLM handles best.
   - **OpenITI** (raw.githubusercontent.com, verified) holds 29 *jāhilī* dīwāns and the Muʿallaqāt, the Mufaḍḍaliyyāt (131 poems, about 2,720 verses, verified), the Aṣmaʿiyyāt, the Ḥamāsa commentaries, al-Zawzanī's commentary on the Muʿallaqāt, the *Aghānī*, and Ibn al-Kalbī's *Kitāb al-Aṣnām*.
   - Those texts come from modern Shamela editions, so treat them as **local only**.
   - **Lyall's Mufaḍḍaliyyāt (1918–24: Arabic text, translation and notes)** and Ahlwardt's *Divans of the Six Ancient Arabic Poets* (1870) are public domain on archive.org (verified). They give committable base texts.
5. **No Hebrew translation of the Muʿallaqāt or of other *jāhilī* poetry turned up** in searches in Hebrew and English. A new apparatus-rich Hebrew Muʿallaqāt would probably be the first or near-first. This needs checking against the NLI catalogue, which returned 403 to scripts.
6. **Arabia gives the Table of Nations (Gen 10) and the Ishmaelite and Keturite lists (Gen 25) real epigraphic ground.**
   - These names appear in the inscriptions: Sheba (*sbʾ*), Ḥaḍramawt (= Hazarmaveth, 10:26), Dedan (*ddn*, 10:7, 25:3), Tema (*tymʾ*, 25:15), Dumah (25:14) and Qedar.
   - The Dadanitic "Gashm son of Shahr" (JSLih 349) ↔ Geshem the Arab (Neh 2:19, 6:1–6). This is reported and widely accepted.
   - Taymanitic graffiti name "Nabonidus king of Babylon" (*nbnd mlk bbl*). This is verified in the OCIANA Taymanitic PDF, Eskoubi 1999 nos. 25, 169 and 170.
   - It bears on Gen 8:20–11:26, the commentary's empty block.
7. **The best Bible-relevant sub-Saharan material is the African "origin of death" and "God's withdrawal" myths.** Examples:
   - the Zulu chameleon and lizard (↔ Gen 3), verified in Callaway's Zulu text with English, 1868–70, PD;
   - the /Xam moon and hare (Bleek & Lloyd 1911, PD, verified);
   - the Maasai Le-eyo (Hollis 1905, PD, verified);
   - the Akan God, struck by the old woman's pestle, who withdraws, and the tower of mortars (↔ Gen 3, Gen 11:4).
   They are typological, with no contact with Israel. **Many were recorded by missionaries from converts.** Platvoet 2012 (verified) shows biblical motifs entering Akan versions. Every one needs a contamination check.
8. **Many famous African epics are not translatable "from the original" here.** For Sunjata, Mwindo, Ozidi and Kaïdara, the bilingual editions are copyrighted, and the languages (Maninka, Nyanga, Ijo, Fulfulde) are weak for an LLM. archive.org copies of Mwindo (1969) and Abimbola's *Sixteen Great Poems of Ifá* (1975) are **unauthorized user uploads**; do not use them.
9. **To avoid or demote:**
   - **Meroitic** (script read, language mostly not understood);
   - **Libyco-Berber** (mostly names; poorly understood);
   - **Griaule's Dogon cosmology** (van Beek 1991: largely Griaule's construction);
   - **Merker's "biblical" Maasai traditions** (1904; unreliable).

---

## 1. Ranked shortlist

Ranked by combined benefit × feasibility. "Bible" names the commentary priority it serves (P1 = Gen 1–3; P2 = Gen 8:20–11:26; P3 = rest of Genesis/Exodus; P4 = law and ritual).

| # | Text | Language · date (composition / oral) · earliest witness | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Sabaic (and Minaic) confession/expiation inscriptions** | Sabaic (Haramic/N. Middle Sabaic), Minaic · c. 2nd c. BCE–2nd c. CE (verify per text) · originals (stone, bronze) | c. 30 known + c. 15 Minaic from Barāqish; 5–25 lines each; mostly good | P4: Lev 15:19–24, 18:19, 20:18; Lev 12; Lev 15:16–18; Lev 5:1–6, Num 5:6–7 (confession + restitution); Deut 23:11–12 | sin, illness as punishment, public shame, women's voices | **HIGH / HIGH** | CIH IV & RES (PD, reported); Sabaweb (verified, German); DASI (blocked; AI-use caveat) | Medium: Sabaic moderate; a small corpus; must be assembled text by text |
| 2 | **Safaitic (+ Hismaic) graffiti: a thematic selection** (laments, yearning, prayers, raids, curses, the few poems) | Safaitic (Old Arabic) · 1st c. BCE–4th c. CE · rock originals | >40,000 records; select c. 300–600 rich ones; mostly legible | P3: Gen 31:45–52 (cairn), 35:20 (*maṣṣevet* on a grave); Gen 25:13–15 (tribes); vows (Num 30); NW Semitic gods | grief, longing, the desert year, the nomad's prayer | MEDIUM / **HIGH** | OCIANA site (verified) + Zenodo PDFs **CC BY 4.0** (verified) | Good: formulaic; every record has a translation to check against |
| 3 | **The Muʿallaqāt** (7 or 10 odes) | Classical Arabic · oral, 6th c. CE · written down 8th–9th c.; mss later | c. 800–1,000 verses; textual variants | P3/P4 slight: Bedouin custom, blood vengeance (Num 35), hospitality (Gen 18) | the deserted camp, the she-camel, the beloved, wine, honour, death | LOW-MED / **HIGH** | Lyall 1894 (al-Tibrīzī, Arabic, PD, verified on archive.org); Ahlwardt 1870 (PD, verified); OpenITI (local only) | Very good (Arabic); hard lexicon, but the commentaries help |
| 4 | **The Mufaḍḍaliyyāt** (+ Aṣmaʿiyyāt) | Classical Arabic · 6th–early 7th c. oral · compiled c. 780 CE | 126–131 poems, c. 2,700 verses (verified OpenITI count) | as for #3 | the widest pre-Islamic soul anthology: laments, outlaws, raids, old age | LOW-MED / **HIGH** | **Lyall 1918–24, Arabic + English + notes, PD** (verified archive.org) | Very good |
| 5 | **Sabaean royal and building inscriptions** (Karibʾil Watar RES 3945–3946; Yithaʿʾamar Watar from Ṣirwāḥ; Awwām and Marib dedications) | Early Sabaic · c. 8th–7th c. BCE (Karibʾil Watar ↔ Sennacherib's Karibilu, 685 BCE) · originals | RES 3945 c. 20 long lines; RES 3946; tens of dedications | P2: Gen 10:7, 10:26–29, 25:3; 1 Kgs 10; *ḥerem*-like massacre lists ↔ Deut 7:2, 20:16–17 (debated); federation/covenant | conquest, the state god Almaqah, irrigation, building | MED-HIGH / MEDIUM | RES (PD, reported); Sabaweb (verified: RES 3945, 3946 included); new editions copyrighted | Medium |
| 6 | **Callaway's Zulu corpus**: *Religious System of the Amazulu* (1868–70) + *Nursery Tales* (1868) | isiZulu, 19th-c. orthography · oral, age unknown · recorded 1850s–60s | c. 450 + 380 pp., Zulu with facing English | P1: Gen 3 (death through a messenger: the chameleon and the lizard), 2:7 (man from the reed-bed); dreams and divination ↔ Gen 37, 40–41 | ancestors, diviners, dreams, possession | MED-HIGH / **HIGH** | **PD**, archive.org (verified, Zulu + English) | Medium-good: Zulu moderate; missionary context to flag |
| 7 | **Ibn al-Kalbī, *Kitāb al-Aṣnām*** (Book of Idols) | Classical Arabic · pre-Islamic memory · compiled c. 800 CE; ed. Zakī 1914 | c. 6,500 words (verified OpenITI) | P4: Deut 12:2–3, 16:21–22, Lev 26:1 (standing stones = *anṣāb*, sacred trees); Gen 28:18–22, 31:19 (teraphim?); lots and arrows ↔ Ex 28:30 | Arabian worship: Allāt, al-ʿUzzā, Manāt, Hubal, pilgrimage, circumambulation | MED-HIGH / **HIGH** | Zakī 1914 (PD by age, verify); OpenITI (verified) | Very good; Islamic framing to flag |
| 8 | **Dadanitic + Taymanitic** (incl. Nabonidus graffiti, JSLih 349 "Gashm", Lihyanite offering and *ẓll* rites) | Dadanitic, Taymanitic · 6th c. BCE (Tayma) and later; Dadanitic c. 5th–1st c. BCE (debated) · originals | Dadanitic PDF 858 pp. (c. 2,000+ texts); Taymanitic 224 pp.; mostly short | P2: Gen 10:7, 25:3, 25:15; Neh 2:19, 6:1; Dan 4 / 4Q242 (Nabonidus at Tayma) | oasis cult, offerings to Ḏū-Ġābat, soldiers' graffiti | MED-HIGH / MEDIUM | **Zenodo PDFs CC BY 4.0** (verified) | Good (short texts, translations given) |
| 9 | **Nabataean tomb inscriptions of Hegra (Madāʾin Ṣāliḥ)** + ʿĒn ʿAvdat + Namāra | Nabataean Aramaic (+ Old Arabic) · 1 BCE–75 CE (Hegra); 88–150 CE (ʿAvdat); 328 CE (Namāra) | c. 30–38 tomb texts, 5–10 lines each; good | P3/P4: Gen 23 (burial property law); Deut 27:15–26 (curses), 19:14 / 27:17 (boundaries); fines to god and king | death, family property, the gods Dushara, Manōtu, Allāt; one tomb of a Jew (verify) | MEDIUM / MEDIUM | Jaussen & Savignac 1909–14 (PD, verified archive.org); CIS II (PD); Healey 1993 (©); hegraconservation.com (verified) | Very good (Aramaic is strong) |
| 10 | **Biblical lore in pre- and early Islamic poetry**: Umayya b. Abī l-Ṣalt; ʿAdī b. Zayd's creation poem; al-Samawʾal | Classical Arabic · c. 550–630 CE · compiled 9th–10th c. | c. 1,000 verses (Umayya fragments); ʿAdī's poem c. 20–30 verses | P1: Gen 1–3 (six days, Adam, fig-leaf garment); P2: Gen 8 (raven and dove), Gen 22; as **early reception, not a source** | Arab monotheists before Islam | MED-HIGH / MEDIUM | Schulthess 1911 (Umayya, PD, reported); Aghani in OpenITI (verified); Samawʾal dīwān in OpenITI (verified) | Good; authenticity debated (Seidensticker 1996, 2011; Sinai 2011) |
| 11 | **Pre-Islamic laments (*rithāʾ*)**: al-Khansāʾ, al-Khirniq, the Ḥamāsa's elegy book | Classical Arabic · 6th–7th c. · compiled 8th–9th c. | al-Khansāʾ c. 1,000 verses (verify); Ḥamāsa *marāthī* | P4 slight: Lev 19:27–28, Deut 14:1 (mourning rites) | women's mourning, revenge, grief | LOW-MED / **HIGH** | OpenITI (verified: Khansāʾ, Khirniq, Ḥamāsa commentaries); PD 19th-c. editions (verify) | Very good |
| 12 | **Akan (Asante) corpus**: Rattray's *Ashanti Proverbs* (1916), the drum texts in *Ashanti* (1923), *Akan-Ashanti Folk-tales* (1930); Christaller's 1879 proverbs | Twi · oral, age unknown · recorded 1870s–1920s | 830 proverbs (Rattray); 3,600 (Christaller); drum poems; tales | P1: God withdraws to the sky (Gen 3:8, 3:23–24); P2: the tower of mortars ↔ Gen 11:4 | proverbs, drum praise of God the creator, Ananse | MEDIUM / **HIGH** | Rattray 1916/1923 PD (archive.org, verified); 1930 PD in the US since 2026 (verify scan access); Christaller PD (reported) | Medium: Twi moderate-weak; Platvoet's contamination caveat |
| 13 | **/Xam (San) texts of the Bleek & Lloyd collection** | /Xam (extinct, click language) · hunter-gatherer oral tradition, age unknown · recorded 1870–84 | *Specimens* 1911 c. 450 pp. (text + English); notebooks c. 12,000 pp. | P1: the Moon curses the Hare and death enters ↔ Gen 3:14, 3:19 (typological) | the Mantis creator-trickster, the stars, the rain, the "early race" | MEDIUM / **HIGH** | **PD** (archive.org verified); Digital Bleek & Lloyd (verified 200) | Low-medium: the LLM can't read /Xam; translate with Bleek & Lloyd's English as the gloss, and say so |
| 14 | **Ifá corpus (odù verses)** | Yoruba · oral, centuries (age unknown); attested 17th–18th c.+ · recorded 20th c. | huge; editions 186 (Bascom) to c. 250 verses | P1: Ọbàtálá lowers earth onto the primeval waters ↔ Gen 1:9–10 (typological) | divination, sacrifice, fate (*orí*) | MEDIUM / **HIGH** | Abimbola 1968/1975/1976, Bascom 1969 (all ©); unauthorized archive.org copy of 1975 | Medium-low: copyright; Yoruba moderate |
| 15 | **Sunjata (Sundiata) epic, bilingual versions** | Maninka/Mandinka · 13th-c. events (Mari Jata in Ibn Khaldūn, c. 1390s) · recorded 1960s–90s | 1,000s of lines per version | P3: exile and return of the rejected heir (Joseph, Moses, David), typological | the griot's word, kingship, the buffalo-woman, the sorcerer-king | LOW / **HIGH** | Innes 1974; Johnson 1979/1986; Jansen et al. 1995 (all ©) | Low: Maninka weak; copyright |
| 16 | **Tigre oral texts (Littmann, Princeton Expedition 1910–15)**: dirges, songs, tales | Tigre (Ethio-Semitic) · oral · recorded 1905–06 | 4 vols, text + translation | P3/P4 slight: Semitic pastoral custom | dirges, love songs, war songs | LOW-MED / MED-HIGH | PD in US (archive.org, verified catalogue); EU © until 2029 (Littmann d. 1958) | Medium-low: Tigre weak-moderate |
| 17 | **Aksumite royal inscriptions (ʿEzana and others)** | Ge'ez (also Greek, pseudo-Sabaic) · c. 330–360 CE; Kaleb 6th c. · originals | c. 10–15 texts of 15–50 lines | P2 slight: war annals, deities ↔ Deut 20 | pre-Christian gods (Maḥrem, ʿAstar), conversion | LOW / MEDIUM | Littmann, DAE IV 1913 (PD in US, verified archive.org); RIÉ 1991–2000 (©) | Medium: Ge'ez moderate; Dillmann's lexicon PD |
| 18 | **Maasai and Nandi texts (Hollis 1905, 1909)** | Maa, Nandi · oral · recorded c. 1900 | c. 350 pp. each, text + English | P1: Le-eyo's disobedience and death ↔ Gen 3; Naiteru-kop | cattle from the sky, age-sets, proverbs | MEDIUM / MEDIUM | **PD** (archive.org, verified) | Medium-low: Maa weak |
| 19 | **Malagasy: *hainteny* and *Tantara ny Andriana*** | Malagasy (Merina) · oral, 16th–19th c. · recorded 1860s–1900s | Tantara c. 1,200 pp.; hainteny hundreds of poems | low (P4 taboo law, typological) | love dialogues, riddling poetry, royal ancestor traditions | LOW / **HIGH** (hainteny) | Callet 1873–1902/1908 (PD, verified archive.org); Paulhan 1913 (PD in US, © in EU until 2039); Dahle 1877 (PD, reported) | Medium: Malagasy moderate |
| 20 | **Mwindo epic** | Nyanga · oral · recorded 1956 (Candi Rureke) | c. 1,000+ lines | low | a hero's journey to the underworld and sky | LOW / HIGH | Biebuyck & Mateene 1969 (©); unauthorized archive.org copy | Low |
| 21 | **Berber oral poetry**: Kabyle (Hanoteau 1867), Tuareg (Foucauld 1925–30) | Kabyle, Tamahaq · oral · recorded 19th–early 20th c. | 1,000s of verses | low | love, war, the *ahal* courtship | LOW / MED-HIGH | PD (Hanoteau; Foucauld PD in US); copies on archive.org are user uploads | Low-medium: Berber weak |
| 22 | **Swahili: Liyongo songs, *Utendi wa Tambuka* (1728), *al-Inkishafi* (c. 1810–20)** | Swahili (Kiamu, Arabic script) · 17th–19th c. · mss 18th–19th c. | medium | low (Islamic) | the hero-poet Liyongo; vanity of the world | LOW / MEDIUM | Steere 1870, Büttner 1894 (PD); Miehe et al. 2004 (©) | Medium |

---

## 2. The survey

### A. Old South Arabian (Yemen): Sabaic, Minaic, Qatabanic, Hadramitic

**General.** There are over 8,000 inscriptions (Sabaweb: "über 8000", from the 8th c. BCE to the 6th c. CE). The earliest are in the 10th–8th c. BCE range (by radiocarbon and palaeography; debated). Most are building, dedication and commemorative texts. There are also legal texts and several hundred letters and economic texts on palm-leaf stalks, in minuscule script. Everything survives as originals (stone, bronze, wood), so there is no manuscript tradition.

#### A1. Sabaic and Minaic confession (expiation) inscriptions: top Bible candidate of the region
**Sabaic (Northern Middle Sabaic, the "Haramic" dialect of the Jawf), Minaic, Qatabanic? · c. late 1st millennium BCE – early 1st millennium CE (verify per text) · originals · c. 30 Sabaic + c. 15 Minaic texts (Barāqish) + bronze tablets · mostly well preserved.**
- *What it is.* A person, often a woman, sometimes a group or a whole community, publicly confesses to a god, mostly Ḏū-Samāwī (Haram) or Nakraḥ (Barāqish). The tablet is set up in or near the temple.
  - The faults include: intercourse with a menstruating woman (*ḥyḍ*); intercourse during a period of ritual abstinence or pilgrimage; not washing after intercourse; entering the sanctuary impure; soiled clothing; one Awwām text deals with the violation of a slave girl.
  - The god "struck" the person with illness or loss. They confess ("I declare that I sinned…"), pay a fine and offer expiation.
  - The CORDIS project summary (Agostini) says the sins "frequently" concern sexuality and the punishments are "often illnesses or economic difficulties" (reported).
- *Bible parallels.*
  - Menstrual impurity and intercourse: Lev 15:19–24, 18:19, 20:18. Childbirth: Lev 12. Seminal impurity and washing: Lev 15:16–18, Deut 23:11–12.
  - Confession plus restitution: Lev 5:1–6 (*ve-hitvadda*), Num 5:6–7.
  - Illness as divine punishment: Num 12; Deut 28:21–22.
  - Impurity and the sanctuary: Lev 15:31.
  - These are among the very few ANE texts outside Israel to treat the *menstruant* as a cultic offence in a public penitential form. Consensus: the parallel in content is accepted; there is no direct contact. Dost (almuslih PDF; Dost 2022) compares the purity vocabulary of the Qurʾān and Old South Arabian (reported).
  - Key studies (reported): G. Ryckmans 1972 (*Le Muséon*); J. Ryckmans; Robin 1992 and later (e.g. Robin 2023); P. Stein, *Untersuchungen zur Phonologie und Morphologie des Sabäischen* / the Haramic studies (2003); A. Agostini 2012, "New perspectives on Minaean expiatory texts" (*PSAS*); Kropp 2002 (public piety or legal documents?); Maraqten 2021.
- *Soul.* This is guilt and illness in a pre-Islamic Semitic society, in the first person, often a woman's voice. It is a rare window onto private sexual life and the fear of the god.
- *Base text and tools.*
  - **Sabaweb** (`http://sabaweb.uni-jena.de/Sabaweb/`, **verified**) is the Sabaic Online Dictionary. Each lemma has its attestations, a German translation of the context, and a list of earlier translations. It covers 6,294 texts.
  - The root *ḥyḍ* gives CIH 523/3, 523/7 and CIH 533/4 (participle "menstruating"), and aṣ-Ṣilwī 2005/4 (verb). CIH 523 = RES 3445 = Haram 40; CIH 533 = Haram 34; CIH 532 = Haram 33 (verified).
  - Base texts: *CIH* (Corpus Inscriptionum Semiticarum, pars IV, 1889–1932: PD; archive.org has some volumes of CIS; the pars IV volumes need checking) and *RES* (PD).
  - DASI (Pisa) is blocked; see §4. No licence statement was seen on Sabaweb (treat as ©, query per word).
  - Dictionaries:
    - Beeston et al., *Sabaic Dictionary* (1982, ©). The archive.org item "mo3sab" is an unauthorized upload; do not use it.
    - Biella 1982 (©).
    - Stein's grammar (©).
  - Translations: the scholarly French, German and English renderings named above. No Hebrew translation known.
- *Feasibility and risks.* The LLM's Sabaic is moderate, and Haramic Sabaic has dialect features (Stein). The texts are short and formulaic, and Sabaweb gives a German check translation for every word in context. The main risk is assembling a reliable corpus list without DASI. Copyright: PD base texts (CIH/RES), plus our own translation.
- *Benefit*: Bible **HIGH** / Soul **HIGH**. *Recommendation*: **translate as a corpus** ("Sabaean and Minaean confessions"), paired with Lev 12/15/18:19 in the parallels index. First ask DASI/CSAI (Pisa) for permission and a data dump.

#### A2. Sabaean royal and building inscriptions (Karibʾil Watar, Yithaʿʾamar Watar, the Marib dam, Awwām)
**Early Sabaic · c. 8th–7th c. BCE onward · originals · RES 3945 c. 20 very long lines, RES 3946; the Ṣirwāḥ "Tatenbericht" of Yithaʿʾamar Watar (published by Nebes; title and year to verify); hundreds of Awwām dedications (Jamme 1962, ©) · good.**
- *What it is.* RES 3945/3946 (= Gl 1000 A/B, the Ṣirwāḥ temple of Almaqah, both verified in the Sabaweb list) are Karibʾil Watar's account of his campaigns. They list the cities he burned, the people he killed and captured, the lands he gave to Almaqah and Saba, and the "communities" he founded.
  - Karibʾil is usually identified with Karibilu of Saba, who sent gifts to Sennacherib (c. 685 BCE).
- *Bible parallels.*
  - Gen 10:7 (Sheba son of Raamah), 10:26–29 (Hazarmaveth = Ḥaḍramawt, Sheba, Ophir, Havilah, Jobab), 25:3; 1 Kgs 10. These are P2 (the Table of Nations), with real ethnographic names.
  - The massacre and dedication lists have been compared with *ḥerem* (Deut 7:2, 20:16–17; Num 21:2–3). Consensus: debated.
  - The god-king-people federation formula has been compared with covenant ideology (debated).
  - Incense: the aromatics on South Arabian incense altars ↔ Ex 30:23–24, 34 (*levonah*, *qāne*); the trade ↔ Gen 37:25. This is reported; give exact sigla when the text is assembled.
- *Soul.* The ideology of the state god Almaqah, irrigation and building as piety.
- *Base and tools.* RES (PD); Sabaweb (verified includes RES 3945/3946); recent editions (Nebes; Robin) are ©. Hebrew: none known.
- *Feasibility.* Early Sabaic is moderate for an LLM; the texts are long and in good condition. The size is medium (a few hundred lines for the royal set).
- *Benefit*: Bible MED-HIGH (P2) / Soul MEDIUM. *Recommendation*: a **companion corpus to Gen 10** (royal inscriptions plus a selection of the incense and trade texts). Do it after A1.

#### A3. Minaean trade texts (the lists of foreign wives; Gaza, Egypt, Dedan)
**Minaic · c. 4th–2nd c. BCE (verify) · originals · RES 3357 and related "hierodule/wives" lists, the Minaean colony texts at Dedan and in Egypt (the Gizeh sarcophagus of a Minaean merchant, 3rd c. BCE) · fair.**
- The lists record foreign women from Gaza, Egypt, Moab and Dedan "given" to the god ʿAṯtar of Qabḍ. These are reported from my knowledge; the search budget ran out before checking (verify the sigla).
- *Bible*: P2/P3 (Gen 10, 25; trade routes; Gen 37:25). MEDIUM. *Soul*: MEDIUM. *Recommendation*: an excerpt inside A2.

#### A4. Other Old South Arabian genres (briefly)
- **Legal texts.**
  - The Qatabanic market law of Timnaʿ (RES 4337, verify) and Sabaic decrees on land, water and irrigation ↔ Ex 21–23 (P4).
  - These are short and technical. MEDIUM / LOW-MED.
- **The ritual hunt** (*ṣyd*, for ʿAṯtar).
  - It is attested in royal inscriptions and later Hadrami tradition. There are no Torah parallels, apart from a typological link to the hunt and the king. LOW / MEDIUM.
- **The rhymed hymn from Qāniya** (to the sun goddess? the Qāniʾ/Qāniya texts are in Sabaweb: "Qāniʾ 1–5", "MAFRAY-Qāniya 3", verified as list entries).
  - It is reported to be the only Old South Arabian poem, in rhymed verse. Verify which siglum is the hymn and its publication (Robin and others).
  - Soul: MED-HIGH (unique); Bible: LOW-MED (hymnody).
  - *Recommendation*: include it in A1 or A2 as a jewel.
- **Minuscule letters on palm-leaf stalks** (several hundred; Ryckmans–Müller–Abdallah 1994; Stein 2010 Munich collection, ©).
  - These are everyday letters and contracts: the "soul" of daily life. But the minuscule script is hard, the editions are © and the language is a weak point. LOW / MED-HIGH.
  - *Recommendation*: later, if a Stein edition becomes accessible.
- **Himyarite monotheist and Jewish inscriptions** (4th–6th c. CE: *Raḥmānān*, "Israel"; Yūsuf Asʾar Yaṯʾar / Ḏū Nuwās at Bir Ḥimā, 523 CE).
  - These are Jewish history, not Torah sources. They are of high interest to Hebrew readers, but late. LOW (Bible) / MEDIUM. (Robin's studies, ©.)

### B. Ancient North Arabian (OCIANA corpora)

#### B1. Safaitic graffiti (with the Hismaic and mixed texts): top Soul candidate of the region
**Safaitic (an Old Arabic dialect, in a South Semitic script) · c. 1st c. BCE – 4th c. CE (dated by events, rarely by era) · rock originals in the Ḥarra of Syria, Jordan and Saudi Arabia · OCIANA "over 40,000 inscriptions in all the ANA scripts" (verified site text); new records reach ID 47,897 (verified, 21 Oct 2026) · condition varies; many perfectly legible.**
- *What it is.* Nomads carved their names and lineages, and then, in the longer texts, what they did and felt. Examples:
  - "he grieved (*wgm*) for his brother, killed by…";
  - "he longed (*s²wq*) for his beloved";
  - "he spent the season here", "he kept watch", "he raided";
  - prayers ("O Allāt, [grant] security / vengeance / spoil");
  - curses on anyone who effaces the text, blessings on anyone who leaves it intact.
  - A verified sample, BES24_FWKh1 53: "By Š²mt son of Ymlk … and he built upon Gb and grieved for Mlkt and for his father's mother and for his paternal grandmother and for Mḥlm, so O Allāt, [grant] a blood-wit to those who remain alive" (OCIANA, translated by Al-Jallad).
  - OCIANA subject tags (verified) include "Grieving", "Grieving for a group", "Yearning", "greetings or love (*wdd*)", "Curse", "Insults", "Sexual references", "Raiding", "Revenge", "Weather", "Astronomical", "Hunting", "Funerary" and "Prayer".
  - **Poems:** KRS 2453 (Safaito-Hismaic), which Al-Jallad 2015 reads as three lines echoing Baal and Mōt (OCIANA gloss: "Mōt has celebrated a feast… behold, Baal is cut off… but not dead"), and a further Safaitic poem published by Al-Jallad 2017 in *PSAS* (reported).
- *Bible parallels.*
  - Cairns built over graves with grief ↔ Gen 31:45–52 (*gal*/*maṣṣevah*), 35:20 (Rachel's *maṣṣevet qevurah*); the *nfs¹* memorial (= *nefeš* as monument, also in Nabataean) ↔ later Hebrew usage.
  - Tribal and nomadic life ↔ the patriarchs (P3), with the tribes of Gen 25:13–15 known from other ANA and Assyrian sources (Qedar, Nebaioth?).
  - Gods (Baʿalšamīn, Dushara, Allāt, Gadd) ↔ NW Semitic religion. KRS 2453 ↔ the Ugaritic Baal–Mot cycle, so indirectly Gen 1:21 and Isa 27:1 (typological).
  - Consensus: these are cultural parallels, not textual ones. MEDIUM at best for the Torah.
- *Soul.* The best window in the whole region: thousands of individual voices of grief, longing, fear and prayer, with no literary filter.
- *Base text and tools.*
  - **OCIANA** (`https://ociana.osu.edu/`, verified): per record, a transliteration, an English translation, notes and references. Images are sometimes CC BY (e.g. "BES24; CC BY", verified).
  - The text licence on the website is not stated (footer "© 2024 The Ohio State University").
  - **Zenodo: "The OCIANA Corpus of Safaitic inscriptions: Preliminary Edition" (Al-Manaser & Macdonald, Oxford 2017), record 5604411, 79 MB PDF, CC BY 4.0** (verified metadata). Hismaic: record 5619984 (9 MB, CC BY 4.0). Smaller collections: 5620125.
  - The search form on the site needs a browser: scripted GETs redirect to `/advanced_search`. Records are fetchable by numeric ID: `/inscriptions/<n>` (verified).
  - Grammar and dictionary:
    - Al-Jallad 2015, *An Outline of the Grammar of the Safaitic Inscriptions* (Brill, SSLL 80; ©; a revised 2nd-edition pre-print, 2022, is on academia.edu, which returns 403 to scripts);
    - Al-Jallad & Jaworska 2019, *A Dictionary of the Safaitic Inscriptions* (Brill, ©, c. 1,400 lemmata);
    - **Al-Jallad 2022, *The Religion and Rituals of the Nomads of Pre-Islamic Arabia: A Reconstruction Based on the Safaitic Inscriptions* (Brill, open access; licence reported as CC BY-NC-ND 4.0; OAPEN handle 20.500.12657/54655)**. The OAPEN PDF returned 403 (Anubis) to scripts, so it is reported;
    - Al-Jallad, *A concise Safaitic chrestomathy* (academia.edu, reported).
  - Hebrew: none known.
- *Feasibility and risks.* Safaitic is modest for an LLM, but the texts are highly formulaic and every record has a scholarly English translation to check against. The risk is the opposite of anchoring: the translation must be checked, not copied (guidelines §3).
  - Selection work is needed: filter by subject, and prefer long "narrative" texts.
  - The Zenodo PDF is the committable base. Later readings on the live site should be cited, not bulk-copied.
- *Benefit*: Bible MEDIUM / Soul **HIGH**. *Recommendation*: **translate a thematic anthology** of c. 300–600 texts: laments, yearning, prayers and curses, raids and the seasons, and the poems. This is the region's best "soul" project.

#### B2. Dadanitic (formerly "Lihyanite") and Taymanitic
**Dadanitic (al-ʿUlā/Dadan; c. 5th–1st c. BCE, debated) and Taymanitic (Tayma; 6th c. BCE, three texts datable by Nabonidus) · originals · Dadanitic Preliminary Edition 858 pp., Taymanitic 224 pp. (verified page counts) · mostly short.**
- *What it is.* Dadanitic includes dedications and offering texts to Ḏū-Ġābat, records of the *ẓll* ceremony ("he performed the *ẓll* for Ḏġbt", al-ʿUḏayb texts; Hidalgo-Chacón 2009), royal dates of the kings of Liḥyān, and building and water texts. Taymanitic texts are short graffiti, several by men of Nabonidus' time:
  - "I am Mrdn {servant of} Nabonidus king of Babylon, I came with the Chief Officer Kyt…" (verified in the OCIANA Taymanitic PDF; Hayajneh 2001 *PSAS* 31).
- *Bible parallels.*
  - Dedan and Tema in Gen 10:7, 25:3, 25:15 (P2/P3).
  - **JSLih 349** dated "in the days of Gšm son of S²hr and ʿbd governor of Dedan" ↔ Geshem the Arab, Neh 2:19, 6:1–6 (reported; widely cited).
  - Nabonidus' ten years at Tayma ↔ Dan 4 and the Qumran Prayer of Nabonidus (4Q242) (outside the Torah).
  - Kootstra 2016: Taymanitic is closer to NW Semitic than other ANA (reported in the PDF introduction, verified).
- *Soul.* Oasis cult, offerings and royal ceremony: modest.
- *Base and tools.* **Zenodo CC BY 4.0 PDFs** (Dadanitic 5604514, Taymanitic 5619883; verified downloads); OCIANA live records. Hebrew: none.
- *Feasibility.* Good: the texts are short and the translations are given. But the yield is small per text.
- *Benefit*: Bible MED-HIGH (for P2 names and the Geshem link) / Soul MEDIUM. *Recommendation*: a **small dossier for Gen 10 / Gen 25** together with A2 and B4 ("Arabian names of the Table of Nations"), rather than a full corpus.

#### B3. Thamudic B/C/D, Southern Thamudic, Hismaic (outside B1), Dumaitic, Hasaitic, Dhofari
- These are short graffiti (names, love, greetings). Dumaitic (Dūmat al-Jandal ↔ Dumah, Gen 25:14) has only a handful of texts. Hasaitic texts are funerary.
- **Dhofari is still undeciphered** (Geraldine King's 1990s survey recorded c. 900 texts; reported in the OCIANA PDF preface, verified).
- *Recommendation*: Thamudic B love graffiti could join B1. The rest goes to §3.

#### B4. Nabataean (Hegra tombs, ʿĒn ʿAvdat, Namāra)
**Nabataean Aramaic (with Old Arabic in ʿĒn ʿAvdat and Namāra) · Hegra tombs dated 1 BCE – 75 CE; ʿĒn ʿAvdat 88/9–125/6 CE (Negev; ≤ 150); Namāra 328 CE · originals · c. 30–38 monumental tomb texts (5–10 lines each) · good.**
- *What it is.* The Hegra façades state who owns the tomb and who may be buried in it. They forbid selling, pledging or leasing it, and they add a fine to Dushara and/or the king and a curse:
  - "May Dushara and his throne and Allāt of ʿAmnad and Manōtu and her Qaysha curse anyone who sells … or removes a body or limb" (hegraconservation.com, quoting Healey; reported).
  - ʿĒn ʿAvdat (Negev, Israel): four lines of Aramaic and two of Old Arabic in praise of the deified Obodas. Bellamy 1990 reads the Arabic as verse (debated: Hämeen-Anttila; Al-Jallad 2017 counts it as one of two or three Old Arabic poems).
  - Namāra: the epitaph of Imruʾ al-Qays "king of all the Arabs" (5 lines).
- *Bible parallels.*
  - Gen 23 (purchase and right of burial, the family tomb "for possession").
  - Deut 27:15–26 (*ʾārūr* curses), Deut 19:14 / 27:17 (boundary), and fines paid to the sanctuary (Lev 5:15–16, 27).
  - The gods ↔ the Arabian cults of the Torah's world.
  - MEDIUM; accepted as cultural parallels.
- *Soul.* The care of the dead and fear for the tomb's integrity; one Hegra tomb text names a Jew (verify, reported from memory: H 4).
- *Base and tools.*
  - **Jaussen & Savignac, *Mission archéologique en Arabie* (1909–1914), PD; archive.org items `missionarcheolog02jaus` etc.** (verified metadata, Getty scans). CIS II (PD).
  - Healey 1993, *The Nabataean Tomb Inscriptions of Madaʾin Salih* (JSS Suppl. 1, ©).
  - DiCoNab (Nehmé et al., CC BY-NC 4.0, reported; host `diconab.huma-num.fr` unreachable here).
  - CAL (`cal.huc.edu`, verified 200) for Aramaic lexicon.
  - Hebrew: scattered translations in Israeli scholarship (Negev, Naveh, Yardeni; verify). The Naḥal Ḥever Nabataean papyri (Yadin et al. 2002) belong to the Judaean-desert/Aramaic survey.
- *Feasibility.* Very good: Aramaic is strong and the texts are clear.
- *Benefit*: Bible MEDIUM / Soul MEDIUM. *Recommendation*: a **quick-win corpus** (c. 40 texts) "Arabian tomb laws and curses", with ʿĒn ʿAvdat and Namāra as appendices.

### C. Pre-Islamic Arabic poetry and lore

**General.** This is oral poetry of the 6th and early 7th c. CE, transmitted by *rāwīs* and fixed in writing by the Basran and Kufan philologists of the 8th–9th c. The earliest manuscripts are mostly 10th c. or later.
- **The authenticity debate:** Margoliouth 1925 and Ṭāhā Ḥusayn 1926 (*Fī l-shiʿr al-jāhilī*) argued wholesale forgery. Today most scholars accept a large authentic core, reshaped in transmission. Variants, attributions and some whole poems are doubtful (Jones 1992–96; Sells; Bauer).
- The commentators (al-Anbārī, al-Tibrīzī, al-Zawzanī) and Lane's *Lexicon* are the essential apparatus.
- An LLM is **very good** in Classical Arabic, but the *jāhilī* lexicon (camels, terrain, weapons) is hard. Rely on the commentaries.

#### C1. The Muʿallaqāt
**Classical Arabic · 6th c. CE oral · compiled 8th c. (Ḥammād al-Rāwiya, traditionally) · 7 odes (Imruʾ al-Qays, Ṭarafa, Zuhayr, Labīd, ʿAntara, ʿAmr b. Kulthūm, al-Ḥārith b. Ḥilliza), or 10 with al-Aʿshā, al-Nābigha and ʿAbīd · c. 800–1,000 verses · good, but with variants.**
- *What it is.* The classic *qaṣīda*:
  - the poet stops at the traces of the deserted campsite and weeps for the departed beloved (*nasīb*);
  - he rides the she-camel across the desert (*raḥīl*);
  - then come boasting, wine, the hunt, tribal honour, and Zuhayr's wisdom on war and peace.
- *Bible.* Little direct contact. Bedouin custom (blood money and vengeance ↔ Num 35, Gen 4:23–24 Lamech's song as a jāhilī-type boast!), hospitality (Gen 18). Zuhayr's ode on the futility of war is a wisdom text. LOW-MED.
- *Soul.* HIGH: the classic Bedouin soul.
- *Base and tools.*
  - Lyall 1894, *A Commentary on Ten Ancient Arabic Poems* (al-Tibrīzī, Arabic, PD), archive.org `india.history.resource.111027` (verified metadata).
  - Ahlwardt 1870, *Divans of the Six Ancient Arabic Poets* (PD; `divanssixancien00alqgoog`, verified).
  - OpenITI: the separate Muʿallaqa files (ShamAY), the full dīwāns, and **al-Zawzanī's *Sharḥ al-Muʿallaqāt* (255,682 chars)** (verified metadata; local only).
  - Lane's *Lexicon*: ejtaal.net (verified 200) and arabiclexicon.hawramani.com (verified 200).
  - Translations: Arberry 1957; Jones 1992–96 (*Early Arabic Poetry*, with commentary); Sells 1989; *The Muʿallaqāt for Millennials* (Ithra 2020).
  - **Hebrew: none found** (searches 2026-10-21; NLI catalogue not reachable: verify).
- *Feasibility.* Very good.
- *Benefit*: Bible LOW-MED / Soul **HIGH**. *Recommendation*: **translate** (the first apparatus-rich Hebrew Muʿallaqāt, if confirmed). Pair it with C2.

#### C2. The Mufaḍḍaliyyāt and the Aṣmaʿiyyāt
**Classical Arabic · 6th–early 7th c. · compiled by al-Mufaḍḍal al-Ḍabbī (d. c. 780) and al-Aṣmaʿī (d. 828) · Mufaḍḍaliyyāt 126 (Lyall) / 131 sections and 2,723 verse lines in the Shākir–Hārūn edition (verified count on the OpenITI file); Aṣmaʿiyyāt c. 72 poems (OpenITI verified, 16,527 tokens).**
- *What it is.* The broadest anthology: Taʾabbaṭa Sharran (it opens the collection; verified first lines), outlaws, laments, raids, old age, horses, and women's voices.
- *Bible.* As C1. *Soul.* **HIGH**.
- *Base.*
  - **Lyall, *The Mufaḍḍalīyāt*, Oxford 1918–24: vol. 1 the Arabic text with al-Anbārī's commentary, vol. 2 translation and notes, vol. 3 indexes. PD; archive.org `mufaddaliyatant01mufauoft`, `mufaddaliyatanth00mufauoft` (Toronto) and DLI copies** (verified metadata).
  - OpenITI `0168MufaddalDabbi.Mufaddaliyyat` (verified download; modern edition, local only).
- *Benefit*: Bible LOW-MED / Soul **HIGH**. *Recommendation*: **translate** (Lyall gives a PD base + a check translation + notes, the ideal arrangement).

#### C3. Laments (*rithāʾ*): al-Khansāʾ, al-Khirniq, the elegy book of Abū Tammām's *Ḥamāsa*
- **Language and dates:** Arabic, 6th–7th c. Al-Khansāʾ's elegies for her brothers Ṣakhr and Muʿāwiya are the classical laments.
- **OpenITI** (verified metadata): `0024TumadirBinCamrKhansa.Diwan`, `0050KhirniqBintBadr.Diwan`, and al-Marzūqī's and al-Tibrīzī's Ḥamāsa commentaries.
- *Bible*: mourning rites (laceration, hair, the women's lament) ↔ Lev 19:27–28, Deut 14:1, Gen 23:2, 50:10. LOW-MED.
- *Soul*: **HIGH**.
- *Recommendation*: a selection, as a companion to C1/C2 and to the Safaitic laments (B1). Grief in Arabia across 700 years would make a striking pair.

#### C4. Ibn al-Kalbī, *Kitāb al-Aṣnām* (Book of Idols)
**Classical Arabic · pre-Islamic memory · compiled by Hishām Ibn al-Kalbī (d. 819/821) · ed. Aḥmad Zakī Pasha 1914 (Cairo) · c. 26,000 chars / 6,500 words (OpenITI, verified) · single manuscript tradition (the Zakī edition rests on one ms.; verify).**
- *What it is.* An account of the idols and sanctuaries of the Arabs:
  - Wadd, Suwāʿ, Yaghūth, Yaʿūq and Nasr (the Qurʾān's "gods of Noah");
  - Allāt at Ṭāʾif, al-ʿUzzā's three acacia trees at Nakhla, Manāt by the sea, Hubal in the Kaʿba with divination arrows;
  - standing stones (*anṣāb*) for circumambulation, pilgrimage talbiyas, and the origin of idolatry from stones taken from Mecca.
- *Bible parallels.*
  - P4: standing stones and sacred trees ↔ Deut 12:2–3, 16:21–22, Lev 26:1, Ex 23:24, 34:13.
  - P3: Jacob's stone pillar Gen 28:18–22 and the household gods of Gen 31:19, 31:34.
  - Arrow divination ↔ Ezek 21:26, and lots ↔ Ex 28:30, Num 27:21, Lev 16:8.
  - The "gods of Noah" link to Gen 6–9 comes through the Qurʾān (71:23), so it is late.
  - Consensus: the cultural parallels are accepted (Wellhausen 1887/97, Robertson Smith 1889), with the caveat of the Islamic frame.
- *Soul.* HIGH: the only systematic native account of Arabian paganism.
- *Base.*
  - OpenITI `0204IbnKalbi.Asnam` (verified; from Zakī's edition, which is PD by age: Zakī d. 1934, verify).
  - Wellhausen, *Reste arabischen Heidentums* (1897, PD; archive.org verified).
  - Translations: Klinke-Rosenberger 1941 (German), Faris 1952 (English), Atallah 1969 (French), all ©. Hebrew: none known.
- *Feasibility.* Very good (prose Arabic, short).
- *Benefit*: Bible MED-HIGH / Soul **HIGH**. *Recommendation*: **translate** (a quick win, about one session). It explains the gods of B1, B4 and A.

#### C5. Biblical narrative in pre- and early Islamic poetry: Umayya b. Abī l-Ṣalt, ʿAdī b. Zayd, al-Samawʾal
**Classical Arabic · c. 550–630 CE · dīwāns compiled 9th c. (Umayya: Muḥammad b. Ḥabīb, d. 859).**
- *What it is.*
  - **Umayya**, a ḥanīf of Ṭāʾif: poems on creation, heaven and hell, Noah's flood with the raven and the dove, Abraham's sacrifice, and Thamūd.
  - **ʿAdī b. Zayd**, a Christian of al-Ḥīra: a poem on the creation in six days, Adam and Eve, and the fall with the fig-leaf garment (reported; the text is in the *Aghānī*).
  - **al-Samawʾal b. ʿĀdiyāʾ**, the Jewish lord of Tayma: proverbial for faithfulness; his *lāmiyya*.
- *Bible.* P1 (Gen 1–3) and P2 (Gen 8:6–12, the birds), but as **reception**: Arab retellings of biblical lore, not sources. The value lies in which details Arab monotheists kept and changed, before or alongside the Qurʾān.
  - Authenticity is debated. Since Nöldeke, much of Umayya has been judged forged or Qurʾān-influenced. Seidensticker 1996 and 2011 surveyed the debate; Sinai 2011 (*BSOAS*) argues the Thamūd passage is pre-Qurʾānic (reported).
- *Soul.* MEDIUM: Arabian monotheism before Islam.
- *Base.*
  - Schulthess 1911, *Umajja ibn Abi ṣ Ṣalt: Die unter seinem Namen überlieferten Gedichtfragmente* (Leipzig; PD; not found on archive.org by title: verify on HathiTrust or the DLI).
  - *Aghānī* in OpenITI (verified, 6.1 M chars).
  - Samawʾal dīwān in OpenITI (verified; small); Hirschberg 1931 edition (verify).
- *Benefit*: Bible MED-HIGH / Soul MEDIUM. *Recommendation*: a **dossier** (creation, flood and sacrifice passages, c. 150–300 verses), translated with a full authenticity apparatus. It is a natural companion to Gen 1–3 and to the Gen 8 commentary.

#### C6. Other pre-Islamic lore (briefly)
- **Ayyām al-ʿArab** (the "battle days") are prose-and-verse sagas: the war of Basūs, Dāḥis and al-Ghabrāʾ. They are preserved in the *Naqāʾiḍ* (Bevan 1905–12, PD), the *Aghānī* and Ibn al-Athīr. They are saga-like and late-shaped. Soul MED-HIGH, Bible LOW-MED (Gen 34, 14 as tribal war narratives).
  - *Recommendation*: later, a selection (e.g. Basūs).
- **The rhymed prose (*sajʿ*) of the *kāhins*** (soothsayers) is preserved in the *Sīra* and the *Aghānī*; authenticity is doubtful. *kāhin* ↔ Hebrew *kohen*; oracle style ↔ Balaam (Num 22–24). LOW-MED / MEDIUM. Excerpt only.
- **Proverbs**: al-Mufaḍḍal's *Amthāl al-ʿArab* (OpenITI verified) and Freytag's *Arabum proverbia* (1838–43, Arabic + Latin, PD; archive.org verified). Soul MEDIUM; Bible LOW (Proverbs is outside the Torah).

### D. Ethiopia and Eritrea (Ge'ez and Ethio-Semitic)

#### D1. Aksumite royal inscriptions (ʿEzana, his predecessor Ousanas, Kaleb)
**Ge'ez (unvocalized and vocalized), Greek, and Ge'ez in a pseudo-Sabaic script · c. 330–360 CE (ʿEzana); 6th c. (Kaleb) · stone originals · c. 10–15 royal texts of 15–50 lines · good.**
- *What it is.* War annals: campaigns against the Beja and Noba, with numbers of the killed and captured, booty and cattle, and thrones set up.
  - ʿEzana's early texts invoke Maḥrem ("my invincible father"), ʿAstar, Beḥer and Medr. The later ones invoke the "Lord of Heaven" and then the Trinity.
  - Kaleb's text quotes Psalms (reported).
- *Bible.* Deut 20 (war law) only typologically; the Christian texts are reception. LOW.
- *Soul.* MEDIUM: the moment of a king's conversion.
- *Base.*
  - Littmann, *Deutsche Aksum-Expedition* IV, *Sabäische, griechische und altabessinische Inschriften* (1913): PD in the US; EU © until 2029 (Littmann d. 1958). archive.org `sabaischegriechi00litt` (Princeton) (verified metadata).
  - RIÉ (Bernand, Drewes, Schneider 1991–2000, ©).
  - Dillmann, *Lexicon linguae aethiopicae* (1865, PD; archive.org verified) and Dillmann's grammar (PD). Leslau 1987 (©). Beta maṣāḥǝft (Hamburg, verified 200).
- *Feasibility.* Medium: Ge'ez is moderate for an LLM, and the corpus is small.
- *Benefit*: Bible LOW / Soul MEDIUM. *Recommendation*: optional, a small corpus.

#### D2. Tigre oral literature (Littmann 1910–15) and Oromo (Cerulli 1922)
- Tigre: tales, customs, dirges and songs recorded in 1905–06 in the original language, with translation. Oromo: Cerulli's *Folk-literature of the Galla* (Harvard African Studies 3, 1922; Oromo + English; PD in the US; not found by title on archive.org: verify).
- Soul MED-HIGH (the Tigre dirges especially); Bible LOW-MED (Semitic pastoral society).
- The languages are weak to moderate for an LLM.
- *Recommendation*: later, a dirge selection, if a Ge'ez/Tigre project is ever opened.

### E. Nubia and the Maghreb

#### E1. Meroitic
- Meroitic is the language of the kingdom of Kush, written in two scripts (hieroglyphic and cursive). There are about 2,000 texts, from the 2nd c. BCE to the 4th c. CE. The script was read by Griffith in 1911, but **the language is still largely not understood.** Only the funerary formulae (invocations to Isis and Osiris, offerings of water and bread) are broadly understood. The long royal stelae (e.g. Akinidad's Hamadab stele) are not.
- Rilly classes it as Northern East Sudanic, and a 2025 computational corpus exists (Otten & Anastasopoulos, reported).
- Bases: REM (Leclant et al. 2000, ©); Griffith 1911, *Karanòg: the Meroitic Inscriptions of Shablûl and Karanòg* (PD; archive.org verified).
- *Recommendation*: **exclude** (an LLM translation would be fiction). At most, a note on the funerary formula.

#### E2. Libyco-Berber inscriptions
- There are about 1,100+ inscriptions (Chabot, *Recueil des inscriptions libyques* 1940–41; the archive.org copies are user uploads). They are mostly funerary names.
- The Dougga Punic–Libyan bilinguals (the temple of Masinissa, 139 BCE; the Ateban mausoleum) are partly understood through the Punic.
- *Recommendation*: **exclude** (poorly understood; tiny yield). The Punic sides belong to the Phoenician survey.

#### E3. Berber oral poetry
- Hanoteau 1867, *Poésies populaires de la Kabylie du Jurjura* (Kabyle + French, PD).
- Foucauld 1925–30, *Poésies touarègues* (Tamahaq + French, c. 6,000 verses; PD in the US; verify the EU status of the editor).
- These are 19th-c. recordings of an old genre. Soul MED-HIGH; Bible LOW. Berber is weak for an LLM. *Recommendation*: later, or not at all.

### F. Sub-Saharan oral traditions recorded in the original language

**General caveats.**
1. Almost all were recorded between 1850 and 1990, so the date of the tradition can rarely be estimated (genealogies and external anchors at best).
2. Many were collected by missionaries, often from converts. Platvoet 2012 (*Ghana Bulletin of Theology* n.s. 4; verified PDF) states for the Akan that "the stories about *tete* were told to missionaries mostly by converts", and that biblical motifs appear in some versions (Eve's role cast onto the old woman).
3. Most good bilingual editions after c. 1930 are copyrighted.
4. LLM competence is weak for most of these languages.

#### F1. African myths of the origin of death and of God's withdrawal (a category)
- *What it is.* These myths are very widespread:
  - **the two messengers**: the chameleon (life) is slow and the lizard or hare (death) is fast;
  - **the moon's message** ("as I die and live again, so shall you") is distorted;
  - **God struck by a pestle** or offended, who withdraws to the sky;
  - **the cut rope or tower** between sky and earth.
- *Bible.* Gen 3 (death, the animal messenger, the curse on the animal ↔ 3:14), Gen 3:22–24 (separation from God), Gen 11:1–9 (the tower). These are typological parallels without contact. Abrahamsson 1951, *The Origin of Death: Studies in African Mythology* (Uppsala, ©), is the classic survey. Frazer, *Folk-lore in the Old Testament* (1918, PD; archive.org verified), compares them with Gen 3 directly, and is useful as history of research.
- *Witnesses in the original language* (all PD, archive.org verified unless stated):
  - **Zulu**: Callaway 1868–70 (see F2).
  - **/Xam**: Bleek & Lloyd 1911 (F3).
  - **Maasai**: Hollis 1905 (the story of Le-eyo, who refuses the burial formula and so brings death; the table of contents "The story of Le-eyo's disobedience", p. 371, verified) and **Nandi** (Hollis 1909).
  - **Sesotho**: Jacottet 1908, *The Treasury of Ba-suto Lore* (original Sesotho texts with a literal English translation).
  - **Akan**: Rattray (F4).
  - The **Dinka** cut rope and the woman's hoe (Lienhardt 1961, English, ©).
- *Recommendation*: **a comparative dossier** "Africa and Gen 3 / Gen 11". Use 8–12 short texts, each from its original-language edition. State the recording date, the collector and the risk of missionary feedback for each.
  - Bible MED-HIGH (P1, P2; typological) / Soul HIGH.

#### F2. Callaway's Zulu texts
**isiZulu · oral (age unknown) · recorded by Henry Callaway, a missionary, from named informants, 1850s–60s · *Religious System of the Amazulu* (1868–70; c. 450 pp.) and *Nursery Tales, Traditions, and Histories of the Zulus* (1868; c. 380 pp.) · Zulu text with facing English; PD (archive.org `relamazulu00calluoft`, verified OCR: "It is said he sent a chameleon … Go, Chameleon…", with the Zulu *intulo* "lizard").**
- *What it is.* Unkulunkulu, "the very old one", who broke off men from the reed-bed (*uthlanga*). The chameleon and lizard message. The ancestor spirits (*amatongo*), dreams, diviners (*izinyanga*), possession, and the calling of a diviner, all in the informants' own words.
- *Bible.* Gen 2:7 (origin), Gen 3 (death message; the animals), Gen 37 and 40–41 (dreams), Deut 18:10–11 (diviners, necromancy). Typological. The debate over whether "Unkulunkulu" as creator is colonial-era shaping is reported from my knowledge (Hexham; Chidester): flag it, verify.
- *Soul.* HIGH.
- *Tools.* Colenso's Zulu–English dictionary (1861, PD; reported); Doke–Vilakazi (©). An LLM is moderate in Zulu (19th-c. orthography differs).
- *Benefit*: Bible MED-HIGH / Soul **HIGH**. *Recommendation*: **translate selected chapters** (Unkulunkulu; the origin of death; diviners and dreams). Callaway's English serves as the check translation.

#### F3. The /Xam (San) Bleek & Lloyd collection
**/Xam (!Ui-Taa; extinct; click language) · oral tradition of southern African hunter-gatherers · recorded 1870–84 from /A!kunta, //Kabbo, Diä!kwain and others · *Specimens of Bushman Folklore* (1911, c. 470 pp., text + English, PD; archive.org verified, including "The Moon … said to the hare … his mother … would again living return"); the notebooks (c. 12,000 pp.) at the Digital Bleek & Lloyd (`digitalbleeklloyd.uct.ac.za`, verified 200).**
- *What it is.* The Mantis (/Kaggen), the moon and the hare (the origin of death; the hare's split lip as the moon's curse), the girl who made the Milky Way from ashes, the rain-animal, and the "first at Bushmen", the early race.
- *Bible.* Gen 3:14 and 3:19 (curse on an animal; death), typological. MEDIUM.
- *Soul.* HIGH: arguably one of the oldest ways of life recorded anywhere.
- *Feasibility.* **Low for "from the original"**: an LLM cannot read /Xam (Bleek's *Bushman Dictionary* 1956, ©). The honest method is to translate from Bleek & Lloyd's very literal English, with the /Xam keywords and the facing text as control. That breaks the folder's rank-1 rule, so state it on the title page.
- *Benefit*: Bible MEDIUM / Soul **HIGH**. *Recommendation*: possible, as a labelled "translation via the editors' literal English".

#### F4. Akan (Asante): proverbs, drum poetry, tales
**Twi · oral · Christaller 1879 (3,600 Twi proverbs; PD, reported); Rattray, *Ashanti Proverbs* (1916; Twi + English; PD; archive.org verified); *Ashanti* (1923; includes drum texts; PD; verified); *Akan-Ashanti Folk-tales* (1930; Twi + English; PD in the US since 1 Jan 2026; the archive.org copy `akanashantifolkt0000ratt` needs a full-view check).**
- *What it is.*
  - Proverbs: the moral world.
  - Drum poetry: the "talking drum" invocations, e.g. of Odomankoma the Creator, and the famous line that the Creator created Death and Death killed him (reported, verify the text).
  - Ananse tales.
  - The withdrawal myth: Onyankopɔn struck by the old woman's pestle withdraws, and the tower of mortars, one short, collapses (Platvoet 2012, verified).
- *Bible.* Gen 3:8, 3:23–24 (God's nearness lost); **Gen 11:4** (the tower to heaven). Typological, with the missionary caveat.
- *Soul.* HIGH.
- *Tools.* Christaller's Twi dictionary (1881) and grammar (1875), PD (archive.org verified). An LLM is moderate-weak in Twi.
- *Benefit*: Bible MEDIUM / Soul **HIGH**. *Recommendation*: a **proverbs + drum-texts selection**, with the withdrawal myth in the F1 dossier.

#### F5. Ifá (Yoruba) divination verses
- **Language and witnesses:** Yoruba. Oral and priestly; the system is old (Ifá is attested in the 17th–18th c.; the age of the verses is unknown). Recorded from the 1960s: Abimbola 1968, *Ìjìnlẹ̀ Ohùn Ẹnu Ifá*; 1975, *Sixteen Great Poems of Ifá* (UNESCO); 1976, *Ifá: An Exposition*; Bascom 1969, *Ifa Divination* (186 verses, Yoruba + English). All ©.
- The archive.org item `sixteen-great-poems-of-ifa-wande-abimbola` is a **user upload in "opensource"**, so unauthorized: do not use.
- *What it is.* Each *odù* verse tells a precedent: a client, a sacrifice and an outcome. There are creation myths: Ọbàtálá (or Odùduwà) descends a chain with a snail-shell of earth and a hen, which spreads land over the primeval waters at Ilé-Ifẹ̀.
- *Bible.* Gen 1:2 and 1:9–10 (land from the waters), typological. MEDIUM.
- *Soul.* HIGH (fate, *orí*, sacrifice).
- *Feasibility.* Copyright blocks a committed base. Yoruba is moderate for an LLM (tone marks are essential).
- *Recommendation*: **later**, if Abimbola's or Bascom's texts can be used locally. Translate a selection of creation verses only.

#### F6. Epics: Sunjata, Mwindo, Ozidi, Kaïdara
- **Sunjata.** Maninka/Mandinka. The events are 13th c.; "Mari Jata" appears in Ibn Khaldūn (c. 1390s), the earliest anchor (reported).
  - Bilingual versions: Innes 1974 (three Gambian versions, Mandinka + English: Bamba Suso, Banna Kanute, Dembo Kanute), Johnson 1979 (Magan Sisòkò), Johnson 1986 (Fa-Digi Sisòkò, the English *Epic of Son-Jara*), Jansen, Duintjer & Tamboura 1995 (Lansiné Diabaté of Kéla; Maninka + French). All ©.
  - Niane 1960 and Camara Laye 1978 are French prose re-creations, not original-language texts.
  - Jansen's analyses are open in the Leiden repository (reported).
  - Soul HIGH / Bible LOW (the rejected heir ↔ Joseph/David, typological). Maninka is weak for an LLM. *Recommendation*: **not now**.
- **Mwindo** (Nyanga; Candi Rureke 1956; Biebuyck & Mateene 1969, ©). The archive.org copy marked "Public Domain Mark" is a user upload: **unauthorized**. Soul HIGH, Bible LOW; Nyanga very weak. Not now.
- **Ozidi saga** (Ijo; Okabou Ojobolo; J. P. Clark 1977/1991, ©). Not now.
- **Kaïdara** (Fulfulde; Hampâté Bâ & Kesteloot 1968, ©). An initiatory text, partly shaped by Hampâté Bâ himself. Not now.

#### F7. Madagascar: *Tantara ny Andriana* and *hainteny*
- *Tantara ny Andriana eto Madagascar* (Callet, 1873–1902; Malagasy; PD; archive.org `tantaramyandria00antagoog` 1908, verified metadata).
  - These are the Merina royal traditions dictated by Malagasy informants: c. 1,200 pages of oral history, ancestor cult, taboos (*fady*) and royal ritual (the *fandroana* bath).
- *Hainteny*: oral dialogic love and riddle poems. Paulhan 1913 (Malagasy + French; PD in the US, © in the EU until 2039 since Paulhan d. 1968); Dahle 1877 *Specimens of Malagasy Folk-lore* (Malagasy; PD, reported).
- Soul **HIGH** (hainteny); Bible LOW (*fady* law ↔ Lev 11, typological). Malagasy is moderate for an LLM.
- *Recommendation*: a hainteny selection is a strong "soul" candidate (short, intense, love and wit).

#### F8. Swahili, Hausa, Somali, Rwanda (briefly)
- **Swahili.**
  - The Liyongo songs: the hero-poet, possibly 13th–17th c.; mss 19th c.; Miehe et al. 2004, ©.
  - *Utendi wa Tambuka* (1728, the oldest dated Swahili ms; Islamic war epic).
  - *al-Inkishafi* (c. 1810–20; the vanity of the world, ruined Pate).
  - PD: Steere 1870 *Swahili Tales* (verified archive.org), Büttner 1894 *Anthologie aus der Suaheli-Litteratur* (verified).
  - Soul MEDIUM; Bible LOW; Islamic and late.
- **Hausa.** Robinson 1896 *Specimens of Hausa Literature* (ajami poems + translation; PD, verified). The Bayajidda legend (Daura). Islamic and late. LOW / MEDIUM.
- **Somali *gabay*.** 19th–20th c. (Raage Ugaas; Sayyid Maxamed Cabdulle Xasan). Andrzejewski & Lewis 1964 (©). Too late. LOW / MEDIUM.
- **Rwanda.** The *Ubwiru* royal ritual code (d'Hertefelt & Coupez 1964, Kinyarwanda + French, ©: 17 royal rituals in esoteric language) and Kagame's dynastic poetry (1951, ©).
  - The Ubwiru is a remarkable ritual text (↔ Lev 8–9, 16, typologically). Copyright and access block it. *Recommendation*: record only.

---

## 3. Also considered

- **Dogon cosmology (Griaule, *Dieu d'eau* 1948; Griaule & Dieterlen, *Le renard pâle* 1965).** French only, so there is no original-language base. Van Beek 1991 (*Current Anthropology* 32: 139–167) could not corroborate it and judged it largely Griaule's construction (Nommo, Sirius); Calame-Griaule replied in the same issue. **Exclude.**
- **Merker 1904, *Die Masai*.** It claimed "biblical" Maasai traditions (creation, flood, commandments), and is widely regarded as unreliable and missionary-shaped. **Avoid**; use Hollis instead.
- **Kebra Nagast** (Ge'ez, 14th c.; Bezold 1905 Ge'ez + German, PD; Budge 1922 English, PD). It is a Christian national epic built on 1 Kgs 10. It is reception, too late, and Christian. Out of focus; reference only.
- **1 Enoch and Jubilees (Ge'ez).** These are Jewish scripture preserved complete only in Ge'ez, and of great importance for Gen 5:21–24, 6:1–4 and all of Genesis. They are outside this survey by the brief. **Flag to the lead session:** they deserve a place in the Jewish/Second Temple survey. Hebrew translations exist (Kahana 1937; Hartom; verify the modern ones).
- **The Damascus Psalm Fragment** (Ps 78 in Arabic in Greek letters; Al-Jallad 2020, ISAC, free PDF, reported). It is Christian scripture and early Islamic in date. Out.
- **Himyarite Jewish inscriptions** (4th–6th c.). Jewish history, late. Record only (A4).
- **The Namāra inscription (328 CE)** alone is too short: an appendix to B4.
- **The Qaryat al-Fāw inscription of ʿIgl** (Old Arabic in the Musnad script, 1st c. BCE?, funerary with curses; verify). An appendix to B4.
- **Thamudic B/C/D, Dumaitic, Hasaitic.** Too short or too few. **Dhofari is undeciphered.**
- **Meroitic** (E1) and **Libyco-Berber** (E2): poorly understood, so exclude.
- **Old Nubian** (8th–15th c., Christian): out (late, Christian).
- **The Bamum texts of King Njoya** (1900s–1910s, written in his own invented script): a fascinating case of oral history written down by its own bearers, but 20th c. Record only.
- **Arabic-language West and East African chronicles** (*Tārīkh al-Sūdān*, c. 1655; the Kano Chronicle; the Kilwa Chronicle). They preserve older oral traditions in Arabic, but are late and Islamic. LOW.
- **The Kabyle and Tuareg poetry** (E3), **Swahili** and **Hausa** (F8): later, low priority.
- **Saj' of the kāhins, Ayyām al-ʿArab, proverbs** (C6): excerpts only.
- **Beeston's *Sabaic Dictionary* on archive.org ("mo3sab").** An unauthorized upload: do not use.
- **The Mwindo and *Sixteen Great Poems of Ifá* copies on archive.org.** Unauthorized uploads: do not use.
- **Al-Mawsūʿa al-Shiʿriyya** and **aldiwan.net**. Popular poetry sites without critical apparatus, and their licences are unclear. aldiwan.net returns 403 here. Use OpenITI and the PD editions instead.

---

## 4. Access notes (tested 2026-10-21 from this session)

| Host | Result | Notes |
|---|---|---|
| `ociana.osu.edu` | **200, verified** | Records by ID `/inscriptions/<n>` with transliteration and translation. Scripted search GETs redirect to `/advanced_search` (the form needs a browser). The old Oxford host `krc.orient.ox.ac.uk` fails (000). |
| `zenodo.org` (API) | **200, verified** | OCIANA Preliminary Editions, all **CC BY 4.0**: Safaitic 5604411 (79 MB), Dadanitic 5604514 (8 MB, 858 pp., downloaded), Taymanitic 5619883 (2 MB, 224 pp., downloaded), Hismaic 5619984, Smaller collections 5620125. Also the CSAI bibliography 14274417 (CC BY 4.0). |
| `dasi.cnr.it` | **Blocked**: Anubis proof-of-work page (200 with a challenge; 503 without a User-Agent); WebFetch "Access Denied" | Data reported CC BY 4.0, but the site deprecates reuse for AI-generated interpretations without agreement. Needs permission and a browser. `open-epihub.cnr.it` 503; `csai.humnet.unipi.it` 000/503. |
| `sabaweb.uni-jena.de` | **http 200 verified**; https 000 | Statistics: 6,294 texts, 193,567 words; search by root, lemma, string and translation via POST `/Sabaweb/Suche/Suche/SearchResultList`; details at `SearchResultDetail?idxLemma=<n>&showAll=1`. No licence seen: query per word, no bulk extraction. |
| `deaps.osu.edu` | 200 | DLATO's Aramaic and Phoenician editions (TAD, Gibson). No Nabataean found. |
| `raw.githubusercontent.com` (OpenITI) | **200, verified** | Metadata JSON: `OpenITI/kitab-metadata-automation/master/output/OpenITI_Github_clone_metadata_light.json` (23 MB). Each record has a `url` to the raw text. `github.com` and `api.github.com` return 403 (session policy). OpenITI licence: reported CC BY-NC-SA; the texts come from modern Shamela editions, so local only. |
| `archive.org` | **200, verified** | PD items named above (Toronto, Cornell, Princeton, Getty, Google scans). Avoid user uploads in "opensource" and "booksbylanguage" for © works. |
| `digitalbleeklloyd.uct.ac.za` (redirect from `lloydbleekcollection.cs.uct.ac.za`) | 200 | Notebook scans. |
| `hegraconservation.com` | 200 | Tomb pages quoting Healey's translations. |
| `ejtaal.net/aa/`, `arabiclexicon.hawramani.com` | 200 | Lane's *Lexicon* (scans; searchable text). |
| `cal.huc.edu`, `www.perseus.tufts.edu/hopper/`, `www.betamasaheft.uni-hamburg.de`, `persee.fr`, `journals.openedition.org`, `shamela.ws`, `oapen.org` (home), `jstor.org`, `brill.com`, `hal.science`, `almuslih.org`, `livius.org`, `jangplatvoet.nl` | 200 | — |
| `library.oapen.org` (PDF and handle pages) | **403 (Anubis)** | Al-Jallad 2022 OA book: use a browser. |
| `academia.edu`, `researchgate.net`, `hathitrust.org`, `gallica.bnf.fr`, `unesdoc.unesco.org`, `www.nli.org.il`, `aldiwan.net`, `almaany.com`, `al-maktaba.org`, `ethnologue.com`, `elararchive.org`, `catalog.paradisec.org.au`, `oro.open.ac.uk` | 403 | Bot or policy blocks. |
| `ar.wikisource.org` | 429 | Rate-limited. |
| `diconab.huma-num.fr`, `ancientarabia.huma-num.fr`, `opendata.uni-halle.de`, `menadoc.bibliothek.uni-halle.de`, `www.inscriptiones-arabiae.org`, `meroitic.org`, `betamasaheft.eu`, `lexicon.quranic-research.net` | 000 (CONNECT refused by the egress proxy) | Add to the allowlist if needed. Halle has a PD Lyall (Mufaḍḍaliyyāt II) and Redhouse's *Lāmiyya*. |

**Allowlist wishes for a future session:** `dasi.cnr.it` (with a browser and permission), `csai.humnet.unipi.it`, `diconab.huma-num.fr`, `opendata.uni-halle.de`, `menadoc.bibliothek.uni-halle.de`, `www.nli.org.il` (catalogue: to check Hebrew translations), `gallica.bnf.fr` (Chabot, Hanoteau, Paulhan, Callet), `babel.hathitrust.org` (Schulthess 1911, Cerulli 1922).

**Downloads made** (scratchpad only, untrusted, never executed): `/tmp/claude-0/-home-user-perush/009325a3-391a-55eb-9c0e-32e1e254e6c6/scratchpad/world/arabia-africa/` holds:
- `zenodo/taymanitic.pdf`, `zenodo/dadanitic.pdf` (+ text extractions);
- `openiti/meta.json`, `openiti/muf.txt`;
- `pd/callaway.txt`, `pd/bleek.txt`, `pd/hollis.txt` (archive.org OCR);
- `pdf/platvoet.pdf`;
- `sabaweb_stat.html` and the search pages.

---

## 5. Sources consulted

- OCIANA: https://ociana.osu.edu/ ; https://ociana.osu.edu/about ; https://ociana.osu.edu/inscriptions/47895 ; https://ociana.osu.edu/inscriptions/17393 (KRS 2453, via search)
- Zenodo OCIANA editions: https://zenodo.org/records/5604411 ; https://zenodo.org/records/5604514 ; https://zenodo.org/records/5619883 ; https://zenodo.org/records/5619984 ; https://zenodo.org/records/5620125 ; CSAI bibliography https://zenodo.org/records/14274417
- DASI news (licence and AI statement, via search snippet): https://dasi.cnr.it/news ; EADH entry https://eadh.org/projects/dasi
- Sabaweb: http://sabaweb.uni-jena.de/Sabaweb/ (Statistik; SearchResultDetail idxLemma 4414, 13526)
- Agostini 2012, PSAS: https://archaeopresspublishing.com/ojs/index.php/PSAS/article/view/1603 ; CORDIS project 252917: https://cordis.europa.eu/project/id/252917 ; Dost: https://almuslih.org/wp-content/uploads/2014/12/Dost-S-Language-of-Ritual-Purity.pdf
- Al-Jallad 2022 OA: https://library.oapen.org/handle/20.500.12657/54655 ; DOAB https://directory.doabooks.org/handle/20.500.12854/81808
- Al-Jallad 2015 (KRS 2453): https://keibi.uni-tuebingen.de/Record/KEI00127949 ; Al-Jallad 2017 PSAS: https://www.archaeopresspublishing.com/ojs/index.php/PSAS/article/view/1223
- ʿĒn ʿAvdat: https://en.wikipedia.org/wiki/Old_Arabic ; https://islamic-awareness.org/history/islam/inscriptions/avdat
- Hegra: https://hegraconservation.com/ ; DiCoNab: https://www.orient-mediterranee.com/program/diconab-the-digital-corpus-of-nabataean-and-developing-arabic-inscriptions/
- OpenITI: https://raw.githubusercontent.com/OpenITI/RELEASE/master/README.md ; https://kitab-project.org/metadata/
- archive.org items: mufaddaliyatant01mufauoft, mufaddaliyatanth00mufauoft, india.history.resource.111027, divanssixancien00alqgoog, restearabischen00wellgoog, arabumproverbiav01freyuoft, relamazulu00calluoft, nurserytalestrad00call_0, specimensofbushm00bleeuoft, masaitheirlangu01hollgoog, nanditheirlangua00holl, treasuryofbasuto01jaco, ashantiproverbst00rattuoft, ashanti0000ratt, akanashantifolkt0000ratt, dictionaryofasan00chriuoft, sabaischegriechi00litt, lexiconlinguaeae00dilluoft, publicationsofpr01litt, karangmeroitici00grif, missionarcheolog02jaus, tantaramyandria00antagoog, swahilitalesasto00stee, anthologieausde00btgoog, specimensofhausa00robirich, folkloreinoldte00frazgoog
- Umayya: https://en.wikipedia.org/wiki/Umayya_ibn_Abi_as-Salt ; Seidensticker: https://gw.uni-jena.de/phifakmedia/19030/seidensticker-umayya-ii.pdf ; Sinai: https://almuslih.org/wp-content/uploads/Library/Sinai,%20N%20-%20Religious%20poetry.pdf
- ʿAdī b. Zayd: https://en.wikipedia.org/wiki/Adi_ibn_Zayd
- Lyall Mufaḍḍaliyyāt (Halle): https://opendata.uni-halle.de/handle/1981185920/100199
- Platvoet 2012: https://jangplatvoet.nl/content/uploads/2016/10/NyameNeAberewa.2016.pdf
- Abrahamsson 1951 (review): https://resolve.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/hans-abrahamsson-the-origin-of-death-studies-in-african-mythology-studia-ethnographica-upsaliensia-iii-vii-178-pp-17-maps-uppsala-almqvist-wiksells-boktryckeri-ab-1951-60s/3D0C910F480D9D0C3AEE440515D57EA6
- Van Beek 1991 (via secondary): https://ehrafworldcultures.yale.edu/cultures/fa16/documents/031
- Sunjata: https://scholarlypublications.universiteitleiden.nl/handle/1887/2769 ; https://edblogs.columbia.edu/worldepics/project/epic-of-sundiata/ ; https://verbafricana.org/malinke-fr/griots/Bulman.pdf
- Ifá: https://archive.org/details/sixteen-great-poems-of-ifa-wande-abimbola (recorded as unauthorized; not used)
- Meroitic: https://voices.uchicago.edu/lvc/2024/03/05/claude-rilly-cnrs-ephe-paris-sorbonne-meroitic-phonology-syntax-and-linguistic-family ; https://preview.aclanthology.org/moar-dois/2025.alp-1.11
- Aksum: https://journals.sub.uni-hamburg.de/aethiopica/article/download/2433/2360/7842 (Lusini 2024 on RIÉ 186)
- Hebrew-translation searches (no hits for the Muʿallaqāt, the jāhilī poets or Sunjata): https://blog.nli.org.il/mussach_45_uvivrit/ ; https://www.israelhayom.co.il/news/article/8846027 (on the scarcity of classical Arabic poetry in Hebrew)

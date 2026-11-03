# Region survey – europe-north (2026-11-02)

Northern and Eastern Europe and the Caucasus:
- Celtic: Gaulish, Ogam, Old and Middle Irish, Middle Welsh;
- Germanic: Proto-Norse and Old Norse, Old English, Old High German and Old Saxon, Gothic;
- Baltic, Slavic, Finnic and Sámi;
- the Caucasus: Classical Armenian, Old Georgian, Ossetic.

**How sizes were measured.** Sizes marked `(m)` were counted today by `python3 -I` scripts over the fetched bases. Scripts and downloads are in `/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/europe-north/` (`scripts/`, `dl/`). The scripts:
- `edda_measure.py`: stanzas, printed half-lines, words and lacuna lines, for all 40 Bugge pages from etext.old.no.
- `wiki_measure.py`: the skaldic poems, from heimskringla.no wikitext.
- `skvr_measure.py`: the SKVR TEI zip, 89,247 poems, joined to its type index `viitteet_180221.txt`.
- `titus_measure.py`: Movses Khorenatsi, the Nart corpus and the Old High German minor monuments, all on TITUS.
- SQL queries on the Rundata-net SQLite: the runic inscriptions.
- archive.org `_djvu.txt` OCR, for section and line numbers of the 1880–1912 Irish, Welsh and Old English editions.

Nothing downloaded was executed. The Rundata download from Uppsala is a Windows program and was not touched; the SQLite file was read only with Python's `sqlite3`, in read-only mode. WebSearch calls used: **0**.

## Key findings

- **By the absolute date, almost nothing in this region is ancient.** Only these qualify:
  - the runic inscriptions, from c. 160 CE;
  - Gaulish (1st–2nd c.) and Ogam (4th–7th c.);
  - Wulfila's Gothic Bible (4th c.);
  - the first Armenian and Georgian literature (5th c.).

  The runes are the only native, pre-Christian, readable texts written in antiquity. They are short: 245 Elder-Futhark inscriptions, 711 words in all (m). Everything central to these cultures was written down after 500 CE, mostly by Christians: Ireland from c. 700, Wales after 1250, Iceland c. 1220–1300. Finnic, Baltic and Ossetian oral poetry was recorded only in 1770–1930.
- **Applying the `EXC` rule.** I gave `1 EXC` where the record comes from a culture still in its own pre-Christian stage, or from the first generation after the conversion, and where at least one control holds:
  - fossils: metre and language older than the scribes;
  - use: charms, the bear rite, genealogy;
  - outside confirmation: picture stones, bracteates, runestones, Herodotus.

  **The exception holds best for:**
  - the Norse poems composed before or around the conversion of c. 1000: the Eddic mythological poems, the dated pagan skaldic poems;
  - the Finnic runes (SKVR): a living pagan-rooted song and charm tradition among Orthodox Karelian singers, with archaic metre and language;
  - the Ossetian Nart tales.

  **It holds only narrowly for:**
  - the Old Irish sagas: Christian Ireland c. 700–900, but the *filid* still carried the old lore;
  - Beowulf: Christian poet, archaic metre, a 6th-century legend world.

  **It is weak for:**
  - Snorri: a 13th-century Christian systematizer;
  - the Mabinogi: c. 1100, literary.

  **It fails for:** the byliny, the Lay of Igor, the Primary Chronicle, Sasna Tsrer, Amirani, Lebor Gabála and the Old English elegies (all in Excluded).
- **The Poetic Edda is the centre of the region.** All 40 pages of Bugge 1867 were measured: lacunae in only 0.3–0.4% of lines.
  - **Mythological poems:** 744 stanzas, 5,054 printed half-lines, about 17,000 words (m).
  - **Heroic poems:** 771 stanzas, 5,912 half-lines, about 18,200 words, plus about 4,100 words of prose links (m).
  - Both pass 3,000 printed lines, so both are marked `LARGE`. **Counted in long lines, they are about 2,530 and 2,960.** That is less than the Book of the Dead of Nu (1,892 lines, 28,300 words), which Round 6 runs as one run, so the lead may judge the mythological set to be one run.
  - Completing **Hymiskviða** (39 stanzas, 303 lines; 22 lines are already in the dossier as HY) is the natural first step.
- **The pagan skaldic poems are the region's best-dated pre-Christian voices.** About 1,560 lines and 5,000 words in ten poems were measured from Finnur Jónsson's PD Skjaldedigtning B1 / Carmina Scaldica on heimskringla.no:
  - Sonatorrek, Egill's lament for his drowned son and his quarrel with Óðinn;
  - Hákonarmál, Eiríksmál, Haustlǫng, Ragnarsdrápa, Ynglingatal and others.

  They are by named poets, c. 870–1000. Because their stanza forms are rigid, their wording comes down nearly verbatim.
- **SKVR is open, huge and measurable** (CC BY 4.0, verified; 89,247 poems; the type index is on GitHub).
  - The world-creation song (bird, egg, world) survives in 436 recordings, 40,321 lines (m).
  - The origin charms (*synnyt*): iron 535 recordings, fire 422, the serpent 525.
  - The bear feast: 143 recordings.
  - **One culture-made whole:** Arhippa Perttunen's epic songs dictated to Lönnrot in 1834, 29 poems, 6,325 lines (m). They include the Sampo (802 lines), Tuonela, Vipunen and the singing contest.
  - Lönnrot's composed *Kalevala* is not a candidate.
- **The Irish material is central but hard to reach with control.**
  - **eDIL (dil.ie) is blocked:** https resets, http gives 503.
  - **CELT's clean texts are still "[RESTRICTED]":** prior consent needed (header re-checked today).
  - **The PD editions exist only as rough OCR on archive.org:** Strachan–O'Keeffe's Táin I (about 3,690 lines), Stokes's Togail Bruidne Da Derga (168 §§) and Cath Maige Tuired (Revue celtique 12), Meyer's Bran and Triads, Windisch's *Irische Texte*.
  - Old Irish therefore rates `low` until eDIL is reachable and the OCR is cleaned.
- **The 5th-century Caucasus gives the region's only texts with C1 2 that are not inscriptions.**
  - **Movses Khorenatsi, Book I:** the pagan legends and the birth-song of Vahagn. About 15,000 words (m), from TITUS (the PD 1913 edition).
  - **The Martyrdom of Šušanik** (475–484 CE, by an eyewitness): the first Georgian literature, 18 chapters, about 4,600 words (m), from the Georgian Wikisource.

  Both are short enough for one run. Classical Armenian is `medium`; Old Georgian is `low`.
- **New and reachable today:**
  - **Rundata-net's SQLite file:** 6,815 inscriptions with normalized Old Norse and English translations; ODbL/DbCL, with Uppsala's attribution terms.
  - **TITUS:** the Old High German minor monuments (Steinmeyer: 25 charms, 236 lines, m), the Hildebrandslied (68 lines) and an Ossetic Nart corpus (Gardanti 1927, Digor).
  - **Wyatt's Beowulf**, proofread on en.wikisource (3,182 lines).
  - **Unreachable:** dainuskapis.lv (the Latvian dainas: Cloudflare 403), kaino.kotus.fi (the Karelian and dialect dictionaries: 403), eDIL, ONP and Cleasby–Vigfusson online (connection failures).
- **Nothing Slavic qualifies.** No pre-Christian Slavic text survives. The byliny and the Dove Book are Christian-era, and the pagan gods are known only second-hand.

## Candidates

| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| europe-north-01 | The Poetic Edda, the mythological poems: the Codex Regius mythological part (Völuspá, Hávamál, Vafþrúðnismál, Grímnismál, Skírnismál, Hárbarðsljóð, Hymiskviða, Lokasenna, Þrymskviða, Alvíssmál) + Baldrs draumar, Rígsþula, Hyndluljóð, Grottasöngr | Norse / Old Norse (Old West Norse, Icelandic mss) | c. 900–1050 CE (Völuspá c. 1000; Hávamál compiled from older parts) | c. 1270 | GKS 2365 4to (c. 1270); AM 748 I a 4to (c. 1300); Hauksbók (c. 1302–10) | C | 744 stanzas, 5,054 printed half-lines (≈2,530 long lines), ≈17,000 verse words (m) | good (17 lacuna lines = 0.3%; Rígsþula breaks off) | Bugge 1867, *Norrœn fornkvæði*, http://etext.old.no/Bugge/ (PD), verified 2026-11-02 (all pages fetched and measured) | high | 1 EXC | 4 | 4 | 5 | 5 | LARGE | Völuspá 62 st. / 493 l. (Hauksbók 59 / 459 as variant); Hávamál 164 / 1,092; the wisdom contests Vafþrúðnismál + Grímnismál + Alvíssmál 144 / 910; the Thor poems Hymiskviða + Þrymskviða + Hárbarðsljóð 131 / 821; Lokasenna + Skírnismál 107 / 661; outside R: Baldrs draumar + Rígsþula + Hyndluljóð + Grottasöngr 136 / 1,077 (all m) | heimskringla.no, www.germanic-lexicon-project.org | the fifth-day dossier's HY (Hymiskviða 22–24, 22 lines): Hymiskviða whole (39 st., 303 l.) |
| europe-north-02 | The pagan skaldic poems on gods, the dead and kings: Ragnarsdrápa, Haustlǫng, Ynglingatal, Eiríksmál, Hákonarmál, Sonatorrek, Arinbjarnarkviða, Háleygjatal, Húsdrápa, Vellekla, Þórsdrápa | Norse / Old Norse (dróttkvætt, kviðuháttr, ljóðaháttr) | c. 870–1000 CE (named poets, datable patrons; Ynglingatal's date contested) | c. 1220–1270 (quoted in Snorri's Edda, Heimskringla, Egils saga) | SnE Codex Regius (c. 1300–25); Möðruvallabók (c. 1330–70); Kringla (lost, 17th-c. copies) | B | ten poems ≈1,560 lines, ≈5,000 words (m) + Þórsdrápa 23 st. (r) | fair (most reassembled from separately quoted stanzas; Ragnarsdrápa and Húsdrápa fragmentary; order editorial) | Finnur Jónsson, *Skjaldedigtning* B1 (1912–15) and *Carmina Scaldica* (1929), PD (FJ d. 1934): heimskringla.no wikitext, verified 2026-11-02; `skjald_b1.pdf` at www.septentrionalia.net, verified | medium | 1 EXC | 4 | 4 | 4 | 3 |  |  | heimskringla.no, www.septentrionalia.net |  |
| europe-north-03 | The Finnic world-creation song (*Maailmansyntyruno*: the bird nesting on the sea, the egg, heaven, earth, sun and moon from it) in its regional redactions: c. 12 full recordings from Viena, Aunus, Ladoga Karelia, the Isthmus and Ingria (from 436) | Finnic / Karelian, Ingrian, Finnish dialects (Kalevala metre) | Proto-Finnic layer, 1st millennium CE or older (shared with Estonian; dating debated) | recorded 1820s–1930s | SKVR field records (1820s on) | C | the type: 436 recordings, 40,321 lines (m); the proposed set ≈1,100 lines (mean 92 lines per recording) | good (verbatim dictations; dialect spelling) | SKVR (SKS), TEI zip https://aineistot.finlit.fi/exist/rest/db/apps/skvr/data/SKVR.zip (128.5 MB, 89,247 poems) + type index `sks190/SKVR` (raw GitHub), CC BY 4.0, verified 2026-11-02 | medium | 1 EXC | 3 | 4 | 5 | 5 |  |  | aineistot.finlit.fi |  |
| europe-north-04 | The Finnic origin charms (*synnyt*: the origins of iron, fire, the serpent, the bear) with the bear-feast songs (*karhunpeijaiset*): one full recording per type from each main region (≈16 recordings) | Finnic / Karelian, Finnish dialects | same; kept by ritual use | recorded 1820s–1930s | SKVR | C | the types: iron 535 rec. / 34,494 l.; fire 422 / 45,357; serpent 525 / 33,487; bear 56 / 5,391; bear feast 143 / 10,270 (m); the proposed set ≈1,600 lines | good | SKVR, as 03, verified 2026-11-02 | medium | 1 EXC | 3 | 4 | 5 | 4 |  |  | aineistot.finlit.fi |  |
| europe-north-05 | Arhippa Perttunen's epic songs, dictated to Lönnrot at Latvajärvi (Viena Karelia), April 1834: all 29 epic recordings of one singer (the Sampo, Tuonela, Vipunen, the singing contest, the kantele, Lemminkäinen) | Finnic / Viena Karelian | as 03 | 1834 | SKVR I (Lönnrot's 1834 notebooks) | C | 29 poems, 6,325 lines (m) (+ his 11 charms, 2,012 lines, not included) | good | SKVR, as 03, verified 2026-11-02 | medium | 1 EXC | 3 | 4 | 5 | 5 | LARGE | the Sampo, forging and theft (skvr01100540) 802; the wooing contest and the golden maiden 904 + 229; Lemminkäinen 592 + 548 + 43; Tuonela 350; Väinämöinen's judgement (a Christian legend-song in the same metre) 341 + 87; the kantele 230; the singing contest 194 + 24; Vipunen 162; 16 shorter songs ≤ 216 each (all m) | aineistot.finlit.fi |  |
| europe-north-06 | The Poetic Edda, the heroic poems: Völundarkviða, the Helgi poems, the Sigurd and Guðrún cycle, Atlakviða, Atlamál, Guðrúnarhvöt, Hamðismál | Norse / Old Norse | historical kernel 4th–6th c. (Ermanaric d. 375, the Burgundians 437, Attila d. 453); poems c. 850–1200 | c. 1270 | GKS 2365 4to (c. 1270) | C | 771 stanzas, 5,912 printed half-lines (≈2,960 long lines), ≈18,200 verse words + ≈4,100 words of prose links (m) | good (23 lacuna lines = 0.4%; the Codex Regius' lost gathering falls in the Sigurd poems, so Brot is a torso) | Bugge 1867, as 01, verified 2026-11-02 | high | 1 EXC | 3 | 4 | 4 | 3 | LARGE | Völundarkviða 41 st. / 324 l.; the Helgi poems 150 / 1,203; young Sigurd (Grípisspá, Reginsmál, Fáfnismál, Sigrdrífumál) 160 / 1,138; Sigurd's death (Brot, Sigurðarkviða skamma, Helreið) 104 / 828; Guðrún's laments (Guðrúnarkviða I–III, Oddrúnargrátr) 116 / 895; the fall of the Niflungs and of Jǫrmunrekkr (Atlakviða, Atlamál, Guðrúnarhvöt, Hamðismál) 200 / 1,524 (all m) | heimskringla.no |  |
| europe-north-07 | Movses Khorenatsi, *History of the Armenians*, Book I ("the genealogy of Greater Armenia": Hayk and Bel, Aram, Ara the Fair and Šamiram, Tigran and Aždahak, the birth-song of Vahagn) | Armenian / Classical Armenian (Grabar) | the legends and songs pre-Christian (before 301 CE); the songs quoted from the minstrels of Gołtʿn | 5th c. (claimed) or 8th c. (debated) | mss from the 13th c. (r) | D | Book I: 32 chapters, ≈15,000 words (m) | good | Abełean–Yarutʿiwnean, Tiflis 1913 (PD), TITUS https://titus.fkidg1.uni-frankfurt.de/texte/etcs/arm/mokhor/mokho.htm (TITUS terms: no republication – local use), verified 2026-11-02 (40 pages fetched); the 1913 scan is on archive.org (`xorenatsi1913`) | medium | 2 | 2 | 5 | 4 | 5 |  |  | www.nayiri.com |  |
| europe-north-08 | The Martyrdom of Queen Šušanik (*Martvilobay Šušanikisi*, by Iakob Curtaveli, her confessor) | Georgian / Old Georgian | 475–484 CE (an eyewitness account) | 5th c. | mss from the 10th c. (r) | D | 18 chapters, ≈4,600 words (m) | good | Georgian Wikisource, ka.wikisource.org "შუშანიკის წამება" (the standard text; edition not named on the page), verified 2026-11-02 | low | 2 | 4 | 5 | 4 | 5 |  |  | ka.wikisource.org |  |
| europe-north-09 | The pre-Christian runic inscriptions: the Elder-Futhark corpus (Gallehus, Tune, Eggja, Björketorp, Stentoften, Kylver, the bracteates) with the long pagan Viking-age texts (Rök, Forsa, Glavendrup, Sparlösa, Karlevi) | Germanic / Proto-Norse, early Old Norse | c. 160–1000 CE | the artifacts themselves | c. 160 CE on | A | 245 Elder-Futhark inscriptions, 711 normalized words (28 with ≥ 8 words) + 17 pre-Christian Viking-age texts of ≥ 15 words, 740 words (Rök 161) (m) | fair (many readings disputed) | Samnordisk runtextdatabas (Rundata, Uppsala; ODbL + DbCL, with attribution and reporting terms) via the Rundata-net SQLite https://rundata.info/static/runes/runes.47aad5b29b05.sqlite3 (47 MB: transliteration, normalization, English), verified 2026-11-02 | medium | 2 | 5 | 2 | 3 | 4 |  |  | rundata.info, www.runforum.nordiska.uu.se |  |
| europe-north-10 | The West Germanic charms: the two Merseburg charms with the Old High German and Old Saxon charm corpus (Steinmeyer: 25 charms), and the twelve Old English metrical charms (Æcerbot, the Nine Herbs Charm, Wið færstice …) | Germanic / OHG, Old Saxon, Old English | pre-Christian core (Merseburg II's formula = Atharvaveda 4.12; Wodan healing the horse on 5th–6th-c. bracteates); Christian frames added | 9th–11th c. | Merseburg Domstiftsbibl. 136 (10th c.); BL Harley 585 (c. 1000); Cotton Caligula A.vii (11th c.) | C | OHG/OS 25 charms, 236 lines (m, TITUS); OE 12 charms ≈344 lines (r, ASPR VI numbering) | good | TITUS "Kleinere althochdeutsche Denkmäler" (Steinmeyer 1916, PD; local use), https://titus.fkidg1.uni-frankfurt.de/texte/etcs/germ/ahd/klahddkm/klahd.htm, verified 2026-11-02; Grendon, *The Anglo-Saxon Charms* (1909, PD), archive.org `anglosaxoncharms00gren`, verified 2026-11-02 | high | 1 EXC | 3 | 3 | 4 | 4 |  |  | www.koeblergerhard.de, bosworthtoller.com |  |
| europe-north-11 | Táin Bó Cúailnge, Recension I | Irish / Old Irish (8th–9th-c. language) with Middle Irish layers | archaic heroic core; text compiled c. 750–1050 | 8th–11th c. | Lebor na hUidre (before 1106); Yellow Book of Lecan (14th c.) | D | ≈3,690 printed lines of the YBL text (m, from the edition's line numbers); ≈47,000 words (r, CELT) | good (LU defective at the start; YBL completes it) | Strachan & O'Keeffe 1912, archive.org `tinbcailng00strauoft` (PD), verified 2026-11-02, but its OCR is poor (abbreviations garbled); the clean CELT text (G301012, O'Rahilly) is "[RESTRICTED]" | low | 1 EXC | 2 | 5 | 4 | 5 | LARGE | natural parts (not measured): the pre-tales and the hosting; the Boyhood Deeds (Macgnímrada); the ford combats; the combat with Fer Diad; the final battle and the fight of the bulls | celt.ucc.ie, dil.ie |  |
| europe-north-12 | Togail Bruidne Da Derga (the Destruction of Da Derga's Hostel) | Irish / Old and Middle Irish | two 9th-c. versions, conflated c. 1050 | 11th c. | Lebor na hUidre (c. 1100) | D | 168 §§ (m, Stokes's numbering in the OCR) | good | Stokes 1902 (from Revue celtique 22), archive.org `togailbruidnedde00stok` (PD), verified 2026-11-02 (OCR) | low | 1 EXC | 2 | 4 | 5 | 4 |  |  | dil.ie, celt.ucc.ie |  |
| europe-north-13 | Cath Maige Tuired (the Second Battle of Mag Tuired) | Irish / Old and Middle Irish | 9th-c. core, 11th–12th-c. additions | 9th–12th c. | BL Harley 5280 (16th c.), unique | D | 167 §§ (r, Stokes); ≈10,100 words (r, CELT) | fair (one late ms; the *roscada* obscure) | Stokes 1891, Revue celtique 12:52–130, archive.org `revueceltiqu12pari` (PD), verified 2026-11-02 (text located in the OCR) | low | 1 EXC | 2 | 2 | 5 | 4 |  |  | dil.ie, celt.ucc.ie |  |
| europe-north-14 | Immram Brain and Echtrae Chonnlai (the Voyage of Bran; the Adventure of Connla): the Otherworld across the sea | Irish / Old Irish | c. 700 | 8th c. | LU (Connla); 14th–16th-c. mss (Bran) | D | Bran 66 §§ incl. two poems of 28 and 30 quatrains, ≈4,600 words (r); Connla ≈1,000 words (r) | good | Meyer & Nutt 1895, archive.org `cu31924026971030` (PD), verified 2026-11-02 | low | 1 EXC | 2 | 3 | 5 | 3 |  |  | dil.ie |  |
| europe-north-15 | Three Ulster tales: Scéla Mucce Meic Dathó, Longes mac nUislenn, Aided Óenfir Aífe | Irish / Old Irish | 8th–9th c. | 9th–12th c. | Book of Leinster (c. 1160); YBL | D | ≈7,000 words (r) | good | Windisch, *Irische Texte* I (1880, PD), archive.org (several scans, listed by search; OCR not checked); Meyer, *Hibernica Minora* (1894, PD mark); NOT verified for each tale | low | 1 EXC | 2 | 3 | 4 | 3 |  |  | dil.ie |  |
| europe-north-16 | Old Irish wisdom: Audacht Morainn, Tecosca Cormaic, Trecheng Breth Féne (the Triads of Ireland) | Irish / Old Irish | c. 700 (Audacht); 9th c. (Tecosca, Triads) | 8th–9th c. | 12th–16th-c. mss | D | Triads 256 (m, OCR); Audacht 63 §§ (r); Tecosca 37 §§ (r) | good | Meyer 1906, archive.org `triadsofireland00meyeuoft` (PD), verified 2026-11-02; Meyer 1909 (Tecosca) and Thurneysen 1917 (Audacht, ZCP 11), both PD, NOT verified | low | 1 EXC | 3 | 3 | 4 | 4 |  |  | dil.ie |  |
| europe-north-17 | Snorri's Edda: the Prologue and Gylfaginning | Norse / Old Icelandic prose with quoted Eddic verse | the myths pre-1000 (through the poems he quotes); the book c. 1220–25 | c. 1220–25 | Codex Upsaliensis (c. 1300–25); Codex Regius GKS 2367 4to (c. 1325) | D | ≈18,100 words, 68 headed sections (m, heimskringla.no text incl. quoted stanzas) | good | Finnur Jónsson 1931 (PD), archive.org `edda-snorra-sturlusonar` (PD mark), verified listed 2026-11-02; reading text Guðni Jónsson (heimskringla.no; licence unclear – local reading only) | high | 1 EXC | 2 | 5 | 5 | 3 |  |  | heimskringla.no |  |
| europe-north-18 | Beowulf | English / Old English | the legend world 5th–6th c. (Hygelac's raid c. 521, in Gregory of Tours); poem c. 700–1000 | c. 1000 | BL Cotton Vitellius A.xv (c. 1000) | C | 3,182 lines (r: Wyatt's line numbers; all 43 fitt pages fetched) | good (fire damage at the edges; restorations bracketed) | Wyatt 1894, en.wikisource "Beowulf (Wyatt)" (PD, proofread), verified 2026-11-02 | high | 1 EXC | 2 | 3 | 5 | 4 | LARGE | Grendel 1–1250 (1,250); Grendel's mother 1251–2199 (949); the dragon 2200–3182 (983) | bosworthtoller.com, ebeowulf.uky.edu |  |
| europe-north-19 | The West Germanic heroic remnants: the Hildebrandslied, Widsith, Deor | Germanic / OHG (with Old Saxon forms), Old English | content 4th–6th c. (Ermanaric, Attila, Theodoric, Weland); poems 7th–9th c. | c. 830–40 (Kassel 2° Ms. theol. 54); c. 970 (Exeter Book) | the same | C | ≈253 lines: Hildebrandslied 68 (m, TITUS); Widsith 143, Deor 42 (r) | fair (the Hildebrandslied breaks off before the outcome) | TITUS Hildebrandslied (local use), verified 2026-11-02; Thorpe 1842 *Codex Exoniensis*, archive.org `CodexExoniensis` (PD mark), verified listed 2026-11-02 | high | 1 EXC | 3 | 2 | 4 | 3 |  |  | bosworthtoller.com, www.koeblergerhard.de |  |
| europe-north-20 | The Ossetian Nart tales: Gardanti's Digor collection (1927) as entered in the TITUS Nart corpus | Iranian / Ossetic (Digor; Latin transliteration + Cyrillic) | Scytho-Alanic roots (cf. Herodotus 4.5–10, Lucian's *Toxaris*); formed over the 1st millennium CE (debated) | recorded c. 1890s–1920s | *Pamjatniki narodnogo tvorčestva osetin* 2 (1927) | D | ≥ 41 tales; ≥ 31,000 words in the first 300 TITUS pages (m, partial: the corpus continues) | good | TITUS "Corpus of Nartic tales" (Emmerick, Gippert, Job; Gardanti 1927 collated with *Narty* 1990), https://titus.fkidg1.uni-frankfurt.de/texte/etcs/iran/niran/oss/nart/nart.htm (local use), verified 2026-11-02 | low | 1 EXC | 2 | 5 | 4 | 5 | LARGE | by hero (not measured): Æxsar and Æxsærtæg; Uryzmæg and Satana; Soslan; Batradz; the end of the Narts | www.ironau.ru |  |
| europe-north-21 | The Latvian mythological dainas: the songs of Saule (the Sun), Mēness, Pērkons, Dievs and the Sons of God, Laima | Baltic / Latvian | Indo-European motifs (the *Dieva dēli* courting the Sun's daughter ↔ the Vedic Aśvins and Sūryā); quatrain tradition medieval–modern | recorded 1770–1915 | Barons & Wissendorff, *Latvju dainas* (1894–1915) | C | NOT measured (the mythological groups: several thousand quatrains with variants, r) | good | LD (PD); dainuskapis.lv answers Cloudflare 403, NOT verified; korpuss.lv holds LD vol. 2 only (46,576 songs; verified) | medium | 1 EXC | 2 | 5 | 5 | 5 |  |  | dainuskapis.lv, gramatas.lndb.lv, tezaurs.lv |  |
| europe-north-22 | The Four Branches of the Mabinogi (Pwyll, Branwen, Manawydan, Math) | Welsh / Middle Welsh | pre-Christian divine names (Rhiannon < \*Rīgantonā, Lleu = Lugus, Manawydan = Manannán, Mabon = Maponos); tales composed c. 1060–1120 (debated) | c. 1060–1200 | Peniarth 6 (fragments, 13th c.); White Book of Rhydderch (c. 1350); Red Book of Hergest (c. 1400) | D | ≈27,000 words (r: pp. 1–81 of the 1887 text) | good | Rhys & Evans 1887 (Red Book, diplomatic), archive.org `textofmabinogion00rhysiala`; Evans 1907 (White Book), `whitebookofmabin00evan`; both PD, verified 2026-11-02 (OCR needs cleaning) | medium | 1 EXC | 2 | 4 | 4 | 5 |  | Pwyll pp. 1–25; Branwen 26–43; Manawydan 44–58; Math 59–81 (r) | www.geiriadur.ac.uk |  |

### europe-north-01 – The Poetic Edda, the mythological poems
- **What it is.** The Norse world from its void to its renewal:
  - Völuspá: the seeress's history of creation, the first war, Baldr's death, Ragnarǫk and the green earth rising again;
  - Hávamál: guest-wisdom, "cattle die, kinsmen die", Óðinn on the tree winning the runes;
  - the wisdom contests (Vafþrúðnismál, Grímnismál, Alvíssmál): the cosmos as secret knowledge;
  - the comic and violent Thor poems (Hymiskviða, Þrymskviða, Hárbarðsljóð);
  - Lokasenna's insults; Skírnismál's love-curse.

  It is how a pagan people saw fate, death, fame and its gods' own end.
- **Why the exception holds.**
  - Norway and Iceland were pagan until c. 995–1000, and most of these poems were composed then or within a generation.
  - Fossils: archaic metres (fornyrðislag, ljóðaháttr) and alliterations that need forms older than the scribes' language (e.g. *v-* before *r*).
  - Outside confirmation: Thor's fishing on the Altuna, Gosforth and Hørdum stones, and in Bragi's 9th-c. Ragnarsdrápa; an eddic stanza on the Rök stone (c. 800).
  - The later frame to be marked: the compiler's prose links (Grímnismál, Lokasenna, Baldrs draumar's paper-ms additions), Hauksbók's "inn ríki" stanza in Völuspá, and the suspected Christian echoes (Hávamál 138).
- **Base and tools.**
  - Bugge 1867 prints the Codex Regius spelling; normalize it in the analysis. Völuspá has a normalized text and both R and H.
  - Dictionaries: Cleasby–Vigfusson and Zoëga (PD, scans on the Germanic Lexicon Project). La Farge–Tucker (©) for checking.
  - TITUS holds a Poetic Edda (local use) for cross-checking. No open morphology.
  - Hebrew: Arieh Stav (2009) and Tchernichovsky (Baldrs draumar, Alvíssmál) – consult only after drafting.
- **A run.** One corpus tool modelled on `hesiod_tools.py` (stanza and half-line labels as Bugge), a renderings file, the name table. Start with Hymiskviða whole, which absorbs HY; the dossier then keeps HY identical to it by script. The first new language set-up of the region (see New languages).

### europe-north-02 – The pagan skaldic poems
- **What they are.** The oldest dated Norse voices, by named poets at pagan courts:
  - Bragi's shield-poem (Thor's fishing, Gefjun ploughing Zealand from Sweden);
  - Þjóðólfr's Haustlǫng (Iðunn's apples, Thor and Hrungnir) and his Ynglingatal (the kings' deaths as a genealogy);
  - the memorial poems for Eiríkr and Hákon (the dead king welcomed to Valhǫll);
  - Egill's Sonatorrek: a father who has lost two sons, his anger at Óðinn, his consolation in the gift of poetry. One of the great laments of any antiquity.
- **Why the exception holds.** These are pre-conversion compositions dated by poet and patron. The court metre (fixed syllable count, internal rhyme, alliteration) locks the wording, so the stanzas were remembered nearly verbatim for 250 years before being quoted.
- **Risks.**
  - Kennings and broken word order: reading `medium`. Use FJ's B prose order and Faulkes' Skáldskaparmál glossary (Viking Society, free PDF ©) to check.
  - Ynglingatal's 9th-century date is contested (Krag: 12th c.); state it.
  - The poems were reassembled from separate quotations, so mark the editorial order.
- **A run.** Heimskringla's wikitext gives clean verse (FJ, PD). Þórsdrápa must be keyed from `skjald_b1.pdf`. One Norse corpus with 01 (the same renderings and names).

### europe-north-03 – The Finnic world-creation song
- **What it is.** A bird (duck, swallow, eagle) seeks a nesting place on the primeval sea and lays its eggs on the knee of Väinämöinen. The eggs break: the lower half becomes the earth, the upper half the heaven, the yolk the sun, the white the moon. It is the Finnic picture of origin, sung for centuries, and here it is in the singers' own redactions, not Lönnrot's composite.
- **Why the exception holds.**
  - The singers were 19th-c. Orthodox or Lutheran peasants, but the song stands in a pre-Christian tradition.
  - Fossils: the archaic Kalevala metre and language; the motif shared with Estonian (a Proto-Finnic layer).
  - Outside confirmation: the Eurasian world-egg and earth-diver cosmogonies; Agricola's 1551 list of Karelian and Tavastian gods.
- **The base.** Every recording has its singer, place, year and collector in the TEI header. Choose c. 12 complete versions, two per region (Viena, Aunus, Ladoga, the Isthmus, West and Central Ingria), by length and completeness. The type index (`t010100_1980`) lists all 436.
- **Risks.**
  - Dialect: the Ingrian versions are harder.
  - The SKS README asks for sensitivity towards the Karelian, Ingrian and Votic communities.
  - Christian contamination in some versions (the creator becomes God): mark it.
- **A run.** One SKVR corpus tool (TEI → line data with metadata), shared by 03–05. Dictionaries: *Suomen murteiden sanakirja* and *Karjalan kielen sanakirja* (kaino.kotus.fi, 403 today), Lönnrot's dictionary (PD), Kuusi–Bosley–Branch 1977 (©) for checking.

### europe-north-04 – The origin charms and the bear feast
- **What it is.** The healer's theology of naming: to stop iron's wound, fire's burn or the snake's bite, one must sing its origin. Iron was born from the milk of three maidens; fire was struck in the sky. The bear-feast songs return the slain bear's soul to its heavenly home.
- **Why the exception holds.** Use is the strongest control: charms change slowly. These are working ritual texts of the *tietäjä*, with pre-Christian powers (Ukko, Hiisi) beside later saints.
- **The selection.** One complete recording per type and main region (Viena, North Karelia, Ladoga, Kainuu), from the measured types. Because the corpus is huge, the unit must be fixed by the lead: one recording per type and region.
- **A run.** Same tool as 03; the same corpus project.

### europe-north-05 – Arhippa Perttunen's epic songs (1834)
- **What it is.** The whole epic repertoire of the greatest Viena singer, as he dictated it to Lönnrot over two days in April 1834: one culture-made whole, the source Lönnrot drew on most for the Kalevala.
  - It includes the Sampo forged and stolen (802 lines), Väinämöinen in Tuonela and in the belly of the dead giant Vipunen, the singing contest, and the kantele.
  - It also includes Christian legend-songs in the same metre (Väinämöinen's judgement by the Christ-child, the "Marjatta" theme). It shows the frame from inside.
- **Exception, base and risks.** The exception is as for 03; the base is SKVR I.
- **A run.** LARGE (6,325 lines). Its natural parts are the single songs. The Sampo song with Tuonela, Vipunen and the contest (≈1,530 lines) is a self-contained first run.

### europe-north-06 – The Poetic Edda, the heroic poems
- **What it is.** The Völsung–Niflung legend: Sigurd and the dragon, Brynhild, Guðrún's laments for husband and brothers, the Niflungs' death at Atli's court, and Guðrún's last sons sent against Jǫrmunrekkr. It is grief, vengeance and fate, mostly in women's voices.
- **Exception and dating.**
  - The historical kernel is 5th-century (Attila, the Burgundians), and Atlakviða and Hamðismál are archaic (9th–10th c.).
  - Grípisspá, the Guðrún laments and Oddrúnargrátr are probably 12th-century, from the Christian period. Hence C2 3: date each poem in the apparatus.
- **A run.** The base is Bugge, as 01. LARGE; six natural parts (in the table). The fall of the Niflungs (1,524 lines) is the oldest and most self-contained.

### europe-north-07 – Movses Khorenatsi, Book I
- **What it is.** The Armenian account of its own pre-Christian past:
  - Hayk the archer against Bel;
  - Ara the Fair, whom Queen Šamiram desired and who would not come to her, and the *aralezk'* dogs who lick the dead back to life;
  - Tigran and the dragon-king Aždahak;
  - the quoted minstrels' song of the birth of Vahagn ("heaven was in labour, earth was in labour …").
- **Exception and scores.** No exception is needed. The content is pre-301 CE (C1 2). But the frame is a Christian historian's: Hayk is placed after the Tower, and the date (5th or 8th c.) is disputed, so C2 is 2.
- **Base and tools.** TITUS's Unicode Grabar text of the PD 1913 critical edition (local use: TITUS forbids republication). Dictionaries: NBHL (1836–37, PD) and Bedrossian (PD), both on nayiri.com. Thomson (©) for checking.
- **Risks.** Grabar reading is `medium`; there is no open morphology checked today.
- **A run.** One run (≈15,000 words). Book II's song fragments (Artašēs and Satʿinik; Artawazd chained in Masis) may be added as an appendix, kept identical by script if Book II is ever done.

### europe-north-08 – The Martyrdom of Šušanik
- **What it is.** Georgia's oldest surviving literary text, written within a decade of the events. The Armenian-born queen of Kartli refuses her husband Varsken, who has turned Zoroastrian, and is beaten, chained and imprisoned for six years until her death.
  - It is a woman's defiance, a marriage broken by faith, and an eyewitness's grief.
  - It is ancient by the absolute date (C1 2).
- **Base and tools.** The Georgian Wikisource text (Unicode; check against the standard edition, Abuladze 1963, ©). Dictionaries: Sarjveladze–Fähnrich (©), Abuladze's Old Georgian dictionary (1973), GNC (gnc.gov.ge) for lemmas.
- **Risks.** Claude's Old Georgian is `low`, so a run needs a careful glossary pass.
- **A run.** The text is short: one run, or a pair with an Armenian text (the Armenian version of the Martyrdom is in TITUS's Agiographica).

### europe-north-09 – The pre-Christian runic inscriptions
- **What it is.** The only Germanic sentences written by people who still worshipped the old gods:
  - the maker's formulas ("I, Hlewagastiz son of Holt, made the horn");
  - the eril-formulas;
  - the curses of Björketorp and Stentoften;
  - the Eggja slab's sea-death;
  - the bracteates' charms;
  - the Rök stone's riddles about the sun, Theodoric and Thor.
- **Wholeness.** A themed corpus like `מילים-באבן/`: each text is short but well preserved, and the whole is the oldest Norse voice.
- **Base.** Rundata-net's SQLite gives every inscription with transliteration, Old Norse normalization and an English translation (Rundata's own). Its terms: name and link the database every time it is used, and report the use to Uppsala Runic Forum.
- **Risks.** Runological cruxes. The English translations are a modern translation, so translate from the normalization and transliteration and check against them. Bracteate legends are often unreadable: exclude those.
- **A run.** Short (≈1,450 words). It can join 01 as an appendix project, or stand alone.

### europe-north-10 – The West Germanic charms
- **What it is.**
  - Merseburg I: the *idisi* loose the captives' fetters.
  - Merseburg II: Phol and Wodan, the foal's foot, "bone to bone, blood to blood".
  - The OE Æcerbot: "Erce, Erce, Erce, earth's mother".
  - The Nine Herbs Charm: Woden's nine glory-twigs.
  - Wið færstice: the spears of the *ese* and elves.
  - The OHG worm, horse, blood and bee charms.

  These are the peasant's fears and remedies, the counterpart of Maqlû.
- **Why the exception holds.** Through use and outside confirmation: the Merseburg formula is shared with Atharvaveda 4.12, and Wodan healing the horse is pictured on 5th–6th-c. B-bracteates. Most of the OHG charms are already Christianized (Christ, St Stephen, the Jordan): translate the frame and mark it.
- **Base.** Steinmeyer (TITUS, local use) and Grendon 1909 (PD). The OE charms could be keyed from Grendon's OCR or from Dobbie, ASPR VI (©, checking only).
- **A run.** One corpus, two languages (OE, OHG). Köbler's OHG dictionary and Bosworth–Toller online.

### europe-north-11 – Táin Bó Cúailnge, Recension I
- **What it is.** Ireland's epic: Medb's raid for the Brown Bull, the Ulstermen's curse of weakness, the boy Cú Chulainn holding the fords alone, his killing of his foster-brother, the bulls' last fight shaping the land. It is the heroic ethic of honour, boast, *geis* and fosterage.
- **Exception: narrow.**
  - Ireland was Christian by c. 500, and the text is a monastic compilation, with doublets, glosses and an interpolator's hand in LU.
  - But the *filid* still carried the old lore, and the *rosc* passages are archaic.
  - The Iron-Age "window" view (Jackson) is now rejected for the material culture.
- **Base.** The PD Strachan–O'Keeffe 1912 text exists only as poor OCR, which would have to be re-keyed against the scan.
- **Risks.** Old Irish is `low` without eDIL (blocked today). LARGE.
- **A run.** It needs dil.ie on the allowlist, a cleaned base, and an Old Irish set-up. Recommend it only after 12–14 test the set-up on shorter texts.

### europe-north-12 – Togail Bruidne Da Derga
- **What it is.** King Conaire, whose reign is golden while he keeps his *gessi* (taboos). He breaks them one by one, each step foreseen, and rides to the hostel where he will die. The tale is long descriptions of the doomed company, a meditation on sacral kingship, fate and the Otherworld.
- **Exception.** As for 11; the sacral-kingship core is ancient (cf. the *fír flathemon* of Audacht Morainn).
- **Base.** Stokes 1902 (PD, OCR); CELT for reading.
- **Risks.** Old and Middle Irish layers; eDIL needed.
- **A run.** A good first Irish run: one tale, about the size of a Sumerian epic.

### europe-north-13 – Cath Maige Tuired
- **What it is.** The only full narrative of the Irish gods:
  - Bres's oppressive reign and the satire that ends it;
  - Lug, master of every art, admitted to Tara;
  - Dian Cécht's healing well;
  - Balor's eye;
  - the Morrígan's prophecy of the world's end.
- **Exception.** Narrow. The gods' names are confirmed outside Ireland: Lugus in Gaulish inscriptions, Lleu in Welsh. The text is a 9th–12th-c. monastic rendering, and it survives in one 16th-c. manuscript (C3 2).
- **Base.** Stokes 1891 (PD); Gray 1982 (ITS ©) for checking only.
- **A run.** One run, after 12.

### europe-north-14 – Immram Brain and Echtrae Chonnlai
- **What it is.** The two oldest Irish Otherworld tales (c. 700). A woman from the Land of Women summons Bran over the sea. Manannán, riding his chariot over the waves, sings that the sea is a flowering plain to him, and prophesies Christ. A fairy woman takes Connla away in a crystal boat.
- **The Christian frame.** It is integral and designed, so translate it and mark it; it is a model case of reworking.
- **Base.** Meyer & Nutt 1895 (PD).
- **A run.** Short; it pairs with 13 as "the Irish Otherworld".

### europe-north-15 – Three Ulster tales
- **What they are.**
  - The carving of the hero's portion at Mac Dathó's feast: savage comedy.
  - Deirdre's exile and death (Longes mac nUislenn).
  - Cú Chulainn killing his unknown son (Aided Óenfir Aífe): the Indo-European father–son combat, with the Hildebrandslied (19) and Rostam and Sohrab.
- **Base.** Windisch 1880 and Meyer (PD). Verify each tale's text before a run.
- **A run.** Not measured by script; ≈7,000 words in all.

### europe-north-16 – Old Irish wisdom
- **What it is.**
  - Audacht Morainn (c. 700): through the ruler's truth (*fír flathemon*) the land bears fruit, the cattle give milk and the seas give fish.
  - Tecosca Cormaic: King Cormac's sayings on conduct and on women.
  - The Triads: 256 three-fold observations on law, nature and manners.

  These are justice and kingship in the Irish voice, the counterpart of the Mesopotamian wisdom corpus.
- **Base.** The Triads are verified (Meyer 1906). Audacht (Thurneysen 1917) and Tecosca (Meyer 1909) are PD but were not fetched today. Kelly 1976 (DIAS ©) for checking.
- **A run.** One run; eDIL needed.

### europe-north-17 – Snorri's Edda: the Prologue and Gylfaginning
- **What it is.** The whole Norse myth-world as a system: Ginnungagap, Ymir's body made into the world, Auðhumla, the first humans from two trees, Thor at Útgarða-Loki's, Baldr's death, Ragnarǫk. It is told by a Christian Icelandic scholar c. 1220, who frames the gods as men of Asia (the Prologue).
- **Exception: weak.** It holds only for the Eddic stanzas Snorri quotes. The prose is his synthesis, with inventions (e.g. Auðhumla). Hence C2 2, high C3 (the canon of Norse myth for 800 years), and C4 5.
- **Base.** FJ 1931 (PD) on archive.org; heimskringla.no for reading.
- **A run.** One run after 01, in the same Norse corpus; mark every passage that has no older witness.

### europe-north-18 – Beowulf
- **What it is.**
  - Heorot and its monsters; the hero's three fights;
  - the funeral of Scyld, the Lay of the Last Survivor, the Geatish woman's lament at the pyre;
  - fate (*wyrd*) and the joy of the hall that must end.
- **Exception: borderline.**
  - For it: the poet is a Christian looking back on pagan ancestors (Tolkien), and the frame (Cain's kin, the Flood on the sword-hilt, the Creation song) cannot be peeled off. But the metre is archaic (Kaluza's law: Fulk; Neidorf), and the legend world is confirmed outside (Hygelac's raid, Gregory of Tours).
  - So C2 2. I kept it as `1 EXC`; the lead may drop it.
- **Base.** Wyatt's proofread Wikisource text (PD); Electronic Beowulf (free, ©) and Bosworth–Toller to check.
- **A run.** LARGE: three natural parts.

### europe-north-19 – The West Germanic heroic remnants
- **What it is.**
  - The Hildebrandslied: the father, returning after thirty years, must fight his son, who does not believe him ("now my own child must hew me with the sword").
  - Widsith: the singer's catalogue of 4th–6th-c. kings and peoples, a fossil of the heroic memory.
  - Deor: the refrain "that passed over, so may this".
- **Wholeness.** The Hildebrandslied breaks off before the end, but what survives is substantial and readable. Finnsburh and Waldere are too fragmentary to include.
- **A run.** Short; it can join 10 as one West Germanic run.

### europe-north-20 – The Ossetian Nart tales
- **What it is.** The heroes of the three Nart families:
  - Satana the all-wise matriarch;
  - Soslan, born from a stone and tempered in wolf's milk;
  - Batradz of steel;
  - the Narts' end: they choose eternal fame over long life, and perish.
- **Exception.** Plausible. Ossetian Christianity and Islam were thin layers (Uastyrdži = St George), and Dumézil's Scythian parallels (Herodotus 4.5–10) give thematic outside confirmation. But these are prose tales retold by 19th–20th-c. tellers and edited (C2 2).
- **Base.** TITUS gives Gardanti's Digor texts with transliteration (local use). The Iron texts (Narty 1989–91) are ©.
- **Risks.** Ossetic reading is `low`, and must not be done through Russian (the rule against translating from a modern translation). Abaev's etymological dictionary and the ironau.ru dictionaries help.
- **A run.** LARGE; propose one hero cycle.

### europe-north-21 – The Latvian mythological dainas
- **What it is.**
  - Saule the Sun-mother driving her chariot and sinking into the sea;
  - the Sons of God wooing the Sun's daughter;
  - Pērkons cleaving the Moon for his betrayal;
  - Dievs riding down the hill to bless the fields;
  - Laima assigning fate at birth.

  It is the most intimate peasant voice of northern Europe, with an Indo-European sun-myth (the Aśvins).
- **Exception.** Holds for the oral song world, which ran beside 600 years of Christianity. But Barons' edition normalized and selected the texts (C2 2).
- **Base.** Not verified: dainuskapis.lv returns Cloudflare 403, and korpuss.lv holds only LD vol. 2. The LD scans (PD) may be on gramatas.lndb.lv (host answers 200; the item was not checked).
- **A run.** It needs the allowlist or the scans first. Tezaurs.lv and Mīlenbahs–Endzelīns (PD) for the language.

### europe-north-22 – The Four Branches of the Mabinogi
- **What it is.**
  - Pwyll's year in the Otherworld; Rhiannon's slow-swift horse and her penance;
  - Branwen's slap and the cauldron of rebirth, Bendigeidfran's talking head;
  - the emptied land of Manawydan;
  - Blodeuedd, made of flowers and turned into an owl.

  Marriage, shame, compensation and enchantment.
- **Exception: weak.**
  - Composed c. 1100, six centuries after the conversion, as artful prose by a Christian author.
  - The pagan stratum survives in the divine names (Rhiannon, Lleu = Lugus, Manawydan = Manannán), which are confirmed outside.
  - C2 2; I kept it because it is the first central text of Welsh (C5 5). The lead may cut it.
- **Base.** Rhys–Evans 1887 and Evans 1907 (PD, OCR to be cleaned); GPC online for the language.
- **A run.** One run (≈27,000 words), or the branches singly.

## Excluded

- **Lönnrot's *Kalevala* (1835/1849) and *Kanteletar*:** a 19th-c. composition from the runes; the runes themselves are 03–05.
- ***Kalevipoeg*, *Lāčplēsis*:** literary national epics.
- **Hoaxes and forgeries:** Macpherson's *Ossian*, the *Oera Linda Book*, the *Book of Veles*, the Králové Dvůr and Zelená Hora manuscripts, Iolo Morganwg's *Barddas* and the "Third Series" triads, the Basque *Altabiskarko kantua* and the Iruña-Veleia graffiti, the Kensington Runestone, Simon Grunau's Prussian pantheon. Not candidates.
- **Gaulish (Larzac, Chamalières, Coligny, Châteaubleau, Orléans):**
  - contemporary artifacts (C1 2), but short, broken and only half-understood;
  - RIIG unreachable (2026-10-21), RIG ©;
  - not readable with control.
- **Celtiberian (Botorrita), Lepontic:** too short and too poorly understood.
- **Ogam inscriptions:** names only ("X son of Y").
- **Pictish:** no readable texts.
- **Wulfila's Gothic Bible (4th c.):** a translation of the Greek Bible, not a native text. The *Skeireins* is a Christian commentary, in fragments.
- **The Gothic calendar and Crimean Gothic:** fragments and word lists.
- **Early Irish law (*Senchas Már*, *Críth Gablach*, *Bretha Crólige*):**
  - the base (Binchy's CIH, 1978) is ©;
  - ALI (1865–1901) is PD but its readings are unreliable;
  - the archaic legal Old Irish is unreadable with control without the DIAS editions (©).
- **Lebor Gabála Érenn, Auraicept na nÉces, Saltair na Rann, Sex Aetates Mundi:** 10th–12th-c. Christian pseudo-history and biblical reception; too late, no exception.
- **The Metrical Dindshenchas:** 11th–12th-c. learned place-lore; too late (the exception is weak), and it is a vast compilation.
- **Tochmarc Étaíne:** the only full text (Bergin & Best 1938) is © in the EU to 2030; LU's fragment is too partial. Reconsider later.
- **Acallam na Senórach, Fled Bricrend, Táin Bó Fraích, Irish saints' Lives:** later or Christian-framed; second wave at best.
- **Early Welsh poetry (Y Gododdin, the Book of Taliesin, Canu Llywarch Hen, Canu Heledd):** the language is too obscure for control, and the editions are © (Williams 1938, Rowland 1990, Haycock 2007). Only Evans's PD diplomatic texts exist.
- **Culhwch ac Olwen:** c. 1100 Arthurian prose; the exception is weak, and it would follow 22.
- **Old English elegies (the Wanderer, the Seafarer, the Wife's Lament, the Ruin), the Exeter riddles, the Maxims:** Christian poems, too late, no exception.
- **OE Genesis A/B, the Heliand, Muspilli, the Wessobrunn Prayer:** Christian biblical poems. The 9 verse lines of Wessobrunn belong in 01's apparatus (the "neither earth nor heaven" formula).
- **The Finnsburh fragment, Waldere:** fragments.
- **Sólarljóð:** a Christian vision poem in eddic metre.
- **The Icelandic family sagas, *fornaldarsögur*, Heimskringla's Ynglinga saga:** 13th–14th-c. prose literature, too late. The *Hervarar saga* poems (Hlǫðskviða, Hervararkviða; on heimskringla.no, about 650 lines) could later extend 06.
- **Saxo, *Gesta Danorum*; Jordanes, *Getica*; Tacitus, *Germania*:** Latin outsider accounts; Tacitus belongs to greece-italy.
- **Old Prussian (catechisms 1545–61, the Basel epigram):** Christian translations, or two lines.
- **Lithuanian *raudos* and *sutartinės*:** base © (LLD 1980–), not open; the mythology is second-hand (Łasicki).
- **Russian byliny, the Dove Book, Fedosova's laments:** Christian-era Russia (content 10th–17th c.); the exception fails.
- **The Lay of Igor:** a 12th-c. Christian literary text, only ms burned.
- **The Primary Chronicle:** a 12th-c. Christian chronicle.
- **South Slavic epic:** Ottoman-era.
- **Estonian *regilaul*:** the databases (folklore.ee, regilaul.ee) were blocked on 2026-10-21 and the licence is unknown. Compare it in the 03 apparatus if they become reachable.
- **Sámi yoiks (Sirma 1673, two songs):** too short. Sámi myths survive only in hostile missionary reports.
- ***Sasna Tsrer* (Armenian epic, recorded from 1873):** medieval content in a Christian culture, so the exception fails; base ©.
- **Pʿawstos Buzand, Ełišē, Agatʿangełos, Eznik, Koriwn (5th-c. Armenian):**
  - Pʿawstos and Ełišē: no open digital text (TITUS lists Pʿawstos without a file).
  - Agatʿangełos, Eznik and Koriwn are on TITUS, but they are Christian histories and polemic.
  - Eznik's Zurvan myth belongs to the Iran survey.
  - Reconsider Pʿawstos (it holds oral epic matter) if a base appears.
- **The Georgian Amirani epic:** 19th–20th-c. folk records; base © and not online.
- **Leonti Mroveli, *Kartlis Cxovreba*:** 11th-c. Christian chronicle.
- **Circassian, Abkhaz, Vainakh and Dagestani Nart traditions:** base ©; reading confidence very low.
- **Basque:** no ancient texts (Aquitanian names only).

## New languages

The folder's only Norse so far is the 22-line HY excerpt; it has no other language of this region. Each needs its own grammar mapping, name table and renderings (guidelines §1).

- **Old Norse** (01, 02, 06, 17):
  - Base: Bugge 1867 (diplomatic) + FJ (PD).
  - Dictionaries: Cleasby–Vigfusson and Zoëga (PD; Germanic Lexicon Project scans); ONP (onp.ku.dk: connection failed today).
  - Morphology: none open; Noreen's grammar (PD).
  - Confidence: **high** for the Eddic poems, **medium** for skaldic kennings.
- **Proto-Norse** (09):
  - Base: Rundata's normalizations.
  - Grammar: Krause, Antonsen (©).
  - Confidence: **medium**; the cruxes are scholarly, not linguistic.
- **Old English** (10, 18, 19):
  - Base: Wyatt, Grendon, Thorpe (PD).
  - Dictionary: Bosworth–Toller online (200); the DOE is behind Cloudflare.
  - Confidence: **high**.
- **Old High German / Old Saxon** (10, 19):
  - Base: Steinmeyer via TITUS.
  - Dictionaries: Köbler's online OHG dictionary (200), Schützeichel (©).
  - Annotated corpus: the Referenzkorpus Altdeutsch (ReA, CC BY-SA) has lemmatized annotation (r, not checked).
  - Confidence: **medium-high**.
- **Old and Middle Irish** (11–16):
  - Base: Stokes, Meyer, Windisch, Strachan (PD, OCR to clean).
  - Dictionary: eDIL (dil.ie): **blocked**; essential.
  - Grammar: Thurneysen (PD in the EU), Strachan's *Old-Irish Paradigms* (PD).
  - Confidence: **low** (infixed pronouns, the verbal system, spelling); low-medium with eDIL.
- **Middle Welsh** (22):
  - Base: Rhys–Evans, Evans (PD).
  - Dictionary: GPC online (200).
  - Grammar: Strachan's *Introduction to Early Welsh* (1909, PD).
  - Confidence: **medium**.
- **Finnic runo-language: Viena and Ladoga Karelian, Ingrian, Finnish dialects** (03–05):
  - Base: SKVR TEI.
  - Dictionaries: SMS and KKS (kaino.kotus.fi: 403), Lönnrot's dictionary (PD), *Kielitoimiston sanakirja* (200).
  - Morphology: modern Finnish analyzers (Omorfi/Voikko) help only partly.
  - Confidence: **medium-high** for Viena Karelian, **medium-low** for Ingrian.
- **Latvian** (21):
  - Base: LD (PD).
  - Dictionaries: tezaurs.lv (200), Mīlenbahs–Endzelīns (PD).
  - Confidence: **medium**; old orthography.
- **Ossetic, Digor** (20):
  - Base: TITUS (Gardanti).
  - Dictionaries: Abaev's etymological dictionary, the ironau.ru dictionaries (200).
  - Confidence: **low**.
- **Classical Armenian** (07):
  - Base: TITUS (1913 edition).
  - Dictionaries: NBHL and Bedrossian (PD; nayiri.com 200).
  - Confidence: **medium**.
- **Old Georgian** (08):
  - Base: ka.wikisource.
  - Dictionaries: Abuladze 1973, Sarjveladze–Fähnrich (©).
  - Lemmas: GNC (gnc.gov.ge, redirects; not checked).
  - Confidence: **low**.

## Hosts

Not in `domains.txt`:

- **heimskringla.no:** Finnur Jónsson's skaldic texts (PD) and the Eddic and Snorri reading texts (MediaWiki `?action=raw` and `api.php` work). 01, 02, 06, 17.
- **www.septentrionalia.net:** PD PDFs: *Skjaldedigtning* A1–B2 (Þórsdrápa), FJ's Eddas. 02, 17.
- **www.germanic-lexicon-project.org:** Cleasby–Vigfusson and Zoëga scans. 01, 02, 06, 17.
- **rundata.info:** the Rundata-net SQLite. 09.
- **www.runforum.nordiska.uu.se:** Rundata's licence and terms. 09.
- **aineistot.finlit.fi:** the SKVR zip and web edition (the type index is on raw GitHub, already allowed). 03–05.
- **kaino.kotus.fi:** the Finnish dialect and Karelian dictionaries (403 today). 03–05.
- **www.kielitoimistonsanakirja.fi:** modern Finnish dictionary. 03–05.
- **dil.ie:** eDIL, the Irish dictionary (https reset, http 503 today). 11–16.
- **celt.ucc.ie:** CELT texts, for reading only (restricted). 11–16.
- **www.geiriadur.ac.uk:** GPC, the Welsh dictionary. 22.
- **bosworthtoller.com:** the OE dictionary. 10, 18, 19.
- **ebeowulf.uky.edu:** Electronic Beowulf, for checking. 18.
- **www.koeblergerhard.de:** the OHG dictionary. 10, 19.
- **ka.wikisource.org:** the Georgian text. 08.
- **www.nayiri.com:** the Armenian dictionaries. 07.
- **www.ironau.ru:** the Ossetian dictionaries. 20.
- **dainuskapis.lv:** the dainas (Cloudflare 403 today). 21.
- **gramatas.lndb.lv:** the LD scans. 21.
- **tezaurs.lv:** the Latvian dictionary. 21.

Already allowed and used here: etext.old.no, en.wikisource.org (send a User-Agent; it rate-limits: 429 after about 40 quick requests), archive.org, titus.fkidg1.uni-frankfurt.de (TITUS texts: local use only), raw.githubusercontent.com, github.com.

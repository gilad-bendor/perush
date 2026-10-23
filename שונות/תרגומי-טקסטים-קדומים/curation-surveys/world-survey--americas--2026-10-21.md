# World survey – the Americas: ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Legend: verified / reported; Bible benefit and Soul benefit each rated HIGH / MED-HIGH / MEDIUM / LOW.

Scope: Mesoamerica (Maya, Nahuatl/Aztec, Mixtec, Zapotec, Otomí), the Andes (Quechua, Aymara), and the oral traditions of North and South America written down in their own languages.
Downloads are cached (untrusted, not committed) under
`/tmp/claude-0/-home-user-perush/009325a3-391a-55eb-9c0e-32e1e254e6c6/scratchpad/world/americas/`.

**A framing fact for purpose 1.** No American text had any contact with Israel. Every Bible parallel below is **typological**: it lights up a motif (creation by the word over the waters, a flood, man made from earth, the confusion of languages), never the Bible's wording.
There are two exceptions, and both run the other way. The colonial texts were written by people who had *heard* Genesis (missionary catechisms, Vico's K'iche' *Theologia Indorum*, 1553–54). So a "parallel" in them may be a **borrowing from the Bible**. That makes them interesting as *reception*: how a Maya or Nahua author answered Genesis. For each text the survey therefore asks how much is pre-Hispanic and how much is colonial reworking.

---

## 0. Key findings

1. **The Popol Vuh is translatable from the K'iche' today, from a free source** (verified). Mesoweb hosts three free PDFs by Allen J. Christenson:
   - `PV-Literal.pdf` (304 pp.): the K'iche' text in modern orthography, **line by line with a literal English rendering**, in poetic lines numbered to about 8,710;
   - `PV-Original.pdf` (57 pp.): a diplomatic transcription of Ximénez's manuscript, about 27,400 words;
   - `PopolVuh.pdf` (285 pp.): the annotated free translation.

   All three are © Christenson. They are free to read and use, but may not be committed to the repo.
   The Popol Vuh is the strongest single American candidate for **both** purposes:
   - "only the sky alone… only the sea pooled" in the darkness (↔ Gen 1:2);
   - creation by the word ("Earth!" and it arose; ↔ Gen 1:9);
   - the gods' deliberation (↔ 1:26);
   - the failed mud and wooden people, and the flood that ends the wooden people (↔ Gen 6–9);
   - humans of maize (↔ 2:7);
   - the first men's sight dimmed "as breath on a mirror" (↔ 3:22);
   - the **languages changed at Tulan** (↔ Gen 11:1–9; the commentary's empty priority-2 block).
2. **The Florentine Codex's Nahuatl is open and machine-readable** (verified). Zenodo record 7213020 (Berthoud 2022, **CC BY 4.0**) has a transcription of all 12 books from the LOC scans. Book 6, the *huehuetlatolli* (prayers and the speeches of elders, parents and rulers), is about 55,000 words. It is the richest "soul of the ancients" text in the Americas, and Classical Nahuatl is the best-resourced language of the region (Molina, Carochi, the GDN of UNAM with 20+ colonial dictionaries, the Wired Humanities dictionary, the Axolotl corpus; all verified up).
3. **The *Leyenda de los Soles* (1558)** is the least Christianised Nahuatl cosmogony. It is short (estimate: a few thousand words), and it holds a **flood story whose ending inverts Gen 8:20–21**: the survivors' fish-roasting smoke reaches heaven and *angers* the gods instead of pleasing them. It also tells how Quetzalcoatl took the bones from Mictlan and bled on them to make humankind (↔ Gen 2:7).
   Its base text is a problem: the original manuscript (Codex Chimalpopoca) has been **lost since 1949**. Velázquez's facsimile is re-issued as a free IIH-UNAM PDF (2019, reported), and Paso y Troncoso 1903 is PD (reported). The good transcriptions (Lehmann 1938, Bierhorst 1992, Tena 2011) are copyrighted.
4. **The IIH-UNAM free digital books are a major open source** (verified for two titles). They publish **Nahuatl paleography plus Spanish** for:
   - the *Cantares mexicanos* (León-Portilla et al. 2011, 3 vols);
   - Garibay's *Veinte himnos sacros* (the *teocuicatl*, the most archaic Nahuatl liturgy);
   - the *Códice Chimalpopoca* facsimile;
   - more in the Serie Cultura Náhuatl.

   The licence is "reproduction authorised for non-profit use, unaltered, with full citation" (not CC).
   **Access quirk:** the server omits its GlobalSign intermediate certificate, so curl fails until that intermediate is added from its AIA URL (§4). WebFetch returns 503.
5. **Classic Maya inscriptions (3rd–9th c. CE) are the only genuinely ancient *texts* of the region**, but they are small and the readings are partly contested. The best for the commentary:
   - the Palenque Cross Group (692 CE): births of the gods and of the "First Father" before the era;
   - Palenque Temple XIX (c. 736 CE): a **flood and the beheading of the cosmic caiman**, ↔ the *tanninim* of Gen 1:21, the unit now being edited (Velásquez García 2006, free on Mesoweb, verified);
   - Quiriguá Stela C (775 CE): 13.0.0.0.0 4 Ajaw 8 Kumk'u, "the three stones were set" (↔ "in the beginning").

   The Bonn TWKM corpus and dictionary are **not public** (planned for about 2029; only its sign catalogue is online). Translation must go through published transliterations (Stuart 2005, a free Mesoweb PDF). LLM risk is high.
6. **The Huarochirí Manuscript** (Quechua, c. 1598–1608) is the Andes' one extensive native-language religious text. It has a llama-warned flood, the five-day death of the sun, and Pariacaca's contests. **No open base text was found**:
   - the BNE MS 3169 viewer blocks scripts (403);
   - Taylor 1987/2008 and Salomon & Urioste 1991 are copyrighted;
   - the archive.org copies are either lending-only or unauthorised uploads (not to be used).

   High value, blocked base. Buying Taylor or Salomon–Urioste is the user's decision.
7. **The Guarani *Ayvu Rapyta*** (Mbyá; recorded 1940s–50s, Cadogan 1959) is **openly hosted by the USP repository** (verified; 216 pp., Guarani + Spanish, rough OCR; © the Cadogan estate). In it, Ñamandu unfolds himself in the primal darkness and creates "the foundation of human speech" *before* the world: the closest American analogue to Gen 1:3 and John 1:1. It is short, well suited to an apparatus, and in a reasonably resourced language.
8. **North America**: the best public-domain native-language corpora are:
   - Hewitt's *Iroquoian Cosmology* (Onondaga, Seneca and Mohawk texts, interlinear, 1903/1928; verified). Sky Woman falls onto the primal waters, the muskrat dives for earth, the earth is set on the turtle's back (↔ Gen 1:2, 1:9–10), and two twin creators (↔ Gen 4).
   - Mooney's *Sacred Formulas of the Cherokees* (1891; **written by Cherokee doctors themselves** in the Sequoyah syllabary; verified PD).
   - La Flesche's Osage rites (1921–30; verified PD).

   For all of them the LLM would translate largely through the editor's interlinear gloss; that has to be flagged.
9. **Existing Hebrew translations: almost none.**
   - The only one found is *פופול וו, סיפור הבריאה של בני המאיה* (Astrolog, 2003; translator not named; almost certainly from a European version; verify in the NLI).
   - A Hebrew edition of León-Portilla's *Visión de los vencidos* is listed in UNAM's rights catalogue (details unknown).
   - **No** Hebrew translation from the original language was found for any text in this region, so every candidate here would be a first.
   - The NLI catalogue returns 403 from this session.
10. **Hoaxes and later constructions to avoid:**
    - the *Walam Olum* (Rafinesque 1836; shown to be a fabrication, Oestreicher 1994; Brinton 1885 printed it as genuine);
    - the "Nezahualcoyotl" poems popularised by Garibay and León-Portilla. The attributions are mostly unprovable, and the 100-peso-note poem is a modern selection.
    - *Ollantay*: a colonial Quechua drama, not Inca.
    - The *Título de Totonicapán*'s Israelite origin story is copied from Vico, not ancient. It is useful only as reception.

---

## 1. Ranked shortlist (table)

| # | Text | Language · date (composition / oral) · earliest ms | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul benefit | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Popol Vuh** | colonial K'iche' · written 1554–58 from older tradition (Hero Twins in Classic art 600–900 CE; San Bartolo murals c. 100 BCE) · Ximénez copy c. 1701–03 (Newberry Ayer MS 1515) | ~8,710 poetic lines, ~27k words · complete | Gen 1:1–2, 1:3/9, 1:26; 2:7; 3:22; 6–9; 11:1–9; Ex 14 | creation theology, underworld trial, ancestors, dawn, lineage | **HIGH / HIGH** | Christenson K'iche'+literal English PDF (free, ©) **verified**; Brasseur 1861 PD **verified** | good; colonial K'iche' medium-resourced; line-by-line control exists |
| 2 | **Florentine Codex Bk 6: huehuetlatolli** | Classical Nahuatl · speeches set down 1547 (per Sahagún) from oral rhetoric · MS 1577 (Laurenziana) | ~55k words · complete | Proverbs-type instruction ↔ Deut 6:6–7; confession ↔ Lev 5:5, Num 5:7; plague prayer ↔ 2 Sam 24; ruler ↔ Deut 17 | prayer, parenting, birth, death, confession, kingship | MED / **HIGH** | Zenodo CC BY 4.0 transcription **verified**; LOC/WDL and Getty scans | very good; best-resourced language |
| 3 | **Leyenda de los Soles** (+ Annals of Cuauhtitlan) | Nahuatl · dated 22 May 1558, glossing a pictorial · MS lost 1949; photographic facsimile | Leyenda short (est. 4–6k words); Annals long · facsimile only | Gen 1:14–16; 2:7; **6–9 & 8:20–21 (inverted)**; 5 (ages) | five ages, sacrifice, maize, sun's birth | **HIGH / HIGH** | facsimile (IIH-UNAM 2019 PDF, reported); Paso y Troncoso 1903 PD (reported); Lehmann 1938 / Bierhorst 1992 © | good language; base must be re-paleographed from the facsimile |
| 4 | **Florentine Codex mythic books: 1, 3, 7** (gods; Huitzilopochtli's birth at Coatepec; sun and moon at Teotihuacan) | Nahuatl · 1558–69 · MS 1577 | Bk 1 ~5.8k, Bk 3 ~5.5k, Bk 7 ~4.9k words · complete | Gen 1:14–18; 1:16 "two great lights" (the self-sacrificing gods who become sun and moon) | sacrifice, cosmos, the gods' character | MED-HIGH / HIGH | Zenodo CC BY **verified** | very good |
| 5 | **Ayvu Rapyta** (Mbyá Guarani) | Mbyá Guarani · recorded 1940s–50s from priests; oral age unknown · Cadogan 1959 | 19 chapters, 216 pp. bilingual; core cosmogony small · complete | **Gen 1:2–3**, John 1:1 (word before world), Gen 6–9 (flood) | the soul as "word-soul", sacred speech | MED-HIGH / HIGH | USP repository PDF (open-hosted, ©) **verified**, rough OCR | medium; Guarani well-resourced, Mbyá register esoteric |
| 6 | **Huarochirí Manuscript** | colonial Quechua · c. 1598–1608, from living oral cult · BNE MS 3169 | 31 ch. + 2 suppl. (est. 15–20k words) · complete, one MS | Gen 6–9 (llama-warned flood on a mountain); Gen 1:3–5 (5-day darkness); Gen 19 (inhospitable village destroyed) | huacas, ancestors, ritual, gender, rivalry | MED-HIGH / **HIGH** | **no open base**; Taylor / Salomon–Urioste © | medium-hard; base must be obtained |
| 7 | **Classic Maya creation inscriptions** (Palenque Cross Group + Temple XIX; Quiriguá Stela C; Vase of the Seven Gods K2796; Coba Stela 1) | Classic Mayan (glyphic) · 692–775 CE · the monuments themselves | a few hundred glyph blocks · good to fair | Gen 1:1 (era-base), **1:21 tanninim** (caiman beheaded, Temple XIX), 1:2 (darkness), theogony | divine kingship, time, the gods' births | MED-HIGH / MED-HIGH | Stuart 2005 TXIX (free PDF, ©) **verified**; drawings; TWKM not public | hard; via published transliteration only |
| 8 | **Teocuicatl: the 20 sacred hymns** | archaic Nahuatl · pre-Hispanic liturgy, recorded c. 1558–61 (Primeros Memoriales) | 20 hymns (est. ~500 short lines) · complete but obscure | Psalm genre; Ps 29 (storm-god), Ex 15 (warrior god) | liturgy, the gods in their own voice | MEDIUM / HIGH | Garibay (IIH-UNAM, free) **verified**; Seler 1904, Brinton 1890 PD | hard; much uncertainty; quick win as corpus |
| 9 | **Cantares mexicanos** (+ Romances de los señores) | Nahuatl · songs sung 1550s–80s, partly older genres · MS BNM 1628 bis; Romances 1582 | 85 folios, 91 song sets · good | Qoh 1–3, Ps 90/103:15 ("as grass"), Job 14 (transience) | "flower and song", war, friendship, death | MEDIUM / **HIGH** | IIH-UNAM 2011 paleography + Spanish **verified** | hard (metaphor-dense); Christian intrusions to flag |
| 10 | **Chilam Balam of Chumayel** (+ Tizimin, Maní, Kaua) | colonial Yucatec · katun lore from Postclassic books + colonial layers · Chumayel copied 1782 | ~100 pp. MS · good | Gen 1:6–8 (sky raised on trees), 6–9 (flood), Gen 1 (Christian creation chapter) | time as prophecy, fate, riddles of rulers | MED-HIGH / MED-HIGH | Gordon 1913 facsimile PD **verified**; Roys 1933 (US PD? verify) | hard; heavy mixing to disentangle |
| 11 | **Ruiz de Alarcón's Nahuatl incantations** | Nahuatl · charms in use 1610s–29, pre-Hispanic genre · 1629 MS | ~60 charms · good | Deut 18:10–11; Ex 22:17; Lev 13–15 (healing rites) | magic of daily life: hunting, love, birth, fever | MEDIUM / **HIGH** | 1892 Anales del Museo Nacional PD (reported); Andrews–Hassig 1984 © | medium-hard (esoteric "hidden words") |
| 12 | **Iroquois corpus: Hewitt's Cosmology + Hale's Book of Rites (Condolence)** | Onondaga/Seneca/Mohawk · tradition attested 1630s (Sagard, Jesuits); dictated 1889–1900 · Hewitt 1903/1928; Hale 1883 | cosmology ~100k-word book (3 versions); rites ~200 pp. · complete | Gen 1:2, 1:9–10 (earth-diver), Gen 4 (twins); mourning (Gen 23, Job 2:11–13) | creation, grief ritual, the Great Law | MEDIUM / HIGH | BAE 21 and 43 PD **verified**; Brinton vol. 2 PD **verified** | interlinear-dependent; LLM risk high in the source language |
| 13 | **Molina's Quechua prayers + Santa Cruz Pachacuti's Viracocha hymns** | Quechua · Inca state prayers recorded 1575 / c. 1613 · BNE MS 3169 | ~13 + ~6 short prayers · corrupt spellings | Psalms (Ps 139:7–10 "where are you?"), Gen 1 (creator of humans) | prayer to a distant creator | MEDIUM / HIGH | Lima 1916 edition and Jiménez de la Espada 1879 PD (reported); Markham 1873 English PD | hard; small; Itier's reconstructions © |
| 14 | **Rabinal Achí** | Achi (K'iche'an) · dance-drama, events 15th c., text written 1850 · Brasseur 1862 | ~1 hour of performance; a few thousand lines · complete | (weak) 1 Sam 15:32–33 (a captive before execution) | honour, farewell to homeland, enemy dialogue | LOW / HIGH | Brasseur 1862 PD **verified** (archive/Gutenberg) | medium |
| 15 | **Annals of the Kaqchikels** (Xajil) | Kaqchikel · begun c. 1571, continued to 1604 · 17th-c. copy | ~100 pp. · good | Ex 13–14 (sea crossing), Gen 11 (Tulan), Num (wanderings) | origin, the obsidian stone, epidemic of 1520 | MEDIUM / MED-HIGH | Brinton 1885 PD **verified** | medium |
| 16 | **Mooney's Sacred Formulas of the Cherokees** | Cherokee (syllabary, written by shamans) · formulas 19th c., genre older · MSS 1820s–80s | ~600 formulas collected, ~100 published · good | Deut 18:10–11; Num 5 (ordeal), Lev 13–14 | charms for love, hunting, illness, revenge | LOW-MED / HIGH | BAE 7 PD **verified** | interlinear-dependent |
| 17 | **Osage rites (La Flesche)** | Osage · rites performed into the 1910s · BAE 36, 39, 43, 45 (1921–30) | 4 large volumes · complete | Gen 1:2, 1:9 (the people descend from the stars; land rises from the water) | wigie recitations, child naming, vigil | MEDIUM / HIGH | PD **verified** | interlinear-dependent |
| 18 | **Dresden Codex** (+ Madrid, Paris, Grolier) | Postclassic Mayan glyphic · c. 1200–1400 (debated) · the codices | 74 pp. (Dresden) · good | Gen 7:11–12 (p. 74 "flood"; debated) | almanacs, Venus, prophecy | MEDIUM / MEDIUM | SLUB facsimile PD **verified**; Förstemann/FAMSI **verified** | hard; captions only |
| 19 | **Ritual of the Bacabs** | colonial Yucatec · incantations of pre-Hispanic type · 17th–18th-c. MS (Princeton, reported) | 46 incantations · damaged in places | Lev 13–15, Num 21:6–9 | disease as a being with a mother and a name | LOW-MED / HIGH | Roys 1965 / Arzápalo 1987 © (no open base) | hard |
| 20 | **Navajo Night Chant (Matthews 1902)** | Navajo · ceremony recorded 1880s–90s | ~330 pp. incl. song texts · good | (weak) Num 6:24–26 (blessing) | healing ceremony, "in beauty may I walk" | LOW / HIGH | PD (US, 1902) **verified** | medium (Navajo resourced) |

Runners-up (each in §2–§3): Título de Totonicapán (reception case); Zapotec ritual songs of Villa Alta (1704); Florentine Codex Book 12 and the Annals of Tlatelolco (conquest laments); Bautista's *Huehuetlatolli* (1600); Zuni emergence (Bunzel); Kwakiutl, Haida, Tlingit and Chinook texts (Boas, Swanton); Cree (Bloomfield 1930, newly US-PD); Kuna *Mu-Igala*; Songs of Dzitbalché.

---

## 2. The survey

### A. Maya

#### A1. Popol Vuh (Popol Wuj, "the Council Book")
**Colonial K'iche' (Latin script) · written c. 1554–58 by K'iche' nobles of Q'umarkaj, who say they write it "under Christianity" because "there is no longer a place to see" the original book (pictorial or glyphic) · Ximénez's copy with a Spanish translation, c. 1701–03, Chichicastenango (Newberry, Ayer MS 1515) · c. 8,710 poetic lines (Christenson's numbering) and about 27,400 words of K'iche' (word count of `PV-Original`, verified) · complete, one witness.**
- *What it is.* It has four movements:
  1. the cosmogony: the gods Tepew and Q'ukumatz in the waters, with Heart of Sky (Juraqan);
  2. the failed creations: the animals, which cannot speak praise; the mud person, which dissolves; the wooden people, who have no heart, are destroyed by a flood and a "black rain", and are beaten by their own pots and dogs;
  3. the Hero Twins, Junajpu and Xb'alanke: they defeat the false sun Seven Macaw; their father dies in Xib'alb'a; then they descend themselves, pass the houses of trial, are burnt and rise, and become sun and moon;
  4. humans made of maize, the first four fathers, the dawn, the migration from Tulan, and K'iche' lineage history down to the 1550s.

  An ancient hearer heard theology in couplets (*parallelismus membrorum*), ritual names, and the claim of a living dynasty.
- *Bible parallels* (typological; for the colonial layer, possible borrowing):
  - "All alone the sky… all alone the sea pooled… nothing standing… only stillness in the darkness, in the night" (K'iche' *xa u tuqel kaj… xa u tuqel remanik palo*, PV-Original fol. 1v) ↔ Gen 1:2, *tohu va-vohu*, darkness, waters.
  - Creation by word: "'Earth!' they said, and it arose at once" ↔ Gen 1:9.
  - The gods' deliberation and plural "let it be thus" ↔ Gen 1:26.
  - Humans whose task is to "call upon, nourish and remember" the gods ↔ Gen 2:15 (the comparison with Atraḫasis/Enki-Ninmaḫ is closer than with Genesis).
  - The four men see everything, so the gods dim their eyes "as breath upon a mirror" (literal, line c. 16437) ↔ Gen 3:5, 3:22 (knowledge as a threat to the gods).
  - The flood on the wooden people ↔ Gen 6–7, and also the flood tablet in Mesopotamia.
  - Maize dough kneaded by Xmukane ↔ Gen 2:7.
  - At Tulan "the languages of the nations were changed… their languages became different… they could not understand one another" (*xjalq'atij u ch'ab'al ri amaq'*) ↔ **Gen 11:1–9**, a priority-2 block with no commentary yet.
  - The crossing of the sea "as if there were no sea", on stones ↔ Ex 14.

  **Consensus:** the cosmogony and the Twins are **accepted as pre-Hispanic**. The Classic vases show the Twins (Juun Ajaw, Yax Bahlam) and the maize god's resurrection, and the San Bartolo West Wall murals (c. 100 BCE) show the shooting of the bird deity, the Seven Macaw episode (Taube, Saturno et al.).
  **Debated:** possible Christian or Vico influence on:
  - the creation-by-word framing;
  - the Tulan language-change and sea-crossing episodes;
  - the virginal conception of Xkik' by the skull's spittle.

  Key studies: Acuña 1983 (*El Popol Vuh, Vico y la Theologia Indorum*) argued for missionary input. **Sparks 2019** (*Rewriting Maya Religion*, Univ. Press of Colorado) holds that the authors used Vico's *Theologia Indorum* (1553–54) "as a foil" to restate a Maya world-view, and that Vico in turn seems to have known an earlier Popol Vuh (creature lists). Christenson's notes and Tedlock 1996 are the other key studies.
  This makes the Popol Vuh a double source for the commentary: an independent creation tradition, and a Maya *answer* to Genesis.
- *Soul of the ancients.* The best window on Maya theology. It shows:
  - the gods' need for beings who remember them;
  - the ethics of the underworld trials (cunning over force);
  - death and rebirth in maize;
  - the poignant "dawn" of the ancestors who wept for the sun;
  - the first fathers' farewell ("we are going back").
- *Base text and tools.*
  - Christenson, `PV-Literal.pdf` (K'iche' and literal English on facing lines, footnotes), `PV-Original.pdf` (diplomatic transcription by folio) and `PopolVuh.pdf` (2007 free translation = OU Press 2003). All on https://www.mesoweb.com/publications/Christenson/ — **verified** today (304/57/285 pp.), © Christenson / Mesoweb. Not committable; can be re-downloaded by recipe.
  - Brasseur de Bourbourg 1861 (K'iche' + French), PD, archive.org `popolvuhlelivres00bras` — **verified** (old orthography and readings).
  - The Ximénez MS: Newberry Digital Collections (reported; newberry.org resets the connection from here). LOC/WDL item 2021668226, "Popol Vuh: transcription in Quiché and translation into Spanish" (found via the LOC JSON API; item page 403 to curl). The Ohio State digital facsimile is reported to exist; library.osu.edu answers 405.
  - Sam Colop 1999/2008 (K'iche' in modern orthography + Spanish; Cholsamaj; ©).
  - Craveri 2013 (UNAM; K'iche' + Spanish + grammatical notes; ©); her UNAM thesis is CC BY-NC-ND (reported).
  - Tools: Christenson's K'iche'–English dictionary, FAMSI `quidic_complete.pdf` (**verified** 200); Kaufman's *Preliminary Mayan Etymological Dictionary*, FAMSI `reports/01051/pmed.pdf` (**verified**); Mondloch, *Basic Quiché Grammar*; the colonial vocabularies of Basseta and Coto (in print, ©).
  - Modern translations: Christenson 2003/2007; Tedlock 1985/1996; Colop 2008 (Spanish); Bazzett 2018 (verse).
  - Hebrew: Astrolog 2003, *פופול וו, סיפור הבריאה של בני המאיה*. The translator is not named and it is probably not from the K'iche' (reported via he.wikipedia; verify in the NLI).
- *Feasibility and risks.* Colonial K'iche' is medium-resourced. An LLM knows modern K'iche' poorly, but Christenson's literal line-by-line English makes every line checkable. The anchoring risk is high (the model has absorbed the Tedlock and Christenson English), so draft from the K'iche', then check.
  Size is large but very regular (couplets). Copyright: the K'iche' text itself (a 16th-c. work) is PD; Christenson's modern-orthography transcription is ©, so commit our own normalised text or only line references.
- *Benefit*: Bible **HIGH** (Gen 1:2, 1:9, 1:26, 3:22, 6–9, 11:1–9) / Soul **HIGH**. *Recommendation*: **the region's first project**. Start with Part 1 (cosmogony to the flood, about 900 lines) and the Tulan section (Gen 11).

#### A2. Classic Maya hieroglyphic inscriptions: the creation and theogony texts
**Classic Mayan (Ch'olan), logo-syllabic script · 3rd–9th c. CE; the key texts 692–775 CE · the monuments themselves (contemporary witnesses, no copying!) · small: a few hundred glyph blocks for the creation group · stone, mostly good; Temple XIX excellent.**
- *What it is.* Royal inscriptions that anchor a king's rites in mythic time:
  - **Palenque Cross Group** (Temples of the Cross, Foliated Cross and Sun; dedicated 692 CE by K'inich Kan Bahlam II). The birth of the "First Father" (GI's father) in 3122 BCE and of the progenitor Muwaan Mat; GI's descent from the sky; the births of the Palenque Triad (GI, GII, GIII) in 2360 BCE.
  - **Temple XIX platform** (c. 736 CE). GI's accession under Itzamnaaj, with the beheading of a cosmic caiman/starry deer-crocodile linked to a flood (Stuart 2005; Velásquez García 2006).
  - **Quiriguá Stela C** (775 CE). On 13.0.0.0.0 4 Ajaw 8 Kumk'u (Aug. 3114 BCE) "three stones were set" by paired gods: the cosmic hearth.
  - The **Vase of the Seven Gods** (K2796) and **K7750**. The gods arranged "in darkness" on the era date.
  - **Coba Stela 1**. A date with twenty units above the bak'tun: vast time.
  - **Tortuguero Monument 6** (669 CE). The future 13.0.0.0.0 of 2012 and the god Bolon Yokte'. Note: it is about a building dedication, not an apocalypse.
- *Bible parallels.*
  - The era base "13.0.0.0.0" ↔ *bereshit* (Gen 1:1) as a fixed beginning of the present creation. Unlike Genesis, there are earlier creations and dates before the base: GI's father is born before it.
  - Setting the hearth stones ↔ ordering the world (Gen 1:6–10).
  - Gods in darkness ↔ Gen 1:2.
  - **The beheaded cosmic caiman whose blood/flood re-founds the world ↔ Gen 1:21 *ha-tanninim ha-gedolim*, Ps 74:13–14, Isa 27:1, 51:9** (Chaoskampf). This is typological, but it is a third independent Chaoskampf beside Tiāmat and Baal–Yam, and useful exactly for the unit now being edited.
  - Theogony as genealogy ↔ Gen 5 / *toledot*.

  Consensus: the readings of the dates are accepted. The creation-and-flood interpretation of Temple XIX is accepted by leading epigraphers but parts are debated.
- *Soul of the ancients.*
  - Time as the medium of meaning;
  - kings as re-enacting the gods;
  - the gods' births "witnessed" and dated like royal events;
  - genuinely ancient voices, untouched by Europe (the only such texts in the region besides the codices).
- *Base text and tools.*
  - Stuart 2005, *The Inscriptions from Temple XIX at Palenque* (PARI): free Mesoweb PDF, 209 pp., **verified**; the chapter "A New Look at Palenque's Mythology" is separately at `mesoweb.com/books/TXIX/Stuart_Chapter6.pdf` (**verified** 200).
  - Velásquez García, "The Maya Flood Myth and the Decapitation of the Cosmic Caiman", *PARI Journal* 7(1), 2006: `mesoweb.com/pari/journal/archive/PARI0701.pdf` (**verified**).
  - Drawings: Linda Schele's drawings (LACMA/FAMSI, reported) and Merle Greene Robertson's rubbings (Mesoweb selection PDF, verified listed).
  - Dictionaries:
    - Boot's *Preliminary Classic Maya–English / English–Classic Maya Vocabulary* (Mesoweb `resources/vocabulary/Vocabulary-2009.01.pdf`, **verified** 200);
    - Montgomery's hieroglyph dictionary (FAMSI, **verified**);
    - the Mathews–Bíró Maya Hieroglyph Dictionary (FAMSI research, reported);
    - Kettunen & Helmke's *Introduction to Maya Hieroglyphs* (Wayeb, reported);
    - David Stuart's blog *Maya Decipherment* (mayadecipherment.com, **verified** 200).
  - Bonn **TWKM** (classicmayan.org): the text database is internal (TextGrid). Its *Digital Sign Catalog* (Working Paper 5, 2025) is online (**verified** `classicmayan.org/portal/signcatalog`). The dictionary is planned for the end of the project (about 2029).
  - The Peabody CMHI site returns 403 from here. The Kerr vase database: research.mayavase.com **verified** 200.
  - Translations: Stuart 2005; Stuart & Stuart 2008 (*Palenque*, Thames & Hudson, ©); Martin & Grube 2008 (©); Looper 2003 on Quiriguá.
- *Feasibility and risks.* LLM competence with glyph images is negligible. With a published transliteration and segmentation (e.g. *i-PAS-ja … u-K'AL-wa*), an LLM can render the formulae but cannot judge contested readings. So translate **only** from a cited epigrapher's transliteration, and mark each reading's source and certainty.
  The corpus is small; the pieces would be accompanied by drawings described in words, not reproduced (©).
- *Benefit*: Bible MED-HIGH (Gen 1:1–2, **1:21**) / Soul MED-HIGH. *Recommendation*: a small "Maya creation inscriptions" corpus (Cross Group + Temple XIX + Stela C + K2796), after the Popol Vuh, with a note on Gen 1:21 for the current unit.

#### A3. The Postclassic Maya codices: Dresden, Madrid, Paris, the Maya Codex of Mexico (Grolier)
**Yucatec-influenced Mayan glyphs · painted c. 1200–1450 (Dresden's date debated: 11th–15th c.) · Dresden 74 pp.; Madrid 112; Paris 22 (damaged); Grolier 10 (authenticated 2016) · Dresden good.**
- *What it is.* Divinatory almanacs (260-day cycles with gods and captions), Venus and eclipse tables, New Year rites, katun prophecies (Paris). The captions are short ("the rain god… abundance of maize"). The pictures carry much of the meaning.
- *Bible parallels.* Dresden p. 74: a sky-caiman pours water from its mouth, the old goddess Chak Chel pours a jar, and the black god is armed below. Thompson read it as the flood that destroyed the world (↔ Gen 7:11 "the windows of heaven"). Others read it as rain/world-renewal. Velásquez García 2006 ties it to the caiman myth. **Debated.** Venus tables ↔ Gen 1:14 ("for signs and seasons").
- *Soul.* Time as fate; daily ritual; the gods of maize, rain and death.
- *Base and tools.* SLUB Dresden digital facsimile `digital.slub-dresden.de/werkansicht/dlf/2967/1` (**verified** 200, PD). FAMSI's Förstemann edition with Schele drawings (`famsi.org/mayawriting/codices/pdf/dresden_fors_schele_all.pdf`, **verified** 200). The **Maya Codices Database** (Vail & Hernández, mayacodices.org) has glyph-by-glyph transcription, transliteration and translation of every almanac (reported; its TLS certificate does not match its hostname from here).
- *Feasibility.* The captions are translatable only via the Vail–Hernández readings; there is little continuous text.
- *Benefit*: Bible MEDIUM (Gen 7:11; Gen 1:14) / Soul MEDIUM. *Recommendation*: an excerpt (p. 74 + one almanac) inside the Maya inscriptions corpus, not a project.

#### A4. Books of Chilam Balam (Chumayel, Tizimin, Maní/Pérez, Kaua, Ixil…)
**Colonial Yucatec Maya · compiled 16th–18th c. from hieroglyphic-book lore (katun prophecies, calendars) plus Spanish almanacs and Christian texts · Chumayel copied 1782 by Juan Josef Hoil (Princeton) · Chumayel ~ 100 pp. · good.**
- *What it is.* Town books of the Chilam (prophet) Balam:
  - katun prophecies ("in 11 Ahau… the Itzá…");
  - the history of the Itzá and Xiu;
  - the "Language of Zuyua" (riddles testing would-be lords);
  - the **katun 11 Ahau creation/destruction** (Oxlahun ti K'u, the 13 gods, are defeated by Bolon ti K'u, the 9; the sky falls; a flood; the Bacabs raise the world-trees at the four corners, the red, white, black and yellow ceiba);
  - a "Creation of the World" (*u kahlay u zihil uinic*) with Adam and Christian angels;
  - songs.
- *Bible parallels.* The world-trees raised after the flood ↔ Gen 1:6–8, 8:22, 9:13 (a re-founding after a flood). The flood itself ↔ Gen 6–9. The Christian Genesis chapter is reception, not parallel. Knowlton 2010 (*Maya Creation Myths: Words and Worlds of the Chilam Balam*, Univ. Press of Colorado, ©) analyses the blending of pre-Hispanic and Christian cosmogonies. Consensus: the katun and flood material is pre-Hispanic in substance; the framing is colonial.
- *Soul.* Time as recurring fate ("the katun returns"); defeat and colonial trauma voiced as prophecy; the riddles of Zuyua.
- *Base and tools.* Gordon 1913 photographic facsimile of Chumayel (Penn Museum Anthropological Publications; archive.org `bookofchilambala00hoil`, **verified**, PD). Roys 1933 (Carnegie Inst. Publ. 438; Maya text + English). It is reported US-PD for lack of renewal (sacred-texts hosts it; sacred-texts answers 403 here); verify. Edmonson 1982 (Tizimin) and 1986 (Chumayel) (©). Bricker & Miram 2002 (Kaua, MARI, ©). INEHRM Mexico PDF (reported). Dictionaries: the Cordemex (1980, print); the Calepino de Motul (Acuña 1984, ©); Bolles' compilation (FAMSI; the old URL now 404).
- *Feasibility.* Hard: riddling, abbreviated, colonial spelling, and the layers have to be separated. The LLM knows some Yucatec but is unreliable on the esoteric register.
- *Benefit*: Bible MED-HIGH / Soul MED-HIGH. *Recommendation*: a selection (the 11 Ahau creation-flood, the katun wheel, the Zuyua riddles) after the Nahuatl projects; base = the Gordon facsimile + Roys.

#### A5. Ritual of the Bacabs
**Colonial Yucatec · incantations of pre-Hispanic type (they invoke Itzamna, the Bacabs, the four colours), copied 17th–18th c. · one MS (Princeton, reported) · 46 texts · some damage.**
- *What it is.* Medical charms. The disease (a seizure, a fever, the "jaguar-macaw" eruption) is named, given a genealogy ("who is its mother? who its father?"), and expelled to the four directions.
- *Bible parallels.* Weak: Lev 13–15, Num 21:6–9 (snake bite and healing). The real comparanda are Mesopotamian (Udug-ḫul, Maqlû), already in this project.
- *Soul.* HIGH: illness as a person with a lineage; the healer's identification with the gods.
- *Base.* Roys 1965 (OU Press, Maya transcription pp. 71–113, ©). Arzápalo 1987 (UNAM, ©). The USF Digital Commons copy of Roys is "withdrawn" (verified). No open base.
- *Benefit*: Bible LOW-MED / Soul HIGH. *Recommendation*: record; it becomes a candidate only if the user buys or borrows Roys/Arzápalo or a Princeton facsimile is found.

#### A6. Rabinal Achí (Xajooj Tun)
**Achi (a K'iche'an language) · a dance-drama about 15th-c. wars between Rabinal and K'iche', performed continuously; text written down in 1850 by Bartolo Sis · Brasseur 1862 (Achi + French) · complete (a long dialogue) · good.**
- *What it is.* A captured K'iche' warrior (K'iche' Achi) and his captor (Rabinal Achi) exchange formal speeches, repeating each other's words. The captive asks for his last wishes (to drink, to dance with the Mother of Green Feathers, to see his mountains and valleys) and is sacrificed. UNESCO Masterpiece of Oral Heritage (2005).
- *Bible parallels.* Weak: Agag before Samuel (1 Sam 15:32–33); the rhetoric of reproach (Judg 11:12–27).
- *Soul.* HIGH: honour, defeat, homesickness, dignity facing death. A pre-Hispanic genre, little Christianised.
- *Base.* Brasseur 1862, *Grammaire de la langue quichée… Rabinal-Achi*: archive.org `grammairedelalan02bras` and Gutenberg `rabinalachi15309gut` (**verified**, PD). Tedlock 2003 (OUP, ©); Breton 1994/2007 (©).
- *Feasibility.* Medium. Brasseur's orthography is old; it has to be normalised via K'iche' tools.
- *Benefit*: Bible LOW / Soul HIGH. *Recommendation*: a good second K'iche'an project for purpose 2.

#### A7. Annals of the Kaqchikels (Memorial de Sololá / Xajil chronicle)
**Kaqchikel · begun c. 1571 by Francisco Hernández Arana Xajilá, continued by Francisco Rojas to 1604 · a 17th-c. copy (Paris, BnF) · ~ 100 pp. · good.**
- *What it is.* Origin from Tulan (four Tulans); the gift of the obsidian stone Chay Abaj; the crossing of the sea; migration; the wars; the plague of 1519–21 ("great was the stench of the dead"); the Spanish conquest.
- *Bible parallels.* Ex 13–14 (crossing), Num (wandering stations), Gen 11 (dispersal from Tulan). Typological, with possible colonial colouring.
- *Soul.* MED-HIGH: lineage memory; the epidemic passage is among the most moving native testimonies.
- *Base.* Brinton 1885, *Annals of the Cakchiquels* (Kaqchikel + English; Library of Aboriginal American Literature 6), archive.org `libraryofaborigi06brinuoft` (**verified**, NOT_IN_COPYRIGHT). Maxwell & Hill 2006 *Kaqchikel Chronicles* (UT Press, ©, the modern edition).
- *Benefit*: Bible MEDIUM / Soul MED-HIGH. *Recommendation*: a companion to the Popol Vuh's migration section.

#### A8. Título de Totonicapán, Título de Yax and the other K'iche' títulos
**K'iche' · 1554 (Totonicapán) · a 1834 Spanish translation by Chonay; the K'iche' MS was rediscovered in 1973 · ~ 30 folios.**
- *What it is.* It opens by **copying the first part of Vico's *Theologia Indorum***: creation, Adam and Eve, the Israelites, and the claim that the K'iche' descend from the tribes of Israel who crossed the Red Sea. Then come K'iche' history and lineages parallel to the Popol Vuh.
- *Bible parallels.* Explicit borrowing (reception). That is valuable as a showcase of how a Maya author grafted his people onto Genesis–Exodus, but it is not ancient.
- *Base.* Carmack & Mondloch 1983 (UNAM, K'iche' + Spanish, ©; online availability not checked). Sparks 2017/2019 on Vico (©).
- *Benefit*: Bible MEDIUM (reception) / Soul MEDIUM. *Recommendation*: cite in the Popol Vuh apparatus as the control case for "biblical colouring"; no separate project.

#### A9. Songs of Dzitbalché (Kantares de Dzitbalché)
**Colonial Yucatec · an 18th-c. MS (it claims to copy songs from c. 1440; doubtful) · 15 songs · fair.** Songs of sacrifice by arrow (the *x-wayak*), maidens' flower rites, the poet's lament. Soul MED-HIGH, Bible LOW.
Base: Barrera Vásquez 1965 (INAH, ©); Nájera Coronado 2007 (©); Ershova 2022 (Mesoweb Simposio PDF, **verified** 200; a study). No open base. *Recommendation*: record only.

### B. Nahuatl (Aztec) and central Mexico

#### B1. Florentine Codex (Sahagún, *Historia general*), Book 6: the huehuetlatolli
**Classical Nahuatl (with a Spanish column) · Book 6 written in Nahuatl in 1547 (Sahagún: "translated in 1577, thirty years after it was written in the Mexican language") from the formal oratory of the nobility; the genre is pre-Hispanic · MS 1575–77, Biblioteca Medicea Laurenziana, Med. Palat. 218–220 · about 55,000 Nahuatl words in the Zenodo transcription (verified count; manuscript line breaks inflate the token count somewhat) · complete.**
- *What it is.* 43 chapters:
  - **prayers** to Tezcatlipoca in plague, war and poverty, and for a new ruler; the prayer at confession to Tlazolteotl;
  - **speeches**: of a ruler to his people; of a father to his son and to his **daughter** ("you are a precious necklace… the earth is slippery…"); of a mother to her daughter;
  - the midwife's words at birth ("you have come to toil…") and the bathing of the newborn;
  - speeches at marriage, at death and at pregnancy;
  - the **proverbs, riddles and metaphors** (chs. 41–43).

  An ancient hearer heard dense *difrasismos* (paired metaphors: *in atl in tepetl* "the water, the mountain" = city) and a world of duty, humility and fragility.
- *Bible parallels.*
  - The parent's instruction ↔ Prov 1–9 (to "my son"), and Deut 6:6–7.
  - Confession once in a life before the priest of Tlazolteotl ↔ Lev 5:5, 16:21, Num 5:6–7 (confession and remission; Sahagún himself compared it to Christian confession).
  - Prayer in plague ↔ 2 Sam 24, Lev 26:25.
  - The installation of a ruler, with exhortations to humility ↔ Deut 17:14–20.
  - The newborn "has come to suffer on earth" ↔ Gen 3:16–19, Job 14:1.

  Typological; the parallels are strong for wisdom. Sahagún's editing (his selection, some Christianising glosses in the Spanish column) is the reworking to flag. The Nahuatl column is generally judged authentic oratory.
- *Soul.* The best text in the Americas for "how they prayed, mourned and raised their children".
- *Base and tools.*
  - **Zenodo 7213020** (Berthoud 2022, "Transcript of the Florentine Codex (Nahuatl)", per-book .txt files, **CC BY 4.0**, made from the LOC scans): **verified** (API, Readme, Books 1, 2, 3, 6, 7, 12 downloaded). Book 2 ends with the *nemontemi*; the 20 hymns (B4) are not in it.
  - The manuscript itself is PD: LOC/WDL scans (reported; item pages 403 to curl) and archive.org `florentine-codex` (PD Mark, reported).
  - The **Getty Digital Florentine Codex** (2023: Nahuatl and Spanish transcriptions, new English and Spanish translations, search; images CC BY-NC-ND per search results; text licence **not verified**). The site fails TLS from here (incomplete chain) and WebFetch got 503.
  - Dibble & Anderson 1950–82 (Nahuatl + English, © Univ. of Utah / SAR) remains the standard check translation (rank 3, but pre-2000).
  - Tools:
    - the **Gran Diccionario Náhuatl** (UNAM; 20+ dictionaries incl. Molina, Carochi, Olmos, Sahagún, Wimmer; **verified**);
    - the Online Nahuatl Dictionary (Wired Humanities, **verified**), and the Early Nahuatl Library (enl.wired-humanities.org, FC Book 12 chapters, **verified** 200);
    - Molina 1571 (PD);
    - Karttunen 1983; Andrews 2003; Launey; Lockhart, *Nahuatl as Written* (©);
    - the Axolotl Nahuatl–Spanish parallel corpus (axolotl-corpus.mx, **verified** 200).
  - Translations: Dibble–Anderson; Sullivan 1974 (prayers); León-Portilla & Silva Galeana 1991 (*Huehuehtlahtolli*, Bautista's set, FCE, ©).
  - Hebrew: none found.
- *Feasibility.* Very good: the best-resourced indigenous American language, with abundant parallel text. Risks:
  - anchoring on Dibble–Anderson (which the model has seen);
  - difrasismos (render them literally, and explain them in the apparatus);
  - the transcription's line-break hyphenation (needs a normalisation pass with GDN normalised spelling).
- *Benefit*: Bible MEDIUM (wisdom, confession, kingship) / Soul **HIGH**. *Recommendation*: **co-first project with the Popol Vuh**: translate the prayers (chs. 1–9), the parents' speeches (c. chs. 17–22) and the life-cycle speeches (c. chs. 23–40), then chs. 41–43 (proverbs, riddles, metaphors). Chapter ranges are approximate; check them against the manuscript headings.

#### B2. Leyenda de los Soles (the Legend of the Suns, "Manuscript of 1558") and the Annals of Cuauhtitlan
**Nahuatl · the Leyenda is internally dated 22 May 1558 and reads as a commentary on a lost pictorial; the Annals c. 1570 · both in the *Codex Chimalpopoca*, lost from the Museo Nacional since 1949, surviving in photographs and copies · Leyenda short (estimate 4–6,000 words; verify), Annals long (about 50 printed pages) · complete in facsimile.**
- *What it is.* The **four previous suns/ages** (Jaguar, Wind, Rain-of-fire, Water), each ending in catastrophe. In the Water age the **flood**: Tezcatlipoca warns Tata and Nene to hollow out a cypress and eat only one ear of maize each. They survive, but they roast fish; the smoke rises to heaven; the gods (Citlalinicue, Citlallatonac) are angered; Tezcatlipoca cuts off their heads and makes them dogs. Then:
  - Quetzalcoatl descends to Mictlan for the bones of the former people; he tricks Mictlantecuhtli, falls, the bones break (so humans differ in size), and Cihuacoatl grinds them; the gods bleed (Quetzalcoatl from his penis) onto the meal ↔ "they deserved us" (*macehualli*);
  - the discovery of maize in Tonacatepetl (the ant);
  - the birth of the fifth sun at Teotihuacan (Nanahuatzin);
  - the Mixcoatl and Topiltzin Quetzalcoatl stories.
- *Bible parallels.*
  - The flood: warned survivors in a wooden vessel ↔ Gen 6:13–7:16; the **smoke of their roast reaching heaven provokes the gods' anger** ↔ **Gen 8:20–21** (the "pleasing odor" of Noah's sacrifice, which the commentary has not yet reached: priority 2). A sharp contrast that also echoes Atraḫasis' gods gathering "like flies".
  - Man from ground bones and divine blood ↔ Gen 2:7 (dust + breath), and Enūma eliš VI (Qingu's blood), Atraḫasis I (clay + the slain god's blood): a near-exact typological match to the Mesopotamian recipe.
  - The successive ages ↔ Hesiod's ages; Dan 2. Their absence in Genesis is itself a datum: one creation, one flood.
  - Nanahuatzin's self-immolation ↔ Gen 1:14–16, luminaries created rather than self-sacrificed.

  Consensus: the Leyenda is regarded as one of the least Christianised Nahuatl sources; no Christian elements are commonly noted apart from the dating.
- *Soul.* The Mexica theology of debt: humans are "deserved" by divine penance and repay with sacrifice. The fragility of ages.
- *Base and tools.*
  - Velázquez 1945, *Códice Chimalpopoca* (facsimile + Spanish): IIH-UNAM free PDF 2019, 73.8 MB (catalogue entry **verified**; PDF not downloaded).
  - Paso y Troncoso 1903, *Leyenda de los Soles…* (Florence; Nahuatl + Spanish), PD (reported; not found in a quick archive.org title search; verify).
  - Lehmann 1938, *Die Geschichte der Königreiche von Colhuacan und Mexico* (Nahuatl + German). PD in the EU (Lehmann d. 1953), but probably © in the US until 2034 (URAA). Verify; do not commit.
  - Bierhorst 1992, *Codex Chimalpopoca: The Text in Nahuatl* + *History and Mythology of the Aztecs* (Univ. of Arizona Press, ©; archive.org lending only).
  - Tena 2011, *Mitos e historias de los antiguos nahuas* (Conaculta, ©).
  - Tools as B1.
- *Feasibility.* Good language. The base must be re-transcribed from the facsimile photographs (a manageable task for a short text), checked against Paso y Troncoso, and against Lehmann and Bierhorst locally (not committed).
- *Benefit*: Bible **HIGH** (Gen 2:7, 6–9, **8:20–21**) / Soul HIGH. *Recommendation*: Tier 1. Do the Leyenda whole, and the Annals' cosmogonic opening and the Topiltzin Quetzalcoatl cycle as excerpts.

#### B3. Florentine Codex, Books 1, 3, 7 (the gods; their origins; the heavens), and Book 12
**As B1 · Book 1 ≈ 5.8k, Book 3 ≈ 5.5k, Book 7 ≈ 4.9k, Book 12 ≈ 26k words (Zenodo, verified counts).**
- *What it is.*
  - Book 3: the birth of **Huitzilopochtli** at Coatepec. Coatlicue is impregnated by a ball of feathers; her daughter Coyolxauhqui and the 400 Huitznahua plot to kill her; the god is born armed and dismembers his sister. Also Quetzalcoatl at Tollan; and the destinations of the dead (Mictlan, Tlalocan, the sun's house).
  - Book 7: the gods gather at **Teotihuacan** in darkness: "who will bear the burden, who will be the sun?" Tecuciztecatl hesitates and Nanahuatzin leaps into the fire; two suns; a rabbit thrown at one makes the moon; the wind moves them.
  - Book 12: the conquest from the Tlatelolco side (omens, the massacre in the temple, the lament).
- *Bible parallels.*
  - "Two great lights" made in darkness (Gen 1:16): here the "greater" and "lesser" lights are two gods, and the lesser is dimmed by a rabbit (↔ the moon's diminution, a midrash in b. Ḥullin 60b!).
  - Miraculous conception and the murderous brothers ↔ Gen 37.
  - Book 12's omens and lament ↔ Deut 28, Lamentations (typological).
- *Soul.* HIGH: the gods' fear and courage; sacrifice as the price of motion; the Mexica's own account of catastrophe.
- *Base.* Zenodo CC BY (**verified**); tools as B1. Lockhart 1993, *We People Here* (Nahuatl + English of Book 12; ©).
- *Benefit*: Bible MED-HIGH (Gen 1:14–18) / Soul HIGH. *Recommendation*: Book 7 chs. 1–2 and Book 3 ch. 1 as a short "Mexica cosmogony" companion to B2; Book 12 later, as a lament corpus.

#### B4. Teocuicatl: the Twenty Sacred Hymns
**Archaic Nahuatl · pre-Hispanic temple hymns recorded c. 1558–61 at Tepepulco (Primeros Memoriales, Madrid) and later in the Florentine Codex · 20 hymns (estimate ~500 short lines) · complete, with a Nahuatl gloss.** Sahagún left them **untranslated** as "the devil's songs".
- *What it is.* Hymns to Huitzilopochtli ("I, the Yellow-plumed one, made the sun rise…"), Tlaloc, Xipe ("my god, your jewelled water came down"), Cihuacoatl, Chicomecoatl (maize), Xochipilli, Ixcozauhqui, Atlaua, and others, with the cries of the dancers.
- *Bible parallels.* The Psalm genre; Ps 29 (storm), Ex 15:3 ("YHWH is a man of war") ↔ the Huitzilopochtli hymn; Ps 65 (rain and harvest). Typological.
- *Soul.* HIGH: the most direct pre-Christian liturgy of the Aztecs.
- *Base.*
  - Garibay 1958/1995, *Veinte himnos sacros de los nahuas* (IIH-UNAM free PDFs; one chapter **verified**: the Cihuacoatl hymn, Nahuatl + Spanish + commentary; non-profit reproduction allowed; the PDF text layer of the Nahuatl is poor OCR).
  - Seler 1904, "Die religiösen Gesänge der alten Mexikaner", *Gesammelte Abhandlungen* II (archive.org `gesammelteabhan0*selegoog`, PD; which volume holds it not checked).
  - Brinton 1890, *Rig Veda Americanus* (Nahuatl + gloss; archive.org `rigvedaamericanu00brin`, **verified** listing, PD).
  - Sullivan's English (in Sahagún, *Primeros Memoriales*, OU Press 1997, ©).
- *Feasibility.* Hard: archaic, ritual, partly obscure even to Sahagún's informants. The apparatus must carry heavy uncertainty. An excellent quick win as a corpus if marked properly.
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: Tier 2, after B1–B2.

#### B5. Cantares mexicanos and Romances de los señores de la Nueva España
**Nahuatl · songs performed and written c. 1550s–1580s, partly older genres (*xochicuicatl*, *icnocuicatl*, *yaocuicatl*) · Cantares: MS 1628 bis, Biblioteca Nacional de México (85 folios, 91 song sets); Romances: 1582, attached to Pomar's *Relación de Tezcoco* (Benson Library, Austin) · good.**
- *What it is.* "Flower and song":
  - the transience of life ("do we truly live on earth? not forever on earth, only a little while here");
  - friendship among nobles; war as flowery death; the "Giver of Life" (Ipalnemohuani);
  - songs of orphanhood after the conquest;
  - songs attributed to **Nezahualcoyotl**, Tecayehuatzin and others.
- *Christian reworking: high, and debated.*
  - The texts name *Dios*, *Santa María* and the saints (e.g. *yehuan Dios* in canto X, **verified** in the IIH text).
  - Bierhorst 1985 argued that they are post-conquest "ghost songs" summoning dead warriors (a revitalisation genre); León-Portilla and Garibay read them as preserving pre-Hispanic poetry and philosophy.
  - The attributions to named poets, above all Nezahualcoyotl, are mostly not demonstrable (Lee 2008, *The Allure of Nezahualcoyotl*, ©). Treat names as headings, not authorship.
- *Bible parallels.* Qoheleth ("vanity"), Ps 90:5–6 and 103:15–16 ("as grass… as a flower of the field"), Job 14:1–2. Typological but close in imagery.
- *Soul.* HIGH: the Nahua lyric voice on death, friendship and beauty.
- *Base.* León-Portilla (ed.) et al. 2011, *Cantares mexicanos* (3 vols, paleography + Spanish), IIH-UNAM free PDFs by chapter (**verified**: vol. II/1, canto X; "reproduction authorised for non-profit use…"). Bierhorst 1985 (Stanford, ©) and 2009 (*Ballads of the Lords of New Spain*, UT Press, ©).
- *Feasibility.* Hard: vocables, refrains, metaphor-dense, with cross-linguistic loans. But the IIH paleography is very good.
- *Benefit*: Bible MEDIUM / Soul **HIGH**. *Recommendation*: Tier 2, a selection of 20–30 songs with an honest note on dating and attribution.

#### B6. Ruiz de Alarcón, *Tratado de las supersticiones* (1629): the Nahuatl incantations
**Nahuatl (with Spanish) · charms in use in Guerrero and Morelos in 1617–29; the *nahualtocaitl* ("hidden-name") genre is pre-Hispanic · the 1629 MS (Mexico) · about 60 charms · good.**
- *What it is.* Spells for hunting deer, fishing, collecting honey, travel, love, childbirth, fevers, scorpion stings and divination by maize. Tools and illnesses are addressed by mystic names ("my uncle the green woman" = the medicinal plant).
- *Bible parallels.* Deut 18:10–11, Ex 22:17 (the very practices the Torah forbids); Lev 14 (purification rites); Num 21:8–9 (snake cure).
- *Soul.* HIGH: daily magic, the intimacy of a farmer with his tools and the animals.
- *Base.* Ruiz de Alarcón 1892, *Anales del Museo Nacional de México* 6 (ed. Paso y Troncoso; PD; INAH journal archive revistas.inah.gob.mx, reported; the 302 redirect not followed). Andrews & Hassig 1984 (OU Press, Nahuatl + English, ©). Coe & Whittaker 1982 (©). López Austin 1967/1971 (©).
- *Feasibility.* Medium-hard: an esoteric register, but the Spanish glosses in the source help.
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: Tier 2; pairs naturally with the Mesopotamian Maqlû/Udug-ḫul already in the folder.

#### B7. Other Nahuatl texts (each short)
- **Bautista's *Huehuetlatolli*** (1600; Olmos's collection of the 1530s–40s). Moralising, Christianised; Book 6 (B1) first. León-Portilla & Silva Galeana 1991 (©). Soul HIGH / Bible MED.
- ***Coloquios y doctrina cristiana*** (1564, Sahagún). The Mexica priests' reply to the twelve friars ("our ancestors… it is enough that we have lost"). Its authenticity is debated (Sahagún's reconstruction in the 1560s). León-Portilla 1986 (©). Soul HIGH as reception.
- ***Historia Tolteca-Chichimeca*** (c. 1545–65; Nahuatl + pictorials). Emergence from Chicomoztoc (the seven caves) ↔ Gen 11:31–12:1 and the Exodus (typological). Kirchhoff et al. 1976 (©); BnF manuscript (Gallica 403).
- **Annals of Tlatelolco** (1540s?; perhaps the earliest Nahuatl alphabetic text), the conquest lament. Tena 2004 (©).
- **Chimalpahin, Tezozomoc, *Crónica Mexicayotl***: the Aztlan migration (Huitzilopochtli leads, ↔ the Exodus pillar of cloud, typological). Historical, late. Schroeder et al. (©). Record only.
- **Primeros Memoriales** (Tepepulco 1558–61): the earliest Sahagún stratum, incl. the hymns (B4). Paso y Troncoso 1905–07 photographic facsimile (PD, reported); Sullivan 1997 (©).
- **Otomí**: the colonial Otomí texts (Codex Huichapan; catechisms) are historical-annalistic or Christian; Lastra (©). No ancient-tradition text of size was found. Record only.

#### B8. Pictorial manuscripts (painted, not written)
Codex Borgia group (Borgia, Vaticanus B, Cospi, Fejérváry-Mayer, Laud), Codex Boturini, Codex Mendoza, Codex Telleriano-Remensis, and the Mixtec codices (C1).
*Not translatable as texts.* They are read by iconographic interpretation (Anders, Jansen & Reyes García 1993–94; Boone 2007). They earn a place only as described images in an apparatus. **Jansen & Pérez Jiménez 2017, *Time and the Ancestors: Aztec and Mixtec Ritual Art*** (Brill, Early Americas 5, **open access** via OAPEN/DOAB; reported; OAPEN returns 403 to this session) covers the Borgia temple scenes and the Selden Roll.

### C. Oaxaca: Mixtec and Zapotec

#### C1. Mixtec codices: Vindobonensis (obverse), Nuttall, Bodley, Selden; and Mixtec oral tradition
**Painted, Postclassic (14th–15th c.); the alphabetic Mixtec is colonial and documentary.**
- Vindobonensis obverse: the primordial couple; Lord 9 Wind (Quetzalcoatl) brings the sky waters; **the first lords are born from a tree at Apoala** (↔ Gen 2:9; typological); the first dawn. Fray Gregorio García (1607, Spanish) records a Mixtec creation story: the primordial couple's garden, a flood.
- Base: facsimiles (ADEVA, ©) and the Jansen–Pérez Jiménez readings, the latter in Mixtec categories (Brill OA 2017, reported).
- *Recommendation*: not a translation project. An excerpt as "described image" for Gen 2.

#### C2. Zapotec: the Villa Alta ritual songs and calendars (1704)
**Colonial Northern Zapotec (Cajonos, Nexitzo) · surrendered in 1704 to the bishop: 99–102 divinatory booklets + songs; Booklets 100–101 are a communal ritual genre "of Late Postclassic origin", 102–103 Christian clandestine songs · AGI Seville.**
- *What it is.* Songs invoking four founding ancestors (Lord 1 Cayman, Great Eagle…) and deities, sung clandestinely. Tavárez calls them "the only extant corpus of communal ritual songs in a Mesoamerican language performed clandestinely in colonial times".
- *Base.* Tavárez, FAMSI report 02050 (2005), "Nicachi Songs" (`famsi.org/reports/02050/02050Tavarez01.pdf`, **verified**; a study with excerpts). Tavárez 2022, *Rethinking Zapotec Time* (UT Press, ©; the full corpus).
- Tools: Ticha (ticha.haverford.edu, **verified**: colonial Valley Zapotec texts and vocabularies of Córdova 1578 and Levanto; open). But Villa Alta is Northern Zapotec, and the language is very poorly resourced for an LLM.
- *Benefit*: Bible LOW / Soul MED-HIGH. *Recommendation*: record; not feasible without Tavárez 2022 and a specialist's glossing.

### D. The Andes (Quechua, Aymara)

#### D1. The Huarochirí Manuscript (*Runa yndio ñiscap machoncuna…*)
**Colonial Quechua (a "general language" variety with local features) · written c. 1598–1608 by an anonymous Andean (perhaps Cristóbal Choquecasa) under the direction of the extirpator Francisco de Ávila, from the living cult of the Checa and neighbouring ayllus · Biblioteca Nacional de España MS 3169 (the same volume also holds Molina's and Santa Cruz Pachacuti's texts) · 31 chapters + 2 supplements (estimate 15–20,000 words; verify) · complete, one manuscript with author's corrections.**
- *What it is.*
  - Cuniraya Viracocha, who disguises himself as a beggar and fathers a child through a fruit;
  - the **flood**: a llama refuses to eat and warns its herder that the sea will overflow in five days; the man and his family flee to the mountain Huillcacoto with all the animals; the fox's tail is blackened by the water;
  - the **sun's death**: five days of darkness when the stones knocked together and the mortars ate people;
  - Huatyacuri the poor son of Pariacaca, who defeats his rich brother-in-law in contests;
  - **Pariacaca**, born from five eggs on a mountain, who defeats the fire god Huallallo Carhuincho and drowns an inhospitable village that did not offer him drink;
  - Chaupiñamca the female huaca; the ancestors' festivals; the dead return after five days.

  A hearer heard the charter of local shrines and kinship.
- *Bible parallels.* All typological:
  - the animal-warned flood with the family saved on a mountain ↔ Gen 6–9, 8:4 (on the mountains); the commentators (Salomon, Taylor) discuss possible Noah colouring: debated;
  - the five-day darkness ↔ Gen 1:2–5 / Ex 10:21–23;
  - a disguised god punishing an inhospitable village and sparing one woman ↔ Gen 18–19 (Sodom; Lot's wife), a striking match;
  - the poor younger son defeating the elder ↔ Gen 25–27.
- *Soul.* HIGH: the only extensive native-language window onto Andean religion. Huacas as kin; the obligations of reciprocity; women's cults; humour and rivalry; the author's own tension ("if the ancestors had known writing…"; some Christian disclaimers).
- *Base and tools.*
  - **No open base found.** Taylor 1987 (IEP/IFEA; 2nd ed. 1999/2008, Quechua + Spanish, ©). Salomon & Urioste 1991 (UT Press, Quechua transcription + English, ©; archive.org `huarochirimanusc0000unse` is lending-only). The archive.org PDFs of Taylor and Arguedas (`taylor-g-ritos-y-tradiciones-de-huarochiri`, `ManuscritoDeHuarochiriJMArguedasCompleto`) are **unauthorised uploads: not to be used**.
  - BNE MS 3169 is reported digitised in the Biblioteca Digital Hispánica; bdh.bne.es returns 403 to this session.
  - Tools: González Holguín 1608 *Vocabulario* (PD; digitised, reported); Santo Tomás 1560 (PD); Itier's dictionaries (©); Taylor's grammatical notes (©); runasimi.de (**verified** 200; modern Quechua).
- *Feasibility.* Colonial Quechua is moderately resourced. An LLM handles modern Southern Quechua imperfectly; risk medium-high. The main obstacle is the base text.
- *Benefit*: Bible MED-HIGH (Gen 6–9, 18–19) / Soul **HIGH**. *Recommendation*: Tier 1 by value, **blocked by base**. Ask the user whether to buy Taylor 2008 or Salomon–Urioste, or try BDH manually (the facsimile, then transcribe chapters 3–5 and 8–10 ourselves).

#### D2. Cristóbal de Molina's Quechua prayers (1575) and Santa Cruz Pachacuti Yamqui's Viracocha hymns (c. 1613)
**Quechua · Inca state prayers to the creator Viracocha (Tiqsi Wiraqocha) recorded c. 1575 (Molina's *Relación de las fábulas y ritos de los Incas*) and c. 1613 (Santa Cruz Pachacuti, *Relación de antigüedades*) · both in BNE MS 3169 · Molina ~13 prayers (each 5–15 lines), Pachacuti ~6 · copyist corruption is heavy.**
- *What it is.* "O Viracocha, foundation of the world… who made man saying 'let there be man, let there be woman'… where are you? Are you above, below, in the middle?…". Prayers for the Inca's health and the people's multiplication.
- *Bible parallels.* Ps 139:7–10 (where shall I flee from you), Gen 1:27 ("male and female"), Isa 40:26. Debate: the Christian colouring of the "creator" theology (Itier; Duviols; Pachacuti is a Christian *ladino*). Molina is considered the more reliable.
- *Soul.* HIGH: prayer to a distant, hidden creator.
- *Base.* Molina: Lima 1916 (Romero/Urteaga, PD; archive.org `relacion-de-las-fabulas-y-ritos-de-los-incas-1575` exists, content not checked); Urbano & Duviols 1989 (©); Bauer, Smith-Oblitz & Urbano 2011 (UT Press, ©); Markham 1873 (English, Hakluyt, PD). Pachacuti: Jiménez de la Espada 1879, *Tres relaciones de antigüedades peruanas* (PD, reported); Itier & Duviols 1993 (©).
- *Feasibility.* Small but hard (corrupt spellings, reconstructed readings). Every line needs an "uncertain" mark.
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: a quick win, if paired with D1 or done as an "Andean prayers" mini-corpus.

#### D3. Guaman Poma de Ayala, *Nueva corónica y buen gobierno* (1615)
**Spanish with Quechua (and Aymara) passages · 1,189 pp. with ~400 drawings · Copenhagen, Det Kgl. Bibliotek GKS 2232 4º · complete.**
- It synchronises the **"ages of the Indians"** (Vari Viracocha Runa, Vari Runa, Purun Runa, Auca Runa) with the biblical ages (Adam, Noah, Abraham, David): a native Andean "Table of Nations" logic answering Gen 5 and 10 (reception). It contains Quechua songs (*haraui*, *haylli*) and prayers.
- Base: the full facsimile + transcription + translation, **verified** at poma.kb.dk (free).
- Mostly Spanish and colonial-Christian. *Recommendation*: excerpts only (the ages chapter; the Quechua songs). Bible MED (reception) / Soul MED-HIGH.

#### D4. Other Andean
- **Betanzos 1551, Cieza, Sarmiento** (Spanish): Viracocha's creation at Titicaca (darkness → sun → stone people; ↔ Gen 1:3). Not original-language. Record.
- ***Ollantay*** and the Quechua colonial dramas: 18th-c. literary works. The claim of Inca origin is generally rejected. Exclude.
- **Khipus**: knotted-cord records, partly numerical (census, tribute); narrative khipus are claimed but **undeciphered** (Urton; Medrano 2021). Open data: the Open Khipu Repository / Khipu Field Guide (khipufieldguide.com, **verified** 200). Not translatable.
- **Aymara**: no pre-modern native-language text of size. Bertonio 1612 *Vocabulario* (PD) and 20th-c. oral collections only. Exclude for "ancient".
- **Moche, Nazca, Tiwanaku**: no writing.

### E. North America (oral traditions recorded in the native language)

#### E1. The Iroquois corpus: Hewitt, *Iroquoian Cosmology* (1903, 1928), and Hale, *The Iroquois Book of Rites* (1883)
**Onondaga, Seneca, Mohawk; Cayuga, Mohawk and Onondaga for the Condolence · the cosmology is attested for the Huron in the 1620s–30s (Sagard 1632, Brébeuf in the *Jesuit Relations* 1636), so the tradition is pre-contact. Dictated 1889 (John Buck, Onondaga), 1896 (Seneca), c. 1900 (Seth Newhouse, Mohawk) · Hewitt: BAE 21st Annual Report (1903; archive.org `iroquoiancosmolo00hewi`, 260 images, NOT_IN_COPYRIGHT, **verified**; interlinear native text + free translation) and 43rd Annual Report (1928; archive.org `annualreportofbu43smithso`, **verified** volume) · Hale: Brinton's Library vol. 2 (archive.org `libraryofaborigi02brinuoft`, **verified** listing).**
- *What it is.*
  - The Sky World: a great tree with luminous blossoms is uprooted and the pregnant **Sky Woman falls** through the hole.
  - Waterfowl break her fall; animals dive for mud (the muskrat succeeds and dies); **earth is spread on the Turtle's back** and grows.
  - Her daughter bears **twins**, the good Sapling (Tharonhiawakon) and the flint-bodied one who kills his mother at birth. They create and counter-create: rivers, monsters, animals.
  - The Condolence: the "Requickening" address that wipes the mourners' tears, clears their ears and throat, and restores the mind; part of the Great Law of the Haudenosaunee.
- *Bible parallels.* All typological:
  - waters before land ↔ Gen 1:2, 1:9–10 ("let the dry land appear");
  - a woman's fall from the sky world after a tree ↔ Gen 3, a famously debated comparison, with no contact;
  - the hostile twins ↔ Gen 4 (Cain and Abel), Gen 25:22–26 (struggle in the womb);
  - the Condolence ↔ Job 2:11–13, Gen 37:35 (comforting).
- *Soul.* HIGH: the cosmology, and a formal grief ritual of great beauty.
- *Feasibility.* Onondaga, Seneca and Mohawk are very poorly resourced for an LLM; translation would rest on Hewitt's interlinear gloss (a "re-translation through the gloss", to be stated openly). Hewitt was a Tuscarora native speaker-scholar. The OCR is decent (verified sample).
- *Benefit*: Bible MEDIUM / Soul HIGH. *Recommendation*: Tier 2. The Onondaga version (Hewitt 1903, pp. 141–220) as the North American creation text.

#### E2. Mooney, *The Sacred Formulas of the Cherokees* (1891)
**Cherokee, written in the Sequoyah syllabary by Cherokee doctors themselves (e.g. the Swimmer manuscript) in the 19th c. (the syllabary dates from 1821); the genre is older · BAE 7th Annual Report (1891), PD (Gutenberg `thesacredformula24788gut`, "Public domain in the USA", **verified**) · ~100 formulas published (of ~600 collected) · good.**
- Formulas for love ("I am as beautiful as the red sun…"), hunting, ball-play, illness, "to destroy life", and going to water. The Kilpatricks (1960s, ©) published more.
- Bible LOW-MED (Deut 18:10–11; Num 5:11–31 ordeal) / Soul HIGH. Cherokee is moderately documented (a Cherokee–English dictionary; the LLM has some knowledge). Risk medium-high. *Recommendation*: Tier 3; a natively written corpus, which is rare and valuable.

#### E3. La Flesche, the Osage rites (BAE 36th, 39th, 43rd, 45th Annual Reports, 1921–30)
**Osage (Dhegiha Siouan) · rites practised into the 1910s, of old age · Osage text with literal and free translation · PD (`osagetriberite00laflrich`, NOT_IN_COPYRIGHT, **verified**; 43rd report **verified**) · four large volumes.**
- The *wigie* recitations: the people descend from the stars, seeking bodies; the elk calls the land up from the waters; the child-naming rite; the vigil rite; and the "Sayings of the Ancient Men".
- Bible MEDIUM (Gen 1:2, 1:9; naming ↔ Gen 2:19–20) / Soul HIGH. Osage is very poorly resourced, so the work is interlinear-dependent. *Recommendation*: Tier 3.

#### E4. Navajo: Matthews, *The Night Chant* (1902), and other chantway texts
**Navajo · a ceremony recorded 1880s–90s · AMNH Memoirs 6, 1902 (US PD; Wellcome scan `b3134902x`, **verified**) · ~330 pp., with Navajo song and prayer texts.**
- The healing prayer to the Thunderbird of Tsegihi ("in beauty may I walk… with beauty before me…"); the songs.
- Later Navajo texts: Sapir & Hoijer 1942, *Navaho Texts* (©); Haile (©).
- Bible LOW / Soul HIGH. Navajo is reasonably documented (Young & Morgan). *Recommendation*: Tier 3, the prayers only.

#### E5. Zuni: Bunzel, "Zuñi Origin Myths" and "Zuñi Ritual Poetry" (BAE 47th Annual Report, 1932), and *Zuni Texts* (1933)
**Zuni (an isolate) · tradition old (the emergence) · BAE 47 PD (archive.org `annualreportofbu47smithso`, **verified** volume); *Zuni Texts* (PAES 15, 1933): US copyright status not checked (lending copy).**
- The emergence from four underworlds, ascending by ladders and a pole; the sun-father's call; the hardening of the soft moist people; a flood; the search for the Middle Place; the long prayers (*tewusu*).
- Bible MEDIUM (Gen 1–2; Gen 11:2 "they journeyed") / Soul HIGH. Zuni is very poorly resourced, so risk is high. *Recommendation*: Tier 3.

#### E6. Northwest Coast, Subarctic, Plains and Arctic text collections (one line each; all with native text and interlinear or facing translation)
- **Boas & Hunt, *Kwakiutl Texts*** (Jesup 1902–06; PD by date): the second series of 1975 is lending-only.
- **Swanton, *Haida Texts and Myths*** (BAE Bull. 29, 1905, **verified** open) and ***Tlingit Myths and Texts*** (BAE Bull. 39, 1909, **verified** open): Raven steals the light (↔ Gen 1:3, typological); the flood. Bringhurst's translations of the Haida poets Skaay and Ghandl (1999–2001, ©) show their literary stature.
- **Boas, *Chinook Texts*** (1894, **verified**) and ***Kathlamet Texts*** (1901); **Sapir, *Takelma Texts*** (1909, **verified**) and *Wishram Texts* (1909).
- **Bloomfield, *Sacred Stories of the Sweet Grass Cree*** (1930, archive.org open, **verified** listing; newly US-PD in 2026 by the 95-year rule; verify Canadian status). Also *Menomini Texts* (1928) and *Plains Cree Texts* (1934).
- **Ella Deloria, *Dakota Texts*** (PAES 14, 1932; archive.org lending-only; US copyright renewal status not checked): Lakota and Dakota stories in the native language by a native speaker. Lakota has good modern dictionaries.
- **Radin, Winnebago**: *The Winnebago Tribe* (1923, mostly English); *The Road of Life and Death* (1945, the Medicine Rite; ©); the Trickster cycle (1956, ©).
- **Inuit**: Thalbitzer 1923, *The Ammassalik Eskimo* II (East Greenlandic texts; US-PD by date, reported); Rasmussen's Fifth Thule reports (mostly Danish/English).
- **Pawnee**: Fletcher 1904, *The Hako* (BAE 22nd AR, Pawnee song texts, PD, reported).

All are Bible LOW–MED (earth-diver, flood, the theft of light) and Soul MED–HIGH. They are risky for an LLM except through the interlinear. Record for a future "North American voices" anthology.

### F. South America lowlands and the Isthmus

#### F1. *Ayvu Rapyta* (Mbyá Guaraní)
**Mbyá Guaraní · sacred "beautiful words" (*ñe'ẽ porã*) dictated to León Cadogan in the 1940s by Mbyá leaders of Guairá (Paraguay); oral age unknown, regarded as substantially indigenous (Christian influence is discussed but is judged low by Cadogan and Melià) · Cadogan 1959, *Ayvu Rapyta: Textos míticos de los Mbyá-Guaraní del Guairá*, Boletim 227 (Antropologia 5), USP · 216 pp., Guarani verse + Spanish · complete.**
- *What it is.*
  - **Ñamandu Ru Ete, the True Father, unfolds himself out of the primal darkness**: his soles, his body, his "divine wisdom"; the hummingbird feeds him.
  - **Before the earth existed** he creates the **foundation of human speech (*ayvu rapyta*)**, then love, then the sacred hymn, then the true fathers and mothers of the future gods (Karai, Jakaira, Tupã), whom he "makes conscious of divinity" (**verified**: ch. VII–VIII, p. 22).
  - The first earth, on a palm; the flood that destroyed it (*yvy tenonde*), and the new earth.
  - The soul as a "word-soul" (*ñe'ẽ*) that "stands up" in the child.
  - Rules of life; the deeds of the twin heroes (Kuaray, the sun, and Jasy, the moon).
- *Bible parallels.* Typological but deep:
  - darkness before creation ↔ Gen 1:2;
  - **the word as the first created thing / the foundation of being** ↔ Gen 1:3 ("and God said"), Ps 33:6, **John 1:1–3** (Melià and others make the comparison);
  - the first earth destroyed by water ↔ Gen 6–9;
  - the soul as word ↔ Gen 2:7 (*nefesh ḥayya*, Onqelos "a speaking spirit"! A precise echo worth an apparatus note).
- *Soul.* HIGH: a theology of speech; the soul's origin and destiny; the ethics of the "land without evil".
- *Base and tools.* USP repository PDF `bore.usp.br/.../ANTROPOLOGIA_N-5_1959.pdf` (**verified**, 9.9 MB, 216 pp.; the OCR is rough: c→e, 6→ó confusions). Copyright: Cadogan (d. 1973) has heirs, so © until 2043. It is openly hosted by USP, so it can be used locally but not committed.
  Later editions: Melià 1992 (CEADUC-CEPAG, ©), 3rd ed. 1997, Melià & Caballos 2015. Studies: the Gragoatá article "The verbal weaving of Ayvu Rapyta" (open, reported).
  Tools: Paraguayan Guarani dictionaries and grammars (Guasch; Krivoshein de Canese, ©), Montoya's *Tesoro de la lengua guaraní* 1639 (PD), Dooley's Mbyá dictionary (SIL, open, reported).
- *Feasibility.* Medium. Guarani is a well-documented national language, but the Mbyá sacred register has special metaphors that Cadogan explains in notes. The OCR must be re-keyed from the page images.
- *Benefit*: Bible MED-HIGH (Gen 1:2–3, 2:7) / Soul HIGH. *Recommendation*: **Tier 1–2**: chs. I–IV (the creation of the father, of speech and of the first earth) as a short project for the Gen 1 commentary.

#### F2. Other lowland and Isthmus texts (record)
- **Nimuendajú 1914** (Apapocúva Guaraní; German with Guarani passages; PD): the flood and the "land without evil".
- **Kuna (Guna), *Mu-Igala*** ("The Way of Mu", a birthing chant): Holmer & Wassén 1953 (Kuna text + translation, Göteborg, ©). Soul HIGH.
- **Desana/Tukano** (*Antes o mundo não existia*, 1980, by native authors in Portuguese).
- **Mapuche**: Lenz 1895–97, *Estudios araucanos* (Mapudungun texts, PD); late oral.
- **Selk'nam and Yámana**: Gusinde (German).

All are lower than F1 for antiquity or access.

---

## 3. Also considered (one line each)
- **Walam Olum** (Lenape "Red Record", Rafinesque 1836): **hoax**, shown fabricated by Oestreicher 1994. Brinton 1885 (*The Lenâpé and their Legends*, Library vol. 5) printed it as genuine. Exclude.
- **"Nezahualcoyotl's poems"**: attribution mostly unprovable. Use the Cantares/Romances as anonymous songs (B5).
- **Título de Totonicapán, opening section**: copied from Vico (1553–54); reception only (A8).
- **Ollantay**: an 18th-c. colonial Quechua drama; not Inca.
- **Historia de los mexicanos por sus pinturas** (c. 1531–37, Spanish) and **Histoyre du Mechique** (French, from a lost Spanish original): important cosmogonies (Tezcatlipoca and Quetzalcoatl tear Tlaltecuhtli apart to make sky and earth ↔ Enūma eliš IV, Gen 1:6–8), but **not in the original language**. Excerpt in the apparatus only.
- **Relación de Michoacán** (1539–41, Spanish; the Purépecha priest's oration): not original-language.
- **Betanzos, Cieza, Sarmiento, Garcilaso** (Spanish): not original-language.
- **Codex Borgia, Vindobonensis, Nuttall and the other pictorials**: painted, not textual (B8, C1).
- **Isthmian (Epi-Olmec) script** (La Mojarra Stela 1, the Tuxtla statuette): Justeson & Kaufman's 1993 decipherment is disputed; exclude.
- **Zapotec glyphic, Teotihuacan, Ñuiñe scripts**: undeciphered.
- **Khipus**: undeciphered as narrative (D4).
- **Theologia Indorum** (Vico, K'iche', 1553–54): Christian theology in K'iche', so not an ancient text. But it is the key control for Popol Vuh reception (Sparks 2017, *The Americas' First Theologies*, OUP, ©).
- **Psalmodia christiana** (Sahagún 1583) and the Nahuatl catechisms: Christian.
- **The Madrid and Paris codices**: almanacs and katun prophecies; less coherent than Dresden (A3).
- **Kensington Runestone, Davenport tablets, Michigan relics, Bat Creek stone, Los Lunas "Decalogue" stone**: forgeries or unproven "Old World" inscriptions. Exclude; the Los Lunas "Decalogue" and Bat Creek "Paleo-Hebrew" claims are frequently put to Hebrew readers, so note them as not ancient.
- **Book of Mormon, Kingsborough's *Antiquities of Mexico* (Lost Tribes theory, 1830–48), Gregorio García's *Origen de los indios* (1607)**: European constructions about Israel in America. They are reception history only.
- **Modern Maya oral literature** (Tzotzil, Laughlin; Chamula, Gossen; Lacandon songs, Bruce; Q'eqchi'): modern, and copyrighted.
- **Bierhorst's anthologies; Garibay's *Historia de la literatura náhuatl*; León-Portilla's *Filosofía náhuatl***: secondary.

---

## 4. Access notes

Tested 2026-10-21 from this session (curl through the agent proxy; WebFetch where noted).

**Working (verified content):**
- `www.mesoweb.com`: the Christenson PDFs (`publications/Christenson/PopolVuh.pdf`, `PV-Literal.pdf`, `PV-Original.pdf`), Stuart `publications/Stuart/TXIX.s.pdf`, `books/TXIX/Stuart_Chapter6.pdf`, `pari/journal/archive/PARI0701.pdf`, `resources/vocabulary/Vocabulary-2009.01.pdf`, and `Simposio/pdf/34/Ershova.2022.pdf`. Bare `mesoweb.com` → 301.
- `www.famsi.org` (only with `www`; bare `famsi.org` → proxy 502): the Christenson K'iche' dictionary, Kaufman's PMED, the Dresden/Förstemann PDF, the Montgomery dictionary, Tavárez report 02050. `famsi.org/reports/` index → 403, but individual reports are 200.
- `zenodo.org` REST API (`/api/records/7213020` and file `content` links): the Florentine Codex Nahuatl, CC BY 4.0.
- `archive.org` (advancedsearch, metadata and `_djvu.txt` download all work). PD items used: `iroquoiancosmolo00hewi`, `popolvuhlelivres00bras`, `bookofchilambala00hoil`, `libraryofaborigi0[1-8]brinuoft`, `rigvedaamericanu00brin`, `grammairedelalan02bras`, `rabinalachi15309gut`, `annualreportofbu43smithso`, `annualreportofbu47smithso`, `osagetriberite00laflrich`, `thesacredformula24788gut`, `haidatextsandmy0*swangoog`, `tlingitmythstext00swanrich`, `chinooktexts00boas_0`, `cu31924027108962` (Takelma), `sacredstoriesofs0000bloo`, `b3134902x` (Night Chant).
- `historicas.unam.mx` (IIH-UNAM free books: *Cantares mexicanos*, *Veinte himnos sacros*, the *Códice Chimalpopoca* catalogue entry). **The server sends an incomplete TLS chain**: curl fails with error 60 and WebFetch returns 503. The fix used: download the missing intermediate from the certificate's own AIA URL (`http://secure.globalsign.com/cacert/gsgccr46ovtlsca2025.crt`, DER → PEM), concatenate it with the system CA bundle and `/root/.ccr/ca-bundle.crt`, and pass `--cacert`. Verification stays fully on. The bundle is at `scratchpad/world/americas/certs/bundle-aia.pem`.
- `bore.usp.br` (Ayvu Rapyta 1959 PDF); `poma.kb.dk` (Guaman Poma, redirected from `www.kb.dk/permalink/2006/poma/…`).
- `gdn.iib.unam.mx` (Gran Diccionario Náhuatl, `/diccionario/<word>`); `nahuatl.wired-humanities.org`, `enl.wired-humanities.org` and `aztecglyphs.wired-humanities.org`; `axolotl-corpus.mx`.
- `classicmayan.org/portal/` (TWKM: sign catalogue only); `mayadictionary.de` (TWKM WordPress); `digital.slub-dresden.de` (Dresden Codex); `ticha.haverford.edu/en/`; `mayadecipherment.com`; `www.wayeb.org`; `research.mayavase.com`; `www.runasimi.de`; `khipufieldguide.com`; `www.gutenberg.org`; `utpress.utexas.edu`; `brill.com`; `www.jstor.org` root; `www.ailla.utexas.org`; `colenda.library.upenn.edu`.
- `he.wikipedia.org` via WebFetch.
- `www.loc.gov/search/?…&fo=json` works, but `loc.gov/item/...` pages → 403.

**Blocked / failing:**
- `florentinecodex.getty.edu`: TLS chain incomplete. Its AIA intermediate URL (`repository.emsign.com`) returns HTML, not a certificate, and WebFetch gives 503. **The Getty Digital Florentine Codex and its licence are unverified**; a future session needs the InCommon intermediate.
- `www.getty.edu/projects/florentine-codex/` (WebFetch truncated).
- `digitalcollections.newberry.org` (proxy 502); `www.newberry.org` (connection reset); `collections.newberry.org` root 200, item not tested.
- `www.hathitrust.org` and `babel.hathitrust.org` 403; `gallica.bnf.fr` 403; `bdh.bne.es` 403 (Huarochirí / Molina facsimile); `www.nli.org.il` and `simania.co.il` 403 (Hebrew-translation checks impossible).
- `library.oapen.org`: root 200, but handle pages, REST and PDF → 403 ("address not allowed"). `books.openedition.org` 503.
- `mayacodices.org` (TLS certificate does not match the hostname); `dpul.princeton.edu` and `khipukamayuq.fas.harvard.edu` (connection failure); `www.peabody.harvard.edu/cmhi/` 403; `sacred-texts.com` 403; `library.osu.edu/projects/popolwuj/` 405.
- The USF Digital Commons copy of Roys's *Ritual of the Bacabs* is "withdrawn".

**Search budget:** the shared WebSearch budget for this turn ran out near the end. Items marked "verify" (Paso y Troncoso 1903 online; Roys 1933 US status; the Getty licence; Knowlton 2010 OA status; the details of the Hebrew editions) need a follow-up session.

**For a future session's allowlist:** `www.mesoweb.com`, `www.famsi.org`, `zenodo.org`, `archive.org`, `historicas.unam.mx` (+ the GlobalSign intermediate), `florentinecodex.getty.edu` (+ the InCommon intermediate), `gdn.iib.unam.mx`, `*.wired-humanities.org`, `bore.usp.br`, `poma.kb.dk`, `digital.slub-dresden.de`, `bdh.bne.es` (needs a browser), `www.nli.org.il` (needs a browser), `library.oapen.org` (blocked by OAPEN for this IP), `mayacodices.org`, `dpul.princeton.edu`, `revistas.inah.gob.mx`.

**LLM competence (honest ratings for translating from the original):**
- *Classical Nahuatl*: **medium risk**, the best in the region. Large parallel corpora, GDN and Molina. Prose (FC) is low-to-medium risk; the hymns and cantares are high. The danger is anchoring on Dibble–Anderson.
- *Colonial K'iche'*: **medium**. Weak native competence, but Christenson's literal line-by-line English and his dictionary make each line checkable.
- *Colonial Yucatec*: **medium-high** (esoteric registers, mixed layers).
- *Colonial Quechua*: **medium-high** (moderate tools; Christian loanwords; the base is lacking).
- *Classic Mayan glyphs*: **high**. Use only via a cited epigrapher's transliteration; never from images.
- *Mbyá Guaraní*: **medium** (Guarani well documented; the sacred register is glossed by Cadogan).
- *Onondaga, Seneca, Mohawk, Osage, Zuni, Cherokee, Navajo, Haida, Tlingit, Kwakiutl, Chinook*: **high**. Translate through the editor's interlinear, and say so in every `project.md`.
- *Zapotec (colonial Northern), Mixtec, Otomí*: **very high**. Not feasible now.

---

## 5. Sources consulted
- Mesoweb, Christenson: https://www.mesoweb.com/publications/Christenson/index.html (and `PV-Literal.pdf`, `PV-Original.pdf`, `PopolVuh.pdf`)
- Mesoweb publications list: https://www.mesoweb.com/publications/publications.html ; Stuart, TXIX: https://www.mesoweb.com/publications/Stuart/TXIX.s.pdf ; https://www.mesoweb.com/books/TXIX/Stuart_Chapter6.pdf ; Velásquez García 2006: https://www.mesoweb.com/pari/journal/archive/PARI0701.pdf
- Zenodo, Florentine Codex Nahuatl transcript: https://zenodo.org/records/7213020
- Getty Digital Florentine Codex: https://florentinecodex.getty.edu/ ; https://www.getty.edu/projects/florentine-codex/ ; https://www.getty.edu/news/a-rare-500-year-old-manuscript-gets-a-second-life-online/
- IIH-UNAM *Cantares mexicanos*: https://historicas.unam.mx/publicaciones/publicadigital/libros/cantares/cm02/13_x_canto%20mexica%20de%20primavera.pdf ; *Veinte himnos sacros*: https://historicas.unam.mx/publicaciones/publicadigital/libros/veinte_himnos/067_04_15_Civa.pdf ; *Códice Chimalpopoca*: https://historicas.unam.mx/publicaciones/catalogo/ficha?id=000pdf
- Gran Diccionario Náhuatl: https://gdn.iib.unam.mx/ ; Online Nahuatl Dictionary: https://nahuatl.wired-humanities.org/ ; ENL: https://enl.wired-humanities.org/fcbk12ch01
- Sparks 2019: https://upcolorado.com/university-press-of-colorado/rewriting-maya-religion ; https://read.dukeupress.edu/hahr/article-abstract/102/1/148/293890/
- Newberry Popol Vuh guide: https://www.newberry.org/collection/research-guide/popol-vuh ; LOC JSON search (Popol Vuh item 2021668226)
- TWKM: https://classicmayan.org/portal/ ; https://classicmayan.org/portal/doc/246 ; https://registry.text-plus.org/doc/edition/33c29708-0aa8-475e-82e4-d75850d00a53
- FAMSI: https://www.famsi.org/mayawriting/dictionary/christenson/quidic_complete.pdf ; https://www.famsi.org/reports/01051/pmed.pdf ; https://www.famsi.org/mayawriting/codices/dresden.html ; https://www.famsi.org/reports/02050/02050Tavarez01.pdf
- SLUB Dresden Codex: https://digital.slub-dresden.de/werkansicht/dlf/2967/1
- Huarochirí: https://en.wikipedia.org/wiki/Huarochir%C3%AD_Manuscript ; https://utpress.utexas.edu/9780292730533/ ; https://archive.org/details/huarochirimanusc0000unse (lending)
- Ayvu Rapyta: https://bore.usp.br/xmlui/bitstream/handle/123456789/8803/ANTROPOLOGIA_N-5_1959.pdf?sequence=1 ; https://en.wikipedia.org/wiki/Ayvu_Rapyta ; https://periodicos.uff.br/gragoata/article/view/67971
- Hewitt: https://archive.org/details/iroquoiancosmolo00hewi ; Brinton's Library: https://archive.org/details/libraryofaborigi06brinuoft ; https://www.gutenberg.org/ebooks/12219 ; https://www.gutenberg.org/ebooks/20205
- Guaman Poma: https://poma.kb.dk/permalink/2006/poma/info/en/frontpage.htm
- Jansen & Pérez Jiménez 2017 (OA): https://library.oapen.org/handle/20.500.12657/53863 ; https://directory.doabooks.org/handle/20.500.12854/80651
- Ritual of the Bacabs: https://en.wikipedia.org/wiki/Ritual_of_the_Bacabs ; https://digitalcommons.usf.edu/kip_monographs/277 (withdrawn)
- Songs of Dzitbalché: https://en.wikipedia.org/wiki/Songs_of_Dzitbalch%C3%A9
- Ruiz de Alarcón: https://www.scielo.org.mx/pdf/hm/v71n4/2448-6531-hm-71-04-1842.pdf (Dehouve) ; https://revistas.inah.gob.mx/index.php/anales/article/view/6630/7473
- Ticha: https://ticha.haverford.edu/en/texts/ ; Tavárez, *Rethinking Zapotec Time*: https://ubcpress.ca/rethinking-zapotec-time
- Hebrew editions: https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A4%D7%95%D7%9C_%D7%95%D7%95 (Astrolog 2003 listing) ; UNAM rights catalogue for *Visión de los vencidos*: https://www.publicaciones.unam.mx/servicios/catalogos/Foreign_Rights_2014/pubData/SEO/Page_8.html
- Chilam Balam: https://archive.org/details/bookofchilambala00hoil ; https://colenda.library.upenn.edu/catalog/81431-p3qr4p13s

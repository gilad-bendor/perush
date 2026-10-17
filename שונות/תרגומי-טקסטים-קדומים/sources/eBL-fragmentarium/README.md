# eBL Fragmentarium — Atra-ḫasīs / Flood fragments

- **Project:** electronic Babylonian Library (eBL), LMU Munich (dir. Enrique Jiménez) — Fragmentarium of (mostly British Museum) tablets.
- **URLs:** web `https://www.ebl.lmu.de/fragmentarium/<museum-number>`; API `https://www.ebl.lmu.de/api/fragments/<museum-number>`; list of fragments tagged with the genre "Atraḫasīs (Story of the Flood)": `https://www.ebl.lmu.de/api/fragments/query?genre=CANONICAL:Literature:Narrative:Atraḫasīs (Story of the Flood)`
- **Retrieved:** 2026-10-16
- **License:** unknown (free public API, no explicit licence found; cite "eBL Fragmentarium, <museum no.>" and the eBL editors). BM tablet photos (not downloaded) are © Trustees of the British Museum.
- (The eBL *corpus* edition of Atra-ḫasīs — `api/texts/L/1/1` — is collected separately in `../eBL/`.)

## Files
- `json/<museum-no>.json` — raw API record (catalogue, references, genres, full lemmatised `text`, and `atf`).
- `atf/<museum-no>.atf` — the record's eBL-ATF transliteration, extracted verbatim with a 4-line `#` header (URL, description, references). Only fragments that have a transliteration get an .atf.

| Museum no. | ATF lines | Notes |
|---|---|---|
| **DT.42** | 23 | Ms. W (Nineveh), Ea's instructions on the boat; `#note`s cross-reference OB III lines |
| **BM.98977** (+99231) | 57 | Ms. U (Nineveh), NA flood |
| **CBS.13532** | 22 | Ms. J (Nippur, Hilprecht 1910) — with collation notes |
| **K.3399** (+) | 358 | NA "Assyrian recension" (L&M Ms. S), Tablets I–II, with `//` parallel links to the OB lines of the eBL corpus |
| K.4539 | 23 | Ms. R (doubtful) |
| Sm.365 | 13 | Ms. W1 (doubtful) |
| K.12286, K.13347, K.20164 | 10/16/19 | small NA pieces tagged Atra-ḫasīs |
| **BM.38917** | 50 | Babylonian piece with `// cf. DT.42 11–14` — an eBL identification of a **further late flood parallel**, not in Wasserman 2020 (ref. "RN3551 406") |
| BM.41330 | 63 | Late Babylonian, parallels Atra-ḫasīs I (OB I 143ff.) — new identification (eBL "From the eBL Lab" 37) |
| BM.42004, UM.55-21-29 | 10/29 | late pieces tagged Atra-ḫasīs |
| BM.78941, 78942, 78943, 78971, 80385, 92608 | 0 | OB Sippar tablets (Ipiq-Aya: incl. **Atra-ḫasīs III = BM 78942+**) — catalogue only, **no transliteration in eBL** |
| BM.99231, BM.109141, C.263 / MOW.1 (casts), MM.818, VAT.17099, Ni.2552/2560/2564, Ist-B.116(.PP), MMA-86-11.378.A, K.14697 | 0 | catalogue only |

## Line numbering
eBL-ATF: `@obverse/@reverse/@column n`, lines `1'.` etc. as on the tablet (primed when the beginning is broken). `// L I.1 OB "I" 21` = parallel to line 21 of the OB recension in the eBL corpus chapter L I.1 (Atra-ḫasīs); `// cf. F DT.42 11` = parallel to fragment DT.42 line 11. Sign conventions: eBL-ATF (`{d}` determinatives, `#` damaged, `!` corrected, `x` unread).

## Assessment
Best free machine-readable source for the **Neo-Assyrian / late** Atra-ḫasīs material (K.3399+ recension, DT.42, BM.98977) and for **new late identifications** (BM.38917, BM.41330) that post-date Wasserman 2020. Not usable for the OB Flood tablet (no ATF for the Sippar tablets).

## Added 2026-10-16 (creation corpus, project 2)
| Museum no. | ATF lines | Notes |
|---|---|---|
| **BM.93014** (+ 82-3-23,101) | 72 | The bilingual **"Creation of the World by Marduk" / "Founding of Eridu"** (CT 13 35–38; King 1902 I 130–139; Lambert 2013 361–365; Ambos 2004 199–212, "II.E.2 MS A"): obv. 1–40 (Sumerian and Akkadian half-lines interleaved, `%sux … %sb …`), rev. 1′–27′ (the incantation's ritual part; rev. 27′ = incipit of the šuʾila *Ereqqu* 2). eBL genre "Magic: Varia: Building Rituals". Not lemmatised. A transliteration search of eBL (2026-10-16) found **no duplicate** of the obverse. |
| **VAT.9307** | 126 | **KAR 4**, ms. A (Assur), the bilingual creation of man from the Alla gods, with a syllable alphabet in the left column (`ME-ME PAP-PAP & %sux … & %akk …`). Reference header has Borger's bibliography (Pettinato 1971 74ff.; Lambert 2013 350–360). |
| **K.4175** (+ Sm 57 + 80-7-19,184 (+) 82-3-23,146) | 41 | **KAR 4 ms. B** (Nineveh, Ashurbanipal library; eBL catalogues it as "lists" because of the syllable-alphabet column). Lambert 2013 pl. 65–66. |

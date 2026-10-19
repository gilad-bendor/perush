# ETCSL — The Electronic Text Corpus of Sumerian Literature (Oxford)

- **Editors:** J. A. Black, G. Cunningham, J. Ebeling, E. Flückiger-Hawker, E. Robson, J. Taylor, G. Zólyomi (Faculty of Oriental Studies, Univ. of Oxford), 1998–2006. Project ended 2006; site frozen.
- **Website:** https://etcsl.orinst.ox.ac.uk/ (composition pages: `cgi-bin/etcsl.cgi?text=c.1.7.4&display=Crit&charenc=gcirc` = transliteration, `?text=t.1.7.4` = translation)
- **Retrieved:** 2026-10-16. **The live server timed out on that date**; HTML pages were therefore fetched from the Internet Archive Wayback Machine (raw `id_` captures, 2025–2026). The XML came from the Oxford Text Archive (see `_bulk/`).
- **Licence:** OTA deposit (item 2518, "Revised edition", Oct 2006): **CC BY-NC-SA 3.0**. Website: "© Copyright 2003–2006 The ETCSL project, Faculty of Oriental Studies, University of Oxford"; citation form and permission address in `_site-info/edition2-credits.php.html` and `_site-info/edition2-general.php.html`. Non-commercial use with attribution + share-alike is fine for our project.
- **Required citation:** Black, J.A., Cunningham, G., Ebeling, J., Flückiger-Hawker, E., Robson, E., Taylor, J., and Zólyomi, G., *The Electronic Text Corpus of Sumerian Literature* (http://etcsl.orinst.ox.ac.uk/), Oxford 1998–2006.

## Folder layout

| Folder | Contents |
|---|---|
| `_bulk/` | **Whole corpus** (TEI XML, 394 compositions × transliteration + translation, + bibliography, DTDs, manual) from OTA/LLDS — reusable for any future Sumerian translation. See its README. |
| `_site-info/` | Credits/copyright, "general info", technical info, about, home page (raw HTML from Wayback). |
| `1.7.4--Flood-Story/` | **The Sumerian Flood Story ("Eridu Genesis", Ziusudra)** — the core text. |
| `2.1.1--Sumerian-King-List/` | SKL: antediluvian kings, "then the flood swept over" (l. 39–40). |
| `5.6.1--Instructions-of-Shuruppag/` | Šuruppag son of Ubara-Tutu instructs his son Ziusudra (cf. Gilg. XI 23 "man of Šuruppak, son of Ubar-Tutu"). |
| `1.8.1.3--Death-of-Bilgames/` | Death of Gilgameš: Gilgameš reached Ziusudra; Ziusudra alone survived the Flood (Me-Turan version, Segment F). |
| `2.1.2--Rulers-of-Lagash/` | Opens "After the flood had swept over and brought about the destruction of the countries…". |
| `5.2.5--Poem-of-Early-Rulers/` | "Where is … he who, like Ziusudra, sought life?" (l. 10). |
| `2.2.2--Lament-for-Ur/`, `2.1.5--Curse-of-Agade/` | **The Lament for Urim and the Cursing of Agade** (added 2026-10-19): base texts of the city-lament corpus `קינות-על-ערים/` (own READMEs). Also from `_bulk/` without a README of this table: 1.1.1, 1.1.2, 1.1.3, 5.3.2, 5.3.5, 5.5.4 (creation corpus; own READMEs). |

Each composition folder contains:
- `c.N.xml`, `t.N.xml` – ETCSL TEI source (2006 revised edition; ASCII conventions c=š, j=ĝ, h=ḫ, entities for determinatives).
- `c.N--etcsl-cgi-transliteration.html`, `t.N--etcsl-cgi-translation.html` – the website's Unicode display pages (Wayback captures; may include Wayback banner-free raw HTML). Missing: `t.5.2.5` (not archived).
- `bNNN--etcsl-bibliography.htm` – the static bibliography page.
- **`transliteration.md` / `translation.md` – clean UTF-8 conversions generated from the XML** (script: `../../tools/etcsl2md.py`). Conventions are stated at the top of each file: š ĝ ḫ, subscript sign indices (du₁₁), determinatives in `{d}`, `{ki}`, `{ĝeš}`; `[ ]` restored, `⸢ ⸣` damaged (ETCSL shows `/ \`), `?` uncertain, `⟨ ⟩` omitted by scribe, `« »` superfluous; manuscript variants in parentheses with ETCSL's italic notes ("1 ms. has instead:"). Translation paragraphs are labelled with the composite line range they cover.

**Note:** the old *static* pages (`section1/c174.htm`, `tr174.htm`) are an *earlier* edition (e.g. the 1.7.4 translation lacks the "side-wall" speech in Segment C). Always use the XML / CGI (edition 2) versions saved here.

## Line numbering
ETCSL composite line numbers. Fragmentary compositions are divided into **Segments** (A, B, C…), each numbered from 1 (e.g. Flood Story Segment C 1–27 + gap; ETCSL "c174.C.20"). Death of Bilgameš has three versions (Nibru, another Nibru, Me-Turan), each with its own segment structure.

## Other flood mentions in ETCSL (search of the whole XML corpus for lemma `a-ma-ru` and for Ziusudra)
Primeval Flood / Ziusudra: 1.7.4, 1.8.1.3, 2.1.1, 2.1.2, 5.2.5, 5.6.1 (all saved), plus **1.8.2.3 Enmerkar and the Lord of Aratta** ll. 557–576 ("After the flood had swept over…", metaphorical use). `a-ma-ru` "deluge" is otherwise used ~45× as an image for divine/royal weapons and destruction (e.g. 1.6.1/1.6.2 Ninurta, 2.1.5 Cursing of Agade, 2.1.7 Gudea cylinders, laments, letters) – available in `_bulk/` when needed.

## Assessment
ETCSL 1.7.4 remains the standard freely available composite of the Flood Story (based on Civil 1969, Jacobsen 1981 and Krecher). It is **old (1998, last change 2006)**: it does not include the Schøyen manuscript MS 3026 (Volk, forthcoming) or the Ur manuscript UET 6/1 61+ (Peterson, JCS 70, 2018) — see `../ORACC/` and `../CDLI/P346146/`. Good English prose translation; literal enough to work from, but check difficult lines against Civil 1969, Jacobsen 1981/1987, and Chen 2013.

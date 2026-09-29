# 01 · DULAT — *A Dictionary of the Ugaritic Language in the Alphabetic Tradition*

## Bibliographic identity

- Gregorio del Olmo Lete & Joaquín Sanmartín; translated and edited by Wilfred G. E. Watson.
- *A Dictionary of the Ugaritic Language in the Alphabetic Tradition*, Third Revised Edition, 2 parts. Handbook of Oriental Studies / Handbuch der Orientalistik, Section 1: The Near and Middle East, vol. 112. Leiden & Boston: Brill, 2015. xliv + 989 pp. Part 1: ʔ(a/i/u)–k; Part 2: l–z.
- Standard abbreviation: DUL / DULAT (StarLing and SED cite it as *DUL* with page numbers).

## Editions and identifiers

| Edition | Year | Publisher | Identifiers |
|---|---|---|---|
| *Diccionario de la lengua ugarítica*, 2 vols | 1996–2000 | AUSA, Barcelona (Aula Orientalis Supplementa 7–8) | Spanish original |
| 2nd (English, revised) ed., 2 vols; corrected reprint 2004 | 2003/2004 | Brill (HdO 67) | ISBN 90-04-13694-0 / 978-90-04-13694-6 |
| 3rd revised ed., 2 parts | 2015 | Brill (HdO 112) | hardback ISBN 978-90-04-28864-5; e-book ISBN 978-90-04-28865-2; DOI 10.1163/9789004288652 |

Google Books id (3rd ed., Google Play e-book): `bh6oBgAAQBAJ`. ProQuest Ebook Central record EBC1956706 (institutional e-book platform). archive.org lending scan of the 2nd ed.: `dictionaryofugar0000olmo`.

## Copyright status

In copyright (Brill; both authors living). No lawful free copy exists.

## Where it exists online

| Place | What | Status |
|---|---|---|
| brill.com / degruyterbrill.com (Brill merged into De Gruyter Brill in 2024) | 3rd ed. e-book, PDF, DRM-free | **purchase** |
| Google Play Books `bh6oBgAAQBAJ` | 3rd ed. e-book | purchase, but DRM (readable only in Google's reader; no PDF) |
| ProQuest Ebook Central EBC1956706 | 3rd ed. | institutional licence (university library) |
| archive.org `dictionaryofugar0000olmo` | 2nd ed. 2004 scan | **browse-only** (access-restricted lending) |
| Scribd (documents 494594288, 700211335), Academia.edu 121191895, ResearchGate 340911370, scispace | unauthorised uploads of the 3rd ed. | not used by the tool |
| Persée / Cambridge Core / Wiley / OLZ | reviews only (AUSS 41/2 2003; RSR 2016 10.1111/rsr.12314; OLZ 2019 10.1515/olzg-2019-0117; RBECS 2015) | context |

## Access class and what the tool does

`dulat3` → **purchase**. `cli status dulat3` reads the Google Books metadata (sale info, viewability) and pings the Brill/De Gruyter page. `cli status dulat2-archive-cdl` confirms that the archive.org item is access-restricted and downloads nothing. After you buy the Brill PDF: `cli pdf-split dulat DULAT.pdf --sample`, tune `src/pdf/profiles.ts`, then `cli pdf-split dulat DULAT.pdf` → `data/pdf-split/DULAT.dulat.jsonl` (one JSON object per entry).

## How to obtain it

1. Go to degruyterbrill.com, search ISBN 9789004288652, choose the e-book (PDF). Brill states its e-books are DRM-free with whole-book and chapter download. Hardback list price in 2015: US$330 / €245; the e-book is usually priced the same as the hardback, but check the page.
2. If you have any university affiliation or an alumni library card: check whether the library licenses Brill's HdO e-book collection or ProQuest Ebook Central — then the PDF is free to you.
3. Fallback for consultation only: borrow the 2nd ed. on archive.org (free account, one-hour loans).

## Structure of the work (for parsing)

- Entries in Ugaritic alphabetic order (ả/ỉ/ủ, b, g, d, ḏ, h, w, z, ḥ, ḫ, ṭ, ẓ, y, k, l, m, n, s, ś, ʕ, ǵ, p, ṣ, q, r, š, t, ṯ).
- Entry = **bold headword** in transliteration (homographs numbered (I), (II)…) → part-of-speech tag (n. m., n. f., vb., adj., PN, DN, TN…) → gloss in quotation marks → *Semitic cognates* block (Hb., Ph., Akk., Arab., Eth., Aram., OSA, Syr. with forms) → attestations by KTU/CAT text numbers with short contexts → bibliography. Sub-entries for derived forms and idioms.
- The `dulat` profile keys on `headword (I)? + POS tag`; the cognate block is the part of most value to a Biblical-Hebrew commentary and is left inside the entry text for a second-stage parser.

## Value for the perush project

DULAT is the reference for Ugaritic cognates of Biblical Hebrew roots (תהום/thm, תנין/tnn, כרוב, רקיע etc. in `ניתוחים-לשוניים/`). Each entry's cognate block gives the North-West Semitic picture in one place.

## Substitutes (all weaker)

- Wiktionary Ugaritic (≈761 lemmas, CC BY-SA; entries usually cite DUL) — `cli fetch wiktionary-semitic`.
- Tropper, *Kleines Wörterbuch des Ugaritischen* (Harrassowitz 2008; paid) + Halayqa's *Supplementary Ugaritic Word List* (UF 41; open PDF at Birzeit FADA) — `cli fetch halayqa-supplement-tropper`.
- Huehnergard, *Ugaritic Vocabulary in Syllabic Transcription* (HSS 32; 1987, rev. 2008) — the syllabic (Akkadian-script) side; 2008 *Additions and Corrections* on Academia.edu.
- Texts: *The Texts of the Ugaritic Data Bank* (Cunchillos, Vita, Zamora 2003; Gorgias; modules in Accordance and Logos).
- Older lexica on archive.org lending: Gordon, *Ugaritic Textbook* (1965) glossary; Aistleitner, *Wörterbuch der ugaritischen Sprache* (1963).
- StarLing/SED records quote DUL forms with page numbers (report 06).

## Open questions / not verified

- Current e-book price on degruyterbrill.com (page not reachable from the sandbox).
- Whether the Brill PDF has a text layer with the transliteration characters intact (it should; test with `--sample`).

## Sources consulted

Brill/De Gruyter product data via search snippets; harvard.com/book/9789004288645; AbeBooks and Amazon listings (prices); books.google.com `bh6oBgAAQBAJ`; archive.org `dictionaryofugar0000olmo`; libcat.simmons.edu EBC1956706; digitalcommons.andrews.edu AUSS review; onlinelibrary.wiley.com 10.1111/rsr.12314; degruyterbrill.com 10.1515/olzg-2019-0117; Scribd/Academia/ResearchGate listings (existence only); CHEST and library guides on Brill's DRM-free policy.

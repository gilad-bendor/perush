# 02 · Johnstone, *Mehri Lexicon and English–Mehri Word-List* (1987)

## Bibliographic identity

- Thomas Muir Johnstone (1924–1983), *Mehri Lexicon and English–Mehri Word-List, with Index of the English Definitions in the Jibbāli Lexicon, compiled by G. Rex Smith*. London: School of Oriental and African Studies, University of London, 1987. lxxi + 676 pp. Published posthumously.
- Standard abbreviations: ML, JM (StarLing/SED: *JM* + page).

## Editions and identifiers

| Edition | Year | Identifiers |
|---|---|---|
| SOAS hardback | 1987 | ISBN 0-7286-0137-0 / 978-0-7286-0137-6; OCLC 15196384 |
| Routledge e-book (Taylor & Francis) | 30 Sep 2000 | e-ISBN 978-0-203-04594-7; DOI 10.4324/9780203045947; OCLC 819635692 |
| Routledge reprint (print) | 2004 | Google Books `h8M5BW-ccEAC` (no preview); also `79JK4_t5F9sC` |

## Copyright status

In copyright (Johnstone d. 1983 → 2053 in EU/Israel; SOAS/Taylor & Francis hold the publishing rights).

## Where it exists online

| Place | What | Status |
|---|---|---|
| taylorfrancis.com/books/mono/10.4324/9780203045947 | official e-book | **purchase** (most T&F e-books: DRM-free PDF + EPUB, whole-book download) |
| archive.org `rosettaproject_gdq_phon-2`, `rosettaproject_gdq_morsyn-2` | Rosetta Project excerpts: a few introductory pages (phonology; morphology/syntax), ≈0.8 MB | **open** — fetched by the tool, but not the lexicon proper |
| endangeredlanguages.com/resource/mehri-lexicon | a community Mehri–Arabic–English word file (2025, growing) — unrelated to Johnstone despite the name | open, small |
| HathiTrust (OCLC 15196384) | expected search-only if held | browse-only |
| Google Books | no preview | — |

## Access class and what the tool does

`johnstone-mehri-1987` → **purchase**. `cli status` probes Google Books, HathiTrust (by OCLC), the two Rosetta items and the T&F page. `cli fetch johnstone-mehri-1987` downloads only the open Rosetta excerpt pages. After buying the T&F PDF: `cli pdf-split johnstone-mehri ML.pdf --sample`, tune, then run without `--sample`.

## How to obtain it

1. taylorfrancis.com → search "Mehri Lexicon" Johnstone → buy the e-book (individual purchase available; price not visible from the sandbox — typically £35–£50 for backlist monographs). Download PDF.
2. If the title turns out to be one of the "older titles PDF-only, DRM-protected" exceptions, T&F's reader still allows page-range PDF export; check before buying.
3. Print: second-hand copies list at US$200–700 (AbeBooks, Amazon marketplaces); rare.
4. Institutional: any library with the Taylor & Francis e-book collection.

## Structure of the work (for parsing)

- Long introduction (phonology, morphology, verb tables) — this is what the Rosetta excerpts reproduce.
- Lexicon arranged **by root** in a Semitic/Arabic-style consonant order; root headings in capitals (e.g. ʔBD, BKR, ŚXF); under each root, lemmas in transliteration with grammatical information (verb stems with perfect/imperfect/subjunctive forms; noun plurals; gender), English glosses, occasional Jibbāli/Ḥarsūsi cross-references and Arabic etymologies.
- English–Mehri word-list (reverse index).
- *Index of the English definitions in the Jibbāli Lexicon* (G. Rex Smith): reverse index to the 1981 volume — so this e-book is also the only digital key into the Jibbāli Lexicon.
- The `johnstone-mehri` profile: `section` regex = capital root heading; `headword` regex = lower-case transliterated lemma + tag/gloss.

## Value for the perush project

Modern South Arabian preserves lexemes lost elsewhere; ML is the largest MSA dictionary and the standard source of the *Mhr.* forms in every comparative Semitic dictionary (HALOT, SED, StarLing).

## Substitutes

- Rubin 2018, *Omani Mehri*, Appendix C *Supplement to Johnstone's Mehri Lexicon* (pp. 822–834), open access — report 09.
- Stroomer, *Mehri Texts from Oman, based on the field materials of T. M. Johnstone* (Semitica Viva 22, Harrassowitz 1999; paid) — the texts behind the lexicon.
- Watson, *The Structure of Mehri* (Semitica Viva 52, 2012; paid); Sima, *Mehri-Texte aus der jemenitischen Šarqīyah* (2009; with glossary).
- Jahn 1902 Mehri–German Wörterbuch (public domain) — report 11.
- Watson & al-Mahri ELAR deposit `mehri-watson-0307` (registration); MCSR online dictionary (Yemen); Living Dictionaries Mehri (18 entries) — report 12.
- StarLing/SED quote *JM* forms with page numbers — report 06.

## Open questions / not verified

- T&F e-book price and whether this specific title is DRM-free (T&F says "the majority" are). Verify on the product page before buying.
- Whether HathiTrust holds a copy (Bib API probe in `status`).

## Sources consulted

taylorfrancis.com product page (search snippet); Cambridge Core BSOAS review record; WorldCat 15196384 / 819635692; searchworks.stanford.edu 1661404; books.google.com `h8M5BW-ccEAC`, `79JK4_t5F9sC`; archive.org Rosetta items; AbeBooks/Amazon price listings; Taylor & Francis librarian guides on DRM-free downloads; endangeredlanguages.com resource page.

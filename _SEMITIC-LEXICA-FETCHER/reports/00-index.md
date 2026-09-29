# Data-source reports — index

Research date: 2026-09-29. One report per data source follows. Each report has the same sections: *Bibliographic identity · Editions and identifiers · Copyright status · Where it exists online · Access class and what the tool does · How to obtain it (step by step) · Structure of the work (for parsing) · Value for the perush project · Substitutes · Open questions / not verified · Sources consulted*.

| # | Report | Access class | One-line verdict |
|---|---|---|---|
| 01 | [DULAT — del Olmo Lete & Sanmartín 2015](01-dulat.md) | purchase | Brill sells a DRM-free PDF; buy it and run `pdf-split dulat`. |
| 02 | [Johnstone, Mehri Lexicon 1987](02-johnstone-mehri-lexicon.md) | purchase | Official Routledge e-book (2000); also carries the English index to the Jibbāli Lexicon. |
| 03 | [Johnstone, Jibbāli Lexicon 1981](03-johnstone-jibbali-lexicon.md) | offline | Print only; second-hand or ILL; open supplements exist. |
| 04 | [Johnstone, Ḥarsūsi Lexicon 1977](04-johnstone-harsusi-lexicon.md) | browse-only | Lending scan on archive.org; readable, not downloadable. |
| 05 | [Leslau, Lexique soqoṭri 1938](05-leslau-lexique-soqotri.md) | offline | No lawful digital copy exists; rare book, library scan-on-demand, ILL. |
| 06 | [StarLing Semitic DB + SED online](06-starling-sed.md) | terms-check | Quotes all five works with page refs; crawl after reading terms. |
| 07 | [Soqotri Lexicon Online (SLOnline)](07-slonline-soqotri.md) | terms-check | ≈220 entries citing Leslau by page. |
| 08 | [Webonary Soqotri Dictionary (SIL)](08-webonary-soqotri.md) | terms-check | WordPress dictionary; CC licence on its Copyright page. |
| 09 | [Rubin's open-access grammars (Mehri 2018, Jibbali 2014)](09-rubin-open-access-grammars.md) | open | Contain formal *Supplements* to Johnstone's Mehri and Jibbāli lexica. |
| 10 | [Wiktionary](10-wiktionary.md) | open | ≈761 Ugaritic lemmas (usually citing DUL); MSA languages sparse. |
| 11 | [Vienna Südarabische Expedition corpus 1902–1918](11-vienna-expedition-corpus.md) | open (public domain) | The texts Leslau lexicalised; Jahn's Mehri–German dictionary. |
| 12 | [Other resources](12-other-resources.md) | mixed | Comparative Cultural Glossary, CSOL, Tropper/Huehnergard/UDB, ELAR, Johnstone Papers, Living Dictionaries, MCSR. |

## Method

1. Publisher and platform pages, library catalogues (WorldCat, HathiTrust, Princeton, Stanford, NLI), Google Books, archive.org, OAPEN, Persée, Cambridge Core reviews, project sites (Leeds MSAL, HSE/RAS Soqotri, SIL Webonary, StarLing) were searched for every edition of every work.
2. Each hit was classified by what a program may do with it: `open` (fetch in full), `purchase` (buy, then parse locally), `browse-only` (read in a browser, never automate), `offline` (print), `terms-check` (small database with no explicit licence).
3. The sandbox in which this was written could not open archive.org, hathitrust.org, brill.com, taylorfrancis.com, starlingdb.org, soqotri-lexicon.ru, webonary.org, oapen.org, uni-halle.de or wiktionary.org (network policy). Facts about those hosts come from search-engine snippets and catalogue mirrors and are flagged *unverified* in each report; `cli status` re-checks them live.

## Legal frame used throughout

- Public domain: author died more than 70 years ago (EU/Israel) — the Vienna corpus qualifies.
- Leslau (d. 2006), Johnstone (d. 1983), del Olmo Lete & Sanmartín (living): all in copyright.
- Controlled Digital Lending on archive.org is a licence to *read*; downloading or crawling breaks its terms and the DRM.
- Buying a DRM-free PDF gives you the right to process it privately (text extraction, indexing) but not to redistribute the text.
- Databases without a licence statement (StarLing, SLOnline) are protected by copyright/database right; ask or cite, do not republish.

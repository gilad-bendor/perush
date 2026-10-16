# CAD: *The Assyrian Dictionary of the Oriental Institute of the University of Chicago*

- **What:** the largest Akkadian dictionary (21 volumes in 26 physical parts, 1956–2010). Each entry gives the forms, a semantic analysis by period and genre, and full quoted citations with translations.
- **Publisher / host:** ISAC (Institute for the Study of Ancient Cultures, formerly the Oriental Institute), University of Chicago
- **Series listing (source of the table below):** https://isac.uchicago.edu/publications/search?text=&sort_by=year_desc&publication_series%5B62%5D=62 (two pages; `&page=1` for the second)
- **Retrieved:** 2026-10-16. Every PDF URL was checked with `curl -I` (HTTP 200 + Content-Length) on that date.
- **Licence / terms:** free download, but **copyright reserved** (ISAC Terms of Use, saved here as `isac-publications-terms-of-use.md`). Two points matter for us:
  - no reproduction or distribution without permission;
  - *"ISAC does not authorize the use of its copyrighted publications … for training, fine-tuning, or developing artificial intelligence models, or for compiling datasets for these purposes, without prior written permission."*
  - → Consult CAD entry by entry while translating, and quote short passages with citations ("CAD K 498 s.v. *kupru*"). **Do not** build a bulk text extraction or dataset of CAD, and do not commit the PDFs to the repo (they total ≈ 790 MB anyway).
- **Print:** about US$60 per volume via ISD (the "Buy" links on the ISAC pages).

## How to use it
- Download a volume to a scratch or cache directory **outside the repo**, e.g. `curl -o ~/cad/cad_k.pdf https://isac-assets.s3.amazonaws.com/isac-publications/cad_k.pdf`.
- The S3 URLs work **without** the `?VersionId=…` query string that the ISAC page appends; the table gives the clean URL.
- Text layer (checked on G, P and Ṭ): every PDF can be searched, but the diacritics come out unreliable.
  - **Born-digital** volumes (FrameMaker, verified for P and Ṭ; probably also R, T, U/W given their 1.7–4.8 MB sizes) usually extract `š` as `ß`.
  - **Scanned** volumes (300-dpi bitonal page images + OCR, e.g. G) come out as `AN§E gam-ma-li Sa SarrdniAribi`.
  - → Search by **unaccented** headword or a distinctive English word with `pdftotext -layout`, then look at the page image (`pdftoppm -f N -l N -r 150 -png`) to read the accented forms.
- Find the volume: use the letter of the headword in CAD's alphabetical order (A, B, D, E, G, Ḫ, I/J, K, L, M, N, P, Q, R, S, Ṣ, Š, T, Ṭ, U/W, Z). Ḫ has its own volume, Š has three parts, and so on.
- Cross-check older volumes (A–N were published 1956–1980) against **eSAD** (Leipzig), which corrects and supplements both CAD and AHw. See `../RESOURCES.md`.

## Volumes (26 PDFs, ≈ 788 MB total)

| Vol. | Letter(s) | Year | PDF (direct URL) | MB | HEAD | ISAC page |
|---|---|---|---|---|---|---|
| 1 | A, Part 1 | 1964 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_a1.pdf | 42.4 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-1-part-1) |
| 1 | A, Part 2 | 1968 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_a2.pdf | 54.5 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-1-part-2) |
| 2 | B | 1965 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_b.pdf | 38.0 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-2-b) |
| 3 | D | 1959 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_d.pdf | 22.0 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-3-d) |
| 4 | E | 1958 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_e.pdf | 44.8 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-4-e) |
| 5 | G | 1956 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_g.pdf | 15.5 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-5-g) |
| 6 | Ḫ | 1956 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_h.pdf | 26.1 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-6-h) |
| 7 | I–J | 1960 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_i-j.pdf | 33.7 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-7-i-j) |
| 8 | K | 1971 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_k.pdf | 60.8 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-8-k) |
| 9 | L | 1973 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_l.pdf | 26.9 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-9-l) |
| 10 | M, Part 1 | 1977 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_m1.pdf | 44.2 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-10-m-part-1) |
| 10 | M, Part 2 | 1977 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_m2.pdf | 31.7 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-10-m-part-2) |
| 11 | N, Part 1 | 1980 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_n1.pdf | 39.0 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-11-n-part-1) |
| 11 | N, Part 2 | 1980 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_n2.pdf | 39.6 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-11-n-part-2) |
| 12 | P | 2005 | https://isac-assets.s3.amazonaws.com/isac-publications/CAD_P.pdf | 4.8 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-12-p) |
| 13 | Q | 1982 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_q.pdf | 32.6 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-13-q) |
| 14 | R | 1999 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_r.pdf | 4.3 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-14-r) |
| 15 | S | 1984 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_s.pdf | 39.4 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-15-s) |
| 16 | Ṣ | 1962 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_s_tsade.pdf | 26.5 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-16-s) |
| 17 | Š, Part 1 | 1989 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_s_shin_1.pdf | 48.9 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-17-s-part-1) |
| 17 | Š, Part 2 | 1992 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_s_shin_2.pdf | 44.0 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-17-s-part-2) |
| 17 | Š, Part 3 | 1992 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_s_shin_3.pdf | 40.1 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-17-s-part-3) |
| 18 | T | 2006 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_t.pdf | 4.5 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-18-t) |
| 19 | Ṭ | 2006 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_tet.pdf | 1.7 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-19-t) |
| 20 | U–W | 2010 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_u_w.pdf | 4.2 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-20-u-w) |
| 21 | Z | 1961 | https://isac-assets.s3.amazonaws.com/isac-publications/cad_z.pdf | 17.4 | 200 | [page](https://isac.uchicago.edu/publications/chicago-assyrian-dictionary-volume-21-z) |

The same data, machine-readable: `cad-volumes.csv` (vol, letters, year, isbn, page, pdf, http, mb).

## Files here
- `cad-volumes.csv`: the volume table
- `isac-cad-series-listing-page0.md`, `isac-cad-series-listing-page1.md`: clean extractions of the ISAC listing pages (`raw/*.html` are the originals)
- `isac-publications-terms-of-use.md` (+ `raw/isac-publications-terms-of-use.html`)
- `raw/cad-pdf-head-check-2026-10-16.txt`: URL, HTTP status and byte size for each PDF, as checked

## Related free ISAC PDF (same terms)
- S. A. Kaufman, *The Akkadian Influences on Aramaic* (Assyriological Studies 19, 1974): https://isac-assets.s3.amazonaws.com/isac-publications/as19.pdf (7.7 MB). Errata: https://isac-assets.s3.amazonaws.com/isac-publications/as19_errata.pdf. Listing: https://isac.uchicago.edu/publications/akkadian-influences-aramaic

# Hand-off: Round 2, run 6 (legends of kings – Enmerkar and the Lord of Aratta; the Sargon Birth Legend), 2026-10-21

For the lead: what to merge into the shared files. (Kept up to date at every milestone; English.)

## 1. Sources
### For `sources-registry.md` §4 (a new subsection "4.4k Legends of kings (`אגדות-מלכים/`)", added 2026-10-21)
- **`ETCSL/1.8.2.3--Enmerkar-and-the-Lord-of-Aratta/`**: ETCSL c.1.8.2.3 (641 composite entries: 1–636 with 11A,
  106A, 185A, 185B, 365B and the alternative lines A–D of one manuscript for 400–403; no 369, 608–610), TEI +
  Markdown from the local bulk zip, committed (CC BY-NC-SA). **Base text** of `אגדות-מלכים/1-אנמרכר-ואדון-ארטה/`.
- **`ORACC/epsd2-literary--Q000369--Enmerkar-and-the-Lord-of-Aratta/`**: the same composite with ePSD2 lemma + morph
  for every word (CC0; `.md` committed, the 5.4 MB raw JSON git-ignored by the folder's own `.gitignore`). ORACC's
  export leaves lines with variants unlabelled and calls ETCSL's alternative line C "Š": `אגדות-מלכים/kings_tools.py
  conc EA` aligns them (one to one). The zip also has three Ur manuscripts (P346132, P346147, P346534), not extracted.
- **`Mittermayer-2009--Enmerkara-und-der-Herr-von-Arata--OBO-239/`**: C. Mittermayer, *Enmerkara und der Herr von
  Arata* (OBO 239, 2009), **open access** on ZORA (green OA, no CC licence stated → git-ignored by the folder's own
  `.gitignore`, like Lenzi 2023): the current critical edition (reconstructed text + German translation, score,
  commentary, plates). Its OCR text layer is poor for the Sumerian, usable for the German.
- **`King-1907--Chronicles-concerning-Early-Babylonian-Kings-II/`**: L. W. King 1907, vol. II, Appendix I "The Legend
  of Sargon" (pp. 87–96), public domain; PDF from the University of Diyala e-library (archive.org blocked), page
  images, and **our hand transcription from the page images** (`legend-of-sargon--King-1907-pp87-96.md`, committed;
  the PDF/PNGs are ignored by the existing `*.pdf`/`*.png` rules). **Base text** of `אגדות-מלכים/2-אגדת-הולדת-סרגון/`
  – the only open transliteration reachable (see §7 for its limits).
- **`eBL-fragmentarium--Sargon-Birth-Legend/`**: the eBL fragmentarium records of K 3401 + Sm 2118, K 4470, BM 47449,
  K 7249 (catalogue and bibliography; **eBL has no transliteration of the legend**; BM 47449's only transliterated
  column, 4′, belongs to a disputation/fable extract, Jiménez 2018). Git-ignored by the folder's own `.gitignore`
  (eBL policy); README committed.
- **`_records-only--Legends-of-kings/`**: Westenholz 1997 (the current Sargon edition; © Eisenbrauns, MUSE "Open
  Access: No"), Lewis 1980, Jiménez 2018, CT 13 42–43 and CT 46 46 (copies on archive.org), CDLI P365306/7/3 (503),
  Cohen 1973, Kramer 1952, Vanstiphout 2003, the Nudimmud-spell articles (Kramer 1968, Jacobsen 1992, Vanstiphout
  1994, Alster 1973, Klein 2004), Jacobsen 1987, Black et al. 2004.

### For §4.6 (access notes)
- **CDLI** (`cdli.earth`) answered 503 "CDLI is temporarily offline … security update" all day on 2026-10-21 (five
  tries, 15:00–?); `cdli.mpiwg-berlin.mpg.de` redirects to it.
- **HathiTrust**: `catalog.hathitrust.org/api/volumes/brief/…` works; `babel.hathitrust.org` (full text, page images)
  answers scripts with a Cloudflare challenge (403) – a browser is needed.
- **Google Books API** and **Wikimedia/Wikisource API** answered 429 (rate limit) to the proxy; not retried.
- **ZORA** (`www.zora.uzh.ch`): the DSpace search `server/api/discover/search/objects?query=…` finds OBO volumes;
  Mittermayer 2009 downloaded as documented for Lenzi.
- **University of Diyala e-library** (`uodiyala.edu.iq`) hosts PDFs of public-domain Assyriological books (King 1907
  vols. I–II): a mirror when archive.org is blocked. (Use only for public-domain items.)
- **eBL fragmentarium**: `GET /api/fragments/<no>` gives the record, `atf` empty when not transliterated; the
  bibliography ids resolve at `/api/bibliography/<id>` (RN262 = Westenholz 1997, RN2877 = Jiménez 2018).

### New hosts for `domains.txt`
`uodiyala.edu.iq`, `www.zora.uzh.ch` (if not there), `clairesulos.com` (a blog quoting Westenholz's translation;
optional), `mostlydeadlanguages.tumblr.com` (502; optional), `muse.jhu.edu` (catalogue only).

### Recipe rows for `sources/fetch-recipes.tsv` (format: path, kind, tier, source, note)
```
King-1907--Chronicles-concerning-Early-Babylonian-Kings-II/King-1907--Chronicles-II.pdf	url	work	https://uodiyala.edu.iq/uploads/PDF%20ELIBRARY%20UODIYALA/EL45/CHRONICLES%20CONCERNING%20EARLY%20Babylonian%20Kings%20v.2.pdf	public domain (1907); pages 87–96 = PDF pages 103–112
King-1907--Chronicles-concerning-Early-Babylonian-Kings-II/page-images/	adhoc	work	King-1907--Chronicles-concerning-Early-Babylonian-Kings-II/King-1907--Chronicles-II.pdf	pdftoppm -f 103 -l 112 -r 220 -png (p087 at -r 150); renamed p087…p096
Mittermayer-2009--Enmerkara-und-der-Herr-von-Arata--OBO-239/Mittermayer_2009_Enmerkara_und_der_Herr_von_Arata.pdf	url	work	https://www.zora.uzh.ch/server/api/core/bitstreams/73c3fd8b-32cc-48c0-9f25-7f7a912c966c/content	ZORA green OA, no CC licence
Mittermayer-2009--Enmerkara-und-der-Herr-von-Arata--OBO-239/mittermayer-2009.txt	pdftotext	work	Mittermayer_2009_Enmerkara_und_der_Herr_von_Arata.pdf	pdftotext -layout
ORACC/epsd2-literary--Q000369--Enmerkar-and-the-Lord-of-Aratta/Q000369.cdl.json	unzip	work	ORACC/_bulk/epsd2-literary.zip	member epsd2/literary/corpusjson/Q000369.json
```
(The eBL fragment JSONs are covered by `sources_sync.py`'s built-in eBL fragment rule; `BM.47449.atf` is the `atf`
field of `BM.47449.json`.) Then `python3 -I tools/sources_sync.py snapshot`.

### Nested `.gitignore` files created (fold into `sources/.gitignore`)
- `sources/Mittermayer-2009--Enmerkara-und-der-Herr-von-Arata--OBO-239/.gitignore` (`*`, `!README.md`, `!.gitignore`)
- `sources/eBL-fragmentarium--Sargon-Birth-Legend/.gitignore` (`*`, `!README.md`, `!.gitignore`)
- `sources/ORACC/epsd2-literary--Q000369--Enmerkar-and-the-Lord-of-Aratta/.gitignore` (`*.json`)
- `אגדות-מלכים/.gitignore` (`__pycache__/`)

## 2. Tools

## 3. Guidelines

## 4. History

## 5. STATUS / plan

## 6. Limits

## 7. Report

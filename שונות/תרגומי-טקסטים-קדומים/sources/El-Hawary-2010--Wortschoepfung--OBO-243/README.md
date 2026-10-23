# El Hawary 2010 – *Wortschöpfung* (the Memphite Theology and the Piye stela), OBO 243

- **What:** Amr El Hawary, *Wortschöpfung: Die Memphitische Theologie und die Siegesstele des Pije – zwei Zeugen
  kultureller Repräsentation in der 25. Dynastie* (Orbis Biblicus et Orientalis 243), Fribourg / Göttingen 2010. A full
  modern edition of the Shabaka Stone (BM EA 498): transliteration and German translation line by line (pp. 115–138 of
  the book = PDF pp. 128–151), with commentary.
- **URL:** ZORA (Zurich), DOI 10.5167/uzh-150938; item `21020c92-0ff0-48f1-8940-e93cc3d21a5f`; the PDF:
  `https://www.zora.uzh.ch/server/api/core/bitstreams/6ad0e994-4922-47ae-937c-518ddf02daf0/content` (DSpace API; see
  `../../sources-registry.md` §4.6 on ZORA).
- **Licence:** open access ("offen" in ZORA's rights check); the book itself is **©** (no free licence stated). The PDF,
  its text layer (`hawary.txt`) and the German translation and notes extracted from it (`memphite-german.tsv`,
  `memphite-notes.tsv`) stay **git-ignored** (this folder's `.gitignore`).
- **Retrieved:** 2026-10-23 (Round 4 run 3).
- **What is here:**
  - `Hawary,El_2010_Wortschopfung.pdf` (git-ignored; 540 pp.) and `hawary.txt` (its `pdftotext -layout` text; the
    Egyptological characters are garbled in the text layer, the German is legible);
  - **`memphite-transliteration.tsv` (committed)**: our transcription of his transliteration of the stone, from the page
    images (the text layer garbles ḥ ḫ ẖ ḏ ṯ ꜣ ꜥ): one row per line of his edition (`label<TAB>transliteration<TAB>pdf
    page`; a line printed in several sentence rows is one row, the rows joined by ` | `). Made by an AI agent on
    2026-10-23 and checked against the text layer; it is the base text of `חכמה-ובריאה-במצרים/` (KEY `MT`). It is
    committed as the reading of an ancient public-domain text (Sethe 1928, public domain, has the same text), with
    attribution to El Hawary's edition; every line of it is quoted in the annotated file anyway, as the corpus does for
    every base text.
  - `memphite-german.tsv`, `memphite-notes.tsv` (git-ignored): his German translation and the notes that bear on a
    reading (rank 3–4: `egypt_tools.py tr MT`).
- **Line numbering:** El Hawary's (the stone's 62 columns + the two horizontal lines, with his letters for the split
  columns: `1a`, `10c`, `49a` …); Sethe 1928's numbers are the same columns.
- **Usefulness:** high: the only open modern edition (the stone is not in AED / the TLA 2018).

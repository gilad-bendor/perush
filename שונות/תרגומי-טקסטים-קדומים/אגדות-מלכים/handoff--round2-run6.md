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
For `tools.md` (a new subsection "Legends of kings (`אגדות-מלכים/`)"):
- `אגדות-מלכים/kings_tools.py` (2026-10-21, run 6; adapted from `lament_tools.py` / `temple_tools.py`), run with
  `python3 -I -B`:
  - `verify EA|SB [--strict]` – entries vs the base line list (ETCSL 1.8.2.3 for EA; King 1907 for SB, labels `I.n` /
    `II.n`), transliteration = base text (ETCSL's `*…*` notes, variant parentheses and King's footnote digits
    ignored), one `>` per entry, reserved and gated strings (tested on the transliteration with and without brackets),
    name traps (lines and headings), fixed formulas (quotation marks ignored), translation = `>` lines; reports
    identical transliterations with different Hebrew.
  - `build EA|SB` – `translation.rtl.md` from `translation--intro.rtl.md` + the annotated files, then verify.
  - `grep EA|SB|all '<regex>'` – the `>` lines (niqqud stripped); `all` adds the lament, temple and creation corpora.
  - `lines KEY FROM-TO` – the base lines; `pars KEY FROM TO` – each line's earlier copies (ratio ≥ 0.75) with their
    Hebrew; `conc EA [out]` – ETCSL ↔ ORACC Q000369 concordance; `data EA FROM TO out` – a translator's data file
    (ETCSL, ORACC lemma + morph, ETCSL English paragraph, Mittermayer's German line from the OCR).
- `אגדות-מלכים/build_parallels_index.py` – `parallels-index.md` (the table after `## The table`) from the
  `### Parallels index (EA1…EA4, SB)` tables in the two `project.md` files; Genesis first, then Exodus.

## 3. Guidelines
For §6.7 (cross-project decisions and false friends):
- **Gen 11 / Enmerkar (run 6):** Sumerian *eme* = `לָשׁוֹן` (the word of Gen 10:5, 20, 31), never `שָׂפָה` (Gen 11);
  *kur₂* / *nakāru* = `שׁוֹנֶה` / `שִׁנָּה`, never `בָּלַל`; no `הֵפִיץ` without *sapāḫu*; the tense of a Sumerian
  passage is decided by its morphology (*ḫe₂-* + ḫamṭu = affirmative past `אָכֵן`), never by a modern translation's
  tense ("may they", "shall").
- **Exod 2 / Sargon (run 6):** ESIR = *iṭṭû* = `חֵמָר` (as the flood corpus) – not *kupru* (ESIR.UD.A = `כֹּפֶר`);
  *quppu* = `קֻפָּה` (vocalized; Mishnaic loan), never `תֵּבָה`; `תֵּבָה`, `גֹּמֶא`, `סוּף`, `יְאֹר`, `זֶפֶת`, `מָשָׁה`
  stay in the apparatus; *dālû* = `דּוֹלֵה הַמַּיִם` (cognate `דָּלָה`); *ana mārūti* = `לְבֵן`.
- **Writing words (run 6):** *gub* (words on clay) = `הִצִּיב`, *dub* = `לוּחַ`, *im* = `טִיט`; `כָּתַב` only for *sar*
  / *šaṭāru*; *dugud* / *kabtu* = `כָּבֵד` gated (Exod 4:10, 18:18).
For §5.2 (lessons, one line each):
- Draft unvocalized from the first line: a part drafted vocalized had to be rewritten plene by hand (run 6).
- A gate list catches what reading does not: `מקינה` (contains `קינה`), `תשובה` (an unanchored `תשוב`), `שפתו`
  (*nundum* "lip" → `קצהו`), `היכל` for *itima*, `מלאכת` – anchor the patterns and test them on the bracket-free
  transliteration (`e₂-⸢gal⸣`) (run 6).
- Quote the Bible only after printing it: about ten quotations from memory were wrong (pointing, ketiv/qere,
  numbering) and were caught by `check_bible_quotes.py` (run 6).
- Read the commentary of the newest edition before fixing a crux the brief names: Mittermayer reads EA 501 "the
  matter", not "his mouth", was heavy – the Exod 4:10 parallel depends on one sign reading (run 6).
- When no open edition of a text is reachable, transcribe the public-domain one from page images (OCR of old
  cuneiform-type editions is unusable) and mark every point where the modern reading is known to differ (run 6).
- Without a sub-agent tool the coordinator can run the translator chain itself, in order, merging the proposals into
  `renderings.md` §9 after each part (run 6).
§6.5 names (shared): Enmerkar `אֶנְמֶרְכַּר`, Aratta `אָרַטָּה`, Kulaba `כּוּלַבָּה`, E-zagin `אֵזַגִּין`, Abzu
`הָאַפְּסוּ`, E-nun `אֵנוּן`, Zubi ★ `זוּבִּי`, Šubur `שׁוּבּוּר`, Ḫamazi `חַמָזִי`, Ama-ušumgal-ana
`אַמָא־אוּשׁוּמְגַּל־אַנָּה`, Ĝeštin-ana `גֶּשְׁתִּין־אַנָּה`, Iškur `אִישְׁכּוּר` (= run 7), Urigigala
`אוּר־אִיגִיגַלָּה` (open), Sargon `סַרְגּוֹן`, Azupirānu `אֲזוּפִּירָנוּ`, Aqqi ★ `אַקִּי`, Dūr-ilu `דּוּר־אִילוּ`.
**To harmonize with run 5:** *šembi₂-zid* – EA `פוּךְ` (EA1, ↔ 2 Kgs 9:30), run 5 `כָּחָל`; Dumuzi – run 5 vocalizes
★ at every occurrence, run 6 at the first occurrence per file.

## 4. History
"Learned on 2026-10-21 (Round 2, run 6: legends of kings)": the coordinator had no sub-agent tool and translated both
texts itself, strictly in order (EA1 → EA2 → EA3 → EA4 → SB), with three review passes per part. Sources: ETCSL
1.8.2.3, ORACC Q000369 (lemma + morph for every word, the decisive tool for the tense of the spell of Nudimmud),
**Mittermayer 2009 found in open access on ZORA** (the plan had only "check OA"), King 1907 for Sargon (found on
uodiyala.edu.iq; transcribed from page images). Westenholz 1997, Lewis 1980, the CT copies and CDLI (503 all day) were
unreachable. Findings: the spell of Nudimmud is in the past (forms), with `לָשׁוֹן` (Gen 10) not `שָׂפָה`, and *kur₂*
"change" not "confuse"; the heavy mouth depends on one sign reading (ETCSL *ka-ni* / Mittermayer *inim i₃*); the
Sargon bitumen is *iṭṭû* = `חֵמָר`, Exod 2:3's word, and the *kupru* claim does not stand. Slips caught: a vocalized
draft, ten Bible quotations from memory, a dozen gate collisions.
Changelog line: "2026-10-21 – Round 2 run 6: `אגדות-מלכים/` (Enmerkar and the Lord of Aratta, complete, 641 lines;
the Sargon Birth Legend on King 1907, 49 lines); Mittermayer 2009 and King 1907 added to `sources/`."

## 5. STATUS / plan
- **Plan row (Round 2, run 6):** "Done (first draft), 2026-10-21: `אגדות-מלכים/` – Enmerkar and the Lord of Aratta
  (ETCSL 1.8.2.3, 641 lines in four annotated parts, ORACC morph, Mittermayer 2009) and the Sargon Birth Legend (King
  1907 transcribed from page images, 49 lines; to be checked against Westenholz 1997); renderings, translator brief,
  parallels index (140 rows), print stubs."
- **STATUS §3 row:** `| אגדות-מלכים | Enmerkar and the Lord of Aratta; Sargon Birth Legend | 641 + 49 lines | complete
  (first draft); SB on King 1907 only | 2026-10-21 |`
- **STATUS §6 (open cross-corpus decisions):** (1) *nam-šub* `קֶסֶם` (temple / lament corpora: check); (2) EA 501
  "his mouth" vs "the matter" (Mittermayer); (3) *šembi₂-zid* `פוּךְ` vs `כָּחָל` (run 5); (4) the Sargon text against
  Westenholz 1997 and K 7249 (the user to obtain).

## 6. Limits
No quota, rate limit, HTTP 429 or session limit was met by the translation work. Access failures (not limits): CDLI
`cdli.earth` HTTP 503 ("temporarily offline") on every try (≈6 tries, 14:50–16:30 UTC); HathiTrust babel Cloudflare
403; Google Books and Wikimedia HTTP 429 once each (not retried); a tumblr copy 502; archive.org not tried (blocked).
`git push origin main` was rejected throughout (origin/main rewritten by the user); the lead replays the commits.

## 7. Report
**Translated and verified.** *Enmerkar and the Lord of Aratta*: all 641 ETCSL entries (1–636 with 11A, 106A, 185A,
185B, 365B and A–D) in `1-אנמרכר-ואדון-ארטה/annotated-1…4.rtl.md`, each line parsed with the ORACC morph, compared
with ETCSL's English and Mittermayer's German, three review passes per part; `translation.rtl.md` built (641 lines, 12
footnotes). *The Sargon Birth Legend*: all 49 lines of King 1907 (col. I 1–32, col. II 1–17) in
`2-אגדת-הולדת-סרגון/annotated.rtl.md`, normalized with the eBL dictionary word by word; `translation.rtl.md` built.
Checks: `kings_tools.py verify EA --strict` and `verify SB --strict` OK; `check_bible_quotes.py` 0 problems on every
file of the corpus; `parallels-index.md` 140 rows with key findings.
**Key findings for the Bible.** (1) The spell of Nudimmud (EA 134–155) is past by its forms (Mittermayer, not
ETCSL/Kramer's future): one *tongue* (`לָשׁוֹן`, Gen 10) "changed" (*kur₂*) by Enki in a contest of lords – no tower,
no scattering, no sin; the closest text to Gen 11 is also its inverse. (2) The heavy mouth (EA 501 ↔ Exod 4:10)
rests on ETCSL's *ka-ni*; Mittermayer reads "the matter was heavy" (↔ Exod 18:18); with the staff (434) and the sign
(496) Exod 4's commissioned messenger is assembled in one place (our proposal). (3) The invention of the letter is a
narrator's aside "formerly … today" (1 Sam 9:9; Ruth 4:7). (4) Sargon: the bitumen is *iṭṭû* = `חֵמָר`, Exod 2:3's
very word; *kupru*/`כֹּפֶר` is not in the text; same verb (`וַתָּשֶׂם`), same river bank, same adoption formula; the
differences (Akkadian *quppu*, the mother casting the child in, the water-drawer instead of the princess, no name
pun) are findings too. (5) Grain and famine (Joseph), the storm god's rain (Judg 5:4), a people "separated" for a god
(Lev 20:26), "after the flood" (Gen 10:32).
**The ancient mind.** Diplomacy by a messenger's memory and by riddles from the school lists; kingship as a goddess's
love (Inana's *en*; Ištar's gardener); a contest of a grain city and a metal city ended by trade; writing born of an
overloaded memory; a founder-king who turns the shame of his birth into election, and an inscription that dares its
successors.
**Open decisions for the user.** EA1.6 the tense of the spell (past, followed – confirm); EA4.1 501 mouth/matter;
EA4.3 540 "a peg"; EA3.3 *ur* dog/champion; EA4.4 Urigigala; SB 1 *ēnetu* vs "lowly"; SB 4 *edēlu* vs *elû*;
SB 5 col. II's relation to the legend.
**Skipped / failed.** Sargon: Westenholz 1997 (the modern edition) and K 7249 not reachable – the translation rests on
King 1907 and must be checked against Westenholz (pp. 36–49) before publication; CDLI photos/ATF unreachable (503).
BM 47449 col. 4′ (eBL) is not the legend and was not translated.

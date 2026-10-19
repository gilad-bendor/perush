# eBL (electronic Babylonian Library, LMU Munich) – public REST API

- **Web UI:** https://www.ebl.lmu.de/ (dictionary: `https://www.ebl.lmu.de/dictionary/<id>`, corpus: `https://www.ebl.lmu.de/corpus/L/1/4/SB/XI`)
- **API base:** `https://www.ebl.lmu.de/api/` (no key needed for GET; write endpoints need Auth0 scopes)
- **Source code:** https://github.com/ElectronicBabylonianLiterature/ebl-api (MIT licence for the *code*); ATF dialect spec in `../eBL-ATF-spec/`
- **Retrieved / tested:** 2026-10-16 (every URL below was called with `curl` on that date and returned HTTP 200 unless noted)
- **Content licence:** the dictionary page says *"Reproduction of the contents is not possible without the permission of the publisher."* CDA is reproduced "with the kind permission of B. Krauss (Harrassowitz)"; see `raw/ebl-frontend_about_dictionary.tsx`. **Practical rule:** query it per word while translating, cite it ("eBL Dictionary, s.v. …" / "CDA s.v. …"); do not mirror the whole dictionary into the repo.

## What is inside the dictionary (why it matters)
The eBL dictionary (`/api/words`) is the **full text of CDA** (Black–George–Postgate, *A Concise Dictionary of Akkadian*, 2nd printing 2000; you would otherwise have to buy it), parsed into JSON. Merged into it are:
- Postgate's *CDA Justifications, Addenda and Corrigenda* (`cdaAddenda`)
- the AfO-Register / Sommerfeld *Akkadische Glossare und Indizes* references (`akkadischeGlossareUndIndices`)
- the Leipzig *Supplement to the Akkadian Dictionaries* (SAD, Streck)
- Schramm, *Akkadische Logogramme* (logograms)
- Arabic guide words (`arabicGuideWord`)
- links to ORACC lemma+guide word (`oraccWords`), which bridges eBL ids and ORACC glossaries

Word ids look like `zakāru I` (the lemma plus a Roman homonym number). They are the same ids that eBL's lemmatised texts use, e.g. `uniqueLemma: ["abūbu I"]` in the Gilgameš corpus.

## Endpoints (verified)

### Dictionary
| Call | Returns |
|---|---|
| `GET /api/words/zak%C4%81ru%20I` | one entry (object). URL-encode the id (`ā` → `%C4%81`, space → `%20`). |
| `GET /api/words?word=ab%C5%ABbu` (or `?query=`) | list of entries whose lemma, legacyLemma or form **starts with** the string (a regex prefix match) |
| `GET /api/words?meaning=flood` | list of entries whose English meaning contains the string (a regex substring search over `meaning` and `amplifiedMeanings`). `flood` returned 57 hits. |
| `GET /api/words?root=kpr` | exact root match (`roots` field; the consonants are normalised, e.g. `zkr`). Not every entry has roots: `kupru I` has none. |
| `GET /api/words?vowelClass=a/u` | verbs of a vowel class |
| `GET /api/words?word=ab%C5%ABbu&origin=CDA` | filter by source (`CDA`, `AFO_REGISTER`, `EBL`, …) |
| `GET /api/words?word=X&meaning=Y&root=Z` | the filters combine (AND). **Note:** `lemma=` is a *different* mode (autocomplete, max 15 hits). Mixing `lemma=` with `meaning=` silently ignores `lemma`, so use `word=`. |
| `GET /api/words?lemmas=zak%C4%81ru%20I,amatu%20I` | batch fetch by exact ids (comma-separated). 100 ids in one call worked. |
| `GET /api/words/all` | **all 22,256 word ids** (JSON array, ~317 KB). Together with `?lemmas=` this is the bulk-download route. Respect the content licence: cache locally, don't publish. |

Entry JSON (see `raw/words_zakaru_I.json`). The keys:
`_id, lemma[], homonym, legacyLemma, attested, forms[{lemma[],attested,notes}], meaning` (the CDA headline gloss, markdown) `, amplifiedMeanings[{key: "G"|"D"|"Š"|"N"|…, meaning, vowels, entries[]}], logograms[{logogram[]}], derived[[…]], derivedFrom, source` (the full CDA entry text in markdown) `, roots[], pos[], guideWord, oraccWords[{lemma,guideWord}], origin[], akkadischeGlossareUndIndices[{mainWord,note,reference,AfO,agiID}], arabicGuideWord, cdaAddenda, namedEntityTags[]`.

### Corpus (edited composite texts, with translation, normalisation and lemmatisation)
| Call | Returns |
|---|---|
| `GET /api/texts` | all 84 corpus texts with chapters (~500 KB) |
| `GET /api/texts/L/1/4` | text metadata: *Poem of Gilgameš* (L I.4). *Atraḫasīs* is `L/1/1`, *Enūma eliš* `L/1/2`, *Erra* `L/1/5`, *Ludlul* `L/2/2`. |
| `GET /api/texts/L/1/4/chapters/Standard%20Babylonian/XI/display` | **Gilgameš SB XI: every line with its normalised reconstruction (tokens carry a `uniqueLemma` → dictionary id), an English translation (`#tr.en`; edition by A. R. George, revised by the eBL team) and the full ATF incl. manuscript lines (`atf` field)**. ~9.3 MB. |
| `GET /api/texts/L/1/4/chapters/Standard%20Babylonian/XI` | chapter with manuscripts and score (~8.6 MB) |
| `GET /api/texts/L/1/4/chapters/Standard%20Babylonian/XI/lines/10` | one line (0-based index) with all its manuscript witnesses (~35 KB) |
| `GET /api/corpus/query?lemmas=ab%C5%ABbu%20I` | **concordance**: every corpus chapter and line number where the lemma occurs (66 hits; Gilg. XI lines 13, 109, 110, …). Good for consistent translation. |
| `GET /api/lemmasearch?lemma=ab%C5%ABbu%20I&genre=L` | the corpus lines containing a lemma, with full line data (large) |

Chapters available on 2026-10-16:
- **Atraḫasīs:** OB I, II, III, Schøyen; SB I–VI, VIII, X; NA I, II; MB Bab₁, Bab₂, Boğ, Nippur, Priv, Ug₁, Ug₂. (Ug = the Ugarit manuscripts; Boğ = Boğazköy.)
- **Gilgameš:** SB I–XII; OB II, III, UM, Schøyen₁₋₃, Nippur, Harmal₁₋₂, Ishchali, IM, VA+BM, CUNES, SM; MB Nippur, Ur, Boğ₁₋₃, Emar₁₋₂, Megiddo, Priv₁, Ug₁₋₂; NA x, y.
- Chapter URL pattern: `/api/texts/L/1/<index>/chapters/<Stage, URL-encoded>/<name, URL-encoded>/display`.

### Fragmentarium and signs
| Call | Returns |
|---|---|
| `GET /api/fragments/K.252` | a tablet fragment (transliteration, references, …) |
| `GET /api/fragments/query?lemmas=ab%C5%ABbu%20I&limit=5` | fragments containing a lemma (`matchCountTotal` 140) |
| `GET /api/signs/KUR` | sign: values, sign-list numbers (MZL, HZL, LAK, OBZL, SLLHA, KWU, ABZ …), logograms with Akkadian readings |
| `GET /api/signs?value=kur&subIndex=1` | sign search by reading |
| `GET /api/signs?listsName=MZL&listsNumber=578` | sign by Borger MZL number |
| `GET /api/signs/all` | all 2,497 sign names |
| `GET /api/signs/transliteration/ut-nap-i%C5%A1-ti` | Unicode cuneiform code points for a transliterated string |

Not available: `GET /api/corpus/texts` (404). Use `/api/texts`. `GET /api/words/search` → 404.

## Files here
- `raw/words_zakaru_I.json`: a sample dictionary entry
- `raw/words_search_word-abubu_origin-CDA.json`, `raw/words_search_root-kpr.json`: sample searches
- `raw/corpus_query_lemmas-abubu_I.json`: a sample concordance
- `raw/texts_L_1_4_Gilgamesh_meta.json`: Gilgameš text metadata (intro, chapters)
- `raw/gilgamesh_SB_XI_line-index-10.json`: one line with its witnesses
- `raw/signs_KUR.json`: a sample sign
- `raw/ebl-api_*.py.txt`: the route and search code (MIT) that documents the query semantics
- `raw/ebl-frontend_about_dictionary.tsx`: the eBL "About the dictionary" page source (provenance and permissions of CDA, AGI, SAD, Schramm)

## How to use it in translation work
1. For each Akkadian word in a line of the eBL Gilgameš/Atraḫasīs edition, take `uniqueLemma` → `GET /api/words/<id>` → read `meaning`, `amplifiedMeanings` (stem-specific senses) and `source` (the full CDA entry).
2. For a word you need to translate consistently, run `GET /api/corpus/query?lemmas=<id>` to see every occurrence in the literary corpus.
3. For deeper lexical questions, go from the eBL id to the CAD volume (see `../CAD-Chicago-Assyrian-Dictionary/`) and to eSAD (Leipzig) for post-CAD corrections.

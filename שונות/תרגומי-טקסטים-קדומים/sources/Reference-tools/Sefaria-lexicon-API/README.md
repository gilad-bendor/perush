# Sefaria lexicon API: BDB, Klein, Jastrow, Ben-Yehuda (Hebrew/Aramaic, with Akkadian cognates)

- **What:** Sefaria serves several Hebrew/Aramaic dictionaries through one free JSON endpoint. **Klein**'s *Comprehensive Etymological Dictionary of the Hebrew Language for Readers of English* (Carta 1987) is the most useful one here: its `notes` field gives the etymology, often with the Akkadian cognate (e.g. כֹּפֶר II → "Akka. *kupru*"; מַבּוּל → "Akka. *nabulu* … *bubbulu*").
- **API:** `https://www.sefaria.org/api/words/<Hebrew word, URL-encoded>`. There is no key and the API is public (Sefaria's API is documented at https://developers.sefaria.org/).
- **Retrieved / tested:** 2026-10-16 (all calls below returned HTTP 200)
- **Licences:** Klein = **CC BY-NC** (`raw/klein_versions_metadata.json`: `"license": "CC-BY-NC"`, version "Carta Jerusalem; 1st edition, 1987"). BDB (1906) and Jastrow (1903) are public domain. Ben-Yehuda is from Project Ben-Yehuda. → You may quote with attribution for non-commercial work.

## Calls (verified)
| Call | Returns |
|---|---|
| `GET /api/words/%D7%9B%D7%A4%D7%A8` (כפר) | 37 entries: Klein 8, BDB 8, Jastrow 7, Ben-Yehuda 12, "BDB Augmented Strong" 2 |
| `GET /api/words/%D7%9E%D7%91%D7%95%D7%9C` (מבול) | one entry from each of the 5 lexicons |
| `GET /api/words/%D7%AA%D7%91%D7%94` (תבה) | Klein, Jastrow, Ben-Yehuda (BDB lists it under its root, so look up the root as well) |
| `GET /api/words/completion/%D7%9B%D7%A4/Klein%20Dictionary` | autocomplete within one lexicon: `[[unpointed, pointed], …]` |
| `GET /api/texts/versions/Klein_Dictionary` | version and licence metadata |

The lookup accepts unpointed text and returns every lexicon. Filter on `parent_lexicon` ∈ {`Klein Dictionary`, `BDB Dictionary`, `BDB Augmented Strong`, `Jastrow Dictionary`, `Ben Yehuda Dictionary`}.

Entry keys: `headword, parent_lexicon, content{senses[{definition, senses[], grammar{binyan_form, verbal_stem}}], morphology}, notes` (Klein etymology, HTML) `, refs, rid, prev_hw, next_hw, strong_number, transliteration, pronunciation, parent_lexicon_details`.

BDB's etymological preamble (with Assyrian/Akkadian comparanda such as "Assyrian *kuppuru*, purify") is inside the root entry's `content.senses[0].definition`. Strip the HTML tags.

## Bulk alternatives
- Sefaria's full MongoDB dump (includes the lexicons): `https://storage.googleapis.com/sefaria-mongo-backup/dump_small.tar.gz` (~2.6 GB; updated daily, last-modified 2026-10-16). Probably not worth it; use the API per word.
- BDB as XML (public domain, Open Scriptures; ~2.9 MB, entries keyed to Strong's): https://github.com/openscriptures/HebrewLexicon (`BrownDriverBriggs.xml`, `LexicalIndex.xml`). Its readme describes the file as "a work in progress".
- STEPBible TBESH (brief Hebrew lexicon keyed to extended Strong's numbers, **CC BY**): https://github.com/STEPBible/STEPBible-Data/tree/master/Lexicons

## Files here
- `raw/words_kpr.json`, `raw/words_mabbul.json`, `raw/words_teva.json`: sample responses for כפר / מבול / תבה, the flood-relevant headwords
- `raw/completion_kp_Klein.json`, `raw/klein_versions_metadata.json`

## How to use it in translation work
For each Hebrew word you choose in the Hebrew translation (or for each Akkadian word with a suspected Hebrew cognate), read the Klein `notes` and the BDB root preamble. They tell you whether the Akkadian↔Hebrew link is established, disputed, or a loan. Then cross-check against Tawil / Mankowski / Kaufman (see `../RESOURCES.md`).

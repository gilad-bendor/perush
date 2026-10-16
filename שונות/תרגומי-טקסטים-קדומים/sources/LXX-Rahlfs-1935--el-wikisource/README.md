# Septuagint, ed. A. Rahlfs (1935) — Genesis, Exodus, Isaiah, 4 Kingdoms — from Greek Wikisource

- **Edition:** Alfred Rahlfs, *Septuaginta, id est Vetus Testamentum graece iuxta LXX interpretes* (Stuttgart: Württembergische Bibelanstalt, 1935). Running text only (no apparatus).
- **Digital source:** Greek Wikisource (el.wikisource.org), pages
  - `Γένεσις (Rahlfs)` — https://el.wikisource.org/wiki/Γένεσις_(Rahlfs) — revision 102772 (2017-07-26)
  - `Ησαΐας (Rahlfs)` — revision 157847 (2025-01-28)
  - `Βασιλειών Δ' (Rahlfs)` — revision 157824 (2025-01-28)
  - `Έξοδος (Rahlfs)` — current revision on 2026-10-16
- **Retrieved:** 2026-10-16, via `https://el.wikisource.org/w/index.php?title=<page>&action=raw` (raw wikitext).
- **Licence / copyright status:** Rahlfs died in 1935, so the 1935 text is public domain in life+70 countries (EU, Israel) since 2006. The Deutsche Bibelgesellschaft still asserts rights over its editions (the 2006 Rahlfs–Hanhart revision is certainly protected), and the US status of the 1935 text is unclear (URAA restoration would run to 2030). Wikisource hosts it as public domain. **Treat it as licence-unclear: commit only this README** (the coordinator should add the folder to `../.gitignore` per guidelines §8). Short quotations in our apparatus are fine.

## Files
| File | What |
|---|---|
| `genesis-rahlfs.wikitext`, `exodus-rahlfs.wikitext`, `isaiah-rahlfs.wikitext`, `4kgdms-rahlfs.wikitext` | Raw wikitext as downloaded. |
| `wikisource-page-info.json` | API page info for the Genesis page (revision id, timestamp). |
| **`Genesis--LXX-Rahlfs.md`** | Clean Genesis 1–50, one verse per paragraph: `**c:v** text`. |
| `Other-verses--LXX-Rahlfs.md` | Single verses used in the flood corpus: Isa 37:38 / 4 Kgdms 19:37 (Hebrew `אֶרֶץ אֲרָרָט` = εἰς Ἀρμενίαν / εἰς γῆν Αραρατ); Exod 13:18, 15:4 (Ἐρυθρὰ θάλασσα = `יַם סוּף`). Extract further books the same way from the raw wikitext. |

Extraction: the wikitext is split at `===<chapter>===` headings and `{{κ|<verse>}}` markers; wiki markup is stripped; the Greek is NFC-normalised and otherwise unchanged. The script (`lxx_extract.py`, ~25 lines) was run with `python3 -I` from a session scratchpad; re-create it if needed.

## Verse numbering
Rahlfs's numbering. In Genesis 1–11 it matches the Hebrew (MT) verse numbering exactly (299 verses; checked). Beware the LXX's different **numbers** (ages in Gen 5 and 11; Gen 7:11 and 8:4 "27th day" for MT 17th; 8:5 "eleventh month" for MT tenth).

## Usefulness
Needed for comparing the Greek of Berossus/Abydenus (Hellenistic Babylonian flood story) with the Greek Genesis: shared vocabulary such as κατακλυσμός (= מַבּוּל), ἄσφαλτος (= כֹּפֶר 6:14; = חֵמָר 11:3, 14:10), βρώματα (6:21), μῆκος/πλάτος (6:15), ὄρνεα (6:20; 9:2, 10), κοπάζω (8:1, 8, 11), καθίζω (8:4). For a critical text, the Göttingen Septuagint (Wevers, *Genesis*, 1974) is the standard (copyright; not downloaded).

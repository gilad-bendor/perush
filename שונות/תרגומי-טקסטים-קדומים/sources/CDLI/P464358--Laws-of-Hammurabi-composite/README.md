# CDLI P464358 – Laws of Hammurabi, composite (RIME 4.03.06.add21), with the Louvre stele P249253

- **Text:** the Laws of Hammurabi (Codex Hammurapi): prologue, laws §1–§282, epilogue. Old Babylonian Akkadian, c. 1755 BCE.
- **Edition:** CDLI composite **P464358** = Q006387, "RIME 4.03.06.add21 (Laws of Hammurapi) composite" (CDLI cites Frayne, RIME 4, 1990; history: Bergmann 1953, Driver & Miles 1952–55, Harper 1904, Finet 2002). Transliteration, a **normalization on every line** (`#tr.ts`) and an **English translation on every line** (`#tr.en`; the translator is not named in the ATF).
- **Witness:** CDLI **P249253** = RIME 4.03.06.add21 ex. 01, the **Louvre stele Sb 8** (ATF embedded in the composite's JSON export; 3,642 lines, obv. columns 1–17, rev. columns 1–28). CDLI lists 27 further exemplars (ex. 02–27, Syria 58 083); only ex. 27 (YBC 6516, §165–175) has an ATF on CDLI (inside `P464358.json`).
- **URLs:** https://cdli.earth/artifacts/464358 · JSON export (works): `https://cdli.earth/artifacts/464358/json` (`[0]['inscription']['atf']`; witnesses in `[0]['witnesses'][i]['witness']['inscription']['atf']`). The `.atf` URL returns an error page; `/inscription` is HTML.
- **Retrieved:** 2026-10-17.
- **Licence:** CDLI Terms of Use: transliterations and translations "may be freely copied, aggregated and re-used according to common and fair academic practice", with attribution (CDLI). Committed. Images (not downloaded) are restricted.

## Files
| File | What |
|---|---|
| `P464358.json` | Raw CDLI JSON export (catalogue, publications, witnesses incl. the stele ATF). |
| `P464358.atf` | The composite ATF (extracted from the JSON, unchanged). |
| `P249253.atf` | The Louvre stele ATF (extracted from the JSON; CRLF → LF). |
| `P464358--composite-with-stele.md` | Clean extraction by `tools/cdli_composite2md.py`: per composite line the transliteration, `ts:` normalization, `en:` CDLI English, the **stele reference** (`obv. col:line` / `rev. col:line`), and the stele's own transliteration where it differs (292 lines: mostly damage marks `#`, `[ ]` on the stele where the composite fills from duplicates, and a few sign variants). |

## Numbering
- **Composite lines** 1–1120, then (after the erased stele columns) **1121′–3641′** (CDLI marks the post-gap lines with a prime). Prologue 1–303; laws 304–3143′; epilogue 3144′–3641′.
- **Laws** are marked `@law N` (§1–§65, §101–§282; §242–243 is one block). **The gap:** the composite has `$ n lines broken` after 1120: it does **not** contain the so-called gap laws (§66–§99 in the Driver & Miles / Borger numbering; lettered "gap ¶ a …" in Roth 1997), which are known only from other (OB and later) copies. 1121′ (*imaddad*) is the restored last word of §65 (stele obv. 17:1, restored); 1122′ is `[...]`; **1123′–1129′ are the end of §100** (the stele resumes at rev. 1:1), although the ATF still labels them `law 65`.
- **Stele:** obverse columns 1–16 (+17, lost), reverse 1–28. The traditional continuous column numbering (I–XXIII obverse incl. the seven erased columns XVII–XXIII, XXIV–LI reverse) is used by SEAL: SEAL col. i–v = stele obv. 1–5 (prologue); SEAL col. xlvii–li = stele rev. 24–28 (epilogue). Older editions (Harper 1904) cite "obv. col. line" / "rev. col. line" as CDLI does.
- **Law numbers** = the standard numbering (Scheil 1902 → Roth 1997, Richardson 2000), identical in CDLI.

## Usefulness
**Base text** of `חוקים-ובריתות/2-חוקי-חמורבי/`. Only 9 composite lines have `[ ]`. The composite resolves the stele's damage silently from duplicates; the stele column of the extraction shows where. CDLI's English is a plain line-by-line rendering (rank 3).

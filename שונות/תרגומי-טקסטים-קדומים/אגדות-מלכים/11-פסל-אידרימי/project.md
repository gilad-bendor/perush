# Project 11: The statue inscription of Idrimi of Alalaḫ – Round 8 run 4 (2026-11-14)

## Scope
The first-person inscription carved over the statue (BM 130738; 15th century BCE): 104 lines, almost intact. Base:
CDLI P500443 (ATF from Dietrich & Loretz, UF 13, 201–268; CC0), converted to `../../sources/CDLI/P500443--Idrimi-statue/base.tsv`.
ORACC's edition (aemw/alalakh/idrimi, with English) is unreachable from the cloud this week: the translation reads the
ATF alone, and **waits for a check against ORACC's lemmatized edition** when the host is reachable.

## Tools
`../kings_tools.py` key ID; gates licensed by the folded ATF (no lemmas).

## Progress
| Part | Lines | Status |
|---|---|---|
| ID1 | 1–104 | – |

## Independent review (2026-11-14)
All 104 lines read against the CDLI ATF (no lemmas). **14 `>` lines changed:**
| Lines | Kind |
|---|---|
| 15, 27, 31, 44, 46, 49, 64, 74 | consistency: ERIN₂.MEŠ *ṣābu* `צָבָא` (CL, ST, ZL, BZ; was `לוחמי`) |
| 80; 92 | consistency: *epēšu* Š `עשיתי` (`בָּנָה` is *banû*'s); *nasāḫu* `ינסח` [cognate] (was `יעקור`; Deut 27:17's tag corrected to [equivalent]) |
| 61; 103 | fidelity: *tabkū* is a stative and *abbūtiya* a genitive (`אשר (של) אבותיי – על הקרקע שפוכות?`, was "my fathers poured"); *lidanaggalšunu* – the object is the labours (`יצפו בהן`, was "on it") |
| 32 | echo: `ודרך הים` (Isa 8:23's `דֶּרֶךְ הַיָּם`, not in the Akkadian) → `ובַּיָּם` |
| 13 | vocalized `רַכָּבִי` (unvocalized: "my chariotry") |
Notes: `ברית` / `לכרות ברית` (no *riksu* here) → `אמנה`; the intro paragraph and `project--ID1.md` rows follow the
lines. `translation--intro.rtl.md` written (it says the translation awaits ORACC); `build ID`, `verify ID --strict`
OK (104); `check_bible_quotes.py` 0 problems.
**Open:** the check against ORACC's lemmatized edition (lines 26–27, 41, 46, 55, 59–63, 93, 95 are the doubtful
ones); *unakkar* (96) `ישנה` uses §0.3's *nakāru* = `שִׁנָּה`, while AN2 gives `שִׁנָּה` to *šanû* (AP v8) – the
split is the lead's; print stub and layout module not yet made.

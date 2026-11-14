# Project 10: Old Babylonian royal epics – Round 8 run 4 (2026-11-14)

## Scope
Three OB epics of contemporary or near-contemporary kings: the Epic of Zimrī-Lîm of Mari (Guichard 2014; SEAL node
1552; 162 entries, cols i–iv), the Song of Bazi (CUSAS 10, 1; SEAL node 1551; 64), the Gulkišar epic of the First
Sealand Dynasty (HS 1885 + N 4026 (+) N 1338; SEAL node 1597; 95 – about half broken: translated because the plan
takes the three as one group; its broken lines are entries with `[…]`). Base files as project 9.

## Tools
`../kings_tools.py` key RE.

## Progress
| Part | Texts | Status |
|---|---|---|
| RE1 | ZL, BZ, GU | drafted, three passes; independently reviewed (2026-11-14) |

## Independent review (2026-11-14)
Every entry of ZL, BZ, GU read against SEAL's transliteration and lemmas; repeats checked with `pars RE`, lemmas
against AK, ID and Anzû. **4 `>` lines changed:**
| File | Lines | Kind |
|---|---|---|
| GU | 4′, 20 | the coordinator's *ayyābu* = `צַר` (vocalized `הַצַּר`: unvocalized it reads "the narrow"; *nakru* keeps `אוֹיֵב`) |
| GU | 17 | the coordinator's *zību* = `זְאֵב` [cognate]: `כ[ת]ן` → `כ[ז]אב` |
| ZL | iii16 | fidelity: *isḫur* preterite `פנה` (was the participle `פונה`) |
Header word lists (GU) and notes updated; the ZL header's `עולם` (reserved) and one note's `בעלי הברית` replaced.
RE1's open decisions 3–4 are thereby closed. `translation--intro.rtl.md` written; `build RE`, `verify RE --strict` OK
(321); `check_bible_quotes.py` 0 problems.
**Open:** GU 17 now gives *barbaru* (`זְאֵב`, CL and Gilgameš) and *zību* one Hebrew word in one line (a noted
split; Gilgameš has *zību* `עַיִט`) – for the lead; ZL ii40 *lā ussaḫḫirū* (3rd person + subjunctive) is rendered
as a prohibitive `אל תפנה` – an oath form "surely not" is possible; GU 24′ *qummûa* may be the subject (3pl verb:
"my burnings will scorch them") – left as SEAL reads it; print stub and layout module not yet made.

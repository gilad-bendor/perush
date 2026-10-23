# Project 2: Advice to a Prince (eBL L/2/5)

## Scope
The whole text, 55 lines (eBL labels 1–55), unit `AP` of `../prophecy_tools.py`; annotated file `annotated.rtl.md` (translator T5).

## Base text
eBL corpus `L/2/5`, "Standard Babylonian" (ed. T. D. N. Mitto, rev. Z. J. Földi, A. Hätinen, A. C. Heinrich, E. Jiménez; translation B. R. Foster): `../../sources/eBL/Advice-to-a-Prince/` (`reading-edition.md`, `glossary.md`, `manuscripts.md`, `bibliography.md`). Four manuscripts: NinNA1 (DT 1, Nineveh, NA), NipNB1 (IM 77087, Nippur, NB), and two quotations (NinNBQuo1 = K 8681, NinNAQuo1 = K 10182). The backticked line is the eBL normalization (`N`); variant normalizations of other manuscripts are given by `prophecy_tools.py data AP` and are translated in the apparatus. **Line 45 has no N in eBL**: the backticked line is built from its lemma forms (*ašaršunu ana namê ikkammar*), and the entry says so. Rank 3: Foster's translation (the eBL `T`). Lambert's BWL (1960) edition and later studies: not obtained.

## The parallels that matter
The law of the king (Deut 17:14–20); Samuel's "rule of the king" (1 Sam 8:11–17: fields, vineyards, sons, herds, `וְנָתַן לְסָרִיסָיו`); justice and the bribe (Deut 1:17; 16:18–20; Exod 23:8); Rehoboam and the elders' counsel (1 Kgs 12); the forced labour (1 Kgs 5:27; 11:28; 12:4, 18; Ps 81:7); the exemption of the free cities (cf. Ezra 7:24); the gods who leave their sanctuaries (Ezek 10–11); the city heaped into a ruin (`תֵּל`, Deut 13:17).

## Open decisions
T5's eleven are in `notes-AP.md`: the cross-corpus ones are *šipru* `מְלָאכָה` / `פֹּעַל` (line 6; the user's open decision in STATUS.md §6), *šubarrû* `פְּטוֹר` (Adapa has `חֵרוּת`) and the vowel of Erra; the rest are minor (line 40's crux, *ṣâdu*, *waklu*, *šatam ēkurri*, the sense of *adê* in 48), for the next session on this corpus.

## Progress
- 2026-10-21: source fetched from eBL, renderings fixed (`../renderings.md` §4). T5 stopped at its start on the session limit.
- 2026-10-22: T5 drafted all 55 lines after SAA 9 (three review passes in `notes-AP.md`; `verify AP --strict` and `check_bible_quotes.py` clean); its changes to the pre-set §4 merged (`../renderings.md` §7). `translation.rtl.md` built (55 lines, 6 footnotes). **First draft complete**, not yet reviewed by the user.

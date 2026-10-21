# Project 5: The Farmer's Instructions (ETCSL 5.6.3) → Hebrew

Round 3, run 1 (2026-10-21), creation corpus (`../corpus.md`). Siglum in the corpus parallels index: **FI**.

## Scope
An OB Sumerian school text (copies c. 1800 BCE from Nippur, Ur and elsewhere; the composition perhaps Ur III): an old farmer instructs his son through the agricultural year, from the irrigation of the field to the winnowing, and the last lines name it as the instructions of Ninurta, Enlil's faithful farmer. The whole composite: 111 lines (1–111).

## Base text and sources
- **Base text (rank 1):** ETCSL c.5.6.3, `../../sources/ETCSL/5.6.3--Farmers-Instructions/transliteration.md` (from the TEI `c.5.6.3.xml`; CC BY-NC-SA). Copy each transliteration line exactly.
- **Lemmas and morph (rank 2):** ETCSL's TEI lemmas (`python3 -I ../../tools/sumerian_workbench.py lemmas|line ../../sources/ETCSL/5.6.3--Farmers-Instructions/c.5.6.3.xml FROM-TO`); ORACC: `../../sources/ORACC/epsd2-literary--Q000784--Farmers-Instructions/Q000784--lemmatised-morph.md` (ePSD2 lemma + morph for every word, same labels; CC0); ePSD2 (`… gloss`).
- **Rank 3:** ETCSL's English translation (`../../sources/ETCSL/5.6.3--Farmers-Instructions/translation.md`), read only after forming the reading of each line. (Other translations: see "Sources consulted".)

## Line numbering
ETCSL composite labels, used as entry labels (`### <label>`); checked by `python3 -I ../sumerian_tools.py verify 5`.

## The parallels that matter for the commentary (the coordinator's list: "look for", never "translate as")
Gen 3:17–19 (the toil of the ground — here no curse: farming is a god-given instruction); Gen 9:20 (Noah `אִישׁ הָאֲדָמָה`); **Isa 28:23–29** (the farmer instructed by his God: ploughing, harrowing, sowing in rows, threshing by sledge, "this also comes from YHWH" ↔ FI 110–111); Deut 22:10 (ox and ass), 25:4 (the threshing ox ↔ FI 100); Lev 19:9, 23:22, Deut 24:19 (gleanings, the forgotten sheaf ↔ FI 79–80); Lev 19:19, Deut 22:9 (mixed sowing); Prov 20:4; Ruth 2–3 (the threshing floor at night, winnowing ↔ FI 104–109); the rites against mice and locusts (1 Sam 6:4–5; Deut 28:38–42; Joel 1) and the leaf rust (`שִׁדָּפוֹן וְיֵרָקוֹן`, Deut 28:22; Amos 4:9 ↔ FI 71); the stars that fix the season (FI 38; Gen 1:14); Prov 1:8 (a father's instruction).

## Sources consulted
(the translator adds)

## Decisions
(the translator adds: rendering decisions with reasons)

## Open decisions
(numbered; the translator adds)

## Proposals for the corpus renderings
(new terms that a later text will need; the coordinator merges them into `../renderings.md`)

## Progress
(drafting; review passes (a) fidelity, (b) consistency, (c) Hebrew; verify and check_bible_quotes results)

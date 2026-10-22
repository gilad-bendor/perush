# Project 6: The Debate between Hoe and Plough (ETCSL 5.3.1) → Hebrew

Round 3, run 1 (2026-10-21), creation corpus (`../corpus.md`). Siglum in the corpus parallels index: **H&P**.

## Scope
An OB Sumerian school debate (*a-da-min₃*): the humble Hoe, "child of the poor", and the Plough, the king's implement at the festival of the fields, insult each other and boast of their works; Enlil decides for the Hoe; praise to Nisaba. The whole composite: 201 entries (1–196, with 28A, 37A, 37B, 61A, 178A).

## Base text and sources
- **Base text (rank 1):** ETCSL c.5.3.1, `../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/transliteration.md` (from the TEI `c.5.3.1.xml`; CC BY-NC-SA). Copy each transliteration line exactly.
- **Lemmas and morph (rank 2):** ETCSL's TEI lemmas (`python3 -I ../../tools/sumerian_workbench.py lemmas|line ../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/c.5.3.1.xml FROM-TO`); ORACC: none: ORACC Q000760 has no text in the 2022 export; use ETCSL's TEI lemmas and `tools/sumerian_workbench.py line|morph` (parsed instances elsewhere), else "ניתוח שלנו"; ePSD2 (`… gloss`).
- **Rank 3:** ETCSL's English translation (`../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/translation.md`), read only after forming the reading of each line. (Other translations: see "Sources consulted".)

## Line numbering
ETCSL composite labels, used as entry labels (`### <label>`); checked by `python3 -I ../sumerian_tools.py verify 6`.

## The parallels that matter for the commentary (the coordinator's list: "look for", never "translate as")
Gen 2:5, 2:15, 3:23 (the work of the ground: the Hoe as the labourer of every season); Gen 4:2 (farmer and herder); Gen 4:17, 11:3–4 (the Hoe makes bricks, builds houses and a city); Gen 2:8–10 (setting up a garden, watering it, the well and the water-lift ↔ H&P 142–150); **Gen 8:21–22** (H&P 166–175: after the heavens were overturned and Enlil flooded the harvest, "Enlil did not abandon us", then "winter like harvest", "summer and winter" — a post-catastrophe promise of the seasons?); Lev 19:9–10, Deut 24:19–21 (orphan, widow, the poor glean ↔ H&P 45–47, 178A); Deut 22:10 (H&P 88: six oxen and four men); 1 Sam 13:20–21 (sharpening ploughshares; H&P 93–103 the broken tooth and the artisans); Isa 2:4 (implements); Prov 14:4; Prov 20:4 and Ecc 3:1–8 (the Plough's four months of work and eight of idleness, H&P 104–108); the genre on its own terms: school humour, high and low status, the verdict for the humble; Nisaba and the scribe who books the Hoe's work (189–193).

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
- 2026-10-22: header + 1–8 drafted (verify OK).
- 2026-10-22: 9–19 drafted (the Hoe's first speech; 13–17 fixed for 122–126).
- 2026-10-22: 20–37B drafted (the Plough's festival; 22 copied from S&W 176).
- 2026-10-22: 38–51 drafted (harvest, storehouses, the gleaners).
- 2026-10-22: 52–62 drafted (the Plough's insults).
- 2026-10-22: 63–79 drafted (the Hoe's reply: precedence, water works).
- 2026-10-22: 80–103 drafted (preparing the field; the Plough's team and repairs).
- 2026-10-22: 104–121 drafted (four months against twelve; the Plough's mishaps; the Hoe in the city).
- 2026-10-22: 122–141 drafted (122–126 = 13–17 in the positive; city, palace, cool houses, boatman).
- 2026-10-22: 142–165 drafted (the king's garden, the well, the watchtower; the thirsty in the steppe).
- 2026-10-22: 166–178A drafted (the catastrophe; "Enlil did not let us go"; winter and summer; the gleaners again).
- 2026-10-22: 179–196 drafted (the tools' quarrel; Enlil's verdict; Nisaba). **All 201 entries drafted.**
- 2026-10-22: `translation--intro.rtl.md` written; `sumerian_tools.py build 6` (201 lines, 7 footnotes).
- 2026-10-22: **review pass (a), fidelity** (every line read against its transliteration): 5 (ETCSL's "even" removed; *šag₄ … kar* literal), 28 (no first person in *-ši-*), 36, 50, 156 (dimensional infixes are in the verb: no parentheses), 155 (*u₃-* clause), 174 (*me-en-de₃* "we", not "for us").
- 2026-10-22: **review pass (b), consistency** (formulas 7 = 194, 8 = 63, 9–10 = 18–19, 62 = 159, 13–17 / 122–126, the refrain 138 = 141 = 150, 38 / 40, 60 / 90; every *ĝar* line has vocalized `שָׂם` (scripted); one Sumerian verb, one Hebrew verb, splits by sense recorded in Decisions): first-occurrence vocalization of `מַחֲרֵשָׁה` (6) and `אֶנְלִיל` (22); `פּוֹנָה` (20); `שְׁמָהּ` (185); plene `שיבולים` (48, 178A); 69 reworded (`כשמים` reads "like heaven").
- 2026-10-22: **review pass (c), Hebrew** (the clean translation read aloud, as a separate read-through): 133 `לעת קורם` → `לעת הקור` (`קורם` reads "their beam"); register even; no unintended biblical calques found beyond those noted in the apparatus (`הָבָה` 6, `אֶשְׁכְּנָה` 117, `שָׁמַט מִיָּד` 172, each discussed).

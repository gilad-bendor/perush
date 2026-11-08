# Round 6, run 1 – the Sumerian Bilgameš poems (report, 2026-11-06)

## Done
New project **`אפוס-גילגמש/3-השירים-השומריים/`** (project 3 of the Gilgameš corpus), five Sumerian poems whole, every recension ETCSL gives – **1,332 entries**:

| Key | Text | ETCSL | Entries | File(s) |
|---|---|---|---|---|
| HA | Bilgameš and Ḫuwawa A | 1.8.1.5 | 305 | `annotated-HA.rtl.md` |
| HB | Bilgameš and Ḫuwawa B | 1.8.1.5.1 | 138 | `annotated-HB.rtl.md` |
| BH | Bilgameš and the Bull of Heaven (3 versions) | 1.8.1.2 | 277 | `annotated-BH.rtl.md` |
| AG | Bilgameš and Aga | 1.8.1.1 | 117 | `annotated-AG.rtl.md` |
| DB | The Death of Bilgameš (Nibru, a second Nibru version, Me-Turan) | 1.8.1.3 | 495 | `annotated-DB-1.rtl.md`, `annotated-DB-2.rtl.md` |

- The plan's 1,381 counted ETCSL's `<l>` elements, which include the variant lines inside its manuscript notes; those are translated in the apparatus, not as entries.
- `translation.rtl.md` (generated: a general intro, an intro per text, and a pointer to Bilgameš, Enkidu and the Netherworld, which stays whole in `העולם-התחתון/4-…`, placed before the Death); print stub `הדפסה/אפוס-גילגמש/3-השירים-השומריים.rtl.md`; `project.md` (Parts 1–6, the review log, six parallels indexes); renderings §23–§23.9; `translator-brief.md`; `shared-lemmas.txt`; `אפוס-גילגמש/parallels-index.md` +243 rows (2,051).
- **The flood references' excerpt** (`סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/` §3, Death Me-Turan F 3–41, 123–128): copied into DB-2, 25 lines revised from the whole poem plus 4 reviewer fixes, applied to both copies (annotated + translation), identical by `bilgames_tools.py verify DB`.
- Sources: ETCSL 1.8.1.1, 1.8.1.2, 1.8.1.5, 1.8.1.5.1 and ORACC Q000361–Q000366 (lemma + morph), converted from the local zips, committed with READMEs.
- Tool: `אפוס-גילגמש/bilgames_tools.py` (imports `netherworld_tools.py`; ORACC aligned to ETCSL by content); `build_parallels_index.py` reads project 3.
- Process: three translators in sequence (HA → HB; BH → AG; DB-1 → DB-2), each with three passes; the coordinator merged proposals between them; one independent fidelity reviewer over all 1,332 entries (39 fixes: 23 brackets, 6 missing `?`, 3 omitted words, 2 persons, 1 genitive, 2 additions outside `( )`, 2 empty ellipses).

## Verification
- `bilgames_tools.py verify all --strict`: HA, HB, BH, AG, DB all OK (DB incl. the excerpt identity).
- `netherworld_tools.py verify GEN --strict`, `verify ER --strict`: OK. `אפוס-גילגמש/verify.py --strict`: 0 problems. `wisdom_tools.py verify --strict`: 0 problems.
- `tools/check_bible_quotes.py` on every file of the project, the corpus files, the flood references project and the edited shared files: 0 problems.

## Key findings
**The ancient mind.**
- Death and the name: Bilgameš sees one corpse float in the river and decides to "set up his name"; the Sumerian saying "the tall does not stretch to heaven, the wide does not cover the mountain" is a statement tied to the plot (the mountain he then goes to). Utu accepts his tears as the gift.
- Ḫuwawa's terrors are property: he hands them over one by one for gifts (a bride, a concubine, shoes) and is left defenceless; Gilgameš wants to spare him, Enkidu kills him, and Enlil is angry at the killing – he gives the dead guardian's auras to field, river, reeds, lion, palace and forests. Version B makes Ḫuwawa a child of mountain caves, set there alone by Utu, pleading to be useful as a guide.
- The Bull of Heaven has no marriage proposal: Inana holds the king so that he will judge in her temple; An gives the Bull out of fear; the king divides the carcass like a sacrifice (hide, guts, meat to the widows' sons, horns as oil flasks for Inana) and the poem praises the goddess he struck. The minstrel's mockery repeats the Bull's own words.
- Aga: one question in the same words to two councils with opposite answers; "bend the neck" against "stretch the neck over the wall"; the siege as comedy; the end repays a debt of life ("Aga gave me breath") – the captive king lives.
- The Death: the flood is where the gods fixed mortality ("since then no man shall live"); the son of a goddess gets rank, not life – governor of the netherworld, chief of the ghosts, a judge. The verbs carry the meaning (*ḫalam* "efface" for the lost *me*, the seed, the name not effaced; *zi* "rise": the king will not rise, the city rises, the river rises; *sa₂ dug₄*: he "reached" Ziusudra, death "has reached" him). The household is laid in the tomb with him, gifts are weighed out for each netherworld god, the Euphrates is diverted and the tomb hidden under it. Nibru ends praising Bilgameš, Me-Turan praising Ereškigala.
- Recensions: copyists of Ḫuwawa A borrowed lines of B (five variants of A are B's main text); the Dialogue of Pessimism 83–84 quotes words from both versions; SB VI reuses the Bull poem in detail but moves its motifs (the haunch, the guts threat, the horns' dedication).

**The Bible (the apparatus; shared motifs, none a source):** 1 Kgs 12:6–14 – Aga's two councils, the structure and the issue (the yoke) the same, the values reversed [divergence]; Job 14:12 – the Death's refrain `שכב, ולא יקום עוד` [equivalent]; Qoh 9:12 – fish and birds "held" in net and trap, the same verb (*dab₅* `אחז`); Deut 34:6 – the hidden grave; Gen 23:16, Deut 26:14 – weighing out for the dead [divergence]; Gen 6:3, 9:11, Isa 54:9 – the post-flood oath against human life [divergence]; Deut 20:5–8 – the muster exemptions; Qoh 4:9–12 – the threefold cord; 2 Sam 20:9–10 – the kiss that strikes; 1 Kgs 20:31–42, 1 Sam 15:33 – the spared captive; Job 40:15, Num 22:4 – the grazing Bull; Deut 14:29 – meat for widow and orphan; Lev 19:28 – scratching in mourning, the same verb, forbidden there. False echoes corrected against ETCSL's English: Ḫuwawa A 28–29 is a statement, not the question of Deut 30:12 / Prov 30:4; "as if he were a master chef" is a negation ("there being no master cook"); the Death's C7 is "counted with the gods", not "you will be a god".

## Decisions taken (minor, by the coordinator)
- One project for the five poems (not five), one reading translation in narrative order HA, HB, BH, AG, [GEN pointer], DB; labels as ETCSL (MT., N2., U3. prefixes).
- Renderings §23 before the first line; rulings on the translators' 46 open decisions in §23.6–§23.9, e.g. plural *ur-saĝ* `לוחמים` (Gen 6:4 avoided), *ur₂* `חיק` in the Ḫuwawa poems (a split from GEN's `שׁרש`), two axe words (*aga-silig*, *ḫazin*) both `גרזן` (recorded split), *di ku₅* `שפט משפט` (BH precedent), Ḫuwawa `חוּוָוָה` always vocalized.
- Gate licences widened in the tool, not the Hebrew bent: Magan `מָגָן` in the `גן` gate; *gi* / *gi-gi* in the `שוב` gate.
- The excerpt revised from the whole, in both files; the reviewer's borderline readings (HA 124A, 159; AG 53; DB E11 / F140; H16) left as drafted, defended in their apparatus.

## Questions for the user
None.

## Problems and skipped items
- No quota stop (range A, one agent at a time throughout; the gate said GO at every step).
- The rank-3 literature beyond ETCSL's English (George 1999/2003, Edzard, Cavigneaux & Al-Rawi 2000, Gadotti, Katz) is not available here; the translations rest on ETCSL + ORACC + the translators' own parsing.
- ORACC and ETCSL servers are unreachable; the local 2022 ORACC zip and 2006 ETCSL zip served.
- `sources_sync.py fetch`: 5 failures, none needed here (web.archive.org blocked: George 2007 score, Wasserman 2020 and their derivatives; ORACC Q000369 cdl.json for Enmerkar not found).

## Cross-corpus splits left for the lead
1. The flood references §8 (the Dynastic Chronicle, lines ~1284, 1291) still write Enki `אנכי` ("I"): fix to `אנקי` (outside this run's excerpt).
2. *di ku₅* = `שפט משפט` here (BH, DB) against the law corpus's *di* `דין`.
3. Ḫuwawa: `חוּוָוָה` (always vocalized) here against the OB tablets' `חוּוָוה` (corpus §1): align the OB tablets' spelling and trap.
4. *ur₂*: `חיק` (Ḫuwawa poems) / `שׁרש` (GEN); *a-ra₂* `דרך` with *ba* `מסר` (DB) / *ba* `חלק` (HA) – recorded splits by sense.
5. *ḫazin* / *aga-silig* both `גרזן` (recorded); *uzu* / *su* both `בשר`.

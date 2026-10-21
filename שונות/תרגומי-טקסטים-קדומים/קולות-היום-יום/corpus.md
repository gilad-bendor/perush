# Corpus: everyday voices → Hebrew (OB love lyrics, Sumerian proverbs, letters)

Round 2, run 7 of `../curated-translation-candidates.md` (STATUS §4, row 7), 2026-10-21, Claude Cloud.

## Goal
This corpus serves above all the guidelines' **second purpose, "the soul of the ancients"** (§1): how ordinary people in Mesopotamia loved, joked, advised, complained and wrote to each other, in their own words. The Bible comparison and echo control apply everywhere, with three biblical counterparts in view: **the Song of Songs** (the love lyrics), **Proverbs, Qohelet and Ben Sira** (the proverbs), and **the patriarchal narratives, the Joseph story and the family law of the Torah** (the letters; the proverbs on the household).

### Two purposes (guidelines §1)
- **The Bible:** the reserved Song-of-Songs and wisdom vocabulary (`renderings.md` §3–§5, checked by script) keeps the translation from manufacturing parallels and lets the real ones (*dādū* = `דּוֹדִים`, *ṣīḫtu* = `צְחוֹק`, *šumēlu* = `שְׂמֹאל`, *niĝ₂-gig* = `תּוֹעֵבָה`, the letter formula of Gen 32:5) show. `parallels-index.md` collects them by verse, the Song of Songs first.
- **The ancient mind:** the **הערות** explain each line on its own terms – the gods of love (Ištar, Nanaya and Muʾati) and the court rituals at which the songs were sung, the women's voices, the jokes and obscenities, the economy of the poor man's bread and salt, the school, the scribe's pride, the son far from his mother, the sick woman's prayer.

## The projects (the selection and its reasons)
| # | Folder | Texts | Base text | Lines |
|---|---|---|---|---|
| 1 | `1-שירי-אהבה/` | **The Old Babylonian (and Old Akkadian) love literature, all texts with a usable open base text:** the lyrics and dialogues LAOS 4 01–07, 10, 13, 14a–f, 15–18 (the divine love songs of Nanaya and Muʾati for Abī-ešuḫ, the New-Year song for Rīm-Sîn, the great dialogues "the faithful lover" (16, with its duplicate 04) and "like an apple of its season" (01), the Ištar–Dumuzi song of Taqšītum's library (07), the *irtum* series "Where is my loved one?" for Ammī-ditāna (06), the Kiš songs (13, 14a–f), the lewd dialogue 18, and the shorter 02, 03, 05, 17); **and the love incantations** LAOS 4 22 (the Old Akkadian Kiš incantation, "to the garden you come down") and 20, 23–26 (OB) – included because they share the songs' vocabulary and images (the garden, the flock, "look at me") and are the other half of the same "love literature". | ORACC **AkkLove** (Wasserman, = LAOS 4 = Wasserman 2016), CC0: transliteration, normalization, lemmas, English | 835 |
| 2 | `2-משלים-שומריים/` | **Proverb collection 1, complete** (194 proverbs, 348 lines); **and a selection from collections 2 and 3** (51 + 32 proverbs) chosen for a window on daily life (the poor man, the scribe, the fox, marriage and divorce, the house and the palace, debt; the slave girl, friendship, the merchant) and for their biblical parallels (the "abominations" of the gods ↔ `תּוֹעֲבַת יְהוָה`; the tongue; the false witness ↔ Prov 6:16–19; one fate for all ↔ Qoh 9:2). | ETCSL 6.1.01–03 + ORACC epsd2/literary Q000795–Q000797 (lemma + morph) | 348 + 92 + 60 = 500 |
| 3 | `3-מכתבים/` | **The Sumerian letters of private life:** the Message of Lu-diĝira to his mother (5.5.1: a son describes his mother to the courier in five images), Ugubi to his mother (3.3.07), Aba-taḫ-lugalĝa to his brothers (3.3.06: who will look after mother), Ur-saga to the king (3.3.01: "let no one take my father's house"), Inanaka's letter-prayer to the healing goddess (3.3.10), Gudea to his personal god (3.3.20), a merchant's travel account (3.3.08), and two letters of a schoolmaster (3.3.11–12: "don't neglect Sumerian"). **The OB Akkadian private letters were not obtained**: CDLI (`cdli.earth`) answered 503 all day (2026-10-21), and Archibab is not on the allowlist; recorded in `handoff--round2-run7.md` for a later run. | ETCSL 5.5.1, 3.3.x + ORACC Q000775, Q000573–Q000592 | 178 |

Reading order: the love songs (project 1, ordered from the courtly divine songs to the private dialogues and the incantations), the proverbs, the letters.

## Shared conventions
- `renderings.md` (this folder) binds all three projects; it inherits the Gilgameš corpus (Akkadian love and body words) and the temple / lament / creation corpora (Sumerian); §0.3 lists the names shared with the other Round 2 runs (5, 6).
- Labels: project 1 uses the ORACC labels without spaces (`o.i.12`, `r.3'`); projects 2–3 ETCSL's composite line numbers (with the segment letter in the proverbs: `A10`, `D115`), and the proverb number (`1.9`) as the unit of the clean translation.
- One annotated file per text (the small ones grouped: `annotated-14.rtl.md`, `annotated-20-26.rtl.md`, `annotated-letters.rtl.md`; units marked `<!-- unit: KEY -->`); the clean `translation.rtl.md` of each project is generated (`kol_tools.py build`).
- The transliteration line of an entry may be written `` `@` `` and filled from the base text by `kol_tools.py fill` (never retyped).

## Tools (in this folder)
- `kol_tools.py` – `units`, `data UNIT [FROM [TO]]` (the translator's line data), `fill FILE`, `verify [UNIT|PROJECT …] [--strict]` (coverage, transliteration = base, reserved and gated strings licensed by the line's transliteration + normalization + lemmas, name traps, letter formulas, identical lines, translation = `>` lines), `build PROJECT`, `grep (PROJECT|all|every) '<regex>'`, `lookup '<regex>'` (how earlier corpora rendered a word).
- `build_parallels_index.py` – builds `parallels-index.md` from the `הקבלה` bullets of all annotated files (the Song of Songs first, then Proverbs, Qohelet, Genesis …); the hand-written key findings above its marker line are kept.
- `translator-brief--everyday.md` – the brief for the translators of this corpus.

## Status
**First draft complete (2026-10-21):** project 1 835 lines, project 2 500 lines, project 3 178 lines – all drafted, three review passes each, `kol_tools.py verify LOVE PROV LET` OK, `check_bible_quotes.py` clean, translations built, `parallels-index.md` (492 rows), print stubs in `../הדפסה/קולות-היום-יום/`. Details: each `project.md` ("Progress", "Open decisions", "Key findings") and `handoff--round2-run7.md`.

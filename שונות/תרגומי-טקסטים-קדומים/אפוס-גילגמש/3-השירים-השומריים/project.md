# Project 3: the Sumerian Bilgameš poems (Round 6 run 1, 2026-11-06)

## Scope
Five Old Babylonian Sumerian poems about Bilgameš (= Gilgameš), whole, every recension ETCSL gives:

| Key | Text | ETCSL | ORACC | Entries | File(s) | Labels |
|---|---|---|---|---|---|---|
| HA | Bilgameš and Ḫuwawa, Version A ("The lord to the mountain of the living one") | 1.8.1.5 | Q000365 | 305 | `annotated-HA.rtl.md` | 1–202 with ETCSL's pluses (9A, 43A–43f, 61A–61d, 148A–148AAA …) |
| HB | Bilgameš and Ḫuwawa, Version B ("Ho, hurrah!") | 1.8.1.5.1 | Q000366 | 138 | `annotated-HB.rtl.md` | 1–168 (gaps) |
| BH | Bilgameš and the Bull of Heaven | 1.8.1.2 | Q000362 | 277 | `annotated-BH.rtl.md` | the version of unknown provenance `A1…`, `B1…`; Me-Turan `MT.A1…MT.D…`; the Ur III fragment `U3.A1…U3.B4` |
| AG | Bilgameš and Aga | 1.8.1.1 | Q000361 | 117 | `annotated-AG.rtl.md` | 1–115 (99A, 102A) |
| DB | The Death of Bilgameš | 1.8.1.3 | Q000363 | 495 | `annotated-DB-1.rtl.md` (Nibru `A1…I…`; another Nibru version `N2.1–N2.42`), `annotated-DB-2.rtl.md` (Me-Turan `MT.A1…MT.K12`) | |

**Total: 1,332 entries** (the plan's 1,381 counted ETCSL's `<l>` elements, which include the variant lines inside the manuscript notes: those are kept in the backticked line's parentheses and translated in the apparatus, not as entries).

**Not here:** Bilgameš, Enkidu and the Netherworld (ETCSL 1.8.1.4) stays whole in `../../העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון/` (key GEN of `netherworld_tools.py`); the reading translation points to it between Aga and the Death (`translation--pointer-GEN.rtl.md`). Its Hebrew binds the shared words and formulas (renderings §23.1).

**The flood references' excerpt** of the Death of Bilgameš (`../../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md` §3, Me-Turan F 3–41 and F 123–128, 42 lines) is copied into `annotated-DB-2.rtl.md` at MT.F…, and kept identical by `bilgames_tools.py verify DB` (the excerpt's merged entries `F 5–6` etc. are compared line by line). Each revision is applied to both files at once (guidelines §5.2, "Copying an excerpt … is a chance to revise it").

## Base text
`../../sources/ETCSL/1.8.1.{1,2,3,5,5.1}--…/transliteration.md` (from the local OTA zip, CC BY-NC-SA; committed), with ORACC epsd2/literary Q000361–Q000366 lemma + morph (`../../sources/ORACC/epsd2-literary--Q0003xx--…/`, CC0; from the local 2022 zip – the ORACC server is not reachable from the cloud), aligned to ETCSL **by content** (`bilgames_tools.py`, difflib: ORACC has the notes' variant lines as lines of their own and many unlabelled lines). Rank 3: ETCSL's English (`translation.md` beside each transliteration); for the Death's Me-Turan F lines also the flood references' apparatus. Not available here: George 1999 / 2003, Gadotti, Edzard 1990–91 (Ḫuwawa), Cavigneaux and Al-Rawi 2000 (Me-Turan: Death, Bull), Fleming and Milstein 2010, Katz 2010 (Aga).

## Line numbering
ETCSL composite numbers; segments and versions as the table above (`bilgames_tools.py lines KEY FROM TO`). The literature cites Ḫuwawa A by ETCSL's (= Edzard's) numbers; Death of Bilgameš by Cavigneaux–Al-Rawi's segments (Me-Turan) and Civil's / George's "N" (Nibru).

## Related texts already translated (consult; the Sumerian differs from every Akkadian adaptation – each difference is a finding)
- **GEN** (`../../העולם-התחתון/4-…/annotated-1…4.rtl.md`): the same names, formulas and vocabulary (`python3 -I bilgames_tools.py rel KEY FROM TO` lists the near-identical lines with their Hebrew). The last Me-Turan line of GEN opens "Bilgameš and Ḫuwawa".
- **The Akkadian epic** (`../1-הנוסח-הבבלי-התקני/`, `../2-הנוסח-הבבלי-הקדום/`): Ḫuwawa A ↔ OB III (Yale) 140–160 (the "who can go up to heaven" speech; the name), OB Ishchali, Schøyen₂, SB II–V (the cedar forest, the auras); the Bull of Heaven ↔ SB VI; the Death ↔ SB VIII (the funeral; the river burial is not there) and SB XI 1–208 (Ziusudra / Ūta-napišti); Aga has no Akkadian counterpart.
- **Ḫuwawa A 28–29** is quoted in Akkadian in the Dialogue of Pessimism 83–84 (`../../ספרות-החכמה-והצדיק-הסובל/5-…`): the Sumerian takes the same Hebrew where the words are the same (guidelines §5.2, "A formula takes the same Hebrew across languages").
- **The Sumerian King List** (flood references §1): Gilgameš, Aga, Enmebaragesi, Kiš.
- **Enmerkar and the Lord of Aratta** (`../../אגדות-מלכים/1-…`): Unug, Kulaba, Eana, the auras (*me-lem₄* `זוהר`, *ni₂* `אימה`).

## Comparisons to watch (look for; never translate toward them; renderings §23)
HA: death and the wall (Ps 49:8–13, Qoh 1:4, Job 14:10–12; "who goes up to heaven" Deut 30:12, Prov 30:4); making a name (Gen 11:4, 2 Sam 8:13, Isa 56:5); the cedar felled (Isa 14:8, 37:24; Ezek 31:3–18); the guardian's auras (Gen 3:24); *kur lu₂ til₃-la* "the land of the living man" (Ps 116:9, Isa 38:11 `אֶרֶץ הַחַיִּים`; GEN MT uses `ארץ האיש החי`); the oath by the mother and father (Gen 31:53?); the plea for life of the defeated (1 Kgs 20:31–34, Ahab and Ben-Hadad; 1 Sam 15:32–33). HB: the same. BH: the goddess's desire and its refusal (Gen 39), the divine bull, meat for the poor and the orphan (Deut 14:29), the haunch thrown (?). AG: **the elders and the young men consulted (1 Kgs 12:6–14; Rehoboam)** – here the young men are right: a [divergence] of the deepest kind; the siege, the envoy, the man on the wall (2 Kgs 18:17–37); a debt of life repaid (1 Sam 24:18–20). DB: lying down without rising (Job 14:12 `וְאִישׁ שָׁכַב וְלֹא יָקוּם`); the death-dream and the divine council (1 Kgs 22:19–22; Job 1–2); "no man lives for ever" (Ps 89:49); the king told he will die (2 Kgs 20:1); the netherworld rank of the dead king (Isa 14:9–11; Ezek 32:21–32); the burial with the household (contrast Gen 23, 49:29–33, 50); the river diverted for the tomb; the gifts to the netherworld gods (Deut 26:14); the flood survivor (Gen 9:28–29).

**The ancient mind (for the הערות):** the fear of an anonymous death and the cure of a name; the hero who thinks of death in his prime (HA 20–33); the god of justice (Utu) as the patron of a just expedition; the seven warriors as the god's gift; the guardian's auras as clothes he can take off; the trickery and the pity; the gods' anger at killing; the goddess refused; the king's two councils; the debt of life; the dream of the divine assembly; the place of a dead king among the dead; the household who go with him; the tomb under the river.

## Parts (one translator at a time; range A: one agent)
1. **HA** whole (305), in two parts (1–148, 148A–202); then **HB** whole (copies HA wherever the Sumerian is the same).
2. **BH** whole (277), then **AG** whole (117).
3. **DB** whole (495): DB-1 (Nibru and N2, 213), DB-2 (Me-Turan, 282; the 42 excerpt lines are prefilled from the flood references: revise them, and list every revision under "Excerpt revisions", the coordinator applies it to the flood file).
4. An independent fidelity review of each text.

## Open decisions
(numbered; the translators add)

## Proposals for the corpus renderings
(the translators add, per part)

## Progress
- 2026-11-06: sources converted (ETCSL 1.8.1.1, 1.8.1.2, 1.8.1.5, 1.8.1.5.1; ORACC Q000361–Q000366), `bilgames_tools.py`, skeletons of all six annotated files (1,332 entries), the excerpt copied into DB-2, renderings §23 fixed (the coordinator).

## Parallels index
Per text, under the headings `### Parallels index (Tablet HA)`, `… (Tablet HB)`, `(Tablet BH)`, `(Tablet AG)`, `(Tablet DB)`, columns exactly `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |` (Bible = the vocalized verse(s) in backticks followed by the reference); merged into `../parallels-index.md` by `../build_parallels_index.py`.

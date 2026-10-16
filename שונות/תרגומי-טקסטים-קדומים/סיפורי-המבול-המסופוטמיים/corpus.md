# Corpus: the Mesopotamian Flood Stories → Hebrew

Read `../translation-guidelines.md` first, then this file, then the project's own `project.md`.

## Goal (the user's request, 2026-10-16)
Translate **the full Mesopotamian flood story**, and every other Mesopotamian flood narrative, into Hebrew.
"Full" means the story whose climax is the flood, from its beginning, not just the episode that Gilgameš XI retells.
That story is **Atra-ḫasīs**: the creation of man, the noise, the plagues, the flood, and the new order after it.

The user's decisions so far:
- partial niqqud (guidelines §6.2);
- Uruk = `אוּרוּךְ` with a note that it is the biblical `אֶרֶךְ` (בראשית י:י).

## The texts and how they relate

| # | Project folder | Text | Language, date | Relation |
|---|---|---|---|---|
| 1 | `1-אתרחסיס/` | **Atra-ḫasīs**, Tablets I–III, the whole epic | Akkadian; OB Sippar recension (Ipiq-Aya, c. 1640 BCE) + MB, NA and SB recensions | **The full story.** Creation of man from clay and a slain god's blood → noise → plague, drought, famine → flood → a new order (barrenness, infant death, celibate priestesses). |
| 2 | `2-גילגמש-XI--סיפור-המבול/` | **Gilgameš SB XI 1–208**: Ūta-napišti's flood story | Akkadian; SB (late 2nd mill.; mss 7th cent.) | A first-person reworking of Atra-ḫasīs III, often verbatim. XI 197 even calls the hero "Atra-ḫasīs". |
| 3 | `3-סיפור-המבול-השומרי--זיוסודרה/` | **The Sumerian Flood Story** ("Eridu Genesis"): Ziusudra | Sumerian; OB mss (Nippur, Ur) | Creation of people and animals → antediluvian cities → flood → Ziusudra granted eternal life in Dilmun. |
| 4 | `4-נוסחי-מבול-אכדיים-נוספים/` | **Other Akkadian flood versions**: the Ark Tablet, Nippur (CBS 13532), Ugarit (RS 22.421 – first person!), Ḫattuša, NA Nineveh (U, W), LB (z), MB Babylon fragments | Akkadian; MB–LB | Independent recensions. The Ark Tablet gives a **round** boat with exact measurements; Ugarit is told in the first person. |
| 5 | `5-ברוסוס-ואבידנוס--קסיסותרוס/` | **Berossus** fr. 7 (via Alexander Polyhistor) and **Abydenus**: Xisouthros | Greek; 3rd cent. BCE (Berossus, a Babylonian priest) | The Babylonian story in Hellenistic form: a dream, a boat, three bird sendings, landing in Armenia. Closest in details to Genesis. |
| 6 | `6-אזכורי-המבול/` | **Flood references**: Sumerian King List; Instructions of Šuruppag (prologue); Death of Bilgameš (Ziusudra episode); Rulers of Lagaš (opening); Poem of Early Rulers; Gilgameš I 1–10 ("he brought back a report from before the flood"); Erra and Išum I (Marduk on the flood) | Sumerian, Akkadian | Not narratives of the flood but the tradition around it: the flood as an epoch boundary, the antediluvian sage-kings, the survivor's fame. |

**Reading order for the commentary:** 1 → 2 → 4 → 3 → 5 → 6.

## Shared conventions for this corpus
- **`renderings.md` in this folder is shared by all six projects.** Names, formulas and key terms must be identical across the corpus. The point of the corpus is comparison, and a parallel the translation can't show is lost.
- **Shared lines get identical Hebrew.** When Gilg. XI repeats a line of Atra-ḫasīs III (or the Ark Tablet, or Ugarit), the Hebrew must be identical wherever the Akkadian is, and differ exactly where the Akkadian differs. Each such line is marked in the apparatus: `[מקבילה: אתרחסיס III i 22]`.
- Each project keeps its own `renderings.md` for words used only in it. A project translator does **not** edit the shared file. Instead they list proposed additions in their `project.md` under "Proposals for the shared renderings". The corpus coordinator merges them.
- **Parallels index:** each project keeps its index (guidelines §7.3). `parallels-index.md` here merges them into one table ordered by Genesis verse. This is the main product for the commentary.

## Status
All six projects are complete as first drafts, reviewed by their translators and harmonized across the corpus (2026-10-16; see `harmonization-log.md`). The open items of each project (e.g. comparison with Wasserman & Cohen 2026 if it is bought; the Sumerian cruxes) are listed in its `project.md`.

| # | Project | Status |
|---|---|---|
| 1 | Atra-ḫasīs I | complete (first draft), harmonized: ll. 1–416 + colophon, 3 review passes (eBL 1–333, SEAL 334–416) |
| 1 | Atra-ḫasīs II | complete (first draft), harmonized: 484 numbered lines (SEAL segments A 1 – I 7i) + C₀ iv 1′–7′ appendix |
| 1 | Atra-ḫasīs III | complete (first draft), harmonized: cols. i–viii + colophon, C₀ iv 8′–19′ appendix (Wasserman 2020 / SEAL 1517), 3 review passes |
| 1 | Atra-ḫasīs, whole epic | `1-אתרחסיס/translation.rtl.md`: one reading file of Tablets I–III, **generated** from `translation-I/II/III.rtl.md` (edit those, then run `python3 -I 1-אתרחסיס/build_translation.py`, which rebuilds the file and verifies every numbered line against its source) |
| 2 | Gilgameš XI 1–208 | complete (first draft), harmonized, 3 review passes |
| 3 | Sumerian Flood Story | complete (first draft), harmonized: 89 ETCSL lines + 32 Ur ms. lines; cruxes still to check against Civil 1969 / Peterson 2018 |
| 4 | Other Akkadian versions | complete (first draft), harmonized: Ark, C₀, J, I/I₁/I₂, J₁, W, BM 38917, U, z (274 entries) + synoptic motif table |
| 5 | Berossus, Abydenus | complete (first draft), harmonized: 203 units (Oannes, king lists, flood fr. 7 Greek + Armenian, Abydenus) |
| 6 | References | complete (first draft), harmonized: 9 texts (King List, Šuruppag, Death of Bilgameš, Rulers of Lagaš, Early Rulers, Gilg. I 1–28, Erra I 126–162, Dynastic Chronicle, Uruk List of Kings and Sages) |

### Corpus-level files
| File | What |
|---|---|
| `מבוא.rtl.md` | The Hebrew entry page for readers of the commentary: what the collection is, the six texts, a reading order, the marks, headline findings. |
| `parallels-index.md` | All six parallels indexes merged into one table ordered by Genesis verse (Gen 1–11, then Gen 12–50, then the rest of the Bible), with "Key findings for the commentary" at the top. **The main product for the commentary.** Bible quotations checked with `check_bible_quotes.py`. When a project's parallels index changes, update this file too. |
| `renderings.md` | Shared renderings, binding for all projects. |
| `harmonization-log.md` | The harmonization pass of 2026-10-16. |

## Still missing (known texts not available)
- Akkadian version of the Instructions of Šuruppag, and the bilingual (Emar/Ugarit) Ballad of Early Rulers: no open edition (see `6-אזכורי-המבול/project.md`).
- Lambert & Millard 1969 (paid), for the classic composite numbering of Atra-ḫasīs. Not needed while eBL and SEAL cover the text.

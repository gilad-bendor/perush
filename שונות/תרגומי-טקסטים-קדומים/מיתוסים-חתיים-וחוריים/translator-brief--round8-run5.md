# Translator brief: Round 8 run 5 – the vanishing-god myths, LAMMA and Silver, the Hittite Gilgameš

Written 2026-11-14 by the run's coordinator, before the first line. It adds to `translator-brief--myths.md` (read it in
full: it is binding, with `../חוקים-ובריתות/translator-brief--hittite.md` and `../translation-guidelines.md`, whose ★ rules
of §5.2 bind you). Read `renderings.md` of this corpus in full, **especially M4** (this run's pre-set terms) and §H2–§H6.

## 1. The texts and keys (`../tools/hittite_tools.py`; base: the HPM "Mythen der Hethiter" editions, Rieken et al.)
| KEY | Text | Project folder | Clauses |
|---|---|---|---|
| SG | The Sun-god's disappearance and return (CTH 323.1, + the small 323.2 as `2:`) | `5-טליפינו-והאלים-הנעלמים/` | 219 |
| LI | The Storm-god in Liḫzina (CTH 331.1, + 331.2 as `2:`) | same | 104 |
| AZ | Anzili and Zukki (CTH 333) | same | 104 |
| MU | The Storm-god's *mugawar* (the invocation; CTH 325) | same | 274 |
| LA | The Kingship of LAMMA (CTH 343.1–343.6) | `2-מחזור-קומרבי/` | 223 |
| SI | The Song of Silver (CTH 364.1–364.6) | same | 193 |
| GI | The Hittite Gilgameš (CTH 341.III.1–19) | `6-גילגמש-החתי/` (new) | 611 |

Labels: an edition alone = HPM's clause number (`AZ 17`, `MU 120`); several editions = `<part>:<clause>` (`SG 1:12`,
`SG 2:3`, `LA 3.1:4`, `GI 7:20`). Every edition (part) gets its own `## ` heading with its CTH number, every HPM § too
(`## CTH 341.III.1, § 2 – …`, a short Hebrew title after the dash).

## 2. How to work
- **Skeletons** with every label and the composite filled are in the coordinator's scratchpad (`skel-<KEY>.md`, path in
  your prompt). Copy each section into `annotated-<KEY>.rtl.md` as you draft it, and **save after every section** (a quota
  stop loses only what is not on disk). The file starts with `# <title> – תרגום מבואר`, then a Hebrew intro paragraph
  (as `5-…/annotated-TE.rtl.md`), then the sections. Also write `translation--intro-<KEY>.rtl.md` (as TE's).
- `python3 -I -B tools/hittite_tools.py data KEY FROM TO` before each section: the words with TLHdig's glosses, every
  manuscript, the names / gates / formulas that apply, and **the "similar" lines of every other key with their Hebrew** –
  copy their Hebrew where the Hittite is the same (above all TE's, for the vanishing-god myths).
- `tr KEY FROM TO` (HPM's German) **only after** drafting a section; record differences in **תרגומים**.
- `verify KEY` after each section; `verify KEY --strict` and `tools/check_bible_quotes.py <your file>` before hand-off.
- **A digit glued to a word in the composite** (`iyazi1`, `šann2=a`, `]10`) is HPM's footnote number, not text: ignore it.
- **Broken lines**: translate what is there; an entry whose composite is only `[ ... ]` gets `> […]` and no apparatus.
  Partial restorations follow the corpus rule (`renderings.md` after M2): a sign or an ending restored → no bracket.
- Unvocalized, plene, from the first line (★); vocalize names at their first occurrence in each file (★ names always).
- Print every Bible verse before quoting it (`tools/check_bible_quotes.py --show <book> "<ch> <v>"`), and quote as
  `` `…` (ספר פרק:פסוק) ``.

## 3. What to look for (never "translate as"; read the transliteration first)
- **SG, LI, AZ, MU – the vanishing gods.** The same Old Anatolian scheme as Telipinu: the god leaves in anger, the land
  freezes or withers, the search, the ritual that soothes and calls him back. SG: Ḫaḫḫima "Torpor" seizes the land and
  even the gods; the Sun-god held captive. MU: an invocation (*mugawar*) with offerings and the "path" strewn for the god's
  return. Copy TE's Hebrew for every repeated motif. Echoes: Ps 44:24, 78:65 (the god roused), Jer 14, Joel 1, Hag 1 (the
  withering), Deut 28:23–24, Job 37:10 / 38:29–30 (frost, ice), Ps 147:16–17 (snow and frost before his cold).
- **LA – LAMMA made king.** Kumarbi's cycle again: a god raised to kingship in heaven who despises the gods and stops their
  offerings, until Ea and the Storm-god bring him down. Compare KU (the generations of kings in heaven) and, in words only,
  Isa 14:12–15, Ezek 28:2 (the king who exalts himself), Ps 82:6–7.
- **SI – Silver.** The fatherless boy mocked by his playmates, his mother's answer, his search for his father Kumarbi, his
  might over Sun and Moon. Compare, in words only, Judg 11:1–2 (Jephthah, driven out as a son of another woman).
- **GI – the Hittite Gilgameš.** The gods fashion Gilgameš (*šamnai-* `עיצב`, ALAM `תואר`: M4) – the Bible's creation words
  are reserved (`ברא`, `יצר`, `צלם`, `דמות`); his giant measures (cubits: `אַמָּה`); his oppression of Uruk; Enkidu; the
  journey to the cedar forest and Ḫuwawa; the Bull of Heaven; Enkidu's dream and death; the search for Ullu (= Ūta-napišti)
  and Šiduri and Ur-šanabi. **The Gilgameš corpus's Hebrew is the model**: its names (`../אפוס-גילגמש/renderings.md` §1)
  bind you; where the Hittite retells a scene of the SB or OB epic, read the Akkadian corpus's Hebrew for it
  (`../אפוס-גילגמש/1-…/annotated-*.rtl.md`, `2-…`) and use the same Hebrew wherever the Hittite says the same thing; the
  apparatus records where the Hittite adapter kept, changed or dropped the Akkadian (the corpus's translator owns the
  [divergence]s). Gen 6:1–4 (the giants), Gen 2–3 for the creation of Enkidu (if preserved): in the apparatus only.
- The ancient mind (**הערות**): what the Hittite audience heard – the Hurrian dress of the gods, the festivals, the magic,
  the humour, how a foreign epic was retold for Ḫattuša.

## 4. Hand-off
In the project's `project.md`, under `## Proposals`, a section `### Round 8 run 5, <your role>, <KEYS>`: the fixed strings
(copy byte for byte), every new rendering, every pre-set row you changed (with the reason), gate or name bugs (escaped with
`[היתר שער: …]` / `[היתר שם: …]` and reported, never written around), cruxes, and the parallels for the index. Then report
to the coordinator in a few lines (lines drafted, verify result, the main proposals). Do not run git; do not edit
`renderings.md`, the tool or another key's files.

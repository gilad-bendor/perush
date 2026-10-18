# Project: the Laws of Ur-Namma (prologue, laws, epilogue) → Hebrew

Corpus: `../corpus.md`, project 6. Read `../../translation-guidelines.md` (§5 Sumerian rules), `../corpus.md`, `../renderings.md` (**§5, §6.1, §6.3** and the merged notes), LH's `renderings.md` §1–§4, and the Parts of LE, MAL and **Lipit-Ištar** (`../5-חוקי-ליפית-אישתר/project.md`, Parts T5–T6: the Sumerian legal Hebrew) first.

## Scope
- **CDLI P432130 composite** (after Civil 2011 and Wilcke 2014): prologue 1–181, laws 181.a–474 and the additional sections b001–b038, c001–c032, d001–d043, e001–e029, f001–f008 (Civil's laws, chiefly from the Schøyen tablet MS 2064), epilogue g009–g028′: **628 labelled lines** (many `[...]`). Sumerian, Ur III (Ur-Namma or Šulgi, 21st c. BCE), OB copies (Nippur Ni 3191, Sippar Si 277, Ur, MS 2064 …).

## Base edition and sources
- **Rank 1:** CDLI P432130 + exemplars linked to it (`../../sources/CDLI/P432130--Laws-of-Ur-Namma-composite/`), with CDLI's variant notes.
- **Rank 2:** ePSD2 (`../../sources/ORACC/epsd2-royal--Q000947--Laws-of-Ur-Namma/`: lemmas + morph for the prologue and §1–§11 of the older RIME composite; the bulk zips), ETCSL for formulas, the LH/LE/MAL/LI Hebrew (`../laws_lookup.py`).
- **Rank 3:** CDLI's English. **Not obtained:** Civil 2011 (CUSAS 17), Roth 1997, Wilcke 2014, Finkelstein 1969, Frayne 1997.

## Line numbering and § concordance
- CDLI labels (`### 181.a`, `### 127a`, `### b002`, `### g028'`).
- **The composite has no § marks.** Laws are headed `## §N (first–last): heading` with **Roth 1997's number** where the law is one of Roth's §1–§37 (mapped by content: ePSD2 Q000947 labels §1–§11; the rest from the standard order, from memory, to be confirmed: §1 homicide, §2 robbery, §3 detention, §4–5 slave marriages, §6 the young man's betrothed deflowered, §7 she follows another man, §8 the slave-woman deflowered, §9–11 divorce / the widow, §13–14 accusations and the River ordeal, §15 the son-in-law, §17 the escaped slave, §18–22 bodily injuries, §25–26 the slave-woman and her mistress, §27–28 the witness, §29–31 fields; the order after §22 is uncertain), and **`## חוק (first–last): heading`** for laws without a Roth number (Civil's additions; cite by composite line). The concordance goes in the translator's Part section; uncertain mappings are open decisions. `laws_verify.py UN` checks that each heading's `(first–last)` equals its entries.

## Annotated files
| File | Content | Lines |
|---|---|---|
| `annotated-1--prologue.rtl.md` | prologue | 1–181 (186) |
| `annotated-2--laws.rtl.md` | laws | 181.a – f008 (421) |
| `annotated-3--epilogue.rtl.md` | epilogue | g009–g028′ (21) |

## Parallels to watch (preliminary)
- Prologue: the standard measures (*ba-ri₂-ga*, *ban₂*, *sila₃*, the shekel and mina weights) ↔ Lev 19:35–36; Deut 25:13–16; freedom (*ama-ar-gi₄* `דרור`) for Umma, Marad … ↔ Lev 25:10; **"the orphan was not delivered to the rich man, the widow to the powerful man, the man of one shekel to the man of one mina, the man of one sheep to the man of one ox"** ↔ Exod 22:20–23; Deut 10:18; 24:17; 27:19; Lev 19:15; "I removed evil, violence and the cry for justice" ↔ Gen 18:20–21; Exod 22:22.
- Laws: §1 "if a man commits a homicide, that man shall be killed" ↔ Exod 21:12; Gen 9:6; §2 robbery; §3 detention (↔ Exod 21:16); §4–5 slave marriages (↔ Exod 21:4); §6–8 the betrothed and the slave-woman deflowered (↔ Deut 22:23–29; Lev 19:20–22); §9–11 divorce payments; §13–14 the River ordeal (↔ Num 5); §15 the son-in-law; §17 the escaped slave returned (↔ Deut 23:16–17); **§18–22 and the new injury laws (bone, nose, skull, eye, tooth): money for limbs ↔ Exod 21:18–27, 23–25** (`עין תחת עין` – `תחת` reserved; the Torah's talion vs UN's silver); the slave striking a free man (head half-shaved, paraded) and the free man beating a slave (↔ Exod 21:20–21, 26–27); the man's daughter struck and miscarrying (↔ Exod 21:22–23: "if she died, that man shall be killed"); the slave-woman struck ("a slave for a slave", ↔ `תחת`); the slave-woman who curses / strikes her mistress (salt in her mouth; ↔ Gen 16:4–6; Prov 30:23); the false witness (↔ Exod 23:1; Deut 19:16–21); the fields (↔ Exod 22:4–5); the hired ox (↔ Exod 22:13–14); daughters inherit when there is no son (↔ Num 27:8); the deposit of barley in another's house broken into (↔ Exod 22:6–8); the wife left behind six months (↔ Deut 24:5?); the ox lost from the pen (↔ Exod 22:9–12; Gen 31:39).
- Epilogue: the curse on whoever erases the inscription (↔ Deut 27–28; LI and LH epilogues).

## Decisions (coordinator)
1. Corpus renderings §6.3 and LI's Parts T5–T6 bind every Sumerian legal formula (`אם`, `איש`, `ישקול`, `יהרג`, `יחליף`, `מחץ`, `דרור`, `יתום`, `אלמנה`, `בן חורין`, `בחיקה שכב`, `שבועה`, `הנהר` …).
2. Reserved and gated words as in LE/MAL/LI (`laws_verify.py`).

## Plan
| Run | Content | File |
|---|---|---|
| T7 | laws 181.a – f008 | 2 |
| T8 | prologue, epilogue; translation | 1, 3 |

## Status
Not started (2026-10-18).

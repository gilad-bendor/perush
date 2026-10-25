# Project 8: the Hittite Laws (CTH 291–292)

## Scope
All of the Hittite Laws, in three units (`../../tools/hittite_tools.py` keys):
- **HL1** – the first tablet, *takku LÚ-aš* "If a man", HL 1–100, in its **standard 13th-century text** (CHiL CTH 291.2,
  571 clauses; the sections are CHiL's, titled with Hoffner's HL numbers; CHiL has no 49 here: it is in PT § XLI). The
  **Old Hittite version** (CHiL 291.1, KBo 6.2 = KBo 22.62+, 16th c., 491 clauses) and the deviating versions 291.3–5 are
  witnesses: `data HL1` prints them at each §, and the apparatus notes every difference that changes the meaning (the
  tariffs, the penalties, the formulas): the OS wording is the oldest form of the law.
- **HLPT** – the **late parallel text** KBo 6.4 (CHiL CTH 291.PT, 206 clauses, §§ I–XLI; scribe Ḫanikkuili, 13th c.), a
  reworked version of HL 1–49 with its own § numbers (I–XLI, "cfr. HL n"). It holds § IV, the corpse found in the open
  field and the distance measured to the nearest town (↔ Deut 21:1–9). Translated as its own text; its Hebrew follows HL1's
  wherever the Hittite is the same.
- **HL2** – the second tablet, *takku GIŠ.GEŠTIN-aš* "If a vine", HL 101–200 (with the a/b sub-paragraphs): **our
  composite** from TLHdig's 37 manuscripts (`composite-HL2.tsv`; KBo 6.26, KBo 6.10+, 6.11, 6.12, 6.13+, KBo 25.85+, KUB
  29.23+, 29.33+ …), labels `<§>.<n>`, with the lead manuscript of each line and its duplicates, every restoration from a
  duplicate named in the `note` column.

## Base
- CHiL: `../../sources/HPM/CHiL--CTH-291.*` (HPM, CC BY-SA 4.0; Italian translation = rank 3).
- TLHdig 0.3: `../../sources/TLHdig/CTH-292/` (CC BY 4.0; German word glosses; no translation).
- Rank 3 / 5 (consult after drafting): CHiL's Italian (HL1, HLPT); for HL2 none open – Hrozný 1922 (*Code hittite*, PD,
  archive.org `codehittiteprove01hroz`, French; rank 5, old readings) and Zimmern & Friedrich 1922 (PD, German); Hoffner
  1997 (©, records only); the Chicago Hittite Dictionary per word (free volumes L–N, P, Š; quotes many laws with
  translation).

## Line numbering
HL1 / HLPT: CHiL's clause numbers ("kola"), one Hebrew line per clause; the § in the `## ` heading (`## §5 – …`; HLPT
`## § IV (cfr. HL 6) – …`). HL2: `<§>.<n>`, one Hebrew line per composite line (= a line of the lead manuscript, or a
clause where the composite joins duplicates: the TSV says).

## Bible (look for; the parallels index is the product)
Exod 21:12–14 (HL 1–4: killing; "his hand errs" ↔ 21:13), 21:18–19 (HL 10: the injurer pays the physician), 21:22–25 (HL
17–18: a miscarriage, by month), 21:26–27 (HL 7–8, 11–16: blinding, a tooth, limbs: compensation, not talion), 21:28–36
(HL 70–79?, the animals), 21:37–22:3 (HL 57–70, 93–97: theft of animals, burglary), 22:4–5 (HL 106–107: fire, grazing),
22:6–14 (HL 75–77?: deposit and hire), 22:15–16 (HL 28–35: betrothal, bride-price, elopement), 22:17 (HL 44b, 111:
sorcery); Lev 18 and 20 (HL 187–200: incest and bestiality ranked: *ḫurkel* / permitted); Lev 19:19 (HL 166–167: sowing
seed on seed); Deut 21:1–9 (HL 6; PT § IV); Deut 22:22–27 (HL 197–198: in the mountains / in the house); Deut 25:5–10,
Gen 38 (HL 193: the brother, then the father-in-law); Deut 19:14 (HL 168–169: the boundary); the code that revises itself
(*karū … kinun=a*, HL 7, 9, 19, 25, 51, 54–59, 63, 67–69, 81, 91, 92, 94, 101, 119, 121–129 …): a law that admits change.

## Open decisions
(the translator's Proposals and the coordinator's decisions go here)

## Progress
- 2026-10-24: base secured (CHiL, TLHdig), tool, renderings (`../renderings.md` §7, §H2–§H9), brief – before drafting.

## Proposals

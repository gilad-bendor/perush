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

## HL2: the composite (CTH 292, the second tablet "If a vine")
Built 2026-10-25 by the Round 4 run 6 Sub2 coordinator, **before the first translated line**. CHiL has not edited CTH 292,
so the composite is ours: `composite-HL2.tsv` (330 rows), checked by `python3 -I -B ../../tools/hittite_tools.py comp-check
HL2` (0 problems). It was generated once from the decisions below (`composite-HL2--made-by.py` keeps the decided map and
the generator, for the record); **the TSV is now the source**: edit it, never re-run the generator over it.

**Method.**
1. **The manuscripts and their dates.** TLHdig 0.3 has 37 manuscripts in `CTH-292/`. Their script dates and Hoffner's sigla
   come from the Mainz *Konkordanz der hethitischen Keilschrifttafeln* (`hethport.net/hetkonk/hetkonk_abfrage.php?c=292`,
   read 2026-10-25): **one Old Script copy**, KBo 25.85+ (= KUB 29.25, 28, 29, 30, 32, 35, 36, 38 + KBo 25.5 + 25.85; "ah.",
   Hoffner's *aa*); all the others are New Script ("jh."; KBo 63.10, KBo 65.169 "late NS"; KBo 31.65, KBo 19.8, KBo 70.12,
   EBo 1313 no date given). The CTH sub-numbers sort them into **two recensions**: **292.I, the Old Hittite version** (the OS
   copy; its NS copies KUB 29.23+, KUB 29.26+, KUB 29.34+, KBo 14.66+, KBo 14.67, KBo 70.12) and **292.II, the later version**
   (KBo 6.26 – Hoffner's *p*, the fullest, HL 157–200 –, KBo 6.10+, 6.11, 6.12, 6.13+, 6.15, 6.16, KBo 31.66+, KUB 29.24+,
   29.31, 29.33+, KBo 19.8, KBo 31.65); the small ones are not sub-classified. Hoffner's sigla: KBo 6.12 *a*, KUB 29.23+ *b*,
   KBo 6.10+ *c*, KBo 6.11 *d*, KBo 6.13+ *e*, KBo 31.66+ *f*, KBo 19.6 *g*, KBo 19.9 *h*, KUB 29.24+ *i, k*, KBo 6.16 *j*,
   KBo 31.63 *l*, Bo 8202 *m*, KBo 19.7+ *n*, KUB 29.26+ *o*, KBo 6.26 *p*, KBo 14.66+ *q*, KBo 31.64 *r*, HFAC 5 *s*,
   KBo 14.67 *t*, KUB 29.31 *u*, KBo 6.15 *v*, KBo 31.65 *w*, KUB 29.33+ *x*, KUB 29.34+ *y*, KBo 22.66 *z* (not in TLHdig),
   KBo 25.85+ *aa*, KBo 19.8 and HFAC 4 *bb*.
2. **The § numbers.** Hoffner's HL numbering is Hrozný's (1922, the edition that created it; PD, archive.org
   `codehittiteprove01hroz`, read for the numbering only), continued by Friedrich and Hoffner; Hrozný called his numbers from
   §119 on "provisional", and kept gaps for lost text (§§ 114–117, 134–141, 153–156) that fixed the numbers ever since. Each
   manuscript's lines were placed by their content and their paragraph dividers (`¶`), against Hrozný's §-by-§ text and
   the landmarks every edition shares (the plough §121, the axes §157, the canal §162, seed on seed §166–167, the
   boundary §168, the snake §170, the king's judgment §173, the prices §§178–186, the sexual laws §§187–200b). Hrozný's
   sub-paragraphs (176 A/B, 185 A/B, 195 A–C, 200 A/B) are written 176a/176b …; **146a/146b, 158a/158b, 160a/160b, 162b
   and 173a/173b are ours** (where the OS divides a paragraph of the NS copies, or holds one they lack, or, for 162b,
   Hrozný's "§162/1"): marked in the table. Hoffner 1997 (©) was not in hand to check these labels.
3. **The lead of each §** (guidelines §5.2, "Texts, recensions, numbering"): **the Old Script copy where it keeps at least
   about two thirds of the text that the best copy keeps; else an NS copy of the Old Hittite version on the same terms;
   else the fullest copy.** Preservation was measured by script (the signs outside `[ ]`, per § and per manuscript) and
   checked by eye; two choices go by content: §111 (KUB 29.23+, the only copy that keeps the opening *šēni* "image") and
   §169 (KBo 6.13+, complete where KBo 6.26 is broken). The OS leads §§118–119, 144–148, 151–152, 157–161 (44 rows); the
   NS copies of the OH version lead §§104–106, 111, 124, 150, 188–194; the later version leads the rest.
4. **The rows.** One row per line of the lead manuscript (`<§>.<n>`; the colophon `col1`); `text` = that line exactly as
   TLHdig gives it, **including TLHdig's own restorations in `[ ]`** (its editors restore a broken copy from its
   duplicates; e.g. the OS rows are largely restored from the NS copies, and every such restoration is visible as
   brackets). Where a manuscript line holds the end of one § and the start of the next (KBo 6.26 at 173a/b, 176a/b, 185a/b,
   195a/b/c, 200a/b; KUB 29.34+ at 191/192), the line is split at the § boundary and the note says so. Our own changes are
   few and noted in the `note` column: one restoration (123.3, from KBo 6.10+ ii 2′), one continuation from another copy
   (122.3, KBo 6.12 ii 9′ after KBo 31.66+ breaks off), and one later-only row (192.3, KBo 6.26 iii 37). TLHdig's marks:
   `[ ]` restored, `⸢ ⸣` damaged, `〈 〉` omitted by the scribe, `〈〈 〉〉` to be deleted, `!` a correction, `?` uncertain,
   **`*…*` written over an erasure** (TLHdig's `ras`; frequent in KBo 6.26 iii–iv), `x` an unread sign.
5. **The duplicates** (`witnesses`): every other manuscript's lines of the §, each aligned to a lead row by an
   order-preserving word-overlap alignment (the copies break their lines differently, so the alignment is approximate:
   the translator compares the whole §). `hittite_tools.py data HL2` prints them under each row.
6. **The tool** (`../../tools/hittite_tools.py`, 2026-10-25): a joined manuscript's lines are named with their fragment
   (`{5} Vs. 2′`, as `tlh2md.py lines` prints them; the bare label repeats in a join: KBo 25.85+ has ten fragments), and a
   label that TLHdig repeats even so gets `#n` (`{1} 1′#1`); `comp-check` reports an ambiguous label; a row that is only
   part of its manuscript line keeps only its own words (so a neighbouring §'s word cannot license a gate).

**Recension tags in the translation** (guidelines §6.8): a row from the later version that has no counterpart in the
older (192.3) is tagged `{נוסח מאוחר}`; the נוסחים field of every entry gives the other copies' differences of content
(above all OS ↔ NS: e.g. §157 the axe weights 3 minas / 1 mina 20 in the OS against 1 mina / ½ mina in KBo 6.26; §158b
3 months against 2; §168 the OS boundary word *arḫan* against NS ZAG; §169 the OS lacks "buys a field"; §193 the brother's
son (OS, KUB 29.34+) against KBo 6.26's damaged ⸢A?⸣ ŠEŠ-ŠU and its added "it is no offence"; §106 the OH "another's field"
against KBo 6.11's "a cultivated field").

### HL2 concordance (§ → lead manuscript → duplicates)
Rec.: I = the Old Hittite version (I (OS) = the Old Script copy), II = the later version. Lines as TLHdig labels them.

| § | Lead manuscript (lines) | Rec. | Duplicates (lines) | Certainty, notes |
|---|---|---|---|---|
| 101 | KBo 6.12 Vs. I 1 – Vs. I 7 | II | KUB 29.23+ {1} 1′ – {1} 2′ | sure |
| 102 | KBo 6.12 Vs. I 8 – Vs. I 10 | II | KUB 29.23+ {1} 3′ – {1} 5′ | sure |
| 103 | KBo 6.12 Vs. I 11 – Vs. I 14 | II | KUB 29.23+ {1} 6′ – {1} 9′ | sure |
| 104 | KUB 29.23+ {1+2} 10′/Vs. I 1′ – {1+2} 11′/Vs. I 2′ | I | KBo 6.12 Vs. I 15 – Vs. I 16; KBo 19.6 2′ | sure |
| 105 | KUB 29.23+ {1+2} 12′/Vs. I 3′ – {1+2} 16′/Vs. I 7′ | I | KBo 6.12 Vs. I 17 – Vs. I 21; KBo 19.6 3′ – 6′; KBo 6.10+ {1} Vs. I 3′ – {1} Vs. I 7′; KBo 6.11 Vs. I 2′ – Vs. I 3′ | sure |
| 106 | KUB 29.23+ {3+1+2} 1′/17′/Vs. I 8′ – {3+1+2} 4′/20′/Vs. I 11′ | I | KBo 6.11 Vs. I 4′ – Vs. I 7′; KBo 6.12 Vs. I 22 – Vs. I 25; KUB 29.24+ {1} Vs. I 1′ – {1} Vs. I 5′; KBo 6.10+ {1} Vs. I 8′ – {1} Vs. I 10′; KBo 25.85+ {1} 1′ – {1} 3′; KBo 19.9 2′ – 4′ | sure |
| 107 | KBo 6.11 Vs. I 8′ – Vs. I 11′ | II | KBo 6.12 Vs. I 26 – Vs. I 28; KUB 29.23+ {2} 5′/Vs. I 12′ – {2} 7′/Vs. I 14′; KUB 29.24+ {1} Vs. I 6′ – {1} Vs. I 9′; KBo 6.10+ {1} Vs. I 12′ – {1} Vs. I 14′; KBo 25.85+ {1} 4′ – {1} 6′; KBo 19.9 5′ – 8′ | sure |
| 108 | KBo 6.11 Vs. I 12′ – Vs. I 15′ | II | KBo 6.12 Vs. I 29 – Vs. I 30; KUB 29.23+ {2} 8′/Vs. I 15′ – {3} 11′; KUB 29.24+ {1} Vs. I 10′ – {1} Vs. I 14′; KBo 6.10+ {1} Vs. I 15′ – {1} Vs. I 18′; KBo 19.9 9′ – 12′; KBo 25.85+ {1} 7′ | sure |
| 109 | KBo 6.11 Vs. I 16′ – Vs. I 17′ | II | KUB 29.23+ {3} 12′; KBo 6.10+ {1} Vs. I 19′ – {1} Vs. I 20′; KBo 6.16 Vs. I 1′ – Vs. I 2′ | sure |
| 110 | KBo 6.11 Vs. I 18′ – Vs. I 19′ | II | KUB 29.23+ {3} 13′ – {3} 14′; KBo 6.10+ {1} Vs. I 21′ – {1} Vs. I 22′; KBo 6.16 Vs. I 3′ – Vs. I 5′ | sure |
| 111 | KUB 29.23+ {3} 15′ | I | KBo 6.11 Vs. I 20′; KBo 6.10+ {1} Vs. I 23′; KBo 6.16 Vs. I 6′ | sure; lead chosen for its opening (šēni 'image') |
| 112 | KBo 6.11 Vs. I 21′ – Vs. I 23′ | II | KBo 6.10+ {1} Vs. I 24′ – {1} Vs. I 26′; KUB 29.24+ {2} 1′ – {2} 2′ | sure |
| 113 | KUB 29.24+ {2} 3′ – {2} 8′ | II | KBo 6.11 Vs. I 24′ – Vs. I 27′; KBo 6.10+ {1} Vs. I 27′ – {1} Vs. I 30′; FHL 90 1′ – 4′ | sure |
| 114–117 | – (lost) | | – | **lost**: KBo 6.10+ i breaks off after §113 (TLHdig i 31′ is empty); Hrozný counted two §§ of traces (114–115) and a gap of about two (116–117). Possibly some of the unplaced fragments below (KUB 13.31 '§114f.?'). |
| 118 | KBo 25.85+ {2} Vs. 1′ – {2+3} Vs. 6′/2′ | I (OS) | KBo 31.66+ {1} Vs. I 1′ – {1} Vs. I 5′; KBo 31.63 Vs. 1′ – Vs. 2′ | ? (content too broken to name; placed by its position before §119, Hrozný's provisional number) |
| 119 | KBo 25.85+ {2+3} Vs. 7′/3′ – {3} 5′ | I (OS) | KBo 31.66+ {1} Vs. I 6′ – {1} Vs. I 8′; KBo 31.63 Vs. 3′ – Vs. 5′ | sure |
| 120 | KBo 31.66+ {1} Vs. I 9′ – {1} Vs. I 10′ | II | KBo 25.85+ {3} 6′ – {3} 7′; KBo 31.63 Vs. 6′ – Vs. 7′ | sure |
| 121 | KBo 31.66+ {1} Vs. I 11′ – {1} Vs. I 14′ | II | KBo 25.85+ {3} 8′ – {3} 11′; KBo 6.12 Vs. II 1 – Vs. II 6; KBo 31.63 Vs. 8′ – Vs. 9′ | sure |
| 122 | KBo 31.66+ {1} Vs. I 15′ – {1} Vs. I 16′ + KBo 6.12 ii 9 (the end) | II | KBo 6.12 Vs. II 7 – Vs. II 9; KBo 25.85+ {3} 12′ – {4} 1′; KBo 14.66+ {1} Vs. I 1′ – {1} Vs. I 6″ | sure |
| 123 | KBo 6.12 Vs. II 10 – Vs. II 12 | II | KBo 6.10+ {1} Vs. II 1′ – {1} Vs. II 2′; KUB 29.26+ {1} 1′ – {1} 2′; KBo 19.7+ {1} Vs. 1′ – {1} Vs. 2′ | ? (only 'wheel' and '3 shekels' survive) |
| 124 | KUB 29.26+ {1} 3′ – {2+1} 3′/6′ | I | KBo 6.10+ {1} Vs. II 3′ – {1} Vs. II 7′; KBo 19.7+ {1} Vs. 3′ – {1+2} Vs. 7′; KBo 31.66+ {2} Vs. II 1′ – {2} Vs. II 4′; KBo 6.12 Vs. II 13 – Vs. II 18 | sure |
| 125 | KBo 6.10+ {1} Vs. II 8′ – {1} Vs. II 10′ | II | KUB 29.26+ {2+1} 4′/7′ – {2+1} 5′/8′; KBo 19.7+ {1+2} Vs. 7′ – {1+2} Vs. 8′; KBo 31.66+ {2} Vs. II 5′ – {2} Vs. II 7′; KBo 25.85+ {4} 2′ – {4} 3′; KBo 6.12 Vs. II 19 – Vs. II 20 | sure |
| 126 | KBo 6.10+ {1} Vs. II 11′ – {1} Vs. II 16′ | II | KUB 29.26+ {2+1} 6′/9′ – {2+1} 9′/12′; KBo 31.66+ {2} Vs. II 8′ – {2} Vs. II 13′; KBo 25.85+ {4} 4′ – {4} 7′; Bo 8202 1′ – 7′; KBo 6.12 Vs. II 21 – Vs. II 23 | sure |
| 127 | KBo 6.10+ {1} Vs. II 17′ – {1} Vs. II 19′ | II | KBo 25.85+ {4} 8′ – {4} 9′; KUB 29.26+ {2} 10′; Bo 8202 8′ | sure |
| 128 | KBo 6.10+ {1} Vs. II 20′ – {1+2+3} Vs. II 25′/4′/5′ | II | KBo 25.85+ {4} 10′ – {4} 13′ | sure |
| 129 | KBo 6.10+ {1+2+3} Vs. II 26′/5′/6′ – {1+2+3} Vs. II 29′/8′/9′ | II | – | sure |
| 130 | KBo 6.10+ {1+2} Vs. II 30′/9′ – {1} Vs. II 32′ | II | – | sure |
| 131 | KBo 6.10+ {1} Vs. II 33′ – {1} Vs. II 34′ | II | – | sure |
| 132 | KBo 6.10+ {1} Vs. II 35′ – {1} Vs. II 37′ | II | – | sure |
| 133 | KBo 6.10+ {1} Vs. II 38′ – {1} Vs. II 40′ | II | – | sure |
| 134–141 | – (lost) | | – | **lost**: the end of KBo 6.10+ col. ii and the top of col. iii; Hrozný's estimate of 4 + 4 §§ fixed the numbering. Perhaps the OS fragment KBo 25.85+ {1} col. ii (below). |
| 142 | KBo 6.10+ {1} Rs. III 1′ – {1} Rs. III 4′ | II | – | the § opening is lost |
| 143 | KBo 6.10+ {1} Rs. III 5′ – {1} Rs. III 8′ | II | KBo 31.64 1′ – 5′; KBo 25.85+ {5} Vs. 1′ | sure |
| 144 | KBo 25.85+ {5} Vs. 2′ – {5} Vs. 5′ | I (OS) | KBo 6.10+ {1} Rs. III 9′/1′ – {1+3} Rs. III 13′/5′ | sure |
| 145 | KBo 25.85+ {5} Vs. 6′ – {5} Vs. 7′ | I (OS) | KBo 6.10+ {1+3} Rs. III 14′/6′ – {1+3} Rs. III 16′/8′; HFAC 5 1′ – 4′ | sure |
| 146a | KBo 25.85+ {5} Vs. 8′ – {5} Vs. 11′ | I (OS) | KBo 6.10+ {1+3} Rs. III 17′/9′ – {1} Rs. III 21′; KBo 14.67 Vs.? II 1′ – Vs.? II 2′ | sure; the a/b labels are ours (the OS has a paragraph here that the NS copies lack) |
| 146b | KBo 25.85+ {5} Vs. 12′ – {5} Vs. 14′ | I (OS) | – | ? an OS-only paragraph; label ours |
| 147 | KBo 25.85+ {5} Vs. 15′ – {6+5} Vs. II 1′/Vs. 16′ | I (OS) | KBo 6.10+ {1} Rs. III 22′ – {1} Rs. III 24′; KBo 14.67 Vs.? II 3′ – Vs.? II 4′ | sure |
| 148 | KBo 25.85+ {6+5} Vs. II 2′/Vs. 17′ – {6+5} Vs. II 3′/Vs. 18′ | I (OS) | KBo 6.10+ {1} Rs. III 25′ – {1} Rs. III 27′; KBo 14.67 Vs.? II 5′ – Vs.? II 6′ | sure |
| 149 | KBo 6.10+ {1} Rs. III 28′ – {1} Rs. III 31′ | II | KBo 25.85+ {6} Vs. II 4′ – {6} Vs. II 6′; KBo 14.66+ {1+2} Vs. II 1′ – {1+2} Vs. II 2′; KBo 14.67 Vs.? II 7′ – Vs.? II 9′ | sure |
| 150 | KBo 14.66+ {1+2} Vs. II 3′ – {1+2} Vs. II 4′ | I | KBo 25.85+ {6} Vs. II 7′ – {6} Vs. II 8′; KBo 6.10+ {1} Rs. III 32′ – {1} Rs. III 33′; KBo 14.67 Vs.? II 10′ – Vs.? II 11′ | sure |
| 151 | KBo 25.85+ {6} Vs. II 9′ – {6} Vs. II 10′ | I (OS) | KBo 14.66+ {1+2} Vs. II 5′ – {1} Vs. II 6′; KBo 6.10+ {1} Rs. III 34′ – {1} Rs. III 36′; KBo 14.67 Vs.? II 12′ – Vs.? II 13′ | sure |
| 152 | KBo 25.85+ {6} Vs. II 11′ – {6} Vs. II 12′ | I (OS) | KBo 14.66+ {1} Vs. II 7′ – {1} Vs. II 8′; KBo 6.10+ {1} Rs. III 37′ – {1} Rs. III 38′; KBo 14.67 Vs.? II 14′ | sure |
| 153–156 | – (no text) | | – | **not attested**: Hrozný assumed a gap of about four §§ at the end of KBo 6.10+ col. iii; the copies found since (KBo 25.85+ ii 11′–13′, KBo 14.66+ ii 7′–9′) run from §152 straight to the axe of §157, so the numbers name no text. |
| 157 | KBo 25.85+ {6} Vs. II 13′ – {6} Vs. II 15′ | I (OS) | KBo 6.26 Vs. I 1 – Vs. I 5; KBo 14.66+ {1} Vs. II 9′; KBo 19.7+ {1} Rs. 2′ – {1} Rs. 3′; KUB 29.24+ {1} Rs. IV 2′ – {1} Rs. IV 5′ | sure |
| 158a | KBo 25.85+ {6} Vs. II 16′ – {6} Vs. II 18′ | I (OS) | KBo 6.26 Vs. I 6 – Vs. I 9; KBo 19.7+ {1} Rs. 4′ – {1} Rs. 6′ | a/b ours, after the OS divider between the man's and the woman's wages (NS: one paragraph) |
| 158b | KBo 25.85+ {6} Vs. II 19′ | I (OS) | KBo 6.26 Vs. I 9 – Vs. I 10; KUB 29.31 1′ | a/b ours (see 158a) |
| 159 | KBo 25.85+ {6} Vs. II 20′ | I (OS) | KBo 6.26 Vs. I 11 – Vs. I 12; KUB 29.31 2′ – 3′ | sure |
| 160a | KBo 25.85+ {6} Vs. II 21′ | I (OS) | KBo 6.26 Vs. I 13 – Vs. I 14; KUB 29.31 4′; KBo 65.169 1′ – 2′ | a/b ours, after the OS dividers (NS: one paragraph) |
| 160b | KBo 25.85+ {6} Vs. II 22′ | I (OS) | KBo 6.26 Vs. I 14 – Vs. I 15; KUB 29.31 5′ – 7′; KBo 6.15 Rs. IV 1′ – Rs. IV 3′ | a/b ours (see 160a) |
| 161 | KBo 25.85+ {6} Vs. II 23′ | I (OS) | KBo 6.26 Vs. I 16 – Vs. I 17; KUB 29.31 8′ – 9′; KBo 6.15 Rs. IV 4′ – Rs. IV 5′; KBo 65.169 3′ – 4′ | sure |
| 162 | KBo 6.26 Vs. I 18 – Vs. I 21 | II | KBo 6.15 Rs. IV 6′ – Rs. IV 8′; KUB 29.31 10′ – 12′; KBo 31.65 Vs. II 1′ – Vs. II 2′; KBo 65.169 5′ – 6′ | sure |
| 162b | KBo 6.15 Rs. IV 9′ – Rs. IV 12′ | II | KBo 6.10+ {1} Rs. IV 6′ – {1} Rs. IV 9′ | ? Hrozný's '§162/1': a paragraph only in KBo 6.15 iv and KBo 6.10+ iv, not in KBo 6.26 |
| 163 | KBo 6.26 Vs. I 22 – Vs. I 27 | II | KBo 31.66+ {3+4} Rs. IV 1 – {3+4+5} Rs. IV 6; KBo 6.15 Rs. IV 13′ – Rs. IV 16′; KBo 6.10+ {1} Rs. IV 10′ – {1} Rs. IV 12′; HFAC 4 1′ – 5′; KBo 67.269 1′ – 6′; KBo 25.85+ {7} 1′! | sure |
| 164 | KBo 6.26 Vs. I 28 – Vs. I 30 | II | KBo 25.85+ {7} 2′! – {7} 3′!; KBo 31.66+ {3+5} Rs. IV 7 – {3+5} Rs. IV 9; HFAC 4 6′ – 7′ | sure |
| 165 | KBo 6.26 Vs. I 31 – Vs. I 33 | II | KBo 25.85+ {7} 3′! – {7} 5′!; KBo 31.66+ {3} Rs. IV 10 – {3} Rs. IV 12 | sure |
| 166 | KBo 6.26 Vs. I 34 – Vs. I 38 | II | KBo 25.85+ {7} 6′! – {6} Rs. III 3 | sure |
| 167 | KBo 6.26 Vs. I 39 – Vs. I 45 | II | KBo 25.85+ {6} Rs. III 4 – {10+6} Rs. III 1′/8; KBo 66.239 1′ – 4′ | sure |
| 168 | KBo 25.85+ {10+6} Rs. III 2′/9 – {10+6} Rs. III 4′/11 | I (OS) | KBo 6.26 Vs. I 46 – Vs. I 49; KBo 6.13+ {1} Vs. I 1 – {1} Vs. I 5; KBo 6.11 Rs. IV 1′ – Rs. IV 4′; VSNF 12.127 Vs. 1 – Vs. 5; KBo 66.239 5′ – 6′ | sure |
| 169 | KBo 6.13+ {1} Vs. I 6 – {1} Vs. I 9 | II | KBo 6.26 Vs. I 50 – Vs. I 53; KBo 25.85+ {10+6} Rs. III 5′/12 – {10+6} Rs. III 7′/14; VSNF 12.127 Vs. 6 – Vs. 9 | sure |
| 170 | KBo 6.26 Vs. II 1 – Vs. II 2 | II | KBo 6.13+ {1} Vs. I 10 – {1} Vs. I 12; VSNF 12.127 Vs. 10 – Vs. 11; KBo 25.85+ {10+6} Rs. III 8′/15 – {6} Rs. III 16 | sure |
| 171 | KBo 6.26 Vs. II 3 – Vs. II 8 | II | KBo 6.13+ {1} Vs. I 13 – {1} Vs. I 18; VSNF 12.127 Vs. 12 – Vs. 13; KBo 25.85+ {8} 1′ | sure |
| 172 | KBo 6.26 Vs. II 9 – Vs. II 10 | II | KBo 6.13+ {1} Vs. I 19 – {1} Vs. I 21; KBo 25.85+ {8} 2′ – {8} 3′ | sure |
| 173a | KBo 6.26 Vs. II 11 – Vs. II 14 | II | KBo 25.85+ {8} 4′ – {8+9} 5′/1′ | a/b by content (the OS divides them) |
| 173b | KBo 6.26 Vs. II 14 – Vs. II 15 | II | KBo 25.85+ {8+9} 6′/2′ | a/b by content (the OS divides them) |
| 174 | KBo 6.26 Vs. II 16 | II | KBo 25.85+ {8+9+5} 7′/3′/1′ | sure |
| 175 | KBo 6.26 Vs. II 17 – Vs. II 20 | II | KBo 25.85+ {9+5} 4′/2′ – {9+5} 6′/4′ | sure |
| 176a | KBo 6.26 Vs. II 21 – Vs. II 23 | II | KBo 25.85+ {9+5} 7′/5′ – {9+5} 8′/6′; KUB 29.23+ {2} Rs. III 1′ – {2} Rs. III 2′ | Hrozný's 176 A/B |
| 176b | KBo 6.26 Vs. II 23 – Vs. II 26 | II | KBo 25.85+ {9+5} 9′/7′ – {9+5} 10′/8′; KUB 29.23+ {2} Rs. III 3′ – {2} Rs. III 4′ | Hrozný's 176 A/B |
| 177 | KBo 6.26 Vs. II 27 – Vs. II 29 | II | KBo 25.85+ {9+5} 11′/9′ – {5} 10′; KUB 29.23+ {2} Rs. III 5′ – {2} Rs. III 6′ | sure |
| 178 | KBo 6.26 Vs. II 30 – Vs. II 35 | II | KUB 29.23+ {2} Rs. III 7′ – {2} Rs. III 12′; KBo 25.85+ {5} 11′ – {5} 14′ | sure |
| 179 | KBo 6.26 Vs. II 36 – Vs. II 37 | II | KUB 29.23+ {2} Rs. III 13′ – {2} Rs. III 14′; KUB 29.33+ {2+1} Vs. I 3′ – {2+1} Vs. I 4′ | sure |
| 180 | KBo 6.26 Vs. II 38 – Vs. II 41 | II | KUB 29.33+ {2+1} Vs. I 4′ – {2+1} Vs. I 7′; KUB 29.23+ {2} Rs. III 15′ – {2} Rs. III 18′ | sure |
| 181 | KBo 6.26 Vs. II 42 – Vs. II 47 | II | KUB 29.33+ {2+1} Vs. I 8′ – {3} Vs. 6′ | sure |
| 182 | KBo 6.26 Vs. II 48 – Rs. III 2 | II | KUB 29.33+ {3} Vs. 7′ – {3} Vs. 10′; KBo 31.65 Rs. IV 1 | sure |
| 183 | KBo 6.26 Rs. III 3 – Rs. III 7 | II | – | sure |
| 184 | KBo 6.26 Rs. III 8 | II | – | sure |
| 185a | KBo 6.26 Rs. III 9 – Rs. III 15 | II | – | Hrozný's 185 A/B |
| 185b | KBo 6.26 Rs. III 15 | II | – | Hrozný's 185 A/B |
| 186 | KBo 6.26 Rs. III 16 – Rs. III 19 | II | KUB 29.34+ {1} Rs. IV 1′ | sure |
| 187 | KBo 6.26 Rs. III 20 – Rs. III 22 | II | KUB 29.33+ {1} Vs. II 1′ – {1} Vs. II 2′; KUB 29.34+ {1} Rs. IV 2′ – {1} Rs. IV 4′ | sure |
| 188 | KUB 29.34+ {1} Rs. IV 5′ – {1} Rs. IV 7′ | I | KBo 6.26 Rs. III 23 – Rs. III 25; KUB 29.33+ {1} Vs. II 3′ – {1} Vs. II 8′ | sure |
| 189 | KUB 29.34+ {1} Rs. IV 8′ – {1} Rs. IV 10′ | I | KBo 6.26 Rs. III 26 – Rs. III 28; KUB 29.33+ {1} Vs. II 9′ – {1} Vs. II 13′ | sure |
| 190 | KUB 29.34+ {1} Rs. IV 11′ – {1} Rs. IV 13′ | I | KBo 6.26 Rs. III 29 – Rs. III 31; KUB 29.33+ {1} Vs. II 14′ – {1} Vs. II 16′ | sure |
| 191 | KUB 29.34+ {1} Rs. IV 14′ – {1} Rs. IV 17′ | I | KBo 6.26 Rs. III 32 – Rs. III 35 | sure |
| 192 | KUB 29.34+ {1} Rs. IV 17′ – {1} Rs. IV 18′ + KBo 6.26 iii 37 (later version) | I | KBo 6.26 Rs. III 37 | the OH version (KUB 29.34+); KBo 6.26 iii 37 has another law here (a later-only row, 192.3) |
| 193 | KUB 29.34+ {1} Rs. IV 19′ – {1} Rs. IV 21′ | I | KBo 6.26 Rs. III 40 – Rs. III 43; KBo 25.85+ {2+10} Rs. 1′/Rs. IV 2′ – {2+10} Rs. 3′/Rs. IV 4′ | sure |
| 194 | KUB 29.34+ {1} Rs. IV 22′ – {1} Rs. IV 25′ | I | KBo 25.85+ {2+10} Rs. 4′/Rs. IV 5′ – {2+10} Rs. 7′/Rs. IV 8′; KBo 6.26 Rs. III 44 – Rs. III 48; KBo 6.13+ {1} Rs. III 1′ – {1+2} Rs. III 2′/1′ | sure |
| 195a | KBo 6.26 Rs. III 49 – Rs. III 50 | II | KUB 29.34+ {2+1} Rs. IV 1′/26′ – {2+1} Rs. IV 2′/27′; KBo 25.85+ {2+10} Rs. 8′/Rs. IV 9′; KUB 29.33+ {1} Rs. III 1′ – {1} Rs. III 2′; KBo 6.13+ {1+2} Rs. III 3′/2′ – {1+2} Rs. III 4′/3′ | Hrozný's 195 A–C (KBo 6.13+ divides them) |
| 195b | KBo 6.26 Rs. III 50 – Rs. III 52 | II | KUB 29.34+ {2+1} Rs. IV 2′/27′ – {2+1} Rs. IV 3′/28′; KBo 25.85+ {2+10} Rs. 9′/Rs. IV 10′; KUB 29.33+ {1} Rs. III 3′ – {1} Rs. III 4′; KBo 6.13+ {1+2} Rs. III 5′/4′ – {1+2} Rs. III 6′/5′ | Hrozný's 195 A–C |
| 195c | KBo 6.26 Rs. III 52 – Rs. III 53 | II | KUB 29.34+ {2+1} Rs. IV 3′/28′ – {2} Rs. IV 4′; KBo 25.85+ {10} Rs. IV 11′ – {10} Rs. IV 12′; KUB 29.33+ {1} Rs. III 5′ – {1} Rs. III 6′; KBo 6.13+ {1+2} Rs. III 7′/6′ – {1+2} Rs. III 8′/7′ | Hrozný's 195 A–C |
| 196 | KBo 6.26 Rs. IV 1 – Rs. IV 5 | II | KUB 29.34+ {2} Rs. IV 5′ – {2} Rs. IV 8′; KBo 25.85+ {10} Rs. IV 13′ – {10} Rs. IV 15′; KBo 6.13+ {1+2} Rs. III 9′/8′ – {1+2} Rs. III 10′/9′ | sure |
| 197 | KBo 6.26 Rs. IV 6 – Rs. IV 9 | II | KUB 29.34+ {2} Rs. IV 9′ – {2} Rs. IV 11′ | sure |
| 198 | KBo 6.26 Rs. IV 10 – Rs. IV 15 | II | KUB 29.34+ {2} Rs. IV 12′ – {2} Rs. IV 15′ | sure |
| 199 | KBo 6.26 Rs. IV 16 – Rs. IV 22 | II | KBo 63.10 1′ – 5′ | sure |
| 200a | KBo 6.26 Rs. IV 23 – Rs. IV 27 | II | KUB 29.33+ {3} Rs. 1 – {3} Rs. 3 | Hrozný's 200 A/B |
| 200b | KBo 6.26 Rs. IV 27 – Rs. IV 31 | II | KUB 29.33+ {3+4} Rs. 4/1′ – {3+4} Rs. 8/5′ | Hrozný's 200 A/B |
| colophon | KBo 6.13+ Rs. IV 1′ | II | – | sure |

**Lost or only partly preserved.** Lost: §§114–117, 134–141 (no text in any copy), §§153–156 (numbers without text).
Partly preserved (the translation is fragmentary): §§101–103 (the line beginnings), 118, 122–123, 129–133, 142, 146b,
182–183 (line ends), 196 (the opening), and the OS-led §§ where only the TLHdig restorations fill the left half.

**Unplaced fragments** (kept out of the composite; none can be aligned to a line): KBo 25.85+ {1} col. ii 1′–6′ (`ták-ku
[LÚ` / `pár-na-[aš-še-ia` …; in the OS between §128 and §144, so perhaps §§129–133 or the lost 134–141); KBo 25.85+ {1}
col. i 4′–7′ are §§107–108 only by position (in the witnesses); KBo 31.65 rev. iii 1–3 (`ták-ku PA₅-a[n` / `A.ŠÀ-iš-ši p[a-`:
a canal law placed after §162 in this copy, not in KBo 6.26); KBo 19.8 ii (a theft of a beehive, `É.NIM.LÀL`, with
*parnaššea šuwāezzi*: a law not in KBo 6.26 or 6.10+; perhaps in the gap §§114–117 or 134–141; Hoffner's *bb*); KUB 13.31
("§114f.?" in the Konkordanz); KBo 14.67 iii 1′–4′; KBo 31.66+ iii 1′–3′; KBo 6.13+ ii 8′–20′ (only the first signs, `ŠA …`,
`ŠI-IM-[ŠU]`, of the price list §§178–186); KBo 70.12 (the Konkordanz: a duplicate of §§150–152; its signs do not align);
EBo 1313 (`LU]GAL-i-ma-aš`: §187, 188 or 199). **KUB 29.17+ is not CTH 292**: its text is HL 60 (the bull found and
castrated) and HL 71? of the first tablet; it is not in the Konkordanz list of CTH 292 and is left out.

**The colophon** (KBo 6.13+ iv 1′): `DUB 2{KAM} ták-ku {GIŠ}GEŠTIN-aš QA-TI` "Tablet 2, 'If a vine', finished": the
tablet of HL 101–200 is "the second". (Both colophons of HL1 also say "Tablet 2" – CHiL `2!`: the
open question of HL1, now with the second tablet's own count beside it.)

## HL2: the coordinator's brief for the translator (Sub2, 2026-10-25; on top of `../translator-brief--hittite.md`)
**Your text** is `composite-HL2.tsv` (read the section "HL2: the composite" above first: the leads, the recensions, the
marks). Labels `<§>.<n>` (`101.1` … `200b.5`, `col1`); one Hebrew line per row; `@` + `fill`. **Parts** (one translator,
resumed part by part): **P1 101.1–128.6** (90 rows), **P2 129.1–162b.4** (69), **P3 163.1–186.4** (105), **P4 187.1–col1**
(66). File: `annotated-HL2.rtl.md`, built like `annotated-HL1.rtl.md` (title `# החוקים החתיים, הלוח השני: "אם גפן" – תרגום
מבואר`, a short head paragraph: the base is our composite, the marks, the fixed words). Put `<!-- טרם תורגם: FROM–TO -->` for
the rows not yet drafted. Headings `## §N – <Hebrew title>` (`## §146a – …`, `## §192 – …`); for the lost numbers a heading
alone, no entries: `## §§114–117 – לא נשתמרו`, `## §§134–141 – לא נשתמרו`, `## §§153–156 – (אין טקסט)`, at their places.

**HL2 follows HL1's Hebrew** for every shared word and formula (`../renderings.md` §7.1–§7.7 and the review rulings; check
with `hittite_tools.py lemma` / `grep --all` / `lexmap` before fixing a word). The formulas of §H5 now fire on HL2's
hyphenated text (F1 `אם`, F2/F3 `לפנים … ועתה`, F4 `ואל ביתו יביט`, F7 *ḫurkel* `תועבה`, F8 *pāi* `ייתן`, F9 `יגנוב`, and
the new **F11 *UL / natta ḫaratar* = `אין עברה`**). New reservations for HL2's parallels (§H3, NEVER): `בער` and its forms
(Exod 22:4–5; *lukk-* = `הצית`, *warnu-* = `שרף`), `מיטב`, `כלאים`, `הסיג`, `סקל`, `ירבע`/`לרבעה`, `דמיהם`, `ערכך`, and the
verb `קרב` (`יקרב`, `תקרב` …: Lev 18:6, 19; 20:16); the old ones hold (`נאף`/`נואף`, `ערוה`, `תבל`, `זמה`, `יבם`, `יומת`,
`הכה`, `נגח`, `מוהר` plene …). If a line truly needs a reserved or gated word, propose a licence in Proposals.

**The composite's marks.** TLHdig's `[ ]` (restored, often from the duplicates – the OS-led rows are half restored),
`⸢ ⸣` damaged, `〈 〉` omitted by the scribe (Hebrew `⟨ ⟩`), `!` corrected, `?` uncertain (keep it), `x` an unread sign
(`[…]`), and **`*…*` = written over an erasure** in KBo 6.26: translate the text, say "על גבי מחיקה" in נוסחים where it
matters. The bracket rule of HL1 holds (a Hebrew word is bracketed when the Hittite stem is restored). Row 192.3 is a
later-only line: open it with `{נוסח מאוחר}`.

**נוסחים** (every entry with a duplicate): every difference of content between the lead and its duplicates, above all
**the Old Script copy against the New Script ones** and **the Old Hittite version (292.I) against the later (292.II)**:
the figures (§157 axe weights, §158b months, §§119–129 the tariffs), the words (§168 OS *arḫan* "boundary" against NS
ZAG; §106 OH "another's field" against KBo 6.11's "a cultivated field"; §112 KBo 6.10+ *ḪALQIM* "lost" against KBo 6.11
*ḫalkin* "grain"; §111 KBo 6.10+ *appattari* against KBo 6.11 *ēpari*; §163 KBo 67.269 *MUN-an* "salt" where KBo 6.26
has *išuwan*; §171 KBo 6.26 "her sons" against KBo 6.13+ "her son"; §191 KBo 6.26's "in two places" against KUB 29.34+
"in one place"; §193 the brother's son and KBo 6.26's added "it is no offence"; §199 KBo 63.10 divides the pig/dog case
from the ox), the paragraph divisions (the OS divides 158a/b, 160a/b, 173a/b; KBo 6.13+ divides 195a/b/c), and the
§§ the OS has and the NS lacks (146b) or the reverse (162b, 192.3). The `witnesses` alignment is approximate: compare the
whole §.

**Look for** (briefs say "look for", never "translate as"; print every verse first): Exod 22:4–5 (HL 105–107: fire,
grazing in another's field; `מֵיטַב שָׂדֵהוּ` ↔ the "good field" of 106); Lev 19:19 and Deut 22:9 (HL 166–167: seed upon
seed); Deut 19:14, 27:17 (HL 168–169: the boundary – HL1 has *arḫa-* `גבול`; the OS here has *arḫan*, the NS ZAG: one
Hebrew); Exod 22:17 (HL 111: clay for an image = sorcery; and HL 170, the snake killed while speaking another's name: MUŠ
– Etana's *ṣerru* is `נָחָשׁ`, check `grep --all`; Lev 19:26 `לֹא תְנַחֲשׁוּ`, Gen 3); Exod 21:28–32 (HL 199: the ox that leaps
on a man dies, a sheep dies in the man's place); Lev 18 and 20 (HL 187–200a: which unions are *ḫurkel* and which are "no
offence"; the death penalty and the king's pardon; "he shall not approach the king, nor become a priest" ↔ Lev 21:16–23;
the stepmother while the father lives ↔ Lev 18:8; the wife's sister after her death ↔ **Lev 18:18 `בְּחַיֶּיהָ`**; mother
and daughter ↔ Lev 18:17, 20:14; the brother's wife while the brother lives ↔ Lev 18:16, 20:21); Deut 22:22–27 (HL 197–198:
in the mountains / in the house, the husband's right to kill, "let both die" *2-pat akkandu* ↔ **Deut 22:22 `וּמֵתוּ גַּם
שְׁנֵיהֶם`**, the husband who spares his wife spares the lover too ↔ Prov 6:32–35); Deut 25:5–10 and Gen 38 (HL 193: the
brother, then the father, then the brother's son); Deut 21:18–21? (HL 171: the mother who disowns her son, and takes him
back; HL 173b: the slave who rebels against his master); Exod 21:2–4 (HL 175: the free woman taken by a shepherd becomes a
slave, her children); Gen 47:13–26? (HL 172: the man kept alive in a year of famine); Lev 27 (HL 176–186: prices,
valuations); the substitute sheep (HL 166–167, 196, 199: *1 UDU … kaššaššaš ḫuittiyanta*) ↔ Gen 22:13 `תַּחַת בְּנוֹ`, Lev 16
(a substitute, not a scapegoat: check the verb); Exod 22:9–14 (HL 145, 149, the hired and the sold; HL 162b?); and the
code that revises itself (*karū … kinun=a*, HL 101, 119, 121, 122, 129, 166–167).

**Suggestions to check (yours to decide, with grep first):** *katta wašta-* "sin with" `חטא עם` (*wašta-* = `חטא`); OH
*akiaš* "he shall die" `ימות`; *šeš-* `שכב עם`; *wen-* "copulate" `בא על` (MAL *niāku*); *pupu-* "lover" `מאהב` (`נואף`
reserved); *tiya-* "step up (to the king)" `ייגש`; *ḫuišnu-* "let live, spare" (one verb: `החיה`?); *2-pat akkandu* literal
(`שניהם ימותו`); *ŠĪMU* `מחיר`; *paršiya-* (the boundary, the bread) one verb, not `הסיג` and not `שבר` (*duwarna-*); the
verb of sowing in 166–167 (TLHdig *šuniye/a-*) against HL1's *šunna-* `מילא`; *ḪUR.SAG* `הר`; *ēpp-* `תפס`, *wemiya-*
`מצא`, *āšk-* `שער`; the colophon as HL1's (DUB `לוח`, QATI `תַּם`).

**Rank 3/5 (after drafting only).** No open modern translation of HL2 exists. Check against Hrozný 1922 (French, PD, rank 5;
his numbering is ours; old readings) and Zimmern & Friedrich 1922 (*AO* 23/2, German, PD, rank 5; **their § numbers differ**
– search by content), both OCR in `/tmp/claude-0/-home-user-perush/729bb44c-0cdc-53f9-8752-0b74b51d7bc2/scratchpad/rank5/`
(`Hrozny-1922--Code-hittite.djvu.txt`, `Zimmern-Friedrich-1922--AO-23-2.djvu.txt`; OCR errors – never take a reading from
them, guidelines §5.2); the CHD per word (`hittite_tools.py chd WORD`; no bulk extraction). Record disagreements in
תרגומים ("Hrozný: «…»").

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
Settled by the Sub1 coordinator (2026-10-25; the user's rule: minor decisions are taken and recorded; details in `../renderings.md` §7.3–§7.7 and the "Review rulings" paragraphs):
- *šullatar* = `במחלוקת` ("in a quarrel", Hoffner, CHD); CHiL reads *šullannaz* "con intenzione": the crux is noted at HL1 1, 5 – it decides how HL 1–4 align with Exod 21:12–14. Open for a later check against Hoffner 1997 (not in hand).
- *arnu-* = `יַגִּיעַ` (literal causative "make arrive"; the cruxes of *apūn arnuzi* in the apparatus).
- *parkunu-* of an animal = `טיהר` (the Hittite euphemism for castration kept literal, explained in the notes; HL 60–62).
- `עבר` / `העביר` for crossing a river is allowed in the Hittite texts (the cross-language cognate rule protects rare cognates and loanwords, not common vocabulary).
- *ELLUM* of persons = `בן חורין`, of a house or land = `פטור`.
- *takšan* split by sense: `לשניים` (dividing) / `יחד` (together).
- *dammeli-* (PT § IV) = `לא מעובד` (not `בְּתוּלִי`: the root of the reserved `בתולה`); a [divergence] with Deut 21:4.
- *QĀTU* `יד` is [equivalent], not [cognate] (Akk. *qātu* is not the cognate of `יד`, which is *idu*).
- Brackets: a Hebrew word is bracketed when the Hittite stem is restored; Old Hittite fills of the standard text are tagged `{נוסח קדום: …}` (HL1 269).
- NAGAR = `נגר` (cognate loan, as the other corpora); `גבול` stays for *arḫa-* (HL2's boundary law must check its own word).

Still open:
- "Tablet 2": both HL1 colophons (col1, col2) call the tablet of HL 1–100 "Tablet 2" (`2!` in CHiL): a question for HL2's colophons.
- The fragmentary PT § XVIII–XXXIII: CHiL's "cfr." kept; our own attributions marked `?`.
- HL 49 is not in CHiL's HL1 base (PT § XLI only).

## Progress
- 2026-10-24: base secured (CHiL, TLHdig), tool, renderings (`../renderings.md` §7, §H2–§H9), brief – before drafting.
- 2026-10-25 (Round 4 run 6 sub 1): HL1 complete (571 entries: HL §1–§100 + the colophons; one translator in four parts: 1–145, 146–290, 291–439, 440–col4) and HLPT complete (206 entries, § I–XLI + colophon; the same translator). Three review passes over both texts (fidelity: 9 lines; consistency: the bracket rule ~170 lines, headings, repeated clauses; Hebrew: 4 lines + notes) and the intros `translation--intro-HL1.rtl.md`, `translation--intro-HLPT.rtl.md`; `translation-HL1.rtl.md`, `translation-HLPT.rtl.md` and the combined `translation.rtl.md` built by `hittite_tools.py build HL1 HLPT`; `verify HL1 HLPT --strict` 0 problems; `selftest` 0 failures; `check_bible_quotes.py` 0 problems on every file. Parallels index at the end of this file (157 + 26 rows), merged into `../parallels-index.md`. HL2 (the second tablet, our composite from TLHdig) is not done yet; the print stub waits for the combined file with HL2.

## Proposals

### Part 1 (HL1 1–145)
Drafted 2026-10-25: `annotated-HL1.rtl.md`, clauses 1–145 (HL §1–§27, CHiL sections 1–28), with פירוק, נוסחים (291.1, 291.3–5
at every §), תרגומים (CHiL, read after drafting), הקבלה, הערות. `verify HL1`: no errors in 1–145 (see the tool point
below for the one reported problem); `check_bible_quotes.py`: 0 problems; `selftest`: 0 failures.

**New renderings fixed (Hittite lemma → Hebrew, first clause).** All grepped with `grep --all` / `harmonize_survey.py heb`.
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *šullatar* (abl. *šullannaz*) "quarrel" | `במחלוקת` | 1 | `ריב`/`מריבה` avoided (Exod 21:18 `יְרִיבֻן`; the law corpus rejected `ריב` for MAL *ṣāltu*); `קטטה` = LH *risbatum*, `מדון` = MAL *ṣāltu*, `סכסוך` = EST *mušamḫiṣūtu*, `תגרה` = Gilg. *tuquntu*. **CHiL reads "con intenzione"**: a crux (recorded at 1). |
| *arnu-* "make arrive, bring, deliver" | `יַגִּיעַ` (always vocalized) | 2 | the causative of *ar-* "arrive", literal; `הוביל` is wabālu's cognate (EST), `הוליך` taken for *peḫute-*, `הביא` for *uwate-*. Used for the corpse (2), the merchant (28), the forfeited house (86). Open: `ימציא` would read more smoothly. |
| *peḫute-* "lead away, take there" | `הוליך` | 84 | (LE has `יוליך` for Akk. *redû*: a cross-language common verb, no cognate) |
| *uwate-* "bring (here)"; *EGIR-pa uwate-* | `הביא`; `הביא בחזרה` | 93; 103 | `שוב`/`השיב` avoided (reserved in the Akkadian corpora) |
| *peda-* "carry (there)" | `נשא` (`תישא`) | 139 | the H4 gate's word |
| *LÚ DAM.GÀR* and *unattalla-* "merchant" | `תַּגָּר` (vocalized at first occurrence) | 21, 28 | LH *tamkārum* = `תגר` (F41); DAM.GÀR is read *tamkāru*; *unattalla-* is probably the word DAM.GÀR writes, and 28 refers back to the merchant of 21, so one Hebrew. Split (`סוחר` for *unattalla-*) if the coordinator prefers. |
| *āššu-* "goods" | `רכוש` | 26 | (`טוב` avoided) |
| *antuḫša-* (LÚ.U₁₉.LU, UN) | `אדם` | 29 | as §7.1 |
| *taki-* "other"; *URU* "town" | `אחרת`; `עיר` | 29 | |
| *arḫa-* "boundary, territory" | `גבול` | 30 | |
| *gipeššar* "ell" | `אַמָּה` (vocalized; ≠ GÉME `אָמָה`) | 31 | Gilg. *ammatu* = `אמה`; lexmap shows one unvocalized string for two words: the vowels separate them |
| *karšš-* "cut off" | `חתך` (`יחתוך`) | 31 | CHiL "circoscriverà" |
| *dā-* "take"; iter. *dašker* | `לקח` (`ייקח`); `היו לוקחים` | 32; 45 | |
| *-za* (reflexive) | `לעצמו` where the sense allows; untranslated with *arnu-* (28) and with *iwaru … pēdai* (139) | 32 | |
| *dašuwaḫḫ-* "blind" | `עיוור` (`יעוור`) | 33 | |
| *lak-* "knock out (a tooth), make fall" | `הפיל` (`יפיל`) | 34 | [equivalent] Exod 21:27 `יַפִּיל` – the natural Hebrew and the real sense (CHiL "fa cadere"); the echo is real, noted at 34/39. MAL uses `הפיל` for *ṣalû* Š (miscarriage); the Hittite miscarriage verb is *pešš-* `השליך`, so no clash inside HL. |
| *ZU₉* "tooth" | `שן` (`שִׁנּוֹ` vocalized) | 34 | |
| *pai-* iter. pret. *pešker* | `היו נותנים` | 35 | as §7.1 |
| *ḫunink-* "injure, wound"; ptcp. *ḫuninkant-* | `פצע` (`יפצע`); `הפצוע` | 42; 44 | `חבל` is LH *ḫabālu*'s; [equivalent] Exod 21:25 `פֶּצַע`. CHiL "colpire" for both *ḫunink-* and *walḫ-*. |
| *pešš-* "throw (away)" | `השליך` | 46 | the king "threw away" the palace's share (46, 127); "throws out her womb" (74, 80) |
| *ištarnink-* "make sick" | `הֶחֱלָה` (`וְיַחֲלֶה`, vocalized) | 49 | |
| *šaktai-* "provide sick-maintenance" | `טיפל` (`יטפל`) | 50 | the gloss "kompensieren(?)" is wrong (see gates) |
| *pedan-* "place" | `מקום` (`במקומו`) | 51 | |
| *aniya-* iter. *anneškezzi* "work" | `עבד` (`יעבוד`) | 52 | |
| *kuitman*; *mān* (temporal) | `עד אשר`; `כאשר` | 53; 54 | *mān* conditional = `אם` (27), as §7.1 |
| SIG₅ (*lazziya-*) "recover" | `החלים` (`יחלים`) | 53 | = Sum. *sa₆*, UN `החלים` (d011) |
| *LÚ A.ZU* "physician"; *kuššan-* "wage, fee" | `רופא`; `שְׂכַר` (vocalized) | 56 | LH *asû* = `רופא`; *kuššan-* again in HL 24 (120–121) |
| *duwarna-* "break" | `שבר` (`ישבור`) | 57 | CHiL "torce" |
| *wak-* "bite (off)" | `נשך` (`ינשוך`) | 63 | as LE *našāku* (§42: the same 1-mina tariff) |
| *KIR₁₄* "nose"; *ištaman-* / GEŠTU "ear"; *GÌR* "foot" | `אף`; `אוזן`; `רגל` | 63, 69, 57 | |
| *iškalla-* "slit, tear" | `קרע` (`יקרע`) | 69 | CHiL "mutila" |
| *šarḫuwant-* "belly; foetus" | `בטן` (`את בטנה`) | 74 | literal; CHiL "il feto" |
| *ITU n{KAM}* | `החודש ה־n` (`החודש העשירי`) | 75 | |
| *taya-* | `יגנוב` | 83 | F9 (see formulas) |
| *išḫa-* "master" | `אדון` (`אדוניו`) | 85 | §5 *bēlum* of persons |
| *kanešš-* "recognize" | `הכיר` (`יכיר`) | 85 | |
| *luyumna-* / *luwili-* "Luwian" | `לוּוִי` (always vocalized: "Levi", "escort") | 97 | add to §H6? |
| *ḫuwai-* "run, flee" | `ברח` (`יברח`) | 102 | (law corpus *ḫalāqu* = `נמלט`) |
| *ēpp-* "seize" | `תפס` (`יתפוס`) | 104 | |
| *manninkuwan* "near" | `בקרבת מקום` | 104 | |
| *E.SIR* "shoes" | `נעליים` | 105 | = Sum. *e-sir₂* (Gilg. XII, GEN) |
| *kez* / *edi* + ÍD "this / that side of the river" | `מצד זה של הנהר` / `מן הצד ההוא של הנהר` | 106, 108 | `מעבר` avoided (the `עבר` reservation) |
| *pā(i)-* "go" | `הלך` (`ילך`) | 111 | |
| *kurur-* "enmity" (*kururi KUR-e*) | `ארץ אויב` | 115 | the H4 gate's word |
| *wemiya-* "find"; *ḫašša-* "hearth" | `מצא`; `מוקד` | 119 | GEN has `*מוקד*` for Sum. *niĝ₂-tab* |
| *ÚTUL* "pot"; *luli-* "pond, basin" | `קדרה`; `בריכה` | 122 | ÚTUL = Sum. *utul₂* `קדרה` (proverbs) |
| *paprešš-* "become impure" | `ייטמא` | 122 | §7.1 `נטמא`; see gates |
| *iwaru-* "dowry" | `מַתָּן` (`מַתָּנָהּ`, always vocalized: "gift") | 139 | as §7.1 |
| *apiya* "there"; *warnu-* "burn" | `שם`; `שרף` (`ישרפו`) | 140, 141 | Maqlû gates `שׂרף` to *šarāpu* in its own corpus only |
| *atta-* "father"; *DUMU.MEŠ* | `אב`; `בנים` | 143, 144 | |

**Pre-set rows of §7 / §H checked against the drafted lines.**
- §7.1 rows used as set: *takku*, *kuiški*, *kuen-*, *walḫ-*, *n=aš aki*, *QĀSSU waštai*, *šarnink-* / *šarnikzel*, *pai-* / *pešker*, *karū … kinun=a*, *parna=šše=a šuwāezzi*, *SAG.DU*, *ELLUM*, *ARAD/GÉME*, *LÚ/MUNUS/antuḫša-*, *KÙ.BABBAR/GÍN/MA.NA*, *LUGAL*, *É.GAL*, *iwaru*.
- F6 is written **twice in HL 3–4**: *keššar=šiš waštai* (11, the Hittite word for "hand") and *QA-AS-SÚ waštai* (17). Both = `ידו חוטאת`. The F6 regex does not match *keššar=šiš waštai*: add `keššar=šiš waštai` (and `kiššar`).
- F9 (`t[aā]y[ae]zzi`) misses the spelling *dāyezzi* (87, 92, 97): widen to `[td][aā]y[ae]zzi`.
- F5, F2, F3, F4, F8, F1 worked as set. Punctuation of the F5 / F6 pair: `וימות –` / `ידו חוטאת –` (the selftest's `ידו חוטאת:` is only a test).
- §7.1 *parkunu- / papr-*: the gate list has `יטמא` but not the plene `ייטמא` (122, 124, 128) nor `שייטמא`; add them (the line passes now only because the gate does not see it).

**Gates that are wrong (false licences, seen in the data of 1–145).** The licences match inside other words or German glosses:
`ארז` (`erin|eren`) is licensed by "kompens**ieren**" (26, 50); `פיצה` by the gloss "kompensieren(?)" of *šaktai-* (50);
`שלח` (`tarn`) by *iš**tarn**ikzi* (49); `נשא` (`ped`) by *pēdi* "place" (51); `מחנה` (`karaš`) by *karaššiyēzzi* (31);
`שכב` (`šaš`) by *attaš=**šaš**=a* (143). Suggest anchoring each licence to the lemma (`\bgiš\.erin`, `\btarna-`,
`\bpeda-\b`, `karaš\b`, `\bšeš-`). None of these words is used in 1–145, so no line depends on the false licence.

**Tool / base point.** `verify HL1` reports "entries out of the base's order" (1 problem) for every draft: the base list
ends with the colophons labelled `1`, `1`, `2`, `3` after 567 (CHiL's labels for the tablet's end lines), so the label set
has duplicates and the order check can never pass. The colophon rows need unique labels (e.g. `col.1`–`col.4`) or the
check must skip them. Not fixable in the annotated file.

**Cruxes (all recorded in the apparatus).**
- *šullannaz* (1, 5): "in a quarrel" (Hoffner, CHD) vs CHiL "con intenzione" – decides whether HL 1–4 distinguish intent
  from accident like Exod 21:12–14, or quarrel from a blow that ended in death.
- *apūn arnuzi* (2 etc.): "he shall bring him (the corpse, for burial)" vs "make restitution for him" vs CHiL "take care of
  him"; rendered literally (`יַגִּיעַ`).
- *parna=šše=a šuwāezzi*: subject = the culprit (Hoffner) or the victim's side (CHiL "la vittima cercherà il risarcimento");
  the Hebrew keeps the Hittite's open subject.
- HL 5, 28: whether the 100 minas also apply "in the land of Ḫatti"; *=pat* with the merchant (ours) or the subject (CHiL).
- HL 20, 95: who pays the 12 shekels to whom (owner → returner, or thief → owner).
- HL 27, 139: who carries the dowry in (291.3 `iwaru=šši … pēdāi` suggests the bride: `תישא`).
- HL 26b–c: the standard text is broken; the content is given from 291.3–5 in the נוסחים.

**Findings for the parallels index (selection).** Exod 21:13 `וְהָאֱלֹהִים אִנָּה לְיָדוֹ` ↔ "his hand errs" (11, 17)
[equivalent]: the hand as the agent in both, the deity only in the Torah; Exod 21:12, 14 / Num 35:31 [divergence]
(persons, not death; no asylum); Exod 21:18–19 ↔ HL 10 [equivalent]: the substitute worker = `שִׁבְתּוֹ יִתֵּן`, the physician's
fee = `וְרַפֹּא יְרַפֵּא`; Exod 21:22 ↔ HL 17–18 [divergence]: a tariff by month and class vs the husband's claim before
`פְּלִלִים` (291.3 has a flat rate); Exod 21:24–27, Lev 24:19–20 ↔ HL 7–16 [divergence]: silver for every limb; Exod 21:27
`יַפִּיל` ↔ *lak-* [equivalent]; Exod 21:16, Deut 24:7 ↔ HL 19–21 [divergence]: the kidnapper loses his house (19a) or pays
heads (19b), and the law grades by nation (Ḫatti / Luwiya); Deut 23:16–17 ↔ HL 20–24 [divergence, a reversal]: the
returner of a runaway is paid, the harborer pays wages; Deut 21:1–3 ↔ HL 6 [divergence]: land, not a rite; the measuring
appears only in HLPT § IV; Lev 11:33, 36 ↔ HL 25 [divergence]: defilement of a vessel or pond as damage to property;
Deut 24:1 ↔ HL 26 [divergence]: the woman may "refuse" the man (291.5); Amos 2:6 `בַּעֲבוּר נַעֲלָיִם` ↔ HL 22 (shoes as
the finder's fee). The code that revises itself (*karū … kinun=a*): HL 7, 9, 19b, 25 in 1–145, every time halving the
former tariff, and HL 9 / 25 name the king's act (`ועתה המלך … השליך`) – the OS already has the same revisions.

**Shared words HLPT will need** (HLPT § I–XLI reworks HL 1–49): all the formulas above; *šullatar* `במחלוקת`, *arnu-*
`יַגִּיעַ`, *peḫute-* `הוליך`, *uwate-* `הביא`, *taya-* `יגנוב`, *ḫunink-* `פצע` / `הפצוע`, *duwarna-* `שבר`, *wak-* `נשך`,
*iškalla-* `קרע`, *lak-* `הפיל`, *dašuwaḫḫ-* `עיוור`, *pešš-* `השליך` (*šarḫuwant-* `בטן`), *kanešš-* `הכיר`, *išḫa-*
`אדון`, *ḫuwai-* `ברח`, *ēpp-* `תפס`, *E.SIR* `נעליים`, *kuššan-* `שְׂכַר`, *A.ZU* `רופא`, *ištarnink-* `וְיַחֲלֶה`, *šaktai-*
`טיפל`, SIG₅ `החלים`, *antuḫša-* `אדם`, *arḫa-* `גבול`, *gipeššar* `אַמָּה`, *karšš-* `חתך`, DAM.GÀR / *unattalla-* `תַּגָּר`,
*āššu-* `רכוש`, the numbers (2–10 plural `שקלים`, 11+ singular `שקל`; `מנה כסף`, `מאה מנה כסף`; `ראש אחד`, `שני ראשים`,
`שנים עשר ראש`). § IV of HLPT (the corpse in the field) is the place for the Deut 21:1–9 measuring.

### Part 2 (HL1 146–290)
Drafted 2026-10-25: clauses 146–290 (HL §28–§52; CHiL sections 29–54; HL 49 is not in this text, and HL 50 begins in a
gap). Base order kept: §35 (181–183) stands between §32 and §33 in ms. A, so the file has it there. `verify HL1`: 0
problems (one repeated-line difference, 180/186, justified in the entry: Hittite *=an* is common gender, "her" / "him");
`check_bible_quotes.py`: 0 problems. Placeholder `<!-- טרם תורגם: 291–col4 -->`.

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *tar- / te-* "say"; ptcp. *taranza* | `אמר`; `אמורה (לאיש)` | 146 | the betrothal "by word"; `אֹרָשָׂה` stays the Torah's |
| *pittenu-* "make run, elope with" | `הבריח` (`יבריח`) | 147 | causative of *pittai-*; ≠ *ḫuwai-* `ברח` |
| *kuššan* "when" (adv.) | `כאשר` | 148 | homograph of *kuššan-* "wage" |
| *ḫantezzi(ya)-* "first" | `הראשון` | 149 | |
| *kui- kui-* "whatever" | `כל אשר` | 149 | |
| *atta-*; *anna-* | `אב`; `אם` | 151 | |
| *mimma-* "refuse" | `מאן` (`ימאן`, `ימאנו`) | 154 | [equivalent] Exod 22:16 `אִם מָאֵן יְמָאֵן אָבִיהָ` |
| *tuḫš-* "cut off, separate" | `ניתק` (`וינתקו`) | 155 | kept apart from *ḫarp-* `נפרד` |
| *ḫamenk-* "bind" (betrothal) | `קשורה (לאיש)` | 156 | |
| *kušata* "bride-price" | `מֹהַר` (defective, always vocalized) | 157 | §7.1 |
| *piddai-* "render, pay (a due)" | `הגיש` (`יגיש`) | 157 | `יביא` = *uwate-*; `ימסור` = LH *šarāku* (the dowry verb) |
| *appezzi(ya)-* / *appezziyan* "later" | `לאחר מכן` | 158 | |
| *ḫulla-* "fight, oppose" | `התנגד` (`יתנגדו`) | 158 | `יערערו` = LH *baqāru* |
| *2-ŠU* "twice" | `פי שניים` | 160 | ↔ LH §160 `יכפיל וישיב` |
| *nāwi* "not yet" | `טרם` | 161 | |
| *šamen-* "pass by; forfeit" | `הפסיד` (`יפסיד`) | 164 | also needed in HL 48 (OS) |
| *šiela-* (meaning uncertain) | `*פנויים*` | 165 | crux; CHiL "soli" |
| *ar- anda* "come together" | `באו יחד` | 166 | |
| *DAM* "wife"; *ANA DAM-ŠU dā-* | `אשה`; `לקח לאשתו` | 167 | |
| *iya-* "do, make"; iter. *išša-* | `עשה` | 168 | both forms one Hebrew |
| *idalawešš-* "become bad" | `היו רעים` | 169 | |
| *naššu … našma* | `או ש… או ש…` | 169 | |
| *ḫarp-* (mp) "separate" | `נפרד` (`ייפרדו`) | 170 | |
| *šarra-* "divide"; *takšan* | `חלק` (`יחלקו`); `לשניים` | 171 | [equivalent] Exod 21:35 `וְחָצוּ` (`חצה` avoided) |
| *DUMU*, *DUMU.MEŠ*, *DUMU.NITA* | `בן`, `בנים` | 168 | |
| *DĪNU* + *QĀTAMMA=pat* | `דינם – כך ממש` | 175 | *QĀTAMMA=pat* = `כך ממש` (also 288) |
| *AGRIG* "steward"; *SIPA* "shepherd" | `סוכן`; `רועה` | 181 | = Sum. *aĝrig* (Gudea `סוכן`), *sipa* |
| *GÉME-iššaršš-* "become a slave woman" | `לאָמָה תיעשה` | 183 | |
| *parā tarna-* "let go, release" | `שלח החוצה` (`ישלח`) | 180 | gated `שלח`; [equivalent] Exod 21:26 `לַחָפְשִׁי יְשַׁלְּחֶנּוּ`. CHiL reads *=an* in 180 as the slave ("him"); we read the wife |
| *LÚ antiyant-* "in-marrying son-in-law" | `חתן־בית` | 185 | |
| *šardiya-* "helper, supporter" | `עוזר` | 188 | |
| *appanda* "after" | `אחרי` (`ואחריהם`) | 188 | |
| *kiš-* "become" | `נעשה` (`ייעשה`, `נעשית`) | 191 | |
| *UR.BAR.RA* "wolf" | `זאב` | 191 | = Sum. *ur-bar-ra* |
| *ḫanneššar* "lawsuit" | `דין` | 192 | §7.1 |
| *kartimmiya-* "be angry" | `זעם` (`יזעמו`) | 194 | |
| *ḫar(k)-* "have, hold" | `החזיק` (`יחזיק`) | 198 | |
| *ḫark-* "perish, be lost" | `אבד` (`יאבד`, `אבוד`) | 203 | homograph of *ḫar(k)-* "hold" |
| *šaḫḫan*; *luzzi* | `שַׁחְחַן`; `לוּצִּי` | 199; 258 | §7.1; first note at 199 |
| *arḫa* + *pešš-* "throw away" | `השליך הלאה` | 200 | |
| *dala-* "leave" | `הניח` (`יניח`) | 201 | |
| *ḫapparai-* "trade, sell"; *ḫappar* "deal" | `מכר` (`ימכור`); `מסחר` | 202; 279 | |
| *LÚ GIŠTUKUL*; *GIŠTUKUL* (the service) | `איש־הכלי`; `הכלי` | 203 | §7.1. So UNŪTU "implements" = `חפצים` (251), not `כלים` |
| *LÚ ILKI* | `אִישׁ־הַהֲלָךְ` (`הַהֲלָךְ` always vocalized: "the walker") | 204 | §7.1; [cognate via the Akkadogram] Ezra 7:24 `וַהֲלָךְ` |
| *tittiya-* "install, assign" (ptcp.) | `מוצב` | 204 | |
| *šiyattariya-* "have sealed/registered to oneself" | `רשם לעצמו` (`ירשום`) | 208 | `חתם` kept off (the Egyptian corpus's loanword) |
| *NAM.RA* "deportee" | `שבויים` | 214 | |
| *kuššaniya-* "hire" | `שכר` (`ישכור`) | 228 | the verb of *kuššan-*; `שָׂכָר` / `שְׂכַר` / `שְׂכָרוֹ` vocalized |
| *laḫḫa-* "campaign" | `מערכה` (`למערכה`) | 229 | `מסע` = LH *ḫarrānu* |
| *GU₄*; *KUN* "tail"; *BĒL GU₄* | `שור`; `זנב`; `בעל השור` | 237 | §5 *bēl* + noun |
| *zinu-* (caus.) / *zai-* "cross" | `העביר` / `עבר` | 237, 240 | Hesiod's precedent for crossing a river; `עבר` is not a Hittite reservation, but Akkadian *ebēru* has it: **check** |
| *šuwai-* "push, drive away" | `דחה` (`ידחה`) | 238 | ≠ *šuwaye-* "look" (F4); the CHiL gloss "(an)schauen" here is wrong |
| *paḫḫur* / IZI "fire" | `אש` | 243 | |
| *appa* "back, in return" | `בחזרה` | 245 | as *EGIR-pa* (103) |
| *parkunu-* "purify" | `טיהר` (`יטהר`) | 246 | gated |
| *kuptar* "remains"; *uktūri-* "cremation site" | `שיירים`; `מקומות השרֵפה` | 247 | CHiL "discarica" (crux) |
| *alwanzatar* | `כשפים` | 249 | gated |
| *DĪN LUGAL* | `דין המלך` | 250 | §7.1 |
| UNŪTU "implements, goods" | `חפצים` | 251 | |
| *wemiya-* | `מצא` | 251 | (§7.3) |
| *piyanai-* "reward" | `גמל` (`[לו] יגמול`) | 253 | wisdom corpus has `גמל` for *riābu*: cross-language, no cognate |
| *NÍ.ZU* "thief" | `גַּנָּב` (`לְגַנָּב`, vocalized) | 255 | §7.1 |
| *iwaru* "inheritance share" | `מַתָּן` (`כְּמַתָּן`; `אדון המַתָּן`) | 256 | §7.1; one Hebrew for the dowry (HL 27) and the inheritance share |
| *mekki-* "much"; *tepu-* "little" | `רב`; `מעט` | 257 | |
| *karp-* "lift; render (a duty)" | `הרים` (`ירים`) | 258 | literal; `נשא` is gated to *peda-* |
| *kulei* "fallow" | `בור` (`השדות הבורים`) | 262 | |
| *ark-* "divide off" | `הפריש` (`יפריש`) | 262 | CHiL "delimita" |
| *NÍG.BA* "gift" | `מַתַּת` (vocalized) | 265 | kept apart from *iwaru* `מַתָּן` |
| *BANŠUR*; *NINDA* | `שולחן`; `לחם` | 267 | = Gilg. *paššūru* `שולחן` |
| *waš-* "buy" | `קנה` (`יקנה`) | 269 | |
| *ḫippara-* | `חִפָּרָה` (transliterated, always vocalized: "dug") | 276 | add to §H2 / §H6? |
| *lē kuiški* | `אף אחד אל` | 277 | |
| *eya-* (tree) | `עץ־אֵיָה` | 281 | |
| *āšk-* "gate" | `שער` | 281 | |
| *UŠ.BAR* "weaver" | `אורג` | 283 | = Sum. *uš-bar* |
| *arawa-* and *ELLUM* **of a house** | `פטור` | 284, 286 | **proposal:** *ELLUM* of persons = `בן חורין`, of a house or land = `פטור` (= *arawa-*); the gate `בן חורין` is unaffected |
| *LÚ.MEŠ ḪA.LA* "men of the share"; *NIŠŪTU* "kin" | `אנשי־חלקו`; `קרוביו` | 285 | |
| *É.NA₄* "stone house"; *DUMU.LUGAL*; *BĒL ŠUPPATI* | `בית־האבן`; `בן־המלך`; `בעל *שֻׁפַּתִּי*` | 289 | *ŠUPPATI* transliterated; never `קדש` (the gate's licence `šupp` matches it: anchor the licence to *šuppi-*, `\bšuppi\|\bšuppa\b\|šuppešš`) |

**Pre-set rows checked.** §7.1 *kušata* `מֹהַר`, *iwaru* `מַתָּן`, *šaḫḫan* / *luzzi*, *LÚ GIŠTUKUL* / *LÚ ILKI*, *ḪA.LA*
`חלק`, *DĪNU*, *alwanzatar*, *parkunu-*, *ARAD/GÉME*, *ELLUM* – used as set (with the *ELLUM*-of-a-house proposal above).
F1–F8 worked; F9 did not fire in this range (no *taya-*).

**Gates and traps (new points).** `קדש`'s licence `šupp` matches *ŠUPPATI* (289): anchor it. Add `חפרה` (*ḫippara-*) and
`הלך` / `ההלך` (*ILKI*, read "the walker") to §H6 if you want them enforced; `מהר` (bride-price) is already a trap in the
law corpus guidelines ("quickly") – consider a §H6 row (licence `kušat`).

**Cruxes (in the apparatus).** HL 28 / 154: what the parents "refuse" (to give her, or to compensate: CHiL); HL 31 *šiela-*
(`*פנויים*`); HL 34 / 36 *parā tarna-*: whom "no one shall release" (the wife / the slave) and what it means (status kept,
or no leaving); HL 35 / 183: "in the third year she becomes a slave" (OS `I-NA MU 3{KAM}`) vs CHiL "enslaved for 3 years";
HL 37: who the "helpers" are (the family's pursuers, CHiL) and who dies; HL 38 / 194 the broken subject; HL 41 / 218 ms. A
writes LÚ ILKI where OS and 291.3 have the man of the tool (scribal error; translated as written); HL 44b *uktūri-*
(cremation site vs dump); HL 52 *ŠUPPATI*.

**Versions worth the index.** HL 32–33: the OS spells out the division of goods and children that the standard text
abbreviates to "their case is the same"; HL 42: the wages (12 / 6 shekels) are absent from the OS and present in 291.3 and
the standard text – a later addition; HL 43: 291.3 adds an explanatory clause; HL 44b: OS "throws (*pešš-*) them into
someone's house" (no field); HL 45: OS *āššu* "goods" for UNŪTU; HL 46: OS has no "and the šaḫḫan", 291.3 "fields of
šaḫḫan"; HL 47a: OS exempts from "šaḫḫan (and) luzzi", the standard text only from luzzi (a narrowing), and names the king
as the giver of the loaf; HL 50: the full OS list (Nerik, Arinna, Zippalanda, the eya-tree); HL 51: a privilege reduced
(*karū … kinun=a* applied to an exemption, not a tariff) – already in the OS.

**Parallels (selection).** Exod 22:15–16 ↔ HL 28–30 [equivalent / divergence]: the refusal of the father (`מָאֵן יְמָאֵן` ↔
*mimma-*), but the Hittite parents act together and the betrothal is by word, then by "binding" and bride-price; double
restitution ↔ LH §160; Exod 21:3–4 ↔ HL 31–36 [divergence]: in the Torah the slave's wife and children stay with the master,
in HL the free father takes the children, the mother one child, the house is halved; Exod 21:2 ↔ HL 35 [divergence,
reversal]: a free woman becomes a slave in the third year; Deut 19:6 ↔ HL 37 [divergence]: pursuit allowed, the abductor
"has become a wolf"; Exod 22:14 ↔ HL 42; Exod 21:28 `בַעַל הַשּׁוֹר` ↔ HL 43; Exod 21:23 ↔ HL 43, 44a [divergence]: a person
or a son handed over, not death; Exod 22:17 ↔ HL 44b [equivalent/divergence]: sorcery = moving the ritual's residue onto
another's property, judged by the king; Lev 14:7 ↔ HL 44b; Deut 22:1–3, Lev 5:22 ↔ HL 45 [equivalent; divergence: a finder's
reward, and the keeper "becomes a thief"]; 1 Sam 8:14; 1 Kgs 21:3; Lev 25:23 ↔ HL 39–48 (land held under service); 2 Sam 9:7,
13 ↔ HL 47a [equivalent]: fields granted with bread from the king's table; Gen 47:22, Ezra 7:24 (`וַהֲלָךְ`) ↔ HL 50–51
[equivalent]: cult personnel exempt from royal service.

**Shared words for HLPT** (its §§ XXIX–XLI rework HL 28–49): all of the above, especially *pittenu-* `הבריח`, *piddai-*
`הגיש`, *kušata* `מֹהַר`, *mimma-* `מאן`, *tuḫš-* `ניתק`, *šardiya-* `עוזר`, *ḫar(k)-* `החזיק` / *ḫark-* `אבד`, *karp-*
`הרים`, *šaḫḫan* / *luzzi*, `איש־הכלי` / `אִישׁ־הַהֲלָךְ`, *tittiya-* `מוצב`, *šiyattariya-* `רשם לעצמו`, *kuššaniya-* `שכר`,
*laḫḫa-* `מערכה`, *parkunu-* `טיהר`, *kuptar* `שיירים`, *alwanzatar* `כשפים`, UNŪTU `חפצים`, *piyanai-* `גמל`, *NÍG.BA*
`מַתַּת`, *waš-* `קנה`, *kulei* `בור`, *ark-* `הפריש`, *ḫippara-* `חִפָּרָה`, *ḫappar(ai)-* `מסחר` / `מכר`, *šamen-* `הפסיד`.

### Part 3 (HL1 291–439)
Drafted 2026-10-25: clauses 291–439 (HL §53–§76; CHiL sections 55–78). `verify HL1`: 0 problems (the one listed
repeated-line difference is still 180/186, accepted); `check_bible_quotes.py`: 0 problems. Placeholder
`<!-- טרם תורגם: 440–col4 -->`. The coordinator's two fixes (`וְהָאֵם`, `הַבּוּרִים`) kept.

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *takšan* "together" (+ *eš-*) | `יחד` (`יחד יהיו`) | 291 | in 171 *takšan šarra-* was `לשניים יחלקו` (CHiL "a metà"): a split by sense, flag; `יחד` also renders *anda* in 166 (`ויבואו יחד`) – lexmap shows it |
| *LÚ ḪA.LA-ŠU* | `איש־חלקו` | 291 | §7.4 `אנשי־חלקו` |
| *gimra-* / LÍL "open country" | `בָּר` (vocalized) | 294 | the ritual corpus's word (§H3 note) |
| *ṬUPPU* | `לוח` | 298 | §5 |
| *karuwili-* "former" | `ישן` (`השדות הישנים`) | 299 | not `לפנים` (F2, *karū*) |
| *QĀTU* "hand, share" | `יד` (`שתי ידות`) | 300 | [equivalent; coordinator: *qātu* is not the cognate of `יד` (= *idu*)] Gen 47:24 `וְאַרְבַּע הַיָּדֹת` |
| ÉRIN.MEŠ | `אנשי צבא` | 302 | Akk. *ṣābu* = `צָבָא` (§6.7) |
| MANDA, ŠALA, *karuḫali-* | `מַנְדָּה`, `שָׁלָה`, `קָרוּחָלִי` (transliterated) | 302 | |
| *LÚ GIŠPAN*; *NAGAR GIŠ-ṢÍ*; *KUŠ₇* | `קשתים`; `חרשי העץ`; `אנשי המרכבה` | 302 | `חרשי העץ` ↔ `חָרַשׁ עֵצִים` (ישעיהו מד:יג) |
| *uwa-* "come" | `בא` | 304 | |
| *aruwai-* "bow down" | `השתחווה` (`משתחווים`, narrative present) | 305 | |
| *tar-* iter. *taršk-* | `אומרים` | 306 | |
| *ara-* "peer, friend" | `חבר` (`חבריכם`) | 313 | |
| *apeniššan* "in that way" | `באותה דרך` | 314 | kept apart from *QĀTAMMA* `כך` |
| *tuliya-* "assembly" | `אספה` | 310 | |
| *tiya-* "step" (+ *anda*) | `נכנס` | 310 | |
| *BÀD* "fortification"; *KASKAL LUGAL* | `חומה`; `דרך המלך` | 315 | |
| *takš-* "join, build" | `בנה` (`לבנות`) | 315 | ms. C `pāuwanzi` "to go" |
| *tuḫš-* (of vineyards) | `לנתק` | 316 | kept to the §7.4 Hebrew of the verb; CHiL "potare" |
| *LÚ TIBIRA* "coppersmith" | `חרש־הנחושת` | 317 | `נפח` is Gilgameš's *nappāḫu* (cognate); ↔ 1 Kgs 7:14 `חֹרֵשׁ נְחֹשֶׁת` |
| *NU.GIŠKIRI₆* "gardener" | `גנן` | 318 | as LH F41 (*nukaribbum*) |
| *ḫumantiya=pat* | `כל אחד ואחד` | 318 | |
| *GU₄.MAḪ* | `פַּר` (vocalized) | 319 | §7.1 |
| *šawitišt-* "weanling" | `גָּמוּל` / `גְּמוּלִים` (always vocalized: "requital") | 320 | §7.1 |
| *iuga-* / MU.1; *taiuga-* / MU.2 | `בן שנה`; `בן שנתיים` | 322, 324 | |
| *ANŠE.KUR.RA.MAḪ* "stallion" | `סוס־הרבעה` | 330 | |
| *UDU* pl. | `צאן` (feminine numerals: `שלושים צאן`, `שש צאן`, as `וְאַרְבַּע צֹאן`) | 342 | |
| *UDU.U₈*; *UDU.NÍTA*; *UDU.ÁŠ.MUNUS.GÀR* | `רחל` (`רחלות`); `כבש`; `כבשה` (`כבשות`) | 344 | |
| *parkunu-* of an animal ("castrate") | `טיהר` (`ויטהר אותו`) | 347 | literal: the Hittite euphemism; CHiL "castra"; ↔ Lev 22:24 |
| *GU₄ APIN.LÁ*; *ANŠE.KUR.RA turiyawaš* | `שור חרישה`; `סוס רתמה` | 364, 369 | |
| *turiya-* "harness" | `רתם` (`ירתום`) | 410 | |
| *uttar* / *AWĀTU* "matter" | `דבר` (`דברו – כך ממש`) | 370, 392 | |
| *enant-* "tame"; *annanuḫḫa-* "trained" | `מבוית`; `מאולף` | 371, 372 | |
| *DÀRA.MAŠ* "stag" | `אַיָּל` (vocalized; ≠ UDU.A.LUM `אַיִל`) | 372 | add a §H6 row? |
| *UDU.KUR.RA* | `שה־הרים` | 373 | |
| *ÁB*; *ANŠE.KUR.RA.MUNUS.AL.LÁ* | `פרה`; `סוסה` | 378, 379 | |
| *ḫali-* "corral"; *ašawar* "pen" | `מכלאה`; `דיר` | 379, 382 | (Gilg. `דיר` is *supūru*: cross-language) |
| *ḫarp-* (mp) "stray (into another's pen)" | `נפרד אל` | 379 | §7.4 `נפרד`; CHiL "sconfina" |
| *šakuwaššar-* "intact, complete" | `בשלמותו` | 384 | |
| *2-ki* / *2-TAM* "double" | `כפליים` | 404 | kept apart from *2-ŠU* `פי שניים` |
| *ANŠE.GÌR.NUN.NA*; *ANŠE* | `פרד`; `חמור` | 400 | §7.1 |
| *unna-* "drive (here)" | `נהג` (`ינהג`) | 407 | |
| *utne* "land, countryside" | `ארץ` (`בארץ`) | 408 | |
| *ḫink-* "present, hand over" | `הציג` (`יציגו`) | 409 | |
| *LÚ.MEŠ ŠU.GI* | `זקנים` | 409 | gated, §7.1 |
| *tayazzil-* "theft" | `גנבה` | 420 | |
| *SI* "horn" | `קרן` | 421 | |
| SIG₅ (adj.) "good" | `משובח` | 423 | SIG₅ (verb) `החלים` (§10); `טוב` avoided |
| *karap-* "devour" | `טרף` (`יטרוף`) | 430 | [equivalent] Exod 22:12 |
| BA.ÚŠ "died" | `מת` | 434 | |
| *link-* "swear" | `נשבע` (`וְיִשָּׁבַע`, vocalized: "be sated") | 435 | gated; the gate list has `ישבע` but not the plene `יישבע` |
| *appatariya-* "impound, commandeer" | `עיכב` (`יעכב`) | 436 | CHiL "requisisce" |

**Formulas and gates.** F1–F9 fired as set. Points: the `שבועה` gate should list `יישבע` / `ויישבע` (plene); the
`לפנים` licence `früher` matches the gloss of *karuwili-* (299: "früherer") – harmless (the line has no `לפנים`), but anchor
it if you want; `אַיָּל` vs `אַיִל` (DÀRA.MAŠ / UDU.A.LUM) and `גָּמוּל` (weanling) vs `גמול` (requital, *piyanai-* `יגמול`)
could be §H6 traps.

**Cruxes (in the apparatus).** 294 *gimraš=šaš* "of their open land" (CHiL "of his land"); 302 MANDA, ŠALA, *karuḫali-*;
315–316 the syntax of HL 56 (a list of works no one is exempt from – CHiL) and *tuḫš-* of vines (prune or harvest); 347
*parkunu-* = castrate (rendered literally); 374 MÁŠ.GAL! (the editors' emendation; the OS has the plough-ox as the
measure); 379 / 382 *ḫarp-*; 419 *ark-* (CHiL "locks up"; we keep `יפריש`); 438 *apūn arnuzzi* (CHiL "keeps it");
439 *kuššan-* "its hire" (CHiL "its value").

**The numbers (Hittite "now" / "formerly" ↔ the Torah), for the index.** Bull 15 / 30 (5 two-year-olds, 5 yearlings, 5
weanlings) ↔ Exod 21:37 five cattle for an ox; stallion 15 / 30; ram 15 / 30 sheep (5 ewes, 5 rams, 5 lambs) ↔ four sheep
for a sheep (also 2 Sam 12:6 `אַרְבַּעְתָּיִם`); plough-ox 10 / 15; harness horse = plough-ox; cow 6 / 12; mare = cow; ewe or
ram 6 / 12; a stolen animal found alive: returned + double (HL 70) ↔ Exod 22:3 `חַיִּים שְׁנַיִם יְשַׁלֵּם`; castration 7
(about half the theft tariff) ↔ Lev 22:24; an ox dead in another's field: 2 (HL 72) ↔ Exod 21:34; horn or leg broken:
exchange for a good ox, or keep it + 2 shekels (HL 74) ↔ Exod 21:36 `שׁוֹר תַּחַת הַשּׁוֹר`. Every tariff of HL 57–69 that
has a "formerly" is halved (only the plough-ox by a third), and the OS already has the reduced tariffs.

**Other parallels (selection).** Gen 47:24 (`יָדֹת`) ↔ HL 53; 1 Kgs 5:27, 12:4 ↔ HL 54–55 (forced labour; subjects petition
the king; here the king's answer is "do as your fellows"); 1 Kgs 7:14 ↔ HL 56; Deut 22:2 ↔ HL 66, 71 [equivalent: the
finder keeps the animal until the owner claims it; divergence: a public declaration at the king's gate or before the
elders, and the finder may harness it]; Exod 23:4 ↔ HL 71; Exod 22:9–13 ↔ HL 75 [equivalent, the closest structural match
in this part: a borrowed or hired animal dies, is devoured or lost → full replacement; "died by the god" → an oath,
`שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם`; divergence: the devoured animal is paid for in HL, not in the Torah]; Exod 9:3 `יַד
יְהוָה … בְּמִקְנְךָ` ↔ OS HL 75 `I-NA QA-TI DINGIR-LIM` "by the hand of the god"; Exod 22:14 ↔ HL 76.

**Versions.** HL 53: OS imperative *dāu*; mss. C, D plural partners; HL 54: ms. E omits several groups; HL 56: ms. C
"to go"; HL 64: OS `uttar=šed=a kī=pat`; HL 65: OS measures by the plough-ox; HL 75: OS "by the hand of the god"; all the
animal tariffs identical in OS and standard.

**Shared words for HLPT** (§§ XXXI ff. rework HL 53–76?): the animal table (`פַּר`, `סוס־הרבעה`, `גָּמוּל`, `בן שנה`,
`בן שנתיים`, `רחל`, `כבש`, `כבשה`, `צאן`, `שור חרישה`, `סוס רתמה`, `פרה`, `סוסה`, `פרד`, `חמור`, `אַיָּל`, `שה־הרים`),
*turiya-* `רתם`, *šakuwaššar-* `בשלמותו`, *2-ki* `כפליים`, *unna-* `נהג`, *ḫink-* `הציג`, *karap-* `טרף`, *appatariya-*
`עיכב`, *tayazzil-* `גנבה`, *enant-* `מבוית`, *ḫali-* `מכלאה`, *ašawar* `דיר`, *link-* `נשבע`.

### Part 4 (HL1 440–col4)
Drafted 2026-10-25: clauses 440–567 (HL §77a–§100; CHiL sections 79–103) and the colophons col1–col4. **HL1 is
complete**: 571 entries, 104 `## ` headings (= the base's 103 sections + the colophon), no `@`, no placeholder.
`verify HL1`: 0 problems (the one repeated-line difference is 180/186, accepted); `check_bible_quotes.py`: 0 problems;
`selftest`: 0 failures. Also done at the start of this part: 291 notes the *takšan* split; 204's tag corrected to
[cognate loan] (Aramaic `הֲלָךְ` is borrowed from *ilku*, not cognate); 302 (ÉRIN = *ṣābu* = `צָבָא`) is a true cognate and
stays. Changed in earlier lines: 315 *takš-* `לבנות` → `להתקין` (`בנה` is now *wete-*'s, §98, §100); 166 *ar-* `יבואו` →
`יגיעו` (`בא` is *uwa-*'s; *ar-* / *arnu-* = `הגיע` / `יַגִּיעַ`).

**Whole-file self-check.** Formulas uniform across the file: F4 `ואל ביתו יביט` ×36, F5 `וימות` ×11, F6 `ידו חוטאת` ×2,
F2 `לפנים` ×16 (one without *kinun=a*: §54), F3 ×15, F1 ×155, F8 ×77, F9 ×26 – each with one Hebrew. `lexmap`
"one Hebrew for several lemmas" – all by design: Sumerogram / Akkadogram and the word it writes (*keššar* / *QĀSSU*,
*ištaman-* / GEŠTU / *UZNU*, *wemiya-* / KAR, *uttar* / *AWĀTU*, *QĀTU* / ŠU `יד`, *parn-* / *per*), *BĒLU* of a person
= *išḫa-* `אדון` (§5 rule; 536), the particles (*nu/ta/U* `ו`, *natta/UL* `לא`), *kuššan* "when" / *mān* `כאשר` (both
"when"), *anda* / *takšan* `יחד` (166, 291; accepted split), `איל` (`אַיִל` / `אַיָּל`, vocalized: the new trap),
`אמה` (`אָמָה` / `אַמָּה`, vocalized).

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *armawant-* "pregnant" | `הרה` | 440 | [equivalent] Exod 21:22 `אִשָּׁה הָרָה` |
| *šarḫuwanda* (no possessive) | `את הבטן` | 441 | §17 `את בטנה` |
| IGI "eye" | `עין` | 446 | |
| *ḫuša-*, *tarušḫa-* (harness parts) | `חוּשָׁה`, `טַרוּשְׁחָה` (transliterated) | 450 | crux: *anda dā-* "put on" (ours) / "carry off" (CHiL) |
| PARĪSU, ŠE | `פָּרִיס` (pl. `פָּרִיסִים`), `שעורים` | 452 | §H6 |
| MUL "star" | `כוכב` (`הכוכבים`) | 456 | |
| *penna-* "drive (there)" | `הסיע` (`יסיע`) | 457 | pair of *unna-* `נהג` |
| UZU Ì "fat"; KUŠ "hide" | `שומן`; `עור` | 459, 460 | |
| ŠAḪ; NIGA; ŠAḪ.TUR; *kappi-* | `חזיר` (fem. `חזירה`); `מפוטם`; `חזרזיר`; `קטן` | 461–476 | the Torah's word only by necessity (no other Hebrew for "pig"); Lev 11:7 [absent] in the apparatus |
| *ḫila-* "courtyard" | `חצר` (`של חצר`) | 465 | |
| *kappuwai-* "count" | `ספר` (`יספרו`) | 470 | |
| *šeli-* "grain heap" | `ערמה` | 479 | |
| UR.GI₇; *LÚ UR.GI₇* | `כלב`; `איש־הכלבים` | 485, 489 | CHiL "cacciatore" |
| Ì.ŠAḪ | `שומן־חזיר` | 496 | |
| NIM.LÀL; *kammara-* "cloud, swarm"; É.NIM.LÀL | `דבורים`; `ענן`; `כוורת` | 501–509 | |
| BUBUTANU | `*בּוּבּוּתָנוּ*` (transliterated; "bee-stings"? CHiL) | 507 | crux |
| *tapeššar* | `*טַפֶּשְׁנִי*` (transliterated; "in the act"? CHiL) | 512 | crux |
| *išḫai-* "bind, impose" | `חייב` (`יחייבו אותו`) | 523 | the verb of *išḫiul* `חובה` |
| *kukkurš-* "cut off, mutilate" | `קצץ` (`יקצצו`) | 530 | LH *nakāsu* `קצץ` (cross-language); ↔ Deut 25:12 |
| *šer* "on behalf of" | `בעדו` | 537 | |
| ÉSAG "storage pit"; *ḫalki-* "grain" | `אסם`; `תבואה` | 541 | (LH *našpakum* `אסם`: cross-language) |
| *šunna-* "fill" | `מילא` (`ימלא`) | 543 | |
| *lukk-* "set fire" | `הצית` (`יצית`) | 551 | |
| *wete-* "build" | `בנה` (`יבנה`) | 552 | |
| *nakkuš-* "damage, loss" | `נזק` | 555 | |
| *taišzi-* (a barn) | `*מתבן*` | 562 | Isa 25:10 |
| *etri(ya)-* "feed" | `האכיל` (`יאכיל`) | 563 | |
| *ḫamešḫant-* "spring" | `אביב` | 564 | |
| IN.NU.DA "straw" | `תבן` | 566 | |
| DUB; QATI; ŠU (scribe); PĀNI; IŠṬUR | `לוח`; `תם`; `יד`; `לפני`; `כתב` | col1–col2 | |

**The colophons (translated as data).** ms. E: "Tablet 2! of 'If […]' – hand of […], before A[…] … wrote"; ms. C:
"Tablet 2 – finished. 'If a man'. Of the father of His Majesty (`שִׁמְשִׁי`)". **Finding (looked, not presupposed):** col3
"If a man" is the **title** of this tablet (its incipit, *takku LÚ-aš*), not a catch-line for the next tablet – the second
tablet opens "If a vine" (*takku GIŠ.GEŠTIN-aš*). And both colophons call this tablet the **second** (DUB 2.KAM), though
its content is HL 1–100 (the editors mark `2!`): an open point for HL2 / the coordinator. CHiL restores the supervisor in
col1 as A[nuwanza], the court scribe of the 13th century. "Of the father of His Majesty" = the copy (or the redaction) of the
present king's father.

**Cruxes (in the apparatus).** 445 `2!` (OS: 3 shekels for a mare); 450 *anda dā-*; 507 BUBUTANU; 512 *tapešni*; 555
*nakkuš Ú-UL šarnikzi* (no compensation for what perished inside: CHiL agrees "non risarcirà"); 562 *taišzi-*; 564 *arnu-*
(CHiL "take care of them"); col1–col2 "tablet 2".

**Parallels (selection).** Exod 21:22 ↔ HL 77a (`הָרָה`; the same *pešš-* as HL 17); Exod 21:26 ↔ HL 77b; Exod 22:14 ↔ HL
78; Exod 22:4 ↔ HL 79, 86 [divergence: the field's owner uses the oxen one day, or may kill the pig but must return it];
Exod 22:12, Amos 3:12, Exod 21:35 ↔ HL 80 (the remains divided: fat to the owner, hide to the culprit); Lev 11:7 ↔ HL 81–86
[absent: the pig has a price in Ḫatti]; Exod 22:30 ↔ HL 87–90 [absent: the dog has a price by its work – a shepherd's dog
= a free man's hand]; Exod 22:1 `בַּמַּחְתֶּרֶת` ↔ HL 90 (a thieving dog killed, no compensation) and HL 93 (the burglar
caught before entering); Exod 22:6 ↔ HL 94; Deut 25:12, Exod 22:2 ↔ HL 95, 99 [divergence: the slave's nose and ears cut
off, the free man pays; the master pays or gives up the slave]; Judg 14:8 ↔ HL 91; Deut 28:8 ↔ HL 96–97; Exod 22:5 ↔ HL
98–100 [divergence: the arsonist rebuilds; a slave's master pays or loses him; a burnt barn – feed the cattle until
spring]. *karū … kinun=a* in this part: HL 81 (pig, 1 mina → 12 shekels), 91 (bees, 1 mina? → 5), 92 (hives, "stings"? →
6), 94 (house theft, 1 mina → 12): the last revision, perhaps, of a body penalty into silver.

**Shared words for HLPT:** *armawant-* `הרה`, *penna-* `הסיע`, the pig and dog words, *išḫai-* `חייב`, *kukkurš-* `קצץ`,
*lukk-* `הצית`, *wete-* `בנה`, *šunna-* `מילא`, ÉSAG `אסם`, PARĪSU `פָּרִיס`; and the earlier parts' tables.

**For the coordinator (HL1 review).** The three review passes (fidelity, consistency, Hebrew) of the whole text were not
part of this brief; the self-check above covers consistency by script. Points a reviewer may want to re-decide: `יַגִּיעַ`
for *arnu-* (CHiL varies: "occuparsi di", "consegnare", "tenere"), `מחלוקת` (*šullatar*, CHiL "with intent"), the literal
`ויטהר אותו` (castration), `לנתק` for vines, `יחייבו` (*išḫai-*), and the transliterated *tapešni* / BUBUTANU.

### HLPT (206 clauses)
Drafted 2026-10-25: `annotated-HLPT.rtl.md`, KBo 6.4 (CHiL CTH 291.PT), clauses 1–205 + col1 = 206 entries; 41 `## `
headings (§ I–XLI, with CHiL's combined § XXVII–XXVIII, + the colophon), each `## § <roman> (cfr. HL n) – <title>`
(the "cfr." only where CHiL gives one). `verify HLPT`: **1 problem, a tool false positive** (see below); otherwise clean,
no repeated-line differences; `check_bible_quotes.py`: 0; `selftest`: 0 failures; `verify HL1 --strict`: still 0.
CHiL's Italian inserted after drafting (every entry), with the disagreements marked **מחלוקת** (18, 151, 165).

**Tool false positive (for the coordinator; I may not edit the tables).** `../טקסי-שילוח-וטיהור/renderings.md` §H2 row
`ḫapall` → `חַפַּלָּה` (the place Ḫapalla) is unanchored and fires on the verb *ḫapallašai-* "injure (the head)" (HLPT 42).
Suggested regex: `ḫapall(?!aš)` (or the determinative: `\{(?:uru|kur)\}ḫapall`). After the fix `verify HLPT` = 0.

**Copying from HL1.** Every line that `data HLPT` marks identical, and every line whose Hittite is the same as an HL1 line
(44–47, 53, 63, 64, 68, 70, 72, 157, 172, 174, 177, 178, 181, 185 …), carries HL1's Hebrew word for word; the only
differences are the clause-final mark (`.` where the PT ends the law, e.g. 30, 34, 39, 67) and brackets (the PT preserves
what HL1 restores: 172, 177, 178). Where the PT differs, only the difference was changed: *LÚ* `איש` for HL1's
*antuḫša-* `אדם` (40, 51, 61, 66), no possessive on *keššar* / ŠU-aš (14, 29, 33: the formula `ידו חוטאת` kept), "of a
slave" without "or of a slave woman" (31, 56).

**Self-check.** No `@`, no placeholder; bullets in order in every entry. Formulas, each with one Hebrew: F1 ×53, F8 ×25,
F4 ×1 (63), F5 ×3 (3, 134, 136), F6 ×4 (4, 14, 29, 33), F9 ×1 (202; *dāiyazi* is outside F9's regex, the Hebrew is
`יגנוב` anyway). `lexmap` "one Hebrew for several lemmas", the new rows from HLPT: *taki-* / *tamai-* `אחרת` (the Old
Hittite and the later word for "other": by design – the PT's *damēdani* replaces HL1's *takiya*); EN / *išḫa-* / *BĒLU*
(`אדוניו`, and of a field `בעל`: the sign and the word); TI / *ḫuišwant-* `חי`; ŠÀ / *anda* `בתוך`; *išḫai-* / *išḫiya-*
`יחייבו` (one verb); DAM `לאשה` (106, "as a wife") / *ANA* `לאשה` (HL1 178, "to a woman") – the same Hebrew string for two
senses, natural Hebrew; `לוּ` (*man=mman*, 205, vocalized) / `לו` "to him". GAL "chief" is `שַׂר` (col1: `שַׂר הסופרים`,
`שַׂר הרועים`), not `ראש` (that is SAG.DU's).

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *āššuwaš anda* "among (his) goods" | `בתוך הרכוש` | 8 | CHiL "per i beni" (motive) |
| *3-ŠU*; *1-ŠU* | `פי שלושה`; `פעם אחת` | 10; 146 | as *2-ŠU* `פי שניים` (HL1) |
| *pē ḫar-* "have at hand" | `יחזיק עמו` | 11 | |
| MA.NA pl. | `מנים` (`שתי מנים`, `שש מנים`); 11+ `מנה` (`שלושים מנה`) | 7 | feminine; as `שקלים` / `שקל` |
| A.GÀR | `חלקת שדה` | 16 | §7.1 |
| *dammeli-* (land) "untouched, uncultivated" | `לא מעובד` (coordinator; was `בְּתוּלִי`: `בתולה` is reserved for *batultu*) | 22 | `שׁוֹמֵם` is LH's (*dubad*); [divergence] Deut 21:4 `אֲשֶׁר לֹא יֵעָבֵד` |
| *duwan … duwann=a* | `לכאן … ולכאן` | 22 | |
| DANNA (*bēru*) | `פרסה` (`שלוש פרסאות`) | 22 | as *bēru* in the Akkadian love songs |
| SI×SÁ (*ḫandai-*) mp. "be determined" | `תיקבע` | 23 | (`מצא` is *wemiya-*'s) |
| *ḫapallašai-* "injure (the head)" | `פגע` (`יפגע בראשו`) | 42 | ≠ *ḫunink-* `פצע`; CHiL "rompe" |
| *karmalaššai-* "remain stiff, be crippled" | `נָכֶה` (`יהיה נָכֶה`, vocalized) | 52 | ↔ 2 Sam 9:3 `נְכֵה רַגְלָיִם` |
| *išḫizziya-* (EN-*izziya-*) "become master" | `השתלט` | 94 | |
| *kutruwai-* (=*za*) "call to witness (for oneself)" | `העיד עדים` (`ויעיד לעצמו עדים`) | 151 | ↔ Jer 32:10 `וָאָעֵד עֵדִים`; CHiL "renderà testimonianza" |
| *ḫarkan* (153) | `הוחזק` (*ḫar(k)-* "hold", not *ḫark-* "perish") | 153 | so CHiL's translation |
| *arawaḫḫ-* "make exempt" | `פטר` (`יפטור`) | 161 | the verb of *arawa-* `פָּטוּר` (§7.1); ↔ 1 Sam 17:25 |
| *dai-* "put" (=*ššan*) | `שׂם` (`ישים`) | 165 | crux: CHiL *dā-* "take" |
| EN of a field | `בעל` | 164 | as HL1 241 `בעל השור` |
| *eš-* "exist" (a house) | `קיים` | 168 | |
| *punušš-* "ask" | `שאל` (`ישאלו`) | 187 | |
| *ASĪRU* "captive" | `אסיר` (`האסיר`) | 196 | [cognate via the Akkadogram]: Akk. *asīru* < *esēru*, Heb. `אָסִיר` (Isa 42:7) – the root is shared (checked, cf. the QĀTU correction) |
| *išḫiya-* "bind, impose" | `חייב` (`לא יחייבו`) | 203 | = *išḫai-* (HL1 523) |
| *man=mman* (irrealis) | `לוּ` | 205 | |
| DUB.SAR; DUMU.DUMU; GAL; NA.GAD; ḪALIBU | `סופר`; `נכד`; `שַׂר`; `רועים`; `*חָלִיבּוּ*` (transliterated) | col1 | names: `חַנִּיקּוּאִילִי`, `זִיטִי` ({m}LÚ), `קָרוּנוּוָה`, NU.GIŠ.SAR `נוּ־גִּישׁ־סַר` |

**How a 13th-century jurist reworked the code (the apparatus's findings).**
1. **Persons become silver.** HL 3–4's "heads" are gone: § II pays 2 minas for a slave woman (no *arnu-*, no F4).
2. **New distinctions.** Intent vs accident (*šullannaza* / "his hand errs") carried from HL 1–4 into the merchant (§ III),
   the blinding (§ V–VI); crippled or not (§ X–XI); 2–3 teeth (§ VII); goods or no goods (§ III); free man / woman (§ IV).
3. **The old "formerly … now" reread as two grades of guilt.** HL 7: *karū* 1 mina / *kinun=a* 20 shekels → PT § V: 1 mina
   for intent, 20 shekels for accident. HL 9: the palace share and the reform history are erased; only the result stays (41).
4. **Fixed sums for open duties.** The physician's fee = 3 shekels (49); the finder without witnesses pays 3× (158); the
   merchant's goods 3× (10); re-purification and simple (1-ŠU) compensation instead of "sorcery … the king's case" (§ XXXIV).
5. **Tariffs.** Slaves = half a free man throughout (HL1 had a quarter or less: ear 12:3, nose 40:3); the fetus 20 / 10
   shekels with no months (HL 17–18: 10 / 5 by month); the merchant 100 → 6 minas; the nose 30 "minas" (surely shekels:
   MA.NA for GÍN, also 65).
6. **F4 `ואל ביתו יביט` dropped** in all but one body law (63); *antuḫša-* → *LÚ*; ŠU, GEŠTU, UN for the Hittite words;
   *GÍN.GÍN*.
7. **Institutions → private procedure and royal discretion.** The finder calls witnesses (*kutruwai-*) instead of bringing
   the animal to the king's gate / the elders (HL 71); the royal-gift holder *performs* luzzi unless the king exempts him
   (HL 47a reversed); the buyer of a whole estate asks the king (*punušš-*) what luzzi to bear (HL 47b); šaḫḫan passes to a
   buyer only if the seller and his house are gone (§ XXXVII); "all" (the whole field, with 291.3 `DA.BI-an`) replaces
   "much" (§ XXXVIII).
8. **The gloss of an obsolete word.** ḫippara- → *ASĪRU* "captive" in § XL–XLI (the oldest interpretation of *ḫippara-*);
   the OS text (HL1 276, נוסחים) is otherwise word for word.
9. **§ IV and Deut 21:1–9** (the key parallel): the PT adds what HL 6 lacked – the corpse in open country, and the
   measuring, 3 DANNA each way, to the towns within: [equivalent] `וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (Deut
   21:2), `נֹפֵל בַּשָּׂדֶה` (21:1); [divergence] the result – the heir "takes those (towns)", i.e. compensation in land,
   house and silver (18), vs the heifer, the washing and `יָדֵינוּ לֹא שָׁפְכֻה (שָׁפְכוּ) אֶת הַדָּם הַזֶּה` (21:7),
   `וְנִכַּפֵּר לָהֶם הַדָּם` (21:8); [divergence] every town within the radius (*kuiš kuiš*) vs `הָעִיר הַקְּרֹבָה` (21:3);
   [divergence] no town → the heir forfeits (26), while Deut assumes a town is always found. The same tool, two opposite
   ends: the money of a family vs the blood-guilt of a land.

**Cruxes (in the apparatus).** 8 *āššuwaš anda* (place vs motive); 18 *A.GÀR É* (three items vs CHiL "the estate of the
field"); 22 *dammel pēdan*; 23 SI×SÁ; 24 *apūš=pat* (the towns / their people); 62, 65 MA.NA for GÍN; 151 *kutruwai-*;
153 *ḫarkan*; 165 *dai-* / *dā-*; 179 *EN-aš* gen. (the field is ruined, as 192 – CHiL agrees); 190 *kuēll=a parā*;
203 *išḫiya-*; 205 *man=mman* / *mān*; § XVIII–XXXIII's attributions (CHiL's "cfr." kept, my guesses marked "?").

**Parallels (selection).** Deut 21:1–9 ↔ § IV (above); Exod 21:32 ↔ § II; Exod 22:3 ↔ § III (3× vs `שְׁנַיִם`); Exod 21:24,
26–27 ↔ § V–VII (`יַפִּיל`); Exod 21:19 ↔ § IX; 2 Sam 9:3, Lev 24:20 ↔ § X; Exod 21:22 ↔ § XVI (fixed sum vs `בִּפְלִלִים`);
Exod 22:17 ↔ § XXXIV; Deut 22:1–3, Exod 23:4, Jer 32:10, Lev 5:22–24 ↔ § XXXV; 1 Sam 17:25 ↔ § XXXVI; Lev 25:23 ↔
§ XXXVII, § XL; Isa 42:7 ↔ *ASĪRU*.

**Open points for the coordinator.** (1) The §H2 `ḫapall` regex (above). (2) From HL1: both colophons call that tablet
"Tablet 2" (`2!`) though it holds HL 1–100 – still open; the PT colophon gives no tablet number or title, only the scribe's
lineage, so it does not help. (3) HL 49 (§ XLI's parallel) is not in CHiL's HL1 base; the note relies on Hoffner's
summary. (4) Review passes (fidelity, consistency, Hebrew) were not part of the brief.

### HL2 part 1 (101.1–128.6)
Drafted 2026-10-25 (Round 4 run 6 Sub2, the HL2 translator): `annotated-HL2.rtl.md` – title, head paragraph, 90 entries
101.1–128.6 (§§101–113, the heading `## §§114–117 – לא נשתמרו`, §§118–128), placeholder `<!-- טרם תורגם: 129.1–col1 -->`.
Each entry: `@` + `fill`, the `>` line unvocalized and plene, פירוק (lexmap pattern), נוסחים (every duplicate with a
difference of content), תרגומים (Hrozný 1922 and Zimmern–Friedrich 1922 from the OCR, after drafting, at the main row of
each §; no CHD entries were fetched – the tool's `chd` only points to the website), הקבלה, הערות; 3 footnotes (111.1,
121.2, 126.3). `verify HL2`: 0 problems (240 rows as placeholder notes); `selftest`: 22 lines, 0 failures;
`check_bible_quotes.py annotated-HL2.rtl.md`: 0 problems.

**New renderings fixed (Hittite → Hebrew, first row).** All grepped first (`lemma`, `grep --all`, `harmonize_survey.py heb`).
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *maḫla-* "vine branch" | `זמורה` (pl. `זמורות` for the collective sg. of 108) | 101.1 | Num 13:23 `זְמוֹרָה`; Hrozný / Z&F "apple tree" are old readings |
| *karpina-*; *kakkapa-*; *ummiyant-*; *appalašša-*; *šišiyama-*; *zaḫrai-*; *ḫuḫa-*; *ḫarmiyalli-* | transliterated, vocalized: `קַרְפִּינָה`, `קַקַּפָּה`, `אוּמִּיַּנְט`, `אַפַּלַּשָּׁה`, `שִׁישִׁיָּמָה`, `זַחְרַי`, `חוּחָה`, `חַרְמִיַּלִּי` | 101.1 … | unknown things, as HL1's *ḫuša-*, *tarušḫa-*; `חוגלה` (for *kakkapa-*, "rock partridge?") is Ludlul's *būṣu*, so not used |
| SUM.SIKIL (Akk. *šamaškillu*) | `בָּצָל(?)` | 101.4 | TLHdig "Lauchpflanze", Z&F "white garlic"; Num 11:5 |
| ZU₉ of a plant | `שן` (HL1 ZU₉) | 101.4 | "a clove" |
| ŠUKUR "spear" | `חנית` | 101.5 | |
| *walḫanzi* in a *karū* narrative | `מוחצים` (participle, habitual) | 101.5 | *walḫ-* = `מחץ` as HL1 |
| *kiššan* "thus"; *ešš-* (iterative of *iya-*) | `כך`; `היו עושים` | 101.6 | **collision**: QĀTAMMA is `כך` too (brief §2, HL1 297) – see below |
| *arawanni-* | `בן חורין` | 101.6 | as ELLUM (§7.1) |
| GIŠ / *taru-* "wood"; GIŠ-ṢÍ/ṢÚ (*iṣu*) "tree" | `עץ` / `עצים` | 102.1, 105.3, 108.2 | one Hebrew for the Hittite word and its Sumerogram / Akkadogram |
| GUN "talent" | `כיכר` (fem.: `שתי כיכרות`) | 102.2 | MAL *biltu* `כיכר` |
| *arši-* "planting"; *arš(a)e-* "tend, (re)plant" | `נטיעה`; `נטע` (`יטע`) | 103.1, 103.2 | one root for the noun and its verb, as in Hittite; TLHdig's "fließen" rejected |
| ḪAŠḪUR; ḪAŠḪUR.KUR.RA; ŠENNUR | `תפוח`; `תפוח־הרים` (literal); `עוזרר` | 104.1 | the identifications in the notes (apricot?, medlar?) |
| *war-* "burn (intr.)" | `נשרף` (`יישרף`) | 105.3 | the intransitive of HL1's *warnu-* `שרף`; `בער` is reserved (§H3) |
| *miyant-* "grown, fruit-bearing" | `מניב` | 105.1 | `פורה` avoided (Gen 1:28 `פְּרוּ`) |
| *anda ēpp-* "catch (of fire)" | `תפס בתוכו` | 105.1–2 | ↔ Exod 22:5 `וּמָצְאָה` |
| *peda-* of fire | `נשא` (gated, licensed) | 106.1 | |
| *lukkant-* "set alight" | `מוצת` | 106.2 | the participle of `הצית` (*lukk-*) |
| EN A.ŠÀ; BĒL / EN GIŠ.GEŠTIN | `בעל השדה`; `בעל הגפן` | 106.3, 113.3 | §5 *bēl* + noun; EN-ŠU alone stays `אדוניו` (121.1 `ואדוניה`) |
| *warš(iya)-* "reap" | `קצר` | 106.4 | Hrozný "arroser" – old |
| *iyatniyant-* "flourishing" | `שופע` | 107.1 | |
| *ḫarnink-* "destroy" | `השחית` | 107.2 | ↔ Deut 20:19 `לֹא תַשְׁחִית אֶת עֵצָהּ` |
| IKU (*ikû*) | `אִיקוּ` (transliterated) | 107.2 | as LH's *būru* `בור` |
| *dannatta-* "empty, bare" | `ריק` | 107.3 | |
| *taggaliyant-* "fenced" | `מגודר` | 108.1 | |
| *amiyara-* / PA₅ "canal" | `תְּעָלָה` | 109.1 | as Gudea's Sum. *pa₅* `תעלה`; but the 2026-10-23 harmonization gave `תעלה` to Akk. *miṭirtu* and `פלג` to *palgu* (= PA₅'s Akkadian reading): **the coordinator should decide** whether PA₅ / *amiyara-* = `פלג` (cognate via the Sumerogram's reading) before part 2 (§162, the canal law) |
| INBU "fruit" | `תנובה` | 109.1 | Etana's *inbu* `תנובה` |
| *ark-* "cut off, divide" | `הפריש` (HL1) | 109.1 | Hrozný / Z&F "take" |
| *ḫuššelli-* "clay pit(?)" | `מִכְרֶה(?)` (vocalized: "sold her") | 110.1 | `בור` is Etana's *būrtu* and HL1's *kulei* `בּוּר` |
| *purut-* "clay" | `חוֹמֶר` (vocalized at first occurrence) | 110.1 | `טיט`, `עפר` reserved for their Akkadian cognates; Gen 11:3 `לַחֹמֶר` |
| *mašiyan* "as much as" | `כמה ש־` | 110.2 (restored), 128.1 | |
| *anda=šše(=ya)* "in addition to it (also)" | `(וגם) בנוסף לו` | 110.2, 128.2 | |
| *apeniššuwant-* "such" | `כזה` | 110.2 | `כמותו` avoided (LE *meḫrum* `שכמותו`) |
| *šena-* "figurine, image" | `פסלון` | 111.1 | `צלם`, `דמות`, `פסל`, `תמונה` (Gen 1:26, Exod 20:4) kept out; the Egyptian execration "פסלון־הקללה" shares the word (common vocabulary, same concept) |
| *ēpari* / *appattari* (mp. of *ēpp-*) | `יתפוס` | 111.1 | HL1 *ēpp-* `תפס` |
| *ḫalki-* (112.1 *ḫalkin*) | `תבואה(?)` (HL1) | 112.1 | crux: KBo 6.10+ *ḪALQIM* "lost" – see cruxes |
| *dai-* + supine "begin" | `התחיל` (`יתחיל(?)`) | 112.3 | distinct from *dā-* `לקח` |
| *karšant-* "cut" | `חתוך` (`את החתוכה`) | 113.1 | participle of HL1's *karš-* `חתך` |
| *tuḫšanna-* (verbal noun of *tuḫš-*) | `לנתק` | 113.3 | HL1's *tuḫš-* of vineyards `לנתק` |
| MUŠEN of a pond; *luli-* gen. | `ציפור־בריכה` | 119.1 | gated `ציפור` licensed |
| APIN "plough" | `מחרשה` | 121.1 | as LH, EST, Ištar's Descent |
| GÚ "neck" | `צוואר` | 121.1 | |
| *šarā tittanu-* | `למעלה העמיד` | 121.2 | |
| MAR.GÍD.DA "wagon" | `עֲגָלָה` (always vocalized: `עֶגְלָה` "heifer") | 122.1 | as Enmerkar's *mar* |
| *anda appant-* (ptcp. of *anda ēpp-*) | `*אֲסוּרָה*` (vocalized: "forbidden") | 122.1 | crux: "harnessed" (↔ Gen 46:29 `וַיֶּאְסֹר יוֹסֵף מֶרְכַּבְתּוֹ`) or "with its contents" (Hrozný); `רתם` is *turiya-*'s |
| *tapešni* | `*בטַפֶּשְׁנִי*` (HL1 §93) | 122.2 | |
| *ḫurki-* "wheel" | `גלגל` | 123.2 | Hrozný / Z&F read *ḫurkil* "punishment" |
| *taištiyant-* "loaded" | `טעון` | 124.2 | |
| GIŠ ŠEN "wooden vessel" | `גיגית` | 125.1 | `שוקת` is *buginnu* / *buniĝ*'s |
| KÁ É.GAL | `שער ההיכל` | 126.1 | KÁ = *āšk-* `שער` (HL1) |
| ZABAR "bronze"; URUDU "copper" | `אָרָד` (vocalized); `נחושת` | 126.2–3 | as Ur-Namma / Gudea *zabar* `ארד`, Enmerkar *urud* `נחושת` (Gilgameš has *siparru* `נחושת`: a cross-corpus split, recorded) |
| *akiaš* (OH "he shall die") | `ימות` | 126.3 | HL1 *ak-* `מת`; `יומת` reserved |
| ZI.KIN.BAR / *šepikkušta-* "pin" | `מחט` | 126.3 | |
| *gapina-* "thread"; TÚG; TÚG.SÍG | `חוטים`; `בגד`; `בגד צמר` | 126.5–6 | |
| GIŠ IG "door" | `דלת` | 127.1 | |
| *kuit kuit* "whatever" | `כל מה ש־` | 127.2 | |
| SIG₄ "brick" | `לְבֵנִים` (vocalized) | 128.1 | |
| *šamana-* "foundation"; NA₄ | `יסוד`; `אבן` | 128.3 | |

**HL1 renderings followed (no deviation).** *takku* `אם`; *kuiški* `מישהו`; *tāya-* `גנב`; *pai-* `נתן`, *pešk-* `היו נותנים`;
*karū … kinun=a* `לפנים … ועתה`; F4 `ואל ביתו יביט`; ARAD `עבד`; *gipeššar* `אַמָּה`; *karš-* `חתך`; *lukk-* `הצית`;
*paḫḫur* `אש`; *luli-* `בריכה`; SIG₅ adj. `משובח`, SIG₅ verb `החלים`; *dā-* `לקח`; *ēpp-* `תפס`; *ark-* `הפריש`; *tarna-*
`שלח`; *antuḫša-* `אדם`; *annanuḫḫa-* `מאולף`; *ḫalki-* `תבואה`; NAM.RA `שבויים`; LÚ GIŠTUKUL `אִישׁ־הַכְּלִי`; *šaḫḫan*
`שַׁחְחַן` (vocalized every time); *iya-* `עשה`; *kuitman* `עד אשר`; *tuḫš-* `ניתק`; *šullatar* `במחלוקת`; *ḫark-* `אבד`;
*šarnink-* `פיצה`; PARĪSU `פָּרִיס`, ŠE `שעורים`; *ḫuša-*, *tarušḫa-* transliterated; *dala-* `הניח`; KAR / *wemiya-* `מצא`;
EN-ŠU `אדוניו`; alwanzatar `כשפים (הם)`, DĪN LUGAL `דין המלך` (HL1 §44b); *pā(i)-* "go" `הלך`; *natta* `לא`; *apa-* `הוא`.
**Deviations from HL1: none.**

**Tables (gates, licences, collisions) – proposals, not edits.**
1. **`כך` for two words**: *kiššan* (HL2 101.6, 121.3, 167.2; the rituals' *kiššan memai* in §H3's note) and QĀTAMMA (brief
   §2; HL1 175, 177, 288, 297, 370 …) are both `כך`. Proposal: keep *kiššan* = `כך` (the Hittite word, and §H3's
   formula), and give QĀTAMMA `כְּמוֹ כֵן` / `באותו אופן` – or record the pair as an accepted split (QĀTAMMA is the
   Akkadographic writing of the same adverb?). The coordinator decides; HL1's lines would change if so.
2. **PA₅ / *amiyara-*** (above): `תעלה` vs `פלג`.
3. No gate fired wrongly in part 1; the H4 licences matched every gated word I used (`מחץ` 101.5, `בן חורין` 101.6 and
   121.1, `נשא` 106.1, `שלח` 107.1, `כשפים` 111.1, `ציפור` 119–120, `לפנים`, `היכל` 126, `פיצה` 127.2). The §H3 words
   for HL 105–107 held: Exod 22:4–5's `בער`, `מיטב` stay in the apparatus (`יצית`, `יישרף`, `משובח` in the lines).
4. **lexmap** reads a fragment item such as `` `t[a-` – the start of a word `` as a lemma "the" (also HL1 col4's
   "(שאר הלוח לא נכתב)"): harmless; a tool rule "skip items whose lemma field starts with a lower-case English word"
   would clean it.
5. **Composite**: no correction needed in part 1. Note for the TSV's `note` column: 110.2's lost opening is *mašiyan*
   (KUB 29.23+ 13′; I restored `[כמה]` and said so), and 119.2's lost opening holds *kuiški tāyezzi* (KBo 31.66+).

**Cruxes (in the apparatus).** 101.5 the spear (*ŠUKUR-an walḫanzi*, "[…]-šiya": a public punishment? Hrozný restores
"in the palace … they strike him with the spear", Z&F "a religious symbol"); 101.4 SUM.SIKIL (onion or garlic); 105.1–2
the order *anda miyantan KIRI₆.GEŠTIN ēpzi* kept across the line break; 106.4 who reaps; 107.3 the OS 5 shekels for a bare
vineyard against the NS 3 (Z&F print the 5); 109.1 *ark-* (cut off / take); 110.1 *ḫuššelli-*; 111.1 *ēpari* (seize /
shape) and the OS-only *šēni*; **112.1 *ḫalkin* (KBo 6.11) against *ḪALQIM* (KBo 6.10+)** – probably the "lost"
GIŠTUKUL-man of HL1 §40; 112.3 *dāi* = "begin" (KBo 6.11's order differs from KBo 6.10+'s *ḫarapzi*); 113.3 *tanza
tuḫšannai*; 118 unplaceable; 120.1 *ummiyant-*; 121.2 the plough-thief's old punishment (the neck on the *appalašša-*,
"by the oxen …"); 122.1 *anda appanda*; 122.2 *tapešni*; 123.2 *ḫurki-* "wheel" (TLHdig) vs *ḫurkil* (Hrozný, Z&F); 127.1
*šullannaz* "in a quarrel" vs "intentionally" (Hrozný, Z&F – the CHiL reading of HL1 §1; the crux recurs here); 128.4 NS
*ḫuḫa-* vs OS *ḫuwaši-* "stele".

**Key parallels found.** Exod 22:4–5 ↔ §§105–107 (the fire that "catches", *anda ēpp-* ↔ `וּמָצְאָה`; `בִּשְׂדֵה אַחֵר` ↔
*tamel A.ŠÀ-ŠU*; `וְשִׁלַּח אֶת בְּעִירֹה` ↔ *UDU.ḪI.A tarnāi*, with the same verb in the Hebrew: *tarna-* = `שלח`; `מֵיטַב
שָׂדֵהוּ` ↔ SIG₅ A.ŠÀ – Z&F noted Exod 22:5 already in 1922); Exod 21:34 `וְהַמֵּת יִהְיֶה לּוֹ` ↔ §106, §113 (the damaged
thing goes to the damager, the victim receives a sound one); Exod 22:3, 6 `שְׁנַיִם` ↔ §110, §128 (as much again);
Exod 21:37 `חֲמִשָּׁה … תַּחַת` ↔ §128 (2 stones → 10: the same 1:5); Lev 19:23–25 and Deut 24:5 ↔ §112 (three years free,
then the fourth); Exod 22:17, Deut 18:10 ↔ §111 (sorcery: "the king's case", not death); Exod 22:1, Deut 24:6 ↔ §121 (the
plough-thief's former death); 1 Kgs 14:27, 2 Kgs 11:10 ↔ §126 (the guards' weapons at the king's gate; death for the
spear, a fine for the wooden object); Deut 20:19 ↔ §104; Deut 23:25 ↔ §101; Isa 5:5 ↔ §108; Judg 15:5, 2 Sam 14:30
(`וַיַּצִּתוּ`) ↔ §105–106; Gen 11:3 ↔ §110, §128; 1 Sam 9:9 ↔ §121.3; the tariff that halves for the slave and the
code that cites its old law (101, 119, 121, 122).

## Part HL1: parallels index (the first tablet, 571 clauses)

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [divergence] | בתורה מות הרוצח; בחוק החתי ההורג נותן אנשים ("ראשים") ורכושו ערב |
| HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `וְכִי יָזִד אִישׁ עַל רֵעֵהוּ לְהָרְגוֹ בְעָרְמָה` (שמות כא:יד) | [divergence] | התורה מבחינה בין זדון לשגגה; החוק החתי מבחין בין הריגה *במחלוקת* (כאן: ארבעה ראשים) ובין מחיצה שבה "ידו חוטאת" (§3: שני ראשים). רצח בכוונה תחילה אינו נידון בלוח כלל |
| HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `וְכִי יְרִיבֻן אֲנָשִׁים` (שמות כא:יח) | [equivalent] | המחלוקת כנסיבת המקרה |
| HL1 §1, 3 | *Ù 4 SAG.DU pāi LÚ-n=aku MUNUS-n=aku* | וארבעה ראשים ייתן, בין איש בין אשה, | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | גם כאן "נפש תחת נפש", אך מוכפלת וכסחורה: ארבעה בני אדם עוברים מבית ההורג לבית ההרוג |
| HL1 §1, 3 | *Ù 4 SAG.DU pāi LÚ-n=aku MUNUS-n=aku* | וארבעה ראשים ייתן, בין איש בין אשה, | `לֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ` (במדבר לה:לא) | [absent] | אוסר במפורש פדיון של רוצח |
| HL1 §2, 5 | *[takku ARAD-an na]šma GÉME-an šullannaz kuiški kuēnzi* | [אם] מישהו יהרוג [עבד או] אָמָה במחלוקת, | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | בתורה האדון המכה את עבדו, והעבד "נִקָּם"; בחוק החתי ההורג הוא "מישהו", והפיצוי (שני ראשים) הולך לבית האדון |
| HL1 §2, 5 | *[takku ARAD-an na]šma GÉME-an šullannaz kuiški kuēnzi* | [אם] מישהו יהרוג [עבד או] אָמָה במחלוקת, | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [equivalent] | עבד ואמה כצמד, ותשלום לאדון |
| HL1 §3, 9 | *[takku LÚ-a]n našma MUNUS-an EL-LAM walaḫzi kuiš[k]i* | [אם] מישהו ימחץ [איש] או אשה בני חורין, | `וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | המחיצה; *walḫ-* = `מחץ` (כמו *maḫāṣu* בכל חוקי היתדות), ו־`הכה` של התורה נשאר שלה |
| HL1 §3, 10 | *n=aš aki* | וימות – | `מַכֵּה אִישׁ וָמֵת` (שמות כא:יב) | [equivalent] | אותו רצף: מכה, ואחריו מוות |
| HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – | `וַאֲשֶׁר לֹא צָדָה וְהָאֱלֹהִים אִנָּה לְיָדוֹ` (שמות כא:יג) | [equivalent] | בשני החוקים *היד* היא המילה של ההריגה בלא כוונה; אבל בתורה האל "מְאַנֶּה" את היד, ובחוק החתי היד עצמה "חוטאת" |
| HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – | `וְנִדְּחָה יָדוֹ בַגַּרְזֶן` (דברים יט:ה) | [equivalent] | `אֲשֶׁר יַכֶּה אֶת רֵעֵהוּ בִּבְלִי דַעַת` (דברים יט:ד) |
| HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – |  | [absent] | התורה נותנת להורג בשגגה עיר מקלט (`וְשַׂמְתִּי לְךָ מָקוֹם אֲשֶׁר יָנוּס שָׁמָּה`, שמות כא:יג); החוק החתי – תשלום מופחת. |
| HL1 §4, 15 | *[takk]u ARAD-an našma GÉME-an kuiški walaḫzi* | [אם] מישהו ימחץ עבד או אָמָה, | `וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | בתורה מותו של עבד בידי אדוניו "נִקָּם"; כאן – ראש אחד |
| HL1 §5, 21 | *[takk]u {LÚ}DAM.GÀR {URU}ḪA-AT-TI kuiški kuenzi* | [אם] מישהו יהרוג תַּגָּר חַתִּי, |  | [absent] | לתורה אין דין מיוחד להריגת סוחר. `תַּגָּר` |
| HL1 §5, 21 | *[takk]u {LÚ}DAM.GÀR {URU}ḪA-AT-TI kuiški kuenzi* | [אם] מישהו יהרוג תַּגָּר חַתִּי, |  | [cognate loan] | דרך האכדית: הסומרוגרמה DAM.GÀR נקראת באכדית *tamkāru*, שממנה העברית המשנאית `תַּגָּר` (כמו בחוקי חמורבי, F41). |
| HL1 §5, 26 | *āššu=šett=a šarnikzi* | וגם את רכושו יפצה. | `שַׁלֵּם יְשַׁלֵּם` (שמות כב:ב) | [equivalent] | אך בעברית של החוק החתי *šarnink-* = `פיצה`, ו`שִׁלֵּם` שמור ל־*šullumu* |
| HL1 §6, 29 | *takku LÚ.U₁₉.LU-aš LÚ-aš našma MUNUS-za takiya URU-ri* | אם אדם – איש או אשה – ימות בעיר אחרת, | `כִּי יִמָּצֵא חָלָל בָּאֲדָמָה … נֹפֵל בַּשָּׂדֶה: לֹא נוֹדַע מִי הִכָּהוּ` (דברים כא:א) | [divergence] | `וְיָצְאוּ זְקֵנֶיךָ וְשֹׁפְטֶיךָ; וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (דברים כא:ב) – בתורה חלל שהורג אינו ידוע, והעיר הקרובה מכפרת בטקס (עגלה ערופה, הצהרת ניקיון); בחוק החתי אדם שפשוט "מת" בעיר זרה, ובעל הקרקע שבגבולו מת מוותר לבית המת על חלקת אדמה. אין כאן טקס, אין אשמת דם, ואין … |
| HL1 §6, 29 | *takku LÚ.U₁₉.LU-aš LÚ-aš našma MUNUS-za takiya URU-ri* | אם אדם – איש או אשה – ימות בעיר אחרת, |  | [equivalent] | העיקרון המשותף: המקום שבו נמצא המת אחראי לו. |
| HL1 §7, 33 | *takku LÚ.U₁₉.LU-an EL-LAM kuiški dašuwaḫḫi* | אם מישהו יעוור אדם בן חורין | `עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן` (שמות כא:כד) | [divergence] | `שֶׁבֶר תַּחַת שֶׁבֶר עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן כַּאֲשֶׁר יִתֵּן מוּם בָּאָדָם כֵּן יִנָּתֶן בּוֹ` (ויקרא כד:כ) – בתורה גמול בגוף, בחוק החתי כסף. גם חוקי אשנונה (§42) משלמים בכסף, וחוקי חמורבי (§196–§201) נוהגים "עין כעין" בבני איש בלבד |
| HL1 §7, 34 | *našma ZU₉-ŠU lāki* | או את שִׁנּוֹ יפיל, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | אותו פועל של "הפלה" לשן: *lak-* הוא "להפיל, לכרות (עץ)", ו־`יַפִּיל` הוא תרגומו הטבעי, כאן ובתורה. ההבדל: בתורה השן של העבד מוציאה אותו לחופשי (`לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת שִׁנּוֹ`), כאן – כסף |
| HL1 §7, 35 | *karū 1 MA.NA KÙ.BABBAR pešker* | לפנים היו נותנים מנה כסף, | `לְפָנִים בְּיִשְׂרָאֵל כֹּה אָמַר הָאִישׁ` (שמואל א ט:ט) | [equivalent] | הערת הכותב על מנהג שהשתנה |
| HL1 §7, 35 | *karū 1 MA.NA KÙ.BABBAR pešker* | לפנים היו נותנים מנה כסף, |  | [absent] | התורה אינה מצטטת "חוק קודם" ותיקונו. |
| HL1 §8, 38 | *takku ARAD-an našma GÉME-an kuiški dašuwaḫḫi* | אם מישהו יעוור עבד או אָמָה | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ: לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | בתורה הדין מדבר באדון המכה את עבדו, והעבד יוצא לחופשי; בחוק החתי "מישהו", והכסף הולך (כנראה) לאדון |
| HL1 §8, 39 | *našma ZU₉-ŠU lāki* | או את שִׁנּוֹ יפיל, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | כאן גם הנפגע עבד או אמה, כמו בתורה |
| HL1 §9, 42 | *takku LÚ.U₁₉.LU SAG.DU-SÚ kuiški ḫūnikzi* | אם מישהו יפצע את ראשו של אדם, | `פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | [equivalent] | רשימת הפגיעות; *ḫunink-* = `פצע` (הפועל), והתשלום – כסף |
| HL1 §9, 45 | *A-NA É.GAL-LIM 3 GÍN KÙ.BABBAR dašker* | להיכל שלושה שקלים כסף היו לוקחים, |  | [absent] | בתורה אין לשלטון חלק בפיצוי על חבלה; כל הכסף לנפגע (`רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא`, שמות כא:יט). |
| HL1 §10, 48 | *takku LÚ.U₁₉.LU-an kuiški ḫūnikzi* | אם מישהו יפצע אדם, | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף; וְלֹא יָמוּת וְנָפַל לְמִשְׁכָּב` (שמות כא:יח) | [equivalent] | החבלה שאינה ממיתה ומפילה את הנפגע למשכב |
| HL1 §10, 49 | *t=an ištarnikzi* | וְיַחֲלֶה אותו, | `וְנָפַל לְמִשְׁכָּב` (שמות כא:יח) | [equivalent] |  |
| HL1 §10, 51 | *pēdi=šši=ma antuḫšan pāi* | ובמקומו אדם ייתן, | `רַק שִׁבְתּוֹ יִתֵּן` (שמות כא:יט) | [equivalent] | בתורה המכה משלם את "שבתו" (ימי הבטלה) של הנפגע; בחוק החתי הוא נותן אדם שיעבוד במקומו – אותו רעיון, בגוף ולא בכסף |
| HL1 §10, 56 | *{LÚ}A.ZU=ya kuššan apāš=pat [pā]i* | וגם את שְׂכַר הרופא – הוא עצמו [ייתן]. | `וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | בשני החוקים המכה נושא בהוצאות הריפוי; התורה אינה מזכירה רופא, החוק החתי מזכיר את שכרו. וכן חוקי חמורבי §206 (`ואת הרופא יפרע`) |
| HL1 §11, 57 | *takku LÚ.U₁₉.LU-an EL-LUM QA-AS-SÚ našma GÌR-ŠU kuiški* | אם מישהו ישבור את ידו או את רגלו של אדם בן חורין, | `יָד תַּחַת יָד רֶגֶל תַּחַת רָגֶל` (שמות כא:כד) | [divergence] | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) – התורה: גמול באותו אבר; כאן: עשרים שקל |
| HL1 §13, 63 | *takku LÚ.U₁₉.LU-an EL-LAM KIR₁₄=šet kuiški wāki* | אם מישהו ינשוך את אפו של אדם בן חורין, |  | [absent] | התורה אינה מזכירה את האף ברשימת החבלות (שמות כא:כד–כה). אבל בחוקי אשנונה §42 – `אם איש את אף איש נשך וקצץ` – ושם גם התעריף: מנה כסף; אותו פועל ("נשך") ואותו מחיר באשנונה ובחַתִּי. |
| HL1 §15, 69 | *takku LÚ.U₁₉.LU-aš EL-LAM-aš ištaman=ššan kuiški iškallāri* | אם מישהו יקרע את אוזנו של אדם בן חורין, | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [absent] | האוזן הנרצעת כסימן עבדות. חוקי אשנונה §42: אוזן – חצי מנה |
| HL1 §17, 74 | *[takk]u MUNUS-aš EL-LI šarḫuwanduš=šuš kuiški p[e]š[šiy]azi* | [אם] מישהו [ישליך] את בטנה של אשה בת חורין, | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים` (שמות כא:כב) | [divergence] | בתורה: בשעת מריבה, ובעל האשה קובע את הקנס בפני פלילים; בחוק החתי: תעריף קבוע, לפי מעמד האשה ולפי חודש ההריון, בלי זכר לבעל |
| HL1 §17, 74 | *[takk]u MUNUS-aš EL-LI šarḫuwanduš=šuš kuiški p[e]š[šiy]azi* | [אם] מישהו [ישליך] את בטנה של אשה בת חורין, |  | [equivalent] | "יצאו ילדיה" – "בטנה הושלכה": שני החוקים מתארים את היציאה של העובר, לא את מותו. |
| HL1 §18, 80 | *takku GÉME-aš šarḫuwand[u]š=šuš kuiški peš[šiy]azi* | אם מישהו [ישליך] את בטנה של אָמָה, |  | [absent] | התורה אינה מבחינה במעמד האשה ההרה (שמות כא:כב). |
| HL1 §19a, 83 | *takku LÚ.U₁₉.LU-an LÚ-an=aku MUNUS-n=aku {URU}ḫattušaz kuiš[ki] LÚ* | אם מישהו, איש לוּוִיָּה, יגנוב מֵחַתּוּשָׁה אדם, בין איש בין אשה, | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | `כִּי יִמָּצֵא אִישׁ גֹּנֵב נֶפֶשׁ מֵאֶחָיו מִבְּנֵי יִשְׂרָאֵל … וּמֵת הַגַּנָּב הַהוּא` (דברים כד:ז) – בתורה מוות לגונב נפש; כאן הגונב, זר, מאבד את ביתו |
| HL1 §19a, 83 | *takku LÚ.U₁₉.LU-an LÚ-an=aku MUNUS-n=aku {URU}ḫattušaz kuiš[ki] LÚ* | אם מישהו, איש לוּוִיָּה, יגנוב מֵחַתּוּשָׁה אדם, בין איש בין אשה, | `מֵאֶחָיו מִבְּנֵי יִשְׂרָאֵל` (דברים כד:ז) | [equivalent] | בשני החוקים חשוב מי גונב את מי: בן העם הנגנב והזר הגונב |
| HL1 §19b, 87 | *takku {URU}ḫat[tuši=pat] LÚ {URU}ḪA-AT-TI LÚ {URU}luwiyan kuiški* | אם [בחַתּוּשָׁה עצמה] מישהו, איש חַתִּי, יגנוב איש לוּוִיָּה, | `גֹּנֵב נֶפֶשׁ מֵאֶחָיו` (דברים כד:ז) | [divergence] | התורה אוסרת לגנוב "מאחיו", כלומר מבני עמו; החוק החתי מגן גם על איש לוּוִיָּה שנגנב בבירה, אם כי בפחות (ראשים, לא בית) |
| HL1 §20, 92 | *takku ARAD LÚ {URU}ḪA-AT-TI IŠ-TU KUR {URU}luwiyaz* | אם [מישהו], איש חַתִּי, יגנוב עבד של איש חַתִּי מארץ לוּוִיָּה, | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | בתורה אסור להחזיר עבד לאדוניו; בחוק החתי מי שמחזיר עבד גנוב מחו"ל מקבל שכר, והאדון לוקח את עבדו בחזרה |
| HL1 §21, 101 | *šarnikzil [NU.GÁL]* | פיצוי [אין]. |  | [absent] | אין לבעל הלוּוִי פיצוי – בניגוד לבעל החתי ב־§20. |
| HL1 §22, 102 | *takku ARAD-aš ḫūwai* | אם עבד יברח, | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ בַּמָּקוֹם אֲשֶׁר יִבְחַר … לֹא תּוֹנֶנּוּ` (דברים כג:יז) – ההפך הגמור: בתורה המסגיר עובר על הדין; בחוק החתי המחזיר מקבל שכר, והמסתיר משלם (§24) |
| HL1 §22, 105 | *nu=šši {KUŠ}E.SIR-uš pāi* | ולו נעליים ייתן, | `עַל מִכְרָם בַּכֶּסֶף צַדִּיק וְאֶבְיוֹן בַּעֲבוּר נַעֲלָיִם` (עמוס ב:ו) | [equivalent] | זוג נעליים כמחיר זעום של אדם |
| HL1 §24, 118 | *takku ARAD-iš našma GÉME-aš [ḫūwai]* | אם עבד או אָמָה [יברח], | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ … לֹא תּוֹנֶנּוּ` (דברים כג:יז) | [divergence] | בתורה מי שהעבד בורח אליו מצווה להושיבו עמו; בחוק החתי הוא משלם לאדון שכר עבודה |
| HL1 §25, 122 | *[takku] LÚ.U₁₉.LU-aš {DUG}ÚTUL-[i našma luliya] pap[rezzi]* | [אם] אדם [ייטמא] בקדרה [או בבריכה], | `וְכָל כְּלִי חֶרֶשׂ אֲשֶׁר יִפֹּל מֵהֶם אֶל תּוֹכוֹ: כֹּל אֲשֶׁר בְּתוֹכוֹ יִטְמָא וְאֹתוֹ תִשְׁבֹּרוּ` (ויקרא יא:לג) | [divergence] | `אַךְ מַעְיָן וּבוֹר מִקְוֵה מַיִם יִהְיֶה טָהוֹר` (ויקרא יא:לו) – בתורה כלי החרס נשבר, ומקור המים אינו נטמא; בחוק החתי מי שטימא כלי או בריכה משלם קנס – הטומאה היא נזק לרכוש |
| HL1 §26b, 131 | *[takku …]… A.ŠÀ=y[a … …]* | [אם …] … וגם שדה […], | `וְהָיָה אִם לֹא תִמְצָא חֵן בְּעֵינָיו … וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [divergence] | בתורה רק האיש משלח; בחוק החתי (26a, בנוסחים האחרים) גם האשה יכולה "למאן" באיש |
| HL1 §26b, 131 | *[takku …]… A.ŠÀ=y[a … …]* | [אם …] … וגם שדה […], | `אִם רָעָה בְּעֵינֵי אֲדֹנֶיהָ … לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [divergence] | כאן האיש שדחה את אשתו (שהיתה אָמָה? אשה שנקנתה?) מוכר אותה, והקונה משלם שנים עשר שקל |
| HL1 §27, 139 | *iwaru=šet=az anda [pēdā]i* | ואת מַתָּנָהּ פנימה [תישא], | `הֲלוֹא נָכְרִיּוֹת נֶחְשַׁבְנוּ לוֹ כִּי מְכָרָנוּ; וַיֹּאכַל גַּם אָכוֹל אֶת כַּסְפֵּנוּ` (בראשית לא:טו) | [absent] |  |
| HL1 §28, 146 | *takku DUMU.MUNUS LÚ-ni taranza* | אם בת אמורה לאיש, | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה אֲשֶׁר לֹא אֹרָשָׂה` (שמות כב:טו) | [equivalent] | התורה מדברת בבתולה *שלא* אורשה, החוק החתי בבת *שכבר* "נאמרה" לאיש |
| HL1 §28, 146 | *takku DUMU.MUNUS LÚ-ni taranza* | אם בת אמורה לאיש, |  | [divergence] | אין כאן שכיבה, ואין "מָהֹר יִמְהָרֶנָּה": השאלה היא רק מי מפצה את מי. |
| HL1 §28, 152 | *takkuw=an attaš annašš=a tamēdani LÚ-ni pianz[i]* | אם האב וְהָאֵם לאיש אחר ייתנו אותה, | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [divergence] | בתורה האב לבדו מחליט; בחוק החתי *האב והאם* יחד נותנים, מפצים, ממאנים |
| HL1 §28, 154 | *takku attašš=a annaš mimmai* | אם האב וְהָאֵם ימאנו, | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [equivalent] | אותו פועל, "למאן", ואותו מצב: ההורים מסרבים לתת את הבת למי שכבר "לקח" אותה |
| HL1 §29, 157 | *nu=šši kūšata piddaezzi* | ולה מֹהַר יגיש, | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | [equivalent] | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) – המֹהַר |
| HL1 §29, 160 | *kūšata=ma 2-ŠU šarninkanzi* | ואילו את המֹהַר פי שניים יפצו. | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | תשלום כפל כקנס. בחוקי חמורבי §160 אותו דין: אבי הבת שאמר "את בתי לא אתן לך" – יכפיל וישיב (בעברית שלנו שם) |
| HL1 §30, 164 | *n=aš=kan šamenzi* | והוא יפסיד (אותו). |  | [equivalent] | חוקי חמורבי §159: החתן "שהביט באשה אחרת" – מפסיד את אשר הובל. |
| HL1 §31, 165 | *takku LÚ-aš EL-LUM GÉME-ašš=a šieleš* | אם איש בן חורין ואָמָה *פנויים*, | `אִם אֲדֹנָיו יִתֶּן לוֹ אִשָּׁה וְיָלְדָה לוֹ בָנִים אוֹ בָנוֹת הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | בתורה עבד (עברי) ואשה שקיבל מאדוניו: האשה והילדים לאדון; כאן בן חורין ואָמָה, והחוק מדבר רק בבני הזוג – לא באדון |
| HL1 §31, 167 | *n=an=z(a) A-NA DAM-ŠU dāi* | וייקח אותה לאשתו, | `וַיִּקַּח אֶת רִבְקָה וַתְּהִי לוֹ לְאִשָּׁה` (בראשית כד:סז) | [equivalent] | "לקח לאשה" |
| HL1 §31, 171 | *nu=z(a) É-er takšan šarranzi* | ואת הבית לשניים יחלקו, | `וּמָכְרוּ אֶת הַשּׁוֹר הַחַי וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [equivalent] | חלוקה שווה בין שני צדדים; כאן של רכוש משותף |
| HL1 §31, 171 | *nu=z(a) É-er takšan šarranzi* | ואת הבית לשניים יחלקו, |  | [absent] | אין בתורה דין חלוקת רכוש בגירושין. |
| HL1 §31, 173 | *1 DUMU-AM MUNUS=z(a) dāi* | ובן אחד האשה תיקח לעצמה. | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | בתורה הילדים הולכים עם האם השפחה (לאדוניה); בחוק החתי האב בן החורין לוקח את הילדים, והאמה – ילד אחד |
| HL1 §35, 181 | *takku MUNUS-an EL-LUM {LÚ}AGRIG našma {LÚ}SIPA pi[tt]e[nuz]i* | אם סוכן או רועה [יבריח] אשה בת חורין, | `כִּי תִקְנֶה עֶבֶד עִבְרִי שֵׁשׁ שָׁנִים יַעֲבֹד; וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [divergence] | תהליך הפוך: בתורה עבד יוצא לחירות אחרי שש שנים; כאן בת חורין נעשית אָמָה אחרי שלוש |
| HL1 §34, 180 | *n=an=kan parā Ú-UL kuiški tarnai* | ואותה אף אחד לא ישלח החוצה. | `לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [equivalent] | *parā tarna-* הוא הפועל של שחרור, כמו `שִׁלַּח` של התורה |
| HL1 §34, 180 | *n=an=kan parā Ú-UL kuiški tarnai* | ואותה אף אחד לא ישלח החוצה. |  | [divergence] | שם השילוח הוא שחרור לחירות, וכאן איסור: איש לא "ישלח אותה החוצה" – כלומר מעמדה לא ישתנה (היא לא תשוחרר מן הבית שאליו נכנסה? או: לא תשועבד?). |
| HL1 §36, 186 | *n=an=kan parā [Ú-U]L kuiški tarnai* | ואותו אף אחד [לא] ישלח החוצה. | `אִם אֲדֹנָיו יִתֶּן לוֹ אִשָּׁה … וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | בתורה העבד שנשא אשה מבית אדוניו יוצא לבדו; כאן בן החורין שנכנס לבית העבד – אף אחד לא "ישלח אותו החוצה", כלומר מעמדו לא ייפגע (או: לא יוכל לעזוב) |
| HL1 §37, 187 | *takku MUNUS-an ku[išk]i pittenuzzi* | אם [מישהו] יבריח אשה, | `פֶּן יִרְדֹּף גֹּאֵל הַדָּם אַחֲרֵי הָרֹצֵחַ כִּי יֵחַם לְבָבוֹ וְהִשִּׂיגוֹ` (דברים יט:ו) | [equivalent] | הרדיפה אחרי בורח בחמת לב |
| HL1 §37, 187 | *takku MUNUS-an ku[išk]i pittenuzzi* | אם [מישהו] יבריח אשה, |  | [divergence] | שם התורה מגינה על הנרדף (עיר מקלט), וכאן החוק מתיר להרוג אותו ואת מלוויו. |
| HL1 §37, 191 | *zik=wa UR.BAR.RA kišat* | "אתה – לזאב נעשית". | `בִּנְיָמִין זְאֵב יִטְרָף` (בראשית מט:כז) | [absent] | ), לא מנודה |
| HL1 §39, 198 | *takku [LÚ.U₁₉.LU-aš dam]ēl A.ŠÀ{ḪI.A} ḫarzi* | אם [אדם] יחזיק בשדות של [אחר], |  | [absent] | בתורה אין חובת שירות למלך הקשורה בקרקע; |
| HL1 §39, 198 | *takku [LÚ.U₁₉.LU-aš dam]ēl A.ŠÀ{ḪI.A} ḫarzi* | אם [אדם] יחזיק בשדות של [אחר], | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [equivalent] | גם שם הקרקע אינה רכוש גמור של מחזיקה, אבל בעליה הוא האל, לא המלך |
| HL1 §40, 203 | *takku LÚ˽{GIŠ}[TUKUL ḫa]rakzi* | אם איש־[הכלי יאבד], | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח; וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [absent] |  |
| HL1 §40, 204 | *LÚ IL-KI tittianza* | איש־הַהֲלָךְ מוצב (במקומו), | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [cognate loan] | אחד ממסי המלך, שממנו פטורים משרתי בית האל; המילה הארמית שאולה מן האכדית *ilku* |
| HL1 §42, 228 | *takku antuḫšan kuiški kuššaniyēzzi* | אם מישהו ישכור אדם, | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השכיר והאחריות לנזק בשעת השכירות |
| HL1 §43, 237 | *takku LÚ-aš GU₄-ŠU ÍD-an zinuškezzi* | אם איש מעביר את שורו בנהר, |  | [absent] | אין בתורה דין דומה. |
| HL1 §43, 237 | *takku LÚ-aš GU₄-ŠU ÍD-an zinuškezzi* | אם איש מעביר את שורו בנהר, |  | [equivalent] | `שׁוֹר אוֹ שֶׂה` – השור כרכוש העיקרי של איש. |
| HL1 §43, 241 | *nu BE-EL GU₄ ÍD-aš pēdai* | ואת בעל השור הנהר יישא, | `וּבַעַל הַשּׁוֹר` (שמות כא:כח) | [equivalent] | *BĒL* + שם עצם = `בַּעַל` (§5) |
| HL1 §43, 242 | *nu apun=pat danzi* | ואותו עצמו ייקחו. | `נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | אין כאן מוות תחת מוות: הדוחף עצמו נמסר לבית המת (כעבד?), "ראש" תמורת ראש |
| HL1 §44a, 245 | *nu=šši EG[IR-pa DUMU.NITA-an pāi]* | ולו [בחזרה בן ייתן]. | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | גם כאן נפש תחת נפש, אבל *בן* של ההורג נמסר לבית ההרוג (לעבוד שם? לבוא במקום המת?) – ולא ההורג מת |
| HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [equivalent] | הכישוף כעבירה בחוק |
| HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, |  | [divergence] | בתורה מוות, בחוק החתי – דין המלך (שעשוי גם הוא להיות מוות). |
| HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, | `וְטִהֲרוֹ וְשִׁלַּח אֶת הַצִּפֹּר הַחַיָּה עַל פְּנֵי הַשָּׂדֶה` (ויקרא יד:ז) | [equivalent] | הטומאה נשלחת אל השדה הפתוח; החוק החתי אוסר דווקא להביא אותה אל שדה או בית של אחר |
| HL1 §44b, 249 | *alwanzatar* | כשפים (הם), | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [equivalent] | *alwanzatar* = `כשפים` (המילה המקראית היא קרובה של האכדית *kišpū*, לא של החתית |
| HL1 §44b, 249 | *alwanzatar* | כשפים (הם), |  | [equivalent] | ). |
| HL1 §45, 251 | *[takku] Ú-NU-TE{MEŠ} [ku]iški wemiyazzi* | [אם מישהו] ימצא חפצים, | `וְכֵן תַּעֲשֶׂה לְכָל אֲבֵדַת אָחִיךָ אֲשֶׁר תֹּאבַד מִמֶּנּוּ וּמְצָאתָהּ: לֹא תוּכַל לְהִתְעַלֵּם` (דברים כב:ג) | [equivalent] | `אוֹ מָצָא אֲבֵדָה וְכִחֶשׁ בָּהּ` (ויקרא ה:כב) – החובה להשיב אבדה, והכחשת אבדה כעבירה |
| HL1 §45, 251 | *[takku] Ú-NU-TE{MEŠ} [ku]iški wemiyazzi* | [אם מישהו] ימצא חפצים, |  | [divergence] | בתורה ההשבה היא מצוה כלפי "אחיך", בלי גמול; בחוק החתי הבעלים גומל למוצא – ומי שלא השיב נחשב לגנב. |
| HL1 §46, 256 | *[takku URU-r]i A.Š[À{ḪI.A}-an ša]ḫḫan=a iwaru kuiški ḫarzi* | [אם] מישהו יחזיק [בעיר בשדה ובשַׁחְחַן] כְּמַתָּן, | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | הקרקע כנחלת אבות |
| HL1 §46, 256 | *[takku URU-r]i A.Š[À{ḪI.A}-an ša]ḫḫan=a iwaru kuiški ḫarzi* | [אם] מישהו יחזיק [בעיר בשדה ובשַׁחְחַן] כְּמַתָּן, |  | [divergence] | במקרא הנחלה אינה נושאת שירות למלך; כאן הירושה והחובה הולכות יחד. |
| HL1 §47a, 265 | *takku [A.ŠÀ{ḪI]}.A NÍG.BA LUGAL kuiški ḫarzi* | אם מישהו יחזיק [בשדות] מַתַּת המלך, | `וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [equivalent] | המלך מעניק שדות לנאמניו |
| HL1 §47a, 265 | *takku [A.ŠÀ{ḪI]}.A NÍG.BA LUGAL kuiški ḫarzi* | אם מישהו יחזיק [בשדות] מַתַּת המלך, | `רַק אַדְמַת הַכֹּהֲנִים לֹא קָנָה: כִּי חֹק לַכֹּהֲנִים מֵאֵת פַּרְעֹה` (בראשית מז:כב) | [equivalent] | קרקע בחסות מלכותית, פטורה ממס |
| HL1 §47a, 268 | *n=an=ši pāi* | ואותו לו ייתן. | `וַהֲשִׁבֹתִי לְךָ אֶת כָּל שְׂדֵה שָׁאוּל אָבִיךָ; וְאַתָּה תֹּאכַל לֶחֶם עַל שֻׁלְחָנִי תָּמִיד` (שמואל ב ט:ז) | [equivalent] | אותו צירוף בדיוק: מלך המעניק שדות, ולחם משולחנו כסימן לחסות; `כִּי עַל שֻׁלְחַן הַמֶּלֶךְ תָּמִיד הוּא אֹכֵל` (שמואל ב ט:יג) |
| HL1 §48, 276 | *[{LÚ}ḫippar]aš [lu]zzi [ka]rpiez[zi …]* | [החִפָּרָה את הלוּצִּי ירים] […], | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [equivalent] | איסור מכירה של קרקע ושל בני אדם התלויים בה |
| HL1 §48, 276 | *[{LÚ}ḫippar]aš [lu]zzi [ka]rpiez[zi …]* | [החִפָּרָה את הלוּצִּי ירים] […], |  | [divergence] | בתורה האיסור מגן על הנחלה של המשפחה, כאן – על מה שהחִפָּרָה מחזיק מטעם המלך. |
| HL1 §50, 281 | *kuel=a {GIŠ}eya āški=šši š[akuwān?]* | ואילו מי שעץ־אֵיָה בשערו [*ניצב*?] … | `וּפָלְחֵי בֵּית אֱלָהָא דְנָה מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [equivalent] | פטור ממסים ומ"הֲלָךְ" למשרתי בית האל; כך גם כאן: אנשי הפולחן בערים הקדושות פטורים, ומשפחתם הרחבה ("אנשי חלקם") נושאת בלוּצִּי |
| HL1 §51, 283 | *karū kuiš {URU}arinna {LÚ}UŠ.BAR kī[šat]* | לפנים – מי שבאֲרִינָּה לאורג [נעשה], | `לְפָנִים בְּיִשְׂרָאֵל` (שמואל א ט:ט) | [equivalent] | נוסחת השינוי |
| HL1 §51, 283 | *karū kuiš {URU}arinna {LÚ}UŠ.BAR kī[šat]* | לפנים – מי שבאֲרִינָּה לאורג [נעשה], |  | [equivalent] | עזרא ז:כד – פטור לבעלי מלאכה של בית האל. |
| HL1 §52, 289 | *ARAD É.NA₄ ARAD DUMU.LUGAL BE-EL ŠU-UP-PA-TI kuiēš* | עבד בית־האבן, עבד בן־המלך, בעל *שֻׁפַּתִּי* – אשר בין אנשי־הכלי שדה מחזיקים – |  | [absent] | בתורה אין "בית אבן" מלכותי; |
| HL1 §52, 289 | *ARAD É.NA₄ ARAD DUMU.LUGAL BE-EL ŠU-UP-PA-TI kuiēš* | עבד בית־האבן, עבד בן־המלך, בעל *שֻׁפַּתִּי* – אשר בין אנשי־הכלי שדה מחזיקים – | `וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [equivalent] |  |
| HL1 §53, 291 | *takku LÚ˽{GIŠ}TUKUL Ù {LÚ}ḪA.LA-ŠU takšan ašanzi* | אם איש־הכלי ואיש־חלקו יחד יהיו, | `וְאַרְבַּע הַיָּדֹת יִהְיֶה לָכֶם` (בראשית מז:כד) | [equivalent] | חלוקה ב"ידות" |
| HL1 §53, 291 | *takku LÚ˽{GIŠ}TUKUL Ù {LÚ}ḪA.LA-ŠU takšan ašanzi* | אם איש־הכלי ואיש־חלקו יחד יהיו, |  | [absent] | אין בתורה שותפות קרקע בין בעל חובה ושותפו. |
| HL1 §53, 300 | *Ù NÍG.BA 2 QA-TAM LÚ˽{GIŠ}TUKUL dāi* | ומן המַתַּת שתי ידות איש־הכלי ייקח, | `וְאַרְבַּע הַיָּדֹת יִהְיֶה לָכֶם` (בראשית מז:כד) | [equivalent] | "יד" כמנה, אותו שימוש באכדית ובעברית |
| HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, |  | [cognate] | (דרך האכדוגרמה) ÉRIN = *ṣābu* = `צָבָא` (§6.7). |
| HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, | `וַיַּעַל הַמֶּלֶךְ שְׁלֹמֹה מַס מִכָּל יִשְׂרָאֵל` (מלכים א ה:כז) | [equivalent] | עבודת הכפייה של המלך |
| HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, |  | [divergence] | כאן הקודקס זוכר קבוצות שהיו פטורות ממנה. |
| HL1 §55, 304 | *mān DUMU{MEŠ} {URU}ḪA-AT-TI LÚ{MEŠ} IL-KI uēr* | כאשר בני חַתִּי, אנשי־הַהֲלָךְ, באו, | `אָבִיךָ הִקְשָׁה אֶת עֻלֵּנוּ; וְאַתָּה עַתָּה הָקֵל מֵעֲבֹדַת אָבִיךָ הַקָּשָׁה` (מלכים א יב:ד) | [equivalent] | נתינים באים אל המלך להתלונן על עבודת הכפייה |
| HL1 §55, 304 | *mān DUMU{MEŠ} {URU}ḪA-AT-TI LÚ{MEŠ} IL-KI uēr* | כאשר בני חַתִּי, אנשי־הַהֲלָךְ, באו, |  | [divergence] | כאן התשובה המלכותית היא "עשו כמו חבריכם", ובמקרא – הפילוג. |
| HL1 §56, 317 | *ŠA {LÚ}TIBIRA Ú-UL kuiški arauwaš* | מחרשי־הנחושת אף אחד אינו פטור, | `וְאָבִיו אִישׁ צֹרִי חֹרֵשׁ נְחֹשֶׁת` (מלכים א ז:יד) | [equivalent] | "חרש נחושת", בעל המלאכה של המלך; שם הוא "בא אל המלך" לעבודתו |
| HL1 §57, 319 | *takku GU₄.MAḪ-an kuiški tayazzi* | אם מישהו יגנוב פַּר, | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | **השוואת המספרים:** התורה – חמישה בקר תחת שור; החוק החתי – לפנים שלושים, ועתה חמישה עשר (פי חמישה עשר!), אבל מבעלי חיים צעירים. בחוקי חמורבי §8 – פי שלושים (לאל ולהיכל) או פי עשרה |
| HL1 §58, 330 | *takku ANŠE.KUR.RA.MAḪ kuiški dayēzzi* | אם מישהו יגנוב סוס־הרבעה, |  | [absent] | התורה אינה מזכירה סוס בדיני גנבה (`מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה`, שמות כב:ג); הסוס בחַתִּי – בהמת המרכבה, נכס צבאי. |
| HL1 §59, 341 | *takku UDU.A.LUM kuiški tāyezzi* | אם מישהו יגנוב אַיִל, | `וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | התורה: ארבע צאן תחת שה; החוק החתי: לפנים שלושים, ועתה חמש עשרה |
| HL1 §59, 341 | *takku UDU.A.LUM kuiški tāyezzi* | אם מישהו יגנוב אַיִל, | `וְאֶת הַכִּבְשָׂה יְשַׁלֵּם אַרְבַּעְתָּיִם` (שמואל ב יב:ו) | [equivalent] | דוד פוסק לפי התעריף של התורה |
| HL1 §60, 346 | *takku GU₄.MAḪ kuiški wemiēzzi* | אם מישהו ימצא פַּר, | `וּמָעוּךְ וְכָתוּת וְנָתוּק וְכָרוּת לֹא תַקְרִיבוּ לַיהוָה; וּבְאַרְצְכֶם לֹא תַעֲשׂוּ` (ויקרא כב:כד) | [divergence] | התורה אוסרת סירוס של בהמה (כך פירשו חז"ל את "ובארצכם לא תעשו"); החוק החתי מניח את הסירוס כמלאכה רגילה, ורק מי שסירס בהמה של אחר משלם |
| HL1 §63, 364 | *takku GU₄.APIN.LÁ kuiški dāyezzi* | אם מישהו יגנוב שור חרישה, | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [divergence] | התורה: חמישה; החוק החתי: לפנים חמישה עשר, ועתה עשרה. שור החרישה זול מן הפר (חמישה עשר) – אבל ההפחתה כאן קטנה יותר (שליש ולא מחצית) |
| HL1 §65, 371 | *takku MÁŠ.GAL enandan* | אם תיש מבוית, |  | [absent] | אין בתורה דין לחיות בר מבויתות. |
| HL1 §66, 376 | *takku GU₄.APIN.LÁ* | אם שור חרישה, | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ וַהֲשֵׁבֹתוֹ לוֹ` (דברים כב:ב) | [equivalent] | בהמה תועה שנאספה אל בית אחר חוזרת לבעליה, בלי עונש |
| HL1 §66, 376 | *takku GU₄.APIN.LÁ* | אם שור חרישה, |  | [divergence] | בתורה זו מצוה המוטלת על המוצא, כאן – הגנה על בעל הדיר מפני האשמת גנבה. |
| HL1 §67, 386 | *takku {GU₄}ÁB kuiški tāyezz[i]* | אם מישהו יגנוב פרה, | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [divergence] | התורה אינה מבחינה בין פר לפרה; החוק החתי – פר: חמישה עשר, פרה: שישה |
| HL1 §69, 393 | *takku UDU.U₈ našma UDU.NÍTA-an kuiški tāyezzi* | אם מישהו יגנוב רחל או כבש, | `וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | התורה: ארבע; החוק החתי: לפנים שתים עשרה, ועתה שש |
| HL1 §70, 398 | *takku GU₄* | אם שור, | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים: שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | אותה רשימה (שור … חמור), ואותו מקרה: הבהמה הגנובה נמצאה חיה ובעליה מזהה אותה; ואותו קנס – כפל |
| HL1 §70, 398 | *takku GU₄* | אם שור, |  | [divergence] | בחוק החתי הבעלים לוקח את בהמתו *ונוסף* על כך מקבל כפל. |
| HL1 §71, 406 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA-an kuiški wemiyazi* | אם מישהו ימצא שור, סוס, פרד, | `כִּי תִפְגַּע שׁוֹר אֹיִבְךָ אוֹ חֲמֹרוֹ תֹּעֶה: הָשֵׁב תְּשִׁיבֶנּוּ לוֹ` (שמות כג:ד) | [equivalent] | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ וַהֲשֵׁבֹתוֹ לוֹ` (דברים כב:ב) – גם בתורה המוצא מחזיק בבהמה עד שבעליה דורש אותה |
| HL1 §71, 406 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA-an kuiški wemiyazi* | אם מישהו ימצא שור, סוס, פרד, |  | [divergence] | כאן יש מוסד ציבורי – שער המלך בעיר, הזקנים בכפר – שבו מכריזים על המציאה, והמוצא רשאי לעבוד בבהמה בינתיים. |
| HL1 §71, 409 | *n=an {LÚ.MEŠ}ŠU.GI-aš ḫinkanzi* | ואותו לזקנים יציגו, | `זִקְנֵי הָעִיר הַהִוא` (דברים כא:ג) | [equivalent] | הזקנים כרשות המקומית |
| HL1 §72, 416 | *takku GU₄-aš A.ŠÀ{ḪI.A}-ni kuelka aki* | אם שור ימות בשדה של מישהו, | `בַּעַל הַבּוֹר יְשַׁלֵּם כֶּסֶף יָשִׁיב לִבְעָלָיו; וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [divergence] | בתורה בעל הבור משלם, כי בורו גרם למוות; כאן בעל השדה משלם שני שוורים רק משום שהשור מת בשדהו – כמו האדם המת בעיר זרה (§6) |
| HL1 §74, 421 | *takku SI GU₄ našma GÌR GU₄ kuiški* | אם מישהו ישבור קרן שור או רגל שור, | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לו) | [equivalent] | החלפה: המזיק לוקח את השור הפגוע ונותן שור שלם |
| HL1 §74, 421 | *takku SI GU₄ našma GÌR GU₄ kuiški* | אם מישהו ישבור קרן שור או רגל שור, |  | [divergence] | בחוק החתי לבעלים יש ברירה (424–427). |
| HL1 §75, 428 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA ANŠE-in kuiški tūriezzi* | אם מישהו ירתום שור, סוס, פרד, חמור, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ חֲמוֹר אוֹ שׁוֹר אוֹ שֶׂה וְכָל בְּהֵמָה לִשְׁמֹר; וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | `וְכִי יִשְׁאַל אִישׁ מֵעִם רֵעֵהוּ וְנִשְׁבַּר אוֹ מֵת; בְּעָלָיו אֵין עִמּוֹ שַׁלֵּם יְשַׁלֵּם` (שמות כב:יג) – מבנה דומה מאוד: בהמה שאינה של המשתמש מתה, נטרפה או אבדה – והוא משלם; ואם אין ראיה – שבועה |
| HL1 §75, 430 | *našma=an UR.BAR.RA-aš karāpi* | או שזאב יטרוף אותו, | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד: הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [equivalent] | בתורה הטרפה פוטרת את השומר (אם הביא עד); בחוק החתי הטרפה מחייבת אותו (432), ורק מוות "מן האל" פוטר |
| HL1 §75, 434 | *IŠ-TU DINGIR-LIM=war=aš BA.ÚŠ* | "מן הָאֵל מת", | `הִנֵּה יַד יְהוָה הוֹיָה בְּמִקְנְךָ אֲשֶׁר בַּשָּׂדֶה` (שמות ט:ג) | [equivalent] | מות בהמות כ"יד האל"; הנוסח החתי הקדום אומר ממש "ביד האל" (`I-NA QA-TI DINGIR-LIM`) |
| HL1 §75, 434 | *IŠ-TU DINGIR-LIM=war=aš BA.ÚŠ* | "מן הָאֵל מת", | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] |  |
| HL1 §75, 435 | *nu lingazi* | וְיִשָּׁבַע. | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ; וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | אותו פתרון בדיוק: שבועה במקום עד, והנשבע פטור |
| HL1 §76, 436 | *takku GU₄ ANŠE.KUR.RA ANŠE.GÌR.NUN.NA ANŠE kuiški appatariezzi* | אם מישהו יעכב שור, סוס, פרד, חמור, | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השכר על השימוש בבהמה |
| HL1 §77a, 440 | *takku {GU₄}ÁB armawandan kuiški walaḫzi* | אם מישהו ימחץ פרה הרה, | `וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ` (שמות כא:כב) | [equivalent] | (ראו §17) – אותו מקרה, כאן בבהמה, ובאותו פועל חתי (*pešš-*) כמו בהפלת אשה (§17–§18) |
| HL1 §77a, 440 | *takku {GU₄}ÁB armawandan kuiški walaḫzi* | אם מישהו ימחץ פרה הרה, |  | [absent] | בתורה אין דין לבהמה הרה שנמחצה. |
| HL1 §77b, 446 | *[takku GU₄-aš našma ANŠE.KUR.RA-aš IG]I-ŠU kuiški [tašuwaḫzi]* | [אם] מישהו [יעוור את עינו של שור או של סוס], | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ … לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | עין של עבד בתורה, עין של שור כאן; ומחיר העין של שור (שישה שקלים) קרוב לעין של עבד בחוק החתי (עשרה, §8) |
| HL1 §78, 449 | *[takku GU₄-un kuišk]i kušaniezzi* | [אם מישהו] ישכור [שור], | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השור השכור |
| HL1 §78, 449 | *[takku GU₄-un kuišk]i kušaniezzi* | [אם מישהו] ישכור [שור], |  | [absent] | אין בתורה דין של שימוש החורג מן השכירות. |
| HL1 §79, 453 | *[takku] GU₄{ḪI.A} A.ŠÀ-ni pānzi* | [אם] שוורים ילכו אל שדה, | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בתורה בעל הבהמה משלם על הנזק מן המיטב; בחוק החתי בעל השדה מפצה את עצמו בעבודת הבהמות יום אחד – עד צאת הכוכבים – ומחזיר אותן |
| HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד: הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [divergence] | בתורה השומר מביא את שרידי הטרפה כראיה ופטור; כאן מי ש"השליך" את השה אל הזאב (הפקיר אותו) חולק עם הבעלים את מה שנשאר: לבעלים הבשר, לו העור |
| HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `כַּאֲשֶׁר יַצִּיל הָרֹעֶה מִפִּי הָאֲרִי שְׁתֵּי כְרָעַיִם אוֹ בְדַל אֹזֶן` (עמוס ג:יב) | [equivalent] | השרידים שהרועה מציל מפי הטורף |
| HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `וְגַם אֶת הַמֵּת יֶחֱצוּן` (שמות כא:לה) | [equivalent] | חלוקת הבהמה המתה |
| HL1 §81, 461 | *takku ŠAḪ NIGA kuiški tāyezzi* | אם מישהו יגנוב חזיר מפוטם, | `וְאֶת הַחֲזִיר כִּי מַפְרִיס פַּרְסָה הוּא … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | [absent] | בתורה החזיר טמא, ואין עליו דין גנבה; בחַתִּי הוא בהמת משק רגילה, יש לו מחיר – וגם חזיר מפוטם שווה מנה כסף "לפנים" |
| HL1 §86, 479 | *takku ŠAḪ šēliya našma A.ŠÀ-ni {GIŠ}KIRI₆-ni pai[zzi]* | אם חזיר ילך אל ערמה, או אל שדה, אל גן, | `וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [divergence] | בתורה בעל הבהמה משלם; כאן בעל השדה רשאי להרוג את החזיר – אך חייב להחזיר את הגוויה |
| HL1 §87, 485 | *takku UR.GI₇ {LÚ}SIPA-aš kuiški walaḫzi* | אם מישהו ימחץ כלב של רועה, | `וּבָשָׂר בַּשָּׂדֶה טְרֵפָה לֹא תֹאכֵלוּ לַכֶּלֶב תַּשְׁלִכוּן אֹתוֹ` (שמות כב:ל) | [absent] |  |
| HL1 §90, 496 | *takku UR.GI₇-aš Ì.ŠAḪ karāpi* | אם כלב יטרוף שומן־חזיר, |  | [absent] | אין בתורה דין זה; |
| HL1 §90, 496 | *takku UR.GI₇-aš Ì.ŠAḪ karāpi* | אם כלב יטרוף שומן־חזיר, | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [divergence] | גם שם הריגת "הגנב" שנתפס פטורה; כאן הגנב הוא כלב |
| HL1 §91, 501 | *[takku NI]M.LÀL{ḪI.A}-an kammari kuiški tāyezi* | [אם] מישהו יגנוב [דבורים] בענן, |  | [absent] | אין בתורה דין דבורים; |
| HL1 §91, 501 | *[takku NI]M.LÀL{ḪI.A}-an kammari kuiški tāyezi* | [אם] מישהו יגנוב [דבורים] בענן, | `וְהִנֵּה עֲדַת דְּבוֹרִים בִּגְוִיַּת הָאַרְיֵה וּדְבָשׁ` (שופטים יד:ח) | [equivalent] | הנחיל כ"עדה" |
| HL1 §93, 512 | *takku LÚ-an EL-LAM tapešni appan[zi]* | אם איש בן חורין יתפסו *בטַפֶּשְׁנִי*, | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [equivalent] | הגנב שנתפס בשעת הפריצה |
| HL1 §93, 512 | *takku LÚ-an EL-LAM tapešni appan[zi]* | אם איש בן חורין יתפסו *בטַפֶּשְׁנִי*, |  | [divergence] | בתורה מותו בשעת המחתרת פטור; בחוק החתי הוא משלם קנס על הניסיון – גם לפני שנכנס. |
| HL1 §94, 518 | *takku LÚ-LUM EL-LUM É-er tāyezzi* | אם איש בן חורין יגנוב בית, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | גנבה מבית |
| HL1 §94, 518 | *takku LÚ-LUM EL-LUM É-er tāyezzi* | אם איש בן חורין יגנוב בית, |  | [divergence] | בתורה הגנב משלם כפל; כאן משיב את הגנוב, ועוד קנס קבוע וחיוב "לפי ערך" (522–525). |
| HL1 §95, 527 | *[t]ak[k]u ARAD-iš É-er tāyezzi* | [אם] עבד יגנוב בית, | `וְקַצֹּתָה אֶת כַּפָּהּ: לֹא תָחוֹס עֵינֶךָ` (דברים כה:יב) | [divergence] | העונש הגופני היחיד של קטיעה בתורה (`קצץ` הוא גם מילת חוקי חמורבי ל־*nakāsu*); בחוק החתי – קטיעת אף ואוזניים לעבד בלבד, ובן החורין משלם |
| HL1 §95, 527 | *[t]ak[k]u ARAD-iš É-er tāyezzi* | [אם] עבד יגנוב בית, |  | [absent] | בתורה גנב שאין לו לשלם נמכר (`וְנִמְכַּר בִּגְנֵבָתוֹ`, שמות כב:ב), ואינו מושחת. |
| HL1 §96, 541 | *takku LÚ-aš ḫalkiyaš ÉSAG-an tāyezzi* | אם איש יגנוב אסם של תבואה, | `יְצַו יְהוָה אִתְּךָ אֶת הַבְּרָכָה בַּאֲסָמֶיךָ` (דברים כח:ח) | [equivalent] | האסם כמאגר התבואה של הבית |
| HL1 §96, 541 | *takku LÚ-aš ḫalkiyaš ÉSAG-an tāyezzi* | אם איש יגנוב אסם של תבואה, |  | [absent] | אין בתורה דין גנבת אסם. |
| HL1 §98, 551 | *[takk]u LÚ-aš EL-LUM É-er lukkizzi* | [אם] איש בן חורין יצית בית, | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה אוֹ הַשָּׂדֶה שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [divergence] | בתורה אש בשדה ותשלום; כאן הצתת בית, והמצית בונה אותו מחדש |
| HL1 §99, 556 | *takku ARAD-iš É-er lukkizzi* | אם עבד יצית בית, | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [divergence] | התורה אינה מבחינה בין עבד לבן חורין; בחוק החתי האדון משלם, והעבד מושחת |
| HL1 §100, 562 | *[tak]ku taišzin kuiški lukkizzi* | [אם] מישהו יצית *מתבן*, | `וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה` (שמות כב:ה) | [equivalent] | שריפת המזון של המשק |

## Part HLPT: parallels index (the late parallel text)

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| PT § II, 7 | *2 MA.NA KÙ.BABBAR pāi* | שתי מנים כסף ייתן. | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | גם בתורה מות עבד או אָמָה נפדה בכסף קצוב, אך שם המקרה הוא שור נגח ולא אדם שידו חוטאת |
| PT § III, 10 | *āššu=ya 3-ŠU šarnikzi* | וגם את הרכוש פי שלושה יפצה. | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים` (שמות כב:ג) | [divergence] | בתורה הגנב משלם `שְׁנַיִם`; כאן הרוצח־השודד משלם פי שלושה על הסחורה, נוסף על דמי הנפש |
| PT § IV, 22 | *dammel pēdan duwan 3 DANNA duwann=a 3* | מקום לא מעובד – לכאן שלוש פרסאות ולכאן שלוש פרסאות, | `וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (דברים כא:ב) | [equivalent] | אותה פעולה בדיוק: כשהמת נמצא בשטח פתוח ואין לו בעל, מודדים ממנו אל הערים שסביבו |
| PT § IV, 22 | *dammel pēdan duwan 3 DANNA duwann=a 3* | מקום לא מעובד – לכאן שלוש פרסאות ולכאן שלוש פרסאות, | `נֹפֵל בַּשָּׂדֶה` (דברים כא:א) | [equivalent] | המקום: שטח פתוח, לא עיר. שני החוקים פותרים את אותה בעיה – אחריות למת שנמצא מחוץ לתחום של מישהו – באותו כלי |
| PT § IV, 23 | *nu=kan kuiš kuiš URU-aš anda SI×SÁ-ri* | וכל עיר ועיר אשר תיקבע בתוכו, | `וְהָיָה הָעִיר הַקְּרֹבָה אֶל הֶחָלָל` (דברים כא:ג) | [divergence] | בתורה המדידה מכריעה על עיר אחת, הקרובה; בנוסח החתי כל עיר שבתוך רדיוס קבוע |
| PT § IV, 24 | *nu apūš=pat dāi* | ואותם עצמם ייקח. | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא עֶגְלַת בָּקָר` (דברים כא:ג) | [divergence] | בתורה אנשי העיר הקרובה "לוקחים" עגלה ועורפים אותה, רוחצים ידיים ואומרים `יָדֵינוּ לֹא שָׁפְכֻה (שָׁפְכוּ) אֶת הַדָּם הַזֶּה` (דברים כא:ז); בנוסח החתי בית המת "לוקח" את העיר עצמה – כלומר את הפיצוי ממנה. אותה מדידה, ושתי תוצאות הפוכות: בתורה העיר מתנקה בטקס מאשמת דם (`וְנִכַּפֵּר לָהֶם הַדָּם`, … |
| PT § IV, 26 | *n=aš=kan šamenzi* | והוא יפסיד. | `וּמָדְדוּ אֶל הֶעָרִים` (דברים כא:ב) | [divergence] | מניח שתמיד תימצא עיר קרובה, כי אשמת הדם חייבת להיות מכופרת. בחוק החתי, כשאין עיר – אין חייב, והתביעה אובדת: עניין של ממון, לא של דם |
| PT § V, 27 | *takku LÚ-an EL-LUM šullannaza kuiški dašuwaḫḫi* | אם מישהו יעוור איש בן חורין במחלוקת, | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ` (שמות כא:כו) | [divergence] | בתורה עין העבד משחררת אותו; עין בן החורין – `עַיִן תַּחַת עַיִן` (שמות כא:כד). בחוק החתי, בשני הנוסחים, כסף |
| PT § VII, 35 | *takku LÚ-an EL-LUM ZU₉-ŠÚ kuiški lāki* | אם מישהו יפיל את שִׁנּוֹ של איש בן חורין, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | אותו פועל ("יפיל") ואותו איבר; בתורה העבד יוצא לחופשי, בחוק החתי מי שהפיל משלם |
| PT § IX, 48 | *nu=šši 10 GÍN KÙ.BABBAR pāi* | ולו עשרה שקלים כסף ייתן, | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | בשני הנוסחים החתיים, כמו בתורה, הפוגע נושא בהפסד העבודה (כאן: מחליף בפועל ואחר כך תשלום) ובריפוי (49: שכר הרופא) |
| PT § X, 52 | *n=aš mān karmalaššai* | והוא, אם יהיה נָכֶה, | `עוֹד בֵּן לִיהוֹנָתָן נְכֵה רַגְלָיִם` (שמואל ב ט:ג) | [equivalent] | הנכות הקבועה של הרגל |
| PT § X, 52 | *n=aš mān karmalaššai* | והוא, אם יהיה נָכֶה, | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) | [divergence] | בתורה מידה כנגד מידה; בחוק החתי, בכל נוסחיו, כסף |
| PT § XVI, 71 | *20 GÍN.GÍN KÙ.BABBAR pāi* | עשרים שקל כסף ייתן. | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ` (שמות כא:כב) | [divergence] | בתורה הסכום אינו קצוב: `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים`; בנוסח המאוחר סכום קבוע אחד, בלי חודשים ובלי שומה |
| PT § XXXIV, 142 | *t=an EGIR-pa parkunuzi* | ואותו בחזרה יטהר, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [divergence] | בתורה הכישוף הוא פשע מוות; בנוסח התקן החתי – "דין המלך"; בנוסח המאוחר, במה שנשתמר, הנזק מתוקן בטיהור ובפיצוי |
| PT § XXXV, 147 | *takku Ú-NU-TE{MEŠ} kuiški našma GU₄ UDU ANŠE.KUR.RA* | אם מישהו ימצא חפצים או שור, שה, סוס, חמור, | `לֹא תִרְאֶה אֶת שׁוֹר אָחִיךָ אוֹ אֶת שֵׂיוֹ נִדָּחִים` (דברים כב:א) | [equivalent] | `וְכֵן תַּעֲשֶׂה לַחֲמֹרוֹ וְכֵן תַּעֲשֶׂה לְשִׂמְלָתוֹ וְכֵן תַּעֲשֶׂה לְכָל אֲבֵדַת אָחִיךָ` (דברים כב:ג) – גם בתורה חוק אחד לבהמות ולחפצים ("שִׂמְלָתוֹ", "כָל אֲבֵדַת"), כמו באיחוד שעשה הנוסח המאוחר; ואותה רשימה – שור, שה, חמור |
| PT § XXXV, 148 | *n=an EGIR-pa EN-i=šši pennai* | ואותו בחזרה לאדוניו יסיע, | `הָשֵׁב תְּשִׁיבֵם לְאָחִיךָ` (דברים כב:א) | [equivalent] | `הָשֵׁב תְּשִׁיבֶנּוּ לוֹ` (שמות כג:ד) |
| PT § XXXV, 150 | *mān EN-šin=ma Ú-UL wemiyazi* | ואם את אדוניו לא ימצא, | `וְאִם לֹא קָרוֹב אָחִיךָ אֵלֶיךָ וְלֹא יְדַעְתּוֹ` (דברים כב:ב) | [equivalent] | אותו מקרה: הבעלים אינו ידוע |
| PT § XXXV, 151 | *nu=za kūtruwāezzi* | ויעיד לעצמו עדים, | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים` (ירמיהו לב:י) | [equivalent] | "העיד עדים" כהליך פרטי של רישום עסקה |
| PT § XXXV, 151 | *nu=za kūtruwāezzi* | ויעיד לעצמו עדים, | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ` (דברים כב:ב) | [divergence] | בתורה המוצא שומר את האבדה בביתו בלי עדים ובלי מוסד; החוק החתי, בשני נוסחיו, דורש פומביות – כדי שהמוצא לא ייחשד בגנבה |
| PT § XXXV, 158 | *3-ŠU šarnikzi* | פי שלושה יפצה. | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [divergence] | המוצא אבדה ומכחש (`אוֹ מָצָא אֲבֵדָה וְכִחֶשׁ בָּהּ`, ויקרא ה:כב) מחזיר את הקרן ועוד חומש, ומביא אשם; בנוסח החתי המאוחר מי שלא העיד עדים נחשב גנב ומשלם פי שלושה |
| PT § XXXV, 158 | *3-ŠU šarnikzi* | פי שלושה יפצה. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [divergence] | תשלום הגנב בתורה |
| PT § XXXVI, 161 | *mān=an=kan LUGAL-uš=ma arauwaḫḫi* | ואם המלך יפטור אותו, | `וְאֵת בֵּית אָבִיו יַעֲשֶׂה חָפְשִׁי בְּיִשְׂרָאֵל` (שמואל א יז:כה) | [equivalent] | המלך פוטר בית מחובות כגמול אישי |
| PT § XXXVII, 171 | *šaḫḫan Ú-UL ēššai* | את השַׁחְחַן לא יעשה. | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [divergence] | בתורה הקרקע אינה נמכרת לצמיתות, והבעלים או גואלו יכולים לחזור; בחוק החתי הקרקע נמכרת, והשאלה היא רק מי נושא בחובה למלך |
| PT § XXXIX, 187 | *LUGAL-un punuššanzi* | את המלך ישאלו, | `כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [absent] |  |
| PT § XL, 196 | *{LÚ}A-SI-RUM-za ḫappar lē kuiški iyazi* | עם האסיר מסחר אף אחד אל יעשה, | `לְהוֹצִיא מִמַּסְגֵּר אַסִּיר` (ישעיהו מב:ז) | [cognate] | *ASĪRU* הוא המילה האכדית *asīru* "שבוי, אסיר" (מן *esēru* "לסגור, לכלוא"), קרובת העברית `אָסִיר` (שורש אס"ר); הקשר הוא דרך האכדוגרמה, לא דרך החתית |
| PT § XL, 197 | *DUMU-ŠU A.ŠÀ-ŠU {GIŠ}KIRI₆.GEŠTIN-ŠÚ [l]ē kuiški wāši* | את בנו, את שדהו, את כרמו אף אחד [אל] יקנה. | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [divergence] | בתורה איסור כללי על מכירת קרקע לצמיתות; כאן איסור על קנייה מאדם מסוים (ובנו עמה), כדי לשמור את רכושו – ואת החובה שהוא נושא בה – במקומם |

## Part HL2: parallels index (the second tablet)

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| HL2 §101, 101.1 | *] {GIŠ}ma-aḫ-la-an na-aš-ma {GIŠ}kar-pí-na-an* | […] זמורה או (עץ) קַרְפִּינָה | `וַיִּכְרְתוּ מִשָּׁם זְמוֹרָה וְאֶשְׁכּוֹל עֲנָבִים אֶחָד` (במדבר יג:כג) | [equivalent] | *maḫla-* – ענף הגפן |
| HL2 §101, 101.4 | *GÍN.G]ÍN KÙ.BABBAR A-NA 1 ZU₉ SUM.SIKIL{SAR} 1 GÍN.GÍN KÙ.BABBAR* | [… שקל] כסף, לשן אחת של בָּצָל(?) שקל אחד כסף, | `וְאֶת הַבְּצָלִים וְאֶת הַשּׁוּמִים` (במדבר יא:ה) | [equivalent] | ירקות הבית; הזיהוי (בצל או שום) אינו ודאי |
| HL2 §101, 101.7 | *pa]-a-i ták-ku ARAD-ša 3 GÍN.GÍN KÙ.BABBAR pa-a-i* | [… ייתן], ואם עבד – שלושה שקלים כסף ייתן. | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה` (שמות כא:לז) | [absent] | בתורה אין הבחנה בין גנב בן חורין לגנב עבד; בחוק החתי העבד משלם מחצית |
| HL2 §101, 101.7 | *pa]-a-i ták-ku ARAD-ša 3 GÍN.GÍN KÙ.BABBAR pa-a-i* | [… ייתן], ואם עבד – שלושה שקלים כסף ייתן. | `כִּי תָבֹא בְּכֶרֶם רֵעֶךָ וְאָכַלְתָּ עֲנָבִים כְּנַפְשְׁךָ שָׂבְעֶךָ; וְאֶל כֶּלְיְךָ לֹא תִתֵּן` (דברים כג:כה) | [divergence] | התורה מתירה לאכול בכרם הרע; החוק החתי דן בגניבת הצמח עצמו |
| HL2 §102, 102.3 | *] GUN GIŠ DI-IN LUGAL-RI* | […] כיכרות עץ – דין המלך. | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | מקרה גניבה המובא לערכאה העליונה; בתורה בגלל ספק, כאן בגלל גודל הנזק |
| HL2 §103, 103.4 | *ar-še-ez-z]i Ù 2 GÍN.GÍN KÙ.BABBAR pa-a-i* | יטע, ושני שקלים כסף ייתן. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [divergence] | בתורה כפל; כאן החזרה בעבודה (נטיעה מחדש) וקנס לפי אורך הנטיעה |
| HL2 §104, 104.1 | *[ták-ku {GI]Š}ḪAŠḪUR.KUR.RA na-aš-ma {GIŠ}ŠENNUR ku-iš-ki kar-aš-[zi]* | [אם] מישהו יחתוך תפוח־הרים או עוזרר, | `לֹא תַשְׁחִית אֶת עֵצָהּ לִנְדֹּחַ עָלָיו גַּרְזֶן כִּי מִמֶּנּוּ תֹאכֵל וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [divergence] | בתורה הגנה עקרונית על עץ המאכל במלחמה; בחוק החתי – נזק לרכוש, ומחירו בכסף |
| HL2 §105, 105.2 | *[{GIŠ}KIRI₆.GEŠTIN e-ep-zi tá]k-ku GEŠTIN-iš [{GIŠ}ḪAŠḪU]R na-aš-ma {GIŠ}ḪAŠḪUR.KUR.RA [na-aš-ma]* | [כרם תתפוס – אם] גפן, [תפוח] או תפוח־הרים [או] | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה אוֹ הַשָּׂדֶה` (שמות כב:ה) | [equivalent] | אותו מקרה: אש שהוצתה במקום אחד ו"מצאה" (*anda ēpp-* "תפסה בתוכו") את רכוש הזולת; זימרן ופרידריך השוו כבר ב־1922 |
| HL2 §105, 105.2 | *[{GIŠ}KIRI₆.GEŠTIN e-ep-zi tá]k-ku GEŠTIN-iš …* | [כרם תתפוס – אם] גפן, … | `וַיַּבְעֵר מִגָּדִישׁ וְעַד קָמָה וְעַד כֶּרֶם זָיִת` (שופטים טו:ה) | [equivalent] | האש העוברת משדה לכרם ולמטע |
| HL2 §105, 105.1 | *[ták-ku A.ŠÀ-an? ku-i]š-ki lu-uk-[ki-iz-zi …]* | [אם מישהו שדה?] יצית, … | `וַיַּצִּתוּ עַבְדֵי אַבְשָׁלוֹם אֶת הַחֶלְקָה בָּאֵשׁ` (שמואל ב יד:ל) | [equivalent] | הצתת שדה; *lukk-* = `הצית`, ו־`בער` של שמות כב נשאר של התורה |
| HL2 §106, 106.1 | *[ták-ku p]a-aḫ-ḫur A-N[A A.ŠÀ]-ŠU ku-iš-ki pé-e-da-i [ta ta-me-e]l-la* | [אם] מישהו אש אל [שדה]ו יישא, [וגם של אחר] | `וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | "שדה (של) אחר" – *tamel A.ŠÀ-ŠU* בנוסח הקדום; הנוסח המאוחר (KBo 6.11) – "שדה מניב" |
| HL2 §106, 106.1 | *[ták-ku p]a-aḫ-ḫur …* (KBo 6.11: *tar-na-a-i*) | (KBo 6.11: "ישלח") | `וְשִׁלַּח אֶת בְּעִירֹה` (שמות כב:ד) | [equivalent] | הנוסח המאוחר "משלח" את האש באותו פועל, *tarna-* = `שלח`; התורה – את הבהמה (או, לפי מפרשים, את האש) |
| HL2 §106, 106.3 | *[A.ŠÀ-L]AM a-pa-a-aš da-a-[i SI]G₅-an-da-an-na [A.ŠÀ A-NA EN] A.ŠÀ* | [שדה] – הוא ייקח לעצמו, [ושדה] משובח [לבעל] השדה | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בשניהם הנפגע מקבל מן הטוב (*SIG₅* `משובח` ↔ `מיטב`); בתורה מן התוצרת של המזיק, כאן חילופי שדות |
| HL2 §106, 106.3 | *[A.ŠÀ-L]AM a-pa-a-aš da-a-[i …]* | [שדה] – הוא ייקח לעצמו, … | `וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [equivalent] | הדבר שניזק עובר למזיק, והנפגע מקבל ערך שלם |
| HL2 §107, 107.1 | *ták-ku LÚ.U₁₉.LU-aš i-ia-at-ni-ia-an-da-aš {GIŠ}KIRI₆.GEŠTIN UDU{ḪI.A} tar-na-a-i* | אם אדם לכרם שופע צאן ישלח, | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | אותו מקרה ואותו פועל: הבהמה "משולחת" אל כרם הזולת; הקבלה טיפולוגית של שני חוקים חקלאיים |
| HL2 §107, 107.2 | *ta-a ḫar-ni-ik-zi ták-ku mi-an-da A-NA 1 IKU 10 GÍN KÙ.BABBAR pa-a-i* | וישחית (אותו): אם מניב – לאִיקוּ אחד עשרה שקלים כסף ייתן, | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בתורה בעין ומן הטוב; כאן בכסף, לפי שטח ולפי מצב הכרם (מניב / ריק; ובנוסח הקדום – חמישה שקלים לריק) |
| HL2 §108, 108.1 | *ták-ku tág-ga-li-an-da-za {GIŠ}⸢KIRI₆⸣.GEŠTIN {GIŠ}ma-aḫ-la-an ku-iš-ki* | אם מישהו מכרם מגודר זמורות | `הָסֵר מְשׂוּכָּתוֹ וְהָיָה לְבָעֵר פָּרֹץ גְּדֵרוֹ וְהָיָה לְמִרְמָס` (ישעיהו ה:ה) | [equivalent] | הגדר מגינה על הכרם; בחוק החתי היא מכפילה את הקנס |
| HL2 §110, 110.1 | *⸢ták-ku⸣ ḫu-u-uš-ši-el-li-ia-az pa-[ru]-ut ku-iš-ki da-a-i-ia-zi* | אם מישהו יגנוב חוֹמֶר מן המִכְרֶה(?), | `וְהַחֵמָר הָיָה לָהֶם לַחֹמֶר` (בראשית יא:ג) | [equivalent] | החומר כחומר בנייה |
| HL2 §110, 110.2 | *[ da]-a-i-ia-az-zi an-da-še-ia a-pé-e-ni-iš-šu-u-wa-an pa-a-i* | [כמה] שיגנוב – וגם בנוסף לו כזה ייתן. | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | "כמה שגנב, ועוד כזה" – תשלום כפל, כדין הגנב בתורה |
| HL2 §111, 111.1 | *[ták-ku še-e]-ni pu-ru-ut k[u-iš-ki e-pa-a-ri al-wa-an-za-tar DI-IN LUGAL]* | [אם] מישהו חומר [לפסלון יתפוס – כשפים (הם), דין המלך]. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [divergence] | בתורה חטא מוות; בחוק החתי "דין המלך". הנוסח הקדום לבדו שומר "לפסלון" |
| HL2 §111, 111.1 | *… al-wa-an-za-tar DI-IN LUGAL* | … כשפים (הם), דין המלך | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | [equivalent] | הכישוף ברשימת העיסוקים האסורים |
| HL2 §112, 112.2 | *[ ša-aḫ-ḫa-a]n Ú-UL i-ia〈〈an〉〉-zi I-NA MU 4{KAM}-ma ša-a[ḫ-ḫa-an]* | […] את השַׁחְחַן לא יעשה, ובשנה הרביעית את השַׁחְחַן | `שָׁלֹשׁ שָׁנִים יִהְיֶה לָכֶם עֲרֵלִים לֹא יֵאָכֵל` (ויקרא יט:כג) | [equivalent] | אותו מספר: שלוש שנים, ומעבר בשנה הרביעית (`וּבַשָּׁנָה הָרְבִיעִת`, ויקרא יט:כד); בתורה לפרי הנטיעה, כאן לחובת השבוי המתיישב – הקבלה טיפולוגית בלבד |
| HL2 §112, 112.2 | *… I-NA MU 4{KAM}-ma ša-a[ḫ-ḫa-an]* | … ובשנה הרביעית את השַׁחְחַן | `נָקִי יִהְיֶה לְבֵיתוֹ שָׁנָה אֶחָת` (דברים כד:ה) | [equivalent] | פטור זמני מחובה ציבורית למי שמתחיל משק חדש |
| HL2 §113, 113.2 | *[{GIŠ}GEŠTIN-an] a-pa-a-aš da-a-i SIG₅-an-na {GIŠ}GEŠTIN* | [גפן] – הוא ייקח, וגפן משובחת | `וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [equivalent] | כמו ב־106: החותך לוקח את הגפן החתוכה ונותן גפן טובה |
| HL2 §121, 121.2 | *{GIŠ}ap-pa-la-aš-ša-a[š š]a-ra-a ti-it-ta-nu-uz-zi t[a GU₄{ḪI.A}-it* | על האַפַּלַּשָּׁה למעלה יעמיד, ו[בשוורים …] | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [divergence] | בתורה המתת הגנב במחתרת היא התגוננות; בחוק החתי הישן – עונש בידי בעל המחרשה, בכלי שנגנב; והחוק החדש ממיר אותו בכסף |
| HL2 §121, 121.2 | *{GIŠ}ap-pa-la-aš-ša-a[š …]* | על האַפַּלַּשָּׁה … | `לֹא יַחֲבֹל רֵחַיִם וָרָכֶב כִּי נֶפֶשׁ הוּא חֹבֵל` (דברים כד:ו) | [divergence] | כלי המחיה: בתורה מוגן מפני המלווה, בחוק החתי הישן – מפני הגנב, באכזריות |
| HL2 §121, 121.3 | *ka-ru-ú kiš-an e-eš-šer ki-nu-na 6 GÍN.GÍN [KÙ.BABBAR pa-a-i]* | לפנים כך היו עושים, ועתה שישה שקלים [כסף ייתן], | `לְפָנִים בְּיִשְׂרָאֵל כֹּה אָמַר הָאִישׁ` (שמואל א ט:ט) | [equivalent] | הכותב המעיד על מנהג "של לפנים" שבטל |
| HL2 §122, 122.1 | *ták-ku an-da ap-pa-an-da {GIŠ}MAR.GÍD.DA ku-iš-ki ta-a-i-e-ez-[zi* | אם מישהו יגנוב עֲגָלָה *אֲסוּרָה* […] | `וַיֶּאְסֹר יוֹסֵף מֶרְכַּבְתּוֹ` (בראשית מו:כט) | [equivalent] | "אסר" – רתימה; רק אם *anda appant-* הוא "רתום" (crux) |
| HL2 §124, 124.3 | *[I-N]A A.ŠÀ da-l[i?-ia-zi ta ta-i-ez-zi ku-i]š-ki 3 GÍN KÙ.BABBAR pa-a-[i]* | [ב]שדה י[ניח, ו(אותן) יגנוב מישהו] – שלושה שקלים כסף ייתן, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ` (שמות כב:ו) | [equivalent] | היכן הושאר הרכוש כשנגנב: בתורה בבית השומר, כאן בשדה הפתוח |
| HL2 §126, 126.2 | *6 GÍN.GÍN KÙ.BABBAR pa-a-i ták-ku I-NA KÁ É.GAL {GIŠ}ŠUKUR ZABAR* | שישה שקלים כסף ייתן. אם בשער ההיכל חנית אָרָד | `וְהִפְקִיד עַל יַד שָׂרֵי הָרָצִים הַשֹּׁמְרִים פֶּתַח בֵּית הַמֶּלֶךְ` (מלכים א יד:כז) | [equivalent] | נשק משמר המלך בפתח בית המלך |
| HL2 §126, 126.2 | *… {GIŠ}ŠUKUR ZABAR* | … חנית אָרָד | `אֶת הַחֲנִית וְאֶת הַשְּׁלָטִים אֲשֶׁר לַמֶּלֶךְ דָּוִד` (מלכים ב יא:י) | [equivalent] | כלי הנשק כרכוש מלכותי |
| HL2 §126, 126.3 | *ku-iš-ki ta-i-e-ez-zi a-ki-aš ták-ku ZI.KIN.BAR URUDU* | מישהו יגנוב – ימות. אם מחט נחושת | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ חֲמִשָּׁה בָקָר יְשַׁלֵּם` (שמות כא:לז) | [divergence] | בתורה אין גניבת רכוש שעונשה מוות; כאן – מוות לגונב חנית משער ההיכל (*akiaš* "ימות", פעיל) |
| HL2 §127, 127.2 | *ku-it ku-it ḫar-ak-zi ta-at šar-⸢ni⸣-ik-zi* | כל מה שיאבד – ואותו יפצה, | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [equivalent] | האחריות לנזק העקיף |
| HL2 §128, 128.1 | *ták-ku SIG₄ ku-iš-ki ta-i-e-ez-zi ma-ši-ia-an* | אם מישהו יגנוב לְבֵנִים – כמה | `הָבָה נִלְבְּנָה לְבֵנִים וְנִשְׂרְפָה לִשְׂרֵפָה` (בראשית יא:ג) | [equivalent] | SIG₄ נקרא באכדית *libittu*, קרובת `לְבֵנָה` – דרך השומרוגרמה, לא דרך החתית |
| HL2 §128, 128.2 | *ta-i-e-ez-zi an-da-aš-še〈〈aš-še〉〉 a-pé-e-ni-šu-u-wa-an ⸢pa-a-i⸣* | שיגנוב – בנוסף לו כזה ייתן. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | כפל, כמו ב־110 |
| HL2 §128, 128.3 | *ták-ku ša-ma-na-az NA₄[{ḪI.A}-u]š? ku-iš-ki ⸢ta⸣-i-e-[e]z-zi* | אם מישהו יגנוב אבנים מן היסוד, | `לְבֵנִים נָפָלוּ וְגָזִית נִבְנֶה` (ישעיהו ט:ט) | [divergence] | לבנים ואבנים כשתי דרגות בנייה |
| HL2 §128, 128.4 | *A-NA 2 NA₄ 10 NA₄{ḪI.A} pa-[a]-i ták-k[u {N]A₄}ḫu-u-ḫa-an* | לשתי אבנים – עשר אבנים ייתן. אם (אבן) חוּחָה | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [equivalent] | אותו יחס בדיוק: פי חמישה, בעין |

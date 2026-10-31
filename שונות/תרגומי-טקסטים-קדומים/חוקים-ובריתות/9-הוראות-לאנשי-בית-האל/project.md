# Project 9: the Instructions for Temple Personnel (CTH 264)

## Scope
The whole text, *ŠA LÚ.MEŠ É DINGIR-LIM išḫiul* "the obligations of the men of the god's house" (Middle Hittite, c. 1400 BCE;
NS copies), key **IN** of `../../tools/hittite_tools.py`: 19 §§ + colophon (the standard division of Sturtevant & Bechtel 1935, Süel 1985, Taggar-Cohen
2006, Miller 2013), composite 312 rows (section "IN: the composite").

## Base
**Our composite** (no HPM edition, 2026-10-24) from TLHdig 0.3 (`../../sources/TLHdig/CTH-264/`, 19 manuscripts, CC BY 4.0):
the lead manuscript is **KUB 13.4** (4 columns, 307 lines, NS; 18 paragraph dividers), its lost beginning and breaks
filled from the duplicates (KBo 50.276b+ 159 lines, KBo 50.283+ 120, KBo 50.279+, KUB 40.63, KUB 26.31+, KUB 31.94+ …):
`composite-IN.tsv` (label `<§>.<n>`, §, the manuscript the line follows and its tablet lines, the composite text, the
duplicates, a note for every restoration taken from another manuscript), checked by `hittite_tools.py comp-check IN`.
Rank 3 (after drafting): no open modern translation; the Chicago Hittite Dictionary per word quotes many lines in
translation; Sturtevant & Bechtel 1935 (*A Hittite Chrestomathy*, with the text and a translation) if an open copy is
found; Taggar-Cohen 2006, Miller 2013 (WAW 31) ©, records only.

## Line numbering
`<§>.<n>`: § as in the standard division (KUB 13.4's paragraph dividers), *n* the line within the §; the concordance to
KUB 13.4's column and line (the citation form of the literature: "KUB 13.4 ii 25") is the TSV's `ms_lines` column, and the
clean translation's headings give the § with its KUB 13.4 range.

## IN: the composite (CTH 264)
Built 2026-10-25/26 by the Round 4 run 6 Sub3 coordinator, **before the first translated line** (commit e80d7ac).
`composite-IN.tsv` (312 rows) is checked by `python3 -I -B ../../tools/hittite_tools.py comp-check IN` (0 problems). It was
generated once (`composite-IN--made-by.py` keeps the decided map, the lead measure and the notes, for the record); **the TSV
is now the source**: edit it, never re-run the generator over it.

**Method.**
1. **The manuscripts and their dates.** TLHdig 0.3 has 19 files in `CTH-264/`. The Mainz *Konkordanz* (`hethport.net/hetkonk/
   hetkonk_abfrage.php?c=264`, read 2026-10-25: 21 tablets, 37 fragments) dates **every copy New Script** ("jh."; KBo 68.71 and
   Dispersa 17 no date) – the text is Middle Hittite (c. 1400 BCE) in 13th-century copies; there is no Old Script copy, so the
   lead question is one of preservation only. Sigla (CTH 264 .A–.P, Miller 2013): **A = KUB 13.4** (Bo 2019, the one complete
   tablet, four columns); **B = KBo 50.276b+** (+ FHL 100 + KUB 31.120 + KUB 13.6 + KUB 13.17 + KUB 13.19 + Bo 9288 (+) KBo 50.276a;
   KBo 52.261, CTH .B, an indirect join); **C = KBo 50.283+** (+ KUB 31.92 (+) KUB 13.5 (+) KUB 31.95 – Sturtevant & Bechtel's
   KUB 13.5 for the top of col. ii); **D = KUB 26.31** (+) AnSt 20; **E = KBo 50.279** (+ KUB 13.18 (+) KBo 67.308 (+) KUB 31.93);
   **F = KUB 31.94** (+) HT 28; **H = KUB 40.63**; I KBo 57.232; J KBo 50.274; K KBo 57.11; L KBo 50.278; M Bo 8054 (not in TLHdig);
   N KBo 54.214; O KBo 69.82; P Dispersa 31 (published 2026, van den Hout; not in TLHdig); without a letter: KBo 61.323, KBo 68.18,
   KBo 68.71, Dispersa 17 (TLHdig has them), KBo 59.27 (not in TLHdig). **TLHdig's `KUB 61.323.xml` is a second copy of KBo
   61.323** (the same 11 lines, differing only in half-brackets; there is no such KUB tablet): excluded.
2. **The § numbers.** The standard division, **§§1–19 + the colophon**, as Sturtevant & Bechtel 1935 (*A Hittite
   Chrestomathy*, pp. 127–174; read 2026-10-25 in the full-view Digital Library of India copy, archive.org
   `in.ernet.dli.2015.279400`, after the composite was decided, for the numbering only) number it, followed by Süel 1985,
   McMahon (COS 1.83) and Taggar-Cohen 2006 (not in hand: their numbering is the literature's, not verified by us); Miller 2013
   (not in hand) writes the same numbers with primes (§7′ in Alaura 2016's title is our §7), because the opening is lost. The 19
   §§ are KUB 13.4's 18 paragraph dividers **plus the one in its lost col. ii top**, which KBo 50.283+ keeps (ii 16): §6 runs
   from A i 60′ into the lost top of col. ii, §7 from there to A ii 24′. B has a ruling before its i 1′ (= A i 3′): a § may be
   lost before §1; its traces (A i 1′–2′) stay in §1.
3. **The lead** (guidelines §5.2, "Texts, recensions, numbering"): **KUB 13.4 leads wherever its line keeps at least about two
   thirds of the signs (outside `[ ]`) that the best aligned duplicate keeps for the same text; elsewhere the best duplicate
   leads.** Measured by the generator (`--measure`): A falls below the threshold only in its lost col. ii top and ii 5′–16′
   (C ii 6–26 leads: rows 6.8–7.10; C is broken only at the left edge, B ii 1′–9′ at the right) and at iv 1 (no sign: B iii 9′
   leads, row 15.1). The four rows the measure flags elsewhere (8.5, 8.16, 19.3, 19.5) are long A lines against two shorter
   duplicate lines, intact: A stays.
4. **The rows.** One row per line of the lead (`<§>.<n>`; the colophon `col1`–`col4`); `text` = that line exactly as TLHdig gives
   it, **including TLHdig's own restorations in `[ ]`** (e.g. A ii 18′–22′ restored from B). Our changes, each in the `note`
   column: 6.8 (C ii 6 without TLHdig's restored opening `[e-ep-du`, which repeats A i 66′'s last word); the notes of the
   borrowed rows 6.8–7.10 and 15.1; 7.11 (A ii 17′, a clause that C does not keep); 1.1 (the lost opening). TLHdig's marks:
   `[ ]` restored, `⸢ ⸣` damaged, `〈 〉` omitted by the scribe, `〈〈 〉〉` to be deleted, `!` a correction, `?` uncertain,
   `*…*` written over an erasure, `x` an unread sign, `𒑱` the Glossenkeil (a Luwian or foreign word).
5. **The duplicates** (`witnesses`): every other manuscript's lines of the §, aligned to a lead row by an order-preserving
   word-overlap alignment (approximate: the copies break their lines differently; the translator compares the whole §).
   `hittite_tools.py data IN` prints them under each row.
6. **Variant dividers** (for the נוסחים field): E has a ruling inside §9 (after A ii 65′ "… to the gods' soul") and inside §12
   (near A iii 40); C and B follow A's division wherever preserved.
7. **Variants of content worth the translator's eye** (examples, not a list): D iv 7′ *išpandazza* "by night" where A iii 7
   has GE₆-az; B ii 36′ *akkatar* "death" where A ii 45′ has ÚŠ-tar (the same word, syllables vs. logogram; corrected 2026-10-26: C ii 16, also *akkatar*, is our row 6.18 in §6, not a duplicate of A ii 45′); B
   iv 15′ the erroneous *šume〈〈eš〉〉el*; H i 13′ *NAG-na* over an erasure.

### IN concordance (§ → lead → duplicates; the KUB 13.4 citation form of the literature)
| § | KUB 13.4 (citation) | Lead manuscript (lines) | Duplicates (lines) | Certainty, notes |
|---|---|---|---|---|
| 1 | i 1′–13′ | KUB 13.4 (A) Vs. I 1′ – Vs. I 13′ | KBo 50.276b+ (B) {1} Vs. I 1′ – {1} Vs. I 11′ | the opening is lost; only traces in A i 1′–12′; B has a ruling before its i 1′ (= A i 3′): a lost § may precede |
| 2 | i 14′–33′ | KUB 13.4 (A) Vs. I 14′ – Vs. I 33′ | KBo 50.276b+ (B) {1} Vs. I 15′; KBo 50.276b+ (B) {2} Vs. I 1″ – {2+1} Vs. I 6″/Vs. I 30″; KBo 50.283+ (C) {3} 1′ – {3} 3′; KBo 69.82 (O) Vs. I 1′ – Vs. I 3′; KBo 50.278 (L) 1′ | sure |
| 3 | i 34′–38′ | KUB 13.4 (A) Vs. I 34′ – Vs. I 38′ | KBo 50.276b+ (B) {2+1} Vs. I 7″/Vs. I 31″ – {2+3} Vs. I 10″/2″; KBo 50.283+ (C) {3} 4′ – {3} 7′; KBo 50.278 (L) 2′ – 6′ | sure |
| 4 | i 39′–49′ | KUB 13.4 (A) Vs. I 39′ – Vs. I 49′ | KBo 50.276b+ (B) {2+3} Vs. I 11″/3″ – {4} 8″; KBo 50.283+ (C) {3} 8′ – {3} 15′; KBo 54.214 (N) 1′ – 7′; KBo 50.278 (L) 7′ | sure |
| 5 | i 50′–59′ | KUB 13.4 (A) Vs. I 50′ – Vs. I 59′ | KBo 50.276b+ (B) {7+4} 1″/9″ – {7} 9″; KBo 50.283+ (C) {3+2} 16′/5″ – {2} 13″; KUB 40.63 (H) Vs. I 1′ – Vs. I 7′; KBo 50.274 (J) 1′ – 6′ | sure |
| 6 | i 60′–66′ (+ ii 1′–4′ traces) | KUB 13.4 (A) Vs. I 60′ – Vs. I 66′ + KBo 50.283+ (C) {1} Vs. II 6 – {1} Vs. II 16 | KBo 50.283+ (C) {1} Vs. II 1 – {1} Vs. II 5; KUB 40.63 (H) Vs. I 8′ – Vs. I 19′; KUB 13.4 (A) Vs. II 1′ – Vs. II 4′; KBo 61.323 lk. Kol. 1′ – lk. Kol. 4′ | A i 60′–66′, then A's lost col. ii top from C ii 6–16 (H i 13′–19′ is the other copy; A ii 1′–4′ only traces) |
| 7 | ii 5′–24′ | KBo 50.283+ (C) {1} Vs. II 17 – {1} Vs. II 26 + KUB 13.4 (A) Vs. II 17′ – Vs. II 24′ | KUB 13.4 (A) Vs. II 5′ – Vs. II 16′; KBo 50.283+ (C) {1} Vs. II 27 – {1} Vs. II 33; KBo 50.276b+ (B) {1} Vs. II 1′ – {1} Vs. II 16′; KBo 50.279+ (E) {4} 1′ – {4} 2′; KBo 52.261 1′ – 7′ | C ii 17–26 where A ii 5′–16′ is broken; A from ii 17′ (its ii 18′–22′ restored by TLHdig from B) |
| 8 | ii 25′–51′ | KUB 13.4 (A) Vs. II 25′ – Vs. II 51′ | KBo 50.276b+ (B) {1} Vs. II 17′ – {1} Vs. II 42′; KBo 50.283+ (C) {1} Vs. II 34 – {1} Vs. II 46; KBo 50.279+ (E) {4} 3′ – {4} 10′; KBo 50.279+ (E) {2} Vs. II 1″ – {1+2} 6″/Vs. II 9″; KBo 69.82 (O) Vs. II 1′ – Vs. II 5′ | sure |
| 9 | ii 52′–72′ | KUB 13.4 (A) Vs. II 52′ – Vs. II 72′ | KBo 50.276b+ (B) {1} Vs. II 43′; KBo 50.279+ (E) {1+2} 7″/Vs. II 10″ – {3} 11″; KUB 31.94+ (F) {2} 1′ – {1} 2′ | sure; E has a ruling inside the § (after A ii 65′) |
| 10 | ii 73′–iii 20 | KUB 13.4 (A) Vs. II 73′ – Rs. III 20 | KUB 31.94+ (F) {1} 3′ – {1} 7′; KUB 26.31+ (D) {1} Rs. IV 1′ – {1} Rs. IV 17′; KUB 26.31+ (D) {2} Rs. IV 1′ – {2} Rs. IV 2′; KBo 61.323 r. Kol. 1′ – r. Kol. 7′; KBo 57.11 (K) 1′ | sure |
| 11 | iii 21–34 | KUB 13.4 (A) Rs. III 21 – Rs. III 34 | KUB 26.31+ (D) {2} Rs. IV 3′ – {2} Rs. IV 13′; KBo 57.11 (K) 2′ – 6′; KBo 68.71 1′ – 5′; KBo 50.283+ (C) {1} Rs. III 1′ – {1} Rs. III 5′; KBo 50.279+ (E) {2} Rs. III 1′ – {2} Rs. III 6′ | sure |
| 12 | iii 35–43 | KUB 13.4 (A) Rs. III 35 – Rs. III 43 | KBo 50.283+ (C) {1} Rs. III 6′ – {1} Rs. III 14′; KBo 50.279+ (E) {2} Rs. III 7′ – {2} Rs. III 15′ | sure; E has a ruling inside the § (near A iii 40) |
| 13 | iii 44–54 | KUB 13.4 (A) Rs. III 44 – Rs. III 54 | KBo 50.283+ (C) {1} Rs. III 15′ – {4+1} Rs. III 5′/Rs. III 25′; KBo 50.276b+ (B) {1} Rs. III 1′ – {1} Rs. III 6′; KBo 68.18 1′ – 5′ | sure |
| 14 | iii 55–83 | KUB 13.4 (A) Rs. III 55 – Rs. III 83 | KBo 50.283+ (C) {4+1} Rs. III 6′/Rs. III 26′ – {1} Rs. III 50′; KBo 50.276b+ (B) {1} Rs. III 7′ – {6} Rs. III 8′; KBo 68.18 6′ – 10′; KBo 57.232 (I) 1′ – 7′ | sure |
| 15 | iv 1–11 | KBo 50.276b+ (B) {6} Rs. III 9′ + KUB 13.4 (A) Rs. IV 2 – Rs. IV 11 | KUB 13.4 (A) Rs. IV 1; KBo 50.276b+ (B) {6} Rs. III 10′ – {6} Rs. III 15′; KUB 40.63 (H) Rs. IV 1 – Rs. IV 5 | A iv 1 has no sign: the opening from B iii 9′, a gap of unknown length after it |
| 16 | iv 12–24 | KUB 13.4 (A) Rs. IV 12 – Rs. IV 24 | KUB 40.63 (H) Rs. IV 6 – Rs. IV 14 | sure |
| 17 | iv 25–33 | KUB 13.4 (A) Rs. IV 25 – Rs. IV 33 | – | sure |
| 18 | iv 34–55 | KUB 13.4 (A) Rs. IV 34 – Rs. IV 55 | KBo 50.276b+ (B) {2} Rs. IV 1′ – {2} Rs. IV 16′; Dispersa 17 1′ – 7′ | sure |
| 19 | iv 56–77 | KUB 13.4 (A) Rs. IV 56 – Rs. IV 77 | KBo 50.276b+ (B) {2} Rs. IV 17′ – {2} Rs. IV 34′ | sure |
| colophon | iv 78–81 | KUB 13.4 (A) Rs. IV 78 – Rs. IV 81 | – | sure: "Tablet 1 … finished" |

Rank 3/5 for the translator (after drafting only): Sturtevant & Bechtel 1935 (English translation of KUB 13.4 + KUB 13.5, the
1935 readings: old, check every word against the CHD and the composite; kept in the session scratchpad, not in `sources/`);
the CHD's free volumes L–N, P, Š per word.

## IN: the coordinator's brief for the translator (Sub3, 2026-10-26; on top of `../translator-brief--hittite.md`)
**Your text** is `composite-IN.tsv` (read "IN: the composite" above first: the leads, the borrowed rows, the marks).
Labels `<§>.<n>` (`1.1` … `19.22`, `col1`–`col4`); one Hebrew line per row; `@` + `fill`. **Parts** (one translator, resumed
part by part): **P1 1.1–7.18** (95 rows: the opening, the bakers, "the mind of man and of the gods", the festivals, the god's
food), **P2 8.1–11.14** (87: the god's silver and gold, festivals in their time, the night watch, the rites), **P3
12.1–16.13** (73: quarrels at the festival, the fire, the kitchen, the farmers' first produce, the seed grain), **P4
17.1–col4** (57: the plough-ox, the herdsmen's young animals, the animals brought to the god, the colophon). File:
`annotated-IN.rtl.md`, built like `../8-החוקים-החתיים/annotated-HL2.rtl.md` (title `# הוראות לאנשי בית האל – תרגום מבואר`, a
short head paragraph: the base is our composite, the marks, the fixed words); `<!-- טרם תורגם: FROM–TO -->` for the rows not
yet drafted. **Headings** `## §N – <Hebrew title> (KUB 13.4 <col. line–line>)`, the range from the concordance's second
column in Hebrew-neutral form: `(KUB 13.4 i 1′–13′)`, `(KUB 13.4 i 60′–66′; ii לפי KBo 50.283+)` for §6, `(KUB 13.4 ii 5′–24′;
ii 5′–16′ לפי KBo 50.283+)` for §7, `(KUB 13.4 ii 73′–iii 20)`, `(KUB 13.4 iv 1–11)`; the colophon `## קולופון (KUB 13.4 iv 78–81)`.

**IN follows the Laws' Hebrew** (HL1, HL2, HLPT) for every shared word and formula: `../renderings.md` §7.1–§7.11 and the
review rulings, and **§7.2 with its "Checked … by Sub3" block** (binding: *É DINGIR-LIM* `בית האל`, SANGA `כהן`, *ḫali-*
watch `משמרת` / corral `מכלאה`, *paḫš-* `שמר`, *naḫḫanteš ešten* `היו יראים` F12, *SAG.DU-aš waštul* `חטא־ראש` F13, *ÚŠ-tar*
`מות־ראש` F14, *paḫḫaššanuwanteš ešten* `היו נשמרים` F16, *araḫzena-* `חיצוני`, *UBĀRU* `אורח`, *ḫuelpi* `הטרי`, ZI `נפש` …).
Check every word with `hittite_tools.py lemma` / `grep --all` / `lexmap` before fixing it. New reservations (§H3, NEVER):
`בכורים`/`ראשית`, `תושב`/`גר`, `נדר`, `מזבח`, `מעשר`/`תרומה`, `קבע`, `הכעיס`, `לחם התמיד`/`לחם הפנים` – on top of the old ones
(`זר`, `מקדש`/`משכן`/`מועד`, `יומת`, `קרב` the verb, `זבח`, `כופר`, `ברית`/`תורה`/`חוקה` …). Gated (§H4): `ירא` (*naḫḫ-*),
`נסך` (*išpant-*), `שמר` (*paḫš-*, *ḫali-*), `כהן`, `קדש`, `טהר`, `טמא`, `חטא`, `היכל`, `זקנים`. Traps: `אֵל`/`אֵלִים`,
`אֵם הָאֵל` (AMA.DINGIR-LIM), `חַתּוּשָׁה`, `שִׁמְשִׁי`.

**Formulas and repeated passages to fix at their first occurrence and keep** (find them in the transliteration; ★): the
address *anda=ma=za šumeš kuieš LÚ.MEŠ É DINGIR-LIM* "furthermore, you who are the men of the god's house" (§§9, 10; with
the other classes §§12, 14, 15, 18); *nu=za … mekki (marri) naḫḫanteš ešten* (F12; CHD L–N *marri*); *EGIR-zian=ma=at
išduwari* "but later it becomes known" and *mān=ma=at UL=ma išduwari* "but if it does not become known" (§§14, 16, 17, 18,
19); *nu=šmaš=at SAG.DU-aš waštul* (F13); *DINGIR.MEŠ-aš ZI-ni* "to the gods' soul" (one phrase); *EGIR-pa waḫnumar lē ešzi*
"let there be no turning back (pardon)" (§5, §8: one Hebrew); *mēḫunaš mēḫuni* "at the time of times" (`מועד` is reserved:
choose another word, once); *ḫūdāk* "at once"; the ordeal *BIBRU DINGIR-LIM ZI-aš arḫa ekutteni* (§18, §19) and the oath
formula *mān parkuweš … šumel DKAL-KUNU, takku papranteš=ma* (§17, §18): identical Hittite, identical Hebrew; the herdsmen's
two speeches (§18, §19: *mān=wa=za kī ḫuelpi … piyawen*) – command and execution in the same words; §19's confession repeats
its case (iv 62–66 ↔ 71–75) in the 1st person: the same words and order. The festival list of §4 (the names: translate the
transparent ones – month, year, autumn *zena-* `סתיו`, spring *ḫamešḫa-* `אביב` (HL1), thunder *tetḫešnaš* –, transliterate and
vocalize the rest with `(?)`).

**נוסחים**: every difference of content between the lead and its duplicates (see the composite's points 6–7: B, C, D, E, H
against A; the rows borrowed from C and B in §6, §7, §15: say there what A keeps of them); KBo 50.283+ is Sturtevant &
Bechtel's KUB 13.5.

**Look for** (briefs say "look for", never "translate as"; print every verse first): Num 18:1–7, 22–23 (`מִשְׁמֶרֶת`, the
guard of the sanctuary, "the outsider who approaches dies": Milgrom 1970, *Studies in Levitical Terminology* I: the
Hittite night watch is his main comparison – the watchman who does not go to his post dies, iii 30–34; the
outsider who approaches the gods, §6), Num 1:51–53, 3:38; **Lev 22:1–16** (who eats the holy food: the priest's family,
the slave, not the resident and the hired man; impurity until evening; ↔ §2 the bakers, §5 the god's food carried home to
wives, children and slaves and given to an in-law or a guest, §14 the kitchen, sexual intercourse and the bath before
entering); Lev 15:16–18 (§10, §14: the man who slept with a woman); Lev 10:9 (drink?); Lev 7:15–18 (§§15, 17, 18: eating
the god's portion in time, before men eat); Mal 3:8 and Lev 27 (robbing the god of his property, §8: silver, gold, the
king's gift; §16: the god's field called "ours" and the grain taken); the firstlings and tithes: Num 18:12–15, Exod 23:19,
Exod 34:26, Lev 23:14 (§15, §18: before man eats it); Deut 23:22–24 (vows: §18?); **1 Sam 2:12–17** (the priests who take
the god's meat before it is offered; §5, §19: the herdsman who sells the fattened ox and puts a lean one in its place);
Lev 27:10, 33 (`לֹא יַחֲלִיפֶנּוּ … וְהָיָה הוּא וּתְמוּרָתוֹ`: §19 the substitute animal); Lev 6:5–6 (the fire that shall not
go out; §13: the fire of the hearth at night); Ps 121:4 (`לֹא יָנוּם וְלֹא יִישָׁן שׁוֹמֵר`: §10 "let there be no sleep for
them"); Song 3:3, 5:7 (the patrol); Job 7:17–18 / Ps 8:5 (what is man?) and Isa 55:8–9 (§2: "is the mind of man and of the
gods any different?"), Mal 1:8 (§2: a servant and his master, "offer it to your governor"); Exod 28:43 (the death of the
priest who errs). Echo control: Hittite never met Israel; Milgrom argues a typological (not genetic) parallel – say so.

**The soul of the ancients** (the הערות): the god as master, the priest as servant (§2's parable of the slave: washed,
clean clothes, food and drink, the master's mood; and his whole family dies with him: collective punishment); the
fear of the god's anger "that does not hasten to seize, but when it seizes does not let go" (§7); the god's property and
the king's gifts sealed and registered (§8); festivals at their time, not when it suits the priest (§9); the night watch
of a city temple and the threat of the enemy (§10); the watchman who would rather stay home (§11); the kitchen's purity:
pigs and dogs at the door, hair and nails cut, the bath after a night with a woman, the ordeal for the one who hides his
impurity (§14); the farmers and the god's fields (§§15–17); the herdsmen and the young animals (§18), the swapped ox
(§19); the oaths "if we did it, may the god pursue us". Not every line needs a note.

**Rank 3/5 (after drafting only).** No open modern translation. **Sturtevant & Bechtel 1935** (*A Hittite Chrestomathy*, pp.
127–174, transliteration of KUB 13.4 + KUB 13.5 with an English translation; full view, archive.org
`in.ernet.dli.2015.279400`; OCR of the translation pages good, of the transliteration poor):
`/tmp/claude-0/-home-user-perush/d5491f11-e246-5018-a562-08037f355ad7/scratchpad/sb/sb.txt` (the text from line ~6550; their §
numbers are ours; their col. ii line numbers are A's + 7, and their ii 1–11 come from KUB 13.5 = C). Their readings are 1935
readings (e.g. *karšattar* "castrate", now "selected portion"): never take a reading from them. **The CHD**, free volumes L–N, P
and Š, per word only (its terms: no bulk extraction, no datasets): text files in
`/tmp/claude-0/-home-user-perush/d5491f11-e246-5018-a562-08037f355ad7/scratchpad/chd/` (`chd_l-n.txt`, `chd_p.txt`, `chd_s.txt`,
`chds1/3/4/5/6.txt`; the OCR writes *ḫ* as `h`, *š* as `s`: grep a word, read its entry; many lines of KUB 13.4 are quoted
and translated there – a rank-3 reading for that word). Record every disagreement in תרגומים ("S&B 1935: «…»", "CHD L–N 194:
«…»").

## Bible (look for)
Num 18:1–7, 22–23 (the guard of the sanctuary: `מִשְׁמֶרֶת`, "the outsider who approaches shall die"), Num 1:51–53, 3:38;
Lev 22:1–16 (the holy food, impurity, who may eat: the slave bought with silver, the hired man), Lev 15:18 (sleeping with a
woman before entering), Lev 10:9 (drink); Mal 3:8 and Lev 27 (defrauding the god of his property); Deut 23:22–24 (vows);
Exod 28:43 (the death of the priest who errs); the "minds of men and gods" (KUB 13.4 i 21–22) ↔ Ps 8:5, Isa 55:8–9.

## Open decisions
The cruxes are listed in the Proposals of each part and marked in the text (`?`, `*…*`); the main one is 6.11 (a restored *lē*: the donated bread forbidden – CHD – or allowed – S&B 1935 – to the personnel's households). The modern editions (Süel 1985, Taggar-Cohen 2006, Miller 2013) are © and not in hand: our § numbering is S&B's; the primes of Miller's numbering and his readings of the new fragments are unverified. Settled by the coordinator: see `../renderings.md` §7.12–§7.15 and the Sub3 review rulings.

## Progress
- 2026-10-24: base (TLHdig), tool, renderings (`../renderings.md` §7.2, §H2–§H9), brief – before the composite.
- 2026-10-25/26 (Sub3): the composite (312 rows, comp-check 0) and its concordance, pushed before the first translated line (a weekly-limit stop 2026-10-25 05:19 → 2026-10-26 07:26 UTC came in between; nothing lost).
- 2026-10-26: the renderings checked against the composite (§7.2), F12–F16 and new reservations, gates and traps; drafted in four parts by one Opus translator (merged as renderings §7.12–§7.15); review passes (a) fidelity 48 lines, (b) consistency 24 lines, (c) Hebrew 59 lines + the intro; built (`translation-IN.rtl.md`, `translation.rtl.md`); `verify --strict` on all Hittite keys 0 problems; parallels index 80 rows; print stub. **Complete (first draft).**

## Proposals

### IN part 1 (1.1–7.18)
Drafted 2026-10-26 by the IN translator (Round 4 run 6 Sub3), rows 1.1–7.18 (95 rows, §§1–7) in `annotated-IN.rtl.md`;
`verify IN` 0 problems (the undrafted rows are notes), `check_bible_quotes.py` 0, `selftest` 0 failures. Rank 3 consulted
after drafting: Sturtevant & Bechtel 1935 (scratch OCR) and the CHD L–N, P, Š per word.

**Formulas and repeated passages fixed (copy byte for byte in parts 2–4):**
| Hittite | Hebrew | First row | Echo | Note |
|---|---|---|---|---|
| *nu=za X-i mekki naḫḫanteš ešten* (F12) | `ול־X היו יראים מאוד!` (7.18: `ולנפש הָאֵלִים היו יראים מאוד!`) | 7.18 | [equivalent] Lev 19:30 | X first, then `היו יראים`, then `מאוד`. |
| … *mekki marri naḫḫanteš ešten* | `ולדבר הָאֵל היו יראים מאוד, עד מאוד!` (*marri* = `עד מאוד`, CHD "exceedingly") | 3.5 | same | *ANA INIM DINGIR-LIM* = `לדבר הָאֵל`. |
| *SAG.DU-aš akkatar* / *ÚŠ-tar* (F14) | `וזה לו מות־ראש!` (*n=at=šši*); with =šmaš: `וזה לכם מות־ראש` | 6.18 | [divergence] Num 1:51 | parallels the selftest's F13 `וזה לכם חטא־ראש`. |
| *EGIR-pa waḫnumar=šši lē ešzi* | `הֲפִיכָה בחזרה – אַל תהיה לו!` (vocalized; 8.27 *nu=šmaš EGIR-pa waḫnumar lē=pat ešzi* → `ולכם הֲפִיכָה בחזרה – אַל תהיה כלל!`) | 5.10 | – | EGIR-pa `בחזרה` (HLPT); `שוב` avoided. |
| *DINGIR.MEŠ-aš ZI-ni* (one phrase) | `לנפש הָאֵלִים`; *ZI(-TUM) DINGIR-LIM* `נפש הָאֵל`; *ANA ZI-TUM DINGIR-LIM … dā-* `מנפש הָאֵל … תיקחו` | 4.11 | – | |
| *anda=ma* (opening a §) | `ונוסף על כך:` | 4.1 | – | *anda* = `בנוסף` as HL2 *anda=šše*. |
| the address *anda=ma=za šumeš kuieš LÚ.MEŠ É DINGIR-LIM* (9.1, 10.1) | **proposed** `ונוסף על כך: אתם, אשר אנשי בית הָאֵל (אתם) –`; with classes (12.1 *anda=ma=za namma šumeš LÚ.MEŠ SANGA …*) `ונוסף על כך, עוד: אתם, הכוהנים, …`; 14.1, 18.1 *šumaš kuieš X* `ונוסף על כך: אתם, אשר X (אתם) –` | (9.1) | – | not in part 1; 4.10 has the bare *šumeš LÚ.MEŠ É DINGIR-LIM* `אתם, אנשי בית הָאֵל`. |
| *namma* "further" | `ועוד` | 2.1 | – | |
| *meḫur* "time" | `זמן` (HL2 165.2 precedent; *kuedani meḫuni* `באיזה זמן שהוא`) | 7.17 | – | **proposed** for *mēḫunaš mēḫuni* (§§9, 15, 18): `בזמן הזמנים` (literal "at the time of times"; `מועד` reserved); alternative `בזמנו`. |
| festival names (§4) | `חג החודש`, `חג השנה`, `חג הָאַיָּלִי(?)`, `חג הסתיו`, `חג האביב`, `חג הרעם`, `חג הַחִיָּרָה(?)`, `חג הַפּוּדָחָה(?)`, `חג הָאִישׁוּוָה(?)`, `חג הַשַּׁתְלַשָּׁה(?)`, `חג הַבִּיבְרוּ` (BIBRU, rhyton: transliterated, for §§18–19 *BIBRU DINGIR-LIM* `בִּיבְרוּ הָאֵל`), `חגי הכוהנים הקדושים`, `חגי הזקנים`, `חגי אִמּוֹת הָאֵל`, `חג הַדַּחִיָּה(?)`, `חגי אנשי הָאוּפַּטִי`, `חגי הַפּוּלָה(?)` (*pul-* "lot": `גורל` is reserved – transliterated), `חגי העידור(?)` | 4.1–4.6 | [divergence] Exod 23:14; Esth 3:7 (typological) | |
| the oath of 6.5–6.7 | `"מי שמן החלה שלך, הָאֵל, ומכלי־הנסך לקח – אותו, הָאֵל, אדוני, אחריו [לֵךְ]! ואת ביתו – למטה, למעלה – יתפוס!"` | 6.5 | [equivalent] Josh 7:24 | *EN-YA* `אדוני`. |

**Words fixed (Hittite → Hebrew, first row; all checked with `lemma` / `grep --all` / `harmonize_survey`):**
*šanḫ-* split by sense: "sweep" `מטואטא` (2.6) / "seek out" `דרש` (3.2; [equivalent] Gen 9:5); *šarra-* split by sense: "divide"
`חלק` (HL1; 5.7–5.10) / "cross (a threshold)" `חצה` (6.15; Sum. *bal* `חצה` in the other corpora); *waḫnu-* split: "exchange"
`המיר` (7.8; [equivalent] Lev 27:10) / *EGIR-pa waḫnumar* `הֲפִיכָה בחזרה` (5.10); *UMBIN* "fingernail" `ציפורן` (2.3) against HL2
*UMBIN* "wheel" `גלגל` (split by the sign's two words). *TUKU.TUKU-nu-* `הזעים` (`יַזְעִים`, 2.16; causative of HL1 `זעם`);
*idālawaḫḫ-* `הרע ל־` (2.17); *kuen-* `הרג`; *kaena-* `מחותן`; *MÁŠ* "family" `משפחה`; *NUMUN* `זרע`; *ḫalki-* `תבואה`;
*ḫarnink-* `השחית` (HL2); *ḫūmandaz* `מכל וכל`; *warpant-* `רחוץ`; *kartant-* `גזוז`; *išḫiyeni-* `שער`; *waššant- ḫark-*
`לבוש (היה)`; *dān ēšdu* `לקוח יהיה`; *LÚ NINDA.DÙ.DÙ* `אופה`; *paršur-* `תבשיל`; *KÁ* `שער` (HL2); *ḫarnuwant-* `מרוסס`;
*lā-* (ptcp., "relieved") `רפוי`; *tamenk-* `דבק` ([equivalent] Gen 34:3); *ḫanḫaniya-* (Luw.) `קשוב`; *ḫalzai-* `קרא`;
*tettiyant-* `כלול` (?); *SŪTU* `סאה`; *UPNU* `חופן`; *šunnummeššar* `מילוי` (*šunna-* `מילא`); *tiyant-* (of *dai-*) `שׂוּם`
(*šarā tiyanta* `השׂוּמִים למעלה`; *dai-* `שׂם` per §7.10 – **note: the ritual corpus's R1 still has *dai-* = `הִנִּיחַ`**: a
cross-corpus split for the lead); *ayali-*, *ḫiyara-*, *pudaḫa-*, *išuwa-*, *šatlašša-*, *taḫiya-*, *upati-*, *pul-* transliterated;
*ḫaḫratar* `עידור(?)`; *ešša-* `עשה` (iter.; *EZEN₄ ešša-* `עשה (חג)`); *ḫappar* `מסחר` (HL1); *wakšiyanu-* `החסיר`; *parā arnu-*
`קדימה הִגִּיעַ` (`תַּגִּיעוּ`, vocalized); *pē ḫar(k)-* `הוביל` (5.3, 6.1); *aššuwant-* `חשוב`; *UBĀRU* `אורח` (§7.2);
*takšan šarra-* (noun) `לשניים חלק` (HL1 171); *šarrumar* `חלוקה`; *ki-* "lie" `מונח`; *SAG.DU-az GAM-an kittaru* `בראש – למטה –
מונח יהיה` (literal; crux); *dāliya-* `הניח` (HL1 *dala-*); *NINDA.SIG* `לחם דק` (`רקיק` avoided); *ḫarši-* `חלה` (HL2); *GAL*
"cup" `כוס`; *laḫu-* `שפך`; *maniyaḫḫ-* `מִנָּה` (`מַנּוּ`, vocalized; [equivalent] Dan 1:5; `מסר` is LH's *šarāku*); *memiya-* /
*mema-* `אמר` (*memian memi-* `דבר … אמר`); *tarḫ-* `יכול`; *piyantalli-* `לחם־המתנה` (CHD "donated bread"); *kattaluzzi-*
`מפתן` (as Maqlû's *askuppu*); *pāuwaš* "of going (up)" `(מבני) העלייה`; *DUMU.LÚ.U₁₉.LU* `בן אדם`; *unnant-* `נִנְהָג`; *NIGA*
`מפוטם` (HL1); *maklant-* `כחוש`; *mark-* `*פירק*`; *iuk-* "yoke" `עול`; *ašawar* `דיר` (HL1); *SIG₅-in* "well" `היטב`; *ŠÁM*
`מחיר`; *KA×U* `פה`; *zuwa-* (Luw.) `מזון`; *pittinu-* `הבריח` (HL1); *daššu-* `חזק`; *nuntarnu-* `מיהר`; *au-* `ראה`;
*EGIR-anda* `אחר כך`; *EGIR-an* `אחריו`; *kiššan anda peda-* `כך פנימה נשא` (literal: "argue to oneself"; `נשא` licensed).

**Kept against the pre-set table / the selftest:** *tarna-* stays `שלח` (HL1, HL2 107.1, ritual R1): 7.4–7.6 `תשלחו`, 7.18 `לא
תשלח!`. **The selftest's ok-line for IN 7.18 (`לא יַרְפֶּה; ואתם – לנפש הָאֵלִים היו יראים מאוד.`) differs from the drafted line
(`לא תשלח! ולנפש הָאֵלִים היו יראים מאוד!`)**: it still passes (it tests F12 only), but I propose replacing it with the drafted
line. No pre-set row of §7.2 was changed; *NINDA.GUR₄.RA UD-MI* = `לחם עבה יומי` as pre-set (2.1 plural `הלחמים העבים
היומיים`); *išpantuzzi* `כלי־נסך` as pre-set.

**Gates, traps, notes:** propose traps (always vocalized): `דַּחִיָּה` (*taḫiya-*; unvocalized "rejection"), `מַנּוּ` (*maniyaḫḫ-*
imp.; "from him"). The vocalization rule of H6 for `אֵל` catches the preposition `אל` and the prohibitive `אל` in every DINGIR
line – handled by vocalizing `אֶל` / `אַל` there (4 + 11 times in part 1): worth telling parts 2–4 up front. **A correction to
"IN: the composite" point 7:** "B ii 36′ and C ii 16 *akkatar* where A ii 45′ has ÚŠ-tar" – C ii 16 is our row 6.18 (§6, A's lost
col. ii top), not a duplicate of A ii 45′ (§8); B ii 36′ is the §8 duplicate. No gate or licence found wrong.

**Cruxes (translated literally, marked, alternatives in the apparatus):** 1.13 *tamedani šarḫuwandaz lē ḫarnikteni*; 2.13 the
subject of *n=at=ši … tamenkiškettari*; 2.14 *IGI-wannanza* `*מתרשל?*`; 2.15 read as a second question (S&B: "a different
disposition toward him"); 2.19 *parranda ḫalzianzi=pat … UL kuitki iyanzi* (`*רק קוראים לו*`, the mildest step of the scale;
S&B "revile him in public"); 2.20 *tettiyant-*; 5.9 *SAG.DU-az GAM-an kittaru*; 6.7 *kiyaḫḫut* (TLHdig's restoration; CHD "go
after"); 6.11 the restored *lē* (CHD: the donated bread is *not* for wives, children, slaves; S&B 1935 read the opposite);
7.3 *mark-* `*פירקתם*`; 7.10 statement, not S&B's question; 7.12 *anda peda-*; 7.14 the addressee of *au* "see!" (the god?).

### IN part 2 (8.1–11.14)
Drafted 2026-10-26 by the IN translator, rows 8.1–11.14 (87 rows, §§8–11), in natural Hebrew clause order (the coordinator's
ruling), each row's content kept in its row (where a Hittite phrase is split across two rows, so is the Hebrew: 9.4–9.5
`בזמנו`, 9.8–9.9, 10.1–10.2, 10.9–10.10). `verify IN` 0 problems, `check_bible_quotes.py` 0, `selftest` 0 failures; lexmap
checked (*NÍG.BA* aligned to HL1 `מַתָּת`). Rank 3 after drafting: S&B 1935; CHD L–N (*lamniya-*, *lāman*, *marri*, *luri-*,
*luli-*), Š (*šarra-*).

**Formulas copied from part 1 / §7.12:** the address `ונוסף על כך: אתם, אשר אנשי בית הָאֵל (אתם) –` (9.1, 10.1); F12 without an
object `והיו יראים מאוד!` (8.5); F14 `וזה לו מות־ראש!` (8.21), with =šmaš "to them" `וזה להם – לשניהם – מות־ראש!` (8.25–8.26); F13
`וזה לו חטא־ראש!` (10.21); `הֲפִיכָה בחזרה – אַל תהיה כלל!` (8.27, **`ולהם`, not `ולכם`**: =šmaš there are the two culprits of
8.25 – my part-1 proposal was wrong); *mēḫunaš mēḫuni* `בזמנו` (9.4–9.5); *mekki marri* `מאוד, עד מאוד!` (10.22).
**New formula:** F16 with its object: *ḫaliyaš uddanī mekki paḫḫaššanuwanteš ešten* `המשמרת: בִּדְבָרָהּ היו נשמרים מאוד!`
(10.1–10.2); pattern `בדבר X היו נשמרים מאוד!`.

**Words fixed (Hittite → Hebrew, first row):** ÙMMEDA `אֹמֵן` (always vocalized; 8.2 crux; [equivalent] Num 11:12; ≠ UMMIĀNU
`אֻמָּן`); UNŪT ZABAR `חפצי אָרָד`; *lamniya-* `נקוב`; KI.LÁ.BI `משקל`; *mašiwan* `כמה`; *kutru-* `עד`; *iyant-* (of a record)
`עשוי`; *uššaniya-* / *ušniya-* `הציע למכירה` (HL2); *ḫarwaši* `בסתר`; EN.MEŠ URU ḪATTI `אדוני חַתִּי`; *wašiya-* `קנה` (HL1);
GIŠ.ḪUR "record" `שטר` (Gudea's *ĝiš-ḫur* `צורה` is "plan": a split by sense across languages; [equivalent] Jer 32:10);
*šiya-* "seal" `הטביע` (`חתם` kept for the Egyptian loan); *parā ēpp-* "present" `הושיט` (idiom); *ḫappirai-* `מכר` (HL1);
*gulš-* `חקוק` (`חרות` avoided); *munnai-* `הסתיר`; *aška-* "gate" `שער` (*LUGAL-an aška* `שער המלך`); *2-pat akkandu* `שניהם
ימותו` (HL2); *maḫḫan* temporal `כאשר` (8.19, 9.11; "as" stays `כמו ש־`); *šarā uwa-* `עלה`; *genu-* `ברך`; BURU₁₄ `קציר` (HL2);
KASKAL `דרך`; *EGIR-pa tiya-* "back, support" `עמד מאחורי`, *peran arḫa tiya-* "pass, be done" `סר מלפני` (*tiya-* alone stays
`נכנס`: idioms); *uwai-* (mid.) "be pitiable" `כאב (ל־ על)`; EGIR.UD-MI `בעתיד` (`אחרית הימים` kept for Akk. *aḫrât ūmī*);
*idālawatar* `רעה`; *ar-* (mid.) "stand" `עמד`; NINDA `לחם`, *wātar* `מים`; ÚŠ-*tar* in "sell/buy death" `מוות`; *nekuz meḫur*
`זמן הערב`; ***ḫūdāk* `מיד`**; GAM / *katta pai-* `לכו מטה`; *kattan šeš-* `שכב עם` (Laws); *šarā šešuwanzi* `לשכב למעלה` ([equivalent]
1 Sam 3:3); *karš-* (mid.) "be cut off, fail" `ייחתך` (Laws `חתך`); GE₆ `לילה`; *weḫeškattalla-* `סובב` (§7.2), *weḫ(ešk)-*
`סבב` (*weḫtari* `יִסֹּב`); *araḫza* `בחוץ`, *andurza* `בפנים`; Ù = *tešḫa-* `שינה`; SANGA GAL.GAL / TUR.TUR `הכוהנים הגדולים / הקטנים`;
*peran ḫuwai-* "lead" `רץ בראש` (*ḫuwai-* "flee" HL1 `ברח`: split by sense); ŠA KÁ É DINGIR-LIM `של שער בית האל`; *kiš-*
`נעשה` (HL1); *šaklai-* `מנהג`; *tiya-* + inf. `בא ל־`; BÀD `חומה`; *luriyaḫḫ-* `השפיל`, *luri-* `השפלה`;
*nekumant-* `עירום`; *labarna-* `לַבַּרְנָה` (propose an H2 row: `labarn` → `לַבַּרְנָה`, ★ not needed); DINGIR-LÌ-ŠU `הָאֵל שלו`.

**Proposals / for the coordinator:** (1) *DINGIR.MEŠ-aš ZI-ni* with "take payment" (9.14 *ZI-ni ḫappar lē datteni*) is
`על נפש הָאֵלִים` ("at the gods' soul's expense"): `לנפש הָאֵלִים` would read "for the gods' soul"; propose `לנפש` with
verbs of giving and fearing, `על נפש` with *ḫappar dā-*. (2) The H6 rule for `אֵל` also needs `אֶל` vocalized in DINGIR lines
(done: 9.6, 11.14). (3) Traps: `אֹמֵן` (ÙMMEDA; "amen"), `יִסֹּב`. (4) The selftest IN 11.4 ok-line (`נמצא, אל המשמרת ילך!`) differs
from the drafted `למישהו יש – אל המשמרת ילך!` (it still passes); propose replacing it.

**Cruxes:** 8.2 ÙMMEDA-KUNU (syntax); 8.22–8.23 "whoever does *not* sell the king's gift … and likewise sells silver" (CHD
reads it so; the logic is "silver not recorded as a royal gift"); 8.26 *DINGIR-LIM-n=a=šat NU.GÁL [l]ē(?)*; 10.6 (S&B's
"omens" against TLHdig's *warapdu*); 11.3 *tarnešk-* (S&B "admits"); 11.7 *zammurai-*; 11.9 *ḫaliyattallaš=ši* "to his
watchman/post".

### IN part 3 (12.1–16.13)
Drafted 2026-10-26 by the IN translator, rows 12.1–16.13 (73 rows, §§12–16), natural Hebrew order, each row's content in its
row (phrases split across two rows are split the same way: 14.2–14.3, 16.7–16.8, 16.11–16.13). `verify IN` 0 problems,
`check_bible_quotes.py` 0, `selftest` 0 failures; lexmap checked. Rank 3: S&B 1935; CHD L–N (*ninink-*, *mudai-*, *mekki-*,
*meḫur*), P (*paḫš-*, *pai-*, *piyantalli-*), Š (*šalik-*, *šanna-*, *šakk-*, *šarra-*, *šeš-*, *-šši*).

**Formulas fixed for part 4 (byte for byte):**
| Hittite | Hebrew | First row | Later |
|---|---|---|---|
| *EGIR-zian=ma=at išduwari* / *appezzian=ma=aš išduwari* | `ואילו לאחר מכן ייוודע (הדבר)` (`:` or `–` after it as the clause needs) | 14.28, 16.10 | 17.6, 18.14, 19.11 |
| *mān=ma=at UL=ma išduwari* (part 4 only) | **`ואילו אם לא ייוודע`** | – | 17.7, 19.13 |
| F14 with two culprits, no *2-aš* | `וזה להם מות־ראש!`; *2-ušš=a=at akkandu* `וגם שניהם ימותו!` | 14.29 | |
| the address with a class | `ונוסף על כך: אתם, אשר X (אתם) –` (14.1 `… אשר בעלי־התבשיל של כל הָאֵלִים (אתם) –`); with *namma* and a list: `ונוסף על כך – ועוד: אתם, X, Y, …` (12.1) | 14.1, 12.1 | 18.1 `ונוסף על כך: אתם, אשר רועי־הבקר של האל, רועי־הצאן של האל (אתם) –` |
| F12 / F16 with *uddanī* | `בדבר X היו יראים מאוד!` (13.1), `ובדבר X היו נשמרים מאוד ממש, עד מאוד!` (13.11); F12 with abl. `מפני X היו יראים מאוד!` (12.9); with *menaḫḫanda* `כלפי נפשם היו יראים מאוד!` (14.3) | | |
| *ḫuelpi* passage | `הטרי` (15.3); *ḫūdāk mēḫunaš mēḫuni pē ḫarten* `הובילו מיד, בזמנו!` (15.4); *kuitman=at UN-aš nāwi ezzai* `עד שאדם טרם יאכל ממנו` (15.5); `לנפש הָאֵלִים … מיד תגיעו` (15.5–15.6) | 15.3–15.6 | 18.16 (*kī ḫuelpi anzel ZI-ni ḫūdāk …* → `הטרי הזה … לנפשנו מיד …`) |
| *waštul* alone | `וזה לו חטא!` / `וזה לכם חטא!` (*mekki waštul* `חטא גדול`) | 14.20, 15.8, 12.8 | |
| the ordeal / oath (part 4 only) | not in part 3: *BIBRU DINGIR-LIM* `בִּיבְרוּ הָאֵל` (§7.12); I propose *ZI-aš arḫa eku-* "drink to the (god's) soul" `לנפש … תשתו` – to fix in part 4 | | 18.20–18.21, 19 |

**Words fixed (Hittite → Hebrew, first row):** *ḫalluwai-* `קטטה` (as LE *risbatum*; `ריב` kept free); *nink-* `השתכר`;
*ninink-* (mid.) `השתולל` (CHD L–N 4 "behave in a disorderly manner"); É *karimmi-* `בית־הַקָּרִימִּי` (transliterated: `מקדש`
reserved); *zaḫ-* `הלם` (`הכה` reserved); *mudai-* (+za) `הזניח`; *ḫapuš-* `השלים`; *paḫḫur* / IZI `אש` (HL1); GUNNI `אח` (§H3);
*kištanu-* `כיבה`; *šannapi šannapi* `פה ושם`; *ḫatant-* `יבש`; *imma* `אכן` / `אמנם`; *tinumar* `היתר(?)` (crux); EN.TU₇
`בעל־התבשיל`; SAGI.A `מַשְׁקֶה` ([cognate via the Akkadogram] *šāqû*; Gen 40:1); LÚ GIŠ.BANŠUR `איש־השולחן`; MUḪALDIM `מבשל`
(**split**: Akk. *nuḫatimmu* is `אופה` in the other corpora; here NINDA.DÙ.DÙ `אופה` stands beside it); KÚRUN.NA
`מבשל־השכר`; *menaḫḫanda* `כלפי` / `לקראת`; *naḫšaratt-* `יראה` (licensed); *tiyan ḫark-* `שׂם` (imp. `שׂימו`); *weš-* `לבש`;
GIR₄ `חרס`; *šalik-* `יִגַּע` (HL2); *peššiya-* `השליך` (HL1); *paprant-* `טמא`; *zakkar* `צואה`, *dūr* (Luw.) `שתן` (Mal 2:3);
*aššanu-* `הסדיר`; *lukkatt-* `שחר`; *tamašš-* `לחץ`; *mazza-* `העז`; *ara-* `חבר` (HL); *šekkant-* ZI `בנפש יודעת` (=
deliberately); *parā dai-* "postpone" `דחה` (idiom); *šaknuwant-* `מלוכלך` (≠ *paprant-* `טמא`); *šakk-* `ידע` (HL2);
*šanna-* `העלים` (≠ *munnai-* `הסתיר`); LÚ APIN.LÁ (Akk. *ikkaru*) **`אִכָּר`** ([cognate loan via the Sumerogram]; the
selftest's 15.3 err-line already uses `האיכרים`); *ariya-* "inquire by oracle" `שאל באות` (*punušš-* alone `שאל`);
*tapariya-* `גזר`; *zankilai-* `קנס`; *waršanu-* `הרגיע`; *ištantanu-* `איחר` ([equivalent] Exod 22:28); *uiya-* "send (a
man)" `שיגר` (`שלח` = *tarna-*); *takšan šarran* (noun) "half" `חצי` (16.7–16.8; `מחצה` fails the `מחץ` gate; part 1's 5.7–5.8
`לשניים חלק` keeps the sense "share by share"); *uwa-* + verb "go and" `באו ו־`; *išḫuwai-* "pour, heap (grain)" `ערם`
(`שפך` = *laḫu-*); ÉSAG `אסם` (HL1); *miyant-* `מניב` (HL2); DINGIR-LÌ-ŠU `הָאֵל שלו` (as 11.10).

**For the coordinator:** (1) KBo 68.18 5′ has *naḫḫanteš* (F12) where A/C have *paḫḫaššanuwanteš* (F16) at 13.11 – noted in
נוסחים. (2) Propose traps: `מַשְׁקֶה` (SAGI.A; Gilgameš's `מַשְׁקֶה` is *mašqû* "watering place"), `אִכָּר` (vocalize the first
occurrence; plene `איכר` is fine). (3) The `מחץ` gate catches `מחצה` "half": harmless (I used `חצי`), but worth knowing.

**Cruxes:** 12.2 the unread subject (*…tuḫmiyanza?*); 13.5–13.6 who extinguishes; 13.7–13.8 read as a rhetorical question
(S&B: a statement); 13.10 *tinumar*; 14.21 *MAḪRI-ŠU LÚ GAL-ŠU EGIR-an tamašzi*; 14.24 *parā dai-* "postpone" (CHD);
16.11 the sign 〈〈TAR?〉〉.

### IN part 4 (17.1–col4)

**Formulas fixed here (for §7.14):** (1) The oath, fixed at §18 and used again in 17.8–17.9:
`ואם טהורים (אתם) – אֵל הַמָּגֵן שלכם! ואילו אם טמאים (אתם) –` (*mān parkuweš … šumel ᵈKAL-KUNU, takku papranteš=ma*).
In 17.8–17.9 it is verbal (*parkuešteni / paprešteni*): `אם תיטהרו – אֵל הַמָּגֵן שלכם!` … `ואילו אם תיטמאו`.
(2) The ordeal: `את בִּיבְרוּ הָאֵל של הנפש` (*BIBRU DINGIR-LIM ZI-aš/ZI-TI*), with `עד תום תשתו` in 18.19–18.20 and
`מעל הַכַּן ייקחו מטה` in 19.14–19.15. (3) The confession (19.16–19.20) repeats the case (19.7–19.10) in the
1st person, with the same verbs (`המיר`, `מסחר … לקח`, `ובמקומו כחוש שלח`, *uššaniya-* `הציע למכירה`).
(4) The colophon follows HL1: `לוח ראשון: …` / `החובות – תַּם.` The §7.12–§7.14 formulas are copied byte for byte
(F13, *išduwari*, the address, and the *ḫuelpi* passage in 18.5–18.7; F14 does not occur in this part).

**New words:** *karšattar* `חֲתָךְ` (vocalized), a portion "cut" from the herd (from *karš-* `חתך`); *ištanana-*
`כַּן` (vocalized; `מזבח` is reserved, H3); GU₄.NITA `שור זכר`; *parš-* "escape" `נמלט`; *šakuwantariyanu-* `ביטל`;
*šapp-* `קילף` (said of milk); *ḫaššatar* `המלטה`; *unna-* `נהג` (as HL1 407); EZEN₄ GA `חג החָלָב`.

**Gate/trap proposals:** (1) Add GUL-aḫ- (the logogram of *walḫ-*) to the `מחץ` licence; 17.5 uses an escape for now.
(2) A trap `חָלָב` "milk", against `חֵלֶב` "fat" (18.8–18.9). (3) lexmap lists *iya-* (mid.) "go" (19.3 `יתלוו`) under
*iya-* "make". It needs its own lemma label, like the *pai-* "go"/"give" pair (17.8 `תלכו`).

**Cruxes:** 17.3 *taišteni* (S&B: "conceal"; I translate literally `תָּשִׂימוּ`, "put before"); 18.3–18.4
UZU *ŠALĪTU* `שִׁלְיוֹת(?)` and *ḪAKKURRATU* (transliterated); 18.9 *šapp-* of milk (skimming?); 18.19 *zammurai-* (as in 11.7);
18.20 / 19.14 ZI-aš / ZI-TI "of the soul" (the ordeal vessel); 19.1 *karšattar*.

### IN review (a) fidelity
Review pass (a), 2026-10-26: every entry (1.1–col4) read against the composite line, the פירוק and the `data` words; checked
every negation, prohibitive, condition, question, tense/mood, the brackets (TLHdig's `[ ]`, `?`, the borrowed rows 6.8–7.10
from C and 15.1 from B on their own brackets) and the row integrity. **48 `>` lines changed** (the פירוק aligned in each);
no fixed rendering changed; `verify IN --strict` 0 problems, `check_bible_quotes.py` 0, `selftest` 0 failures. No negation,
prohibitive or question was found reversed, and no Sturtevant & Bechtel 1935 reading against the composite (6.11's *lē*,
7.10's statement, 13.7–13.8 are read as the composite and the CHD have them, and say so in the apparatus).

Kinds of error: brackets not following the composite (a restored stem left unbracketed, a preserved word inside the
brackets, a `?` of the composite dropped: 21 lines); words added outside `( )` (a particle the Hittite lacks: "from",
"thus", "if", "therefore", "because", an object or subject pronoun: 9 lines); row integrity (a word of one row rendered
in the next, or twice: 8.2–8.3, 12.2–12.3, 12.5–12.6, 14.15, 14.18, 19.9–19.10, 19.14–19.15); one grammar error (2.5: an
enclitic read as subject of a transitive verb); one tense (12.4); four lacuna marks (2.18, 8.26, 10.5, 15.2).

**Lines changed** (label: before → after – why):
- 1.12: `ומן ההי[כל?]` → `ו(מן) ההי[כל?]` – the case of É.GAL is broken; "from" is ours (only =ašta).
- 2.5: `הם, אלה, יעשו אותם` → `אותם אלה יעשו` – *n=aš apūš eššandu*: =aš is the acc. "them" (the loaves); an enclitic subject does not stand with a transitive verb; *apūš* is the subject (פירוק fixed).
- 2.6: `עושים אותם` → `עושים (אותם)` – no object pronoun with *eššanzi*; =at is the house, subject of 2.7 *ēšdu* (פירוק fixed).
- 2.13: `ונפשו בו דבקה` → `ו(נפשו) בו דבקה` – the text has only =at "it"; "his mind" is the interpretation (as the note says).
- 2.15: `עבדו` → `עבדו?` – the composite has ⸢ARAD-ŠU?⸣.
- 2.18: `– …[…]` → `– … …` – *x x-pát?*: two unread signs, nothing broken.
- 4.4: `חגי הכוהנים הקדושים` → `חגי הכוהנים? הקדושים` – the plural rests on TLHdig's queried *{L[Ú.MEŠ}?]*.
- 6.14: `[והוא – אם (מבני) העלייה אֶל] בית הָאֵל למעלה (הוא)` → `[והוא – אם אֶל] בית הָאֵל (מבני) העלייה למעלה (הוא)` – *pāuwaš* is preserved: it stood inside the restoration brackets.
- 6.18: `[ואילו מי ש]יוליך` → `ואילו [מי ש]יוליך` – =ma is preserved on *pēḫutezzi=ma*; only *kuiš=an* is restored.
- 7.2: `[ואילו אתם – לעצמכם]` → `[ואילו אתם – לעצמכם?]` – the composite restores *=za?* with a query.
- 7.3: `אשר *פירקתם* לעצמכם` → `[אשר] *פירקתם* [לעצמכם]` – *šumaš=ma=az kuin* is wholly restored.
- 7.5: `או שאותו אל המכלאה` → `[או שאותו] אל המכלאה` – *[našma=an=za=an=kan* is restored.
- 7.9: `עליו לעצמכם תיקחו` → `עליו [לעצמכם] תיקחו` – *nu=za=kan* is restored.
- 7.14: `את האדם ראה` → `את האדם [ראה]` – *a-ú* is restored (from C, B).
- 8.2–8.3 (row integrity): `ולכם, מן הכסף, הזהב,` → `ולכם, של הָאֵלִים – מן הכסף, הזהב,`; `וחפצי הָאָרָד של הָאֵלִים – אין!` → `וחפצי הָאָרָד – אין!` – DINGIR.MEŠ-aš is in 8.2 (A ii 26′).
- 8.11: `וכך עשוי יהיה ממש!` → `ו(כך) עשוי יהיה ממש!` – *n=at iyan=pat ēšdu* has no "thus" (*kiššan* comes only in the next clause).
- 8.26: `אין … [אַל?]` → `אין, [אַל?]` – nothing is lost or unread between NU.GÁL and *[l]ē(?)*; the line's incompleteness is said in the note.
- 9.15: `ואם על אדם` → `ו(אם) על אדם` – no *mān*: *nu=kan šumaš UN-aš uwaittari*; the condition is implied.
- 9.18: `ולכן לנפש` → `ו(לכן) לנפש` – *n=ašta* is a plain connective; "therefore" is ours.
- 10.5: `[…] –` → `[…]… –` – *[ ]x-zi*: the verb's end is preserved (as 2.5 `[…]…ים`).
- 12.2–12.3: `… מישהו(?)` (12.2) → `…(?)`; `בבית־הַקָּרִימִּי – ישתכר` → `בבית־הַקָּרִימִּי – מישהו ישתכר` (12.3) – row integrity: *kuiški* is in 12.3 (A iii 37); the `?` belongs to the unread word of 12.2.
- 12.4: `והולם את החג` → `ויהלום את החג` – pres. *zaḫzi* in the protasis: Hebrew future, like `ישתולל`, `ויעשה` (brief §2).
- 12.5–12.6 (row integrity): `לחם, שכר –` → `לחם, שכר – למעלה`; `שׂוּם למעלה – יעשה!` → `שׂוּם – יעשה!` – *šarā* ends 12.5 (A iii 39), *tiyandan* opens 12.6.
- 12.9: `ואת החג ישלים` → `ואת החג? ישלים` – the composite has ⸢EZEN₄-an?⸣.
- 13.2: `בתוך בית הָאֵל` → `בתוך? בית הָאֵל` – ⸢ŠÀ?⸣.
- 13.7: `ואילו בית הָאֵל` → `ואילו? בית הָאֵל` – ⸢-ma?⸣ (the `?` is on the particle).
- 14.8: `טהורים לבשו!` → `טהורים [לבשו]!` – *[ú-e-eš]-tén*: the stem is restored.
- 14.15: `וייתן לָאֵל לאכול` → `ולָאֵל לאכול` – row integrity: *pāi* "gives" is in 14.16 (`ולשתות ייתן`); 14.15 rendered it twice.
- 14.18: `לאכילת הָאֵלִים` → `(לאכילת) הָאֵלִים` – "eating" (*adannaš*) is in 14.19; here only DINGIR.MEŠ-aš.
- 14.19: `בזמן האכילה` → `בזמן [האכילה]` – *[a-da-an-n]a-aš*: the stem is restored.
- 14.20: `וזה לו חטא!` → `[וזה] לו חטא!` – *[na-at-š]i*: =at is restored (F13 otherwise unchanged).
- 14.24: `ידחה אותו(?)` → `ידחה(?) (אותו)` – no object pronoun in *parā dāi*; the note says the object is the bath.
- 14.28: `ויעלים אותו` → `ויעלים [אותו]` – *[na-an* is restored.
- 14.29: `וזה להם מות־ראש!` → `וזה [להם] מות־ראש!` – *[nu-uš-ma-ša-a]t*: =šmaš is restored.
- 15.2: `אם […] משהו` → `אם […]… משהו` – *ma-a-[an ]x*: a lost stretch, then an unread sign.
- 15.3: `או כל מה שהוא` → `או [כל מה] שהוא` – *[ku-it im-ma] ku-it*: the first *kuit imma* is restored.
- 15.5: `עד שאדם טרם יאכל ממנו` → `עד ש[אדם] טרם יאכל ממנו` – *[UN-a]š* is restored (the fixed *ḫuelpi* string otherwise unchanged; 18.7 follows its own brackets).
- 16.11: `מן הָאֵל` → `מן הָאֵל(?)` – the composite reads *DINGIR-LIM-ni(?)* (over an erasure).
- 17.1: `אשר בידיכם` → `אשר [בידיכם]` – *[ḫar-t]e-ni*: the stem is restored.
- 18.3: `ואתם לו` → `ו(אתם) לו` – no pronoun in *nu=šši*; "you" is the person of 18.4's *pē ḫarteni*.
- 19.9–19.10 (row integrity): `– ואותו` → `– ואותו עד תום`; `יאכלו עד תום,` → `יאכלו,` – *arḫa* ends 19.9 (A iv 64).
- 19.12: `כי את המזון` → `(כי) את המזון` – the Hittite has no "because" (*DINGIR.MEŠ-aš=kan ZI-aš=a=aš … dāer*).
- 19.14–19.15 (row integrity): `מעל הַכַּן` → `מעל הַכַּן מטה`; `ייקחו מטה,` → `ייקחו,` – GAM ends 19.14 (A iv 69); the ordeal's fixed part (`את בִּיבְרוּ הָאֵל של הנפש`) unchanged.

**Left for the coordinator (not changed):**
1. **lē + iterative** (18.4 `אַל תאחרו אותם תמיד!`, 19.6 `אַל ימירו אותו תמיד!`): Hebrew "do not *always* delay" weakens a
   general prohibition ("never"); 14.7 (`אַל יחצה`) drops the `תמיד` instead. Propose one rule for *lē* + *-šk-* (drop `תמיד`, or
   `לעולם אַל`), for pass (b).
2. **15.6** *arnuškitten* (imp. 2pl) is `מיד תגיעו תמיד!` (future with `!`) in the fixed *ḫuelpi* string: the brief maps the
   imperative to the Hebrew imperative (`הגיעו`). A fixed rendering: pass (b).
3. **Connectives**: *nu* rendered `ואילו` (11.8), `ואז` (7.9, 18.19), `אז` (18.21, 19.21) where the brief says `ו־` (`ואז` only where
   the sequence is the point); left as defensible (apodosis), for pass (c).
4. **Restored connectives and =za**: a restored *nu* alone (7.4, 7.18 `[nu-za]` in F12) is not bracketed as `[ו]`: a
   one-letter connective, and 7.18 is the fixed F12 string. Restored enclitic pronouns are bracketed where a Hebrew word
   renders them (6.18, 14.20, 14.28, 14.29).
5. **Scribal omissions 〈 〉** (5.5, 8.25, 10.12, 11.1, 14.17, 16.10, 19.14) are all single syllables inside a word: the
   Hebrew word is not marked `⟨ ⟩` (the פירוק says "the scribe omitted …"); `⟨ ⟩` would be for a whole omitted word (none).
6. **19.14–19.15**: the ordeal's verb string recorded in "IN part 4" (`מעל הַכַּן ייקחו מטה`) is now `מעל הַכַּן מטה` / `ייקחו,`
   (row integrity); the fixed part `את בִּיבְרוּ הָאֵל של הנפש` is unchanged.

### IN review (b) consistency
Review pass (b), 2026-10-26: every formula and repeated passage compared across its occurrences (F12 ×6, F13 ×4, F14 ×4,
F16 ×2, the address ×6, *waḫnumar* ×2, *DINGIR.MEŠ-aš ZI-ni* ×7, *mēḫunaš mēḫuni* ×3, *išduwari* ×8, the *ḫuelpi*
passages §15/§18, the oath §17/§18, the ordeal §18/§19, §19's case ↔ confession), every IN lemma of `lexmap` with more than
one Hebrew against IN, HL1, HL2, HLPT, the names (§H2) and traps (§H6), every הקבלה tag. **24 `>` lines changed** (the
פירוק, and the הערות where they quoted the line, aligned); `verify IN HL1 HL2 HLPT --strict` 0 problems (the one listed
repeated-line difference is HL1 180/186, accepted 2026-10-25), `selftest` 0 failures, `check_bible_quotes.py` 0. Found
consistent and left: F12/F13/F14/F16 wording, the address, *waḫnumar*, `לנפש הָאֵלִים` / `על נפש הָאֵלִים` (9.14),
`בזמנו`, the oath (17.8–17.9 verb vs 18.20–18.21 adjective, as the Hittite), the ordeal string, *ḫūdāk* `מיד`, *kiššan anda
peda-* `כך פנימה נשא`, §19's case and confession (apart from 19.9 below).

**Lines changed** (label: before → after – why):
- 18.4: `אַל תאחרו אותם תמיד!` → `אַל תאחרו אותם!` – ruling (i): *lē* + iterative = `אַל` + future (פירוק notes the iterative).
- 19.6: `אַל ימירו אותו תמיד!` → `אַל ימירו אותו!` – ruling (i). (14.7 `אַל יחצה` already so.) *lē uškanzi* (15.6–15.7, 18.6) keeps `אַל יהיו רואים`: *uš-k-* is the ordinary stem of *au-*, fixed `רואים` (§7.2: the homograph `יראו` is not written).
- 15.6: `מיד תגיעו תמיד! ולקראתו הָאֵלִים אַל` → `מיד הַגִּיעוּ תמיד! ואותו הָאֵלִים – לקראתו אַל` – ruling (ii): imp. *arnuškitten* = Hebrew imperative (as 18.7 `הביאו`; `תמיד` kept: a positive iterative, as 19.22 `רדוף תמיד`); =at … *menaḫḫanda* now as §18's copy (18.5–18.6 `ואותם הָאֵלִים – לקראתם`).
- 19.11: `וזה להם חטא־ראש,` → `וזה להם חטא־ראש!` – F13 punctuation as 10.21, 17.9, 18.13.
- 16.11: `וזה לכם חטא;` → `וזה לכם חטא!` – as 14.20, 15.8.
- 18.13: `ייוודע (הדבר) – וזה` → `ייוודע (הדבר): וזה` – the *išduwari* formula as 14.28, 16.10, 17.6.
- 17.7: `ואילו אם לא ייוודע,` → `ואילו אם לא ייוודע –` – the negative formula as 18.13–18.14, 19.13.
- 9.12: `לפי נפש אדם` → `לנפש אדם` – *UN-aš ZI-ni* as 9.20 (`לנפש אדם`) and *DINGIR.MEŠ-aš ZI-ni* `לנפש הָאֵלִים` (9.18).
- 7.17: `ואילו כאשר תתפוס – באיזה זמן שהוא –` → `ואילו באיזה זמן שתתפוס –`; 19.13: `באיזה זמן שהוא` → `באיזה זמן` (+ 19.14 `שיגיעו`) – *kuedani mēḫuni* = `באיזה זמן ש־` + verb, as 18.14 (`כאשר` was an added *maḫḫan*; `שהוא … שיגיעו` doubled the relative).
- 7.13: `דבר [יאמר …] לא יעשה דבר!` → `מאומה [יאמר …] לא יעשה מאומה!` (7.12, 7.16 notes aligned) – *UL kuitki* `לא … מאומה` as 2.19; `דבר` is *memiya-* / *uttar*.
- 7.15: `כמו שהיא עושה תמיד` → `כמו שהיא עושה` – *ešša-* is `עשה` without `תמיד` everywhere else (2.1, 2.5, 4.9, 9.2, 9.4).
- 8.23: `ובאותו אופן ממש` → `וכך ממש –` – HL1 *QĀTAMMA=pat* `כך ממש` (§7.4; §7.8 ruling `כך`); `באותה דרך` is *apeniššan*.
- 12.8: `חטא גדול` → `חטא רב` – *mekki-* `רב` (HL1 §7.4); `גדול` is GAL (10.8, 10.17).
- 16.10: `אמנם` → `אכן` – *imma* `אכן` (§7.14, 13.7).
- 10.10: `כל אחד ואחד` → `אחד אחד` – *1-aš 1-aš*; `כל אחד ואחד` is HL1's *ḫumantiya=pat* (§7.5).
- 8.2: `בידיכם הוא` → `אתם מחזיקים`; 14.10: `אשר בידיכם` → `אשר (אתם) מחזיקים`; 17.1: `אשר [בידיכם]` → `אשר (אתם) [מחזיקים]` – *ḫar(k)-* "hold" = `החזיק` (HL1 198, 209, 256 …, HLPT, HL2 193); `יד` is ŠU / QĀTU's.
- 19.9: `לעצמו ייקח` → `ייקח לעצמו` – §19's case in the confession's order (19.19 `ומסחר לקחנו לנו`).
- 7.14: `את מזון־[נפשך]` → `את מזון [נפשך]` – as 19.21 `מזון נפשך`.
- 11.2: `משוח` → `מְשׁוּחַ`; 12.1: `המשוחים` → `המְשׁוּחִים` – GUDU₁₂ always vocalized (§7.2).
- 11.13: `הַלַּבַרְנָה` → `הַלַּבַּרְנָה` – the §H2 vocalization (`לַבַּרְנָה`).
- 18.7 הקבלה (not a `>` line): the animal firstlings are Exod 22:29 `כֵּן תַּעֲשֶׂה לְשֹׁרְךָ לְצֹאנֶךָ`, now quoted (the note quoted 22:28 "the firstborn of your sons" for them).

**For the coordinator:**
1. *menaḫḫanda*: `כלפי` (14.3, §7.14) but `לקראתו` / `לקראתם` with *uškanzi* (15.6, 18.6: "look out for, wait for"). Left: propose a split by sense (`לקראת` with verbs of seeing), since `כלפיו אַל יהיו רואים` obscures the waiting.
2. *kuitman*: HL1 `עד אשר` (§7.3) vs IN `עד ש־` (10.6, 14.17, 15.5, 18.6; §7.14 fixed `עד שאדם טרם יאכל ממנו`). The same particle; propose accepting `ש־` / `אשר` as one rendering (or align IN to `עד אשר`). 9.10 *kuitman* "meanwhile" `קודם כול` – a sense of its own.
3. 14.2–14.3 F12: *DINGIR.MEŠ-aš | ZI-ni menaḫḫanda* split over the rows, rendered `הָאֵלִים: / כלפי נפשם` (left dislocation; the fixed noun phrase `נפש הָאֵלִים` is not written whole). Left as the row rule requires; flag if the phrase must appear whole.
4. Positive iteratives are rendered three ways (`תמיד`: 6.15, 10.10, 11.3, 15.6–15.7, 19.22; `היו` + participle: 6.10, 6.16, 10.12–10.16, 17.4; nothing: 1.8, 2.11–2.12, 4.10–4.11, 9.16, 18.9). Not changed (no ruling); a rule for pass (c) or the lead.
5. Cross-corpus (for `renderings.md`, not edited): §7.2 could add *ḫar(k)-* "hold" = `החזיק` in IN too; *imma* `אכן` (both 13.7, 16.10); *kuedani mēḫuni* `באיזה זמן ש־`; *mekki-* adj. `רב` / adv. `מאוד`. The F13 regex is satisfied by `חטא־ראש` only; the punctuation after F13/F14 (`!`) is not machine-checked.

### IN review (c) Hebrew
Review pass (c), 2026-10-26: every `>` line read aloud § by § (1.1–col4) for register, word order, connectives, iteratives,
calques, gates and spelling. **59 `>` lines changed** (the פירוק aligned where a gloss changed; one הערה fixed), no
rendering of a word changed, no content moved between rows, no fixed formula touched (F12, F13, F14, F16, the address,
`הֲפִיכָה בחזרה – אַל תהיה …`, `לנפש הָאֵלִים`, `בזמנו`, the *išduwari* lines, the *ḫuelpi* passages, the oath, the ordeal).
`verify IN --strict` 0 problems, `selftest` 0 failures, `check_bible_quotes.py` 0 (annotated file and intro). No vav-consecutive,
no unintended calque and no new reserved or gated word was found; the text stays unvocalized and plene (vocalized: names, the
H6 traps, and imperatives / forms that read otherwise: `אִמְרוּ`, `אִכְלוּ`, `הַגִּיעוּ`, `תָּשִׂימוּ`, `שׂוּם` …).

**1. Word order (natural Hebrew order; only the order of the words in the row changed)** – before → after:
- 1.9 `ואותו למעלה שׂוּם` → `ואותו שׂוּם למעלה` (as 4.9, 12.7 `שׂוּם למעלה`).
- 2.1 `אשר את הלחמים העבים היומיים עושים` → `אשר עושים את הלחמים העבים היומיים`.
- 2.3 `וגם בגדים טהורים לבושים יהיו.` → `וגם לבושים יהיו בגדים טהורים.` (predicate-first `טהורים יהיו`, `לקוחים יהיו` kept: natural).
- 2.5 `אותם אלה יעשו` → `אלה יעשו אותם`.
- 2.9 `עבדו, כאשר לפני אדוניו עומד,` → `כאשר עבדו עומד לפני אדוניו,`.
- 2.10 `וגם (בגדים) טהורים לבוש הוא;` → `וגם לבוש הוא (בגדים) טהורים;`.
- 2.11 `או לשתות נותן לו;` → `או נותן לו לשתות;`.
- 2.13 `בנפשו רפוי הלאה, ו(נפשו) בו דבקה;` → `רפוי הלאה בנפשו, ו(נפשו) דבקה בו;`.
- 2.16 `בין שאותו הורגים` → `בין שהורגים אותו`.
- 3.1 `אם מישהו את נפש הָאֵל יַזְעִים –` → `אם מישהו יַזְעִים את נפש הָאֵל –`.
- 3.2 `האם הָאֵל אותו באותו (אדם) עצמו, באחד, ידרוש?` → `האם הָאֵל ידרוש אותו באותו (אדם) עצמו, באחד?`.
- 4.11 `מסחר לוקחים – ואילו לנפש הָאֵלִים אותם תחסירו –` → `לוקחים מסחר – ואילו לנפש הָאֵלִים תחסירו אותם –`.
- 5.1 `או אם את השׂוּמִים למעלה אי־פעם תיקחו,` → `או אם אי־פעם תיקחו את השׂוּמִים למעלה,`.
- 5.2–5.3 `ואותם לנפש הָאֵלִים קדימה לא תַּגִּיעוּ, ולכם אותם הלאה` / `אל בתיכם תובילו, …` → `ולא תַּגִּיעוּ אותם קדימה לנפש הָאֵלִים, ואותם – לכם – הלאה` / `תובילו אל בתיכם, …` (*arḫa* stays in 5.2, *pē ḫarteni* in 5.3).
- 5.6 `ואילו מנפש הָאֵל אותם תיקחו,` → `ואילו מנפש הָאֵל תיקחו אותם,` (the =ma topic stays first).
- 5.7 `ואותם לו קדימה ממש לא תַּגִּיעוּ,` → `ולא תַּגִּיעוּ אותם לו קדימה ממש,`.
- 5.9 `בראש – למטה – מונח יהיה! ואותם אַל תחלקו!` → `יהיה מונח בראש, למטה! ואַל תחלקו אותם!`.
- 6.1 `אֶל בית הָאֵל הכול למעלה הובילו!` → `הובילו הכול למעלה אֶל בית הָאֵל!`.
- 6.3 `מלמעלה הלאה אף אחד אַל ישפוך!` → `אף אחד אַל ישפוך מלמעלה הלאה!` (as 6.2 `אף אחד אַל יניח`).
- 6.4 `את הכול ממש לָאֵל מַנּוּ!` → `מַנּוּ לָאֵל את הכול ממש!`.
- 6.13 `אם אורח אל מישהו יבוא` → `אם אורח יבוא אל מישהו`.
- 7.1 `אשר אֶל הָאֵל לאכול נִנְהָג,` → `אשר נִנְהָג אֶל הָאֵל לאכול,`.
- 7.2 `בין שור מפוטם או שה מפוטם הלאה תתפסו,` → `תתפסו הלאה בין שור מפוטם או שה מפוטם,`.
- 7.5 `[או שאותו] אל המכלאה פנימה תשלחו,` → `[או שאותו] תשלחו פנימה אל המכלאה,`; 7.6 `או שאת השה אל הדיר פנימה תשלחו,` → `או שאת השה תשלחו פנימה אל הדיר,`.
- 7.9 `ואת המחיר עליו [לעצמכם] תיקחו – ואז מן הָאֵל,` → `ותיקחו [לעצמכם] את המחיר עליו – ומן הָאֵל,` (and `ואז` → `ו־`, §3 below).
- 7.11 `או שאותו לאחר תיתנו,` → `או שאותו תיתנו לאחר,`.
- 9.18 `לרעה ממש זה יעמוד.` → `זה יעמוד לרעה ממש.`.
- 10.7 `והוא – לבית הָאֵל לשכב (שם) מיד יעלה!` → `והוא – מיד יעלה לבית הָאֵל לשכב (שם)!`.
- 10.11 `מלשכב למעלה אַל ייחתך כלל!` → `אַל ייחתך כלל מלשכב למעלה!`; 11.10 `– מלשכב למעלה אַל ייחתך!` → `– אַל ייחתך מלשכב למעלה!`.
- 10.18 `רץ בראש יהיה!` → `יהיה רץ בראש!`.
- 11.8 `ואותו (אנשי) החומה החיצונה לא רואים, ואילו אנשי בית הָאֵל ההם` → `ו(אנשי) החומה החיצונה לא רואים אותו, ואנשי בית הָאֵל ההם` (and `ואילו` → `ו־`, §3).
- 11.14 `אֶל בית הָאֵל שלו יישא,` → `יישא אֶל בית הָאֵל שלו,`.
- 14.13 `לאכול ייתן –` → `ייתן לאכול –`; 14.14 `לאכול ולשתות ייתנו! ואם מישהו עם אשה ישכב –` → `ייתנו לאכול ולשתות! ואם מישהו ישכב עם אשה –`; 14.20 `ואילו אם מישהו עם אשה ישכב,` → `ואילו אם מישהו ישכב עם אשה,` (as 10.5 `ישכב עם אשה`).
- 15.10 `וגם שור ועשר צאן יקנסו מכם,` → `וגם יקנסו מכם שור ועשר צאן,`.
- 16.1 `אם תבואה תעבדו,` → `אם תעבדו תבואה,`; 16.2–16.3 `לעבודת הזרע אדם אחריכם לא ישגר – לכם אותו` / `לעבוד ימנה –` → `לא ישגר אדם אחריכם לעבודת הזרע – אותו לכם` / `ימנה לעבוד –`; 16.4 `"מעט" תאמרו עליו;` → `תאמרו עליו "מעט";`; 16.7 `או כאשר את התבואה תמלאו –` → `או כאשר תמלאו את התבואה –`; 16.13 `אל האסמים יערמו.` → `יערמו אל האסמים.`.
- 17.3 `ואילו אתם לָאֵלִים תָּשִׂימוּ (לאמור):` → `ואילו אתם תָּשִׂימוּ לָאֵלִים (לאמור):`; 17.8 `אֶל הָאֵל תלכו:` → `תלכו אֶל הָאֵל:` (the oath's apodosis unchanged).
- 18.9 `כאשר את החָלָב מקלפים –` → `כאשר מקלפים את החָלָב –`.
- 19.1 `אם אי־פעם את החֲתָךְ תחתכו,` → `אם אי־פעם תחתכו את החֲתָךְ,`; 19.2 `ואותו אֶל הָאֵלִים, אדוניכם, ינהגו –` → `וינהגו אותו אֶל הָאֵלִים, אדוניכם –`; 19.12 `(כי) את המזון המעודן של נפש הָאֵלִים לקחו!` → `(כי) לקחו את המזון המעודן של נפש הָאֵלִים!`.
- 19.22 `עם נשינו ובנינו רדוף תמיד!"` → `עם נשינו ובנינו – רדוף!"` (the dash marks the verb's object, `אותנו`, at the end of 19.21; `תמיד`: §2).

**Left verb-final on purpose:** rows where the verb is in the next row (the row rule: 2.15–2.16, 3.3–3.5, 6.6–6.7, 7.3–7.4,
7.7–7.9, 8.6–8.7, 14.15–14.16, 18.3–18.4, 18.21–18.22 …); contrastive or chiastic fronting the Hittite has (9.2–9.4 the
festivals in the wrong season, 9.19 `ותאכלו לחם, ומים תשתו`, 9.21, 16.6, 16.8, 16.10–16.11); predicate-first `טהורים יהיו`,
`לקוחים יהיו` (natural literary Hebrew); the fixed `כך פנימה תישאו` (7.12, 18.15, 19.15); **7.10** `מן הפה החוצה תמשכו`
(reverted after a draft change: the confession repeats it in the same order, 19.16–19.17 `מן הפה / החוצה אנחנו משכנו`, and
the 19.16 note says so); 18.10–18.12 and 18.16–18.18 (the §18 case and its oath speech in the same order); 19.8–19.10 ↔
19.18–19.20 (case ↔ confession, review (b)).

**2. Positive iteratives** (the review ruling: `תמיד` only where the text stresses repetition; make it even):
- 6.15 `[מפתן] חוצה תמיד` → `[מפתן] חוצה`; 10.10 `את המפתן חוצה תמיד` → `את המפתן חוצה` – *šarr(e)škezzi / šarraškitta*: the
  habitual of those who have access (a Hebrew participle already says it).
- 15.7 `ואם אותו תאחרו תמיד,` → `ואם תאחרו אותו,` – as 18.4 `אַל תאחרו אותם!` (also word order).
- 19.22 `רדוף תמיד!` → `רדוף!` – nothing in the curse stresses repetition.
- **Kept `תמיד`:** 15.6 `מיד הַגִּיעוּ תמיד!` (the ruling's own example) and **11.3** `שולח תמיד – ישלח תמיד!` (the custom
  is the point: the same verb twice, iterative both times, with =pat). The rest is now even: `היו` / `יהיה` + participle for
  the iterative imperatives of duration (6.10, 6.16, 10.12–10.16), a plain verb or participle elsewhere (1.8, 2.11–2.12,
  4.10–4.11, 9.16, 17.4, 18.9).

**3. *nu* rendered `ואילו` / `ואז` / `אז`** (`ו־` unless *-ma* or a real sequence):
- 7.9 `ואז מן הָאֵל` → `ומן הָאֵל` – *n=ašta*: no sequence, a consequence.
- 11.8 `ואילו אנשי בית הָאֵל ההם` → `ואנשי בית הָאֵל ההם` – plain *nu*, no =ma; the contrast is carried by `החיצונה` / `בפנים`.
- 18.19 `– ואז את בִּיבְרוּ הָאֵל` → `– ואת בִּיבְרוּ הָאֵל` – *n=ašta*; the ordeal string itself unchanged.
- 18.21 `– אז עם` → `– ועם`; 19.21 `אז אתה, הָאֵל,` → `ואתה, הָאֵל,` – *nu* opening the apodosis: `ו־`, as 17.9 `– וזה לכם
  חטא־ראש!` (the dash already marks the apodosis).
- **Kept:** 7.17 `ואז עוד הלאה / לא תשלח!` – a temporal apodosis (*kuedani mēḫuni … nu*: "at whatever time it seizes – then"),
  and `ועוד` would read as *namma*'s fixed `ועוד` (the § connective).

**4. Other Hebrew:** 2.19 `ואותו – לא עושים לו מאומה.` → `ולו – לא עושים מאומה.` (the pronoun was doubled; *n=an* "him" is
`לו` with "do"; פירוק aligned).

**פירוק / הערות aligned:** 2.19, 6.15, 7.9, 10.10, 11.3 (why `תמיד` stays), 11.8, 15.7, 18.19, 18.21, 19.21, 19.22; the 19.16
note's stale quote of 19.9 (`לעצמו ייקח` → `ייקח לעצמו`, the line changed in review (b)).

**The introduction** `translation--intro-IN.rtl.md` (new; HL2's form, no paragraph opens with bold): what the text is and its
name in the colophon, date and place, contents, the manuscripts with their sigla, our composite and its method, the § numbering
and the headings, the brackets (with the review rulings: a restored lone *nu* and one-syllable scribal omissions not marked),
the fixed words, the Bible (Num 18:7, Lev 22:10, 1 Sam 2:16 – printed first; `check_bible_quotes.py` 0), the rank-3/5 sources
(S&B 1935, the CHD, after drafting), vocalization. **Gates on the intro** (§H3 / §H4 regexes run by script on the unvocalized,
bracket-free text): §H3 hits only inside quotations (`יומת`, `זר`, `והזר` in Num 18:7 / Lev 22:10) or as the names of the Bible's
words kept out of the translation (`מקדש`, `זר`, `ביכורים`, `יומת`, `תושב`, `מזבח`, `תרומה`), plus the book name `במדבר` in the
references (the `מדבר` regex). §H4 hits are the fixed words named with their Hittite word (`כהן`, `משמרת`, `שומר`, `חטא־ראש`,
`היו יראים`), quotations of the translation (`טהורים`, `טמאים`), descriptions of the source (`ששכב` for *šeš-* in §14, `טהורים`
for §2's *parkui-*) and of Lev 22 (`קדש`, `הקודש`, and `מקדש` as a named word). Three prose words were changed: `יראה` "will see"
(the gated homograph) → `יבחין`, `עבירה` (*ḫaratar*'s word) → `מעשה`, `השבועה` (*lingai-*'s; IN has no *lingai-*) → `המבחן
לפני האל`. The find-spot (the archives of the Great Temple) is hedged (`ככל הנראה`): not verified by us.

## Part IN: parallels index (the Instructions for Temple Personnel)

Generated 2026-10-26 by the Sub3 coordinator from the הקבלה fields of `annotated-IN.rtl.md` (one row per tagged Bible quotation; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| IN §2, 2.1 | *nam-ma NIND[A.GU]R₄.RA{ḪI.A} UD-MI ku-i-e-eš e-eš-ša-an-zi na-at pár-[k]u-wa-iš a-ša-an-du* | ועוד: אלה אשר עושים את הלחמים העבים היומיים – טהורים יהיו! | `וְהֶעֱבִירוּ תַעַר עַל כָּל בְּשָׂרָם וְכִבְּסוּ בִגְדֵיהֶם וְהִטֶּהָרוּ` (במדבר ח:ז) | [equivalent] | טהרת הלויים: גילוח, כביסת בגדים, טהרה – אותם שלושה צעדים כבשורות 2.2–2.3. ההקבלה טיפולוגית: החתים לא פגשו את ישראל; שני הכתבים מעידים על תפיסה משותפת של "טהרה" כניקיון גוף ובגד של מי שניגש אל האל |
| IN §2, 2.1 | *nam-ma NIND[A.GU]R₄.RA{ḪI.A} UD-MI ku-i-e-eš e-eš-ša-an-zi na-at pár-[k]u-wa-iš a-ša-an-du* | ועוד: אלה אשר עושים את הלחמים העבים היומיים – טהורים יהיו! | `לֶחֶם הַתָּמִיד` (במדבר ד:ז) | [divergence] | הלחם היומי של האל החתי אינו לחם הפנים: הוא מזונו היומי של האל, הנאכל (במסגרת הפולחן) ולא מונח לפניו; ולכן `לחם עבה יומי` ולא מונחי התורה |
| IN §2, 2.2 | *wa-ar-[pa]-an-ti-ša-at kar-ta-an-te-eš a-ša-an-du iš-ḫi-⸢i⸣-ni-uš-ma-aš-kán* | ורחוצים, גזוזים יהיו; ואילו שערם – | `וְרֹאשָׁם לֹא יְגַלֵּחוּ וּפֶרַע לֹא יְשַׁלֵּחוּ; כָּסוֹם יִכְסְמוּ אֶת רָאשֵׁיהֶם` (יחזקאל מד:כ) | [divergence] | לכהני יחזקאל אסור לגלח את הראש ולגדל פרע, והם קוצצים (כוסמים) את שערם: כמו אופי האל החתי, שערם קצר וגזוז |
| IN §2, 2.7 | *e-eš-du nam-ma-kán pár-šu-u-ra-aš pé-di ŠAḪ-aš UR.GI₇-a[š] KÁ-aš le-e ti-ia-zi* | יהיה; ועוד: אל שער מקום התבשילים – חזיר, כלב – אַל ייכנס! | `עֹרֵף כֶּלֶב … דַּם חֲזִיר` (ישעיהו סו:ג) | [equivalent] | הכלב והחזיר הם גם אצל ישעיהו סמל הטומאה ההפוכה לעבודת האל. ההקבלה טיפולוגית: החזיר והכלב היו בעולם העתיק כולו בעלי החיים של האשפה והטומאה |
| IN §2, 2.8 | *UN-aš DINGIR{MEŠ}-aš-ša ZI-an-za ta-ma-a-iš ku-iš-ki UL ⸢ki⸣-i-pát ku-it UL* | נפש האדם ושל הָאֵלִים – אחרת היא במשהו? לא! זה עצמו – מה? לא! | `כִּי לֹא מַחְשְׁבוֹתַי מַחְשְׁבוֹתֵיכֶם וְלֹא דַרְכֵיכֶם דְּרָכָי נְאֻם יְהוָה` (ישעיהו נה:ח) | [divergence] | הנביא מעמיד את מחשבת האל מעל מחשבת האדם; החיבור החתי טוען את ההפך הגמור: נפש האל ונפש האדם הן אחת |
| IN §2, 2.8 | *UN-aš DINGIR{MEŠ}-aš-ša ZI-an-za ta-ma-a-iš ku-iš-ki UL ⸢ki⸣-i-pát ku-it UL* | נפש האדם ושל הָאֵלִים – אחרת היא במשהו? לא! זה עצמו – מה? לא! | `מָה אֱנוֹשׁ כִּי תִזְכְּרֶנּוּ` (תהלים ח:ה) | [divergence] | אף שם השאלה מדגישה את המרחק, וכאן את הדמיון. ההשוואה טיפולוגית בלבד |
| IN §2, 2.9 | *ZI-an-za-ma 1-aš-pát ARAD-ŠU ⸢ku⸣-wa-pí A-NA EN-ŠU pé-ra-⸢an⸣ ša-ra-a-ar-ta-ri* | ואילו הנפש – אחת היא ממש. כאשר עבדו עומד לפני אדוניו, | `הַקְרִיבֵהוּ נָא לְפֶחָתֶךָ הֲיִרְצְךָ אוֹ הֲיִשָּׂא פָנֶיךָ` (מלאכי א:ח) | [equivalent] | גם מלאכי משווה את עבודת האל לשירות אדון בשר ודם: מה שלא יגישו לפחה, לא יגישו לאל. ההקבלה טיפולוגית, וקרובה מאוד בהיגיון |
| IN §2, 2.13 | *na-aš ZI-an ar-ḫa la-a-an-za na-at-ši-kán an-da ⸢da⸣-me-en-kiš-⸢ke-et-ta⸣* | הוא – רפוי הלאה בנפשו, ו(נפשו) דבקה בו; | `וַתִּדְבַּק נַפְשׁוֹ בְּדִינָה` (בראשית לד:ג) | [equivalent] | אותו דימוי של נפש ה"דבקה" באחר, מתוך קרבה ורצון טוב |
| IN §2, 2.20 | *ma-a-na-aš a-ki-ia ku-wa-pí na-aš UL 1-aš a-ki MÁŠ-⸢ŠU-ma⸣-aš-⸢ši⸣ te-et-ti-⸢an-pát⸣* | ואם הוא אי־פעם ימות – לא לבדו ימות; משפחתו כלולה עמו ממש. | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת: אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | התורה אוסרת על בית דין להעניש משפחה על חטא של יחיד; המשל החתי מניח את ההפך כמובן מאליו |
| IN §3, 3.1 | *⸢ma⸣-a-an-ma-aš-ta ZI-TUM DINGIR-L[IM-ma ku-i]š ⸢TUKU.TUKU-ia-nu-zi⸣* | ואילו אם מישהו יַזְעִים את נפש הָאֵל – | `פֹּקֵד עֲוֹן אָבֹת עַל בָּנִים עַל שִׁלֵּשִׁים וְעַל רִבֵּעִים לְשֹׂנְאָי` (שמות כ:ד) | [equivalent] | גם אל ישראל "פוקד" חטא על הדורות |
| IN §3, 3.2 | *na-at-kán DINGIR-LIM a-pé-e-da-ni-p[át 1]-⸢e⸣-da-ni an-da š[a-an-aḫ-z]i* | האם הָאֵל ידרוש אותו באותו (אדם) עצמו, באחד? | `וּמִיַּד הָאָדָם מִיַּד אִישׁ אָחִיו אֶדְרֹשׁ אֶת נֶפֶשׁ הָאָדָם` (בראשית ט:ה) | [equivalent] | "דרש" הוא גם בעברית לתבוע את החוב או את הדם מיד מישהו |
| IN §3, 3.3 | *UL-at-kán A-*NA* DAM-ŠÚ D[UMU{MEŠ}-ŠU N]UMUN-ŠU MÁŠ-ŠU ⸢ARAD⸣{MEŠ}-Š[U GÉM]E{MEŠ}-ŠU ⸢GU₄{ḪI.A}-ŠÚ⸣* | הלא אותו – באשתו, [בבניו], בזרעו, במשפחתו, בעבדיו, [באֲמָהוֹתָיו], בשווריו, | `וְאֶת בָּנָיו וְאֶת בְּנֹתָיו וְאֶת שׁוֹרוֹ וְאֶת חֲמֹרוֹ וְאֶת צֹאנוֹ וְאֶת אָהֳלוֹ וְאֶת כָּל אֲשֶׁר לוֹ` (יהושע ז:כד) | [equivalent] | עונשו של עכן, שלקח מן החרם (רכוש האל!): בניו, בנותיו, שורו, חמורו, צאנו – אותה רשימה כמעט, ואותו חטא – גזל ממה שהוקדש לאל |
| IN §3, 3.3 | *UL-at-kán A-*NA* DAM-ŠÚ D[UMU{MEŠ}-ŠU N]UMUN-ŠU MÁŠ-ŠU ⸢ARAD⸣{MEŠ}-Š[U GÉM]E{MEŠ}-ŠU ⸢GU₄{ḪI.A}-ŠÚ⸣* | הלא אותו – באשתו, [בבניו], בזרעו, במשפחתו, בעבדיו, [באֲמָהוֹתָיו], בשווריו, | `וַתִּבְלַע אֹתָם וְאֶת בָּתֵּיהֶם וְאֵת כָּל הָאָדָם אֲשֶׁר לְקֹרַח וְאֵת כָּל הָרְכוּשׁ` (במדבר טז:לב) | [equivalent] | ההקבלות טיפולוגיות: אין קשר ספרותי, אך אותה תפיסה של "בית" כיחידה אחת לפני האל |
| IN §3, 3.5 | *⸢ḫar-ni-ik-zi⸣ nu-za A-⸢NA⸣ INIM ⸢DINGIR⸣-L[IM me-e]k-ki mar-ri na-aḫ-ḫ[a-an-t]e-eš e-eš-tén* | ישחית? ולדבר הָאֵל היו יראים מאוד, עד מאוד! | `וּמִקְדָּשִׁי תִּירָאוּ: אֲנִי יְהוָה` (ויקרא יט:ל) | [equivalent] | יראה כלפי בית האל ודבריו. *naḫḫ-* הוא המקביל החתי של *palāḫu* האכדי, שכל הקורפוסים מתרגמים `ירא`. הקבלה טיפולוגית |
| IN §4, 4.1 | *[an-da-m]a EZEN₄ ITU{KAM} EZEN₄ MU-ti EZEN₄ a-ia-li [EZE]N₄ zé-n[a-an-d]a-aš* | [ונוסף על כך]: חג החודש, חג השנה, חג הָאַיָּלִי(?), [חג] הסת[יו], | `שָׁלֹשׁ רְגָלִים תָּחֹג לִי בַּשָּׁנָה` (שמות כג:יד) | [divergence] | לוח המועדים של התורה מונה שלושה רגלים ומועדים מעטים, ואילו הרשימה החתית מונה עשרים חגים ויותר – והיא אינה אלא "דוגמה" ("או כל חג שהוא", 4.7) |
| IN §4, 4.6 | *EZEN₄{MEŠ} {LÚ.MEŠ}ú-pa-ti-ia-aš EZEN₄{MEŠ} pu-u-⸢la⸣-aš EZEN₄{MEŠ} ḫa-aḫ-ra-an-na-aš* | חגי אנשי הָאוּפַּטִי, חגי הַפּוּלָה(?), חגי העידור(?) – | `הִפִּיל פּוּר הוּא הַגּוֹרָל לִפְנֵי הָמָן` (אסתר ג:ז) | [equivalent] | גם חג הפורים נקרא על שם "הגורל" (*pūru* האכדי). ההקבלה טיפולוגית ומקרית בצליל: *pul-* החתי ו־*pūru* האכדי אינם בהכרח מילה אחת. `גורל` שמור בקורפוס זה לגורלות של ויקרא טז, ולכן *pul-* מתועתק |
| IN §4, 4.11 | *ḫa-ap-pár da-aš-ket₉-te-ni DINGIR{MEŠ}-*aš*-ma-*at-kán* ZI-ni wa-ak-ši-ia-nu-ut-te-ni* | לוקחים מסחר – ואילו לנפש הָאֵלִים תחסירו אותם – | `הֲיִקְבַּע אָדָם אֱלֹהִים כִּי אַתֶּם קֹבְעִים אֹתִי וַאֲמַרְתֶּם בַּמֶּה קְבַעֲנוּךָ: הַמַּעֲשֵׂר וְהַתְּרוּמָה` (מלאכי ג:ח) | [equivalent] | גזל האל במנות המגיעות לו; כאן לא העם גוזל, אלא משרתי בית האל עצמם, הלוקחים כסף במקום המנחה. הקבלה טיפולוגית |
| IN §5, 5.3 | *I-NA É{MEŠ}-KU-NU pé-e ḫar-te-ni na-⸢at⸣ šu-me-⸢el⸣ DAM{MEŠ}-KU-NU DUMU{MEŠ}-KU-NU* | תובילו אל בתיכם, ואותם – נשיכם, בניכם, | `וְכָל זָר לֹא יֹאכַל קֹדֶשׁ; תּוֹשַׁב כֹּהֵן וְשָׂכִיר לֹא יֹאכַל קֹדֶשׁ` (ויקרא כב:י) | [divergence] | `וְכֹהֵן כִּי יִקְנֶה נֶפֶשׁ קִנְיַן כַּסְפּוֹ הוּא יֹאכַל בּוֹ` (ויקרא כב:יא) – בתורה מותר לבני בית הכוהן ולעבדיו לאכול מן הקודש, ואסור לאורח ולשכיר; כאן אסור לקחת הביתה את מה שלא הגיע לאל כלל. השאלה המשותפת – מי בבית הכוהן אוכל מן הקודש – נענית בסעיף 6 … |
| IN §5, 5.5 | *na-aš-ma a-aš-šu-wa-an-za ku-iš-ki {LÚ}Ú-BA-⸢RUM⸣ ú-ez-zi na-at a-pé-e-〈da〉-ni* | או אורח חשוב כלשהו יבוא, ואותם לאותו (אחד) | `תּוֹשַׁב כֹּהֵן וְשָׂכִיר לֹא יֹאכַל קֹדֶשׁ` (ויקרא כב:י) | [divergence] | האורח אינו אוכל מן הקודש בשתי המסורות; בתורה בגלל קדושת המזון, וכאן בגלל שהמזון שייך לאל ונגזל ממנו |
| IN §5, 5.9 | *SAG.DU-⸢az⸣ GAM-an ki-it-ta-ru na-at-kán le-e šar-ra-at-te-ni* | יהיה מונח בראש, למטה! ואַל תחלקו אותם! | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [divergence] | הנוסחה החתית איננה גזר דין של בית דין בסביל, אלא קביעה: הדבר "מונח בראש" – על חשבון הראש (5.10: `ימות`). ההבדל בין הלשונות הוא עצמו הממצא |
| IN §6, 6.2 | *NINDA.GUR₄.RA DINGIR-LIM-za-kán NINDA.SIG le-e ku-iš-ki da-a-li-ia-zi* | את הלחם העבה של הָאֵל, את הלחם הדק – אף אחד אַל יניח לעצמו! | `לֹא יַנִּיחַ מִמֶּנּוּ עַד בֹּקֶר` (ויקרא ז:טו) | [divergence] | בתורה אסור "להניח" (להותיר) מבשר הזבח; כאן אסור "להניח לעצמו" – לשמור בצד – מלחם האל. אותו פועל, ענייה אחרת: שם הזמן, כאן הבעלות |
| IN §6, 6.4 | *ḫu-u-ma-an-pát DINGIR-LIM-ni 〈〈EGIR-pa〉〉 ma-ni-ia-aḫ-tén nam-ma-aš-ma-aš PA-NI DINGIR-LIM me-mi-an* | מַנּוּ לָאֵל את הכול ממש! ועוד – לכם, לפני הָאֵל, דבר | `וַיְמַן לָהֶם הַמֶּלֶךְ דְּבַר יוֹם בְּיוֹמוֹ מִפַּת בַּג הַמֶּלֶךְ` (דניאל א:ה) | [equivalent] | "מינה" מנה מזון קבועה, כמו מנתו היומית של האל |
| IN §6, 6.7 | *[ki-ia-aḫ-ḫu-ut] nu-wa-za-kán a-pé-e-el ⸢É⸣-er GAM-an ša-ra-a e-ep-du* | [לֵךְ]! ואת ביתו – למטה, למעלה – יתפוס!" | `וַיִּקַּח יְהוֹשֻׁעַ אֶת עָכָן בֶּן זֶרַח … וְאֶת כָּל אֲשֶׁר לוֹ` (יהושע ז:כד) | [equivalent] | הגונב ממה שהוקדש לאל נענש עם ביתו; כאן הנשבע עצמו מבקש את העונש הזה. הקבלה טיפולוגית |
| IN §6, 6.8 | *NINDA KAŠ GEŠTIN-ia-m]a ma-a-an a-pé-e-da-ni UD-ti a-*da*-an-na a-ku-wa-[an-na]* | [ואילו את הלחם, השכר וגם את היין] – אם ביום ההוא לאכול ולשתות | `בְּיוֹם זִבְחֲכֶם יֵאָכֵל וּמִמָּחֳרָת; וְהַנּוֹתָר עַד יוֹם הַשְּׁלִישִׁי בָּאֵשׁ יִשָּׂרֵף` (ויקרא יט:ו) | [divergence] | גם בתורה מנת הקודש נאכלת ביום ההקרבה וביום שאחריו, ומה שנותר עד היום השלישי נשרף; כאן – מותר לאכול במשך שלושה ימים (6.10). אותה בעיה (מזון קודש שאינו נגמר ביום אחד), תשובה קרובה ושונה. הקבלה טיפולוגית |
| IN §6, 6.11 | *[{NINDA}pí-ia-an-ta-al-la-an-ma A-NA DAM]{MEŠ}-KU!-NU DUMU{MEŠ}-KU!-NU SAG.GÉME.ARAD{MEŠ}-KU!-[NU le-e]* | [ואילו את לחם־המתנה – לנשי]כם, לבניכם, לַאֲמָהוֹתֵיכֶם ולעבדי[כם – אַל] | `לְךָ נְתַתִּים וּלְבָנֶיךָ וְלִבְנֹתֶיךָ אִתְּךָ לְחָק עוֹלָם: כָּל טָהוֹר בְּבֵיתְךָ יֹאכַל אֹתוֹ` (במדבר יח:יא) | [divergence] | בתורה מתנות הכהונה ניתנות לכוהן ולבני ביתו; לפי השחזור של CHD, לחם־המתנה החתי אסור לנשים, לבנים ולעבדים. השחזור תלוי ב־*lē* המשוחזר; S&B קראו את ההפך |
| IN §6, 6.12 | *[ KAŠ GEŠTIN-ma-ká]n DINGIR{MEŠ}-a[š {GI]Š}kat-ta-lu-uz-zi le-e-pát [ ]* | [ואילו שכר, יין] – את מפתן הָאֵלִים אַל כלל […] | `עַל כֵּן לֹא יִדְרְכוּ כֹהֲנֵי דָגוֹן וְכָל הַבָּאִים בֵּית דָּגוֹן עַל מִפְתַּן דָּגוֹן בְּאַשְׁדּוֹד` (שמואל א ה:ה) | [equivalent] | `וּפָקַדְתִּי עַל כָּל הַדּוֹלֵג עַל הַמִּפְתָּן` (צפניה א:ט) – גם במקרא מפתן בית האל הוא גבול בעל משמעות פולחנית. ההקבלה טיפולוגית: מפתן המקדש מקודש בתרבויות רבות |
| IN §6, 6.17 | *[ a-ra-aḫ-zé-n]a-aš Ú-UL-aš {URU}ḫa-at-tu-ša-aš DUMU.⸢LÚ.U₁₉⸣.L[U DING]IR{MEŠ}-aš ⸢ti⸣-[ia-zi]* | [חיצוני] (הוא), לא בן אדם של חתושה הוא – אֶל הָאֵלִים ייכ[נס], | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר יח:ז) | [equivalent] | `וְזָר לֹא יִקְרַב אֲלֵיכֶם` (במדבר יח:ד) – הזר המתקרב אל הקודש מת. זו ההקבלה המרכזית שהעלה מילגרום (Milgrom 1970): מילגרום טען להקבלה טיפולוגית, לא לקשר ישיר |
| IN §6, 6.18 | *[ ku-i-ša-a]n(?) pé-e-ḫu-te-ez-zi-ma na-at-ši SAG.DU-aš ag-ga-t[ar]* | ואילו [מי ש]יוליך [אותו]? – וזה לו מות־ראש! | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר א:נא) | [divergence] | בתורה מת הזר עצמו; כאן גם מי שהכניס אותו. אחריות המארח היא הממצא |
| IN §7, 7.1 | *[ ] UDU ku-iš DINGIR-LIM-ni a-da-an-na u-un-na-an-za* | […] שה, אשר נִנְהָג אֶל הָאֵל לאכול, | `וַהֲבֵאתֶם גָּזוּל וְאֶת הַפִּסֵּחַ וְאֶת הַחוֹלֶה וַהֲבֵאתֶם אֶת הַמִּנְחָה; הַאֶרְצֶה אוֹתָהּ מִיֶּדְכֶם` (מלאכי א:יג) | [equivalent] | `וְאָרוּר נוֹכֵל וְיֵשׁ בְּעֶדְרוֹ זָכָר וְנֹדֵר וְזֹבֵחַ מָשְׁחָת` (מלאכי א:יד) – אותה הונאה: להביא לאל בהמה פגומה במקום בהמה טובה |
| IN §7, 7.1 | *[ ] UDU ku-iš DINGIR-LIM-ni a-da-an-na u-un-na-an-za* | […] שה, אשר נִנְהָג אֶל הָאֵל לאכול, | `גַּם בְּטֶרֶם יַקְטִרוּן אֶת הַחֵלֶב וּבָא נַעַר הַכֹּהֵן` (שמואל א ב:טו) | [equivalent] | כוהני שילה הלוקחים את בשר האל לפני שהוקרב. ההקבלות טיפולוגיות |
| IN §7, 7.3 | *[šu-ma-aš-ma-az ku-in] ma-ak-la-an-da-an mar-kán ḫar-te-ni na-an-kán an-d[a]* | [ואת זה] הכחוש, [אשר] *פירקתם* [לעצמכם] – אותו פנימה | `וּבְשָׂרִי כָּחַשׁ מִשָּׁמֶן` (תהלים קט:כד) | [equivalent] | "כחוש" הוא בשר שאין בו שומן |
| IN §7, 7.3 | *[šu-ma-aš-ma-az ku-in] ma-ak-la-an-da-an mar-kán ḫar-te-ni na-an-kán an-d[a]* | [ואת זה] הכחוש, [אשר] *פירקתם* [לעצמכם] – אותו פנימה | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ טוֹב בְּרָע אוֹ רַע בְּטוֹב` (ויקרא כז:י) | [equivalent] | התורה אוסרת להחליף בהמה שהוקדשה, טובה ברעה; כאן ההחלפה היא העבירה עצמה. הקבלה טיפולוגית |
| IN §7, 7.8 | *[i-ia-at-te-ni na-aš]-ma-an-kán ta-me-e-da-ni UN-ši wa-aḫ-nu-ma-an-zi* | [תעשו], או שאותו לאדם אחר להמיר | `וְאִם הָמֵר יָמִיר בְּהֵמָה בִּבְהֵמָה וְהָיָה הוּא וּתְמוּרָתוֹ יִהְיֶה קֹּדֶשׁ` (ויקרא כז:י) | [equivalent] | החלפת בהמה מוקדשת. הקבלה טיפולוגית |
| IN §7, 7.10 | *[a-pé-e-el ZI-aš Ḫ]A.⸢LA⸣ KA×U-it pa-ra-a ḫu-u-it-ti-at-te-ni* | [את חלק נפשו] – מן הפה החוצה תמשכו, | `וְלֹא יִקַּח מִמְּךָ בָּשָׂר מְבֻשָּׁל כִּי אִם חָי` (שמואל א ב:טו) | [equivalent] | `וְאִם לֹא לָקַחְתִּי בְחָזְקָה` (שמואל א ב:טז) – נערי בני עלי לוקחים את מנת האל לפני שהגיעה אליו. הקבלה טיפולוגית, וקרובה מאוד |
| IN §7, 7.12 | *nu ki-iš-[ša-an an-da pé-e-da-at-te-ni] DINGIR-LIM-wa-ra-aš ku-it ⸢nu⸣-wa UL* | וכך [פנימה תישאו]: "(משום) שאֵל הוא – הרי לא | `הָאֹמְרִים בִּלְבָבָם לֹא יֵיטִיב יְהוָה וְלֹא יָרֵעַ` (צפניה א:יב) | [equivalent] | `וַיֹּאמְרוּ לֹא יִרְאֶה יָּהּ` (תהלים צד:ז) – אותו טיעון של המזלזל: האל אינו רואה ואינו עושה דבר. ההקבלה טיפולוגית, אך מפתיעה בקרבתה: משרת המקדש החתי ו"הקופאים על שמריהם" של צפניה אומרים כמעט אותן מילים |
| IN §7, 7.16 | *DINGIR{MEŠ}-aš-ma Z[I-an-za da-aš-šu]-uš nu e-ep-pu-u-wa-⸢an⸣-zi UL nu-un-tar-nu-⸢zi⸣* | ואילו נפש הָאֵלִים – חזקה היא; ולתפוס – לא תמהר, | `אֲשֶׁר אֵין נַעֲשָׂה פִתְגָם מַעֲשֵׂה הָרָעָה מְהֵרָה; עַל כֵּן מָלֵא לֵב בְּנֵי הָאָדָם בָּהֶם לַעֲשׂוֹת רָע` (קהלת ח:יא) | [equivalent] | הדחייה בעונש היא שמעודדת את החוטא |
| IN §7, 7.16 | *DINGIR{MEŠ}-aš-ma Z[I-an-za da-aš-šu]-uš nu e-ep-pu-u-wa-⸢an⸣-zi UL nu-un-tar-nu-⸢zi⸣* | ואילו נפש הָאֵלִים – חזקה היא; ולתפוס – לא תמהר, | `יְהוָה אֶרֶךְ אַפַּיִם … וְנַקֵּה לֹא יְנַקֶּה` (נחום א:ג) | [equivalent] | איטי לכעוס, אך אינו מנקה. ההקבלות טיפולוגיות; התפיסה – שהאל אינו ממהר להעניש, ולכן החוטא טועה לחשוב שלא יעשה מאומה – משותפת לחתים ולמקרא |
| IN §7, 7.18 | *UL tar-na-a-⸢i⸣ [nu-za] DINGIR{MEŠ}-aš ZI-ni me-ek-ki na-aḫ-ḫa-an-te-eš e-eš-tén* | לא תשלח! ולנפש הָאֵלִים היו יראים מאוד! | `וּמִקְדָּשִׁי תִּירָאוּ` (ויקרא יט:ל) | [equivalent] | ראו 3.5 |
| IN §8, 8.2 | *šu-ma-aš ḫar-te-⸢ni⸣ nu-za {LÚ.MEŠ}ÙMMEDA-KU-NU nu-za DINGIR{MEŠ}-aš KÙ.BABBAR-i KÙ.SI₂₂-i* | אתם מחזיקים – אתם אֹמְנֵיו(?) – ולכם, של הָאֵלִים – מן הכסף, הזהב, | `כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | [equivalent] | ה"אומן" הוא מי שמגדל ושומר דבר שאינו שלו |
| IN §8, 8.4 | *an-da NU.GÁL ku-it ku-it DINGIR-LIM-ni-ma-at e-eš-zi-pát* | בתוכו – אין (לכם); כל מה שיש – לָאֵל הוא, ממש. | `לֹא יִהְיֶה לַכֹּהֲנִים הַלְוִיִּם כָּל שֵׁבֶט לֵוִי חֵלֶק וְנַחֲלָה עִם יִשְׂרָאֵל; אִשֵּׁי יְהוָה וְנַחֲלָתוֹ יֹאכֵלוּן` (דברים יח:א) | [equivalent] | הכוהן אינו בעל רכוש; הוא חי ממה שהוא של האל. ההקבלה טיפולוגית |
| IN §8, 8.10 | *ka-a-aš-wa-ra-at-ši LUGAL-uš pa-iš KI.LÁ.BI-ŠU-⸢ia-at⸣ ma-ši-wa-an* | "המלך הזה נתן אותו לו", וגם משקלו – כמה הוא; | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים; וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | [equivalent] | שטר הקנייה של ירמיהו: כתיבה, חתימה, עדים ומשקל הכסף – אותם רכיבים כבשורות 8.9–8.18. ההקבלה טיפולוגית: מנהג רישום משותף למזרח הקדום |
| IN §8, 8.25 | *na-an LUGAL-an a-aš-ka UL ú-wa-te-ez-zi nu-uš-〈ma〉-ša-at 2-aš-pát* | ולא יביא אותו אל שער המלך – וזה להם – לשניהם | `וְהִנָּם טְמוּנִים בָּאָרֶץ בְּתוֹךְ הָאָהֳלִי` (יהושע ז:כא) | [equivalent] | עכן מסתיר את מה שלקח מן החרם; כאן העונש חל גם על המסתיר. הקבלה טיפולוגית |
| IN §8, 8.26 | *SAG.DU-aš *ÚŠ*-tar 2-uš-pát-at ak-kán-du DINGIR-LIM-na-ša-at NU.*GÁL* [l]e-⸢e(?)⸣* | מות־ראש! שניהם ימותו! ושל הָאֵל – אין, [אַל?] | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | אינו נוגע כאן: שניהם חטאו. *2-pat akkandu* `שניהם ימותו` כבחוקים (HL2 198.4) |
| IN §9, 9.2 | *⸢EZEN₄⸣-aš me-e-ḫu-u-ni UL e-eš-ša-at-te-ni nu EZEN₄ ḫa-me-eš-ḫ[a-an-da-aš]* | לא בזמן החג תעשו, ואת חג הָאָבִיב | `וְהָאִישׁ אֲשֶׁר הוּא טָהוֹר וּבְדֶרֶךְ לֹא הָיָה וְחָדַל לַעֲשׂוֹת הַפֶּסַח וְנִכְרְתָה הַנֶּפֶשׁ הַהִוא מֵעַמֶּיהָ: כִּי קָרְבַּן יְהוָה לֹא הִקְרִיב בְּמֹעֲדוֹ` (במדבר ט:יג) | [divergence] | גם בתורה חג שלא נעשה "במועדו" הוא עבירה; אך שם האדם הפרטי, וכאן אנשי בית האל, המקבלים כסף מן המביא כדי לדחות |
| IN §9, 9.8 | *pé-ra-an na-aš-šu ku-ša-a-ta na-aš-šu KASKAL-aš na-aš-ma ta-ma-i* | לפניי, או מֹהַר, או דרך, או אחר – | `וּמִי הָאִישׁ אֲשֶׁר נָטַע כֶּרֶם וְלֹא חִלְּלוֹ` (דברים כ:ו) | [equivalent] | `וּמִי הָאִישׁ אֲשֶׁר אֵרַשׂ אִשָּׁה וְלֹא לְקָחָהּ` (דברים כ:ז) – אותם תירוצים (קציר, נישואים) הם בתורה סיבות מוצדקות לפטור מן המלחמה; כאן הם תירוצים פסולים לדחיית החג |
| IN §9, 9.8 | *pé-ra-an na-aš-šu ku-ša-a-ta na-aš-šu KASKAL-aš na-aš-ma ta-ma-i* | לפניי, או מֹהַר, או דרך, או אחר – | `אוֹ בְדֶרֶךְ רְחֹקָה לָכֶם` (במדבר ט:י) | [equivalent] | הדרך מתירה בתורה לדחות את הפסח בחודש; כאן היא אינה מתירה דבר. ההקבלות טיפולוגיות, והן מראות את העולם המשותף: עונות החקלאות, הנישואים והמסע – אלה מה שמפריע לחגים |
| IN §9, 9.14 | *nu-uš-ma-aš DINGIR{MEŠ}-aš ZI-ni ḫa-ap-pár le-e *da*-at-te-ni* | ואַל תיקחו מסחר על נפש הָאֵלִים! | `וְלֹא תִקַּח שֹׁחַד כִּי הַשֹּׁחַד יְעַוֵּר עֵינֵי חֲכָמִים` (דברים טז:יט) | [equivalent] | הקבלה טיפולוגית |
| IN §10, 10.1 | *an-da-ma-za šu-me-eš ku-i-⸢e⸣-eš LÚ{MEŠ} É˽DINGIR-LIM nu-za ḫa-li-i[a-aš]* | ונוסף על כך: אתם, אשר אנשי בית הָאֵל (אתם) – המשמרת: | `וְהַחֹנִים לִפְנֵי הַמִּשְׁכָּן … שֹׁמְרִים מִשְׁמֶרֶת הַמִּקְדָּשׁ לְמִשְׁמֶרֶת בְּנֵי יִשְׂרָאֵל; וְהַזָּר הַקָּרֵב יוּמָת` (במדבר ג:לח) | [equivalent] | משמרת הקודש. זו ההקבלה המרכזית של מילגרום (Milgrom 1970): משמרת הלילה החתית מול "משמרת" הכוהנים והלויים; לדעתו ההקבלה טיפולוגית – שני מוסדות דומים של שמירת בית האל – ולא קשר ישיר |
| IN §10, 10.5 | *[ ]x-⸢zi⸣ na-aš-za MUNUS-ni-⸢i⸣ GAM-an še-eš-du* | […]… – ישכב עם אשה! | `וְאִשָּׁה אֲשֶׁר יִשְׁכַּב אִישׁ אֹתָהּ שִׁכְבַת זָרַע וְרָחֲצוּ בַמַּיִם וְטָמְאוּ עַד הָעָרֶב` (ויקרא טו:יח) | [divergence] | בשתי המסורות השכיבה עם אשה מחייבת רחיצה (10.6) לפני שובו של האיש אל הקודש; בתורה גם הטומאה נמשכת עד הערב, כאן נדרשת רק הרחיצה |
| IN §10, 10.5 | *[ ]x-⸢zi⸣ na-aš-za MUNUS-ni-⸢i⸣ GAM-an še-eš-du* | […]… – ישכב עם אשה! | `אַל תִּגְּשׁוּ אֶל אִשָּׁה` (שמות יט:טו) | [divergence] | ההקבלות טיפולוגיות |
| IN §10, 10.7 | *[n]a-aš I-NA É DINGIR-LIM še-e-šu-u-an-zi ⸢ḫu-u⸣-[da-a-ak š]a-ra-a ú-ed-du* | והוא – מיד יעלה לבית הָאֵל לשכב (שם)! | `וּסְבִיבוֹת בֵּית הָאֱלֹהִים יָלִינוּ: כִּי עֲלֵיהֶם מִשְׁמֶרֶת` (דברי הימים א ט:כז) | [equivalent] | `וּשְׁמוּאֵל שֹׁכֵב בְּהֵיכַל יְהוָה` (שמואל א ג:ג) – משרתי הקודש לנים בבית האל. הקבלה טיפולוגית |
| IN §10, 10.12 | *nam-ma-kán GE₆-az {LÚ.MEŠ}ú-e-〈ḫe〉-eš-⸢kat⸣-tal-li-iš da-an-te-eš a-ša-an-*du** | ועוד: בלילה יהיו לקוחים סובבים, | `מְצָאוּנִי הַשֹּׁמְרִים הַסֹּבְבִים בָּעִיר` (שיר השירים ג:ג) | [equivalent] | "הסובבים" של העיר בלילה. הקבלה טיפולוגית |
| IN §10, 10.16 | *ú-e-ḫe-eš-kán-du nu-uš-ma-*aš Ù*-aš le-e e-eš-zi* | יהיו סובבים, ושינה אַל תהיה להם! | `הִנֵּה לֹא יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | [equivalent] | אצל המשורר האל הוא השומר שאינו ישן; כאן משרתיו של האל הם שאסור להם לישון, כדי לשמור עליו. ההיפוך הוא הממצא; ההקבלה טיפולוגית |
| IN §10, 10.19 | *nu-za ku-iš ⸢ŠA⸣ KÁ É DINGIR-LIM e-eš-du nu-za É DINGIR-LIM pa-aḫ-ša-ru* | וזה אשר של שער בית הָאֵל יהיה – וישמור את בית הָאֵל! | `וְהֵם עַל הַמַּפְתֵּחַ וְלַבֹּקֶר לַבֹּקֶר` (דברי הימים א ט:כז) | [equivalent] | שוערי בית האלוהים |
| IN §10, 10.20 | *ŠÀ É-ŠU-ma-za-⸢*kán⸣ IT-TI DAM-ŠU* le-e ku-iš-ki še-eš-zi* | ואילו בתוך ביתו אף אחד אַל ישכב עם אשתו! | `כִּי אִם לֶחֶם קֹדֶשׁ יֵשׁ אִם נִשְׁמְרוּ הַנְּעָרִים אַךְ מֵאִשָּׁה` (שמואל א כא:ה) | [equivalent] | ההתנזרות מאשה כתנאי לקדושה. הקבלה טיפולוגית |
| IN §10, 10.23 | *le-e ⸢e⸣-eš-zi nam-ma-aš-ma-aš ḫa-a-li ar-ḫa šar-ra-an e-eš-du* | אַל תהיה! ועוד: המשמרת תהיה מחולקת ביניכם; | `כִּי עֲלֵיהֶם מִשְׁמֶרֶת` (דברי הימים א ט:כז) | [equivalent] | משמרות מחולקות בין הלויים. הקבלה טיפולוגית |
| IN §10, 10.24 | *na-aš-ta ku-e-da-ni ḫa-a-li wa-aš-túl an-da ki-i-ša* | ומי שבמשמרתו ייעשה חטא – | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר יח:ז) | [equivalent] | מילגרום (1970): השומר שבמשמרתו נכנס זר – אחראי בנפשו |
| IN §12, 12.3 | *{É}⸢ka-ri-im-me ku-iš-ki⸣ ni-ik-zi na-aš-kán ma-a-an ŠÀ É DINGIR-LIM* | בבית־הַקָּרִימִּי – מישהו ישתכר; והוא, אם בתוך בית הָאֵל | `עַד מָתַי תִּשְׁתַּכָּרִין; הָסִירִי אֶת יֵינֵךְ מֵעָלָיִךְ` (שמואל א א:יד) | [equivalent] | עלי חושב שחנה שיכורה בבית ה' בשילה: שכרות במקדש היא עלבון |
| IN §12, 12.3 | *{É}⸢ka-ri-im-me ku-iš-ki⸣ ni-ik-zi na-aš-kán ma-a-an ŠÀ É DINGIR-LIM* | בבית־הַקָּרִימִּי – מישהו ישתכר; והוא, אם בתוך בית הָאֵל | `יַיִן וְשֵׁכָר אַל תֵּשְׁתְּ אַתָּה וּבָנֶיךָ אִתָּךְ בְּבֹאֲכֶם אֶל אֹהֶל מוֹעֵד` (ויקרא י:ט) | [divergence] | התורה אוסרת את השתייה עצמה על הכוהן בעבודתו; ההוראה החתית מניחה שבחג שותים, ואוסרת רק את ההשתוללות. ההקבלות טיפולוגיות |
| IN §13, 13.3 | *ma-aḫ-ḫa-⸢an-ma⸣ GE₆-⸢an⸣-za ki-i-ša na-aš-ta pa-aḫ-ḫur ku-it A-NA GUNNI* | ואילו כאשר ייעשה לילה, את האש אשר באח | `אֵשׁ תָּמִיד תּוּקַד עַל הַמִּזְבֵּחַ לֹא תִכְבֶּה` (ויקרא ו:ו) | [divergence] | בתורה האש על המזבח אסור שתכבה; בבית האל החתי יש לכבות את האש בכל לילה, מחשש שריפה. אותו מוקד (אש בבית האל), ושני היגיונות הפוכים: אש קודש נצחית מול בטיחות. ההקבלה טיפולוגית |
| IN §14, 14.2 | *{LÚ}SAGI.⸢A⸣ LÚ˽{GIŠ}⸢BANŠUR⸣ {LÚ}MUḪALDIM {LÚ}NINDA.DÙ.DÙ {LÚ}KÚRUN.NA nu-uš-ma-aš DINGIR{MEŠ}-aš* | המַשְׁקֶה, איש־השולחן, המבשל, האופה, מבשל־השכר – הָאֵלִים: | `חָטְאוּ מַשְׁקֵה מֶלֶךְ מִצְרַיִם וְהָאֹפֶה לַאֲדֹנֵיהֶם` (בראשית מ:א) | [equivalent] | המשקה והאופה של חצר המלך, אותם תפקידים בחצר האל. *SAGI* (אכד. *šāqû*) הוא הקרוב האטימולוגי של `מַשְׁקֶה` |
| IN §14, 14.10 | *ma-a-an Ú-NU-[TE]{MEŠ} GIŠ-ṢI ⸢Ú⸣-NU-TE{MEŠ} GIR₄ ku-e ḫar-te-ni* | ואם חפצי עץ, חפצי חרס – אשר (אתם) מחזיקים – | `וְכָל כְּלִי חֶרֶשׂ אֲשֶׁר יִפֹּל מֵהֶם אֶל תּוֹכוֹ: כֹּל אֲשֶׁר בְּתוֹכוֹ יִטְמָא וְאֹתוֹ תִשְׁבֹּרוּ` (ויקרא יא:לג) | [equivalent] | כלי חרס שנגע בו שרץ – נטמא ונשבר; כאן כלי שנגע בו חזיר או כלב יש להשליך. הקבלה טיפולוגית, וקרובה מאוד בפרטיה (כלי עץ, כלי חרס, מגע של חיה טמאה, השלכה) |
| IN §14, 14.13 | *a-da-an-na ⸢pa-a⸣-i a-pé-e-⸢da⸣-ni-ma DINGIR{MEŠ}-eš za-ak-kar 𒑱du-ú-úr* | ייתן לאכול – ואילו לאותו (אחד) הָאֵלִים צואה ושתן | `וְזֵרִיתִי פֶרֶשׁ עַל פְּנֵיכֶם פֶּרֶשׁ חַגֵּיכֶם` (מלאכי ב:ג) | [equivalent] | לכוהנים המבזים את שולחן האל עונה האל בצואה. ההקבלה טיפולוגית, ומפתיעה בחריפותה: עונש מידה כנגד מידה – מי שהאכיל את האלים מכלי טמא יאכל צואה |
| IN §14, 14.14 | *a-da-an-na ⸢a-ku-wa⸣-an-na pí-an-zi ma-a-an-na-za MUNUS-i ku-iš GAM-an še-eš-zi* | ייתנו לאכול ולשתות! ואם מישהו ישכב עם אשה – | `וְאִשָּׁה אֲשֶׁר יִשְׁכַּב אִישׁ אֹתָהּ שִׁכְבַת זָרַע וְרָחֲצוּ בַמַּיִם וְטָמְאוּ עַד הָעָרֶב` (ויקרא טו:יח) | [divergence] | ראו 10.5 |
| IN §14, 14.17 | *⸢nam-ma⸣ x x x x x x-pát ⸢na⸣-aš-ta ku-it-ma-〈an〉 {D}UTU-uš ša-ra-a* | ועוד … ממש; ועד שאֵל הַשֶּׁמֶשׁ (יעלה) למעלה, | `כִּי אִם רָחַץ בְּשָׂרוֹ בַּמָּיִם` (ויקרא כב:ו) | [divergence] | `וּבָא הַשֶּׁמֶשׁ וְטָהֵר; וְאַחַר יֹאכַל מִן הַקֳּדָשִׁים` (ויקרא כב:ז) – בתורה הטמא רוחץ ומחכה עד שקיעת השמש; כאן הוא רוחץ לפני זריחתה ומגיע מיד לסעודת האלים. שתי המסורות קושרות את הטהרה לתנועת השמש – בכיוונים הפוכים. ההקבלה טיפולוגית |
| IN §14, 14.29 | *[nu-uš-ma-ša-a]t SAG.DU-aš ÚŠ-tar 2-uš-ša-at ak-kán-d[u]* | וזה [להם] מות־ראש! וגם שניהם ימותו! | `וְלֹא יָמֻתוּ` (שמות ל:כ) | [equivalent] | ראו 14.17: הכוהן הניגש לעבודה בלי רחיצה חייב מיתה גם בתורה. הקבלה טיפולוגית |
| IN §15, 15.3 | *[n]a-aš-m[a ku-it im-ma] ku-it ḫu-u-el-pí šu-ma-a-aš {LÚ.MEŠ}APIN.LÁ ⸢DINGIR{MEŠ}-aš⸣ [ ]* | או [כל מה] שהוא – הטרי אשר אתם, האִכָּרִים, לָאֵלִים […] | `רֵאשִׁית בִּכּוּרֵי אַדְמָתְךָ תָּבִיא בֵּית יְהוָה אֱלֹהֶיךָ` (שמות כג:יט) | [equivalent] | הבאת הראשון שבתבואה לבית האל. `ביכורים` ו`ראשית` שמורים לתורה (H3): *ḫuelpi* הוא "הטרי, הצעיר" (גם של בעלי חיים, 18.16), לא מונח של "ראשית"; S&B תרגמו "first-fruits". ההבדל הלשוני הוא חלק מן הממצא; ההקבלה טיפולוגית |
| IN §15, 15.5 | *ku-it-ma-na-at [UN-a]š na-a-ú-i e-ez-za-a-i na-at-kán DINGIR{MEŠ}-⸢aš ZI-ni⸣* | עד ש[אדם] טרם יאכל ממנו – אותו לנפש הָאֵלִים | `וְלֶחֶם וְקָלִי וְכַרְמֶל לֹא תֹאכְלוּ עַד עֶצֶם הַיּוֹם הַזֶּה עַד הֲבִיאֲכֶם אֶת קָרְבַּן אֱלֹהֵיכֶם` (ויקרא כג:יד) | [equivalent] | לא לאכול מן החדש לפני שהובא לאל. ההקבלה טיפולוגית, וקרובה מאוד: אותו סדר קדימויות – האל אוכל ראשון |
| IN §15, 15.7 | *uš-kán-zi ma-a-an-[na-a]t iš-ta-an-ta-nu-uš-ket₉-te-ni* | יהיו רואים! ואם תאחרו אותו, | `מְלֵאָתְךָ וְדִמְעֲךָ לֹא תְאַחֵר` (שמות כב:כח) | [equivalent] | אותה מצווה: לא לאחר את מתנת האל מן התבואה. הקבלה טיפולוגית |
| IN §16, 16.4 | *A-NA {LÚ}SANGA-ma-at pé-ra-an te-pu me-ma-at-te-ni na-aš-ma A.ŠÀ DINGIR-LIM* | ואילו לפני הכוהן תאמרו עליו "מעט"; או שדה הָאֵל | `וְגַם גָּנְבוּ וְגַם כִּחֲשׁוּ וְגַם שָׂמוּ בִכְלֵיהֶם` (יהושע ז:יא) | [equivalent] | גנבה מרכוש האל והכחשה. ההקבלה טיפולוגית |
| IN §16, 16.11 | **DINGIR-LIM-ni(?) 〈〈TAR?〉〉* ta-ia-at-te-ni nu-uš-ma-ša-at wa-aš-túl šu-me-el-ma-aš-kán* | מן הָאֵל(?) תגנבו אותו! וזה לכם חטא! ואילו את שלכם – | `הֲיִקְבַּע אָדָם אֱלֹהִים כִּי אַתֶּם קֹבְעִים אֹתִי` (מלאכי ג:ח) | [equivalent] | גזל האל עצמו. הקבלה טיפולוגית |
| IN §17, 17.1 | *an-da-ma ŠA KI[SLAḪ] GU₄.APIN.LÁ{ḪI.A} ku-i-e-eš [ḫar-t]e-ni nu ma-a-an GU₄.A[PIN.L]Á* | ונוסף על כך: את שוורי־החרישה של הגורן אשר (אתם) [מחזיקים] – אם שור חרישה | `לֹא תַחְסֹם שׁוֹר בְּדִישׁוֹ` (דברים כה:ד) | [divergence] | שם דאגה לשור הדש, כאן רק לרכוש האל; ההונאה בשוורי האל מקבילה ל־מלאכי א:יג (ראו 7.1) |
| IN §17, 17.5 | *na-aš-*šu*-wa-ra-aš ⸢pár⸣-aš-ta na-aš-ma-wa-ra-an GU₄.NITA GUL-aḫ-ta* | או "נמלט", או "שור זכר מחץ אותו" – | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | אותם תירוצים של שומר חינם: מת, נשבר, נלקח |
| IN §17, 17.5 | *na-aš-*šu*-wa-ra-aš ⸢pár⸣-aš-ta na-aš-ma-wa-ra-an GU₄.NITA GUL-aḫ-ta* | או "נמלט", או "שור זכר מחץ אותו" – | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ וָמֵת` (שמות כא:לה) | [divergence] | בתורה זהו חוק, כאן תירוץ של רמאי. ההקבלות טיפולוגיות |
| IN §17, 17.7 | *nu a-pu-u-un GU₄ ⸢šar⸣-ni-ik-te-ni-pát ma-⸢a⸣-[an-m]a-aš UL-ma iš-du-wa-a-⸢ri⸣* | את השור ההוא תפצו ממש! ואילו אם לא ייוודע – | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | פיצוי שור בשור. הקבלה טיפולוגית |
| IN §17, 17.8 | *⸢nu DINGIR-LIM-ni pa-it⸣-te-ni ták-ku pár-ku-e[š-t]e-ni šu-me-el {D}KAL-KU-NU* | תלכו אֶל הָאֵל: אם תיטהרו – אֵל הַמָּגֵן שלכם! | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [divergence] | גם בתורה ספק בעניין פיקדון מובא "אל האלוהים"; אך שם להכרעה, וכאן למבחן (אורדאל). הקבלה טיפולוגית |
| IN §18, 18.7 | *na-a-ú-i e-ez-za-az-⸢zi⸣ na-at DINGIR{MEŠ}-aš ḫu-u-da-a-ak ú-da-at-tén* | טרם יאכל – לָאֵלִים מיד הביאו אותו! | `כֵּן תַּעֲשֶׂה לְשֹׁרְךָ לְצֹאנֶךָ` (שמות כב:כט) | [equivalent] | הוולדות הראשונים של הבהמה, אחרי `בְּכוֹר בָּנֶיךָ תִּתֶּן לִי` (שמות כב:כח; ראו 15.7). `בכור` שמור לתורה; *ḫuelpi* "הטרי, הצעיר" (גם בעלי חיים: העגל, הטלה, הגדי של 18.3). ההקבלה טיפולוגית |
| IN §18, 18.20 | *ZI-aš ar-ḫa e-ku-ut-te-ni nu-za ma-a-an pár-ku-wa-e-eš* | של הנפש עד תום תשתו! ואם טהורים (אתם) – | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [equivalent] | הסוטה: מבחן שתייה לפני האל, שבו האשם נענש והזכאי ניצל. ההקבלה טיפולוגית |
| IN §19, 19.6 | *EGIR.KASKAL-NI-ma-at-kán le-e wa-aḫ-nu-uš-kán-zi ma-a-an-ma-kán ŠÀ KASKAL-NI* | ובדרך אַל ימירו אותו! ואילו אם בתוך הדרך | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ טוֹב בְּרָע אוֹ רַע בְּטוֹב` (ויקרא כז:י) | [equivalent] | איסור ההמרה של בהמה שהוקדשה. ההקבלה טיפולוגית, וקרובה מאוד: אותו פועל ("המיר"), אותה הונאה (המפוטם בכחוש, 19.8–19.10) |
| IN §19, 19.22 | *QA-DU DAM{MEŠ}-NI DUMU{MEŠ}-NI pár-ḫe-eš-ke* | עם נשינו ובנינו – רדוף!" | `פֹּקֵד עֲוֹן אָבֹת עַל בָּנִים` (שמות כ:ד) | [equivalent] | ראו 3.1: האל הרודף את האשם ואת ביתו; כאן האשמים עצמם מזמינים זאת בשבועה. ההקבלה טיפולוגית |

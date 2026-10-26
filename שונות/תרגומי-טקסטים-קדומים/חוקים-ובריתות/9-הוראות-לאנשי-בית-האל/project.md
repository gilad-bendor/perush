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
   has GE₆-az; B ii 36′ and C ii 16 *akkatar* "death" where A ii 45′ has ÚŠ-tar (the same word, logogram vs. syllables); B
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
(Proposals and decisions go here)

## Progress
- 2026-10-24: base (TLHdig), tool, renderings (`../renderings.md` §7.2, §H2–§H9), brief – before the composite.
- 2026-10-25/26 (Sub3): the composite (312 rows, comp-check 0) and its concordance, pushed before the first translated line (a weekly-limit stop 2026-10-25 05:19 → 2026-10-26 07:26 UTC came in between; nothing lost).

## Proposals

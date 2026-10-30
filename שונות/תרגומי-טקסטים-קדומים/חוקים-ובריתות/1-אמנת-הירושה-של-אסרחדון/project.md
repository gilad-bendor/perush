# Project: Esarhaddon's Succession Treaty (SAA 2 6) with the Tell Tayinat copy (SAA 2 15) → Hebrew

Corpus: `../corpus.md` (law and treaty), project 1. Read `../../translation-guidelines.md`, `../corpus.md`, `../renderings.md` and this folder's `renderings.md` first.

## Scope
- **The whole treaty**: the composite SAA 2 6 (ORACC Q009186), **691 entries**: the seal captions i–iv, lines 1–670, and the A-lines (40A–B, 418A–C, 555A–B, 612A–B, 616A, 618A, 633A–C, 636A–C). Parpola & Watanabe's §1–§107 structure (with §38A, §54A, §96A).
- **The Tell Tayinat copy** (SAA 2 15, ORACC P500551, 443 tablet lines): every Tayinat line is aligned (by SAAo's labels) to its composite line. In the annotated file, each entry gives the Tayinat transliteration under the composite one, and the apparatus field **תיינת** records where Tayinat differs (different words, extra words, missing words, different spelling only when it changes the reading). Where the composite is broken and Tayinat preserves the text, the Hebrew is translated from Tayinat and tagged **`{תיינת}`** (whole line) or **`{תיינת: …}`** (words), per guidelines §6.8. Tayinat lines with no composite counterpart get entries of their own (`### T vi 46` etc.), tagged `{תיינת}`.
- Date: Ayyāru 18 (Nimrud) / 16 (Tayinat), 672 BCE, eponymy of Nabû-bēlu-uṣur.

## Base edition and sources
- **Rank 1:** `../../sources/ORACC/saao-saa02--Q009186--Esarhaddon-Succession-Treaty/` (README there): `Q009186--lemmatised.md` and `P500551--Tayinat--lemmatised.md` (transliteration, SAAo normalization `norm:`, lemmas), CC BY-SA 3.0 (Parpola & Watanabe 1988; Lauinger 2012; lemmatisation Luukko 2016).
- **Rank 3 (after our own reading):** Parpola & Watanabe's English (`Q009186--translation-Parpola-Watanabe.md`), Lauinger's English of Tayinat (`P500551--Tayinat--translation.md`).
- **Rank 2:** CDA / CAD per word (never bulk-extracted; guidelines §8), the eBL dictionary API (`/api/words?word=…`), Sefaria (Klein's Akkadian cognates).
- **Not obtained** (record): Lauinger 2012's commentary (JCS 64, paywalled); Wiseman 1958 (*Iraq* 20; the first edition: check archive.org/JSTOR early-content status in a later session); Watanabe 1987 (*Die adê-Vereidigung anlässlich der Thronfolgeregelung Asarhaddons*); Steymans 1995; Weinfeld 1972; Levinson 2010; Levinson & Stackert 2012/2013; Crouch 2014; Quick 2017; Koch 2008; Otto 1999. The parallels below that come from this literature are cited from memory of the standard discussion and marked as such; parallels not known to us from the literature are marked "הצעה שלנו" (our proposal).

## Line numbering
Parpola & Watanabe's composite line numbers (= Wiseman's VTE lines), cited without "o". Tayinat: `T <col> <line>` (e.g. `T i 1`), with the composite line from SAAo. The § numbers are P&W's, used as the section headings (`## §N`).

## Parallels with the Bible to watch for (preliminary; each part checks them)
- **Deut 13:** §10 (108–122: the list of informers – enemy, ally, brothers, uncles, cousins, family, your brothers, sons, daughters, prophet, ecstatic, inquirer – "hear and conceal" ↔ 13:2–9 `נָבִיא אוֹ חֹלֵם חֲלוֹם`, `אָחִיךָ בֶן אִמֶּךָ אוֹ בִנְךָ אוֹ בִתְּךָ`, `וְלֹא תְכַסֶּה עָלָיו`); §12 (130–146: seize and kill the inciter, destroy his name and seed ↔ 13:10–11, 13:16); §18, §29 (palace conspiracies, family); the "other king, other lord" (69–72, 129) ↔ `אֱלֹהִים אֲחֵרִים`.
- **Deut 13:1 / 4:2:** §4 (57–58 "change, alter the king's word"), §35–36 (397–413, the tablet not to be changed, burnt, thrown in water, buried, erased), §57.
- **Deut 6:5–9; 13:4; 11:13:** "love … as yourselves" (§24, 266–268; 207), "with the whole heart" (53, 169, 310, 387), "speak in the truth of your heart" (51–52); teach your sons (§34, 387–388 ↔ 6:7 `וְשִׁנַּנְתָּם לְבָנֶיךָ`).
- **Deut 28:** §37–56 (the standard curse list in god-order: Aššur, Mullissu, Anu, Sîn (leprosy) → Šamaš (blindness, darkness) → Ninurta (corpses for birds) → Venus (wives to the enemy, house, property) ↔ 28:26–33, Weinfeld's famous sequence); §47 (Adad: no rain, locusts, famine, cannibalism ↔ 28:22–24, 38–42, 53–57); §56 (the summary curse: uprooting ↔ 28:63, corpses unburied, bread and water leaving you ↔ 28:26, 48); §63–64 (iron earth, bronze sky, no rain, coals instead ↔ 28:23–24, Lev 26:19); §65–106 (the ceremonial simile curses ↔ 28:27–35, 53–57, 63).
- **Deut 29:9–14:** the oath binding descendants "who will be born after the treaty" (1–10, 383–396) ↔ 29:13–14.
- **Deut 31:9–13, 24–26; 17:18–19:** the tablet sealed with Aššur's seal, set before the swearers and guarded "as your god" (§35, 397–409).
- **Elsewhere:** 2 Kgs 11:4–12 (Joash's succession oath, `וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ`); Ezek 17:13–19 (the vassal oath, `בְּרִית` + `אָלָה`); 2 Kgs 18:27 (urine as drink, an Assyrian speech); Num 5:21–27 (the oath entering the body ↔ §72, §94); Lev 26:19, 26, 29; Jer 34:18–20; Amos 5:26 (Kaiwan = Kayyamānu); Deut 5:29, 17:11, 28:14 (right and left ↔ §96).

## Decisions (coordinator, before drafting)
1. ***adê* = `אֲמָנָה`** (corpus renderings §2): neutral, pre-empts neither `בְּרִית` nor `עֵדֹת`; both echoes are tagged in the apparatus. *māmītu* = `אָלָה`, *tamītu* = `שְׁבוּעָה`, *tamû* = `נִשְׁבַּע`.
2. ***naṣāru* = `נָצַר`** (cognate; never `שָׁמַר`); *šemû* = `שָׁמַע` (cognate); *râmu* = `אָהַב` [equivalent] (note on *rḥm*); *ramû* D = `הִרְפָּה` (false friend of *râmu*); *ina gummurti libbi* = `בִּשְׁלֵמוּת לֵב` (not Deuteronomy's `בְּכָל לְבָבְךָ`).
3. **Oath form kept**: *šumma attunu … lā tanaṣṣarāni* = `אם אתם … לא תנצרו`, never resolved to "you shall …".
4. **Kings named in the Bible get the biblical form** (Esarhaddon `אֵסַרְחַדּוֹן`, Sennacherib `סַנְחֵרִיב`); Assurbanipal keeps the Akkadian form `אַשּׁוּר־בָּנִי־אַפְלִי` (as in the creation corpus).
5. **Tayinat**: variants in the apparatus field `תיינת`; Tayinat-only text tagged `{תיינת}`. The composite's own `[ ]` follow the composite (Nimrud) manuscripts: a word broken in the composite but preserved in Tayinat is `{תיינת: …}`, not `[ ]`.
6. **Prophetic terms** (§10): *raggimu* = `נָבִיא` [equivalent], *maḫḫû* = `מְשֻׁגָּע` [equivalent; note], *mār šāʾili amat ili* = `שׁוֹאֵל דְּבַר אֵל` [cognate `שׁוֹאֵל`].
7. **No `סָרָה`, `כִּסָּה`, `שָׁמַר`, `בְּרִית`, `עֵדוּת`, `אֱלֹהִים`, `מָטָר`, `דֶּבֶר` (pestilence), `שְׁחִין`, `אֲפֵלָה`, `בְּכָל לְבַבְכֶם`, `תֹּסֵף`/`תִגְרַע`** in the `>` lines: each is a Deuteronomic key word whose Akkadian counterpart here is a different word. They appear in the apparatus only. (Scripts check this list.)

## Working rules for the part translators
- **Sequential**: one translator per part, in order; each reads the `>` lines of all earlier parts (grep them) and keeps every repeated formula identical.
- **Draft unvocalized, plene, from the first line** (guidelines §5). Vocalize names at their first occurrence *in the part*, and ambiguous words.
- **Parse every verb**: stem, tense, ventive, subjunctive *-ni*, the NA forms (*tanaṣṣarāni*, *iqbakkanūni*, *issikunu* = *ištikunu*); NA *ina libbi* is a preposition.
- **Read the Tayinat line(s) of every entry** and fill the `תיינת` field.
- Consult PW / Lauinger only after forming the reading; record disagreements.
- Run the echo check on every line; keep the reserved words out (Decision 7).
- Each part ends with: a **Part N** section in this file (scope, decisions, open decisions, progress, **parallels index** table, proposals for renderings, lessons).

### Annotated file format (`annotated-<N>--<§range>.rtl.md`)
```markdown
## §4 (41–61): אשור־בני־אפלי מוכרז יורש העצר
### 41
`a-de-e ša {1}aš-šur—PAB—AŠ MAN KUR—aš-šur ina IGI DINGIR-MEŠ GAL-MEŠ`
`N: adê ša Aššur-aḫu-iddina šar Mat-Aššur ina pān ilāni rabiūti`
`T i 52′: …` (one line per Tayinat line; omit if none)
> האמנה אשר אסרחדון, מלך אשור, לפני האלים הגדולים
- **פירוק:** …
- **תיינת:** …
- **תרגומים:** PW: "…"
- **הקבלה:** [equivalent] `…` (דברים כט:יג) …
- **הערות:** …
- **הערת שוליים:** (optional: becomes a footnote of the clean translation; only for the few points a reader must know)
```
- The `## §N (lines): Hebrew heading` lines become the section headings of `translation.rtl.md` (generated by `build_translation.py`).
- Entry headers: `### <composite line>` exactly as in the edition (`### 40A`, `### i`); Tayinat-only entries `### T <col> <line>`.
- Exactly one `>` line per entry.

### Parallels index format (in each Part section below)
`| Line | Original | Hebrew rendering | Bible | Tag | Comment |` — the Bible column starts with a backticked, vocalized quotation followed by its reference `(דברים יג:ז)` (checked by `tools/check_bible_quotes.py`); one row per (line, verse) pair; a restored or Tayinat-only basis is said in the Comment.

## Status (2026-10-17)
**Complete (first draft).** 703 Hebrew lines: 691 composite entries (i–iv, 1–670, A-lines) + Tayinat-only entries (T i 4–11, T i 34, T vi 45–47, and others listed in the Parts). Seven annotated part files (`annotated-1--sections-1-9.rtl.md` … `annotated-7--sections-90-107.rtl.md`), each with three review passes (Part sections below); coordinator harmonization (end of this file); `verify.py` 0 problems (three REVIEW lines justified); `check_bible_quotes.py` 0 mismatches on all files; `translation.rtl.md` built by `build_translation.py` (header `build_translation--head.rtl.md`); parallels merged by `build_parallels_index.py` into `../parallels-index.md` (771 rows) with the key findings there. To rebuild the part data: `python3 -I build_data.py ../../sources/ORACC/saao-saa02--Q009186--Esarhaddon-Succession-Treaty && python3 -I make_parts.py` (in a scratch directory). Known limitation: names are vocalized at their first occurrence in each *part*, so the clean translation vocalizes some names more than once.

**Open decisions for the user:** the four below, plus the lists in each Part section ("Open decisions for the user (part N)"). The most consequential: *adê* = `אֲמָנָה` vs `עֵדֹת`; biblical royal names; *raggimu* = `נָבִיא`; Tayinat *pluses* in the apparatus only (Part 4, 1); 418B and 466 (Part 5); *ikkibu* = `איסור` vs `תועבה` (Part 5); 628 `גִּלְגֵּל` vs `עִוֵּר` and 630 (Part 7).

## Open decisions for the user
1. *adê*: `אֲמָנָה` (chosen) or `עֵדֹת` (the debated cognate). See `../renderings.md` §2.
2. Biblical forms for kings (`אֵסַרְחַדּוֹן`, `סַנְחֵרִיב`) vs Akkadian forms (`אַשּׁוּר־אַחַ־אִדִּינָה`); Assurbanipal kept Akkadian.
3. *raggimu* = `נָבִיא`: a deliberate [equivalent] in the Deut 13 passage. The alternative (`מַכְרִיז`, the literal "caller") would hide that the treaty lists a prophet at all.
4. *maḫḫû* = `מְשֻׁגָּע` (Jer 29:26; 2 Kgs 9:11) – modern readers hear "madman".
(The parts add their own below.)

## Progress log
- 2026-10-17: parts 1–7 drafted sequentially (one sub-agent each), coordinator harmonization, translation and parallels index built, print stub created.
- 2026-10-17: base text secured (zip + HTML), `cdl2md.py --norm` added, `oracc_html2tr.py` written; source README; corpus files; renderings fixed; part data prepared (7 parts: i–107, 108–236, 237–352, 353–413, 414–493, 494–611, 612A–670).

## Part 1: seal captions, §1–§9 (lines i–107)

### Scope
- Seal captions i–iv and P&W §1–§9, composite lines 1–107 with 40A–40B: **113 composite entries**, plus **9 Tayinat-only entries** (`T i 4`–`T i 11`: the officials of Kunalia, who replace Ḫumbareš's family in Tayinat; `T i 34`: one more city in the oath list). File: `annotated-1--sections-1-9.rtl.md`.
- Tayinat coverage: seal captions (T 1–4, no column), col. i 1–38, 44′–52′, 62′–80′, col. ii 1–5. Nothing from 79 on (col. ii broken, col. iii 1–4 empty).

### Decisions (translator, part 1)
1. **First occurrences established here** (vocalized once in this part): `אַשּׁוּר` (i: the god; 1: the land), `אֵסַרְחַדּוֹן` (1), `סַנְחֵרִיב` (2), `אַשּׁוּר־בָּנִי־אַפְלִי, בֶּן־הַמֶּלֶךְ הַגָּדוֹל שֶׁל בֵּית הַיְּרוּשָּׁה` (11), `שָׂם` (12), the planets (13–15), the gods (16–20), the cities (20, 22, 31–37), `שַׁמַשׁ־שׁוּם־אוּכִּין` and `כַּרְדוּנְיָאשׁ` (86, 88). **Note:** renderings §1 gives the vocalized crown-prince formula as `…בֵּית הַיְּרֻשָּׁה`, which strips to `הירשה`, not the required `הירושה`; I wrote `הַיְּרוּשָּׁה` (plene with shuruk). Please correct renderings §1.
2. **Footnote on the crown-prince formula at 11**, its first occurrence in the clean text (11–12 are an editorial supplement ⟨ ⟩ in the Nimrud copies, confirmed by Tayinat T i 17–19), not at 43; 43 refers back.
3. **MIN in §3 (26–40A) = `כנ״ל`.** The Akkadian has MIN (not KI.MIN), standing for *titammā* "swear!" of 25. Rendered by the corpus rule for KI.MIN (the scribe's abbreviation, explained at the first occurrence, l. 26). The oath preposition `ב־` is supplied in Hebrew in 26–30 (`באנו, אנליל, אאה – כנ״ל`), not bracketed (grammatical mapping of the Akkadian accusative of the oath). 40B has no MIN in the composite (P&W supply "Ditto").
4. **Implicit *šumma*:** where the oath clauses continue in the subjunctive without *šumma* after a non-oath sentence (50, after the positive statements 46–49), Hebrew adds `(אם)`; without it `לא תנצרו אותו` reads as a prohibition, the opposite of the meaning. Inside a running *šumma* clause no `(אם)` is added.
5. **Akkadian asyndeton → Hebrew `ו` without brackets** in pairs and series of verbs/nouns (as the fixed formula `חיזק ושׂם` already does): `הגדולים והקטנים`, `הזכיר והפקידו`, `ואת המלכות ואת האדנות`, `וכרדוניאש`. Genuinely added words remain in `( )`.
6. **Split formulas.** When the Akkadian line breaks inside a fixed formula whose Hebrew word order differs, the Hebrew follows the Akkadian order line by line (the exact split strings are in "Proposals" below); within one line the fixed string stays letter for letter (61 `ולא יעשה עליכם את המלכות ואת האדנות של אשור`; 72 `תישבעו אלה למלך אחר, לבן־מלך אחר`).
7. ***ana šīmti alāku*** is conjugated: `ילך לגורלו` (46, 84: perfect *ittalak* in a temporal/conditional clause = future perfect).
8. **Tayinat officials** (T i 4–11) as separate entries, though SAAo labels them `o 4`: their content is not in the composite. T i 13–17 (Tayinat's different order of 9–10, 6–8, 11) stay in the apparatus of the composite lines.
9. **Reserved roots kept free:** `אמנ` only for *adê* (so *kīnūtu* = `כֵּנוּת`, not `נאמנות`); `חזק` only for *dunnunu* (so *kullu* = `קיים`); `שׂם` only for *šakānu*; *milku* / *malāku* = `עצה` / `יעץ` (not the cognate `מלך`, which would read "king").
10. **Bible quotations** follow the repository's edition and its verse numbering (e.g. 1 Sam 24:6 = standard 24:7 for `לִשְׁלֹחַ יָדִי בּוֹ`).

### Open decisions for the user (part 1)
1. **Nusku (resolved by the coordinator: `נוּסְכּוּ`, as in the creation corpus; corpus renderings corrected):** corpus renderings §1 has `נוּסְקוּ`, the creation corpus `נוּסְכּוּ` (Akk. *k* = `כ`). I followed the binding corpus file (`נוסקו`, 18, 28); I recommend `נוּסְכּוּ` for all corpora.
2. **MIN = `כנ״ל`** (as KI.MIN) or written out `(הישבעו)` in every line.
3. **`(אם)` at 50** (Decision 4), or translate 50–54 as positive duties (P&W "You shall protect him").
4. ***qinnu* = `קִנּוֹ`** (cognate, Hab 2:9 sense "house, family"; 77) or the plain `משפחתו`.
5. ***ummiānu* = `הָאֻמָּנִים`** (the loan `אָמָּן`; 79, T i 10) or `החכמים` (meaning: the court scholars).
6. ***bēlu* in "bēl X" compounds = `בַּעַל`** (T i 8 `בעלי המרכבות, בעלי הפרשים`, ↔ `בַּעֲלֵי הַפָּרָשִׁים`, 2 Sam 1:6), *bēlu* alone = `אדון`.

### Progress log (part 1)
- 2026-10-17: read the guidelines, corpus and project files; parsed and drafted i–107 unvocalized, with the Tayinat lines; then PW/Lauinger compared (disagreements recorded: PW's positive paraphrase of the oath clauses, 50; PW "lord" in 72 from Tayinat; PW "this" and "born" in 10; PW "in every respect" in 54; PW's "each individually" for *titammā*, 25).
- Review pass (a) fidelity: every word of each normalization checked against its `>` line; brackets ⟨ ⟩ for SAAo `<…>` (2, 4, 9, 11–12, 37, 38), `[ ]` for 40B and Tayinat restorations; added words only in `( )` (24, 50, 82, 105). Fixed: the seal-caption Tayinat labels (T 1–4, not T i 1–4).
- Review pass (b) consistency: identical normalizations → identical Hebrew (63 = 93; 92 = 101; 94 = 103; 52/99, 51/98, 50/65/100, 66/105, 67/106, 67/107 parallel); renderings §1 formulas checked by `verify.py`; split formulas listed below.
- Review pass (c) Hebrew: read aloud; vocalized ambiguous words (`חוֹתַם`, `שִׁחְטוּ`, `הַפַּחוֹת`, `לִבְנוּת־הַמֶּלֶךְ`, `מְשִׁיבֵי הַדָּבָר`, `הָאֻמָּנִים`, `תַּתְפִּישׂוּ`, `תִּכְלְאוּ`, `שַׁמַשׁ`); grep of the `>` lines for the reserved words of Decision 7 and the roots of Deut 6:5, 13:1–19, 28, 29:9–20: the only overlaps are the tagged ones (`ישנם` ↔ 29:14; `בשדה ובתוך העיר` ↔ 28:3, 16; `מלך אחר` ↔ 13:3; `תשמעו` ↔ 13:13; root `סתר` of `תסתירו` ↔ `בַּסֵּתֶר`, 13:7).
- `verify.py 1`: 0 problems. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches.

### Parallels index (part 1)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| i | *kunuk Aššur* | חותם אשור | `וְנַחְתּוֹם בְּטַבַּעַת הַמֶּלֶךְ אֵין לְהָשִׁיב` (אסתר ח:ח) | [equivalent] | The seal makes the document irrevocable; here the god's seal. Our proposal. |
| ii | *ša lā šunnê* | אשר אין לשנותו | `דִּי לָא לְהַשְׁנָיָה כְּדָת מָדַי וּפָרַס` (דניאל ו:ט) | [cognate] | Aramaic `שנה` of a written, sealed royal decree (6:18 the sealing). Our proposal. |
| ii | *ša lā šunnê* | אשר אין לשנותו | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | "Not alter" vs "not add, not subtract"; see 58. |
| 1 | *adê* | האמנה | `אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | `בְּרִית` kept out of the translation (Decision 1). |
| 1 | *adê* | האמנה | `שְׁנֵי לֻחֹת הָעֵדֻת` (שמות לא:יח) | [cognate?] | *adê* ~ `עֵדֻת`: debated etymology. |
| 1 | *adê* | האמנה | `וַיִּתֵּן עָלָיו אֶת הַנֵּזֶר וְאֶת הָעֵדוּת` (מלכים ב יא:יב) | [cognate?] | `עֵדוּת` given to the crown prince at his enthronement, after the guards' oath (11:4). |
| 1 | *adê* | האמנה | `בְּרִיתִי וְעֵדֹתִי זוֹ אֲלַמְּדֵם` (תהלים קלב:יב) | [cognate?] | A dynastic succession oath (sons on the throne) with `עֵדֹת`; the link to *adê* of a succession treaty is our proposal. |
| 1 | *adê* | האמנה | `אֲנַחְנוּ כֹּרְתִים אֲמָנָה וְכֹתְבִים` (נחמיה י:א) | [equivalent] | Source of the rendering: a written, sealed agreement. |
| 3 | (T) *pāḫat Kunalia* | (apparatus) פחת כונליה | `פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Tayinat only; *šaknu* = `סגן` in T i 7. Loans. |
| 5 | *ṣehru u rabiu* | קטן וגדול | `וְכָל הָעָם לְמִקָּטֹן וְעַד גָּדוֹל` (מלכים ב כג:ב) | [equivalent] | All ranks at a covenant ceremony. Our proposal. |
| 5, T i 4–12 | the swearers, all ranks | אנשי ידו כולם… | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [equivalent] | The ranked list of officials is in Tayinat only (T i 4–11). |
| 5 | *mala bāšû* | כל אשר ישנם | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ` (דברים כט:יד) | [equivalent] | *bašû* "exist" = `יֵשׁ`; with 10 (*ibbaššûni*) ↔ `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה`. Our proposal. |
| 6 | *issu napāh šamši adi raba šamši* | ממזרח השמש עד מבוא השמש | `מִמִּזְרַח שֶׁמֶשׁ עַד מְבֹאוֹ` (תהלים נ:א) | [equivalent] | Tayinat *erēb šamši* "entry of the sun" = `מְבוֹא` exactly (`מְבוֹא הַשֶּׁמֶשׁ`, דברים יא:ל); *erēbu* ~ `ערב` [cognate]. |
| 8 | *šarrūtu bēlūtu … uppašūni* | …את המלכות ואת האדנות / עושה עליהם | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | Same idiom "do kingship over"; also 49, 61. |
| 9 | *marʾēkunu mār marʾēkunu* | בניכם, בני בניכם | `וְהוֹדַעְתָּם לְבָנֶיךָ וְלִבְנֵי בָנֶיךָ` (דברים ד:ט) | [equivalent] | Tayinat: "their men" instead. |
| 10 | *ša urki adê ana ūmē ṣâti ibbaššûni* | אשר יהיו אחרי האמנה לימי עד | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת` (דברים כט:יג) | [equivalent] | The oath binds future generations (known in the literature). |
| 10 | same | same | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | |
| 10 | *ana ūmē ṣâti* | לימי עד | `גַּם בְּנֵיהֶם עֲדֵי עַד יֵשְׁבוּ לְכִסֵּא לָךְ` (תהלים קלב:יב) | [equivalent] | Succession "for ever" in a dynastic oath. Our proposal. |
| 11 | *mār šarri* | בן־המלך | `וְיוֹתָם בֶּן הַמֶּלֶךְ עַל הַבַּיִת` (מלכים ב טו:ה) | [equivalent] | The title of the heir acting for his father. Line 11 is ⟨ ⟩ in Nimrud, attested in Tayinat. |
| 12 | *adê … iškunūni* | שׂם אתכם אמנה | `כִּי בְרִית עוֹלָם שָׂם לִי` (שמואל ב כג:ה) | [equivalent] | *adê šakānu* ~ `שׂים בְּרִית` of David's dynastic covenant; ⟨ ⟩ in Nimrud, Tayinat T i 19. Our proposal. |
| 13–15 | the planets as witnesses | לפני סגמגר, דלבת… | `וְרָאִיתָ אֶת הַשֶּׁמֶשׁ וְאֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים כֹּל צְבָא הַשָּׁמַיִם` (דברים ד:יט) | [divergence] | Witnesses here; forbidden worship there (also 17:3). |
| 13–15 | same | same | `וַיִּשְׁתַּחוּ לְכָל צְבָא הַשָּׁמַיִם` (מלכים ב כא:ג) | [equivalent] | Manasseh, Esarhaddon's vassal. |
| 14 | *Kayyamānu* | כימנו | `וְאֵת כִּיּוּן צַלְמֵיכֶם כּוֹכַב אֱלֹהֵיכֶם` (עמוס ה:כו) | [cognate] | Saturn (standard identification). |
| 21 | *ilāni āšibūti šamê u kaqqiri* | האלים יושבי השמים והארץ | `הַעִידֹתִי בָכֶם הַיּוֹם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים ד:כו) | [divergence] | Gods of heaven and earth as witnesses vs heaven and earth themselves (also 30:19). Standard comparison. |
| 21 | same | same | `וְאָעִידָה בָּם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים לא:כח) | [divergence] | |
| 25 | *Aššur … titammā* | באשור … הישבעו | `וּבִשְׁמוֹ תִּשָּׁבֵעַ` (דברים ו:יג) | [equivalent] | Oath by the god (also 10:20); cf. Josh 23:7. |
| 45 | *ipqidūšūni* | הפקידו | `וַיַּפְקִדֵהוּ עַל בֵּיתוֹ` (בראשית לט:ד) | [cognate] | *paqādu* = `פקד` "appoint". |
| 46 | *ana šīmti ittalak* | ילך לגורלו | `אָנֹכִי הֹלֵךְ בְּדֶרֶךְ כָּל הָאָרֶץ` (מלכים א ב:ב) | [equivalent] | David before handing the kingdom to Solomon. |
| 47–48 | *ina kussie šarrūti tušeššabba* | על כסא / המלכות תושיבו | `וְהוּא יֵשֵׁב עַל כִּסְאִי תַּחְתָּי` (מלכים א א:ל) | [equivalent] | Succession fixed by oath in the father's lifetime; *ina kūmuššu* (56) = `תַּחְתָּי`. Our proposal for the verbal match. |
| 48 | same | same | `וְהָיָה כְשִׁבְתּוֹ עַל כִּסֵּא מַמְלַכְתּוֹ` (דברים יז:יח) | [equivalent] | |
| 49 | *ina eqli ina birti āli* | בשדה ובתוך העיר | `בָּרוּךְ אַתָּה בָּעִיר וּבָרוּךְ אַתָּה בַּשָּׂדֶה` (דברים כח:ג) | [equivalent] | The merism "everywhere"; also 99. |
| 49 | same | same | `אָרוּר אַתָּה בָּעִיר וְאָרוּר אַתָּה בַּשָּׂדֶה` (דברים כח:טז) | [equivalent] | |
| 50 | *lā tanaṣṣaršūni* | (אם) לא תנצרו אותו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | Also 65, 100. |
| 50 | same | same | `וְשָׁמְרוּ אֶת מִשְׁמֶרֶת בֵּית יְהוָה אֶל הַמֶּלֶךְ` (מלכים ב יא:ז) | [equivalent] | The sworn guard around the crown prince (11:4–8). |
| 50–51 | *ina muhhīšu lā tamaqqutāni lā tamuttāni* | בעדו לא תיפלו, לא תמותו | `אִם לְמָוֶת אִם לְחַיִּים כִּי שָׁם יִהְיֶה עַבְדֶּךָ` (שמואל ב טו:כא) | [equivalent] | Ittai's loyalty oath to David, also in the `אִם` form. Our proposal. |
| 51 | *ina ketti ša libbikunu* | באמת לבכם | `בֶּאֱמֶת וּבְלֵב שָׁלֵם` (ישעיהו לח:ג) | [equivalent] | Also 98. |
| 51, 53 | *ina ketti ša libbi*; *ša gammurti libbi* | באמת לבכם; שבשלמות לבכם | `וַעֲבַדְתֶּם אֹתוֹ בֶּאֱמֶת בְּכָל לְבַבְכֶם` (שמואל א יב:כד) | [equivalent] | Both treaty phrases in one verse. Our proposal. |
| 53 | *ša gammurti libbikunu* | שבשלמות לבכם | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | `בְּכָל לְבַבְכֶם` kept out (Decision 7). |
| 53 | same | same | `הֲיִשְׁכֶם אֹהֲבִים אֶת יְהוָה אֱלֹהֵיכֶם בְּכָל לְבַבְכֶם` (דברים יג:ד) | [equivalent] | |
| 54 | *hūlu damqu ina šēpīšu … tašakkanāni* | דרך נאה לרגליו … תשימו | `וְיָשֵׂם לְדֶרֶךְ פְּעָמָיו` (תהלים פה:יד) | [equivalent] | "Set a way for the feet". Our proposal. |
| 55 | *issu libbi ahhēšu* | מקרב אחיו | `מִקֶּרֶב אַחֶיךָ תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] | Our proposal; the treaty forbids a king from among the heir's brothers. |
| 55–57 | a brother on the throne | … על כסא אשור תושיבו | `וַאֲדֹנִיָּה בֶן חַגִּית מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [equivalent] | The scenario the clause forbids. |
| 58 | *tennâni tušannâni* | תמירו, תשנו | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Alter vs add/subtract (Levinson; cited from memory). |
| 58 | same | same | `לֹא תֹסִפוּ עַל הַדָּבָר` (דברים ד:ב) | [divergence] | |
| 58 | *šunnû* | תשנו | `עִם שׁוֹנִים אַל תִּתְעָרָב` (משלי כד:כא) | [cognate] | `שׁוֹנִים` beside "fear God and king": those who "change" (their loyalty)? Our proposal; the sense of `שׁוֹנִים` is debated. |
| 60 | *ukallimkanūni* | הראה לכם | `וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] | Oath + "showing" the crown prince; also 63, 93. |
| 60 | *hannumma lā tadaggalāni* | אל זה עצמו לא תביטו | `עֵינֵי כָל יִשְׂרָאֵל עָלֶיךָ` (מלכים א א:כ) | [equivalent] | *dagālu* "look to" = serve. Our proposal. |
| 66 | *ina libbīšu tahaṭṭâni* | תחטאו בו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | A vassal's sin against the Assyrian king (Hezekiah to Sennacherib); also 105. |
| 66–67 | *qātkunu ana lemutti ina libbīšu tubbalāni* | את ידכם לרעה / תשלחו בו | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | Also 105–106. |
| 66–67 | same | same | `אִם אֶעֱשֶׂה אֶת הַדָּבָר הַזֶּה לַאדֹנִי לִמְשִׁיחַ יְהוָה לִשְׁלֹחַ יָדִי בּוֹ` (שמואל א כד:ו) | [equivalent] | David's oath against raising his hand, in the `אִם` form. |
| 67 | *bārtu* | קשר | `וַתִּקְרָא קֶשֶׁר קָשֶׁר` (מלכים ב יא:יד) | [equivalent] | Also 107. |
| 71 | *šarru šanumma bēlu šanumma* | מלך אחר, אדון אחר | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Another king → other gods (also 13:7, 14). Known in the literature. |
| 71 | *ina muhhikunu tašakkanāni* | עליכם תשימו | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] | "Set a king over you" and the ban on another. Our proposal. |
| 72 | *māmīt tatammâni* | תישבעו אלה | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | The vassal oath to the king of Babylon. |
| 72 | same | same | `לְעָבְרְךָ בִּבְרִית יְהוָה אֱלֹהֶיךָ וּבְאָלָתוֹ` (דברים כט:יא) | [equivalent] | |
| 76–77 | the heir's kin as source of the evil word | בין מפי אחיו, אחי אבותיו… | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ אוֹ בִנְךָ אוֹ בִתְּךָ` (דברים יג:ז) | [divergence] | Here the crown prince's kin, in Deut the hearer's (the swearers' kin: §10). |
| 77 | *qinnīšu* | קנו | `לָשׂוּם בַּמָּרוֹם קִנּוֹ` (חבקוק ב:ט) | [cognate] | "Nest" = house, family. |
| 77 | *pāhāti* | הפחות | `פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Loan. |
| 78 | *ša-rēšāni* | הסריסים | `שְׁנֵי סָרִיסֵי הַמֶּלֶךְ` (אסתר ב:כא) | [cognate] | Loan; a eunuchs' plot reported to the king (2:21–22). |
| 80 | *tašammâni* | תשמעו | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ` (דברים יג:יג) | [cognate] | |
| 80 | *tupazzarāni* | תסתירו | `וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Known in the literature. `כִּסָּה` kept out. |
| 80 | (Hebrew root only) | תסתירו | `בַּסֵּתֶר` (דברים יג:ז) | — | The rendering shares the root `סתר` with 13:7, the Akkadian does not: a translation echo, recorded so it is not taken for evidence. |
| 81–82 | *lā tallakāninni … lā taqabbâni* | לא תבואו אל … ולא תאמרו (לו) | `וַיִּוָּדַע הַדָּבָר לְמָרְדֳּכַי וַיַּגֵּד לְאֶסְתֵּר הַמַּלְכָּה` (אסתר ב:כב) | [equivalent] | Reporting a palace plot. |
| 89–91 | *tidintu … iddinaššūni … ubbal* | המתנה … נתן לו … יוביל | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [equivalent] | The father's gifts to the heir's brothers, the kingdom to the heir. *tidintu* ~ `מַתָּנָה` [cognate]. Our proposal. |
| 91 | *issēn lā takallā* | אחת לא תכלאו | `לֹא תִכְלָא רַחֲמֶיךָ מִמֶּנִּי` (תהלים מ:יב) | [cognate] | *kalû* = `כלא` "withhold". |
| 94 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | Also 103; here the objects of loyalty. |
| 96 | *kettu šalimtu* | אמת שלמה | `בֶּאֱמֶת וּבְלֵבָב שָׁלֵם` (מלכים ב כ:ג) | [cognate] | *šalmu* = `שָׁלֵם`. |
| 97 | *ina kēnāte* | בכנות | `כֵּנִים אֲנַחְנוּ` (בראשית מב:יא) | [cognate] | *kīnu* = `כֵּן` "honest". |
| T i 5 | *tašlīšāni* | השלישים | `וְשָׁלִשִׁם עַל כֻּלּוֹ` (שמות יד:ז) | [cognate] | Tayinat only. |
| T i 8 | *bēl pēthallāti* | בעלי הפרשים | `וְהִנֵּה הָרֶכֶב וּבַעֲלֵי הַפָּרָשִׁים` (שמואל ב א:ו) | [equivalent] | Tayinat only; nearly word for word. Our proposal. |
| T i 9 | *kallābāni* | הרצים | `לַכָּרִי וְלָרָצִים` (מלכים ב יא:ד) | [equivalent] | Tayinat only; depends on the sense of *kallābu*. Our proposal. |

### Proposals for the renderings (part 1; plain strings as they appear in the `>` lines)
- **Seal captions:** *kunuk Aššur šar ilāni* = `חותם אשור, מלך האלים`; *ša lā šunnê* = `אשר אין לשנותו`; *ša lā paqāri* = `אשר אין לערער עליו`; *rubû* = `שליט`.
- **The crown-prince formula, split forms:** `אשור־בני־אפלי, בן־המלך הגדול` | `של בית הירושה` (58–59, 81–82, 84–85, 94–95, 103–104); without the name: `בן־המלך הגדול של בית הירושה` (75); without *rabiu*: `בן־המלך של בית הירושה` (86). *mār šarrūtu* = `בנות־המלך` (vocalized `לִבְנוּת־הַמֶּלֶךְ`). *mār šarri šanimma* = `בן־מלך אחר`.
- **Relative clauses on the heir:** *ša Aššur-ahu-iddina šar Mat-Aššur ukallim(ū)kanūni* = `אשר אסרחדון, מלך אשור, הראה לכם` (63, 93; with *bēlkunu*: `אשר אסרחדון, מלך אשור, אדונכם, / הראה לכם`, 59–60); *… iqbakkanūni* = `אשר אסרחדון, מלך אשור, אמר לכם` (102; `אמר לכם` 64).
- **The *adê šakānu* formula, split forms:** `ואשר עליו אמנה אתכם` | `חיזק ושׂם` (64–65); `אשר עליהם אמנה אתכם` | `שׂם` (104–105); with the subject inside: `אשר אסרחדון, מלך אשור, עליהם` | `שׂם אתכם אמנה` (95–96); without *adê* (after "the treaty which"): `שׂם אתכם` (42).
- **Kingship formula, split forms:** `ואת המלכות ואת האדנות` | `של אשור יעשה עליכם` (48–49); `את המלכות ואת האדנות` | `עושה עליהם` (7–8, 3rd person, present); in an oath clause: `ולא יעשה עליכם את המלכות ואת האדנות של אשור` (61).
- **Throne:** `על כסא` | `המלכות תושיבו` (47–48); `על כסא המלכות של בבל` | `תושיבו` (87–88); *ina kūmuššu* = `תחתיו`; *issu libbi ahhēšu (rabiūti ṣehrūti)* = `מקרב אחיו (הגדולים והקטנים)`; *kussie Mat-Aššur tušaṣbatāni* = `את כסא אשור תתפישו` (ṣabātu Š = `התפיש`, vocalized `תַּתְפִּישׂוּ` at first occurrence); *tunakkarāšūni* = `תסירו אותו`; *ina šarrūti Mat-Aššur … nukkuru* = `מן המלכות של אשור … תסירו אותו`.
- ***ana šīmti ittalak*** (future context) = `ילך לגורלו`; *kīma* = `כאשר`.
- **Oath clauses:** *ina muhhīšu lā tamaqqutāni lā tamuttāni* = `בעדו לא תיפלו, לא תמותו`; *issīšu lā tadabbubāni* = `עמו לא תדברו` (pl. `עמם`); *milku damqu* = `עצה נאה`; *malāku* = `יעץ` (`תיעצו לו`); *hūlu damqu ina šēpīšu šakānu* = `דרך נאה לרגליו … תשימו`; *ina libbīšu tahaṭṭâni* = `תחטאו בו`; *qātkunu ana/ina lemutti* | *ina libbīšu tubbalāni* = `את ידכם לרעה` | `תשלחו בו` (pl. `בהם`); *epšu bārtu abutu lā ṭābtu* | *lā damiqtu teppašāniššūni* = `מעשה, קשר, דבר לא טוב,` | `לא נאה, תעשו לו` (pl. `תעשו להם`); *šarru šanumma bēlu šanumma ina muhhikunu tašakkanāni* = `מלך אחר, אדון אחר עליכם תשימו`; *ana šarri šanimma mār šarri šanimma māmīt tatammâni* = `תישבעו אלה למלך אחר, לבן־מלך אחר`.
- **Implicit *šumma*:** `(אם)` (Decision 4).
- **§6 informer formula:** *abutu lā ṭābtu lā banītu* = `דבר לא טוב, לא יפה`; *lā tarṣu* = `לא הגון` (*tarṣu* = `הגון`); *ša epēš šarrūte* = `על עשיית המלכות`; *lā tarṣatūni lā ṭābatūni* = `שאינו הגון, שאינו טוב`; *lū ina pî ahhēšu ahhē abbēšu mār ahhē abbēšu* = `בין מפי אחיו, אחי אבותיו, בני אחי אבותיו`; *qinnīšu zār bēt abīšu* = `קנו, זרע בית אביו`; *rabiūti pāhāti* = `הגדולים, הפחות` (vocalized `הַפַּחוֹת`); *ša-ziqni ša-rēšāni* = `בעלי הזקן, הסריסים`; *ummânī* = `האמנים` (always vocalized `הָאֻמָּנִים`); *naphar ṣalmāt qaqqadi* = `כלל שחורי הראש`; *mala bāšû* = `כל אשר ישנם`; *tašammâni tupazzarāni* = `תשמעו, תסתירו`; *lā tallakāninni ana* = `לא תבואו אל`; *lā taqabbâni* = `ולא תאמרו (לו)`.
- **§8:** *kettu šalimtu* = `אמת שלמה`; *kullu* = `קיים` (`לא תקיימו`); *ina kēnāte tarṣāti* = `בכנות הגונה`; *wabālu* Gtn with a person = `נהג ב־ … תמיד` (`לא תנהגו בהם תמיד`); *lā tanaṣṣarāšunūni* = `לא תנצרו אותם`.
- **§7:** *ina ṣahāri ša marʾēšu* = `בקטנות בניו`; *ahi talīmēšu* = `אחיו השווה לו`; *tidintu* = `המתנה`; *wabālu* G "carry" = `הוביל` (`יוביל`); *kalû* = `כלא`; *issēn* = `אחת`; *dagālu* Š = `העמיד לפני`; *dagālu* G = `הביט אל`.
- **§1:** *ammar* = `כל אשר`; *ṣābāni qātīšu (gabbu)* = `אנשי ידו (כולם)`; *ṣehru u rabiu* = `קטן וגדול`; *bēl āli* = `אדון העיר`.
- **§2–3:** *ilāni āšibūti šamê u kaqqiri* = `האלים יושבי השמים והארץ`; *ilāni ša šamê u kaqqiri* = `האלים של השמים והארץ`; *ilāni GN* = `האלים של GN` (never `אלי`); *ilāni kališunu ša GN MIN* = `כל האלים של GN – כנ״ל`; *ilāni GN kališunu MIN* = `האלים של GN כולם – כנ״ל`; *titammā* = `הִשָּׁבְעוּ!`; MIN = `כנ״ל` (KI.MIN rule); *udanninūni iṣbatu iškunūni* = `חיזק, / תפש ושׂם`.
- **Tayinat officials:** *šanû* = `המשנה`; *rab bēti* = `רב הבית`; *ṭupšarru* = `סופר`; *mukīl appāti* = `אוחז המושכות`; *tašlīšu* = `שליש`; *rab ālāni* = `ראש העיירות`; *mutīr ṭēme* = `משיב הדבר` (vocalized); *šaknu* = `סגן`; *rab kiṣri* = `שר גדוד`; *bēl mugirri* = `בעל מרכבה`; *bēl pēthalli* = `בעל פרשים`; *zakkû* = `פטור`; *kallābu* = `רץ`; *ša arīti* = `נושא המגן`; *kitkittû* = `חרש`; *pīḫātu* = `פחה`.

### Lessons for the guidelines (part 1)
- **Vocalized first occurrences must strip to the plain plene string**: the renderings' `הַיְּרֻשָּׁה` strips to `הירשה`; vocalize plene words with their *matres* (`הַיְּרוּשָּׁה`). Check every vocalized formula by stripping it before it goes into a renderings table.
- **Fix the split forms of every fixed formula whose Hebrew word order differs from the Akkadian**, not only the whole string: EST breaks lines inside its formulas constantly.
- **NA oath clauses without *šumma*** (subjunctive *-ni* after a positive sentence) need `(אם)`, or the Hebrew reads as a prohibition.
- **SAAo labels:** Tayinat's seal captions are `T 1–4` (no column), not `T i 1–4`; Tayinat lines labelled with a composite line may still have no composite text (T i 4–11): give them their own entries.
- **`check_bible_quotes.py` reads a bare reference after "של" as Genesis**: always put the reference in parentheses right after the quotation.

## Part 2: §10–§21 (lines 108–236)

### Scope
- P&W §10–§21, composite lines 108–236: **129 composite entries**, no Tayinat-only entries. File: `annotated-2--sections-10-21.rtl.md`.
- Tayinat coverage: practically none. Col. ii is broken after T ii 5 (= l. 78); col. iii has one readable line, **T iii 5** (= end of 178 + 179, "?" in SAAo), entered under 178; T iii 1–4 and 6–12 are `[...]` (no entries). Col. iv starts at 257.

### Decisions (translator, part 2)
1. **Real conditions with an oath apodosis get `(אם)`** at the start of the oath clause (coordinator note after part 1): 136, 139, 143 (after *šumma memmēni …*, *šumma ammar …*), 153 (`(אם עם)`, a new oath clause without *šumma*; "with" as in PW), 167, 178. Inside a running *šumma attunu* clause no `(אם)`.
2. **Clauses without the subjunctive *-ni* are direct prohibitions** (§18): 201 *lā tašmeāšu*, 205 *lā tašammeāšu lā turammâšu*, 206 *lā illak* = `לא תשמעו לו`, `לא תרפו ממנו`, `לא ילך` – no `(אם)`. 201 *tašmeā* is formally a preterite (present *tašammeā* in 205): read as a prohibition with PW.
3. ***nabalkutu* = `פָּשַׁע (ב־)`** (175, 186): the biblical verb of a vassal's revolt (2 Kgs 1:1; 3:5; 8:20), kept apart from *sīḫu* = `מֶרֶד` and *bārtu* = `קֶשֶׁר`.
4. ***ḫalāqu* G "flee" = `נִמְלַט`** (178, `לא תימלטו`): **deviation** from the corpus renderings (*ḫalāqu* G = `אָבַד`), because `לא תאבדו` would read "you shall not perish". *ḫulluqu* D stays `אִבֵּד` (134, 141, 161); *abātu* N "flee" = `בָּרַח` (217).
5. ***ēkallu* = `הֵיכָל`** [cognate; a loan through Akkadian] (198–211, 217–218).
6. ***râmu*, first occurrence (207)** = `אוהב` with the Moran note and the *rḥm* question; ***ramû* D (205)** = `תַּרְפּוּ ממנו` – both vocalized/noted so the two never meet.
7. ***tamû* D *ahēʾiš*** (156, 213) = `זה את זה תשביעו` (D, not Gt as the brief suggested: *tu-tamma* is the D present; Gt would be *tittamâ*). `verify.py` flags `תשביעו` (its *tamû* regex lacks `שביע`): justified.
8. **Brackets inside fixed formulas** follow the composite: 130 `בן־[המלך הגדול]`, 188 `בית [הירושה]`. `verify.py` flags both (it compares the formula without stripping brackets): justified. Also bracketed: 129 `[תישבעו]`, 133 `[להרגו]`, 181 `[ביום]`, 202 `[ב]לא`, 205 `[תשמעו]`, 206 `[נְצִירָתוֹ]`.
9. **SAAo `<…>` of a plural sign only** (214 `ŠEŠ.<MEŠ>`) gets no ⟨ ⟩ in Hebrew (no word is supplied); 156 `<a-na>` likewise (the Hebrew `זה את זה` renders *ahēʾiš* with or without *ana*). 165–166 `<lu>` = `⟨בין⟩`.
10. **Roots kept consistent:** *danānu* = `חזק` in all its forms (177 `בְּחָזְקָה`, 192 `החזק`, 206 `תחזקו`); *šakānu* = `שׂם` also in *puḫra šakānu* (212 `אספה תשימו`), *issi X šakānu* (148, 176 `עמם תשימו (חלקכם)`), *ina libbi šakānu* (185 `בלבכם תשימו`); *gammuru* = `שלם` (152) beside *gummurtu* = `שלמות`; *dumqu* = `נאה` (148), since `טוב` is reserved for *ṭābu*; *alāku* = `הלך`/`בוא` (ventive) as in part 1.
11. **Line 236:** SAAo normalizes *-šunūni* but the transliteration has *-šu₂-u-ni* ("him", PW "serve him"): translated `בו`, per the transliteration.
12. **Vocalized here** (first occurrence in the part, or ambiguous): the crown-prince formula (109), `אֵסַרְחַדּוֹן`, `אַשּׁוּר` (110), `אִישׁ שְׁלוֹמוֹ`, `קִנּוֹ`, `מְשׁוּגָּע` (plene, so it strips to `משוגע`), `שׁוֹאֵל דְּבַר אֵל`, `תִּתְפְּשׂוּ`, `שָׂם`, `אָזְנֵי`, `תָּשִׂימוּ`, `גִּירָּה`, `כִּתְּרוּ`, `בְּחָזְקָה`, `יַחֲיֶה`, `כְּפִיו`, `תַּרְפּוּ`, `נְצִירָתוֹ`, `יִרְאֶה`, `הַמִּסְכֵּנוּת`, `קְנוּיִים`, `תַּתְפִּישׂוּ`.

### Open decisions for the user (part 2)
1. *nabalkutu* = `פָּשַׁע` (chosen; vassal revolt) or `מָרַד` (clearer to a modern reader, but it merges with *sīḫu* = `מֶרֶד`).
2. *ḫalāqu* G "flee" = `נִמְלַט` (178) against the corpus table's `אָבַד` (proposed correction of the corpus renderings: *ḫalāqu* G = `אָבַד` "perish, be lost", but `נִמְלַט` / `בָּרַח` when it means "flee").
3. *ēkallu* = `הֵיכָל` (cognate; also "palace" in Kings) or `אַרְמוֹן` (unambiguous in modern Hebrew).
4. *mār damqūti* = `בני האצילים` (meaning) – the rule *damqu* = `נאה` gives the unidiomatic `בני הנאים`; `בני טובים` is idiomatic but `טוב` is reserved.
5. *dāgil pāni* "one who looks at the face" = `נתין` (meaning; the image in the note) or literal `מביט פנים`.
6. *kalzu* "palace group" = `חוג` (the sense of the Akkadian is uncertain).
7. `verify.py` (coordinator): strip `[ ]` before the formula check, and add `שביע` to the *tamû* regex; then parts with damaged formulas and Hiphil `השביע` pass without manual justification.

### Progress log (part 2)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, part 1's annotated file (all `>` lines and §6, §9) and project.md "Part 1"; parsed and drafted 108–236 unvocalized from the normalization and the transliteration; then PW (and Lauinger for T iii 5) compared. Disagreements recorded: PW resolves the oath clauses into commands throughout (108, 123, 188 "shall be your king"); PW "produces (statues of) gods" for *ušeššab* "installs" (153); PW reads 147–148 as a temporal clause ("if you should come into contact"); PW "traitorous troops" (159); PW "guard duty" for *ḫurādu* (180, rendered `שירות הצבא?` to keep `שמר` out).
- Review pass (a) fidelity: every word of each normalization checked against its `>` line; brackets from the composite's transliteration (8 places, Decision 8); ⟨ ⟩ for `<lu>` (165–166); added words only in `( )`: `(לו)` 122, 152, 158; `(אותם)` 138; `(אם)` ×6; `(אם עם)` 153; `(חלקכם)` 148, 176. *ammar* in 138/142 is absorbed into `יכולים` (noted). Fixed: 214 ⟨ ⟩ removed (plural sign only); 236 suffix per the transliteration.
- Review pass (b) consistency: repeated strings checked against part 1 by grep: 113–115 = 76–77; 118–119 = 79–80; 120 = 81; 122/158 = 82 `ולא תאמרו (לו)`; 128 = 68–69; 129 ~ 72; 131 = 174; 132 = 175 (first part); 186–187 ~ 107; 228 = 61 (identical normalization, identical Hebrew); 229–231 ~ 50–51; 234–236 ~ 53–54, 97–98; 224 = 70. `verify.py 1 2` REVIEW lines: 137 `אל` vs 43 `על` for *ina muhhi* (the verb differs: "bring to" vs "concerning"), and 188 vs 92/101 (brackets only) – both justified.
- Review pass (c) Hebrew: read aloud; vocalized the ambiguous words (Decision 12; `יִרְאֶה` added at this pass, `יראה` would also read "fear"); grep of the `>` lines for the reserved words of Decision 7 (none) and the roots of Deut 6:5, 13:1–19, 28, 29:9–20: the overlaps are all tagged in the apparatus – `שמע` (119, 135, 149, 195, 201, 205), `נביא` (116), `הרג`/`המית` (127, 133, 139–140, 146, 160, 170, 193), `אבד` (134, 141, 161), `אהב` (207), `לאמר` (203–204, ↔ 13:3, 7), `קרוב`/`רחוק` (217–218 ↔ 13:8), `אחיכם, בניכם, בנותיכם` (115–116 ↔ 13:7), `עבדים` (221; root of `וְנָעָבְדֵם` 13:3 – word-for-word, no echo intended), `תלכו` (211; `הלך` cognate of *alāku*, ↔ 13:5 – a translation echo, recorded), `תסתירו` (119; root of `בַּסֵּתֶר` 13:7 – translation echo, recorded as in part 1).
- `verify.py 2`: 4 problems, all justified (Decisions 7–8: 130, 188 brackets in the formula; 156, 213 `תשביעו`). `check_bible_quotes.py` on the annotated file and this file: 0 mismatches.

### Parallels index (part 2)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 108 | *abutu lā ṭābtu* | דבר לא טוב | `וּבָא הָאוֹת וְהַמּוֹפֵת אֲשֶׁר דִּבֶּר אֵלֶיךָ לֵאמֹר` (דברים יג:ג) | [equivalent] | The offence is a spoken word in both. |
| 111 | *nakrīšu* | אויבו | `יָצְאוּ אֲנָשִׁים בְּנֵי בְלִיַּעַל מִקִּרְבֶּךָ` (דברים יג:יד) | [absent] | The treaty includes the enemy; Deut's inciters are all "from among you". |
| 112 | *salmēšu* | איש שלומו | `גַּם אִישׁ שְׁלוֹמִי אֲשֶׁר בָּטַחְתִּי בוֹ אוֹכֵל לַחְמִי` (תהלים מא:י) | [cognate] | *salmu* "ally" = `אִישׁ שָׁלוֹם` (the trusted friend who betrays). |
| 112 | same | same | `יָכְלוּ לְךָ אַנְשֵׁי שְׁלֹמֶךָ` (עובדיה א:ז) | [cognate] | Parallel to `אַנְשֵׁי בְרִיתֶךָ`: political allies. |
| 112 | same | same | `אוֹ רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ` (דברים יג:ז) | [equivalent] | The intimate who is not kin; our proposal for the pair. |
| 115–116 | *ahhēkunu marʾēkunu marʾātikunu* | אחיכם, בניכם, בנותיכם | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ אוֹ בִנְךָ אוֹ בִתְּךָ` (דברים יג:ז) | [equivalent] | The swearers' own brother, son, daughter, in the same order (from memory: Weinfeld, Steymans, Levinson). [divergence]: `בֶן אִמֶּךָ` here only of the heir's brothers (171); `אֵשֶׁת חֵיקֶךָ` [absent]. |
| 116 | *raggimu* | נביא | `כִּי יָקוּם בְּקִרְבְּךָ נָבִיא אוֹ חֹלֵם חֲלוֹם` (דברים יג:ב) | [equivalent] | The core comparison; *raggimu* "caller" is the NA term for prophet (Decision 6 of the project). |
| 116 | *raggimu* + *bārtu* | נביא; קשר | `קָשַׁר עָלֶיךָ עָמוֹס בְּקֶרֶב בֵּית יִשְׂרָאֵל` (עמוס ז:י) | [equivalent] | A priest reports a prophet's words to the king as `קֶשֶׁר`. Our proposal. |
| 116 | same | same | `וְגַם נְבִיאִים הֶעֱמַדְתָּ לִקְרֹא עָלֶיךָ בִירוּשָׁלִַם לֵאמֹר מֶלֶךְ בִּיהוּדָה` (נחמיה ו:ז) | [equivalent] | Prophets proclaiming a rival king. Our proposal. |
| 117 | *maḫḫû* | משוגע | `לְכָל אִישׁ מְשֻׁגָּע וּמִתְנַבֵּא` (ירמיהו כט:כו) | [equivalent] | Source of the rendering. |
| 117 | *maḫḫû* | משוגע | `מַדּוּעַ בָּא הַמְשֻׁגָּע הַזֶּה אֵלֶיךָ` (מלכים ב ט:יא) | [equivalent] | The prophet's disciple who anoints Jehu, followed by `וַיִּתְקַשֵּׁר` (מלכים ב ט:יד): the ecstatic as the trigger of a conspiracy. Our proposal. |
| 117 | *šāʾilu* | שואל | `וְשֹׁאֵל אוֹב וְיִדְּעֹנִי` (דברים יח:יא) | [cognate] | |
| 117 | *mār šāʾili amat ili* | שואל דבר אל | `אוֹ חֹלֵם חֲלוֹם` (דברים יג:ב) | [equivalent] | Weinfeld equates the *šāʾilu* (dream interpreter) with the dreamer (from memory); not rendered so. |
| 119 | *tašammâni* | תשמעו | `לֹא תִשְׁמַע אֶל דִּבְרֵי הַנָּבִיא הַהוּא` (דברים יג:ד) | [divergence] | Same verb: here "hear (and report)", there "listen to, obey". |
| 119 | *tupazzarāni* | תסתירו | `וְלֹא תַחְמֹל וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Known; `כִּסָּה` kept out. The root `סתר` of the rendering = `בַּסֵּתֶר` (13:7): translation echo only. |
| 120–122 | *lā tallakāninni … lā taqabbâni* | לא תבואו … ולא תאמרו (לו) | `וְהֻגַּד לְךָ וְשָׁמָעְתָּ` (דברים יז:ד) | [equivalent] | The report to the authority. |
| 126 | *taṣabbatāšūni* | תתפשו אותו | `וַיִּתְפְּשׂוּ אֹתוֹ הַכֹּהֲנִים וְהַנְּבִיאִים וְכָל הָעָם לֵאמֹר מוֹת תָּמוּת` (ירמיהו כו:ח) | [equivalent] | *ṣabātu* = `תָּפַשׂ`. |
| 129 | *māmīt tatammâni* | [תישבעו] אלה | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | The verb is restored. |
| 129, 196 | *šarru (ana šarri) šanumma bēlu šanumma* | מלך אחר, אדון אחר | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Known (see 71). |
| 133–134 | *sīḫu bārtu … iqbakkanūni* | מרד וקשר … אליכם אמר | `כִּי דִבֶּר סָרָה עַל יְהוָה אֱלֹהֵיכֶם` (דברים יג:ו) | [equivalent] | "Speak revolt" (from memory: Levinson, Weinfeld). `סָרָה` has no cognate here and is kept out; the verb is *qabû* (= `אמר`), not *dabābu*. |
| 133 | *duākīšu šamuttīšu* | [להרגו], להמיתו | `כִּי הָרֹג תַּהַרְגֶנּוּ יָדְךָ תִּהְיֶה בּוֹ בָרִאשׁוֹנָה לַהֲמִיתוֹ` (דברים יג:י) | [equivalent] + [cognate] (*mâtu* Š = `הֵמִית`) / [divergence] | Same verb pair; in the treaty the conspirators' aim, in Deut the punishment of the inciter. *duāku* partly restored. |
| 134 | *ḫulluqīšu* | לאבדו | `וַתָּקָם וַתְּאַבֵּד אֵת כָּל זֶרַע הַמַּמְלָכָה` (מלכים ב יא:א) | [equivalent] | Athaliah destroying the royal seed: the crime the treaty forbids, with the treaty's verb and noun (*ḫulluqu zēra*, 141). Our proposal. |
| 135 | *ina pî memmēni tašammāni* | מפי איש תשמעו | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ … לֵאמֹר` (דברים יג:יג) | [cognate] | Both procedures start with a report heard. |
| 135 | same | same | `וְדָרַשְׁתָּ וְחָקַרְתָּ וְשָׁאַלְתָּ הֵיטֵב` (דברים יג:טו) | [absent] | No investigation in the treaty. |
| 136–138 | *ṣabātu … ina muhhi X wabālu* | תתפשו … אל … תביאו | `וְתָפְשׂוּ בוֹ אָבִיו וְאִמּוֹ וְהוֹצִיאוּ אֹתוֹ` (דברים כא:יט) | [equivalent] | Seize and bring before the authority. |
| 139–140, 146, 160 | *lā tadūkāšanūni* etc. | לא תהרגו (אותם) | `כִּי הָרֹג תַּהַרְגֶנּוּ` (דברים יג:י) | [equivalent] | Here the swearers kill the inciters, as in Deut. |
| 140 | *šumšunu zarʾušunu* | את שמם, את זרעם | `אִם תַּכְרִית אֶת זַרְעִי אַחֲרָי וְאִם תַּשְׁמִיד אֶת שְׁמִי מִבֵּית אָבִי` (שמואל א כד:כא) | [cognate] | Seed and name in an oath in the `אִם` form. Our proposal. |
| 140–141 | same | same | `וְהִכְרַתִּי לְבָבֶל שֵׁם וּשְׁאָר וְנִין וָנֶכֶד` (ישעיהו יד:כב) | [equivalent] | |
| 141, 161 | *šumšunu … ina māti lā tuḫallaqāni* | את שמם … מן הארץ לא תאבדו | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫulluqu* = `אִבֵּד` (corpus renderings). |
| 141 | same | same | `וְאֶמְחֶה אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ט:יד) | [equivalent] | |
| 141 | same | same | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | The oath-breaker's fate; the treaty's own curse (Nabû, 660–661) uses the same formula against the swearers. |
| 141 | *ina māti* | מן הארץ | `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` (דברים יג:ו) | [equivalent] | Removal from the community. |
| 141 | *zarʾušunu ina māti … tuḫallaqāni* | זרעם מן הארץ … תאבדו | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | A royal psalm on the king's enemies: destroy + from the land + their seed. Our proposal. |
| 143–144 | *uznē … lā tupattâni* | את אזני … לא תפתחו | `אֲדֹנָי יְהוִה פָּתַח לִי אֹזֶן` (ישעיהו נ:ה) | [cognate] | Corpus renderings. |
| 144 | same | same | `כִּי קְשַׁרְתֶּם כֻּלְּכֶם עָלַי וְאֵין גֹּלֶה אֶת אָזְנִי` (שמואל א כב:ח) | [equivalent] | Saul accuses his servants of conspiracy for not informing him: `קשר` (*bārtu*), `גָּלָה אֹזֶן` (*uznā puttû*) and `חֹלֶה עַל` (*marṣu ina muhhi*, 208) in one verse. The combination is our proposal. |
| 144 | same | same | `וְלֹא גָלוּ אֶת אָזְנִו` (שמואל א כב:יז) | [equivalent] | The priests killed for not informing the king. |
| 144–145 | *issīšu lā tazzazāni* | עמו לא תעמדו | `וְיַד כָּל הָעָם בָּאַחֲרֹנָה` (דברים יג:י) | [equivalent] | If unable alone, act with others (here: with the crown prince). Our proposal. |
| 145 | same | same | `יַד הָעֵדִים תִּהְיֶה בּוֹ בָרִאשֹׁנָה לַהֲמִיתוֹ` (דברים יז:ז) | [equivalent] | |
| 147 | *ēpišānūte ša bārte lū ēṣūte lū maʾdūte* | עושי הקשר, בין מעטים, בין רבים | `וַיַּדִּיחוּ אֶת יֹשְׁבֵי עִירָם` (דברים יג:יד) | [equivalent] | A group of inciters. |
| 148, 176 | *issi X šakānu* | עמם תשימו (חלקכם) | `וְעִם מְנָאֲפִים חֶלְקֶךָ` (תהלים נ:יח) | [equivalent] | Source of the supplement `(חלקכם)`. |
| 152 | *libbakunu issīšu lā gammurūni* | לבכם עמו אינו שלם | `וְהָיָה לְבַבְכֶם שָׁלֵם עִם יְהוָה אֱלֹהֵינוּ` (מלכים א ח:סא) | [equivalent] | Heart + "with" + "whole", word for word. The exact match is our proposal. |
| 152 | same | same | `וְלֹא הָיָה לְבָבוֹ שָׁלֵם עִם יְהוָה אֱלֹהָיו` (מלכים א יא:ד) | [equivalent] | |
| 153–156 | *adê ina pān ilāni … ahēʾiš tutammâni* | אמנה לפני האלים … זה את זה תשביעו | `וַיִּכְרֹת לָהֶם בְּרִית וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה` (מלכים ב יא:ד) | [equivalent] / [divergence] | A group oath before the god: for the heir there, against him here. |
| 154 | *rikis paššūri šatê kāsi* | בעריכת שולחן, בשתיית כוס | `וְהִנָּם אֹכְלִים וְשֹׁתִים לְפָנָיו וַיֹּאמְרוּ יְחִי הַמֶּלֶךְ אֲדֹנִיָּהוּ` (מלכים א א:כה) | [equivalent] | Adonijah's feast, the pretender's banquet with the king's sons. Our proposal. |
| 154 | same | same | `וַיֹּאכְלוּ לֶחֶם וַיָּלִינוּ בָּהָר` (בראשית לא:נד) | [equivalent] | Covenant meal. |
| 155 | *šamnu* | בשמן | `וּבְרִית עִם אַשּׁוּר יִכְרֹתוּ וְשֶׁמֶן לְמִצְרַיִם יוּבָל` (הושע יב:ב) | [cognate] | Oil in treaty-making (from memory). |
| 159 | *ṣābāni bēl ḫiṭṭi* | האנשים בעלי החטא | `אֲנָשִׁים בְּנֵי בְלִיַּעַל` (דברים יג:יד) | [equivalent] | *ḫīṭu* = `חֵטְא` [cognate]. |
| 166 | *sīḫu bārtu ina muhhīšu ētapšu* | מרד וקשר עליו עשו | `וַיִּקְשֹׁר עָלָיו שַׁלֻּם בֶּן יָבֵשׁ וַיַּכֵּהוּ קָבָל עָם וַיְמִיתֵהוּ` (מלכים ב טו:י) | [equivalent] | `קשר על`. |
| 166 | same | same | `וַיִּקְשֹׁר עָלָיו פֶּקַח בֶּן רְמַלְיָהוּ שָׁלִישׁוֹ וַיַּכֵּהוּ בְשֹׁמְרוֹן בְּאַרְמוֹן` (מלכים ב טו:כה) | [equivalent] | A courtier's conspiracy inside the palace. |
| 166 | same | same | `וַיִּקְשְׁרוּ עָלָיו קֶשֶׁר בִּירוּשָׁלִַם וַיָּנָס לָכִישָׁה` (מלכים ב יד:יט) | [equivalent] | |
| 168 | *lā tanaṣṣarāšūni* | לא תנצרו אותו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | |
| 169–170 | *ṣābāni ša bārti … lā tadūkāni* | את האנשים אשר קשר עשו לו … לא תהרגו | `וַיַּךְ עַם הָאָרֶץ אֵת כָּל הַקֹּשְׁרִים עַל הַמֶּלֶךְ אָמוֹן` (מלכים ב כא:כד) | [equivalent] | The people kill the palace conspirators and enthrone the king's son – the scenario of 162–172 (Amon, son of Esarhaddon's vassal Manasseh). Our proposal. |
| 170 | same | same | `הַכֵּה תַכֶּה אֶת יֹשְׁבֵי הָעִיר הַהִוא` (דברים יג:טז) | [equivalent] | Killing the rebel group. |
| 171 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | The heir's brothers, objects of loyalty (see 94). |
| 172 | *lā tušezzabāninni* | לא תצילו | `אֱלָהַנָא דִּי אֲנַחְנָא פָלְחִין יָכִל לְשֵׁיזָבוּתַנָא` (דניאל ג:יז) | [cognate] | Aramaic `שֵׁיזִב`, a loan from *šūzubu*. |
| 172 | same | same | `וַיַּסְתִּרוּ אֹתוֹ מִפְּנֵי עֲתַלְיָהוּ וְלֹא הוּמָת` (מלכים ב יא:ב) | [equivalent] | Rescue of the heir from a usurper. |
| 175, 186 | *ibbalkatūni*, *tabbalkatāni* | יפשע, תפשעו | `וַיִּפְשַׁע מוֹאָב בְּיִשְׂרָאֵל אַחֲרֵי מוֹת אַחְאָב` (מלכים ב א:א) | [equivalent] | Source of the rendering (Decision 3). |
| 175 | *issi X nabalkutu* | מעם … יפשע | `בְּיָמָיו פָּשַׁע אֱדוֹם מִתַּחַת יַד יְהוּדָה` (מלכים ב ח:כ) | [equivalent] | "Rebel from under" = "cross over from". |
| 178 | *lā taḫalliqāni* | לא תימלטו | `אֲרַמִּי אֹבֵד אָבִי` (דברים כו:ה) | [divergence] | *ḫalāqu* "be a fugitive" is cited in the debate on `אֹבֵד` (from memory); not rendered `אבד` here (Decision 4). |
| 180–183 | the swearer's situations | בין ב[…], בין ביום פנוי… | `וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ` (דברים ו:ז) | [divergence] | An all-situations list. Our proposal. |
| 185 | *abutu lā ṭābtu … ina libbikunu tašakkanāni* | דבר לא טוב … בלבכם תשימו | `הִשָּׁמֶר לְךָ פֶּן יִהְיֶה דָבָר עִם לְבָבְךָ בְלִיַּעַל` (דברים טו:ט) | [equivalent] | A forbidden thought in the heart. Our proposal. |
| 191 | *šû lā šarkanūni* | הוא לא מלך לכם | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] | |
| 192 | *dannu lā ušappalūni šaplu lā imattahūni* | את החזק לא ישפיל, את השפל לא ירים | `מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | [cognate] | *šapālu* = `שפל`. |
| 192 | same | same | `זֶה יַשְׁפִּיל וְזֶה יָרִים` (תהלים עה:ח) | [cognate] | |
| 192 | same | same | `הַשָּׁפָלָה הַגְבֵּהַּ וְהַגָּבֹהַּ הַשְׁפִּיל` (יחזקאל כא:לא) | [cognate] | |
| 192–194 | the four royal powers | ישפיל, ירים, יהרוג, יחיה | `דִּי הֲוָא צָבֵא הֲוָה קָטֵל וְדִי הֲוָה צָבֵא הֲוָה מַחֵא וְדִי הֲוָה צָבֵא הֲוָה מָרִים וְדִי הֲוָא צָבֵא הֲוָא מַשְׁפִּל` (דניאל ה:יט) | [equivalent] | Nebuchadnezzar's power: kill, keep alive, raise, lower – the same four. Our proposal. |
| 192 | same | same | `לְבִלְתִּי רוּם לְבָבוֹ מֵאֶחָיו` (דברים יז:כ) | [divergence] | The king's law limits the king; the treaty secures his power. |
| 193–194 | *ša duāki … ša balluṭi* | את אשר להרוג … את אשר להחיות | `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל א ב:ו) | [equivalent] | |
| 193 | *ša duāki* | את אשר להרוג | `כִּי בֶן מָוֶת הוּא` (שמואל א כ:לא) | [equivalent] | |
| 194–195 | *ammar iqabbûni lā tašammâni kî pîšu* | כל אשר יאמר לא תשמעו, כפיו | `כָּל אִישׁ אֲשֶׁר יַמְרֶה אֶת פִּיךָ וְלֹא יִשְׁמַע אֶת דְּבָרֶיךָ לְכֹל אֲשֶׁר תְּצַוֶּנּוּ יוּמָת` (יהושע א:יח) | [cognate] (*šemû*) / [equivalent] | The people's loyalty oath to Moses' successor: "your mouth", "hear", "all that" (Josh 1:16–18 as a loyalty oath: from memory; the word match is our proposal). |
| 194 | *ammar iqabbûni* | כל אשר יאמר | `כֹל אֲשֶׁר תֹּאמַר אֵלֵינוּ נַעֲשֶׂה` (מלכים ב י:ה) | [equivalent] | Samaria's officials submitting to Jehu. |
| 195 | *kî pîšu* | כפיו | `וְעָשִׂיתָ עַל פִּי הַדָּבָר אֲשֶׁר יַגִּידוּ לְךָ` (דברים יז:י) | [equivalent] | |
| 195 | *tašammâni* (obey) | תשמעו | `וּבְקֹלוֹ תִשְׁמָעוּ` (דברים יג:ה) | [cognate] | |
| 195 | same | same | `אֵלָיו תִּשְׁמָעוּן` (דברים יח:טו) | [cognate] | Obedience to the successor-prophet. |
| 197 | *šarru šanumma … ina muhhīšu tubaʾʾāni* | מלך אחר … עליו תבקשו | `לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] | |
| 198 | *ina ēkalli bārtu* | בהיכל קשר | `וַיִּקְשֹׁר עָלָיו עַבְדּוֹ זִמְרִי שַׂר מַחֲצִית הָרָכֶב` (מלכים א טז:ט) | [equivalent] | Palace conspiracy. |
| 198 | same | same | `וַיִּקְשְׁרוּ עַבְדֵי אָמוֹן עָלָיו וַיָּמִיתוּ אֶת הַמֶּלֶךְ בְּבֵיתוֹ` (מלכים ב כא:כג) | [equivalent] | |
| 198 | *ēkallu* | היכל | `וְהָיוּ סָרִיסִים בְּהֵיכַל מֶלֶךְ בָּבֶל` (מלכים ב כ:יח) | [cognate] | Loan (Sum. *e₂-gal*). |
| 198 | background | — | `וְאַדְרַמֶּלֶךְ וְשַׂרְאֶצֶר` … `הִכֻּהוּ בַחֶרֶב` (מלכים ב יט:לז) | — | Sennacherib's murder by his sons (681): the event behind §18. |
| 201, 205 | *lā tašmeāšu*, *lā tašammeāšu* | לא תשמעו לו | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [cognate] | Here a direct prohibition (no *-ni*): "do not listen" = do not comply, as in Deut. The link for §18 is our proposal. |
| 201 | same | same | `לֹא תִשְׁמַע אֶל דִּבְרֵי הַנָּבִיא הַהוּא` (דברים יג:ד) | [cognate] | |
| 202 | *ina lā simenīšu* | [ב]לא זמנו | `לָמָּה תָמוּת בְּלֹא עִתֶּךָ` (קהלת ז:יז) | [equivalent] | *simānu* = `זְמָן` [cognate]. |
| 203–204 | *mā* | לאמר | `בַּסֵּתֶר לֵאמֹר נֵלְכָה וְנַעַבְדָה אֱלֹהִים אֲחֵרִים` (דברים יג:ז) | [equivalent] | The quoted words of the inciter. |
| 204 | *rēška ittiši* | את ראשך נשא | `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ` (בראשית מ:יג) | [cognate] | "Lift the head" = summon (from memory: the standard comparison). |
| 204 | same | same | `נָשָׂא אֱוִיל מְרֹדַךְ מֶלֶךְ בָּבֶל … אֶת רֹאשׁ יְהוֹיָכִין` (מלכים ב כה:כז) | [cognate] | |
| 205 | *lā turammâšu* (*ramû* D) | לא תרפו ממנו | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | Not *râmu* "love". |
| 205–206 | the guard on the prince | לא ילך; את נצירתו תחזקו | `וִהְיוּ אֶת הַמֶּלֶךְ בְּצֵאתוֹ וּבְבֹאוֹ` (מלכים ב יא:ח) | [equivalent] | The sworn guard around the boy-king Joash. |
| 206 | *maṣṣartušu* | [נצירתו] | `וְשָׁמְרוּ אֶת מִשְׁמֶרֶת בֵּית יְהוָה אֶל הַמֶּלֶךְ` (מלכים ב יא:ז) | [equivalent] | *maṣṣartu* = `מִשְׁמֶרֶת`; `שמר` kept out. Restored. |
| 207 | *ša bēlīšu iraʾʾamūni* | אשר את אדונו אוהב | `כִּי אֹהֵב הָיָה חִירָם לְדָוִד כָּל הַיָּמִים` (מלכים א ה:טו) | [equivalent] | First *râmu*: love = loyalty (Moran 1963, from memory). |
| 207 | same | same | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | Moran's thesis. |
| 207 | same | same | `הֲיִשְׁכֶם אֹהֲבִים אֶת יְהוָה אֱלֹהֵיכֶם בְּכָל לְבַבְכֶם` (דברים יג:ד) | [equivalent] | In Deut 13 love is what the inciting prophet tests. |
| 207 | same | same | `וַיֶּאֱהָבֵהוּ יְהוֹנָתָן כְּנַפְשׁוֹ` (שמואל א יח:א) | [equivalent] | Love and covenant (18:3). |
| 207 | *râmu* (etymology) | אוהב | `אֶרְחָמְךָ יְהוָה חִזְקִי` (תהלים יח:ב) | [cognate?] | *râmu* is sometimes compared with W. Semitic *rḥm* "love": uncertain; `רחם` not used. |
| 208 | *ina muhhi bēt bēlīšu marṣašūni* | ועל בית אדוניו חולה | `וְאֵין חֹלֶה מִכֶּם עָלַי וְגֹלֶה אֶת אָזְנִי` (שמואל א כב:ח) | [equivalent] | `חֹלֶה עַל` = concerned for the king; see 144. Our proposal. |
| 209–210 | *šulmu ša šarri … emmarūni* | ואת שלום המלך … יראה | `לֶךְ נָא רְאֵה אֶת שְׁלוֹם אַחֶיךָ וְאֶת שְׁלוֹם הַצֹּאן` (בראשית לז:יד) | [cognate] (*šulmu*) / [equivalent] (*amāru*) | The same idiom. Our proposal. |
| 212–213 | *puḫru … ana issēn ina libbikunu šarrūtu taddanāni* | אספה … לאחד מכם את המלכות תתנו | `וַיִּקְרְאוּ אֹתוֹ אֶל הָעֵדָה וַיַּמְלִיכוּ אֹתוֹ עַל כָּל יִשְׂרָאֵל` (מלכים א יב:כ) | [equivalent] | An assembly makes one of its own king. |
| 212 | same | same | `וַיִּקְרָא אֶת כָּל אֶחָיו בְּנֵי הַמֶּלֶךְ` (מלכים א א:ט) | [equivalent] | Adonijah's gathering of the heir's brothers. |
| 213 | *tutammâni* | תשביעו | `וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] / [divergence] | Assembly, oath and enthronement: legitimate there, forbidden here. |
| 213 | same | same | `וַיְהִי הַקֶּשֶׁר אַמִּץ וְהָעָם הוֹלֵךְ וָרָב אֶת אַבְשָׁלוֹם` (שמואל ב טו:יב) | [equivalent] | |
| 214 | *issu libbi ahhēšu* | מקרב אחיו | `מִקֶּרֶב אַחֶיךָ תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [divergence] | A condition for the king in Deut, the source of danger here (see 55). |
| 214, 224 | a pretender from the heir's brothers | מקרב אחיו … את כסא אשור תתפישו | `וַאֲדֹנִיָּה בֶן חַגִּית מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [equivalent] | |
| 216–218 | *qurbūti … patiūti* | הקרובים … הרחוקים | `הַקְּרֹבִים אֵלֶיךָ אוֹ הָרְחֹקִים מִמֶּךָּ מִקְצֵה הָאָרֶץ וְעַד קְצֵה הָאָרֶץ` (דברים יג:ח) | [cognate] (*qurbu* = `קרוב`) / [equivalent] | "Near and far" in a list of possible sources of sedition (in Deut: the nations' gods; here: palace groups; 216 "in Assyria or another land" ~ "from one end of the earth to the other"). Our proposal. |
| 217 | *innabtūni* | ברחו | `וַיִּבְרַח מִצְרַיִם אֶל שִׁישַׁק מֶלֶךְ מִצְרַיִם` (מלכים א יא:מ) | [equivalent] | A royal rival who fled abroad and returned to rule. |
| 220 | *mār muškēnūti* | בני המסכנות | `אֶרֶץ אֲשֶׁר לֹא בְמִסְכֵּנֻת תֹּאכַל בָּהּ לֶחֶם` (דברים ח:ט) | [cognate] | Loan from *muškēnūtu*. |
| 220 | *muškēnu* | (המסכנות) | `טוֹב יֶלֶד מִסְכֵּן וְחָכָם מִמֶּלֶךְ זָקֵן וּכְסִיל` (קהלת ד:יג) | [cognate] | |
| 221 | *urdāni* | בעבדים | `וַיָּקֻמוּ עֲבָדָיו וַיִּקְשְׁרוּ קָשֶׁר` (מלכים ב יב:כא) | [equivalent] | |
| 222 | *ša-šīmī* | בקנויים | `יְלִיד בָּיִת וּמִקְנַת כֶּסֶף` (בראשית יז:יב) | [equivalent] | |
| 228 | *šarrūtu bēlūtu … ina muhhikunu uppašūni* | יעשה עליכם את המלכות ואת האדנות של אשור | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | = 61. |
| 229–231 | *ina muhhi X lā tamaqqutāni lā tamuttāni* | בעד … לא תיפלו, לא תמותו | `אִם לְמָוֶת אִם לְחַיִּים כִּי שָׁם יִהְיֶה עַבְדֶּךָ` (שמואל ב טו:כא) | [equivalent] | = 50–51. |
| 234 | *milku lā damqu* | עצה לא נאה | `סַכֶּל נָא אֶת עֲצַת אֲחִיתֹפֶל יְהוָה` (שמואל ב טו:לא) | [equivalent] | The king's counsellor turned conspirator. |

### Proposals for the renderings (part 2; plain strings as they appear in the `>` lines)
- **§10 informer list** (continuing part 1's §6 strings): *lū ina pî nakrīšu* = `בין מפי אויבו`; *salmēšu* = `איש שלומו`; *ahhēkunu marʾēkunu marʾātikunu* = `אחיכם, בניכם, בנותיכם`; *raggimu* = `נביא`; *maḫḫû* = `משוגע` (vocalized `מְשׁוּגָּע`, plene); *mār šāʾili amat ili* = `שואל דבר אל`; the §6 strings recur unchanged (`בין מפי אחיו,` / `אחי אבותיו, בני אחי אבותיו,` / `קנו, זרע בית אביו,` / `בין מפי כלל שחורי הראש כל אשר ישנם –` / `תשמעו, תסתירו,` / `לא תבואו אל` / `ולא תאמרו (לו)`).
- **The *abutu* formula split:** `דבר לא טוב, לא נאה,` | `לא יפה` (108–109); without a noun: *lā ṭābtu lā deʾiqtu* = `לא טובה, לא נאה` (125), *lā ṭābtu* = `לא טובה` (233); `מעשה, קשר, דבר` | `לא טוב תעשו לו` (186–187).
- **Crown-prince formula, new split:** `אשור־בני־אפלי` | `בן־המלך הגדול של בית הירושה` (178–179); `אסרחדון,` | `מלך אשור, אדונכם,` (189–190); `אשר עליו` | `שׂם אתכם אמנה` (131–132, 174–175).
- **The inciter (§12):** *memmēni* = `איש`; *sīḫu bārtu ša duākīšu šamuttīšu* | *ḫulluqīšu* = `מרד וקשר להרגו, להמיתו,` | `לאבדו`; *ēpišānūte ša bārte* = `עושי הקשר`; *ṣābāni bēl ḫiṭṭi* = `האנשים בעלי החטא`; *ṣabātu* = `תפש` (`תתפשו`, `לתפוש אותם`); *ina muhhi X wabālu* = `אל X … הביא`; *ammar ṣabātišunu duākišunu maṣākunu* = `לתפוש אותם, להרוג אותם יכולים אתם` (negative: `אינכם יכולים`); *šumšunu zarʾušunu ina māti lā tuḫallaqāni* = `את שמם, את זרעם מן הארץ לא תאבדו`; *uznē ša X … lā tupattâni* = `את אזני X … לא תפתחו`; *issīšu izuzzu* = `עמו עמד`.
- **§13:** *issi X šakānu* = `עם X שׂם (חלקו)`; *dumqu lā dumqu* = `נאה ולא נאה`; *libbakunu issīšu lā gammurūni* = `לבכם עמו אינו שלם`; the oath ritual: `בעריכת שולחן, בשתיית כוס, בהבערת גירה, במים, בשמן, באחיזת שדיים`; *ušeššab ilāni* = `אלים יושיב`; *tamû* D = `השביע` (`תשביעו`); *ana ahēʾiš* = `זה את זה`.
- **§14–15:** *dāgil pāni* = `נתין`; *mār Mat-Aššur* = `בן אשור`; *mār māti šanītimma* = `בן ארץ אחרת`; *šiknat napišti mala bāšû* = `בעלי הנפש כל אשר ישנם`; *esēru* = `כיתר`; *sīḫu bārtu ina muhhīšu epēšu* = `מרד וקשר עליו עשה`; *ṣābāni ša bārti ēpušūnišūni* = `האנשים אשר קשר עשו לו`; *šūzubu* = `הציל`; *nabalkutu* = `פשע (ב־)`; *ḫalāqu* G "flee" = `נמלט`; *kî daʾāni* = `בחזקה`.
- **§16:** *ūmu rīqu* = `יום פנוי`; *qabal / qabsi māti* = `בתוך הארץ`; *ina libbi šakānu* = `בלב שׂם`; *ḫurādu* = `שירות הצבא?`; *pirru* = `גביית המס?`.
- **§17:** *ina ūme ša X ana šīmti illakūni* = `ביום אשר X … ילך לגורלו`; *šarkanūni bēlkanūni* = `מלך לכם, אדון לכם`; *dannu … šuppulu, šaplu … matāḫu* = `את החזק … ישפיל, את השפל … ירים`; *ša duāki … ša bulluṭi* = `את אשר להרוג … את אשר להחיות`; *bulluṭu* = `החיה` (`יַחֲיֶה`); *ammar iqabbûni* = `כל אשר יאמר`; *kî pîšu* = `כפיו` (`כְּפִיו`); *buʾʾû* = `ביקש`.
- **§18:** *ēkallu* = `היכל`; *ina kal ūme / ina kal mūši* = `בכל היום / בכל הלילה`; *ḫūlu* = `דרך`; *mār šipri* = `שליח`; *ina lā simānīšu* = `בלא זמנו`; *mā* = `לאמר:`; *rēša našû* = `את ראש נשא`; *ramû* D = `הרפה מן` (`תַּרְפּוּ ממנו`); *maṣṣartu* = `נצירה` (`נְצִירָתוֹ`), *maṣṣarta dunnunu* = `את נצירתו חיזק`; *râmu* = `אהב` (`אשר את אדונו אוהב`); *marṣu ina muhhi* = `על … חולה`; *šulma amāru* = `את שלום … ראה`; *ḫaramma* = `אחר כך`; *lā tašmeāšu* (no *-ni*) = `לא תשמעו לו`.
- **§19–20:** *puḫra šakānu* = `אספה שׂם`; *issēn ina libbikunu* = `אחד מכם`; *issu libbi* = `מקרב`; *kalzu* = `חוג`; *qurbu / patiu* = `קרוב / רחוק`; *rabiūti ṣehrūti* = `הגדולים והקטנים`; *mār damqūti / mār muškēnūti* = `בני האצילים / בני המסכנות` (`הַמִּסְכֵּנוּת`); *urdu* = `עבד`; *ša-šīmi* = `קנוי`; *abātu* N = `ברח`.
- **§21:** *ša ina muhhīšu ṭābūni* = `את אשר טוב לו`; *milku lā damqu* = `עצה לא נאה`; *ḫūlu lā šalmu* = `דרך לא שלמה`; singular `בכנות הגונה לא תנהגו בו תמיד`.
- **Corpus renderings correction proposed:** *ḫalāqu* G = `אָבַד` only for "perish, disappear"; "flee" = `נִמְלַט` (Decision 4).

### Lessons for the guidelines (part 2)
- **Watch the subjunctive *-ni*:** in EST the oath clauses carry it; the few clauses without it (§18, 201–206) are plain prohibitions or permissions, and need neither `אם` nor `(אם)`.
- **A real *šumma* condition ("if anyone …") followed by an oath apodosis** is common in §12–§15: the `(אם)` goes at the start of the apodosis, not at the *šumma*.
- **A formula check must strip editorial brackets** (and a lemma-root check must allow the Hiphil `השביע`): otherwise every damaged copy of a formula is a false problem.
- **Quote around kethiv/qere**: the repository's text prints the kethiv with the qere in parentheses (`הַמֻּמָותִתים (הַמּוּמָתִים)`, `בָּנָיו` in 2 Kgs 19:37); quote the words before or after it, with `…`.
- **The SAAo normalization can contradict its transliteration** (236 *-šunūni* vs *-šu₂-u-ni*): translate the transliteration and say so.
- **Treaty idioms often survive as biblical idioms word for word** (`לֵבָב שָׁלֵם עִם`, `חֹלֶה עַל`, `רָאָה אֶת שְׁלוֹם`, `נָשָׂא רֹאשׁ`, `גָּלָה אֹזֶן`): render the Akkadian idiom literally when Hebrew has it, so the reader sees the match.

## Part 3: §22–§29 (lines 237–352)

### Scope
- P&W §22–§29, composite lines 237–352: **116 composite entries**, no Tayinat-only entries. File: `annotated-3--sections-22-29.rtl.md`.
- Tayinat coverage: **T iv 1–11** (= 257–268; col. iv begins at 257 and breaks after T iv 11) and **T v 1–8** (= 344–352; col. v begins at 344). Every Tayinat line is placed by SAAo; no line is translated from Tayinat (the Nimrud text is complete wherever Tayinat survives). Variants: T iv 2 puts the §22/§23 ruling after *lā tutarrāninni*, in the middle of composite 259 (confirms P&W's division); T iv 3 has no *ana* before Assurbanipal (260); T iv 11 (268, "love … as yourselves") is restored except `-ni`, so **the love clause rests on the Nimrud tablets alone**; T v 3 has plural *qābiānūti* "the speakers" (composite 347 sg. *qābiānu*); T v 8 has *ina muḫḫi* without suffix where the composite has `UGU-<ka>` (351): the editors' ⟨ka⟩ may be unnecessary (P&W "concerning it").

### Decisions (translator, part 3)
1. **268 = `כנפשכם לא תאהבו`** (coordinator's string). *napšātekunu* is plural; Hebrew uses the distributive singular, as `כְּנַפְשְׁךָ` / `כְּנַפְשׁוֹ`; the same singular `נפשכם` for *nupšātkunu* in 293 and 335 (consistency of the word; the Hebrew plural `לְנַפְשֹׁתֵיכֶם`, Deut 4:15, is cited in the apparatus).
2. **Blood vengeance (256–259):** *dāmē kūm dāmē* = `דמים תחת דמים` (plural *dāmē* = Hebrew `דָּמִים`, shed blood); *tabāku* = `שפך`; ***gimilla turru* = `גמול … השיב`** (Ps 94:2 `הָשֵׁב גְּמוּל`). **Deviation from corpus renderings §4** (*gimlu* = `חֶמְלָה`): *gimillu* "requital" in this idiom = `גמול` (the cognate, with the same double sense "favour / requital" in both languages); `חמלה` stays for *gimlu* "mercy" in the curses.
3. ***ramû* D (348) = `תרפו ממנו`**, as part 2's 205; *râmu* (268) = `תאהבו`; the two never meet.
4. ***nakāru*: G = `התנכר` (244), Š = `נִכֵּר (מִן)` (245, 312)** – the cognate root kept for both stems (*issīšu* "with him" → `ממנו`, a grammatical mapping). *maḫāṣu* Š "make fight each other" = **`סכסך`** (326, 342; Isa 19:2), since Hebrew has no Hiphil of the cognate `מחץ`.
5. ***kapādu* Š = `שידל … לזמום`** (322, 336; *kapādu* G = `זמם`): two words for one, because `הסית` (Deut 13:7, the exact equivalent) must stay out of the translation and Hebrew has no causative of `זמם`.
6. ***karṣī akālu* = `את קרצי … אכל`** literally (270, 323–324, 332, 341–342): the Akkadian idiom survives in Biblical Aramaic (`וַאֲכַלוּ קַרְצֵיהוֹן`, Dan 3:8; 6:25); explained in the apparatus.
7. ***ṭēmu* = `צַו`**, *ṭēma šakānu* = `צו שׂם` (290–291, 328), to keep *šakānu* = `שׂם` (Josh 24:25 `וַיָּשֶׂם לוֹ חֹק`); never `טעם`.
8. **No oath form in §25 and §28**: §25 quotes what the swearers will tell their sons (direct imperatives and prohibitives without *-ni*: `נִצְרוּ!`, `לא תחטאו`, `לא תאבדו`, `לא תתנו`, `לא תשימו`), §28 is a positive command (`אִמְרוּ לו`). Each *mā* = `לאמר:` with quotation marks; the second *mā* inside one phrase (330) is not rendered.
9. **`(אם)`** at 307 and 344 (subjunctive oath clause after a real condition, part 2 Decision 1); not at 242, 304, 318 (*šumma attunu* / *šumma* written). 318: `(איש)` added as the subject of 322–323 (P&W "(any) one").
10. **Words chosen to keep Deuteronomic verbs out:** *zenû* Š = `הרגיז` (not `הכעיס`, Deut 4:25; 32:16); *magāru* = `הסכים` (not `אבה`, Deut 13:9); *pašāšu* = `סך` (not `משח`, which would evoke the anointed king; Deut 28:40 `וְשֶׁמֶן לֹא תָסוּךְ` tagged); *ḫepû* = `חורבן` (`שבר` is reserved for *šebēru*); *ḫubta ḫabātu* = `ביזה בזז` (`שלל` reserved for *šalālu*).
11. **Cognates made visible:** *qarābu* = `קרב` (311); *qinû* = `קנאה` (328); *qinītu*, *qanû* = `קניין`, `קנה` (274); *kišpu* = `כשפים` (264); *šaqû* = `השקה` (263); *šalālu* = `שלל` (295); *kânu* = `נכון` (333); *balu/balāt* = `בלי` (334); *kabātu* D = `כִּבֵּד` (335); *našû* = `נשא` (241, 274); *aššatu* = `אשה` (250).
12. **Brackets:** `[בני אחי]` (337: DUMU—ŠEŠ broken in all three copies of the score), `[סריס]` (338), `[השניאו]` (331), `ו[אדד]` (333), `על⟨יך⟩` (351, SAAo `<ka>`); `…` (not `[…]`) for the legible but unintelligible LU TI u₂ ŠID (334). DINGIR.<MEŠ> (264): plural sign only, no ⟨ ⟩.
13. **Vocalized here:** names at their first occurrence in the part (`אֵסַרְחַדּוֹן`, `אַשּׁוּר` 237; the crown-prince formula 239–240; `שַׁמַשׁ`, `אֲדַד` 333), `שָׂם` (287), and ambiguous words: `יִשָּׂא`, `תְנַכְּרוּ`, `הַהָרָה`, `תְגַדְּלוּ`, `תָּסוּכוּ`, `וְאֵלוֹת` (unvocalized "ואלות" = "and curses"), `קַרְצֵיהֶם`/`קַרְצֵי`/`קַרְצָיו`, `תִּשְׂאוּ`, `צַו`, `תָּשִׂימוּ`, `נִצְרוּ`, `נָצוּר`, `הֶרְגּוֹ`, `הַפַּחוֹת`, `אִכְלוּ`, `אִמְרוּ`, `אַיֵּה`, `כַּבְּדוּ`, `קִנּוֹ`, `סַכְסְכוּ`, `הַפְרִידוּ`.

### Open decisions for the user (part 3)
1. ***karṣī akālu*** literal (`את קרציהם תאכלו`, the Aramaic idiom of Dan 3:8) or by sense (`תלשינו עליהם`).
2. ***gimilla turru* = `גמול … השיב`** against corpus renderings §4 (*gimlu* = `חמלה`): proposed split by sense (Decision 2).
3. ***nazāru* Š (329, 331) = `השניא (?)`**: "make hateful" (Lauinger at T v 29) or "make accursed" (P&W); `ארר` / `קלל` avoided (`אָרַר` is reserved for *arāru*).
4. ***kapādu* Š = `שידל … לזמום`** (two words), or a one-word `הדיח` (Deut 13:6, 11, 14 – would pre-empt the comparison).
5. **268 singular `כנפשכם`** for plural *napšātekunu* (coordinator's string), or the plural `כנפשותיכם` (closer to the Akkadian and to `לְנַפְשֹׁתֵיכֶם`, Deut 4:15).
6. ***dīkta dâku* = `את הרגו לא תהרגו`** (figura etymologica kept) or by sense `לא תכו בו מכה`.

### Progress log (part 3)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, parts 1–2 (all `>` lines extracted with their normalizations; Decisions and Proposals). Parsed and drafted 237–352 unvocalized from the normalization and the transliteration, with T iv 1–11 and T v 1–8; then P&W and Lauinger compared. Disagreements recorded: P&W resolves the oath clauses into commands throughout (237, 249, 266 "You shall love", 275 "shall be theirs", 279–282); P&W "god" (sg.) for *ilāni* (296); P&W "stay alive" for *nupšātkunu uṣrā* (335); P&W "themselves" in 331 and "concerning it" in 351 (= Tayinat's *ina muḫḫi* without suffix); Lauinger's restorations of T iv 1, 3, 7, 11 follow P&W.
- Review pass (a) fidelity: every word of each normalization checked against its `>` line; added words only in `( )`: `(חלקכם)` 242, `(אותו)` 252, `(אם)` 307, 344, `(לו)` 344, 350, `(איש)` 318, `(הם)` 332, `(?)` 329, 331; "ו" without brackets for asyndeton (241, 274, 286, 296). Not rendered (noted): the repeated *lā* of 278 (NA double negation), the second *mā* of 330. Fixed at this pass: 337 `[בני אחי]` (broken in all copies), 331 object removed (not in the Akkadian).
- Review pass (b) consistency: repeated strings compared by grep with parts 1–2: 237 ~ 83; 248 = 253 = 227; 261 = 267; 266 = 62; 284 = 43; 285 = 94 = 103; 319 = 114; 242 ~ 176; 246 ~ 126–127; 254–256 ~ 136, 140–141; 301 ~ 71; 303 ~ 166, 200; 306–307 ~ 138–139, 142–143; 315 ~ 161; 338–339 ~ 163–164; 348 ~ 205; 349–350 ~ 81–82; formulas of renderings §1 by `verify.py`. New split forms listed below.
- Review pass (c) Hebrew: read aloud; vocalized the ambiguous words (Decision 13; `וְאֵלוֹת`, `תְנַכְּרוּ` added at this pass); grep of the `>` lines for the reserved words of Decision 7 (none) and for the roots of Deut 6:5, 13:1–19, 28:15–68, 29:9–20, 31:9–13: the overlaps are all tagged in the apparatus – `אהב`, `נפש` (268, 293, 335 ↔ 6:5, 13:7), `לב` (310 ↔ 6:5), `שמע` (344 ↔ 13:9), `אחיו, בני אמו` (270, 285, 341, 343 ↔ 13:7), `לאמר` (291–343 ↔ 13:3, 7), `הרג` (246, 255, 306, 314 ↔ 13:10), `תתנו` (295 ↔ 28:32), `שור/חמור/צאן` (277 ↔ 28:31), `אבד` (256, 293, 315 ↔ 4:26; 30:18), `בניכם … יהיו` (288–290 ↔ 29:13–14, 21), `שלל` (295; also 13:17, no echo intended), `עבד` (243, 308, 330: word-for-word *urdu*, recorded as in part 2).
- `verify.py 3`: 1 problem, a false positive: line 305's lemma *ḫadû*[ contains the substring `adû[`, so the script expects `אמנ` (coordinator: anchor the lemma regex, e.g. `(?<![a-zḫ])adû\[`). `verify.py 1 2 3` REVIEW lines: 43/137 (part 2's, justified there), 92/188 (part 2's brackets), and **82 vs 280** (*ša bēt rēdûti lā taqabbāni*): 82 is the second verb of "do not come … and do not tell (him)", 280 ends "if you do not speak well of them …"; the different syntax justifies the different Hebrew. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches.

### Parallels index (part 3)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 237–248 | heir murdered, murderers killed, his son enthroned | … לא תתפשו אותו, לא תהרגו אותו, ואת בן אשור־בני־אפלי … את כסא אשור לא תתפישו | `וַיַּךְ עַם הָאָרֶץ אֵת כָּל הַקֹּשְׁרִים עַל הַמֶּלֶךְ אָמוֹן וַיַּמְלִיכוּ עַם הָאָרֶץ אֶת יֹאשִׁיָּהוּ בְנוֹ תַּחְתָּיו` (מלכים ב כא:כד) | [equivalent] | The scenario of §22 in Judah (Amon, son of Esarhaddon's vassal Manasseh). Our proposal. |
| 241 | *šarrūtu … ittiši* | ואת המלכות … ישא | `וְתִנַּשֵּׂא מַלְכֻתוֹ` (במדבר כד:ז) | [cognate] | *našû* = `נשא`. |
| 241 | same | same | `מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [cognate] | The usurper "lifts himself" to kingship. Our proposal. |
| 243–244 | *ana urdānūtīšu taturrāni lā tabbalkatāni* | לעבדותו תשובו, לא תפשעו | `וַיְהִי לוֹ יְהוֹיָקִים עֶבֶד שָׁלֹשׁ שָׁנִים וַיָּשָׁב וַיִּמְרָד בּוֹ` (מלכים ב כד:א) | [equivalent] | Servitude to a king, "turn", rebellion. Our proposal. |
| 243–244 | same | same | `וַיִּמְרֹד בְּמֶלֶךְ אַשּׁוּר וְלֹא עֲבָדוֹ` (מלכים ב יח:ז) | [divergence] | Hezekiah's revolt against Assyria; here revolt is *required* against the murderer. |
| 244 | *nakāru* | תתנכרו | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | [cognate] | |
| 246 | *lā tadūkaššūni* | לא תהרגו אותו | `כִּי הָרֹג תַּהַרְגֶנּוּ` (דברים יג:י) | [equivalent] | The swearers kill the murderer, as Israel the inciter. |
| 249 | *arītu* | ההרה | `וְנָגְפוּ אִשָּׁה הָרָה` (שמות כא:כב) | [equivalent] | Term only. |
| 252 | *turabbâni* | תגדלו | `אֲשֶׁר טִפַּחְתִּי וְרִבִּיתִי` (איכה ב:כב) | [cognate] | *rabû* D = `רִבָּה` "rear"; rendered `גידל`. |
| 252 | same | same | `בָּנִים גִּדַּלְתִּי וְרוֹמַמְתִּי וְהֵם פָּשְׁעוּ בִי` (ישעיהו א:ב) | [equivalent] | Raising sons + `פשע` (*nabalkutu*, 244) in one verse. Our proposal. |
| 249–253 | posthumous / infant heir raised and enthroned | כאשר ייוולד, לא תגדלו … את כסא אשור לא תתפישו | `וַיְהִי אִתָּהּ בֵּית יְהוָה מִתְחַבֵּא שֵׁשׁ שָׁנִים` (מלכים ב יא:ג) | [equivalent] | Joash, the surviving infant of a murdered royal seed, raised in hiding. Our proposal. |
| 253 | same | same | `וַיּוֹצִא אֶת בֶּן הַמֶּלֶךְ וַיִּתֵּן עָלָיו אֶת הַנֵּזֶר וְאֶת הָעֵדוּת וַיַּמְלִכוּ אֹתוֹ` (מלכים ב יא:יב) | [equivalent] | His enthronement (with `הָעֵדוּת`; see part 1, l. 1). |
| 254 | *ēpišānūti ša bārti* | את עושי הקשר | `וַיַּךְ אֶת עֲבָדָיו הַמַּכִּים אֶת הַמֶּלֶךְ אָבִיו` (מלכים ב יד:ה) | [equivalent] | The new king kills his father's murderers. |
| 255 | *šumšunu zarʾušunu … lā tuḫallaqāni* | את שמם, את זרעם … לא תאבדו | `וְאֶת בְּנֵי הַמַּכִּים לֹא הֵמִית` (מלכים ב יד:ו) | [divergence] | The treaty demands the murderers' seed; Amaziah spares the sons, citing Deut 24:16. Our proposal. |
| 255 | same | same | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | Same. |
| 255 | same | same | `וְנַשְׁמִידָה גַּם אֶת הַיּוֹרֵשׁ` (שמואל ב יד:ז) | [equivalent] | Blood vengeance for a brother that wipes out name and remnant. |
| 256 | *dāmē* | דמים | `וְדָמִים בְּדָמִים נָגָעוּ` (הושע ד:ב) | [cognate] | Plural "bloods" = shed blood in both. |
| 256 | same | same | `קוֹל דְּמֵי אָחִיךָ צֹעֲקִים אֵלַי מִן הָאֲדָמָה` (בראשית ד:י) | [cognate] | Plural, of a murdered brother. |
| 256 | *dāmē kūm dāmē* | דמים תחת דמים | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] | *kūm* = `תַּחַת`. |
| 256 | same | same | `הֲלוֹא אֲבַקֵּשׁ אֶת דָּמוֹ מִיֶּדְכֶם וּבִעַרְתִּי אֶתְכֶם מִן הָאָרֶץ` (שמואל ב ד:יא) | [equivalent] | David avenges the heir of Saul's house on his murderers: "blood" and "from the land" (*ina māti*). Our proposal. |
| 256 | same | same | `וַיָּמָת בְּדַם עֲשָׂהאֵל אָחִיו` (שמואל ב ג:כז) | [equivalent] | Blood vengeance (Joab–Abner). |
| 257 | *dāmē … tatabbakāni* | דמים … לא תשפכו | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | [equivalent] | Blood for blood. |
| 257 | same | same | `כִּי אִם בְּדַם שֹׁפְכוֹ` (במדבר לה:לג) | [equivalent] | |
| 257–259 | *gimlu … lā tutarrāninni* | גמול … לא תשיבו | `הָשֵׁב גְּמוּל עַל גֵּאִים` (תהלים צד:ב) | [cognate] | *gimilla turru* = `השיב גמול` word for word (*gimillu* = `גמול`). Our proposal. |
| 257–259 | same | same | `גְּמֻלְךָ יָשׁוּב בְּרֹאשֶׁךָ` (עובדיה א:טו) | [cognate] | |
| 256–259 | blood + requital | דמים … גמול … לא תשיבו | `כִּי דַם עֲבָדָיו יִקּוֹם וְנָקָם יָשִׁיב לְצָרָיו` (דברים לב:מג) | [equivalent] | Blood avenged by "returning vengeance". |
| 259 | same | same | `אָשִׁיב נָקָם לְצָרָי` (דברים לב:מא) | [equivalent] | |
| 259 | same | same | `וְהֵשִׁיב יְהוָה אֶת דָּמוֹ עַל רֹאשׁוֹ` (מלכים א ב:לב) | [equivalent] | Solomon's succession purge: `השיב` + blood. Our proposal. |
| 259 | same | same | `וְנָתְנוּ אֹתוֹ בְּיַד גֹּאֵל הַדָּם וָמֵת` (דברים יט:יב) | [equivalent] | The blood avenger. |
| 262 | *šammu ša muātīšu* | סם מותו | `מָוֶת בַּסִּיר אִישׁ הָאֱלֹהִים` (מלכים ב ד:מ) | [equivalent] | A deadly plant in food. Our proposal. |
| 262 | same | same | `פֶּן יֵשׁ בָּכֶם שֹׁרֶשׁ פֹּרֶה רֹאשׁ וְלַעֲנָה` (דברים כט:יז) | [divergence] | The poisonous plant of the covenant oath, there a metaphor for the apostate. Our proposal. |
| 263 | *pašāšu* | תסוכו | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | Anointing the body (not royal anointing). |
| 264 | *kišpī* | כשפים | `עַד זְנוּנֵי אִיזֶבֶל אִמְּךָ וּכְשָׁפֶיהָ הָרַבִּים` (מלכים ב ט:כב) | [cognate] | Sorcery in a coup narrative. Our proposal. |
| 264 | same | same | `מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | [cognate] | |
| 265 | *tušaznâni* | תרגיזו | `לְהַכְעִיסוֹ` (דברים ד:כה) | [equivalent] | Deut: the people anger God; here sorcery angers the gods against the heir. `הכעיס` kept out. |
| 265 | same | same | `בְּתוֹעֵבֹת יַכְעִיסֻהוּ` (דברים לב:טז) | [equivalent] | |
| **266–268** | ***kî napšātekunu lā taraʾʾamāni*** | **כנפשכם לא תאהבו** | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ וּבְכָל נַפְשְׁךָ וּבְכָל מְאֹדֶךָ` (דברים ו:ה) | [equivalent] | Moran 1963 (from memory): treaty "love" = loyalty; the oath "if you do not love" = "you shall love". Rests on the Nimrud copies (Tayinat T iv 11 restored). |
| 268 | *kî napšātekunu* | כנפשכם | `אוֹ רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ` (דברים יג:ז) | [cognate] | *kî napšāti* = `כְּנַפְשְׁךָ` exactly, in the inciter chapter. |
| 268 | *kî napšātekunu … taraʾʾamāni* | כנפשכם … תאהבו | `וַיִּכְרֹת יְהוֹנָתָן וְדָוִד בְּרִית בְּאַהֲבָתוֹ אֹתוֹ כְּנַפְשׁוֹ` (שמואל א יח:ג) | [cognate] + [equivalent] | Love "as his soul" + covenant in one verse. |
| 268 | same | same | `יְהוֹנָתָן כְּנַפְשׁוֹ` (שמואל א יח:א) | [cognate] | (The verb of 18:1 is a kethiv/qere; quoted without it.) |
| 268 | same | same | `וַיּוֹסֶף יְהוֹנָתָן לְהַשְׁבִּיעַ אֶת דָּוִד בְּאַהֲבָתוֹ אֹתוֹ כִּי אַהֲבַת נַפְשׁוֹ אֲהֵבוֹ` (שמואל א כ:יז) | [cognate] + [equivalent] | Oath, love and *nefesh* between the king's son and the future king. Our proposal for the triad. |
| 268 | same | same | `וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ` (ויקרא יט:יח) | [divergence] | Lev: `כָּמוֹךָ`; the treaty, Deut 13:7 and 1 Sam: `כְּנַפְשְׁךָ`, the cognate of *kî napšāti*. |
| 268 | same | same | `וְאָהַבְתָּ לוֹ כָּמוֹךָ` (ויקרא יט:לד) | [divergence] | Same. |
| 270, 323–324, 341–342 | *karṣī akālu* | את קרציהם … תאכלו | `וַאֲכַלוּ קַרְצֵיהוֹן דִּי יְהוּדָיֵא` (דניאל ג:ח) | [cognate] | The Akkadian idiom "eat the pieces" = slander, in Biblical Aramaic. |
| 270 | same | same | `דִּי אֲכַלוּ קַרְצוֹהִי דִּי דָנִיֵּאל` (דניאל ו:כה) | [cognate] | |
| 270, 324, 341 | slander of a brother before the father / heir | … לפני אביו אכלו | `וַיָּבֵא יוֹסֵף אֶת דִּבָּתָם רָעָה אֶל אֲבִיהֶם` (בראשית לז:ב) | [equivalent] | Our proposal (with 327, 328: the Joseph cluster slander – hatred – envy). |
| 271–272 | *ahīkunu ina bētātišunu tubbalāni* | את זרועותיכם בבתיהם תשלחו | `אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:י) | [equivalent] | An oath in the `אִם` form not to "send the hand" against a neighbour's property. Our proposal. |
| 271–272 | same | same | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | The formula (see 66–67). |
| 273 | *tidintu … abūšunu iddinaššanūni* | המתנה אשר … אביהם נתן להם | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [cognate] | *tidintu* ~ `מַתָּנָה`; see 89–90. |
| 274 | *qinītu ša šunu iqnûni* | הקניין אשר הם קנו | `מִקְנֵהֶם וְקִנְיָנָם` (בראשית לד:כג) | [cognate] | |
| 275–278 | the brothers' property: fields, houses, people, ox, donkey | שדות, בתים … אנשים … חמורים, שוורים | `וְלֹא תִתְאַוֶּה בֵּית רֵעֶךָ שָׂדֵהוּ וְעַבְדּוֹ וַאֲמָתוֹ שׁוֹרוֹ וַחֲמֹרוֹ וְכֹל אֲשֶׁר לְרֵעֶךָ` (דברים ה:יז) | [equivalent] | = Deut 5:21 in the common numbering: nearly the same list and order (house, field, slaves, ox, donkey). Our proposal. |
| 277 | *imārī alpāni immerē* | חמורים, שוורים, צאן | `שׁוֹרְךָ טָבוּחַ לְעֵינֶיךָ … חֲמֹרְךָ גָּזוּל מִלְּפָנֶיךָ … צֹאנְךָ נְתֻנוֹת לְאֹיְבֶיךָ` (דברים כח:לא) | [equivalent] | The same three animals as property taken away (curse) / not to be taken (oath). Our proposal. |
| 277 | *alpu* | שוורים | `שְׁגַר אֲלָפֶיךָ` (דברים כח:ד) | [cognate] | *alpu* = `אֶלֶף` "cattle" (note only). |
| 275 | *eqlāti* | שדות | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח` (שמואל א ח:יד) | [divergence] | The king who takes fields; here taking is forbidden. |
| 278 | *ina pānišunu* | לפניהם | `וְהָאָרֶץ תִּהְיֶה לִפְנֵיכֶם` (בראשית לד:י) | [equivalent] | NA *ina pān X* "at X's disposal" = Hebrew `לִפְנֵי`. |
| 278 | same | same | `הֲלֹא כָל הָאָרֶץ לְפָנֶיךָ` (בראשית יג:ט) | [equivalent] | |
| 281 | *ina pānīšu … izzazzūni* | לפניו … יעמדו | `לַעֲמֹד לִפְנֵי יְהוָה לְשָׁרְתוֹ` (דברים י:ח) | [equivalent] | "Stand before" = serve. |
| 281 | same | same | `הָעֹמְדִים לְפָנֶיךָ תָּמִיד` (מלכים א י:ח) | [equivalent] | |
| 283–290 | the treaty passed on to the descendants | האמנה הזאת … לבניכם … לזרע זרעכם, אשר אחרי האמנה לימי עד יהיו | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | Known in the literature (from memory). |
| 289–290 | *ša urki adê ana ūmē ṣâti ibbaššûni* | אשר אחרי האמנה לימי עד / יהיו | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | = 10. |
| 289–290 | same | same | `וְאָמַר הַדּוֹר הָאַחֲרוֹן בְּנֵיכֶם אֲשֶׁר יָקוּמוּ מֵאַחֲרֵיכֶם` (דברים כט:כא) | [equivalent] | "Your sons who will rise after you". Our proposal. |
| 287 | *tamītu utammûkanūni* | שבועה השביע אתכם | `וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] | Also 352. |
| 287 | same | same | `וַיַּשְׁבַּע יוֹסֵף אֶת בְּנֵי יִשְׂרָאֵל` (בראשית נ:כה) | [equivalent] | An oath binding later generations. |
| 287 | same | same | `אוֹ הִשָּׁבַע שְׁבֻעָה` (במדבר ל:ג) | [equivalent] | Internal object. |
| **288** | ***ana marʾēkunu mār marʾēkunu*** | **לבניכם, בני בניכם** | `וְהוֹדַעְתָּם לְבָנֶיךָ וְלִבְנֵי בָנֶיךָ` (דברים ד:ט) | [equivalent] | The same verse opens `הִשָּׁמֶר לְךָ וּשְׁמֹר נַפְשְׁךָ` (↔ 292–293, 335). |
| 288 | same | same | `אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] | |
| 288, 293 | *zarʾekunu*; *nupšātkunu lā tuḫallaqa* | לזרעכם; את נפשכם לא תאבדו | `וּבָחַרְתָּ בַּחַיִּים לְמַעַן תִּחְיֶה אַתָּה וְזַרְעֶךָ` (דברים ל:יט) | [equivalent] | Life for you and your seed vs "do not destroy your lives". |
| 290 | *lā taqabbāni* (to the sons) | לא תאמרו | `וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם` (דברים ו:ז) | [equivalent] | Speak to your sons (see also §34, 387–388). |
| 290 | same | same | `וּבְנֵיהֶם אֲשֶׁר לֹא יָדְעוּ יִשְׁמְעוּ וְלָמְדוּ` (דברים לא:יג) | [equivalent] | |
| 290–292 | *ṭēmu … šakānu … adê uṣrā* | צו … תשימו … את האמנה הזאת נצרו | `אֲשֶׁר תְּצַוֻּם אֶת בְּנֵיכֶם לִשְׁמֹר לַעֲשׂוֹת` (דברים לב:מו) | [equivalent] | Command your sons to keep. Our proposal. |
| 290–292 | same | same | `אֲשֶׁר יְצַוֶּה אֶת בָּנָיו וְאֶת בֵּיתוֹ אַחֲרָיו וְשָׁמְרוּ דֶּרֶךְ יְהוָה` (בראשית יח:יט) | [equivalent] | Our proposal. |
| 290–291 | *ṭēma šakānu* | צו … תשימו | `וַיָּשֶׂם לוֹ חֹק וּמִשְׁפָּט בִּשְׁכֶם` (יהושע כד:כה) | [equivalent] | "Set a statute" after a covenant. |
| **291–292** | ***adê annûte uṣrā*** | **את האמנה הזאת נצרו** | `כִּי שָׁמְרוּ אִמְרָתֶךָ וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | *naṣāru* + treaty = `נצר` + `ברית`; `שמר` beside `נצר` in the same verse. |
| **291–292** | same | same | `וּשְׁמַרְתֶּם אֶת דִּבְרֵי הַבְּרִית הַזֹּאת וַעֲשִׂיתֶם אֹתָם` (דברים כט:ח) | [equivalent] | "This treaty – guard!" ↔ "keep the words of this covenant". Our proposal for the exact match. |
| 292 | same | same | `הִשָּׁמְרוּ לָכֶם פֶּן תִּשְׁכְּחוּ אֶת בְּרִית יְהוָה אֱלֹהֵיכֶם` (דברים ד:כג) | [equivalent] | |
| 292 | *ina libbi adêkunu lā taḫaṭṭia* | באמנתכם לא תחטאו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | *ḫaṭû* = `חטא` against the overlord (see 66). |
| **293** | ***nupšātkunu lā tuḫallaqa*** | **את נפשכם לא תאבדו** | `כִּי אָבֹד תֹּאבֵדוּן מַהֵר מֵעַל הָאָרֶץ` (דברים ד:כו) | [equivalent] | Perishing (*ḫulluqu* = `אבד`) as the result of breaking the covenant, followed by exile (294–295). |
| 293 | same | same | `כִּי אָבֹד תֹּאבֵדוּן` (דברים ל:יח) | [equivalent] | |
| 293 | *nupšātkunu* (pl.) | נפשכם | `וְנִשְׁמַרְתֶּם מְאֹד לְנַפְשֹׁתֵיכֶם` (דברים ד:טו) | [cognate] | The plural `נַפְשֹׁתֵיכֶם` = *nupšātkunu*; with `שמר` (≠ *naṣāru*). |
| 294–295 | *mātkunu ana ḫapê nišēkunu ana šallali lā taddanā* | את ארצכם לחורבן, את עמכם לשלל לא תתנו | `וַיִּתְּשֵׁם יְהוָה מֵעַל אַדְמָתָם … וַיַּשְׁלִכֵם אֶל אֶרֶץ אַחֶרֶת` (דברים כט:כז) | [equivalent] | Land destroyed, people deported. |
| 295 | *ana šallali … taddanā* | לשלל … תתנו | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר` (דברים כח:לב) | [equivalent] | |
| 295 | same | same | `כִּי יֵלְכוּ בַּשֶּׁבִי` (דברים כח:מא) | [equivalent] | |
| 295 | *šalālu* | שלל | `לִשְׁלֹל שָׁלָל וְלָבֹז בַּז` (ישעיהו י:ו) | [cognate] | Assyria as plunderer. |
| 295 | same | same | `וּנְתַתִּים בְּיַד אֹיְבֵיהֶם וְהָיוּ לְבַז וְלִמְשִׁסָּה` (מלכים ב כא:יד) | [equivalent] | "Give" to plunder, in the oracle against Manasseh. |
| 296 | *ina pān ilāni amēlūte maḫratūni* | לפני האלים ובני האדם רצוי | `וּמְצָא חֵן וְשֵׂכֶל טוֹב בְּעֵינֵי אֱלֹהִים וְאָדָם` (משלי ג:ד) | [equivalent] | The pair "gods and men". |
| 296 | same | same | `וָטוֹב גַּם עִם יְהוָה וְגַם עִם אֲנָשִׁים` (שמואל א ב:כו) | [equivalent] | |
| 296 | same | same | `הַמְשַׂמֵּחַ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:יג) | [equivalent] | |
| 296 | *maḫru* | רצוי | `לִרְצֹנוֹ לִפְנֵי יְהוָה` (ויקרא א:ג) | [equivalent] | |
| 297 | *ina muḫḫikunu lū ṭābat* | עליכם יהי טוב | `אִם עַל הַמֶּלֶךְ טוֹב` (אסתר א:יט) | [cognate] | *ṭābu ina muḫḫi* = `טוֹב עַל`, the same idiom. |
| 297 | same | same | `וּלְמַעַן יִיטַב לָךְ` (דברים ה:טו) | [equivalent] | Also 6:18; see 335. |
| 299 | *lū naṣir* (the heir) | יהי נצור | `חֶסֶד וֶאֱמֶת יִצְּרוּ מֶלֶךְ` (משלי כ:כח) | [cognate] | *naṣāru* of a king. Our proposal. |
| 299 | same | same | `וְאֶצָּרְךָ וְאֶתֶּנְךָ לִבְרִית עָם` (ישעיהו מב:ו) | [cognate] | `נצר` + `עם`. Our proposal. |
| 300 | *ana šarrūti lū nabi šumšu* | למלכות ייקרא שמו | `אֶת שֵׁם שְׁלֹמֹה מִשְּׁמֶךָ וִיגַדֵּל אֶת כִּסְאוֹ מִכִּסְאֶךָ` (מלכים א א:מז) | [equivalent] | Courtiers' wish for the successor's name at his accession. Our proposal. |
| 300 | *nabi šumšu* | ייקרא שמו | `וְיִקָּרֵא שְׁמוֹ בְּיִשְׂרָאֵל` (רות ד:יד) | [equivalent] | |
| 301 | *šarru šanumma … lā tašakkana* | מלך אחר … לא תשימו | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ … לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] | See 71. |
| 301 | same | same | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Known (see 71). |
| 303 | *sīḫu bārtu ētapaš ina kussie … ittūšib* | מרד וקשר עשה, על כסא מלכותו ישב | `וַיְהִי בְמָלְכוֹ כְּשִׁבְתּוֹ עַל כִּסְאוֹ` (מלכים א טז:יא) | [equivalent] | Zimri, the conspirator who sat on the throne; the people make Omri king against him (16:16–18). |
| 303 | same | same | `וַיִּקְשֹׁר עָלָיו שַׁלֻּם בֶּן יָבֵשׁ וַיַּכֵּהוּ קָבָל עָם וַיְמִיתֵהוּ` (מלכים ב טו:י) | [equivalent] | |
| 305 | *ḫadû* | תשמחו | `וַיִּחַדְּ יִתְרוֹ` (שמות יח:ט) | [cognate] | Note only (`חדה` too rare). |
| 304–306 | rejoicing at the usurper's kingship | למלכותו תשמחו, לא תתפשו אותו, לא תהרגו אותו | `וַיִּשְׂמַח כָּל עַם הָאָרֶץ וְהָעִיר שָׁקָטָה` (מלכים ב יא:כ) | [divergence] | The people rejoice at the legitimate heir's enthronement, and the usurper Athaliah is killed: the inverse of the forbidden scenario. Our proposal. |
| 305 | same | same | `וְהָעָם מְחַלְּלִים בַּחֲלִלִים וּשְׂמֵחִים שִׂמְחָה גְדוֹלָה` (מלכים א א:מ) | [equivalent] | |
| 307–308 | *ana šarrūtīšu tamaggurāni* | (אם) למלכותו תסכימו | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [equivalent] | *magāru* = `אבה` "consent"; kept out of the translation. Our proposal. |
| 308–309 | *tamītu ša urdānūti tatammâniššūni* | שבועת עבדות תישבעו לו | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | A vassal's oath of servitude. |
| 310 | *ina gammurti libbikunu* | בשלמות לבכם | `בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | See 53. |
| 311 | *qarābu* | קרב | `כְּיוֹם הִלָּחֲמוֹ בְּיוֹם קְרָב` (זכריה יד:ג) | [cognate] | |
| 311 | same | same | `הַמְלַמֵּד יָדַי לַקְרָב` (תהלים קמד:א) | [cognate] | |
| 313 | *ḫubtu … ḫabātu* | ביזתו … תבוזו | `וּבַבִּזָּה לֹא שָׁלְחוּ אֶת יָדָם` (אסתר ט:טו) | [equivalent] | |
| 315 | *šumšu zāršu … lā tuḫallaqāni* | את שמו, את זרעו … לא תאבדו | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | See 141. |
| 317 | *kussie abīšu* | כסא אביו | `וּשְׁלֹמֹה יָשַׁב עַל כִּסֵּא דָּוִד אָבִיו` (מלכים א ב:יב) | [equivalent] | |
| **318–325** | an inciter from the heir's kin "saying" | אם אתם – (איש) מקרב אחיו … ישדל אתכם לזמום, יאמר לכם, לאמר | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ … בַּסֵּתֶר לֵאמֹר` (דברים יג:ז) | [equivalent] | Inciter from the family + `לֵאמֹר` + quoted words (*mā*). `הסית` kept out. Known for §10 (from memory); for §27 and §29 our proposal. |
| 322, 336 | *kapādu* | (לזמום) | `כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | Plotting against a brother. |
| 320 | *zār šarri pāniūti* | זרע המלכים הראשונים | `הַמְּלָכִים הָרִאשֹׁנִים אֲשֶׁר הָיוּ לְפָנֶיךָ` (ירמיהו לד:ה) | [equivalent] | |
| 326, 342 | *tušamḫaṣāni*, *šamḫiṣā* | תסכסכו, סכסכו | `וְסִכְסַכְתִּי מִצְרַיִם בְּמִצְרַיִם וְנִלְחֲמוּ אִישׁ בְּאָחִיו` (ישעיהו יט:ב) | [equivalent] | Brother set to fight brother. Our proposal. |
| **327 (with 268, 270, 323)** | slander – hatred – love "as yourselves" | לשנוא זה את זה; קרציהם תאכלו; כנפשכם לא תאהבו | `לֹא תֵלֵךְ רָכִיל בְּעַמֶּיךָ` (ויקרא יט:טז) | [equivalent] | Lev 19:16–18 has slander, hatred of the brother, and love "as yourself" in three consecutive verses – the cluster of §24 and §27–§29. Our proposal. |
| 327 | same | same | `לֹא תִשְׂנָא אֶת אָחִיךָ בִּלְבָבֶךָ` (ויקרא יט:יז) | [equivalent] | |
| 327 | *ana ziāri* | לשנוא | `וַיִּשְׂנְאוּ אֹתוֹ` (בראשית לז:ד) | [equivalent] | The brothers hate the son the father loves. |
| 328 | *bēl qiʾʾi* | בעל הקנאה | `וַיְקַנְאוּ בוֹ אֶחָיו; וְאָבִיו שָׁמַר אֶת הַדָּבָר` (בראשית לז:יא) | [cognate] | *qinû* = `קנאה`; the brothers' envy, the father. Our proposal. |
| 328 | same | same | `וּמִי יַעֲמֹד לִפְנֵי קִנְאָה` (משלי כז:ד) | [cognate] | |
| 331 | *ina muḫḫi abīšu ušanzirūni* | אשר אצל אביו [השניאו] | `וַיְרַגֵּל בְּעַבְדְּךָ אֶל אֲדֹנִי הַמֶּלֶךְ` (שמואל ב יט:כח) | [equivalent] | Slander to the king. Verb partly restored. |
| 332 | *aleʾ* | איה | `אַיֵּה אֱלֹהֵי חֲמָת וְאַרְפָּד` (מלכים ב יח:לד) | [equivalent] | The rhetorical "where are …?" in an Assyrian speech. Our proposal. |
| 332 | same | same | `וְאָמַר אֵי אֱלֹהֵימוֹ` (דברים לב:לז) | [equivalent] | |
| 333 | *ša … iqbûni takūn* | אשר … אמרו – נכון? | `וְהִנֵּה אֱמֶת נָכוֹן הַדָּבָר` (דברים יג:טו) | [cognate] | *kânu* = `כון`: "the word is established". |
| 333 | same | same | `וְהַמַּמְלָכָה נָכוֹנָה בְּיַד שְׁלֹמֹה` (מלכים א ב:מו) | [cognate] | The heir's kingdom "established" after the elimination of his brother. Our proposal. |
| 333 | the gods' word on the heir | אשר אשור, שמש ו[אדד] עליו אמרו | `כִּי כַּאֲשֶׁר נִשְׁבַּעְתִּי לָךְ … כִּי שְׁלֹמֹה בְנֵךְ יִמְלֹךְ אַחֲרַי` (מלכים א א:ל) | [equivalent] | The word pronounced in advance on the heir. Adad restored. |
| **335** | ***ša aḫikunu kabbidā*** | **את אחיכם כבדו** | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ כַּאֲשֶׁר צִוְּךָ יְהוָה אֱלֹהֶיךָ לְמַעַן יַאֲרִיכֻן יָמֶיךָ וּלְמַעַן יִיטַב לָךְ` (דברים ה:טו) | [cognate] | = Deut 5:16 in the common numbering. *kabātu* D = `כִּבֵּד`, followed by life (*nupšātkunu uṣrā* ↔ "prolong your days"). Our proposal. |
| **335** | ***nupšātkunu uṣrā*** | **את נפשכם נצרו** | `וְנֹצֵר נַפְשְׁךָ הוּא יֵדָע` (משלי כד:יב) | [cognate] | *napišta naṣāru* = `נצר נפש`. |
| 335 | same | same | `שֹׁמֵר נַפְשׁוֹ נֹצֵר דַּרְכּוֹ` (משלי טז:יז) | [cognate] | `שמר נפש` and `נצר` in one line. |
| 335 | same | same | `נֹצֵר פִּיו שֹׁמֵר נַפְשׁוֹ` (משלי יג:ג) | [cognate] | |
| **335** | same | same | `רַק הִשָּׁמֶר לְךָ וּשְׁמֹר נַפְשְׁךָ מְאֹד` (דברים ד:ט) | [equivalent] | Deut's `שמר נפש` = the treaty's *napišta naṣāru* with the other verb; the same verse continues with sons and grandsons (↔ 288). |
| 335 | same | same | `וְנִשְׁמַרְתֶּם מְאֹד לְנַפְשֹׁתֵיכֶם` (דברים ד:טו) | [equivalent] | Plural, as *nupšātkunu*. |
| 337 | *qinnīšu* | קנו | `לָשׂוּם בַּמָּרוֹם קִנּוֹ` (חבקוק ב:ט) | [cognate] | See 77. |
| 340 | *mala bāšû* | כל אשר ישנם | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ` (דברים כט:יד) | [equivalent] | See 5. |
| 343, 346 | *parāsu* (separate brothers) | הפרידו, תפרידו | `וְנִרְגָּן מַפְרִיד אַלּוּף` (משלי טז:כח) | [equivalent] | Slander that separates intimates. Our proposal. |
| 343 | same | same | `וְשֹׁנֶה בְדָבָר מַפְרִיד אַלּוּף` (משלי יז:ט) | [equivalent] | |
| 343 | *parāsu* | הפרידו | `פְּרִיסַת מַלְכוּתָךְ` (דניאל ה:כח) | [cognate] | `פרס` "divide", note only. |
| 346 | a brother separated from the heir | מלפני אחיו תפרידו אותו | `וַתִּסֹּב הַמְּלוּכָה וַתְּהִי לְאָחִי` (מלכים א ב:טו) | [equivalent] | Adonijah's rivalry with Solomon. |
| 344 | *attunu tašammâni* (obey the inciter) | (אם) אתם תשמעו (לו) | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [cognate] | *šemû* = `שמע` "obey"; Tayinat T v 1. |
| 347–348 | *qābiānu … turammâšūni* | את האומר … תרפו ממנו | `וְלֹא תָחוֹס עֵינְךָ עָלָיו וְלֹא תַחְמֹל וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Do not let the inciter go. Tayinat T v 3–5 (plural "speakers"). |
| 348 | *ramû* D | תרפו | `אֲחַזְתִּיו וְלֹא אַרְפֶּנּוּ` (שיר השירים ג:ד) | [equivalent] | "Hold and not let go". Not *râmu* "love". |
| 348 | same | same | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | Corpus renderings §2. |
| 349–350 | *lā tallakāninni … lā taqabbāni* | לא תבואו … ולא תאמרו (לו) | `וְהֻגַּד לְךָ וְשָׁמָעְתָּ` (דברים יז:ד) | [equivalent] | See 120–122. |
| 351–352 | *abūka adê … issakan uttammannāši* | אביך אמנה על⟨יך⟩ אתנו שׂם, השביע אותנו | `אַתָּה נִשְׁבַּעְתָּ בַּיהוָה אֱלֹהֶיךָ לַאֲמָתֶךָ כִּי שְׁלֹמֹה בְנֵךְ יִמְלֹךְ אַחֲרָי` (מלכים א א:יז) | [equivalent] | The father's oath for the heir, invoked in the brothers' rivalry. Our proposal. Tayinat T v 7–8. |
| 352 | *uttammannāši* | השביע אותנו | `הֲלוֹא הִשְׁבַּעְתִּיךָ בַיהוָה` (מלכים א ב:מב) | [equivalent] | Solomon reminds Shimei of the oath. |

### Proposals for the renderings (part 3; plain strings as they appear in the `>` lines)
- **Love and life:** *kî napšātekunu lā taraʾʾamāni* = `כנפשכם לא תאהבו`; *nupšātkunu lā tuḫallaqa* = `את נפשכם לא תאבדו`; *nupšātkunu uṣrā* = `את נפשכם נצרו` (vocalized `נִצְרוּ`); *napištu* (pl. with suffix) = `נפשכם` (distributive singular).
- **§25 formulas:** *adê annûte uṣrā* = `את האמנה הזאת` | `נצרו` (291–292); *ina libbi adêkunu lā taḫaṭṭia* = `באמנתכם לא תחטאו`; *mātkunu ana ḫapê nišēkunu ana šallali lā taddanā* = `את ארצכם לחורבן, את עמכם` | `לשלל לא תתנו`; *ana marʾēkunu mār marʾēkunu ana zarʾekunu ana zarʾ-zarʾekunu* = `לבניכם, בני בניכם, לזרעכם,` | `לזרע זרעכם`; split of the descendants formula: `אשר אחרי האמנה לימי עד` | `יהיו` (289–290); *ṭēma šakānu* = `צו … שׂם` (`צַו … לא תָּשִׂימוּ לו`; `אשר צַו ישים לכם`); *ina pān ilāni amēlūte* = `לפני האלים ובני האדם`; *maḫru* = `רצוי`; *ina muḫḫikunu lū ṭābat* = `עליכם יהי טוב`; *ana bēlūti māti u nišē lū naṣir* = `לאדנות` | `הארץ והעם יהי נצור`; *urki ana šarrūti lū nabi šumšu* = `אחרי כן למלכות ייקרא שמו`; *urki* (adverb) = `אחרי כן`.
- **Oath and *adê* formulas, new splits:** `חיזק ואתכם` | `שׂם, שבועה השביע אתכם` (286–287; *udanninūni issikunu iškunūni tamītu utammûkanūni*); *abūka adê ina muḫḫīka issīni issakan uttammannāši* = `אביך אמנה על⟨יך⟩ אתנו` | `שׂם, השביע אותנו` (cf. §30, 358–359, and Tayinat T v 14–15, 22–23: *issaṭar issakan uttammannāši*: the next translator should give *issaṭar* its own verb, `כתב`); *tamītu ša urdānūti* = `שבועת עבדות`; *tamû* G + dative = `נשבע ל־` (`תישבעו לו`).
- **Blood vengeance:** *dāmē kūm dāmē lā tatabbakāni* = `דמים תחת דמים` | `לא תשפכו`; *gimilla … turru* = `גמול … השיב` (`גמול` | `של X` | `לא תשיבו`); *kūm* = `תחת`.
- **§22–§23:** *ina ṣaḫāri ša marʾēšu* = `בקטנות בניו`; *issīšu tašakkanāni* = `עמו תשימו (חלקכם)`; *ana urdānūtīšu târu* = `לעבדותו שב`; *nakāru* G = `התנכר`; Š = `נִכֵּר (מִן)` (vocalized `תְנַכְּרוּ`); *mātāti gabbu* = `הארצות כולן`; *sīḫu ina muḫḫi šakānu* = `מרד על … שׂם`; *arītu* = `הרה` (`הַהָרָה`); *aššatu* = `אשת`; *ina pān X dagālu* = `ל־X … צפה`; *kīma ittabši* = `כאשר ייוולד`; *rabû* D = `גידל` (`תְגַדְּלוּ`); *šammu ša muātīšu* = `סם מותו`; *akālu* Š = `האכיל`; *šaqû* = `השקה`; *pašāšu* = `סך` (`תָּסוּכוּ`); *kišpī epēšu ana* = `כשפים עשה ל־`; *ilāni u ištaru* = `אלים ואלות` (vocalized `וְאֵלוֹת`); *zenû* Š = `הרגיז`.
- **§24:** *karṣī akālu* = `את קרצי … אכל` (vocalized `קַרְצֵי`); *ša aḫḫēšu mār ummīšu karṣīšunu* = `של אחיו, בני אמו, קרציהם`; *lā ṭābtušunu* = `לא טובה עליהם`; *deʾiqtašunu* = `נאה עליהם`; *aḫu* "arm" = `זרוע` (`את זרועותיכם … תשלחו`); *ina libbišunu taḫaṭṭâni* = `תחטאו בהם`; *issu libbi* (of things) = `מתוך`; *tidintu ša … iddinaššanūni* = `המתנה אשר … נתן להם`; *qinītu ša šunu iqnûni* = `הקניין אשר הם קנו`; *našû* "take away" = `נשא` (`תִּשְׂאוּ`); *eqlāti bētāti kirâti* = `שדות, בתים, גנים`; *nišē unūtu sissê kūdini* = `אנשים, כלים, סוסים, פרדים`; *imārī alpāni immerē* = `חמורים, שוורים, צאן`; *lā ina pānišunu lā šūtūni* = `לא לפניהם היא`; *ina pāni izuzzu* = `לפני עמד`; *samāḫu* Dt = `התחבר`.
- **§26:** *ḫadû* = `שמח`; *magāru* = `הסכים`; *qarāba issi X epēšu* = `קרב עם X עשה`; *ḫubta ḫabātu* = `את ביזה בזז` (`את ביזתו לא תבוזו`); *dīkta dâku* = `את הרג הרג` (`את הֶרְגּוֹ לא תהרגו`); *kussie abīšu* = `כסא אביו`.
- **§27–§29:** *kapādu* G = `זמם`, Š = `שידל … לזמום`; *zār šarri pāniūti* = `זרע המלכים הראשונים`; *rabie pāḫiti ša-rēši* (after *issu libbi*) = `הגדולים, הפחות, הסריסים`; *mār Mat-Aššur* after *issu libbi* = `בני אשור`; *ina birtuššu ina birti X* = `בינו ובין X`; *maḫāṣu* Š = `סכסך`; *ana ziāri ina pān aḫēʾiš šakānu* = `לשנוא זה את זה שׂם`; *bēl qiʾʾi* = `בעל הקנאה`; *nazāru* Š = `השניא (?)`; *aleʾ* = `אַיֵּה`; *lā … takūn* = `הלא … נכון?`; *ina balāt* = `בלי`; *kabātu* D = `כִּבֵּד` (`כַּבְּדוּ`); *parāsu* = `הפריד` (`מלפני … הפריד`); *issu pān* = `מלפני`; *qābiānu* = `האומר`; *turammâšūni* = `תרפו ממנו` (as 205).
- **Corpus renderings §4 correction proposed:** *gimillu* = `חֶמְלָה` only for "mercy"; in *gimilla turru* "avenge" = `גְּמוּל … הֵשִׁיב`.
- **verify.py:** anchor the lemma roots (`adû[` matches inside *ḫadû*[ – false positive at 305).

### Lessons for the guidelines (part 3)
- **The brief's summary of a section can misplace a motif:** §24's "as yourselves" is said of the crown prince himself (266–268), not of his brothers (269–282); read the lines before the summary.
- **A Tayinat line that "covers" a famous clause may be almost wholly restored** (T iv 11 = 268: only `-ni` preserved): say so in the parallels index, so that the key parallel is not credited to two copies.
- **Parallel copies can argue against an editorial emendation** (351 `UGU-<ka>` vs Tayinat `UGU-hi`): record it under תיינת.
- **Watch for Akkadian idioms that live on in Biblical Aramaic** (*karṣī akālu*, Dan 3:8; 6:25), not only in Hebrew; render them literally and explain.
- **Keep the Deuteronomic verb out also when it is the exact equivalent** (`הסית`, `אבה`, `הכעיס`): choose the next-best Hebrew and put the Deuteronomic verse in the apparatus; otherwise the translation itself manufactures the Deut 13 parallels.
- **The repository's verse numbering of the Decalogue differs** (Deut 5:15 = "honour your father", 5:17 = "do not covet"): check with `--show` before citing.

## Part 4: §30–§36 (lines 353–413)

### Scope
- P&W §30–§36, composite lines 353–413: **61 composite entries**, no Tayinat-only entries. File: `annotated-4--sections-30-36.rtl.md`.
- Tayinat coverage: **T v 9–77**, the whole part. **Tayinat writes §30 twice** (T v 9–15 and T v 16–23, a dittography with small differences: *lā palḫuš* / *lā kanšuš* split over two lines in the first copy, together in T v 18): both lines are given in each entry. Tayinat preserves what Nimrud lost in 353–358, 362, 369, 371–372, 380, 389–390, 400–406 and 412 (`{תיינת: …}`, Decision 5). Real variants (apparatus only): *issaṭar* "wrote" (358–359), *ṣâli* "to fight" (356), *attunu* (373), no *ina pānīni* (379), *murṣu lā ellu* "an **unclean** illness" for *lā paṭru* (389), *ana marʾēšu* "his **sons**" for *ana šāšu* "him" (395–396), *abu bēlu adê ilāni rabiūti ettequ* (398) and *unakkarūma* (401) – a different structure of §35, *takattamāni* "cover" for the editors' restored *takarrarāni* (412).

### Decisions (translator, part 4)
1. **Tayinat pluses in a complete Nimrud context stay out of the `>` line.** `{תיינת: …}` is used only where the Nimrud text is broken (Decision 5). Where Nimrud is intact and Tayinat has an extra word (*issaṭar* 358–359, *ṣâli* 356, *attunu* 373, *ana marʾēšu* 395), or where Nimrud's remains contradict Tayinat (398, 402), Nimrud is translated as it stands and Tayinat goes into the apparatus and a footnote (359). **This departs from the brief's wording for §30** ("your father wrote (`כתב`) in the treaty"): "wrote" is in Tayinat only; it is in the footnote, the parallels index and `כתב` is fixed for *šaṭāru* (406, Tayinat).
2. **Where Tayinat's word differs from the editors' restoration of a broken Nimrud word, Tayinat wins** (Decision 5): 412 *takattamāni* "cover" (Tayinat) against *ta-[kar-ra-ra-a-ni]* (P&W 1988, before Tayinat) = `{תיינת: תטמנו}`; 353 *ana* (Tayinat) against restored *[ina pān]* (same Hebrew `אל`). *katāmu* "cover" would be `כסה`, reserved (Decision 7): rendered `טמן` (`טָמְנֵם בֶּעָפָר`, Job 40:13; Isa 2:10).
3. **`(אם)`** at 355 (after the real condition "his watch they do not keep", *inaṣṣuru* without *-ni*) and 409 (after the description of the tablet, 404–408). **No oath form** in 380–384 (*tamītu annītu … taʾākunu*, a statement: stative 2mp "you are sworn" = `מושבעים`) and 393–396 (nominal clauses + precative).
4. ***palāḫu* = `ירא`** [equivalent] (354 *palḫiš* `ביראה`, 396 *lipluḫū* `יִירְאוּ`): the treaty's "fear" of the king must be visible beside Deut 6:2, 13; 13:5; 31:12–13. ***lamādu* Š = `לִמֵּד`** [cognate] (388 `תְּלַמְּדוּ`), the real cognate of Deut 4:10; 11:19.
5. ***dababtu* = `דיבור`** (386 `שבועה של דיבור שפתיים`): the noun of *dabābu* = `דיבר`; not `דבר` (reserved for *abutu*), so the echo of `דְּבַר שְׂפָתַיִם` (2 Kgs 18:20; Isa 36:5) is near but not manufactured.
6. ***târu* D *tūrtu turri*** = `השבה תשיבו` / `השבת השבה` (377, 379): *figura* kept; Hebrew `הֵשִׁיב` = "revoke" (Esth 8:8 `אֵין לְהָשִׁיב`; Amos 1:3). ***ḫasāsu* = `חשב`** (379) – **deviation** from the creation corpus (`הבין`), because the sense here is "to plan".
7. ***rakāsu* = `צרר`** (376), so that `קשר` stays the noun of *bārtu*; ***parāṣu* = `פרץ`** (399, the cognate) rather than `הפר` (Ezek 17:15–19, a different root); ***pasāsu* = `ביטל`** (398; Lauinger "voids"), keeping `מחה` for *pašāṭu* (part 5) and `מחק` free; ***egû* = `הזניח`**; ***enû* = `המיר`** (corpus).
8. **Body word *napultu* (= *napištu*) "throat" = `גרון`** (374): in a list of face, hands, throat, `נפש` would be misread; the cognate is in the apparatus (Isa 5:14).
9. ***mazzaztu* = `מעמד`** (369, 372; Isa 22:19 `וּמִמַּעֲמָדְךָ יֶהֶרְסֶךָ`), from *izuzzu* = `עמד`; ***dibbu* = `דברים`** (368; plural, "words about them" = `דברים עליהם`); ***gerû* = `התגרה`** (356, creation corpus; = Deut 2:5 `אַל תִּתְגָּרוּ בָם`); ***puluḫtu namurrāti* = `אימה והוד`** (357; Job 39:20).
10. ***murṣu lā paṭru* = `מחלה שלא נפטרו ממנה (?)`** (389): *paṭāru* ~ `פטר` [cognate] kept; P&W "incurable", Tayinat *lā ellu* "unclean".
11. **Brackets:** `[ב]פנינו (?)` (379: *ina* restored; *pānīni* uncertain), `[אֲדוֹנֵי]` (400: the editors' *[EN]*, not in Tayinat), `[אבי]` (405: editors' restoration from seal caption iii; Tayinat lacks *ab ilāni*); `[…]` in 398, 402 (remains incompatible with Tayinat); `…` for the unknown *šingāte* (378). SAAo `<ina>` (373) and `<ŠA₃-bi>` (407) get no ⟨ ⟩: the Hebrew preposition covers them (part 2 Decision 9). 406's Tayinat fill is marked `?` (SAAo places T v 70 at "406?").
12. **Vocalized here:** names at their first occurrence in the part (`אַשּׁוּר־בָּנִי־אַפְלִי, בֶּן־הַמֶּלֶךְ הַגָּדוֹל שֶׁל בֵּית הַיְּרוּשָּׁה` 353; `אֵסַרְחַדּוֹן`, `אַשּׁוּר` (land) 360; `אַשּׁוּר` (god) 393; `גִּירָּה` 410), `שָׂם` (359), and ambiguous words: `יִנְצְרוּ`, `תִּתְגָּרוּ בָּם`, `יֵשֵׁב`, `בַּחֵלֶב`, `תָּסוּכוּ`, `תִּצְרְרוּ`, `הֲשָׁבָה תָּשִׁיבוּ`, `מוּשְׁבָּעִים`, `תְּלַמְּדוּ`, `אֵלְכֶם`, `יִירְאוּ`, `אֲדוֹנֵי`, `אֲדוֹנַי`, `מוּשָׂם`, `כְּאֵלְכֶם`, `תְּאַבְּדוּ`.

### Open decisions for the user (part 4)
1. **Tayinat pluses** (Decision 1): kept out of the translation (apparatus + footnote), or added in a new notation (e.g. `{תיינת+: כתב}`) so that the clean translation shows "your father **wrote** in the treaty" (358–359), "to fight" (356) and "his sons" (396). The coordinator's brief expected `כתב` in the text.
2. ***dababtu šapti* = `דיבור שפתיים`** (chosen) or the biblical idiom itself, `דבר שפתיים` (2 Kgs 18:20, in the mouth of the Rabshakeh) – the latter would break *abutu* = `דבר`.
3. ***tūrtu turru* = `השבה תשיבו`** (literal *figura*, Esth 8:8 sense) or by sense `תבטלו` (which would collide with *pasāsu* = `ביטל`).
4. ***murṣu lā paṭru* = `מחלה שלא נפטרו ממנה (?)`** (cognate kept) or P&W's sense `מחלה חשוכת מרפא`.
5. ***ilkunu* = `אֵלְכֶם`** (393, 409; rare Hebrew form of `אֵל` + suffix) or `האל שלכם`.
6. ***sarbu* = `חֵלֶב (?)`** (373; SAAo "tallow?", P&W and Lauinger leave it untranslated).

### Progress log (part 4)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, parts 1–3 (all `>` lines extracted with their normalizations; Decisions and Proposals of parts 1–3). Parsed and drafted 353–413 unvocalized from the normalization and the transliteration, with T v 9–77; then P&W and Lauinger compared. Disagreements recorded: P&W and Lauinger resolve the oath clauses into commands throughout; P&W 353 lacks Tayinat's *lā palḫuš lā kanšuš* (written before Tayinat); P&W "only" in 385 ("with your lips only") is not in the Akkadian; P&W "accursed" vs Lauinger "hateful" (364, *nazāru* Š, kept `השניא (?)` as part 3); P&W "a ritual" (377–379) has no clear basis (perhaps *šingāte* or *ina pānīni*); P&W "guardian(s) of this treaty tablet" for *bēl ṭuppi* (400) vs Lauinger (Tayinat, no *bēl*) "whoever discards this treaty tablet"; P&W "[bury]" (412) = Tayinat "cover"; P&W "fear him" vs Lauinger "fear his sons" (396, two copies).
- Review pass (a) fidelity: every word of each normalization checked against its `>` line; brackets re-checked against the transliteration (fixed at this pass: 362 *it-tu-[šib]* → `{תיינת: יֵשֵׁב}`; 371 *[GAL ša]* → `{תיינת: הגדול של}`); added words only in `( )`: `(אם)` 355, 409; `(על)` 356; `(אותו)` 376, 409, 410; `(מעשה)` 376; `(ש)` 372; `(אותה)` 388; `(אשר)` 407; `(ו)` 404. *ana* at the end of 383 moved to `לימי` at the start of 384 (a Hebrew prefix cannot stand alone; noted).
- Review pass (b) consistency: compared by grep with parts 1–3: 359 = 352 (`שׂם, השביע אותנו.`); 360 ~ 46, 189–190; 361 ~ 84; 363 ~ 345, 270 (`אחיו, בני אמו`); 365 ~ 66–67, 106 (formula in the imperative singular); 366–367 ~ 55, 69 (`תסירו אותם`); 370 `הראה` ~ 60, 63; 371, 380–381, 391–392, 394, 403 crown-prince formula and splits (`verify.py`); 382–384 ~ 10, 289–290 (`אשר … אחרי האמנה` | `יהיו`); 387 `בשלמות לבכם` ~ 53, 310; 389–392 `באמנה … לא תבואו` (corpus *ina adê erēbu*); 395 = 9 (`בניכם, בני בניכם`); 397 `הלוח הזה`, 400 `לוח האמנה הזה` (renderings §1); 401 = i (`אשור, מלך האלים`); 405 = iii (`חותם השליט הגדול, אבי האלים`); 375 `תָּסוּכוּ` = 263; 364 `תשניאו (?)` = 329. `verify.py 1 2 3 4`: the three REVIEW lines are parts 2–3's (justified there); none from part 4.
- Review pass (c) Hebrew: read aloud; vocalized the ambiguous words (Decision 12; `יֵשֵׁב`, `יִירְאוּ`, `אֲדוֹנֵי`/`אֲדוֹנַי`, `תְּאַבְּדוּ` added at this pass). Grep of the `>` lines for the reserved words of Decision 7 (none; `כס` only in `כסא`) and for the roots of Deut 6:5–7, 13:1–19, 29:9–20, 31:9–13: the overlaps are all intended and tagged – `ירא` (354, 396 ↔ 6:2, 13; 13:5; 31:12–13), `למד` (388 ↔ 4:10; 11:19; 31:13, cognate), `היום הזה` (382 ↔ 29:9, 11, 14), `תעמדו` (386 ↔ 29:14 `עֹמֵד`), `אלה` (376–379, 397–399 ↔ 29:11, 18–20), `לבכם` (387 ↔ 6:6; 11:18), `בניכם, בני בניכם` (395 ↔ 6:2), `מושׂם` (408 ↔ 31:26 `וְשַׂמְתֶּם`, 10:2, 5 – the fixed *šakānu* = `שׂם`), `תאבדו` (413 ↔ 12:3), `אותו ייראו` (396 ↔ 13:5 `וְאֹתוֹ תִירָאוּ` – the Akkadian has the same fronted emphatic pronoun).
- `verify.py 4`: 0 problems. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches.

### Parallels index (part 4)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 354 | (T) *lā palḫuš lā kanšuš* | לא ביראה, לא בהכנעה | `אֶת יְהוָה אֱלֹהֶיךָ תִּירָא וְאֹתוֹ תַעֲבֹד` (דברים ו:יג) | [equivalent] | Reverence toward the crown prince and his brothers. Tayinat only (Nimrud has traces of *kanšuš*). Our proposal. |
| 355 | (T) *maṣṣartušu lā inaṣṣuru* | נצירתו לא ינצרו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | Verb in Tayinat only; *maṣṣartu* in Nimrud. |
| 356 | *lā tagarrišunūni* | לא תתגרו בם | `אַל תִּתְגָּרוּ בָם` (דברים ב:ה) | [cognate?] / [divergence] | Same phrase; Deut forbids provoking the peoples, the treaty obliges to confront the disloyal. *gerû* ~ `גרה` (creation corpus). Our proposal. |
| 357 | (T) *puluḫtu namurrāti ina libbišunu* | אימה והוד בלבם | `פַּחְדְּכֶם וּמוֹרַאֲכֶם יִתֵּן יְהוָה אֱלֹהֵיכֶם עַל פְּנֵי כָל הָאָרֶץ` (דברים יא:כה) | [equivalent] | Instilling fear in the opponent. Tayinat only. Our proposal. |
| 357 | same | same | `הוֹד נַחְרוֹ אֵימָה` (איוב לט:כ) | [equivalent] | The pair אימה + הוד. |
| 358–359 | (T) *abūkunu ina libbi adê issaṭar issakan utammannāši* | (apparatus) אביכם באמנה כתב, שׂם, השביע אותנו | `וַיִּכְתֹּב מֹשֶׁה אֶת הַתּוֹרָה הַזֹּאת` (דברים לא:ט) | [equivalent] | *issaṭar* "wrote" is in **Tayinat only** (both copies of §30); Nimrud: "set (it) in the treaty, made us swear". |
| 358–359 | same | same | `וַיִּכְתֹּב בַּסֵּפֶר וַיַּנַּח לִפְנֵי יְהוָה` (שמואל א י:כה) | [equivalent] | The royal law written and deposited "before YHWH" (cf. 408). Our proposal. |
| 362 | *ina kussie šarrūte ittūšib* | על כסא המלכות ישב | `וּשְׁלֹמֹה יָשַׁב עַל כִּסֵּא דָּוִד אָבִיו; וַתִּכֹּן מַלְכֻתוֹ מְאֹד` (מלכים א ב:יב) | [equivalent] | Accession followed at once by the brother problem (Adonijah, 2:13–25), as §31 follows. Our proposal. |
| 363 | *aḫḫēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | Here the brothers are protected, not inciters. |
| 365 | *qātka ina lemutti ina libbišunu ubbil* | את ידך לרעה שלח בהם | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | The formula, in the inciter's imperative to the new king. |
| 369, 372 | *mazzāsu … issu libbi mazzāsušunu unakkaršunūni* | המעמד … (ש)יסיר אותם ממעמדם | `וַהֲדַפְתִּיךָ מִמַּצָּבֶךָ; וּמִמַּעֲמָדְךָ יֶהֶרְסֶךָ` (ישעיהו כב:יט) | [equivalent] | Removal of an official from his post. "From their position" in Tayinat only. Our proposal. |
| 370 | *mazzāsu ša … abūšunu ukallimūšunūni* | המעמד אשר … אביהם הראה להם | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [equivalent] | The father's provision for the heir's brothers (cf. 89–91). Our proposal. |
| 373–376 | *ša māmīt pašāri teppašāni* | (מעשה) של התרת אלה תעשו | `וְהָיָה בְּשָׁמְעוֹ אֶת דִּבְרֵי הָאָלָה הַזֹּאת וְהִתְבָּרֵךְ בִּלְבָבוֹ לֵאמֹר שָׁלוֹם יִהְיֶה לִּי` (דברים כט:יח) | [equivalent] | A private device of the swearer to escape the oath-curse: a smearing/binding rite here, a blessing in the heart there; no escape in either (29:19). Our proposal. |
| 376, 378 | *māmīt pašāru* | התרת אלה; אלה תתירו | `וְאִם הָפֵר יָפֵר אֹתָם אִישָׁהּ … אִישָׁהּ הֲפֵרָם וַיהוָה יִסְלַח לָהּ` (במדבר ל:יג) | [divergence] | The Torah knows a lawful annulment of vows and of the `אִסָּר` "bond" (30:3); the treaty forbids any release. Our proposal. |
| 376 | *ina sīqikunu tarakkasāni* | בחיקכם תצררו | `לֶאְסֹר אִסָּר עַל נַפְשׁוֹ לֹא יַחֵל דְּבָרוֹ` (במדבר ל:ג) | [divergence] | "Binding" vocabulary of the oath: there the swearer binds himself, here a counter-binding rite. Weak; our proposal. |
| 375 | *tapaššašāni* | תסוכו | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | The substance as the object of "anoint" in both. |
| 377 | *tūrtu tutarrāni* | השבה תשיבו | `וְנַחְתּוֹם בְּטַבַּעַת הַמֶּלֶךְ אֵין לְהָשִׁיב` (אסתר ח:ח) | [equivalent] | Hebrew `הֵשִׁיב` = revoke, of a sealed royal document (cf. 407). Our proposal. |
| 377 | same | same | `עַל שְׁלֹשָׁה פִּשְׁעֵי דַמֶּשֶׂק וְעַל אַרְבָּעָה לֹא אֲשִׁיבֶנּוּ` (עמוס א:ג) | [equivalent] | `לֹא אֲשִׁיבֶנּוּ` "I will not revoke it". |
| 378 | *māmīt tapaššarāni* | אלה תתירו | `הֲיִצְלָח הֲיִמָּלֵט הָעֹשֵׂה אֵלֶּה וְהֵפֵר בְּרִית וְנִמְלָט` (יחזקאל יז:טו) | [equivalent] | No escape from a vassal oath. |
| 378 | same | same | `וְלֹא יִהְיֶה עָלֵינוּ קֶצֶף עַל הַשְּׁבוּעָה אֲשֶׁר נִשְׁבַּעְנוּ לָהֶם` (יהושע ט:כ) | [equivalent] | An oath, even one obtained by fraud, cannot be released (9:19). From memory (standard). |
| 382 | *ultu ūme annīe* | מן היום הזה | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [equivalent] | The "today" of the oath ceremony (29:9–14). |
| 380–384 | *tamītu annītu … attunu marʾēkunu ša ana ūmē ṣâti ibbaššûni taʾākunu* | השבועה הזאת … אתם ובניכם, אשר לימי עד יהיו – מושבעים | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | The oath binds the unborn. From memory (standard for 1–10 and 383–396). |
| 380–384 | same | same | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | |
| 385–386 | *kî ina kaqqar tamīti annītu tazzazāni* | כאשר על קרקע השבועה הזאת תעמדו | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ עֹמֵד הַיּוֹם לִפְנֵי יְהוָה אֱלֹהֵינוּ` (דברים כט:יד) | [equivalent] | Standing at the oath ceremony; *izuzzu* = `עמד`. |
| 385–387 | standing + whole heart | … תעמדו … בשלמות לבכם … תישבעו | `וַיַּעֲמֹד כָּל הָעָם בַּבְּרִית` (מלכים ב כג:ג) | [equivalent] | Josiah's covenant: standing, `בְּכָל לֵב וּבְכָל נֶפֶשׁ`, the words "written in this book". Our proposal. |
| 386 | *tamītu ša dabābti šapti* | שבועה של דיבור שפתיים | `אָמַרְתָּ אַךְ דְּבַר שְׂפָתַיִם עֵצָה וּגְבוּרָה לַמִּלְחָמָה` (מלכים ב יח:כ) | [equivalent] | "Lip-talk" = empty words, in the mouth of the Rabshakeh, Sennacherib's envoy (also ישעיהו לו:ה). *šaptu* = `שָׂפָה` [cognate]. Our proposal. |
| 386–387 | lips vs whole heart | דיבור שפתיים … בשלמות לבכם | `בְּפִיו וּבִשְׂפָתָיו כִּבְּדוּנִי וְלִבּוֹ רִחַק מִמֶּנִּי` (ישעיהו כט:יג) | [equivalent] | From memory. |
| 386–387 | same | same | `וְלִבָּם לֹא-נָכוֹן עִמּוֹ; וְלֹא נֶאֶמְנוּ בִּבְרִיתוֹ` (תהלים עח:לז) | [equivalent] | After `וַיְפַתּוּהוּ בְּפִיהֶם` (78:36): mouth vs heart, disloyalty to the covenant. Our proposal. |
| 386 | same | same | `נֶפֶשׁ כִּי תִשָּׁבַע לְבַטֵּא בִשְׂפָתַיִם` (ויקרא ה:ד) | [equivalent] | An oath "uttered with the lips". |
| 387 | *ina gummurti libbikunu … tatammāni* | בשלמות לבכם … תישבעו | `וַיִּשְׂמְחוּ כָל יְהוּדָה עַל הַשְּׁבוּעָה כִּי בְכָל לְבָבָם נִשְׁבָּעוּ` (דברי הימים ב טו:טו) | [equivalent] | Swearing "with all the heart" after entering the covenant (15:12, cf. 392). Our proposal. |
| 387 | same | same | `וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל לְבָבֶךָ` (דברים ו:ו) | [equivalent] | Heart, then sons (6:7) – the sequence of 387–388. `בכל לבבכם` kept out (Decision 7). |
| 387 | same | same | `כִּי קָרוֹב אֵלֶיךָ הַדָּבָר מְאֹד: בְּפִיךָ וּבִלְבָבְךָ לַעֲשֹׂתוֹ` (דברים ל:יד) | [divergence] | Mouth and heart together vs the treaty's opposition of lips and heart. |
| 387–388 | *ana marʾēkunu … lā tušalmadāni* | לבניכם … לא תלמדו | `וְלִמַּדְתֶּם אֹתָם אֶת בְּנֵיכֶם` (דברים יא:יט) | [cognate] | *lamādu* Š = `לִמֵּד`; preceded by `וְשַׂמְתֶּם אֶת דְּבָרַי אֵלֶּה עַל לְבַבְכֶם` (11:18): heart + teaching the sons, as 387–388. Our proposal (the cognate). |
| 387–388 | same | same | `וְשִׁנַּנְתָּם לְבָנֶיךָ` (דברים ו:ז) | [equivalent] | From memory (Weinfeld). |
| 388, 396 | teaching the sons; fear | לא תלמדו … ייראו | `אֲשֶׁר יִלְמְדוּן לְיִרְאָה אֹתִי כָּל הַיָּמִים … וְאֶת בְּנֵיהֶם יְלַמֵּדוּן` (דברים ד:י) | [cognate] / [equivalent] | `למד` + `ירא` + sons, as 388 + 396. Our proposal. |
| 388, 396 | same | same | `וּבְנֵיהֶם אֲשֶׁר לֹא יָדְעוּ יִשְׁמְעוּ וְלָמְדוּ לְיִרְאָה אֶת יְהוָה אֱלֹהֵיכֶם` (דברים לא:יג) | [cognate] / [equivalent] | The next generation learns fear from the reading of the written text (31:9–12; cf. §35). Our proposal. |
| 389 | *murṣu lā paṭru* (T *lā ellu*) … *ina muḫḫi ramanīkunu tašakkanāni* | מחלה שלא נפטרו ממנה (?) על עצמכם תשימו | `כִּי אָמַר מִקְרֶה הוּא בִּלְתִּי טָהוֹר הוּא כִּי לֹא טָהוֹר` (שמואל א כ:כו) | [equivalent] | **Tayinat's "unclean illness"**: impurity as the explanation of an absence from a royal rite. Our proposal. |
| 389 | same | same | `אִישׁ אִישׁ כִּי יִהְיֶה טָמֵא לָנֶפֶשׁ … וְעָשָׂה פֶסַח לַיהוָה` (במדבר ט:י) | [equivalent] | Impurity as a lawful excuse from a mandatory rite; the clean who abstains is cut off (9:13). Rests on Tayinat's *lā ellu*. Our proposal. |
| 389 | same | same | `וַתֹּאמֶר חֹלֶה הוּא` (שמואל א יט:יד) | [equivalent] | A pretended illness to evade the king. Our proposal. |
| 390–392 | *ina libbi adê … lā terrabāni* | באמנה … לא תבואו | `וַיָּבֹאוּ בַבְּרִית לִדְרוֹשׁ אֶת יְהוָה אֱלֹהֵי אֲבוֹתֵיהֶם` (דברי הימים ב טו:יב) | [equivalent] | "Enter the covenant", with `בְּכָל לְבָבָם` and the oath (15:12–15). Our proposal for the combination. |
| 390–392 | same | same | `לְעָבְרְךָ בִּבְרִית יְהוָה אֱלֹהֶיךָ וּבְאָלָתוֹ` (דברים כט:יא) | [equivalent] | "Pass into" instead of "enter". |
| 392 | same | same | `אֲשֶׁר בָּאוּ בַבְּרִית` (ירמיהו לד:י) | [equivalent] | Also `וָאָבוֹא בִבְרִית אֹתָךְ` (יחזקאל טז:ח). |
| 393 | *Aššur ilkunu* | אשור – אלכם | `לְמַעַן הָקִים אֹתְךָ הַיּוֹם לוֹ לְעָם וְהוּא יִהְיֶה לְּךָ לֵאלֹהִים` (דברים כט:יב) | [equivalent] | The covenant formula in the same "today / the unborn" ceremony. Our proposal (for the link to 29:12). |
| 393 | same | same | `אֶת יְהוָה הֶאֱמַרְתָּ הַיּוֹם לִהְיוֹת לְךָ לֵאלֹהִים` (דברים כו:יז) | [equivalent] | |
| 393–394 | *Aššur ilkunu … Aššur-bāni-apli … bēlkunu* | אשור – אלכם, אשור־בני־אפלי … – אדונכם | `וַיִּכְרֹת יְהוֹיָדָע אֶת הַבְּרִית בֵּין יְהוָה וּבֵין הַמֶּלֶךְ וּבֵין הָעָם` (מלכים ב יא:יז) | [equivalent] / [divergence] | God and king bound in one ceremony at a crown prince's enthronement (11:4, 12). In Deut YHWH alone. |
| 395–396 | *marʾēkunu mār marʾēkunu ana šāšu lipluḫū* | בניכם, בני בניכם אותו ייראו | `לְמַעַן תִּירָא אֶת יְהוָה אֱלֹהֶיךָ … אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] | Son and grandson + fear. Our proposal. |
| 396 | *ana šāšu lipluḫū* | אותו ייראו | `אַחֲרֵי יְהוָה אֱלֹהֵיכֶם תֵּלֵכוּ וְאֹתוֹ תִירָאוּ` (דברים יג:ה) | [equivalent] | Same fronted emphatic pronoun before "fear" in both, in the chapter parallel to §10, §12. Tayinat: "his sons". Our proposal. |
| 396 | same | same | `לְמַעַן יִלְמַד לְיִרְאָה אֶת יְהוָה אֱלֹהָיו` (דברים יז:יט) | [equivalent] | The king reading the written law (cf. §35). |
| 397 | *māmīt ṭuppi annî* | אלת הלוח הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse of this written document. From memory. |
| 397 | same | same | `כְּכֹל אָלוֹת הַבְּרִית הַכְּתוּבָה בְּסֵפֶר הַתּוֹרָה הַזֶּה` (דברים כט:כ) | [equivalent] | |
| 397–398 | *ennû eggû iḫaṭṭû ipassasu* | ימיר, יזניח, יחטא, יבטל | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Change / neglect / annul vs add / subtract (Levinson; from memory). |
| 397–398 | same | same | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | [divergence] | |
| 397 | *ennû* | ימיר | `נִשְׁבַּע לְהָרַע וְלֹא יָמִר` (תהלים טו:ד) | [equivalent] | Not "changing" one's oath; *enû* = `המיר` (corpus). Our proposal. |
| 397 | *ša … ennû* "whoever …" | אשר … ימיר | `מִי אֲשֶׁר חָטָא לִי אֶמְחֶנּוּ מִסִּפְרִי` (שמות לב:לג) | [equivalent] | "Whoever" + a written document. Weak; our proposal. |
| 399 | *eggûma iparraṣu māmīssun* | יזניח ויפרוץ את אלתם | `אֲשֶׁר בָּזָה אֶת אָלָתוֹ וַאֲשֶׁר הֵפֵר אֶת בְּרִיתוֹ` (יחזקאל יז:טז) | [equivalent] | Zedekiah's vassal oath: despising the oath-curse and breaking it (also 17:18–19). *parāṣu* ~ `פרץ` [cognate] in the rendering. From memory (Ezek 17 and vassal oaths). |
| 400 | *ṭuppi adê annî* | לוח האמנה הזה | `לוּחֹת הַבְּרִית` (דברים ט:ט) | [equivalent] | `בְּרִית` kept out (Decision 1); also `לֻחֹת הָעֵדֻת` (שמות לא:יח) [cognate?]. |
| 402–404 | *lū ṣalam …* | בין צלם אסרחדון … | `וּפְסִילֵי אֱלֹהֵיהֶם תְּגַדֵּעוּן; וְאִבַּדְתֶּם אֶת שְׁמָם` (דברים יב:ג) | [divergence] | Destroying images and the name is commanded there, forbidden (for the king's images) here. Our proposal. |
| 405 | *kunuk rubê rabê* (T *kunuk … annīe ša adê … šaṭirūni*) | חותם השליט הגדול … (אשר אמנת … כתובה בו) | `צוֹר תְּעוּדָה; חֲתוֹם תּוֹרָה בְּלִמֻּדָי` (ישעיהו ח:טז) | [equivalent] | A sealed, bound document entrusted to "the taught" (*lamādu*, 388). "Written in it" in Tayinat only. Our proposal. |
| 406 | (T) *ina libbi šaṭirūni* | כתובה בו | `וַיְהִי כְּכַלּוֹת מֹשֶׁה לִכְתֹּב אֶת דִּבְרֵי הַתּוֹרָה הַזֹּאת עַל סֵפֶר: עַד תֻּמָּם` (דברים לא:כד) | [equivalent] | Tayinat only (SAAo "406?"). |
| 406 | same | same | `לְהָקִים אֶת דִּבְרֵי הַבְּרִית הַזֹּאת הַכְּתֻבִים עַל הַסֵּפֶר הַזֶּה` (מלכים ב כג:ג) | [equivalent] | |
| 407 | *ina kunukki ša Aššur … kanikūni* | בחותם של אשור … חתום | `וְחִתְמוּ בְּטַבַּעַת הַמֶּלֶךְ` (אסתר ח:ח) | [equivalent] | The sealed document that cannot be revoked (cf. 377); also `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם` (ירמיהו לב:י). |
| 408 | *ina pānikunu šakinūni* | לפניכם מושׂם | `לָקֹחַ אֵת סֵפֶר הַתּוֹרָה הַזֶּה וְשַׂמְתֶּם אֹתוֹ מִצַּד אֲרוֹן בְּרִית יְהוָה אֱלֹהֵיכֶם` (דברים לא:כו) | [equivalent] | The written document set in the sanctuary. `שׂם` = *šakānu* by the fixed rule (not cognates). From memory (Steymans 2013; Levinson & Stackert; the Tayinat tablet found in the temple). |
| 408 | same | same | `וָאָשִׂם אֶת הַלֻּחֹת בָּאָרוֹן אֲשֶׁר עָשִׂיתִי` (דברים י:ה) | [equivalent] | Also `וְשַׂמְתָּם בָּאָרוֹן` (10:2); `וְנָתַתָּ אֶל הָאָרֹן אֵת הָעֵדֻת` (שמות כה:טז). |
| 408 | same | same | `וַיִּכְתֹּב בַּסֵּפֶר וַיַּנַּח לִפְנֵי יְהוָה` (שמואל א י:כה) | [equivalent] | The law of the kingship, written and deposited "before YHWH". Our proposal. |
| 409 | *kî ilikunu lā tanaṣṣarāni* | כאלכם לא תנצרו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | |
| 409 | same | same | `אֵין בָּאָרוֹן רַק שְׁנֵי לֻחוֹת הָאֲבָנִים` (מלכים א ח:ט) | [divergence] | The tablets in the holy of holies, but not revered "as god". |
| 409 | same | same | `וַיִּקַּח אֶבֶן גְּדוֹלָה וַיְקִימֶהָ שָּׁם תַּחַת הָאַלָּה אֲשֶׁר בְּמִקְדַּשׁ יְהוָה` (יהושע כד:כו) | [equivalent] | Covenant written in a book + a stone in the sanctuary. Our proposal. |
| 410–411 | *ana Girra tapaqqidāni* | לגירה תפקידו | `עַד תֹּם כָּל הַמְּגִלָּה עַל הָאֵשׁ אֲשֶׁר עַל הָאָח` (ירמיהו לו:כג) | [equivalent] | The king burns the written scroll (`אַתָּה שָׂרַפְתָּ אֶת הַמְּגִלָּה הַזֹּאת`, ירמיהו לו:כט). Coordinator's list; literature not checked. |
| 411 | *ina mê tanaddāni* | למים תשליכו | `תִּקְשֹׁר עָלָיו אֶבֶן וְהִשְׁלַכְתּוֹ אֶל תּוֹךְ פְּרָת` (ירמיהו נא:סג) | [equivalent] | A written book thrown into the Euphrates. Coordinator's list. |
| 411 | same | same | `וַיַּשְׁלֵךְ מִיָּדָו אֶת הַלֻּחֹת וַיְשַׁבֵּר אֹתָם תַּחַת הָהָר` (שמות לב:יט) | [equivalent] | The covenant tablets thrown down and broken. |
| 410–412 | fire, water, dust | לגירה … למים … בעפר | `וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד אֲשֶׁר דָּק; וַיִּזֶר עַל פְּנֵי הַמַּיִם` (שמות לב:כ) | [equivalent] | The same triad of destruction (the calf). Our proposal. |
| 410–412 | same | same | `וָאֶשְׂרֹף אֹתוֹ בָּאֵשׁ וָאֶכֹּת אֹתוֹ טָחוֹן הֵיטֵב עַד אֲשֶׁר דַּק לְעָפָר; וָאַשְׁלִךְ אֶת עֲפָרוֹ אֶל הַנַּחַל` (דברים ט:כא) | [equivalent] | Fire, dust (*eperu* = `עָפָר` [cognate]), water, after the broken tablets (9:17). Our proposal. |
| 410–412 | same | same | `וַיִּשְׂרֹף אֹתָהּ בְּנַחַל קִדְרוֹן וַיָּדֶק לְעָפָר` (מלכים ב כג:ו) | [equivalent] | Josiah's destruction of cult objects. Our proposal. |
| 412 | (T) *ina epri takattamāni* | בעפר תטמנו | `טָמְנֵם בֶּעָפָר יָחַד` (איוב מ:יג) | [equivalent] | The verb is Tayinat's (*katāmu* "cover"; `כסה` reserved). |
| 412 | *šipir nikilti* | מלאכת נכל | `בְּנִכְלֵיהֶם אֲשֶׁר נִכְּלוּ לָכֶם` (במדבר כה:יח) | [cognate] | *nikiltu* (*nakālu*) ~ `נכל`. |
| 413 | *tuḫallaqāni* | תאבדו | `וְאִבַּדְתֶּם אֶת שְׁמָם מִן הַמָּקוֹם הַהוּא` (דברים יב:ג) | [equivalent] | With burning (`תִּשְׂרְפוּן בָּאֵשׁ`) in the same verse. |
| 413 | same | same | `וְנָתְנוּ אֶת אֱלֹהֵיהֶם בָּאֵשׁ … וַיְאַבְּדוּם` (מלכים ב יט:יח) | [equivalent] | The Assyrian kings burn and destroy the gods of the nations. Our proposal. |

### Proposals for the renderings (part 4; plain strings as they appear in the `>` lines)
- **The tablet (§35, for parts 5–7):** *ṭuppi adê annî* = `לוח האמנה הזה` (renderings §1, confirmed); *ṭuppu annû* = `הלוח הזה`; *māmīt ṭuppi annî* = `אלת הלוח הזה`; *bēl(ē) ṭuppi adê* = `אדוני לוח האמנה` (vocalized `אֲדוֹנֵי`); *kunukku* = `חותם` (also "sealed tablet"); *kunuk rubê rabê ab ilāni* = `חותם השליט הגדול, אבי האלים` (= seal caption iii); *ina kunukki ša Aššur šar ilāni kanik* = `בחותם של אשור, מלך האלים, חתום`; *kanāku* (stative) = `חתום`; *ina pānikunu šakin* = `לפניכם מושׂם` (vocalized `מוּשָׂם`); *kî ilikunu lā tanaṣṣarāni* = `כאלכם לא תנצרו` (vocalized `כְּאֵלְכֶם`); *šaṭāru* = `כתב` (*šaṭir* = `כתובה`); *bēlēya* = `אדוני` (vocalized `אֲדוֹנַי`).
- **"The gods named in this tablet" (renderings §1, for the curse lists):** with *adê* `האלים, כל אשר נזכר שמם בלוח האמנה הזה`; without *adê* `בלוח הזה`; *Aššur šar ilāni u ilāni rabiūti bēlēya* = `אשור, מלך האלים, והאלים הגדולים, אדוני`.
- **Verbs against the tablet and the oath:** *enû* = `המיר` (`ימיר`, `תמירו`); *egû* = `הזניח`; *ḫaṭû* = `חטא`; *pasāsu* = `ביטל`; *parāṣu* = `פרץ` (`יפרוץ את אלתם`); *nakāru* D (the tablet, statues) = `הסיר` (`תסירו (אותו)`, `יסיר`); *ana Girra paqādu* = `לגירה הפקיד`; *ina mê nadû* = `למים השליך`; *ina epri katāmu* = `בעפר טמן`; *ina mimma šipir nikilti* = `בכל מלאכת נכל`; *abātu* = `הרס`; *ḫulluqu* = `אִבֵּד` (`תְּאַבְּדוּ`); *sapānu* = `שטח`. (*pašāṭu* "erase" = `מחה`, corpus, still free for part 5.)
- **Oath release:** *māmīt pašāri* = `התרת אלה`; *māmīt pašāru* = `אלה התיר` (`אלה תתירו`); *tūrtu turru* = `השבה השיב` (`השבה תשיבו`, `השבת השבה`); *rakāsu* = `צרר`; *pašāšu* = `סך` (as part 3); *ḫasāsu* = `חשב`; *šingu* = `…` (unknown); *memmēni* = `כלשהו`.
- **§34:** *kaqqar tamīti annītu* = `קרקע השבועה הזאת`; *izuzzu* = `עמד` (`תעמדו`); *tamītu ša dabābti šapti* = `שבועה של דיבור שפתיים`; *lamādu* Š = `לימד` (`תְּלַמְּדוּ`); *murṣu lā paṭru* = `מחלה שלא נפטרו ממנה (?)`; *ina muḫḫi ramanīkunu šakānu* = `על עצמכם שׂם`; *ramānu* = `עצם` (`עצמכם`); *Aššur ilkunu* = `אשור – אלכם`; *… bēlkunu* (nominal clause) = `… – אדונכם`; *palāḫu* = `ירא` (`יִירְאוּ`; adverb *palḫiš* = `ביראה`); *kanšiš* = `בהכנעה`; *ana urki ūmē* = `לימים שאחרי כן`.
- **§33:** *tamītu annītu* = `השבועה הזאת`; *ultu ūme annīe* = `מן היום הזה`; *adi ša urki adê ibbaššiūni* = `עד אשר אחרי האמנה` | `יהיו`; *taʾākunu* = `מושבעים` (vocalized `מוּשְׁבָּעִים`).
- **§30–§31:** *dagālu ana/ina pān* = `הביט אל`; *maṣṣarta naṣāru* = `נצירה נצר` (`נצירתו לא ינצרו`); *gerû* = `התגרה ב־` (`לא תתגרו בם`); *kî ramanīkunu* = `כ(על) עצמכם`; *puluḫtu namurrāti* = `אימה והוד`; *erēbu* Š = `הביא`; *mā abūkunu ina libbi adê issakan utammannāši* = `לאמר: "אביכם באמנה` | `שׂם, השביע אותנו."`; *ina kussie šarrūte ittūšib* = `על כסא המלכות יֵשֵׁב`; *ina pān aḫišunu* = `לפני אחיהם`; *nazāru* Š = `השניא (?)` (as part 3); *qātka ina lemutti ina libbišunu ubbil* = `את ידך לרעה שלח בהם!`; *issu pān X nukkuru* = `מלפני X … הסיר`; *dibbīšunu lā damqāte* = `דברים עליהם, לא נאים`; *mazzaztu* = `מעמד` (`המעמד`, `ממעמדם`); *kullumu* "assign" = `הראה ל־`.
- **§32:** *sarbu* = `חֵלֶב (?)`; *ilāni ša puḫri* = `האלים של האספה`; *napultu* (body) = `גרון`; *sīqu* = `חיק`.
- **Proposed corrections:** creation corpus *ḫasāsu* = `הבין` → add "`חשב` when it means 'plan'"; `verify.py` could warn when a `{תיינת: …}` is used on a line whose composite has no break (to catch Tayinat pluses entering the text).

### Lessons for the guidelines (part 4)
- **Distinguish a Tayinat *fill* from a Tayinat *plus*.** Decision 5 covers words broken in Nimrud; a word that Tayinat has and an intact Nimrud line lacks (*issaṭar*, *ṣâli*) is a variant, not a restoration. Check the Nimrud transliteration for continuity before using `{תיינת: …}`.
- **Pre-Tayinat restorations of the 1988 composite can be wrong** (412 *takarrarāni* vs Tayinat *takattamāni*; 400 *[EN]*, 405 *[AD]* with no support in Tayinat): compare every `[ ]` of the composite with Tayinat, and prefer Tayinat's word.
- **A scribal duplicate in Tayinat (§30 twice)** gives two readings of the same line: record both, and use the fuller one (T v 18) for a fill.
- **A stative 2pl (*taʾākunu*) is a statement, not an oath clause**: no `אם`, no `(אם)`; read the endings, not only the *-ni*.
- **Fronted emphatic pronouns** (*ana šāšu lipluḫū*) are worth keeping in place: the Hebrew order (`אותו ייראו`) then shows a real syntactic match with Deut 13:5 `וְאֹתוֹ תִירָאוּ`.
- **Keep reserved words out also in Tayinat-only words** (412 *katāmu* "cover" = `כסה`, Decision 7): choose the Hebrew idiom of the same act (`טמן בעפר`).

## Part 5: §37–§56 (lines 414–493)

### Scope
- P&W §37–§56 (with §38A, §54A), the standard curse list: composite lines 414–493 with 418A–C, **83 composite entries**, plus **3 Tayinat-only entries** (`T vi 45`–`T vi 47`: Adad and Šala of Kurbail; Šarrat-Amqarruna, "the queen of Ekron"), placed after 466 where SAAo attaches them (labels `466A`, unlabelled, `466B`). File: `annotated-5--sections-37-56.rtl.md`.
- Language: mostly **Standard Babylonian** (literary curse language): *Mulliltu*, *šamāmī*, *ultu*, *itti*, *lēkul*, *ay* + preterite, *lū lā* + present, and 2mp **imperatives** inside chains of 3rd-person precatives (*rupdā* 421, *ittallakā* 424, *aklā* 449, *runkā* 463). Noted in every פירוק field and in the introduction.
- Tayinat coverage: **T v 78–90** (414–422; T v 90 is traces only) and **T vi 1–76** (431–493). **Lines 423–430 (Šamaš from 423, Ninurta, Venus) are not in Tayinat**: the Sîn → Šamaš → Ninurta → Venus sequence rests on the Nimrud tablets alone from 423 on. Tayinat **lacks §53** (the Sebetti, 464–465), has a **different §54** (Aramiš "lord of Qarnê and Aza'i … fill you with green water", T vi 44; the Nimrud remains do not match it) and **adds T vi 45–47**. Tayinat variants of substance: 417 "make **your** words evil" (Nimrud "the word of his mouth"); 418B UZU "flesh" (= *lā ṭūb šīri* "ill health") for Nimrud NUMUN "seed"; 435 adds "**your seed**"; 440 *zunni šamūte* "**rain**" for the editors' restored *mīla* "high water"; 441 passive *lizzammâ ana lā ṭābti*; 447 *qāqānu* (a pest) *ultu libbi* fills the Nimrud gap; 462 *lišabši* for *liškun*; 469 **Karḫuḫa** (a second god) for *ištar* "goddess"; 470 *dāmēkunu* "**your blood**" for the editors' restored *šīnātakunu* "your urine"; 476 *ina balṭūti* "from **among the living**"; 477 *lizammû* (deprive) for *liṣammû* (make thirsty).

### Decisions (translator, part 5)
1. **Tayinat beats the 1988 restorations** (part 4, Decision 2) twice in key words: 440 `{תיינת: גשם ורביבים}` (Nimrud ⸢A⸣.[KAL] fits A.AN as well) and 470 `{תיינת: דמיכם}` (Nimrud [KAŠ₃]-MEŠ). Adad therefore withholds **rain**, not the river flood, which makes 440 an equivalent of Deut 11:17; 28:23–24 – **on Tayinat only**. Tayinat fills of broken Nimrud words (Decision 5): 414, 415, 442, 443, 447–448, 461–463, 467–468, 485.
2. **Nimrud intact → Nimrud translated** (part 4, Decision 1): 435 (no "your seed"; Tayinat in the apparatus), 418B (NUMUN "seed" kept with `(?)`), 462 (*liškun*), 469 (no Karḫuḫa). 466: the Nimrud remains (*EN im …*, *…-tu*) are incompatible with Tayinat → `אֲרָמִישׁ, אדון […] אתכם […]`, Tayinat's text in the apparatus and in the footnote.
3. **SB imperatives** are Hebrew imperatives with "!" (`שוטטו!`, `התהלכו!`, `אִכְלוּ!`, `התרחצו!`); the 2mp of *aklā* is noted beside Lev 26:29's 2mp.
4. **Deuteronomic words kept out, the next-best Hebrew chosen** (each tagged in the apparatus): *dīʾu* = `חולי ראש` (not `קדחת`, Deut 28:22; PW "malaria"); *zunnu* / *šamūtu* = `גשם` / `רביבים` (not `מטר`); *ṣeḫēru* D = `הקטין` (not `המעיט` ↔ 28:38 `וּמְעַט`); *ebūru* = `קציר` (not `יבול`, Deut 11:17); *kurummatu* = `שעורים` (not `דגן`); *ḫušaḫḫu* = `כפן`, *sunqu* = `דוחק`, *būru* = `רעבון` (not `חֹסֶר` / `מָצוֹק` of 28:48, 53, 57); *zummû* D = `החסיר`; *emēdu* N = `נשען` (**not** the brief's `ולא תנוחו`: `נוח` is reserved for the cognate *nâḫu*, creation corpus); *ikkibu* = `איסור` (not `תועבה`, Deut 14:3; PW "forbidden"); *lazzu* = `מתמיד` (not `נאמן`, Deut 28:59 – root `אמנ` reserved for *adê*); *tārītu* = `מינקת` (not `אומנת`, same reason); *taktīmu* (from *katāmu*) = `שמיכה` (not `מכסה`, root `כסה` reserved); *eklētu* = `חשכה`, *eṭû* = `אפל` only in 485 (corpus rule); *mūtānu* = `מגפה`.
5. **Cognates made visible** (all tagged): *arāku* `אורך`, *šībūtu* `שיבה`, *tānēḫu* `אנחה`, *ṣabītu* `צבייה`, *walādu* `לידה`, *ummu* `אם`, *sūqu* `שוק`, *eṣemtu* `עצם`, *ṭênu* `טחן`, *ṭebû* `טבע`, *labāšu* `לבש`, *kalbu*, *ḫuzīru*, *paqādu* `פוקד`, *mû*, *qaštu*, *šebēru*, *idu* `יד`, *rēmu*, *ezzu* `עז`, *tûltu* `תולעת` (Tayinat), *arqu* (Tayinat, apparatus), *manû* `מנה`, *ākilu* `אוכל`, *natāku* `נתך`, *qaqqaru* `קרקע`, *arratu* / *arāru* `מארה` / `ארר`, *marṣu* `נמרצת`, *nasāḫu* `נסח`, *ṣamû* `הצמיא`, *ṣillu* `צל`, *akalu*, *ezēbu*, *paṭāru* `נפטר`, *pagru* `פגר`, *karšu* `כרס`, *naqbaru* `קבר`, *mākālu* `מאכל`, *kupru* `כפר`, *šīnātu* `שתן`, *napṭu* `נפט`, *mašqītu* `משקה`, *piššatu* `סיכה`, *rābiṣu* `רובץ`.
6. ***ḫīrtu* = `רעיה`** (417, 428; *aššatu* = `אשה`, part 3); ***sūnu* = `חיק`**; ***nâlu* Š = `השכיב`** (↔ the qere `יִשְׁכָּבֶנָּה`, 28:30); ***bêlu* = `משל ב־`** (the cognate `בָּעַל` would read "marry" beside the wives).
7. ***parāsu* "cut off (from the land)" = `כרת`** (437–438, 440; Jer 9:20 `לְהַכְרִית עוֹלָל`); part 3's `הפריד` stays for "separate from before". ***ḫalāpu* D = `העטה`** (`יַעֲטֶה`), keeping `לבש` for *labāšu* (451). ***qabû* "ordain" = `אמר`** (420). ***kullumu* = `הראה`** (432). ***našpantu* = `מפלה`** (465, 489). ***ina libbikunu* = `בתוככם`** (456, 461, 470; ↔ Lev 26:25 `בְּתוֹכְכֶם`), *ultu libbi* = `מתוך`.
8. **Gtn:** `התהלך` (424; the Hitpael carries the iteration), `תמיד` (478, as part 1), nothing added in 471 (`יִתְּכוּ`) and 483 (`יסחבו`).
9. **Names vocalized at their first occurrence in the part:** `אַשּׁוּר` (god 414; city 483), `מוּלִּלְתּוּ` (SB form, 417), `אָנוּ`, `סִין`, `נַנָּרוּ`, `שַׁמַשׁ`, `נִינוּרְתָּה`, `דִּלְבַּת`, `סַגְמֶגַר`, `בֵּל` (the biblical form, Isa 46:1), `אֵסַגִּיל` (EST renderings §3), `מַרְדּוּךְ`, `צַרְפָּנִיתוּ`, `בֵּלֶת־אִילִי`, `אֲדַד`, `אִשְׁתַּר`, `נֵרְגַל`, `נִינְוֵה`, `אַרְבֵּאִיל`, `גּוּלָה`, `הַשִּׁבְעָה`, `אֲרָמִישׁ`, `שָׁלָה`, `כּוּרְבַּאִיל`, `שַׁרַּת־אַמְקַרּוּנָה`, `בֵּית־אֵל`, `עֲנָת`, `כּוּבָּבָה`, `כַּרְכְּמִישׁ`, `אוּטוּקּוּ`; *Qarnê* (apparatus) = `קַרְנַיִם` (Amos 6:13; the Assyrian province *Qarnīna*). Ambiguous words vocalized: `רַעְיָתוֹ`, `רַעְיוֹתֵיכֶם`, `תָּרַע`, `יַעֲטֶה`, `צְבִיָּה`, `יִשָּׂא`, `יְמַלֵּא`, `יַרְאֶה`, `יְאַבֵּד`, `תְּאַבֵּד`, `מֵינִקְתְּכֶם`, `נְאוֹתֵיכֶם`, `אִכְלוּ`, `אִטְּכֶם`, `תָּשִׂים`, `זִיבָה`, `יִתְּכוּ`, `יָאוֹרוּ`, `יִסְּחוּ`, `יַצְמִיאוּ`, `מַשְׁקְכֶם`, `סִיכַתְכֶם`.
10. **No oath form** in the whole part: the curses are 3rd-person precatives; no `אם`, no `(אם)`.
11. **Brackets:** `[של]` (469), `[בנשקם]`, `[ישימו]` (464–465, no Tayinat), `⟨ומישרים⟩` (422, SAAo `<me-ša₂-ri>`); SAAo `<ina>` (421), `<ŠA₃>` (488), `ŠAḪ-<MEŠ>` (451) without ⟨ ⟩ (part 2, Decision 9); `(?)` for 418B *zēr*, 447 *qūqānu*, 470 *rimṭu*. 423: the normalization's *īnīšunu* "their eyes" contradicts the transliteration IGI.2-MEŠ-**ku-nu**: translated `עיניכם` (part 2 lesson).

### Open decisions for the user (part 5)
1. **418B** *nissatu lā ṭābtu zēr* = `יגון, לא טוב של זרע (?)` (Nimrud, literal) or Tayinat's *lā ṭūb šīri* "ill health" (`ובריאות רעה`), which PW and Lauinger follow; NUMUN may be a Nimrud error for UZU.
2. **440 and 470: Tayinat over the 1988 restorations** (rain instead of high water; blood instead of urine) – adopted by part 4's Decision 2; the 440 rain parallel to Deut 28:23–24 depends on it.
3. ***abbūta ṣabātu* = `המליץ על`** (by sense, 418) or literal `תפש את אבהותכם` (unintelligible in Hebrew).
4. ***ikkibu* = `איסור`** (chosen) or the exact Deuteronomic equivalent `תועבה` (Deut 14:3 `לֹא תֹאכַל כָּל תּוֹעֵבָה` – *ikkibu* is typically a food taboo).
5. ***arratu maruštu* = `מארה נמרצת`** (cognate, 1 Kgs 2:8 `קְלָלָה נִמְרֶצֶת`) – modern readers hear "energetic"; alternative `מארה מכאיבה`.
6. **Esaggil:** `אֵסַגִּיל` (EST renderings §3) vs the creation corpus's `אֵסַגִּיל` – one form for all corpora.
7. ***sūqu* = `שוק`** (biblical "street", the cognate; Song 3:2 `בַּשְּׁוָקִים וּבָרְחֹבוֹת`) – modern "market".
8. ***rimṭu* = `זִיבָה (?)`** (SAAo "venereal disease") or a neutral `מחלה קשה`.
9. **Šarrat-Amqarruna** in the Akkadian form `שַׁרַּת־אַמְקַרּוּנָה` (note: "the queen of Ekron") or Hebraized `שָׂרַת־עֶקְרוֹן`.
10. **466:** Tayinat's Aramiš curse ("fill you with green water") only in the apparatus/footnote (chosen, the Nimrud traces differ) or in the text as `{תיינת}`.
11. ***lazzu* = `מתמיד`** (literal) vs P&W's "unhealing" (`שאינו נרפא`, which would echo Deut 28:27, 35 `לֹא תוּכַל לְהֵרָפֵא` by the translation).

### Progress log (part 5)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, the `>` lines of parts 1–4 (428 lines, grepped by script) and their Decisions and Proposals; printed Deut 28:15–68, Lev 26:14–39 and about 120 comparison verses from `תנך-מנוקד` with a helper script before quoting. Parsed and drafted 414–493 (with T v 78–90, T vi 1–76) unvocalized, then compared P&W and Lauinger. Disagreements recorded: P&W (1988) restored "sea[sonal flooding]" (440) and "[urine]" (470) where Tayinat has rain and blood; P&W adds "[grain]" in 441 (not in the Akkadian; Lauinger "lack grain"); P&W "take possession of your life" for *lissaḫūkunu* (476: "tear out"); P&W "malaria" for *dīʾu*; P&W "unhealing" for *lazzu* ("lasting"); P&W "your seed" in 435 (Tayinat only); P&W "Pleiades" for the Sebetti. The annotated file is assembled by a script from the SAAo data and the entry texts (scratchpad), so the C/N/T lines are exact copies of the data.
- Review pass (a) fidelity: every word of each normalization checked against its `>` line; brackets re-checked against the transliteration (Decision 11); `{תיינת: …}` only where Nimrud is broken, Tayinat pluses in the apparatus (435, 454 *lū*, 462, 469, 476); 423 translated by the transliteration. Checked at this pass: the fills where only part of a Nimrud word survives (443 *⸢le⸣-[kul]* → `{תיינת: יאכל}`, 463 *ru-[un-ka]* → `{תיינת: התרחצו}`, 485 *[lu]* → `{תיינת: יהיו}`); words with a damaged but legible root stay unbracketed (416 *[a].a*, 433 *⸢kab⸣-[tu]*, 460 *⸢la⸣*, 464 *qar-du-[te]*).
- Review pass (b) consistency: the god epithets of renderings §2 letter for letter (414, 418A, 419, 422, 425, 428, 433, 435, 437, 440, 453, 455, 461, 464, 467, 469); 472–473 = renderings §1 without *adê* (`האלים, כל אשר נזכר שמם בלוח הזה`, split at `,`); repeated strings inside the part: `מחלה, אנחה` (418A, 461), `נדודי שינה` (418A, 487), `לגורלכם יגזור/יגזרו` (434, 486), `בתוככם ישים/תשים` (456, 470), `מראה עיניכם` (423, 428, 482), `כלבים, חזירים` (451, 482, 484), `אִטְּכֶם` (452, 477), `מפלתכם … ישים(ו)` (465, 489), `יאכל` (443, 448), `מוללתו` (417, 457); against parts 1–4 by grep: `האלים` plural for DINGIR (431, 455; as Tayinat and renderings), `מן הארץ … אִבֵּד` (436 ~ 161, 315), `בניכם, בנותיכם` (446 ~ 115), *kullumu* `הראה`, *šakānu* `שׂם` forms, *qabû* `אמר`, *napištu* `נפש`. `verify.py 1 2 3 4 5`: 0 problems; the three REVIEW lines are parts 2–3's (justified there); none from part 5.
- Review pass (c) Hebrew: read aloud; vocalized the ambiguous words (Decision 9; `נְאוֹתֵיכֶם` against `נאות` "fitting", `יַרְאֶה` against "יִרְאֶה", `תָּרַע` against Deut 28:54's `תֵּרַע`, `יָאוֹרוּ` plene so that it strips to `יאורו`). Grep of the `>` lines for the reserved words of Decision 7 (none; `אפלים` in 485 is the corpus rendering of *eṭû*) and for the roots of Deut 28:15–68, 29:9–20: the overlaps are all intended and tagged (`יכו` ↔ `יַכְּכָה`; `מארה`/`יאורו` ↔ `הַמְּאֵרָה`/`אָרוּר`; `יסחו` ↔ `וְנִסַּחְתֶּם`; `ארבה`; `אכל`; `בשר בניכם`; `חשכה` ↔ `בָּאֲפֵלָה`; `ישיגו` ↔ `וְהִשִּׂיגוּךָ`; `יעזבו` ↔ `עֲזַבְתָּנִי`; `רחמים`; `אויב`; `חיק`; `השכיב` ↔ the qere; `תולעת` (Tayinat); `צמא`; `רעב`; `אבד`; `עז`). **Translation echoes recorded so that they are not taken for evidence:** `תָּרַע` (418) / `תֵּרַע עֵינָהּ` (28:54, 56); `נשען` (479) / `מִשְׁעַן לֶחֶם` (Isa 3:1); `סתר` (478) / `בַּסָּתֶר` (28:57; 13:7); `מראה עיניכם` (corpus rendering) / `מִמַּרְאֵה עֵינֶיךָ` (28:34, 67) – a real equivalent, but the identical noun is the translation's.
- `verify.py 5`: 0 problems. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches (fixed on the way: references after "של", footnote references without the book name, Esth 1:17, Isa 17:1, 2 Kgs 1:2 `בְּבַעַל`, Jer 46:2 `בְּכַרְכְּמִשׁ`, Deut 30:19 `הַעִדֹתִי`, Ezek 23:3).

### Parallels index (part 5)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 419–430 | **the order** Sîn (419–421) → Šamaš (422–424) → Ninurta (425–427) → Dilbat/Venus (428–430) | צרעת → בלי משפט, מראה עיניים, חשכה → בשר לנשר ולעיט → רעיות, בית, רכוש | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) → `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) → `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן` (דברים כח:כח) → `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר` (דברים כח:ל) | [divergence] (order) | Deut 28:26–33 has the four curses in EST's order except Ninurta's, which comes one place earlier (28:26 before 28:27). In EST each curse belongs to its god (moon–skin disease, sun–justice and light, warrior–corpses, Venus–love); in Deut, where YHWH alone curses, the sequence has no motivation – the classic argument for dependence (Weinfeld 1972; Steymans 1995; from memory). **423–430 rest on Nimrud alone** (Tayinat broken). |
| 414 | *šīmat lemutti … lišīmkunu* | גורל רעה … יגזור לכם | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה אֶת הַמְּהוּמָה וְאֶת הַמִּגְעֶרֶת` (דברים כח:כ) | [equivalent] | The first, general curse of the head god, before the specific ones. From memory (Steymans). |
| 415 | *arak ūm(ī)* | אורך ימי | `כִּי הוּא חַיֶּיךָ וְאֹרֶךְ יָמֶיךָ` (דברים ל:כ) | [cognate] | *arāku* = `ארך`: the Deuteronomic blessing denied. |
| 415 | same | same | `וּלְמַעַן יַאֲרִכֻן יָמֶיךָ` (דברים ו:ב) | [cognate] | Also 4:40; 5:29 (repository numbering = standard 5:30). |
| 415–416 | *arak ūm šēbūti … ay iqīškunu* | אורך ימי שיבה … אל יעניק לכם | `לֹא תַאֲרִיכֻן יָמִים עָלֶיהָ` (דברים ד:כו) | [cognate] | The curse in the same root; also 30:18. Our proposal (the exact pair). |
| 415 | *šēbūtu* | שיבה | `תִּקָּבֵר בְּשֵׂיבָה טוֹבָה` (בראשית טו:טו) | [cognate] | *šību* ~ `שָׂב`. |
| 416 | *kišid littūti ay iqīš* | השגת ישישות אל יעניק | `וְלֹא יִהְיֶה זָקֵן בְּבֵיתְךָ כָּל הַיָּמִים` (שמואל א ב:לב) | [equivalent] | No old age as a curse (Eli's house). Our proposal. |
| 417 | *amat pîšu lilammin* | את דבר פיו תרע | `וַיַּהֲפֹךְ יְהוָה אֱלֹהֶיךָ לְּךָ אֶת הַקְּלָלָה לִבְרָכָה` (דברים כג:ו) | [divergence] | Mullissu turns her husband's word to evil; YHWH turns the curse to blessing. Tayinat "your words". Our proposal. |
| 418A | *murṣu tānēḫu dīʾu diliptu* | מחלה, אנחה, חולי ראש, נדודי שינה | `וְהִפְקַדְתִּי עֲלֵיכֶם בֶּהָלָה אֶת הַשַּׁחֶפֶת וְאֶת הַקַּדַּחַת מְכַלּוֹת עֵינַיִם וּמְדִיבֹת נָפֶשׁ` (ויקרא כו:טז) | [equivalent] | Wasting diseases of body and soul. P&W's "malaria" (*dīʾu*) would manufacture `קדחת`. |
| 418A | same | same | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת וּבַדַּלֶּקֶת` (דברים כח:כב) | [equivalent] | |
| 418A–C | *… eli naphar bītātikunu lišaznin* | … על כל בתיכם יגשים | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) | [divergence] | The sky god "rains" diseases; Deut's rain turns to dust. `מטר` kept out. |
| 419 | *ina saḫaršubbû liḫallipkunu* | בצרעת יעטה אתכם | `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) | [equivalent] / [divergence] | Skin disease; Deut lists other terms (`וּבַגָּרָב וּבֶחָרֶס`). `שחין` kept out. From memory. |
| 419 | same | same | `יַכְּכָה יְהוָה בִּשְׁחִין רָע עַל הַבִּרְכַּיִם וְעַל הַשֹּׁקַיִם אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:לה) | [equivalent] | |
| 419–420 | *liḫallipkunu* (clothe) | יעטה אתכם | `תְּהִי לוֹ כְּבֶגֶד יַעְטֶה` (תהלים קט:יט) | [equivalent] | The curse as a garment (109:18 `וַיִּלְבַּשׁ קְלָלָה`). |
| 420 | *ina pān ilāni u šarri erabkunu ay iqbi* | לפני האלים והמלך את בואכם אל יאמר | `מְצֹרָע כִּי נִגְזַר מִבֵּית יְהוָה` (דברי הימים ב כו:כא) | [equivalent] | The leper king excluded from the temple, his son over the palace: "before the gods and the king". Our proposal. |
| 420 | same | same | `בָּדָד יֵשֵׁב מִחוּץ לַמַּחֲנֶה מוֹשָׁבוֹ` (ויקרא יג:מו) | [equivalent] | |
| 421 | *kî sirrime ṣabīti ina ṣēri rupdā* | כפרא וכצביה בערבה שוטטו | `אֲשֶׁר שַׂמְתִּי עֲרָבָה בֵיתוֹ` (איוב לט:ו) | [equivalent] / [cognate] (*ṣabītu* = `צְבִיָּה`) | The wild ass's home is the steppe. |
| 421 | *rupdā* | שוטטו | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | [equivalent] | The cursed wanderer (Cain). Our proposal. |
| 422–423 | *dīn ketti mīšari ay idīnkunu* | דין אמת ומישרים אל ידין אתכם | `וְהָיִיתָ אַךְ עָשׁוּק וְגָזוּל כָּל הַיָּמִים וְאֵין מוֹשִׁיעַ` (דברים כח:כט) | [equivalent] | Šamaš the judge denies justice; Deut: oppressed with no saviour, right after the blindness. *dīnu*, *mīšaru* [cognate]. From memory. |
| 423 | *niṭil īnīkunu liššī* | את מראה עיניכם ישא | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן וּבְתִמְהוֹן לֵבָב` (דברים כח:כח) | [equivalent] | Blindness. Nimrud only. Normalization *īnīšunu* vs transliteration *-ku-nu*. |
| 424 | *ina eklēti ittallakā* | בחשכה התהלכו | `וְהָיִיתָ מְמַשֵּׁשׁ בַּצָּהֳרַיִם כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | [equivalent] | The sun god's curse: darkness "at noon". `אפלה` kept out. From memory. |
| 422–424 | no just judgment + walking in darkness | … בחשכה התהלכו | `בַּחֲשֵׁכָה יִתְהַלָּכוּ` (תהלים פב:ה) | [equivalent] | The identical phrase (Hitpael = Gtn), said of judges who judge unjustly (82:2 `עַד מָתַי תִּשְׁפְּטוּ עָוֶל`) – Šamaš's two curses in one psalm. Our proposal. |
| 425–427 | *šiltāḫu … dāmē … šīru* | חץ … דמים … בשר | `אַשְׁכִּיר חִצַּי מִדָּם וְחַרְבִּי תֹּאכַל בָּשָׂר` (דברים לב:מב) | [equivalent] | Arrow, blood, flesh. Our proposal. |
| 426 | *dāmēkunu limalli ṣēra* | בדמיכם ימלא את הערבה | `וְגַם דָּם נָקִי שָׁפַךְ מְנַשֶּׁה הַרְבֵּה מְאֹד עַד אֲשֶׁר מִלֵּא` (מלכים ב כא:טז) | [equivalent] | *malû* D with two objects = `מִלֵּא … דָּם`. Our proposal. |
| 426–427 | *šīrkunu arû zību lišākil* | את בשרכם לנשר ולעיט יאכיל | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם וּלְבֶהֱמַת הָאָרֶץ` (דברים כח:כו) | [cognate] (*akālu*) / [equivalent] | Ninurta's curse; in Deut the verse **before** the skin disease. Rendered with the verb `יאכיל` (Akk. Š verb), not `למאכל`. From memory. |
| 426–427 | same | same | `וְאֶתְּנָה אֶת בְּשָׂרְךָ לְעוֹף הַשָּׁמַיִם` (שמואל א יז:מד) | [equivalent] | "Your flesh" to the birds. Our proposal. |
| 426–427 | same | same | `וְהָיְתָה נִבְלָתָם לְמַאֲכָל לְעוֹף הַשָּׁמַיִם` (ירמיהו לד:כ) | [equivalent] | Said of covenant breakers (34:18). |
| 428 | *ina niṭil īnikunu* | למראה עיניכם | `שׁוֹרְךָ טָבוּחַ לְעֵינֶיךָ` (דברים כח:לא) | [equivalent] | Also 482; 28:32 `וְעֵינֶיךָ רֹאוֹת`. |
| 428 | same | same | `וְהָיִיתָ מְשֻׁגָּע מִמַּרְאֵה עֵינֶיךָ אֲשֶׁר תִּרְאֶה` (דברים כח:לד) | [equivalent] | Same noun phrase; the identity of `מראה עינים` is the corpus rendering's (recorded as a translation-level match). |
| 428–429 | *ḫīrātekunu ina sūni nakrikunu lišanīl* | את רעיותיכם בחיק אויבכם תשכיב | `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר` (דברים כח:ל) | [equivalent] | The qere `יִשְׁכָּבֶנָּה` = *nâlu* Š "make lie". Nimrud only. From memory. |
| 428–429 | same | same | `וְלָקַחְתִּי אֶת נָשֶׁיךָ לְעֵינֶיךָ וְנָתַתִּי לְרֵעֶיךָ וְשָׁכַב עִם נָשֶׁיךָ` (שמואל ב יב:יא) | [equivalent] | Wives to another "before your eyes". Our proposal. |
| 429 | *sūnu* | חיק | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ וּבִבְנָהּ וּבְבִתָּהּ` (דברים כח:נו) | [equivalent] | "Lap" of marriage. Our proposal. |
| 429–430 | *mārīkunu ay ibellū bītkun* | בניכם אל ימשלו בביתכם | `בַּיִת תִּבְנֶה וְלֹא תֵשֵׁב בּוֹ` (דברים כח:ל) | [equivalent] | From memory. |
| 429–430 | same | same | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר וְעֵינֶיךָ רֹאוֹת` (דברים כח:לב) | [equivalent] | |
| 430 | *nakru aḫû lizaʾʾiza mimmûkun* | אויב זר יחלק את כל אשר לכם | `פְּרִי אַדְמָתְךָ וְכָל יְגִיעֲךָ יֹאכַל עַם אֲשֶׁר לֹא יָדָעְתָּ` (דברים כח:לג) | [equivalent] | The foreign enemy. From memory. |
| 431 | *erab Bēl ina Esaggil ay ukallimkunu* | את בוא בל באסגיל אל יראה לכם | `כָּרַע בֵּל קֹרֵס נְבוֹ` (ישעיהו מו:א) | [equivalent] | The procession of Bēl's image; `בֵּל` = the biblical form. Our proposal. |
| 432 | *liḫalliqa napšatkun* | יאבד את נפשכם | `עַד הִשָּׁמֶדְךָ וְעַד אֲבָדְךָ מַהֵר` (דברים כח:כ) | [equivalent] | |
| 433 | *ḫīṭu kabtu* | חטא כבד | `וְחַטָּאתָם כִּי כָבְדָה מְאֹד` (בראשית יח:כ) | [cognate] | Both words; *ḫīṭu* also "punishment" (Zech 14:19). |
| 433 | *māmīt lā pašāri* | אלה שאין להתירה | `לֹא יֹאבֶה יְהוָה סְלֹחַ לוֹ … וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse that cannot be undone (cf. §32–§33). From memory. |
| 435–436 | *šumkunu ina māti luḫalliq* | את שמכם מן הארץ תאבד | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫulluqu* + *šumu* = `האביד שם`. Tayinat adds "your seed" (Nimrud intact without it). |
| 435–436 | same | same | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | Also 9:14; 25:19. *pašāṭu* = `מחה` is not in this part. |
| 437 | *tālittu ina mātikunu liprus* | לידה מארצכם תכרות | `אָרוּר פְּרִי בִטְנְךָ וּפְרִי אַדְמָתֶךָ שְׁגַר אֲלָפֶיךָ וְעַשְׁתְּרֹת צֹאנֶךָ` (דברים כח:יח) | [equivalent] | *tālittu* includes animal young, like 28:18. From memory. |
| 437 | *tālittu* (*walādu*) | לידה | `מִלֵּדָה וּמִבֶּטֶן וּמֵהֵרָיוֹן` (הושע ט:יא) | [cognate] | Our proposal. |
| 437–439 | *liprus … ikkil šerri … ina sūqi rebīt* | תכרות … קול העולל … בשוק וברחוב | `לְהַכְרִית עוֹלָל מִחוּץ בַּחוּרִים מֵרְחֹבוֹת` (ירמיהו ט:כ) | [equivalent] | Cut off, infant, squares: all three elements. Our proposal. |
| 438–439 | same | same | `בֵּעָטֵף עוֹלֵל וְיוֹנֵק בִּרְחֹבוֹת קִרְיָה` (איכה ב:יא) | [equivalent] | Our proposal. |
| 439 | *ina sūqi rebīt* | בשוק וברחוב | `בַּשְּׁוָקִים וּבָרְחֹבוֹת` (שיר השירים ג:ב) | [cognate] (*sūqu* = `שׁוּק`) | The same pair. Our proposal. |
| 440 | (T) *zunni šamūte ina mātikunu liprus* | {תיינת: גשם ורביבים} מארצכם יכרות | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת יְבוּלָהּ` (דברים יא:יז) | [equivalent] | **Tayinat only**: P&W 1988 restored *mīla* "high water" (river flood); Tayinat reads rain. |
| 440 | same | same | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) | [equivalent] | Tayinat only; the bronze sky and iron earth are §63–§64 (part 6). |
| 442 | *erbû* | ארבה | `זֶרַע רַב תּוֹצִיא הַשָּׂדֶה וּמְעַט תֶּאֱסֹף כִּי יַחְסְלֶנּוּ הָאַרְבֶּה` (דברים כח:לח) | [cognate] | *muṣaḫḫir māti* "diminisher of the land" ↔ `וּמְעַט` [equivalent] (`המקטין`, not `המעיט`). From memory. |
| 443 | *ebūrkunu lēkul* | את קצירכם יאכל | `כָּל עֵצְךָ וּפְרִי אַדְמָתֶךָ יְיָרֵשׁ הַצְּלָצַל` (דברים כח:מב) | [equivalent] | |
| 443–444 | *ikkil arî u tinūri … ay ibašši* | קול רחיים ותנור … אל יהי | `קוֹל רֵחַיִם וְאוֹר נֵר` (ירמיהו כה:י) | [equivalent] | The silenced mill. From memory (Hillers). |
| 443 | *tinūru* | תנור | `וְאָפוּ עֶשֶׂר נָשִׁים לַחְמְכֶם בְּתַנּוּר אֶחָד` (ויקרא כו:כו) | [cognate] | Famine and the oven; cannibalism follows in 26:29, as in EST. |
| 439–448 | street, mill, door | בשוק … קול רחיים … את דלתה תנעל | `וְסֻגְּרוּ דְלָתַיִם בַּשּׁוּק בִּשְׁפַל קוֹל הַטַּחֲנָה` (קהלת יב:ד) | [equivalent] | Our proposal. |
| 445–446 | *kūm kurummāti eṣmātikunu … liṭīnū* | תחת השעורים את עצמותיכם … יטחנו | `וַאֲשֶׁר אָכְלוּ שְׁאֵר עַמִּי וְעוֹרָם מֵעֲלֵיהֶם הִפְשִׁיטוּ וְאֶת עַצְמֹתֵיהֶם פִּצֵּחוּ` (מיכה ג:ג) | [equivalent] | Flesh, skin, bones (445–451). Our proposal. |
| 446 | *ṭênu* | טחן | `בַּחוּרִים טְחוֹן נָשָׂאוּ` (איכה ה:יג) | [cognate] | |
| 446 | same | same | `תִּטְחַן לְאַחֵר אִשְׁתִּי` (איוב לא:י) | [cognate] | Grinding and the wife to another (cf. 428–429) in one imprecation. Our proposal. |
| 447 | *aṣūdātikunu lēšu* | קערותיכם … הבצק | `אָרוּר טַנְאֲךָ וּמִשְׁאַרְתֶּךָ` (דברים כח:יז) | [equivalent] | The kneading-bowl. Our proposal. |
| 447–448 | (T) *qūqānu … lēkul* | {תיינת: הרימה (?)} … יאכל | `כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [equivalent] | **Tayinat only**; *qūqānu* uncertain. Our proposal. |
| 448 | *ummu eli mārtīša bābša lēdil* | אם בפני בתה את דלתה תנעל | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ וּבִבְנָהּ וּבְבִתָּהּ` (דברים כח:נו) | [equivalent] | The mother against her daughter for food. *bābša lēdil* restored in Nimrud, preserved in Tayinat. From memory (Weinfeld). |
| 448 | same | same | `וַתַּחְבִּא אֶת בְּנָהּ` (מלכים ב ו:כט) | [equivalent] | Our proposal. |
| 449 | *ina būrikunu šīrī mārīkunu aklā* | ברעבונכם את בשר בניכם אכלו | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [cognate] (*akālu*) / [equivalent] (*šīru*) | From memory. |
| 449 | same | same | `וַאֲכַלְתֶּם בְּשַׂר בְּנֵיכֶם וּבְשַׂר בְּנֹתֵיכֶם תֹּאכֵלוּ` (ויקרא כו:כט) | [cognate] / [equivalent] | 2mp, as the Akkadian imperative *aklā*. |
| 449 | same | same | `וְהַאֲכַלְתִּים אֶת בְּשַׂר בְּנֵיהֶם וְאֵת בְּשַׂר בְּנֹתֵיהֶם` (ירמיהו יט:ט) | [equivalent] | |
| 449 | same | same | `תְּנִי אֶת בְּנֵךְ וְנֹאכְלֶנּוּ הַיּוֹם` (מלכים ב ו:כח) | [equivalent] | The curse as event (Samaria besieged). |
| 449 | same | same | `יְדֵי נָשִׁים רַחֲמָנִיּוֹת בִּשְּׁלוּ יַלְדֵיהֶן` (איכה ד:י) | [equivalent] | |
| 449 | *ina būri … ina bubūti* | ברעבונכם … ברעב | `בְּמָצוֹר וּבְמָצוֹק` (דברים כח:נג) | [divergence] | Famine of drought (Adad) vs famine of siege. |
| 450 | *amēlu šīr amēli lēkul* | אדם בשר אדם יאכל | `וְאִישׁ בְּשַׂר רֵעֵהוּ יֹאכֵלוּ` (ירמיהו יט:ט) | [equivalent] | |
| 450 | same | same | `תֹּאכַלְנָה אִשָּׁה אֶת בְּשַׂר רְעוּתָהּ` (זכריה יא:ט) | [equivalent] | |
| 449–450 | *ina bubūti ḫušaḫḫu* | ברעב, בכפן | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [equivalent] | Also 479–480; `חֹסֶר` kept out (*ḫušaḫḫu* = `כפן`). |
| 451 | *šīrīkunu kalbū … lēkulū* | את בשרכם כלבים … יאכלו | `בְּחֵלֶק יִזְרְעֶאל יֹאכְלוּ הַכְּלָבִים אֶת בְּשַׂר אִיזָבֶל` (מלכים ב ט:לו) | [cognate] | Word for word (*kalbu*, *akālu*). Our proposal. |
| 452 | *eṭemmakunu pāqidu nāq mê ay irši* | אטכם פוקד, נוסך מים אל ימצא | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד) | [divergence] | Offerings to the dead: forbidden in Deut, their absence a curse here. Our proposal. |
| 453 | *qaštakunu lišbir* | את קשתכם תשבור | `וְשָׁבַרְתִּי אֶת קֶשֶׁת יִשְׂרָאֵל` (הושע א:ה) | [cognate] | From memory. |
| 453 | same | same | `וְשָׁבַרְתִּי אֶת גְּאוֹן עֻזְּכֶם` (ויקרא כו:יט) | [cognate] (*šebēru*) | |
| 454 | *ina šapal nakrikunu lišēšibkunu* | תחת אויבכם תושיב אתכם | `יִתֶּנְךָ יְהוָה נִגָּף לִפְנֵי אֹיְבֶיךָ` (דברים כח:כה) | [equivalent] | From memory. |
| 454 | same | same | `הַגֵּר אֲשֶׁר בְּקִרְבְּךָ יַעֲלֶה עָלֶיךָ מַעְלָה מָּעְלָה וְאַתָּה תֵרֵד מַטָּה מָּטָּה` (דברים כח:מג) | [equivalent] | |
| 454 | same | same | `וְנִגַּפְתֶּם לִפְנֵי אֹיְבֵיכֶם וְרָדוּ בָכֶם שֹׂנְאֵיכֶם` (ויקרא כו:יז) | [equivalent] | Also 26:37. |
| 455 | *ina patrīšu lā gāmili* | בחרבו שאינה חומלת | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת וּבַדַּלֶּקֶת וּבַחַרְחֻר וּבַחֶרֶב` (דברים כח:כב) | [equivalent] | |
| 455–456 | sword + *šaggaštu mūtānu ina libbikunu liškun* | בחרבו … טבח, מגפה בתוככם ישים | `וְשִׁלַּחְתִּי דֶבֶר בְּתוֹכְכֶם` (ויקרא כו:כה) | [equivalent] | Sword, plague and "among you" together (26:25 opens with `חֶרֶב נֹקֶמֶת נְקַם בְּרִית`). `דבר` kept out. Our proposal for the phrase. |
| 456 | *mūtānu* | מגפה | `יַדְבֵּק יְהוָה בְּךָ אֶת הַדָּבֶר` (דברים כח:כא) | [equivalent] | |
| 458 | *patru ḫamṭu* | חרב לוהטת | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [equivalent] | Our proposal. |
| 459–460 | *rēmu gimlu lū lā išakkan elīkun* | רחמים וחמלה אל תשים עליכם | `לֹא שַׂמְתְּ לָהֶם רַחֲמִים` (ישעיהו מז:ו) | [cognate] (*rēmu*) / [equivalent] (*šakānu* = `שׂם`) | The same idiom, addressed to Babylon. Our proposal. |
| 459 | *rēmu* | רחמים | `וְנָתַן לְךָ רַחֲמִים וְרִחַמְךָ` (דברים יג:יח) | [cognate] | |
| 459–460 | same | same | `גּוֹי עַז פָּנִים אֲשֶׁר לֹא יִשָּׂא פָנִים לְזָקֵן וְנַעַר לֹא יָחֹן` (דברים כח:נ) | [equivalent] | The merciless one. From memory. |
| 462 | *simmu lazzu* | פצע מתמיד | `וּבַגָּרָב וּבֶחָרֶס אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:כז) | [equivalent] | Also 28:35. P&W "unhealing". |
| 462 | *lazzu* | מתמיד | `וָחֳלָיִם רָעִים וְנֶאֱמָנִים` (דברים כח:נט) | [equivalent] | `נֶאֱמָנִים` "lasting" = *lazzu*; root `אמנ` reserved, so `מתמיד`. Our proposal. |
| 462–463 | (T) *dāmū šarku kīma mê runkā* | {תיינת: בדמים ובמוגלה} כבמים התרחצו | `פְּעָמָיו יִרְחַץ בְּדַם הָרָשָׁע` (תהלים נח:יא) | [equivalent] | Blood and pus restored in Nimrud, preserved in Tayinat. |
| 465 | *ezzu* | עז | `גּוֹי עַז פָּנִים` (דברים כח:נ) | [cognate] | *kakkīšunu ezzūti*; the formula recurs in part 6 (Aššur). |
| 466 (T vi 44) | *mê arqūti limallikunu* | (apparatus) מים ירוקים ימלא אתכם | `וּבַשִּׁדָּפוֹן וּבַיֵּרָקוֹן` (דברים כח:כב) | [cognate] (*arqu* = `ירק`) | **Tayinat only**, in the apparatus (Nimrud differs). Our proposal. |
| 466 (T vi 44) | *bēl āli Qarne* | (apparatus) אדון העיר קרנים | `הֲלוֹא בְחָזְקֵנוּ לָקַחְנוּ לָנוּ קַרְנָיִם` (עמוס ו:יג) | [equivalent] (place) | Tayinat only; Qarnaim in Bashan (Assyrian *Qarnīna*). |
| T vi 47 | *ultu libbikunu lišaḫḫiḫa tûltu* | מתוככם תשיר תולעת | `כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [cognate] (*tûltu* = `תּוֹלַעַת`) | Tayinat only. Our proposal. |
| T vi 47 | *Šarrat-Amqarruna* | שרת־אמקרונה | `בְּבַעַל זְבוּב אֱלֹהֵי עֶקְרוֹן` (מלכים ב א:ב) | [equivalent] | The goddess of Ekron; Ahaziah consults Ekron's god about his illness. Tayinat only. |
| 467 | *Baiti-ili* | בית־אל | `כַּאֲשֶׁר בֹּשׁוּ בֵּית יִשְׂרָאֵל מִבֵּית אֵל מִבְטֶחָם` (ירמיהו מח:יג) | [cognate] | Bethel as a god (Elephantine: Anat-Bethel). Name restored in Nimrud, preserved in Tayinat. Known. |
| 467–468 | Bethel + *ina qāt nēši ākili limnûkunu* | ביד אריה אוכל ימנו אתכם | `וַיְשַׁלַּח יְהוָה בָּהֶם אֶת הָאֲרָיוֹת` (מלכים ב יז:כה) | [equivalent] | Lions among the settlers of Samaria; the priest settles in Bethel (17:28). From memory. |
| 468 | same | same | `וַיִּמְצָאֵהוּ אַרְיֵה בַּדֶּרֶךְ וַיְמִיתֵהוּ` (מלכים א יג:כד) | [equivalent] | The man of God who broke the word given at Bethel. Our proposal. |
| 468 | *manû* | ימנו | `וּמָנִיתִי אֶתְכֶם לַחֶרֶב וְכֻלְּכֶם לַטֶּבַח תִּכְרָעוּ` (ישעיהו סה:יב) | [cognate] | "Count/assign into the hand of". Our proposal. |
| 468 | same | same | `וְהִשְׁלַחְתִּי בָכֶם אֶת חַיַּת הַשָּׂדֶה` (ויקרא כו:כב) | [equivalent] | |
| 470 | *rimṭu* … (T) *dāmēkunu* | זיבה (?) … {תיינת: דמיכם} | `וְאַל יִכָּרֵת מִבֵּית יוֹאָב זָב וּמְצֹרָע וּמַחֲזִיק בַּפֶּלֶךְ וְנֹפֵל בַּחֶרֶב וַחֲסַר לָחֶם` (שמואל ב ג:כט) | [equivalent] | A biblical curse list with discharge, leprosy, sword and hunger (cf. 470, 419, 455, 449). Depends on *rimṭu* = discharge. Our proposal. |
| 471 | *kīma tīki ana kaqqar littattuk* | כטיפות לקרקע יתכו | `וּמָטָר לֹא נִתַּךְ אָרְצָה` (שמות ט:לג) | [cognate] (*natāku* = `נתך`) | Same verb, "to the ground", of rain. Our proposal. |
| 471 | *natāku* | יתכו | `וַתִּתַּךְ עָלֵינוּ הָאָלָה וְהַשְּׁבֻעָה` (דניאל ט:יא) | [cognate] | The oath-curse "poured out". Our proposal. |
| 472–473 | *ilāni … mala ina ṭuppi annīe šumšunu zakrū* | האלים … כל אשר נזכר שמם בלוח הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | Gods named in this tablet ↔ the curse written in this book (also 29:20). From memory. |
| 474 | *limḫaṣūkunu* | יכו אתכם | `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) | [equivalent] | *maḫāṣu* = the verb of Deut's diseases (28:22, 27, 28, 35). |
| 475 | *arratu … līrurūkunu* | מארה … יאורו אתכם | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה` (דברים כח:כ) | [cognate] | From memory. |
| 475 | *arāru* | יאורו | `אָרוּר אַתָּה בָּעִיר` (דברים כח:טז) | [cognate] | Also 27:15–26. |
| 475 | *arratu … līrurū* | מארה … יאורו | `וְשִׁלַּחְתִּי בָכֶם אֶת הַמְּאֵרָה וְאָרוֹתִי אֶת בִּרְכוֹתֵיכֶם` (מלאכי ב:ב) | [cognate] | Noun and verb together, as in the Akkadian. Our proposal. |
| 475 | same | same | `בַּמְּאֵרָה אַתֶּם נֵאָרִים` (מלאכי ג:ט) | [cognate] | The figura etymologica. Our proposal. |
| 475 | *arratu maruštu* | מארה נמרצת | `וְהוּא קִלְלַנִי קְלָלָה נִמְרֶצֶת` (מלכים א ב:ח) | [cognate] (*marṣu* = `נִמְרָץ`) | "A grievous curse". Our proposal. |
| 476 | *lissaḫūkunu* | יסחו אתכם | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה אֲשֶׁר אַתָּה בָא שָׁמָּה לְרִשְׁתָּהּ` (דברים כח:סג) | [cognate] | From memory. |
| 476 | (T) *eliš ina balṭūti lissaḫūkunu* | למעלה, מן החיים יסחו אתכם | `וְיִסָּחֲךָ מֵאֹהֶל וְשֵׁרֶשְׁךָ מֵאֶרֶץ חַיִּים` (תהלים נב:ז) | [cognate] | "Uproot from the land of the living"; closest in Tayinat's wording (*ina balṭūti*). Our proposal. |
| 477 | *eṭemmakunu mê liṣammû* | את אטכם למים יצמיאו | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [cognate] (*ṣamû* = `צמא`) | Tayinat *lizammû* "deprive". |
| 477–478 | *ṣillu u ṣētu liktaššidūkunu* | צל וחום ישיגו אתכם תמיד | `וּבָאוּ עָלֶיךָ כָּל הַקְּלָלוֹת הָאֵלֶּה וּרְדָפוּךָ וְהִשִּׂיגוּךָ` (דברים כח:מה) | [equivalent] | *kašādu* = `השיג`; also 28:15. Our proposal. |
| 477–478 | same | same | `וְרָדַף אֹתָם קוֹל עָלֶה נִדָּף` (ויקרא כו:לו) | [equivalent] | Pursued by something harmless. Our proposal. |
| 478–479 | *ina puzri šaḫāti lā tannimmedā* | בסתר הפינה לא תישענו | `וּבַגּוֹיִם הָהֵם לֹא תַרְגִּיעַ וְלֹא יִהְיֶה מָנוֹחַ לְכַף רַגְלֶךָ` (דברים כח:סה) | [equivalent] | No rest. `נוח` kept for *nâḫu* (Decision 4). From memory. |
| 479 | *akalī u mê līzibūkunu* | לחם ומים יעזבו אתכם | `מִפְּנֵי רֹעַ מַעֲלָלֶיךָ אֲשֶׁר עֲזַבְתָּנִי` (דברים כח:כ) | [cognate] (*ezēbu*) / [divergence] | Israel forsakes YHWH; here bread and water forsake the perjurer. |
| 479 | same | same | `כֹּל מִשְׁעַן לֶחֶם וְכֹל מִשְׁעַן מָיִם` (ישעיהו ג:א) | [equivalent] | Our proposal (the shared `שען` is the translation's only). |
| 480–481 | *… mūtānu … ay ippiṭir* | … מגפה מלפניכם אל ייפטרו | `יַדְבֵּק יְהוָה בְּךָ אֶת הַדָּבֶר עַד כַּלֹּתוֹ אֹתְךָ` (דברים כח:כא) | [equivalent] | "Not depart" = "cleave" (also 28:60 `וְדָבְקוּ בָּךְ`). |
| 482–483 | *kalbu ḫuzīrū … lindaššarū* | כלבים, חזירים … יסחבו | `וְאֶת הַכְּלָבִים לִסְחֹב` (ירמיהו טו:ג) | [equivalent] | Dogs dragging the dead. Our proposal. |
| 483–484 | *pagrīkunu kaqqiru ay imḫur* | את פגריכם הקרקע אל תקבל | `לֹא יִסָּפְדוּ וְלֹא יִקָּבֵרוּ לְדֹמֶן עַל פְּנֵי הָאֲדָמָה יִהְיוּ` (ירמיהו טז:ד) | [equivalent] | |
| 483–484 | same | same | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם וּלְבֶהֱמַת הָאָרֶץ` (דברים כח:כו) | [equivalent] | No burial. From memory. |
| 483 | *pagru* | פגר | `וְנָתַתִּי אֶת פִּגְרֵיכֶם עַל פִּגְרֵי גִּלּוּלֵיכֶם` (ויקרא כו:ל) | [cognate] | |
| 484 | *karšu* | כרס | `מִלָּא כְרֵשׂוֹ מֵעֲדָנָי` (ירמיהו נא:לד) | [cognate] | |
| 485–486 | *ūmēkunu lū eṭû … eklētu lā namāri* | ימיכם יהיו אפלים … חשכה ללא הארה | `הֲלֹא חֹשֶׁךְ יוֹם יְהוָה וְלֹא אוֹר וְאָפֵל וְלֹא נֹגַהּ לוֹ` (עמוס ה:כ) | [equivalent] | Dark, and no brightness. Our proposal. |
| 485 | same | same | `כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | [equivalent] | |
| 487 | *ina tānēḫi … napištakunu liqti* | באנחה … נפשכם תכלה | `כִּי כָלוּ בְיָגוֹן חַיַּי וּשְׁנוֹתַי בַּאֲנָחָה` (תהלים לא:יא) | [cognate] (*anāḫu* = `אנח`) | Our proposal. |
| 487 | *diliptu* | נדודי שינה | `וּפָחַדְתָּ לַיְלָה וְיוֹמָם וְלֹא תַאֲמִין בְּחַיֶּיךָ` (דברים כח:סו) | [equivalent] | Also 28:65 `וְדַאֲבוֹן נָפֶשׁ`. |
| 488 | *bubbulu abūbu lā maḫru* | זרם, מבול שאין לעמוד בפניו | `הִנְנִי מֵבִיא אֶת הַמַּבּוּל מַיִם עַל הָאָרֶץ` (בראשית ו:יז) | [equivalent] | *abūbu* = `מבול`; *bubbulu* stands beside it (Klein's etymology of `מַבּוּל`, guidelines §6.7). |
| 488–489 | *ultu libbi kaqqiri līlâ* | מתוך הקרקע יעלה | `וְאֵד יַעֲלֶה מִן הָאָרֶץ` (בראשית ב:ו) | [equivalent] | A flood rising from the earth (`אֵד` ~ Akk. *edû*). Our proposal. |
| 488–489 | *abūbu … našpantakunu liškun* | מבול … את מפלתכם ישים | `וּבְשֶׁטֶף עֹבֵר כָּלָה יַעֲשֶׂה מְקוֹמָהּ` (נחום א:ח) | [equivalent] | Against Nineveh. Our proposal. |
| 489 | *mimma ṭābu lū ikkibkunu* | כל טוב יהי איסורכם | `לֹא תֹאכַל כָּל תּוֹעֵבָה` (דברים יד:ג) | [equivalent] | *ikkibu* (food taboo) ↔ `תועבה`; kept out (open decision 4). Our proposal. |
| 490 | *kupru* | כפר | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | [cognate] | |
| 490–493 | pitch for food … demons in the houses | זפת וכפר יהי מאכלכם … את בתיכם יבחרו | `וְנֶהֶפְכוּ נְחָלֶיהָ לְזֶפֶת וַעֲפָרָהּ לְגָפְרִית וְהָיְתָה אַרְצָהּ לְזֶפֶת בֹּעֵרָה` (ישעיהו לד:ט) | [equivalent] | Isa 34:9–14: the land turned to pitch, then demons settle in it. Our proposal. |
| 490 | *mākālu* | מאכל | `לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) | [cognate] (root *akālu*) | A noun of *akālu*, so `מאכל` here (contrast 427 `יאכיל`). |
| 491 | *šīnāt imēri lū mašqītkunu* | שתן חמור יהי משקכם | `מֵימֵי רַגְלֵיהֶם` (מלכים ב יח:כז) | [cognate] (the kethiv `שיניהם` = *šīnātu*) | The Rabshakeh's threat: drinking urine, in an Assyrian's mouth. From memory. |
| 491 | *napṭu lū piššatkunu* | נפט יהי סיכתכם | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | Our proposal. |
| 492 | *elapûʾa … lū taktīmkunu* | ירוקת הנהר תהי שמיכתכם | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [equivalent] | Nakedness. Our proposal. |
| 493 | *rābiṣu* | רובץ | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] | |
| 493 | same | same | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [cognate] | The oath-curse "lies in wait" like the demon. Our proposal. |
| 493 | *šēdu utukku rābiṣu … bītātikunu liḫīrū* | … רובץ רע את בתיכם יבחרו | `וְרָבְצוּ שָׁם צִיִּים וּמָלְאוּ בָתֵּיהֶם אֹחִים` (ישעיהו יג:כא) | [equivalent] | Demons "lie" in the houses (`רָבְצוּ`). Our proposal. |
| 493 | same | same | `אַךְ שָׁם הִרְגִּיעָה לִּילִית וּמָצְאָה לָהּ מָנוֹחַ` (ישעיהו לד:יד) | [equivalent] | The demon finds rest where the cursed find none (479). Our proposal. |

### Proposals for the renderings (part 5; plain strings as they appear in the `>` lines; for parts 6–7)
- **The god epithets** (renderings §2) confirmed as written; add: *Mulliltu āšibat Ninua* = `מוללתו, יושבת נינוה`; *Ištar āšibat Arbail* = `אשתר, יושבת ארבאיל`; *Sagmegar bēl ilāni ṣīru* = `סגמגר, אדון האלים הנעלה`; *Anu šar ilāni* = `אנו, מלך האלים`; *Aššur … mušīm šīmāti* = `גוזר הגורלות`; *Adad Šala ša Kurbail* = `אדד ושלה של כורבאיל` (`שָׁלָה` always vocalized); *Šarrat-Amqarruna* = `שרת־אמקרונה`; *Bēl* = `בל`; *Esaggil* = `אסגל`.
- **Curse verbs:** *lišamqitkunu* = `יפיל אתכם`; *arû zību lišākil* = `לנשר ולעיט יאכיל` (*šīrkunu* = `את בשרכם`); *qaštakunu lišbir(ū)* = `את קשתכם תשבור / ישבור / ישברו`; *idīkunu liksi* = `את ידיכם תאסור`; *ina šapal nakrikunu lišēšib(ū)kunu* = `תחת אויבכם תושיב / יושיב / יושיבו אתכם`; *limḫaṣūkunu* = `יכו אתכם`; *likkilmūkunu* = `יביטו בכם בזעף`; *arratu maruštu aggiš līrurūkunu* = `מארה נמרצת בזעם יָאוֹרוּ אתכם`; *lissaḫūkunu* = `יִסְּחוּ אתכם`; *ana šīmtikunu lišīm(ū)* = `לגורלכם יגזור / יגזרו`; *ina libbikunu liškun* = `בתוככם ישים / תשים`; *našpantakunu liškun(ū)* = `את מפלתכם ישים / ישימו`; *ina zumrikunu* = `בגופכם`; *lišaznin* = `יגשים`; *liprus* (cut off) = `יכרות / תכרות`; *lizammi* = `יחסיר / תחסיר`; *liballi* = `יכבה`; *lihalliqa napšatkun* = `יאבד את נפשכם`; *bašû* Š (curse) = `חולל`; *lirkus(u)* = `יצרור / תצרור`.
- **Famine and cannibalism (§69, §75 and the simile curses):** *bubūtu* / *būru* / *ḫušaḫḫu* / *sunqu* = `רעב` / `רעבון` / `כפן` / `דוחק`; *šīr mārīkunu* = `בשר בניכם`; *šīrī mārīkunu mārātikunu* = `בשר בניכם ובנותיכם`; *akālu* G imperative = `אִכְלוּ!`; *amēlu šīr amēli lēkul* = `אדם בשר אדם יאכל`; *mašku* = `עור`; *kalbū ḫuzīrū* = `כלבים, חזירים`; *šīrīkunu … lēkulū* = `את בשרכם … יאכלו`; *ṭênu* = `טחן`; *kurummatu* = `שעורים`; *eṣemtu* = `עצם`; *līšu* = `בצק`; *akalu u mê* = `לחם ומים`; *ezēbu* = `עזב`; *ummu … mārtu* = `אם … בת`.
- **The dead:** *eṭemmakunu* = `אִטְּכֶם`; *eṭemmakunu mê liṣammû* = `את אִטְּכֶם למים יַצְמִיאוּ`; *pāqidu nāq mê* = `פוקד, נוסך מים`; *pagrīkunu* = `את פגריכם`; *naqbaru* = `קבר`; *karšu* = `כרס`; *mašāru* = `סחב`.
- **Land and sky:** *zunnu* = `גשם`, *šamūtu* = `רביבים`; *tamertu* = `נאות` (always `נְאוֹתֵיכֶם`); *erbû* = `ארבה`; *ebūru* = `קציר`; *riḫṣu* / *raḫāṣu* = `שטף` / `שטף`; *abūbu* = `מבול`, *bubbulu* = `זרם`; *elû* = `עלה`; *mīlu* = `גאות`; *kaqqaru* (ground) = `קרקע`; *eklētu* = `חשכה`, *eklu* = `חשוך`, *eṭû* = `אפל` (*ūmēkunu lū eṭû* only).
- **Substances:** *kupru* = `כפר`, *qīru* = `זפת`, *napṭu* = `נפט` (part 6: *kî qīru* = `כזפת`; *kupri napṭi* = `כפר ונפט`); *šīnāt imēri* = `שתן חמור`; *mākālu* = `מאכל`; *mašqītu* = `משקה`; *piššatu* = `סיכה`; *ikkibu* = `איסור` (*ana ikkibikunu šakānu* = `לאיסורכם שׂם`); *mimma ṭābu* = `כל טוב`.
- **Bodies and diseases:** *murṣu* = `מחלה`; *tānēḫu* = `אנחה`; *diliptu* = `נדודי שינה`; *simmu* = `פצע`; *lazzu* = `מתמיד`; *dāmu* (pl.) = `דמים`; *šarku* = `מוגלה`; *ramāku* = `התרחץ`; *saḫaršubbû* = `צרעת`; *ḫalāpu* D = `העטה`; *labāšu* = `לבש`; *tûltu* = `תולעת`; *qūqānu* = `רימה (?)`; *zīzu* = `דד`; *matnu* = `גיד`; *ardatu* / *eṭlu* = `נערה` / `בחור`.
- **Others:** *ḫīrtu* = `רעיה`; *sūnu* = `חיק`; *nâlu* Š = `השכיב`; *bêlu* = `משל ב־`; *nakru aḫû* = `אויב זר`; *mimmû* = `כל אשר ל־`; *sūqu* / *rebītu* = `שוק` / `רחוב`; *ikkillu* = `קול`; *erû* (millstone) = `רחיים`; *tinūru* = `תנור`; *patru* = `חרב`; *kakku* = `נשק`; *ezzu* = `עז`; *šamru* = `זועם`; *manû* = `מנה`; *nēšu* = `אריה`; *ākilu* = `אוכל`; *natāku* = `נתך`; *ṣillu* / *ṣētu* = `צל` / `חום`; *kašādu* = `השיג` (Gtn + `תמיד`); *puzru* = `סתר`; *emēdu* N = `נשען`; *paṭāru* N = `נפטר`; *rēmu gimlu … lā išakkan* = `רחמים וחמלה … אל תשים`; *ḫiāru* = `בחר`; *šēdu utukku rābiṣu lemnu* = `רוח־מגן, אוטוקו, רובץ רע`; *kibrātu* = `קצות הארץ`.
- **SB grammar:** 2mp imperatives = Hebrew imperatives with "!"; *ay* + preterite and *lū lā* + present = `אל` + future; *lū* + noun = `יהי` / `תהי` / `יהיו` / `תהיינה` by gender and number.
- **Corrections proposed:** EST renderings §3 `אֵסַגִּיל` vs creation corpus `אֵסַגִּיל` – unify; corpus renderings §4 could add *ikkibu* = `איסור` with the `תועבה` echo, and *ḫušaḫḫu* / *sunqu* / *būru* (the famine words) so that later translators do not fall back on `חֹסֶר` / `מָצוֹק`.

### Lessons for the guidelines (part 5)
- **A text can change dialect in the middle** (EST's curse list is SB): the NA rules of the earlier parts (subjunctive *-ni*, `(אם)`, *issi*) do not apply; read the imperatives inside the precative chains as imperatives, and say so in the introduction.
- **Check every 1988 restoration of a key word against Tayinat before building a parallel on it.** Two of the curse list's key words change (440 high water → rain; 470 urine → blood), and the Adad–Deut 28:23–24 parallel depends on Tayinat's word.
- **For a famous comparison passage, list the near-synonyms of every Deuteronomic word before drafting** (`חֹסֶר`, `מָצוֹק`, `יְבוּל`, `דָּגָן`, `מְעַט`, `תּוֹעֵבָה`, `מָנוֹחַ`, `קַדַּחַת`): most curses have an exact Deuteronomic equivalent, and the translation itself would otherwise reproduce Deut 28.
- **Record translation echoes in both directions**: a Hebrew root chosen for its own reasons (`נשען`, `סתר`, `תָּרַע`) can meet a biblical verse that the Akkadian does not touch.
- **Let a script copy the source data** (C/N/T lines) into the annotated file; the translator writes only the Hebrew and the apparatus.
- **`check_bible_quotes.py`:** a reference after "של" is read as a book; a footnote reference without the book name defaults to Genesis – always write the book.

## Part 6: §57–§89 (lines 494–611)

### Scope
- P&W §57–§89: the swearers' vow of allegiance in the first person plural (§57, 494–512) and the first half of the ceremonial curse section (§58–§89, 513–611), composite lines 494–611 with 555A–B: **120 composite entries**, no Tayinat-only entries. File: `annotated-6--sections-57-89.rtl.md` (assembled by a script from the SAAo data and the entry texts, as part 5).
- Language: mostly **Neo-Assyrian** again (subjunctive *-ūni* in the simile clauses, *issi*, *issātu*, *ana kâšunu*, *kî hannīe*), with SB precatives (*lū lā* + present, *lū* + preterite at 572) and one 2mp imperative (*dubbā*, 559).
- Tayinat coverage: **T vi 77–93** (494–508), **T vii 1–91** (513–605), **T viii 1–6** (606–611): nearly the whole part. **Not in Tayinat: 509–512** (the end of §57, "may the gods … seek it from our hand, our seed …") and **555A–B** (the repeated protasis). Tayinat omits KI.MIN in most curses and has real variants: 521 another verb (*lištēširkunu*) for *lišqikunu*; 524 "to the great gods" for "to small and great"; 525 *ina Girra*; §67 (540–544) a different text (seed and beer yeast); 549 and 553 **without "your brothers" / "your entrails"** (the flesh and entrails of the sons and daughters only, as Deut 28:53); 567 *lilqû* "may they take away (from your land)" for *lušālikū* "may they make go (in your land)"; 577 and 583 without *bēl dāmēkunu* (583: "your enemy"); 596 adds *kî hannīe*; 599 *kî ša* (a simile) for KI.MIN KI.MIN; 600 "your fields" for "your district".

### Decisions (translator, part 6)
1. **§57 keeps the oath form in the first person plural**: `אם אנחנו … מרד וקשר נַעֲשֶׂה, את פינו עם אויבו נָשִׂים; אם … נִשְׁמַע, נסתיר … לא נאמר` (P&W and Lauinger resolve it into promises, "we will not …"). The fixed strings of parts 1–3 are conjugated: `תשמעו, תסתירו` → `נשמע, נסתיר`; `מלך אחר, אדון אחר עליכם תשימו` → `מלך אחר, בן־מלך אחר` | `עלינו, (על) בנינו, (על) בני בנינו נָשִׂים`; `הוא לא מלך לכם, לא אדון לכם` (191) → `לא מלך לנו, לא אדון לנו`. **`(אם)` at 508** before the subjunctive clause *Aššur-bani-apli … lā šarrānīni* (part 1, Decision 4), because after the temporal clause the Hebrew would otherwise read as a statement.
2. ***buʾʾû ina qātīni* = `מידנו … יבקשו`** (511–512; *buʾʾû* = `ביקש`, part 2): the biblical idiom `בִּקֵּשׁ מִיַּד` (Ezek 3:18; 1 Sam 20:16; `דָּרַשׁ מִיַּד`, Gen 9:5) is the literal rendering, kept and tagged. *ūmu ammar … balṭānīni* = `כל הימים אשר … חיים` (507–508; ↔ Deut 4:10; 12:1; 31:13; the Hebrew idiom is the translation's, recorded as such).
3. **The curse protasis**: 513–517 `אם אתם באמנה הזאת אשר אסרחדון … אדונכם, … {תיינת: שָׂם} אתכם – תחטאו –` (renderings §1 `תחטאו באמנה הזאת` split by the Akkadian line order; `שׂם אתכם` as part 1, 42); 555A–B with *ša* "of" (no *iškunūni*) = `של`. **KI.MIN = `כנ״ל`, KI.MIN KI.MIN = `כנ״ל, כנ״ל`** at the head of the line with a colon (`כנ״ל, כנ״ל: כאשר …`); the first occurrence (526) explains that it stands for the protasis 513–517. SAAo `<KI.MIN …>` (not written in the Nimrud copies; 13 lines) = `⟨כנ״ל …⟩`.
4. **Simile curses**: `כאשר … ככה` (renderings §1) wherever the Akkadian has *kî ša … kî hannīe*; **where the Akkadian has no *kî hannīe* (535, 553, 558, 568, 577, 583, 589, 596) the Hebrew has no `ככה`** either; Tayinat's extra *kî hannīe* (596) stays in the apparatus; 561 `[ככה]` (broken in Nimrud, absent from Tayinat), 610 `⟨ככה⟩` (SAAo `<…>`, written in Tayinat). The deictic "this" of the rite is kept (`הרחל {תיינת: הזאת}`, 547; `הפשפש (?) ⟨הזה⟩`, 603).
5. **§63–§64 (526–533)**: *kaqqaru* = `קרקע` (never `אדמה`), *parzillu* = `ברזל`, *siparru* = `נחושת` (since the 2026-10-30 harmonization `אָרָד`), *zunnu* = `גשם`, *nalšu* = `טל`, *peʾenātu* = `גחלים`, *zanānu* = `יורד` (530) / `יגשים` (533); `מטר` kept out. ***siāqu* D = `הֵצִיק` (`יָצִיקוּ`, 527)** – a probable cognate of `צוק` (Arabic *ḍāqa*; Akkadian *s* by Geers' law), which makes Deut 28:53's `אֲשֶׁר יָצִיק לְךָ` visible; tagged [cognate?]. *memmēni* with negation = `מאומה`. *parāʾu* = `צמח` (529, 541). The order facts are in the footnote at 530.
6. **Body and substance words**: *erru* = `מעיים` (552–553, 560–562; ↔ Num 5:22 `בְּמֵעַיִךְ`); *erēbu* = `בוא`, Š = `הביא` (556, 558, 560, 562; ↔ `וּבָאוּ`); *tamītu* = `שבועה` (561); *karāku* = `כרך` [cognate] (552–554); *napištu* "throat" in *nakās napšāti* = `גרון` (part 4, Decision 8); *nipšu* "breath" = `נשימה` (605); *lānu* = `תואר` (610; not `דמות`, to keep `צלם … דמות` of Gen 1:26 out of the translation); *ṭiṭṭu* = `טיט`, *iškūru* = `שעווה` (not `דונג`, Ps 68:3, kept in the apparatus).
7. **Verbs kept apart**: *qamû* = `קלה` (`יִקְלֶה`, 525; `יִקְלוּ`, 610; Jer 29:22 `קָלָם … בָּאֵשׁ`) and *šarāpu* = `שרף` (608) [cognate]; *sahāru* = `חזר` / D `החזיר` (542, 566, 580–581), so that `שוב` stays for *târu*; *nabalkutu* Š = `הפך` (546, 574; N = `פשע`, part 2); *kašādu* D = `רדף` (576–578; G = `השיג`, part 5); *sapāku* N = `נלכד` (589); *ṣabātu* = `תפש` (536, 582, 590); *palāšu* D = `ניקב` (598); *gamāru* N = `נגמר` [cognate] (593); *marāsu* = `מעך` (602); *hanāqu* = `חנק` (607); *ṭebû* D = `הטביע` (611); *baʾāšu* = `באש` [cognate] (603, 605); *napāhu* = `נפח` [cognate] (563, 565); *akālu* Š = `האכיל` with `ל־` before the eater (520, 599–600: `לארבה, … יאכילו`), as part 5.
8. **Animals and pests** (identified cautiously; eBL/CDA where the API answered): *agurrutu* = `רחל` (vocalized `הָרָחֵל`), *kabsu* / *kabsutu* = `כֶּבֶשׂ` / `כִּבְשָׂה` [cognate], *hurāpu* / *hurāptu* = `טלה` / `טליה`, *kūdanu* = `פרד`, *ṣerru* = `נחש`, *šikkû* = `נמייה`, *ayyalu* = `אַיָּל` [cognate], ***burdišahhu* = `הפרפר (?)`** (SAAo, P&W, Lauinger "caterpillar"; but the creature that "does not return to its cocoon" is the one that has left it), *biškānu* = `פקעת`, *iṣṣūru* = `ציפור` [cognate], *haerušhu* = `החַאֵרוּשְׁחוּ (?)` (unidentified wild beast; transcribed), *umāmu* = `חיה`, *hurbabillu* = `זיקית (?)`, *erbû* = `ארבה`, *zēr barmu* = `זרע מנומר (?)` (unidentified pest), *kalmatu* = `כינים`, *mūnu* = `זחלים`, *tûltu* = `תולעת`, *zumbu* = `זבוב` [cognate], *pispisu* = `פשפש (?)` [cognate?].
9. **Others**: *annaku* = `בדיל` (P&W "lead"; `אֲנָךְ`, Amos 7:7–8, the loan, in the apparatus only); *mušamhiṣūtu* = `סכסוך` (*mahāṣu* Š = `סכסך`, part 3), *mušadbibūtu* = `התססה`, *lihšu* = `לחישה`; *dabāb surrāti u lā kēnāte* = `דיבור שקרים ואי־כנות`; *ša amat lemutti lā ṭābtu lā banītu* = `של דבר רעה, לא טוב, לא יפה` (Hebrew masculine after `דבר`); *aganutillû* = `הַדְרוֹקָן`; *mê lā balāṭi* = `מי לא־חיים` (the opposite of `מי החיים`); *ikkibu* = `איסור` (part 5); *ina pitti* = `בערך`; *takkussu* = `קנה`; *īnu* "spring" = `עין` (pl. `עינות`); *nagû* = `מחוז`; *epinnu* = `מחרשה`; *bēl dāmē* = `בעלי דמים` (plural, because the verbs are plural; P&W "your mortal enemy"); *kippu* = `מלכודת`, *tubāqu* = `פח`; *kamānu ša dišpi* = `חלת הדבש`; *hurratu* = `חור` [cognate]; *pitiltu* = `פתיל` [cognate]; *buqlu* = `לתת`, *titāpū* = `דייסה (?)`, *qarnu* "germ" = `נבט`; *šaṣbutu* = `צֵידָה (?)`; *ina balṭūtekunu* = `בחייכם`.
10. **Text-critical**: 565 translated by the transliteration IGI.2-MEŠ-**ku-nu** "your springs" (the normalization *īnīšunu* "their" contradicts it; Tayinat also *-kunu*); 532 *kūm zunnu* "instead of **rain**" (P&W and Lauinger "instead of dew" – an error); 541 the Nimrud gap after ⸢KI⸣ is left `[…]` though Tayinat has *kî ša zērēni annûte* (Tayinat's §67 differs throughout); 555 `כנ״ל` unbracketed ([KI].⸢MIN⸣, half preserved). The SAAo display duplicates compound logograms (`EN—MUD₂-MEŠ-ku-nu EN—MUD₂-MEŠ-ku-nu`, as `E₂—UŠ-ti E₂—UŠ-ti`): not a scribal dittography.
11. **Tayinat fills** (Decision 5): 514 `על`, 515 `אחיו`, `אמו`, 516 `הבנים`, `מלך`, 517 `שָׂם`, 518 `העז`, `אתכם`, 519 `הראשון`, 520 `יאכיל`, 523 `לאיסורכם`, 526 `נזכר שמם`, `הזה`, 535–536 `לא`, 537 `לפרד`, 543 `בניכם`, 547 `הזאת`. Brackets without Tayinat support: 515 `[של]`, 540 `[כ]`, 544 `[מ]על`, 555A–B, 561 `[ככה]`, 563 `[כנ״ל]`, 577 `[דמיכם]`, 589 `[נשותיכם]`.
12. **Vocalized here**: names at their first occurrence in the part (`אֵסַרְחַדּוֹן` 494; `אַשּׁוּר` land 495, god 518; the crown-prince formula 495; `פָּלִיל`, `אֵאָה`, `הָאַפְסוּ`, `גִּירָּה`, `שַׁמַשׁ`, `חַאֵרוּשְׁחוּ`), `שָׂם` (517), and ambiguous words: `נַעֲשֶׂה`, `נָשִׂים` (×2), `נִשְׁמַע`, `הַדְרוֹקָן`, `יִקְלֶה`, `יִקְלוּ`, `לְבֵנָה`, `יָצִיקוּ`, `נְאוֹתֵיכֶם`, `יַגְשִׁים`, `לֶתֶת`, `מוּשָׂם` (×2), `הָרָחֵל`, `כֶּבֶשׂ וְכִבְשָׂה`, `דַּבְּרוּ`, `דְּמֵי`, `הַצֵּידָה`, `אַיָּל`, `בָּאוּשׁ`, `יְנַקְּבוּ`, `יַחְנְקוּ`.

### Open decisions for the user (part 6)
1. ***siāqu* D = `יָצִיקוּ`** (527): chosen for the probable cognate `צוק` (Deut 28:53, 55, 57 `אֲשֶׁר יָצִיק לְךָ`); the etymology (Geers' law) is not certain. Alternative: the neutral `יָצֵרוּ` (Hiphil of `צרר`, Deut 28:52 `וְהֵצַר`), which reads as `יצרו` and touches the reserved root `יצר`.
2. ***burdišahhu* = `הפרפר (?)`** (579) against the editors' "caterpillar" (`זחל`), on the logic of the simile.
3. ***qamû* = `קלה`** (525, 610: `יִקְלֶה`, `יִקְלוּ`) to keep `שרף` for *šarāpu* (608), or the more natural `ישרוף` / `ישרפו` everywhere (two Akkadian verbs merge).
4. ***lānu* = `תואר`** (610) or `דמות` / `קומה` (`דמות` beside `צלם`, 608, would evoke Gen 1:26).
5. ***iškūru* = `שעווה`** (608) or the biblical `דּוֹנַג` (Ps 68:3; Mic 1:4), which would make the Psalm's image appear in the translation.
6. ***mušadbibūtu* = `התססה`** (500, meaning) or `דיבוב` (the root of *dabābu*, Song 7:10; unclear in Hebrew).
7. ***bēl dāmē* = `בעלי דמיכם`** (577, 583; literal, cf. `גֹּאֵל הַדָּם`) or P&W's sense `אויב המוות`.
8. ***annaku* = `בדיל`** (534) or `עופרת` (P&W "lead"; Exod 15:10 `כַּעוֹפֶרֶת`).
9. **Unidentified animals transcribed or marked**: `חַאֵרוּשְׁחוּ (?)` (588), `זרע מנומר (?)` (599), `זיקית (?)` (593), `פשפש (?)` (603) – or leave them as `…`.

### Progress log (part 6)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, the `>` lines of parts 1–5 (514 lines, extracted by script with their normalizations) and the Decisions and Proposals of parts 1–5; printed about 150 comparison verses from `תנך-מנוקד` (Deut 4–33, Lev 26, Num 5, the prophets, Psalms) before quoting; looked up 25 animal and object words in the eBL dictionary API (`/api/words`; several requests timed out: *burdišahhu*, *aganutillû* not found). Parsed and drafted 494–611 (with T vi 77–93, T vii 1–91, T viii 1–6) unvocalized, then compared P&W and Lauinger. Disagreements recorded: P&W and Lauinger turn §57's oath into promises ("we will not …", "we will report it"); P&W "instead of dew" for *kūm zunnu* (532); P&W "lead" for *annaku* (534); P&W "be altogether like" for *liggamrū* (593: "be finished", Lauinger "be wasted"); P&W "your mortal enemy" (sg.) for the plural subject of 578; P&W "only" and "but" in 557 (not in the Akkadian); P&W's restorations in §67 (540–542) on the Nimrud text, Lauinger's different Tayinat text; Lauinger "Ditto" at 526 (Tayinat one KI.MIN only).
- Review pass (a) fidelity: every word of each normalization checked against its `>` line (the list printed with N under each line); brackets re-checked against the transliteration and Tayinat (Decision 11); `⟨ ⟩` for every SAAo `<…>` that supplies a word (KI.MIN ×13, `אדוננו` 495, `הזה` 603, `ככה` 610), none for sign-level omissions (ŠA₃-<bi> 560, GIR₃.2-<MEŠ> 552–553); added words only in `( )`: `(אם)` 508, `(על)` ×2 510. The asyndetic "ו" (`מים ושמן`, `גשם וטל`, `כפר ונפט`, `ושל טיט`, `אתם ונשותיכם`, `ובני האדם`) without brackets (part 1, Decision 5); `ל־` before the eater of Š *akālu* (520, 599) as in part 5. Fixed at this pass: 536 `בידכם` → `בידיכם` (ŠU.2, dual); 565 by the transliteration.
- Review pass (b) consistency: renderings §1 formulas by `verify.py` (crown prince ×12, `אסרחדון, מלך אשור`, `אם אתם`, `אחיו, בני אמו`, KI.MIN); 504 = 94 = 103 = 285 (identical normalization, identical Hebrew); 526 = 573 (`האלים, כל אשר נזכר שמם בלוח האמנה הזה`; 511 without the tablet); part 5 strings letter for letter: `יפיל אתכם` (518), `לנשר ולעיט` | `יאכיל` (520), `את קשתכם ישברו`, `תחת אויבכם` | `יושיבו אתכם` (573–574), `לאיסורכם … ישימו` (523), `נְאוֹתֵיכֶם` (532), `ברעבונכם` (550), `כזפת`, `כפר ונפט` (586–587), `ארבה` (599), `גשם` (530–533), `בשר` + kin (549); parts 1–3: `מרד וקשר`, `תשמעו, תסתירו` → `נשמע, נסתיר`, `מלך אחר … תשימו`, `בן־מלך אחר`, `ביקש`, `הביט`, `שׂם אתכם`, `ושאר הבנים יוצאי חלציו של אסרחדון`; repeated strings inside the part: `מעי בניכם, בנותיכם` (553, 562), `על חיתוך הגרונות זה של זה` (557, 559), `אתכם, אחיכם, בניכם` (577, 583), `בעלי דמיכם` (577, 583), `בחייכם` (571, 598), `לאחור` (566, 575), `יהפוך` / `יהפכו` (546, 574), `מן הארץ` / `מעל פני הקרקע … יאבד` (539, 544), `חזר` (542, 580–581), `חור` (555, 595, 598), `יקלה` / `יקלו` (525, 610). `verify.py 1 2 3 4 5 6`: 0 problems; the three REVIEW lines are parts 2–3's (justified there), none from part 6.
- Review pass (c) Hebrew: read aloud; vocalized the ambiguous words (Decision 12; `נָשִׂים`, `נִשְׁמַע`, `הָרָחֵל`, `כֶּבֶשׂ`, `דְּמֵי`, `אַיָּל`, `יִקְלֶה` added at this pass); rewrote 537 (`כאשר זרע {תיינת: לפרד} אין`) and 599–600 (the Š construction with `ל־`). Grep of the `>` lines for the reserved words of Decision 7 (none; `סכסוך` contains `כס` but is not `כסה`) and for the letter strings `ברא`, `עבד`, `שבת`, `דמות`, `קרא`, `אדמה`, `עולם`, `חסר`, `מצוק`, `יבול`, `דגן`, `תועב`, `הסית`, `נוח`, `אמנ` (only `טוב` for *ṭābu* and `אמנה` for *adê*). **Translation echoes recorded so that they are not taken for evidence:** `נַעֲשֶׂה` (498) / `נִשְׁמַע` (505) and Exod 24:7 `נַעֲשֶׂה וְנִשְׁמָע` – direct renderings of *neppaš*, *nišammu* (the formal match, the people's first-person vow, is real); `כל הימים אשר … חיים` (507–508) / Deut 4:10; 12:1; 31:13 (the idiom is the translation's); `מידנו … יבקשו` (511–512) / Ezek 3:18 (literal *ina qātīni … buʾʾû*, so a real equivalent); `ירדפו` (578) / Deut 28:45 `וּרְדָפוּךָ`; `יהפוך` (546) / Deut 29:22 `כְּמַהְפֵּכַת`; `ככה` (renderings §3) / Jer 19:11; 51:64.
- `verify.py 6`: 0 problems. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches (fixed on the way: Neh 10:30–31 quoted as two verses; Exod 4:12, Ps 63:12, Deut 6:2 wording; references after "של" and footnote references without the book name).

### Parallels index (part 6)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 494 | *ilāni annūte lidgulū* | האלים האלה יביטו | `יִצֶף יְהוָה בֵּינִי וּבֵינֶךָ` (בראשית לא:מט) | [equivalent] | The god(s) watching over an oath, which follows in the `אִם` form (31:50). Our proposal. |
| 494 | same | same | `רְאֵה אֱלֹהִים עֵד בֵּינִי וּבֵינֶךָ` (בראשית לא:נ) | [equivalent] | P&W "be our witnesses". |
| 494–512 | §57, the swearers' vow in the 1st person plural | אם אנחנו … נעשה … נשמע, נסתיר … לא נאמר | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [divergence] | Deut 29 has Moses address the assembled people; EST lets the swearers speak. From memory (standard comparison of the ceremony). |
| 494–512 | same | same | `וַיֹּאמְרוּ עֵדִים` (יהושע כד:כב) | [equivalent] | The people answer and become witnesses against themselves (cf. 24:27, the stone). |
| 494–512 | same | same | `אֶת יְהוָה אֱלֹהֵינוּ נַעֲבֹד וּבְקוֹלוֹ נִשְׁמָע` (יהושע כד:כד) | [equivalent] | The people's 1st-person-plural answer. |
| 494–512 | same | same | `וּבָאִים בְּאָלָה וּבִשְׁבוּעָה` (נחמיה י:ל) | [equivalent] | A 1st-person-plural oath of the people with `אָלָה` and `שְׁבוּעָה` (*māmītu*, *tamītu*), in the chapter that has `אֲמָנָה` (10:1). Our proposal. |
| 494–512 | same | same | `וַאֲשֶׁר לֹא נִתֵּן בְּנֹתֵינוּ לְעַמֵּי הָאָרֶץ` (נחמיה י:לא) | [equivalent] | Negative vows in the 1st person plural, as §57's oath clauses. Our proposal. |
| 498 | *sīhu bārtu neppašūni* | מרד וקשר נעשה | `כֹּל אֲשֶׁר דִּבֶּר יְהוָה נַעֲשֶׂה וְנִשְׁמָע` (שמות כד:ז) | [equivalent] | `נעשה` (498) and `נשמע` (505) are the direct Hebrew of *neppaš*, *nišammu*: a translation-level identity; the formal match (the people's vow at the covenant ceremony) is real. Our proposal. |
| 505 | *nišammûni* | נשמע | `וְשָׁמַעְנוּ וְעָשִׂינוּ` (דברים ה:כג) | [cognate] | *šemû* = `שמע`; the people's promise at Horeb (repository numbering = standard 5:24). |
| 505 | *nišammûni nupazzarūni* | נשמע, נסתיר | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ` (דברים יג:יג) | [cognate] | As 80, 119 (parts 1–2), now in the swearers' mouth. |
| 505 | *nupazzarūni* | נסתיר | `וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | `כִּסָּה` kept out (Decision 7). |
| 500 | *mušamhiṣūtu mušadbibūtu lihšu* | סכסוך, התססה, לחישה | `כִּי יְסִיתְךָ … בַּסֵּתֶר לֵאמֹר` (דברים יג:ז) | [equivalent] | Incitement in secret; `הסית` kept out (part 3, Decision 5). |
| 496, 504 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | The crown prince's brothers as objects of loyalty (also 515). |
| 507–508 | *ūmu ammar anīnu marʾīni mār marʾēni balṭānīni* | כל הימים אשר אנחנו, בנינו, בני בנינו חיים | `כָּל הַיָּמִים אֲשֶׁר אַתֶּם חַיִּים עַל הָאֲדָמָה` (דברים לא:יג) | [equivalent] | A duty for the whole lifetime, with the sons (31:13). The Hebrew idiom is the translation's (*ūmu ammar* "the day, as much as"). Our proposal. |
| 507–508 | same | same | `כָּל הַיָּמִים אֲשֶׁר הֵם חַיִּים עַל הָאֲדָמָה וְאֶת בְּנֵיהֶם יְלַמֵּדוּן` (דברים ד:י) | [equivalent] | Also 12:1. |
| 508 | *mār marʾēni* | בני בנינו | `אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] | Renderings §1 in the 1st person. |
| 509–510 | *šumma šarru šanumma … ina muhhīni … nišakkanūni* | אם מלך אחר, בן־מלך אחר / עלינו … נשים | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ … לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] | *šakānu* = `שׂם`, "set a king over"; the ban on "another". As 71 (part 1). |
| 511–512 | *ilāni … ina qātīni zarʾīni zarʾ-zarʾīni lubaʾʾiʾū* | האלים … מידנו, מזרענו, מזרע זרענו יבקשו | `וְדָמוֹ מִיָּדְךָ אֲבַקֵּשׁ` (יחזקאל ג:יח) | [equivalent] | *buʾʾû ina qāti* = `בִּקֵּשׁ מִיַּד`, word for word: the god demands the guilt from the responsible party (also 3:20; 33:8). **Not in Tayinat** (509–512 lost there). Our proposal. |
| 511–512 | same | same | `וַיִּכְרֹת יְהוֹנָתָן עִם בֵּית דָּוִד וּבִקֵּשׁ יְהוָה מִיַּד אֹיְבֵי דָוִד` (שמואל א כ:טז) | [equivalent] | `בִּקֵּשׁ מִיַּד` as the sanction clause of a covenant, invoking the god. Our proposal. |
| 511–512 | same | same | `אֶדְרֹשׁ מִיַּד כָּל חַיָּה אֶדְרְשֶׁנּוּ` (בראשית ט:ה) | [equivalent] | `דָּרַשׁ מִיַּד`. |
| 512 | *lubaʾʾiʾū* | יבקשו | `אָנֹכִי אֶדְרֹשׁ מֵעִמּוֹ` (דברים יח:יט) | [equivalent] | The god demands obedience from the hearer. |
| 512 | same | same | `כִּי דָּרֹשׁ יִדְרְשֶׁנּוּ יְהוָה אֱלֹהֶיךָ מֵעִמָּךְ וְהָיָה בְךָ חֵטְא` (דברים כג:כב) | [equivalent] | The vow demanded by the god; the unpaid vow is `חֵטְא` (cf. *ḫaṭû*). Our proposal. |
| 512 | *zarʾīni zarʾ-zarʾīni* | מזרענו, מזרע זרענו | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | The vow binds the descendants (cf. 10, part 1). From memory. |
| 513–517 | *šumma attunu ina libbi adê annūte … tahaṭṭâni* | אם אתם באמנה הזאת … תחטאו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | *ḫaṭû* = `חטא` of a vassal against Assyria; also 555A–B. |
| 518 | *Aššur … ina kakkīšu ezzūti lišamqitkunu* | אשור … בנשקו העז יפיל אתכם | `וְהֵבֵאתִי עֲלֵיכֶם חֶרֶב נֹקֶמֶת נְקַם בְּרִית` (ויקרא כו:כה) | [equivalent] | The god's weapon avenges the broken treaty. Our proposal. |
| 519–520 | *šīrkunu arû zību lišākil* | את בשרכם לנשר ולעיט יאכיל | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) | [equivalent] | The same curse as Ninurta's (426–427, part 5), here by Palil. |
| 521–522 | *mê lā balāṭi lišqikunu aganutillâ limallikunu* | מי לא־חיים ישקה אתכם; בהדרוקן ימלא אתכם | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ לַצְבּוֹת בֶּטֶן` (במדבר ה:כב) | [equivalent] | Water given to drink that swells the belly. Tayinat has another verb for *lišqikunu*. Our proposal. |
| 522 | *aganutillâ limallikunu* | בהדרוקן ימלא אתכם | `וְצָבְתָה בִטְנָהּ וְנָפְלָה יְרֵכָהּ` (במדבר ה:כז) | [equivalent] | Our proposal. |
| 523 | *mê šamnī ana ikkibikunu liškunū* | מים ושמן לאיסורכם ישימו | `וְשֶׁמֶן לֹא תָסוּךְ כִּי יִשַּׁל זֵיתֶךָ` (דברים כח:מ) | [divergence] | Oil lacking (Deut) vs oil and water forbidden (EST). `לאיסורכם` from Tayinat. |
| 523 | *ikkibu* | איסור | `לֹא תֹאכַל כָּל תּוֹעֵבָה` (דברים יד:ג) | [equivalent] | `תועבה` kept out (part 5, open decision 4). |
| 525 | *šumkunu zērkunu liqmu* | את שמכם, את זרעכם ילהט | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [equivalent] | `קלה` by fire as a curse formula (`יְשִׂמְךָ יְהוָה כְּ…`); also 610. Our proposal. |
| 525 | same | same | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | Name/fruit and seed destroyed; also 538–539. |
| 526 | *ilāni mala ina ṭuppi adê annīe šumšunu zakrū* | האלים, כל אשר נזכר שמם בלוח האמנה הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | Renderings §1; also 573. |
| 527 | *ammar libittu kaqquru lusiqqūnikkunu* | כמידת לבנה את הקרקע יציקו לכם | `בְּמָצוֹר וּבְמָצוֹק אֲשֶׁר יָצִיק לְךָ אֹיְבֶךָ` (דברים כח:נג) | [cognate?] | *siāqu* "be narrow" ~ `צוק` (Arabic *ḍāqa*; Akkadian *s* for *ṣ* by Geers' law): the same root in both curse lists – the narrowed ground (EST), the siege that "straitens" (Deut; also 28:55, 57). Etymology not certain. Our proposal. |
| 527 | same | same | `וְהֵצַר לְךָ בְּכָל שְׁעָרֶיךָ` (דברים כח:נב) | [equivalent] | "Make narrow" with another root. |
| 528 | *kaqqarkunu kî parzilli lēpušū* | את קרקעכם כברזל יעשו | `וְהָאָרֶץ אֲשֶׁר תַּחְתֶּיךָ בַּרְזֶל` (דברים כח:כג) | [cognate] | *parzillu* = `בַּרְזֶל`; the same metal for the earth as Deut. **EST: earth (528) before sky (530); Deut: sky before earth.** Known in the literature (from memory). |
| 528 | same | same | `וְאֶת אַרְצְכֶם כַּנְּחֻשָׁה` (ויקרא כו:יט) | [divergence] | Lev gives the earth bronze (metals reversed); but Lev's `כַּ־` = EST's *kî* "like" (Deut has no comparative). |
| 529 | *memmēni ina libbi lū lā iparruʾa* | מאומה בתוכה אל יצמח | `לֹא תִזָּרַע וְלֹא תַצְמִחַ וְלֹא יַעֲלֶה בָהּ כָּל עֵשֶׂב` (דברים כט:כב) | [equivalent] | The cursed land that sprouts nothing, in Deut's description of the broken covenant. Our proposal. |
| 529 | same | same | `וְלֹא תִתֵּן אַרְצְכֶם אֶת יְבוּלָהּ` (ויקרא כו:כ) | [equivalent] | Right after the iron and bronze of 26:19. |
| 530 | *ultu libbi šamê ša siparri zunnu lā izannunūni* | מתוך שמים של אָרָד גשם אינו יורד | `וְהָיוּ שָׁמֶיךָ אֲשֶׁר עַל רֹאשְׁךָ נְחֹשֶׁת` (דברים כח:כג) | [equivalent] | Same metal for the sky as Deut (bronze: biblical `נְחֹשֶׁת`, our `אָרָד` since 2026-10-30 – the same thing in other words); see the footnote at 530 for the order facts. From memory (Weinfeld; Steymans). |
| 530 | same | same | `וְנָתַתִּי אֶת שְׁמֵיכֶם כַּבַּרְזֶל` (ויקרא כו:יט) | [divergence] | Lev: sky iron. |
| 530–533 | *zunnu … kūm zunnu peʾenāti … liznun* | גשם … תחת הגשם / גחלים … יגשים | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר מִן הַשָּׁמַיִם יֵרֵד עָלֶיךָ` (דברים כח:כד) | [equivalent] / [divergence] | The rain replaced by something else falling from the sky: coals (EST) / dust (Deut). `מטר` kept out. From memory. |
| 531–532 | *zunnu nalšu ina libbi eqlātikunu tamerātikunu lū lā illak* | גשם וטל בתוך שדותיכם, נאותיכם אל יבוא | `הָרֵי בַגִּלְבֹּעַ אַל טַל וְאַל מָטָר עֲלֵיכֶם וּשְׂדֵי תְרוּמֹת` (שמואל ב א:כא) | [equivalent] | A curse of no dew and no rain on fields, with `אַל`. Our proposal. |
| 531 | *nalšu* | טל | `אַף שָׁמָיו יַעַרְפוּ טָל` (דברים לג:כח) | [equivalent] | The blessing reversed. |
| 531 | same | same | `אִם יִהְיֶה הַשָּׁנִים הָאֵלֶּה טַל וּמָטָר` (מלכים א יז:א) | [equivalent] | Dew and rain withheld by a divine oath (`חַי יְהוָה … אִם`). |
| 533 | *peʾenāti … liznun* | גחלים … יגשים | `יִמּוֹטוּ עֲלֵיהֶם גֶּחָלִים` (תהלים קמ:יא) | [equivalent] | Coals falling on the wicked (qere). |
| 533 | same | same | `יַמְטֵר עַל רְשָׁעִים פַּחִים אֵשׁ וְגָפְרִית` (תהלים יא:ו) | [equivalent] | "Raining" fire; also Gen 19:24. |
| 534 | *kî ša annaki ina pān išāti lā izzazūni* | כאשר הבדיל לפני האש אינו עומד | `וּבְדִיל אֶל תּוֹךְ כּוּר לָפַחַת עָלָיו אֵשׁ לְהַנְתִּיךְ` (יחזקאל כב:כ) | [equivalent] | Metals melting in fire as an image of judgment (22:18–22). |
| 534 | *ina pān išāti* | לפני האש | `כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | [equivalent] | "Before the fire" = melting. |
| 534 | *annaku* | בדיל | `וּבְיָדוֹ אֲנָךְ` (עמוס ז:ז) | [cognate] | `אֲנָךְ` is a loan from *annaku* (apparatus only). |
| 535 | *attunu ina pān nakrikunu lā tazzazā* | אתם לפני אויבכם לא תעמדו | `וְלֹא תִהְיֶה לָכֶם תְּקוּמָה לִפְנֵי אֹיְבֵיכֶם` (ויקרא כו:לז) | [equivalent] | `לא` from Tayinat. |
| 535 | same | same | `לֹא תוּכַל לָקוּם לִפְנֵי אֹיְבֶיךָ` (יהושע ז:יג) | [equivalent] | After the breach of the ban: `חָטָא יִשְׂרָאֵל וְגַם עָבְרוּ אֶת בְּרִיתִי` (יהושע ז:יא). |
| 535 | same | same | `יִתֶּנְךָ יְהוָה נִגָּף לִפְנֵי אֹיְבֶיךָ` (דברים כח:כה) | [equivalent] | |
| 536 | *mārīkunu mārātikunu ina qātikunu lā taṣabbatā* | את בניכם, את בנותיכם בידיכם לא תתפשו | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר … וְאֵין לְאֵל יָדֶךָ` (דברים כח:לב) | [equivalent] | Parents powerless to hold their children. Our proposal. |
| 537–539 | *kî ša zēri ša kūdini laššūni* | כאשר זרע לפרד אין | `אָרוּר פְּרִי בִטְנְךָ` (דברים כח:יח) | [equivalent] | Barrenness as a curse; `לפרד` from Tayinat. |
| 538–539 | *šumkunu zērkunu … ultu māti lihliq* | שמכם, זרעכם … מן הארץ יאבד | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫalāqu* / `אבד`; Deut of the enemy kings. |
| 544 | *ultu muhhi pānī ša kaqqari lihliq* | [מ]על פני הקרקע יאבד | `וְהִשְׁמִידְךָ מֵעַל פְּנֵי הָאֲדָמָה` (דברים ו:טו) | [equivalent] | *pānī kaqqari* ↔ `פְּנֵי הָאֲדָמָה`; `אדמה` kept out. |
| 544 | same | same | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [equivalent] | |
| 545–546 | *Šamaš ina epinni ša parzilli ālkunu nagîkunu lušabalkit* | שמש, במחרשה של ברזל, את עירכם, את מחוזכם יהפוך | `לָכֵן בִּגְלַלְכֶם צִיּוֹן שָׂדֶה תֵחָרֵשׁ` (מיכה ג:יב) | [equivalent] | The ploughed city. From memory. |
| 545–546 | same | same | `צִיּוֹן שָׂדֶה תֵחָרֵשׁ` (ירמיהו כו:יח) | [equivalent] | Quoting Micah. |
| 546 | *lušabalkit* | יהפוך | `כְּמַהְפֵּכַת סְדֹם וַעֲמֹרָה … אֲשֶׁר הָפַךְ יְהוָה בְּאַפּוֹ` (דברים כט:כב) | [equivalent] | Overturned cities as the covenant curse; `הפך` is the translation's rendering of *nabalkutu* Š. |
| 547–550 | *agurrutu … šīra ša mārīša ina pîša šakinūni kî hannīe šīra ša ahhēkunu mārīkunu mārātikunu … lušākilūkunu* | הרחל … ובשר בנה בפיה מושׂם – ככה את בשר אחיכם, בניכם, בנותיכם ברעבונכם יאכילו אתכם | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [equivalent] | The rite enacts Adad's curse (449, part 5). **Tayinat lacks "your brothers"**: sons and daughters only, as Deut 28:53. Known in the literature (from memory). |
| 549 | *šīra ša ahhēkunu* | את בשר אחיכם | `תֵּרַע עֵינוֹ בְאָחִיו` (דברים כח:נד) | [equivalent] | The brother in the famine scene; Nimrud only. |
| 550 | *lušākilūkunu* (Š) | יאכילו אתכם | `וְהַאֲכַלְתִּים אֶת בְּשַׂר בְּנֵיהֶם וְאֵת בְּשַׂר בְּנֹתֵיהֶם` (ירמיהו יט:ט) | [cognate] | The same causative stem ("make them eat"), with sons, daughters and `אִישׁ בְּשַׂר רֵעֵהוּ`. Our proposal (the stem match). |
| 550 | same | same | `וַאֲכַלְתֶּם בְּשַׂר בְּנֵיכֶם וּבְשַׂר בְּנֹתֵיכֶם תֹּאכֵלוּ` (ויקרא כו:כט) | [equivalent] | |
| 551 | *kabsu kabsutu* | כבש וכבשה | `שְׁנֵי כְבָשִׂים תְּמִימִם וְכַבְשָׂה אַחַת` (ויקרא יד:י) | [cognate] | Lexical. |
| 552–554 | *errēšunu ultu šēpēšunu karkūni … likkarkū* | ומעיהם מעל רגליהם כרוכים … ייכרכו | `וַיִּשְׁפֹּךְ מֵעָיו אַרְצָה` (שמואל ב כ:י) | [equivalent] | Spilled entrails. Tayinat (553): the sons' and daughters' entrails only. |
| 555–556 | *ṣerru u šikkû ina libbi ištēt hurriti lā errabūni lā irabbiṣūni* | נחש ונמייה אל תוך חור אחד אינם באים, אינם רובצים | `וְגָר זְאֵב עִם כֶּבֶשׂ וְנָמֵר עִם גְּדִי יִרְבָּץ` (ישעיהו יא:ו) | [divergence] | Isaiah's peace is the exact inverse: enemies "lie down" (*rabāṣu* / `רבץ` [cognate]) together. Our proposal. |
| 555 | *hurratu* | חור | `וְשִׁעֲשַׁע יוֹנֵק עַל חֻר פָּתֶן` (ישעיהו יא:ח) | [cognate] / [divergence] | The snake's hole, in the same vision. Our proposal. |
| 558–559 | *attunu issātikunu … lā terrabā … lā tattâlā* | אתם ונשותיכם … לא תבואו … לא תשכבו | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ` (דברים כח:נו) | [equivalent] | Enmity between husband and wife. |
| 558 | same | same | `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר יִשְׁגָּלֶנָּה` (דברים כח:ל) | [divergence] | The marriage destroyed by an enemy (Deut) vs by mutual hatred (EST). |
| 559 | *eršu* | ערש | `הִנֵּה עַרְשׂוֹ עֶרֶשׂ בַּרְזֶל` (דברים ג:יא) | [cognate] | Lexical only. |
| 560–562 | *kî ša akalī u karānī ina libbi errēkunu errabūni kî hannî tamītu annītu ina libbi errēkunu … lušēribū* | כאשר לחם ויין אל תוך מעיכם באים, ככה – את השבועה הזאת אל תוך מעיכם … יביאו | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ לַצְבּוֹת בֶּטֶן` (במדבר ה:כב) | [equivalent] | Oath (*tamītu* / `שבועה`), "enter" (*erēbu* / `בוא`), "entrails" (*erru* / `מעיים`): the three elements of the ordeal. `[ככה]` restored (not in Tayinat). Known in the literature (from memory). |
| 561 | *tamītu annītu* | השבועה הזאת | `וְהִשְׁבִּיעַ הַכֹּהֵן אֶת הָאִשָּׁה בִּשְׁבֻעַת הָאָלָה` (במדבר ה:כא) | [equivalent] | The ordeal is an oath. |
| 562 | *lušēribū* | יביאו | `וּבָאוּ בָהּ הַמַּיִם הַמְאָרְרִים לְמָרִים` (במדבר ה:כד) | [equivalent] | Also 5:27. |
| 561 | same | same | `וַיִּלְבַּשׁ קְלָלָה כְּמַדּוֹ וַתָּבֹא כַמַּיִם בְּקִרְבּוֹ וְכַשֶּׁמֶן בְּעַצְמוֹתָיו` (תהלים קט:יח) | [equivalent] | The curse "entering" the body like water. From memory. |
| 563 | *tanappahāni* | נופחים | `וְנָפַחְתִּי עֲלֵיכֶם בְּאֵשׁ עֶבְרָתִי` (יחזקאל כב:כא) | [cognate] | *napāhu* = `נפח`; lexical. |
| 565 | *īnīkunu* "your springs" | עינותיכם | `אֶרֶץ נַחֲלֵי מָיִם עֲיָנֹת וּתְהֹמֹת` (דברים ח:ז) | [cognate] / [divergence] | The blessing of springs reversed. Translated by the transliteration (*-kunu*; the normalization has *-šunu*). |
| 565–566 | *nārīkunu … mêšina ana qinniš lusahhirū* | נהרותיכם … את מימיהם לאחור יחזירו | `הַיָּם רָאָה וַיָּנֹס הַיַּרְדֵּן יִסֹּב לְאָחוֹר` (תהלים קיד:ג) | [equivalent] | The river turned back (a sign there, a curse here). |
| 567 | *akalī ina pitti hurāṣi … lušālikū* | לחם בערך זהב … יוליכו | `וְהֵשִׁיבוּ לַחְמְכֶם בַּמִּשְׁקָל וַאֲכַלְתֶּם וְלֹא תִשְׂבָּעוּ` (ויקרא כו:כו) | [equivalent] | Bread weighed like precious metal. Tayinat: bread "taken away" from the land. Our proposal. |
| 567 | same | same | `וְאָכְלוּ לֶחֶם בְּמִשְׁקָל וּבִדְאָגָה` (יחזקאל ד:טז) | [equivalent] | |
| 567 | same | same | `עַד הֱיוֹת רֹאשׁ חֲמוֹר בִּשְׁמֹנִים כֶּסֶף` (מלכים ב ו:כה) | [equivalent] | Famine prices in the siege of Samaria (followed by the cannibalism, 6:28–29). |
| 567 | same | same | `כָּל עַמָּהּ נֶאֱנָחִים מְבַקְּשִׁים לֶחֶם` (איכה א:יא) | [equivalent] | Treasures given for food. |
| 568–569 | *kî ša dišpu matiqūni dāmē ša issātikunu mārīkunu mārātikunu ina pîkunu limtiq* | כאשר דבש מתוק – דמי נשותיכם, בניכם, בנותיכם בפיכם ימתק | `וְהַאֲכַלְתִּי אֶת מוֹנַיִךְ אֶת בְּשָׂרָם וְכֶעָסִיס דָּמָם יִשְׁכָּרוּן` (ישעיהו מט:כו) | [equivalent] | Eating flesh and drinking blood "like sweet wine". Our proposal. |
| 568–569 | same | same | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [equivalent] | The second cannibalism simile (with §69). From memory. |
| 568 | *dišpu … matāqu … ina pî* | דבש מתוק … בפיכם | `וַתְּהִי בְּפִי כִּדְבַשׁ לְמָתוֹק` (יחזקאל ג:ג) | [cognate] | Same three words (`בפי`, `דבש`, `מתוק`), for the eaten scroll. |
| 569 | *ina pîkunu limtiq* | בפיכם ימתק | `אִם תַּמְתִּיק בְּפִיו רָעָה` (איוב כ:יב) | [cognate] | Evil sweet in the mouth. Our proposal. |
| 570–572 | *tûltu tākulūni … tuʾissu lū tākul* | תולעת … אוכלת … התולעת תאכל | `כְּרָמִים תִּטַּע וְעָבָדְתָּ וְיַיִן לֹא תִשְׁתֶּה וְלֹא תֶאֱגֹר כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [cognate] | Same subject and verb (*tûltu* / `תּוֹלַעַת`, *akālu* / `אָכַל`); in Deut the vineyard, in EST the provisions and then the living flesh. From memory (Steymans). |
| 571, 598 | *ina balṭūtekunu* | בחייכם | `הָמֵק בְּשָׂרוֹ וְהוּא עֹמֵד עַל רַגְלָיו` (זכריה יד:יב) | [equivalent] | The flesh rotting while alive. Our proposal. |
| 572 | *tuʾissu lū tākul* | התולעת תאכל | `כִּי תוֹלַעְתָּם לֹא תָמוּת` (ישעיהו סו:כד) | [equivalent] | |
| 573 | *qaštukunu lišbirū* | את קשתכם ישברו | `וְשָׁבַרְתִּי אֶת קֶשֶׁת יִשְׂרָאֵל` (הושע א:ה) | [cognate] | As 453 (part 5). |
| 573 | same | same | `הִנְנִי שֹׁבֵר אֶת קֶשֶׁת עֵילָם` (ירמיהו מט:לה) | [cognate] | |
| 573–574 | *ina šapal nakrikunu lušēšibūkunu* | תחת אויבכם יושיבו אתכם | `וְאַתָּה תֵרֵד מַטָּה מָּטָּה` (דברים כח:מג) | [equivalent] | Subjection. As 454 (part 5). |
| 574 | *qalta ina qātīkunu lušabalkitū* | את הקשת בידיכם יהפכו | `נֶהְפְּכוּ כְּקֶשֶׁת רְמִיָּה` (תהלים עח:נז) | [equivalent] | The "turned" bow as an image of disloyalty. Our proposal. |
| 575 | *mugirrīkunu ana qinniš lušadīlū* | את מרכבותיכם לאחור יריצו | `וְהָפַכְתִּי מֶרְכָּבָה וְרֹכְבֶיהָ` (חגי ב:כב) | [equivalent] | Overturned chariots. Our proposal. |
| 576 | *ayālu kaššudūni dēkūni* | איל נרדף ונהרג | `הָיוּ שָׂרֶיהָ כְּאַיָּלִים לֹא מָצְאוּ מִרְעֶה וַיֵּלְכוּ בְלֹא כֹחַ לִפְנֵי רוֹדֵף` (איכה א:ו) | [cognate] | *ayyalu* = `אַיָּל`, the hunted stag. |
| 577–578 | *bēl dāmēkunu lukaššidū lidūkūkunu* | בעלי דמיכם ירדפו, יהרגו אתכם | `פֶּן יִרְדֹּף גֹּאֵל הַדָּם אַחֲרֵי הָרֹצֵחַ … וְהִשִּׂיגוֹ` (דברים יט:ו) | [equivalent] | The "lord of blood" pursues, overtakes and kills. **Not in Tayinat** (no *bēl dāmē*). Our proposal. |
| 577 | *bēl dāmē* | בעלי דמים | `גֹּאֵל הַדָּם הוּא יָמִית אֶת הָרֹצֵחַ` (במדבר לה:יט) | [equivalent] | Our proposal. |
| 578 | *lukaššidū* | ירדפו | `וּרְדָפוּךָ וְהִשִּׂיגוּךָ עַד הִשָּׁמְדָךְ` (דברים כח:מה) | [equivalent] | *kašādu* G `השיג`, D `רדף`: both verbs of 28:45. |
| 579–581 | *lā tasahharūni … ana bītātikunu lā tasahhurā* | אינו חוזר … אל בתיכם לא תחזרו | `לֹא יָשׁוּב עוֹד לְבֵיתוֹ וְלֹא יַכִּירֶנּוּ עוֹד מְקֹמוֹ` (איוב ז:י) | [equivalent] | No return home. |
| 581 | same | same | `בַּיִת תִּבְנֶה וְלֹא תֵשֵׁב בּוֹ` (דברים כח:ל) | [equivalent] | |
| 581 | *issātikunu mārīkunu mārātikunu* | נשותיכם, בניכם, בנותיכם | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר` (דברים כח:לב) | [equivalent] | Separation from the family. |
| 582 | *kî ša iṣṣūru ina tubāqi iṣabbatūni* | כאשר ציפור במצודה תופשים | `הֲתִפֹּל צִפּוֹר עַל פַּח הָאָרֶץ וּמוֹקֵשׁ אֵין לָהּ` (עמוס ג:ה) | [cognate] / [equivalent] | *iṣṣūru* = `צִפּוֹר`; *tubāqu* ↔ `פַּח` (our `מְצוֹדָה` since the 2026-10-23 harmonization). |
| 582 | same | same | `כַּדָּגִים שֶׁנֶּאֱחָזִים בִּמְצוֹדָה רָעָה וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב) | [equivalent] | Both trap words, `מְצוֹדָה` (*tubāqu*, 582) and `פַּח` (*gišparru*, 650). |
| 582 | same | same | `נַפְשֵׁנוּ כְּצִפּוֹר נִמְלְטָה מִפַּח יוֹקְשִׁים` (תהלים קכד:ז) | [divergence] | The escape. |
| 582, 590 | *ṣabātu* (trap) | תופשים / תיתפשו | `וּפָרַשְׂתִּי עָלָיו רִשְׁתִּי וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יז:כ) | [equivalent] | The vassal king who broke his oath to Babylon (17:13–19) "caught" in the god's net. Our proposal. |
| 583–584 | *ina qāt bēl dāmēkunu liškanūkunu* | ביד בעלי דמיכם ישימו אתכם | `וְנָתַן מַלְכֵיהֶם בְּיָדֶךָ` (דברים ז:כד) | [equivalent] | "Put into the hand"; *šakānu* = `שׂם`. Tayinat: "your enemy". |
| 583–584, 590 | same; *ina qāt nakrikunu* | ביד אויבכם | `וְנִתַּתֶּם בְּיַד אוֹיֵב` (ויקרא כו:כה) | [equivalent] | In the covenant curses. |
| 586–587 | *kî qīru kupri napṭi luṣallimū* | כזפת, כפר ונפט ישחירו | `חָשַׁךְ מִשְּׁחוֹר תָּאֳרָם` (איכה ד:ח) | [equivalent] | Blackened skin in the famine of the siege. |
| 586 | *qīru* | זפת | `וְנֶהֶפְכוּ נְחָלֶיהָ לְזֶפֶת` (ישעיהו לד:ט) | [equivalent] | |
| 587 | *kupru* | כפר | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | [cognate] | Lexical (guidelines §6.7). |
| 588 | *haerušhi umāmu ina kippi* | החארושחו (?), החיה, במלכודת | `בָּנַיִךְ עֻלְּפוּ שָׁכְבוּ בְּרֹאשׁ כָּל חוּצוֹת כְּתוֹא מִכְמָר` (ישעיהו נא:כ) | [equivalent] | The sons like a wild animal in a net. Our proposal. |
| 589 | *issappakūni* | נלכדת | `הֲיַעֲלֶה פַּח מִן הָאֲדָמָה וְלָכוֹד לֹא יִלְכּוֹד` (עמוס ג:ה) | [equivalent] | |
| 593 | *liggamrū* | ייגמר | `יִגְמָר נָא רַע רְשָׁעִים` (תהלים ז:י) | [cognate] | *gamāru* = `גמר` "come to an end". |
| 593 | *hurbabillu* | זיקית (?) | `וְהָאֲנָקָה וְהַכֹּחַ וְהַלְּטָאָה וְהַחֹמֶט וְהַתִּנְשָׁמֶת` (ויקרא יא:ל) | [equivalent?] | The lizards of the food laws; one of them is often identified with the chameleon. |
| 594–598 | *kamāni ša dišpi hurrāti pallušāni … hurrāti lupallišū* | חלת הדבש חורים נקובים … חורים ינקבו | `וַיִּקֹּב חֹר בְּדַלְתּוֹ` (מלכים ב יב:י) | [equivalent] | "Bore a hole" (*hurratu* / `חֹר` [cognate]). Lexical. |
| 594 | *kamānu ša dišpi* | חלת הדבש | `וַיִּטְבֹּל אוֹתָהּ בְּיַעְרַת הַדְּבָשׁ` (שמואל א יד:כז) | [equivalent] | In an oath story (14:24–28). |
| 599–600 | *erbû … ākilū ālānikunu … lušākilu* | לארבה … לאוכלים את עריכם … יאכילו | `זֶרַע רַב תּוֹצִיא הַשָּׂדֶה וּמְעַט תֶּאֱסֹף כִּי יַחְסְלֶנּוּ הָאַרְבֶּה` (דברים כח:לח) | [cognate] | *erbû* = `אַרְבֶּה`. The pests of Deut 28:38–42 (locust, worm – see 570 –, cricket). Known in the literature (from memory). |
| 599 | *zēr barmu kalmutu mūnu* | זרע מנומר (?), כינים, זחלים | `כָּל עֵצְךָ וּפְרִי אַדְמָתֶךָ יְיָרֵשׁ הַצְּלָצַל` (דברים כח:מב) | [equivalent] | A list of pests. |
| 599 | same | same | `יֶתֶר הַגָּזָם אָכַל הָאַרְבֶּה וְיֶתֶר הָאַרְבֶּה אָכַל הַיָּלֶק` (יואל א:ד) | [equivalent] | Four pests "eating" one after another; also 2:25. |
| 599 | *kalmatu* | כינים | `וַתְּהִי הַכִּנָּם בָּאָדָם וּבַבְּהֵמָה` (שמות ח:יג) | [equivalent] | |
| 600 | *lušākilu* | יאכילו | `וַיֹּאכַל אֶת כָּל עֵשֶׂב הָאָרֶץ וְאֵת כָּל פְּרִי הָעֵץ` (שמות י:טו) | [cognate] | The locust "eats" the land. |
| 601 | *kî zumbi* | כזבוב | `יִשְׁרֹק יְהוָה לַזְּבוּב אֲשֶׁר בִּקְצֵה יְאֹרֵי מִצְרָיִם` (ישעיהו ז:יח) | [cognate] | Lexical. |
| 603 | *biʾšūni* | באוש | `וּבָאַשׁ הַיְאֹר` (שמות ז:יח) | [cognate] | *baʾāšu* = `באש`. |
| 603–605 | *ina pān ili u šarri amēlūte nipiškunu libʾiš* | לפני האל והמלך ובני האדם נשימתכם תבאש | `אֲשֶׁר הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה וּבְעֵינֵי עֲבָדָיו` (שמות ה:כא) | [cognate] | The same idiom: to "stink" before the king = to be hateful to him (also Gen 34:30; 1 Sam 13:4; 2 Sam 10:6; 16:21). Our proposal. |
| 604–605 | same | same | `כִּי נִבְאַשְׁתָּ אֶת אָבִיךָ` (שמואל ב טז:כא) | [cognate] | Our proposal. |
| 604–605 | same | same | `לְהַבְאִישֵׁנִי בְּיֹשֵׁב הָאָרֶץ` (בראשית לד:ל) | [cognate] | Our proposal. |
| 605 | *nipiškunu libʾiš* | נשימתכם תבאש | `וָאַעֲלֶה בְּאֹשׁ מַחֲנֵיכֶם וּבְאַפְּכֶם` (עמוס ד:י) | [cognate] | Stench "in your nostrils" among Amos's covenant-curse plagues (4:6–11). Our proposal. |
| 607 | *ina pitilti* | בפתיל | `כַּאֲשֶׁר יִנָּתֵק פְּתִיל הַנְּעֹרֶת` (שופטים טז:ט) | [cognate] | *pitiltu* = `פְּתִיל`; lexical. |
| 607 | *lihnaqūkunu* | יחנקו | `וַיְצַו אֶל בֵּיתוֹ וַיֵּחָנַק` (שמואל ב יז:כג) | [cognate] | *hanāqu* = `חנק`; lexical. |
| 608 | *ṣalmu ša iškuri ina išāti iššarrapūni* | צלם של שעווה באש נשרף | `כְּהִמֵּס דּוֹנַג מִפְּנֵי אֵשׁ יֹאבְדוּ רְשָׁעִים` (תהלים סח:ג) | [equivalent] | Wax before fire as an image of perishing; `דונג` kept out of the translation (Decision 6). |
| 608 | same | same | `כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | [equivalent] | Also Ps 97:5. |
| 608 | *ṣalmu … iššarrapūni* | צלם … נשרף | `פְּסִילֵי אֱלֹהֵיהֶם תִּשְׂרְפוּן בָּאֵשׁ` (דברים ז:כה) | [divergence] | Burning images: of gods (Deut) vs of the oath-breaker (EST). *šarāpu* = `שרף` [cognate]. |
| 609 | *ša ṭiṭṭi ina mê immahhahūni* | ושל טיט במים נמס | `וּכְמוֹ יוֹצֵר יִרְמָס טִיט` (ישעיהו מא:כה) | [cognate] | *ṭiṭṭu* = `טִיט`; lexical. |
| 610 | *lānkunu ina Girra liqmû* | את תוארכם בגירה ילהטו | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [equivalent] | As 525. |
| 611 | *ina mê luṭabbû* | במים יטביעו | `וּמִבְחַר שָׁלִשָׁיו טֻבְּעוּ בְיַם סוּף` (שמות טו:ד) | [cognate] | *ṭebû* = `טבע`. |
| 608–611 | *kî ša … kî hannīe … ina mê luṭabbû* | כאשר … ככה … במים יטביעו | `וְאָמַרְתָּ כָּכָה תִּשְׁקַע בָּבֶל וְלֹא תָקוּם` (ירמיהו נא:סד) | [equivalent] | A symbolic act of sinking followed by `כָּכָה` (the scroll thrown into the Euphrates, 51:63): the form of the simile curse. Our proposal. |
| 530–611 | *kî ša … kî hannīe* (the simile curses) | כאשר … ככה | `כָּכָה אֶשְׁבֹּר אֶת הָעָם הַזֶּה … כַּאֲשֶׁר יִשְׁבֹּר אֶת כְּלִי הַיּוֹצֵר` (ירמיהו יט:יא) | [equivalent] | A rite performed before witnesses (19:10 `לְעֵינֵי הָאֲנָשִׁים`) and interpreted with `כָּכָה … כַּאֲשֶׁר`. Our proposal. |
| 530–611 | same | same | `וְהָיָה כַּאֲשֶׁר שָׂשׂ יְהוָה עֲלֵיכֶם … כֵּן יָשִׂישׂ יְהוָה עֲלֵיכֶם` (דברים כח:סג) | [equivalent] | The "as … so" form in Deut 28, without a rite (corpus renderings §3). |

### Proposals for the renderings (part 6; plain strings as they appear in the `>` lines; for part 7)
- **The protasis (for 612A–B):** `אם אתם באמנה הזאת של אסרחדון, מלך אשור,` | `אשר על אשור־בני־אפלי, בן־המלך הגדול של בית הירושה – תחטאו –` (555A–B; with *ša* "of" when no verb follows; `אשר … שׂם אתכם` when *iškunūni* follows, 513–517). Fill from Tayinat where it has the line (part 7 should check whether Tayinat has 612A–B).
- **KI.MIN:** at the head of the line, with a colon: `כנ״ל: …`, `כנ״ל, כנ״ל: …`; SAAo `<KI.MIN>` = `⟨כנ״ל:⟩`; `[כנ״ל]` for a broken one. Explained once per part (here at 526).
- **The simile:** `כאשר …` (*kî ša*) … `ככה` (*kî hannīe*) only where the Akkadian has it; `ככה – ` with a dash when it opens the apodosis; the rite's deictic `הזאת` / `הזה`. Subjunctive *-ūni* in the simile clause = Hebrew present (`אינו עומד`, `נופחים אתם`, `באים`) or participle/stative (`בקועה`, `מושׂם`, `כרוכים`, `נקובים`).
- **Kin and body lists:** `אתכם, נשותיכם, אחיכם, בניכם, בנותיכם` (*ana kāšunu issātikunu ahhēkunu mārīkunu mārātikunu*; *ana kâšunu* = `אתכם`); `את בשרכם, את בשר נשותיכם, …` (object) / `בשרכם, בשר נשותיכם, …` (subject); `מעיכם, מעי בניכם, בנותיכם`; `בחייכם` (*ina balṭūtekunu*); `ביד אויבכם` (*ina qāt nakrikunu*); `בעלי דמיכם` (*bēl dāmēkunu*).
- **Verbs:** *akālu* Š with the eater = `ל־X … יאכילו`; *šebēru* `ישברו`; *ina šapal nakri šūšubu* `תחת אויבכם` | `יושיבו אתכם`; *nabalkutu* Š = `הפך`; *sahāru* = `חזר` / D `החזיר`; *ana qinniš* = `לאחור`; *kašādu* D = `רדף`; *dâku* = `הרג`; *sapāku* N = `נלכד`; *ṣabātu* N = `נתפש`; *qamû* = `קלה` (`יִקְלוּ`); *šarāpu* = `שרף`; *ṭebû* D = `הטביע`; *napāhu* = `נפח`; *erēbu* G/Š = `בוא` / `הביא`; *baʾāšu* = `באש`; *hanāqu* = `חנק`; *palāšu* = `ניקב`; *gamāru* N = `נגמר`; *marāsu* = `מעך`; *karāku* = `כרך`; *zanānu* = `יורד` (gešem) / `יגשים`; *parāʾu* = `צמח`; *siāqu* D = `הֵצִיק`.
- **Nouns:** *kaqqaru* = `קרקע`; *parzillu* / *siparru* = `ברזל` / `אָרָד` (2026-10-30 harmonization; was `נחושת`); *zunnu* / *nalšu* = `גשם` / `טל`; *peʾenātu* = `גחלים`; *tamertu* = `נאות`; *erru* = `מעיים`; *tamītu* = `שבועה`; *akalu* / *karānu* = `לחם` / `יין`; *dišpu* = `דבש`; *hurāṣu* = `זהב`; *tûltu* = `תולעת`; *mugerru* = `מרכבה`; *ṣalmu* = `צלם`; *iškūru* = `שעווה`; *ṭiṭṭu* = `טיט`; *lānu* = `תואר`; *pitiltu* = `פתיל`; *hurratu* = `חור`; *eršu* = `ערש`; *issātu* = `נשים`; *nagû* = `מחוז`; *epinnu* = `מחרשה`; *memmēni* (negated) = `מאומה`; *ina pitti* = `בערך`; *annaku* = `בדיל`; *nipšu* = `נשימה`; *napištu* (throat) = `גרון`.
- **Animals:** see Decision 8 (`רחל`, `כבש`/`כבשה`, `טלה`/`טליה`, `פרד`, `נחש`, `נמייה`, `איל`, `פרפר (?)`, `ציפור`, `חיה`, `זיקית (?)`, `ארבה`, `כינים`, `זחלים`, `זבוב`, `פשפש (?)`); part 7 has the chariot drenched in blood (§90), the bronze bird-trap of Šamaš (649), the ewe and the mašennu (652–656), honey, oil, ginger and cedar resin (643): use `פח` for a trap, `חלת הדבש` / `דבש`, `שמן`.
- **First-person forms (§57):** `נעשה`, `נשים`, `נשמע, נסתיר`, `לא נאמר`, `אדוננו`, `בנינו, בני בנינו`, `זרענו, זרע זרענו`, `מידנו … יבקשו`.
- **Corpus renderings §3 addition proposed:** KI.MIN at the head of a line takes a colon (`כנ״ל, כנ״ל: כאשר …`); `ככה` only where *kî hannīe* is written.
- **Corpus renderings §4 additions proposed:** *nalšu* = `טַל`; *peʾenātu* = `גֶּחָלִים`; *tûltu* = `תּוֹלַעַת` [cognate] (Deut 28:39); *siāqu* = `הֵצִיק` [cognate?] (Deut 28:53); *baʾāšu* = `בָּאַשׁ` [cognate] (Exod 5:21); *erru* = `מֵעַיִם` (Num 5:22).

### Lessons for the guidelines (part 6)
- **A first-person passage in a treaty is the people's answer:** keep its oath form and conjugate the fixed second-person strings mechanically (`תשמעו, תסתירו` → `נשמע, נסתיר`); then check which of the resulting Hebrew words are famous in themselves (`נַעֲשֶׂה … נִשְׁמָע`, Exod 24:7) and record them as translation echoes with the real formal parallel.
- **In simile curses, translate "so" only where it is written.** EST omits *kî hannīe* in a third of the similes; adding `ככה` everywhere would regularize the text and blur the Tayinat variants (which add or drop it).
- **Check the English translation's word against the cuneiform even in a famous line:** P&W and Lauinger both have "instead of dew" at 532, where both copies write *kūm zunnu* "instead of rain".
- **Read the etymology of the Deuteronomic verb, not only its meaning:** `יָצִיק` (Deut 28:53) may be the cognate of EST's *siāqu* (Geers' law hides it: *ṣ* → *s* before *q*); a meaning-only rendering (`הצר`) would have hidden it.
- **Display artifacts of the data are not scribal facts:** the SAAo export prints compound logograms twice (`EN—MUD₂-MEŠ-ku-nu EN—MUD₂-MEŠ-ku-nu`, `E₂—UŠ-ti E₂—UŠ-ti`); do not report a dittography from the export.
- **The eBL dictionary API is slow** (several of 25 queries timed out at 30 s): run it in the background, and record which words were not found.

## Part 7: §90–§107 (lines 612A–670)

### Scope
- P&W §90–§107 (with §96A): the second half of the ceremonial curse section (§90–§106, 612A–663) and the date and colophon (§107, 664–670), composite lines 612A–670 with 612A–B, 616A, 618A, 633A–C, 636A–C: **69 composite entries**. File: `annotated-7--sections-90-107.rtl.md` (assembled by a script from the SAAo data and the entry texts, as parts 5–6).
- Language: Neo-Assyrian (subjunctive *-ūni* in the simile clauses, *issi*, *issātu*, *ana kâšunu*, *kî hannīe*), with SB wish forms (*lū lā* + present 640, *lū* + stative 648, *ay* + preterite 651) and 2mp imperatives (*mūtā* 655; Tayinat *pišlā* 658).
- Tayinat coverage: **T viii 7–71**, nearly every line. **Not in Tayinat:** the protasis 612A–B, the gods formula 616A and 618A (both also unwritten in Nimrud: SAAo `<…>`), and 633A (Assurbanipal's brothers). **No Tayinat line lacks a composite counterpart, so there are no `T` entries in this part**; Tayinat's date (Ayyāru 16) and its colophon are aligned by SAAo to 664–670 and given there (apparatus and footnotes). The SAAo export of P500551 ends at T viii 71; any text on the edge is not in our source. Tayinat variants of substance: 619, 624, 636A–B, 649–650 shorter kin lists (no daughters / no wives and brothers); 636C *liqilūkunu* "roast you" (Nimrud: *lu-*[…] only); 642 adds *kî hannīe*; 652, 656 "this waterskin", "this sandal"; 656 *batqat* "cut" for *šalqat* "split"; 657 adds *gāziri* "sharp stones"; 658 *libtuqū … ina muhhi libbikunu pišlā* "crawl on your bellies!" (P&W 1988 restored "[Go around barefooted!]"); 662–663 complete the door curse; **664 day 16** (Nimrud 18); 666 "the treaty concerning Assurbanipal" without "of Esarhaddon, king of Assyria"; KI.MIN where Nimrud has none (618, 643, 656) and none where Nimrud has it (612, 637, 649).

### Decisions (translator, part 7)
1. **The protasis 612A–B** follows part 6's 555A string letter for letter (`[אם אתם באמנה] הזאת של אסרחדון, מלך אשור,` – identical normalization, identical brackets: *a* lost, *de* damaged), and 612B gives the new ending `[ובני]ו, בני בניו – [תח]טאו –` (*u marʾēšu mār marʾēšu*, as 4 `בניו, בני בניו`). Tayinat has no protasis here. 612's KI.MIN = `כנ״ל:` (explained there; it follows the written-out protasis).
2. **§96 (632–636) is a new oath stipulation inside the curses**: `אם אתם את אסרחדון, מלך אשור, ⟨אדונכם⟩, ואת אשור־בני־אפלי … ואת אחיו, [בני אמו] של אשור־בני־אפלי, בן־המלך הגדול של בית הירושה, ושאר הבנים יוצאי חלציו של אסרחדון, מלך אשור – תרפו, לימין ⟨ו⟩לשמאל תלכו –`. *turammâni* = *ramû* D = `תרפו` (corpus §2; not *râmu*), with the objects marked by `את` before the verb (as 62; `הרפה` + direct object is biblical, `לֹא יַרְפְּךָ`, Deut 31:6); the formulas `אחיו, בני אמו של אשור־בני־אפלי` and `ושאר הבנים יוצאי חלציו של אסרחדון` are kept letter for letter (no `ואת` before `שאר`; the `את` of 632–633A governs the list). *imittu u šumēlu* = `ימין ושמאל` (corpus §2; P&W "south / north"); *alāku* = `הלך`, so Deuteronomy's `סור` stays out. *patrī lēkulāšu* = `חרבות תאכלנה אותו` (3fp *-ā*; P&W's "iron" is not in the text).
3. **Simile curses:** `ככה` only where *kî hannīe* is written (613, 629, 638); `⟨ככה⟩` at 623 (SAAo `<…>`, as 610); no `ככה` in §98 (Tayinat adds it, apparatus), §100, §102, §103. *kî* temporal "when" (643) = `כאשר` without a simile.
4. **Kin lists** as part 6: `אתכם, אחיכם, בניכם,` | `[בנותיכם]` (618–619), `אתכם, נשותיכם, אחיכם,` | `בניכם, בנותיכם` (636A–B), nominative `אתם, נשותיכם, בניכם,` | `בנותיכם` (638–639), `אתם, נשותיכם, בניכם, בנותיכם` (647), `עליכם, (על) בניכם,` | `[בנותיכם]` (649–650), apposition `בשר אחי⟨כם⟩, בניכם, בנותיכם` (624). The resumptive suffix is translated (`יריצו אתכם`, 620, as 583–584).
5. **Cognates made visible** (all tagged): *pilaqqu* = `פלך` (616; 2 Sam 3:29), *arrāru* = `האוררים` (626; Job 3:8), *batāqu* D = `בִּתֵּק` (627; Ezek 16:40 – Deuteronomy's/Samuel's `קצץ` kept in the apparatus), *kappu* = `כף`, *gamāru* = `גמר`, *qanû* = `קנה`, *šalāpu* = `שלף`, *akālu* = `אכל`, *šumēlu* = `שמאל`, *qalû* = `קלה` (636C, Tayinat), *gadû* = `גדי`, *nâhu* = `נוח`, *qerēbu* = `קרב` + *eṣemtu* = `עצם` (640; Ezek 37:7), *rīqu* / *riāqu* = `ריק` / `התרוקן`, *libbu* = `לב` (641–642, the pun; but `בטן` for the body part, 658), *dišpu* = `דבש`, *šamnu* = `שמן`, *erēnu* = `ארז`, *martu* / *marāru* = `מָרָה` / `מר` (646: **`הַמָּרָה מָרָה`** keeps the pun *martu marrat*), *napištu* = `נפש`, *nādu* = `נאד`, *ṣumāmītu* / *ṣūmu* = `צמאון` / `צמא`, *daltu* = `דלת`, *petû* = `פתח`, *šaknu* = `סְגַן` (665; Hebrew `סָגָן` is the loan), *Ayyāru* = `אִיָּר`, *pašāṭu* = `מחה` (661, **its first use in the treaty**), *halāqu* D = `יְאַבֵּד`, *zēru* = `זרע`.
6. **Defects and Deuteronomic words kept out** (each in the apparatus): *ugallilūni* = `גִּלְגֵּל (?)` (628; literal *galālu* "roll"; P&W and the lemma "blind" = `עִוֵּר`, which would echo Deut 28:28–29 and 2 Kgs 25:7 – guidelines §5, "describe a defect as the original"); `סור` (634); `גחון` (658, Tayinat *libbu* "belly"); `קצץ` (627); *sahāpu* "cover" = `פרש` (650; `כסה` reserved).
7. **Words chosen knowing that they meet a key verse** (meaning first, tagged): *huhāru* = `רשת`, *gišparru* = `מצודה` (649–650; **2026-10-23 harmonization: *gišparru* = `פח`, as Etana, Maqlû and the Šamaš Hymn, so 650 now reads `בפח`**) – the natural words for a bird-net and a trap, and the words of Ezek 12:13; 17:20 (the net over the oath-breaking vassal); `יפרוש` (650) – the Hebrew verb of nets (Ezek 17:20; Hos 7:12); *nabalkutu* Š = `הפך` (659, part 6) – meets Hag 2:22 `וְהָפַכְתִּי כִּסֵּא`; *nadû* = `השליך` (651) – meets Deut 29:27 (recorded as a translation echo).
8. **Other renderings:** *mugirru* = `מרכבה`, *sassu* = `רצפה` (612; not `חיק`, reserved for *sūnu*), *rahāṣu* = `שטף` (G stative `שטופה`, N `יִשָּׁטְפוּ`, Š `ישטפו`), *qablu* = `תוך` (614), *ṣabāru* Š = `סחרר`, *issi* = `אשה`, *alluttu* = `סרטן`, *dâlu* Š = `הריץ`, *lawû* Š = `הקיף`, *appāru* = `אגמון`, *riksu* = `אגודה`, *enēšu* D = `החליש` (630, SAAo lemma; P&W "sway"), *hurāpu* = `טלה`, *ikkillu* = `קול`, *summu* = `יונה`, *halālu* = `המה`, *ṣalālu* = `ישן` (`שכב` stays *itūlu*'s, 559), *huppu* = `גומה` (`חור` = *hurratu*), *patāhu* D / *pithu* = `דקר` / `דקירה`, *zinzaruʾu* = `זנגביל`, *dām-erēni* = `שרף ארז` (literal "cedar blood" in the apparatus), *naparšudu* = `מנוס`, *šalqu* = `בקוע` (as 547), *suppuhu* = `ניגר`, *laplaptu* = `צחיחות`, *hepû* N = `התפקע` (`שבר` = *šebēru*, `בקע` = *šalqu*), *parāmu* N = `נקרע`, *mašennu* = `נעל`, *puquttu* = `קוצים`, *pašālu* = `זחל` (imperative `זַחֲלוּ!`), *limmu* = `לִמּוּ` (transcribed; note), *šaknūni* = `מוּשֶׂמֶת` (670).
9. **Tayinat fills** (project Decision 5): 619 `כסרטן לאחור`, 636C `יִקְלוּ אתכם` (Nimrud *lu-* + three signs fits a D *luqallûkunu* of the same verb; so filled, unlike 466 in part 5), 657 `נעליכם`, 658 `בטנכם זַחֲלוּ!` (the Nimrud traces fit; Nimrud's verb *lipparmā* differs from Tayinat's *libtuqū*: Nimrud translated), 659 `יהפוך`, 662 `ישטפו`, 663 `אל ייפתחו`. Brackets without Tayinat: 612A–B (protasis), 619 `[בנותיכם]`, 633A `[בני אמו]`, 650 `[בנותיכם]`, 655 `[ב]`, 666 `[אשר]`, 669 `[של]`.
10. **`⟨ ⟩` for every SAAo `<…>` that supplies a word**: 615 `⟨תוך⟩`, `⟨של⟩`; 616A and 618A (whole lines); 622 `⟨תוך⟩`, `⟨כם⟩`; 623 `⟨ככה⟩`; 624 `⟨כם⟩`; 632 `⟨אדונכם⟩`; 634 `⟨ו⟩`; 637 `⟨כנ״ל:⟩`, `⟨האלה⟩`. None for 623 ŠA₃-<bi> (sign-level). **Exception, 669:** SAAo's `<GAL>` ("great") is **not** restored: both copies omit *rabiu* for Šamaš-šumu-ukīn, as does l. 86 (`בן־המלך של בית הירושה`), and P&W and Lauinger do not translate it; the colophon distinguishes the senior heir (667) from the junior (669).
11. **Vocalized here:** names at their first occurrence in the part (`אֵסַרְחַדּוֹן`, `אַשּׁוּר` 612A; the crown-prince formula 633; `לְבֵל` 626; `שַׁמַשׁ` 649; `אֶנְלִיל` 659; `נָבוּ` 660; `אִיָּר` 664; `נָבוּ־בֵּלוּ־אוּצוּר`, `דּוּר־שַׁרּוּכּוּ` 665; `שַׁמַשׁ־שׁוּם־אוּכִּין` 668; `בָּבֶל` 669) and ambiguous words: `יִשָּׁטְפוּ`, `בִּתֵּק`, `גִּלְגֵּל`, `יִקְלוּ`, `לָשׂוּם`, `הַמָּרָה מָרָה`, `זַחֲלוּ`, `יִמְחֶה`, `יְאַבֵּד`, `סְגַן`, `לִמּוּ`, `מוּשֶׂמֶת`.

### Open decisions for the user (part 7)
1. **628 *ugallilūni* = `גִּלְגֵּל (?)`** (literal; guidelines' rule for defects) or the sense `עִוֵּר` (P&W, Lauinger; Deut 28:28–29, 2 Kgs 25:7 would then appear in the translation).
2. **630 *lunnišūkunu*:** SAAo's lemma *enēšu* "weaken" (`יחלישו`, chosen) or P&W's "sway" (*nâšu*; `יניעו` / `יניד`), which would give the exact `כַּאֲשֶׁר יָנוּד הַקָּנֶה בַּמַּיִם` of 1 Kgs 14:15.
3. **636C:** fill the Nimrud gap from Tayinat (`{תיינת: יִקְלוּ אתכם}`, chosen) or leave `[…]` because the Nimrud verb begins *lu-* (D or Š) while Tayinat has G *li-*.
4. **669 `<GAL>`:** not restored (both copies omit "great"; chosen) or `⟨הגדול⟩` per the SAAo normalization.
5. **649–650 `רשת` / `מצודה` / `יפרוש`** (`מצודה` → `פח` by the 2026-10-23 harmonization)**:** kept although they reproduce Ezek 17:20 / 12:13 almost word for word; alternatives `מלכודת־ציפורים` / `מוקש` / `יטיל` would hide a real parallel.
6. **626 *arrārū* = `האוררים`** ("cursers", SAAo, P&W) – the coordinator's brief called them birds; *kappu* (627) can also be "wing". Who they are is unknown.
7. **665 *šakin māti* = `סְגַן ארץ`** (the Hebrew loan from *šaknu*; modern readers hear "deputy") or `מושל ארץ`; *limmu* transcribed `לִמּוּ` or `(שנת) הלִמּוּ`.
8. **664 the day number** in words (`יום שמונה־עשר`) or in figures / Hebrew letters (`יום י״ח`).

### Progress log (part 7)
- 2026-10-17: read the brief, the guidelines (§5–§7), the corpus and project files, the Decisions and Proposals of parts 1–6, and the `>` lines of parts 1–6 (634 lines, extracted by script with their normalizations; grepped for every formula, kin list and recurring verb of the part); printed about 110 comparison verses from `תנך-מנוקד` before quoting. Parsed and drafted 612A–670 (with T viii 7–71) unvocalized, then compared P&W and Lauinger. Disagreements recorded: P&W's "iron swords" (635–636, not in the text); P&W "sway" against SAAo's own lemma *enēšu* (630); P&W's 1988 restorations "[slaughter]" (636C) and "[Go around barefooted!]" (658) against Tayinat's "roast" and "crawl on your bellies"; P&W "so may you" at 647 and "so" at 642 (no *kî hannīe* in Nimrud); P&W "treaty tablet" at 618A (no *adê*); P&W "south / north" for *imittu / šumēlu*; P&W and Lauinger "blinded" for *galālu* D (628); P&W "is persistent" for *halālu* (637). Coordinator's notes checked against the data: §92 is a crab (*alluttu*), not a chameleon; §97 has *ṣalālu* "sleep", not *ṣillu* "shade"; §95's *arrārū* are "cursers" in SAAo.
- Review pass (a) fidelity: every word of each normalization checked against its `>` line (list printed with N under each line); brackets re-checked against the transliteration (Decisions 9–10); added words only in `( )`: 621 `(רעה)`, 645 `(על)`, 649 `(על)`, 664 `(חודש)`. Checked at this pass: 619's `[בנותיכם]` (editors' restoration, absent from Tayinat, so `[ ]` and not `{תיינת}`); 669 `<GAL>` (Decision 10); the subjects of 627–628 (Bēl, singular, with the plural reading in the apparatus).
- Review pass (b) consistency: renderings §1 formulas by `verify.py` (crown prince 633, 633A–B, 666–667 split; `אסרחדון, מלך אשור` ×5; `אם אתם` ×2; `אחיו, בני אמו`; KI.MIN ×3; `האלים, כל אשר נזכר שמם בלוח (האמנה) הזה` 616A/618A = 526/472); 612A = 555A (identical normalization, identical Hebrew); part 6 strings letter for letter: `אל תוך … באים/בא` (622 ~ 560), `[ככה] – את השבועה הזאת אל תוך …` (623 ~ 561), `יביאו` (625 = 562), `יעשו אתכם` (617 ~ 601), `לאחור` + `יריצו` (619–620 ~ 575), `יהפוך` (659 ~ 546), `בקוע/ה` (652, 656 ~ 547, 551), `טלה` (636C ~ 551), the kin lists (Decision 4); part 5: `חרב`, `מן הארץ … יְאַבֵּד` (661 ~ 436), `אל` + future for *lū lā* / *ay*; part 3: `תרפו` (634 ~ 348). Collisions with earlier parts found and listed for the coordinator (below): `קלה` (qamû / qalû), `קנה` (takkussu / qanû), `דלת` (bābu / daltu). `verify.py` (all parts): 0 problems; three REVIEW lines, all from parts 1–3 and justified (see below); none from part 7.
- Review pass (c) Hebrew: read aloud; rewrote 621 (`(רעה)` so that "fire" and "evil" are not read as one phrase), 635–636 (`תאכלנה אותו`, feminine for `חרבות`), 642 (`יתרוקן`, not `ירוק` "green"), 644 (`שרף ארז`, not `דם ארז`), 654 (`יתפקע`, after `ייקרע` collided with 658). Grep of the `>` lines for the reserved words of Decision 7 (none) and for `ברא`, `עבד`, `שבת`, `דמות`, `קרא`, `אדמה`, `עולם`, `חסר`, `מצוק`, `יבול`, `דגן`, `תועב`, `הסית`, `סור`, `גחון`, `עור`, `קצץ`, `חיק`, `לבב` (none; `נוח` 639 is the cognate; `אמנ` only in `אמנה`). **Translation echoes recorded so that they are not taken for evidence:** `ישליך` (651) / Deut 29:27 `וַיַּשְׁלִכֵם`; `יהפוך` (659) / Hag 2:22 (part 6's verb; the image is the source's); `מנוס` (650) / Amos 2:14; `שטף` (613, 615) / 1 Kgs 22:38 `וַיִּשְׁטֹף אֶת הָרֶכֶב` (the corpus verb for *rahāṣu*; the chariot-and-blood image is the source's); `לָשׂוּם` (645) / Ezek 30:21 (*šakānu* = `שׂם` is the corpus rule).
- `verify.py 7`: 0 problems. `check_bible_quotes.py` on the annotated file and this file: 0 mismatches (fixed on the way: Deut 4:9 `וְלִבְנֵי בָנֶיךָ`; Lam 5:5 ketiv/qere; references without the book name after a quotation, read as Genesis).

#### Whole-text consistency pass (`verify.py`, all seven parts)
`problems: 0`. Three REVIEW lines (identical normalization, different Hebrew), all from parts 1–3:
1. *ina muhhi Aššur-bani-apli mār šarri rabiu ša bēt rēdûti*: 43, 284 `על …` vs 137 `אל …` – **justified**: 137 is the goal of "bring (them) to" (*lā tubbalāninni*, 138), 43/284 "concerning".
2. *ša bēt rēdûti lā taqabbāni*: 280 `של בית הירושה לא תאמרו;` vs 82 `של בית הירושה, ולא תאמרו (לו).` – **justified**: different syntax (82 is the second of two verbs, "do not come … and do not tell him"; 280 ends "if you do not speak well of them before …").
3. *šumma Aššur-bani-apli mār šarri rabiu ša bēt rēdûti*: 188 `בית [הירושה]` vs 92, 101 – **justified**: brackets per copy (188 E₂—[UŠ-ti] is broken).

Cross-part points that verify.py does not see, **to be harmonized by the coordinator** (part 7 did not edit earlier parts):
- `קלה` renders *qamû* in part 6 (525 `יִקְלֶה`, 610 `יִקְלוּ`) and the real cognate *qalû* here (636C `יִקְלוּ`): two Akkadian verbs, one Hebrew. Proposal: keep `קלה` for *qalû* only and give *qamû* another verb (e.g. `יצרוב` / `יצרבו`, or `ישרוף` if `שרף` may be shared; part 6 open decision 3).
- `קנה` renders *takkussu* "tube" in part 6 (563) and the cognate *qanû* here (631). Proposal: *takkussu* = `צינור` / `אבוב`.
- `דלת` renders *bābu* in part 5 (448, Tayinat `את דלתה תנעל`) and the cognate *daltu* here (662–663). Proposal: *bābu* = `פתח` / `שער`.
- Esaggil: line 431 now reads `באֵסַגִּיל` (= the coordinator's `אסגיל`), but part 5's Decision 9 and Open decision 6 and its parallels-index row 431 (`באסגיל`) still have the old form: update the text of project.md.
- The apparatus of parts 1 and 4–6 writes the place name `תעינת` (as in `תל תעינת`) in many **תיינת** fields (e.g. "אין בתעינת"), beside the tag `תיינת`: harmless (not in `>` lines), but one prose spelling could be chosen.
- *libbu* "belly" (658 `בטן`) vs *libbu* "heart/inside" (641–642 `לב`): deliberate, noted.

### Parallels index (part 7)
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 612A–612B | *šumma attunu ina libbi adê annūti … tahaṭṭāni* | אם אתם באמנה הזאת … תחטאו | `אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | Renderings §1; the protasis restored in Nimrud, absent from Tayinat. |
| 612–615 | *kî ša mugirru annītu adi sassīša ina dāmē rahṣatūni* | כאשר המרכבה הזאת עד רצפתה בדמים שטופה | `וַיִּצֶק דַּם הַמַּכָּה אֶל חֵיק הָרָכֶב` (מלכים א כב:לה) | [equivalent] | The king's blood fills the floor of the chariot (`חֵיק הָרָכֶב` ≈ *sassu*). Our proposal. |
| 613, 615 | *rahṣu*, *lirrahṣā* | שטופה, ישטפו | `וַיִּשְׁטֹף אֶת הָרֶכֶב עַל בְּרֵכַת שֹׁמְרוֹן` (מלכים א כב:לח) | [equivalent] | The chariot washed of Ahab's blood; `שטף` is the corpus verb for *rahāṣu* (part 5), so the verbal identity is the translation's. Our proposal. |
| 613 | *ina dāmē rahṣatūni* | בדמים שטופה | `אַשְׁכִּיר חִצַּי מִדָּם` (דברים לב:מב) | [equivalent] | Weapons "drunk" with blood. |
| 614, 659 | *mugirrīkunu*; *kussâkunu lušabalkit* | מרכבותיכם; את כסאכם יהפוך | `וְהָפַכְתִּי כִּסֵּא מַמְלָכוֹת … וְהָפַכְתִּי מֶרְכָּבָה וְרֹכְבֶיהָ` (חגי ב:כב) | [equivalent] | Throne and chariot overturned in one verse; §90 and §104 of EST. `הפך` is part 6's verb for *nabalkutu* Š. Our proposal. |
| 616 | *kî pilaqqi lušaṣbirūkunu* | כפלך יסחררו אתכם | `וְאַל יִכָּרֵת מִבֵּית יוֹאָב זָב וּמְצֹרָע וּמַחֲזִיק בַּפֶּלֶךְ וְנֹפֵל בַּחֶרֶב וַחֲסַר לָחֶם` (שמואל ב ג:כט) | [cognate] | *pilaqqu* = `פֶּלֶךְ`; a curse list where "holding the spindle" (effeminacy) stands beside leprosy, sword and lack of bread, as in EST. From memory (the spindle curse; Hillers 1964). |
| 616 | same | same | `וְכַפֶּיהָ תָּמְכוּ פָלֶךְ` (משלי לא:יט) | [cognate] | The spindle as the woman's tool. |
| 617 | *kî issi ina pān nakrikunu lēpašūkunu* | כאשה לפני אויבכם יעשו אתכם | `הִנֵּה עַמֵּךְ נָשִׁים בְּקִרְבֵּךְ לְאֹיְבַיִךְ` (נחום ג:יג) | [equivalent] | Said of Nineveh itself; "to your enemies" ≈ *ina pān nakrikunu*. From memory (Hillers 1964). |
| 617 | same | same | `וְהָיוּ לְנָשִׁים` (ירמיהו נ:לז) | [equivalent] | Babylon's warriors. |
| 617 | same | same | `נָשְׁתָה גְבוּרָתָם הָיוּ לְנָשִׁים` (ירמיהו נא:ל) | [equivalent] | |
| 617 | same | same | `בַּיּוֹם הַהוּא יִהְיֶה מִצְרַיִם כַּנָּשִׁים` (ישעיהו יט:טז) | [equivalent] | |
| 619–620 | *kî allutti ana qinniš lušadīlūkunu* | כסרטן לאחור יריצו אתכם | `יִסֹּגוּ אָחוֹר וְיַחְפְּרוּ חֹשְׁבֵי רָעָתִי` (תהלים לה:ד) | [equivalent] | "Backwards" as a curse on enemies (also Ps 40:15). Tayinat only for *kî allutti ana qinniš*. Our proposal. |
| 619 | same | same | `וַיִּהְיוּ לְאָחוֹר וְלֹא לְפָנִים` (ירמיהו ז:כד) | [equivalent] | Of those who did not listen. Our proposal. |
| 621 | *kî išāti … lušalbūkunu* | כאש … יקיפו אתכם | `וַיִּבְעַר בְּיַעֲקֹב כְּאֵשׁ לֶהָבָה אָכְלָה סָבִיב` (איכה ב:ג) | [equivalent] | Evil surrounding like fire. Our proposal. |
| 622–625 | *kî ša šamnī ina libbi šīrīkunu errabūni kî hannīe tamītu annītu … lušēribū* | כאשר שמן אל תוך בשרכם בא, ככה את השבועה הזאת אל תוך בשרכם … יביאו | `וַיִּלְבַּשׁ קְלָלָה כְּמַדּוֹ וַתָּבֹא כַמַּיִם בְּקִרְבּוֹ וְכַשֶּׁמֶן בְּעַצְמוֹתָיו` (תהלים קט:יח) | [equivalent] | The curse "comes" (*erēbu* = `בוא`) into the body **like oil**: the same simile and the same verb. From memory (Weinfeld 1972). |
| 622–625 | same | same | `וַיֶּאֱהַב קְלָלָה וַתְּבוֹאֵהוּ` (תהלים קט:יז) | [equivalent] | The curse "came into him". |
| 622–625 | same | same | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ` (במדבר ה:כב) | [equivalent] | The oath-curse entering the body (cf. 560–562, part 6). From memory. |
| 623 | *tamītu annītu ina libbi šīrīkunu* | את השבועה הזאת אל תוך בשרכם | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse settling inside the perjurer, in the oath chapter. |
| 626 | *arrārī* | האוררים | `יִקְּבֻהוּ אֹרְרֵי יוֹם` (איוב ג:ח) | [cognate] | *arrāru* "curser" from *arāru*; professional cursers in a mythic frame. Our proposal. |
| 627 | *kappī ša ahīšunu šēpēšunu ubattiqūni* | ואת כפות זרועותיהם, את רגליהם בִּתֵּק | `וּבִתְּקוּךְ בְּחַרְבוֹתָם` (יחזקאל טז:מ) | [cognate] | *batāqu* = `בתק` (an Ezekiel hapax), in the punishment of the covenant-breaker. Our proposal. |
| 627 | same | same | `וַיְקַצְּצוּ אֶת יְדֵיהֶם וְאֶת רַגְלֵיהֶם` (שמואל ב ד:יב) | [equivalent] | Hands and feet cut off (also Judg 1:6). `קצץ` kept out. |
| 627 | same | same | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] | The only cutting off of the palm (*kappu* = `כף`) in Deuteronomy. Our proposal. |
| 628 | *īnīšunu ugallilūni* | ואת עיניהם גִּלְגֵּל (?) | `וְאֶת עֵינֵי צִדְקִיָּהוּ עִוֵּר` (מלכים ב כה:ז) | [equivalent] | Only on the sense "blind" (P&W, lemma); the punishment of the vassal who broke his oath. `עִוֵּר` kept out (open decision 1). |
| 628 | same | same | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן` (דברים כח:כח) | [equivalent] | Same caveat. |
| 629 | *ligmarūkunu* | יגמרו אתכם | `יִגְמָר נָא רַע רְשָׁעִים` (תהלים ז:י) | [cognate] | *gamāru* = `גמר`. |
| 630–631 | *kî appāri ina mê lunnišūkunu kî qanê ina riksi nakarkunu lušallipkunu* | כאגמון במים יחלישו אתכם; כקנים מן האגודה אויבכם ישלוף אתכם | `וְהִכָּה יְהוָה אֶת יִשְׂרָאֵל כַּאֲשֶׁר יָנוּד הַקָּנֶה בַּמַּיִם וְנָתַשׁ אֶת יִשְׂרָאֵל מֵעַל הָאֲדָמָה הַטּוֹבָה הַזֹּאת` (מלכים א יד:טו) | [equivalent] | The reed in water, then the uprooting, in the same order; `יָנוּד` matches only P&W's reading "sway" (SAAo: "weaken"; open decision 2). *qanû* = `קָנֶה` [cognate]. Our proposal. |
| 630 | *kî appāri* | כאגמון | `הֲלָכֹף כְּאַגְמֹן רֹאשׁוֹ` (ישעיהו נח:ה) | [equivalent] | The rush as the bent and weak. |
| 631 | *lušallipkunu* | ישלוף אתכם | `שָׁלַף אִישׁ נַעֲלוֹ` (רות ד:ז) | [cognate] | *šalāpu* = `שלף`. |
| 632–634 | *šumma attunu Aššur-ahu-iddina … turammâni* | אם אתם את אסרחדון … תרפו | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | *ramû* D = `הִרְפָּה` (not *râmu* "love"); in Deuteronomy the god does not let Israel go, in EST the swearers may not let the king go. From memory. |
| 634 | same | same | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ח) | [equivalent] | |
| 634 | same | same | `לֹא יַרְפְּךָ וְלֹא יַשְׁחִיתֶךָ` (דברים ד:לא) | [equivalent] | |
| 634 | same | same | `לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ` (יהושע א:ה) | [equivalent] | |
| 634 | *ana imitti u šumēli tallakāni* | לימין ולשמאל תלכו | `לֹא תָסֻרוּ יָמִין וּשְׂמֹאל` (דברים ה:כח) | [equivalent] | *šumēlu* = `שמאל` [cognate]; Deuteronomy's verb `סור` (deviation from the law) vs EST's *alāku* (leaving the king). Repository numbering (= 5:29). From memory (Weinfeld; Levinson). |
| 634 | same | same | `לֹא תָסוּר מִן הַדָּבָר אֲשֶׁר יַגִּידוּ לְךָ יָמִין וּשְׂמֹאל` (דברים יז:יא) | [equivalent] | |
| 634 | same | same | `וּלְבִלְתִּי סוּר מִן הַמִּצְוָה יָמִין וּשְׂמֹאול` (דברים יז:כ) | [equivalent] | Said of the king. |
| 634 | same | same | `וְלֹא תָסוּר מִכָּל הַדְּבָרִים אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם יָמִין וּשְׂמֹאול` (דברים כח:יד) | [equivalent] | The verse just before Deuteronomy's curses (28:15–68). |
| 634 | same | same | `אַל תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול` (יהושע א:ז) | [equivalent] | |
| 635–636 | *ša ana imitti illakūni patrī lēkulāšu* | אשר לימין הולך – חרבות תאכלנה אותו | `וְחַרְבִּי תֹּאכַל בָּשָׂר` (דברים לב:מב) | [cognate] | *akālu* = `אכל`; *patru* = `חרב` [equivalent]. P&W's "iron" is not in the text. |
| 635–636 | same | same | `הֲלָנֶצַח תֹּאכַל חֶרֶב` (שמואל ב ב:כו) | [equivalent] | In the same story `נְטֵה לְךָ עַל יְמִינְךָ אוֹ עַל שְׂמֹאלֶךָ` (2:21) and `וְלֹא נָטָה לָלֶכֶת עַל הַיָּמִין וְעַל הַשְּׂמֹאול` (2:19): right and left and the devouring sword together. Our proposal. |
| 635 | same | same | `וְאִם תְּמָאֲנוּ וּמְרִיתֶם חֶרֶב תְּאֻכְּלוּ` (ישעיהו א:כ) | [equivalent] | A condition followed by the devouring sword. |
| 636C | *kî hurāpi gadê liqilūkunu* (Tayinat) | כטלה וגדי יִקְלוּ אתכם | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [cognate] | *qalû* = `קלה`; a king of Babylon roasting rebels, whose name becomes a curse (`וְלֻקַּח מֵהֶם קְלָלָה`). Tayinat only. Our proposal. |
| 636C | same | same | `אָבִיב קָלוּי בָּאֵשׁ` (ויקרא ב:יד) | [cognate] | The verb of roasting. |
| 636C | P&W's restoration "[slaughter]" | — | `וַאֲנִי כְּכֶבֶשׂ אַלּוּף יוּבַל לִטְבוֹחַ` (ירמיהו יא:יט) | [equivalent] | Only on P&W's 1988 restoration (Tayinat has "roast"). Also Isa 53:7. |
| 637 | *kî ša killu ša suʾʾī annūte ihallulūni* | כאשר קול היונים האלה הומה | `כְּיוֹנֵי הַגֵּאָיוֹת כֻּלָּם הֹמוֹת` (יחזקאל ז:טז) | [equivalent] | The dove's moan as mourning (also Isa 38:14; 59:11; Nah 2:8). Our proposal. |
| 639 | *lā tanūhā lā taṣallalā* | לא תנוחו, לא תישנו | `וּבַגּוֹיִם הָהֵם לֹא תַרְגִּיעַ וְלֹא יִהְיֶה מָנוֹחַ לְכַף רַגְלֶךָ` (דברים כח:סה) | [cognate] | *nâhu* = `נוח`. From memory (Weinfeld). |
| 639 | same | same | `הִיא יָשְׁבָה בַגּוֹיִם לֹא מָצְאָה מָנוֹחַ` (איכה א:ג) | [cognate] | |
| 640 | *eṣmātekunu ana ahēʾiš lū lā iqarribā* | עצמותיכם זו אל זו אל יקרבו | `וַתִּקְרְבוּ עֲצָמוֹת עֶצֶם אֶל עַצְמוֹ` (יחזקאל לז:ז) | [divergence] | Bones + *qerēbu* (`קרב`) + "to one another": the same phrase, reversed (Ezekiel's bones come together to life; EST's never). Our proposal. |
| 641–642 | *libbu ša huppi rāqūni … libbikunu lirīqū* | לב הגומה ריק … לבכם יתרוקן | `וְהֵקִיץ וְרֵיקָה נַפְשׁוֹ` (ישעיהו כט:ח) | [equivalent] | *rīqu* = `ריק` [cognate]. |
| 643–645 | *dišpu šamnī zinzaruʾu dām-erēni ana šakān pithikunu lihliq* | דבש, שמן, זנגביל, שרף ארז לָשׂוּם (על) דקירתכם יאבד | `הַצֳרִי אֵין בְּגִלְעָד אִם רֹפֵא אֵין שָׁם` (ירמיהו ח:כב) | [equivalent] | The healing resin that is not there (also 46:11; 51:8). From memory. |
| 644–645 | same | same | `פֶּצַע וְחַבּוּרָה וּמַכָּה טְרִיָּה לֹא זֹרוּ וְלֹא חֻבָּשׁוּ וְלֹא רֻכְּכָה בַּשָּׁמֶן` (ישעיהו א:ו) | [equivalent] | The wound not softened with oil (*šamnu* = `שמן` [cognate]). |
| 645 | *ana šakān pithikunu* | לָשׂוּם (על) דקירתכם | `וְהִנֵּה לֹא חֻבְּשָׁה לָתֵת רְפֻאוֹת לָשׂוּם חִתּוּל לְחָבְשָׁהּ` (יחזקאל ל:כא) | [equivalent] | `לָשׂוּם` on the wound in both (*šakānu* = `שׂם`); the broken arm will not hold the sword. Our proposal. |
| 645 | same | same | `אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:כז) | [equivalent] | The wound without remedy. |
| 643 | *kî nakarkunu upattahūkanūni* | כאשר אויבכם ידקור אתכם | `אֵת אֲשֶׁר דָּקָרוּ` (זכריה יב:י) | [equivalent] | |
| 646–648 | *kî ša martu marratūni … ina muhhi ahēʾiš lū marrākunu* | כאשר הַמָּרָה מָרָה … זה על זה מרים תהיו | `פֶּן יֵשׁ בָּכֶם שֹׁרֶשׁ פֹּרֶה רֹאשׁ וְלַעֲנָה` (דברים כט:יז) | [equivalent] | Gall and wormwood for the man who breaks the oath, in the oath chapter, two verses before `וְרָבְצָה בּוֹ כָּל הָאָלָה` (29:19). Our proposal. |
| 646 | same | same | `עֲנָבֵמוֹ עִנְּבֵי רוֹשׁ אַשְׁכְּלֹת מְרֹרֹת לָמוֹ` (דברים לב:לב) | [cognate] | *marāru* = `מרר`. |
| 646 | same | same | `וּבְיַד הַכֹּהֵן יִהְיוּ מֵי הַמָּרִים הַמְאָרְרִים` (במדבר ה:יח) | [equivalent] | The "bitter, cursing water" of the oath ordeal: `מר` + `ארר`. Our proposal. |
| 646 | *martu* | הַמָּרָה | `יִשְׁפֹּךְ לָאָרֶץ מְרֵרָתִי` (איוב טז:יג) | [cognate] | *martu* "gall" = biblical `מְרֵרָה`, modern `מָרָה`. |
| 647–648 | *attunu issātikunu mārīkunu mārātikunu ina muhhi ahēʾiš lū marrākunu* | אתם, נשותיכם, בניכם, בנותיכם זה על זה מרים תהיו | `תֵּרַע עֵינוֹ בְאָחִיו וּבְאֵשֶׁת חֵיקוֹ וּבְיֶתֶר בָּנָיו אֲשֶׁר יוֹתִיר` (דברים כח:נד) | [equivalent] | Family members turned against each other in the curse. Our proposal. |
| 647 | same | same | `אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ` (מיכה ז:ו) | [equivalent] | |
| 648 | same | same | `הֲלוֹא יָדַעְתָּה כִּי מָרָה תִהְיֶה בָּאַחֲרוֹנָה` (שמואל ב ב:כו) | [equivalent] | Brothers made bitter to each other, in the verse of the devouring sword (635). Our proposal. |
| 649–650 | *Šamaš huhāru ša siparri ina muhhikunu … lishūpu ina gišparri* | שַׁמַשׁ רשת של ארד עליכם … יפרוש; בפח | `וּפָרַשְׂתִּי עָלָיו רִשְׁתִּי וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יז:כ) | [equivalent] | The god's net over **the vassal who broke his oath** (`אָלָתִי אֲשֶׁר בָּזָה`, 17:19). `רשת`, `פרש` are the natural Hebrew and were kept knowingly (Decision 7); *gišparru* is `פח` since the 2026-10-23 harmonization (Ezekiel's `מצודה`: [equivalent]). From memory (Tsevat 1959). |
| 649–650 | same | same | `וּפָרַשְׂתִּי אֶת רִשְׁתִּי עָלָיו וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יב:יג) | [equivalent] | Zedekiah. |
| 649 | *huhāru* (bird-snare) | רשת | `אֶפְרוֹשׂ עֲלֵיהֶם רִשְׁתִּי כְּעוֹף הַשָּׁמַיִם אוֹרִידֵם` (הושע ז:יב) | [equivalent] | A bird-net over people, as *huhāru*. |
| 649 | same | same | `יַמְטֵר עַל רְשָׁעִים פַּחִים` (תהלים יא:ו) | [equivalent] | Snares from the god over the wicked. |
| 649–651 | same | same | `כִּי שֻׁלַּח בְּרֶשֶׁת בְּרַגְלָיו` (איוב יח:ח) | [equivalent] | The wicked caught in net and snare (18:8–10). |
| 650 | *ina gišparri ša lā naparšudi* | בפח שאין ממנו מנוס | `כַּדָּגִים שֶׁנֶּאֱחָזִים בִּמְצוֹדָה רָעָה וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב) | [equivalent] | |
| 650 | *lā naparšudi* | שאין ממנה מנוס | `וְאָבַד מָנוֹס מִקָּל` (עמוס ב:יד) | [equivalent] | `מנוס` is the translation's noun. |
| 651 | *ay ušēṣi napšatkun* | את נפשכם אל יוציא | `כִּי הוּא יוֹצִיא מֵרֶשֶׁת רַגְלָי` (תהלים כה:טו) | [divergence] | The reverse: the god brings the foot out of the net (also Ps 31:5; 142:8). Our proposal. |
| 651 | *liddikunu* | ישליך אתכם | `וַיַּשְׁלִכֵם אֶל אֶרֶץ אַחֶרֶת` (דברים כט:כז) | [equivalent] | Translation echo only (`השליך` = *nadû*); recorded so that it is not taken for evidence. |
| 652 | *kî ša nādu šalqatūni* | כאשר הנאד בקוע | `וְנֹאדוֹת יַיִן בָּלִים וּמְבֻקָּעִים וּמְצֹרָרִים` (יהושע ט:ד) | [cognate] | *nādu* = `נֹאד`; split skins and worn sandals (656) in the Gibeonites' treaty story. Our proposal. |
| 652, 654 | same | same | `וְאֵלֶּה נֹאדוֹת הַיַּיִן אֲשֶׁר מִלֵּאנוּ חֲדָשִׁים וְהִנֵּה הִתְבַּקָּעוּ` (יהושע ט:יג) | [cognate] | |
| 653 | *ina kaqqar ṣumāmīt laplaptu* | בקרקע צמאון וצחיחות | `וְצִמָּאוֹן אֲשֶׁר אֵין מָיִם` (דברים ח:טו) | [cognate] | *ṣumāmītu* (from *ṣamû*) = `צִמָּאוֹן`; the thirsty land of the desert, where the god gave water. Our proposal. |
| 653 | same | same | `לְמַעַן סְפוֹת הָרָוָה אֶת הַצְּמֵאָה` (דברים כט:יח) | [equivalent] | Thirst in the oath chapter (in another sense). |
| 655 | *ina ṣūm mê mūtā* | [ב]צמא מים מותו! | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [cognate] | *ṣūmu* = `צמא`. From memory. |
| 655 | same | same | `תִּבְאַשׁ דְּגָתָם מֵאֵין מַיִם וְתָמֹת בַּצָּמָא` (ישעיהו נ:ב) | [cognate] | "Die of thirst" (also Judg 15:18). |
| 656–657 | *kî ša mašennu šalqatūni … mašennīkunu* | כאשר הנעל בקועה … נעליכם | `וְנַעַלְךָ לֹא בָלְתָה מֵעַל רַגְלֶךָ` (דברים כט:ד) | [divergence] | The reverse, in the oath chapter: in the desert the sandal did not wear out. Our proposal. |
| 656 | same | same | `וּנְעָלוֹת בָּלוֹת וּמְטֻלָּאוֹת בְּרַגְלֵיהֶם` (יהושע ט:ה) | [equivalent] | The Gibeonites (also 9:13). |
| 657–658 | *ina kaqqar puqutti … ina muhhi libbikunu pišlā* (Tayinat) | בקרקע קוצים … על בטנכם זַחֲלוּ! | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | [equivalent] | The serpent's curse: crawling on the belly; `גָּחוֹן` kept out. Tayinat only (P&W 1988 restored "[Go around barefooted!]"). Our proposal. |
| 657 | *puquttu* | קוצים | `וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ` (בראשית ג:יח) | [equivalent] | Thorns beside the belly-crawling (Gen 3:14, 18). Our proposal. |
| 659 | *Enlil bēl kussî kussâkunu lušabalkit* | אנליל, אדון הכסא, את כסאכם יהפוך | `לֹא יִכָּרֵת לְךָ אִישׁ מֵעַל כִּסֵּא יִשְׂרָאֵל` (מלכים א ב:ד) | [divergence] | The conditional promise about the throne (`אִם יִשְׁמְרוּ`), the reverse of the curse. Our proposal. |
| 660 | *Nabu nāši ṭuppi šīmāti ilāni* | נבו, נושא לוח הגורלות של האלים | `מְחֵנִי נָא מִסִּפְרְךָ אֲשֶׁר כָּתָבְתָּ` (שמות לב:לב) | [equivalent] | The divine tablet/book from which the sinner's name is erased (also 32:33; Ps 69:29). From memory (Paul 1973). |
| 661 | *šumkunu lipšīṭi* | את שמכם יִמְחֶה | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | *pašāṭu* = `מחה` (corpus §2; first use in EST); in the oath chapter, right after `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה`. From memory (Weinfeld 1972). |
| 661 | same | same | `וְאֶמְחֶה אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ט:יד) | [equivalent] | |
| 661 | same | same | `תִּמְחֶה אֶת זֵכֶר עֲמָלֵק מִתַּחַת הַשָּׁמָיִם` (דברים כה:יט) | [equivalent] | |
| 661 | same | same | `בְּדוֹר אַחֵר יִמַּח שְׁמָם` (תהלים קט:יג) | [equivalent] | In the psalm of the oil-like curse (109:18 ↔ 622–625). Our proposal (the link of the two lines). |
| 661 | *zērkunu ina māti luhalliq* | את זרעכם מן הארץ יְאַבֵּד | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | Seed + from the land + `אבד` (*halāqu* D), the whole phrase. Our proposal. |
| 661 | same | same | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | Corpus §2. |
| 662–663 | *dalta ina īnīkunu lušarhiṣū dalātekunu lū lā ippattiā* (Tayinat) | דלת לעיניכם ישטפו; דלתותיכם אל ייפתחו | `לִפְתֹּחַ לְפָנָיו דְּלָתַיִם וּשְׁעָרִים לֹא יִסָּגֵרוּ` (ישעיהו מה:א) | [divergence] | Cyrus's blessing, the exact reverse (doors opened, never shut). *daltu* = `דֶּלֶת`, *petû* = `פתח` [cognate]. Tayinat only for the verbs. Our proposal. |
| 663 | same | same | `פָּתוֹחַ נִפְתְּחוּ שַׁעֲרֵי אַרְצֵךְ` (נחום ג:יג) | [divergence] | Nineveh's gates open to the enemy. Our proposal. |
| 664 | *Ayaru* | אִיָּר | `בְּחֹדֶשׁ זִו הוּא הַחֹדֶשׁ הַשֵּׁנִי` (מלכים א ו:א) | [cognate] | `אִיָּר` (post-biblical) is the Babylonian month name; the Bible's second month is `זִו`. |
| 665 | *šakin māt Dur-Šarrukku* | סְגַן ארץ דור־שרוכו | `וְנִפַּצְתִּי בְךָ פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Hebrew `סָגָן` is a loan from *šaknu*; Assyrian and Babylonian officials (also Ezek 23:6; Jer 51:28). |
| 666–670 | *adê ša Aššur-ahu-iddina … ša ina muhhi Aššur-bani-apli … u ina muhhi Šamaš-šumu-ukin … šaknūni* | האמנה של אסרחדון … אשר על אשור־בני־אפלי … ועל שמש־שום־אוכין … מושׂמת | `וַיִּמְלֹךְ אֵסַר חַדֹּן בְּנוֹ תַּחְתָּיו` (מלכים ב יט:לז) | [equivalent] | Esarhaddon's own succession after Sennacherib's murder: the background of a treaty that fixes the succession in advance. |
| 666 | same | same | `מִימֵי אֵסַר חַדֹּן מֶלֶךְ אַשּׁוּר` (עזרא ד:ב) | [equivalent] | The biblical form of the name. |

### Proposals for the renderings (plain strings as they appear in the `>` lines)
- **Protasis with the sons:** `[אם אתם באמנה] הזאת של אסרחדון, מלך אשור,` | `[ובני]ו, בני בניו – [תח]טאו –` (612A–B).
- **The *ramû* oath (§96):** `אם אתם את X … תרפו` (objects with `את`, verb at the end of the list); *ana imitti u šumēli alāku* = `לימין ולשמאל הלך`; *patrī lēkulāšu* = `חרבות תאכלנה אותו`.
- **Corpus renderings §2 additions proposed:** *pašāṭu* = `מָחָה` confirmed at its first use (661 `את שמכם יִמְחֶה`); *ramû* D with a fronted object = `את … תרפו` (Deut 31:6 `לֹא יַרְפְּךָ`); *halāqu* D + *ina māti* = `מן הארץ יְאַבֵּד` / `תְּאַבֵּד`.
- **Corpus renderings §4 additions proposed:** *pilaqqu* = `פֶּלֶךְ` [cognate] (2 Sam 3:29); *kî issi … epēšu* = `כאשה … עשה`; *huhāru* = `רֶשֶׁת`, *gišparru* = `מְצוּדָה` (2026-10-23 harmonization: `פַּח`, like *tubāqu*), *tubāqu* = `פַּח`, *kippu* = `מַלְכֹּדֶת` (the four trap words, so that later texts keep them apart); *nādu* = `נֹאד` [cognate]; *mašennu* = `נַעַל`; *martu* = `מָרָה` [cognate], *marru* = `מַר`; *dām-erēni* = `שְׂרַף אֶרֶז`; *qalû* = `קָלָה` [cognate] (and *qamû* another verb); *batāqu* = `בִּתֵּק` [cognate] (Ezek 16:40); *arrāru* = `אוֹרֵר` [cognate] (Job 3:8); *šaknu* = `סְגַן` [cognate, loan]; *limmu* = `לִמּוּ`; *daltu* = `דֶּלֶת` [cognate] (and *bābu* = `פֶּתַח` / `שַׁעַר`); *qanû* = `קָנֶה` [cognate] (and *takkussu* = `צִנּוֹר`); *ṣumāmītu* = `צִמָּאוֹן` [cognate]; *ṣūmu* = `צָמָא`.
- **Colophon:** *adê ša … ša ina muhhi X … u ina muhhi Y … šaknūni* = `האמנה של … אשר על X … ועל Y … מוּשֶׂמֶת`; *mār šarri (rabiu) ša bēt rēdûti ša Mat-Aššur / ša Babili* = `בן־המלך (הגדול) של בית הירושה של אשור / של בבל`; date `(חודש) אִיָּר, יום …`; *limmu PN šakin māt GN* = `לִמּוּ PN, סְגַן ארץ GN`.

### Lessons for the guidelines (part 7)
- **A treaty can return to the oath form inside its curse list** (§96): read every *šumma* in the curse section as a new stipulation, keep `אם אתם …`, and check whether the fixed formulas (crown prince, brothers, other sons) can stay letter for letter when the objects are fronted (`את` once, before the list).
- **Do not restore what both copies omit when the omission makes sense** (669 `<GAL>`): a parallel copy and an earlier line of the same text (86) can show that an "omission" is a distinction.
- **When a Tayinat verb fills a Nimrud gap, check the surviving Nimrud signs against the stem, not only the lemma:** *lu-* (Nimrud) vs *li-* (Tayinat) is the regular spelling difference for D/Š precatives in this text (631, 661), so 636C could be filled; a different verb with compatible traces (658 *lipparmā* / *libtuqū*) is translated from Nimrud and only the lost words come from Tayinat.
- **A 1988 restoration of a curse's final imperative can be wrong in kind, not only in word** (658 "[Go around barefooted!]" vs Tayinat "crawl on your bellies!"): the parallel (Gen 3:14) appears only on Tayinat's text, so say so in the index.
- **Track two Akkadian verbs that meet in one Hebrew word across parts** (`קלה` for *qamû* and *qalû*; `קנה`, `דלת`): a cognate that appears late in a long text may have been "used up" by an earlier translator for a non-cognate; the later part should flag it rather than give up the cognate.
- **The edition's lemma and its translation can disagree in the key verb of a parallel** (630 *enēšu* "weaken" vs P&W "sway" ↔ 1 Kgs 14:15 `יָנוּד`): record both, translate the lemma, and say in the index row on which reading the parallel rests.

## Coordinator harmonization (after part 7, 2026-10-17)
- *qamû* (525, 610): `קלה` → **`להט`** (`יְלַהֵט`, `יְלַהֲטוּ`), so that `קלה` belongs to its cognate *qalû* (636C). Jer 29:22 stays an [equivalent] row.
- *takkussu* (563): `קנה` → **`צינור`**, so that `קנה` belongs to *qanû* (631).
- *bābu* (448): `דלת` → **`פתח`**, so that `דלת` belongs to *daltu* (662–663).
- Esaggil: **`אסגיל`** everywhere (creation-corpus form), including Part 5's index row and notes.
- Nusku: **`נוסכו`** (creation-corpus form); corpus renderings corrected.
- *ḫalāqu* G of persons "flee" = `נמלט` and *gimilla turru* = `השיב גמול` added to the corpus renderings.
- The REVIEW lines of `verify.py` (43/284 vs 137; 82 vs 280; 188 vs 92/101) were checked and are justified (syntax, brackets).

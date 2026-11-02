# Project: the short Ugaritic myths and charms (KTU 1.23, 1.24, 1.114, 1.100, 1.107, 1.108, 1.82, 1.83)

Round 4, run 1. Coordinator: the run's session; translators as sub-agents, **one at a time** (guidelines §5.1), each with
`../translator-brief--ugaritic.md`.

## Scope

Eight short tablets as CUC (KTU³) gives them, 377 lines: KTU 1.23 "The Gracious Gods" / Šaḥar and Šalim (76), 1.24
Nikkal and Yarikh (50), 1.114 El's *marzeaḥ* (31), 1.100 the mare and the serpent (79), 1.107 a serpent charm (54),
1.108 Rapiʾu, king of eternity (27), 1.82 a charm against the serpent and the *tnn* (43), 1.83 the *tnn* bound (17). The
other short texts of the world survey's list (1.96, 1.169, 1.161, 1.119, 1.124) are not in this run's plan (candidates
for "Ugarit III").

## Base text and versions

As the Baal Cycle (`../1-מחזור-בעל/project.md`): CUC v0.2.8; CUC's machine parses (no reviewed parse for these
tablets); DULAT through CUC's lexicon. Rank 3: Pardee's editions (RSO IV 1988; *COS* I), del Olmo Lete 2014 (©, not
online): recalled, never quoted. Cassuto 1951 does not have these texts.

## Line numbering

KTU's (= CUC's): one-column tablets, `### <line>` (`### 62`); obverse and reverse are numbered continuously.

## Files

As the Baal Cycle: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated `translation-<KEY>.rtl.md`
and `translation.rtl.md` (`python3 -I -B ../ugarit_tools.py build`), one section per tablet below.

## Decisions (coordinator, before the first line)

- The corpus renderings bind; the Baal Cycle's Hebrew binds every shared formula and epithet (the short texts are drafted
  after it).
- KTU 1.23:14 is the famous "kid in its mother's milk" line (↔ Ex 23:19, 34:26): the reading is rejected (*gd* is
  "coriander", Ratner & Zuckerman 1986; CUC glosses it so); the line is translated as the text has it, and the apparatus
  tells the history.

## Progress log (coordinator)

- 2026-10-23: renderings and brief fixed (see the Baal Cycle's log).

## KTU 1.23

Translator 3 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.23.rtl.md`, `translation--intro-1.23.rtl.md`,
generated `translation-1.23.rtl.md` (and `translation.rtl.md`).

### Scope

All 76 CUC lines, translated one Hebrew line per line. Damaged: 2–5, 17–29, 71–76. Content: an invocation of the
"gracious gods" and a banquet invitation, greetings to king, queen and temple staff (1–7); Mot-and-Šar with the staffs of
bereavement and widowhood, "pruned" and bound like a vine (8–11); ritual rubrics – repetition counts, the "field of the
gods, the field of Athirat and Raḥmay", what is cooked on the fire (12–29); El at the shore of the sea and the deep, the
two women, the bird roasted on the coals, the test "husband" / "father", the kiss and conception, the birth of Šaḥar and
Šalim and then of the ravenous "gracious gods" with one lip to earth and one to heaven (30–64); their seven years in the
"holy desert" and their meeting with the guard of the sown land (65–76).

### Sources consulted

- CUC v0.2.8 (`data`, `pars`, `lex`, `dulat`; machine parses only, every *l*, *k*, *hm*, *d* decided).
- The Baal Cycle's annotated files for every shared word and formula; renderings §9's gate lines for 62–63.
- Pardee (RSO IV, COS I), Smith 2006, del Olmo Lete – recalled only, never quoted. Cassuto 1951 does not have the text.
- Every Bible verse printed before quoting (≈30).

### Decisions

- **Line 14, "the kid in its mother's milk"** – translated as the tablet has it: `על האש שבע פעמים, הגיבורים {…}: טוב
  גַּד בחלב, *נענע* בחמאה!`. The apparatus tells the history (Virolleaud's *ṭbḫ gd* "cook a kid"; the tablet's *ṭb gd*,
  the scribe's erased *ṭbg*; *gd* coriander `גַּד`, Exod 16:31, parallel to *annḫ* "mint"; no "mother"; Ratner & Zuckerman
  1986) and tags Exod 23:19 / 34:26 / Deut 14:21 [absent]; a footnote says it in one sentence.
- **Rubrics** (7, 12, 14–15, 18–22, 26–27, 54, 57) translated as instructions: `שבע פעמים ייאמר …`, `על האש שבע פעמים …`.
- **Names** (§1.1): `שַׁחַר וְשָׁלֵם` (Isa 14:12 `הֵילֵל בֶּן שָׁחַר` printed and tagged; Gen 14:18 `מֶלֶךְ שָׁלֵם` noted as
  debated), `מוֹת־וָשַׂר`, `רַחְמַי` ("womb", Anat?), `אֲתִירַת`, `שַׁפְּשׁ`; *ilm nʿmm* `הָאֵלִים הַנְּעִימִים` (§4.3);
  *agzrym* `*רַעַבְתָנִים*`; *bn ym* `בני יום` (DULAT).
- **Shared with the Baal Cycle:** *špt l arṣ špt l šmm* `שפה לארץ, שפה לשמים` (1.5 II:2); *ʿrb* `נִכְנַס`; *ʿṣr*
  `צִפּוֹר`; *dg* `דָּג`; *lḥm* (vb) `סָעַד`; *ḫṭ* `שַׁרְבִיט`; *mṭ* `מַטֶּה`; *nḥt* D `הִנְחִית`; *ṣmd* (vb) `צָמַד`; *šql*
  `הִפִּיל`; *ʿdb* `תִּקֵּן`; *ṣd* `צָד`; *ngš* `נִגַּשׁ`; *nġr* `נָצַר` ("the guard of the sown land" `נוצר המזרע`); *ḥrr*
  `נִחַר`; *hl* `הֵן`, *hn* `הִנֵּה`; *ʾrk*, *um*, *yld*, *ynq*, *ptḥ*, *prṣ* by their cognates.
- **New one-lemma renderings** (each grepped first): *ḫmr* `חֶמֶר` (Deut 32:14); *ṯkl* `שְׁכוֹל`, *ulmn* `אַלְמוֹן` (Isa 47:9);
  *zbr* `זָמַר` (Lev 25:3); *gd* `גַּד`; *annḫ* `*נענע*`; *ḫmat* `חֶמְאָה`; *agn* `אַגָּן` (Exod 24:6); *dġṯt* `*קטורת*`; *yr*
  `יוֹרֶה` (Deut 11:14); *ṯn* (III) `שָׁנִי`; *dlt* `דָּלִית` (Jer 11:16); *ġnb* `עֵנָב`; *gp* `חוֹף`; *ṣġd* `צָעַד` (Judg 5:4);
  *mštʿlt* `*מִתְעַלָּה*`; *špl* `שָׁפֵל`; *ad* `אַבָּא` (not *ab* `אָב`); *mdb* `*גֵּאוּת*`; *ymnn* `*הֵימִין*`; *yry* `יָרָה`;
  *ḫrṭ* `מָרַט`; *pḥm* `פֶּחָם` (Prov 26:21); *pty* `פִּתָּה` (Exod 22:15); *mt* (III) sg. `*מְתִי*` (vocalized: the pun with
  `מוֹת`); *ṣḥrr* `*הִשְׁחַרְחֵר*` (Song 1:6 `שְׁחַרְחֹרֶת`, a real cognate); *mtq* `מָתוֹק`; *lrmn* `רִמּוֹן`; *hr* `הֵרָיוֹן`;
  *ḥmḥmt* `*יִחוּם*` (Ps 51:7); *qnṣ* Gt `כָּרַע` (1 Sam 4:19); *gzr* `גֶּזֶר` (Gen 15:17); *trḫ* `אֵרַשׂ` (Hos 2:21; by sense);
  *mdbr qdš* `מִדְבַּר קָדֵשׁ` (Ps 29:8); *gr* R `הִתְגּוֹרֵר`; *tmt* `תְּמִימוֹת` (Lev 23:15); *nqpt* `הַקָּפוֹת` (Isa 29:1
  `חַגִּים יִנְקֹפוּ`); *mdrʿ* `מִזְרָע`; *lg* `לֹג` (Lev 14:10).

### Open decisions for the user

- 14: the line as read by KTU³/DULAT (the "kid" reading rejected) – recorded, not open; mentioned so that the user sees
  the history.
- 40, 46: *mt* "husband" as `*מְתִי*` (keeps the word and the pun) or plain `אִישִׁי`.
- 57: *ṣlmm* (damaged reading) left as `*צלמים*?` with no Gen 1:26 link; it could be omitted as `…`.
- 25: *dlthm* "their tendrils" (`דליותיהם`) or CUC's "their weakness".

### Progress log

- Drafted in one pass and saved; `fill`, `verify 1.23`, `check_bible_quotes.py` clean at the first run after one fix
  (Gen 14:18 printed and referenced). Pass (b): 41/44/47–48 and 49–51 / 55–56 compared; 52 corrected to `שתי נש[יי]` to
  match 60. Pass (c): the generated text read through.
- Final: `verify 1.23 --strict` 76/76, 0 problems; quotes 0 problems.

### The text on its own terms

- **Liturgy and myth in one text** (whole tablet): the myth is told inside a rite, with its counts and responses.
- **Death pruned like a vine** (8–11): the god of death with the staffs of bereavement and widowhood is cut and bound –
  the vintage as the defeat of death.
- **A test of words** (39–48): what the women call El – "husband" or "father" – decides what they will be to him.
- **The bird on the coals** (38–48): El hunts, plucks and roasts; the roasting marks the time of the test.
- **Instant conception** (49–51): "in kissing – conception, in embracing – pregnancy": the speed of the gods.
- **Dawn and Dusk as brothers** (52–53): the two twilights are born together, sons of El.
- **Gods with a cosmic appetite** (61–64): one lip to earth, one to heaven – the image of Mot's mouth given to newborn gods.
- **Exile in the desert and return to the sown land** (65–76): seven years among stones and trees, then bread and wine
  from the guard of the field – the gods of fertility come in from the steppe.

### Key parallels

- 52 ↔ Isa 14:12 `הֵילֵל בֶּן שָׁחַר` – Šaḥar, the god of dawn, father of the fallen star.
- 14 ↔ Exod 23:19, 34:26, Deut 14:21 `לֹא תְבַשֵּׁל גְּדִי בַּחֲלֵב אִמּוֹ` – [absent]: the old parallel rests on a misreading;
  *gd* is `גַּד` (Exod 16:31).
- 8–9 ↔ Isa 47:9 `שְׁכוֹל וְאַלְמֹן` – the same pair of words.
- 65 ↔ Ps 29:8 `מִדְבַּר קָדֵשׁ` – the same phrase.
- 62 ↔ Ps 73:9 `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` (and 1.5 II:2).
- 39 ↔ Exod 22:15 `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה`; 51 ↔ Ps 51:7 `יֶחֱמַתְנִי`, 1 Sam 4:19 `וַתִּכְרַע וַתֵּלֶד`.
- 67 ↔ Lev 23:15 `שֶׁבַע שַׁבָּתוֹת תְּמִימֹת`, Isa 29:1 `חַגִּים יִנְקֹפוּ`.
- 6 ↔ Deut 32:14 `חָמֶר`; Isa 55:1 (the call to eat and drink).

### Lines shared with other tablets

- 61–62 = 1.5 II:2–3 (`שפה לארץ, שפה לשמים`); 16 ~ 1.5 VI:26 (`… וצדה`); 22 *šr* = 1.3 I:18. Within the tablet: 13 = 28,
  7 ~ 26, 23–24 ~ 58–59, 49–51 = 55–56, 52–53 ~ 59–60.

### Proposals for the shared renderings

1. **Names for §1:** `מוֹת־וָשַׂר`, `רַחְמַי` (with a note: probably Anat).
2. **New rows:** *ad* `אַבָּא` (kept apart from *ab* `אָב`); *mt* (III) singular `מְתִי` (vocalized), to keep the one Hebrew
   word of *mtm* `מְתִים`; *trḫ* `אֵרַשׂ` and *mtrḫt* `מְאֹרָשָׂה` (by sense; 1.24 depends on them); *ṯkl* `שְׁכוֹל`, *ulmn*
   `אַלְמוֹן`, *zbr* `זָמַר`, *pḥm* `פֶּחָם`, *pty* `פִּתָּה`, *ṣḥrr* `הִשְׁחַרְחֵר`, *mdbr* `מִדְבָּר`, *nqpt* `הַקָּפָה`, *lg* `לֹג`.
3. **§5.4 trap:** *zd* / *ḏd* "breast" is written `שַׁד`, vocalized (the trap forbids `שד` for *šd* "field"; here it is the
   right word).

### Lessons for the guidelines

- A ritual text needs a visible distinction between rubric and recited text; plain instruction language (`ייאמר`, `שבע
  פעמים`) was enough here, without extra marks.

## KTU 1.24

Translator 3 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.24.rtl.md`, `translation--intro-1.24.rtl.md`,
generated `translation-1.24.rtl.md`.

### Scope

All 50 CUC lines (short lines; many words run over into the next line – each written where it begins, with a note).
Content: a hymn to Nikkal-and-Ib and to the Kotharat, "daughters of Hilal, the swallows", with "behold, the maiden will
bear a son" (1–15); Yarikh's embassy to Ḫirḫib, "king of summer", the bride-price – a thousand of silver, ten thousand of
gold, lapis, a field and vineyards – Ḫirḫib's counter-offers (Pidray, Ybrdmy), Yarikh's insistence, the weighing of the
bride-price by the bride's family at the scales (16–37); the closing hymn: "may Yarikh shine on you", the Kotharat's
dowry and their names (37–50).

### Sources consulted

- CUC v0.2.8 (machine parses; CUC misparses *nkl w ib* as "consumed … enemy" and *mhr* as "warrior": both rejected).
- Pardee (COS I), del Olmo Lete, Wyatt – recalled only, never quoted. Every Bible verse printed before quoting (≈17).

### Decisions

- **Marriage words, cognate only where real:** *mhr* `מֹהַר` [cognate; Gen 34:12, Exod 22:16, 1 Sam 18:25] (CUC's *mhr* (I)
  "warrior" rejected; *mhr* (I) stays `מָהִיר`); *ḫtn* `הִתְחַתֵּן` [cognate; Gen 34:9, 1 Sam 18:22]; *ṯlḫ* `שִׁלּוּחִים`
  [cognate; Exod 18:2, 1 Kgs 9:16]; *trḫ* `אֵרַשׂ` and *mtrḫt* `מְאֹרָשָׂה` [equivalent; Deut 22:23] (no Hebrew cognate);
  *mlg* `*מְלוּג*` (Mishnaic `נִכְסֵי מְלוֹג`); *dd* `דּוֹדִים` (1.3); *ḥrnq* `*פרדסים*`. Song of Songs is quoted once
  (6:11, for *ib* `אֵב`), never as a model.
- **7** `הֵן, העלמה תלד בן` ↔ Isa 7:14 (a footnote): *hl* `הֵן` (§3), *ġlmt* `עַלְמָה` (§4.2).
- **Names** (§1.1): `נִכַּל־וָאִב`, `יָרִחַ`, `חִרְחִב`, `הַכּוֹתָרוֹת`, `פִּדְרַי`, `עַתְּתַר`, `דָּגָן`; new: `הִלָּל` (*hll*, the New
  Moon; [cognate] `הֵילֵל`, Isa 14:12), `יַבְּרְדְמַי`, `תּוּתּוּל` (Dagan's city), and the Kotharat `תַּתְקַת`, `בַּקַּעַת`
  ("the cleaver", the midwife), `תַּקַּעַת`, `*פְּרַבְּחַת*`, `דַּמְקַת` ("the youngest", *ṣġrt* `צְעִירָה`).
- **Shared:** *lʾk* `שִׁגֵּר`; *ṯkḥ* `נִצְרַב`; *ḥbq* `חָבַק`; *ʿrb* `נִכְנַס`; *šlḥ* `שָׁלַח`; *iqnu* `סַפִּיר`; *alp … rbt* `אלף …
  רבבה`; *ṯʿr* `עָרַךְ`; *ar* `אוֹר`; *zd* `זִיד`; *ġtr* `עָתַר` [cognate; Gen 25:21]; *nyr* `נִיר` (1 Kgs 11:36; `מָאוֹר` never);
  *qẓ* `קַיִץ`; *mznm* `מֹאזְנַיִם`, *abn* `אֶבֶן` (Lev 19:36); *gb* (I) `גֵּב`.

### Open decisions for the user

- 2–3 "(daughter of) Ḫirḫib, king of summer; Ḫirḫib, king of the wedding": `(בת)` is an addition for sense.
- 47 *ṯlḫh w mlgh*: nouns ("her dowry and her *mlg*", DULAT) or, with CUC, the first Kotharat names.
- 49 the division *ʿm prbḫṯ* / *ʿmp rbḫṯ*.

### Progress log

- Drafted and saved; one misquote (Song 6:11, `הַנָּחַל` with qamats) fixed; verify clean. Final: `verify 1.24 --strict`
  50/50, 0 problems; quotes 0 problems.

### The text on its own terms

- **A divine marriage in human form** (16–37): embassy, bride-price, counter-offers, refusal, weighing – the whole legal
  procedure of a Late Bronze Age wedding, with the moon as groom.
- **The family at the scales** (34–37): father, mother, brother and sister each hold a part of the balance.
- **Bride-price and dowry** (19, 47): what the groom pays and what the bride brings, both named.
- **Birth goddesses honoured at a wedding** (1–15, 40–50): the Kotharat, "the skilled ones", are invoked for the children
  to come; their names are counted "in my mouth, on my lips".
- **The moon and the summer fruit** (2, 16): the god of the month marries the goddess of the fruit – the calendar of the
  harvest.

### Key parallels

- 7 ↔ Isa 7:14 `הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן` – the same three words, a birth-announcement formula.
- 19 ↔ Gen 34:12 `מֹהַר וּמַתָּן`, Exod 22:16 `כְּמֹהַר הַבְּתוּלֹת`, 1 Sam 18:25 – *mhr* `מֹהַר`.
- 25 ↔ Gen 34:9, 1 Sam 18:22 `הִתְחַתֵּן` – *ḫtn*.
- 47 ↔ 1 Kgs 9:16 `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ`, Exod 18:2 – *ṯlḫ*, the dowry.
- 34–37 ↔ Lev 19:36 `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק`; 20 ↔ Jer 32:10 (silver weighed on the scales).
- 28 ↔ Gen 25:21 `וַיֶּעְתַּר` – *ġtr*.

### Lines shared with other tablets

- Within the tablet: 6 = 15, 8 ~ 12, 1 ~ 37–38, 11 ~ 40, 16 ~ 31. With other tablets: 44–45 (`האדיב, אֵל / רחב־הלב`, §6.6,
  divided between lines).

### Proposals for the shared renderings

1. **§1 names:** `הִלָּל`, `יַבְּרְדְמַי`, `תּוּתּוּל`, the Kotharat's names (above).
2. **New rows:** *mhr* (II) `מֹהַר` (distinct from *mhr* (I) `מָהִיר`); *ḫtn* `חָתַן / הִתְחַתֵּן`; *ṯlḫ* `שִׁלּוּחִים`; *mlg*
   `מְלוּג`; *ġtr* `עָתַר`; *nyr* `נִיר`; *qẓ* `קַיִץ`; *mzn* `מֹאזְנַיִם`.

### Lessons for the guidelines

- On a tablet of short lines where words run over, writing each word in the line where it begins keeps the line count and
  the Hebrew readable; the apparatus must say so each time.

## KTU 1.114

Translator 3 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.114.rtl.md`, `translation--intro-1.114.rtl.md`,
generated `translation-1.114.rtl.md`.

### Scope

All 31 CUC lines (obverse 1–24, reverse 25–31). Content: El's banquet; Yarikh under the table like a dog, fed by those who
know him and beaten by those who do not; Athtart and Anat give him portions and the gatekeeper rebukes them; El drinks in
his *marzeaḥ* to drunkenness, is carried home by Thukamun and Shunam, meets Ḥubbay "lord of horns and tail", wallows in his
excrement and urine and falls "like the dead"; Anat and Athtart hunt for the cure; the cure wakes him (1–28); a medical
rubric against hangover (29–31).

### Sources consulted

- CUC v0.2.8 (machine parses); renderings §9's gate line for 15. Pardee and del Olmo Lete recalled only. Every verse
  printed before quoting (≈12).

### Decisions

- **15** follows the §9 gate line: `שׁוּכַּר אֵל, יָשַׁב בַּמַּרְזֵחַ שֶׁלּוֹ,`; *mrzḥ* `מַרְזֵחַ` [cognate] with Amos 6:7
  `מִרְזַח סְרוּחִים` and Jer 16:5 (both printed), and 1.1 IV:4.
- **5** *gb* (II) `גַּב` (renderings §10); *klb* `כֶּלֶב`, *inr* (13) "dog" another word, `*גור*`; *qṯ* R `*הִסְתַּחֵב*` (*qṯ*
  `סָחַב`, 1.2); *km* `כְּמוֹ`.
- **Shared:** *ʿdb* `תִּקֵּן`; *hlm* `הָלַם` (Prov 23:35 `הֲלָמוּנִי`); *ḫṭ* `שַׁרְבִיט`; *gʿr* `גָּעַר`; *lḥm* `סָעַד`; *qṣ*
  `נֵתַח`; *trṯ* `תִּירוֹשׁ`; *škr* `שִׁכָּרוֹן`; *ʿms* `עָמַס`; *ngš* `נִגַּשׁ`; *ql* `נָפַל`; *yrdm arṣ* `יורדי הארץ` (1.4 VIII:9);
  *ṯwb* Š `הֵשִׁיב`; *ʿr* N `נֵעוֹר`; *aḥd* `כְּאֶחָד`; *nšb* `*פרוסה*`; names `תַּכְמָן וְשׁוּנַם`, `חוּבַּי` (§1.1).
- **New:** *ṯġr* "gatekeeper" `שׁוֹעֵר` [cognate of `שַׁעַר`]; *ḫru* `צוֹאָה` [cognate `חֲרָאִים`, 2 Kgs 18:27 K]; *ṯnt* `שֶׁתֶן` (by
  context); *qrn* `קֶרֶן`, *ḏnb* `זָנָב`; *lš* `*טִנֵּף*`; *lṣb* `מֵצַח`; *pqq* `*פַּקֻּעָה*` (2 Kgs 4:39); *šr* (IV) `*שֹׁר*`
  (Prov 3:8); *ḫrpnt* `חָרְפִּי` / `של חורף` (Gen 8:22); *rpʾ* (vb) `רָפָא` (the gated `רְפָאִים` / `רָפִא` untouched).
- **The rubric** (29–31) marked `(הוראה:)` at its head; *ḫš ʿrk lb* left uncertain, with the "hair of the dog" emendation
  (*šʿr klb*) reported as not KTU³'s.

### Open decisions for the user

- 29 *ḫš ʿrk lb* (`… *ערך* *לב*`) or the emendation "dog's hair".
- 21 *ṯnt* "urine" (by context; DULAT uncertain).
- 12 *rlb* (perhaps for *klb* "dog").

### Progress log

- Drafted and saved; the verifier asked for `עֲנָת` vocalized at 11 (it treats 11 as the first occurrence because 9 has the
  scribal `ʿn{y}t`): vocalized. Final: `verify 1.114 --strict` 31/31, 0 problems; quotes 0 problems.

### The text on its own terms

- **The high god in disgrace** (15–22): the father of the gods drinks himself into filth and falls "like the dead" – told
  with humour, without punishment.
- **Table manners as rank** (5–14): the moon god under the table like a dog, fed or beaten according to who knows him.
- **The marzeaḥ** (15): a drinking association with a lord, a house and a court – the institution Amos condemns.
- **Helpers who carry the drunk** (18–19): Thukamun and Shunam, the dutiful sons of the proverb (cf. the son "who holds his
  hand when he is drunk" in Aqhat).
- **Myth as warrant for medicine** (28–31): the cure that woke El is the cure for men.

### Key parallels

- 15 ↔ Amos 6:7 `וְסָר מִרְזַח סְרוּחִים`, Jer 16:5 `בֵּית מַרְזֵחַ`.
- 21 ↔ Isa 28:8 `כָּל שֻׁלְחָנוֹת מָלְאוּ קִיא צֹאָה`; 2 Kgs 18:27 (`חֹרָיהָם`).
- 8 ↔ Prov 23:35 `הֲלָמוּנִי בַּל-יָדָעְתִּי`; 28 ↔ Prov 23:35 `מָתַי אָקִיץ`, Ps 78:65 `כְּגִבּוֹר מִתְרוֹנֵן מִיָּיִן`.
- 4 ↔ Gen 9:21 `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר`.
- 6 ↔ Judg 1:7 `מְלַקְּטִים תַּחַת שֻׁלְחָנִי`.
- 30 ↔ Prov 3:8 `רִפְאוּת תְּהִי לְשָׁרֶּךָ`; 2 Kgs 4:39 `פַּקֻּעֹת שָׂדֶה`.

### Lines shared with other tablets

- 3–4 = 16 (within); 15 ~ 1.1 IV:4; 22 ~ 1.4 VIII:9; 23 ~ 1.23:16.

### Proposals for the shared renderings

1. **New rows:** *ṯġr* `שׁוֹעֵר`; *ḫru* `צוֹאָה`; *inr* `*גּוּר*` (kept apart from *klb* `כֶּלֶב`); *lṣb* `מֵצַח`; *ḫrpnt* `חֹרֶף`.
2. **Verifier:** the "first occurrence of *ʿnt*" check reads 1.114:9 `ʿn{y}t` as not *ʿnt*; harmless (the Hebrew is vocalized
   at both lines), noted for the tool.

### Lessons for the guidelines

- A medical rubric at the end of a myth should be marked as such in the clean translation (`(הוראה:)`), so the reader sees
  the change of genre.

## KTU 1.100

Translator 3 of the corpus (Round 4 run 1, last batch), 2026-10-23. Files: `annotated-1.100.rtl.md`,
`translation--intro-1.100.rtl.md`, generated `translation-1.100.rtl.md`.

### Scope

All 79 CUC lines. Content: the she-ass, "daughter of the spring, of the stone, of the heavens and the deep", sends Šapšu her
mother to eleven gods, each in his town, with a "count" (incantation) against the serpent's bite; each god "does not answer"
– he feeds the serpent, sets up a chair and sits (2–60); Horon uproots the tamarisk / "tree of death" and the venom is shaken
off and washed away (61–69); a dialogue on house and bride-price: serpents as the *mhr* (70–76); a scribal note (77–79).

### Sources consulted

- CUC v0.2.8 (machine parses, DULAT glosses); renderings §1, §4.1, §5, §6.7, §10. Pardee (RSO IV; COS I) and del Olmo
  Lete recalled only, never quoted. Every verse printed before quoting (≈24).

### Decisions

- **The refrain** (the coordinator's point; header and 2–7): one Hebrew, copied byte for byte in all eleven stanzas;
  only the god, his town and the tablet's line breaks change:
  `קראה לשַׁפְּשׁ, אמה: "שַׁפְּשׁ, אם, הובילי קול אל X, Y־ה: מניין נשיכת נחש, מרורת נחש *עקשן*: ממנו המלחש מאבד, ממנו יַדֶּה חֵמָה." אֲזַי *הרים* את הנחש, הסעיד את הנחש ה*עקשן*, תיקן כיסא ויָשַׁב.`
  The address to Šapšu (*qrit/tqru l špš umh*) is fixed as `קראה לשַׁפְּשׁ, אמה` (*qrit* and *tqru*, two conjugations, one
  Hebrew past); the gods' non-answer as `אֲזַי *הרים* … תיקן כיסא ויָשַׁב` (*hlm* `אֲזַי`, *yṯq* `*הרים*`, *lḥm* Š `הסעיד`,
  *ʿdb* `תיקן`, *ksu* `כיסא`, *yṯb* `יָשַׁב`). Scribal slips (*b⟨l⟩*, *u⟨m⟩h*, *y⟨ʿ⟩db*, *ʿt* for *ʿm*) keep the formula.
- **The coordinator's words:** *nḥš* `נָחָשׁ`, *ḥmt* `חֵמָה` (§5.4), *ḥrn* `חוֹרָן`, *ydy* `*יַדֶּה*` (1.6 VI:52).
- **ʿqšr** `*עקשן*` (italic; meaning unknown, after `עִקֵּשׁ`; CUC/DULAT have no lemma). 1.82:20 *aqšr* (DULAT "which
  sloughs its skin") is probably the same word: rendered `*עקשן*?` there.
- **The she-ass:** *pḥl* `חֲמוֹר` (1.4), *pḥlt* `חֲמוֹרָה` – **changed during this batch from `אָתוֹן`**, which is *atn*'s
  (1.4 IV:7 `אתונ[י]`, renderings §10); `חֲמוֹרָה` is the feminine of `חֲמוֹר` as *pḥlt* of *pḥl* (Mishnaic "חמורה").
- **mnt** `מניין` (as 1.24:46); *mlḫš* `מלחש` [cognate]; *šmrr* `מרורה` [cognate]; *nṯk* `נשיכה`.
- **abd** (5 and refrain) read as the D verb `מאבד` (CUC's word list has the noun; see 1.107 and the Proposals).
- **The gods and their towns** (each checked against renderings §1): אֵל – `נבכי שני הנהרות, בעדת שתי התהומות` (§6.7, *b ʿdt*
  for *qrb apq*; *ʿdt* `עֵדָה` §4.2); בעל – `מרומי צָפוֹן` (§1.2); דָּגָן – `תּוּתּוּלָה` (§10 `תּוּתּוּל`); עֲנָת ועַתְּתַרְת – `אִנְבָּבָה`
  (§1.2 `אִנְבָּב`); יָרִחַ – `לַרְגַּתָּה` (new, transcribed); רֶשֶׁף – `בִּבִּתָּה` (new); זַז וְכַמַּת – `חֻרְיַתָּה` (new; *kmṯ* the
  cognate of `כְּמוֹשׁ`, Num 21:29, but transcribed: §1); מִלְכּוּ – `עַשְׁתָּרוֹתָה` (§1.2 `עַשְׁתָּרוֹת`, Deut 1:4 and Josh 12:4 printed and
  quoted); כּוֹתַר־וְחַסִּיס – `כַּפְתּוֹרָה` (§1.2); שַׁחַר וְשָׁלֵם – `השמימה`; חוֹרָן – `מְצַדָּה` (new, transcribed); 78 עַתְּתַרְת – `מָרִיָה`
  (new). The directional *-h* is the Hebrew `ה` of direction (`מִצְרַיְמָה`).
- **The trees** (61–69): *ʿrʿr* `עַרְעָר` [cognate] (DULAT "tamarisk"; Jer 17:6), *ʿṣ mt* `עץ המָּוֶת`; *nʿr* `נִעֵר` (Neh 5:13);
  *ssn* `סַנְסִנִּים` (Song 7:9); *ybl* (n.) `יוּבַל` (Jer 17:8); *nḫl* `נחל`, *plg* `פֶּלֶג` (Ps 1:3); *aršḫ* `אַרְשַׁח` (transcribed).
- **The bride-price** (70–76): *mhr* `מֹהַר` (§10), *bn bṯn* `בני פתן` (§4.1 `פֶּתֶן`), *itnn* `אֶתְנַן` [cognate] (Hos 2:14; Deut 23:19
  in the note).
- **77–79** headed `(הוראה:)` – a scribal instruction (after Resheph, Athtart), as the coordinator's rubric style.

### Open decisions for the user

- *ʿqšr* `*עקשן*` (meaning unknown; DULAT's *aqšr* "skin-shedder" at 1.82:20 may decide it).
- *yṯq* `*הרים*` (DULAT *ṯqy* D, uncertain): the gods' gesture is obscure.
- 61–62 and 70–72 (Horon's face, the "ancient city", the house of the count) stay uncertain.

### Progress log

- Generated from a header and a per-stanza table (so the refrain is identical by construction), then edited by hand.
  `pḥlt` changed to `חֲמוֹרָה` at the end of the batch (collision with *atn*). Final: `verify 1.100 --strict` 79/79, 0
  problems; quotes 0 problems.

### The text on its own terms

- **A catalogue of the pantheon** (2–60): eleven gods in fixed order, each in his town – a map of the Ugaritic divine world,
  from El at the source of the rivers to Šaḥar and Šalim in the heavens.
- **Repetition as power:** the refrain is the incantation; reciting it eleven times is the cure.
- **The silence of the gods:** each god feeds the serpent and sits down – until Horon, the god of the charmers, acts.
- **Sympathetic magic** (61–69): the venom passes into the tree, is shaken off and carried off by the stream.
- **Myth and marriage** (70–76): the cure is paid for with a bride-price of neutralized serpents.

### Key parallels

- 4–6 ↔ Ps 58:5–6 `חֲמַת-נָחָשׁ … לְקוֹל מְלַחֲשִׁים` – *ḥmt* `חֵמָה`, *nḥš* `נָחָשׁ`, *mlḫš* `מְלַחֵשׁ`: the Bible's charm vocabulary is
  the Ugaritic one [cognate]; Eccl 10:11 `אִם יִשֹּׁךְ הַנָּחָשׁ בְּלוֹא לָחַשׁ`; Jer 8:17.
- 4 *šmrr nḥš* ↔ Job 20:14 `מְרוֹרַת פְּתָנִים`; Num 21:9 (the bite).
- 1 ↔ Gen 49:25 (`שָׁמַיִם` // `תְּהוֹם`).
- 41 ↔ Deut 1:4, Josh 12:4 (Ashtaroth, Og's town).
- 64–69 ↔ Jer 17:6, 8 (`עַרְעָר`, `יוּבַל`), Ps 1:3 (`פַּלְגֵי מָיִם`), Neh 5:13 (`נָעַר`).
- 74–76 *itnn* ↔ Hos 2:14 `אֶתְנָה`, Deut 23:19 `אֶתְנַן`.

### Lines shared with other tablets

- The refrain within (11 stanzas); 3 ~ §6.7 (El's abode); the gods' list ~ 1.107:38–44 (the same pairs, other order).

### Proposals for the shared renderings

1. **New names (§1):** `לַרְגַּת`, `בִּבִּת`, `חֻרְיַת`, `מְצַדָּה` (Horon's town), `מָרִיָה`, `אַרְשַׁח`; `זַז וְכַמַּת` (also 1.107 `זַז
   וְכַתַּת`, 1.82 *kmġ*); `מִלְכּוּ` (not `מֹלֶךְ`).
2. **New rows:** *pḥlt* `חֲמוֹרָה`; *mlḫš* `מְלַחֵשׁ`; *šmrr* `מְרוֹרָה`; *ʿrʿr* `עַרְעָר`; *ssn* `סַנְסִנִּים`; *itnn* `אֶתְנַן`;
   *ʿqšr* / *aqšr* `*עקשן*`.
3. **abd noun / verb:** here the refrain's *abd* is read as the verb (`מאבד`), in 1.107 as the noun (`אֲבַדּוֹן`, Job 26:6). DULAT
   has the noun in both: the coordinator may want 1.100 changed to `… המלחש – אבדון …` for one Hebrew per lemma.

### Lessons for the guidelines

- A long refrain is safest generated from one string and then hand-edited only outside it.

## KTU 1.107

Translator 3, 2026-10-23. Files: `annotated-1.107.rtl.md`, `translation--intro-1.107.rtl.md`, generated
`translation-1.107.rtl.md`.

### Scope

All 54 CUC lines (reverse and upper edge; the obverse is lost). Content: the stricken Šrġzz weeps "like a boy"; Šapšu calls
from heaven, "why has (the venom) fallen on the prince?" (8–15); broken lines with venom and Horon (21–31); the charm "Gather,
Šapšu, from the mountains the mist, from the earth the power" and the pairs of gods who "gather the venom" (32–45); remains of
instructions: blood, anointing, birth (46–54).

### Sources consulted

- CUC v0.2.8; renderings §1, §4.1, §10; 1.100 (the gods). Pardee recalled only. Verses printed (≈12).

### Decisions

- **The three formulas**, copied identically wherever they occur: `אספי, שַׁפְּשׁ, מן ההרים ערפל, מעל הארץ *תוקף*` (32–34, 37,
  44); `X יאסוף חֵמָה` (38–44); `חֵמָה מפי הנושך, אבדון מפי האוכל` (35, 45; 45 with `*תשישות*` and *aspt* `אספתי`).
- **The gods' list** (38–44): the order is subject – verb (*il w ḥrn yisp ḥmt*): the gender agreement proves it (*ʿnt w ʿṯtrt
  tisp*, all others *yisp*). Pairs: אֵל וחוֹרָן; בעל ודָּגָן; עֲנָת ועַתְּתַרְת (the goddess, not the town, against CUC); יָרִחַ ורֶשֶׁף;
  עַתְּתַר ועַתְּתַפַּר? (new name, transcribed); זַז וְכַתַּת (*ktṯ*, spelled as written); מִלְכּוּ בעַשְׁתָּרוֹת (the town, as 1.100:41);
  כּוֹתַר־וְחַסִּיס; שַׁחַר וְשָׁלֵם. *yisp* singular in Hebrew (the Ugaritic prefix does not mark the dual).
- *ʾsp* `אָסַף`; *ġrpl* `עֲרָפֶל` [cognate]; *lan* `*תוקף*`; *ṯmdl* `*תשישות*`; *abd* `אֲבַדּוֹן` (Job 26:6) and *abdy* `אָבְדָן` (Esth
  9:5) – two lemmas, two words; *akl* the participle `האוכל` (DULAT's "grain" rejected, by the parallel with *nṯk* `הנושך`).
- **hr** `הַר` (the true cognate, DULAT *hr* I): the same Hebrew as *ġr* `הַר` – an accepted split proposed below.
- *ḫp* `חוף` (as 1.3 II:7); *mḫlpt* `מַחְלְפוֹת` [cognate] (Judg 16:13); *ntk* `ייתך` (Exod 9:33); *bkm* `בְּכֵן` (Esth 4:16);
  *pẓr* `התיר`; *pq* `השיג`; *kmm* `כמו כן`; *mspr* `מִסְפָּר`; *hwt* `אִמְרָה`; *ʿrq* `*עורק*` (DULAT "cart" rejected beside *dm*).
- *šrġzz* `שַׂרְגַּזַּז`, *b šr* `בַּשַּׂר` ("on the prince"); *ṣ ġr* (9) read as one word *ṣġr* `צעיר` (a misplaced divider; CUC's
  *ġr* "mountain" rejected).
- Broken words are not guessed: 4 *yšql*, 7 *tʿbtnh*, 18 *ṯllt*, 48 *kṯpm akṯn*, 53 *tmt* stay `…`.

### Open decisions for the user

- 8–10 *b šr* "on the prince" (or "in the flesh"?) and the speaker of 45 (*aspt* 1 sg or 2 f).
- 46 *ʿrq* "vein" or DULAT's "cart".

### Progress log

- Drafted and saved; two invented "parallel" phrases removed before the check (8, 34). Final: `verify 1.107 --strict`
  54/54, 0 problems; quotes 0 problems.

### The text on its own terms

- **Šapšu as healer:** the sun who disperses the morning mist disperses the venom – a natural image turned into a rite.
- **The whole pantheon gathers the venom** (38–44): the same gods as 1.100, now in pairs and all acting.
- **The child victim:** the patient is named and weeps – the charm has a story.

### Key parallels

- 35, 45 *abd* ↔ Job 26:6 `וְאֵין כְּסוּת לָאֲבַדּוֹן` [cognate]; *ḥmt* ↔ Deut 32:33 `חֲמַת תַּנִּינִם`, Ps 140:4 `חֲמַת עַכְשׁוּב תַּחַת
  שְׂפָתֵימוֹ` ("from the mouth of the biter").
- 20 *mḫlpt* ↔ Judg 16:13 `שֶׁבַע מַחְלְפוֹת רֹאשִׁי` [cognate].
- 17 *ntk* ↔ Exod 9:33 `וּמָטָר לֹא נִתַּךְ`; 7 *abdy* ↔ Esth 9:5 `וְאַבְדָן`; 8 ↔ Exod 2:6 `וְהִנֵּה נַעַר בֹּכֶה` [equivalent].
- 34 ↔ Jer 8:17 (serpents without a charm) [equivalent].

### Lines shared with other tablets

- 32–34 = 37 = 44 (within); 35 ~ 45; 38–44 ~ 1.100's gods; 29, 31 Horon ~ 1.100:57–67.

### Proposals for the shared renderings

1. **pslt / mḫlpt collision:** 1.5 VI:18 and 1.6 I:2 gave *pslt* `*מַחְלְפוֹת*` by sense; *mḫlpt* (here) is the real cognate.
   Proposal: *mḫlpt* keeps `מַחְלְפוֹת`, *pslt* takes another word (e.g. `*פְּסִילוֹת*` or `*שְׂרִיטוֹת*`).
2. **gp / ḫp:** 1.23:30 gave *gp* `חוֹף`; *ḫp* is `חוף` here and in 1.3 II:7. Proposal: *gp* `*שָׂפָה*`? or `גָּדָה`.
3. **hr / ġr:** accept the split `הַר` for both (or *ġr* `צוּר` by its cognate – too late for the corpus).
4. **New names:** `שַׂרְגַּזַּז`, `עַתְּתַפַּר`, `זַז וְכַתַּת`, `פַּבֵּל` (4). **New rows:** *lan* `*תוקף*`, *ṯmdl* `*תשישות*`, *abdy* `אָבְדָן`,
   *pẓr* `התיר`, *ʿrq* `*עורק*`.

### Lessons for the guidelines

- In a list of gods, the verb's gender can fix the word order: check it before drafting the formula.

## KTU 1.108

Translator 3, 2026-10-23. Files: `annotated-1.108.rtl.md`, `translation--intro-1.108.rtl.md`, generated
`translation-1.108.rtl.md`.

### Scope

All 27 CUC lines (upper edge and reverse). Content: Rapiu, king of eternity, drinks, sings and plays (1–5); Anat drinks,
mistress of kingship, the kite soaring in the heavens (6–9); El drinks (10–15); broken (16–18); Rapiu's blessing on the king
of Ugarit: his strength, protection, power, paternal rule and splendour "within Ugarit, for the days of sun and moon and the
pleasant years of El" (19–27).

### Sources consulted

- CUC v0.2.8; renderings §1.1–1.2, §4.2, §9 (the gate lines 1–2), §10. Pardee recalled only. Verses printed (≈20).

### Decisions

- **1–2** copied from §9: `הִנֵּה, יִשְׁתֶּה רָפִא, מֶלֶךְ עוֹלָם, וְיִשְׁתֶּה` / `[אֵל] הַגִּבּוֹר וְהַיָּקָר, אֵל הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת,`. *yšt*
  = *šty* `ישתה` throughout (CUC's *šyt* rejected in 1, 10, 13); *yqr* the adjective `יָקָר` (CUC's verb rejected).
- **Ashtaroth and Edrei:** `עַשְׁתָּרוֹת`, `אֶדְרֶעִי` (§1.2), the town not the goddess, because *b hdrʿy* parallels it; Deut 1:4
  and Josh 12:4 printed and quoted, with Gen 14:5 and Deut 3:11.
- *ṯpẓ* = *ṯpṭ* `שופט` (the scribe's *ẓ* for *ṭ*); *šyr* `ישיר`, *ḏmr* (II) `יזמר` and (n.) `זמרה` [cognate].
- **The instruments:** *knr* `כינור`, *tp* `תוף`, *mṣltm* `מצלתיים` [cognate]; *ṯlb* `חליל` [equivalent]; *rqdm* `*מרקדות*`, *šn*
  `שן` (ivory).
- **5 *ẓbm*:** DULAT's "gazelles" `ה*צבאים*?`; the reading *ṭbm* "good" (the scribe's *ẓ* for *ṭ*) in the note – `טוֹב`
  is reserved for *ṭb* (§5.2).
- **Anat:** *gṯr* `הגיבורה` (feminine of §9's `הַגִּבּוֹר`); *bʿlt mlk* `בעלת מלכות`, *drkt* `שְׂרָרָה`; *di* `הַדָּאָה` [cognate] (Lev
  11:14), *dʾy* `דואה`, *rḫp* `מרחפת` [cognate] (Deut 32:11; Gen 1:2); *kpṯ* `*כיפה*` (`רָקִיעַ` never).
- **12 *il šdy*** `אֵל השדה` (DULAT *šd*): the `אֵל שַׁדַּי` comparison (Gen 17:1) noted as [divergence], not built on.
- **The blessing:** *ʿz* `עוז`, *ḏmr* `זמרה` (Exod 15:2), *lan* `*תוקף*` (as 1.107), *ḥtk* `*אבהות*`, *nmrt* `תפארת`, *iršt*
  `אֲרֶשֶׁת` [cognate] (Ps 21:3), *nʿmt* `נעימות`; *ṯlṯ* (26) left `…`.

### Open decisions for the user

- 5 *ẓbm* "gazelles" (DULAT) or *ṭbm* "good" (the scribe's spelling).
- 20 *l tštk l iršt* (`אכן *תשיתך* לארשת`): the *l* asseverative or negative.
- 13 *ilh*: "goddess", "the Divine One", or "his god".

### Progress log

- Drafted and saved. `verify 1.108 --strict`: **1 problem left, a gate bug** – line 8 `המרחפת` is blocked because the
  `רחף` gate is licensed by *rḥp* (§5.2: "not in these texts"), but the Ugaritic verb is *rḫp* (DULAT /r-ḫ-p/, "to hover"):
  the true cognate of Gen 1:2 is here. Not bent; reported. Quotes 0 problems.

### The text on its own terms

- **The dead kings' god at the feast** (1–5): Rapiu drinks and plays music – the cult of the royal ancestors as a banquet.
- **Anat the bird of prey** (8–9): the warrior goddess hovering over the earth.
- **From the shades to the living king** (19–27): the strength of the healer god is transferred to the reigning king.

### Key parallels

- 2–3 ↔ Josh 12:4 `הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת וּבְאֶדְרֶעִי` and Deut 1:4 [cognate]: the same two towns, the same verb, of Og "of the
  remnant of the Rephaim" (Deut 3:11); Gen 14:5 `רְפָאִים בְּעַשְׁתְּרֹת קַרְנַיִם`. The strongest parallel of the batch.
- 1 *mlk ʿlm* ↔ Jer 10:10 `וּמֶלֶךְ עוֹלָם` [cognate].
- 21–24 *ʿz* // *ḏmr* ↔ Exod 15:2 `עָזִּי וְזִמְרָת יָהּ` [cognate].
- 8 *rḫp* ↔ Deut 32:11 `יְרַחֵף`, Gen 1:2 `מְרַחֶפֶת` [cognate: the same verb and form; the image differs]; *di* ↔ Lev 11:14
  `הַדָּאָה`; Deut 28:49 `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר`.
- 4 ↔ 1 Sam 10:5 `נֵבֶל וְתֹף וְחָלִיל וְכִנּוֹר`, Gen 31:27.
- 20 *iršt* ↔ Ps 21:3 `וַאֲרֶשֶׁת שְׂפָתָיו`; 26–27 ↔ Ps 72:5, 89:38, Job 36:11, Ps 16:11 [equivalent].

### Lines shared with other tablets

- 1 ~ 19–22 (*rpu mlk ʿlm*, within); 21–22 ~ 24–25 (the blessing, 3rd → 2nd person); Ashtaroth ~ 1.100:41, 1.107:42.

### Proposals for the shared renderings

1. **Tool / renderings:** the §5.2 gate "the root רחף *rḥp*" should read *rḫp* (DULAT /r-ḫ-p/; 1.108:8, and 1.18 IV in Aqhat).
2. **gṯr / ġzr collision:** §9 fixes *gṯr* `הַגִּבּוֹר`, while 1.3 I:20 (and 1.23) give *ġzr* `גיבור`: one of them needs another
   word (*ġzr* `עֶלֶם`? `*גֶּבֶר*`?).
3. **New rows:** *ṯlb* `חליל`, *mṣlt* `מצלתיים`, *knr* `כינור`, *tp* `תוף`, *iršt* `אֲרֶשֶׁת`, *nmrt* `תפארת`, *ḥtk* (III) `*אבהות*`,
   *ḏmr* (II) `זמרה`, *diy* `דַּאָה`, *kpṯ* `*כיפה*`, *rqd* `*מרקדות*`.

### Lessons for the guidelines

- A scribe's spelling habit (*ẓ* for *ṭ*) belongs in the header, since it can turn a lemma into another.

## KTU 1.82

Translator 3, 2026-10-23. Files: `annotated-1.82.rtl.md`, `translation--intro-1.82.rtl.md`, generated
`translation-1.82.rtl.md`.

### Scope

All 43 CUC lines (lower edge and reverse). Content (as far as it can be followed): Baal and the *tnn* (1); a curse (2);
Resheph's arrows in the kidneys and heart (3); obscure speech with Mot, Šapšu and "serpents seized by Baal" (4–6); a plant
that stops up the wound (7, 19); an offering of rams and a lamb (8); "daughters of terror, of frenzy" (18, 41); an orphan
girl, a poor woman, "son of terror" (22–24); Horon (27, 41); the Rephaim (32); serpents and a she-serpent (35); the names
Papšarru and Papšarratu (36); the *brḥ* of the earth (38); expulsion from house and assembly (12, 40); Ẓẓ and Kmṯ (42); a
closing curse: "like trees that do not give, like stones that do not murmur" (43).

### Sources consulted

- CUC v0.2.8; renderings §4.1, §7 (the fixed *tnn* / *bṯn* / *brḥ* lines), §10. Pardee, del Olmo Lete recalled only.
  Verses printed (≈25).

### Decisions

- **The coordinator's words:** *tnn* `תַּנִּין` (1), *bṯn* `פֶּתֶן` (6, 35; plural `פתנים`, feminine *bṯnt* `פתנת`) – not the
  coordinator's `בֶּתֶן` (a slip: renderings §4.1 has `פֶּתֶן`); *brḥ* `בָּרִחַ` (38) as 1.5 I:1; *mḫṣ* `מָחַץ` (1). *ʾsr*, *rks*,
  *šbm* and *ltn* do not occur in the base text of 1.82 (nothing to copy from 1.5 I:1–3 except *bṯn* and *brḥ*).
- **Honesty about the text:** where the tablet is broken or obscure the Hebrew has `…`, `?` and italics; 1's syntax (who
  smote whom: the verb's prefix is lost) and 38's *brḥ arṣ* are said to be uncertain in the notes, and their parallels are
  lexical only.
- *ḥẓ* `חץ`, *klyt* `כליות`, *lb* `לב`, *yr* `יורה` [cognate] (3); *ʾṭm* `אטם` [cognate] (7, 19; Ps 58:5); *ḥmṯ* `*חומש*`
  [cognate] (2 Sam 2:23); *ṭmṯ* `*נידה*`; *prṭl* `*פרטל*`.
- *alt* `אָלָה` [cognate] (Num 5:21); *ḥš* (II) "feel" `ארגיש` (apart from *ḥš* I `חוּשׁ`, 15); *idy* `כבר`.
- *rnn* `ארנן` [cognate] – collision with 1.3 I:18 *bd* `רינן` (Proposals).
- *ṯrmt* `*סעודת*` (not `תְּרוּמָה`, *trmt*'s); *al* `אילים`, *š* `שה`, *bkr* `בכורים`.
- *bnt* `*בנות*` (DULAT *bnt* II "creature"; the "tamarisk" reading, *bnt* III, in the note: if accepted, `אֵשֶׁל`, apart from
  1.100's *ʿrʿr* `עַרְעָר`); *ṣʿṣ* `*זעזוע*`, *ḫrp* `*טירוף*`, *mʿmʿ* `*פרכוס*`; *ḥtt* `חתת` [cognate].
- *ʿnt* (II) "now" `כעת` (39, the repetition; apart from *ht* `עַתָּה`); 11 left `עֲנָת?`.
- *aqšr* (20) `*עקשן*?` – the same word as 1.100's *ʿqšr*?
- *ytmt* `יתומה`, *dlt* `דלה`, *urbt* `אֲרוּבָּה`, *ptḥ* `פתח`, *mṣrp* `מצרף`, *lg* `לֹג`, *ntbt* `נתיבה`, *drḫ* `*יעלים*`,
  *ʾgg* `*יהגו*`, *ġwy* `*אזעק*`; *ẓẓ w kmġ* `זַז וְכַמַּת` (1.100's pair).

### Open decisions for the user

- 1: does Baal smite the *tnn* (KTU's restoration is not certain; the verb's prefix is lost)?
- 18, 41 *bnt*: "daughters/creatures" or "tamarisk".
- 39 *ʿnt tqm*: "now arise" or "Anat arises".
- 4–5, 9–10, 25 – left largely untranslated (`…`); no reading proposed.

### Progress log

- Drafted and saved; unreferenced Bible phrases given their references after printing (14, 38). Final: `verify 1.82
  --strict` 43/43, 0 problems; quotes 0 problems.

### The text on its own terms

- **Mythic precedent for a cure:** Baal against the *tnn*, Resheph's arrows – the gods' battles name the patient's pains.
- **Pain as demons:** "daughters of terror, of frenzy, of convulsion", "son of terror".
- **Expulsion:** house, wall, dust and assembly drive the evil out (12, 40).
- **The silent world** (43): trees and stones that do not speak – the reverse of the "word of tree, whisper of stone" of
  1.3 III.

### Key parallels

- 1 ↔ Job 26:12–13 `מָחַץ רָהַב … חֹלְלָה יָדוֹ נָחָשׁ בָּרִחַ`, Isa 51:9 `מְחוֹלֶלֶת תַּנִּין`, Ps 74:13 [cognate: *mḫṣ*, *tnn*; the
  syntax uncertain].
- 3 ↔ Lam 3:13 `הֵבִיא בְּכִלְיֹתָי בְּנֵי אַשְׁפָּתוֹ` (the arrow as "son", in the kidneys); Ps 76:4 `רִשְׁפֵי-קָשֶׁת`; Job 16:13.
- 7 *ʾṭm* ↔ Ps 58:5 `כְּמוֹ-פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` [cognate, lexical].
- 38 *brḥ* ↔ Isa 27:1 `נָחָשׁ בָּרִחַ`, Job 26:13 [cognate: the adjective only].
- 23 *ḥtt* ↔ Gen 35:5 `חִתַּת אֱלֹהִים`; 2 *alt* ↔ Num 5:21; 33 ↔ Prov 17:3; 43 ↔ Hab 2:11 [equivalent].

### Lines shared with other tablets

- 7 ~ 19; 6 ~ 14 (*uḫd bʿlm*); 12 ~ 40; 18 ~ 41; 10 ~ 38 (*yrk bʿl*); 22 ~ 24; 42 ~ 1.100:36.

### Proposals for the shared renderings

1. **rnn / bd:** *rnn* takes its cognate `רִנֵּן`; 1.3 I:18 *bd* `רינן` should move (e.g. `*פִּזֵּם*`).
2. **New rows:** *alt* `אָלָה`, *ḥš* (II) `הרגיש`, *idy* `כבר`, *ʾṭm* `אָטַם`, *ḥmṯ* `*חומש*`, *ḥtt* `חִתַּת`, *ʿnt* (II) `כעת`, *ytmt*
   `יתומה`, *mṣrp* `מַצְרֵף`, *ntbt* `נְתִיבָה`, *bṯnt* `פתנת`; names `פַּפְּשַׁר`, `פַּפְּשַׁרְת`.

### Lessons for the guidelines

- For a notoriously obscure text, a translation that leaves gaps (`…`) is better than one that fills them: the reader sees
  exactly what is known.

## KTU 1.83

Translator 3, 2026-10-23. Files: `annotated-1.83.rtl.md`, `translation--intro-1.83.rtl.md`, generated
`translation-1.83.rtl.md`.

### Scope

All 17 CUC lines (reverse; one to three words a line). Content: a creature of sea and sky – "tongues go, the heavens it
lashes, the sea – two tails" (3–7); "*tan*? into a muzzle you put, you bind (it) to the heights of the brick(s)? / Lebanon"
(8–10); something cracked, the multitude broken, "you shall not see a puddle"; "message, word" (11–14); fragments (15–17).

### Sources consulted

- CUC v0.2.8; renderings §4.1, §7 (1.3 III:40 *ištbm tnn*), §10 (*rks*, *šbm*). Pardee, Wyatt recalled only. Verses printed
  (≈8).

### Decisions

- **8 *tan*:** the base text (CUC = KTU³) reads *tan* (DULAT: a personal name), not *tnn*. The Hebrew follows the base,
  `*תַּאן*?`; the emendation to *tnn* `תַּנִּין` (one letter) is given in the note, and the parallels that depend on it (Job 7:12,
  40:25–26; 1.3 III:40) say so. The coordinator's `תַּנִּין` for this line could not be written: the `תַּנִּין` gate is licensed
  by *tnn* only, and the base has no *tnn*. **Decision for the coordinator.**
- **10 *lbnt*:** the base reads "brick(s)" `*לבנה*?`; the common emendation *lbnn* "Lebanon" (`לְבָנוֹן`, §1.2) in the note.
- *šbm* (noun) `מחסום` – the noun of the coordinator's *šbm* `חָסַם` (1.3 III:40; Ps 39:2); *rks* `תרכוס` (§10); *šyt* `תשית`.
- **5 *tlhk*** = *hlk* with *h*: `תהלך` [cognate], exactly the Hebrew `תִּהֲלַךְ` (Ps 73:9).
- *ṯrp* `*הצלף*`; *ḏnb* `זנב`; *lšn* `לשון`; *pll* `נסדק`; *tbʿ* `יצאו לדרך`; *ḫtt* `נחת`; *mk* `בִּצָּה`; *phy* `ראה`; *tḥm*
  `דבר`, *rgm* `מילה`.

### Open decisions for the user

- 8 *tan* or *tnn*; 10 *lbnt* or *lbnn* (both with the coordinator first: they decide whether the dossier may cite 1.83).
- 4 *mḫnm*, 11 *yymm*, 12 *ynhr* – untranslated.

### Progress log

- Drafted and saved; one reference fixed (5). Final: `verify 1.83 --strict` 17/17, 0 problems; quotes 0 problems.

### The text on its own terms

- **The cosmic serpent bound:** a creature that reaches sea and sky, tamed with a muzzle and tied up on the heights – told
  in short lines, perhaps a school text or a charm.

### Key parallels

- 5–6 ↔ Ps 73:9 `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם; וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` [cognate: *lšn* + the rare *tlhk*, with heavens and earth].
- 8 ↔ Ps 39:2 `מַחְסוֹם` [cognate]; Job 7:12 `הֲיָם-אָנִי אִם-תַּנִּין כִּי-תָשִׂים עָלַי מִשְׁמָר`, Job 40:25–26 [equivalent –
  **only with the emendation *tnn***].
- 7 ↔ Isa 7:4 `שְׁנֵי זַנְבוֹת` (the phrase only).

### Lines shared with other tablets

- 8 ~ 1.3 III:40 (*šbm*, and *tnn* if emended); 13 *mk* ~ 1.5 II:15; 9 *trks* ~ 1.1 V:10.

### Proposals for the shared renderings

1. **§4.1 / §7:** the corpus should say that 1.83:8 is *tnn* only by emendation (KTU³/CUC *tan*), before the dossier relies on
   it; if the coordinator adopts the emendation, the tool must license `תַּנִּין` there.
2. **New rows:** *šbm* (n.) `מַחְסוֹם`, *ṯrp* `*הצלף*`, *lšn* `לָשׁוֹן`, *ḏnb* `זָנָב`.

### Lessons for the guidelines

- Before building a key parallel, check that the base text actually reads the key word; famous readings are sometimes
  emendations.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KTU 1.23)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | ⸢i⸣qra . ilm . nʿ[mm] | אקראה את האֵלִים הנע[ימים], | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | divergence | `שַׁחַר`, אחד משני "האלים הנעימים" של הלוח (52), אצל ישעיהו אביו של "הילל", הכוכב שנפל; ראו 52. |
| 6 | lḥm . b lḥ⸢m⸣ . ⸢ay⸣ . ⸢w šty⸣ . b ḫmr yn ay | סעדו בלחם, כל אחד! ושתו בחֶמֶר יין, כל אחד! | `וְדַם עֵנָב תִּשְׁתֶּה חָמֶר` (דברים לב:יד) | cognate | *ḫmr* הוא `חֶמֶר`, היין התוסס |
| 6 | lḥm . b lḥ⸢m⸣ . ⸢ay⸣ . ⸢w šty⸣ . b ḫmr yn ay | סעדו בלחם, כל אחד! ושתו בחֶמֶר יין, כל אחד! | `הוֹי כָּל צָמֵא לְכוּ לַמַּיִם … לְכוּ שִׁבְרוּ וֶאֱכֹלוּ … יַיִן וְחָלָב` (ישעיהו נה:א) | equivalent | הזמנה לאכול ולשתות, "כל" מי שבא. |
| 8 | mt . w šr . yṯb . bdh . ḫṭ . ṯkl . bdh | מוֹת־וָשַׂר יושב; בידו שרביט שכול, בידו | `שְׁתֵּי אֵלֶּה רֶגַע בְּיוֹם אֶחָד שְׁכוֹל וְאַלְמֹן` (ישעיהו מז:ט) | cognate | הצמד *ṯkl* // *ulmn* (8–9) הוא `שְׁכוֹל וְאַלְמֹן` של ישעיהו. |
| 9 | ḫṭ . ulmn . yzbrnn . zbrm . gpn | שרביט אַלְמוֹן; יזמרוהו זומרי גפן, | `וְשֵׁשׁ שָׁנִים תִּזְמֹר כַּרְמֶךָ` (ויקרא כה:ג) | cognate | *zbr* הוא `זָמַר` (התחלופה *b* / *m*), זמירת הכרם. |
| 14 | ʿl . išt . šbʿd . ġzrm {ṭb}g . ṭb . ⸢g⸣d . ⸢b ḥ⸣lb . ⸢a⸣nnḫ b ḫmat | על האש שבע פעמים, הגיבורים {…}: טוב גַּד בחלב, *נענע* בחמאה! | `וְהוּא כְּזֶרַע גַּד לָבָן` (שמות טז:לא) | cognate | *gd* הוא `גַּד`, הכוסבר. |
| 14 | ʿl . išt . šbʿd . ġzrm {ṭb}g . ṭb . ⸢g⸣d . ⸢b ḥ⸣lb . ⸢a⸣nnḫ b ḫmat | על האש שבע פעמים, הגיבורים {…}: טוב גַּד בחלב, *נענע* בחמאה! | `לֹא תְבַשֵּׁל גְּדִי בַּחֲלֵב אִמּוֹ` (שמות כג:יט; שמות לד:כו; דברים יד:כא) | absent | אין כאן גדי ואין אם: ראו הערות. |
| 15 | w ʿl . agn . šbʿdm . dġ⸢ṯt⸣ [. dġ]⸢ṯ⸣t | ועל האגן שבע פעמים, *קטורת* [קטו]רת. | `וַיָּשֶׂם בָּאַגָּנֹת` (שמות כד:ו) | cognate | *agn* הוא `אַגָּן`, כלי פולחן. |
| 18 | ⸢w⸣ šm . ʿrbm . yr | ושם הנכנסים *יוֹרֶה* | `וְנָתַתִּי מְטַר אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ` (דברים יא:יד) | cognate | *yr* הוא `יוֹרֶה`. |
| 25 | špš . ⸢mṣprt⸣ . dlth⸢m⸣ | שַׁפְּשׁ *מסדרת* את דליותיהם, | `הִצִּית אֵשׁ עָלֶיהָ וְרָעוּ דָּלִיּוֹתָיו` (ירמיהו יא:טז) | cognate | *dlt* "זמורה" הוא `דָּלִית`. |
| 30 | […]⸢xxk⸣ . ⸢l⸣ gp . ym . w ⸢yṣġ⸣d . gp . thm | […]… אל חוף הים, וצעד אל חוף התהום. | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | cognate | הצמד ים // תהום |
| 30 | […]⸢xxk⸣ . ⸢l⸣ gp . ym . w ⸢yṣġ⸣d . gp . thm | […]… אל חוף הים, וצעד אל חוף התהום. | `בְּצַעְדְּךָ מִשְּׂדֵה אֱדוֹם` (שופטים ה:ד) | cognate | *ṣġd* הוא `צָעַד`. |
| 33 | w hlh . tṣ⸢ḥ⸣ . u⸢m⸣ . um . tirkm . yd . i⸢l⸣ . k ym | והנה זו צווחת: "אֵם, אֵם!" תאריך יד אֵל כים, | `יָד חָזִית` (ישעיהו נז:ח) | equivalent | `יָד` בלשון נקייה לאיבר. |
| 39 | l p⸢ḥ⸣m . il . aṯtm . k ypt . hm . aṯtm . tṣḥn | על הפחמים. אֵל – את שתי הנשים *יפתה*: אם שתי הנשים תצווחנה: | `פֶּחָם לְגֶחָלִים וְעֵצִים לְאֵשׁ` (משלי כו:כא) | cognate | *pḥm* הוא `פֶּחָם` |
| 39 | l p⸢ḥ⸣m . il . aṯtm . k ypt . hm . aṯtm . tṣḥn | על הפחמים. אֵל – את שתי הנשים *יפתה*: אם שתי הנשים תצווחנה: | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה` (שמות כב:טו) | cognate | *pty* הוא `פִּתָּה`, פיתוי אשה. |
| 41 | h[l] . ʿṣr . tḥrr . l išt . ṣḥrrt . l pḥmm | הֵן, הציפור נֵחֶרֶת על האש, *מִשְׁחַרְחֶרֶת* על הפחמים; | `אַל תִּרְאוּנִי שֶׁאֲנִי שְׁחַרְחֹרֶת שֶׁשְּׁזָפַתְנִי הַשָּׁמֶשׁ` (שיר השירים א:ו) | cognate | *ṣḥrr* הוא `שְׁחַרְחֹרֶת`, השחרה מחום; זה קרוב אמיתי, לא רק אוצר מלים של שיר השירים. |
| 50 | hn . špthm . mtqtm . mtqtm . k lrmn[m] | הנה, שפתיהן מתוקות, מתוקות כרימונים. | `כְּחוּט הַשָּׁנִי שִׂפְתוֹתַיִךְ … כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ` (שיר השירים ד:ג) | equivalent | שפתיים ורימון בשיר אהבה; כאן המלים קרובות (*špt*, *lrmn*), אבל הדימוי אחר: מתיקות, לא צבע. |
| 51 | ⸢b⸣m . nšq . w hr . b ḥbq . ḥmḥmt . tqt[nṣn w] | בנשיקה – הריון, בחיבוק – *יחום*; כורעות [ו] | `וּבְחֵטְא יֶחֱמַתְנִי אִמִּי` (תהלים נא:ז) | cognate | *ḥmḥmt* מן השורש של `יָחַם`, ההתעברות |
| 51 | ⸢b⸣m . nšq . w hr . b ḥbq . ḥmḥmt . tqt[nṣn w] | בנשיקה – הריון, בחיבוק – *יחום*; כורעות [ו] | `וַתִּכְרַע וַתֵּלֶד` (שמואל א ד:יט) | equivalent | הכריעה ללידה. |
| 52 | ⸢t⸣ldn . šḥr . w šlm . rgm . l il . ybl . a⸢ṯ⸣[ty] | וילדו שַׁחַר וְשָׁלֵם. מילה אל אֵל הובלה: "שתי נש[יי], | `הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | cognate | `שַׁחַר`, האל של השחר, אצל ישעיהו אבי "הילל", כוכב השחר |
| 52 | ⸢t⸣ldn . šḥr . w šlm . rgm . l il . ybl . a⸢ṯ⸣[ty] | וילדו שַׁחַר וְשָׁלֵם. מילה אל אֵל הובלה: "שתי נש[יי], | `וּמַלְכִּי צֶדֶק מֶלֶךְ שָׁלֵם` (בראשית יד:יח) | cognate | `שָׁלֵם` כשם עיר; הקשר לאל *šlm* שנוי במחלוקת. |
| 62 | l arṣ . špt l šm⸢m⸣ . w ⸢y⸣ʿ⸢rb⸣ . ⸢b⸣ phm . ʿṣr . šmm | לארץ, שפה לשמים, ונכנס בפיהם ציפור השמים | `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` (תהלים עג:ט) | cognate | אותה תמונה: פה מן הארץ עד השמים. |
| 63 | w dg b ym . w ndd . gzr [.] l ⟨g⟩zr [.] ⸢yʿ⸣db . u ymn | והדג בים. ונדדו גזר אל ⟨ג⟩זר; תיקנו – אם ימין | `אֲשֶׁר עָבַר בֵּין הַגְּזָרִים הָאֵלֶּה` (בראשית טו:יז) | cognate | *gzr* הוא `גֶּזֶר`, "חתיכה". |
| 64 | u šmal . b ⸢p⸣hm . w ⸢l⸣ [.] tšbʿn . ⸢y⸣ . aṯṯ . itrḫ | ואם שמאל – לפיהם, ולא שבעו. "הוֹ נשים (ש)ארשתי! | `וְאֵרַשְׂתִּיךְ לִי לְעוֹלָם` (הושע ב:כא) | equivalent | *trḫ* "לשאת אשה תמורת מוהר" = `אֵרַשׂ` במשמע, לא בשורש. |
| 65 | y bn . aš⸢l⸣d . šu . ʿ⸢db⸣ . tk . mdbr . qdš | הוֹ בנים (ש)הולדתי! שא, תקן (מנחה) בתוך מדבר קודש; | `יָחִיל יְהוָה מִדְבַּר קָדֵשׁ` (תהלים כט:ח) | cognate | אותו צירוף, *mdbr qdš* `מִדְבַּר קָדֵשׁ`. |
| 67 | tmt . ṯmn . nqpt . ʿd . ⸢i⸣lm . nʿmm . ttlkn | תמימות, שמונה הקפות, עד אשר האֵלִים הנעימים התהלכו | `שֶׁבַע שַׁבָּתוֹת תְּמִימֹת תִּהְיֶינָה` (ויקרא כג:טו) | cognate | *tmt* הוא `תְּמִימֹת`, ספירת זמן שלם |
| 67 | tmt . ṯmn . nqpt . ʿd . ⸢i⸣lm . nʿmm . ttlkn | תמימות, שמונה הקפות, עד אשר האֵלִים הנעימים התהלכו | `שָׁנָה עַל שָׁנָה חַגִּים יִנְקֹפוּ` (ישעיהו כט:א) | cognate | *nqp* הוא `נָקַף`, סיבוב השנים. |
| 75 | mġ . hw . lhn . lg . ynh | הגיע הוא: … לֹג יינו, | `וְלֹג אֶחָד שָׁמֶן` (ויקרא יד:י) | cognate | *lg* הוא `לֹג`, מידת הנוזלים. |

### Parallels index (KTU 1.24)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | ḫr⸢ḫb⸣ . mlk . ⸢qẓ⸣ . ḫrḫb . m | (בת) חִרְחִב, מלך הקיץ; חִרְחִב, מלך | `וְקַיִץ וָחֹרֶף וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | cognate | *qẓ* הוא `קַיִץ`. |
| 4 | ⸢y⸣rḫ . yṯkḥ . y⸢ḥbq⸣ . ⸢dt⸣ | יָרִחַ נִצְרַב, חובק את זו אשר | `עָשָׂה יָרֵחַ לְמוֹעֲדִים` (תהלים קד:יט) | cognate | `יָרֵחַ`, הירח שהוא כאן אל. |
| 6 | ṯrt . l b⸢n⸣t . ⸢h⸣l⸢l⸣ . [sn]⸢n⸣t | *שפע*, לבנות הִלָּל, ה[סנו]ניות; | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | cognate | *hll* הוא `הֵילֵל`, גרם שמים מאיר (כאן הירח החדש; בישעיהו כוכב השחר). |
| 7 | hl ġlm⸢t⸣ . t⸢l⸣d . b⸢n⸣ [xxx] | הֵן, העלמה תלד בן […] | `הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן` (ישעיהו ז:יד) | cognate | אותן שלוש מלים, *hl ġlmt tld bn* // `הִנֵּה הָעַלְמָה … יֹלֶדֶת בֵּן`: נוסחת בשורת לידה כנענית. |
| 10 | wyn . ⸢k⸣ mt⸢r⸣ḫt . b [hkl]h | …, כמאורשה בה[יכל]ו. | `נַעֲרָ בְתוּלָה מְאֹרָשָׂה לְאִישׁ` (דברים כב:כג) | equivalent | *mtrḫt* היא `מְאֹרָשָׂה` במשמע (לא בשורש). |
| 16 | ylak yrḫ n⸢yr š⸣mm . ʿm | שיגר יָרִחַ, נִיר השמים, אל | `לְמַעַן הֱיוֹת נִיר לְדָוִיד` (מלכים א יא:לו) | cognate | *nyr* הוא `נִיר`, "נר, מאור". |
| 19 | ⸢t⸣h . ⸢w⸣ atn mhrh l a | ואתן את מֹהַרָהּ לאביה: | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | cognate |  |
| 19 | ⸢t⸣h . ⸢w⸣ atn mhrh l a | ואתן את מֹהַרָהּ לאביה: | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | cognate |  |
| 19 | ⸢t⸣h . ⸢w⸣ atn mhrh l a | ואתן את מֹהַרָהּ לאביה: | `אֵין חֵפֶץ לַמֶּלֶךְ בְּמֹהַר` (שמואל א יח:כה) | cognate | *mhr* הוא `מֹהַר`, הכסף שהחתן משלם לאבי הכלה. |
| 20 | ⸢b⸣h . ⸢a⸣lp ksp . w rbt . ḫ | אלף כסף ורבבה זהב; | `וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | equivalent | תשלום בכסף שקול; ראו 34–37. |
| 25 | nʿmn . ⸢i⸣lm l ḫt⸢n⸣ | נַעֲמַן האֵלִים! התחתן | `וְהִתְחַתְּנוּ אֹתָנוּ` (בראשית לד:ט) | cognate |  |
| 25 | nʿmn . ⸢i⸣lm l ḫt⸢n⸣ | נַעֲמַן האֵלִים! התחתן | `וְעַתָּה הִתְחַתֵּן בַּמֶּלֶךְ` (שמואל א יח:כב) | cognate | *ḫtn* הוא `הִתְחַתֵּן`, להיות חתנו של מישהו |
| 25 | nʿmn . ⸢i⸣lm l ḫt⸢n⸣ | נַעֲמַן האֵלִים! התחתן | `נִטְעֵי נַעֲמָנִים` (ישעיהו יז:י) | cognate | *nʿmn* הוא `נַעֲמָן`. |
| 28 | ⸢y⸣ġtr . ʿṯtr . t | יעתיר עַתְּתַר: אָרֵשׂ | `וַיֶּעְתַּר יִצְחָק לַיהוָה לְנֹכַח אִשְׁתּוֹ` (בראשית כה:כא) | cognate | *ġtr* הוא `עָתַר`, "להתחנן" (ġ = ע). |
| 34 | yš⸢t⸣ . mṣb .mznm . umh | שת את עמוד המאזניים, אמה – | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק` (ויקרא יט:לו) | cognate | *mznm* ו־*abn* (37) הם `מֹאזְנַיִם` ו`אֲבָנִים`, המאזניים ואבני המשקל. |
| 47 | {hn}thn ṯlḫ⸢h⸣ w mlgh y | {…} שִׁלּוּחֶיהָ ו*מְלוּגָהּ*; הוֹ | `אַחַר שִׁלּוּחֶיהָ` (שמות יח:ב) | cognate |  |
| 47 | {hn}thn ṯlḫ⸢h⸣ w mlgh y | {…} שִׁלּוּחֶיהָ ו*מְלוּגָהּ*; הוֹ | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ אֵשֶׁת שְׁלֹמֹה` (מלכים א ט:טז) | cognate | *ṯlḫ* הוא `שִׁלּוּחִים`, הנדוניה שהאב "שולח" עם בתו. |

### Parallels index (KTU 1.114)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4 | trṯ . ⸢ʿd⸣ . ⸢škr⸣ . yʿdb . yrḫ | תירוש עד שכרון!" תיקן יָרִחַ | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר` (בראשית ט:כא) | cognate | *škr* הוא `שָׁכַר` (`../renderings.md` §4.3). |
| 6 | ṯlḥnt . il . d ydʿnn | שולחן אֵל. מי שמכירו | `שִׁבְעִים מְלָכִים … הָיוּ מְלַקְּטִים תַּחַת שֻׁלְחָנִי` (שופטים א:ז) | equivalent | מי שמלקט תחת שולחן המלך הוא המושפל. |
| 8 | y{.}lmn ḫṭm . tḥt . ṯlḥn | הלמו בשרביט תחת השולחן. | `הִכּוּנִי בַל-חָלִיתִי הֲלָמוּנִי בַּל-יָדָעְתִּי` (משלי כג:לה) | cognate | *hlm* הוא `הָלַם`, ובמשלי – השיכור שהוכה ואינו מרגיש. |
| 15 | a⸢šk⸣[r] . il . yṯ⸢b⸣ . ⸢b⸣ mrzḥh | שׁוּכַּר אֵל, יָשַׁב בַּמַּרְזֵחַ שֶׁלּוֹ, | `וְסָר מִרְזַח סְרוּחִים` (עמוס ו:ז) | cognate | *mrzḥ* הוא `מַרְזֵחַ`, משתה העשירים שעמוס מגנה |
| 15 | a⸢šk⸣[r] . il . yṯ⸢b⸣ . ⸢b⸣ mrzḥh | שׁוּכַּר אֵל, יָשַׁב בַּמַּרְזֵחַ שֶׁלּוֹ, | `אַל תָּבוֹא בֵּית מַרְזֵחַ` (ירמיהו טז:ה) | cognate | שם משתה האבל. |
| 16 | y⸢št⸣ . [y]⸢n⸣ . ʿd ⸢š⸣bʿ . trṯ . ʿd škr | שתה יין עד שובע, תירוש עד שכרון. | `אֶקְחָה יַיִן וְנִסְבְּאָה שֵׁכָר` (ישעיהו נו:יב) | equivalent | הזמנה לשתייה לשכרון. |
| 21 | b ḫrih . w ṯnth . ql . il . k⸢m mt⸣ | בצואתו ובשתנו. נפל אֵל כמֵת, | `לֶאֱכֹל אֶת חֹרָיהָם` (מלכים ב יח:כז) | cognate | *ḫru* הוא `חֲרָאִים` (הכתיב), "צואה" |
| 21 | b ḫrih . w ṯnth . ql . il . k⸢m mt⸣ | בצואתו ובשתנו. נפל אֵל כמֵת, | `כִּי כָּל שֻׁלְחָנוֹת מָלְאוּ קִיא צֹאָה` (ישעיהו כח:ח) | equivalent | השיכורים וצואתם בסעודה. |
| 28 | ⸢km⸣ . trpa . h⸢n⸣ nʿr | כאשר ירפאוהו, הנה הוא נעור. | `וַיִּקַץ כְּיָשֵׁן אֲדֹנָי כְּגִבּוֹר מִתְרוֹנֵן מִיָּיִן` (תהלים עח:סה) | cognate | האל המתעורר אחרי היין |
| 28 | ⸢km⸣ . trpa . h⸢n⸣ nʿr | כאשר ירפאוהו, הנה הוא נעור. | `מָתַי אָקִיץ אוֹסִיף אֲבַקְשֶׁנּוּ עוֹד` (משלי כג:לה) | equivalent | השיכור המתעורר. |
| 30 | ⸢w⸣ riš . pqq . w šrh | וראש *פקועה* ו*שרה*; | `וַיְלַקֵּט מִמֶּנּוּ פַּקֻּעֹת שָׂדֶה` (מלכים ב ד:לט) | cognate | *pqq* אולי הקרוב של `פַּקֻּעֹת`, צמח השדה |
| 30 | ⸢w⸣ riš . pqq . w šrh | וראש *פקועה* ו*שרה*; | `רִפְאוּת תְּהִי לְשָׁרֶּךָ` (משלי ג:ח) | cognate | *šr* "טבור" הוא `שֹׁר`, ובמשלי – מקום הרפואה. |
| 31 | yšt aḥdh . dm zt . ḫrpnt | ישית כאחד, בדם זית של חורף. | `וְקַיִץ וָחֹרֶף` (בראשית ח:כב) | cognate | *ḫrp* הוא `חֹרֶף`. |

### Parallels index (KTU 1.100)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | um . pḥl . pḥlt . bt . ʿn . bt . abn . bt . šmm . w thm | אם החמור, החֲמוֹרָה, בת המעיין, בת האבן, בת השמים והתהום, | `בִּרְכֹת שָׁמַיִם מֵעָל בִּרְכֹת תְּהוֹם רֹבֶצֶת תָּחַת` (בראשית מט:כה) | cognate | הצמד שמים // תהום. |
| 4 | mnt . nṯk . nḥš . šmrr . nḥš | מניין נשיכת נחש, מרורת נחש | `מְרוֹרַת פְּתָנִים בְּקִרְבּוֹ` (איוב כ:יד) | cognate | *šmrr* מאותו שורש כמו `מְרוֹרַת`, ובאיוב היא "מרורת פתנים" |
| 4 | mnt . nṯk . nḥš . šmrr . nḥš | מניין נשיכת נחש, מרורת נחש | `וְהָיָה אִם נָשַׁךְ הַנָּחָשׁ אֶת אִישׁ` (במדבר כא:ט) | cognate | נשיכת הנחש. |
| 5 | ʿ{x}qšr . lnh . mlḫš abd . lnh . ydy | *עקשן*: ממנו המלחש מאבד, ממנו יַדֶּה | `אֲשֶׁר לֹא-יִשְׁמַע לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | cognate |  |
| 5 | ʿ{x}qšr . lnh . mlḫš abd . lnh . ydy | *עקשן*: ממנו המלחש מאבד, ממנו יַדֶּה | `אִם יִשֹּׁךְ הַנָּחָשׁ בְּלוֹא לָחַשׁ` (קהלת י:יא) | cognate | *mlḫš* הוא `מְלַחֵשׁ`, ובמקרא הלחש נגד הנחש. |
| 6 | ḥmt . hlm . yṯq . nḥš . yšlḥm . ⟨nḥš⟩ ʿqšr | חֵמָה." אֲזַי *הרים* את הנחש, הסעיד את ⟨הנחש⟩ ה*עקשן*, | `חֲמַת-לָמוֹ כִּדְמוּת חֲמַת-נָחָשׁ כְּמוֹ-פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` (תהלים נח:ה) | cognate | `חֲמַת נָחָשׁ`, ובאותו מזמור הפתן החירש שאינו שומע למלחשים: הצירוף של הלחש. |
| 41 | mlk . ʿṯtrth . mnt . nṯk . nḥš . šmrr | מִלְכּוּ, עַשְׁתָּרוֹתָה: מניין נשיכת נחש, מרורת | `וְאֵת עוֹג מֶלֶךְ הַבָּשָׁן אֲשֶׁר יוֹשֵׁב בְּעַשְׁתָּרֹת בְּאֶדְרֶעִי` (דברים א:ד) | cognate |  |
| 41 | mlk . ʿṯtrth . mnt . nṯk . nḥš . šmrr | מִלְכּוּ, עַשְׁתָּרוֹתָה: מניין נשיכת נחש, מרורת | `הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת וּבְאֶדְרֶעִי` (יהושע יב:ד) | cognate | העיר `עַשְׁתָּרוֹת`, מושב עוג, "מיתר הרפאים". |
| 64 | w aršḫ . ṯrrt . ydy . b ʿṣm . ʿr{.}ʿr | ואַרְשַׁח *הנשגבת*; יַדֶּה בעצים – ערער, | `וְהָיָה כְּעַרְעָר בָּעֲרָבָה` (ירמיהו יז:ו) | cognate | *ʿrʿr* הוא `עַרְעָר`. |
| 65 | w b šḫt . ʿṣ . mt . ʿrʿrm . ynʿrah | ובשיחי עץ המָּוֶת; הערער *ינערהו*, | `כָּכָה יְנַעֵר הָאֱלֹהִים אֶת כָּל הָאִישׁ` (נחמיה ה:יג) | cognate | *nʿr* הוא `נִעֵר`. |
| 66 | ssnm . ysynh . ʿdtm . yʿdynh . yb | הסנסנים יסירוהו, ה*שטף* *יעדהו*, היובלים | `אֹחֲזָה בְּסַנְסִנָּיו` (שיר השירים ז:ט) | cognate | *ssn* הוא `סַנְסִן`, ענף התמר. |
| 69 | tplg . km . plg | נפלגה כפלג. | `כְּעֵץ שָׁתוּל עַל-פַּלְגֵי-מָיִם` (תהלים א:ג) | cognate | *plg* הוא `פֶּלֶג`. |
| 74 | mhry . w bn . bṯn . itnny | מוהרי, ובני פתן – אֶתְנַנִּי!" | `אֶתְנָה הֵמָּה לִי אֲשֶׁר נָתְנוּ לִי מְאַהֲבָי` (הושע ב:יד) | cognate | *itnn* מאותו שורש כמו `אֶתְנָה`, "מתנה". |

### Parallels index (KTU 1.107)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5 | [xxxxx]⸢xṭb⸣t . pẓr . pẓ⸢r⸣{r} . p nḥš | […]…טבת; התר, התר את פי הנחש! | `אֲשֶׁר לֹא-יִשְׁמַע לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | equivalent | הלחש פועל על הנחש עצמו; כאן "פי הנחש" הוא מקור הארס. |
| 8 | [npl . b š]⸢r⸣ . šrġzz . ybky . km nʿr | [נפל בַּ]שַּׂר שַׂרְגַּזַּז; בוכה כמו נער, | `וְהִנֵּה-נַעַר בֹּכֶה` (שמות ב:ו) | equivalent | הנער הבוכה (*nʿr* = `נַעַר` [cognate], *bky* = `בָּכָה` [cognate]). |
| 11 | [š]⸢rġzz⸣ . w tpky . ⸢b⸣[m….] ⸢nʿr⸣ [.] ⸢t⸣dm⸢ʿ⸣ . km | [שַׂ]רְגַּזַּז, ותבכה ב[…] נער, תדמע כמו | — | — | [מקבילה: 8–9]. |
| 15 | [šp]⸢š⸣ . b š⸢m⸣m . t⸢qr⸣u . ⸢x⸣[xxxxxxxxx]⸢x⸣{x}rt | [שַׁפְּ]שׁ בשמים קוראת: …[…]…רת | — | — | [מקבילה: 9 – אותה מלה במלה]. |
| 20 | [xxxxx]⸢h⸣ . mḫlpt [. xxxxxxxxxx] . ⸢amr⸣ | […]ה מחלפות […] אֹמֶר | `אִם תַּאַרְגִי אֶת שֶׁבַע מַחְלְפוֹת רֹאשִׁי עִם הַמַּסָּכֶת` (שופטים טז:יג) | cognate | *mḫlpt* היא המלה העברית, צמות השיער. |
| 31 | [xxxxx]⸢xs⸣r . n⸢x⸣[xx xxx xxx]⸢x⸣ . ḥrn | […]…סר, נ…[…]… חוֹרָן | — | — | [מקבילה: 29 – החתימה בשם חוֹרָן]. |
| 34 | [isp . š]⸢pš⸣ . l hr[m….] ġrpl . ʿl . ar⸢ṣ⸣ | [אספי, שַׁ]פְּשׁ, מן ההר[ים …] ערפל מעל הארץ | `כִּי הִנְנִי מְשַׁלֵּחַ בָּכֶם נְחָשִׁים צִפְעֹנִים אֲשֶׁר אֵין לָהֶם לָחַשׁ` (ירמיהו ח:יז) | equivalent | הנחש שאין לו לחש הוא האיום; כאן הלחש הוא הסילוק. |
| 35 | [lan….] ⸢ḥm⸣t . l ⸢p⸣ [n]ṯk . a⸢b⸣d . l p ak⸢l⸣ | [*תוקף* …] חֵמָה מפי הנושך, אבדון מפי האוכל; | `עָרוֹם שְׁאוֹל נֶגְדּוֹ; וְאֵין כְּסוּת לָאֲבַדּוֹן` (איוב כו:ו) | cognate | *abd* הוא `אֲבַדּוֹן`. |
| 42 | [yi]⸢s⸣p . ḥmt . mlk . b ʿṯtrt . yisp . ḥmt | [יא]סוף חֵמָה, מִלְכּוּ בעַשְׁתָּרוֹת יאסוף חֵמָה, | `הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת וּבְאֶדְרֶעִי` (יהושע יב:ד) | cognate | העיר `עַשְׁתָּרוֹת` בבשן, מושב עוג. |
| 45 | [as]⸢p⸣t . ḥmt . l p [. n]ṯk . abd . l p . akl . ṯmdl | [אס]פתי חֵמָה מפי הנושך, אבדון מפי האוכל, *תשישות*." | `חֲמַת תַּנִּינִם יֵינָם; וְרֹאשׁ פְּתָנִים אַכְזָר` (דברים לב:לג) | cognate | `חֲמַת` של זוחלים: המלה *ḥmt* היא `חֵמָה` המקראית, הארס |
| 45 | [as]⸢p⸣t . ḥmt . l p [. n]ṯk . abd . l p . akl . ṯmdl | [אס]פתי חֵמָה מפי הנושך, אבדון מפי האוכל, *תשישות*." | `חֲמַת עַכְשׁוּב תַּחַת שְׂפָתֵימוֹ סֶלָה` (תהלים קמ:ד) | cognate | הארס "תחת השפתיים", כאן "מפי הנושך". |
| 51 | [xxxxxxxxxxi]⸢l⸣m . rb⸢m⸣[xxxx]š⸢x⸣[xxx] | […אֵ]לִים רבים …[…]ש…[…] | — | — | [מקבילה: 2 – `אֵלִים רבים`]. |

### Parallels index (KTU 1.108)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | [h]⸢ln⸣ . yšt . rpu . mlk . ʿlm . w yšt | הִנֵּה, יִשְׁתֶּה רָפִא, מֶלֶךְ עוֹלָם, וְיִשְׁתֶּה | `וּמֶלֶךְ עוֹלָם` (ירמיהו י:י) | cognate | אותו תואר, *mlk ʿlm* |
| 1 | [h]⸢ln⸣ . yšt . rpu . mlk . ʿlm . w yšt | הִנֵּה, יִשְׁתֶּה רָפִא, מֶלֶךְ עוֹלָם, וְיִשְׁתֶּה | `כִּי רַק עוֹג מֶלֶךְ הַבָּשָׁן נִשְׁאַר מִיֶּתֶר הָרְפָאִים` (דברים ג:יא) | cognate | *rpu*, אבי ה*רפאים*, והמלך שמושבו בעשתרות ובאדרעי (2–3). |
| 2 | [il] ⸢g⸣ṯr . w yqr . il . yṯb . b ʿṯtrt | [אֵל] הַגִּבּוֹר וְהַיָּקָר, אֵל הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת, | `הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת וּבְאֶדְרֶעִי` (יהושע יב:ד) | cognate | אותם שני מקומות, באותו סדר (2–3), ואותו פועל *yṯb* = `יוֹשֵׁב`, על עוֹג "מיתר הרפאים" |
| 2 | [il] ⸢g⸣ṯr . w yqr . il . yṯb . b ʿṯtrt | [אֵל] הַגִּבּוֹר וְהַיָּקָר, אֵל הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת, | `וַיַּכּוּ אֶת רְפָאִים בְּעַשְׁתְּרֹת קַרְנַיִם` (בראשית יד:ה) | cognate | הרפאים בעשתרות. |
| 3 | il ṯpẓ . b hdrʿy . d yšr . w yḏmr | אֵל השופט באֶדְרֶעִי, אשר ישיר ויזמר | `וְאֵת עוֹג מֶלֶךְ הַבָּשָׁן אֲשֶׁר יוֹשֵׁב בְּעַשְׁתָּרֹת בְּאֶדְרֶעִי` (דברים א:ד) | cognate | **אֶדְרֶעִי**, העיר השנייה של עוג. |
| 4 | b knr . w ṯlb . b tp . w mṣltm . bm | בכינור ובחליל, בתוף ובמצלתיים, ב־ | `וְלִפְנֵיהֶם נֵבֶל וְתֹף וְחָלִיל וְכִנּוֹר וְהֵמָּה מִתְנַבְּאִים` (שמואל א י:ה) | cognate | אותם כלים (תוף, כינור), ו־*ṯlb* מקביל ל`חָלִיל` |
| 4 | b knr . w ṯlb . b tp . w mṣltm . bm | בכינור ובחליל, בתוף ובמצלתיים, ב־ | `וְלִפְנֵיהֶם נֵבֶל וְתֹף וְחָלִיל וְכִנּוֹר וְהֵמָּה מִתְנַבְּאִים` (שמואל א י:ה) | equivalent |  |
| 4 | b knr . w ṯlb . b tp . w mṣltm . bm | בכינור ובחליל, בתוף ובמצלתיים, ב־ | `בְּשִׂמְחָה וּבְשִׁרִים בְּתֹף וּבְכִנּוֹר` (בראשית לא:כז) | cognate | שיר, תוף וכינור, כמו ב־3–4. |
| 5 | rqdm . d šn . b ḥbr . kṯr . ẓbm | ה*מרקדות* אשר (מ)שן, בחברי כּוֹתַר ה*צבאים*? | `וַיַּעַשׂ הַמֶּלֶךְ כִּסֵּא שֵׁן גָּדוֹל` (מלכים א י:יח) | equivalent | *šn* "שן" כחומר (שנהב), אם זו הקריאה. |
| 8 | [bʿ]⸢l⸣t . kpṯ . w ʿnt . di . dit . rḫpt | [בע]לת ה*כיפה*, ועֲנָת – הדאה הדואה, המרחפת | `כְּנֶשֶׁר יָעִיר קִנּוֹ עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | cognate | *rḫp* הוא `רִחֵף`, ריחוף של עוף טורף מעל |
| 8 | [bʿ]⸢l⸣t . kpṯ . w ʿnt . di . dit . rḫpt | [בע]לת ה*כיפה*, ועֲנָת – הדאה הדואה, המרחפת | `וְאֶת הַדָּאָה וְאֶת הָאַיָּה לְמִינָהּ` (ויקרא יא:יד) | cognate | *diy* הוא `הַדָּאָה`, העוף הטמא |
| 8 | [bʿ]⸢l⸣t . kpṯ . w ʿnt . di . dit . rḫpt | [בע]לת ה*כיפה*, ועֲנָת – הדאה הדואה, המרחפת | `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר` (דברים כח:מט) | cognate | *dʾy* "לדאות" |
| 8 | [bʿ]⸢l⸣t . kpṯ . w ʿnt . di . dit . rḫpt | [בע]לת ה*כיפה*, ועֲנָת – הדאה הדואה, המרחפת | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | cognate | אותו פועל, ואותה צורה (בינוני נקבה, `מְרַחֶפֶת`). |
| 12 | [xxxxxxxx]⸢x⸣d . il . šdy ṣd mlk | […]…ד, אֵל השדה, ציד המלך? | `אֲנִי אֵל שַׁדַּי הִתְהַלֵּךְ לְפָנַי וֶהְיֵה תָמִים` (בראשית יז:א) | divergence | *il šdy* נשמע כמו `אֵל שַׁדַּי`; DULAT קורא *šd* "שדה" (בכתיב *šdy*), והקרבה ל־`שַׁדַּי` שנויה במחלוקת: לא נבנה עליה דבר. |
| 20 | [ʿlm xxxx]⸢k⸣ . l tštk . l iršt | [עולם …]ך; אכן *תשיתך* לארשת | `תַּאֲוַת לִבּוֹ נָתַתָּה לּוֹ; וַאֲרֶשֶׁת שְׂפָתָיו בַּל-מָנַעְתָּ סֶּלָה` (תהלים כא:ג) | cognate | *iršt* היא `אֲרֶשֶׁת`, משאלת המלך – ובתהלים כא, כמו כאן, ברכה למלך. |
| 22 | [rpi .] ⸢m⸣lk . ʿlm . b ḏmr{i}h . b l | [רָפִא,] מלך עולם, בזמרתו, ב*תוקפו* | `עָזִּי וְזִמְרָת יָהּ וַיְהִי לִי לִישׁוּעָה` (שמות טו:ב) | cognate | הצמד *ʿz* // *ḏmr* (21–22, 24) הוא הצמד `עָז` // `זִמְרָה` של שירת הים. |
| 25 | nk . ḥtkk . nmrtk . b tk | *אבהותך*, תפארתך – בתוך | — | — | [מקבילה: 22–23 – אותה רשימה, בגוף שני]. |
| 26 | ugrt . ṯlṯ ymt . špš . w yrḫ | אוּגָרִית, … ימות שַׁפְּשׁ ויָרִחַ | `יִירָאוּךָ עִם-שָׁמֶשׁ; וְלִפְנֵי יָרֵחַ דּוֹר דּוֹרִים` (תהלים עב:ה) | equivalent | ברכת המלך לימות השמש והירח |
| 26 | ugrt . ṯlṯ ymt . špš . w yrḫ | אוּגָרִית, … ימות שַׁפְּשׁ ויָרִחַ | `כְּיָרֵחַ יִכּוֹן עוֹלָם; וְעֵד בַּשַּׁחַק נֶאֱמָן סֶלָה` (תהלים פט:לח) | equivalent | כסא המלך "כירח", עם `עוֹלָם`. |
| 27 | w nʿmt . šnt . il | ונעימות שנות אֵל. | `יְכַלּוּ יְמֵיהֶם בַּטּוֹב; וּשְׁנֵיהֶם בַּנְּעִימִים` (איוב לו:יא) | equivalent | הצמד ימים // שנים, עם נעימים (*nʿmt*) |
| 27 | w nʿmt . šnt . il | ונעימות שנות אֵל. | `יְכַלּוּ יְמֵיהֶם בַּטּוֹב; וּשְׁנֵיהֶם בַּנְּעִימִים` (איוב לו:יא) | cognate |  |
| 27 | w nʿmt . šnt . il | ונעימות שנות אֵל. | `נְעִמוֹת בִּימִינְךָ נֶצַח` (תהלים טז:יא) | cognate | *nʿmt* היא `נְעִמוֹת`. |

### Parallels index (KTU 1.82)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | [x]⸢m⸣ḫṣ . bʿ⸢l⸣ [.xx]y . tnn . w ygl . w ynsk . ⸢ʿd⸣[x] | […]מחץ בעל […]…י התנין, ונגלה? ונסך ע[…] | `מָחַץ רָהַב` (איוב כו:יב); `חֹלְלָה יָדוֹ נָחָשׁ בָּרִחַ` (איוב כו:יג) | cognate | הפועל *mḫṣ* = `מָחַץ`, ובאיוב מושאו רהב, ובפסוק הבא |
| 1 | [x]⸢m⸣ḫṣ . bʿ⸢l⸣ [.xx]y . tnn . w ygl . w ynsk . ⸢ʿd⸣[x] | […]מחץ בעל […]…י התנין, ונגלה? ונסך ע[…] | `הֲלוֹא אַתְּ הִיא הַמַּחְצֶבֶת רַהַב מְחוֹלֶלֶת תַּנִּין` (ישעיהו נא:ט) | cognate | תַּנִּין המובס |
| 1 | [x]⸢m⸣ḫṣ . bʿ⸢l⸣ [.xx]y . tnn . w ygl . w ynsk . ⸢ʿd⸣[x] | […]מחץ בעל […]…י התנין, ונגלה? ונסך ע[…] | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג) | cognate | *tnn*. |
| 2 | [x]⸢x⸣y . l arṣ [. i]⸢d⸣y . alt . l aḥš . idy . alt . in ly | […]…י לארץ; כבר – אָלָה! לא ארגיש; כבר – אָלָה! אין לי | `יִתֵּן יְהוָה אוֹתָךְ לְאָלָה וְלִשְׁבֻעָה בְּתוֹךְ עַמֵּךְ` (במדבר ה:כא) | cognate | *alt* היא `אָלָה`, הקללה הפועלת בגוף. |
| 3 | [x]⸢b/d⸣t . bʿl . ḥẓ . ršp . bn . km . yr . klyth . w lbh | […]…ת בעל, חץ רֶשֶׁף, בן – כמו יורה – כליותיו ולבו. | `הֵבִיא בְּכִלְיֹתָי בְּנֵי אַשְׁפָּתוֹ` (איכה ג:יג) | cognate | החצים, "בני האשפה", נכנסים לכליות: *bn* (החץ כ"בן") ו־*klyt* באותו צירוף |
| 3 | [x]⸢b/d⸣t . bʿl . ḥẓ . ršp . bn . km . yr . klyth . w lbh | […]…ת בעל, חץ רֶשֶׁף, בן – כמו יורה – כליותיו ולבו. | `שָׁמָּה שִׁבַּר רִשְׁפֵי-קָשֶׁת` (תהלים עו:ד) | cognate | "רשפי קשת", החצים של רֶשֶׁף |
| 3 | [x]⸢b/d⸣t . bʿl . ḥẓ . ršp . bn . km . yr . klyth . w lbh | […]…ת בעל, חץ רֶשֶׁף, בן – כמו יורה – כליותיו ולבו. | `יְפַלַּח כִּלְיוֹתַי וְלֹא יַחְמֹל` (איוב טז:יג) | cognate | החצים בכליות. |
| 7 | [x a]⸢ṭ⸣m . prṭl . l rišh . ḥmṯ . ṭmṯ . | [… אא]טום *פרטל* לראשו, *חומש*, *נידה*. | `כְּמוֹ-פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` (תהלים נח:ה) | cognate | הפועל *ʾṭm* = `אָטַם`, ובתהלים הפתן הוא שאוטם את אוזנו |
| 7 | [x a]⸢ṭ⸣m . prṭl . l rišh . ḥmṯ . ṭmṯ . | [… אא]טום *פרטל* לראשו, *חומש*, *נידה*. | `וַיַּכֵּהוּ אַבְנֵר בְּאַחֲרֵי הַחֲנִית אֶל הַחֹמֶשׁ` (שמואל ב ב:כג) | cognate | *ḥmṯ* הוא `הַחֹמֶשׁ`, הבטן. |
| 10 | […]⸢xk⸣ . ʿlt . bk . lk . l pny . yrk . bʿl . ⸢x⸣[xx] | […]…ך … בך, לך; לפני ירך בעל …[…] | — | — | [מקבילה: 38 – `לך פניו, ירך בעל`]. |
| 11 | [xxxx]⸢x⸣ . ʿnt . šzrm . tštšḥ . km . ḥb | […]… עֲנָת? …, *תשתוחח* כמו … | `מַה-תִּשְׁתּוֹחֲחִי נַפְשִׁי` (תהלים מב:ו) | equivalent | השתחחות, כפיפה (שורש קרוב, לא זהה). |
| 12 | [xxxxxx]⸢xx⸣[xx]⸢x⸣ . ʿpr . btk . yg⸢ršk⸣ | […]…[…]… עפר ביתך יגרשך | — | — | [מקבילה: 40 – `קיר ביתך יגרשך`]. |
| 14 | ⸢uḫd⸣ . ⸢b⸣ʿlm . ʿ[xxx]⸢l⸣ . ydk . amṣ . y⸢d⸣ | אחוז בעל, ע[…]ל; ידך אמיצה, יד | — | — | [מקבילה: 6 – `אחוזי בעל`]. |
| 15 | [xx .] ḥš . nm[xxxxxxxx]⸢l⸣ . w yḫnp⸢k⸣ | […] חוּשׁ! נמ[…]ל, ו*יחניפך* | `הֲלוֹא חָנוֹף תֶּחֱנַף הָאָרֶץ הַהִיא` (ירמיהו ג:א) | cognate | *ḫnp* = `חָנֵף`, טומאה והשחתה. |
| 16 | [x]⸢x⸣ . ylm . b⸢n⸣ . ⸢ʿ⸣nk . ṣmdm . špk | […]… הלם בן עינך; קרדומים – שפוך! | `שָׁמְרֵנִי כְּאִישׁוֹן בַּת-עָיִן` (תהלים יז:ח) | equivalent | *bn ʿn* "בן העין" = האישון, כמו `בַּת עָיִן`. |
| 18 | [xx .] ḥ[xx] bnt . ṣʿṣ . bnt . ḫrp . a⸢k/r⸣ | […] ח[…], *בנות* *זעזוע*, *בנות* *טירוף*, … | — | — | [מקבילה: 41 – `בנות זעזוע, בנות פרכוס`]. |
| 19 | [xxxxxxx]⸢x⸣ . aḥw . aṭm . prṭl . | […]…; אחיה, אאטום *פרטל* | — | — | [מקבילה: 7 – `אאטום *פרטל*`]. |
| 22 | [xxx]ṯk . ytmt . dlt . tlk . [xxx] . bm | […]…תך, יתומה, דלה, תלך […] ב־ | — | — | [מקבילה: 24 – `כמו דלה תלך`]. |
| 23 | [xxx]⸢x⸣qp . bn . ḥtt . bn ḥtt . [xx]⸢xx⸣ | […]…קפ, בן חתת, בן חתת […]… | `וַיְהִי חִתַּת אֱלֹהִים עַל הֶעָרִים` (בראשית לה:ה) | cognate | *ḥtt* = `חִתַּת`, האימה. |
| 33 | [xxxxxxx]llm . abl . mṣrpk . […] | […]…ללים, אוביל מצרפך […] | `מַצְרֵף לַכֶּסֶף וְכוּר לַזָּהָב` (משלי יז:ג) | cognate | *mṣrp* = `מַצְרֵף`. |
| 38 | [xxxxx]⸢t⸣drk . brḥ . arṣ . lk . pnh . yrk . bʿ⸢l⸣ | […]…תדרוך; בָּרִחַ ארץ, לך פניו, ירך בעל | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | cognate | *brḥ* = `בָּרִחַ`, תואר הנחש |
| 38 | [xxxxx]⸢t⸣drk . brḥ . arṣ . lk . pnh . yrk . bʿ⸢l⸣ | […]…תדרוך; בָּרִחַ ארץ, לך פניו, ירך בעל | `חֹלְלָה יָדוֹ נָחָשׁ בָּרִחַ` (איוב כו:יג) | cognate |  |
| 40 | [xxxx . p]ḫrk . ygršk . qr . btk . ygršk | [… א]ספתך יגרשך, קיר ביתך יגרשך; | — | — | [מקבילה: 12 – `עפר ביתך יגרשך`]. |
| 43 | [x]⸢w⸣ ʿṣm . k ʿṣm . l ttn . k abnm . l tiggn | […]ו עצים – כעצים לא יתנו, כאבנים לא *יהגו*. | `כִּי אֶבֶן מִקִּיר תִּזְעָק; וְכָפִיס מֵעֵץ יַעֲנֶנָּה` (חבקוק ב:יא) | equivalent | עץ ואבן המדברים; כאן הם **אינם** מדברים. |

### Parallels index (KTU 1.83)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5 | lšnm . tlhk . | לשונות תהלך, | `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם; וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` (תהלים עג:ט) | cognate | *lšn* + *tlhk* = `לְשׁוֹנָם תִּהֲלַךְ`, ועם השמים (6) והארץ (3) – אותו צירוף, אותה צורה חריגה של `הָלַךְ` עם ה"א. |
| 7 | ym . ḏnbtm . | ים – שני זנבות. | `מִשְּׁנֵי זַנְבוֹת הָאוּדִים הָעֲשֵׁנִים הָאֵלֶּה` (ישעיהו ז:ד) | cognate | הצירוף העברי `שְׁנֵי זַנְבוֹת`, מילוני בלבד (שם – אודים, לא בריה). |
| 8 | tan . l šbm | את *תַּאן*? למחסום | `אֶשְׁמְרָה לְפִי מַחְסוֹם` (תהלים לט:ב) | cognate | *šbm* (שם העצם) = `מַחְסוֹם`, מן השורש של `חָסַם` (*šbm* הפועל, §7) |
| 8 | tan . l šbm | את *תַּאן*? למחסום | `הֲיָם-אָנִי אִם-תַּנִּין כִּי-תָשִׂים עָלַי מִשְׁמָר` (איוב ז:יב) | equivalent | תנין שמושמים עליו משמר – **בתנאי התיקון** *tnn* |
| 8 | tan . l šbm | את *תַּאן*? למחסום | `הֲתָשִׂים אַגְמֹן בְּאַפּוֹ; וּבְחוֹחַ תִּקֹּב לֶחֱיוֹ` (איוב מ:כו) | equivalent | כבילת הבריה הימית בפיה (`תָשִׂים` כמו *tšt*, 9) – **בתנאי התיקון**. |
| 9 | tšt . trks | תשית, תרכוס | `תִּמְשֹׁךְ לִוְיָתָן בְּחַכָּה; וּבְחֶבֶל תַּשְׁקִיעַ לְשֹׁנוֹ` (איוב מ:כה) | equivalent | הבריה שלשונה נכבלת בחבל: לשונות (5) וכבילה (8–9) – **הקבלה של מוטיב**, לא של מלים. |

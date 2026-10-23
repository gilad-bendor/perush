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

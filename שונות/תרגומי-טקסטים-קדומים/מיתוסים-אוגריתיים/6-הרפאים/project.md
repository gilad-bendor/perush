# Project: the Rephaim texts (KTU 1.20, 1.21, 1.22) and the funerary liturgy (KTU 1.161)

Round 5, run 3. Coordinator: the run's session; translators as sub-agents, **one at a time** (guidelines §5.1), each with
`../translator-brief--ugaritic.md` (§9 for the epics).

## Scope

The three fragmentary tablets of the *rpum* ("Rephaim") texts, 97 lines as CUC (KTU³) numbers them: KTU 1.20 (23),
1.21 (14), 1.22 (60) – Danel (of the Aqhat epic) invites the Rephaim, the deified dead kings, to a feast at his
threshing floors and orchards; they come in chariots, feast seven days. With them **KTU 1.161** (34), the royal funerary
liturgy of Ugarit (the dead kings and the Rephaim of the earth summoned; the throne mourned; Šapšu's command; the
offerings and "peace" for the new king) – not in the plan's numeric range (1.39–1.148), added by the coordinator
because it is the Rephaim's own ritual text and the key witness for Deut 2:11, 3:11; Isa 14:9, 26:14; Ps 88:11.

## Base text and versions

CUC v0.2.8 (KTU³) with its machine parses; DULAT. **EUPT** has not published 1.20–1.22 (phase 1; checked 2026-10-31).
Rank 3 (not in the folder; never quoted verbatim): Lewis in *Ugaritic Narrative Poetry*, Pardee (*COS* I; *Ritual and
Cult at Ugarit* 2002 for 1.161), Wyatt 2002, Pitard, Levine & de Tarragon 1984 (1.161).

## Line numbering

KTU's (= CUC's): `### <column>:<line>` (1.20–1.22) and `### <line>` (1.161).

## Files

As the other projects: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, generated `translation-<KEY>.rtl.md`
and `translation.rtl.md`; one section per tablet below.

## Decisions (coordinator, before the first line)

- The corpus renderings bind (§1–§12.7): *rpum* `רְפָאִים`, *rpu* `רָפִא`, *dnil* `דָּנִאֵל`, *mt rpi* `אִישׁ רָפִא`, *rpi arṣ*
  `רפאי הארץ`, *qbṣ dtn* `קיבוץ דִּתָּן`, the feasting formula §6.11, the day-count formula §6.10.

## Progress log (coordinator)

- 2026-10-31: keys 1.20, 1.21, 1.22, 1.161 in the tool.

## KTU 1.20

### Scope
I:1–II:12 (23 lines; translator 3, Round 5 run 3). Column I keeps only line-ends (the Rephaim sacrifice, dine and drink "on a summer day"); column II the invitation "in my palace", the harnessing, the three-day journey, the arrival at the threshing floors and orchards, and Danel's answer. The project's first tablet: its annotated header and intro carry the signs and the project's recurring words.

### Sources consulted
CUC v0.2.8 (KTU³) through `ugarit_tools.py data`, `pars`, `lex`, `dulat`; DULAT short senses; the corpus's annotated files (1.1, 1.4, 1.14, 1.15, 1.17, 1.19, 1.108); the Hebrew Bible (`check_bible_quotes.py --show` for every verse). Rank 3 (Lewis in *UNP*, Pardee, Wyatt, Pitard) not in the folder: named only as "the usual reading". EUPT has not published 1.20–1.22. Cassuto 1951 does not cover them.

### Decisions
- **Shared words of the four tablets** (fixed here, applied in 1.21, 1.22, 1.161): *rpum* `רְפָאִים` (§1.1); *ilnym* `אֵלִיִּים` – the corpus's precedent (1.1 III:19, 1.3 IV:35, 1.6 VI:47 `הָאֵלִיִּים`), not §12.1's draft `אֵלֹנִים`?; *ndd* `נדד` (1.3 I:8, 1.4 III:12, 1.4 VI:10), *l tdd* `אכן ינדדו` (*l* asseverative, DULAT "certainly"); *aṯr(h)* `אחר` / `אחריו` (1.2 I:31 `אחר`; DULAT prep. "behind" at 1.20 II:2) – the readings "to the place" and "then" (CUC) in the notes; *ʔtw* `בא` (1.4 IV:32 `באה`; the cognate `אָתָה`, Deut 33:2, in the notes); *mṭʿt* `מַטָּע` [cognate] (new); *grn(t)* `גורן` / `הגרנות` (1.17 V:7, 1.14 III:8); *ṣmd* (vb) `צמד` (1.4 IV:9), *asr* `אסר` [cognate]; *mrkbt* `מרכבה`; *qdmym* `קַדְמוֹנִים` (1.4 VII:34); *spʾ* `טרף` (§12.4).
- **The journey** copies Kirta's march (1.14 IV:32–33): `הלכו יום ושני; אחר – עם שַׁפְּשׁ, בשלישי` (*aḫr špšm* "after – with Šapšu"); `pars` missed it (ratio < 0.75): found by `lex`.
- **Danel's answer** copies 1.19 IV:18–19 (`וענה דָּנִאֵל, איש רָפִא, / השיב הגבור, איש ההרנמי`).
- **II:6** `mġy rpum l grnt i[lm l] mṭʿt`: *ilm* is the parallel subject ("the Rephaim reached the threshing floors, the gods the orchards"), as 1.22 II:25–26 shows (*rpum l grnt // ilnym l mṭʿt*); II:9 keeps KTU³'s construct (`בגרנות האֵלִים, בקרב מ[טעי האֵלִיִּים]`).
- **II:1** *ṯmn* `שָׁם?` ("there", *ṯm* + *-n*), not CUC's "eight".
- **I:4** *sd* `סוֹד` [cognate] "council" (Ps 89:8, Jer 23:18); **I:5** *qẓ* `קַיִץ`; **I:8** *ʿrgzm* `*ערערים*` (as 1.24:43); **I:10** *amr* `אֹמֶר` (as 1.2 I:31).

### Open decisions for the user
- *aṯrh* in the invitation formula: `אחריו` (chosen) / "to the place" / "then" (CUC).
- *ṯmn* (II:1): "there" or "eight".

### Progress log
- 2026-10-31: drafted I:1–II:12; `fill`, `verify 1.20` clean after the section.
- Pass (a) fidelity: no change needed in 1.20 beyond the journey line (bracket `[שַׁפְּשׁ` whole, the root mostly restored).
- Pass (b) consistency: the journey line aligned with 1.14 IV:32–33 (`אחר – עם שַׁפְּשׁ`); the invitation lines checked against 1.21 / 1.22 by `verify` (0 differences).
- Pass (c) Hebrew: read the generated `translation-1.20.rtl.md`; no change.
- `build 1.20`; `verify 1.20 --strict`: 0 problems; `check_bible_quotes.py`: 0 problems (one remembered Ezek 14:14 wording with `וְאִיּוֹב` corrected to the verse's `נֹחַ דָּנִאֵל`).

### The text on its own terms
- The dead kings are guests, not ghosts: they are invited by name to a house, harness horses, ride chariots, travel three days and eat and drink (II:2–7; 1.22 I:21–24) – the afterlife of a royal line is a banquet of the living with their ancestors.
- They come at harvest-time ("a summer day", I:5) to the threshing floors and orchards (II:6–9): the dead are tied to the fertility of the land (cf. the Rephaim's "healing").
- *ilnym* / *ilm*: the dead are "divine ones" – the same word Šapšu uses for the dead under her (1.6 VI:47); 1 Sam 28:13 calls the dead Samuel `אֱלֹהִים`.
- The journey formula of the living (Kirta's march, 1.14 IV) is used unchanged for the journey of the dead.
- Danel, "the man of Rapiʾu", hosts the Rephaim: his epithet now reads as membership in their line.

### Key parallels
- [cognate] `רְפָאִים` (Deut 2:11; Ps 88:11): the Bible's two Rephaim (an ancient people, the shades) are one figure here – the ancient dead kings.
- [divergence] Gen 50:10: a threshing floor and seven days for a dead father – there mourning by the living, here the feast of the dead themselves (with 1.22 I:21–26).
- [cognate] Gen 46:29 `וַיֶּאְסֹר יוֹסֵף מֶרְכַּבְתּוֹ וַיַּעַל` – *asr*, *mrkbt*, *ʿly* in the same sequence (II:3–4).
- [cognate] Ps 106:28 `וַיִּצָּמְדוּ … וַיֹּאכְלוּ זִבְחֵי מֵתִים` – *ṣmd* and the sacrifices of the dead in one verse.

### Lines shared with other tablets
II:5 = 1.14 IV:32–33 (the journey); II:7–8 = 1.19 IV:18–19 (Danel's answer); II:1, II:4–7 = 1.22 II:20, 23–26 (copied there).

### Proposals for the shared renderings
- *ilnym* = `אֵלִיִּים` (revise §12.1's `אֵלֹנִים`?: the corpus already has `אֵלִיִּים` in 1.1, 1.3, 1.6).
- *mṭʿt* = `מַטָּע` [cognate] (Isa 61:3); *grnt* = `גרנות`.
- *ʔtw* = `בא` (confirming 1.4 IV:32); *aṯr* (prep.) = `אחר`.
- The Rephaim invitation formula (fixed in 1.21, see there).

### Lessons for the guidelines
- `pars` (ratio ≥ 0.75) misses a formula embedded in a longer or differently broken line (1.20 II:5 ↔ 1.14 IV:32–33): grep the formula's key words with `lex` too.

## KTU 1.21

### Scope
II:1–13, V:1 (14 lines; translator 3). The invitation formula twice (II:1–4 by the host of the *mrzʿ*, II:9–12 by El), a speaker who joins "my companions" and will arrive "at my house" (II:5–8), "El answered" (II:8), and a sitting "on the ground" (V:1).

### Sources consulted
As 1.20.

### Decisions
- **The invitation formula** (fixed here, copied in 1.22 II): `לכו אל ביתי, רפאים;` / `אצווח לכם, אקרא לכם` / `בקרב היכלי; אחריו הרפאים` / `אכן ינדדו, אחריו אכן ינדדו האֵלִיִּים.` *lk* = imperative `לכו` (DULAT under /h-l-k/; CUC's *l* + *k* rejected); *ṣḥ* `צווח` (§6.1), *qrʾ* `קרא` (licensed); *rpim* vocative without the article, *rpum* subject with it.
- *mrzʿy* `מַרְזֵחִי` "my marzeaḥ" [cognate] (*mrzʿ* = *mrzḥ*, DULAT "he of the *mrzḥ*"; Jer 16:5 `בֵּית מַרְזֵחַ` the house of mourning). The `מרזח` gate is not touched by the suffixed form.
- II:5–6 *y rp|[um] km rʿy*: the word *rpum* runs over the line (`הוֹ רְפָ־` / `[אִים]`); CUC's *umkm* "your mother" rejected; *rʿy* `רֵעַי` (vocalized, §5.3); *ht* `עַתָּה` (§10).
- II:7–8 *l bt|y*: the word *bty* runs over the line (`בית־` / `[י`).
- V:1 `[… יש]ב על הארץ` as 1.5 VI:13–14 (El mourning).

### Open decisions for the user
- Who speaks II:5–8 (Rapiʾu? Danel?) – left open in the notes.

### Progress log
- Drafted II:1–V:1; `verify 1.21` clean. Passes (a)–(c): no change; the formula's two copies (II:3–4, II:11–12) are identical bracket-free (verify: 0 differences). Quotes: 0 problems.

### The text on its own terms
- The *marzeaḥ* – the drinking society that the Bible knows as the house of mourning (Jer 16:5) – is the frame of the meal with the dead (II:1, 5).
- El himself repeats the invitation (II:8–12): the head of the gods sanctions the feast of the dead.
- A speaker goes "like my companions" (II:6): the living host, or a dead king, counts himself among the Rephaim.

### Key parallels
- [cognate] Jer 16:5 `בֵּית מַרְזֵחַ`, Amos 6:7 `מִרְזַח סְרוּחִים`.
- [divergence] Ps 88:11: the Rephaim do not rise in the Psalm; here they are called and come.

### Lines shared with other tablets
II:4 = II:12 (identical Hebrew); II:1, 9 ↔ 1.22 II:3, 8; II:2, 10 ↔ 1.22 II:3–4, 9; II:3, 11 ↔ 1.20 II:1, 1.22 II:20; V:1 ↔ 1.5 VI:13–14.

### Proposals for the shared renderings
- The invitation formula as above; *mrzʿ* = `מַרְזֵחַ` (a by-form of *mrzḥ*).

### Lessons for the guidelines
None beyond 1.20.

## KTU 1.22

### Scope
I:1–28, II:1–26, IV:1–6 (60 lines; translator 3). Column I: a blessing ("here is your son … your son's son after you"), the name of El and the blessing of the name of El, the Rephaim by name (Thamq, Yaḥpan), the slaughter, the table, the list of wines, the seven-day feast, Baal on the seventh day. Column II: the invitation three times, oil, a vow, a staff, "seat, throne of dominion", the harnessing and the arrival on the third day.

### Sources consulted
As 1.20.

### Decisions
- I:12–14 copy 1.4 VI:40–43 (= 1.1 IV:30–32) word for word; I:21–25 the §6.10 day-count (`הִנֵּה יוֹם וְשֵׁנִי` … `הִנֵּה בַּיּוֹם הַשְּׁבִיעִי`, written whole in I:25 though *[b] ymm* runs to I:26); *lḥm* G `סעד`, *šty* `שתה` (narrative past `סעדו … שתו`).
- I:6–7 `שם *ישבחו* את שם אֵל המְתִים, / *ישבחו* את ברכת שם אֵל הגבורים`: *ʿbš* "extol" (DULAT) `*ישבחו*` (new, italic); *mtm* `מְתִים` "men, heroes" (§1.1; DULAT here "hero") – the pun on "the dead" in the note; *ṯm … šm* "there … name" kept as Hebrew `שם … שם`. The reading "the name of El revives the dead" is not DULAT's and is in the note only.
- I:10 *mlk ʿllmy* `המלך העַלְלְמִי` (transcribed; DULAT "eternal"): `עוֹלָם` is reserved for *ʿlm*, and *ʿllmy* is another lemma – the link to 1.108's `מֶלֶךְ עוֹלָם` is in the note.
- I:11 *tštr* `*תתור*` (Gt of *twr*, `תּוּר`, Num 13:2); *ʿpt* `עוף` (licensed).
- I:15 *ʿbrm* `עוברים` [cognate]; *kš* `תמר`; I:16 *dpr* `*הדיף*`, *qʿl* `*פרח גפן*` (new, italic).
- I:18 *mrṯ* `עסיס` (new; `תירוש` stays *trṯ*'s), *srnm* `סְרָנִים` [cognate] (Judg 16:5), *bld* `בְּלַד` (transcribed); I:19 *ġll* `עַלָּל`, *išryt* `אושר` (§12.5), *ʿnq smd* `*ענק חרוזים*`; I:20 `לבנון, טל עסיס (אשר) חרש אֵל` – *ṭṣ* read *ṭl*; *ḥrṯ* `חרש` (1.5 VI:20). **No "wine of El's choice" on the tablet**: the verb is *ḥrṯ* "plough, cultivate".
- I:24 *prʿ* `*תנובה*` (DULAT "first fruit"; `ביכורים` avoided: the root בכר is *bkr*'s; `ראשית` – first drafted here – moved to *rišyt*, its cognate, in 1.119:25).
- II:16 *ydr* `ידור` (§12.2, licensed); II:17 *ʿṣ amr* `עץ? האֹמֶר`; II:18 `נַחַת, כֵּס השררה` from 1.16 VI:24 without *l*.
- II:24 *ʿrhm* `עריהם` ("their towns"; "their donkeys" `עַיִר` in the note).
- Column order: CUC's (I before II); the note says the invitation (II) may precede the feast (I).

### Open decisions for the user
- I:6–7: *ʿbš* "extol" (chosen) or "revive"; *mtm* "heroes" (chosen, `מְתִים`) or "the dead" (`מֵתִים`).
- I:10 *ʿllmy*: transcribed `העַלְלְמִי` (chosen) or `הנצחי` by sense.
- II:24 *ʿrhm*: "their towns" or "their donkeys".

### Progress log
- Drafted I:1–IV:6; `verify 1.22` clean; quotes: `גֵּי הָעֹבְרִים` (Ezek 39:11, remembered as `גֵּיא`) and `וּבְעוֹף הַשָּׁמַיִם` (Gen 1:26, a partial word) corrected.
- Pass (a) fidelity: I:4 `הצעיר?` marked uncertain; I:25 `ב…` keeps the preposition of *b ṣq*.
- Pass (b) consistency: invitation lines = 1.21 (verify: 0 differences); journey lines = 1.20 II:3–7; slaughter lines = 1.4 VI.
- Pass (c) Hebrew: read the generated translation; no further change.
- `verify 1.22 --strict`: 0 problems.

### The text on its own terms
- A blessing for a line, not a person: "your son, your son's son after you" (I:2–3) and the kiss of the young one (I:4) – the dead ancestors bless the living house with descendants.
- The name: "there … the name of El … the blessing of the name of El" (I:6–7): the gathering of the dead is a gathering around El's name.
- The Rephaim have names and patrons: Thamq "the Rapiʾu of Baal", the "warriors (*mhr*) of Baal and Anat", Yaḥpan "the prince, the king" (I:8–10) – dead warrior-kings in the gods' retinue.
- The feast of the dead is the feast of a temple dedication (I:12–14 = 1.4 VI:40–43) and a royal wine-list (I:17–20): the best the land produces, ending with Lebanon's wine "that El cultivated".
- Seven days of eating and drinking (I:21–25), the same count as Baal's palace-building and the Kotharot's feast: the dead keep the sacred calendar.
- A vow, a staff of command, "seat, throne of dominion" (II:16–18): the meal may seal a succession.

### Key parallels
- [cognate] Hos 14:8 `זִכְרוֹ כְּיֵין לְבָנוֹן` – "wine of Lebanon" (I:20).
- [cognate] 1 Kgs 1:19 `וַיִּזְבַּח שׁוֹר וּמְרִיא וְצֹאן` – the royal feast's victims (I:12–13); Mic 6:6 `בַּעֲגָלִים בְּנֵי שָׁנָה` (I:13).
- [divergence] Gen 48:10, 16 – the grandfather who kisses his son's sons and puts "my name and the name of my fathers" on them (I:3–7).
- [cognate] Judg 16:5 `סַרְנֵי פְלִשְׁתִּים` – *srnm* (I:18).
- [cognate] Zeph 3:9 `שְׁכֶם אֶחָד` – *ṯkm bm ṯkm* (I:5).
- [divergence] Judg 14:12 `שִׁבְעַת יְמֵי הַמִּשְׁתֶּה`; Gen 50:10 – seven days (I:21).

### Lines shared with other tablets
I:12–14 = 1.4 VI:40–43, 1.1 IV:30–32; I:21–25 = §6.10 (1.17 II:32–39, 1.14 III:11); II:3–11, 19–21 = 1.21 II; II:18 ↔ 1.16 VI:24, 1.3 IV:3, 1.6 V:6; II:22–26 = 1.20 II:3–7, 1.14 IV:32–33.

### Proposals for the shared renderings
- *ʿbš* `*ישבחו*`; *dpr* `*הדיף*`; *qʿl* `*פרח גפן*`; *mrṯ* `עסיס`; *srn* `סֶרֶן` [cognate]; *prʿ* (I) `*תנובה*`; *ʿnq* `ענק` [cognate]; *kš* `תמר`; *ʿbr* (n.) `עובר`; *twr* Gt `*תתור*`; *ʿllmy/n* transcribed (`עַלְלְמִי`, `עַלְלְמָן`); names `תַּמְק`, `יַחְפַּן החַיְלִי`, `תַּמְךְ`, `בְּלַד`, `עַלָּל`.

### Lessons for the guidelines
- The famous detail again: "the wine of El's choice" is not on the tablet (*yḥrṯ il* "El cultivated").

## KTU 1.161

### Scope
1–34 (34 lines; translator 3). The royal funerary liturgy: the title (1), the summons of the Rephaim of the earth, of the clan of Didanu, of four named Rephaim and of the last two dead kings (2–12), the weeping of throne, footstool and table (13–17), Šapšu's command to descend after "your lord" to the earth and the dust, under the ancestors (18–26), seven offerings and a bird (27–30), "peace" for the new king ʿAmmurāpiʾ, the queen Ṯaryelli, their houses, Ugarit and its gates (31–34).

### Sources consulted
As 1.20 (no Cassuto, no EUPT). Rank 3 (Bordreuil & Pardee 1982, Levine & de Tarragon 1984, Pardee 2002) not in the folder.

### Decisions
- *ẓlm* `צְלָלִים` [cognate] `צֵל` (Song 2:17 `הַצְּלָלִים`) – **not `צֶלֶם`** (*ṣlm*, another consonant; the `צלם` gate is untouched); *spr* `ספר`; *dbḥ* `זבח`.
- *qritm* `נִקְרֵאתֶם`, *qra* `נקרא`, *qru* `נקראו` – passives (the reading of the summons as a proclamation); *qbitm* `הוּזְמַנְתֶּם` (*qbʔ* "summon", new, no Hebrew cognate; `קרא` stays *qrʾ*'s).
- **The tablet reads *qbṣ ddn* (3, 10), not *dtn***: `קיבוץ דִּדָּן` – the same ancestor as Kirta's `דִּתָּן` (1.15 III:4, 15) in another spelling; the biblical `דְּדָן` (Gen 10:7, 25:3) in the notes. (The brief's "*qbṣ dtn*" is Kirta's form.)
- *rpi arṣ* `רפאי הארץ` (§12.7); *rpu* after a name `הרָפִא` (a title, with the article).
- Names: `אוּלְכָּן`, `תִּרְמָן` (distinct from the colophon's *ṯrmn* `תַּרְמָן` by vocalization), `סִדָּן־וְרַדָּן`, `תַּר־עַלְלְמָן` (DULAT's "eternal (bull)" in the note), `עַמִּתְתַמְרוּ`, `נִקְמַדּוּ` (§1.2), `עַמּוּרָפִי`, `תַּרְיֶלִּי`.
- 13–16: *ksu* `כִּסֵּא` (f. in Ugaritic, m. in Hebrew), *hdm pʿnh* `הדום רגליו`, *ṯlḥn mlk* `שולחן המלך`, *blʿ* `בלע`, *udmʿt* `דמעות`; prefix forms as present/jussive `יבכה`.
- 17 *ʿdmt* `שממה` ×3 (new); 18 *šḫn* `*לַהֲטִי*` (new, italic; cognate `שְׁחִין` in the note); 19 *nyr rbt* `הנִּיר הרַבָּה` (*nyr* `נִיר` §10, *rb* `רַב` §4.1 – the Gen 1:16 `הַמָּאוֹר הַגָּדֹל` contrast in the note), *ʿln* `ממעל`, *tṣḥ* `צווחת`.
- 20–22: *aṯr bʿlk* `אחר בַּעַלְךָ` (vocalized), *l ksih* `מִכִּסְאוֹ` (*l* "from", §10), *arṣ rd* `לארץ רֵד`, *špl* `שְׁפַל` (qal; `הִשְׁפִּיל` is *ġly*'s), *ʿpr* `עפר` (licensed); *tḥt* `תחת`.
- 26: the tablet has *tḥm* "message"; read as a slip for *tḥt*: `*תחת*` (italic, explained).
- 27–30: *ṯʿy* `והגש` (the verb "offer"; first drafted `והקרב`, moved because *šqrb* (1.40) is the cognate of `הקריב`; the officiant *ṯʿy* `שׁוֹעַ` stays the title); *ʿšty* `אחת` (cognate `עַשְׁתֵּי` noted); *qdm* D `תְּקַדֵּם` [cognate] (Mic 6:6); *ʿṣr* `צפור` (licensed).
- 31–34: *šlm* `שלום` (construct `שלום עמורפי`, no *l*); *bah* `*ביתו*` (obscure; by the parallel *bth*); *ṯġr* `שער` (§12.2).

### Open decisions for the user
- *ddn* `דִּדָּן` (chosen, the tablet's spelling) or `דִּתָּן` (one Hebrew with Kirta).
- *qra / qru*: passive (chosen) or imperative ("summon!").
- 20: Šapšu addresses the dead king (chosen) or the throne.
- 26: *tḥm* read *tḥt* (chosen) – and which Niqmaddu is meant.
- 18 *šḫn*: `*לַהֲטִי*` or another word for "be hot".

### Progress log
- Drafted 1–34; `verify 1.161`: the `כסא` gate blocked 20 *k{i}sih* – a tool bug (the deletion braces split the word in the licence text, and a ⸢ followed them): **minimal fix in `ugarit_tools.py` `license_text`** (a word with an in-word deletion is also licensed joined); `selftest` 51/0. Quotes: Num 16:1 `וְדָתָן` corrected.
- Pass (a) fidelity: every word accounted for; 24's note on the order of descent rewritten.
- Pass (b) consistency: 3 = 10 identical; 2 / 9 differ only as *rpim* / *rpi*; names checked against §1.2.
- Pass (c) Hebrew: read the generated translation; no change.
- `verify 1.161 --strict`: 0 problems; `check_bible_quotes.py` on all files: 0 problems.
- Revised during the rituals (1.40, 1.119), same session: 27–30 *ṯʿy* `והקרב` → `והגש` (*šqrb* is the cognate of `הקריב`); 1.22 I:24 *prʿ* `*ראשית*` → `*תנובה*` (*rišyt*, 1.119:25, is the cognate of `ראשית`). Rebuilt; `verify --strict` 0.

### The text on its own terms
- A royal death is a summons: the ancestors are called by name, from the mythic clan (Didanu) through named Rephaim to the father and the dead king himself (2–12) – the king joins a line, not a void.
- The furniture of kingship weeps (13–16): throne, footstool and table – the king's "body" of office – mourn; the table that fed the court now swallows its tears.
- "Desolation, and desolation, desolation!" (17): the lament is one word thrice.
- Šapšu, the sun who travels through the underworld, commands the descent (18–22): the dead king goes down "after his lord", "from his throne", "to the earth … to the dust", "under" each ancestor (22–26) – a descent into a hierarchy.
- Seven counted offerings and a bird (27–30): the ritual's number.
- The liturgy ends in peace for the living: the new king, the queen, their houses, the city and its gates (31–34) – succession sealed at the grave; within a generation Ugarit fell.

### Key parallels
- [equivalent] Ps 106:28 `וַיֹּאכְלוּ זִבְחֵי מֵתִים`; [absent] Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` – the title "sacrifice of the shades" is the rite the Bible condemns.
- [cognate] Isa 14:9 `עוֹרֵר לְךָ רְפָאִים … הֵקִים מִכִּסְאוֹתָם כֹּל מַלְכֵי גוֹיִם` – the Rephaim and dead kings receive a newly dead king; [divergence] there they rise from their thrones, here he goes down from his.
- [cognate] Isa 47:1 `רְדִי וּשְׁבִי עַל עָפָר … אֵין כִּסֵּא` – *yrd*, *ʿpr* and the lost throne together.
- [cognate] Jer 13:18 `לַמֶּלֶךְ וְלַגְּבִירָה הַשְׁפִּילוּ … כִּי יָרַד`; Isa 29:4 `וְשָׁפַלְתְּ מֵאֶרֶץ … וּמֵעָפָר` – the pair *rd // špl* with *arṣ* and *ʿpr* (21–22).
- [divergence] Gen 3:19 `וְאֶל עָפָר תָּשׁוּב` – dust as the end of every man vs. the king's descent to his fathers.
- [cognate] 1 Sam 25:6 `וְאַתָּה שָׁלוֹם וּבֵיתְךָ שָׁלוֹם`; Ps 122:7 `יְהִי-שָׁלוֹם בְּחֵילֵךְ` – the peace formula for a man, his house, a city and its gates.
- [cognate] Mic 6:6 `הַאֲקַדְּמֶנּוּ בְעוֹלוֹת` – *qdm* D for presenting an offering (30).
- [cognate] Song 2:17 `הַצְּלָלִים` – *ẓlm* (1); `צֶלֶם` is not involved.

### Lines shared with other tablets
2, 9 ↔ 1.15 III:3, 14 (`רפאי הארץ`); 3, 10 ↔ 1.15 III:4, 15 (`קיבוץ דִּתָּן`, spelled *ddn* here); 8, 24 `הרפאים הקדמונים` ↔ 1.20 II:10.

### Proposals for the shared renderings
- *ẓl* `צֵל` / `צְלָלִים` [cognate] (`צֶלֶם` never for *ẓl*); *qbʔ* `הוזמן`; *ʿdmt* `שממה`; *šḫn* `*להט*`; *ṯʿy* (vb) `הגיש` (revised during 1.40); *qdm* D `קִדֵּם`; *ʿšty* `אחת`; *špl* G `שָׁפֵל`; *ddn* `דִּדָּן` (= *dtn*); names `אוּלְכָּן`, `תִּרְמָן`, `סִדָּן־וְרַדָּן`, `תַּר־עַלְלְמָן`, `עַמִּתְתַמְרוּ`, `עַמּוּרָפִי`, `תַּרְיֶלִּי`.

### Lessons for the guidelines
- A licence built from the transliteration must not split a word at an in-word deletion (`k{i}⸢si⸣h`): strip the damage marks first, then join.
- The coordinator's "*qbṣ dtn*" for 1.161 is Kirta's spelling: the tablet has *ddn* – read the line data before trusting a key-case list.

## Parallels index

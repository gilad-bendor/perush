# Project: the Kirta epic (KTU 1.14, 1.15, 1.16)

Round 5, run 3 (`../../curated-translation-candidates.md`, "Round 5 plan", run 3). Coordinator: the run's session;
translators as sub-agents, **one at a time** (guidelines §5.1, range A), each with `../translator-brief--ugaritic.md`
(§9 is new for the epics).

## Scope

The three tablets of the Kirta epic, 703 lines as CUC (KTU³) numbers them: KTU 1.14 (300: the king bereft of wife and
children; El in a dream commands a sacrifice and a campaign to Udum for the princess Ḥurriya; the march, the vow to
Athirat, the siege, Pabil's offer and refusal), 1.15 (136: the wedding blessing, the eight sons and daughters, the
youngest made firstborn; the forgotten vow; Kirta's illness), 1.16 (267: Ilḥu and Thitmanit mourn the dying king; El
creates the healer Šaʿtiqat; the king restored; Yaṣṣib's revolt and his father's curse). The scribe Ilimilku.

## Base text and versions

**EUPT** (Göttingen, 2025; collated; CC BY-SA 4.0; `../../sources/EUPT/`) is the newest critical edition and **rank 1 for
the readings** (renderings §12.3); the line skeleton and the word parses are CUC's (KTU³; the same line numbers). Where
EUPT reads otherwise, the Hebrew follows EUPT and the פירוק says so. EUPT's English / German translation and commentary
are rank 3–4 (read after drafting, `ugarit_tools.py eupt KEY LABEL --tr`). Other rank 3 (not in the folder; never quoted
verbatim): Greenstein in *Ugaritic Narrative Poetry*, Pardee in *COS* I, Wyatt 2002, Ginsberg 1946.

## Line numbering

KTU's (= CUC's): `### <column>:<line>` (`### I:26`).

## Files

As the other projects: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated
`translation-<KEY>.rtl.md` and `translation.rtl.md` (`python3 -I -B ../ugarit_tools.py build`); one section per tablet below.

## Decisions (coordinator, before the first line)

- The corpus renderings bind (§1–§12); §12 holds the epics' names, key terms and the new gates (`נֶשֶׁר`, `אַלְמָנָה`,
  `יָתוֹם`, `מַצֵּבָה`, `קֶשֶׁת`, `בְּכוֹר`, `נֶדֶר`) and the *rḫp* check (Gen 1:2).
- Aqhat (project 4) is drafted first: its Hebrew binds every shared formula (renderings §12.4–§12.5).

## Progress log (coordinator)

- 2026-10-31: EUPT secured (`../../tools/eupt2md.py`), the `eupt` command added to the tool.

## KTU 1.14

Translator 2 of Round 5 run 3 (2026-10-31). Files: `annotated-1.14.rtl.md`, `translation--intro-1.14.rtl.md`, the
generated `translation-1.14.rtl.md` and `translation.rtl.md`.

### Scope

All 300 CUC lines, I:1–VI:41 (I 52, II 51, III 59, IV 52, V 45, VI 41); well preserved except the head of column I
(I:2–6), I:44–50 (El's offer, lost) and V:15–30. The tablet: Kirta's house destroyed (seven brothers, seven wives,
each by another power); his weeping and sleep; El descends in his dream and offers wealth, Kirta asks for sons (I);
El's command – purification, sacrifice on the tower, provisions, total mobilization, the march, the silent siege of
Udum, Pabil's embassy and the answer demanding Ḥurriya (II:6–III:49); the execution word for word (III:50–V:12), with
one thing El did not command: the vow at the sanctuary of Athirat of Tyre and the Sidonians (IV:32–43); Pabil's
embassy (V:13–VI:15) and Kirta's answer (VI:16–35); the messengers return (VI:35–41, the tablet ends mid-message).

### Sources consulted

CUC v0.2.8 through `ugarit_tools.py data / pars / lex / dulat / grep`; **EUPT 2025** (`eupt 1.14`, transliteration
and epigraphy before drafting each section; its German translation and philological notes with `--tr` only after
drafting, quoted briefly by name in the תרגומים bullets); `renderings.md` §1–§12.5; the earlier tablets for every
precedent (1.1–1.6, 1.17–1.19, 1.100, 1.107); the repository's Hebrew Bible (every verse printed first;
`check_bible_quotes.py` clean). Other rank-3 translations (Ginsberg, Greenstein, Pardee, Wyatt) only as "the usual
reading", never quoted. Cassuto 1951 has no Kirta.

### Decisions

- **EUPT against CUC (rank 1 for readings)**, about 20 places, each `EUPT:` in the פירוק: I:3 (*r*, not *k*); I:8
  *itb!d!* (= KTU³'s note); **I:15 *ṯar um* "the mother's kin" (`שְׁאֵר אם`) for CUC *ṯt rum* "two / wild bull"**;
  I:30 *km ḫmšt* "like fifths (of a shekel)"; I:33 *tlun!*; I:38 *mat* one word; III:5 *rbt!*; III:6 *šrn⟨n⟩*, *ʿrm*
  / *pdrm* singular (= Udum); III:9 *b m!qr*; III:11 *ḫ!mš*; III:31 *ytnt!*; III:37 *trbṣ{t}*; **III:59 *ʿṣr* for CUC
  *ṣr*** (the `צִפּוֹר` gate needed a licence fix, below); IV:14 *ṣbi?*; IV:42 *k!spm*; IV:52 *grnt!*; V:8 *qr!* /
  *ṯigt!*; V:11 *l* before *zġt*; V:17 no *krt*; V:20–21 *[a]bn … [mšdp]t*; VI:25 *šbḥ* = *špḥ*.
- **The command / execution / message chains** were fixed at the first copy and copied (II:9–III:19 → III:52–V:12;
  III:20–32 → V:31–45, VI:1–15; III:33–49 → VI:17–35). The differences are the tablet's own and are noted at their
  lines: tense (command future, narrative past: the only two repeated-line differences `verify` lists, II:30/IV:11,
  II:45/IV:23, justified); *yḥd* / *aḥd* (`היחיד` / `האחד`); the bridegroom *yṣi* "goes out" / *ybl* "was brought"
  (`ויצא` / `והובל`, IV:26 – the one change of substance); the execution merges II:13–14, drops II:37–38 and the
  arrow ban III:12–14; the vow interrupts the seven-day march (3 + 4 days); in the messages *ng* and *rḥq* change
  places (VI:14–15) and the order of III:26–32 is changed (V:39–45 = VI:9–15); Kirta's answer omits III:44–45.
- **I:12 *l ypq***: the negation (DULAT, EUPT): `אשת צדקו – לא הֵפִיק` (the usual older reading "indeed he found" in
  the note and a footnote). *ypq* = `הֵפִיק` (Prov 18:22 `וַיָּפֶק רָצוֹן`; same root as 1.4 VI:56 *pq*).
- **The opening's words:** *umt* `אֻמָּה` (precedent); *ʿrw* `עֻרְעֲרָה` (Ps 137:7 `עָרוּ עָרוּ`); *ḥtk* (II)
  `שׁוֹשֶׁלֶת` (DULAT "lineage"; EUPT "dominion" noted; *ḥtk* (I) stays `מְחוֹלֵל`); *rš(š)* `רֻשַּׁשׁ` (Mal 1:4);
  *grdš* `נֶהֱרַס`; *mknt* `מְכוֹנָה`; *ṯbt* `שֶׁבֶת`; *špḥ* `מִשְׁפָּחָה` (1.6 I:30; also "offspring" III:40, 48);
  *yrṯ* `יוֹרֵשׁ` (Gen 15:3); *pḫyr* `אֲסֻפָּה`; the deaths: *kṯr* (II) `*בכושר*`, *zbln* `דְּוַי`, *ʾsp* Gt `אסף לו`,
  *ġlm ym* `עלמי ים`, *šlḥ* `שֶׁלַח` (Joel 2:8, Job 33:18).
- **The dream:** *ḥlm* `חלום`, *ḏhrt* = *ḏrt* = *hdrt* `חזיון` (one word, three spellings, EUPT); *nhmmt* `תנומה`
  (Job 33:15); *ntk* `נִתַּךְ`; *lʾy* `הֶלְאָה`; *qmṣ* `*התכרבל*` (`התכווץ` is *nġṣ*'s); *yḫṭ* `הקיץ`; *ab adm*
  `אבי אדם`; *nʿmn ġlm il* `הנעמן, עלם אֵל`; *ʿbd il* `עבד אֵל`; *mat* `מה` (Gen 21:17 `מַה לָּךְ` in the note).
- **The offer / refusal:** *lm ank ksp* `למה אני – כסף` (the pronoun kept); *yrq ḫrṣ* `ירקרק זהב` (Ps 68:14 `יְרַקְרַק
  חָרוּץ`); *yd mqmh* `*עם* מקומו` (EUPT "samt seinem Fundort"); *ʿbd ʿlm* `עבד עולם`; *trbṣ* `מרבץ`; *bn amt* `בן
  אמה`; *mʾd* D `אַשְׂגֶּה` (`ארבה` avoided: *irby*; `הפרה` avoided: Gen 1:28).
- **The rite:** *rḥṣ* Gt `התרחץ`, *ʾdm* N `התאדם` (Prov 23:31); *amt* (II) `אמה` (the cognate); *ḫmt* `סוכה` (`אוהל`
  is *ahl*'s); *llu* `טלה`; *nzl* `*תקרובת*`; *msrr* `*קרביים*` (DULAT; EUPT "a bird"); *gl* `גֻּלָּה` (Zech 4:2,
  Eccl 12:6); *ḥtṯ* `כסף` (an accepted split with *ksp*: a Hittite loanword for silver); *nbt* `נופת`; *mgdl* `מגדל`;
  *ẓr* `גו`; *ḥmt* `חומה`; *šrd* `שֵׁרֵת` (EUPT ~ Heb. šrt); *mṣd* `ציד`; *ʿdb* `תיקן`.
- **Provisions and army:** *akl* `אוכל` (Gen 41:35, 48); *bt ḫbr* `בֵּית־חֲבוּר` (a place name, perhaps Kirta's town);
  *ʾpy* `אפה`; *mġd* `מחיה` (`מזון` is *zn(t)*'s, 1.1 IV:16); *ʿdn* `המון`; *ngb* `סֻפַּק`; *ṣbu ṣbi* `צבא הצבא`;
  *mʿ* `*יחדיו*`; *ul* `חיל`; *ḫpṯ* `חָפְשִׁים` (1.4 VIII:7's precedent; the meaning "levies" in the note: the
  Akkadian false friend *ḫupšu*); ***ṯnn* `*שִׁנְאַנִּים*`** (not *tnn* `תנין`! a trap; the tie to Ps 68:18 שִׁנְאָן in a
  note and footnote); *hg* `*חשבון*`; *ḫḏḏ* `*סערה*`; *yr* `יורה`; *aṯr* `אחר`.
- **The mobilization (II:43–50):** *yḥd* `היחיד`; *almnt škr tškr* `האלמנה – שָׂכֹר תִּשְׂכֹּר` (the *śin* verb
  vocalized against *škr* "be drunk"; Gen 30:16 `שָׂכֹר שְׂכַרְתִּיךָ`); *zbl* (III) `הַדָּוֶה` (DULAT "one carried"),
  *ʿrš* `ערש`; *ʿwr* `עיוור`, *mzl* `*גִּשֵּׁשׁ*`; ***trḫ ḥdṯ* `מְאָרֵשׂ חדש`** (*trḫ* = `אֵרַשׂ`, §10); *bʿr* (II)
  `נָטַשׁ`; *ṯn* `לַשֵּׁנִי`; *nkr* `נכרי`; *mddt* `חביבה`; *irby* `אַרְבֶּה`, *ḥsn* `חסיל` (`חגבים` is *qṣ*'s),
  *škn* `שכן`, *pat mdbr* `פאת המדבר`.
- **March and siege:** *lk* `לֵךְ` + §6.10; *mk špšm b šbʿ* `הנה עם שַׁפְּשׁ, בַּשְּׁבִיעִי` (`שמש` never; "with Šapšu" =
  at sunrise / sunset); *aḫr* `אחר`; *gry* `התגרה` (Deut 2:24); *šr* (II) `*הֵצִיק*`; *pdr* `עיירה`; *sʿ*
  `*נסחף*` (DULAT; EUPT "flee"); *ḥṭbt* `חוטבת`, *ḥpšt* `*מחפשת*`, *npk* `מבוע`, *šibt* `שואבת`, *mqr* `מקור`, *mla*
  `מילא` (Josh 9:21, Gen 24:11, 16); *dmm* `דּוֹם` / `דָּם`; *ḥẓ* `חֵץ` (§12.4); *ʿly* Š `הֶעֱלָה`; *ndp* Š `הֵטִיל`;
  *qr* `שאון`; *ṯigt* `שאגה`; *ibr* `אביר`; *nhqt* `נהקה`; *gʿt* `געייה`; *zġt* `*נביחה*`; *klb ṣpr* `כלבי *השמירה*`
  (EUPT; DULAT *ṣpr* "bird"); *ṯrrt* `*הַנִּשְׂגֶּבֶת*` (§12.1).
- **The embassy:** *lak* `שיגר`; *mswn* `*מחנה*` (EUPT "Lager"); *tḥm* `דבר` (§6.4); *šlmm* `שלמים` (here "peace
  gifts", EUPT); *ng* `נוד`; *rḥq* `רחק`; *ṣwr* `צָר (על)` (Deut 20:19); *ytnt* `מַתַּת`; *ušn* `תשורה` (`שי` is
  *mġẓ*'s); *ṯwb* Š `הָשֵׁב`; *mṯt* `גבֶרֶת` (§12.1); *nʿmt* `נעימה`; *tsm* `יפעה` (`יופי` is *ysmt*'s); *ʿq*
  `אישון`; *ib* `*טוהר*` (Ex 24:10 in the note); *iqnu* `ספיר`; *ʿpʿp* `עפעף`; *sp* `סַף` (`סֵפֶל` is *bk*'s);
  *ṯrml* `*בַהַט*`; *šlw* `אֶשְׁלֶה`; *ṣp* `מבט`; *wld* `ותלד`.
- **The vow (IV:34–43):** *qdš* `קודש`; *aṯrt ṣrm* `אֲתִירַת צוֹר`, *ilt ṣdynm* `אֵלַת צִידוֹנִים` (biblical place forms;
  1 Kgs 11:5 `אֱלֹהֵי צִדֹנִים` in the note); *ndr* `נדר` (reserved); *ṯʿ* `השׁוֹעַ` (§1.2); ***i iṯt* `*הוֹ, יֵשׁ*`**
  (an oath by the goddess's existence; *iṯ* = `יש`, 1.3 III:21; Gen 28:16 `אָכֵן יֵשׁ יְהוָה` in the note); *hm* `אם`;
  *lqḥ* `לקח`; *ʿrb* Š `הכניס`; *ġlmt* `עלמה`; *ṯnh* `מִשְׁנֵהָ` (Gen 43:12 `וְכֶסֶף מִשְׁנֶה`); *ṯlṯth* `שִׁלּוּשָׁהּ`.
- **Vocalization:** names at their first occurrence and ★ (`כִּרְתָּא` always, `אֵל`, `רֶשֶׁף`, `דָּגָן`, `עֲנָת`,
  `עַתְּתַרְת`, `צוֹר`, `צִידוֹנִים`, `אוּדֻם` where it could read "red"), and ambiguous or archaic forms (`שָׂכֹר`,
  `הַדָּוֶה`, `לֵךְ`, `דּוֹם`, `דָּם`, `צַק`, `תָּצַר`, `הָשֵׁב`, `נוּד`, `אֶשְׁלֶה`, `הֵפִיק`, `מֵתָה`); first-draft
  over-vocalization of section 1 removed.

### Open decisions for the user

1. I:12 *l ypq*: "he did **not** obtain his rightful wife" (DULAT, EUPT; chosen) or "indeed he found …"?
2. I:15: EUPT's *ṯar um* "the mother's kin" (`שְׁאֵר אם`) – meaning uncertain; KTU³'s *ṯt rum* gives no sense.
3. *ḥtk* (I:10, 21–22): "lineage" (DULAT; `שושלת`) or "dominion" (EUPT)?
4. II:38 *ṯnn*: `*שנאנים*` (the possible link to Ps 68:18) or plain "archers"?
5. *msrr* (II:17, III:59): entrails (`*קרביים*`) or a kind of bird (EUPT)?
6. III:7–9 *sʿt*: "swept away" (DULAT; `*נסחפה*`) or "fled" (EUPT)?
7. III:19 *klb ṣpr*: "watchdogs" (EUPT) or "dogs of birds" (DULAT *ṣpr*)?
8. III:43–44, the bride's eyes: *ib* (`*טוהר*` / "stones" / "fruit"), *ṯrml* (`*בהט*`), *tḥgrn* (lost).
9. IV:38 *i iṯt*: the oath formula `*הוֹ, יֵשׁ*` (literal) or a freer "by the life of"?

### Progress log

- Drafted in thirteen sections, saved in five batches, each filled and verified on saving (I:1–25; I:26–II:5; II:6–III:49; III:50–IV:43;
  IV:44–VI:41).
- Pass (a) fidelity: every `[ ]` against CUC and EUPT (II:13 `[ביד]ך` corrected from a typo `[בידי]ך`); the readings of
  EUPT listed above; every word of the פירוק accounted for.
- Pass (b) consistency: the three command / execution / message chains compared string by string (above); every new
  Hebrew word grepped (`grep --all`, `lex`): collisions found and fixed before saving – `שַׁי` (*mġẓ*) → `תשורה` for
  *ušn*; `מזון` (*zn*) → `מחיה` for *mġd*; `סֵפֶל` (*bk*) → `סַף` for *sp*; `מְעִי` (*mmʿ*) → `*קרביים*` for *msrr*;
  `התכווץ` (*nġṣ*) → `*התכרבל*`; `חגבים` (*qṣ*) → `חסיל`; `אוהל` (*ahl*) → `סוכה`; IV:15 `*יחדיו*` italic as II:34.
- Pass (c) Hebrew: `translation-1.14.rtl.md` read through; over-vocalized words unvocalized (III:16, III:40, IV:34,
  IV:41, V:13); four footnotes (I:12, II:38, II:47, IV:37).
- `ugarit_tools.py build 1.14`; `verify 1.14 --strict`: 300 entries, 0 problems, 2 repeated-line differences (tense,
  justified at IV:11 and IV:23); `check_bible_quotes.py` on the three files: 0 problems.
- Tool: two minimal fixes, reported to the coordinator: `eupt --tr` never printed the translation (the flag was
  stripped from the argument list before the test); and the licence text of a Kirta line now includes EUPT's
  transliteration (III:59 CUC *ṣr*, EUPT *ʿṣr*: the `צִפּוֹר` gate blocked the right word). `selftest` 51/0.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against EUPT and CUC, and the command /
  execution pairs (II:9–III:14 → III:52–V:12) and the messages (III:22–49 → V:30–VI:15, VI:17–35) compared word by word.
  Identical Ugaritic already had identical Hebrew, and every difference the verifier lists (II:30 / IV:11, II:45 / IV:23)
  is the tablet's. **26 `>` lines changed**, each with a `(תיקון סוקר: …)` note. 22 of them are brackets or `?`: one sign
  or an ending restored → no bracket (I:2, I:8, I:9, I:42, II:10, II:13, II:19, III:43, IV:33, IV:48, V:12, V:13, V:28,
  V:29, VI:1, VI:6, VI:10–13, VI:15); II:14 the bracket had covered the read *ymn*. **3 commands vocalized as
  imperatives** (II:20–21 `עֲלֵה … וַעֲלֵה … רְכַב`, II:23 `זְבַח`): their executions IV:2–5 (`ועלה … רכב`, `זבח`, past) were
  spelt with the same letters. italics for *ṯrrt* `*הנשגבת*` (§12.6) at V:42 and VI:12 (VI:12 also counted among the brackets); 1.15 IV:9, IV:20 and V:26 italicized
  the same way. פירוק was added to 3 entries (IV:45, V:4, V:5). No meaning, negation or *l* errors were found. The
  shorter, damaged messages were left as KTU³ / EUPT restore them, with their brackets. Rebuilt; `verify 1.14 1.15 1.16
  --strict` 0 problems (the same 7 justified repeated-line differences); quotes 0.

### The text on its own terms

- **Every death has its power** (I:14–21): the seven wives die by departure, in health, by sickness, by Resheph, by
  Yam's lads, by the *šlḥ* – a catalogue of the forces that take a household, each named; the numerical climax (seven
  brothers / eight sons of a mother; the wives counted to seven) frames the ruin as complete.
- **A king is his house** (I:7–25, III:38): the poem measures ruin not in land or throne but in *bt*, *umt*, *špḥ*,
  *yrṯ*; and the cure is "what is not in my house" – a wife who will bear.
- **Grief in private, sleep from weeping** (I:26–35): the king goes into his chamber; tears fall like shekels to the
  ground and fifths to the bed; sleep "overpowers" him – the dream comes to exhaustion, not to an incubation rite
  (EUPT).
- **The god who asks** (I:38–43): El asks "what is with Kirta?", and supposes a weeping king wants power – "the
  kingship of the Bull his father"; the answer reverses the supposition: wealth is refused twice (from El and from
  the enemy) – the theme of the whole epic.
- **The dream is a script** (II:6–III:49): El dictates not only Kirta's acts but the enemy's message and Kirta's
  reply; the execution and the embassy follow it word for word: prophecy as a text that the world then performs.
- **Ritual before war** (II:9–26): washing to the elbow and shoulder, reddening, lamb and kid and bird, wine in a
  silver bowl and honey in a gold one, hands raised on the tower roof to El and Baal – Baal the god of war beside El
  the god of the dream (EUPT).
- **The king feeds the city** (II:27–31): bread for five, provisions for six months – kingship as provision.
- **The exemptions overridden** (II:43–50): the only son, the widow (who hires a substitute), the sick man carrying
  his bed, the blind man groping behind, the newly married man who leaves his wife "to another" – a society that knew
  who was normally spared, and an epic that spares no one for the king's need.
- **Siege by silence** (III:10–19): seven days without arrows or stones; the women at the woodpile, the threshing
  floor, the spring and the well vanish; the thirsty animals' noise keeps the king awake – the city is defeated by
  its own sounds.
- **Beauty compared to goddesses** (III:41–44): Ḥurriya's grace is Anat's, her beauty Athtart's, her eyes gems –
  the bride is described through the divine; the modern "Ḥurriya the fair" is the tablet's "the gracious one".
- **Two kings, one El** (III:31, III:46): Pabil holds Udum as "a gift of El", Kirta holds Ḥurriya as given by El in
  his dream: both legitimize by the same god.
- **The vow outside the command** (IV:32–43): on the third day Kirta turns aside to Athirat's shrine and makes a
  private bargain – twice her weight in silver, thrice in gold; the only act El did not dictate, and the seed of the
  next tablet's trouble. The wealth he refused to take he vows to give.

### Key parallels

- [divergence] **Deut 24:5 / 20:7** `כִּי יִקַּח אִישׁ אִשָּׁה חֲדָשָׁה לֹא יֵצֵא בַּצָּבָא`; `פֶּן יָמוּת בַּמִּלְחָמָה וְאִישׁ אַחֵר
  יִקָּחֶנָּה` – II:47–50: the same three words (*yṣʾ*, *ḥdṯ*, *ṣbʾ*) with the opposite rule: the new bridegroom goes out
  and leaves his wife "to another"; Deut 20:5–8's exemptions are the very people Kirta's levy takes.
- [divergence] **Deut 20:10–19** – III:26–30: in the Torah the besieger calls the city to peace and takes tribute and
  servants (`לָמַס וַעֲבָדוּךָ`); here the besieged king offers *šlmm*, silver, gold and slaves, and the besieger refuses
  them; *ṣwr* `צָר` (Deut 20:19), a siege of days.
- [equivalent] **1 Kgs 3:5–15** – the god offers in a dream, the king refuses wealth, wakes `וְהִנֵּה חֲלוֹם` and
  sacrifices (III:50–IV:7); Solomon asks wisdom, Kirta a wife and sons.
- [equivalent] **Gen 15:1–3** – a vision, an offer of reward, `מַה תִּתֶּן לִי`, the childless man and the heir (*yrṯ*
  `יוֹרֵשׁ`, I:25; I:51–52).
- [cognate] **Gen 28:12–22** – the god descends in a dream (I:36), the waking man says `יֵשׁ יְהוָה` and vows a
  conditional vow with a fixed share (IV:37–43: *ndr*, *iṯ*, *hm*, double and triple).
- [cognate] **Jer 8:16, 47:3** `מִקּוֹל מִצְהֲלוֹת אַבִּירָיו` – III:16–17: the same construction for the sound of the
  enemy's stallions / bulls.
- [cognate] **Josh 9:21, Deut 29:10, Gen 24:11–16** – woodcutters and water-drawers, the women going out to draw and
  fill (III:7–10).
- [cognate] **Joel 2:8** `וּבְעַד הַשֶּׁלַח יִפֹּלוּ` – I:20–21 (*b šlḥ … ttpl*); Judg 6:5 / Jer 46:23: an army like
  locusts without number (II:37–III:1).
- [cognate] **Ps 68:14** `יְרַקְרַק חָרוּץ` (*yrq ḫrṣ*); **1 Kgs 11:5** `אֱלֹהֵי צִדֹנִים` (*ilt ṣdynm*).

### Lines shared with other tablets

Within the tablet: the chains listed under Decisions. From other tablets: the speech formula §6.1 (VI:2, VI:38–39),
the message formula §6.4 (III:21, VI:3, VI:40–41), the departure §6.2 (V:29–30 = 1.4 VIII:1 `אז תתנו נא את פניכם`;
VI:35–37 = 1.2 I:19 `יצאו לדרך …, לא ישבו`), the day count §6.10 (III:2–3, III:10–11, IV:32, IV:44–45, V:3–5), `השור,
אביו אֵל` (II:6 = 1.2 I:36), *nʿmn* (1.17), *ybl* `הוביל` (1.17 V:12), *apnk* `אחרי כן` (§12.4), *gm* `בקול` (1.1 IV:2).
1.16 I:1 *l krt* will copy I:1.

### Proposals for the shared renderings

- **§12.1 names:** `כִּרְתָּא` ★ (kept); `חֻרַּיָּה`; `פַּבִּל הַמֶּלֶךְ`; `אוּדֻם הָרַבָּה`, `אוּדֻם *הַנִּשְׂגֶּבֶת*` (*ṯrrt*,
  confirmed); **new:** `בֵּית־חֲבוּר` (*bt ḫbr*); `אֲתִירַת צוֹר`, `אֵלַת צִידוֹנִים`; `הַנַּעֲמָן, עֶלֶם אֵל`; `עֶבֶד אֵל`;
  `אֲבִי אָדָם`; `כִּרְתָּא הַשּׁוֹעַ`. **Correct the row "*mṯb*, *ḥry*"**: the word is *mṯt* "lady" (`הַגְּבֶרֶת חֻרַּיָּה`).
- **§12.2 *ḫtn* row: correct it.** The bridegroom of 1.14 II:47–48 / IV:26 is ***trḫ ḥdṯ*** `מְאָרֵשׂ חָדָשׁ` (not
  *ḫtn*), and he goes to war (*yṣi*; in the execution *ybl* "was brought") – the [divergence] with Deut 24:5 / 20:7 is
  that he is *not* exempt.
- **§12.2 *ḥlm* / *ḏhrt*:** add *ḏrt* (III:47, VI:32) and *hdrt* (III:51) = `חִזָּיוֹן`.
- **New one-lemma renderings (binding for 1.15–1.16):** *yrṯ* `יוֹרֵשׁ`; *špḥ* (*šbḥ*) `מִשְׁפָּחָה`; *ḥtk* (II)
  `שׁוֹשֶׁלֶת`; *zbln* `דְּוַי`, *zbl* (III) `הַדָּוֶה` (1.16 has the sick king: *mrṣ* should take another word,
  `חָלָה` / `מַחֲלָה`); *nhmmt* `תְּנוּמָה`; *yḫṭ* `הֵקִיץ`; *ʿrš* `עֶרֶשׂ`; *mṭt* `מִטָּה`; *ṯql* `שֶׁקֶל`; *ʿdn* `הָמוֹן`;
  *ṣbu* `צָבָא`; *ul* `חַיִל`; *mġd* `מִחְיָה`; *akl* (II) `אֹכֶל`; *ʾpy* `אָפָה`; *ḥṭt* `חִטָּה`; *ʿwr* `עִוֵּר`;
  *nkr* `נָכְרִי`; *mddt* `חֲבִיבָה`; *trḫ* (ptc.) `מְאָרֵשׂ`; *ḥdṯ* `חָדָשׁ`; *bʿr* (II) `נָטַשׁ`; *gry* `הִתְגָּרָה`;
  *ṣwr* `צָר`; *šlmm* `שְׁלָמִים`; *ng* `נָד`; *rḥq* `רָחַק`; *ytnt* `מַתַּת`; *ušn* `תְּשׁוּרָה`; *tsm* `יִפְעָה`; *ʿpʿp*
  `עַפְעַף`; *sp* `סַף`; *lak* `שִׁגֵּר` (kept); *mswn* `*מַחֲנֶה*`; *ṯwb* Š `הֵשִׁיב`; *ndr* `נָדַר`; *iṯ* `יֵשׁ`; *ṯn*
  "double" `מִשְׁנֶה`; *ʿrb* Š `הִכְנִיס`; *dmm* `דּוֹם` / `דָּם`; *ḥẓ* `חֵץ` (§12.4); *gl* `גֻּלָּה`; *mgdl* `מִגְדָּל`;
  *ḥmt* (I) `חוֹמָה`; *šrd* `שֵׁרֵת`; *ḫmt* `סוּכָּה`; *llu* `טָלֶה`; *škr* (I) "hire" `שָׂכַר` (always vocalized:
  `שָׁכַר` is *škr* "be drunk").
- **Collisions for the coordinator:** (1) ***ibr* `אַבִּיר`** (the cognate, Jer 8:16, Ps 22:13) against *gmr*
  `*אביר*` in 1.2 I:46 and 1.6 VI:6 – the cognate should keep it, *gmr* move (`*גיבור*`? `*עז*`?). (2) ***ṯrrt***:
  1.100:64 has `*העזה*` (which also collides with *ʿz* `עוז`); 1.14 follows §12.1 `*הנשגבת*` – align 1.100. (3)
  *ḥtṯ* / *ksp* both `כסף` (a Hittite loanword; accepted split, noted at II:18). (4) *mʿ* (II) "together" `*יחדיו*`
  and *mʿ* (interj.) `*נא*` (V:14) – two lemmas; `נא` is also the asseverative *al* of §6.2: a minor split. (5)
  *msrr* `*קרביים*` beside *qrb* `בקרב` (the root, not the word; noted). (6) *ypq* (I:12) and *pq* (1.4 VI:56) both
  `הפיק` – one root, accepted.

### Lessons for the guidelines

- **A corpus tool that licenses gates by the base text must also read the rank-1 edition** when the two differ (1.14
  III:59: CUC *ṣr*, EUPT *ʿṣr*): otherwise the gate blocks the right cognate exactly where the better reading restores
  it.
- **A command / execution chain hides its few real changes among many tense changes**: list the tablet's own
  differences (the verb of the bridegroom, the swapped imperatives of the embassy, the vow that breaks the day count)
  separately from the mechanical ones; they are where the story speaks.
- **Brief keywords can be wrong for a famous scene**: the "bridegroom" of Kirta's levy is *trḫ ḥdṯ*, not *ḫtn*, and the
  "eight" of the opening are brothers, not wives – check the brief's lemma before reserving a word for it.

## KTU 1.15

Translator 2 of Round 5 run 3, resumed (2026-10-31). Files: `annotated-1.15.rtl.md`, `translation--intro-1.15.rtl.md`,
the generated `translation-1.15.rtl.md`.

### Scope

All 136 CUC lines (I 8, II 28, III 31, IV 30, V 29, VI 10); every column lacks its top and bottom. I: the end of
Pabil's message (Ḥurriya draws the hungry by the hand; Udum will moan like a cow for its calf); II: the gods come to the
wedding, Baal asks El to bless, El takes cup and goblet and blesses: seven sons, eight; Yaṣṣib who sucks Athirat's milk
and Anat's breast; III: "Kirta is very high among the Rephaim of the earth, the assembly of the clan of Ditan"; the
daughters; "the youngest of them I will make firstborn"; the births over seven years; Athirat remembers the vow; IV–VI:
Ḥurriya's feasts for the "bulls" and "gazelles" of Ḫabur; weeping over Kirta as over a dead man; Yaṣṣib to reign.

### Sources consulted

As for 1.14 (CUC, EUPT `eupt 1.15` with `--tr` after drafting, `renderings.md` §1–§12.6, the earlier tablets, the
repository's Bible). EUPT's reconstructed extra lines ("(i 1)" …, after I:8) are not entries; they are mentioned at
I:8.

### Decisions

- **EUPT against CUC** (each `EUPT:` in the פירוק): I:3 *tṯṯkrn w tbun* "she will be delivered and will come" (CUC
  *ʿbdn* "servants"); I:4 *m!swnh*; II:8 *ṯ[ġ]r* "gatekeeper" (CUC *tʿ ʿšr*); II:13 *[l t]tbʿ*, *l lṭpn*; II:23 *ḥẓ!rk*;
  III:6 *bnt*; V:1–4 (EUPT reads only traces where KTU³ restores IV:15–18: translated as EUPT reads; the three
  repeated-line differences `verify` lists are this, justified at V:4).
- **El's blessing:** *brkm ybrk* `בָּרֵךְ יְבָרֵךְ` (Gen 22:17); *mrr* `*אימץ*` (§12.4); *ṯmn* D `*תְּשַׁמֵּן*` ("make eight",
  by analogy with *ṯlṯ* D `שִׁלֵּשׁ`); *ynq ḥlb* `יונק חלב`, *mṣṣ ṯd* `מוצץ שַׁד` (Isa 60:16, 66:11); *mšnqt* `מינקת`
  (Gen 24:59); *rm* `רם`; *rpi arṣ* `רפאי הארץ`; *qbṣ* `קיבוץ`; *dtn* `דִּתָּן` (a name; Num 16:1 `דָּתָן` only in a note);
  *pġt* `רִיבָה` (the common noun; Aqhat's name `פּוּגַת`); ***ṣġrthn abkrn* `הצעירה שבהן – אֲבַכְּרֶנָּה!`**; *atw* `אָתָה`;
  *ahl* `אוהל` // *mšknt* `משכן` (Num 24:5); *dr il* `דּוֹר אֵל`.
- **The vow remembered:** *tdr* (Gp of *ndr*) `נֻדְּרוּ`; *ḫss* "remember" `זכר` (the root of Ḫasīs); *ṯny* `שנה` ("did he
  change / repeat his vow"); ***apr* `אָפֵר`** (*prr*, Num 30:9 `וְהֵפֵר אֶת נִדְרָהּ`).
- **The opening:** *rġb* `רעב`, *mẓma* `צמא`, *mṯk* `*מושכת*` (the cognate of משך); *ṯkr* Š `*תְּסֻכַּר*` (Isa 19:4);
  *zġy* `*הָמָה*`; *nḥ* `נָהָה`; *arḫ* `פרה`, *ʿgl* `עגל`, *bn ḫpṯ* `בני *החופש*`.
- **The feasts:** *ṭbḫ* `טבח`; *šmn mri* `שמני מריאים`; *rḥbt* `קנקני` (1.4 VI:53); *ṣḥ* "invite" `צווח`; *ṯr* / *ẓby*
  `שוורים` / `צביים` (titles of the nobles); *ḫbr rbt / ṯrrt* `חֲבוּר הרבה / הנשגבת` (Kirta's town, as Udum's epithets);
  *ḫm mr* `ביתן המור`; *qdm* `קדם`; *ṣʿ* `קערה` (1.3); *ḥrb* `חרב`; *št* `שָׁתָה` (`שָׂם`, II:9); *adn* `אדון` / *bʿl* `בעל`
  (IV:28 / VI:5); *rgm ṯrm* `מִלַּת שוורים` (the bulls' cry; §4.2 *rgm* `מִלָּה`); *qbr* `קבר`; *šrk* `*נצמד*`; *ʿrb špš* `בוא
  שַׁפְּשׁ`; *ṣbu* (II) `צאת` (DULAT "setting", EUPT "rising"); *bḫr* `בחור`; *anšt* `אֲנוּשָׁה` (Jer 15:18).

### Open decisions for the user

1. II:24 *tṯtmnm* `*תְּשַׁמֵּן*` (a coined verb "make eight") or a paraphrase?
2. III:7–12 *pġt* `ריבה` (common noun) or a title "princess"?
3. III:29–30: what Athirat threatens to "annul" (*apr idt*: the agreement? the blessing?).
4. V:13 / VI:7 *rgm ṯrm* `מִלַּת שוורים` (literal) or "the bellowing of bulls" (EUPT)?
5. V:19 / 1.16 I:36 *ṣbu* (II): sunrise (EUPT) or sunset (DULAT)?

### Progress log

- Drafted in seven sections and saved in one file pass, filled and verified (the column I–VI sections).
- Pass (a): brackets against CUC and EUPT; V:1–4 follow EUPT (justified). Pass (b): the blessing (III:2–4 = III:13–15),
  the births (III:5 = III:20–21), the feast (IV:3–9 = IV:14–20, IV:24–27 = V:7–10 = VI:4) compared; §6.5 corrected at
  V:9, VI:3 (`וענתה`). Pass (c): `translation-1.15.rtl.md` read; one footnote (III:16).
- `verify 1.15 --strict`: 136 entries, 0 problems, 3 justified repeated-line differences; quotes: 0 problems.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against EUPT (transliteration, vocalization,
  morphology) and CUC. **26 `>` lines changed**, each with a `(תיקון סוקר: …)` note: 20 brackets / uncertainty (the
  partial-restoration rule – one sign or an ending restored → no bracket: II:8, II:12, II:20, II:28, III:9–11, III:14, IV:9,
  IV:14–15, V:10, V:16 (the ending of *uṣbʿ[t]*), V:17, V:21, VI:5; whole stretches bracketed: V:26; III:2 a lost `[…]` added; III:5; V:5 and VI:8 `?`
  for EUPT's doubtful readings); 2 additions moved into `( )` (II:21 `(אשר)` had been inside the restoration; III:29 the
  suffix of `נדר(ו)` is not on the tablet); 1 doubled word (II:17–18 `בימין` was translated in both lines); 3 meaning
  (II:18 *brkm ybrk* `בָּרֵךְ בֵּרַךְ`, narrative past as EUPT and §3, Num 23:11, not the future `יְבָרֵךְ`; V:14, V:16 *mtm*
  `מֵת?` singular, EUPT *mêtVma*). פירוק: 4 added where an entry had only a `[מקבילה]` but differs from its parallel
  (IV:15, IV:16, IV:18, V:25); 4 stems corrected to EUPT (II:15, II:20 *mrr* G; II:24 *ṯmn* tD; III:25 *ḫss* L). No
  negation or *l* errors found. Rebuilt; `verify 1.14 1.15 1.16 --strict` 0 problems (the same 3 justified repeated-line
  differences); `check_bible_quotes.py` 0 problems.
  Then, during the review of 1.14: IV:9, IV:20 and V:26 *ṯrrt* italicized to `*הנשגבת*` (§12.6), with notes.

### The text on its own terms

- **The bride praised for charity** (I:1–2): the princess draws the hungry and the thirsty by the hand; her town will
  moan like a cow for its calf (I:5–7) – a daughter given away is a loss to a city.
- **The gods at a human wedding** (II:1–20): El, Baal, Yarikh, Kothar, Raḥmay, Resheph – the "assembly of the gods";
  Baal the intercessor, El the blesser with cup and goblet.
- **The blessing reverses the ruin** (II:23–24): the numerical climax that counted the dead (1.14 I:8–9) now counts
  sons: seven, eight.
- **A king suckled by goddesses** (II:26–28): Yaṣṣib will suck the milk of Athirat and the breast of Anat.
- **Honour among the dead kings** (III:2–4, 13–15): the blessing promises a place among the Rephaim, the assembly of
  Ditan – the royal ancestors.
- **The youngest daughter as firstborn** (III:16): El overturns the order of birth for a daughter.
- **The forgotten vow** (III:22–30): seven years of births, and then the goddess remembers; illness follows.
- **Mourning before death** (V:12–23): at the king's own feast the guests weep over him and speak of his son's reign.

### Key parallels

- [cognate] **Isa 60:16** `וְיָנַקְתְּ חֲלֵב גּוֹיִם וְשֹׁד מְלָכִים תִּינָקִי` – II:26–27 (*ynq ḥlb* // *mṣṣ ṯd*).
- [divergence] **Deut 21:16** `לֹא יוּכַל לְבַכֵּר` – III:16 (*abkrn*, the same verb, by El and for a daughter); Gen 48:14.
- [cognate] **Isa 14:9, 26:19** `רְפָאִים` – III:3, 14 (*rpi arṣ*).
- [cognate] **Num 30:9** `וְהֵפֵר אֶת נִדְרָהּ`; **Deut 23:22**, **Eccl 5:3** – III:25–30 (the vow, *ndr*, *prr*).
- [cognate] **Gen 22:17** `כִּי בָרֵךְ אֲבָרֶכְךָ` – II:18 (*brkm ybrk*); **Ruth 4:11** – II:21–22 (the wife coming into the
  house).
- [cognate] **Num 24:5** `אֹהָלֶיךָ … מִשְׁכְּנֹתֶיךָ` – III:18–19 (*ahl* // *mšknt*).

### Lines shared with other tablets

1.14 VI:16 (I:8), 1.14 IV:40–42 (II:21–23: El blesses in the words of Kirta's vow), 1.14 III:20–21 (I:4), 1.14 V:13–14
(IV:2), 1.17 I:23–24 (*brk* // *mrr*), 1.4 VI:53 (*rḥbt yn*), §6.1, §6.5, §6.6.

### Proposals for the shared renderings

- **Names:** `דִּתָּן` (*dtn*), `נַנַּי` (1.16), `אִלְשׁ` (1.16), `חֲבוּר` (*ḫbr*, Kirta's town, with `בֵּית־חֲבוּר`), `רַחְמַי`
  (§10, confirmed), `יַצֻּב`, `תִתְמָנִת`, `אִלְחוּ`, `שַׁעֲתִקַת` (§12.1, confirmed).
- **New one-lemma renderings:** *rġb* `רָעֵב`; *mẓma* `צָמֵא`; *mṯk* `*מָשַׁךְ*`; *ṯkr* Š `*סֻכַּר*`; *nḥ* `נָהָה`; *zġy*
  `*הָמָה*` (beside *zġt* `נביחה`: a split by sense); *ṯġr* `שׁוֹעֵר` (§10); *ṯmn* D `*שִׁמֵּן*`; *ynq* `יָנַק`; *mṣṣ*
  `מָצַץ`; *mšnqt* `מֵינֶקֶת`; *rm* `רָם`; *qbṣ* `קִבּוּץ`; *pġt* `רִיבָה`; *bkr* D `בִּכֵּר`; *atw* `אָתָה`; *mšknt* `מִשְׁכָּן`;
  *ḫss* "remember" `זָכַר`; *prr* `הֵפֵר`; *mri* `מְרִיא`; *ḫm* `בִּיתָן`; *qdm* `קִדֵּם`; *qbr* `קָבַר`; *šrk* `*נִצְמַד*`; *bḫr*
  `בָּחוּר`; *anšt* `אֲנוּשָׁה`; *ṣbu* (II) `צֵאת`.

### Lessons for the guidelines

- **An edition that adds reconstructed lines** (EUPT's "(i 1)" …) must not shift the entries: keep the base text's
  labels and bring the reconstruction into the notes.

## KTU 1.16

Translator 2 of Round 5 run 3, resumed (2026-10-31). Files: `annotated-1.16.rtl.md`, `translation--intro-1.16.rtl.md`,
the generated `translation-1.16.rtl.md`.

### Scope

All 267 CUC lines (I 62, II 60, III 17, IV 17, V 52, VI 59); II:1–16, II:52–60, V:1–9 and V:30–52 are fragments
(II:59–60 have no EUPT line: CUC's traces). I: Ilḥu's lament ("do gods die?"), Kirta sends him to fetch Thitmanit
under the pretext of a feast; II: Thitmanit's lament (the same words); III: the drought – Baal's rain withheld, bread,
wine and oil used up; IV: El summons the heralds Ilš and his wife; V: El asks seven times "who among the gods will cast
out the illness?", no god answers, El fashions Šaʿtiqat from clay; VI: Šaʿtiqat heals the king ("Death is shattered"),
Kirta eats and sits on his throne; Yaṣṣib's challenge ("you do not judge the widow's case"); the father's curse; the
colophon of Ilimilku.

### Sources consulted

As for 1.14 and 1.15; the earlier tablets for the copied lines (1.2 I:7–9 the curse, 1.6 V:6 the throne, 1.6 VI:54 the
colophon, 1.4 IV:58 El's answer, 1.17 V:7–8 the widow's case, 1.5 VI:5 *ksm mhyt*, 1.1 IV:2 *gm ṣḥ*).

### Decisions

- **EUPT against CUC** (≈ 25, each marked): I:12 *yʿrb!*; I:14 *n!šmḫ*; I:17 *ap!*; I:23 *yḥ*; **I:31 *[ġ]zr* "hero" (CUC
  *aḫr*)**; I:42, I:54 (no "jar"); **I:56–60 EUPT's restorations *[mrṣ]*, *[hm dw]*, *[l mrṣ]*, *[l dw]*** (the question
  and the denial); II:33 *tṣr*; V:22 *i!n*; V:23 *d!pid*; V:28 *ymll*; VI:1 *dm!*; VI:6 *mt*; VI:13 *šʿtqt* (CUC
  *šʿtẓt*); VI:14 *la!t*; VI:17 *ṭbḫ*; VI:19 *ḥry*; VI:20 *w⟨y⟩lḥm*; **VI:24 *drkt* without suffix** (`השררה`; the one
  repeated-line difference with 1.6 V:6, justified); VI:29 *l k[rt]*; VI:57 *qdqdk!*.
- **The words of illness, one each:** *mrṣ* `חָלָה` / `חֳלִי`; ***dw* `דָּוֶה`** [cognate] (Lev 15:33); ***mdw* `מַדְוֶה`**
  [cognate] (Deut 7:15, with `חֹלִי`: the pair *mrṣ* // *mdw*); *zbln* `דְּוַי` (1.14; Ps 41:4 `עֶרֶשׂ דְּוָי` at VI:36 –
  the cognate pair is complete); *anšt* `אֲנוּשָׁה` (1.15 V:27; EUPT "companion" at VI:36 noted). **Revision of 1.14:**
  *zbl* (III) "one carried" changed from `הַדָּוֶה` to `*הַסָּבוּל*` (1.14 II:45, IV:23; Isa 46:7 `יִסְבְּלֻהוּ`; *zbl* ~
  Akk. *zabālu* ~ סבל), because `דָּוֶה` is the cognate of *dw*.
- **The lament:** *ʿtq* `נֶעְתַּק` (the root of Šaʿtiqat); *ḫšt* `*קבורה*`; *ap* "entrance" `בְּאַף` (1.17 V:6);
  ***mtm* `מְתִים`** (men; `כִּמְתִים תמות` ↔ Ps 82:7); ***u ilm tmtn* `אוֹ אֵלִים ימותו`** (Ps 82:6–7: `אֱלֹהִים` never in a
  line); *ntn* `קינה`, *bd* `נהי`; *ṣrry* `*פסגות*` (§1.2 *ṣrrt*); *ḥlm* (fortress) `*מצודה*`; *nny* `נַנַּי`; *mknpt*
  `רחבת־הכנף`; *blmt* `בַּל־מוות` (1.17); *gyl* `גיל`; *šnn* `שִׁנֵּן`; *dmm* "wail" `יִלֵּל` (apart from 1.14's *dm*
  "be still" `דּוֹם`); *mḫ* `מוח`; *rḥmt* `רחמנית`; *smkt* `מרומים`; *tgh* `נוגה`; *ʿšr(t)* `משתה`; *tp* `תוף` (Ex
  15:20); *šyr* `שיר`; *mgn* (I) `*מִגֵּן*`; *mrḥ* `רומח`, *grgr* `כידון`, *trẓẓ* `*מרוצה*`, *tl* `*תְּלִי*`.
- **Thitmanit:** *mn* `כמה`; *mndʿ* `מי יודע` (Joel 2:14); *ṣrr* `צרח`; *rwm* `הרים`; *tnqt* (I) `זעקה`; *nky* `מוכה`;
  *škllt* `*כחוש*`; *ʿry* `ערום` (Gen 2:25 only as a note).
- **The drought:** *twr* `תּוּר` (Num 13:2); *ksm mhyt* `*פֶּלַח* *נְאוֹת*` (1.5 VI:5); ***ʿly* `העליון`** (Baal's epithet;
  1 Sam 2:10 `עָלָו בַּשָּׁמַיִם יַרְעֵם`; Gen 14:18's `אֵל עֶלְיוֹן` as a [divergence]); *nrt* (II) `נִיר` (a Hebrew homograph
  of *nyr* `נִיר`, noted); *smm* `סַמִּים`; *tlm* `תלם`; *ʿṭrṭrt* `עטרה`; *ʿbd dgn* `עובדי דָּגָן` (the god and the grain);
  *kly* `כָּלָה`; *ʿdn* (bin) `*טנא*`; *ḥmt* (II) `חֵמֶת`.
- **El and Šaʿtiqat:** *ngr* `כָּרוֹז`, *ilš* `אִלְשׁ`; *ḥkm* `חכם`; *bnwn* `בניין`; the seven questions with the number
  verbs `ישנה, ישלש … ירבע, יחמש … *יְשַׁשֵּׁשׁ*, יְשַׁבֵּעַ`; *ydy* (I) `השליך` (1.17), *grš* `גירש`, *ydt* `משליכת`; *ḥrš*
  Gt `אֶתְחָרֵשׁ` (craft and spell, Isa 3:3); *škn* Š `הִשְׁכִּין` (not `עשה` / `יצר`); *rḥt* `*רחת*`; *mll* `*מלל*`; *rṯ* `רפש`
  (1.17); ***ṭiṭ* `טיט`, *qrṣ* `קָרַץ`** (Job 33:6; Gen 2:7's `יָצַר` / `עָפָר` absent and stated as the finding).
- **The healing:** *mt* `מָוֶת`; *dm* `הֲרֵי` (1.3 III:20); *ḫtt* `חַת` (§10); *lʾy* `הֶלְאָה` (1.14 I:33); *gly* `נגלה`;
  *nṣr* `מתייפחת`; *dʾy* `דאה`; *šrr* `שׁוֹרֵר`; *ḫṭ* `שרביט`; *pṭr* `פטר`; ***dʿt* `זֵעָה`** (Gen 3:19, [cognate] word,
  [divergence] context); *npš* (throat) `נפש`; *brlt* `תאווה`; *ṯrm* `חתך`; *pqd* `פקד`; *mgṯ* `*טֶבַח*`; *ʿd* (III)
  `*אולם*`.
- **Yaṣṣib:** *ysr* `ייסר` (Ps 16:7; Deut 21:18), *ggn* `*בטן*`; *ištmʿ* `השמע`; *qġ* `הטה`; *ġz* `שודד`; *dbr* `הדביר` (Ps
  18:48); *ṯwy* `*עצר*`; *šql* (Š *qyl*) `הִפִּיל`; *ġlt* `רפיון`; ***dn dn almnt / ṯpṭ ṯpṭ* copied from 1.17 V:7–8
  (`דן דין אלמנה`, `שָׁפַט שֶׁפֶט`), in the negative and 2nd person**; *qṣr npš* `קצר־הנפש`; *dl* `דל`; *ṯšm* `*עושק*`;
  *ksl* `כסל`; *šlḥm* `הסעיד`.
- **The curse:** copied from 1.2 I:7–9 (`ישבור … ראשך, עַתְּתַרְת־שֵׁם־בַּעַל … קדקדך; תיפול בגבול`); *ḥpn* `*חופן*`;
  *w tʿn* = *ʿnw* `ותֵעָנֶה` with `[סטייה מן הנוסחה]`. The colophon: `סופר: אִלִימִלְכּוּ, השׁוֹעַ.`

### Open decisions for the user

1. I:3 / I:17 *ik mtm* / *k mtm*: "how – men" / "like men" (`מְתִים`), or "the dead" (`מֵתִים`)?
2. *ḫšt* `*קבורה*` (DULAT "mausoleum").
3. III:6 *ʿly* `העליון` (the cognate epithet, given to Baal) or a neutral "the Exalted"?
4. VI:6–7 *ʿrm tdu mt*: "she flew over the towns – death" (literal) or "she chased Death from the towns" (EUPT)?
5. VI:36 *anšt*: "illness" (DULAT; `אנושה`) or "companion" (EUPT)?
6. *zbl* (III) in 1.14 revised to `*הַסָּבוּל*` – accept?

### Progress log

- Drafted in twelve sections, saved in two batches (I–II; III–VI), each filled and verified.
- Pass (a): brackets and EUPT readings (above). Pass (b): Ilḥu's and Thitmanit's laments (I:2–23 = II:35–49), the
  sickness question (I:56–60, II:19–23), El's seven questions (V:10–22), Yaṣṣib's speech (VI:27–38 = VI:41–53), the
  curse (= 1.2 I:7–9), the throne line (= 1.6 V:6) compared; VI:55 Horon vocalized; III:6 / III:8 difference justified.
  Pass (c): `translation-1.16.rtl.md` read; four footnotes (I:22, V:29, VI:34, VI:58).
- `verify 1.16 --strict`: 267 entries, 0 problems, 2 justified repeated-line differences; quotes: 0 problems (all three
  tablets and intros rechecked; 1.14 rebuilt after the *zbl* revision, 0 problems).
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against EUPT and CUC. **44 `>` lines
  changed**, each with a `(תיקון סוקר: …)` note: 24 brackets / uncertainty (one sign or an ending restored → no bracket:
  I:47, I:48, II:5, II:10, II:17, II:24, II:33, II:46, III:1, III:15, IV:4, IV:9, IV:10, V:6, V:15, V:19, V:25, V:27,
  V:49, VI:28; I:31, I:44 `?` for EUPT's doubtful readings; V:18 EUPT restores both words; **VI:31 the brackets were
  reversed** – *[ġ]rm* read, *[tṯwy]* wholly restored); 12 meaning, person, number or tense: **I:39–40, I:61–62 *krtn dbḥ
  dbḥ mlk ʿšr ʿšrt*** = `כרתא זָבַח זבח, המלך הזמין משתה` (EUPT: two verbs, *dabiḥa*, *ʿaššira*; the draft `כרתא – זבח, זבח
  המלך – משתה` lost both verbs; *ʿšr* D = `הזמין` as 1.3 I:9, 1.17 VI:30); **I:60 *adnkm* `אדונך`** (2nd fem. sg. + enclitic
  *-m*, EUPT; not `אדוניכם`); **VI:26 *ywsrnn ggnh* `וייסר אותו *בטנו*`** (singular, not `וייסרוהו`); I:12–13 narrative
  past `בכה, ושינן` (as II:35); **IV:3 and IV:16 *ṣḥ* imperative `צְוַח`** (IV:3 had the same past `צווח` as its execution
  IV:6); I:28, IV:13 imperatives vocalized; 3 one-lemma fixes (I:5, I:19, II:41 *ʿtq* `תֵּעָתֵק`, as I:2 and the Decisions,
  not `תעבור`); 2 omissions (I:41 *tpk* `תופך`; II:32 *ybmh* `*יְבָמָהּ*?`, read but untranslated); 1 addition moved into
  `( )` (V:28 `(ב)`); 2 italics (VI:18, VI:21 *mgṯ* `*טֶבַח*`, §12.7). פירוק added to 14 entries (I:61–62, II:22–23, V:18,
  V:21 – parallels that differ; the fragments II:2–9, II:55–56). No negation or *l* errors found. Rebuilt; `verify` 0
  problems (the same justified repeated-line differences); quotes 0.

### The text on its own terms

- **A son's theology** (I:2–23): "we rejoiced in your immortality … or do gods die?" – the king as son of El is
  expected not to die; his illness is a crisis of belief, voiced by his children.
- **The household as dogs** (I:2): without the father the children are strays at the tomb's entrance.
- **Mountains weep for a king** (I:6–9): Ṣapon and Nannay, Baal's mountains, are summoned to mourn.
- **The kind lie** (I:31–62): the father protects his tender daughter by a pretext of a feast; the brother denies the
  illness at the gate; her jar falls (KTU³).
- **Drought follows the king's sickness** (III:2–16): the rain of Baal fails, bread, wine and oil run out – king and land
  share one health.
- **The silence of the gods** (V:10–22): seven times El asks; none answers; the old god makes the cure himself.
- **Healing made of clay** (V:26–29): El pinches clay like a potter; the healer is a creature, not a god; her name is
  "she who removes".
- **Healing as eating** (VI:10–21): washed of sweat, the king's throat is opened, and he eats – recovery is appetite.
- **The just king** (VI:33–50): kingship is judging the widow, the wretched, the poor, feeding the orphan; a sick king
  who cannot do this has lost the throne – in his son's eyes.
- **The father's curse** (VI:54–58): the king curses his son with the gods' own curse (Baal's on Yam).

### Key parallels

- [divergence] **Ps 82:6–7** `אֲנִי-אָמַרְתִּי אֱלֹהִים אַתֶּם … אָכֵן כְּאָדָם תְּמוּתוּן` – I:17–23, II:40–44: in the psalm the
  gods are sentenced to die like men; in Kirta the son asks whether a son of El, or the gods, can die.
- [cognate] **Job 33:6** `מֵחֹמֶר קֹרַצְתִּי גַם-אָנִי` – V:29 (*qrṣ*, *ṭiṭ*); [divergence] **Gen 2:7** (`יָצַר`, `עָפָר` absent).
- [cognate] **Jer 5:28** `דִּין לֹא דָנוּ דִּין יָתוֹם`; **Isa 1:23**, **10:2**; **Ps 82:3** – VI:33–34, 45–50.
- [equivalent] **2 Sam 15:4** (Absalom at the gate) – VI:37; [divergence] **Deut 21:18** (the rebellious son, *ysr*) –
  VI:26.
- [equivalent] **Gen 9:25**, **49:4** – the father's curse, VI:54–58.
- [cognate] **Deut 7:15** `חֹלִי … מַדְוֵי` – *mrṣ* // *mdw*; **Ps 41:4** `עֶרֶשׂ דְּוָי` – VI:36 (*ʿrš zbln*).
- [cognate] **Gen 3:19** `בְּזֵעַת אַפֶּיךָ` – VI:10 (*dʿt*), the word, not the motif.
- [equivalent] **Joel 1:10–11**, **1 Kgs 17:12** – the drought, III:12–16; [cognate] **Ex 15:20** (the drum in the
  sister's hand) – I:41.

### Lines shared with other tablets

1.14 I:1 (I:1), 1.14 VI:16 (I:24, VI:54), 1.2 I:7–9 (VI:54–57), 1.6 V:6 (VI:24, *drkt* without suffix per EUPT), 1.6
VI:54 (VI:59), 1.4 IV:58 (IV:9, V:23), 1.17 V:7–8 (VI:33–34), 1.5 VI:5 (III:4), 1.1 IV:2 (IV:16), 1.2 I:25 (V:25).

### Proposals for the shared renderings

- **Names:** `אִלְחוּ`, `תִתְמָנִת`, `שַׁעֲתִקַת` (confirmed); new `נַנַּי`, `אִלְשׁ`.
- **Illness (fixed for the corpus):** *mrṣ* `חָלָה` / `חֳלִי`; *dw* `דָּוֶה`; *mdw* `מַדְוֶה`; *zbln* `דְּוַי`; *anšt* `אֲנוּשָׁה`;
  ***zbl* (III) `*הַסָּבוּל*` (revising §12.6's `הַדָּוֶה`)**.
- **New one-lemma renderings:** *ʿtq* `נֶעְתַּק`, *ḫšt* `*קְבוּרָה*`, *ntn* `קִינָה`, *bd* (I) `נְהִי`, *ḥlm* (fortress)
  `*מְצוּדָה*`, *šnn* `שִׁנֵּן`, *blmt* `בַּל־מָוֶת`, *gyl* `גִּיל`, *dmm* (wail) `יִלֵּל`, *mḫ* `מֹחַ`, *ʿšr(t)* `מִשְׁתֶּה`, *tp*
  `תֹּף`, *mrḥ* `רֹמַח`, *grgr* `כִּידוֹן`, *ṣrr* `צָרַח`, *tnqt* (I) `זְעָקָה`, *mndʿ* `מִי יוֹדֵעַ`, *twr* `תּוּר`, *ʿly* `הָעֶלְיוֹן`,
  *nrt* (II) `נִיר`, *smm* `סַמִּים`, *ʿṭrṭrt* `עֲטָרָה`, *ḥmt* (II) `חֵמֶת`, *ngr* `כָּרוֹז`, *ḥkm* `חָכַם`, *bnwn* `בִּנְיָן`,
  *ḥrš* Gt `הִתְחָרֵשׁ`, *škn* Š `הִשְׁכִּין`, *ṭiṭ* `טִיט`, *qrṣ* `קָרַץ`, *dʿt* `זֵעָה`, *pṭr* `פָּטַר`, *brlt* `תַּאֲוָה`, *ṯrm*
  `חָתַךְ`, *ysr* `יִסֵּר`, *qġ* `הִטָּה`, *ġz* `שׁוֹדֵד`, *dbr* `הִדְבִּיר`, *ġlt* `רִפְיוֹן`, *qṣr npš* `קְצַר־נֶפֶשׁ`, *dl* `דַּל`,
  *ksl* `כֶּסֶל`, *ʿd* (III) `*אוּלָם*`.
- **Collisions:** (1) *zbl* (III) / *dw*: settled by the revision above. (2) *nrt* (II) and *nyr* both `נִיר` (a Hebrew
  homograph; both cognates; accepted). (3) *smkt* `מרומים` beside *mrym* `מרומי` (§1.2): a split by root, noted. (4)
  *mgṯ* `*טבח*` shares the root of *ṭbḫ* `טבח` (Gen 43:16 pairs them): accepted. (5) *dmm* "wail" `ילל` vs 1.14's *dm*
  "be still" `דום` (two lemmas, EUPT/DULAT). (6) *anšt* in VI:36: DULAT "illness" kept; EUPT's "companion" noted.
- **Gate note:** 1.16 V:31–32 have *tnn* / *ytnnh* as a verb form (not "dragon"): translated `…`; the `תנין` gate would
  have been licensed by the letters – a reminder that licences by string can license a false friend.

### Lessons for the guidelines

- **A cluster of near-synonyms needs a fixed table before the tablet** (Kirta's five words for illness): fix the
  cognate for each one first (*dw* דָּוֶה, *mdw* מַדְוֶה) and move the by-sense renderings of earlier tablets.
- **A licence by letters can admit a false friend** (*tnn* inside a verb form): read the line before trusting a
  licensed gate.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KTU 1.14)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:6 | [xxx]⸢d⸣ . nhr . umt | […]… נהר?; אֻמַּת | `שְׁנֵים עָשָׂר נְשִׂיאִם לְאֻמֹּתָם` (בראשית כה:טז) | cognate | `אֻמָּה` המקראית היא "שבט, בית אב", כמו *umt* כאן. |
| I:7 | [krt .] ʿrwt . bt | [כִּרְתָּא] עֻרְעֲרָה; בית | `עָרוּ עָרוּ עַד הַיְסוֹד בָּהּ` (תהלים קלז:ז) | cognate | אותו שורש, באותה משמעות: עיר (או בית) שנחשפה עד היסוד. |
| I:9 | [a]ḫm . lh . ṯmnt . bn um | אחים לו, שמונה בני אם. | `אֶת בִּנְיָמִין אָחִיו בֶּן אִמּוֹ` (בראשית מג:כט) | cognate | "בן אם" = אח מאותה אם, ולכן הקרוב ביותר. |
| I:10 | krt . ḥtkn . rš | כִּרְתָּא – שושלת רֻשְּׁשָׁה, | `כִּי תֹאמַר אֱדוֹם רֻשַּׁשְׁנוּ` (מלאכי א:ד) | cognate | אותו פועל: עם שנהרס ומבקש לבנות מחדש. |
| I:11 | krt . grdš . mknt | כִּרְתָּא – מכונה נהרסה: | `וְהֻנִּיחָה שָּׁם עַל מְכֻנָתָהּ` (זכריה ה:יא) | cognate | `מְכוֹנָה` "בסיס, מקום קבוע". |
| I:12 | aṯt . ṣdqh . l ypq | אשת צדקו – לא הֵפִיק, | `מָצָא אִשָּׁה מָצָא טוֹב; וַיָּפֶק רָצוֹן מֵיְהוָה` (משלי יח:כב) | cognate | אותו פועל (*pwq*) בהקשר של מציאת אישה. |
| I:15 | ṯt . rum . tkn . lh | שְׁאֵר אם היתה לו; | `שְׁאֵר אָבִיךָ הִוא` (ויקרא יח:יב) | cognate | `שְׁאֵר` = קרובת דם; כאן הקרובה מצד האם, ואולי בת משפחה שנישאה לו. |
| I:17 | mrbʿt . zblnm | הרביעית – בִּדְוַי; | `יְהוָה יִסְעָדֶנּוּ עַל-עֶרֶשׂ דְּוָי` (תהלים מא:ד) | equivalent | `דְּוַי` "חולי", ושם ליד `עֶרֶשׂ` כמו *zbl* // *ʿrš* בשורה II:45. |
| I:18 | mḫmšt . yitsp | החמישית – אסף לו | `וַיִּגְוַע וַיָּמָת אַבְרָהָם בְּשֵׂיבָה טוֹבָה … וַיֵּאָסֶף אֶל עַמָּיו` (בראשית כה:ח) | cognate | האסיפה במוות |
| I:18 | mḫmšt . yitsp | החמישית – אסף לו | `וַיִּגְוַע וַיָּמָת אַבְרָהָם בְּשֵׂיבָה טוֹבָה … וַיֵּאָסֶף אֶל עַמָּיו` (בראשית כה:ח) | divergence | במקרא המת "נאסף" אל אבותיו, כאן אל שואב אותו – רשף. |
| I:19 | rš⸢p⸣ . mṯdṯt . ġlm | רֶשֶׁף; השישית – עלמי | `וּלְחֻמֵי רֶשֶׁף` (דברים לב:כד) | cognate | במקרא רשף הוא מגפה וברק; כאן אל המגפה עצמו, "אוסף" את המתים. |
| I:20 | ym . mšbʿthn . b šlḥ{ḥ} | יָם; השביעית שבהן – בַּשֶּׁלַח | `וּבְעַד הַשֶּׁלַח יִפֹּלוּ` (יואל ב:ח) | cognate | אותו שם עצם ואותו פועל (נפל ב־*šlḥ*), בצבא הארבה של יואל |
| I:20 | ym . mšbʿthn . b šlḥ{ḥ} | יָם; השביעית שבהן – בַּשֶּׁלַח | `וְחַיָּתוֹ מֵעֲבֹר בַּשָּׁלַח` (איוב לג:יח) | cognate | שם ה"שלח" הוא כנראה נהר המוות, כמו בקריאה האחרת של השורה כאן. |
| I:22 | krt . ⸢yʿn⸣ . ḥtkh rš | כִּרְתָּא, הביט: שושלתו רֻשְּׁשָׁה, | — | — | [מקבילה: 1.14 I:10] – אותו צירוף, *ḥtk … rš*. |
| I:24 | w b ⸢klh⸣n . špḥ . ⸢yi⸣tbd | ובכולה המשפחה אבדה, | — | — | [מקבילה: 1.14 I:8] – *itbd* חוזר: "בית המלך אבד" … "המשפחה אבדה"; טבעת. |
| I:25 | w b . pḫyrh . yrṯ | ובאסופתה – היורש. | `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג) | cognate | אברם, שאין לו זרע, מתלונן שלא יהיה לו יורש מבשרו. כאן: לכרתא היה יורש – והוא אבד. ** |
| I:25 | w b . pḫyrh . yrṯ | ובאסופתה – היורש. | `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג) | divergence | ** אברם לא זכה לבן; כרתא איבד את בניו. |
| I:26 | yʿrb . b ḥdrh . ybky | נכנס לחדרו – בכה, | `וַיָּבֹא הַחַדְרָה וַיֵּבְךְּ שָׁמָּה` (בראשית מג:ל) | cognate | יוסף נכנס לחדר ובוכה, באותם שלושה שורשים (בוא/*ʿrb*, חדר, בכה) |
| I:26 | yʿrb . b ḥdrh . ybky | נכנס לחדרו – בכה, | `וַיָּצָם דָּוִד צוֹם וּבָא וְלָן וְשָׁכַב אָרְצָה` (שמואל ב יב:טז) | equivalent | מלך שבוכה ולן על ילדו. |
| I:28 | tntkn . udmʿth | נִתְּכוּ דמעותיו | `וּמָטָר לֹא נִתַּךְ אָרְצָה` (שמות ט:לג) | cognate | אותו פועל, ואחריו `אָרְצָה` כמו *arṣh* בשורה הבאה: הדמעות "ניתכות ארצה" כגשם. |
| I:29 | ⸢k⸣m . ṯqlm . arṣh | כמו שקלים ארצה, | — | cognate | `אָרְצָה` המקראי (שמות ט:לג, בשורה הקודמת). |
| I:30 | ⸢k⸣ mḫmšt . mṭth | כַּחֲמִישִׁיּוֹת מטתה. | `אַשְׂחֶה בְכָל-לַיְלָה מִטָּתִי; בְּדִמְעָתִי עַרְשִׂי אַמְסֶה` (תהלים ו:ז) | equivalent | המיטה הנרטבת בדמעות, באותו זוג (*mṭt* // הדמעות). |
| I:32 | ⸢b d⸣mʿh . nhmmt | בדמעו – תנומה; | `בַּחֲלוֹם חֶזְיוֹן לַיְלָה בִּנְפֹל תַּרְדֵּמָה עַל-אֲנָשִׁים; בִּתְנוּמוֹת עֲלֵי מִשְׁכָּב` (איוב לג:טו) | equivalent | חלום // חזיון, תנומה על המשכב: אותו רצף כמו כאן (מיטה, תנומה, חלום, חזיון, I:30–36). |
| I:33 | ⸢š⸣nt . tluan | שינה הֶלְאַתְהוּ, | `וַיִּלְאוּ לִמְצֹא הַפָּתַח` (בראשית יט:יא) | cognate | אותו שורש (לאה), ובעברית "התעייף עד שלא יכול". |
| I:36 | ⸢il⸣ . ⸢yrd⸣ . b ḏhrth | אֵל ירד, בחזיונו | `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה … וְהִנֵּה מַלְאֲכֵי אֱלֹהִים עֹלִים וְיֹרְדִים בּוֹ` (בראשית כח:יב) | cognate | בחלום יעקב עולים ויורדים המלאכים, כאן יורד אֵל עצמו |
| I:36 | ⸢il⸣ . ⸢yrd⸣ . b ḏhrth | אֵל ירד, בחזיונו | `בְּגִבְעוֹן נִרְאָה יְהוָה אֶל שְׁלֹמֹה בַּחֲלוֹם הַלָּיְלָה` (מלכים א ג:ה) | equivalent | האל מתגלה למלך בחלום ומציע לו מתנה |
| I:36 | ⸢il⸣ . ⸢yrd⸣ . b ḏhrth | אֵל ירד, בחזיונו | `הָיָה דְבַר יְהוָה אֶל אַבְרָם בַּמַּחֲזֶה` (בראשית טו:א) | equivalent | גם שם החזיון מגיע לאדם ערירי. |
| I:37 | ⸢ab⸣ . a⸢d⸣m . w yqrb | אבי אדם; וקרב | `אָדָם` (בראשית א:כו) | cognate | *adm*  – "אבי אדם", אבי המין האנושי: אֵל כאבי בני האדם (לא רק אבי האלים) |
| I:37 | ⸢ab⸣ . a⸢d⸣m . w yqrb | אבי אדם; וקרב | `אָדָם` (בראשית א:כו) | divergence | בבראשית האדם נברא בצלם, כאן אֵל הוא "אביו". |
| I:38 | ⸢b š⸣al . krt . m⟨h⟩ a {k}t | בִּשְׁאֹל את כִּרְתָּא: "מה – | `מַה לָּךְ הָגָר` (בראשית כא:יז) | equivalent | האל (מלאכו) שואל את הבוכה "מה לך", אחרי ש`שָׁמַע … אֶת קוֹל הַנַּעַר`; כאן ה"עלם" הבוכה הוא כרתא עצמו (I:40). |
| I:40 | ydmʿ . nʿmn . ġlm | ידמע הנעמן, עלם | — | — | [מקבילה: 1.14 II:8] – אותו צירוף בפי אֵל. |
| I:51 | [… lm] | [… למה] | — | — | [מקבילה: 1.14 III:33] – תשובת כרתא החוזרת. |
| I:52 | [ank . ksp….w yrq] | [אני – כסף וירקרק] | `מַה תִּתֶּן לִי וְאָנֹכִי הוֹלֵךְ עֲרִירִי` (בראשית טו:ב) | equivalent | אברם מסרב לשכר (`שְׂכָרְךָ הַרְבֵּה מְאֹד`, בראשית טו:א) כל עוד אין לו בן |
| I:52 | [ank . ksp….w yrq] | [אני – כסף וירקרק] | `וְלָמָּה זֶּה לִי בְּכֹרָה` (בראשית כה:לב) | equivalent | "למה זה לי". |
| II:1 | [ḫrṣ .] ⸢y⸣d . m⸢qm⸣h | [זהב], *עם* מקומו, | `כַּנְפֵי יוֹנָה נֶחְפָּה בַכֶּסֶף; וְאֶבְרוֹתֶיהָ בִּירַקְרַק חָרוּץ` (תהלים סח:יד) | cognate | *yrq ḫrṣ* הוא `יְרַקְרַק חָרוּץ` של המזמור: אותן שתי מלים (*ḫrṣ* = `חָרוּץ`, זהב), באותו סדר, וליד `כֶּסֶף`. |
| II:2 | [w ʿb]⸢d⸣ . ʿlm . ṯlṯ | [ועב]ד עולם, שלושה | `וְהָיָה לְךָ עֶבֶד עוֹלָם` (דברים טו:יז) | cognate | העבד שנרצע לנצח |
| II:2 | [w ʿb]⸢d⸣ . ʿlm . ṯlṯ | [ועב]ד עולם, שלושה | `תִּקָּחֶנּוּ לְעֶבֶד עוֹלָם` (איוב מ:כח) | cognate |  |
| II:3 | [ssw]⸢m⸣ . mrkbt . b trbṣ . bn . amt | [סוסי]ם, מרכבה מן המרבץ, בן אמה. | `וְיִנָּפֵשׁ בֶּן אֲמָתְךָ וְהַגֵּר` (שמות כג:יב) | cognate | "בן אמה" = עבד יליד בית |
| II:3 | [ssw]⸢m⸣ . mrkbt . b trbṣ . bn . amt | [סוסי]ם, מרכבה מן המרבץ, בן אמה. | `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי` (בראשית כא:י) | divergence | בן השפחה אינו יורש, ואינו פתרון לחוסר הבן; כך גם כאן: כרתא אינו רוצה "בן אמה" אלא בן מאשתו. |
| II:4 | [xxx .] ⸢ṯ⸣nm . aqny | […]… אֶקְנֶה, | `קָנִיתִי אִישׁ אֶת יְהוָה` (בראשית ד:א) | cognate | *qny* בהולדה: חוה "קנתה" בן; כאן כרתא רוצה "לקנות" צאצאים. |
| II:5 | [xx .] ⸢š⸣rm . amid | […]… אַשְׂגֶּה!" | `וְאַחֲרִיתְךָ יִשְׂגֶּה מְאֹד` (איוב ח:ז) | equivalent | `מְאֹד` עם פועל הריבוי. |
| II:7 | d[xx]t . b bk . {r}krt | "…[…]… בבכי כִּרְתָּא, | — | — | [מקבילה: 1.14 I:39–40] – אֵל חוזר על לשונו שלו (*bky*, *dmʿ*, *nʿmn ġlm il*). |
| II:8 | b ⸢dm⸣ʿ . n{m}ʿmn . ġlm | בדמע הנעמן, עלם | — | — | [מקבילה: 1.14 I:40] `ידמע הנעמן, עלם`. |
| II:9 | il . t⸢rt⸣ḥṣ . w tadm | אֵל. תתרחץ ותתאדם, | `אַל-תֵּרֶא יַיִן כִּי יִתְאַדָּם` (משלי כג:לא) | cognate | אותו פועל, שם ביין. |
| II:17 | qḥ . m⸢s⸣[rr….]⸢ʿ⸣ṣr | קח *קִ[רְבֵי]* ציפור | `וְלָקַח לַמִּטַּהֵר שְׁתֵּי צִפֳּרִים חַיּוֹת טְהֹרוֹת` (ויקרא יד:ד) | equivalent | ציפורים בטקס היטהרות; כאן ציפור זבח. |
| II:18 | dbḥ . ṣ⸢q⸣ [. b g]⸢l⸣ . ḥtṯ | זבח; צַק [בגו]לת כסף | `וְגֻלָּהּ עַל רֹאשָׁהּ` (זכריה ד:ב); `גֻּלַּת הַזָּהָב` (קהלת יב:ו) | cognate | `גֻּלָּה` "קערה, כלי מעוגל";  – כמו *gl ḫrṣ* בשורה הבאה. |
| II:19 | yn . b gl . [… ḫ]⸢r⸣ṣ . nbt | יין, בגולת זהב – נופת. | `וּמְתוּקִים מִדְּבַשׁ וְנֹפֶת צוּפִים` (תהלים יט:יא) | cognate |  |
| II:20 | ʿl . l ẓr . ⸢m⸣[g]dl | עֲלֵה לגו המגדל, | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | divergence | גם כאן מגדל, ראשו, והשמים (II:22–23); אך כאן המגדל הוא מקום תפילה וקרבן לאל שציווה עליו, ובבבל – מקום של גאווה שאלוהים מפזר. |
| II:22 | ṯkmm . ḥm⸢t⸣ . ša . ydk | (על) שכמי החומה; שא ידיך | `כִּי-אֶשָּׂא אֶל-שָׁמַיִם יָדִי` (דברים לב:מ) | cognate |  |
| II:22 | ṯkmm . ḥm⸢t⸣ . ša . ydk | (על) שכמי החומה; שא ידיך | `בְּנָשְׂאִי יָדַי אֶל-דְּבִיר קָדְשֶׁךָ` (תהלים כח:ב) | cognate | נשיאת הידיים לשמים כתנוחת תפילה. |
| II:28 | akl . ⸢l⸣ qryt | אוֹכֶל לקריה, | `וַיִּתֶּן אֹכֶל בֶּעָרִים` (בראשית מא:מח); `אֹכֶל בֶּעָרִים וְשָׁמָרוּ` (בראשית מא:לה) | cognate | יוסף אוגר אוכל בערים לקראת הרעב; כאן המלך מכין אוכל לעיר לקראת המלחמה |
| II:28 | akl . ⸢l⸣ qryt | אוֹכֶל לקריה, | `וַיִּתֶּן אֹכֶל בֶּעָרִים` (בראשית מא:מח); `אֹכֶל בֶּעָרִים וְשָׁמָרוּ` (בראשית מא:לה) | divergence |  |
| II:32 | ʿdn . ngb . w yṣi | ההמון יסופק – ויצא; | `כָּל יֹצֵא צָבָא בְּיִשְׂרָאֵל` (במדבר א:ג) | cognate | *yṣʾ* + *ṣbʾ* (II:33–34): "יוצא צבא" הוא צירוף משותף. |
| II:33 | ṣb⸢u⸣ . ṣbi . ngb | צבא הצבא יסופק, | `יָצְאוּ כָּל צִבְאוֹת יְהוָה` (שמות יב:מא) | cognate | צבא + יצא |
| II:33 | ṣb⸢u⸣ . ṣbi . ngb | צבא הצבא יסופק, | `יָצְאוּ כָּל צִבְאוֹת יְהוָה` (שמות יב:מא) | equivalent | הצירוף הסמיכותי המעצים, כמו `שִׁיר הַשִּׁירִים`. |
| II:37 | ḫpṯ . d bl . spr | חָפְשִׁים אשר בל מספר, | `וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | cognate | `חָפְשִׁי` המקראי הוא עבד משוחרר; במזרח הקדום (אכדית *ḫupšu*) – שכבה חברתית נמוכה, מגויסים. |
| II:37 | ḫpṯ . d bl . spr | חָפְשִׁים אשר בל מספר, | `כְדֵי-אַרְבֶּה לָרֹב וְלָהֶם וְלִגְמַלֵּיהֶם אֵין מִסְפָּר` (שופטים ו:ה) | equivalent | "אין מספר" ליד הארבה (II:50). |
| II:38 | ṯnn . d bl . hg | *שִׁנְאַנִּים* אשר בל *חשבון*. | — | — | [cognate?] `רֶכֶב אֱלֹהִים רִבֹּתַיִם אַלְפֵי שִׁנְאָן` (תהלים סח:יח) – יש המקשרים את המלה הסתומה שִׁנְאָן ל־*ṯnn* האוגריתי (לוחמי מרכבה); וגם שם `רִבֹּתַיִם` // `אַלְפֵי`, כמו *rbt* (II:36, 40) // *alpm* (II:39). |
| II:40 | w l rbt . km . yr | ולרבבות – כמו יורה. | `וְנָתַתִּי מְטַר אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ` (דברים יא:יד) | cognate | אותה מלה לגשם הראשון. |
| II:41 | ⸢a⸣ṯr . ṯn . ṯn . hlk | אחר שניים – שניים הולכים, | `שְׁנַיִם שְׁנַיִם בָּאוּ אֶל נֹחַ אֶל הַתֵּבָה` (בראשית ז:ט) | cognate | אותו צירוף "שניים שניים" (הכפלת המספר לחלוקה); הקשר אחר לגמרי – כאן טורי צבא (הערה לשונית, לא מוטיב משותף). |
| II:43 | yḥd . bth . sgr | היחיד – ביתו יסגור, | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ` (בראשית כב:ב) | cognate | `יָחִיד` הוא הבן היחיד או האדם הבודד. |
| II:44 | ⸢a⸣lmnt . škr | האלמנה – שָׂכֹר | `כִּי שָׂכֹר שְׂכַרְתִּיךָ בְּדוּדָאֵי בְּנִי` (בראשית ל:טז) | cognate | אותו מבנה: מקור מוחלט + פועל נטוי של *śkr*. |
| II:45 | ⸢t⸣škr . zbl . ʿršm | תִּשְׂכֹּר; *הַסָּבוּל* – ערש | `יְהוָה יִסְעָדֶנּוּ עַל-עֶרֶשׂ דְּוָי` (תהלים מא:ד) | equivalent | החולה וערש הדוי. |
| II:46 | ⸢y⸣šu . ʿwr . m{s}zl {ym} | יִשָּׂא; העיוור – *גַּשֵּׁשׁ* | `נְגַשְׁשָׁה כַעִוְרִים קִיר` (ישעיהו נט:י); `כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | equivalent |  |
| II:47 | ymzl . w yṣi . trḫ | *יְגַשֵּׁשׁ*; ויצא מְאָרֵשׂ | `כִּי יִקַּח אִישׁ אִשָּׁה חֲדָשָׁה לֹא יֵצֵא בַּצָּבָא` (דברים כד:ה) | divergence | באותן מלים בדיוק: *yṣʾ* `יֵצֵא`, *ḥdṯ* `חֲדָשָׁה`, *ṣbu* `צָבָא` (II:33–35) – אבל בשלילה הפוכה: בתורה החתן החדש לא יצא, כאן "ויצא החתן החדש". |
| II:47 | ymzl . w yṣi . trḫ | *יְגַשֵּׁשׁ*; ויצא מְאָרֵשׂ | `וּמִי הָאִישׁ אֲשֶׁר אֵרַשׂ אִשָּׁה וְלֹא לְקָחָהּ יֵלֵךְ וְיָשֹׁב לְבֵיתוֹ` (דברים כ:ז) | divergence | הפועל `אֵרַשׂ` כמו *trḫ* (לפי המשמעות). |
| II:48 | ḥdṯ . ybʿr . l ṯn | חדש; יטוש לַשֵּׁנִי | `פֶּן יָמוּת בַּמִּלְחָמָה וְאִישׁ אַחֵר יִקָּחֶנָּה` (דברים כ:ז) | divergence |  |
| II:48 | ḥdṯ . ybʿr . l ṯn | חדש; יטוש לַשֵּׁנִי | `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר יִשְׁגָּלֶנָּה` (דברים כח:ל) | equivalent | מה שבתורה הוא קללה או סיבה לפטור, כאן הוא מחיר הגיוס. |
| II:50 | ⸢m⸣ddth . k irby | את חביבתו. כָּאַרְבֶּה | `כְדֵי-אַרְבֶּה לָרֹב` (שופטים ו:ה) | cognate |  |
| II:50 | ⸢m⸣ddth . k irby | את חביבתו. כָּאַרְבֶּה | `כִּי רַבּוּ מֵאַרְבֶּה וְאֵין לָהֶם מִסְפָּר` (ירמיהו מו:כג) | cognate | צבא כארבה ובלי מספר, כמו כאן (II:37–38, 50). |
| III:1 | ⸢km⸣ . ⸢ḥsn⸣ . ⸢pat⸣ . ⸢mdbr⸣ | כחסיל – (על) פאת המדבר. | `וְיֶתֶר הַיֶּלֶק אָכַל הֶחָסִיל` (יואל א:ד) | equivalent | ארבה וחסיל בצבא הארבה של יואל. |
| III:2 | ⸢lk⸣ . ⸢ym⸣ . ⸢w ṯn⸣ . ⸢ṯlṯ⸣ . ⸢rbʿ ym⸣ | לֵךְ יום ושני, שלישי, רביעי יום, | — | divergence | ספירת שבעת הימים (`../renderings.md` §6.10) ↔ בראשית א:ה–ב:ג: ששה ימים, והשביעי – ההשלמה; כאן ששה ימי הליכה, ובשביעי – ההגעה. |
| III:6 | w gr{.}nn . ʿrm . šrn | והִתְגָּר בה, בעיר; *הָצֵק* | `הָחֵל רָשׁ; וְהִתְגָּר בּוֹ מִלְחָמָה` (דברים ב:כד) | cognate | אותו פועל, בציווי האלוהי לפתוח במלחמה נגד סיחון. |
| III:8 | ḥṭbh . b grnt . ḥpšt | החוטבת, מן הגרנות – *המחפשת*; | `מֵחֹטֵב עֵצֶיךָ עַד שֹׁאֵב מֵימֶיךָ` (דברים כט:י); `וַיִּהְיוּ חֹטְבֵי עֵצִים וְשֹׁאֲבֵי מַיִם לְכָל הָעֵדָה` (יהושע ט:כא) | cognate | הזוג חוטב // שואב (*ḥṭb* // *šib*, III:8–9) הוא זוג המקרא לפשוטי העם ולעבודות השוליים. |
| III:9 | sʿt . b n⟨p⟩k . šibt . b bqr | *תִּסָּחֵף* מן המבוע השואבת, מן המקור | `לְעֵת צֵאת הַשֹּׁאֲבֹת` (בראשית כד:יא); `וַתֵּרֶד הָעַיְנָה וַתְּמַלֵּא כַדָּהּ` (בראשית כד:טז) | cognate | הנשים היוצאות לשאוב מחוץ לעיר; ושם  – שאיבה ומילוי, כמו כאן *šibt* // *mmlat*. |
| III:9 | sʿt . b n⟨p⟩k . šibt . b bqr | *תִּסָּחֵף* מן המבוע השואבת, מן המקור | `מְקוֹר מַיִם חַיִּים` (ירמיהו ב:יג) | equivalent |  |
| III:10 | mmlat . dm . ym . w ṯn | הממלאת. דּוֹם יום ושני, | `שֶׁמֶשׁ בְּגִבְעוֹן דּוֹם` (יהושע י:יב) | cognate | `דּוֹם` "עמוד, חכה בשקט" |
| III:10 | mmlat . dm . ym . w ṯn | הממלאת. דּוֹם יום ושני, | `כִּי תָצוּר אֶל עִיר יָמִים רַבִּים לְהִלָּחֵם עָלֶיהָ` (דברים כ:יט) | equivalent | מצור של ימים. |
| III:15 | b šbʿ . w l . yšn . pbl | בשביעי – ולא יישן פַּבִּל | `בַּלַּיְלָה הַהוּא נָדְדָה שְׁנַת הַמֶּלֶךְ` (אסתר ו:א) | equivalent | מלך שאינו ישן |
| III:15 | b šbʿ . w l . yšn . pbl | בשביעי – ולא יישן פַּבִּל | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | equivalent |  |
| III:16 | mlk . l qr . ṯigt . ibrh | המלך, משאון שאגת אביריו, | `מִקּוֹל מִצְהֲלוֹת אַבִּירָיו רָעֲשָׁה כָּל הָאָרֶץ` (ירמיהו ח:טז) | cognate |  |
| III:16 | mlk . l qr . ṯigt . ibrh | המלך, משאון שאגת אביריו, | `מִקּוֹל שַׁעֲטַת פַּרְסוֹת אַבִּירָיו` (ירמיהו מז:ג) | cognate | אותו מבנה: "מקול + שם פעולה + אביריו" – תיאור הצבא הנשמע מרחוק; כאן קול הבהמות הנצורות. |
| III:17 | l ql . nhqt . ḥmrh | מקול נהקת חמוריו, | `הֲיִנְהַק-פֶּרֶא עֲלֵי-דֶשֶׁא; אִם יִגְעֶה-שּׁוֹר עַל-בְּלִילוֹ` (איוב ו:ה) | cognate | הזוג נהק // געה (III:17–18), ושניהם על בהמה רעבה: איוב שואל אם בהמה נוהקת כשיש לה מזון – כאן הבהמות נוהקות כי המצור מנע מהן מזון ומים. |
| III:22 | qḥ . ksp . w yrq . ḫrṣ | קח כסף וירקרק זהב, | `בִּירַקְרַק חָרוּץ` (תהלים סח:יד) | cognate |  |
| III:23 | yd . mqmh . w ʿbd .ʿlm | *עם* מקומו, ועבד עולם, | `עֶבֶד עוֹלָם` (דברים טו:יז) | cognate | [מקבילה: 1.14 II:1–2]. |
| III:24 | ṯlṯ . sswm . mrkbt | שלושה סוסים, מרכבה | — | — | [מקבילה: 1.14 II:2–3]. |
| III:25 | b trbṣ . bn . amt | מן המרבץ, בן אמה. | — | — | [מקבילה: 1.14 II:3] – אותה מלה במלה. |
| III:26 | qḥ . krt . šlmm | קח, כִּרְתָּא, שלמים, | `כִּי תִקְרַב אֶל עִיר לְהִלָּחֵם עָלֶיהָ וְקָרָאתָ אֵלֶיהָ לְשָׁלוֹם` (דברים כ:י) | divergence | בתורה הצר קורא לעיר לשלום; כאן העיר הנצורה קוראת לצר לשלום, ומציעה כסף ועבדים. |
| III:26 | qḥ . krt . šlmm | קח, כִּרְתָּא, שלמים, | `זֶבַח שְׁלָמִים` (ויקרא ג:א) | cognate | אותה מלה, שם קרבן. |
| III:29 | l ḥẓry . al . tṣr | מחצרי! אל תָּצַר | `כִּי תָצוּר אֶל עִיר יָמִים רַבִּים` (דברים כ:יט) | cognate | אותו פועל, בדיני המצור של התורה. |
| III:31 | udm . ytn{a}t . il . w ušn | אוּדֻם – מַתַּת אֵל, ותשורת | `לְךָ יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | equivalent | מתנת מלכים לאל. |
| III:32 | ab . adm . w ṯṯb | אבי אדם." והָשֵׁב | — | — | [מקבילה: 1.14 I:37] `אבי אדם`. |
| III:33 | mlakm . lh . lm . ank | מלאכים אליו: "למה אני – | `מַה תִּתֶּן לִי וְאָנֹכִי הוֹלֵךְ עֲרִירִי` (בראשית טו:ב) | equivalent |  |
| III:34 | ksp . w yrq . ḫrṣ | כסף וירקרק זהב, | — | — | [מקבילה: 1.14 III:22]. |
| III:38 | p d . in . b bty . ttn | ואשר אין בביתי – תתן: | `הָבָה לִּי בָנִים וְאִם אַיִן מֵתָה אָנֹכִי` (בראשית ל:א) | equivalent | רחל מבקשת את מה שאין בביתה. |
| III:39 | tn . ly . mṯt . ḥry | תן לי את הגבֶרֶת חֻרַּיָּה, | `הָבָה אֶת אִשְׁתִּי` (בראשית כט:כא) | equivalent | יעקב, שעבד בשביל רחל, תובע את אשתו. |
| III:41 | ⸢d⸣ k . nʿm . ʿnt . nʿmh | אשר כנועם עֲנָת נועמה, | `כִּי אִשָּׁה יְפַת מַרְאֶה אָתְּ` (בראשית יב:יא); `וְרָחֵל הָיְתָה יְפַת תֹּאַר וִיפַת מַרְאֶה` (בראשית כט:יז) | equivalent | יופי האם העתידה |
| III:41 | ⸢d⸣ k . nʿm . ʿnt . nʿmh | אשר כנועם עֲנָת נועמה, | `כִּי אִשָּׁה יְפַת מַרְאֶה אָתְּ` (בראשית יב:יא); `וְרָחֵל הָיְתָה יְפַת תֹּאַר וִיפַת מַרְאֶה` (בראשית כט:יז) | divergence | המקרא אינו משווה את יופי האשה לאלה. |
| III:42 | km . tsm . ʿṯtrt . ⸢ts⸣mh | כמו יפעת עַתְּתַרְת יפעתה; | `וְחִלְּלוּ יִפְעָתֶךָ` (יחזקאל כח:ז) | equivalent | `יִפְעָה` "זוהר, הדר יופי". |
| III:43 | d ʿqh . ib . iqni . ʿp⸢ʿ⸣[p]⸢h⸣ | אשר אישוניה – *טוהר* ספיר, עפעפיה – | `כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר וּכְעֶצֶם הַשָּׁמַיִם לָטֹהַר` (שמות כד:י) | equivalent | הספיר והטוהר יחד (אם *ib* "טהור"). |
| III:43 | d ʿqh . ib . iqni . ʿp⸢ʿ⸣[p]⸢h⸣ | אשר אישוניה – *טוהר* ספיר, עפעפיה – | `עַפְעַפָּיו יִבְחֲנוּ בְּנֵי אָדָם` (תהלים יא:ד) | cognate |  |
| III:44 | sp . ṯrml . tḥgrn . ⸢ṯd⸣m | סִפֵּי *בַהַט*; *נחגרת* […]… | `וּטְבַלְתֶּם בַּדָּם אֲשֶׁר בַּסַּף` (שמות יב:כב) | cognate | `סַף` "קערה". |
| III:45 | ašlw . b ṣp . ʿnh | אשר במבט עיניה אֶשְׁלֶה, | `לֹא שָׁלַוְתִּי וְלֹא שָׁקַטְתִּי` (איוב ג:כו) | cognate |  |
| III:46 | d b ḥlmy . il . yt⸢n⸣ | אשר בחלומי נתן אֵל, | `שְׁאַל מָה אֶתֶּן לָךְ` (מלכים א ג:ה) | equivalent | האל נותן בחלום. |
| III:47 | b ḏrty . ab . adm | בחזיוני – אבי אדם; | — | — | [מקבילה: 1.14 I:36–37]. |
| III:48 | wld . špḥ . l krt | ותלד משפחה לכִּרְתָּא, | `וַתֵּרֶא רָחֵל כִּי לֹא יָלְדָה לְיַעֲקֹב` (בראשית ל:א) | equivalent | "ילדה ל־" האיש: הלידה לבעל. |
| III:49 | w ġlm . l ʿbd . il | ועלם – לעבד אֵל." | `הָבָה לִּי בָנִים` (בראשית ל:א) | equivalent |  |
| III:50 | krt . yḫṭ . w ḥlm | כִּרְתָּא הקיץ – וחלום! | `וַיִּקַץ שְׁלֹמֹה וְהִנֵּה חֲלוֹם; וַיָּבוֹא יְרוּשָׁלִַם … וַיַּעַל עֹלוֹת וַיַּעַשׂ שְׁלָמִים` (מלכים א ג:טו) | equivalent | אותו מבנה (הקיץ + חלום), ובשניהם המלך המקיץ הולך מיד להקריב |
| III:50 | krt . yḫṭ . w ḥlm | כִּרְתָּא הקיץ – וחלום! | `וַיִּיקַץ פַּרְעֹה וְהִנֵּה חֲלוֹם` (בראשית מא:ז) | equivalent |  |
| III:50 | krt . yḫṭ . w ḥlm | כִּרְתָּא הקיץ – וחלום! | `וַיִּיקַץ יַעֲקֹב מִשְּׁנָתוֹ` (בראשית כח:טז) | equivalent |  |
| III:51 | ʿbd . il . w hdrt | עבד אֵל – וחזיון! | — | — | [cognate?] `בְּהַדְרַת-קֹדֶשׁ` (תהלים כט:ב) – יש המקשרים את `הַדְרָה` המקראית (גם "התגלות") ל־*hdrt*. |
| III:52 | yr{x}t{x}ḥ{x}ṣ . w yadm | התרחץ והתאדם; | — | — | [מקבילה: 1.14 II:9] `תתרחץ ותתאדם`. |
| III:53 | yrḥṣ . ydh . amth | רחץ ידיו – (עד) אמתו, | — | — | [מקבילה: 1.14 II:10] `רחץ [י]דיך – (עד) האמה` – כאן *amth* "אמתו" (בצו *amt* בלי כינוי). |
| III:54 | uṣbʿth .ʿd . ṯkm | אצבעותיו עד השכם; | — | — | [מקבילה: 1.14 II:11]. |
| III:55 | ʿrb . b ẓl . ḫmt . lqḥ | נכנס בצל הסוכה; לקח | — | — | [מקבילה: 1.14 II:12–13] `היכנס [בצל הסוכה]; קח`. |
| III:56 | imr . dbḥ . b ydh | כבש זבח בידו, | — | — | [מקבילה: 1.14 II:13–14] `קח כב[ש בידי]ך, כבש ז[בח בי]מין` – הביצוע מאחד את שתי הצלעות: "כבש זבח בידו". |
| III:57 | lla . klatnm | טלה – בשתי (ידיים); | — | — | [מקבילה: 1.14 II:15]. |
| III:58 | klt . lḥmh . d nzl | כל לחמו – של *תקרובת*; | — | — | [מקבילה: 1.14 II:16] `כל לח[מך] – של *תקרובת*`. |
| III:59 | lqḥ . msrr . ṣr . ⸢dbḥ⸣ | לקח *קרבי* ציפור זבח, | — | — | [מקבילה: 1.14 II:17–18] `קח *קִ[רְבֵי]* ציפור / זבח`. |
| IV:1 | yṣq . b gl . ḥtṯ . yn | יצק בגולת כסף יין, | — | — | [מקבילה: 1.14 II:18–19] `צַק [בגו]לת כסף / יין`. |
| IV:2 | b gl . ⸢ḫ⸣rṣ . nbt . w ʿly | בגולת זהב – נופת. ועלה | — | — | [מקבילה: 1.14 II:19–20]. |
| IV:3 | ⸢l ẓ⸣r . mgdl . rkb | לגו המגדל, רכב | — | — | [מקבילה: 1.14 II:21] `ועלה לגו המגדל, רכב`. |
| IV:4 | ⸢ṯk⸣mm . ḥmt . nša | (על) שכמי החומה; נשא | — | — | [מקבילה: 1.14 II:22] `שא ידיך`. |
| IV:5 | ⸢y⸣dh . šmmh . dbḥ | ידיו שמימה; זבח | — | — | [מקבילה: 1.14 II:23]. |
| IV:6 | ⸢l ṯ⸣r . abh . il . šrd | לשור, אביו, אֵל; שירת | — | — | [מקבילה: 1.14 II:23–24] `זבח לשור, / אביך, אֵל; שָׁרֵת`. |
| IV:7 | ⸢bʿl⸣ . b dbḥh . bn dgn | את בעל בזבחו, את בֶּן דָּגָן | — | — | [מקבילה: 1.14 II:24–25]. |
| IV:8 | ⸢b⸣ [m]⸢ṣ⸣dh . yrd . krt | בצידו. ירד כִּרְתָּא | — | — | [מקבילה: 1.14 II:26–27] `בצידך. וירד / כִּרְתָּא` – בביצוע בלי "ו־" (*yrd* בלי *w*). |
| IV:9 | ⸢l gg⸣t . ʿdb . akl . l qryt | מן הגגות; תיקן אוכל לקריה, | — | — | [מקבילה: 1.14 II:27–28] `מן הגגות; יתקן / אוֹכֶל לקריה`. |
| IV:10 | ⸢ḥt⸣t . l bt . ḫbr | חיטה לבית־חבור; | — | — | [מקבילה: 1.14 II:29]. |
| IV:11 | ⸢yip⸣ . lḥm . d ḫmš | אפה לחם של חמישה, | — | — | [מקבילה: 1.14 II:30] `יאפה לחם של חמישה` – אותה שורה אוגריתית; ההבדל בעברית מוצדק: בצו (דברי אֵל) התחיליות היא עתיד (`יאפה`), כאן בסיפור – עבר (`אפה`; `../renderings.md` §3). |
| IV:12 | ⸢m⸣[ġ]d . ṯdṯ . y⸢rḫ⸣[m] | מחיה – ששת ירחים. | — | — | [מקבילה: 1.14 II:31]. |
| IV:13 | ⸢ʿdn⸣ . ngb . ⸢w⸣ [yṣu . ṣbu] | ההמון סופק – ו[יצא; צבא] | — | — | [מקבילה: 1.14 II:32–33] `ההמון יסופק – ויצא; / צבא` – בביצוע עבר: `סופק`, `יצא`. |
| IV:14 | ⸢ṣba⸣ . ng⸢b⸣ [. w yṣu . ʿdn] | הצבא סופק, [ויצא ההמון] | — | — | [מקבילה: 1.14 II:33–34]. |
| IV:15 | mʿ . ⸢ṣb⸣uh . ⸢ul⸣ [. mad] | *יחדיו*. צבאו – חיל [(רב) מאוד], | — | — | [מקבילה: 1.14 II:34–35] `צבאך – חיל (רב) מאוד` – כאן "צבאו". |
| IV:16 | ṯ⸢lṯ⸣ . mat . rb⸢t⸣ | שלוש מאות רבבה. | — | — | [מקבילה: 1.14 II:36]. |
| IV:17 | hlk . l a{p}lpm . ḫḏḏ | הולכים לאלפים – *סערה*, | — | — | [מקבילה: 1.14 II:39]. |
| IV:18 | w l . rbt .km yr | ולרבבות – כמו יורה. | — | — | [מקבילה: 1.14 II:40]. |
| IV:19 | aṯr . ṯn . ṯn . hlk | אחר שניים – שניים הולכים, | — | — | [מקבילה: 1.14 II:41]. |
| IV:20 | aṯr . ṯlṯ . klhm | אחר שלושה – כולם. | — | — | [מקבילה: 1.14 II:42]. |
| IV:21 | aḥd . bth . ysgr | האחד – ביתו סגר, | — | — | [מקבילה: 1.14 II:43] `היחיד – ביתו יסגור` – שתי ההבדלים של הלוח: *aḥd* במקום *yḥd* (`האחד` במקום `היחיד`), ותחיליות (*ysgr*, כאן עבר) במקום סיומות (*sgr*, שם ציווי־עתיד). |
| IV:22 | almnt . škr | האלמנה – שָׂכֹר | — | — | [מקבילה: 1.14 II:44]. |
| IV:23 | tškr . zbl . ʿršm | שָׂכְרָה; *הַסָּבוּל* – ערש | — | — | [מקבילה: 1.14 II:45] `תִּשְׂכֹּר; *הַסָּבוּל* – ערש` – אותה שורה אוגריתית; ההבדל מוצדק: בצו עתיד (`תִּשְׂכֹּר`), כאן בסיפור – עבר (`שָׂכְרָה`; `../renderings.md` §3). |
| IV:24 | yšu . ʿ⸢w⸣r | נשא; העיוור – | — | — | [מקבילה: 1.14 II:46] `יִשָּׂא; העיוור – *גַּשֵּׁשׁ*` – השבירה כאן אחרת. |
| IV:25 | mzl . ymzl | *גַּשֵּׁשׁ גִּשֵּׁשׁ*. | — | — | [מקבילה: 1.14 II:46–47]. |
| IV:26 | w ybl . trḫ . ḥdṯ | והוּבַל מְאָרֵשׂ חדש; | `לֹא יֵצֵא בַּצָּבָא` (דברים כד:ה) | divergence | כאן החתן אף מובא בעל כורחו. |
| IV:27 | ybʿr . l ṯn . aṯth | נטש לשני את אשתו, | — | — | [מקבילה: 1.14 II:48–49] `יטוש לַשֵּׁנִי / את אשתו` – כאן עבר. |
| IV:28 | w l nkr . mddt | ולנכרי – את החביבה. | — | — | [מקבילה: 1.14 II:49–50] `לנכרי – / את חביבתו` – כאן בלי כינוי (*mddt*), ועם "ו־". |
| IV:29 | km irby . tškn | כָּאַרְבֶּה שכנו | — | — | [מקבילה: 1.14 II:50–51] `כָּאַרְבֶּה / ישכנו`. |
| IV:30 | šd . k ḥsn . pat | (על) שדה, כחסיל – (על) פאת | — | — | [מקבילה: 1.14 II:51–III:1]. |
| IV:31 | mdbr . tlkn | המדבר. הלכו | — | — | [מקבילה: 1.14 III:1–2] – בצו `לֵךְ` (ציווי יחיד), כאן "הלכו" (הצבא). |
| IV:32 | ym . w ṯn . ⸢a⸣ḫr | יום ושני; אחר – | — | — | [מקבילה: 1.14 III:2] – נוסחת הימים נקטעת: יום ושני, ובשלישי – עצירה. |
| IV:33 | šp⸢š⸣m . b ⸢ṯ⸣lṯ | עם שַׁפְּשׁ, בשלישי, | — | — | [מקבילה: 1.14 III:3–4] `הנה עם שַׁפְּשׁ, / בַּשְּׁבִיעִי` – כאן "אחר" (*aḫr*) במקום "הנה" (*mk*), ו"שלישי" במקום "שביעי". |
| IV:35 | a⸢ṯrt⸣ [.] ṣrm . w l ilt | אֲתִירַת צוֹר, ואל אֵלַת | `וַיֵּלֶךְ שְׁלֹמֹה אַחֲרֵי עַשְׁתֹּרֶת אֱלֹהֵי צִדֹנִים` (מלכים א יא:ה) | cognate | "אלהי צידונים": כינוי האלה של צידון במקרא, כמו *ilt ṣdynm* כאן (שם עשתורת, כאן אתירת). |
| IV:36 | ṣd⸢yn⸣m . ṯm | צִידוֹנִים. שם | `צִידֹנִים יִקְרְאוּ לְחֶרְמוֹן שִׂרְיֹן` (דברים ג:ט) | cognate |  |
| IV:37 | ⸢yd⸣r [.] ⸢k⸣rt . ṯʿ | נדר כִּרְתָּא השׁוֹעַ: | `וַיִּדַּר יַעֲקֹב נֶדֶר לֵאמֹר: אִם יִהְיֶה אֱלֹהִים עִמָּדִי` (בראשית כח:כ) | cognate | נדר בדרך, אחרי חלום, בלשון "אם … אז" |
| IV:37 | ⸢yd⸣r [.] ⸢k⸣rt . ṯʿ | נדר כִּרְתָּא השׁוֹעַ: | `וַיִּדַּר יִפְתָּח נֶדֶר לַיהוָה וַיֹּאמַר: אִם נָתוֹן תִּתֵּן אֶת בְּנֵי עַמּוֹן בְּיָדִי` (שופטים יא:ל) | cognate | נדר לפני מלחמה |
| IV:37 | ⸢yd⸣r [.] ⸢k⸣rt . ṯʿ | נדר כִּרְתָּא השׁוֹעַ: | `וַתִּדֹּר נֶדֶר וַתֹּאמַר … וְנָתַתָּה לַאֲמָתְךָ זֶרַע אֲנָשִׁים` (שמואל א א:יא) | cognate | נדר על ילד. |
| IV:38 | i{ṯ}iṯt . aṯrt . ṣrm | "*הוֹ, יֵשׁ* אֲתִירַת צוֹר, | `אָכֵן יֵשׁ יְהוָה בַּמָּקוֹם הַזֶּה` (בראשית כח:טז) | cognate | יעקב, המקיץ מחלומו, אומר "יש" על האל – ומיד אחר כך נודר (בראשית כח:כ). כאן שבועה "בקיום" האלה. |
| IV:38 | i{ṯ}iṯt . aṯrt . ṣrm | "*הוֹ, יֵשׁ* אֲתִירַת צוֹר, | `אָכֵן יֵשׁ יְהוָה בַּמָּקוֹם הַזֶּה` (בראשית כח:טז) | equivalent | נוסחת השבועה המקראית `חַי יְהוָה`. |
| IV:39 | w ilt . ṣdynm | ואֵלַת צִידוֹנִים: | — | — | [מקבילה: 1.14 IV:35–36]. |
| IV:40 | hm . ḥry . bty | אם את חֻרַּיָּה לביתי | `אִם יִהְיֶה אֱלֹהִים עִמָּדִי` (בראשית כח:כ) | equivalent | נדר מותנה. |
| IV:41 | iqḥ . ašʿrb . ġlmt | אקח, אכניס עלמה | `כִּי יִקַּח אִישׁ אִשָּׁה` (דברים כד:א) | cognate | *lqḥ* = נשיאת אישה |
| IV:41 | iqḥ . ašʿrb . ġlmt | אקח, אכניס עלמה | `הָעַלְמָה הַיֹּצֵאת לִשְׁאֹב` (בראשית כד:מג) | cognate |  |
| IV:42 | ḥẓry . ṯnh . wspm | לחצרי – מִשְׁנֵהָ כסף | `וְכֶסֶף מִשְׁנֶה קְחוּ בְיֶדְכֶם` (בראשית מג:יב) | cognate | `מִשְׁנֶה` "כפל" עם כסף |
| IV:42 | ḥẓry . ṯnh . wspm | לחצרי – מִשְׁנֵהָ כסף | `אִישׁ כִּי יַפְלִא נֶדֶר בְּעֶרְכְּךָ נְפָשֹׁת לַיהוָה` (ויקרא כז:ב) | equivalent | נדר הנמדד בערך אדם בכסף. |
| IV:43 | atn . w . ṯlṯt{i}h . ḫrṣm | אתן, ושִׁלּוּשָׁהּ – זהב." | `וְכֹל אֲשֶׁר תִּתֶּן לִי עַשֵּׂר אֲעַשְּׂרֶנּוּ לָךְ` (בראשית כח:כב) | equivalent | הנודר מבטיח חלק קצוב מן המתנה. |
| IV:44 | ylk ym . w ṯn . {a} | הלך יום ושני, | — | — | [מקבילה: 1.14 III:2] `לֵךְ יום ושני` – כאן "הלך" (כרתא; ב־IV:31 "הלכו" – הצבא). |
| IV:46 | aḫr . špšm . b rbʿ | אחר – עם שַׁפְּשׁ, ברביעי, | — | — | [מקבילה: 1.14 IV:32–33] `אחר – / עם שַׁפְּשׁ, ב[ש]לישי` – כאן "ברביעי". |
| IV:47 | ymġy . l udm . rbt | הגיע לאוּדֻם הרבה, | — | — | [מקבילה: 1.14 III:4–5] `ותגיע לאוּדֻם / הרבה`. |
| IV:48 | w udm . [ṯr]rt | ולאוּדֻם *הנשגבת*. | — | — | [מקבילה: 1.14 III:5]. |
| IV:49 | {y}grnn . ʿrm | התגרה בה, בעיר, | — | — | [מקבילה: 1.14 III:6] `והִתְגָּר בה, בעיר`. |
| IV:50 | {y}šrna . pdrm | *הֵצִיק* לה, לעיירה; | — | — | [מקבילה: 1.14 III:6–7]. |
| IV:51 | sʿt . b šdm . ḥṭb⟨t⟩ | *נסחפה* מן השדות החוטב⟨ת⟩, | — | — | [מקבילה: 1.14 III:7–8] `*תִּסָּחֵף* מן השדות / החוטבת` – כאן עבר. |
| IV:52 | w b grnm ḥpšt | ומן הגרנות – *המחפשת*; | — | — | [מקבילה: 1.14 III:8] – כאן עם "ו־". |
| V:1 | ⸢s⸣ʿt . b npk . šibt . w b . | *נסחפה* מן המבוע השואבת, ומן | — | — | [מקבילה: 1.14 III:9]. |
| V:2 | mqr . mmlat{ḥx .} | המקור – הממלאת. | — | — | [מקבילה: 1.14 III:9–10]. |
| V:3 | d⸢m⸣ . ⸢ym⸣ . ⸢w⸣ ṯn {ṯlṯ} | דָּם יום ושני, | `וַיִּדֹּם אַהֲרֹן` (ויקרא י:ג) | cognate |  |
| V:6 | ⸢m⸣k . špšm . b šbʿ | הנה עם שַׁפְּשׁ, בשביעי – | — | — | [מקבילה: 1.14 III:3–4, III:14–15]. |
| V:7 | w l . yš⸢n⸣ . ⸢pb⸣l | ולא יָשַׁן פַּבִּל | — | — | [מקבילה: 1.14 III:15] `ולא יישן פַּבִּל` – כאן עבר: הנבואה התקיימה. |
| V:8 | mlk . ⸢l q⸣[r] . ṯi{g}qt | המלך, משא[ון] שאגת | — | — | [מקבילה: 1.14 III:16]. |
| V:9 | ibrh . ⸢l q⸣l . nh⸢qt⸣ | אביריו, מקול נהקת | — | — | [מקבילה: 1.14 III:16–17]. |
| V:10 | ḥmr[h . lgʿ]t . alp | חמור[יו, מגעיי]ת בקר | — | — | [מקבילה: 1.14 III:17–18]. |
| V:11 | ⸢ḥrṯ⸣ [… . l] ⸢zġt⸣ [.] kl⸢b⸣ | החריש, מ*נביחת* כלבי | — | — | [מקבילה: 1.14 III:18–19] – כאן עם *l* ("מ־"), שם בלעדיה (EUPT). |
| V:20 | [xxxx]⸢b⸣n . ydh | [… אב]ני ידו | — | — | [מקבילה: 1.14 III:13–14] `אבני ידך – / המטילות` – כאן בפי פבל, על אבני כרתא (או שלו). |
| V:23 | [l . xxxx…. k] . yṣḥ | [אל … כי] צווח: | — | — | [מקבילה: 1.14 V:13–14] `בקול אל … כי צווח`. |
| V:30 | p⸢nm⸣ [. al . tt]⸢n⸣ | את פניכם [תתנו נ]א | — | — | [מקבילה: 1.4 VIII:1] `אז תתנו נא את פניכם` – נוסחת היציאה לדרך (§6.2), כאן בסדר *pnm* … *ttn*. |
| V:31 | ʿm . ⸢k⸣[rt . ms]⸢wn⸣ | אל כִּ[רְתָּא, אל *המחנה*]. | — | — | [מקבילה: 1.14 III:20–21]. |
| V:32 | w r⸢g⸣[m . l krt .] ⸢ṯ⸣ʿ | ואמ[רו אל כִּרְתָּא] השׁוֹעַ: | — | — | [מקבילה: 1.3 III:11] `ואִמְרוּ אל` (נוסחת השליחות, `../renderings.md` §6.4). |
| V:33 | tḥ⸢m⸣ [. pbl….mlk] | "דב[ר פבל המלך:] | — | — | [מקבילה: 1.14 III:21] `"דבר פַּבִּל המלך:`. |
| V:34 | qḥ . ⸢k⸣[sp . w yr]⸢q⸣ | קח כ[סף וירקר]ק | — | — | [מקבילה: 1.14 III:22]. |
| V:35 | ḫ⸢rṣ⸣ [. yd . mqm]⸢h⸣ | זה[ב, *עם* מקומ]ו, | — | — | [מקבילה: 1.14 III:22–23]. |
| V:36 | ʿ⸢bd⸣ [. ʿlm . ṯlṯ] | עב[ד עולם, שלושה] | — | — | [מקבילה: 1.14 III:23–24]. |
| V:37 | ⸢s⸣s[wm . mrkbt] | סו[סים, מרכבה] | — | — | [מקבילה: 1.14 III:24]. |
| V:38 | ⸢b t⸣[rbṣ . bn . amt] | מ[ן המרבץ, בן אמה.] | — | — | [מקבילה: 1.14 III:25]. |
| V:39 | [qḥ . krt . šlmm] | [קח, כִּרְתָּא, שלמים,] | — | — | [מקבילה: 1.14 III:26] – כל השורה משוחזרת. |
| V:40 | ⸢š⸣[lmm . al . ṭsr] | ש[למים! אל תצר] | — | — | [מקבילה: 1.14 III:26–29] – **סדר אחר**: בצו (III:27–30) "ונוד, מלך, מביתי … אל תצר"; כאן "אל תצר" מיד אחרי "שלמים", ו"רחק … נוד" בסוף (V:44–45). |
| V:41 | [udm . rbt . w udm] | [על אוּדֻם הרבה, ועל אוּדֻם] | — | — | [מקבילה: 1.14 III:30]. |
| V:42 | [ṯrrt . udm . ytnt] | [*הנשגבת*; אוּדֻם – מתת] | — | — | [מקבילה: 1.14 III:30–31]. |
| V:43 | [il . w ušn . ab . adm] | [אֵל, ותשורת אבי אדם.] | — | — | [מקבילה: 1.14 III:31–32]. |
| V:44 | [rḥq . mlk . l bty] | [רחק, מלך, מביתי;] | — | — | [מקבילה: 1.14 III:27–28] – כאן *rḥq* עם "מלך" ו־*ng* עם "כרתא" (V:45), הפוך מן הצו (*ng mlk* … *rḥq krt*). |
| V:45 | [ng . kr]⸢t⸣ . ⸢l ḥẓr⸣y | [נוד, כִּרְ]תָּא, מחצרי!" | — | — | [מקבילה: 1.14 III:28–29]. |
| VI:1 | [ʿ]⸢m⸣ . [krt . mswnh] | אל [כִּרְתָּא, אל *מחנהו*]. | — | — | [מקבילה: 1.14 III:20–21]. |
| VI:2 | ⸢t⸣š⸢a⸣[n . ghm . w tṣḥn] | נש[או את קולם וצווחו]: | `וַיִּשָּׂא אֶת קֹלוֹ וַיֵּבְךְּ` (בראשית כט:יא) | equivalent |  |
| VI:3 | ⸢t⸣ḥ⸢m⸣ [. pbl . mlk] | "דב[ר פבל המלך]: | — | — | [מקבילה: 1.14 III:21]. |
| VI:4 | qḥ . ⸢k⸣[sp . w yrq] | קח כ[סף וירקרק] | — | — | [מקבילה: 1.14 III:22]. |
| VI:5 | ⸢ḫrṣ⸣ . ⸢y⸣[d . mqmh] | זהב, [*עם* מקומו,] | — | — | [מקבילה: 1.14 III:22–23]. |
| VI:6 | w ʿbd . [… ʿlm . ṯlṯ] | ועבד [עולם, שלושה] | — | — | [מקבילה: 1.14 III:23–24]. |
| VI:7 | ss⸢w⸣m . ⸢m⸣[rkbt] | סוסים, מ[רכבה] | — | — | [מקבילה: 1.14 III:24]. |
| VI:8 | b t⸢rbṣ⸣ . [bn . amt] | מן המרבץ, [בן אמה]. | — | — | [מקבילה: 1.14 III:25]. |
| VI:9 | q⸢ḥ⸣ . ⸢krt⸣ [.] ⸢š⸣[lmm] | קח, כִּרְתָּא, ש[למים,] | — | — | [מקבילה: 1.14 III:26]. |
| VI:10 | ⸢šl⸣[mm….] ⸢a⸣l . t⸢ṣr⸣ | שלמים! אל תָּצַר | — | — | [מקבילה: 1.14 V:40] – בסדר של השליחות (V:40), לא של הצו. |
| VI:11 | ud⸢m⸣ [.] ⸢rb⸣t [.] ⸢w u⸣[dm] | על אוּדֻם הרבה, ועל אוּדֻם? | — | — | [מקבילה: 1.14 III:30]. |
| VI:12 | [ṯ]⸢rr⸣t [.] ud⸢m⸣ . ⸢ytn⸣[t] | *הנשגבת*; אוּדֻם – מַתַּת? | — | — | [מקבילה: 1.14 III:30–31]. |
| VI:13 | ⸢il⸣ . ⸢ušn⸣ [.] a⸢b⸣ [. ad]m | אֵל, תשורת אבי אדם. | — | — | [מקבילה: 1.14 III:31–32] `ותשורת` – כאן בלי "ו־". |
| VI:14 | r⸢ḥq⸣ [.] mlk . ⸢l bt⸣y | רחק, מלך, מביתי; | — | — | [מקבילה: 1.14 III:27–28] – *rḥq mlk* (כאן) במקום *ng mlk* (בצו). |
| VI:15 | n⸢g⸣ . k⸢r⸣t . ⸢l ḥẓr⸣[y] | נוד, כִּרְתָּא, מחצרי!" | — | — | [מקבילה: 1.14 III:28–29] – *ng krt* (כאן) במקום *rḥq krt* (בצו). |
| VI:17 | ⸢l⸣m . ⸢ank⸣ . ⸢k⸣sp | "למה אני – כסף | `מַה תִּתֶּן לִי` (בראשית טו:ב) | equivalent |  |
| VI:18 | w y⸢rq⸣ [.] ⸢ḫrṣ⸣ | וירקרק זהב, | — | — | [מקבילה: 1.14 III:34]. |
| VI:19 | yd . m⸢q⸣mh . w ʿbd | *עם* מקומו, ועבד | — | — | [מקבילה: 1.14 III:35]. |
| VI:20 | ʿlm . ṯ⸢l⸣ṯ . sswm | עולם, שלושה סוסים, | — | — | [מקבילה: 1.14 III:36]. |
| VI:21 | mrkbt . b trbṣ | מרכבה מן המרבץ, | — | — | [מקבילה: 1.14 III:36–37]. |
| VI:22 | bn . amt p d . ⸢in⸣ | בן אמה? ואשר אין | — | — | [מקבילה: 1.14 III:37–38]. |
| VI:23 | b bty . ttn . ⸢tn⸣ | בביתי – תתן: תן | — | — | [מקבילה: 1.14 III:38–39]. |
| VI:24 | ly . mṯt . ḥry | לי את הגבֶרֶת חֻרַּיָּה, | — | — | [מקבילה: 1.14 III:39]. |
| VI:25 | nʿmt . šbḥ . bkrk | הנעימה, משפחה – בכורך; | — | — | [מקבילה: 1.14 III:40] – הכתיב *šbḥ* במקום *špḥ*; אותה מלה. |
| VI:26 | d k nʿm . ʿnt | אשר כנועם עֲנָת | — | — | [מקבילה: 1.14 III:41]. |
| VI:27 | nʿmh . km . t⸢sm⸣ | נועמה, כמו יפעת | — | — | [מקבילה: 1.14 III:41–42]. |
| VI:28 | ʿṯtrt . t⸢smh⸣ | עַתְּתַרְת יפעתה; | — | — | [מקבילה: 1.14 III:42]. |
| VI:29 | d ʿqh . ⸢ib⸣ . ⸢iqni⸣ | אשר אישוניה – *טוהר* ספיר, | — | — | [מקבילה: 1.14 III:43]. |
| VI:30 | ʿpʿph . sp . ⸢ṯ⸣rml | עפעפיה – סִפֵּי *בַהַט*; | — | — | [מקבילה: 1.14 III:43–44] – כאן בלי ההמשך "נחגרת … אשר במבט עיניה אשלה" (III:44–45): כרתא חוזר על דברי החלום ומשמיט את המשאלה האישית. |
| VI:31 | d b ḥlmy . ⸢il⸣ . ytn | אשר בחלומי נתן אֵל, | — | — | [מקבילה: 1.14 III:46]. |
| VI:32 | b ḏrty . ab . adm | בחזיוני – אבי אדם; | — | — | [מקבילה: 1.14 III:47]. |
| VI:33 | wld . špḥ l kr{k} | ותלד משפחה לכִּרְתָּא, | — | — | [מקבילה: 1.14 III:48]. |
| VI:34 | t . w ġlm . l ʿbd | ועלם – לעבד | — | — | [מקבילה: 1.14 III:49]. |
| VI:35 | il . ttbʿ . mlakm | אֵל." יצאו לדרך המלאכים, | — | — | [מקבילה: 1.2 I:19] `יצאו לדרך העלמים, לא ישבו` – הנוסחה (`../renderings.md` §6.2). |
| VI:36 | l yṯb . idk . pnm | לא ישבו; אז את פניהם | — | — | [מקבילה: 1.2 I:19] – `לא ישבו; א[ז את פניהם]`. |

### Parallels index (KTU 1.15)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:1 | r⸢ġb⸣ . ⸢yd⸣ . ⸢mṯkt⸣ | הרעב – ביד *מושכת*, | `אִם-רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם; וְאִם-צָמֵא הַשְׁקֵהוּ מָיִם` (משלי כה:כא) | equivalent | הזוג רעב // צמא |
| I:1 | r⸢ġb⸣ . ⸢yd⸣ . ⸢mṯkt⸣ | הרעב – ביד *מושכת*, | `בְּחַבְלֵי אָדָם אֶמְשְׁכֵם` (הושע יא:ד) | cognate |  |
| I:3 | ⸢tṯṯkrnn⸣ . ⸢ʿbdn⸣ | *תְּסֻכַּר* – ותבוא | `וְסִכַּרְתִּי אֶת מִצְרַיִם בְּיַד אֲדֹנִים קָשֶׁה` (ישעיהו יט:ד) | cognate | `סִכֵּר` "מסר ביד"; כאן הנסיכה נמסרת ליד המלך הזר. |
| I:4 | ʿm . krt . ⸢mswnh⸣ | אל כִּרְתָּא, אל מחנהו. | — | — | [מקבילה: 1.14 III:20–21] `אל כִּרְתָּא, / אל *מחנהו*`. |
| I:7 | k tnḥn . ud⸢m⸣m | כך תִּנְהֶה אוּדֻם!" | `וְנָהָה נְהִי נִהְיָה` (מיכה ב:ד) | equivalent | `נָהָה` "קונן". |
| I:8 | w yʿny . krt . ṯʿ | וענה כִּרְתָּא השוע: | — | — | [מקבילה: 1.14 VI:16] `וענה כִּרְתָּא השׁוֹעַ:`. |
| II:7 | [w] ⸢ʿdt⸣ . ilm . ṯlṯh | [ו]עדת האֵלִים – בשלושתה. | `אֱלֹהִים נִצָּב בַּעֲדַת-אֵל` (תהלים פב:א) | cognate |  |
| II:15 | [krt] . ṯʿ . l tmr . nʿmn | [את כִּרְתָּא] השוע, אכן *תאמץ* את הנעמן, | — | — | [מקבילה: 1.17 I:23–24] `תברכנו` // `*תאמצנו*` – אותו זוג *brk* // *mrr* בבקשת בעל לאקהת. |
| II:16 | [ġlm] ⸢i⸣l . ks . yiḫd | [עלם] אֵל!" כוס אחז | `כּוֹס יְשׁוּעוֹת אֶשָּׂא` (תהלים קטז:יג) | equivalent | כוס הברכה – הכוס שבה מברכים (). |
| II:17 | [il . b] ⸢y⸣d . krpn . bm .{y} | [אֵל ב]יד, גביע | — | — | [מקבילה: 1.3 I:10–11] כוס // גביע – זוג כלי השתייה הקבוע. |
| II:18 | [ym]⸢n⸣ . brkm . ybrk | ב[ימי]ן. בָּרֵךְ בֵּרַךְ | `כִּי בָרֵךְ אֲבָרֶכְךָ וְהַרְבָּה אַרְבֶּה אֶת זַרְעֲךָ` (בראשית כב:יז) | cognate | אותו מבנה (מקור + פועל נטוי של *brk*), ובשניהם ברכת זרע. |
| II:21 | aṯt [. tq]⸢ḥ⸣ . y ⸢k⸣rt . aṯt | "האשה (אשר) [תיק]ח, הוֹ כִּרְתָּא, האשה | `יִתֵּן יְהוָה אֶת הָאִשָּׁה הַבָּאָה אֶל בֵּיתֶךָ כְּרָחֵל וּכְלֵאָה` (רות ד:יא) | cognate | ברכת החתונה לאשה הבאה אל הבית, שתבנה אותו בבנים. |
| II:22 | tq⸢ḥ⸣ . ⸢b⸣t⸢k⸣ [. ġ]⸢lmt⸣ . tšʿrb | (אשר) תיקח לביתך, העלמה (אשר) תכניס | — | — | [מקבילה: 1.14 IV:40–42] `אם את חֻרַּיָּה לביתי / אקח, אכניס עלמה / לחצרי` – אֵל מברך באותן מלים שבהן נדר כרתא. |
| II:23 | ḥẓr⸢k⸣ . tld . šbʿ . bnm lk . | לחצרך – תלד שבעה בנים לך, | `וּבֵרַכְתִּי אֹתָהּ וְגַם נָתַתִּי מִמֶּנָּה לְךָ בֵּן` (בראשית יז:טז); `אֲחֹתֵנוּ אַתְּ הֲיִי לְאַלְפֵי רְבָבָה` (בראשית כד:ס) | equivalent |  |
| II:26 | ynq . ⸢ḥl⸣b . ⸢a⸣[ṯ]rt | יונק חלב אֲתִירַת, | `וְיָנַקְתְּ חֲלֵב גּוֹיִם וְשֹׁד מְלָכִים תִּינָקִי` (ישעיהו ס:טז) | cognate | אותו זוג (*ynq ḥlb* // *mṣṣ ṯd*, II:26–27), ושם ציון יונקת חלב גויים ושד מלכים |
| II:26 | ynq . ⸢ḥl⸣b . ⸢a⸣[ṯ]rt | יונק חלב אֲתִירַת, | `בִּרְכֹת שָׁדַיִם וָרָחַם` (בראשית מט:כה) | equivalent |  |
| II:27 | mṣṣ . ṯ⸢d⸣ . ⸢b⸣tlt . [ʿnt] | מוצץ שַׁד הבתולה [עֲנָת], | `לְמַעַן תִּינְקוּ וּשְׂבַעְתֶּם מִשֹּׁד תַּנְחֻמֶיהָ לְמַעַן תָּמֹצּוּ` (ישעיהו סו:יא) | cognate | יניקה ומציצה מן השד. |
| II:28 | ⸢m⸣šn⸢qt⸣ [. xxxxxxx] | מינקת […] | `וַיְשַׁלְּחוּ אֶת רִבְקָה אֲחֹתָם וְאֶת מֵנִקְתָּהּ` (בראשית כד:נט) | cognate |  |
| III:3 | [b tk . rpi….] ⸢ar⸣ṣ | [בתוך רפאי] הארץ, | — | — | [מקבילה: 1.15 III:14]. |
| III:4 | [b pḫr] . qbṣ . dtn | [באספת] קיבוץ דִּתָּן. | — | — | [מקבילה: 1.15 III:15]. |
| III:14 | b tk . rpi . ⸢ar⸣[ṣ] | בתוך רפאי הארץ, | `עוֹרֵר לְךָ רְפָאִים כָּל עַתּוּדֵי אָרֶץ הֵקִים מִכִּסְאוֹתָם כֹּל מַלְכֵי גוֹיִם` (ישעיהו יד:ט) | cognate | הרפאים הם המלכים המתים ("עתודי ארץ") |
| III:14 | b tk . rpi . ⸢ar⸣[ṣ] | בתוך רפאי הארץ, | `וָאָרֶץ רְפָאִים תַּפִּיל` (ישעיהו כו:יט) | cognate |  |
| III:15 | b p⸢ḫ⸣r . qbṣ . d⸢tn⸣ | באספת קיבוץ דִּתָּן. | — | — | [cognate?] `וְדָתָן וַאֲבִירָם בְּנֵי אֱלִיאָב` (במדבר טז:א) – השם `דָּתָן` המקראי, אולי אותו שם (*ditānu*, אב קדמון בשושלות האמוריות; הערה בלבד). |
| III:16 | ⸢ṣ⸣ġrthn . abk⸢rn⸣ | הצעירה שבהן – אֲבַכְּרֶנָּה!" | `לֹא יוּכַל לְבַכֵּר אֶת בֶּן הָאֲהוּבָה עַל פְּנֵי בֶן הַשְּׂנוּאָה הַבְּכֹר` (דברים כא:טז) | divergence | אותו פועל (*bkr* D = `בִּכֵּר`), והתורה אוסרת אותו לאב; כאן אֵל עצמו מבכר את הצעירה. |
| III:16 | ⸢ṣ⸣ġrthn . abk⸢rn⸣ | הצעירה שבהן – אֲבַכְּרֶנָּה!" | `וְהוּא הַצָּעִיר` (בראשית מח:יד); `וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג) | divergence | יעקב שם ימינו על הצעיר;  – הצעיר הגובר. |
| III:16 | ⸢ṣ⸣ġrthn . abk⸢rn⸣ | הצעירה שבהן – אֲבַכְּרֶנָּה!" | `וְהוּא הַצָּעִיר` (בראשית מח:יד); `וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג) | divergence | כאן בת, ולא בן: הבכורה ניתנת לבת הצעירה. |
| III:17 | tbrk . ⸢i⸣lm . tity | בירכו האֵלִים, אָתוּ, | `אָתָה בֹקֶר וְגַם לָיְלָה` (ישעיהו כא:יב) | cognate | `אָתָה` "בא, הלך" (פיוטי). |
| III:18 | t⸢i⸣t⸢y⸣ . ⸢il⸣m . ⸢l⸣ ahlhm | אָתוּ האֵלִים לאהליהם, | `מַה טֹּבוּ אֹהָלֶיךָ יַעֲקֹב; מִשְׁכְּנֹתֶיךָ יִשְׂרָאֵל` (במדבר כד:ה) | cognate | אותו זוג מקביל, אוהל // משכן (III:18–19). |
| III:20 | w tqrb . w⸢ld⸣ bn ⸢l⸣h | ותקרב ללדת בן לו, | — | — | [מקבילה: 1.15 III:5] `[ו]תקרב ללדת / בנות לך` – הברכה מתקיימת באותן מלים, בגוף שלישי. |
| III:22 | mk . b šbʿ . š⸢nt⸣ | הנה בשנה השביעית | — | divergence | נוסחת הימים (§6.10) – כאן שבע **שנים**: הלידות נמשכות שבע שנים. |
| III:25 | kmhm . ⸢w⸣ tḫss . ⸢aṯrt⸣ | כמותן. ותזכור אֲתִירַת | `כִּי תִדֹּר נֶדֶר לַיהוָה אֱלֹהֶיךָ לֹא תְאַחֵר לְשַׁלְּמוֹ: כִּי דָּרֹשׁ יִדְרְשֶׁנּוּ` (דברים כג:כב); `כַּאֲשֶׁר תִּדֹּר נֶדֶר לֵאלֹהִים אַל תְּאַחֵר לְשַׁלְּמוֹ` (קהלת ה:ג) | equivalent | האל דורש את הנדר שלא שולם. |
| III:26 | ndrh . w ilt . ⸢d⸣[xx] | את נדרו, ואֵלַת …[…], | — | — | [מקבילה: 1.14 IV:38–39] `אֲתִירַת צוֹר, / ואֵלַת צִידוֹנִים` – אולי כאן השם השני (EUPT: לא ודאי). |
| III:29 | u ṯn . nd⸢r⸣[m . xxxxx] | אוֹ שָׁנָה נדר(ו) […]? | `וְהֵפֵר אֶת נִדְרָהּ` (במדבר ל:ט) | equivalent | נדר שבוטל. |
| III:30 | apr . ⸢idt⸣ [xxxxx] | אָפֵר …[…]" | `וְהֵפֵר אֶת נִדְרָהּ אֲשֶׁר עָלֶיהָ` (במדבר ל:ט) | cognate | `הֵפֵר` בהקשר הנדר; כאן האלה "מפירה" את הברית בתגובה לנדר שלא קוים. |
| IV:2 | gm . ⸢l a⸣[ṯth . k yṣḥ] | בקול אל א[שתו כי צווח]: | — | — | [מקבילה: 1.14 V:13–14] `[ב]קול אל אשת[ו] / [כי] צ[וח]`. |
| IV:4 | ṭ⸢bḫ⸣ . ⸢šmn⸣ . m⸢r⸣i⸢k⸣ | טבחי את שמני מריאייך, | `שָׂבַעְתִּי עֹלוֹת אֵילִים וְחֵלֶב מְרִיאִים` (ישעיהו א:יא) | cognate |  |
| IV:5 | ptḥ . ⸢r⸣[ḥ]⸢b⸣t . y⸢n⸣ | פתחי קנקני יין, | — | — | [מקבילה: 1.4 VI:53] `קנקני יין`. |
| IV:15 | tṭbḫ . š⸢m⸣n . [m]⸢ri⸣h | טבחה את שמני מריאיה, | — | — | [מקבילה: 1.15 IV:4] `טבחי את שמני מריאייך`. |
| IV:16 | t⸢pt⸣ḥ . rḥ⸢b⸣t . ⸢y⸣n | פתחה קנקני יין; | — | — | [מקבילה: 1.15 IV:5]. |
| IV:17 | ʿlh . ṯrh . tšʿrb | אליו את שווריו הכניסה, | — | — | [מקבילה: 1.15 IV:6] `צִוְחִי אל שבעים שווריי` – הביצוע בפועל אחר: לא "קראה" אלא "הכניסה". |
| IV:18 | ʿlh . tšʿrb . ẓby⸢h⸣ | אליו הכניסה את צבייו, | — | — | [מקבילה: 1.15 IV:7]. |
| IV:19 | ṯr . ḫbr . rbt | שורי חבור הרבה, | — | — | [מקבילה: 1.15 IV:8]. |
| IV:20 | ḫb⸢r⸣ . ṯr⸢r⸣t | חבור *הנשגבת*. | — | — | [מקבילה: 1.15 IV:9]. |
| IV:23 | w l ḫm . m⸢r⸣ . tqdm | ולביתן המור קדמו. | — | equivalent | `בַּחֲצַר גִּנַּת בִּיתַן הַמֶּלֶךְ` – ביתן המלך בפרס (אסתר א:ה, ציון בלבד) |
| IV:23 | w l ḫm . m⸢r⸣ . tqdm | ולביתן המור קדמו. | `נְקַדְּמָה פָנָיו בְּתוֹדָה` (תהלים צה:ב) | cognate |  |
| IV:24 | yd . b ṣʿ . tšlḥ | יד בקערה שלחה, | `וַיִּשְׁלַח אַבְרָהָם אֶת יָדוֹ וַיִּקַּח אֶת הַמַּאֲכֶלֶת` (בראשית כב:י) | cognate | שליחת יד וסכין (IV:24–25). |
| V:6 | ⸢l⸣ mṯ⸢b⸣ [xx]⸢xt⸣ [xxxx] | למושב …[…] | — | — | [מקבילה: 1.15 IV:22]. |
| V:7 | ⸢xxx⸣[x….] ⸢y⸣d . b ṣʿ . ⸢t⸣[šl]⸢ḥ⸣ | …[…] יד בקערה שלחה, | — | — | [מקבילה: 1.15 IV:24]. |
| V:8 | [ḥrb . b] bš[r] . tštn | [חרב ב]בשר שָׁתָה. | — | — | [מקבילה: 1.15 IV:25]. |
| V:9 | [w tʿn] . mṯ⸢t⸣ . ḥ⸢r⸣y | [וענתה] הגבֶרֶת חריה: | — | — | [מקבילה: 1.15 IV:26]. |
| V:10 | [l lḥ]⸢m⸣ . l šty . ⸢ṣḥtk⸣[m] | "[לסע]וד, לשתות צְוַחְתִּיכֶם. | — | — | [מקבילה: 1.15 IV:27]. |
| V:25 | [xxxx .] ⸢ḫ⸣br . rbt | […] חבור הרבה, | — | — | [מקבילה: 1.15 IV:8]. |
| V:27 | [pid xxxx]⸢n⸣ . b anš⸢t⸣ | [הלב …]… בַּאֲנוּשָׁה, | `וּמַכָּתִי אֲנוּשָׁה` (ירמיהו טו:יח) | cognate | `אָנוּשׁ` "חולה עד מוות". |
| VI:2 | ⸢ʿdm⸣ . ⸢tlḥ⸣m . tšty | עוד תסעדו, תשתו!" | — | — | נוסחת המשתה `עוֹד הָאֵלִים סוֹעֲדִים וְשׁוֹתִים` (`../renderings.md` §6.11) – אותם פעלים (*ʿd* … *lḥm* … *šty*), כאן בגוף שני. |
| VI:3 | w tʿ⸢n⸣ . ⸢mṯ⸣t . ⸢ḥ⸣ry | וענתה הגבֶרֶת חריה: | — | — | [מקבילה: 1.15 IV:26]. |
| VI:4 | l ⸢lḥ⸣m . ⸢l šty⸣ . ṣḥ⸢tkm⸣ | "לסעוד, לשתות צְוַחְתִּיכֶם, | — | — | [מקבילה: 1.15 IV:27]. |
| VI:7 | rgm . ṯ⸢rm⸣ . rgm{.}hm | מִלַּת שוורים – מילתם. | — | — | [מקבילה: 1.15 V:13]. |

### Parallels index (KTU 1.16)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:1 | ⸢l k⸣rt | לְכִרְתָּא. | — | — | [מקבילה: 1.14 I:1] `לְכִרְתָּא.` |
| I:2 | ⸢k kl⸣b . b btk . nʿtq . k inr | "ככלב בביתך נֵעָתֵק, כגור | `עָתְקוּ גַּם-גָּבְרוּ חָיִל` (איוב כא:ז) | cognate | *ʿtq* "לעבור, להזדקן". |
| I:5 | ʿtq . bd . aṯt . ab ṣrry | תֵּעָתֵק, בנהי נשים, אבי *הפסגות*? | `וְנָהָה נְהִי נִהְיָה` (מיכה ב:ד) | equivalent | `נְהִי` קינה. |
| I:7 | ṣpn . ḥlm . qdš | צָפוֹן, *המצודה* הקדושה, | `הַר-צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג) | cognate |  |
| I:9 | ⸢r⸣ḥb . mknpt . ap | רחבת־הכנף! אף | `וְהָיָה מֻטּוֹת כְּנָפָיו מְלֹא רֹחַב אַרְצְךָ` (ישעיהו ח:ח) | cognate | כנפיים ורוחב. |
| I:10 | ⸢kr⸣t . bnm . il . špḥ | כִּרְתָּא – בן אֵל, משפחת | `אֲנִי-אָמַרְתִּי אֱלֹהִים אַתֶּם; וּבְנֵי עֶלְיוֹן כֻּלְּכֶם` (תהלים פב:ו) | equivalent | בני האל. |
| I:13 | ⸢w⸣ yšnn . ytn . gh | ושינן, נתן קולו | `נָתַן בְּקוֹלוֹ תָּמוּג אָרֶץ` (תהלים מו:ז) | cognate | "נתן קול". |
| I:15 | blmtk . ngln . k klb | בבַל־מותך גַּלְנוּ. ככלב | — | — | [מקבילה: 1.17 VI:27] `בַּל מָוֶת` – האלמוות שענת הציעה לאקהת. |
| I:16 | ⸢b btk⸣ . nʿtq . k inr | בביתך נֵעָתֵק, כגור | — | — | [מקבילה: 1.16 I:2]. |
| I:17 | at ⸢ḫ⸣štk . ap . ab . k mtm | בְּאַף *קבורתך*. אף, אבי, כִּמְתִים | `אָכֵן כְּאָדָם תְּמוּתוּן; וּכְאַחַד הַשָּׂרִים תִּפֹּלוּ` (תהלים פב:ז) | equivalent | "כאדם תמותו", לבני האל. |
| I:18 | tmtn . u ḫštk . l ntn | תמות? אוֹ *קבורתך* – לקינה | — | — | [מקבילה: 1.16 I:4]. |
| I:19 | ʿt{ḫ}q . bd . aṯt ab . ṣrry | תֵּעָתֵק, בנהי נשים, אבי *הפסגות*? | — | — | [מקבילה: 1.16 I:5]. |
| I:22 | ⸢w q⸣dš . u ilm tmtn | והקדוש'? אוֹ אֵלִים ימותו, | `אָכֵן כְּאָדָם תְּמוּתוּן` (תהלים פב:ז) | divergence | תהלים פב קובע שהאלים ימותו כאדם; כאן הבן שואל אם אלים מתים, כאילו התשובה "לא" מובנת מאליה. ו`אֱלֹהִים` שם – `אֵלִים` כאן (`../renderings.md` §5.1). |
| I:24 | ⸢w yʿn⸣y . krt . ṯʿ | וענה כִּרְתָּא השׁוֹעַ: | — | — | [מקבילה: 1.14 VI:16] `וענה כִּרְתָּא השׁוֹעַ:`. |
| I:27 | ⸢qr⸣ . ʿnk . mḫ . rišk | מקור עיניך, מוח ראשך – | `וּמֹחַ עַצְמוֹתָיו יְשֻׁקֶּה` (איוב כא:כד) | cognate | `מֹחַ`. |
| I:36 | ⸢tm⸣t⸢n⸣ . ṣba . rbt | …[…]… צאת הגבירה | — | — | [מקבילה: 1.15 V:19] `צאת שַׁפְּשׁ`. |
| I:38 | ⸢r⸣bt . w rgm . l aḫtk | הגבירה. ואמור אל אחותך, | — | — | [מקבילה: 1.3 VI:32] `וֶאֱמוֹר אל`. |
| I:41 | ⸢ʿš⸣rt . qḥ . ⸢tp⸣k b yd | משתה. קחי את תופך ביד, | `וַתִּקַּח מִרְיָם הַנְּבִיאָה אֲחוֹת אַהֲרֹן אֶת הַתֹּף בְּיָדָהּ` (שמות טו:כ) | cognate | האחות לוקחת תוף ביד, באותן מלים (*lqḥ*, *tp*, *b yd*). |
| I:42 | ⸢brl⸣tk . bm . ⸢ymn⸣ | …[…]ך בימין; | — | — | [מקבילה: 1.15 II:17] – "ביד … בימין". |
| I:45 | ⸢b⸣ mg⸢nk⸣ . ⸢w ḫrṣ⸣ . ⸢l kl⸣ | ב*מִגְּנֵךְ*, וזהב – לכל.'" | `אֲשֶׁר מִגֵּן צָרֶיךָ בְּיָדֶךָ` (בראשית יד:כ) | cognate | `מִגֵּן` "נתן, מסר". |
| I:51 | aḫ⸢t⸣h . š⸢ib⸣ . yṣat . m⸢r⸣ḥh | אחותו – לשאוב יצאה. רומחו | `לְעֵת צֵאת הַשֹּׁאֲבֹת` (בראשית כד:יא) | cognate | הבת יוצאת לשאוב בערב. |
| I:52 | ⸢l⸣ t⸢l⸣ . ⸢yṣ⸣b . pnh . {ġ}ṯġr | *לַתְּלִי* הציב; פניו – בשער | — | — | [cognate?] `תֶּלְיְךָ וְקַשְׁתֶּךָ` (בראשית כז:ג) – `תְּלִי` כלי נשק (אולי אותה מלה). |
| I:54 | ⸢w kdh⸣ . ⸢l⸣ arṣ . tṯbr | […]…ה – לארץ נשבר(ה). | `וְתִשָּׁבֶר כַּד עַל הַמַּבּוּעַ` (קהלת יב:ו) | equivalent | הכד הנשבר ליד המעיין, דימוי המוות (לפי KTU³ "כדה"). |
| I:57 | ⸢l⸣ [xxx] . krt . ⸢a⸣d⸢nk⸣ | [האם דָּוֶה] כִּרְתָּא אדונך?" | `וְהַדָּוָה בְּנִדָּתָהּ` (ויקרא טו:לג) | cognate | `דָּוֶה` "חולה, חלש". |
| I:59 | [xxxx .] ⸢mrṣ⸣ . ⸢mlk⸣ | "[לא] חולה המלך, | — | — | [מקבילה: 1.16 I:56]. |
| I:60 | [xxx] . ⸢krt⸣ . ⸢adnkm⸣ | [לא דָּוֶה] כִּרְתָּא אדונך; | — | — | [מקבילה: 1.16 I:57]. |
| I:61 | [kr]⸢t⸣ . ⸢dbḥ⸣ . ⸢dbḥ⸣ | [כִּרְתָּא] זָבַח זבח, | — | — | [מקבילה: 1.16 I:39–40]. |
| I:62 | [mlk .] ⸢ʿšr⸣ . ⸢ʿšr⸣t | [המלך] הזמין משתה." | — | — | [מקבילה: 1.16 I:40–41]. |
| II:16 | w msk . t⸢r⸣[xxxx] | ומֶסֶךְ …[…] | `מָסְכָה יֵינָהּ` (משלי ט:ב) | cognate | ציון בלבד. |
| II:21 | w yʿny . ġzr . [ilḥu] | וענה הגבור [אִלְחוּ]: | — | — | [מקבילה: 1.16 I:58]. |
| II:22 | ṯlṯ . yrḫm . k m[rṣ] | "שלושה ירחים – כי ח[לה], | — | — | [מקבילה: 1.16 II:19]. |
| II:24 | m{m}ndʿ . krt . mġ⸢y⸣ [. ʿrb] | מי יודע? כִּרְתָּא הגיע […] | `מִי יוֹדֵעַ יָשׁוּב וְנִחָם` (יואל ב:יד) | cognate | "מי יודע" כ"אולי". |
| II:29 | ʿrym . ⸢l bl⸣ [xxxx] | עֲרוּמִּים, בלי […] | `וַיִּהְיוּ שְׁנֵיהֶם עֲרוּמִּים` (בראשית ב:כה) | cognate | אותה מלה; הקשר אחר לגמרי (כאן עירום של אבל ושל עוני; הערה לשונית). |
| II:33 | ⸢ġ⸣zr . ilḥu . t⸢bk⸣ [. q]l | הגבור אִלְחוּ. *צרחה*, קול | — | — | [מקבילה: 1.16 II:25–26]. |
| II:34 | trm . tṣr . tr⸢m⸣ . ⸢tn⸣qt | הרימה; צרחה, הרימה זעקה; | — | — | [מקבילה: 1.16 II:25–26]. |
| II:35 | tbky . ⸢w⸣ t⸢šnn⸣ . ⸢tt⸣n | בכתה ושיננה, נתנה | — | — | [מקבילה: 1.16 I:12–13]. |
| II:36 | gh . bky . b ⸢ḥyk⸣ [.] ⸢ab⸣n | קולה, בוכה: "בחייך, אבי, | — | — | [מקבילה: 1.16 I:13–14]. |
| II:37 | ⸢n⸣šm⸢ḫ⸣ . ⸢b⸣l ⸢mtk⸣ . ⸢n⸣gln | שמחנו, בבַל־מותך גַּלְנוּ; | — | — | [מקבילה: 1.16 I:14–15]. |
| II:38 | ⸢k klb⸣ . ⸢b btk⸣ . ⸢nʿtq⸣ | ככלב בביתך נֵעָתֵק, | — | — | [מקבילה: 1.16 I:2] – הקינה של אלחו בפי תתמנת, מלה במלה, בשבירת שורות אחרת. |
| II:39 | k ⸢inr⸣ . ⸢ap⸣ . ⸢ḫštk⸣ | כגור בְּאַף *קבורתך*. | — | — | [מקבילה: 1.16 I:2–3]. |
| II:40 | ⸢a⸣p ⸢ab⸣ . ⸢k mtm⸣ . ⸢t⸣mtn | אף, אבי, כִּמְתִים תמות? | `אָכֵן כְּאָדָם תְּמוּתוּן` (תהלים פב:ז) | equivalent |  |
| II:41 | ⸢u⸣ ḫšt⸢k⸣.⸢lbky⸣.⸢ʿtq⸣ | אוֹ *קבורתך* – לבכי – תֵּעָתֵק, | — | — | [מקבילה: 1.16 I:4–5] – כאן *bky* "בכי" במקום *ntn* "קינה". |
| II:42 | ⸢b⸣d . ṯt ab . ṣ⸢r⸣ry | בנהי נשים, אבי *הפסגות*? | — | — | [מקבילה: 1.16 I:5]. |
| II:43 | ⸢u i⸣lm . tm⸢t⸣n . ⸢špḥ⸣ | אוֹ אֵלִים ימותו, משפחת | — | — | [מקבילה: 1.16 I:22–23]. |
| II:44 | ⸢l⸣ṯpn . l y⸢ḥ⸣ . t⸢bk⸣yk | האדיב לא יחיה? יבכוך, | — | — | [מקבילה: 1.16 I:23, I:6]. |
| II:45 | ab . ġr . bʿ⸢l⸣ . ⸢ṣp⸣n . ḥlm | אבי, הר בעל, צָפוֹן, *המצודה* | — | — | [מקבילה: 1.16 I:6–7]. |
| II:46 | ⸢q⸣dš . nny . ⸢ḥ⸣[l]⸢m⸣ . adr | הקדושה, נַנַּי, *המצודה* האדירה, | — | — | [מקבילה: 1.16 I:7–8]. |
| II:47 | ḥl . rḥb . m⸢k⸣[n]⸢pt⸣ | *המצודה* רחבת־הכ[נף]! | — | — | [מקבילה: 1.16 I:8–9]. |
| II:48 | ap . krt . ⸢bn⸣[m . il] | אף כִּרְתָּא בן [אֵל], | — | — | [מקבילה: 1.16 I:9–10]. |
| II:49 | špḥ . lṭpn [. w qdš] | משפחת האדיב [והקדוש]." | — | — | [מקבילה: 1.16 I:10–11]. |
| II:51 | tʿrb.ḥ⸢d⸣[r.xxxx] | נכנסה אל ח[דר כִּרְתָּא]. | — | — | [מקבילה: 1.14 I:26] `נכנס לחדרו`. |
| III:2 | ʿn . tr . arṣ . ⸢w⸣ šmm | הבט, תור ארץ ושמים, | `שְׁלַח לְךָ אֲנָשִׁים וְיָתֻרוּ אֶת אֶרֶץ כְּנַעַן` (במדבר יג:ב) | cognate | `תּוּר` "לרגל, לשוטט". |
| III:4 | ⸢l k⸣sm . m⸢h⸣yt . ʿn | אל *פֶּלַח* *נְאוֹת*. הבט | — | — | [מקבילה: 1.5 VI:5] `*פֶּלַח* *נְאוֹת*`. |
| III:5 | l ar⸢ṣ⸣ . mṭ⸢r⸣ . ⸢bʿl⸣ | אל הארץ – (אל) מטר בעל, | `וְנָתַתִּי מְטַר אַרְצְכֶם בְּעִתּוֹ` (דברים יא:יד) | cognate | "מטר ארצכם" |
| III:5 | l ar⸢ṣ⸣ . mṭ⸢r⸣ . ⸢bʿl⸣ | אל הארץ – (אל) מטר בעל, | `וְנָתַתִּי מְטַר אַרְצְכֶם בְּעִתּוֹ` (דברים יא:יד) | divergence | כאן המטר "של בעל". |
| III:6 | w l šd . ⸢mṭr⸣ . ⸢ʿly⸣ | ואל השדה – (אל) מטר העליון! | `יְהוָה … עָלָו בַּשָּׁמַיִם יַרְעֵם` (שמואל א ב:י) | cognate | `עָל` כתואר האל הרועם בשמים, כמו *ʿly* של בעל |
| III:6 | w l šd . ⸢mṭr⸣ . ⸢ʿly⸣ | ואל השדה – (אל) מטר העליון! | `לְאֵל עֶלְיוֹן` (בראשית יד:יח) | divergence | במקרא `עֶלְיוֹן` הוא תואר האל העליון (אֵל), כאן תואר בעל. |
| III:8 | w l šd . ⸢m⸣ṭr . ʿly | ולשדה מטר העליון; | — | — | [מקבילה: 1.16 III:6]. אותה שורה אוגריתית; ההבדל מכוון: ב־III:6 *l* תלוי ב"הבט" (III:4) – "אל השדה", כאן ב"נעים" (III:7) – "לשדה" (כך גם EUPT: "über das Feld" / "fürs Feld"). |
| III:10 | bm . n⸢rt⸣ . k smm | בניר – כַּסַּמִּים, | `נִירוּ לָכֶם נִיר` (ירמיהו ד:ג); `קַח לְךָ סַמִּים` (שמות ל:לד) | cognate |  |
| III:11 | ʿl . tl⸢m⸣ . k ʿṭrṭrt | על התלם – כעטרה. | `תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶהָ` (תהלים סה:יא) | cognate | גשם על התלמים. |
| III:12 | nšu . ⸢riš⸣ . ḥ⸢rṯm⸣ | נשאו ראש החורשים, | `הֹבִישׁוּ אִכָּרִים הֵילִילוּ כֹּרְמִים עַל חִטָּה וְעַל שְׂעֹרָה` (יואל א:יא) | equivalent | האיכרים בבצורת. |
| III:13 | l ⸢ẓr⸣ . ⸢ʿbd⸣ . ⸢dg⸣n . ⸢k⸣ly⸢m⸣ | למעלה – עובדי דָּגָן. כָּלָה | `כִּי שֻׁדַּד דָּגָן הוֹבִישׁ תִּירוֹשׁ אֻמְלַל יִצְהָר` (יואל א:י) | cognate | דגן, תירוש, יצהר; כאן לחם, יין, שמן (III:13–16). |
| III:14 | lḥm . ⸢b ʿd⸣nhm . ⸢kly⸣ | הלחם *בטנאיהם*, כָּלָה | `אִם יֶשׁ לִי מָעוֹג כִּי אִם מְלֹא כַף קֶמַח בַּכַּד וּמְעַט שֶׁמֶן בַּצַּפָּחַת` (מלכים א יז:יב) | equivalent | הלחם והשמן שכלו בבצורת |
| III:14 | lḥm . ⸢b ʿd⸣nhm . ⸢kly⸣ | הלחם *בטנאיהם*, כָּלָה | `וְשַׂמְתָּ בַטֶּנֶא` (דברים כו:ב) | cognate |  |
| III:15 | yn . b ḥmt⸢hm⸣ . ⸢k⸣[l]⸢y⸣ | היין בחמתותיהם, כָּלָה | `וַיִּקַּח לֶחֶם וְחֵמַת מַיִם` (בראשית כא:יד) | cognate | לחם וחמת. |
| IV:6 | yṣḥ . ngr . i⸢l⸣ . ⸢ilš⸣ | צווח (אל) כרוז אֵל, אִלְשׁ, | — | — | [מקבילה: 1.16 IV:3] – הביצוע. |
| IV:8 | w aṯth . ngrt . ⸢ilh⸣t | ואשתו, כרוזת האֵלוֹת. | — | — | [מקבילה: 1.16 IV:4]. |
| IV:9 | k yʿn . lṭpn . ⸢il⸣ . ⸢d pi⸣[d] | כי ענה האדיב, אֵל רחב־הלב: | — | — | [מקבילה: 1.4 IV:58] `וענה האדיב, אֵל רחב־הלב:` – כאן *k* במקום *w*. |
| IV:11 | ilš . ngr . ⸢b⸣t . bʿ⸢l⸣ | אִלְשׁ, כרוז בית בעל, | — | — | [מקבילה: 1.16 IV:7]. |
| IV:12 | w aṯtk . ngrt . ⸢ilht⸣ | ואשתך, כרוזת האֵלוֹת! | — | — | [מקבילה: 1.16 IV:8] – בגוף שני. |
| IV:13 | ʿl . l ṯkm . bnwn | עֲלֵה אל שכם הבניין, | — | — | [מקבילה: 1.14 II:22] `(על) שכמי החומה`. |
| V:8 | ṯnnth [. xxxxx] | מִשְׁנֵהָ […] | — | — | [מקבילה: 1.14 IV:42] `מִשְׁנֵהָ כסף` – הנדר נזכר? |
| V:9 | ṯlṯth [. xxxxx] | שִׁלּוּשָׁהּ […]. | — | — | [מקבילה: 1.14 IV:43] `ושִׁלּוּשָׁהּ – זהב`. |
| V:12 | gršm . ⸢z⸣[bln . in . b ilm] | מגרש [דוי?" אין באֵלִים] | `וְהֵסִיר יְהוָה מִמְּךָ כָּל חֹלִי; וְכָל מַדְוֵי מִצְרַיִם` (דברים ז:טו) | equivalent | חֹלִי // מַדְוֶה, הזוג העברי של *mrṣ* // *mdw*. |
| V:18 | ydy . mrṣ . g[rš]⸢m⸣ . ⸢zbln⸣ | ישליך חולי, מג[רש דוי]?" | — | — | [מקבילה: 1.16 V:11–12]. |
| V:21 | ydy . mrṣ . g⸢ršm⸣ . ⸢z⸣bl⸢n⸣ | ישליך חולי, מגרש דוי?" | — | — | [מקבילה: 1.16 V:11–12]. |
| V:23 | w yʿn . ltpn . ⸢il⸣ . b pid | וענה האדיב, אֵל רחב־הלב: | — | — | [מקבילה: 1.4 IV:58] `וענה האדיב, אֵל רחב־הלב:`. |
| V:25 | l kḥṯ . zb⸢lk⸣[m….]⸢an⸣k | על כס נסיכותכם! אני | — | — | [מקבילה: 1.2 I:25] `ועל כס נסיכותכם`. |
| V:26 | iḥtrš . ⸢w aš⸣kn | אֶתְחָרֵשׁ, ואשכין – | `וַחֲכַם חֲרָשִׁים וּנְבוֹן לָחַשׁ` (ישעיהו ג:ג) | cognate | `חָרָשׁ` בין לוחש לחכם: חרש־אומן וחרש־מכשף. |
| V:27 | aškn . ⸢ydt⸣ . [m]⸢rṣ⸣ . gršt | אשכין משליכת חולי, מגרשת | — | — | [מקבילה: 1.16 V:11–12] – התשובה לשאלה: "מי ישליך … יגרש" – "אשכין משליכת … מגרשת". |
| V:28 | zbln . r⸢ḥt⸣[h] . ⸢y⸣ml⸢u⸣ | דוי." (ב)*רחתו*? […] *מלל* | — | — | [cognate?] `וְקָטַפְתָּ מְלִילֹת בְּיָדֶךָ` (דברים כג:כו) – `מָלַל` "שפשף בידיים". |
| V:29 | nʿm . ⸢r⸣ṯ . ⸢ṯ⸣[iṭ] . yqrṣ | מבחר הרפש, [טיט] קָרַץ – | `הֵן-אֲנִי כְפִיךָ לָאֵל; מֵחֹמֶר קֹרַצְתִּי גַם-אָנִי` (איוב לג:ו) | cognate | אותו פועל (*qrṣ* = `קָרַץ`), ליד `אֵל`: "מחומר קורצתי" |
| V:29 | nʿm . ⸢r⸣ṯ . ⸢ṯ⸣[iṭ] . yqrṣ | מבחר הרפש, [טיט] קָרַץ – | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | divergence | בבראשית `יָצַר` ו`עָפָר`; כאן *qrṣ* ו*ṭiṭ*/*rṯ*: לא `יָצַר` (*yṣr* אינו בלוח; השורש שמור), ולא `עָפָר` (*ʿpr*) |
| V:29 | nʿm . ⸢r⸣ṯ . ⸢ṯ⸣[iṭ] . yqrṣ | מבחר הרפש, [טיט] קָרַץ – | `מִטִּיט הַיָּוֵן` (תהלים מ:ג) | cognate | `טִיט`. |
| VI:1 | [m]⸢t⸣ . dm . ḫt . šʿtqt . dt | "[מָו]ֶת – הֲרֵי חַת! שַׁעֲתִקַת – הֲרֵי | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | equivalent | המוות המובס. |
| VI:10 | w tṯb . trḥṣ{.}nn . b dʿt | ושבה, רחצתהו מזיעה; | `בְּזֵעַת אַפֶּיךָ תֹּאכַל לֶחֶם` (בראשית ג:יט) | cognate | אותה מלה (*dʿt* = `זֵעָה`), גם כאן ליד אכילת לחם (VI:11) |
| VI:10 | w tṯb . trḥṣ{.}nn . b dʿt | ושבה, רחצתהו מזיעה; | `בְּזֵעַת אַפֶּיךָ תֹּאכַל לֶחֶם` (בראשית ג:יט) | divergence | בבראשית הזיעה היא עונש העבודה, כאן זיעת החולה שנרחצת לפני שהוא אוכל שוב. |
| VI:13 | mt . dm . ḫt . šʿtẓt | מָוֶת – הֲרֵי חַת! שַׁעֲתִקַת | — | — | [מקבילה: 1.16 VI:1] – כאן עבר (בסיפור): "המוות אכן נשבר". |
| VI:14 | dm . lan . w ypqd | הֲרֵי הֶלְאָה. ופקד | — | — | [מקבילה: 1.16 VI:1–2]. |
| VI:17 | ḥry . tbḫ . imr | חֻרַּיָּה! טבחי כבש – ואסעד, | — | — | [מקבילה: 1.15 IV:4] `טבחי את שמני מריאייך`. |
| VI:18 | w ilḫm . mgṯ . w iṯrm | *טֶבַח* – ואחתוך!" | `וּטְבֹחַ טֶבַח וְהָכֵן` (בראשית מג:טז) | cognate | `טֶבַח` "בשר טבוח". |
| VI:19 | tšm ʿ . mṯt . ḫry | שמעה הגבֶרֶת חריה; | — | — | [מקבילה: 1.15 IV:14]. |
| VI:21 | mgṯ . w yṯrm . hn ym | *טֶבַח* – וחתך. הנה יום | — | — | [מקבילה: 1.16 VI:18] – הביצוע, בעבר. |
| VI:24 | l nḫt . l {r}kḥṯ . {d}drkt⸢h⸣ | על נַחַת, על כֵּס השררה. | — | — | [מקבילה: 1.6 V:6] `על [נַחַת], על כֵּס שררתו.` – אותה שורה; כאן "השררה" ולא "שררתו", כי EUPT אינו קורא את ה־*h* (הבדל מכוון, `../renderings.md` §12.3). |
| VI:26 | ⸢w⸣ ywsrn{x}n . ggnh | וייסר אותו *בטנו*: | `אַף-לֵילוֹת יִסְּרוּנִי כִלְיוֹתָי` (תהלים טז:ז) | cognate | הקרביים "מייסרים" (מורים) את האדם – אותו פועל |
| VI:26 | ⸢w⸣ ywsrn{x}n . ggnh | וייסר אותו *בטנו*: | `כִּי יִהְיֶה לְאִישׁ בֵּן סוֹרֵר וּמוֹרֶה … וְיִסְּרוּ אֹתוֹ` (דברים כא:יח) | divergence | בתורה ההורים מייסרים את הבן הסורר; כאן "בטנו" של הבן מייסרת אותו – למרוד. |
| VI:30 | w tq⸢ġ⸣ [. udn . k ġz . ġzm] | והַט [אוזן! כשודד – שודדים] | `שִׁמְעִי-בַת וּרְאִי וְהַטִּי אָזְנֵךְ` (תהלים מה:יא) | equivalent |  |
| VI:31 | tdbr . ⸢w⸣ [ġ]⸢rm⸣ [. tṯwy] | תַּדְבִּיר, ותוקפים [*תעצור*]? | `וַיַּדְבֵּר עַמִּים תַּחְתָּי` (תהלים יח:מח) | cognate | `הִדְבִּיר` "הכניע", מעשה המלך. |
| VI:32 | šqlt . b ġlt . yd⸢k⸣ | הִפַּלְתָּ ברפיון ידך: | `מֵרִפְיוֹן יָדָיִם` (ירמיהו מז:ג) | equivalent |  |
| VI:33 | l tdn . dn . almnt | לא תדין דין אלמנה, | `דִּין לֹא דָנוּ דִּין יָתוֹם` (ירמיהו ה:כח) | cognate | אותו צירוף, באותה האשמה. |
| VI:34 | l tṯpt . ṯpṭ . qṣr . npš | לא תשפוט שֶׁפֶט קצר־הנפש; | `וַתִּקְצַר נֶפֶשׁ הָעָם בַּדָּרֶךְ` (במדבר כא:ד); `מִקֹּצֶר רוּחַ` (שמות ו:ט) | cognate | קוצר נפש = מצוקה |
| VI:34 | l tṯpt . ṯpṭ . qṣr . npš | לא תשפוט שֶׁפֶט קצר־הנפש; | `שִׁפְטוּ-דַל וְיָתוֹם; עָנִי וָרָשׁ הַצְדִּיקוּ` (תהלים פב:ג); `יָתוֹם לֹא יִשְׁפֹּטוּ` (ישעיהו א:כג) | equivalent |  |
| VI:35 | km . aḫt . ʿrš . mdw | כאחות – ערש מַדְוֶה, | `וְכָל מַדְוֵי מִצְרַיִם הָרָעִים` (דברים ז:טו) | cognate |  |
| VI:35 | km . aḫt . ʿrš . mdw | כאחות – ערש מַדְוֶה, | `יְהוָה יִסְעָדֶנּוּ עַל-עֶרֶשׂ דְּוָי` (תהלים מא:ד) | equivalent | "ערש דוי" (VI:36). |
| VI:37 | rd . l mlk . amlk | רד מן המלכות – אמלוך, | `מִי יְשִׂמֵנִי שֹׁפֵט בָּאָרֶץ; וְעָלַי יָבוֹא כָּל אִישׁ אֲשֶׁר יִהְיֶה לּוֹ רִיב וּמִשְׁפָּט` (שמואל ב טו:ד) | equivalent | אבשלום, בשער, טוען שהוא ישפוט כשאביו אינו שופט. |
| VI:42 | ṯʿ . ištmʿ . w tqġ . udn | השוע! השמע, והט אוזן! | — | — | [מקבילה: 1.16 VI:29–30]. |
| VI:43 | k ġz . ġzm . tdbr | כשודד – שודדים תדביר, | — | — | [מקבילה: 1.16 VI:30–31]. |
| VI:44 | w ġrm . tṯwy . šqlt | ותוקפים *תעצור*? הִפַּלְתָּ | — | — | [מקבילה: 1.16 VI:31–32]. |
| VI:45 | b ġlt . ydk . l tdn | ברפיון ידך: לא תדין | — | — | [מקבילה: 1.16 VI:32–33]. |
| VI:46 | dn . almnt . l tṯpṭ | דין אלמנה, לא תשפוט | — | — | [מקבילה: 1.16 VI:33–34]. |
| VI:48 | {q}ṯšm . ʿl . dl . l pnk | *העושקים* מעל הדל; לפניך | `לְהַטּוֹת מִדִּין דַּלִּים וְלִגְזֹל מִשְׁפַּט עֲנִיֵּי עַמִּי לִהְיוֹת אַלְמָנוֹת שְׁלָלָם` (ישעיהו י:ב) | cognate | הדל, האלמנה והיתום (VI:46–50), והגוזלים אותם. |
| VI:50 | kslk . almnt . km | כסלך – אלמנה. כמו | `פְּתַח-פִּיךָ שְׁפָט-צֶדֶק; וְדִין עָנִי וְאֶבְיוֹן` (משלי לא:ט) | equivalent | חובת המלך כלפי העני. |
| VI:51 | aḫt . ʿrš . mdw . anšt | אחות – ערש מדוה, אנושה – | — | — | [מקבילה: 1.16 VI:35–36]. |
| VI:52 | ʿrš . zbln . rd . l mlk | ערש דוי. רד מן המלכות – | — | — | [מקבילה: 1.16 VI:36–37]. |
| VI:53 | amlk . l drktk . aṯb | אמלוך, מן שררתך – אשב | — | — | [מקבילה: 1.16 VI:37–38]. |
| VI:54 | an . w yʿny . ⸢kr⸣t ṯʿ . yṯbr | אני!" וענה כִּרְתָּא השוע: "ישבור | — | — | [מקבילה: 1.14 VI:16] `וענה כִּרְתָּא השׁוֹעַ:`. |
| VI:55 | ḥrn . y bn . yṯbr . ḥrn | חוֹרָן, הוֹ בני, ישבור חוֹרָן | — | — | [מקבילה: 1.2 I:7–8] `ישב[ור] / ראשך, עַתְּתַרְת־שׁ[ֵם־בַּעַל]` – אותה קללה, שם בפי בעל נגד ים. |
| VI:56 | rišk . ʿṯtrt . šm . bʿl | את ראשך, עַתְּתַרְת־שֵׁם־בַּעַל – | `וַיֹּאמֶר אָרוּר כְּנָעַן: עֶבֶד עֲבָדִים יִהְיֶה לְאֶחָיו` (בראשית ט:כה) | equivalent | אב המקלל את בנו (נח את כנען, דרך חם) |
| VI:56 | rišk . ʿṯtrt . šm . bʿl | את ראשך, עַתְּתַרְת־שֵׁם־בַּעַל – | `פַּחַז כַּמַּיִם אַל תּוֹתַר כִּי עָלִיתָ מִשְׁכְּבֵי אָבִיךָ` (בראשית מט:ד) | equivalent | האב שולל את הבכורה מבנו שקם עליו. |
| VI:57 | qdqdr . tqln . b gbl | את קדקדך! תיפול בגבול | — | — | [מקבילה: 1.2 I:9] `תיפול בגבו[ל]`. |
| VI:58 | šntk . b ḥpnk . w tʿn | שנותיך, ב*חופניך* – ותֵעָנֶה!" | `אֲנִי עָנִיתִי מְאֹד` (תהלים קטז:י) | cognate | `עָנָה` "נִשְׁפַּל, סבל". |
| VI:59 | spr . ilmlk . ṯʿy | סופר: אִלִימִלְכּוּ, השׁוֹעַ. | — | — | [מקבילה: 1.6 VI:54] `סופר: אִלִימִלְכּוּ הַשּׁוּבָּנִי,`. |

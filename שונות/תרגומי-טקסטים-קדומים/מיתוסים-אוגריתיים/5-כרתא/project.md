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

## Parallels index

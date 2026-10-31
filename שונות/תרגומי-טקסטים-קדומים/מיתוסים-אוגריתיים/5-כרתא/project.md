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

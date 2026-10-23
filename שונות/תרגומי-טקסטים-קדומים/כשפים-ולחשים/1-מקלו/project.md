# Project: Maqlû ("Burning"), Tablets I–VIII and the Ritual Tablet

Round 3, run 6 (`../../curated-translation-candidates.md`, "Round 3 plan"). Coordinator: the run's session; translators
as sub-agents, **one at a time** (guidelines §5.1), each with `../translator-brief.md`.

## Scope

The whole of Maqlû in eBL's edition: the eight incantation tablets and the Ritual Tablet, 1,595 eBL labels (I 152,
II 231, III 202, IV 155, V 181, VI 161, VII 198, VIII 133, RT 182). Every label is translated, including rubrics
(`KA.INIM.MA …`, labels such as `36a`), colophons, catch-lines and wholly broken lines (`> […]`).

## Base text and versions

- **Base text:** eBL `Mag/1/1`, ed. T. Abusch, rev. D. Schwemer (`../../sources/eBL/Maqlu-<KEY>/reading-edition.md`):
  the normalized reconstruction (N), Abusch's English (T), the notes, and every manuscript's transliteration (the ATF
  block under each line: use it for the brackets).
- **Lemmas:** eBL's for Tablet I only; for II–RT, `python3 -I -B ../maqlu_tools.py lem KEY FROM [TO]` (candidates
  from ORACC cmawro's glossary, by normalized form: a lookup, not a parse).
- **Rank 3:** Abusch's translation in eBL (T) – the only open modern translation. **Rank 5:** Tallqvist 1895
  (`../../sources/Tallqvist-1895--Maqlu/`), German, for the history of interpretation only.

## Line numbering

eBL's labels, as `### <label>` in the annotated files: plain numbers, `a`-lines (`36a`, `101a`, `144a`), primed lines
in RT (`2'`–`180'`, and the range `78'-79'`), and the fragment sections of VIII (`A+1`–`A+46`, `B+1`–`B+22`).
Abusch's older numbering (AMD 10) is the same for most lines; eBL notes give differences.

## Files

- `annotated-<KEY>.rtl.md` (KEY = I … VIII, RT): the working translation (guidelines §7.2); one per tablet.
- `translation--intro-<KEY>.rtl.md`: the translator's title and introduction for each tablet; `translation--head.rtl.md`:
  the head of the whole work (coordinator).
- `translation-<KEY>.rtl.md` and `translation.rtl.md`: **generated** by `python3 -I -B ../maqlu_tools.py build`.
- Below: one section per tablet, appended by its translator (format: `../translator-brief.md` §7).

## Decisions (coordinator, before the first line)

- The corpus renderings (`../renderings.md`) bind: names, the witchcraft lexicon, the formulas, the reserved words, and
  §9, the fixed Hebrew of every line shared between tablets I–VII.
- One translator at a time, tablet by tablet in order (I → VIII, RT): each sees the Hebrew of the earlier tablets;
  Tablet VIII and RT copy the incipits they quote (`maqlu_tools.py incipits`).

## Open decisions for the user

Collected from the tablet sections below (each has its full list). Under the user's rule ("decide minor things
yourself", STATUS §6) the coordinator **kept the drafted renderings** for all of them; they are listed so that the
user can overrule any in review:
- **Reserved biblical words kept out of the Hebrew** (`לִילִית`, `קָרָא` for *šasû* – `צעק` used; `שֵׁד` – `שֵׁדוּ`
  transliterated in hostile-demon lists): a deliberate [cognate] in the text would be the alternative.
- **Plant and practitioner names transliterated** (V 27–35, III 39–53): Hebrew identifications (`חרדל`, `שחלים`,
  `חלתית`) are possible but uncertain.
- **One-word-per-lemma choices that read stiffly**: *ṣillu* `צֵל` also for the reflection in the bowl (VIII B+9,
  RT 175'); *ḫuṣābu* `שְׁיָר` for a stick (RT); *riksu* `קֶשֶׁר` for Gula's bandage (VII 42) but `מַעֲרָכָה` for the ritual
  arrangement (RT 125').
- **Uncertain readings kept in italics or with `?`**: I 5, I 69, II 78, III 115, III 138, IV 135, V 155, VII 140a–h, RT
  73'.
- **Settled by the coordinator at the merges** (no longer open): II 61 `יַד־שבועה`; I 124 *binûtu* `מבנה`; II 161 Gtn
  present; RT 14' *paṭīru* `מַעֲמָד`; *ḫepû* and *šebēru* both `שבר`.
- **For the lead's next cross-corpus harmonization** (renderings §10): Ludlul's *gerrānu* `מספד` (here the cognate of
  *sipdu*); *nissatu* `דאבון` here / `יגון` elsewhere; *gamāru* `כלה` (prophecy) / `גמר` (here, Gilgameš); *markasu*
  `מוסרה` here / `חבל` (flood); *bâʾu* `שטף` here / `עבר` (flood).

## Progress log

- 2026-10-21: base text fetched (eBL, all nine chapters); `tools/ebl_fetch.py` fixed for Maqlû's line types.
- 2026-10-23: synced with `main` after the VM reboot; renderings aligned with the corpora finished meanwhile; tools,
  renderings §9 and brief ready; translation starts with Tablet I.
- 2026-10-23: **all 1,595 labels translated** by one translator, resumed tablet by tablet (I → VIII, RT), one agent at a
  time; each tablet merged by the coordinator (renderings §10.1–§10.9), verified (`maqlu_tools.py verify --strict`: no
  problems; 14 listed repeated-line differences, all brackets, punctuation or the RT's quotation form, each explained in
  the apparatus), quote-checked (`check_bible_quotes.py`: 0) and pushed. No quota stop. Clean translation built
  (`translation.rtl.md`), print stub `../../הדפסה/כשפים-ולחשים/1-מקלו.rtl.md`, parallels index 567 rows with key findings.

## Tablet I

### Scope
All 152 eBL labels of Tablet I (1–145 with 36a, 41a, 101a, 113a, 134a, 139a, 139b), in nine sections: eight
incantations (1–36a, 37–41a, 42–49, 50–60, 61–72, 73–121, 122–134a, 135–143), the catch-line (144 = II 1) and the
colophon (145). The tablet is well preserved: almost every line is complete in at least one manuscript; brackets
remain only in the rubrics (36a, 41a, 134a), in 83, 85 (plural ending; kept as in N and §9), 101a, 113a and 139a–139b.
Witnesses: 25 manuscripts (Nineveh NinNA1–7, Aššur AššNA1–2, Ḫuzirina HuzNA1, Kalḫu KalNA1, Nippur, Sippar, Uruk,
Babylon) and two Aššur commentaries; the a-lines are minority additions (36a, 41a, 134a: one Babylonian copy each;
101a: three Babylonian copies; 113a: two late copies; 139a–139b: Ḫuzirina only, = II 117–118).
Files: `annotated-I.rtl.md`, `translation--intro-I.rtl.md`, generated `translation-I.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` I (`../../sources/eBL/Maqlu-I/`): N, T (Abusch), L (eBL's lemmas: checked form by form; departures
  noted, e.g. *ubbiranni* 5, *uʾʾurāku* 61, *tappalīšināti* 56), the ATF of every line (brackets, variants),
  `glossary.md`, `manuscripts.md`; eBL's only note (87: "cf. line 95").
- eBL `Mag/1/1` RT 2'–40' (`../../sources/eBL/Maqlu-RT/`, via `maqlu_tools.py lines`): the rites that go with each
  incantation of Tablet I (cited in the notes of 1, 31–32, 37, 42, 50, 61, 73, 122, 135).
- `maqlu_tools.py pars / norm / incipits / grep --all`; `../../קולות-היום-יום/kol_tools.py lookup` for every recurring
  lemma; the renderings of the wisdom, Gilgameš, netherworld, prophecy, flood and creation corpora.
- The Bible: every verse printed with `check_bible_quotes.py --show` before quoting (about 120 verses).

### Decisions
(Hebrew strings as in the `>` lines; the rejected alternative and the reason after each.)
- ***šasû* = `צעק`** (`צעקתי אליכם` 1–3, 113; `יצעקו` / `אצעק` 56, 58), not `קרא` (the example of renderings §6,
  `קוֹרֵא אֲנִי לָכֶם`): `קרא` is reserved for *nabû* "to name" (guidelines §5.2 ★; Gilgameš §6; everyday corpus), and
  Maqlû has *nabû* (II 19 *nabi šumka*); the wisdom corpus has *alsī* = `צעקתי`. The performative preterite *alsī* =
  Hebrew past (`צעקתי`), not a participle; the participle is kept for the present (*adabbub* `מדבר אני`, *aqallu*
  `קולה אני`). Ps 17:6 `אֲנִי-קְרָאתִיךָ` stays in the apparatus as [equivalent].
- *dabābu*: noun `ריב` (as fixed in §9 *bēl dabābi* `בעל ריבי`; 13 `שמעו את ריבי`), verb `דיבר` (17 `ומדבר אני את
  דיני`, 61 `ואדבר`; ↔ Jer 12:1 `מִשְׁפָּטִים אֲדַבֵּר`) – a split by sense, recorded.
- *ubburu* (5) = `*האשימה*` (Abusch "accused"); eBL's lemma "to embrace" (G) rejected for the D; "bind" noted.
- *qû* (9) = `פשתן` (Gilgameš I 13 `כגיזת פשתן`); the cognate `קַו` only in the note.
- *upuntu* (10) = `סולת` [equivalent, Lev 2:1]; `קמח` rejected (the flood corpus's *qēmu*).
- *elēlu* (12) = `הֵידָד` (its root's *alāla* is `הידד` in Gilgameš VIII 24 and Ludlul I 101); `רינה` rejected (=
  *nigûtu*); *nubû* = `נהי`, *sipdu* = `מספד` [cognate].
- *emdēku lā ṣalālu* (8) = `עמוס אני: לא לישון`; *ṣalālu* = `ישן` (Ludlul).
- *mahāru* (22) = `המקבל כל רוח` (renderings `קיבל`); *naharmuṭu* (33) = `התמוגג` (kept apart from *hâlu* `נמס`).
- *kalû* "hold back" (50–51) = `כלא` [cognate]; *nēberu* = `מעבר`, *kāru* = `נמל` (Gilgameš).
- *ṣīt šamši* / *ereb šamši* (44–45) = `מוצא השמש` / `מבוא השמש` (Hebrew "the sun enters", Deut 11:30); the cognate
  `עֶרֶב` / `מַעֲרָב` only in the note (Ps 75:7 has `מוֹצָא` and `מַעֲרָב` together).
- *ana lēt* (62) = `אל לחי` (literal; the note gives "against").
- *ḫaṭṭu* (66) = `מקל` (a walking staff), not `שרביט` (Gilgameš / wisdom, a scepter): a split by sense.
- *harrānu* (67) = `אורח` (Etana / Gilgameš), feminine (Prov 15:19).
- *tarāku* D stative (65–66) = `הוכה` / `*הוכתה*` (Abusch "stilled").
- The list 96–109: *ṣabātu* D = `אחז` (as G); *tarāru* D `הרעיד`; *daʾāpu* `דחק`; *kapāpu* `כפף` [cognate];
  *eṣenṣēru* `שדרה`; *enēšu* D `החליש`; *nīš libbi* = `נשיאת לב` (literal; ↔ Exod 35:21 `נְשָׂאוֹ לִבּוֹ`), not
  `תשוקת הלב`; *zenû* D = `הֶאֱנִיף` (wisdom *zenû* = `אנף`; `כעס`, `קצף`, `זעם` are taken); *šapāku* `שפך`; *kasû*
  `אסר`; *mangu* `נוקשות` (= the prophecy corpus's *mungu*); *aklu* `לחם`; *kaššāpūtu* `מכושף`; *rimku* `טבילה`,
  *ramāku* D `הטביל` (`רחץ` is *mesû*'s); *luʾʾû* `מזוהם`; *pašāšu* `משח`; *napšaltu* `משחה`; *ḫâru* `אֵרַשׂ`
  (vocalized: `אירשו` reads "inherited"); *napištu* `חיים` (`מי חיי`); *nâlu* Š `השכיב`; *kabtu* `נכבד`; *rubû*
  `שר`; *hasīsu* `תבונה` (Gilgameš), *diglu* `ראייה`; *maṭû* D `מיעט`, Š `המעיט`; *marāṣu* Š `החלה`.
- 101a: three verbs restored after eBL (`[המעיטו]`, `[אחזו]`, `[החלו?]`); BabNB3's variant *ulaʾʾibū* in the note.
- *sahāru* Š (92) = `הֵסַבּוּ` (the Hiphil of Josh 6:11 `וַיַּסֵּב`), G = `סובבו` (renderings); *epēšu* Št = `עִשּׂוּ`.
- *nādu* `נאד` [cognate] (Gilgameš); *tīku* `טפטוף`; *qatû* `כלה`; *kaṣāṣu* `קצץ` [cognate, Judg 1:6]; *tirku*
  `מכה`; *nakāru* Dt `תשונה`; *annu* `הֵן` (vocalized); *kīnu* `נאמן`; *enû* N `יוחלף`.
- *tamšīlu* `תבנית`; *tarbītu* = `תַּרְבּוּת` [cognate, Num 32:14] (vocalized); *binûtu* = `בִּנְיַן` (renderings
  reserve `מבנה` for *nabnītu*; Gilgameš and Enūma eliš have *binûtu* = `מבנה`: a cross-corpus split to settle);
  *bukru* `בכור`; *ilittu* `יליד`.
- 126–130: the imperatives *kišipšu/kišipši/epussu/epussi* are masc. sg. (to the god) with an object suffix:
  `כַּשְּׁפֵהוּ`, `כַּשְּׁפֶהָ`, `עֲשֵׂה לו`, `עֲשֵׂה לה`; *ana pī* (131) = `לפי` [cognate idiom].
- *malāsu* (132) = `מרט` [equivalent, Ezra 9:3]; *batāqu* (133) = `בִּתֵּק` [cognate, Ezek 16:40]; *šabāšu* `אסף`
  (renderings *šābištu* `האוספת`); *etequ* `חֲלוֹף` (*etēqu* = `חלף`, Etana).
- Demons (136–139) transliterated as in the wisdom corpus: `אוּטוּכּוּ`, `רוֹבֵץ` [cognate], `אִט`, `לַמַשְׁתּוּ`, and
  new `לַבָּצוּ`, `אַחָּזוּ`. ***šēdu* = `שֵׁדוּ`** here (an evil spirit among demons), not the wisdom corpus's
  `רוּחַ־מָגֵן` (the protective spirit); Deut 32:17 `לַשֵּׁדִים` in the apparatus.
- **138 *lilû, lilītu, ardat-lilî* = `לִילוּ, לִילִיתוּ, עַלְמַת־לִילוּ`**: transliterated so that the triad stays
  one family and Isa 34:14's `לִילִית` is visible but not used; *ardatu* = `עלמה` (netherworld). The netherworld corpus
  renders the Sumerian name of the same demon (*ki-sikil-lil₂-la₂*) `עַלְמַת־הַמַּשַּׁב`: a cross-language split.
- *mimma lemnu* (139) = `כל רע`; *amēlūtu* `אנושות`.
- *ḫargullu* (54) = `מנעול`, although `מנעול` already serves *mēdelu* (Ludlul), *sikkūru* (Atra-ḫasīs) and *uppu*
  (Nergal): no free Hebrew lock-word; `מחסום` rejected (it would manufacture an echo of Ps 39:2).
- Fixed lines copied exactly; 143 has `אֵאָה` vocalized (its first occurrence in the file; §9 writes it bare).

### Open decisions for the user
- *šasû* = `צעק` instead of renderings §6's `קרא` (above). If `קרא` is preferred, II 19's *nabû* needs another verb.
- *elēnītu* = `מלשינה` and *ubburu* = `*האשימה*` (5): both uncertain words.
- *šēdu* among demons = `שֵׁדוּ` (or `רוּחַ־מָגֵן` everywhere, as in the wisdom corpus?).
- *lilītu* = `לִילִיתוּ` (or the biblical `לִילִית` itself, which would be a deliberate [cognate] in the text).
- *upuntu* = `סולת` (or a transliteration, `קמח־אֻפּוּנְתּוּ`, after Gilgameš's flour names).
- 69 (`השור יתיר, הכבש יתיר`) is obscure: kept literal with Abusch's interpretation in the note.

### Progress log
- 2026-10-23: brief, guidelines, corpus, renderings, project and the SH model read; `pars I` run. Drafted and saved in
  five steps (1–36a; 37–60; 61–72; 73–121; 122–145), `fill` + `verify I` after each. One verse quoted from memory
  (Dan 1:20) was caught by `check_bible_quotes.py` and fixed; since then every verse printed first.
- Pass (a) fidelity: every N bracket checked against the ATF (61, 92, 100, 105 unbracketed: preserved in at least one
  copy; 101a bracketed by the ATF); 23 *malâta* rendered as a stative (`מלא` for `מילא`); 54 a stray opening quotation
  mark removed; 129 the imperative corrected to the masc. `עֲשֵׂה`.
- Pass (b) consistency: `kol_tools lookup` / `grep --all` on every new Hebrew word; changed *šasû* `קרא`→`צעק`,
  *elēlu* `רינה`→`הֵידָד`, *upuntu* `קמח`→`סולת`, *hasīsu* `בינה`→`תבונה`; repeated lines inside I identical
  (44=45, 36a=41a, 96/131, 126–130); all §9 lines pass `verify`.
- Pass (c) Hebrew: the generated `translation-I.rtl.md` read through; small wording fixes (above).
- Final: `maqlu_tools.py verify I --strict` – no problems; `check_bible_quotes.py` on the annotated file, the intro and
  `translation-I.rtl.md` – 0 problems. `build` exits 1 only because of the coordinator's `translation--head.rtl.md`
  (two paragraphs open with bold, which the builder counts as numbered lines: "combined numbered lines differ").

### The text on its own terms
- **A night court** (1–36, 73–121): the bewitched man summons the stars ("gods of the night"), the three watches and
  Night the veiled bride as judges and witnesses, sets the figurines of his accusers "at their feet" as evidence (15–17),
  and asks for a verdict (14, 113a–114); the fire gods Nuska and Girra judge "in the stead of Šamaš" at night (113),
  and the rising sun ends the session (142).
- **The figurine is the person** (15, 93–94, 96, 131): "these are they, these are their figurines"; the absent
  defendants "stand" in court through them, as the witches once worked on the victim through his own image.
- **What bewitchment felt like** (4–12, 96–109): estrangement of one's personal god and goddess, revulsion in others'
  eyes, sleeplessness, a gagged mouth, food and water cut off, joy turned to mourning, a body pressed, bent, poured out
  and bound, lost potency and strength, and finally the anger of god, king, noble and prince.
- **The body's leavings** (108, 132–133): spittle, hair, the hem of a garment, the dust of one's footprints, "the
  water of my life" laid in a grave; the victim "betrothed to a dead person" (107).
- **Purity from plants** (21–26): tamarisk, date palm, soapwort, pine cone – each purifies by its own quality (a rich
  crown, standing against every wind, filling the earth, full of seed); purity is also acquittal (*zakû*).
- **Measure for measure** (28, 70, 126–130): the word returned to the witch's mouth, her testimony "released" and
  his not; the fivefold "bewitch him with the witchcraft with which he bewitched me".
- **The silenced cosmos** (63–68): heaven, earth, river, dry land, the howling wind, the traveller and the road itself
  stand still while the envoy testifies.
- **The human envoy of the gods** (52–53, 61–62): Anu and Antu ask "whom shall I send?", and the exorcist goes as
  Asalluḫi's messenger to the scribe of the netherworld.
- **Knowledge against secrecy** (39–40, 87): "whatever you did I know, whatever I do you do not know" – yet the victim
  does not know who bewitched him; only the god does.
- **Witches and demons are one family** (136–139): the figurines burned are those of the *utukku*, the ghost, Lamaštu,
  Lilith's triad and "every evil that seizes mankind" – and of the witches beside them.
- **The ritual behind the words** (RT 6'–40'): a tallow figurine with salt in its mouth drips from a torch at "the mouth
  that spoke evil" (31–32); water is sprinkled for the Earth and for Zabban; a flour circle closes "the ford"; nine
  materials of figurines are burned.
- **Scribal care** (144–145, a-lines): the catch-line, the colophon "written according to its original and collated"
  (NinNA2), and regional plus-lines (101a, 113a, 139a–b).

### Key parallels
- Exod 22:17 `מְכַשֵּׁפָה לֹא תְחַיֶּה` – *kaššāptu* is the same word (4), and *šī limūt-ma anāku lubluṭ* (19) answers it
  from the victim's side [cognate / divergence].
- Deut 32:1, Isa 1:2 and Ps 50:4 – heaven and earth summoned to listen as witnesses in a suit (63–64) [equivalent].
- Jer 1:7 – "sent – go, commanded – speak", the same four verbs in the same order (61) [equivalent].
- Isa 6:8 `אֶת מִי אֶשְׁלַח` – the divine council's question, singular among plural speakers (52–53) [equivalent].
- Jer 22:29 `אֶרֶץ אֶרֶץ אָרֶץ` – the triple call to the earth (37) [cognate].
- 1 Sam 21:14 / Ps 34:1 `וַיְשַׁנּוֹ אֶת טַעְמוֹ` – *šanê ṭēmi* "madness" (91) [cognate idiom]; 1 Sam 28:14 `מַה
  תָּאֳרוֹ` and Isa 46:5 `וְתַמְשִׁלוּנִי` – *bunnannû* and *mašālu* D for the figurine's likeness (96) [cognate].
- Gen 19:28 `עָלָה קִיטֹר` (141) [cognate]; Isa 47:14 `אֵין גַּחֶלֶת` – Babylon's sorcerers in the fire (142).
- Isa 34:14 `לִילִית`, Isa 19:3 `הָאִטִּים`, Gen 4:7 `רֹבֵץ`, Deut 32:17 `לַשֵּׁדִים` – four demon names (136–138) [cognate].
- Obad 1:15 / Lev 24:19 – "as you have done it shall be done to you" (126–130) [equivalent]; Judg 1:6–7 – cut thumbs
  as requital (119) [cognate *kaṣāṣu*].
- Ps 30:12 `הָפַכְתָּ מִסְפְּדִי לְמָחוֹל` – the exact reversal of 12 [cognate *sipdu*]; 1 Sam 24:5 – cutting the hem (133).

### Lines shared with other tablets
- Copied from renderings §9 exactly: 15, 16, 19, 55, 75–86, 88–91, 111, 112, 113a, 114, 115, 116, 139a, 139b, 140,
  141, 142, 143, 144 (143: `אֵאָה` vocalized, the only difference).
- For the next translators (not in §9): I 95 ≈ II 99 (`משיג רע ואויב – השג אותם, ואני לא אֵחָבֵל!`); I 117 ≈ II 134
  (`סערתך הזועמת תשיג אותם!` + `– לחש, קסם.`); I 4 ≈ VI 52 (`… מכשפה כִּשְּׁפָה אותי`); I 134a = IV 79a = VIII 45a
  (`נוסח [להתרת ריר].`, brackets per line); I 145 ~ IV 153, VI 159, VII 179 (`הלוח הראשון של מַקְלוּ.` → `הלוח
  הרביעי …`); the incipits quoted by RT and VIII: I 1, 37, 42, 50, 61, 73, 122, 135, 144 (`maqlu_tools.py incipits`).

### Proposals for the shared renderings
- §6: replace the example `קֶסֶם. קוֹרֵא אֲנִי לָכֶם, אֵלֵי הַלַּיְלָה,` by `קֶסֶם. צָעַקְתִּי אֲלֵיכֶם, אֵלֵי הַלַּיְלָה,`
  and add *šasû* = `צעק`, *nabû* = `קרא` (II 19) to §8's "only for their source word".
- New rows: *qû* `פשתן`; *upuntu* `סולת`; *elēlu* `הֵידָד`; *nubû* `נהי`; *sipdu* `מספד` [cognate]; *dabābu* verb
  `דיבר`; *nēberu* `מעבר`, *kāru* `נמל`, *kalû* "hold back" `כלא`; *ereb šamši* `מבוא השמש`; *harrānu* `אורח`;
  *nīš libbi* `נשיאת לב`; *zenû* D `הֶאֱנִיף`; *rimku* `טבילה`, *ramāku* D `הטביל`; *luʾʾû* `מזוהם`; *mangu*
  `נוקשות`; *aklu* `לחם`; *napišti* "life" `חיים`; *annu* `הֵן`; *kīnu* `נאמן`; *ṣīru* `נעלה`; *tarbītu* `תַּרְבּוּת`;
  *binûtu* `בִּנְיַן` (or harmonize with Gilgameš's `מבנה` and move *nabnītu*); *ḫaṭṭu* `מקל` (walking staff) /
  `שרביט` (scepter).
- Demons: *šēdu* in demon lists `שֵׁדוּ`; *labāṣu* `לַבָּצוּ`; *aḫḫāzu* `אַחָּזוּ`; *lilû* / *lilītu* / *ardat-lilî*
  `לִילוּ` / `לִילִיתוּ` / `עַלְמַת־לִילוּ` (add `לִילִית` to §8 "never"); *mimma lemnu* `כל רע`.
- §2.3: *ḫâru* `אֵרַשׂ` always vocalized (unvocalized `אירשו` = "inherited").
- A cross-corpus collision to settle: Ludlul I 105 renders *gerrānu* `מספד`, while `מספד` is the cognate of *sipdu*.

### Lessons for the guidelines
- An example inside a corpus renderings file (here §6's `קוֹרֵא אֲנִי לָכֶם`) can break a ★ reservation of an earlier
  corpus (`קרא` = *nabû*): check the examples, not only the tables, against the reserved words.
- The head file of a combined translation must follow the intro rule too (no paragraph opening in bold): otherwise
  `build` fails its combined-file check.
- Quote whole words: a bare `רִיר` against the verse's `רִירוֹ` was not flagged by `check_bible_quotes.py`.

## Tablet II

### Scope
All 231 eBL labels of Tablet II (1–228 with 144a, 144b, 160b), in ten sections: nine incantations, each but the
last two ending in a rubric that names the figurine burned with it (1–18 Nuska, tallow; 19–76 Girra *bēlu gitmālu*,
bronze with sulphur; 77–104 Girra *āriru bukur ani*, bronze; 105–126, dough; 127–135, clay; 136–149, bitumen;
150–160b *keš libiš kedeš*, sesame pomace; 161–182 *eppušūni*, bitumen with gypsum; 183–204 the witch who took clay
from the river, clay with tallow; 205–226 the unknown witch and the oven, tamarisk and cedar), the catch-line (227 =
III 1) and the colophon (228). Well preserved except 214–217, 222–226 (broken passages, restored by eBL with `?`).
Minority lines: 144a, 144b (one Babylonian copy), 160b (a ritual instruction). AššNA2 replaces "so-and-so" by the
patient's own name, Aššur-šāliṭ (86, 170).
Files: `annotated-II.rtl.md`, `translation--intro-II.rtl.md`, generated `translation-II.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` II (`../../sources/eBL/Maqlu-II/`): N, T, the ATF of every bracketed line (checked line by line),
  eBL's note to 195; no eBL lemmas for this tablet: every form parsed by hand, `maqlu_tools.py lem` and `kol_tools.py
  lookup` used for the lemmas and their earlier Hebrew.
- RT 32'–41' for the figurine of each incantation; `pars II` and renderings §9–§10.1 for the fixed and shared lines;
  `annotated-I.rtl.md` for every line Tablet I shares (I 95 ≈ II 99, I 117 ≈ II 134, I 137–138 ≈ II 55–56).
- The Bible: every verse printed before quoting (about 110).

### Decisions
- **Fixed lines** (§9) copied exactly: 1, 9, 15, 18, 24, 33–36, 39–50, 76, 94, 104, 105, 108–111, 117, 118, 126,
  131–133, 135, 144, 144a, 145, 149, 160, 170, 171, 182, 197, 204, 218, 227. Brackets follow each line's own N and ATF
  (18: `נוסח [להתרת ריר]`, since UŠ₁₁.BUR₂ is broken in both copies). 218 has `גּוּפֵךְ` vocalized (fem.).
- **Command and execution (161–182):** 162–169 fixed first, 173–180 their exact mirror (same noun, same verb root, same
  order): *kītu* `מחצלת` / *kapālu* `גלל`; *ḫuḫāru* `מצודה` / *saḫāpu* `חפה`; *kāpu* `כֵּף` / *abātu* `הרס`; *šētu*
  `רשת` / *katāmu* `כסה`; *pitiltu* `פתיל` / *patālu* `פתל`; *pitiqtu* `נדבך` / *nabalkutu* `דילג`; *mê musâti*
  `מי רחיצה`, *asurrû* `ביב`, *malû* D `מילא`; *šūšurāt bīti* `טאטוא הבית`, *bābu* `פתח`, *nasāku* `זרק`.
  *nabalkutu* "climb over (a wall)" = `דילג` (Ps 18:30) is a sense split from renderings' `התהפך` ("turn back").
- **The three seeking verbs (205–211)**, each kept apart and mirrored: *buʾʾû* `חיפש` (wisdom), *šeʾû* `ביקש` (I 18),
  *saḫāru* `סובב` (renderings); 209–211 return them on the witch in the same order.
- ***šēdū* (209) = `השֵׁדוּ`**, as the coordinator asked me to decide: they head a list of the hostile demons of II
  52–56 (šēdu, utukku, eṭemmu, bennu, rābiṣu), now sent against the witch; their task is to hunt and harm, not to
  protect the speaker, so the hostile-list rendering of §10.1 applies, not `רוּחַ־מָגֵן`.
- **Disease names (57–64):** demons and opaque disease names transliterated (`לִאְבּוּ`, `בֶּנּוּ`, `אַנְטַשֻׁבּוּ`,
  `לוּגַלוּרָּה`, `סַנְחֻלְחַזּוּ`); the transparent "Hand of …" names translated: `יַד־אֵל`, `יַד־אֵלָה`, `יַד־אִט`,
  `יַד־אנושות`, and *šunamerimmakku* = **`יַד־אָלָה`** – not `יד־שבועה` (*māmītu* = `שבועה`), because the verifier's
  `שבועה` gate is licensed only by *māmīt…* in N, and the line has the Sumerian *namerim* (see Proposals).
- ***nannāru* (19)** = `נַנָּרוּ` (transliterated, per guidelines §6.7 "Nannaru … never `מָאוֹר`"), though here it is a
  common noun ("luminary") said of Girra; Gen 1:16 `הַמָּאוֹר` in the apparatus. *nabû* = `קרא` (19, 65): its first
  licensed uses.
- *ilūtu* `אֵלוּת` (Gilgameš, netherworld); *egēru* D `שילב`, Gt *etguru* `שלוב` (38, 93; not the Theodicy's
  `מפותל`, since `פתל` is *patālu*'s); *paqādu* `הפקיד` (51, 93); *lapātu* `נגע` (87; D 159 `ינגע`); *zêru* Š
  `הוּשְׂנֵאתִי`; *marāṣu* D stative `הָחֳלֵיתִי` (1 Kgs 22:34); *šalāmu* `אֶשְׁלַם` (wisdom gate: *šulmu*/*šalāmu*);
  *ešēru* `אִישַׁר` / Št `מיישר`; *maʾādu* `רבה`; *danānu* `חזק`; *ebēru* Gt `יעברו`; *gimilla turru* `השיב גמול`;
  *rēṣu* `עוזר`; *ûrtu* `צו`, *ṭēmu* (83) `הוראה` (by sense; Jonah 3:7 `מִטַּעַם` noted); *atmû* `שיחה`; *dalḫu* `דלוח`;
  *lumnu* `רֹעַ`; *kamû* `לכד`; *namrāṣu* `מעקש` (Theodicy); *puqqû* `ייחל` (Gilgameš); *gimru* `כלל`.
- 2–12: *pāqidu* `פוקד`, *nindabû* `תרומת־לחם`, *māḫāzu* `מחוז`, *parakku* `דוכן`, *edēšu* D `חידש`, *sukkallu*
  `וזיר`, *pirištu* `סוד`, *gašru* `כביר`, *tāḫāzu* `מלחמה`, *barāqu* Š `הבריק`, *zayyāru* `שונא`, *eṣēnu* `הריח`,
  *ḫasāsu* `זכר` (not `הזכיר`, *šuma zakāru*'s), *eṭēru* `הציל`, *gamālu* `חמל`, *dannatu* `מצוקה`, *pušqu* `מצר`;
  14 *saḫāru* G `סבותי`, *bašû* `יֶשְׁנָן`, *kamāsu* `כרע`; 16 *belû* `כבה`, *ḫanṭiš* `חיש`.
- 119–121 (Š imperatives): `גרום ל־` for *leqû* Š and *wabālu* Š (no Hiphil of `לקח`); *rabāṣu* Š `הַרְבֵּץ` [cognate
  of *rābiṣu* `רובץ`]; *mānaḫtu* `יגיע` (with the precedent and Ps 109:11); *ekkēmu* `חוטף`, *ḫabbātu* `שודד`,
  *makkūru* `רכוש`, *bušû* `קניין`.
- 116 *šutābulu* `הָנַע` (Ps 59:12), not `בלבל` (a false echo of Gen 11's `בלל`); *pašāḫu* Š (123) `אל תניח להם לנוח`.
- 124 *bānû* `בּוֹנְךָ` (banû = `בנה`; `ברא` reserved); 125 the Sages = renderings' `שבעת החכמים של אֶרִידוּ`.
- 137–142: *kayyānu* `תמידי` (↔ Exod 27:20 `נֵר תָּמִיד`), *eddēšû* `מתחדש`, *namirtu* `נהרה`, *apu* `אגם`
  (Gilgameš, Ludlul), *naḫarmuṭu* Š `ממוגג`, *allallû* `האדיר`.
- 150–153 the abracadabra transliterated (`כֶּשׁ לִבִּשׁ כֶּדֶשׁ`, `אַרַבֶּשׁ נַדְרֶשׁ`, `לִירוּנְ⟨דִי נַ⟩חוּנְדִי`, the
  scribe's omission in ⟨ ⟩); *kaṣāṣu* (154) transliterated `קַצָּצוּ`; *zanānu* `נמטר` (Gilgameš, Ludlul); *rakābu*
  `רכב` [cognate] (Ps 18:11, 104:3).
- 183–204: *temēru* `טמן`; *tubkinnu* `ערמת זבל` (kept apart from *ḫimmātu* `אשפה`); *laqātu* D `ליקט` [cognate];
  *ḫuṣābu* `שיירים`; *ašlāku* `כובס`; *askuppatu* `מפתן` (↔ Neh 12:25 `אֲסֻפֵּי` [cognate]); *šâmu* `קנה`; *ḫirītu*
  `חפירה`; *karāṣu* `קרץ`; *tinūru* `תַּנּוּר`; *naḫāzu* N `התלקח` (Exod 9:24); *ummānu* `חיל`; *kummu* `חדר`; *takālu*
  `בטח`; *kitpudu* `מחושב`.
- 205–226: *šubtu* `משכן` (Gilgameš); *nâru* `קטל` (Gilgameš), kept apart from *dâku* `הרג`; *pašāṭu* `מחה`; *šīmtu*
  `גורל`; *lā pādû* `שאינו פודה` (wisdom); *azugallatu* `הרופאה הגדולה` (= EST); *utūnu* `אַתּוּן` (vocalized: unvocalized
  "she-ass"); *ramû* (dwelling) `קבע`; *napāḫu* `נפח`; *nablu* `שלהבת`; the oven's three fire verbs in the fem.
  imperative `בַּעֲרִי, קְלִי, לַהֲטִי`.
- Address: the imperatives of 15, 24, 72–73, 108–116, 131–133, 202–203 go to Girra (masc. sg.); 223 to the oven (fem. sg.);
  189–190, 205–218 to the witch (fem. sg., `־ךְ`); 155–159 to the witches (masc. pl., `־כם`).

### Open decisions for the user
- *šunamerimmakku* `יַד־אָלָה` vs `יַד־שבועה` (the gate; see Problems).
- *nannāru* (19): `נַנָּרוּ` (guidelines §6.7) or the plain `מָאוֹר` (Gen 1:16), since here it is an epithet, not the moon god.
- *šēdū* (209) `שֵׁדוּ` (decided as hostile; the alternative is the wisdom corpus's `רוּחַ־מָגֵן`).
- The abracadabra (150–153) transliterated only; *kaṣāṣu* (154) left in transliteration.
- 78 (*dāʾin dīni atmê pirišti*) remains uncertain; `(יודע)` is added for sense.

### Progress log
- 2026-10-23: renderings §10.1 (the coordinator's merge of Tablet I) read; `pars II` run. Drafted and saved in six steps
  (1–18; 19–76; 77–104; 105–160b; 161–182; 183–228), `fill` + `verify II` + `check_bible_quotes.py` after each.
  One wrong reference (`(מז:ט)` without the book, read as Genesis) caught by the checker and fixed.
- Pass (a) fidelity: brackets checked against the ATF for every bracketed N (unbracketed where a copy preserves the
  word: 20, 21, 30, 61, 65, 66, 87, 88, 100, 113, 187, 188, 201, 202, 221; bracketed: 22, 28, 29, 59, 60, 86, 89, 193,
  214–216, 222–224, 226); 38 revised (`שלובים`) to match 93's *egēru*; 156 marked `?`.
- Pass (b) consistency: repeated lines identical (13/86, 17/75/225, 16/224, 23/107, 37/70/91, 77/136, 138/192,
  162–169/173–180, 205–207/209–211, I 95/II 99, I 117/II 134); new Hebrew words grepped across the corpora
  (`טמן`, `שילב`, `מתלקח`, `גלל`, `ביב`, `טאטוא`, `דילג`, `כובס`, `רופאה`).
- Pass (c) Hebrew: the generated `translation-II.rtl.md` read through; 146 word order (`ואת עושה המרד, המחליף, הרע –
  השג!`).
- Final: `verify II --strict` – no problems (one listed repeated-line difference, I 144 / II 1: punctuation and
  brackets only, justified in the apparatus); `check_bible_quotes.py` on the annotated file, the intro,
  `translation-II.rtl.md` and `translation.rtl.md` – 0 problems; `build` exits 0.

### The text on its own terms
- **One figurine per prayer** (rubrics 18–226; RT 32'–41'): each incantation burns another material, from tallow and
  bronze to bitumen, sesame pomace and wood – the night is a sequence of burnings.
- **A real patient in the form** (13, 86, 170; AššNA2): "so-and-so, son of so-and-so, whose god is so-and-so" – and
  one Assyrian copy writes the name, Aššur-šāliṭ, with his gods Nabû and Tašmētu.
- **Seizing the hem against being seized** (27–36): the speaker holds the hem of Girra, of his god, of the city gods;
  the witch holds his head, eyes, feet, knees and arms – the same verb, *ṣabātu*.
- **Without fire, no cult and no justice** (9–11, 79–83): no meal in Ekur, no incense, no verdict of Šamaš; the fire
  god judges at night "like Sîn and Šamaš".
- **A medical taxonomy of evil** (52–66): demons, fevers, epilepsies, and diseases named after the "hand" that sent
  them (god, goddess, ghost, curse, mankind) – and "anything evil that has no name".
- **Life for praise** (17, 75, 100–103, 225): "let me live, and I will proclaim your greatness"; "you alone are my god,
  my lord, my judge, my helper, my avenger".
- **Sympathetic magic spelled out** (147–148): "as these figurines melt, dissolve and drip, so may the witch".
- **Words of power without meaning** (150–153): foreign-sounding syllables, perhaps Elamite names, as the strongest spell.
- **Exact reciprocity** (161–182): eight images of being wrapped, trapped, crushed, netted, twisted, trampled, poured
  away and swept out – returned word for word.
- **The witch's craft with the body's leavings** (183–188): river clay, a figurine buried in a tomb, water in a grave,
  scraps from the rubbish heap, the hem cut at the laundry, dust from the threshold – and the speaker buys tallow and
  pinches clay for her figurine in turn (189–190).
- **The nameless enemy** (205–211): "I do not know your city, your house, your name, your dwelling" – so the demons
  who seek are sent to seek her, with the same three verbs.
- **The oven as a goddess** (219–223): "pure oven, great daughter of Anu", in whose belly burns "the fire of the grave".
- **Innocence and trust** (198–201): "I did not bewitch her, she bewitched me"; "she trusts in her schemes, I in the
  constant light, Girra the judge".

### Key parallels
- Exod 22:17 – 197 `את המכשפה יהרגו, ואני אחיה` is the closest line in Maqlû: the witch as object, killed by others
  [divergence]; 94–97 repeat "they die – I live" four times.
- Mal 3:19 `בֹּעֵר כַּתַּנּוּר` with Mal 3:5 `בַּמְכַשְּׁפִים` – the burning oven sent against the witch (191) [cognate
  *tinūru*]; Dan 3:6 `אַתּוּן נוּרָא יָקִדְתָּא` – *utūnu* (219) [cognate].
- Ps 35:8, Prov 26:27, Ps 7:16 – the snare returns to its maker (161–182) [equivalent].
- Ps 109:11 `וְיָבֹזּוּ זָרִים יְגִיעוֹ` – the plunder of the wicked's goods (119–121) [equivalent].
- Zech 8:23 and Ruth 3:9 – seizing the hem as a plea for protection (27–30) [equivalent]; 1 Sam 24:5 (187).
- Ps 140:7, 118:28, 16:2 – "you are my god … my lord" (101) [equivalent]; Ps 119:175 – life for praise (17).
- Isa 47:9–10 `וַתִּבְטְחִי בְרָעָתֵךְ` – the witch who trusts in her sorceries (200); Ps 20:8 – "they in …, we in …" (201).
- Ps 18:11, 104:3 – the god who rides the wind (152) [cognate *rakābu*]; Exod 27:20 `נֵר תָּמִיד` (138).
- Gen 32:27 `לֹא אֲשַׁלֵּחֲךָ` – the night grip that does not let go (69) [divergence].
- Job 33:6 `מֵחֹמֶר קֹרַצְתִּי` – pinching clay (190) [cognate *karāṣu*]; Isa 53:4 `נָגוּעַ` (87).

### Lines shared with other tablets
- Copied from §9 (list above); from Tablet I: II 99 = I 95 without the address, II 134 = I 117 + `– לחש, קסם.`, II 55–56
  = I 137–138 with `בין …`.
- For the next translators: III 1 = II 227 (§9); III 64 / IV 115 / RT 68' ≈ II 161 (`עושים לי, עָשׂוּ וְעָשׂוּ לי`);
  VIII A+37 ≈ II 168 (`כמי רחיצה … את הביב`); III 93–96 mirror II 33–36 (§9); VII 18–19 = II 170–171 (§9); III 30 =
  II 218 (§9); VI 150 = II 197 (§9); the RT incipits of II 1, 19, 77, 105, 127, 136, 150, 161, 183, 205.

### Proposals for the shared renderings
- §2.2 add the capture words' verbs: *kapālu* `גלל`, *saḫāpu* `חפה`, *abātu* G `הרס`, *nasāku* `זרק`, *asurrû*
  `ביב`, *šūšurātu* `טאטוא`, *mê musâti* `מי רחיצה`; *nabalkutu* "climb over" `דילג` beside "turn back" `התהפך`.
- §2.4 add *buʾʾû* `חיפש` (with *šeʾû* `ביקש`, *saḫāru* `סובב`), *nâru* `קטל`, *pašāṭu* `מחה`, *paqādu* "hand over"
  `הפקיד`, *lapātu* `נגע`, *temēru* `טמן`, *laqātu* `ליקט`, *karāṣu* `קרץ` (already §4), *egēru* `שילב`.
- §3/§4: *ilūtu* `אֵלוּת`; *nindabû* `תרומת־לחם`; *askuppatu* `מפתן`; *ašlāku* `כובס`; *tubkinnu* `ערמת זבל`;
  *ḫirītu* `חפירה`; *utūnu* `אַתּוּן` always vocalized (add to §8 traps: `אתון` = she-ass); *šubtu* `משכן`;
  *kayyānu* `תמידי`; *apu* `אגם`.
- §8 / the verifier: license `שבועה` also by Sumerian *namerim* (ŠU.NAM.ERIM₂.MA, II 61; and wherever Maqlû writes
  *māmītu* logographically), so that the disease "Hand of the curse" can be `יַד־שבועה` if the coordinator prefers.
- Disease names: "Hand of X" diseases translated (`יַד־…`), the opaque ones transliterated.

### Lessons for the guidelines
- A bare reference (`(מז:ט)`) is read as Genesis by `check_bible_quotes.py`: always write the book.
- In command/execution passages, draft both halves together, after fixing one verb per noun: the mirror then holds
  automatically (161–182).

## Tablet III

### Scope
All 202 eBL labels of Tablet III (1–189 with 30a, 38a, 60a, 87a, 101a, 115a, 115b, 121a, 124a, 135a, 153a, 172a,
187a), in thirteen sections: twelve incantations (1–30a the witch of the streets, clay; 31–38a the Daughters of Anu,
tallow and sweepings; 39–60a the list of female practitioners, wax; 61–76 "pure River, holy Bright One am I"; 77–87a
the Sutean and the Elamite, bitumen with sulphur; 88–101a the seized mouth and the yellow seal, clay; 102–115b the ten
accusations, slag and soot; 116–124a the capsizing boat, clay; 125–135a the moon-boat sent to sea, dough; 136–153a the
sherd of the streets and "I am heaven", tallow and red wool; 154–179 and 180–187a "hand, hand", wax) and the
catch-line (188 = IV 1) with the colophon (189). Well preserved; 121a is lost but for one word. Most rubrics survive
in one copy only (HuzNA1, often with KIMIN "ditto" for the rubric; AššNA1a/b), and eBL's N three times conflates the
main text with a variant (60 *ana šāri*, 74 *dīnšu lissaḫir*, 75 the imperatives, 127 *kaššāptī*): the Hebrew follows
the majority copies and gives the variant in the apparatus (a footnote in 74).
Files: `annotated-III.rtl.md`, `translation--intro-III.rtl.md`, generated `translation-III.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` III (`../../sources/eBL/Maqlu-III/`): N, T, the ATF of every bracketed line and of every line where N
  and T disagree (60, 74, 75, 101, 113, 115, 127, 131, 140, 141, 189); `manuscripts.md`. No eBL lemmas: every form
  parsed by hand; `maqlu_tools.py lem/norm/pars` and `kol_tools.py lookup` for every content word.
- renderings §0–§10.2 (§9 for the 24 fixed lines); `annotated-I/II.rtl.md` for II 33–36, II 39, II 105, II 148,
  II 161, II 227, I 13, I 25–26, I 143.
- Earlier corpora for the Hebrew of recurring lemmas: Gilgameš (*rābiṣu* `רובץ`, *nēšu* `אריה`, *ašarēdu* `ראשון
  במעלה`, *edû* `אֵד`, *diqāru* `סיר`, *tabāku* `יצק`, *gerû* `התגרה`, *dalāḫu* `דלח`, *qatû* D `כילה`, *arāqu* `הוריק`,
  *lā pādû* `אשר אינו חומל`), the wisdom corpus (*lamû* `הקיף`, *agû* `גל`, *kibsu* `שביל`, *kunukku* `חותם`,
  *kinattu* `בן־גיל`, *uṣurtu* `צורה`, *ṣabāru* `מצמץ`, *mīlu* `גאות`, *zâqu* `נשב`), the netherworld corpus (*šaḫāṭu*
  `זינק`, *ṣalāmu* `השחיר`, *miqtu* `מַפָּל`), the flood corpus (*tarkullu* `עמוד הקשירה`, *nasāḫu* `נסח`).
- The Bible: every verse printed before quoting (about 120).

### Decisions
- **Fixed lines** (§9) copied exactly: 1, 30, 38a, 60a, 62, 63, 70, 87a, 93–96, 146, 153, 171–175, 179, 186, 188.
  30 keeps `גּוּפֵךְ` vocalized (fem.; strips to §9's `גופך`, as II 218). III 1 differs from II 227 only in punctuation and brackets (justified in the apparatus; the one repeated-line
  difference `verify` lists). Refrains identical: 76 = 87, 154 = 180, 155 = 181.
- **The practitioners (39–53)** per §2.1, the titles transliterated with the article (`הנַרְשִׁנְדָּתוּ`, `האֶשֶּׁבּוּתוּ`,
  `המוּשְׁלַחָּתוּ`, `האַגּוּגִלְתּוּ`, `הנָדִיתוּ`, `הכּוּלְמַשִׁיתוּ`), `קְדֵשָׁה`, `אִשְׁתַּרִית`, `אַשָּׁפִית`, `צַיֶּדֶת`,
  `מְרַגֶּלֶת`, `מַלְשִׁינָה`, `רוֹצַחַת`. The "of" pairs: *mulaʾʾītu* `מזהמת` (*luʾʾû* `מְזֹהָם`, §10.1), *mulappittu*
  `מנגעת` (D of *lapātu* `נגע`: Piel "strike with a plague"; Enūma eliš has `לָפְתוּ` for the D), *kāmītu* `לוכדת`
  (*kamû* `לכד`, §2.2), *kāsītu* `אוסרת`, *dayyiktu* `הורגת`, *lā pādītu* `שאינה חומלת` (Gilgameš), *šaḫḫuṭītu*
  `המזנקת` (*šaḫāṭu* `זינק`, Ištar's Descent), *ṣabburītu* `הממצמצת` (*ṣabāru* `מצמץ`, Ludlul), *ušarru* `יחדור`.
- **The reversal (55–57)**, three verbs kept apart: *enû* Št `החליף` (§3), *nabalkutu* Š `הפך` (§2.4), *šupêlu* Št
  `המיר` (Hammurapi has *enû* `המיר`: a recorded split). 60 *šumḫuru* `הִפְגִּיעַ` (Š of *maḫāru*, whose noun *miḫru* is
  `פֶּגַע`, §3) – the cognate pair with Isa 53:6.
- **The ten accusations (102–111)**: each D verb distinct and from its own lemma: `עָשִׂית`, `עִשִּׂית`, `כישפת`,
  `שיברת` (*ḫepû* D), `אחזת` (*ṣabātu* D), `חתמת` (*kanāku*), `הרסת` (*abātu*), `כפתת` (*ebēru* D), `אסרת` (*kasû*),
  `זיהמת` (*luʾʾû*). *attīʾē* = `הוי את` (after §6 `הוֹי מְכַשֵּׁפָתִי`).
- **The boat (116–135a)**: *makurru* = `אֳנִיָּה` – not `מקור` (no relation between the words; the Hebrew would only
  mislead) and not transliterated (its sense is clear); `ספינה` stays for *eleppu* (Gilgameš). The ropes: *ṭurru*
  `חבל` (33, with Josh 2:15), *ašlu* `עבות`, *markasu* `מוסרה` (the flood corpus has `חבל` for *markasu*: a split,
  forced by 33), *batāqu* `נִתַּק` (the pair `עבות` / `מוסרות` / `נתק` is Ps 2:3's); *tarkullu* `עמוד הקשירה`;
  *nasāḫu* `נסח`; *edû* `אֵד` (78, 132; Gilgameš; ↔ Gen 2:6); *agû* `גל`; *šamru* `סוער`.
- **Other lemmas fixed**: *sanāšu* `תקע` (20 – changed from `החדיר` so that `חדר` stays for *ušarru*, 54); *gerû*
  `התגרה` [cognate]; *ḫaṣabtu* `חֶרֶשׂ`; *maḫāṣu* `מחץ` [cognate] + *muḫḫu* `קדקד` (144, Ps 68:22); *dalāḫu* `דלח`;
  *rābiṣu* `רוֹבֵץ` (translated, as Gilgameš and the netherworld corpus, ↔ Gen 4:7; not in the transliterated demon
  list); *eṭem ridâti* `אִט רודף`; *siḫlu* `קוץ` and *ziqtu* `עוקץ` (Gilgameš has `עוקצו` for *siḫlu*: a split); *baltu*
  `בַּלְתּוּ`; *zaqru* `נישא`; *bâru* `צד` (159, as *bayyārtu*; Etana's `לכד` is *kamû*'s in Maqlû); *luḫummû* `טִין`
  (`בוץ` is *rušumtu*, §9, and Ludlul has `רפש` for *rušumtu*; `טיט` is *ṭīdu*'s); *illatu* `עֵדָה` (`חבורה` would trip
  the `חבר` gate); *arāmu* `עטה`; *ḫīṭu* `סדק`; *uṣurtu* `צורה`, *eṣēru* D stative `מצויר`; *dabbibu* `המדבר`
  (*dabābu* `דיבר`, §10.1); *kunukku* `חותם`, *kanāku* `חתם`, *barāmu* `הטביע`; *arāqu* `הוריק` [cognate]; *ṣâdu* (B,
  "glow, melt") `נצרב` (kept apart from *ṣâdu* A of *ṣūd pānī* `סחרחורת`); *ḫaḫû* `סיג`, *diḫmennu* `פיח`;
  *maḫāḫu* `הרטיב`; *tabāku* `יצק` (`שפך` is *šapāku*, I 101); *mīlu* / *mīṭu* `גאות` / `שפל`; *qanû* `קנה`.
- **Neighbour and kin (113)**: *šēʾu* `שָׁכֵן` (vocalized against the god `שַׁכַּן`), *ibru* `רֵעַ`, *tappû* `חבר`
  (the gate's word), *kinattu* `בן־גיל` (Ludlul).
- **Closing formulas only where N has them**: 101 and 115 end in `(TU₆) EN₂` in some copies but not in N (nor 115 in
  T); the verifier gates `לחש`/`קסם` on N, so the Hebrew follows N and a footnote reports the copies. 60 `T[U₆]` =
  `[לחש]`.
- **Colophon (189)**: `הלוח השלישי של מַקְלוּ – סדרת האַשָּׁפוּת.` – *iškāru* `סדרה`, *āšipūtu* `אַשָּׁפוּת` (§3); the
  phrase is in UrkLB1 only (footnote). `הלוח` unbracketed: UrkLB1 has `IM 3.KAM.MU`.
- **Rubric spellings**: `UŠ₁₁.BUR₂.DA` / `UŠ₁₁.BUR₂` (124a, 135a, 153a, 187a) = `להתרת ריר` as the full form; KIMIN
  ("ditto") in HuzNA1 for the rubric is noted, the Hebrew follows N; 101a's omitted rubric and *ina* in `⟨ ⟩`.

### Open decisions for the user
- *makurru* `אֳנִיָּה` (decided; `מקור` rejected) – or a transliteration `מַכּוּרּוּ` if a technical term is preferred.
- *iškār āšipūti* `סדרת האַשָּׁפוּת` (189) – alternatives `סדרת האשפים`, `מלאכת האַשָּׁפוּת` (*iškāru* is also "work
  quota").
- 61 *id ellu namru quddušu*: renderings §3 punctuates three epithets (`נָהָר טָהוֹר, זוֹהֵר, מְקֻדָּשׁ`); I wrote
  `נהר טהור, זוֹהֵר מקודש – אני`, because 69 and 71 make *namru* a second god ("the Bright One", Šamaš), beside the
  River.
- 115 *qaqqad raggati šīmtīki* and 138 *qaqdâ* remain uncertain (italics); 115a *ištar kubši kinṣi* (`אֵלָה *בכובע
  ובשוק*`) is a guess.
- 136 *ḫaṣabtu* `חרס` against the transliterated alternative; 142 *rābiṣu* translated (`רוֹבֵץ`), against renderings'
  general "demons transliterated" – the precedent of the two earlier corpora decided it.

### Progress log
- 2026-10-23: renderings §10.2 read (*māmītu* = `שבועה`, *utūnu* `אַתּוּן` checked by script); `pars III` run. Drafted
  and saved in seven steps (1–38a; 39–60a; 61–87a; 88–115b; 116–135a; 136–153a; 154–189), `fill` + `verify III` +
  `check_bible_quotes.py` after each.
- Problems met and fixed: three bare references (`(א:יט)`, `(יח:טו)`, and a Hebrew word in backticks before a
  reference, read as a quotation of Ps 2:3) caught by the checker; `לחש, קסם` at 101 and 115, where N has no TU₆ EN₂,
  flagged by the verifier as reserved words – moved to footnotes.
- Pass (a) fidelity: brackets checked against the ATF (unbracketed where a copy preserves the word: 74 *kīma*, 140
  *akattam*, 189 *DUB*; bracketed: 60 `[לחש]`, 101a, 115a `[אַתּוּן]`, 115b, 124a, 131, 135a, 141 `שבילי[ך]`, 153a,
  187a); the variants N conflates (60, 74, 75, 127, 161) moved to the apparatus; 64 checked against II 161.
- Pass (b) consistency: refrains and fixed lines identical; 64–65 aligned with II 161's `עושים לי`; new Hebrew words
  grepped across the corpora – `רפש` (Ludlul's *rušumtu*) replaced by `טִין` for *luḫummû*; `החדיר` (20) changed to
  `תקע`; `חבורה` avoided (the `חבר` gate).
- Pass (c) Hebrew: `translation-III.rtl.md` read through: 6 `רגלי ההולך` (a typo `רגליי`), 100 `וכמו` (for `כדי
  שכמו`), 187 punctuation; footnotes given their books.
- Final: `verify III --strict` – no problems (one listed repeated-line difference, II 227 / III 1, justified);
  `check_bible_quotes.py` on the annotated file, the intro, `translation-III.rtl.md` and `translation.rtl.md` – 0
  problems; `build` exits 0. `build_parallels_index.py` not run (the coordinator's instruction).

### The text on its own terms
- **The witch is a woman of the city** (1–12): she walks the markets, enters houses, spies in the squares; her look
  takes a young man's virility and a girl's charm – the evil eye as a social fear of the woman who moves freely.
- **Every woman with access to power is suspect** (39–44): the list puts the exorcist's female colleague (*āšiptu*),
  the ecstatic, the snake charmer and four kinds of women dedicated to gods (*qadištu*, *nadītu*, *ištarītu*,
  *kulmašītu*) beside the murderess and the informer.
- **The witch binds the gods too** (47–50): she defiles heaven, plagues the earth, seizes the gods' mouth and binds the
  goddesses' knees – so the gods themselves must act (55–58).
- **The ordeal behind purity** (61–76): "pure River and holy Bright One am I" – the speaker identifies with the river
  of the water ordeal and the sun of the court, and "I became pure, I became clean" (68–69) is an acquittal.
- **Talion, word for word** (93–96 = II 33–36): what the witch did to his eyes, feet, knees and arms, he does to hers;
  the ten accusations (102–111) and the "hand" (154–187) follow the same law.
- **Isolation as the work of sorcery** (16, 112–113): god and goddess, neighbours, siblings, friends "cut off" from the
  victim – the suffering of Ludlul and Job, explained by a witch.
- **Evil sent away in a vessel** (116–135a): the witches sit in a clay boat that is cut loose and swept out to sea;
  the crescent moon is the boat, its horns carry the "release".
- **Demons in the exorcist's service** (142–143): he sets a lurker and a ghost on her paths – the same powers the
  witches use.
- **The body as cosmos** (147–153): "I am heaven, I am earth, a thorn, a scorpion's sting, a high mountain" – what she
  defiled (47–48) he now is, and she cannot touch it.
- **The hand** (154–187): the witch's strength is human (*rittu dannatu ša amēlūti*), a predator's paw and a hunter's
  net; it is burned as a wax hand (187a), and she is invited to bring it to the fire herself.
- **Life drawn in advance** (176–177): "I am drawn with the designs of life" – a destiny already engraved by Ištar,
  which sorcery cannot erase.
- **Rubrics name the matter of each figurine**: clay, tallow and sweepings, wax, bitumen with sulphur, a yellow seal,
  a goddess of clay doused with slag and soot, boats of clay and dough, a street sherd rubbed with tallow and wrapped in
  red wool, a wax hand.

### Key parallels
- Song 3:2 `בַּשְּׁוָקִים וּבָרְחֹבוֹת` and Prov 7:12 – the woman in the markets and squares (1–7) [cognate *sūqu*].
- Deut 23:18 `לֹא תִהְיֶה קְדֵשָׁה` – *qadištu* in the list (43) [cognate]; Deut 18:10 – the list form itself (39);
  Ezek 13:18, 20 `לְצוֹדֵד נְפָשׁוֹת` – the women who hunt souls (45) [equivalent].
- Ps 129:2 `רַבַּת צְרָרוּנִי … גַּם לֹא-יָכְלוּ לִי` – "they do and do to me, but cannot" (64–66) [equivalent].
- Num 5:19, 28 `הִנָּקִי … וְנִקְּתָה` – the water ordeal's acquittal (61, 69) [equivalent].
- Ps 88:9, 19 and Job 19:13–14 – friends and kin removed (112–113) [equivalent].
- Exod 9:8 `קְחוּ לָכֶם … פִּיחַ כִּבְשָׁן` – taking kiln soot for a harmful act (114) [equivalent].
- Zech 5:7–8 `אִשָּׁה אַחַת יוֹשֶׁבֶת בְּתוֹךְ הָאֵיפָה … זֹאת הָרִשְׁעָה` – evil as a woman sitting in a vessel and carried
  away (125–127) [divergence]; Ps 2:3 – the cut ropes (130); Jonah 1:15, Ps 107:25 – the sea and the guilty
  (132–133) [divergence].
- Isa 53:6 `הִפְגִּיעַ בּוֹ` – the evil made to "meet" its bearer (60) [equivalent]; Jer 30:6 `לְיֵרָקוֹן` (101)
  [cognate].
- Ps 68:22 `יִמְחַץ רֹאשׁ … קָדְקֹד`, 1 Sam 21:14 `וַיְשַׁנּוֹ אֶת טַעְמוֹ` – smiting the skull, changing the mind (144)
  [cognate]; Gen 4:7 `רֹבֵץ` (142) [cognate]; Jer 1:18–19 – the invulnerable speaker (147); Ezek 2:6 – thorns and
  scorpions (149–150).
- Ps 10:9 (lion and net), Job 18:8–9 (net, mesh, trap), Eccl 9:12 (snare and trap) – the hand that hunts (156–160)
  [equivalent]; Ps 21:10 and Mal 3:19 – the oven (164–167) [cognate *tinūru*].

### Lines shared with other tablets
- Copied from §9 (above). From Tablet II: 70 = II 39; 75 = II 148; 93–96 mirror II 33–36 (only the suffix changes);
  179 = II 105 without `קסם`; 64 ≈ II 161 – **II 161 renders *ēteneppušūni* `עָשׂוּ וְעָשׂוּ לי` (parsed there as
  perfect); the doubled *pp* makes it a Gtn present, so III 64 has `עושים ועושים לי`.** I propose that the coordinator
  align II 161 (and IV 115, RT 68') to `עושים לי, עושים ועושים לי`.
- For the next translators: IV 1 = III 188 (§9); VI 86–87 = III 62–63; VI 90–94 = III 171–175 (III 172a has no VI
  counterpart); VI 59 / IV 152 = III 146; VI 64 = III 153 (with TU₆); IV 149 = III 186; IV 79 = III 179 + `– לחש,
  קסם`; RT 42', 46', 47' are the incipits of III 1, 61, 77.

### Proposals for the shared renderings
- §2.1/§2.2: *mulaʾʾītu* `מזהמת` (*luʾʾû* D `זיהם`), *mulappittu* `מנגעת` (*lapātu* D `ניגע`), *kāmītu* `לוכדת`,
  *kāsītu* `אוסרת`, *šaḫḫuṭītu* `מזנקת`, *ṣabburītu* `ממצמצת`, *lā pādītu* `שאינה חומלת`.
- §2.4: *enû* Št `החליף`, *šupêlu* `המיר`, *šumḫuru* `הִפְגִּיעַ`; *kanāku* `חתם`, *barāmu* `הטביע`; *gerû* `התגרה`;
  *maḫāṣu* `מחץ`; *dalāḫu* `דלח`; *bâru* `צד` (with *bayyārtu*); *batāqu* `ניתק`; *nasāḫu* `נסח`; *tabāku* `יצק`;
  *maḫāḫu* `הרטיב`; *sanāšu* `תקע`.
- §4/§5: *makurru* `אֳנִיָּה`; *ašlu* `עבות`, *markasu* `מוסרה`, *tarkullu* `עמוד הקשירה`; *ḫaḫû* `סיג`, *diḫmennu*
  `פיח`; *ḫaṣabtu* `חרס`; *tabarru* `צמר אדום`; *kunukku* `חותם`; *luḫummû* `טִין`; *edû* `אֵד`; *agû* `גל`.
- §1: *rābiṣu* `רוֹבֵץ` (translated, with Gilgameš and the netherworld corpus); *eṭem ridâti* `אִט רודף`.
- §6: *attīʾē ša …* `הוי את, אשר …`; colophon *iškār āšipūti* `סדרת האַשָּׁפוּת`.
- §8: `טין` beside `טיט` (a visual near-miss; no gate needed, but worth a note).

### Lessons for the guidelines
- eBL's N sometimes merges a variant copy into the line (III 60, 74, 75, 127): when N and T disagree, read the ATF and
  translate the majority text; the variant goes to the apparatus. The verifier gates `לחש`/`קסם` on N, so a formula
  present only in T or in some copies goes to a footnote.
- A Hebrew word in backticks followed by a reference in parentheses is read as a quotation: write such notes without
  the parentheses (`כמו "מוסרותימו" של תהלים ב:ג`).
- Check a recurring Gtn parse against the earlier tablets: II 161 and III 64 are the same line, and doubled *pp* means
  present.

## Tablet IV

### Scope
All 155 eBL labels of Tablet IV (1–153 with 79a, 94a), in eight sections: the long incantation *bišlī bišlī* (1–79a:
the charge sheet with the refrain 13–67, the social rejection 68–73, Girra's release 74–79, a rubric without a
figurine), *attimannu kaššāptu ša zikurudâ ippuša* (80–94a, three chips of cornel), the fragmentary "my murderess"
(95–106), Šamaš's family (107–114), *ippušāni* and the six/seven saying (115–122), *rūʾūʾa kaššāpat anāku pāširāk*
(123–151), the catch-line (152 = V 1) and the colophon (153). Well preserved but for 95–104 (two copies, most words
lost) and the ends of 62, 103–104, 148. Copies from Nineveh, Aššur, Ḥamath, Nippur and Babylon; 94a only in AššNA2,
79a only in BabLB3.
Files: `annotated-IV.rtl.md`, `translation--intro-IV.rtl.md`, generated `translation-IV.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` IV (`../../sources/eBL/Maqlu-IV/`): N, T, the ATF of every bracketed line (checked line by line);
  `manuscripts.md`. Every form parsed by hand (no eBL lemmas); `lem`, `norm`, `pars IV` and `kol_tools.py lookup`.
- renderings §1 (the stars of 52–60, Lamaštu, Manzât, Nikkal, the peoples), §2–§6, §9, §10.1–§10.3;
  `annotated-I/II/III.rtl.md` for I 2, I 8, I 89–91, I 107–108, I 137, II 110–111, II 161, III 179, III 186.
- Earlier corpora: *pāqidu* `פוקד` and *lulīmu* `יחמור` (Gilgameš), *murtappidu* `משוטט`, *kimtu* `משפחה`, *mūdû*
  `מכיר`, *rūʾu* `עמית`, *piṭru* `פטר` (wisdom), *ubāru* `גר`, *ṣalālu*, *ṣalāmu* (netherworld), *titurru* `גשר`
  (Enūma eliš), *rāṭu* `רהט`, *kurummatu* `מנה` (Gilgameš), *bâʾu* (flood corpus: `עבר`).
- The Bible: every verse printed before quoting (about 60).

### Decisions
- **The refrain (13–67)** written in full in every line, exactly `עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר!` (§6),
  without brackets; the header and line 14 explain the abbreviation `te` once, and each line says "הפזמון בקיצור".
  36–41 and 68–73 have no refrain (none in the copies).
- **Girra's four epithets** (8, 75, 105–106, 121–122) as one fixed string: `מבער, קולה, אוסר, משיג המכשפות`
  (*qāmû* `מבער`, *qālû* `קולה` §5, *kāsû* `אוסר` from *kasû* `אסר`, *kāšidu* `משיג` from *kašādu* `השיג`). renderings
  §5 does not hold the string itself; this is it, for V–VII.
- **The dead (14–51):** *ḫâru* `אֵרַשׂ` (I 107); *paqādu* `הפקיד` – and *pāqidu* `פוקד` (18), keeping the pun on
  פקד; *eṭemmu* `אִט`; *gulgullu* `גולגולת`; *kimaḫḫu* `כּוּךְ`; *sūnu* `חיק` (lap; Ištar's Descent has `חלציים`);
  *šūnulu* `השכיב` (I 108); *peḫû* `אטם`; *bīʾu* `נקב`; *burû* `מַפָּץ` (Mishnaic; `מחצלת` is *kītu*'s, §2.2);
  *rāṭu* `רהט` [cognate]; *būrtu* `בור`; *ḫarbu* `חורבה` [cognate]; *samētu* `חֵיל`; *bamâtu* `במות`; *labtu*
  `כבשן`; KI.UD.BA transliterated; *muššulu* `משול` (from *mašālu* D `המשיל`, §2.3).
- **Stars (52–60)** per §1: names transliterated (`שׁוּלְפַּאֵאָה`, `נִמְרוּ`, `גּוּלָה`, `אוּרְגוּלּוּ`, `שִׁתַּדַּרוּ`,
  `חַבַּצִירָנוּ`), common nouns translated (`העגלה`, `העקרב`). Animals (61): *šikkû* `חולדה`, *arrabu* `עכבר` (Lev
  11:29), *perurūtu* transliterated.
- **Rejection (68–73):** *šuškunu* (Š of *šakānu* in the idiom "make someone rejected") = `הִבְאִישׁ` by sense
  (Exod 5:21), not a form of `שׂם`; *šumruṣu* `הֶחֱלָה`. The broken verbs (69, 70, 72; KIMIN in some copies) in
  brackets.
- **Food and gifts (63–67):** *šizbu* `חָלָב` (vocalized against `חֵלֶב`); *šikaru* `שֵׁכָר`; *ramāku* D `הטביל`;
  *šūbultu* `משלוח` (Esth 9:19); *sirqu* `זריקה` (77).
- **The "whether" list (81–92):** `בין … בין`; *itbāru* `שותף` (`רע` *ibru*, `בן־גיל` *kinattu*, `עמית` *rūʾu*);
  *ubāru* `גר`; *mūdû* `מכיר`; *ḫablu* `חבול`; *kurgarrû* `כּוּרְגַּרָּה`; *saḫḫiru* `מסובב`; *lišānu nakertu* `לשון
  נכרית` (*nakru* `נכרי`, kept apart from *aḫû* `זר`).
- **94:** *šebēru* = `שבר` [cognate] (Gilgameš, Ištar's Descent), although §2.4 also gives `שבר` to *ḫepû* (see
  Proposals); *emēdu* `עמס`, *lā ṣalālu* `אי־שינה` (I 8).
- **115** in the feminine (`קסם. עושות לי, עושות ועושות לי,`): the Akkadian is 3 f. pl. (*ippušā*), against II 161's
  masculine; the structure is the same, as §10.3 asks.
- **118** *piṭru* `פֶּטֶר`, pl. `פְּטָרַי` (Ludlul's `פִּטְרִי`; `הַתָּרָה` stays *pišertu*'s).
- **123–136:** *pāširāk* `מתיר אני` (participle + pronoun for the stative); *kaššāpat* etc. `… היא`; *rūʾu* `עמית`
  (fem. `עמיתתי`, after the verb).
- **140–148:** *arāḫu* `חִסֵּל` (`אכל` *akālu*, `כילה` *qatû* D); *nâḫu* D `הניח`; *lulīmu* `יחמור` (Gilgameš; Deut 14:5).
  151 *bâʾu* `שטף` by sense: the flood corpus has `עבר`, but `עבר` is *ebēru*'s (II 35 `העוברות`).
- **Address:** 2 pl. `־כם` in 1–79 (the Akkadian common plural); `אותן` / `אתכן` where the Akkadian has *-šināti* /
  *-kināši* (121, 139, 142–148, 151).

### Open decisions for the user
- 68–72 *šuškunu* `הבאיש` (by sense, with Exod 5:21) vs a literal `שׂם` form.
- 151 *bâʾu*: `שטף` (here) vs the flood corpus's `עבר` (a collision with *ebēru*).
- 94 *šebēru* `שבר` and *ḫepû* `שבר` (renderings §2.4): one of them should move (*ḫepû* `ניפץ`? but *napāṣu* is `נפץ`, IV
  103).
- 135 *ši-i-mat a-ši bābīya* left as Abusch's guess (`*יושבת שערי*?`); 95 *nērtu* read as "my murderess".
- 9 *lītallal idāya* `ייתלה לצדי` (*alālu* Gt; Abusch "be joined to my side").

### Progress log
- 2026-10-23: renderings §10.3 read; `pars IV` run. Drafted and saved in three steps (1–79a; 80–106; 107–153), `fill` +
  `verify IV` + `check_bible_quotes.py` after each. The checker caught four notes where a Hebrew word in backticks
  stood before a reference (read as a quotation), and a ketiv/qere verse (Prov 6:16); all rephrased.
- Pass (a) fidelity: brackets checked against the ATF (unbracketed where a copy preserves the word: 15–17, 38, 51,
  60–63, 69 *maḫar tīru*, 85, 91, 96 *šūquki*, 99–100, 105, 108–110, 112, 115, 129–131; bracketed: 27, 39, 40, 47, 49,
  62 *ruḫê*, 63 the verb, 69–70, 72 the verb, 87 *mītu*, 90 *eššebû*, 94, 94a, 95, 107, 111, 114, 148, 150);
  KIMIN and scribal omissions (94a *ēru*) marked.
- Pass (b) consistency: the refrain identical in 13–67 (48 lines with "הפזמון בקיצור"); the epithet string identical
  in its four places; fixed lines (1, 10–12, 79, 140, 141, 149, 152) copied; new words grepped – `עמית` moved from
  *itbāru* to *rūʾu* (Ludlul), *itbāru* `שותף`.
- Pass (c) Hebrew: `translation-IV.rtl.md` read through; 39 end (`עשיתם –`).
- Final: `verify IV --strict` – no problems (one listed repeated-line difference, 98 / 102, brackets only, justified);
  `check_bible_quotes.py` on the annotated file, the intro, `translation-IV.rtl.md` and `translation.rtl.md` – 0
  problems; `build` exits 0. `build_parallels_index.py` not run.

### The text on its own terms
- **A charge sheet with a verdict after each count** (13–67): "you did it, you had it done – may Girra release", 49
  times; the accused are anonymous ("whoever you are, son of whomever", 3).
- **Handing over to the dead** (14–51): the patient is "betrothed" to a dead man and to the netherworld, "handed
  over" to a skull, to family ghosts, to a stranger's ghost, to the ghost "who has no one to care for it" (pāqidu,
  the descendant who brings offerings) – the dead as agents of harm, and the neglected dead as the worst.
- **Places of death and of trampling** (19–35): ruins, steppe, walls, ovens; a figurine buried under a bridge "so that
  crowds trample it", under a threshold, in the fuller's mat and the gardener's channel – the dirty water of others.
- **No burial** (40–41): figurines fed to dogs, pigs and birds – the curse of the unburied body.
- **The patient's water** (44–49): buried with the dead, drawn before the gods of the night – the libation that a
  person needs in life and after death.
- **Magic before the stars** (52–60): *zikurrudû*, "cutting off life", done before the moon, Jupiter and the
  constellations; Gilgameš as judge of the dead receives a ration (50).
- **Sorcery hidden in everyday gifts** (63–67): bread, milk, beer, wine, a bath, oil, presents.
- **Social death** (68–73): rejected by god, king and court, friends, father, mother, wife and children, servants – in
  descending circles; sickening to anyone who sees him.
- **The enemy could be anyone** (81–92): friend or brother, newcomer or native, acquaintance or stranger, dead or
  alive, the wronged man or woman (who has a reason), a cult performer – or "a foreign tongue in the land".
- **The sun's family as a court** (107–114): Sîn and Nikkal the parents, Manzât (the rainbow) the sister who breaks
  bonds, Šamaš the judge – and the speaker repeats the judge's acts as his own (111 = 113).
- **Foreign women and native women** (115–117, 125–129): Gutean, Elamite, Ḫanigalbatean, Sutean, Lullubean – and the
  "daughters of the land".
- **Six against seven** (118): the numerical saying as a calculus of power – one undoing more than her knots.
- **Two statives** (123–136): "the witch is a witch – I am a releaser": identity against identity, fourteen times.

### Key parallels
- Deut 18:11 `וְדֹרֵשׁ אֶל הַמֵּתִים` and Ps 88:6 "whom you remember no more" – the dead used against the living and the
  forgotten dead (16, 18) [equivalent]; Isa 28:15 `כָּרַתְנוּ בְרִית אֶת מָוֶת` – "betrothed to the dead" (14).
- Deut 4:19, 2 Kgs 23:5 – the moon and the host of heaven (52); Job 9:9 `כְּסִיל` (59), Job 38:32 `עַיִשׁ` (57).
- 1 Kgs 14:11 and 2 Kgs 9:36 – dogs and birds eating the unburied, Jezebel (40–41) [equivalent]; Jer 16:4.
- Exod 5:21 `הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה וּבְעֵינֵי עֲבָדָיו` – made odious before the king and his court
  (68) [equivalent]; Ps 27:10, Mic 7:6, Job 19:17, 19 – father, mother, wife, children, friends (70–71).
- Jer 9:3, Ps 55:14, Mic 7:5 – the enemy is the friend and the brother (81, 123); Isa 33:19, Deut 28:49 – the
  foreign tongue (92).
- Job 5:19 `בְּשֵׁשׁ צָרוֹת … וּבְשֶׁבַע` and Prov 6:16 – the x/x+1 saying (118).
- Exod 22:17 `מְכַשֵּׁפָה לֹא תְחַיֶּה` – "the witch is a witch; I am a releaser" (124) [divergence].
- Ps 2:9 `תְּנַפְּצֵם` (103) [cognate *napāṣu*]; Isa 7:11, Job 11:8 – height and depth (96); Gen 9:13 – the rainbow
  (110) [divergence]; Mal 3:20 – the sun of justice (108).

### Lines shared with other tablets
- Copied from §9: 1 (= III 188), 10–12 (= I 89–91), 79, 140–141 (= II 110–111), 149 (= III 186), 152 (catch-line,
  = V 1 without the suffix). Also I 2 = 93 (`הלילה, הַכַּלָּה המכוסה`); I 107 ≈ 14; II 129 (`חבול וחבולה`) ≈ 88.
- Inside the tablet: 7 / 74 (present / perfect); 8 = 75; 105–106 = 121–122 (masc. / fem. object); 111 = 113; 119 /
  120; 97 = 101, 98 = 102.
- 115 ≈ II 161 / III 64 / RT 68': feminine here (*ippušā*). RT 68' (*EN₂ ippušāni īteneppušāni*) should follow IV 115.
- For the next translators: V 1 = 152 with the suffix (`קסם. עושתי ומְעַשָּׂתִי`, §9); the four-epithet string for any
  later occurrence; the refrain rule of §6.

### Proposals for the shared renderings
- §5: the string `מבער, קולה, אוסר, משיג המכשפות` (*qāmû qālû kāsû kāšidu ša kaššāpāti*).
- §2.1/§2.2: *itbāru* `שותף`, *rūʾu* `עמית`, *ubāru* `גר`, *mūdû* `מכיר`, *nakru* `נכרי`; *piṭru* `פֶּטֶר`.
- §2.3/§4: *pāqidu* `פוקד`; *sūnu* `חיק`; *peḫû* `אטם`; *bīʾu* `נקב`; *burû* `מַפָּץ`; *rāṭu* `רהט`; *labtu* `כבשן`;
  *muššulu* `משול`; *sirqu* `זריקה`; *šūbultu* `משלוח`; *šizbu* `חָלָב` (vocalized); *lulīmu* `יחמור`.
- §2.4: *šuškunu* (idiom) `הבאיש`; *šumruṣu* `הֶחֱלָה`; *arāḫu* `חִסֵּל`; *napāṣu* `נִפֵּץ`; *bâʾu* `שטף`; *šebēru*
  `שבר` [cognate] – and then *ḫepû* needs another verb (renderings now gives it `שבר` too).

### Lessons for the guidelines
- A refrain that the copies abbreviate can be written in full and still be checked: keep one exact string, vocalized
  where the trap demands it, and let `verify` compare it in every line.
- When a gender changes in a shared line (II 161 masc. / IV 115 fem.), keep the structure and change only the gender;
  say so in the apparatus.

## Tablet V

### Scope
All 181 eBL labels of Tablet V (1–177 with 18a, 138a, 154a, 169a), in seventeen sections: sixteen incantations
(1–10, 11–18a, 19–47, 48–56, 57–75, 76–82, 83–88, 89–97, 98–111, 112–131, 132–141, 142–144, 145–148, 149–157,
158–175) and the catch-line with the colophon (176–177). Well preserved; most gaps of the Nineveh copies (83–97) are
filled by the Kalḫu parallel KalNAPar1 (which also adds lines and ritual notes not in eBL's text: apparatus only).
Minority lines: 18a (one copy), 138a, 154a, 169a. The colophon of NinNA2 names the series by I 1 ("Incantation. I
called to you"); NinNA3 adds "written and collated after its original".
Files: `annotated-V.rtl.md`, `translation--intro-V.rtl.md`, generated `translation-V.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` V (`../../sources/eBL/Maqlu-V/`): N, T, the ATF of every bracketed line; `manuscripts.md`. Every form
  parsed by hand; `lem`, `norm`, `pars V`, `kol_tools.py lookup`.
- renderings §1–§10.4 (fixed lines 1, 5, 10, 18, 26, 36, 43, 52, 80–82, 108, 111, 131, 145–148, 176); the earlier
  tablets for I 8, I 90–91, I 137–143, II 14, II 52–56, III 62, III 136, IV 68.
- Earlier corpora: *uṭṭatu* `גרגיר`, *lillu* `כסיל`, *nâšu* `נע`, *ṣapāru* `גזם`, *saḫālu* `דקר`, *nekelmû* `הזעיף`,
  *ramānu* `עצמ־`, *nalšu* `טל`, *iltānu* `רוח צפון`, *uzzu* `זעם`, *pirittu* `בהלה`, *ašṭu* `קשה` (wisdom); *gallābu*
  `גלב`, *adirtu* `חרדה`, *nēmedu* `משען`, *ṭabāḫu* `טבח` (Gilgameš, flood); *gapšu* `עצום` (Enūma eliš).
- The Bible: every verse printed before quoting (about 70).

### Decisions
- **The plant puns (27–35), method fixed before the first line** (guidelines §5.2): the plant transliterated
  (`נִינוּ`, `אַזוּפִּירוּ`, `סַחְלוּ`, `סָמִידוּ`, `כָּסוּ`, `חַשּׁוּ`, `קִתְמוּ`, `אֶרּוּ`, `נוּחוּרְתּוּ`) with its
  identification in the note, the verb in its fixed Hebrew (*nâšu* `נע`, *ṣapāru* `גזם`, *saḫālu* `דקר`, *samādu*?
  `*עיכב*`, *kasû* `אסר`, *ḫašû* D `כתש`, *katāmu* `כסה`, *arāru* `ארר`, *nuḫḫuru* `הצטמק`), and each line's הערות
  name the echo. No Hebrew pun was invented. The method is announced in the file header.
- ***errû*** (colocynth, "daughter of the great gods", 13, 16, 34) = `אֶרּוּ`, vocalized with segol and dagesh against
  `אֵרוּ` (*ēru*, cornel); 2 Kgs 4:39 `פַּקֻּעֹת שָׂדֶה` in the apparatus.
- **11–14:** *patālu* `פתל`, *kaṣāru* `צרר` (as the coordinator asked); *pû* `מוץ`; *uṭṭatu* `גרגיר`.
- **Kanisurra *bēlet kaššāpāti* (56)** = `בעלת המכשפות`: *kaššāpātu* is the plural of *kaššāptu* ("witches"), not
  *kišpū*; Nah 3:4 `בַּעֲלַת כְּשָׁפִים` is "mistress of sorceries" – tagged [cognate] with the difference spelled out.
- **Talion (57–59):** the KIMIN-abbreviated formula *ša tēpušāni tušēpišāni ana muḫḫīkunu ēpuša* written in full,
  unbracketed, with the abbreviation in the apparatus (the IV rule); *ana muḫḫīkunu* `על קדקדכם`; *ēpuša*
  (performative preterite) `עָשִׂיתִי`, vocalized beside the trap-checked `עֲשִׂיתֶם` / `עִשִּׂיתֶם`.
- **Demons (60–67)** as in I–II (`אוּטוּכּוּ`, `אַלּוּ`, `אִט`, `גַּלּוּ`, `רוֹבֵץ`, `לַמַשְׁתּוּ`, `לַבָּצוּ`, `אַחָּזוּ`,
  `לִילוּ`, `לִילִיתוּ`, `עַלְמַת־לִילוּ`); *ṣabātu* Š `האחיז`. **68** *ina nīši u māmīti* `בנפש ובשבועה` (§3).
- **The fears (71–72):** *ašuštu* `יגון`, *arurtu* `רעדה`, *ḫūṣ ḫīp libbi* `דכדוך שבר־לב` (*ḫīp libbi* = "broken
  heart", *ḫepû* `שבר`; Ps 147:3 as [equivalent]), *gilittu* `מורא` (`אימה` is *ḫayyattu*), *pirittu* `בהלה`, *adirtu*
  `חרדה`. 74 *ikkib šamê* `תועבת השמים` (gated `תועבה`, licensed).
- **Winds (76–82):** *šūtu* `רוח הדרום`, *iltānu* `רוח הצפון`; *gallābu* `גלב` [cognate] (Ezek 5:1); *imbaru* `ערפל`.
- **Water (89–131):** *nagbu* `מעמקים` (flood corpus; Abusch "spring water"); *salāḫu* `הזה`; *kaṣû* `צנן`; *tû* `לחש`
  (105, 140); *ḫepû* D and *šebēru* D both `שיבר` in 100, each named in the apparatus (§10.4); *kabattu* `כָּבֵד`
  (vocalized); *ṣerḫu* `חום` (`להט` is *ḫamāṭu*'s); *milku* `עצה`; the four boundaries with four verbs (*ebēru* `עבר`,
  *etēqu* `חלף`, *nabalkutu* `דילג` with Ps 18:30, *erēbu* `נכנס`); *palgu* `פלג`, *īku* `סוללה`, *abullu* `שער העיר`.
- **132–141:** *gaṣṣu* `אכזר`, *gapšu* `עצום`, *ašṭu* `קשה`; *pašāḫu* Š `הרגיע`; *abattu* `אבן` (138a, Ezek 36:26).
- **The mountain (149–156):** eight verbs kept apart: *katāmu* `כסה`, *kalû* `כלא`, *nâḫu* D `הניח`, *ḫesû* `הסתיר`,
  *teʾû* `עטף`, *nêʾu* `הסיג`, *nêru* `קטל`, *katānu*? `צִפָּה`; *maqātu* `נפל`.
- **"Go away" (158–167):** six verbs: *isû* `סור`, *rêqu* `רחק` [cognate], *bêšu* `זוז`, *ḫalāqu* G `אבד`, *duppuru*
  `הסתלק`, *atluku* `הלך`; the prohibitions *târu* `שוב`, *ṭeḫû* `נגש`, *qerēbu* `קרב`, *sanāqu* `הגיע`; *parāsu* N
  `נִגְזַר` (157, 175; Ps 88:6). Oaths *nīš DN lū tamâtunu* `בנפש DN – הושבעתם` (§3).
- **Other:** *etēqu* `חלף` (41, 126; `עבר` is *ebēru*'s); *kibsu* in 41 "track" `עקבות` by sense (`שביל` in III);
  *sulû* `מסילה` [cognate] (Ludlul's `שווקים` collides with *sūqu* `שוק`); *ibratu* `גומחה`; *kulūlu* `סרט ראש`;
  *qulmû* `גרזן`; *piqannu* `גללים`; *kursinnu* `קרסול` [cognate]; *lētu* `לחי`; *ṭēmu* (7) `מראה` by sense;
  *takur* (49) `*צאצא*`; *šupêltu* (20) `*המרה*`; *dunnānu* `*חסון*`; *rūʾu*/*itbāru* as §10.4.

### Open decisions for the user
- The plant method (transliteration + note) vs Hebrew plant names (`חרדל` for *kasû*, `שחלים` for *saḫlû*, `חלתית`
  for *nuḫurtu*, `פקועה` for *errû*): the transliteration keeps the echo visible; the identifications are uncertain.
- *errû* `אֶרּוּ` next to `אֵרוּ` (*ēru*): a vocalization-only distinction.
- *nagbu* `מעמקים` (the flood corpus) vs "spring water" (`מי מעיין`).
- 41 *kibsu* `עקבות` (sense) vs `שביל` (lemma); 155 the verb `צִפָּה` is a guess.

### Progress log
- 2026-10-23: renderings §10.4 read; `pars V` run; the plant-pun method fixed and written into the header before line
  27. Drafted and saved in four steps (1–47; 48–88; 89–131; 132–177), `fill` + `verify V` + `check_bible_quotes.py`
  after each. The checker caught one bare reference (`(כח:סו)`), a ketiv/qere verse (Prov 17:27) and a word in
  backticks before a reference (Ps 18:30, Ps 129:5, Prov 27:22); all fixed.
- Pass (a) fidelity: brackets against the ATF, with KalNAPar1 counted as a copy (unbracketed: 89–96, 98–101, 112–113,
  133, 135, 137, 138a, 143, 177 *maqlû*; bracketed: 8, 16, 18a, 57, 61–63, 79, 83, 86–88, 97, 100, 102–107, 109–110,
  172); the KIMIN formulas of 58–64 written in full.
- Pass (b) consistency: fixed lines copied; 26 = 36 = 43, 157 = 175, 60–67 one pattern; new words grepped –
  `רפש`/`בוץ` avoided, *sulû* moved off `שוק`, *etēqu* off `עבר`.
- Pass (c) Hebrew: `translation-V.rtl.md` read through; 42 `בשוק` (the lemma) for a first `ברחוב`.
- Final: `verify V --strict` – no problems and no repeated-line differences; `check_bible_quotes.py` on the annotated
  file, the intro, `translation-V.rtl.md` and `translation.rtl.md` – 0 problems; `build` exits 0.
  `build_parallels_index.py` not run.

### The text on its own terms
- **The witch in the shade** (1–3): sitting behind a brick pile, making figurines in secret.
- **The impossible as a guarantee** (11–18): no one can twine chaff or knot grain – so no one can bewitch heaven,
  earth, the colocynth goddess, or me.
- **Names that act** (27–35): the plant's name sounds like the verb, so the plant does what its name says; the
  sound of the word is the magic.
- **The city and its gods turn against her** (37–39): street and road, the niche and its socle, the gods of steppe
  and city.
- **Contempt as a curse** (40–46): chased like a dog with a stick, kicked away like sheep's dung, frowned at like an
  ass's fetlock in the street; her headbands among the dogs.
- **A goddess of witches** (56): Kanisurra, "mistress of witches", called on to undo them.
- **Talion as a list** (57–72): hate, *zikurrudû*, demons, oath, the anger of the mighty, fear and depression – each
  "you did to me – upon you".
- **Emotions as afflictions put on a person** (71–72): grief, trembling, depression ("broken heart"), terror, panic.
- **Weather as a fight** (76–82): she is the south wind piling clouds, he the north wind, "the barber of heaven".
- **Cooling, not killing** (98–124): water drawn and sworn by the sages makes the witches' hearts "pure and cool";
  their liver extinguished, their mind changed, their counsel scattered.
- **Boundaries** (125–128): rivers, dykes, walls and gates the witches may not cross.
- **Water against fire** (138–141): "my mouth is water, your mouth fire; my heart water, your heart stone".
- **Buried by the mountain** (149–156) and **sent away by every verb there is** (158–170), then **bound by oath**
  (171–174) never to return.

### Key parallels
- Nah 3:4 `בַּעֲלַת כְּשָׁפִים` – Kanisurra *bēlet kaššāpāti* (56) [cognate; "sorceries" vs "witches"].
- Obad 1:15 `כַּאֲשֶׁר עָשִׂיתָ יֵעָשֶׂה לָּךְ גְּמֻלְךָ יָשׁוּב בְּרֹאשֶׁךָ` – the talion of 57 [equivalent].
- Deut 28:65–66 – the list of fears as a curse (71) [equivalent]; Ps 147:3 – the broken heart (71).
- Hos 10:8 `וְאָמְרוּ לֶהָרִים כַּסּוּנוּ וְלַגְּבָעוֹת נִפְלוּ עָלֵינוּ` – the mountain that covers and falls (149, 156)
  [equivalent].
- Ezek 36:26 `לֵב הָאֶבֶן` (138a); Ezek 36:25 and Num 19:19 – purifying water sprinkled (109).
- Ps 6:9 `סוּרוּ מִמֶּנִּי כָּל-פֹּעֲלֵי אָוֶן` – "go away from me" (158) [equivalent]; 1 Sam 20:3 `חַי יְהוָה` – the oath
  "by the life of" (171).
- Hos 13:3 – cloud, dew, chaff and smoke (77); Job 21:18, Ps 1:4 – chaff and storm (11, 52–53); Isa 40:24 `נָשַׁף`
  (53) [cognate].
- 1 Sam 17:43 – the dog and the sticks (40); 1 Kgs 22:24, Lam 3:30 – the blow on the cheek (25); 1 Kgs 14:10 –
  burning dung (47).
- Jer 23:29 – the word as fire (138) [divergence]; Ps 48:8 – ships broken (100); Ps 18:30 – leaping a wall (127).

### Lines shared with other tablets
- Copied from §9 (list above). From earlier tablets: 145–148 = I 140–143 (without the closing formula); 93 cf. IV 135;
  66–67 = I 137–138's demons; 121 = III 144's idiom; 13–17 recall I 89's formula.
- For the next translators: VI 1 = 176 (§9); VI 28–29 = 51–52; VI 44 = 5; VI 50 = 80, VII 6–7 = 81–82; VII 40 ≈
  108; VII 169 = 10 / 131. KalNAPar1 (Kalḫu) is a parallel text with its own order: worth a look for VI–VII gaps.

### Proposals for the shared renderings
- §6: the plant-pun method (transliterate the plant, translate the verb, explain the echo in the note).
- §4: *errû* `אֶרּוּ` (colocynth; vocalized against `אֵרוּ`), *nīnû*, *azupīru*, *saḫlû*, *samīdu*, *kasû* (plant),
  *qitmu* transliterated; *šamaššammū* `שומשום`; *suluppū* `תמרים`; *šūmū* `שום` [cognate]; *piqannu* `גללים`;
  *kulūlu* `סרט ראש`; *qulmû* `גרזן`.
- §2.4: *ṣapāru* `גזם`, *saḫālu* `דקר`, *nâšu* `נע`, *ḫašû* D `כתש`, *nuḫḫuru* `הצטמק`, *našāpu* `נשף` [cognate],
  *qalāpu* `קלף` [cognate], *šaḫāṭu* II "strip" `תלש`, *etēqu* `חלף`, *salāḫu* `הזה` (§3 has it), *kaṣû* `צנן`, *nêʾu*
  `הסיג`, *ḫesû* `הסתיר`, *teʾû* `עטף`, *isû* `סור`, *rêqu* `רחק`, *bêšu* `זוז`, *duppuru* `הסתלק`, *ṭabāḫu* `טבח`.
- §2.2/§3: *nagbu* `מעמקים`; *mašmaššūtu* `מְלַחֲשׁוּת` (kept apart from *āšipūtu* `אַשָּׁפוּת`); *gilittu* `מורא`,
  *pirittu* `בהלה`, *adirtu* `חרדה`, *ašuštu* `יגון`, *ḫīp libbi* `שבר לב`; *uzzu* `זעם`.

### Lessons for the guidelines
- A parallel text from another site (here KalNAPar1) counts as a copy for the brackets, but its extra lines go to the
  apparatus, never into the Hebrew line.
- KIMIN ("ditto") abbreviations are the scribes', not the edition's: write the formula in full and say so once.

## Tablet VI

### Scope
All 161 eBL labels of Tablet VI (1–159 with 46a, 46b), in twenty sections: eighteen incantations (1–15, 16–23,
24–33, 34–39, 40–44, 45–51, 52–64, 65–68, 69–77, 78–84, 85–97, 98–105, 106–112, 113–117, 118–125, 126–133,
134–141, 142–150, 151–157) and the catch-line with the colophon (158–159). The tablet of the fumigants and
materials (the Ritual Tablet gives many of its incantations their act: e.g. RT 100', 109', 115'–123'). Fairly well preserved in the Nineveh
copies (NinNA1, NinNA2a–b, NinNA3, NinNA4b, NinNB1a), with Babylon (BabNBSch2), Assur (AssaNA1), Hamath (HamNB1a–c),
a Middle Assyrian sulphur fragment from Aššur (AššMAPar1) and the Kalḫu parallel KalNAPar1 (its own order and
variants: counted as a copy for brackets, its pluses in the apparatus). Damaged stretches: 24–33, 52–59, 103–117,
155–157 (157 is only `...`); 158 is wholly restored from VII 1.
Files: `annotated-VI.rtl.md`, `translation--intro-VI.rtl.md`, generated `translation-VI.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` VI (`../../sources/eBL/Maqlu-VI/`): N, T, the ATF of every bracketed line; `manuscripts.md`; the
  Ritual Tablet lines (RT 115'–124' and others) through `maqlu_tools.py lines RT`. Every form parsed by hand; `lem`, `norm`,
  `pars VI`, `kol_tools.py lookup`.
- renderings §0–§10.5 (fixed lines 1, 29, 44, 49, 50, 57, 59, 63, 64, 77, 86, 87, 90–94, 120, 150, 158); the earlier
  tablets for I 21, I 101, I 110, I 119, II 9–10, II 58, II 197, III 22, III 62–63, III 77, III 140, III 146,
  III 171–175, IV 50, V 22, V 35, V 98–99, V 176.
- Earlier corpora: *takālu* `בטח` (prophecy); *zaqāpu* `זקף` (wisdom); *tarbaṣu* `מרבץ` (netherworld, kings);
  *bēru* `בֵּרוּ` (Gilgameš, Etana); *padattu*, *šâmu*, *lubāru* (Gilgameš, kept apart where Maqlû reserves the word);
  *tuqumtu* `מלחמה` (flood); *bubbulu* `יום ההיעלמות` (creation); *mākālu* (Ludlul).
- The Bible: every verse printed before quoting (about 45).

### Decisions
- **The body as gods (1–8):** *lamassat pānī* `אֵלַת־המגן של פניי` (the pupil; Ps 17:8, Deut 32:10 [equivalent]);
  *gamlu* `המקל` (also a star); *ullu* `ענק`; *bīnu* `אשל`, *eṣemtu* `עצם` [cognate], *ilūtu* `אֵלוּת`; *kinṣu*
  `שוק`; *laḫru* `רחל`; Muḫra, Lugaledinna, Latarak, Uraš transliterated (§1).
- **The door guardians (13, 147–148):** *bābu* `פתח` throughout VI (as II); Exod 12:23 for the doorway that the
  destroyer may not pass; Lugalirra and Meslamtaea `מֶסְלַמְתַּאֵאָה` (§1).
- **Plants and materials transliterated** with the identification in the note: *qumqummatu*, *kuttimmatu*,
  *eššebūtu*, *naršindatu* (the witch's names), *tullal*, *terḫu*, *atāʾišu*, *anḫullû*, *imḫur-līm*, *šaʾerru*
  (new: a wooden object burned on the censer, RT 118'); *terinnatu* `אצטרובל`, *kukru*, *nuḫurtu* (§4).
- ***alāla* `אַלָלָא`** (45; `הֵידָד` stays *elēlu*'s; Isa 16:10 [equivalent]); the Hebrew of 45–46b is set for VIII
  46–49 to copy (see below).
- ***ṣillu* `צֵל`** [cognate] (55; Num 14:9 `סָר צִלָּם`).
- **Sulphur (69–97):** *kibrītu* `גָּפְרִית` [cognate]; Job 18:15 and Gen 19:24 tagged [divergence], not [equivalent]:
  the same substance, but purifying here and destroying there; Gen 28:12 for 74 (the head reaching heaven).
- ***padattu* `גֵּו`** (98; Gilgameš has `גזרה`, which Maqlû reserves for *lānu*); ***šâmu* `ייעד`** (119; Gilgameš
  `גזר`, reserved here for *parāsu*); ***mākālu* `מאכל`** (`סעודה` is *naptanu*, 120).
- *lubāru* `בגד`; *qimmatu* `צמרת`; *tuqumtu* `מלחמה`; *malku* `נסיך`; *sippu* `סף` [cognate], *askuppu* `מפתן`;
  *paršīgu* `מצנפת` (Exod 28:4); *bubbulu* `יום ההיעלמות`; *nadītu* `נָדִיתוּ`; *qutrinnu* `קטורת` (plene, as II 10).
- **Salt (118–125):** *ṭābtu* `מלח`; Lev 2:13 and Num 18:19 [equivalent] (salt as the condition of the gods' meal and
  of the covenant); Exod 30:35 (salt in the incense) in a note.
- **The four "Ha! my witch" incantations (126–157):** one repeated core, identical in all four copies:
  129 = 137 = 145 = 154 `אני יודע, ובטחתי בָּטוֹחַ:` (*takālu* `בטח`; the paronomastic infinitive as the Hebrew
  infinitive absolute, vocalized against `בטוח`; 137's *attakal takāla* are other forms of the same words) and
  130 = 138 = 146 = 155 `על גגי נצירה, בפתחי זקפתי אוֹת־הֲגָנָה,` (*maṣṣartu* `נצירה`, *kidinnu* `אוֹת־הֲגָנָה`,
  *zaqāpu* `זקף` [cognate], *ūru* `גג` as III 140; 155 brackets only `[נצירה]`).
- 126/134 *lū raḫḫātīya* `או מְעַבַּרְתִּי` (*lū* "or"; Abusch leaves it out); 127 *ippuḫu* / 135 *ippuḫa* differ
  only by the ventive, so 135 adds `אליי`; *bēru* `בֵּרוּ` (vocalized) with `ל(מרחק)`; 128 *ištappara* (Gtn + ventive)
  `שלחה ושלחה אליי`, *mār-šiprīša* singular `שְׁלִיחָהּ` (no plural marker; Abusch "messengers").
- 131 *ulinnu* `חוט צבעוני` (new); *lamû* `הקיף`; 132 *sarāqu* `זרק` (new, [cognate]: Lev 1:5); 133 *naḫāru* D
  `צמק` with the *nuḫurtu* / *unaḫḫara* pun explained by the plant-pun method (§10.5; V 35).
- 140 *kurummat eṭemmi* `מנת אִט` (IV 50 `מנה`); *riḫītu* `ולד` (= *riḫûtu*, II 58; the echo of *raḫḫātu* noted);
  *qāmû* `מבער` (`מְבַעֲרֵךְ`, vocalized for the feminine); 141 *mugaṣṣiṣat* = *kaṣāṣu* D `המקצצת` (I 119, the same
  verb and object; cmawro's "one who grinds" noted); `ו(של) נִיסַבָּה`.
- 143–144 copy V 98–99 in the feminine (`המתהלכת בכל הארצות, / מדלגת את ומדלגת על כל ההרים,`).
- 147 *imittu* / *šumēlu* `ימין` / `שמאל`; 148 *izuzzu* Š `העמיד`; 149 *ilū ša maṣṣarti* `אֵלֵי הנצירה`, *nāsiḫ libbi*
  `נוֹסְחֵי לב` (*nasāḫu* `נסח`, V 22; vocalized against the rubric's `נוסח`), *muštēmidū kalâti* `[מצמידי] כליות`
  (*emēdu* Št `הצמיד`, new).
- 156 *tarbaṣu* `מרבץ`, *šapāku* `שפך` (I 101) – the heaping sense of `שפך סוללה` (2 Sam 20:15; Ezek 4:2) [cognate].
- Rejected: `חלתית` for *nuḫurtu* (the plant method), `שומר` / `אשמורה` for *maṣṣartu* (§3), `שער` for *bābu* (VI 13
  already `פתח`), `עוקרי לב` (*nasāḫu* is `נסח`), `פיזרתי` for *sarāqu* (hides the cognate), `צאצא` for *riḫītu*
  (II 58 has `ולד`).

### Open decisions for the user
- 126/134 *lū*: `או` ("or") vs an asseverative `אכן`; Abusch omits it.
- 128 `שְׁלִיחָהּ` (singular, by the writing) vs Abusch's plural.
- 132 *sarāqu* `זרק` (the cognate; reads "throw" in Modern Hebrew) vs `פיזר` / `זרה`.
- 131 *ulinnu* `חוט צבעוני` (two words for one lemma) vs `שָׁנִי` (would import Josh 2:18 / Gen 38:28 into the line).
- 141 *mukaṣṣiṣu*: "cut off" `קצץ` (with I 119) vs cmawro's "grind, gnaw" (Nisaba as grain).
- 155 brackets: *ūrīya* left unbracketed (the UR₃ sign half-preserved in HamNB1b); a stricter reading would bracket it.

### Progress log
- 2026-10-23: renderings §10.5 read; `pars VI` run. Drafted and saved in four parts (two for 1–97, then 98–125, 126–159),
  `fill` + `verify VI` + `check_bible_quotes.py` after each. The checker caught a bare reference read as Genesis
  (Job 18:15 without the book), a word in backticks before a reference and a partial quote (Jer 38:11); all fixed. An Exod 30:35 allusion was printed and reformatted
  before the checker ran.
- Pass (a) fidelity: brackets against the ATF of every bracketed line, KalNAPar1 counted as a copy (e.g. 140
  unbracketed; 151 unbracketed by NinNB1a; 149 `[מצמידי]`, 155 `[נצירה]`, 156 `[במרבצ]י`, 158–159); 61 `ראשי`
  (plural, with the plural verb of 62).
- Pass (b) consistency: the four repeated cores identical; 142 = 151 = 40; 143–144 = V 98–99 adapted; *ē* `הוֹי`
  vocalized in every line (65, 95, 113 aligned); 121 `קטורת` plene as II 10; headings without (א)/(ב) for the
  "Ha! my witch" pairs; VI 13's cross-reference corrected to 147–148.
- Pass (c) Hebrew: `translation-VI.rtl.md` read through; four footnotes added (69 sulphur, 119 salt, 140 food for the
  dead, 150 Exod 22:17).
- Final: `verify VI --strict` – no problems; one listed repeated-line difference (III 146 / VI 59: brackets and
  punctuation, justified in 59). `check_bible_quotes.py` on the annotated file, the intro, `translation-VI.rtl.md`,
  `translation.rtl.md` and `project.md` – 0 problems; `build` exits 0. `build_parallels_index.py` not run.

### The text on its own terms
- **The body as a pantheon** (1–8): head Enlil, face *ūmu*, pupil a protective goddess, neck Gula's necklace, hands
  the staff of Sîn and Amurru, fingers tamarisk "bone of divinity" – a body made of gods cannot be bewitched.
- **The house as a fortress** (13–15, 126–157): a guard on the roof, an emblem at the door, the Twins at right and
  left, a cord round the bed, fumigants at its head, a "mountain" in the yard – the night defence of a sleeper.
- **Plants as children of the pure mountains** (24–39): *kukru* the aromatic is "son of the pure mountains",
  "*terḫu* of the *entu*-priestesses": holiness passed into a resin.
- **The time before work** (45–46b): "before Ningirsu shouted the work-cry in the land" – the incantation reaches back
  to a world before labour began.
- **The shadow taken from the wall** (52–55): the witch collects the dust of his feet and his shadow – parts of the
  person that can be handled.
- **Sulphur speaks** (69–97): the speaker becomes sulphur, "daughter of the great heavens", his head reaching heaven;
  the substance that the Bible knows as destruction is here pure and purifying.
- **The body as purifying materials** (98–103) and **the river as daily life** (106–111): eating, drinking,
  anointing, dressing – each act done "river".
- **Salt as the gods' table** (118–125): without salt no meal in Ekur and no incense smelled by god or king.
- **"I know, and I trust"** (129 and its repeats): fear turned to confidence by knowing the enemy and taking
  measures – the emotional pivot of the four last incantations.
- **Witchcraft at a distance** (127–128): fire lit a league away, a messenger sent again and again from two leagues.
- **Feeding the dead to keep them quiet** (139–141): the fumigant chips are "food of a ghost", born of fire (Girra)
  and grain (Nissaba).
- **Violent guardians** (147–150): the gods of the watch "tear out the heart, squeeze the kidneys" – protection means
  killing the intruder.

### Key parallels
- Exod 22:17 `מְכַשֵּׁפָה לֹא תְחַיֶּה` – 150 (= II 197): the witch as object, killed by others (here the gods of the
  watch) [divergence].
- Job 18:15 `יְזֹרֶה עַל-נָוֵהוּ גָפְרִית` and Gen 19:24 – sulphur on the house / from heaven (69) [divergence]:
  purification against destruction.
- Lev 2:13 `מֶלַח בְּרִית אֱלֹהֶיךָ` and Num 18:19 `בְּרִית מֶלַח עוֹלָם` – salt as the condition of the gods' meal
  (119–120) [equivalent].
- Exod 12:23 – the doorway the destroyer may not pass (13) [equivalent]; Ps 121:5 `יְהוָה צִלְּךָ עַל-יַד יְמִינֶךָ`
  (147) and Ps 127:1 `שָׁוְא שָׁקַד שׁוֹמֵר` (130) [divergence]: the guards are gods the patient posts.
- Song 3:7–8 `שִׁשִּׁים גִּבֹּרִים סָבִיב לָהּ … מִפַּחַד בַּלֵּילוֹת` – the bed guarded at night (131) [divergence].
- Ezek 13:18 `הוֹי לִמְתַפְּרוֹת כְּסָתוֹת` – the "Ha!" against women practitioners (126) [equivalent].
- Deut 26:14 `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` – food for the dead (140) [divergence].
- Ps 7:10 `וּבֹחֵן לִבּוֹת וּכְלָיוֹת` – heart and kidneys, tested there, torn out here (149) [divergence].
- Num 14:9 `סָר צִלָּם` – the shadow as protection (55) [cognate]; Gen 28:12 – the head reaching heaven (74).
- 2 Sam 20:15 `וַיִּשְׁפְּכוּ סֹלְלָה` – *šapāku* of a heap (156) [cognate]; Ezek 22:21 – *napāḫu išāta* (127)
  [cognate].

### Lines shared with other tablets
- Copied from §9 and earlier tablets: 1 = V 176; 28–30 = V 51–53; 44 = V 5; 50 = V 80; 59 ≈ III 146 (difference
  justified); 64 = III 153; 77 cf. I 55; 86–87 = III 62–63; 90–94 = III 171–175; 120 = II 9; 121 ≈ II 10; 143–144 =
  V 98–99 (feminine); 150 = II 197; 158 = VII 1 (fully bracketed here).
- Inside VI: 22 = 67; 24–33 / 34–39 (the second copy without brackets); 40 = 142 = 151 (and 113's opening); 126 = 134;
  127 ≈ 135 (ventive); 128 = 136; 129 = 137 = 145 = 154; 130 = 138 = 146 = 155; 143–144 = 152–153.
- **For the next translators:** VIII 46–49 should copy VI 45–46b: `קסם. בטרם צעק נִינְגִּירְסוּ בארץ את האַלָלָא,` /
  `[בטרם] עלה העלם לכרות את האשל,` / `[יו]שבת אמו ומייעצת לו,` / `יושבים [ומייעצים לו אחיו].` (brackets by VIII's own
  copies). VII 4 ≈ VI 49 (`נושב אני עלייך כרוח צפון־מערב`). RT 115'–123' quote 126, 134, 142 (with 143), 151.

### Proposals for the shared renderings
- §3: *ulinnu* `חוט צבעוני`; *šaʾerru* `שַׁאֵרּוּ` (transliterated); *kurummat eṭemmi* `מנת אִט`; *ūru* `גג`.
- §2.4: *takālu* `בטח` (with the infinitive absolute for *attakil takālu*); *zaqāpu* `זקף` [cognate]; *sarāqu*
  `זרק` [cognate]; *naḫāru* D `צמק`; *lamû* `הקיף`; *izuzzu* Š `העמיד`; *nasāḫu* `נסח` [cognate]; *emēdu* Št `הצמיד`;
  *šapāku* `שפך` (heap); *kaṣāṣu* D `קצץ`.
- §4: *riḫītu* = *riḫûtu* `ולד`; *tarbaṣu* `מרבץ`; *padattu* `גֵּו`; *mākālu* `מאכל`; *bēru* `בֵּרוּ` (always vocalized,
  as in Gilgameš and Etana).
- §8 (traps): `נוֹסְחֵי` (participle of *nasāḫu*) must be vocalized beside the rubric `נוסח`; `שְׁלִיחָהּ` ("her
  messenger") beside `שליחה` ("sending").

### Lessons for the guidelines
- A repeated core inside one tablet (here four copies of 129–130) is best fixed once, with its punctuation, before the
  first copy is drafted: the verifier compares punctuation too.
- A paronomastic infinitive (*attakil takālu*) maps onto the Hebrew infinitive absolute; vocalize it where it reads as
  an adjective.

## Tablet VII

### Scope
All 198 eBL labels of Tablet VII (1–179 with 52a, 77a–77h, 79a, 140a–140h, 177a), in fifteen sections: fourteen
incantations (1–21, 22–28, 29–46, 47–54, 55–79a, 80–100, 101–106, 107–113, 114–140h, 141–144, 145–152, 153–161,
162–169, 170–177a) and the catch-line with the colophon (178–179). Well preserved in the Nineveh copies, with Aššur,
Nippur, Sippar and Babylon copies and several parallel texts (the Middle Babylonian NipMBPar1 for 1–4, the Middle
Assyrian AššMAPar1 for 120 and 131, KalNAPar1, AššNAPar1), all counted as copies for the brackets. 77a–77h are one
Nineveh copy's (NinNB1) version of 130–140; 140a–140h a different ending in Late Babylonian copies (SipLB3, BabLB1),
restored by eBL after the Universal Namburbi and not translated by Abusch.
Files: `annotated-VII.rtl.md`, `translation--intro-VII.rtl.md`, generated `translation-VII.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` VII (`../../sources/eBL/Maqlu-VII/`): N, T, notes, the ATF of every bracketed line;
  `manuscripts.md`. Every form parsed by hand; `lem`, `norm`, `pars VII`, `kol_tools.py lookup`.
- renderings §0–§10.6 (fixed lines 1, 4–7, 18–19, 40, 52a, 54, 154, 169); the earlier tablets for I 9, I 28, I 50–54,
  I 96, I 119, I 132, II 52, II 58, II 103, II 205, II 213, III 1–11, III 109, III 140, III 177, IV 50, IV 151, V 14–18,
  V 22, V 35–37, V 54, V 71, V 79–82, V 89, V 92, V 98, V 108, VI 13, VI 43, VI 49–50, VI 72–73, VI 127, VI 158.
- Earlier corpora: *sikkūru* `בריח`, *būlu* `בהמה`, *ṣabītu* `צבייה`, *laḫru* `רחל`, *gummuru* `גמר`, *eṭlu*/*ardatu*
  `עלם`/`עלמה`, *damqu* `נאה`, *urḫu* `דרך`, *ṭabāḫu* `טבח` (Gilgameš, Etana, flood); *kušīru* `כשרון`, *ramānu*
  `עצמ־`, *immeru* `כבש`, *kūru* `כהות`, *šuruppû* `צינה`, *asakku* `אסכו`, *laḫmu* `לחמו`, *kabāsu* `דרך`,
  *tānīḫu* `אנחה`, *diʾu* `כאב־ראש`, *murṣu* `חולי`, *damiqtu* `חסד`, *rāṣu* `חש`, *lumnu* `רֹעַ` (wisdom); *ṭuḫḫudu*
  `דישן`, *epinnu* `מחרשה` (creation, netherworld); *ūʾa* `אוי`, *napāḫ šamši* `זריחת השמש` (prophecy).
- The Bible: every verse printed before quoting (about 55).

### Decisions
- **Brackets by the copies, not by §9:** 1 `קסם` (KalNAPar1 has `EN₂`), 4 without brackets (NinNA1 and NipMBPar1
  keep the verb and *-kim*), 54 `רעה` (AssaNA1 `HUL-t[i₃]`), but 52a `[מזימות רעות]` (only `up-` survives). Each is
  noted in its entry.
- **The optional words of N** (`(TU₆ EN₂)`, `(u)`, `(ina)`, `(iddīšum-ma)`, `(mimma šumšu)`) are mirrored as `( )` in the
  Hebrew where they add a word (21, 28, 45, 46, 100, 120, 135, 144, 152, 161, 168), with a note that only some copies
  have them; the header says so. A Hebrew `ו־` that grammar needs anyway is written without parentheses (16, 169).
- **22–28:** *reḫû* `עִבֵּר` throughout (`מְעַבֵּר אֲנִי אוֹתְךָ`, `עִבֵּר`, `עִבְּרָה`, `יְעַבֵּר`), vocalized; Job 21:10 as
  [equivalent]; *atānu* `אָתוֹן` [cognate] and *mūru* `עַיִר` (Gen 49:11); *armû* `עופר` (plene `עוֹפְרָהּ`: the
  defective `עפרה` trips the `עפר` gate – plene is the brief's spelling anyway, not a bend).
- **The oil (29–46):** §3's `שמן טהור, שמן צח, שמן זוהר`; *ṭuḫḫudu* `דִּשֵּׁן` (Ps 23:5 [equivalent]); *pašāšu* `משח`;
  *riksu* "bandage" kept as `קשר` (the healing bond against the witch's bond; Isa 1:6); *ṭarādu* `הִבְרִיחַ` (`גרש` is
  taken by *samāku*); *tebû* Š `הֵקִים`; *nissatu* `דַּאֲבוֹן` (Deut 28:65), because Tablet V gave `יגון` to *ašuštu*.
- **The counter-figure (55–79a):** §2.3 throughout; *ṣubbû* `סקר`, *šurruḫu* `פֵּאֵר`, *kanānu* D `כרך`, *manānu*
  `מֵיתָר` (`גיד` is *šerʾānu*), *wuʾʾuru* `צִוָּה` (`שלח` is *šapāru*); *eṣēru* `צָר` (Gen 2:7 [cognate]); the
  second half repeats the first's verbs in the same order. Talion: *šumḫuru* `הִפְגִּיעַ` (Isa 53:6), *gimilla gamālu*
  `גמל גמול` + *utīr* `השבתי` (1 Sam 24:17, Joel 4:4 [cognate]).
- **The substitute:** *nigsagilû* `תמורה`, *arnu* `עוון`, *dinānī* `במקומי`, *zabālu* `סבל` (Isa 53:11 [cognate], Lev
  16:22 [equivalent]); *šaḫāṭu* N "be stripped off" `ייתלש` (V 54) – Abusch's "rinse off"; *ēnītu* / *māḫirtu*
  `המחליפה` / `המקבלת`; *amḫur miḫra* `קיבלתי פגע` (one verb, *maḫāru*, for "encounter" and "receive").
- **The huntress (80–100):** *bāʾirtu* `צַיֶּדֶת` (*bâru* `צד`, 15); *šētu* `רשת` (gated); the refrain `את קשרך
  אשבור` ×8; *šalāpu* `שלף` [cognate]; *ruqbūtu* `רִקָּבוֹן` [cognate]; *lillūtu* `קֵהוּת` (`רפיון` is *luʾtu*).
- **101–113:** *muppišūtu* `עוֹשׂוּת` (from `עוֹשָׂה` = *ēpištu*, as `אַשָּׁפוּת` from `אַשָּׁף`), so that 101–102 keep four
  *epēšu* words; *mê uštābil* `הוביל למים` (V 92); *qû* `פשתן` (I 9), *kaṣāru* `צרר` (I 28).
- **The washing (114–140h):** the list of evils with one word each: *ittu* `אוֹת` (both plurals *idātu*, *ittātu* →
  `אוֹתוֹת`, `אוֹתוֹת`), *šīrū* `בשרים` (the entrails), *naqû* / *niqû* `זביחת הזבח`, *bārûtu* `בוחנוּת`, *diliptu*
  `נדודים`, *niziqtu* `צער`, *imṭû* `חסרונות`, *ayya* `אבוי` (Prov 23:29), *meḫertu* `עתירה`, *tazzimtu* `תלונה`,
  *nīš ili* `נפש אל`, *nīš qātī* `נשיאת יד`; *rāṣu* `חוש` (Ps 70:2).
- **The morning (141–178):** *qaqqaru* addressed in the masculine as in Akkadian (`פְּתַח, קרקע, וקַבֵּל`); *salāḫu*
  `הִזָּה` for the ecstatic's harmful sprinkling (Lev 14:7 [divergence]); *ḫarrāna ṣabātu* `אחז אורח` (Job 17:9);
  *ē* "do not" in 148–149 against VI 72–73's *ēkīam*; *mārī nāri* `בני־הזמר` (*nāru* "musician", not "river");
  *ṭūb libbi … lirteddânni* `טוּב לב … ירדפו וירדפו אותי` (*redû* `רדף`, Ps 23:6); *šurrû* `התחלה` / `התחיל` (not
  `ראשית`); *damiqtu* `חסד`; *ḫurḫummatu* `קצף` (Hos 10:7); *rašubbatu* `נוֹרָאוּת`; *gummuru* `גמר` (Ps 138:8);
  *qu''û* `קיווה` (Ps 130:5 [cognate]) in the catch-line.
- Rejected: `ראשית` (163, Gen 1:1), `נשיאת כפיים` (128, the priestly blessing), `שטף` for *bâʾu* "pass" (13: `חצה`;
  IV 151's `שטף` is the flood's *bâʾu*), `יגון` for *nissatu*, `טרד` for *ṭarādu* (§6.7 false friend), `בדיל` for
  *annaku* (52: `אֲנָךְ`, the cognate, with Amos 7:7).

### Open decisions for the user
- *nissatu* `דַּאֲבוֹן` here against `יגון` in the wisdom corpus and Gilgameš (V's *ašuštu* already has `יגון`).
- *gummuru* `גמר` (Gilgameš, Ps 138:8) against the prophecy corpus's *gamāru* `כִּלָּה`.
- *annaku* `אֲנָךְ` (52; the cognate, but the biblical meaning is disputed) or `בדיל`.
- *riksu* "bandage" (42) as `קשר` or `תחבושת`.
- 128 *nīš ili* `נפש אל` (the oath "by the god's life") – a literal rendering that needs its note.
- 140a–140h: translated tentatively after eBL's restoration (no English translation to compare).

### Progress log
- 2026-10-23: renderings §10.6 read; `pars VII` and `lem VII` run. Drafted and saved in three parts (1–54; 55–113;
  114–179), `fill` + `verify VII` + `check_bible_quotes.py` after each. The verifier caught `עפרה` (the `עפר` gate:
  plene `עופרה` is the correct spelling) and an unvocalized `המעשים` in a *tuštēpiš* line (151); the checker caught a
  word in backticks before a reference (Deut 32:17). All fixed.
- Pass (a) fidelity: brackets against the ATF, parallel texts counted as copies (1, 2, 3, 4, 47, 54, 60, 77b–77g,
  120, 128, 131, 147–149, 166, 169, 170 checked one by one); added `ו־` removed (3, 88) or put in parentheses; 63's
  optional *ina* moved to the apparatus; 77/78 split of the *-ma* corrected.
- Pass (b) consistency: 77a–77h = 130–140 word for word where the Akkadian is the same (77b *eli* against 131 *ana
  muḫḫi*), 79 = 134, 79a ≈ 135, 103 ≈ 110, 104–106 = 111–113; 72–74 = 108–109; the fixed lines copied; first-occurrence
  names vocalized (Enlil 47).
- Pass (c) Hebrew: `translation-VII.rtl.md` read through; 147 `אחז אורח` (the idiom of Job 17:9) for `אחז באורח`;
  three footnotes (132 Isa 53:11, 142 Gen 4:11, 164 Ps 23:6).
- Final: `verify VII --strict` – no problems, no repeated-line differences; `check_bible_quotes.py` on the annotated
  file, the intro, `translation-VII.rtl.md`, `translation.rtl.md` and `project.md` – 0 problems; `build` exits 0.
  `build_parallels_index.py` not run.

### The text on its own terms
- **The closed night** (8–11): ford, quay and sailors asleep, the door locked and sealed with a spell – the world shut
  so that nothing can reach the sleeper.
- **Seed against seed** (22–28): the witch "impregnates" her victim with sorcery; the patient impregnates his own self
  with a spell, as Šakkan his herd and the plough the earth, so that the good seed drives out the evil.
- **Healing oil and the healing knot** (29–46): the same word *riksu* is the witch's binding and Gula's bandage.
- **The body as stars** (47–51): head Enlil, form Sirius, forehead the rising sun, feet the *laḫmu* trampling *laḫmu*.
- **Making a person by looking** (55–68): to "look at", "see", "build", "adorn", "scan" and "reproduce" someone is to
  make his image – and to have power over him; the counter-image is made the same way, in flour, before the sun.
- **Talion in three verbs** (69–71) and **the substitute that bears the sin** (77b–77c, 131–135): evil is transferable
  – to a figurine, to a passer-by, to the street.
- **The witch as huntress** (80–87): her net in the streets, her eyes roaming, seeking the young men and women.
- **The list of everything that can go wrong** (116–129): dreams, omens, bad entrails, demons, sickness,
  sleeplessness, grief, "woe" and "alas", curses and oaths – a map of ancient anxiety, all washed off with water.
- **Earth and sun** (141–144): the earth opens to receive the sin, the sun brings release.
- **Morning as the end of witchcraft** (145–152): the doors open, the traveller leaves, "I am pure by the rising sun".
- **The witches' morning** (153–155): they rise "like musicians playing", but the guards of the door and bed are sent
  against them.
- **Asking for a good day** (162–166): a good beginning, happiness and health "pursuing" him, his aims attained, his
  dream made good.
- **Waiting for the sun** (178): "until you rose, I waited for you" – the night's vigil ends.

### Key parallels
- Isa 53:11 `וַעֲוֹנֹתָם הוּא יִסְבֹּל` – *arnī dinānī lizbil* (132, 77c): the same verb and object [cognate]; with Lev
  16:22 (the goat bearing the sins) [equivalent] and Isa 53:6 `הִפְגִּיעַ` (70).
- Ps 23:6 `אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי` – *ṭūb libbi ṭūb šīri lirteddânni* (164) [equivalent]; Ps 23:5 `דִּשַּׁנְתָּ בַשֶּׁמֶן`
  – *uṭaḫḫidka* (33) [equivalent].
- Gen 4:11 `אֲשֶׁר פָּצְתָה אֶת פִּיהָ` – the earth that opens and receives (142) [divergence]; Num 16:32.
- 1 Sam 24:17 and Joel 4:4 – *gimilla gamālu*, *utīr* (71) [cognate].
- Deut 21:6, Ps 26:6, Isa 1:16 – washing the hands (114) [equivalent]; Lev 14:7 – sprinkling (143) [divergence].
- Ezek 13:18 `לְצוֹדֵד נְפָשׁוֹת`, Eccl 7:26, Prov 7:12, Prov 6:26 – the huntress and her net in the streets (80–84)
  [equivalent].
- Deut 13:2 – dream, sign and portent (118) [cognate *ittu* / `אוֹת`].
- Ps 130:5–6 `קִוִּיתִי … מִשֹּׁמְרִים לַבֹּקֶר` – waiting for the morning (178) [cognate *qu''û*].
- Gen 1:26 / 2:7 – *ṣalmu*, *eṣēru* (55, 63) [cognate]; Isa 1:6 – oil and bandage (35, 42); Num 5:23 – words dissolved in
  water (103) [divergence]; Prov 20:17 – the mouth filled with grit (104).

### Lines shared with other tablets
- Copied from §9: 1 (= VI 158; brackets by VII's own copies), 4 (= VI 49; unbracketed here), 5–7 (= V 80–82, VI 50),
  18–19 (= II 170–171), 40 (= V 108), 52a, 54 (cf. V 18; brackets differ), 154, 169 (= V 10, 131; `[ב]` here).
- Echoes: 8 recalls I 50 (ford and quay); 21 and 110 var. recall V 92; 69–71 the talion of V 57; 78 the §6 formula;
  148–149 against VI 72–73; 174–177 = V 14–18's simile structure.
- Inside VII: 77a–77h ≈ 130–140; 79 = 134; 79a ≈ 135; 104–106 = 111–113; 103 ≈ 110; 72–74 ≈ 108–109.
- **For VIII:** VIII 1 = VII 178: `קסם. עד אשר זרחת – קיוויתי לך, אדוני שַׁמַשׁ.` (*qu''û* `קיווה`, *napāḫu* `זרח`).
  The washing vocabulary (*mesû* `רחץ`, *mīs pî*, *musâtu* `רחיצה`, *šaḫāṭu* `תלש`, *nigsagilû* `תמורה`) is set here.

### Proposals for the shared renderings
- §2.2/§2.4: *muppišūtu* `עוֹשׂוּת`; *ṣubbû* `סקר`; *šurruḫu* `פאר`; *kanānu* D `כרך`; *wuʾʾuru* `ציווה`; *ṭarādu*
  `הבריח`; *tebû* Š `הקים`; *šaḫāṭu* N `ייתלש`; *šalāpu* `שלף`; *bâʾu* "pass" `חצה` (a sense split from IV's `שטף`);
  *rāṣu* `חש`; *gummuru* `גמר`; *qu''û* `קיווה`; *ṭuḫḫudu* `דישן`; *šurrû* `התחלה` / `התחיל`; *ṣamāru* / *ṣummirātu*
  `שאף` / `שאיפות`.
- §4: *manānu* `מיתר`; *niʾu* `נִיאוּ` (transliterated); *atānu* `אָתוֹן` (vocalized against
  *utūnu* `אַתּוּן`); *mūru* `עַיִר`; *armû* `עופר`; *annaku* `אֲנָךְ`; *parzillu* `ברזל`; *ruqbūtu* `רקבון`;
  *ḫurḫummatu* `קצף`.
- §3 / the evils: *nissatu* `דאבון`, *niziqtu* `צער`, *imṭû* `חסרונות`, *diliptu* `נדודים`, *ayya* `אבוי`, *meḫertu*
  `עתירה`, *tazzimtu* `תלונה`, *nīš qātī* `נשיאת יד`, *rašubbatu* `נוֹרָאוּת`, *lillūtu* `קהות`, *dimmakurrû* `טירוף`,
  *naqû* / *niqû* `זבח`, *bārûtu* `בוחנוּת`, *ḫanāqu* `חנק`.
- §8: `אָתוֹן` vocalized; `הַמַּלָּח` vocalized (*malāḫu*, against `מֶלַח`); `עוֹשׂוּת` vocalized.

### Lessons for the guidelines
- A gate can catch a correct defective spelling (`עפרה` "her fawn" in the `עפר` gate); the plene spelling the brief
  requires (`עופרה`) is the fix, not a bend.
- Parentheses in eBL's N (words in only some copies) need one convention per corpus: here they are mirrored as `( )`
  in the Hebrew and named in the apparatus.

## Tablet VIII

### Scope
All 133 eBL labels of Tablet VIII: 1–63 with 45a, then eBL's two sequences of fragments, A+1–A+46 and B+1–B+22 with
B+16a (placed after 63; their exact position and the gaps between them are unknown – said in the file header and the
intro). Eleven sections: five incantations in 1–63 (1–16, 17–27, 28–45a, 46–53, 54–63), fragment A (A+1–A+25), two
incantations (A+26–A+37, A+38–A+46), fragment B (B+1–B+8), the last incantation (B+9–B+21) and the colophon (B+22).
Mostly Nineveh copies (NinNA1–4, NinNB1), with Aššur (AššNASch1), Kalḫu (KalNAPar1, a parallel text counted as a
copy), Assyria (AssaNA1) and Babylon (BabLB1–2). 57–63 and A+7–A+19 are very fragmentary.
Files: `annotated-VIII.rtl.md`, `translation--intro-VIII.rtl.md`, generated `translation-VIII.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` VIII (`../../sources/eBL/Maqlu-VIII/`): N, T, notes (Schwemer 2022 on 1–11), the ATF of every
  bracketed line; `manuscripts.md`. `pars VIII`, `lem`, `norm`, `kol_tools.py lookup`.
- renderings §0–§10.7; the shared lines of I 4, I 9, I 14, I 35, I 134a, II 58, II 168, II 179, III 55–60, III 67–68,
  III 174, V 10, V 52–53, V 69, VI 22, VI 45–46b, VI 52–53, VI 98, VII 21, VII 79, VII 147, VII 162, VII 178.
- Earlier corpora: *zību* `עיט`, *erû* `נשר` (Gilgameš, Etana); *ḫurbāšu* `צמרמורת` (netherworld); *unūtu* `כלים`,
  *nešmû* `שמיעה`, *iḫzu* `לימוד`, *naparšudu* Ntn `נד`, *dalāḫu* `דלח` (wisdom, Gilgameš); *nikiltu* `מחוכמות`
  (creation); *tabāku* `יצק` (prophecy); *edēšu* `התחדש` (Gilgameš).
- The Bible: every verse printed before quoting (about 30).

### Decisions
- **Shared lines copied, changing only what the Akkadian changes:** 1 = VII 178 (brackets by VIII's copies); 46–49 =
  VI 45–46b with `אחרי` for *ultu* and Uru `אוּרוּ` for Ningirsu; 45a = I 134a; A+20–A+25 recast III 55–60 in the
  stative (`לכודה את, מוחלפת את, [מהופכת את], הֵמִירוּ אותך … [את קשרך ישבור] … יַפְגִּיעַ בָּךְ [עַצְמֵךְ]`); A+37 after
  II 168 / 179 (`[כמי] רחיצה – את הביב [ימלאו]`); B+8 and B+20–21 the formula of V 10 without *u* before Marduk
  (`שַׁמַשׁ, מרדוך`); 28 `ביום ש` as VI 52; 43–45 after I 35, VI 68 (`תיטול`) and VII 21 (`תוביל הרוח`); 52–53 the
  wind, storm and chaff of 13–14 and V 52–53.
- **1–16:** *tebû* `קם` for the departing beer and herbs (5–6); *arqu* `ירקות`; *abattu* `אבן`; *aḫullâ* `הגדה
  שמנגד`; *qiddatu* / *māḫirtu* `מורד הזרם` / `מעלה הזרם` (the homonym of *māḫirtu* "receiver", VII 79, noted).
- **17–27:** *pāširtu* `מַתִּירָה`; *iqbû tuqunta* `אמר מלחמה`; *rakāsu riksa* `קשר קשר` (2 Kgs 15:30's conspiracy
  idiom as [divergence], not a cognate).
- **28–45:** *šalû* "dive" `צלל`; *iḫzu* `לימוד`, *nēmequ* `חכמה`, *nikiltu* `מחוכמות` (cognate of `נֵכֶל`, noted);
  *lapānu* `*אבדן*` (italic, after Abusch; lit. "poverty"); *eṭû* D `החשיך`; *saḫāpu* Š `חִפָּה`; *tēšû* `מבוכה`,
  *raʾību* `חלחלה`, *ḫurbāšu* `צמרמורת`, *puluḫtu* `פחד` (`אימה` is *ḫayyattu*), *atāru* `יתר`.
- **54–56:** *nakāru* `התנכר` [cognate] (Gen 42:7).
- **A+:** *tākaltu* `קֵבָה` (Num 25:8), *ušultu* `וריד`, *ḫašû* "lungs" `ריאה`, *tarāku* `חבט`, *unūtu* `כלים`,
  *dalāḫu* `דלח` [cognate]; *šalû* "fling" `הטיח`; *kušāpu* `כּוּשָׁפּוּ` (transliterated: the root stays visible, `כשפים`
  stays *kišpū*'s); the participles of A+38–A+45 each with its own verb: *muribbatu* `מְגַדֶּלֶת`, *tābikat* `יוצקת`,
  *ḫāmišat* `קוטמת`, *ṣābitat* `אוחזת`, *muterrat* `משיבה`, *sēkirat* `סוכרת` [cognate], *sākikat* `אוטמת`, *ḫābilat*
  `מְחַבֶּלֶת` [cognate], *šāgilat* `חומסת` (a possible cognate `שגל` noted, not used).
- **B+1–B+8:** *pagru* (corpse) `פֶּגֶר` [cognate], *erû* `נֶשֶׁר`, *zību* `עַיִט` (as Gilgameš), *nadāru* `השתולל`,
  *baṣāru* D `קרע`.
- **B+9–B+21:** §2.3's self-words (*ṣillu* `צֵל`, *bāštu* `גאווה`, *lamassu* `אֵלַת־המגן`, *gattu* `קומה`, *padattu*
  `גֵּו`, *dūtu* `און`); *eddeššû* `המתחדש` [cognate `חדש`]; *ē tamḫur* `אל תקבל` (×10, the KIMIN of NinNA1 written
  out); *upīšū* `מַעֲבָדִים` (Job 34:25; §2.2 left it to the translator: `מעשה` is *ipšu*, `פעולה` *epištu*, `כשף`
  gated); *šaggaštu* `שחיטה` (`רצח` is *nērtu*); *lamādu* `יִלְמַד` ("know", I 14).
- **B+22:** `הלוח השמיני של מַקְלוּ – שָׁלֵם.` (§6).

### Open decisions for the user
- *upīšū* `מַעֲבָדִים` (B+13, B+17) – a rare word; alternatives `תחבולות` (but the root חבל is *ḫabālu*) or a
  transliteration.
- *šāgilat* (A+45): `חומסת` by sense, or the possible cognate `שוגלת`.
- *lapānu* (34) `*אבדן*` after Abusch, or the dictionary's "poverty" (`דלות`).
- *nikiltu* (34) `מחוכמות` (creation corpus) against the cognate `נֵכֶל`, which is pejorative in Hebrew.
- B+9 *ṣillu* `צֵל`: RT 175'–177' shows it is the patient's reflection in a bowl of water; Hebrew `צֵל` keeps only
  "shadow" (the note explains) – `בבואה` would be clearer but breaks the lemma's one rendering.

### Progress log
- 2026-10-23: renderings §10.7 read; `pars VIII`, `lem VIII`, `incipits` checked. Drafted and saved in two parts (1–63;
  A+1–B+22), `fill` + `verify VIII` + `check_bible_quotes.py` after each. The checker caught a quote missing its
  conjunction (2 Kgs 9:22 `וּכְשָׁפֶיהָ`) and Ps 1:4's maqaf; fixed.
- Pass (a) fidelity: brackets against the ATF (1, 2, 5, 7, 11, 12, 27, 28, 32–35, 44–48, A+2, A+20–A+25, A+37–A+40,
  B+3–B+4, B+12–B+14 checked one by one; KalNAPar1 and AššNASch1 counted as copies); 8 `(את) אשר` for a first `(מ)אשר`.
- Pass (b) consistency: the shared lines above copied character for character where the Akkadian is the same;
  first-occurrence vocalization (Ea at 34, Marduk at A+22); the fragment notes name their manuscripts.
- Pass (c) Hebrew: `translation-VIII.rtl.md` read through; two footnotes (B+4 Gen 15:11, B+7 the Jezebel contact).
- Final: `verify VIII --strict` – no problems, no repeated-line differences; `check_bible_quotes.py` on the annotated
  file, the intro, `translation-VIII.rtl.md`, `translation.rtl.md` and `project.md` – 0 problems; `build` exits 0.
  `build_parallels_index.py` not run.

### The text on its own terms
- **Waiting for the sun** (1–3): the night's vigil ends with the head "raised" at sunrise.
- **The witch's kitchen undone** (4–6): beer, herbs and pebble of her potions "rise and depart" at dawn.
- **The river decides** (10–16): her witchcraft drifts downstream, he goes upstream – the river as judge and carrier.
- **Heart and hand** (22–25): the two sources of sorcery, the intention ("the heart that spoke war") and the act ("the
  hand that tied the knot").
- **Words that do** (34): the sages "speak" her destruction by Ea's art – the decree is the deed.
- **Her own fear on her** (37–38): the River casts on her the fear she cast.
- **Before and after work** (46): the *alāla* incantation of VI returns with "after" for "before".
- **The witch's body as target** (A+1–A+4): stomach, veins, lungs, innards – struck one by one.
- **The witch's portrait in participles** (A+38–A+45): she seizes the forehead, turns the eyes, blocks the hearing,
  wrongs young men, assaults young women – witchcraft as an attack on the senses and on the young.
- **No burial** (B+3–B+7): the worst curse – Ereškigal refuses her, birds and dogs take her body.
- **A man and his reflection** (B+9–B+21): the last incantation of the series is spoken to the patient's own face in a
  bowl of water (RT 175'–177'): "you are mine and I am yours" – what belongs to him alone, no witch can take.
- **Complete** (B+22): the series ends with "complete", after a night of burning and a morning of washing.

### Key parallels
- 2 Kgs 9:36 `יֹאכְלוּ הַכְּלָבִים אֶת בְּשַׂר אִיזָבֶל`, 9:22 `וּכְשָׁפֶיהָ הָרַבִּים`, 9:35, 1 Kgs 21:23 – dog and bitch
  tear the witch's flesh (B+6–B+7) [equivalent]: the strongest Jezebel contact of Maqlû.
- Gen 15:11 `וַיֵּרֶד הָעַיִט עַל הַפְּגָרִים` – eagle and vulture on the corpse (B+4) [cognate *pagru*, equivalent
  *zību*]; Deut 28:26; Isa 14:19–20 (the unburied king, B+3).
- Song 2:16 `דּוֹדִי לִי וַאֲנִי לוֹ` – "you are mine and I am yours" (B+18) [divergence: lovers there, a man and his
  shadow here]; Num 14:9 `סָר צִלָּם` (B+9) [cognate].
- Ps 58:5 `כְּמוֹ-פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` and Isa 33:15 – shutting the ear (A+44).
- Ps 130:5–6 – waiting for the morning (1) [cognate *qu''û*].
- Gen 42:7 `וַיִּתְנַכֵּר` – *nakāru* (55) [cognate]; Ezek 32:2 `וַתִּדְלַח` – *dalāḫu* (A+3) [cognate].
- Isa 66:4 `וּמְגוּרֹתָם אָבִיא לָהֶם` – her own fear on her (38); Num 25:8 `אֶל קֳבָתָהּ` (A+1); Ps 1:4 – chaff (53).

### Lines shared with other tablets
- Copied: 1 = VII 178; 45a = I 134a; 46–49 ≈ VI 45–46b; A+23–A+25 ≈ III 59–60; A+37 ≈ II 168 / 179; B+8, B+20–21 ≈
  V 10 / VII 169. Echoes: 12 ≈ III 174 = VI 93 (`ב־` for `כ־`); 28 ≈ VI 52; 39 ≈ VII 162; 42 ≈ III 67–68; 43 ≈ I 35;
  44 ≈ VI 68; 45 ≈ VII 21; 52–53 ≈ V 52–53.
- **For the Ritual Tablet:** RT 160' (= 17 with *mīs qātī*), 161' (= 28), 162' (= 46), 165' (= 54), 169' (= A+26), 170'
  (= A+38) and 175' (= B+9) quote these incipits; their Hebrew is set here.

### Proposals for the shared renderings
- §2.2 / §2.4: *upīšū* `מַעֲבָדִים`; *kušāpu* `כּוּשָׁפּוּ`; *muribbatu* `מְגַדֶּלֶת`; *šalû* "fling" `הטיח`, "dive" `צלל`;
  *tarāku* `חבט`; *dalāḫu* `דלח` [cognate]; *baṣāru* D `קרע`; *nadāru* `השתולל`; *ḫamāšu* `קטם`; *sakāku* `אטם`;
  *šagālu* `חמס`; *nakāru* `התנכר` [cognate]; *ṣarāḫu* "shine" `הבהיק`; *atāru* `יתר`.
- §4: *pagru* (corpse) `פֶּגֶר`; *zību* `עַיִט`; *tākaltu* `קֵבָה`; *ušultu* `וריד`; *ḫašû* "lungs" `ריאה` (against the
  plant `חַשּׁוּ`); *unūtu* `כלים`; *qablu* `מותניים`; *aḫullâ* `הגדה שמנגד`; *qiddatu* / *māḫirtu* `מורד` / `מעלה הזרם`.
- §3 / the evils: *puluḫtu* `פחד`; *ḫurbāšu* `צמרמורת`; *tēšû* `מבוכה`; *raʾību* `חלחלה`; *šaggaštu* `שחיטה`.

### Lessons for the guidelines
- A fragment sequence (A+, B+) needs its own statement in the header and the intro: what the numbers mean and that
  the order is eBL's conjecture.
- Lines shared with an earlier tablet in another tense or stem (III 55–60 → VIII A+20–A+25) are best copied word by
  word and changed only in the grammar, so that the reader sees the same "reversal" said twice.

## Ritual Tablet

### Scope
All 182 eBL labels of the Ritual Tablet (RT): 1 (known only from the quotation AššNAQuo1), then 2'–180' with 78'-79',
133'a, 137'a and 137'b (primed numbering: an unknown number of lines is lost after 1 – said in the header and the
intro). Ten sections, following the tablets the RT works through: the opening (1–18'), Tablet I (19'–31'), II (32'–41'),
III (42'–59'), IV (60'–70'), V with the extinguishing and the carrying out (71'–95'), VI with the bed (96'–126'), VII
with the doors and the anointing (127'–137'b), the morning (138'–169'), and the dogs, the bowl and the colophon
(170'–180'). Copies from Nineveh (NinNA1–2, NinNB1), Ḫuzirina (HuzNA1), Babylonia, Babylon and Sippar (BabaLB1,
BabLB1, SipLB1); 2'–7' and 137'a–b are only traces.
Files: `annotated-RT.rtl.md`, `translation--intro-RT.rtl.md`, generated `translation-RT.rtl.md`.

### Sources consulted
- eBL `Mag/1/1` RT (`../../sources/eBL/Maqlu-RT/`): N, T, notes (Schwemer 2022 on 12'–18'), the ATF of every line
  (brackets checked line by line); `manuscripts.md`. `pars RT`, `lem RT`, `incipits`, `norm`, `kol_tools.py lookup`.
- renderings §0–§10.8; the first line of every incantation quoted (I 1 … VIII B+9) and the rubric lines of II–IV
  (II 18–226, III 30a–187a, IV 94a), whose materials the RT repeats word for word.
- Earlier corpora: *šukênu* `השתחווה` (creation, Etana); *namsû* `כיור`, *šurmēnu* `שׁוּרְבִּין`, *ballukku*
  `בַּלּוּכּוּ` (Gilgameš); *sippu* `מזוזה`, *sikkūru* `בריח` (wisdom, netherworld); *tarāṣu* (finger) `שלח`, *aplu*
  `יורש`, *têrtu* `הוראה`, *karābu* `ברך`, *puḫru* `אספה` (wisdom); *eṣēru qēma* `צָרָה בקמח` (flood).
- The Bible: every verse printed before quoting (about 45).

### Decisions
- **The incipits:** `הקסם "…"` where no verb governs, `את הקסם "…"` where one does (*imannu*, *tamannu*, *tuqattī*);
  the quote is the Hebrew of the incantation's first line, cut where the RT cuts it. Where the RT's wording differs the
  Hebrew changes only that: 17' `יליד דּוּרַנְקִי` (Schwemer: a different Nuska prayer, against I 122's *ilitti ani*,
  which 27' keeps); 21' *aktala nēbera* = I 50's Hebrew; 49' *pâša* `פיה` (III 101a *pâšu* `פיו`); 53' *ultēpišanni*,
  56' *haṣabti*, 70' *pāširāku*, 81' *uptaṭṭir*, 148' *epšētēki*, 165' *ininnā-ma* – spelling only, Hebrew unchanged;
  65' the optional ventive `(לי)`; 66' the added *u* `והכּוּשָׁפָתוּ`; 68' feminine `עושות לי` (IV 115) against 39'
  masculine `עושים לי` (II 161); 73' *dunnānī* `*חסוני, חסוני*`; 99' VI 34 marked by VI 38's `בואו` after `…`; 104'
  `הוֹי` without VI 65's parentheses; 111' `(נמשחתי)`; 119' VI 142 + 143; 150' *ubbab* `מנקה אני` (VII 114
  `ניקיתי`); 156' `רחצתי את ידיי` twice (VII 170 `פי`); 170' `והַמְעַשָּׂה` without VIII A+38's parentheses.
- **Incantations not in I–VIII**, translated in quotation marks: 92' the Sumerian *udug ḫul edin-na-zu-še₃* `"אוּטוּכּוּ
  רע – אל שָׂדְךָ!"` (udug = *utukku* `אוּטוּכּוּ`, II 52; *edin* = *ṣēru* `שדה`, vocalized); 95' `"משליך אני קסם אל
  אספת האלים כולם"`; 134'–135' the Nuska prayer; 137' `"שבועה, שבועה"` (SAG.BA = *māmītu*) and `"הבית מושבע"`; 178'
  `"נושא אני את מקלותיי"`.
- **Voice:** the exorcist 2nd person, the patient 3rd; present-future = Hebrew future; *manû* `מָנָה` (§3).
- **The materials follow the rubrics of II–IV** where those exist (33' `צלם נחושת, גפרית` = II 76; 39' = II 182; 50'
  `אֵלָה *בכובע ובשוק*` = III 115a; 57' / 64'–66' `תמשח … תכרוך` = III 153a, IV 94a).
- **New words:** *nēpešu* `טקס` (§6's colophon); *marṣu* `חולה`; *appu* `קצה`; *burzigallu* `בּוּרְזִיגַלּוּ`,
  *šukbusu* `שׁוּכְּבּוּסוּ`, *maṣḫatu* `מַצְחַתוּ`, *šaḫarru* `שַׁחַרּוּ`, *akalu* `אַכַּל`, *šubû* `שׁוּבּוּ`
  (transliterated); *paṭīru* `שולחן` (with *rakāsu* `ערך`, §2.2; Isa 65:11); *nappaṭu* `מחתה`; *kirru* `כד`; *kartu*
  `כרות`, *karātu* `כרת` [cognate] (16', 147', 168'); *sadāru* `סדר` [cognate]; *āsu* `הדס`; *qanû ṭābu* `קנה טוב`
  [cognate] (Jer 6:20); *nabāsu* `שָׁנִי` (red wool; *tabarru* stays `צמר אדום`); *pallurtu* `שתי־וערב` (not `צלב`);
  *gisallû* `מעקה` (Deut 22:8); *parāku* `שִׂכֵּל` (Gen 48:14); *nīru* `חוט`; *qablu* "middle" `אמצע`; *tābīlu*
  `תבלין` [cognate]; *qamû* (adj.) `בְּעוּרָה`; *buḫḫušu* `בחש`; *qilûtu* `הַקָּלוּי` [cognate] (Lev 2:14); *riksu* "ritual
  arrangement" `מערכה` (a sense split from `קשר`, matching the split *paṭīra rakāsu* `ערך`); *qatāru* D `הקטיר`
  [cognate]; *billatu* `בְּלִילָה` [cognate] (vocalized); *laḫannu* `צלוחית`; *qēmu* `קמח` [cognate]; *aban suluppi* `גרעין
  תמר`; *unqu* `טבעת`; *barû* `בחן`; *eṣēru* `צָר` (`תָּצוּר` vocalized at first; the flood corpus's `צָרָה בקמח`).
- **Kept:** *ḫuṣābu* `שְׁיָר` / `שְׁיָרִים` also for the cornel "sticks" (§4, IV 94a); *bābu* `פתח` (§10.6) also for the
  gate; *nasāku* and *sarāqu* both `זרק` (§10.2, §10.6); *šurpu* `שְׂרֵפָה` (138'–139', licensed).
- **Brackets** by the ATF across all copies (e.g. 13' unbracketed: HuzNA1 keeps the bowl, NinNB1 most of "to the gate";
  67' `של הַשֶּׁמֶשׁ` unbracketed from SipLB1; 142' unbracketed: NinNA1 keeps KU₄, HuzNA1 E₂); KIMIN written out
  (20', 80', 84', 85' …); N's optional words in `( )`.
- **A tool fix (reported):** `maqlu_tools.py` FORMULAS: the refrain check *hūlā zūbā* → `המסו זובו והנתכו` now exempts
  RT (as the opening-formula checks already do): RT 87' quotes only the incipit `"המסו, זובו"`, and adding `והנתכו` would
  add what the RT does not say. One line changed.

### Open decisions for the user
- *paṭīru* `שולחן`: the Gilgameš and netherworld corpora use `שולחן` for *paššūru* (not in Maqlû); an alternative is
  `מעמד` (GI.DU₈, a reed stand).
- *pallurtu* `שתי־וערב` (Lev 13:48) or `צלב` (clearer, but Christian associations).
- *riksu* (125') `מערכה` by sense, against the lemma's `קשר` (which would read "as written for the knots").
- *nabāsu* `שָׁנִי` beside *tabarru* `צמר אדום`: two red wools, two words; the Lev 14:4 / Num 19:6 `שְׁנִי תוֹלַעַת`
  contact rests on *nabāsu* only.
- 73' *dunnānī*: `*חסוני*` (the *-ī* as "my") or V 19's `*חסון*` (a case ending); Abusch does not translate it.
- *ḫuṣābu* `שְׁיָר` for a stick (eBL "stick of cornel"): kept for the lemma; `קיסם` would be clearer.
- *qablu* "middle" `אמצע` (62') against VIII's *qablu* `מותניים` (waist).

### Progress log
- 2026-10-23: renderings §10.8 read; `pars RT`, `lem RT`, `incipits` and every quoted first line checked; the ATF of all
  182 labels read. Drafted and saved in six parts (1–18', 19'–41', 42'–70', 71'–95', 96'–126', 127'–180'), `fill` +
  `verify RT` + `check_bible_quotes.py` after each. The checker caught Lev 13:48's wording (`בִשְׁתִי אוֹ בְעֵרֶב`);
  verify caught 87' (the refrain, see the tool fix).
- Pass (a) fidelity: brackets against the ATF line by line; `(ו)` and `(את …)` only for sense; 18' a stray `ו` removed;
  176' the optional *-ma* left untranslated (§7); 135' `ברך` unbracketed (`[k]u-rab`); 21' `[ב?]גיר`.
- Pass (b) consistency: every incipit compared with its tablet's first line (`heb` per label); the 10 repeated-line
  differences `verify RT` lists are all RT incipits (the RT form `הקסם "…":` against `קסם.`), by design; the materials
  matched to the rubrics of II–IV; *ḫuṣābu*, *tabarru*, *karāku*, *pašāšu*, *sippu* aligned with IV 94a, III 153a and
  the wisdom corpus; notes corrected where a cross-reference was wrong (4' I 21, 22' III 38, 26' the copies).
- Pass (c) Hebrew: `translation-RT.rtl.md` read through; `את הקסם` reduced to `הקסם` where no verb governs; 18
  footnotes.
- Final: `verify RT --strict` and `verify --strict` (all nine files, 1,595 lines) – no problems; `check_bible_quotes.py`
  on the annotated file, the intro, `translation-RT.rtl.md`, `translation.rtl.md` and `project.md` – 0 problems; `build`
  exits 0. `build_parallels_index.py` not run.

### The text on its own terms
- **Word and act at once** (8'–11'): when the patient reaches "the mouth that spoke evil – may it drip like tallow"
  (I 32), a tallow figurine with salt in its mouth melts on the torch.
- **The incantation reports, the ritual performs** (43', 116', 121', 123'): what the "I" says he has done ("I put
  tallow in your belly", "at the head of my bed I strewed asafoetida") the RT orders now – the incantation is a running
  report of the act.
- **The image becomes matter** (98', 103', 110', 77'): the chaff, soot and plaster of VI 30–32's similes, the tallow and
  rags of VI 60, the plants of VI 100–102, the sulphur and Amorite salt of V 73 are what is burned.
- **The deictic finger** (26'): "Nuska, these are the figurines" – the patient points at them; the incantation needs
  the gesture.
- **Two voices** (30', 90', 116'): in one line the exorcist lights or strews and the patient recites.
- **Circles and thresholds** (22', 93', 117', 129', 136'–137'): a flour circle round the fire, flour round the doors, a
  thread round the bed, smeared door, bolt and posts, a flour circle round the bed, and "the house is adjured".
- **Everything burned goes out of the door** (13', 91', 139'): the bowl of tallow, the remains of the burning, the
  morning *šurpu* (one copy: to the river).
- **Substitutes** (121', 151', 88' / 123'): two cornel sticks stand for the two guardian gods; the patient washes his
  hands over his own substitute; one stone is the mountain.
- **Seven against six** (69'): seven knots tied and cut, against the witches' six (IV 118).
- **Washing over** (142'–169'): hands washed over drawn and clay figurines in a copper basin – the water carries the
  evil into them; a cornel stick "cuts" them three times.
- **The pair to the pair** (171'–174'): warlock and witch in two loaves, to a dog and a bitch.
- **The last look** (175'–177'): the patient sees his face in water – "you are my reflection" (VIII B+9) – and the
  water goes east, to the rising sun.
- **The name** (94'): *ašar maqlâ taqlû* – "Maqlû" is "the roasting" the exorcist roasted.

### Key parallels
- Deut 21:6 `יִרְחֲצוּ אֶת יְדֵיהֶם עַל הָעֶגְלָה הָעֲרוּפָה בַנָּחַל` – washing the hands *over* a body that takes the
  evil (142', 147', 151', 167') [equivalent]; Exod 30:18–19 `כִּיּוֹר נְחֹשֶׁת וְכַנּוֹ נְחֹשֶׁת לְרָחְצָה` – the copper washbasin (141').
- Exod 12:22 `וְהִגַּעְתֶּם אֶל הַמַּשְׁקוֹף וְאֶל שְׁתֵּי הַמְּזוּזֹת`, 12:23 – touching the door posts so the destroyer
  will not enter (129') [equivalent: *lapātu* `נגע`, *sippu* `מזוזה`].
- Num 19:6 `וְהִשְׁלִיךְ אֶל תּוֹךְ שְׂרֵפַת הַפָּרָה` with `שְׁנִי תוֹלָעַת`, Lev 14:4 – red wool cast into the burning
  (57', 69'; 138' *šurpu* `שְׂרֵפָה` [cognate]).
- Lev 4:12 / 16:27 `אֶל מִחוּץ לַמַּחֲנֶה` – the remains of the burning carried out (91') [equivalent].
- Exod 22:30 `לַכֶּלֶב תַּשְׁלִכוּן אֹתוֹ`; 2 Kgs 9:10 – the figurines given to the dogs (174').
- Jer 6:20 `וְקָנֶה הַטּוֹב` – *qanû ṭābu* (29') [cognate, both words]; Exod 30:7 `וְהִקְטִיר` – *qatāru* D (126').
- Ezek 21:26 – the king of Babylon divining at the crossroads (56') [divergence]; Ezek 4:1–3 – drawing and besieging
  (22') [divergence].
- Isa 65:11 `הַעֹרְכִים לַגַּד שֻׁלְחָן` – a table set for a god (14'); Isa 58:9 `שְׁלַח אֶצְבַּע` – the pointing finger (26').
- Lev 16:21 – hands on the substitute (151') [divergence]; Ps 1:4 – chaff blown (164').

### Lines shared with other tablets
- Every ÉN line quotes the first line of an incantation of I–VIII (pars / incipits), changed only as listed under
  Decisions. 8' quotes I 32 mid-incantation; 43' enacts III 19–20; 51'–52' = III 114 / 115b; 116'–117' = VI 131–132;
  121' = VI 147–148; 123' = VI 156; the materials of 32'–59' and 64'–65' = the rubrics II 18–226, III 30a–187a, IV 94a.
- The RT's 10 repeated-line differences in `verify RT` are the incipit form (`הקסם "…":` against `קסם. …,`), not
  differences of wording.

### Proposals for the shared renderings
- §3 / §4 (the rite): *nēpešu* `טקס`; *marṣu* `חולה`; *nappaṭu* `מחתה`; *kirru* `כד`; *paṭīru* `שולחן`; *riksu* (ritual
  arrangement) `מערכה`; *qatāru* D `הקטיר`; *namsû* `כיור`; *laḫannu* `צלוחית`; *burzigallu*, *šukbusu*, *maṣḫatu*,
  *šaḫarru*, *akalu*, *šubû* transliterated; *qēmu* `קמח`; *billatu* `בְּלִילָה`; *tābīlu* `תבלין`; *qilûtu* `הַקָּלוּי`.
- §4 (materials, plants): *āsu* `הדס`; *šurmēnu* `שׁוּרְבִּין`; *qanû ṭābu* `קנה טוב`; *nabāsu* `שָׁנִי`; *aban suluppi*
  `גרעין תמר`; *unqu* `טבעת`; *pallurtu* `שתי־וערב`; *gisallû* `מעקה`; *nīru* `חוט`.
- §2.4 / verbs: *eṣēru* `צָר`; *sadāru* `סדר`; *parāku* `שִׂכֵּל`; *karātu* `כרת`; *buḫḫušu* `בחש`; *barû* `בחן`;
  *tarāṣu* `שלח`; *šukênu* `השתחווה`.
- §6: the RT incipit form, `הקסם "…"` / `את הקסם "…"` by syntax; the refrain check exempting RT (tool, done).

### Lessons for the guidelines
- An instruction text that quotes other texts needs a quotation rule: the quoted Hebrew is the source line's,
  character for character, cut where the quoting text cuts it, and the checks that enforce whole formulas must exempt
  it.
- The ritual tablet is the commentary the incantations lack: whenever an incantation says "I did X", the annotation of
  that line should cite the RT line that orders X (and the RT annotation the incantation) – both directions.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (I)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | EN₂ alsīkunūši ilū mušīti | קסם. צעקתי אליכם, אֵלֵי הלילה, | `קֹסֵם קְסָמִים` (דברים יח:י) | equivalent | *šiptu* = `קֶסֶם` לכל אורך התרגום (`../renderings.md` §3): הקסם הבבלי הוא בדיוק מה שהתורה אוסרת בשמו |
| 1 | EN₂ alsīkunūši ilū mušīti | קסם. צעקתי אליכם, אֵלֵי הלילה, | `אֱלֹהַי אֶקְרָא יוֹמָם וְלֹא תַעֲנֶה` (תהלים כב:ג) | equivalent | הקריאה אל האל בלילה וביום (השוו 8). |
| 2 | ittīkunu alsi mušītu kallātu kuttumtu | עמכם צעקתי אל הלילה, הַכַּלָּה המכוסה, | `קוֹל חָתָן וְקוֹל כַּלָּה` (ירמיהו לג:יא) | cognate | *kallātu* = `כַּלָּה` |
| 2 | ittīkunu alsi mušītu kallātu kuttumtu | עמכם צעקתי אל הלילה, הַכַּלָּה המכוסה, | `וַתִּקַּח הַצָּעִיף וַתִּתְכָּס` (בראשית כד:סה); `כִּי כִסְּתָה פָּנֶיהָ` (בראשית לח:טו) | equivalent | הכלה המכוסה בצעיף; כאן הלילה עצמו הוא הכלה, והשמים הכהים – הצעיף. |
| 3 | alsi barārītu qablītu u namārītu | צעקתי אל הערבית, התיכונה והשחרית. | `רֹאשׁ הָאַשְׁמֹרֶת הַתִּיכוֹנָה` (שופטים ז:יט) | equivalent | שלוש משמרות הלילה, והאמצעית בשם `הַתִּיכוֹנָה`, כמו *qablītu* |
| 3 | alsi barārītu qablītu u namārītu | צעקתי אל הערבית, התיכונה והשחרית. | `וְאַשְׁמוּרָה בַלָּיְלָה` (תהלים צ:ד); `קוּמִי רֹנִּי בַלַּיְלָ (בַלַּיְלָה) לְרֹאשׁ אַשְׁמֻרוֹת` (איכה ב:יט) | equivalent |  |
| 4 | aššu kaššāptu ukaššipanni | משום שמכשפה כִּשְּׁפָה אותי, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | cognate | *kaššāptu* היא המלה העברית עצמה, בצורה ובמין (נקבה!) |
| 4 | aššu kaššāptu ukaššipanni | משום שמכשפה כִּשְּׁפָה אותי, | `וְעוֹנֵן וְנִחֵשׁ וְכִשֵּׁף` (דברי הימים ב לג:ו) | cognate | הפועל בבניין פיעל, כמו ה־D הבבלי *ukaššip* |
| 4 | aššu kaššāptu ukaššipanni | משום שמכשפה כִּשְּׁפָה אותי, | `וּמְכַשֵּׁף` (דברים יח:י) | cognate |  |
| 6 | ilī u ištarī ušessû elīya | את אֵלִי ואֵלָתִי הרחיקה מעליי, | `אַחַי מֵעָלַי הִרְחִיק` (איוב יט:יג) | equivalent | אותו צירוף בדיוק ("הרחיק מעליי"), אבל באיוב האל מרחיק את קרובי הסובל, וכאן המכשפה מרחיקה את אלי הסובל ממנו. |
| 7 | eli āmerīya amruṣu anāku | בעיני רואיי – חולה אני, | `רֹאַי בַּחוּץ נָדְדוּ מִמֶּנִּי` (תהלים לא:יב) | equivalent | הסובל שרואיו נרתעים ממנו; גם שם `רֹאַי`, כמו *āmerīya*. |
| 8 | emdēku lā ṣalālu mūša u urra | עמוס אני: לא לישון, לילה ויומם, | `וְלַיְלָה וְלֹא־דֻמִיָּה לִי` (תהלים כב:ג) | equivalent | הסובל שאין לו מנוחה לא ביום ולא בלילה. |
| 9 | qû imtanallû pīya | פשתן ממלא וממלא את פי, | `אֶשְׁמְרָה לְפִי מַחְסוֹם` (תהלים לט:ב) | equivalent | מחסום על הפה; אבל שם המתפלל שם אותו בעצמו כדי שלא יחטא בלשונו, וכאן המכשפה סותמת את פי הקרבן. |
| 10 | upunti pîya iprusu | את סולת פי גזר, | `סֹלֶת יִהְיֶה קָרְבָּנוֹ` (ויקרא ב:א) | equivalent | *upuntu* הוא קמח משובח, קמח של מנחות, כמו `סֹלֶת`; כאן אין מנחה: "סולת פי" הוא המזון שלי |
| 10 | upunti pîya iprusu | את סולת פי גזר, | `כִּי־שָׁכַחְתִּי מֵאֲכֹל לַחְמִי` (תהלים קב:ה) | equivalent | החולה שאינו יכול לאכול. |
| 12 | elēlī nubû hidûtī sipdi | הֵידָדִי – נהי, שמחתי – מספד. | `הָפַכְתָּ מִסְפְּדִי לְמָחוֹל לִי` (תהלים ל:יב) | cognate | *sipdu* הוא `מִסְפֵּד` (שורש ספד), והמזמור אומר את ההיפוך של השורה: שם המספד נהפך למחול, כאן השמחה נהפכה למספד |
| 12 | elēlī nubû hidûtī sipdi | הֵידָדִי – נהי, שמחתי – מספד. | `נֶהְפַּךְ לְאֵבֶל מְחֹלֵנוּ` (איכה ה:טו); `וְהָפַכְתִּי חַגֵּיכֶם לְאֵבֶל וְכָל שִׁירֵיכֶם לְקִינָה` (עמוס ח:י) | equivalent |  |
| 12 | elēlī nubû hidûtī sipdi | הֵידָדִי – נהי, שמחתי – מספד. | `וּמִסְפֵּד אֶל יוֹדְעֵי נֶהִי` (עמוס ה:טז) | equivalent | שני שמות האבל של השורה זה ליד זה |
| 12 | elēlī nubû hidûtī sipdi | הֵידָדִי – נהי, שמחתי – מספד. | `הֵידָד הֵידָד לֹא הֵידָד` (ירמיהו מח:לג) | equivalent | קריאת השמחה (`הֵידָד`, קריאת דורכי הענבים) שנדמה. |
| 13 | izizzānim-ma ilū rabûtu šimâ dabābī | עמדו לי, האלים הגדולים, שמעו את ריבי! | `שִׁמְעוּ הָרִים אֶת רִיב יְהוָה` (מיכה ו:ב) | equivalent | "שמעו את הריב": גם שם עדים קוסמיים מוזמנים לשמוע תביעה משפטית |
| 13 | izizzānim-ma ilū rabûtu šimâ dabābī | עמדו לי, האלים הגדולים, שמעו את ריבי! | `כִּי אָרִיב אֵלֶיךָ` (ירמיהו יב:א) | equivalent | הנביא "רב" עם האל, כמו התובע כאן לפני האלים. |
| 14 | dīnī dīnā alaktī limdā | דונו את דיני, למדו את הליכתי! | `וּבִגְבוּרָתְךָ תְדִינֵנִי` (תהלים נד:ג); `כִּי־עָשִׂיתָ מִשְׁפָּטִי וְדִינִי` (תהלים ט:ה) | cognate | *diānu* / *dīnu* = `דין` (`../renderings.md` §2.4). |
| 15 | ēpuš ṣalam kaššāpīya u kaššāptīya | עשיתי צלם מְכַשְּׁפִי ומכשפתי, | `נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ` (בראשית א:כו) | cognate | *ṣalmu* = `צֶלֶם`, מלה אחת לכל פסלוני מקלו; `דְּמוּת` אינה משמשת (היא נשארת בהערות). |
| 15 | ēpuš ṣalam kaššāpīya u kaššāptīya | עשיתי צלם מְכַשְּׁפִי ומכשפתי, | `נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ` (בראשית א:כו) | divergence | בבראשית האל עושה אדם בצלמו; כאן האדם עושה צלם של אויביו – כדי לשרוף אותו. |
| 17 | aškun ina šaplīkunu-ma adabbub dīnī | שמתי (אותו) למרגלותיכם, ומדבר אני את דיני: | `אַךְ מִשְׁפָּטִים אֲדַבֵּר אֹתָךְ` (ירמיהו יב:א) | equivalent | "לדבר משפט" עם האל: אותו ניב בדיוק (*dīna dabābu*). |
| 18 | aššu īpuša lemnēti išteʾʾâ lā banâti | משום שעשתה לי רעות, ביקשה וביקשה לא־יפות – | `וְדֹרְשֵׁי רָעָתִי דִּבְּרוּ הַוּוֹת` (תהלים לח:יג) | equivalent | האויבים ה"דורשים" את רעתו של המתפלל. |
| 19 | šī limūt-ma anāku lubluṭ | היא תמות, ואני אחיה. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | אותה מכשפה ואותו שורש (*balāṭu* ~ `חיה`), ובשני הטקסטים מות המכשפה הוא עיקר; אבל בשמות זה צו לבית הדין האנושי ("לא תְחַיֶּה" – פיעל, אתה לא תשאיר אותה בחיים), וכאן זו בקשה של הקרבן לאלים: מותה הוא תנאי לחייו. |
| 20 | kišpūša ruhûša rusûša lū pašrū | כשפיה, רירה, כבלה – יותרו! | `וּכְשָׁפֶיהָ הָרַבִּים` (מלכים ב ט:כב) | cognate | *kišpū* = `כְּשָׁפִים` |
| 20 | kišpūša ruhûša rusûša lū pašrū | כשפיה, רירה, כבלה – יותרו! | `מְפַשַּׁר חֶלְמִין … וּמְשָׁרֵא קִטְרִין` (דניאל ה:יב) | cognate | *pašāru* הוא הקרוב של `פשר`, ודניאל מעיד על שני צדדיו: "פותר חלומות" ו"מתיר קשרים" |
| 20 | kišpūša ruhûša rusûša lū pašrū | כשפיה, רירה, כבלה – יותרו! | `וַיּוֹרֶד רִירוֹ אֶל זְקָנוֹ` (שמואל א כא:יד) | equivalent | `רִיר` הוא הרוק הנוטף (של דוד המתחזה למשוגע); כאן הרוק כחומר של כשף. |
| 21 | bīnu lillilanni ša qimmatu šarû | האשל יטהר אותי – אשר בצמרת עשיר; | `וַיִּטַּע אֶשֶׁל בִּבְאֵר שָׁבַע` (בראשית כא:לג) | equivalent | *bīnu* = `אֵשֶׁל` (`../renderings.md` §4) |
| 21 | bīnu lillilanni ša qimmatu šarû | האשל יטהר אותי – אשר בצמרת עשיר; | `תְּחַטְּאֵנִי בְאֵזוֹב וְאֶטְהָר` (תהלים נא:ט); `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד) | equivalent | צמח מטהר: באותו מבנה ("הצמח – יטהר אותי"), אבל במקרא האזוב והארז, ובבבל – האשל, התמר, המשתכל והאצטרובל. |
| 25 | ina mahrīkunu ētelil kīma sassati | לפניכם טהרתי כחציר, | `וּמִשֶּׁלֶג אַלְבִּין` (תהלים נא:ט) | equivalent | הדימוי לטוהר (שם: השלג; כאן: העשב). |
| 26 | ētebib azzaku kīma lardi | נִקֵּיתִי, זכותי כנֵרְדְּ. | `נִרְדִּי נָתַן רֵיחוֹ` (שיר השירים א:יב) | cognate | *lardu* = `נֵרְדְּ` (מלת שאולה משותפת: גם היוונית νάρδος) |
| 26 | ētebib azzaku kīma lardi | נִקֵּיתִי, זכותי כנֵרְדְּ. | `רַחֲצוּ הִזַּכּוּ` (ישעיהו א:טז) | cognate | *zakû* = `זכה`, טוהר שהוא גם חפות. |
| 28 | turrat amāssa ana pîša lišānša kaṣrat | דברה הושב אל פיה, לשונה צרורה. | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | cognate | *târu* = `שוב`: הרעה חוזרת אל עושיה |
| 28 | turrat amāssa ana pîša lišānša kaṣrat | דברה הושב אל פיה, לשונה צרורה. | `וַיַּכְשִׁילוּהוּ עָלֵימוֹ לְשׁוֹנָם` (תהלים סד:ט) | equivalent | לשונם של מחרחרי הרעה נהפכת נגדם. |
| 29 | ina muhhi kišpīša limhaṣūši ilū mušīti | על כשפיה ימחצו אותה אֵלֵי הלילה, | `אַךְ־אֱלֹהִים יִמְחַץ רֹאשׁ אֹיְבָיו קָדְקֹד שֵׂעָר` (תהלים סח:כב) | equivalent | *mahāṣu* = `מחץ` (`../renderings.md`, קורפוס החוקים), והקדקוד לצדו. |
| 30 | šalāš maṣṣarātu ša mūši lipšurā ruhêša lemnūti | שלוש נצירות הלילה יתירו את רירה הרע. | `רֹאשׁ הָאַשְׁמֹרֶת הַתִּיכוֹנָה` (שופטים ז:יט) | equivalent | ראו 3. |
| 31 | pûša lū lipû lišānša lū ṭabtu | פיה יהי חֵלֶב, לשונה תהי מלח! | `כְּהִמֵּס דּוֹנַג מִפְּנֵי־אֵשׁ יֹאבְדוּ רְשָׁעִים` (תהלים סח:ג) | equivalent | הרשעים נמסים כחומר בפני האש; שם דונג, כאן חלב (ובשורה 140: צלמים של חלב ודונג נמסים). |
| 32 | ša iqbû amāt lemuttīya kīma lipî littattuk | (הפה) אשר אמר את דבר רעתי – כחֵלֶב יינתך ויינתך! | `כְּהִתּוּךְ כֶּסֶף בְּתוֹךְ כּוּר כֵּן תֻּתְּכוּ בְתוֹכָהּ` (יחזקאל כב:כב) | cognate | *natāku* = `נתך`, ההיתוך באש כעונש |
| 32 | ša iqbû amāt lemuttīya kīma lipî littattuk | (הפה) אשר אמר את דבר רעתי – כחֵלֶב יינתך ויינתך! | `חֹשְׁבֵי רָעָתִי` (תהלים לה:ד) | equivalent | "רעתי": הרעה המכוונת אליי. |
| 33 | ša īpušu kišpī kīma ṭabti lišharmiṭ | (הלשון) אשר עשתה כשפים – כמלח תתמוגג! | `וְכָל הַגְּבָעוֹת תִּתְמוֹגַגְנָה` (עמוס ט:יג) | equivalent | `התמוגג`, ההתמוססות הגמורה. |
| 37 | EN₂ erṣetu erṣetu erṣetum-ma | קסם. ארץ, ארץ, הוֹ ארץ! | `אֶרֶץ אֶרֶץ אָרֶץ שִׁמְעִי דְּבַר יְהוָה` (ירמיהו כב:כט) | cognate | אותה קריאה משולשת אל הארץ, באותה מלה; בירמיהו הארץ נקראת לשמוע את דבר האל (כמו העדים בשורה 13), כאן היא נקראת כמקום מושבו של שופט המתים. |
| 44 | ištēt ana ṣīt šamši šanītu ana ereb šamši | אחד למוצא הַשֶּׁמֶשׁ, השני למבוא הַשֶּׁמֶשׁ. | `כִּי לֹא מִמּוֹצָא וּמִמַּעֲרָב` (תהלים עה:ז) | equivalent | `מוֹצָא` = *ṣītu* (יציאת השמש), ו`מַעֲרָב` הוא הקרוב של *erēbu* |
| 44 | ištēt ana ṣīt šamši šanītu ana ereb šamši | אחד למוצא הַשֶּׁמֶשׁ, השני למבוא הַשֶּׁמֶשׁ. | `כִּי לֹא מִמּוֹצָא וּמִמַּעֲרָב` (תהלים עה:ז) | cognate |  |
| 44 | ištēt ana ṣīt šamši šanītu ana ereb šamši | אחד למוצא הַשֶּׁמֶשׁ, השני למבוא הַשֶּׁמֶשׁ. | `מִמִּזְרַח־שֶׁמֶשׁ עַד־מְבֹאוֹ` (תהלים נ:א); `דֶּרֶךְ מְבוֹא הַשֶּׁמֶשׁ` (דברים יא:ל) | equivalent | השקיעה כ"ביאה", בדיוק כמו *ereb šamši* ("כניסת השמש"). |
| 47 | ana ilī ša šamê mê anamdin | לאלים אשר בשמים מים נותן אני: | `וַיִּשְׁאֲבוּ מַיִם וַיִּשְׁפְּכוּ לִפְנֵי יְהוָה` (שמואל א ז:ו) | equivalent | מים כנסך לפני האל, בטקס של טיהור ווידוי. |
| 48 | kīma anāku ana kâšunu ullalukunūši | "כשם שאני מטהר אתכם עצמכם, | `וּמֵחַטָּאתִי טַהֲרֵנִי` (תהלים נא:ד) | equivalent |  |
| 50 | EN₂ akla nēberu aktali kāru | קסם. כלאתי את המעבר, כלאתי את הנמל, | `וַיִּלְכְּדוּ אֶת מַעְבְּרוֹת הַיַּרְדֵּן לְמוֹאָב וְלֹא נָתְנוּ אִישׁ לַעֲבֹר` (שופטים ג:כח) | equivalent | תפיסת המעברות כדי שאיש לא יעבור: אותה פעולה, במלחמה |
| 50 | EN₂ akla nēberu aktali kāru | קסם. כלאתי את המעבר, כלאתי את הנמל, | `וַיִּכָּלֵא הַגֶּשֶׁם מִן הַשָּׁמָיִם` (בראשית ח:ב) | cognate | *kalû* "לעצור" = `כלא` (`../../translation-guidelines.md` §6.7); *nēberu* (מן *ebēru* "לעבור") = `מעבר` |
| 50 | EN₂ akla nēberu aktali kāru | קסם. כלאתי את המעבר, כלאתי את הנמל, | `וַיִּכָּלֵא הַגֶּשֶׁם מִן הַשָּׁמָיִם` (בראשית ח:ב) | cognate |  |
| 52 | anu u antu išpurūʾinni | אָנוּ ואַנְתוּ שלחו אותי: | `אֶת מִי אֶשְׁלַח וּמִי יֵלֶךְ לָנוּ; וָאֹמַר הִנְנִי שְׁלָחֵנִי` (ישעיהו ו:ח) | equivalent | ראו 53. |
| 53 | mannu lušpur ana bēlet-ṣēri | "את מי אשלח אל בֵּלֶת־צֵרִי?" | `אֶת מִי אֶשְׁלַח וּמִי יֵלֶךְ לָנוּ` (ישעיהו ו:ח) | equivalent | **אותה שאלה במועצת האלים**: האל העליון שואל "את מי אשלח", והשליח יוצא מתוכה; גם אצל ישעיהו היחיד ("אשלח") והרבים ("לנו") באים יחד, כמו כאן – שני אלים ששואלים ביחיד (*lušpur*, "אשלח"). |
| 53 | mannu lušpur ana bēlet-ṣēri | "את מי אשלח אל בֵּלֶת־צֵרִי?" | `אֶת מִי אֶשְׁלַח וּמִי יֵלֶךְ לָנוּ` (ישעיהו ו:ח) | divergence | אצל ישעיהו השליח מתנדב ("הנני שלחני"); כאן הוא כבר נשלח (52) והשאלה מובאת כציטוט של מינויו. |
| 54 | ana pī kaššāpīya u kaššāptīya idî hargullī | אל פי מכשפי ומכשפתי השליכי מנעול, | `כִּי יִסָּכֵר פִּי דוֹבְרֵי־שָׁקֶר` (תהלים סג:יב) | equivalent | סגירת פי המדברים רעה |
| 54 | ana pī kaššāpīya u kaššāptīya idî hargullī | אל פי מכשפי ומכשפתי השליכי מנעול, | `שִׁיתָה יְהוָה שָׁמְרָה לְפִי` (תהלים קמא:ג) | equivalent | שמירה על הפה, אצל המתפלל עצמו. |
| 55 | idî šipassu ša apkal ilī marduk | השליכי את קסמו של חכם האלים, מַרְדּוּךְ. | `חַת מְרֹדָךְ` (ירמיהו נ:ב) | cognate | *Marduk* הוא `מְרֹדָךְ` המקראי. |
| 58 | lulsīki-ma apulīnni | אצעק אלייך – עֲנִינִי; | `בְּקָרְאִי עֲנֵנִי אֱלֹהֵי צִדְקִי` (תהלים ד:ב); `בְּיוֹם אֶקְרָא מַהֵר עֲנֵנִי` (תהלים קב:ג) | equivalent | אותו צמד, "לקרוא" ו"לענות", ואותו מבנה תנאי. |
| 61 | EN₂ šaprāku allak uʾʾurāku adabbu[b] | קסם. שלוח אני – ואלך, מצוּוה אני – ואדבר. | `כִּי עַל כָּל אֲשֶׁר אֶשְׁלָחֲךָ תֵּלֵךְ וְאֵת כָּל אֲשֶׁר אֲצַוְּךָ תְּדַבֵּר` (ירמיהו א:ז) | equivalent | **אותם ארבעה פעלים באותו סדר**: נשלח – הולך, מצוּוה – מדבר; בירמיהו בפי האל המקדש נביא, כאן בפי האשף על עצמו, כשליח האל (62). |
| 62 | ana lēt kaššāpīya u kaššāptīya asalluhi bēl āšipūti išpuranni | אל לחי מכשפי ומכשפתי – אֲסַלּוּחִי, אדון האשפות, שלח אותי. | `וַיִּמְצָאֵם עֶשֶׂר יָדוֹת עַל כָּל הַחַרְטֻמִּים הָאַשָּׁפִים` (דניאל א:כ) | cognate | *āšipu* = `אַשָּׁף`, והמקרא מכיר את המלה רק בבבל (דניאל). |
| 63 | ša šamê qūlā ša erṣeti šimâ | אשר בשמים – האזינו, אשר בארץ – שמעו! | `הַאֲזִינוּ הַשָּׁמַיִם וַאֲדַבֵּרָה וְתִשְׁמַע הָאָרֶץ אִמְרֵי פִי` (דברים לב:א); `שִׁמְעוּ שָׁמַיִם וְהַאֲזִינִי אֶרֶץ` (ישעיהו א:ב) | equivalent | **השמים והארץ מוזמנים להאזין ולשמוע**, באותם שני פעלים (*šemû* = `שמע` [cognate]; *qâlu* = `האזין` |
| 63 | ša šamê qūlā ša erṣeti šimâ | אשר בשמים – האזינו, אשר בארץ – שמעו! | `אִמְרֵי פִי` (דברים לב:א) | equivalent | ), ובשירת האזינו גם  (השוו 64, *šimâ pīya*) |
| 63 | ša šamê qūlā ša erṣeti šimâ | אשר בשמים – האזינו, אשר בארץ – שמעו! | `יִקְרָא אֶל־הַשָּׁמַיִם מֵעָל וְאֶל־הָאָרֶץ לָדִין עַמּוֹ` (תהלים נ:ד) | equivalent | השמים והארץ נקראים כעדים **למשפט**, בדיוק כמו כאן. |
| 63 | ša šamê qūlā ša erṣeti šimâ | אשר בשמים – האזינו, אשר בארץ – שמעו! | `יִקְרָא אֶל־הַשָּׁמַיִם מֵעָל וְאֶל־הָאָרֶץ לָדִין עַמּוֹ` (תהלים נ:ד) | divergence | במקרא שמים וארץ הם עדי הברית בין האל לעמו; כאן הם עדים במשפט של אדם נגד מכשפיו. |
| 64 | ša nāri qūlāni ša nābali šimâ pīya | אשר בנהר – האזינו לי, אשר ביבשה – שמעו את פי! | `וְתִשְׁמַע הָאָרֶץ אִמְרֵי פִי` (דברים לב:א) | equivalent | ראו 63. |
| 65 | šāru nāziqu turruk ē tallik | הרוח השורקת – *הוּכְּתָה*; אל תלכי! | `שֶׁמֶשׁ בְּגִבְעוֹן דּוֹם וְיָרֵחַ בְּעֵמֶק אַיָּלוֹן` (יהושע י:יב) | equivalent | איש מצווה על כוחות הטבע לעמוד; ראו 67. |
| 67 | lizzīz harrānu mārat ilī rabûti | תעמוד האורח, בת האלים הגדולים, | `וַיִּדֹּם הַשֶּׁמֶשׁ וְיָרֵחַ עָמָד עַד יִקֹּם גּוֹי אֹיְבָיו` (יהושע י:יג); `שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה` (חבקוק ג:יא) | equivalent | העולם "עומד" עד שתושלם פעולת הדין |
| 67 | lizzīz harrānu mārat ilī rabûti | תעמוד האורח, בת האלים הגדולים, | `וַיִּדֹּם הַשֶּׁמֶשׁ וְיָרֵחַ עָמָד עַד יִקֹּם גּוֹי אֹיְבָיו` (יהושע י:יג); `שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה` (חבקוק ג:יא) | divergence | אצל יהושע עומדים השמש והירח עד שינקום העם באויביו, וכאן עומדת הדרך עד שיגמור השליח את עדותו (68). |
| 70 | amāssunu lippašer-ma amātī lā ippaššar | דברם יוּתַּר, ודברי לא יוּתַּר. | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ` (תהלים ז:יז) | equivalent | דבר הרשע מתבטל ונופל עליו, ראו 28. |
| 78 | ṣalmū rāhîya u rāhītīya | צלמי מְעַבְּרִי וּמְעַבַּרְתִּי, | `שׁוֹרוֹ עִבַּר וְלֹא יַגְעִל` (איוב כא:י) | equivalent | `עִבֵּר` "הזריע". |
| 81 | ṣalmū bēl rīdīya u bēlet rīdīya | צלמי בעל רדיפתי ובעלת רדיפתי, | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם` (תהלים יח:לח) | equivalent | הרדיפה, ראו 95. |
| 84 | ṣalmū bēl dabābīya u bēlet dabābīya | צלמי בעל ריבי ובעלת ריבי, | `רִיבָה רִיבִי וּגְאָלֵנִי` (תהלים קיט:קנד) | equivalent | "בעל ריבי" הוא היריב בריב המשפטי. |
| 86 | ṣalmū bēl lemuttīya u bēlet lemuttīya | צלמי בעל רעתי ובעלת רעתי, | `יִסֹּגוּ אָחוֹר וְיַחְפְּרוּ חֹשְׁבֵי רָעָתִי` (תהלים לה:ד) | equivalent | "רעתי": הרעה המכוונת אליי. |
| 87 | ša attā nuska dayyānu tīdēšunūti-ma anāku lā īdēšunūti | אשר אתה, נוסכו הדיין, יודע אותם, ואני איני יודע אותם, | `הַנִּסְתָּרֹת לַיהוָה אֱלֹהֵינוּ; וְהַנִּגְלֹת לָנוּ` (דברים כט:כח) | equivalent | הנסתר ידוע לאל בלבד. |
| 88 | ša kišpī ruhê rusî upšāšê lemnūti | אשר כשפים, ריר, כבל, מזימות רעות, | `עֹשֶׂה מְזִמּוֹת` (תהלים לז:ז) | equivalent | *upšāšû* = `מזימות` (`../renderings.md` §2.2). |
| 90 | dibalâ zikurudâ kadabbedâ šurhungâ | עיוות דין, זִיקוּרוּדָא, סתימת פה, השקטת חמה, | `הַאֵל יְעַוֵּת מִשְׁפָּט` (איוב ח:ג) | equivalent | "עיוות דין". |
| 91 | šabalbalê ṣūd pānī u šanê ṭēmu | שַׁבַּלְבַּלּוּ, סחרחורת פנים ושינוי טעם | `וַיְשַׁנּוֹ אֶת טַעְמוֹ בְּעֵינֵיהֶם` (שמואל א כא:יד); `בְּשַׁנּוֹתוֹ אֶת־טַעְמוֹ לִפְנֵי אֲבִימֶלֶךְ` (תהלים לד:א) | cognate | *šanê ṭēmi* הוא בדיוק "שינוי טעם" של דוד המתחזה למשוגע: שתי המלים קרובות, והמשמעות ("שיגעון") זהה. |
| 92 | ēpušū[ni] uštēpišūni ishurūni ušashirūni | עָשׂוּ לי, עִשּׂוּ לי, סובבו אותי, הֵסַבּוּ עליי – | `כִּי סְבָבוּנִי כְּלָבִים עֲדַת מְרֵעִים הִקִּיפוּנִי` (תהלים כב:יז) | equivalent | הסובל שהרשעים "סובבים" אותו |
| 92 | ēpušū[ni] uštēpišūni ishurūni ušashirūni | עָשׂוּ לי, עִשּׂוּ לי, סובבו אותי, הֵסַבּוּ עליי – | `וַיַּסֵּב אֲרוֹן יְהוָה אֶת הָעִיר` (יהושע ו:יא) | equivalent | ההפעיל של סבב, "גרם להקיף", כמו ה־Š הבבלי. |
| 95 | attā nuska dayyānu kāšid lemni u ayyābi kušussunūti-ma anāku lā ahhabbil | אתה, נוסכו הדיין, משיג רע ואויב – השג אותם, ואני לא אֵחָבֵל! | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם וְלֹא־אָשׁוּב עַד־כַּלּוֹתָם` (תהלים יח:לח) | equivalent | `השיג` את האויבים |
| 95 | attā nuska dayyānu kāšid lemni u ayyābi kušussunūti-ma anāku lā ahhabbil | אתה, נוסכו הדיין, משיג רע ואויב – השג אותם, ואני לא אֵחָבֵל! | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם וְלֹא־אָשׁוּב עַד־כַּלּוֹתָם` (תהלים יח:לח) | cognate | *habālu* = `חבל` (`../renderings.md` §2.2). |
| 96 | ša ṣalmīya ibnû bunnannîya umaššilū | אשר את צלמיי בנו, את תוארי הִמְשִׁילוּ, | `וַיֹּאמֶר לָהּ מַה תָּאֳרוֹ` (שמואל א כח:יד) | cognate | *bunnannû* = `תֹּאַר` (`../renderings.md` §2.3), "תואר" הדמות שבעלת האוב מתארת |
| 96 | ša ṣalmīya ibnû bunnannîya umaššilū | אשר את צלמיי בנו, את תוארי הִמְשִׁילוּ, | `וְתַמְשִׁלוּנִי וְנִדְמֶה` (ישעיהו מו:ה) | cognate | *mašālu* D = `המשיל`: לעשות דמות דומה, ובישעיהו בדיוק בהקשר של פסלים |
| 96 | ša ṣalmīya ibnû bunnannîya umaššilū | אשר את צלמיי בנו, את תוארי הִמְשִׁילוּ, | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | cognate | *banû* = `בנה` כפועל יצירת גוף |
| 96 | ša ṣalmīya ibnû bunnannîya umaššilū | אשר את צלמיי בנו, את תוארי הִמְשִׁילוּ, | `וַיּוֹלֶד בִּדְמוּתוֹ כְּצַלְמוֹ` (בראשית ה:ג) | divergence | הצלם כהעתק של אדם: שם – בן, כאן – פסלון לכשף. |
| 98 | irtī idʾipū eṣenṣērī ikpupū | דחקו את חזי, כפפו את שדרתי, | `כָּפַף נַפְשִׁי` (תהלים נז:ז) | cognate | *kapāpu* = `כפף`, והאויבים הם שכופפים את המתפלל (שם: ברשת שהכינו לרגליו). |
| 99 | libbī unnišū nīš libbīya iṣbatū | החלישו את לבי, אחזו את נשיאת לבי, | `כָּל אִישׁ אֲשֶׁר נְשָׂאוֹ לִבּוֹ` (שמות לה:כא) | cognate | "נשיאת הלב" = הרצון, החשק (*nīšu* מן *našû* = `נשא`). |
| 101 | ahīya išpukū birkīya iksû | שפכו את זרועותיי, אסרו את ברכיי, | `כַּמַּיִם נִשְׁפַּכְתִּי וְהִתְפָּרְדוּ כָּל־עַצְמוֹתָי` (תהלים כב:טו) | cognate | הגוף ה"נשפך" כמים, ברפיון; *šapāku* = `שפך` (`../renderings.md`, קורפוס הנבואה) |
| 101 | ahīya išpukū birkīya iksû | שפכו את זרועותיי, אסרו את ברכיי, | `חַזְּקוּ יָדַיִם רָפוֹת וּבִרְכַּיִם כֹּשְׁלוֹת אַמֵּצוּ` (ישעיהו לה:ג) | equivalent | הידיים והברכיים הרפות. |
| 102 | ummu mangu luʾtu umallûʾinni | חום, נוקשות ורפיון מילאו אותי, | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת וּבַדַּלֶּקֶת` (דברים כח:כב) | equivalent | רשימת מחלות; שם מכות האל, כאן מעשי המכשפים. |
| 103 | aklī kaššāpūti ušākilūʾinni | האכילו אותי לחם מכושף, | `הִנְנִי מַאֲכִילָם אֶת הָעָם הַזֶּה לַעֲנָה; וְהִשְׁקִיתִים מֵי רֹאשׁ` (ירמיהו ט:יד) | equivalent | האכלה והשקאה של מזון מורעל, כעונש מן האל; כאן – כשף. |
| 104 | mê kaššāpūti išqûʾinni | השקו אותי מים מכושפים, | `וְהִשְׁקָה אֶת הָאִשָּׁה אֶת מֵי הַמָּרִים הַמְאָרְרִים` (במדבר ה:כד) | divergence | מים "מְאָרְרִים" שמשקים כדי שיפעלו בגוף; אבל בתורת הסוטה הכהן הוא שמשקה, בפולחן גלוי, והמים בודקים אשמה; כאן המכשפים משקים בסתר. *šaqû* = `השקה` |
| 104 | mê kaššāpūti išqûʾinni | השקו אותי מים מכושפים, | `וְהִשְׁקָה אֶת הָאִשָּׁה אֶת מֵי הַמָּרִים הַמְאָרְרִים` (במדבר ה:כד) | cognate |  |
| 107 | ana mīti ihīrūʾinni | למת אֵרְשׂוּ אותי, | `וְאֵרַשְׂתִּיךְ לִי לְעוֹלָם` (הושע ב:כא) | equivalent | האירוסין כקשר מחייב |
| 107 | ana mīti ihīrūʾinni | למת אֵרְשׂוּ אותי, | `לְהָמִית נְפָשׁוֹת אֲשֶׁר לֹא תְמוּתֶנָה` (יחזקאל יג:יט) | divergence | הנשים ה"צדות נפשות" בכשפיהן; כאן הכשף "משדך" את החי למת. |
| 108 | mê napištīya ina qabri ušnillū | את מי חיי בקבר השכיבו, | — | cognate | *qabru* = `קבר` (`../renderings.md` §4). |
| 109 | ila šarra kabta u rubâ ittīya uzannû | את אֵל, מלך, נכבד ושר הֶאֱנִיפוּ עליי. | `יְרָא־אֶת־יְהוָה בְּנִי וָמֶלֶךְ` (משלי כד:כא) | equivalent | הצמד אל ומלך, מקורות החסד והאיבה. |
| 110 | attā girra qāmû kaššāpi u kaššāpti | אתה, גִּירָה, המבער מכשף ומכשפה, | `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` (דברים יג:ו) | equivalent | *qamû* = `בִּעֵר` (`../renderings.md` §5): הביעור של הרע; אבל בדברים הביעור הוא הריגה בדין, וכאן הוא שרפה ממש. |
| 111 | muhalliq raggī zēr kaššāpi u kaššāpti | מאבד הרשעים, זרע מכשף ומכשפה, | `וְזֶרַע רְשָׁעִים נִכְרָת` (תהלים לז:כח) | equivalent | "זרע" הרשעים נכרת. |
| 113 | anāku alsīka kīma šamaš dayyāni | אני צעקתי אליך כשַׁמַשׁ הדיין: | `שָׁפְטֵנִי אֱלֹהִים וְרִיבָה רִיבִי` (תהלים מג:א) | equivalent | פנייה לאל כשופט. |
| 114 | dīnī dīni purussâya purus | דון את דיני, גזור את גזרתי! | `וּבִגְבוּרָתְךָ תְדִינֵנִי` (תהלים נד:ג) | cognate | ראו 14. |
| 116 | akul ayyābīya aruh lemnūtīya | אכול את אויביי, כלה את מרעיי! | `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` (דברים ד:כד) | equivalent | האש ה"אוכלת" כאל |
| 116 | akul ayyābīya aruh lemnūtīya | אכול את אויביי, כלה את מרעיי! | `וַתֵּצֵא אֵשׁ מִלִּפְנֵי יְהוָה וַתֹּאכַל אוֹתָם` (ויקרא י:ב) | equivalent |  |
| 117 | ūmka ezzu likšussunūti | סערתך הזועמת תשיג אותם! | `כֵּן תִּרְדְּפֵם בְּסַעֲרֶךָ` (תהלים פג:טז) | equivalent | סערת האל הרודפת את האויבים. |
| 118 | kīma mê nādi ina tīki liqtû | כמי נאד – בטפטוף יִכְלוּ! | `שִׂימָה דִמְעָתִי בְנֹאדֶךָ` (תהלים נו:ט) | cognate | *nādu* = `נֹאד` |
| 118 | kīma mê nādi ina tīki liqtû | כמי נאד – בטפטוף יִכְלוּ! | `יִמָּאֲסוּ כְמוֹ־מַיִם יִתְהַלְּכוּ־לָמוֹ` (תהלים נח:ח); `לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | equivalent | הרשעים נגמרים כמים ההולכים לאיבוד, ובאותו מזמור . |
| 119 | kīma tirik abnī ubānātīšunu liktaṣṣiṣū | כמכת אבנים – יקוצצו אצבעותיהם! | `וַיְקַצְּצוּ אֶת בְּהֹנוֹת יָדָיו וְרַגְלָיו` (שופטים א:ו); `כַּאֲשֶׁר עָשִׂיתִי כֵּן שִׁלַּם לִי אֱלֹהִים` (שופטים א:ז) | cognate | *kaṣāṣu* = `קצץ`, ובשני הטקסטים – אצבעות; ובשופטים א:ז אדוני בזק מבין שזה גמול על מעשיו (): אותו עיקרון של מידה כנגד מידה. |
| 120 | ina qibītīka ṣīrti ša lā uttakkaru | באמרתך הנעלה, אשר לא תשונה, | `דִּי לָא לְהַשְׁנָיָה כְּדָת מָדַי וּפָרַס דִּי לָא תֶעְדֵּא` (דניאל ו:ט) | equivalent | הגזירה שאינה משתנה |
| 120 | ina qibītīka ṣīrti ša lā uttakkaru | באמרתך הנעלה, אשר לא תשונה, | `כִּי אֲנִי יְהוָה לֹא שָׁנִיתִי` (מלאכי ג:ו) | equivalent |  |
| 123 | tamšīl abi bukur enlil | תבנית האב, בכור אֶנְלִיל, | `וַיּוֹלֶד בִּדְמוּתוֹ כְּצַלְמוֹ` (בראשית ה:ג) | equivalent | הבן כדמות אביו. |
| 124 | tarbīt apsî binût enanki | תַּרְבּוּת האַפְּסוּ, מבנה אֶנַנְקִי. | `תַּרְבּוּת אֲנָשִׁים חַטָּאִים` (במדבר לב:יד) | cognate | *tarbītu* (מן *rabû*) = `תַּרְבּוּת`, "גידול, צאצאים" (מנוקד: בלי ניקוד – "תרבות" של ימינו). |
| 126 | kaššāpu ikšipanni kišpī ikšipanni kišipšu | מכשף כִּשֵּׁף אותי – בכשפים אשר כִּשֵּׁף אותי, כַּשְּׁפֵהוּ! | `כַּאֲשֶׁר עָשִׂיתָ יֵעָשֶׂה לָּךְ גְּמֻלְךָ יָשׁוּב בְּרֹאשֶׁךָ` (עובדיה א:טו) | equivalent | **מידה כנגד מידה** באותו פועל ("עשה", ראו 128–130) |
| 126 | kaššāpu ikšipanni kišpī ikšipanni kišipšu | מכשף כִּשֵּׁף אותי – בכשפים אשר כִּשֵּׁף אותי, כַּשְּׁפֵהוּ! | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | equivalent |  |
| 126 | kaššāpu ikšipanni kišpī ikšipanni kišipšu | מכשף כִּשֵּׁף אותי – בכשפים אשר כִּשֵּׁף אותי, כַּשְּׁפֵהוּ! | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | cognate | *kašāpu* = `כשף` (ראו 4). |
| 128 | ēpišu īpušanni ipšū īpušanni epussu | עוֹשֶׂה עשה לי – במעשים אשר עשה לי, עֲשֵׂה לו! | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | cognate | אותו פועל (*epēšu* ~ עשה במשמעות), באותה מבנה של גמול. |
| 131 | ša ṣalmī ana pī ṣalmīya ibnû bunnannîya umaššilū | אשר צלמים לפי צלמיי בנו, את תוארי הִמְשִׁילוּ, | `מַה תָּאֳרוֹ` (שמואל א כח:יד) | cognate | ראו 96. |
| 132 | ruʾtī ilqû šārtī imlusū | לקחו את רוקי, מרטו את שערי, | `וָאֶמְרְטָה מִשְּׂעַר רֹאשִׁי וּזְקָנִי` (עזרא ט:ג) | equivalent | מריטת שער (שם באבל, כאן בכשף) |
| 132 | ruʾtī ilqû šārtī imlusū | לקחו את רוקי, מרטו את שערי, | `וָאֶמְרְטָה מִשְּׂעַר רֹאשִׁי וּזְקָנִי` (עזרא ט:ג) | cognate | *leqû* = `לקח` (`../renderings.md` §2.1). |
| 133 | sissiktī ibtuqū etequ eper šēpīya išbušū | בִּתְּקוּ את כנפי, אספו את עפר חֲלוֹף רגליי, | `עַל אֲשֶׁר כָּרַת אֶת כָּנָף אֲשֶׁר לְשָׁאוּל` (שמואל א כד:ה) | equivalent | **כריתת הכנף**: דוד כורת את כנף מעיל שאול, ולבו מכה אותו – כי כנף הבגד היא האדם עצמו |
| 133 | sissiktī ibtuqū etequ eper šēpīya išbušū | בִּתְּקוּ את כנפי, אספו את עפר חֲלוֹף רגליי, | `וּבִתְּקוּךְ בְּחַרְבוֹתָם` (יחזקאל טז:מ) | cognate | *batāqu* = `בתק` "לחתוך". |
| 135 | EN₂ anašši dipāru ṣalmīšunu aqallu | קסם. נושא אני לַפִּיד, את צלמיהם קולה אני, | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | cognate | *qalû* = `קלה`, וגם בירמיהו מלך בבל "קולה" אנשים באש |
| 135 | EN₂ anašši dipāru ṣalmīšunu aqallu | קסם. נושא אני לַפִּיד, את צלמיהם קולה אני, | `הִנֵּה הָיוּ כְקַשׁ אֵשׁ שְׂרָפָתַם` (ישעיהו מז:יד); `וּבְרֹב כְּשָׁפַיִךְ` (ישעיהו מז:יב) | equivalent | מכשפי בבל () נשרפים באש. |
| 136 | ša utukku šēdu rābiṣu eṭemmu | של אוּטוּכּוּ, שֵׁדוּ, רוֹבֵץ, אִט, | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | cognate | *rābiṣu* "האורב (בפתח)" = `רֹבֵץ`, השד האורב, והחטאת של קין "רובצת" בפתח כמותו |
| 136 | ša utukku šēdu rābiṣu eṭemmu | של אוּטוּכּוּ, שֵׁדוּ, רוֹבֵץ, אִט, | `וְדָרְשׁוּ אֶל הָאֱלִילִים וְאֶל הָאִטִּים וְאֶל הָאֹבוֹת` (ישעיהו יט:ג) | cognate | *eṭemmu* = `אִט`, רוח המת שאליה פונים לשאול |
| 136 | ša utukku šēdu rābiṣu eṭemmu | של אוּטוּכּוּ, שֵׁדוּ, רוֹבֵץ, אִט, | `יִזְבְּחוּ לַשֵּׁדִים לֹא אֱלֹהַ` (דברים לב:יז) | cognate | *šēdu* הוא הקרוב של `שֵׁד`. |
| 138 | lilû lilītu ardat-lilî | לִילוּ, לִילִיתוּ, עַלְמַת־לִילוּ, | `אַךְ שָׁם הִרְגִּיעָה לִּילִית וּמָצְאָה לָהּ מָנוֹחַ` (ישעיהו לד:יד) | cognate | *lilītu* היא `לִילִית` של ישעיהו: אותה שדה, באותו שם, ובשני המקומות היא שוכנת במקומות שוממים. |
| 139b | [ša ana lemutti] ikpudūn[i] yâši | [אשר לרעה] חשבו [עליי] עצמי: | `וְאַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) | equivalent | אותו צירוף: "חשבו עליי לרעה" (`../renderings.md` §2.2: *kapādu* = `חשב`). |
| 140 | hūlā zūbā u itattukā | המסו, זובו והנתכו! | `כְּהִמֵּס דּוֹנַג מִפְּנֵי־אֵשׁ יֹאבְדוּ רְשָׁעִים` (תהלים סח:ג); `וְנָמַסּוּ הֶהָרִים תַּחְתָּיו … כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | equivalent | הצלמים של חֵלֶב ושל דונג נמסים באש, כמו הרשעים במזמור |
| 140 | hūlā zūbā u itattukā | המסו, זובו והנתכו! | `וְהִנַּחְתִּי וְהִתַּכְתִּי אֶתְכֶם` (יחזקאל כב:כ) | cognate | *natāku* = `נתך`, וגם שם האל "מתיך" את הרשעים באש כמו מתכת בכור |
| 140 | hūlā zūbā u itattukā | המסו, זובו והנתכו! | `וְהִנַּחְתִּי וְהִתַּכְתִּי אֶתְכֶם` (יחזקאל כב:כ) | cognate | *zâbu* = `זוב`. |
| 141 | quturkunu lītelli šamê | קיטורכם יעלה השמימה, | `וְהִנֵּה עָלָה קִיטֹר הָאָרֶץ כְּקִיטֹר הַכִּבְשָׁן` (בראשית יט:כח) | cognate | *qutru* = `קִיטוֹר`, ו*elû* "לעלות" = `עלה`: אותו צירוף, "עלה הקיטור", בשרפת סדום ועמורה (שם גם הגפרית, בראשית יט:כד, כמו הגפרית שבה מדליקים את הלפיד, RT 9'). |
| 142 | laʾmīkunu liballi šamši | את גחלתכם תכבה הַשֶּׁמֶשׁ, | `אֵין גַּחֶלֶת לַחְמָם אוּר לָשֶׁבֶת נֶגְדּוֹ` (ישעיהו מז:יד) | equivalent | בנבואה על **מכשפי בבל**: לא תישאר מהם גחלת; *laʾmu* = `גחלת` (`../renderings.md` §5). |
| 143 | liprus hayyattakunu mār ea mašmaššu TU₆ EN₂ | יגזור את אימתכם בן אֵאָה, המלחש – לחש, קסם. | `אֲשֶׁר לֹא־יִשְׁמַע לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | equivalent | *mašmaššu* = `מלחש` (`../renderings.md` §3). |

### Parallels index (II)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | mukīn māhāzī muddišu parakkī | מכונן המחוזות, מחדש הדוכנים, | — | cognate | *kânu* D = `כונן`, *edēšu* D = `חידש` |
| 3 | mukīn māhāzī muddišu parakkī | מכונן המחוזות, מחדש הדוכנים, | `חַדֵּשׁ יָמֵינוּ כְּקֶדֶם` (איכה ה:כא) | cognate | (). |
| 5 | sukkal ani šēmû pirišti enlil | וזיר אָנוּ, שומע סוד אֶנְלִיל, | `כִּי לֹא יַעֲשֶׂה אֲדֹנָי יְהוִה דָּבָר כִּי אִם גָּלָה סוֹדוֹ אֶל עֲבָדָיו הַנְּבִיאִים` (עמוס ג:ז) | equivalent | מי ששומע את סוד האל. |
| 6 | šēmû enlil māliku šadû igigī | שומע אנליל, היועץ, הר האיגיגי, | `יְהוָה סַלְעִי וּמְצוּדָתִי` (תהלים יח:ג) | equivalent | האל כסלע, כהר מבצר. |
| 8 | nuska āriru mušabriq zayyāri | נוסכו היוקד, המבריק על השונאים. | `בְּרוֹק בָּרָק וּתְפִיצֵם` (תהלים קמד:ו) | cognate | *barāqu* = `ברק`: האל שמבריק ברק על האויבים. |
| 10 | ina balīka ilū rabûtu ul iṣṣinū qutrinnu | בלעדיך האלים הגדולים לא יריחו קטורת, | `וַיָּרַח יְהוָה אֶת רֵיחַ הַנִּיחֹחַ` (בראשית ח:כא) | equivalent | האל המריח את הקרבן. |
| 11 | ina balīka šamaš dayyānu ul idâni dīnu | בלעדיך שַׁמַשׁ הדיין לא ידון דין. | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | equivalent | האל השופט; *diānu* / *dīnu* = `דין` |
| 11 | ina balīka šamaš dayyānu ul idâni dīnu | בלעדיך שַׁמַשׁ הדיין לא ידון דין. | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | cognate |  |
| 12 | hāsis šumēka teṭṭer ina dannati tagammil ina pušqi | את הזוכר את שמך – תציל ממצוקה, תחמול במצר. | `וַיִּצְעֲקוּ אֶל־יְהוָה בַּצַּר לָהֶם מִמְּצוּקוֹתֵיהֶם יַצִּילֵם` (תהלים קז:ו); `מִן־הַמֵּצַר קָרָאתִי יָּהּ` (תהלים קיח:ה) | equivalent | "מצוקה" ו"מצר" כמו *dannatu* ו*pušqu* |
| 12 | hāsis šumēka teṭṭer ina dannati tagammil ina pušqi | את הזוכר את שמך – תציל ממצוקה, תחמול במצר. | `אֲשַׂגְּבֵהוּ כִּי־יָדַע שְׁמִי` (תהלים צא:יד) | equivalent | האל מציל את מי שמכיר את שמו. |
| 13 | anāku aradka annanna mār annanna ša ilšu annanna ištaršu annannītu | אני, עבדך, פלוני בן פלוני, שאֵלוֹ פלוני ואֵלָתוֹ פלונית, | `סוּרָה שְׁבָה פֹּה פְּלֹנִי אַלְמֹנִי` (רות ד:א) | equivalent | "פלוני" במקום שם (`../renderings.md` §3) |
| 13 | anāku aradka annanna mār annanna ša ilšu annanna ištaršu annannītu | אני, עבדך, פלוני בן פלוני, שאֵלוֹ פלוני ואֵלָתוֹ פלונית, | `אֲנִי־עַבְדְּךָ בֶּן־אֲמָתֶךָ` (תהלים קטז:טז) | equivalent | המתפלל מציג את עצמו כעבד האל וכבן הוריו. |
| 14 | ashurka ešʾēka bašâ uznāya šapalka akmis | סבותי אליך, ביקשתיך, יֶשְׁנָן אוזניי (אליך), למרגלותיך כרעתי: | `בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה` (תהלים צה:ו) | equivalent | הכריעה לפני האל. |
| 16 | ša kaššāpīya u kaššāptīya [a]rhiš hanṭiš napištašunu liblē-ma | של מכשפי ומכשפתי – מהרה, חיש, יכבו חייהם, | `כִּי־גָז חִישׁ וַנָּעֻפָה` (תהלים צ:י) | equivalent | `חִישׁ`, מהירות הכלייה. |
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את תפארתך אפאר! | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה); `לֹא־אָמוּת כִּי־אֶחְיֶה וַאֲסַפֵּר מַעֲשֵׂי יָהּ` (תהלים קיח:יז) | equivalent | **חיים תמורת הלל**: המתפלל מבטיח לספר את גדולת האל אם יחיה |
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את תפארתך אפאר! | `הֲיוֹדְךָ עָפָר הֲיַגִּיד אֲמִתֶּךָ` (תהלים ל:י) | equivalent | אותו היגיון בצורת שאלה: המת אינו מהלל. |
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את תפארתך אפאר! | `הֲיוֹדְךָ עָפָר הֲיַגִּיד אֲמִתֶּךָ` (תהלים ל:י) | cognate | *balāṭu* D = `חִיָּה` (`../renderings.md` §2.4). |
| 19 | EN₂ girra bēlu gitmālu nannārāta nabi šumka | קסם. גִּירָה, האדון המושלם – "נַנָּרוּ אתה" נקרא שמך, | `וַיִּקְרָא שְׁמוֹ פֶּלֶא יוֹעֵץ אֵל גִּבּוֹר` (ישעיהו ט:ה) | equivalent | שם שהוא תואר, "נקרא שמו"; *nabû* = `קרא` (`../renderings.md` §10.1: `קָרָא` שמור ל־*nabû*, וזה מקומו הראשון במקלו) |
| 19 | EN₂ girra bēlu gitmālu nannārāta nabi šumka | קסם. גִּירָה, האדון המושלם – "נַנָּרוּ אתה" נקרא שמך, | `אֶת הַמָּאוֹר הַגָּדֹל לְמֶמְשֶׁלֶת הַיּוֹם וְאֶת הַמָּאוֹר הַקָּטֹן לְמֶמְשֶׁלֶת הַלַּיְלָה` (בראשית א:טז) | equivalent | *nannāru* "המאור" הוא בבבלית גם כינוי הירח. |
| 25 | ana nūrīka namri nišū kalîšina upaqqāka | לאורך הזוהר – האנשים כולם מייחלים לך; | `עֵינֵי־כֹל אֵלֶיךָ יְשַׂבֵּרוּ` (תהלים קמה:טו) | equivalent | כל הבריות מייחלות לאל. |
| 27 | bēlu sissiktaka aṣbat | אדון, בכנפך אחזתי, | `וְהֶחֱזִיקוּ בִּכְנַף אִישׁ יְהוּדִי לֵאמֹר נֵלְכָה עִמָּכֶם` (זכריה ח:כג) | equivalent | **האחיזה בכנף כבקשת חסות**, באותה מחווה |
| 27 | bēlu sissiktaka aṣbat | אדון, בכנפך אחזתי, | `וּפָרַשְׂתָּ כְנָפֶךָ עַל אֲמָתְךָ` (רות ג:ט) | equivalent | הכנף כחסות |
| 27 | bēlu sissiktaka aṣbat | אדון, בכנפך אחזתי, | `עַל אֲשֶׁר כָּרַת אֶת כָּנָף אֲשֶׁר לְשָׁאוּל` (שמואל א כד:ה) | divergence | הכנף כאדם עצמו: כאן אוחזים בה, שם כורתים אותה (וכך המכשפים ב־I 133). |
| 31 | [ ... ] r[ēm]anni bēlu kaššāptu kīma lilissi iltasi elīya | […] רַחֵם עליי, אדון! המכשפה כתוף צעקה עליי, | `פָּצוּ עָלַי פִּיהֶם אַרְיֵה טֹרֵף וְשֹׁאֵג` (תהלים כב:יד) | equivalent | האויב השואג על הסובל. |
| 51 | ša ana mīti puqqudūʾinni namrāṣa kullumūʾinni | אשר למת הפקידו אותי, מעקשים הראו לי – | `בְּיָדְךָ אַפְקִיד רוּחִי` (תהלים לא:ו) | cognate | *paqādu* = `הפקיד` (`../renderings.md` §2.3) – , אבל כאן במובן הפוך: מסירת האדם בידי מת. |
| 54 | lū ilu lemnu lū rābiṣu lemnu | בין אֵל רע, בין רוֹבֵץ רע, | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | cognate | *rābiṣu* = `רוֹבֵץ` (ראו I 136). |
| 56 | lū lilû lū lilītu lū ardat-lilî | בין לִילוּ, בין לִילִיתוּ, בין עַלְמַת־לִילוּ, | `אַךְ שָׁם הִרְגִּיעָה לִּילִית` (ישעיהו לד:יד) | cognate | *lilītu* = `לִילִית` של ישעיהו (בתרגום בתעתיק, `../renderings.md` §10.1). |
| 60 | lū šudingirrakku lū š[uʾinannakku] | בין יַד־אֵל, בין יַד־[אֵלָה], | `כָּבְדָה מְאֹד יַד הָאֱלֹהִים שָׁם` (שמואל א ה:יא) | equivalent | המגפה כ"יד האל". |
| 69 | kal mūši lā umaššaranni | כל הלילה אינו משלח אותי. | `שַׁלְּחֵנִי כִּי עָלָה הַשָּׁחַר; וַיֹּאמֶר לֹא אֲשַׁלֵּחֲךָ` (בראשית לב:כז) | equivalent | האחיזה בלילה, וה"שילוח" שתלוי בשחר; *wuššuru* = `שִׁלַּח` (`שַׁלְּחִינִי`, קורפוס העולם התחתון). |
| 69 | kal mūši lā umaššaranni | כל הלילה אינו משלח אותי. | `שַׁלְּחֵנִי כִּי עָלָה הַשָּׁחַר; וַיֹּאמֶר לֹא אֲשַׁלֵּחֲךָ` (בראשית לב:כז) | divergence | אצל יעקב האדם אוחז באל ואינו משלחו; כאן כוח רע אוחז באדם כל הלילה, ורק השחר (וגירה) ישחררו אותו. |
| 71 | ina kibrīti elleti aqallīšunūti ašarrapšunūti | בגפרית טהורה קולה אני אותם, שורף אני אותם. | `יְזֹרֶה עַל־נָוֵהוּ גָפְרִית` (איוב יח:טו) | cognate | *kibrītu* = `גָּפְרִית`, והגפרית על משכנו של הרשע |
| 71 | ina kibrīti elleti aqallīšunūti ašarrapšunūti | בגפרית טהורה קולה אני אותם, שורף אני אותם. | `וַיהוָה הִמְטִיר עַל סְדֹם וְעַל עֲמֹרָה גָּפְרִית וָאֵשׁ` (בראשית יט:כד) | cognate | *šarāpu* = `שרף` |
| 71 | ina kibrīti elleti aqallīšunūti ašarrapšunūti | בגפרית טהורה קולה אני אותם, שורף אני אותם. | `וַיהוָה הִמְטִיר עַל סְדֹם וְעַל עֲמֹרָה גָּפְרִית וָאֵשׁ` (בראשית יט:כד) | cognate |  |
| 72 | naplisanni-ma bēlu usuhšunūti ina zumrīya | הבט אליי, אדון, ונסח אותם מגופי, | `יַחְתְּךָ וְיִסָּחֲךָ מֵאֹהֶל` (תהלים נב:ז) | cognate | *nasāhu* = `נסח` (`../../translation-guidelines.md` §6.7). |
| 74 | attā girra bēlu ālik idīya | אתה, גִּירָה, האדון ההולך לצדי: | `יְהוָה צִלְּךָ עַל־יַד יְמִינֶךָ` (תהלים קכא:ה); `כִּי־אַתָּה עִמָּדִי` (תהלים כג:ד) | equivalent | האל ההולך לצד האדם ושומר עליו. |
| 75 | bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | חַיֵּנִי, ואת גדולתך אגלה, את תפארתך אפאר! | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה) | equivalent | ראו 17. |
| 79 | eklēti tušnammar | את החשכה מאיר אתה, | `יְהוָה אֱלֹהַי יַגִּיהַּ חָשְׁכִּי` (תהלים יח:כט) | equivalent | האל המאיר את החשכה. |
| 80 | ešâti dalhāti tušteššer | את הנבוכות והדלוחות מיישר אתה, | `וַהֲדוּרִים אֲוַשֵּׁר (אֲיַשֵּׁר)` (ישעיהו מה:ב) | cognate | *ešēru* = `ישר` |
| 80 | ešâti dalhāti tušteššer | את הנבוכות והדלוחות מיישר אתה, | `וַהֲדוּרִים אֲוַשֵּׁר (אֲיַשֵּׁר)` (ישעיהו מה:ב) | cognate | (`../renderings.md` §6: `דִּינִי יִישַׁר`). |
| 83 | attā-ma nādin ûrti u ṭēme | אתה הוא נותן צו והוראה. | `מִטַּעַם הַמֶּלֶךְ וּגְדֹלָיו` (יונה ג:ז) | equivalent | `טַעַם` הוא בעברית המקראית גם "צו", הקרוב של *ṭēmu*. |
| 86 | anāku [annanna mār annan]na ša ilšu annanna ištaršu annannītu | אני, [פלוני בן פלוני], שאֵלוֹ פלוני ואֵלָתוֹ פלונית, | `סוּרָה שְׁבָה פֹּה פְּלֹנִי אַלְמֹנִי` (רות ד:א) | equivalent |  |
| 87 | ina kišp[ī l]upputāku-ma maharka azzīz | בכשפים נגוע אני, ולפניך עמדתי, | `וַאֲנַחְנוּ חֲשַׁבְנֻהוּ נָגוּעַ מֻכֵּה אֱלֹהִים` (ישעיהו נג:ד) | equivalent | `נגוע`, האדם שנגע בו כוח (שם האל, כאן הכשף). |
| 89 | eli ām[erīy]a murruṣāku-ma šapalka akmis | בעיני [רואיי] הָחֳלֵיתִי, ולמרגלותיך כרעתי. | `הֲפֹךְ יָדְךָ וְהוֹצִיאֵנִי מִן הַמַּחֲנֶה כִּי הָחֳלֵיתִי` (מלכים א כב:לד) | equivalent | `הָחֳלֵיתִי`, הופעל של חלה: "נעשיתי חולה". |
| 93 | maharka uggeršunūti-ma kâša apqidka | לפניך שילבתי אותם, ולך עצמך הפקדתי (אותם). | — | cognate | *paqādu* = `הפקיד` (`../renderings.md` §2.3) – כאן ההיפוך של II 51: המכשפים הפקידו אותו למת, והוא מפקיד אותם בידי האש. |
| 94 | šunu limūtū-ma anāku lubluṭ | הם ימותו, ואני אחיה, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | ראו I 19. |
| 100 | anāku aradka lubluṭ lušlim-ma maharka luzzīz | אני, עבדך – אחיה, אֶשְׁלַם, ולפניך אעמוד: | — | cognate | *šalāmu* = `שלם` (קורפוס החכמה: השורש שמור ל־*šulmu* / *šalāmu*) |
| 100 | anāku aradka lubluṭ lušlim-ma maharka luzzīz | אני, עבדך – אחיה, אֶשְׁלַם, ולפניך אעמוד: | `אֶתְהַלֵּךְ לִפְנֵי יְהוָה בְּאַרְצוֹת הַחַיִּים` (תהלים קטז:ט) | equivalent | החיים כעמידה לפני האל. |
| 101 | attā-ma ilī attā-ma bēlī | אתה הוא אֵלִי, אתה הוא אדוני, | `אָמַרְתִּי לַיהוָה אֵלִי אָתָּה` (תהלים קמ:ז); `אֵלִי אַתָּה וְאוֹדֶךָּ` (תהלים קיח:כח); `אָמַרְתְּ לַיהוָה אֲדֹנָי אָתָּה` (תהלים טז:ב) | equivalent | אותה הודאה, "אלי אתה", "אדוני אתה", במזמורי תודה והצלה. |
| 102 | attā-ma dayyānī attā-ma rēṣūya | אתה הוא דייני, אתה הוא עוזרי, | `הִנֵּה אֱלֹהִים עֹזֵר לִי` (תהלים נד:ו) | equivalent |  |
| 103 | attā-ma muterru ša gimillīya TU₆ EN₂ | אתה הוא המשיב את גמולי – לחש, קסם. | `הִנָּשֵׂא שֹׁפֵט הָאָרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים` (תהלים צד:ב) | cognate | *gimilla turru* = `השיב גמול`, שתי המלים קרובות (`../../translation-guidelines.md` §6.7; גילגמש: `המשיב גמול אביו`). |
| 111 | girra quli kaššāpī u kaššāptī | גִּירָה, קלה את מכשפי ומכשפתי, | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | cognate | *qalû* = `קלה`. |
| 116 | girra šutābilšunūti | גִּירָה, הָנַע אותם! | `הֲנִיעֵמוֹ בְחֵילְךָ וְהוֹרִידֵמוֹ` (תהלים נט:יב) | equivalent | האל המטלטל את האויבים. |
| 118 | ša ana lemutti ikpudūni yâši | אשר לרעה חשבו עליי עצמי: | `וְאַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) | equivalent | *kapādu ana lemutti* = `חשב לרעה` (`../renderings.md` §2.2). |
| 119 | dannu makkūršunu šulqi | גרום לחזק לקחת את רכושם, | `יְנַקֵּשׁ נוֹשֶׁה לְכָל־אֲשֶׁר־לוֹ וְיָבֹזּוּ זָרִים יְגִיעוֹ` (תהלים קט:יא) | equivalent | **הקללה על רכושו של הרשע**: נושה וזרים בוזזים את כל אשר לו ואת יגיעו, כמו החזק, החוטף והשודד כאן (119–121). |
| 121 | eli manāhātīšunu habbāta šurbiṣ | על יגיעם הַרְבֵּץ שודד! | `וַאֲנִי אַרְבִּיצֵם` (יחזקאל לד:טו) | cognate | *rabāṣu* Š = `הִרְבִּיץ`; השורש של *rābiṣu*, `רוֹבֵץ` (I 136): השודד "רובץ" כמו השד האורב |
| 121 | eli manāhātīšunu habbāta šurbiṣ | על יגיעם הַרְבֵּץ שודד! | `וְיָבֹזּוּ זָרִים יְגִיעוֹ` (תהלים קט:יא) | equivalent |  |
| 124 | ina amāt ea bānîka u šamaš ilu namru | בדבר אֵאָה, בּוֹנְךָ, ושַׁמַשׁ, האל הזוהר, | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | cognate | *banû* = `בנה` כפועל יצירה (`../../translation-guidelines.md` §6.7). |
| 125 | sebet apkallū šūt eridu likpudūšunūti ana lemutti TU₆ EN₂ | שבעת החכמים של אֶרִידוּ יחשבו עליהם לרעה – לחש, קסם. | `וְאַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) | equivalent | ראו 118: מה שחשבו עליו – יחשבו עליהם. |
| 129 | tadâni dēn habli u habilti | דן אתה דין חבול וחבולה. | `יָדַעְתִּ (יָדַעְתִּי) כִּי־יַעֲשֶׂה יְהוָה דִּין עָנִי` (תהלים קמ:יג) | equivalent | "דין העני": האל דן את דינו של החלש |
| 129 | tadâni dēn habli u habilti | דן אתה דין חבול וחבולה. | `יָדַעְתִּ (יָדַעְתִּי) כִּי־יַעֲשֶׂה יְהוָה דִּין עָנִי` (תהלים קמ:יג) | cognate | *habālu* = `חבל` (`../renderings.md` §2.2). |
| 138 | šarhu eddēšû nūr ilī kayyānu | הנהדר, המתחדש, אור האלים התמידי, | `לְהַעֲלֹת נֵר תָּמִיד` (שמות כז:כ) | equivalent | **האור התמידי לפני האל**: נר המשכן הדולק תמיד, ואש המקדש הבבלי, "אור האלים התמידי". |
| 147 | kīma ṣalmū annûti ihūlū izūbū u ittattukū | כשם שהצלמים האלה נמסו, זבו ונתכו, | `כְּהִתּוּךְ כֶּסֶף בְּתוֹךְ כּוּר כֵּן תֻּתְּכוּ בְתוֹכָהּ` (יחזקאל כב:כב) | cognate | **אותו מבנה, "כ… כן"**: כהיתוך המתכת בכור – כן תותכו; ובמקלו – כהמסת הצלמים, כך המכשפים; *natāku* = `נתך`. |
| 148 | kaššāpu u kaššāptu lihūlū lizūbū u littattukū | מכשף ומכשפה יִמַּסּוּ, יזובו ויִנָּתְכוּ! | `כְּהִמֵּס דּוֹנַג מִפְּנֵי־אֵשׁ יֹאבְדוּ רְשָׁעִים` (תהלים סח:ג); `וְנָמַסּוּ הֶהָרִים תַּחְתָּיו … כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | equivalent |  |
| 149 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam ittî | נוסח להתרת ריר: צלם חמר. | `וַתַּחְמְרָה בַחֵמָר וּבַזָּפֶת` (שמות ב:ג) | equivalent | `חֵמָר`, הביטומן. |
| 152 | ša dipāri rākib šāri | של הלפיד, רוכב הרוח, | `וַיִּרְכַּב עַל־כְּרוּב וַיָּעֹף וַיֵּדֶא עַל־כַּנְפֵי־רוּחַ` (תהלים יח:יא); `הַשָּׂם־עָבִים רְכוּבוֹ הַמְהַלֵּךְ עַל־כַּנְפֵי־רוּחַ` (תהלים קד:ג) | cognate | **האל הרוכב על הרוח**: *rakābu* = `רכב` |
| 152 | ša dipāri rākib šāri | של הלפיד, רוכב הרוח, | `וַיִּרְכַּב עַל־כְּרוּב וַיָּעֹף וַיֵּדֶא עַל־כַּנְפֵי־רוּחַ` (תהלים יח:יא); `הַשָּׂם־עָבִים רְכוּבוֹ הַמְהַלֵּךְ עַל־כַּנְפֵי־רוּחַ` (תהלים קד:ג) | cognate | ושני הטקסטים מתארים את האל רוכב ברוח. |
| 157 | liktumkunūši šiptu ezzetu rabītu ša ea mašmašši | יכסה אתכם הקסם הזועם, הגדול, של אֵאָה המלחש, | `אֲשֶׁר לֹא־יִשְׁמַע לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | equivalent | *mašmaššu* = `מלחש` (`../renderings.md` §3). |
| 159 | lilappit bunnannîkunu TU₆ EN₂ | יְנַגַּע את תוארכם – לחש, קסם. | `וַיְנַגַּע יְהוָה אֶת פַּרְעֹה נְגָעִים גְּדֹלִים` (בראשית יב:יז) | equivalent | פיעל של `נגע`, "להכות בנגע", כמו ה־D של *lapātu*. |
| 162 | kīma kīti ana kapālīya | כמחצלת – לגלול אותי, | `וְנָגֹלּוּ כַסֵּפֶר הַשָּׁמָיִם` (ישעיהו לד:ד) | equivalent | הגלילה כמגילה |
| 162 | kīma kīti ana kapālīya | כמחצלת – לגלול אותי, | `וְגוֹלֵל אֶבֶן אֵלָיו תָּשׁוּב` (משלי כו:כז) | equivalent | ראו 173. |
| 163 | kīma huhāri ana sahāpīya | כמצודה – לחפות אותי, | `וְרִשְׁתּוֹ אֲשֶׁר־טָמַן תִּלְכְּדוֹ` (תהלים לה:ח) | equivalent | המלכודת של הרשע, ראו 174. |
| 164 | kīma kāpi ana abātīya | כְּכֵף – להרוס אותי, | `חֹרֵי עָפָר וְכֵפִים` (איוב ל:ו); `וּבַכֵּפִים עָלוּ` (ירמיהו ד:כט) | cognate | *kāpu* = `כֵּף` "סלע" (`../renderings.md` §2.2). |
| 166 | kīma pitilti ana patālīya | כפתיל – לפתול אותי, | `נַפְתּוּלֵי אֱלֹהִים נִפְתַּלְתִּי` (בראשית ל:ח) | cognate | *patālu* / *pitiltu* = `פתל` / `פְּתִיל` (`../renderings.md` §2.2). |
| 167 | kīma pitiqti ana nabalkutīya | כנדבך – לדלג עליי, | `וּבֵאלֹהַי אֲדַלֶּג־שׁוּר` (תהלים יח:ל) | equivalent | הדילוג על קיר. |
| 169 | kīma šūšurāt bīti ana bābi ana nasākīya | כטאטוא הבית – אל הפתח לזרוק אותי. | `סְחִי וּמָאוֹס תְּשִׂימֵנוּ בְּקֶרֶב הָעַמִּים` (איכה ג:מה) | equivalent | האדם כפסולת שגורפים |
| 169 | kīma šūšurāt bīti ana bābi ana nasākīya | כטאטוא הבית – אל הפתח לזרוק אותי. | `וְטֵאטֵאתִיהָ בְּמַטְאֲטֵא הַשְׁמֵד` (ישעיהו יד:כג) | equivalent | טאטוא כהשמדה, בנבואה על בבל. |
| 170 | anāku ina qibīt marduk bēl nubatti | אני – באמרת מַרְדּוּךְ, אדון טקסי הערב, | `חַת מְרֹדָךְ` (ירמיהו נ:ב) | cognate | ראו I 55. |
| 173 | kīma kīti akappilšunūti | כמחצלת גולל אני אותם, | `כֹּרֶה־שַּׁחַת בָּהּ יִפּוֹל וְגוֹלֵל אֶבֶן אֵלָיו תָּשׁוּב` (משלי כו:כז) | equivalent | **המלכודת חוזרת אל מי שהטמין אותה**: מי שגולל – אליו תשוב |
| 173 | kīma kīti akappilšunūti | כמחצלת גולל אני אותם, | `וְרִשְׁתּוֹ אֲשֶׁר־טָמַן תִּלְכְּדוֹ` (תהלים לה:ח); `בּוֹר כָּרָה וַיַּחְפְּרֵהוּ וַיִּפֹּל בְּשַׁחַת יִפְעָל` (תהלים ז:טז) | equivalent |  |
| 183 | EN₂ attimannu kaššāptu ša ina nāri imluʾu ṭīdâya | קסם. מי אַתְּ, מכשפה, אשר בנהר מילאה את טיטי, | `מֵחֹמֶר קֹרַצְתִּי גַם־אָנִי` (איוב לג:ו) | cognate | ראו 190: הטיט שממנו קורצים צלם (*ṭīdu* = `טיט`, *karāṣu* = `קרץ`). |
| 184 | ina bīti eṭî utammeru ṣalmīya | בבית חשוך טמנה את צלמיי, | `וְרִשְׁתּוֹ אֲשֶׁר־טָמַן תִּלְכְּדוֹ` (תהלים לה:ח) | equivalent | `טמן`, הטמנה בסתר של מה שנועד לפגוע. |
| 186 | ina tubkinnāti ulaqqitu huṣābēya | בערמות הזבל ליקטה את שיריי, | `אֵלְכָה נָּא הַשָּׂדֶה וַאֲלַקֳּטָה בַשִּׁבֳּלִים` (רות ב:ב) | cognate | *laqātu* = `לקט` (קורפוס הבריאה: *de₅* = `לָקַט`). |
| 187 | ina bīt ašlāki ibtuqu sissikt[ī] | בבית הכובס בִּתְּקָה את כנפי, | `עַל אֲשֶׁר כָּרַת אֶת כָּנָף אֲשֶׁר לְשָׁאוּל` (שמואל א כד:ה); `בִּמְסִלַּת שְׂדֵה כֹבֵס` (מלכים ב יח:יז) | equivalent | `כובס`. |
| 188 | ina askuppati išbušu eper šē[pīya] | במפתן אספה את עפר רגליי. | `מִשְׁמָר בַּאֲסֻפֵּי הַשְּׁעָרִים` (נחמיה יב:כה) | cognate | *askuppu* "אבן הסף" הוא הקרוב של `אֲסֻפִּים` |
| 188 | ina askuppati išbušu eper šē[pīya] | במפתן אספה את עפר רגליי. | `עַל מִפְתַּן דָּגוֹן` (שמואל א ה:ה) | equivalent | המפתן כמקום של כוח. |
| 190 | ašpur ana hirīt āli ikriṣūni ṭīdaki | שלחתי אל חפירת העיר – קרצו לי את טיטֵךְ. | `מֵחֹמֶר קֹרַצְתִּי גַם־אָנִי` (איוב לג:ו) | cognate | *karāṣu* = `קרץ` (`../renderings.md` §4): גם האדם המקראי "נקרץ" מחומר כמו צלם |
| 190 | ašpur ana hirīt āli ikriṣūni ṭīdaki | שלחתי אל חפירת העיר – קרצו לי את טיטֵךְ. | `מֵחֹמֶר קֹרַצְתִּי גַם־אָנִי` (איוב לג:ו) | divergence | שם האל קורץ את האדם, כאן האדם קורץ צלם של אויבתו. |
| 191 | ašapparakkim-ma āliku tinūru girra munnahzu | שולח אני אלייך תנור הולך, גִּירָה המתלקח, | `כִּי הִנֵּה הַיּוֹם בָּא בֹּעֵר כַּתַּנּוּר וְהָיוּ כָל זֵדִים וְכָל עֹשֵׂה רִשְׁעָה קַשׁ` (מלאכי ג:יט) | cognate | *tinūru* = `תַּנּוּר` |
| 191 | ašapparakkim-ma āliku tinūru girra munnahzu | שולח אני אלייך תנור הולך, גִּירָה המתלקח, | `בַּמְכַשְּׁפִים` (מלאכי ג:ה) | cognate | והתנור הבוער שבא על הרשעים – ובאותו פרק מלאכי מונה ראשונים את |
| 191 | ašapparakkim-ma āliku tinūru girra munnahzu | שולח אני אלייך תנור הולך, גִּירָה המתלקח, | `תְּשִׁיתֵמוֹ כְּתַנּוּר אֵשׁ` (תהלים כא:י) | equivalent |  |
| 191 | ašapparakkim-ma āliku tinūru girra munnahzu | שולח אני אלייך תנור הולך, גִּירָה המתלקח, | `וְאֵשׁ מִתְלַקַּחַת בְּתוֹךְ הַבָּרָד` (שמות ט:כד) | equivalent | `מתלקחת`. |
| 193 | [sîn] ina uri šamaš ina larsa | [סִין] מֵאוּר, שַׁמַשׁ מִלַּרְסָה, | `בְּאוּר כַּשְׂדִּים` (בראשית יא:כח) | cognate | *Ur* = `אוּר`, עירו של סין, ממנה יצא אברם. |
| 197 | kaššāpta lidūkū-ma anāku lubluṭ | את המכשפה יהרגו, ואני אחיה. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | **הקרובה ביותר לפסוק בכל מקלו**: "את המכשפה – יהרגו", המכשפה כמושא, והמתתה כפעולה של אחרים (שם בית הדין, כאן האלים) |
| 197 | kaššāpta lidūkū-ma anāku lubluṭ | את המכשפה יהרגו, ואני אחיה. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | cognate | *dâku* = `הרג` (`../renderings.md` §2.4). |
| 200 | šī taklat ana kišpīša kitpudūti | היא בוטחת בכשפיה המחושבים, | `וַתִּבְטְחִי בְרָעָתֵךְ` (ישעיהו מז:י); `בְּרֹב כְּשָׁפַיִךְ` (ישעיהו מז:ט) | equivalent | **בבל הבוטחת ברעתה**, בתוך הנבואה על כשפיה (); כאן המכשפה הבבלית בוטחת בכשפיה. |
| 201 | u anāku ana kay[yāni] nūr <ilī> girra dayyānu | ואני – באור ⟨האלים⟩ התמידי, בגִירָה הדיין. | `אֵלֶּה בָרֶכֶב וְאֵלֶּה בַסּוּסִים וַאֲנַחְנוּ בְּשֵׁם־יְהוָה אֱלֹהֵינוּ נַזְכִּיר` (תהלים כ:ח) | equivalent | **אותו מבנה של ניגוד**: הם בוטחים בכוחם – ואנו באל; הפועל מושמט בחלק השני גם שם. |
| 206 | ana lemutti tešteneʾʾînni | לרעה מבקשת ומבקשת אותי, | `וַיְנַקְשׁוּ מְבַקְשֵׁי נַפְשִׁי וְדֹרְשֵׁי רָעָתִי דִּבְּרוּ הַוּוֹת` (תהלים לח:יג) | equivalent | המבקשים את רעתו של המתפלל. |
| 209 | šēdū libaʾʾûki | השֵׁדוּ יחפשו אותך, | `יִזְבְּחוּ לַשֵּׁדִים לֹא אֱלֹהַ` (דברים לב:יז) | cognate | *šēdu* הוא הקרוב של `שֵׁד`. |
| 211 | eṭemmū lissahrūki | האִטִּים יסובבו אותך, | `וְאֶל הָאִטִּים וְאֶל הָאֹבוֹת` (ישעיהו יט:ג) | cognate | *eṭemmu* = `אִט`, ברבים `אִטִּים`. |
| 213 | rābiṣū lemutti likillū rēški | רוֹבְצֵי רעה יחזיקו בראשך, | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | cognate | *rābiṣu* = `רוֹבֵץ` (I 136). |
| 214 | lugali[r]r[a u meslamta]ʾea linārūki | לוּגַלִירָּה [ומֶסְלַמְתַּאֵאָה] יקטלו אותך, | `אִם־תִּקְטֹל אֱלוֹהַּ רָשָׁע` (תהלים קלט:יט) | equivalent | `קטל`. |
| 215 | [ ... ] ... bēl šīm[āti? šumk]i? lipšiṭ | […] …, אדון הגו[רלות?], ימחה את [שמך?], | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | equivalent | מחיית השם. |
| 216 | [ni]nurta lā pādû [lišānk]i? lissuh | נִינוּרְתָּה, שאינו פודה, ינסח את [לשונך?], | `יַחְתְּךָ וְיִסָּחֲךָ מֵאֹהֶל` (תהלים נב:ז); `הַוּוֹת תַּחְשֹׁב לְשׁוֹנֶךָ` (תהלים נב:ד) | cognate | *nasāhu* = `נסח` (II 72; ושם, בתהלים, הלשון של הרשע: ). |
| 217 | gula azugallatu rabītu l[ē]tki? limhaṣ | גּוּלָה, הרופאה הגדולה, תמחץ את לֶחְיֵךְ?, | `בַּשֵּׁבֶט יַכּוּ עַל הַלְּחִי אֵת שֹׁפֵט יִשְׂרָאֵל` (מיכה ד:יד) | equivalent | המכה על הלחי, השפלה; *lētu* = `לחי`, *mahāṣu* = `מחץ` (קורפוס החוקים). |
| 219 | ut[ū]nu elletu mārat ani rabītu | אַתּוּן טהורה, בת אָנוּ הגדולה, | `יִתְרְמֵא לְגוֹא אַתּוּן נוּרָא יָקִדְתָּא` (דניאל ג:ו) | cognate | *utūnu* = `אַתּוּן` (`../renderings.md` §5): **כבשן האש של בבל**, שאליו מושלכים מי שאינם משתחווים לצלם; כאן הכבשן הוא אלה, "בת אָנוּ", שאליה נשלחת המכשפה. |
| 220 | ša ina libbīša nanhuzat išāt qabri | אשר בתוכה מתלקחת אש הקבר, | `שְׁבִיבָא דִּי נוּרָא` (דניאל ג:כב) | equivalent | האש שבכבשן הורגת את המשליכים |
| 220 | ša ina libbīša nanhuzat išāt qabri | אשר בתוכה מתלקחת אש הקבר, | `שְׁבִיבָא דִּי נוּרָא` (דניאל ג:כב) | cognate | *išātu* = `אש`. |
| 222 | [ina?] na[pāhīš]a? šamāmī ikšudū nabl[ūša] | [בנפחה?] – את השמים השיגו שלהבותיה, | `וְהָהָר בֹּעֵר בָּאֵשׁ עַד לֵב הַשָּׁמַיִם` (דברים ד:יא) | equivalent | אש שמגיעה עד השמים. |
| 224 | arhiš hanṭiš ša kaššāpīya u ka[ššāptīya] napištašunu li[blē-ma] | מהרה, חיש – של מכשפי [ומכשפתי] יכבו חייהם, | `כִּי־גָז חִישׁ וַנָּעֻפָה` (תהלים צ:י) | equivalent |  |
| 225 | yâši bulliṭanni-ma narbîka lušāpi [d]alīlīka ludlul [T]U₆ EN₂ | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את תפארתך אפאר! – לחש, קסם. | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה) | equivalent | ראו 17. |

### Parallels index (III)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | EN₂ kaššāptu muttalliktu ša sūqāti | קסם. המכשפה, המתהלכת בשווקים, | `אָקוּמָה נָּא וַאֲסוֹבְבָה בָעִיר בַּשְּׁוָקִים וּבָרְחֹבוֹת` (שיר השירים ג:ב) | cognate | *sūqu* = `שׁוּק`, והזוג *sūqu* / *rebītu* (4, 7) הוא הזוג `שְׁוָקִים` / `רְחֹבוֹת` של שיר השירים; אפילו הפועל, "אסובבה", הוא *sahāru* של שורה 5. |
| 2 | mūterribtu ša bītāti | הנכנסת ונכנסת לבתים, | `כִּי עָלָה מָוֶת בְּחַלּוֹנֵינוּ בָּא בְּאַרְמְנוֹתֵינוּ לְהַכְרִית עוֹלָל מִחוּץ בַּחוּרִים מֵרְחֹבוֹת` (ירמיהו ט:כ) | equivalent | כוח רע הנכנס לבתים ופוגע ברחובות, בצעירים (השוו 8–12). |
| 4 | hayyāṭītu ša rebâti | המרגלת ברחובות, | `פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת וְאֵצֶל כָּל־פִּנָּה תֶאֱרֹב` (משלי ז:יב) | equivalent | **האשה הזרה האורבת ברחובות**: אותה דמות של אשה מסוכנת המסתובבת בעיר. |
| 5 | ana pānīša u arkīša issanahhur | לפניה ולאחוריה סובבת וסובבת, | `וַאֲסוֹבְבָה בָעִיר` (שיר השירים ג:ב) | cognate | *sahāru* = `סובב`. |
| 8 | ša eṭli damqi dūssu īkim | של העלם הנאה – את אונו חטפה, | `כֹּחִי וְרֵאשִׁית אוֹנִי` (בראשית מט:ג) | equivalent | `און`, כוח הגבר. |
| 10 | ina nekelmêša kuzubša ilqe | בזעיפת פניה – את עגביה לקחה. | `אַל־תִּלְחַם אֶת־לֶחֶם רַע עָיִן` (משלי כג:ו) | equivalent | **העין הרעה**: מבט שמזיק (במשלי – הצרות והקמצנות של "רע עין"). |
| 14 | ina imtīša iptaras alaktu | בארסה גזרה את ההליכה, | `חֲמַת־לָמוֹ כִּדְמוּת חֲמַת־נָחָשׁ` (תהלים נח:ה) | cognate | *imtu* (מן *ḥimtu*) הוא הקרוב של `חֵמָה` "ארס" – ובאותו מזמור "קוֹל מְלַחֲשִׁים" (נח:ו). |
| 16 | ušassi ilī u ištarī ina zumrīya | הרחיקה את אֵלִי ואֵלָתִי מגופי. | `אַחַי מֵעָלַי הִרְחִיק` (איוב יט:יג) | equivalent | ראו I 6. |
| 17 | ša kaššāptī<ya> ina kullati agdariṣ ṭīdaša | של מכשפתי – במחצבת קרצתי את טיטה, | `מֵחֹמֶר קֹרַצְתִּי גַם־אָנִי` (איוב לג:ו) | cognate | *karāṣu* = `קרץ` (`../renderings.md` §4) |
| 17 | ša kaššāptī<ya> ina kullati agdariṣ ṭīdaša | של מכשפתי – במחצבת קרצתי את טיטה, | `מֵחֹמֶר קֹרַצְתִּי גַם־אָנִי` (איוב לג:ו) | divergence | אצל איוב האל קורץ את האדם מחומר; כאן האדם קורץ צלם של המכשפה. |
| 18 | ša ēpištīya abtani ṣalamša | של עושתי – בניתי את צלמה. | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | cognate | *banû* = `בנה` (I 96). |
| 22 | eli āli attapah išātu | מעל העיר נפחתי אש, | `וְנָפַחְתִּי עֲלֵיכֶם בְּאֵשׁ עֶבְרָתִי` (יחזקאל כב:כא) | cognate | *napāhu* = `נפח` (`../renderings.md` §5) באש, והאש כעונש. |
| 25 | tēpušīm-ma girra līkulki | עָשִׂית לי – וגִירָה יאכל אותך, | `כִּי יְהוָה אֱלֹהֶיךָ אֵשׁ אֹכְלָה הוּא` (דברים ד:כד) | equivalent | האש האוכלת (I 116). |
| 27 | takpudīm-ma girra lidūkki | חשבת עליי – וגִירָה יהרוג אותך, | `וְאַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) | equivalent | *kapādu* = `חשב` (`../renderings.md` §2.2). |
| 29 | harrān lā târi lišaṣbitki girra hābilki | את אורח אין־שוב יאחיז בך גִּירָה, מְחַבְּלֵךְ, | `וְאֹרַח לֹא־אָשׁוּב אֶהֱלֹךְ` (איוב טז:כב) | cognate | **"אורח לא־אשוב"**: שתי המלים קרובות (*harrānu* = `אורח`, *târu* = `שוב`), ובשני הטקסטים זו דרך המוות. |
| 31 | EN₂ šitta šina mārāt ani ša šamê | קסם. שתיים הן, בנות אָנוּ שבשמים, | `לַעֲלוּקָה שְׁתֵּי בָנוֹת הַב הַב שָׁלוֹשׁ הֵנָּה לֹא תִשְׂבַּעְנָה` (משלי ל:טו) | equivalent | **המספר העולה** ("שתיים … שלוש") ואפילו "בנות" ו"הנה". |
| 33 | ṭurra ṣabtānim-ma ultu šamê urradāni | בחבל הן אוחזות, ומן השמים יורדות אליי. | `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה; וְהִנֵּה מַלְאֲכֵי אֱלֹהִים עֹלִים וְיֹרְדִים בּוֹ` (בראשית כח:יב) | divergence | **ירידה מן השמים לארץ באמצעי מחבר**: שם סולם ומלאכים בחלום, כאן חבל ובנות אנו בטקס – המוטיב (שליחי מעלה היורדים לאדם) משותף, הפרטים שונים |
| 33 | ṭurra ṣabtānim-ma ultu šamê urradāni | בחבל הן אוחזות, ומן השמים יורדות אליי. | `וַתּוֹרִדֵם בַּחֶבֶל בְּעַד הַחַלּוֹן` (יהושע ב:טו) | equivalent | ירידה בחבל. |
| 38 | ša līlâti huluppaqqa ana šarāpi nillika | בנשף – את החוּלוּפַּקּוּ לשרוף באנו." | `בְּנֶשֶׁף־בְּעֶרֶב יוֹם בְּאִישׁוֹן לַיְלָה וַאֲפֵלָה` (משלי ז:ט) | equivalent | `נשף`, שעת ערב. |
| 39 | EN₂ kaššāptu nērtānītu | קסם. המכשפה, הרוצחת, | `לֹא יִמָּצֵא בְךָ מַעֲבִיר בְּנוֹ וּבִתּוֹ בָּאֵשׁ קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | equivalent | **רשימה של בעלי מלאכת הנסתר**, כמו הרשימה שמכאן ועד 53; אבל ההבדל הוא העיקר: דברים אוסר את כולם, ומקלו מונה אותם כדי לקלל אותם – ובתוך הרשימה עומדת גם ה*āšiptu*, "האשפית" (41), אחותו של המלחש עצמו. |
| 41 | āšiptu eššebūti | האַשָּׁפִית, האֶשֶּׁבּוּתוּ, | `וַיִּמְצָאֵם עֶשֶׂר יָדוֹת עַל כָּל הַחַרְטֻמִּים הָאַשָּׁפִים` (דניאל א:כ) | cognate | *āšipu* = `אַשָּׁף`. |
| 42 | mušlahhatu agugiltu | המוּשְׁלַחָּתוּ, האַגּוּגִלְתּוּ, | `אֲשֶׁר לֹא-יִשְׁמַע לְקוֹל מְלַחֲשִׁים; חוֹבֵר חֲבָרִים מְחֻכָּם` (תהלים נח:ו) | equivalent | **מלחש הנחשים**: מקצוע מוכר בשני העולמות; בתהלים הנחש החרש אינו שומע ל"מלחשים", וכאן המלחשת לנחשים היא עצמה מכשפה. |
| 43 | qadištu nadītu | הקְדֵשָׁה, הנָדִיתוּ, | `לֹא תִהְיֶה קְדֵשָׁה מִבְּנוֹת יִשְׂרָאֵל; וְלֹא יִהְיֶה קָדֵשׁ מִבְּנֵי יִשְׂרָאֵל` (דברים כג:יח) | cognate | אותה מלה, אותו שורש, אותו מעמד: אשה המוקדשת למקדש. |
| 43 | qadištu nadītu | הקְדֵשָׁה, הנָדִיתוּ, | `כִּי הֵם עִם הַזֹּנוֹת יְפָרֵדוּ וְעִם הַקְּדֵשׁוֹת יְזַבֵּחוּ` (הושע ד:יד) | cognate | הקדשה כחלק מן הפולחן. |
| 45 | bayyārtu ša mūši | ציידת הלילה, | `לְצוֹדֵד נְפָשׁוֹת` (יחזקאל יג:יח) | equivalent | **הנשים שצדות נפשות**: הנביאות של יחזקאל יג, בעלות הכסתות והמספחות, הן הנשים הנוכריות היחידות במקרא שמתוארות במלאכה כזאת; גם שם הן "צדות" (`צודד`), גם שם הן נשים, וגם שם הדיבור עליהן הוא מן הצד שכנגד. |
| 45 | bayyārtu ša mūši | ציידת הלילה, | `אֲשֶׁר אַתֵּנָה מְצֹדְדוֹת שָׁם אֶת הַנְּפָשׁוֹת` (יחזקאל יג:כ) | equivalent |  |
| 57 | uštapēlū amāt ipšīki | המירו את דבר מעשייך – | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ; וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | equivalent | המעשה הרע ההפוך, החוזר אל עושהו (ראו 60). |
| 60 | u mimma mala tēpušī lišamherki kâši ana šāri T[U₆] EN₂ | וכל אשר עָשִׂית – יַפְגִּיעַ בָּךְ עַצְמֵךְ – [לחש], קסם. | `וַיהוָה הִפְגִּיעַ בּוֹ אֵת עֲוֹן כֻּלָּנוּ` (ישעיהו נג:ו) | equivalent | אותו פועל, `הִפְגִּיעַ`, במובן "גרם לפגוע ב־": הרע שנעשה מועבר ונוחת על אחר. בישעיהו העוון מועבר אל העבד הנושא אותו; כאן הרע שעשתה המכשפה מוחזר אליה עצמה. |
| 60 | u mimma mala tēpušī lišamherki kâši ana šāri T[U₆] EN₂ | וכל אשר עָשִׂית – יַפְגִּיעַ בָּךְ עַצְמֵךְ – [לחש], קסם. | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ` (תהלים ז:יז) | equivalent | מעשה הרשע חוזר אל עושהו. |
| 60a | [KA.INIM.M]A UŠ₁₁.BUR₂.RU.DA ṣalam iškūri | [נוס]ח להתרת ריר: צלם דונג. | `כְּהִמֵּס דּוֹנַג מִפְּנֵי-אֵשׁ` (תהלים סח:ג) | equivalent | הדונג הנמס באש. |
| 61 | EN₂ id ellu namru quddušu anāku | קסם. נהר טהור, זוֹהֵר מקודש – אני. | `הִנָּקִי מִמֵּי הַמָּרִים הַמְאָרְרִים הָאֵלֶּה` (במדבר ה:יט) | equivalent | **המים השופטים**: הנהר של מסופוטמיה הוא אל של מבחן־המים (ה־*ḫuršān*): הנאשם יורד אל הנהר, והנהר מנקה אותו או מטביע אותו. בתורה – מי המרים, שהנאשמת שותה, ו"ונקתה" (ה:כח) היא זיכויה; כאן *ebēbu* "להיות נקי" (69) הוא אותו זיכוי. |
| 64 | eppušūni īteneppušūni | עושים לי, עושים ועושים לי, | `רַבַּת צְרָרוּנִי מִנְּעוּרָי; גַּם לֹא-יָכְלוּ לִי` (תהלים קכט:ב) | equivalent | **אותו מבנה**: פעולת האויב חוזרת ונשנית ("רבת צררוני … רבת צררוני", קכט:א–ב), ובסוף – "לא יכלו לי". 64–66 אומר את אותו הדבר בשלוש שורות: עושים, עושים ועושים – ואינם יכולים. |
| 65 | eppušūnim-ma ul ileʾʾû zumrī | עושים לי – ואינם יכולים לגופי, | `גַּם לֹא-יָכְלוּ לִי` (תהלים קכט:ב) | equivalent | *leʾû* + מושא = `יָכֹל ל־`: לגבור על. |
| 68 | ētelil kīma id ina šadîya | טהרתי כנהר בהרי, | `וַיָּשָׁב בְּשָׂרוֹ כִּבְשַׂר נַעַר קָטֹן וַיִּטְהָר` (מלכים ב ה:יד) | equivalent | נעמן, שטבל בירדן: הנהר מטהר; אבל כאן ה"טהרה" היא גם זיכוי במשפט. |
| 69 | ētebib kīma namri ina bīt purussêya | נִקֵּיתִי כַּזּוֹהֵר בבית גזרתי. | `וְאִם לֹא נִטְמְאָה הָאִשָּׁה וּטְהֹרָה הִוא וְנִקְּתָה` (במדבר ה:כח) | equivalent | אותו צמד, `טהורה … ונקתה`, כמו *ētelil* / *ētebib* כאן: היציאה הזכאית ממבחן המים. |
| 73 | ana muhhīšunu u lānīšunu lillikū | ילכו על קדקדם ועל גזרתם. | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ; וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | equivalent | הכשפים חוזרים אל ראש העושה. |
| 75 | lihūlū lizūbū u littattukū <li>zūbū u <l>it[tattukū] | יִמַּסּוּ, יזובו ויִנָּתְכוּ! | `כְּהִמֵּס דּוֹנַג מִפְּנֵי-אֵשׁ` (תהלים סח:ג) | equivalent | האויבים נמסים כמו הצלמים באש. |
| 76 | u anāku kīma id ina šadîya lū ellēku EN₂ | ואני, כנהר בהרי, אטהר – קסם. | `תְּחַטְּאֵנִי בְאֵזוֹב וְאֶטְהָר` (תהלים נא:ט) | equivalent | "ואטהר": המשאלה להיטהר. |
| 77 | EN₂ lamânni sutû elamû redânni | קסם. מקיף אותי הסוּתִי, העֵילָמִי רודף אותי, | `סַבּוּנִי כַמַּיִם כָּל-הַיּוֹם; הִקִּיפוּ עָלַי יָחַד` (תהלים פח:יח) | equivalent | האויבים "מקיפים" כמים; כאן, בשורה הבאה, הם נעשים גל. |
| 77 | EN₂ lamânni sutû elamû redânni | קסם. מקיף אותי הסוּתִי, העֵילָמִי רודף אותי, | `הוֹשִׁיעֵנִי מִכָּל-רֹדְפַי וְהַצִּילֵנִי` (תהלים ז:ב) | equivalent |  |
| 78 | katmanni agû edû sahpanni | מכסה אותי הגל, האֵד מחפה אותי. | `כָּל מִשְׁבָּרֶיךָ וְגַלֶּיךָ עָלַי עָבָרוּ` (יונה ב:ד) | equivalent | הגלים העוברים על המתפלל. |
| 78 | katmanni agû edû sahpanni | מכסה אותי הגל, האֵד מחפה אותי. | `בָּאתִי בְמַעֲמַקֵּי-מַיִם וְשִׁבֹּלֶת שְׁטָפָתְנִי` (תהלים סט:ג) | equivalent |  |
| 78 | katmanni agû edû sahpanni | מכסה אותי הגל, האֵד מחפה אותי. | `וְאֵד יַעֲלֶה מִן הָאָרֶץ` (בראשית ב:ו) | cognate | *edû* "שטף המים העולה" ו`אֵד` של בראשית (ושל איוב לו:כז) הם כנראה אותה מלה. |
| 82 | kīma šadî ina kibrīti inuhhu | כמו שההר נח בגפרית – | `וַיהוָה הִמְטִיר עַל סְדֹם וְעַל עֲמֹרָה גָּפְרִית וָאֵשׁ` (בראשית יט:כד) | cognate | *kibrītu* = `גָּפְרִית`, וגם שם הגפרית והאש יחד (81–84: גירה והגפרית). |
| 88 | EN₂ attimannu kaššāptu ša iqbû amāt lemuttīya ina libbīša | קסם. מי אַתְּ, מכשפה, אשר אמרה דבר רעה עליי בלבה, | `דֹּבְרֵי שָׁלוֹם עִם-רֵעֵיהֶם; וְרָעָה בִּלְבָבָם` (תהלים כח:ג) | equivalent | הרעה הנאמרת בלב: מה שלא נשמע בחוץ הוא הכשף עצמו. |
| 88 | EN₂ attimannu kaššāptu ša iqbû amāt lemuttīya ina libbīša | קסם. מי אַתְּ, מכשפה, אשר אמרה דבר רעה עליי בלבה, | `אָמַר נָבָל בְּלִבּוֹ` (תהלים יד:א) | equivalent | אותו ניב, "אמר בלבו". |
| 90 | ina šaptīša ibbanû rusûʾa | על שפתיה נבנה הכבל עליי, | `שָׁנְנוּ לְשׁוֹנָם כְּמוֹ-נָחָשׁ: חֲמַת עַכְשׁוּב תַּחַת שְׂפָתֵימוֹ` (תהלים קמ:ד) | equivalent | הרעל שמתחת לשפתיים: גם ה"ריר" (UŠ₁₁) הוא באכדית גם "ארס". |
| 92 | kaššāptu aṣbat pâki aṣbat lišānki | מכשפה, אחזתי את פיך, אחזתי את לשונך, | `תֵּאָלַמְנָה שִׂפְתֵי-שָׁקֶר: הַדֹּבְרוֹת עַל-צַדִּיק עָתָק` (תהלים לא:יט) | equivalent | המשאלה שהפה הדובר רעה ייאלם; כאן המדבר עושה זאת בעצמו. |
| 101 | liṣūdū (u) līriqū pānūki | יִצָּרְבוּ (ו)יוריקו פנייך! | `וְנֶהֶפְכוּ כָל פָּנִים לְיֵרָקוֹן` (ירמיהו ל:ו) | cognate | *arāqu* "להוריק, להחוויר" = `ירק`: הפנים המוריקות מפחד או ממחלה. |
| 101 | liṣūdū (u) līriqū pānūki | יִצָּרְבוּ (ו)יוריקו פנייך! | `וְנִצְרְבוּ בָהּ כָּל פָּנִים מִנֶּגֶב צָפוֹנָה` (יחזקאל כא:ג) | equivalent | פנים הנצרבות באש. |
| 112 | taprusī ittīya ilī u ištarī | גזרת מעמי את אֵלִי ואֵלָתִי, | `הִרְחַקְתָּ מְיֻדָּעַי מִמֶּנִּי` (תהלים פח:ט) | equivalent | **הבדידות של המקולל**: גם שם אדם שבני ביתו ומכריו הורחקו ממנו. |
| 113 | taprusī ittīya šēʾu šeʾītu ahu u ahātu ibru tappû u kinattu | גזרת מעמי שָׁכֵן ושכנה, אח ואחות, רֵעַ, חבר ובן־גיל. | `אַחַי מֵעָלַי הִרְחִיק; וְיֹדְעַי אַךְ-זָרוּ מִמֶּנִּי` (איוב יט:יג) | equivalent | האחים והמכרים שהתרחקו. |
| 113 | taprusī ittīya šēʾu šeʾītu ahu u ahātu ibru tappû u kinattu | גזרת מעמי שָׁכֵן ושכנה, אח ואחות, רֵעַ, חבר ובן־גיל. | `חָדְלוּ קְרוֹבָי; וּמְיֻדָּעַי שְׁכֵחוּנִי` (איוב יט:יד) | equivalent |  |
| 113 | taprusī ittīya šēʾu šeʾītu ahu u ahātu ibru tappû u kinattu | גזרת מעמי שָׁכֵן ושכנה, אח ואחות, רֵעַ, חבר ובן־גיל. | `הִרְחַקְתָּ מִמֶּנִּי אֹהֵב וָרֵעַ; מְיֻדָּעַי מַחְשָׁךְ` (תהלים פח:יט) | equivalent | "אוהב ורע", כמו *ibru tappû* כאן. |
| 114 | aleqqâkkim-ma hahâ ša utūni dihmennu ša diqāri | לוקח אני לך סיג של אַתּוּן, פיח של סיר, | `קְחוּ לָכֶם מְלֹא חָפְנֵיכֶם פִּיחַ כִּבְשָׁן; וּזְרָקוֹ מֹשֶׁה הַשָּׁמַיְמָה לְעֵינֵי פַרְעֹה` (שמות ט:ח) | equivalent | **פיח הכבשן כחומר של מעשה פלאי**: בשמות משה "לוקח" פיח מן הכבשן וזורק אותו, והוא נעשה לשחין על המצרים; כאן המלחש "לוקח" (*leqû* = `לקח` [cognate]) סיג מן הכבשן ופיח מן הסיר, ויוצק אותם על ראש המכשפה. אותו חומר ואותו פועל – ופעולה של העברת נזק אל האויב. |
| 114 | aleqqâkkim-ma hahâ ša utūni dihmennu ša diqāri | לוקח אני לך סיג של אַתּוּן, פיח של סיר, | `כֻּלָּם נְחֹשֶׁת וּבְדִיל וּבַרְזֶל וְעוֹפֶרֶת בְּתוֹךְ כּוּר סִגִים כֶּסֶף הָיוּ` (יחזקאל כב:יח) | equivalent | הסיג שבכור: הפסולת שנשארת אחרי האש. |
| 115 | amahhah atabbak ana qaqqad raggati šīmtīki | מרטיב אני, יוצק אני על ראש *הרשעה – גורלך*. | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ` (תהלים ז:יז) | equivalent | הרע "על הראש". |
| 125 | EN₂ makurraya sîn ušēpiš | קסם. את אנייתי (בידי) סִין עִשֵּׂיתִי, | `וְזֹאת אִשָּׁה אַחַת יוֹשֶׁבֶת בְּתוֹךְ הָאֵיפָה` (זכריה ה:ז) | divergence | **הרשעה היושבת בתוך כלי, ונישאת אל מחוץ לארץ**: בחזון זכריה ה:ה–יא, אשה היושבת באיפה ("זאת הרשעה", ה:ח) נסגרת בה ונישאת אל ארץ שנער. כאן המכשף והמכשפה "יושבים בתוכה" של האנייה (127–129), והיא נשלחת אל הים. אותה פעולה של סילוק – הרע בדמות אשה, יושב בכלי, ומורחק; בזכריה הוא מועבר ומושב במקום אחר, כאן הוא מוטבע. |
| 127 | ašbū ina libbīša kaššāpu u kaššāptu u kaššāptī | יושבים בתוכה מכשף ומכשפה, | `זֹאת הָרִשְׁעָה וַיַּשְׁלֵךְ אֹתָהּ אֶל תּוֹךְ הָאֵיפָה` (זכריה ה:ח) | divergence | ראו 125. |
| 130 | ša makurrīšunu libbatiq ašalša | של אנייתם – ינותק עבותה, | `נְנַתְּקָה אֶת-מוֹסְרוֹתֵימוֹ; וְנַשְׁלִיכָה מִמֶּנּוּ עֲבֹתֵימוֹ` (תהלים ב:ג) | equivalent | **אותו צמד**: הניתוק של ה"מוסרות" וה"עבותות"; כאן *ašlu* ו*markasu* (130–131), והפועל *batāqu* "לנתק". |
| 132 | edû ana tâmti lišēṣīšunūti | האֵד יוציא אותם אל הים, | `וַיִּשְׂאוּ אֶת יוֹנָה וַיְטִלֻהוּ אֶל הַיָּם; וַיַּעֲמֹד הַיָּם מִזַּעְפּוֹ` (יונה א:טו) | divergence | **האשם והים**: ביונה האשם מוסר מן האנייה אל הים, והים נרגע; כאן האשמים נשלחים בתוך האנייה אל הים, והים מתגעש עליהם (133). הקשר הוא במבנה (הים כמקום שבו נעלם האשם), לא בלשון. |
| 133 | šamrūti agû elīšunu lītellû | גלים סוערים יעלו עליהם, | `וַיֹּאמֶר וַיַּעֲמֵד רוּחַ סְעָרָה; וַתְּרוֹמֵם גַּלָּיו` (תהלים קז:כה) | divergence | הסערה והגלים של יורדי הים; אבל בתהלים קז הם צועקים ונושעים (קז:כח–ל), וכאן הגלים הם העונש. |
| 133 | šamrūti agû elīšunu lītellû | גלים סוערים יעלו עליהם, | `כָּל מִשְׁבָּרֶיךָ וְגַלֶּיךָ עָלַי עָבָרוּ` (יונה ב:ד) | equivalent | הגלים העוברים על הטובע; כאן – על המכשפים, ולא על המדבר (78). |
| 136 | EN₂ haṣabtu sūqāti ammēni tugdanarrênni | קסם. חרס השווקים, מדוע מתגרה את ומתגרה בי? | `אַל תִּתְגָּרוּ בָם` (דברים ב:ה) | cognate | *gerû* "להתגרות, להיות עוין" = `התגרה` (בעברית: התפעל של `גרה`). |
| 142 | ina kibsīki rābiṣu ušeššeb | בשביליך – רוֹבֵץ מושיב אני, | `לַפֶּתַח חַטָּאת רֹבֵץ; וְאֵלֶיךָ תְּשׁוּקָתוֹ` (בראשית ד:ז) | cognate | *rābiṣu* "הרובץ", השד האורב בפתח ובדרכים; החטאת "רובץ" בפתח של בראשית ד הוא אותו יצור, כמו שכבר הציעו פרשנים. |
| 144 | amahhaṣ muhhaki ušanna ṭēnki | מוחץ אני את קדקדך, משנה אני את טעמך, | `אַךְ-אֱלֹהִים יִמְחַץ רֹאשׁ אֹיְבָיו: קָדְקֹד שֵׂעָר` (תהלים סח:כב) | cognate | *maḫāṣu* = `מחץ` ו*muḫḫu* = `קָדְקֹד`: אותו מעשה, באותן מלים. |
| 144 | amahhaṣ muhhaki ušanna ṭēnki | מוחץ אני את קדקדך, משנה אני את טעמך, | `וַיְשַׁנּוֹ אֶת טַעְמוֹ בְּעֵינֵיהֶם וַיִּתְהֹלֵל בְּיָדָם … וַיּוֹרֶד רִירוֹ אֶל זְקָנוֹ` (שמואל א כא:יד) | cognate | *ṭēma šunnû* = `שִׁנָּה אֶת טַעְמוֹ`, השיגעון; ושם גם ה"ריר". |
| 145 | adallah libbaki tamaššî šīrīki | דולח אני את לבך – תשכחי את בשרך. | `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ` (יחזקאל לב:ב) | cognate | *dalāḫu* = `דלח`: לעכור מים; כאן – את הלב. |
| 147 | šamû anāku-ma ul tulappatīnni | שמים אני – לא תנגעי אותי, | `וַאֲנִי הִנֵּה נְתַתִּיךָ הַיּוֹם לְעִיר מִבְצָר וּלְעַמּוּד בַּרְזֶל וּלְחֹמוֹת נְחֹשֶׁת` (ירמיהו א:יח); `וְנִלְחֲמוּ אֵלֶיךָ וְלֹא יוּכְלוּ לָךְ` (ירמיהו א:יט) | equivalent | **האדם המזוהה עם דבר שאין לו שליטה עליו**: ירמיהו נעשה עיר מבצר ועמוד ברזל, וממילא ; כאן המדבר הוא שמים, ארץ, קוץ, עקרב והר – ולכן אין בה כוח לגעת בו. ההבדל: אצל ירמיהו אלוהים הוא ש"נתן" אותו כך; כאן המדבר מכריז זאת על עצמו, והדיבור הוא המעשה. |
| 149 | sihil balti anāku-ma ul takabbasīnni | קוץ של בַּלְתּוּ אני – לא תדרכי עליי, | `כִּי סָרָבִים וְסַלּוֹנִים אוֹתָךְ וְאֶל עַקְרַבִּים אַתָּה יוֹשֵׁב` (יחזקאל ב:ו) | equivalent | **קוצים ועקרבים** כצמד של דברים שאין לגעת בהם; ביחזקאל אלה האויבים המקיפים את הנביא, כאן המדבר עצמו הוא הקוץ והעקרב. |
| 150 | ziqit zuqaqīpi anāku-ma ul talappatīnni | עוקץ העקרב אני – לא תיגעי בי, | `וְאֶל עַקְרַבִּים אַתָּה יוֹשֵׁב` (יחזקאל ב:ו) | equivalent | ראו 149. |
| 151 | šadû zaqru anāku-ma kišpūki ruhûki | הר נישא אני – כשפייך, רירך, | `וְעַל כָּל הֶהָרִים הָרָמִים; וְעַל כָּל הַגְּבָעוֹת הַנִּשָּׂאוֹת` (ישעיהו ב:יד) | equivalent |  |
| 153a | KA.INIM.MA UŠ₁₁.BUR₂ haṣabti sūq-erbetti lipâ tapaššaš ta[bar]ra takarrik | נוסח להתרת ריר: חרס מפרשת הדרכים – בחֵלֶב תמשח, בצמר א[דו]ם תכרוך. | `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד) | equivalent | **הצמר האדום בטקסי טהרה**: "שני תולעת" של טהרת המצורע (ושל פרה אדומה, במדבר יט:ו) הוא הצמר הצבוע אדום של הטקס המסופוטמי. |
| 153a | KA.INIM.MA UŠ₁₁.BUR₂ haṣabti sūq-erbetti lipâ tapaššaš ta[bar]ra takarrik | נוסח להתרת ריר: חרס מפרשת הדרכים – בחֵלֶב תמשח, בצמר א[דו]ם תכרוך. | `כִּי עָמַד מֶלֶךְ בָּבֶל אֶל אֵם הַדֶּרֶךְ בְּרֹאשׁ שְׁנֵי הַדְּרָכִים לִקְסָם קָסֶם` (יחזקאל כא:כו) | equivalent | **פרשת הדרכים כמקום של מעשי קסמים**: מלך בבל קוסם שם; כאן החרס נלקח משם. |
| 155 | rittu dannatu ša amēlūti | כף חזקה של האנושות, | `כִּי בְיָד חֲזָקָה יְשַׁלְּחֵם וּבְיָד חֲזָקָה יְגָרְשֵׁם מֵאַרְצוֹ` (שמות ו:א) | divergence | "יד חזקה" היא במקרא ידו של אלוהים, הגואלת; כאן "הכף החזקה" היא כף של בני אדם, הלוכדת – והמלחש מבקש לשרוף אותה. |
| 156 | ša kīma nēši iṣbatu amēlu | אשר כאריה – אחזה אדם, | `יֶאֱרֹב בַּמִּסְתָּר כְּאַרְיֵה בְסֻכֹּה יֶאֱרֹב לַחֲטוֹף עָנִי; יַחְטֹף עָנִי בְּמָשְׁכוֹ בְרִשְׁתּוֹ` (תהלים י:ט) | equivalent | **האריה והרשת יחד**: הרשע של תהלים י הוא אריה האורב וצייד המושך ברשת – בדיוק שתי התמונות של 156–160. |
| 157 | kīma huhāri ishupu eṭlu | כמצודה – חיפתה עלם, | `כַּדָּגִים שֶׁנֶּאֱחָזִים בִּמְצוֹדָה רָעָה וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב) | equivalent | המצודה והפח, ו"אחוזים" בהם – אותם כלים ואותו פועל (156 *iṣbatu*). |
| 158 | kīma šēti ukattimu qarrādu | כרשת – כיסתה גיבור, | `כִּי-שֻׁלַּח בְּרֶשֶׁת בְּרַגְלָיו; וְעַל-שְׂבָכָה יִתְהַלָּךְ` (איוב יח:ח) | equivalent | **רשת, שבכה ופח** (איוב יח:ח–י): שלושה מן הכלים של 157–160, בפרק שמתאר את גורל הרשע, ובו גם הגפרית, באיוב יח:טו. |
| 159 | kīma šuškalli ašārēdu ibāru! | כשְׂבָכָה – צדה ראשון במעלה, | `וְעַל-שְׂבָכָה יִתְהַלָּךְ` (איוב יח:ח) | equivalent | ראו 158. |
| 160 | kīma gišparri iktumu dannu | כפח – כיסתה חזק. | `יֹאחֵז בְּעָקֵב פָּח; יַחֲזֵק עָלָיו צַמִּים` (איוב יח:ט) | equivalent | הפח האוחז; ושם גם `יַחֲזֵק` – הפח "חזק" על הנלכד, כאן הנלכד הוא "החזק". |
| 162 | girra līkul girra lišti girra lištābil | גִּירָה יאכל, גִּירָה ישתה, גִּירָה יניע! | `וְתֹאכְלֵם אֵשׁ` (תהלים כא:י) | equivalent | האש "אוכלת" את האויבים. |
| 164 | ša rittakunu ēpušu zumurkunu lihmuṭ | על אשר כפכם עשתה – ילהט את גופכם! | `וְהָיוּ כָל זֵדִים וְכָל עֹשֵׂה רִשְׁעָה קַשׁ וְלִהַט אֹתָם הַיּוֹם הַבָּא` (מלאכי ג:יט) | equivalent | `לִהַט` את עושי הרשעה, ביום ה"בוער כתנור" (167) – מלאכי שהזכיר את ה"מכשפים" ב־ג:ה. |
| 165 | lispuh illatkunu mār ea mašmaššu | יפיץ את עדתכם בן אֵאָה, המלחש! | `עֲדַת מְרֵעִים הִקִּיפוּנִי` (תהלים כב:יז) | equivalent | "עדה" של רשעים. |
| 166 | qutri girra līrimā pānīkunu | קיטור גִּירָה יעטה את פניכם! | `וְהִנֵּה עָלָה קִיטֹר הָאָרֶץ כְּקִיטֹר הַכִּבְשָׁן` (בראשית יט:כח) | cognate | *qutru* = `קִיטוֹר` (`../renderings.md` §5). |
| 167 | kīma tinūri ina hiṭâtīkunu | כתנור – בסדקיכם, | `תְּשִׁיתֵמוֹ כְּתַנּוּר אֵשׁ לְעֵת פָּנֶיךָ` (תהלים כא:י) | cognate | *tinūru* = `תַּנּוּר`: האויבים נעשים כתנור אש. |
| 167 | kīma tinūri ina hiṭâtīkunu | כתנור – בסדקיכם, | `כִּי הִנֵּה הַיּוֹם בָּא בֹּעֵר כַּתַּנּוּר` (מלאכי ג:יט) | cognate |  |
| 177 | uṣurāt balāṭi uṣṣurāku anāku | בצורות החיים מצויר אני, | `גָּלְמִי רָאוּ עֵינֶיךָ וְעַל-סִפְרְךָ כֻּלָּם יִכָּתֵבוּ: יָמִים יֻצָּרוּ` (תהלים קלט:טז) | equivalent | **החיים המשורטטים מראש**: ימי האדם "יוצרו" ונכתבו בספר האל; כאן המדבר "מצויר" בתבנית החיים שקבעה אישתר. |
| 177 | uṣurāt balāṭi uṣṣurāku anāku | בצורות החיים מצויר אני, | `וְהָיְתָה נֶפֶשׁ אֲדֹנִי צְרוּרָה בִּצְרוֹר הַחַיִּים אֵת יְהוָה אֱלֹהֶיךָ וְאֵת נֶפֶשׁ אֹיְבֶיךָ יְקַלְּעֶנָּה בְּתוֹךְ כַּף הַקָּלַע` (שמואל א כה:כט) | equivalent | נפש המוגן "צרורה בצרור החיים", ונפש האויב נזרקת "בתוך כף הקלע": אותו ניגוד בין המוגן בחיים לבין האויב המושלך (מלים אחרות). |
| 188 | EN₂ bišlī bišlī qidê qidê | קסם. בַּשְּׁלִי, בשלי, קִדְחִי, קדחי! | `כִּי אֵשׁ קָדְחָה בְאַפִּי וַתִּיקַד עַד שְׁאוֹל תַּחְתִּית` (דברים לב:כב) | cognate | *qâdu* = `קדח` (`../renderings.md` §5). |

### Parallels index (IV)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | EN₂ bišlī bišlī qidê qidê | קסם. בַּשְּׁלִי, בשלי, קִדְחִי, קדחי! | `כִּי אֵשׁ קָדְחָה בְאַפִּי וַתִּיקַד עַד שְׁאוֹל תַּחְתִּית` (דברים לב:כב) | cognate | *qâdu* = `קדח`. |
| 14 | ana mīti tahīrāʾinni tē(pušāni tušēpišāni girra lipšur) | למת אֵרַשְׂתֶּם אותי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `כִּי אֲמַרְתֶּם כָּרַתְנוּ בְרִית אֶת מָוֶת וְעִם שְׁאוֹל עָשִׂינוּ חֹזֶה` (ישעיהו כח:טו) | equivalent | **ברית עם המוות**: שם האנשים כורתים אותה בעצמם, כאן המכשפים "מארסים" את הנפגע למת – קושרים אותו בקשר של נישואין לעולם המתים. |
| 16 | ana eṭem kimtīya tapq[idāʾinni] tē(pušāni tušēpišāni girra lipšur) | לאִט משפחתי הפקדתם אותי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וְדֹרֵשׁ אֶל הַמֵּתִים` (דברים יח:יא) | equivalent | **המגע עם המתים** כמלאכה אסורה; כאן הוא נעשה כדי להזיק. |
| 18 | ana eṭemmi murtappidu ša pāqida lā īšû tapqid[āʾinni] tē(pušāni tušēpišāni girra lipšur) | לאִט משוטט, אשר אין לו פוקד, הפקדתם אותי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `כְּמוֹ חֲלָלִים שֹׁכְבֵי קֶבֶר אֲשֶׁר לֹא זְכַרְתָּם עוֹד` (תהלים פח:ו) | equivalent | **המת שאין מי שיזכור אותו**. |
| 19 | ana eṭem harbī nadûti tapqidāʾinni tē(pušāni tušēpišāni girra lipšur) | לאִט החורבות הנטושות הפקדתם אותי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וּבָנוּ מִמְּךָ חָרְבוֹת עוֹלָם` (ישעיהו נח:יב) | cognate | *ḫarbu* = `חָרְבָּה`. |
| 35 | ṣalmīya ina rāṭi ša nukaribbi būr(t)a taptâ taqbirā tē(pušāni tušēpišāni girra lipšur) | את צלמיי ברהט של הגנן – בור פתחתם, קברתם – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וַיַּצֵּג אֶת הַמַּקְלוֹת אֲשֶׁר פִּצֵּל בָּרְהָטִים בְּשִׁקְתוֹת הַמָּיִם` (בראשית ל:לח) | cognate | *rāṭu* = `רַהַט` (גילגמש: `ברהט הנפח`). |
| 40 | [ka]lb[a] tušākilā šahâ tušākilā | [לכ]לב האכלתם, לחזיר האכלתם, | `הַמֵּת לְיָרָבְעָם בָּעִיר יֹאכְלוּ הַכְּלָבִים וְהַמֵּת בַּשָּׂדֶה יֹאכְלוּ עוֹף הַשָּׁמָיִם` (מלכים א יד:יא) | equivalent | **הכלבים והעופות**: אותו זוג של אוכלי פגרים (40–41), ואותה קללה – גוף שלא ייקבר. |
| 40 | [ka]lb[a] tušākilā šahâ tušākilā | [לכ]לב האכלתם, לחזיר האכלתם, | `בְּחֵלֶק יִזְרְעֶאל יֹאכְלוּ הַכְּלָבִים אֶת בְּשַׂר אִיזָבֶל` (מלכים ב ט:לו) | equivalent | הכלבים האוכלים את בשר איזבל, ה"מכשפה" של מלכים ב ט:כב. |
| 41 | iṣṣūra tušākilā ana nāri taddâ | לעוף האכלתם, אל הנהר השלכתם. | `וְהָיְתָה נִבְלָתָם לְמַאֲכָל לְעוֹף הַשָּׁמַיִם וּלְבֶהֱמַת הָאָרֶץ` (ירמיהו טז:ד) | equivalent |  |
| 52 | zikurudâ ana pāni sîn tē(pušāni tušēpišāni girra lipšur) | זִיקוּרוּדָא לפני סִין – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וּפֶן תִּשָּׂא עֵינֶיךָ הַשָּׁמַיְמָה וְרָאִיתָ אֶת הַשֶּׁמֶשׁ וְאֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים כֹּל צְבָא הַשָּׁמַיִם` (דברים ד:יט) | equivalent | **צבא השמים**: הירח והכוכבים שלפניהם עושים מעשים. |
| 52 | zikurudâ ana pāni sîn tē(pušāni tušēpišāni girra lipšur) | זִיקוּרוּדָא לפני סִין – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וְאֶת הַמְקַטְּרִים לַבַּעַל לַשֶּׁמֶשׁ וְלַיָּרֵחַ וְלַמַּזָּלוֹת וּלְכֹל צְבָא הַשָּׁמָיִם` (מלכים ב כג:ה) | equivalent | הירח והמזלות, שיאשיהו ביטל את הפולחן להם. |
| 57 | zikurudâ ana pāni ereqqi tē(pušāni tušēpišāni girra lipšur) | זִיקוּרוּדָא לפני העגלה – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וְעַיִשׁ עַל-בָּנֶיהָ תַנְחֵם` (איוב לח:לב) | equivalent | הדובה הגדולה (לפי רוב המפרשים "עַיִשׁ"). |
| 59 | zikurudâ ana pāni šitaddari tē(pušāni tušēpišāni girra lipšur) | זִיקוּרוּדָא לפני שִׁתַּדַּרוּ – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `עֹשֶׂה-עָשׁ כְּסִיל וְכִימָה; וְחַדְרֵי תֵמָן` (איוב ט:ט) | equivalent | אוריון, `כְּסִיל`. |
| 61 | [ziku]rudâ ša ṣerri šikkû arrabu perurūtu tē(pušāni tušēpišāni girra lipšur) | זִיקוּרוּדָא של נחש, חולדה, עכבר, פֵּרוּרוּתוּ – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `הַחֹלֶד וְהָעַכְבָּר וְהַצָּב לְמִינֵהוּ` (ויקרא יא:כט) | equivalent | **השרצים הטמאים**: החולד והעכבר יחד, בראש רשימת השרצים. |
| 65 | ina mê u uhūli (qarnānî) turammek[āʾi]nn[i] tē(pušāni tušēpišāni girra lipšur) | במים ובבורית הטבלתם אותי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `כִּי אִם תְּכַבְּסִי בַּנֶּתֶר וְתַרְבִּי לָךְ בֹּרִית נִכְתָּם עֲוֹנֵךְ לְפָנַי` (ירמיהו ב:כב) | equivalent | **הבורית הרוחצת** – ושם אינה מטהרת. |
| 67 | ina šūbulāti tušēbilā[ʾi]nn[i] tē(pušāni tušēpišāni girra lipšur) | במשלוחים שלחתם לי – עֲשִׂיתֶם לִי, עִשִּׂיתֶם לִי – גִּירָה יַתִּיר! | `וּמִשְׁלֹחַ מָנוֹת אִישׁ לְרֵעֵהוּ` (אסתר ט:יט) | equivalent | **המתנה הנשלחת**: מנהג של רעות – וכאן אמצעי לכשף. |
| 68 | ina mahar ili! šarri kabti u rubê tušaškināʾinni | לפני אל, מלך, נכבד ושר – הִבְאַשְׁתֶּם אותי, | `אֲשֶׁר הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה וּבְעֵינֵי עֲבָדָיו` (שמות ה:כא) | equivalent | **השנאה לפני המלך ועבדיו**: אותו מצב – אדם שנעשה שנוא בעיני השליט וחצרו בגלל מעשה של אחרים. |
| 70 | ina mahar ibri tappê u kinatti tušaš[kināʾinni] | לפני רֵעַ, חבר ובן־גיל [הִבְאַשְׁתֶּם אותי], | `תִּעֲבוּנִי כָּל-מְתֵי סוֹדִי; וְזֶה-אָהַבְתִּי נֶהְפְּכוּ-בִי` (איוב יט:יט) | equivalent | **החברים שהתנכרו**. |
| 71 | ina mahar abi (u) ummi ahi (u) ahāti aššati māri u mārti tušaškināʾinni | לפני אב (ו)אם, אח (ו)אחות, אשה, בן ובת – הִבְאַשְׁתֶּם אותי, | `כִּי-אָבִי וְאִמִּי עֲזָבוּנִי; וַיהוָה יַאַסְפֵנִי` (תהלים כז:י) | equivalent | **האב והאם שעזבו**; שם אלוהים "יאספני", כאן גירה "יתיר". |
| 71 | ina mahar abi (u) ummi ahi (u) ahāti aššati māri u mārti tušaškināʾinni | לפני אב (ו)אם, אח (ו)אחות, אשה, בן ובת – הִבְאַשְׁתֶּם אותי, | `כִּי בֵן מְנַבֵּל אָב בַּת קָמָה בְאִמָּהּ כַּלָּה בַּחֲמֹתָהּ: אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ` (מיכה ז:ו) | equivalent | המשפחה שהתהפכה. |
| 71 | ina mahar abi (u) ummi ahi (u) ahāti aššati māri u mārti tušaškināʾinni | לפני אב (ו)אם, אח (ו)אחות, אשה, בן ובת – הִבְאַשְׁתֶּם אותי, | `רוּחִי זָרָה לְאִשְׁתִּי; וְחַנֹּתִי לִבְנֵי בִטְנִי` (איוב יט:יז) | equivalent | האשה והבנים שמתרחקים. |
| 81 | lū ibru lū tappû | בין רֵעַ, בין חבר, | `אִישׁ מֵרֵעֵהוּ הִשָּׁמֵרוּ וְעַל כָּל אָח אַל תִּבְטָחוּ` (ירמיהו ט:ג) | equivalent | **האויב יכול להיות הרע והאח** (81–82). |
| 81 | lū ibru lū tappû | בין רֵעַ, בין חבר, | `וְאַתָּה אֱנוֹשׁ כְּעֶרְכִּי; אַלּוּפִי וּמְיֻדָּעִי` (תהלים נה:יד) | equivalent | הבוגד הוא בן־גילו ומכרו של המתפלל. |
| 92 | [l]ū lišānu nakertu ša ina māti bašâtu | בין לשון נכרית אשר ישנה בארץ – | `עַם עִמְקֵי שָׂפָה מִשְּׁמוֹעַ נִלְעַג לָשׁוֹן אֵין בִּינָה` (ישעיהו לג:יט) | equivalent | **הלשון הזרה כאיום**: העם שלשונו אינה מובנת. |
| 92 | [l]ū lišānu nakertu ša ina māti bašâtu | בין לשון נכרית אשר ישנה בארץ – | `גּוֹי אֲשֶׁר לֹא תִשְׁמַע לְשֹׁנוֹ` (דברים כח:מט) | equivalent |  |
| 94 | kakkašunu lišber-ma lā ṣalālu līmissunūte TU₆ E[N₂] | את נשקם תשבור, ואי־שינה תעמיס עליהם – לחש, ק[סם]. | `בַּלַּיְלָה הַהוּא נָדְדָה שְׁנַת הַמֶּלֶךְ` (אסתר ו:א) | equivalent | נדודי השינה בלילה. |
| 96 | [šūquki ša š]amê šupulki ša [qaqqari?] | גובהך – של השמים, עומקך – של [הקרקע?], | `הַעְמֵק שְׁאָלָה אוֹ הַגְבֵּהַּ לְמָעְלָה` (ישעיהו ז:יא) | equivalent | **הגובה והעומק** כשני הקצוות של העולם. |
| 96 | [šūquki ša š]amê šupulki ša [qaqqari?] | גובהך – של השמים, עומקך – של [הקרקע?], | `גָּבְהֵי שָׁמַיִם מַה-תִּפְעָל; עֲמֻקָּה מִשְּׁאוֹל מַה-תֵּדָע` (איוב יא:ח) | equivalent | אותו צמד: מה שגבוה כשמים ועמוק משאול – אין להשיגו. |
| 103 | anappassunūti [x x x x (x)] | מנפץ אני אותם […], | `תְּרֹעֵם בְּשֵׁבֶט בַּרְזֶל: כִּכְלִי יוֹצֵר תְּנַפְּצֵם` (תהלים ב:ט) | cognate | *napāṣu* = `נִפֵּץ`: ניפוץ האויבים, ואולי גם כאן "כ[כלי]". |
| 108 | mannu ahāssu-ma šū dayyā[nu] | מי אחותו? – והוא הדיין. | `וְזָרְחָה לָכֶם יִרְאֵי שְׁמִי שֶׁמֶשׁ צְדָקָה וּמַרְפֵּא בִּכְנָפֶיהָ` (מלאכי ג:כ) | equivalent | **השמש של הצדק**: במלאכי – דימוי לאל השופט והמרפא, כאן – השמש עצמו הוא הדיין. |
| 110 | manzât ahāssu-ma (u) šū dayyā[nu] | מַנְזָאת אחותו – (ו)הוא הדיין. | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן; וְהָיְתָה לְאוֹת בְּרִית בֵּינִי וּבֵין הָאָרֶץ` (בראשית ט:יג) | divergence | **הקשת בענן**: במקרא היא אות לברית, ובמסופוטמיה – מַנְזָאת, אלת הקשת, השוברת קשרים (112). |
| 118 | šeššet riksūšina sebet piṭrūʾa | שישה – קשריהן, שבעה – פְּטָרַי. | `בְּשֵׁשׁ צָרוֹת יַצִּילֶךָּ; וּבְשֶׁבַע לֹא-יִגַּע בְּךָ רָע` (איוב ה:יט) | equivalent | **המשל המספרי "שש – ושבע"**: אותו מבנה, אותם מספרים, ואותו מסר – השביעי הוא המכריע, והמוגן יצא בשלום. |
| 118 | šeššet riksūšina sebet piṭrūʾa | שישה – קשריהן, שבעה – פְּטָרַי. | `שֶׁשׁ-הֵנָּה שָׂנֵא יְהוָה` (משלי ו:טז) | equivalent | ואחריו "ושבע". |
| 123 | EN₂ rūʾūʾa kaššāpat anāku pāširāk | קסם. עמיתתי – מכשפה היא; אני – מתיר אני. | `אַל תַּאֲמִינוּ בְרֵעַ אַל תִּבְטְחוּ בְּאַלּוּף` (מיכה ז:ה) | equivalent | **הרע הקרוב כאויב**. |
| 124 | kaššāptu kaššāpat anāku pāširāk | המכשפה – מכשפה היא; אני – מתיר אני. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | **מה עושים למכשפה**: התורה גוזרת מוות; כאן התשובה היא "אני מתיר" – הכשף מבוטל, והמכשפה נשרפת בצלמה (137–148). |
| 139 | ana utūni ālikti ašarrapšināti | אל האַתּוּן ההולכת – שׂורף אני אותן. | `אַתּוּן נוּרָא יָקִדְתָּא` (דניאל ג:ו) | cognate | *utūnu* = `אַתּוּן` (`../renderings.md` §5). |
| 148 | girra lulīmu l[i-x x kin]āši | גִּירָה, היחמור, י[… אתכ]ן. | `אַיָּל וּצְבִי וְיַחְמוּר` (דברים יד:ה) | equivalent | *lulīmu* = `יַחְמוּר`: הצבי האדום (`חמר` = אדום). |
| 151 | anāku kīma mê mīli-ma lubāʾšināti TU₆ EN₂ | ואני – כמי גאות אעבור עליהן – לחש, קסם. | `וְחָלַף בִּיהוּדָה שָׁטַף וְעָבַר` (ישעיהו ח:ח) | equivalent | המים השוטפים ועוברים. |

### Parallels index (V)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 6 | ipšī tēpušī lū ša attūki | המעשים שעשית – יהיו שלך, | `כֹּרֶה-שַּׁחַת בָּהּ יִפּוֹל; וְגוֹלֵל אֶבֶן אֵלָיו תָּשׁוּב` (משלי כו:כז) | equivalent | **הרע חוזר אל עושהו** (6–8). |
| 11 | EN₂ mannu pâ iptil uṭṭata ukaṣṣer | קסם. מי פתל מוץ, צרר גרגיר, | `לֹא-כֵן הָרְשָׁעִים: כִּי אִם-כַּמֹּץ אֲשֶׁר-תִּדְּפֶנּוּ רוּחַ` (תהלים א:ד) | equivalent | **המוץ** כחומר שאין בו אחיזה. |
| 13 | ana errî mārat ilī rabûti ipša bārta amāt lemutti mannu uqarrib | אל האֶרּוּ, בת האלים הגדולים, מעשה, מרד, דבר רעה – מי הקריב? | `וַיְלַקֵּט מִמֶּנּוּ פַּקֻּעֹת שָׂדֶה מְלֹא בִגְדוֹ` (מלכים ב ד:לט) | equivalent | **הקולוקינט**: "פקועות השדה" של אלישע – הצמח המר והרעיל, הנחשב לסם. |
| 25 | limhaṣ lēssa litēr amāssa ana pîša | ימחץ את לחייה, ישיב את דברה אל פיה. | `וַיַּכֶּה אֶת מִיכָיְהוּ עַל הַלֶּחִי` (מלכים א כב:כד) | equivalent | **המכה על הלחי** כעונש וכהשפלה לפני בית הדין (השוו איכה ג:ל `יִתֵּן לְמַכֵּהוּ לֶחִי`). |
| 37 | libbalkissi sūqu u sulû | יתהפכו עליה שוק ומסילה, | `יַשְּׁרוּ בָּעֲרָבָה מְסִלָּה לֵאלֹהֵינוּ` (ישעיהו מ:ג) | cognate | *sulû* = `מְסִלָּה` (שורש סלל). |
| 40 | kaššāptu kīma kalbi ina haṭṭi kīma anduhallat ina kirbanni | המכשפה – ככלב במקל, כלטאה בגוש, | `הֲכֶלֶב אָנֹכִי כִּי אַתָּה בָא אֵלַי בַּמַּקְלוֹת` (שמואל א יז:מג) | equivalent | **הכלב שמגרשים במקל**. |
| 40 | kaššāptu kīma kalbi ina haṭṭi kīma anduhallat ina kirbanni | המכשפה – ככלב במקל, כלטאה בגוש, | `וְהָאֲנָקָה וְהַכֹּחַ וְהַלְּטָאָה` (ויקרא יא:ל) | equivalent | הלטאה בין השרצים. |
| 42 | kīma kursinni imēri ina sūqi ētequ likkelmēši | כקרסול חמור – בשוק יזעיף בה החולף. | `וְלֹא מָעֲדוּ קַרְסֻלָּי` (תהלים יח:לז) | cognate | *kursinnu* = `קַרְסֹל`. |
| 47 | kīma piqan ṣabīti quturša lible TU₆ EN₂ | כגללי צביה – יכבה קיטורה – לחש, קסם. | `וּבִעַרְתִּי אַחֲרֵי בֵית יָרָבְעָם כַּאֲשֶׁר יְבַעֵר הַגָּלָל עַד תֻּמּוֹ` (מלכים א יד:י) | equivalent | **הגלל הבוער עד שאין ממנו דבר**. |
| 52 | terrā kišpūša ana mehê amâtīša ana šāri | השיבו את כשפיה לסופה, את דבריה לרוח! | `יִהְיוּ כְּתֶבֶן לִפְנֵי-רוּחַ; וּכְמֹץ גְּנָבַתּוּ סוּפָה` (איוב כא:יח) | equivalent | **הרוח, הסופה והמוץ** (52–53): הרשעים כמוץ שהסופה נושאת. |
| 53 | linnašpū kišpūša kīma pê liqqalpū kīma šūmī | יינשפו כשפיה כמוץ, יקולפו כשום, | `וְגַם נָשַׁף בָּהֶם וַיִּבָשׁוּ וּסְעָרָה כַּקַּשׁ תִּשָּׂאֵם` (ישעיהו מ:כד) | cognate | *našāpu* = `נשף`: הנשיפה המעיפה כקש. |
| 53 | linnašpū kišpūša kīma pê liqqalpū kīma šūmī | יינשפו כשפיה כמוץ, יקולפו כשום, | `וְאֶת הַבְּצָלִים וְאֶת הַשּׁוּמִים` (במדבר יא:ה) | cognate | *šūmū* = `שׁוּם`. |
| 56 | u kanisurra bēlet kaššāpāti EN₂ | וכַּנִיסוּרָּה, בעלת המכשפות – קסם. | `מֵרֹב זְנוּנֵי זוֹנָה טוֹבַת חֵן בַּעֲלַת כְּשָׁפִים` (נחום ג:ד) | cognate | **"בעלת כשפים"**: אותו צירוף, אבל לא אותה מלה בדיוק – ב*kaššāpāti* "מכשפות" (נקבה רבות של *kaššāptu*), בנחום `כְּשָׁפִים` (= *kišpū* "כשפים"). כנִיסוּרָּה היא גבירתן של המכשפות; נינוה של נחום – בעלת מעשי הכשפים. ובשניהם – אשה שהיא גם "זונה" או קשורה לאהבה (55). |
| 57 | EN₂ zīru ša tēpušāni tušēpišāni ana muhhīkunu [ēpuš]a | קסם. את השנאה אשר עֲשִׂיתֶם לי, עִשִּׂיתֶם לי – על קדקדכם [עָשִׂיתִי], | `כַּאֲשֶׁר עָשִׂיתָ יֵעָשֶׂה לָּךְ גְּמֻלְךָ יָשׁוּב בְּרֹאשֶׁךָ` (עובדיה א:טו) | equivalent | **מידה כנגד מידה**: "כאשר עשית – ייעשה לך", ו"בראשך" כמו "על קדקדכם". |
| 60 | utukku lemnu tušaṣbitāʾinni utukku lemnu liṣbatku[nūši] | אוּטוּכּוּ רע האחזתם בי – אוּטוּכּוּ רע יאחז אתכם! | `מִדֶּבֶר בָּאֹפֶל יַהֲלֹךְ; מִקֶּטֶב יָשׁוּד צָהֳרָיִם` (תהלים צא:ו) | equivalent | **השדים כמחלות** (60–67): הדבר והקטב של תהלים צא – כמו האוטוכו, האלו והלמשתו כאן. |
| 68 | ina nīši u māmīti tuqattâʾinni ina nīši u māmīti pagarkunu liqti | בנפש ובשבועה כיליתם אותי – בנפש ובשבועה תכלה גְּוִיַּתְכֶם! | `וַיֶּאֱהַב קְלָלָה וַתְּבוֹאֵהוּ` (תהלים קט:יז) | equivalent | **הקללה החוזרת על המקלל**. |
| 71 | ašuštu arurtu hūṣ hīp libbi gilittu piritti u adirti yâši taškunāni | דאבון, רעדה, דכדוך שבר־לב, מורא, בהלה וחרדה – שׂמתם עליי עצמי, | `וְנָתַן יְהוָה לְךָ שָׁם לֵב רַגָּז וְכִלְיוֹן עֵינַיִם וְדַאֲבוֹן נָפֶשׁ` (דברים כח:סה); `וּפָחַדְתָּ לַיְלָה וְיוֹמָם` (דברים כח:סו) | equivalent | **רשימת הפחדים כקללה**: הלב הרוגז, דאבון הנפש, ו. |
| 71 | ašuštu arurtu hūṣ hīp libbi gilittu piritti u adirti yâši taškunāni | דאבון, רעדה, דכדוך שבר־לב, מורא, בהלה וחרדה – שׂמתם עליי עצמי, | `הָרֹפֵא לִשְׁבוּרֵי לֵב; וּמְחַבֵּשׁ לְעַצְּבוֹתָם` (תהלים קמז:ג) | equivalent | *ḫīp libbi* "שבר הלב" הוא אותו ניב: השבר שבלב הוא הדיכאון. |
| 73 | aqmūkunūši ina kibrīti elleti u ṭābti amurri | בערתי אתכם בגפרית טהורה ובמלח אַמּוּרוּ, | `גָּפְרִית וָמֶלַח שְׂרֵפָה כָל אַרְצָהּ` (דברים כט:כב) | cognate | **גפרית ומלח** יחד, כאש של השמדה. |
| 76 | EN₂ attimannu kaššāptu ša kīma šūti ikkimu hamiššeret ūmī | קסם. מי אַתְּ, מכשפה, אשר כרוח הדרום צברה חמישה־עשר יום, | `עוּרִי צָפוֹן וּבוֹאִי תֵימָן` (שיר השירים ד:טז) | equivalent | **רוח הצפון ורוח הדרום** כזוג. |
| 77 | tilti ūmē imbaru šanat nalši | תשעה ימים ערפל, שנה טל, | `לָכֵן יִהְיוּ כַּעֲנַן בֹּקֶר וְכַטַּל מַשְׁכִּים הֹלֵךְ; כְּמֹץ יְסֹעֵר מִגֹּרֶן וּכְעָשָׁן מֵאֲרֻבָּה` (הושע יג:ג) | equivalent | **ענן, טל, מוץ ועשן**: הדברים החולפים, שאחד אחד מופיעים בלוח הזה (53, 76–80, 47). |
| 79 | atebbâkkim-ma kīma gallāb šamê il[tāni] | קם אני עלייך כגַלָּב השמים, רוח הצ[פון], | `תַּעַר הַגַּלָּבִים תִּקָּחֶנָּה לָּךְ` (יחזקאל ה:א) | cognate | *gallābu* = `גַּלָּב`. |
| 94 | epiš tēpušāni ana m[uhhīkunu litēr] | את המעשה אשר עשיתם לי – על קדקדכם ישיב! | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ; וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | equivalent |  |
| 97 | anāku ētelil ēteb[ib azzaku ina mahar nuska] u girra [(ilī) dayyānī TU₆ EN₂] | אני – טהרתי, נִקֵּיתִי, זכותי לפני נוּסְכּוּ וגִירָה, [(האלים) הדיינים – לחש, קסם]. | `רַחֲצוּ הִזַּכּוּ הָסִירוּ רֹעַ מַעַלְלֵיכֶם` (ישעיהו א:טז) | equivalent | *zakû* = `זכה` (`../renderings.md` §3). |
| 98 | EN₂ attunu mû ša tattanallak[ā kal mātāti] | קסם. אתם, המים, המתהלכים בכל הארצות, | `יַעֲלוּ הָרִים יֵרְדוּ בְקָעוֹת` (תהלים קד:ח) | equivalent | **המים העוברים על ההרים** (98–99). |
| 100 | tuhappâ kārāni tušabbirā [eleppa?] | משברים אתם נמלים, משברים ס[פינות]?, | `בְּרוּחַ קָדִים תְּשַׁבֵּר אֳנִיּוֹת תַּרְשִׁישׁ` (תהלים מח:ח) | equivalent | **שבירת הספינות** בכוח הטבע. |
| 105 | ina têšunu elli tēlilā [u] takṣâ [ ... ] | בלחשם הטהור טהרתם [ו]צננתם […], | `חוֹשֵׂךְ אֲמָרָיו יוֹדֵעַ דָּעַת` (משלי יז:כז) | equivalent | **הקור כשלווה**: בהמשך הפסוק, "קר רוח" (בכתיב) – הרוח ה"קרה" היא הרגועה. |
| 107 | libbi kaššāpīya ka[ššāptīya līlil u likṣi] | לב מכשפי ומכ[שפתי – יטהר ויצטנן]. | `לֵב טָהוֹר בְּרָא-לִי אֱלֹהִים` (תהלים נא:יב) | divergence | **הלב הטהור**: בתהלים המתפלל מבקש אותו לעצמו; כאן המדבר מבקש אותו לאויביו – לב "טהור וקר" הוא לב שאין בו כוח לרעה. |
| 109 | asallah libbakunu m[ê nāri] | מזה אני על לבכם מ[י נהר], | `וְהִזָּה הַטָּהֹר עַל הַטָּמֵא` (במדבר יט:יט) | equivalent | *salāḫu* = `הִזָּה`: הזאת המים המטהרים. |
| 109 | asallah libbakunu m[ê nāri] | מזה אני על לבכם מ[י נהר], | `וְזָרַקְתִּי עֲלֵיכֶם מַיִם טְהוֹרִים וּטְהַרְתֶּם` (יחזקאל לו:כה) | divergence | **מים טהורים על האויב**: ביחזקאל – על ישראל, כדי לטהר אותם ולתת להם "לב חדש" (לו:כו); כאן – על לב המכשפים, כדי לכבות אותו. |
| 114 | ša ikpudu libbakunu lemuttī | אשר לבכם חשב רעה עליי, | `אַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) | equivalent | *kapādu* + *lemuttu* = `חשב רעה`. |
| 121 | ṭēnkunu ušanni | את טעמכם שיניתי, | `וַיְשַׁנּוֹ אֶת טַעְמוֹ בְּעֵינֵיהֶם` (שמואל א כא:יד) | cognate | *ṭēma šunnû* = `שִׁנָּה אֶת טַעְמוֹ`. |
| 126 | īka u palga lā tettiqāni | סוללה ופלג – לא תחלפו אליי, | `כְּעֵץ שָׁתוּל עַל-פַּלְגֵי-מָיִם` (תהלים א:ג) | cognate | *palgu* = `פֶּלֶג`. |
| 127 | dūra u samēti lā tabbalakkitāni | חומה וחֵיל – לא תדלגו אליי, | `וּבֵאלֹהַי אֲדַלֶּג-שׁוּר` (תהלים יח:ל) | equivalent | *nabalkutu* "לעבור מעל חומה" = `דִּלֵּג`. |
| 134 | ša lā ea mannu unāhkunūši | מלבד אֵאָה – מי יניח אתכם? | `מַעֲנֶה-רַּךְ יָשִׁיב חֵמָה` (משלי טו:א) | equivalent | **השקטת החמה** במלה הרכה, כמו כאן בפה של מים (138). |
| 138 | pīya mû pīkunu išātu | פי – מים, פיכם – אש; | `הֲלוֹא כֹה דְבָרִי כָּאֵשׁ נְאֻם יְהוָה` (ירמיהו כג:כט) | divergence | **הדיבור כאש**: בירמיהו דבר האל הוא אש; כאן האש היא פי המכשפים, ופי המלחש הוא המים המכבים אותה. |
| 138a | [libb]ī mû [libbakunu abattu] | לבי – מים, לבכם – אבן. | `וַהֲסִרֹתִי אֶת לֵב הָאֶבֶן מִבְּשַׂרְכֶם וְנָתַתִּי לָכֶם לֵב בָּשָׂר` (יחזקאל לו:כו) | equivalent | **לב האבן**: הלב הקשה, שאינו נענה; ביחזקאל האל מחליף אותו, כאן הוא נשאר למכשפים. |
| 145 | EN₂ hūlā zūbā u ita[t]tukā | קסם. המסו, זובו והנת[כ]ו! | `כְּהִמֵּס דּוֹנַג מִפְּנֵי-אֵשׁ` (תהלים סח:ג) | equivalent | הצלמים הנמסים. |
| 149 | EN₂ šadû liktumkunūši | קסם. ההר יכסה אתכם, | `וְאָמְרוּ לֶהָרִים כַּסּוּנוּ וְלַגְּבָעוֹת נִפְלוּ עָלֵינוּ` (הושע י:ח) | equivalent | **ההרים המכסים והנופלים**: אותם שני פעלים – "כסו" ו"נפלו עלינו" (149, 156); בהושע האנשים מבקשים זאת מאימה, כאן המדבר מבקש זאת על המכשפים. |
| 149 | EN₂ šadû liktumkunūši | קסם. ההר יכסה אתכם, | `וּבָאוּ בִּמְעָרוֹת צֻרִים וּבִמְחִלּוֹת עָפָר מִפְּנֵי פַּחַד יְהוָה` (ישעיהו ב:יט) | divergence | המסתתרים בתוך הסלע. |
| 157 | ina zumrīya lū tapparrasā-ma TU₆ EN₂ | מגופי – תיגזרו! – לחש, קסם. | `וְהֵמָּה מִיָּדְךָ נִגְזָרוּ` (תהלים פח:ו) | equivalent | *parāsu* N = `נִגְזַר`: נכרת, מופרד. |
| 158 | EN₂ isâ isâ rēqā rēqā | קסם. סורו, סורו, רחקו, רחקו, | `סוּרוּ מִמֶּנִּי כָּל-פֹּעֲלֵי אָוֶן` (תהלים ו:ט) | equivalent | **"סורו ממני"** אל עושי הרע. |
| 171 | nīš šamaš kabti lū tamâtunu | בנפש שַׁמַשׁ הנכבד – הושבעתם, | `וְאוּלָם חַי יְהוָה וְחֵי נַפְשֶׁךָ` (שמואל א כ:ג) | equivalent | **השבועה "בחיי"**: *nīš DN* "בחיי האל" = `חַי DN`. |

### Parallels index (VI)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | EN₂ enlil qaqqadī pānūʾa ūmu | קסם. אֶנְלִיל – ראשי, פניי – *יום*, | `שׁוֹקָיו עַמּוּדֵי שֵׁשׁ מְיֻסָּדִים עַל אַדְנֵי פָז` (שיר השירים ה:טו) | divergence | **הגוף אבר אחר אבר**: בשיר השירים כל אבר משול לחומר יקר; כאן כל אבר "הוא" אל או חפץ אלוהי – והגוף כולו נעשה בלתי פגיע. |
| 2 | uraš ilu gitmālu lamassat pānīya | אוּרַשׁ, האל המושלם – אֵלַת־המגן של פניי, | `שָׁמְרֵנִי כְּאִישׁוֹן בַּת-עָיִן` (תהלים יז:ח); `יִצְּרֶנְהוּ כְּאִישׁוֹן עֵינוֹ` (דברים לב:י) | equivalent | **האישון כדבר השמור ביותר**: *lamassat pānī* "אֵלַת־המגן של הפנים" הוא כינוי לאישון, ובעברית `אִישׁוֹן` – "האיש הקטן" שבעין – וכמו . |
| 3 | kišādī ullu ša gula | צווארי – ענק של גּוּלָה, | `כִּי לִוְיַת חֵן הֵם לְרֹאשֶׁךָ; וַעֲנָקִים לְגַרְגְּרֹתֶךָ` (משלי א:ט) | equivalent | **הענק לצוואר** כקישוט ומגן. |
| 13 | ultēšib ina bābīya lugalirra ilu dan[nu] sukkal ilī papsukkal | הושבתי בפתחי את לוּגַלִירָּה, האל החזק, ואת וזיר האלים, פַּפְּסוּכַּל: | `וּפָסַח יְהוָה עַל הַפֶּתַח וְלֹא יִתֵּן הַמַּשְׁחִית לָבֹא אֶל בָּתֵּיכֶם לִנְגֹּף` (שמות יב:כג) | equivalent | **הפתח השמור מפני המשחית**: גם כאן השומר בפתח עוצר את "האל הרע" שנשלח להרוג (9). |
| 42 | ammēni ina bītīki iqattur qutru | מדוע בביתך מיתמר קיטור? | `מִי זֹאת עֹלָה מִן הַמִּדְבָּר כְּתִימְרוֹת עָשָׁן` (שיר השירים ג:ו) | equivalent | **תימרות העשן**. |
| 45 | (EN₂) lām ningirsu ina māti ilsû alāla | קסם. בטרם צעק נִינְגִּירְסוּ בארץ את האַלָלָא, | `יַיִן בַּיְקָבִים לֹא יִדְרֹךְ הַדֹּרֵךְ הֵידָד הִשְׁבַּתִּי` (ישעיהו טז:י) | equivalent | **קריאת העבודה**: ה`הֵידָד` של הדורכים בגת, כמו *alāla* – השיר הקצבי של העובדים בשדה. |
| 55 | [lēqīt]u ilqû ṣillī ina igāri | [הלוקח]ת לקחה את צלי מן הקיר, | `סָר צִלָּם מֵעֲלֵיהֶם וַיהוָה אִתָּנוּ` (במדבר יד:ט) | cognate | **הצל כמגן**: מי ש"צלו סר" – אין לו הגנה; *ṣillu* = `צֵל`. |
| 60 | pûša lū lipû šaptāša lū lubārū naksūti | פיה – יהי חֵלֶב, שפתיה – בגדים כרותים. | `וּבְלוֹיֵ מְלָחִים` (ירמיהו לח:יא) | equivalent | **הבגדים הבלויים** כדבר חסר ערך. |
| 69 | EN₂ kibrītu elletu mārat šamê rabûti anāku | קסם. גפרית טהורה, בת השמים הגדולים – אני. | `תִּשְׁכּוֹן בְּאָהֳלוֹ מִבְּלִי-לוֹ; יְזֹרֶה עַל-נָוֵהוּ גָפְרִית` (איוב יח:טו) | divergence | **הגפרית הנזרית על הבית**: באיוב היא סימן לחורבן ביתו של הרשע; במסופוטמיה (ואולי גם מאחורי איוב) – אמצעי טיהור: מעשנים בגפרית כדי לגרש את הרע. אותו מעשה, שני מובנים. |
| 69 | EN₂ kibrītu elletu mārat šamê rabûti anāku | קסם. גפרית טהורה, בת השמים הגדולים – אני. | `וַיהוָה הִמְטִיר עַל סְדֹם וְעַל עֲמֹרָה גָּפְרִית וָאֵשׁ: מֵאֵת יְהוָה מִן הַשָּׁמָיִם` (בראשית יט:כד) | divergence | **הגפרית "מן השמים"**: בבראשית היא יורדת מן השמים כעונש; כאן היא "בת השמים הגדולים" – והורדה מן השמים לארץ (71) כדי להגן. |
| 74 | ana mala qaqqadīya šamû kašdū | כמלוא ראשי – מושגים השמים, | `וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` (בראשית כח:יב) | equivalent | **הראש המגיע לשמים**: הסולם של יעקב; כאן – גופו של המדבר עצמו. |
| 76 | ina sissiktīya bītānīti | בכנף בגדי הפנימית | `עַל אֲשֶׁר כָּרַת אֶת כָּנָף אֲשֶׁר לְשָׁאוּל` (שמואל א כד:ה) | equivalent | **כנף הבגד** כחלק מן האדם (`../renderings.md` §4). |
| 84 | kibrītu ša sebe u sebe īpušāni [ ... ] ... lipšur-ma anāku lubluṭ TU₆ E[N₂] | הגפרית – את אשר עשו לי שבע ושבע […] … – תתיר, ואני אחיה! – לחש, ק[סם]. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | "ואני אחיה" (`../renderings.md` §2.4). |
| 88 | kī [ī]pušāni ul ileʾʾâʾinni | כאשר עשו לי – לא יכלו לי, | `רַבַּת צְרָרוּנִי מִנְּעוּרָי; גַּם לֹא-יָכְלוּ לִי` (תהלים קכט:ב) | equivalent | **"לא יכלו לי"**: אותו ניב (III 64–66). |
| 97 | ša tunassisāni qimmatkunu yâši | אשר נִעְנַעְתֶּם את צמרתכם אליי עצמי. | `שָׁרְקוּ וַיָּנִעוּ רֹאשָׁם עַל בַּת יְרוּשָׁלִָם` (איכה ב:טו) | equivalent | **הנעת הראש** כתנועה של לעג או של איום. |
| 106 | EN₂ id ākul alti appa[ši]š attahlip ātapir(i) | קסם. נהר – אכלתי, שתיתי, נמשחתי, התעטפתי, חבשתי, | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ וּשְׁתֵה בְלֶב טוֹב יֵינֶךָ` (קהלת ט:ז) | equivalent | **אכילה, שתייה, בגד ושמן** כסימני חיים רגילים, שמחים (ט:ח `וְשֶׁמֶן עַל רֹאשְׁךָ אַל יֶחְסָר`). |
| 106 | EN₂ id ākul alti appa[ši]š attahlip ātapir(i) | קסם. נהר – אכלתי, שתיתי, נמשחתי, התעטפתי, חבשתי, | `וַיִּרְחַץ וַיָּסֶךְ וַיְחַלֵּף שִׂמְלֹתָו … וַיָּשִׂימוּ לוֹ לֶחֶם וַיֹּאכַל` (שמואל ב יב:כ) | equivalent | **החזרה לחיים אחרי אבל וצום**: רחיצה, סיכה, בגדים, לחם – הסדר של דוד אחרי מות הילד. |
| 107 | id allab[iš ... ] paršīga | נהר – לבש[תי …] מצנפת, | `מִצְנֶפֶת וְאַבְנֵט` (שמות כח:ד) | equivalent | *paršīgu* = `מִצְנֶפֶת`, כיסוי הראש. |
| 119 | ana mākālê ilī rabûti išīmki enlil | למאכל האלים הגדולים ייעד אותך אֶנְלִיל. | `וְכָל קָרְבַּן מִנְחָתְךָ בַּמֶּלַח תִּמְלָח וְלֹא תַשְׁבִּית מֶלַח בְּרִית אֱלֹהֶיךָ מֵעַל מִנְחָתֶךָ` (ויקרא ב:יג) | equivalent | **המלח שבלי קרבן**: אין מנחה בלי מלח, כמו שאין סעודת אלים בלי מלח (120). בתורה – "מלח ברית"; כאן – גזרת אנליל. |
| 120 | ina balīki ul iššakkan naptan ina ekur | בלעדייך לא תיערך סעודה באכור, | `בְּרִית מֶלַח עוֹלָם הִוא לִפְנֵי יְהוָה` (במדבר יח:יט) | equivalent | **ברית המלח**: המלח כתנאי של הקרבן ושל הברית. |
| 125 | upšāšê muhrīnni-ma kīma ili bānîya lultammarki | קבלי ממני את המזימות – ואשבחך ואשבחך כאל בוני. | `תְּחִי-נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה) | equivalent | **חיים תמורת שבח** (II 17). |
| 126 | EN₂ ē kaššāptīya lū rahhātīya | קסם. הוֹי מכשפתי, או מְעַבַּרְתִּי – | `הוֹי לִמְתַפְּרוֹת כְּסָתוֹת עַל כָּל אַצִּילֵי יָדַי` (יחזקאל יג:יח) | equivalent | **ה"הוי" אל העושות**: גם יחזקאל פותח ב"הוי" את דברו נגד הנשים העושות כשפים בחוטים ובמטפחות; כאן ה"הוי" הוא של הנפגע עצמו, הפונה אל המכשפה שלו. |
| 127 | ša ana ištēn bēri ippuhu išāta | אשר ל(מרחק) בֵּרוּ אחד נפחה אש, | `וְנָפַחְתִּי עֲלֵיכֶם בְּאֵשׁ עֶבְרָתִי` (יחזקאל כב:כא) | cognate | *napāḫu išāta* = `נפח אש` (`../renderings.md` §5; III 22 `נפחתי אש`). |
| 130 | ina ūrīya maṣṣartu ina bābīya azzaqap kidinnu | על גגי נצירה, בפתחי זקפתי אוֹת־הֲגָנָה, | `שָׁוְא שָׁקַד שׁוֹמֵר` (תהלים קכז:א) | divergence | **השומר על הבית**: בתהלים שמירת האדם לשווא אם האל אינו שומר; כאן הנפגע עצמו מציב את הנצירה ואת אות ההגנה – והאלים הם השומרים שהוא מעמיד (147–149). |
| 130 | ina ūrīya maṣṣartu ina bābīya azzaqap kidinnu | על גגי נצירה, בפתחי זקפתי אוֹת־הֲגָנָה, | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן` (תהלים קכא:ד) | equivalent | הנצירה בלילה, שהיא כל עניינו של מקלו (I 1–3). |
| 131 | eršī altame ulinna | את ערשי הקפתי בחוט צבעוני, | `שִׁשִּׁים גִּבֹּרִים סָבִיב לָהּ` (שיר השירים ג:ז); `מִפַּחַד בַּלֵּילוֹת` (שיר השירים ג:ח) | divergence | **הערש המוקפת**: מיטת שלמה מוקפת גיבורים, ; כאן מקיף את הערש חוט. |
| 131 | eršī altame ulinna | את ערשי הקפתי בחוט צבעוני, | `תִּקְוַת חוּט הַשָּׁנִי` (יהושע ב:יח) | divergence | חוט צבעוני המגן על בית. וראו 126: אצל יחזקאל החוטים והמטפחות הם כלי העושות, כאן – כלי ההגנה. |
| 132 | ina rēš eršīya assaraq nuhurta | בראש ערשי זרקתי נוּחוּרְתּוּ, | `וְזָרְקוּ אֶת הַדָּם עַל הַמִּזְבֵּחַ סָבִיב` (ויקרא א:ה) | cognate | *sarāqu* "לפזר, לזרות (קמח, קטורת)" = `זרק`: הזריקה הטקסית. |
| 140 | kurummat eṭemmi rihīt g[irra q]āmîki | מנת אִט, ולד גִּירָה מְבַעֲרֵךְ, | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד) | divergence | **מזון למתים**: בווידוי המעשר הישראלי מצהיר שלא נתן ממנו למת; כאן מנת המת היא חלק מן ההגנה. |
| 141 | u nissaba šarratu mugaṣṣiṣat ubānātīki | ו(של) נִיסַבָּה המלכה, המקצצת את אצבעותייך. | `בְּהֹנוֹת יְדֵיהֶם וְרַגְלֵיהֶם מְקֻצָּצִים` (שופטים א:ז) | equivalent | **קיצוץ האצבעות**: נטרול האויב בידיו; כאן מאבדת המכשפה את האצבעות שבהן היא עושה כשפים. |
| 147 | ina imitti bābīya u šumēl bābīya | מימין לפתחי ומשמאל לפתחי | `יְהוָה צִלְּךָ עַל-יַד יְמִינֶךָ` (תהלים קכא:ה) | divergence | **השומר לימין**: בתהלים האל הוא השומר העומד לימין האדם; כאן שני אלים עומדים לימין הפתח ולשמאלו. |
| 149 | ilū ša maṣṣarte nāsih libbi mušt[ēmid]ū kalâti | אֵלֵי הנצירה, נוֹסְחֵי לב, [מצמידי] כליות – | `וּבֹחֵן לִבּוֹת וּכְלָיוֹת` (תהלים ז:י) | divergence | **הלב והכליות**: אותו צמד איברים; במקרא האל בוחן אותם, כאן אלי הנצירה עוקרים אותם ממקומם ולוחצים אותם. |
| 149 | ilū ša maṣṣarte nāsih libbi mušt[ēmid]ū kalâti | אֵלֵי הנצירה, נוֹסְחֵי לב, [מצמידי] כליות – | `בֹּחֵן כְּלָיוֹת וָלֵב` (ירמיהו יא:כ) | divergence |  |
| 150 | kaššāpta lidūkū-ma anāku lubluṭ | את המכשפה יהרגו, ואני אחיה. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | divergence | כמו ב־II 197: המכשפה מושא, ואחרים ממיתים אותה; כאן הממיתים הם אלי הנצירה שבפתח. |
| 156 | [ina tarbaṣīy]a aštapak šadâ ellu | [במרבצ]י שפכתי הר טהור, | `וַיִּשְׁפְּכוּ סֹלְלָה אֶל הָעִיר` (שמואל ב כ:טו); `וְשָׁפַכְתָּ עָלֶיהָ סֹלְלָה` (יחזקאל ד:ב) | cognate | *šapāku* "לערום (עפר)" = `שפך` במובן הערימה, כמו ; כאן הערימה היא הר טהור בחצר, מחסום נגד המכשפה. |

### Parallels index (VII)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 20 | mimmû ēpušu lū kušīru | כל אשר עשיתי – כִּשְׁרוֹן יהי! | `וְאֵת כָּל כִּשְׁרוֹן הַמַּעֲשֶׂה` (קהלת ד:ד) | cognate | *kušīru* (מן *kašāru* "להצליח") = `כִּשְׁרוֹן` |
| 20 | mimmû ēpušu lū kušīru | כל אשר עשיתי – כִּשְׁרוֹן יהי! | `אֵי זֶה יִכְשָׁר` (קהלת יא:ו) | cognate | כמו ; וגם כאן הוא "כשרון" של מעשה – "כל אשר עשיתי". |
| 23 | kīma šakkan irhû būlšu | כשם ששַׁכַּן עִבֵּר את בהמתו, | `שׁוֹרוֹ עִבַּר וְלֹא יַגְעִל` (איוב כא:י) | equivalent | **עיבור הבקר**: `עִבֵּר` הוא הפועל של *reḫû* (`../renderings.md` §2.1); באיוב הוא סימן לשגשוג הרשעים, כאן שַׁכַּן, אל החיות, מעבּר את עדרו. |
| 24 | lahra immerša ṣabīta armâša atāna mūrša | רחל – את כִּבְשָׂהּ, צבייה – את עוֹפְרָהּ, אֲתוֹן – את עִירָהּ, | `אֹסְרִי לַגֶּפֶן עִירֹה וְלַשֹּׂרֵקָה בְּנִי אֲתֹנוֹ` (בראשית מט:יא) | cognate | *atānu* = `אָתוֹן` |
| 24 | lahra immerša ṣabīta armâša atāna mūrša | רחל – את כִּבְשָׂהּ, צבייה – את עוֹפְרָהּ, אֲתוֹן – את עִירָהּ, | `אֹסְרִי לַגֶּפֶן עִירֹה וְלַשֹּׂרֵקָה בְּנִי אֲתֹנוֹ` (בראשית מט:יא) | cognate | ולצידה הוולד (*mūru* ~ `עַיִר` [equivalent]). |
| 29 | EN₂ šamnu ellu šamnu ebbu šamnu namru | קסם. שמן טהור, שמן צח, שמן זוהר, | `כַּשֶּׁמֶן הַטּוֹב עַל-הָרֹאשׁ` (תהלים קלג:ב) | cognate | *šamnu* = `שֶׁמֶן` |
| 29 | EN₂ šamnu ellu šamnu ebbu šamnu namru | קסם. שמן טהור, שמן צח, שמן זוהר, | `כַּשֶּׁמֶן הַטּוֹב עַל-הָרֹאשׁ` (תהלים קלג:ב) | cognate | גם במקרא השמן היורד על הראש הוא שמן של ברכה ושל קדושה. |
| 33 | uṭahhidka šaman tapšuhti | דִּשַּׁנְתִּי אותך בשמן ההרגעה | `דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי` (תהלים כג:ה) | equivalent | **"דישון" בשמן**: *ṭuḫḫudu* ("לשפוע, להרוות") הוא בדיוק `דִּשֵּׁן`; בתהלים האל מדשן את ראש המתפלל, כאן האשף את גופו של הנפגע. |
| 35 | apšuška šaman balāṭi | משחתי אותך בשמן החיים, | `לֹא זֹרוּ וְלֹא חֻבָּשׁוּ וְלֹא רֻכְּכָה בַּשָּׁמֶן` (ישעיהו א:ו) | equivalent | **השמן כתרופה**: הפצע שלא רוכך בשמן ולא נחבש בישעיהו – וכאן הנפגע נמשח בשמן ונחבש בקשר של גולה (42). |
| 38 | ušatbi qūla kūra (u) nissata ša pagrīka | הֵקַמְתִּי את הדממה, הכהות (ו)היגון של גוויתך, | `וְדַאֲבוֹן נָפֶשׁ` (דברים כח:סה) | equivalent | **היגון כמכה**: ברשימת הקללות של דברים, כמו כאן ברשימת המחלות (העברית `דַּאֲבוֹן` היא עתה של *ašuštu*, V 71). |
| 42 | ina riksi rabābi ša gula | בקשר הרך של גּוּלָה, | `לֹא זֹרוּ וְלֹא חֻבָּשׁוּ` (ישעיהו א:ו) | equivalent | **התחבושת**: ראו 35. |
| 52 | kīma annaku? parzillu? ipšu bārtu amāt lemutti | כמו אֲנָךְ?, ברזל? – מעשה, מרד, דבר רעה, | `וְהִנֵּה אֲדֹנָי נִצָּב עַל חוֹמַת אֲנָךְ` (עמוס ז:ז) | cognate | *annaku* "בדיל" = `אֲנָךְ` |
| 52 | kīma annaku? parzillu? ipšu bārtu amāt lemutti | כמו אֲנָךְ?, ברזל? – מעשה, מרד, דבר רעה, | `וְהִנֵּה אֲדֹנָי נִצָּב עַל חוֹמַת אֲנָךְ` (עמוס ז:ז) | cognate | המלה העברית היחידה מן השורש, שמובנה במקרא שנוי במחלוקת ("אנך" של בנאים או "בדיל"). |
| 55 | EN₂ attimannu kaššāptu ša īpuša ṣalmī | קסם. מי אַתְּ, מכשפה, אשר עשתה את צלמי, | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ` (בראשית א:כו) | cognate | *ṣalmu* = `צֶלֶם` |
| 55 | EN₂ attimannu kaššāptu ša īpuša ṣalmī | קסם. מי אַתְּ, מכשפה, אשר עשתה את צלמי, | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ` (בראשית א:כו) | cognate | (`../renderings.md` §4): **העושה צלם של אדם** – כאן המכשפה, שעושה צלם כדי לשלוט באדם; ראו 56–61, אוצר המלים של היצירה. |
| 59 | umaššilu bunnannîya | הִמְשִׁילָה את תוארי, | `אֵלֵינוּ נִמְשָׁלְתָּ` (ישעיהו יד:י) | cognate | *mašālu* D = `הִמְשִׁיל` |
| 59 | umaššilu bunnannîya | הִמְשִׁילָה את תוארי, | `אֵלֵינוּ נִמְשָׁלְתָּ` (ישעיהו יד:י) | cognate | לעשות "משל", דבר דומה. |
| 59 | umaššilu bunnannîya | הִמְשִׁילָה את תוארי, | `מַה תָּאֳרוֹ` (שמואל א כח:יד) | equivalent | *bunnannû* = `תֹּאַר`. |
| 63 | (ina) mahar šamaš ṣalamki ēṣir | לפני שַׁמַשׁ צרתי את צלמך, | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | cognate | *eṣēru* "לצייר, לשרטט" = `צָר` |
| 63 | (ina) mahar šamaš ṣalamki ēṣir | לפני שַׁמַשׁ צרתי את צלמך, | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | cognate | (ההנחיות §6.7: `יצר`): הצלם "נוצר" – כאן בקמח (66), כציור או כגילוף. |
| 69 | ipšu tēpušīnni ēpuški | המעשה אשר עָשִׂית לי – עָשִׂיתִי לך, | `גֹּמְלִים אַתֶּם עָלַי קַל מְהֵרָה אָשִׁיב גְּמֻלְכֶם בְּרֹאשְׁכֶם` (יואל ד:ד) | equivalent | **מידה כנגד מידה**: ראו 71. |
| 70 | mihir tušamhirīnni ušamhirki | את הפגע אשר הִפְגַּעְתְּ בי – הִפְגַּעְתִּי בך, | `וַיהוָה הִפְגִּיעַ בּוֹ אֵת עֲוֹן כֻּלָּנוּ` (ישעיהו נג:ו) | equivalent | *šumḫuru* "להפגיש, להעביר" = `הִפְגִּיעַ` (`../renderings.md` §10.3): מה שפגע באחד מועבר לאחר. |
| 71 | gimil tagmilīnni utīr agmilki | את הגמול אשר גמלת לי – השבתי, גמלתי לך. | `כִּי אַתָּה גְּמַלְתַּנִי הַטּוֹבָה וַאֲנִי גְּמַלְתִּיךָ הָרָעָה` (שמואל א כד:יז) | cognate | *gamālu* / *gimillu* = `גָּמַל` / `גְּמוּל` |
| 71 | gimil tagmilīnni utīr agmilki | את הגמול אשר גמלת לי – השבתי, גמלתי לך. | `אָשִׁיב גְּמֻלְכֶם בְּרֹאשְׁכֶם` (יואל ד:ד) | cognate | וב גם *târu* D = `הֵשִׁיב`: *gimilla turru* = `הֵשִׁיב גְּמוּל` (קורפוס החוקים; II 103 `המשיב את גמולי`). |
| 78 | ana muhhīki u lānīki lillik-(ma) anāku lubluṭ | וילך על קדקדך ועל גזרתך, (ו)אני אחיה. | `וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | equivalent | **הרע חוזר אל קדקד עושהו** (`../renderings.md` §4). |
| 79 | ēnītu līnânni māhirtu limhuranni | המחליפה תחליף אותי, המקבלת תקבל ממני, | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ` (ויקרא כז:י) | equivalent | *enû* = `הֶחֱלִיף` (`../renderings.md` §3): **ההחלפה**, דבר במקום דבר. |
| 80 | EN₂ bāʾirtu ša bāʾirāti | קסם. צַיֶּדֶת הצַּיָּדוֹת, | `לְצוֹדֵד נְפָשׁוֹת` (יחזקאל יג:יח) | equivalent | **הציידות**: יחזקאל מתאר נשים עושות כשפים ש"צדות נפשות" בחוטים ובמטפחות (`../renderings.md` §2.1). |
| 82 | ša ina sūqāti nadât šēssa | אשר בשווקים מושלכת רשתה, | `אֲשֶׁר הִיא מְצוֹדִים וַחֲרָמִים לִבָּהּ` (קהלת ז:כו) | equivalent | **האשה כרשת**: קהלת מתאר את האשה "המצודים והחרמים"; כאן רשתה של המכשפה פרושה ברחובות. |
| 82 | ša ina sūqāti nadât šēssa | אשר בשווקים מושלכת רשתה, | `פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת` (משלי ז:יב) | equivalent | האשה הזרה האורבת בשוק לעלם (משלי ז). |
| 84 | eṭlūt āli ubtanaʾʾa | את עלמי העיר מחפשת ומחפשת, | `וְאֵשֶׁת אִישׁ נֶפֶשׁ יְקָרָה תָצוּד` (משלי ו:כו) | equivalent | האשה הצדה את העלם. |
| 94 | mušlahhū līpušūki rikiski aheppe | מוּשְׁלַחּוּ יעשו לך – את קשרך אשבור. | `אֲשֶׁר לֹא-יִשְׁמַע לְקוֹל מְלַחֲשִׁים` (תהלים נח:ו) | equivalent | **מלחשי הנחשים** (`../renderings.md` §2.1). |
| 99 | u akkâši ruqbūta ušallakki | ואותך עצמך – לרקבון מוליך אני אותך, | `וּכְרָקָב בְּעַצְמוֹתָיו מְבִישָׁה` (משלי יב:ד) | cognate | *ruqbūtu* = `רִקָּבוֹן` |
| 99 | u akkâši ruqbūta ušallakki | ואותך עצמך – לרקבון מוליך אני אותך, | `וּכְרָקָב בְּעַצְמוֹתָיו מְבִישָׁה` (משלי יב:ד) | cognate | (שורש רקב). |
| 103 | ea mašmaš ilī upaṭṭir-ma mê uštābil | אאה, מלחש האלים, פטר – והוביל למים. | `וּמָחָה אֶל מֵי הַמָּרִים` (במדבר ה:כג) | divergence | **הדבר הרע נמחה במים**: בטקס הסוטה האלות נמחות אל המים והאשה שותה אותם; כאן הכשפים מותרים ונמסרים למים, שנושאים אותם הרחק. |
| 104 | pûki lemnu epera limla | פיך הרע – עפר יימלא, | `וְאַחַר יִמָּלֵא-פִיהוּ חָצָץ` (משלי כ:יז) | equivalent | **הפה המתמלא** כעונש על דבר רע |
| 104 | pûki lemnu epera limla | פיך הרע – עפר יימלא, | `וְאַחַר יִמָּלֵא-פִיהוּ חָצָץ` (משלי כ:יז) | cognate | *eperu* = `עָפָר` (`../renderings.md` §4; שמור). |
| 114 | EN₂ amsi qātīya ubbiba zumrī | קסם. רחצתי את ידיי, ניקיתי את גופי | `יִרְחֲצוּ אֶת יְדֵיהֶם עַל הָעֶגְלָה הָעֲרוּפָה בַנָּחַל` (דברים כא:ו) | equivalent | **רחיצת הידיים כטקס**: בדברים זקני העיר רוחצים את ידיהם ומצהירים על נקיונם מן הדם; כאן הנפגע רוחץ את ידיו כדי שהרע יירד מהן עם המים. |
| 114 | EN₂ amsi qātīya ubbiba zumrī | קסם. רחצתי את ידיי, ניקיתי את גופי | `אֶרְחַץ בְּנִקָּיוֹן כַּפָּי` (תהלים כו:ו); `רַחֲצוּ הִזַּכּוּ` (ישעיהו א:טז) | equivalent |  |
| 118 | lumun šunāti idāti ittāti lemnēti lā ṭābāti | רֹעַ חלומות, אוֹתוֹת, אוֹתוֹת רעים, לא־טובים, | `כִּי יָקוּם בְּקִרְבְּךָ נָבִיא אוֹ חֹלֵם חֲלוֹם; וְנָתַן אֵלֶיךָ אוֹת אוֹ מוֹפֵת` (דברים יג:ב) | cognate | *ittu* = `אוֹת` |
| 118 | lumun šunāti idāti ittāti lemnēti lā ṭābāti | רֹעַ חלומות, אוֹתוֹת, אוֹתוֹת רעים, לא־טובים, | `כִּי יָקוּם בְּקִרְבְּךָ נָבִיא אוֹ חֹלֵם חֲלוֹם; וְנָתַן אֵלֶיךָ אוֹת אוֹ מוֹפֵת` (דברים יג:ב) | cognate | ולצידו החלום: **החלום והאות** – שני ערוצי הידיעה של העתיד; בבבל הם מבשרים רע שצריך "לרחוץ", ובדברים הם מבחן לנאמנות. |
| 124 | murṣu diʾu diliptu | חולי, כאב־ראש, נדודים, | `וְשָׂבַעְתִּי נְדֻדִים עֲדֵי-נָשֶׁף` (איוב ז:ד) | equivalent | **הנדודים** (חוסר השינה) כחלק מסבלו של החולה. |
| 126 | ūʾa ayya huṣṣu hīpi libbi | אוי, אבוי, דכדוך, שבר־לב, | `לְמִי אוֹי לְמִי אֲבוֹי` (משלי כג:כט) | equivalent | **"אוי" ו"אבוי"** כשמות של צרה: שתי הקריאות הפכו לשמות עצם, כמו כאן. |
| 128 | arrat il[ī m]ihirti ilī tazzimti [ilī n]īš ili nīš qātī māmītu | מְאֵרַת אלים, עתירת אלים, תלונת [אלים], נפש אל, נשיאת יד, שבועה, | `כִּי אֶשָּׂא אֶל שָׁמַיִם יָדִי` (דברים לב:מ); `נָשָׂאתִי אֶת יָדִי` (שמות ו:ח) | equivalent | **נשיאת היד** כמחווה של שבועה; וכן . |
| 131 | liššahiṭ-m[a ana mu]hhi ṣalam nigsagilê lillik | ייתלש, וילך על קדקד צלם התמורה, | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) | equivalent | **הנושא במקום האדם**: השעיר ביום הכיפורים נושא את העוונות אל המדבר; כאן צלם התמורה נושא את הרע (132). |
| 132 | ṣalam nigs[agil]ê arnī dinānī lizbil | צלם ה[תמורה] – את עווני במקומי יסבול, | `וַעֲוֹנֹתָם הוּא יִסְבֹּל` (ישעיהו נג:יא) | cognate | *zabālu* = `סָבַל` |
| 132 | ṣalam nigs[agil]ê arnī dinānī lizbil | צלם ה[תמורה] – את עווני במקומי יסבול, | `וַעֲוֹנֹתָם הוּא יִסְבֹּל` (ישעיהו נג:יא) | cognate | *arnu* = `עָוֹן` |
| 132 | ṣalam nigs[agil]ê arnī dinānī lizbil | צלם ה[תמורה] – את עווני במקומי יסבול, | `וַעֲוֹנֹתָם הוּא יִסְבֹּל` (ישעיהו נג:יא) | equivalent | (`../renderings.md` §3): **הנושא את עוון האחר** – "עבד ה'" בישעיהו, וכאן צלם הקמח. |
| 137 | ea šamaš u marduk yâši rūṣānim-ma | אֵאָה, שַׁמַשׁ ומרדוך – חושו אליי עצמי, ו־ | `יְהוָה לְעֶזְרָתִי חוּשָׁה` (תהלים ע:ב) | equivalent | *rāṣu* "לרוץ לעזרה" = `חוּשׁ` (ספרות החכמה: "לא חש אֵלִי"). |
| 142 | pite qaqqaru (u) muhur arnīya | פְּתַח, קרקע, (ו)קַבֵּל את עוונותיי, | `אֲשֶׁר פָּצְתָה אֶת פִּיהָ לָקַחַת אֶת דְּמֵי אָחִיךָ מִיָּדֶךָ` (בראשית ד:יא) | divergence | **האדמה הפותחת את פיה ומקבלת**: בבראשית היא מקבלת את הדם, והקללה נשארת על הרוצח; כאן היא מקבלת את העוון, והנפגע נקי (`../renderings.md` §4). |
| 142 | pite qaqqaru (u) muhur arnīya | פְּתַח, קרקע, (ו)קַבֵּל את עוונותיי, | `וַתִּפְתַּח הָאָרֶץ אֶת פִּיהָ וַתִּבְלַע אֹתָם` (במדבר טז:לב) | divergence |  |
| 143 | ša kaššāptu ukaššipanni eššebû usalliʾanni | על אשר המכשפה כישפה אותי, האֶשֶּׁבּוּ הִזָּה עליי. | `וְהִזָּה עַל הַמִּטַּהֵר מִן הַצָּרַעַת שֶׁבַע פְּעָמִים` (ויקרא יד:ז) | divergence | *salāḫu* = `הִזָּה` |
| 143 | ša kaššāptu ukaššipanni eššebû usalliʾanni | על אשר המכשפה כישפה אותי, האֶשֶּׁבּוּ הִזָּה עליי. | `וְהִזָּה עַל הַמִּטַּהֵר מִן הַצָּרַעַת שֶׁבַע פְּעָמִים` (ויקרא יד:ז) | equivalent | (`../renderings.md` §3): ההזאה של התורה מטהרת; ההזאה של האשבו מטמאת. |
| 147 | [mār-šipri? i]ṣṣabat harrāna | [השליח?] אחז אורח. | `וְיֹאחֵז צַדִּיק דַּרְכּוֹ` (איוב יז:ט) | equivalent | **"אחז דרך"**: אותו ניב (*ḫarrāna ṣabātu*). |
| 164 | ṭūb libbi (u) ṭūb šīri lirteddânni | טוּב לב (ו)טוּב בשר ירדפו וירדפו אותי, | `אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל-יְמֵי חַיָּי` (תהלים כג:ו) | equivalent | **הטוב הרודף**: אותו רעיון באותן מלים – *ṭūbu* = `טוּב`, *redû* = `רָדַף` (`../renderings.md` §2.4): הטוב "רודף" אחר האדם כל ימיו. |
| 164 | ṭūb libbi (u) ṭūb šīri lirteddânni | טוּב לב (ו)טוּב בשר ירדפו וירדפו אותי, | `בְּשִׂמְחָה וּבְטוּב לֵבָב` (דברים כח:מז) | cognate | *ṭūb libbi* = `טוּב לֵב`, השמחה. |
| 166 | [šu]tti āmuru ana damiqti liššakna | החלום אשר ראיתי – לחסד יושם, | `וַיְהִי כַּאֲשֶׁר פָּתַר לָנוּ כֵּן הָיָה` (בראשית מא:יג) | equivalent | **החלום נקבע אחר כך**: משמעות החלום אינה קבועה – היא "מושמת" (*šakānu*) לטובה בטקס, כמו שבסיפור יוסף היא נקבעת בפתרון. |
| 171 | ina hurhummat mê mīli rašubbat nāri | בקצף מי הגאות, בנוֹרָאוּת הנהר, | `כְּקֶצֶף עַל פְּנֵי מָיִם` (הושע י:ז) | equivalent | **הקצף שעל המים** (*ḫurḫummatu* = `קֶצֶף`). |
| 173 | [m]û gummirāni rašubbatkunu | מים, גִּמְרוּ לי את נוֹרָאוּתְכֶם! | `יְהוָה יִגְמֹר בַּעֲדִי` (תהלים קלח:ח) | cognate | *gamāru* = `גָּמַר` |
| 173 | [m]û gummirāni rašubbatkunu | מים, גִּמְרוּ לי את נוֹרָאוּתְכֶם! | `יְהוָה יִגְמֹר בַּעֲדִי` (תהלים קלח:ח) | cognate | "להשלים (פעולה) למען מישהו". |
| 178 | EN₂ adi tappuha uqâka bēlī šamaš | קסם. עד אשר זרחת – קיוויתי לך, אדוני שַׁמַשׁ. | `קִוִּיתִי יְהוָה קִוְּתָה נַפְשִׁי` (תהלים קל:ה) | cognate | *qu''û* = `קִוָּה` |
| 178 | EN₂ adi tappuha uqâka bēlī šamaš | קסם. עד אשר זרחת – קיוויתי לך, אדוני שַׁמַשׁ. | `נַפְשִׁי לַאדֹנָי מִשֹּׁמְרִים לַבֹּקֶר` (תהלים קל:ו) | cognate | **המחכה לבוקר**: גם כאן הנפגע חיכה כל הלילה לזריחה. |

### Parallels index (VIII)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | [E]N₂ adi tappuha [uq]âka bēlī šamaš | קסם. עד אשר זרחת – [קיוויתי] לך, אדוני שַׁמַשׁ. | `קִוִּיתִי יְהוָה קִוְּתָה נַפְשִׁי` (תהלים קל:ה) | cognate | *qu''û* = `קִוָּה` |
| 1 | [E]N₂ adi tappuha [uq]âka bēlī šamaš | קסם. עד אשר זרחת – [קיוויתי] לך, אדוני שַׁמַשׁ. | `נַפְשִׁי לַאדֹנָי מִשֹּׁמְרִים לַבֹּקֶר` (תהלים קל:ו) | cognate | המחכה לבוקר כל הלילה. |
| 23 | ana ritti ša irkusu riksa | אל הכף אשר קשרה קשר. | `וַיִּקְשָׁר קֶשֶׁר` (מלכים ב טו:ל) | divergence | **"קשר קשר"**: בעברית הצירוף הוא "קשירת קשר" של מורדים; כאן הוא קשר של ממש – הקשר המאגי של המכשפה, שגם הוא מזימה סודית נגד אדם. השורשים אינם קרובים (*rks* / `קשר`). |
| 38 | [i]d puluhtaša iddâ elīša | הנהר השליך את פחדה עליה. | `וּמְגוּרֹתָם אָבִיא לָהֶם` (ישעיהו סו:ד) | equivalent | **הפחד חוזר על בעליו**: מה שהמכשפה הטילה על הנפגע – מוטל עליה. |
| 53 | kišpūša lū pû [l]ittap(a)raššadū elīš[a] | כשפיה – מוץ יהיו, ינודו וינודו עליה! | `כַּמֹּץ אֲשֶׁר-תִּדְּפֶנּוּ רוּחַ` (תהלים א:ד) | equivalent | **המוץ ברוח**, כמו V 53. |
| 55 | kaššāptu nakratanni | המכשפה מתנכרת לי, | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | cognate | *nakāru* "להיות עוין, זר" = `התנכר` |
| 55 | kaššāptu nakratanni | המכשפה מתנכרת לי, | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | cognate | (קורפוס הקינות: *kur₂* / *nakru* = `נָכְרִי`). |
| A+1 | [ ... ] tākaltaki amha[ṣ] | […] את קֵבָתֵךְ מחצתי, | `וְאֶת הָאִשָּׁה אֶל קֳבָתָהּ` (במדבר כה:ח) | equivalent | **המכה בבטן האשה**: פנחס דוקר את המדיינית "אל קבתה"; כאן הנפגע מוחץ את קיבת המכשפה. |
| A+3 | unâti ša libbīki kalîšina adlu[h] | את כלי לבך כולם דָּלַחְתִּי, | `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ` (יחזקאל לב:ב) | cognate | *dalāḫu* "לעכור" = `דלח` |
| A+3 | unâti ša libbīki kalîšina adlu[h] | את כלי לבך כולם דָּלַחְתִּי, | `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ` (יחזקאל לב:ב) | cognate |  |
| A+26 | EN₂ pû idbub lemnāti | קסם. הפה דיבר רעות, | `פִּיךָ שָׁלַחְתָּ בְרָעָה` (תהלים נ:יט) | equivalent | **הפה הדובר רעה**. |
| A+44 | sēkirat nešmê sākikat uzni | הסוכרת שמיעה, האוטמת אוזן, | `כְּמוֹ-פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` (תהלים נח:ה) | equivalent | **אטימת האוזן** בפרק של המלחשים (תהלים נח:ו `לְקוֹל מְלַחֲשִׁים`) |
| A+44 | sēkirat nešmê sākikat uzni | הסוכרת שמיעה, האוטמת אוזן, | `אֹטֵם אָזְנוֹ מִשְּׁמֹעַ דָּמִים` (ישעיהו לג:טו) | divergence | שם האטימה היא מידה טובה, כאן מעשה הכשף. |
| A+44 | sēkirat nešmê sākikat uzni | הסוכרת שמיעה, האוטמת אוזן, | `אֹטֵם אָזְנוֹ מִשְּׁמֹעַ דָּמִים` (ישעיהו לג:טו) | cognate | *sekēru* = `סָכַר` (ההנחיות §6.7). |
| B+3 | [ere]škigal ana erṣeti ay ušēr[idki] | [אֶרֶ]שְׁכִּיגַל אל הארץ אל תורידֵ[ךְ], | `וְאַתָּה הָשְׁלַכְתָּ מִקִּבְרְךָ כְּנֵצֶר נִתְעָב … כְּפֶגֶר מוּבָס` (ישעיהו יד:יט); `לֹא תֵחַד אִתָּם בִּקְבוּרָה` (ישעיהו יד:כ) | equivalent | **המת שאינו נקבר**: מלך בבל "מושלך מקברו" כפגר נרמס, . |
| B+4 | [eli p]agrīki erû u zību linnadrū | [על] פגרך – נשר ועיט ישתוללו, | `וַיֵּרֶד הָעַיִט עַל הַפְּגָרִים` (בראשית טו:יא) | cognate | *pagru* = `פֶּגֶר` |
| B+4 | [eli p]agrīki erû u zību linnadrū | [על] פגרך – נשר ועיט ישתוללו, | `וַיֵּרֶד הָעַיִט עַל הַפְּגָרִים` (בראשית טו:יא) | cognate | (`../renderings.md` §4), *zību* = `עַיִט` |
| B+4 | [eli p]agrīki erû u zību linnadrū | [על] פגרך – נשר ועיט ישתוללו, | `וַיֵּרֶד הָעַיִט עַל הַפְּגָרִים` (בראשית טו:יא) | equivalent | **העוף הדורס על הפגרים** – אותה תמונה, באותן שתי מלים. |
| B+4 | [eli p]agrīki erû u zību linnadrū | [על] פגרך – נשר ועיט ישתוללו, | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) | equivalent | הקללה של הגוף שאינו נקבר. |
| B+6 | kalbu u kalbatu libaṣṣirūki | כלב וכלבה יקרעו אותך, | `הַכְּלָבִים יֹאכְלוּ אֶת אִיזֶבֶל בְּחֵל יִזְרְעֶאל` (מלכים א כא:כג); `וּכְשָׁפֶיהָ הָרַבִּים` (מלכים ב ט:כב) | equivalent | **הכלבים ואיזבל**: גם המלכה שהמקרא קורא לה בעלת  נשארת בלי קבורה והכלבים אוכלים את בשרה (B+7) – הקשר החזק ביותר במקלו לסיפור איזבל. |
| B+7 | kalbu u kalbatu libaṣṣirū šīrīki | כלב וכלבה יקרעו את בשרך – | `בְּחֵלֶק יִזְרְעֶאל יֹאכְלוּ הַכְּלָבִים אֶת בְּשַׂר אִיזָבֶל` (מלכים ב ט:לו); `וְלֹא מָצְאוּ בָהּ כִּי אִם הַגֻּלְגֹּלֶת` (מלכים ב ט:לה) | equivalent | אותם כלבים, אותו "בשר"; . |
| B+9 | EN₂ attā ṣillī attā bāštī | קסם. אתה – צלי, אתה – גאוותי, | `סָר צִלָּם מֵעֲלֵיהֶם` (במדבר יד:ט) | cognate | *ṣillu* = `צֵל` |
| B+9 | EN₂ attā ṣillī attā bāštī | קסם. אתה – צלי, אתה – גאוותי, | `סָר צִלָּם מֵעֲלֵיהֶם` (במדבר יד:ט) | cognate | (`../renderings.md` §2.3): **הצל כמגן**, ומי שצלו סר ממנו – אבד. |
| B+18 | attā yāʾu anāku kû | אתה – שלי, ואני – שלך. | `דּוֹדִי לִי וַאֲנִי לוֹ` (שיר השירים ב:טז) | divergence | **"אתה שלי ואני שלך"**: אותה נוסחה של השתייכות הדדית; בשיר השירים בין אוהבים, כאן בין אדם לצלו – לדמות של עצמו: היא שייכת רק לו, ולכן אין למכשפה חלק בה. |

### Parallels index (RT)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3' | [ma]rṣa mīs pî [teppuš ... ] | [ל]חולה רחיצת פה [תעשה …] | `יִרְחֲצוּ אֶת יְדֵיהֶם` (דברים כא:ו) | equivalent | הרחיצה כטקס טיהור (§3); כאן הפה. |
| 6' | EN₂ alsīkun[ūš]i šalāšīšu imannu | את הקסם "צעקתי אליכם" שלוש פעמים ימנה. | `קֹסֵם קְסָמִים` (דברים יח:י) | equivalent | *šiptu* = `קסם` (`../renderings.md` §3; בהערה, בהיקרות הראשונה בקובץ). |
| 9' | [gizillâ ina išā]t kibrīti t[aq]âdam-ma ṣalam lipî | [את האבוקה באש] גפרית תקדח, וצלם חֵלֶב – | `כִּי אֵשׁ קָדְחָה בְאַפִּי` (דברים לב:כב) | cognate | *qâdu* = `קדח` (`../renderings.md` §5). |
| 14' | ana bīti ana? ūri? tellī-ma? ištēn paṭīra ana mahar nuska tarakkas | אל הבית, אל הגג? תעלה?, ומעמד אחד לפני נוסכו תערוך. | `הַעֹרְכִים לַגַּד שֻׁלְחָן` (ישעיהו סה:יא); `תַּעֲרֹךְ לְפָנַי שֻׁלְחָן` (תהלים כג:ה) | equivalent | *paṭīra rakāsu* "לערוך שולחן (קרבן)" לאל; . |
| 15' | [ ... tazz]az-ma ina muhhi nappaṭi kirra tašakkan | […] תעמוד, ועל המחתה כד תשים. | `מְלֹא הַמַּחְתָּה גַּחֲלֵי אֵשׁ` (ויקרא טז:יב); `אִישׁ מַחְתָּתוֹ` (ויקרא י:א) | equivalent | כלי הגחלים של הקטורת; . |
| 22' | zisurrâ huluppaqqa teṣṣir | זיסורא (סביב) החוּלוּפַּקּוּ תָּצוּר. | `וְחַקּוֹתָ עָלֶיהָ עִיר אֶת יְרוּשָׁלִָם` (יחזקאל ד:א); `וְצַרְתָּ עָלֶיהָ` (יחזקאל ד:ג) | divergence | גם הנביא מצייר, ואחר כך : הציור והמצור כמעשה סמלי; כאן הקו הוא הגנה, שם מצור. |
| 26' | EN₂ nuska annûtu <ṣalmī> ēp[išīy]a ubānšu ana muhhi itarraṣ-ma imannu | הקסם "נוסכו, אלה ⟨צלמי⟩ עושי": את אצבעו עליהם ישלח, וימנה. | `שְׁלַח אֶצְבַּע וְדַבֶּר אָוֶן` (ישעיהו נח:ט) | divergence | שליחת האצבע כמחווה של האשמה; שם היא חטא, כאן היא העדות לפני השופט. |
| 29' | qanâ ṭāba ina libbi tusanna[š ... ] tasallah | וקנה טוב בתוכה תתקע, […] תזה. | `וְקָנֶה הַטּוֹב מֵאֶרֶץ מֶרְחָק` (ירמיהו ו:כ); `וּקְנֵה בֹשֶׂם` (שמות ל:כג) | cognate | אותן שתי מלים לאותו צמח ריחני, ושם עם `לְבוֹנָה` כמנחה;  בשמן המשחה. |
| 40' | EN₂ attimannu kaššāptu ša ina nāri imluʾu ṭīdâya ṣalam ṭīdi ša lipâ ballu | הקסם "מי אַתְּ, מכשפה, אשר בנהר מילאה את טיטי": צלם טיט הבלול בחֵלֶב. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | cognate | *kaššāptu* = `מְכַשֵּׁפָה` (`../renderings.md` §2.1; ההיקרות הראשונה בקובץ). |
| 56' | EN₂ haṣabti sūqāti ammēni tugda(n)narrênni haṣabti sūq erbetti | הקסם "חרס השווקים, מדוע מתגרה את ומתגרה בי?": חרס מפרשת הדרכים – | `עָמַד מֶלֶךְ בָּבֶל אֶל אֵם הַדֶּרֶךְ בְּרֹאשׁ שְׁנֵי הַדְּרָכִים לִקְסָם קָסֶם` (יחזקאל כא:כו) | divergence | פרשת הדרכים כמקום של כישוף; שם מלך בבל קוסם בה, כאן לוקחים ממנה חרס. |
| 57' | l[ipâ ta]paššaš <na>bāš[i t]aka[r]r[ik] | [בחֵלֶב] תמשח, בשָׁנִי תכרוך. | `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד); `וְהִשְׁלִיךְ אֶל תּוֹךְ שְׂרֵפַת הַפָּרָה` (במדבר יט:ו) | equivalent | צמר צבוע אדום בטקס טיהור; : השני ועץ הארז מושלכים אל השרפה – כמו החפצים הכרוכים בצמר אדום כאן ('64–'69), הנזרקים אל כלי השריפה. |
| 60' | EN₂ bišlī bišlī pallurti qanê ša gisal[lê (teppuš)] | הקסם "בַּשְּׁלִי, בשלי": שתי־וערב של קני מעקה [(תעשה)]. | `וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | equivalent | *gisallû* הוא המעקה שעל הגג. |
| 61' | šina qanê ša malû ina muhhi ahāmiš taparrik | שני קנים מלאים – זה על זה תשכל. | `שִׂכֵּל אֶת יָדָיו` (בראשית מח:יד) | equivalent | הנחה מוצלבת; *parāku* "להניח לרוחב". |
| 69' | ṭurri šīpāti peṣâti sebet kiṣrī takaṣṣar-m[a tabattaq? ana libbi huluppaqqi tanaddi?] | חבל של צמר לבן – שבעה צרורות תצרור, [תנתק?, אל תוך החולופקו תשליך?]. | `וְהִשְׁלִיךְ אֶל תּוֹךְ שְׂרֵפַת הַפָּרָה` (במדבר יט:ו) | equivalent | החוט האדום מושלך אל תוך השרפה; כאן (בשחזור) החבל הקשור אל תוך כלי השריפה. |
| 86' | EN₂ akbus gallâya ṣalam līši ina šēpīšu ikabbas | הקסם "דרכתי על הגַּלּוּ שלי": על צלם בצק ברגליו ידרוך. | `וְעַסּוֹתֶם רְשָׁעִים כִּי יִהְיוּ אֵפֶר תַּחַת כַּפּוֹת רַגְלֵיכֶם` (מלאכי ג:כא) | equivalent | הדריכה על הרשעים ברגליים. |
| 91' | qil[ûta adi hulupp]aqqi ana bābi tušeṣṣē-ma tana[ssuk] | הקלוי [עם החולו]פקו – אל הפתח תוציא, ות[זרוק]. | `וְהוֹצִיא אֶת כָּל הַפָּר אֶל מִחוּץ לַמַּחֲנֶה` (ויקרא ד:יב); `יוֹצִיא אֶל מִחוּץ לַמַּחֲנֶה` (ויקרא טז:כז) | equivalent | שארית הקרבן מוצאת אל מחוץ למחנה ונשרפת שם; : ביום הכיפורים. |
| 117' | ulinna erša talammi | בחוט צבעוני את הערש תקיף. | `תִּקְוַת חוּט הַשָּׁנִי` (יהושע ב:יח) | divergence | חוט צבעוני המגן על בית (כמו בהערה ל־VI 131). |
| 126' | ištēniš taballal-ma tuqattaršu EN₂ enlil qaqqadī imannu | יחד תבלול, ותקטיר אותו; את הקסם "אֶנְלִיל – ראשי" ימנה. | `וְהִקְטִיר עָלָיו אַהֲרֹן קְטֹרֶת סַמִּים` (שמות ל:ז) | cognate | *qatāru* D = `הִקְטִיר`; שם הקטורת לאל, כאן על החולה. |
| 128' | [ina] lahanni šaharrati marṣu iballal-ma | [ב]צלוחית של שַׁחַרּוּ החולה יבלול, | `קְחוּ לִי צְלֹחִית חֲדָשָׁה וְשִׂימוּ שָׁם מֶלַח` (מלכים ב ב:כ) | divergence | צלוחית לטקס ריפוי (אלישע והמים); כאן תערובת למשיחה. |
| 129' | dalta (u) sikkūra sippē bābāni iltanappat | את הדלת, (ו)את הבריח, את מזוזות הפתחים יגע ויגע. | `וְהִגַּעְתֶּם אֶל הַמַּשְׁקוֹף וְאֶל שְׁתֵּי הַמְּזוּזֹת` (שמות יב:כב); `וְלֹא יִתֵּן הַמַּשְׁחִית לָבֹא אֶל בָּתֵּיכֶם` (שמות יב:כג) | equivalent | נגיעה (מריחה) במזוזות הבית בלילה של הסכנה, ובאותו הפסוק `וְאַתֶּם לֹא תֵצְאוּ אִישׁ מִפֶּתַח בֵּיתוֹ עַד בֹּקֶר`; : המשיחה סוגרת את הבית בפני המזיק. שם בדם, כאן בקמח ובבלילה. |
| 133' | šamna kala šīrīšu [tapaššaš] | בשמן את כל בשרו [תמשח]. | `דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי` (תהלים כג:ה) | equivalent | משיחה בשמן אחרי הסכנה, "נגד צוררי". |
| 135' | nūru [k]urab <ana enlil?> šutēšer harrānka a[na] ē[kur tamannū-ma] | אור – ברך ⟨את אנליל?⟩, ישר את אורחך אל אֵ[כּוּר]" [תמנה], | `וְהוּא יְיַשֵּׁר אֹרְחֹתֶיךָ` (משלי ג:ו) | cognate | *ešēru* + *ḫarrānu* = `יִשֵּׁר` + `אֹרַח`. |
| 138' | ina šēr[i] adi šurpa tašarrapu | בבוקר, כאשר את השְּׂרֵפָה תשרוף, | `וְהִשְׁלִיךְ אֶל תּוֹךְ שְׂרֵפַת הַפָּרָה` (במדבר יט:ו) | cognate | *šurpu* = `שְׂרֵפָה`, מעשה השריפה בטקס טיהור. |
| 141' | ṣalam kaššāpti ša qēmi ina libbi namsê teṣṣir | צלם מכשפה של קמח בתוך הכיור תצור, | `וְעָשִׂיתָ כִּיּוֹר נְחֹשֶׁת וְכַנּוֹ נְחֹשֶׁת לְרָחְצָה` (שמות ל:יח); `וְרָחֲצוּ אַהֲרֹן וּבָנָיו מִמֶּנּוּ אֶת יְדֵיהֶם` (שמות ל:יט) | equivalent | כיור נחושת לרחיצה (`{urudu}namsû`, "כיור נחושת"); . |
| 142' | ṣalam ṭīdi ša kaššāpti ina muhhi tašakkan qātīšu ana muhhi imessi ana bī[ti terrub] | צלם טיט של המכשפה עליו תשים; את ידיו עליהם ירחץ; אל הבית תיכנס. | `יִרְחֲצוּ אֶת יְדֵיהֶם עַל הָעֶגְלָה הָעֲרוּפָה בַנָּחַל` (דברים כא:ו); `יָדֵינוּ לֹא שָׁפְכֻה` (דברים כא:ז) | equivalent | **רחיצת הידיים מעל**: זקני העיר רוחצים את ידיהם *על* העגלה, וכאן החולה רוחץ את ידיו *על* צלמי המכשפה; בשני המקרים המים מעבירים את הרע אל הגוף שמתחת, והרוחץ יוצא נקי: . |
| 143' | EN₂ bāʾirtu ša bāʾirāti | הקסם "צַיֶּדֶת הצַּיָּדוֹת": | `לְצוֹדֵד נְפָשׁוֹת` (יחזקאל יג:יח) | equivalent | הנשים הצדות נפשות (§2.1). |
| 151' | [ana muh]hi ṣalam nigsagilê qātīšu imessi | [על] צלם התמורה את ידיו ירחץ. | `וְסָמַךְ אַהֲרֹן אֶת שְׁתֵּי יָדָו עַל רֹאשׁ הַשָּׂעִיר הַחַי` (ויקרא טז:כא); `וְהָיָה הוּא וּתְמוּרָתוֹ יִהְיֶה קֹּדֶשׁ` (ויקרא כז:י) | divergence | הידיים על התחליף, שנושא את העוון; כאן הידיים נרחצות על התחליף. ↔  – המלה `תְּמוּרָה`. |
| 155' | EN₂ ina šēri mesâ qātāya mīs qātī | הקסם "בבוקר רחוצות ידיי": רחיצת ידיים. | `אֶרְחַץ בְּנִקָּיוֹן כַּפָּי` (תהלים כו:ו) | equivalent | ידיים רחוצות כהצהרת חפות (§3). |
| 164' | ina pîšu ana libbi namsê inappah | ובפיו אל תוך הכיור ינפח. | `כִּי אִם-כַּמֹּץ אֲשֶׁר-תִּדְּפֶנּוּ רוּחַ` (תהלים א:ד) | equivalent | המוץ הנישא ברוח כדימוי לרשעים; כאן הדימוי נעשה מעשה (VI 30 `[יינ]שפו כשפיה כמוץ`). |
| 174' | ana kalbi u kalbati tanaddin | לכלב ולכלבה תיתן. | `לַכֶּלֶב תַּשְׁלִכוּן אֹתוֹ` (שמות כב:ל) | equivalent | מה שאסור ונטמא ניתן לכלב |
| 174' | ana kalbi u kalbati tanaddin | לכלב ולכלבה תיתן. | `וְאֶת אִיזֶבֶל יֹאכְלוּ הַכְּלָבִים` (מלכים ב ט:י) | divergence | גורל האישה ש"כשפיה הרבים" (ט:כב): הכלבים אוכלים אותה. |
| 177' | ib[arri? ana] ṣīt šamši tasallah | יִבְ[חַן?]; [אל] מוצא הַשֶּׁמֶשׁ תזה. | `וְהִזָּה בְאֶצְבָּעוֹ עַל פְּנֵי הַכַּפֹּרֶת קֵדְמָה` (ויקרא טז:יד) | divergence | הזאה כלפי מזרח; שם דם על הכפורת, כאן מים אל השמש. |
| 179' | mê tasallaʾ | מים תזה. | `וְהִזָּה עַל הַמִּטַּהֵר מִן הַצָּרַעַת שֶׁבַע פְּעָמִים` (ויקרא יד:ז) | equivalent | ההזאה החותמת את הטיהור. |

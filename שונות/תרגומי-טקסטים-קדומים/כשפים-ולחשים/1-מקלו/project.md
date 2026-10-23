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

(Collected from the translators' sections at the end of the run.)

## Progress log

- 2026-10-21: base text fetched (eBL, all nine chapters); `tools/ebl_fetch.py` fixed for Maqlû's line types.
- 2026-10-23: synced with `main` after the VM reboot; renderings aligned with the corpora finished meanwhile; tools,
  renderings §9 and brief ready; translation starts with Tablet I.

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
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את הלוליך אהלל! | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה); `לֹא־אָמוּת כִּי־אֶחְיֶה וַאֲסַפֵּר מַעֲשֵׂי יָהּ` (תהלים קיח:יז) | equivalent | **חיים תמורת הלל**: המתפלל מבטיח לספר את גדולת האל אם יחיה |
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את הלוליך אהלל! | `הֲיוֹדְךָ עָפָר הֲיַגִּיד אֲמִתֶּךָ` (תהלים ל:י) | equivalent | אותו היגיון בצורת שאלה: המת אינו מהלל. |
| 17 | yâši bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את הלוליך אהלל! | `הֲיוֹדְךָ עָפָר הֲיַגִּיד אֲמִתֶּךָ` (תהלים ל:י) | cognate | *balāṭu* D = `חִיָּה` (`../renderings.md` §2.4). |
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
| 75 | bulliṭanni-ma narbîka lušāpi dalīlīka ludlul | חַיֵּנִי, ואת גדולתך אגלה, את הלוליך אהלל! | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה) | equivalent | ראו 17. |
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
| 225 | yâši bulliṭanni-ma narbîka lušāpi [d]alīlīka ludlul [T]U₆ EN₂ | ואותי עצמי חַיֵּנִי, ואת גדולתך אגלה, את הלוליך אהלל! – לחש, קסם. | `תְּחִי־נַפְשִׁי וּתְהַלְלֶךָּ` (תהלים קיט:קעה) | equivalent | ראו 17. |

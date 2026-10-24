# Project 3: the Book of the Heavenly Cow (`ספר הפרה השמימית`)

## Scope
The Seti I version (KV 17, the front right side-chamber of the burial chamber): 95 columns (KEY `HC`), the fullest copy.
The older copy on Tutankhamun's first gilded shrine (c. 1325 BCE) and the Ramesses VI copy (KV 9) are in AED
(`egypt_tools.py data HC … --wit`): their variants go into the apparatus.

## Base text
AED-TEI `WHEOIX5P5ZAVVFU4BGO6OWASV4` (TLA 2018), CC BY-SA 4.0. Rank 3: the TLA's German (`tr HC`); Hornung 1997 (OBO 46,
open access: the synoptic edition and translation).

## HC 1–95

(Translator 2, Round 4 run 3. Part 1 = columns 1–48 (merged, renderings §10.10); part 2 = columns 49–95, in the
subsection "Part 2" below, before the parallels index.)

### Scope
Columns 1–48 of the Seti I version (KV 17): the whole narrative of the "destruction of mankind" and the withdrawal of
Re, up to the instructions for drawing the cow (to the middle of Hornung's verse 182). Nine scenes: the rebellion
against the old king (1–3); the secret council before Nun (4–12); the Eye descends as Hathor, Sekhmet (13–15); the
ochre from Elephantine and the 7,000 jars (16–22); the drunken goddess and Hathor's festivals (23–26); the weary Re and
Nut as the cow (27–31); the first war, "so came slaughter among men" (32–36); sky, fields of the hereafter, stars, Shu
and the Heh gods (37–43); the drawing instructions (44–48). Preservation: 1–3 and 30–41 have restored stretches
(the beginning, Nut's answer, the people's return, the first war); 13, 17–18 and 33–34 small gaps. A long column per
line, broken mid-sentence: every break is kept and noted.

**The witnesses.** The coordinator's brief assumed the Tutankhamun shrine copy covers these columns. It does not:
Hornung (p. 33) — T contains only verses 202–234 and 306–312 plus the cow image with its captions; "der Anfang unseres
Buches [fehlt] bei Tutanchamun" (p. 92); AED holds only T's rear wall (the end of the book). So for 1–48 T is absent,
said once in the file header and at column 1. T's real contacts here are with the **drawing** prescribed in 44–48
(see the list below). Ramesses II and III exist only in Hornung's synopsis (not in AED): their variants are cited from
his notes. Ramesses VI (KV 9) begins at verse 272 (part 2).

### Sources consulted
- Base: AED-TEI `Heavenly-Cow--KV17-Seti-I` (`egypt_tools.py data HC 1 48`, `--wit`).
- Rank 3: the TLA's German (`tr HC`), read after drafting for 1–26 (for 27–48 the printout of 26–48 was read after the
  drafting of 27–31 and before the final wording of 32–48 — the readings below were formed from the data first, but
  this deviates from guidelines §3 and is recorded); Hornung 1997 (OBO 46: translation pp. 37–43, commentary notes
  1–120, excursus B pp. 90–95, the versions pp. 33–36), read from the text layer.
- Lichtheim (AEL II) and others only from memory, never quoted.

### Decisions
- **Lemma → Hebrew (new or confirmed).** nṯr `אֵל`/`אֵלִים` ★; nṯr.t `אֵלָה` ★ (`הָאֵלָה הַזֹּאת` for nṯr.t tn); rmṯ `בְּנֵי הָאָדָם`;
  ḥm=f `הוֹד מַלְכוּתוֹ`, ḥm n X `הוֹד מַלְכוּת X`; ḏd.jn `אָז אָמַר`; ḫft ḥm=f `נֹכַח הוֹד מַלְכוּתוֹ` (m-bꜣḥ keeps `לִפְנֵי`);
  md.t (tla78030, the "plot") `דָּבָר` – the same lemma as Amenemope's mdw.t `דָּבָר`, so "devised a word against" (the
  sense "plot" in the notes); md.t "matter" (tla78150) `דָּבָר`; kꜣj `חָשַׁב`; sbj `מָרַד`; smꜣ/smꜣm `הָרַג`; šꜥ.t "slaughter"
  `טֶבַח`, šꜥ.tjw `אַנְשֵׁי־הַטֶּבַח`; ḫftj `אוֹיֵב` (the euphemism "against the enemies of Re" kept literally); wꜣj "plot evil"
  `חָרַשׁ (רָעָה)` (Prov 3:29; the parenthesis because Hebrew `חרש` alone is ambiguous); jr.t `עַיִן`; ḫpr `נִהְיָה`;
  **the aetiological formula ḫpr X pw = `כָּךְ נִהְיָה X`** (pw rendered `כך`; 15, 24, 25, 26, 36, 38–43); jri̯ `עָשָׂה`
  (jrw "the Maker" `הָעוֹשֶׂה`; jri̯-sw `עוֹשֵׂהוּ`); qmꜣ `יָצַר` (10, `יוֹצְרָיו`); ḥtp `נָח` (39 "the field rests") and
  **m-ḥtp in the greeting `בְּנַחַת`** (`בּוֹאִי בְּנַחַת`: the ḥtp family stays in נוח (MT 60 `נַחַת`); `שָׁלוֹם` stays wḏꜣ's,
  which occurs in the same text in the king's blessing); sḫm "gain power" `שָׁלַט` (as AM 20.15), stative `שׁוֹלֵט` (28; changed in part 2, since `שַׁלִּיט` is ḥqꜣ's, MK E134, HC 89);
  jꜣwj `זָקֵן`; qs `עֲצָמוֹת`; ḥꜥ.w `גּוּף` (2, 29); ḫsbḏ `סַפִּיר`; mꜣꜥ "true" `אֲמִתִּי`; snḏ (n.) `יִרְאָה`, snḏ (vb.) `חָשַׁשׁ`;
  wꜥr `בָּרַח`; ḫꜣs.t `מִדְבָּר`; mꜣꜣ `חָזָה`; ḥmsj `יָשַׁב`; s.t `מָקוֹם` (as AM 6.5); sms(w) `בְּכִיר`; tp.w-ꜥ `קַדְמוֹנִים`;
  rḫy.t `הָעָם` (as AM 1.12); šnyt `חֲצֵר`; ktkt `בַּחֲשַׁאי`; ḥw.t-ꜥꜣ.t `הַבַּיִת הַגָּדוֹל`; ꜥḥ "palace" `אַרְמוֹן`; sḫr.w `עֵצוֹת`;
  ḏrj `תַּקִּיף`; dhn tꜣ `נָגַע (בְּמִצְחוֹ) בָּאָרֶץ`; hꜣj `יָרַד`; njs "call" `קָרָא` (renderings §9's HC 3 line; AM 11.6's njs
  "cry out" `הִכְרִיז` – a split by construction); wpwtj `שָׁלִיחַ`; jnj `הֵבִיא`; jwj `בָּא` (also "return", 6);
  ddj `אֹדֶם`; ḥnq.t `שֵׁכָר` ★; jt `שְׂעוֹרָה`; ḥm.t "maidservant" `שִׁפְחָה`; šbb.t "mash" `בְּלִיל` (15 "Sekhmet, the mash
  of the night" and 18 "this mash" – one lemma, one Hebrew, so the prolepsis stays visible); hbn.t `כַּד`; sḏr.t
  `מַשְׁקֵה־שֵׁנָה` (from sḏr `יָשַׁן`); nḏ "grind" `טָחַן`; tš `כָּתַשׁ`; rḏj "give/let" `נָתַן` (17 "he let X grind"),
  "put" `שָׂם` (18, 30, 36), jmm `תֵּן`; mkj "protect" **`נָצַר`** (20; `הֵגֵן` is ḫwj's (AM 3.3, PT600), `מְגוֹנֵן` stꜣ's,
  `שָׁמַר` nḏ's); nfr `טוֹב` / `יָפֶה` by sense; nḏm `נָעִים`; jmꜣ.yt `הַחֲבִיבָה`; ꜣḥ.t `שָׂדֶה`; mḥ "be full" `מָלֵא`;
  mḥj "be flooded" `מוּצָף` (AM 6.5 mḥw `צָף`); mw `מַיִם`; bꜣ.w `עָצְמָה`; šzp `טֶפַח`, mḥ "cubit" `אַמָּה` (AM 7.14);
  dwꜣw `בֹּקֶר`; nhp `הִשְׁכִּים`; nfrw-grḥ `תֹּם הַלַּיְלָה`; tḫj `שִׁכּוֹר`; sjꜣ `הִכִּיר` (AM 8.1); swrj `שָׁתָה`;
  tr "season" `מוֹעֵד` (MT 63); sw "time" `זְמַן`; mḥr `כְּאֵב`/`הִכְאִיב`; hh `לַהַט`; wrd `עָיֵף`/`עֲיֵפוּת`;
  ꜥnd `מְעַט`, sꜥnd `הִמְעִיט` (15, 28 – one root); ꜥ `זְרוֹעַ`; ꜣhd `תָּשׁוּשׁ`; pḥ "reach, attack" `הִשִּׂיג` (29 `שֶׁיַּשִּׂיג
  אוֹתִי`, matching MK E138 `תשיג אותי`); bhꜣ `נִרְתַּע`; mrj `אָהַב`; j "say" `נָאַם` (to keep ḏd's `אָמַר` distinct);
  psḏ "back" `גַּב`; **sꜣ "back" also `גַּב` (36)** – see Open decisions; ḥr sꜣ (44) `עַל גַּבָּהּ`; jḥ.t "cow" `פָּרָה`,
  jd.t "cow" `עֶגְלָה` (two Egyptian words; Jer 46:20 in the apparatus); kkw `חֹשֶׁךְ`, jḫḫw `דִּמְדּוּמִים`; ḥḏ `הֵאִיר`;
  pḏ.t `קֶשֶׁת`; ḫt "stick" `מַקֵּל`; fꜣj "lift, carry" `נָשָׂא` (21, 35; see Proposals); stj `שָׁפַךְ` (pour) / `יָרָה` (shoot)
  – one Egyptian verb, two Hebrew senses, noted at 22 and 35; ḫw "evil deeds" `זִמָּה`; ḥꜣ "around" `סָבִיב` (35) /
  "behind" `מֵאַחֲרֵי` (48) – split by sense; ḥrj `רָחַק`/`הִתְרַחֵק`; ꜥr `קָרַב`; ḥr.t "sky" `מָרוֹם`; p.tj.w `יוֹשְׁבֵי־הַשָּׁמַיִם`;
  ẖnw `תּוֹךְ`; grg "equip" `צִיֵּד` (MT 60's grg "found" `יִסֵּד` – a split by sense); ꜥšꜣ `רֹב`; sḫ.t `שָׂדֶה`; sḫ.t-ḥtp
  `שְׂדֵה־הַקָּרְבָּנוֹת` (§10.8.1); sḫ.t-jꜣrw `שְׂדֵה־הָאַגְמוֹנִים` (`סוּף` is ṯwfj's); rd "make grow" `הִצְמִיחַ`; sm.w `עֵשֶׂב`;
  jḫjḫ `הָאַחְאַח` (transliterated); sbꜣ `כּוֹכָב`; sdꜣdꜣ `רָעַד`; qꜣj `גָּבַהּ`/`גֹּבַהּ`; ḥwj `הַלְוַאי`; ḥḥ "million"
  `אַלְפֵי אֲלָפִים`; twꜣ `תָּמַךְ`; zꜣw (active) `שָׁמַר` (AM's zꜣw "beware" `הִשָּׁמֵר` is the same lemma); mnꜥ `אָמַן`
  (Esth 2:7), mnꜥ.t `אוֹמֶנֶת`; ḥr-tp / ḏꜣḏꜣ both `רֹאשׁ` (tp is "head" itself); rʾ "spell" `לַחַשׁ` (rʾ stays `פֶּה`:
  a split by sense, like AM's `פִּיּוֹת`); qꜣb.t `חָזֶה`; rꜥy.t `צֶבַע`; psḏ.t (numeral) `תְּשִׁיעִיָּה` (kin to `התשיעייה`);
  ẖ.t `בֶּטֶן` (also 16 "like the shadow of a body", kept `כְּצֵל הַבֶּטֶן`); pḥ.wj "hindquarters" `אֲחוֹרַיִם` (AM's pḥ.wj
  "end" `קֵץ` – split by sense); mn.t `יָרֵךְ`; qnj.t `זַרְנִיךְ`; gꜣb "arm" `אַצִּיל` (ꜥ keeps `זְרוֹעַ`); rn `שֵׁם`;
  wjꜣ "the god's bark" **`צִי` ★** (Isa 33:21; the other ship words are taken, §10.5.2); ḥmy.t "steering oar" `הֶגֶה` ★
  (ḥmw keeps `מָשׁוֹט`); kꜣrj `מִקְדָּשׁ`; jtn `הָאָטוֹן`; ḏr.t `יָד`; ky-ḏd `נֻסָּח אַחֵר`; mnḏ `עֲטִין`; jꜣbtj `שְׂמָאלִי`;
  zẖꜣ "drawing" `צִיּוּר`; swt `אֵפוֹא` (§9 sample); jstw `וַהֲרֵי`; m=tn `הִנֵּה`.
- **Names.** Re `רַא` ★; Nun `נוּן` ★; Shu `שׁוּ` ★; Tefnut `תֶּפְנוּת`; Geb `גֶּבּ` ★; Nut `נוּת` ★; Hathor `חַתְחוֹר`; Sekhmet
  `סֶחְמֶת`; Heliopolis `אוֹן` ★; **Ꜣbw (Elephantine) `יֵב` ★** – the Semitic form of the same Egyptian name (Aramaic
  papyri `יב`), not a biblical name, so no false echo; the alternative transliteration `אַבּוּ` rejected as unfamiliar;
  **Nn-nsw `חָנֵס`** (Isa 30:4, [equivalent]); Jmꜣw `אִימָאוּ`; ḥnsktj `בַּעַל־הַצַּמָּה` ("the one with the side-lock",
  a Heliopolitan priest; `מַחְלָפוֹת` rejected – Samson's locks); **the Heh gods `אֵלֵי־חֶח` ★** (as the brief proposed);
  nsw-bjtj `מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן` (§10.9.4); ꜥnḫ-wḏꜣ-snb `חַיִּים, שָׁלוֹם, בְּרִיאוּת` between dashes.
- **Readings.** 1: m-ḫt "after" (Hornung) and "mankind and gods as one thing" a new clause (Hornung, TLA). 6: jwi̯=j m
  Nwn `וְאָבוֹא בְּנוּן` (jwj keeps `בָּא`). 9: n smꜣ.n=j "I cannot slay". **15: m sꜥnd.w st = the negative imperative
  "Do not diminish them!" (TLA)**, against Hornung's "as the one who diminished them". **27: smꜣm=j st sp-n-jwtj =
  `*לא אהרוג אותם אף פעם*?` (TLA: "nicht einmal (mehr) töten (?)")**, against Hornung's "I will kill them without
  exception" – italic and `?`; the draft had followed Hornung and was corrected after the TLA, since the TLA's analysis
  of sp-n-jwtj ("an occasion of nothing" = "never") is the base. 29: the TLA's emendation ⟨zꜣy⟩ "wait" (Hornung reads
  the written jꜣy "return"). 36: ḥrj šꜥ.t as a statement ("far was slaughter [from the beginning]", TLA), not a wish.
  45: st? = the ninefold of stars (TLA), not Hornung's emended sd "tail". 44–48: the passive sḏm=f of the instructions
  as jussive `יֵעָשֶׂה`.
- **Echo control.** No line has `נחם`, `עצב`, `מחה`, `שחת`, `יֵצֶר`, `מַבּוּל`, `תֵּבָה`, `אֲדָמָה` (verified). Re's "relenting" is
  rendered by the Egyptian words themselves: "Do not diminish them!" (15), "How good they are! I will protect (`אֶנְצֹר`)
  mankind from her" (20), "I will never kill them?" (27), and the weariness `לִבִּי עָיֵף מְאֹד מִלִּהְיוֹת עִמָּם` (27).
  The beer "fills" the fields (`מְלֵאִים מַיִם`, 22); the comparison with the flood is in the notes and the apparatus only.
- **The §9 sample lines.** HC 1 used as given. HC 3: the sample's `קִרְאוּ לִי אֶת עֵינִי` became `קראו נא לי את עיני`
  (the particle m-ꜥ "pray" is written, and is `נא` in 16 and 21 too), and the king's blessing after ḥm=f is kept.

### Open decisions for the user
1. **Column 27** – Re's oath: "I will never kill them (again)?" (TLA's analysis, adopted) or "I will kill them without
   exception" (Hornung). The first makes 27 the closest Egyptian match of Gen 8:21 ("never again"); the second makes
   Re's renunciation rest on weariness alone. The translation marks the reading as uncertain.
2. **Column 15** – "Do not diminish them!" (TLA, adopted) or "(I will rule them) as the one who diminished them"
   (Hornung). On the first reading Re stops the slaughter before the beer is brewed.
3. **sꜣ "back" = `גַּב` (36)**, sharing psḏ's word: Hebrew has one natural word for an animal's back (`שֶׁכֶם` is the
   shoulder, `אֲחוֹרַיִם` undignified, `גֵּו` is AM's ꜣ.t). Alternative: `גֵּו` here and a split with AM.
4. `צִי` for wjꜣ (the sun's bark) – poetic and unusual; alternative `סְפִינַת־אֵלִים` (two words).

### Progress log
- 2026-10-23: drafted 1–48 in nine sections, each saved, filled and verified on save (`verify HC` clean throughout;
  only the missing 49–95 under `--strict`). Placeholder `<!-- טרם תורגם: 49–95 -->` after 48.
- Pass (a) fidelity: every content word parsed; brackets checked against the base (partial restorations marked inside
  the word, e.g. `תֶּפְ[נוּת]`, `עינ[ך]`); negations and tenses re-checked – changes: 27 (sp-n-jwtj, see above), 28 `מעט`
  (tense-neutral after nn-wn), 36 statement not wish, 46/48 instructions as jussive.
- Pass (b) consistency: the formulas (`אָז אָמַר הוֹד מַלְכוּת X`, `כָּךְ נִהְיָה X`, `הָאֵלָה הַזֹּאת`, `חוֹרְשִׁים (רָעָה)`) checked
  line by line; every new word grepped (`lex`, `grep --all`) – collisions avoided: mkj (`הגן`/`מגונן`/`שמר` taken → `נצר`),
  wjꜣ (all ship words taken → `צי`), ḥmy.t (`משוט` is ḥmw's → `הגה`), jꜣrw (`סוף` reserved → `אגמונים`), gꜣb (`זרוע` is ꜥ's →
  `אציל`), sw "time" (`עת` hꜣw, `יום` hrw, `מועד` tr → `זמן`), nfrw-grḥ (`קץ` pḥ.wj → `תם`).
- Pass (c) Hebrew: the built `translation-HC.rtl.md` read through; vocalization of ambiguous words added (`אַמָּה` 45,
  `חֶצְיָם` 48, `בַּעַל־הַצַּמָּה` 18, `הָאֵלֶּה` wherever nṯr stands in the line).
- `egypt_tools.py build HC`; `verify HC` 0 problems; `verify HC --strict` only the 47 untranslated columns;
  `check_bible_quotes.py` on the annotated file, the intro and the built translation: 0 problems.
- `../build_parallels_index.py` was run (at first by accident, with `--help`, which it ignores): it regenerated this
  file's HC table and added 82 HC rows to `../parallels-index.md` (no other rows changed). Three הקבלה bullets were then
  rewritten so that each contact has its own verse (13, 15, 29), and the index was rebuilt.

### The text on its own terms
- **The old god** (2, 27–29): the creator ages – bones of silver, flesh of gold, hair of lapis – and "for the first
  time" his body is weak; time wears even the gods, and a world whose maker ages is an ageing world (Hornung exc. B).
- **Kingship as the first order** (1, 7, 19): Re rules as an Egyptian king (cartouche, double crown title, blessing
  formula, a royal inspection of the brewing); mankind's sin is lèse-majesté, not general wickedness.
- **Government by council** (4–12): the king will not kill "until I have heard what you will say"; the gods advise,
  in secret, lest the people panic.
- **The Eye and the goddess with two faces** (3, 12–15, 23–24): the same goddess is the slaughtering Sekhmet and the
  "lovely one" of Imau; she is pacified by pleasure, not force – and her pacification becomes a yearly rite (25).
- **Mercy by ruse** (16–23): no righteous survivor; the remnant is saved by a trick of colour – red ochre in beer –
  and by the goddess's own drunkenness.
- **The weariness of God** (27): "my heart is very weary of being with them": the withdrawal of the gods is explained
  by fatigue, not by anger or regret.
- **An aetiology of the imperfect world** (31–43): night (34), war and slaughter among men (35–36: "far was
  slaughter from the beginning"), the separated sky, the fields of the dead, the stars, the props of heaven – all
  "came into being" in the aftermath of the rebellion.
- **War in God's name is not God's wish** (35): the loyal men shoot at his enemies, and Re calls them "men of
  slaughter".
- **Words make things** (15, 24, 37–41): puns are causes – sḫm → Sekhmet, jmꜣ.yt → Imau, ḥrj → ḥr.t (sky), ḥtp →
  sḫ.t-ḥtp, jꜣ rd → sḫ.t-jꜣrw, jḫ.t → jḫjḫ, ḥḥ → the Heh gods.
- **Family gestures hold up the cosmos** (42–43): Shu lifts his daughter Nut like a father lifting his son onto his
  head; nurses for children are an imitation of the gods.
- **Myth becomes rite and drawing** (44–48): the story is a "spell" to be spoken over a drawing, with measures,
  colours and a scribe's "other version" – ancient textual criticism.

### Key parallels
- [divergence] Gen 6:5–7 (2, 3, 9): mankind's "thought" as the cause, and the god's decision – but Re consults the
  gods and cannot kill before hearing them; the offence is a plot against the king, not general violence (Gen 6:13).
- [equivalent] Gen 8:21 (20, 27; 15 [divergence]): the god's renunciation of further killing, here phrased as "I will
  protect mankind from her" and (TLA) "I will never kill them?" – sworn "as I live"; no regret (`נִחַם`) in the Egyptian.
- [equivalent] 2 Sam 24:16 (20): God halts the destroying agent he himself sent ("it is enough; stay your hand").
- [divergence] Gen 7:20 (22): fifteen cubits of killing water over the mountains / three palms of saving beer over the
  fields; [divergence] Gen 9:21 (23): drunkenness after the catastrophe brings a curse there, salvation here;
  [equivalent] 1 Sam 25:36 (23): `וְלֵב נָבָל טוֹב עָלָיו וְהוּא שִׁכֹּר` – the same idiom, "good on the heart" and drunk.
- [equivalent] Gen 11:1 (1): "one thing" / "one language" – a primal unity broken; [equivalent] Gen 11:5, 7 (5, 12–13):
  the divine council and the descent against mankind.
- [divergence] Gen 6:6, 6:3; Isa 40:28 (27): the god's heart "weary" (Egypt) / "grieved" (Gen); Isaiah denies that
  God tires.
- [divergence] Gen 9:13 (35): after the catastrophe the god hangs up his bow / men go out with bows against men;
  [equivalent] Gen 9:6 (35): bloodshed among men right after the disaster; [divergence] Gen 4:8 (36): the origin of
  killing.
- [divergence] Gen 1:7 (31, 38, 42): the separation of sky from earth – a creation act there, a late consequence of
  rebellion here; [equivalent] Gen 2:5 (39): field, herbs, "make grow".
- [divergence] Exod 20:3 (44): an image of what is in the heaven above is here a ritual duty.

### Lines shared with other texts
None repeats a line of the corpus. Shared vocabulary follows MK (smꜣ `הרג`, sbj `מרד`, kꜣj/kꜣ.t, pḥ `השיג`, ꜥ `זרוע`,
psḏ `גב`, sm.w `עשב`, kꜣrj `מקדש`) and AM (md.t `דבר`, s.t `מקום`, rḫy.t `העם`, ḥꜥ.w `גוף`, mḥ "cubit" `אמה`, ḥnq.t
`שֵׁכָר`, dwꜣw `בוקר`, sjꜣ `הכיר`, sḫm `שלט`, jmm `תן`, jtn `האָטוֹן`, zꜣw `שמר`), MT/PT (ḥtp `נח`/`נחת`, tr `מועד`, qꜣj
`גבה`, sḫ.t-ḥtp `שדה־הקרבנות`). Merikare E132–133 tell the same myth in brief: "he slew his enemies … because of their
thought of making [rebellion]" – the Cow's `מרד`, `הרג`, `מחשבה`/`חשב` match MK's Hebrew.

### Proposals for the shared renderings
1. **The Cow's formulas** (for §6): `ḫpr X pw` = `כָּךְ נִהְיָה X` (and gender/number); `ḏd.jn ḥm n X` = `אָז אָמַר הוֹד מַלְכוּת X`;
   `nṯr.t tn` = `הָאֵלָה הַזֹּאת`; `ḏd.jn=sn ḫft ḥm=f` = `אָז אָמְרוּ נֹכַח הוֹד מַלְכוּתוֹ`; `jy.wj m-ḥtp` = `בּוֹאִי בְּנַחַת`.
2. **Always vocalized (§5.3):** `צִי` (wjꜣ; unvocalized "fleet"), `הֶגֶה` (ḥmy.t; unvocalized `הגה` "uttered"),
   `יֵב` (Ꜣbw), `אֵלֵי־חֶח`, `שֵׁכָר` (already), `אַמָּה` where "her mother" is possible.
3. **Names (§3):** Ꜣbw `יֵב`; Nn-nsw `חָנֵס` [equivalent Isa 30:4]; Jmꜣw `אִימָאוּ`; Ḥḥ.w `אֵלֵי־חֶח`; ḥnsktj `בַּעַל־הַצַּמָּה`;
   Tefnut `תֶּפְנוּת` (already), Sekhmet, Hathor as §3.1.
4. **Key terms (§4.4):** md.t "plot" = `דָּבָר` (one lemma); šbb.t `בְּלִיל`; sḏr.t `מַשְׁקֵה־שֵׁנָה`; mkj `נָצַר`; šꜥ.t `טֶבַח`;
   wꜣj `חָרַשׁ (רָעָה)`; wrd `עָיֵף`; jḥ.t `פָּרָה` / jd.t `עֶגְלָה`; ḥr.t `מָרוֹם`; mnꜥ `אָמַן` / mnꜥ.t `אוֹמֶנֶת`; ḥḥ `אַלְפֵי אֲלָפִים`.
5. **A collision to settle:** fꜣj "lift, carry" = `נָשָׂא` (21, 35; 4× in the Cow, later "lift the face" = `נשא פנים`, the
   Hebrew idiom), but PT486 60 renders rmni̯ "carry" `נשא` (`יישאו שתי התשיעיות`), while AM renders rmni̯ `הֵזִיז` in
   practice. Proposal: fꜣj keeps `נָשָׂא` (the idiom is decisive); PT486's rmni̯ moves to `סָבַל`/`הֵרִים`? or the split is
   recorded. (`הֵרִים` is wṯs's in PT486.)
6. **The cow's "back"**: psḏ and sꜣ share `גַּב` (see Open decisions 3).

### Lessons for the guidelines
- **Check the coverage of every witness before promising variants**: the brief expected Tutankhamun's copy in every
  column, but it covers only Hornung's verses 202–234 and 306–312 (and AED only its rear wall); a `--wit` printout that
  shows only a few lines is the first warning.
- A printout of the rank-3 translation for a whole part tempts reading it before drafting; print `tr` for the
  section just drafted, not beyond it.

### Part 2: columns 49–95

#### Scope
The captions to be written around the cow picture (49–55); the third part of the book (Hornung's "Einrichtung der
Unterwelt"): Re gives the serpents of earth and water to Geb, Nun and Osiris, and warns of magic (56–62); Thoth made
Re's deputy, with the aetiologies of the ibis, the second ibis, the moon and the baboon (63–74); the purity rules for
the reciter and the reward (74–83, closing "truly effective, a million times"); the "ba theology" (84–87); the spell of
protection, the image of the goddess and the snake, the festival dates, the names "Neheh and Djet" (87–94); the last,
mostly destroyed column, which repeats the picture's captions and ends with Seti I's names (95). Columns 63–70 are very
short (one phrase each).

#### The witnesses (part 2) – the differences that matter
- **Tutankhamun (T)** runs parallel in three stretches, all from Hornung (AED has only T's rear wall):
  1. **56–67** (verses 202–234, the left wall): "there" (*jm*) only in T (57, twice); T writes the serpents of earth and
     water as feminine (58); doubles *zꜣw* (58); a masculine word for the serpents' "provision" and one colon fewer (59);
     **omits "I need not be guarded from the greatness that came before me" (60)** and **omits the command to spread the
     magic over the land (61–62)** – both, says Hornung, to save space, with a change of sense; ends at "you shall write
     there and pacify those in them" (67) and breaks off mid-text.
  2. **91–92** (verses 306–312): present; a long omission follows (as in Ramesses VI).
  3. **94–95** (verses 321–330, and AED's lines 30–39): T reads **"I know the *name* of this god"** (*rn*), where Seti
     has *bꜣ* (94); loses "his face" by haplography and miswrites the night-determinative of "evening"; supplies the end
     of the text, which Seti had no room for: "there are no adversaries among men, gods, spirits and dead, in anything
     in this whole land"; and adds **a passage of its own**: the gods let him pass, "thus came the flame in the sky"; "every
     excellent scribe who knows the god's words … goes out and in in the sky; the Westerners cannot hold him back"
     (AED lines 31–39), plus **Mehet-weret's speech** to the king (lines 1–10). These are in the apparatus at 95.
  The picture's captions (49–55) also stand around T's cow, with the differences noted at 44–48 (part 1).
- **Ramesses VI (KV 9)**, AED lines 1–23 = columns 84–94: a spell title instead of "truly effective" (84); the king's
  name inserted ("NN is with them forever", 85) and later replacing "I" (87–88); "the ba of Shu is the **wind**" (*ṯꜣw*,
  against Seti's "Khnum"), "the ba of Nun is the **water**" (against "Re") (85–86); "and every goddess"; **the name of
  Apophis replaced by *mn* "so-and-so"** (87); "spirits and dead" added to "gods, be far" (88); "in whom one goes in and
  out every day" for "in whom Re descends" (89); **omits the instruction for the goddess-and-snake image** (90) and
  verses 313–318 (92–93: the festival rubric and "what are your names?"); breaks off at 94.
- **Ramesses III** ends at column 85 ("for lack of space", Hornung n. 189); **Ramesses II** does not reach part 2.

#### Decisions (part 2)
- **Names:** Duamutef `דּוּאָמוּתֶף`, Atum `אָתוּם`, wꜣs-ḥr.t `וָאס־הַמָּרוֹם`; Osiris `אוֹסִירִיס`; the Akeru `הָאֲכֶרוּ`; Jw-n-bꜣ.wj
  `אִי־שְׁנֵי־הַבָּאִים`; the Haunebu `הָחָאוּ־נֶבּוּת`; Khnum `חְנוּם`; Gereh (Night) `גֶּרֶח`; the Ram of Mendes `בָּא־גֶּ׳דֶת`;
  Sobek `סוֹבֶּךְ`; Apophis `אַפּוֹפִּיס`; Harsaphes `חֶרְיְשֶׁף`; Seti I `מֶן־מַאַת־רַא` / `סֵתִי מְרִי־אֶן־פְּתָח`; Heka `חֶקָא`.
- **The ba:** bꜣ `בָּא` ★, **plural `בָּאִים` ★** (vocalized; the Hebrew plural of the transliteration – `בָּאוֹת` rejected as
  feminine); bꜣ.w "might" stays `עָצְמָה` (another lemma).
- **Serpents:** ḥfꜣw and ḥfꜣ.t = **`נָחָשׁ`** (the dossier's comparison word for every culture's generic snake; Ugaritic
  *nḥš* keeps its own reservation; `תַּנִּין` never, the crocodiles are `תִּמְסָחִים`).
- **Magic:** ḥkꜣ.w (tla110660, "magic, spell") `קְסָמִים` / `קֶסֶם`; ḥkꜣ.w (tla110700, TLA "magician") = **the god
  `חֶקָא`** where he is one being (60, 87–90; Hornung "der Gott 'Zauber'"), `קוֹסְמִים` where plural (95); ḥkꜣ.yw (59)
  `הַקּוֹסְמִים`; ꜣḫ.w "efficacious power" `סְגֻלּוֹת` (the rabbinic sense; no echo of Exod 19:5 intended – noted).
- **Time:** nḥḥ `נֶצַח`, ḏ.t `עַד` ("נצח ועד" as the two names, 93, 95); nb-nḥḥ `אֲדוֹן הַנֶּצַח` (as MT 63).
- **Thoth:** s.tj "deputy" `מְמַלֵּא־מָקוֹם` (from s.t `מָקוֹם`: Hornung's pun "my place" / "deputy" kept); ṯꜣtj `וְזִיר`;
  jꜥḥ `יָעַח` ★ (AM); hbj `הָאִיבִּיס` (AM); tḫnj `הַתְּחֶנִי` (transliterated: a second ibis word); ꜥnꜥn "baboon" `הָעַנְעַן`
  (transliterated: AM's jꜥnꜥ keeps `בַּבּוּן`), ꜥnꜥn "repel" `דָּחָה`; pꜣw.tjw `הָרִאשׁוֹנִים` (tp.w-ꜥ keeps `קַדְמוֹנִים`).
- **Ritual words:** wꜥb `טָהוֹר` / `טִהֵר` / `טָהֳרָה`, the wab-priest `טָהוֹר` (see Proposals: AM's twr 27.12 `נִטְהַר`);
  ḥsmn `מְחֻטָּא`; bd "natron" `בֹּרִית` (`נֶתֶר` kept free: it is the Hebrew of Egyptian *nṯrj*, not of *bd*); sšr `פִּשְׁתִּים`;
  mrḥ.t `מִשְׁחָה`; snṯr `קְטֹרֶת`; sḥtp `מַחְתָּה`; bꜣq `שֶׁמֶן־בָּאק`; mw mḥwyw `מֵי־הַשִּׁיטָּפוֹן` (never `מַבּוּל`); jr.w
  "rite" `טֶקֶס`; mḏꜣ.t `מְגִלָּה` (šfd keeps `סֵפֶר`); šdj "recite" `קָרָא` (a split by sense with njs "call", `קָרָא`);
  rpy.t "female figure" `צוּרַת אִשָּׁה` (`צֶלֶם`, `דְּמוּת` gated); twt `דְּמוּת` (licensed); zẖꜣ "writing" `כְּתָב` / "drawing"
  `צִיּוּר` (one lemma, split by sense); jꜣ.t "mound" `תֵּל` (`גִּבְעָה` is qꜣꜣ's); grg (n.) `צֵידָה`; ẖr.t-nṯr `נַחֲלַת־הָאֵל`;
  j-gr.t "the Silent (land)" **`הַשּׁוֹתֶקֶת`** (from gr "be silent", AM's `הַשּׁוֹתֵק`); mꜥk.t `נְצִירָה` (mkj `נָצַר`);
  wḏꜣw "amulet" `קָמֵעַ`; sḏ.t "flame" `שַׁלְהֶבֶת` (AM's ḫ.t `אֵשׁ`, stꜣ `לֶהָבָה`); msḏr "ear" `אֹזֶן` (a split: AM's ꜥnḫ.wj
  `אָזְנַיִם` – two Egyptian ear words, one Hebrew); ḥmj "retreat" `סָר` (`נָסוֹג` is gated).
- **Readings:** 49 *jw=j jm=j* "I (am) I" (TLA, Hornung "Ich bin, der ich bin"; no "who" or verb "to be" in Egyptian,
  hence `אֲנִי (הוּא) אֲנִי`); 49–51 *m shꜣj* `*בכתב יורד*?` (TLA "descending"; Hornung "retrograde"); 52 ⟨mꜣꜥ⟩
  `כַּהֲלָכָה?` (TLA adverb; Hornung "Maat"); 57 "they feared me" (the grammar; Hornung "I fear them"); 59 *wn*
  `*ואקשור*?` (TLA variant "bind"); 76 "purified" with the ears (TLA); 78 `*מַאַת*?` and "green" paint (base; TLA
  red, Hornung white); 85 Seti's "Khnum", 86 "Re" kept against RVI's "wind" / "water"; 87 *bꜣḫ* `*לובן העין*?` (TLA;
  RVI "Bakhu", the eastern mountain); 89–90 "pure-headed Heka" as the address to the reciter (TLA; my draft had cut
  it off as a sentence); 94 *bꜣ* (Seti) against T's "name"; 95 ḥkꜣ.w "magicians" (TLA).

#### Open decisions (part 2)
1. **`בָּאִים`** as the plural of the transliterated ba (or keep `בָּא` invariable).
2. **wꜥb = `טָהוֹר`** collides with AM 27.12 twr `נִטְהַר`: move AM's twr (one line) to `הִזְדַּכֵּךְ`, or record the split.
3. **The `סוג` gate blocks `השיג`** (Hifil of נשג), which is the corpus word for pḥ "reach" (MK E138 `תשיג`, HC 29
   `שֶׁיַּשִּׂיג`): at 94 I used the suffixed form `הִשִּׂיגָנוּ` (natural Hebrew, not a bent word), which the gate does not
   catch. The gate should license `השיג` by pḥ (or by the lemma tla61370) – a tool question for the coordinator.
4. ḥkꜣ.w (tla110700): `חֶקָא` (the god) in 60, 87–90 and `קוֹסְמִים` in 95 – one lemma, two renderings by number.

#### Progress log (part 2)
- Drafted 49–95 in six sections (49–55, 56–62, 63–74, 75–83, 84–87, 88–95), each saved, filled, verified, and only
  then compared with the TLA's German and with Hornung (translation pp. 44–48, notes 121–225, pp. 33–36). Changes after
  the comparison (each marked "הטיוטה … תוקן" in the entry): 52 `אמת?` → `כהלכה?`; 76 the natron clause; 88 `ובשחר` →
  `בזוהר`; 90 "pure-headed Heka" joined to the address; 95 `חֶקָא` → `קוסמים`; 49–51 "retrograde" → "descending".
- Part 1 touched for consistency: 26 `*הצורך*?` → `*המצב*?` (ḫr.t, as 50 and 95); 28 `שליט` → `שולט` (sḫm vs ḥqꜣ).
- Pass (a) fidelity, whole text: every word of 49–95 parsed; brackets checked (95 especially: restored stretches
  marked word by word); negations (49, 81–83 *n sḏm.n=f* "cannot") and tenses (the ḫr-forms `וַהֲרֵי`) checked.
- Pass (b) consistency, whole text: the formulas (`אָז אָמַר הוֹד מַלְכוּת X`, `כָּךְ נִהְיָה X`, `אָז הוּבָא מִיָּד`, `דְּבָרִים
  לֵאמֹר`); the repeated captions of 95 copy 44, 49–55 word for word (`אֵלֵי־חֶח אשר על חזה / על גבה`, `לא תיעף`, `מצבך כחי
  לעד`, `חיים, שלום, בריאות לאפך זה`, `בנך – אני`, `השייך ליציאתו`, `דּוּאָמוּתֶף, אָתוּם, וָאס־הַמָּרוֹם`); every new
  word grepped against the corpus (`lex`, `grep --all`): collisions avoided listed in Decisions.
- Pass (c) Hebrew: the built translation of 1–95 read through; vocalization added where a word would be misread
  (`הָאֵלֶּה`, `הַבָּא`, `צִי`, `הֶגֶה`, `חֶצְיָם`, `אֵלוֹ`).
- `egypt_tools.py build`; `verify HC --strict` 0 problems; `verify --strict` (whole corpus) 0; `selftest` 31/31;
  `check_bible_quotes.py` on the annotated file, intro, both built translations and project.md: 0;
  `build_parallels_index.py` (on purpose): 134 HC rows.

#### The text on its own terms (part 2)
- **A new order by appointment** (56–74): after the withdrawal, Re governs as an absent king through delegates – Geb
  and Nun over the serpents, Osiris over the netherworld, Thoth as deputy and vizier; even the serpents get a written
  decree (58).
- **Magic as a natural force to be regulated** (57–62, 84–90): serpents have "efficacy", magicians know "their spells",
  Heka lives in the bellies of beings; the creator "swallows" magic, and the last word is that magic should become
  "useful" to the whole land (61).
- **The moon as the sun's deputy** (71–74): the night is not abandoned; its light "opens the faces" of those who see.
- **Animals as the gods' visible forms** (71–73, 85–87): ibis, baboon, ram, crocodiles, serpents – each a god's ba or
  emblem, explained by puns.
- **The ba theology** (84–87): every god has a visible manifestation – wind, rain, night, water, a ram, crocodiles; the
  ba of Re is magic, older than time.
- **Purity as preparation for speech** (74–79): oil, incense, natron in the mouth, white linen and sandals, Maat on the
  tongue: the body is made fit to say divine words.
- **Time as gods and names** (89–95): Neheh and Djet, the two eternities, hold up the sky and are the secret names that
  let the dead pass: to know the name is to become it.
- **A book that knows it is a book** (49–55, 80, 95): instructions for scribes and painters, "another version", "the
  rite in this scroll"; and in T, a blessing on "every excellent scribe who knows the god's words".
- **The king as the user** (95): the whole myth ends in Seti I's names – it was copied for him to say in the hereafter.

#### Key parallels (part 2)
- [equivalent] Exod 3:14 (49): "I (am) I" – the god's self-definition, without a verb "to be" in the Egyptian.
- [equivalent] Exod 3:13–15 (93, 85): "What are your names?" – "Neheh and Djet" (the name is eternity).
- [equivalent] Gen 41:40, 43 (71, 74): Thoth made the king's deputy "in my place", with a title "they shall call you";
  the vizier – in Egypt, as Joseph.
- [divergence] Gen 1:16 (73): the moon rules the night as the sun's deputy; in Genesis a nameless "lesser light".
- [equivalent] Ezek 9:2 (67): the divine scribe who writes in the realm of judgement.
- [equivalent] Lev 8:12, 16:4; Ezek 44:17; Jer 2:22 (75–77): anointing, linen garments, washing and alkali before
  holy service.
- [divergence] Exod 20:3 (90, 44): images of the goddess, the snake and the sky as ritual duty.
- [divergence] Num 21:9; Isa 27:1 (87): the serpent as bearer of divine power / as cosmic enemy (Apophis).
- [equivalent] Ps 115:17 (54): the realm of the dead as "silence" (`דּוּמָה` / *jgr.t*).

#### Proposals for the shared renderings (part 2)
1. **§3:** the names listed above (Duamutef, Akeru, Haunebu, Harsaphes `חֶרְיְשֶׁף`, Gereh, Sobek `סוֹבֶּךְ`, Khnum
   `חְנוּם` as §3.1, Jw-n-bꜣ.wj, Seti I's names), Heka `חֶקָא` as §3.1.
2. **§4:** bꜣ pl. `בָּאִים` ★; ḥfꜣw / ḥfꜣ.t `נָחָשׁ`; s.tj `מְמַלֵּא־מָקוֹם`; ṯꜣtj `וְזִיר`; wꜥb `טָהוֹר` (and AM 27.12, see Open
   decisions); bd `בֹּרִית` (`נֶתֶר` reserved for *nṯrj* if it occurs); j-gr.t `הַשּׁוֹתֶקֶת`; ẖr.t-nṯr `נַחֲלַת־הָאֵל`;
   ꜣḫ.w `סְגֻלּוֹת`; ꜥnꜥn (baboon) `עַנְעַן`.
3. **§5.3 always vocalized:** `בָּא` / `בָּאִים` in every form (`הַבָּא`, `לַבָּא`), `אֵלוֹ` ("his god").
4. **Tool:** license the `השיג` token of the סוג gate by pḥ (tla61370).

#### Lessons for the guidelines (part 2)
- **A late-recension witness can omit whole rubrics** (RVI drops the image instruction and the festival rubric): list a
  witness's omissions per column, not only its word variants.
- **Short columns** (63–70) carry one phrase each; the "one column = one line" rule still holds, and the sentence is
  read across them in the notes.

## Review pass (a): fidelity (2026-10-23)

**What was checked.** All 95 columns: the `>` line against the base line and the TLA lemma/morphology data; every content
word, negation (`n sḏm.n=f` "cannot" 9, 24, 83; `nn`, `nn-wn`, `m` prohibitives 15, 28, 31), tense / aspect (the narrative
`sḏm.jn=f`, the progressive `wn.jn=f ḥr sḏm`, statives, the `sḏm.ḫr=f` of the instructions), person, number, passive; the
brackets; the פירוק against the line; the line breaks. Second check: the TLA's German (`tr HC`) for every column and
Hornung's translation (text layer pp. 38–46) at 7, 19, 23, 49, 52–54. Witness claims spot-checked against
`data HC 1 1 --wit`: the Tutankhamun shrine's back wall line 30 (`nn-wn ḫfty.w m rmṯ nṯr ꜣḫ mwt …`, cited at 95) and the
KV 9 variants cited at 85 (`ṯꜣw`), 86 (`mw`), 87 (`Bꜣḫw`) are correct; the claim that the shrine has nothing of 1–48 holds
(the AED shrine lines are its back-wall texts only). Risk points read twice: 15, 20, 26–27, 49, 56–67, 93–95.

**Changes** (label: old → new, reason):
- **19** (פירוק and תרגומים; the line is unchanged): `ḥḏ tꜣ` `האירה הארץ` – the תרגומים said "as here" of the TLA, whose
  reading is a near future ("würde nun (bald) … anbrechen"); now it records that the line follows Hornung's past ("Dann
  brach der Tag an, an dem die Göttin die Menschen töten sollte", after Gilula) and gives the TLA's as the alternative.
- **23:** `ואז שתתה` → `ואז היתה שותה`: `wn.jn=st ḥr swrj` is the progressive, rendered with the participle everywhere else
  (1–3 `היו … חושבים`, `היה … מכיר`; 38 `היה … חוזה`; 40 `היתה … רועדת`); the parse already glossed it so.
- **28:** `אל תירתע` → `אל תירתע?`: the base marks `bh(ꜣ)?` doubtful (as 12 `תן?`, `ותכתוש?`, 29 `אמתין?`).
- **49:** `לאמור: בחוץ – אני (הוא) אני` → `לאמור, בחוץ: אני (הוא) אני`: `rw.tj` "outside" is where the inscription stands
  (TLA; Hornung "Folgender (Text steht) außerhalb"), not part of it; the colon now opens the quotation after it. The
  rendering of renderings §10.11.5 is kept.

Lines whose Hebrew changed: 3 (23, 28, 49); parse / apparatus only: 2 (19, 49).

**Cruxes left (marked, alternative in the apparatus):** 6 `[אז עמדו]?`; 12 `תן?`, `ותכתוש?`; 25 `*כהקצאת־השפחות*?`;
26 `אָכֵן?, *המצב*?`; 27 `*לא אהרוג אותם אף פעם*?`; 32–33 the restorations `[…]?`; 37 `ליושבי־השמים?`; 45 `היא? יוצאת?`;
48 `השמאלי?`; 49–51 `*בכתב יורד*?`; 51 `ירכתיו?`; 52 `כהלכה?`; 59 `*ואקשור*?`; 60 `שישמרו עלי?`; 61 `יועילו?`;
78 `*מַאַת*?`; 82 `תעבורנה?`; 85 `חְנוּם?`; 86 `רַא?`; 87 `ב*לובן העין*?`; 89 `אֵלוֹ?`; 92 `*המתמידים בסוד*?`; 95 the
fragments. Tense choices kept and recorded: 19 (past, Hornung; TLA near future); 39 `נח השדה כאן!` (TLA a wish);
53 `חתומים` (Hornung "sind versiegelt"; TLA "sollen gesiegelt werden"); 53–54 `על ירכיה` for `m mn.tj=s` (Hornung "auf
ihren Schenkeln"; TLA "innerhalb ihres Beinpaares").

**For the renderings:** §10.11.5 describes column 49 as `jnk jnk`; the base has `jw=j jm=j` (the rendering `אֲנִי (הוּא)
אֲנִי` fits it; only the description is off).

**Checks:** `egypt_tools.py build`; `verify … HC --strict` 0 problems; `check_bible_quotes.py` on every file of the
project 0 problems.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (HC)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | [ḫpr] [swt] [wbn] [Rꜥ] nṯr ḫpr-ḏ{d}⟨s⟩≡f m-ḫt wnn =f m nsw,yt r(m)ṯ.pl nṯr.pl m (j)ḫ,t ⟨wꜥ.t⟩ wn.jn ⸢r(m)ṯ⸣[.pl] [ḥr] | [נִהְיָה, אֵפוֹא, שֶׁזָּרַח רַא], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ, אחרי שהיה במלוכה – בני האדם וְהָאֵלִים כדבר אחד. ואז היו בני האדם | `וַיְהִי כָל הָאָרֶץ שָׂפָה אֶחָת וּדְבָרִים אֲחָדִים` (בראשית יא:א) | equivalent | "כדבר אחד": אחדות קדמונה שתתפרק במרד (בבראשית יא – אחדות בני האדם בינם לבין עצמם; כאן – בני האדם והאלים יחד) |
| 1 | [ḫpr] [swt] [wbn] [Rꜥ] nṯr ḫpr-ḏ{d}⟨s⟩≡f m-ḫt wnn =f m nsw,yt r(m)ṯ.pl nṯr.pl m (j)ḫ,t ⟨wꜥ.t⟩ wn.jn ⸢r(m)ṯ⸣[.pl] [ḥr] | [נִהְיָה, אֵפוֹא, שֶׁזָּרַח רַא], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ, אחרי שהיה במלוכה – בני האדם וְהָאֵלִים כדבר אחד. ואז היו בני האדם | `וְגַם אַחֲרֵי כֵן אֲשֶׁר יָבֹאוּ בְּנֵי הָאֱלֹהִים אֶל בְּנוֹת הָאָדָם` (בראשית ו:ד) | divergence | גם בבראשית, ממש לפני ההחלטה להשמיד את האדם, אלים ובני אדם מעורבים זה בזה; שם זו תקלה, כאן זה מצב הבראשית התקין. |
| 2 | [kꜣi̯.t] [md,t] […] md,t r ḫft,j.pl Rꜥ [jstw] r =f ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jꜣwi̯.w qs.pl =f m ḥḏ ḥꜥ,pl =f m nbw šnj =f m ḫsbd ⟨mꜣꜥ⟩ wn⸢.jn⸣ [ḥm] =[f] | [חושבים דבר] […] דבר נגד אויבי רַא, [וַהֲרֵי] הוד מלכותו – חיים, שלום, בריאות – זקן: עצמותיו כסף, גופו זהב, שערו סַפִּיר אמיתי. ואז היה [הוד מלכותו] | `וְכָל יֵצֶר מַחְשְׁבֹת לִבּוֹ רַק רַע כָּל הַיּוֹם` (בראשית ו:ה) | equivalent | מחשבת בני האדם כסיבת העונש; אבל בבראשית הרוע כללי ("כל יצר מחשבות לבו"), וכאן זו מזימה מסוימת נגד המלך |
| 2 | [kꜣi̯.t] [md,t] […] md,t r ḫft,j.pl Rꜥ [jstw] r =f ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jꜣwi̯.w qs.pl =f m ḥḏ ḥꜥ,pl =f m nbw šnj =f m ḫsbd ⟨mꜣꜥ⟩ wn⸢.jn⸣ [ḥm] =[f] | [חושבים דבר] […] דבר נגד אויבי רַא, [וַהֲרֵי] הוד מלכותו – חיים, שלום, בריאות – זקן: עצמותיו כסף, גופו זהב, שערו סַפִּיר אמיתי. ואז היה [הוד מלכותו] | `וְעַתִּיק יוֹמִין יְתִב לְבוּשֵׁהּ כִּתְלַג חִוָּר וּשְׂעַר רֵאשֵׁהּ כַּעֲמַר נְקֵא` (דניאל ז:ט) | divergence | האל הזקן; בדניאל הזקנה היא הדר ושלטון, כאן היא חולשה שמזמינה מרד |
| 2 | [kꜣi̯.t] [md,t] […] md,t r ḫft,j.pl Rꜥ [jstw] r =f ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jꜣwi̯.w qs.pl =f m ḥḏ ḥꜥ,pl =f m nbw šnj =f m ḫsbd ⟨mꜣꜥ⟩ wn⸢.jn⸣ [ḥm] =[f] | [חושבים דבר] […] דבר נגד אויבי רַא, [וַהֲרֵי] הוד מלכותו – חיים, שלום, בריאות – זקן: עצמותיו כסף, גופו זהב, שערו סַפִּיר אמיתי. ואז היה [הוד מלכותו] | `רֹאשׁוֹ כֶּתֶם פָּז` (שיר השירים ה:יא); `מֵעָיו עֶשֶׁת שֵׁן מְעֻלֶּפֶת סַפִּירִים` (שיר השירים ה:יד) | equivalent | גוף עשוי זהב ואבני ספיר |
| 2 | [kꜣi̯.t] [md,t] […] md,t r ḫft,j.pl Rꜥ [jstw] r =f ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jꜣwi̯.w qs.pl =f m ḥḏ ḥꜥ,pl =f m nbw šnj =f m ḫsbd ⟨mꜣꜥ⟩ wn⸢.jn⸣ [ḥm] =[f] | [חושבים דבר] […] דבר נגד אויבי רַא, [וַהֲרֵי] הוד מלכותו – חיים, שלום, בריאות – זקן: עצמותיו כסף, גופו זהב, שערו סַפִּיר אמיתי. ואז היה [הוד מלכותו] | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) | equivalent | הספיר כחומר של האלוהות ושל השמים |
| 2 | [kꜣi̯.t] [md,t] […] md,t r ḫft,j.pl Rꜥ [jstw] r =f ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) jꜣwi̯.w qs.pl =f m ḥḏ ḥꜥ,pl =f m nbw šnj =f m ḫsbd ⟨mꜣꜥ⟩ wn⸢.jn⸣ [ḥm] =[f] | [חושבים דבר] […] דבר נגד אויבי רַא, [וַהֲרֵי] הוד מלכותו – חיים, שלום, בריאות – זקן: עצמותיו כסף, גופו זהב, שערו סַפִּיר אמיתי. ואז היה [הוד מלכותו] | `הוּא צַלְמָא רֵאשֵׁהּ דִּי דְהַב טָב חֲדוֹהִי וּדְרָעוֹהִי דִּי כְסַף` (דניאל ב:לב) | divergence | פסל ממתכות; שם הסדר יורד מזהב לכסף ומסמל שקיעה של ממלכות. |
| 3 | [ḥr] [sjꜣ] [md,t] [n,t(t])? [kꜣi̯.t(j]) ⸢r⸣ =⸢f⸣ jn r(m)ṯ.pl ḏd.jn ḥm =f ꜥnḫ-(w)ḏꜣ-s(nb) n n,tj.w.pl m ḫt,jw.pl =f njs m~ꜥ n =j r jr,t =j r Šw | [מכיר את הדבר אשר נחשב] נגדו בידי בני האדם. אז אמר הוד מלכותו – חיים, שלום, בריאות – אל אשר בעקבותיו: קראו נא לי את עיני, ואת שׁוּ, | `וַיַּרְא יְהוָה כִּי רַבָּה רָעַת הָאָדָם בָּאָרֶץ` (בראשית ו:ה) | divergence | שני האלים "רואים" את רוע האדם; אבל רא מגלה מזימה נגדו עצמו, ומיד מכנס את האלים, ויהוה רואה את הרוע לבדו ומחליט לבדו (ו:ו–ז). |
| 4 | T⸢f⸣[n,t] ⸢Gb⸣ [Nw],t ḥnꜥ jt.w.pl mw,t.pl wnn.yw.pl ḥnꜥ =j jst(w) wj m Nwn ḥnꜥ gr nṯr ={j} Nwn jnn =f šn,ty =f | וְאֶת תֶּפְ[נוּת], את גֶּבּ ואת [נוּת], עם האבות והאמהות אשר היו עמי כשהייתי בְּנוּן, וגם את האל נוּן; יביא הוא את חצרו | `הָבָה נֵרְדָה וְנָבְלָה שָׁם שְׂפָתָם` (בראשית יא:ז) | divergence | גם בבראשית האל מתייעץ עם פמליה אלוהית לפני שהוא פועל נגד בני האדם; שם הפמליה עלומה ("הבה"), כאן היא נקראת בשמותיה. |
| 5 | ḥnꜥ =f jnn =k st m ktkt jmi̯ mꜣꜣ r(m)ṯ.pl jmi̯ wꜥr jb =sn jy =⸢k⸣ ⸢ḥnꜥ⸣ =⸢s⸣n r ḥw,t-ꜥꜣ(.t) ḏd =sn sḫr.w.pl =sn ḏr(j).w{t}.pl | עמו. תביא אותם בחשאי, לבל יחזו בני האדם, לבל יברח לבם. תבוא עמם אל הבית הגדול, ויאמרו את עצותיהם התקיפות, | `וַיֵּרֶד יְהוָה לִרְאֹת אֶת הָעִיר וְאֶת הַמִּגְדָּל` (בראשית יא:ה) | divergence | האל של בראשית יורד לראות את בני האדם; כאן האלים מתכנסים בסתר כדי שבני האדם לא יראו אותם. |
| 6 | jwi̯ =j m Nwn r bw ḫpr.n =j jm jni̯{≡j}.jn =tw nn-n nṯr.pl [ḥr-ꜥ,wj] [ꜥḥꜥ].⸢j⸣[n]? nn-n nṯr.pl jpn ḥr gs(.wj) =fj ḥr dhn tꜣ m-bꜣḥ | ואבוא בְּנוּן, אל המקום שנהייתי שם. אז הובאו הָאֵלִים הָאֵלֶּה [מיד]; [אז עמדו]? הָאֵלִים הָאֵלֶּה משני צדדיו, נוגעים (במצחם) בארץ לפני | `וְכָל צְבָא הַשָּׁמַיִם עֹמֵד עָלָיו מִימִינוֹ וּמִשְּׂמֹאלוֹ` (מלכים א כב:יט) | equivalent | מועצת האלים העומדת משני צדי המלך היושב (במלכים – בחזון; כאן – בסיפור) |
| 6 | jwi̯ =j m Nwn r bw ḫpr.n =j jm jni̯{≡j}.jn =tw nn-n nṯr.pl [ḥr-ꜥ,wj] [ꜥḥꜥ].⸢j⸣[n]? nn-n nṯr.pl jpn ḥr gs(.wj) =fj ḥr dhn tꜣ m-bꜣḥ | ואבוא בְּנוּן, אל המקום שנהייתי שם. אז הובאו הָאֵלִים הָאֵלֶּה [מיד]; [אז עמדו]? הָאֵלִים הָאֵלֶּה משני צדדיו, נוגעים (במצחם) בארץ לפני | `וַיָּבֹאוּ אֲחֵי יוֹסֵף וַיִּשְׁתַּחֲווּ לוֹ אַפַּיִם אָרְצָה` (בראשית מב:ו) | equivalent | ההשתחוויה של נוגעים בארץ, ובמצרים דווקא. |
| 7 | ḥm =f ḏd =f md,t =f m-bꜣḥ jt ={j} sms,w.pl jri̯ r(m)ṯ.pl nsw ⸢r⸣[ḫ],yt.pl ḏd.jn =sn ḫft ḥm =f mdwi̯{.pl} | הוד מלכותו, כדי שיאמר את דברו לפני אבי הבכירים, אשר עשה את בני האדם, מלך העם. אז אמרו נוכח הוד מלכותו: דַּבֵּר | — | — | — |
| 8 | n =n r sḏm.t =n st ḏd.jn Rꜥ n Nwn nṯr sms ḫpr.n =j jm =f nṯr.pl dp-ꜥ.pl m =tn r(m)ṯ.pl ḫpr.w.pl | אלינו, עד שנשמע אותו! אז אמר רַא אל נוּן: האל הבכיר, אשר נהייתי ממנו, הָאֵלִים הקדמונים! הנה, בני האדם, אשר נהיו | `דַּבֵּר אַתָּה עִמָּנוּ וְנִשְׁמָעָה` (שמות כ:טו) | equivalent | "דבר אלינו – ונשמע"; שם העם מבקש מתווך כדי לא לשמוע את האל, כאן האלים מבקשים לשמוע את רא עצמו. |
| 9 | m jr,t =j kꜣi̯.n =sn md,t r =j ḏd.pl n =j jr,t.pl =tn r =s m =tn wj ḥḥj =j n smꜣ.n =j st r sḏm.ṱ =j ḏ[d].tj =tn | מעיני – חשבו דבר נגדי! אמרו לי מה תעשו לו; הנה אני מבקש (עצה): לא אוכל להרוג אותם עד שאשמע את אשר תאמרו | `וַיֹּאמֶר יְהוָה אֶמְחֶה אֶת הָאָדָם אֲשֶׁר בָּרָאתִי` (בראשית ו:ז) | divergence | ההחלטה להשמיד את בני האדם שהאל עשה; בבראשית יהוה מחליט לבדו ובבת אחת, ורא "אינו יכול להרוג" לפני שישמע את עצת האלים |
| 9 | m jr,t =j kꜣi̯.n =sn md,t r =j ḏd.pl n =j jr,t.pl =tn r =s m =tn wj ḥḥj =j n smꜣ.n =j st r sḏm.ṱ =j ḏ[d].tj =tn | מעיני – חשבו דבר נגדי! אמרו לי מה תעשו לו; הנה אני מבקש (עצה): לא אוכל להרוג אותם עד שאשמע את אשר תאמרו | `קֵץ כָּל בָּשָׂר בָּא לְפָנַי כִּי מָלְאָה הָאָרֶץ חָמָס מִפְּנֵיהֶם` (בראשית ו:יג) | divergence | בבראשית הסיבה היא "חמס" בין בני האדם, כאן – מזימה נגד האל המלך. |
| 10 | r =s ḏd.jn ḥm n Nwn zꜣ =j Rꜥ nṯr ꜥꜣ r jri̯-sw wr r qmꜣ.yw.pl-sw ḥmsi̯ s,t =[k] | עליו. אז אמר הוד מלכות נוּן: בני רַא, האל הגדול מעושהו, הגדול מיוצריו – שב במקומ[ך]! | `יוֹשֵׁב בַּשָּׁמַיִם יִשְׂחָק` (תהלים ב:ד) | divergence | האל היושב על כסאו מול קושרים נגדו; במזמור הוא צוחק, כאן הוא מתייעץ. |
| 11 | wr snḏ =k jw jr,t =k r wꜣi̯.yw.pl jm =k ḏd.jn ḥm n Rꜥ m =tn st wꜥr r ḫꜣs,t jb.pl =sn snd.w ḥr ⸢ḏ⸣[d] =[j] | גדולה יראתך, כשעינך (פונה) אל החורשים (רעה) עליך! אז אמר הוד מלכות רַא: הנה, הם ברחו אל המדבר, לבותיהם חוששים מפני מה ש[אמרתי] | `אַל-תַּחֲרֹשׁ עַל-רֵעֲךָ רָעָה` (משלי ג:כט) | equivalent | *wꜣj* "לחרוש רעה": העברית מן המקרא, `חרש (רעה) על`, משום שזו המלה הטבעית |
| 11 | wr snḏ =k jw jr,t =k r wꜣi̯.yw.pl jm =k ḏd.jn ḥm n Rꜥ m =tn st wꜥr r ḫꜣs,t jb.pl =sn snd.w ḥr ⸢ḏ⸣[d] =[j] | גדולה יראתך, כשעינך (פונה) אל החורשים (רעה) עליך! אז אמר הוד מלכות רַא: הנה, הם ברחו אל המדבר, לבותיהם חוששים מפני מה ש[אמרתי] | `כִּי עָלָיו שָׁאוּל מַחֲרִישׁ הָרָעָה` (שמואל א כג:ט) | equivalent | מזימה נגד מלך (דוד), כמו כאן. |
| 12 | [n] =sn ḏd.jn =sn ḫft ḥm =f ḏi̯? šmi̯ jr,t =k ḥ{ꜣ}⟨m⟩w? =s n =k stj wꜣi̯.pl m ḏw.pl nn jr,t ḫnt,j(.t) jm =[s] [r] [ḥwi̯.t] [n] =[k] [st] | [ל]הם. אז אמרו נוכח הוד מלכותו: תן? שתלך עינך ותכתוש? לך אותם, החורשים (רעה) כרעים; אין עין עדיפה ממנה [להכות אותם לך]. | `הָבָה נֵרְדָה וְנָבְלָה שָׁם שְׂפָתָם` (בראשית יא:ז) | equivalent | המועצה האלוהית ממליצה על ירידה ועל פעולה נגד בני האדם (ההמשך, "ותרד כחתחור", בעמודה הבאה). |
| 13 | hꜣi̯ =s m Ḥw,t-Ḥr,w jwi̯.jn r =f ntr,t tn smꜣm.n =s r(m)ṯ.pl ḥr ḫꜣs,t ḏd.jn ḥm n nṯr pn jyj.wj m-ḥtp Ḥw,t-Ḥr,w jri̯.t n jr[,w] [jy.n] =[j] [r] =[s] | ותרד כְּחַתְחוֹר! אז באה הָאֵלָה הזאת, אחרי שהרגה את בני האדם במדבר. אז אמר הוד מלכות האל הזה: בואי בנחת, חתחור, העושה לעושה [כאשר באתי אליה]! | `הָבָה נֵרְדָה` (בראשית יא:ז) | equivalent | ירידת האלוהות כדי להעניש את בני האדם |
| 13 | hꜣi̯ =s m Ḥw,t-Ḥr,w jwi̯.jn r =f ntr,t tn smꜣm.n =s r(m)ṯ.pl ḥr ḫꜣs,t ḏd.jn ḥm n nṯr pn jyj.wj m-ḥtp Ḥw,t-Ḥr,w jri̯.t n jr[,w] [jy.n] =[j] [r] =[s] | ותרד כְּחַתְחוֹר! אז באה הָאֵלָה הזאת, אחרי שהרגה את בני האדם במדבר. אז אמר הוד מלכות האל הזה: בואי בנחת, חתחור, העושה לעושה [כאשר באתי אליה]! | `וַיִּמַח אֶת כָּל הַיְקוּם אֲשֶׁר עַל פְּנֵי הָאֲדָמָה` (בראשית ז:כג) | divergence | ההשמדה; במבול היא כוללת ומסופרת בפירוט, כאן היא חלקית (רק "במדבר") ומסופרת בחצי משפט |
| 13 | hꜣi̯ =s m Ḥw,t-Ḥr,w jwi̯.jn r =f ntr,t tn smꜣm.n =s r(m)ṯ.pl ḥr ḫꜣs,t ḏd.jn ḥm n nṯr pn jyj.wj m-ḥtp Ḥw,t-Ḥr,w jri̯.t n jr[,w] [jy.n] =[j] [r] =[s] | ותרד כְּחַתְחוֹר! אז באה הָאֵלָה הזאת, אחרי שהרגה את בני האדם במדבר. אז אמר הוד מלכות האל הזה: בואי בנחת, חתחור, העושה לעושה [כאשר באתי אליה]! | `וְנֹחַ מָצָא חֵן בְּעֵינֵי יְהוָה` (בראשית ו:ח) | absent | אין כאן "נח" צדיק, ואין סיבה מוסרית לבחירת השורדים (ההצלה תבוא בתחבולה, עמודות 16–22). |
| 14 | ḏd{≡j}.jn nṯr,t tn ꜥnḫ =k n =j jw sḫm.n =j m r(m)ṯ.pl jw nḏm ḥr jb =j ḏd.jn ḥm n Rꜥ jw =j r sḫm jm =sn [m] [nsw] | אז אמרה הָאֵלָה הזאת: חי אתה לי! שלטתי בבני האדם, ונעים (היה) על לבי. אז אמר הוד מלכות רַא: אשלוט בהם [כמלך]. | `חֵי נַפְשְׁךָ אֲדֹנִי` (שמואל א א:כו) | equivalent | שבועה בחיי השומע |
| 14 | ḏd{≡j}.jn nṯr,t tn ꜥnḫ =k n =j jw sḫm.n =j m r(m)ṯ.pl jw nḏm ḥr jb =j ḏd.jn ḥm n Rꜥ jw =j r sḫm jm =sn [m] [nsw] | אז אמרה הָאֵלָה הזאת: חי אתה לי! שלטתי בבני האדם, ונעים (היה) על לבי. אז אמר הוד מלכות רַא: אשלוט בהם [כמלך]. | `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי כַּאֲשֶׁר עָשִׂיתִי` (בראשית ח:כא) | divergence | גם רא חוזר בו מן ההרג (בעמודה הבאה: "אל תמעיטי אותם!"), אבל כאן התשובה היא מלכות ("אשלוט בהם"), לא הבטחה לעולם. |
| 15 | m sꜥnd.w st ḫpr Sḫm,t pw šbb,t n.t grḥ r rh⟨n⟩i̯.t ḥr snf =sn šꜣꜥ{≡j}-m Nn-nsw ḏd.jn [Rꜥ] | אל תמעיטי אותם! כך נהייתה סֶחְמֶת, בְּלִיל הלילה, לדשדש בדמם, החל מֵחָנֵס. אז אמר [רַא]: | `וְיֵז נִצְחָם עַל בְּגָדַי` (ישעיהו סג:ג) | equivalent | האל הנוקם המדשדש בדם העמים, כבגת |
| 15 | m sꜥnd.w st ḫpr Sḫm,t pw šbb,t n.t grḥ r rh⟨n⟩i̯.t ḥr snf =sn šꜣꜥ{≡j}-m Nn-nsw ḏd.jn [Rꜥ] | אל תמעיטי אותם! כך נהייתה סֶחְמֶת, בְּלִיל הלילה, לדשדש בדמם, החל מֵחָנֵס. אז אמר [רַא]: | `וּמַלְאָכָיו חָנֵס יַגִּיעוּ` (ישעיהו ל:ד) | equivalent | חָנֵס, אותה עיר (*Nn-nsw*, הרקלאופוליס) |
| 15 | m sꜥnd.w st ḫpr Sḫm,t pw šbb,t n.t grḥ r rh⟨n⟩i̯.t ḥr snf =sn šꜣꜥ{≡j}-m Nn-nsw ḏd.jn [Rꜥ] | אל תמעיטי אותם! כך נהייתה סֶחְמֶת, בְּלִיל הלילה, לדשדש בדמם, החל מֵחָנֵס. אז אמר [רַא]: | `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי` (בראשית ח:כא) | divergence | "אל תמעיטי אותם" (לפי ה־TLA) הוא הרגע שבו רא עוצר את ההרג – לא חרטה (העברית אינה אומרת `נִחַם`: המצרית אינה אומרת אותו), אלא פקודה לאלה לא להוסיף. |
| 16 | njs.pl m~ꜥ n =j wpw,tj.w.pl ḫꜣḫ,w.pl sjn.w.pl sḫs{≡j} =sn ⟨mj⟩ šw,t n ẖ,t jni̯.jn =tw nn-n wpw,tj[.w.pl] [jpn] | קראו נא לי שליחים, זריזים, רצים, וימהרו כצל הבטן! אז הובאו השליחים [האלה] | — | — | — |
| 17 | ḥr-ꜥ,wj ḏd.jn ḥm n nṯr pn šꜣs n r Jꜣbw jni̯.pl n =j ddj,t r-wr jni̯.jn =tw n =f nn-n ddj,tj rḏi̯{.t}.jn [ḥm] [n] [nṯr] [pn] [ꜥꜣ] | מיד. אז אמר הוד מלכות האל הזה: רוצו אל יֵב, הביאו לי אֹדֶם לרוב! אז הובא לו האודם הזה. אז נתן [הוד מלכות האל הגדול הזה] | `מִמִּגְדֹּל סְוֵנֵה וְעַד גְּבוּל כּוּשׁ` (יחזקאל כט:י) | equivalent | סְוֵנֵה (אסואן), שכנתה של יֵב: הקצה הדרומי של מצרים, גבולה מול כוש. |
| 18 | [ḥn]sk,tt(j) n,tj m Jwn,w ḥr nḏ ddj,tj jpn jstw gr ḥm,t.pl ḥr tš jt r ḥ(n)q,t rḏi̯.jn =tw ddj,tj jpn ḥr šbb,t tn [wn.jn] [mj] [sn]f | את בַּעַל־הַצַּמָּה אשר בְּאוֹן לטחון את האודם הזה; והרי גם השפחות כותשות שעורה לַשֵּׁכָר. אז שמו את האודם הזה בַּבְּלִיל הזה, [ואז היה כדם] | `וּבְדַם עֲנָבִים סוּתֹה` (בראשית מט:יא) | equivalent | משקה אדום כ"דם" |
| 18 | [ḥn]sk,tt(j) n,tj m Jwn,w ḥr nḏ ddj,tj jpn jstw gr ḥm,t.pl ḥr tš jt r ḥ(n)q,t rḏi̯.jn =tw ddj,tj jpn ḥr šbb,t tn [wn.jn] [mj] [sn]f | את בַּעַל־הַצַּמָּה אשר בְּאוֹן לטחון את האודם הזה; והרי גם השפחות כותשות שעורה לַשֵּׁכָר. אז שמו את האודם הזה בַּבְּלִיל הזה, [ואז היה כדם] | `אַשְׁכִּיר חִצַּי מִדָּם` (דברים לב:מב) | equivalent | האל המשכר את נשקו בדם; כאן ההפך: הדם האמיתי מוחלף במשקה משכר שנראה כדם. |
| 19 | n r(m)ṯ.pl jri̯{.t}.jn =tw ḥ(n)q,t hbn,t 7000 jwi̯.jn r =f ḥm n nsw-byt Rꜥ ḥnꜥ nṯr.pl jpn r mꜣꜣ nn-n ḥ(n)q,t jstw ⸢ḥḏ⸣ ⸢tꜣ⸣ | בני האדם. אז עשו שֵׁכָר: שבעת אלפים כדים. אז בא הוד מלכות מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן רַא, עם הָאֵלִים הָאֵלֶּה, לחזות בַּשֵּׁכָר הזה. והרי האירה הארץ | `חֲמֵשׁ עֶשְׂרֵה אַמָּה מִלְמַעְלָה גָּבְרוּ הַמָּיִם` (בראשית ז:כ) | divergence | מספרים גדולים ומדויקים בתיאור הנוזל שיכסה את הארץ (ראו עמודה 22). |
| 20 | n smꜣmꜣ r(m)ṯ.pl jn nṯr,t m sw.pl =sn n.w ḫnty.t ḏd-mdw jn ḥm n Rꜥ nf{j}r.wj stj jw =j r mki̯.t | להריגת בני האדם בידי הָאֵלָה, בזמניהם של ההפלגה דרומה. דברים לאמר מֵאֵת הוד מלכות רַא: מה טובים הם! אנצור | `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי כַּאֲשֶׁר עָשִׂיתִי` (בראשית ח:כא) | equivalent | ההחלטה להציל את שארית בני האדם; כאן היא נאמרת לפני הפעולה ובלשון של מגן ("אנצור"), לא בלשון חרטה |
| 20 | n smꜣmꜣ r(m)ṯ.pl jn nṯr,t m sw.pl =sn n.w ḫnty.t ḏd-mdw jn ḥm n Rꜥ nf{j}r.wj stj jw =j r mki̯.t | להריגת בני האדם בידי הָאֵלָה, בזמניהם של ההפלגה דרומה. דברים לאמר מֵאֵת הוד מלכות רַא: מה טובים הם! אנצור | `וַיֹּאמֶר לַמַּלְאָךְ הַמַּשְׁחִית בָּעָם רַב עַתָּה הֶרֶף יָדֶךָ` (שמואל ב כד:טז) | equivalent | האל עוצר את השליח־המשחית שהוא עצמו שלח, באמצע ההרג |
| 20 | n smꜣmꜣ r(m)ṯ.pl jn nṯr,t m sw.pl =sn n.w ḫnty.t ḏd-mdw jn ḥm n Rꜥ nf{j}r.wj stj jw =j r mki̯.t | להריגת בני האדם בידי הָאֵלָה, בזמניהם של ההפלגה דרומה. דברים לאמר מֵאֵת הוד מלכות רַא: מה טובים הם! אנצור | `וְנֹחַ מָצָא חֵן בְּעֵינֵי יְהוָה` (בראשית ו:ח) | absent | אין כאן שורד נבחר: רא מציל את "בני האדם" שנותרו, כולם. |
| 21 | r(m)ṯ.pl ḥr =s ḏd.jn Rꜥ fꜣ⸢y⸣.pl m~ꜥ stj r bw {ꜣ}⟨ḏd⟩.n =s smꜣ =j r(m)ṯ.pl jm ⟨n⟩hp.jn ḥm n nsw-byt Rꜥ | את בני האדם מפניה! אז אמר רַא: שאו נא אותם אל המקום שאמרה: אהרוג שם את בני האדם! אז השכים הוד מלכות מלך־הדרום־והצפון רַא | `וַיַּשְׁכֵּם אַבְרָהָם בַּבֹּקֶר` (בראשית כב:ג) | equivalent | השכמה לקראת מעשה מכריע, בשני המקומות גם מעשה של הצלה מהרג. |
| 22 | m nfr,w-grḥ r rḏi̯.t stt.tw nn-n sḏr,t wn.jn ꜣḥ,t.pl n,tj šzp 3 mḥ(.tj) m mw m bꜣ,w n ḥm n nṯr pn šmi̯{.t}.jn | בְּתֹם הלילה, לתת שיישפכו משקאות־השינה הָאֵלֶּה. ואז היו השדות – שלושה טפחים – מלאים מים, בעצמת הוד מלכות האל הזה. אז הלכה | `חֲמֵשׁ עֶשְׂרֵה אַמָּה מִלְמַעְלָה גָּבְרוּ הַמָּיִם` (בראשית ז:כ) | divergence | כאן הנוזל מגיע לשלושה טפחים בלבד מעל השדות, והוא מציל ולא ממית; הסצנה מושווית לעתים קרובות למבול, אבל השכר אינו מבול: השדות "מלאים", והמצרית אינה אומרת שהשכר "גבר" או "כיסה" דבר |
| 22 | m nfr,w-grḥ r rḏi̯.t stt.tw nn-n sḏr,t wn.jn ꜣḥ,t.pl n,tj šzp 3 mḥ(.tj) m mw m bꜣ,w n ḥm n nṯr pn šmi̯{.t}.jn | בְּתֹם הלילה, לתת שיישפכו משקאות־השינה הָאֵלֶּה. ואז היו השדות – שלושה טפחים – מלאים מים, בעצמת הוד מלכות האל הזה. אז הלכה | `וְיַיִן יְשַׂמַּח לְבַב-אֱנוֹשׁ` (תהלים קד:טו) | divergence | המשקה המשמח והמרדים. |
| 23 | ntr,t tn m dwꜣ,wj gmi̯.n =s nn-n ḥr mḥi̯.t nfr.jn ḥr =st jm wn.jn =st ḥr swrj nfr ḥr jb =st jy.n =s tḫj.tj nn | הָאֵלָה הזאת בבוקר, ומצאה את אֵלֶּה מוצפים. אז יפו פניה בכך, ואז היתה שותה, וטוב (היה) על לבה; באה שיכורה, ולא | `וְלֵב נָבָל טוֹב עָלָיו וְהוּא שִׁכֹּר עַד מְאֹד` (שמואל א כה:לו) | equivalent | אותו ביטוי עצמו: "טוב על לבו" ושכרות |
| 23 | ntr,t tn m dwꜣ,wj gmi̯.n =s nn-n ḥr mḥi̯.t nfr.jn ḥr =st jm wn.jn =st ḥr swrj nfr ḥr jb =st jy.n =s tḫj.tj nn | הָאֵלָה הזאת בבוקר, ומצאה את אֵלֶּה מוצפים. אז יפו פניה בכך, ואז היתה שותה, וטוב (היה) על לבה; באה שיכורה, ולא | `וַיֹּאכַל בֹּעַז וַיֵּשְׁתְּ וַיִּיטַב לִבּוֹ` (רות ג:ז) | equivalent |  |
| 23 | ntr,t tn m dwꜣ,wj gmi̯.n =s nn-n ḥr mḥi̯.t nfr.jn ḥr =st jm wn.jn =st ḥr swrj nfr ḥr jb =st jy.n =s tḫj.tj nn | הָאֵלָה הזאת בבוקר, ומצאה את אֵלֶּה מוצפים. אז יפו פניה בכך, ואז היתה שותה, וטוב (היה) על לבה; באה שיכורה, ולא | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר` (בראשית ט:כא) | divergence | גם אחרי המבול באה שכרות: אצל נח היא מביאה קללה, כאן – הצלה. |
| 24 | sjꜣ.n =s r(m)ṯ.pl ḏd.jn ḥm n Rꜥ n nṯr,t tn jy.t.wj m-ḥtp jmꜣ,yt ḫpr nfr,t{.pl} m Jmꜣ,pl ⟨pw⟩ ḏd.jn ḥm n Rꜥ | יכלה להכיר את בני האדם. אז אמר הוד מלכות רַא אל הָאֵלָה הזאת: בואי בנחת, החביבה! כך נהייתה היפה באִימָאוּ. אז אמר הוד מלכות רַא | — | — | — |
| 25 | n ntr,t tn jri̯(.w) n =st sḏr,t m tr.w.pl (n) rnp,t jp{n}(.w) =st r ḥm,t.pl ={j} ḫpr jri̯.t sḏr,t pw m ⟨jp-ḥm,t(≡s)⟩? ḥb n Ḥw,t-Ḥr,w | אל הָאֵלָה הזאת: ייעשה לה משקה־שינה במועדי השנה, ויוקצה לשפחות. כך נהייתה עשיית משקה־השינה *כהקצאת־השפחות*?, חג חַתְחוֹר, | — | — | — |
| 26 | jn r(m)ṯ.pl nb(.w) ḏr hrw dp,j ḏd.jn ḥm n Rꜥ n ntr,t tn jn jw mḥr.n hh n mḥr ḫpr ḫr⟨,t⟩? trj {j}⟨p⟩w | בידי כל בני האדם, מן היום הראשון. אז אמר הוד מלכות רַא אל הָאֵלָה הזאת: האם הכאיב (לך) להט הכאב? כך נהיה, אָכֵן?, *המצב*? | — | — | — |
| 27 | jn mḥr ḏd.jn ḥm n Rꜥ ꜥnḫ =j n =j jw jb =j wrd.w wr r wnn ḥnꜥ =sn smꜣm =j st sp-n-jwtj ={j} nn-wn | בידי הכאב. אז אמר הוד מלכות רַא: חי אני לי! לבי עייף מאוד מלהיות עמם. *לא אהרוג אותם אף פעם*?; לא | `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי כַּאֲשֶׁר עָשִׂיתִי` (בראשית ח:כא) | equivalent | לפי קריאת ה־TLA, "לא אהרוג אותם אף פעם" הוא הוויתור המפורש של האל על הרג נוסף, כמו בבראשית אחרי המבול (ובשני המקומות הוויתור נאמר בלבו או בשבועה: "ויאמר יהוה אל לבו" / "חי אני לי"); לפי הורנונג – ההפך |
| 27 | jn mḥr ḏd.jn ḥm n Rꜥ ꜥnḫ =j n =j jw jb =j wrd.w wr r wnn ḥnꜥ =sn smꜣm =j st sp-n-jwtj ={j} nn-wn | בידי הכאב. אז אמר הוד מלכות רַא: חי אני לי! לבי עייף מאוד מלהיות עמם. *לא אהרוג אותם אף פעם*?; לא | `וַיִּתְעַצֵּב אֶל לִבּוֹ` (בראשית ו:ו) | divergence | ההחלטה נובעת ממצב הלב של האל: בבראשית הלב "מתעצב", כאן הוא "עייף מאוד מלהיות עמם" |
| 27 | jn mḥr ḏd.jn ḥm n Rꜥ ꜥnḫ =j n =j jw jb =j wrd.w wr r wnn ḥnꜥ =sn smꜣm =j st sp-n-jwtj ={j} nn-wn | בידי הכאב. אז אמר הוד מלכות רַא: חי אני לי! לבי עייף מאוד מלהיות עמם. *לא אהרוג אותם אף פעם*?; לא | `לֹא יָדוֹן רוּחִי בָאָדָם לְעֹלָם` (בראשית ו:ג) | divergence | האל שאינו רוצה עוד להיות עם בני האדם; בבראשית הפתרון הוא קיצור ימיהם, כאן – הסתלקות האל עצמו (עמודות 29–34) |
| 27 | jn mḥr ḏd.jn ḥm n Rꜥ ꜥnḫ =j n =j jw jb =j wrd.w wr r wnn ḥnꜥ =sn smꜣm =j st sp-n-jwtj ={j} nn-wn | בידי הכאב. אז אמר הוד מלכות רַא: חי אני לי! לבי עייף מאוד מלהיות עמם. *לא אהרוג אותם אף פעם*?; לא | `לֹא יִיעַף וְלֹא יִיגָע` (ישעיהו מ:כח) | divergence | ישעיהו מכחיש במפורש את העייפות של האל, שהיא כאן מניע הסיפור |
| 27 | jn mḥr ḏd.jn ḥm n Rꜥ ꜥnḫ =j n =j jw jb =j wrd.w wr r wnn ḥnꜥ =sn smꜣm =j st sp-n-jwtj ={j} nn-wn | בידי הכאב. אז אמר הוד מלכות רַא: חי אני לי! לבי עייף מאוד מלהיות עמם. *לא אהרוג אותם אף פעם*?; לא | `וְעַד זִקְנָה אֲנִי הוּא וְעַד שֵׂיבָה אֲנִי אֶסְבֹּל` (ישעיהו מו:ד) | divergence | האל של ישעיהו נושא את עמו עד זקנתו; רא הזקן מבקש להינשא. |
| 28 | ꜥnd ꜣw,t ꜥ =j ḏd.t.n nṯr.pl n,tj.w m-ḫt =f m bh(ꜣ)? m wrd,pl =k jw =k sḫm.tj m mrr,t.pl =k ḏd.jn ḥm [n] | מעט מרחב זרועי. ומה שאמרו הָאֵלִים אשר אחריו: אל תירתע? בעייפותך, ושולט אתה בכל אשר תאהב! אז אמר הוד מלכות | — | — | — |
| 29 | nṯr pn n ḥm n Nwn ḥꜥ,pl =j ꜣhd(.w) m sp dp,j nn {jꜣy}? ⟨zꜣy⟩? =j r pḥ.t wj ky ḏd.jn ḥm n Nwn zꜣ Šw jr,t =[k] | האל הזה אל הוד מלכות נוּן: גופי תשוש – בפעם הראשונה; לא אמתין? עד שישיג אותי אחר. אז אמר הוד מלכות נוּן: בני שׁוּ, עינ[ך] | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים` (בראשית ג:כב) | divergence | גם בבראשית חשש אלוהי מפני בני אדם שישיגו את מקום האלים; שם האדם מגורש, כאן האל מסתלק. |
| 30 | n jt =[k] ⸢m⸣ nḏ,pl =f zꜣ,t Nw,t ḏi̯ =t sw [ḥr] [psḏ] =[ṯ] ḏd.jn Nw,t mj m jr =f jt =j Nwn j.jn Nw,t | לאבי[ך] למשמר לו! ובתי נוּת – תשימי אותו [על גבך]! אז אמרה נוּת: איך זה, אבי נוּן? נאמה נוּת: | `וְהֵבִיאוּ בָנַיִךְ בְּחֹצֶן וּבְנֹתַיִךְ עַל כָּתֵף תִּנָּשֶׂאנָה` (ישעיהו מט:כב) | equivalent | נשיאה על הגב או על הכתף כדימוי של טיפול |
| 30 | n jt =[k] ⸢m⸣ nḏ,pl =f zꜣ,t Nw,t ḏi̯ =t sw [ḥr] [psḏ] =[ṯ] ḏd.jn Nw,t mj m jr =f jt =j Nwn j.jn Nw,t | לאבי[ך] למשמר לו! ובתי נוּת – תשימי אותו [על גבך]! אז אמרה נוּת: איך זה, אבי נוּן? נאמה נוּת: | `אֲשֶׁר נְשָׂאֲךָ יְהוָה אֱלֹהֶיךָ כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ` (דברים א:לא) | equivalent | אצלנו בנה של האל נושא את אביה של האלה: התפקידים הפוכים. |
| 31 | ⸢m⸣ _ ⸢Nwn⸣ ḫpr ⸢Nw,t⸣ [m] [jḥ,t] [__].jn swt ḥm n Rꜥ ḥr psḏ =s [jwi̯.t] pw jri̯.n nn-n r(m)ṯ.pl | אל […], נוּן! ונהייתה נוּת [לפרה]; אז […] אפוא הוד מלכות רַא על גבה. אז [באו] בני האדם הָאֵלֶּה | `עֶגְלָה יְפֵה פִיָּה מִצְרָיִם` (ירמיהו מו:כ) | equivalent | מצרים כפרה בעיני נביא ישראל (ובעמודה 34 המלה המצרית האחרת לפרה, `עֶגְלָה`) |
| 31 | ⸢m⸣ _ ⸢Nwn⸣ ḫpr ⸢Nw,t⸣ [m] [jḥ,t] [__].jn swt ḥm n Rꜥ ḥr psḏ =s [jwi̯.t] pw jri̯.n nn-n r(m)ṯ.pl | אל […], נוּן! ונהייתה נוּת [לפרה]; אז […] אפוא הוד מלכות רַא על גבה. אז [באו] בני האדם הָאֵלֶּה | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | divergence | הפרדת השמים; בבראשית היא מעשה בריאה ביום השני, כאן – מאוחרת, תוצאה של המרד ושל עייפות האל. |
| 32 | [m]? [bw]? [wꜥr.n]? =[sn]? [r]? =[f]? ꜥḥꜥ⟨.n⟩ mꜣꜣ.n =sn ⸢sw⸣ ḥr psd n [j]ḥ,t [ꜥḥꜥ⟨.n]⟩ ḏd.n n =f nn-n | [מן המקום שברחו אליו]?, ואז חזו בו על גב הפרה. [ואז] אמרו לו אותם | — | — | — |
| 33 | r(m)ṯ.pl [s]b[i̯.n]? =[tw]? [r]? =[k]? [mj]? n =n [s]ḫr =n ḫft,j.w.pl =k wꜣ.w.pl md,t ⸢r⸣ ⸢jri̯⸣.w{.pl} st wḏꜣ | בני האדם: [מרדו בך]?; [בוא]? אלינו, ונכריע את אויביך, החורשים דבר נגד עושם! נסע | `יִתְיַצְּבוּ מַלְכֵי-אֶרֶץ וְרוֹזְנִים נוֹסְדוּ-יָחַד עַל-יְהוָה וְעַל-מְשִׁיחוֹ` (תהלים ב:ב) | equivalent | מזימה של בני אדם נגד האל ונגד מלכו. |
| 34 | ḥm =f r ꜥḥ =[f] […] n ⸢jd⸣,t tn [nn]? [zb]⸢j⸣? =f ḥnꜥ =sn ꜥḥꜥ.jn r =f tꜣ m kk(,w) ḥḏ r =f tꜣ dwꜣ,wj? jw nn-n r(m)ṯ.pl | הוד מלכותו אל ארמונ[ו] […] של העגלה הזאת; [לא]? [צעד]? עמם. ואז היתה הארץ בחושך. האירה הארץ בבוקר?, ובני האדם הָאֵלֶּה | `וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | equivalent | אחרי האסון נקבע סדר היום והלילה; כאן החושך הראשון והבוקר הראשון באים מן ההסתלקות של האל |
| 34 | ḥm =f r ꜥḥ =[f] […] n ⸢jd⸣,t tn [nn]? [zb]⸢j⸣? =f ḥnꜥ =sn ꜥḥꜥ.jn r =f tꜣ m kk(,w) ḥḏ r =f tꜣ dwꜣ,wj? jw nn-n r(m)ṯ.pl | הוד מלכותו אל ארמונ[ו] […] של העגלה הזאת; [לא]? [צעד]? עמם. ואז היתה הארץ בחושך. האירה הארץ בבוקר?, ובני האדם הָאֵלֶּה | `וַיְגָרֶשׁ אֶת הָאָדָם` (בראשית ג:כד) | divergence | הפרידה בין האל לבני האדם: בבראשית האדם מגורש מקרבת האל, כאן האל עוזב את בני האדם. |
| 35 | (ḥr) pri̯ ẖr pḏ,t.pl ḫt⸢.pl⸣ […] [fꜣi̯]? =sn ꜥ n sti̯.t r ḫftj.w.pl ḏd.jn ḥm n nṯr pn ḫw,pl =tn ḥꜣ{.pl} =tn šꜥ,t{ꜣ}⟨j.w⟩.pl | יוצאים עם קשתות ומקלות […]; [נשאו]? זרוע לירות באויבים. אז אמר הוד מלכות האל הזה: זימותיכם סביבכם, אנשי־הטבח! | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן` (בראשית ט:יג) | divergence | הקשת אחרי האסון: בבראשית האל תולה את קשתו בענן כאות לשלום, כאן בני האדם יוצאים בקשתות זה נגד זה |
| 35 | (ḥr) pri̯ ẖr pḏ,t.pl ḫt⸢.pl⸣ […] [fꜣi̯]? =sn ꜥ n sti̯.t r ḫftj.w.pl ḏd.jn ḥm n nṯr pn ḫw,pl =tn ḥꜣ{.pl} =tn šꜥ,t{ꜣ}⟨j.w⟩.pl | יוצאים עם קשתות ומקלות […]; [נשאו]? זרוע לירות באויבים. אז אמר הוד מלכות האל הזה: זימותיכם סביבכם, אנשי־הטבח! | `אֲשֶׁר נָשְׂאוּ אֶת יָדָם בַּאדֹנִי הַמֶּלֶךְ` (שמואל ב יח:כח) | equivalent | "נשיאת יד" כיציאה לקרב (שם נגד המלך, כאן בשם המלך) |
| 35 | (ḥr) pri̯ ẖr pḏ,t.pl ḫt⸢.pl⸣ […] [fꜣi̯]? =sn ꜥ n sti̯.t r ḫftj.w.pl ḏd.jn ḥm n nṯr pn ḫw,pl =tn ḥꜣ{.pl} =tn šꜥ,t{ꜣ}⟨j.w⟩.pl | יוצאים עם קשתות ומקלות […]; [נשאו]? זרוע לירות באויבים. אז אמר הוד מלכות האל הזה: זימותיכם סביבכם, אנשי־הטבח! | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | equivalent | שפיכות הדמים בין בני האדם, ודין האל עליה מיד אחרי האסון. |
| 36 | ḥri̯ šꜥ,t [r]? [šꜣꜥ]? [ḫp]⸢r⸣ ⸢š⸣ꜥ,t pw ⸢m⸣ [r(m]ṯ.pl) ḏd.jn nṯr pn n Nw,t ḏi̯.n =⟨j⟩ wj ḥr sꜣ ={j}⟨t⟩ r ꜥḫi̯.t wj | רחוק (היה) הטבח [מן ההתחלה]?. [כך נהיה] הטבח [בבני האדם]. אז אמר האל הזה אל נוּת: שמתי את עצמי על גבך כדי לרומם אותי. | `וַיָּקָם קַיִן אֶל הֶבֶל אָחִיו וַיַּהַרְגֵהוּ` (בראשית ד:ח) | divergence | ראשית ההרג בין בני האדם: בבראשית – רצח אח מקנאה, בתחילת ההיסטוריה; כאן – מלחמה בשם האל, אחרי הסתלקותו. |
| 37 | pw-trj sj ḫru̯{.pl≡f} st Nw,t ḫpr.t(j) jm m? p,t[,du]⸢.t.j.w⸣? {tjw}⟨ḏd⟩ ḥm n nṯr pn ḥri̯ tj r =sn ꜥr wj mꜣꜣ | מה זאת? – אמרה נוּת; ונהייתה בכך ליושבי־השמים?. אמר הוד מלכות האל הזה: התרחקי מהם, קרבי אֵלַי, חזי | — | — | — |
| 38 | wj ḫpr =s [p]w [m] [ḥr,t] ⸢wn.jn⸣ ḥm n ⸢nṯr⸣ [pn] (ḥr) ⸢mꜣꜣ⸣ m ẖnw =st ḏd =s ḥwj.w grg =k n =j m | בי! כך נהייתה היא [למרום]. ואז היה הוד מלכות האל [הזה] חוזה בתוכה. אמרה היא: הלוואי ותצייד אותי ב | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | divergence | הפרדת השמים מן הארץ; בבראשית בדבר האל, ביום השני; כאן – כשהאל אומר לאלת השמים "התרחקי מהם". |
| 39 | ꜥšꜣ ḫpr _ [pw] [ḏd.jn] [ḥm] =f ⸢ꜥnḫ-(w)ḏꜣ-s(nb)⸣ ḥtp sḫ,t ꜥꜣ ḫpr sḫ,t-ḥtp pw jꜣ rjd =j sm,w.pl | רוב! כך נהיה […]. [אז אמר הוד מלכות]ו – חיים, שלום, בריאות: נח השדה כאן! כך נהיה שְׂדֵה־הַקָּרְבָּנוֹת. אכן, אצמיח עשב | `וְכָל עֵשֶׂב הַשָּׂדֶה טֶרֶם יִצְמָח` (בראשית ב:ה) | equivalent | השדה, העשב וההצמחה באותו משפט: בבראשית לפני בריאת האדם, כאן בשמים, לאחר המרד |
| 39 | ꜥšꜣ ḫpr _ [pw] [ḏd.jn] [ḥm] =f ⸢ꜥnḫ-(w)ḏꜣ-s(nb)⸣ ḥtp sḫ,t ꜥꜣ ḫpr sḫ,t-ḥtp pw jꜣ rjd =j sm,w.pl | רוב! כך נהיה […]. [אז אמר הוד מלכות]ו – חיים, שלום, בריאות: נח השדה כאן! כך נהיה שְׂדֵה־הַקָּרְבָּנוֹת. אכן, אצמיח עשב | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | equivalent | האל המכין מקום טוב, צומח, לבני האדם (כאן – למתים). |
| 40 | jm =s ḫpr sḫ,t[-jꜣr,pl] [p]w grg =[j] st m (j)ḫ,t.pl nb.(w)t ⟨ḫpr⟩ jḫjḫ.pl pw sbꜣ.pl wn.jn Nw,t ḥr sdꜣdꜣ | בו! כך נהיה שְׂדֵה־[הָאַגְמוֹנִים]. אצייד אותו בכל דבר! כך נהיו הָאַחְאַח – הכוכבים. ואז היתה נוּת רועדת | `וְאֵת הַכּוֹכָבִים` (בראשית א:טז) | divergence | הכוכבים נבראים בבראשית ביום הרביעי, כתוספת למאורות; כאן הם "נהיים" מן הצליל של "כל דבר" שבו רא מצייד את השמים. |
| 41 | ⸢n⸣ [qꜣi̯.t] [ḏd.jn] ḥm [n] Rꜥ ḥwj ꜣ n =j ḥḥ.pl ḥr twꜣ =s ḫpr Ḥḥ.pl pw ḏd.jn ḥm n Rꜥ | מפני [הגובה]. [אז אמר] הוד מלכות רַא: הלוואי (ויהיו) לי אלפי אלפים תומכים בה! כך נהיו אֵלֵי־חֶח. אז אמר הוד מלכות רַא: | `עַמּוּדֵי שָׁמַיִם יְרוֹפָפוּ` (איוב כו:יא) | equivalent | השמים שיש להם תומכים, והם רועדים |
| 41 | ⸢n⸣ [qꜣi̯.t] [ḏd.jn] ḥm [n] Rꜥ ḥwj ꜣ n =j ḥḥ.pl ḥr twꜣ =s ḫpr Ḥḥ.pl pw ḏd.jn ḥm n Rꜥ | מפני [הגובה]. [אז אמר] הוד מלכות רַא: הלוואי (ויהיו) לי אלפי אלפים תומכים בה! כך נהיו אֵלֵי־חֶח. אז אמר הוד מלכות רַא: | `אָנֹכִי תִכַּנְתִּי עַמּוּדֶיהָ` (תהלים עה:ד) | equivalent | האל המעמיד את תומכי העולם. |
| 42 | zꜣ =j Šw jmm tw ẖr zꜣ,t =(j) Nw,t zꜣu̯ n =j Ḥḥ.pl Ḥḥ.pl jm ꜥnḫ =sn m (j)ḫḫ,w jmm | בני שׁוּ, תן את עצמך תחת בתי נוּת! שמור לי את אֵלֵי־חֶח, אֵלֵי־חֶח אשר שם, ויחיו בדמדומים! תן | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ` (בראשית א:ז) | divergence | מה שמחזיק את השמים מעל הארץ: בבראשית רקיע שהאל עשה, כאן אל, שׁוּ, העומד תחת אלת השמים. |
| 43 | sj ḥr-dp =k mnꜥ =k st ḫpr rḏi̯.t mnꜥ,t pw n zꜣ n zꜣ,t ḫpr rḏi̯.t zꜣ pw jn jt =f ḥr ḏꜣḏꜣ =f | אותה על ראשך, ותאמון אותה! כך נהייתה נתינת אומנת לבן ולבת; כך נהייתה נתינת הבן בידי אביו על ראשו. | `כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | equivalent | האומן הנושא את הילד |
| 43 | sj ḥr-dp =k mnꜥ =k st ḫpr rḏi̯.t mnꜥ,t pw n zꜣ n zꜣ,t ḫpr rḏi̯.t zꜣ pw jn jt =f ḥr ḏꜣḏꜣ =f | אותה על ראשך, ותאמון אותה! כך נהייתה נתינת אומנת לבן ולבת; כך נהייתה נתינת הבן בידי אביו על ראשו. | `וַיְהִי אֹמֵן אֶת הֲדַסָּה` (אסתר ב:ז) | equivalent | אמונה של בת שאינה בתו |
| 43 | sj ḥr-dp =k mnꜥ =k st ḫpr rḏi̯.t mnꜥ,t pw n zꜣ n zꜣ,t ḫpr rḏi̯.t zꜣ pw jn jt =f ḥr ḏꜣḏꜣ =f | אותה על ראשך, ותאמון אותה! כך נהייתה נתינת אומנת לבן ולבת; כך נהייתה נתינת הבן בידי אביו על ראשו. | `וְהָיוּ מְלָכִים אֹמְנַיִךְ וְשָׂרוֹתֵיהֶם מֵינִיקֹתַיִךְ` (ישעיהו מט:כג) | equivalent | האומנים והמיניקות |
| 43 | sj ḥr-dp =k mnꜥ =k st ḫpr rḏi̯.t mnꜥ,t pw n zꜣ n zꜣ,t ḫpr rḏi̯.t zꜣ pw jn jt =f ḥr ḏꜣḏꜣ =f | אותה על ראשך, ותאמון אותה! כך נהייתה נתינת אומנת לבן ולבת; כך נהייתה נתינת הבן בידי אביו על ראשו. | `כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ` (דברים א:לא) | equivalent | האב הנושא את בנו. |
| 44 | ḏd.tw rʾ pn ḥr jd,t Ḥḥ.pl n,tj.w.pl ḥr qꜣb,t =st Ḥḥ.pl n,{ꜣ}⟨tj.w⟩.pl ḥr sꜣ =st | ייאמר הלחש הזה על עגלה – אֵלֵי־חֶח אשר על חזה, ואֵלֵי־חֶח אשר על גבה. | `לֹא תַעֲשֶׂה לְךָ פֶסֶל וְכָל תְּמוּנָה אֲשֶׁר בַּשָּׁמַיִם מִמַּעַל` (שמות כ:ג) | divergence | כאן ההוראה היא בדיוק לעשות תמונה של השמים, והיא חלק מן הטקס |
| 44 | ḏd.tw rʾ pn ḥr jd,t Ḥḥ.pl n,tj.w.pl ḥr qꜣb,t =st Ḥḥ.pl n,{ꜣ}⟨tj.w⟩.pl ḥr sꜣ =st | ייאמר הלחש הזה על עגלה – אֵלֵי־חֶח אשר על חזה, ואֵלֵי־חֶח אשר על גבה. | `וּרְאֵה וַעֲשֵׂה בְּתַבְנִיתָם אֲשֶׁר אַתָּה מָרְאֶה בָּהָר` (שמות כה:מ) | equivalent | הוראה כתובה לעשיית צורה פולחנית. |
| 45 | mḥ šzp =s 4 m rꜥ~y(,t) psḏ,t sbꜣ ḥr ẖ,t =st st? pr(i̯.tj)? m pḥ,wj jr,j ẖr-ḥꜣ,t mn,t.j-du =sj ={st} Šw | אַמָּה – טפחיה ארבעה – בצבע; תשיעיית כוכבים על בטנה; היא? יוצאת? מאחוריה, לפני ירכיה. שׁוּ | — | — | — |
| 46 | ẖr ẖ,t =st jri̯.w m qnj,t gꜣb.du =fj ẖr nꜣ-n sbꜣ.pl ⸢jri̯.w⸣ m rn =f r-jm,wt{.n≡j} =sn m-ḏd Šw | תחת בטנה, ייעשה בזרניך; אציליו תחת הכוכבים הָאֵלֶּה, וייעשה שמו ביניהם, לאמור: שׁוּ | — | — | — |
| 47 | ḏs =f wjꜣ ḥm,y(t) kꜣ~rjj jm =f jtn ḥr-r =f Rꜥ jm =f ẖr-ḥꜣ,t Šw r-gs ḏr,t =f ky-ḏd | עצמו. צִי – הֶגֶה ומקדש בו, האָטוֹן מעליו ורַא בתוכו – לפני שׁוּ, לצד ידו. נוסח אחר: | — | — | — |
| 48 | ḥꜣ =f r-gs ḏr,t =f jri̯.w mnd.du =s m-ḥr,j-jb mn(,t).du =st jꜣb.(t)j jri̯.w gs =sn m zẖꜣ,pl m-ḥr,j-jb tꜣ mn,t | מאחוריו, לצד ידו. ייעשו עטיניה בתוך זוג ירכיה השמאלי?; ייעשה חֶצְיָם כציור בתוך הירך. | — | — | — |
| 49 | m-ḏd rw,tj jw =j jm =j nn ḏi̯ =j jri̯ sn m shꜣi̯.t n,tj ẖr pꜣ wjꜣ n,tj ḫft-ḥr m-ḏd n wrd =k | לאמור, בחוץ: אני (הוא) אני, ולא אתן להם לעשות (מרד) – *בכתב יורד*?. מה שתחת הצִי אשר מלפנים: לאמור: לא תיעף, | `וַיֹּאמֶר אֱלֹהִים אֶל מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה` (שמות ג:יד) | equivalent | "אני (הוא) אני": האל המגדיר את עצמו בעצמו; הורנונג (בעקבות פכט) מציין את ההקבלה; במצרית אין פועל "להיות" ולא "אשר" – רק "אני – בתור אני" (*jw=j jm=j*), כתובת מחוץ לציור |
| 49 | m-ḏd rw,tj jw =j jm =j nn ḏi̯ =j jri̯ sn m shꜣi̯.t n,tj ẖr pꜣ wjꜣ n,tj ḫft-ḥr m-ḏd n wrd =k | לאמור, בחוץ: אני (הוא) אני, ולא אתן להם לעשות (מרד) – *בכתב יורד*?. מה שתחת הצִי אשר מלפנים: לאמור: לא תיעף, | `לֹא יִיעַף וְלֹא יִיגָע` (ישעיהו מ:כח) | divergence | "לא תיעף" כאן היא ברכה (או ציווי) לשׁוּ הנושא את השמים, כנגד עייפותו של רא (עמודה 27). |
| 50 | zꜣ =j sn m shꜣj m-ḏd ḫr,t =k mj ꜥnḫ ⟨ḏ,t⟩ m-ḏd jm zꜣ =k jm =j ꜥnḫ-(w)ḏꜣ-s(nb) r fnḏ =k pwy | בני – (הם) *בכתב יורד*?; לאמור: מצבך כחי לעד; לאמור שם: בנך – אני; חיים, שלום, בריאות לאפך זה. | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | החיים הניתנים "לאף"; במצרית זו ברכה קבועה (האלים מושיטים את סימן החיים, ה־*ꜥnḫ*, אל אפו של המלך). |
| 51 | n,tj ḥꜣ Šw r-gs gꜣb =f m-ḏd zꜣw sn n,tj ḥꜣ =f r ḏr,ww =f m shꜣi̯.t | מה שמאחורי שׁוּ, לצד אצילו: לאמור: שמור אותם! מה שמאחוריו, אצל ירכתיו?, *בכתב יורד*?: | — | — | — |
| 52 | m-ḏd ⟨mꜣꜥ⟩ ꜥq =sn jw =j ḥmi̯ =⟨j⟩ rꜥ-nb n,tj ẖr gꜣb n pꜣ tw⟨t⟩ n,tj ẖr mn,t jꜣb,j(.t) | לאמור: כהלכה? נכנסים הם כשאני סר, יום יום. מה שתחת אציל הדמות אשר תחת הירך השמאלית | — | — | — |
| 53 | m-ḥꜣ{,t} =st m-ḏd ḫtm (j)ḫ,t.pl nb(.wt) n,tj ḥr ḏꜣḏꜣ =f ẖr pḥ,wj n tꜣ jd,t n,tj m mn,t.j.du =st m-ḏd | – מאחוריה: לאמור: חתומים כל הדברים. מה שעל ראשו, תחת אחורי העגלה, אשר על ירכיה: לאמור: | — | cognate | `חוֹתָם` – המלה המצרית *ḫtm* היא מקור המלה העברית (renderings §4.2; ראו בראשית לח:יח). |
| 54 | jr(,j) pr.t =f n,tj ḥꜣ tw⟨t⟩.⟨w⟩j n,tj m mn,t.du =sj ḥr ḏꜣḏꜣ.pl =sn jꜣ(w) {ꜣ}⟨m⟩ j~gr,t{nꜣ}? jw | השייך ליציאתו. מה שמאחורי שתי הדמויות אשר על ירכיה, על ראשיהן: הזקן בַּשּׁוֹתֶקֶת. ו | `לֹא הַמֵּתִים יְהַלְלוּ-יָהּ וְלֹא כָּל-יֹרְדֵי דוּמָה` (תהלים קטו:יז) | equivalent | ממלכת המתים כ"ארץ השתיקה" (`דוּמָה`); אבל כאן נשמע בה דווקא הלל (העמודה הבאה). |
| 55 | ḏi̯ =tw jꜣ,wt gr,t ꜥq{.tw} =f n,tj ḥr ḏꜣḏꜣ n pꜣ twt.⟨w⟩j n,tj r-jm,jw ḫpš.du =sj ⟨Dwꜣ-⟩m{t},t⟨≡f⟩ Jdm wꜣs-ḥrw(,t) | נותנים הלל כשהוא נכנס. מה שעל ראש שתי הדמויות אשר בין שוקיה: דּוּאָמוּתֶף, אָתוּם, וָאס־הַמָּרוֹם. | — | — | — |
| 56 | ḏd.jn ḥm n nṯr pn n Ḏḥw,tj njs m~ꜥ n =j r ḥm n Gb r-ḏd mj sjn ḥr-ꜥ,wj jwi̯.jn r =f ḥm n Gb ḏd.jn ḥm n nṯr pn ꜥḥ{tjw}⟨ꜣ⟩ tw | אז אמר הוד מלכות האל הזה אל תְּחוּת: קרא נא לי את הוד מלכות גֶּבּ, לאמור: בוא, רוץ מיד! אז בא הוד מלכות גֶּבּ. אז אמר הוד מלכות האל הזה: הִזָּהֵר | — | — | — |
| 57 | ḥr ḥf(ꜣ),wt.pl =k jm.t.pl =k m =k snḏ.n =sn n =j m wn =j ⟨jm⟩ jw gr,t rḫ.n =k ꜣḫ,pl =sn jri̯ r =k gr,t šꜣs r bw n,tj jt =j Nwn ⟨jm⟩ ḏd =k n =f zꜣw | מפני נחשיך אשר בך! הנה, חששו הם מפניי בהיותי שם; וגם ידעת את סגולותיהם. רוץ אפוא אל המקום אשר אבי נוּן שם, ואמור לו: שמור | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | הנחש כיצור בעל ידע וכוח מסוכן, הקשור לארץ ("עפר תאכל"); במצרים הוא שייך לגֶּבּ, אל הארץ, ויש לו "סגולות" (*ꜣḫ.w*). |
| 58 | jm,j.pl-tꜣ-mw ḥnꜥ gr,t jri̯.t zẖꜣ,pl ntk r jꜣ,t nb(.t) n ḥfꜣ,wt.pl =k n,tj jm r-ḏd zꜣu̯.pl tn ḥꜥb (j)ḫ,t.pl nb.(w)t rḫ =sn ⟨n,tt⟩ tw≡j ꜥꜣ | את אשר בארץ ובמים! וגם עשה כתבים, אתה, לכל תל של נחשיך אשר שם, לאמור: הישמרו מלשחק בכל דבר! יודעים הם שאני כאן; | — | — | — |
| 59 | m =k wj wbn =j […] wn =j n =sn m =k gr,t jr gr{t}⟨g⟩ =sn ntf pw wn{k}⟨n⟩.t(j) =f(j) m tꜣ pn n-ḏ,t zꜣw tw gr,t r nw-n ḥkꜣ,yw.pl | הנה, זורח אני […] *ואקשור*? להם. והנה, צֵידָם – הוא אשר יהיה בארץ הזאת לעד. והישמר לך גם מן הקוסמים הָאֵלֶּה, | — | — | — |
| 60 | rḫ.w.pl rʾ.pl =sn m =k ḥkꜣ,w jm ḏs =f m =k jr ꜥm sw m =k ⟨wj⟩ nn ḫpr.n sꜣu̯.t(w)? =j m-ꜥ ꜥꜣ,t ḫpr.n =f | היודעים את לחשיהם. הנה, חֶקָא שם בעצמו; והנה, הבולע אותו – הנה אני! לא נהיה שישמרו עלי? מפני הגדולה אשר נהייתה | — | — | — |
| 61 | m-ḥꜣ,t =j wḏ =j sn n zꜣ =k Ws-jr zꜣw šrr.pl =sn smꜥ~hj jb n sms,w.pl =sn jm ꜣḫ{.pl}? =sn n,tj.w.pl jri̯ =sn m | לפניי. אצווה אותם אל בנך אוֹסִירִיס, השומר את קטניהם, המשכיח לב מבכיריהם שם; יועילו? אשר עושים הם כ | — | — | — |
| 62 | mrr.pl =sn r tꜣ r-ḏr =f m ḥkꜣ.w.pl =sn jm,j.w.pl ẖ,t.pl =sn ḏd.jn ḥm n nṯr pn njs m~{ḏi̯}⟨ꜥ⟩ n =j n Ḏḥw,tj jni̯.jn.tw =f ḥr-ꜥ⟨,wj⟩ ḏd.jn ḥm | אשר יאהבו נגד הארץ כולה, בקסמיהם אשר בבטניהם. אז אמר הוד מלכות האל הזה: קראו נא לי את תְּחוּת! אז הובא מיד. אז אמר הוד מלכות | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | divergence | במצרים הקסם (*ḥkꜣ*) הוא כוח טבעי בבטנם של יצורי העולם, שהאלים מסדירים; בתורה – תועבה. |
| 63 | n nṯr pn n Ḏḥw,tj m =tn ⟨wj⟩ ꜥꜣ m p,t | האל הזה אל תְּחוּת: הנה אני כאן בשמים, | `יוֹשֵׁב בַּשָּׁמַיִם יִשְׂחָק` (תהלים ב:ד) | equivalent | האל ששמיו הם מקומו, אחרי שהסתלק מן הארץ. |
| 64 | m s,t =j ḏr-n,t{j}⟨t⟩ ⟨wj⟩ | במקומי – יען אני | — | — | — |
| 65 | r jri̯.t sšp ꜣḫ,w | עומד לעשות את אור המאיר | — | — | — |
| 66 | m dwꜣ,t ḥnꜥ Jw-n-bꜣ,du{,t} | בַּדּוּאַת ובְאִי־שְׁנֵי־הַבָּאִים; | `יְהוָה מֵמִית וּמְחַיֶּה מוֹרִיד שְׁאוֹל וַיָּעַל` (שמואל א ב:ו) | divergence | האל השולט גם בעולם המתים; אצל רא – כאור שיורד אליו בכל לילה. |
| 67 | zẖꜣ =k jm sjd =k n,t⟨j.w⟩ jm,j.w.pl =sn | תכתוב שם, ותרגיע את אשר בתוכם, | `וְאִישׁ אֶחָד בְּתוֹכָם לָבֻשׁ בַּדִּים וְקֶסֶת הַסֹּפֵר בְּמָתְנָיו` (יחזקאל ט:ב) | equivalent | הסופר האלוהי הכותב את בני האדם (ביחזקאל – לחיים או למוות), כמו תְּחוּת הכותב בעולם התחתון. |
| 68 | jr{r}.y.w =n jri̯.w.pl | אשר נעשו בידינו, העושים | `נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ` (בראשית א:כו) | equivalent | הבורא המדבר על הבריאה בלשון רבים ("נעשה" / "אשר נעשו בידינו"). |
| 69 | sbj,t {jn}⟨m⟩ {jr}⟨ꜣ⟩kr,w | מרד – בתור האֲכֶרוּ, | — | — | — |
| 70 | šms.pl n špt-jb pn | המלווים של זעוף־הלב הזה. | — | — | — |
| 71 | jw =k m s,t =j ⟨m⟩ s,tj jḫ ḏd =tw n =k Ḏḥw,tj s,tj Rꜥ jw =⟨j⟩ gr,t r rḏi̯ hꜣb =k ⸢wr.w.pl⸣ r =k ḫpr {pr}⟨h⟩ꜣbj pw n Ḏḥw,tj jw =j gr | תהיה במקומי, כממלא־מקום; ואז יאמרו לך: תְּחוּת, ממלא־מקומו של רַא. ואתן גם שתשלח את הגדולים ממך. כך נהיה האִיבִּיס של תְּחוּת. ואתן גם | `אַתָּה תִּהְיֶה עַל בֵּיתִי וְעַל פִּיךָ יִשַּׁק כָּל עַמִּי רַק הַכִּסֵּא אֶגְדַּל מִמֶּךָּ` (בראשית מא:מ) | equivalent | המלך הממנה סגן "במקומו", ומבטיח לו כבוד וסמכות; במצרים דווקא, ובשני המקומות בצורה של חצר מלכות |
| 71 | jw =k m s,t =j ⟨m⟩ s,tj jḫ ḏd =tw n =k Ḏḥw,tj s,tj Rꜥ jw =⟨j⟩ gr,t r rḏi̯ hꜣb =k ⸢wr.w.pl⸣ r =k ḫpr {pr}⟨h⟩ꜣbj pw n Ḏḥw,tj jw =j gr | תהיה במקומי, כממלא־מקום; ואז יאמרו לך: תְּחוּת, ממלא־מקומו של רַא. ואתן גם שתשלח את הגדולים ממך. כך נהיה האִיבִּיס של תְּחוּת. ואתן גם | `וַיִּקְרְאוּ לְפָנָיו אַבְרֵךְ` (בראשית מא:מג) | equivalent | הסגן מקבל תואר ש"קוראים לו" ("יאמרו לך: תְּחוּת, ממלא־מקומו של רַא"). |
| 72 | r rḏi̯.t dwn =k ḏr,t =k r-ḫft ḥr n pꜣw,t{ꜣ}⟨tj.w⟩.pl ꜥꜣ.w.pl r =k jw nfr ḫn =j jri̯ =k ḫpr tḫn,j pw n Ḏḥw,tj jw =j gr r rḏi̯.t jnḥ =k | שתושיט את ידך נוכח פני הראשונים, הגדולים ממך; וטוב עניני כשתעשה. כך נהיה התְּחֶנִי של תְּחוּת. ואתן גם שתקיף | — | — | — |
| 73 | p,t.j.du m nfr,pl =k m ḥḏw,t =k ḫpr jꜥḥ pw n Ḏḥw,tj jw =j gr r rḏi̯.t ꜥnꜥn =k ḥꜣ⟨,w⟩-nb(,t),pl ḫpr ꜥnꜥn pw n Ḏḥw,tj ḫpr r =f pw | את שני השמים ביופייך ובזיוך. כך נהיה יָעַח של תְּחוּת. ואתן גם שתדחה את הָחָאוּ־נֶבּוּת. כך נהיה העַנְעַן של תְּחוּת. הוֹ, אשר נהיית | `אֶת הַמָּאוֹר הַגָּדֹל לְמֶמְשֶׁלֶת הַיּוֹם וְאֶת הַמָּאוֹר הַקָּטֹן לְמֶמְשֶׁלֶת הַלַּיְלָה` (בראשית א:טז) | divergence | הירח כמושל הלילה במקום השמש; בבראשית הוא "מאור" שנעשה ואין לו שם, כאן הוא אל, תְּחוּת, ממונה כסגנו של אל השמש |
| 73 | p,t.j.du m nfr,pl =k m ḥḏw,t =k ḫpr jꜥḥ pw n Ḏḥw,tj jw =j gr r rḏi̯.t ꜥnꜥn =k ḥꜣ⟨,w⟩-nb(,t),pl ḫpr ꜥnꜥn pw n Ḏḥw,tj ḫpr r =f pw | את שני השמים ביופייך ובזיוך. כך נהיה יָעַח של תְּחוּת. ואתן גם שתדחה את הָחָאוּ־נֶבּוּת. כך נהיה העַנְעַן של תְּחוּת. הוֹ, אשר נהיית | `עָשָׂה יָרֵחַ לְמוֹעֲדִים` (תהלים קד:יט) | equivalent |  |
| 74 | m ṯꜣ,tj wnn =k gr m s,tj =j ḥr mꜣ.yw.pl tw nb.w.pl wbꜣ jm =k jw jri̯.t.n =⟨j⟩ nb(.t) ={j} ḥr dwꜣ n =k nṯr ḏd s md(w){,t} pn ḥr =f ḏs =f | לוזיר, תהיה גם ממלא־מקומי! פני כל הרואים אותך פקוחות בך, וכל אשר עשיתי מודה לך! יאמר איש את הדבר הזה על עצמו, | `וְנָתוֹן אֹתוֹ עַל כָּל אֶרֶץ מִצְרָיִם` (בראשית מא:מג) | equivalent | הסגן הממונה על הכל (ראו עמודה 71). |
| 75 | sjn m bꜣq mrḥ,t ⟨sḥtp,w⟩ ḥr ꜥ.wj.du =fj m snṯr | משוח בשמן־בָּאק ובמשחה, מחתה על זרועותיו, עם קטורת; | `וַיִּצֹק מִשֶּׁמֶן הַמִּשְׁחָה עַל רֹאשׁ אַהֲרֹן וַיִּמְשַׁח אֹתוֹ לְקַדְּשׁוֹ` (ויקרא ח:יב) | equivalent | משיחה בשמן כחלק מהכנת המשמש בקודש. |
| 76 | ḥꜣ msḏr.du{ḏr,t} =fj ḥsmn bd dp rʾ =f wnḫ,t =f (m) sšr.wj.du | מאחורי אוזניו – מחוטא; בורית בפיו; לבושו – שתי (יריעות) פשתים | `בִּגְדֵי פִשְׁתִּים יִלְבָּשׁוּ` (יחזקאל מד:יז) | equivalent | לבוש הכוהנים בשירותם |
| 76 | ḥꜣ msḏr.du{ḏr,t} =fj ḥsmn bd dp rʾ =f wnḫ,t =f (m) sšr.wj.du | מאחורי אוזניו – מחוטא; בורית בפיו; לבושו – שתי (יריעות) פשתים | `כִּי אִם תְּכַבְּסִי בַּנֶּתֶר וְתַרְבִּי לָךְ בֹּרִית` (ירמיהו ב:כב) | equivalent | הנתרון והבורית כחומרי ניקוי. |
| 77 | m-mꜣw,t wꜥb =f sw m mw mḥw,yw tbi̯.y m tjw.du n,tj | חדשות; יטהר הוא את עצמו במי־השיטפון; נעול בשני סנדלים | `וְרָחַץ בַּמַּיִם אֶת בְּשָׂרוֹ וּלְבֵשָׁם` (ויקרא טז:ד) | equivalent | רחצה ובגדי פשתן לפני עבודת הקודש. |
| 78 | ḥḏ,tj.du zẖꜣ(.w) ={j} mꜣꜥ,t? ḥr ns =f m rʾ~y(,t) ⟨wꜣḏ.t⟩ n.t zẖꜣ(,w) jr wnn jb n Ḏḥw,tj r šdi̯ =st | לבנים; *מַאַת*? כתובה על לשונו בצבע הירוק של הסופר. אם לב תְּחוּת – לקרוא אותה | — | — | — |
| 79 | ḥr Rꜥ wꜥb.ḫr =f m wꜥb{,t} 9 hrw.pl jrr ḥm.w.pl (n) r(m)ṯ.pl | לפני רַא – והרי יטהר בטהרה של תשעה ימים; יעשו משרתי בני האדם | — | — | — |
| 80 | m-mj,tt-jr,j jr šdd(.w) s[t] j[r] ⸢jrr⸣ =f jr,w pn n,tj r mḏꜣ,t | כמו כן. הנה הקורא אותה – אם יעשה את הטקס הזה אשר במגילה | — | — | — |
| 81 | tn jw =f jrr =f ꜥḥꜥ,w =f m-q(ꜣ)b _ [__]⸢j⸣[_].n.t ḥꜣ,w jw jr(,t).du =fj r =f | הזאת – יעשה הוא את משך ימיו בתוך […] יתר, ושתי עיניו לו, | `וְיַעֲשֵׂם כַּצֵּל` (קהלת ו:יב) | equivalent | "לעשות ימים" כביטוי לבילוי החיים, בשתי הלשונות. |
| 82 | ꜥ,t.pl =f nb(.wt) r =f n sni̯ šm,t.pl =f ⸢jw⸣ ḏd.w r =f jn r(m)ṯ.pl jw =f mj | כל איבריו לו; לא תעבורנה? הליכותיו; ויאמרו עליו בני האדם: הוא כ | — | — | — |
| 83 | Rꜥ hrw n msi̯.tw =f n šrj.n (j)ḫ,t.pl =f n sꜣt.n ꜥrr,yt =f | רַא ביום היוולדו; לא יפחתו דבריו, לא ייפגם שערו. | — | — | — |
| 84 | šs-mꜣꜥ ḥḥ n sp s⸢ḫni̯(.w)⸣ ⸢Nw⸣n jn wr ḏs =f ḏd =f n nṯr.pl pri̯.yw.pl m jꜣb,tt (n.t) p,t jmm.pl jꜣ,w.pl n nṯr sms,w ḫpr.n =j | בדוק באמת, אלפי אלפים פעמים. חובק נוּן בידי הגדול בעצמו; אומר הוא אל הָאֵלִים היוצאים ממזרח השמים: תנו הלל לאל הבכיר אשר נהייתי | — | — | — |
| 85 | jm =f jnk jri̯ p,t smn [sj] [r] [rḏi̯.t] [bꜣ.pl] [nṯr.pl] [jm] =[st] jw =j ḥnꜥ =sn ⟨r⟩ (n)ḥḥ msi̯.n rnp,t[.pl] ḥ[kꜣ] pw bꜣ =j wr sw r =s bꜣ pw n Šw H̱nm,w bꜣ pw | ממנו! אני העושה את השמים, המעמיד [אותם לשים את הבָּאִים של הָאֵלִים בהם]; ואני עמם עד הנצח, אשר ילדו השנים. הקֶ[סֶם] הוא הבָּא שלי, וגדול הוא ממנה. הבָּא של שׁוּ – חְנוּם?; הבָּא | `זֶה שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר` (שמות ג:טו) | equivalent | האל המתאר את עצמו ואת נצחיותו ("ואני עמם עד הנצח"). |
| 86 | n (n)ḥḥ Ḥwj,t bꜣ [pw] ⸢n⸣ ⸢kk,w⸣ Grḥ bꜣ pw n Nwn Rꜥ bꜣ pw n Ws-jr bꜣ Ḏd,tj bꜣ.pl pw n Sbjk{.pl} msḥ.w.pl jw bꜣ | של הנצח – הגשם; הבָּא [הוא] של החושך – גֶּרֶח; הבָּא של נוּן – רַא?; הבָּא של אוֹסִירִיס – בָּא־גֶּ׳דֶת; הבָּאִים של סוֹבֶּךְ – התמסחים; והבָּא | — | — | — |
| 87 | n nṯr nb m ḥfꜣ,w.pl jw bꜣ n ꜥꜣpp m bꜣẖ,pl jw bꜣ n Rꜥ ḫt tꜣ r-ḏr =f ḏd.⸢ḫ⸣[r] s jrr =f mꜥ~k,t =f m ḥkꜣ,w jnk ḥkꜣ,w pwy | של כל אל – בנחשים; והבָּא של אַפּוֹפִּיס – ב*לובן העין*?; והבָּא של רַא – בכל הארץ כולה. והרי יאמר איש, כשהוא עושה את נצירתו בקסמים: אני חֶקָא זה, | `וַיַּעַשׂ מֹשֶׁה נְחַשׁ נְחֹשֶׁת וַיְשִׂמֵהוּ עַל הַנֵּס` (במדבר כא:ט) | divergence | הנחש כנשא של כוח אלוהי מרפא או מגן; במצרים "הבָּא של כל אל בנחשים", ובתורה – אמצעי שחזקיהו ישבור (מלכים ב יח:ד) |
| 87 | n nṯr nb m ḥfꜣ,w.pl jw bꜣ n ꜥꜣpp m bꜣẖ,pl jw bꜣ n Rꜥ ḫt tꜣ r-ḏr =f ḏd.⸢ḫ⸣[r] s jrr =f mꜥ~k,t =f m ḥkꜣ,w jnk ḥkꜣ,w pwy | של כל אל – בנחשים; והבָּא של אַפּוֹפִּיס – ב*לובן העין*?; והבָּא של רַא – בכל הארץ כולה. והרי יאמר איש, כשהוא עושה את נצירתו בקסמים: אני חֶקָא זה, | `לִוְיָתָן נָחָשׁ בָּרִחַ` (ישעיהו כז:א) | divergence | הנחש הקוסמי, אויב האל: אַפּוֹפִּיס. |
| 88 | wꜥb jm,j rʾ ={j} ẖ,t ={j} (n) Rꜥ nṯr.pl ḥrj.tjwnj r =j jnk Rꜥ ꜣḫ,w ḏd =k swꜣi̯ =k m mšr,w m ꜥnḏ,w ḥr ḥr =k ḫr =k ḫft,j{.pl}-n-Rꜥ | הטהור, אשר בפיו ובבטנו של רַא. הָאֵלִים – רחוקים אתם ממני! אני רַא, המאיר. תאמר: (כש)תחלוף בערב, בזוהר – על פניך תיפול, אויב־רַא! | `וְאֵיבָה אָשִׁית בֵּינְךָ וּבֵין הָאִשָּׁה` (בראשית ג:טו) | equivalent | אויב בדמות נחש, שסופו להיות מוכה ("על פניך תיפול"); כאן האויב הוא אויבו של אל השמש. |
| 89 | jnk bꜣ =f ḥkꜣ,w j nb-(n)ḥḥ qmꜣ ḏ,t skk ⸢rnp⸣,t.pl nṯr.pl h{m}⟨ꜣ⟩ꜣ.w Rꜥ jm =f nb nṯr =f ḥqꜣ {jr}jr{r}-sw mrr tw jt.w.pl nṯr.pl | אני הבָּא שלו, חֶקָא. הוֹ אדון הנצח, יוצר העד, המכלה את שנות הָאֵלִים, אשר יורד בו רַא; אדון אֵלוֹ?, השליט, עושהו, אשר אוהבים אותך אבות הָאֵלִים – | — | — | — |
| 90 | ḥkꜣ,w wꜥb ḥr ḏꜣḏꜣ =f jri̯ rpy,t ꜥḥꜥ.tj ḥr t{tjw}⟨ꜣy⟩ =k rsj(,t) jri̯ nṯr[,t] ḥr =s m-ḥr-jb =s ḥfꜣ,w ꜥḥꜥ(.w) ḥr sd =f ḏr,t =s ḥr ẖ,t =f sd =f ḥr tꜣ | חֶקָא טהור־הראש – עשה צורת אשה עומדת מדרום לך; עשה אֵלָה עליה, בתוכה נחש עומד על זנבו, ידה על בטנו, זנבו על הארץ. | `לֹא תַעֲשֶׂה לְךָ פֶסֶל וְכָל תְּמוּנָה` (שמות כ:ג) | divergence | הוראה לעשות צלמית של אלה ונחש כחלק מן הלחש. |
| 91 | dd.w n =f Ḏḥw,tj jꜣ,wt sꜥḥ p,t ḥr =f dd.w{j} n =f Šw ꜥ.wj.du =⟨fj⟩ r =f nḥm.kwj m-ꜥ nṯr.wj.du jpwj ꜥꜣ.wj ḥmsi̯.y.pl ḥr jꜣb,tt n(.t) p,t | אשר נותן לו תְּחוּת הלל, הדר השמים עליו; אשר שם לו שׁוּ את זרועותיו אליו. ניצלתי בידי שני הָאֵלִים הגדולים הָאֵלֶּה היושבים במזרח השמים, | — | — | — |
| 92 | zꜣw.pl p,t zꜣu̯.pl tꜣ rd.w.pl štꜣ,w ḏd.ḫr =sn ꜥꜣ.wj sw pri̯ =f r mꜣꜣ Nwn ḏd-mdw ⟨jn⟩ wꜥb m ꜣbd m […] 1[5].n⟨t⟩ | השומרים את השמים, השומרים את הארץ, *המתמידים בסוד*?; והרי יאמרו: מה גדול הוא! יוצא הוא לחזות בנוּן. דברים לאמר בידי טהור, בחג אַבֶּדוּ, ב[…], בחג ה־[חמישה]־עשר, | — | — | — |
| 93 | [r-]mj,tt jr,pl pn dp,j-ꜥ wnn ḏd rʾ pn ꜥnḫ m ẖr,t-nṯr wr snḏ =f r dp,j.jw-tꜣ jr ḏd =sn pw rn.w.pl =k (n)ḥḥ ḥnꜥ ḏ,t ḏd.ḫr =sn [nṯr] [pw] [m] [mꜣꜥ,t] | [כ]טקס הקדמון הזה. האומר את הלחש הזה – חי בנחלת־האל, גדולה היראה מפניו מיושבי־הארץ. אם יאמרו: מה שמותיך? – נצח ועד. והרי יאמרו: [אל הוא באמת]. | `וְאָמְרוּ לִי מַה שְּׁמוֹ מָה אֹמַר אֲלֵהֶם` (שמות ג:יג) | equivalent | השאלה "מה שמותיך?" והתשובה: שם האל הוא נצחיותו (שמות ג:טו: `זֶה שְּׁמִי לְעֹלָם`) |
| 94 | ḏd.ḫr =sn jw pḥ.n =f n ⸢ꜥꜣ⸣ m tꜣ wꜣ,t jw =⟨j⟩ rḫ.kwj ⸢bꜣ⸣ n nṯr pw⸢y⸣ wnn ḥr =f (m) Ḥr(,j)-š≡f{,w} jnk ṯsi̯.w n =f w[ḏꜣ,w] [m] [mšr,w] [jnk] [Rꜥ] | והרי יאמרו: הִשִּׂיגָנוּ כאן, בדרך! – יודע אני את הבָּא של האל הזה, אשר פניו – חֶרְיְשֶׁף. אני (הוא) אשר נקשר לו ק[מע בערב; אני רַא] | — | — | — |
| 95 | m psḏ,t =⟨f⟩ šn,yt =f{.pl≡f} m ḥkꜣ,w [s]w[ꜣi̯] =[j] [wḏꜣ.kwj] [jnk] [n] =[(j]) sḏ⸢,t⸣ ⸢bꜣ⸣ [pw] [(n]) [ḫ.t] [n]n-wn {w}⟨ḫ⟩f⟨t⟩,y.w.pl [m] _ […] nfr,pl […] Ḥḥ.pl n,tj.w (ḥr) (qꜣb,t) […] Ḥḥ.pl n⟨,tj.w⟩ (ḥr) (sꜣ) […] Dwꜣ-mtt⟨≡f⟩ […] Jdm […] wꜣs-ḥr,t […] zꜣ =j ḥnꜥ =⟨j⟩ […] n wrd =k […] n wrd ḥꜥ,pl =j […] Šw […] ḫr,t =k mj ⟨ꜥnḫ⟩ ḏ,t […] jw ꜥnḫ-(w)ḏꜣ-s(nb) r fnḏ =k pw zꜣ =k jm =⟨j⟩ […] jr(,j) pr,t =f ḫtm(.w) (m-)ḫt pr(i̯)? […] gꜣ(.w)? pr{r}.t jm gr,t ꜥq.t =f j? hꜣ? j? jw ḏi̯ =t(w) jꜣ,w […] jw =⟨j⟩ rḫ.⟨k⟩wj rn n nṯr.wj.du jpn [Ḏ,t] pw [(N]ḥḥ) pw […] Ws-jr nsw Mn-mꜣꜥ,t-Rꜥ mꜣꜥ-ḫrw ḫr Ws-jr […] Ws-jr Mn-mꜣꜥ,t-Rꜥ mꜣꜥ-ḫrw […] ⸢zꜣ-Rꜥ⸣ [Stẖ,y-mri̯-n-Ptḥ] | בתשיעייה שלו, אשר חצרו – קוסמים. [אחלוף כשאני שלם; שלי] השלהבת, הבָּא [של האש הוא]. אין אויבים [ב…] […] היופי […] אֵלֵי־חֶח אשר על חזה […] אֵלֵי־חֶח אשר על גבה […] דּוּאָמוּתֶף […] אָתוּם […] וָאס־הַמָּרוֹם […] בני עמי […] לא תיעף […] לא יעף גופי […] שׁוּ […] מצבך כחי לעד […] וחיים, שלום, בריאות לאפך זה; בנך – אני […] השייך ליציאתו – חתום אחרי היציאה? […] *מושרת*? היציאה משם, וגם הכנסתו – הוֹ! הוֹי! הוֹ! – ונותנים הלל […] יודע אני את שם שני הָאֵלִים הָאֵלֶּה: [עַד] הוא, [נֶצַח] הוא […] אוֹסִירִיס המלך מֶן־מַאַת־רַא, אֲמִתִּי־הַקּוֹל לפני אוֹסִירִיס […] אוֹסִירִיס מֶן־מַאַת־רַא, אֲמִתִּי־הַקּוֹל […] בֶּן־רַא [סֵתִי מְרִי־אֶן־פְּתָח]. | — | — | — |

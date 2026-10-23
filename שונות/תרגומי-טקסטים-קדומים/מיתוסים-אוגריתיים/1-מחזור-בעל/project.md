# Project: the Baal Cycle (KTU 1.1–1.6)

Round 4, run 1 (`../../curated-translation-candidates.md`, "Round 4 plan"). Coordinator: the run's session (a child
session of the Round 4 orchestrator); translators as sub-agents, **one at a time** (guidelines §5.1), each with
`../translator-brief--ugaritic.md`.

## Scope

The six tablets of the Baal Cycle as CUC (KTU³) gives them, 1,372 lines: KTU 1.1 (cols. II–V; 118 lines), 1.2 (I–IV;
132), 1.3 (I–VI; 258), 1.4 (I–VIII; 447), 1.5 (I–VI; 172), 1.6 (I–VI; 245, with Ilimilku's colophon). Every line is
translated, wholly broken lines included (`> […]`). KTU 1.8 (a duplicate fragment, now joined to 1.3 in KTU³) and
1.9–1.13 are not in CUC.

## Base text and versions

- **Base text:** the Copenhagen Ugaritic Corpus v0.2.8 (`../../sources/CUC/`, CC BY-NC 4.0, git-ignored): KTU³'s
  readings, with its marks; `python3 -I -B ../ugarit_tools.py data <KEY>`.
- **Parses:** CUC's machine parses (DULAT lemmas and glosses), human-reviewed for 1.3 and 1.5 I–II: a first pass only.
- **Dictionary:** DULAT³ through CUC's lexicon (`../ugarit_tools.py dulat`); DULAT itself is paid (not used).
- **Rank 3:** the modern translations (Smith & Pitard; Pardee, *COS* I; Wyatt; Smith in *UNP*) are © and not online:
  the translators check against what they know of them, without quoting (brief §3). **Rank 5–6:** Cassuto 1951
  (`../../sources/Ben-Yehuda--Cassuto-1951--HaEla-Anat/`), Hebrew, KTU 1.3 and parts of others.
- **EUPT** (Göttingen) has not published the Baal Cycle (checked 2026-10-23).

## Line numbering

KTU's (= CUC's): `### <column>:<line>` (`### III:38`). The modern translations use the same numbering.

## Files

- `annotated-<KEY>.rtl.md` (KEY = 1.1 … 1.6): the working translation (guidelines §7.2); one per tablet.
- `translation--intro-<KEY>.rtl.md`: the translator's title and introduction; `translation--head.rtl.md`: the head of
  the whole cycle (coordinator).
- `translation-<KEY>.rtl.md` and `translation.rtl.md`: **generated** by `python3 -I -B ../ugarit_tools.py build`.
- Below: one section per tablet, appended by its translator (format: `../translator-brief--ugaritic.md` §7).

## Decisions (coordinator, before the first line)

- The corpus renderings (`../renderings.md`) bind: names, the transliteration convention, the grammar mapping, the key
  terms, the reserved words, the formulas (§6) and the fixed Gen 1:21 lines (§7).
- **Order of drafting:** KTU 1.3 first (the best preserved tablet, with a human-reviewed parse; it holds Anat's boast of
  the *tnn* and most of the cycle's formulas, so its translator fixes them for the others); then 1.4 (the palace and the
  window), 1.5 and 1.6 (Mot; Litan; the Šapšu hymn with the *tnn*), and last 1.1 and 1.2 (the most damaged, where the
  restorations lean on the parallels the earlier tablets fix). One translator at a time; each sees the Hebrew of the
  earlier tablets through `pars` / `data`.

## Progress log (coordinator)

- 2026-10-23: base text secured (CUC v0.2.8); `../../tools/cuc2md.py` and `../ugarit_tools.py` written; renderings,
  gates (selftest 45 lines, 0 failures) and the translator brief fixed before the first line.

## KTU 1.3

Translator 1 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.3.rtl.md`, `translation--intro-1.3.rtl.md`,
generated `translation-1.3.rtl.md` (and `translation.rtl.md`).

### Scope

All 258 CUC lines of KTU 1.3 (I:1–28, II:1–41, III:1–47, IV:1–55, V:1–51, VI:1–36; VI now includes the joined KTU
1.8), every line translated, broken ones as `[…]`. Roughly half the tablet is lost (tops and bottoms of the columns;
V:44–51 only scraps). Content: Baal's feast on Ṣapon (I); Anat's massacre, her battle-banquet in her house and her
washing in dew and "oil of the earth" (II–III:3); a song of Baal's love and Baal's message of peace and of "the word of
tree and whisper of stone" (III:4–31); Anat's bodily fear and her boast of the slain monsters (III:32–IV:4); the
message repeated and Anat's answer (IV:5–36); Anat at Baal's house, the complaint "no house for Baal like the gods"
(IV:37–55); Anat's threats, her journey to El at the source of the two rivers, El hiding in seven rooms, his answer,
Anat's speech (V); the gift for Athirat and Qudšu-Amrur sent to Kothar in Kaphtor / Ḥikuptah (VI).

### Sources consulted

- CUC v0.2.8 (KTU³ readings; machine parses and the human-reviewed parse for 1.3), through `../ugarit_tools.py data`,
  `pars`, `dulat` (DULAT headwords and short senses for every doubtful word).
- Cassuto 1951 (*האלה ענת*, public domain; his "לוח אב"ה" = V AB), compressed to a line-by-line table in the scratchpad
  and quoted briefly in 159 entries (after my own drafting). He lacks VI:1–12 (the 1.8 join) and reads several lines
  with superseded readings (*ištbmnh*, *ʿẓm ri dn*, *ksl* etc.).
- The modern translations (Smith & Pitard, Pardee, Wyatt, Smith in UNP) only from memory, never quoted; where I was not
  sure of a scholar's wording I wrote "רוב המתרגמים" or gave the alternative without a name.
- Every Bible verse printed with `../../tools/check_bible_quotes.py --show` before quoting (≈150 verses).

### Decisions

- **The boast III:38–46 is affirmative**, not a rhetorical question: *l* before *mḫšt*, *klt*, *ištbm* (III:38–40) is
  *l* (III) "indeed" (CUC reviewed parse; DULAT), rendered `אָכֵן`, and III:41–46 (no *l*) are plain statements. `הֲלֹא
  …?` adds a negation and a question that are not on the tablet and manufactures the form of Isa 51:9 (`הֲלוֹא אַתְּ
  הִיא הַמַּחְצֶבֶת רַהַב`) – which is now a [divergence] note instead. `אָכֵן` (not `הֵן`), because §3 gives `הֵן` to *hl*
  / *hln* (used here: II:5, 17) and `אָכֵן` to the asseverative *l*. III:40 is therefore marked `[סטייה מן הקבוע]`.
- **III:40 *ištmdh* = `*צְמַדְתִּיו*`** (italic), not `*שָׁבַרְתִּיו*`: `שָׁבַר` is the cognate of *ṯbr* (III:33 *tṯbr*
  `נשבר`) and must stay with it; KTU³'s *ištmdh* is not *ṯbr*; DULAT lists *ṣmd* "to harness, yoke" (Hutton's
  derivation), which fits the muzzling. My III:40: `אכן חסמתי את התנין, *צמדתיו*;`.
- **Formulas kept as pre-set:** §6.1 (split III:35–36), §6.2 (IV:37; V:5 mid-line), §6.5, §6.6 (all epithets that occur:
  *aliyn bʿl*, *aliy qrdm*, *rkb ʿrpt*, *zbl bʿl arṣ*, *btlt ʿnt*, *ybmt limm*, *rbt aṯrt ym*, *qnyt ilm*, *ṯr il abh/aby*,
  *mlk ab šnm*, *nrt ilm špš*, *bn ilm mt*, *ḥyn d ḥrš ydm*, *mdd il ym*), the first half of §6.7 (`אֶל אֵל, אֶל נִבְכֵי
  שְׁנֵי הַנְּהָרוֹת, בְּקֶרֶב אֲפִיקֵי שְׁתֵּי הַתְּהוֹמוֹת`), §6.8, §6.12's first line.
- **Formulas revised (see Proposals):** §6.11 `בְּחֶרֶב מְלוּחָה – נֵתַח מְרִיא`; §6.4 `אִמְרוּ אֶל X, שְׁנוּ אֶל Y:`;
  §6.3 command forms; §6.7 second half and §6.12's list fixed.
- **One Hebrew per lemma, new on this tablet:** see verbs of seeing *phy* `רָאָה`, *ʿn* `הִבִּיט`, *ḥdy* `חָזָה` [cognate
  of Aram. חזא], *ʾmr* Gt `הִתְבּוֹנֵן` (false friend of `אָמַר`); fighting *mḫṣ*/*mḫš* G `מָחַץ`, *mḫṣ* Gt `נִלְחַם`,
  *tmtḫṣ* (n.) `קְרָב`, *ḫṣb* Gt `חָצַב` [cognate, Isa 51:9], *tḫtṣb* (n.) `חֲצִיבָה`, *ṣmt* `הִצְמִית`, *kly* `כִּלָּה`;
  haste *ḥš* `חוּשׁ`, *ʿṣ* `אוּץ`, *ʿbṣ* `חָפַז`, *lsm* `רוּץ`, *wḥy* Gt `דָּהַר`; particles *hln* `הֵן`, *hlm* `אֲזַי`, *dm*
  `הֲרֵי`, *al* (II) + prefix form `נָא`, *l* (IV) and *y* (vocative) `הוֹ`, *km* `כְּמוֹ`; *ank* `אָנֹכִי` / *an* `אֲנִי`;
  cups *ks* `כּוֹס`, *krpn* `גָּבִיעַ`, *bk* `סֵפֶל`, *ridn* `*קֻבַּעַת*`, *qš* `קַשְׂוָה` [cognate, Ex 25:29], *ṣʿ* `קְעָרָה`;
  *ḫmr* `חֶמֶר` [cognate]; *msk* `מָסַךְ` / `מִמְסָךְ` [cognate]; *ṯʿr* `עָרַךְ`; *ʿšr* D `הִזְמִין`; *sʾd* `מְכַלְכֵּל`
  (the cognate of `סָעַד`, which §6.11 gives to *lḥm*; flagged in the note); *lḥm* Š `הִסְעִיד`; *št* "put" `שִׁית`
  [cognate]; *qry* G "meet" `קָרָה` (Deut 25:18), "present, place" `הִקְרָה` (Gen 27:20); *gly* `נִגְלָה`; *bġy* "reveal"
  `חִוָּה` (Ps 19:3); *tant* `שִׂיחָה` (cognate `תַּאֲנִיָּה` means "mourning": note only); *hmlt* `הֲמֻלָּה` [cognate];
  *ʾtw* `בּוֹאִי` (shares `בָּא` with *bʾ* – no usable Hebrew form of `אָתָה`); *ṯb* `שׁוּב`; *ʾnš* `אָנַשׁ` / `אֲנוּשָׁה`
  [cognate, 2 Sam 12:15]; *ksl* `כֶּסֶל`, *bmt* `גַּב`, *ẓr* `גֵּו`, *irt* `חֵיק`, *ṯd* (of meat) `חָזֶה`, *pnt*
  `חֻלְיוֹת`, *išd* `שׁוֹק`, *pʿn* `רֶגֶל`; *kbd* `כָּבֵד` both "liver" and "interior" (`לִכְבֵד הָאָרֶץ`, kept literal);
  *mmʿ* `*מֵעַיִם*` (italic); *ḏmr* `נוֹטְרִים`; *mhr* `מָהִיר`; *ṣbu* `צָבָא`; *ġrm* `עֲרֵמָה` [cognate]; *kdrt* `כַּדּוּר`
  [cognate]; *irby* `אַרְבֶּה`; *qṣm* `חָגָב`; *kpr* `כֹּפֶר` (henna, Song 1:14; vocalized `כּוֹפֶר`); *anhbm* `*צְדָפִים*`;
  *npp* Gt `הִזָּה עַל עַצְמָהּ` [cognate `נוּף`, Prov 7:17]; *ẓu* `*צוֹאָה*`; *ḥsp* `חָשַׂף` [cognate, Isa 30:14]; *dd*
  `דּוֹד`, *ddym* `דּוֹדִים`, *yd* `יְדִידוּת`, *ahbt* `אַהֲבָה`; *arbdd* `שַׁלְוָה` (DULAT "rest"); *tšyt* `תּוּשִׁיָּה`
  [cognate], *tliyt* `נִצָּחוֹן`; *rimt* `נֵבֶל`; *mṯb* `מוֹשָׁב`, *ṯbt* `שֶׁבֶת` (`שִׁבְתּוֹ`, licensed by the gate),
  *mẓll* `מַחֲסֶה` (= Gilgameš's *ṣulūlu* `מחסה`: the same root); *ḏd* `מְעָרָה`, *qrš* `לִשְׁכָּה` (cognate `קֶרֶשׁ`,
  Ex 26:15, in the note), *ḥdr* `חֶדֶר`, *sgrt* `מִסְגָּרוֹת`; *mgn* `מַתָּנָה` (cognate `מִגֵּן`, Gen 14:20), *mġẓ* `שַׁי`;
  *ġlmt* (II) `עֲלָטָה`, *ẓlmt* `צַלְמָוֶת` [cognate]; *iht* `אִיִּים`, *np* `נוֹף` [cognates], *gbl* `רֶכֶס` (or Byblos
  `גְּבַל`), *qʿl* `שִׂיא`; *mšr* Š `הִסִּיעַ`; *dgy* `דַּיָּג`; *alp* "head of cattle" `פַּר` (`אֶלֶף` would read "a
  thousand"; `שׁוֹר` is *ṯr*'s); *ṭrd* `הִדִּיחַ`; *nṣṣ* Š `הִפְרִיחַ`; *udn* (II) `*מַעֲמָד*`; *ybnt* `יַלְדָּה`; *tdrq*
  `פְּסִיעָה`; *kmn* `חֶלְקָה`; *tr* `תּוּר` [cognate, Num 13:2]; *bš* `בּוֹשֵׁשׁ` [cognate, Ex 32:1]; *mṯn* `מִשְׁנֶה`.
- **Names:** Radmanu `רַדְמָן` (I:2), Yʿbdr `יַעְבְּדַר`, Ughar `*אוּעְר*` (IV:34; not `אוּגָר`, the messenger), Inbubu
  `אִנְבָּב`, Arš `אַרְשׁ`, ʿAtik `עַתְק` (not `עַתִּיק`: Dan 7:9's `עַתִּיק יוֹמִין`), Išat `אֵשׁ`, Ḏabibu `זְבוּב` (DULAT
  "flies"; Cassuto "flame", Job 18:5, in the note), Qudšu-Amrur `קוֹדֶשׁ־אַמְרַר` (here without *w*), Ḥayyin `חַיִּן` (here
  spelled *hyn*), Ḥikuptah `חִכְּפַּת`, Kaphtor `כַּפְתּוֹר`.
- **Readings chosen where the field divides (each noted with the alternative):** II:3 *klat* verb "were shut" (CUC
  reviewed) vs "both (gates)"; II:23 *tʿn* "looked" (*ʿn*), not "answered" (Cassuto) – parallel *tḥdy*; II:24 *tḥdy*
  "saw" vs "rejoiced"; III:18 three verbs of haste (Smith & Pitard) vs "withhold your wood, your mace" (DULAT nouns,
  Cassuto); III:26 *abn* "stone (of lightning)" vs "I understand"; V:3 *l* negation (Cassuto: precative); V:18 *la*
  "power" (DULAT) vs "the heavens are weak"; VI:7 *ġlmt* "darkness" (DULAT II), not "damsel" (CUC reviewed).

### Open decisions for the user

- The affirmative boast (`אָכֵן מָחַצְתִּי …`) against the pre-set rhetorical question (`הֲלֹא …?`), and *ištmdh*
  `*צְמַדְתִּיו*` against `*שָׁבַרְתִּיו*` (III:40, a fixed line): the coordinator should confirm and change §7 and the
  selftest line of §9, or overrule.
- *sʾd* (I:3) is the true cognate of `סָעַד`, which §6.11 gives to *lḥm* by sense; I kept §6.11 and rendered *sʾd*
  `מְכַלְכֵּל`. Alternative: *sʾd* `סָעַד` (Gen 18:5, Judg 19:5, Ps 104:15) and *lḥm* another verb – a change to §6.11
  before 1.4–1.6 and 1.114 are drafted.
- *ġlm* plural `עֲלָמִים` is blocked by the `עוֹלָם` gate (see Problems): license it by *ġlm*, or choose another plural.

### Progress log

- Drafted in CUC order I → VI, saved and checked after each column (`fill`, `verify 1.3`, `check_bible_quotes.py`).
- Pass (a) fidelity: re-read every entry against CUC; italics made consistent for *mmʿ* (V:25); ambiguous unvocalized
  words vocalized (`בְּמַטֶּה`, `בְּמֵעֵי`, `מִמְּעֵי`, `אֲנוּשָׁה`); one English word in a note replaced.
- Pass (b) consistency: one Hebrew per lemma checked across the tablet (lists above); repeated passages (the message
  III:13–30 / IV:7–20, the washing II:38–III:2 / IV:42–46, the house list IV:47–53 / V:38–43, the threats V:2 / V:24–25,
  the seven rooms V:11 / V:26) carry the same Hebrew wherever the Ugaritic is the same; the new Hebrew words grepped in
  every corpus (`grep --all`): `מכלכל` (= Akk. *zānin*), `תושייה` (= Akk. *tašīmtu*), `עלטה` (= Akk. *eṭûtu*), `מחסה`
  (= Akk. *ṣulūlu*, the cognate of *mẓll*) are cross-language reuses, no collision within this corpus; Cassuto's
  readings added to column VI.
- Pass (c) Hebrew: the generated `translation-1.3.rtl.md` read through; register kept; no vav-consecutive.
- `check_bible_quotes.py` on the three files: 0 problems. `verify 1.3 --strict`: 258/258 entries, 0 repeated-line
  differences; **4 problems remain, all the same gate** (`עלמים` in II:4, III:8, IV:5, V:15 – see Problems), left
  unbent as the brief requires.

### The text on its own terms

- **A god's banquet as a royal feast** (I:2–20): a servant carves brisket with a "salted" knife, pours wine from
  "a thousand jars, ten thousand mixings", into a cup so big it needs both hands; a sweet-voiced singer with cymbals.
  The holy cup no woman, not even Athirat, may look at (I:13–15): a cultic taboo inside the divine court.
- **Baal's daughters are the weather** (I:23–25, III:6–8, IV:50–52): Pidray "daughter of Light", Ṭallay "daughter of
  Showers", Arṣay "daughter of the Wide Earth": light, dew and fertile ground – what the storm god gives.
- **Anat is beauty and slaughter at once** (II:2–16): she perfumes herself like a bride with henna and coriander, then
  wades knee-deep in blood, heads rolling beneath her like balls, hands flying above her like locusts, a necklace of
  heads and a belt of hands.
- **War as a banquet** (II:20–30): she "arranges" chairs and tables (*ṯʿr*, the verb of setting a feast, I:4) for the
  warriors – and kills her guests; she fights until she is sated (*šbʿ*), as one eats; her liver swells with laughter.
- **Purification by heaven's water** (II:31–III:2): after the battle the blood is wiped away, "oil of peace" poured,
  and she washes in dew of heaven, oil of the earth and the showers of the Cloud-Rider – Isaac's blessing as a goddess's
  bath.
- **Peace sown into the earth** (III:14–17): Baal asks the warrior to bury war in the ground and pour peace "into the
  liver of the earth": the rain god needs an end of war for the land to bear.
- **A language beneath language** (III:20–28): the word of tree and whisper of stone, the talk of heaven with earth and
  of the deeps with the stars, which neither heaven nor humans understand – the thunder of the coming storm, revealed
  only on Baal's mountain.
- **Fear written on the body** (III:32–35): feet tremble, loins break, face sweats, vertebrae contract – the stock
  body-language of bad news, shared with Nahum, Ezekiel, Isaiah and Daniel.
- **The cosmic enemies are listed, not narrated** (III:38–46): Yam, Nahar, the *tnn*, the seven-headed twisting serpent,
  Arš, the calf ʿAtik, the bitch Fire, Ḏabibu – a catalogue of slain chaos, boasted by a goddess.
- **The old father and the wild daughter** (V:1–28): Anat threatens to drag El like a lamb and make his grey beard
  run with blood; El hides behind seven, eight rooms and gives in: "I know you, daughter, that you are fierce". Humour
  and real fear of the young gods' violence.
- **Kingship needs a house** (IV:47–53, V:38–43): Baal and his daughters still live in El's house, "the shelter of his
  sons"; a king without a palace is a son in his father's house.
- **The divine craftsman lives where crafts live** (VI:23–27): Kothar's seats are Kaphtor (Crete) and Ḥikuptah
  (Memphis) – Ugarit's map of skill.

### Key parallels

- III:40–42 ↔ Gen 1:21 `הַתַּנִּינִם הַגְּדֹלִים`, Isa 27:1, Ps 74:13–14, Job 7:12, Ps 91:13: the *tnn* muzzled and the
  seven-headed twisting `פֶּתֶן` slain, against the created and "good" `תַּנִּינִם` of the fifth day; Isaiah keeps the
  adjectives (`בָּרִחַ`, `עֲקַלָּתוֹן`) and swaps the noun (`נָחָשׁ`).
- III:39 *il rbm* ↔ Gen 1:21's `הַגְּדֹלִים`: the sea's epithet is `רַב`, not the Bible's adjective.
- II:39–40 *ṭl šmm šmn arṣ* ↔ Gen 27:28, 39 `מִטַּל הַשָּׁמַיִם וּמִשְׁמַנֵּי הָאָרֶץ`; Deut 32:2 (`טַל` // `רְבִיבִים`).
- III:30 *ġr nḥlty*, *qdš*; VI:26–27 *ksu ṯbth … arṣ nḥlth* ↔ Ex 15:17 `בְּהַר נַחֲלָתְךָ מָכוֹן לְשִׁבְתְּךָ … מִקְּדָשׁ`.
- V:6–7 El "at the source of the two rivers, the channels of the two deeps" ↔ Gen 2:10 [divergence]; Job 38:16
  `נִבְכֵי-יָם`; Ezek 28:2 `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (and V:39 *mṯb il*).
- V:32 *mlkn … ṯpṭn* ↔ Isa 33:22 `שֹׁפְטֵנוּ … מַלְכֵּנוּ`.
- V:2, 24 grey hair made to run with blood ↔ 1 Kgs 2:9 `וְהוֹרַדְתָּ אֶת שֵׂיבָתוֹ בְּדָם שְׁאוֹל`; V:23–24 *mḫṣ … qdqd*
  ↔ Ps 68:22.
- V:36 *d yknnh* with VI:2 *qnyt ilm* ↔ Deut 32:6 `קָּנֶךָ … וַיְכֹנְנֶךָ`; VI:1–2 *mgn … qnyt* ↔ Gen 14:19–20 `קֹנֵה …
  מִגֵּן`.
- III:32–35 ↔ Nah 2:11, Ezek 21:12, Dan 5:6, Isa 21:3 (the body's fear).
- VI:25 *kptr* ↔ Deut 2:23, Amos 9:7; VI:8 *ẓlmt* = `צַלְמָוֶת` (Ps 23:4), "deep darkness", not "shadow of death".

### Lines shared with other tablets

- Copied from renderings §7: III:41, III:42 exactly (= 1.5 I:2–3's noun phrases / 1.5 I:3). III:40 deviates (see above).
- Fixed here for later tablets (Hebrew in the annotated file): the message *tḥm aliyn bʿl … qryy b arṣ mlḥmt … ʿṣ w lḫšt
  abn …* (III:13–31; = 1.1 II–III, 1.3 IV:7–20, 1.5 II:10); *ḥšk ʿṣk ʿbṣk ʿmy pʿnk tlsmn ʿmy twtḥ išdk* (III:18–20 =
  1.1 II:1–2, II:21–22, III:10); *l nḫt l kḥṯ drkth* (IV:3 = 1.6 V:6); *idk l ttn pnm ʿm …* (IV:37); *b alp šd rbt kmn*
  (IV:38, VI:28–29 = 1.4 V:24, VIII:24–25); *ʿm il mbk nhrm qrb apq thmtm / tgl ḏd il w tbu qrš mlk ab šnm* (V:6–8 =
  1.4 IV:21–24, 1.5 VI:1–2, 1.6 I:32–36); the house list (IV:47–53, V:38–43 = 1.4 I:9–19, IV:50–57); *tḥmk il ḥkm …*
  (V:30–31 = 1.4 IV:41–42); *any l yṣḥ ṯr il abh …* (V:35–37 = 1.4 IV:47–49); *nrt ilm špš ṣḥrrt la šmm b yd bn ilm mt*
  (V:17–18 = 1.6 II:24–25, here *nr*); *gpn w ugr bn ġlmt ʿmm ym bn ẓlmt …* (VI:6–9 = 1.4 VII:54–56); *hbr w ql tštḥwy
  w kbd hwt* (VI:30–31 = 1.1 III:3, 1.4 VIII:27–29); *idk al ttn pnm* (VI:23–24 = 1.4 VIII:1, 10).
- Internal differences justified in the entries: IV:13 (scribal *argmt*: no `לך`), IV:15–18 (other order than III:24–27),
  IV:43 (no "showers of the Cloud-Rider"), V:39 (*ḥẓr* without *w*), V:3 (*k ilm* for *km ilm*).

### Proposals for the shared renderings

1. **§7 / §9, 1.3 III:40** → `אָכֵן חָסַמְתִּי אֶת הַתַּנִּין, *צְמַדְתִּיו*;` (reasons above); the boast III:38–46
   affirmative, *l* (III) = `אָכֵן`.
2. **§6.11** → `בְּחֶרֶב מְלוּחָה – נֵתַח מְרִיא`: *ḥrb* is the cognate of `חֶרֶב`, which means "knife" in Biblical Hebrew
   too (Josh 5:2 `חַרְבוֹת צֻרִים`), and it is the same lemma as the blade with which Anat splits Mot (1.6 II 31): one
   lemma, one Hebrew word; `סַכִּין` (late Hebrew) would split it.
3. **§6.4** → `אִמְרוּ אֶל X, שְׁנוּ אֶל Y:` (sg. `אֱמֹר אֶל X, שְׁנֵה אֶל Y:`): (a) `שְׁנוּ` (qal "do again, repeat", 1 Kgs
   18:34 `שְׁנוּ וַיִּשְׁנוּ`) instead of `שַׁנּוּ` (piel = "change"); (b) `אֶל` instead of `לְ־`, so that the article of the
   fixed titles survives (`אֶל הַבְּתוּלָה עֲנָת`, `אֶל יְבֶמֶת הַלְּאֻמִּים`) – with `לְ־` the verifier's own *btlt ʿnt*
   regex fails (`לַבְּתוּלָה`).
4. **§6.3, command forms** (III:9–10 pl., VI:30–31 sg.): `קוֹדוּ וְנִפְלוּ, תִּשְׁתַּחֲווּ, כַּבְּדוּ אוֹתָהּ` / `קוֹד וּנְפוֹל,
   תִּשְׁתַּחֲוֶה וְכַבֵּד אוֹתוֹ` (imperatives where the Ugaritic has imperatives; *tštḥwy* is a prefix form; *hyt* / *hwt*
   "her / him" `אוֹתָהּ` / `אוֹתוֹ`). The verifier's regexes know only the past forms (both lines carry `[סטייה מן הנוסחה]`).
5. **§6.7, second half** → `וְנִגְלָה אֶל מְעָרַת אֵל, וּבָא אֶל לִשְׁכַּת הַמֶּלֶךְ, אֲבִי הַשָּׁנִים` (fem. `נִגְלְתָה …
   וּבָאָה`): *gly* `נִגְלָה` kept; *ḏd* = DULAT "grotto" `מְעָרָה` (`אֹהֶל` belongs to the cognate *ahl*); *qrš* = DULAT
   "private room" `לִשְׁכָּה` (`חֶדֶר` belongs to *ḥdr*, V:11, Isa 26:20), cognate `קֶרֶשׁ` (Ex 26:15) in the note.
6. **§6.12, the list** → `מוֹשַׁב אֵל, מַחֲסֵה בָּנָיו; מוֹשַׁב הַגְּבִירָה אֲתִירַת־יָם; מוֹשַׁב פִּדְרַי בַּת אוֹר, מַחֲסֵה טַלַּי
   בַּת רְבִיבִים; מוֹשַׁב אַרְצַי בַּת יַעְבְּדַר; מוֹשַׁב הַכַּלּוֹת הָאֲצִילוֹת` (*mṯb* `מוֹשָׁב`, *mẓll* `מַחֲסֶה`, *klt knyt*
   `הַכַּלּוֹת הָאֲצִילוֹת`).
7. **§6.6** confirmed; the daughters' epithets checked against the text: *pdry bt ar* `פִּדְרַי בַּת אוֹר`, *ṭly bt rb*
   `טַלַּי בַּת רְבִיבִים`, *arṣy bt yʿbdr* `אַרְצַי בַּת יַעְבְּדַר`. *rbt aṯrt ym*: the regex rejects the maqaf of
   `אֲתִירַת־יָם` (it allows only space or `-`): either fix the regex (`[ \-־]`, also for `רחב־הלב`, `כותר־וחסיס`) or
   write the title with a space (IV:49 does, for now).
8. **New corpus rows:** *ṯd* (of meat) `חָזֶה`; *sʾd* `מְכַלְכֵּל` (or §6.11 change, above); *lḥm* Š `הִסְעִיד`; *ṯʿr*
   `עָרַךְ`; *msk* `מָסַךְ` / `מִמְסָךְ`; *ḫmr* `חֶמֶר`; the cup words; *št* `שִׁית`; *qry* `קָרָה` / `הִקְרָה`; *gly*
   `נִגְלָה`; *bġy* `חִוָּה`; *ṯb* `שׁוּב`; *ʾnš* `אָנַשׁ`; *ḏmr* `נוֹטְרִים`; *mmʿ* `*מֵעַיִם*`; *ẓlmt* `צַלְמָוֶת`;
   *ġlmt* (II) `עֲלָטָה`; *mṯb* `מוֹשָׁב` vs *ṯbt* `שֶׁבֶת`; *mẓll* `מַחֲסֶה`; *ḥdr* `חֶדֶר`; *sgrt* `מִסְגָּרוֹת`; *mgn* `מַתָּנָה`,
   *mġẓ* `שַׁי`; *kptr* `כַּפְתּוֹר`, *ḥkpt* `חִכְּפַּת`; *ʿn* `הִבִּיט`, *phy* `רָאָה`, *ḥdy* `חָזָה`; *al* (II) `נָא`; *hlm*
   `אֲזַי`; *dm* `הֲרֵי`; *l* (IV) / *y* `הוֹ`; *ank* / *an* `אָנֹכִי` / `אֲנִי`; *ʾtw* `בּוֹאִי` (impv.).
9. **Gate fix (verifier):** license the `עוֹלָם` gate also by *ġlm* (the plural `עֲלָמִים` of `עֶלֶם` is a homograph of the
   defective `עלמים`): RESERVED row `... "עלם", "עלמים") + E, r"ʿlm"` → `r"ʿlm|ġlm"`. Until then `verify 1.3 --strict`
   reports these 4 lines.

### Lessons for the guidelines

- A pre-set formula regex must be tested on the **command** and **mid-line** occurrences as well as the narrative ones
  (§6.2's `^אז`, §6.3's past-only verbs, §6.6's maqaf failed on this tablet); a pre-set formula must also be checked
  against the reserved-word gates of its own corpus (`לַבְּתוּלָה` vs the *btlt ʿnt* regex; `עֲלָמִים` vs `עוֹלָם`).
- In a cognate-rich language, check each pre-set rendering against the **true cognate of another lemma** (`סָעַד` for
  *lḥm* hides *sʾd*; `שָׁבַר` for *ištmdh* takes *ṯbr*'s cognate; `סַכִּין` splits *ḥrb*).

## KTU 1.4

Translator 2 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.4.rtl.md`, `translation--intro-1.4.rtl.md`,
generated `translation-1.4.rtl.md` (and `translation.rtl.md`). **Part 1: columns I–IV (208 lines, I:1–IV:62)**; V:1–VIII:49
follow in part 2 (placeholder `<!-- טרם תורגם: V:1–VIII:49 -->` at the end of the annotated file).

### Scope

Columns I–IV of KTU 1.4 as CUC gives them (I 43, II 48, III 55, IV 62 lines), every line translated, broken ones as
`[…]`. Preservation: I:1–3 lost, I:4–11 mostly restored by KTU³ from the parallels, I:12–43 well preserved; II:1–2 and
II:36–48 scraps; III:1–9 and III:45–55 scraps; IV almost whole. Content: Baal's complaint "no house for Baal like the
gods" and his request to Kothar for a gift for Athirat (I:4–22); Kothar-Ḥayyin at the bellows casting silver and gold
– canopy and bed, a stand, a chair and a footstool, sandals (or a palanquin), a table decorated with creatures "of the
foundations of the earth", a bowl in Amurru work with myriads of wild oxen (I:23–43); Athirat at the sea with her
spindle, laundry and pot; her bodily fear at seeing Baal and Anat, her joy at the gleam of silver and gold, her
fisherman sent with a net "into El's beloved, Yam" (II); Baal's account of the insult in the assembly of the gods
(abomination on his table, "two sacrifices Baal hates, three…"), the gifts to Athirat, the feast (III); the donkey
saddled, the night procession to El, the homage, El's laughter and welcome ("are you hungry … thirsty? … or does the
love of the Bull arouse you?"), Athirat's praise of El's wisdom and Baal's kingship, the house list, and El's mocking
consent: "Am I a slave … is Athirat a maid, that she should mould bricks? Let a house be built for Baal" (IV).

### Sources consulted

- CUC v0.2.8 (KTU³ readings; **machine parses only** – there is no reviewed parse for 1.4: every form parsed anew, and
  every *l*, *k*, *hm*, *d* decided in the פירוק) through `../ugarit_tools.py data`, `pars`, `lex`, `dulat` (DULAT
  headwords for every doubtful word).
- `annotated-1.3.rtl.md` as the format and vocabulary model; every repeated line copied from it (see "Lines shared").
- Cassuto 1951 (`../../sources/Ben-Yehuda--Cassuto-1951--HaEla-Anat/`): he did not translate 1.4 ("אב"ב") as a whole,
  but quotes it in his notes; quoted briefly in 9 entries (II:3, II:14, III:12, III:16, III:20, III:40, IV:4, IV:15,
  IV:44) and cited in the notes on *ṣʿ*, the house list and the donkey formula (1 Kgs 13).
- The modern translations only from memory, never quoted; where I was not sure of a scholar's reading I wrote "רבים",
  "אחרים".
- Every Bible verse printed with `../../tools/check_bible_quotes.py --show` before quoting (≈110 verses).

### Decisions

- **Formulas kept as pre-set / as revised by 1.3** (§10): §6.1 (II:21, IV:30), §6.2 (IV:20), §6.3 fem. past
  (`קדה ונפלה, השתחוותה וכיבדתהו`, IV:25–26), §6.5 (III:27, III:32, IV:1, IV:40, IV:58), §6.6 (*aliyn bʿl*, *rkb ʿrpt*,
  *btlt ʿnt*, *ybmt limm*, *rbt aṯrt ym* – written with a space as in 1.3, *qnyt ilm*, *ṯr il abh*, *lṭpn il d pid*,
  *mdd il ym*, *mlk ab šnm*, *bny bnwt*), §6.7 both halves (IV:21–24; the second half with `אל לשכת`, as §6.7 has it,
  where 1.3 V:8 had dropped `אל`), §6.11 (III:42–44, IV:37–38), §6.12 with 1.3's list (I:9–18, IV:50–57, in this
  tablet's order: the brides before Pidray). One deviation marked: I:21 `מתנה לגבירה` (`לְ־` absorbs the article; 1.3
  VI:1's Hebrew kept) `[סטייה מן הנוסחה]`.
- **The Hebrew of 1.3 copied verbatim** where the Ugaritic is the same (the fear formula II:16–20 = 1.3 III:32–35; the
  house list; `אף מִשְׁנֵה מילים`; El's wisdom IV:41–46 = 1.3 V:30–34, changed only where 1.4 differs: *ḥkmt* `חכמה` for
  *ḥkmk* `חכמתך`, `ואין` for *w in*; the gift `מתנה … שי לקונת האֵלִים`).
- **New one-lemma renderings** (all grepped in every corpus first):
  - the gift verbs: *mgn* D `מִגֵּן` [cognate; Prov 4:9 `תְּמַגְּנֶךָּ`, Hos 11:8, Gen 14:20 – the Hebrew piel with a
    personal object is exactly the Ugaritic idiom] (the noun *mgn* stays `מתנה`, 1.3); *ġẓy* (and *ġzy*, II:11)
    `רִצָּה`; *skn* Š `הִצִּיג`; *mʿ* "please" `אֵפוֹא` (`נָא` is *al* (II)'s);
  - the craft: *mpḫ* `מַפֻּחַ`, *mṣbṭ* `צְבָת`, *yṣq* `יָצַק`, *šlḥ* (II) "smelt" `הִתִּיךְ`, *ḫym* `חֻפָּה`, *tbṯḫ*
    `יָצוּעַ` (`מִטָּה` left for *mṭt*), *kt* (II) `כַּן`, *mrḫ* `מָרַח` [cognate], *bẓr* `בֶּצֶר` [cognate], *prš*
    `פָּרַשׂ` [cognate], *br(r)* `בְּדִיל`, *nʿl* `*נַעַל*` [cognate, italic; DULAT "palanquin" in the note], *qblbl*
    `*שְׂרוֹכִים*`, *ybl* (II) `*מוֹט*`, *msdt* `מוֹסָדוֹת` [cognate], *dbb* (I) `*זוֹחֲלִים*` (italic; `חַיּוֹת`,
    `רֶמֶשׂ`, `בְּהֵמָה` avoided: Gen 1:24), *dqt* `דַּקָּה`, *sknt* `תֹּאַר` (`תַּבְנִית`, `צוּרָה` reserved elsewhere),
    *ḥwt* `גְּבוּל`, *rủm* `רְאֵם` [cognate];
  - Athirat's household: *plk* `פֶּלֶךְ` [cognate], *tʿlt* `*רוממות*`, *npyn* `חָלוּק`, *mks* `מִכְסֶה` [cognate], *md*
    `מַד` [cognate], *mtʿ* `פָּשַׁט`, *ḫptr* `סִיר`, *ḫbrṯ* `קַלַּחַת`, *pḥm* `פֶּחָם` [cognate], *ʿpp* `*עִפְעֵף*`
    [cognate of `עַפְעַפַּיִם`], *ẓl* `צֵל` (*ẓl ksp* = `צֵל הַכָּסֶף`, Eccl 7:12), *nr* `נֵר` (as 1.3 V:17), *rṯt* `רֶשֶׁת`
    [cognate], *rbt* (II) "seine" `מִכְמֹרֶת`, *mkṯr* `*מוּכְשָׁר*`;
  - the complaint: *ṯb* (reply) `הֵשִׁיב` (as 1.3 IV:21), *ʿd(d)* Gt `*הֵעִיד*`, *wpṯ* `רָקַק`, *pglt* `פִּגּוּל`
    [cognate], *qlt* `קָלוֹן` [cognate], *bṯt* `בֹּשֶׁת` [cognate], *dnt* `מָדוֹן` (Cassuto; Prov 17:1 `זִבְחֵי-רִיב`),
    *tdmm* `*הוֹלֵלוּת*`, *tdmmt* `*זִמָּה*`, *nbṭ* `נִשְׁקַף` (`הִבִּיט` is *ʿn*'s), *pq* `הֵפִיק` [cognate, Prov 8:35],
    *mrġṯ* `יוֹנֵק`, *ṯd* (of the mother) `שַׁד` (1.3's `חזה` is *ṯd* of meat);
  - the journey: *mdl* (vb) `חָבַשׁ` [equivalent: the natural Hebrew for saddling a donkey, Gen 22:3, Num 22:21, 1 Kgs
    13:13, 2 Kgs 4:24; the noun *mdl* stays `*רתמה*` of 1.3 IV:26], *ṣmd* `צָמַד` [cognate], *ʿr* `עַיִר` [cognate,
    always vocalized: "city"], *pḥl* `חֲמוֹר`, *atn* `אָתוֹן` [cognate], *gpn* (II) `מוֹסֵרוֹת` (Jer 27:2), *nqbn*
    `מַרְדַּעַת`, *yrq* `יְרַקְרַק` [cognate, Ps 68:14], *ʿdb* `תִּקֵּן` (cognate `עָזַב` in the note), *ḥbq* `חִבֵּק`
    [cognate], *ysmsmt* `*נוֹי*`, *bʿr* Š `הִבְעִיר`, *aṯr* "behind" `מֵאָחוֹר` (*aḫr* `אַחַר`);
  - El's welcome: *prq* `פָּרַק` [cognate], *lṣb* `מֵצַח`, *ṣḥq* `צָחַק` [cognate], *ṯpd* `שָׁפַת`, *krkr* `כִּרְכֵּר`
    [cognate], *ġtr* `*עָתַר*` [cognate], *ʿsy* `*עָיֵף*`?, *ḫss* D `*הִזְכִּיר*` (italic; `זכר` to yield to *ḏkr* if it
    occurs), *ʿr* L `עוֹרֵר` [cognate], *ulṯ* `מַלְבֵּן` (= the temple corpus's *u₃-šub*; Nah 3:14), *lbn* D `לָבַן`,
    *lbnt* `לְבֵנָה` [cognates, Gen 11:3];
  - particles: *k* (II) emphatic `אָמְנָם` (Job 9:2; `אָכֵן` is *l* (III)'s, `כִּי`/`כַּאֲשֶׁר` *k* (III)'s), *hm* (I)
    `הֵם`, *hm* (II) interrogative/alternative `אוֹ`, *im* `אִם`, *mnm* (indefinite) `כל` (in a question `מה`, 1.3).
- **Readings chosen where the field divides** (each with the alternative in the entry): I:31 *nbt* "honey" kept with
  `?`; I:34 *bẓr* one word (DULAT) vs *b ẓr* "on top", *id* left `…`; I:36 sandals (cognate) vs DULAT's palanquin; I:41
  *amr* the land Amurru (DULAT TN) – transliterated, the Bible knows only the people `הָאֱמֹרִי`; I:42 *yman* (Ionia?)
  transliterated `יָמָן`, the possible `יָוָן` (Gen 10:2) in the note; II:6 laundry; II:10–11 Athirat entreating El
  (*ʿpp* "flutter the eyelids"); II:24–25 *hm* "they" (questions without a particle); III:10 *yṯb* = *ṯb* "replied",
  not *yṯb* "sat"; III:12 *ydd* = *ndd* (CUC: "beloved"); III:14 *štt* G-passive 3 f. with *pglt* as subject (`הוּשְׁתָה`,
  avoiding `שתו` "drank"); III:20 *dnt* "strife" (Cassuto, Prov 17:1) against DULAT's "lechery" / "plight"; III:21 *k*
  (III) "for"; III:34 *km* left `כמו?`; IV:27 *k* (III) "when" (CUC: emphatic); IV:41 *ḥkmt* noun (DULAT) vs "you are
  wise"; IV:62 *ybn* G-passive jussive `יִבָּנֶה` (El's consent).

### Open decisions for the user

- I:36 *nʿl il*: "divine sandals" (the cognate `נַעַל`, my choice, italic) or DULAT's "palanquin" (which would want
  `אַפִּרְיוֹן` and import Song 3:9–10's silver-and-gold palanquin – a parallel the tablet may not have).
- IV:4, 9 *mdl* (vb) = `חָבַשׁ`: the Bible's own verb for saddling a donkey (Gen 22:3; Num 22:21) – an [equivalent],
  tagged; the alternative `רִסֵּן` ("bridle", DULAT's gloss) hides the shared motif.
- *hm* (II) `אוֹ` (natural in all five contexts, incl. the imperative "eat or drink") vs `אִם` (the Hebrew of the same
  double question in Gen 37:8 `הֲמָלֹךְ תִּמְלֹךְ … אִם מָשׁוֹל תִּמְשֹׁל`); if *u* "or" appears in a later tablet it will
  need `אוֹ` too – the coordinator should fix one of them.
- *ṯb* G "reply" `הֵשִׁיב` (with 1.3) – a homograph of *yṯb* "sit" at III:10; a later translator meeting *yṯb* should keep
  `יָשַׁב`.

### Progress log

- Drafted in CUC order I → IV, written to the file and checked after each column (`fill`, `verify 1.4`,
  `check_bible_quotes.py`); I: one formula problem (I:21 `לגבירה`, marked as a deviation); II–IV clean.
- Pass (a) fidelity: every entry re-read against CUC; brackets corrected (II:30 `אפיק [ים]`, III:3 `חביב` – root
  mostly preserved); additions put in `( )` (IV:28 `מצח(ו)`); curly braces removed from the Hebrew (IV:24 `{n}`: in this
  folder `{ }` is a recension tag); vocalized words made to strip to the plene spelling (piel `מִיגְּנוּ`, `רִיצּוּ`,
  `מִיגַּנְתֶּם`, `רִיצִּיתֶם`, `וְכִירְכֵּר`, `וכיבדתהו`; `מְמוֹרָח`; `פָּשְׁטָה` vocalized).
- Pass (b) consistency: every repeated passage compared with 1.3 (`pars`, the 1.3 pairs) and inside the tablet (I:4–18 =
  IV:47–57; III:27 = IV:40; the command IV:4–7 and its execution IV:8–12 in the same words and order; the feast III:40–44 /
  IV:35–38); the one-lemma lists above checked across I–IV; new Hebrew words grepped in every corpus (`grep --all`): no
  collision inside the Ugaritic corpus; cross-language reuses `מכמורת` (= Akk. *kamāru*), `רשת` (*šētu*), `מלבן`
  (Sum. *u₃-šub*), `גבול` (Akk. *itû*), `חמור` (*imēru*) are the same concepts.
- Pass (c) Hebrew: the generated `translation-1.4.rtl.md` read through; register kept; no vav-consecutive; quotation
  references normalized to `` `…` (ספר פרק:פסוק) `` (10 had a comma form the checker does not read), Psalms/Job
  hyphens restored.
- `check_bible_quotes.py` on the three files: 0 problems. `verify 1.4`: 208 entries, 0 problems, 0 repeated-line
  differences (`--strict` reports only the placeholder V:1–VIII:49).

### The text on its own terms

- **Kingship needs a palace, and a palace needs the queen mother** (I:4–22, II–IV): Baal does not ask El directly; he
  has Kothar make gifts for Athirat, Athirat goes to El, and El consents – the court politics of a Late Bronze Age
  palace, where the king's wife is the way to the king.
- **The divine craftsman at his forge** (I:23–43): bellows, tongs, silver and gold "by thousands … by myriads", "the
  blood of gold"; the furniture is a map of the luxury trade – work "of Amurru", shaped like "the land of Yaman".
- **A goddess doing housework** (II:3–9): the Lady of the Sea spins, washes her clothes in the sea and the river, sets a
  pot on the coals – greatness and daily chores are not opposites.
- **A mother's fear** (II:12–26): Athirat's body shakes as Anat's did (the same formula, 1.3 III:32–35) – she fears that
  Baal and Anat, the killers of Yam "El's beloved", have come for her sons; the gleam of silver turns fear into joy.
- **Gifts open hearts** (II:26–28, III:23–36): the poem shows the bribe without embarrassment – Athirat "rejoices" at the
  gold, and Anat plans the order of the gifts: the queen first, then the king.
- **A god insulted at table** (III:12–22): spitting in the assembly, an abomination on his table, vileness in his cup;
  the numerical saying of three feasts Baal hates – of shame, of strife, of the maids' lewdness: an ethic of the
  banquet in the divine world.
- **A night procession** (IV:13–19): the servant lifts the goddess onto the donkey, one half of his double name lights
  the way "like a star", the other walks ahead, Anat behind; Baal goes home and does not plead for himself.
- **The old father's tenderness and humour** (IV:27–39, 58–62): El unknots his brow, laughs, twiddles his fingers, asks
  his wife whether she is hungry, thirsty – or aroused by "the love of the Bull"; then answers her request with a joke
  about slaves and brick-moulds, and consents.
- **Brick-making is slaves' work** (IV:60–62): El's "is Athirat a maid, that she should mould bricks?" – the same view of
  brick-making as Exod 1:14 and 5:7.

### Key parallels

- IV:61–62 *lbn lbnt* ↔ Gen 11:3 `הָבָה נִלְבְּנָה לְבֵנִים` [cognate] and Exod 1:14, 5:7 (brick-making as slave labour);
  IV:60 *aḫd ulṯ* ↔ Nah 3:14 `הַחֲזִיקִי מַלְבֵּן`.
- IV:39 *ahbt … tʿrrk* ↔ Song 8:4 `מַה תָּעִירוּ וּמַה תְּעֹרְרוּ אֶת הָאַהֲבָה` – the same two words in the same stem (L =
  polel) and sense.
- IV:4–12 the donkey saddled for the journey to the god ↔ Gen 22:3, Num 22:21 `וַיַּחֲבֹשׁ`, 1 Kgs 13:13 (command and
  execution in the same words), 2 Kgs 4:24 (a woman, her lad, a she-ass, a journey to the man of God).
- IV:25–31 the queen bows before the old king, who asks what she wants, for a young king ↔ 1 Kgs 1:16–17 (Bathsheba).
- III:17–22 "two sacrifices Baal hates, three" ↔ Prov 6:16 (the numerical saying of what the Lord hates); *dbḥ dnt* ↔
  Prov 17:1 `זִבְחֵי-רִיב`; III:15 *pglt* ↔ Lev 7:18, Ezek 4:14 `פִּגּוּל`, *qlt* in a cup ↔ Hab 2:16.
- IV:6, 11 *ksp // yrq* ↔ Ps 68:14 `נֶחְפָּה בַכֶּסֶף … בִּירַקְרַק חָרוּץ` (the Canaanite metal pair, with *ḫrṣ* too).
- I:34, IV:29 the footstool *hdm* ↔ Ps 110:1, Isa 66:1; I:40 *msdt arṣ* ↔ 2 Sam 22:16 (with `אֲפִקֵי יָם`), Ps 82:5.
- II:26–27 *ẓl ksp* ↔ Eccl 7:12 `בְּצֵל הַכָּסֶף`; II:3 *plk* ↔ Prov 31:19; IV:33 the infinitive-absolute question ↔ Gen 37:8.
- IV:21–22 El at the source of the two rivers ↔ Gen 2:10 [divergence] (as 1.3 V:6–7).

### Lines shared with other tablets

- Copied from 1.3: I:4–8 and IV:47–49 (= 1.3 V:35–37), I:9–18 and IV:50–57 (= 1.3 IV:47–53 / V:38–43, §6.12), I:19 (= 1.3
  IV:31), I:21–22 (= 1.3 VI:1–2), II:13–15 (= 1.3 IV:39–40, adapted), II:16–21 (= 1.3 III:32–36), III:42–44 (= 1.3 I:7–8,
  §6.11), IV:20–24 (= 1.3 IV:37, V:5–8, §6.2, §6.7), IV:41–46 (= 1.3 V:30–34).
- Differences justified in the entries: IV:24 `אל לשכת` (1.3 V:8 without `אל`); IV:41 *ḥkmt*; IV:44 *w in*; IV:45 order;
  I:15 / IV:54 the brides before Pidray; I:21 the formula deviation.
- Fixed here for later tablets: the homage IV:25–26 (= 1.6 I:36–38, 1.1 III:24–25); El's welcome IV:28–29 (= 1.6
  III:15–16); *w yʿn lṭpn il d pid* (= 1.6 I:49, 1.1 IV:13); the feast III:40–44 (= 1.4 VI:55–59, 1.5 IV:12–17); *w tʿn
  rbt aṯrt ym* (= 1.4 V:2, 1.6 I:47, 53); *idk l ttn pnm* (= 1.4 V:22, 1.6 IV:7); the house complaint IV:50–51 (= IV:62–V:1).

### Proposals for the shared renderings

1. **New corpus rows** (§4): *mgn* D `מִגֵּן` (vocalized) beside the noun *mgn* `מתנה`; *ġẓy* `רִצָּה`; *mdl* (vb)
   `חָבַשׁ` [equivalent], *ṣmd* `צָמַד`, *ʿr* `עַיִר` (add to §5.3: always vocalized, "city"), *pḥl* `חֲמוֹר`, *atn*
   `אָתוֹן`; *lbn* / *lbnt* `לָבַן` / `לְבֵנָה`; *ulṯ* `מַלְבֵּן`; *pglt* `פִּגּוּל`; *bṯt* `בֹּשֶׁת`; *msdt* `מוֹסָדוֹת`;
   *rủm* `רְאֵם`; *ẓl* `צֵל`; *ṣḥq* `צָחַק`; *ahbt* `אַהֲבָה`, *ʿr* L `עוֹרֵר`; *yrq* `יְרַקְרַק`; *k* (II) `אָמְנָם`;
   *hm* (I) `הֵם`, *hm* (II) `אוֹ` (or `אִם` – see the open decision), *im* `אִם`; *aṯr* `מֵאָחוֹר`.
2. **§6.6 *rbt aṯrt ym* after a preposition**: `לגבירה …` fails the regex (`לְ־` swallows the article); either let the
   regex accept `[לב]?ה?גבירה` or record the deviation each time (I did, at I:21).
3. **§6.7, second half**: 1.3 V:8 dropped `אל` before `לשכת`; I kept §6.7's `אל לשכת`. The coordinator may align 1.3 V:8.
4. **Gate note**: *ʿr* "donkey" / *ʿr* "city" – a trap for §5.3 (`עיר` unvocalized reads "city").

### Lessons for the guidelines

- A reference written `` `…`, ספר פרק:פסוק `` inside parentheses is silently skipped by `check_bible_quotes.py`, and so is
  a quotation in a footnote written with plain double quotes: write `` `…` (ספר פרק:פסוק) `` from the first draft.
- In a cognate-rich language, a verb whose noun is already fixed (*mgn* `מתנה`) may have a living Hebrew cognate in the
  same stem and construction (`מִגֵּן` + personal object, Prov 4:9): look for it before choosing a periphrasis.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KTU 1.3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:3 | bʿl . sid . zbl . bʿl | בַּעַל, מְכַלְכֵּל את הנסיך, בעל | `וְאֶקְחָה פַת לֶחֶם וְסַעֲדוּ לִבְּכֶם` (בראשית יח:ה); `וְלֶחֶם לְבַב-אֱנוֹשׁ יִסְעָד` (תהלים קד:טו) | cognate | *sʾd* הוא השורש העברי סעד "לחזק במאכל", והקשרו כמו בבראשית: מארח המגיש לחם ובשר לאורח אלוהי; ראו גם . |
| I:4 | ⸢ar⸣ṣ . qm . yṯʿr | הארץ. קם, ערך | `מָסְכָה יֵינָהּ; אַף עָרְכָה שֻׁלְחָנָהּ` (משלי ט:ב) | equivalent | באותו משתה של החכמה שני הפעלים של העמודה הזאת: "ערך" (*ṯʿr*) ו"מסך" (*msk*, I:17). |
| I:7 | b ḥrb . mlḥt | בחרב מלוחה – | `עֲשֵׂה לְךָ חַרְבוֹת צֻרִים` (יהושע ה:ב) | cognate | גם בעברית `חֶרֶב` היא סכין, לא רק כלי מלחמה. |
| I:8 | qṣ . mri . ndd | נתח מְרִיא. נודד, | `וַיִּזְבַּח שׁוֹר וּמְרִיא` (שמואל ב ו:יג) | cognate | הבהמה המפוטמת של הסעודה החגיגית. |
| I:9 | yʿšr . w yšqynh | הזמין והשקהו; | `וַיַּגֶּשׁ לוֹ וַיֹּאכַל וַיָּבֵא לוֹ יַיִן וַיֵּשְׁתְּ` (בראשית כז:כה) | equivalent | אותו סדר: הגשת הבשר ואחריה היין. |
| I:10 | ytn . ks . bdh | נתן כוס בידו, | `כִּי כוֹס בְּיַד-יְהוָה וְיַיִן חָמַר מָלֵא מֶסֶךְ` (תהלים עה:ט) | cognate | כוס ביד, יין `חָמַר` (*ḫmr*, I:16) ו`מֶסֶךְ` (*msk*, I:17) באותו פסוק; במזמור זו כוס הזעם, כאן כוס הכבוד. |
| I:12 | bk rb . ʿẓm . ridn | ספל רב, עצום, *קובעת* | `בְּסֵפֶל אַדִּירִים הִקְרִיבָה חֶמְאָה` (שופטים ה:כה) | equivalent | הספל של אורחים נכבדים. |
| I:13 | mt . šmm . ks . qdš | מְתֵי שמים; כוס קודש | `וִיהִי מְתָיו מִסְפָּר` (דברים לג:ו); `מְתֵי יִשְׂרָאֵל` (ישעיהו מא:יד) | cognate | `מְתֵי` – *mt* "איש" הוא המלה העברית הנדירה `מְתִים` "אנשים" (; ). |
| I:15 | l tʿn . aṯrt . alp | לא תביט אֲתִירַת. אלף | `אֲשֵׁרָה` (דברים טז:כא; מלכים א טו:יג) | cognate | `אֲתִירַת` – שמה הוא שם האלה המקראית , אבל האלה אינה מותאמת לצורה המקראית (`../renderings.md` §1). |
| I:16 | kd . yqḥ . b ḫmr | כדים לקח מן החֶמֶר, | `וְדַם עֵנָב תִּשְׁתֶּה חָמֶר` (דברים לב:יד) | cognate | *ḫmr* הוא המלה העברית השירית ליין. |
| I:17 | rbt . ymsk . b mskh | רבבה מסך בממסכו. | `מָסְכָה יֵינָהּ` (משלי ט:ב); `וּשְׁתוּ בְּיַיִן מָסָכְתִּי` (משלי ט:ה); `לַבָּאִים לַחְקֹר מִמְסָךְ` (משלי כג:ל) | cognate | הפועל והשם הם אלה של העברית. |
| I:19 | mṣltm . bd . nʿm | מצלתיים בידי הנעים; | `בִּכְלֵי שִׁיר נְבָלִים וְכִנֹּרוֹת וּמְצִלְתָּיִם` (דברי הימים א טו:טז) | cognate | אותו כלי בשמו, בזוגי |
| I:19 | mṣltm . bd . nʿm | מצלתיים בידי הנעים; | `וּנְעִים זְמִרוֹת יִשְׂרָאֵל` (שמואל ב כג:א) | cognate | הזמר המכונה "נעים", כמו *nʿm* כאן. |
| I:22 | ṣpn . y{m}tmr . bʿl | צָפוֹן. התבונן בעל | `הַר-צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג); `וְאֵשֵׁב בְּהַר מוֹעֵד בְּיַרְכְּתֵי צָפוֹן` (ישעיהו יד:יג) | cognate | `צָפוֹן` – הר צפון (ג'בל אל־אקרע, צפונית לאוגרית) הוא `יַרְכְּתֵי צָפוֹן` של  ו: מושב האלים הכנעני, ששמו נעשה בעברית שם הרוח "צפון". |
| I:24 | bt . ar . ap⸢n⸣ . ṭly | בת אור, אף בטַלַּי | — | cognate | `אוֹר` – *ar* הוא הקרוב של `אוֹר` של בראשית א:ג; כאן הוא שם תואר לאלה, לא בריאה. |
| II:2 | kpr . šbʿ . bnt . rḥ . gdm | כּוֹפֶר שבע בנות, ריח גַּד | `אֶשְׁכֹּל הַכֹּפֶר דּוֹדִי לִי` (שיר השירים א:יד) | cognate | הכופר הוא הצבע והבושם של הנשים |
| II:2 | kpr . šbʿ . bnt . rḥ . gdm | כּוֹפֶר שבע בנות, ריח גַּד | `וְהוּא כְּזֶרַע גַּד לָבָן` (שמות טז:לא) | cognate | *gd* הוא הגד העברי. |
| II:4 | bht . ʿnt . w tqry . ġlmm | בית עֲנָת; וקָרְתָה עלמים | `אֲשֶׁר קָרְךָ בַּדֶּרֶךְ` (דברים כה:יח) | cognate | `קָרָה` עם מושא ישיר: פגישה עוינת, כמו עמלק שפגע בישראל בדרך; כך ענת "קורה" את העלמים. |
| II:5 | b št . ġr . w hln . ʿnt . tm | בְּשֵׁת ההר. והן, ענת | `כִּי הַשָּׁתוֹת יֵהָרֵסוּן` (תהלים יא:ג) | cognate | `שֵׁת` העברי "יסוד", כמו *št* "בסיס ההר". |
| II:6 | tḫṣ . b ʿmq . tḫtṣb . bn {x} | נלחמה בעמק, חצבה בין | `הֲלוֹא אַתְּ הִיא הַמַּחְצֶבֶת רַהַב מְחוֹלֶלֶת תַּנִּין` (ישעיהו נא:ט) | cognate | הפועל של ענת, *ḫṣb*, הוא הפועל שבו ישעיהו מתאר את זרוע ה' המכה ברהב ובתנין. |
| II:7 | qrytm tmḫṣ . ⸢li⸣m . ḫp ⸢y⸣m | שתי הקריות; מחצה את לאום חוף הים, | `מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט) | cognate | *mḫṣ* = `מָחַץ` בכל הקורפוס (כמו *maḫāṣu* האכדי, `../renderings.md` §4.3, §8). |
| II:8 | tṣmt . adm . ṣat . š⸢p⸣š | הצמיתה אדם מוצא שַׁפְּשׁ. | — | cognate | `אָדָם` – *adm* "בני אדם" במקביל ל־*lim* "לאום" |
| II:8 | tṣmt . adm . ṣat . š⸢p⸣š | הצמיתה אדם מוצא שַׁפְּשׁ. | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ` (תהלים יט:ז) | cognate | `מוֹצָא` –  הוא אותו "מוצא" של השמש. |
| II:9 | tḥth . k kdrt . ri⸢š⸣ | תחתיה – ככדורים – ראשים, | `צְנֵפָה כַּדּוּר אֶל אֶרֶץ רַחֲבַת יָדָיִם` (ישעיהו כב:יח) | cognate | אותו `כַּדּוּר` מתגלגל. |
| II:10 | ʿlh . k irbym . kp . k . qṣ⸢m⸣ | עליה – כָּאַרְבֶּה – כפות, כחגבים | `כְדֵי אַרְבֶּה לָרֹב` (שופטים ו:ה) | cognate | הארבה כדימוי לריבוי הנכבש |
| II:10 | ʿlh . k irbym . kp . k . qṣ⸢m⸣ | עליה – כָּאַרְבֶּה – כפות, כחגבים | `וַנְּהִי בְעֵינֵינוּ כַּחֲגָבִים` (במדבר יג:לג) | equivalent | בני אדם כחגבים: כאן הם כפות ידיים כרותות. |
| II:11 | ġrm⸢n⸣ . kp . mhr . ʿtkt | ערמות כפות מהירים. קשרה | `בִּטְנֵךְ עֲרֵמַת חִטִּים` (שיר השירים ז:ג) | cognate | *ġrm* הוא `עֲרֵמָה` העברית (ġ = ע); כאן ערמה של כפות כרותות. |
| II:12 | rišt . ⸢l⸣ bmth . šnst . {kx} | ראשים לגבה, שינסה | `וַיְשַׁנֵּס מָתְנָיו; וַיָּרָץ לִפְנֵי אַחְאָב` (מלכים א יח:מו) | cognate | *šns* הוא `שִׁנֵּס` העברי, פועל נדיר. |
| II:13 | kpt . b ḥbšh . brkm . tġ⸢ll⸣ | כפות בחגורתה. ברכיים עוֹלְלָה | `וְעֹלַלְתִּי בֶעָפָר קַרְנִי` (איוב טז:טו) | cognate | הפועל הנדיר "לתחוב, לשקע" באותו בניין (פועל־פיעל): איוב "תוחב" את קרנו בעפר, ענת – את ברכיה בדם. |
| II:14 | b dm . ḏmr . ḥlqm . b mmʿ | בדם נוטרים, *ירכיים* *בְּמֵעֵי* | `וְיֵז נִצְחָם עַל בְּגָדַי` (ישעיהו סג:ג) | equivalent | האל הלוחם שבגדיו מוכתמים ב"נצח" (דם) אויביו: התמונה של ענת השקועה בדם לוחמים. |
| II:16 | šbm . b ksl . qšth . mdnt | שָׂבִים, בְּכֶסֶל קשתה – מדינות. | `גַּם-שָׂב גַּם-יָשִׁישׁ בָּנוּ` (איוב טו:י) | cognate | *šb* הוא `שָׂב` העברי. |
| II:20 | tḫtṣb . bn . qrtm . tṯʿr | מֵחֲצִיבָה בין שתי הקְּרָתוֹת. ערכה | `מְרֹמֵי קָרֶת` (משלי ט:ג) | cognate | *qrt* הוא `קֶרֶת` השירי. |
| II:21 | ksat . l mhr . ṯʿr . ṯlḥnt | כיסאות למהיר, ערוך שולחנות | `אַף עָרְכָה שֻׁלְחָנָהּ` (משלי ט:ב) | equivalent | עריכת השולחן במשתה. |
| II:22 | l ṣbim . hdmm . l ġzrm | לַצְּבָאוֹת, הדומים לגיבורים. | `עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | cognate | ההדום הוא רהיט המלוכה שתחת רגלי היושב; כאן הוא כלי בקרב. |
| II:25 | t{d}ġdd . kbdh . b ṣḥq . ymlu | תפח כְּבֵדָהּ בצחוק, נמלא | `נִשְׁפַּךְ לָאָרֶץ כְּבֵדִי` (איכה ב:יא) | cognate | הכבד כמקום הרגש, באבל; כאן בשמחת הטבח. |
| II:27 | tšyt . k brkm . tġll . b dm | תושייה, כי ברכיים עוֹלְלָה בדם | `לַיְשָׁרִים תּוּשִׁיָּה` (משלי ב:ז) | cognate | `תּוּשִׁיָּה` העברית ("הצלחה, יכולת") היא המלה האוגריתית *tšyt* "ניצחון". |
| II:31 | ⸢b bt⸣ . dm . ḏmr . yṣq . šmn | מן הבית דם נוטרים, הוּצַק שמן | `וַיִּצֹק שֶׁמֶן עַל רֹאשָׁהּ` (בראשית כח:יח) | cognate | `יָצַק` ו`שֶׁמֶן` הם המלים העבריות של מזיגת השמן הטקסית; כאן השמן נמזג לקערה אחרי הקרב, לא על מצבה. |
| II:33 | ⸢l⸣t . ʿnt . uṣbʿth . ybmt . limm . | הבתולה ענת, אצבעותיה – יבמת הלאומים. | `וְנִגְּשָׁה יְבִמְתּוֹ אֵלָיו` (דברים כה:ט); `שָׁבָה יְבִמְתֵּךְ` (רות א:טו) | cognate | *ybmt* היא המלה העברית `יְבָמָה`, אבל משמעות התואר של ענת אינה ידועה. |
| II:38 | ⸢tḥspn⸣ . ⸢mh⸣ . w trḥṣ | חָשְׂפָה מים ורחצה, | `וְלַחְשֹׂף מַיִם מִגֶּבֶא` (ישעיהו ל:יד) | cognate | אותו פועל נדיר, `חָשַׂף` "לשאוב מים". |
| II:39 | ⸢ṭ⸣l . šmm . šmn . arṣ . rbb | טל שמים, שמן ארץ, רביבי | `וְיִתֶּן לְךָ הָאֱלֹהִים מִטַּל הַשָּׁמַיִם וּמִשְׁמַנֵּי הָאָרֶץ` (בראשית כז:כח); `הִנֵּה מִשְׁמַנֵּי הָאָרֶץ יִהְיֶה מוֹשָׁבֶךָ וּמִטַּל הַשָּׁמַיִם מֵעָל` (בראשית כז:לט) | cognate | הצמד הכנעני "טל שמים // שמן ארץ" הוא ברכת יצחק ליעקב; וראו |
| II:39 | ⸢ṭ⸣l . šmm . šmn . arṣ . rbb | טל שמים, שמן ארץ, רביבי | `תִּזַּל כַּטַּל אִמְרָתִי … וְכִרְבִיבִים עֲלֵי עֵשֶׂב` (דברים לב:ב) | cognate | טל // רביבים. |
| II:40 | ⸢rk⸣b . ʿrpt . ṭl . šmm . tskh | רוכב העננים; טל – שמים נסכו לה, | `הִנֵּה יְהוָה רֹכֵב עַל עָב קַל` (ישעיהו יט:א); `סֹלּוּ לָרֹכֵב בָּעֲרָבוֹת` (תהלים סח:ה); `הַשָּׂם-עָבִים רְכוּבוֹ` (תהלים קד:ג); `רֹכֵב שָׁמַיִם בְעֶזְרֶךָ` (דברים לג:כו) | equivalent | `רוֹכֵב הָעֲנָנִים` – , , ,  – התואר הקבוע של בעל עבר אל ה' (ובתהלים סח:ה `עֲרָבוֹת` שנשמע כ־*ʿrpt*). |
| III:1 | ttpp . anh⸢b⸣[m . d alp . šd] | הִזְּתָה על עצמה *צדפים* [של אלף שדה], | `נַפְתִּי מִשְׁכָּבִי מֹר אֲהָלִים וְקִנָּמוֹן` (משלי ז:יז) | cognate | *npp* הוא `נוּף` העברי "להזות (בושם)". |
| III:5 | l irth . tšr . l . dd . aliyn | אל חיקה, שָׁרָה לדוֹד האדיר | `אָשִׁירָה נָּא לִידִידִי שִׁירַת דּוֹדִי לְכַרְמוֹ` (ישעיהו ה:א) | cognate | אותו צמד, *dd* // *yd* (`דּוֹד` // `יְדִיד`), באותו פועל שירה: "שרה לדוד בעל, ידידות פדרי" – ושירת הכרם של ישעיהו פותחת "אשירה לידידי שירת דודי". |
| III:6 | bʿl . yd . ⸢p⸣dry . bt . ar | בעל, ידידות פִּדְרַי בת אור, | — | cognate | ראו III:5 (ישעיהו ה:א): *yd* מן השורש של `יְדִיד`. |
| III:10 | w ql . tštḥwy . kbd . hyt | ונפלו, תשתחוו, כבדו אותה; | `וַיִּקֹּד הָאִישׁ וַיִּשְׁתַּחוּ לַיהוָה` (בראשית כד:כו) | cognate | `קָד` ו`הִשְׁתַּחֲוָה` הוא הקרוב של *tštḥwy* (Št; `../renderings.md` §6.3). |
| III:12 | ṯny . l ymmt . limm | שְׁנוּ אל יבמת הלאומים: | `וַיֹּאמֶר שְׁנוּ וַיִּשְׁנוּ וַיֹּאמֶר שַׁלֵּשׁוּ וַיְשַׁלֵּשׁוּ` (מלכים א יח:לד) | cognate | הפועל העברי `שָׁנָה` "עשה שנית", בציווי, כמו *ṯny*. |
| III:14 | aliy . qr⸢d⸣m . qryy . b arṣ | אדיר הלוחמים: הַקְרִי בארץ | `כִּי הִקְרָה יְהוָה אֱלֹהֶיךָ לְפָנָי` (בראשית כז:כ) | cognate | `הִקְרָה` "זימן, הניח לפני" הוא הקרוב של *qry*. |
| III:15 | ⸢ml⸣ḥmt št . b ʿprm . ddym | מלחמה, שיתי בעפר דודים, | `וְקֶשֶׁת וְחֶרֶב וּמִלְחָמָה אֶשְׁבּוֹר מִן הָאָרֶץ` (הושע ב:כ); `מַשְׁבִּית מִלְחָמוֹת עַד-קְצֵה הָאָרֶץ` (תהלים מו:י); `וְלֹא יִלְמְדוּ עוֹד מִלְחָמָה` (ישעיהו ב:ד) | equivalent | החזון של סוף המלחמה; אבל כאן זה אל הגשם שמבקש מן הלוחמת להפסיק, כדי שהאדמה תפרה. |
| III:18 | ḥšk . ʿṣk . ʿbṣk | חושי! אוצי! חפזי! | `אֱיָלוּתִי לְעֶזְרָתִי חוּשָׁה` (תהלים כב:כ); `וַיָּאִיצוּ הַמַּלְאָכִים בְּלוֹט` (בראשית יט:טו) | cognate | *ḥš* הוא `חוּשׁ` העברי; [cognate?]  – `אוּץ` "דחק, מיהר". |
| III:23 | ʿṣ . w . lḫšt . abn . {ʿ} | עץ ולחישת אבן, | `כִּי אֶבֶן מִקִּיר תִּזְעָק; וְכָפִיס מֵעֵץ יַעֲנֶנָּה` (חבקוק ב:יא) | equivalent | אבן ועץ שמדברים זה עם זה. |
| III:24 | tant . šmm . ʿm . arṣ | שיחת שמים עם ארץ, | `הַשָּׁמַיִם מְסַפְּרִים כְּבוֹד-אֵל` (תהלים יט:ב); `אֵין-אֹמֶר וְאֵין דְּבָרִים: בְּלִי נִשְׁמָע קוֹלָם` (תהלים יט:ד) | divergence | גם במזמור השמים "מדברים" בלי מלים; אבל שם הם מספרים לאדם את כבוד האל, וכאן שיחתם היא סוד שאפילו השמים אינם יודעים (III:26), ורק אל הסערה מבין. |
| III:25 | thmt . ʿmn . kbkbm | תהומות עם כוכבים, | `תְּהוֹם-אֶל-תְּהוֹם קוֹרֵא` (תהלים מב:ח) | cognate | התהומות מדברים |
| III:25 | thmt . ʿmn . kbkbm | תהומות עם כוכבים, | `בִּרְכֹת שָׁמַיִם מֵעָל בִּרְכֹת תְּהוֹם רֹבֶצֶת תָּחַת` (בראשית מט:כה) | cognate | הצמד שמים // תהום |
| III:25 | thmt . ʿmn . kbkbm | תהומות עם כוכבים, | `בְּרָן-יַחַד כּוֹכְבֵי בֹקֶר` (איוב לח:ז) | equivalent | הכוכבים שרים. |
| III:28 | hmlt . arṣ . atm . w ank | המולת הארץ. בואי, ואנוכי | `לְקוֹל הֲמוּלָּה גְדֹלָה` (ירמיהו יא:טז) | cognate | *hmlt* הוא `הֲמוּלָּה` העברית |
| III:28 | hmlt . arṣ . atm . w ank | המולת הארץ. בואי, ואנוכי | `שֻׁבוּ אֵתָיוּ` (ישעיהו כא:יב) | cognate | *ʾtw* הוא `אָתָה` השירי. |
| III:29 | ibġyh . b tk . ġry . il . ṣpn | אחוונה בתוך הָרִי, אֵל צָפוֹן, | `וְלַיְלָה לְּלַיְלָה יְחַוֶּה-דָּעַת` (תהלים יט:ג) | equivalent | הפועל `חִוָּה` "גילה, הודיע" (בחרתי בו ל־*bġy*) הוא פועל הדיבור של השמים במזמור יט |
| III:29 | ibġyh . b tk . ġry . il . ṣpn | אחוונה בתוך הָרִי, אֵל צָפוֹן, | `צִדְקָתְךָ כְּהַרְרֵי-אֵל` (תהלים לו:ז) | cognate | `אֵל` כתואר של הר. |
| III:30 | b qdš . b ġr . nḥlty | בקודש, בהר נחלתי, | `תְּבִאֵמוֹ וְתִטָּעֵמוֹ בְּהַר נַחֲלָתְךָ מָכוֹן לְשִׁבְתְּךָ פָּעַלְתָּ יְהוָה; מִקְּדָשׁ אֲדֹנָי כּוֹנְנוּ יָדֶיךָ` (שמות טו:יז) | cognate | "הר נחלה", "קודש/מקדש" ו"מכון לשבת" (*ksu ṯbth*, VI:26) – כל צירופי המקום של האל באוגרית חוזרים בשירת הים. |
| III:31 | b nʿm . b gbʿ . tliyt | בנועם, בגבעת הניצחון. | `לַחֲזוֹת בְּנֹעַם-יְהוָה וּלְבַקֵּר בְּהֵיכָלוֹ` (תהלים כז:ד) | cognate | "נועם" כתואר למקום האל. |
| III:32 | hlm . ʿnt . tph . ilm . bh . pʿnm | אזי, ענת ראתה את האֵלִים – בָּהּ רגליים | `וְלֵב נָמֵס וּפִק בִּרְכַּיִם וְחַלְחָלָה בְּכָל מָתְנַיִם` (נחום ב:יא); `וְכָל בִּרְכַּיִם תֵּלַכְנָה מַּיִם` (יחזקאל כא:יב); `וְקִטְרֵי חַרְצֵהּ מִשְׁתָּרַיִן וְאַרְכֻבָּתֵהּ דָּא לְדָא נָקְשָׁן` (דניאל ה:ו); `עַל כֵּן מָלְאוּ מָתְנַי חַלְחָלָה` (ישעיהו כא:ג) | equivalent | **הנוסחה הגופנית של הפחד מבשורה רעה**: רגליים, מותניים, פנים; אותו סדר איברים במקרא. |
| III:33 | tṭṭ . bʿdn . ksl . tṯbr | רעדו, מבעד כסל נשבר, | `יֹשֵׁב כְּרוּבִים תָּנוּט הָאָרֶץ` (תהלים צט:א) | cognate | *nṭṭ* הוא `נוּט` העברי היחיד. |
| III:35 | kslh . anš . dt . ẓrh . tšu | כסליה, נֶאֶנְשׁוּ *גידי* גֵּוָהּ. נשאה | `וַיִּגֹּף יְהוָה אֶת הַיֶּלֶד … וַיֵּאָנַשׁ` (שמואל ב יב:טו) | cognate | *ʾnš* "לחלות, להיחלש" הוא `אָנַשׁ` העברי. |
| III:36 | gh . w . tṣḥ . ik . mġy . gp⸢n⸣ . ⸢w⸣ ugr | את קולה וצוחה: איך הגיעו גֶּפֶן ואוּגָר? | — | equivalent | `וַתִּשָּׂא אֶת קֹלָהּ וַתֵּבְךְּ` – הנוסחה העברית "נשאה קולה ו־" (בראשית כא:טז), כאן עם `צָוְחָה` (`../renderings.md` §6.1). |
| III:37 | m . mn . ib . ypʿ . l bʿl . ṣrt | מה? מי אויב הופיע לבעל, צרה | `הוֹפִיעַ מֵהַר פָּארָן` (דברים לג:ב) | cognate | *ypʿ* "לקום, להופיע" הוא `הוֹפִיעַ` העברי. |
| III:38 | l rkb . ʿrpt . l mḫš⸢t⸣ . mdd | לרוכב העננים? אכן מחצתי את חביב | `הֲלוֹא אַתְּ הִיא הַמַּחְצֶבֶת רַהַב מְחוֹלֶלֶת תַּנִּין. הֲלוֹא אַתְּ הִיא הַמַּחֲרֶבֶת יָם` (ישעיהו נא:ט) | divergence | ישעיהו מנסח את אותו ניצחון על הים והתנין כשאלה רטורית ("הלוא את היא…"); ענת מצהירה ("אכן מחצתי"). |
| III:39 | il ym . l klt . nhr . il . rbm | אֵל, יָם; אכן כִּלִּיתִי את נָהָר, האֵל הרב; | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | *il rbm* "האל הרב" הוא תואר האויב של ים; בבראשית `הַגְּדֹלִים` הוא תואר התנינים שנבראו, בשורש אחר |
| III:39 | il ym . l klt . nhr . il . rbm | אֵל, יָם; אכן כִּלִּיתִי את נָהָר, האֵל הרב; | `יְהוָה עַל-מַיִם רַבִּים` (תהלים כט:ג); `מִקֹּלוֹת מַיִם רַבִּים` (תהלים צג:ד) | equivalent | ה"רבים" של המים, אם *rbm* כאן ברבים. |
| III:40 | l ištbm . t⸢nn⸣ . i⸢š⸣tm⸢dh⸣ | אכן חסמתי את התנין, *צמדתיו*; | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | cognate |  |
| III:40 | l ištbm . t⸢nn⸣ . i⸢š⸣tm⸢dh⸣ | אכן חסמתי את התנין, *צמדתיו*; | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | באוגרית התנין הוא אויב שנחסם ונכבל; בבראשית הוא נברא, ביום החמישי, בין "כל נפש החיה". |
| III:40 | l ištbm . t⸢nn⸣ . i⸢š⸣tm⸢dh⸣ | אכן חסמתי את התנין, *צמדתיו*; | `הֲיָם-אָנִי אִם-תַּנִּין: כִּי-תָשִׂים עָלַי מִשְׁמָר` (איוב ז:יב) | cognate | ים ותנין בצמד, וה"משמר" שמושם עליהם כמו החסימה כאן |
| III:40 | l ištbm . t⸢nn⸣ . i⸢š⸣tm⸢dh⸣ | אכן חסמתי את התנין, *צמדתיו*; | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג); `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א); `מְחוֹלֶלֶת תַּנִּין` (ישעיהו נא:ט) | cognate |  |
| III:40 | l ištbm . t⸢nn⸣ . i⸢š⸣tm⸢dh⸣ | אכן חסמתי את התנין, *צמדתיו*; | `וַיַּרְא אֱלֹהִים כִּי טוֹב` (בראשית א:כא) | absent | אין באוגרית תנין "טוב". |
| III:41 | mḫšt . bṯn . ʿqltn | מחצתי את הפתן העקלתון, | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | cognate | `עֲקַלָּתוֹן` הוא אותו תואר, מלה שאין לה עוד מקבילה במקרא |
| III:41 | mḫšt . bṯn . ʿqltn | מחצתי את הפתן העקלתון, | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | divergence | אבל שם הנחש הוא `נָחָשׁ`, ובאוגרית *bṯn* = `פֶּתֶן`: ישעיהו החליף את שם העצם והשאיר את התואר |
| III:41 | mḫšt . bṯn . ʿqltn | מחצתי את הפתן העקלתון, | `עַל-שַׁחַל וָפֶתֶן תִּדְרֹךְ; תִּרְמֹס כְּפִיר וְתַנִּין` (תהלים צא:יג) | cognate | הפתן והתנין יחד, כמו כאן (III:40–41). |
| III:42 | šlyṭ . d . šb⸢ʿt⸣ . r⸢ašm⸣ | השליט אשר לו שבעה ראשים. | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג); `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | equivalent | לליויתן "ראשים" ברבים, שריד של המפלצת רבת הראשים |
| III:42 | šlyṭ . d . šb⸢ʿt⸣ . r⸢ašm⸣ | השליט אשר לו שבעה ראשים. | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג); `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | absent | בבראשית א:כא אין לתנינים ראשים, ואין שליט. |
| III:43 | mḫšt . mdd ilm . ar⸢š⸣ | מחצתי את חביב האֵלִים, אַרְשׁ, | — | — | [cognate?] `בַּיָּם – אַרְשׁ וְהַתַּנִּין` – ראו 1.6 VI:51, שם ארש והתנין שוב בצמד, בים. |
| III:46 | klt . bt . il . ḏbb . imtḫṣ . ⸢ksp⸣ | כִּלִּיתִי את בת אֵל, זְבוּב. נלחמתי – כסף, | `לְכוּ דִרְשׁוּ בְּבַעַל זְבוּב אֱלֹהֵי עֶקְרוֹן` (מלכים ב א:ב) | cognate | אל־זבוב פלשתי |
| III:46 | klt . bt . il . ḏbb . imtḫṣ . ⸢ksp⸣ | כִּלִּיתִי את בת אֵל, זְבוּב. נלחמתי – כסף, | `וְלֹא-יִגַּהּ שְׁבִיב אִשּׁוֹ` (איוב יח:ה) | equivalent | הצמד אש // שביב, אם *ḏbb* הוא "להבה" (קאסוטו). |
| IV:2 | u{.}dnh . gršh . l ksi . ml⸢kh⸣ | *ממעמדו*, המגרשו מכיסא מלכותו, | `וּמִמַּעֲמָדְךָ יֶהֶרְסֶךָ` (ישעיהו כב:יט) | cognate | השר המודח "ממעמדו" |
| IV:2 | u{.}dnh . gršh . l ksi . ml⸢kh⸣ | *ממעמדו*, המגרשו מכיסא מלכותו, | `וּמִמַּעֲמָדְךָ יֶהֶרְסֶךָ` (ישעיהו כב:יט) | cognate | `כִּסֵּא מַלְכוּתוֹ` – הצירוף העברי של כיסא המלכות (`../renderings.md` §4.2). |
| IV:20 | b q⸢d⸣[š….] ⸢b ġ⸣r [. n]⸢ḥ⸣l⸢t⸣y | בקודש, בהר נחלתי. | — | cognate | `בְּהַר נַחֲלָתְךָ` – ראו III:30 (שמות טו:יז). |
| IV:33 | atm . bštm . ⸢w⸣ an . šnt | אתם בוששתם, ואני *נעתקתי*; | `כִּי בֹשֵׁשׁ מֹשֶׁה לָרֶדֶת מִן הָהָר` (שמות לב:א); `מַדּוּעַ בֹּשֵׁשׁ רִכְבּוֹ לָבוֹא` (שופטים ה:כח) | cognate | *bš* הוא `בּוֹשֵׁשׁ` "התמהמה" העברי, פועל נדיר. |
| IV:36 | tḥt . ʿnt . arṣ . ṯlṯ . mtḥ . ġyrm | תחת עינות הארץ, שלושה מתחי מעמקים. | `בַּעֲזוֹז עִינוֹת תְּהוֹם` (משלי ח:כח) | cognate | "עינות" המים שמתחת לארץ. |
| IV:37 | idk . l . ttn pnm . ʿm . bʿl | אז נתנה את פניה אל בעל, | `וָאֶתְּנָה אֶת פָּנַי אֶל אֲדֹנָי` (דניאל ט:ג); `וַאֲנִי אֶתֵּן אֶת פָּנַי בָּאִישׁ הַהוּא` (ויקרא כ:ג) | cognate | הניב העברי "נתן פנים אל" (`../renderings.md` §6.2), בכוונה טובה; לא , שהוא איבה. |
| IV:41 | št . alp . qdmh . mria . w tk | שת פר לפניה, מְרִיא – ובתוך | `וַיִּזְבַּח שׁוֹר וּמְרִיא` (שמואל ב ו:יג) | equivalent | הצמד "שור ומריא" של הסעודה החגיגית. |
| IV:43 | ṭl . šmm . šmn . arṣ . ṭl . š⸢m⸣[m . ts]kh | טל שמים, שמן ארץ, טל – שמים [נס]כו לה, | — | cognate | `מִטַּל הַשָּׁמַיִם וּמִשְׁמַנֵּי הָאָרֶץ` – ראו II:39 (בראשית כז:כח). |
| V:1 | [xxx] ⸢a⸣mṣḫ{.}nn . k imr . l arṣ | […] אגררנו ככבש לארץ, | `וַאֲנִי כְּכֶבֶשׂ אַלּוּף יוּבַל לִטְבוֹחַ` (ירמיהו יא:יט) | equivalent | הכבש המובל לשחיטה. |
| V:2 | [ašhl]⸢k⸣ . šbth . dmm . šbt . dqnh | [אוליך] שיבתו בדם, שיבת זְקָנוֹ | `וְהוֹרַדְתָּ אֶת שֵׂיבָתוֹ בְּדָם שְׁאוֹל` (מלכים א ב:ט) | cognate | שיבה ודם באותו צירוף |
| V:2 | [ašhl]⸢k⸣ . šbth . dmm . šbt . dqnh | [אוליך] שיבתו בדם, שיבת זְקָנוֹ | `וְהוֹרַדְתֶּם אֶת שֵׂיבָתִי בְּיָגוֹן שְׁאוֹלָה` (בראשית מב:לח) | cognate |  |
| V:5 | [w tr .] ⸢a⸣rṣ . ⸢id⸣[k] . [l ttn . p]⸢n⸣m | [ותרה] ארץ, אז [נתנה את] פניה | `וְיָתֻרוּ אֶת אֶרֶץ כְּנַעַן` (במדבר יג:ב) | cognate | *tr* "לחצות, לסייר" הוא `תּוּר` העברי. |
| V:6 | [ʿm . il] . mbk . nh⸢r⸣[m . qr]⸢b⸣ . ⸢a⸣[p]q | [אל אֵל], אל נבכי שני הנהרות, [בקרב] אפיקי | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן; וּמִשָּׁם יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים` (בראשית ב:י) | divergence | מקום אלוהי במקור הנהרות: באוגרית שני נהרות ושתי תהומות, מושבו של אל; בעדן נהר אחד שנפרד לארבעה, בגן |
| V:6 | [ʿm . il] . mbk . nh⸢r⸣[m . qr]⸢b⸣ . ⸢a⸣[p]q | [אל אֵל], אל נבכי שני הנהרות, [בקרב] אפיקי | `הֲבָאתָ עַד-נִבְכֵי-יָם` (איוב לח:טז) | cognate | *mbk* הוא `נִבְכֵי` (מקורות המים) |
| V:6 | [ʿm . il] . mbk . nh⸢r⸣[m . qr]⸢b⸣ . ⸢a⸣[p]q | [אל אֵל], אל נבכי שני הנהרות, [בקרב] אפיקי | `וַיֵּרָאוּ אֲפִיקֵי מַיִם` (תהלים יח:טז) | cognate |  |
| V:6 | [ʿm . il] . mbk . nh⸢r⸣[m . qr]⸢b⸣ . ⸢a⸣[p]q | [אל אֵל], אל נבכי שני הנהרות, [בקרב] אפיקי | `אֵל אָנִי מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | equivalent | מושב האל בלב הימים (ראו *mṯb il*, V:39). |
| V:7 | [thm]tm . tgl . ḏ⸢d⸣ . i[l….] ⸢w⸣ t⸢bu⸣ | [שתי התהומות]; נגלתה אל מערת אֵ[ל] ובאה | `כִּי שָׁם נִגְלוּ אֵלָיו הָאֱלֹהִים` (בראשית לה:ז) | cognate | `נִגְלָה` "התייצב, נראה" (*gly*). |
| V:8 | [qr]š . ⸢m⸣[l]k . a⸢b⸣ [. šnm….] ⸢m⸣ṣr | [לשכת] המלך, אבי [השנים …] *יבבה*? | `וְעָשִׂיתָ אֶת הַקְּרָשִׁים לַמִּשְׁכָּן עֲצֵי שִׁטִּים עֹמְדִים` (שמות כו:טו) | cognate | *qrš* הוא `קֶרֶשׁ` העברי, ויש שראו במשכן אוהל־קרשים כמו "הקרש" של אל; DULAT מפרש "חדר פרטי", ולכן התרגום לפי המשמעות. |
| V:11 | b šbʿt . ḥ[d]r⸢m⸣ . [b ṯ]⸢m⸣n[t . ap] | בשבעה חדרים, [ב]שמונה, [אף] | `לֵךְ עַמִּי בֹּא בַחֲדָרֶיךָ … חֲבִי כִמְעַט רֶגַע` (ישעיהו כו:כ) | equivalent | להסתתר בחדרים סגורים עד שיעבור הזעם: אל מסתתר מזעמה של ענת. |
| V:17 | nr⸢m⸣ . i⸢lm⸣ . ⸢š⸣pš . [ṣḥr]⸢r⸣t | נֵר האֵלִים, שַׁפְּשׁ, [לוהטת], | `שֶׁאֲנִי שְׁחַרְחֹרֶת שֶׁשְּׁזָפַתְנִי הַשָּׁמֶשׁ` (שיר השירים א:ו) | equivalent | השמש הצורבת. |
| V:24 | qdqd{h}k . ašhlk . ⸢š⸣b⸢tk⸣ [. dmm] | קדקדך; אוליך שיבתך [בדם], | `אַךְ-אֱלֹהִים יִמְחַץ רֹאשׁ אֹיְבָיו: קָדְקֹד שֵׂעָר` (תהלים סח:כב) | cognate | *mḫṣ* ו־*qdqd* יחד, כמו כאן: מחיצת הקדקד |
| V:24 | qdqd{h}k . ašhlk . ⸢š⸣b⸢tk⸣ [. dmm] | קדקדך; אוליך שיבתך [בדם], | `אַךְ-אֱלֹהִים יִמְחַץ רֹאשׁ אֹיְבָיו: קָדְקֹד שֵׂעָר` (תהלים סח:כב) | cognate | `וְהוֹרַדְתָּ אֶת שֵׂיבָתוֹ בְּדָם` – ראו V:2 (מלכים א ב:ט). |
| V:27 | ap . sgrt . ydʿ[tk .] ⸢b⸣t . k an⸢š⸣[t] | אף מסגרות: ידע[תיך], בת, כי אֲנוּשָׁה [את], | — | cognate | `וַיֵּאָנַשׁ` – ראו III:35 (שמואל ב יב:טו): *ʾnš* "לחלות; להיות פראי, חסר תקנה"; ובעברית `אָנוּשׁ` "חשוך מרפא". |
| V:28 | k in . b ilht . q⸢l⸣[ṣ]⸢k⸣ . mh . tarš⸢n⸣ | כי אין באֵלוֹת עומדת בפנייך. מה תחפצי, | `מַה לָּךְ אֶסְתֵּר הַמַּלְכָּה; וּמַה בַּקָּשָׁתֵךְ` (אסתר ה:ג) | equivalent | המלך השואל את האישה "מה בקשתך" |
| V:28 | k in . b ilht . q⸢l⸣[ṣ]⸢k⸣ . mh . tarš⸢n⸣ | כי אין באֵלוֹת עומדת בפנייך. מה תחפצי, | `וַאֲרֶשֶׁת שְׂפָתָיו בַּל-מָנַעְתָּ` (תהלים כא:ג) | cognate | *ʾrš* "לבקש" הוא `אֲרֶשֶׁת` העברית. |
| V:30 | tḥmk . il . ḥkm [.] ḥkmk | דברך, אֵל, חכם; חכמתך | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה … וְרֹחַב לֵב` (מלכים א ה:ט) | equivalent | החכמה כתכונת המלך; אצל אֵל היא תכונת האל הזקן. |
| V:31 | ʿm . ʿlm . ḥyt . ḥẓt . tḥmk | עם עולם; חיי אושר – דברך. | `עֵץ-חַיִּים הִיא לַמַּחֲזִיקִים בָּהּ; וְתֹמְכֶיהָ מְאֻשָּׁר` (משלי ג:יח) | equivalent | חכמה, חיים ואושר באותו צירוף. |
| V:32 | mlkn . aliy⸢n⸣ . bʿl . ṯpṭn | מלכנו בעל האדיר, שופטנו, | `כִּי יְהוָה שֹׁפְטֵנוּ יְהוָה מְחֹקְקֵנוּ; יְהוָה מַלְכֵּנוּ` (ישעיהו לג:כב) | cognate | אותו צמד בדיוק, "מלכנו // שופטנו", בכינוי "-נו". |
| V:33 | in . d ʿlnh . ⸢kl⸣nyy . qšh | אין אשר מעליו; כולנו קשוותו | `וְעָשִׂיתָ קְּעָרֹתָיו וְכַפֹּתָיו וּקְשׂוֹתָיו` (שמות כה:כט) | cognate | *qš* הוא `קַשְׂוָה`, כלי הנסך של שולחן המשכן. |
| V:34 | nbln . kln⸢y⸣y . nbl . ksh | נוביל, כולנו נוביל כוסו. | `לְךָ יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל); `יֹבִילוּ שַׁי לַמּוֹרָא` (תהלים עו:יב) | cognate | *ybl* הוא `הוֹבִיל` העברי של הבאת מנחה למלך־אל. |
| V:36 | mlk . d yknnh . yṣḥ . aṯrt | המלך אשר כוננו; צווח (אל) אתירת | `הֲלוֹא הוּא אָבִיךָ קָּנֶךָ הוּא עָשְׂךָ וַיְכֹנְנֶךָ` (דברים לב:ו) | cognate | האב ש"כונן" את בנו, באותו בניין (פועל־פולל = L); ושם גם `קָנֶךָ` (*qny*, *qnyt ilm*). |
| V:38 | wn . in . b⸢t⸣[….] l bʿ⸢l⸣ . km . ilm | ואין בית לבעל כָּאֵלִים, | `בָּנֹה בָנִיתִי בֵּית זְבֻל לָךְ מָכוֹן לְשִׁבְתְּךָ עוֹלָמִים` (מלכים א ח:יג) | divergence | בית לאל הוא תנאי למלכותו; באוגרית הבית נבנה לאל שניצח את הים (1.4), במקרא – למקדש שלמה. |
| V:39 | ḥẓr . k ⸢b⸣[n .] ⸢a⸣ṯrt . mṯb . il | חצר כבני אתירת; מושב אֵל, | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | equivalent | "מושב אלהים" בלב הימים: *mṯb il*, מושב אל במקור התהומות. |
| VI:1 | ⸢i⸣k . mgn . rbt . a⸢ṯ⸣rt | איך? מתנה לגבירה אתירת | `וּבָרוּךְ אֵל עֶלְיוֹן אֲשֶׁר מִגֵּן צָרֶיךָ בְּיָדֶךָ` (בראשית יד:כ) | cognate | הפועל `מִגֵּן` "נתן, מסר" הוא *mgn* "מתנה"; ובפסוק הקודם `קֹנֵה שָׁמַיִם וָאָרֶץ` – *qny* של "קונת האלים" (VI:2). |
| VI:2 | [y]⸢m⸣ . mġẓ . qnyt . ilm | [ים], שי לקונת האֵלִים! | `קֹנֵה שָׁמַיִם וָאָרֶץ` (בראשית יד:יט) | cognate | *qny* "קנה, ברא" |
| VI:2 | [y]⸢m⸣ . mġẓ . qnyt . ilm | [ים], שי לקונת האֵלִים! | `לְךָ יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | cognate | "שי" למלך־אל. |
| VI:7 | ⸢w⸣ ugr . bn . ġlmt | ואוגר, בני עלטה, | — | — | ראו VI:8. |
| VI:8 | ʿmm ym . bn . ẓl⸢m⸣[t] | *עמומי* יום, בני צַלְמָוֶת, | `גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע` (תהלים כג:ד) | cognate | *ẓlmt* "חושך" הוא `צַלְמָוֶת`: המלה העברית היא "חושך עמוק" (ẓ = צ), ולא צירוף של "צל" ו"מוות" – הניקוד המסורתי הוא אטימולוגיה עממית. |
| VI:18 | [ʿ]⸢b⸣r . gbl . ʿbr | עֲבוֹר רכס, עֲבוֹר | — | — | [cognate?] `זִקְנֵי גְבַל וַחֲכָמֶיהָ` (יחזקאל כז:ט) – אם *gbl* הוא העיר גבל (ביבלוס), זה שמה המקראי. |
| VI:19 | qʿl . ʿbr . iht | שיא, עֲבוֹר איים, | `הַחֲרִישׁוּ אֵלַי אִיִּים` (ישעיהו מא:א) | cognate | *iht* הם `אִיִּים`: איי הים התיכון, בדרך לכפתור. |
| VI:20 | np . šmm . šmšr | נוף שמים. הַסַּע! | `יְפֵה נוֹף מְשׂוֹשׂ כָּל-הָאָרֶץ: הַר-צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג) | cognate | *np* הוא `נוֹף` "גובה", באותו פסוק של "ירכתי צפון". |
| VI:25 | il . klh . kptr | אֵל כֻּלָּהּ; כַּפְתּוֹר | `כַּפְתֹּרִים הַיֹּצְאִים מִכַּפְתֹּר` (דברים ב:כג); `וּפְלִשְׁתִּיִּים מִכַּפְתּוֹר` (עמוס ט:ז) | cognate | *kptr* הוא `כַּפְתּוֹר` של המקרא, ארץ המוצא של הפלשתים. |
| VI:26 | ksu . ṯbth . ḥkpt | כיסא שִׁבְתּוֹ, חִכְּפַּת | `מָכוֹן לְשִׁבְתְּךָ פָּעַלְתָּ יְהוָה` (שמות טו:יז) | cognate | *ṯbt* הוא `שֶׁבֶת` של "מכון לשבתך", ובאותו פסוק `נַחֲלָתְךָ` (VI:27). |
| VI:27 | arṣ . nḥlth | ארץ נחלתו. | `בְּהַר נַחֲלָתְךָ` (שמות טו:יז) | cognate | ראו III:30. |
| VI:34 | yn . d ḥrš . y⸢dm⸣ | חַיִּן, חֲרַשׁ הידיים: | `לֹטֵשׁ כָּל חֹרֵשׁ נְחֹשֶׁת וּבַרְזֶל` (בראשית ד:כב) | cognate | `חֲרַשׁ` – `חָרָשׁ` העברי "אומן" (). |

### Parallels index (KTU 1.4)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:9 | [wn . in . bt . l bʿl] | [ואין בית לבעל] | `בָּנֹה בָנִיתִי בֵּית זְבֻל לָךְ מָכוֹן לְשִׁבְתְּךָ עוֹלָמִים` (מלכים א ח:יג) | divergence | בית לאל הוא תנאי למלכותו; באוגרית הבית נבנה לאל הסערה שניצח את הים, במקרא – המקדש שבונה המלך. |
| I:12 | ⸢m⸣[ṯ]⸢b⸣ . ⸢il⸣ . mẓl⸢l⸣ | מו[ש]ב אֵל, מחסה | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | equivalent | "מושב אל" (*mṯb il*) כמושב האל העליון. |
| I:21 | mgn . rbt . aṯrt ym | מתנה לגבירה אתירת ים, | `וּבָרוּךְ אֵל עֶלְיוֹן אֲשֶׁר מִגֵּן צָרֶיךָ בְּיָדֶךָ` (בראשית יד:כ); `עֲטֶרֶת תִּפְאֶרֶת תְּמַגְּנֶךָּ` (משלי ד:ט) | cognate | הפועל העברי `מִגֵּן` "מסר, נתן" הוא *mgn*; ראו גם . |
| I:22 | mġẓ . qnyt . ilm | שי לקונת האֵלִים! | `לְךָ יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | cognate | "שי" למלך־אל. |
| I:23 | hyn . ʿly . l mpḫm | חַיִּן עלה אל המפוחים, | `נָחַר מַפֻּחַ מֵאֵשׁתַּם` (ירמיהו ו:כט) | cognate | המפוח של הצורף. |
| I:25 | yṣq . ksp . yšl | יצק כסף, הִתִּיךְ | `הַפֶּסֶל נָסַךְ חָרָשׁ וְצֹרֵף בַּזָּהָב יְרַקְּעֶנּוּ; וּרְתֻקוֹת כֶּסֶף צוֹרֵף` (ישעיהו מ:יט) | equivalent | אותה מלאכה, יציקה וציפוי בכסף ובזהב; בישעיהו היא מעשה הפסל שהנביא לועג לו, כאן מלאכת האל האומן. |
| I:28 | m . l rbbt .{x x x} | לרבבות. | `וְהֵם רִבְבוֹת אֶפְרַיִם וְהֵם אַלְפֵי מְנַשֶּׁה` (דברים לג:יז) | cognate | אותו צמד, "אלפים // רבבות". |
| I:30 | kt . il . dt . rbtm | כַּן אֵל, של שתי רבבות; | `וְכַנּוֹ נְחֹשֶׁת` (שמות ל:יח) | equivalent | `כַּן` הוא הבסיס של כלי המקדש. |
| I:32 | šmr⸢ḫ⸣t . b dm . ḫrṣ | מְמוֹרָח בדם זהב; | `וְיִמְרְחוּ עַל הַשְּׁחִין` (ישעיהו לח:כא) | cognate | *mrḫ* הוא `מָרַח` העברי, "לטוח, למשוח שכבה". |
| I:33 | kḥṯ . il . nḫt | כֵּס אֵל, נַחַת, | `כִּי יָד עַל כֵּס יָהּ` (שמות יז:טז) | cognate | `כֵּס`, הצורה הקצרה של `כִּסֵּא`. |
| I:34 | bẓr . hdm . id | בֶּצֶר – הֲדוֹם, … | `נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי; עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א); `הַשָּׁמַיִם כִּסְאִי וְהָאָרֶץ הֲדֹם רַגְלָי` (ישעיהו סו:א) | cognate | הכס וההדום כזוג, ריהוט האל המלך. |
| I:34 | bẓr . hdm . id | בֶּצֶר – הֲדוֹם, … | `וְשִׁית-עַל-עָפָר בָּצֶר` (איוב כב:כד) | cognate | *bẓr* הוא `בֶּצֶר`, הזהב של איוב. |
| I:35 | d prša . b br | אשר פָּרַשׂ בבדיל; | `וּפָרְשׂוּ בֶגֶד כְּלִיל תְּכֵלֶת מִלְמָעְלָה` (במדבר ד:ו) | cognate | `פָּרַשׂ` של כיסוי כלי המשכן. |
| I:36 | nʿl . il . d . qblbl | *נַעֲלֵי* אֵל, של *שְׂרוֹכִים*, | `אִם מִחוּט וְעַד שְׂרוֹךְ נַעַל` (בראשית יד:כג) | equivalent | הנעל ושרוכה, אם אכן *nʿl* כאן "נעל". |
| I:38 | ṯlḥn . il . d mla | שולחן אֵל, אשר מלא | `וְצִפִּיתָ אֹתוֹ זָהָב טָהוֹר; וְעָשִׂיתָ לּוֹ זֵר זָהָב סָבִיב` (שמות כה:כד) | divergence | שולחן מצופה זהב לבית האל, במשכן; כאן הוא עמוס דמויות חיות. |
| I:40 | m{.}sdt . arṣ | מוסדות ארץ; | `וַיֵּרָאוּ אֲפִקֵי יָם יִגָּלוּ מֹסְדוֹת תֵּבֵל` (שמואל ב כב:טז); `יִמּוֹטוּ כָּל-מוֹסְדֵי אָרֶץ` (תהלים פב:ה); `וְהָאֵתָנִים מוֹסְדֵי אָרֶץ` (מיכה ו:ב) | cognate | "מוסדות" (*msdt*) ליד "אפיקי ים" (*apq*, II:30, IV:22); . |
| I:41 | ṣʿ . il . dqt . k amr | קערת אֵל, דקה כ(של) אַמּוּרוּ, | `וְאֶת הַיְבוּסִי וְאֶת הָאֱמֹרִי וְאֵת הַגִּרְגָּשִׁי` (בראשית י:טז) | cognate | אַמּוּרוּ היא ארץ האמורי, השכנה הדרומית של אוגרית. |
| I:42 | sknt . k ḥwt . yman | תואר כ(של) גבול יָמָן, | `בְּנֵי יֶפֶת גֹּמֶר וּמָגוֹג וּמָדַי וְיָוָן וְתֻבָל` (בראשית י:ב) | cognate | אם *ymn* היא יוון (Ionia), זו `יָוָן` של לוח העמים. |
| I:43 | d bh . rumm . l rbbt | אשר בה ראמים לרבבות. | `לְבָנוֹן וְשִׂרְיֹן כְּמוֹ בֶן-רְאֵמִים` (תהלים כט:ו); `וְקַרְנֵי רְאֵם קַרְנָיו … וְהֵם רִבְבוֹת אֶפְרַיִם` (דברים לג:יז) | cognate | הראם ו"רבבות" באותו פסוק. |
| II:3 | ⸢aḫ⸣dt . plk⸢h⸣ [. b ydh] | אָחֲזָה פלכה [בידה], | `יָדֶיהָ שִׁלְּחָה בַכִּישׁוֹר; וְכַפֶּיהָ תָּמְכוּ פָלֶךְ` (משלי לא:יט); `וּמַחֲזִיק בַּפֶּלֶךְ` (שמואל ב ג:כט) | cognate | האישה המטווה, "אשת חיל"; ראו גם . |
| II:5 | npynh . mks . bšrh | חלוקה, מכסה בשרה, | `כִּי הִוא כְסוּתֹה לְבַדָּהּ הִוא שִׂמְלָתוֹ לְעֹרוֹ` (שמות כב:כו) | equivalent | הבגד כ"כסות" הגוף. |
| II:6 | tmtʿ . mdh . b ym . ṯn | פָּשְׁטָה מַדָּהּ בים, שְׁנֵי | `וְלָבַשׁ הַכֹּהֵן מִדּוֹ בַד` (ויקרא ו:ג) | cognate | *md* הוא `מַד`, הבגד העליון. |
| II:6 | tmtʿ . mdh . b ym . ṯn | פָּשְׁטָה מַדָּהּ בים, שְׁנֵי | `פָּשַׁטְתִּי אֶת כֻּתָּנְתִּי` (שיר השירים ה:ג) | equivalent |  |
| II:7 | npynh . b nhrm | חלוקיה בנהרות. | `כִּי-הוּא עַל-יַמִּים יְסָדָהּ; וְעַל-נְהָרוֹת יְכוֹנְנֶהָ` (תהלים כד:ב) | cognate | צמד המקבילות ים // נהרות. |
| II:8 | štt . ḫptr . l išt | שָׁתָה סיר על אש, | `שְׁפֹת הַסִּיר שְׁפֹת וְגַם יְצֹק בּוֹ מָיִם` (יחזקאל כד:ג) | equivalent | העמדת הסיר על האש. |
| II:9 | ḫbrṯ . l ẓr . pḥmm | קלחת על גֵּו פחמים. | `פֶּחָם לְגֶחָלִים וְעֵצִים לְאֵשׁ` (משלי כו:כא) | cognate | *pḥm* הוא `פֶּחָם` |
| II:9 | ḫbrṯ . l ẓr . pḥmm | קלחת על גֵּו פחמים. | `בַכִּיּוֹר אוֹ בַדּוּד אוֹ בַקַּלַּחַת` (שמואל א ב:יד) | equivalent | כלי הבישול. |
| II:10 | tʿpp . ṯr . il . d pid | *עפעפה* (אל) השור אֵל רחב־הלב, | `אַל-תַּחְמֹד יָפְיָהּ בִּלְבָבֶךָ; וְאַל-תִּקָּחֲךָ בְּעַפְעַפֶּיהָ` (משלי ו:כה) | cognate | העפעפיים ככלי הפיתוי של האישה. |
| II:12 | b nši . ʿnh . w tphn | בשאתה את עיניה – וראתה: | `וַתִּשָּׂא רִבְקָה אֶת עֵינֶיהָ וַתֵּרֶא אֶת יִצְחָק; וַתִּפֹּל מֵעַל הַגָּמָל` (בראשית כד:סד); `וַיִּשָּׂא אַבְרָהָם אֶת עֵינָיו וַיַּרְא אֶת הַמָּקוֹם מֵרָחֹק` (בראשית כב:ד) | equivalent | אישה נושאת עיניה, רואה את הבא אליה – והגוף מגיב; . |
| II:18 | [tṯbr . ʿln . p]⸢n⸣h . t⸢dʿ⸣ | [נשבר, ממעל פ]ניה הזיעו, | `וְלֵב נָמֵס וּפִק בִּרְכַּיִם וְחַלְחָלָה בְּכָל מָתְנַיִם` (נחום ב:יא); `עַל כֵּן מָלְאוּ מָתְנַי חַלְחָלָה` (ישעיהו כא:ג) | equivalent | הפחד ברגליים ובמותניים; . |
| II:20 | anš . dt . ẓ⸢r⸣[h] | נֶאֶנְשׁוּ *גידי* גֵּוָ[הּ]. | `וַיִּגֹּף יְהוָה אֶת הַיֶּלֶד … וַיֵּאָנַשׁ` (שמואל ב יב:טו) | cognate | *ʾnš* הוא `אָנַשׁ`. |
| II:26 | aryy [. ẓl] . ⸢k⸣sp . [a]⸢ṯ⸣rt | קרוביי? [צל] כסף – [א]תירת, | `כִּי בְּצֵל הַחָכְמָה בְּצֵל הַכָּסֶף` (קהלת ז:יב) | cognate | "צל הכסף", אותו צירוף בדיוק (*ẓl ksp*), אם כי בקהלת "צל" הוא מחסה ובאוגריתית – הברק של המתכת. |
| II:28 | ḫ⸢rṣ⸣ . ⸢š⸣mḫ . rbt . a⸢ṯ⸣[rt] | זהב, שמחה הגבירה את[ירת] | `כֻּלֹּה בְּחַכָּה הֵעֲלָה … וְיַאַסְפֵהוּ בְּמִכְמַרְתּוֹ; עַל כֵּן יִשְׂמַח וְיָגִיל` (חבקוק א:טו) | equivalent | השמחה והמכמורת (II:33) באותו פסוק; בחבקוק זו שמחת הדייג על השלל. |
| II:30 | ʿn . mk⸢ṯ⸣r . ap⸢q⸣ [ym] | הַבֵּט, *מוּכְשָׁר* אפיק [ים], | `כִּי יֵשׁ אָדָם שֶׁעֲמָלוֹ בְּחָכְמָה וּבְדַעַת וּבְכִשְׁרוֹן` (קהלת ב:כא) | cognate | *mkṯr* מן השורש של `כִּשְׁרוֹן` ושל שם האל כּוֹתַר. |
| II:31 | d⸢g⸣y . ⸢r⸣bt . aṯ⸢r⸣[t . ym] | דייג הגבירה את[ירת ים]: | `וְאָנוּ הַדַּיָּגִים … וּפֹרְשֵׂי מִכְמֹרֶת עַל פְּנֵי מַיִם אֻמְלָלוּ` (ישעיהו יט:ח) | cognate | הדייגים, המכמורת והמים (II:31–33). |
| II:32 | qḥ . rṯt . bdk . ⸢t/q⸣ | קח רשת בידך, … | `וּפָרַשְׂתִּי עָלֶיךָ אֶת רִשְׁתִּי בִּקְהַל עַמִּים רַבִּים` (יחזקאל לב:ג) | cognate | הרשת הנפרשת על התנין (שם, לב:ב). |
| III:7 | [xxxxx .] ⸢w⸣ . dr . dr | […] ודור דור | `זֶה שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר` (שמות ג:טו) | cognate | "דור דור". |
| III:11 | y⸢tʿ⸣dd . rkb . ʿrpt | *הֵעִיד* רוכב העננים: | `לָרֹכֵב בָּעֲרָבוֹת` (תהלים סח:ה) | equivalent | `רוֹכֵב הָעֲנָנִים` (`../renderings.md` §6.6). |
| III:13 | ⸢y⸣qm . w ywpṯn . b tk | קם ורקק בתוך | `וְאָבִיהָ יָרֹק יָרַק בְּפָנֶיהָ הֲלֹא תִכָּלֵם שִׁבְעַת יָמִים` (במדבר יב:יד); `וְחָלְצָה נַעֲלוֹ מֵעַל רַגְלוֹ וְיָרְקָה בְּפָנָיו` (דברים כה:ט) | equivalent | יריקה ככלי של ביוש פומבי. |
| III:14 | ⸢pḫ⸣r . bn . ilm . štt | אספת בני אֵלִים: הוּשְׁתָה | `אֱלֹהִים נִצָּב בַּעֲדַת-אֵל; בְּקֶרֶב אֱלֹהִים יִשְׁפֹּט` (תהלים פב:א) | equivalent | אל עומד "בתוך" אספת האלים |
| III:14 | ⸢pḫ⸣r . bn . ilm . štt | אספת בני אֵלִים: הוּשְׁתָה | `בִּבְנֵי אֵלִים` (תהלים פט:ז) | cognate |  |
| III:15 | p[gl]⸢t⸣ . b ṯlḥny . qlt | פ[יג]ול בשולחני, קלון | `לֹא יֵחָשֵׁב לוֹ פִּגּוּל יִהְיֶה` (ויקרא ז:יח); `וְלֹא בָא בְּפִי בְּשַׂר פִּגּוּל` (יחזקאל ד:יד) | cognate | *pglt* הוא `פִּגּוּל`, הבשר הפסול לאכילה בקודש. |
| III:15 | p[gl]⸢t⸣ . b ṯlḥny . qlt | פ[יג]ול בשולחני, קלון | `שָׂבַעְתָּ קָלוֹן מִכָּבוֹד שְׁתֵה גַם אַתָּה … תִּסּוֹב עָלֶיךָ כּוֹס יְמִין יְהוָה וְקִיקָלוֹן עַל כְּבוֹדֶךָ` (חבקוק ב:טז) | cognate | הקלון שותים בכוס, כמו כאן (III:16). |
| III:17 | ⸢d⸣m . ṯn . dbḥm . šna . bʿl . ṯlṯ | הֲרֵי שני זבחים שנא בעל, שלושה | `שֶׁשׁ-הֵנָּה שָׂנֵא יְהוָה; וְשֶׁבַע תּוֹעֲבַות (תּוֹעֲבַת) נַפְשׁוֹ` (משלי ו:טז) | equivalent | אותו מבנה בדיוק: מספר ומספר+1 של דברים שהאל "שונא" |
| III:17 | ⸢d⸣m . ṯn . dbḥm . šna . bʿl . ṯlṯ | הֲרֵי שני זבחים שנא בעל, שלושה | `עַל שְׁלֹשָׁה פִּשְׁעֵי דַמֶּשֶׂק וְעַל אַרְבָּעָה` (עמוס א:ג) | equivalent |  |
| III:20 | ⸢d⸣nt . w dbḥ . tdmm | מָדוֹן, וזבח *הוללות* | `טוֹב פַּת חֲרֵבָה וְשַׁלְוָה-בָהּ מִבַּיִת מָלֵא זִבְחֵי-רִיב` (משלי יז:א) | equivalent | "זבחי ריב", הסעודה המלאה מריבות, הוא "זבח המדון" של בעל (קאסוטו). |
| III:25 | tmgnn . rbt . ⸢a⸣ṯrt ym | מִיגְּנוּ את הגבירה אתירת ים, | `עֲטֶרֶת תִּפְאֶרֶת תְּמַגְּנֶךָּ` (משלי ד:ט); `אֵיךְ אֶתֶּנְךָ אֶפְרַיִם אֲמַגֶּנְךָ יִשְׂרָאֵל` (הושע יא:ח) | cognate | `מִגֵּן` העברי (פיעל) עם מושא אישי, "העניק ל־", הוא *mgn* D. |
| III:26 | tġẓyn . qnyt ⸢i⸣lm | רִיצּוּ את קונת האֵלִים. | `כִּי אָמַר אֲכַפְּרָה פָנָיו בַּמִּנְחָה הַהֹלֶכֶת לְפָנָי` (בראשית לב:כא); `מַתָּן אָדָם יַרְחִיב לוֹ; וְלִפְנֵי גְדֹלִים יַנְחֶנּוּ` (משלי יח:טז) | equivalent | לפייס בעל כוח במתנה; . |
| III:41 | [ilm . w tp]⸢q⸣ . mrġṯm | [האֵלִים, והפי]קו יונקי | `וַיָּפֶק רָצוֹן מֵיְהוָה` (משלי ח:לה) | cognate | *pq* "להשיג" הוא `הֵפִיק` העברי במובנו המקראי. |
| III:44 | [w b ks . ḫrṣ . d]⸢m⸣ . ʿṣm | [ובכוס זהב – ד]ם עצים. | `אֹסְרִי לַגֶּפֶן עִירֹה … כִּבֵּס בַּיַּיִן לְבֻשׁוֹ וּבְדַם עֲנָבִים סוּתֹה` (בראשית מט:יא) | cognate | "דם ענבים" הוא "דם עצים". |
| IV:4 | aṯr⸢t⸣ . y⸢m⸣ [. mdl . ʿr] | אתירת ים: [חֲבוֹשׁ עַיִר], | `וַיַּשְׁכֵּם אַבְרָהָם בַּבֹּקֶר וַיַּחֲבֹשׁ אֶת חֲמֹרוֹ` (בראשית כב:ג); `וַיָּקָם בִּלְעָם בַּבֹּקֶר וַיַּחֲבֹשׁ אֶת אֲתֹנוֹ` (במדבר כב:כא) | equivalent | חבישת החמור לפני מסע אל האל או אל מקומו |
| IV:4 | aṯr⸢t⸣ . y⸢m⸣ [. mdl . ʿr] | אתירת ים: [חֲבוֹשׁ עַיִר], | `וַתַּחֲבֹשׁ הָאָתוֹן וַתֹּאמֶר אֶל נַעֲרָהּ נְהַג וָלֵךְ` (מלכים ב ד:כד) | equivalent | אישה, נערה, אתון ודרך אל איש האלהים: כמו אתירת, קוֹדֶשׁ ואתונה. |
| IV:5 | ṣmd . pḥl . ⸢š⸣[t . gpnm . dt] | צְמוֹד חמור, שׁ[ית מוסרות של] | `וַיִּצָּמֶד יִשְׂרָאֵל לְבַעַל פְּעוֹר` (במדבר כה:ג) | cognate | *ṣmd* הוא `צָמַד` העברי, "לקשור, לחבר". |
| IV:6 | ksp . dt . yr⸢q⸣ [. nqbnm] | כסף, של ירקרק [מרדעות]; | `כַּנְפֵי יוֹנָה נֶחְפָּה בַכֶּסֶף; וְאֶבְרוֹתֶיהָ בִּירַקְרַק חָרוּץ` (תהלים סח:יד) | cognate | אותו צמד: כסף // ירקרק (*ksp* // *yrq*), והירקרק הוא זהב. |
| IV:9 | mdl . ʿr . ṣmd . pḥl | חבש עַיִר, צמד חמור, | `חִבְשׁוּ לִי הַחֲמוֹר; וַיַּחְבְּשׁוּ לוֹ הַחֲמוֹר וַיִּרְכַּב עָלָיו` (מלכים א יג:יג) | equivalent | צו וביצוע באותן מלים (קאסוטו). |
| IV:13 | yḥbq . qdš . w amrr | חיבק קודש־ואמרר, | `וַיָּרָץ לִקְרָאתוֹ וַיְחַבֶּק לוֹ` (בראשית כט:יג) | cognate | *ḥbq* הוא `חִבֵּק`. |
| IV:14 | yštn . aṯrt . l bmt . ʿr | שת את אתירת על גב העַיִר, | `וְאַתָּה עַל בָּמוֹתֵימוֹ תִדְרֹךְ` (דברים לג:כט) | cognate | *bmt* "גב" הוא `בָּמָה` העברית במובנה הקדום. |
| IV:17 | amrr . k kbkb . l pnm | אמרר – ככוכב לפנים; | `וַיהוָה הֹלֵךְ לִפְנֵיהֶם יוֹמָם בְּעַמּוּד עָנָן לַנְחֹתָם הַדֶּרֶךְ וְלַיְלָה בְּעַמּוּד אֵשׁ לְהָאִיר לָהֶם` (שמות יג:כא) | equivalent | אור ההולך לפני המסע. |
| IV:19 | w bʿl . tbʿ . mrym . ṣpn | ובעל יצא לדרך, (אל) מרומי צָפוֹן. | `יְפֵה נוֹף מְשׂוֹשׂ כָּל-הָאָרֶץ: הַר-צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג) | cognate | צָפוֹן כהר האל. |
| IV:20 | idk . l ttn . pnm | אז נתנה את פניה | `וָאֶתְּנָה אֶת פָּנַי אֶל אֲדֹנָי הָאֱלֹהִים` (דניאל ט:ג) | equivalent | "נתן את פניו אל". |
| IV:21 | ʿm . il . mbk . nhrm | אל אֵל, אל נבכי שני הנהרות, | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן; וּמִשָּׁם יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים` (בראשית ב:י) | divergence | מושב האל במקור הנהרות; באוגרית שני נהרות ושתי תהומות, בעדן נהר אחד שנפרד לארבעה. |
| IV:21 | ʿm . il . mbk . nhrm | אל אֵל, אל נבכי שני הנהרות, | `הֲבָאתָ עַד-נִבְכֵי-יָם` (איוב לח:טז) | cognate |  |
| IV:22 | qrb . apq . thmtm | בקרב אפיקי שתי התהומות; | `תְּהוֹם רֹבֶצֶת תָּחַת` (בראשית מט:כה); `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | cognate | *thmt* הוא `תְּהוֹם` |
| IV:22 | qrb . apq . thmtm | בקרב אפיקי שתי התהומות; | `וַיֵּרָאוּ אֲפִקֵי יָם` (שמואל ב כב:טז) | cognate |  |
| IV:25 | l pʿn . il . thbr . w tql | לרגלי אֵל קדה ונפלה, | `וַתִּקֹּד בַּת שֶׁבַע וַתִּשְׁתַּחוּ לַמֶּלֶךְ; וַיֹּאמֶר הַמֶּלֶךְ מַה לָּךְ` (מלכים א א:טז) | equivalent | אשת המלך הזקן קדה ומשתחווה לפניו, והוא שואל לבקשתה; והבקשה – מלכות לבנה (שם, א:יז). |
| IV:26 | tštḥwy . w tkbdh | השתחוותה וכיבדתהו. | `וַיִּקֹּד הָאִישׁ וַיִּשְׁתַּחוּ לַיהוָה` (בראשית כד:כו) | cognate | "קד … השתחווה", אותו צמד פעלים. |
| IV:28 | yprq . lṣb . w yṣḥq | פרק מצח(ו) וצחק; | `וּפָרַקְתָּ עֻלּוֹ מֵעַל צַוָּארֶךָ` (בראשית כז:מ) | cognate | *prq* הוא `פָּרַק` "הסיר, התיר" |
| IV:28 | yprq . lṣb . w yṣḥq | פרק מצח(ו) וצחק; | `וַיִּפֹּל אַבְרָהָם עַל פָּנָיו וַיִּצְחָק` (בראשית יז:יז) | cognate | *ṣḥq* הוא `צָחַק`. |
| IV:29 | pʿnh . l hdm . yṯpd . ⸢w y⸣krkr | רגליו על ההדום שָׁפַת, וְכִירְכֵּר | `נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי; עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | cognate | הרגליים על ההדום, תנוחת המלך היושב על כסאו |
| IV:29 | pʿnh . l hdm . yṯpd . ⸢w y⸣krkr | רגליו על ההדום שָׁפַת, וְכִירְכֵּר | `וְדָוִד מְכַרְכֵּר בְּכָל עֹז לִפְנֵי יְהוָה` (שמואל ב ו:יד) | cognate | *krkr* הוא `כִּרְכֵּר`. |
| IV:31 | ik . mġyt . rbt . aṯ⸢r⸣[t . y]m | איך הגיעה הגבירה את[ירת י]ם? | `וַיֹּאמֶר הַמֶּלֶךְ מַה לָּךְ` (מלכים א א:טז) | equivalent | המלך שואל את המלכה שבאה לפניו. |
| IV:33 | rġb . rġbt . w ⸢tġtr⸣ | רָעוֹב רָעַבְתְּ *וְתֶעְתְּרִי*? | `הֲמָלֹךְ תִּמְלֹךְ עָלֵינוּ` (בראשית לז:ח) | equivalent | אותו מבנה תחבירי: מקור מוחלט ונטייה של אותו פועל בשאלה |
| IV:33 | rġb . rġbt . w ⸢tġtr⸣ | רָעוֹב רָעַבְתְּ *וְתֶעְתְּרִי*? | `וַיֶּעְתַּר יִצְחָק לַיהוָה` (בראשית כה:כא) | cognate | *ġtr* הוא `עָתַר` (ġ = ע). |
| IV:34 | hm . ġmu . ġmit . w ʿ⸢s⸣[t] | אוֹ צָמוֹא צָמֵאת *וְעָיַפְתְּ*? | `הַשְׁקִינִי נָא מְעַט מַיִם כִּי צָמֵאתִי` (שופטים ד:יט) | cognate | *ġmʾ* הוא `צָמֵא` (ġ = צ) |
| IV:34 | hm . ġmu . ġmit . w ʿ⸢s⸣[t] | אוֹ צָמוֹא צָמֵאת *וְעָיַפְתְּ*? | `וַיָּבֹא עֵשָׂו מִן הַשָּׂדֶה וְהוּא עָיֵף` (בראשית כה:כט) | equivalent | רעב, צמא ועייפות של הבא מן הדרך. |
| IV:38 | dm . ʿṣm . hm . yd . il m⸢lk⸣ | דם עצים. אוֹ ידידות אֵל המלך | `כִּבֵּס בַּיַּיִן לְבֻשׁוֹ וּבְדַם עֲנָבִים סוּתֹה` (בראשית מט:יא) | cognate | "דם ענבים" = "דם עצים". |
| IV:39 | yḫssk . ahbt . ṯr . tʿ⸢rr⸣k | *תזכירך*, אהבת השור תעוררך? | `מַה תָּעִירוּ וּמַה תְּעֹרְרוּ אֶת הָאַהֲבָה עַד שֶׁתֶּחְפָּץ` (שיר השירים ח:ד) | cognate | אותו צירוף בדיוק: "אהבה" (*ahbt*) ו"עורר" (*ʿrr*) בפולל, במובן של התעוררות התשוקה. |
| IV:41 | tḥmk . il . ḥkm . ḥkmt | דברך, אֵל, חכם; חכמה | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה וּתְבוּנָה הַרְבֵּה מְאֹד; וְרֹחַב לֵב כַּחוֹל אֲשֶׁר עַל שְׂפַת הַיָּם` (מלכים א ה:ט) | equivalent | חכמה ו"רוחב לב" כתכונות המלך; אצל אֵל "רחב־הלב" (IV:58). |
| IV:42 | ʿm ʿlm . ḥyt . ḥẓt | עם עולם; חיי אושר – | `עֵץ-חַיִּים הִיא לַמַּחֲזִיקִים בָּהּ; וְתֹמְכֶיהָ מְאֻשָּׁר` (משלי ג:יח) | equivalent | חכמה, חיים ואושר. |
| IV:43 | tḥmk . mlkn . aliy⸢n⸣ . ⸢b⸣ʿl | דברך. מלכנו בעל האדיר, | `כִּי יְהוָה שֹׁפְטֵנוּ יְהוָה מְחֹקְקֵנוּ; יְהוָה מַלְכֵּנוּ הוּא יוֹשִׁיעֵנוּ` (ישעיהו לג:כב) | cognate | הצמד "מלכנו // שופטנו". |
| IV:45 | klnyn . ⸢q⸣[š]⸢h⸣ . ⸢nb⸣[ln] | כולנו [קש]וותו נוב[יל], | `וּקְשׂוֹתָיו וּמְנַקִּיֹּתָיו אֲשֶׁר יֻסַּךְ בָּהֵן` (שמות כה:כט) | cognate | *qš* הוא `קַשְׂוָה`, כלי הנסך. |
| IV:46 | klny⸢n⸣ [.] ⸢nb⸣l . ksh | כולנו נוביל כוסו. | `לְךָ יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | cognate | *ybl* הוא `הוֹבִיל` של הבאת מנחה למלך. |
| IV:48 | [i]⸢l⸣ . mlk . d yknnh . yṣḥ | [אֵ]ל המלך אשר כוננו; צווח | `הֲלוֹא הוּא אָבִיךָ קָּנֶךָ הוּא עָשְׂךָ וַיְכֹנְנֶךָ` (דברים לב:ו) | cognate | האב ש"כונן" (פולל = L) את בנו. |
| IV:60 | ⸢p⸣ ʿbd . ank . a⸢ḫ⸣d . u⸢l⸣ṯ | ועבד אנוכי, אוחז מלבן? | `בֹּאִי בַטִּיט וְרִמְסִי בַחֹמֶר הַחֲזִיקִי מַלְבֵּן` (נחום ג:יד) | equivalent | "החזיקי מלבן": אחיזת תבנית הלבנים כמלאכת עבד. |
| IV:61 | hm . amt . aṯ⸢r⸣t . tlb⸢n⸣ | אוֹ אמה אתירת, תלבן | `הָבָה נִלְבְּנָה לְבֵנִים וְנִשְׂרְפָה לִשְׂרֵפָה` (בראשית יא:ג) | cognate | *lbn lbnt* הוא `לָבַן לְבֵנִים` |
| IV:61 | hm . amt . aṯ⸢r⸣t . tlb⸢n⸣ | אוֹ אמה אתירת, תלבן | `וַיְמָרְרוּ אֶת חַיֵּיהֶם בַּעֲבֹדָה קָשָׁה בְּחֹמֶר וּבִלְבֵנִים` (שמות א:יד); `לֹא תֹאסִפוּן לָתֵת תֶּבֶן לָעָם לִלְבֹּן הַלְּבֵנִים` (שמות ה:ז) | equivalent | עשיית לבנים כעבודת עבדים; . |
| IV:62 | lbnt . ybn . bt . l bʿl | לבנים? יִבָּנֶה בית לבעל | `לֵךְ וְאָמַרְתָּ אֶל עַבְדִּי אֶל דָּוִד כֹּה אָמַר יְהוָה: הַאַתָּה תִּבְנֶה לִּי בַיִת לְשִׁבְתִּי` (שמואל ב ז:ה) | divergence | השאלה מי יבנה בית לאל; באוגרית אֵל מסכים שיבנה בית לבעל (בידי כּוֹתַר), בשמואל ב ז ה' דוחה בית שיבנה לו המלך. |

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

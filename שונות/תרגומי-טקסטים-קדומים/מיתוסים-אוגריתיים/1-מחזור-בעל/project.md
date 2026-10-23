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
  cups *ks* `כּוֹס`, *krpn* `גָּבִיעַ`, *bk* `סֵפֶל`, *ridn* `*אֲגַרְטָל*` (changed by the coordinator after 1.6: `קֻבַּעַת` went to its cognate *qbʿt*), *qš* `קַשְׂוָה` [cognate, Ex 25:29], *ṣʿ* `קְעָרָה`;
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
generated `translation-1.4.rtl.md` (and `translation.rtl.md`). The whole tablet, 447 lines: part 1 = columns I–IV
(208 lines), part 2 = columns V–VIII (239 lines), drafted after part 1 was merged; each heading below covers both parts.

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
- Part 2, columns V–VIII (V 65, VI 65, VII 60, VIII 49 lines; VI:60–65, VII:1–6, VII:58–60, VIII:38–48 scraps): Athirat
  praises El's decision – Baal will now give his voice in the clouds; Anat brings the news; caravans of silver, gold and
  lapis; Kothar comes, proposes a window, Baal refuses twice (V:41–VI:15); cedars of Lebanon and Sirion, fire in the house
  six days and done on the seventh, the house-warming banquet for the seventy sons of Athirat (VI:16–59); Baal's conquest
  of the towns, his consent to the window, his thunder that shakes the earth, "king or no king" (VII:1–44); the message
  to Mot, the descent to his city, the warning, and the colophon (VII:45–VIII:49).

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
- Part 2: the same tools; Cassuto 1951 quoted from his notes in 3 entries (VI:38 the furnishing of the house, VI:47 the
  gender pairs of the banquet, VIII:7 "בית חפשית") and cited on the window (Jer 9:20, V:64); ≈90 more verses printed
  before quoting.

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
- **Part 2 (V–VIII):**
  - **§6.10, the seven-day formula, fixed against every copy (VI:24–33):** *hn ym w ṯn* = `הִנֵּה יוֹם וְשֵׁנִי` (not the
    pre-set `וְיוֹם שֵׁנִי`: the tablet has no second *ym*), *ṯlṯ rbʿ ym* = `שְׁלִישִׁי, רְבִיעִי יוֹם` (VI:26 has the scribal
    *kbʿ* for *rbʿ*, noted), *ḫmš ṯdṯ ym* = `חֲמִישִׁי, שִׁשִּׁי יוֹם`, *mk b šbʿ ymm* = `הִנֵּה בַּיּוֹם הַשְּׁבִיעִי`; *tikl išt*
    = `אכלה אש`, *nblat* = `להבות`, *td išt* (*ndy*) = `נוּדְּתָה אש`.
  - **§6.9, the window:** kept as fixed (VII:17–19 `יִפְתַּח חַלּוֹן בַּבַּיִת, / אֲרוּבָּה בְּקֶרֶב הַהֵיכָל, / וְיִפְתַּח בֶּדֶק
    בָּעֲנָנִים`); in Kothar's proposal and Baal's refusal (V:61–VI:9) the tablet has the pair the other way round (*urbt b
    bhtm*, *ḥln b qrb hklm*) and the Hebrew follows it. *yptḥ*: jussive `יִפְתַּח` in Baal's words (VII:17, 19), narrative
    `פָּתַח` in the execution (VII:25, 27) – the same Ugaritic form, our vocalization.
  - **Other formulas:** §6.1, §6.2 (V:22; VIII:1, 10 as commands with *al* (II) `נא`), §6.3 command forms (VIII:27–29, marked
    `[סטייה מן הנוסחה]` at VIII:28 because the regex knows only `השתחו`), §6.4 (VIII:29–34), §6.5, §6.6 (*mdd il ym*, *bn
    ilm mt*, *ydd il ġzr*, *nrt ilm špš*, *aliy qrdm*, *kṯr w ḫss*), §6.11 (V:48, VI:55–59).
  - **New one-lemma renderings:** *rb* (vb) `רַבּוֹתָ`; *ḥkm* (vb) `חָכַם`; *wsr* D `יִסֵּר` [cognate]; *rḫnt* `*עֲרֵבוּת*`;
    *ʿdn* (n.) `עִדָּן`, (vb) `יְעַדֵּן`; *ʿdt* `עֵת` [cognate]; *ṯkt* `*סְפִינָה*`; *šry* `*יַשְׁרֶה*` [cognate, Job 37:3];
    *kll* `כָּלַל` [cognate, Ezek 27:4] (`כִּלָּה` stays *kly*'s); *ʿms* `עָמַס` [cognate]; *ḫrn* `אוֹרְחָה`; *ʿḏbt*
    `עִזָּבוֹן` [cognate, Ezek 27]; *mid* `מְאוֹד` (as a noun, Deut 6:5); *mḥmd* `מַחְמָד`; *udr* `אֶדֶר` [cognate];
    *ilqṣm* `*אֶקְדָּחִים*`; *ṭhr* `טֹהַר` [cognate, Exod 24:10]; *bšr* `הִתְבַּשֵּׂר`, *bšrt* `בְּשׂוֹרָה` [cognates]; *lʾk*
    `שִׁגֵּר` (no living Hebrew verb of `מַלְאָךְ`); *mspr* `מִסְפָּר` [cognate, Judg 7:15]; *byn* `הָבֵן`; *rm* L `רוֹמֵם`;
    *yṯb* Gt/pass `הוּשַׁב`, G `יָשַׁב`; *ʿdb* pass `תּוּקַּן`, *ʿdbt* `תִּקּוּנִים`; *ndy* `נִדָּה`; *sbb* `סָב` / N `נָסַב`;
    *rq* `רִקּוּעַ`; *ql* Š `הִפִּיל`; *ṣin* `צֹאן`; *ʿgl* `עֵגֶל`; *qmṣ* `לִקְמָצִים` [cognate, Gen 41:47]; *llu* `טָלֶה`; *pq*
    Š `סִפֵּק`; *kr* `כַּר` [cognate] (CUC's "vineyard" rejected); *ḫprt* `רָחֵל`; *arḫ* `פָּרָה`; *rḥbt* `קַנְקַן`; *dkrt*
    `צַפַּחַת`; *pdr* `כְּרַךְ`; *ʿr* "city" `עִיר` (vocalized; *ʿr* "donkey" `עַיִר`); *trr* `הֵחִיל` (Ps 29:8; `רָעַד` is
    *nṭṭ*'s); *ḫš* `חָרַד` (`חוּשׁ` is *ḥš*'s); *rtq* `רֻתַּק`; *qdmy* `קַדְמוֹן`; *bmt arṣ* `גַּבֵּי אֶרֶץ` (§5.4; `בָּמֳתֵי
    אָרֶץ` in the note); *yʿr* `יַעַר`; *šnu* `שׂוֹנֵא`; *gp* `גַּף`; *nṯq* `נֶשֶׁק` [cognate]; *dmrn* `דִּמְרָן`; *qdm* `קִדֵּם`;
    *ġḏy* `*זִנֵּק*`; *bkm* `בְּכֵן`; *u* `אוֹ` [cognate]; *škn* Št `יִשְׁתַּכֵּן`; *dll* `רָץ`; *ʿdd* `כָּרוֹז`; *gngn* `*בֶּטֶן*`;
    *aḥd* `לְבַד`; *mrʾ* `*הִמְרִיא*`; *šbʿ* Š `הִשְׂבִּיעַ`; *tl* `תֵּל`; *ġṣr* `סְפָר`; *ḫlb* `*חֹרֶשׁ*`; *rḥt* `חֹפֶן`; *ḫpṯt*
    `חָפְשִׁית` [cognate, 2 Kgs 15:5, Ps 88:6]; *spr* N `נִסְפַּר`; *qrt* `קִרְיָה`; *mk* (I) `בִּצָּה`; *nġr* `נָצַר`
    [cognate]; *qrb* `קָרַב`; *ṯbrn* `שִׁבָּרוֹן` [cognate]; *qn* `קָנֶה`; *ḫtʾ* `נִכְתַּת`; *ṯʿy* `שׁוֹעַ` [cognate].
  - **Readings chosen:** V:3 *rbt* "you are great" (not CUC's "Lady"); V:9 *šrh* "its release" (Job 37:3) against CUC's
    "navel"; V:13 *bhmk* = *bhtk*; V:14 *ʿḏbt* "goods" (Ezek 27) against DULAT's "squad"; V:39 *lḥmd* = *mḥmd*; V:42 the
    scribe's instruction "return to the recitation"; V:47 *yṯṯb* = *yṯb* passive "was seated" (CUC: *ṯb*); VI:3 *ṯn* =
    *ṯny* "repeated" (CUC: "crimson"); VI:22 *tšt* passive; VI:33 *b* = "from"; VI:36 *bnt* "I built" (CUC: noun); VI:47
    *krm* "rams" (Cassuto) against CUC's "vineyard"; VII:7 *ʿdr* left uncertain; VII:12 *mrr* untranslated; VII:43 *u … u*
    "whether … or"; VII:53 *[l]mh* = end of *ġlmh*; VIII:23–24 *md|d* = *mdd* (CUC: "skilled"); VIII:49 the colophon
    restored by KTU³ from 1.6 VI.

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
- *u* "or" (VII:43) = `אוֹ`, its cognate – now in the same Hebrew word as interrogative *hm* (II) `אוֹ` (kept by the
  coordinator's decision). Either accept the shared `אוֹ`, or move *hm* (II) to `אִם` (Gen 37:8's double question).
- *mk* (II) "behold" (VI:31) = `הִנֵּה` by the fixed §6.10, the same word as *hn* (VI:20, 24): two deictic synonyms in one
  Hebrew word; an alternative for *mk* would be `וְהִנֵּה` / `הֲרֵי` (but `הֲרֵי` is *dm*'s).
- VII:34 *bmt arṣ*: `גַּבֵּי אֶרֶץ` by the §5.4 rule, or the cognate idiom `בָּמֳתֵי אָרֶץ` (Amos 4:13, Mic 1:3 – the same
  theophany image), which §5.4 now excludes.

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
- **Part 2 (V–VIII):** drafted column by column, each saved and checked (`fill`, `verify 1.4`, `check_bible_quotes.py`):
  V – one misquote fixed (Isa 40:4); VI – references normalized (4 in comma form); VII–VIII – three verifier problems:
  (1) VII:22 `וצווח` (the §6.1 regex expects the defective `וצוח`; marked `[סטייה מן הנוסחה]`, see the tool note), (2)
  VII:26 `חלון` blocked because the word is split *ḥ | ln* across VII:25–26 (tool fix, below), (3) VIII:28 the command
  form `תשתחוו` (marked, as 1.3 did); one misquote (2 Kgs 12:6 `הַבַּיִת`).
- Part 2 pass (a): brackets and plene vocalization (`שִׁיגֵּר`, `סִיפֵּק` ×8, `לְרִיקּוּעִים`, `קִידְּמָה`), `קְנֵהוּ` and
  `וְהִנָּצְרוּ` vocalized. Pass (b): every repeated passage compared (V:13–17 / V:29–34 / V:36–40; V:58 = VI:1; V:61–65 =
  VI:5–9; VI:22–33's refrain; VII:17–19 = VII:25–28; the feast VI:55–59 = III:40–44; 1.3's lines for VII:52–57, VIII:1,
  10–11, 21–34); the one cross-tablet difference, VIII:10 `אז תתנו נא` against 1.3 VI:23 `אז תתן נא`, is justified (dual
  addressees, the same Ugaritic form). Pass (c): the generated translation read through.
- **Tool fix** (minimal, because it blocked a clean verify): `ugarit_tools.py` `license_text` now also joins the edge
  tokens of neighbouring lines, so a word split across two lines (*ḥ | ln*) licenses its reserved Hebrew; `selftest` 45/0
  and `verify --strict` clean afterwards. **Tool bug reported, not fixed:** the §6.1 regex `נשא (?:את )?קולו וצוח` rejects
  the plene masculine `וצווח` (it passes only `וצוח` / feminine `וצוחה`).
- Final: `build`; `check_bible_quotes.py` on the three files 0 problems; `verify 1.4 --strict` 447/447, 0 problems.

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
- **A palace means rain** (V:6–9): Athirat's first words after El's consent: now Baal will set the season of his rain and
  give his voice in the clouds – the temple is the condition of the weather.
- **Trade builds the god's house** (V:13–19, 36–40): caravans, goods (the Tyre-trade word of Ezek 27), silver from the
  mountains, gold from the hills, lapis – a Late Bronze Age merchant city imagining its god's wealth.
- **A scribe's stage direction** (V:42): "return to the recitation: when the lads were sent" – the tablet as a script for
  oral performance.
- **The window dispute** (V:61–VI:15, VII:14–28): the young king fears an opening in his house (for his daughters, Light and
  Dew; against Yam); only after conquering the towns does he dare; then the window becomes the rift in the clouds through
  which his thunder sounds.
- **Six days and the seventh** (VI:22–35): fire burns in the house for six days, paired 1+2, 3+4, 5+6, and on the seventh
  it is done – a Canaanite pattern of completion, here for a palace.
- **Hospitality by gender** (VI:47–54): rams for the gods, ewes for the goddesses, chairs and thrones, jars and jugs –
  the banquet orders the divine family as an Ugaritic host would order his guests.
- **The king alone** (VII:42–44): "king or no king, who will rule in the land?" – and at once the one rival left, Death.
- **Death's appetite** (VII:47–52, VIII:12–20): Mot boasts in his throat that he alone will rule and feed the world; his
  city is Mire, his throne a swamp; he puts gods in his mouth like a lamb.
- **The way down** (VIII:1–9): to the two mountains at the edge of the world, lift the mountain, go down to "the house of
  freedom", be counted among those who go down – the geography of the dead.

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
- V:10 *bt arzm* ↔ 2 Sam 7:2, 7 `בֵּית אֲרָזִים` – the house of cedar that David's God refuses and Baal's God-in-council grants.
- V:61–VII:28 *ḥln*, *urbt*, *ptḥ*, *bdqt ʿrpt* ↔ Gen 7:11 `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ`, 8:2, 8:6 `וַיִּפְתַּח … חַלּוֹן`; Mal
  3:10; 2 Kgs 7:2.
- VI:24–33, the six days and "on the seventh day" ↔ Gen 1:8 … 2:2 `וַיְכַל … בַּיּוֹם הַשְּׁבִיעִי` [divergence].
- VI:46 *šbʿm bn aṯrt* ↔ Deut 32:8 (4QDeut "sons of El"), Exod 1:5, Gen 10.
- V:8, VII:29–31 *ytn ql*, *trr arṣ*, VI:18–21 *lbnn // šryn*, *arz* ↔ Ps 18:14, Ps 46:7, Ps 29:5–8.
- V:19 *bht ṭhrm iqnim* (with V:11, VI:35 *lbnt*) ↔ Exod 24:10 `לִבְנַת הַסַּפִּיר … לָטֹהַר`.
- VIII:7–9 *bt ḫpṯt*, *yrdm arṣ* ↔ Ps 88:5–6 `יוֹרְדֵי בוֹר … בַּמֵּתִים חָפְשִׁי`, 2 Kgs 15:5 `בֵּית הַחָפְשִׁית`.
- VII:48 *npš* of Mot ↔ Isa 5:14, Hab 2:5; VIII:18 ↔ Isa 25:8 [divergence]; V:47 ↔ Ps 110:1; VII:30 *ṣat špt* ↔ Num 30:13.

### Lines shared with other tablets

- Copied from 1.3: I:4–8 and IV:47–49 (= 1.3 V:35–37), I:9–18 and IV:50–57 (= 1.3 IV:47–53 / V:38–43, §6.12), I:19 (= 1.3
  IV:31), I:21–22 (= 1.3 VI:1–2), II:13–15 (= 1.3 IV:39–40, adapted), II:16–21 (= 1.3 III:32–36), III:42–44 (= 1.3 I:7–8,
  §6.11), IV:20–24 (= 1.3 IV:37, V:5–8, §6.2, §6.7), IV:41–46 (= 1.3 V:30–34).
- Differences justified in the entries: IV:24 `אל לשכת` (1.3 V:8 without `אל`); IV:41 *ḥkmt*; IV:44 *w in*; IV:45 order;
  I:15 / IV:54 the brides before Pidray; I:21 the formula deviation.
- Fixed here for later tablets: the homage IV:25–26 (= 1.6 I:36–38, 1.1 III:24–25); El's welcome IV:28–29 (= 1.6
  III:15–16); *w yʿn lṭpn il d pid* (= 1.6 I:49, 1.1 IV:13); the feast III:40–44 (= 1.4 VI:55–59, 1.5 IV:12–17); *w tʿn
  rbt aṯrt ym* (= 1.4 V:2, 1.6 I:47, 53); *idk l ttn pnm* (= 1.4 V:22, 1.6 IV:7); the house complaint IV:50–51 (= IV:62–V:1).
- Part 2 copied from 1.3: V:20–24 (= 1.3 V:4–5, IV:37–38), V:45–46 (= 1.3 IV:41–42), VII:52–57 (= 1.3 VI:5–11),
  VIII:1, 10–11 (= 1.3 VI:23–24, adapted to dual addressees), VIII:12–14 (the seat formula of 1.3 VI:25–27), VIII:21–23 (=
  1.3 V:17–18, with *mdd* for *bn*), VIII:24–34 (= 1.3 VI:28–36). Fixed here for later tablets: the feast VI:55–59 (= 1.5
  IV:12–17), the gods' banquet list VI:40–54, the house formula VI:36–37 (= VIII:35–37), *nrt ilm špš ṣḥrrt la šmm* (= 1.6
  II:24), *ḫlb l ẓr rḥtm* (= 1.5 V:14).

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
5. **§6.10** → `הִנֵּה יוֹם וְשֵׁנִי` / `שְׁלִישִׁי, רְבִיעִי יוֹם` / `חֲמִישִׁי, שִׁשִּׁי יוֹם` / `הִנֵּה בַּיּוֹם הַשְּׁבִיעִי` (the
   Ugaritic has no second *ym* in *ym w ṯn*). Also the §9 selftest lines for 1.4 VII:17, 19 use `שֶׁיִּפְתַּח` / `וְיִפְתַּח`;
   my VII:17 is `יִפְתַּח` (no relative in the Ugaritic).
6. **§6.1 regex** → accept the plene masculine `וצווח` (e.g. `וצוו?ח`).
7. **New rows:** *ʿdt* `עֵת` / *ʿdn* `עִדָּן`; *ḫpṯt* `חָפְשִׁית`; *ṭhr* `טֹהַר`; *ʿḏbt* `עִזָּבוֹן`; *kll* `כָּלַל`; *u* `אוֹ`
   (see the open decision on *hm* (II)); *trr* `הֵחִיל`; *ḫš* `חָרַד`; *nṯq* `נֶשֶׁק`; *pq* Š `סִפֵּק`; *lʾk* `שִׁגֵּר`; *ʿr*
   "city" `עִיר` vs "donkey" `עַיִר` (always vocalized).

### Lessons for the guidelines

- A reference written `` `…`, ספר פרק:פסוק `` inside parentheses is silently skipped by `check_bible_quotes.py`, and so is
  a quotation in a footnote written with plain double quotes: write `` `…` (ספר פרק:פסוק) `` from the first draft.
- In a cognate-rich language, a verb whose noun is already fixed (*mgn* `מתנה`) may have a living Hebrew cognate in the
  same stem and construction (`מִגֵּן` + personal object, Prov 4:9): look for it before choosing a periphrasis.
- A gate licensed by the line's own words fails on a word split across two lines (*ḥ | ln*): licence texts should include
  the joined edge tokens of the neighbouring lines (now done in `ugarit_tools.py`).

## KTU 1.5

Translator 3 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.5.rtl.md`, `translation--intro-1.5.rtl.md`,
generated `translation-1.5.rtl.md` (and `translation.rtl.md`). (To be resumed for KTU 1.6.)

### Scope

All 172 CUC lines of KTU 1.5 (I:1–31, II:1–27, III:1–30, IV:1–27, V:1–26, VI:1–31), every line translated, broken
ones as `[…]`. Preservation: I and VI well preserved; II:1 and II:21–27 scraps; III and IV only the right-hand margin (2–3
words a line); V:1–5 and V:22–26 broken. Content: the end of Mot's answer to Baal – "when you smote Litan … the heavens
will wilt … you shall go down into the throat of Mot" (I:1–8); the messengers repeat it to Baal, with Mot's appetite
(lion / dolphin / wild oxen and hinds, seven portions, a cup like a river) and his complaint at not being invited with
his brothers to Baal's feast (I:9–31); Mot's mouth "a lip to earth, a lip to heaven, a tongue to the stars", the olive
scorched, Baal afraid; Baal's submission "your slave am I, and yours forever" carried to Mot in Muck-town; Mot rejoices
(II); fragments of a refrain "behold, Mot, I call …", cattle and sheep (III); "where is Baal? where is Hadad?" and the
feast formula (IV); the command to Baal to take his clouds, wind, lightning, rains, lads and daughters and go down to
"the house of freedom, the earth"; Baal loves a heifer, 77 / 88 times, and a boy is born (V); the messengers report to
El "Baal the mighty is dead"; El's mourning and his cry "after Baal I will go down into the earth"; Anat begins the same
rites (VI).

### Sources consulted

- CUC v0.2.8 through `../ugarit_tools.py data`, `pars`, `lex`, `dulat` (DULAT headwords for every doubtful word); the
  human-reviewed CUC parse for I–II, machine parses for III–VI (every *l*, *k*, *hm*, *d* decided in the פירוק).
- `annotated-1.3.rtl.md`, `annotated-1.4.rtl.md` for format and vocabulary; every repeated line copied (below).
- Cassuto 1951 (I\* AB in his sigla): his introduction and notes quote 1.5 I 1–3, I 14–22, II 6–7, II 14–16, II 20, V 6–11,
  V 15, VI 14–16, VI 25; quoted briefly in 22 entries, after my own drafting.
- The modern translations (Smith in UNP, Pardee in COS I, Wyatt, del Olmo Lete, Gibson) from memory only, never quoted;
  CUC's notes name UNP's and Wyatt's readings at a few lines (I:4, I:15, I:18, I:25), cited as such. (Smith & Pitard's
  published volume covers 1.3–1.4 only.)
- Every Bible verse printed with `../../tools/check_bible_quotes.py --show` before quoting (≈110 verses).

### Decisions

- **The fixed lines** I:1–3 (renderings §7) kept character for character (unvocalized except names and ambiguous forms);
  I:27–31 repeat them. The tense: protasis past (*k tmḫṣ*, *tkly*), apodosis future (I:4–8), with *yrt* a suffix form
  rendered as a "prophetic perfect" `אכן יָרַדְתָּ`.
- **I:15 *thw* = `תֹּהוּ`** – DULAT "steppe, desert", the true cognate and the same meaning as Deut 32:10, Job 6:18, 12:24;
  the only Ugaritic attestation, in parallel with *ym* "sea" (the תֹּהוּ // תְּהוֹם / מַיִם pairing of Gen 1:2). §5.1
  forbids `תֹּהוּ` "no Ugaritic cognate in these texts": the premise is false here, and the brief forbids bending the Hebrew,
  so the verifier's one remaining problem is this gate (see Proposals).
- **Mot's throat** *npš* = `נֶפֶשׁ` throughout (I:7, 14, 18; V:4); the unwritten 1 sg. suffix marked `נפש(י)`. *mhmrt* =
  `מַהֲמוֹרַת` [cognate, Ps 140:11]; *bly* D = `בִּלָּה` [cognate, Ps 49:15 `לְבַלּוֹת שְׁאוֹל`]; *ydt* "portions" = `יָדוֹת`
  [cognate, Gen 43:34]; *ḥmr* = `חֹמֶר`; *imt* = `אֱמֶת` (DULAT; Cassuto/Wyatt "I kill" rejected); *spʾ* = `טָרַף`; *uṭ* =
  `זֶרֶת`, *amt* = `אַמָּה`, *ḏrq* = `רְסִיסִים`; *brlt* = `תַּאֲוָה`; *anḫr* = `*דּוֹלְפִין*` (italic; `תַּנִּין` / `לִוְיָתָן`
  reserved); *kšd* = `שָׁאַף` (`בִּקֵּשׁ` is *bqṯ*'s); *ṭʿn* = `דָּקַר` (the cognate `טָעַן` "pierce", Isa 14:19, would read
  "load / claim": in the note); *rks* = `מֵזַח` (Ps 109:19; Job 12:21 `וּמְזִיחַ אֲפִיקִים רִפָּה`; `רֶכֶס` is *gbl*'s,
  `חֲגוֹרָה` *ḥbš*'s); *ipd* = `אֵפוֹד`; *ṯkḥ* = `נִצְרַב` (`יָקַד` rejected: it would import Deut 32:22's fire "to Sheol").
- **Submission** II:12, 19–20: *ʿbdk an w d ʿlmk* = `עבדך אני, ושל עולמך` (literal; *d* = `שֶׁל`); *bhṯ* (DULAT "shame") =
  `*בּוּשָׁה*` (italic; a greeting in some readings), distinct from *bṯt* `בֹּשֶׁת` (1.4).
- **The descent** V:6–16: *lqḥ* = `לָקַח`; *mdl* (II) "lightning?" = `*חֲזִיז*` (Zech 10:1; *mdl* (I) "harness" stays
  1.3's `*רתמה*`); *mṭrt* (fem.) = `מִטְרוֹת` (Job 37:6), distinct from *mṭr* `מָטָר`; *ḫnzr* = `*פְּקִידִים*` (DULAT "an
  official"; Cassuto's "boars" in the note); *ḫrt* = `חוֹר` (`מְעָרָה` is *ḏd*'s); *knkny* `כְּנַכְנַי`; V:13–16 copy 1.4
  VIII:5–9 in the singular.
- **Baal and the heifer** V:18–22: *ʿglt* `עֶגְלָה`, *prt* `פָּרָה` (collision, see Proposals), *dbr* `דֶּבֶר` (DULAT "plague";
  "pasture" `דֹּבֶר` in the note), *šḥlmmt* `שַׁחְלְמַמַּת`, *škb* `שָׁכַב`, *šbʿ l šbʿm* `שבע לשבעים` (literal), *ʿly* Š
  `הֶעֱלָה`, *mṯ* `תִּינוֹק`, *lbš* Š `הִלְבִּישׁ`, *ul* `*אוּל*`.
- **"Baal is dead"** VI:9: *mt* (vb) = `מֵת` (vocalized), *ḫlq* = `נִסְפָּה` (`אָבַד` reserved for *ʾbd*, 1.100; Heb. `חָלַק`
  is a false friend).
- **El's mourning** VI:11–25 (renderings §4.4: "the translator of 1.5 fixes the line"): *apnk* `אַחֲרֵי כֵן` (`אָז` is *idk*'s,
  `אֲזַי` *hlm*'s); *l* "from" (VI:12, 13b) / "on" (VI:13a, 14–16); *ʿmr un l rišh* = `אֵפֶר אוֹנִים על ראשו` (*ʿmr* "ashes"
  by sense, `עָפָר` being *ʿpr*'s; *un* the cognate `אוֹן`/`אוֹנִים` of Deut 26:14, Hos 9:4 – not §4.4's suggested `אֵבֶל`); *ʿpr
  plṯt* = `עפר הִתְפַּלְּשׁוּת` (the cognate, with Cassuto, against DULAT's "fall"); *lpš* `לְבוּשׁ`, *ksy* `כִּסָּה`, *mizrtm*
  `אֵזוֹר`; *ġr* (III) `עוֹר`; *ydy* (II) `גָּרַד` (Job 2:8); *pslt* `*מַחְלְפוֹת*` (DULAT "braid"; "incisions" in the note);
  *yʿr* `תַּעַר`; *hdy* `פָּצַע` (no cognate; `שָׂרַט`, `הִתְגּוֹדֵד`, `קָרְחָה` reserved and kept in the apparatus); *lḥm w
  dqn* `לְחָיַיִם וְזָקָן`; *ṯlṯ* D `שִׁלֵּשׁ` (1 Kgs 18:34); *qn ḏrʿh* `קנה זרועו` (Job 31:22); *ḥrṯ* `חָרַשׁ`; *k gn ap lb*
  `כגן את אַף הלב` (gn licensed); *bmt* `גַּב`; *my* `מִי` ("what", Mic 1:5); *hmlt* `הֲמֻלָּה`; *aṯr* `מֵאֲחוֹרֵי` (1.4's
  `מֵאָחוֹר`).
- **Other one-lemma renderings new here** (all grepped in every corpus first): *ṯtʿ* `שָׁתַע` [cognate, Isa 41:10]; *yrʾ*
  `יָרֵא`; *ḥrr* `נִחַר`; *ybl* (n.) `יְבוּל`, *pr* `פְּרִי`, *zt* `זַיִת`; *šgr* `שֶׁגֶר` [Deut 7:13]; *iṯm* `*פְּטָמִים*`; *trṯ*
  `תִּירוֹשׁ`; *nʾṣ* `נָאַץ`; *ṭlb* `*דָּרַשׁ*`; *mṣd* `צַיִד`; *ššrt* `שַׁרְשֶׁרֶת` [Ex 28:14]; *ksm* `*פֶּלַח*`, *mhyt*
  `*נְאוֹת*`, *nʿmy* `נְעִימוּת` (vs *nʿm* `נוֹעַם`), *ysmt* `יֹפִי`; *hpk* `הָפַךְ`; *i* "where" `אֵי` (CUC "woe" rejected,
  cf. 1.6 IV *iy*); *rḥb* (adj., III:2) `רְחָבָה` (not 1.4's *rḥbt* "jar"); *lk* (III:13–20) = impv. `לכו` (1.3 IV:32), not
  *l* + *-k*; *dm* (III:9, 18, 25) `הֲרֵי` in all three (CUC's "blood" at two of them rejected).

### Open decisions for the user

- I:15 `תֹּהוּ` for *thw* against §5.1's "never" (the only cognate attestation; the alternative `מִדְבָּר` / `יְשִׁימוֹן` would
  hide it).
- VI:15 *un*: the cognate `אוֹנִים` (Deut 26:14 `בְאֹנִי`; Hos 9:4 `לֶחֶם אוֹנִים`) against §4.4's `אֵבֶל`.
- V:9 *ḫnzr*: DULAT's "officials" against the traditional "boars" (`חֲזִירִים`, the cognate; Cassuto).
- VI:18 *psltm*: "braids" (DULAT; ↔ Lev 19:27 `פְּאַת רֹאשְׁכֶם`) or "incisions" (↔ Lev 19:28 `שֶׂרֶט`).

### Progress log

- Drafted in CUC order I → VI, each column written to the file and checked at once (`fill`, `verify 1.5`,
  `check_bible_quotes.py`). The checker, and a script that lists vocalized quotations without a reference, caught 9 slips
  in the notes (2 misquoted words, 5 references in a form the checker cannot read or reads as Genesis, 2 verses quoted
  from memory without a reference); all fixed against the printed verses.
- Pass (a) fidelity: every entry re-read against CUC; `וְסָעוֹד` / `וְשָׁתוֹ` vocalized as infinitives (unvocalized they
  read "dined / they drank"); `בְּדֶבֶר` without the article (a place); `וְזָקָן` vocalized (not `זָקֵן` "old").
- Pass (b) consistency: the repeated passages compared with 1.3–1.4 (`pars`, `lex`) and inside the tablet (I:1–5 / I:27–31,
  I:9–10 / II:13–14, III:9–10 / 18–19 / 25–26, VI:5–8 / VI:28–30, VI:16–17 / VI:31); new Hebrew words grepped in every
  corpus (`grep --all`): two corrections – *ḥbš* is already `חֲגוֹרָה` in 1.3 II:13 (so *rks* moved to `מֵזַח`, which
  Gilgameš already uses for Akk. *meserru* "belt"), and cross-language matches confirmed (`מחלפות` = Gilgameš's *pērtu*,
  `שִׁלֵּשׁ` = Etana's *šullušu*, `נאות` = Gilgameš's *qerbētu*, `מזח` = *meserru*).
- Pass (c) Hebrew: the generated `translation-1.5.rtl.md` read through; register kept; no vav-consecutive.
- **Tool fix** (minimal, because it blocked a clean verify): `ugarit_tools.py` FORMULAS, the *ydd il ġzr* regex
  `ידיד אל[, ]+הגבור` → `ידיד אל[, ]+הגי?בור` (it rejected the plene `הגיבור` that 1.4 uses; the §6.6 form `הַגִּבּוֹר`
  strips to the defective string); `selftest` 45/0 after it.
- Final: `build`; `check_bible_quotes.py` on the three files 0 problems; `verify 1.5 --strict`: 172/172 entries, **1
  problem** (the `תֹּהוּ` gate, I:15, left unbent as the brief requires); 2 repeated-line differences, both inside the
  tablet and justified in the entries (III:13 / 27 and III:14 / 20 differ only by the lacuna `[…]` after the words); the
  third listed difference is 1.3 VI:23 / 1.4 VIII:10 (justified there).

### The text on its own terms

- **Death is a throat** (I:7, 14–22; II:2–4): Mot's *npš* is appetite itself – the lion's in the waste, the dolphin's in
  the sea, the thirst of wild oxen and hinds for a spring; he eats with both hands, seven portions, a cup the size of a
  river; his lips touch earth and heaven, his tongue the stars. Death is not a place one goes to but a mouth one goes into.
- **Even death wants to be invited** (I:22–26): Mot's grievance is social – Baal feasted his brothers and forgot him; the
  threat follows the insult, as in any court of the Late Bronze Age.
- **Victory over chaos does not save from death** (I:1–8): the conqueror of the seven-headed serpent is told that the sky
  will sag like a loosened belt and that he will go down all the same.
- **The weather dies with the god** (II:5–6; V:6–11): the olive is scorched, the earth's yield and the trees' fruit fail;
  Baal must take with him clouds, wind, lightning, rains, his lads and his daughters Light and Dew – the dry season as a
  god's descent.
- **A king's submission** (II:10–20): "your slave am I, and yours forever" – the vassal formula of the Amarna letters, said
  by the king of the gods to Death, and carried by messengers like any diplomatic letter.
- **The way to the dead** (V:12–16): lift the mountain, go down to "the house of freedom", be counted among those who go
  down – the same instructions Baal gave his messengers in 1.4 VIII, now addressed to him.
- **Fertility against death** (V:17–22): before going down, the bull-god mates with a heifer 77, 88 times, and a boy is
  born, perhaps a substitute or an heir – life answering death.
- **The news of a god's death** (VI:3–10): the messengers searched the ends of the earth and found him fallen "in the
  pleasantness of the land of Pestilence, the beauty of the field of Death's Shore".
- **The old father's grief** (VI:11–25): El comes down from throne to footstool to earth, pours ashes and dust on his head,
  puts on the mourning loin-cloth, scrapes his skin with flint and his braids with a razor, gashes cheeks and chin, and
  "ploughs" his arm, chest and back like a garden, like a valley – the whole ancient mourning rite, performed by the
  highest god for his son.
- **A god's care for humankind** (VI:23–24): El's first thought is for the people: "Baal is dead – what of the people of
  Dagan's son, what of the multitude?" – the human world depends on the rain god.
- **A father ready to follow his son** (VI:25): "after Baal I will go down into the earth" – the same words as Jacob's for
  Joseph.
- **The sister's search** (VI:26–31): Anat roams every mountain "as a huntress" and repeats El's rites word for word – grief
  as a ritual with fixed words, shared by all mourners.

### Key parallels

- I:1–3 ↔ Isa 27:1 (`לִוְיָתָן נָחָשׁ בָּרִחַ … עֲקַלָּתוֹן`): same name and adjectives, but `פֶּתֶן` for Isaiah's `נָחָשׁ`, and a
  past victory where Isaiah has `יִפְקֹד`; Ps 74:14 (the heads of Leviathan).
- I:15 *thw* // *ym* ↔ Gen 1:2 `תֹהוּ … תְהוֹם … הַמָּיִם`, Deut 32:10, Job 6:18: `תֹּהוּ` is an ordinary Canaanite word for
  the waste, the lion's habitat.
- I:7, 14 *npš*; II:2–3 ↔ Isa 5:14 `הִרְחִיבָה שְּׁאוֹל נַפְשָׁהּ וּפָעֲרָה פִיהָ`, Hab 2:5, Prov 30:16, Ps 73:9 `שַׁתּוּ בַשָּׁמַיִם
  פִּיהֶם וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ`; I:7 *mhmrt* ↔ Ps 140:11; I:18 *bly* ↔ Ps 49:15 `לְבַלּוֹת שְׁאוֹל`; I:17 ↔ Ps 42:2.
- II:12 *ʿbd ʿlm* ↔ Ex 21:6, Deut 15:17 `עֶבֶד עוֹלָם`, and Job 40:28 `תִּקָּחֶנּוּ לְעֶבֶד עוֹלָם` – of Leviathan: the slayer of
  Litan becomes Death's "eternal slave".
- II:5–6 ↔ Lev 26:4 `וְנָתְנָה הָאָרֶץ יְבוּלָהּ וְעֵץ הַשָּׂדֶה יִתֵּן פִּרְיוֹ`, Deut 11:17: the same pair, yield and fruit,
  tied to the rain.
- V:6–11 ↔ 1 Kgs 17:1 (no dew or rain), Zech 10:1 (`עֹשֶׂה חֲזִיזִים`), Job 37:6 (`מִטְרוֹת`), Gen 19:15 (`קַח … וְאֶת שְׁתֵּי
  בְנֹתֶיךָ`, Cassuto), Gen 8:2 [divergence].
- VI:12–22 ↔ Jonah 3:6, Ezek 26:16, 27:30–31, Isa 47:1, Job 2:8, 13, Jer 6:26, 48:37, Gen 37:34; and the prohibitions
  "for the dead" Lev 19:27–28, 21:5, Deut 14:1 – with 1 Kgs 18:28, Baal's prophets gashing themselves `כְּמִשְׁפָּטָם`.
- VI:21 ↔ Zech 12:11 `כְּמִסְפַּד הֲדַדְרִמּוֹן בְּבִקְעַת מְגִדּוֹן` – the mourning for Hadad (= Baal) remembered in the Bible.
- VI:25 ↔ Gen 37:35 `כִּי אֵרֵד אֶל בְּנִי אָבֵל שְׁאֹלָה` (Cassuto); VI:9 ↔ Ps 82:7.

### Lines shared with other tablets

- Copied: I:1–3 (renderings §7, = 1.3 III:41–42's noun phrases); I:10 (§6.2, = 1.3 IV:37); I:11 (= 1.3 IV:38's
  `מרומי צָפוֹן`); I:12 (`גֶּפֶן ואוּגָר`, 1.3 III:36); II:8–12, 17–20 (the message formulas of 1.3 III:13 / IV:7, §6.4;
  II:10 identical with 1.3 IV:7); II:15–16 (= 1.4 VIII:11–14); IV:6 (= 1.4 VII:22); IV:13–17 (= 1.4 VI:55–59, §6.11);
  V:12 (§6.2 command, 1.3 VI:23–24 / 1.4 VIII:1); V:13–16 (= 1.4 VIII:5–9); VI:1–2 (= 1.4 IV:23–24, §6.7).
- Differences justified in the entries: I:3 ends `–` (the sentence continues) where 1.3 III:42 has `.`; V:13–15 singular
  (`שָׂא`, `ורד`, `תִּסָּפֵר`) where 1.4 VIII has the dual; VI:1 plural `נגלו … ובאו` where 1.4 IV:23 has Athirat's feminine;
  IV:16 `שתו` for *šty* where 1.4 VI:58 has *tšty* (the same Hebrew for both forms).
- Fixed here for 1.6: El's mourning VI:11–22 (= Anat's, 1.6 I:1–5), VI:23–25 (`בעל מֵת! מִי לאום בן / דָּגָן?`, = 1.6
  I:6–7), the land of Dbr / field of Šḥlmmt (VI:6–7 = 1.6 II:19–20), *ḫlq zbl bʿl arṣ* (VI:10 = 1.6 III:1, 9, 21 variants),
  VI:26–27 (= 1.6 II:15–16 in Mot's mouth).

### Proposals for the shared renderings

1. **§5.1 `תֹּהוּ`**: license it for *thw* (1.5 I:15) instead of "never" – the cognate in the same meaning; the verifier's
   RESERVED row for `תהו|בהו` should take *thw* as its licence (keep `בֹּהוּ` never).
2. **§4.4 *un*** → `אוֹנִים` (the cognate; Deut 26:14, Hos 9:4), and the mourning line: `יצק אֵפֶר / אוֹנִים על ראשו, עפר
   הִתְפַּלְּשׁוּת / על קדקדו` (VI:14–16); the §9 selftest line for 1.5 VI:15 (`אֵבֶל עַל רֹאשׁוֹ, עֲפַר`) then needs updating
   (it is a gate test only and still passes).
3. **Collisions to settle** (each a cognate now met whose Hebrew an earlier tablet gave by sense to another lemma):
   (a) *npl* "fall" `נָפַל` (VI:8, 30) against §6.3's *ql* `נָפַל` (`קָד וְנָפַל`); (b) *pr* "young bull" `פַּר` (V:2) against
   *alp* `פַּר` (1.3, 1.4 VI:49) – *alp* could take `בָּקָר` / `שׁוֹר`?; (c) *prt* "cow" `פָּרָה` (V:18) against *arḫ* `פָּרָה`
   (1.4 VI:50) – needed before 1.6 II:6–9 (*k lb arḫ l ʿglh*).
4. **New corpus rows**: *thw* `תֹּהוּ`; *mhmrt* `מַהֲמוֹרָה`; *bly* `בִּלָּה`; *ydt* "portions" `יָדוֹת`; *ṯtʿ* `שָׁתַע`; *rks*
   `מֵזַח`; *ipd* `אֵפוֹד`; *ššrt* `שַׁרְשֶׁרֶת`; *šgr* `שֶׁגֶר`; *trṯ* `תִּירוֹשׁ`; *mṭrt* `מִטְרוֹת`; *mdl* (II) `*חֲזִיז*`; *ḫrt*
   `חוֹר`; *ḫlq* `נִסְפָּה`; *apnk* `אַחֲרֵי כֵן`; *ʿmr* `אֵפֶר`; *plṯt* `הִתְפַּלְּשׁוּת`; *hdy* `פָּצַע`; *ydy* (II) `גָּרַד`; *yʿr*
   `תַּעַר`; *ṯlṯ* D `שִׁלֵּשׁ`; *ʿmq* `עֵמֶק`; *my* `מִי`; *i* "where" `אֵי`; *mṯ* `תִּינוֹק`; *ʿglt* `עֶגְלָה`; *bhṯ* `בּוּשָׁה`.
5. **§5.3 traps** to add: `בְּחוֹר` (*ḫrt*; unvocalized "young man"), `מִטְרוֹת` ("targets"), `כִּסָּה` (*ksy*; "throne"),
   `חָרַשׁ` ("deaf"), `זָקָן` / `זָקֵן`.

### Lessons for the guidelines

- A pre-set "never" on a biblical word must be checked against the dictionary for a cognate in the corpus before the first
  line (`thw` is in DULAT; the reservation assumed none).
- A formula written vocalized in the renderings (`הַגִּבּוֹר`) strips to a defective string; its regex must allow the plene
  form translators write (`הגי?בור`), as §6.1's `וצוו?ח` already does.
- In notes, references must be written `` (ספר פרק:פסוק) `` even inside a comparison ("כמו …"): a bare `יט:כז` is checked
  against Genesis.

## KTU 1.6

Translator 3 of the corpus (Round 4 run 1), 2026-10-23. Files: `annotated-1.6.rtl.md`, `translation--intro-1.6.rtl.md`,
generated `translation-1.6.rtl.md` (and `translation.rtl.md`).

### Scope

All 245 CUC lines of KTU 1.6 (I:1–67, II:1–37, III:1–24, IV:1–29, V:1–30, VI:1–58), every line translated, broken
ones as `[…]`. Preservation: I–III and most of VI good; II:1–5, IV:25–29, V:23–30, VI:1–8 and VI:36–42 scraps. Content:
Anat mourns Baal with El's rites and cry (I:1–8); with Šapšu she weeps, carries him to Ṣapon, buries him and slaughters
seventy of six kinds of animal (I:9–31); she tells El that Athirat's sons may now rejoice; Athirat proposes ʿAṯtar the
Terrible, who is too small for Baal's throne and "rules in the earth, god of all of it" (I:32–67); months pass, Anat
seizes Mot, who boasts of having eaten Baal (II:1–23); she splits, winnows, burns, grinds and sows him, and the birds eat
him (II:24–37); El dreams that "the heavens rain oil, the wadis run with honey" and knows Baal lives (III); "the furrows of
the fields are cracked": Anat sends Šapšu to look for Baal (IV); Baal returns, smites Athirat's sons and sits on his
throne; in the seventh year Mot comes back, lists his own sufferings and demands one of Baal's brothers (V); Baal and
Mot fight "like wild oxen, like serpents, like runners" until both fall; Šapšu warns Mot that El will overturn his throne;
Mot yields; a hymn to Šapšu, lord of the Rephaim; the colophon of Ilimilku (VI).

### Sources consulted

- CUC v0.2.8 through `../ugarit_tools.py data`, `pars`, `lex`, `dulat`. 1.6 has machine parses only: every form re-parsed,
  every *l*, *k*, *hm*, *d* decided in the פירוק (one machine error worth noting: IV:1–2, 12–13 *ʿn* "furrow" parsed as
  the name *ʿnt*).
- `annotated-1.3/1.4/1.5.rtl.md` for format, vocabulary and every repeated line (below).
- Cassuto 1951 (I AB in his sigla), quoted briefly in 5 entries (I:9, II:22, VI:19, VI:20, VI:30), after my own drafting.
- The modern translations (Smith in UNP, Pardee in COS I, Wyatt, del Olmo Lete, Gibson) from memory only, never quoted.
- Every Bible verse printed with `../../tools/check_bible_quotes.py --show` before quoting (≈60 references in 47
  **הקבלה** bullets and the notes).

### Decisions

- **Anat kills Mot** II:31–35, one Hebrew verb per lemma, checked against Exod 32:20 (`וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד
  אֲשֶׁר דָּק וַיִּזֶר עַל פְּנֵי הַמַּיִם`, printed): *bqʿ* `בָּקַע`, *ḏry* `זָרָה`, *šrp* `שָׂרַף`, *ṭḥn* `טָחַן`, *drʿ*
  `זָרַע`; *ḫṯr* `נָפָה` (Isa 30:28) and *kbrt* `כְּבָרָה` (V:16) kept apart; *rḥm* "millstones" `רֵחַיִם`; the split
  object suffix *tdry|nn* rendered `זֵרְתָה –` / `אותו`. Mot's own list (V:12–19) uses the nouns of the same verbs
  (`זרייה`, `שְׂרֵפָה`, `טחינה`, `זריעה`), plus *qlt* `קָלוֹן` and *ġly* `*קְמִילָה*`.
- **VI:45–48 (the §9 selftest lines) confirmed against CUC**: *rpim* = `הָרְפָאִים` (Isa 26:14, 19; Ps 88:11; Isa 14:9);
  *tḥtk* = prep. *tḥt* + 2 f. sg. `תַּחְתַּיִךְ` (the parallel VI:47 decides; CUC's *ḥtk* "rule" noted); *ilnym*
  `הָאֵלִיִּים`; *tġzyt* = `רִצּוּי` from *ġzy* (1.4 `רִצָּה`; "חנופה" rejected as not root-based); *mtm* `מְתִים` "men"
  (DULAT *mt* III, renderings §5.4) with `מֵתִים` "the dead" as the noted alternative. No change to the selftest needed.
- **VI:51** the fixed line `בַּיָּם – אַרְשׁ וְהַתַּנִּין;` character for character; VI:49–53 *kṯr w ḫss* split
  `כּוֹתַר … וְחַסִּיס` in VI:49–50 and joined `כּוֹתַר־וְחַסִּיס` in VI:52–53 as the text does.
- **Colophon** VI:54–58 per renderings §1.2: `אִלִימִלְכּוּ הַשּׁוּבָּנִי`, `אַתְנוּ־פּוּרְלִנִּי`, `נִקְמַדּוּ`, `אוּגָרִית`,
  `יַרְגִּבְבַּעַל`, `תַּרְמָן`; *lmd* `תלמיד`, *rb khnm* / *rb nqdm* `רב הכוהנים, רב הנוקדים`; *ṯʿy* `שׁוֹעַ` as in 1.4
  VIII:49 (see Proposals).
- **Mourning** I:1–8 copied from 1.5 VI:17–25 in the feminine (*km* `כמו` where 1.5 has *k*); *ʿd šbʿ bk* `עד שָׂבְעָה בֶּכִי`;
  *bky* + object `בכתה אותו` (Gen 37:35); *qbr* `קָבַר`; *ḫrt ilm arṣ* `חוֹר אֵלֵי הארץ` (1.5's *ḫrt*); *gmn* `*קָרְבַּן*`
  (italic, by sense); the six animals *rumm* `ראמים`, *alpm* `בקר` (coordinator's decision), *ṣin* `צאן`, *aylm* `אַיָּלִים`,
  *yʿlm* `יְעֵלִים`, *yḥmrm* `יַחְמוּרִים` (Deut 14:5).
- **ʿAṯtar** I:43–65: *ʿṯtr ʿrẓ* `עַתְּתַר העריץ` (§1.1); *dq anm* `דַּק אוֹנִים` (the accepted *an*/*un* split, noted);
  *yrq* `*יָרִיק*`?; *ylḥn* `*יַרְוֶה*`; *pʿn* … *hdm*, *riš* … *aps* `אָפְסוֹ` (Deut 33:17); *rḥbt* `קַנְקַן` (1.4); *kknt*
  `צִנְצֶנֶת`.
- **The seizing** II:9–23: *ṣq* Š `הֵצִיק` [cognate]; *sin lpš* `בשולי לבוש`, *qṣ all* `בקצה האדרת`; *ḫsr* `חָסַר`; II:22–23
  copy 1.4 VIII:17–20 (`תִּקַּנְתִּיו … ככבש בפי, / כטלה בשִׁבְרוֹן …`); *šir* `שְׁאֵר` (vocalized), *ʿṣr* `צִפּוֹר`,
  *npr* `*פּוֹרְחִים*` (`עוֹף` reserved for *ʿp*).
- **El's dream** III: *ḏrt* `מַרְאֶה` (by sense; `חָזָה` is *ḥdy*'s), *ḥlm* `חֲלוֹם`, *mṭr* D `הִמְטִיר` (Exod 16:4), *nbt*
  `*נוֹפֶת*` (1.4 I:31); III:15–16 copy 1.4 IV:28–29 (without `וְכִירְכֵּר`, absent here).
- **The furrows** IV: *ʿn* (II) `מַעֲנָה` [cognate, Ps 129:3 Q]; *mḥrṯt* `חָרִישׁ`; *iy* `אַיֵּה` (Ps 42:4); *an l an*
  `אָן לְאָן`; *nġr* `נָצַר`; *šlm* `שָׁלוֹם`; *qbʿt* `קֻבַּעַת` (collision, Proposals); *šdy* `שָׁפַךְ` by sense.
- **Baal's return and Mot's** V: *ṣmd* (n.) `*קַרְדֹּם*`; *dkym* `*דכים*`? (meaning
  unclear: "the crushed"?); *ṣġr* `צעירים`; *šbʿ šnt* `בְּשֶׁבַע שנים` (2 Kgs 8:1); *kr* `*חָם*`?; *ṯb ap* `ישוב האף` (Hos 14:5); *ʾnš*
  `אָנַשׁ`; *kly* D `כִּלָּה`.
- **V:6** `על [נַחַת], על כֵּס שררתו.` differs from 1.3 IV:3 `מִנַּחַת, מִכֵּס שררתו.` on purpose: the same *l* means
  "from" when Yam is driven off the throne and "on" when Baal sits on it (the verifier's one listed difference; justified
  in the entry). VI:34 repeats V:6.
- **The fight** VI:16–22: *tʿ* N `הִתְגּוֹשֵׁשׁ`, *gmrm* `*אבירים*` (VI:6 too; `גִּבּוֹר` is *ġzr*'s), *ʿz* `עַז`, *ngḥ*
  `הִתְנַגַּח`, *nṯk* N `הִתְנַשֵּׁךְ`, *bṯnm* `פתנים` (§4.1), *mṣḫ* `נִגְרַר`, *lsmm* `רצים`, *ql* `נָפַל` (§6.3).
- **Šapšu's warning** VI:22–29: *ik* `אֵיךְ`; *nsʿ* `נָסַח` (`הִסִּיעַ` taken by *mšr* Š), *alt* `עַמּוּדִים`, *hpk* `הָפַךְ`,
  *ṯbr* `שָׁבַר`, *ḫṭ mṯpṭ* `שרביט משפט`; VI:30–31 echo 1.5 II:6–7 with Mot as subject; *ʿr* N `נֵעוֹר`; *yṯb* Š
  `יוֹשִׁיבוּהוּ`.
- **The hymn** VI:42–53: *lḥm* `סָעַד`, *trmt* `תְּרוּמָה` [cognate], *ḥbr* `חָבֵר`, *ḏʿt* `מוֹדַעַת` (Ruth 3:2), *ydy*
  (I) `*יַדֶּה*` "cast" (Lam 3:53), *tr* `*יָתוּר*`.

### Open decisions for the user

- VI:48 *mtm*: `מְתִים` "men" (renderings §5.4, DULAT) or `מֵתִים` "the dead" (the parallel with the Rephaim; many
  translators) – one vowel.
- I:48 *ydʿ ylḥn*: `יוֹדֵעַ, *יַרְוֶה*` ("who knows and moistens", DULAT) – the common alternative "one who knows and
  understands" (*lḥn* "be clever") is noted.
- V:9 *kr*: `*חָם*` "grew hot" against "returned" / "was sorrowful".
- VI:57 *ṯʿy*: title `שׁוֹעַ` (as in 1.4 VIII:49) against renderings §1.2's name-like `תַּעִי` (Proposals).

### Progress log

- Drafted in CUC order I → VI, each section written to the file and checked at once (`fill`, `verify 1.6`,
  `check_bible_quotes.py`); the checker caught 9 slips in the notes (a missing `אֶת` in Ezek 5:2, a hyphen in Ps 18:47,
  bare or Genesis-read references for Judg 14:17, Isa 14:13, Ps 104:18, Deut 25:5, Deut 14:5, Ruth 1:2, and three
  references I had not printed – Lam 3:53, Isa 50:4, 1 Sam 28:13 – printed and requoted or rewritten).
- Pass (a) fidelity: entries re-read against CUC; vocalized the gates (`אֵל`, `מוֹת`, `מֵת`, `צָפוֹן`, `דָּגָן`, `שָׁלוֹם`,
  first `עֲנָת`, `יְרָחִים`) and the ambiguous forms (`שְׁאֵר`, `בֶּכִי`, `כִּלּוּ`, `אָנַשְׁתִּי`, `רִצּוּי`, `מְתִים`).
- Pass (b) consistency: repeated passages inside the tablet (I:18–29; II:6–9 = 28–30; III:2–9 = 10–13, 20–21; IV:1–5 =
  12–16; V:11–19; VI:17–20) and with 1.3–1.5 compared; III:7 lost a stray `ו` so that it equals III:13; new Hebrew words
  grepped in every corpus (`grep --all`): `כברה` matches the Sumerian Hoe-and-Plough's sieve, `התגוששות` Enūma eliš's
  *tiṣbutu*, `חבר` Gilgameš's *tappû* – all compatible.
- Pass (c) Hebrew: the generated `translation-1.6.rtl.md` read through; one fix (I:39 lacked the opening `"` of the speech
  closed at I:43); no vav-consecutive.
- Final: `build`; `check_bible_quotes.py` on the three files 0 problems; `verify 1.6 --strict`: 245/245 entries, 0
  problems, 1 repeated-line difference (V:6 / 1.3 IV:3, justified).

### The text on its own terms

- **Grief as a fixed liturgy** (I:1–8): Anat repeats El's rites and cry word for word – mourning is a text one performs.
- **The mourners' feast reversed** (I:9–10): "she was sated with weeping, drank tears like wine" – grief described as a meal.
- **A god needs burial and offerings** (I:15–29): the dead Baal is buried in the earth's "hole" and given seventy of every
  beast, as a king's funeral.
- **The throne fits only its owner** (I:56–65): ʿAṯtar's feet do not reach the footstool – kingship as a matter of size; the
  failed god rules "in the earth", perhaps the god of irrigation (I:66–67).
- **Love as animal instinct** (II:6–9, 28–30): "like the heart of a cow for her calf, like the heart of a ewe for her lamb"
  – a goddess's longing pictured from the farmyard.
- **Death killed like grain** (II:31–37): split, winnowed, burnt, ground, sown – Mot is treated like the harvest, and the
  birds eat him; the agricultural year as a myth.
- **Knowledge by dream** (III:1–21): El learns from a dream of oil-rain and honey-wadis that Baal is alive – fertility is
  the sign of the god's life.
- **The sun sees everything** (IV; VI:22–53): Šapšu, who passes through the underworld each night, is the one sent to find
  Baal and the one who rules the Rephaim.
- **Cycles, not final victories** (V:7–9): "from days to months, from months to years – in the seventh year" Mot returns;
  death is defeated, not abolished.
- **Equal strength** (VI:16–22): "Mot is strong, Baal is strong" three times; the fight is decided not by force but by El's
  authority, voiced by Šapšu.
- **Fear changes sides** (VI:30–31): the words that described Baal's fear of Mot (1.5 II:6–7) now describe Mot's.
- **The scribe signs** (VI:54–58): the colophon names scribe, teacher, priestly office and king – the myth as a royal,
  temple-owned text.

### Key parallels

- II:32–35 ↔ Exod 32:20 `וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד אֲשֶׁר דָּק וַיִּזֶר עַל פְּנֵי הַמַּיִם` – three of Anat's verbs
  (burn, grind, winnow/scatter) are Moses' against the golden calf; destroying a god is a fixed sequence.
- VI:17 ↔ Song 8:6 `כִּי עַזָּה כַמָּוֶת אַהֲבָה` – "Mot is strong" is the strength of death the Song still knows.
- VI:51 ↔ Isa 27:1 `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` – the same phrase, *b ym … tnn*.
- VI:46 ↔ Isa 26:19, 14; Ps 88:11; Isa 14:9 – the `רְפָאִים`, the shades, even on thrones as dead kings.
- I:16 ↔ Gen 37:35 `וַיֵּבְךְּ אֹתוֹ אָבִיו` – "she wept him", the same verb with direct object, for the dead son/brother.
- IV:1 ↔ Ps 129:3 (`מַעֲנִיתָם`) – *ʿn* "furrow" is the Bible's `מַעֲנָה`.
- III:6–7 ↔ Joel 4:18; Job 20:17 – the land flowing with sweetness as the sign of restored blessing.
- V:20–21 ↔ Hos 14:5 `כִּי שָׁב אַפִּי מִמֶּנּוּ` – the same idiom, *ṯb ap*.
- V:8–9 ↔ 2 Kgs 8:1 (seven years of famine) – the seven-year cycle.
- I:54–62 ↔ Isa 14:12–13 – a star-god who would sit on the mount in the far north and falls to the earth.

### Lines shared with other tablets

- Copied: I:1–8 (= 1.5 VI:17–25 in the feminine); I:13 etc. (Šapšu's epithet, §6.6); I:32–38 (= 1.4 IV:20–26, §6.7, the
  journey to El and the obeisance §6.3); I:39, II:11, III:17 (§6.1); I:47, 49, 53 (the answer formulas §6.5); I:64
  (`מִכֵּס`, 1.3 IV:2–3 sense); I:65 (= 1.3 VI:25); II:19–20 (= 1.5 VI:6–7, 28–29); II:22–23 (= 1.4 VIII:17–20); II:24–25
  (= 1.4 VIII:21–24); III:4–5 (§6.6 El's epithets, 1.4 III:32); III:15–16 (= 1.4 IV:28–29); III:22–24, IV:6–11 (message
  formulas §6.4); IV:23 (*nġr*, 1.4 VIII:14); VI:30–31 (1.5 II:6–7 pattern, §6.6 *ydd il ġzr*); VI:51 (fixed line).
- Differences justified in the entries: V:6 / VI:34 `על` where 1.3 IV:3 has `מִ` (the meaning of *l*); I:4 `כמו` for *km*
  (1.5 *k* `כ`); III:16 initial `ו` (*w* in the text); III:15 without `וְכִירְכֵּר`.

### Proposals for the shared renderings

1. ***hm*** "if / or": 1.6 uses *hm* as "if" (III:2–3) where 1.5 rendered *hm* `אוֹ` (I:15, 18); both are DULAT senses – the
   renderings should list `אִם` / `אוֹ` as an accepted split by context.
2. ***qbʿt*** (IV:18) is the cognate of `קֻבַּעַת`, which 1.3 gave (italic) to *ridn*: give `קֻבַּעַת` to *qbʿt* and another
   word (`*גָּבִיעַ*`?) to *ridn*.
3. ***an*/*un***: `אוֹנִים` for both "strength" (I:50) and "mourning" (1.5 VI:15) – the accepted split, noted at I:50; record
   it in §10.
4. ***ṯʿy*** (VI:57): `שׁוֹעַ` (title, "noble"; 1.4 VIII:49) against §1.2's `תַּעִי`; one form for both tablets.
5. ***atn prln*** / ***yrgb bʿl ṯrmn***: §1.2's double names against CUC/DULAT's parse (*prln* "diviner"; "lord of Yrgb, lord
   of Ṯrmn"); kept §1.2, both parses in the notes.
6. ***ht*** "now" `עַתָּה` (I:39) against 1.4's `*פה*`? – one rendering.
7. ***ḫṯr*** `נָפָה` / ***kbrt*** `כְּבָרָה` (both "sieve"; kept apart, one word per lemma).
8. **New corpus rows**: *bqʿ* `בָּקַע`; *ḏry* `זָרָה`; *ṭḥn* `טָחַן`; *rḥm* `רֵחַיִם`; *ʿn* (II) `מַעֲנָה`; *mḥrṯt* `חָרִישׁ`;
   *iy* `אַיֵּה`; *an* "where" `אָן`; *gmn* `*קָרְבַּן*`; *yḥmr* `יַחְמוּר`; *yʿl* `יָעֵל`; *ṣṣ* `צִנְצֶנֶת`; *ṣq* Š `הֵצִיק`;
   *npr* `*פּוֹרֵחַ*`; *ḏrt* `מַרְאֶה`; *nbt* `נוֹפֶת`; *ṯb ap* `שָׁב אַף`; *ṣmd* (n.) `*קַרְדֹּם*`; *ngḥ* `הִתְנַגַּח`; *mṣḫ*
   `נִגְרַר`; *nsʿ* `נָסַח`; *trmt* `תְּרוּמָה`; *ḏʿt* `מוֹדַעַת`; *tġzyt* `רִצּוּי`; *ilny* `אֵלִי`; *lmd* `תַּלְמִיד`.
9. **VI:45–46 selftest**: no change (checked against CUC above).

### Lessons for the guidelines

- On machine-parsed tablets the parse can confuse a common noun with a divine name (*ʿn* "furrow" → *ʿnt*): check every
  name the parse proposes against DULAT before translating.
- A repeated formula with *l* is not one Hebrew line: *l* "from" / "on" changes with the verb (1.3 IV:3 / 1.6 V:6), so
  the verifier's repeated-line list needs a justification, not a copy.

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
| I:12 | bk rb . ʿẓm . ridn | ספל רב, עצום, *אגרטל* | `בְּסֵפֶל אַדִּירִים הִקְרִיבָה חֶמְאָה` (שופטים ה:כה) | equivalent | הספל של אורחים נכבדים. |
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
| IV:41 | št . alp . qdmh . mria . w tk | שת בקר לפניה, מְרִיא – ובתוך | `וַיִּזְבַּח שׁוֹר וּמְרִיא` (שמואל ב ו:יג) | equivalent | הצמד "שור ומריא" של הסעודה החגיגית. |
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
| V:3 | rbt . ilm . l ḥkmt | רַבּוֹתָ, אֵל, אכן חָכַמְתָּ; | `וַיֶּחְכַּם מִכָּל הָאָדָם` (מלכים א ה:יא) | equivalent | חכמת המלך. |
| V:4 | šbt . dqnk . l tsrk | שיבת זקנך אכן תְּיַסְּרֶךָּ, | `אַף-לֵילוֹת יִסְּרוּנִי כִלְיוֹתָי` (תהלים טז:ז) | cognate | *wsr* הוא `יִסֵּר` במובן "ללמד, להדריך". |
| V:6 | wn ap . ⸢ʿdn⸣ . mṭrh | ואף עִדַּן מטרו | `וְנָתַתִּי מְטַר אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ` (דברים יא:יד); `הַנֹּתֵן גֶּשֶׁם ויֹרֶה (יוֹרֶה) וּמַלְקוֹשׁ בְּעִתּוֹ` (ירמיהו ה:כד) | equivalent | הגשם בעתו. |
| V:8 | w tn . qlh . b ʿrpt | וְיִתֵּן קולו בעננים, | `וַיַּרְעֵם בַּשָּׁמַיִם יְהוָה וְעֶלְיוֹן יִתֵּן קֹלוֹ` (תהלים יח:יד); `נָתַן בְּקוֹלוֹ תָּמוּג אָרֶץ` (תהלים מו:ז) | cognate | "נתן קולו" הוא הרעם, באותן מלים בדיוק (*ytn ql* = `נָתַן קוֹל`); . |
| V:9 | šrh . l arṣ . brqm | *יַשְׁרֶה* לארץ ברקים. | `תַּחַת-כָּל-הַשָּׁמַיִם יִשְׁרֵהוּ; וְאוֹרוֹ עַל-כַּנְפוֹת הָאָרֶץ` (איוב לז:ג) | cognate | *šry* הוא `יִשְׁרֵהוּ` של איוב, שילוח הברק אל הארץ, באותו תיאור של סערה. |
| V:10 | {d}bt . arzm . ⸢ykll⸣nh | בית ארזים יִכְלְלֶנּוּ, | `רְאֵה נָא אָנֹכִי יוֹשֵׁב בְּבֵית אֲרָזִים; וַאֲרוֹן הָאֱלֹהִים יֹשֵׁב בְּתוֹךְ הַיְרִיעָה` (שמואל ב ז:ב); `לָמָּה לֹא בְנִיתֶם לִי בֵּית אֲרָזִים` (שמואל ב ז:ז) | cognate | "בית ארזים" (*bt arzm*) לאל, אותו צירוף |
| V:10 | {d}bt . arzm . ⸢ykll⸣nh | בית ארזים יִכְלְלֶנּוּ, | `בֹּנַיִךְ כָּלְלוּ יָפְיֵךְ` (יחזקאל כז:ד) | cognate | *kll* הוא `כָּלַל` של הבנאים. |
| V:11 | hm . bt . lbn⸢t⸣ . ⸢yʿ⸣msnh | או בית לבנים יַעְמְסֶנּוּ. | `וַיַּעֲמֹס אִישׁ עַל חֲמֹרוֹ` (בראשית מד:יג) | cognate | *ʿms* הוא `עָמַס`. |
| V:13 | ṣḥ . ḫrn . b bhmk | צְוַח אורחה לביתך, | `וְהִנֵּה אֹרְחַת יִשְׁמְעֵאלִים בָּאָה מִגִּלְעָד; וּגְמַלֵּיהֶם נֹשְׂאִים נְכֹאת וּצְרִי וָלֹט` (בראשית לז:כה) | equivalent | שיירת סוחרים טעונה סחורה. |
| V:14 | ʿḏbt . b qrb . hklk | עִזְבוֹנוֹת בקרב היכלך; | `בְּכֶסֶף בַּרְזֶל בְּדִיל וְעוֹפֶרֶת נָתְנוּ עִזְבוֹנָיִךְ` (יחזקאל כז:יב) | cognate | *ʿḏbt* הוא `עִזָּבוֹן`, הסחורה של צור במסחר הימי (ḏ = ז). |
| V:15 | tblk . ġrm . mid . ksp . | יובילו לך ההרים מְאוֹד כסף, | `וּבְכָל נַפְשְׁךָ וּבְכָל מְאֹדֶךָ` (דברים ו:ה) | cognate | `מְאֹד` כשם עצם, "שפע, כוח": *mid ksp* "מאוד של כסף". |
| V:16 | gbʿm . mḥmd . ḫrṣ | הגבעות – מחמד זהב; | `וְהָיָה כָּל מַחְמַד עֵינֶיךָ יָשִׂימוּ בְיָדָם` (מלכים א כ:ו) | cognate | *mḥmd* הוא `מַחְמָד`, הדבר היקר. |
| V:17 | yblk . udr . ilqṣm | יובילו לך אדר *אקדחים*. | `אֶדֶר הַיְקָר אֲשֶׁר יָקַרְתִּי מֵעֲלֵיהֶם` (זכריה יא:יג) | cognate | *udr* הוא `אֶדֶר` "פאר, שווי" |
| V:17 | yblk . udr . ilqṣm | יובילו לך אדר *אקדחים*. | `וּשְׁעָרַיִךְ לְאַבְנֵי אֶקְדָּח` (ישעיהו נד:יב) | equivalent | אבני חן בבניין עיר האל. |
| V:19 | bht . ṭhrm . iqnim | בית טוהר – ספירים. | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר וּכְעֶצֶם הַשָּׁמַיִם לָטֹהַר` (שמות כד:י) | cognate | "לבנת הספיר … לטוהר": אותו צירוף של לבנים (V:11, VI:35), לפיס לזולי (*iqnu*) וטוהר (*ṭhr*) במקום מושבו של האל. |
| V:26 | gh . w tṣḥ . tbšr bʿl | את קולה וצוחה: תִּתְבַּשֵּׂר, בעל! | `מַה נָּאווּ עַל הֶהָרִים רַגְלֵי מְבַשֵּׂר מַשְׁמִיעַ שָׁלוֹם … אֹמֵר לְצִיּוֹן מָלַךְ אֱלֹהָיִךְ` (ישעיהו נב:ז) | cognate | בשורה על מלכות האל, ההולכת על ההרים. |
| V:42 | w ṯb l mspr . . k tlakn | ושוב אל המִסְפָּר: כאשר שוּגְּרוּ | `וַיְהִי כִשְׁמֹעַ גִּדְעוֹן אֶת מִסְפַּר הַחֲלוֹם וְאֶת שִׁבְרוֹ` (שופטים ז:טו) | cognate | `מִסְפָּר` במובן "סיפור", כמו *mspr*. |
| V:47 | w yṯṯb . l ymn . aliyn | והוּשַׁב לימין האדיר | `נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי; עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | equivalent | הישיבה לימין המלך כמקום הכבוד. |
| V:55 | b tk . ṣrrt . ṣpn | בתוך פסגות צָפוֹן! | `הַר-צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג) | cognate | צָפוֹן כהר המלך האלוהי. |
| V:60 | bn . l ⸢r⸣kb . ʿrpt | הָבֵן, הוֹ רוכב העננים: | `וּבִין בַּדָּבָר וְהָבֵן בַּמַּרְאֶה` (דניאל ט:כג) | cognate | "הבן", אותו פועל בציווי. |
| V:61 | bl . ašt . urbt . b b⸢h⸣[tm] | בַּל אָשִׁית אֲרוּבָּה בב[ית], | `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא); `וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם וַאֲרֻבֹּת הַשָּׁמָיִם` (בראשית ח:ב) | cognate | *urbt* הוא `אֲרֻבָּה`, ובבראשית "ארובות השמים" שדרכן יורד הגשם. |
| V:62 | ḥln . b qrb . hklm | חלון בקרב ההיכל? | `וַיִּפְתַּח נֹחַ אֶת חַלּוֹן הַתֵּבָה אֲשֶׁר עָשָׂה` (בראשית ח:ו) | cognate | `חַלּוֹן` בבניין שנבנה בצו האל. |
| VI:18 | ⸢y⸣[tl]⸢k⸣ . l lbnn . w ʿṣh | הִתְ[הַלְּכוּ] אל לְבָנוֹן ועציו, | `וַיִּבֶן אֶת הַבַּיִת וַיְכַלֵּהוּ; וַיִּסְפֹּן אֶת הַבַּיִת גֵּבִים וּשְׂדֵרֹת בָּאֲרָזִים` (מלכים א ו:ט) | equivalent | בית אל הבנוי ארזי לבנון |
| VI:18 | ⸢y⸣[tl]⸢k⸣ . l lbnn . w ʿṣh | הִתְ[הַלְּכוּ] אל לְבָנוֹן ועציו, | `קוֹל יְהוָה שֹׁבֵר אֲרָזִים; וַיְשַׁבֵּר יְהוָה אֶת-אַרְזֵי הַלְּבָנוֹן` (תהלים כט:ה) | cognate |  |
| VI:19 | l [š]⸢r⸣yn . mḥmd . arzh | אל [שִׂ]רְיוֹן, מחמד ארזיו. | `וַיַּרְקִידֵם כְּמוֹ-עֵגֶל; לְבָנוֹן וְשִׂרְיֹן כְּמוֹ בֶן-רְאֵמִים` (תהלים כט:ו) | cognate | הצמד "לבנון // שריון" ואחריו הארזים (כט:ה): אותו צמד הרים של מזמור הרעם. |
| VI:23 | nb[l]at . b hklm | להבות בהיכל. | `קוֹל-יְהוָה חֹצֵב; לַהֲבוֹת אֵשׁ` (תהלים כט:ז) | equivalent | "להבות אש" במזמור הרעם. |
| VI:24 | hn . ⸢y⸣m . w ṯn . tikl | הִנֵּה יוֹם וְשֵׁנִי – אכלה | `וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם שֵׁנִי` (בראשית א:ח) | divergence | ספירת הימים בסיפור של בנייה ובריאה; כאן שישה ימים של אש בבית האל, ובבראשית שישה ימים של מעשה עולם (ראו VI:31–32). |
| VI:32 | ⸢b šbʿ⸣ [.] ⸢y⸣[mm] . td . išt | בַּ[יּוֹם] הַשְּׁבִיעִי נוּדְּתָה אש | `וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה; וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה` (בראשית ב:ב) | divergence | "ביום השביעי" נגמרת המלאכה: באוגרית האש כבתה והבית נגמר, בבראשית האל כלה את מלאכתו ושבת. |
| VI:34 | sb . ksp . l r⸢q⸣m . ḫrṣ | סָב הכסף לְרִיקּוּעִים, הזהב | `וְעָשׂוּ אֹתָם רִקֻּעֵי פַחִים צִפּוּי לַמִּזְבֵּחַ` (במדבר יז:ג); `וַיְרַקְּעוּ אֶת פַּחֵי הַזָּהָב` (שמות לט:ג) | equivalent | רקיעת מתכת לציפוי בבית האל. |
| VI:35 | nsb . l lbnt . šmḫ | נָסַב ללבנים. שמח | `כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר וּכְעֶצֶם הַשָּׁמַיִם לָטֹהַר` (שמות כד:י) | cognate | לבנים של חומר יקר במקום האל. |
| VI:36 | aliyn . bʿl . ⟨b⟩hty bnt | בעל האדיר: ⟨ב⟩יתי בניתי | `בָּנֹה בָנִיתִי בֵּית זְבֻל לָךְ מָכוֹן לְשִׁבְתְּךָ עוֹלָמִים` (מלכים א ח:יג) | cognate | "בניתי בית", דברי שלמה בחנוכת המקדש; כאן דברי האל עצמו בחנוכת ארמונו. |
| VI:42 | ria . il . ʿglm . d[t] | אֵל, עגלים בני | `וְעֵגֶל וָכֶבֶשׂ בְּנֵי שָׁנָה תְּמִימִם לְעֹלָה` (ויקרא ט:ג) | equivalent | "בני שנה". |
| VI:43 | šnt . imr . qmṣ . ⸢l⸣[l]im | שנה, כבשים לִקְמָצִים, ט[לא]ים. | `וַתַּעַשׂ הָאָרֶץ בְּשֶׁבַע שְׁנֵי הַשָּׂבָע לִקְמָצִים` (בראשית מא:מז) | cognate | *qmṣ* הוא `קֹמֶץ`, ו"לקמצים" פירושו בשפע. |
| VI:46 | šbʿm . bn . aṯr⸢t⸣ | (אל) שִׁבְעִים בְּנֵי אֲתִירַת. | `וַיְהִי כָּל נֶפֶשׁ יֹצְאֵי יֶרֶךְ יַעֲקֹב שִׁבְעִים נָפֶשׁ` (שמות א:ה); `יַצֵּב גְּבֻלֹת עַמִּים לְמִסְפַּר בְּנֵי יִשְׂרָאֵל` (דברים לב:ח) | equivalent | שבעים כמספר הבנים של האב ושל העמים; בראשית י מונה שבעים עמים. |
| VI:47 | špq ilm . krm . y⸢n⸣ | סִיפֵּק לאֵלִים כָּרִים – יין, | `עִם חֵלֶב כָּרִים וְאֵילִים בְּנֵי בָשָׁן` (דברים לב:יד) | cognate | *kr* הוא `כַּר`. |
| VI:54 | špq . ilht . dkr⸢t⸣ | סִיפֵּק לאֵלוֹת צַפָּחוֹת. | `וְאֶת צַפַּחַת הַמַּיִם` (שמואל א כו:יא) | equivalent | כלי הנוזלים. |
| VII:4 | y⸢m⸣ [xxxx .] ⸢l⸣ ẓr . qdqd⸢h⸣ | ים, […] על גו קדקדו; | `יָשׁוּב עֲמָלוֹ בְרֹאשׁוֹ; וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` (תהלים ז:יז) | cognate | "על קדקדו", המכה בראש האויב. |
| VII:17 | y⸢ptḥ⸣ . ḥln . b bht⸢m⸣ | יִפְתַּח חַלּוֹן בַּבַּיִת, | `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא); `וַיִּפְתַּח נֹחַ אֶת חַלּוֹן הַתֵּבָה` (בראשית ח:ו) | cognate | "פתח … חלון … ארובה": שלוש המלים של סיפור המבול, אצל נח ובשמים. |
| VII:18 | ⸢urb⸣t . b qrb . ⸢h⸣kl | אֲרוּבָּה בְּקֶרֶב הַהֵיכָל, | `אִם לֹא אֶפְתַּח לָכֶם אֵת אֲרֻבּוֹת הַשָּׁמַיִם וַהֲרִיקֹתִי לָכֶם בְּרָכָה עַד בְּלִי דָי` (מלאכי ג:י) | cognate | פתיחת הארובות כדי להוריד גשם וברכה. |
| VII:19 | m . w [y]⸢ptḥ⸣ . bdqt . ʿrpt | וְיִפְתַּח בֶּדֶק בָּעֲנָנִים | `וְהֵם יְחַזְּקוּ אֶת בֶּדֶק הַבַּיִת` (מלכים ב יב:ו) | cognate | `בֶּדֶק` "בקע, סדק" |
| VII:19 | m . w [y]⸢ptḥ⸣ . bdqt . ʿrpt | וְיִפְתַּח בֶּדֶק בָּעֲנָנִים | `הִנֵּה יְהוָה עֹשֶׂה אֲרֻבּוֹת בַּשָּׁמַיִם` (מלכים ב ז:ב) | equivalent | פתח בשמים לברכת שפע. |
| VII:29 | qlh . q⸢dš⸣ [.] b⸢ʿl⸣ [.] ⸢y⸣tn | קולו הקדוש בעל נתן, | `וַיַּרְעֵם בַּשָּׁמַיִם יְהוָה וְעֶלְיוֹן יִתֵּן קֹלוֹ` (תהלים יח:יד); `נָתַן בְּקוֹלוֹ תָּמוּג אָרֶץ` (תהלים מו:ז) | cognate | "נתן קולו" והארץ נמוגה: אותה תמונה ואותן מלים. |
| VII:30 | yṯny . bʿ⸢l⸣ . ṣ[at .] ⸢šp⸣th | שָׁנָה בעל מוֹ[צָא] שפתיו; | `בְּיוֹם שָׁמְעוֹ כָּל מוֹצָא שְׂפָתֶיהָ` (במדבר ל:יג) | cognate | "מוצא שפתיו", אותו צירוף בדיוק (*ṣat špt*). |
| VII:31 | qlh . ⸢q⸣[dš .] ⸢trr⸣ . ⸢ar⸣ṣ | קולו הק[דוש] הֵחִיל ארץ, | `קוֹל יְהוָה יָחִיל מִדְבָּר; יָחִיל יְהוָה מִדְבַּר קָדֵשׁ` (תהלים כט:ח) | equivalent | קול האל מחיל את הארץ. |
| VII:32 | ⸢ṣat⸣ . [šp]⸢th⸣ . ⸢ġrm⸣ [.] ⸢aḫšn⸣ | מוצא [שפ]תיו – הרים חָרְדוּ; | `וַיַּעַל עֲשָׁנוֹ כְּעֶשֶׁן הַכִּבְשָׁן וַיֶּחֱרַד כָּל הָהָר מְאֹד` (שמות יט:יח) | equivalent | ההר חרד בירידת האל. |
| VII:33 | rtq . [xxxxxxxx] | רֻתְּקוּ? […] | `וְכָל גְּדוֹלֶיהָ רֻתְּקוּ בַזִּקִּים` (נחום ג:י) | cognate | *rtq* הוא `רָתַק` "כבל". |
| VII:34 | qdmym . bmt . ⸢ar⸣[ṣ] | קַדְמוֹנִים; גַּבֵּי אר[ץ] | `וְדֹרֵךְ עַל בָּמֳתֵי אָרֶץ יְהוָה אֱלֹהֵי צְבָאוֹת שְׁמוֹ` (עמוס ד:יג); `וְיָרַד וְדָרַךְ עַל בָּמֳותֵי (בָּמֳתֵי) אָרֶץ` (מיכה א:ג) | cognate | *bmt arṣ* הוא `בָּמֳתֵי אָרֶץ`, הגבהים שהאל דורך עליהם בהופעתו. |
| VII:36 | yʿrm . šnu . hd . gpt | יערים, שונאי הדד – גַּפֵּי | `שָׁלְחָה נַעֲרֹתֶיהָ תִקְרָא עַל-גַּפֵּי מְרֹמֵי קָרֶת` (משלי ט:ג) | cognate | *gp* הוא `גַּף` "מרום, קצה". |
| VII:40 | ʿn . bʿl . qdm . ydh | עין בעל קִידְּמָה ידו, | `וּבַבֹּקֶר תְּפִלָּתִי תְקַדְּמֶךָּ` (תהלים פח:יד) | cognate | *qdm* הוא `קִדֵּם`. |
| VII:42 | bkm . yṯb . bʿl . l bhth | בְּכֵן ישב בעל בביתו: | `וּבְכֵן אָבוֹא אֶל הַמֶּלֶךְ` (אסתר ד:טז) | cognate | `בְּכֵן` "ואז". |
| VII:45 | dll . al . ilak . l bn | רָץ נא אשגר אל בן | `וְנִשְׁלוֹחַ סְפָרִים בְּיַד הָרָצִים` (אסתר ג:יג) | equivalent | הרצים, שליחי המלך. |
| VII:48 | b npšh . ystrn ydd | בנפשו, *יתגאה* הידיד | `אֲשֶׁר הִרְחִיב כִּשְׁאוֹל נַפְשׁוֹ וְהוּא כַמָּוֶת וְלֹא יִשְׂבָּע` (חבקוק ב:ה); `לָכֵן הִרְחִיבָה שְּׁאוֹל נַפְשָׁהּ וּפָעֲרָה פִיהָ לִבְלִי חֹק` (ישעיהו ה:יד) | cognate | הנפש (הגרון) של המוות שאינו שבע. |
| VII:50 | lk . ʿl . ilm . l ymru | על האֵלִים, אכן *יַמְרִיאוּ* | `וְעֵגֶל וּכְפִיר וּמְרִיא יַחְדָּו` (ישעיהו יא:ו) | cognate | *mrʾ* הוא שורש `מְרִיא`. |
| VII:55 | [ʿmm .] ⸢y⸣m . bn . ẓlmt . r | [*עמומי*] יום, בני צַלְמָוֶת, | `גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע` (תהלים כג:ד) | cognate | *ẓlmt* הוא `צַלְמָוֶת`. |
| VIII:4 | ʿm . tlm . ġṣr . arṣ | אל שני התלים, סְפַר הארץ; | `וַיְהִי מוֹשָׁבָם מִמֵּשָׁא בֹּאֲכָה סְפָרָה הַר הַקֶּדֶם` (בראשית י:ל) | equivalent | `סְפָר` "קצה, גבול" עם "הר". |
| VIII:7 | w rd . bt ḫpṯt | ורדו (אל) בית הַחָפְשִׁית – | `וַיֵּשֶׁב בְּבֵית הַחָפְשִׁית` (מלכים ב טו:ה) | cognate | "בית החפשית", הבית המבודד של המלך המצורע |
| VIII:7 | w rd . bt ḫpṯt | ורדו (אל) בית הַחָפְשִׁית – | `בַּמֵּתִים חָפְשִׁי` (תהלים פח:ו) | cognate | "חפשי" בין המתים. |
| VIII:9 | ⸢r⸣dm . arṣ | ביורדי הארץ. | `נֶחְשַׁבְתִּי עִם-יוֹרְדֵי בוֹר` (תהלים פח:ה) | equivalent | "נמנה עם יורדי בור" |
| VIII:9 | ⸢r⸣dm . arṣ | ביורדי הארץ. | `וּתְמִימִים כְּיוֹרְדֵי בוֹר` (משלי א:יב) | equivalent |  |
| VIII:14 | nḥ⸢l⸣th . w nġr | נחלתו. וְהִנָּצְרוּ, | `בְּהַר נַחֲלָתְךָ מָכוֹן לְשִׁבְתְּךָ פָּעַלְתָּ יְהוָה` (שמות טו:יז) | cognate | "שבת … נחלה": אותו צמד של מושב האל. |
| VIII:16 | tqrb . l bn . ilm | תקרבו אל בן אֵלִים, | `אַל תִּקְרַב הֲלֹם; שַׁל נְעָלֶיךָ מֵעַל רַגְלֶיךָ` (שמות ג:ה) | cognate | "אל תקרב" אל מקום האל. |
| VIII:18 | k imr . b ph | ככבש בפיו, | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | divergence | באוגרית המוות בולע את הכל; בישעיהו ה' בולע את המוות. |
| VIII:19 | k lli . b ṯbr⸢n⸣ | כטלה בשִׁבְרוֹן | `בְּשִׁבְרוֹן מָתְנַיִם וּבִמְרִירוּת תֵּאָנַח` (יחזקאל כא:יא) | cognate | *ṯbrn* הוא `שִׁבְרוֹן`. |
| VIII:32 | i⸢l⸣ . ⸢ġzr⸣ . tḥm | אֵל, הגיבור: דבר | `יְדִיד יְהוָה יִשְׁכֹּן לָבֶטַח עָלָיו` (דברים לג:יב) | cognate | "ידיד ה'", אותו תואר. |
| VIII:49 | [spr . ilmlk . ṯ]⸢ʿy⸣ . nqmd . mlk . ugrt | [סופר: אִלִימִלְכּוּ, שׁוֹעַ] נִקְמַדּוּ, מלך אוּגָרִית. | `וּלְכִילַי לֹא יֵאָמֵר שׁוֹעַ` (ישעיהו לב:ה) | cognate | *ṯʿy* הוא `שׁוֹעַ` "נכבד, אציל" (ṯ = ש). |

### Parallels index (KTU 1.5)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:1 | k tmḫṣ . ltn . bṯn . brḥ | כאשר מָחַצְתָּ את לִיתָן, הפתן הבָּרִחַ, | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | cognate | אותו שם (*ltn* = `לִוְיָתָן`) ואותו תואר (`בָּרִחַ`), אבל שם העצם שונה: באוגרית *bṯn* = `פֶּתֶן`, בישעיהו `נָחָשׁ` |
| I:1 | k tmḫṣ . ltn . bṯn . brḥ | כאשר מָחַצְתָּ את לִיתָן, הפתן הבָּרִחַ, | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | divergence | ובזמן: אצל מוֹת המחיצה היא מעשה שעבר ("כאשר מחצת"), ובישעיהו `יִפְקֹד` – הבטחה לאחרית הימים. |
| I:1 | k tmḫṣ . ltn . bṯn . brḥ | כאשר מָחַצְתָּ את לִיתָן, הפתן הבָּרִחַ, | `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | cognate | ניצחון שעבר על ליויתן רב־הראשים, כמו כאן. |
| I:2 | tkly . bṯn . ʿqltn . {š} | כִּלִּיתָ את הפתן העקלתון, | `וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | cognate | `עֲקַלָּתוֹן` הוא אותו תואר, ואין לו עוד מקבילה במקרא. |
| I:3 | šlyṭ . d . šbʿt . rašm | השליט אשר לו שבעה ראשים – | `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | equivalent | לליויתן "ראשים", ברבים. |
| I:4 | tṯkḥ . ttrp . šmm . krs | יִצָּרְבוּ, יִתְרַפּוּ השמים כִּמְזַח | `וְיִרְכְּסוּ אֶת הַחֹשֶׁן מִטַּבְּעֹתָו אֶל טַבְּעֹת הָאֵפוֹד` (שמות כח:כח) | cognate | *rks* "לקשור, חגורה" ו־*ipd* (השורה הבאה) הם שתי המלים של הפסוק: הרכיסה של החושן אל האפוד. כאן "מזח האפוד" הוא דימוי לשמים הנרפים. |
| I:4 | tṯkḥ . ttrp . šmm . krs | יִצָּרְבוּ, יִתְרַפּוּ השמים כִּמְזַח | `שׁוֹפֵךְ בּוּז עַל-נְדִיבִים וּמְזִיחַ אֲפִיקִים רִפָּה` (איוב יב:כא) | equivalent | אותה תמונה במקרא: האל "מרפה" את החגורה (`מְזִיחַ`) של החזקים; כאן השמים עצמם נרפים כחגורה מותרת. |
| I:5 | ipdk . ank . ispi . uṭm | אֵפוֹדְךָ – אנוכי אֶטְרוֹף (אותך) זְרָתוֹת, | `זֶרֶת אָרְכּוֹ וְזֶרֶת רָחְבּוֹ` (שמות כח:טז) | cognate | *uṭ* היא מידת `זֶרֶת` |
| I:5 | ipdk . ank . ispi . uṭm | אֵפוֹדְךָ – אנוכי אֶטְרוֹף (אותך) זְרָתוֹת, | `וְחֵשֶׁב אֲפֻדָּתוֹ` (שמות כח:ח) | cognate | האפוד והחשב שלו. *ipd* האוגריתי הוא בגד עליון של אל, כמו `אֵפוֹד בָּד` של דוד ושמואל, ולא דווקא בגד הכהן הגדול. |
| I:7 | b npš . bn ilm . mt . b mh | בנפש בן אֵלִים, מוֹת, בְּמַהֲמוֹרַת | `בְּמַהֲמֹרוֹת בַּל-יָקוּמוּ` (תהלים קמ:יא) | cognate | *mhmrt* הוא `מַהֲמֹרוֹת`, הבורות העמוקים שמהם לא קמים |
| I:7 | b npš . bn ilm . mt . b mh | בנפש בן אֵלִים, מוֹת, בְּמַהֲמוֹרַת | `לָכֵן הִרְחִיבָה שְּׁאוֹל נַפְשָׁהּ וּפָעֲרָה פִיהָ לִבְלִי חֹק` (ישעיהו ה:יד) | cognate | ה"נפש" של השאול היא גרונה הפעור, כמו *npš* של מוֹת. |
| I:8 | mrt . ydd . il . ġzr | ידיד אֵל, הגיבור. | `יְדִיד יְהוָה יִשְׁכֹּן לָבֶטַח עָלָיו` (דברים לג:יב) | cognate | "ידיד" של האל, אותו תואר. |
| I:11 | mrym . ṣpn . w yʿn | מרומי צָפוֹן. וענו | `הַר צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג) | cognate | הר האל "בירכתי צפון". |
| I:14 | ⸢ġzr⸣ . ⸢p n⸣p{.}š . npš . lbi⸢m⸣ | הגיבור: ונפש(י) – נפש לְבִיא | `אֲשֶׁר הִרְחִיב כִּשְׁאוֹל נַפְשׁוֹ וְהוּא כַמָּוֶת וְלֹא יִשְׂבָּע` (חבקוק ב:ה) | cognate | ה"נפש" הרחבה של המוות שאינו שבע: אותה מלה ואותו דימוי |
| I:14 | ⸢ġzr⸣ . ⸢p n⸣p{.}š . npš . lbi⸢m⸣ | הגיבור: ונפש(י) – נפש לְבִיא | `שְׁאוֹל … אֶרֶץ לֹא-שָׂבְעָה מַּיִם` (משלי ל:טז) | cognate | השאול בין הארבע שלא תשבענה. |
| I:15 | thw . hm . brlt . anḫr | תֹּהוּ, אוֹ תַּאֲוַת *דּוֹלְפִין* | `וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | cognate | *thw* הוא `תֹהוּ`, והוא עומד כאן במקביל ל"ים" (I:16): תֹּהוּ ויָם, כמו תֹהוּ ותְהוֹם בבראשית. |
| I:15 | thw . hm . brlt . anḫr | תֹּהוּ, אוֹ תַּאֲוַת *דּוֹלְפִין* | `וּבְתֹהוּ יְלֵל יְשִׁמֹן` (דברים לב:י); `יַעֲלוּ בַתֹּהוּ וְיֹאבֵדוּ` (איוב ו:יח) | cognate | `תֹּהוּ` במובן המדבר השומם, מקום הרעב והצמא, כמו כאן. |
| I:17 | rumm . ʿn . kḏd . aylt | ראמים, עין – כעדר אַיָּלוֹת; | `כְּאַיָּל תַּעֲרֹג עַל-אֲפִיקֵי-מָיִם כֵּן נַפְשִׁי תַעֲרֹג אֵלֶיךָ אֱלֹהִים` (תהלים מב:ב) | equivalent | אותו דימוי, ואף אותה מלה, `נַפְשִׁי`: הצמא של האיילה למים כמשל לכיסופי ה"נפש". בתהלים הנפש כוספת לאל, וכאן ה"נפש" היא תאוות המוות. (קאסוטו כבר העיר על ההקבלה.) |
| I:18 | hm . imt . ⸢i⸣mt . npš . blt | אוֹ – אֱמֶת, אֱמֶת – נפש(י) בִּלְּתָה | `לְבַלּוֹת שְׁאוֹל` (תהלים מט:טו); `מָוֶת יִרְעֵם` (תהלים מט:טו) | cognate | אותו פועל, *bly* = `בִּלָּה`, והנושא שלו בתהלים הוא השאול: השאול מכלה את צורתם של המתים. באותו פסוק  – המוות רועה אותם. |
| I:19 | ḥmr . ⸢p⸣ i⸢m⸣t . b kl⸢at⸣ | חֹמֶר; ואמת, בשתי | `וַיִּצְבְּרוּ אֹתָם חֳמָרִם חֳמָרִם` (שמות ח:י) | cognate | `חֹמֶר` כ"ערמה", במכת הצפרדעים. |
| I:21 | ⸢y⸣dt⸢y⸣ . ⸢b⸣ ṣʿ . hm . ⸢k⸣s . ymsk | יְדוֹתַי בקערה, אוֹ כוס ימסוך | `וַתֵּרֶב מַשְׂאַת בִּנְיָמִן מִמַּשְׂאֹת כֻּלָּם חָמֵשׁ יָדוֹת` (בראשית מג:לד) | cognate | `יָדוֹת` במובן "מנות, חלקים" בסעודה: המשאת של בנימין חמש "ידות", והמנות של מוֹת – שבע. |
| I:23 | aḫ⸢y⸣ . ⸢qra⸣n . h⸢d⸣ . ʿm . aryy | אחיי; קְרָאֵנִי, הַדַּד, עם קרוביי; | `כְּמִסְפַּד הֲדַדְרִמּוֹן בְּבִקְעַת מְגִדּוֹן` (זכריה יב:יא) | cognate | הדד, שמו של בעל, נשמר במקרא בשמו של האל הארמי ובמספד עליו. |
| I:25 | w št⸢p⸣ . ʿm . a⸢ḫ⸣[y] . yn | וְשָׁתוֹ עם אח[יי] יין. | `אָכוֹל וְשָׁתוֹ כִּי מָחָר נָמוּת` (ישעיהו כב:יג) | equivalent | אותו צמד מקורות מוחלטים, "אכול ושתו", ובצל המוות; כאן המוות עצמו הוא שדורש לאכול ולשתות. |
| I:26 | ⸢p⸣ nšt . bʿl . [ṭ]ʿn . iṭʿnk | ונשכחתי, בעל? דָּקוֹר אֶדְקָרְךָ! | `לְבֻשׁ הֲרֻגִים מְטֹעֲנֵי חָרֶב יוֹרְדֵי אֶל אַבְנֵי בוֹר` (ישעיהו יד:יט) | cognate | *ṭʿn* הוא `טָעַן` "לדקור", והמקרא משתמש בו בדיוק בהקשר הזה: מלך שנפל, "מטוענֵי חרב", היורדים אל בור. |
| II:2 | [špt . l a]⸢r⸣ṣ . špt . l šmm | [שפה לא]רץ, שפה לשמים, | `שַׁתּוּ בַשָּׁמַיִם פִּיהֶם וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` (תהלים עג:ט) | equivalent | אותו דימוי של פה משמים לארץ, ואף הצמד "פה … לשון"; בתהלים אלה הרשעים המתגאים, כאן המוות. |
| II:2 | [špt . l a]⸢r⸣ṣ . špt . l šmm | [שפה לא]רץ, שפה לשמים, | `לָכֵן הִרְחִיבָה שְּׁאוֹל נַפְשָׁהּ וּפָעֲרָה פִיהָ לִבְלִי חֹק` (ישעיהו ה:יד) | equivalent | הפה הפעור של השאול. |
| II:3 | [yšt .] ⸢l⸣šn . l kbkbm . yʿrb | [ישית] לשון לכוכבים. ייכנס | `וּלְשׁוֹנָם תִּהֲלַךְ בָּאָרֶץ` (תהלים עג:ט) | cognate | ראו II:2. |
| II:5 | k ḥrr . zt . ybl . arṣ . w pr | כִּי נִחַר הזית, יבול הארץ, ופרי | `וְנָתַתִּי גִשְׁמֵיכֶם בְּעִתָּם וְנָתְנָה הָאָרֶץ יְבוּלָהּ וְעֵץ הַשָּׂדֶה יִתֵּן פִּרְיוֹ` (ויקרא כו:ד) | cognate | אותו צמד, "יבול הארץ" ו"פרי העץ", ושניהם תלויים בגשם; כאן – בהיעדרו. |
| II:5 | k ḥrr . zt . ybl . arṣ . w pr | כִּי נִחַר הזית, יבול הארץ, ופרי | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת יְבוּלָהּ` (דברים יא:יז) | cognate | המטר שנעצר והיבול שאינו בא: התמונה שכאן. |
| II:5 | k ḥrr . zt . ybl . arṣ . w pr | כִּי נִחַר הזית, יבול הארץ, ופרי | `וְעַצְמוֹתַי כְּמוֹקֵד נִחָרוּ` (תהלים קב:ד) | cognate | `נִחַר` "נחרך". |
| II:6 | ʿṣm . yraun . aliyn . bʿl | העצים. יָרֵא אותו בעל האדיר, | `אַל תִּירָא כִּי עִמְּךָ אָנִי אַל תִּשְׁתָּע כִּי אֲנִי אֱלֹהֶיךָ` (ישעיהו מא:י) | cognate | אותו צמד פעלים, `יָרֵא` // `שָׁתַע` (II:6–7), ובאותו סדר; בישעיהו האל אומר "אל תירא, אל תשתע", ובאוגרית האל עצמו ירא ושותע. |
| II:7 | ṯtʿ{.}nn . rkb . ʿrpt | שָׁתַע מפניו רוכב העננים. | `אַל תִּשְׁתָּע` (ישעיהו מא:י) | cognate | ראו II:6. |
| II:12 | ʿbdk . an . w d {š}ʿlmk | עבדך אני, ושל עולמך! | `וְהָיָה לְךָ עֶבֶד עוֹלָם` (דברים טו:יז) | cognate | "עבד עולם", העבד שבחר להישאר לעולם |
| II:12 | ʿbdk . an . w d {š}ʿlmk | עבדך אני, ושל עולמך! | `וַעֲבָדוֹ לְעֹלָם` (שמות כא:ו) | cognate | אותו דין |
| II:12 | ʿbdk . an . w d {š}ʿlmk | עבדך אני, ושל עולמך! | `הֲיִכְרֹת בְּרִית עִמָּךְ תִּקָּחֶנּוּ לְעֶבֶד עוֹלָם` (איוב מ:כח) | cognate | **ליויתן** כ"עבד עולם": האל שואל את איוב אם ליויתן ייכנע לו לעולם. כאן מנצח ליתן (I:1) הוא שנעשה "עבד עולם" – למוות. |
| II:12 | ʿbdk . an . w d {š}ʿlmk | עבדך אני, ושל עולמך! | `וְהָיָה לִי לְעֶבֶד עוֹלָם` (שמואל א כז:יב) | cognate |  |
| II:16 | ṯbt⟨h⟩ . ḫḫ . arṣ . nḥlth . tša | שִׁבְתּ⟨וֹ⟩, חַח – ארץ נחלתו. נשאו | `בְּהַר נַחֲלָתְךָ מָכוֹן לְשִׁבְתְּךָ` (שמות טו:יז) | cognate | "שבת" ו"נחלה" של האל, אותו צמד; כאן – בבוץ של המוות. |
| II:24 | [xxxxxxxx]lt . qẓb | […]… קְצָב? | `מִקֶּטֶב יָשׁוּד צָהֳרָיִם` (תהלים צא:ו); `וְקֶטֶב מְרִירִי` (דברים לב:כד) | equivalent | שד המגפה `קֶטֶב`, אחד מבני הלוויה של המוות (); הקשר בין *qẓb* ל`קֶטֶב` אינו קשר צלילי סדיר. |
| III:10 | ydd . b qr[b] | ידיד – בקר[ב]. | `יְדִיד יְהוָה` (דברים לג:יב) | cognate | התואר `יְדִיד`. |
| III:12 | ahpkk . l . ⸢ḥ⸣ | אֶהְפָּכְךָ לְ… | `וְהָפַכְתִּי חַגֵּיכֶם לְאֵבֶל` (עמוס ח:י) | cognate | "הפך ל־", כמו כאן (אם *l* היא מלת היחס). |
| III:16 | šgr . mu[d] | שֶׁגֶר מְא[וֹד], | `שְׁגַר אֲלָפֶיךָ וְעַשְׁתְּרֹת צֹאנֶךָ` (דברים ז:יג) | cognate | *šgr* הוא `שֶׁגֶר`, ולדות הבקר, וכאן כמו שם – לצד הצאן (III:22–23). |
| IV:7 | i . ap . bʿ[l] | אֵי, אַף, בַּע[ל]? | `אֵי הֶבֶל אָחִיךָ` (בראשית ד:ט) | cognate | `אֵי` "איפה", אותה מלה. |
| IV:9 | ynpʿ . b⸢ʿ⸣[l] | *יוֹפִיעַ*? בע[ל]… | — | — | [cognate?] `הוֹפִיעַ מֵהַר פָּארָן` (דברים לג:ב) – *ypʿ* הוא שורש `הוֹפִיעַ`, הופעת האל הסוער; כאן בספק. |
| IV:21 | tʿl . tr⸢ṯ⸣ | עלה תירוש, | `וְרֹב דָּגָן וְתִירֹשׁ` (בראשית כז:כח) | cognate | *trṯ* הוא `תִּירוֹשׁ`, אחד משלושת פירות הארץ המבורכת. |
| IV:27 | niṣ . ⸢px⸣ | נוֹאֵץ … | `עַד אָנָה יְנַאֲצֻנִי הָעָם הַזֶּה` (במדבר יד:יא) | cognate | *nʾṣ* הוא `נָאַץ`. |
| V:3 | [xxxxxxx .] ⸢y⸣mnk . ššrt | […] ימינך, שַׁרְשֶׁרֶת | `וּשְׁתֵּי שַׁרְשְׁרֹת זָהָב טָהוֹר` (שמות כח:יד) | cognate | *ššrt* היא `שַׁרְשֶׁרֶת`, ושוב בפרשת בגדי הכהן, כמו *ipd* ו*rks* (I:4–5); אוצר המלים של לבוש וקישוט מכובד אחד בשתי הספרויות. |
| V:5 | [xxx b]⸢n⸣k . ašt {.} n . b ḫrt | [… בְּ]נְךָ אֲשִׁיתֶנּוּ בְּחוֹר | `וְשִׁעֲשַׁע יוֹנֵק עַל חֻר פָּתֶן` (ישעיהו יא:ח) | cognate | *ḫrt* מאותו שורש של `חֹר`, חור באדמה. |
| V:6 | ilm . arṣ . w at . qḥ | אֵלֵי הארץ. ואַתָּה – קח | `קוּם קַח אֶת אִשְׁתְּךָ וְאֶת שְׁתֵּי בְנֹתֶיךָ הַנִּמְצָאֹת` (בראשית יט:טו) | cognate | קאסוטו כבר העיר: אותה נוסחת ציווי, "קח … ואת בנותיך", לפני יציאה מן העולם המוכר |
| V:6 | ilm . arṣ . w at . qḥ | אֵלֵי הארץ. ואַתָּה – קח | `קוּם קַח אֶת אִשְׁתְּךָ וְאֶת שְׁתֵּי בְנֹתֶיךָ הַנִּמְצָאֹת` (בראשית יט:טו) | divergence | לוט יוצא מן העיר החרבה אל החיים, בעל יורד עם בנותיו אל המוות. |
| V:7 | ʿrptk . rḥk . mdlk | ענניך, רוחך, *חֲזִיזְךָ*, | `יְהוָה עֹשֶׂה חֲזִיזִים וּמְטַר גֶּשֶׁם יִתֵּן לָהֶם` (זכריה י:א) | equivalent | העננים־הברקים והמטר, צרכי הגשם של בעל, בידי ה' במקרא. |
| V:8 | mṭrtk . ʿmk . šbʿt | מִטְרוֹתֶיךָ; עמך שבעת | `וְגֶשֶׁם מָטָר וְגֶשֶׁם מִטְרוֹת עֻזּוֹ` (איוב לז:ו) | cognate | הצורה הנקבית `מִטְרוֹת` של *mṭrt* |
| V:8 | mṭrtk . ʿmk . šbʿt | מִטְרוֹתֶיךָ; עמך שבעת | `אִם יִהְיֶה הַשָּׁנִים הָאֵלֶּה טַל וּמָטָר כִּי אִם לְפִי דְבָרִי` (מלכים א יז:א) | equivalent | אליהו עוצר את הטל והמטר בממלכה העובדת את הבעל; כאן הבעל עצמו מוריד את מטרותיו ואת בתו טַלַּי (V:11) אל המוות |
| V:8 | mṭrtk . ʿmk . šbʿt | מִטְרוֹתֶיךָ; עמך שבעת | `וַיִּכָּלֵא הַגֶּשֶׁם מִן הַשָּׁמָיִם` (בראשית ח:ב) | divergence | גם שם הגשם נעצר, אבל בצו האל, בסוף המבול ולא בתחילת הבצורת. |
| V:15 | bt ḫpṯt . arṣ . t⸢sp⸣r . b y | (אל) בית הַחָפְשִׁית – הארץ; תִּסָּפֵר | `וַיֵּשֶׁב בְּבֵית הַחָפְשִׁית` (מלכים ב טו:ה) | cognate | "בית החפשית", הבית המבודד של המלך המצורע |
| V:15 | bt ḫpṯt . arṣ . t⸢sp⸣r . b y | (אל) בית הַחָפְשִׁית – הארץ; תִּסָּפֵר | `בַּמֵּתִים חָפְשִׁי` (תהלים פח:ו) | cognate |  |
| V:16 | rdm . arṣ . w t⸢dʿ⸣ . ⸢i⸣l⸢m⸣ | ביורדי הארץ, ויֵדְעוּ אֵלִים | `נֶחְשַׁבְתִּי עִם-יוֹרְדֵי בוֹר` (תהלים פח:ה) | equivalent | "נחשב עם יורדי בור", כמו "תיספר ביורדי הארץ". |
| V:18 | yuhb . ʿglt . b dbr . prt | אָהַב עגלה בְּדֶבֶר, פרה | `לְפָנָיו יֵלֶךְ דָּבֶר וְיֵצֵא רֶשֶׁף לְרַגְלָיו` (חבקוק ג:ה) | cognate | *dbr* הוא `דֶּבֶר`, ובחבקוק הוא הולך לפני האל יחד עם רשף |
| V:18 | yuhb . ʿglt . b dbr . prt | אָהַב עגלה בְּדֶבֶר, פרה | `כְּעֵדֶר בְּתוֹךְ הַדָּבְרוֹ` (מיכה ב:יב) | cognate | הקרוב האחר, `דֹּבֶר` "מרעה" (אם *dbr* כאן "מרעה", כרבים מפרשים) |
| V:18 | yuhb . ʿglt . b dbr . prt | אָהַב עגלה בְּדֶבֶר, פרה | `לוּלֵא חֲרַשְׁתֶּם בְּעֶגְלָתִי` (שופטים יד:יח) | cognate | העגלה כדימוי לאשה, בפי שמשון. |
| V:20 | ⸢ʿm⸣nh . šbʿ . l šbʿm | עמה שבע לשבעים, | `וְלֶמֶךְ שִׁבְעִים וְשִׁבְעָה` (בראשית ד:כד) | equivalent | אותו מספר, 77, כמידה של "הרבה מאוד"; כאן מספר הפעמים. |
| V:24 | i⸢p⸣[d . xxxx .] ⸢u⸣lh . mġẓ | אֵפ[וֹד …] *אוּלוֹ* – שַׁי, | `וּבָרִיא אוּלָם` (תהלים עג:ד) | cognate | `אוּל` "כוח, גוף" (מלה נדירה במקרא). |
| VI:9 | rṣ . mt . aliyn . bʿl | לָאָרֶץ: "מֵת בעל האדיר! | `אָכֵן כְּאָדָם תְּמוּתוּן וּכְאַחַד הַשָּׂרִים תִּפֹּלוּ` (תהלים פב:ז) | equivalent | אלים שמתים ונופלים: "מת … נפל"; בתהלים זה גזר דין על בני עליון, כאן – מותו של אל הגשם בטבע. |
| VI:9 | rṣ . mt . aliyn . bʿl | לָאָרֶץ: "מֵת בעל האדיר! | `אֵיךְ נָפְלוּ גִבּוֹרִים` (שמואל ב א:יט) | equivalent | "נפל" של גיבור בקינה. |
| VI:12 | d pi⸢d⸣ . ⸢yr⸣d . l ksi . ⸢y⸣ṯb | רחב־הלב, ירד מן הכיסא, ישב | `וַיָּקָם מִכִּסְאוֹ וַיַּעֲבֵר אַדַּרְתּוֹ מֵעָלָיו וַיְכַס שַׂק וַיֵּשֶׁב עַל הָאֵפֶר` (יונה ג:ו) | equivalent | מלך נינוה: קם מכיסאו, מתכסה בשק ויושב על האפר – אותו סדר של טקס אבל מלכותי |
| VI:12 | d pi⸢d⸣ . ⸢yr⸣d . l ksi . ⸢y⸣ṯb | רחב־הלב, ירד מן הכיסא, ישב | `וְיָרְדוּ מֵעַל כִּסְאוֹתָם כֹּל נְשִׂיאֵי הַיָּם … עַל הָאָרֶץ יֵשֵׁבוּ` (יחזקאל כו:טז) | equivalent | "ירדו מכסאותם … על הארץ ישבו", כמעט מילה במילה |
| VI:12 | d pi⸢d⸣ . ⸢yr⸣d . l ksi . ⸢y⸣ṯb | רחב־הלב, ירד מן הכיסא, ישב | `רְדִי וּשְׁבִי עַל עָפָר … שְׁבִי לָאָרֶץ אֵין כִּסֵּא` (ישעיהו מז:א) | equivalent |  |
| VI:13 | l hd⸢m⸣ . ⸢w l⸣ . hdm . yṯb | על ההדום, ומן ההדום ישב | `עַד אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | cognate | `הֲדֹם`, הדום המלכות. |
| VI:14 | l ar⸢ṣm⸣ . ⸢yṣ⸣q . ʿmr | על הארץ; יצק אֵפֶר | `וַיֵּשְׁבוּ אִתּוֹ לָאָרֶץ שִׁבְעַת יָמִים` (איוב ב:יג) | equivalent | הישיבה על הארץ באבל |
| VI:14 | l ar⸢ṣm⸣ . ⸢yṣ⸣q . ʿmr | על הארץ; יצק אֵפֶר | `וַיֵּשֶׁב עַל הָאֵפֶר` (יונה ג:ו) | equivalent |  |
| VI:15 | un . ⸢l ri⸣šh . ʿpr . plṯt | אוֹנִים על ראשו, עפר הִתְפַּלְּשׁוּת | `לֹא אָכַלְתִּי בְאֹנִי מִמֶּנּוּ … וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד) | cognate | *un* הוא `אֹנִי`, ה"אוֹן" של האבל, ובפסוק עצמו האבל והמת |
| VI:15 | un . ⸢l ri⸣šh . ʿpr . plṯt | אוֹנִים על ראשו, עפר הִתְפַּלְּשׁוּת | `כְּלֶחֶם אוֹנִים לָהֶם` (הושע ט:ד) | cognate | "לחם אונים", לחם האבלים |
| VI:15 | un . ⸢l ri⸣šh . ʿpr . plṯt | אוֹנִים על ראשו, עפר הִתְפַּלְּשׁוּת | `וְיַעֲלוּ עָפָר עַל רָאשֵׁיהֶם בָּאֵפֶר יִתְפַּלָּשׁוּ` (יחזקאל כז:ל) | cognate | עפר על הראש והתפלשות באפר, אותו צמד ובאותו סדר |
| VI:15 | un . ⸢l ri⸣šh . ʿpr . plṯt | אוֹנִים על ראשו, עפר הִתְפַּלְּשׁוּת | `חִגְרִי שָׂק וְהִתְפַּלְּשִׁי בָאֵפֶר אֵבֶל יָחִיד עֲשִׂי לָךְ` (ירמיהו ו:כו) | cognate | התפלשות באפר באבל על "יחיד" |
| VI:15 | un . ⸢l ri⸣šh . ʿpr . plṯt | אוֹנִים על ראשו, עפר הִתְפַּלְּשׁוּת | `בְּבֵית לְעַפְרָה עָפָר` (מיכה א:י) | cognate | ובקרי: "עָפָר הִתְפַּלָּשִׁי". |
| VI:16 | l . qdq⸢dh⸣ . lpš . yks | על קדקדו; לבוש כִּסָּה, | `וַיְכַס שַׂק` (יונה ג:ו) | equivalent | "כיסה (עצמו) שק", אותו פועל. |
| VI:17 | mizrtm . ġr . b abn | אֵזוֹר; עור באבן | `וַיָּשֶׂם שַׂק בְּמָתְנָיו וַיִּתְאַבֵּל עַל בְּנוֹ יָמִים רַבִּים` (בראשית לז:לד) | equivalent | יעקב שם שק על מתניו – בגד האבל של המתניים, כמו ה*mizrtm* |
| VI:17 | mizrtm . ġr . b abn | אֵזוֹר; עור באבן | `וּבִבְשָׂרָם לֹא יִשְׂרְטוּ שָׂרָטֶת` (ויקרא כא:ה) | equivalent | הפגיעה בעור באבל; התורה אוסרת אותה, ואֵל עושה אותה בצור. |
| VI:18 | ydy . psltm . b yʿ⸢r⸣ | גרד, *מַחְלְפוֹת* בתער; | `וַיִּקַּח לוֹ חֶרֶשׂ לְהִתְגָּרֵד בּוֹ וְהוּא יֹשֵׁב בְּתוֹךְ הָאֵפֶר` (איוב ב:ח) | equivalent | גירוד העור בחרס בישיבה באפר – אותה תמונה |
| VI:18 | ydy . psltm . b yʿ⸢r⸣ | גרד, *מַחְלְפוֹת* בתער; | `תַּעַר לֹא יַעֲבֹר עַל רֹאשׁוֹ` (במדבר ו:ה) | cognate | *yʿr* הוא `תַּעַר` |
| VI:18 | ydy . psltm . b yʿ⸢r⸣ | גרד, *מַחְלְפוֹת* בתער; | `לֹא תַקִּפוּ פְּאַת רֹאשְׁכֶם וְלֹא תַשְׁחִית אֵת פְּאַת זְקָנֶךָ` (ויקרא יט:כז) | equivalent | אם *psltm* הן צמות השיער, גזיזתן בתער היא בדיוק מה שהתורה אוסרת (`פְּאַת רֹאשְׁכֶם`) |
| VI:18 | ydy . psltm . b yʿ⸢r⸣ | גרד, *מַחְלְפוֹת* בתער; | `שֶׁבַע מַחְלְפוֹת רֹאשִׁי` (שופטים טז:יג) | cognate | `מַחְלְפוֹת` של שמשון, הצמות. |
| VI:19 | yhdy . lḥm . w ⸢dq⸣n | פצע לְחָיַיִם וְזָקָן, | `וּפְאַת זְקָנָם לֹא יְגַלֵּחוּ וּבִבְשָׂרָם לֹא יִשְׂרְטוּ שָׂרָטֶת` (ויקרא כא:ה) | equivalent | הזקן והבשר |
| VI:19 | yhdy . lḥm . w ⸢dq⸣n | פצע לְחָיַיִם וְזָקָן, | `כִּי כָל רֹאשׁ קָרְחָה וְכָל זָקָן גְּרֻעָה עַל כָּל יָדַיִם גְּדֻדֹת וְעַל מָתְנַיִם שָׂק` (ירמיהו מח:לז) | equivalent | כל טקס האבל בפסוק אחד: הזקן, הפצעים בידיים (`גְּדֻדֹת`) והשק על המתניים |
| VI:19 | yhdy . lḥm . w ⸢dq⸣n | פצע לְחָיַיִם וְזָקָן, | `לֹא תִתְגֹּדְדוּ וְלֹא תָשִׂימוּ קָרְחָה בֵּין עֵינֵיכֶם לָמֵת` (דברים יד:א) | equivalent |  |
| VI:19 | yhdy . lḥm . w ⸢dq⸣n | פצע לְחָיַיִם וְזָקָן, | `וַיִּתְגֹּדְדוּ כְּמִשְׁפָּטָם בַּחֲרָבוֹת וּבָרְמָחִים עַד שְׁפָךְ דָּם עֲלֵיהֶם` (מלכים א יח:כח) | equivalent | נביאי הבעל בכרמל "מתגודדים כמשפטם": אותו מנהג, בפולחן אותו אל. |
| VI:20 | yṯlṯ . qn . ḏrʿ⸢h⸣ [.] yḥrṯ | שִׁלֵּשׁ את קנה זרועו; חָרַשׁ | `וְאֶזְרֹעִי מִקָּנָה תִשָּׁבֵר` (איוב לא:כב) | cognate | `קָנֶה` של הזרוע, אותו צירוף |
| VI:20 | yṯlṯ . qn . ḏrʿ⸢h⸣ [.] yḥrṯ | שִׁלֵּשׁ את קנה זרועו; חָרַשׁ | `וַיֹּאמֶר שְׁנוּ וַיִּשְׁנוּ וַיֹּאמֶר שַׁלֵּשׁוּ וַיְשַׁלֵּשׁוּ` (מלכים א יח:לד) | cognate | `שִׁלֵּשׁ` "עשה פעם שלישית", בסיפור הכרמל. |
| VI:21 | k gn . ap lb . k ʿmq . yṯl⸢ṯ⸣ | כגן את אַף הלב, כעמק שִׁלֵּשׁ | `כְּמִסְפַּד הֲדַדְרִמּוֹן בְּבִקְעַת מְגִדּוֹן` (זכריה יב:יא) | cognate | המספד על הדד (= בעל) בבקעה: המקרא זוכר את האבל על האל הזה |
| VI:21 | k gn . ap lb . k ʿmq . yṯl⸢ṯ⸣ | כגן את אַף הלב, כעמק שִׁלֵּשׁ | `וְהִבִּיטוּ אֵלַי אֵת אֲשֶׁר דָּקָרוּ וְסָפְדוּ עָלָיו כְּמִסְפֵּד עַל הַיָּחִיד` (זכריה יב:י) | equivalent |  |
| VI:23 | bʿl . mt . my . lim . bn | "בעל מֵת! מִי לאום בן | `מִי פֶשַׁע יַעֲקֹב הֲלוֹא שֹׁמְרוֹן` (מיכה א:ה) | cognate | `מִי` במובן "מה", כמו *my* כאן. |
| VI:25 | bʿl . ard . b arṣ . ap | בעל אֵרֵד בארץ!" אַף | `כִּי אֵרֵד אֶל בְּנִי אָבֵל שְׁאֹלָה` (בראשית לז:לה) | equivalent | יעקב על יוסף: אותה מלה, `אֵרֵד`, ואותה תמונה – האב שמבקש לרדת אחרי בנו אל המתים (קאסוטו כבר העיר) |
| VI:25 | bʿl . ard . b arṣ . ap | בעל אֵרֵד בארץ!" אַף | `כִּי אֵרֵד אֶל בְּנִי אָבֵל שְׁאֹלָה` (בראשית לז:לה) | absent | בבראשית `שְׁאֹלָה`, וכאן *arṣ* "הארץ": המלה `שְׁאוֹל` אינה ידועה באוגריתית (§5.1). |

### Parallels index (KTU 1.6)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:3 | thdy . lḥm . w dqn . ⸢t⸣[ṯ]⸢l⸣[ṯ] | פצעה לְחָיַיִם וְזָקָן, [שִׁלְּשָׁה] | `לֹא תִתְגֹּדְדוּ וְלֹא תָשִׂימוּ קָרְחָה בֵּין עֵינֵיכֶם לָמֵת` (דברים יד:א) | equivalent | ראו 1.5 VI:19. |
| I:5 | ap lb . k ʿmq . tṯlṯ . bmt | את אַף הלב, כעמק שִׁלְּשָׁה את הגב. | `לְמַעֲנִותָם` (תהלים קכט:ג) | equivalent | `עַל-גַּבִּי חָרְשׁוּ חֹרְשִׁים הֶאֱרִיכוּ` – לשון הכתיב בספר:  – "על גבי חרשו חורשים": אותה תמונה, הגב כשדה חרוש; שם – הייסורים שבאו על ישראל. |
| I:9 | ilm . špš . ʿd . tšbʿ . bk | האֵלִים, שַׁפְּשׁ. עד שָׂבְעָה בֶּכִי, | `הֶאֱכַלְתָּם לֶחֶם דִּמְעָה וַתַּשְׁקֵמוֹ בִּדְמָעוֹת שָׁלִישׁ` (תהלים פ:ו); `הָיְתָה-לִּי דִמְעָתִי לֶחֶם יוֹמָם וָלָיְלָה` (תהלים מב:ד) | equivalent | הבכי כמאכל והדמעות כמשקה (קאסוטו). |
| I:16 | b ṣrrt . ṣp{ʿ}n . tbkynh | בפסגות צָפוֹן; בכתה אותו | `וַיֵּבְךְּ אֹתוֹ אָבִיו` (בראשית לז:לה) | cognate | "בכה אותו", אותו פועל עם מושא ישיר, על הבן המת שהאב רוצה לרדת אחריו שאולה (השווה 1.5 VI:25). |
| I:26 | [tṭbḫ . š]⸢b⸣ʿm . yʿlm | [טבחה ש]בעים יְעֵלִים | `הָרִים הַגְּבֹהִים לַיְּעֵלִים` (תהלים קד:יח) | cognate | `יָעֵל`, עז ההרים. |
| I:28 | [tṭbḫ . šbʿm . y]⸢ḥ⸣mrm | [טבחה שבעים] יַחְמוּרִים | `אַיָּל וּצְבִי וְיַחְמוּר` (דברים יד:ה) | cognate | שלושה מן המינים כאן (אייל, יעל?, יחמור) הם מן החיות הטהורות של התורה. |
| I:31 | [kd .] ⸢ġ⸣zrh . ⸢y⸣bm . l ilm . | [כַּד?] גבורו, יָבָם לאֵלִים. | `יְבָמָהּ יָבֹא עָלֶיהָ` (דברים כה:ה) | cognate | *ybm* הוא `יָבָם`. |
| I:48 | b⸢l⸣ . nmlk . ydʿ . yl⸢ḥn⸣ | בַּל נַמְלִיךְ יוֹדֵעַ, *יַרְוֶה*? | `כִּי אִם הִרְוָה אֶת הָאָרֶץ וְהוֹלִידָהּ וְהִצְמִיחָהּ` (ישעיהו נה:י) | equivalent | הגשם "מרווה" את הארץ; אתירת מבקשת מלך שיידע להשקות את הארץ, כבעל. |
| I:50 | d . dq . anm . l yr⸢q⸣ | דַּק אוֹנִים לא *יָרִיק* | `וּלְאֵין אוֹנִים עָצְמָה יַרְבֶּה` (ישעיהו מ:כט) | cognate | `אוֹנִים` "כוח", אותו שם |
| I:50 | d . dq . anm . l yr⸢q⸣ | דַּק אוֹנִים לא *יָרִיק* | `וְהָרֵק חֲנִית וּסְגֹר לִקְרַאת רֹדְפָי` (תהלים לה:ג) | equivalent | "להריק חנית" בקרב. |
| I:51 | ʿm . bʿl . l yʿdb . mrḥ | עם בעל, לא יְתַקֵּן רוֹמַח | `וַיִּתְגֹּדְדוּ כְּמִשְׁפָּטָם בַּחֲרָבוֹת וּבָרְמָחִים` (מלכים א יח:כח) | cognate | `רֹמַח`, וכאן הרומח של בעל. |
| I:54 | blt . nmlk . ʿṯtr . ʿrẓ | בַּל נַמְלִיךְ את עַתְּתַר העריץ? | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | equivalent | אל אסטרלי שמבקש לשבת על כס הר הצפון ואינו מגיע אליו: |
| I:54 | blt . nmlk . ʿṯtr . ʿrẓ | בַּל נַמְלִיךְ את עַתְּתַר העריץ? | `וְאֵשֵׁב בְּהַר מוֹעֵד בְּיַרְכְּתֵי צָפוֹן` (ישעיהו יד:יג) | divergence | בישעיהו "הילל בן שחר" מבקש לשבת על הר הצפון ומופל; כאן עתתר יורד מן הכס מרצונו. |
| I:61 | apsh . w yʿn . ⸢ʿ⸣ṯtr . ʿrẓ | (אל) אָפְסוֹ. וענה עַתְּתַר העריץ: | `יַחְדָּו אַפְסֵי אָרֶץ` (דברים לג:יז) | cognate | `אֶפֶס` "קצה". |
| II:10 | b sin . lpš . tšṣq⸢n⸣[h] | בשולי לבוש הֱצִיקַ[תְהוּ], | `כִּי הֱצִיקַתְהוּ` (שופטים יד:יז) | cognate | דלילה "הציקה" לשמשון; *ṣq* Š הוא `הֵצִיק`, כאן במובן הגופני "לחץ, אחז בחוזקה". |
| II:22 | ʿdbnn ank . imr . b py | תִּקַּנְתִּיו אנוכי (כ)כבש בפי, | `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | divergence | המוות הבולע; ראו 1.4 VIII:18. |
| II:26 | ym . ymm . yʿtqn . l ymm | יום, ימים חלפו; לימים | `יְחַיֵּנוּ מִיֹּמָיִם בַּיּוֹם הַשְּׁלִישִׁי יְקִמֵנוּ` (הושע ו:ב) | equivalent | מניין הימים עד שהמת קם; כאן ימים וחודשים עוברים עד שענת פוגעת במוֹת. |
| II:27 | l yr⸢ḫ⸣m . rḥm . ʿnt . tngṯh | לִירָחִים. רַחַם ענת חיפשה אותו; | `רַחַם רַחֲמָתַיִם לְרֹאשׁ גֶּבֶר` (שופטים ה:ל) | cognate | `רַחַם` במובן "נערה", כמו התואר של ענת כאן. |
| II:32 | ⸢t⸣bqʿnn . b ḫṯr . tdry | בקעה אותו; בנפה זֵרְתָה – | `וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד אֲשֶׁר דָּק וַיִּזֶר עַל פְּנֵי הַמַּיִם` (שמות לב:כ) | cognate | משה עושה בעגל הזהב שלושה מחמשת הפעלים של ענת, באותם שורשים (שרף, טחן, זרה) |
| II:32 | ⸢t⸣bqʿnn . b ḫṯr . tdry | בקעה אותו; בנפה זֵרְתָה – | `וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד אֲשֶׁר דָּק וַיִּזֶר עַל פְּנֵי הַמַּיִם` (שמות לב:כ) | divergence | ענת גם בוקעת וזורעת, ונותנת לציפורים; משה משקה את העפר לבני ישראל. |
| II:32 | ⸢t⸣bqʿnn . b ḫṯr . tdry | בקעה אותו; בנפה זֵרְתָה – | `שְׁלִשִׁית בָּאוּר תַּבְעִיר … אֶת הַשְּׁלִשִׁית תַּכֶּה בַחֶרֶב … וְהַשְּׁלִשִׁית תִּזְרֶה לָרוּחַ` (יחזקאל ה:ב) | equivalent | אש, חרב וזרייה, באותו סדר כמעט. |
| II:34 | b rḥm . tṭḥnn . b šd | ברֵחַיִם טחנה אותו; בשדה | `וַיִּטְחַן עַד אֲשֶׁר דָּק` (שמות לב:כ) | cognate |  |
| II:35 | tdrʿnn . širh . l tikl | זרעה אותו. שְׁאֵרוֹ אכן אכלו | `כָּלָה שְׁאֵרִי וּלְבָבִי` (תהלים עג:כו) | cognate | `שְׁאֵר` "בשר". |
| III:4 | b ḥlm . lṭpn . il . d pid | בחלום האדיב, אֵל רחב־הלב, | `וַיֹּאמֶר אֱלֹהִים לְיִשְׂרָאֵל בְּמַרְאֹת הַלַּיְלָה` (בראשית מו:ב) | equivalent | "חלום" ו"מראה" לילה כצמד. |
| III:6 | šmm . š⸢m⸣n . tmṭrn | השמים שמן ימטירו, | `הִנְנִי מַמְטִיר לָכֶם לֶחֶם מִן הַשָּׁמָיִם` (שמות טז:ד) | cognate | `הִמְטִיר` משמים דבר שאינו מים: שם לחם, כאן שמן. |
| III:7 | nḫlm . tlk . nbtm | הנחלים ילכו *נוֹפֶת*. | `וְכָל אֲפִיקֵי יְהוּדָה יֵלְכוּ מָיִם` (יואל ד:יח) | equivalent | אותו פועל, `הָלַךְ`, לנחלים זורמים, ובחזון השפע של אחרית הימים |
| III:7 | nḫlm . tlk . nbtm | הנחלים ילכו *נוֹפֶת*. | `אַל-יֵרֶא בִפְלַגּוֹת נַהֲרֵי נַחֲלֵי דְּבַשׁ וְחֶמְאָה` (איוב כ:יז) | equivalent | נחלי דבש. |
| III:19 | w tnḫ . b irty . npš | ותנוח בחיקי נפש, | `שׁוּבִי נַפְשִׁי לִמְנוּחָיְכִי` (תהלים קטז:ז) | equivalent | מנוחת הנפש. |
| III:20 | k ḥ⸢y⸣ . al⸢iy⸣n . bʿl | כי חי בעל האדיר, | `חַי-יְהוָה וּבָרוּךְ צוּרִי` (תהלים יח:מז) | cognate | "חי ה'": אותה קריאה על האל החי, `חַי`. |
| IV:1 | pl . ʿnt . šdm . y špš | נסדקו מענות השדות, הוֹ שַׁפְּשׁ! | `לְמַעֲנִיתָם` (תהלים קכט:ג) | cognate | `עַל-גַּבִּי חָרְשׁוּ חֹרְשִׁים הֶאֱרִיכוּ` – וכן הקרי  – `מַעֲנָה`, התלם, מאותו שורש |
| IV:1 | pl . ʿnt . šdm . y špš | נסדקו מענות השדות, הוֹ שַׁפְּשׁ! | `כִּי זֶה שְׁנָתַיִם הָרָעָב בְּקֶרֶב הָאָרֶץ וְעוֹד חָמֵשׁ שָׁנִים אֲשֶׁר אֵין חָרִישׁ וְקָצִיר` (בראשית מה:ו) | equivalent | ארץ בלי חריש בשנות הבצורת. |
| IV:4 | ⸢i⸣y . aliyn . bʿl | אַיֵּה בעל האדיר? | `בֶּאֱמֹר אֵלַי כָּל-הַיּוֹם אַיֵּה אֱלֹהֶיךָ` (תהלים מב:ד) | cognate | "איה אלוהיך?" – השאלה על האל הנעדר. |
| IV:11 | hwt . lṭpn . ḥtk⸢k⸣ | אמרת האדיב, מְחוֹלְלֵךְ: | `צוּר יְלָדְךָ תֶּשִׁי וַתִּשְׁכַּח אֵל מְחֹלְלֶךָ` (דברים לב:יח) | equivalent | "אל מחוללך", האל המוליד. |
| IV:18 | šd yn . ʿn . b . q⸢bʿt⸣ . ⸢t⸣ | שִׁפְכִי יין … בקֻבַּעַת … | `אֶת קֻבַּעַת כּוֹס הַתַּרְעֵלָה שָׁתִית מָצִית` (ישעיהו נא:יז) | cognate | *qbʿt* הוא `קֻבַּעַת`. |
| V:5 | ⸢p y⸣[ṯb….] ⸢b⸣ʿl . l ksi . mlkh | ו[ישב …] בעל על כיסא מלכותו, | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | cognate | "כסא ממלכתו". |
| V:9 | šnt . ⸢w kr⸣ . ⸢b⸣n . ⸢il⸣m . mt | שנים – *חָם* בן אֵלִים, מוֹת, | `כִּי קָרָא יְהוָה לָרָעָב וְגַם בָּא אֶל הָאָרֶץ שֶׁבַע שָׁנִים` (מלכים ב ח:א) | equivalent | שבע שנות בצורת |
| V:9 | šnt . ⸢w kr⸣ . ⸢b⸣n . ⸢il⸣m . mt | שנים – *חָם* בן אֵלִים, מוֹת, | `וְקָמוּ שֶׁבַע שְׁנֵי רָעָב` (בראשית מא:ל) | equivalent |  |
| V:16 | m . ʿ[lk] . ⸢pht⸣ [. dr]⸢y⸣ . ⸢b k⸣brt | ע[ליך] ראיתי [זרי]יה בכברה; | `כַּאֲשֶׁר יִנּוֹעַ בַּכְּבָרָה` (עמוס ט:ט) | cognate | *kbrt* היא `כְּבָרָה`. |
| V:20 | ⸢b⸣ . ⸢a⸣ḫ⸢k⸣ . ⸢ispa⸣ . w yṯ⸢b⸣ | מאחיך, ואטרוף, ויָשׁוּב | `כִּי שָׁב אַפִּי מִמֶּנּוּ` (הושע יד:ה) | cognate | "שב אפי": אותו צירוף, *ṯb* + *ap* (V:21), הכעס ששב ונרגע. |
| VI:17 | ⸢m⸣t . ʿz . bʿl . ʿz . yngḥn | מוֹת עז, בעל עז; התנגחו | `כִּי עַזָּה כַמָּוֶת אַהֲבָה קָשָׁה כִשְׁאוֹל קִנְאָה` (שיר השירים ח:ו) | cognate | "עזה כמוות": המוות הוא מידת העוז, כמו "מוֹת עז" כאן |
| VI:17 | ⸢m⸣t . ʿz . bʿl . ʿz . yngḥn | מוֹת עז, בעל עז; התנגחו | `וּבְעֵת קֵץ יִתְנַגַּח עִמּוֹ מֶלֶךְ הַנֶּגֶב` (דניאל יא:מ) | cognate | `הִתְנַגַּח`, אותו שורש בבניין ההדדי |
| VI:17 | ⸢m⸣t . ʿz . bʿl . ʿz . yngḥn | מוֹת עז, בעל עז; התנגחו | `וְכִי יִגַּח שׁוֹר` (שמות כא:כח) | cognate |  |
| VI:18 | k rumm . mt . ʿz . bʿl | כראמים. מוֹת עז, בעל | `וְקַרְנֵי רְאֵם קַרְנָיו בָּהֶם עַמִּים יְנַגַּח` (דברים לג:יז) | cognate | הראם הנוגח, אותה תמונה ואותו פועל. |
| VI:19 | ʿz . ynṯkn . k bṯnm | עז; התנשכו כפתנים. | `יְהִי דָן נָחָשׁ עֲלֵי דֶרֶךְ שְׁפִיפֹן עֲלֵי אֹרַח הַנֹּשֵׁךְ עִקְּבֵי סוּס` (בראשית מט:יז) | cognate | הנחש הנושך (קאסוטו: "מסורת ספרותית", נשיכה ונחש בצמד) |
| VI:19 | ʿz . ynṯkn . k bṯnm | עז; התנשכו כפתנים. | `יְהִי דָן נָחָשׁ עֲלֵי דֶרֶךְ שְׁפִיפֹן עֲלֵי אֹרַח הַנֹּשֵׁךְ עִקְּבֵי סוּס` (בראשית מט:יז) | divergence | קאסוטו מתרגם "כנחשים" – אבל *bṯn* הוא `פֶּתֶן` (§4.1). |
| VI:28 | ṯbtk . l yhpk . k⸢sa⸣ . mlkk | שִׁבְתְּךָ, אכן יהפוך כיסא מלכותך, | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | equivalent | כיסא ממלכה שנכון לעולם; כאן איום להפוך אותו. |
| VI:37 | ⸢dr⸣[d]⸢r⸣ . h⸢n⸣ | דור [ד]ור. הנה | `וּבָנִיתִי לְדֹר-וָדוֹר כִּסְאֲךָ סֶלָה` (תהלים פט:ה) | equivalent | כיסא "לדור ודור". |
| VI:43 | [ši]⸢r⸣ . ṭry . ap . l tlḥm | [שְׁאֵ]ר טָרִי – אף אכן תסעדי; | `וַיִּמְצָא לְחִי חֲמוֹר טְרִיָּה` (שופטים טו:טו) | cognate | `טָרִי`. |
| VI:44 | ⸢lḥ⸣m . trmmt . l tšt | לחם תרומה, אכן תשתי | `וְיִקְחוּ לִי תְּרוּמָה` (שמות כה:ב) | cognate | *trmt* היא `תְּרוּמָה`, מן השורש "רום": מה שמורם לאל. |
| VI:46 | rpim . tḥtk | הָרְפָאִים תַּחְתַּיִךְ; | `יִחְיוּ מֵתֶיךָ … וָאָרֶץ רְפָאִים תַּפִּיל` (ישעיהו כו:יט); `מֵתִים בַּל יִחְיוּ רְפָאִים בַּל יָקֻמוּ` (ישעיהו כו:יד); `אִם-רְפָאִים יָקוּמוּ יוֹדוּךָ סֶּלָה` (תהלים פח:יא); `עוֹרֵר לְךָ רְפָאִים … הֵקִים מִכִּסְאוֹתָם כֹּל מַלְכֵי גוֹיִם` (ישעיהו יד:ט) | cognate | ה`רְפָאִים`, צללי המתים, ובישעיהו יד:ט אף בכסאות, כמלכים מתים. |
| VI:48 | ʿdk . ilm . hn . mtm | עָדַיִךְ אֵלִים, הִנֵּה מְתִים; | `יְחִי רְאוּבֵן וְאַל יָמֹת וִיהִי מְתָיו מִסְפָּר` (דברים לג:ו) | cognate | `מְתִים` "אנשים". |
| VI:50 | w ḫss . dʿtk | וְחַסִּיס – מוֹדַעְתֵּךְ. | `הֲלֹא בֹעַז מֹדַעְתָּנוּ` (רות ג:ב) | cognate | `מוֹדַעַת` "קרוב, מכר". |
| VI:51 | b . ym . arš . w tnn | בַּיָּם – אַרְשׁ וְהַתַּנִּין; | `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) | cognate | "התנין אשר בים": אותו צירוף בדיוק, *b ym … tnn* |
| VI:51 | b . ym . arš . w tnn | בַּיָּם – אַרְשׁ וְהַתַּנִּין; | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | cognate |  |
| VI:51 | b . ym . arš . w tnn | בַּיָּם – אַרְשׁ וְהַתַּנִּין; | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | בבראשית התנינים נבראים ביום החמישי, כאן התנין חי בים כיריב שכּוֹתַר מגרש. |
| VI:52 | kṯr . w ḫss . yd | כּוֹתַר־וְחַסִּיס *יַדֶּה*, | `וַיַּדּוּ אֶבֶן בִּי` (איכה ג:נג) | cognate | אותו פועל, "השליכו". |
| VI:55 | lmd . atn . prln . rb . | תלמיד אַתְנוּ־פּוּרְלִנִּי, רב | `לְשׁוֹן לִמּוּדִים` (ישעיהו נ:ד) | cognate | *lmd* "תלמיד" = `לִמּוּד`, "מי שלומד". |
| VI:56 | khnm rb . ⸢n⸣q⸢d⸣m | הכוהנים, רב הנוקדים; | `דִּבְרֵי עָמוֹס אֲשֶׁר הָיָה בַנֹּקְדִים מִתְּקוֹעַ` (עמוס א:א); `וּמֵישַׁע מֶלֶךְ מוֹאָב הָיָה נֹקֵד` (מלכים ב ג:ד) | cognate | `נֹקֵד`, בעל צאן גדול (ולא רועה פשוט). |
| VI:57 | ṯʿy . nqmd . mlk ug⸢rt⸣ | שׁוֹעַ נִקְמַדּוּ, מלך אוּגָרִית, | `וּלְכִילַי לֹא יֵאָמֵר שׁוֹעַ` (ישעיהו לב:ה) | cognate | *ṯʿy* = `שׁוֹעַ`. |

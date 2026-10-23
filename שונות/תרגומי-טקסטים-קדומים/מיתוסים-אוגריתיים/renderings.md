# Renderings – the Ugaritic corpus (`מיתוסים-אוגריתיים/`)

Fixed by the coordinator of Round 4 run 1 (2026-10-23) **before the first translated line**, as guidelines §5 step 4 and
§5.2 ★ require. **Binding for every translator** of this corpus. A translator who finds a row wrong proposes a change
(with the reason) in the "Proposals" section of the project's `project.md`; the coordinator decides and records the
change in §10 here. The verifier (`ugarit_tools.py verify`) enforces §5 (reserved and gated words, traps) and §6–§7
(formulas, fixed lines); `ugarit_tools.py gates` prints the lists the script uses, and `selftest` runs §9.

Ugaritic is the closest language to Hebrew this folder has translated: most content words have a Hebrew cognate.
That makes **echo control (guidelines §6.4) the main danger in both directions**:
- a cognate rendered by a synonym hides a real echo (`פֶּתֶן` for *bṯn*, `אֲרוּבָּה` for *urbt*, `מַלְאָךְ` for *mlak*);
- a cognate rendered by the cognate where the meaning differs manufactures one (*nšm* "people" is not `נְשָׁמָה`; *ʿrb*
  "enter" is not `עֶרֶב`; *ʿnn* "attendant" is not `עָנָן`; *zbl* "prince" is not the `זְבֻל` "lofty house").

**The rule for this corpus:** choose by meaning first; among equally good renderings take the cognate; where the cognate's
Hebrew meaning differs, take the meaning word and name the cognate in the apparatus. **One Ugaritic lemma = one Hebrew
word** through the whole corpus (★), and the Hebrew word of every key Bible comparison is reserved for its real
counterpart (§5).

---

## 1. Names

**Principle.** Gods and places are transcribed from the Ugaritic, with the standard reconstructed vocalization **without
the case ending** (as English *Baal, Anat, Athirat, Yam, Mot, Kothar*), in Hebrew letters, vocalized at the first
occurrence in each file (and always where §5.3 says so). Where the Ugaritic qatl-noun becomes a Hebrew segolate, the
segolate form is used (`בַּעַל`, `רֶשֶׁף`, `שַׁחַר`). **Deities are never assimilated to their biblical form** (guidelines
§6.4): where the Bible's form differs by a sound shift or by a polemical vocalization, the Ugaritic form stands
(`אֲתִירַת`, not `אֲשֵׁרָה`; `עַתְּתַרְת`, not `עַשְׁתֹּרֶת`; `דָּגָן`, not `דָּגוֹן`; `כּוֹתַר`, not `כּוֹשָׁר`); where the name is the
same word in both languages (`בַּעַל`, `עֲנָת`, `אֵל`, `רֶשֶׁף`, `הַדַּד`), it is the same word, and the first-occurrence note says
so ([cognate]) and what the Bible makes of the god. **Places named in the Bible take the biblical form** (§6.4.6):
`לְבָנוֹן`, `שִׂרְיוֹן`, `כַּפְתּוֹר`, `מִצְרַיִם`, `עַשְׁתָּרוֹת`, `אֶדְרֶעִי`.

### 1.1 Gods

| Ugaritic (CUC / DULAT) | Hebrew (ours) | Notes |
|---|---|---|
| *il* (*ʾIlu*), El; also "god" | `אֵל` | **always vocalized** (unvocalized `אל` = "to"; the verifier checks); the father of the gods. [cognate] `אֵל` of Genesis (Gen 14:18–22, 33:20, 46:3). Never `אֱלֹהִים` |
| *ilm* "gods" | `אֵלִים` | always vocalized; never `אֱלֹהִים` (the Bible's plural of majesty is a finding, not a rendering) |
| *ilt* "goddess" (also Athirat's title "the Goddess") | `אֵלָה` / `אֵלַת` | always vocalized (unvocalized: "these", "oath") |
| *bʿl* (Baʿlu), Baal | `בַּעַל` | the same word as the common noun *bʿl* "lord, owner" (§4), which also = `בַּעַל`. [cognate] the biblical Baal |
| *hd* / *hdd* (Haddu), Baal's personal name | `הַדַּד` | [cognate] the Aramean god of 1 Kgs 15:18, 2 Kgs 5:18 (Rimmon) |
| *ʿnt* (ʿAnatu), Anat | `עֲנָת` | [cognate] `שַׁמְגַּר בֶּן עֲנָת` (Judg 3:31), `עֲנָתוֹת`, `בֵּית עֲנָת`. Vocalize at least at the first occurrence per file |
| *aṯrt* (ʾAṯiratu), Athirat | `אֲתִירַת` | **never `אֲשֵׁרָה`** (the verifier blocks it); her title *rbt aṯrt ym* §6.6; *qnyt ilm* `קוֹנַת הָאֵלִים`. [cognate] `אֲשֵׁרָה` (Deut 16:21) in the apparatus |
| *ym* (Yammu), Yam | `יָם` | a name: no article. The common noun *ym* "sea" = `יָם` too (the same word: [cognate], Gen 1:10); "the sea" with the article where the Ugaritic means the sea. *ym* "day" = `יוֹם` |
| *nhr* (Naharu), River (= Yam) | `נָהָר` | a name: no article (*ṯpṭ nhr* `שׁוֹפֵט נָהָר`) |
| *mt* (Môtu), Mot | `מוֹת` | **always vocalized** (unvocalized `מות` = "death, die"); the common noun "death" (*mt*, from *mwt*) = `מָוֶת`; *mt* "man" = `מְתִים` (pl.; [cognate] Deut 33:6) |
| *kṯr w ḫss* (Kôṯaru-wa-Ḫasīsu), the craftsman god | `כּוֹתַר־וְחַסִּיס` (one double name); alone `כּוֹתַר`, `חַסִּיס` | always vocalized (unvocalized `כותר` = "title"); [cognate] `כּוֹשָׁרוֹת` (Ps 68:7), `כִּשְׁרוֹן` |
| *ḥyn* (Ḥayyinu), Kothar's other name | `חַיִּן` | *ḥyn d ḥrš ydm* `חַיִּן, חֲרַשׁ הַיָּדַיִם` |
| *špš* (Šapšu), the sun goddess | `שַׁפְּשׁ` | the sun **is** the goddess: `שֶׁמֶשׁ` never in a line (§5); the note says "the sun". [cognate] `שֶׁמֶשׁ` |
| *nrt ilm špš* | `נֵר הָאֵלִים, שַׁפְּשׁ` | §6.6 |
| *yrḫ* (Yariḫu), the moon god | `יָרִחַ` | always vocalized; the moon `יָרֵחַ`, month `יֶרַח` [cognate] |
| *nkl* (Nikkal), his bride | `נִכַּל` | always vocalized (`נֵכֶל` "deceit") |
| *ḥrḫb* (Ḫirḫibu) | `חִרְחִב` | the "king of summer", the matchmaker of KTU 1.24 |
| *kṯrt* (Kôṯarātu), the birth goddesses | `הַכּוֹתָרוֹת` | always vocalized; "the skilful ones" (cf. `כּוֹשָׁרוֹת`, Ps 68:7, of release) |
| *ʿṯtr* (ʿAṯtaru), Athtar | `עַתְּתַר` | *ʿṯtr ʿrẓ* `עַתְּתַר הֶעָרִיץ` (*ʿrẓ* [cognate] `עָרִיץ`) |
| *ʿṯtrt* (ʿAṯtartu), Athtart | `עַתְּתַרְת` | never `עַשְׁתֹּרֶת` / `עַשְׁתָּרֹת` (the verifier blocks them; the town of KTU 1.108 is `עַשְׁתָּרוֹת`, see §1.2) |
| *dgn* (Dagan); *bn dgn* "son of Dagan" (Baal) | `דָּגָן`; `בֶּן דָּגָן` | always vocalized; *dgn* "grain" is the same word `דָּגָן` [cognate]; `דָּגוֹן` (Judg 16:23) only in the apparatus |
| *ršp* (Rašpu), Resheph | `רֶשֶׁף` | always vocalized; [cognate] `רֶשֶׁף` (Deut 32:24, Hab 3:5) – there a pestilence |
| *ḥrn* (Ḥôrānu), Horon | `חוֹרָן` | always vocalized; [cognate] `בֵּית חוֹרֹן` (Josh 10:10) |
| *šḥr w šlm* (Šaḥru-wa-Šalimu), Dawn and Dusk | `שַׁחַר וְשָׁלֵם` | `שָׁלֵם` always vocalized; [cognate] `שַׁחַר`; `שָׁלֵם` (Gen 14:18) – the god of the town's name? (debated: a note) |
| *pdry*, *ṭly*, *arṣy* – Baal's daughters | `פִּדְרַי`, `טַלַּי`, `אַרְצַי` | always vocalized (`טלי` "my dew", `ארצי` "my land"); *pdry bt ar* `פִּדְרַי בַּת אוֹר`, *ṭly bt rb* `טַלַּי בַּת רְבִיבִים`, *arṣy bt yʿbdr* `אַרְצַי בַּת יַעְבְּדַר` (the translator of 1.3 checks the epithets against the text) |
| *gpn w ugr*, Baal's messengers | `גֶּפֶן וְאוּגָר` | "Vine and Field" (a note) |
| *qdš w amrr*, Athirat's fisherman | `קוֹדֶשׁ־וְאַמְרַר` | |
| *rpu* (Rāpiʾu), "the Healer", the god of KTU 1.108; *rpum* the shades | `רָפִא`; `רְפָאִים` | [cognate] `רְפָאִים` (Deut 2:11, 3:11, Isa 26:14); *rpu mlk ʿlm* `רָפִא, מֶלֶךְ עוֹלָם` |
| *ṯkmn w šnm* | `תַּכְמָן וְשׁוּנַם` | El's helpers (KTU 1.114) |
| *ḥby* | `חוּבַּי` | "the one with horns and tail" (1.114) |
| *zz w kmṯ*, *mlk*, *ʿṯtrt w ʿnt* … (the gods of KTU 1.100) | by the same principle | the translator of 1.100 fixes them and lists them in `project.md` |

### 1.2 Places, persons, beings

| Ugaritic | Hebrew | Notes |
|---|---|---|
| *ugrt* | `אוּגָרִית` | |
| *ṣpn* (Ṣapānu), Baal's mountain | `צָפוֹן` | **always vocalized**, no article: a name. [cognate] `יַרְכְּתֵי צָפוֹן` (Ps 48:3), `הַר מוֹעֵד בְּיַרְכְּתֵי צָפוֹן` (Isa 14:13); `צָפוֹן` "north" grew from the mountain's name |
| *mrym ṣpn*, *ṣrrt ṣpn* | `מְרוֹמֵי צָפוֹן`, `פִּסְגּוֹת צָפוֹן` | *mrym* [cognate] `מָרוֹם` |
| *lbnn*, *šryn* | `לְבָנוֹן`, `שִׂרְיוֹן` | biblical forms (Deut 3:9: `צִידֹנִים יִקְרְאוּ לְחֶרְמוֹן שִׂרְיֹן`) |
| *kptr*, *ḥkpt* | `כַּפְתּוֹר`, `חִכְּפַּת` | Kothar's seats (Crete; Memphis, Egyptian *ḥwt-kȝ-ptḥ*) |
| *ʿṯtrt*, *hdrʿy* (KTU 1.108:2–3) | `עַשְׁתָּרוֹת`, `אֶדְרֶעִי` | biblical forms (Deut 1:4 `בְּעַשְׁתָּרֹת בְּאֶדְרֶעִי`) – unless the translator reads *ʿṯtrt* as the goddess (debated: the note gives both) |
| *inbb* (Anat's mountain) | `אִנְבָּב` | |
| *ḫršn*, *ll* (El's mountain?) | `חוּרְשָׁן`, `לַל` | |
| *trġzz w ṯrmg* (the two mountains at the edge of the earth) | `תַּרְגִּזַּז וְתַרְמַג` | |
| *ḥmry* (Mot's city), *ḫḫ* (his land) | `חַמְרַי`, `חַח` | *ḥmry* "Muck" (cf. `חֹמֶר`): a note |
| *šḥlmmt* | `שַׁחְלְמַמַּת` | "the Shore of Death"? (a note) |
| *mṣrm* | `מִצְרַיִם` | |
| *ilmlk* (the scribe), *nqmd* (the king), *aṯn prln*, *ṯʿy*, *yrgb bʿl*, *ṯrmn* | `אִלִימִלְכּוּ`, `נִקְמַדּוּ`, `אַתְנוּ־פּוּרְלִנִּי`, `תַּעִי`, `יַרְגִּבְבַּעַל`, `תַּרְמָן` | the colophon (1.6 VI 54–58) |
| *tnn* | `תַּנִּין` | §4.1; reserved |
| *ltn* (Lītānu / Lôtan) | `לִיתָן` | a name; `לִוְיָתָן` (Isa 27:1, Ps 74:14, Job 40:25) only in the apparatus [cognate] |
| *arš*, *ʿtk*, *išt*, *ḏbb* (Yam's allies, 1.3 III 43–46) | `אַרְשׁ`, `עַתְק`, `אֵשׁ`, `זְבוּב`? | by sense where they are common nouns (*išt* "fire", *ḏbb* "fly"); the translator of 1.3 decides and records |

## 2. The transliteration convention (the Hebrew apparatus)

- **The source line** (the backticked line under each heading) is CUC's Latin transliteration, copied by
  `ugarit_tools.py fill` (★ never retyped), with the folder's marks: `[ ]` restored, `⸢ ⸣` damaged (KTU's italics), `⟨ ⟩`
  omitted by the scribe, `{ }` written by mistake, `x` a lost letter, `[…]` a lost stretch, `.` the word divider.
- **In the פירוק** each word is quoted in Latin (`mḫšt`), then its lemma (DULAT's, as CUC gives it: *mḫš*, *bṯn*), and,
  where it helps, its consonants in Hebrew letters after Cassuto 1951: the 27 consonants one for one, with a bar for the
  sounds Hebrew lost – `תֿ` = *ṯ*, `חֿ` = *ḫ*, `דֿ` = *ḏ*, `עֿ` = *ġ*, `טֿ` = *ẓ*, `שׂ` = *ś* (*s₂*), and the three alephs
  vocalized: `אַ` *a*, `אִ` *i*, `אֻ` *u*. So *bṯn* = `בתֿן`, *ḫss* = `חֿסס`, *ġzr* = `עֿזר`, *aṯrt* = `אַתֿרת`.
  The Hebrew cognate, when there is one, follows with `~` (*bṯn* `בתֿן` ~ `פֶּתֶן`).
- **Sound correspondences to keep in mind** (they make and unmake cognates): Ug. *ṯ* = Heb. `שׁ` (*ṯr* `שׁוֹר`, *aṯrt*
  `אֲשֵׁרָה`); *ḏ* = `ז` (*ḏbḥ* `זבח`, *ḏrʿ* `זְרוֹעַ`); *ẓ* = `צ` (*ẓl* `צֵל`); *ġ* = `ע` (*ġlm* `עֶלֶם`) or `צ` (*ġr*
  "mountain" ~ `צוּר`; *ġmʾ* `צָמֵא`); *ḫ* = `ח` (*ḫmš* `חָמֵשׁ`); *š* = `שׁ`; Ug. *b* ~ Heb. `פ` in a few words (*bṯn* ~
  `פֶּתֶן`). Ugaritic keeps final short vowels and case endings (unwritten, but the alephs show them: *rašm* "heads").

## 3. Grammar mapping (Ugaritic → Hebrew)

Binding, with the translator brief §3. The script is consonantal: **the vocalization, and so the tense, is our
reconstruction** – say so in the פירוק when it decides the rendering.
- **Suffix conjugation (*qatala*)** → Hebrew past (`מָחַצְתִּי`); with a stative verb or in a nominal clause → adjective /
  present (*ḥy aliyn bʿl* "Baal the mighty is alive" `חַי בַּעַל הָאַדִּיר`); a performative in speech → past (as in the
  Psalms' `קְרָאתִיךָ`).
- **Prefix conjugation in narrative** (*yqtl*: the short preterite and the long *yaqtulu* look alike) → **Hebrew past**
  (`נָשָׂא`, `צָוַח`), consistently; the poetry's alternation of *qtl* and *yqtl* in parallel lines is kept as two past
  verbs (as in Hebrew poetry, Ps 18:7). **No vav-consecutive** (guidelines §6.2). **In speech**: present-future by
  context (`אֶמְחַץ`, `תִּבְנֶה`); the volitive / jussive → jussive (`יִבָּנֶה`, `יֵרֵד`); the energic *-n(n)* is not
  marked.
- **Imperative** → imperative; **infinitive absolute** in narrative (*šrd*, *ḥlk*) → a finite verb or the Hebrew
  infinitive absolute where Hebrew would use one.
- **Stems:** G = qal; N = nifʿal; D = piʿel; tD = hitpaʿel; Gt = hitpaʿel / nifʿal (reciprocal *imtḫṣ* "fight each
  other" `נִלְחַם`?); **Š = hifʿil** (not a "shafʿel"); Št = hištafʿel (*tštḥwy* `הִשְׁתַּחֲוָה`); L = poʿlel.
- **Dual** → a Hebrew dual where Hebrew has one (`יָדַיִם`, `שִׂפְתַיִם`), else `שְׁנֵי` / `שְׁתֵּי` + plural (*nhrm* `שְׁנֵי
  הַנְּהָרוֹת`, *thmtm* `שְׁתֵּי הַתְּהוֹמוֹת`).
- **Particles:** *w* `וְ־`; *p* `וְ־` / `אָז`; *k* (I) `כְּ־`; *k* (III) `כִּי` / `כַּאֲשֶׁר`; *km* `כְּמוֹ`; *hn* `הִנֵּה`; *hl* `הֵן`;
  *idk* `אָז`; *ahr* `אַחַר`; *bl* `בַּל`; *al* `אַל`; *in* `אֵין`; *d* (relative) `אֲשֶׁר` / `שֶׁ־`, (determinative, "the one
  of") by sense (never `בַּעַל`, which is *bʿl*'s); *l* has four values – the preposition (`לְ־`, `אֶל`; also "from",
  `מִן`), the negation (`לֹא` / `אַל`), the asseverative "indeed" (`אָכֵן`), the vocative (`הוֹ`): **decide which in the
  פירוק, line by line** (CUC's machine parse often lists all four); *b* `בְּ־` (also "from"); *ʿm* `עִם` / `אֶל`;
  enclitic *-m* is not translated.
- **Word order:** keep the line's order where Hebrew allows; epithets follow the name in Hebrew (`בַּעַל הָאַדִּיר` for
  *aliyn bʿl*).

## 4. Key terms (one Hebrew per lemma; echo tags)

### 4.1 The fifth day and the sea (Gen 1:2, 1:9–10, 1:20–23)

| Ugaritic | Hebrew | Tag / note |
|---|---|---|
| *tnn* | `תַּנִּין` | [cognate] Gen 1:21 `הַתַּנִּינִם הַגְּדֹלִים`; Isa 27:1, 51:9; Ps 74:13; Job 7:12. **Reserved** |
| *ltn* | `לִיתָן` (§1.2) | [cognate] `לִוְיָתָן` |
| *bṯn* | `פֶּתֶן` | [cognate] (Deut 32:33, Ps 58:5, 91:13). **Not `נָחָשׁ`**: Isa 27:1 `נָחָשׁ בָּרִחַ … נָחָשׁ עֲקַלָּתוֹן` has the Bible's own noun – the adjectives are the Ugaritic ones, the noun is a substitution (a finding). Reserved |
| *nḥš* | `נָחָשׁ` | [cognate] (Gen 3:1, Num 21:9). Reserved |
| *brḥ* | `בָּרִחַ` | [cognate] Isa 27:1, Job 26:13 |
| *ʿqltn* | `עֲקַלָּתוֹן` | [cognate] Isa 27:1 |
| *šlyṭ* | `שַׁלִּיט` | [cognate] (Gen 42:6, Qoh 7:19); reserved (the root שלט) |
| *thm*, *thmt*; dual *thmtm* | `תְּהוֹם`, `תְּהוֹמוֹת`; `שְׁתֵּי הַתְּהוֹמוֹת` | [cognate] Gen 1:2, 7:11, 8:2; Gen 49:25 `תְּהוֹם רֹבֶצֶת תָּחַת`. Reserved |
| *ym* (sea) | `יָם` | [cognate] Gen 1:10 |
| *nhr* (river) | `נָהָר` | [cognate] Gen 2:10 |
| *ʿṣr* | `צִפּוֹר` | [equivalent] Gen 1:20 `עוֹף` (Deut 4:17 `צִפּוֹר כָּנָף`). Reserved |
| *ʿp* (bird, once) | `עוֹף` | [cognate] Gen 1:20. Reserved |
| *dg* | `דָּג` | [cognate] Gen 1:26 `בִּדְגַת הַיָּם`, 9:2 `דְּגֵי הַיָּם`. Reserved |
| *npš* | `נֶפֶשׁ` | [cognate]: in Ugaritic often "throat, appetite" (Mot's, 1.5 I 14ff; cf. Isa 5:14 `הִרְחִיבָה שְּׁאוֹל נַפְשָׁהּ`); Gen 1:20–21 `נֶפֶשׁ חַיָּה`. Reserved |
| *rb* (adj.), *rbm* | `רַב`, `רַבִּים` | [cognate]; **not `גָּדוֹל`** (Gen 1:21 `הַגְּדֹלִים` is the Bible's adjective: compare *il rbm*, 1.3 III 39) |
| *šmm* | `שָׁמַיִם` | [cognate] |
| *arṣ* | `אֶרֶץ`; the netherworld `הָאָרֶץ` | [cognate]; never `שְׁאוֹל` (as *erṣetu* in the Akkadian corpora) |
| *ʿpr* | `עָפָר` | [cognate] Gen 2:7, 3:19; reserved |
| *mh / my* | `מַיִם` | [cognate] |
| *ʿrpt* | `עֲנָנִים` | [equivalent]; *rkb ʿrpt* §6.6. (*ʿnn* "attendant" ≠ `עָנָן`: §5.4) |
| *ġrpl* | `עֲרָפֶל` | [cognate] (Deut 4:11, 5:22) |
| *mṭr*, *ṭl*, *rbb* | `מָטָר`, `טַל`, `רְבִיבִים` | [cognate] (Deut 32:2 `כִּשְׂעִירִם עֲלֵי דֶשֶׁא וְכִרְבִיבִים`) |
| *ḥln*, *urbt* | `חַלּוֹן`, `אֲרוּבָּה` | [cognate] Gen 7:11 `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ`, 8:2, Gen 8:6 `חַלּוֹן הַתֵּבָה`. Reserved |
| *bdqt* | `בֶּדֶק` | [cognate] "breach" (2 Kgs 12:6): "a rift in the clouds" |
| *ptḥ* | `פָּתַח` | [cognate] Gen 7:11, 8:6 |

### 4.2 Gods, assembly, kingship

| Ugaritic | Hebrew | Tag / note |
|---|---|---|
| *bn il*, *bn ilm*; *dr il*; *pḫr bn ilm* | `בְּנֵי אֵל`, `בְּנֵי אֵלִים`; `דּוֹר אֵל`; `אֲסֵפַת בְּנֵי אֵלִים` | [cognate] Ps 29:1, 89:7 `בִּבְנֵי אֵלִים`; Deut 32:8 (4QDeut `בני אל`); [equivalent] Gen 6:2, Job 1:6 `בְּנֵי הָאֱלֹהִים` |
| *pḫr* | `אֲסֵפָה` | (Akk. *puḫru*); *pḫr mʿd* `אֲסֵפַת הַמּוֹעֵד` |
| *mʿd* | `מוֹעֵד` | [cognate] Isa 14:13 `הַר מוֹעֵד`, Num 16:2 `קְרִאֵי מוֹעֵד` |
| *ʿdt* | `עֵדָה` | [cognate] Ps 82:1 `בַּעֲדַת-אֵל` |
| *šbʿm bn aṯrt* | `שִׁבְעִים בְּנֵי אֲתִירַת` | [equivalent] Gen 10 (seventy nations), Deut 32:8, Ex 1:5 |
| *mlk* (king); *mlk* (kingship); *mlk* vb | `מֶלֶךְ`; `מַלְכוּת`; `מָלַךְ` | [cognate]; *mlk ʿlm* `מַלְכוּת עוֹלָם` / `מֶלֶךְ עוֹלָם` (Ps 145:13; Jer 10:10) |
| *drkt* | `שְׂרָרָה` | (the root שלט is *šlyṭ*'s) |
| *ksu*; *kḥṯ*; *nḫt*; *hdm* | `כִּסֵּא`; `כֵּס` (Ex 17:16); `נַחַת`; `הֲדוֹם` | [cognate] (ksu, nḫt, hdm: Ps 110:1 `הֲדֹם לְרַגְלֶיךָ`); reserved |
| *ḫṭ* | `מַטֶּה`? / `שַׁרְבִיט` | *ḫṭ* "sceptre": `שַׁרְבִיט` (the 2026-10-23 harmonization gave `שַׁרְבִיט` to Akk. *ḫaṭṭu*, the cognate: one Hebrew across the languages) |
| *zbl* | `נָסִיךְ` | by meaning ("prince"); `זְבֻל` (1 Kgs 8:13 "lofty house") and `בַּעַל זְבוּב` (2 Kgs 1:2) in the apparatus |
| *ṯpṭ* (judge; vb) | `שׁוֹפֵט`; `שָׁפַט` | [cognate] |
| *adn* | `אָדוֹן` | [cognate] |
| *rbt* (Lady) | `גְּבִירָה` | [equivalent]; the cognate `רַבָּתִי` (Lam 1:1) in the apparatus |
| *qdš* (holy; sanctuary) | `קָדוֹשׁ`, `קוֹדֶשׁ` | [cognate]; reserved |
| *nḥlt* | `נַחֲלָה` | [cognate] Ex 15:17 `בְּהַר נַחֲלָתְךָ` (↔ *ġr nḥlty*, 1.3 III 30); reserved |
| *ġr* | `הַר` | [equivalent]; the cognate `צוּר` in the apparatus |
| *bt*, *bhtm* | `בַּיִת`, `בָּתִּים` | (*bhtm* is a plural of extension: `הַבַּיִת`, with a note) |
| *hkl* | `הֵיכָל` | [cognate] (as Sum. *e₂-gal* in the earlier corpora) |
| *mlak* | `מַלְאָךְ` | [cognate]: "messenger", the meaning of `מַלְאָךְ` in Gen 32:4; reserved (in the Akkadian corpora `מַלְאָךְ` was never used: no cognate there) |
| *tʿdt* | `מִשְׁלַחַת` | "embassy" |
| *tḥm*; *hwt*; *rgm* (n.); *rgm* (vb); *ṯny* | `דָּבָר`; `אִמְרָה`; `דָּבָר`?; `אָמַר`; `שָׁנָה` | §6.4. *rgm* ≠ Heb. `רָגַם` "stone" (§5.4). *tḥm* and *rgm* (n.) both "word": *tḥm* = `דְּבַר` in the message formula, *rgm* (n.) = `מִלָּה` |
| *ʿbd* | `עֶבֶד` | [cognate] |
| *ʿnn* | `מְשָׁרֵת` | false friend of `עָנָן` (§5.4) |
| *ġlm*, *ġlmt* | `עֶלֶם`, `עַלְמָה` | [cognate] Isa 7:14, Gen 24:43 |
| *btlt* | `בְּתוּלָה` | [cognate] |
| *ybmt* (*limm*) | `יְבֶמֶת` (`הַלְּאֻמִּים`) | [cognate] Deut 25:7–9, Ruth 1:15: the meaning of Anat's title is debated (a note) |
| *lim* | `לְאוֹם` | [cognate] |
| *ġzr* | `גִּבּוֹר` | (DULAT "lad, hero") |
| *qrd* | `לוֹחֵם` | *aliy qrdm* §6.6 |
| *mhr* | `מָהִיר` | [cognate] "skilled (warrior)" (Prov 22:29, Ps 45:2) |
| *aliyn*, *aliy* | `הָאַדִּיר`, `אַדִּיר` | §6.6 |
| *lṭpn* | `הָאָדִיב` | §6.6 |
| *ydd*; *mdd*; *ahb* | `יְדִיד`; `חֲבִיב`; `אָהַב` | ydd [cognate] Deut 33:12 `יְדִיד יְהוָה` |
| *ṯr* (bull) | `שׁוֹר` | [cognate]; *ṯr il* §6.6 |
| *adm*; *ab adm* | `אָדָם`; `אֲבִי אָדָם` | [cognate] Gen 1:26; reserved |
| *nšm* | `אֲנָשִׁים` | ≠ `נְשָׁמָה` (§5.4) |

### 4.3 Making, building, blessing (the Gen 1–2 verbs)

| Ugaritic | Hebrew | Tag / note |
|---|---|---|
| *bny*; *bnwt*; *bny bnwt* (El's title) | `בָּנָה`; `בְּנוּיִים`; `בּוֹנֵה הַבְּנוּיִים` | [cognate] Gen 2:22 `וַיִּבֶן`; **`בָּרָא` never** (Ugaritic has no *brʾ*): Gen 1:21's `וַיִּבְרָא` is a finding |
| *qny* | `קָנָה` | [cognate] Gen 14:19 `קֹנֵה שָׁמַיִם וָאָרֶץ`, 4:1 `קָנִיתִי`; *qnyt ilm* §6.6. Reserved |
| *pʿl*, *škn*, *kwn* … | by sense | the root עשה is reserved for *ʿšy* (absent from these texts), יצר for *yṣr* (absent) |
| *brk* (bless; knee) | `בֵּרַךְ`; `בֶּרֶךְ` | [cognate] Gen 1:22, 28; reserved |
| *ṭb* | `טוֹב` | [cognate] Gen 1:4 …; reserved |
| *nʿm* | `נָעִים`, `נוֹעַם` | [cognate]; *ilm nʿmm* `הָאֵלִים הַנְּעִימִים` |
| *ʿlm* | `עוֹלָם` | [cognate]; reserved |
| *kly* (D) | `כִּלָּה` | [cognate] Gen 2:1–2 `וַיְכֻלּוּ … וַיְכַל`; always vocalized (§5.3) |
| *šbʿ*; *šbʿ ymm*; *b šbʿ ymm* | `שֶׁבַע`; `שִׁבְעַת יָמִים`; `בַּיּוֹם הַשְּׁבִיעִי` | the seven-day formula §6.10 (↔ Gen 1:1–2:3) |
| *nḫ* | `נָח` | [cognate] Gen 2:15, 8:4; Ex 20:10 `וַיָּנַח` (the repository's numbering) |
| *ṯbt*, *mṯb* | `מוֹשָׁב` | [cognate] (the root ישב, not שבת) |
| *ḥy* | `חַי`, `חָיָה` | [cognate] |
| *mt*, *mwt* (die) | `מֵת` | [cognate] |
| *mḫṣ*; *mḫš* | `מָחַץ`; `מָחַשׁ`? | *mḫṣ* [cognate] (Deut 32:39 `מָחַצְתִּי וַאֲנִי אֶרְפָּא`; the law corpus's *maḫāṣu* = `מָחַץ`); *mḫš* (a by-form, 1.3 III 38ff) = `מָחַץ` too, with a note (the same verb in another spelling) |
| *ṣmt* | `הִצְמִית` | [cognate] Ps 94:23 |
| *šbm* | `חָסַם` | "to muzzle" (Deut 25:4's verb): a note |
| *ʿrb* | `נִכְנַס` | "enter"; the cognate `עֶרֶב` (Gen 1:5) in the apparatus; *ʿrb špš* "sunset" `בֹּא שַׁפְּשׁ` |
| *qrʾ* | `קָרָא` | [cognate]; *qry* "meet" `קָרָה` / `לִקְרַאת` |
| *ṣḥ* | `צָוַח` | [cognate] (Isa 42:11); §6.1 |
| *ʿny* | `עָנָה` | [cognate] |
| *nšʾ* | `נָשָׂא` | [cognate] |
| *hlk*; *mġy*; *ʿly*; *yrd* | `הָלַךְ`; `הִגִּיעַ`; `עָלָה`; `יָרַד` | [cognate] (mġy: Aram. `מְטָא`) |
| *lḥm*; *šty* | `אָכַל`?; `שָׁתָה` | *lḥm* vb = `סָעַד` (to dine) – `לֶחֶם` (n.) is *lḥm* n.; *akl* = `אָכַל` |
| *ṭbḫ* | `טָבַח` | [cognate] |
| *dbḥ* | `זָבַח`, `זֶבַח` | [cognate] |
| *yn*; *krpn*; *ks* | `יַיִן`; `גָּבִיעַ`; `כּוֹס` | [cognate] (yn, ks) |
| *mrzḥ* | `מַרְזֵחַ` | [cognate] Jer 16:5, Amos 6:7; reserved |
| *škr* | `שָׁכַר`, `שִׁכָּרוֹן` | [cognate] Gen 9:21 `וַיִּשְׁכָּר` |

### 4.4 Mourning (Lev 19:27–28, 21:5; Deut 14:1)

| Ugaritic | Hebrew | Tag / note |
|---|---|---|
| *ʿmr un l rišh* | `עֲפַר אֵבֶל עַל רֹאשׁוֹ`? | *un* "mourning" [cognate] `אָוֶן` / `אוֹנִי` (Gen 35:18 `בֶּן אוֹנִי`); the translator of 1.5 fixes the line |
| *ʿpr plṯt* | `עֲפַר` + by sense | |
| *lpš*; *mizrtm* | `לְבוּשׁ`; `אֵזוֹר`? | *mizrtm* "loincloth" [cognate] `אֵזוֹר` / `אֲזוֹר` |
| *hdy* (cut) | `גָּדַד`? → **no**: by sense (`חָרַץ`, `שָׂרַט` are reserved: §5) | the verbs of Lev 19:28 (`שֶׂרֶט`) and Deut 14:1 (`תִתְגֹּדְדוּ`) stay in the apparatus unless the Ugaritic word is their cognate |
| *ḥrṯ* | `חָרַשׁ` | [cognate]; *k gn* `כְּגַן` (gn reserved) |
| *lḥm w dqn* | `לְחָיַיִם וְזָקָן` | [cognate] |

## 5. Reserved and gated Hebrew (checked by `ugarit_tools.py verify`)

### 5.1 Never (whatever the Ugaritic)
`אֱלֹהִים` (any form); `שְׁאוֹל`; the root ברא; `לִוְיָתָן` (the name is `לִיתָן`); `רָקִיעַ`; `תֹּהוּ`, `בֹּהוּ`; `שֶׁמֶשׁ`
(the sun is `שַׁפְּשׁ`); `אֲשֵׁרָה`; `עַשְׁתֹּרֶת`; `דָּגוֹן`; `נְשָׁמָה`; `מַבּוּל`; the root שבת (the "seat" words are ישב).

### 5.2 Only for their source word (the licence: the line's CUC words or DULAT lemmas)
`תַּנִּין` *tnn* · `פֶּתֶן` *bṯn* · `נָחָשׁ` *nḥš* · `תְּהוֹם` *thm(t)* · `אֲרוּבָּה` *urbt* (`אַרְבֶּה` *irby*) · `חַלּוֹן` *ḥln* ·
`עֲרָפֶל` *ġrpl* · `עָנָן` *ʿrpt* · `בֶּדֶק` *bdqt* · `גַּן` *gn* · `מַרְזֵחַ` *mrzḥ* · `עוֹלָם` *ʿlm* · `מַלְאָךְ` *mlak* · the root קדש
*qdš* · `נַחֲלָה` *nḥlt* · `נֶפֶשׁ` *npš* · `רְפָאִים` / `רָפִא` *rpu* · `עָפָר` *ʿpr* · `צֶלֶם` / `דְּמוּת` *ṣlm* / *dmt* · `טוֹב` *ṭb* ·
`גָּדוֹל` *gdl* · the root יצר *yṣr* · the root עשה *ʿšy* · the root קנה *qny* / *qn* · the root ברך *brk* · `קָרָא` *qrʾ* /
*qry* · the root ערב *ʿrb* · `עוֹף` *ʿp* · `צִפּוֹר` *ʿṣr* · `דָּג` *dg* · `עַשְׁתָּרוֹת` *ʿṯtrt* (the town) · `אָדָם` *adm* · `רוּחַ` *rḥ* ·
the root רחף *rḥp* · `הִשְׁתַּחֲוָה` *ḥwy* · `הֲדוֹם` *hdm* · `כִּסֵּא` *ksu* · `בַּעַל` *bʿl* · the root שלט *šlyṭ* · the root משל
*mšl* · `שֶׂרֶט`, `קָרְחָה`, `הִתְגּוֹדֵד` *šrṭ* / *qrḥ* / *gdd* · `יְדִיד` *ydd* · `גַּד` *gd* · `אוֹר` *ar* (and `מָאוֹר` never) ·
`חוֹשֶׁךְ` *ḥšk* / *ẓlm*.

Gates are anchored at a word start (with the prefixes ו ב ל מ ה כ ש) and end, read the line without brackets and niqqud,
and allow the common suffixed forms (`ugarit_tools.py gates` lists them). If a gate blocks a right word, tell the
coordinator: **never bend the Hebrew to pass, never edit the tool's lists** (a homograph is licensed, not avoided).

### 5.3 Always vocalized (the verifier's traps)
`אֵל`, `אֵלִים`, `אֵלֵי`, `אֵלָה`, `אֵלַת` (a line whose source has *il* / *ilm* must show a vocalized `אֵ`); `מוֹת` (and
`מָוֶת`, `מֵת`); `יָרִחַ` / `יָרֵחַ`; `נִכַּל`; `שָׁלֵם`; `טַלַּי`, `אַרְצַי`, `פִּדְרַי`; `דָּגָן`; `כַּלָּה` / `כִּלָּה` / `כָּלָה`; `מְתִים`
/ `מֵתִים`; `אֲרוּבָּה` / `אַרְבֶּה`; `חַסִּיס`, `כּוֹתַר`, `הַכּוֹתָרוֹת`; `רֶשֶׁף`; `חוֹרָן`; `צָפוֹן`; `רֵעַ` / `רֵעִי`; `עֲנָת` at its first
occurrence in each file.

### 5.4 False friends and traps
- *nšm* "people" ≠ `נְשָׁמָה` (Gen 2:7): `אֲנָשִׁים`.
- *ʿnn* "attendant" ≠ `עָנָן`: `מְשָׁרֵת`. *ʿrpt* "clouds" = `עֲנָנִים`.
- *ʿrb* "enter" ≠ `עֶרֶב` "evening" (the root is shared; the Hebrew sense "set (of the sun)" grew from "enter"): `נִכְנַס`.
- *rgm* "say" ≠ `רָגַם` "stone": `אָמַר`.
- *zbl* "prince" ≠ `זְבֻל` "lofty house" (1 Kgs 8:13): `נָסִיךְ`.
- *šd* "field" (= `שָׂדֶה`) ≠ Heb. `שַׁד` "breast" (= Ug. *ṯd*, *ḏd*): never write `שד` for a field.
- *mt* "man" (`מְתִים`) / *mt* "death" (`מָוֶת`) / *mt* Mot (`מוֹת`): three words, decide in the פירוק.
- *ym* "sea" / *ym* "day": `יָם` / `יוֹם`.
- *l*: four particles (§3).
- *gd* "coriander" (1.23:14; = Heb. `גַּד`, Ex 16:31) ≠ `גְּדִי` "kid": the old reading of KTU 1.23:14 as "a kid in milk"
  (↔ Ex 23:19, 34:26) is rejected (Ratner & Zuckerman 1986); say so in the apparatus.
- *ʿqltn* is `עֲקַלָּתוֹן` "twisting", not `עֲקַלְקַל`.
- *ġr* "mountain" ~ `צוּר` (rock), *ġr* "skin" (DULAT ġr III): two words.
- *bmt* "back" (of an animal or a man) ~ `בָּמָה` (high place): `גַּב` / `גֵּו` by sense, with a note (Deut 33:29
  `עַל בָּמוֹתֵימוֹ תִדְרֹךְ`).
- *ḥmt* "venom" (DULAT ḥmt III) / *ḥmt* "wall" (I): `חֵמָה` [cognate] / `חוֹמָה` [cognate].
- Unvocalized Hebrew that reads as another word: `אל` (to / El), `אלים` (violent / gods), `מות`, `כלה`, `טלי`, `ארצי`,
  `צפון`, `ירח` (§5.3).

## 6. Formulas (fixed Hebrew; enforced by regex)

Each was checked against its first occurrence in CUC (★). The first translator (KTU 1.3) may revise a formula **with a
reason** in `project.md`; after that it is fixed. Commands end `!`, executions `.`; tense follows §3 (narrative past).
Gender, number, a conjunction and final letters vary as the Ugaritic varies (the regexes allow them).

**6.1 Speech introduction.** *yšu gh w yṣḥ* = `נָשָׂא אֶת קוֹלוֹ וְצָוַח:`; *tšu gh w tṣḥ* = `נָשְׂאָה אֶת קוֹלָהּ וְצָוְחָה:`;
*tšu ghm w tṣḥ(n)* = `נָשְׂאוּ אֶת קוֹלָם וְצָוְחוּ:`. ([equivalent] Gen 29:11 `וַיִּשָּׂא אֶת קֹלוֹ וַיֵּבְךְּ`, 27:38; fem. Gen 21:16 `וַתִּשָּׂא אֶת קֹלָהּ וַתֵּבְךְּ`.)

**6.2 Setting out.** *idk l ytn pnm ʿm X* = `אָז נָתַן אֶת פָּנָיו אֶל X` (fem. `נָתְנָה אֶת פָּנֶיהָ`, pl. / du. `נָתְנוּ אֶת
פְּנֵיהֶם`); *l* here is asseverative (not a negation). The idiom is the Hebrew `וָאֶתְּנָה אֶת פָּנַי אֶל` (Dan 9:3) – with `אֶל`,
not `בְּ־` (`אֶתֵּן אֶת פָּנַי בָּאִישׁ`, Lev 20:3, is hostility: the wisdom corpus's false friend).
*tbʿ w l yṯb* = `יָצָא לַדֶּרֶךְ וְלֹא יָשַׁב` (*tbʿ* "set out").

**6.3 Homage.** *l pʿn il yhbr w yql, yštḥwy w ykbdnh* = `לְרַגְלֵי אֵל קָד וְנָפַל, הִשְׁתַּחֲוָה וְכִבְּדוֹ` (fem.
`קָדָה וְנָפְלָה, הִשְׁתַּחַוְתָה וְכִבְּדַתְהוּ`; pl. `קָדוּ וְנָפְלוּ, הִשְׁתַּחֲווּ וְכִבְּדוּהוּ`). [cognate] `וַיִּקֹּד הָאִישׁ וַיִּשְׁתַּחוּ`
(Gen 24:26), Gen 33:3; *kbd* D `כִּבֵּד` (Ex 20:11 in the repository's numbering: `כַּבֵּד אֶת אָבִיךָ`).

**6.4 The message.** *rgm l X, ṯny l Y* = `אִמְרוּ אֶל X, שְׁנוּ אֶל Y:` (revised by the translator of 1.3: `שְׁנוּ` is the qal "repeat", 1 Kgs 18:34); *tḥm X, hwt Y* = `דְּבַר X, אִמְרַת Y:` (e.g. *tḥm aliyn
bʿl, hwt aliy qrdm* `דְּבַר בַּעַל הָאַדִּיר, אִמְרַת אַדִּיר הַלּוֹחֲמִים:`). (The everyday-voices corpus's Akkadian letter
formula `אֶל X אֱמֹר:` is another formula, kept apart.)

**6.5 Answering.** *w yʿn X* = `וְעָנָה X:` (fem. `וְעָנְתָה`, pl. `וְעָנוּ`).

**6.6 Epithets.**
| Ugaritic | Hebrew |
|---|---|
| *aliyn bʿl* | `בַּעַל הָאַדִּיר` |
| *aliy qrdm* | `אַדִּיר הַלּוֹחֲמִים` |
| *rkb ʿrpt* | `רוֹכֵב הָעֲנָנִים` ([equivalent] Isa 19:1 `רֹכֵב עַל עָב`, Ps 68:5 `לָרֹכֵב בָּעֲרָבוֹת`, Deut 33:26, Ps 104:3 `הַשָּׂם-עָבִים רְכוּבוֹ`) |
| *zbl bʿl arṣ* | `הַנָּסִיךְ, בַּעַל הָאָרֶץ` |
| *bn dgn* | `בֶּן דָּגָן` |
| *btlt ʿnt* | `הַבְּתוּלָה עֲנָת` |
| *ybmt limm* | `יְבֶמֶת הַלְּאֻמִּים` |
| *rbt aṯrt ym* | `הַגְּבִירָה אֲתִירַת־יָם` |
| *qnyt ilm* | `קוֹנַת הָאֵלִים` |
| *ṯr il abh* (*abk*, *aby*) | `הַשּׁוֹר אֵל, אָבִיו` (`אָבִיךָ`, `אָבִי`) |
| *lṭpn il d pid* | `הָאָדִיב, אֵל רְחַב־הַלֵּב` (*pid* "heart, mind": `רֹחַב לֵב` is Solomon's wisdom, 1 Kgs 5:9) |
| *mlk ab šnm* | `הַמֶּלֶךְ, אֲבִי הַשָּׁנִים` (*šnm* "years" – or a god Šunama, DULAT: a note) |
| *zbl ym* / *ṯpṭ nhr* | `הַנָּסִיךְ יָם` / `שׁוֹפֵט נָהָר` |
| *mdd il ym* | `חֲבִיב אֵל, יָם` |
| *bn ilm mt* | `בֶּן אֵלִים, מוֹת` |
| *ydd il ġzr* | `יְדִיד אֵל, הַגִּבּוֹר` |
| *nrt ilm špš* | `נֵר הָאֵלִים, שַׁפְּשׁ` |
| *kṯr w ḫss* | `כּוֹתַר־וְחַסִּיס` |
| *ḥyn d ḥrš ydm* | `חַיִּן, חֲרַשׁ הַיָּדַיִם` |

**6.7 El's abode.** *ʿm il mbk nhrm, qrb apq thmtm* = `אֶל אֵל, אֶל נִבְכֵי שְׁנֵי הַנְּהָרוֹת, בְּקֶרֶב אֲפִיקֵי שְׁתֵּי
הַתְּהוֹמוֹת` (*mbk* [cognate] `נִבְכֵי-יָם`, Job 38:16; *apq* [cognate] `אֲפִיקֵי מַיִם`; ↔ Gen 2:10 `וְנָהָר יֹצֵא מֵעֵדֶן … וּמִשָּׁם
יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים`, [divergence]); *ygl ḏd il w ybu qrš mlk ab šnm* = `וְנִגְלָה אֶל אוֹהֶל אֵל, וּבָא
אֶל חֶדֶר? הַמֶּלֶךְ, אֲבִי הַשָּׁנִים` (*ḏd* "tent"? / *qrš* "pavilion": the translator of 1.3 fixes the line).

**6.8 The serpent (KTU 1.3 III 41–42; 1.5 I 1–3, 27–30).** *bṯn brḥ* = `פֶּתֶן בָּרִחַ`; *bṯn ʿqltn* = `פֶּתֶן עֲקַלָּתוֹן`;
*šlyṭ d šbʿt rašm* = `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים` (§7).

**6.9 The window (KTU 1.4 V 61–VII 28).** *ḥln b bhtm* = `חַלּוֹן בַּבַּיִת`; *urbt b qrb hklm* = `אֲרוּבָּה בְּקֶרֶב
הַהֵיכָל`; *bdqt ʿrpt* = `בֶּדֶק בָּעֲנָנִים`.

**6.10 The seven days (KTU 1.4 VI 24–33 and elsewhere).** *hn ym w ṯn* = `הִנֵּה יוֹם וְשֵׁנִי` (fixed by the translator of 1.4: the tablet has no second "day"); *ṯlṯ rbʿ ym* =
`שְׁלִישִׁי, רְבִיעִי יוֹם`; *ḫmš ṯdṯ ym(m)* = `חֲמִישִׁי, שִׁשִּׁי יוֹם`; *mk b šbʿ ymm* = `הִנֵּה בַּיּוֹם הַשְּׁבִיעִי` (the
translator of 1.4 checks every copy against CUC and fixes the exact Hebrew; ↔ Gen 1:5–2:3 [divergence]: six days of work
and the seventh as completion, in a building story).

**6.11 Feasting.** *ʿd lḥm šty ilm* = `עוֹד הָאֵלִים סוֹעֲדִים וְשׁוֹתִים`; *b ḥrb mlḥt qṣ mri* = `בְּחֶרֶב מְלוּחָה – נֵתַח
מְרִיא` (*ḥrb* = `חֶרֶב` [cognate], also "knife", Josh 5:2: revised by the translator of 1.3); *b ks ḫrṣ dm ʿṣm* = `בְּכוֹס זָהָב – דַּם עֵצִים` (wine; [cognate] Gen 49:11 `וּבְדַם עֲנָבִים`).

**6.12 The house of Baal like the gods'** (1.3 IV 47ff; V 38ff; 1.4 I 9ff; IV 50ff): *w ʾin bt l bʿl km ilm, w ḥẓr k bn
aṯrt* = `וְאֵין בַּיִת לְבַעַל כָּאֵלִים, וְחָצֵר כִּבְנֵי אֲתִירַת` (the translator of 1.3 fixes the rest of the list: *mṯb
il* `מוֹשַׁב אֵל`, *mẓll* `מַחֲסֶה`, …).

## 7. Fixed lines (the key Gen 1:21 passages; enforced character by character, niqqud and marks ignored)

| Lines | Source | Hebrew |
|---|---|---|
| 1.3 III:40 | `l ištbm . tnn . ištmdh` | `אָכֵן חָסַמְתִּי אֶת הַתַּנִּין, *צְמַדְתִּיו*;` |
| 1.3 III:41 | `mḫšt . bṯn . ʿqltn` | `מָחַצְתִּי אֶת הַפֶּתֶן הָעֲקַלָּתוֹן,` |
| 1.3 III:42 | `šlyṭ . d . šbʿt . rašm` | `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים.` |
| 1.5 I:1 | `k tmḫṣ . ltn . bṯn . brḥ` | `כַּאֲשֶׁר מָחַצְתָּ אֶת לִיתָן, הַפֶּתֶן הַבָּרִחַ,` |
| 1.5 I:2 | `tkly . bṯn . ʿqltn . {š}` | `כִּלִּיתָ אֶת הַפֶּתֶן הָעֲקַלָּתוֹן,` |
| 1.5 I:3 | `šlyṭ . d . šbʿt . rašm` | `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים –` |
| 1.6 VI:51 | `b . ym . arš . w tnn` | `בַּיָּם – אַרְשׁ וְהַתַּנִּין;` |

Notes on the fixed lines (the translators keep them in their apparatus):
- **1.3 III 40:** *l* is the asseverative *l* (III; CUC's reviewed parse, DULAT), so the whole boast III 38–46 is
  affirmative (`אָכֵן …`); *ištbm* Gt of *šbm* "muzzle"; *ištmdh* = *ṣmd* "harness, yoke"? (Hutton; DULAT none for the
  form): `*צְמַדְתִּיו*` stands in italics, and the apparatus gives the alternatives ("destroyed him", "bound him").
  (Revised from `הֲלֹא …, *שָׁבַרְתִּיו*?` by the translator of 1.3: §10.)
- **1.3 III 41 vs 1.5 I 2:** the same pair (*bṯn ʿqltn*) with Anat's *mḫšt* "I smote" against Mot's *tkly* "you
  finished": the shared noun phrase is identical Hebrew (`הַפֶּתֶן הָעֲקַלָּתוֹן`), the verbs differ as the Ugaritic
  differs.
- **1.5 I 1–2, the tense:** *k tmḫṣ* and *tkly* are prefix forms in Mot's speech about a past deed ("when you smote …"):
  past Hebrew (§3); Isaiah's `יִפְקֹד` is a future – the Bible turned a remembered victory into an eschatological one.
- **1.5 I 1 ↔ Isa 27:1:** `יִפְקֹד יְהוָה … עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן וְהָרַג אֶת הַתַּנִּין אֲשֶׁר
  בַּיָּם` – the Ugaritic has `לִיתָן` (the same name), `בָּרִחַ`, `עֲקַלָּתוֹן` (the same adjectives), but `פֶּתֶן`, not `נָחָשׁ`;
  and `תַּנִּין … בַּיָּם` is 1.6 VI 51's pair (*b ym … tnn*).

## 8. Precedents from the earlier corpora (cross-language consistency)

- One Hebrew per concept across languages where the source word is the same (guidelines §5.2 "A formula takes the same
  Hebrew across languages"): Akk. *ilu* `אֵל` / Ug. *il* `אֵל`; Akk. *maḫāṣu* `מָחַץ` / Ug. *mḫṣ* `מָחַץ`; Akk. *tâmtu*
  `יָם` / Ug. *ym* `יָם`; Tiāmat `תִּיאָמַת` [cognate of `תְּהוֹם`] / Ug. *thm* `תְּהוֹם` (the cognate itself); Akk. *erṣetu*
  (netherworld) `הָאָרֶץ` / Ug. *arṣ* `הָאָרֶץ`; Akk. *nāru* / Ug. *nhr*: `נָהָר`; *uqnû* `סַפִּיר` / Ug. *iqnu* "lapis" =
  `סַפִּיר` (the 2026-10-21 harmonization); *ḫaṭṭu* `שַׁרְבִיט` / Ug. *ḫṭ* `שַׁרְבִיט`; *kussû* `כִּסֵּא` / Ug. *ksu*
  `כִּסֵּא`; *ekallu* `הֵיכָל` / Ug. *hkl* `הֵיכָל`; *erû* (eagle) `נֶשֶׁר` / Ug. *nšr* `נֶשֶׁר` [cognate].
- Cognates the earlier corpora reserved for their Akkadian counterpart are reserved here for the Ugaritic cognate of the
  same Hebrew word (`מַלְאָךְ`, `עוֹלָם`, `טוֹב`, `קָרָא`, `צֶלֶם`): the reservation is per corpus and per source word
  (guidelines §5.2, the last "Organizing a run" rule).
- Splits with an earlier corpus that this corpus makes on purpose (listed for the lead's harmonization): *ġlmt* `עַלְמָה`
  (the netherworld corpus has Sum. *ki-sikil* `עַלְמָה`: the Ugaritic is the cognate); *mlak* `מַלְאָךְ` (reserved and unused
  in the Akkadian corpora); *qrʾ* `קָרָא` (the Akkadian corpora: only *nabû*).

## 9. Gate tests (`ugarit_tools.py selftest`; every gate tested before the first line, guidelines §5.2)

| Line | expect | Hebrew |
|---|---|---|
| 1.3 III:40 | ok | `אָכֵן חָסַמְתִּי אֶת הַתַּנִּין, *צְמַדְתִּיו*;` |
| 1.3 III:41 | ok | `מָחַצְתִּי אֶת הַפֶּתֶן הָעֲקַלָּתוֹן,` |
| 1.3 III:41 | err | `מָחַצְתִּי אֶת הַנָּחָשׁ הָעֲקַלָּתוֹן,` |
| 1.3 III:42 | ok | `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים.` |
| 1.3 III:42 | err | `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים גְּדוֹלִים.` |
| 1.5 I:1 | ok | `כַּאֲשֶׁר מָחַצְתָּ אֶת לִיתָן, הַפֶּתֶן הַבָּרִחַ,` |
| 1.5 I:1 | err | `כַּאֲשֶׁר מָחַצְתָּ אֶת לִוְיָתָן, הַפֶּתֶן הַבָּרִחַ,` |
| 1.5 I:2 | ok | `כִּלִּיתָ אֶת הַפֶּתֶן הָעֲקַלָּתוֹן,` |
| 1.5 I:3 | ok | `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים –` |
| 1.6 VI:51 | ok | `בַּיָּם – אַרְשׁ וְהַתַּנִּין;` |
| 1.3 III:38 | err | `לְרוֹכֵב הָעֲרָפֶל? אָכֵן מָחַצְתִּי אֶת חֲבִיב` |
| 1.3 III:38 | ok | `לְרוֹכֵב הָעֲנָנִים? אָכֵן מָחַצְתִּי אֶת חֲבִיב` |
| 1.3 III:39 | ok | `אֵל, יָם; אָכֵן כִּלִּיתִי אֶת נָהָר, הָאֵל הָרַב;` |
| 1.3 III:39 | err | `אל, ים, הלא כליתי את נהר, האל הרב?` |
| 1.3 III:39 | err | `אֵל, יָם, הֲלֹא כִּלִּיתִי אֶת נָהָר, הָאֵל הַגָּדוֹל?` |
| 1.4 VII:17 | ok | `יִפְתַּח חַלּוֹן בַּבַּיִת,` |
| 1.4 VII:18 | ok | `אֲרוּבָּה בְּקֶרֶב הַהֵיכָל,` |
| 1.4 VII:18 | err | `אֶשְׁנָב בְּקֶרֶב הַהֵיכָל,` |
| 1.4 VII:19 | ok | `וְיִפְתַּח בֶּדֶק בָּעֲנָנִים` |
| 1.4 VII:19 | err | `וְיִפְתַּח בֶּדֶק בָּעֲרָפֶל` |
| 1.4 VI:46 | ok | `אֶת שִׁבְעִים בְּנֵי אֲתִירַת.` |
| 1.4 VI:46 | err | `אֶת שִׁבְעִים בְּנֵי אֲשֵׁרָה.` |
| 1.23 62 | ok | `לָאָרֶץ, שָׂפָה לַשָּׁמַיִם, וְנִכְנָסִים לְפִיהֶם צִפּוֹר הַשָּׁמַיִם` |
| 1.23 62 | err | `לָאָרֶץ, שָׂפָה לַשָּׁמַיִם, וְנִכְנָסִים לְפִיהֶם עוֹף הַשָּׁמַיִם` |
| 1.23 62 | err | `לָאָרֶץ, שָׂפָה לַשָּׁמַיִם, וְנִכְנָסִים לְפִיהֶם מְאוֹרוֹת הַשָּׁמַיִם` |
| 1.23 63 | ok | `וְהַדָּג בַּיָּם;` |
| 1.5 VI:9 | ok | `לָאָרֶץ: "מֵת בַּעַל הָאַדִּיר!` |
| 1.5 VI:9 | err | `לארץ: "מות בעל האדיר!` |
| 1.5 I:14 | ok | `הַגִּבּוֹר: הִנֵּה נַפְשִׁי, נֶפֶשׁ` |
| 1.6 VI:46 | ok | `הָרְפָאִים תַּחְתַּיִךְ;` |
| 1.6 VI:46 | err | `הַמֵּתִים תַּחְתַּיִךְ, בִּשְׁאוֹל;` |
| 1.6 VI:45 | err | `יַיִן הַחֲנֻפָּה. הַשֶּׁמֶשׁ,` |
| 1.4 IV:20 | ok | `אָז נָתְנָה אֶת פָּנֶיהָ` |
| 1.4 IV:20 | err | `אָז פָּנְתָה` |
| 1.4 VII:22 | ok | `נָשָׂא אֶת קוֹלוֹ וְצָוַח:` |
| 1.4 VII:22 | err | `נָשָׂא אֶת קוֹלוֹ וְקָרָא:` |
| 1.5 VI:15 | ok | `אֵבֶל עַל רֹאשׁוֹ, עֲפַר` |
| 1.114 15 | ok | `שׁוּכַּר אֵל, יָשַׁב בַּמַּרְזֵחַ שֶׁלּוֹ,` |
| 1.114 15 | err | `שׁוּכַּר אֵל, יָשַׁב בְּבֵית הַמִּשְׁתֶּה שֶׁלּוֹ בְּחֶבְרַת מַלְאָכָיו,` |
| 1.108 1 | ok | `הִנֵּה, יִשְׁתֶּה רָפִא, מֶלֶךְ עוֹלָם, וְיִשְׁתֶּה` |
| 1.108 2 | ok | `[אֵל] הַגִּבּוֹר וְהַיָּקָר, אֵל הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת,` |
| 1.108 2 | err | `[אֵל] הַגִּבּוֹר וְהַיָּקָר, אֵל הַיּוֹשֵׁב בְּעַשְׁתֹּרֶת,` |
| 1.1 II:5 | err | `נִבְרָא` |
| 1.2 I:22 | ok | `מַלְאֲכֵי יָם, מִשְׁלַחַת שׁוֹפֵט נָהָר` |
| 1.2 I:22 | err | `שְׁלִיחֵי יָם, מִשְׁלַחַת הַשּׁוֹפֵט נָהָר` |

## 10. Changes and proposals merged (by run and translator)

**Round 4 run 1, translator 1 (KTU 1.3), merged by the coordinator 2026-10-23** (details and reasons: `1-מחזור-בעל/project.md`, "KTU 1.3" → Proposals):
- **§7 1.3 III:40** = `אָכֵן חָסַמְתִּי אֶת הַתַּנִּין, *צְמַדְתִּיו*;` – the whole boast III 38–46 is affirmative: *l* is the asseverative *l* (III; CUC's reviewed parse, DULAT); `הֲלֹא …?` would add a negation the tablet does not have (Isa 51:9's question form is a [divergence] note); `אָכֵן`, since `הֵן` is *hl*'s (§3). *ištmdh* = *ṣmd* "harness, yoke" (Hutton; DULAT's *ṣmd*): `*צְמַדְתִּיו*` (italic, uncertain); `שָׁבַר` is the cognate of *ṯbr*.
- **§6.4** `אִמְרוּ אֶל X, שְׁנוּ אֶל Y:`; **§6.11** `בְּחֶרֶב מְלוּחָה`.
- **§6.3, the command forms:** pl. `קוֹדוּ וְנִפְלוּ, תִּשְׁתַּחֲווּ, כַּבְּדוּ אוֹתָהּ`; sg. `קוֹד וּנְפוֹל, תִּשְׁתַּחֲוֶה וְכַבֵּד אוֹתוֹ`.
- **§6.7, second half:** *ygly ḏd il w ybu qrš mlk ab šnm* = `וְנִגְלָה אֶל מְעָרַת אֵל, וּבָא אֶל לִשְׁכַּת הַמֶּלֶךְ, אֲבִי הַשָּׁנִים` (DULAT *ḏd* "grotto", *qrš* "private room"; `אֹהֶל` is *ahl*'s, `חֶדֶר` *ḥdr*'s).
- **§6.12, the list:** `מוֹשַׁב אֵל, מַחֲסֵה בָּנָיו; מוֹשַׁב הַגְּבִירָה אֲתִירַת־יָם; מוֹשַׁב פִּדְרַי בַּת אוֹר, מַחֲסֵה טַלַּי בַּת רְבִיבִים; מוֹשַׁב אַרְצַי בַּת יַעְבְּדַר; מוֹשַׁב הַכַּלּוֹת הָאֲצִילוֹת`.
- **Kept:** *lḥm* (vb) = `סָעַד` (§4.3, §6.11); *sʾd*, the true cognate of `סָעַד`, = `מְכַלְכֵּל` (a note in 1.3 I:3) – moving `סָעַד` now would split the feasting formula.
- **New one-lemma renderings of 1.3** (binding for the later tablets; full list in its project section): *phy* `רָאָה`, *ʿn* `הִבִּיט`, *ḥdy* `חָזָה`; *mḫṣ* `מָחַץ`, Gt `נִלְחַם`, *ḫṣb* `חָצַב`; the cups `כּוֹס` (*ks*), `גָּבִיעַ` (*krpn*), `סֵפֶל`, `*קֻבַּעַת*`, `קַשְׂוָה`; *ẓlmt* `צַלְמָוֶת`, *ṯbt* `שֶׁבֶת`, *kpr* `כֹּפֶר` (henna), *ḥṯb* `חָשַׂף`.
- **Tool fixes** (the translator's report): the `עוֹלָם` gate is licensed by *ġlm* too (`עֲלָמִים`, plural of `עֶלֶם`); the formula regexes accept the maqaf; §6.2 also mid-line; §6.3 command forms; §6.5 not where *ʿn* is "look".

**Round 4 run 1, translator 3 (KTU 1.5), merged by the coordinator 2026-10-23** (details: `1-מחזור-בעל/project.md`, "KTU 1.5" → Proposals):
- **Cross-lemma collisions settled:** *alp* (cattle) = `בָּקָר` (was `פַּר` in 1.3 IV:41, 1.4 V:45, VI:40, VI:49 – changed, apparatus glosses too), so that *pr* keeps `פַּר`; *arḫt* stays `פָּרוֹת`. *npl* and *ql* both `נָפַל`, and *prt* and *arḫ* both `פָּרָה`: accepted as splits, each with an apparatus note at its first occurrence (no natural second Hebrew word).
- **`תֹּהוּ`** is licensed by *thw* (1.5 I:15, [cognate], Gen 1:2); `בֹּהוּ` stays never. The gate is in `ugarit_tools.py`.
- **New one-lemma renderings of 1.5:** *un* `אוֹנִים` (instead of §4.4's `אֵבֶל`; the lemma is "grief, strength"), *mhmrt* `מַהֲמוֹרַת`, *bly* `בִּלָּה`, *ydt* `יָדוֹת`, *rks* `מֵזַח`, *hdy* `פָּצַע`, *ydy* `גָּרַד`, *ṯlṯ* (D) `שִׁלֵּשׁ`, *apnk* `אַחֲרֵי כֵן`, *ḫlq* `נִסְפָּה`.
- **Open for the user:** *ḫnzr* and *psltm* (see the report).

## 11. The fifth-day dossier (`3-תיק-היום-החמישי/`, coordinator, 2026-10-23)

Short excerpts from six other cultures, each translated from its own language (the base texts: the dossier's
`project.md`). The rules of this file apply where they can (one Hebrew per source word; names transcribed; echo
control); the Ugaritic gates of §5 do not (the dossier has its own tool, `dossier_tools.py`). **The comparison word of
the dossier is `נָחָשׁ`:** every language's generic word for "snake" is rendered `נָחָשׁ` (Gk. ὄφις, Skt. *áhi-*, Hitt.
MUŠ / *illuyanka-* as a common noun, ON *ormr*, Kanbun 虵), so that the reader sees one creature across the cultures
([equivalent], typological unless the note says otherwise); the Bible's own monster words `תַּנִּין` and `לִוְיָתָן`, the
verb `בָּרָא`, `אֱלֹהִים` and `שְׁאוֹל` are **never** used in a dossier line (the verifier blocks them): the apparatus
compares them.

| Language | Source word | Hebrew | Note |
|---|---|---|---|
| Egyptian | *nṯr* | `אֵל` | as Ug. *il* |
| | *rmṯ* | `בְּנֵי הָאָדָם` | [equivalent] Gen 1:26 `אָדָם` |
| | *ꜥw.t* | `צֹאן` | "small cattle, flock": both "the flock of god" (E130) and the animals given as food (E132) |
| | *jrj* | `עָשָׂה` | [equivalent] Gen 1:7, 16, 25–26 |
| | *pt*, *tꜣ* | `שָׁמַיִם`, `אֶרֶץ` | |
| | *snk n mw* | `תַּאֲוַת הַמַּיִם` | *snk* "greed, voracity" (TLA: "Gier (des Wassers)") |
| | *ṯꜣw* | `רוּחַ` | "breath, air" |
| | *fnḏ* | `אַף` | Gen 2:7 `בְּאַפָּיו` [equivalent] |
| | *snn* | `צֶלֶם` | "image, likeness, statue"; [equivalent] Gen 1:26–27 |
| | *ꜣpd*, *rm* | `עוֹף`, `דָּג` | [equivalent] Gen 1:20–22, 26 |
| | *sm* | `עֵשֶׂב` | |
| Greek | ὄφις; δράκων; πέλωρ / πέλωρον | `נָחָשׁ`; `דְּרָקוֹן`; `מִפְלֶצֶת` | LXX layer (guidelines §6.4.5): ὄφις = `נָחָשׁ` (Gen 3:1); δράκων = `תַּנִּין` (Ex 7:9–12; Ps 74:13) and `לִוְיָתָן` (Isa 27:1; Job 40:25); κῆτος (the root of Κητώ) = `תַּנִּין` in Gen 1:21 (τὰ κήτη τὰ μεγάλα) and `דָּג` in Jonah 2:1 |
| | μέγας | `גָּדוֹל` | LXX Gen 1:21 μεγάλα = `הַגְּדֹלִים` |
| | Κητώ, Φόρκυς, Θαύμας, Εὐρυβίη, Γαῖα, Ἔχιδνα, Τυφωεύς, Τάρταρος, Ἀφροδίτη, Γραῖαι, Ἄριμοι | `קֵטוֹ`, `פוֹרְקִיס`, `תָאוּמָס`, `אֶוּרִיבִיָּה`, `גַּאיָה`, `אֶכִידְנָה`, `טִיפוֹאֶוּס`, `טַרְטָרוֹס`, `אַפְרוֹדִיטֵה`, `הַגְּרַאִיּוֹת`, `הָאֲרִימִים` | |
| Hittite | MUŠ*illuyanka-* | `הַנָּחָשׁ` (`אִילוּיַנְקָה` as the name) | *illuyanka-* is "serpent"; the text uses it as the monster's name |
| | {D}IŠKUR (Tarḫunna) | `אֵל הַסְּעָרָה` | by meaning (the logogram's Hittite reading is debated): a note |
| | DINGIR{MEŠ} | `הָאֵלִים` | |
| | Inara, Ḫupašiya, Kiškilušša, Ziggaratta | `אִינָרָה`, `חוּפַּשִׁיָּה`, `כִּישְׁכִּילוּשָּׁה`, `זִיגָּרָתָּה` | |
| Vedic | *áhi-* | `נָחָשׁ` | |
| | *vr̥trá-* | `וְרִטְרָה` | "the Obstacle, the Encloser" (a note) |
| | *vájra-* | `וַגְ'רָה` | the thunder-club (a note) |
| | *áp-* (pl.) "the waters"; *samudrá-* | `הַמַּיִם`; `הַיָּם` | |
| | *párvata-* | `הַר` | |
| | Índra, Tváṣṭr̥, Dāsá, Paṇí | `אִינְדְּרָה`, `תְּוַשְׁטָר`, `דָּאסָה`, `פַּנִּי` | |
| Old Norse | *ormr* | `נָחָשׁ` | |
| | *fiskr* | `דָּג` | the serpent called a fish (24.6) |
| | Þórr, Hymir; *umgjǫrð allra landa* | `תּוֹר`, `הִימִיר`; `חֲגוֹרַת כָּל הָאֲרָצוֹת` | |
| Kanbun | 虵 (= 蛇) | `נָחָשׁ` | |
| | 遠吕智 / 八俣遠吕智 (Woroti, Yamata-no-Woroti) | `אוֹרוֹצִ'י`, `אוֹרוֹצִ'י שְׁמוֹנֶה־הַמִּסְעָפִים` | |
| | 速須佐之男命, 高志, 肥河 | `הַיָּה־סוּסָנוֹאוֹ`, `קוֹשִׁי`, `נְהַר הִי` | |
| | 八 | `שְׁמוֹנֶה` | the sacred number, kept every time |

**Round 4 run 1, translator 2 (KTU 1.4 I–IV), merged 2026-10-23:** *mgn* (vb) `מִגֵּן` (Prov 4:9), n. `מַתָּנָה`; *ġẓy* `רִצָּה`;
*mdl* `חָבַשׁ` [equivalent] (Gen 22:3), *ṣmd* `צָמַד`; *ʿr* `עַיִר` (always vocalized: "city"), *pḥl* `חֲמוֹר`, *atn* `אָתוֹן`; *lbn
lbnt* `לָבַן לְבֵנִים` (Gen 11:3), *ulṯ* `מַלְבֵּן`; *pglt* `פִּגּוּל`, *qlt* `קָלוֹן`, *dnt* `מָדוֹן`; *msdt* `מוֹסָדוֹת`, *rủm* `רְאֵמִים`;
*nʿl* `*נְעָלִים*` (italic; DULAT "palanquin" in the note); *dbb* `*זוֹחֲלִים*`; emphatic *k* `אָמְנָם`; *hm* "they" `הֵם`,
interrogative *hm* `אוֹ` (Ug. *u* "or", if it appears, takes `אוֹ` too only after a check: a split to avoid). The
coordinator's decisions on the translator's open points: *nʿl* and *mdl* stay as drafted (with the alternatives in the
apparatus); interrogative *hm* stays `אוֹ`.

**Round 4 run 1, translator 2 (KTU 1.4 V–VIII), merged 2026-10-23:** §6.10 fixed: `הִנֵּה יוֹם וְשֵׁנִי` / `שְׁלִישִׁי, רְבִיעִי יוֹם` /
`חֲמִישִׁי, שִׁשִּׁי יוֹם` / `הִנֵּה בַּיּוֹם הַשְּׁבִיעִי` (*mk* and *hn* both `הִנֵּה` here, as the formula needs); §6.9 kept (where
Kothar's proposal swaps *urbt* and *ḥln*, the Hebrew follows the tablet; jussive `יִפְתַּח` in the command, `פָּתַח` in the
execution). New: *ʿdn* `עִדָּן`, *ʿdt* `עֵת`; *šry* `*יַשְׁרֶה*`; *kll* `כָּלַל`; *ʿḏbt* `עִזְבוֹנוֹת`; *ṭhr* `טֹהַר`; *ḫpṯt* `בֵּית הַחָפְשִׁית`;
*trr* `הֵחִיל`, *ḫš* `חָרַד` (`רעד` = *nṭṭ*, `חוש` = *ḥš*); *u* `אוֹ` (shared with interrogative *hm*: accepted – both "or" in
alternative questions); *pq* Š `סִיפֵּק`; *krm* "rams" `כָּרִים`; *lʾk* `שִׁגֵּר`; *mspr* `מִסְפָּר`; *bmt arṣ* `גַּבֵּי אֶרֶץ` (the cognate
`בָּמֳתֵי אָרֶץ`, Amos 4:13, in the note). Tool: a word split across two lines is licensed in both (`license_text`); the §6.1
regex accepts plene `וצווח`.


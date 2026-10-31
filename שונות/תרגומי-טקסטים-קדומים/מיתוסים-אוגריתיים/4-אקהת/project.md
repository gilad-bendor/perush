# Project: the Aqhat epic (KTU 1.17, 1.18, 1.19)

Round 5, run 3 (`../../curated-translation-candidates.md`, "Round 5 plan", run 3). Coordinator: the run's session;
translators as sub-agents, **one at a time** (guidelines §5.1, range A), each with `../translator-brief--ugaritic.md`
(§9 is new for the epics).

## Scope

The three tablets of the Aqhat epic as CUC (KTU³) gives them, 489 lines: KTU 1.17 (189: Danel's incubation and the son
granted; the Kotharot; Kothar's bow; Anat covets it), 1.18 (76: Anat's plot; Yaṭpan; the eagles over Aqhat), 1.19 (224:
the drought; Danel finds the remains in the eagles; the curse on the towns; the mourning; Pughat sets out to avenge her
brother). The scribe Ilimilku (the colophon of 1.17 VI). The end of the story is lost.

## Base text and versions

CUC v0.2.8 (KTU³'s readings; `../../sources/CUC/`) with its machine parses (DULAT); DULAT through CUC's lexicon.
**EUPT** (Göttingen) has not published Aqhat yet (checked 2026-10-31: its TextAPI collection has KTU 1.14–1.16 only).
Rank 3 (not in the folder; never quoted verbatim): Parker in *Ugaritic Narrative Poetry* (1997), Pardee in *COS* I,
Wyatt 2002, Margalit 1989, Ginsberg in *ANET*; Cassuto 1951 does not have Aqhat.

## Line numbering

KTU's (= CUC's): `### <column>:<line>` (`### I:26`).

## Files

As the other projects: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated
`translation-<KEY>.rtl.md` and `translation.rtl.md` (`python3 -I -B ../ugarit_tools.py build`); one section per tablet below.

## Decisions (coordinator, before the first line)

- The corpus renderings bind (§1–§12); §12 holds the epics' names, key terms and the new gates (`נֶשֶׁר`, `אַלְמָנָה`,
  `יָתוֹם`, `מַצֵּבָה`, `קֶשֶׁת`, `בְּכוֹר`, `נֶדֶר`) and the *rḫp* check (Gen 1:2).
- The son's duties (1.17 I 26–34; I 44–II 8; II 16–23) get one Hebrew, fixed at the first copy.

## Progress log (coordinator)

- 2026-10-31: tool keys, renderings §12, brief §9, gates tested (`selftest` 51 lines, 0 failures).

## KTU 1.17

Translator 1 of Round 5 run 3 (2026-10-31). Files: `annotated-1.17.rtl.md`, `translation--intro-1.17.rtl.md`, the
generated `translation-1.17.rtl.md` and `translation.rtl.md`.

### Scope

All 189 CUC lines: I:1–47, II:1–47, V:1–39, VI:1–56 (columns III–IV, about a hundred lines, are lost and not in the
base). Column I: Danel's seven-day incubation, Baal's intercession and the son's duties, El's blessing; II: the duties
announced to Danel and his joy, the seven-day feast of the Kotharot, the months counted; V: Danel judging at the gate,
Kothar's arrival with the bow, the meal, the bow handed to Aqhat; VI: the feast, Anat covets the bow, offers silver,
gold and immortality, Aqhat's refusal and mockery, Anat's threat and her journey to El; the colophon (VI:56, almost all
restored). The tops and bottoms of all columns are broken.

### Sources consulted

CUC v0.2.8 (KTU³ readings, machine parses) through `ugarit_tools.py data / pars / lex / dulat / grep`; `renderings.md`
§1–§12; the corpus's earlier tablets for every repeated line (1.3, 1.4, 1.6, 1.23, 1.24, 1.1, 1.2, 1.5); the Hebrew Bible
of the repository (every verse printed before quotation; `check_bible_quotes.py` clean). Rank 3 (Ginsberg, Parker in
*UNP*, Pardee in *COS* I, Wyatt, Margalit, Greenstein) only from memory and only as "the usual reading", never quoted.
Cassuto 1951 has no Aqhat. EUPT has no Aqhat.

### Decisions

- **The son's duties (four copies):** fixed at I:25–33 and copied word for word, the person changed (I:42–47 third
  person, El; II:1–8 second; II:15–23 first). The strings: `וְיִכּוֹן בנו בבית, שורש בקרב היכלו` · `מציב מצבת
  אֵל־אביו, בקודש` · `*ציון* עמו; מן הארץ מוציא קיטורו,` · `מן העפר נוטר שרידיו; סוגר לְחָיֵי מנאציו, מגרש את העושה
  לו (רָעָה);` · `אוחז בידו בשכרון, מְעַמְּסוֹ כי שָׂבַע יין;` · `טורף חלקו בבית בעל, ומנתו בבית אֵל;` · `טָח גגו
  ביום טיט, רוחץ בגדיו ביום רפש.` The copies differ only where the tablet does: II:4 and II:21 put "eating the
  portion" before "holding his hand"; II:17 omits the colon *l arṣ mšṣu qṭrh* (a scribal skip from *l* to *l*); I:28 has
  *dmr* for *ḏmr*; II:23 *npsy* for *npṣ*; each line keeps its own break (words split across lines – *b š|krn*,
  *mn[t]|y*, *kṯ|rt*, *w y|ššq*, *yšl|ḥm*, *yš|rbʿ*, *l mš|knth*, *k|ṯr*, *tštḥ|wy*, *yʿš|r* – are put whole in the line
  where most of the word or its beginning stands, and noted).
- ***šbʿ* in the duties is the verb "to be sated"**, not the numeral (CUC's machine parse): the person changes with the
  list (*šbʿ* / *šbʿt* 2nd / *šbʿt* 1st) – `כי שָׂבַע / שָׂבַעְתָּ / שָׂבַעְתִּי יין`.
- ***uzr* (the crux of I 1–22):** `אָזוּר` "girded" (DULAT "clothed"), the root of *mizrt* `אֵזוֹר` (I:5, I:15);
  rejected: "offering" (no lexical basis; noted). ***yd ṣth* / *yd mizrth*:** *yd* = *ydy* "cast off" (`*השליך*`,
  italic), rejected: *yd* "hand" > "with" (`עם כסותו`, noted; the choice decides whether he slept in the ritual garment).
- **Baal's speech (I:16–33)** opens with *abyn* `אביון` [cognate] and *anḫ* `נאנח`; El's blessing (I:34–37) takes
  Baal's pair *brk* // *mrr* (`בירך` // `*אימץ*`; I:23–24 `תברכנו` // `*תאמצנו*`): the request and its fulfilment in
  the same words. I:34 CUC *it* is read *il* `אֵל` (DULAT has no *it*; the context needs El): noted.
- **The *l* of the duties** (*l arṣ mšṣu qṭrh*, *l ʿpr ḏmr aṯrh*) = "from" (`מן`): *mšṣu* "one who brings out" needs a
  source; "to the earth" noted. *aṯr* = DULAT *aṯr* (II) "remains" `שרידים` (rejected "place", "steps" `אַשֻּׁר`).
- ***skn*** = `מצבת` (not italic: DULAT "stela", Emar *sikkanu*); *nṣb* `מציב` keeps the Hebrew root shared by the verb
  and `מַצֵּבָה` (Gen 35:14, 20). ***ztr*** `*ציון*` (2 Kgs 23:17), so that `מַצֵּבָה` stays with *skn*. ***ʿm*** `עמו`
  [cognate `וַיֵּאָסֶף אֶל עַמָּיו`]. ***qṭr*** `קיטור` (cognate; the Maqlû corpus has Akk. *qutru* = `קיטור` too).
- **Danel's action formula** (II:27–29, V:4–5, V:13–15, V:33–35): `אחרי כן דנאל, איש רָפִא, אף הנה הגבור, איש ההרנמי`
  – *aphn* = `אף הנה` (its parts), so that it pairs with *apnk* `אחרי כן` and does not take `אז` (*idk*).
- **The day-count formula** §6.10 copied in I:5–15 and II:32–39; V:3–4 *w hn šbʿ b ymm* differs (order, *hn*):
  `וְהִנֵּה שְׁבִיעִי | בַּיָּמִים` with `[סטייה מן הנוסחה]`. The month count (II:43–46) follows the same pattern:
  `יֶרַח – יֶרַח שני יצא; שְׁלִישִׁי, רְבִיעִי [יֶרַח; עֲשִׂירִי] יֶרַח הגיע`.
- **The gate scene:** *ytšu* (Gt) `התנשא` ("rose"); *b ap ṯġr* `בְּאַף השער` (literal); *tḥt adrm d b grn* `תחת האדירים אשר
  בגורן` (the nobles, or the mighty trees: both readings kept open by the Hebrew); *ydn dn almnt / yṯpṭ ṯpṭ ytm* `דן |
  דין אלמנה, שָׁפַט שֶׁפֶט יתום` (*ṯpṭ* n. = `שֶׁפֶט`, the cognate internal object, not `מִשְׁפָּט`).
- **Kothar's visit:** *b nši ʿnh w yphn* (masc.) `בשאתו את עיניו – וראה:` from 1.4 II:12; *k yʿn w yʿn tdrq ḫss* `אמנם הביט
  – והביט: את פסיעת חַסִּיס` (from 1.4 II:14–15; `[סטייה מן הנוסחה]` for §6.5); *hlk qšt ybln* `הולך – קשת מוביל` (a
  circumstantial prefix form rendered as a participle, noted); *šrbʿ* `רִבֵּעַ` (piel: the hifʿil `הִרְבִּיעַ` means
  "mate"); *imr b pḫd* `כבש מן *המרעית*` (`צאן` is *ṣin*'s, `עדר` *kḏd*'s); *sʾd* `כלכל`; the command (V:16–21) and its
  execution (V:22–31) word for word.
- **The bow passage:** *qšt* `קשת` (reserved); *qṣʿt* `*חצים*` (italic: "arrows" or "bow-ends"); *[yd]rk* `*[ד]רך*`
  (Ps 7:13 `קַשְׁתּוֹ דָרַךְ`; the restored *yd* in V:35 is rendered in V:36, noted); *nqb* `*נקב*`; *prʿ* `*בחיר*` (not
  `ראשית`, to keep Gen 1:1's word off it); *ṣd* `ציד`.
- **Anat's offer and Aqhat's answer:** *irš* `תְּבַע` (`בקש` is *bqṯ*, `שאל` *šal*); *bl mt* `בַּל מָוֶת`; *ašsprk*
  `אַסְפִּירְךָ` (Š of *spr*, vocalized); *ḥwy* D `חִיָּה`; *šrg* `שקר` (the cognate `שָׂרַג` "entwine" noted); *ḫḫ*
  `בוץ`; *uḫryt* `אחרית`, *aṯryt* `סוף` (Qoh 7:2); *spsg* `זיגוג`; *ḥrṣ* (II) `סיד`; ***mt kl amt w an mtm amt***
  `מוֹת כל אמות, ואני מוֹת אמות` (Num 16:29 `כְּמוֹת כָּל הָאָדָם`, Gen 2:17 `מוֹת תָּמוּת`); *mṯn rgmm argm* copied from
  1.3 IV:31–32 / 1.4 I:19–20 `אף מִשְׁנֵה מילים אוֹמַר`; *tinṯt* `נשים`; *bʿl* (vb) `יפעל` (the cognate of `פָּעַל`, not
  of `בַּעַל`); *qry* D `*הִקְרָה*` (Gen 27:20), G `אֶקְרְךָ` (Deut 25:18); the oath *hm l aqryk* `אם לא אֶקְרְךָ` (the
  elliptic oath kept); *nʿmn* `הנַּעֲמָן` (1.24:25); *ʿmq* (II) `*תקיף*` (`עָצוּם` is *ʿẓm*'s, 1.3 I:12); *kdd*
  `*פעוט*` (`יֶלֶד` is *yld*'s); *lšn* `הלשינה`.
- **Readings against CUC** (each noted in the פירוק): I:34 *it* → *il*; II:8 *unil* → *dnil* (`בדנאל?`); VI:47 *mbr* →
  *mbk* (the formula §6.7); V:8 *yṯpṯ tpṭ* = *yṯpṭ ṯpṭ* (metathesis); I:20 *wm* = *km* (`*כמו*`); II:47 *rhm* perhaps
  *rḥm* (`*רֶחֶם*?`).
- **Vocalization:** names at their first occurrence (`דָּנִאֵל`, `בַּעַל`, `אִישׁ הַהַרְנַמִּי`, `אַקְהָת`, `חִכְּפַּת`,
  `לְבָנוֹן`, `עֲנָת`), always `כּוֹתַר`, `חַסִּיס`, `הַכּוֹתָרוֹת`, `דַּנָּתַי`, `אֵל`, `אֵלִים`, `מוֹת` / `מָוֶת`, `יֶרַח`;
  also `רָפִא`, `הִלָּל`, `חַיִּן` (unvocalized they read as "heal", "praise", "grace"), and ambiguous verb forms.

### Open decisions for the user

1. ***uzr***: `אָזוּר` (girded) or "offering"? 2. ***yd ṣth***: "cast off his garment" (`*השליך*`) or "with his
garment" (he slept in the ritual garment)? 3. ***l arṣ mšṣu qṭrh***: "brings out his smoke *from* the earth" (the
father's spirit?) or "sends up incense *to* the earth" (offerings to the dead)? 4. ***adrm d b grn***: nobles or mighty
trees (the Hebrew keeps both)? 5. ***qṣʿt***: arrows (`*חצים*`) or the bow's ends – and the split with *ḥẓ* (Kirta)
below. 6. VI:30–32 (Baal "revived" and feasted): the usual reading is followed; the passage is the hardest of the tablet.

### Progress log

- Drafted in seven sections, each filled and verified on saving (I:1–15; I:16–34; I:35–II:23; II:24–47; V:1–39;
  VI:1–56).
- Pass (a) fidelity: brackets checked against CUC line by line (restored words bracketed when their root is mostly
  restored); VI:39 `[ואף]` → `[אף]` (the tablet has no *w*); first-draft over-vocalization of section 1 removed (★).
- Pass (b) consistency: the four copies of the duties compared string by string (identical except the person and the
  tablet's own differences); repeated formulas copied from 1.3 / 1.4 / 1.6 (II:10–13, V:9–11, VI:4–6, VI:10, VI:16,
  VI:46–50); every new Hebrew word grepped (`grep --all`): collisions found and fixed – `עצום` (*ʿẓm*) → `*תקיף*` for
  *ʿmq*; `ילד` (*yld*) → `*פעוט*` for *kdd*; `מִשְׁנֵה מילים אוֹמַר` aligned with 1.3 / 1.4; `אקהת`, `גברת`, `חכפת`
  unvocalized after their first occurrence.
- Pass (c) Hebrew: the generated `translation-1.17.rtl.md` read through; `הַמְחֻיֶּה`, `נְעִימוּת` vocalized; eleven
  footnotes for the cruxes and the key parallels.
- `ugarit_tools.py build 1.17`; `verify 1.17 --strict`: 189 entries, 0 problems, 0 repeated-line differences;
  `check_bible_quotes.py` on the three files: 0 problems.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (parses, DULAT; no EUPT). **9 `>` lines changed**, all brackets (one sign or an ending restored → no bracket: I:9, I:17, II:17, II:21, II:33, V:5, VI:3, VI:32, VI:54), each with a `(תיקון סוקר: …)` note. **The son's duties** (I:26–33, I:42–47 + II:1–8, II:16–23) and Danel's action formula, the gate line and the feast lines: identical Hebrew where the Ugaritic is identical, the person changing as on the tablet (3rd → 2nd → 1st); the order of II:4–6 (*spu ksmk* before *aḫd ydk*) is the tablet's. No meaning, negation or *l* errors found. Rebuilt; `verify 1.17 1.18 1.19 --strict` 0 problems (the one repeated-line difference, 1.19 III:31 / III:43, is the next word on the tablet, *hyt* / *hmt*); quotes 0.

### The text on its own terms

- **What a son is** (I:25–33 ×4): the son is defined by duties, not by love or inheritance – the cult of the dead
  father (stela of the god of the father, smoke from the earth, guarding his remains from the dust), his honour among
  the living (shutting the mouths of his despisers, driving off his wrongdoers), his body (holding his hand when drunk,
  carrying him when sated), his share at the gods' meals, and the roof and the laundry. The list is repeated four times:
  the poem's heart is the father's need.
- **Incubation** (I:1–15): the childless king sleeps seven nights in the sanctuary after feeding the gods; the answer
  comes on the seventh day through an intercessor god – the gods are approached through gifts, a patron and patience.
- **The gods as a court** (I:16–37): Baal pleads, El decides and blesses with a cup in hand; the blessing restates
  the request word for word.
- **Sex, conception and birth as divine work** (I:38–41, II:26–46): El's blessing names the kiss, the embrace and the
  pregnancy; the Kotharot, "daughters of the New Moon, the swallows", are feasted seven days, and the father counts the
  moons – fertility belongs to the moon and to goddesses who come and go like birds.
- **Joy** (II:9–14): Danel's face shines, his brow relaxes, he laughs, puts his feet on the footstool and says "I will
  sit and rest" – the very words El spoke when Baal returned from death (1.6 III:18–19).
- **The just king** (V:6–8): sitting at the gate with the notables at the threshing floor, he judges the widow and the
  orphan – the royal ideal of the Torah and the prophets, already in the poem's definition of a good man.
- **Hospitality to a god** (V:9–31): he lifts his eyes, sees the god coming from afar, calls his wife to prepare a
  lamb; the god eats, gives the gift and returns to his tents – the host's duties exactly as in Gen 18.
- **The composite bow** (VI:20–23): wood of Lebanon, sinew of wild oxen, horn of ibexes, tendons from a bull's hocks,
  reeds – an exact technical recipe inside a myth; the bow is a craftsman-god's masterpiece.
- **Mortality accepted** (VI:34–38): offered silver, gold and "no-death", the young man answers that a man's end is
  plaster on his skull and "the death of all I shall die, I too shall surely die" – the clearest statement of human
  mortality in Ugaritic, and the beginning of his downfall.
- **Hybris and gender** (VI:39–45): "bows are for warriors – shall women now hunt?": the mortal mocks the goddess as a
  woman; she laughs aloud and plots in her heart – the tragic error of the epic.

### Key parallels

- **Gen 9:20–27** (I:30, ×4): the son who holds his drunk father's hand ↔ Noah drunk and covered by Shem and Japheth
  [divergence]: in Ugarit a fixed filial duty, without shame; in Genesis the setting of Ham's sin.
- **2 Sam 18:18; Gen 35:14, 20** (I:26): `וַיַּצֶּב לוֹ … מַצֶּבֶת … כִּי אָמַר אֵין לִי בֵן` – the stela that a son
  should set up (*nṣb skn*, *in bn lh*) [cognate].
- **Gen 18:1–8** (V:6–31): the father at the entrance, `וַיִּשָּׂא עֵינָיו וַיַּרְא` (*b nši ʿnh w yphn*: *nšʾ ʿn*
  cognate, *phy* not *rʾy*), the wife told to prepare food, cattle / a lamb for the divine guest [cognate / equivalent].
- **Gen 2:17, 3:4; Num 16:29** (VI:27, VI:38): `בַּל מָוֶת` ↔ `לֹא מוֹת תְּמֻתוּן`; `מוֹת כל אמות … מוֹת אמות` ↔
  `כְּמוֹת כָּל הָאָדָם`, `מוֹת תָּמוּת` [cognate; divergence]: a god offers immortality and the man refuses it.
- **Jer 5:28; Ex 22:21; Deut 10:18** (V:7–8): `דִּין … דָנוּ דִּין יָתוֹם` – *ydn dn* / *yṯpṭ ṯpṭ* [cognate].
- **Isa 9:5** (II:14): *k yld bn ly* ↔ `כִּי יֶלֶד יֻלַּד לָנוּ בֵּן` [cognate].
- **Gen 27:3** (V:37): the father sends the son with his bow for game [equivalent].
- **Gen 28:11** (I:5): *yln* `וַיָּלֶן` – incubation at a holy place followed by a stela [cognate].
- **Gen 9:13** (V:26): a god "gives" a bow (*ytn qšt* `קַשְׁתִּי נָתַתִּי`) – a [divergence] at most: a hunting bow given
  to a man, not a sign in the cloud.
- **Prov 26:23** (VI:36): *spsg* "glaze", the source of the emendation `כְּסַפְסַג` [cognate].

### Lines shared with other tablets

Copied: II:10 = 1.4 IV:28 (`פרק מצח(ו) וצחק;`); II:11 ≈ 1.6 III:15 (`רגל(יו)`: no suffix on the tablet); II:12–13 =
1.6 III:17–19; II:25 ≈ 1.3 II:18; II:27, II:40 = 1.24:41, 15 (the Kotharot's titles); V:9 = 1.4 II:12 (masc.); V:10 =
1.3 IV:38; V:11 ≈ 1.4 II:14–15; V:15 *gm* = 1.1 IV:2; VI:4–6 = 1.4 III:42–IV:37 (§6.11); VI:10 = 1.4 II:12; VI:16 = 1.2
III:15; VI:19 ≈ 1.3 II:33; VI:39 = 1.3 IV:31–32 / 1.4 I:19–20; VI:46–50 = 1.4 V:20–21, IV:20–26, 1.6 I:32–38 (§6.2,
§6.7, §6.3); VI:56 = 1.6 VI:54–55. Shared with 1.18–1.19 (for the next translators): Danel's action formula, the gate
scene (1.19 I:21–25), *b nši ʿnh* (1.19 II), Danel's return home (1.19 IV:8–9).

### Proposals for the shared renderings

- **§12 *aḫd ydh b škrn*** → `אוחז בידו בשכרון` (revised: *škrn* has no suffix in any copy; §12 had `בְּשִׁכְרוֹנוֹ`).
- **§12 *skn*** → `מַצֵּבָה` without italics (DULAT "stela"; Emar *sikkanu*), with *nṣb* `מַצִּיב`.
- **§12 *ʿms*** → `עמס` (`מְעַמְּסוֹ`), as 1.6 I:12 and 1.114:18.
- **The son's duties** (the strings above) and **Danel's action formula** `אחרי כן דנאל, איש רָפִא, אף הנה הגבור, איש
  ההרנמי` – candidates for §6 / §7 (1.19 repeats both).
- **New one-lemma renderings:** *uzr* `אָזוּר`; *ydy* `השליך`; *ṣt* `כסות`; *lyn* `לן`; *abyn* `אביון`; *anḫ* `נאנח`;
  *šrš* `שורש`; *iṯ* `יש`; *mrr* (II) `*אימץ*`; *kn* `יכון`; *ilib* `אֵל־אביו`; *ztr* `*ציון*`; *ʿm* (II) `עם`; *mšṣu*
  `מוציא`; *qṭr* `קיטור`; *aṯr* (II) `שרידים`; *ṭbq* `סגר`; *lḥt* `לחיים`; *nʔṣ* `נאץ` (D `מנאץ`); *ʿšy* `עשה`; *škrn*
  `שכרון`; *šbʿ* (vb) `שָׂבַע`; *ksm* `חלק`; *mnt* `מנת`; *ṭḫ* `טח`; *gg* `גג`; *ṯiṭ* `טיט`; *npṣ* `בגדים`; *rṯ* `רפש`;
  *brlt* `תאווה` (as 1.5); *mḫ* `*עלז*`; *ʿrš* `ערש`; *ylt* `ילדה`; *ṣhl* `צהל`; *pit* `פאה`; *yld* N `נולד`; *mddt*
  `*מחלקות*`; *nʿmy* `נְעִימוּת`; *ysmsmt* `*יופי*` (as *ysmt* in 1.5); *hrt* `הריון`; *ḫllt* `חִיל`; *spr* `ספר`, Š
  `אַסְפִּיר`; *ytšu* (Gt) `התנשא`; *ap* (nose, front) `אַף`; *ṯġr* `שער`; *grn* `גורן`; *dn* (vb, n.) `דן`, `דין`; *ṯpṭ*
  (n.) `שֶׁפֶט`; *aphn* `אף הנה`; *gm* `בקול`; *mṯt* `גברת`; *imr* `כבש`; *pḫd* `*מרעית*`; *ahl* `אוהל`; *mšknt*
  `משכנות`; *nqb* `*נקב*`; *drk* `דרך`; *prʿ* `*בחיר*`; *bln* `*בליל*`; *ksl* `כסל`; *yṣb* N `*נטען*`; *qry* D `הִקְרָה`;
  *špk* `שפך`; *irš* `תבע`; *ṯqb* `*שקבים*`; *gd* (II) `גיד`; *qrn* `קרן`; *mtn* `*מיתרים*`; *ʿqb* `עקב`; *ġl* `*סבך*`;
  *bʿl* (vb) `פעל`; *ḥym* `חיים`; *ḥwy* D `חִיָּה`; *šrg* `שקר`; *ḫḫ* (n.) `בוץ`; *uḫryt* `אחרית`; *aṯryt* `סוף`; *lqḥ*
  `לקח`; *spsg* `זיגוג`; *nsk* `נסך`; *ḥrṣ* (II) `סיד`; *tinṯt* `נשים`; *ṯb* `שוב`; *ntb* `נתיב`; *pšʿ* `פשע`; *gan*
  `גאון`; *ʿmq* (II) `*תקיף*`; *lšn* `הלשין`; *qll* `קלל`; *kdd* `*פעוט*`.
- **Collisions for the coordinator:**
  1. ***adr*** (V:7, VI:20–23) is the cognate of `אַדִּיר`, which §6.6 gives to *aliy(n)* (`בַּעַל הָאַדִּיר`, `אַדִּיר
     הַלּוֹחֲמִים`). Kept `אדיר` for *adr* (the cognate; §12 also has `הָאַדִּירִים`); the split is visible and noted. If the
     user wants one Hebrew per lemma strictly, *aliyn* would have to move (a corpus-wide change) – not proposed now.
  2. ***gd*** (II) "sinew" `גִּיד` (VI:21, cognate, Gen 32:33) vs 1.3 III:35 / 1.4 II:20 *dt* `*גידי*` (italic, uncertain):
     by the cognate rule *gd* keeps `גיד`; *dt* there should move (e.g. `*מֵיתְרֵי*` or by DULAT's sense).
  3. ***qṣʿt*** `*חצים*` vs ***ḥẓ*** "arrow" (Kirta 1.14 III, the cognate of `חֵץ`): either *ḥẓ* `חֵץ` and *qṣʿt* `*חצים*`
     as a noted split (proposed: the italics mark *qṣʿt*), or *qṣʿt* moves (`*קְצָעוֹת*`?) – the translator of 1.14
     decides with you.
  4. *ksm* `חלק` and *kmn* `חלקה` (1.3 IV:38) share a root: two lemmas, two nouns (accepted).
  5. *yṣʾ* `יצא` and *tbʿ* `יצא לדרך` (§6.2) share `יצא` (existing; accepted).

### Lessons for the guidelines

- **A repeated list whose person changes** (the son's duties) is best checked by normalizing the suffixes (*-h/-k/-y* →
  *-X*; `־ו/־ך/־י` → `־X`) and diffing the copies: it finds the tablet's own differences (the swapped order, the skipped
  colon) at once.
- **CUC's machine parse misreads verbs as numerals and particles** (*šbʿ* "sated" as "seven", *mk* "behold" as "puddle",
  *ṯlṯ* "third" as "copper", *tmrnn* as a personal name): every number-shaped word needs a check against the context.

## KTU 1.18

Translator 1 of Round 5 run 3, resumed (2026-10-31). Files: `annotated-1.18.rtl.md`, `translation--intro-1.18.rtl.md`,
the generated `translation-1.18.rtl.md`.

### Scope

All 76 CUC lines: I:1–34 (Anat threatens El in the words of 1.3 V; El yields; Anat offers Aqhat brotherhood and to teach
him hunting near Qrt Ablm, the moon-god's town), IV:1–42 (Anat hires Yaṭpan; her plan – Yaṭpan carried "like an eagle"
in her belt, the eagles hovering over Aqhat at his meal; the execution word for word; Anat weeps). Columns II–III are
lost.

### Sources consulted

As for 1.17 (CUC, DULAT via `dulat`, `lex`, `grep --all`, the corpus's earlier tablets, the repository Bible).

### Decisions

- ***rḫp* (IV:20–21, IV:30–32):** the root רחף everywhere. *nšrm trḫpn* (plan and execution, identical Ugaritic) =
  `נשרים מרחפים` in both (a circumstantial clause: "as he sits to eat … over him eagles hovering, a band of kites
  watching" – the Hebrew participle, a noted departure from §3's narrative past, chosen for the syntax, the same in both
  copies); *arḫp ank ʿl* `ארחף אני; על` (speech, future); its execution *trḫp ʿnt ʿl [aqht]* `מְרַחֶפֶת ענת; על [אקהת]`
  (3 f. sg.: the participle is the Gen 1:2 form because the subject is feminine; the note says that this is the
  translator's tense choice and states what hovers over what). [cognate] Gen 1:2 and Deut 32:11 at IV:20, IV:21, IV:31,
  IV:32, with the contrast: predators over a victim vs the spirit over the waters / the eagle protecting its young.
- **Plan and execution** (IV:17–27 → IV:27–37) copied word for word, only person and tense changed: `אשיתך כנשר
  בחגורתי, כדאה בְּתַעְרִי` → `שָׁתָה אותו כנשר בחגורתה, כדאה בְּתַעְרָהּ`; `הלום פעמיים קדקד, / שלוש פעמים על האוזן; שפוך
  כרוצח / דם, כשוחט – על ברכיו; תצא / כרוח נפשו, כרוק תאוותו, / כקיטור באפו` → `הלם … שפך … יצאה …`. *diy* (I) `דאה`
  (§10); *ḥbl* `חבל` (1 Sam 10:5 `חֶבֶל נְבִאִים`); *bṣr* `צופה`; *tʿrt* `תַּעַר` [cognate] (Jer 47:6); *ḥbš* `חגורה`
  (1.3); *ʿdb* `תקן`; *šyt* `שית`; *šiy* `רוצח`; *šḫṭ* `שוחט`; *iṯl* `רוק`; *rḥ* `רוח` (licensed).
- **I:7–19** copied from 1.3 V:20–28 where identical (`הוֹ אֵל`, `אַל תש[מח]`, `אוֹחֲזֵם`, `בִּגְדֻלַּת אָרְכִּי`,
  `קדקדך; אוליך [שיבתך בדם]`, `שיבת זקנך *בְּמֵעַיִם*`, `ידעתיך, בת, … אֲנוּשָׁה`, `עומדת בפנייך`); new: *plṭ*
  `פלט`, *ʿḏr* `עזר`, *ḫnp* `חנופה` [cognate], *dṯ ydṯ* `דוֹשׁ יָדוּשׁ`, *mʿqb* `מְעַקֵּב`.
- ***mhr št*** = `מהיר *הַשָּׂרָה*` ("the Lady's warrior", Anat's): *št* "lady" because 1.19 IV:59 *ib št* "the enemies
  of *št*" fits only that sense; rejected: "the Sutean" (noted), *šyt*. (`גְּבִירָה` is *rbt*'s, `גְּבֶרֶת` *mṯt*'s.)
- ***l aḥwy*** (IV:27) = `אכן אֲחַיֶּה` (asseverative: Anat meant to revive him; she weeps at IV:39); "I will not let
  him live" noted. In 1.19 I:16 the clear negation `לא אֲחַיֶּה` (Anat's confession) is rendered so.
- **Names:** `יַטְפָּן` (short *yṭp* `יַטְפּ`), `קרת אָבִלִם` (*ablm*; `אָבֵל` "meadow", the pun on `אֲבֵלִים` noted), `יָרִחַ`.
  *qrt* `קרת`; *mgdl* `מגדל`; *aḫ* "brother, lover" `אח` (Song 8:1).

### Open decisions for the user

1. *l aḥwy* (IV:27): "I will surely revive him" or "I will not let him live"? 2. *mhr št*: the Lady's warrior or the
Sutean? 3. IV:40–42 (Anat's lament) are too broken for a sure reading.

### Progress log

- Drafted in one file (76 entries), filled and verified; passes: (a) brackets and the split words (*[d]|iym* moved to
  IV:21, *km|šiy* to IV:35); (b) plan / execution compared string by string; 1.3 V copies checked; *št* revised from
  `*הַסּוּתִי*` to `*הַשָּׂרָה*` after 1.19 IV:59; names unvocalized after their first occurrence; (c) the generated file read
  through. Build, `verify 1.18 --strict` 0 problems, quotes 0 problems.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (parses, DULAT; no EUPT). **16 `>` lines changed**, with notes: 15 brackets (I:12 *[dq]nk* had only `[ז]` bracketed; IV:13 *tḥ[wy]* had none – both now bracketed as restored; the rest one sign or an ending → no bracket: I:16–18, I:21, I:27, I:29, IV:21, IV:29–31, IV:35–36, IV:39); **1 tense: IV:32 *trḫp ʿnt* `רִחֲפָה ענת`** (narrative prefix, the main action, §3), not the participle `מְרַחֶפֶת` – the participle reproduced Gen 1:2's form through a tense the tablet does not give; the root רחף and the cognate tag stay, the הקבלה and הערות of the entry are adjusted. This supersedes the wording `מְרַחֶפֶת ענת` in the Decisions and Key parallels above; the accepted circumstantial participle of *nšrm trḫpn* (IV:20, IV:31; 1.19 I:32, §12.5) is unchanged. *rḫp* lines checked: IV:20, 31 `מרחפים` (3 m. pl., circumstantial), IV:21 `ארחף` (1 c. sg., speech, future), IV:32 `רִחֲפָה` (3 f. sg., past). Rebuilt; `verify 1.17 1.18 1.19 --strict` 0 problems (the one repeated-line difference, 1.19 III:31 / III:43, is the next word on the tablet, *hyt* / *hmt*); quotes 0.

### The text on its own terms

- **The goddess over the old god** (I:7–19): Anat threatens her father's grey head with blood – and El yields, calling
  her "incurable" and "godless of heart": the divine family has no authority that can stop a determined goddess.
- **Seduction by kinship** (I:23–29): "you are a brother, and I …", "I will teach you hunting" – the goddess offers the
  mortal exactly what he had mocked her for (1.17 VI:40).
- **The hunter hunted** (IV:17–37): the goddess becomes a falconer; the killer is a bird of prey she carries; the hero
  dies at a meal, "his breath going out like wind, his life like spittle, like smoke from his nose" – death as the
  reverse of the breath of life.
- **The killer weeps** (IV:38–42): Anat mourns the man she had killed, for a bow she did not get (1.19 I:14–17).

### Key parallels

- **Gen 1:2; Deut 32:11** (IV:20–32): *rḫp* D = `מְרַחֶפֶת` / `יְרַחֵף` [cognate]; the same verb and stem, over a
  victim. The Hebrew participle is the translator's syntactic choice, noted at each line.
- **Gen 2:7** (IV:25): breath, nose and *npš* – the soul goes out "like wind … like smoke from his nose" [divergence].
- **Deut 32:11** (IV:17): *km nšr* … *rḫp* = `כְּנֶשֶׁר … יְרַחֵף` [cognate].
- **Gen 9:6** (IV:23): *špk … dm* `שָׁפַךְ דָּם` [equivalent].
- **Song 8:1** (I:24): "brother" in the language of love [cognate].

### Lines shared with other tablets

1.3 V:20–28 (I:7–17); 1.4 IV:58 (I:15); 1.17 VI:16 (I:23); 1.17 V:9–10 / 1.3 IV:38 (I:21–22); 1.2 I:21 *l ṯrm*
`לִפְרוֹס`; the plan / execution internally; the eagles' lines are copied in 1.19 I:32–33 and the death lines in 1.19
II:38–44.

### Proposals for the shared renderings

- *rḫp* in a circumstantial clause = the participle (`מרחפים`, `מְרַחֶפֶת`), finite elsewhere (`ארחף`); *nšr* `נשר`;
  *diy* (I) `דאה`, *diy* (II) "pinion" `אֶבְרָה` (1.19 III); *ḥbl* `חבל`; *bṣr* `צופה`; *tʿrt* `תער`; *mhr št* `מהיר
  *השרה*`; *yṭpn* `יַטְפָּן`; *ablm* `אָבִלִם`; *ḫnp* `חנופה`; *plṭ* `פלט`; *ʿḏr* `עזר`; *dṯ* `דוש`; *mʿqb* `מעקב`;
  *ṯir* `שאר`; *išryt* `אושר`; *lmd* `לימד`; *šiy* `רוצח`; *šḫṭ* `שוחט`; *iṯl* `רוק`; *ṣmt* (n.) `הַצְמָתָה`; *ʿrs*
  `*עלז*`? (`*ונעלוזה*`, italic).
- **Collision:** *išryt* `אושר` (cognate) vs 1.3 V:31 `חיי אושר` for *ḥyt ḥẓt* – the cognate keeps `אושר`; 1.3 V:31
  could move (e.g. `*חיי חֶסֶד*`?) at the next Baal session.

### Lessons for the guidelines

- **A verb in a circumstantial clause** (the eagles "hovering" while the victim eats) should be fixed once for both
  plan and execution; the corpus rule "narrative prefix = past" needs this exception written down.

## KTU 1.19

Translator 1 of Round 5 run 3, resumed (2026-10-31). Files: `annotated-1.19.rtl.md`, `translation--intro-1.19.rtl.md`,
the generated `translation-1.19.rtl.md`; `translation.rtl.md` now holds 1.17–1.19.

### Scope

All 224 CUC lines: I:1–49 (the bow broken, Anat's confession; Danel at the gate; Pughat sees the drought and the
eagles; Danel's curse on the rain), II:1–57 (Pughat saddles the donkey; Danel embraces the dry shoots; the messengers'
news; the trembling), III:1–56 (the eagles' wings broken three times; the remains found in Ṣamal; the burial in Kinneret;
the curses on Qor-Mayim and Mararat), IV:1–62 (the curse on Qrt Ablm; seven years of mourning; the sacrifice; Pughat's
blessing, disguise and visit to Yaṭpan; the scribe's note "here one returns to the story"). No colophon.

### Sources consulted

As for 1.17–1.18.

### Decisions

- **Pughat's epithet** (fixed at II:1, copied in II:6–7, IV:28, IV:37–38): *ṯkmt mym, ḥspt l šʿr ṭl, ydʿt hlk kbkbm* =
  `סוֹבֶלֶת־שְׁכֶם המים, חושפת מן השיער טל, יודעת את הליכת הכוכבים`. *ṯkmt* keeps the cognate `שְׁכֶם` (Gen 24:15 Rebekah)
  without `נשא` (*nšʾ*'s); *ḥsp* `חשף` as 1.3 II:38; *šʿr* `שיער`; *hlk* `הליכת` as 1.17 V:10.
- **The curse on the rain** (I:42–46): `שבע שנים / יחסר בַּעַל, שמונה – רוכב / העננים: בַּל טל, בַּל רביבים, / בַּל *שֶׁטֶף*
  שתי התהומות, בַּל / טוב קול בעל!` – *ṣrk* `חסר`, *bl* `בַּל`, *ṭb* `טוב` (licensed), *ql* `קול`. [cognate] 2 Sam 1:21,
  1 Kgs 17:1 (printed), the "seven … eight" climax noted.
- **The wings broken three times** (III:1–41): one Hebrew for the request (jussive `בעל ישבור … תיפולנה תחת רגליי;
  אבקע … ואחזה: אם יש שומן, אם יש עצם – אבכה ואקברנו, אשית בחור אֵלֵי הארץ`), the execution (`בעל שבר … נפלו תחת
  רגליו; בקע … וחזה: אין שומן, אין עצם`), the restoration (`בעל יבנה … יפרחו וידאו`) – copied for the eagles, Ḥargab and
  Ṣamal with only number and gender changed. *diy* (II) "pinion" = `אברה` (Deut 32:11 `אֶבְרָתוֹ`), kept apart from
  *diy* (I) `דאה`; *ḥdy* `חזה`; *npr* `פרח`, *dʾy* `דאה`, *ʿp* `עופף` (three flight verbs, three words); *ḫrt ilm arṣ*
  `חור אֵלֵי הארץ` (1.5 V:5–6, 1.6 I:17–18).
- **The curses on the towns** (III:44–IV:7): `הוֹי לך, X, אשר עלייך נמחץ אקהת הגבור` and the refrain `כָּעֵת – בָּרִחַ,
  ולעולם; כָּעֵת – ולדור דור: *מתקן* אחרון מטה ידו!` copied in all three; *yṣm* "curse" `זָעַם` (Num 23:8; `אָרַר` avoided:
  not a cognate, it would make the Gen 4:11 echo); *ʿnt* (II) `כָּעֵת` (§10); *brḥ* `בָּרִחַ` (Gen 4:12 `נָע וָנָד`
  [equivalent]); *l ht w ʿlmh* `מֵעַתָּה ועד עולם` (Ps 113:2 [cognate]); *ʿwrt* `עיוורת`. Town names: `קוֹר־מַיִם`,
  `מְרָרַת תַּעְלִל בְּנֵר`, `קרת אָבִלִם`; *knrt* `כִּנֶּרֶת` (biblical form).
- **The trembling formula** (II:44–48) restored and copied from 1.3 III:32–35 in the masculine and in the tablet's own
  order; `*גידי*` kept from 1.3/1.4 (the *dt* / *gd* split left for later, §12.4).
- **The gate scene** (I:19–25) and **Danel's action formula** copied from §12.4; the remaining 1.17 copies: *b nši ʿnh
  w yphn* (II:56, III:14, III:28), *gm l … k yṣḥ* (I:49), "the son's duties" do not recur.
- **Other choices:** *ur* `*אוּר*` (II:17, 24: "warmth, fire", the cognate of `אוּר` Isa 31:9 – see Tool problems);
  *npṣ* `בגדי` (IV:44, 46 – see Tool problems); *ypʿ* `צמח`; *bṣql* `*ניצן*`; *šblt* `שיבולת`; *asm* `אסם`; *aḥl*
  `אַחְלַי`; *ḥmdrt* `*שדפה*` (Gen 41:6); *yġlm* `*צחיחים*`; *palt* `*בור*`; *aklt* `*אכולה*`; *kst* `גלימה`, *all* `אדרת`
  (1.6 II:11); *pẓġm ġr* `*מחתכי* עור` (`פצע` is *hdy*'s, `גדד`/`שרט` reserved); *bkyt*, *mšspdt* `בוכות`, `מספידות`;
  *dġṯ* `*עתר*` (Ezek 8:11; `קטורת` would share *qṭr*'s root); *qry* D `הִקְרָה`; *ṯb* `השיב` (IV:19, as 1.3 IV:21);
  *ʔdm* N `התאדמה`; *ḫlpn* `*מַחֲלָף*` (Ezra 1:9); *nšg* `*נדן*`; *agrt* `*שכירה*`; *ib* `אויב`; *msk* `מסך`; *hndt …
  mspr* `והנה – *ישוב* אל המספר` (a scribal rubric).

### Open decisions for the user

1. I:2–18 (Anat's confession and the first drought signs) are badly broken; many words are left `…` or italic.
2. *ʿdb uḫry mṭ ydh* (the refrain's last line): "the last (of them) takes up the staff of his hand" (exile, blindness)
   – the reading is uncertain. 3. *bkm* (II:8–9): "weeping" (followed) or DULAT's "then". 4. *agrtn* (IV:51): "our
   hireling" or "our mistress" (Yaṭpan's men mistake Pughat for Anat?). 5. IV:57–60 (Yaṭpan's drunken speech) – obscure.

### Progress log

- Drafted in four saves (I; II; III; IV), each filled and verified. Passes: (a) brackets, split words (*b šp|th*,
  *diy|hyt*, *diy|hmt*, *yšt|ql*, *aq|ht*, *b k|bkbm*, *tq|ḥ*, *ġ|zr*) and scribal omissions ⟨ ⟩; (b) the three wing
  sequences and the three curses compared string by string; the one verifier difference (III:31 / III:43, identical
  Ugaritic, the pronoun on the next line differs) justified at both lines; first-occurrence vocalization (`דָּנִאֵל`,
  `אַקְהָת`, `עֲנָת`, `בַּעַל`, `פּוּגַת`) added; (c) the generated file read: `על הענבים?`, *ḫlpn* moved from `*ח[רב]*` to
  `*מַחֲ[לָף]*` (`חרב` is *ḥrb* in the next line). Build; `verify 1.19 --strict` 0 problems (1 justified repeated-line
  difference); quotes 0 problems on all files.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (parses, DULAT; no EUPT). **38 `>` lines changed**, all brackets, each with a note: one sign or an ending restored → no bracket (e.g. I:2, I:22, I:31, II:2, II:13, II:21, II:24, II:30–31, II:38, II:42–43, II:45, II:48, III:1, III:4, III:7, III:18, III:21, III:35–36, IV:20, IV:22, IV:27, IV:45, IV:47–50, IV:59, IV:61); a word CUC reads had been bracketed (I:28, II:37, II:39, II:41, II:49, II:56, IV:56). *rḫp* (I:32 `נשרים מרחפים`, §12.5) correct. Pughat's epithet, the town-curse refrain and the eagle passages (III:1–41: the three *knp … bʿl yṯbr* / *ybn* rounds) compared: identical where the Ugaritic is identical. No meaning, negation or *l* errors found. Rebuilt; `verify 1.17 1.18 1.19 --strict` 0 problems (the one repeated-line difference, 1.19 III:31 / III:43, is the next word on the tablet, *hyt* / *hmt*); quotes 0.

### The text on its own terms

- **The land dies with the heir** (I:17–46): the blight begins at Aqhat's death; the father's curse binds the rain for
  "seven years, eight": the king's grief and the fertility of the land are one thing.
- **The daughter's world** (II:1–7, IV:28–38): she carries water, gathers dew at dawn, knows the stars' courses – the
  household's labour and its calendar; she saddles the donkey for her old father.
- **Tenderness to the crops** (II:12–25): the king embraces and kisses the last green shoots and wishes his son's hand
  would gather them – the hope that does not yet know.
- **The news** (II:26–48): "while the word was still in his mouth" the messengers come; the body's trembling formula is
  the same for gods and men.
- **Bones must be buried** (III:1–41): the father cuts open birds to find "fat and bone" – some remnant to weep over and
  bury; and he asks Baal to heal the innocent birds again.
- **Blood guilt falls on places** (III:44–IV:7): the towns near the killing are cursed, "now and for all generations":
  responsibility is territorial, not only personal.
- **Seven years of mourning, then sacrifice** (IV:8–31): professional weepers, lacerated skin, the time counted in days,
  months and years – and the end of mourning marked by sending the weepers out and offering to the gods.
- **The avenging sister** (IV:32–61): blessed by her father, she takes up the blood-feud no son is left to take; she
  dresses as a warrior under a woman's dress – the answer to her brother's "shall women hunt?" (1.17 VI:40).
- **Recitation** (IV:62): the scribe's note "here one returns to the story" shows the epic was read aloud in
  instalments.

### Key parallels

- **2 Sam 1:21; 1 Kgs 17:1** (I:42–46): no dew, no showers on the place where the hero fell [cognate].
- **Gen 1:2; Deut 32:11** (I:32): *nšrm trḫpn ʿl bt abh* `מְרַחֶפֶת עַל` [cognate]; Deut 28:49 `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר`
  (III:14 *dʾy*) [cognate]; Deut 32:11 `אֶבְרָתוֹ` (*diy* (II), III:2) [equivalent].
- **Deut 21:1–9; Gen 4:10–12** (III:44–IV:7): the towns near the unsolved killing – cursed, not atoning [divergence];
  *brḥ* ↔ `נָע וָנָד` [equivalent].
- **Gen 24:15** (II:1): *ṯkmt my* ↔ `וְכַדָּהּ עַל שִׁכְמָהּ` [cognate].
- **1 Sam 31:12–13; Gen 37:33–35** (III:5, III:40, II:42): the remains gathered and buried; the father weeps for the son
  [equivalent].
- **Judg 4:19–21** (IV:53, II:38, IV:45): `הַשְׁקִינִי` and `רַקָּתוֹ` – the woman, the drink and the warrior in the tent
  [cognate words; typological divergence].
- **Ps 113:2** (IV:5–6): `מֵעַתָּה וְעַד עוֹלָם` [cognate]; **Gen 50:10; Jer 9:16** (IV:10–15): the weepers and the
  "seven" of mourning [cognate / equivalent].
- **Qoh 10:8** (I:13): the viper in the hedge [cognate].

### Lines shared with other tablets

1.17 V:5–10 (I:19–26), V:15 (I:49), II:24–25 (IV:8–9), I:36 (IV:36), I:23–24 (IV:32–33); 1.18 IV:20–26 (I:32–33,
II:29–30, II:38–44); 1.4 IV:4–15 (II:3–11); 1.3 III:32–35 (II:44–47); 1.2 IV:6 (II:26, III:7, III:21, III:35); 1.5
V:5–6, 1.6 I:17–18 (III:6); 1.4 II:12 (I:29, II:27); 1.23:52 (IV:50–51); 1.108:4–5 (IV:27).

### Proposals for the shared renderings

- Pughat's epithet (above) and the curse refrain – candidates for §12 fixed strings.
- *diy* (II) "pinion" `אֶבְרָה` (a new lemma row beside *diy* (I) `דַּאָה`); *ḥdy* `חזה` confirmed; *npr* `פרח`; *dʾy*
  `דאה`; *ʿp* (vb) `עופף`; *yṣm* `זָעַם`; *brḥ* "fugitive" `בָּרִחַ`; *ʿwr* `עיוור`; *qbr* `קבר`; *bqʿ* `בקע`; *šmt* "fat"
  `שומן`; *ʿẓm* `עצם`; *mdgt* `*מחילה*`; *knrt* `כִּנֶּרֶת`; *bkyt* `בוכות`; *mšspdt* `מספידות`; *pẓġ* `*מחתך*`; *dġṯ*
  `*עתר*`; *ṣrk* `חסר`; *šrʿ* `*שטף*`; *yr* `יורה`; *ġnb* `ענב`; *ḥmṣ* `חמץ`; *ṯql* `שקל`; *mḫlpt* `מחלפות` (as 1.107);
  *bšr* `בישר`; *nṣḥ* `נצח`; *lʾy* (vb) `נצח`?/`*נגבר*` (here `ננצח` – a possible collision with *nṣḥ*: noted); *rqt*
  `רקה`; *umt* `אומה`; *ʿl* (III) `*עוּל*`; *mʿrb* `מערב`; *minš* `מחנה`; *qbʿt* `קֻבַּעַת` (§10); *ḫlpn* `*מחלף*`;
  *nšg* `*נדן*`; *mspr* `מספר` (§10).
- **Revisions to rows of 1.17 / 1.18 made here:** *mhr št* `מהיר *הַשָּׂרָה*` (1.18, see there).
- **Collisions for the coordinator:** (1) *lʾy* `ננצח` (II:35) and *nṣḥ* `ניצחוני` (II:36) share the root נצח in
  adjacent lines (a deliberate pair? DULAT *lʾy* "prevail": `נגבר` would avoid it); (2) *irš* `תבע` (1.17) vs 1.3 V:28
  *tarš* `תחפצי` – one lemma, two Hebrew words across the cycle; (3) *išryt* `אושר` vs 1.3 V:31 (see 1.18).

### Lessons for the guidelines

- **Gates that read a prefix + a short word** misfire on the commonest construct forms: `בגדי` "garments of" was read as
  ב + `גדי` "kid" (the *gd* gate). Test every short-word gate on construct plurals with ב/כ/ל/מ/ה.
- **Licence regexes written with DULAT's aleph letters** (`\bủr\b`) never match, because the tool folds ả/ỉ/ủ to a/i/u
  before matching; write licences in the folded form.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KTU 1.17)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:1 | [dnil . mt . rp]⸢i⸣ . apn⸢k⸣ . [u]⸢zr⸣ | [דָּנִאֵל, אִישׁ רָפִא] – אחרי כן, אָזוּר | `וְאֵזוֹר עוֹר אָזוּר בְּמָתְנָיו` (מלכים ב א:ח) | cognate | אותו בינוני פעול של השורש אזר. |
| I:4 | [ṣth . yʿl .] ⸢w⸣ yškb . yd | [כסותו, עלה] ושכב; *השליך* | `וּשְׁמוּאֵל שֹׁכֵב בְּהֵיכַל יְהוָה` (שמואל א ג:ג) | cognate | הנער שוכב במקדש ושומע את קול האל בלילה; הדגירה הישראלית. |
| I:5 | [mizrth .] ⸢p y⸣{n}⸢l⸣{l}⸢n⸣ . hn . ym | [אזורו] – וְלָן. הִנֵּה יוֹם | `וַיִּפְגַּע בַּמָּקוֹם וַיָּלֶן שָׁם` (בראשית כח:יא); `וַיָּשֶׂם אֹתָהּ מַצֵּבָה` (בראשית כח:יח) | cognate | יעקב לן בבית אל, חולם, ובבוקר מציב מצבה (): לינה במקום קדוש, התגלות ומצבה – שלושת יסודות הלוח הזה (I:26 *nṣb skn*). |
| I:15 | [yd….] mizrth . p yln . mk . b šbʿ . ymm | [*השליך* …] אזורו – וְלָן. הִנֵּה בַּיּוֹם הַשְּׁבִיעִי | `וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ` (בראשית ב:ב) | divergence | אותה תבנית "שישה ימים ואז השביעי" (`../renderings.md` §6.10), כאן בטקס דגירה: ביום השביעי לא נחים – ביום השביעי מגיעה התשובה. |
| I:16 | [w] . ⸢y⸣qrb . bʿl . b ḥnth . aby{x}n {. ġzr} | [ו]קרב בַּעַל בחנינתו: "אביון | `וַיֶּעְתַּר יִצְחָק לַיהוָה לְנֹכַח אִשְׁתּוֹ כִּי עֲקָרָה הִוא` (בראשית כה:כא) | equivalent | תפילה על חשוך בנים; כאן המתפלל הוא אל (בעל) לפני אל עליון (אֵל), ובעל הוא שמתחנן בשם האדם. |
| I:18 | ⸢mt⸣ . hrnmy . d in . bn . lh | אִישׁ הַהַרְנַמִּי, אשר אין בן לו | `כִּי אָמַר אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל ב יח:יח) | cognate | *in bn lh* = `אֵין … בֵן`, ובאותו פסוק אבשלום מציב לעצמו `מַצֶּבֶת` בחייו, כי אין לו בן שיציב אותה – החובה הראשונה ברשימת חובות הבן כאן (I:26 *nṣb skn*). |
| I:18 | ⸢mt⸣ . hrnmy . d in . bn . lh | אִישׁ הַהַרְנַמִּי, אשר אין בן לו | `וְאָנֹכִי הוֹלֵךְ עֲרִירִי` (בראשית טו:ב) | equivalent | אברם חשוך הבנים. |
| I:23 | l tbrknn . l ṯr . il aby | אכן תברכנו, הוֹ השור אֵל, אבי; | `מֵאֵל אָבִיךָ וְיַעְזְרֶךָּ וְאֵת שַׁדַּי וִיבָרְכֶךָּ` (בראשית מט:כה) | cognate | אֵל, "אב" והפועל ברך באותו משפט; ובברכה שם `בִּרְכֹת שָׁדַיִם וָרָחַם` – ברכת פריון. |
| I:26 | hklh . nṣb . skn . ilibh . b qdš | היכלו: מציב מצבת אֵל־אביו, בקודש | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה עַל קְבֻרָתָהּ` (בראשית לה:כ) | cognate | הפועל *nṣb* ו`מַצֵּבָה` מאותו שורש; ושם המצבה היא אבן זיכרון למתה, כמו *skn ilib* כאן. |
| I:26 | hklh . nṣb . skn . ilibh . b qdš | היכלו: מציב מצבת אֵל־אביו, בקודש | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה בַּמָּקוֹם אֲשֶׁר דִּבֶּר אִתּוֹ` (בראשית לה:יד) | cognate |  |
| I:26 | hklh . nṣb . skn . ilibh . b qdš | היכלו: מציב מצבת אֵל־אביו, בקודש | `אָנֹכִי הָאֵל אֱלֹהֵי אָבִיךָ` (בראשית מו:ג) | cognate | *ilib* "אֵל־האב". |
| I:27 | ztr . ʿmh . l arṣ . mšṣu . qṭrh | *ציון* עמו; מן הארץ מוציא קיטורו, | `וַיֵּאָסֶף אֶל עַמָּיו` (בראשית כה:ח) | cognate | *ʿm* "קרובי האב, אבות השבט", כמו `עַמָּיו` שהמת "נאסף" אליהם. |
| I:30 | ⸢aḫd⸣ . ydh . b škrn . mʿmsh | אוחז בידו בשכרון, מְעַמְּסוֹ | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר` (בראשית ט:כא); `וַיְכַסּוּ אֵת עֶרְוַת אֲבִיהֶם` (בראשית ט:כג) | divergence | נח שיכור, ובניו מכסים אותו : אותו מצב (האב שיכור), אותה חובה (הבן הטוב דואג לכבוד אביו השיכור). באוגרית זו חובה קבועה ברשימה, בלי שום גנאי לאב; בבראשית השכרות היא רקע לחטא חם ולקללת כנען. |
| I:30 | ⸢aḫd⸣ . ydh . b škrn . mʿmsh | אוחז בידו בשכרון, מְעַמְּסוֹ | `הַעֲמֻסִים מִנִּי בֶטֶן` (ישעיהו מו:ג) | cognate | אותו שורש, האל "עומס" את עמו כאב את בנו. |
| I:31 | [k] ⸢š⸣bʿ . yn . spu . ksmh . bt . bʿl | [כי] שָׂבַע יין; טורף חלקו בבית בעל, | `הַטְרִיפֵנִי לֶחֶם חֻקִּי` (משלי ל:ח); `וַתִּתֵּן טֶרֶף לְבֵיתָהּ` (משלי לא:טו) | equivalent | `טָרַף` בעברית גם "לזון, לתת מנה קצובה"; . |
| I:32 | [w] ⸢m⸣nth . bt . il . ṭḫ . ggh . b ym | [ו]מנתו בבית אֵל; טָח גגו ביום | `יְהוָה מְנָת-חֶלְקִי וְכוֹסִי` (תהלים טז:ה) | cognate | *ksm* // *mnt* "חלק // מנה" ו`מְנָת` היא אותה מלה. |
| I:32 | [w] ⸢m⸣nth . bt . il . ṭḫ . ggh . b ym | [ו]מנתו בבית אֵל; טָח גגו ביום | `וְעָפָר אַחֵר יִקַּח וְטָח אֶת הַבָּיִת` (ויקרא יד:מב) | cognate | *ṭḫ* = `טָח`. |
| I:36 | [mt . h]⸢r⸣nmy . npš . yḥ . dnil | [איש] ההרנמי: "נפש – יחי דנאל, | `וְחָיְתָה נַפְשִׁי בִּגְלָלֵךְ` (בראשית יב:יג) | cognate | *npš* ו־*ḥwy* באותו צירוף. |
| I:38 | [xxxx]⸢ḥ/ṭ⸣ . hw . mḫ . l ʿršh . yʿl | […]… הוא *עלז*; אל ערשו יעלה, | `אִם-אֶעֱלֶה עַל-עֶרֶשׂ יְצוּעָי` (תהלים קלב:ג) | cognate | אותו צירוף, "לעלות על ערש". |
| II:9 | pnm . tšmḫ . ⸢w⸣ ʿl . yṣhl pi⸢t⸣ | פנים שמחו, ומעל צָהֲלָה פאה; | `לְהַצְהִיל פָּנִים מִשָּׁמֶן` (תהלים קד:טו) | cognate | אותו שורש *ṣhl* "הבהיק" ואותו מושא: הפנים מאירים. |
| II:10 | yprq . lṣb . w yṣḥq | פרק מצח(ו) וצחק; | `וַיִּפֹּל אַבְרָהָם עַל פָּנָיו וַיִּצְחָק` (בראשית יז:יז) | equivalent | האב הזקן "צוחק" כשמבטיחים לו בן; אצל אברהם הצחוק ספקני, אצל דנאל – שמחה בלבד; ושם הבן (`יִצְחָק`) נגזר מן הצחוק. |
| II:14 | npš . k yld . bn . ly . km | נפש, כי נולד בן לי כמו | `כִּי יֶלֶד יֻלַּד לָנוּ בֵּן נִתַּן לָנוּ` (ישעיהו ט:ה) | cognate | אותו משפט: *k yld bn ly* = `כִּי … יֻלַּד … בֵּן … לָנוּ`, וגם שם בהכרזה על בן המלך. |
| II:14 | npš . k yld . bn . ly . km | נפש, כי נולד בן לי כמו | `יֻלַּד לְךָ בֵּן זָכָר` (ירמיהו כ:טו) | cognate | בשורת לידת בן לאב. |
| II:26 | ʿrb . b bth . kṯrt . bnt | נכנסו לביתו הַכּוֹתָרוֹת, בנות | `מוֹצִיא אֲסִירִים בַּכּוֹשָׁרוֹת` (תהלים סח:ז) | cognate | `כּוֹשָׁרוֹת` הוא אולי שמן של האלות האלה (שם: האל `מוֹשִׁיב יְחִידִים בַּיְתָה` – נותן משפחה לבודד). |
| II:29 | hrnmy . alp . yṭbḫ . l kṯ | ההרנמי, בקר טבח לַכּוֹתָרוֹת; | `וְאֶל הַבָּקָר רָץ אַבְרָהָם; וַיִּקַּח בֶּן בָּקָר` (בראשית יח:ז) | equivalent | האורחים האלוהיים שבאים להבטיח בן מקבלים מן המארח בקר; כאן הבטחת הבן כבר ניתנה, והאורחות הן אלות הלידה עצמן. |
| II:40 | kṯrt . ⸢b⸣nt . ⸢h⸣ll . ⸢s⸣nnt | הַכּוֹתָרוֹת, בנות הִלָּל, הסנוניות – | `מוֹצִיא אֲסִירִים בַּכּוֹשָׁרוֹת` (תהלים סח:ז) | cognate | ראו II:26. |
| II:42 | ysmsmt . ⸢ʿrš⸣ . ⸢ḫllt⸣ | *יופי* ערש הַחִיל. | `קוֹל יְהוָה יְחוֹלֵל אַיָּלוֹת` (תהלים כט:ט) | cognate | השורש חול/חלל "להמליט", כמו *ḫllt*. |
| II:43 | yṯb . ⸢d⸣ni⸢l⸣ . [ys]⸢p⸣r . ⸢yrḫh⸣ | ישב דנאל, [ספר] את יְרָחֶיהָ; | `תִּסְפֹּר יְרָחִים תְּמַלֶּאנָה` (איוב לט:ב) | cognate | אותו צירוף, *spr yrḫm*, על חודשי ההריון של היעלה והאיילה. |
| II:43 | yṯb . ⸢d⸣ni⸢l⸣ . [ys]⸢p⸣r . ⸢yrḫh⸣ | ישב דנאל, [ספר] את יְרָחֶיהָ; | `וַיְהִי לִתְקֻפוֹת הַיָּמִים וַתַּהַר חַנָּה וַתֵּלֶד בֵּן` (שמואל א א:כ) | equivalent |  |
| V:6 | ytšu . yṯb . b ap . ṯġr . tḥt | התנשא, ישב בְּאַף השער, תחת | `וּבֹעַז עָלָה הַשַּׁעַר וַיֵּשֶׁב שָׁם` (רות ד:א) | cognate | "עלה … וישב" בשער, כמו *ytšu yṯb b … ṯġr*: מקום המשפט וההכרעה של זקני העיר. |
| V:7 | ad⸢r⸣m . d b grn . ydn | האדירים אשר בגורן; דן | `יֹשְׁבִים אִישׁ עַל כִּסְאוֹ מְלֻבָּשִׁים בְּגָדִים בְּגֹרֶן פֶּתַח שַׁעַר שֹׁמְרוֹן` (מלכים א כב:י) | cognate | "גורן" ו"שער" יחד, מקום מושבם של המלכים; כאן *ṯġr* ו־*grn* באותו צירוף. |
| V:8 | dn . almnt . yṯpṯ . tpṭ . y⸢tm⸣ | דין אלמנה, שָׁפַט שֶׁפֶט יתום. | `דִּין לֹא דָנוּ דִּין יָתוֹם` (ירמיהו ה:כח) | cognate | *ydn dn* = `דָנוּ דִּין`, ו`שָׁפָטוּ` באותו פסוק: אותו צמד פעלים, ואותם יתום ואביון. |
| V:8 | dn . almnt . yṯpṯ . tpṭ . y⸢tm⸣ | דין אלמנה, שָׁפַט שֶׁפֶט יתום. | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | cognate |  |
| V:8 | dn . almnt . yṯpṯ . tpṭ . y⸢tm⸣ | דין אלמנה, שָׁפַט שֶׁפֶט יתום. | `עֹשֶׂה מִשְׁפַּט יָתוֹם וְאַלְמָנָה` (דברים י:יח) | cognate |  |
| V:9 | b nši . ʿnh . w yphn . b al⸢p⸣ | בשאתו את עיניו – וראה: באלף | `וַיִּשָּׂא עֵינָיו וַיַּרְא וְהִנֵּה שְׁלֹשָׁה אֲנָשִׁים נִצָּבִים עָלָיו` (בראשית יח:ב) | cognate | *nšʾ ʿn* = `וַיִּשָּׂא עֵינָיו` ממש; הפועל השני שונה: *phy* (DULAT "לראות, להבחין"; בקורפוס `רָאָה`, §10), לא *rʾy*. אותה סצנה: האב יושב בפתח (אהלו / השער), נושא עיניו ורואה אורח אלוהי בא – ומכין לו סעודה (V:16 // בראשית יח:ו). |
| V:16 | šmʿ . mṯt . dnty . ʿd⸢b⸣ | "שמעי, גְּבֶרֶת דַּנָּתַי! תקני | `וַיְמַהֵר אַבְרָהָם הָאֹהֱלָה אֶל שָׂרָה; וַיֹּאמֶר מַהֲרִי שְׁלֹשׁ סְאִים קֶמַח סֹלֶת` (בראשית יח:ו) | equivalent | המארח פונה אל אשתו להכין סעודה לאורח האלוהי; גם שם הסעודה קודמת לבשורה על בן (וכאן – לקשת לבן). |
| V:20 | ilm . sad . kbd . hmt . bʿl | את האֵלִים; כלכלי, כבדי אותם – בעל | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא) | cognate | *kbd* D = `כִּבֵּד`, כאן כיבוד אורח אלוהי בסעודה. |
| V:25 | ydm . aḫr . ymġy . kṯr | הַיָּדַיִם. אַחַר הגיע כּוֹתַר | `אַחַר תַּעֲבֹרוּ` (בראשית יח:ה) | equivalent | `אַחַר` כתואר פועל ("אחר כך") באותה סצנה של אירוח. |
| V:26 | w hss . bd . dnil . ytnn | וחַסִּיס; ביד דנאל נתן | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן` (בראשית ט:יג) | divergence | אל "נותן" קשת (*ytn qšt* = `קַשְׁתִּי נָתַתִּי`), אבל כאן הקשת היא כלי ציד, מעשה ידי אומן, הניתן לבן אדם; בבראשית היא קשת האל עצמו, הנתונה בענן כאות ברית. ההקבלה מילולית בלבד (נתן + קשת), והמוטיב שונה – לכל היותר |
| V:26 | w hss . bd . dnil . ytnn | וחַסִּיס; ביד דנאל נתן | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן` (בראשית ט:יג) | divergence |  |
| V:32 | l ahlh . hyn . tbʿ . l mš | לאוהלו; חַיִּן יצא לדרך למשכנותיו. | `מַה טֹּבוּ אֹהָלֶיךָ יַעֲקֹב; מִשְׁכְּנֹתֶיךָ יִשְׂרָאֵל` (במדבר כד:ה) | cognate | אותו צמד, *ahl* // *mšknt* = `אֹהָלֶיךָ` // `מִשְׁכְּנֹתֶיךָ`. |
| V:36 | rk . ʿl . aqht . k yq [bh] | *[ד]רך* על אַקְהָת, כי *נק[בה]*: | `קַשְׁתּוֹ דָרַךְ וַיְכוֹנְנֶהָ` (תהלים ז:יג) | cognate | `דָּרַךְ קֶשֶׁת` הוא הפועל העברי של מתיחת הקשת (דריכה ברגל על קצה הקשת); אם השחזור *ydrk* נכון, זו אותה מלה. |
| V:37 | prʿm . ṣd⸢k⸣ . y b⸢n⸣ [. bln] | "*בחיר* צידך, הוֹ בני, [*בליל*] | `וְעַתָּה שָׂא נָא כֵלֶיךָ תֶּלְיְךָ וְקַשְׁתֶּךָ; וְצֵא הַשָּׂדֶה וְצוּדָה לִּי צָיִד` (בראשית כז:ג) | equivalent | האב שולח את בנו עם קשתו לצוד, ומבקש ממנו את הציד; *ṣd* = `צַיִד`. שם הציד מביא את ברכת האב; כאן האב מבקש את "בחיר הציד" למקדש (V:39 "בהיכלי"). |
| VI:6 | [dm . ʿṣm . ymlu]⸢n⸣ . krpn . ʿl . krpn | [דם עצים; מילאו] גביע על גביע. | `וּבְדַם עֲנָבִים` (בראשית מט:יא) | cognate | "דם עצים" = היין (§6.11). |
| VI:14 | [ṯr . w ḫss . d qr]nh . km . bṯn . yqr | [וחַסִּיס, אשר קר]ניה כפתן; *הִקְרָה* | `כִּי הִקְרָה יְהוָה אֱלֹהֶיךָ לְפָנָי` (בראשית כז:כ) | cognate | `הִקְרָה` "הביא לפני", הגורם של קרה, כמו *qry* D; ושם בסיפור על ציד שהבן מביא לאביו. |
| VI:17 | [l aqht . ġzr .] ⸢ir⸣š . ksp . w at⸢n⸣k | [הוֹ אקהת הגבור]! תְּבַע כסף – ואתן לך, | `וַאֲרֶשֶׁת שְׂפָתָיו בַּל-מָנַעְתָּ סֶּלָה` (תהלים כא:ג) | cognate | `אֲרֶשֶׁת` "בקשה" מן השורש של *irš* (§10: *iršt* = `אֲרֶשֶׁת`). |
| VI:21 | ⸢b⸣ lbnn . adr . gdm . b r⸢u⸣mm | מִלְּבָנוֹן, אדירים גידים מראמים, | `אֶת גִּיד הַנָּשֶׁה` (בראשית לב:לג) | cognate | *gd* = `גִּיד`. |
| VI:23 | b ʿqbt . ṯr . adr . b ġl il . qnm | מעקבי שור; אדירים, מ*סבך* אֵל, קנים: | `וְיָדוֹ אֹחֶזֶת בַּעֲקֵב עֵשָׂו` (בראשית כה:כו) | cognate | *ʿqb* = `עָקֵב` (כאן של בהמה). |
| VI:26 | ʿnt . {y}irš . ḥym . l aqht . ġzr | ענת: "תְּבַע חיים, הוֹ אקהת הגבור; | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | divergence | החיים האלמותיים שבידי האלים: בבראשית האל מונע אותם מן האדם; כאן אלה מציעה אותם לאדם – תמורת קשת. |
| VI:27 | ⸢i⸣rš . ḥym . w atnk . bl mt | תְּבַע חיים – ואתן לך, בַּל מָוֶת – | `לֹא מוֹת תְּמֻתוּן` (בראשית ג:ד) | cognate | הבטחת אלמוות מפי ישות על־אנושית; ענת מבטיחה `בַּל מָוֶת`, והנחש `לֹא מוֹת`. |
| VI:29 | šnt . ʿm . bn il . tspr . yrḫm | שנים, עם בני אֵל תספור יְרָחִים. | `תִּסְפֹּר יְרָחִים תְּמַלֶּאנָה` (איוב לט:ב) | cognate | *spr yrḫm* = `תִּסְפֹּר יְרָחִים` (שם בחודשי ההריון, כמו II:43 כאן). |
| VI:32 | ⸢nʿm⸣[t .] yʿnynn . ap ank . aḥwy | נְעִימָה, יַעֲנֶנּוּ. אף אני אֲחַיֶּה | `וַתַּעַן לָהֶם מִרְיָם` (שמות טו:כא) | cognate | *ʿny* "לענות" בשירה: שירה בחילופי קולות. |
| VI:35 | šrgk . ḫḫm . mt . uḫryt . mh . yqḥ | שקרך – בוץ. איש – אחרית מה יקח? | `תָּמֹת נַפְשִׁי מוֹת יְשָׁרִים וּתְהִי אַחֲרִיתִי כָּמֹהוּ` (במדבר כג:י) | cognate | *uḫryt* = `אַחֲרִית` במשמעות סוף החיים, ו*mt* "מוות" (VI:38) באותו פסוק. |
| VI:36 | mh . yqḥ . mt . aṯryt . spsg . ysk | מה יקח איש – סוף? זיגוג יוּסַךְ | `בַּאֲשֶׁר הוּא סוֹף כָּל הָאָדָם` (קהלת ז:ב) | cognate | אותה שאלה ואותה תשובה: סופו של כל אדם הוא המוות. |
| VI:36 | mh . yqḥ . mt . aṯryt . spsg . ysk | מה יקח איש – סוף? זיגוג יוּסַךְ | `כֶּסֶף סִיגִים מְצֻפֶּה עַל-חָרֶשׂ` (משלי כו:כג) | cognate | מאז גילוי *spsg* מתקנים כאן `כְּסַפְסַג` "כמו זיגוג" (גינזברג): המלה האוגריתית מאירה את הפסוק. |
| VI:37 | [l] ⸢ri⸣š . ḥrṣ . l ẓr . qdqdy | [על] ראש, סיד על גו קדקדי. | `תִּהְיֶיןָ לְרֹאשׁ יוֹסֵף וּלְקָדְקֹד נְזִיר אֶחָיו` (בראשית מט:כו) | cognate | הצמד *riš* // *qdqd* = `רֹאשׁ` // `קָדְקֹד`. |
| VI:38 | [ap] ⸢m⸣t . kl . amt . w an . mtm . amt | [אף] מוֹת כל אמות, ואני מוֹת אמות. | `אִם כְּמוֹת כָּל הָאָדָם יְמֻתוּן אֵלֶּה` (במדבר טז:כט) | cognate | *mt kl* = `מוֹת כָּל`, "המוות של כל אדם". |
| VI:38 | [ap] ⸢m⸣t . kl . amt . w an . mtm . amt | [אף] מוֹת כל אמות, ואני מוֹת אמות. | `כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת תָּמוּת` (בראשית ב:יז) | cognate | *mtm amt* = `מוֹת … תָּמוּת`: אותה בניה של מקור מוחלט ופועל נטוי. |
| VI:38 | [ap] ⸢m⸣t . kl . amt . w an . mtm . amt | [אף] מוֹת כל אמות, ואני מוֹת אמות. | `לֹא מוֹת תְּמֻתוּן` (בראשית ג:ד) | divergence | הנחש מכחיש את המוות; אקהת דוחה את הכחשת האלה ואומר את דבר האל של בראשית ב:יז בגוף ראשון: "מות אמות". |
| VI:38 | [ap] ⸢m⸣t . kl . amt . w an . mtm . amt | [אף] מוֹת כל אמות, ואני מוֹת אמות. | `כִּי מוֹת נָמוּת וְכַמַּיִם הַנִּגָּרִים אַרְצָה` (שמואל ב יד:יד) | equivalent |  |
| VI:38 | [ap] ⸢m⸣t . kl . amt . w an . mtm . amt | [אף] מוֹת כל אמות, ואני מוֹת אמות. | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | equivalent |  |
| VI:40 | [k l .] ⸢m⸣hrm . ht . tṣdn . tinṯt | [כי ל]מהירים! עתה תצודנה נשים? | `לֹא יִהְיֶה כְלִי גֶבֶר עַל אִשָּׁה` (דברים כב:ה) | equivalent | כלי הנשק הם של הגבר; אותו תחום של חלוקה בין המינים. |
| VI:40 | [k l .] ⸢m⸣hrm . ht . tṣdn . tinṯt | [כי ל]מהירים! עתה תצודנה נשים? | `פֶּן יֹאמְרוּ לִי אִשָּׁה הֲרָגָתְהוּ` (שופטים ט:נד) | equivalent | הבוז ללוחם שאשה גוברת עליו; ואבימלך מת בכל זאת מיד אשה, כמו שאקהת ימות ביד ענת. |
| VI:43 | [aṯb .] ⸢h⸣m . l aqryk . b ntb . pšʿ | [אשוב] – אם לא אֶקְרְךָ בנתיב פשע, | `אֲשֶׁר קָרְךָ בַּדֶּרֶךְ` (דברים כה:יח) | cognate | *qry* G = `קָרָה` + מושא: לפגוש בדרך, להתנפל. |
| VI:45 | [pʿny . a]tk . nʿmn . ʿmq . nšm | [רגליי], אותך, הנַּעֲמָן, *תקיף* האנשים!" | `נִטְעֵי נַעֲמָנִים` (ישעיהו יז:י) | cognate | *nʿmn* "הנאה, היפה", כינוי של אל צעיר שמת (אדוניס?): כמו אקהת. |
| VI:48 | [qrb . ap]⸢q⸣ . thmtm . tgly . ḏd il | [בקרב אפיקי] שתי התהומות; נגלתה אל מערת אֵל | `וּמִשָּׁם יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים` (בראשית ב:י) | divergence | מקור הנהרות במעון האל (§6.7). |
| VI:51 | [wy . w tkbd]⸢n⸣h . tlšn . aqht . ġzr | [וכיבדתהו]; הלשינה על אקהת הגבור, | `אַל-תַּלְשֵׁן עֶבֶד אֶל-אֲדֹנָו` (משלי ל:י) | cognate | *lšn* = `הִלְשִׁין`: להשמיץ אדם לפני אדונו – כמו ענת המשמיצה את אקהת לפני אֵל. |

### Parallels index (KTU 1.18)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:11 | [x l qdq]⸢d⸣k . ašhlk [. šbtk . dmm] | […קדק]דך; אוליך [שיבתך בדם], | `וְהוֹרַדְתֶּם אֶת שֵׂיבָתִי בְּיָגוֹן שְׁאוֹלָה` (בראשית מב:לח) | cognate | *šbt* = `שֵׂיבָה` כשם לראש השב של הזקן, והורדתו (למוות) בפועל גרימה (*ašhlk* // `וְהוֹרַדְתֶּם`). |
| I:13 | aqht . w yplṭk . bn [dnil . xxxx] | אַקְהָת – ויפלטך, בן [דָּנִאֵל …] | `אֱלֹהַי פַּלְּטֵנִי מִיַּד רָשָׁע` (תהלים עא:ד) | cognate | *plṭ* D "הציל מיד", כמו *yplṭk … b yd btlt ʿnt*. |
| I:16 | ydʿt⸢k⸣ . bt . w anšt . w i[n . b ilht] | "ידעתיך, בת, ואֲנוּשָׁה (את), ואין [באֵלוֹת] | `אָנוּשׁ חִצִּי בְלִי-פָשַׁע` (איוב לד:ו) | cognate | `אָנוּשׁ` "אנוש, חשוך מרפא", מן השורש של *anšt*. |
| I:17 | qlṣ{xx}⸢k⸣ . tbʿ . bt . ḫnp . lb[k . aši . a] | עומדת בפנייך. צאי לדרך, בת – חנופת לבך; […] | `וְחַנְפֵי-לֵב יָשִׂימוּ אָף` (איוב לו:יג) | cognate | *ḫnp lb* = `חַנְפֵי-לֵב`, "רשעי הלב". |
| I:19 | irtk . dṯ . ydṯ . mʿqbk [. xxx] | חיקך: דוֹשׁ יָדוּשׁ מְעַקְּבֵךְ […] | `כִּי כָל אָח עָקוֹב יַעְקֹב` (ירמיהו ט:ג) | cognate | אותה בניה של מקור מוחלט + פועל, והשורש עקב "לעקוף, לרמות". |
| I:24 | [qht . ġ]zr . at . aḫ . w an . ⸢x⸣[xxx] | [אקהת הג]בור: אתה – אח, ואני …[…] | `מִי יִתֶּנְךָ כְּאָח לִי` (שיר השירים ח:א); `אֲחֹתִי כַלָּה` (שיר השירים ד:ט) | cognate | "אח" בלשון האהבה; ובאותו ספר . |
| I:25 | [xxx qr]⸢b⸣ . š⸢bʿ⸣ . ṯirk . ⸢l⸣[xxxxx] | […קר]ב; שבעה שאריך […] | `אִישׁ אִישׁ אֶל כָּל שְׁאֵר בְּשָׂרוֹ` (ויקרא יח:ו) | cognate | *ṯir* = `שְׁאֵר` "קרוב, בשר". |
| I:30 | [xxxxxx .] ⸢l⸣ qrt . ablm . ⸢a⸣[blm] | […] אל קרת אָבִלִם, א[בלם], | `שָׁאוֹל יְשָׁאֲלוּ בְּאָבֵל וְכֵן הֵתַמּוּ` (שמואל ב כ:יח) | cognate | `אָבֵל` "אחו", שם מקום במקרא (אָבֵל בֵּית מַעֲכָה), אותה מלה כמו *ablm*. |
| I:31 | [qrt . zbl….] yr⸢ḫ⸣ . d mgdl . ⸢š⸣[xxx] | [קרת הנסיך …] יָרִחַ, אשר (בה) מגדל …[…] | `עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | cognate | עיר עם מגדל; כאן עירו של אל הירח. |
| IV:9 | ik . al . yḥdṯ . yrḫ . b ⸢q⸣[rn . šmalh] | איך לא יתחדש יָרִחַ בק[רן שמאלו], | `וְהָיָה מִדֵּי-חֹדֶשׁ בְּחָדְשׁוֹ` (ישעיהו סו:כג) | cognate | *ḥdṯ* "להתחדש", ממנו `חֹדֶשׁ`: הירח המתחדש. |
| IV:17 | lk . aštk . km . nšr . b ḥb[šy] | לְךָ – אשיתך כנשר בחגורתי, | `כְּנֶשֶׁר יָעִיר קִנּוֹ עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | cognate | *km nšr* = `כְּנֶשֶׁר`, וב־IV:20 גם הפועל *rḫp* = `יְרַחֵף`: אותו צמד מלים בדימוי הנשר. |
| IV:18 | km . diy . b tʿrty . aqht . [km . yṯb] | כדאה בְּתַעְרִי. אקהת – [כאשר ישב] | `הֵאָסְפִי אֶל תַּעְרֵךְ` (ירמיהו מז:ו) | cognate | `תַּעַר` "נדן", כמו *tʿrt*. |
| IV:20 | nšrm . trḫpn . ybṣr . [ḥbl . d] | נשרים מרחפים, צופה [חבל] | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | cognate | *rḫp* D = `מְרַחֶפֶת` (פיעל), אותו פועל ואותו בניין; אבל מה מרחף מעל מה: כאן נשרים טורפים מרחפים מעל קורבן שעומד להירצח, ושם רוח האל מעל המים – חיים לפני הבריאה, מול מוות. |
| IV:20 | nšrm . trḫpn . ybṣr . [ḥbl . d] | נשרים מרחפים, צופה [חבל] | `כְּנֶשֶׁר יָעִיר קִנּוֹ עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | cognate | נשר "מרחף" (*nšr* + *rḫp*): שם הנשר מרחף מעל גוזליו כדי להגן עליהם; כאן מעל אקהת כדי להרוג אותו. |
| IV:20 | nšrm . trḫpn . ybṣr . [ḥbl . d] | נשרים מרחפים, צופה [חבל] | `וּפָגַעְתָּ חֶבֶל נְבִאִים` (שמואל א י:ה) | cognate | *ḥbl* = `חֶבֶל` "להקה, קבוצה". |
| IV:21 | iym . bn . nšrm . ar⸢ḫ⸣p . a⸢n⸣[k .] ⸢ʿl⸣ | דאות. בין הנשרים ארחף אני; על | `עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | cognate | *arḫp … ʿl* = `יְרַחֵף … עַל`: לרחף "על" מישהו. |
| IV:23 | ṯlṯid . ʿl . udn . špk . km . šiy | שלוש פעמים על האוזן; שפוך כרוצח | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | equivalent | `שָׁפַךְ דָּם` הוא צירוף הרצח במקרא, כמו *špk … dm* כאן. |
| IV:25 | rḥ . npšh . km . iṯl . brlth . km | כרוח נפשו, כרוק תאוותו, | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים; וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה` (בראשית ב:ז) | divergence | אותם שלושה: הנשימה, האף, הנפש; בבראשית הנשימה נכנסת באף והאדם נעשה נפש חיה, וכאן הנפש יוצאת "כרוח … כקיטור מאפו" – המוות כהיפוך הבריאה. |
| IV:25 | rḥ . npšh . km . iṯl . brlth . km | כרוח נפשו, כרוק תאוותו, | `תֹּסֵף רוּחָם יִגְוָעוּן` (תהלים קד:כט) | cognate | יציאת הרוח היא המוות. |
| IV:31 | trḫpn . ybṣr . ḥbl . diy[m . bn] | מרחפים, צופה חבל דאות. [בין] | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | cognate | ראו IV:20. |
| IV:32 | nšrm . trḫp . {x}ʿnt . ⸢ʿ⸣l [. aqht] | הנשרים רִחֲפָה ענת; על [אקהת] | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | cognate | אותו פועל ואותו בניין (D = פיעל), ובנושא נקבה – ענת, כמו `רוּחַ`; *trḫp … ʿl* כמו `מְרַחֶפֶת עַל`, אבל כאן בעבר (`רִחֲפָה`), לא בבינוני של בראשית. ההבדל: אלה טורפת מעל אדם שנרצח, מול רוח האל מעל המים. |
| IV:36 | yṣat . km . rḥ . np⸢š⸣[h . km . iṯl] | יצאה כרוח נפשו, [כרוק] | `וַיְהִי בְּצֵאת נַפְשָׁהּ כִּי מֵתָה` (בראשית לה:יח) | equivalent | יציאת הנפש היא המוות, באותו פועל *yṣʾ*. |
| IV:38 | ʿnt . b ṣmt . mhrh . [xxxxx] | ענת – בְּהַצְמָתַת מְהִירָהּ […] | `יַצְמִיתֵם יְהוָה אֱלֹהֵינוּ` (תהלים צד:כג) | cognate | *ṣmt* = `הִצְמִית` (§4.3). |

### Parallels index (KTU 1.19)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I:13 | k apʿ . il . b ⸢gdrt⸣ . ⟨k⟩ ⸢klb⸣ l | כאפעה אֵל בגדרת, ⟨כ⟩כלב ל־ | `וּפֹרֵץ גָּדֵר יִשְּׁכֶנּוּ נָחָשׁ` (קהלת י:ח) | cognate | הנחש האורב בגדר; כאן *apʿ … b gdrt* "אפעה בגדר". |
| I:13 | k apʿ . il . b ⸢gdrt⸣ . ⟨k⟩ ⸢klb⸣ l | כאפעה אֵל בגדרת, ⟨כ⟩כלב ל־ | `אֶפְעֶה וְשָׂרָף מְעוֹפֵף` (ישעיהו ל:ו) | cognate | *apʿ* = `אֶפְעֶה`. |
| I:14 | ḫṭh . imḫṣh . kd . ʿl . ⸢qšth⸣ . | שרביטו: מחצתיו *כֵּן* – על קשתו, | `מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט) | cognate | *mḫṣ* = `מָחַץ` בגוף ראשון, בפי אל. |
| I:18 | prʿ . qẓ . y⸢ḥ⸣ . šbl⸢t⸣ | *בחיר* הקיץ; *יחי* שיבולת | `כְּלוּב קָיִץ … בָּא הַקֵּץ` (עמוס ח:ב) | cognate | *qẓ* "פרי הקיץ" = `קַיִץ`: גם שם פרי הקיץ סימן לסוף. |
| I:30 | b grn . yḫrb . [xxxx] | בגורן – חרבו, […] | `עָבְשׁוּ פְרֻדוֹת תַּחַת מֶגְרְפֹתֵיהֶם … כִּי הֹבִישׁ דָּגָן` (יואל א:יז) | cognate | הבצורת בגרנות ובאסמים. |
| I:31 | yġly . yḫsp . ib . ⸢kr⸣[mm] | קמלו, *צנחו* אִבֵּי הכרמים; | `לִרְאוֹת בְּאִבֵּי הַנָּחַל` (שיר השירים ו:יא) | cognate | *ib* = `אֵב` "ניצן, פרי צעיר". |
| I:32 | ʿl . bt . abh . nšrm . t⸢r⸣ḫ⸢pn⸣ . | על בית אביה נשרים מרחפים, | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | cognate | *rḫp … ʿl* = `מְרַחֶפֶת עַל`: כאן נשרים מעל בית האבל – סימן המוות, מעל הבית שאינו יודע עדיין. |
| I:32 | ʿl . bt . abh . nšrm . t⸢r⸣ḫ⸢pn⸣ . | על בית אביה נשרים מרחפים, | `כְּנֶשֶׁר יָעִיר קִנּוֹ עַל גּוֹזָלָיו יְרַחֵף` (דברים לב:יא) | cognate | הנשר המרחף. |
| I:36 | tmzʿ . kst . dnil . mt | קרעה את גלימת דנאל, איש | `וַיִּקְרַע יַעֲקֹב שִׂמְלֹתָיו` (בראשית לז:לד) | equivalent | קריעת הבגד במות הבן; כאן הבת קורעת את בגד האב (אולי מנהג: או – בשבר הלוח – האב קורע?). |
| I:40 | ḥm . un . y⸢r⸣ . ʿrpt | חום *האונים* – יורה! עננים | `יוֹרֶה וּמַלְקוֹשׁ` (דברים יא:יד) | cognate | *yr* = `יוֹרֶה`, הגשם הראשון של הסתיו. |
| I:42 | l ġnbm . šbʿ . šnt | על הענבים? שבע שנים | `אִם יִהְיֶה הַשָּׁנִים הָאֵלֶּה טַל וּמָטָר כִּי אִם לְפִי דְבָרִי` (מלכים א יז:א) | cognate | אדם שגוזר על הטל והמטר לשנים. |
| I:43 | yṣrk . bʿl . ṯmn . rkb | יחסר בַּעַל, שמונה – רוכב | `הָרֵי בַגִּלְבֹּעַ אַל טַל וְאַל מָטָר עֲלֵיכֶם וּשְׂדֵי תְרוּמֹת` (שמואל ב א:כא) | cognate | **קללת הטל והמטר על המקום שבו נפל הגיבור**: דוד מקלל את הרי הגלבוע שבהם נפלו שאול ויהונתן, ודנאל מקלל את ארצו שבה נפל אקהת; `אַל טַל וְאַל מָטָר` // *bl ṭl bl rbb*. |
| I:44 | ʿr⸢pt⸣ . bl . ⸢ṭ⸣l . bl rbb | העננים: בַּל טל, בַּל רביבים, | `כִּשְׂעִירִם עֲלֵי-דֶשֶׁא וְכִרְבִיבִים עֲלֵי-עֵשֶׂב` (דברים לב:ב) | cognate | *ṭl* // *rbb* = `טַל` // `רְבִיבִים` (שם בפסוק הקודם `תִּזַּל כַּטַּל אִמְרָתִי`). |
| I:45 | bl . ⸢šrʿ⸣ . thmtm . bl | בַּל *שֶׁטֶף* שתי התהומות, בַּל | `נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם רַבָּה` (בראשית ז:יא) | divergence | התהום כמקור המים מלמטה; כאן הקללה שהתהומות לא יזרמו, ובבראשית הן מתפרצות במבול. |
| I:46 | ṭb{n}t . ql . bʿl . k tmzʿ | טוב קול בעל!" כאשר קרעה | `קוֹל יְהוָה עַל הַמָּיִם` (תהלים כט:ג) | cognate | "קולו" של אל הסערה הוא הרעם המביא גשם. |
| II:1 | šmʿ . pġt . ṯkmt [.] ⸢my⸣ | "שמעי, פּוּגַת, סוֹבֶלֶת־שְׁכֶם המים, | `וְכַדָּהּ עַל שִׁכְמָהּ` (בראשית כד:טו) | cognate | רבקה, הנערה הנושאת מים על שכמה: *ṯkmt my* מאותו שורש ובאותה תמונה. |
| II:2 | ḥspt . l šʿr . ṭl . ydʿ[t] | חושפת מן השיער טל, יודעת | `וַיִּמֶץ טַל מִן הַגִּזָּה מְלוֹא הַסֵּפֶל מָיִם` (שופטים ו:לח) | equivalent | איסוף טל מן הצמר בבוקר; כאן מעשה יומיומי של הבת, שם אות. |
| II:14 | yph . b yġlm . bṣql . y⸢ḥbq⸣ | ראה ב*צחיחים*; ניצן חיבק | `אַךְ סוֹרְרִים שָׁכְנוּ צְחִיחָה` (תהלים סח:ז) | equivalent | `צְחִיחָה` "אדמה צחיחה". |
| II:15 | w ynšq . aḥl . an . bṣ[ql] | ונשק: "אַחְלַי, אָן? הני[צן] | `אַחֲלֵי אֲדֹנִי לִפְנֵי הַנָּבִיא` (מלכים ב ה:ג) | cognate | *aḥl* = `אַחֲלֵי`, מלת המשאלה. |
| II:18 | ġzr . tštk . b qrbm . asm | הגבור, תשיתך בקרב האסם!" | `יְצַו יְהוָה אִתְּךָ אֶת הַבְּרָכָה בַּאֲסָמֶיךָ` (דברים כח:ח) | cognate | *asm* = `אָסָם`. |
| II:21 | b ḥmdrt . šblt . y⸢ḥb⸣[q] | בשדפה; שיבולת חיבק | `וְהִנֵּה שֶׁבַע שִׁבֳּלִים דַּקּוֹת וּשְׁדוּפֹת קָדִים` (בראשית מא:ו) | equivalent | שיבולים שרופות ברוח, סימן לבצורת; *ḥmdrt* "שדה שרוף" // `שְׁדוּפֹת`. |
| II:33 | mḫlpt . w l . ytk . ⸢dmʿt⸣ [.] ⸢k⸣ m | מחלפות; ואכן יִתַּךְ דמעות כמו | `אִם תַּאַרְגִי אֶת שֶׁבַע מַחְלְפוֹת רֹאשִׁי` (שופטים טז:יג) | cognate | *mḫlpt* = `מַחְלְפוֹת` (כמו 1.107: `מַחְלְפוֹת`). |
| II:37 | ⸢a⸣bšrkm . dn⸢il⸣ . ⸢dx⸣h⸢xx⸣ | אֲבַשֶּׂרְכֶם, דנאל … | `לְבַשֵּׂר בֵּית עֲצַבֵּיהֶם וְאֶת הָעָם` (שמואל א לא:ט) | cognate | *bšr* = `בִּשֵּׂר`, הבאת בשורה (שם על מות שאול). |
| II:38 | riš . ⸢rqth⸣ . ⸢tḥt ʿ⸣n⸢t y⸣q⸢l⸣ . l . t⸢šʿly⸣ hwt . [š]⸢ṣ⸣at k rḥ . npšhm | ראש רקתו; תחת ענת נפל; לא *תעלה* – אותו הוציאה כרוח נפשם, | `וַתִּתְקַע אֶת הַיָּתֵד בְּרַקָּתוֹ` (שופטים ד:כא) | cognate | *rqt* = `רַקָּה`, מקום המכה הקטלנית. |
| II:42 | mt . aq{t.}ht . ⸢ġzr⸣ . ⸢šṣ⸣[at] | מֵת אקהת הגבור! הוציאה | `כְּתֹנֶת בְּנִי חַיָּה רָעָה אֲכָלָתְהוּ; טָרֹף טֹרַף יוֹסֵף` (בראשית לז:לג) | equivalent | בשורת מות הבן לאב. |
| III:2 | ⸢b⸣ʿl . yṯb⟨r⟩ . ⸢b⸣ʿl . y⸢ṯbr⸣ [. diy . hmt] | בעל ישבו⟨ר⟩, בעל ישבור [אברותיהם]; | `יִפְרֹשׂ כְּנָפָיו יִקָּחֵהוּ יִשָּׂאֵהוּ עַל אֶבְרָתוֹ` (דברים לב:יא) | equivalent | *knp* // *diy* = `כְּנָפָיו` // `אֶבְרָתוֹ`, אותו צמד בנשר. |
| III:5 | ʿẓm . ab{p}ky . w . a⸢q⸣brnh | עצם – אבכה ואקברנו; | `וַיִּקְחוּ אֶת עַצְמֹתֵיהֶם וַיִּקְבְּרוּ תַחַת הָאֶשֶׁל בְּיָבֵשָׁה` (שמואל א לא:יג) | equivalent | קבורת העצמות של הגיבור שגופו חולל; *ʿẓm* … *qbr*. |
| III:14 | ⸢tpr⸣ . w du . b nši . ʿnh . ⸢w yp⸣⟨h⟩⸢n⸣ | יפרחו וידאו!" בשאתו את עיניו – ו⟨ר⟩אה, | `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר` (דברים כח:מט) | cognate | *dʾy* "לדאות" עם *nšr*: אותו פועל ואותו עוף. |
| III:40 | ⸢a⸣qht . yb⟨ky⟩ . l ⸢l⸣qẓ . ybky . ⸢w yqb⸣r | את אקהת; בכ⟨ה⟩ *ללקט*?, בכה ויקבור; | `וַיֵּבְךְּ אֹתוֹ אָבִיו` (בראשית לז:לה) | equivalent | בכי האב על הבן המת. |
| III:41 | yqbr{.}nn . b ⸢m⸣dgt . b knrt | קברו במחילה, בכִּנֶּרֶת. | `מִכִּנֶּרֶת וְעַד יָם הָעֲרָבָה` (דברים ג:יז) | cognate | *knrt* = `כִּנֶּרֶת`, השם המקראי (§12.1: צורה מקראית). |
| III:44 | hmt . hm . tʿpn . ʿl . qbr . bny | אם יעופפו על קבר בני, | `וְעוֹף יְעוֹפֵף עַל הָאָרֶץ` (בראשית א:כ) | cognate | *ʿp* = `עוֹפֵף`, אותו פועל (§5.2: `עוֹף` שמור ל־*ʿp*); כאן עופות טורפים מעל קבר. |
| III:46 | mlk . yṣ⸢m⸣ . y lkm . qr . mym . d ⸢ʿ⸣[lk] | המלך זָעַם: "הוֹי לך, קוֹר־מַיִם, אשר ע[לייך] | `וְהָיָה הָעִיר הַקְּרֹבָה אֶל הֶחָלָל` (דברים כא:ג) | divergence | ההרוג שלא נודע מי הכהו: העיר הקרובה אל החלל מתכפרת בעגלה ערופה; כאן המלך מקלל את הערים הקרובות למקום הרצח. |
| III:46 | mlk . yṣ⸢m⸣ . y lkm . qr . mym . d ⸢ʿ⸣[lk] | המלך זָעַם: "הוֹי לך, קוֹר־מַיִם, אשר ע[לייך] | `וְעַתָּה אָרוּר אָתָּה מִן הָאֲדָמָה` (בראשית ד:יא) | equivalent | קללה על דם שנשפך. |
| III:48 | ʿnt . brḥ . p ʿlm{.}h . ʿnt . p dr . ⸢dr⸣ | כָּעֵת – בָּרִחַ, ולעולם; כָּעֵת – ולדור דור: | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | equivalent | הנרצח מקולל להיות נודד; כאן *brḥ* "בורח, נע" על העיר הקרובה לרצח. |
| III:48 | ʿnt . brḥ . p ʿlm{.}h . ʿnt . p dr . ⸢dr⸣ | כָּעֵת – בָּרִחַ, ולעולם; כָּעֵת – ולדור דור: | `נָחָשׁ בָּרִחַ` (ישעיהו כז:א) | cognate | *brḥ* = `בָּרִחַ` (§4.1), כאן במשמעות היסוד "בורח". |
| III:53 | ġzr . šrš⸢k⸣ . b arṣ . ⸢al⸣ | הגבור: שורשך בארץ אַל | `מִתַּחַת שָׁרָשָׁיו יִבָשׁוּ וּמִמַּעַל יִמַּל קְצִירוֹ` (איוב יח:טז) | equivalent | קללת הרשע: שורש למטה, ענף למעלה. |
| III:54 | ypʿ . riš . ġly . bd . nsʿk | יצמח; ראש – קָמַל ביד נוסחך! | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | cognate | *nsʿ* = `נָסַח`, עקירה מן האדמה כקללה. |
| IV:5 | ʿwrt . yštk . bʿl . l ht | עיוורת ישיתך בעל, מֵעַתָּה | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן` (דברים כח:כח) | cognate | עיוורון כקללת אל. |
| IV:6 | ⸢w⸣ {x}⸢ʿlmh⸣ . ⸢l⸣ ʿ⸢n⸣t . p dr . dr | ועד עולם; מכָּעֵת – ולדור דור: | `יְהִי שֵׁם יְהוָה מְבֹרָךְ מֵעַתָּה וְעַד-עוֹלָם` (תהלים קיג:ב) | cognate | *l ht w ʿlmh* = `מֵעַתָּה וְעַד עוֹלָם`, הצירוף של הנצח – כאן בקללה. |
| IV:10 | {b}kyt . b hklh . mšsp⸢d⸣t . b ⸢ḥ⸣ẓrh . {pẓ} | בוכות בהיכלו, מספידות בחצרו, | `וְקִרְאוּ לַמְקוֹנְנוֹת וּתְבוֹאֶינָה` (ירמיהו ט:טז) | cognate | המקוננות המקצועיות. |
| IV:10 | {b}kyt . b hklh . mšsp⸢d⸣t . b ⸢ḥ⸣ẓrh . {pẓ} | בוכות בהיכלו, מספידות בחצרו, | `וַיִּסְפְּדוּ שָׁם מִסְפֵּד גָּדוֹל וְכָבֵד מְאֹד; וַיַּעַשׂ לְאָבִיו אֵבֶל שִׁבְעַת יָמִים` (בראשית נ:י) | cognate | *spd* = `סָפַד`, ו"שבעה" באבל. |
| IV:11 | pẓġm . ġr . yb⸢k⸣ . l aqht | *מחתכי* עור. בכה על אקהת | `לֹא תִתְגֹּדְדוּ וְלֹא תָשִׂימוּ קָרְחָה בֵּין עֵינֵיכֶם לָמֵת` (דברים יד:א) | divergence | מנהג פציעת העור באבל, שהתורה אוסרת; כאן הוא חלק מטקס האבל המלכותי. |
| IV:15 | šbʿt . šnt . ybk . l aq | שבע שנים. בכה על אקהת | `וַיַּעַשׂ לְאָבִיו אֵבֶל שִׁבְעַת יָמִים` (בראשית נ:י) | equivalent | אבל של "שבעה"; כאן שבע שנים – אבל של מלך על יורש. |
| IV:23 | dbḥ . ilm . yš⸢ʿly⸣ . dġṯ⸢hm⸣ | זבח לאֵלִים, העלה *עתרם* | `וַעֲתַר עֲנַן הַקְּטֹרֶת עֹלֶה` (יחזקאל ח:יא) | equivalent | ענן הבשמים "עולה"; *dġṯ* ו־*šʿly* = `עֲתַר … עֹלֶה`. |
| IV:32 | l tb⸢rkn⸣ . a⸢lk⸣ . ⸢brktm⸣ | אכן תברכני – אלך מבורכת, | `בָּרְכֵנִי גַם אָנִי אָבִי` (בראשית כז:לד) | cognate | הבן (כאן הבת) המבקש ברכת אב. |
| IV:34 | imḫṣ . mḫṣ . aḫy . ⸢akl⸣ [.] ⸢m⸣ | אמחץ את מוחץ אחי, אֲכַלֶּה את | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | equivalent | גאולת הדם: הרוצח ייהרג; כאן האחות היא גואלת הדם. |
| IV:45 | nšgh . ⸢ḥ⸣rb . tšt . b tʿ⸢r⸣[th] | *נדנה*; חרב שָׂמָה בְּתַעְרָהּ, | `וַתִּקַּח יָעֵל … אֶת יְתַד הָאֹהֶל וַתָּשֶׂם אֶת הַמַּקֶּבֶת בְּיָדָהּ` (שופטים ד:כא) | equivalent | האשה המזיינת את עצמה בכלי הריגה בתוך האוהל (ראו IV:50–61). |
| IV:46 | w ʿl . tlbš . ⸢n⸣pṣ . aṯ⸢t⸣ . [lm] | ומעל לבשה בגדי אשה. [ב] | `לֹא יִהְיֶה כְלִי גֶבֶר עַל אִשָּׁה וְלֹא יִלְבַּשׁ גֶּבֶר שִׂמְלַת אִשָּׁה` (דברים כב:ה) | equivalent | בגדי גבר ובגדי אשה; כאן האשה לובשת את שניהם, כתחבולה. |
| IV:48 | ⸢pġ⸣t . minš . šdm . l mʿ⸢r⸣[b] | פוגת אל מחנה השדות; למערב | `כִּרְחֹק מִזְרָח מִמַּעֲרָב` (תהלים קג:יב) | cognate | *mʿrb* = `מַעֲרָב`, מקום כניסת השמש. |
| IV:53 | št . qḥn . ⸢w⸣ tšqyn . yn . ⸢qḥ⸣ | *השרה*: "קְחִי, והַשְׁקִינִי יין! קחי | `הַשְׁקִינִי נָא מְעַט מַיִם כִּי צָמֵאתִי` (שופטים ד:יט) | cognate | הלוחם באוהל מבקש מן האשה "השקיני", והיא משקה אותו ואחר כך הורגת אותו (יעל וסיסרא). |
| IV:54 | ⸢ks⸣ . bdy . qbʿt . b ym⸢ny⸣ . ⸢tq⸣ | כוס מידי, קֻבַּעַת מימיני!" | `אֶת קֻבַּעַת כּוֹס הַתַּרְעֵלָה שָׁתִית` (ישעיהו נא:יז) | cognate | *qbʿt* = `קֻבַּעַת`. |
| IV:58 | d yq⸢n⸣y . ḏdm . y⸢d⸣ . mḫṣt . a⸢q⸣[h]⸢t⸣ . ġ | אשר קנה מערות. היד שמחצה את אקהת הגבור | `קֹנֵה שָׁמַיִם וָאָרֶץ` (בראשית יד:יט) | cognate | *qny* "קנה (כבעלים)" של אֵל; כאן "אשר קנה מערות" – אולי תואר אֵל. |
| IV:61 | ⸢y⸣bl . lbh . km . bṯn . yn [. t]⸢ml⸣ah . ṯnm . tšqy msk . hwt . tšqy | יוביל לבו כפתן; יין מילאה פעמיים, השקתה *מסך*, אותו השקתה. | `כִּי כוֹס בְּיַד-יְהוָה וְיַיִן חָמַר מָלֵא מֶסֶךְ` (תהלים עה:ט) | cognate | *msk* = `מֶסֶךְ`, היין המזוג. |

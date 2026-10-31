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

## Parallels index

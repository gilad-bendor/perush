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

**EUPT** (Göttingen, 2025; collated; CC BY-SA 4.0; ) is the newest critical edition and **rank 1 for
the readings** (renderings §12.3); the line skeleton and the word parses are CUC's (KTU³; the same line numbers). Where
EUPT reads otherwise, the Hebrew follows EUPT and the פירוק says so. EUPT's English / German translation and commentary
are rank 3–4 (read after drafting, ). Other rank 3 (not in the folder; never quoted
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

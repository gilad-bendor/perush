# Project 7: The Debate between Summer and Winter (ETCSL 5.3.3) → Hebrew

Round 3, run 1 (2026-10-21), creation corpus (`../corpus.md`). Siglum in the corpus parallels index: **S&W**.

## Scope
An OB Sumerian school debate set at the Ur III court of Ibbi-Suen: Enlil begets Summer (*emeš*) and Winter (*enten*) on the mountain and decrees their fates; the two brothers bring their gifts to Enlil's house, quarrel and insult each other; Enlil decides for Winter, "the faithful farmer of the gods", and Summer bows to his brother; they feast and are reconciled. The whole composite: 295 entries (1–318; ETCSL's gaps 43, 80–87, 123–133, 168–169, 204 are not entries).

## Base text and sources
- **Base text (rank 1):** ETCSL c.5.3.3, `../../sources/ETCSL/5.3.3--Debate-Summer-and-Winter/transliteration.md` (from the TEI `c.5.3.3.xml`; CC BY-NC-SA). Copy each transliteration line exactly.
- **Lemmas and morph (rank 2):** ETCSL's TEI lemmas (`python3 -I ../../tools/sumerian_workbench.py lemmas|line ../../sources/ETCSL/5.3.3--Debate-Summer-and-Winter/c.5.3.3.xml FROM-TO`); ORACC: `../../sources/ORACC/epsd2-literary--Q000762--Debate-Summer-and-Winter/Q000762--lemmatised-morph.md` (ePSD2 lemma + morph for every word, same labels; CC0); ePSD2 (`… gloss`).
- **Rank 3:** ETCSL's English translation (`../../sources/ETCSL/5.3.3--Debate-Summer-and-Winter/translation.md`), read only after forming the reading of each line. (Other translations: see "Sources consulted".)

## Line numbering
ETCSL composite labels, used as entry labels (`### <label>`); checked by `python3 -I ../sumerian_tools.py verify 7`.

## The parallels that matter for the commentary (the coordinator's list: "look for", never "translate as")
**Gen 8:22** (`זֶרַע וְקָצִיר וְקֹר וָחֹם וְקַיִץ וָחֹרֶף וְיוֹם וָלַיְלָה`: the seasons fixed as fates, S&W 1–25); Ps 74:16–17 (`קַיִץ וָחֹרֶף אַתָּה יְצַרְתָּם`) — and the divine begetting of the seasons (12–18: [absent] in the Bible); Gen 1:11–12, 1:20–22 (S&W 30–31 fish and birds born together by the sea; 50–58 births, nests, eggs, fruit; follow corpus §6.1); **Gen 4:2–8** (two brothers, both bring gifts to the god's house, 69–104; the quarrel; the god's verdict for one, 304–309; God's speech to Cain, 4:6–7); **Gen 33:3–11, 13:8, Ps 133:1–2** (the reconciliation: Summer bows, gives gifts; "brotherhood and friendship like fine oil", 310–315); Gen 31:40 (heat by day, frost by night); Amos 3:15 (winter house and summer house); Prov 6:6–8, 10:5, 20:4; Jer 8:20; Zech 14:8; the ancient mind: the Sumerian agricultural year (*enten*, the cold wet half: irrigation, sowing, lambing; *emeš*, the hot dry half: harvest, brick-making, building), the Ur III court and its banquet, the insults.

## Sources consulted
- **Rank 1:** ETCSL c.5.3.3 composite (`../../sources/ETCSL/5.3.3--Debate-Summer-and-Winter/transliteration.md`, from `c.5.3.3.xml`), every line copied by script (`@` filled from the base file).
- **Rank 2:** ORACC epsd2/literary Q000762 (`Q000762--lemmatised-morph.md`): lemma and morph for every word; ETCSL TEI lemmas (`sumerian_workbench.py lemmas`); ePSD2 glossary (`sumerian_workbench.py gloss`) for the rare words (*šeĝbar*, *ḫaš₄ dug₄*, *dih*, *ad*, *ze₂-da*, *zaḫili*, *ukuš₂*, *šumsikil* …).
- **Rank 3:** ETCSL's English translation (t.5.3.3), read after each section's own reading; every disagreement is in the **תרגומים** bullet.
- **Precedents:** the corpus renderings (§0–§9); Bird and Fish (`3-הציפור-והדג/annotated.rtl.md`: the debate formulas, *dab₅*, *niĝin*, *a zi-šag₄-ĝal₂*, *i-gi₄-in-zu*); Grain and Sheep (project 2 Text 5); Enki and the World Order (*a-eštub*, *nam-ḫe₂*, *ri*, *ki-šar₂*); and, through `trgrep`, the other corpora (Gudea for *gen₆*, *nam-nir*, *maš₂-anše*, *lulim*, *šeg₉*, *mi₂ dug₄*, *a₂-dam*; laments for *a-gin₇*, *ur₅*, *gig*, *en₃-tukum-še₃*; Enmerkar for *u₃-gul ĝar*; proverbs for *dub₃-sa*; Inana's Descent for *šu … us₂*).
- **Not available:** Vanstiphout 1997 (COS 1, 584–588); Mittermayer 2019 (*Altbabylonische Streitgespräche*). No purchase made.

## Decisions
1. **Summer and Winter** as §9.1: `קַיִץ` / `חוֹרֶף`, no article, masculine. The first occurrence of Winter is vocalized **plene** (`חוֹרֶף`, line 10): the defective `חֹרֶף` strips to `חרף`, which the script rejects. The taunt verb is always `חירף` (153, 185, 259, 262, 283); the Hebrew-only assonance is noted once (153).
2. **Partial brackets** where only part of a gated name is broken: `ק[יץ]` (88), `שח[ורף]` (100), `ח[ורף …]` (102), and the scribal omission `חור⟨ף⟩` (189, *en-te-⟨en⟩-e*). This follows the edition (only part of the word is restored) and keeps the gate's licence from depending on a bracket-free transliteration (see open decision 1).
3. **The fates and their execution** were fixed as string pairs: 20 ↔ 65 (`ערים ויישובים על הארץ לָשׂוּם` / `שָׂם ושָׂם`, = B&F 10); 21 ↔ 60, 64 (`קציר … שפע`, `הכניס`); 23 ↔ 27 (`מי־האשתוב … שגשוג, חיי הארץ`); 24 ↔ 49 (`בחלקה ובחלקה הנאמנה … שָׂם ושָׂם`); 22 ↔ 34 (`השדמה הגדולה`). 58 = 291 identical; 59 / 292 differ only by the agent (*bi₂-in-ak* / *bi₂-ak*); 195 = 293 (+ `קיץ`); 300 / 309 differ only by `-zu` / `-ani` (`שאחזת` / `שאחז`); 106 / 316 share `קיץ וחורף`.
4. **The debate formulas** follow B&F exactly (153 = B&F 51; 157 = B&F 85; 259 = B&F 137; 262 = B&F 53; 304 = B&F 167; 316 = B&F 188; 317 = B&F 189 with the §9.3 formula `אִכָּרוֹ הַנֶּאֱמָן שֶׁל אֶנְלִיל`; 318 as B&F 190).
5. **Offerings** (§9.4): *nidba* = `קָרְבָּן`, *ĝiš tag* = `הִקְרִיב`, *kadra* = `תְּשׁוּרָה`, *gu₂-un* = `מַשָּׂא`; `מִנְחָה` occurs once, for *sa₂-dug₄* (137, the gardener's regular offering).
6. **The brothers** (§9.4 left open): *šeš šeš-da* = `אָח עִם אָח`; *nam-šeš* = `אַחֲוָה`; *nam-dub₃-sa* = `יְדִידוּת` (*dub₃-sa* = `יָדִיד` in the proverbs); *i₃ li* = `שֶׁמֶן רַעֲנָן` (Enki and Ninḫursaĝa); *gam* = `כָּרַע`; *u₃-gul ĝar* = `שָׂם בַּקָּשָׁה` (Enmerkar; not ETCSL's "prayer", since `תְּפִלָּה` is *sizkur₂*); *di dab₅* = `אָחַז דִּין` (300 = 309, also 272); *bal* of a liquid = `נָסַךְ` (314; elsewhere *bal* = `הָפַךְ`).
7. **Beer** (§9.3 left open): *kaš* = `שֵׁכָר`; *kurun* = `כּוּרוּן` and *ulušin* = `אוּלוּשִׁין`, transliterated (two kinds of beer; ETCSL's "wine" for *kurun* in 311 is not the Sumerian); *lu₂-kurun-na* = `איש־הכּוּרוּן`.
8. **Heat and cold** (§9.2): `קר` / `קרה` / `קור` only for *sed₄* (35, 97, 215, 247, 250, 252); `חום` once, for *kum₂* (241); every one tagged ↔ Gen 8:22.
9. **Reserved words avoided:** the potter *baḫar₂* = `קַדָּר` (not `יוֹצֵר`); thorns *deḫi₃* / *ad₅* = `שָׁמִיר` / `שַׁיִת` (not `קוֹץ` / `דַּרְדַּר`); *tir* "forest" = `יַעַר` (`חורשות` tripped the plough gate); "your holy word" = `הַדָּבָר הַטָּהוֹר שֶׁלְּךָ` (`דברך` contains `ברך`); *zag-mu* = `תְּקוּפַת הַשָּׁנָה` (`בראשית` would contain `ברא`); `יָשַׁבְתָּ`, `שֶׁיָּשַׁבְתָּ`, `שֵׁב לְךָ` vocalized (`שבת`, `שב`); *gu₃ de₂* in 140 = `השמעת קול` (not `קריאה`, since `קָרָא` is for naming).
10. **Animals:** *lulim* = `אַיָּל` and *šeg₉* = `אַיִל־בָּר` (Gudea); *šeg₉-bar* = `יַחְמוּר` (Akk. *ayyalu*, the cognate of `אַיָּל`, noted); *am* = `רְאֵם` [cognate via *rīmu*]; *buru₄* = `עוֹרֵב` [cognate via *āribu*]; *dusu₂* = `עַיִר`, *kunga* = `פֶּרֶד`, *anše* = `חֲמוֹר`; *ze₂-da* = `חזרזיר?` (ORACC; ETCSL "porcupine").
11. **Store-rooms:** *na-kam-tum* = `בֵּית־הָאוֹצָר`, *ĝa₂-nun* = `בֵּית־הַגְּנָזִים`, *e₂-saĝ* = `אָסָם`, *guru₇* = `כְּרִי`; *gu₂ gur* (of grain piles) = `צָבַר` (idiom; Gen 41:49).
12. **Boasting idioms** kept apart: *ni₂ bur₂* `פרש את עצמו`, *ni₂ gur₄* `עיבה את עצמו`, *ni₂ gid₂* `משך את עצמו`, *ni₂ buluĝ₅* `התנפחות`, *silim-eš e* `אמר 'שלם'`.
13. **The person of 290–292:** 290 is first person (Winter); 291 is copied from 58 (`השמין`, transitive or intransitive in Hebrew); 292 has no third-person agent (`הופיעה`).

## Open decisions
1. **Gate licences and brackets.** `sumerian_tools.py` licenses `קיץ` / `חורף` by the raw transliteration, so a broken or omitted name (88 `e₂-[me]-⸢eš⸣`, 100 `⸢en⸣-[te-en]-e`, 102 `en-[te-en-na`, 189 `en-te-⟨en⟩-e`) cannot license a whole-word `[קיץ]` / `[חורף]`. We wrote partial brackets (decision 2). Proposal: apply `norm_tr` (strip `[ ] ⸢ ⸣ ⟨ ⟩`) to the transliteration before the gate check; the four lines could then take whole-word brackets if the coordinator prefers.
2. *gu₃ de₂* "call out" in 140: `השמעת קולה` (the corpus never uses `קָרָא` for it). Fine as is unless a common rendering is wanted.
3. *ri*: `הִטִּיל` here (13, 214: "cast into the womb", "impose"); EWO has *ri* = `נָשָׂא`. A split by sense; harmonize?
4. *ki-šar₂*: by sense here (`כולו`, `בכל מקומו`: 32, 279); EWO `תֵּבֵל` (cosmic).
5. *galam*: `באומנות` (308, praise of Enlil's word); B&F `נוֹכֵל` (pejorative). The Sumerian word is neutral ("skilful, artful"): one Hebrew for both?
6. *en₃-tukum-še₃*: `כל עוד` here (302, ORACC "as long as"); the laments `עַד אָנָה` (a question).
7. *e₂ dal-la* (225): `בית הקורות?`; ORACC lemmatizes *dal* "fly", which would license `עָף` – we did not use it. ETCSL "barn".
8. *ḫaš₄ dug₄* (15): `ירך *פתח*` with ETCSL; ePSD2 "to have sex". A more literal `ירך עשה` is possible.
9. *ninim* (112): `קנאה` with ORACC ("envy"); ETCSL "anger" (which would match Gen 4:5 `וַיִּחַר` more closely). The parallel row says both.
10. *ni₂-ba* (31, 236): `מעצמם` ("by themselves"); ETCSL "together". In 31 the choice matters for Gen 1:20 (the waters bring forth by themselves vs. fish and birds together).
11. *saĝ-tun₃* (176) = `מזכיר` (our proposal, ↔ 2 Sam 8:16); ORACC "recorder", ETCSL "comptroller".
12. 303 is not understood (`*תכלים*`, `*אשבחה*`); ETCSL's reading differs completely.
13. The shared formula 317 is written vocalized (`אִכָּרוֹ הַנֶּאֱמָן שֶׁל אֶנְלִיל`, as §9.3 prints it) while 318 is unvocalized plene (as B&F 190). The Farmer's Instructions 111 should copy 317 exactly.

## Proposals for the corpus renderings
Summer and Winter is the first of the three texts of Round 3 run 1 to be drafted. Words it fixed that also occur in Hoe and Plough (HP) and/or the Farmer's Instructions (FI) (`translator-brief--sumerian--5-7--shared-lemmas.txt`), for the next translators to follow:

| Sumerian | Hebrew in S&W | Lines | Also in |
|---|---|---|---|
| *a₂ kuš₂(-a)*; *kuš₂* | יגיע זרוע (literal for §9.3 `יְגִיעַ`); יגע / התייגע | 108, 115, 120, 196, 219, 294; 171, 244 | HP |
| *gan₂-ne₂ gana₂ zid-de₃* | בחלקה ובחלקה הנאמנה | 24, 29, 35, 49, 177 | FI, HP (*gana₂*) |
| *a-gar₃ gal-gal*; *a-gar₃-a-gar₃* | השדמה הגדולה (singular: `שדמות` contains `דמות`); בשדמה ובשדמה | 22, 34, 48, 62, 180; 119, 174, 290 | HP |
| *ki-buru₁₄*; *gud buru₁₄*; *zar* | מקום הקציר; שור הקציר; אלומה | 190, 193, 212; 192; 191 | FI, HP |
| *kislaḫ*; *in-nu*; *še₁₀*; *šurum*; *ĝiš ra* (thresh) | בור; תבן; גללים; זבל; במקל חבט | 144–150 | FI, HP |
| *ur₃* "drag, harrow"; *eš₂* | גרר; חבל | 177 | FI, HP |
| *apin*; *{ĝiš}al*; *šudul*; *gud* | מחרשה; מעדר; עול; שור | 225; 139; 46; passim | FI, HP |
| *dub₃* | בֶּרֶךְ (vocalized) | 281, 285, 287 | HP |
| *engar*; *engar zid*; *nam-engar*; *nu-kiri₆* | אכר; אכר נאמן; איכרות; גנן | 117, 182, 223, 255, 306; 223; 117; 137, 257 | FI, HP |
| *du-lum* | עמל | 116, 255 | HP |
| *arad₂*; *lu₂ ḫuĝ-ĝa₂*; *geme₂* | עבד; שכיר; אָמָה | 151, 275; 152; 276 | HP |
| *dab₅* | אחז | 75, 77, 78, 272, 300, 309 | HP |
| *du₇* | נגח / השלים | 38, 107, 232, 239, 280 | FI |
| *tag* | נגע (causative `הגיע`) | 55, 57, 63, 111, 221, 290, 294 | FI |
| *us₂*; *ki us₂*; *šu … us₂* | הדביק; הדביק לארץ; ביד דחף | 53; 68, 159, 164, 220, 287; 16 | FI, HP |
| *gur*; *gu₂ … gur*; *niĝin* | הקיף; צבר; סובב | 32, 91; 64, 197, 290; 152, 163 | FI, HP |
| *dirig* | עלה על (verdict) / יתר / עודף | 317; 265, 282; 198 | FI, HP |
| *gen₆* | כונן | 7, 10, 37 | HP |
| *ri* | הטיל (open decision 3) | 13, 214 | FI, HP |
| *šub* | נפל / השליך | 200, 222, 279 | FI, HP |
| *ba-al* | חפר | 210 | HP |
| *ze₂* (pluck); *dar* (split); *kud* | תלש; ביקע; כרת / חתך | 162, 208; 208; 103, 149 | FI, HP |
| *si-il* | פילח | 286 | FI, HP |
| *teš₂-bi* | יחדיו | 286, 303, 315 | FI, HP |
| *im* (clay / rain); *šeĝ₃* | טיט / גשם; המטיר | 210 / 102, 256; 256 | HP |
| *gir₄*; *udun*; *izi* | כּוּר; כבשן; אש | 158, 268, 270, 275; 268, 270; 210, 226, 268 | HP |
| *sig₇* | ירוק | 149 | HP |
| *sumur* | הכעיס | 182 | FI, HP |
| *gi-gur*; *dusu* | סל־קנים; סל | 77, 257; 281 | HP |
| *mi₂ dug₄* | טיפח | 231, 263 | FI, HP |
| *ma-na*; *sila₃* | מנה; קב | 199; 193 | FI, HP |
| *buluĝ₃* | גידל / הגדיל | 4, 100 | HP |
| *gur₄* | עבה | 250, 265 | HP |
| *dugud* | כבד | 142, 159, 187, 241, 269 | HP |
| *ki duru₅*; *šu-nim* | מקום לח; אביב | 179, 200; 180 | FI |
| *ĝiš-gi*; *gi sumun* | סבך קנים; קנה ישן | 32, 54, 74, 148; 32, 208, 281 | HP |
| *pa e₃ ak*; *e₃* | הופיע; יצא / הוציא | 5, 59, 292; passim | HP |
| *a dug₄* | השקה | 110 | FI |
| *kur gal*; *a-a {d}en-lil₂* | ההר הגדול; האב אנליל | 21, 68, 318; 176, 289, 318 | HP |

New terms that a later text of any corpus may need: *nam-ḫe₂* = `שגשוג` (beside *ḫe₂-ĝal₂* = `שפע`); *la-la* = `עתרת`; *a-eštub* = `מי־האשתוב`; *buru₄* = `עורב` [cognate]; *am* = `ראם` [cognate]; *šeg₉-bar* = `יחמור`; *bal* (term of duty) = `תור`; *saĝ-tun₃* = `מזכיר`; *igi-ĝal₂-tuku* = `פיקח`; *baḫar₂* = `קדר`; *muḫaldim* = `טבח`; *uĝ₃-il₂* = `סבל`; *na-kam-tum* = `בית־האוצר`; *ĝa₂-nun* = `בית־הגנזים`; *zag-mu* = `תקופת השנה`.

## Key findings for the commentary
- **Gen 8:22 and Ps 74:16–17.** The seasons as a fixed order decreed by a god (19–25), with sowing and harvest, cold and heat, day and night beside them (5, 21, 24, 35, 241). The divergence: here they are **begotten** (12–16), and their order is a "fate" (*nam tar*) given at birth, not a promise after a flood; Ps 74:17 `יְצַרְתָּם` "you fashioned them" is the closer biblical verb, and the begetting itself is [absent] in the Bible.
- **Gen 1:20–22.** Fish and birds born together "in the sea" from Winter, "by themselves" (31; *ni₂-ba*, ETCSL "together"); the birds of heaven nest in the wide land, the fish lay eggs in the reeds (53–54); the god "fills" the fish-hook (253). *mušen an-na* = `ציפור השמים` ↔ `עוֹף הַשָּׁמַיִם`.
- **Gen 4:2–8.** Two brothers bring gifts to the god's house (69–104); envy "comes near" one of them (112: `קנאה נגשה`, cf. `לַפֶּתַח חַטָּאת רֹבֵץ`); they face each other "like great bulls" (107, 285–287); the father-god answers with a rhetorical question to the losing son, naming "your brother" (307 ↔ 4:6, 4:9). But the verdict **reverses** Gen 4:4–5: the god prefers the farmer (*engar*, 306, 317), and the quarrel ends in a feast, not a murder (301: "brother with brother – quarrel there is, and good there is").
- **Gen 33:3–11, 32:14, 27:29.** The loser bows to his brother and gives him gold, silver and lapis (310, 313) – Jacob's prostration and gifts to Esau, with the roles reversed.
- **Ps 133:1–2.** "Brotherhood and friendship – like fresh oil – they pour" (314) and "together it was good for them" (315: *teš₂-bi … dug₃*, `יחדיו טוב להם` ↔ `מַה טּוֹב … שֶׁבֶת אַחִים גַּם יָחַד`). The text opens with the brothers born "like fine oil" (16) and closes with their brotherhood poured "like fresh oil".
- **Prov 20:4** `מֵחֹרֶף עָצֵל לֹא יַחֲרֹשׁ`: Summer's charge that Winter does not work the field (277–279), and the crows eat the badly sown grain.
- **Num 11:5; 13:23.** Winter's vegetables (cucumbers, leeks, onions: 78, 102–103) are the Egyptian vegetables the Israelites longed for; his pomegranates, great grape-cluster and figs (96, 101) are the spies' fruit.
- **Deut 22:6–7** (75): brooding birds are taken "together with their eggs" as an offering – exactly what the Torah forbids.
- **1 Kgs 4:7; 5:3; 5:29; 1 Sam 8:13.** The Ur III court behind the text: service by monthly rotation (*bal*, 166), deer, roebuck and fattened fowl (72, 99), porters, cooks and bakers.
- **The ancient mind:** the two halves of the Mesopotamian year as two brothers; work (water, ploughing, toil) ranked above display (harvest, building, feasting); the school's own joke (162: "the young scribe is outside" in winter); the cold city (270–275: people shuttling between stove and kiln, teeth chattering, streets empty at noon); a debate that ends not in humiliation but in reconciliation and a shared meal.

### Parallels index (Summer and Winter)

| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *ud dug₃ am₃-mi-e₃* | יום טוב יצא | `וַיַּרְא אֱלֹהִים אֶת הָאוֹר כִּי טוֹב` (בראשית א:ד) | [equivalent] | The order begins with a "good day" (*dug₃* = `טוֹב`) that comes forth when An raises his head; ETCSL's "brought forth" makes it causative, the form is intransitive. |
| 6 | *gu mu₂-mu₂-de₃ še daĝal-e-de₃* | להצמיח פשתה, להרחיב שעורה | `וְהַפִּשְׁתָּה וְהַשְּׂעֹרָה נֻכָּתָה` (שמות ט:לא) | [equivalent] | Flax and barley as the pair of the irrigated field. Our proposal. |
| 9 | *e₂-me-eš an-na niĝ₂-keše₂ ak-de₃* | קיץ – את קשר השמים לעשות | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר` (דברים יא:יז) | [equivalent] | Summer "binds heaven": no rain. In Deuteronomy a punishment, here the season's office. |
| 12 | *ḫur-saĝ … ĝiš₃ bi₂-in-dug₄* | בהרים הגדולים בעל | `קַיִץ וָחֹרֶף אַתָּה יְצַרְתָּם` (תהלים עד:יז) | [absent] | The seasons are begotten by Enlil on the mountain (12–16); the Bible has them fashioned, never born. |
| 15 | *ĝi₆ ḫaš₄ nam-mi-ib-dug₄* | ובלילה – ירך *פתח* | `יֹצְאֵי יְרֵכוֹ` (בראשית מו:כו) | [equivalent] | The thigh as the place of procreation in both languages. |
| 15 | *ḫur-saĝ-e* | ההר | `בְּטֶרֶם הָרִים יֻלָּדוּ` (תהלים צ:ב) | [divergence] | In the psalm the mountains are born; here the mountain gives birth. |
| 16 | *i₃-ḫe-nun-na-gin₇* | כשמן השובע | `כַּשֶּׁמֶן הַטּוֹב עַל הָרֹאשׁ` (תהלים קלג:ב) | [equivalent] | The brothers are born "like fine oil"; their brotherhood is poured "like fresh oil" (314). Our proposal. |
| 18 | *šag₄-tum₂-šag₄-tum₂ … gu₂ … peš-peš* | בכל אחו ואחו … צוואר משמין | `וַתִּרְעֶינָה בָּאָחוּ` (בראשית מא:ב) | [equivalent] | Fattening in the meadow. |
| 19 | *{d}en-lil₂-le e₂-me-eš en-te-en-bi-da nam … tar-re* | אנליל לקיץ ולחורף גורל גוזר | `זֶרַע וְקָצִיר וְקֹר וָחֹם וְקַיִץ וָחֹרֶף וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | [equivalent] | The seasons as a divinely fixed order, with sowing and harvest (21–24). Divergence: a "fate" decreed at birth (*nam tar*, never `בֵּרַךְ`), not a covenant promise after the flood. |
| 19 | *nam … tar* | גורל גוזר | `קַיִץ וָחֹרֶף אַתָּה יְצַרְתָּם` (תהלים עד:יז) | [equivalent] | God as the author of summer and winter; the psalm's verb is "fashion", the Sumerian "decree the fate" of beings he begot. |
| 19 | *nam tar* | גורל גוזר | `וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים וּלְיָמִים וְשָׁנִים` (בראשית א:יד) | [equivalent] | The divisions of the year fixed at creation. |
| 21 | *buru₁₄ ḫe₂-ĝal₂-la* | קציר של שפע | `זֶרַע וְקָצִיר` (בראשית ח:כב) | [equivalent] | *buru₁₄* = `קָצִיר` (§9.2): the harvest is Summer's fate. |
| 31 | *ab-ba ku₆ mušen ni₂-ba mu-un-u₃-tud* | בים – דגים וציפורים – מעצמם? הוליד | `יִשְׁרְצוּ הַמַּיִם שֶׁרֶץ נֶפֶשׁ חַיָּה; וְעוֹף יְעוֹפֵף` (בראשית א:כ) | [equivalent] | Fish and birds come into being together, in the sea; *ni₂-ba* "by themselves" (ETCSL "together"). Divergence: begetting (*tud*) by Winter, not a creating word. ETCSL's "come into existence" hides *tud*. |
| 31 | *ku₆ mušen* | דגים וציפורים | `וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים וְהָעוֹף יִרֶב בָּאָרֶץ` (בראשית א:כב) | [equivalent] | The same pair, born in one act (cf. B&F 14). |
| 50 | *u₈-e sila₄ bi₂-in-tu-ud* | לכבשה טלה הוליד | `וְהֶבֶל הֵבִיא גַם הוּא מִבְּכֹרוֹת צֹאנוֹ` (בראשית ד:ד) | [equivalent] | Lambing is Winter's work: hence Winter claims Summer's animal gifts (121). |
| 51 | *im-da-an-lu-lu* | הרבה והרבה | `פְּרוּ וּרְבוּ` (בראשית א:כב) | [equivalent] | *lu* = `הִרְבָּה` (§6.1), of cows with their calves. |
| 52 | *šeg₉-bar lu-lim* | ליחמור ולאייל | `אַיָּל וּצְבִי וְיַחְמוּר` (דברים יד:ה) | [equivalent] | The game animals of the steppe. |
| 53 | *mušen an-na-ke₄ … gud₃* | ציפור השמים … קן | `וּבְעוֹף הַשָּׁמַיִם` (בראשית א:כו) | [equivalent] | *mušen an-na* "bird of heaven" = the Sumerian of `עוֹף הַשָּׁמַיִם`, with the kind-word, not the motion-word. |
| 53 | *gud₃* | קן | `קַן צִפּוֹר … אֶפְרֹחִים אוֹ בֵיצִים` (דברים כב:ו) | [equivalent] | Nests and eggs (53–54). |
| 54 | *ku₆ … nunuz mu-ni-ib₂-nu₂-nu₂* | דג הבצה … ביצים השכיב | `וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים` (בראשית א:כב) | [equivalent] | The fish spawn in the reeds: the filling of the waters. |
| 55 | *lal₃ ĝeštin* | דבש ויין | `אֶרֶץ זָבַת חָלָב וּדְבָשׁ` (שמות ג:ח) | [equivalent] | Date syrup as "honey". |
| 56 | *ĝiš ki mu₂-a gurun bi₂-in-il₂* | העץ הצומח בארץ – פרי נשא | `עֵץ פְּרִי עֹשֶׂה פְּרִי לְמִינוֹ` (בראשית א:יא) | [equivalent] | ETCSL's "planted" is not in the line (*mu₂* "grow"); `נָטַע` is not used (§9.6). |
| 57 | *nisig* | ירק | `יֶרֶק עֵשֶׂב` (בראשית א:ל) | [equivalent] | *nisig* = Akk. *urqītu*, the cognate of `יֶרֶק`. |
| 58 | *še ab-sin₂-na gu₂ ba-ni-in-peš* | שעורה בתלם – צוואר השמין | `שֶׁבַע שִׁבֳּלִים … בְּרִיאוֹת וְטֹבוֹת` (בראשית מא:ה) | [equivalent] | The "fat" ear of grain; = 291. |
| 60 | *buru₁₄ ezen gal {d}en-lil₂-la₂* | הקציר, החג הגדול של אנליל | `וְחַג הַקָּצִיר בִּכּוּרֵי מַעֲשֶׂיךָ` (שמות כג:טז) | [equivalent] | The harvest as a great festival of the god. |
| 64 | *guru₇ gu₂ bi₂-in-gur-gur* | כרים צבר וצבר | `וַיִּצְבֹּר יוֹסֵף בָּר כְּחוֹל הַיָּם` (בראשית מא:מט) | [equivalent] | Heaping up grain; *guru₇* = `כְּרִי` [cognate via *karû*]. Also 197, 290. |
| 66 | *e₂ diĝir-re-e-ne … bi₂-in-mu₂* | את בתי האלים … הצמיח | `וַיַּצְמַח יְהוָה אֱלֹהִים מִן הָאֲדָמָה כָּל עֵץ` (בראשית ב:ט) | [equivalent] | *mu₂* = `הִצְמִיחַ`: temples "grow" like mountains. |
| 70 | *nidba na-gid₂-i* | קרבנות מושיט | `וַיָּבֵא קַיִן מִפְּרִי הָאֲדָמָה מִנְחָה לַיהוָה` (בראשית ד:ג) | [equivalent] | Two brothers bring gifts to the god's house (69–104). Divergence: no split of flock against soil – Summer brings animals and crops, Winter minerals, wood, fruit, fish and fowl. *nidba* = `קָרְבָּן`, not `מִנְחָה`. |
| 72 | *šeg₉ šeg₉-bar lulim* | איל־בר, יחמור, אייל | `לְבַד מֵאַיָּל וּצְבִי וְיַחְמוּר וּבַרְבֻּרִים אֲבוּסִים` (מלכים א ה:ג) | [equivalent] | The same game and fattened fowl (99) as Solomon's table: court provisions of Ur and Jerusalem. Our proposal. |
| 74 | *šaḫ₂ … ze₂-da uḫ ba-al-gi₄* | חזירים … חזרזירים?, צב, צב־מים | `וְאֶת הַחֲזִיר … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | [divergence] | Pigs and turtles of the marsh as gifts for the god's house. |
| 75 | *mušen gud₃-ba nam-a-a ak nunuz-bi-da dab₅-ba* | ציפורים, העושות אבהות בקינן, הנאחזות עם ביציהן | `לֹא תִקַּח הָאֵם עַל הַבָּנִים` (דברים כב:ו) | [divergence] | The brooding bird is taken with its eggs – what the Torah forbids – as an offering. Our proposal. |
| 78 | *šum₂-sikil* | בצלים | `וְאֶת הַבְּצָלִים וְאֶת הַשּׁוּמִים` (במדבר יא:ה) | [equivalent] | *šum₂* > Akk. *šūmu* ~ `שׁוּם` [cognate]. |
| 93 | *{kuš}lu-ub₂-šir* | צרורות עור | `וְהִנֵּה אִישׁ צְרוֹר כַּסְפּוֹ בְּשַׂקּוֹ` (בראשית מב:לה) | [equivalent] | Silver carried in pouches. |
| 94 | *erin, šu-ur₂-men, taškarin* | ארז, שורבין, תאשור | `אֶרֶז שִׁטָּה … בְּרוֹשׁ תִּדְהָר וּתְאַשּׁוּר יַחְדָּו` (ישעיהו מא:יט) | [equivalent] | Precious mountain timbers. |
| 97 | *a sed₄ gu₂-un ḫur-saĝ* | מים קרים, משא ההר | `מַיִם קָרִים עַל נֶפֶשׁ עֲיֵפָה` (משלי כה:כה) | [equivalent] | Cold mountain water as a precious gift (also 247); *sed₄* = `קַר` ↔ Gen 8:22. Our proposal. |
| 97 | *a sed₄* | מים קרים | `כְּצִנַּת שֶׁלֶג בְּיוֹם קָצִיר` (משלי כה:יג) | [equivalent] | Coolness in the heat of harvest. |
| 99 | *bibad{mušen} niga* | ברווזים מפוטמים | `וּבַרְבֻּרִים אֲבוּסִים` (מלכים א ה:ג) | [equivalent] | Fattened fowl of the royal table. |
| 101 | *nu-ur₂-ma … ĝeštin ga-ra-an gal* | רימונים … אשכול גדול | `וְאֶשְׁכּוֹל עֲנָבִים אֶחָד וַיִּשָּׂאֻהוּ בַמּוֹט בִּשְׁנָיִם; וּמִן הָרִמֹּנִים וּמִן הַתְּאֵנִים` (במדבר יג:כג) | [equivalent] | Pomegranates, a great cluster and figs (96): the spies' fruit are Winter's. Our proposal. |
| 102 | *u₂-kuš₈* | קישואים | `אֵת הַקִּשֻּׁאִים וְאֵת הָאֲבַטִּחִים וְאֶת הֶחָצִיר וְאֶת הַבְּצָלִים וְאֶת הַשּׁוּמִים` (במדבר יא:ה) | [equivalent] | Cucumbers, leeks (103) and onions (78): the Egyptian vegetables of Num 11:5 are Winter's. Our proposal. |
| 102 | *im saĝ* | הגשם הראשון | `יוֹרֶה וּמַלְקוֹשׁ` (דברים יא:יד) | [equivalent] | The first (autumn) rain opens Winter's season. |
| 103 | *ga-raš* | כרישות | `וְאֶת הֶחָצִיר` (במדבר יא:ה) | [equivalent] | *ga-raš* = Akk. *karašu* ~ Mishnaic `כְּרֵשָׁה` [cognate]. |
| 106 | *maš₂ kadra* | גדיים ותשורות | `מִנְחָה לְעֵשָׂו אָחִיו` (בראשית לב:יד) | [equivalent] | *kadra* = `תְּשׁוּרָה`: the gift to a lord, not `מִנְחָה`. |
| 108 | *a₂ kuš₂-a* | יגיע זרוע | `וְאֶת יְגִיעַ כַּפַּי רָאָה אֱלֹהִים` (בראשית לא:מב) | [equivalent] | Winter's central claim: his toil. Divergence from `בְּעִצָּבוֹן תֹּאכְלֶנָּה` (3:17): toil is pride, not curse. |
| 110 | *a šu-ta im-mi-in-dug₄* | שמים מן היד השקה | `וְהִשְׁקָה אֶת כָּל פְּנֵי הָאֲדָמָה` (בראשית ב:ו) | [equivalent] | *a dug₄* = `הִשְׁקָה`. |
| 111 | *nu-erim₂-gin₇ bar-ta im-ta-gub* | כאויב – מבחוץ עמד | `וַיִּחַר לְקַיִן מְאֹד וַיִּפְּלוּ פָּנָיו` (בראשית ד:ה) | [equivalent] | The tired brother stands aside, resentful. |
| 112 | *ninim mu-na-te … du₁₄ bi₂-in-ĝar* | אל חורף קנאה נגשה, ועם קיץ ריב שָׂם | `וַיְקַנְאוּ בוֹ אֶחָיו` (בראשית לז:יא) | [equivalent] | Envy "comes near" the brother (ORACC "envy"; ETCSL "anger" ↔ 4:5 `וַיִּחַר`); cf. `לַפֶּתַח חַטָּאת רֹבֵץ` (4:7). Divergence: no divine preference has yet been shown. |
| 112 | *du₁₄ ĝar* | ריב שָׂם | `וַיְהִי רִיב` (בראשית יג:ז) | [equivalent] | *du₁₄* = `רִיב`. |
| 113 | *e₂-me-eš šeš-ĝu₁₀* | קיץ, אחי | `כִּי אֲנָשִׁים אַחִים אֲנָחְנוּ` (בראשית יג:ח) | [divergence] | "My brother" opens the quarrel here; Abram says it to prevent one. |
| 117 | *nam-engar* | איכרות | `וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | [equivalent] | Farming claimed by Winter; *engar* = `אִכָּר` [cognate loan]. |
| 119 | *im-du₈ an-na* | טל השמים | `וְיִתֶּן לְךָ הָאֱלֹהִים מִטַּל הַשָּׁמַיִם וּמִשְׁמַנֵּי הָאָרֶץ וְרֹב דָּגָן וְתִירֹשׁ` (בראשית כז:כח) | [equivalent] | "Dew of heaven" that brings forth grain, in a quarrel of two brothers. Our proposal. |
| 137 | *nu-{ĝiš}kiri₆-zu sa₂-dug₄* | הגנן שלך – מנחה קבועה | `וַיָּבֵא קַיִן מִפְּרִי הָאֲדָמָה מִנְחָה לַיהוָה` (בראשית ד:ג) | [equivalent] | The only *sa₂-dug₄* (`מִנְחָה`) of the text: the gardener's regular offering; the verb is lost (negated *ba-ra-*). |
| 144 | *ĝiš u₃-um-me-ra-aḫ* | בעץ חבטת | `כִּי בַמַּטֶּה יֵחָבֶט קֶצַח` (ישעיהו כח:כז) | [equivalent] | Threshing with a stick. |
| 146 | *na-kam-tum* | בית־האוצר | `וּמִסְכְּנוֹת לִתְבוּאַת דָּגָן וְתִירוֹשׁ וְיִצְהָר; וְאֻרָוֹת לְכָל בְּהֵמָה וּבְהֵמָה` (דברי הימים ב לב:כח) | [equivalent] | Storehouses and animals together. |
| 149 | *{ĝiš}deḫi₃ … {ĝiš}ad₅* | השמיר … השית | `וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ` (בראשית ג:יח) | [divergence] | Clearing thorny weeds is ordinary seasonal work (Summer's), not a curse; `קוֹץ` / `דַּרְדַּר` are not used (§9.3). |
| 151 | *e₂-me-eš arad₂ lu₂ kiĝ₂-ĝa₂ gub-ba* | קיץ – עבד, איש העומד בעבודה | `וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | [equivalent] | The two Sumerian words licensed for עבד (*arad*, *kiĝ₂*) in one line: the brother as "slave" and "worker". |
| 151 | *arad₂ … lu₂ ḫuĝ-ĝa₂* | עבד … שכיר | `כְּעֶבֶד יִשְׁאַף צֵל וּכְשָׂכִיר יְקַוֶּה פָעֳלוֹ` (איוב ז:ב) | [equivalent] | Slave and hired man as a pair (151–152), the worker who seeks shade (258). Our proposal. |
| 152 | *lu₂ ḫuĝ-ĝa₂* | שכיר | `לֹא תָלִין פְּעֻלַּת שָׂכִיר אִתְּךָ עַד בֹּקֶר` (ויקרא יט:יג) | [equivalent] | The hired harvest worker. |
| 158 | *da gir₄-da ḫu-mu-tuš-en* | לצד הכּוּר שֵׁב לְךָ | `וְהַמֶּלֶךְ יוֹשֵׁב בֵּית הַחֹרֶף בַּחֹדֶשׁ הַתְּשִׁיעִי; וְאֶת הָאָח לְפָנָיו מְבֹעָרֶת` (ירמיהו לו:כב) | [equivalent] | Winter is the season of sitting by the fire (also 268–275). Our proposal. |
| 158 | *en-te-en* | חורף | `וְהִכֵּיתִי בֵית הַחֹרֶף עַל בֵּית הַקָּיִץ` (עמוס ג:טו) | [equivalent] | The two seasons as two ways of living. |
| 166 | *bal gub-ba-ĝu₁₀ mu-a itid 7-am₃* | תורי העומד – בשנה שבעה ירחים | `וְלִשְׁלֹמֹה שְׁנֵים עָשָׂר נִצָּבִים עַל כָּל יִשְׂרָאֵל וְכִלְכְּלוּ אֶת הַמֶּלֶךְ וְאֶת בֵּיתוֹ` (מלכים א ד:ז) | [equivalent] | Service to the king by monthly turns (the Ur III *bala*). Our proposal. |
| 176 | *saĝ-tun₃ maḫ* | המזכיר הנשגב | `וִיהוֹשָׁפָט בֶּן אֲחִילוּד מַזְכִּיר` (שמואל ב ח:טז) | [equivalent] | The court recorder (our rendering). |
| 177 | *eš₂ … ur₃-ur₃* | חבל … גורר | `יְפַתַּח וִישַׂדֵּד אַדְמָתוֹ` (ישעיהו כח:כד) | [equivalent] | Harrowing (ETCSL). |
| 186 | *igi-ĝal₂-tuku* | הפיקח | `אוֹ פִקֵּחַ אוֹ עִוֵּר` (שמות ד:יא) | [equivalent] | "Having an (open) eye" = wise. |
| 190 | *dusu₂* | עַיִר | `אֹסְרִי לַגֶּפֶן עִירֹה` (בראשית מט:יא) | [equivalent] | The braying donkey of the harvest field. |
| 194 | *zid₂ še sa-a* | קמח השעורה הקלויה | `וְלֶחֶם וְקָלִי וְכַרְמֶל לֹא תֹאכְלוּ` (ויקרא כג:יד) | [equivalent] | Roasted barley, food of the harvest. |
| 197 | *zag-mu-ka* | בתקופת השנה | `וְחַג הָאָסִיף תְּקוּפַת הַשָּׁנָה` (שמות לד:כב) | [equivalent] | The ingathering at the turn of the year. |
| 209 | *uĝ₃-il₂* | הסבל | `וַיְהִי לִשְׁלֹמֹה שִׁבְעִים אֶלֶף נֹשֵׂא סַבָּל` (מלכים א ה:כט) | [equivalent] | Porters of royal building. |
| 210 | *baḫar₂ im ba-al* | הקדר – טיט חופר | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | [divergence] | The potter and his clay are only a craftsman here; `יוֹצֵר` is not used (reserved). |
| 213 | *muḫaldim* | טבח | `לְרַקָּחוֹת וּלְטַבָּחוֹת וּלְאֹפוֹת` (שמואל א ח:יג) | [equivalent] | The royal kitchen. |
| 215 | *sed₄* | בקור | `וְקֹר וָחֹם` (בראשית ח:כב) | [equivalent] | Cold = Winter's season. |
| 220 | *muru₉ … ḫe₂-ĝal₂ an-na* | העב … שפע השמים | `הִנֵּה עָב קְטַנָּה כְּכַף אִישׁ עֹלָה מִיָּם` (מלכים א יח:מד) | [equivalent] | The rain-cloud. |
| 227 | *gu₇ naĝ gal-gal-e ba-tuš-en* | לאכילה ולשתייה גדולות ישבת | `וַיֵּשֶׁב הָעָם לֶאֱכֹל וְשָׁתוֹ` (שמות לב:ו) | [equivalent] | Sitting down to the feast (Summer's season). |
| 230 | *{d}i-bi₂-{d}suen {tug₂}šutur … mur₁₀* | אבי־סואן … לבש | `וַיַּלְבֵּשׁ אֹתוֹ בִּגְדֵי שֵׁשׁ` (בראשית מא:מב) | [equivalent] | Festive court garments. |
| 238 | *ĝeštin lu-lu-me-en gu₇ naĝ gal-gal-me-en* | את היין הרביתי, את האכילה והשתייה הגדלתי | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ וּשְׁתֵה בְלֶב טוֹב יֵינֶךָ` (קהלת ט:ז) | [equivalent] | Wine, food and drink, then garments and oil (239) – the same sequence as Eccl 9:7–8. Our proposal. |
| 239 | *tug₂ i₃ dug₃-ge* | בשמן הטוב את הבגד | `בְּכָל עֵת יִהְיוּ בְגָדֶיךָ לְבָנִים; וְשֶׁמֶן עַל רֹאשְׁךָ אַל יֶחְסָר` (קהלת ט:ח) | [equivalent] | Garments and oil. *i₃ dug₃* = `שֶׁמֶן טוֹב` ↔ `כַּשֶּׁמֶן הַטּוֹב` (תהלים קלג:ב). |
| 241 | *kum₂-ma dugud e₂-me-eš* | בחום הכבד של קיץ | `הָיִיתִי בַיּוֹם אֲכָלַנִי חֹרֶב וְקֶרַח בַּלָּיְלָה` (בראשית לא:מ) | [equivalent] | Heavy heat; *kum₂* = `חֹם` ↔ Gen 8:22. |
| 243 | *nim mu-ra-be₄-be₄* | עש בגללך מכלה | `כְּבֶגֶד אֲכָלוֹ עָשׁ` (איוב יג:כח) | [equivalent] | Moths eat the garments in the heat. |
| 252 | *lu₂ ni₂ sed₄-da lugal-ĝa₂-me-en* | המצנן של מלכי – אני | `וְקֹר וָחֹם` (בראשית ח:כב) | [equivalent] | Cold as Winter's service to the king. |
| 253 | *niĝ₂ ma-ab-si-si* | דבר לי ממלא וממלא | `וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים` (בראשית א:כב) | [equivalent] | *si* = `מִלֵּא` (tagged): Winter fills the fish-hook. |
| 256 | *im 2 šeĝ₃* | גשם – פעמיים? המטיר | `כִּי לֹא הִמְטִיר יְהוָה אֱלֹהִים עַל הָאָרֶץ` (בראשית ב:ה) | [equivalent] | *šeĝ₃* = `הִמְטִיר`. |
| 258 | *ur₃ ki-nu₂-zu kiĝ₂-ĝa₂* | המבקש גג למשכבך | `כְּעֶבֶד יִשְׁאַף צֵל וּכְשָׂכִיר יְקַוֶּה פָעֳלוֹ` (איוב ז:ב) | [equivalent] | The summer worker looking for shade and shelter. |
| 263 | *i-gi₄-in-zu mi₂-am₃* | כמו טיפוח הן | `וְאַתָּה תִּמְשָׁל בּוֹ` (בראשית ד:ז) | [divergence] | The insulted brother masters himself and takes the insults as kindness. |
| 269 | *na-gada sipad* | נוקד, רועה | `וַיְהִי הֶבֶל רֹעֵה צֹאן` (בראשית ד:ב) | [equivalent] | *na-gada* = Akk. *nāqidu* = `נוֹקֵד` [cognate]. |
| 277 | *a-šag₄ en-te-en-e kiĝ₂ nu-ak-e* | השדה – שחורף עבודה בו אינו עושה | `מֵחֹרֶף עָצֵל לֹא יַחֲרֹשׁ` (משלי כ:ד) | [equivalent] | Summer charges Winter with the sluggard's sin: not working the field in winter. ETCSL makes Winter a time ("in winter"); in Sumerian he is the agent. Our proposal. |
| 279 | *buru₄{mušen}-dugud* | להקת עורבים כבדה | `וַיְשַׁלַּח אֶת הָעֹרֵב` (בראשית ח:ז) | [cognate] | *buru₄* = Akk. *āribu* ~ `עֹרֵב`; the crows carry off the badly sown grain. |
| 286 | *gud maḫ-gin₇ teš₂-bi a₂ si-il-le-de₃* | כשוורים נשגבים – יחדיו זרוע לפלח | `וַיָּקָם קַיִן אֶל הֶבֶל אָחִיו וַיַּהַרְגֵהוּ` (בראשית ד:ח) | [divergence] | The brothers about to gore each other; the god intervenes before violence. |
| 289 | *nam-ku₅-ĝal₂ mu-e-šum₂* | פיקוח התעלות נתת לי | `וַיַּנִּחֵהוּ בְגַן עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ` (בראשית ב:טו) | [divergence] | The god appoints the worker over water and field – here as an honour. |
| 297 | *zi im-ma-da-ab-gi₄* | ונשימתו שבה אליו | `וַתָּשָׁב רוּחוֹ וַיֶּחִי` (שופטים טו:יט) | [equivalent] | The return of breath = calming. |
| 299 | *di-zu niĝ₂ kal-kal-la-am₃* | דינך דבר יקר הוא | `הַצּוּר תָּמִים פָּעֳלוֹ כִּי כָל דְּרָכָיו מִשְׁפָּט` (דברים לב:ד) | [equivalent] | Praise of the god's justice. |
| 300 | *di dab₅-ba-zu niĝ₂ nu-kur₂-ru-dam* | הדין שאחזת – דבר אשר לא ישונה הוא | `דִּי לָא לְהַשְׁנָיָה כְּדָת מָדַי וּפָרַס דִּי לָא תֶעְדֵּא` (דניאל ו:ט) | [equivalent] | The unalterable verdict (= 309). Also Esth 8:8. |
| 300 | *a-ba šu mi-ni-ib₂-bal-e* | מי ביד יהפכנו | `כִּי כְתָב אֲשֶׁר נִכְתָּב בְּשֵׁם הַמֶּלֶךְ … אֵין לְהָשִׁיב` (אסתר ח:ח) | [equivalent] | "Who can turn it back?" |
| 301 | *šeš šeš-da du₁₄ mu₂-mu₂ i₃-ĝal₂ u₃ dug₃-ge i₃-ĝal₂* | אח עם אח – ריב מצמיח ומצמיח יש, וגם טוב יש | `הִנֵּה מַה טּוֹב וּמַה נָּעִים שֶׁבֶת אַחִים גַּם יָחַד` (תהלים קלג:א) | [equivalent] | Brothers and "good" (*dug₃* = `טוֹב`) in one line. ETCSL's "harmony" hides *dug₃*, and its tenses (was / now is) are not in the two parallel "there is" clauses. |
| 301 | *šeš šeš-da du₁₄* | אח עם אח – ריב | `אַל נָא תְהִי מְרִיבָה בֵּינִי וּבֵינֶךָ … כִּי אֲנָשִׁים אַחִים אֲנָחְנוּ` (בראשית יג:ח) | [equivalent] | Quarrel between brothers set against brotherhood. |
| 301 | *du₁₄ … dug₃* | ריב … טוב | `וַיָּקָם קַיִן אֶל הֶבֶל אָחִיו וַיַּהַרְגֵהוּ` (בראשית ד:ח) | [divergence] | The brothers' quarrel ends in "good", not in murder. |
| 305 | *a zi-šag₄-ĝal₂ kur-kur-ra-ka en-te-en ku₃-ĝal₂-bi-im* | מי המחיה של כל הארצות – חורף הוא המפקח עליהם | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן` (בראשית ב:י) | [equivalent] | The ground of the verdict: life-giving water comes first. |
| 305 | *a zi-šag₄-ĝal₂* | מי המחיה | `יֵצְאוּ מַיִם חַיִּים מִירוּשָׁלִַם … בַּקַּיִץ וּבָחֹרֶף יִהְיֶה` (זכריה יד:ח) | [equivalent] | Life-giving water, "in summer and in winter". |
| 306 | *engar diĝir-re-e-ne-ke₄* | איכר האלים | `וַיִּשַׁע יְהוָה אֶל הֶבֶל וְאֶל מִנְחָתוֹ; וְאֶל קַיִן וְאֶל מִנְחָתוֹ לֹא שָׁעָה` (בראשית ד:ד) | [divergence] | The god prefers the farmer – the reverse of Gen 4:4–5. |
| 307 | *e₂-me-eš dumu-ĝu₁₀ en-te-en šeš-zu-da a-na mu-e-da-ab-sa₂-e-en* | קיץ, בני – עם חורף אחיך במה תשתווה? | `לָמָּה חָרָה לָךְ וְלָמָּה נָפְלוּ פָנֶיךָ` (בראשית ד:ו) | [equivalent] | The father-god's rhetorical question to the losing son, naming "your brother" (cf. `אֵי הֶבֶל אָחִיךָ`, ד:ט). Divergence: here it closes the dispute and the loser accepts it. |
| 310 | *e₂-me-eš en-te-en-ra im-ma-an-ši-in-gam* | קיץ לפני חורף כרע | `וַיִּשְׁתַּחוּ אַרְצָה שֶׁבַע פְּעָמִים עַד גִּשְׁתּוֹ עַד אָחִיו` (בראשית לג:ג) | [equivalent] | One brother bows to the other before the reconciliation. Divergence: in Gen 33 the bower is the one who won the blessing; here the loser. |
| 310 | *gam* | כרע | `וְיִשְׁתַּחֲווּ לְךָ בְּנֵי אִמֶּךָ` (בראשית כז:כט) | [equivalent] | Also `וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג). |
| 311 | *{kaš}ulušin kurun* | שכר־אולושין וכורון | `בַּקֹּדֶשׁ הַסֵּךְ נֶסֶךְ שֵׁכָר לַיהוָה` (במדבר כח:ז) | [equivalent] | Beer as the drink of feast and cult (ETCSL's "wine" is not in the line). |
| 312 | *ĝišbun niĝ₂ dug₃-ge* | במשתה, בדבר טוב | `וַיֹּאכְלוּ לֶחֶם וַיָּלִינוּ בָּהָר` (בראשית לא:נד) | [equivalent] | A shared meal seals the end of a quarrel. |
| 313 | *kug-sig₁₇ kug-babbar za-gin₃ mu-un-na-ba-ba-e* | זהב, כסף וספיר מחלק ומחלק | `קַח נָא אֶת בִּרְכָתִי אֲשֶׁר הֻבָאת לָךְ` (בראשית לג:יא) | [equivalent] | Reconciliation gifts to the brother (also 32:14). |
| 313 | *za-gin₃* | סַפִּיר | `כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) | [equivalent] | The biblical sapphire is lapis lazuli (harmonization 2026-10-21). |
| 314 | *nam-šeš nam-dub₃-sa i₃ li-gin₇ i-im-bal-bal-e-ne* | אחוה וידידות – כשמן רענן – נוסכים ונוסכים | `כַּשֶּׁמֶן הַטּוֹב עַל הָרֹאשׁ` (תהלים קלג:ב) | [equivalent] | Brotherhood likened to poured oil – the image of Ps 133:1–2, almost word for word. |
| 314 | *nam-šeš* | אחוה | `לְהָפֵר אֶת הָאַחֲוָה בֵּין יְהוּדָה וּבֵין יִשְׂרָאֵל` (זכריה יא:יד) | [equivalent] | *nam-šeš* = `אַחֲוָה` (§9.4). |
| 315 | *teš₂-bi ba-dug₃-ge-eš* | יחדיו טוב להם | `הִנֵּה מַה טּוֹב וּמַה נָּעִים שֶׁבֶת אַחִים גַּם יָחַד` (תהלים קלג:א) | [equivalent] | "Together … good" = `מַה טּוֹב … גַּם יָחַד`. ETCSL "achieved harmony" hides *dug₃*. Our proposal. |
| 317 | *en-te-en engar zid {d}en-lil₂-la₂ e₂-me-eš-ra dirig-ga-ba* | באשר חורף, אכרו הנאמן של אנליל, עלה על קיץ | `וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | [divergence] | The farmer wins; *engar* = `אִכָּר` [cognate loan]. The formula is shared with FI 111. |

## Progress
(drafting; review passes (a) fidelity, (b) consistency, (c) Hebrew; verify and check_bible_quotes results)
- 2026-10-22: drafting restarted after the session stop (nothing had been saved). Section 1–68 (prologue: birth, fates, execution; 67 entries) drafted and saved; verify 7 OK for these lines; check_bible_quotes clean.
- 2026-10-22: section 69–111 (the offerings; 35 entries) drafted and saved; verify OK, check_bible_quotes clean.
- 2026-10-22: section 112–156 (Winter's first speech; 34 entries) drafted and saved; verify OK, check_bible_quotes clean.
- 2026-10-22: section 157–188 (Summer's reply; 30 entries) drafted and saved; verify OK, check_bible_quotes clean.
- 2026-10-22: section 189–263, first part 189–223 (34 entries) drafted and saved; verify OK, check_bible_quotes clean.
- 2026-10-22: 224–263 (40 entries) drafted and saved: section 189–263 complete; verify OK, check_bible_quotes clean.
- 2026-10-22: section 264–287 (Summer's second reply, the brothers face off; 24 entries) drafted and saved; verify OK, check_bible_quotes clean.
- 2026-10-22: section 288–318 (the appeal, the verdict, the reconciliation; 31 entries) drafted and saved. **All 295 entries drafted.**
- 2026-10-22: review pass (c) Hebrew (a full read-aloud of the 295 `>` lines): punctuation (49, 158, 172), names vocalized consistently (234), `רֵעִי` (254), `בֶּרֶךְ` vocalized (281, 285), `שֵׁב לְךָ` / `יָשַׁבְתָּ` / `שֶׁיָּשַׁבְתָּ` vocalized against `שוב` / `שבת` (158, 227, 303), `הדבר הטהור שלך` for `דברך` (299: the string `ברך`), `יערות` for `חורשות` (203: the plough gate).
- 2026-10-22: review pass (b) consistency: every formula and repeated line compared by string (decision 3–4: 19/25, 20/65, 24/29/35/49/177, 33/69/88/260, 58=291, 59/292, 64/197/290, 107/285, 108/294, 151/209, 153/185, 156/288, 157/189/264, 159/164, 195/293, 258/307, 259/283, 300/309, 304, 316–318); the project `renderings.md` rewritten from the drafted lines and re-checked against them by grep; `gur` changed to `הקיף` (32, 91) so that `סובב` stays for *niĝin* (152, 163).
- 2026-10-22: review pass (a) fidelity (Hebrew read against the transliteration line by line): 88 `[והקריב]` (the reduplication is restored), 111 `בצדו לא נגע`, 147 `משורך?`, 230 `אבי־סואן … לבש` (the `-n-` is a third-person agent; ETCSL agrees), 41 note.
- 2026-10-22: `translation--intro.rtl.md` written; `python3 -I sumerian_tools.py build 7` → 295 lines, 13 footnotes; **`verify 7 --strict`: OK** (no "same transliteration, different Hebrew" notes); **`check_bible_quotes.py` on `annotated.rtl.md` and `translation--intro.rtl.md`: 0 problems** (the parallels table of this file also checked: 0 problems). Seven quotations written from memory during drafting were caught by the checker and corrected (Gen 42:26, Exod 29:22, 31:2, 1 Sam 18:6, 1 Kgs 4:7, Prov 20:4, Gen 31:54).
- Not done here (outside this folder): the print stub `../../הדפסה/סיפורי-הבריאה-המסופוטמיים/7-הקיץ-והחורף.rtl.md`, the merge into `../parallels-index.md` and `../renderings.md` (coordinator).

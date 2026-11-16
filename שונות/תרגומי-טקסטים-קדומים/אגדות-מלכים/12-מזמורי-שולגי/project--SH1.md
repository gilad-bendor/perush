# Part SH1: Šulgi B (translator B; Round 9 run 2, 2026-11-15)

## Progress
- **Drafted:** all 385 entries of `annotated-SHB.rtl.md` (1–385 with 341A; ETCSL has no 342); the Hebrew file header
  (base, parsing, numbering, signs, comparisons, tags, two paragraphs on the text, reserved words, names);
  20 `## ` section headings; `translation--intro-SHB.rtl.md`.
- **Readings fixed before drafting:** the whole base (`ur3_tools.py lines SHB 1 385`, ORACC morph), `rel SHB 1 385`
  (one exact copy: 40 = SA 79), the precedents of every new word in the `>` lines of all corpora (a Sumerian-keyed
  search over `netherworld_tools.py grep all` + `canon_tools.py grep all`); ETCSL's English only after the reading.
- **Review passes:** (a) fidelity – every line against the transliteration: 11 (*lugal* had no copula; the line's one
  *-me-en* = one `אני`), 97 (*ki* `קרקע` as 90), 124 (order of images), 259 (`(בין)` added), 306 (order); and the
  *-me-en* / `אני` count checked by script over all lines (every difference is a present-tense pronoun or *nu-me-en*
  `אינני`); (b) consistency – `lexmap SHB` and the formulas: 74 *sig₁₀* `השית` (was `הכניע`), 92 / 171 *gid₂* `האריך`
  (were `משכתי` / `המתיחה`), 145 *dab* `האחיז` (was `נתן`), 289 kept `ימשוך` (split by sense, noted); the refrain,
  73 = 283, 40 = SA 79, 384 = LA 108, 385 = SA 102 letter for letter; (c) Hebrew aloud – 45 punctuation, 202 the
  italics around a whole word, 302 a redundant `(אותם)`, 343–344 `הרם` (reads "the lofty") → `ההר שלהם`.
- **Checks:** `ur3_tools.py verify SHB` – 385 entries, OK (0 problems). `check_bible_quotes.py` on the annotated file,
  the intro and this file – 0 problems (37 references, every verse printed first).

### Parallels index (SH1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| SHB 6 | šag₄-bal-bal-a eĝer ud-da-ka šu-a bal-e-de₃ | לצאצאים, לסוף הימים – להעביר ביד | בראשית מט:א | [equivalent] | *eĝer ud-da* "the back of the days" – the readers' future, without eschatology; `אחרית` avoided (*eĝer* = `סוף`, canon). |
| SHB 12 | šag₄ zid-ta nam dug₃ tar-ra-me-en | אשר מבטן נאמנה גורל טוב נגזר לו – אני | ישעיהו מט:א | [equivalent] | Destiny from the womb; ETCSL's "blessed" is *nam tar* "decree a fate" (a corrected false echo). |
| SHB 13–17 | tur-ra-ĝu₁₀-ne e₂-dub-ba-a-a-am₃ … nam-dub-sar-ra mi-ni-zu | בקטנותי – בבית הטבלה הייתי … את הסופרוּת ידעתי | דניאל א:ד | [equivalent] | A royal youth taught the script and tongue of Babylonia; the earliest account of a king at school. |
| SHB 25 | nam-si-sa₂-ĝu₁₀-uš ĝidru ma-an-šum₂-mu-uš | בשל יושרי – שרביט לי נתנו | — | [absent] | ETCSL "righteousness" = *nam-si-sa₂* "straightness": `יושר`, not `צדק` (a corrected false echo). |
| SHB 26 | gu₂ kur-kur-ra-ka ĝiri₃ ba-da-gub | על צוואר הארצות – רגל הצבתי | יהושע י:כד; תהלים קי:א | [equivalent] | The foot on the neck of the defeated – the same gesture in the same nouns. |
| SHB 35, 107 | {kuš}da-lu-uš₂ … a₂-sag₃ | בקלע – את אבן־הקלע … | דברי הימים א יב:ב | [equivalent] | The warrior skilled with sling and bow. |
| SHB 38 | šag₄ dab-ba-ĝu₁₀-u₈ la-ba-ab-dib-be₂-en | בלבי האחוז – אינני מניחם לעבור | שופטים כ:טז | [equivalent] | The slinger who does not miss. |
| SHB 48 | sig-še₃ elam{ki}-ma gu₃-ba ĝiš ma-ab-us₂ | במטה – על צוואר עֵילָם – עץ הצמדתי | בראשית י:כב; דברים כח:מח | [cognate] / [equivalent] | Elam the biblical name; the yoke (wood) on the neck. |
| SHB 52 (= 77, 114, 150) | niĝ₂ ak-a-ĝa₂ ni₂-bi ga-buluĝ₅ | את אשר עשיתי – מעצמו אגדלה! | קהלת ב:ד | [equivalent] | The king "magnifying his works" in the first person, the same verb (*buluĝ₅* "make grow"), followed in both by building, planting and water-works (SHB 252–254 ~ Eccl 2:4–6); the direction reversed: Qohelet magnifies to say all is vanity. |
| SHB 56–76 | ur-maḫ ug ušumgal edin-na-ke₄ … su-bi ḫu-mu-dug₃ | אריה, לַיִשׁ, דרקון־הענק … את בשרם אכן הֵיטַבְתִּי | שמואל א יז:לד | [equivalent] | The lion hunt of the shepherd-king for the flock (72); face to face, no net (62–64). |
| SHB 82 | tir-ra sa i-ni-sa₂ ti galam-ma i-ni-gid₂ | בקשת – גיד השוויתי; את החץ המחוכם – הארכתי | תהלים יח:לה | [equivalent] | The king boasting that he can draw the bow. |
| SHB 91 | anše edin-na-še₃ {ĝiš}es₂-ad la-ba-nu₂-en | לחמור הערבה – במלכודת לא שכבתי | איוב לט:ה | [equivalent] | The wild ass, the free animal of the steppe – caught here by running. |
| SHB 108 | dub₃ šu bar-ra-gin₇ maš am₃-mi-ib₂-dab₅-be₂-en | כברך משולחת – גדי אני אוחז | שמואל ב ב:יח | [equivalent] | The runner swift as a beast of the field. |
| SHB 127 | kaš₄-ta e₃-a-me-en dub₃ nu-kuš₂-u₃-me-en | היוצא מן הריצה – אני; אשר ברכיו אינן יגעות – אני | מלכים א יח:מו | [equivalent] | The tireless runner (Šulgi A's run Nibru–Urim). |
| SHB 130 | mi₂-ĝu₁₀ di niĝ₂-gen₆-na-ka ka-ga₁₄ mu-ši-ĝal₂ | החיבה אליי – בשל דין הנכונה – בפה מונחת | מלכים א ג:כח | [equivalent] | The people praise the king's judgment; *niĝ₂-gen₆-na* `נכונה`, not `משפט` / `צדק`. |
| SHB 131–149 | maš₂-šu-gid₂-gid₂ dadag-ga-me-en … lugal-me-en šag₄ udu 1-a-kam | בוחן צח אני … מלך אני – בקרבי כבש אחד | יחזקאל כא:כו | [equivalent] | Extispicy before war: the very practice Ezekiel ascribes to the king of Babylon, `רָאָה בַּכָּבֵד` (יחזקאל כא:כו) – a real line of transmission, not only a motif. |
| SHB 155–174 | u₃ nam-nar-ra gu₂-ĝu₁₀ ḫa-na-šum₂ … | ואל הזמרוּת – את צווארי אכן נתתי … | מלכים א ה:יב; שמואל א טז:יח | [equivalent] | The wise king who is a poet; the warrior who plays. |
| SHB 180 | ze₂ kur nam-gu₂-ka₃-ka lu₂ la-ba-an-da₁₃-da₁₃-e | מָרַת ארץ הכְּנִיעָה – איש אינה זונחת | תהלים פט:מט | [equivalent] | No man escapes death – inside a royal song in both; *kur* `הארץ`, never `שְׁאוֹל`. |
| SHB 186 | a-sila₃-ĝar-ra-ĝu₁₀ mi₂-eš₂ ma-ni-in-dug₄ | את שִׁלְיָתִי – בחיבה חיבבה | דברים כח:נז | [equivalent] | The same word for the afterbirth; ETCSL's "unborn fruit". |
| SHB 195 | mu-ĝu₁₀ ud ul-le₂-a-aš šir₃-re ḫe₂-em-dug₃-ge | את שמי – לימים רחוקים – השיר ייטיב! | תהלים עב:יז | [equivalent] | The wish that the king's name live on; ETCSL "bless" is *dug₃* "make sweet/good" (not *šudu₃*). |
| SHB 201 | kur-kur {ĝiš}kab-gin₇ a-ba-da-ab-ĝal₂-en-na | מאחר שאת הארצות – כחבל־האף – אני מחזיק | מלכים ב יט:כח | [equivalent] | The conquered led like a beast by a nose-rope – a Mesopotamian image Isaiah turns against Assyria. |
| SHB 214 | eme bal-e mu-un-da-an-gub-be₂ | מחליף־לשון – עמו אני עומד | בראשית מב:כג | [equivalent] | The interpreter at court; here the king himself (five languages, 206–220). *eme* `לָשׁוֹן`, never `שָׂפָה`. |
| SHB 235 | šag₄ izi-gin₇ bar₇-a sed₄-bi mu-zu | לב הבוער כאש – את קירורו ידעתי | משלי טו:א | [equivalent] | The word that cools anger – the king as a sage. |
| SHB 252–254 | a-gar₃ gal-gal-e gu₂ mu-[un-šum₂] … pa₅-re a₂ šum₂-mu-[me-en] | לשדמות הגדולות – צוואר [נתתי] … לתעלות – הנותן זרוע | קהלת ב:ה; קהלת ב:ו | [equivalent] | The king's fields, trees and water-works in the first person (with SHB 52). |
| SHB 269 | šag₄-ĝu₁₀ niĝ₂-a₂-zig₃ ba-ra-mu-un-na-ta-ab-de₆ | לבי – אלימות בל הביא אליו | בראשית ו:יא | [absent] | *niĝ₂-a₂-zig₃* "raising of the arm" = `אלימות`; `חָמָס` would build a flood echo the text lacks. |
| SHB 274 | lul-še₃ ba-ra-bi₂-pad₃ ka-ge ba-ra-bi₂-gi₄ | לשקר בל מצאתים, אל הפה בל השבתים | דברים ד:ב | [equivalent] | Keeping a received text whole – here the old songs, there the commandments. |
| SHB 275 | niĝ₂ libir-ra-bi en ḫe₂-bi-tar-tar | את הישן שבהם – אכן דרשתי ודרשתי | משלי כה:א | [equivalent] | The king who has old wisdom copied – the earliest royal "archive" policy in literature. |
| SHB 282 | a-ba nam-til₃ an-na ba-e-e₃ | מי – אל חיי השמים – יצא? | משלי ל:ד | [equivalent] | The rhetorical "who has gone up to heaven?" – no one; wisdom's shared topos (also Bilgameš and Ḫuwawa). |
| SHB 312–315 | dub-sar ḫe₂-gub … e₂-dub-ba-a da-ri₂ ḫur nu-kur₂-ru-dam | הסופר יעמוד! … בית הטבלה – לנצח, לעד – לא ישתנה! | תהלים מה:ב; איוב יט:כד | [equivalent] | The royal song born in writing; writing as permanence. |
| SHB 319 | an {d}en-lil₂ {d}utu {d}inana lul ba-ra-na ḫe₂-ge-en | אַן, אֶנְלִיל, אוּתוּ ואִינַנָּה – שקר בל הוא | תהלים פט:לו | [equivalent] | An oath that there is no lie; there sworn by God to David, here by the king about himself. |
| SHB 321 | ud ne-e mu-sar-ra-ĝu₁₀-a | "היום הזה – בכתובותיי – | איוב יט:כג | [equivalent] | The inscription as lasting testimony. |
| SHB 355 | {d}šul-gi ĝissu-a-ni kur-ra la₂-a-me-en | שולגי, אשר צילו על ההר תלוי – אני | איכה ד:כ | [equivalent] | The king's shadow; over the enemy's land here, a shelter for the people there. |
| SHB 376 | ama-a-tud an-na-me-en | יליד־הבית של אַן – אני | בראשית יז:יב | [equivalent] | The house-born slave, a shared social category; a title of humility for the deified king. |

## Key findings
**The ancient mind.**
1. **A full portrait of the perfect king, in his own voice**, built as a catalogue of competences – scribe and
   accountant (13–20), warrior, slinger and archer (21–51), lion and elephant hunter face to face (56–76), runner
   (118–127), judge (130, 218, 221), diviner better than his diviner (131–149: the professional "admires it like a
   fool", 144), musician who tunes every instrument (154–174), speaker of five languages (206–220), counsellor who
   "cools hearts" (225–245), farmer-king (251–257), collector of old songs (270–280). Each block closes with the
   same four-line refrain (52–55 ×4): "Let me magnify what I have done … What of mine is not a thing beyond the mouth?"
2. **Death inside the praise, twice:** "the bile of the land of submission – it spares no one" (180), "whatever is
   acquired goes bad; who has gone up to the life of heaven?" (281–282). The answer is not religious but literary:
   the song, the school and the scribe. The second half of the poem is a programme for its own survival – a blessing
   on the future king who keeps the songs, a curse by Nanna and Utu on one who harms them (283–307), two "houses of
   the wisdom of Nisaba" in Urim and Nibru that "shall never change" (308–315), a scribe and a singer "standing" by
   them (312–313). The poem ends with Nisaba, not with a god of kingship: it is the school's own song – and the
   school copied it for three centuries, fulfilling the request.
3. **A king's oath against lying in inscriptions** (320–336, 345–352): no city, wall or praise is in his
   inscriptions that he did not truly achieve; "a lie that is not truth – how can it be written?" (327). The earliest
   surviving claim, by a king, that royal writing must be true – inside a poem that is itself boundless boasting
   (76: the lions are beyond counting).
4. **The deified king's two mothers** (184): Ninsumun, and a human "mother who bore me with her"; and the afterbirth
   cherished (186) – a rare human detail of a royal birth.
5. **Sumerian learning as a king's virtue:** the arithmetic terms "raising and placing" (17), tuning terms (160,
   171), the twelve named instruments (157–172), the omen procedure (141–145) – technical vocabulary of the school
   preserved as praise.

**The Bible.**
1. **Qohelet 2:4–6** is the closest literary contact: a king speaking in the first person "magnifies his works"
   (`הִגְדַּלְתִּי מַעֲשָׂי` (קהלת ב:ד) ~ the refrain *niĝ₂ ak-a-ĝa₂ … ga-buluĝ₅*) and lists fields, trees and water-works (252–254)
   – the genre of royal self-praise, which Qohelet inverts (shared motif; no source relation).
2. **Real transmission, not only motif:** extispicy before war (131–149 ↔ Ezek 21:26) and the nose-rope (201 ↔ 2 Kgs
   19:28) are Mesopotamian practices that reached the Bible's world.
3. **Corrected false echoes of ETCSL** (each would have built a biblical parallel): "righteousness" (25, *nam-si-sa₂*
   `יושר`), "blessed" (12, *nam tar*), "bless" (195, *dug₃*), "justice" (262), "swear" (358: no oath verb), "begotten"
   (11: *a … ru* "set the water"), "boar" (95: *šeg₉-bar* `יחמור`), "lungs" (96: *ur₅* `כבד`), "joy" (128: *isiš*
   "wailing"), "violence" (269: `אלימות`, not `חָמָס`).
4. The king-as-sage cluster – school (Dan 1:4), judgment (1 Kgs 3:28), poet and musician (1 Kgs 5:12; 1 Sam 16:18),
   interpreter (Gen 42:23), copier of old wisdom (Prov 25:1) – all shared motifs of ancient Near Eastern kingship.

## Open decisions
1. **Subir:** decided `שׁוּבִּיר` (the canon's form); SHB 216 aligned.
2. **Elephant:** *tillug* (58) and the canon's *am-si* (EB) are both `פיל` – Hebrew has no second word; kept, noted.
3. **Lance and spear:** *šukur* = `חנית` (34, 65, 339), because the canon (EB) and SHB 138 give *ĝiš-gid₂-da* `רומח`;
   the proverbs (c3 A52) have *šukur* `רומח`. One of the two moves (proposal: the proverbs to `חנית`).
4. **Sling bullets:** *im-dug* = `כדורי־הטיט` (36), because *a₂-sag₃* is `אבן־קלע` (canon EB) in the same passage;
   Lugalbanda (LC 257, 262) has *im-dug* `אבני־הקלע`.
5. **Axe:** *dur₁₀* = `קרדום` (341); Lugalbanda has *dur₁₀(-gag)* `כשיל` – decide one (`כשיל` is a biblical axe word too, a
   reasonable match; the *ḫa-zi-in* `גרזן` stays).
6. **Assembly:** *unken* `כינוס` (223) beside *puḫrum* `אספה` (226, = Lugalbanda, Enmerkar), both in one passage.
7. **Collisions kept from the canon:** *ra* and *sag₃* both `הכה` (canon *gu₃ ra* `הכה קול`; KL *sag₃* `הכה`); *tud*
   and *ugu* both `ילד` (canon NG 67 *ama ugu* `האם אשר ילדה אותי`); *ud ul* `ימים רחוקים` vs *ud su₃-ra₂* `ימים ארוכים`
   (Gudea) – kept apart here; EL's *su₃-ra₂* `רחוק` is the canon's adjective.
8. **Splits by sense (for the review):** *gaz* `שבר` of a lute's neck (159) beside `הרג` (68, 343; canon R1); *gid₂*
   `ימשוך` (289) beside `האריך`; *la₂* `תלה` / `שקל` (gifts, 111, 237) / `חסר` (183, 193); *tar* `שבר` (47) beside
   *nam tar* `גזר`; *zi* `נפש` / `חיים`.
9. **Readings left open:** 47 *dug₃* = "knee"? (ORACC "good"); 71, 128, 197, 221, 228, 240, 249–250, 303, 344–346 –
   difficult lines, translated word for word with the doubt in the notes.
10. **Who is "the mighty one, son of Ninsumun" (7)** – Gilgameš (the likelier) or Šulgi himself; left open in the
    Hebrew and the note.

## Proposals for the corpus renderings
**Formulas (fixed in SHB; to copy letter for letter in SHC–SHX):**
- The refrain (52 = 77 = 114 = 150; 53 = 78 = 115 = 151; 54 = 79 = 116 = 152; 55 = 80 = 117 = 153):
  `את אשר עשיתי – מעצמו אגדלה!` / `שם חוזקי – זרוע הרחיק;` / `בינתי – גדושה בדבר מחוכם היא;` /
  `מה משלי – אינו דבר העובר את הפה?`
- *ni₂-bi … buluĝ₅* = `מעצמו … גידל` (10 `מעצמו מגדל`, 52 `מעצמו אגדלה!`).
- *ud me-da ud ul-le₂-a-še₃* = `מיום מתי – עד ימים רחוקים –` (73 = 283).
- *X-me-en* = `X אני` (the canon), *ĝe₂₆-e-me-en* = `אני הוא`; *nu-me-en* = `אינני`.
- *a-ba-da-(ab-)ĝal₂-le-en-na* "since … is with me" = `מאחר ש… בידי מצוי(ים)` (34, 200–203, 247–248).
- *a₂ … su₃-ud* = `זרוע הרחיק` (53, 357 `שמי לנצח – זרוע גדולה הרחיק.`).
- *niĝ₂ ka-ge dib-ba* = `דבר העובר את הפה` (55, 317); *inim-ĝu₁₀ niĝ₂ ka-ta nu-šub-bu-dam / -de₃* = `דברי – דבר אשר
  מן הפה לא ייפול הוא.` / `שדברי – דבר – מן הפה לא ייפול.` (129, 331; = SA 36 `שמן הפה לא ייפול`).
- *šeš gu₅-li-ĝu₁₀ šul {d}utu-am₃* = `אחי ורֵעִי – העלם אוּתוּ הוא –` (40 = SA 79); with *-gin₇* `כאחי ורֵעִי, העלם אוּתוּ –` (123).
- *ama ugu-ĝu₁₀ {d}nin-sumun₂-(ka/na)-ra* = `לאם אשר ילדה אותי, נִינְסוּמוּן –` (112, 184; SHC B94, SHD 41 have it).
- *a₂-ĝa₂ {d}lamma-bi-im kalag-ga-ĝa₂ šir₃-bi-im* = `של זרועי – אֵלַת־הַמָּגֵן היא; של חוזקי – שירו הוא.` (381; 4 in
  the 3rd person `של זרועו – תהילתה היא; של חוזקו – שירו הוא;`).
- *za₃-mi₂-ĝu₁₀ dug₃-ga-am₃* = `תהילתי מתוקה!` (384 = LA 108; SHE 257 has it); *{d}nisaba za₃-mi₂* = `ניסבה – תְּהִלָּה!`.
- *su … dug₃* = `את בשר … הֵיטַבְתִּי` (72, the canon's); *me-teš₂ i-i* = `שבח יעלה` (295); *ka tar … sil* = `תשבחת –
  יפלח` (353); *giri₁₇ šu ĝal₂* = `יד על אף` (242); *gu₃ zid de₂* = `קול נאמן … השמיע` (24).
- *ḫe₂-em … ḫe₂-em* = `יהא … יהא` (266–267).

**Words (new or fixed here; grep showed no conflicting precedent unless noted):**
*nemur* `נָמֵר` [cognate via *nimru*]; *niskum* `בהמת־הניסקום`; *šukur* `חנית`; *masatum* `מַסַּתוּם`; *dalluš* `קלע`;
*im-dug* `כדור־טיט`; *im-lag* `גולה`; *tillug* `פיל`; *numun₂* `חלפה` (canon); *ĝiš-la₂* `התגוששות`; *šertab* `גדר`;
*šubtum* `מאורה`; *ildum* `שבט`; *naĝa₃* `עֱלִי`; *gag-u₂-tag-ga* `*חץ דוקר*`; *gag-pan* `חץ־הקשת`; *ti zu₂* `חץ־שן`;
*ellag* `פּוּכּוּ`; *kizrum* `כִּיזְרוּם`; *im-ri-a* `שבט`; *kuš₇* `סייס`; *nam-ĝuruš* `בַּחֲרוּת`; *nam-te* `פחד`;
*sa* `גיד` (sinew and bowstring); *sig₁₀* `השית` (as SA 92); *bur₂* `שחרר`; *šu bar* `שילח`; *ra* `הכה`; *til* `כילה`;
*zag til* `עד הקצה כילה`; *dib* `עבר`; *la₂* `תלה` (gifts `שקל`); *maš₂-šu-gid₂-gid₂* `בוחן` (§14.3); *uzu-ga* `סימני־הבשר`;
*sa gi₄* (sheep) `הכשיר`; *naĝaḫ* `שוטה`; *nam-išib* `אִישִׁיבּוּת`; *nam-nar* `זמרוּת`; *gilim* `הסתבך`; *buru₃* `עומק`;
*šu-kar₂* `כלי`; *kam* `*כוונון*`; *ad pad₃* `מציאת־הקול`; *tu-lu* `הרפיה`; *gi-di* `חליל־הגִּידִי`; *šumun-ša₄* `שוּמוּנְשָׁה`;
the instruments transliterated (`האַדַּבּ`, `גּוּאוּשׁ`, `סָאֵשׁ`, `מִירִיתוּם`, `אַלְגַּר`, `סַבִּיתוּם`, `אוּרְזַבַּבִּיתוּם`, `חַרְחַר`,
`זַנָרוּ`, `אוּרְגוּלָה`, `דִּימְלוּמַגּוּרָה`, `זַמְזַם`); *ze₂* `מָרָה`; *nam-gu₂-ka₃* `כניעה`; *a-sila₃-ĝar-ra* `שִׁלְיָה`
[equivalent, Deut 28:57]; *saĝ-ki* `מצח`; *saĝ-gag* `משולש`; *gi-nindan* `קנה־המידה`; *kab* `חבל־האף`; *{ĝiš}kar₂*
`*כלי*`; *gaba-ri* (answer) `שכנגד`; *eme bal* `מחליף־לשון`; *inim bal* `החליף דבר`; *di-til-la* `הדין הגמור`; *unken*
`כינוס`; *puḫrum* `אספה`; *niĝir* `כרוז`; *inim šar₂* `ערבב דבר`; *šagina* `מושל הצבא`; *saĝ-izi* `לפיד`; *lu₂-inim-ma*
`עד`; *ĝiš-gi* `סבך־קנים`; *niĝ₂-a₂-zig₃* `אלימות`; *i-{d}utu* `תלונה`; *mu-sar-ra* `כתובת`; *gi-sig* `גדר־קנים`;
*ga-raš* `כרשה`; *garig* `מסרק`; *dur₁₀* `קרדום`; *aruba* `מהמורה`; *ka-inim-ma* `דבר־הפה`; *sa-dur₂* `מצע`; *dumu-saĝ*
`הבן הבכור`; *kad₄* `קשר`; *ama-a-tud* `יליד־בית` [equivalent, Gen 17:12]; *ki-umun₂* `מקום־הבקיאות`; *niĝ₂-umun₂-a*
`מופת`; *mul-an* `כוכבי השמים` (also "writing"); *ud su₃-ra₂* `ימים ארוכים`; *eĝer ud-da* `סוף הימים`;
*šag₄-bal-bal* `צאצאים`; *a-gar₃* `שדמה`; *eg₂* `סוללה`; *ki-lul-la* `מקום־הרצח`; *šag₄-zaraḫ* `אנקת־לב`.
Names: Šulgi `שׁוּלְגִּי`; Nanibgal `נַנִּיבְּגַל`; Nisaba `נִיסָבָּה`; Ninsumun `נִינְסוּמוּן`; Nintur `נִינְתּוּר`; Ningal
`נִינְגַּל`; Ištaran `אִישְׁתַּרַן`; Gutium `גּוּטִיּוּם`; Martu `מַרְתּוּ`; Subir `שׁוּבִּיר` (decided by the coordinator, aligned); Elam `עֵילָם`; Ḫilzum
`חִילְזוּם`; the E-ḫursaĝ `אֵחוּרְסַג`; the House of the Wisdom of Nisaba `בית־בינת־נִיסָבָּה` (translated); the Anuna
`הָאֲנוּנָּה`; Ekur `הָאֵכּוּר`.

## Gate bugs
- `שבור` (passive participle, 301) and `לשבור` (infinitive, 340) trip the `בור` gate (prefix ש / לש read as
  ש־בור): written around at first; the gate was fixed by the coordinator and the natural forms restored.
- `שבו` "in it" (35, 46, 350) trips the `שוב` gate as before (the known homograph); written `שֶׁבּוֹ` (passes).
- None forced a paraphrase of meaning.

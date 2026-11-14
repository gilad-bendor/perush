# Project 11, part ID1 – the statue inscription of Idrimi (ID.1–104) – Round 8 run 4, translator C (2026-11-14)

## Progress and passes
- **Drafted: all 104 entries** (1–101 the body inscription, 102–104 the cheek inscription), with the Hebrew header (נוסח הבסיס: CDLI P500443 after Dietrich & Loretz, UF 13; Smith 1949 and Oller 1977 named as known editions only). Every source line is `` `@` ``, filled by `fill ID`.
- Read from the ATF alone (no lemmas, no English; ORACC unreachable): every form parsed; peculiar peripheral forms noted at their lines (1st-person statives for preterites *ašbāku*, *ṭeḫēku*, *eliāku*, *šarrāku*, *ašbānu*, *ḫalqānu*; *ana* = "in"; main-clause subjunctive *ušēšibū*, *ukinnu*; *akanaka*, *anmuš*, *anmû*, *appūna*, *kīmē*, *annûti* as a singular; Hurrian *nulla*). The scribe's doublet in 93 (`<<…>>`) is marked and not translated; the gods 10, 20, 30 in 98 (Adad/Teššub, Šamaš, Sîn) are kept as numerals with a note.
- Passes: fidelity (uncertain readings marked `?` / `*…*`: 17, 26–27, 41, 46, 55, 59–63, 96); consistency (RE1 and corpus words: *târu* `שוב`, *naṣāru* `נצר`, *ṭeḫû* `נגש`, *ṣalmu* `צלם`, *māmītu* `שבועה`, *nīqu* `נסך`, *ibru* `רֵעַ`, *tappû* `חבר`, *eṭemmu* `אִט`, *barû* `בחן`, *mārū bārî*; *būšu* `רכוש` as ZL); Hebrew (unvocalized plene; ★ Emar, Niḫi, Ḫapiru, Ištar, Šamaš vocalized).
- **Checks:** `verify ID --strict` – 104 entries; **8 problems, all gate bugs** (below; the lines are correct and were not written around). `check_bible_quotes.py` on the annotated file and this file – 0 problems.
- **Waits for ORACC** (aemw/alalakh/idrimi): every `?` line should be checked against its lemmatization when the host is reachable.

### Parallels index (ID1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| ID.4 | *masiktu ittabši u ḫalqānu* | `מעשה רע אירע – ונמלטנו` | `וַיָּקָם יָרָבְעָם וַיִּבְרַח מִצְרַיִם אֶל שִׁישַׁק מֶלֶךְ מִצְרַיִם` (מלכים א יא:מ) | [equivalent] | the prince's flight and exile |
| ID.10–12 | *mannum ana bīt abīšu … ana mārī Emar lū ardu* | `"מי <ב>בית אביו – יהא קטן, בינוני, גדול; ומי בבני אֵמַר – יהא עבד!"` | `וַיִּבְרַח יִפְתָּח מִפְּנֵי אֶחָיו וַיֵּשֶׁב בְּאֶרֶץ טוֹב` (שופטים יא:ג) | [equivalent] | the younger son who will not stay a servant |
| ID.18 | *māt Kinanim* | `ארץ כְּנַעַן` | `וּכְנַעַן יָלַד אֶת צִידֹן בְּכֹרוֹ וְאֶת חֵת` (בראשית י:טו) | [cognate] | an early witness of the name |
| ID.26–27 | *ana muḫḫīya ipḫurūnim … ṣāb ḫapiri* | `ואליי נאספו … צבא החַבִּירוּ` | `וַיִּתְקַבְּצוּ אֵלָיו כָּל אִישׁ מָצוֹק … וַיְהִי עֲלֵיהֶם לְשָׂר` (שמואל א כב:ב) | [equivalent] | the exile leader of uprooted men; the Ḫapiru–`עִבְרִי` question in the note only (Gen 14:13) |
| ID.28 | *ana 7 šanāti ašbāku* | `לשבע שנים ישבתי` | `וַיַּעֲבֹד יַעֲקֹב בְּרָחֵל שֶׁבַע שָׁנִים` (בראשית כט:כ) | [equivalent] | seven years of waiting (twice: 28, 43) |
| ID.33 | *pān šadî Ḫazi* | `מול הר חָזִי` | `לִפְנֵי בַּעַל צְפֹן נִכְחוֹ תַחֲנוּ עַל הַיָּם` (שמות יד:ב) | [equivalent] | Mt Ḫazi = Casius = Ugaritic Ṣapānu; also Ps 48:3 |
| ID.37 | *kīma ištēn awīli* | `כאיש אחד` | `וַתִּקָּהֵל הָעֵדָה כְּאִישׁ אֶחָד` (שופטים כ:א) | [equivalent] | the same idiom |
| ID.44 | *šar ṣāb Ḫurri* | `מלך צבא חוּרִי` | `וְאֶת הַחֹרִי בְּהַרְרָם שֵׂעִיר` (בראשית יד:ו) | [cognate?] | Hurrians and Horites – identity disputed |
| ID.64 | *māt Ḫatte* | `ארץ חַתִּי` | `וּכְנַעַן יָלַד אֶת צִידֹן בְּכֹרוֹ וְאֶת חֵת` (בראשית י:טו) | [cognate] | |
| ID.74 | *uzaʾʾiz ana ṣāb tillatīya* | `וחילקתי לצבא תגבורתי` | `כִּי כְּחֵלֶק הַיֹּרֵד בַּמִּלְחָמָה וּכְחֵלֶק הַיֹּשֵׁב עַל הַכֵּלִים יַחְדָּו יַחֲלֹקוּ` (שמואל א ל:כד) | [equivalent] | sharing the spoil |
| ID.85 | *ša šubta lā uššabū anāku ušēšibūšunu* | `אשר מושב לא ישבו, אני הושבתי אותם` | `מֵקִים מֵעָפָר דָּל מֵאַשְׁפֹּת יָרִים אֶבְיוֹן לְהוֹשִׁיב עִם נְדִיבִים` (שמואל א ב:ח) | [equivalent] | the king settles the homeless |
| ID.92 | *mannummē ṣalmī … inassaḫšu* | `מי אשר את צלמי זה ינסח` | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ` (דברים כז:יז) | [equivalent] | curse on removing a fixed monument |
| ID.94 | *perʾašu lilqut* | `את צאצאו תלקט` | `יְהִי-אַחֲרִיתוֹ לְהַכְרִית; בְּדוֹר אַחֵר יִמַּח שְׁמָם` (תהלים קט:יג) | [equivalent] | the offspring cut off |
| ID.96–98 | *šumašu u zērīšu liḫalliq* | `את שמו ואת זרעו – יאבדו` | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | name and seed destroyed |
| ID.102 | *30 šanāti šarrāku* | `שלושים שנה – מלך הייתי` | `וְהַיָּמִים אֲשֶׁר מָלַךְ דָּוִד עַל יִשְׂרָאֵל אַרְבָּעִים שָׁנָה` (מלכים א ב:יא) | [equivalent] | the reign's total |

## Key findings
- **The ancient mind.** A king tells his life as a return from exile: a "bad thing" in his father's house, the refuge with his mother's kin, the younger son who "thought what his brothers did not think" and refused to be "a servant among the sons of Emar". He lives seven years among the uprooted Ḫapiru, asks the gods by birds and by lambs, and waits until "Adad turned to my head". His legitimacy is a web of loyalties: the refugees who recognize "their lord's son", the land that comes "like one man", the oath sworn by his fathers to the Hurrian king and remembered as "toils". As king he makes his throne, brothers, sons and friends "equal" to those of kings, settles the homeless, restores the gods' rites, and hands them to his son. The inscription asks to be read and blessed; the scribe Šarruwa signs himself into the blessing.
- **The Bible.** The closest contacts are the stories of Jephthah and David (Judg 11:3; 1 Sam 22:2; 30:24), Jeroboam's flight (1 Kgs 11:40), "like one man" (Judg 20:1), Canaan and Ḫatti / Ḥeth (Gen 10:15), Mt Ḫazi = Baal-Ṣaphon (Exod 14:2), and the curse formulas of Deut 27–29 and Ps 109:13. The Ḫapiru are not translated `עברים` (renderings §13.4); the question stays in the apparatus.

## Open decisions
1. ID.26–27 *urtabbiaku urāk* ("I grew great? I stayed long?") and ID.41, 48 *innaḫū* ("made peace?") – to be checked against ORACC.
2. ID.46 *šar ṣāb …anwanda* – Ummān-manda? left with `?`.
3. ID.28 *iṣṣūrī uzakki* – "released birds" (augury) or "purified"? rendered `שילחתי?`.
4. ID.63 *ananta ušaqqûšunu* – "made them drink strife" or "raised strife"?
5. *mašālu* D `הִמְשִׁיל` ("made equal") – kept apart from AK1's *šanānu* `הִשְׁתַּוָּה`.

## Proposals for the corpus renderings
Terms (Source | Hebrew): *masiktu* `מַעֲשֶׂה רַע` · *ḫašāšu* `חָשַׁב` · *kizû* `רַכָּב` · *biādu* `לָן` · *namāšu* `יָצָא` · *tabālu* `יַבָּשָׁה` · *manāḫtu* `יְגִיעָה` · *šulmu* `מִנְחַת־שָׁלוֹם` · *nīšu* (oath) `נְשִׂיאַת־הַשֵּׁם` (`שבועה` stays *māmītu*'s) · *kīnūtu* `נֶאֱמָנוּת` · *mašālu* / D `נִמְשַׁל` / `הִמְשִׁיל` · *namkūru* `קִנְיָן` · *bašītu* `נְכָסִים` · *maršītu* `מִקְנֶה` · *paqādu* `הִפְקִיד` [cognate] · *nasāḫu* (a statue) `עָקַר` · *nazāru* `גִּדֵּף` · *madādu* `מָדַד` [cognate] · *eṭemmū* `אִטִּים` ★ · *karābu* Gtn `יברכו פעם אחר פעם`. Names: Idrimi `אִדְרִימִי`, Ilim-ilimma `אִלִּים־אִלִּימָּה`, Ḫuribte `חוּרִיבְּתֶה`, Sutû `סוּתוּ`, Ḫazi `חָזִי`, Ḫurri `חוּרִי`, Paššaḫe `פַּשַּׁחֶה`, Damarutla `דַּמַרוּתְלָה`, Ḫulaḫḫan `חוּלַחַן`, Zila `זִילָה`, Ie `אִיֶה`, Uluzila `אוּלוּזִילָה`, Zaruna `זַרוּנָה`, Adad-nērārī `אֲדַד־נֵרָרִי`, Šarruwa `שַׁרּוּוָה`.

## Tool (gate bugs – 8 `verify ID --strict` problems; the lines are correct and were not written around)
- I1. **`עבד`** (ID.2, 12, 98): licensed by *ardu|wardu|dullu* only; the ATF has the logogram `_arad_` / `{lu2}arad` – add `arad` (folded ATF) to the ID licence (as G3 for ST).
- I2. **`טוב`** (ID.49, 85, 100): the ATF has `da-mi-iq` (*damiq*), `_du10_` (= DÙG, *ṭābu*) and `_saga_` (= SIG₅, *damqu*); add `da-mi-iq|du10|saga` to the licence.
- I3. **`זרע`** (ID.98): the ATF has `_numun_` (= *zēru*); add `numun`. (ID.93's former `<<…>>` doublet is no longer translated.)
- I4. **`צלם`** (ID.99): the ATF has `{d}alam` / `_alam_` (= *ṣalmu*); add `alam`. Hole: `צלמי` (ID.92) is not in the gate's word list, so it passed unchecked.
- I5. `כנען` (ID.18–19, `ki-in-a-nim`) and `שבועה` (ID.50, 52–54, `_nam-erim2_`, `ma-mi-ti`) passed: worth confirming that the licences really match these spellings and not by accident.

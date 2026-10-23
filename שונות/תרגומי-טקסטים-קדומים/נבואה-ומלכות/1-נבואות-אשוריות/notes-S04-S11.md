# Translator notes: SAA 9 4–11 (units S04–S11)

## S04–S11 (T4)

**Scope done:** all 149 lines of SAA 9 4–11 in one file, `annotated-04-11.rtl.md`, drafted 2026-10-22 (Round 3, run 3; the only translator running, after T1–T3; each unit written to disk and filled as soon as it was drafted, in the order S04, S05, S06, S07, S08, S09, S10–S11). Units and line counts: S04 (SAA 9 4, 9), S05 (5, 17), S06 (6, 22), S07 (7, 25), S08 (8, 11), S09 (9, 35), S10 (10, 17), S11 (11, 13). Each unit has its `<!-- unit: SNN -->` marker and its own `## ` section(s): S07 three (o.1–o.11, o.12–r.5, r.6–r.11), S09 three (o.1–o.7, o.8–o.28, r.1′–r.7′), the others one each.

- `prophecy_tools.py verify S04 S05 S06 S07 S08 S09 S10 S11`: **149/149 entries; OK** (no reserved-string, trap or formula problems; no "same normalization, different Hebrew" reports). No gate false positives.
- `../../tools/check_bible_quotes.py annotated-04-11.rtl.md`: **0 problems**; the same for this notes file. Every quoted verse was printed with `--show` first. Twelve quotations that had slipped in unprinted or as placeholders during drafting (1 Sam 1:20 in S06 t.e.11; Ps 18:38; Dan 11:15; Isa 27:1; Ps 41:3; Jer 36:4; Job 2:5; Esth 3:7; Ezek 27:2; Gen 2:22; Deut 17:20; 2 Kgs 9:11) were caught in the drafting checks or in pass (b), printed, and replaced by the printed text; two placeholder "parallels" that had no verse behind them (S09 o.7, r.3′) were removed or replaced.
- **Base text:** the 2026-10-22 regeneration; `fill` took every line. One unbalanced bracket in the transliteration: S04 2′ `{1}aš-šur—PAB]` (no opening bracket); the Hebrew follows T1's `[אֵסַרְחַ]דּוֹן` (the name's first part restored).

### Review pass (a): fidelity
A script listed every `>` line beside its transliteration (`lines.txt` in the scratchpad); each line was read against the transliteration, the SAAo normalization and the lemmas.
- **Brackets** judged from the transliteration, not from Parpola's English. Corrections in this pass: S08 o.3 `[הלכתי], באתי` (first draft had the bracket on the wrong verb: *at-⸢ta⸣-[lak]* has the root restored, *[at]-tal-ka* has it preserved); S07 o.9 `[לאמור: "לכו, נ]לכה` (the *mā* is restored too); S08 o.5 `[הָאַ]לָּה` (*{giš}[nar₃]-an-ti*); S11 r.8 `על […]` (not `על[יו]`: no suffix on the tablet). Restored words that carry a Bible parallel are said in the entries (S05 3 "her calf … heard"; S07 o.9 "come"; S08 o.2 "god"; S11 r.12 *ina*).
- **Additions** only in parentheses: `(העיר)` S06 o.5 (only the determinative {uru}); `(בהם)` S07 o.13; `(החוצה)`, `(אותו)`, `(אמר)` S08 o.6–o.8; `(אומץ)` S09 o.7; `(על)` S09 o.10; `(ב)` S09 o.14; `(חודש)` S09 r.6′ (as EST §107).
- **Tense / mood:** perfect = past (`שמעתי` S06 r.3, `הלכתי, באתי`, `משכתי`, `ביתקתי`, `ניפצתי` S08); present = future (`אלכוד`, `אשליך`, `אתקן`, `אשאך`, `אנצרך`, `אתן`, `אנפץ`, `אֲכַלֶּה`); preterite + subjunctive in relative clauses (`אשר ניבא` S06 r.8: NA *-ūni* on a singular verb, so not "they prophesied"); preterite forms where Parpola has a future are kept past and noted (S05 r.5 *nikrur* rendered `נַשְׁלִיךְ` with the note that the form is preterite/cohortative; S09 o.27 *itūra* `שב`; S10 r.2′ *ušēṣanni* `הוציאני`); statives as nominal clauses (`כרעיי כורעות`, `עזות בָּאֵלִים` – the first draft's superlative `העזות` removed, `עֵרָה אני`, `יגעה אני`, `כתפיי שקודות`); Gtn (S09 o.6, o.9–o.14, o.19–o.20, o.24) by the Hebrew participle, never by `שוב ושוב` (the root שוב is reserved for *târu*, which S09 o.27 has).
- **Gender:** the queen mother addressed in the feminine (S05 4 `חִגְרִי מתנייך`); the goddess's first person feminine (S07 r.9 `עֵרָה אני`; S09 o.8–o.20 `שואלת`, `משוטטת`, `עוברת`, `יגעה`); the goddesses as a plural feminine subject (S09 o.3–o.7, o.17–o.19); S11 r.2 `הָלַכְתְּ` and r.5 `שְׁבִי` feminine (decision 10).
- **Every preserved word parsed** from the SAAo `norm:`; unlemmatized fragments described as signs (S04 7′, 9′; S05 r.2, r.7; S06 o.4, o.6, b.e.10, r.1, r.3, r.9; S10, S11 r.1, r.3).

### Review pass (b): consistency with the renderings, T1–T3 and the ★ rules
- **★ plene, unvocalized from the first line.** Vocalized only: names at their first occurrence in the file (`אֵסַרְחַדּוֹן`, `אַשּׁוּר`, `אִשְׁתַּר`, `אַרְבֵּאִיל`, `מוּלִּיסּוּ`, `נִינוּרְתָּה`, `תַּשְׁמֵטוּ־אֵרֵשׁ`, `מוּלִּיסּוּ־כַּבְתַּת`, `אַשּׁוּר־בָּנִי־אַפְלִי`, `עֵילָם`, `הָעֵילָמִי`, `מִצְרַיִם`, `דֻּנָּשָׁא־אָמוּר`, `נִיסָן`, `בֵּל־שַׁדּוּאָ`); the ★ words at every occurrence (`גֹּמֶר`, `אֲכַלֶּה`, `נָבוּ`, `בֵּל`, `צֹר`, `שַׁמַשׁ`, `הָאוֹי`); `בְּבֵית הַיְּרוּשָּׁה` (first occurrence, T1's form); ambiguous words (`עֶגְלָהּ`, `חִגְרִי`, `צָרָיו`, `צָרְךָ`, `נַשְׁלִיךְ`, `פָּאֲרוּ` [≠ "Pharaoh"], `הָאַלָּה` [≠ "oath / goddess / these"], `עִם` [≠ `עַם הָאָרֶץ`], `יֻשְׁפַּל`, `בָּאֵלִים`, `מִבְנֵה יְדֵיהֶן`, `יַמִּים` [≠ "days"], `שְׁרָבִים`, `סַגְרִירִים`, `יַרְפּוּךָ` [≠ "heal you"], `יְחַיּוּ`, `צִדִּי`, `מִשְׁמֵשׁ` [≠ "servant"], `חֲלָבְךָ` [≠ "your fat"], `נְצֹר` [imperative], `כְּנַדָּל`, `אֶנְגּוּרַתִּי`, `הָלַכְתְּ`, `שְׁבִי`, `[שׂ]מות` [≠ "names"]). In this pass the first draft's vocalized `דְּבַר … שֶׁל`, `מֶלֶךְ`, `כְּרָעַי כּוֹרְעוֹת`, `לְנַאֲקַת`, `שָׁמְעָה`, `מָתְנַיִךְ`, `אָקוּם, אֶטְבַּח`, `לָעַד`, a second `עֵילָם` and `הַקַּרְקַע` were rewritten plene and unvocalized.
- **Formulas copied from the earlier files** (grep of `annotated-01/02/03`): `לפני רגליך א[שליך]` (= S01 i 14′ in the present); `[את]ה – אל תירא!` (§2.1); `דבר אִשְׁתַּר של אַרְבֵּאִיל` (= S02 ii 38′, S03 ii.33); `דבר המלכה מוליסו` (§2.4); `את צָרָיו תחת רגלי[ו]` (§2.9; S03 i.30 `[תחת] רגליו`); `[את ה]חולדות` (S01 v 3); `א[לכוד]` (S02 ii 20′); `אשי[ג]` (S02 i 23′); `אתקן` (S02 iii 19′, 33′–34′); `תיקון` (S01 iv 3); `בְּבֵית הַיְּרוּשָּׁה` (S01 i 33′; EST); `[אגו]נן` (S03 i.7 *ḫaṣānu*); `מלכות … תעשה` (S01 vi 28–30); `לְכוּ` (S03 ii.35); `תחומים` (S02 ii 15′); `כְּעֵילָם – את גֹּמֶר אֲכַלֶּה` (§6, the coordinator's string, plene); `אנוכי` (§2.2); `גידלתי` (S01 i 35′, S02 iii 27′); `עגלי` (S02 iv 20′); `[בְּתוֹךְ הָאוֹי] אקום, אט[בח] את צָרְךָ` (§2.10; S01 i 26′); `ניבא` / `הנביא` / `הנביאה` (§2.5; S03 iv.31–35); `מִפִּי` … `[בת ארבא]יל` (§2.3); `לעד` (§2.7); `נאמני[ם]` (§3); `אנפץ` (= S03 i.35 *ahappi*); `בתוך` (EST *ina libbi*).
- **Key terms checked against renderings §0–§7:** *kakkišu* `חולדה`; *bâru* `לכד`; *karāru* `השליך`; *kašādu* `השיג`; *šakānu* `שׂם`; *qablu* `מתניים`, *rakāsu qabla* `חגר מתניים`; *kamsu* `כורע`; *ēkal ṣēri* `היכל השדה`; *ṣēru* `שדה`; *tuqnu* `תיקון`; *taqānu* D `תיקן`; *nakru* `אויב`; *ayyābu* `צר`; *imittu u šumēlu* `ימין ושמאל`; *mūru* `עגל`; *ikkillu* `נאקה` (T3); *šemû* `שמע`; *erēbu* `בא`; *aṣû* `יצא`; *dâku* `הרג` (EST); *ragāmu* `ניבא`; *qabû* `אמר`; *epēšu* `עשה`; *nadānu* `נתן`; *ša-ziqni* `בעל זקן`, *ša-rēši* `סריס` (EST); *bēt rēdûti*; *šar mātāti* `מלך הארצות` (T1); *alāku* `הלך`, ventive `בא` (as the netherworld corpus); *šiāmu* `גזר`; *ina birti* `בין`; *kullumu* `הראה` (EST); *gamāru* `כלה`; *šebēru* `שבר`; *târu* `שוב` (G "return"), D "turn into" `הפך` (Gilgameš VII 182, Etana); *tārītu* `אומנת`; *našû* `נשא`; *šakānu*; *ēru* (see decision 1); *naṣāru* `נצר`; *kallamāri* `בשחר`; *rabû* D `גידל`; *dibbī* `דברים`; *ilu* `האל`; *šadādu* `משך` (Gilgameš XII); *ṣerru* `נחש` (aligned 2026-10-22; gated, licensed); *batāqu* `ביתק`; *ḫepû* `ניפץ`; *aḫu* `זרוע` (EST); *qaqqaru* `קרקע` (netherworld); *kidinnu*; *dannu* `עז`; *râmu* `אהב`; *binûtu* `מבנה` (Gilgameš, Enūma eliš); *šapāru* `שלח`; *rapādu* G `שוטט` (Gilgameš); *ebēru* `עבר`; *etēqu* `חלף` (Etana); *ḫuršānu* `רמה` (Gilgameš, wisdom); *akālu* `אכל`; *lānu* `גוף` (wisdom, Gilgameš); *banû* (adj.) `יפה` (Gilgameš, Etana); *anāḫu* `יגע` (Gilgameš); *dalāpu* `נדד` (EST, the love songs `נדודה אני`); *puḫru* `אספה` (law, wisdom, Gilgameš); *rittu* `כף` (law, wisdom); *ramû* D `הרפה` (EST); *erēšu* `שאל` (netherworld); *atāru* Š `הוסיף` (wisdom *balāṭa uttar* `חיים יוסיף`); *ḫadû* `שמח` (netherworld); *damqu* `נאה` (EST); *ṭabāḫu* `טבח`; *balāṭu* D `חִיָּה`; *ana dāri* `לעד`; *limmu* `לִמּוּ`, *šakin māti* `סגן ארץ` (EST); *usātu* `עזרה` (wisdom); *paššūru* `שולחן` (Gilgameš); *kusāpu* `פת`; *kakkabtu* `כוכב`; *ḫurāṣu* `זהב`; *rēšu* `ראש`; *giṣṣu* `נעצוץ` (Gilgameš V); *amurdinnu* `*ורד־הבר*` (Gilgameš); *nipšu* `גיזה` (Gilgameš I); *bêlu* `משל` (Sargon legend); *kimṣu* `כרעיים` (Gilgameš).
- **Words grepped in every corpus before fixing** (`lookup`, `grep every`), and kept apart from earlier homonyms: *hūlu* `מסילה` (not `דרך` *urḫu*, `אורח` *ḫarrānu*, `נתיב` *ṭūdu*, `שביל` *kibsu*); *pitūtu* `נזר` (not `צניף` *parsīgu*, `עטרת` *agû*, `מצנפת` *kubšu*); *napāšu* `סרק` (= Sum. *dun* in Enki and the World Order; not `מרט` = Etana's *baqāmu*, not `נפץ` = *ḫepû*); *dalālu* `פאר` (Enūma eliš; not `הלל` = *nâdu* here); *saḫḫaru* `צלחת` (not `קערה` = *aṣūdu*); *ṣētu* `שרב` (not `חורב` = *anqullu*, T3); *diglu* `מחזה` (not `חזיון` = temple *maš-ĝi₆*, not `מראה` from *amāru*); *giššu* `צד` (not `מתניים` = *qablu*); *ṭabāḫu*; *ilu*. Collisions that remain are the open decisions 1–5.
- **Gates:** every gated word licensed (`אהב`/`אוהבות`/`אהבתן` *râmu*; `תקן`/`אתקן` *taqānu*; `תיקון` *tuqnu*; `ירושה` *rēdûti*; `נחש` *ṣerru*; `טבח` *ṭabāḫu*; `היכל` *ēkalli*; `ירא` *palāḫu*; `נביא`/`נביאה`/`ניבא` *raggimu*/*raggintu*/*ragāmu*; `אנוכי` *anāku*). None of the "never" strings in a `>` line (`בְּרִית`, `עוֹלָם`, `אֱלֹהִים`, the root שמר, `צֶדֶק`, `מָשִׁיחַ`, `שְׁאוֹל`) – they stay in the apparatus (Ps 121:4 `שׁוֹמֵר`, Ps 21:5 `עוֹלָם`, Gen 28:15 `וּשְׁמַרְתִּיךָ` are quoted, never used).
- ***mā*** = `לאמור` where it opens a speech: after a name with no verb (S06 o.1, S07 o.2), after a verb of saying (S07 o.9, o.12, r.4; S08 o.3, o.5; S10 l.e.1–2), as T1 v 14–15 and T3 ii.12–13; not rendered where it recurs inside one speech (S06 o.2, o.5, r.1; S07 o.3–o.8, o.14, r.1, r.6–r.11; S08 o.6, r.1; S09; S11 r.4–r.6); S08 o.7–o.8 *u mā* "and (he said):" = `ו(אמר):`. S11 r.3 *mā* after a break: quotation mark only.
- **★ Re-check of the pre-set renderings against the drafted lines:** §2.1 `אַל תִּירָא` / `אַתָּה – אַל תִּירָא` – drafted exactly (S04 5′, S07 o.2, r.6 ×2, r.11); §2.2 `אָנֹכִי` – plene `אנוכי` (S07 r.11); §2.3 `מִפִּי` … `בַּת אַרְבֵּאִיל` – exactly (S09 r.4′–r.5′, bracketed); §2.4 `דְּבַר אִשְׁתַּר שֶׁל אַרְבֵּאִיל`, `דְּבַר הַמַּלְכָּה מוּלִּיסּוּ` – exactly, plene (S05 1, S07 o.2); §2.5 – exactly (S06 r.6, r.8, t.e.11–12; S07 o.1; S10 l.e.2); §2.7 `לָעַד` – exactly (S09 r.3′); §2.9 `לִפְנֵי רַגְלֶיךָ`, `תַּחַת רַגְלָיו`, `הִשְׁלִיךְ` – exactly; §2.10 – exactly (S09 o.26, the object after the verb as the fixed string has it, though the tablet has it before); §3 *mūru*, *tārītu*, *taqānu*, *ēkallu*, *ṣerru*, *naṣāru*, *kēnu*, *ḫarādu* – exactly; §3 *giššu* `מָתְנַי?` – **not used** (decision; `צַד`); §3a *kakkišu*, *ṣēru*, *ēkal ṣēri*, *kusāpu*, *kakkabtu*, *ḫurāṣu*, *kallamāri* – exactly; §4 *kidinnu* `חָסוּת` / `בַּר חָסוּת` – `בר חסות`; §6 `כְּעֵילָם – אֶת גֹּמֶר אֲכַלֶּה` – exactly, plene `את`; §7 (T1–T3 strings) – exactly. The coordinator's message of 2026-10-22: *ṣerru* `נָחָשׁ` (not the brief's `פֶּתֶן`), *taḫūmu* `תְּחוּם` (Deut 32:8 `גְּבֻלֹת` as [equivalent]), *qablēki ruksi* `חִגְרִי מָתְנַיִךְ`, *kamsu* `כּוֹרֵעַ` – followed.

### Review pass (c): Hebrew read aloud
Each unit read aloud as a whole. Changes: S04 6′ `את האחרונים` (object marker); S07 r.1 `את … הנעצוץ אשבור` (parallel to `את *ורד־הבר*`); S08 o.5–r.2 the quotation marks closed and reopened at each *u mā* (`ביתקתי (אותו)." ו(אמר): "את הָאַלָּה / ניפצתי." ו(אמר): "את עילם … אֲכַלֶּה."`); S05 r.6 `פָּאֲרוּ` vocalized. In S07 no quotation marks for the prophetess's (= Mullissu's) whole speech, so that the inner quotations (the kings, o.9–o.11; the king's question, r.4) take double quotes and a quoted riddle takes single quotes. Dashes keep the Akkadian order where Hebrew would reorder: `עד – כאשר אמרתי – אעשה, אתן לך` (S07 o.3), `[מלכ]י הארצות – / [תמשו]ל (בהם)` (o.12–o.13), `כְּעֵילָם – את גֹּמֶר אֲכַלֶּה`, `*מִשְׁמֵשׁ* – בין שדיי אשימך` (r.8), `את האויב אשיג – של אשור־בני־אפלי` (S11 r.4). Register: biblical where the word is biblical (`נעצוץ`, `צרעה`, `שרב`, `סגריר`, `מסילות`, `מראשות`, `כתף`, `צד`), Mishnaic where it is the right word (`תחום`, `צלחת`), Modern only for `נדל` and `משמש` (no older word). No vav-consecutive.

### Parallels index (S04)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2' | *Aššur-ahu-iddina* | `[אֵסַרְחַ]דּוֹן` | `וַיִּמְלֹךְ אֵסַר חַדֹּן בְּנוֹ תַּחְתָּיו` (מלכים ב יט:לז) | [cognate] (name) | |
| 3' | *kakkišāti ubâra* | `[את ה]חולדות א[לכוד]` | `הַחֹלֶד וְהָעַכְבָּר וְהַצָּב לְמִינֵהוּ` (ויקרא יא:כט) | [equivalent] | Parpola's second animal ("... and") is in his English only; the tablet has room for no word. |
| 4' | *ina pān šēpēka akarrar* | `[לפני] רגליך א[שליך]` | `עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | [equivalent] | = S01 i 14′, present tense. |
| 5' | *atta lā tapallah* | `[את]ה – אל תירא!` | `אַל תִּירָא כִּי עִמְּךָ אָנִי` (ישעיהו מא:י); `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א) | [equivalent] | |
| 6' | *akaššad* | `אשי[ג]` | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם` (תהלים יח:לח) | [equivalent] | |

### Parallels index (S05)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *abat Issar ša Arbail* | `דבר אִשְׁתַּר של אַרְבֵּאִיל` | `הָיָה דְבַר יְהוָה אֶל אַבְרָם בַּמַּחֲזֶה` (בראשית טו:א) | [equivalent] | Parpola's "to the king's mother" is a restoration. |
| 2 | *kinṣāya kanṣa* | `כרעיי כורעות` | `מִכְּרֹעַ עַל בִּרְכָּיו וְכַפָּיו פְּרֻשׂוֹת הַשָּׁמָיִם` (מלכים א ח:נד); `כָּרַע בֵּל קֹרֵס נְבוֹ` (ישעיהו מו:א); `כִּי לִי תִּכְרַע כָּל בֶּרֶךְ` (ישעיהו מה:כג) | [equivalent]; [divergence] | Speaker uncertain (the goddess crouching, or the mother praying: decision 12). |
| 3 | *Mullissu ana killi [ša mūrīša tasseme]* | `מוּלִּיסּוּ לנאקת [עֶגְלָהּ שמעה]` | `שָׁמוֹעַ שָׁמַעְתִּי אֶפְרַיִם מִתְנוֹדֵד יִסַּרְתַּנִי וָאִוָּסֵר כְּעֵגֶל לֹא לֻמָּד` (ירמיהו לא:יז); `וַיִּשְׁמַע אֱלֹהִים אֶת נַאֲקָתָם` (שמות ב:כד) | [equivalent] | The god hears the lament of the calf; **stands on Parpola's restoration** (calf, heard). Our proposal. |
| 4 | *qablēki ruksi* | `חִגְרִי מתנייך!` | `חָגְרָה בְעוֹז מָתְנֶיהָ` (משלי לא:יז); `חֲגֹר מָתְנֶיךָ` (מלכים ב ד:כט); `וְאַתָּה תֶּאְזֹר מָתְנֶיךָ וְקַמְתָּ` (ירמיהו א:יז); `אֱזָר-נָא כְגֶבֶר חֲלָצֶיךָ` (איוב לח:ג) | [equivalent] | Feminine: a woman girds her loins (Prov 31:17), not "like a man" (Job). |
| 6 | *Inurta imittu u šumēlu* | `נִינוּרְתָּה – ימין ושמאל` | `מָחַץ בְּיוֹם-אַפּוֹ מְלָכִים` (תהלים קי:ה); `כִּי מִימִינִי בַּל-אֶמּוֹט` (תהלים טז:ח) | [equivalent] | The warrior god, son of Mullissu, beside the king. |
| 7 | *ayyābīšu ina šapal šēpēšu* | `את צָרָיו תחת רגלי[ו]` | `עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | [equivalent] | Lines 6–7 have Ps 110's sequence: the god at the right, the enemies under the feet. Our proposal. |
| b.e.9 | *tuqun* | `תיקון` | `מְעֻוָּת לֹא יוּכַל לִתְקֹן` (קהלת א:טו) | [cognate] | |
| r.6 | *Mullissu dulla* | `את מוליסו פָּאֲרוּ!` | `הַלְלוּ אֶת-יְהוָה כָּל-גּוֹיִם` (תהלים קיז:א) | [equivalent] | *dalālu* `פאר` (decision 2). |

### Parallels index (S06)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| o.2–o.3 | *utaqqan* | `אתקן` | `מְעֻוָּת לֹא יוּכַל לִתְקֹן` (קהלת א:טו) | [cognate] | |
| r.3 | *assēme* | `שמעתי` | `וַיִּשְׁמַע אֱלֹהִים אֶת נַאֲקָתָם` (שמות ב:כד) | [equivalent] | With r.2 *usutu* `עזרה`. |
| r.6, r.8 | *irgumūni* | `ניבא`; `אשר ניבא` | `הַנָּבִיא אֲשֶׁר יִנָּבֵא לְשָׁלוֹם` (ירמיהו כח:ט) | [equivalent] | NA subjunctive on a singular verb: "he prophesied", not Parpola's ambiguous plural. |
| t.e.11 | *Tašmetu-ereš* | `[תַּ]שְׁמֵטוּ־אֵרֵשׁ` | `כִּי מֵיְהוָה שְׁאִלְתִּיו` (שמואל א א:כ); `וַיִּתֵּן יְהוָה לִי אֶת שְׁאֵלָתִי אֲשֶׁר שָׁאַלְתִּי מֵעִמּוֹ` (שמואל א א:כז) | [equivalent] | A child's name from *erēšu* = `שאל`; there the mother asks, here the goddess. Our proposal. |

### Parallels index (S07)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| o.1 | *Mullissu-kabtat raggintu* | `מוּלִּיסּוּ־כַּבְתַּת, הנביאה` | `אֶל חֻלְדָּה הַנְּבִיאָה` (מלכים ב כב:יד); `כָּל-כְּבוּדָּה בַת-מֶלֶךְ פְּנִימָה` (תהלים מה:יד) | [equivalent]; [cognate] (*kabātu*) | The only SAA 9 text headed by the prophetess's name. |
| o.2 | *abat šarrati Mullissi … lā tapallah Aššur-bani-apli* | `דבר המלכה מוליסו הוא: אל תירא, אַשּׁוּר־בָּנִי־אַפְלִי!` | `אַל תִּירָא אַבְרָם` (בראשית טו:א) | [equivalent] | Gen 15:1 has the same three elements in the same order: the word, "fear not", the name. |
| o.3, o.6 | *adi kî ša aqbûni eppašūni addanakkanni … ahaṣṣinka* | `עד – כאשר אמרתי – אעשה, אתן לך … [אגו]נן עליך` | `כִּי לֹא אֶעֱזָבְךָ עַד אֲשֶׁר אִם עָשִׂיתִי אֵת אֲשֶׁר דִּבַּרְתִּי לָךְ` (בראשית כח:טו) | [equivalent] | Protection "until I have done what I said", to an heir in danger (Jacob at Bethel). Parpola's "promised" hides "said". Our proposal. |
| o.4 | *ša-ziqnāni … ša-rēšāni* | `בעלי הזקן … הסריסים` | `וְנָתַן לְסָרִיסָיו וְלַעֲבָדָיו` (שמואל א ח:טו) | [equivalent] | |
| o.5 | *atta šarrūtu ina muhhišunu tuppašūni* | `[את]ה מלכות עליהם תעשה` | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | The same phrase, pronoun first. |
| o.7 | *pitūtu irakkas* | `נזר יקשור` | `וַיִּתֵּן עָלָיו אֶת הַנֵּזֶר וְאֶת הָעֵדוּת` (מלכים ב יא:יב) | [equivalent] | "Your father" restored. |
| o.8 | *šarrāni ša mātāti ana ahēʾiš iqabbûni* | `[מלכ]י הארצות זה אל זה יאמרו` | `וַיֹּאמְרוּ אִישׁ אֶל רֵעֵהוּ הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [equivalent] | |
| o.9 | *[alkāni ni]llik … šarru šībī rāši* | `[לאמור: "לכו, נ]לכה … המלך – עדים לו` | `וְהָלְכוּ עַמִּים רַבִּים וְאָמְרוּ לְכוּ וְנַעֲלֶה אֶל הַר יְהוָה` (ישעיהו ב:ג); `וְהָלְכוּ גּוֹיִם רַבִּים וְאָמְרוּ לְכוּ וְנַעֲלֶה אֶל הַר יְהוָה` (מיכה ד:ב); `יִתְּנוּ עֵדֵיהֶם וְיִצְדָּקוּ` (ישעיהו מג:ט) | [equivalent] | **"Come" is a restoration**; "let us go" is preserved. |
| o.10 | *ana abbēni ab abbēni išīmūni* | `לאבותינו, לאבות אבותינו, גזרו` | `אֲשֶׁר לֹא רָאוּ אֲבֹתֶיךָ וַאֲבוֹת אֲבֹתֶיךָ` (שמות י:ו) | [equivalent] | |
| o.11 | *šû ina birtunni liprus* | `[הו]א בינינו יפסוק!` | `וְשָׁפַט בֵּין הַגּוֹיִם וְהוֹכִיחַ לְעַמִּים רַבִּים` (ישעיהו ב:ד); `וְשָׁפַט בֵּין עַמִּים רַבִּים` (מיכה ד:ג); `יִשְׁפֹּט יְהוָה בֵּינִי וּבֵינֶיךָ` (בראשית טז:ה) | [equivalent]; [divergence] | *parāsu* = `פסק` (LH), not `שפט` (*šapāṭu* is not in the line). The arbiter of the nations is the Assyrian king, not Zion's God. Our proposal. |
| o.13 | *tahūmāni tukallamšunu* | `תחומים תראה להם` | `יַצֵּב גְּבֻלֹת עַמִּים` (דברים לב:ח); `אַתָּה הִצַּבְתָּ כָּל-גְּבוּלוֹת אָרֶץ` (תהלים עד:יז); `וְאָסִיר גְּבוּלֹת עַמִּים` (ישעיהו י:יג) | [equivalent]; [divergence] | In Isaiah the king of Assyria boasts that he **removed** the borders of the peoples; here the goddess promises that he will **show** them their borders. Our proposal. |
| o.13 | *hūlāni ina šēpēšunu išakkan* | `מסילות ברגליהם ישים` | `מְסִלּוֹת בִּלְבָבָם` (תהלים פד:ו) | [equivalent] | Same construction; cf. Gilgameš III 18 *kibsī milki išakkan ana šēpīni*. |
| o.14 | *kî Elamti Gimir agammar* | `כְּעֵילָם – את גֹּמֶר אֲכַלֶּה` | `בְּנֵי יֶפֶת גֹּמֶר וּמָגוֹג` (בראשית י:ב); `וְשִׁלַּחְתִּי אַחֲרֵיהֶם אֶת הַחֶרֶב עַד כַּלּוֹתִי אוֹתָם` (ירמיהו מט:לז) | [cognate] (name); [equivalent] | The Akkadian pun *Gimir agammar* is noted, not kept (renderings §6). |
| o.14 | *šanītu laqbakka* | `שנית – אומרה לך` | `וַיְהִי דְבַר יְהוָה אֵלַי שֵׁנִית לֵאמֹר` (ירמיהו א:יג) | [equivalent] | |
| r.1 | *talla giṣṣu ašabbir* | `את … הנעצוץ אשבור` | `תַּחַת הַנַּעֲצוּץ יַעֲלֶה בְרוֹשׁ` (ישעיהו נה:יג); `וּבָעֲרָה וְאָכְלָה שִׁיתוֹ וּשְׁמִירוֹ בְּיוֹם אֶחָד` (ישעיהו י:יז) | [equivalent]; [divergence] | In Isa 10:17 the thorns are Assyria itself. Our proposal. |
| r.2 | *adammumāte ana sarbi utâra* | `את הצרעות ל*דלעת* אהפוך` | `וְשָׁלַחְתִּי אֶת הַצִּרְעָה לְפָנֶיךָ` (שמות כג:כח); `וְגַם אֶת הַצִּרְעָה יְשַׁלַּח יְהוָה אֱלֹהֶיךָ בָּם` (דברים ז:כ) | [divergence] | The hornet is God's weapon in the Torah, the danger neutralized here. |
| r.4 | *atta taqabbi mā mīnu …* | `אתה תאמר, לאמור: "מה – 'כנדל, אֶנְגּוּרַתִּי'?"` | `הֲלוֹא תַגִּיד לָנוּ מָה אֵלֶּה לָּךְ` (יחזקאל לז:יח); `מָה הָעֲבֹדָה הַזֹּאת לָכֶם` (שמות יב:כו); `מָה אַתָּה רֹאֶה יִרְמְיָהוּ` (ירמיהו א:יא); `מָה אַתָּה רֹאֶה עָמוֹס` (עמוס ח:ב) | [equivalent]; [divergence] | The oracle quotes the hearer's question and answers it; in Jeremiah and Amos God asks the prophet. Our proposal. |
| r.5 | *ina Muṣur errab … uṣṣā* | `בְּמִצְרַיִם אבוא … אצא` | `הִנֵּה יְהוָה רֹכֵב עַל עָב קַל וּבָא מִצְרַיִם` (ישעיהו יט:א); `יְהוָה יִשְׁמָר-צֵאתְךָ וּבוֹאֶךָ` (תהלים קכא:ח) | [divergence]; [equivalent] | The god enters Egypt openly on a cloud in Isaiah, the goddess creeps in like a centipede here. Our proposal. |
| r.6 | *ša Mullissu ummašūni … ša Belet-Arbail tārīssūni* | `אשר מוליסו אמו … אשר גבירת ארבאיל אומנתו` | `כְּאִישׁ אֲשֶׁר אִמּוֹ תְּנַחֲמֶנּוּ כֵּן אָנֹכִי אֲנַחֶמְכֶם` (ישעיהו סו:יג); `כִּי תֹאמַר אֵלַי שָׂאֵהוּ בְחֵיקֶךָ כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב); `וְהָיוּ מְלָכִים אֹמְנַיִךְ וְשָׂרוֹתֵיהֶם מֵינִיקֹתַיִךְ` (ישעיהו מט:כג) | [equivalent]; [divergence] | The same "whose mother" construction; Moses refuses the nurse's role that the goddess claims. |
| r.7 | *kî tārīti ina muhhi giššīya anaššika* | `כאומנת על צִדִּי אשאך` | `עַל צַד תִּנָּשֵׂאוּ וְעַל בִּרְכַּיִם תְּשָׁעֳשָׁעוּ` (ישעיהו סו:יב); `וּבְנוֹתַיִךְ עַל צַד תֵּאָמַנָה` (ישעיהו ס:ד) | [equivalent] | `נשא` + `צד` as in Isa 66:12, and the nurse root אמן as in Isa 60:4: r.6–r.10 and Isa 66:11–13 share the mother, the carrying on the side, the nursing and the play. Our proposal. |
| r.8 | *armannu ina birit tulêya ašakkanka* | `*מִשְׁמֵשׁ* – בין שדיי אשימך` | `צְרוֹר הַמֹּר דּוֹדִי לִי בֵּין שָׁדַי יָלִין` (שיר השירים א:יג); `כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ` (שיר השירים ד:ג) | [equivalent]; [absent] | **Rank-3 correction:** *armannu* is "apricot" in the dictionary (written "mountain apple"); the cognate of `רִמּוֹן` is *nurmû*. Parpola's "pomegranate" would have manufactured a cognate and a Song 4:3 echo. Song 1:13's "between my breasts" is the real parallel. |
| r.9 | *ērāk anaṣṣarka … hilpaka addan* | `עֵרָה אני, אנצרך … חֲלָבְךָ אתן` | `אֲנִי יְשֵׁנָה וְלִבִּי עֵר` (שיר השירים ה:ב); `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן` (תהלים קכא:ד); `וְיָנַקְתְּ חֲלֵב גּוֹיִם וְשֹׁד מְלָכִים תִּינָקִי` (ישעיהו ס:טז); `לְמַעַן תִּינְקוּ וּשְׂבַעְתֶּם מִשֹּׁד תַּנְחֻמֶיהָ` (ישעיהו סו:יא) | [cognate] (*êru*); [equivalent]; [cognate?] (*hilpu*) | *ērāk* is *êru* "be awake" (cognate עור/ער), not *ḫarādu*. |
| r.10 | *uṣur uṣur uppaška* | `"…יך – נְצֹר, נְצֹר!" – אעשה לך` | `וְעַל בִּרְכַּיִם תְּשָׁעֳשָׁעוּ` (ישעיהו סו:יב) | [equivalent] | A nursery game; Parpola's "play" interprets *epēšu*. |
| r.11 | *atta lā tapallah mūrī ša anāku urabbûni* | `אתה – אל תירא, עגלי, אשר אנוכי גידלתי!` | `וְאָנֹכִי תִרְגַּלְתִּי לְאֶפְרַיִם קָחָם עַל זְרוֹעֹתָיו` (הושע יא:ג); `וְאֶפְרַיִם עֶגְלָה מְלֻמָּדָה` (הושע י:יא); `בָּנִים גִּדַּלְתִּי וְרוֹמַמְתִּי וְהֵם פָּשְׁעוּ בִי` (ישעיהו א:ב) | [equivalent]; [divergence] | Hos 11:3 and 10:11 have the "I" (`אָנֹכִי`), the raising and the calf. |

### Parallels index (S08)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| o.2 | *kî annî [ilu] iqabbi* | `כז[את האל] אומר` | `כֹּה אָמַר יְהוָה צְבָאוֹת הִנְנִי שֹׁבֵר אֶת קֶשֶׁת עֵילָם` (ירמיהו מט:לה) | [equivalent] | **"God" restored.** *kî annî* = `כָּזֹאת`, not the messenger formula's `כֹּה`; the present tense "says". |
| o.3 | *attalak attalka* | `[הלכתי], באתי` | `אֶרֶץ אֶרֶץ אָרֶץ שִׁמְעִי דְּבַר יְהוָה` (ירמיהו כב:כט); `הֵיכַל יְהוָה הֵיכַל יְהוָה הֵיכַל יְהוָה הֵמָּה` (ירמיהו ז:ד) | [equivalent] | Repetition as prophetic speech. |
| o.4 | *5-šu 6-šu iqṭibi ina dāte* | `חמש פעמים, שש פעמים א[מ]ר; אחר כך` | `לְהַכּוֹת חָמֵשׁ אוֹ שֵׁשׁ פְּעָמִים אָז הִכִּיתָ אֶת אֲרָם עַד כַּלֵּה` (מלכים ב יג:יט) | [equivalent] | **Key finding:** a prophetic act repeated "five or six times", then the enemy "finished" (`כלה` = *gamāru*, r.2). The scribe records the performance. Our proposal. |
| o.6 | *ṣerru ša ina libbīša assadda* | `את הנחש אשר בתוכה משכתי (החוצה)` | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן; וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) | [equivalent] | |
| o.7 | *abtataq* | `ביתקתי` | `וּבִתְּקוּךְ בְּחַרְבוֹתָם` (יחזקאל טז:מ) | [cognate] | |
| o.7–o.8 | *narʾantu ahtepi … Elamtu ahappi* | `את הָאַלָּה ניפצתי … את עילם אנפץ` | `הִנְנִי שֹׁבֵר אֶת קֶשֶׁת עֵילָם רֵאשִׁית גְּבוּרָתָם` (ירמיהו מט:לה); `כִּכְלִי יוֹצֵר תְּנַפְּצֵם` (תהלים ב:ט) | [equivalent] | Elam's weapon broken first, then Elam (one verb, past then future). Our proposal. |
| b.e.9 | *ahīšu* | `זרועותיו` | `וּזְרֹעוֹת הַנֶּגֶב לֹא יַעֲמֹדוּ` (דניאל יא:טו) | [equivalent] | "Arms" = forces. |
| r.1 | *issi kaqqir issappan* | `עִם הקרקע יֻשְׁפַּל` | `הֵשַׁח הִשְׁפִּיל הִגִּיעַ לָאָרֶץ עַד עָפָר` (ישעיהו כה:יב); `יַשְׁפִּילֶנָּה יַשְׁפִּילָהּ עַד אֶרֶץ` (ישעיהו כו:ה) | [equivalent] | |
| r.2 | *Elamtu agammar* | `את עילם אֲכַלֶּה` | `וְשִׁלַּחְתִּי אַחֲרֵיהֶם אֶת הַחֶרֶב עַד כַּלּוֹתִי אוֹתָם` (ירמיהו מט:לז) | [equivalent] | Jer 49:35–37 (Elam's bow broken … until I have finished them) follows the same course as this tablet, a century later. |

### Parallels index (S09)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| o.1 | *kidinnu ša Mullissi* | `[בר חסות] של מוליסו` | `אֲשֶׁר בָּאת לַחֲסוֹת תַּחַת כְּנָפָיו` (רות ב:יב); `וְתַחַת-כְּנָפָיו תֶּחְסֶה` (תהלים צא:ד) | [equivalent] | The word is almost wholly restored. |
| o.3 | *šināma ina ilāni danna* | `[הן] הן עזות בָּאֵלִים` | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | [equivalent] | A stative ("are strong"), not Parpola's superlative. |
| o.4 | *iraʾʾāma u raʾāmšina* | `[אוהב]ות, ואת אהבתן` | `בְּאַהֲבָתוֹ וּבְחֶמְלָתוֹ הוּא גְאָלָם` (ישעיהו סג:ט) | [equivalent] | |
| o.5; r.2′ | *binūt qātēšina* | `מִבְנֵה יְדֵיהֶן` | `מַעֲשֵׂי יָדֶיךָ אַל-תֶּרֶף` (תהלים קלח:ח); `וּמַעֲשֵׂה יָדְךָ כֻּלָּנוּ` (ישעיהו סד:ז); `לְמַעֲשֵׂה יָדֶיךָ תִכְסֹף` (איוב יד:טו); `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב) | [equivalent]; [cognate] (*banû*) | A pun on the king's name *Aššur-bāni-apli* "Aššur creates an heir"; Ps 138:8 also has "do not let go" (o.17). |
| o.8; o.25 | *balāṭaka eršākūma arappuda ṣēru* | `[את חיי]ך שואלת אני, ומשוטטת אני בשדה` | `כָּמַהּ לְךָ בְשָׂרִי` (תהלים סג:ב); `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה) | [divergence]; [equivalent] | In Ps 63 man longs for God in a dry land; here the goddess longs for the king's life in the steppe. The same Akkadian as Gilgameš X *arappud ṣēra* (`משוטט אני בשדה`): he roams for fear of death, she for his life. Our proposal. |
| o.9 | *ētanabbir nārī u tāmāti* | `עוברת אני נהרות וְיַמִּים` | `כִּי תַעֲבֹר בַּמַּיִם אִתְּךָ אָנִי וּבַנְּהָרוֹת לֹא יִשְׁטְפוּךָ` (ישעיהו מג:ב) | [cognate] (*ebēru*); [divergence] | In Isaiah's "fear not" oracle (43:1) the people cross the waters with God; here the goddess crosses them for the king. Our proposal. |
| o.12–o.15 | *ētanakkalāni … ṣētāte sarabāte … anhākūma šaddalupūka* | `אוכלים אותי … שְׁרָבִים, סַגְרִירִים … יגעה אני, ונדוד־שינה בעבורך גופי` | `הָיִיתִי בַיּוֹם אֲכָלַנִי חֹרֶב וְקֶרַח בַּלָּיְלָה; וַתִּדַּד שְׁנָתִי מֵעֵינָי` (בראשית לא:מ) | [cognate] (*akālu*); [equivalent] | Jacob the shepherd: heat and frost "eat" him, his sleep flees – the same images in the same order. Our proposal. |
| o.13 | *ṣētāte* | `שְׁרָבִים` | `וְלֹא יַכֵּם שָׁרָב וָשָׁמֶשׁ` (ישעיהו מט:י) | [equivalent] | |
| o.14 | *iltanappāta banû lānī* | `נוגעים (ב)גופי היפה` | `שְׁלַח נָא יָדְךָ וְגַע אֶל עַצְמוֹ וְאֶל בְּשָׂרוֹ` (איוב ב:ה) | [equivalent] | |
| o.15 | *anhākūma* | `יגעה אני` | `לֹא יִיעַף וְלֹא יִיגָע` (ישעיהו מ:כח); `הוֹגַעְתַּנִי בַּעֲוֹנֹתֶיךָ` (ישעיהו מג:כד); `דָּלְפָה נַפְשִׁי מִתּוּגָה` (תהלים קיט:כח) | [divergence]; [equivalent]; [cognate?] (*dalāpu*) | The God of Isa 40 never tires; the goddess is tired and says so. |
| o.16 | *ina puhri ilāni kalāme aqṭibi balāṭaka* | `באספת האלים כולם אמרתי את חייך` | `אֱלֹהִים נִצָּב בַּעֲדַת-אֵל` (תהלים פב:א); `וְכָל צְבָא הַשָּׁמַיִם עֹמֵד עָלָיו מִימִינוֹ וּמִשְּׂמֹאלוֹ` (מלכים א כב:יט) | [equivalent] | The goddess as advocate in the divine council. |
| o.17 | *lā urammâkka ina pān ilāni* | `לא יַרְפּוּךָ לפני האלים` | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ח); `לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ` (יהושע א:ה); `מַעֲשֵׂי יָדֶיךָ אַל-תֶּרֶף` (תהלים קלח:ח) | [equivalent] | The identical Hebrew comes from EST's fixed *ramû* D = `הרפה` (chosen by meaning, not a shared root); the promise to an heir is the same. |
| o.18–o.19 | *naggalapāya harrudda ittanaššâka* | `כתפיי שקודות; נושאות אותך` | `וּבְנֹתַיִךְ עַל כָּתֵף תִּנָּשֶׂאנָה` (ישעיהו מט:כב); `הַנְּשֻׂאִים מִנִּי רָחַם` (ישעיהו מו:ג); `כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ` (דברים א:לא) | [equivalent] | *ḫurrudu* (from *ḫarādu*) `שקוד`. |
| o.20 | *ina šapātēya ētanarriš balāṭaka* | `בשפתיי שואלת אני את חייך` | `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה) | [equivalent] | In the psalm the king asks life; here the goddess asks it for him. |
| o.21 | *balāṭu tušattar* | `חיים תוסיף` | `אֹרֶךְ יָמִים עוֹלָם וָעֶד` (תהלים כא:ה) | [equivalent] | `עוֹלָם` not in our Hebrew. |
| o.26 | *ayābka aṭabbah* | `אט[בח] את צָרְךָ` | `כַּשֶּׂה לַטֶּבַח יוּבָל` (ישעיהו נג:ז) | [cognate] | |
| o.27 | *ana mātīšu itūra* | `ולארצו ש[ב]` | `וְשָׁמַע שְׁמוּעָה וְשָׁב לְאַרְצוֹ` (מלכים ב יט:ז) | [divergence] | Isaiah's oracle sends the Assyrian king home; here the Assyrian king's enemy goes home. Our proposal. |
| r.3′ | *lūballiṭṭa ana dāri* | `יְחַיּוּ לעד!` | `יְהוָה יִשְׁמְרֵהוּ וִיחַיֵּהוּ` (תהלים מא:ג) | [equivalent] | |
| r.4′ | *ša pî Dunnaša-amur* | `מִפִּי דֻּנָּשָׁא־אָמוּר` | `וַיִּכְתֹּב בָּרוּךְ מִפִּי יִרְמְיָהוּ אֵת כָּל דִּבְרֵי יְהוָה` (ירמיהו לו:ד) | [equivalent] | |
| r.6′ | *Nisannu … Bel-šadduʾa* | `נִיסָן … בֵּל־שַׁדּוּאָ` | `בַּחֹדֶשׁ הָרִאשׁוֹן הוּא חֹדֶשׁ נִיסָן` (אסתר ג:ז); `אֵלִי צוּרִי אֶחֱסֶה-בּוֹ` (תהלים יח:ג) | [cognate] (month); [equivalent] (name: "Bel is my mountain") | 650 BCE. |
| r.7′ | *šakin māt Ṣurri* | `סגן ארץ צֹר` | `וְאַתָּה בֶן אָדָם שָׂא עַל צֹר קִינָה` (יחזקאל כז:ב) | [cognate] (name) | |

### Parallels index (S10)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| r.3′ | *šarrūtu iddan-* | `מלכות יתן` | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | [equivalent] | |
| r.7′ | *lurrik* | `אאריך` | `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ הוּא וּבָנָיו בְּקֶרֶב יִשְׂרָאֵל` (דברים יז:כ) | [equivalent] | The object is lost; the parallel stands on the verb only. |
| l.e.2 | *raggintu* ({mi₂}GUB.BA) | `הנביאה` | `אֶל חֻלְדָּה הַנְּבִיאָה` (מלכים ב כב:יד); `מַדּוּעַ בָּא הַמְשֻׁגָּע הַזֶּה אֵלֶיךָ` (מלכים ב ט:יא) | [equivalent] | The logogram is that of *maḫḫûtu* "ecstatic" (EST *maḫḫû* = `מְשֻׁגָּע`); the edition reads *raggintu*. |

### Parallels index (S11)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| r.4 | *nakru akaššad* | `את האויב אשיג` | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם` (תהלים יח:לח) | [equivalent] | |
| r.5 | *utaqqan* | `אתקן` | `מְעֻוָּת לֹא יוּכַל לִתְקֹן` (קהלת א:טו) | [cognate] | |
| r.6 | *ina digilīya pānî* | `במחזי הר[אשון]` | `הָיָה דְבַר יְהוָה אֶל אַבְרָם בַּמַּחֲזֶה` (בראשית טו:א); `וּכְכֹל הַחִזָּיוֹן הַזֶּה כֵּן דִּבֶּר נָתָן אֶל דָּוִד` (שמואל ב ז:יז) | [equivalent] | A report of a vision, not a spoken oracle; Nathan's vision is about the dynasty. |
| r.7, r.11, r.13 | *kakkabtu ša hurāṣi*; *kakkibī* | `כוכב של זהב`; `כוכבים` | `הַבֶּט נָא הַשָּׁמַיְמָה וּסְפֹר הַכּוֹכָבִים` (בראשית טו:ה) | [divergence] | The golden star is a cult object (Ištar's emblem), not the sky. |
| r.8 | *paššūru … kusāpi danni* | `שולחן; קב אחד פת עזה` | `וְנָתַתָּ עַל הַשֻּׁלְחָן לֶחֶם פָּנִים לְפָנַי תָּמִיד` (שמות כה:ל); `תַּעֲרֹךְ לְפָנַי שֻׁלְחָן` (תהלים כג:ה) | [equivalent] | The offering table with bread before the deity. |
| r.12 | *[ina] rēšēya* | `[ל]מראשותיי` | `וַיָּשֶׂם מְרַאֲשֹׁתָיו` (בראשית כח:יא) | [equivalent] | Stands on the restored *ina*. |

### Key findings
**The Bible.**
1. **SAA 9 8 and 2 Kgs 13:18–19**: the scribe records that the prophet said "I have gone, I have come" "five, six times", and the oracle ends "I will finish Elam"; Elisha rebukes the king who struck the ground three times instead of "five or six times": `אָז הִכִּיתָ אֶת אֲרָם עַד כַּלֵּה`. A repeated prophetic act whose count decides the victory, and the same end ("finish"), in both. Our fixed *gamāru* = `כִּלָּה` makes the verbal link visible.
2. **SAA 9 8 and Jer 49:35–37**: break Elam's weapon (the mace / `קֶשֶׁת עֵילָם`), then Elam itself, "until I have finished them" (`עַד כַּלּוֹתִי אוֹתָם`). The biblical oracle against Elam follows the course of the Assyrian one.
3. **SAA 9 7 o.8–o.11 and Isa 2:2–4 / Mic 4:1–3**: the kings of the lands say to one another "[come,] let us go to Assurbanipal … let him decide between us"; the nations say "come, let us go up … and he shall judge between the nations". *parāsu* = `פסק`, not `שפט`, so the parallel shows in the structure, not in a borrowed verb; "come" is a restoration. The Assyrian king plays the role that Isaiah gives the God of Zion.
4. **SAA 9 7 o.13 and Isa 10:13**: the goddess promises that the Assyrian king will "show" the kings their borders (*taḫūmu* `תחומים`); Isaiah's Assyrian king boasts `וְאָסִיר גְּבוּלֹת עַמִּים`. Deut 32:8 / Ps 74:17: God fixes the borders.
5. **SAA 9 7 o.3–o.6 and Gen 28:15**: protection "until I have done what I said" (`עַד אֲשֶׁר אִם עָשִׂיתִי אֵת אֲשֶׁר דִּבַּרְתִּי לָךְ`), to an heir whose succession is in danger; Parpola's "promised" hides the verb "said".
6. **SAA 9 7 r.6–r.10 and Isa 66:11–13 (with Isa 60:4, Num 11:12)**: "whose mother is Mullissu" (`אֲשֶׁר אִמּוֹ`), "on my side I will carry you" (`עַל צַד תִּנָּשֵׂאוּ`; `עַל צַד תֵּאָמַנָה` with the nurse's root), nursing, play: Isaiah's divine mother has the Assyrian goddess's images in nearly the same order. Moses refuses to be the people's `אֹמֵן`; the goddess claims the role.
7. **Rank-3 correction, SAA 9 7 r.8**: *armannu* is not the pomegranate (dictionary: "apricot"; the cognate of `רִמּוֹן` is *nurmû*). Parpola's "pomegranate" would have created a false cognate and a Song 4:3 echo; the real parallel is Song 1:13 `בֵּין שָׁדַי יָלִין`.
8. **SAA 9 9 o.12–o.15 and Gen 31:40**: the goddess consumed (*akālu*, cognate) by heat and rain, sleepless for the king – Jacob the shepherd `אֲכָלַנִי חֹרֶב וְקֶרַח בַּלָּיְלָה; וַתִּדַּד שְׁנָתִי מֵעֵינָי`. The goddess is the shepherd, the king the flock.
9. **SAA 9 9 o.15 and Isa 40:28–31**: the goddess is "tired" (*anāḫu* `יגע`); Isaiah's God `לֹא יִיעַף וְלֹא יִיגָע` [divergence]; Isa 43:24 (`הוֹגַעְתַּנִי`) and 63:9 are closer to the Assyrian picture.
10. **SAA 9 9 o.5 + o.17 and Ps 138:8**: "the creation of their hands" + "they will not let you go" ↔ `מַעֲשֵׂי יָדֶיךָ אַל-תֶּרֶף`: both elements in one verse; and Deut 31:6, 8 / Josh 1:5 (`לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ`), the same promise to an heir.
11. **SAA 9 9 o.8, o.20 and Ps 21:5**: `חַיִּים שָׁאַל מִמְּךָ` – in the psalm the king asks God for life; in the oracle the goddess asks life for the king (*erēšu* = `שאל`). Ps 63:2: man longs for God in a dry land; the goddess longs for the king's life in the steppe.
12. **SAA 9 9 o.9 and Isa 43:1–2**: the "fear not" oracle in which God is with Israel when it passes through waters and rivers; the goddess crosses rivers and seas herself.
13. **SAA 9 5 3 and Jer 31:17**: God hears Ephraim "like an untrained calf"; Mullissu hears the cry of her calf – on Parpola's restoration.
14. **Other**: Gen 15:1's "the word … fear not … name" order in SAA 9 7 o.2; Ps 110:1, 5 (the god at the king's right, the enemies under his feet) in SAA 9 5 6–7; Exod 23:28 / Deut 7:20 (the hornet as God's weapon) against SAA 9 7 r.2 (the wasps neutralized); 2 Kgs 19:7 (the Assyrian king "returns to his land") against SAA 9 9 o.27; Isa 19:1 (God enters Egypt on a cloud) against SAA 9 7 r.5 (the goddess creeps in like a centipede).

**The ancient mind.**
1. **The goddess's body.** She kneels (5), carries the child on her hip, puts him between her breasts, stays awake at night, nurses by day, plays at dawn (7), roams the steppe, crosses rivers and seas, is "eaten" by sun and rain, her beautiful body touched, tired and sleepless (9), and her strong hands and alert shoulders carry him (9). Divine love is spoken of as bodily cost – the opposite of Isaiah's tireless God.
2. **Two divine mothers.** Mullissu is the mother, Ištar of Arbela the nurse (7 r.6; 9 o.1–o.2, r.1′): the image of a royal child raised by his mother and the palace wet-nurses, projected onto the gods; the king is the calf of the divine cow (5; 7 r.11).
3. **The prophet as performer, the scribe as reporter.** The scribe writes down the repetitions ("five, six times", 8 o.4), the prophet's riddle and the hearer's question ("what is 'like a centipede, *enguratti*'?", 7 r.3–r.5), a vision with cult objects (11), and closes with name, city and date (9 r.4′–r.7′). The oracle is an event, not only a text.
4. **Names as prayers and testimonies:** Mullissu-kabtat "Mullissu is honoured", Dunnaša-amur "I have seen her strength", Tašmetu-ereš "Tašmetu requested (him)" – a child given in answer to a divine wish, like Samuel's name.
5. **The king as divine property (*kidinnu*):** the protected status of the old cities, applied to a person.
6. **The world of the oracles:** the queen mother Naqia (5); the crown prince in the house of succession (672–669) and the court of the bearded and the eunuchs (7); Egypt (Esarhaddon's campaigns 674, 671), Gimir (the Cimmerians) and Elam (7, 8); the war with Teumman of Elam (8, Parpola: 653); the civil war with Šamaš-šumu-ukin (9, Nisan 650). The oracles answer the court's fears of the moment.
7. **Wordplay** as part of the message: *Gimir agammar* (7 o.14), *Aššur-bāni-apli* / *binūt qātē* (9 o.5), *banû* "beautiful" beside *binûtu* (9 o.14), the figura etymologica *nipšu* / *napāšu* (7 r.1), *kinṣāya kanṣa* (5 2).

### Open decisions
1. ***êru* "be awake" (S07 r.9 `עֵרָה אני`) and T2's *etku* (SAA 9 2 iii 1′ `היה ער`, iv 5′ `עֵרָה אני`)** share `ער`. *êru* is the cognate (עור), so we propose to keep `ער` for *êru* and give *etku* "alert, vigilant" another word (`דָּרוּךְ`? `עֵרָנִי`?) – the coordinator decides; until then two lemmas share one Hebrew word.
2. ***dalālu* "praise" = `פֵּאֵר`** (S05 r.6), as Enūma eliš VII 24 (*lidlulū* `יְפָאֲרוּ`), because this corpus reserves `הִלֵּל` for *nâdu* D (§2.6). The wisdom corpus has *dalālu* = `הִלֵּל` (Ludlul's title) and Enūma eliš has *nâdu* = `שִׁבֵּחַ`: the three corpora need one harmonization (*dalālu*, *nâdu*).
3. ***armannu*** = `*מִשְׁמֵשׁ*` (S07 r.8), against the brief's `רִמּוֹן` [cognate] and Parpola's "pomegranate" (see key finding 7). If the coordinator prefers to follow the edition, `*רימון*` with a note that it is not the cognate.
4. ***giššu* "hip" = `צַד`** (S07 r.7; the renderings' `מָתְנַי?` would collide with *qablu*). Etana uses `צד` for *idu* "side, arm" (`על צדיי`): two lemmas, one Hebrew across corpora; `צַד` is kept because it is the Bible's word for carrying a child (Isa 60:4, 66:12).
5. ***naglabu* "shoulder" = `כָּתֵף`** (S09 o.18), as Gilgameš's *būdu* `כתף`: two lemmas, one Hebrew. `שְׁכֶם` is the alternative.
6. ***šarbu*** has two Hebrew words: `*דלעת*` in S07 r.2 (ORACC's sense "squash" in that line, uncertain) and `סַגְרִיר` in S09 o.13 ("rainy season, shower"). ORACC's split followed; S07 r.2's sense is open.
7. ***binûtu* = `מִבְנֶה`** (S09 o.5, r.2′: `מִבְנֵה יְדֵיהֶן`), to keep the root *banû* = `בנה` and the pun on the king's name; the unusual Hebrew is the price. Alternatives: `מַעֲשֵׂה יְדֵיהֶן` (collides with *epēšu* = `עשה`), `יְצִיר כַּפֵּיהֶן` (יצר reserved for *eṣēru*).
8. ***kidinnu* = `בַּר חָסוּת`** (S09 o.1): the renderings' own suggestion; `חָסוּת` alone would render the status, not the person.
9. ***diglu* "vision" = `מַחֲזֶה`** (S11 r.6). In two Sumerian texts `מחזה` renders *gaba* "breast, front" (a Hebrew homograph from חזה "chest"); the coordinator may prefer `חִזָּיוֹן` (taken, as `חזיון לילה`, by the temple corpus's *maš-ĝi₆*).
10. **The addressee of SAA 9 11** is feminine (`הָלַכְתְּ` r.2, `שְׁבִי` r.5); NA final *-i* can be an overhanging vowel, but two feminine forms in a row make it likely; Parpola leaves it open.
11. **SAA 9 7 o.13 *išakkan*** (GAR-*an*): ORACC normalizes 3 m. sg. (`ישים`), Parpola translates 2nd person; the writing allows both.
12. **SAA 9 5 2 "my legs are bent"**: the goddess crouching (NA *kamāsu* "stay") or the mother kneeling in prayer (heard in line 3)?
13. ***hilpu* = `חָלָב` [cognate?]** (S07 r.9): rare word; the cognate is likely but unproven.
14. ***kî annî … iqabbi* = `כָּזֹאת … אוֹמֵר`** (S08 o.2), not the messenger formula `כֹּה אָמַר`: a rule for the corpus (if the Advice or later texts have *kî annî*).
15. ***aḫu* "arm(s), forces" = `זְרוֹעַ`** (S08 b.e.9), as EST (*ahīkunu* `זרועותיכם`); T2's *izīru* is also `זְרוֹעַ` – a pre-existing two-lemma collision for the coordinator.
16. ***hallālatti* = `כְּנַדָּל`** and ***enguratti*** transliterated `אֶנְגּוּרַתִּי` (S07 r.3–r.5): the second word is unknown; a translation could replace the transliteration later.

### Deviations from the corpus renderings (with reasons)
- *armannu* `*מִשְׁמֵשׁ*`, not the brief's `רִמּוֹן` [cognate] (decision 3; the dictionary and the cognate *nurmû*).
- *giššu* `צַד`, not `מָתְנַי?` (renderings §3, with its own question mark): *qablu* = `מָתְנַיִם` is fixed (T1), and `צַד` is the Bible's word for carrying a child.
- *ērāk* (S07 r.9) is *êru*, not *ḫarādu*: rendered `עֵרָה אני` [cognate], not `שָׁקַד` (which stays for *ḫarādu*, and is used for its derivative *ḫurrudu*, S09 o.18 `שקודות`).
- *dalālu* `פֵּאֵר` (new; decision 2).
- *kidinnu*: `בַּר חָסוּת`, as renderings §4 suggested; no deviation.
- *ṣerru* `נָחָשׁ` and *taḫūmu* `תְּחוּם`: as the coordinator's message of 2026-10-22 (the brief's `פֶּתֶן` and `גְּבוּלוֹת` dropped).
- §2.10 *atabbi ayābka aṭabbaḫ*: the fixed string `אָקוּם, אֶטְבַּח אֶת צָרְךָ` puts the object after the verb, while the tablet (S09 o.26) has it before; followed to the letter, noted in the entry.

### Proposals for the corpus renderings
New shared words fixed in S04–S11 (exact strings as used; lines):
- ***êru*** "be awake" = **`עֵר`** [cognate] (S07 r.9 `עֵרָה אני`) – decision 1.
- ***tārītu*** = **`אוֹמֶנֶת`** (S07 r.6 `אומנתו`, r.7 `כאומנת`), as renderings §3; *kî tārīti* = `כְּאוֹמֶנֶת`.
- ***giššu*** "hip" = **`צַד`** (S07 r.7 `על צִדִּי אשאך`).
- ***armannu*** = **`*מִשְׁמֵשׁ*`** (S07 r.8) – decision 3.
- ***tulû*** "breast" = **`שַׁד`** (S07 r.8 `בין שדיי`), as the law and wisdom corpora.
- ***hilpu*** = **`חָלָב`** [cognate?] (S07 r.9 `חֲלָבְךָ אתן`).
- ***uṣur uṣur*** = **`נְצֹר, נְצֹר!`** (S07 r.10); *unnānu* untranslated `…`.
- ***ša mūšīya*** = **`בְּלֵילִי`** (S07 r.9); ***ša kal ūme*** = **`כל היום`**.
- ***hūlu*** = **`מְסִלָּה`** (S07 o.13 `מסילות ברגליהם ישים`); ***bêlu*** = **`מָשַׁל`** (o.13 `[תמשו]ל (בהם)`); ***kullumu*** = `הֶרְאָה` (o.13 `תראה להם`).
- ***pitūtu*** = **`נֵזֶר`** (S07 o.7 `נזר יקשור`).
- ***ša-ziqnāni*** / ***ša-rēšāni*** = **`בעלי הזקן`** / **`הסריסים`** (S07 o.4, EST); ***halpatu*** = **`*מחליפי*`** (o.4).
- ***ana ahēʾiš*** = **`זה אל זה`** (S07 o.8); ***alkāni nillik*** = **`לכו, נלכה`** (o.9); ***šību*** = **`עֵד`** (o.9 `עדים לו`); ***mīnu ša*** = **`את אשר`** (o.10); ***abbēni ab abbēni*** = **`לאבותינו, לאבות אבותינו`**; ***šiāmu*** (alone) = **`גָּזַר`** (o.10).
- ***parāsu*** "decide" = **`פָּסַק`** (S07 o.11 `בינינו יפסוק`), never `שפט`.
- ***šanītu laqbakka*** = **`שנית – אומרה לך`** (S07 o.14).
- ***giṣṣu*** = **`נַעֲצוּץ`**; ***amurdinnu*** = **`*ורד־הבר*`**; ***nipšu*** = **`גִּיזָה`**; ***napāšu*** = **`סָרַק`**; ***adammūmu*** = **`צִרְעָה`**; ***târu* D "turn into"** = **`הָפַךְ`** (S07 r.1–r.2).
- ***hallālatti*** = **`כְּנַדָּל`**; ***enguratti*** = **`אֶנְגּוּרַתִּי`** (transliterated; S07 r.3–r.5); ***Muṣur*** = `מִצְרַיִם`.
- ***dibbī ša*** = **`דברים של`** (S08 o.1); ***kî annî*** = **`כָּזֹאת`** (S08 o.2, r.1); ***ilu*** (unnamed) = **`הָאֵל`**; ***attalak attalka*** = **`הלכתי, באתי`** (alāku + ventive = `בא`); ***5-šu 6-šu*** = **`חמש פעמים, שש פעמים`**; ***ina dāte*** = **`אחר כך`**; ***u mā*** = **`ו(אמר):`** (S08 o.7–o.8).
- ***narʾantu*** = **`אַלָּה`**, always vocalized (S08 o.5 `[הָאַ]לָּה`, o.7 `הָאַלָּה`); ***šadādu*** = **`מָשַׁךְ`** (o.6 `משכתי`); ***aḫu*** "arms, forces" = **`זְרוֹעַ`** (b.e.9 `זרועותיו`); ***issi kaqqir*** = **`עִם הקרקע`**; ***sapānu* N** = **`הֻשְׁפַּל`** (r.1 `יֻשְׁפַּל`).
- ***kidinnu*** = **`בַּר חָסוּת`** (S09 o.1).
- ***binûtu*** = **`מִבְנֶה`**, *binūt qātēšina* = **`מִבְנֵה יְדֵיהֶן`** (S09 o.5, r.2′).
- ***raʾāmu*** (infinitive) = **`אהבה`** (S09 o.4 `ואת אהבתן`).
- ***libba šakānu* Š** = **`שׂם לו (אומץ) לב`** (S09 o.7).
- ***eršu*** / ***erēšu*** = **`שׁוֹאֵל`** / **`שָׁאַל`** (S09 o.8, o.20, o.25 `את חייך שואלת אני`); never `בִּקֵּשׁ` with a life as object (`בִּקֵּשׁ נֶפֶשׁ`).
- ***arappuda ṣēru*** = **`משוטטת אני בשדה`** (S09 o.8, o.25), Gilgameš's string in the feminine.
- ***ebēru*** G = **`עָבַר`** (S09 o.9, o.11); ***etēqu*** = **`חָלַף`** (o.10); ***šadû ḫuršāni*** = **`הרים, רמות`**; ***tiāmtu*** = `יָם` (`יַמִּים`, vocalized).
- ***akālu*** "consume" = **`אָכַל`** (S09 o.12 `אוכלים אותי`); ***ṣētu*** = **`שָׁרָב`**; ***šarbu*** "rain" = **`סַגְרִיר`** (o.13).
- ***lapātu*** = **`נָגַע`** (S09 o.14 `נוגעים (ב)גופי`); ***banû*** (adj.) = **`יָפֶה`**; ***lānu*** = **`גּוּף`**.
- ***anāḫu*** / ***anhu*** "tired" = **`יָגַע`** (S09 o.15 `יגעה אני`); ***šudlupu*** = **`נְדוּד־שֵׁנָה`** (o.15).
- ***puḫru ilāni*** = **`אספת האלים`** (S09 o.16, o.23); ***kalāme*** = **`כולם`**.
- ***rittu*** = **`כַּף`** (S09 o.17 `עזות כפיי`); ***ramû* D** = **`הִרְפָּה`** (o.17 `לא יַרְפּוּךָ`), as EST.
- ***naglabu*** = **`כָּתֵף`** (S09 o.18); ***ḫurrudu*** = **`שָׁקוּד`** (o.18 `שקודות`, from *ḫarādu* = `שָׁקַד`).
- ***ana kâša*** / ***ayāši*** (emphatic object) = **`אותך`** / **`אותי`** (S09 o.19, o.12).
- ***šaptu*** = **`שָׂפָה`** (S09 o.20, o.22); ***ḫadû*** = **`שָׂמַח`** (o.22 `ישמחו שפתיך`).
- ***balāṭu tušattar*** = **`חיים תוסיף`** (S09 o.21), with the wisdom corpus's *balāṭa uttar*.
- ***damqātu*** (pl. noun) = **`נָאוֹת`** (S09 o.24 `נאות עליך`).
- ***balāṭu* D** = **`חִיָּה`** (S09 r.3′ `יְחַיּוּ לעד`).
- **Date formula:** `(חודש) נִיסָן, יום שמונה־עשר; לִמּוּ בֵּל־שַׁדּוּאָ, / סגן ארץ צֹר` (S09 r.6′–r.7′), as EST §107.
- ***dalālu*** = **`פֵּאֵר`** (S05 r.6 `פָּאֲרוּ`) – decision 2.
- ***kimṣu* / *kinṣu*** = **`כְּרָעַיִם`** (S05 2 `כרעיי כורעות`), as Gilgameš.
- ***usātu*** = **`עֶזְרָה`** (S06 r.2), as the wisdom corpus; ***dâku*** = **`הָרַג`** (S06 o.9), as EST.
- ***nēmel*** (conjunction) = **`יַעַן`** (S10 o.4′), apart from *nēmelu* `רֶוַח`.
- ***diglu*** = **`מַחֲזֶה`** (S11 r.6 `במחזי הר[אשון]`) – decision 9; ***pānû*** = `ראשון`.
- ***kakkabtu*** / ***kakkabu*** = **`כּוֹכָב`** (S11 r.7, r.11, r.13); ***paššūru*** = **`שֻׁלְחָן`**; ***qû*** = **`קַב`**; ***kusāpu dannu*** = **`פת עזה`** (r.8); ***saḫḫaru*** = **`צַלַּחַת`** (r.9); ***šaddu*** = **`מָתוּחַ`** (r.10); ***ina rēšē*** = **`לִמְרַאֲשׁוֹת`** (r.12 `[ל]מראשותיי`).
- **Names:** Tašmetu-ereš `תַּשְׁמֵטוּ־אֵרֵשׁ` ("Tašmetu requested (him)"); Mullissu-kabtat `מוּלִּיסּוּ־כַּבְתַּת` ("Mullissu is honoured"); Dunnaša-amur `דֻּנָּשָׁא־אָמוּר` ("I have seen her strength"); Bel-šadduʾa `בֵּל־שַׁדּוּאָ` ("Bel is my mountain"), as renderings §1.

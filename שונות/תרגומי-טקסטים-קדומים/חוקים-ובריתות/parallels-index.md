# Parallels index: cuneiform law and treaty and the Bible

This is the corpus's main product for the commentary (`corpus.md`; guidelines §7.3). It merges the parallels indexes of the projects into one table ordered by Bible verse: Genesis, **Exodus by chapter** (the Covenant Code, Exod 21–23, is the block LH serves), Leviticus, Numbers, then **Deuteronomy by chapter** (the block EST serves), then the rest of the Bible. Each row is filed under its first biblical reference.
**EST** = Esarhaddon's Succession Treaty (project 1, `1-אמנת-הירושה-של-אסרחדון/`): composite line (Parpola & Watanabe); "T col line" = the Tell Tayinat copy. The Hebrew rendering is ours, as it stands in `translation.rtl.md`; the apparatus for each line is in `annotated-<part>--sections-….rtl.md`. Bible quotations are vocalized and checked with `tools/check_bible_quotes.py`. "Our proposal" in a Comment = a parallel not known to us from the literature; parallels "from memory" are the standard ones (Weinfeld 1972, Steymans 1995, Levinson 2010, Moran 1963), not re-checked against the publications (not in hand).
**LH** = the Laws of Hammurabi (project 2, `2-חוקי-חמורבי/`): `§N, <line>` (CDLI composite P464358 line; primes after the gap) or `prol.` / `epil.` + line; the apparatus is in `annotated-NN--….rtl.md`. Parallels "from memory" for LH are the standard ones (Paul 1970, Finkelstein 1981, Westbrook, Wright 2009, Roth 1997, Malul, Otto), not re-checked against the publications (not in hand).
**Generated** by `python3 -I build_parallels_index.py` (this folder) from the Part tables in the projects' `project.md` files (it keeps everything above the heading line "The table"). The key findings below were written by the corpus coordinator (EST and LH, 2026-10-17; LE, MAL A/B, LI, UN, 2026-10-18).

## Key findings for the commentary: Esarhaddon's Succession Treaty and Deuteronomy

1. **Deut 13 – the informers (EST §10, ll. 108–122; §12, 130–146; §57, 494–512).** The treaty obliges the swearer to report "any word not good" about the crown prince "whether from the mouth of his enemy, or of his ally (`איש שלומו`), or of his brothers, uncles, cousins, family … or from the mouth of your brothers, your sons, your daughters, or from the mouth of a prophet (*raggimu*, `נביא`), an ecstatic (*maḫḫû*, `משוגע`), an inquirer of the word of a god (`שואל דבר אל`) … you shall hear (*šemû* = `שמע`, the cognate) and not conceal (*pazzuru* = `הסתיר`; Deut 13:9 `וְלֹא תְכַסֶּה`)" and seize and kill the inciters, "destroying their name and seed from the land". The kin triad of 116 (`אחיכם, בניכם, בנותיכם`) stands in the same order as Deut 13:7 (`אָחִיךָ … בִנְךָ אוֹ בִתְּךָ`); the treaty's *salmu* "ally" (`איש שלומו`) is where Deut has `רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ`; the wife (`אֵשֶׁת חֵיקֶךָ`) has no counterpart. "To kill him, put him to death" (`להרגו, להמיתו`, 133) = `הָרֹג … לַהֲמִיתוֹ` (13:10), but in the treaty it is the conspirators' aim; the swearers' own duty to kill comes at 139–146. Deuteronomy transfers the whole structure from the king to God: "another king, another lord" (`מלך אחר, אדון אחר`, 71, 129) ↔ `אֱלֹהִים אֲחֵרִים` (13:3, 7, 14). Deut 13:6's `סָרָה` and 13:9's `כִּסָּה` have no Akkadian cognates here: the translation keeps them out so that the reader can see Deuteronomy's own choices.
2. **Deut 13:1 and 4:2 – "do not change" vs "do not add or subtract".** The seal caption (ii *ša lā šunnê* "which is not to be changed"), §4 (57–58 `תמירו, תשנו` the king's word) and §35 (397–399: whoever "changes, neglects, transgresses, cancels" the oath of the tablet) all use *šunnû* (cognate `שנה`) and *enû*. Deuteronomy's formula (`לֹא תֹסֵף … וְלֹא תִגְרַע`) is not the treaty's: a [divergence] that the translation keeps visible. Daniel 6:9 (`דִּי לָא לְהַשְׁנָיָה`) has the same cognate for a sealed royal decree.
3. **Deut 6:5 – love and the whole heart.** "If you do not love Assurbanipal as yourselves" (`כנפשכם לא תאהבו`, 268; *râmu* = `אהב` [equivalent], *kī napšātekunu* = `כנפשכם` [cognate]) ↔ 6:5, 13:4, and above all 13:7 `רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ` and 1 Sam 18:1, 3 (Jonathan, the king's son, loves David `כְּנַפְשׁוֹ`); Lev 19:18 has `כָּמוֹךָ`, not `כנפשך`. "With the whole heart" is *ina gummurti libbi* ("in the totality of the heart", 53, 169, 310, 387), rendered `בשלמות לבכם`, so that Deuteronomy's `בְּכָל לְבָבְךָ` is shown as an equivalent, not an identity. The verb at 205, 348 and 634 (*turammâ*) is *ramû* D "abandon", not "love": rendered `תרפו` (↔ `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ`, 31:6, 8).
4. **Deut 6:7, 11:19 – teaching the sons.** §34 (385–388): "when you stand on the place of this oath, you shall not swear with lip-talk but with your whole heart, and teach it (*lamādu* Š = `למד`, a real cognate) to your sons who will exist after the treaty" ↔ 11:18–19 `וְלִמַּדְתֶּם אֹתָם אֶת בְּנֵיכֶם` (heart, then sons), 6:6–7, 4:10; the "lip-talk" is the Rabshakeh's `דְּבַר שְׂפָתַיִם` (2 Kgs 18:20).
5. **Deut 29:9–14 – the oath of those not present.** The treaty is made "with you, your sons, your grandsons, who will exist after the treaty for distant days" (9–10; 383–384; 393–396 "Aššur is your god … your sons and grandsons shall fear him") ↔ 29:13–14 (`וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם`), 29:12 (`וְהוּא יִהְיֶה לְּךָ לֵאלֹהִים`), 6:2. *adê* is rendered `אמנה` throughout, so that the reader can see where Deuteronomy put `בְּרִית` and where `אָלָה` (*māmītu* = `אלה`, 72 etc.; 29:11, 13, 18–20).
6. **Deut 31:9–13, 24–26; 10:1–5 – the tablet.** §35 (397–409): the tablet sealed with Aššur's seal, "set before you", to be guarded "like your god"; §36 (410–413): not to be given to the fire, thrown into water, buried in dust ↔ the book placed beside the ark (31:26), the tablets in the ark (10:2, 5), and inversely Exod 32:19–20 / Deut 9:21 (the calf burnt, ground to dust, thrown into water: the same three).
7. **Deut 28:26–33 – the order of the curses.** §39–42 (419–430): Sîn – skin disease (`צרעת`; 28:27 `שְׁחִין`) and exclusion "like a wild ass, like a gazelle"; Šamaš – no just judgment, no sight, "walk in darkness" (`בחשכה התהלכו`; 28:28–29 `בְּעִוָּרוֹן … מְמַשֵּׁשׁ … בָּאֲפֵלָה … עָשׁוּק וְגָזוּל`); Ninurta – corpses for eagle and vulture (28:26); Venus – "your wives in your enemy's lap before your eyes, your sons shall not own your house, a foreign enemy shall divide your goods" (28:30–33). The same sequence as Deut 28:27–33 except that the birds come one verse earlier in Deuteronomy (28:26). The parallel for 423–430 rests on the Nimrud tablets alone (Tayinat is broken there).
8. **Deut 28:23–24 and Lev 26:19 – bronze and iron.** §63–64 (526–533): "may they make your ground like iron … as rain does not fall from a bronze sky, so may rain and dew not come on your fields; instead of rain may coals rain". The metals are assigned as in Deut 28:23 (sky bronze, earth iron), but the order is earth first; Lev 26:19 swaps the metals but shares the treaty's "like" (`כַּ־`); Deut 28:24 replaces rain with dust, the treaty with coals. 527 *siāqu* "make narrow" is probably the cognate of `צוק` (28:53 `אֲשֶׁר יָצִיק לְךָ אֹיְבֶךָ`), marked [cognate?].
9. **Deut 28:53–57 – eating the children.** §47 (445–451): the sons grind the parents' bones for flour, "a mother bars her door to her daughter", "in your hunger eat the flesh of your sons!", man eats man, man wears man's skin; §69 (547–550) and §75 (568–569, "as honey is sweet, so may the blood of your women, sons and daughters be sweet in your mouth"). The mother and daughter ↔ `תֵּרַע עֵינָהּ … וּבְבִתָּהּ` (28:56); the command form ↔ Lev 26:29; Jer 19:9; 2 Kgs 6:28–29.
10. **Deut 28:20, 63 and 27:15–26 – curse and uprooting.** §56 (475–476): "may they curse you (*arāru* = `ארר`) angrily with a bitter curse (*arratu* = `מארה`), tear you out (*nasāḫu* = `נסח`) from among the living" ↔ 28:20 `הַמְּאֵרָה`, 28:16–19 `אָרוּר`, 28:63 `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה`; Mal 2:2, 3:9 has noun and verb together. Further cognates of §56: bread and water "forsake" (*ezēbu* = `עזב`, ↔ 28:20 `אֲשֶׁר עֲזַבְתָּנִי`), no rest (28:65), the earth not receiving the corpses (28:26), bitumen for food (*kupru* = `כפר`) and donkey's urine for drink (↔ the Rabshakeh, 2 Kgs 18:27). Nabû "erase your name" (*pašāṭu* = `מחה`, 661) ↔ 29:19 `וּמָחָה יְהוָה אֶת שְׁמוֹ`.
11. **Right and left (§96, 634–636).** "If you abandon Esarhaddon … and go to the right or the left, whoever goes to the right – swords shall eat him; whoever goes to the left – swords shall eat him too" ↔ the Deuteronomic `לֹא תָסוּר … יָמִין וּשְׂמֹאל` (5:28, 17:11, 20, 28:14) and `תֹּאכַל חָרֶב` (32:42).
12. **Outside Deuteronomy.** 2 Kgs 11:4 (`וַיַּשְׁבַּע אֹתָם … וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ`; *kullumu* = `הראה`, 60, 63) – a succession oath for a crown prince; Ezek 17:13–20 (the vassal's `אָלָה` and the net, ↔ §101); Num 5:21–27 and Ps 109:17–18 (the oath "entering" the body like water and oil, §72, §94); Amos 5:26 (`כִּיּוּן` = the planet Kayyamānu, 14); Bethel and Anat-Bethel as gods with the lion (§54A ↔ 2 Kgs 17:25–28; Jer 48:13). Tayinat adds the gods of Kurbail and "the queen of Ekron" (T vi 45–47; ↔ 2 Kgs 1:2).

**Tayinat.** The 2009 copy confirms the composite almost line by line; it supplies the text of §30 (353–359) and the officials of the province of Kunalia (T i 4–11) in place of the Median city-ruler's family, and it overturns two 1988 restorations (440: Adad cuts off *rain*, not high water – the Deut 11:17 / 28:23–24 link depends on it; 470: Kubaba makes *blood* drip). Its extra words (e.g. "your father *wrote* in the treaty", 358) are given in the apparatus, not in the text.

## Key findings for the commentary: the Laws of Hammurabi and the Covenant Code (and the rest of the Torah)

Written by the coordinator from the twelve translators' Part sections (`2-חוקי-חמורבי/project.md`); every item is in the table below with its line and verse. LH is quoted in our Hebrew (`2-חוקי-חמורבי/translation.rtl.md`).

1. **The goring ox, Exod 21:28–32, 35–36 (LH §250–252).** LH has *one* verb, *nakāpu* "gore", rendered `נגף` – the cognate of the Torah's *second* ox verb, `וְכִי יִגֹּף שׁוֹר` (21:35); Exodus switches to `יִגַּח` in 21:28–32. The habitual gorer is *nakkāpû* `נַגָּף הוא` (§251) – the same noun pattern and the same nominal clause as `שׁוֹר נַגָּח הוּא` (21:29), with the other root. The warning is *bābtašu ušēdīšum* `רובעו הודיעו לו` (root ידע) ↔ `וְהוּעַד בִּבְעָלָיו` (עוד) and `אוֹ נוֹדַע` (21:36, ידע!). "and killed" is *uštamīt* `והמית` [cognate] ↔ `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (21:29). The unwarned case: `לדין ההוא תביעה אין` ↔ `וּבַעַל הַשּׁוֹר נָקִי` (21:28). **Absent in LH**: the ox stoned, its flesh forbidden, the owner's death, the ransom (`כֹּפֶר`, 21:30) and the son/daughter clause (21:31); the slave costs ⅓ mina = 20 shekels (Exodus: 30, 21:32), while LH's 30 shekels (½ mina) is the price of a free man's son. (§240, the boat collision, is a structural ox-gores-ox analogue with the verb *maḫāṣu*, no shared word.)
2. **Talion, Exod 21:23–25; Lev 24:17–22; Deut 19:21 (LH §196–201).** LH has *no* "X for X" formula in the eye/bone/tooth laws: `אם איש את עין בן איש נקר, את עינו ינקרו`; the "for" (*kīma*, `שור כשור`, `עבד כעבד`) appears only in the replacement laws (§219, 231, 245) ↔ `שׁוֹר תַּחַת הַשּׁוֹר` (21:36). And the talion holds **only between `בני איש`** (the free class: `בְּנֵי אִישׁ`, Ps 49:3): for a `מסכן` a mina of silver, for `עבד איש` half his price – against Lev 24:22 `מִשְׁפַּט אֶחָד יִהְיֶה לָכֶם`. The tooth is *nadû* "knock out" `השיל` ↔ `יַפִּיל` (21:27). Exod 21:26–27 frees the injured slave; LH §199 pays his owner.
3. **Vicarious punishment (LH §116, §210, §230) against Deut 24:16, 2 Kgs 14:6, and Exod 21:31.** The striker's daughter is killed for the pregnant woman's death (`את בתו יהרגו`, §210); the builder's son for the owner's son (§230); the creditor's son for the distrainee's son (§116). Exod 21:31 `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח כַּמִּשְׁפָּט הַזֶּה יֵעָשֶׂה לּוֹ` reads as a deliberate rejection of exactly this (from memory: the standard reading).
4. **The pregnant woman, Exod 21:22–23 (LH §209–214).** The verb is *maḫāṣu* `מחץ` (the cognate of `מָחַצְתִּי`, Deut 32:39), **not** *nakāpu*: Exodus uses the ox verb `וְנָגְפוּ` for the men's blow, LH does not. The miscarriage is a fixed sum `עשרה שקלי כסף … ישקול` (*šaqālu* = `שקל` [cognate], as `כֶּסֶף יִשְׁקֹל`, Exod 22:16) graded by class (§211–214).
5. **The brawl, Exod 21:18–19 (LH §206).** `"בדעת לא מחצתי"` (*ina idû … lā amḫaṣu*, ידע) ↔ Deut 19:4 `בִּבְלִי דַעַת`; `את הרופא יפרע` ↔ `וְרַפֹּא יְרַפֵּא`; the oath of the striker has no Torah counterpart.
6. **Death penalties.** *iddâk* `יהרג` everywhere (passive, impersonal), never the Torah's `מוֹת יוּמָת`; LH kills for false capital accusation (§1, 3 ↔ Deut 19:16–21, the false witness's talion `כַּאֲשֶׁר זָמַם`), kidnapping a young son of a man (§14 ↔ Exod 21:16, Deut 24:7), theft from god or palace (§6), harbouring runaway slaves (§15–16 ↔ Deut 23:16–17, the exact opposite: the Torah forbids handing the slave back), burglary (§21 `פלש`/`מפלש`, Aramaic/Mishnaic cognate ↔ `בַּמַּחְתֶּרֶת`, Exod 22:1; killed and hung (?) "in front of that breach"), robbery (§22), adultery (§129: bound and thrown into the water, **the husband may pardon** – absent in Lev 20:10, Deut 22:22). Burning (*qalû* `קלה`, the verb of Jer 29:22 `קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ`): the incestuous mother and son (§157 ↔ Lev 20:14), the *nadītum* who opens or enters a tavern (§110 ↔ **Lev 21:9**, the priest's daughter burnt), the looter at a fire (§25 ↔ Exod 22:5).
7. **Deposit, oath and loss, Exod 22:6–14 (LH §7, §9–13, §120–126, §244–249, §261–267).** `אם איש לאיש כסף, זהב … לנצירה יתן` ↔ `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (22:6; *naṣāru* = `נצר`, not `שמר`); `לפני האל` ↔ `אֶל הָאֱלֹהִים` / `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (22:7–8); the double payment for a denied deposit or a false claim of loss (§124, §126) ↔ `יְשַׁלֵּם שְׁנַיִם` (22:8); `אבדה` ↔ `עַל כָּל אֲבֵדָה` (22:8); the god's blow (`אל מחצו`, §249), the lion, the "touch of a god" in the fold (`נגיעת אל`, `מרבץ`, §266) ↔ `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (22:9), `אִם טָרֹף יִטָּרֵף` (22:12); the owner "accepts" the loss ↔ `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (22:10); the hired animal ↔ `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (22:14). The herdsman's loss *ḫiṭītu* (`נזק`) shares its root with Jacob's `אָנֹכִי אֲחַטֶּנָּה` (Gen 31:39, our proposal); §13 `עדיו לא קרובים` ↔ `וְאִם לֹא קָרוֹב אָחִיךָ אֵלֶיךָ` (Deut 22:2, lost property; our proposal).
8. **Theft, Exod 21:37–22:3 (LH §8).** Thirtyfold (god/palace), tenfold (*muškēnum*); "if the thief has nothing to give, he shall be killed" ↔ `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (22:2): the same case, opposite outcome.
9. **Grazing and fire, Exod 22:4–5 (LH §57–58, §53–56).** LH's verb is *akālu* Š "make (the flock) eat" (`האכיל`), which supports the grazing reading of `וּבִעֵר`; the compensation is a fixed rate per area against `מֵיטַב שָׂדֵהוּ`. LH's negligent dike flooding the neighbours corresponds to the Torah's fire `הַמַּבְעִר אֶת הַבְּעֵרָה`.
10. **Debt slavery, Exod 21:2–11; Deut 15:12–18; Lev 25:39–43 (LH §117–119, §280).** `שלוש שנים … ברביעית שנה דרורם יושם` (*andurārum* = `דְּרוֹר` [cognate] ↔ Lev 25:10, Jer 34:8–17) against six years and `לַחָפְשִׁי חִנָּם`. The man who sells "his wife, his son or his daughter" (§117) ↔ `וְכִי יִמְכֹּר אִישׁ אֶת בִּתּוֹ לְאָמָה` (21:7; LH: `נתן בכסף`). Foreign slaves bought abroad are freed in their homeland "without silver" (§280) ↔ `חִנָּם אֵין כָּסֶף` (21:11).
11. **The slave's ear, Exod 21:5–6 (LH §282, §205, §226–227).** The slave who says "you are not my master" (`לא אדוני אתה`) has his ear cut off (`את אזנו יקצוץ`) – the inverse of the slave who says `אָהַבְתִּי אֶת אֲדֹנִי` and has his ear pierced; the barber who shaves off a slave's mark (`גַּלָּב`, Ezek 5:1) has his hand cut off.
12. **Marriage and family (LH §127–194).** The accused wife: the oath or the river (§131–132) ↔ Num 5:11–31, with the very verb `וְהִוא לֹא נִתְפָּשָׂה` (5:13; *ṣabātu* N `נתפשה`); slander of a wife (§127) ↔ Deut 22:13–19; the betrothed virgin "who has not known a male" (`זכר לא ידעה`, §130) ↔ Deut 22:23–27, Num 31:18; the captive's wife who returns to her first husband (§135, required) ↔ Deut 24:4 `בַּעְלָהּ הָרִאשׁוֹן` (forbidden), Hos 2:9, and Michal (1 Sam 25:44; 2 Sam 3:14–15) against §136; the friend who marries the bride (§161, forbidden) ↔ Samson's bride (Judg 14:20; 15:2); `מהר` and `מתן` (*terḫatum*, *nudunnûm*) ↔ Gen 34:12 `מֹהַר וּמַתָּן`, Exod 22:15–16; the sick wife (§148) ↔ `אִם אַחֶרֶת יִקַּח לוֹ` (Exod 21:10) and the dedicated woman's maintenance (§178) ↔ `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ`; the slave-wife who bears children and claims equality with her mistress (§144–147) ↔ Gen 16:3–4 (`וַתֵּקַל גְּבִרְתָּהּ`), 21:10, 30:3; incest (§154–158) ↔ Lev 18 and 20 (exile for the daughter, burning for the mother, disinheritance for the father's wife ↔ Reuben, Gen 35:22, 49:4); the slave-woman's sons inherit if the father called them "my sons" (§170) ↔ Gen 48:5, against Gen 21:10 `כִּי לֹא יִירַשׁ בֶּן הָאָמָה`; no firstborn's double share (§165–170) ↔ Deut 21:15–17 [divergence]; disinheritance before the judges, the first offence forgiven (§168–169) ↔ the rebellious son stoned (Deut 21:18–21); the adopted son who denies his foster parents: tongue cut out / eye torn out (§192–193) ↔ Exod 21:17, Prov 30:17; the wet-nurse (§194) ↔ Exod 2:7–9, 1 Kgs 3:20.
13. **The frame: prologue and epilogue ↔ Exod 21:1, 23:20–33; Lev 26; Deut 17:18–20, 27–28.** The laws are named at the *end*: `דיני / מישרים / אשר חמורבי … כונן` ↔ `וְאֵלֶּה הַמִּשְׁפָּטִים אֲשֶׁר תָּשִׂים לִפְנֵיהֶם` (Exod 21:1) at the *start* (*mīšarum* = `מֵישָׁרִים` [cognate]; *kunnu* = `כונן` ↔ `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים`, Ps 99:4); `אמת ומישרים בפי הארץ שׂמתי` ↔ `שִׂימָהּ בְּפִיהֶם` (Deut 31:19). The king's task, "that the strong may not wrong (`חבל`, cognate) the weak … for the orphan and the widow" ↔ Exod 22:20–23, Deut 10:18, Ps 72:4. The wronged man "who has a matter" (`איש חבול אשר דבר יהיה לו`) comes before the stele ↔ `כִּי יִהְיֶה לָהֶם דָּבָר בָּא אֵלַי` (Exod 18:16) and the law read aloud (Exod 24:7; Deut 31:11; 17:19) or written on stones (Deut 27:2–8). The future king who heeds the stele: `שבטו יאריך` ↔ `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ` (Deut 17:20). The curses, god by god (Anum to Enlil): the name and seed blotted out (↔ Deut 29:19; 25:6), Adad withholding rain from above and flood from below (↔ Deut 11:17; 28:23–24), an incurable disease "which no physician knows" (Ninkarrak ↔ Deut 28:27, 35, 59–61), the king led bound to the enemy's land (↔ Deut 28:36), and the last word of the stele `ישיגוהו` "may they overtake him" (*likšudāšu*) ↔ `וְהִשִּׂיגוּךָ` (Deut 28:15, 45). LH has *šipṭu* once, `במקום המשפט` (3429'), the only use of `משפט` in the translation (its cognate).
14. **What the Hebrew deliberately keeps apart** (so that the reader can see the Torah's own choices): `יהרג` / `מוֹת יוּמָת`; `לפני האל` / `אֶל הָאֱלֹהִים`; `נגף` / `נגח`; `הודיעו לו` / `וְהוּעַד`; `כ` / `תַּחַת`; `נצירה` / `לִשְׁמֹר`; `זיכך` / `נָקִי`; `דרור` / `חָפְשִׁי`; `דיני מישרים` / `מִשְׁפָּטִים`; `מחץ` / `הִכָּה`; `אריה` / `טָרֹף`; `מבוכה` / `מְהוּמָה` (Deut 28:20). The class terms `בן איש`, `מִסְכֵּן` (the Hebrew loanword from *muškēnum*), `עבד איש` are constant, so every tier is visible.

**The gap.** §66–§99 and the beginning of §100 (seven erased stele columns) are not in the base text and are not translated (loans and interest, houses: Exod 22:24, Lev 25:35–37, Deut 23:20–21 have no LH counterpart in this translation for that reason).

## Key findings for the commentary: the other law collections (Eshnunna, Middle Assyrian Laws A and B, Lipit-Ištar, Ur-Namma)

Written by the coordinator (2026-10-18) from the translators' Part sections (`3-חוקי-אשנונה/`, `4-…-A/`, `5-…/`, `6-…/`, `7-…-B/` `project.md`); every item is in the table below with its line and verse. The collections are quoted in our Hebrew (their `translation.rtl.md`). The shared renderings (`renderings.md` §5–§6) were fixed so that one Akkadian (or Sumerian) formula has one Hebrew form in all five collections and in LH.

**Exodus 21–23 (the Covenant Code)**
1. **Exod 21:35 ↔ LE §53 (168–170)**, the closest verbal parallel in cuneiform law: `אם שור את שור נָגַף והמית, / את מחיר השור החי ואת בשר השור המת / בעלי השור שניהם יחלוקו`. Shared: the verb (*nakāpu* = `נגף`, the cognate of `יִגֹּף`), the two oxen, live and dead (`הַחַי`, `הַמֵּת`), "divide" (`יחלוקו` ↔ `וְחָצוּ … יֶחֱצוּן`; *zâzu* is not the root חצה), the price (↔ `כַּסְפּוֹ`). Different: LE divides the *price* of the live ox (Exodus: "sell it") and the *flesh* of the dead one; the two owners are the subject; no `אִישׁ … רֵעֵהוּ`; no sequel for the known gorer (Exod 21:36). LH has no ox-gores-ox law at all (cross rows LE §53 / LH §250–252 / Exod 21:35–36).
2. **Exod 21:28–32 ↔ LE §54–55 and LH §250–252.** The ward "made it known" (`הודיע`, root ידע ↔ `אוֹ נוֹדַע`, 21:36); "did not keep his ox in order" is *ešēru* Š `יישר` in LE, *sanāqu* `ריסן` in LH, `שמר` in Exodus – three verbs; fixed silver (2/3 mina for a man, 15 shekels for a slave ↔ thirty shekels, 21:32); the ox is never stoned. **The dog (LE §56–57)**: `ואת כלבו לא נצר` – *naṣāru*, the verb Exodus's `וְלֹא יִשְׁמְרֶנּוּ` translates; the tablet's slip "gored" for "bit" (§57, 181) shows that §54–57 were drafted as one pattern.
3. **Exod 22:1–2 ↔ LE §12–13**: the line is drawn at midday vs night (`בצהריים` / `בלילה`); by night `ימות, לא יחיה` (the idiom of `כִּי מֵת אַתָּה וְלֹא תִחְיֶה`, מלכים ב כ:א), imposed by the law itself – the Torah only exempts the striker. LE §60 (191–195): the negligent *guard* is killed and buried at the breach without a grave (↔ Deut 21:23).
4. **Exod 21:18–27 – money for limbs against the talion.** LE §42–47a (nose, eye, tooth, ear, cheek, finger, hand, foot, collarbone – all silver; death in a brawl `בקטטה` 2/3 mina, like the goring ox); UN's injury laws (bone, nose, skull, eye, tooth – silver; a skull split in a fistfight: 180 lashes, against Deut 25:3's forty; a slave who strikes a free man paraded with half-shaved head, a free man who beats a slave: 60 + 60 lashes ↔ Exod 21:20–21, 26–27). **Exod 21:22–25**: UN 379–402 (the daughter struck, miscarriage: ½ mina; "if she died, that man shall be killed" – the striker himself, not his daughter as in LH §210; the slave-woman: `עבד לעבד יעמיד`); MAL A §21, §50–53: `נפשות ימלא חֵלֶף אשר בבטנה` – *kīmū* "instead of" is the exact counterpart of `תַּחַת` in `נֶפֶשׁ תַּחַת נָפֶשׁ` (21:23), where LH's talion has only *kīma* "like"; `מַחַץ כְּמַחַץ` ↔ `פֶּצַע תַּחַת פָּצַע` (21:25); the woman who aborts herself impaled and unburied (§53 ↔ Deut 21:22–23).
5. **Exod 22:6–14 – deposit and oath.** LE §36–37: the keeper whose house was robbed swears "at the gate of Tišpak" (`את חיי האל יזכיר`) and is free (↔ `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים`, 22:7); UN b017–b023: the *depositor* swears and the house-owner pays (the reverse of 22:7), and a denied deposit is paid double (↔ `יְשַׁלֵּם שְׁנַיִם`, 22:8); UN c015–c020 the false "my property is lost" claim (= LH §126) is punished by death; the hired ox: LI §34–37 (hoof tendon, eye, horn, tail: ⅓, ½, ¼, ¼ of the price), UN b002–b007, LH §247–248 – against Exod 22:13–14, which frees the hirer when the owner is present; the herdsmen replace the ox lost from the pen (UN c006–c011 ↔ Gen 31:39).
6. **Exod 22:20–23 – orphan and widow.** UN prologue 162–171: `את היתום לעשיר / לא שַׂמְתִּי, את האלמנה לבעל הכוח / לא שַׂמְתִּי`, "the man of one shekel to the man of one mina, the man of one sheep to the man of one ox" (↔ Lev 19:15; 2 Sam 12:3), and 179 "the cry *'O Utu!'* I made disappear" (`"הוֹי אוּתוּ!" אִבַּדְתִּי`) – the next verse in Exodus is `צָעֹק יִצְעַק אֵלַי` (22:22); `צעק` is kept for *šasû* only.
7. **Exod 22:15–17.** MAL A §55–56 ↔ 22:15–16 (below, Deut 22:28–29): "if the father does not wish" (`אם האב לא חָפֵץ`) ↔ `אִם מָאֵן יְמָאֵן אָבִיהָ`; "triple silver, the price of a virgin" (`מחיר הבתולה`; *šīmu*, not *terḫatu*) ↔ `כְּמֹהַר הַבְּתוּלֹת`. **22:17** ↔ MAL A §47 `את עושה הכשפים יהרגו` (*kišpū* = `כשפים`, cognate; *āšipu* = `אַשָּׁף`).
8. **Exod 21:2–11.** MAL A §37 `רֵיקָם תצא` (the divorced wife "goes out empty") ↔ `וְיָצְאָה חִנָּם אֵין כָּסֶף` (21:11) and, by root, `לֹא תְשַׁלְּחֶנּוּ רֵיקָם` (Deut 15:13) – Exodus's "free" protects the woman, MAL's "empty" deprives her; LI §28 the sick first wife is not put out and the *second wife* supports her (↔ 21:10); LE §32 "food, oil, clothing" (`מזונות, משחה ולבוש`) ↔ `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ` (21:10); UN §4–5, LI §14, §25 freedom (*ama-ar-gi₄* = `דרור`) for slaves and their children.

**Deuteronomy 22 and 25**
9. **Deut 22:22–27 ↔ MAL A §12–16, §23.** §12: a man's wife seized in the street who "did not consent and guarded herself" – "they shall kill the man; **`לאשה חטא אין`**" (*ḫīṭu* "penalty", the cognate of `חֵטְא`) ↔ **`אֵין לַנַּעֲרָ חֵטְא מָוֶת`** (22:26): the same preposition, noun and negation. The test differs: MAL asks whether she resisted, Deuteronomy whether she cried out (there is no *šasû* in the tablet). §13 `את האיש ואף את האשה יהרגו` ↔ `וּמֵתוּ גַּם שְׁנֵיהֶם` (22:22). But in §14–16, §23–24 **the husband decides** (kill, mutilate, release – and the man gets the same), against the Torah's fixed death (Lev 20:10). LE §26 (the betrothed girl seized "without the consent (`שאלת`) of her father and mother": `דין נפשות הוא, ימות`) and §28 (only the woman dies, "caught in a man's lap") ↔ 22:22–25; UN §6–7: the young man's wife "not yet brought home" (= the Torah's `מְאֹרָשָׂה`, a word kept out) deflowered "by deception": that male killed; if she followed another man of her own will, she dies and he is freed (`דרורו יושם`) – against `וּמֵתוּ גַּם שְׁנֵיהֶם`.
10. **Deut 22:28–29 ↔ MAL A §55.** "In the city or in the open country (`בין בתוך העיר, בין בשדה`)" ↔ `בָּעִיר` / `וְאִם בַּשָּׂדֶה` (22:23, 25) – but in MAL the place changes nothing. `הבא עליה לאביה יתן` ↔ `וְנָתַן הָאִישׁ הַשֹּׁכֵב עִמָּהּ לַאֲבִי הַנַּעֲרָ`; `הבא עליה ישאנה, לא יִדְחֶנָּה` ↔ `לֹא יוּכַל שַׁלְּחָהּ כָּל יָמָיו`; triple silver ↔ `חֲמִשִּׁים כָּסֶף`. **The sharpest divergence of the corpus:** first "the father of the virgin shall take the wife of the man who had intercourse with the virgin and give her to be pressed (`למיעוך`)" – vicarious punishment, against Deut 24:16 and the silence of 22:29. Where Deuteronomy says `אֲשֶׁר לֹא אֹרָשָׂה`, MAL lists "not requested (*erēšu*), not opened, not married, no claim on her father's house"; Klein derives Hebrew `ארש` from *erēšu* (our proposal; `ארש` kept out of the lines).
11. **Deut 22:13–21 ↔ MAL A §17–19, LI §33, UN §14.** The slanderer: MAL `על עמיתו דבר שׂם` (§19) ↔ `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים` (22:14, both roots); `ארבעים במקלות ימחצוהו` (§18) ↔ `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (25:3), fifty in §19, a month of the king's work, the hair cut off, a talent of tin; LI §33: any man who says of an unmarried daughter "she has known a male" (the LH formula `זכר ידעה`, no word for virginity) and cannot prove it pays 10 shekels (↔ `מֵאָה כֶסֶף`, 22:19); UN §14: the accuser of a young man's wife cleared by the River pays 20 shekels.
12. **Deut 25:11–12 ↔ MAL A §8.** `אשך` is the cognate of Lev 21:20 `מְרוֹחַ אָשֶׁךְ`; `אצבע אחת שלה יקצצו` matches `וְקַצֹּתָה אֶת כַּפָּהּ` only through the corpus's rendering of *nakāsu* (`קצץ`, fixed by LH), not by a shared root; the tablet has a finger and a real injury (the doctor's bandage, the second testicle), Deuteronomy the hand and only a grab.
13. **Deut 25:5–10; Gen 38 – no levirate term anywhere.** MAL A §30, §33, §43: the *father* (or father-in-law) gives the dead son's wife `לנישואין` to another son, even "of ten years" (§43 ↔ `עַד יִגְדַּל שֵׁלָה בְנִי`, Gen 38:11), or the widow to her father-in-law (§33 ↔ Tamar and Judah, Gen 38:26; forbidden in Lev 20:12); `אם אשה בבית אביה יושבת` (six times) ↔ `וַתֵּשֶׁב בֵּית אָבִיהָ` (Gen 38:11); §25 `אחי בעלה לא חלקו … ובן אין לה` ↔ `כִּי יֵשְׁבוּ אַחִים יַחְדָּו … וּבֵן אֵין לוֹ` (25:5) – but the brothers inherit the jewellery, not the widow; §28 the posthumous son inherits from his begetter (the reverse of 25:6). UN e026–e027: marrying the elder brother's wife is a capital offence (↔ Lev 20:21). `יבם` stands in no line.
14. **Deut 24:1–4 ↔ MAL A §36, §45; LE §29–30.** `לבעלה האחרון זכאית היא` (MAL §36) ↔ `הָאִישׁ הָאַחֲרוֹן` (24:3); the first husband cannot reclaim her – unless the king sent him away (then he takes her and her children; cf. 1 Sam 25:44). LE §29: the captive returns and takes his wife back although she has borne a son to another (against 24:4); §30 the deserter has no claim.
15. **Deut 19:14; 27:17 ↔ MAL B §8–9, §20** (moving a boundary): no Akkadian verb is the equivalent of `הסיג` (kept out, with `גבול`): *taḫūmu* = `תחום` (the Mishnaic/Aramaic loanword from it), §8 *samāḫu* D `עירב` ("confused" a large border), §9 *šubalkutu* `הזיז` ("made cross" a small one), §20 `[ציון] ציין` (setting up a new boundary stone on another's field ↔ `אֲשֶׁר גָּבְלוּ רִאשֹׁנִים`); the penalties – threefold land, a finger, 100 blows, a month's work – against the Torah's bare prohibition and curse. MAL B §1 the eldest's two shares (`שתי ידות` ↔ `פִּי שְׁנַיִם`, Deut 21:17; `חָמֵשׁ יָדוֹת`, Gen 43:34) – the second cast by lot (*pūru* = `פּוּר`, Esth 3:7); §6 the herald's triple proclamation of a field sale, "so-and-so son of so-and-so", the tablets (↔ Ruth 4:1–2; Jer 32:7–12; Lev 25:25); §2 the killer handed to `בעל הנפשות` (kill or settle, as MAL A §10; against Num 35:31). **Deut 19:16–19 ↔ LI §17**: the accuser who did not prove his charge `את עונו ישא` (*nam-tag il₂* = *arnam našû*, LH F37) – the logic of `כַּאֲשֶׁר זָמַם`, applied to the accuser, not to a witness; UN §27–28 the false witness and the witness who withdraws from the oath.
16. **Deut 23:16–17 ↔ LI §12–13, §16; UN §17; LE §49–52.** The man who harboured a fugitive slave for a month gives `עבד כעבד` or 15 shekels (LI; LH §16 kills him); the one who returns a runaway is *paid* 2 shekels (UN) – the reverse of `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו`; LI §16 the free *miqtum* "may go where his heart pleases" (`אל מקום לבו ילך`) ↔ `בַּמָּקוֹם אֲשֶׁר יִבְחַר … בַּטּוֹב לוֹ` (23:17).

**The rest of the Torah**
17. **Gen 24:65; 38:14–21 – the veil (MAL A §40–41).** Wives, daughters, widows veiled in the street; the married *qadiltu* (`קדשה`, the cognate of `הַקְּדֵשָׁה`, Gen 38:21; Deut 23:18) veiled, the unmarried not; the prostitute (`זונה`) "shall not veil, her head is uncovered" (`זונה לא תתרעל, ראשה פתוח`) – in Gen 38:15 it is precisely the covered face that makes Judah take Tamar for a `זוֹנָה`. The man who does not report a veiled prostitute has his ears pierced (`את אזניו יְפַלְּשׁוּ`) – the verb is LH's *palāšu*, so that Exod 21:6's `רצע` stays out and the divergence shows. §41: the concubine (`פילגש`) veiled before witnesses "is his wife"; `בני הפילגשים` inherit when there are no sons of the wife – the very phrase of Gen 25:6 with the opposite outcome.
18. **Num 5.** MAL A §2 `האשה ההיא את עונה תשא` ↔ `וְהָאִשָּׁה הַהִוא תִּשָּׂא אֶת עֲוֹנָהּ` (5:31), and §32 the same formula for her husband's guilt (vicarious, against Deut 24:16); MAL §17 `עדים אין` ↔ `וְעֵד אֵין בָּהּ` (5:13), followed by the River; the River ordeal in UN §13–14, LI and MAL §17, §22, §24, §25.
19. **Num 27:8 ↔ UN b008–b011** (a single witness): `אם איש מת, בן זכר אין לו, בת אשר לא נישאה לבעל יורשתו תהיה` – the clause order of `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ`; LI §22 priestess daughters inherit "as an heir".
20. **Gen 16; 21:10; Judg 11:1–2.** LI §25 `בני האמה עם בני אדוניה את הבית לא יחלוקו` – the rule and the syntax of `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי` (Gen 21:10), but the father frees the slave woman and her children; LI §27 "the son whom the prostitute bore him is his heir" – the opposite of Jephthah's expulsion; UN §25–26 the slave-woman who likens herself to her mistress (`כגבירתה`) and curses her: her mouth scoured with salt (↔ Gen 16:4–6; Prov 30:23). LI §29 the bride given to the groom's friend (`לחברו`), double restitution ↔ Samson (Judg 14:20; 15:2).
21. **Lev 25:10; Jer 34:8 ↔ the Sumerian prologues.** LI 68–69 and UN 133–134 `את דרורם שַׂמְתִּי` (*ama-ar-gi₄*, the Sumerian of *andurāru* = `דְּרוֹר`), the release followed by the return home (LI `אל עריהם הִתְפַּשְׂתִּים`); LI 72–79 the father made to carry his sons and the son to stand by his father (↔ Mal 3:24, other verbs; Deut 1:31). **Lev 19:35–36; Deut 25:13–16; Ezek 45:9–12 ↔ UN 135–149**: the king removes violence, does justice and *then* fixes the measures and weights (the barig, the ban, the "straight" royal ban (`ישרה`, the root of `מישרים`), the shekel stone to the mina) – the order of Ezek 45:9–12.
22. **Deut 27–28; Lev 26 – the epilogues.** LI 463′–467′ and UN g009–g011 have the curse protasis of LH 3375′–3384′ in the same Hebrew (`את כתובתה ימחה, את שמו יכתוב … בין מלך, בין אדון, בין מושל`); LI 448′ the inscription is on a *stone* (*na₄*, `אבן`; ↔ `אֲבָנִים גְּדֹלוֹת`, Deut 27:2, 8), not CDLI's "stela"; the blessing of long life (↔ Deut 17:20) and "the shining forehead of Enlil … may he turn" (↔ Num 6:25–26).

**Method notes.** The parallels "from memory" (Yaron, Roth, Otto, Westbrook, Finkelstein, Paul, Wright) were not re-checked against the publications (not in hand); our own are marked "הצעה שלנו". The UN § numbers after §11 are a concordance by content (Part T7; uncertain ones marked `?`).

## Key findings for the commentary: the Hittite Laws, second tablet (HL2, HL 101–200b; Round 4 run 6 sub 2)
- **Lev 18 and 20 ↔ HL 187–200a:** the same map of forbidden unions (mother, daughter, son; the stepmother while the father
  lives ↔ Lev 18:8; the brother's wife while the brother lives ↔ 18:16, 20:21; a wife and her daughter or her mother or
  sister ↔ 18:17, 20:14; the cow, the sheep, the pig, the dog ↔ 18:23, 20:15–16), graded as *ḫurkel* `תועבה` (↔ `תּוֹעֵבָה`)
  or "no offence" `אין עברה`. The divergences are the finding: the wife's sister after the wife's death is "no offence"
  (↔ Lev 18:18 `בְּחַיֶּיהָ`: the same line drawn at the wife's life); horse and mule are "no offence", but the man may not
  come before the king nor become a priest (↔ Lev 21:16–23, the disqualified priest); the death sentence is the king's
  to execute or to pardon, and the animal that "leaps" on a man dies while a sheep dies in the man's place.
- **Deut 22:22–27 ↔ HL 197–198:** seized in the mountains – the man's sin, he dies; in the house – the woman's sin, she
  dies; the husband who finds them may kill them, "no offence"; brought to the palace gate, he may say "let my wife not
  die" and spare the lover too, or "let both die" (*2-pat akkandu* `שניהם ימותו` ↔ `וּמֵתוּ גַּם שְׁנֵיהֶם`, Deut 22:22).
- **Deut 25:5–10, Gen 38 ↔ HL 193:** the widow is taken by the brother, then by the father, then (the Old Hittite version,
  OS and KUB 29.34+) by the brother's son – no levirate term (`יבם` reserved: [absent]); the father-in-law of Gen 38 is
  a step of the Hittite order.
- **Exod 22:4–5 ↔ HL 105–107:** the fire that "catches" (↔ `וּמָצְאָה`), the other's field (↔ `בִּשְׂדֵה אַחֵר`, the Old Hittite
  version only), sheep let loose in a vineyard (*tarna-* `שלח` ↔ `וְשִׁלַּח אֶת בְּעִירֹה`), a good field given back (↔
  `מֵיטַב שָׂדֵהוּ`); Exod 21:34 ↔ HL 106, 113 (the damaged thing goes to the damager).
- **Deut 19:14, 27:17 ↔ HL 168–169:** breaking the boundary (the OS *arḫan*, the NS ZAG: one word `גבול`), repaired by a
  rite; the buyer who breaks it gives bread to the Sun-god: "Sun-god, Storm-god – no quarrel!".
- **Lev 19:19 ↔ HL 166–167:** [divergence]: "seed upon seed" is sowing over another man's sown field, not two kinds; the
  old penalty was death by the plough-team, now a sheep in the man's place – the code citing its own former law.
- **Exod 22:17 ↔ HL 111, 170:** clay shaped into an image is sorcery, "a case for the king"; killing a snake while
  pronouncing another's name costs a free man a mina, a slave his life.
- **The prices (HL 178–186) ↔ 1 Kgs 10:29, Lev 27:** a draught horse 20 shekels in the Hittite list against the 150 of
  Solomon's trade with "the kings of the Hittites".
- **Text history:** the composite is ours (TLHdig, 37 manuscripts); where the Old Script copy survives it differs in
  figures and words from the New Script copies (§157, §158b, §107, §168), and the later version adds a law of its own
  (§192, KBo 6.26) or drops one (§146b).

## Key findings for the commentary: the Instructions for Temple Personnel (CTH 264, IN; Round 4 run 6 sub 3)
Hittite never met Israel's scribes: every parallel below is typological (shared priestly logic), as Milgrom argued for Num 18;
the tags are [equivalent] / [divergence], never [cognate] (except SAGI.A `מַשְׁקֶה` through Akk. *šāqû*).
- **The guard of the holy place (Num 18:1–7, 22–23; 3:38; 1:51) ↔ §§6, 10, 11:** the night watch (*ḫaliya-* `משמרת`, *paḫš-*
  `שמר`) of the temple's watchmen and priests; the outsider (*araḫzena-* `חיצוני`, "not a man of Ḫattuša") who approaches the
  gods dies – and so does the one who brought him in (6.18: the host's liability, [divergence] from Num 1:51, where the
  outsider alone dies); the watchman at whose post an intruder entered is answerable with his life (10.24). `מִשְׁמֶרֶת` and
  `זָר` were kept out of the Hebrew so the apparatus shows the match.
- **Who eats the god's food (Lev 22:1–16; Num 18:11) ↔ §§5–6:** the personnel may not carry the god's portion home to wives,
  children and slaves, nor give it to an in-law or a guest (*UBĀRU* `אורח`); the Torah lets the priest's household and his
  bought slave eat, not the resident and the hired man ([divergence]: Hittite forbids exactly the household the Torah allows;
  6.11's reading hangs on a restored *lē*). Eating within three days (6.8–6.10) ↔ Lev 7:15–18, 19:6.
- **Purity before the holy (Lev 15:18; 22:6–7) ↔ §§10, 14:** the man who slept with a woman bathes before he goes up to the
  god's house; the Torah adds "unclean until evening" ([divergence]). The kitchen (§14): hair and nails cut, clean clothes,
  the vessel touched by a pig or a dog thrown away ↔ Lev 11:33; impure food served to the gods is repaid with dung and urine to
  drink ↔ Mal 2:3 `וְזֵרִיתִי פֶרֶשׁ עַל פְּנֵיכֶם`.
- **Robbing the god (Mal 3:8; 1 Sam 2:12–17; Lev 27:10) ↔ §§4, 7, 8, 16, 19:** taking payment instead of the offering (4.11),
  the god's meat taken before it reaches him (7.10 ↔ 1 Sam 2:15–16), the fattened ox swapped for a lean one (§7, §19 ↔ Lev
  27:10 `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ`, the same verb *waḫnu-* `המיר`), the god's field called "ours" (16.11 ↔ Mal 3:8).
- **The god eats first (Lev 23:14; Exod 22:28–29; 23:19) ↔ §§15, 18:** the farmers' and herdsmen's fresh produce and young
  animals (*ḫuelpi* `הטרי`, not `ביכורים`) must reach the god "before a man eats of it", without delay (↔ `לֹא תְאַחֵר`).
- **Oath and ordeal (Exod 22:8–9; Num 5) ↔ §§17–19:** the herdsman's excuses "it died, it ran away, a bull gored it" ↔ Exod
  22:9 `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה`; the doubt goes "to the god" – in the Torah for a verdict, here to an ordeal: the
  suspect drinks the god's rhyton (BIBRU) and the household is answerable.
- **The ancient mind:** "Is the mind of man and of the gods any different? No!" (§2): the god as a master fed and washed for by
  his servant, whose anger falls on the servant's whole family (§§2–3; ↔ Mal 1:8 `הַקְרִיבֵהוּ נָא לְפֶחָתֶךָ`); "the
  mind of the gods is strong: it does not hasten to seize, but when it seizes it does not let go" (§7); the festival list (§4)
  against the Torah's three pilgrim feasts (Exod 23:14 [divergence]); the gods' food, gold and silver as property to be
  registered, sealed and guarded.

## The table

Generated by `build_parallels_index.py` (this folder) from the Part tables in the projects' `project.md` files (3090 rows: EST 771, LH 1263, LE 100, MAL 262, LI 121, UN 136, MALB 59, HL 298, IN 80). EST = Esarhaddon's Succession Treaty (composite line; "T col line" = Tell Tayinat); LH = the Laws of Hammurabi (§ and CDLI composite line; "prol." / "epil." = prologue / epilogue); LE = the Laws of Eshnunna (§ and CDLI composite line); MAL = the Middle Assyrian Laws, Tablet A (§ and tablet line, ORACC); MALB = the Middle Assyrian Laws, Tablet B; LI = the Laws of Lipit-Ištar; UN = the Laws of Ur-Namma (§ (Roth 1997) and CDLI composite line); HL = the Hittite Laws ("HL1 §n, clause" = the first tablet, CHiL CTH 291.2; "PT § roman, clause" = the late parallel text KBo 6.4; "HL2 §n, row" = the second tablet, our composite from the TLHdig manuscripts, rows "<§>.<n>"); IN = the Instructions for Temple Personnel (CTH 264; rows "<§>.<n>" of our composite from the TLHdig manuscripts, lead KUB 13.4).


### Genesis

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| MALB §4, o ii 29 | *zarʾa izru* | `זֶרַע זָרַע` | `כָּל עֵשֶׂב זֹרֵעַ זֶרַע` (בראשית א:כט) | [cognate] | *zēru* / *zarāʾu* = `זרע`. |
| LH epil. 3463' | *šaknat napištim* | את אשר נפש שׂוּמה בו | `אֲשֶׁר בּוֹ נֶפֶשׁ חַיָּה` (בראשית א:ל) | [equivalent] | Our proposal. |
| EST 488–489 | *ultu libbi kaqqiri līlâ* | מתוך הקרקע יעלה | `וְאֵד יַעֲלֶה מִן הָאָרֶץ` (בראשית ב:ו) | [equivalent] | A flood rising from the earth (`אֵד` ~ Akk. *edû*). Our proposal. |
| LH §55, 999 | idem | idem | `וְהִשְׁקָה אֶת כָּל פְּנֵי הָאֲדָמָה` (בראשית ב:ו) | [cognate] |  |
| LH §59, 1049 | *bēl kirîm* | בעל הגן | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | [equivalent] | *kirûm* = `גן` (creation corpus rule: tag every occurrence); here a private date orchard. |
| UN prol. 158–159 | *{ĝeš}kiri₆ ḫe₂-em-mi-gub* | גנים נטעתי שם | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | [equivalent] | The divine gardener. |
| LH §55, 999 | *ana šiqītim* | להשקאה | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן` (בראשית ב:י) | [cognate] | *šaqû* = `השקה`; the garden (*kirûm* `גן`) follows in §59 ff. Our proposal. |
| MALB §17, r vi 9 | *eqlišu išaqqi* | `את שדהו ישקה` | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן` (בראשית ב:י) | [cognate] |  |
| LH prol. 234 | *purattim* | פרת | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | [cognate] | Name. |
| LE prol. 6 | *{i7}idigna* | חִדֶּקֶל | `וְשֵׁם הַנָּהָר הַשְּׁלִישִׁי חִדֶּקֶל הוּא הַהֹלֵךְ קִדְמַת אַשּׁוּר` (בראשית ב:יד) | [cognate] |  |
| UN prol. 151–152 | *gu₂ {i₇}idigna gu₂ {i₇}buranun* | על גדת החידקל, על גדת הפרת | `וְשֵׁם הַנָּהָר הַשְּׁלִישִׁי חִדֶּקֶל הוּא הַהֹלֵךְ קִדְמַת אַשּׁוּר; וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | [cognate] | The two rivers. |
| LH §137, 1587' | *ezēbim* | לעזוב | `עַל כֵּן יַעֲזָב אִישׁ אֶת אָבִיו וְאֶת אִמּוֹ` (בראשית ב:כד) | [cognate] | *ezēbu* = `עזב` |
| LH §176, 2167' | *ištu innemdū* | אחרי אשר התחברו | `וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד` (בראשית ב:כד) | [equivalent] | הנישואים כהתחברות למשק אחד; הפועל `דבק` שנמנענו ממנו. הצעה שלנו |
| HL HL2 §170, 170.1 | *[ták-k]u ⸢LÚ EL-LAM⸣ MUŠ-an ku-en-zi da-me-e-el-la ŠU[M-an]* | אם איש בן חורין יהרוג נָחָשׁ, ושם של אחר | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | [equivalent] | הנחש כיצור בעל כוח מאגי; כישוף הנחש והשם |
| EST 657–658 | *ina kaqqar puqutti … ina muhhi libbikunu pišlā* (Tayinat) | בקרקע קוצים … על בטנכם זַחֲלוּ! | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל כָּל יְמֵי חַיֶּיךָ` (בראשית ג:יד) | [equivalent] | The serpent's curse: crawling on the belly; `גָּחוֹן` kept out. Tayinat only (P&W 1988 restored "[Go around barefooted!]"). Our proposal. |
| EST 657 | *puquttu* | קוצים | `וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ` (בראשית ג:יח) | [equivalent] | Thorns beside the belly-crawling (Gen 3:14, 18). Our proposal. |
| LH §57, 1013 | *ana šammī* | בעשב | `וְאָכַלְתָּ אֶת עֵשֶׂב הַשָּׂדֶה` (בראשית ג:יח) | [equivalent] | *šammu* = `עשב` (flood corpus). |
| EST 458 | *patru ḫamṭu* | חרב לוהטת | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [equivalent] | Our proposal. |
| LH §154, 1817' | *mārassu iltamad* | את בתו ידע | `וְהָאָדָם יָדַע אֶת חַוָּה אִשְׁתּוֹ` (בראשית ד:א) | [equivalent] | *lamādu* ~ `ידע` by sense (cognate of `לָמַד`). |
| EST 493 | *rābiṣu* | רובץ | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] |  |
| LI epil. 499′ | *maškim nu-kur₂-ru-bi ḫe₂-a* | הממונה שלה, אשר לא ישונה, יהיה | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] | Via the Akkadian: *maškim* = *rābiṣu*, the court's enforcer – and the demon who "lies in wait", the usual comparison for `רֹבֵץ`. Rendered by meaning (`הממונה`). |
| EST 256 | same | same | `קוֹל דְּמֵי אָחִיךָ צֹעֲקִים אֵלַי מִן הָאֲדָמָה` (בראשית ד:י) | [cognate] | Plural, of a murdered brother. |
| EST 421 | *rupdā* | שוטטו | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | [equivalent] | The cursed wanderer (Cain). Our proposal. |
| UN epil. g013 | *dag-dag* | ינדדו | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | [equivalent] | Cain's curse. |
| LH §168, 2021' | *lā ublam* | לא נשא, | `גָּדוֹל עֲוֹנִי מִנְּשֹׂא` (בראשית ד:יג) | [equivalent] | העוון "הגדול" והנשיאה, כמו *arnam kabtam … babālu* |
| LI prol. 29–30 | *niĝ₂-erim₂ niĝ₂-a-zi {ĝeš}tukul gi₄-gi₄-de₃* | רשע וחבלה בנשק להשיב | `וַתִּמָּלֵא הָאָרֶץ חָמָס` (בראשית ו:יא) | [equivalent] | "Evil and violence" driven out of the land; `חמס` kept out. Cross-collection: LH 35–36 `רשע וזד לאבד`. |
| LI epil. 436′–437′ | *niĝ₂-erim₂ niĝ₂-a₂-zi ka-ge ḫe₂-em-mi-gi₄* | רשע וחבלה דחיתי | `וַתִּמָּלֵא הָאָרֶץ חָמָס` (בראשית ו:יא) | [equivalent] | = prol. 29–30. |
| EST 490 | *kupru* | כפר | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | [cognate] |  |
| EST 587 | *kupru* | כפר | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | [cognate] | Lexical (guidelines §6.7). |
| LH §234, 2754' | *ana awīlim ipḫe* | `לאיש סָתַם,` | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) | [divergence] | איטום ספינה בכופר; כאן הפועל הוא *peḫû*, לא *kupru*, ולכן לא `כפר`; הצעה שלנו |
| EST 488 | *bubbulu abūbu lā maḫru* | זרם, מבול שאין לעמוד בפניו | `הִנְנִי מֵבִיא אֶת הַמַּבּוּל מַיִם עַל הָאָרֶץ` (בראשית ו:יז) | [equivalent] | *abūbu* = `מבול`; *bubbulu* stands beside it (Klein's etymology of `מַבּוּל`, guidelines §6.7). |
| LH §45, 870 | *bibbulum* | זרם | `וַאֲנִי הִנְנִי מֵבִיא אֶת הַמַּבּוּל מַיִם עַל הָאָרֶץ` (בראשית ו:יז) | [cognate?] | Klein derives `מַבּוּל` from *nabulu*/*bubbulu* (guidelines §6.7): uncertain; the Hebrew line has `זרם`, not `מבול`. Also 905. |
| LH epil. 3452'–3454' | *nārātišu ina nagbim liskir* | את נהרותיו במעמקים יסכור | `וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם וַאֲרֻבֹּת הַשָּׁמָיִם` (בראשית ח:ב) | [cognate] | *sekēru* = סכר; the end of the flood here a curse. |
| LH epil. 3513'–3515' | *zunnī ina šamê mīlam ina nagbim* | גשמים מן השמים, גאות מן המעמקים | `וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם וַאֲרֻבֹּת הַשָּׁמָיִם; וַיִּכָּלֵא הַגֶּשֶׁם מִן הַשָּׁמָיִם` (בראשית ח:ב) | [equivalent] | Waters above and below together. |
| EST 511–512 | same | same | `אֶדְרֹשׁ מִיַּד כָּל חַיָּה אֶדְרְשֶׁנּוּ` (בראשית ט:ה) | [equivalent] | `דָּרַשׁ מִיַּד`. |
| LH §250, 2890' | *dīnum šū rugummâm ul išu* | לדין ההוא תביעה אין | `מִיַּד כָּל חַיָּה אֶדְרְשֶׁנּוּ` (בראשית ט:ה) | [absent] | The animal liable for human blood: the Torah's principle, absent in LH. From memory. |
| IN IN §3, 3.2 | *na-at-kán DINGIR-LIM a-pé-e-da-ni-p[át 1]-⸢e⸣-da-ni an-da š[a-an-aḫ-z]i* | האם הָאֵל ידרוש אותו באותו (אדם) עצמו, באחד? | `וּמִיַּד הָאָדָם מִיַּד אִישׁ אָחִיו אֶדְרֹשׁ אֶת נֶפֶשׁ הָאָדָם` (בראשית ט:ה) | [equivalent] | "דרש" הוא גם בעברית לתבוע את החוב או את הדם מיד מישהו |
| EST 257 | *dāmē … tatabbakāni* | דמים … לא תשפכו | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | [equivalent] | Blood for blood. |
| UN §1, 183 | *lu₂-bi i₃-gaz-e-dam* | האיש ההוא יהרג | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו) | [divergence] | The principle without the theological reason (`כִּי בְּצֶלֶם אֱלֹהִים`). |
| LH prol. 104 | *uruk* | אורוך | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד` (בראשית י:י) | [equivalent] | Babylon, Erech, Akkad: all three in the prologue (16, 104, 259). |
| LH prol. 260 | *akkade rebītim* | אכד הרחבה | `וְאֶת רְחֹבֹת עִיר` (בראשית י:יא) | [cognate?] | *rebītu* ~ `רְחוֹב`; Rehoboth-Ir explained as *rebīt Ninua*. From memory; uncertain. |
| LH prol. 268 | *ninua* | נינוה | `וַיִּבֶן אֶת נִינְוֵה` (בראשית י:יא) | [equivalent] | Name. |
| LH epil. 3288' | *libitti Esagila* | לבנת אסגיל | `הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [cognate] | *libittu* = `לבנה`; Babylon's bricks: a protective power here, the tower's material in Gen. Our proposal. |
| LH epil. 3626' | *libitti Ebabbara* | לבנת אבבר | `נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [cognate] | *libittu* = לבנה (T2). |
| MALB §14, r v 27 | *libnāte ilbin* | `ולבנים לָבַן` | `הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [cognate] | Same collocation and root. |
| HL HL2 §110, 110.1 | *⸢ták-ku⸣ ḫu-u-uš-ši-el-li-ia-az pa-[ru]-ut ku-iš-ki da-a-i-ia-zi* | אם מישהו יגנוב חוֹמֶר מן המִכְרֶה(?), | `וְהַחֵמָר הָיָה לָהֶם לַחֹמֶר` (בראשית יא:ג) | [equivalent] | החומר כחומר בנייה |
| HL HL2 §128, 128.1 | *ták-ku SIG₄ ku-iš-ki ta-i-e-ez-zi ma-ši-ia-an* | אם מישהו יגנוב לְבֵנִים – כמה | `הָבָה נִלְבְּנָה לְבֵנִים וְנִשְׂרְפָה לִשְׂרֵפָה` (בראשית יא:ג) | [equivalent] | SIG₄ נקרא באכדית *libittu*, קרובת `לְבֵנָה` – דרך השומרוגרמה, לא דרך החתית |
| LH prol. 17 | *šumšu ṣīram* | בשמה הנעלה | `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | [divergence] | The gods give the name; in Gen the builders seek it. Our proposal. |
| LH prol. 108–109 | *mullî rēš Eanna* | המרים את ראש אאנה | `נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [divergence] | Raising a temple's head: piety here, hubris in Gen. |
| LH prol. 115–116 | idem | idem | `פֶּן נָפוּץ עַל פְּנֵי כָל הָאָרֶץ` (בראשית יא:ד) | [divergence] | Babylon scatters in Gen; Babylon's king gathers here. Our proposal. |
| LH epil. 3208'–3209' | *rēšīšu ullû* | את ראשה הרימו | `נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [divergence] | Babylon's head raised by the gods vs. by the builders. |
| LH prol. 17 | *bābilam šumšu ṣīram ibbi'u* | את בבל בשמה הנעלה קראו | `עַל כֵּן קָרָא שְׁמָהּ בָּבֶל כִּי שָׁם בָּלַל יְהוָה שְׂפַת כָּל הָאָרֶץ` (בראשית יא:ט) | [divergence] | Babylon named by the gods: an exalted name vs. a name of confusion. *nabû* = `קרא` [equivalent]. |
| LH prol. 83 | *urim* | אור | `בְּאוּר כַּשְׂדִּים` (בראשית יא:כח) | [equivalent] | Name; the identification is the standard one. |
| LH prol. 71 | *mušarbi zikru* | המגדיל את זכר | `וַאֲגַדְּלָה שְׁמֶךָ` (בראשית יב:ב) | [equivalent] | Our proposal. |
| LH §57, 1012 | *rē'ûm* | רועה | `וַיְהִי רִיב בֵּין רֹעֵי מִקְנֵה אַבְרָם וּבֵין רֹעֵי מִקְנֵה לוֹט` (בראשית יג:ז) | [cognate] | Herders and pasture rights. Our proposal. |
| EST 278 | same | same | `הֲלֹא כָל הָאָרֶץ לְפָנֶיךָ` (בראשית יג:ט) | [equivalent] |  |
| LH prol. 176 | *mašqītim* | משקה | `כִּי כֻלָּהּ מַשְׁקֶה` (בראשית יג:י) | [cognate] |  |
| MALB §17, r vi 3 | *ana šīqe* | `[(מים) אשר] להשקיה` | `כִּי כֻלָּהּ מַשְׁקֶה` (בראשית יג:י) | [cognate] | *šīqu* ~ `מַשְׁקֶה`; partly restored. |
| LH §170, 2058' | *inassaqma* | יבחר, | `וַיִּבְחַר לוֹ לוֹט אֵת כָּל כִּכַּר הַיַּרְדֵּן` (בראשית יג:יא) | [equivalent] | זכות הבחירה הראשונה בחלוקה בין אחים (`אִישׁ מֵעַל אָחִיו`). הצעה שלנו |
| LH prol. 99 | *larsa* | לרסה | `אַרְיוֹךְ מֶלֶךְ אֶלָּסָר` (בראשית יד:א) | [divergence] | Old, debated identification Ellasar = Larsa; note only. |
| LH prol. 28 | *Ḫammurapi* | חמורבי | `וַיְהִי בִּימֵי אַמְרָפֶל מֶלֶךְ שִׁנְעָר` (בראשית יד:א) | [absent] | The old identification with Amraphel is abandoned. |
| LH §133, 1517' | *iššalilma* | נשבה, | `וַיִּשְׁמַע אַבְרָם כִּי נִשְׁבָּה אָחִיו` (בראשית יד:יד) | [equivalent] | הפועל העברי לשבי של אדם |
| LH §165, 1947' | *ana aplišu* | ליורשו | `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג) | [equivalent] | `יורש` כשם עצם למעמד |
| LH §191, 2449' | *irtašīma* | היו לו, | `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג) | [divergence] | אברם שאין לו זרע, ו"בן ביתו" יורשו; ומיד: |
| LH §191, 2449' | *irtašīma* | היו לו, | `לֹא יִירָשְׁךָ זֶה כִּי אִם אֲשֶׁר יֵצֵא מִמֵּעֶיךָ הוּא יִירָשֶׁךָ` (בראשית טו:ד) | [divergence] | בן הבית נדחה כשיבוא בן ביולוגי, כמו כאן. ההשוואה לאימוץ (בנוזי) – מן הזיכרון |
| EST 415 | *šēbūtu* | שיבה | `תִּקָּבֵר בְּשֵׂיבָה טוֹבָה` (בראשית טו:טו) | [cognate] | *šību* ~ `שָׂב`. |
| LH §144, 1681' | *nadītam īḫuz* | נדיתו נשא | `וְשָׂרַי אֵשֶׁת אַבְרָם לֹא יָלְדָה לוֹ` (בראשית טז:א) | [divergence] | The nadītu does not bear by status, Sarai by barrenness. From memory. |
| LI §27, 323′–324′ | *dam-a-ne₂ dumu nu-un-ši-in-tu-u₄* | אשתו בן לא ילדה לו | `וְשָׂרַי אֵשֶׁת אַבְרָם לֹא יָלְדָה לוֹ` (בראשית טז:א) | [equivalent] | The same phrase; ex02 lacks the negation. |
| LH epil. 3599' | *ay ibni* | אל תבנה | `בֹּא נָא אֶל שִׁפְחָתִי אוּלַי אִבָּנֶה מִמֶּנָּה` (בראשית טז:ב) | [cognate] |  |
| LH §144, 1685' | *mārī uštabši* | ובנים המציאה | `בֹּא נָא אֶל שִׁפְחָתִי אוּלַי אִבָּנֶה מִמֶּנָּה` (בראשית טז:ב) | [equivalent] | The children count as the mistress's. |
| LH §144, 1683'–1684' | *amtam ana mutiša iddin* | אמה לבעלה נתנה | `וַתִּתֵּן אֹתָהּ לְאַבְרָם אִישָׁהּ לוֹ לְאִשָּׁה` (בראשית טז:ג) | [cognate] | *nadānu* = `נתן`, *amtu* = `אָמָה`, *mutu* ~ `אִישָׁהּ`. The classic parallel (Speiser; Van Seters; from memory). |
| LI §26, 312′–313′ | *geme₂-ni nam-dam-še₃ ba-an-tuku-tuku* | [את אמתו] לאשה ישא | `וַתִּתֵּן אֹתָהּ לְאַבְרָם אִישָׁהּ לוֹ לְאִשָּׁה` (בראשית טז:ג) | [equivalent] | A slave woman made a wife; in Genesis by the living first wife, here after her death. |
| LH §146, 1717'–1718' | *itti bēltiša uštatamḫir* | עם גבירתה השתוותה | `וַתֵּרֶא כִּי הָרָתָה וַתֵּקַל גְּבִרְתָּהּ בְּעֵינֶיהָ` (בראשית טז:ד) | [equivalent] | *bēltu* = `גבירה` [equivalent]; Hagar already when pregnant, the LH slave after giving birth. |
| MAL §40, r v 58 | *esirtu ša ištu bēltiša* | פילגש, אשר עם גברת[ה] | `וַתֵּקַל גְּבִרְתָּהּ בְּעֵינֶיהָ` (בראשית טז:ד) | [equivalent] | The secondary wife and her mistress (Hagar and Sarah). |
| UN §25, 359–365 | *geme₂ lu₂ nin-a-ni-gin₇ dim₂-ma-ar aš₂ i₃-ni-du₁₁, 1 sila₃ mun-am₃ ka-ka-ne₂ i₃-sub₆-be₂* | אמת איש, כגבירתה עשתה (עצמה), מארה אמרה (לה) – קב מלח אחד בפיה ישפשפו | `וַתֵּרֶא כִּי הָרָתָה וַתֵּקַל גְּבִרְתָּהּ בְּעֵינֶיהָ` (בראשית טז:ד) | [equivalent] | The slave-woman who makes herself like her mistress (Hagar; LH §146); her mouth is scoured with salt. |
| UN §26, 369 | *in-ni-ra* | מָחֲצָה (אותה) | `וַתְּעַנֶּהָ שָׂרַי וַתִּבְרַח מִפָּנֶיהָ` (בראשית טז:ו) | [divergence] | The slave-woman who strikes her mistress; the penalty is lost (370–377). In Genesis the mistress punishes without law. |
| LI §25, 300′–301′ | *u₃ geme₂ lugal-a-ni-ir dumu in-ši-in-tu-u₄* | ואמה לאדוניה בן ילדה לו | `וַתֵּלֶד הָגָר לְאַבְרָם בֵּן` (בראשית טז:טו) | [equivalent] | The slave woman bears her master a son while the wife has a living son; in Genesis the barren wife gives her slave (טז:ב). |
| EST 222 | *ša-šīmī* | בקנויים | `יְלִיד בָּיִת וּמִקְנַת כֶּסֶף` (בראשית יז:יב) | [equivalent] |  |
| UN prol. 39 | *emedu₂* | יליד הבית | `יְלִיד בָּיִת וּמִקְנַת כֶּסֶף מִכֹּל בֶּן נֵכָר` (בראשית יז:יב) | [equivalent] | *ama-a-tud* = Akk. *wilid bītim*: the king as the goddess Ninsun's "house-born slave" (a title of intimacy). |
| EST 290–292 | same | same | `אֲשֶׁר יְצַוֶּה אֶת בָּנָיו וְאֶת בֵּיתוֹ אַחֲרָיו וְשָׁמְרוּ דֶּרֶךְ יְהוָה` (בראשית יח:יט) | [equivalent] | Our proposal. |
| EST 433 | *ḫīṭu kabtu* | חטא כבד | `וְחַטָּאתָם כִּי כָבְדָה מְאֹד` (בראשית יח:כ) | [cognate] | Both words; *ḫīṭu* also "punishment" (Zech 14:19). |
| LH §168, 2018' | *šumma mārum arnam kabtam* | אם הבן עון כבד | `וְחַטָּאתָם כִּי כָבְדָה מְאֹד` (בראשית יח:כ) | [cognate] | *kabtu* = `כָּבֵד`, על חטא |
| UN prol. 179 | *i-{d}utu* | "הוי אותו!" | `זַעֲקַת סְדֹם וַעֲמֹרָה כִּי רָבָּה; וְחַטָּאתָם כִּי כָבְדָה מְאֹד` (בראשית יח:כ) | [equivalent] | The outcry that rises to the divine judge (`הַכְּצַעֲקָתָהּ הַבָּאָה אֵלַי`, 18:21). |
| LH epil. 3228'–3229' | *Šamaš dayyānim rabîm ša šamê u erṣetim* | שמש, הדיין הגדול של השמים והארץ | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | [equivalent] | The god as judge of the world. |
| LI epil. 485′ | *{d}utu di-ku₅ an-ki-ke₄* | אותו, הדיין של השמים והארץ | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | [equivalent] | The god as judge of the world. Cross-collection: LH 3459′–3461′ `שמש, הדיין הגדול של השמים והארץ`. |
| UN prol. 14–19 | *e₂ {d}nanna … di niĝ₂-gi-na {d}utu-ta šu-na mu-ni-gi₄-a* | את בית ננה … בדין האמת של אותו לידו השבתי | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | [equivalent] | The sun-god as judge between parties (the Magan boat returned by his verdict). Mostly restored. |
| LH §169, 2031' | *pānīšu ubbalū* | את פניו ישאו; | `הִנֵּה נָשָׂאתִי פָנֶיךָ גַּם לַדָּבָר הַזֶּה` (בראשית יט:כא) | [equivalent] | היענות וויתור |
| LH §142, 1661' | *ḫiṭītam* | וחטאה | `וְעַל מַמְלַכְתִּי חֲטָאָה גְדֹלָה` (בראשית כ:ט) | [cognate] | *ḫiṭītu* = `חֲטָאָה` |
| LH §146, 1718' | *uštatamḫir* | השתוותה | `וַתֵּרֶא שָׂרָה אֶת בֶּן הָגָר הַמִּצְרִית אֲשֶׁר יָלְדָה לְאַבְרָהָם מְצַחֵק` (בראשית כא:ט) | [equivalent] |  |
| LH §146, 1722' | *ul inaddišši* | לא תתננה | `גָּרֵשׁ הָאָמָה הַזֹּאת וְאֶת בְּנָהּ` (בראשית כא:י) | [divergence] | Sarah expels; the LH mistress may only mark and count her. |
| LH §170, 2053' | *u mārū amtim* | ובני האמה | `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי עִם יִצְחָק` (בראשית כא:י) | [divergence] | שרה דורשת שבן האמה לא יירש "עם" בנה; כאן, אם האב אמר "בני", בן האמה חולק "עם" בני הבחירה (2046' *itti* = `עם`). מן הזיכרון (ההשוואה מקובלת) |
| LH §171, 2070' | *ul izuzzu* | לא יחלוקו; | `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי עִם יִצְחָק` (בראשית כא:י) | [equivalent] | אותו דין: בן האמה אינו יורש "עם" בן האשה; ב־LH זה המצב כשהאב לא הכיר בבנים. מן הזיכרון (ההשוואה מקובלת) |
| LH §171, 2072' | *amtim u mārīša* | האמה ובניה | `גָּרֵשׁ הָאָמָה הַזֹּאת וְאֶת בְּנָהּ` (בראשית כא:י) | [divergence] | הגירוש של הגר וישמעאל הוא, לפי חלק מן החוקרים, גם שחרור; כאן השחרור הוא חובה, אחרי מות האב. מן הזיכרון (לא נבדק) |
| MAL §41, r vi 11–13 | *mārē aššitišu paṣṣunte laššu …* | בני אשתו הרעולה – אין; בני הפילגשים בנים הם | `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי עִם יִצְחָק` (בראשית כא:י) | [divergence] | The wife's sons first in both; MAL lets the concubine's sons inherit in default. |
| LI §25, 302′–304′ | *ad-da-a geme₂ u₃ dumu-ne-ne ama-ar-gi₄-bi in-gar* | האב את האמה ואת בניהם את דרורם שָׂם | `גָּרֵשׁ הָאָמָה הַזֹּאת וְאֶת בְּנָהּ` (בראשית כא:י) | [divergence] | The slave woman and her children are freed, not driven out. Cross-collection: LH §171 (2071′–2073′) `דרור האמה ובניה יוּשַׂם`. |
| LI §25, 305′–307′ | *dumu geme₂-ke₄ dumu lugal-a-na-ra e₂ nu-un-da-ba-e* | בני האמה עם בני אדוניה את הבית לא יחלוקו | `כִּי לֹא יִירַשׁ בֶּן הָאָמָה הַזֹּאת עִם בְּנִי עִם יִצְחָק` (בראשית כא:י) | [equivalent] | **The same rule and the same structure** ("the son(s) of the slave woman … with (the sons of) … shall not inherit/divide"). Cross-collection: LH §170–§171 (2068′–2070′) `בני האמה עם בני הבחירה לא יחלוקו`. |
| LI §27, 337′–339′ | *kar-ke₄ dam gidlam-ra e₂-a nu-mu-un-da-an-tuš* | הזונה עם האשה הבחירה בבית לא תשב | `גָּרֵשׁ הָאָמָה הַזֹּאת וְאֶת בְּנָהּ` (בראשית כא:י) | [divergence] | The second woman kept out of the house – here without her son (who inherits). |
| LH §146, 1719' | *aššum mārī uldu* | משום שבנים ילדה | `וְגַם אֶת בֶּן הָאָמָה לְגוֹי אֲשִׂימֶנּוּ: כִּי זַרְעֲךָ הוּא` (בראשית כא:יג) | [equivalent] | The children protect the slave (LH) / the son (Gen). |
| LH §137, 1595' | *inaddinūšimma* | יתנו לה, | `וַיִּקַּח לֶחֶם וְחֵמַת מַיִם וַיִּתֵּן אֶל הָגָר … וַיְשַׁלְּחֶהָ` (בראשית כא:יד) | [divergence] | האם של הבן מן האשה המשנית נשלחת עם לחם ומים; כאן עם נדונייתה ומחצית הנכסים. הצעה שלנו |
| LH §166, 1986' | *ušaḫḫazūšu* | ישיאוהו. | `וַתִּקַּח לוֹ אִמּוֹ אִשָּׁה מֵאֶרֶץ מִצְרָיִם` (בראשית כא:כא) | [equivalent] | בני המשפחה דואגים לאשה לבן, כשהאב אינו |
| HL HL2 §167, 167.3 | *ki-nu-na 1 UDU LÚ-na-aš ka-aš-*ša!-aš*-ša-aš ḫu-it-ti-an-ta* | ועתה שה אחד חֵלֶף האיש ימשכו, | `וַיִּקַּח אֶת הָאַיִל וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | [equivalent] | בהמה חֵלֶף אדם; כאן החוק עצמו ממיר את עונש המוות בשה |
| HL HL2 §199, 199.6 | *ka-a-aš-ša-aš ḫu-u-it-ti-ia-a[n-ta] na-an-kán ku-na-an-zi* | חֵלֶף האיש ימשכו, ואותו יהרגו. | `וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | [divergence] | שה חֵלֶף אדם; כאן השה מת במקום האיש שלא חטא, כדי להסיר את הטומאה |
| LH epil. 3286'–3287' | *ilū ēribūt Esagila* | האלים באי אסגיל | `לְכֹל בָּאֵי שַׁעַר עִירוֹ` (בראשית כג:י) | [equivalent] | Same participial construct. Our proposal. |
| HL HL2 §146a, 146a.4 | *[ ḫa-an-t]e-ez-zi-ia-aš-pát ḫa-ap-pa-ri-uš wa-a-ši* | […] במחירים הראשונים עצמם יקנה. | `אַרְבַּע מֵאוֹת שֶׁקֶל כֶּסֶף עֹבֵר לַסֹּחֵר` (בראשית כג:טז) | [equivalent] | המחיר שנקבע במשא ומתן מחייב; העוקף משלם קנס וקונה במחיר הראשון |
| MALB §20, r vii 20 | *[tahū]ma ilbi* | `[תחום] הקיף` | `וְכָל הָעֵץ אֲשֶׁר בַּשָּׂדֶה אֲשֶׁר בְּכָל גְּבֻלוֹ סָבִיב` (בראשית כג:יז) | [equivalent] | The boundary "all around" a field (הצעה שלנו); *taḫūmu* restored. |
| LH §166, 1966' | *aššātim īḫuz* | נשים נשא, | `וְלָקַחְתָּ אִשָּׁה לִבְנִי לְיִצְחָק` (בראשית כד:ד) | [equivalent] | האב דואג לאשה לבנו |
| LH §130, 1483' | *zikaram lā idû* | זכר לא ידעה | `בְּתוּלָה וְאִישׁ לֹא יְדָעָהּ` (בראשית כד:טז) | [cognate] | *idû* = ידע. |
| LI §33, 406′ | *ĝeš₃ nu-un-zu-a* | כי זכר לא ידעה | `וְאִישׁ לֹא יְדָעָהּ` (בראשית כד:טז) | [equivalent] | The same negated idiom. |
| LH §159, 1865' | *biblam* | שי | `וַיּוֹצֵא הָעֶבֶד כְּלֵי כֶסֶף וּכְלֵי זָהָב וּבְגָדִים וַיִּתֵּן לְרִבְקָה; וּמִגְדָּנֹת נָתַן לְאָחִיהָ וּלְאִמָּהּ` (בראשית כד:נג) | [equivalent] | המתנות המובאות לבית הכלה, לצד ה"מוהר" |
| LH §184, 2395' | *išarrakūšimma* | ימסרו לה, | `וַיְשַׁלְּחוּ אֶת רִבְקָה אֲחֹתָם וְאֶת מֵנִקְתָּהּ` (בראשית כד:נט) | [equivalent] | האחים (לבן) משיאים את אחותם ומשלחים אותה עם אנשיה ורכושה, כמו האחים כאן אחרי מות האב. הצעה שלנו |
| MAL §40, r v 42–45 | *aššāt aʾīle … almanātu … Aššurāyātu … qaqqassina lā pattu* | נשי איש … [אלמנות] … [אשוריות] … ראשן [לא פתוח] | `וַתִּקַּח הַצָּעִיף וַתִּתְכָּס` (בראשית כד:סה) | [equivalent] | The veil as a married woman's mark in the street; Rebekah veils herself before Isaac. Partly restored. |
| HL HL1 §31, 167 | *n=an=z(a) A-NA DAM-ŠU dāi* | וייקח אותה לאשתו, | `וַיִּקַּח אֶת רִבְקָה וַתְּהִי לוֹ לְאִשָּׁה` (בראשית כד:סז) | [equivalent] | "לקח לאשה" |
| LH §137, 1585' | *ša mārī uldušum u lū nadītim ša mārī* | אשר בנים ילדה לו או נדיתו אשר בנים | `וְלִבְנֵי הַפִּילַגְשִׁים אֲשֶׁר לְאַבְרָהָם נָתַן אַבְרָהָם מַתָּנֹת; וַיְשַׁלְּחֵם` (בראשית כה:ו) | [equivalent] | הבעל מפריד את בני האשה המשנית מביתו, אבל במתנות |
| LH §165, 1957' | *qīšti abum* | את המענק אשר האב | `וְלִבְנֵי הַפִּילַגְשִׁים אֲשֶׁר לְאַבְרָהָם נָתַן אַבְרָהָם מַתָּנֹת` (בראשית כה:ו) | [equivalent] | מתנות בחיי האב, נפרדות מן הנחלה (כה:ה `וַיִּתֵּן אַבְרָהָם אֶת כָּל אֲשֶׁר לוֹ לְיִצְחָק`) |
| LH §170, 2043' | *ina bulṭišu* | בחייו | `וַיְשַׁלְּחֵם מֵעַל יִצְחָק בְּנוֹ בְּעוֹדֶנּוּ חַי` (בראשית כה:ו) | [equivalent] | אברהם מכריע בחייו על בני הפילגשים, כמו *ina bulṭišu* |
| LH §191, 2452' | *ṣeḫrum šū rēqūssu* | הצעיר ההוא ריקם | `וְלִבְנֵי הַפִּילַגְשִׁים אֲשֶׁר לְאַבְרָהָם נָתַן אַבְרָהָם מַתָּנֹת וַיְשַׁלְּחֵם מֵעַל יִצְחָק בְּנוֹ` (בראשית כה:ו) | [equivalent] | בנים שאינם יורשים נשלחים עם מתנות, כמו המגודל עם שליש חלק (2456'). הצעה שלנו (דברים טו:יג – הקוגנט) |
| MAL §41, r vi 12–13 | *mārē esrāte mārē šunu zitta ilaqqeū* | בני הפילגשים בנים הם; חלק יקחו | `וְלִבְנֵי הַפִּילַגְשִׁים אֲשֶׁר לְאַבְרָהָם נָתַן אַבְרָהָם מַתָּנֹת` (בראשית כה:ו) | [equivalent] | The same phrase; Abraham's concubines' sons get gifts and are sent away, MAL's inherit when the veiled wife has no sons. Our proposal. |
| LI §31, 379′–381′ | *dumu igi-na sa₆-ga niĝ₂-ba in-na-an-ba kišib₃ in-na-an-sar* | לבן הנאה בעיניו מענק העניק לו, ותעודה חתומה כתב לו | `וְלִבְנֵי הַפִּילַגְשִׁים אֲשֶׁר לְאַבְרָהָם נָתַן אַבְרָהָם מַתָּנֹת … בְּעוֹדֶנּוּ חַי` (בראשית כה:ו) | [equivalent] | Gifts given by the father in his lifetime, outside the inheritance (and `וַיִּתֵּן אַבְרָהָם אֶת כָּל אֲשֶׁר לוֹ לְיִצְחָק`, כה:ה). Cross-collection: LH §165 (1948′–1959′) `אשר עינו מקבלת אותו … תעודה חתומה כתב לו … את המענק … יקח`. |
| LH §150, 1770' | *ša irammu* | אשר תאהב | `וְרִבְקָה אֹהֶבֶת אֶת יַעֲקֹב` (בראשית כה:כח) | [equivalent] | The mother's favourite. |
| LH §48, 910 | *ina šattim šuāti* | בשנה ההיא | `וַיִּזְרַע יִצְחָק בָּאָרֶץ הַהִוא וַיִּמְצָא בַּשָּׁנָה הַהִוא מֵאָה שְׁעָרִים` (בראשית כו:יב) | [equivalent] | The yield "in that year" (here its failure). Our proposal. |
| MALB §17, r vi 6–9 | *bēlū eqlāte ištu ahāʾiš izzazzū aʾīle ana sīr eqlišu šipra eppaš eqlišu išaqqi* | `[בעלי] השדות זה עם זה יעמדו; איש לפי (מידת) שדהו מלאכה יעשה, את שדהו ישקה` | `וַיָּרִיבוּ רֹעֵי גְרָר עִם רֹעֵי יִצְחָק לֵאמֹר לָנוּ הַמָּיִם` (בראשית כו:כ) | [divergence] | Quarrel over wells vs. a law of joint work in proportion to the field; the judges decide (r vi 13). |
| HL HL2 §162, 162.1 | *ták-ku PA₅-an EGIR-an ar-ḫa ku-iš-ki na-a-i 1 GÍN KÙ.BABBAR* | אם מישהו יטה פֶּלֶג מאחור הלאה – שקל אחד כסף | `וַיָּרִיבוּ רֹעֵי גְרָר עִם רֹעֵי יִצְחָק לֵאמֹר לָנוּ הַמָּיִם` (בראשית כו:כ) | [equivalent] | זכויות מים בין שכנים; [absent] לתורה אין חוק על מי השקיה |
| MALB §10, o iv 29 | *ina lā eqlišu būrta ihri* | `בשדה שאינו שלו בְּאֵר חפר` | `וַיַּחְפְּרוּ בְּאֵר אַחֶרֶת וַיָּרִיבוּ גַּם עָלֶיהָ` (בראשית כו:כא) | [cognate] | *būrtu* = `בְּאֵר`; *herû* = `חפר` [equivalent]. A well dug on land whose ownership is disputed. |
| MALB §17, r vi 19–20 | *mamma šaniumma lā išaqqi* | `אדם אחר לא ישקה` | `וַיַּעְתֵּק מִשָּׁם וַיַּחְפֹּר בְּאֵר אַחֶרֶת וְלֹא רָבוּ עָלֶיהָ` (בראשית כו:כב) | [divergence] | Isaac yields and moves on; here the one who refused to work loses his share of the water. |
| MAL §40, r v 76 | *qīra ana qaqqadiša itabbukū* | זפת על ראשה יצקו | `וַיִּצֹק שֶׁמֶן עַל רֹאשָׁהּ` (בראשית כח:יח) | [equivalent] | "Pour on the head": the anointing idiom inverted. Our proposal. |
| MAL §42, r vi 15 | *šamaššammū ana qaqqad mārat aʾīle itbuk* | שמן על ראש בת איש יצק | `וַיִּצֹק שֶׁמֶן עַל רֹאשָׁהּ` (בראשית כח:יח) | [equivalent] | Oil poured on the head: a betrothal rite here, a consecration (pillar, king: 1 Sam 10:1) in the Bible. Our proposal. |
| LH §166, 1968' | *ṣeḫrim* | הצעיר | `לֹא יֵעָשֶׂה כֵן בִּמְקוֹמֵנוּ לָתֵת הַצְּעִירָה לִפְנֵי הַבְּכִירָה` (בראשית כט:כו) | [equivalent] | סדר הנישואים לפי הגיל. הצעה שלנו |
| MAL §31, o iv 44 | *mārat emišu* | בת חמיו | `לֹא יֵעָשֶׂה כֵן בִּמְקוֹמֵנוּ לָתֵת הַצְּעִירָה לִפְנֵי הַבְּכִירָה` (בראשית כט:כו) | [equivalent] | The father-in-law's daughters as interchangeable brides. From memory. |
| LH §145, 1697' | *mārī lā ušaršīšu* | ובנים לא סיפקה לו | `הָבָה לִּי בָנִים וְאִם אַיִן מֵתָה אָנֹכִי` (בראשית ל:א) | [equivalent] | Children as something the wife provides. |
| LH §144, 1683' | *amtam* | אמה | `הִנֵּה אֲמָתִי בִלְהָה בֹּא אֵלֶיהָ` (בראשית ל:ג) | [cognate] | *amtu* = `אָמָה`. |
| LH §144, 1685' | *mārī uštabši* | ובנים המציאה | `וְתֵלֵד עַל בִּרְכַּי וְאִבָּנֶה גַם אָנֹכִי מִמֶּנָּה` (בראשית ל:ג) | [equivalent] |  |
| LH §170, 2040' | *u amassu* | ואמתו | `הִנֵּה אֲמָתִי בִלְהָה בֹּא אֵלֶיהָ` (בראשית ל:ג) | [equivalent] | האמה היולדת לאדון בנים |
| MAL §41, r vi 13 | *mārē šunu* | בנים הם | `וְאִבָּנֶה גַם אָנֹכִי מִמֶּנָּה` (בראשית ל:ג) | [equivalent] | Sons of a secondary woman as full sons. |
| LI §26, 319′–320′ | *dumu dumu-gi₇-gin₇-nam e₂-a-ni ib₂-du₁₀-ge* | בן כבן חורין הוא; את ביתו ייטיבו | `וְאִבָּנֶה גַם אָנֹכִי מִמֶּנָּה` (בראשית ל:ג) | [equivalent] | The slave-wife's son counts as a free son of the house; contrast Exod 21:4. |
| LH §144, 1694' | *šugītam ul iḫḫaz* | שוגיתו לא ישא | `וַתִּקַּח אֶת זִלְפָּה שִׁפְחָתָהּ וַתִּתֵּן אֹתָהּ לְיַעֲקֹב לְאִשָּׁה` (בראשית ל:ט) | [divergence] | Jacob takes further wives; LH forbids a second wife once the slave bore sons. Our proposal. |
| LH §265, 3007' | *šimtam uttakkir* | ואת הסימן ניכר | `וְהֶחֱלִף אֶת מַשְׂכֻּרְתִּי עֲשֶׂרֶת מֹנִים` (בראשית לא:ז) | [divergence] | Changing the marks (Gen 30:32) ten times / paying tenfold (3011'): a verbal coincidence, not a claim of dependence. Our proposal. |
| LH §137, 1604' | *kīma aplim ištēn* | כיורש אחד | `הַעוֹד לָנוּ חֵלֶק וְנַחֲלָה בְּבֵית אָבִינוּ` (בראשית לא:יד) | [equivalent] | "חלק" של אשה בבית. הצעה שלנו |
| LH §165, 1961' | *ina makkūr bīt abim* | מנכסי בית האב | `הַעוֹד לָנוּ חֵלֶק וְנַחֲלָה בְּבֵית אָבִינוּ` (בראשית לא:יד) | [equivalent] | "בית האב" כיחידת הרכוש שבה חולקים |
| LH §163, 1936' | *ša bīt abišama* | של בית אביה הם. | `הֲלוֹא נָכְרִיּוֹת נֶחְשַׁבְנוּ לוֹ כִּי מְכָרָנוּ; וַיֹּאכַל גַּם אָכוֹל אֶת כַּסְפֵּנוּ` (בראשית לא:טו) | [divergence] | רחל ולאה מתלוננות שאביהן "אכל" את המוהר (עבודת יעקב) במקום להעביר אותו אליהן. מן הזיכרון (בורוז; ההשוואה עם נוהג הנדוניה הבבלי מקובלת) |
| LH §171, 2088' | *adi balṭat ikkal* | כל עוד היא חיה תאכל, | `וַיֹּאכַל גַּם אָכוֹל אֶת כַּסְפֵּנוּ` (בראשית לא:טו) | [cognate] | *akālu* = `אכל`, "לאכול" נכסים |
| HL HL1 §27, 139 | *iwaru=šet=az anda [pēdā]i* | ואת מַתָּנָהּ פנימה [תישא], | `הֲלוֹא נָכְרִיּוֹת נֶחְשַׁבְנוּ לוֹ כִּי מְכָרָנוּ; וַיֹּאכַל גַּם אָכוֹל אֶת כַּסְפֵּנוּ` (בראשית לא:טו) | [absent] |  |
| LH §280, 3123' | *ūteddi* | הכיר | `הַכֶּר לְךָ מָה עִמָּדִי וְקַח לָךְ` (בראשית לא:לב) | [equivalent] | Identifying one's property held by another. |
| LH §6, 380 | *išriq* | `גנב,` | `עִם אֲשֶׁר תִּמְצָא אֶת אֱלֹהֶיךָ לֹא יִחְיֶה` (בראשית לא:לב) | [equivalent] | הצעה שלנו |
| LH §264, 2996' | *tālittam umtaṭṭi* | את הוולדות הפחית | `רְחֵלֶיךָ וְעִזֶּיךָ לֹא שִׁכֵּלוּ` (בראשית לא:לח) | [equivalent] | Jacob: the offspring not lost. From memory (Gen 31:38–40 ↔ §261–267). |
| LH §125, 1431' | *ištene'ī* | יחפש | `אָנֹכִי אֲחַטֶּנָּה מִיָּדִי תְּבַקְשֶׁנָּה` (בראשית לא:לט) | [equivalent] | The keeper responsible for the loss. Our proposal. |
| LH §263, 2979' | *uḫtalliq* | איבד | `גְּנֻבְתִי יוֹם וּגְנֻבְתִי לָיְלָה` (בראשית לא:לט) | [equivalent] | Jacob made good what was lost or stolen. From memory. |
| LH §266, 3018' | *nēšum iddūk* | אריה הרג | `טְרֵפָה לֹא הֵבֵאתִי אֵלֶיךָ אָנֹכִי אֲחַטֶּנָּה` (בראשית לא:לט) | [divergence] | Jacob bore the loss the law would remit. From memory. |
| LH §267, 3024' | *ḫiṭīt pissatim* | את נזק הצליעה? | `טְרֵפָה לֹא הֵבֵאתִי אֵלֶיךָ אָנֹכִי אֲחַטֶּנָּה` (בראשית לא:לט) | [cognate] | **ḫiṭītu (< *ḫaṭû*) ~ the Piel `אֲחַטֶּנָּה` "I bore its loss": the technical term of the herding law in Jacob's mouth.** Hidden in the line (`נזק`), shown in a footnote. Our proposal. |
| LH §103, 1150' | *uštaddīšu* | `הִשִּׁיל ממנו,` | `טְרֵפָה לֹא הֵבֵאתִי אֵלֶיךָ אָנֹכִי אֲחַטֶּנָּה` (בראשית לא:לט) | [divergence] | יעקב נשא בהפסד בעצמו, השוליה ב־LH פטור בשבועה. מן הזיכרון. |
| UN c006–c011 | *gu₄ e₂-tur₃-ba u₂-gu ba-an-de₂ unu₃-de₃-ne ib₂-su-su-ne* | אם שור במרבצו אבד, הבוקרים יחליפו | `טְרֵפָה לֹא הֵבֵאתִי אֵלֶיךָ אָנֹכִי אֲחַטֶּנָּה מִיָּדִי תְּבַקְשֶׁנָּה` (בראשית לא:לט) | [equivalent] | The herdsmen replace the lost ox/sheep, as Jacob did for Laban (LH §263). "In its pen" partly restored. |
| LH §47, 888 | *mānaḫātišu* | את יגיעו | `אֶת עָנְיִי וְאֶת יְגִיעַ כַּפַּי רָאָה אֱלֹהִים` (בראשית לא:מב) | [equivalent] | The labour of one who works another's property. Also 941. Our proposal. |
| LH §191, 2452' | *ṣeḫrum šū rēqūssu* | הצעיר ההוא ריקם | `כִּי עַתָּה רֵיקָם שִׁלַּחְתָּנִי` (בראשית לא:מב) | [cognate] | יעקב, שעבד בבית לבן חותנו ("כבן"), מול לבן שהיה משלחו ריקם |
| EST 494 | *ilāni annūte lidgulū* | האלים האלה יביטו | `יִצֶף יְהוָה בֵּינִי וּבֵינֶךָ` (בראשית לא:מט) | [equivalent] | The god(s) watching over an oath, which follows in the `אִם` form (31:50). Our proposal. |
| EST 494 | same | same | `רְאֵה אֱלֹהִים עֵד בֵּינִי וּבֵינֶךָ` (בראשית לא:נ) | [equivalent] | P&W "be our witnesses". |
| EST 154 | same | same | `וַיֹּאכְלוּ לֶחֶם וַיָּלִינוּ בָּהָר` (בראשית לא:נד) | [equivalent] | Covenant meal. |
| LH §169, 2031' | *pānīšu ubbalū* | את פניו ישאו; | `כִּי אָמַר אֲכַפְּרָה פָנָיו בַּמִּנְחָה הַהֹלֶכֶת לְפָנָי וְאַחֲרֵי כֵן אֶרְאֶה פָנָיו אוּלַי יִשָּׂא פָנָי` (בראשית לב:כא) | [equivalent] | "נשיאת פנים" כמחילה על עוון |
| LH §221, 2654' | *u lū šer’ānam* | `או גיד` | `גִּיד הַנָּשֶׁה` (בראשית לב:לג) | [equivalent] |  |
| IN IN §2, 2.13 | *na-aš ZI-an ar-ḫa la-a-an-za na-at-ši-kán an-da ⸢da⸣-me-en-kiš-⸢ke-et-ta⸣* | הוא – רפוי הלאה בנפשו, ו(נפשו) דבקה בו; | `וַתִּדְבַּק נַפְשׁוֹ בְּדִינָה` (בראשית לד:ג) | [equivalent] | אותו דימוי של נפש ה"דבקה" באחר, מתוך קרבה ורצון טוב |
| EST 278 | *ina pānišunu* | לפניהם | `וְהָאָרֶץ תִּהְיֶה לִפְנֵיכֶם` (בראשית לד:י) | [equivalent] | NA *ina pān X* "at X's disposal" = Hebrew `לִפְנֵי`. |
| LH §159, 1867' | *terḫatam iddinu* | מהר נתן, | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן וְאֶתְּנָה כַּאֲשֶׁר תֹּאמְרוּ אֵלָי` (בראשית לד:יב) | [equivalent] | מוהר ומתנה, שני תשלומים של החתן, כמו *terḫatu* ו־*biblu* |
| LH §171, 2080' | *u nudunnâm* | ואת המתן | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | [cognate] | `מַתָּן` מן `נתן` = *nudunnû* מן *nadānu*: אותו שורש, ושני תשלומי החתן (`מֹהַר` לבית האב, ו־`מַתָּן` – לפי אחת ההבנות – לכלה עצמה, כמו בבראשית כד:נג) כמו *terḫatu* ו־*nudunnû*. הצעה שלנו (את הצירוף `מהר ומתן` כבר משווים ל־*terḫatu* ו־*biblu*, T10) |
| MAL §27, o iii 105 | *nudunnâ* | מַתָּן | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | [equivalent] | `מַתָּן` beside `מֹהַר`: the husband's gifts. |
| LI §23, 271′–272′ | *šeš-a-ne-ne dam-ra in-na-an-šum₂-mu* | אחיה לבעל יתנוה | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן … וּתְנוּ לִי אֶת הַנַּעֲרָ לְאִשָּׁה` (בראשית לד:יב) | [equivalent] | The brothers give their sister in marriage (Dinah's brothers negotiate). |
| LI §32, 390′–391′ | *dumu šeš-gal-a-ni-ir niĝ₂-mussa in-na-an-šum₂* | לבנו, האח הגדול, שי נתן לו | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | [equivalent] | The groom's marriage gift (*niĝ₂-mussa* = *biblu* `שי`). Cross-collection: LH §166 (1964′–1984′) the brothers give `כסף מהר` to the youngest unmarried brother. |
| HL HL1 §29, 157 | *nu=šši kūšata piddaezzi* | ולה מֹהַר יגיש, | `הַרְבּוּ עָלַי מְאֹד מֹהַר וּמַתָּן` (בראשית לד:יב) | [equivalent] | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) – המֹהַר |
| EST 274 | *qinītu ša šunu iqnûni* | הקניין אשר הם קנו | `מִקְנֵהֶם וְקִנְיָנָם` (בראשית לד:כג) | [cognate] |  |
| EST 604–605 | same | same | `לְהַבְאִישֵׁנִי בְּיֹשֵׁב הָאָרֶץ` (בראשית לד:ל) | [cognate] | Our proposal. |
| LH §194, 2486' | *mārašu ana mušēniqtim* | את בנו למינקת | `וַתָּמָת דְּבֹרָה מֵינֶקֶת רִבְקָה` (בראשית לה:ח) | [cognate] |  |
| HL HL2 §190, 190.3 | *ták-ku ad-da-aš-še-ša ḫu-iš-wa-an-za [ḫu-u-ur-ki-il]* | ואם אביו חי – [תועבה]. | `וַיִּשְׁכַּב אֶת בִּלְהָה פִּילֶגֶשׁ אָבִיו` (בראשית לה:כב) | [equivalent] | ראובן בחיי יעקב (וכן אבשלום, שמואל ב טז:כב): "תועבה" דווקא בחיי האב |
| LH §167, 2001' | *mārū ana ummātim* | הבנים לפי האמהות | `בְּנֵי לֵאָה בְּכוֹר יַעֲקֹב רְאוּבֵן` (בראשית לה:כג) | [divergence] | רשימת בני יעקב בבראשית לה:כג–כו ערוכה לפי האמהות (לאה, רחל, בלהה, זלפה); LH אוסר לחלוק את הנחלה לפי האמהות. הצעה שלנו |
| LH §170, 2041' | *mārī ūlissum* | בנים ילדה לו, | `וּבְנֵי בִלְהָה שִׁפְחַת רָחֵל דָּן וְנַפְתָּלִי` (בראשית לה:כה) | [equivalent] | בני השפחות של יעקב |
| LH §170, 2053' | *u mārū amtim* | ובני האמה | `וּבְנֵי זִלְפָּה שִׁפְחַת לֵאָה גָּד וְאָשֵׁר; אֵלֶּה בְּנֵי יַעֲקֹב` (בראשית לה:כו) | [equivalent] | בני השפחות נמנים בין בני יעקב היורשים |
| EST 270, 324, 341 | slander of a brother before the father / heir | … לפני אביו אכלו | `וַיָּבֵא יוֹסֵף אֶת דִּבָּתָם רָעָה אֶל אֲבִיהֶם` (בראשית לז:ב) | [equivalent] | Our proposal (with 327, 328: the Joseph cluster slander – hatred – envy). |
| LH §11, 483 | *tušāmma iddi* | `דִּבָּה הטיל,` | `וַיָּבֵא יוֹסֵף אֶת דִּבָּתָם רָעָה אֶל אֲבִיהֶם` (בראשית לז:ב) | [equivalent] | `דִּבָּה` "דיבור רע על הזולת" |
| LH §165, 1948' | *ša īnšu maḫru* | אשר עינו מקבלת אותו, | `וְיִשְׂרָאֵל אָהַב אֶת יוֹסֵף מִכָּל בָּנָיו` (בראשית לז:ג) | [equivalent] | הבן המועדף |
| LI §31, 379′ | *dumu igi-na sa₆-ga* | לבן הנאה בעיניו | `וְיִשְׂרָאֵל אָהַב אֶת יוֹסֵף מִכָּל בָּנָיו` (בראשית לז:ג) | [equivalent] | The favoured son. |
| EST 327 | *ana ziāri* | לשנוא | `וַיִּשְׂנְאוּ אֹתוֹ` (בראשית לז:ד) | [equivalent] | The brothers hate the son the father loves. |
| HL HL2 §158a, 158a.1 | *[ták-ku LÚ-e]š?-pát BURU₁₄-i ku-uš-ša-ni [ti-i]-⸢e⸣-ez-zi še-ba-an iš-ḫa-a-i* | [אם איש] עצמו בקציר לְשָׂכָר [ייכ]נס – אלומות יאלם, | `וְהִנֵּה אֲנַחְנוּ מְאַלְּמִים אֲלֻמִּים בְּתוֹךְ הַשָּׂדֶה` (בראשית לז:ז) | [equivalent] | אותה עבודה: קשירת האלומות בקציר |
| EST 328 | *bēl qiʾʾi* | בעל הקנאה | `וַיְקַנְאוּ בוֹ אֶחָיו; וְאָבִיו שָׁמַר אֶת הַדָּבָר` (בראשית לז:יא) | [cognate] | *qinû* = `קנאה`; the brothers' envy, the father. Our proposal. |
| EST 209–210 | *šulmu ša šarri … emmarūni* | ואת שלום המלך … יראה | `לֶךְ נָא רְאֵה אֶת שְׁלוֹם אַחֶיךָ וְאֶת שְׁלוֹם הַצֹּאן` (בראשית לז:יד) | [cognate] (*šulmu*) / [equivalent] (*amāru*) | The same idiom. Our proposal. |
| LH §48, 907 | *ina lā mê* | באין מים | `וְהַבּוֹר רֵק אֵין בּוֹ מָיִם` (בראשית לז:כד) | [equivalent] | Phrase only. |
| LI §20, 239′–240′ | *dumu tul₂-ta šu ba-ra-an-kar* | ילד מן הַבּוֹר חילץ | `וַיַּעֲלוּ אֶת יוֹסֵף מִן הַבּוֹר` (בראשית לז:כח) | [equivalent] | A child pulled out of a pit/well (*tul₂* = Akk. *būrtu*, cognate of `בּוֹר`); the law breaks off. |
| LH §155, 1822' | *ana mārišu kallatam iḫīr* | לבנו כלה בחר | `וַיִּקַּח יְהוּדָה אִשָּׁה לְעֵר בְּכוֹרוֹ` (בראשית לח:ו) | [equivalent] | The father chooses the son's wife. |
| LH §166, 1966' | *aššātim īḫuz* | נשים נשא, | `וַיִּקַּח יְהוּדָה אִשָּׁה לְעֵר בְּכוֹרוֹ` (בראשית לח:ו) | [equivalent] | יהודה לוקח אשה לבנו הבכור |
| MAL §30, o iv 20 | *šumma abu ana bēt eme ša merāšu* | אם אב לבית החם של בנו | `וַיִּקַּח יְהוּדָה אִשָּׁה לְעֵר בְּכוֹרוֹ` (בראשית לח:ו) | [equivalent] | The father arranges his son's marriage. |
| MAL §30, o iv 28 | *ana aḫuzzete iddanši* | לנישואין יתננה | `וַיֹּאמֶר יְהוּדָה לְאוֹנָן בֹּא אֶל אֵשֶׁת אָחִיךָ וְיַבֵּם אֹתָהּ` (בראשית לח:ח) | [equivalent] | In Gen 38 too the father (Judah) is the subject who disposes of the widow. |
| HL HL2 §193, 193.1 | *ták-ku LÚ-aš MUNUS-an ḫar-zi ta LÚ-eš a-ki DAM-SÚ [ŠEŠ-ŠU da-a-i ta-an A-BU-ŠU]* | אם איש יחזיק אשה, והאיש ימות – את אשתו [אחיו ייקח; ושנית אביו] | `בֹּא אֶל אֵשֶׁת אָחִיךָ` (בראשית לח:ח) | [divergence] | בבראשית לח החותן בא על כלתו שלא ביודעין; בחוק החתי האב הוא השלב השני, במפורש |
| LH §142, 1671' | *ana bīt abiša* | לבית אביה | `שְׁבִי אַלְמָנָה בֵית אָבִיךְ` (בראשית לח:יא) | [equivalent] |  |
| LH §166, 1968' | *ṣeḫrim* | הצעיר | `עַד יִגְדַּל שֵׁלָה בְנִי` (בראשית לח:יא) | [equivalent] | הבן הצעיר שטרם נשא אשה |
| LH §171, 2087' | *mutiša uššab* | בעלה תשב; | `שְׁבִי אַלְמָנָה בֵית אָבִיךְ` (בראשית לח:יא) | [divergence] | תמר האלמנה נשלחת לשבת בבית אביה; כאן האלמנה יושבת במושב בעלה |
| MAL §25, o iii 82 | *šumma sinniltu ina bēt abišama usbat* | אם אשה בבית אביה יושבת | `וַתֵּלֶךְ תָּמָר וַתֵּשֶׁב בֵּית אָבִיהָ` (בראשית לח:יא) | [cognate] | *wašābu* = ישב, *bēt abi* = בית אב: the married woman still in her father's house when her husband dies – Tamar's situation; the protasis of §25, §26, §27, §32, §33, §38 (and §30). |
| MAL §30, o iv 34 | *kallāssu* | כלתו | `וַיֹּאמֶר יְהוּדָה לְתָמָר כַּלָּתוֹ` (בראשית לח:יא) | [cognate] | *kallatu* = כלה. |
| MAL §33, o iv 59 | *ina bētišunu tuššab* | בבית[ם] [תשב] | `שְׁבִי אַלְמָנָה בֵית אָבִיךְ` (בראשית לח:יא) | [equivalent] | The widow who "dwells"; restored. |
| MAL §33, o iv 69 | *almattu šīt* | אלמנה היא | `שְׁבִי אַלְמָנָה בֵית אָבִיךְ` (בראשית לח:יא) | [cognate] | *almattu* = אלמנה; in MAL a legal status (no husband, no father-in-law, no son). |
| MAL §43, r vi 25 | *ša 10 šanātišuni* | אשר בן עשר שנים הוא | `עַד יִגְדַּל שֵׁלָה בְנִי` (בראשית לח:יא) | [equivalent] | The minimum age of the substitute son. From memory. |
| UN §23?, 345–346 | *dam-ni ur₂-a-na-še₃ i₃-na-ni-tuš* | ואשתו אל חמיה ישבה | `שְׁבִי אַלְמָנָה בֵית אָבִיךְ` (בראשית לח:יא) | [divergence] | The widow dwells with her father-in-law (Tamar is sent to her father's house). |
| LH §159, 1864' | *ša ana bīt emišu* | אשר לבית חמיו | `הִנֵּה חָמִיךְ עֹלֶה תִמְנָתָה לָגֹז צֹאנוֹ` (בראשית לח:יג) | [cognate] | *emu* = `חָם` |
| MAL §29, o iv 14 | *emu* | חמיה | `הִנֵּה חָמִיךְ עֹלֶה תִמְנָתָה` (בראשית לח:יג) | [cognate] | *emu* = חם. |
| MAL §30, o iv 22 | *sinnilta ana merāšu lā tadnat* | האשה לבנו לא ניתנה | `וְהִוא לֹא נִתְּנָה לוֹ לְאִשָּׁה` (בראשית לח:יד) | [equivalent] | Nearly the same words (Tamar not given to Shelah). Our proposal. |
| MAL §40, r v 49 | *paṣṣunat* | רעול[ה] | `וַתְּכַס בַּצָּעִיף וַתִּתְעַלָּף` (בראשית לח:יד) | [equivalent] | The Hebrew verbs `כסה`, `התעלף` are kept out of the translation. |
| MAL §43, r vi 23–26 | *ina mārēšu rēḫāti … ana ša ḫadiūni iddan* | מבניו הנשארים … לאשר חָפֵץ יתן | `כִּי רָאֲתָה כִּי גָדַל שֵׁלָה וְהִוא לֹא נִתְּנָה לוֹ לְאִשָּׁה` (בראשית לח:יד) | [equivalent] | The father gives the girl to a remaining son; Judah did not. From memory. |
| MAL §40, r v 63–65 | *ša mutu lā ēḫzūšini … qaqqassa pattu lā tuptaṣṣan* | ואשר בעל לא נשאה – ברחוב ראשה פתוח, לא תתרעל | `וַיַּחְשְׁבֶהָ לְזוֹנָה כִּי כִסְּתָה פָּנֶיהָ` (בראשית לח:טו) | [divergence] | In MAL the unmarried *qadiltu* goes bare-headed like the prostitute; in Gen 38 the covered face makes Judah think "prostitute", and Hirah asks for "the *qedēšâ*". |
| MAL §40, r v 66–67 | *ḫarimtu lā tuptaṣṣan qaqqassa pattu* | זונה לא תתרעל, ראשה פתוח | `וַיַּחְשְׁבֶהָ לְזוֹנָה כִּי כִסְּתָה פָּנֶיהָ` (בראשית לח:טו) | [divergence] | **MAL forbids the prostitute to veil; in Gen 38:15 the veil is what marks Tamar as a prostitute** (or a different custom: `וַתְּכַס בַּצָּעִיף`, 38:14). From memory (the standard comparison). |
| MAL §39, r v 28 | *kī šaparte šēšubat* | כערבון הושבה | `אִם תִּתֵּן עֵרָבוֹן עַד שָׁלְחֶךָ` (בראשית לח:יז) | [equivalent] | A person held as pledge; in Gen 38 Judah's pledge. |
| LH §181, 2332' | *nadītam qadištam* | נדיתו, קדשה | `אַיֵּה הַקְּדֵשָׁה הִוא בָעֵינַיִם עַל הַדָּרֶךְ` (בראשית לח:כא) | [cognate] |  |
| MAL §40, r v 61–62 | *qadiltu ša mutu ēḫzūšini ina rebīte paṣṣunat* | קדשה אשר בעל נשאה ברחוב רעולה | `אַיֵּה הַקְּדֵשָׁה הִוא בָעֵינַיִם עַל הַדָּרֶךְ` (בראשית לח:כא) | [cognate] | *qadiltu* = `קְדֵשָׁה`; in MAL she may marry, and only the married one veils. |
| UN e007 | *niĝ₂ nam-nu-gig-kam* | דבר הקדשות הוא | `אַיֵּה הַקְּדֵשָׁה הִוא בָעֵינַיִם עַל הַדָּרֶךְ` (בראשית לח:כא) | [cognate via the Akk.] | *nu-gig* = *qadištu* = `קְדֵשָׁה`; wet-nursing as a function of the *nu-gig*. |
| LH §157, 1853' | *iqallûšunūti* | יקלום | `הוֹצִיאוּהָ וְתִשָּׂרֵף` (בראשית לח:כד) | [equivalent] |  |
| LH §110, 1238' | *iqallûši* | `יקלוה.` | `הוֹצִיאוּהָ וְתִשָּׂרֵף` (בראשית לח:כד) | [equivalent] | יהודה דן את תמר לשריפה. מן הזיכרון. |
| MAL §40, r v 76 | *qīra ana qaqqadiša itabbukū* | זפת על ראשה יצקו | `וַיֹּאמֶר יְהוּדָה הוֹצִיאוּהָ וְתִשָּׂרֵף` (בראשית לח:כד) | [divergence] | The punishment of the "harlot": pitch on the head (MAL), burning (Gen 38). |
| LH §156, 1838' | *ittatīl* (before the son knew her) | שכב | `וְלֹא יָסַף עוֹד לְדַעְתָּהּ` (בראשית לח:כו) | [divergence] | Judah and Tamar. From memory. |
| MAL §33, o iv 61 | *emuša ana māre … iddanši* | [חמיה לבן … יתננה] | `כִּי עַל כֵּן לֹא נְתַתִּיהָ לְשֵׁלָה בְנִי` (בראשית לח:כו) | [equivalent] | The father-in-law "gives" (or withholds) his daughter-in-law to his son. Restored. |
| MAL §33, o iv 65–66 | *ḫadīma ana emiša ana aḫuzzete iddanši* | ו(אם) חָפֵץ – לחמיה לנישואין יתננה | `וַיֹּאמֶר צָדְקָה מִמֶּנִּי` (בראשית לח:כו) | [equivalent] | **The widow given in marriage to her father-in-law**: what Tamar obtains by a ruse with Judah is a legal option in MAL. Our proposal (cf. Hittite Laws §193, from memory). |
| EST 45 | *ipqidūšūni* | הפקידו | `וַיַּפְקִדֵהוּ עַל בֵּיתוֹ` (בראשית לט:ד) | [cognate] | *paqādu* = `פקד` "appoint". |
| LH §177, 2223' | *ipaqqidūma* | יפקידו, | `וַיַּפְקִדֵהוּ עַל בֵּיתוֹ וְכָל יֶשׁ לוֹ נָתַן בְּיָדוֹ` (בראשית לט:ד) | [cognate] | אותו שורש (פקד), אותה פעולה: הפקדת בית בידי מי שינהל אותו |
| LH §25, 612 | *īnšu iššī* | את עינו נשא | `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף` (בראשית לט:ז) | [cognate] | The same idiom of the covetous look. Our proposal. |
| LH §159, 1869' | *uptallisma* | הביט, | `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף` (בראשית לט:ז) | [equivalent] | נתינת עין באחר |
| UN e028 | *nin-a-ni* | גבירתו | `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף; וַתֹּאמֶר שִׁכְבָה עִמִּי` (בראשית לט:ז) | [equivalent] | The slave and his master's wife. |
| MAL §12, o ii 15–16 | *iṣṣabassu lanīkkime* | תְּפָשָׂהּ, "אבוא עלייך!" | `וַתִּתְפְּשֵׂהוּ בְּבִגְדוֹ לֵאמֹר שִׁכְבָה עִמִּי` (בראשית לט:יב) | [equivalent] | Same sequence with the roles reversed (*ṣabātu* = `תפש`). Our proposal. |
| MAL §22, o iii 5 | *mā ittīkanni* | "בא עלי" | `בָּא אֵלַי לִשְׁכַּב עִמִּי וָאֶקְרָא בְּקוֹל גָּדוֹל` (בראשית לט:יד) | [equivalent] | The woman's accusation in direct speech, `בא אל`. |
| IN IN §14, 14.2 | *{LÚ}SAGI.⸢A⸣ LÚ˽{GIŠ}⸢BANŠUR⸣ {LÚ}MUḪALDIM {LÚ}NINDA.DÙ.DÙ {LÚ}KÚRUN.NA nu-uš-ma-aš DINGIR{MEŠ}-aš* | המַשְׁקֶה, איש־השולחן, המבשל, האופה, מבשל־השכר – הָאֵלִים: | `חָטְאוּ מַשְׁקֵה מֶלֶךְ מִצְרַיִם וְהָאֹפֶה לַאֲדֹנֵיהֶם` (בראשית מ:א) | [equivalent] | המשקה והאופה של חצר המלך, אותם תפקידים בחצר האל. *SAGI* (אכד. *šāqû*) הוא הקרוב האטימולוגי של `מַשְׁקֶה` |
| EST 204 | *rēška ittiši* | את ראשך נשא | `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ` (בראשית מ:יג) | [cognate] | "Lift the head" = summon (from memory: the standard comparison). |
| UN prol. 75–78 | *nam-ḫa-ni ensi₂ lagaš{ki} ḫe₂-mi-il₂* | את נמחני, המושל של לגש, *נשאתי* | `וַיִּשָּׂא אֶת רֹאשׁ שַׂר הַמַּשְׁקִים וְאֶת רֹאשׁ שַׂר הָאֹפִים בְּתוֹךְ עֲבָדָיו` (בראשית מ:כ) | [equivalent] | *il₂* "lift" (CDLI "elevated") vs the old reading *ug₅* "killed" (ePSD2): like Pharaoh's "lifting the head" (restoration, 40:21) and "lifting the head from upon you" (execution, 40:19). |
| EST 244 | *nakāru* | תתנכרו | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | [cognate] |  |
| LH §120, 1364' | *ittakir* | התנכר | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | [cognate] | *nakāru* = `נכר`. Our proposal. |
| EST 97 | *ina kēnāte* | בכנות | `כֵּנִים אֲנַחְנוּ` (בראשית מב:יא) | [cognate] | *kīnu* = `כֵּן` "honest". |
| LH §20, 564 | *nīš ilim* | חיי האל | `חֵי פַרְעֹה` (בראשית מב:טו) | [equivalent] | Oath "by the life of". |
| MALB §19, r vii 7–8 | *nīš šarre izkuraššumma* | `את חיי המלך [הזכיר] לו` | `חֵי פַרְעֹה אִם תֵּצְאוּ מִזֶּה` (בראשית מב:טו) | [equivalent] | Oath by the king's life; the verb restored. |
| LH §166, 1968' | *ṣeḫrim* | הצעיר | `וְהַצָּעִיר כִּצְעִרָתוֹ` (בראשית מג:לג) | [cognate] | *ṣeḫru* = `צָעִיר` |
| MALB §1, o ii 10 | *marʾu ṣehru ussak* | `הבן הצעיר יקצה` | `הַבְּכֹר כִּבְכֹרָתוֹ וְהַצָּעִיר כִּצְעִרָתוֹ` (בראשית מג:לג) | [equivalent] | The youngest allots the movables, the eldest chooses ("one divides, the other chooses"?) – הצעה שלנו. |
| MALB §1, o ii 3 | *2 qāta* | `שתי יָדוֹת` | `וַתֵּרֶב מַשְׂאַת בִּנְיָמִן מִמַּשְׂאֹת כֻּלָּם חָמֵשׁ יָדוֹת` (בראשית מג:לד) | [equivalent] | *qātu* "hand" = "portion", the same extension as Hebrew `יד` (הצעה שלנו). |
| LH §6, 380 | *išriq* | `גנב,` | `אֲשֶׁר יִמָּצֵא אִתּוֹ מֵעֲבָדֶיךָ וָמֵת` (בראשית מד:ט) | [equivalent] | בסיפורי האבות, גניבת חפץ של אל (התרפים, הגביע) מחייבת מוות, כמו כאן ולא כמו בחוקי הגניבה של ספר הברית (תשלומים). הצעה שלנו |
| MAL §43, r vi 24 | *ištu muḫḫi māre rabie adi muḫḫi mār ṣeḫre* | מן הבן הגדול ועד הבן הצעיר | `בַּגָּדוֹל הֵחֵל וּבַקָּטֹן כִּלָּה` (בראשית מד:יב) | [equivalent] | The order formula. |
| LH §237, 2792' | *iṣēnši* | `טען בה,` | `טַעֲנוּ אֶת בְּעִירְכֶם` (בראשית מה:יז) | [cognate?] |  |
| HL HL2 §122, 122.1 | *ták-ku an-da ap-pa-an-da {GIŠ}MAR.GÍD.DA ku-iš-ki ta-a-i-e-ez-[zi* | אם מישהו יגנוב עֲגָלָה *אֲסוּרָה* […] | `וַיֶּאְסֹר יוֹסֵף מֶרְכַּבְתּוֹ` (בראשית מו:כט) | [equivalent] | "אסר" – רתימה; רק אם *anda appant-* הוא "רתום" (crux) |
| HL HL2 §172, 172.1 | *ták-ku LÚ EL-LAM ki-iš-du-wa-an-ti MU{KAM}-ti ku-iš-ki* | אם מישהו בשנת רעב איש בן חורין | `קְנֵה אֹתָנוּ וְאֶת אַדְמָתֵנוּ בַּלָּחֶם` (בראשית מז:יט) | [equivalent] | ברעב, החיים נקנים בחירות |
| HL HL1 §47a, 265 | *takku [A.ŠÀ{ḪI]}.A NÍG.BA LUGAL kuiški ḫarzi* | אם מישהו יחזיק [בשדות] מַתַּת המלך, | `רַק אַדְמַת הַכֹּהֲנִים לֹא קָנָה: כִּי חֹק לַכֹּהֲנִים מֵאֵת פַּרְעֹה` (בראשית מז:כב) | [equivalent] | קרקע בחסות מלכותית, פטורה ממס |
| LH §46, 876–878 | *ana mišlāni … ana šaluš eqlam iddin* | בין למחצה ובין לשליש את השדה נתן | `וּנְתַתֶּם חֲמִישִׁית לְפַרְעֹה; וְאַרְבַּע הַיָּדֹת יִהְיֶה לָכֶם לְזֶרַע הַשָּׂדֶה` (בראשית מז:כד) | [equivalent] | Fixed shares between owner and cultivator; the Hebrew `למחצה / לשליש` is the Mishnah's (BM 9:1). Our proposal. |
| LH §64, 1110 | *šittīn* | שני שלישים | `וּנְתַתֶּם חֲמִישִׁית לְפַרְעֹה` (בראשית מז:כד) | [equivalent] | The owner's share of the yield. Our proposal. |
| HL HL1 §53, 291 | *takku LÚ˽{GIŠ}TUKUL Ù {LÚ}ḪA.LA-ŠU takšan ašanzi* | אם איש־הכלי ואיש־חלקו יחד יהיו, | `וְאַרְבַּע הַיָּדֹת יִהְיֶה לָכֶם` (בראשית מז:כד) | [equivalent] | חלוקה ב"ידות" |
| HL HL1 §53, 300 | *Ù NÍG.BA 2 QA-TAM LÚ˽{GIŠ}TUKUL dāi* | ומן המַתַּת שתי ידות איש־הכלי ייקח, | `וְאַרְבַּע הַיָּדֹת יִהְיֶה לָכֶם` (בראשית מז:כד) | [equivalent] | "יד" כמנה, אותו שימוש באכדית ובעברית |
| LH §170, 2045' | *mārūa iqtabi* | "בני" אמר, | `אֶפְרַיִם וּמְנַשֶּׁה כִּרְאוּבֵן וְשִׁמְעוֹן יִהְיוּ לִי` (בראשית מח:ה) | [equivalent] | אימוץ בהכרזה, שמכניס את הבנים לנחלה כאחיהם. מן הזיכרון (ההשוואה מקובלת) |
| LH §185, 2401' | *ana mārūtim* | לבנות | `אֶפְרַיִם וּמְנַשֶּׁה כִּרְאוּבֵן וְשִׁמְעוֹן יִהְיוּ לִי` (בראשית מח:ה) | [equivalent] |  |
| LH §190, 2438' | *lā imtanūšu* | לא מנאו, | `אֶפְרַיִם וּמְנַשֶּׁה כִּרְאוּבֵן וְשִׁמְעוֹן יִהְיוּ לִי` (בראשית מח:ה) | [equivalent] | יעקב "מונה" את בני יוסף עם בניו |
| LH §170, 2047' | *imtanūšunūti* | מנאם, | `עַל שֵׁם אֲחֵיהֶם יִקָּרְאוּ בְּנַחֲלָתָם` (בראשית מח:ו) | [equivalent] | הבנים נמנים בנחלה עם אחיהם |
| LH §170, 2045' | *mārūa iqtabi* | "בני" אמר, | `בָּנַי הֵם אֲשֶׁר נָתַן לִי אֱלֹהִים בָּזֶה` (בראשית מח:ט) | [equivalent] | ההכרזה "בני הם" |
| LH §165, 1957' | *qīšti abum* | את המענק אשר האב | `וַאֲנִי נָתַתִּי לְךָ שְׁכֶם אַחַד עַל אַחֶיךָ` (בראשית מח:כב) | [equivalent] | חלק יתר לבן המועדף, מעבר לחלקו בין האחים. מן הזיכרון (ההשוואה מקובלת) |
| LI §31, 379′–380′ | *dumu igi-na sa₆-ga niĝ₂-ba in-na-an-ba* | לבן הנאה בעיניו מענק העניק לו | `וַאֲנִי נָתַתִּי לְךָ שְׁכֶם אַחַד עַל אַחֶיךָ` (בראשית מח:כב) | [equivalent] | The father's extra gift to a favoured son, above his brothers. |
| LH §158, 1862' | *innassaḫ* | ינסח | `כִּי עָלִיתָ מִשְׁכְּבֵי אָבִיךָ` (בראשית מט:ד) | [equivalent] | Cf. `וַיִּשְׁכַּב אֶת בִּלְהָה פִּילֶגֶשׁ אָבִיו` (בראשית לה:כב). |
| LH §169, 2028' | *ana abišu* | כלפי אביו | `פַּחַז כַּמַּיִם אַל תּוֹתַר כִּי עָלִיתָ מִשְׁכְּבֵי אָבִיךָ` (בראשית מט:ד) | [equivalent] | עוון של בן כלפי אביו, ששולל את מעמדו כבכור (מט:ג `רְאוּבֵן בְּכֹרִי אַתָּה`). מן הזיכרון |
| LH §246, 2856' | *labiānšu ittakis* | את גיד ערפו קצץ | `וּבִרְצֹנָם עִקְּרוּ שׁוֹר` (בראשית מט:ו) | [equivalent] | Cutting a tendon to disable an ox. Our proposal. |
| LH prol. 161 | *ḫaṭṭim* | לשרביט | `לֹא יָסוּר שֵׁבֶט מִיהוּדָה` (בראשית מט:י) | [equivalent] |  |
| LH epil. 3289', 3295' | *igirrê … lidammiqu* | את הניבים (עלי) … ישפרו | `הַנֹּתֵן אִמְרֵי שָׁפֶר` (בראשית מט:כא) | [equivalent] | Utterances made fair. Our proposal. |
| HL HL1 §37, 191 | *zik=wa UR.BAR.RA kišat* | "אתה – לזאב נעשית". | `בִּנְיָמִין זְאֵב יִטְרָף` (בראשית מט:כז) | [absent] | ), לא מנודה |
| EST 287 | same | same | `וַיַּשְׁבַּע יוֹסֵף אֶת בְּנֵי יִשְׂרָאֵל` (בראשית נ:כה) | [equivalent] | An oath binding later generations. |

### Exodus 1

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3300' | *ibbaššû* | יהיה | `וַיָּקָם מֶלֶךְ חָדָשׁ עַל מִצְרָיִם` (שמות א:ח) | [equivalent] | `יקום` avoided. |
| UN prol. 176b | *kiĝ₂ ba-ra-ba-ni-ĝar* | ועבודה לא שמתי עליהם | `וַיָּשִׂימוּ עָלָיו שָׂרֵי מִסִּים לְמַעַן עַנֹּתוֹ בְּסִבְלֹתָם` (שמות א:יא) | [divergence] | "Placing work on" as oppression; the king denies it (of his own kin?). |
| LH §176, 2168' | *bītam īpušū* | בית עשו, | `וַיַּעַשׂ לָהֶם בָּתִּים` (שמות א:כא) | [equivalent] | "עשיית בית" = הקמת משפחה ומשק |
| LH §191, 2447' | *bīssu īpuš* | ביתו עשה, | `וַיְהִי כִּי יָרְאוּ הַמְיַלְּדֹת אֶת הָאֱלֹהִים וַיַּעַשׂ לָהֶם בָּתִּים` (שמות א:כא) | [equivalent] | "עשה בית" = הקים משפחה |

### Exodus 2

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §194, 2486' | *mārašu ana mušēniqtim* | את בנו למינקת | `הַאֵלֵךְ וְקָרָאתִי לָךְ אִשָּׁה מֵינֶקֶת מִן הָעִבְרִיֹּת וְתֵינִק לָךְ אֶת הַיָּלֶד` (שמות ב:ז) | [cognate] | אותה מילה בדיוק (*mušēniqtu* = `מֵינֶקֶת`, בינוני הפעיל = Š של אותו שורש), ובאותו מוסד: בת פרעה מוסרת את הילד למינקת בשכר (שמות ב:ט, ראו 2487') |
| LI §20b, 244′–246′ | *dumu a₂-e₃-a … nu-bulug₃-e-de₃ … ama tu-da-na ba-an-ši-gur-ru* | את הילד המגודל … לא יגדל … אל אמו יולדתו ישוב | `וַתֵּלֶךְ הָעַלְמָה וַתִּקְרָא אֶת אֵם הַיָּלֶד` (שמות ב:ח) | [equivalent] | The fostered child returned to his birth mother (Moses to his mother, for nursing, for wages: `וַאֲנִי אֶתֵּן אֶת שְׂכָרֵךְ` (שמות ב:ט)). §20a–c may not belong to LI (Wilcke). Cross-collection: LH §186 (2414′–2415′) the fostered child `לבית אביו` returns. |
| LH §194, 2487' | *iddinma* | נתן, | `הֵילִיכִי אֶת הַיֶּלֶד הַזֶּה וְהֵינִקִהוּ לִי וַאֲנִי אֶתֵּן אֶת שְׂכָרֵךְ` (שמות ב:ט) | [equivalent] | חוזה הנקה: מסירת הילד והשכר |
| LE §32, 108 | *mārašu ana šūnuqim … iddinma* | את בנו להיניק … נתן | `הֵילִיכִי אֶת הַיֶּלֶד הַזֶּה וְהֵינִקִהוּ לִי וַאֲנִי אֶתֵּן אֶת שְׂכָרֵךְ` (שמות ב:ט) | [cognate] | *enēqu* Š = `הֵינִיק`: the wet-nursing contract for wages. |
| UN e003–e008 | *dumu lu₂-ra lu₂ ga i₃-ni-gu₇, mu 3 … um-me-da ḫun-ŋa₂ mu a₂-ni 1 gin₂* | אם לילד איש איש חלב האכיל, לשלוש שנים … מינקת שכורה – לשנה דמיה שקל אחד | `הֵילִיכִי אֶת הַיֶּלֶד הַזֶּה וְהֵינִקִהוּ לִי וַאֲנִי אֶתֵּן אֶת שְׂכָרֵךְ` (שמות ב:ט) | [equivalent] | The hired wet-nurse and her wages (Moses' mother); cf. LH §194. |
| LH §185, 2400' | *ina mêšu* | במימיו | `וַתִּקְרָא שְׁמוֹ מֹשֶׁה וַתֹּאמֶר כִּי מִן הַמַּיִם מְשִׁיתִהוּ` (שמות ב:י) | [divergence] | ילד שנמשה מן המים ונלקח לבן; המים כאן אחרים (היאור, לא מי הלידה). הצעה שלנו, לעיון בלבד |
| LH §185, 2401' | *ana mārūtim* | לבנות | `וַתְּבִאֵהוּ לְבַת פַּרְעֹה וַיְהִי לָהּ לְבֵן` (שמות ב:י) | [equivalent] |  |
| LH §185, 2405' | *ul ibbaqqar* | לא יעורער. | `וַיִּגְדַּל הַיֶּלֶד וַתְּבִאֵהוּ לְבַת פַּרְעֹה וַיְהִי לָהּ לְבֵן` (שמות ב:י) | [divergence] | בשמות ב האם הביולוגית מינקת את הילד ומחזירה אותו לבת פרעה אחרי שגדל; כאן ילד שנלקח "במימיו" שייך למגדל, ואין לבית האב תביעה עליו |
| MAL §28, o iv 5 | *ṭuppu ša marʾuttišu lā šaṭrat* | ולוח בנותו לא נכתב | `וַיְהִי לָהּ לְבֵן` (שמות ב:י) | [absent] | No written adoption in the Torah. |
| LI §20, 239′ | *dumu tul₂-ta* | ילד מן הבור | `וַיְהִי לָהּ לְבֵן; וַתִּקְרָא שְׁמוֹ מֹשֶׁה וַתֹּאמֶר כִּי מִן הַמַּיִם מְשִׁיתִהוּ` (שמות ב:י) | [equivalent] | A foundling drawn from water who becomes his rescuer's son; whether §20 treats adoption is lost in the break. |
| LH §186, 2413' | *iḫiaṭ* | יחקור, | `וַיְהִי בַּיָּמִים הָהֵם וַיִּגְדַּל מֹשֶׁה וַיֵּצֵא אֶל אֶחָיו וַיַּרְא בְּסִבְלֹתָם` (שמות ב:יא) | [divergence] | הילד המאומץ שגדל בבית פרעה ויוצא אל אחיו; כאן הילד ש"חוקר" את הוריו – והחוק מחזיר אותו לבית אביו. הצעה שלנו |

### Exodus 3

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3237'–3239' | idem | idem | `זֶה שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר` (שמות ג:טו) | [cognate] | *zakāru* = `זכר`; *dāru* ~ `דור`. |

### Exodus 5

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| MALB §14, r v 27 | *libnāte ilbin* | `ולבנים לָבַן` | `לִלְבֹּן הַלְּבֵנִים כִּתְמוֹל שִׁלְשֹׁם` (שמות ה:ז) | [cognate] |  |
| EST 603–605 | *ina pān ili u šarri amēlūte nipiškunu libʾiš* | לפני האל והמלך ובני האדם נשימתכם תבאש | `אֲשֶׁר הִבְאַשְׁתֶּם אֶת רֵיחֵנוּ בְּעֵינֵי פַרְעֹה וּבְעֵינֵי עֲבָדָיו` (שמות ה:כא) | [cognate] | The same idiom: to "stink" before the king = to be hateful to him (also Gen 34:30; 1 Sam 13:4; 2 Sam 10:6; 16:21). Our proposal. |

### Exodus 7

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 603 | *biʾšūni* | באוש | `וּבָאַשׁ הַיְאֹר` (שמות ז:יח) | [cognate] | *baʾāšu* = `באש`. |

### Exodus 8

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 599 | *kalmatu* | כינים | `וַתְּהִי הַכִּנָּם בָּאָדָם וּבַבְּהֵמָה` (שמות ח:יג) | [equivalent] |  |

### Exodus 9

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §249, 2877' | *ilum imḫassuma* | ואל מחצו | `הִנֵּה יַד יְהוָה הוֹיָה בְּמִקְנְךָ` (שמות ט:ג) | [equivalent] | The god striking livestock. |
| LH §266, 3017' | *lipit ilim* | נגיעת אל | `הִנֵּה יַד יְהוָה הוֹיָה בְּמִקְנְךָ … דֶּבֶר כָּבֵד מְאֹד` (שמות ט:ג) | [equivalent] | Epidemic in livestock as the god's hand. |
| HL HL1 §75, 434 | *IŠ-TU DINGIR-LIM=war=aš BA.ÚŠ* | "מן הָאֵל מת", | `הִנֵּה יַד יְהוָה הוֹיָה בְּמִקְנְךָ אֲשֶׁר בַּשָּׂדֶה` (שמות ט:ג) | [equivalent] | מות בהמות כ"יד האל"; הנוסח החתי הקדום אומר ממש "ביד האל" (`I-NA QA-TI DINGIR-LIM`) |
| LH §45, 869 | *Adad irtaḫiṣ* | אדד שטף | `וְאֵת כָּל עֵשֶׂב הַשָּׂדֶה הִכָּה הַבָּרָד` (שמות ט:כה) | [equivalent] | A divine blow to the field. Our proposal. |
| HL HL2 §160b, 160b.1 | *[ták-ku a-te-eš Z]ABAR ŠA 2 MA.NA KI.LÁ a-ni-e-ez-zi 1 PA ZÍZ ku-uš-ša-[aš-še-et]* | [אם] יעבד [גרזן] אָרָד של שתי מנים משקל – פָּרִיס אחד כוסמת שְׂכָ[רוֹ]. | `וְהַחִטָּה וְהַכֻּסֶּמֶת לֹא נֻכּוּ` (שמות ט:לב) | [equivalent] | הכוסמת כדגן השדה |
| EST 471 | *kīma tīki ana kaqqar littattuk* | כטיפות לקרקע יתכו | `וּמָטָר לֹא נִתַּךְ אָרְצָה` (שמות ט:לג) | [cognate] (*natāku* = `נתך`) | Same verb, "to the ground", of rain. Our proposal. |

### Exodus 10

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 600 | *lušākilu* | יאכילו | `וַיֹּאכַל אֶת כָּל עֵשֶׂב הָאָרֶץ וְאֵת כָּל פְּרִי הָעֵץ` (שמות י:טו) | [cognate] | The locust "eats" the land. |

### Exodus 14

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST T i 5 | *tašlīšāni* | השלישים | `וְשָׁלִשִׁם עַל כֻּלּוֹ` (שמות יד:ז) | [cognate] | Tayinat only. |

### Exodus 15

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 611 | *ina mê luṭabbû* | במים יטביעו | `וּמִבְחַר שָׁלִשָׁיו טֻבְּעוּ בְיַם סוּף` (שמות טו:ד) | [cognate] | *ṭebû* = `טבע`. |
| LH §236, 2781' | *elippam uṭṭebbi* | `ואת הספינה הטביע` | `וּמִבְחַר שָׁלִשָׁיו טֻבְּעוּ בְיַם סוּף` (שמות טו:ד) | [cognate] |  |
| LH prol. 97 | idem | idem | `מָכוֹן לְשִׁבְתְּךָ פָּעַלְתָּ יְהוָה מִקְּדָשׁ אֲדֹנָי כּוֹנְנוּ יָדֶיךָ` (שמות טו:יז) | [equivalent] | Our proposal. |

### Exodus 18

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 305 | *ḫadû* | תשמחו | `וַיִּחַדְּ יִתְרוֹ` (שמות יח:ט) | [cognate] | Note only (`חדה` too rare). |
| LH epil. 3240'–3242' | *awīlum ḫablum ša awatam iraššû* | איש חבול אשר דבר יהיה לו | `כִּי יִהְיֶה לָהֶם דָּבָר בָּא אֵלַי וְשָׁפַטְתִּי בֵּין אִישׁ וּבֵין רֵעֵהוּ` (שמות יח:טז) | [equivalent] | The same idiom ("have a matter") and the same next step (come to the judge). Our proposal. |
| LH prol. 187 | *tērētim* | את הצווים | `אֶת הַחֻקִּים וְאֶת הַתּוֹרֹת` (שמות יח:כ) | [cognate?] | *têrtu* ~ `תּוֹרָה` is a debated etymology; `תורה` reserved. From memory. |
| LH prol. 295–296 | idem | idem | `וְהוֹדַעְתָּ לָהֶם אֶת הַדֶּרֶךְ יֵלְכוּ בָהּ` (שמות יח:כ) | [equivalent] | Jethro: teaching the people the way. Our proposal. |
| LH epil. 3149' | *mātam ūsam kīnam* | את הארץ אורח נכון | `וְהוֹדַעְתָּ לָהֶם אֶת הַדֶּרֶךְ יֵלְכוּ בָהּ` (שמות יח:כ) | [equivalent] | Our proposal. |
| LH epil. 3254' | *dīnšu līmur* | את דינו יראה | `וְהוֹדַעְתָּ לָהֶם אֶת הַדֶּרֶךְ יֵלְכוּ בָהּ` (שמות יח:כ) | [equivalent] | The judge makes the case known. Our proposal. |
| LH epil. 3317' | *kibsam rīdam* | דרך ונוהג | `וְהוֹדַעְתָּ לָהֶם אֶת הַדֶּרֶךְ יֵלְכוּ בָהּ וְאֶת הַמַּעֲשֶׂה אֲשֶׁר יַעֲשׂוּן` (שמות יח:כ) | [equivalent] | Path and conduct shown to the people. Our proposal. |
| LH prol. 31 | *pāliḫ ilī* | ירא האלים | `אַנְשֵׁי חַיִל יִרְאֵי אֱלֹהִים אַנְשֵׁי אֱמֶת שֹׂנְאֵי בָצַע` (שמות יח:כא) | [equivalent] | Fear of god as the judge's quality. |
| LE §48, 152–153 | *ana dīnim ša kaspim ištu 1/3 mana adi 1 mana dayyānū dīnam ušaḫḫazūšu* | ולדין של כסף … הדיינים את הדין יאחיזוהו | `וְכָל הַדָּבָר הַקָּטֹן יִשְׁפְּטוּ הֵם` (שמות יח:כב) | [equivalent] | The small cases to the judges. |
| LE §48, 154 | *awat napištim ana šarrimma* | ודבר נפשות – למלך הוא | `וְהָיָה כָּל הַדָּבָר הַגָּדֹל יָבִיאוּ אֵלֶיךָ` (שמות יח:כב) | [equivalent] | The capital case "to the king"; Exodus "to you (Moses)". |
| MAL §15, o ii 47–48 | *lū ana muḫḫi šarre lū ana muḫḫi dayyānē ittabla* | בין אל המלך בין אל הדיינים הוביל | `וְהָיָה כָּל הַדָּבָר הַגָּדֹל יָבִיאוּ אֵלֶיךָ` (שמות יח:כב) | [equivalent] | Bringing the case to the ruler or to the judges. |
| LE §48, 154 | *awat napištim ana šarrimma* | ודבר נפשות – למלך הוא | `אֶת הַדָּבָר הַקָּשֶׁה יְבִיאוּן אֶל מֹשֶׁה` (שמות יח:כו) | [equivalent] |  |

### Exodus 19

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §141, 1633' | *sikiltam* | וסגולה | `וִהְיִיתֶם לִי סְגֻלָּה מִכָּל הָעַמִּים` (שמות יט:ה) | [cognate] | *sikiltu* הוא הקרוב של `סְגֻלָּה` "רכוש פרטי, אוצר"; `סגולה תסגל` שומר על הצירוף האטימולוגי. מן הזיכרון (גרינברג 1951) |
| IN IN §10, 10.5 | *[ ]x-⸢zi⸣ na-aš-za MUNUS-ni-⸢i⸣ GAM-an še-eš-du* | […]… – ישכב עם אשה! | `אַל תִּגְּשׁוּ אֶל אִשָּׁה` (שמות יט:טו) | [divergence] | ההקבלות טיפולוגיות |

### Exodus 20

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3219' | *ina maḫar ṣalmiya* | לפני צלמי | `לֹא תַעֲשֶׂה לְךָ פֶסֶל` (שמות כ:ג) | [divergence] | The law stands before the king's image. *ṣalmu* = `צלם` [cognate]. Our proposal. |
| IN IN §3, 3.1 | *⸢ma⸣-a-an-ma-aš-ta ZI-TUM DINGIR-L[IM-ma ku-i]š ⸢TUKU.TUKU-ia-nu-zi⸣* | ואילו אם מישהו יַזְעִים את נפש הָאֵל – | `פֹּקֵד עֲוֹן אָבֹת עַל בָּנִים עַל שִׁלֵּשִׁים וְעַל רִבֵּעִים לְשֹׂנְאָי` (שמות כ:ד) | [equivalent] | גם אל ישראל "פוקד" חטא על הדורות |
| IN IN §19, 19.22 | *QA-DU DAM{MEŠ}-NI DUMU{MEŠ}-NI pár-ḫe-eš-ke* | עם נשינו ובנינו – רדוף!" | `פֹּקֵד עֲוֹן אָבֹת עַל בָּנִים` (שמות כ:ד) | [equivalent] | ראו 3.1: האל הרודף את האשם ואת ביתו; כאן האשמים עצמם מזמינים זאת בשבועה. ההקבלה טיפולוגית |
| LI prol. 74–75 | *dumu ad-da-bi-ir ḫu-mu-ne-en-il₂* | את הבן לאביו השאתי | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא) | [equivalent] | The son's duty to his father as royal law; in the Torah a commandment (with long life, as in the LI blessing 454′). |
| LH §1, 306 | *nērtam* | רצח | `לֹא תִרְצָח` (שמות כ:יב) | [equivalent] | *nērtu* < *nêru* "strike, kill"; `הרג` is *dâku*. This Bible's numbering (= Exod 20:13). |
| LH §3, 337–338 | *šībūt sarrātim* | לעדות שקרים | `לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | [equivalent] | This Bible's numbering (= Exod 20:16). |
| UN §27, 406–407 | *lu₂ ni₂-zuḫ ba-an-ku₄* | ואיש גנב נעשה | `לֹא תִגְנֹב    לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | [equivalent] | The perjurer as a thief: the two commandments side by side. |
| LH §25, 612 | idem | idem | `לֹא תַחְמֹד בֵּית רֵעֶךָ` (שמות כ:יג) | [equivalent] | This Bible's numbering (= Exod 20:17). |
| LH epil. 3236'–3239' | *ina Esagila … šumī … lizzakir* | באסגיל … שמי … ייזכר | `בְּכָל הַמָּקוֹם אֲשֶׁר אַזְכִּיר אֶת שְׁמִי` (שמות כ:כ) | [cognate] | Name remembered at the sanctuary; of God in Exodus. |

### Exodus 21

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3144'–3145' | *dīnāt mīšarim* | דיני מישרים | `וְאֵלֶּה הַמִּשְׁפָּטִים אֲשֶׁר תָּשִׂים לִפְנֵיהֶם` (שמות כא:א) | [equivalent] | LH names its laws at the end, the Covenant Code at the start. No `(אלה)` added. From memory (Paul 1970). |
| LH §117, 1331' | *šalaš šanātim* | שלוש שנים | `כִּי תִקְנֶה עֶבֶד עִבְרִי שֵׁשׁ שָׁנִים יַעֲבֹד וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [divergence] | Three years / release in the fourth vs. six / the seventh. From memory (standard). |
| LH §117, 1336' | idem | idem | `וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [equivalent] | `חפשי` reserved. |
| LH §278, 3100' | *wardam amtam išāmma* | עבד (או) אמה קנה | `כִּי תִקְנֶה עֶבֶד עִבְרִי` (שמות כא:ב) | [equivalent] |  |
| LH §280, 3127' | *andurāršunu* | דרורם | `יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [equivalent] | `חפשי` kept out. |
| LH §7, 398 | *ištām* | `קנה,` | `כִּי תִקְנֶה עֶבֶד עִבְרִי` (שמות כא:ב) | [equivalent] | *šâmu* = |
| LH §30, 684 | *šalāš šanāt* | `שלוש שנים` | `כִּי תִקְנֶה עֶבֶד עִבְרִי שֵׁשׁ שָׁנִים יַעֲבֹד` (שמות כא:ב) | [divergence] | תקופת זמן שאחריה המצב המשפטי משתנה; כאן אחרי שלוש שנים של שירות המחזיק החדש זוכה. הצעה שלנו (השוו גם את שלוש השנים של עבדות החוב, §117). |
| LE §15, 53–54 | *ina qāti wardim u amtim … ul imaḫḫar* | מיד עבד ואמה … לא יקבל | `כִּי תִקְנֶה עֶבֶד עִבְרִי` (שמות כא:ב) | [absent] | No Torah rule on trading with slaves. |
| MAL §45, r vi 55 | *aššat ša ḫupše* | אשת חֻפְשׁוּ | `וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [cognate?] | *ḫupšu* (a lower-class dependant) is discussed as the etymon of `חָפְשִׁי`; the meanings differ. From memory. |
| LI §14, 197′–199′ | *a-ra₂ 2-am₃ un-ge-en arad₂-bi al-bur₂-e* | פעמיים כונן, העבד ההוא ישוחרר | `וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [divergence] | Release of a slave: after a fixed term (Torah) vs after proof (or payment) twice over (LI; the reading is open). `חפשי` kept out. |
| LI prol. 80–90 | *e₂ ad-da e₂ šeš-šeš-a-ka … 1(ĝeš₂) 1(u) ḫe₂-gub … iti-da u₄ 1(u)-am₃ ḫe₂-gub* | את בית האב, את בית האחים שבעים (יום) העמדתי … בירח עשרה ימים העמדתי | `שֵׁשׁ שָׁנִים יַעֲבֹד וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [divergence] | A limit on forced labour: LI fixes the free household's days of royal service; the Torah limits the years of the Hebrew slave. |
| HL HL1 §35, 181 | *takku MUNUS-an EL-LUM {LÚ}AGRIG našma {LÚ}SIPA pi[tt]e[nuz]i* | אם סוכן או רועה [יבריח] אשה בת חורין, | `כִּי תִקְנֶה עֶבֶד עִבְרִי שֵׁשׁ שָׁנִים יַעֲבֹד; וּבַשְּׁבִעִת יֵצֵא לַחָפְשִׁי חִנָּם` (שמות כא:ב) | [divergence] | תהליך הפוך: בתורה עבד יוצא לחירות אחרי שש שנים; כאן בת חורין נעשית אָמָה אחרי שלוש |
| LH §176, 2166' | *īrubma* | באה, | `אִם בַּעַל אִשָּׁה הוּא וְיָצְאָה אִשְׁתּוֹ עִמּוֹ` (שמות כא:ג) | [equivalent] | אשה בת חורין שבאה לבית עבד ושומרת על מעמדה. מן הזיכרון |
| MAL §35, o iv 77–78 | *mimma ammar naṣṣutūni gabbu ša mutiša* | מאומה – כל אשר נשאה – הכל של בעלה | `אִם בַּעַל אִשָּׁה הוּא וְיָצְאָה אִשְׁתּוֹ עִמּוֹ` (שמות כא:ג) | [divergence] | Property follows the house entered. |
| LH §119, 1347' | *ša mārī uldušum* | אשר בנים ילדה לו | `אִם אֲדֹנָיו יִתֶּן לוֹ אִשָּׁה וְיָלְדָה לוֹ בָנִים אוֹ בָנוֹת` (שמות כא:ד) | [equivalent] | The same phrase, a different case. |
| LH §135, 1565' | *illaku* | ילכו. | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | שם הילדים הולכים עם האם (ועם אדוניה), כאן עם האב. מן הזיכרון (פאול 1970) |
| LH §171, 2072' | *amtim u mārīša* | האמה ובניה | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | בתורה האמה וילדיה נשארים לאדון; כאן, אחרי מות האב, האמה וילדיה ממנו יוצאים לדרור. מן הזיכרון (פאול 1970) |
| LH §175, 2155' | *ul iraggum* | לא יתבע. | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | בתורה האשה היא אמה שנתן האדון, והילדים הולכים אחרי האם – עבדים; כאן האם בת חורין, והילדים הולכים אחריה – אינם עבדים. בשני המקרים הילדים הולכים אחרי האם. מן הזיכרון (פאול 1970) |
| LH §176, 2188' | *ana mārīša ileqqe* | לבניה תקח. | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | שם הכל לאדון; כאן חצי הרכוש המשותף לבני האשה החופשית |
| MAL §36, r v 13–14 | *ana šuāša u līdānišama ilaqqešunu* | אותה ואף את ילדיה – יקחם | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [equivalent] | The woman and her children (by the second husband) go to the first. |
| LI §25, 302′–304′ | *ama-ar-gi₄-bi in-gar* | את דרורם שָׂם | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | The Torah: the slave woman's children stay the master's; LI: freed. |
| UN §4, 190–193 | *ARAD₂ … geme₂ … in-tuku, ama-ar-gi₄-ni i₃-ĝa₂-ĝa₂, e₂-ta nu-ub-ta-e₃* | אם עבד אמה נשא, דרורו יושם, מן הבית לא תצא | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [equivalent] | The freed slave's slave-wife stays in the house – the same rule; *e₃* "go out" = `יצא` as in the Torah. "She" is CDLI's/Roth's reading. |
| UN §5, 196–199 | *dumu-nita 1-am₃ lugal-a-ni-ir in-na-an-gub-bu* | בן זכר אחד לאדוניו יעמיד לו | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | The slave married to a free woman: one son serves the master, the free woman's son is not enslaved. |
| HL HL1 §31, 165 | *takku LÚ-aš EL-LUM GÉME-ašš=a šieleš* | אם איש בן חורין ואָמָה *פנויים*, | `אִם אֲדֹנָיו יִתֶּן לוֹ אִשָּׁה וְיָלְדָה לוֹ בָנִים אוֹ בָנוֹת הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | בתורה עבד (עברי) ואשה שקיבל מאדוניו: האשה והילדים לאדון; כאן בן חורין ואָמָה, והחוק מדבר רק בבני הזוג – לא באדון |
| HL HL1 §31, 173 | *1 DUMU-AM MUNUS=z(a) dāi* | ובן אחד האשה תיקח לעצמה. | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ` (שמות כא:ד) | [divergence] | בתורה הילדים הולכים עם האם השפחה (לאדוניה); בחוק החתי האב בן החורין לוקח את הילדים, והאמה – ילד אחד |
| HL HL1 §36, 186 | *n=an=kan parā [Ú-U]L kuiški tarnai* | ואותו אף אחד [לא] ישלח החוצה. | `אִם אֲדֹנָיו יִתֶּן לוֹ אִשָּׁה … וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | בתורה העבד שנשא אשה מבית אדוניו יוצא לבדו; כאן בן החורין שנכנס לבית העבד – אף אחד לא "ישלח אותו החוצה", כלומר מעמדו לא ייפגע (או: לא יוכל לעזוב) |
| HL HL2 §175, 175.2 | *na-aš na-aš-šu 〈I-NA〉 MU 2{KAM} na-aš-ma I-NA MU 4{KAM} GÉME e-eš-zi* | היא – בין ⟨ב⟩שנה השנייה או בשנה הרביעית – אָמָה תהיה, | `הָאִשָּׁה וִילָדֶיהָ תִּהְיֶה לַאדֹנֶיהָ וְהוּא יֵצֵא בְגַפּוֹ` (שמות כא:ד) | [divergence] | מעמד האשה והילדים בנישואים עם עבד / איש־משק |
| LH §282, 3139' | *ul bēlī atta* | "לא אדוני אתה" | `אָהַבְתִּי אֶת אֲדֹנִי אֶת אִשְׁתִּי וְאֶת בָּנָי לֹא אֵצֵא חָפְשִׁי` (שמות כא:ה) | [divergence] | **Inversion: the slave who loves his master vs the slave who denies him; both quoted in the first person.** From memory. |
| UN §5, 202–204 | *dumu dumu-gi₇ … nam-ARAD₂-da-ni-še₃ la-ba-an-ku₄-re* | בן בת החורין … לעבדותו לא יוכנס | `לֹא אֵצֵא חָפְשִׁי` (שמות כא:ה) | [divergence] | In the Torah the children of a slave-wife remain the master's; here the free mother's son is protected. |
| HL HL2 §173b, 173b.1 | *ták-ku ARAD-aš iš-ḫi-iš-ši a-ra-〈u〉-ez-zi* | אם עבד באדוניו ימרוד, | `לֹא אֵצֵא חָפְשִׁי` (שמות כא:ה) | [divergence] | בתורה לעבד דרך לצאת לחופשי; בחוק החתי מי ש"משחרר את עצמו" נענש |
| LH §146, 1723' | *abbuttam* | תספורת עבדות | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [equivalent] | A bodily mark of permanent slavery. |
| LH §205, 2557'–2558' | *uzunšu inakkisū* | את אזנו יקצצו | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [divergence] | The ear as the slave's organ (mark there, punishment here; cf. §282). From memory. |
| LH §281, 3131' | *ina maḫar ilim* | לפני האל | `וְהִגִּישׁוֹ אֲדֹנָיו אֶל הָאֱלֹהִים` (שמות כא:ו) | [equivalent] | A slave-law procedure "before the god". F12. |
| LH §282, 3143' | *bēlšu uzunšu inakkis* | ואדוניו את אזנו יקצוץ | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ וַעֲבָדוֹ לְעֹלָם` (שמות כא:ו) | [divergence] | **Same structure (his master – his ear), opposite content**: the ear pierced as the sign of chosen slavery vs cut off as the punishment of rebellion. `רצע` kept out. From memory (Paul 1970). |
| LH §226, 2689' | *abbutti wardim lā šêm* | `את תספורת העבדות של עבד לא שלו?` | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ וַעֲבָדוֹ לְעֹלָם` (שמות כא:ו) | [equivalent] | מן הזיכרון |
| LE §51, 163 | *kannam maškanam u abbuttam šaknu* | אשר כבל, אזיק ובלורית שׂוּמִים | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [equivalent] | A bodily mark of slavery (the hairlock; there the ear) (our suggestion). |
| MAL §40, r v 84–86 | *uznēšu upallušū ina eble išakkukū ina kutallišu irakkusū* | את אזניו יפלשו, בחבל ישחילו, מאחוריו יקשרו | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [divergence] | **Pierced ears**: in Exodus the mark of perpetual (voluntary) slavery, here a punishment with a cord through the ears; the verb is *palāšu* (LH `פלש`), not `רצע`. Also r v 101–103. |
| MAL §44, r vi 45 | *uznēšu uḫappa upallaš* | את אזניו ינפץ, יְפַלֵּשׁ | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ וַעֲבָדוֹ לְעֹלָם` (שמות כא:ו) | [divergence] | Ear-piercing: the slave's own choice in Exodus, the creditor's right over a pledged free man here. `רצע` reserved. |
| HL HL1 §15, 69 | *takku LÚ.U₁₉.LU-aš EL-LAM-aš ištaman=ššan kuiški iškallāri* | אם מישהו יקרע את אוזנו של אדם בן חורין, | `וְרָצַע אֲדֹנָיו אֶת אָזְנוֹ בַּמַּרְצֵעַ` (שמות כא:ו) | [absent] | האוזן הנרצעת כסימן עבדות. חוקי אשנונה §42: אוזן – חצי מנה |
| LH §117, 1327'–1328' | *aššassu mārašu u mārassu ana kaspim iddin* | את אשתו, את בנו ואת בתו נתן בכסף | `וְכִי יִמְכֹּר אִישׁ אֶת בִּתּוֹ לְאָמָה לֹא תֵצֵא כְּצֵאת הָעֲבָדִים` (שמות כא:ז) | [divergence] | In LH wife, son and daughter all go out in the 4th year; in Exodus the daughter-*amah* "does not go out"; sale of a *wife* is [absent] in the Torah. From memory. |
| LH §141, 1651' | *kīma amtim* | כאמה | `וְכִי יִמְכֹּר אִישׁ אֶת בִּתּוֹ לְאָמָה` (שמות כא:ז) | [cognate] | *amtu* = `אָמָה` |
| MAL §34, o iv 74 | *aššat šīt lā tuṣṣa* | אשה היא, לא תצא | `לֹא תֵצֵא כְּצֵאת הָעֲבָדִים` (שמות כא:ז) | [cognate] | *waṣû* = יצא: "going out" ends the bond; marriage by two years' cohabitation. |
| MAL §39, r v 26–27 | *šumma lā mārassu ana mute ittidin* | אם את שאינה בתו לבעל נתן | `וְכִי יִמְכֹּר אִישׁ אֶת בִּתּוֹ לְאָמָה` (שמות כא:ז) | [divergence] | Exod: a man sells his own daughter; MAL: a man gives in marriage a girl who is not his daughter (a pledge). |
| MAL §48, r vii 32–36 | *mārat ḫabullišu … abuša išaʾʾal ana mute iddanši* | את בת חייבו … את אביה ישאל, לבעל יתננה | `וְכִי יִמְכֹּר אִישׁ אֶת בִּתּוֹ לְאָמָה` (שמות כא:ז) | [equivalent] | The daughter held for her father's debt, given in marriage by the creditor. |
| LH §119, 1347' | idem | idem | `לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [divergence] | Protection from final sale for the slave-woman who became her master's wife. From memory. |
| LH §119, 1351' | *amassu ipaṭṭar* | ואת אמתו יפטור | `וְהֶפְדָּהּ` (שמות כא:ח) | [equivalent] | *paṭāru* = `פטר` [cognate]; `פדה` / `פדיון` kept out. |
| LH §146, 1722' | *ana kaspim ul inaddišši* | בכסף לא תתננה | `לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ בְּבִגְדוֹ בָהּ` (שמות כא:ח) | [equivalent] |  |
| LH §147, 1731' | *ana kaspim inaddišši* | בכסף תתננה | `לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [divergence] | In Exodus no sale at all; here only if childless. |
| LH §280, 3115' | *māt nukurtim* | ארץ נכר | `לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [equivalent] | Selling abroad. |
| MAL §48, r vii 46–47 | *[ana pî ṭuppušu ana ṣarpe idd]anši* | [על] פי [לוחו בכסף יתנ]נה | `לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [divergence] | MAL lets the creditor sell her per his tablet (restored); Exodus forbids selling the *amah* to strangers. **Restored.** |
| HL HL1 §26b, 131 | *[takku …]… A.ŠÀ=y[a … …]* | [אם …] … וגם שדה […], | `אִם רָעָה בְּעֵינֵי אֲדֹנֶיהָ … לְעַם נָכְרִי לֹא יִמְשֹׁל לְמָכְרָהּ` (שמות כא:ח) | [divergence] | כאן האיש שדחה את אשתו (שהיתה אָמָה? אשה שנקנתה?) מוכר אותה, והקונה משלם שנים עשר שקל |
| LH §166, 1986' | *ušaḫḫazūšu* | ישיאוהו. | `וְאִם לִבְנוֹ יִיעָדֶנָּה כְּמִשְׁפַּט הַבָּנוֹת יַעֲשֶׂה לָּהּ` (שמות כא:ט) | [divergence] | בתורה האב מייעד אשה לבנו מבין אמהותיו; כאן האחים חייבים לממן את נישואי הצעיר מן הנחלה |
| MAL §43, r vi 21 | *māre ša aššata uddiūneššunni* | הבן אשר את האשה ייעד לו | `וְאִם לִבְנוֹ יִיעָדֶנָּה` (שמות כא:ט) | [equivalent] | The father "assigns" a wife to his son; *wadû* D is not cognate with `יעד` (T2's rendering). Our proposal. |
| MAL §48, r vii 36 | *ana mute iddanši* | לבעל יתננה | `וְאִם לִבְנוֹ יִיעָדֶנָּה` (שמות כא:ט) | [equivalent] | The holder gives her in marriage (here only with the father's consent). |
| LH §148, 1737' | *ana šanītim aḫāzim* | אחרת לשאת | `אִם אַחֶרֶת יִקַּח לוֹ` (שמות כא:י) | [equivalent] | The same case and the same word. Our proposal (the word). |
| LH §148, 1748' | *adi balṭat ittanaššīši* | וכל עוד היא חיה יפרנסנה | `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | The first wife's maintenance. |
| LH §141, 1648' | *mussa sinništam šanītam* | בעלה אשה אחרת | `אִם אַחֶרֶת יִקַּח לוֹ` (שמות כא:י) | [equivalent] | נישואים לאחרת |
| LH §178, 2263' | *ipram piššatam u lubūšam* | מזונות, משחה ולבוש | `אִם אַחֶרֶת יִקַּח לוֹ שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | שלושת חיובי הכלכלה של האשה: מזון, כסות ו"עונה"; פאול (1970, ומאמרו ב־JNES 1969) הציע מכוח השילוש הקבוע הזה ש"עונתה" היא שמן (משחה), ולא יחסי אישות. מן הזיכרון |
| LE §32, 109 | *epram piššatam lubuštam* | מזונות, משחה ולבוש | `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | The triad of maintenance "food, oil, clothing" – the proposed background of `שְׁאֵר … כְּסוּת … עֹנָה` (from memory: Paul 1970; debated). = LH 2263'. |
| LE §59, 188 | *šanītam itaḫaz* | ואחרת נשא | `אִם אַחֶרֶת יִקַּח לוֹ שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] |  |
| MAL §36, o iv 86–87 | *lā lubulta lā ukullâ* | לא לבוש, לא מחיה | `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | The husband's duties of food and clothing. |
| LI §27, 329′–331′ | *še-ba i₃-ba siki-ba-ni in-na-ab-šum₂-mu* | מנת שעורים, מנת שמן ומנת הצמר שלה יתן לה | `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | Food and clothing owed to a woman of second rank; cf. LH 2263′ `מזונות, משחה ולבוש`. |
| LI §28, 345′–351′ | *e₂-ta nu-ub-ta-e₃-e … dam 2-kam-ma ba-an-tuku-tuku dam egir-ra-ke₄ dam gidlam in-il₂-il₂-e* | מן הבית לא יוציאנה; … אשה שנייה ישא; האשה האחרונה את האשה הבחירה תפרנס | `אִם אַחֶרֶת יִקַּח לוֹ שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | [equivalent] | The first wife's rights when the husband takes another; in LI the **second wife** must support her, in the Torah the husband. Cross-collection: LH §148 (1733′–1748′) `ישא; … לא יַעַזְבֶנָּה; … וכל עוד היא חיה יְפַרְנְסֶנָּה` (the husband supports). |
| LH §149, 1757' | *šeriktaša … ušallamšimma ittallak* | את שלוחיה … ישלם לה, ותלך | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [divergence] | The neglected slave-wife leaves without paying; the LH wife leaves with her dowry. From memory (Paul 1970). |
| LH §280, 3126' | *balum kaspimma* | בלי כסף | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [equivalent] | Release without payment. |
| LH §139, 1622' | *ana uzubbêm* | לדמי עזיבה | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [divergence] | שם האמה יוצאת בלי תשלום (ממנה); כאן הבעל משלם לאשה. מן הזיכרון (פאול 1970) |
| LH §141, 1645' | *ul innaddiššim* | לא יינתן לה. | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [divergence] | שם האמה יוצאת חינם לטובתה, כאן האשה האשמה יוצאת בלי כלום |
| MAL §37, r v 19 | *rāqutteša tuṣṣa* | רֵיקָם תצא | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [equivalent] | "She goes out" in both; Exodus's `חנם` is in her favour (no redemption price), MAL's "empty" against her. |
| LI §28, 345′ | *e₂-ta nu-ub-ta-e₃-e* | מן הבית לא יוציאנה | `וְיָצְאָה חִנָּם אֵין כָּסֶף` (שמות כא:יא) | [divergence] | The wrong-done wife leaves free in the Torah; the sick wife may not be put out in LI. |
| LH §1, 304 | *šumma awīlum* | אם איש | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [equivalent] | *šumma* = `אם` throughout; the Covenant Code's `כי`/`אם` tiers are its own. |
| LH §207, 2570' | *imtūt* | מת | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [cognate] / [divergence] | *mâtu* = מות; silver vs. death (or refuge). |
| LH §26, 631 | *iddâk* | `יֵהָרֵג;` | `מוֹת יוּמָת` (שמות כא:יב) | [equivalent] | הנוסחה של התורה אינה כאן (F3) |
| LE §12, 46 | *imât* | ימות | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [equivalent] | Three formulas kept apart: LE active `ימות`, LH passive `יהרג` (*iddâk*), the Torah `מוֹת יוּמָת`. |
| LE §47a, 150 | *uštamit* | המית | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [divergence] |  |
| UN §1, 181.a–183 | *saĝ ĝeš bi₂-in-ra lu₂-bi i₃-gaz-e-dam* | ראש בעץ מחץ, האיש ההוא יהרג | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [equivalent] / [divergence] | The first law of the oldest collection is the homicide law, as in the Covenant Code; `יהרג` (passive *gaz*), not `מוֹת יוּמָת`; no distinction of intent (contrast שמות כא:יג–יד). |
| HL HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [divergence] | בתורה מות הרוצח; בחוק החתי ההורג נותן אנשים ("ראשים") ורכושו ערב |
| HL HL1 §3, 10 | *n=aš aki* | וימות – | `מַכֵּה אִישׁ וָמֵת` (שמות כא:יב) | [equivalent] | אותו רצף: מכה, ואחריו מוות |
| IN IN §5, 5.9 | *SAG.DU-⸢az⸣ GAM-an ki-it-ta-ru na-at-kán le-e šar-ra-at-te-ni* | יהיה מונח בראש, למטה! ואַל תחלקו אותם! | `מַכֵּה אִישׁ וָמֵת מוֹת יוּמָת` (שמות כא:יב) | [divergence] | הנוסחה החתית איננה גזר דין של בית דין בסביל, אלא קביעה: הדבר "מונח בראש" – על חשבון הראש (5.10: `ימות`). ההבדל בין הלשונות הוא עצמו הממצא |
| LH §206, 2565'–2566' | *ina idû lā amḫaṣu* | "בדעת לא מחצתי" | `וַאֲשֶׁר לֹא צָדָה וְהָאֱלֹהִים אִנָּה לְיָדוֹ` (שמות כא:יג) | [equivalent] |  |
| HL HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – | `וַאֲשֶׁר לֹא צָדָה וְהָאֱלֹהִים אִנָּה לְיָדוֹ` (שמות כא:יג) | [equivalent] | בשני החוקים *היד* היא המילה של ההריגה בלא כוונה; אבל בתורה האל "מְאַנֶּה" את היד, ובחוק החתי היד עצמה "חוטאת" |
| HL HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `וְכִי יָזִד אִישׁ עַל רֵעֵהוּ לְהָרְגוֹ בְעָרְמָה` (שמות כא:יד) | [divergence] | התורה מבחינה בין זדון לשגגה; החוק החתי מבחין בין הריגה *במחלוקת* (כאן: ארבעה ראשים) ובין מחיצה שבה "ידו חוטאת" (§3: שני ראשים). רצח בכוונה תחילה אינו נידון בלוח כלל |
| LH §195, 2506' | *rittašu inakkisū* | את כפו יקצצו | `וּמַכֵּה אָבִיו וְאִמּוֹ מוֹת יוּמָת` (שמות כא:טו) | [divergence] | Death vs. the hand. |
| LH §14, 508 | *ṣeḫram* | צעיר | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | LH protects only the young child of the free class; Exodus any man. *ṣeḫru* = `צעיר` [cognate]. |
| LH §14, 509 | *ištariq* | גנב | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [equivalent] | Kidnapping = "stealing" a person in both; death in both. From memory (Paul 1970). |
| LH §19, 554–555 | idem | idem | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ` (שמות כא:טז) | [equivalent] |  |
| LH §7, 390 | *lu wardam lu amtam* | `בין עבד בין אמה` | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ` (שמות כא:טז) | [equivalent] | בתורה האדם אינו נמנה עם הרכוש הנגנב; ב־LH העבד והאמה עומדים בין הכסף לשור. מן הזיכרון |
| LH §7, 402 | *šarrāq iddâk* | `גַּנָּב הוא, יהרג.` | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | בתורה רק גונב האדם מומת |
| LH §227, 2699' | *idukkūšuma* | `יהרגוהו,` | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [equivalent] | גניבת אדם; כאן "גניבת" עבד דרך שחרורו המדומה. מן הזיכרון |
| LE §49, 155–156 | *ina wardim šarqim … ittaṣbat wardum wardam … iredde* | בעבד נגנב … נתפש – עבד עבד … יוליך | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | The stolen slave is property: a second slave as penalty (LE); man-stealing: death (Exodus). |
| UN §3, 187–189 | *še₂₉-še₃ in-ak … en-nu-ŋa₂ i₃-ti-le … 15 gin₂* | לעציר עשה … בכלא ישהה, חמישה עשר שקל | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | Unlawful detention: prison and silver, not death. |
| HL HL1 §19a, 83 | *takku LÚ.U₁₉.LU-an LÚ-an=aku MUNUS-n=aku {URU}ḫattušaz kuiš[ki] LÚ* | אם מישהו, איש לוּוִיָּה, יגנוב מֵחַתּוּשָׁה אדם, בין איש בין אשה, | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | `כִּי יִמָּצֵא אִישׁ גֹּנֵב נֶפֶשׁ מֵאֶחָיו מִבְּנֵי יִשְׂרָאֵל … וּמֵת הַגַּנָּב הַהוּא` (דברים כד:ז) – בתורה מוות לגונב נפש; כאן הגונב, זר, מאבד את ביתו |
| HL HL2 §149, 149.2 | *[n]u te-ez-zi BA.ÚŠ-wa-ra-aš iš-ḫa-aš-ši-ša-an* | ויאמר: "מת", ואדוניו | `וְגֹנֵב אִישׁ וּמְכָרוֹ וְנִמְצָא בְיָדוֹ מוֹת יוּמָת` (שמות כא:טז) | [divergence] | בתורה מכירת אדם – מוות; כאן המוכר השקרן מחזיר את האדם ונותן שני ראשים |
| LH §192, 2471' | *inakkisū* | יקצצו. | `וּמְקַלֵּל אָבִיו וְאִמּוֹ מוֹת יוּמָת` (שמות כא:יז) | [divergence] | בתורה מי שמקלל את הוריו (הביולוגיים) – מוות; כאן מי שמכחיש את הוריו המאמצים – קציצת הלשון שאמרה |
| UN §25, 362 | *aš₂ i₃-ni-du₁₁* | מארה אמרה (לה) | `וּמְקַלֵּל אָבִיו וְאִמּוֹ מוֹת יוּמָת` (שמות כא:יז) | [divergence] | Cursing a superior: salt for the slave-woman, death for the son. |
| LH §206, 2559' | *awīlum awīlam … imtaḫaṣ* | איש את איש … מחץ | `וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | `רעהו` reserved. |
| LH §206, 2560' | *ina risbatim* | בקטטה | `וְכִי יְרִיבֻן אֲנָשִׁים` (שמות כא:יח) | [equivalent] | The brawl; `ריב`, `נצה` kept out. |
| LE §46, 145 | *awīlam imḫaṣma* | את איש מחץ | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | *maḫāṣu* `מחץ` vs Exodus `וְהִכָּה` (kept out). |
| LE §47a, 149–151 | *ina risbatim mār awīlim uštamit 2/3 mana kaspam išaqqal* | בקטטה בן איש המית – שני שלישי מנה כסף ישקול | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ` (שמות כא:יח) | [equivalent] | Death in a brawl (no intent). Cross-collection: LH §206–207 (2560' `בִּקְטָטָה`; death: 1/2 mina). |
| UN §20, 308–313 | *ĝešbu₂-ta ĝiri₁₇-ni in-ku₅, 2/3 ma-na* | בקטטה את אפו קצץ, שני שלישי מנה כסף ישקול | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | If *ĝešbu₂* is "fist(fight)", the Sumerian case is the Covenant Code's brawl `בְאֶגְרֹף`; meaning uncertain, rendered `*בקטטה*` (LH §206). |
| HL HL1 §1, 1 | *[takku LÚ-an n]ašma MUNUS-an š[ulla]nnaz kuiški kuenzi* | [אם] מישהו יהרוג [איש או] אשה [במחלוקת], | `וְכִי יְרִיבֻן אֲנָשִׁים` (שמות כא:יח) | [equivalent] | המחלוקת כנסיבת המקרה |
| HL HL1 §3, 9 | *[takku LÚ-a]n našma MUNUS-an EL-LAM walaḫzi kuiš[k]i* | [אם] מישהו ימחץ [איש] או אשה בני חורין, | `וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | המחיצה; *walḫ-* = `מחץ` (כמו *maḫāṣu* בכל חוקי היתדות), ו־`הכה` של התורה נשאר שלה |
| HL HL1 §10, 48 | *takku LÚ.U₁₉.LU-an kuiški ḫūnikzi* | אם מישהו יפצע אדם, | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ בְּאֶבֶן אוֹ בְאֶגְרֹף; וְלֹא יָמוּת וְנָפַל לְמִשְׁכָּב` (שמות כא:יח) | [equivalent] | החבלה שאינה ממיתה ומפילה את הנפגע למשכב |
| HL HL1 §10, 49 | *t=an ištarnikzi* | וְיַחֲלֶה אותו, | `וְנָפַל לְמִשְׁכָּב` (שמות כא:יח) | [equivalent] |  |
| HL HL2 §174, 174.1 | *ták-ku LÚ{MEŠ} za-aḫ-ḫa-an-da ta *1?*-aš a-ki 1 SAG.DU pa-a-i* | אם אנשים ייאבקו, ואחד? ימות – ראש אחד ייתן. | `וְכִי יְרִיבֻן אֲנָשִׁים וְהִכָּה אִישׁ אֶת רֵעֵהוּ … וְלֹא יָמוּת` (שמות כא:יח) | [divergence] | אותה פתיחה; בתורה הנפגע לא מת, כאן מת – והפיצוי "ראש" |
| LH §206, 2568' | *asâm ippal* | ואת הרופא יפרע | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | F27; [absent] the loss of time (`שִׁבְתּוֹ`) in LH. From memory. |
| LH §215, 2610' | *šumma asûm* | `אם רופא` | `וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [absent] | מן הזיכרון |
| LH §215, 2621' | *ileqqe* | `יקח.` | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [divergence] | בתורה המכה משלם לנפגע את הריפוי; ב־LH הרופא "לוקח" את שכרו מן החולה עצמו, לפי מעמד החולה |
| LH §221, 2653' | *uštallim* | `הִשְׁלִים,` | `וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | הריפוי בלשון התורה |
| LH §221, 2660' | *inaddin* | `יתן.` | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [divergence] | אותו פועל (`יתן`), אבל בתורה המכה נותן לנפגע, וכאן החולה נותן לרופא |
| MAL §8, o i 81 | *asû urtakkis* | רופא חבש | `וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [divergence] | Exod: the striker pays for the healing; MAL: the physician's bandage, and the penalty rises if the injury spreads. |
| UN d010–d012 | *GA₂×GIR₃ lu₂ ib₂-ta-ḫa-aš-am₃, a-zu i₃-sa₆, ku₃-bi 5 gin₂* | אם עצם רגל איש שבר, ורופא החלים (אותו), כספו חמישה שקלים | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | The cost of healing a broken bone – the physician's fee = LH §221 (5 shekels); ex04 writes *silim* "made whole" (LH `השלים`). |
| HL HL1 §10, 51 | *pēdi=šši=ma antuḫšan pāi* | ובמקומו אדם ייתן, | `רַק שִׁבְתּוֹ יִתֵּן` (שמות כא:יט) | [equivalent] | בתורה המכה משלם את "שבתו" (ימי הבטלה) של הנפגע; בחוק החתי הוא נותן אדם שיעבוד במקומו – אותו רעיון, בגוף ולא בכסף |
| HL HL1 §10, 56 | *{LÚ}A.ZU=ya kuššan apāš=pat [pā]i* | וגם את שְׂכַר הרופא – הוא עצמו [ייתן]. | `וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | בשני החוקים המכה נושא בהוצאות הריפוי; התורה אינה מזכירה רופא, החוק החתי מזכיר את שכרו. וכן חוקי חמורבי §206 (`ואת הרופא יפרע`) |
| HL PT § IX, 48 | *nu=šši 10 GÍN KÙ.BABBAR pāi* | ולו עשרה שקלים כסף ייתן, | `רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא` (שמות כא:יט) | [equivalent] | בשני הנוסחים החתיים, כמו בתורה, הפוגע נושא בהפסד העבודה (כאן: מחליף בפועל ואחר כך תשלום) ובריפוי (49: שכר הרופא) |
| LH §214, 2607' | *amtum šī imtūt* | האמה ההיא מתה | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | Vengeance for one's own slave vs. silver for another's. |
| LH §245, 2848' | *ina maḫāṣim* | במחץ | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ … בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ` (שמות כא:כ) | [equivalent] | F29 `מחץ`; `הכה` kept out. |
| LH §115, 1303' | *ina šīmātiša* | `בְּגוֹרָלוֹ` | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | התורה מבחינה בין מוות מיד המכה למוות שאחרי |
| MAL §59, r viii 60 | (the same) | איש את אשתו [יַלְקֶה] | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט` (שמות כא:כ) | [equivalent] | Beating dependants of the household (with a limit in Exodus). Restored. |
| UN 339–342 | *dumu-gi₇ ARAD₂-ra i₃-ni-ra, 60 a₂-si 60 nig i₃-ra-ra* | אם בן חורין את העבד מחץ, שישים ברצועה, שישים בחגורה יִמָּחֵץ | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | The free man who strikes a slave is (apparently) flogged; the Torah avenges the slave only if he dies (21:21 `כִּי כַסְפּוֹ הוּא`). Who is flogged is not marked. |
| HL HL1 §2, 5 | *[takku ARAD-an na]šma GÉME-an šullannaz kuiški kuēnzi* | [אם] מישהו יהרוג [עבד או] אָמָה במחלוקת, | `וְכִי יַכֶּה אִישׁ אֶת עַבְדּוֹ אוֹ אֶת אֲמָתוֹ בַּשֵּׁבֶט וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | בתורה האדון המכה את עבדו, והעבד "נִקָּם"; בחוק החתי ההורג הוא "מישהו", והפיצוי (שני ראשים) הולך לבית האדון |
| HL HL1 §4, 15 | *[takk]u ARAD-an našma GÉME-an kuiški walaḫzi* | [אם] מישהו ימחץ עבד או אָמָה, | `וּמֵת תַּחַת יָדוֹ נָקֹם יִנָּקֵם` (שמות כא:כ) | [divergence] | בתורה מותו של עבד בידי אדוניו "נִקָּם"; כאן – ראש אחד |
| LH §115, 1303' | *ina šīmātiša* | `בְּגוֹרָלוֹ` | `אַךְ אִם יוֹם אוֹ יוֹמַיִם יַעֲמֹד` (שמות כא:כא) | [divergence] | LH מבחין בין מוות "בגורלו" (מוות טבעי) למוות "במחץ או בהתעללות" (§116). מן הזיכרון. |
| LH §115, 1307' | *ul išu* | `אין.` | `אַךְ אִם יוֹם אוֹ יוֹמַיִם יַעֲמֹד לֹא יֻקַּם כִּי כַסְפּוֹ הוּא` (שמות כא:כא) | [equivalent] | מן הזיכרון. |
| EST 249 | *arītu* | ההרה | `וְנָגְפוּ אִשָּׁה הָרָה` (שמות כא:כב) | [equivalent] | Term only. |
| LH epil. 3492'–3496' | *arnam kabtam … līmussuma* | עון כבד … ישית עליו | `עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [equivalent] | `שית על` of imposing a penalty; also 21:30. Our proposal. |
| LH §129, 1476' | *bēl aššatim* | בעל האשה | `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [cognate] | The same phrase; in both the husband fixes the outcome. |
| LH §209, 2580' | *imḫaṣ* | מחץ | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ` (שמות כא:כב) | [equivalent] / [divergence] | **The verb:** Exod `נָגַף`, LH *maḫāṣu* `מחץ`; the cognate *nakāpu* (`נגף`, F32) is LH's verb for the goring ox (§250–252), not used here. Exod: a woman hit in a fight between men; LH: the man strikes the woman. Our proposal (the verb); the parallel is standard. |
| LH §209, 2581'–2582' | *ša libbiša uštaddīši* | את אשר בבטנה השיל | `וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן` (שמות כא:כב) | [equivalent] | F14. |
| LH §209, 2583' | *ešeret šiqil kaspam* | עשרה שקלי כסף | `עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים` (שמות כא:כב) | [divergence] | A fixed tariff vs. the husband's assessment. |
| LH §161, 1898' | *ana bēl aššatim* | לבעל האשה | `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [cognate] | אותו צירוף; כאן על החתן המאורס, שכבר "בעלה" (שילם מוהר) |
| MAL §3, o i 38–39 | *aʾīle aššassu ubtaʾʾar u ḫīṭa emmed* | האיש על אשתו יברר, וחטא יטיל | `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [equivalent] | The husband fixes the penalty (*ḫīṭa emēdu* ~ `יָשִׁית`). |
| MAL §16, o ii 61–62 | *ḫīṭa kī libbišu emmid* | חטא כְּלִבּוֹ יטיל | `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [equivalent] | The husband sets the penalty. |
| MAL §21, o ii 98 | *mārat aʾīle imḫaṣma* | אם איש בת איש מחץ | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה` (שמות כא:כב) | [equivalent] | MAL *maḫāṣu* (`מחץ`, cognate of Hebrew `מחץ`), Exod `נגף` (the cognate of another Akkadian verb, *nakāpu*); "a man's daughter" vs "a pregnant woman" in a men's brawl. LH §209 has the same structure. |
| MAL §21, o ii 99 | *ša libbišu ultaṣleš* | ואת אשר בבטנה הפיל | `וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן` (שמות כא:כב) | [equivalent] | The miscarriage. |
| MAL §21, o ii 102–104 | 2 talents 30 minas, 50 blows, a month's work | שתי כיכרות ושלושים מנה בדיל יתן, חמישים במקלות … | `עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים` (שמות כא:כב) | [divergence] | Exod: a fine set by the husband; MAL: fixed fine plus flogging and forced labour. |
| MAL §22, o ii 111 | *ana mut sinnilta iddan* | לבעל האשה יתן | `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה` (שמות כא:כב) | [equivalent] | Payment to the husband. |
| MAL §50, r vii 63–64 | *aššat aʾīle imḫaṣma ša-libbiša ultaṣliši* | [אשת איש] מחץ, [ואת אשר בבטנה הפיל] | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ` (שמות כא:כב) | [equivalent] | The pregnant woman struck; *maḫāṣu* (`מחץ`) vs Exodus's `נגף`; direct blow vs a brawl. Restored. |
| MAL §50, r vii 74–79 | *merāšu laššu … kīmū ša-libbiša māḫiṣāna idukkū* | בן אין … חלף אשר בבטנה את המוחץ יהרגו | `וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ` (שמות כא:כב) | [divergence] | **Death for the foetus** when the husband has no son; Exodus: a fine for the foetus. |
| MAL §51, r vii 85–86 | *ḫīṭu annīu 2 bilta annaka iddan* | חטא זה: שתי כיכרות בדיל יתן | `עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים` (שמות כא:כב) | [equivalent] | A money penalty for the foetus. |
| MAL §50, r vii 63–81 | (cross-collection) | המוחץ אשת איש והפיל | `וְיָצְאוּ יְלָדֶיהָ` (שמות כא:כב) | [equivalent] | Cf. LH §209–214 (blow to a pregnant *mārat awīlim*: 10 shekels; her death – his daughter killed: vicarious) and MAL §21 (o ii 98–104, T2). |
| UN 379–386 | *dumu-munus lu₂-ka i-ni-in-ra, niĝ₂ ša₃-ga-na šu mu-un-da-an-la₂, 1/2 ma-na* | בת איש מחץ, את אשר בבטנה ממנה השיל, חצי מנה כסף ישקול | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ` (שמות כא:כב) | [equivalent] | The miscarriage law, 400 years before LH §209 (10 shekels); here 30. The verb of the miscarriage and the sum are restored (exadd07 broken). |
| HL HL1 §17, 74 | *[takk]u MUNUS-aš EL-LI šarḫuwanduš=šuš kuiški p[e]š[šiy]azi* | [אם] מישהו [ישליך] את בטנה של אשה בת חורין, | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים` (שמות כא:כב) | [divergence] | בתורה: בשעת מריבה, ובעל האשה קובע את הקנס בפני פלילים; בחוק החתי: תעריף קבוע, לפי מעמד האשה ולפי חודש ההריון, בלי זכר לבעל |
| HL HL1 §77a, 440 | *takku {GU₄}ÁB armawandan kuiški walaḫzi* | אם מישהו ימחץ פרה הרה, | `וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ` (שמות כא:כב) | [equivalent] | (ראו §17) – אותו מקרה, כאן בבהמה, ובאותו פועל חתי (*pešš-*) כמו בהפלת אשה (§17–§18) |
| HL PT § XVI, 71 | *20 GÍN.GÍN KÙ.BABBAR pāi* | עשרים שקל כסף ייתן. | `וְכִי יִנָּצוּ אֲנָשִׁים וְנָגְפוּ אִשָּׁה הָרָה וְיָצְאוּ יְלָדֶיהָ וְלֹא יִהְיֶה אָסוֹן עָנוֹשׁ יֵעָנֵשׁ` (שמות כא:כב) | [divergence] | בתורה הסכום אינו קצוב: `כַּאֲשֶׁר יָשִׁית עָלָיו בַּעַל הָאִשָּׁה וְנָתַן בִּפְלִלִים`; בנוסח המאוחר סכום קבוע אחד, בלי חודשים ובלי שומה |
| EST 256 | *dāmē kūm dāmē* | דמים תחת דמים | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] | *kūm* = `תַּחַת`. |
| LH §210, 2588'–2589' | *mārassu idukkū* | את בתו יהרגו | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | Vicarious punishment (his daughter) vs. the striker's own life. |
| LH §212, 2598' | *mišil mana kaspam* (a *muškēnum*'s daughter) | חצי מנה כסף | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | Silver for the lower class. |
| MAL §50, r vii 68–69 | *kīmū ša-libbiša napšāte umalla* | חלף אשר בבטנה נפשות ימלא | `וְאִם אָסוֹן יִהְיֶה וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] | *kīmū* "instead of" = `תַּחַת` (rendered `חלף`; `תחת` reserved); "lives" for the foetus here, for the woman's death (`אסון`) in Exodus. *kīmū* restored at r vii 68, preserved at r vii 72, 78. |
| MAL §50, r vii 70–71 | *šumma sinniltu šīt mītat aʾīle idukkū* | ואם האשה ההיא מתה, את האיש יהרגו | `נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] | The woman's death – the striker's death (and still "lives" for the foetus, r vii 72–73). |
| UN 387–390 | *ba-uš₂ nita₂-bi i₃-gaz-e* | אם מתה, הגבר ההוא [יהרג] | `וְאִם אָסוֹן יִהְיֶה וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] | If the woman dies, the striker himself is killed – as in the Torah, against LH §210 (his daughter is killed). The verb is restored (broken in both copies). |
| UN 399–402 | *geme₂ ba-uš₂ … saĝ saĝ-še₃ i₃-gub-be₂* | אם האמה מתה, עבד לעבד יעמיד | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [equivalent] / [divergence] | "A slave for a slave" – the X-for-X principle, applied to the slave-woman as property (LH §214: ⅓ mina). `תחת` reserved. |
| HL HL1 §1, 3 | *Ù 4 SAG.DU pāi LÚ-n=aku MUNUS-n=aku* | וארבעה ראשים ייתן, בין איש בין אשה, | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | גם כאן "נפש תחת נפש", אך מוכפלת וכסחורה: ארבעה בני אדם עוברים מבית ההורג לבית ההרוג |
| HL HL1 §43, 242 | *nu apun=pat danzi* | ואותו עצמו ייקחו. | `נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | אין כאן מוות תחת מוות: הדוחף עצמו נמסר לבית המת (כעבד?), "ראש" תמורת ראש |
| HL HL1 §44a, 245 | *nu=šši EG[IR-pa DUMU.NITA-an pāi]* | ולו [בחזרה בן ייתן]. | `וְנָתַתָּה נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג) | [divergence] | גם כאן נפש תחת נפש, אבל *בן* של ההורג נמסר לבית ההרוג (לעבוד שם? לבוא במקום המת?) – ולא ההורג מת |
| LH §196, 2510'–2511' | *īnšu uḫappadū* | את עינו ינקרו | `עַיִן תַּחַת עַיִן` (שמות כא:כד) | [equivalent] / [divergence] | LH has no "X for X" formula, only the description, and only for a *mār awīlim*. |
| LH §200, 2532' | *šinnašu inaddû* | ישילו את שנו | `שֵׁן תַּחַת שֵׁן` (שמות כא:כד) | [equivalent] |  |
| LH §218, 2637' | *uḫtappid* | `נִקֵּר,` | `עַיִן תַּחַת עַיִן` (שמות כא:כד) | [equivalent] | אותו איבר; אבל כאן העונש אינו עין, אלא היד שעשתה |
| LH §218, 2638' | *rittašu inakkisū* | `את כפו יקצצו.` | `עַיִן תַּחַת עַיִן` (שמות כא:כד) | [divergence] | כאן לא מידה כנגד מידה באיבר שנפגע, אלא באיבר שחטא (כמו §195 ו־§226). מן הזיכרון (ההשוואה של דברים כה:יב לעונשי הכף ב־LH מקובלת) |
| LE §42, 137–139 | *appi … īnu 1 mana šinnu 1/2 mana uznu 1/2 mana* | אף … עין – מנה; שן – חצי מנה; אוזן – חצי מנה | `עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן יָד תַּחַת יָד רֶגֶל תַּחַת רָגֶל` (שמות כא:כד) | [divergence] | **Money for every limb** (LE), the talion (Torah; and LH §196–200 for an *awīlum*). |
| LE §45, 144 | *šēpšu ištebir* | את רגלו שבר | `רֶגֶל תַּחַת רָגֶל` (שמות כא:כד) | [divergence] | 1/2 mina. |
| MAL §8, o i 87 | *[x]-MEŠ-ša kilallūn inappulū* | […] שלה, את שתיהן, יעקרו | `עַיִן תַּחַת עַיִן … יָד תַּחַת יָד` (שמות כא:כד) | [divergence] | Mutilation, not talion; the organ is broken ("eyes" or "breasts" restored by others). |
| UN §18, 295–300 | *ĝiri₃-pad-ra₂ … lu₂ in-ku₅, 10 gin₂* | עצם […]ו איש קצץ, עשרה שקלי כסף ישקול | `עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן יָד תַּחַת יָד רֶגֶל תַּחַת רָגֶל` (שמות כא:כד) | [divergence] | The series of bodily injuries (295–342) is paid in silver throughout – no talion (LH §196–§200 has talion for the *awīlum*). |
| UN 329–331 | *igi lu₂ lu₂ im-ta-šub, 1/2 ma-na* | אם עין איש איש השיל, חצי מנה ישקול | `עַיִן תַּחַת עַיִן` (שמות כא:כד) | [divergence] | The eye of a free man paid in silver (½ mina), three centuries before LH's talion (§196) – money for limbs, the opposite of the Torah. |
| HL HL1 §7, 33 | *takku LÚ.U₁₉.LU-an EL-LAM kuiški dašuwaḫḫi* | אם מישהו יעוור אדם בן חורין | `עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן` (שמות כא:כד) | [divergence] | `שֶׁבֶר תַּחַת שֶׁבֶר עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן כַּאֲשֶׁר יִתֵּן מוּם בָּאָדָם כֵּן יִנָּתֶן בּוֹ` (ויקרא כד:כ) – בתורה גמול בגוף, בחוק החתי כסף. גם חוקי אשנונה (§42) משלמים בכסף, וחוקי חמורבי (§196–§201) נוהגים "עין כעין" בבני איש בלבד |
| HL HL1 §11, 57 | *takku LÚ.U₁₉.LU-an EL-LUM QA-AS-SÚ našma GÌR-ŠU kuiški* | אם מישהו ישבור את ידו או את רגלו של אדם בן חורין, | `יָד תַּחַת יָד רֶגֶל תַּחַת רָגֶל` (שמות כא:כד) | [divergence] | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) – התורה: גמול באותו אבר; כאן: עשרים שקל |
| LH §206, 2562' | *simmam* | ופצע | `פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | [equivalent] |  |
| LE §47, 148 | *awīlam iktel* | איש פגע? | `פֶּצַע תַּחַת פָּצַע` (שמות כא:כה) | [equivalent] | Guess: the verb is unknown (a minor injury, 10 shekels). |
| MAL §52, r vii 89–90 | *meḫṣe kī meḫṣe išakkunūš* | מַחַץ כְּמַחַץ יָשִׂימוּ לו | `כְּוִיָּה תַּחַת כְּוִיָּה פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | [equivalent] | Talion of blows; "like" (*kī*) vs "in place of" (`תחת`); here for striking a prostitute. |
| HL HL1 §9, 42 | *takku LÚ.U₁₉.LU SAG.DU-SÚ kuiški ḫūnikzi* | אם מישהו יפצע את ראשו של אדם, | `פֶּצַע תַּחַת פָּצַע חַבּוּרָה תַּחַת חַבּוּרָה` (שמות כא:כה) | [equivalent] | רשימת הפגיעות; *ḫunink-* = `פצע` (הפועל), והתשלום – כסף |
| LH §199, 2522' | *īn warad awīlim* | עין עבד איש | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ` (שמות כא:כו) | [divergence] | Another man's slave (LH) vs. one's own (Exod). |
| LH §199, 2526' | *mišil šīmišu* | חצי מחירו | `לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | Compensation to the owner vs. freedom for the slave. From memory. |
| LH §219, 2643' | *wardam kīma wardim iriab* | `עבד כעבד יחליף.` | `לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | בתורה הנזק לעבד משחרר אותו; כאן העבד מוחלף כרכוש |
| LH §220, 2649' | *šīmišu išaqqal* | `מחירו ישקול.` | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ` (שמות כא:כו) | [divergence] | אותו נזק (עין העבד), ותוצאה הפוכה: בתורה העבד יוצא לחופשי, כאן בעליו מקבל חצי מחירו. מן הזיכרון |
| LE §42, 138 | *īnu … šinnu* | עין … שן | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ … וְאִם שֵׁן עַבְדּוֹ … יַפִּיל` (שמות כא:כו–כז) | [equivalent] | Eye and tooth paired as here. |
| LI §35, 416′–417′ | *gu₄ in-hun igi-bi in-hul šu-ri-a sa₁₀-ma-kam i₃-la₂-e* | שור שכר, ואת עינו פָּגַם, חצי מחירו ישקול | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ` (שמות כא:כו) | [equivalent] | The damaged eye (*ḫul* "damage", `פגם`; the Torah's `שִׁחֲתָהּ`) – an ox here, a slave there. Cross-collection: LH §247 (2861′–2866′) `ואת עינו נקר, כסף, חצי מחירו` – the same half. |
| HL HL1 §8, 38 | *takku ARAD-an našma GÉME-an kuiški dašuwaḫḫi* | אם מישהו יעוור עבד או אָמָה | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ: לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | בתורה הדין מדבר באדון המכה את עבדו, והעבד יוצא לחופשי; בחוק החתי "מישהו", והכסף הולך (כנראה) לאדון |
| HL HL1 §34, 180 | *n=an=kan parā Ú-UL kuiški tarnai* | ואותה אף אחד לא ישלח החוצה. | `לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [equivalent] | *parā tarna-* הוא הפועל של שחרור, כמו `שִׁלַּח` של התורה |
| HL HL1 §77b, 446 | *[takku GU₄-aš našma ANŠE.KUR.RA-aš IG]I-ŠU kuiški [tašuwaḫzi]* | [אם] מישהו [יעוור את עינו של שור או של סוס], | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ … לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת עֵינוֹ` (שמות כא:כו) | [divergence] | עין של עבד בתורה, עין של שור כאן; ומחיר העין של שור (שישה שקלים) קרוב לעין של עבד בחוק החתי (עשרה, §8) |
| HL PT § V, 27 | *takku LÚ-an EL-LUM šullannaza kuiški dašuwaḫḫi* | אם מישהו יעוור איש בן חורין במחלוקת, | `וְכִי יַכֶּה אִישׁ אֶת עֵין עַבְדּוֹ אוֹ אֶת עֵין אֲמָתוֹ וְשִׁחֲתָהּ` (שמות כא:כו) | [divergence] | בתורה עין העבד משחררת אותו; עין בן החורין – `עַיִן תַּחַת עַיִן` (שמות כא:כד). בחוק החתי, בשני הנוסחים, כסף |
| LH §200, 2532' | *šinnam nadû* | השיל שן | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | `הִפִּיל` (נפל) vs. *nadû* `השיל`. |
| UN 332–334 | *lu₂ zu₂-ni i₃-ku₅, 1/2 ma-na* | לאיש את שנו קצץ, חצי מנה ישקול | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת שִׁנּוֹ` (שמות כא:כז) | [divergence] | The tooth: silver here; the Torah's tooth law is for the slave (freedom) and talion for the free. |
| HL HL1 §7, 34 | *našma ZU₉-ŠU lāki* | או את שִׁנּוֹ יפיל, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | אותו פועל של "הפלה" לשן: *lak-* הוא "להפיל, לכרות (עץ)", ו־`יַפִּיל` הוא תרגומו הטבעי, כאן ובתורה. ההבדל: בתורה השן של העבד מוציאה אותו לחופשי (`לַחָפְשִׁי יְשַׁלְּחֶנּוּ תַּחַת שִׁנּוֹ`), כאן – כסף |
| HL HL1 §8, 39 | *našma ZU₉-ŠU lāki* | או את שִׁנּוֹ יפיל, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | כאן גם הנפגע עבד או אמה, כמו בתורה |
| HL PT § VII, 35 | *takku LÚ-an EL-LUM ZU₉-ŠÚ kuiški lāki* | אם מישהו יפיל את שִׁנּוֹ של איש בן חורין, | `וְאִם שֵׁן עַבְדּוֹ אוֹ שֵׁן אֲמָתוֹ יַפִּיל` (שמות כא:כז) | [equivalent] | אותו פועל ("יפיל") ואותו איבר; בתורה העבד יוצא לחופשי, בחוק החתי מי שהפיל משלם |
| LH §123, 1400' | idem | idem | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [equivalent] | F18: total exemption. |
| LH §229, 2722' | *itinnum šū iddâk* | הבנאי ההוא יהרג | `סָקוֹל יִסָּקֵל הַשּׁוֹר … וְגַם בְּעָלָיו יוּמָת` (שמות כא:כח–כט) | [equivalent] | Death of the person responsible for what his property/work did. F3. |
| LH §245, 2851' | *bēl alpim* | בעל השור | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [cognate] | The same phrase. |
| LH §250, 2883' | *šumma alpum* | אם שור | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ אוֹ אֶת אִשָּׁה וָמֵת` (שמות כא:כח) | [equivalent] | The ox as the subject of the protasis, rare in LH (otherwise *šumma awīlum*). From memory (with Eshnunna §53–54). |
| LH §250, 2885' | *awīlam* | איש | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ אוֹ אֶת אִשָּׁה` (שמות כא:כח) | [absent] | LH has no "or a woman". |
| LH §250, 2886' | *ikkipma* | נגף | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ` (שמות כא:כח) | [equivalent] | Another root (`נגח`) in the same Torah law; LH has one verb only. `נגח` kept out. |
| LH §250, 2890' | *dīnum šū rugummâm ul išu* | לדין ההוא תביעה אין | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [equivalent] | Same outcome for the owner; the Torah speaks of the owner, LH of the case. F18. From memory (Finkelstein 1981). |
| LH §250, 2890' | *dīnum šū rugummâm ul išu* | לדין ההוא תביעה אין | `סָקוֹל יִסָּקֵל הַשּׁוֹר וְלֹא יֵאָכֵל אֶת בְּשָׂרוֹ` (שמות כא:כח) | [absent] | **No stoning of the ox, no ban on its flesh in LH**: the ox is property only. From memory. |
| LH §251, 2903' | *mišil mina kaspam* | חצי מנה כסף | `סָקוֹל יִסָּקֵל הַשּׁוֹר` (שמות כא:כח) | [absent] | No stoning in LH (also §252). |
| LH §224, 2675' | *bēl alpim u lū imērim* | `בעל השור או החמור` | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [cognate] |  |
| LH §229, 2722' | *itinnum šū iddâk* | `הבנאי ההוא יֵהָרֵג.` | `סָקוֹל יִסָּקֵל הַשּׁוֹר … וְגַם בְּעָלָיו יוּמָת` (שמות כא:כח–כט) | [equivalent] | מיתת האחראי לנזק שגרם דבר שבבעלותו או במלאכתו |
| LH §115, 1307' | *ul išu* | `אין.` | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [equivalent] | F18: "לדין ההוא תביעה אין" – פטור מוחלט, כמו `נָקִי` של התורה (שאינו בשורה, §4). מן הזיכרון |
| LE §53, 170 | *bēl alpim* | בעלי השור | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [cognate] | *bēl alpim* = `בַּעַל הַשּׁוֹר`. |
| LE §54, 173 | *awīlam ikkimma uštamit* | ואיש נגף והמית | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ אוֹ אֶת אִשָּׁה וָמֵת` (שמות כא:כח) | [equivalent] | LE keeps one verb (*nakāpu*) for ox-ox and ox-man; Exodus switches (`יִגַּח` 21:28–32, `יִגֹּף` 21:35). |
| MAL §14, o ii 38 | *nāʾikānu zakku* | הבא עליה זכאי | `וּבַעַל הַשּׁוֹר נָקִי` (שמות כא:כח) | [equivalent] | The unknowing lover is clear; `נקי` reserved, `זכאי` [cognate of *zakû*]. |
| HL HL1 §43, 241 | *nu BE-EL GU₄ ÍD-aš pēdai* | ואת בעל השור הנהר יישא, | `וּבַעַל הַשּׁוֹר` (שמות כא:כח) | [equivalent] | *BĒL* + שם עצם = `בַּעַל` (§5) |
| HL HL2 §199, 199.4 | *ti-i-ez-zi ták-ku GU₄-uš LÚ-[ni] wa-at-ku-zi* | ייכנס אל המלך. אם שור על איש יקפוץ, | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ אוֹ אֶת אִשָּׁה וָמֵת סָקוֹל יִסָּקֵל הַשּׁוֹר` (שמות כא:כח) | [divergence] | השור "קופץ" (מינית) ואינו נוגח, והאדם אינו מת – ובכל זאת השור מת |
| LH §229, 2721' | *uštamīt* | המית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | *mâtu* Š = `הֵמִית`; the subject is a thing (the house) as there an animal. Decision 2. |
| LH §250, 2887' | *uštamīt* | והמית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה הַשּׁוֹר יִסָּקֵל` (שמות כא:כט) | [cognate] | Same root, same causative stem, same subject (the ox). |
| LH §251, 2892' | *nakkāpīma* | נגף הוא | `וְאִם שׁוֹר נַגָּח הוּא מִתְּמֹל שִׁלְשֹׁם` (שמות כא:כט) | [equivalent] | **Same noun pattern (*parrās* = `פַּעָּל`) and the same nominal clause, another root**; LH has no "yesterday and the day before". |
| LH §251, 2894' | *bābtašu* | רובעו | `וְהוּעַד בִּבְעָלָיו` (שמות כא:כט) | [equivalent] | The Torah's warning is impersonal (passive); in LH the ward (the neighbourhood) warns. |
| LH §251, 2895' | *ušēdīšumma* | הודיעו לו | `וְהוּעַד בִּבְעָלָיו` (שמות כא:כט) | [equivalent] | *šūdû* (ידע) vs `הועד` (עוד): the same institution, another root. F32; `הועד` kept out. |
| LH §251, 2898' | *alapšu lā usanniq* | ולא ריסן את שורו | `וְלֹא יִשְׁמְרֶנּוּ` (שמות כא:כט) | [equivalent] | F32. From memory. |
| LH §251, 2902' | *uštamīt* | והמית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה הַשּׁוֹר יִסָּקֵל וְגַם בְּעָלָיו יוּמָת` (שמות כא:כט) | [cognate] | The full parallel: a known gorer, a warned owner, a death. |
| LH §251, 2903' | *mišil mina kaspam* | חצי מנה כסף | `וְגַם בְּעָלָיו יוּמָת אִם כֹּפֶר יוּשַׁת עָלָיו וְנָתַן פִּדְיֹן נַפְשׁוֹ` (שמות כא:כט–ל) | [divergence] | **The Torah: the owner's death, ransom as an option; LH: a fixed fine (30 shekels), no death.** `כפר`, `פדיון` absent from LH. From memory. |
| LH §218, 2633' | *awīlam uštamīt* | `ואת האיש הֵמִית,` | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | אותו בניין גורם של אותו שורש, בחוק אחריות (שם השור, כאן הרופא) |
| LH §225, 2683' | *uštamīt* | `והמית,` | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | שם השור הממית, כאן הרופא הממית את השור |
| LH §229, 2721' | *bēl bītim uštamīt* | `ואת בעל הבית הֵמִית,` | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | *mâtu* Š = `הֵמִית`, אותו שורש ואותו בניין גורם, וגם שם הנושא אינו אדם (השור) |
| LH §230, 2724' | *uštamīt* | `המית,` | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] |  |
| LE §53, 168 | *uštamit* | והמית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | *mâtu* Š, the goring ox as subject; Exod 21:35 has the G `וָמֵת` (the dead ox as subject). |
| LE §54, 171 | *šumma alpum nakkāpîma* | אם שור נַגָּף הוא | `וְאִם שׁוֹר נַגָּח הוּא מִתְּמֹל שִׁלְשֹׁם` (שמות כא:כט) | [equivalent] | Same noun pattern (*parrās* / `פַּעָּל`) and nominal clause, other root. = LH §251 (2892' `נַגָּף הוא,`). |
| LE §54, 172 | *bābtum ana bēlišu ušēdima* | והרובע לבעליו הודיע | `וְהוּעַד בִּבְעָלָיו` (שמות כא:כט) | [equivalent] | The warning to the owner; LE names the warner (the ward, *bābtum*), Exodus a passive. = LH §251 (2894'–2895'). |
| LE §54, 173 | *uštamit* | והמית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה הַשּׁוֹר יִסָּקֵל` (שמות כא:כט) | [cognate] | Same verb, stem and subject. |
| LE §54, 174 | *2/3 mana kaspam išaqqal* | שני שלישי מנה כסף ישקול | `הַשּׁוֹר יִסָּקֵל וְגַם בְּעָלָיו יוּמָת` (שמות כא:כט) | [divergence] | LE: a fixed sum (40 shekels); no penalty for the ox. Exodus: the ox stoned, the owner liable to death (or ransom, 21:30). LH §251: 1/2 mina, *inaddin* "give" (not "weigh"). |
| LE §56, 177 | *kalbum šegîma* | כלב שוטה הוא | `וְאִם שׁוֹר נַגָּח הוּא` (שמות כא:כט) | [absent] | No dog law in the Torah (or LH); LE builds §56 word for word on §54. |
| LE §56, 178 | *kalabšu lā iṣṣurma* | ואת כלבו לא נצר | `וְלֹא יִשְׁמְרֶנּוּ` (שמות כא:כט) | [equivalent] | *naṣāru* = `נצר` [cognate of Deut 33:9 `יִנְצֹרוּ`]: the Akkadian verb that Exodus renders `שמר`. Note: for the ox LE says "did not keep in order" (*ešēru*), for the dog "did not guard" (*naṣāru*). |
| LE §56, 179 | *awīlam iššukma uštamit* | ואיש נשך והמית | `וְהֵמִית אִישׁ אוֹ אִשָּׁה` (שמות כא:כט) | [cognate] | *našāku* = `נשך`; *uštamit* = `וְהֵמִית`. |
| LH §207, 2573' | *mišil mana kaspam* | חצי מנה כסף | `אִם כֹּפֶר יוּשַׁת עָלָיו וְנָתַן פִּדְיֹן נַפְשׁוֹ` (שמות כא:ל) | [equivalent] |  |
| LH §251, 2904' | *inaddin* | יתן | `וְנָתַן פִּדְיֹן נַפְשׁוֹ כְּכֹל אֲשֶׁר יוּשַׁת עָלָיו` (שמות כא:ל) | [cognate] | *nadānu* = `נתן`; ransom there, fine here. |
| LE §54, 174 | *2/3 mana kaspam išaqqal* | שני שלישי מנה כסף ישקול | `אִם כֹּפֶר יוּשַׁת עָלָיו וְנָתַן פִּדְיֹן נַפְשׁוֹ` (שמות כא:ל) | [equivalent] | The money payment is in Exodus the exception (ransom), in LE the rule. |
| MAL §10, o i 103–104 | *immangar … ilaqqe* | יתרצה, [את רכושם] יקח | `אִם כֹּפֶר יוּשַׁת עָלָיו וְנָתַן פִּדְיֹן נַפְשׁוֹ` (שמות כא:ל) | [divergence] | Ransom in the Torah only for the owner of the goring ox. Partly restored. |
| LH §210, 2588'–2589' | *mārassu idukkū* | את בתו יהרגו | `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח כַּמִּשְׁפָּט הַזֶּה יֵעָשֶׂה לּוֹ` (שמות כא:לא) | [divergence] | Read as a rejection of vicarious punishment. From memory (Paul 1970; Greenberg). |
| LH §230, 2725' | *mār itinnim šuāti* | את בן הבנאי ההוא | `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח כַּמִּשְׁפָּט הַזֶּה יֵעָשֶׂה לּוֹ` (שמות כא:לא) | [divergence] | Read (Paul, Greenberg; from memory) as an explicit rejection of LH's "son for son". |
| LH §251, 2900' | *mār awīlim* | בן איש | `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח` (שמות כא:לא) | [divergence] | *mār awīlim* is a class (F16); the Torah's `בֵן` is kinship: a tempting but false match. |
| LH §230, 2725' | *mār itinnim šuāti* | `את בן הבנאי ההוא` | `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח כַּמִּשְׁפָּט הַזֶּה יֵעָשֶׂה לּוֹ` (שמות כא:לא) | [divergence] | לפי הפירוש המקובל (פאול 1970, גרינברג; מן הזיכרון) הפסוק שולל במפורש "בן תחת בן": מיתת בן או בת בנגיחה נידונה כדין מיתת איש, ואין ממיתים את בן בעל השור. ראו גם |
| LH §116, 1317' | *mārašu idukkū* | `את בנו יהרגו;` | `אוֹ בֵן יִגָּח אוֹ בַת יִגָּח כַּמִּשְׁפָּט הַזֶּה יֵעָשֶׂה לּוֹ` (שמות כא:לא) | [divergence] | לפי הפירוש המקובל, התורה דוחה כאן במפורש את העונש השילוחי ("בן תחת בן") של חוקים כמו §116, §210, §230 |
| LH §214, 2608' | *šaluš mana kaspam* | שליש מנה כסף | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [equivalent] | A fixed price for a slave's life, paid to the owner (30 vs. 20 shekels). From memory. |
| LH §231, 2729' | *wardam kīma wardim* | עבד כעבד | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | A slave replaced in kind (LH) vs a fixed silver tariff (Exod). |
| LH §252, 2905' | *šumma warad awīlim* | אם עבד איש | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה` (שמות כא:לב) | [equivalent] | The same abridged protasis, the same place in the sequence; the Torah adds the slave-woman. From memory. |
| LH §252, 2906' | *šaluš mina kaspam* | שליש מנה כסף | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו וְהַשּׁוֹר יִסָּקֵל` (שמות כא:לב) | [divergence] | **⅓ mina = 20 shekels; the Torah's 30 shekels for a slave = LH's fine for a free man's son (§251).** |
| LH §252, 2907' | *inaddin* | יתן | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [cognate] | LH does not name the payee. |
| LH §217, 2628' | *inaddin* | `יתן.` | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [equivalent] | הכסף בעד העבד עובר בין בני חורין (שם אל האדון, כאן מן הבעל) |
| LH §231, 2729' | *wardam kīma wardim* | `עבד כעבד` | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | בתורה תעריף כסף לאדון העבד; כאן עבד שווה ערך |
| LH §231, 2731' | *inaddin* | `יתן.` | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [cognate] | *nadānu* = `נתן` |
| LE §55, 175–176 | *šumma wardam ikkimma uštamit 15 šiqil kaspam išaqqal* | אם עבד נגף והמית – חמישה עשר שקל כסף ישקול | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו וְהַשּׁוֹר יִסָּקֵל` (שמות כא:לב) | [equivalent] | A fixed tariff for a slave: LE 15 shekels, Exodus 30, LH §252 1/3 mina (20). LE `ישקול` (*šaqālu*), Exodus `יִתֵּן`; Exodus also stones the ox. |
| LE §57, 181 | *šumma wardam* ⟨*iššuk*⟩*ma uštamit* | אם עבד ⟨נשך⟩ והמית | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה` (שמות כא:לב) | [equivalent] | The tablet writes *ikkimma* "gored" for the dog (a slip copied from §55); 15 shekels as for the ox. |
| LI §13, 187′ | *1(u) 5(diš) gin₂ ku₃-babbar* | חמישה עשר שקל כסף | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | A slave's value: 15 shekels here, 30 in the Torah (the gored slave). |
| UN 391–398 | *geme₂ lu₂-ka i₃-ni-in-ra ma-gig i₃-ni-du₁₁, 5 gin₂* | אמת איש מחץ, "כאב לי" עשה לה, חמישה שקלי כסף ישקול | `כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | The slave-woman's miscarriage: 5 shekels (exadd06: 10; LH §213: 2). |
| HL HL1 §2, 5 | *[takku ARAD-an na]šma GÉME-an šullannaz kuiški kuēnzi* | [אם] מישהו יהרוג [עבד או] אָמָה במחלוקת, | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [equivalent] | עבד ואמה כצמד, ותשלום לאדון |
| HL PT § II, 7 | *2 MA.NA KÙ.BABBAR pāi* | שתי מנים כסף ייתן. | `אִם עֶבֶד יִגַּח הַשּׁוֹר אוֹ אָמָה כֶּסֶף שְׁלֹשִׁים שְׁקָלִים יִתֵּן לַאדֹנָיו` (שמות כא:לב) | [divergence] | גם בתורה מות עבד או אָמָה נפדה בכסף קצוב, אך שם המקרה הוא שור נגח ולא אדם שידו חוטאת |
| LE §58, 185 | *imqutma … uštamit* | נפל והמית | `וְכִי יִפְתַּח אִישׁ בּוֹר … וְנָפַל שָׁמָּה שּׁוֹר אוֹ חֲמוֹר` (שמות כא:לג) | [equivalent] | The owner of a dangerous thing; Exodus: an animal falls into a pit and the owner pays. |
| UN c012–c014 | *gu₄ udu anše šaḫ₂ e₂ pu₂-a iri-ka u₂-gu ba-de₂, da-gi₄-a ib₂-su-su* | אם שור, כבש, חמור? (או) חזיר בבית (או) בבור של העיר אבד, הרובע יחליף | `וְכִי יִפְתַּח אִישׁ בּוֹר … וְנָפַל שָׁמָּה שּׁוֹר אוֹ חֲמוֹר` (שמות כא:לג) | [divergence] | An ox or donkey lost in a pit of the city: in the Torah the pit's owner pays, in UN the ward (*bābtu*). |
| HL HL2 §163, 163.6 | *na-at a-ki šar-ni-ik-zi-il* | והן תמותנה – פיצוי. | `וְכִי יִפְתַּח אִישׁ בּוֹר … וְנָפַל שָׁמָּה שּׁוֹר אוֹ חֲמוֹר. בַּעַל הַבּוֹר יְשַׁלֵּם` (שמות כא:לג) | [equivalent] | מכשול שהושאר במקום משותף בלי אזהרה; המזיק משלם |
| LI §11, 166′–175′ | *kislaḫ-zu al-tak₄ … niĝ₂ u₂-gu-de₂-a-ni in-na-ab-su-su* | "שטחך הזנוח עזוב … " … את אשר אבד לו לו יחליף | `בַּעַל הַבּוֹר יְשַׁלֵּם כֶּסֶף יָשִׁיב לִבְעָלָיו` (שמות כא:לד) | [equivalent] | Liability of the owner of a neglected property for a neighbour's loss (pit / empty plot), after a formal warning (`כונן`) – cf. `וְהוּעַד בִּבְעָלָיו` (שמות כא:כט). |
| HL HL1 §72, 416 | *takku GU₄-aš A.ŠÀ{ḪI.A}-ni kuelka aki* | אם שור ימות בשדה של מישהו, | `בַּעַל הַבּוֹר יְשַׁלֵּם כֶּסֶף יָשִׁיב לִבְעָלָיו; וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [divergence] | בתורה בעל הבור משלם, כי בורו גרם למוות; כאן בעל השדה משלם שני שוורים רק משום שהשור מת בשדהו – כמו האדם המת בעיר זרה (§6) |
| HL HL2 §106, 106.3 | *[A.ŠÀ-L]AM a-pa-a-aš da-a-[i …]* | [שדה] – הוא ייקח לעצמו, ו[שדה] משובח [לבעל] השדה | `וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [equivalent] | הדבר שניזק עובר למזיק, והנפגע מקבל ערך שלם |
| HL HL2 §113, 113.2 | *[{GIŠ}GEŠTIN-an] a-pa-a-aš da-a-i SIG₅-an-na {GIŠ}GEŠTIN* | [גפן] – הוא ייקח, וגפן משובחת | `וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לד) | [equivalent] | כמו ב־106: החותך לוקח את הגפן החתוכה ונותן גפן טובה |
| LH prol. 145 | *munakkip zā'irī* | הנוגף את השונאים | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ` (שמות כא:לה) | [cognate] | *nakāpu* = `נגף`; the verb of the goring-ox laws, here a royal epithet. Our proposal. |
| LH §247, 2864' | *mišil šīmišu* | חצי מחירו | `וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [equivalent] | Half the value, in a different case. |
| LH §250, 2886' | *ikkipma* | נגף | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ` (שמות כא:לה) | [cognate] | *nakāpu* = `נגף`, the Torah's own verb in 21:35 (= Eshnunna §53 *alpum alpam ikkipma*). From memory. |
| LH §251, 2891' | *alap awīlim* | שור איש | `וְכִי יִגֹּף שׁוֹר אִישׁ` (שמות כא:לה) | [equivalent] | The same phrase. Our proposal. |
| LH §225, 2684' | *rabiat šīmišu* | `רבע מחירו` | `וּמָכְרוּ אֶת הַשּׁוֹר הַחַי וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [divergence] | חלוקת הנזק בבהמה שמתה; כאן רבע. הצעה שלנו |
| LH §240, 2818' | *imḫaṣma* | `מָחֲצָה,` | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ וָמֵת` (שמות כא:לה) | [divergence] | אנלוגיה מבנית: נזק של רכוש נע לרכוש נע של אחר, והכרעה מי משלם; אבל הפועל כאן הוא *maḫāṣu* (`מחץ`), לא *nakāpu* (`נגף`, §250–§252), והשורש של `יִגֹּף` אינו בחוק הזה. הצעה שלנו |
| LH §176, 2184' | *mišlam bēl wardim* | את החצי בעל העבד | `וּמָכְרוּ אֶת הַשּׁוֹר הַחַי וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [equivalent] | חלוקה לשניים בין שני בעלים |
| LE §53, 168 | *šumma alpum alpam ikkimma* | אם שור את שור נגף | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ וָמֵת` (שמות כא:לה) | [cognate] | *nakāpu* = `נגף`, the Torah's own verb in this law; ox subject, ox object. The closest verbal parallel in cuneiform law. Difference: Exodus names the owners at once (`שׁוֹר אִישׁ … שׁוֹר רֵעֵהוּ`), LE says only "an ox an ox". |
| LE §53, 169 | *šīm alpim balṭim* | את מחיר השור החי | `וּמָכְרוּ אֶת הַשּׁוֹר הַחַי וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [equivalent] | The live ox is divided by its value: LE "the price" (*šīmu*, an assessment), Exodus "sell it and divide its silver" (`כַּסְפּוֹ`). *balṭu* `חי` ↔ `הַחַי` (other root). |
| LE §53, 169 | *u šīr alpim mītim* | ואת בשר השור המת | `וְגַם אֶת הַמֵּת יֶחֱצוּן` (שמות כא:לה) | [cognate] | *mītu* = `הַמֵּת`; LE specifies "the **flesh** of the dead ox", Exodus says only `הַמֵּת`. |
| LE §53, 170 | *bēl alpim kilallān izuzzū* | בעלי השור שניהם יחלוקו | `וְחָצוּ אֶת כַּסְפּוֹ וְגַם אֶת הַמֵּת יֶחֱצוּן` (שמות כא:לה) | [equivalent] | Same act, another verb (*zâzu* "share", not "halve"); **LE names both owners as subject, Exodus leaves the subject unexpressed**. `יחצו`/`יחצון` kept out (corpus §6.1). |
| HL HL1 §31, 171 | *nu=z(a) É-er takšan šarranzi* | ואת הבית לשניים יחלקו, | `וּמָכְרוּ אֶת הַשּׁוֹר הַחַי וְחָצוּ אֶת כַּסְפּוֹ` (שמות כא:לה) | [equivalent] | חלוקה שווה בין שני צדדים; כאן של רכוש משותף |
| HL HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `וְגַם אֶת הַמֵּת יֶחֱצוּן` (שמות כא:לה) | [equivalent] | חלוקת הבהמה המתה |
| HL HL2 §162b, 162b.4 | *šar-ni-i]k-ze-el Ù KUŠ-ŠÚ UZU-ŠU [da]-a-i* | [פי]צוי, ואת עורו (ואת) בשרו [ייק]ח. | `וְגַם אֶת הַמֵּת יֶחֱצוּן` (שמות כא:לה) | [equivalent] | הבהמה המתה – בשרה ועורה – נכנסת לחשבון הפיצוי |
| IN IN §17, 17.5 | *na-aš-*šu*-wa-ra-aš ⸢pár⸣-aš-ta na-aš-ma-wa-ra-an GU₄.NITA GUL-aḫ-ta* | או "נמלט", או "שור זכר מחץ אותו" – | `וְכִי יִגֹּף שׁוֹר אִישׁ אֶת שׁוֹר רֵעֵהוּ וָמֵת` (שמות כא:לה) | [divergence] | בתורה זהו חוק, כאן תירוץ של רמאי. ההקבלות טיפולוגיות |
| LH §231, 2729' | *wardam kīma wardim* | עבד כעבד | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | The X-for-X structure; LH's "like" (equivalent value) vs the Torah's "in place of". F7. |
| LH §245, 2850' | *alpam kīma alpim* | שור כשור | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לו) | [equivalent] | `כ` vs `תחת`; LH says nothing of the carcass. |
| LH §251, 2893' | *kīma nakkāpû* | וכי נגף הוא | `אוֹ נוֹדַע כִּי שׁוֹר נַגָּח הוּא` (שמות כא:לו) | [equivalent] | `נוֹדַע כִּי` ↔ *kīma … ušēdī*; root ידע in both. Our proposal for the wording. |
| LH §251, 2895' | *ušēdīšumma* | הודיעו לו | `אוֹ נוֹדַע כִּי שׁוֹר נַגָּח הוּא` (שמות כא:לו) | [cognate] | The Torah's second wording uses the cognate root ידע. |
| LH §251, 2897' | *qarnīšu lā ušarrim* | את קרניו לא קיטם? | `וְלֹא יִשְׁמְרֶנּוּ בְּעָלָיו` (שמות כא:לו) | [equivalent] | LH specifies two precautions; the Torah says "did not guard". `שמר` kept out. |
| LH §219, 2643' | *wardam kīma wardim iriab* | `עבד כעבד יחליף.` | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | אותו מבנה "X ב־X", אבל `תַּחַת` של התורה אינו *kīma* ("כמו", שווה ערך) |
| LH §231, 2729' | *wardam kīma wardim* | `עבד כעבד` | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | אותו מבנה "X ב־X", אבל `תחת` של התורה ("במקום") אינו *kīma* ("כמו", כלומר שווה ערך) |
| LH §236, 2785' | *iriab* | `יחליף.` | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | הנזק משולם בבהמה (כאן בספינה) שלמה. *riābu* = `החליף`, לא `שלם` |
| LH §240, 2828' | *iriabšum* | `יחליף לו.` | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לו) | [divergence] | בתורה התשלום המלא תלוי בידיעה מוקדמת (השור הנגח הידוע); כאן בכלל קבוע: הספינה העולה, שקל לה יותר לסטות, אחראית לכל. הצעה שלנו |
| LH §138, 1617' | *ušallamšimma* | ישלם לה, | `שַׁלֵּם יְשַׁלֵּם` (שמות כא:לו) | [cognate] | *šullumu* = `שִׁלֵּם` |
| LH §172, 2097' | *ušallamūšimma* | ישלמו לה, | `שַׁלֵּם יְשַׁלֵּם` (שמות כא:לו) | [cognate] | *šullumu* = `שִׁלֵּם` |
| LE §53, 168–170 | *šumma alpum alpam ikkimma uštamit* … | אם שור את שור נגף והמית … | `אוֹ נוֹדַע כִּי שׁוֹר נַגָּח הוּא מִתְּמוֹל שִׁלְשֹׁם וְלֹא יִשְׁמְרֶנּוּ בְּעָלָיו שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [absent] | LE has no sequel for the warned ox that kills an ox (§54 is the warned ox that kills a man); Exod 21:36 has. Cross-collection: **LH has no ox-gores-ox law at all**; cf. LH §250 (2883'–2890': the ox that gores a man in the street, no claim). |
| LE §54, 172 | *ušēdi* | הודיע | `אוֹ נוֹדַע כִּי שׁוֹר נַגָּח הוּא` (שמות כא:לו) | [cognate] | *šūdû* (Š of *edû* "know") and `נוֹדַע` share the root ידע (our suggestion). |
| LE §54, 172 | *alapšu lā ušēšir* | ואת שורו לא יישר | `וְלֹא יִשְׁמְרֶנּוּ בְּעָלָיו` (שמות כא:לו) | [equivalent] | *ešēru* Š "keep in order" = `יישר` [cognate ישר]; LH §251 uses another verb (*lā usanniq* `לא ריסן`); Exodus `שמר`. |
| LE §49, 156 | *wardum wardam* | עבד עבד | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | The X-X structure, without `תחת`. |
| MAL §39, r v 40 | *šīm sinnilte ušallam* | את מחיר האשה [ישלם] | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [cognate] | *šullumu* = שִׁלֵּם (F8); restored. |
| LI §12, 183′–184′ | *saĝ saĝ-gin₇ ba-ab-šum₂-mu* | עבד כעבד יתן | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | "X like X" (*-gin₇* = *kīma* = `כ`, LH F7) vs the Torah's "X in place of X"; `תחת` kept out. |
| MALB §12, r v 18 | *eqle kī eqle ana bēl kirê inaddin* | `שדה כשדה לבעל הגן [יתן]` | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | *kī* "like" vs `תַּחַת` (corpus §5). |
| HL HL1 §74, 421 | *takku SI GU₄ našma GÌR GU₄ kuiški* | אם מישהו ישבור קרן שור או רגל שור, | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר וְהַמֵּת יִהְיֶה לּוֹ` (שמות כא:לו) | [equivalent] | החלפה: המזיק לוקח את השור הפגוע ונותן שור שלם |
| IN IN §17, 17.7 | *nu a-pu-u-un GU₄ ⸢šar⸣-ni-ik-te-ni-pát ma-⸢a⸣-[an-m]a-aš UL-ma iš-du-wa-a-⸢ri⸣* | את השור ההוא תפצו ממש! ואילו אם לא ייוודע – | `שַׁלֵּם יְשַׁלֵּם שׁוֹר תַּחַת הַשּׁוֹר` (שמות כא:לו) | [equivalent] | פיצוי שור בשור. הקבלה טיפולוגית |
| LH §265, 3009' | *ana kaspim ittadin* | ובכסף נתן | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ` (שמות כא:לז) | [equivalent] | Stolen and sold. |
| LH §265, 3011' | *adi ešrīšu* | עד פי עשרה | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | Tenfold vs five- and fourfold. From memory. |
| LH §6, 377 | *šumma awīlum* | `אם איש` | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה` (שמות כא:לז) | [equivalent] | אותו פתח של חוק גניבה ("אם/כי איש … גנב"), בלי מדרג `כי`/`אם` ב־LH (F1) |
| LH §6, 382 | *iddâk* | `יהרג,` | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ חֲמִשָּׁה בָקָר יְשַׁלֵּם` (שמות כא:לז) | [divergence] | בספר הברית גניבת רכוש אינה עוון מוות; ב־LH הגונב מן המקדש או מן ההיכל נהרג. מן הזיכרון (ההבדל בין ענישת הגונב בתורה לענישתו ב־LH נדון רבות; פינקלשטיין) |
| LH §7, 391 | *lu alpam lu immeram* | `בין שור בין כבש` | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה` (שמות כא:לז) | [equivalent] |  |
| LH §8, 404 | *lu alpam lu immeram lu imēram lu šahâm* | `בין שור בין כבש בין חמור בין חזיר` | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ` (שמות כא:לז) | [equivalent] |  |
| LH §8, 409 | *adi šalāšâšu* | `עד פי שלושים` | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [equivalent] | מן הזיכרון |
| LH §12, 493 | *adi hamšīšu* | `עד פי חמישה` | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [equivalent] | אותו מספר, מקרה אחר; הצעה שלנו |
| LH §112, 1265' | *adi hamšīšu mimma* | `עד פי חמישה כל` | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [equivalent] | פי חמישה בתורה לגונב שור ומכרו |
| UN c021–c023 | *gu₄ ne-ri niĝ₂-diri-bi 1(barig)* | שור אחד *גנוב* – העודף שלו פרסיכתו אחת | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | A fixed grain levy per stolen animal (if *ne-ri* = "stolen"); the Torah's multiple restitution. |
| HL HL1 §57, 319 | *takku GU₄.MAḪ-an kuiški tayazzi* | אם מישהו יגנוב פַּר, | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | **השוואת המספרים:** התורה – חמישה בקר תחת שור; החוק החתי – לפנים שלושים, ועתה חמישה עשר (פי חמישה עשר!), אבל מבעלי חיים צעירים. בחוקי חמורבי §8 – פי שלושים (לאל ולהיכל) או פי עשרה |
| HL HL1 §59, 341 | *takku UDU.A.LUM kuiški tāyezzi* | אם מישהו יגנוב אַיִל, | `וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | התורה: ארבע צאן תחת שה; החוק החתי: לפנים שלושים, ועתה חמש עשרה |
| HL HL1 §63, 364 | *takku GU₄.APIN.LÁ kuiški dāyezzi* | אם מישהו יגנוב שור חרישה, | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [divergence] | התורה: חמישה; החוק החתי: לפנים חמישה עשר, ועתה עשרה. שור החרישה זול מן הפר (חמישה עשר) – אבל ההפחתה כאן קטנה יותר (שליש ולא מחצית) |
| HL HL1 §67, 386 | *takku {GU₄}ÁB kuiški tāyezz[i]* | אם מישהו יגנוב פרה, | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [divergence] | התורה אינה מבחינה בין פר לפרה; החוק החתי – פר: חמישה עשר, פרה: שישה |
| HL HL1 §69, 393 | *takku UDU.U₈ našma UDU.NÍTA-an kuiški tāyezzi* | אם מישהו יגנוב רחל או כבש, | `וְאַרְבַּע צֹאן תַּחַת הַשֶּׂה` (שמות כא:לז) | [divergence] | התורה: ארבע; החוק החתי: לפנים שתים עשרה, ועתה שש |
| HL HL2 §101, 101.7 | *pa]-a-i ták-ku ARAD-ša 3 GÍN.GÍN KÙ.BABBAR pa-a-i* | [… ייתן], ואם עבד – שלושה שקלים כסף ייתן. | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה` (שמות כא:לז) | [absent] | בתורה אין הבחנה בין גנב בן חורין לגנב עבד; בחוק החתי העבד משלם מחצית |
| HL HL2 §126, 126.3 | *ku-iš-ki ta-i-e-ez-zi a-ki-aš ták-ku ZI.KIN.BAR URUDU* | מישהו יגנוב – ימות. אם מחט נחושת | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ חֲמִשָּׁה בָקָר יְשַׁלֵּם` (שמות כא:לז) | [divergence] | בתורה אין גניבת רכוש שעונשה מוות; כאן – מוות לגונב חנית משער ההיכל (*akiaš* "ימות", פעיל) |
| HL HL2 §128, 128.4 | *A-NA 2 NA₄ 10 NA₄{ḪI.A} pa-[a]-i ták-k[u {N]A₄}ḫu-u-ḫa-an* | לשתי אבנים – עשר אבנים ייתן. אם (אבן) חוּחָה | `חֲמִשָּׁה בָקָר יְשַׁלֵּם תַּחַת הַשּׁוֹר` (שמות כא:לז) | [equivalent] | אותו יחס בדיוק: פי חמישה, בעין |

### Exodus 22

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §21, 569 | *bītam ipluš* | בית פלש | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [equivalent] | *palāšu* ~ `חתר` (reserved); `פלש` is the Aramaic/Mishnaic cognate. |
| LH §7, 402 | *šarrāq iddâk* | `גַּנָּב הוא, יהרג.` | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב` (שמות כב:א) | [equivalent] | אותו שם עצם, באותה תבנית (*parrās* = `פַּעָּל`) |
| LE §12, 45–46 | *ša ina mūšim ina kurullim iṣṣabbatu imât ul iballuṭ* | אשר בלילה בעמרים ייתפש – ימות, לא יחיה | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [divergence] | By night: LE the law itself imposes death; Exodus only exempts the one who struck him. |
| LE §13, 47–50 | *ša ina mūšim ina bītim iṣṣabbatu imât ul iballuṭ* | אשר בלילה בבית ייתפש – ימות, לא יחיה | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב` (שמות כב:א) | [equivalent] | The thief in the house by night. |
| LE §60, 192–193 | *pallišu bītam ipluš* | ופולש את הבית פלש | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב` (שמות כב:א) | [equivalent] | *palāšu* (`פלש`) ~ `מחתרת` (kept out). Cross-collection: LH §21 (567'–574': the burglar killed and "hung" before the breach). |
| MAL §15, o ii 46 | *aranšu laššu* | עון אין לו | `אֵין לוֹ דָּמִים` (שמות כב:א) | [equivalent] | The killer is not liable. |
| HL HL1 §90, 496 | *takku UR.GI₇-aš Ì.ŠAḪ karāpi* | אם כלב יטרוף שומן־חזיר, | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [divergence] | גם שם הריגת "הגנב" שנתפס פטורה; כאן הגנב הוא כלב |
| HL HL1 §93, 512 | *takku LÚ-an EL-LAM tapešni appan[zi]* | אם איש בן חורין יתפסו *בטַפֶּשְׁנִי*, | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [equivalent] | הגנב שנתפס בשעת הפריצה |
| HL HL2 §121, 121.2 | *{GIŠ}ap-pa-la-aš-ša-a[š š]a-ra-a ti-it-ta-nu-uz-zi t[a GU₄{ḪI.A}-it* | על האַפַּלַּשָּׁה למעלה יעמיד, ו[בשוורים …] | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב וְהֻכָּה וָמֵת אֵין לוֹ דָּמִים` (שמות כב:א) | [divergence] | בתורה המתת הגנב במחתרת היא התגוננות; בחוק החתי הישן – עונש בידי בעל המחרשה, בכלי שנגנב; והחוק החדש ממיר אותו בכסף |
| LH §21, 573 | *idukkūšu* | יהרגוהו | `אִם זָרְחָה הַשֶּׁמֶשׁ עָלָיו דָּמִים לוֹ` (שמות כב:ב) | [divergence] | The Torah: no bloodguilt at night, bloodguilt by day; LH: the breaker is sentenced to death, no day/night distinction (Eshnunna §12–13 has it, from memory). |
| LH §256, 2939' | *imtanaššarūšu* | יגררוהו הלוך ושוב | `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [divergence] | The insolvent: dragged through the field (LH) vs sold (Exod). From memory. |
| LH §8, 414 | *ša nadānim lā īšu* | `לתת אין לו,` | `שַׁלֵּם יְשַׁלֵּם אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [divergence] | אותו מקרה בדיוק (גנב שאין לו לשלם), ותוצאה הפוכה: בתורה נמכר, ב־LH נהרג. מן הזיכרון |
| LH §51, 958 | *kaspam ana turrim lā išu* | כסף להשיב אין לו | `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [equivalent] | "If he has not": here payment in kind; in §54 sale. From memory. |
| LH §54, 989–992 | *šuāti u bīšašu ana kaspim inaddinū* | אותו ואת מטלטליו בכסף יתנו | `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [equivalent] | Sale of the insolvent: for theft (Torah), for negligent flooding (LH). From memory. |
| LE §12, 44 | *ina muṣlalim iṣṣabbatu* … *10 šiqil kaspam išaqqal* | בצהריים, ייתפש – עשרה שקלי כסף ישקול | `אִם זָרְחָה הַשֶּׁמֶשׁ עָלָיו דָּמִים לוֹ שַׁלֵּם יְשַׁלֵּם` (שמות כב:ב) | [equivalent] | The thief by day pays. Exodus' criterion is the sun, LE's the hour (midday). |
| MAL §5, o i 64 | *šurqa iddan u ipaṭṭarši* | את הגנבה יתן ויפטרנה | `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [divergence] | The thief who cannot pay is sold (Exod); here the husband redeems his wife or her victim takes her. Our proposal. |
| MAL §39, r v 33 | *tādināna ilaqqe* | את הנותן יקח | `אִם אֵין לוֹ וְנִמְכַּר בִּגְנֵבָתוֹ` (שמות כב:ב) | [equivalent] | The one who cannot pay is taken in person. |
| HL HL1 §5, 26 | *āššu=šett=a šarnikzi* | וגם את רכושו יפצה. | `שַׁלֵּם יְשַׁלֵּם` (שמות כב:ב) | [equivalent] | אך בעברית של החוק החתי *šarnink-* = `פיצה`, ו`שִׁלֵּם` שמור ל־*šullumu* |
| LH §5, 367 | *adi šinšerīšu* | עד פי שנים עשר | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | The highest multiple in LH. |
| LH §19, 554–555 | *ina qātišu ittaṣbat* | בידו נתפש | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | F23. |
| LH §253, 2919' | *ina qātišu ittaṣbat* | ובידו נתפש | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | F23. From memory. |
| LH §253, 2921' | *rittašu inakkisū* | את כפו יקצצו | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [divergence] | Mutilation (LH) vs double restitution (Exod). |
| LH §254, 2925' | *tašna* | כפליים | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | Double restitution. |
| LH §6, 383 | *u ša šurqam* | `ואשר את הַגְּנֵבָה` | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | אותו שם עצם לדבר הגנוב |
| LH §7, 392 | *lu imēram* | `בין חמור` | `מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה` (שמות כב:ג) | [cognate] |  |
| LH §8, 404 | *lu alpam lu immeram lu imēram lu šahâm* | `בין שור בין כבש בין חמור בין חזיר` | `מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים` (שמות כב:ג) | [equivalent] | אותה רשימה של בהמות |
| LH §8, 409 | *adi šalāšâšu* | `עד פי שלושים` | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | התורה מדרגת לפי מצב הבהמה (טבוחה או חיה) ולפי סוגה; LH מדרג לפי בעליה (אל והיכל, מסכן); מן הזיכרון |
| LH §9, 420 | *ina qāti awīlim* | `ביד איש` | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | הדבר הנגנב "בידו" של המחזיק |
| LH §10, 474 | *šarrāq iddak* | `גנב הוא, יהרג.` | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | המחזיק בגנבה בלי הסבר הוא הגנב |
| LH §160, 1888' | *uštašannāma* | יכפיל, | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה … שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | כפל כעונש |
| LE §40, 133–134 | *nādinānam lā ukīn šûma šarrāq* | ואת המוכר לא כונן – הוא הוא גנב | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | The holder who cannot produce the seller is the thief. Cross-collection: LH §9–10. |
| MAL §24, o iii 64 | *šaššāte iddan* | פי שלושה יתן | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | Multiple restitution: threefold here (for harbouring a married woman), double in Exod (theft). |
| UN e020–e024 | *tukum-bi nu-mu-tum₂ lu₂-bi ni₂-zuḫ-am₃* | אם לא הוביל, האיש ההוא גנב הוא | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה` (שמות כב:ג) | [equivalent] | The holder who cannot produce his seller is a thief (= LH §9–§10). |
| MALB §7, o iv 6 | *šinēšu ina šīm bēte* | `פעמיים במחיר הבית` | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | Double payment; context broken. |
| HL HL1 §70, 398 | *takku GU₄* | אם שור, | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים: שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | אותה רשימה (שור … חמור), ואותו מקרה: הבהמה הגנובה נמצאה חיה ובעליה מזהה אותה; ואותו קנס – כפל |
| HL PT § III, 10 | *āššu=ya 3-ŠU šarnikzi* | וגם את הרכוש פי שלושה יפצה. | `אִם הִמָּצֵא תִמָּצֵא בְיָדוֹ הַגְּנֵבָה מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה חַיִּים` (שמות כב:ג) | [divergence] | בתורה הגנב משלם `שְׁנַיִם`; כאן הרוצח־השודד משלם פי שלושה על הסחורה, נוסף על דמי הנפש |
| HL PT § XXXV, 158 | *3-ŠU šarnikzi* | פי שלושה יפצה. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [divergence] | תשלום הגנב בתורה |
| HL HL2 §103, 103.4 | *ar-še-ez-z]i Ù 2 GÍN.GÍN KÙ.BABBAR pa-a-i* | יטע, ושני שקלים כסף ייתן. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [divergence] | בתורה כפל; כאן החזרה בעבודה (נטיעה מחדש) וקנס לפי אורך הנטיעה |
| HL HL2 §128, 128.2 | *ta-i-e-ez-zi an-da-aš-še〈〈aš-še〉〉 a-pé-e-ni-šu-u-wa-an ⸢pa-a-i⸣* | שיגנוב – בנוסף לו כזה ייתן. | `שְׁנַיִם יְשַׁלֵּם` (שמות כב:ג) | [equivalent] | כפל, כמו ב־110 |
| LH §42, 830 | *âm kīma itēšu* | שעורים כשכנו | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | The measure of compensation: the neighbour's average yield vs the best of the offender's own field. Our proposal (the measure of 22:4 is discussed in the literature, from memory). |
| LH §57, 1018–1019 | *eqlam ṣēnam uštākil* | את השדה לצאן האכיל | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | Grazing in another's field; LH's verb is *akālu* Š (feeding), not burning: support for the grazing reading of 22:4. LH's fine is fixed per area (20 kur / bur), the Torah's "the best of his field". From memory. Also 1024, 1039–1040. |
| LH §58, 1038 | *ana eqlim iddī* | אל השדה השליך | `וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | The same act with another verb (*nadû* `השליך`, not `שילח`). The higher fine (60 kur / bur) after the end of the grazing season. From memory. |
| LI §9, 153′ | *ĝeškiri₆ lu₂-ka* | לגן איש | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם … וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | Damage in another's field or vineyard; the Torah's remedy is `מֵיטַב … יְשַׁלֵּם`, LI's a fixed fine. |
| UN §29–§30, 416–430 | *{a-ša₃} lu₂ … lu₂ a-da bi₂-DU … 3 še gur* | שדה איש … איש במים הציף … שלושה כור שעורים ימוד | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | Damage to another's field (UN water, LH §53–§56 water, the Torah cattle and fire); compensation in grain per area. |
| MALB §13, r v 25 | *kirê adi mānihātešu ilaqqe* | `את הגן עם יְגִיעוֹ יקח` | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | The Torah's trespasser pays; here the trespasser loses his investment to the owner. |
| MALB §19, r vii 15–17 | *kī bilat eqle ša āle 2 nappaltēn ana bēl eqle inaddin* | `כתנובת שדה של העיר [שתי] *יתרות* [לבעל] השדה יתן` | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | The one who worked another's field gives the owner a share "as the yield of a city field"; cf. LH §42 (*kīma itātišu*). |
| HL HL1 §79, 453 | *[takku] GU₄{ḪI.A} A.ŠÀ-ni pānzi* | [אם] שוורים ילכו אל שדה, | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בתורה בעל הבהמה משלם על הנזק מן המיטב; בחוק החתי בעל השדה מפצה את עצמו בעבודת הבהמות יום אחד – עד צאת הכוכבים – ומחזיר אותן |
| HL HL1 §86, 479 | *takku ŠAḪ šēliya našma A.ŠÀ-ni {GIŠ}KIRI₆-ni pai[zzi]* | אם חזיר ילך אל ערמה, או אל שדה, אל גן, | `וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [divergence] | בתורה בעל הבהמה משלם; כאן בעל השדה רשאי להרוג את החזיר – אך חייב להחזיר את הגוויה |
| HL HL2 §106, 106.1 | *[ták-ku p]a-aḫ-ḫur A-N[A A.ŠÀ]-ŠU ku-iš-ki pé-e-da-i [ta ta-me-e]l-la* | [אם] מישהו יישא אש אל [שדה]ו, [וגם של אחר] | `וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | "שדה (של) אחר" – *tamel A.ŠÀ-ŠU* בנוסח הקדום; הנוסח המאוחר (KBo 6.11) – "שדה מניב" |
| HL HL2 §106, 106.1 | *[ták-ku p]a-aḫ-ḫur …* (KBo 6.11: *tar-na-a-i*) | [אם] מישהו יישא אש אל [שדה]ו, [וגם של אחר] | `וְשִׁלַּח אֶת בְּעִירֹה` (שמות כב:ד) | [equivalent] | הנוסח המאוחר "משלח" את האש באותו פועל, *tarna-* = `שלח`; התורה – את הבהמה (או, לפי מפרשים, את האש) |
| HL HL2 §106, 106.3 | *[A.ŠÀ-L]AM a-pa-a-aš da-a-[i SI]G₅-an-da-an-na [A.ŠÀ A-NA EN] A.ŠÀ* | [שדה] – הוא ייקח לעצמו, ו[שדה] משובח [לבעל] השדה | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בשניהם הנפגע מקבל מן הטוב (*SIG₅* `משובח` ↔ `מיטב`); בתורה מן התוצרת של המזיק, כאן חילופי שדות |
| HL HL2 §107, 107.1 | *ták-ku LÚ.U₁₉.LU-aš i-ia-at-ni-ia-an-da-aš {GIŠ}KIRI₆.GEŠTIN UDU{ḪI.A} tar-na-a-i* | אם אדם ישלח צאן לכרם שופע, | `כִּי יַבְעֶר אִישׁ שָׂדֶה אוֹ כֶרֶם וְשִׁלַּח אֶת בְּעִירֹה וּבִעֵר בִּשְׂדֵה אַחֵר` (שמות כב:ד) | [equivalent] | אותו מקרה ואותו פועל: הבהמה "משולחת" אל כרם הזולת; הקבלה טיפולוגית של שני חוקים חקלאיים |
| HL HL2 §107, 107.2 | *ta-a ḫar-ni-ik-zi ták-ku mi-an-da A-NA 1 IKU 10 GÍN KÙ.BABBAR pa-a-i* | וישחית (אותו): אם מניב – לאִיקוּ אחד, עשרה שקלים כסף ייתן, | `מֵיטַב שָׂדֵהוּ וּמֵיטַב כַּרְמוֹ יְשַׁלֵּם` (שמות כב:ד) | [divergence] | בתורה בעין ומן הטוב; כאן בכסף, לפי שטח ולפי מצב הכרם (מניב / ריק; ובנוסח הקדום – חמישה שקלים לריק) |
| LH §25, 606 | idem | idem | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים` (שמות כב:ה) | [equivalent] |  |
| LH §25, 618 | *ana išātim šuāti innaddi* | לאש ההיא יושלך | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ … שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [divergence] | Two fire laws, different subjects: the Torah's fire-setter pays; LH's looter is thrown into the same fire. |
| LH §232, 2736' | *iriab* | `יחליף,` | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [equivalent] | מי שגרם לנזק ברכוש משלם; שם `שלם`, כאן *riābu* (F7) |
| LH §53, 981 | *u ugāram mê uštābil* | ואת השדמה בידי המים הוביל | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה אוֹ הַשָּׂדֶה שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [equivalent] | Negligent damage spreading to other people's fields: water in LH §53–§56, fire in the Torah; the liable person defined by his act (982–984 "the man in whose dike the breach opened" ↔ `הַמַּבְעִר אֶת הַבְּעֵרָה`). From memory. |
| LH §53, 986 | *iriab* | יחליף | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [equivalent] | *riābu* `החליף`, not *šullumu* `שילם`. |
| HL HL1 §98, 551 | *[takk]u LÚ-aš EL-LUM É-er lukkizzi* | [אם] איש בן חורין יצית בית, | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה אוֹ הַשָּׂדֶה שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [divergence] | בתורה אש בשדה ותשלום; כאן הצתת בית, והמצית בונה אותו מחדש |
| HL HL1 §99, 556 | *takku ARAD-iš É-er lukkizzi* | אם עבד יצית בית, | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [divergence] | התורה אינה מבחינה בין עבד לבן חורין; בחוק החתי האדון משלם, והעבד מושחת |
| HL HL1 §100, 562 | *[tak]ku taišzin kuiški lukkizzi* | [אם] מישהו יצית *מתבן*, | `וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה` (שמות כב:ה) | [equivalent] | שריפת המזון של המשק |
| HL HL2 §105, 105.2 | *[{GIŠ}KIRI₆.GEŠTIN e-ep-zi tá]k-ku GEŠTIN-iš [{GIŠ}ḪAŠḪU]R na-aš-ma {GIŠ}ḪAŠḪUR.KUR.RA [na-aš-ma]* | [כרם תתפוס – אם] גפן, [תפוח] או תפוח־הרים [או] | `כִּי תֵצֵא אֵשׁ וּמָצְאָה קֹצִים וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה אוֹ הַשָּׂדֶה` (שמות כב:ה) | [equivalent] | אותו מקרה: אש שהוצתה במקום אחד ו"מצאה" (*anda ēpp-* "תפסה בתוכו") את רכוש הזולת; זימרן ופרידריך השוו כבר ב־1922 |
| HL HL2 §127, 127.2 | *ku-it ku-it ḫar-ak-zi ta-at šar-⸢ni⸣-ik-zi* | כל מה שיאבד – ואותו יפצה, | `שַׁלֵּם יְשַׁלֵּם הַמַּבְעִר אֶת הַבְּעֵרָה` (שמות כב:ה) | [equivalent] | האחריות לנזק העקיף |
| LH §120, 1369' | *uštašanna* | יכפיל | `יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | Double for the defaulting custodian. |
| LH §122, 1380' | *awīlum ana awīlim … inaddin* | איש לאיש … יתן | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (שמות כב:ו) | [equivalent] | The deposit law opens the same way; `רעהו` reserved, `נתן` [cognate]. From memory (standard). |
| LH §122, 1383' | *ana maṣṣarūtim* | לנצירה | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (שמות כב:ו) | [equivalent] | F25: *naṣāru* = `נצר`, the Torah `שמר`. |
| LH §125, 1418' | *pilšim* | במפלש | `וְגֻנַּב מִבֵּית הָאִישׁ אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | The deposit stolen from the custodian's house. |
| LH §125, 1432' | *itti šarrāqānišu* | ומאת גנבו | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] |  |
| LH §7, 399 | *u lu ana maṣṣarūtim* | `או לִנְצִירָה` | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (שמות כב:ו) | [equivalent] | הפיקדון |
| LH §9, 455 | *šarrāq iddâk* | `גנב הוא, יהרג.` | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [divergence] | בתורה הגנב שנמצא משלם כפל; ב־LH המוכר הגנב נהרג |
| LH §101, 1134' | *uštašannāma* | `יכפיל` | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | "פי שניים" בדיני הפיקדון |
| LH §58, 1042 | *inaṣṣar* | ינצור | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (שמות כב:ו) | [equivalent] | *naṣāru* `נצר` vs the Torah's `שמר`. |
| LE §36, 119–122 | *bušēšu ana napṭarim ana maṣṣartim iddinma … uḫtalliq … iriabšum* | את חפציו לנפטרו לנצירה נתן … איבד – … יחליף לו | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ` (שמות כב:ו) | [equivalent] | The deposit lost from the keeper's house. `כלים`, `שמר` kept out (*bušû* `חפצים`, *maṣṣartu* `נצירה`). |
| MAL §3, o i 31 | *idukkūšunu* (thief-wife and receivers) | יהרגום | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [divergence] | Death for a wife's theft from a sick or dead husband; the Torah has no death for theft. |
| MAL §6, o i 70–73 | *maškatta ina kīde taltakan … māhirānu šurqa inašši* | הפקדה בחוץ שָׂמָה, המקבל את הגנבה ישא | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר` (שמות כב:ו) | [equivalent] | A deposit with another; here made by the wife outside the house, and treated as stolen. |
| UN b017 | *e₂ lu₂-ka lu₂ še i₃-si* | בבית איש איש שעורים מילא | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ` (שמות כב:ו) | [equivalent] | The deposit in another's house (LH §120 grain). |
| HL HL1 §29, 160 | *kūšata=ma 2-ŠU šarninkanzi* | ואילו את המֹהַר פי שניים יפצו. | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | תשלום כפל כקנס. בחוקי חמורבי §160 אותו דין: אבי הבת שאמר "את בתי לא אתן לך" – יכפיל וישיב (בעברית שלנו שם) |
| HL HL1 §94, 518 | *takku LÚ-LUM EL-LUM É-er tāyezzi* | אם איש בן חורין יגנוב בית, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | גנבה מבית |
| HL HL2 §110, 110.2 | *[ da]-a-i-ia-az-zi an-da-še-ia a-pé-e-ni-iš-šu-u-wa-an pa-a-i* | [כמה] שיגנוב – וגם בנוסף לו כזה ייתן. | `אִם יִמָּצֵא הַגַּנָּב יְשַׁלֵּם שְׁנָיִם` (שמות כב:ו) | [equivalent] | "כמה שגנב, ועוד כזה" – תשלום כפל, כדין הגנב בתורה |
| HL HL2 §124, 124.3 | *[I-N]A A.ŠÀ da-l[i?-ia-zi ta ta-i-ez-zi ku-i]š-ki 3 GÍN KÙ.BABBAR pa-a-[i]* | [ב]שדה י[ניח, ו(אותן) יגנוב מישהו] – שלושה שקלים כסף ייתן, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ כֶּסֶף אוֹ כֵלִים לִשְׁמֹר וְגֻנַּב מִבֵּית הָאִישׁ` (שמות כב:ו) | [equivalent] | היכן הושאר הרכוש כשנגנב: בתורה בבית השומר, כאן בשדה הפתוח |
| LH §16, 528 | *bēl bītim* | בעל הבית | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [cognate] | F17. |
| LH §23, 582 | *ḫabbātum lā ittaṣbat* | הגזלן לא נתפש | `אִם לֹא יִמָּצֵא הַגַּנָּב וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [equivalent] | The thief not found → before the god. |
| LH §120, 1360' | *še'am ilqe* | ושעורים לקח | `אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:ז) | [equivalent] | The custodian who takes from the deposit. |
| LH §123, 1400' | *dīnum šū rugummâm ul išu* | לדין ההוא תביעה אין | `אִם לֹא יִמָּצֵא הַגַּנָּב וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [divergence] | No witnesses → no claim (LH) vs. → before God, oath (Torah). From memory. |
| LH §125, 1422' | idem | idem | `אִם לֹא יִמָּצֵא הַגַּנָּב וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [divergence] | The Torah's (unpaid) keeper swears and is free. |
| LH §9, 429 | *u bēl ḫulqim* | `ובעל האבדה` | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [cognate] | `בַּעַל` + שם הדבר |
| LH §9, 452 | *maḫar ilim* | `לפני האל` | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [equivalent] | באותו נושא (אבדה, פיקדון). הקבלה מקובלת; מן הזיכרון |
| LH §229, 2721' | *bēl bītim uštamīt* | `ואת בעל הבית הֵמִית,` | `בַּעַל הַבַּיִת` (שמות כב:ז) | [cognate] | F17 |
| LH §106, 1183' | *ina maḫar ilim u šībī* | `לפני האל ועדים` | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [equivalent] | מחלוקת על כסף שנמסר בידי אחר מוכרעת "לפני האל". מן הזיכרון. |
| LE §37, 125 | *bēl bītim ina bāb Tišpak nīš ilim izakkaršumma* | בעל הבית בפתח תישפך את חיי האל יזכיר לו | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:ז) | [equivalent] | **The same case and party** (the householder-keeper whose house was robbed), the same resolution by an oath at the sanctuary. *bēl bītim* = `בַּעַל הַבַּיִת` [cognate]. A: "in the house of Tišpak". `אל האלהים` kept out. |
| LE §37, 127 | *iwītam u sartam lā ēpušu* | עוולה ושקר לא עשיתי | `אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:ז) | [equivalent] | The content of the oath: no misappropriation. |
| MAL §25, o iii 90–92 | *ana rēḫāti ilāni ušettuqū ubarrū ilaqqeū* | לשאר – את האלים יעבירו, יבררו, יקחו | `וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [equivalent] | A property claim settled before the gods. |
| UN b017–b020 | *e₂ lu₂-ka lu₂ še i₃-si, e₂-bi ba-burₓ, lugal še-ke₄ nam-erim₂ u₃-ku₅, lugal e₂-a-ke₄ ib₂-su-su* | אם בבית איש איש שעורים מילא, והבית ההוא נפלש, בעל השעורים משנשבע שבועה, בעל הבית יחליף | `אִם לֹא יִמָּצֵא הַגַּנָּב וְנִקְרַב בַּעַל הַבַּיִת אֶל הָאֱלֹהִים` (שמות כב:ז) | [divergence] | **The deposit stolen by burglary: in the Torah the house-owner swears and is cleared; in UN the depositor swears and the house-owner replaces** (cf. LH §125). `בַּעַל הַבַּיִת` = *lugal e₂*. |
| LH §23, 587–589 | *maḫar ilim ubâr* | לפני האל יברר | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | F12; `לפני האל`, never `אלהים`. |
| LH §23, 586 | *ḫalqam* | האבוד | `עַל כָּל אֲבֵדָה` (שמות כב:ח) | [equivalent] | F22. |
| LH §120, 1365' | *bēl še'im maḫar ilim* | בעל השעורים לפני האל | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | F12. |
| LH §124, 1412' | *uštašannāma inaddin* | יכפיל ויתן | `אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ` (שמות כב:ח) | [equivalent] | Double for denying a deposit – the closest match of the block. From memory. |
| LH §126, 1438' | *mimmê ḫaliq iqtabi* | "רכושי אבד" אמר | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] | The claim of loss. From memory. |
| LH §126, 1444' | *ina maḫar ilim* | לפני האל | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] |  |
| LH §126, 1448' | *uštašannā* | יכפיל | `אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ` (שמות כב:ח) | [equivalent] | The false claimant pays double too – Exod 22:8 covers both parties ("whom God condemns"). From memory. |
| LH §9, 422 | *awīlum ša ḫulqum* | `האיש אשר הָאֲבֵדָה` | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] | אותו מונח: האבדה שבעליה מזהה אותה ביד אחר |
| LH §9, 425 | *nādinanummi iddinam* | `"מוכר נתן לי,` | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] | גם בתורה הדין נפתח בטענת אחד הצדדים |
| LH §9, 442 | *itbalam* | `הוביל,` | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [divergence] | בתורה שני הצדדים באים "עד האלהים" בלי עדים, ו`אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים` מכריע; ב־LH כל צד מביא עדים, והעדים מעידים לפני האל (452). מן הזיכרון |
| LH §9, 452 | *maḫar ilim* | `לפני האל` | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | מן הזיכרון |
| LH §240, 2822' | *ina maḫar ilim* | `לפני האל` | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | הצהרת הנזק לפני האל; מן הזיכרון |
| LH §240, 2822' | *ina maḫar ilim* | `לפני האל` | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] | מן הזיכרון |
| LH §101, 1134' | *uštašannāma* | `יכפיל` | `אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ` (שמות כב:ח) | [equivalent] | "פי שניים" בדיני הפיקדון |
| LH §106, 1183' | *ina maḫar ilim u šībī* | `לפני האל ועדים` | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | מחלוקת על כסף שנמסר בידי אחר מוכרעת "לפני האל". מן הזיכרון. |
| LH §106, 1188' | *adi šalāšīšu ana tamkārim* | `עד פי שלושה לתגר` | `יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ` (שמות כב:ח) | [equivalent] | התורה מכפילה את מי שהכחיש פיקדון וחויב "לפני האלהים"; LH משלש (השוליה) ומשש (התגר, §107). מן הזיכרון. |
| LH §112, 1265' | *adi hamšīšu mimma* | `עד פי חמישה כל` | `שְׁנַיִם` (שמות כב:ח) | [divergence] | מן הזיכרון. |
| LE §37, 124 | *ḫuluq bēl bītim ḫaliq* | אבדת בעל הבית אבודה | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] |  |
| MAL §1, o i 10 | *ile išaʾʾulū* | את האל ישאלו | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | The undecidable theft case brought to the deity. |
| UN b021–b023b | *lugal e₂ ba-da-kur₂, u₃-ge-en₈, ša₃-bi min-am₃ še i₃-na-ab-si-ge* | ובעל הבית שינה, משכונן, כפליים מאשר בו שעורים ימלא לו | `אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ` (שמות כב:ח) | [equivalent] | The bailee who denies, once convicted, pays double – the Torah's `שְׁנַיִם` (= LH §120, §124). |
| UN c015–c020 | *lu₂ niĝ₂ na-me u₂-gu la-ba-an-de₂ a-ne niĝ₂-mu u₂-gu ba-an-de₂ bi₂-du₁₁ … lu₂-bi i₃-gaz* | אם איש מאומה לא אבד לו, והוא "רכושי אבד" אמר … האיש ההוא יהרג | `עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה` (שמות כב:ח) | [equivalent] / [divergence] | The false claim of loss (= LH §126, `"רכושי אבד" אמר` letter for letter); LH and the Torah: pay double; UN: death and confiscation by the ward. |
| MALB §17, r vi 13–14 | *dayyānē išaʾʾal ṭuppa ša dayyānē iṣabbat* | `את הדיינים ישאל, לוח של הדיינים יתפוש` | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | A property dispute brought before the court. |
| HL HL2 §102, 102.3 | *] GUN GIŠ DI-IN LUGAL-RI* | […] כיכרות עץ – דין המלך. | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [equivalent] | מקרה גניבה המובא לערכאה העליונה; בתורה בגלל ספק, כאן בגלל גודל הנזק |
| IN IN §17, 17.8 | *⸢nu DINGIR-LIM-ni pa-it⸣-te-ni ták-ku pár-ku-e[š-t]e-ni šu-me-el {D}KAL-KU-NU* | תלכו אֶל הָאֵל: אם תיטהרו – אֵל הַמָּגֵן שלכם! | `עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם` (שמות כב:ח) | [divergence] | גם בתורה ספק בעניין פיקדון מובא "אל האלוהים"; אך שם להכרעה, וכאן למבחן (אורדאל). הקבלה טיפולוגית |
| LH §246, 2855' | *šēpšu ištebir* | את רגלו שבר | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [cognate] | *šebēru* = `שבר`: the Torah's "broken" animal. |
| LH §249, 2877' | *ilum imḫassuma imtūt* | ואל מחצו, ומת | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | The Torah gives no cause; LH names "a god". |
| LH §263, 2978' | *ša innadnušum* | אשר ניתנו לו | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ חֲמוֹר אוֹ שׁוֹר אוֹ שֶׂה וְכָל בְּהֵמָה לִשְׁמֹר` (שמות כב:ט) | [cognate] | *nadānu* = `נתן`, the Torah's verb of entrusting. |
| LH §266, 3017' | *lipit ilim* | נגיעת אל | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [divergence] | The Torah does not ascribe the death to God. |
| LH §27, 639 | *turru* | `שָׁבוּי,` | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | `נִשְׁבָּה` של התורה (על בהמה) |
| LH §103, 1150' | *uštaddīšu* | `הִשִּׁיל ממנו,` | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | הרכוש שאבד בידי כוח שאין שליטה עליו |
| LH §45, 873 | idem | idem | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [divergence] | Force majeure with no one responsible; in LH the loss is allocated by contract (§45 vs §46). Our proposal. |
| LE §29, 98 | *ittašlal* | נשבה | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | *šalālu* N = `נשבה` (there of an animal). |
| UN c006–c011 | *u₂-gu ba-an-de₂ … ib₂-su-su-ne* | אבד … יחליפו | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [divergence] | The Torah exempts the keeper on oath for loss by force majeure; UN makes no such distinction here (but see e001–e002). |
| UN e001–e002 | *lu₂ sa-gaz e₂-a […] nu-ub-su-su* | גזלן בבית […] לא יחליף | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | Loss by armed robbery exempts the bailee (contrast b017–b020, burglary). Context broken. |
| HL HL1 §75, 428 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA ANŠE-in kuiški tūriezzi* | אם מישהו ירתום שור, סוס, פרד, חמור, | `כִּי יִתֵּן אִישׁ אֶל רֵעֵהוּ חֲמוֹר אוֹ שׁוֹר אוֹ שֶׂה וְכָל בְּהֵמָה לִשְׁמֹר; וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | `וְכִי יִשְׁאַל אִישׁ מֵעִם רֵעֵהוּ וְנִשְׁבַּר אוֹ מֵת; בְּעָלָיו אֵין עִמּוֹ שַׁלֵּם יְשַׁלֵּם` (שמות כב:יג) – מבנה דומה מאוד: בהמה שאינה של המשתמש מתה, נטרפה או אבדה – והוא משלם; ואם אין ראיה – שבועה |
| IN IN §17, 17.5 | *na-aš-*šu*-wa-ra-aš ⸢pár⸣-aš-ta na-aš-ma-wa-ra-an GU₄.NITA GUL-aḫ-ta* | או "נמלט", או "שור זכר מחץ אותו" – | `וּמֵת אוֹ נִשְׁבַּר אוֹ נִשְׁבָּה אֵין רֹאֶה` (שמות כב:ט) | [equivalent] | אותם תירוצים של שומר חינם: מת, נשבר, נלקח |
| EST 271–272 | *ahīkunu ina bētātišunu tubbalāni* | את זרועותיכם בבתיהם תשלחו | `אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:י) | [equivalent] | An oath in the `אִם` form not to "send the hand" against a neighbour's property. Our proposal. |
| LH §20, 564–565 | *nīš ilim izakkar* | את חיי האל יזכיר | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:י) | [equivalent] | The custodian from whom the slave / the animal escaped swears and is released. F13. |
| LH §20, 566 | *utaššar* | וישוחרר | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | The oath clears him of liability. |
| LH §244, 2844' | *ana bēlišuma* | לבעליו הוא | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | The owner bears the loss. |
| LH §249, 2880' | *nīš ilim izakkar* | את חיי האל יזכיר | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | The same institution: the keeper's oath by the god frees him. From memory. F13. |
| LH §249, 2882' | *ūtaššar* | וישוחרר | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | `נקי` kept out. |
| LH §266, 3019' | *ubbamma* | יזכך (את עצמו) | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] | Clearing before the god = the oath. `נקי` kept out. |
| LH §266, 3021' | *bēl tarbaṣim imaḫḫaršu* | בעל המרבץ יקבל ממנו | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | **The same ruling: the owner "accepts" (the loss / the dead animal)**; *maḫāru* `קיבל` vs the Torah's `לקח` (= *leqû*). From memory. |
| LH §9, 458 | *ileqqe* | `יקח,` | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | הבעלים "לוקח" את שלו |
| LH §227, 2704' | *itammāma* | `יישבע,` | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] | שבועת הפטור |
| LH §103, 1151' | *šamallûm nīš ilim* | `השוליה את חיי האל` | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ … וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | השבועה פוטרת את מי שהחזיק ברכוש הזולת כשהאבדה באה מכוח עליון. מן הזיכרון (ההקבלה מקובלת). |
| LE §37, 125 | *nīš ilim izakkar* | את חיי האל יזכיר | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:י) | [equivalent] |  |
| LE §37, 128 | *mimma elišu ul išu* | ודבר עליו אין לו | `וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | After the oath, no claim. |
| LE §22, 74 | *bēl amtim nīš ilim izakkar* | בעל האמה את חיי האל יזכיר | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] |  |
| MAL §5, o i 61 | *mā šumma ušāḫizūšini* | "אם הוריתיה | `אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ` (שמות כב:י) | [equivalent] | The exculpatory oath of the owner, in the same oath syntax (`אִם` = "(I swear) not"). |
| UN e009–e017 | *lugal saĝ-ŋa₂-ke₄ nam-erim₂ u₃-ku₅ saĝ ḫa-ba-an-tum₂-mu* | אדון העבד, משנשבע שבועה, את העבד יטול | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] | Ownership decided by oath. |
| HL HL1 §75, 434 | *IŠ-TU DINGIR-LIM=war=aš BA.ÚŠ* | "מן הָאֵל מת", | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם` (שמות כב:י) | [equivalent] |  |
| HL HL1 §75, 435 | *nu lingazi* | וְיִשָּׁבַע. | `שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם אִם לֹא שָׁלַח יָדוֹ בִּמְלֶאכֶת רֵעֵהוּ; וְלָקַח בְּעָלָיו וְלֹא יְשַׁלֵּם` (שמות כב:י) | [equivalent] | אותו פתרון בדיוק: שבועה במקום עד, והנשבע פטור |
| LH §125, 1422' | *bēl bītim ša īgū* | בעל הבית אשר התעצל | `וְאִם גָּנֹב יִגָּנֵב מֵעִמּוֹ יְשַׁלֵּם לִבְעָלָיו` (שמות כב:יא) | [divergence] | LH: liable for negligence even when his own goods were lost; Torah: the (paid) keeper pays for theft. From memory. |
| LH §125, 1426' | *ušallam* | ישלם | `יְשַׁלֵּם לִבְעָלָיו` (שמות כב:יא) | [cognate] | F8: *šullumu* = `שלם` – cognate in verb and context. |
| LH §263, 2979' | *uḫtalliq* | איבד | `וְאִם גָּנֹב יִגָּנֵב מֵעִמּוֹ יְשַׁלֵּם לִבְעָלָיו` (שמות כב:יא) | [equivalent] |  |
| LE §29, 99 | *naḫbutum ittaḫbat* | הגזל נגזל | `וְאִם גָּנֹב יִגָּנֵב מֵעִמּוֹ` (שמות כב:יא) | [equivalent] | Infinitive + finite verb of one root, in Akkadian (rare) as in Hebrew (our suggestion). |
| LE §36, 122 | *uḫtalliq … iriabšum* | איבד – … יחליף לו | `וְאִם גָּנֹב יִגָּנֵב מֵעִמּוֹ יְשַׁלֵּם לִבְעָלָיו` (שמות כב:יא) | [equivalent] | No break-in: the keeper pays (LE); stolen "from with him": he pays (Exodus). |
| LH §244, 2843' | *nēšum iddūkšu* | אריה הרגו | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [equivalent] | Same case and outcome; the Torah requires evidence, LH not (the oath comes in §249, §266). `טרף` kept out. |
| LH §266, 3018' | *nēšum iddūk rē'ûm maḫar ilim* | או אריה הרג, הרועה לפני האל | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [equivalent] | Same exemption; evidence there, an oath before the god here. `טרף` kept out. From memory. |
| UN d013–d015 | *lu₂ ur-maḫ-e šu mu-sur₅-sur₅* | אם איש – אריה שסעו | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד` (שמות כב:יב) | [equivalent] | The lion-mauled (here a man, healed: 5 shekels); `טרף` reserved. |
| HL HL1 §75, 430 | *našma=an UR.BAR.RA-aš karāpi* | או שזאב יטרוף אותו, | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד: הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [equivalent] | בתורה הטרפה פוטרת את השומר (אם הביא עד); בחוק החתי הטרפה מחייבת אותו (432), ורק מוות "מן האל" פוטר |
| HL HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `אִם טָרֹף יִטָּרֵף יְבִאֵהוּ עֵד: הַטְּרֵפָה לֹא יְשַׁלֵּם` (שמות כב:יב) | [divergence] | בתורה השומר מביא את שרידי הטרפה כראיה ופטור; כאן מי ש"השליך" את השה אל הזאב (הפקיר אותו) חולק עם הבעלים את מה שנשאר: לבעלים הבשר, לו העור |
| LH §246, 2855' | *ištebir* | שבר | `וְכִי יִשְׁאַל אִישׁ מֵעִם רֵעֵהוּ וְנִשְׁבַּר אוֹ מֵת` (שמות כב:יג) | [cognate] |  |
| LH §267, 3027' | *ušallamma* | ישלם | `שַׁלֵּם יְשַׁלֵּם` (שמות כב:יג) | [cognate] | *šullumu* = `שִׁלֵּם`, the only one in file 10, in the keeper's law as in Exod 22. |
| LI §36–§37, 420′–426′ | *si-bi ib₂-ta-an-ku₅ … kun-bi ib₂-ta-an-hul … igi-4-ĝal₂ sa₁₀-ma-kam i₃-la₂-e* | ואת קרנו קצץ … ואת זנבו פגם … רבע מחירו ישקול | `וְכִי יִשְׁאַל אִישׁ מֵעִם רֵעֵהוּ וְנִשְׁבַּר אוֹ מֵת; בְּעָלָיו אֵין עִמּוֹ שַׁלֵּם יְשַׁלֵּם` (שמות כב:יג) | [divergence] | The Torah knows only "broken or dead" and full payment; LI and LH grade by organ (horn, tail ¼ = LH §248 2869′–2873′ `רבע מחירו`). |
| HL HL2 §144, 144.1 | *[ták-ku {LÚ}ŠU.I {URUDU}zi-na-al-li a-ri]-iš-ša pa-a-[i]* | [אם גַּלָּב] ייתן [זִינַלִּי (של) נחושת לחבר]ו, | `וְכִי יִשְׁאַל אִישׁ מֵעִם רֵעֵהוּ וְנִשְׁבַּר אוֹ מֵת … שַׁלֵּם יְשַׁלֵּם` (שמות כב:יג) | [equivalent] | כלי שהושאל לחבר וניזק – השואל משלם; בחוק החתי בעין, כלים שלמים (144.2) |
| LH §121, 1377' | *idī našpakim* | דמי האסם | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | Hire/fee. |
| LH §244, 2841' | *alpam imēram īgurma* | שור (או) חמור שכר | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | The only Covenant-Code verse on a hired animal; *agāru* ~ Aramaic `אגר`, not `שׂכר`. |
| LH §239, 2812' | *šeššet kur še’am* | `שישה כור שעורים` | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השכיר ושכרו; בתורה אין תעריף |
| LH §45, 873 | *bitiqtum ša errēšimma* | ההפסד של האריס הוא | `אִם בְּעָלָיו עִמּוֹ לֹא יְשַׁלֵּם: אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | Who bears an accidental loss depends on what was paid (rent received in advance vs hire). Our proposal. |
| LI §34, 411′–413′ | *gu₄ in-hun sa-sal KU-a bi₂-in-sil₂ igi-3-ĝal₂ sa₁₀-ma-kam i₃-la₂-e* | שור שכר, ואת גיד פרסתו … חתך, שליש מחירו ישקול | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [divergence] | The hired animal: the Torah exempts the hirer; LI makes him pay a fraction of the price by body part. Cross-collection: LH §248 (2867′–2874′) `גיד פרסתו … רבע מחירו` (a quarter; LI a third). |
| UN b002–b007 | *gu₄ ab₂ ur₃-ra lu₂ in-ḫun … addir-bi* | שור ופרה לשידוד איש שכר … דמי שכירותם | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | The hired animal; UN fixes the rent (cf. LH §242–§243), the Torah the liability. |
| HL HL1 §42, 228 | *takku antuḫšan kuiški kuššaniyēzzi* | אם מישהו ישכור אדם, | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השכיר והאחריות לנזק בשעת השכירות |
| HL HL1 §76, 436 | *takku GU₄ ANŠE.KUR.RA ANŠE.GÌR.NUN.NA ANŠE kuiški appatariezzi* | אם מישהו יעכב שור, סוס, פרד, חמור, | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השכר על השימוש בבהמה |
| HL HL1 §78, 449 | *[takku GU₄-un kuišk]i kušaniezzi* | [אם מישהו] ישכור [שור], | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | השור השכור |
| HL HL2 §151, 151.1 | *[ták-ku GU₄.APIN.L]Á ku-iš-ki ku-uš-ša-ni-ez-zi A-NA ITU 1{KAM} 1 G[ÍN.GÍN KÙ.BABBAR pa-a-i]* | [אם] מישהו ישכור [שור חרישה] – לחודש אחד שקל אחד [כסף ייתן]; | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | הבהמה השכורה; בתורה – האחריות לנזק, כאן – דמי השכירות |
| LH §138, 1613' | *terḫatiša* | מהרה | `מָהֹר יִמְהָרֶנָּה לּוֹ לְאִשָּׁה` (שמות כב:טו) | [equivalent] | *terḫatu* ו`מֹהַר` – אותו מוסד, שורש אחר |
| LH §159, 1867' | *terḫatam iddinu* | מהר נתן, | `מָהֹר יִמְהָרֶנָּה לּוֹ לְאִשָּׁה` (שמות כב:טו) | [equivalent] | *terḫatu* = `מֹהַר`, אותו מוסד, שורש אחר. מן הזיכרון (פאול) |
| LH §166, 1983' | *kasap terḫatim* | כסף מהר | `מָהֹר יִמְהָרֶנָּה לּוֹ לְאִשָּׁה` (שמות כב:טו) | [equivalent] | המוהר כתשלום החתן |
| LE §17, 56 | *terḫatam* | מֹהַר | `מָהֹר יִמְהָרֶנָּה לּוֹ לְאִשָּׁה` (שמות כב:טו) | [equivalent] | *terḫatum* = `מֹהַר`. |
| MAL §38, r v 23–25 | *ana terḫete ša ublūni lā iqarrib ana sinnilte zakku* | אל המהר אשר הוביל לא יקרב; לאשה זכאי | `מָהֹר יִמְהָרֶנָּה לּוֹ לְאִשָּׁה` (שמות כב:טו) | [equivalent] | *terḫatu* = `מֹהַר`; the bride-price stays with the woman divorced before the transfer. |
| MAL §55, r viii 6 | (the same) | בתולה | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה אֲשֶׁר לֹא אֹרָשָׂה` (שמות כב:טו) | [cognate] |  |
| MAL §55, r viii 11–14 | *lā aḫzutūni u rugummânâ ana bēt abiša lā iršiūni* | לא נשואה, ותביעה על בית אביה לא היתה להם | `אֲשֶׁר לֹא אֹרָשָׂה` (שמות כב:טו) | [equivalent] | MAL's definition of the unbetrothed: "not married", no claim on her father's house (no bride-payment). |
| MAL §56, r viii 42–43 | *šumma batultu ramānša ana aʾīle tattidin* | אם הבתולה את עצמה לאיש נתנה | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה אֲשֶׁר לֹא אֹרָשָׂה וְשָׁכַב עִמָּהּ` (שמות כב:טו) | [equivalent] | The consensual case: Exod 22:15–16 corresponds to §56 more than to §55. Our proposal. |
| UN §6, 207 | *niĝ₂-a₂-ĝar-še₃ lu₂ in-ak* | בתרמית איש עשה (לה) | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה אֲשֶׁר לֹא אֹרָשָׂה` (שמות כב:טו) | [equivalent] | *niĝ₂-a₂-ĝar* "deception" is the semantic counterpart of `פִּתָּה`. |
| HL HL1 §28, 146 | *takku DUMU.MUNUS LÚ-ni taranza* | אם בת אמורה לאיש, | `וְכִי יְפַתֶּה אִישׁ בְּתוּלָה אֲשֶׁר לֹא אֹרָשָׂה` (שמות כב:טו) | [equivalent] | התורה מדברת בבתולה *שלא* אורשה, החוק החתי בבת *שכבר* "נאמרה" לאיש |
| LH §24, 603 | *išaqqalū* | ישקלו | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [cognate] | F6. |
| LH §156, 1839'–1840' | *1/2 mana kaspam išaqqalšim* | חצי מנה כסף ישקול לה | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [cognate] / [divergence] | *šaqālu* = `שקל`; there to the father, here to the girl. |
| LH §159, 1876' | *itabbal* | יטול. | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [divergence] | גם שם הכסף נשאר בידי האב בלי נישואים, אבל שם האב הוא שסירב |
| LH §160, 1884' | *mārtī ul anaddikkum* | "את בתי לא אתן לך" | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [cognate] | האב שאינו נותן את בתו, ובאותו פועל (*nadānu* = `נתן`) |
| LH §166, 1983' | *kasap terḫatim* | כסף מהר | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [equivalent] | המוהר כסכום כסף |
| LE §25, 84–86 | *abi mārtim terḫat imḫuru tašna utâr* | אבי הבת את המהר אשר קיבל כפליים ישיב | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [divergence] | The refusing father: Exodus the seducer pays the father; LE the father who gave the girl to another returns the bride-price twofold. Cross-collection: LH §160–161 (1877'–1907'). |
| MAL §30, o iv 32 | *mārassu ana tadāne lā imaggur* | את בתו לתת לא ירצה | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [equivalent] | The father who refuses to give his daughter. |
| MAL §55, r viii 34 | *šaššāte ṣarpa šīm batulte* | פי שלושה כסף – מחיר הבתולה | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [equivalent] | "The price of a virgin" (*šīmu*) vs "the bride-payment of virgins" (`מֹהַר`); MAL triples it. |
| MAL §55, r viii 38–41 | *šumma abu lā ḫadi … imaḫḫar mārassu ana ša ḫadiūni iddan* | אם האב לא חָפֵץ … יקבל, את בתו לאשר חָפֵץ יתן | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [equivalent] | The father's veto with payment anyway: MAL (rape) = Exodus (seduction); Deut 22:29 has no veto. |
| LI §33, 408′ | *i₃-la₂-e* | ישקול | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [equivalent] | "He shall weigh silver" in a law on a girl's virginity. |
| UN §8, 227–228 | *5 gin₂ ku₃-babbar i₃-la₂-e* | חמישה שקלי כסף ישקול | `כֶּסֶף יִשְׁקֹל כְּמֹהַר הַבְּתוּלֹת` (שמות כב:טז) | [equivalent] | "Weigh silver" for the deflowered girl. |
| HL HL1 §28, 152 | *takkuw=an attaš annašš=a tamēdani LÚ-ni pianz[i]* | אם האב וְהָאֵם לאיש אחר ייתנו אותה, | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [divergence] | בתורה האב לבדו מחליט; בחוק החתי *האב והאם* יחד נותנים, מפצים, ממאנים |
| HL HL1 §28, 154 | *takku attašš=a annaš mimmai* | אם האב וְהָאֵם ימאנו, | `אִם מָאֵן יְמָאֵן אָבִיהָ לְתִתָּהּ לוֹ` (שמות כב:טז) | [equivalent] | אותו פועל, "למאן", ואותו מצב: ההורים מסרבים לתת את הבת למי שכבר "לקח" אותה |
| LH §2, 312 | *kišpī* | כשפים | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [cognate] | LH judges the *accusation* of sorcery; the Torah the sorceress. |
| MAL §47, r vii 1–6 | *šumma lū aʾīlu lū sinniltu kišpē uppišūma … muppišāna ša kišpē idukkū* | אם, בין איש בין אשה, כשפים עשו … את עושה הכשפים יהרגו | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [cognate] | *kišpū* = `כשפים`; death in both; Exodus names the woman, MAL "a man or a woman", after proof. |
| UN §13, 253–263 | *nam-uš₇?-zu lu₂ lu₂-ra in-da-ab-la₂ … {d}id₂ … zalag … 3 gin₂* | בכשפים? איש את איש האשים … והנהר זיככו … שלושה שקלי כסף ישקול | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [divergence] | Sorcery accusation decided by the River ordeal (= LH §2); the false accuser pays 3 shekels (LH: is killed). |
| HL HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [equivalent] | הכישוף כעבירה בחוק |
| HL HL1 §44b, 249 | *alwanzatar* | כשפים (הם), | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [equivalent] | *alwanzatar* = `כשפים` (המילה המקראית היא קרובה של האכדית *kišpū*, לא של החתית |
| HL PT § XXXIV, 142 | *t=an EGIR-pa parkunuzi* | ואותו בחזרה יטהר, | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [divergence] | בתורה הכישוף הוא פשע מוות; בנוסח התקן החתי – "דין המלך"; בנוסח המאוחר, במה שנשתמר, הנזק מתוקן בטיהור ובפיצוי |
| HL HL2 §111, 111.1 | *[ták-ku še-e]-ni pu-ru-ut k[u-iš-ki e-pa-a-ri al-wa-an-za-tar DI-IN LUGAL]* | [אם] מישהו [יתפוס] חומר [לפסלון – כשפים (הם), דין המלך]. | `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) | [divergence] | בתורה חטא מוות; בחוק החתי "דין המלך". הנוסח הקדום לבדו שומר "לפסלון" |
| HL HL2 §187, 187.1 | *ták-ku LÚ-iš GU₄-aš kat-ta [wa-aš-t]a-i ḫu-u-ur-ki-il a-ki-aš* | אם איש עם שור [יחטא] – תועבה: ימות. | `כָּל שֹׁכֵב עִם בְּהֵמָה מוֹת יוּמָת` (שמות כב:יח) | [equivalent] | מוות על המשכב עם בהמה |
| HL HL2 §200a, 200a.1 | *ták-ku LÚ-aš ANŠE.KUR.RA-i na-aš-ma ANŠE.GÌR.NUN.NA kat-ta* | אם איש עם סוס או פרד | `כָּל שֹׁכֵב עִם בְּהֵמָה מוֹת יוּמָת` (שמות כב:יח) | [divergence] | בתורה כל בהמה; בחוק החתי סוס ופרד – "אין עברה", ושור, שה, חזיר וכלב – מוות |
| LH §172, 2105' | *usaḫḫamuši* | ידחקו בה, | `וְגֵר לֹא תוֹנֶה וְלֹא תִלְחָצֶנּוּ` (שמות כב:כ) | [equivalent] | הפועל `לחץ`, שנמנענו ממנו |
| UN prol. 122 | *uri lu₂-gir₅-ra* | האכדי והזר | `וְגֵר לֹא תוֹנֶה וְלֹא תִלְחָצֶנּוּ` (שמות כב:כ) | [equivalent] | The stranger among those freed from exploitation (117–124), next to the orphan and widow (162–171), as `גֵּר` with `יָתוֹם וְאַלְמָנָה` in the Torah; *gir₅* "stranger", not a resident alien: `גר` kept out. |
| LH prol. 37–39 | idem | idem | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [divergence] | In the Torah a command to all; here the king's task. |
| LH epil. 3204'–3205' | *ekūtam almattam šutēšurim* | יתומה ואלמנה ליישר | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [equivalent] | *almattu* = `אלמנה` [cognate]; a prohibition to all vs. the king's task. From memory (Fensham 1962). |
| LH §172, 2105' | *usaḫḫamuši* | ידחקו בה, | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [equivalent] | הגנת האלמנה מפני עושק; כאן העושקים הם בניה |
| LH §177, 2201' | *šumma almattum* | אם אלמנה | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [cognate] | אותה מילה (*almattu* = `אַלְמָנָה`), ובשני הקובצים האלמנה והיתומים יחד: כאן "בני האלמנה" (2234'). בתורה איסור כללי (ועונש מן השמים, כב:כב–כג); כאן סדר מעשי – פיקוח הדיינים, מצאי, ואיסור מכירה |
| MAL §46, r vi 95 | *mārū mutiša ušakkulūši* | בני בעלה יאכילוה | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [equivalent] | The widow's support: a family duty in MAL, a public command in the Torah. |
| UN prol. 162–165 | *nu-siki lu₂ niĝ₂-tuku-ra ba-ra-na-an-ĝar nu-mu-un-su lu₂ a₂-tuku-ra ba-ra-na-an-ĝar* | את היתום לעשיר לא שמתי, את האלמנה לבעל הכוח לא שמתי | `כָּל אַלְמָנָה וְיָתוֹם לֹא תְעַנּוּן` (שמות כב:כא) | [equivalent] | **The orphan and the widow as a pair, 1,000 years before the Covenant Code**; UN: the king's claim, the Torah: a commandment to the people, enforced by God (22:22–23). |
| LH epil. 3240' | *awīlum ḫablum* | איש חבול | `כִּי אִם צָעֹק יִצְעַק אֵלַי שָׁמֹעַ אֶשְׁמַע צַעֲקָתוֹ` (שמות כב:כב) | [divergence] | The oppressed cries to God; here he goes to the king's statue. From memory. |
| LI prol. 27–28 | *i-{d}utu ka-ta ḫa-lam-e-de₃* | את "הוי אותו!" מן הפה לאבד | `אִם עַנֵּה תְעַנֶּה אֹתוֹ כִּי אִם צָעֹק יִצְעַק אֵלַי שָׁמֹעַ אֶשְׁמַע צַעֲקָתוֹ` (שמות כב:כב) | [equivalent] | The cry of the wronged to the god of justice; the king removes its cause. |
| UN prol. 177–179 | *niĝ₂-erim₂ niĝ₂-a₂-zi i-{d}utu u₂-gu ḫe₂-ni-de₂* | רשע, חבלה ו"הוי אותו!" איבדתי | `אִם עַנֵּה תְעַנֶּה אֹתוֹ כִּי אִם צָעֹק יִצְעַק אֵלַי שָׁמֹעַ אֶשְׁמַע צַעֲקָתוֹ` (שמות כב:כב) | [equivalent] | The cry of the oppressed to the god of justice (Utu) – the Covenant Code's cry of orphan and widow to God, right after 22:21 (cf. 162–165). The king removes the cry by removing its cause. Cross-collection: LI 27–29, 436′–438′. |
| LH §102, 1139' | *kaspam ana tadmiqtim* | `כסף לחסד` | `אִם כֶּסֶף תַּלְוֶה אֶת עַמִּי … לֹא תְשִׂימוּן עָלָיו נֶשֶׁךְ` (שמות כב:כד) | [equivalent] | *tadmiqtu* "חסד" = הלוואה בלי תוספת; ב־LH חסד אפשרי בין סוחרים, בתורה מצווה כלפי העני. הצעה שלנו |
| LH §48, 915 | *ṣibtam* | התוספת | `לֹא תְשִׂימוּן עָלָיו נֶשֶׁךְ` (שמות כב:כד) | [equivalent] | Interest allowed in LH, waived only in a disaster year; forbidden from the poor in the Torah. From memory. |
| LH §100, 1123' | *ṣibāt kaspim* | תוספת הכסף | `לֹא תְשִׂימוּן עָלָיו נֶשֶׁךְ` (שמות כב:כד) | [divergence] | Interest as a normal part of a commercial loan (merchant and agent). From memory. |
| LE §18a, 62–63 | *ṣibtam uṣṣab* | תוספת יעלה | `לֹא תְשִׂימוּן עָלָיו נֶשֶׁךְ` (שמות כב:כד) | [divergence] | LE fixes the rate (20% silver, 33⅓% barley); the Torah forbids interest from a brother. |
| UN d031–d033 | *munus lu₂-kurun … 1 piḫu₄ lu₂-ra šu-la₂-a-še₃ in-na-an-šum₂ … 5(ban₂) še* | אם אשה, מוכרת השכר … כד אחד לאיש באמון נתנה … חמש סאים שעורים | `לֹא תִהְיֶה לוֹ כְּנֹשֶׁה` (שמות כב:כד) | [divergence] | Credit with a fixed return (= LH §111 nearly verbatim). |
| LH §241, 2831' | *ittepe* | משכן | `אִם חָבֹל תַּחְבֹּל שַׂלְמַת רֵעֶךָ` (שמות כב:כה) | [equivalent] | *nepû*, not *ḫabālu*; Hebrew `חבל` "take a pledge" is the cognate of *ḫubullu* "debt" (renderings §2). |
| LH §114, 1291' | *nipûssu ittepe* | `ואת מַשְׁכּוֹנוֹ מִשְׁכֵּן,` | `אִם חָבֹל תַּחְבֹּל שַׂלְמַת רֵעֶךָ עַד בֹּא הַשֶּׁמֶשׁ תְּשִׁיבֶנּוּ לוֹ` (שמות כב:כה) | [equivalent] | בתורה המשכון הוא חפץ, וההגבלות הן על חפצי חיים; ב־LH המשכון הוא אדם |
| IN IN §15, 15.7 | *uš-kán-zi ma-a-an-[na-a]t iš-ta-an-ta-nu-uš-ket₉-te-ni* | יהיו רואים! ואם תאחרו אותו, | `מְלֵאָתְךָ וְדִמְעֲךָ לֹא תְאַחֵר` (שמות כב:כח) | [equivalent] | אותה מצווה: לא לאחר את מתנת האל מן התבואה. הקבלה טיפולוגית |
| IN IN §18, 18.7 | *na-a-ú-i e-ez-za-az-⸢zi⸣ na-at DINGIR{MEŠ}-aš ḫu-u-da-a-ak ú-da-at-tén* | טרם יאכל – לָאֵלִים מיד הביאו אותו! | `כֵּן תַּעֲשֶׂה לְשֹׁרְךָ לְצֹאנֶךָ` (שמות כב:כט) | [equivalent] | הוולדות הראשונים של הבהמה, אחרי `בְּכוֹר בָּנֶיךָ תִּתֶּן לִי` (שמות כב:כח; ראו 15.7). `בכור` שמור לתורה; *ḫuelpi* "הטרי, הצעיר" (גם בעלי חיים: העגל, הטלה, הגדי של 18.3). ההקבלה טיפולוגית |
| HL HL1 §87, 485 | *takku UR.GI₇ {LÚ}SIPA-aš kuiški walaḫzi* | אם מישהו ימחץ כלב של רועה, | `וּבָשָׂר בַּשָּׂדֶה טְרֵפָה לֹא תֹאכֵלוּ לַכֶּלֶב תַּשְׁלִכוּן אֹתוֹ` (שמות כב:ל) | [absent] |  |

### Exodus 23

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LI §17, 214′–215′ | *a₂ nu-ĝar-ra-ta inim nu-zu-ni* | *בלי יסוד* בדבר אשר לא ידע | `לֹא תִשָּׂא שֵׁמַע שָׁוְא; אַל תָּשֶׁת יָדְךָ עִם רָשָׁע לִהְיֹת עֵד חָמָס` (שמות כג:א) | [equivalent] | An unfounded accusation "of a matter he did not know"; the Sumerian phrase 214′ is uncertain. |
| HL HL1 §71, 406 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA-an kuiški wemiyazi* | אם מישהו ימצא שור, סוס, פרד, | `כִּי תִפְגַּע שׁוֹר אֹיִבְךָ אוֹ חֲמֹרוֹ תֹּעֶה: הָשֵׁב תְּשִׁיבֶנּוּ לוֹ` (שמות כג:ד) | [equivalent] | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ וַהֲשֵׁבֹתוֹ לוֹ` (דברים כב:ב) – גם בתורה המוצא מחזיק בבהמה עד שבעליה דורש אותה |
| LH §5, 359 | idem | idem | `לֹא תַטֶּה מִשְׁפַּט אֶבְיֹנְךָ בְּרִיבוֹ` (שמות כג:ו) | [divergence] | Also Exod 23:7–8 (bribery). |
| LH §34, 748 | *ana dannim ištarak* | `לֶחָזָק מסר,` | `לֹא תַטֶּה מִשְׁפַּט אֶבְיֹנְךָ בְּרִיבוֹ` (שמות כג:ו) | [equivalent] | הטיית הדין לטובת החזק |
| LH §43, 834 | *ittadi* | והזניח | `וְהַשְּׁבִיעִת תִּשְׁמְטֶנָּה וּנְטַשְׁתָּהּ` (שמות כג:יא) | [divergence] | The fallow field: a tenant's wrong, compensated (LH) vs a commanded rest (Torah); `שמט`/`נטש` kept out. Our proposal. |
| LH epil. 3255'–3256' | *libbašu linappiš* | את לבו ינפש | `וְיִנָּפֵשׁ בֶּן אֲמָתְךָ וְהַגֵּר` (שמות כג:יב) | [cognate] | *napāšu* = `נפש`, in the Covenant Code of the slave's son and the stranger. Our proposal. |
| IN IN §4, 4.1 | *[an-da-m]a EZEN₄ ITU{KAM} EZEN₄ MU-ti EZEN₄ a-ia-li [EZE]N₄ zé-n[a-an-d]a-aš* | [ונוסף על כך]: חג החודש, חג השנה, חג הָאַיָּלִי(?), [חג] הסת[יו], | `שָׁלֹשׁ רְגָלִים תָּחֹג לִי בַּשָּׁנָה` (שמות כג:יד) | [divergence] | לוח המועדים של התורה מונה שלושה רגלים ומועדים מעטים, ואילו הרשימה החתית מונה עשרים חגים ויותר – והיא אינה אלא "דוגמה" ("או כל חג שהוא", 4.7) |
| LH §49, 921 | *eqel epšētim* | שדה עשוי | `בְּאָסְפְּךָ אֶת מַעֲשֶׂיךָ מִן הַשָּׂדֶה` (שמות כג:טז) | [equivalent] | *epšētu* "the works (of a field)"; also 1007. Our proposal. |
| LH §56, 1007 | *epšētim ša eqel itēšu* | את מעשי שדה שכנו | `וְחַג הַקָּצִיר בִּכּוּרֵי מַעֲשֶׂיךָ אֲשֶׁר תִּזְרַע בַּשָּׂדֶה` (שמות כג:טז) | [equivalent] | Our proposal. |
| UN prol. 155 | *nesaĝ* | ראשית | `רֵאשִׁית בִּכּוּרֵי אַדְמָתְךָ תָּבִיא בֵּית יְהוָה אֱלֹהֶיךָ` (שמות כג:יט) | [equivalent] | First-fruit offerings on the river banks. |
| IN IN §15, 15.3 | *[n]a-aš-m[a ku-it im-ma] ku-it ḫu-u-el-pí šu-ma-a-aš {LÚ.MEŠ}APIN.LÁ ⸢DINGIR{MEŠ}-aš⸣ [ ]* | או [כל מה] שהוא – הטרי אשר אתם, האִכָּרִים, לָאֵלִים […] | `רֵאשִׁית בִּכּוּרֵי אַדְמָתְךָ תָּבִיא בֵּית יְהוָה אֱלֹהֶיךָ` (שמות כג:יט) | [equivalent] | הבאת הראשון שבתבואה לבית האל. `ביכורים` ו`ראשית` שמורים לתורה (H3): *ḫuelpi* הוא "הטרי, הצעיר" (גם של בעלי חיים, 18.16), לא מונח של "ראשית"; S&B תרגמו "first-fruits". ההבדל הלשוני הוא חלק מן הממצא; ההקבלה טיפולוגית |
| LH epil. 3605' | idem | idem | `וַהֲסִרֹתִי מַחֲלָה מִקִּרְבֶּךָ` (שמות כג:כה) | [divergence] | The Covenant Code's promise, reversed. |
| LH epil. 3594'–3599' | Nintu's curse |  | `לֹא תִהְיֶה מְשַׁכֵּלָה וַעֲקָרָה בְּאַרְצֶךָ` (שמות כג:כו) | [divergence] | The closing promise of the Covenant Code, reversed. |
| UN epil. g017 | *nam-ki-sikil iri-na u₃ nu-tu-da ḫe₂-me-eš* | צעירות עירו לא־יולדות תהיינה | `לֹא תִהְיֶה מְשַׁכֵּלָה וַעֲקָרָה בְּאַרְצֶךָ` (שמות כג:כו) | [equivalent] / [divergence] | Barrenness: a curse here, its absence a blessing in Exodus. |

### Exodus 24

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3218', 3221' | *narû … ukīn* | מצבתי … כוננתי | `וַיִּכְתֹּב מֹשֶׁה אֵת כָּל דִּבְרֵי יְהוָה … וּשְׁתֵּים עֶשְׂרֵה מַצֵּבָה` (שמות כד:ד) | [equivalent] | Writing + stelae at the covenant ceremony. |
| EST 498 | *sīhu bārtu neppašūni* | מרד וקשר נעשה | `כֹּל אֲשֶׁר דִּבֶּר יְהוָה נַעֲשֶׂה וְנִשְׁמָע` (שמות כד:ז) | [equivalent] | `נעשה` (498) and `נשמע` (505) are the direct Hebrew of *neppaš*, *nišammu*: a translation-level identity; the formal match (the people's vow at the covenant ceremony) is real. Our proposal. |
| LH epil. 3246'–3248' | *narî šaṭram lištassi* | את מצבתי הכתובה יקרא | `וַיִּקַּח סֵפֶר הַבְּרִית וַיִּקְרָא בְּאָזְנֵי הָעָם` (שמות כד:ז) | [equivalent] | *šasû* "read aloud" = `קרא` (open decision 1). From memory. |
| LH epil. 3251' | idem | idem | `וַיֹּאמְרוּ כֹּל אֲשֶׁר דִּבֶּר יְהוָה נַעֲשֶׂה וְנִשְׁמָע` (שמות כד:ז) | [cognate] |  |
| LH epil. 3241' | *awatam* | דבר | `מִי בַעַל דְּבָרִים יִגַּשׁ אֲלֵהֶם` (שמות כד:יד) | [equivalent] | `דבר` = lawsuit. |
| MALB §6, o iii 14 | *dabābšunu* | `והדיבור (עליהם)` | `מִי בַעַל דְּבָרִים יִגַּשׁ אֲלֵהֶם` (שמות כד:יד) | [equivalent] | "Speaking" = litigation. |

### Exodus 28

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §274, 3070' | *purkullim* | חרש אבן | `מַעֲשֵׂה חָרַשׁ אֶבֶן פִּתּוּחֵי חֹתָם` (שמות כח:יא) | [equivalent] | The seal-cutter. |

### Exodus 30

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| IN IN §14, 14.29 | *[nu-uš-ma-ša-a]t SAG.DU-aš ÚŠ-tar 2-uš-ša-at ak-kán-d[u]* | וזה [להם] מות־ראש! וגם שניהם ימותו! | `וְלֹא יָמֻתוּ` (שמות ל:כ) | [equivalent] | ראו 14.17: הכוהן הניגש לעבודה בלי רחיצה חייב מיתה גם בתורה. הקבלה טיפולוגית |

### Exodus 31

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH prol. 49 | idem | idem | `רְאֵה קָרָאתִי בְשֵׁם בְּצַלְאֵל` (שמות לא:ב) | [equivalent] |  |
| EST 1 | *adê* | האמנה | `שְׁנֵי לֻחֹת הָעֵדֻת` (שמות לא:יח) | [cognate?] | *adê* ~ `עֵדֻת`: debated etymology. |

### Exodus 32

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 411 | same | same | `וַיַּשְׁלֵךְ מִיָּדָו אֶת הַלֻּחֹת וַיְשַׁבֵּר אֹתָם תַּחַת הָהָר` (שמות לב:יט) | [equivalent] | The covenant tablets thrown down and broken. |
| EST 410–412 | fire, water, dust | לגירה … למים … בעפר | `וַיִּשְׂרֹף בָּאֵשׁ וַיִּטְחַן עַד אֲשֶׁר דָּק; וַיִּזֶר עַל פְּנֵי הַמַּיִם` (שמות לב:כ) | [equivalent] | The same triad of destruction (the calf). Our proposal. |
| EST 660 | *Nabu nāši ṭuppi šīmāti ilāni* | נבו, נושא לוח הגורלות של האלים | `מְחֵנִי נָא מִסִּפְרְךָ אֲשֶׁר כָּתָבְתָּ` (שמות לב:לב) | [equivalent] | The divine tablet/book from which the sinner's name is erased (also 32:33; Ps 69:29). From memory (Paul 1973). |
| EST 397 | *ša … ennû* "whoever …" | אשר … ימיר | `מִי אֲשֶׁר חָטָא לִי אֶמְחֶנּוּ מִסִּפְרִי` (שמות לב:לג) | [equivalent] | "Whoever" + a written document. Weak; our proposal. |

### Exodus 35

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §188, 2424' | *šipir qātišu* | ואת מלאכת ידו | `וּלְהוֹרֹת נָתַן בְּלִבּוֹ הוּא וְאָהֳלִיאָב בֶּן אֲחִיסָמָךְ` (שמות לה:לד) | [equivalent] | בצלאל ואהליאב מלמדים אחרים את מלאכתם |

### Exodus 38

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §178, 2240' | *šumma ugbabtum nadītum* | אם אוגבבתו, נדיתו | `הַצֹּבְאֹת אֲשֶׁר צָבְאוּ פֶּתַח אֹהֶל מוֹעֵד` (שמות לח:ח) | [divergence] | נשים בשירות המקדש, בלי מעמד משפטי מוגדר |

### Leviticus

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 296 | *maḫru* | רצוי | `לִרְצֹנוֹ לִפְנֵי יְהוָה` (ויקרא א:ג) | [equivalent] |  |
| EST 636C | same | same | `אָבִיב קָלוּי בָּאֵשׁ` (ויקרא ב:יד) | [cognate] | The verb of roasting. |
| LH §4, 349–351 | *aran dīnim šuāti ittanašši* | את עון הדין ההוא ישא | `וְהוּא עֵד אוֹ רָאָה אוֹ יָדָע אִם לוֹא יַגִּיד וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | F37; *arnu* ~ `עון`, *našû* = `נשא` [cognate]. Both concern a witness. From memory. |
| LH §9, 430 | *šībī mūdê* | `"עדים יודעים` | `וְהוּא עֵד אוֹ רָאָה אוֹ יָדָע` (ויקרא ה:א) | [equivalent] | העד כמי ש"יודע" |
| LH §9, 451 | *mūdūssunu* | `את ידיעתם` | `וְהוּא עֵד אוֹ רָאָה אוֹ יָדָע` (ויקרא ה:א) | [equivalent] |  |
| LH §13, 504 | *aran dīnim šuāti* | `את עון הדין ההוא` | `אִם לוֹא יַגִּיד וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | אותו צירוף, ובאותו הקשר: העד |
| LH §168, 2021' | *lā ublam* | לא נשא, | `וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | "נשא עוון", באכדית בפועל *wabālu*, לא בקרוב *našû* |
| MAL §2, o i 20 | *aranša tanašši* | את עונה תשא | `וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | The general formula of personal liability (LH F37). |
| LI §17, 220′ | *nam-tag … il₂* | את עונו ישא | `וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | *nam-tag* = Akk. *arnu* = `עון`, *il₂* = *našû* = `נשא` (LH F37): the same idiom in Sumerian, Akkadian and Hebrew. |
| UN §28, 410–415 | *nam-erim₂-ta im-ma-ra-a-gur, niĝ₂ di-ba en-na ĝal₂-la ib₂-su-su* | ומן השבועה שב, את דבר הדין ההוא, כל אשר יש, יחליף | `וְהוּא עֵד אוֹ רָאָה אוֹ יָדָע; אִם לוֹא יַגִּיד וְנָשָׂא עֲוֹנוֹ` (ויקרא ה:א) | [equivalent] | The witness who refuses the oath; UN makes him liable for the whole claim. |
| EST 386 | same | same | `נֶפֶשׁ כִּי תִשָּׁבַע לְבַטֵּא בִשְׂפָתַיִם` (ויקרא ה:ד) | [equivalent] | An oath "uttered with the lips". |
| LH §120, 1364' | idem | idem | `וְכִחֵשׁ בַּעֲמִיתוֹ בְּפִקָּדוֹן אוֹ בִתְשׂוּמֶת יָד` (ויקרא ה:כא) | [equivalent] | Denying a deposit; the Torah's verb is `כחש`. From memory. |
| LH §122, 1383' | idem | idem | `וְכִחֵשׁ בַּעֲמִיתוֹ בְּפִקָּדוֹן` (ויקרא ה:כא) | [equivalent] | `פקדון` kept out. |
| LH §265, 3006' | *usarrirma* | שיקר | `וְכִחֵשׁ בַּעֲמִיתוֹ בְּפִקָּדוֹן אוֹ בִתְשׂוּמֶת יָד` (ויקרא ה:כא) | [equivalent] | Fraud by a keeper. |
| LH §106, 1181' | *ittakir* | `התנכר,` | `וְכִחֵשׁ בַּעֲמִיתוֹ בְּפִקָּדוֹן אוֹ בִתְשׂוּמֶת יָד` (ויקרא ה:כא) | [equivalent] | הכחשת פיקדון והלוואה; התורה אומרת `כחש`, LH את בן־השורש של `נכר`. מן הזיכרון. |
| LH §112, 1248' | *u bīš qātišu* | `ומטלטלי ידו` | `וְכִחֵשׁ בַּעֲמִיתוֹ בְּפִקָּדוֹן אוֹ בִתְשׂוּמֶת יָד` (ויקרא ה:כא) | [equivalent] | רכוש "של יד" שנמסר לאחר. הצעה שלנו. |
| UN §2, 185 | *sa-gaz-še₃ in-ak in-gaz-e* | גזלה עשה – יהרג | `אוֹ בְגָזֵל אוֹ עָשַׁק אֶת עֲמִיתוֹ` (ויקרא ה:כא) | [divergence] | Robbery is capital in UN (and LH §22); in the Torah restitution + a fifth. |
| LH §126, 1438' | idem | idem | `אוֹ מָצָא אֲבֵדָה וְכִחֶשׁ בָּהּ וְנִשְׁבַּע עַל שָׁקֶר` (ויקרא ה:כב) | [equivalent] | A false statement about a lost object. |
| LH §22, 576–577 | *ḫubtam iḫbut* | גזלה גזל | `וְהֵשִׁיב אֶת הַגְּזֵלָה אֲשֶׁר גָּזָל` (ויקרא ה:כג) | [equivalent] | The same internal-object construction. |
| LH §253, 2914' | *liātim ipqissum* | ואת הבקר הפקיד בידו | `הַפִּקָּדוֹן אֲשֶׁר הָפְקַד אִתּוֹ` (ויקרא ה:כג) | [cognate] | *paqādu* = `הפקיד`. |
| LH §9, 458 | *ileqqe* | `יקח,` | `אוֹ אֶת הָאֲבֵדָה אֲשֶׁר מָצָא` (ויקרא ה:כג) | [equivalent] |  |
| LH §22, 580 | *iddâk* | יהרג | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [divergence] | Restitution + a fifth vs. death. From memory. |
| LH §124, 1412' | idem | idem | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [divergence] | The confessed denier: principal + a fifth. |
| LH §12, 493 | *adi hamšīšu* | `עד פי חמישה` | `וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [divergence] | בתורה המכחיש פיקדון או אבדה מוסיף חומש, כאן הקונה מקבל פי חמישה. הצעה שלנו |
| LH §102, 1144' | *qaqqad kaspim* | `את ראש הכסף` | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [equivalent] | "ראש" = הקרן, באותו דימוי בשתי השפות (*qaqqadu* אינו בן־שורש של `ראש`) |
| LH §107, 1206' | *adi šiššīšu* | `עד פי שישה` | `אוֹ מִכֹּל אֲשֶׁר יִשָּׁבַע עָלָיו לַשֶּׁקֶר וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [equivalent] | המכחיש בשקר |
| MAL §30, o iv 38 | *qaqqadamma ilaqqe* | את הראש יקח | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ` (ויקרא ה:כד) | [equivalent] | "Head" = the capital. |
| HL PT § XXXV, 158 | *3-ŠU šarnikzi* | פי שלושה יפצה. | `וְשִׁלַּם אֹתוֹ בְּרֹאשׁוֹ וַחֲמִשִׁתָיו יֹסֵף עָלָיו` (ויקרא ה:כד) | [divergence] | המוצא אבדה ומכחש (`אוֹ מָצָא אֲבֵדָה וְכִחֶשׁ בָּהּ`, ויקרא ה:כב) מחזיר את הקרן ועוד חומש, ומביא אשם; בנוסח החתי המאוחר מי שלא העיד עדים נחשב גנב ומשלם פי שלושה |
| IN IN §13, 13.3 | *ma-aḫ-ḫa-⸢an-ma⸣ GE₆-⸢an⸣-za ki-i-ša na-aš-ta pa-aḫ-ḫur ku-it A-NA GUNNI* | ואילו כאשר ייעשה לילה, את האש אשר באח | `אֵשׁ תָּמִיד תּוּקַד עַל הַמִּזְבֵּחַ לֹא תִכְבֶּה` (ויקרא ו:ו) | [divergence] | בתורה האש על המזבח אסור שתכבה; בבית האל החתי יש לכבות את האש בכל לילה, מחשש שריפה. אותו מוקד (אש בבית האל), ושני היגיונות הפוכים: אש קודש נצחית מול בטיחות. ההקבלה טיפולוגית |
| IN IN §6, 6.2 | *NINDA.GUR₄.RA DINGIR-LIM-za-kán NINDA.SIG le-e ku-iš-ki da-a-li-ia-zi* | את הלחם העבה של הָאֵל, את הלחם הדק – אף אחד אַל יניח לעצמו! | `לֹא יַנִּיחַ מִמֶּנּוּ עַד בֹּקֶר` (ויקרא ז:טו) | [divergence] | בתורה אסור "להניח" (להותיר) מבשר הזבח; כאן אסור "להניח לעצמו" – לשמור בצד – מלחם האל. אותו פועל, ענייה אחרת: שם הזמן, כאן הבעלות |
| IN IN §12, 12.3 | *{É}⸢ka-ri-im-me ku-iš-ki⸣ ni-ik-zi na-aš-kán ma-a-an ŠÀ É DINGIR-LIM* | בבית־הַקָּרִימִּי – מישהו ישתכר; והוא, אם בתוך בית הָאֵל | `יַיִן וְשֵׁכָר אַל תֵּשְׁתְּ אַתָּה וּבָנֶיךָ אִתָּךְ בְּבֹאֲכֶם אֶל אֹהֶל מוֹעֵד` (ויקרא י:ט) | [divergence] | התורה אוסרת את השתייה עצמה על הכוהן בעבודתו; ההוראה החתית מניחה שבחג שותים, ואוסרת רק את ההשתוללות. ההקבלות טיפולוגיות |
| LH §8, 404 | *lu alpam lu immeram lu imēram lu šahâm* | `בין שור בין כבש בין חמור בין חזיר` | `וְאֶת הַחֲזִיר … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | [absent] | ב־LH החזיר הוא רכוש רגיל ברשימה, ובתורה הוא נעדר מחוקי הגניבה |
| HL HL1 §81, 461 | *takku ŠAḪ NIGA kuiški tāyezzi* | אם מישהו יגנוב חזיר מפוטם, | `וְאֶת הַחֲזִיר כִּי מַפְרִיס פַּרְסָה הוּא … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) | [absent] | בתורה החזיר טמא, ואין עליו דין גנבה; בחַתִּי הוא בהמת משק רגילה, יש לו מחיר – וגם חזיר מפוטם שווה מנה כסף "לפנים" |
| EST 593 | *hurbabillu* | זיקית (?) | `וְהָאֲנָקָה וְהַכֹּחַ וְהַלְּטָאָה וְהַחֹמֶט וְהַתִּנְשָׁמֶת` (ויקרא יא:ל) | [equivalent?] | The lizards of the food laws; one of them is often identified with the chameleon. |
| HL HL1 §25, 122 | *[takku] LÚ.U₁₉.LU-aš {DUG}ÚTUL-[i našma luliya] pap[rezzi]* | [אם] אדם [ייטמא] בקדרה [או בבריכה], | `וְכָל כְּלִי חֶרֶשׂ אֲשֶׁר יִפֹּל מֵהֶם אֶל תּוֹכוֹ: כֹּל אֲשֶׁר בְּתוֹכוֹ יִטְמָא וְאֹתוֹ תִשְׁבֹּרוּ` (ויקרא יא:לג) | [divergence] | `אַךְ מַעְיָן וּבוֹר מִקְוֵה מַיִם יִהְיֶה טָהוֹר` (ויקרא יא:לו) – בתורה כלי החרס נשבר, ומקור המים אינו נטמא; בחוק החתי מי שטימא כלי או בריכה משלם קנס – הטומאה היא נזק לרכוש |
| IN IN §14, 14.10 | *ma-a-an Ú-NU-[TE]{MEŠ} GIŠ-ṢI ⸢Ú⸣-NU-TE{MEŠ} GIR₄ ku-e ḫar-te-ni* | ואם חפצי עץ, חפצי חרס – אשר (אתם) מחזיקים – | `וְכָל כְּלִי חֶרֶשׂ אֲשֶׁר יִפֹּל מֵהֶם אֶל תּוֹכוֹ: כֹּל אֲשֶׁר בְּתוֹכוֹ יִטְמָא וְאֹתוֹ תִשְׁבֹּרוּ` (ויקרא יא:לג) | [equivalent] | כלי חרס שנגע בו שרץ – נטמא ונשבר; כאן כלי שנגע בו חזיר או כלב יש להשליך. הקבלה טיפולוגית, וקרובה מאוד בפרטיה (כלי עץ, כלי חרס, מגע של חיה טמאה, השלכה) |
| EST 420 | same | same | `בָּדָד יֵשֵׁב מִחוּץ לַמַּחֲנֶה מוֹשָׁבוֹ` (ויקרא יג:מו) | [equivalent] |  |
| HL HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, | `וְטִהֲרוֹ וְשִׁלַּח אֶת הַצִּפֹּר הַחַיָּה עַל פְּנֵי הַשָּׂדֶה` (ויקרא יד:ז) | [equivalent] | הטומאה נשלחת אל השדה הפתוח; החוק החתי אוסר דווקא להביא אותה אל שדה או בית של אחר |
| EST 551 | *kabsu kabsutu* | כבש וכבשה | `שְׁנֵי כְבָשִׂים תְּמִימִם וְכַבְשָׂה אַחַת` (ויקרא יד:י) | [cognate] | Lexical. |
| IN IN §10, 10.5 | *[ ]x-⸢zi⸣ na-aš-za MUNUS-ni-⸢i⸣ GAM-an še-eš-du* | […]… – ישכב עם אשה! | `וְאִשָּׁה אֲשֶׁר יִשְׁכַּב אִישׁ אֹתָהּ שִׁכְבַת זָרַע וְרָחֲצוּ בַמַּיִם וְטָמְאוּ עַד הָעָרֶב` (ויקרא טו:יח) | [divergence] | בשתי המסורות השכיבה עם אשה מחייבת רחיצה (10.6) לפני שובו של האיש אל הקודש; בתורה גם הטומאה נמשכת עד הערב, כאן נדרשת רק הרחיצה |
| IN IN §14, 14.14 | *a-da-an-na ⸢a-ku-wa⸣-an-na pí-an-zi ma-a-an-na-za MUNUS-i ku-iš GAM-an še-eš-zi* | ייתנו לאכול ולשתות! ואם מישהו ישכב עם אשה – | `וְאִשָּׁה אֲשֶׁר יִשְׁכַּב אִישׁ אֹתָהּ שִׁכְבַת זָרַע וְרָחֲצוּ בַמַּיִם וְטָמְאוּ עַד הָעָרֶב` (ויקרא טו:יח) | [divergence] | ראו 10.5 |
| LH §157, 1850' | *ina sūn ummišu* | בחיק אמו | `אִמְּךָ הִוא לֹא תְגַלֶּה עֶרְוָתָהּ` (ויקרא יח:ז) | [equivalent] |  |
| HL HL2 §189, 189.1 | *ták-ku LÚ-aš a-pé-e-el-pát na-a[š?-ša-aš kat-ta wa-aš-ta-i ḫu-ur-ki-il]* | אם איש עם אִמּוֹ? שלו [יחטא – תועבה]; | `עֶרְוַת אָבִיךָ וְעֶרְוַת אִמְּךָ לֹא תְגַלֵּה` (ויקרא יח:ז) | [equivalent] | הראשון ברשימת העריות בתורה, וגם כאן הראשון ברשימת בני המשפחה |
| HL HL2 §190, 190.2 | *ták-ku LÚ-aš an-na-wa-an-na-aš-ša-aš kat-ta [wa-aš-ta-a-i Ú-UL ḫa-ra-tar]* | אם איש עם אִמּוֹ החורגת [יחטא – אין עברה]; | `עֶרְוַת אֵשֶׁת אָבִיךָ לֹא תְגַלֵּה` (ויקרא יח:ח) | [divergence] | בתורה אשת האב אסורה תמיד (גם דברים כז:כ); בחוק החתי – רק בחיי האב |
| HL HL2 §189, 189.2 | *ták-ku LÚ-aš DUMU.MUNUS-aš-ša kat-ta wa-a[š-ta-i ḫu-ur-ki-il]* | אם איש עם בתו י[חטא – תועבה]; | `עֶרְוַת בַּת בִּנְךָ אוֹ בַת בִּתְּךָ` (ויקרא יח:י) | [absent] | איסור מפורש על הבת אין בויקרא יח; הוא נלמד מבת הבן ובת הבת (יח:י) ומן האשה ובתה (יח:יז) |
| LH §155, 1822' | *kallatam* | כלה | `עֶרְוַת כַּלָּתְךָ לֹא תְגַלֵּה: אֵשֶׁת בִּנְךָ הִוא` (ויקרא יח:טו) | [cognate] | *kallatu* = `כַּלָּה`. |
| HL HL2 §195a, 195a.1 | *ták-ku LÚ-aš MA-ḪAR DAM ŠEŠ-ŠU še-eš-ke-ez-zi ŠEŠ-ŠU-ma* | אם איש אצל אשת אחיו שוכב, ואחיו | `עֶרְוַת אֵשֶׁת אָחִיךָ לֹא תְגַלֵּה` (ויקרא יח:טז) | [equivalent] | בחוק החתי האיסור תלוי בחיי האח, ואחרי מותו האח לוקח אותה (193); גם ויקרא כ:כא |
| LH §154, 1816' | *mārassu* | את בתו | `עֶרְוַת אִשָּׁה וּבִתָּהּ לֹא תְגַלֵּה` (ויקרא יח:יז) | [absent] | Lev 18/20 do not name the daughter explicitly. From memory. |
| HL HL2 §195b, 195b.2 | *{MUNUS}a-ra-u-wa-an-ni-in ḫar-zi ta DUMU.MUNUS-ši-ia ša-li-ga* | יחזיק בת חורין, וגם בבתה יִגַּע – | `עֶרְוַת אִשָּׁה וּבִתָּהּ לֹא תְגַלֵּה` (ויקרא יח:יז) | [equivalent] | אותו איסור: האשה ובתה |
| MAL §31, o iv 44–45 | *mārat emišu kī aššitišu mētte eḫḫaz* | בת חמיו כאשתו המתה ישא | `וְאִשָּׁה אֶל אֲחֹתָהּ לֹא תִקָּח לִצְרֹר` (ויקרא יח:יח) | [divergence] | The sororate after the wife's death is a right in MAL; the Torah forbids two sisters in her lifetime. |
| HL HL2 §192, 192.1 | *ták-ku LÚ-aš DAM-SÚ a-ki A-ḪA-[SÀ DAM-an-ni da-a-i]* | אם אשתו של איש תמות, את אחותה [לאשה ייקח] – | `וְאִשָּׁה אֶל אֲחֹתָהּ לֹא תִקָּח` … `בְּחַיֶּיהָ` (ויקרא יח:יח) | [equivalent] | בתורה האחות אסורה רק בחיי אשתו; אחרי מותה – מותרת, כמו כאן |
| HL HL2 §195c, 195c.2 | *na-aš-ma *NIN-iš-ši* ša-li-i-ga ḫu-u-ur-ke-el* | או באחותה יִגַּע – תועבה. | `וְאִשָּׁה אֶל אֲחֹתָהּ לֹא תִקָּח … בְּחַיֶּיהָ` (ויקרא יח:יח) | [equivalent] | בחיי אשתו גם אחותה "תועבה"; אחרי מותה – מותרת (192) |
| MAL §18, o ii 72 | *ana tappāʾišu* | לעמיתו | `וְאֶל אֵשֶׁת עֲמִיתְךָ לֹא תִתֵּן שְׁכָבְתְּךָ לְזָרַע` (ויקרא יח:כ) | [equivalent] | `עָמִית` is our rendering of *tappû*; Lev 18:20 forbids the fellow's wife – the subject of the slander. |
| MAL §19, o ii 84 | *ittinikkūš* | "באים עליו" | `וְאֶת זָכָר לֹא תִשְׁכַּב מִשְׁכְּבֵי אִשָּׁה` (ויקרא יח:כב) | [equivalent] | The slander: the comrade is (passively) sodomized. |
| MAL §20, o ii 93 | *tappāʾšu inīk* | על עמיתו בא | `וְאֶת זָכָר לֹא תִשְׁכַּב מִשְׁכְּבֵי אִשָּׁה תּוֹעֵבָה הִוא` (ויקרא יח:כב) | [divergence] | The prohibition is general in the Torah. |
| HL HL2 §189, 189.3 | *ták-ku 〈LÚ-aš〉 DUMU.NITA-aš kat-ta wa-aš-ta-a-⸢i⸣ [ḫu-ur-ki-il]* | אם ⟨איש⟩ עם בנו יחטא – [תועבה]. | `וְאֶת זָכָר לֹא תִשְׁכַּב מִשְׁכְּבֵי אִשָּׁה תּוֹעֵבָה הִוא` (ויקרא יח:כב) | [divergence] | התורה אוסרת כל משכב זכר ("תועבה" – אותה מילה); החוק החתי אוסר רק את הבן |
| HL HL2 §188, 188.1 | *ták-ku LÚ-eš UDU-aš kat-ta w[a-aš-ta-i* | אם איש עם שה י[חטא …] | `וּבְכָל בְּהֵמָה לֹא תִתֵּן שְׁכָבְתְּךָ` (ויקרא יח:כג) | [equivalent] | גם השה בכלל הבהמות; כאן "תועבה" ומוות כ־187 (בעד, KBo 6.26) |
| HL HL2 §187, 187.1 | *ták-ku LÚ-iš GU₄-aš kat-ta [wa-aš-t]a-i ḫu-u-ur-ki-il a-ki-aš* | אם איש עם שור [יחטא] – תועבה: ימות. | `מִכֹּל הַתּוֹעֵבֹת הָאֵלֶּה` (ויקרא יח:כט) | [equivalent] | התורה מכנה את כל המשכבים האסורים של ויקרא יח "תועבות", כשם שהחוק החתי מכנה אותם *ḫurkel* |
| IN IN §6, 6.8 | *NINDA KAŠ GEŠTIN-ia-m]a ma-a-an a-pé-e-da-ni UD-ti a-*da*-an-na a-ku-wa-[an-na]* | [ואילו את הלחם, השכר וגם את היין] – אם ביום ההוא לאכול ולשתות | `בְּיוֹם זִבְחֲכֶם יֵאָכֵל וּמִמָּחֳרָת; וְהַנּוֹתָר עַד יוֹם הַשְּׁלִישִׁי בָּאֵשׁ יִשָּׂרֵף` (ויקרא יט:ו) | [divergence] | גם בתורה מנת הקודש נאכלת ביום ההקרבה וביום שאחריו, ומה שנותר עד היום השלישי נשרף; כאן – מותר לאכול במשך שלושה ימים (6.10). אותה בעיה (מזון קודש שאינו נגמר ביום אחד), תשובה קרובה ושונה. הקבלה טיפולוגית |
| HL HL2 §145, 145.2 | *[ták-ku -u]š ta-a-la-i na-aš-kán ku-uš-ša-na-az še-me-en-zi* | [אם …] יניח – הוא מן הַשָּׂכָר יפסיד. | `לֹא תָלִין פְּעֻלַּת שָׂכִיר אִתְּךָ עַד בֹּקֶר` (ויקרא יט:יג) | [divergence] | התורה מגינה על השכיר; החוק החתי – על המעסיק מפני בנאי שלא השלים |
| UN prol. 162–171 | *lu₂ niĝ₂-tuku … lu₂ a₂-tuku … lu₂ 1 ma-na … lu₂ 1 gu₄* | העשיר … בעל הכוח … איש המנה … איש השור | `לֹא תִשָּׂא פְנֵי דָל וְלֹא תֶהְדַּר פְּנֵי גָדוֹל:  בְּצֶדֶק תִּשְׁפֹּט עֲמִיתֶךָ` (ויקרא יט:טו) | [equivalent] / [divergence] | The weak not delivered to the strong; Leviticus forbids partiality in both directions. Cross-collection: LH 37–39, 3202′–3205′ `שהחזק בחלש לא יחבול, יתומה ואלמנה ליישר`. |
| EST **327 (with 268, 270, 323)** | slander – hatred – love "as yourselves" | לשנוא זה את זה; קרציהם תאכלו; כנפשכם לא תאהבו | `לֹא תֵלֵךְ רָכִיל בְּעַמֶּיךָ` (ויקרא יט:טז) | [equivalent] | Lev 19:16–18 has slander, hatred of the brother, and love "as yourself" in three consecutive verses – the cluster of §24 and §27–§29. Our proposal. |
| EST 327 | same | same | `לֹא תִשְׂנָא אֶת אָחִיךָ בִּלְבָבֶךָ` (ויקרא יט:יז) | [equivalent] |  |
| EST 268 | same | same | `וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ` (ויקרא יט:יח) | [divergence] | Lev: `כָּמוֹךָ`; the treaty, Deut 13:7 and 1 Sam: `כְּנַפְשְׁךָ`, the cognate of *kî napšāti*. |
| LH §64, 1105 | idem | idem | `בְּהֶמְתְּךָ לֹא תַרְבִּיעַ כִּלְאַיִם שָׂדְךָ לֹא תִזְרַע כִּלְאָיִם` (ויקרא יט:יט) | [divergence] | idem. |
| HL HL2 §166, 166.1 | *ták-ku NUMUN-ni še-er NUMUN-an ku-iš-ki šu-ú-ni-ez-zi* | אם מישהו יזרע זרע על זרע, | `שָׂדְךָ לֹא תִזְרַע כִּלְאָיִם` (ויקרא יט:יט) | [divergence] | ההקבלה המוכרת אינה אותו דבר: בתורה שני מינים בשדה שלך, בחוק החתי זריעה על זרעו של אחר |
| LE §31, 106–107 | *amat awīlim ittaqab 1/3 mana kaspam išaqqal u amtum ša bēlišama* | אמת איש נקב – שליש מנה כסף ישקול, והאמה של אדוניה היא | `וְאִישׁ כִּי יִשְׁכַּב אֶת אִשָּׁה שִׁכְבַת זֶרַע וְהִוא שִׁפְחָה נֶחֱרֶפֶת לְאִישׁ` (ויקרא יט:כ) | [equivalent] | Another man's slave-girl: no death; a payment to her master (LE) vs `בִּקֹּרֶת` and a guilt-offering (Lev). |
| MAL §40, r v 88 | *amātu lā uptaṣṣanā* | אמהות לא תתרעלנה | `וְהִוא שִׁפְחָה נֶחֱרֶפֶת לְאִישׁ` (ויקרא יט:כ) | [divergence] | Free woman vs slave-woman: in Lev in the law of intercourse, in MAL in street dress. |
| UN §8, 220–228 | *geme₂ lu₂ e₂ nu-gi₄-a niĝ₂-a₂-ĝar-še₃ … 5 gin₂* | אמת איש אשר הביתה לא הובאה … חמישה שקלי כסף ישקול | `וְהִוא שִׁפְחָה נֶחֱרֶפֶת לְאִישׁ … בִּקֹּרֶת תִּהְיֶה לֹא יוּמְתוּ כִּי לֹא חֻפָּשָׁה` (ויקרא יט:כ) | [equivalent] | The slave-woman designated for a man: no death penalty in either; UN 5 shekels, Leviticus an inquiry and a guilt offering. |
| HL HL2 §196, 196.4 | *ke-e-el 1 UDU ke-⸢e⸣-[e]l-la 1 UDU *ka-aš-ša-aš** | שה אחד חֵלֶף זה, ושה אחד חֵלֶף זו | `לֹא יוּמְתוּ כִּי לֹא חֻפָּשָׁה` (ויקרא יט:כ) | [divergence] | גם בתורה מעמד העבדות מקל (אין מוות); שם איש חופשי עם שפחה, כאן עבד ואמה: פירוד, ושה חֵלֶף כל אחד |
| LH §60, 1055 | *eqlam ana kirîm zaqāpim* | שדה לגן לנטוע | `וְכִי תָבֹאוּ אֶל הָאָרֶץ וּנְטַעְתֶּם כָּל עֵץ מַאֲכָל` (ויקרא יט:כג) | [equivalent] | *zaqāpu* (~ `זקף`) = `נטע` by meaning. |
| LH §60, 1059 | *erbe šanātim kiriam urabba* | ארבע שנים את הגן יגדל | `שָׁלֹשׁ שָׁנִים יִהְיֶה לָכֶם עֲרֵלִים לֹא יֵאָכֵל` (ויקרא יט:כג) | [divergence] | Four years of growing by the gardener, division in the fifth (LH) vs three years of `ערלה`, the fourth holy, eating in the fifth (Torah): the same year count. Our proposal (perhaps discussed in the literature). |
| HL HL2 §112, 112.2 | *[ ša-aḫ-ḫa-a]n Ú-UL i-ia〈〈an〉〉-zi I-NA MU 4{KAM}-ma ša-a[ḫ-ḫa-an]* | [… את השַׁחְחַן] לא יעשה, ובשנה הרביעית את השַׁחְחַן | `שָׁלֹשׁ שָׁנִים יִהְיֶה לָכֶם עֲרֵלִים לֹא יֵאָכֵל` (ויקרא יט:כג) | [equivalent] | אותו מספר: שלוש שנים, ומעבר בשנה הרביעית (`וּבַשָּׁנָה הָרְבִיעִת`, ויקרא יט:כד); בתורה לפרי הנטיעה, כאן לחובת השבוי המתיישב – הקבלה טיפולוגית בלבד |
| LH §44, 851–852 | *ina rebūtim šattim* | ברביעית שנה | `וּבַשָּׁנָה הָרְבִיעִת יִהְיֶה כָּל פִּרְיוֹ קֹדֶשׁ הִלּוּלִים לַיהוָה` (ויקרא יט:כד) | [divergence] | "The fourth year" of new land; see §60. Our proposal. |
| LH §60, 1061–1062 | *ina ḫamuštim šattim* | בחמישית שנה | `וּבַשָּׁנָה הַחֲמִישִׁת תֹּאכְלוּ אֶת פִּרְיוֹ לְהוֹסִיף לָכֶם תְּבוּאָתוֹ` (ויקרא יט:כה) | [divergence] | The fifth year as the first year of shared fruit. Our proposal. |
| IN IN §3, 3.5 | *⸢ḫar-ni-ik-zi⸣ nu-za A-⸢NA⸣ INIM ⸢DINGIR⸣-L[IM me-e]k-ki mar-ri na-aḫ-ḫ[a-an-t]e-eš e-eš-tén* | ישחית? ולדבר הָאֵל היו יראים מאוד, עד מאוד! | `וּמִקְדָּשִׁי תִּירָאוּ: אֲנִי יְהוָה` (ויקרא יט:ל) | [equivalent] | יראה כלפי בית האל ודבריו. *naḫḫ-* הוא המקביל החתי של *palāḫu* האכדי, שכל הקורפוסים מתרגמים `ירא`. הקבלה טיפולוגית |
| IN IN §7, 7.18 | *UL tar-na-a-⸢i⸣ [nu-za] DINGIR{MEŠ}-aš ZI-ni me-ek-ki na-aḫ-ḫa-an-te-eš e-eš-tén* | לא תשלח! ולנפש הָאֵלִים היו יראים מאוד! | `וּמִקְדָּשִׁי תִּירָאוּ` (ויקרא יט:ל) | [equivalent] | ראו 3.5 |
| EST 268 | same | same | `וְאָהַבְתָּ לוֹ כָּמוֹךָ` (ויקרא יט:לד) | [divergence] | Same. |
| LH §108, 1212' | *ina abnim rabītim* | `באבן גדולה` | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק` (ויקרא יט:לו) | [equivalent] | מן הזיכרון (דברים כה:יג–טז); הצעה שלנו (עמוס ח:ה). |
| UN prol. 135–149 | *{uruda}ba-ri₂-ga … ba-an … 1 sila₃ zabar … 1 gin₂ ku₃ na₄ za₃ 1 ma-na-e ḫe₂-ni-ge-en* | פרסיכתו של נחושת … סאת נחושת … קב ארד … אבן של שקל כסף עד מנה כוננתי | `מֹאזְנֵי צֶדֶק אַבְנֵי צֶדֶק אֵיפַת צֶדֶק וְהִין צֶדֶק יִהְיֶה לָכֶם` (ויקרא יט:לו) | [equivalent] | **The oldest standardization of measures and weights by a ruler**; just measures in the Torah are a commandment, here a royal act. |
| LH §129, 1468' | *aššat awīlim* | אשת איש | `וְאִישׁ אֲשֶׁר יִנְאַף אֶת אֵשֶׁת אִישׁ` (ויקרא כ:י) | [equivalent] | The same phrase in the adultery law; LH words it from the woman's side. |
| LH §129, 1477' | *aššassu uballaṭ* | את אשתו יחיה | `מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | [divergence] | The Torah has no pardon by the husband. |
| LH §127, 1453' | *u aššat awīlim* | ואשת איש | `וְאִישׁ אֲשֶׁר יִנְאַף אֶת אֵשֶׁת אִישׁ` (ויקרא כ:י) | [equivalent] | F16, אותו צירוף |
| MAL §13, o ii 29 | *aʾīla u sinniltumma idukkū* | את האיש ואף את האשה יהרגו | `מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | [equivalent] | Both die (the Torah's formula vs the impersonal "they shall kill"). |
| MAL §14, o ii 33–35 | *kī aʾīle ša aššassu ana epāše iqabbiūni nāʾikāna ēpušū* | כאשר האיש את אשתו לעשות יאמר, לַבָּא עליה יעשו | `מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | [divergence] | The husband fixes his wife's punishment and the lover gets the same; the Torah fixes death for both. |
| MAL §15, o ii 51–57 | the husband's three choices | אם … יהרוג … אם את אף אשתו יקצוץ … ואם … [ישחרר] | `מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | [divergence] | MAL: death / nose and castration / release, chosen by the husband, the lover always as the wife; Torah: death fixed. |
| HL HL2 §198, 198.3 | *{LÚ}pu-pu-un-na ḫu-iš-n[u]-zi ta SAG.DU-SÚ* | וגם את המאהב יחיה, ואת ראשו | `מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | [divergence] | בתורה אין לבעל בחירה; כאן אם חס על אשתו – חייב לחוס גם על המאהב (ומשלי ו:לה: הבעל אינו מקבל פדיון) |
| LH §155, 1826' | *ina sūniša ittatīl* | בחיקה שכב | `וְאִישׁ אֲשֶׁר יִשְׁכַּב אֶת כַּלָּתוֹ מוֹת יוּמְתוּ שְׁנֵיהֶם` (ויקרא כ:יב) | [equivalent] / [divergence] | Lev: both die; LH: only the father-in-law. |
| MAL §33, o iv 65–66 | *ana emiša ana aḫuzzete* | לחמיה לנישואין | `וְאִישׁ אֲשֶׁר יִשְׁכַּב אֶת כַּלָּתוֹ מוֹת יוּמְתוּ שְׁנֵיהֶם` (ויקרא כ:יב) | [divergence] | Father-in-law and daughter-in-law: lawful in MAL, capital in Lev. |
| MAL §20, o ii 93 | *tappāʾšu inīk* | על עמיתו בא | `וְאִישׁ אֲשֶׁר יִשְׁכַּב אֶת זָכָר מִשְׁכְּבֵי אִשָּׁה תּוֹעֵבָה עָשׂוּ שְׁנֵיהֶם` (ויקרא כ:יג) | [divergence] | Torah: any male, both die; MAL: the *tappû* (comrade), only the active partner punished. No *zikaru* in MAL. |
| LH §157, 1853' | *iqallûšunūti* | יקלום | `בָּאֵשׁ יִשְׂרְפוּ אֹתוֹ וְאֶתְהֶן` (ויקרא כ:יד) | [equivalent] | Burning in incest (there: a woman and her mother). [absent] Lev 20 has no explicit son–mother law. |
| HL HL2 §191, 191.3 | *ut-ne-e Ú-UL ḫa-ra-a-tar ták-ku ša-ni-ia [pé-di nu ša-ak-ki]* | – אין עברה. אם באותו [מקום, והוא יודע] – | `וְאִישׁ אֲשֶׁר יִקַּח אֶת אִשָּׁה וְאֶת אִמָּהּ זִמָּה הִוא` (ויקרא כ:יד) | [divergence] | בתורה האשה ואמה אסורות בכל מקום; בחוק החתי – רק "באותו מקום, ביודעין" |
| HL HL2 §195c, 195c.2 | *na-aš-ma *NIN-iš-ši* ša-li-i-ga ḫu-u-ur-ke-el* | או באחותה יִגַּע – תועבה. | `וְאִישׁ אֲשֶׁר יִקַּח אֶת אִשָּׁה וְאֶת אִמָּהּ זִמָּה הִוא` (ויקרא כ:יד) | [equivalent] | אותו איסור: אשתו ואמה |
| HL HL2 §166, 166.5 | *ne-e-ia-an-zi LÚ-eš₁₇ a-ki GU₄{ḪI.A}-ia ak-kán-zi* | יטו; והאיש ימות, וגם השוורים ימותו. | `וְאֶת הַבְּהֵמָה תַּהֲרֹגוּ` (ויקרא כ:טו) | [divergence] | גם הבהמות שהיו בעבירה מתות; כאן הן כלי העונש |
| HL HL2 §187, 187.1 | *ták-ku LÚ-iš GU₄-aš kat-ta [wa-aš-t]a-i ḫu-u-ur-ki-il a-ki-aš* | אם איש עם שור [יחטא] – תועבה: ימות. | `וְאֶת הַבְּהֵמָה תַּהֲרֹגוּ` (ויקרא כ:טו) | [divergence] | התורה הורגת גם את הבהמה; החוק החתי אינו אומר דבר על השור |
| HL HL2 §199, 199.5 | *GU₄-uš a-ki LÚ-aš-ša Ú-UL ⸢a⸣-[ki] 1 UDU LÚ-na-aš* | השור ימות, והאיש לא ימות. שה אחד | `וְאֶת הַבְּהֵמָה תַּהֲרֹגוּ` (ויקרא כ:טו) | [equivalent] | הבהמה מתה |
| LH §154, 1819' | *ālam ušeṣṣûšu* | מן העיר יוציאוהו | `וְנִכְרְתוּ לְעֵינֵי בְּנֵי עַמָּם` (ויקרא כ:יז) | [divergence] | Banishment from the city vs. being cut off from the people. |
| UN e026–e027 | *lu₂ dam šeš-gal-na ba-an-du₁₂-du₁₂ i₃-gaz* | אם איש את אשת אחיו הגדול נשא, יהרג | `וְאִישׁ אֲשֶׁר יִקַּח אֶת אֵשֶׁת אָחִיו נִדָּה הִוא … עֲרִירִים יִהְיוּ` (ויקרא כ:כא) | [equivalent] / [divergence] | Marrying the elder brother's wife is capital in UN; forbidden (childlessness) in Leviticus. Whether the brother is dead is not said. |
| MAL §47, r vii 1 | *lū aʾīlu lū sinniltu* | בין איש בין אשה | `וְאִישׁ אוֹ אִשָּׁה כִּי יִהְיֶה בָהֶם אוֹב אוֹ יִדְּעֹנִי מוֹת יוּמָתוּ` (ויקרא כ:כז) | [equivalent] | "A man or a woman" opening a capital law on magic. |
| LI §30, 374′–376′ | *dam gidlam-a-ni ba-an-tak₄ … kar-ke₄-bi nu-un-tuku-tuku* | את אשתו הבחירה עזב … את הזונה ההיא לא ישא | `אִשָּׁה זֹנָה וַחֲלָלָה לֹא יִקָּחוּ` (ויקרא כא:ז) | [equivalent] | A ban on marrying a prostitute (Torah: priests; LI: the man warned by the judges who divorced his wife for her). |
| LH §110, 1230' | *šumma nadītum ugbabtum* | `אם נָדִיתוּ (או) אוּגְבַּבְתּוּ` | `וּבַת אִישׁ כֹּהֵן כִּי תֵחֵל לִזְנוֹת אֶת אָבִיהָ הִיא מְחַלֶּלֶת בָּאֵשׁ תִּשָּׂרֵף` (ויקרא כא:ט) | [equivalent] | אשה הקשורה למקדש שחיללה את מעמדה נשרפת. מן הזיכרון (ההקבלה מקובלת). |
| LH §110, 1238' | *iqallûši* | `יקלוה.` | `בָּאֵשׁ תִּשָּׂרֵף` (ויקרא כא:ט) | [equivalent] | יהודה דן את תמר לשריפה. מן הזיכרון. |
| UN §12?, 248 | *ereš-diĝir* | אוגבבתו | `וּבַת אִישׁ כֹּהֵן כִּי תֵחֵל לִזְנוֹת … בָּאֵשׁ תִּשָּׂרֵף` (ויקרא כא:ט) | [divergence] | The priestess and a man in her lap; the penalty is broken. |
| HL HL2 §200a, 200a.3 | *{LÚ}SANGA-ša Ú-UL ki-i-ša ták-ku ar-nu-wa-la-an [ku-iš-ki]* | וגם כהן לא ייעשה. אם [מישהו] עם שבויה | `אִישׁ מִזַּרְעֲךָ לְדֹרֹתָם אֲשֶׁר יִהְיֶה בוֹ מוּם` (ויקרא כא:יז) | [equivalent] | פגם שאינו חטא ובכל זאת מרחיק מן הכהונה ומן הקודש; שם המום בגוף, כאן המעשה (Lev 21:16–23) |
| LH §221, 2652' | *šebirtam* | `שבורה` | `אוֹ אִישׁ אֲשֶׁר יִהְיֶה בוֹ שֶׁבֶר רָגֶל אוֹ שֶׁבֶר יָד` (ויקרא כא:יט) | [cognate] | הצעה שלנו |
| MAL §8, o i 78 | *išku* | אשך | `אוֹ מְרוֹחַ אָשֶׁךְ` (ויקרא כא:כ) | [cognate] | The Bible's only `אֶשֶׁךְ`. |
| IN IN §14, 14.17 | *⸢nam-ma⸣ x x x x x x-pát ⸢na⸣-aš-ta ku-it-ma-〈an〉 {D}UTU-uš ša-ra-a* | ועוד … ממש; ועד שאֵל הַשֶּׁמֶשׁ (יעלה) למעלה, | `כִּי אִם רָחַץ בְּשָׂרוֹ בַּמָּיִם` (ויקרא כב:ו) | [divergence] | `וּבָא הַשֶּׁמֶשׁ וְטָהֵר; וְאַחַר יֹאכַל מִן הַקֳּדָשִׁים` (ויקרא כב:ז) – בתורה הטמא רוחץ ומחכה עד שקיעת השמש; כאן הוא רוחץ לפני זריחתה ומגיע מיד לסעודת האלים. שתי המסורות קושרות את הטהרה לתנועת השמש – בכיוונים הפוכים. ההקבלה טיפולוגית |
| IN IN §5, 5.3 | *I-NA É{MEŠ}-KU-NU pé-e ḫar-te-ni na-⸢at⸣ šu-me-⸢el⸣ DAM{MEŠ}-KU-NU DUMU{MEŠ}-KU-NU* | תובילו אל בתיכם, ואותם – נשיכם, בניכם, | `וְכָל זָר לֹא יֹאכַל קֹדֶשׁ; תּוֹשַׁב כֹּהֵן וְשָׂכִיר לֹא יֹאכַל קֹדֶשׁ` (ויקרא כב:י) | [divergence] | `וְכֹהֵן כִּי יִקְנֶה נֶפֶשׁ קִנְיַן כַּסְפּוֹ הוּא יֹאכַל בּוֹ` (ויקרא כב:יא) – בתורה מותר לבני בית הכוהן ולעבדיו לאכול מן הקודש, ואסור לאורח ולשכיר; כאן אסור לקחת הביתה את מה שלא הגיע לאל כלל. השאלה המשותפת – מי בבית הכוהן אוכל מן הקודש – נענית בסעיף 6 … |
| IN IN §5, 5.5 | *na-aš-ma a-aš-šu-wa-an-za ku-iš-ki {LÚ}Ú-BA-⸢RUM⸣ ú-ez-zi na-at a-pé-e-〈da〉-ni* | או אורח חשוב כלשהו יבוא, ואותם לאותו (אחד) | `תּוֹשַׁב כֹּהֵן וְשָׂכִיר לֹא יֹאכַל קֹדֶשׁ` (ויקרא כב:י) | [divergence] | האורח אינו אוכל מן הקודש בשתי המסורות; בתורה בגלל קדושת המזון, וכאן בגלל שהמזון שייך לאל ונגזל ממנו |
| LH §142, 1671' | *ana bīt abiša* | לבית אביה | `וְשָׁבָה אֶל בֵּית אָבִיהָ כִּנְעוּרֶיהָ מִלֶּחֶם אָבִיהָ תֹּאכֵל` (ויקרא כב:יג) | [equivalent] | הגרושה שבה לבית אביה |
| LH §171, 2087' | *mutiša uššab* | בעלה תשב; | `וְשָׁבָה אֶל בֵּית אָבִיהָ כִּנְעוּרֶיהָ` (ויקרא כב:יג) | [divergence] | בת הכהן האלמנה שבה לבית אביה |
| LH §171, 2088' | *adi balṭat ikkal* | כל עוד היא חיה תאכל, | `מִלֶּחֶם אָבִיהָ תֹּאכֵל` (ויקרא כב:יג) | [equivalent] | האלמנה "אוכלת" ממי שמפרנס אותה |
| LH §186, 2416' | *itâr* | ישוב. | `וְשָׁבָה אֶל בֵּית אָבִיהָ כִּנְעוּרֶיהָ` (ויקרא כב:יג) | [equivalent] | החזרה "לבית האב" כשהקשר החדש נשבר; שם בת הכהן האלמנה, כאן הילד המגודל |
| MAL §25, o iii 82 | *ina bēt abišama usbat* | בבית אביה יושבת | `וְשָׁבָה אֶל בֵּית אָבִיהָ כִּנְעוּרֶיהָ` (ויקרא כב:יג) | [equivalent] | The childless widow in her father's house. |
| LH §247, 2863' | *īnšu uḫtappid* | את עינו נקר | `עַוֶּרֶת אוֹ שָׁבוּר` (ויקרא כב:כב) | [equivalent] | The blemishes of an animal. |
| LH §267, 3023' | *pissatam* | צליעה? | `אוֹ גָרָב אוֹ יַלֶּפֶת` (ויקרא כב:כב) | [equivalent] | If *pissatu* is "mange" (CDLI). Uncertain. |
| HL HL1 §60, 346 | *takku GU₄.MAḪ kuiški wemiēzzi* | אם מישהו ימצא פַּר, | `וּמָעוּךְ וְכָתוּת וְנָתוּק וְכָרוּת לֹא תַקְרִיבוּ לַיהוָה; וּבְאַרְצְכֶם לֹא תַעֲשׂוּ` (ויקרא כב:כד) | [divergence] | התורה אוסרת סירוס של בהמה (כך פירשו חז"ל את "ובארצכם לא תעשו"); החוק החתי מניח את הסירוס כמלאכה רגילה, ורק מי שסירס בהמה של אחר משלם |
| IN IN §15, 15.5 | *ku-it-ma-na-at [UN-a]š na-a-ú-i e-ez-za-a-i na-at-kán DINGIR{MEŠ}-⸢aš ZI-ni⸣* | עד ש[אדם] טרם יאכל ממנו – אותו לנפש הָאֵלִים | `וְלֶחֶם וְקָלִי וְכַרְמֶל לֹא תֹאכְלוּ עַד עֶצֶם הַיּוֹם הַזֶּה עַד הֲבִיאֲכֶם אֶת קָרְבַּן אֱלֹהֵיכֶם` (ויקרא כג:יד) | [equivalent] | לא לאכול מן החדש לפני שהובא לאל. ההקבלה טיפולוגית, וקרובה מאוד: אותו סדר קדימויות – האל אוכל ראשון |
| LH §175, 2155' | *ul iraggum* | לא יתבע. | `וַיֵּצֵא בֶּן אִשָּׁה יִשְׂרְאֵלִית וְהוּא בֶּן אִישׁ מִצְרִי` (ויקרא כד:י) | [equivalent] | בן לאם ולאב ממעמדות שונים |
| LH §196, 2511' | *uḫappadū* | ינקרו | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | [equivalent] |  |
| LH §200, 2530' | *meḫrišu* | שכמותו | `וְאִישׁ כִּי יִתֵּן מוּם בַּעֲמִיתוֹ` (ויקרא כד:יט) | [equivalent] | "His equal" / "his fellow". |
| LE §42, 137 | *iššukma ittakis* | נשך וקצץ | `וְאִישׁ כִּי יִתֵּן מוּם בַּעֲמִיתוֹ כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | [divergence] | Injury → payment (LE) vs the same injury (Lev). |
| MAL §20, o ii 96–97 | *inikkūš ana ša-rēšēn utarrūš* | יבואו עליו, לסריס ישיבוהו | `וְאִישׁ כִּי יִתֵּן מוּם בַּעֲמִיתוֹ כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | [equivalent] | Mirror punishment ("as he did, so shall be done to him"), plus castration. `עמית` in both: our word choice. Our proposal. |
| MAL §22, o iii 11–13 | *kī mut sinnilte sinnišassu ēpušūni ana šuāšu eppušūš* | כאשר בעל האשה את אשתו עשה – לו יעשו | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | [equivalent] | The man punished as the husband punished the wife. |
| MAL §50, r vii 67–68 | *kī … ēpušūšini eppušū[šu]* | ו[כאשר … עשה] לה, יע[שו לו] | `כַּאֲשֶׁר עָשָׂה כֵּן יֵעָשֶׂה לּוֹ` (ויקרא כד:יט) | [equivalent] | The talion formula. Restored. |
| LH §197, 2515' | *išebbirū* | ישברו | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) | [cognate] | *šebēru* = `שבר` in the same law. |
| LE §44, 143 | *qāssu ištebir* | ואת ידו שבר | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) | [divergence] | *šebēru* = `שבר` [cognate]; 1/2 mina. |
| LI §37, 425′–426′ | *kun-bi ib₂-ta-an-hul* | ואת זנבו פגם | `שֶׁבֶר תַּחַת שֶׁבֶר עַיִן תַּחַת עַיִן` (ויקרא כד:כ) | [divergence] | Injury to an animal paid by fractions of its price; the Torah's talion concerns persons (`מוּם בָּאָדָם`). |
| UN §19, 301–307 | *lu₂ lu₂-ra {ĝeš}tukul-ta ĝiri₃-pad-ra₂ … in-zi-ir, 1 ma-na* | איש לאיש בנשק את עצמו (…) ריסק, מנה כסף ישקול | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) | [divergence] | A crushed bone: a mina, not a bone for a bone (cf. LH §197 `את עצמו ישברו`). |
| HL PT § X, 52 | *n=aš mān karmalaššai* | והוא, אם יהיה נָכֶה, | `שֶׁבֶר תַּחַת שֶׁבֶר` (ויקרא כד:כ) | [divergence] | בתורה מידה כנגד מידה; בחוק החתי, בכל נוסחיו, כסף |
| LH §198, 2521' | *ištēn mana kaspam išaqqal* | מנה כסף ישקול | `מִשְׁפַּט אֶחָד יִהְיֶה לָכֶם כַּגֵּר כָּאֶזְרָח יִהְיֶה` (ויקרא כד:כב) | [divergence] | The class tiers: talion for the *mār awīlim*, silver for the *muškēnum*, half the price for the slave. From memory (Finkelstein; Paul). |
| LH §117, 1336' | *andurāršunu* | דרורם | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) | [cognate] | F24. From memory (standard: Lewy, Weinfeld). |
| LH §117, 1337' | *iššakkan* | יושם | `וּקְרָאתֶם דְּרוֹר` (ויקרא כה:י) | [equivalent] | The release is "set" (*šakānu*) in LH, "proclaimed" in the Torah. |
| LH §280, 3127' | *andurāršunu* | דרורם | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) | [cognate] | F24. |
| LH §171, 2071' | *andurār* | דרור | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) | [cognate] | *andurāru* = `דְּרוֹר` |
| LI §25, 304′ | *ama-ar-gi₄* | דרורם | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ` (ויקרא כה:י) | [cognate] | Via the Akkadian *andurāru* (corpus §6.3). |
| LI prol. 56–69 | *dumu-nita dumu-munus nibru{ki} … ama-ar-gi₄-bi ḫu-mu-ĝar* | את הבנים ואת הבנות של ניפור … את דרורם שמתי | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) | [cognate] | *ama-ar-gi₄* = Akk. *andurāru* = `דְּרוֹר` (corpus §6.3). The king proclaims it; in Leviticus a fixed law of the jubilee. Cross-collection: LI §25 (304′) `את דרורם שָׂם`; LH F24. |
| LI prol. 70 | *iri-bi-še₃ ḫe₂-bi₂-dab₅* | אל עריהם הִתְפַּשְׂתִּים (את הדרך) | `וְשַׁבְתֶּם אִישׁ אֶל אֲחֻזָּתוֹ וְאִישׁ אֶל מִשְׁפַּחְתּוֹ תָּשֻׁבוּ` (ויקרא כה:י) | [equivalent] | **Release = return home**, in both (and *ama-ar-gi₄* is literally "return to the mother"). |
| UN §4, 192 | *ama-ar-gi₄-ni i₃-ĝa₂-ĝa₂* | דרורו יושם | `וּקְרָאתֶם דְּרוֹר` (ויקרא כה:י) | [equivalent via the Akk.] | *ama-ar-gi₄* = *andurāru* = `דרור`. |
| UN prol. 125–134 | *umma{ki} … nam-ARAD₂ ḫe₂-eb-ak-e … ama-ar-gi₄-bi ḫu-mu-ĝar* | אומה … אשר באנשן עבדות נעשתה (להן) … את דרורם שמתי | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ; יוֹבֵל הִוא תִּהְיֶה לָכֶם וְשַׁבְתֶּם אִישׁ אֶל אֲחֻזָּתוֹ` (ויקרא כה:י) | [cognate via the Akk.] / [divergence] | *ama-ar-gi₄* = *andurāru* = `דְּרוֹר`; literally "return to the mother" ~ the Jubilee's `וְשַׁבְתֶּם`. UN: a one-time royal act for whole cities enslaved abroad; Lev: a fixed law every fifty years. Cross-collection: LI 65–69 (the same words). |
| HL HL2 §146a, 146a.1 | *[ták-ku É-er URU-i]a?-an {GIŠ}KIRI₆ na-aš-ma ú-e-ši-in ku-iš-ki uš-ne-eš-[kat-ta]* | [אם] מישהו יציע (למכירה) [בית, עיר?], גן או מרעה, | `וְכִי תִמְכְּרוּ מִמְכָּר לַעֲמִיתֶךָ אוֹ קָנֹה מִיַּד עֲמִיתֶךָ אַל תּוֹנוּ אִישׁ אֶת אָחִיו` (ויקרא כה:יד) | [equivalent] | יושר במכירת קרקע; בתורה בין קונה למוכר, כאן נגד צד שלישי ש"מוחץ לפני" הקונה (עוקף אותו) |
| LH §32, 728 | *ūl innaddin* | `לא יינתנו.` | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [equivalent] | הקרקע אינה נמכרת לצמיתות; ב־LH הנחלה אינה נמסרת אפילו לפדיון בעליה, כי היא של המלך. מן הזיכרון. |
| LH §36, 769 | *ul innaddin* | `לא יינתנו.` | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [equivalent] | מן הזיכרון. |
| LH §177, 2231' | *ul inaddinū* | לא יתנו; | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [divergence] | איסור מכירה מוחלטת של נחלה; כאן איסור מכירת מטלטלי היתומים בידי האפוטרופסים. הצעה שלנו |
| MALB §6, o iii 45 | *ina eqle u bēte qāssu elli* | `מן השדה והבית ידו תסתלק` | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [divergence] | The claimant who did not appear within the month loses his right for ever; in Lev 25 land is never sold in perpetuity. |
| HL HL1 §39, 198 | *takku [LÚ.U₁₉.LU-aš dam]ēl A.ŠÀ{ḪI.A} ḫarzi* | אם [אדם] יחזיק בשדות של [אחר], | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [equivalent] | גם שם הקרקע אינה רכוש גמור של מחזיקה, אבל בעליה הוא האל, לא המלך |
| HL HL1 §48, 276 | *[{LÚ}ḫippar]aš [lu]zzi [ka]rpiez[zi …]* | [החִפָּרָה את הלוּצִּי ירים] […], | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [equivalent] | איסור מכירה של קרקע ושל בני אדם התלויים בה |
| HL PT § XXXVII, 171 | *šaḫḫan Ú-UL ēššai* | את השַׁחְחַן לא יעשה. | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [divergence] | בתורה הקרקע אינה נמכרת לצמיתות, והבעלים או גואלו יכולים לחזור; בחוק החתי הקרקע נמכרת, והשאלה היא רק מי נושא בחובה למלך |
| HL PT § XXXIX, 187 | *LUGAL-un punuššanzi* | את המלך ישאלו, | `כִּי לִי הָאָרֶץ` (ויקרא כה:כג) | [absent] |  |
| HL PT § XL, 197 | *DUMU-ŠU A.ŠÀ-ŠU {GIŠ}KIRI₆.GEŠTIN-ŠÚ [l]ē kuiški wāši* | את בנו, את שדהו, את כרמו אף אחד [אל] יקנה. | `וְהָאָרֶץ לֹא תִמָּכֵר לִצְמִתֻת` (ויקרא כה:כג) | [divergence] | בתורה איסור כללי על מכירת קרקע לצמיתות; כאן איסור על קנייה מאדם מסוים (ובנו עמה), כדי לשמור את רכושו – ואת החובה שהוא נושא בה – במקומם |
| LH §37, 781 | *itâr* | `ישוב.` | `וּבְכֹל אֶרֶץ אֲחֻזַּתְכֶם גְּאֻלָּה תִּתְּנוּ לָאָרֶץ` (ויקרא כה:כד) | [equivalent] | הקרקע שבה לבעליה. מן הזיכרון. |
| LH §32, 708 | *tamkārum ipṭuraššuma* | `התגר פְּטָרוֹ,` | `וּבָא גֹאֲלוֹ הַקָּרֹב אֵלָיו וְגָאַל אֵת מִמְכַּר אָחִיו` (ויקרא כה:כה) | [equivalent] | בתורה הגואל הוא קרוב משפחה, ואחריו האיש עצמו; ב־LH התגר, ואחריו ביתו של השבוי, המקדש וההיכל. מן הזיכרון. |
| LE §39, 131 | *inišma* | נחלש | `כִּי יָמוּךְ אָחִיךָ וּמָכַר מֵאֲחֻזָּתוֹ` (ויקרא כה:כה) | [equivalent] | The impoverished seller. |
| LE §38, 130 | *aḫušu šâmam ḫašeḫ* | ואחיו לקנות חפץ | `וּבָא גֹאֲלוֹ הַקָּרֹב אֵלָיו וְגָאַל אֵת מִמְכַּר אָחִיו` (ויקרא כה:כה) | [equivalent] | The brother's right of pre-emption (our suggestion). |
| MALB §6, o iii 13–15 | *ša laqāšunu* | `(מי) אשר לקיחתם` | `וּבָא גֹאֲלוֹ הַקָּרֹב אֵלָיו וְגָאַל אֵת מִמְכַּר אָחִיו` (ויקרא כה:כה) | [divergence] | Redemption by the nearest kinsman vs. an open call to all with a claim; MAL has no redemption term. |
| LH §32, 711 | *ša paṭārim* | `(די) לִפְטוֹר` | `וְהִשִּׂיגָה יָדוֹ וּמָצָא כְּדֵי גְאֻלָּתוֹ` (ויקרא כה:כו) | [equivalent] | אותה שאלה בדיוק: האם יש בידו כדי הפדיון. מן הזיכרון. |
| LH §37, 781 | *itâr* | `ישוב.` | `וְשָׁב לַאֲחֻזָּתוֹ` (ויקרא כה:כח) | [equivalent] | הקרקע שבה לבעליה. מן הזיכרון. |
| LH §41, 819 | *itâr* | `ישוב,` | `וְשָׁב לַאֲחֻזָּתוֹ` (ויקרא כה:כח) | [equivalent] | השיבה אל האחוזה. מן הזיכרון. |
| LE §27, 92 | *ūmī šattim ištiat* | ימי שנה אחת | `יָמִים תִּהְיֶה גְאֻלָּתוֹ` (ויקרא כה:כט) | [equivalent] | `יָמִים` = a full year (our suggestion). |
| LE §39, 131–132 | *inišma bissu ana kaspim ittadin … bēl bītim ipaṭṭar* | נחלש, ואת ביתו בכסף נתן … בעל הבית יפטור | `וְאִישׁ כִּי יִמְכֹּר בֵּית מוֹשַׁב עִיר חוֹמָה וְהָיְתָה גְּאֻלָּתוֹ עַד תֹּם שְׁנַת מִמְכָּרוֹ` (ויקרא כה:כט) | [equivalent] | Redemption of a sold house; [divergence] Lev: within a year; LE: whenever the buyer sells it. |
| LH §278, 3101' | *waraḫšu lā imlā* | וירחו לא מלא | `וְאִם לֹא יִגָּאֵל עַד מְלֹאת לוֹ שָׁנָה תְמִימָה` (ויקרא כה:ל) | [equivalent] | A term "filled" for undoing a sale. Our proposal. |
| LH §51, 964–965 | *ana pī ṣimdat šarrim* | לפי תקנת המלך | `אַל תִּקַּח מֵאִתּוֹ נֶשֶׁךְ וְתַרְבִּית` (ויקרא כה:לו) | [divergence] | Interest and exchange rate fixed by royal decree vs prohibited. From memory. |
| LE §18a, 62 | *ṣibtam* | תוספת | `אַל תִּקַּח מֵאִתּוֹ נֶשֶׁךְ וְתַרְבִּית` (ויקרא כה:לו) | [divergence] |  |
| LH §102, 1139' | *kaspam ana tadmiqtim* | `כסף לחסד` | `אֶת כַּסְפְּךָ לֹא תִתֵּן לוֹ בְּנֶשֶׁךְ` (ויקרא כה:לז) | [equivalent] | כנ"ל; הצעה שלנו |
| UN d036–d041 | *maš₂* | תוספת | `אֶת כַּסְפְּךָ לֹא תִתֵּן לוֹ בְּנֶשֶׁךְ; וּבְמַרְבִּית לֹא תִתֵּן אָכְלֶךָ` (ויקרא כה:לז) | [divergence] | Silver / food interest. |
| LH §117, 1334' | *ippešū* | יעשו (מלאכה) | `לֹא תַעֲבֹד בּוֹ עֲבֹדַת עָבֶד. כְּשָׂכִיר כְּתוֹשָׁב יִהְיֶה עִמָּךְ` (ויקרא כה:לט–מ) | [equivalent] | *epēšu* "do", not the Torah's `עבד`. |
| LH §280, 3125' | *mārū mātim* | בני הארץ | `כִּי עֲבָדַי הֵם אֲשֶׁר הוֹצֵאתִי אֹתָם מֵאֶרֶץ מִצְרָיִם לֹא יִמָּכְרוּ מִמְכֶּרֶת עָבֶד` (ויקרא כה:מב) | [equivalent] | A native is not kept a slave. |
| MAL §44, r vi 44 | (the same) | יַלְקֶה, ימרוט | `לֹא תִרְדֶּה בוֹ בְּפָרֶךְ` (ויקרא כה:מג) | [divergence] | The Torah forbids harsh rule over the debt-slave; MAL lets the creditor beat the pledged Assyrian. |
| LH §118, 1343' | *ul ibbaqqar* | לא יעורער | `וְהִתְנַחַלְתֶּם אֹתָם לִבְנֵיכֶם אַחֲרֵיכֶם לָרֶשֶׁת אֲחֻזָּה לְעֹלָם בָּהֶם תַּעֲבֹדוּ` (ויקרא כה:מו) | [equivalent] | Both separate released kin (§117 / Israelites) from chattel slaves (§118 / foreigners). From memory. |
| LH §171, 2076' | *ana wardūtim* | לעבדות | `וְהִתְנַחַלְתֶּם אֹתָם לִבְנֵיכֶם אַחֲרֵיכֶם לָרֶשֶׁת אֲחֻזָּה` (ויקרא כה:מו) | [divergence] | בתורה העבדים הנכריים עוברים בירושה לבנים; כאן הבנים אסורים לשעבד את בני האמה של אביהם |
| LH §119, 1351' | idem | idem | `אַחֲרֵי נִמְכַּר גְּאֻלָּה תִּהְיֶה לּוֹ אֶחָד מֵאֶחָיו יִגְאָלֶנּוּ` (ויקרא כה:מח) | [equivalent] |  |
| LH §281, 3137' | *ipaṭṭar* | יפטור | `אַחֲרֵי נִמְכַּר גְּאֻלָּה תִּהְיֶה לּוֹ` (ויקרא כה:מח) | [equivalent] | *paṭāru* = `פטר` (T4); `פדה`/`גאל` kept out. |
| MAL §48, r vii 39–42 | *iltēn ina aḫḫēša … aḫātī … apaṭṭar* | את אחד מאחיה … "את אחותי … אפטור" | `אֶחָד מֵאֶחָיו יִגְאָלֶנּוּ` (ויקרא כה:מח) | [equivalent] | "One of her brothers" redeems her; *paṭāru* = `פטר`, `גאל` kept out. Our proposal. |
| LH §32, 708 | *tamkārum ipṭuraššuma* | `התגר פְּטָרוֹ,` | `אוֹ דֹדוֹ אוֹ בֶן דֹּדוֹ יִגְאָלֶנּוּ … אוֹ הִשִּׂיגָה יָדוֹ וְנִגְאָל` (ויקרא כה:מט) | [equivalent] | בתורה הגואל הוא קרוב משפחה, ואחריו האיש עצמו; ב־LH התגר, ואחריו ביתו של השבוי, המקדש וההיכל. מן הזיכרון. |
| LH §281, 3135' | *kasap išqulu ana tamkārim* | את הכסף אשר שקל לתגר | `וְחִשַּׁב עִם קֹנֵהוּ מִשְּׁנַת הִמָּכְרוֹ לוֹ` (ויקרא כה:נ) | [equivalent] | Redemption from a foreign buyer for money. |
| LH §261, 2966' | *ina šattim ištiat* | לשנה אחת | `כִּשְׂכִיר שָׁנָה בְּשָׁנָה יִהְיֶה עִמּוֹ` (ויקרא כה:נג) | [equivalent] | A hired man by the year. |
| LH epil. 3312' | idem | idem | `אִם בְּחֻקֹּתַי תֵּלֵכוּ` (ויקרא כו:ג) | [equivalent] |  |
| LH epil. 3160', 3180'–3182' | *ašrī šulmim … ušarbiṣ mugallitam ul ušaršīšināti* | מקומות שלום … הרבצתי, מחריד לא הבאתי עליהם | `וְנָתַתִּי שָׁלוֹם בָּאָרֶץ וּשְׁכַבְתֶּם וְאֵין מַחֲרִיד` (ויקרא כו:ו) | [equivalent] | Peace, lying down, no one to frighten: the blessing of Lev 26 as the king's deed. *šulmu* = `שלום` [cognate]. Our proposal. |
| LI prol. 65–67 | *lu₂ gu₂-bi-a šudul? nam-ARAD₂ ḫu-mu-ni-ib₂-ak* | אשר על צווארם עול העבדות נעשה | `וָאֶשְׁבֹּר מֹטֹת עֻלְּכֶם וָאוֹלֵךְ אֶתְכֶם קוֹמְמִיּוּת` (ויקרא כו:יג) | [equivalent] | "The yoke of slavery" on the neck, broken by the liberator. *lu₂* and *gu₂* restored; *šudul* read with `?`. |
| LH epil. 3366'–3370' | *imēš … dīn adīnu uptassis* | בזה … את הדין אשר דנתי ביטל | `וְאִם בְּחֻקֹּתַי תִּמְאָסוּ וְאִם אֶת מִשְׁפָּטַי תִּגְעַל נַפְשְׁכֶם … לְהַפְרְכֶם אֶת בְּרִיתִי` (ויקרא כו:טו) | [equivalent] | The curse protasis; `הפר` kept out of the Hebrew (open decision 6). Our proposal. |
| EST 418A | *murṣu tānēḫu dīʾu diliptu* | מחלה, אנחה, חולי ראש, נדודי שינה | `וְהִפְקַדְתִּי עֲלֵיכֶם בֶּהָלָה אֶת הַשַּׁחֶפֶת וְאֶת הַקַּדַּחַת מְכַלּוֹת עֵינַיִם וּמְדִיבֹת נָפֶשׁ` (ויקרא כו:טז) | [equivalent] | Wasting diseases of body and soul. P&W's "malaria" (*dīʾu*) would manufacture `קדחת`. |
| LH epil. 3402' | *gabaraḫ* | חרדת? | `וְהִפְקַדְתִּי עֲלֵיכֶם בֶּהָלָה` (ויקרא כו:טז) | [equivalent] | Uncertain word (CDA "panic?"; CDLI/Streck "rebellion"). |
| EST 454 | same | same | `וְנִגַּפְתֶּם לִפְנֵי אֹיְבֵיכֶם וְרָדוּ בָכֶם שֹׂנְאֵיכֶם` (ויקרא כו:יז) | [equivalent] | Also 26:37. |
| LH epil. 3535'–3536' | *nakiršu elišu lišziz* | ואת אויבו עליו יעמיד | `וְרָדוּ בָכֶם שֹׂנְאֵיכֶם` (ויקרא כו:יז) | [equivalent] | Defeat before the enemy. |
| EST 453 | same | same | `וְשָׁבַרְתִּי אֶת גְּאוֹן עֻזְּכֶם` (ויקרא כו:יט) | [cognate] (*šebēru*) |  |
| EST 528 | same | same | `וְאֶת אַרְצְכֶם כַּנְּחֻשָׁה` (ויקרא כו:יט) | [divergence] | Lev gives the earth bronze (metals reversed); but Lev's `כַּ־` = EST's *kî* "like" (Deut has no comparative). |
| EST 530 | same | same | `וְנָתַתִּי אֶת שְׁמֵיכֶם כַּבַּרְזֶל` (ויקרא כו:יט) | [divergence] | Lev: sky iron. |
| LH epil. 3513' | idem | idem | `וְנָתַתִּי אֶת שְׁמֵיכֶם כַּבַּרְזֶל וְאֶת אַרְצְכֶם כַּנְּחֻשָׁה` (ויקרא כו:יט) | [equivalent] |  |
| EST 529 | same | same | `וְלֹא תִתֵּן אַרְצְכֶם אֶת יְבוּלָהּ` (ויקרא כו:כ) | [equivalent] | Right after the iron and bronze of 26:19. |
| EST 468 | same | same | `וְהִשְׁלַחְתִּי בָכֶם אֶת חַיַּת הַשָּׂדֶה` (ויקרא כו:כב) | [equivalent] |  |
| EST 455–456 | sword + *šaggaštu mūtānu ina libbikunu liškun* | בחרבו … טבח, מגפה בתוככם ישים | `וְשִׁלַּחְתִּי דֶבֶר בְּתוֹכְכֶם` (ויקרא כו:כה) | [equivalent] | Sword, plague and "among you" together (26:25 opens with `חֶרֶב נֹקֶמֶת נְקַם בְּרִית`). `דבר` kept out. Our proposal for the phrase. |
| EST 518 | *Aššur … ina kakkīšu ezzūti lišamqitkunu* | אשור … בנשקו העז יפיל אתכם | `וְהֵבֵאתִי עֲלֵיכֶם חֶרֶב נֹקֶמֶת נְקַם בְּרִית` (ויקרא כו:כה) | [equivalent] | The god's weapon avenges the broken treaty. Our proposal. |
| EST 583–584, 590 | same; *ina qāt nakrikunu* | ביד אויבכם | `וְנִתַּתֶּם בְּיַד אוֹיֵב` (ויקרא כו:כה) | [equivalent] | In the covenant curses. |
| LH epil. 3570'–3571' | *ana qāt nakrīšu limallīšuma* | ביד אויביו תסגיר | `וְנִתַּתֶּם בְּיַד אוֹיֵב` (ויקרא כו:כה) | [equivalent] | Delivery into the enemy's hand. |
| EST 443 | *tinūru* | תנור | `וְאָפוּ עֶשֶׂר נָשִׁים לַחְמְכֶם בְּתַנּוּר אֶחָד` (ויקרא כו:כו) | [cognate] | Famine and the oven; cannibalism follows in 26:29, as in EST. |
| EST 567 | *akalī ina pitti hurāṣi … lušālikū* | לחם בערך זהב … יוליכו | `וְהֵשִׁיבוּ לַחְמְכֶם בַּמִּשְׁקָל וַאֲכַלְתֶּם וְלֹא תִשְׂבָּעוּ` (ויקרא כו:כו) | [equivalent] | Bread weighed like precious metal. Tayinat: bread "taken away" from the land. Our proposal. |
| LH epil. 3392'–3393' | idem | idem | `בְּשִׁבְרִי לָכֶם מַטֵּה לֶחֶם` (ויקרא כו:כו) | [divergence] | The broken staff: royal sceptre in LH, "staff of bread" in Lev (also Ezek 4:16). |
| UN d009 | *tu-ru-na* | תנור | `וְאָפוּ עֶשֶׂר נָשִׁים לַחְמְכֶם בְּתַנּוּר אֶחָד` (ויקרא כו:כו) | [cognate] | *tu-ru-na* (Sum. *šu-rin-na*) → Akk. *tinūru* → `תַּנּוּר`. |
| EST 449 | same | same | `וַאֲכַלְתֶּם בְּשַׂר בְּנֵיכֶם וּבְשַׂר בְּנֹתֵיכֶם תֹּאכֵלוּ` (ויקרא כו:כט) | [cognate] / [equivalent] | 2mp, as the Akkadian imperative *aklā*. |
| EST 550 | same | same | `וַאֲכַלְתֶּם בְּשַׂר בְּנֵיכֶם וּבְשַׂר בְּנֹתֵיכֶם תֹּאכֵלוּ` (ויקרא כו:כט) | [equivalent] |  |
| EST 483 | *pagru* | פגר | `וְנָתַתִּי אֶת פִּגְרֵיכֶם עַל פִּגְרֵי גִּלּוּלֵיכֶם` (ויקרא כו:ל) | [cognate] |  |
| LH epil. 3562'–3566' | *gurun šalmāt ummānātišu ina ṣērim littaddi* | ערמת גוויות חילותיו בערבה תשליך | `וְנָתַתִּי אֶת פִּגְרֵיכֶם עַל פִּגְרֵי גִּלּוּלֵיכֶם` (ויקרא כו:ל) | [equivalent] | Heaps of corpses. |
| LH §133, 1523' | *pagarša* | את גופה | `וְנָתַתִּי אֶת פִּגְרֵיכֶם עַל פִּגְרֵי גִּלּוּלֵיכֶם` (ויקרא כו:ל) | [cognate] | *pagru* = `פֶּגֶר`, אבל בעברית רק גופה מתה; בשורה `גוף` (סטייה מרנדרינג הקורפוס §0) |
| EST 477–478 | same | same | `וְרָדַף אֹתָם קוֹל עָלֶה נִדָּף` (ויקרא כו:לו) | [equivalent] | Pursued by something harmless. Our proposal. |
| EST 535 | *attunu ina pān nakrikunu lā tazzazā* | אתם לפני אויבכם לא תעמדו | `וְלֹא תִהְיֶה לָכֶם תְּקוּמָה לִפְנֵי אֹיְבֵיכֶם` (ויקרא כו:לז) | [equivalent] | `לא` from Tayinat. |
| LH epil. 3572' | *māt nukurtišu* | ארץ איבתו | `וְהֵבֵאתִי אֹתָם בְּאֶרֶץ אֹיְבֵיהֶם` (ויקרא כו:מא) | [equivalent] |  |
| HL HL2 §177, 177.3 | *dam-pu-u-pí-in ku-iš-ki wa-a-ši 20 GÍN KÙ.BABBAR pa-a-i* | בלתי מיומנים מישהו יקנה – עשרים שקל כסף ייתן. | `וְהָיָה עֶרְכְּךָ חֲמִשִּׁים שֶׁקֶל כֶּסֶף` (ויקרא כז:ג) | [equivalent] | ערך אדם בשקלים |
| LH §181, 2334' | *ana ilim iššīma* | לאל הרים, | `וְאִם נְקֵבָה הִוא וְהָיָה עֶרְכְּךָ שְׁלֹשִׁים שָׁקֶל` (ויקרא כז:ד) | [divergence] | בתורה אדם שנדר להקדיש אשה נותן את ערכה בכסף, והאשה אינה עוברת למקדש; כאן הבת עצמה מוקדשת לכל חייה. מן הזיכרון (הקשר להקדשת חנה), השאר הצעה שלנו |
| LH §5, 359 | *enû* | המיר | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ` (ויקרא כז:י) | [equivalent] | Corpus *enû* = `המיר`. |
| LH §26, 627 | *pūḫšu* | `ואת תְּמוּרָתוֹ` | `וְאִם הָמֵר יָמִיר בְּהֵמָה בִּבְהֵמָה וְהָיָה הוּא וּתְמוּרָתוֹ יִהְיֶה קֹּדֶשׁ` (ויקרא כז:י) | [equivalent] | התחליף שבמקום המקורי. הצעה שלנו (המילה בלבד). |
| LH §41, 813 | *upīḫ* | `הֵמִיר` | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ` (ויקרא כז:י) | [equivalent] | איסור ההמרה של מה שהוקדש |
| LH §52, 972 | *riksātišu ul inni* | את תנאיו לא ימיר | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ` (ויקרא כז:י) | [equivalent] | *enû* = `המיר` (corpus §2). |
| IN IN §7, 7.3 | *[šu-ma-aš-ma-az ku-in] ma-ak-la-an-da-an mar-kán ḫar-te-ni na-an-kán an-d[a]* | [ואת זה] הכחוש, [אשר] *פירקתם* [לעצמכם] – אותו פנימה | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ טוֹב בְּרָע אוֹ רַע בְּטוֹב` (ויקרא כז:י) | [equivalent] | התורה אוסרת להחליף בהמה שהוקדשה, טובה ברעה; כאן ההחלפה היא העבירה עצמה. הקבלה טיפולוגית |
| IN IN §7, 7.8 | *[i-ia-at-te-ni na-aš]-ma-an-kán ta-me-e-da-ni UN-ši wa-aḫ-nu-ma-an-zi* | [תעשו], או שאותו לאדם אחר להמיר | `וְאִם הָמֵר יָמִיר בְּהֵמָה בִּבְהֵמָה וְהָיָה הוּא וּתְמוּרָתוֹ יִהְיֶה קֹּדֶשׁ` (ויקרא כז:י) | [equivalent] | החלפת בהמה מוקדשת. הקבלה טיפולוגית |
| IN IN §19, 19.6 | *EGIR.KASKAL-NI-ma-at-kán le-e wa-aḫ-nu-uš-kán-zi ma-a-an-ma-kán ŠÀ KASKAL-NI* | ובדרך אַל ימירו אותו! ואילו אם בתוך הדרך | `לֹא יַחֲלִיפֶנּוּ וְלֹא יָמִיר אֹתוֹ טוֹב בְּרָע אוֹ רַע בְּטוֹב` (ויקרא כז:י) | [equivalent] | איסור ההמרה של בהמה שהוקדשה. ההקבלה טיפולוגית, וקרובה מאוד: אותו פועל ("המיר"), אותה הונאה (המפוטם בכחוש, 19.8–19.10) |
| HL HL2 §183, 183.3 | *ŠA 1 IKU A.ŠÀ ši-iš-šu-ú-ra-aš 3 [* | של אִיקוּ אחד שדה מושקה(?) – שלושה […] | `וְהָיָה עֶרְכְּךָ לְפִי זַרְעוֹ זֶרַע חֹמֶר שְׂעֹרִים בַּחֲמִשִּׁים שֶׁקֶל כָּסֶף` (ויקרא כז:טז) | [equivalent] | מחיר קבוע לשדה: בתורה לפי הזרע, כאן לפי השטח והסוג |
| LH §177, 2238' | *makkūrum ana bēlišu* | הנכסים לבעליהם | `בִּשְׁנַת הַיּוֹבֵל יָשׁוּב הַשָּׂדֶה לַאֲשֶׁר קָנָהוּ מֵאִתּוֹ לַאֲשֶׁר לוֹ אֲחֻזַּת הָאָרֶץ` (ויקרא כז:כד) | [divergence] | גם בתורה הנכס שב לבעליו, אבל ביובל ואחרי שנים של שימוש; כאן מיד, והקונה מפסיד את כספו |

### Numbers

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LI prol. 80 | *e₂ ad-da* | בית האב | `לְמִשְׁפְּחֹתָם לְבֵית אֲבֹתָם` (במדבר א:ב) | [equivalent] | "The father's house" (*bīt abim*) as the unit of obligation. |
| LH prol. 52 | *nibīt* | קרוא | `אֵלֶּה קְריּאֵי (קְרוּאֵי) הָעֵדָה` (במדבר א:טז) | [equivalent] | "Called" = appointed. Our proposal. |
| IN IN §6, 6.18 | *[ ku-i-ša-a]n(?) pé-e-ḫu-te-ez-zi-ma na-at-ši SAG.DU-aš ag-ga-t[ar]* | ואילו [מי ש]יוליך [אותו]? – וזה לו מות־ראש! | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר א:נא) | [divergence] | בתורה מת הזר עצמו; כאן גם מי שהכניס אותו. אחריות המארח היא הממצא |
| IN IN §10, 10.1 | *an-da-ma-za šu-me-eš ku-i-⸢e⸣-eš LÚ{MEŠ} É˽DINGIR-LIM nu-za ḫa-li-i[a-aš]* | ונוסף על כך: אתם, אשר אנשי בית הָאֵל (אתם) – המשמרת: | `וְהַחֹנִים לִפְנֵי הַמִּשְׁכָּן … שֹׁמְרִים מִשְׁמֶרֶת הַמִּקְדָּשׁ לְמִשְׁמֶרֶת בְּנֵי יִשְׂרָאֵל; וְהַזָּר הַקָּרֵב יוּמָת` (במדבר ג:לח) | [equivalent] | משמרת הקודש. זו ההקבלה המרכזית של מילגרום (Milgrom 1970): משמרת הלילה החתית מול "משמרת" הכוהנים והלויים; לדעתו ההקבלה טיפולוגית – שני מוסדות דומים של שמירת בית האל – ולא קשר ישיר |
| IN IN §2, 2.1 | *nam-ma NIND[A.GU]R₄.RA{ḪI.A} UD-MI ku-i-e-eš e-eš-ša-an-zi na-at pár-[k]u-wa-iš a-ša-an-du* | ועוד: אלה אשר עושים את הלחמים העבים היומיים – טהורים יהיו! | `לֶחֶם הַתָּמִיד` (במדבר ד:ז) | [divergence] | הלחם היומי של האל החתי אינו לחם הפנים: הוא מזונו היומי של האל, הנאכל (במסגרת הפולחן) ולא מונח לפניו; ולכן `לחם עבה יומי` ולא מונחי התורה |
| LH §102, 1144' | *qaqqad kaspim* | `את ראש הכסף` | `וְהֵשִׁיב אֶת אֲשָׁמוֹ בְּרֹאשׁוֹ` (במדבר ה:ז) | [equivalent] | "ראש" = הקרן, באותו דימוי בשתי השפות (*qaqqadu* אינו בן־שורש של `ראש`) |
| MAL §24, o iii 41–42 | *ramānša taltadad* | את עצמה משכה | `אִישׁ אִישׁ כִּי תִשְׂטֶה אִשְׁתּוֹ וּמָעֲלָה בוֹ מָעַל` (במדבר ה:יב) | [equivalent] | The wife who "turns aside". |
| LH §129, 1472' | *ittaṣbat* | נתפשה | `וְהִוא לֹא נִתְפָּשָׂה` (במדבר ה:יג) | [equivalent] | F23; caught here, "not caught" in Num 5 (= §131–132). |
| LH §131, 1499' | *lā iṣṣabit* | לא נתפשה | `וְעֵד אֵין בָּהּ וְהִוא לֹא נִתְפָּשָׂה` (במדבר ה:יג) | [equivalent] | The same legal situation and the same Hebrew verb (F23). From memory. |
| LE §28, 96 | *iṣṣabbatu* | תיתפש | `וְהִוא לֹא נִתְפָּשָׂה` (במדבר ה:יג) | [equivalent] | *ṣabātu* N = `נתפש`, the word of the suspected wife. |
| MAL §17, o ii 69 | *šēbūtu laššu* | עדים אין | `וְעֵד אֵין בָּהּ וְהִוא לֹא נִתְפָּשָׂה` (במדבר ה:יג) | [equivalent] | No witness → ordeal. From memory (the river/Num 5 comparison). |
| LH §131, 1496' | *mussa ubbiršima* | בעלה האשימה | `וְעָבַר עָלָיו רוּחַ קִנְאָה וְקִנֵּא אֶת אִשְׁתּוֹ` (במדבר ה:יד) | [equivalent] / [divergence] | LH: husband's accusation → oath (§131), others' → river (§132); Num 5: one procedure. |
| MAL §1, o i 9–13 | *baʾʾerūta … ile išaʾʾulū* | בירור […] את האל ישאלו | `וְהֵבִיא הָאִישׁ אֶת אִשְׁתּוֹ אֶל הַכֹּהֵן` (במדבר ה:טו) | [divergence] | Without proof the case goes to the god: divination here, the ordeal of the suspected wife in Num 5. Our proposal. |
| EST 646 | same | same | `וּבְיַד הַכֹּהֵן יִהְיוּ מֵי הַמָּרִים הַמְאָרְרִים` (במדבר ה:יח) | [equivalent] | The "bitter, cursing water" of the oath ordeal: `מר` + `ארר`. Our proposal. |
| MAL §40, r v 45 | *qaqqassina lā pattu* | ראשן [לא פתוח] | `וּפָרַע אֶת רֹאשׁ הָאִשָּׁה` (במדבר ה:יח) | [equivalent] | The uncovered head as disgrace (the suspected wife); *puttû* (= פתח) is not `פרע`. Restored. |
| LH §131, 1500' | *nīš ilim izakkar* | את חיי האל תזכיר | `וְהִשְׁבִּיעַ אֹתָהּ הַכֹּהֵן` (במדבר ה:יט) | [equivalent] / [divergence] | She swears herself, without priest or water. |
| MAL §22, o iii 3 | *mā šumma anīkūšini* | "אם באתי [עליה]" | `אִם לֹא שָׁכַב אִישׁ אֹתָךְ … הִנָּקִי` (במדבר ה:יט) | [equivalent] | Exculpatory oath in `אִם`-syntax: the man swears here, the woman in Num 5. |
| EST 561 | *tamītu annītu* | השבועה הזאת | `וְהִשְׁבִּיעַ הַכֹּהֵן אֶת הָאִשָּׁה בִּשְׁבֻעַת הָאָלָה` (במדבר ה:כא) | [equivalent] | The ordeal is an oath. |
| EST 521–522 | *mê lā balāṭi lišqikunu aganutillâ limallikunu* | מי לא־חיים ישקה אתכם; בהדרוקן ימלא אתכם | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ לַצְבּוֹת בֶּטֶן` (במדבר ה:כב) | [equivalent] | Water given to drink that swells the belly. Tayinat has another verb for *lišqikunu*. Our proposal. |
| EST 560–562 | *kî ša akalī u karānī ina libbi errēkunu errabūni kî hannî tamītu annītu ina libbi errēkunu … lušēribū* | כאשר לחם ויין אל תוך מעיכם באים, ככה – את השבועה הזאת אל תוך מעיכם … יביאו | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ לַצְבּוֹת בֶּטֶן` (במדבר ה:כב) | [equivalent] | Oath (*tamītu* / `שבועה`), "enter" (*erēbu* / `בוא`), "entrails" (*erru* / `מעיים`): the three elements of the ordeal. `[ככה]` restored (not in Tayinat). Known in the literature (from memory). |
| EST 622–625 | same | same | `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ` (במדבר ה:כב) | [equivalent] | The oath-curse entering the body (cf. 560–562, part 6). From memory. |
| EST 562 | *lušēribū* | יביאו | `וּבָאוּ בָהּ הַמַּיִם הַמְאָרְרִים לְמָרִים` (במדבר ה:כד) | [equivalent] | Also 5:27. |
| EST 522 | *aganutillâ limallikunu* | בהדרוקן ימלא אתכם | `וְצָבְתָה בִטְנָהּ וְנָפְלָה יְרֵכָהּ` (במדבר ה:כז) | [equivalent] | Our proposal. |
| LH §2, 317–319 | *ana Id illak, Id išalli* | אל הנהר ילך, אל הנהר יצלול | `וְהִשְׁקָהּ אֶת הַמַּיִם וְהָיְתָה אִם נִטְמְאָה … וּבָאוּ בָהּ הַמַּיִם הַמְאָרְרִים לְמָרִים` (במדבר ה:כז) | [divergence] | Water ordeal where there are no witnesses; LH: the divine River decides by drowning or release; Num 5: holy water, the priest, an *ālâ*. Cf. LH §132. From memory. |
| LH §132, 1514'–1515' | *Id išalli* | אל הנהר תצלול | `וְהִשְׁקָהּ אֶת הַמַּיִם וְהָיְתָה אִם נִטְמְאָה` (במדבר ה:כז) | [divergence] | Water decides in both: the divine River vs. the holy water. From memory. |
| MAL §17, o ii 71 | *ana Id illukū* | אל הנהר ילכו | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [divergence] | Water ordeal: the men go to the River; in Num 5 the suspected wife drinks. |
| MAL §22, o iii 8–10 | *ana Id illak … šumma ina Id ittūra* | אל הנהר ילך … אם מן הנהר שב | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [divergence] | The man undergoes the River ordeal (in Num 5 the woman); refusal = guilt. |
| MAL §24, o iii 67 | *ana Id illukū* | אל הנהר ילכו | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [divergence] | The householder's denial tested by the River. |
| MAL §25, o iii 93–94 | *ana Id u māmīte lā iṣṣabbutū* | אל הנהר ואל האלה לא ייתפשו | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [divergence] | River ordeal and oath waived for the brothers. |
| IN IN §18, 18.20 | *ZI-aš ar-ḫa e-ku-ut-te-ni nu-za ma-a-an pár-ku-wa-e-eš* | של הנפש עד תום תשתו! ואם טהורים (אתם) – | `וְהִשְׁקָהּ אֶת הַמַּיִם` (במדבר ה:כז) | [equivalent] | הסוטה: מבחן שתייה לפני האל, שבו האשם נענש והזכאי ניצל. ההקבלה טיפולוגית |
| LH §2, 326 | *utebbibaššu* | זיככו | `וְאִם לֹא נִטְמְאָה הָאִשָּׁה וּטְהֹרָה הִוא וְנִקְּתָה` (במדבר ה:כח) | [equivalent] | *ebēbu* "be pure / be clear" covers both Hebrew verbs; `נקה` reserved. |
| LH §131, 1502' | *ana bītiša itâr* | ולביתה תשוב | `וְאִם לֹא נִטְמְאָה הָאִשָּׁה וּטְהֹרָה הִוא וְנִקְּתָה וְנִזְרְעָה זָרַע` (במדבר ה:כח) | [equivalent] | The cleared wife resumes her marriage. |
| MAL §2, o i 19–20 | *sinnilta šīt aranša tanašši* | האשה ההיא את עונה תשא | `וְהָאִשָּׁה הַהִוא תִּשָּׂא אֶת עֲוֹנָהּ` (במדבר ה:לא) | [equivalent] | Nearly word for word (*našû* = נשא [cognate]; *arnu* = עון); in Num 5 it closes the ordeal law, here the law of the woman's insolent speech. |
| MAL §32, o iv 53–55 | *ḫubullē arna u ḫīṭa ša mutiša tanašši* | את החובות, את העון ואת החטא של בעלה תשא | `וְהָאִשָּׁה הַהִוא תִּשָּׂא אֶת עֲוֹנָהּ` (במדבר ה:לא) | [equivalent] | The same formula (*arnu* + *našû*, F37), here for her **husband's** guilt. |
| UN §14, 264–273 | *dam ĝuruš-a-da ur₂-ra nu₂-a lu₂ i₃-da-la₂, id₂-de₃ u₃-um-zalag-zalag … 1/3 ma-na* | את אשת בחור (כי) בחיק שכבה איש האשים, והנהר משזיככה … שליש מנה כסף ישקול | `וְנִקָּה הָאִישׁ מֵעָוֹן; וְהָאִשָּׁה הַהִוא תִּשָּׂא אֶת עֲוֹנָהּ` (במדבר ה:לא) | [divergence] | The suspected wife tried by a divine water ordeal, as the Sotah; but the accuser is another man and pays when she is cleared (the husband in Num 5 is not liable). Part of the last line restored. |
| LH prol. 242–243 | *munawwer pānī Tišpak* | המאיר את פני תישפך | `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ` (במדבר ו:כה) | [divergence] | Inverted: the king brightens the god's face. Our proposal. |
| LI prol. 11–12 | *igi saĝ-ki zalag-ga-ni-še₃ mu-un-ši-in-bar-re-eš-a* | את העין אל מצחה המאיר הפנו | `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ` (במדבר ו:כה) | [equivalent] | The gods' favour as a "shining brow" turned toward the goddess (and Enlil's in the blessing, epil. 457′–458′). "The eye" restored. |
| LI epil. 457′–458′ | *saĝ-ki zalag-ga {d}en-lil₂-la₂-ka an-ta ḫe₂-eb-gi₄* | ואת המצח המאיר של אנליל מן השמים ישיב (אליו) | `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ` (במדבר ו:כה) | [equivalent] | **The god's shining face turned toward the blessed** – the priestly blessing's image. |
| LI epil. 457′–458′ | *saĝ-ki zalag-ga {d}en-lil₂-la₂-ka an-ta ḫe₂-eb-gi₄* | ואת המצח המאיר של אנליל מן השמים ישיב (אליו) | `יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם` (במדבר ו:כו) | [equivalent] | "Turning" (*gi₄*) / "lifting" the face toward someone. |
| LH §271, 3040' | *liātim ereqqam* | בקר, עגלה | `שֵׁשׁ עֶגְלֹת צָב וּשְׁנֵי עָשָׂר בָּקָר` (במדבר ז:ג) | [equivalent] |  |
| IN IN §2, 2.1 | *nam-ma NIND[A.GU]R₄.RA{ḪI.A} UD-MI ku-i-e-eš e-eš-ša-an-zi na-at pár-[k]u-wa-iš a-ša-an-du* | ועוד: אלה אשר עושים את הלחמים העבים היומיים – טהורים יהיו! | `וְהֶעֱבִירוּ תַעַר עַל כָּל בְּשָׂרָם וְכִבְּסוּ בִגְדֵיהֶם וְהִטֶּהָרוּ` (במדבר ח:ז) | [equivalent] | טהרת הלויים: גילוח, כביסת בגדים, טהרה – אותם שלושה צעדים כבשורות 2.2–2.3. ההקבלה טיפולוגית: החתים לא פגשו את ישראל; שני הכתבים מעידים על תפיסה משותפת של "טהרה" כניקיון גוף ובגד של מי שניגש אל האל |
| EST 389 | same | same | `אִישׁ אִישׁ כִּי יִהְיֶה טָמֵא לָנֶפֶשׁ … וְעָשָׂה פֶסַח לַיהוָה` (במדבר ט:י) | [equivalent] | Impurity as a lawful excuse from a mandatory rite; the clean who abstains is cut off (9:13). Rests on Tayinat's *lā ellu*. Our proposal. |
| IN IN §9, 9.8 | *pé-ra-an na-aš-šu ku-ša-a-ta na-aš-šu KASKAL-aš na-aš-ma ta-ma-i* | לפניי, או מֹהַר, או דרך, או אחר – | `אוֹ בְדֶרֶךְ רְחֹקָה לָכֶם` (במדבר ט:י) | [equivalent] | הדרך מתירה בתורה לדחות את הפסח בחודש; כאן היא אינה מתירה דבר. ההקבלות טיפולוגיות, והן מראות את העולם המשותף: עונות החקלאות, הנישואים והמסע – אלה מה שמפריע לחגים |
| IN IN §9, 9.2 | *⸢EZEN₄⸣-aš me-e-ḫu-u-ni UL e-eš-ša-at-te-ni nu EZEN₄ ḫa-me-eš-ḫ[a-an-da-aš]* | לא בזמן החג תעשו, ואת חג הָאָבִיב | `וְהָאִישׁ אֲשֶׁר הוּא טָהוֹר וּבְדֶרֶךְ לֹא הָיָה וְחָדַל לַעֲשׂוֹת הַפֶּסַח וְנִכְרְתָה הַנֶּפֶשׁ הַהִוא מֵעַמֶּיהָ: כִּי קָרְבַּן יְהוָה לֹא הִקְרִיב בְּמֹעֲדוֹ` (במדבר ט:יג) | [divergence] | גם בתורה חג שלא נעשה "במועדו" הוא עבירה; אך שם האדם הפרטי, וכאן אנשי בית האל, המקבלים כסף מן המביא כדי לדחות |
| HL HL2 §101, 101.4 | *GÍN.G]ÍN KÙ.BABBAR A-NA 1 ZU₉ SUM.SIKIL{SAR} 1 GÍN.GÍN KÙ.BABBAR* | [… שקל] כסף, לשן אחת של בָּצָל(?) שקל אחד כסף, | `וְאֶת הַבְּצָלִים וְאֶת הַשּׁוּמִים` (במדבר יא:ה) | [equivalent] | ירקות הבית; הזיהוי (בצל או שום) אינו ודאי |
| LH epil. 3192' | *ina utliya … ukīl* | בחוצני … החזקתי | `שָׂאֵהוּ בְחֵיקֶךָ כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | [divergence] | Moses refuses to carry the people in his bosom; Hammurabi holds them in his lap. Our proposal. |
| LH epil. 3259' | *wālidim* | יולד | `הֶאָנֹכִי הָרִיתִי אֵת כָּל הָעָם הַזֶּה אִם אָנֹכִי יְלִדְתִּיהוּ` (במדבר יא:יב) | [divergence] | *walādu* = `ילד` [cognate]; Moses denies "begetting" the people. Our proposal. |
| IN IN §8, 8.2 | *šu-ma-aš ḫar-te-⸢ni⸣ nu-za {LÚ.MEŠ}ÙMMEDA-KU-NU nu-za DINGIR{MEŠ}-aš KÙ.BABBAR-i KÙ.SI₂₂-i* | אתם מחזיקים – אתם אֹמְנֵיו(?) – ולכם, של הָאֵלִים – מן הכסף, הזהב, | `כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | [equivalent] | ה"אומן" הוא מי שמגדל ושומר דבר שאינו שלו |
| LH prol. 84 | *wašrum* | העניו | `וְהָאִישׁ מֹשֶׁה עָנָו מְאֹד` (במדבר יב:ג) | [equivalent] | Humility of the lawgiver. Our proposal. |
| HL HL2 §101, 101.1 | *] {GIŠ}ma-aḫ-la-an na-aš-ma {GIŠ}kar-pí-na-an* | […] זמורה או (עץ) קַרְפִּינָה | `וַיִּכְרְתוּ מִשָּׁם זְמוֹרָה וְאֶשְׁכּוֹל עֲנָבִים אֶחָד` (במדבר יג:כג) | [equivalent] | *maḫla-* – ענף הגפן |
| LH epil. 3366' | *errētiya imēš* | את מארותי בזה | `כִּי דְבַר יְהוָה בָּזָה וְאֶת מִצְוָתוֹ הֵפַר` (במדבר טו:לא) | [equivalent] | Despising + annulling (3370'), the same pair. Our proposal. |
| IN IN §3, 3.3 | *UL-at-kán A-*NA* DAM-ŠÚ D[UMU{MEŠ}-ŠU N]UMUN-ŠU MÁŠ-ŠU ⸢ARAD⸣{MEŠ}-Š[U GÉM]E{MEŠ}-ŠU ⸢GU₄{ḪI.A}-ŠÚ⸣* | הלא אותו – באשתו, [בבניו], בזרעו, במשפחתו, בעבדיו, [באֲמָהוֹתָיו], בשווריו, | `וַתִּבְלַע אֹתָם וְאֶת בָּתֵּיהֶם וְאֵת כָּל הָאָדָם אֲשֶׁר לְקֹרַח וְאֵת כָּל הָרְכוּשׁ` (במדבר טז:לב) | [equivalent] | ההקבלות טיפולוגיות: אין קשר ספרותי, אך אותה תפיסה של "בית" כיחידה אחת לפני האל |
| IN IN §6, 6.17 | *[ a-ra-aḫ-zé-n]a-aš Ú-UL-aš {URU}ḫa-at-tu-ša-aš DUMU.⸢LÚ.U₁₉⸣.L[U DING]IR{MEŠ}-aš ⸢ti⸣-[ia-zi]* | [חיצוני] (הוא), לא בן אדם של חתושה הוא – אֶל הָאֵלִים ייכ[נס], | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר יח:ז) | [equivalent] | `וְזָר לֹא יִקְרַב אֲלֵיכֶם` (במדבר יח:ד) – הזר המתקרב אל הקודש מת. זו ההקבלה המרכזית שהעלה מילגרום (Milgrom 1970): מילגרום טען להקבלה טיפולוגית, לא לקשר ישיר |
| IN IN §10, 10.24 | *na-aš-ta ku-e-da-ni ḫa-a-li wa-aš-túl an-da ki-i-ša* | ומי שבמשמרתו ייעשה חטא – | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר יח:ז) | [equivalent] | מילגרום (1970): השומר שבמשמרתו נכנס זר – אחראי בנפשו |
| IN IN §6, 6.11 | *[{NINDA}pí-ia-an-ta-al-la-an-ma A-NA DAM]{MEŠ}-KU!-NU DUMU{MEŠ}-KU!-NU SAG.GÉME.ARAD{MEŠ}-KU!-[NU le-e]* | [ואילו את לחם־המתנה – לנשי]כם, לבניכם, לַאֲמָהוֹתֵיכֶם ולעבדי[כם – אַל] | `לְךָ נְתַתִּים וּלְבָנֶיךָ וְלִבְנֹתֶיךָ אִתְּךָ לְחָק עוֹלָם: כָּל טָהוֹר בְּבֵיתְךָ יֹאכַל אֹתוֹ` (במדבר יח:יא) | [divergence] | בתורה מתנות הכהונה ניתנות לכוהן ולבני ביתו; לפי השחזור של CHD, לחם־המתנה החתי אסור לנשים, לבנים ולעבדים. השחזור תלוי ב־*lē* המשוחזר; S&B קראו את ההפך |
| LH epil. 3613' | *kīma nišik mūtim* | כנשיכת המות | `וַיְנַשְּׁכוּ אֶת הָעָם` (במדבר כא:ו) | [cognate] | *našāku* = נשך. |
| LH epil. 3437'–3439' | *ina pī Enlil … lišaškin* | בפי אנליל … תשים | `וַיָּשֶׂם יְהוָה דָּבָר בְּפִי בִלְעָם` (במדבר כג:ה) | [cognate] | *šakānu* = שׂם; word put in a mouth – in Num to bless instead of curse. Our proposal. |
| LH epil. 3636'–3638' | *Enlil ina pīšu ša lā uttakkaru* | אנליל, בפיו אשר לא יוסר | `הַהוּא אָמַר וְלֹא יַעֲשֶׂה וְדִבֶּר וְלֹא יְקִימֶנָּה` (במדבר כג:יט) | [equivalent] | The unalterable divine word, in the Balaam curse story. Our proposal. |
| EST 241 | *šarrūtu … ittiši* | ואת המלכות … ישא | `וְתִנַּשֵּׂא מַלְכֻתוֹ` (במדבר כד:ז) | [cognate] | *našû* = `נשא`. |
| EST 412 | *šipir nikilti* | מלאכת נכל | `בְּנִכְלֵיהֶם אֲשֶׁר נִכְּלוּ לָכֶם` (במדבר כה:יח) | [cognate] | *nikiltu* (*nakālu*) ~ `נכל`. |
| MALB §1, o ii 14 | *puršu iṣalli* | `את הפּוּר שלו יפיל` | `אַךְ בְּגוֹרָל יֵחָלֵק אֶת הָאָרֶץ` (במדבר כו:נה) | [equivalent] | Land divided by lot; cf. Josh 18:10. |
| LH §172, 2101' | *kīma aplim ištēn* | כיורש אחד | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ` (במדבר כז:ח) | [absent] | בסדר הנחלה של התורה (במדבר כז:ח–יא) אין חלק לאלמנה. מן הזיכרון |
| LH §180, 2325' | *aplim ištēn* | יורש אחד | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ` (במדבר כז:ח) | [divergence] | בתורה הבת יורשת רק כשאין בן; כאן הבת המוקדשת שלא קיבלה שלוחים לוקחת חלק כאחד האחים – אבל רק להנאה, לכל ימי חייה (2327'–2330') |
| LI §22, 264′–267′ | *ereš-diĝir lukur u₃ nu-gig ḫe₂-a ibila-gin₇-nam e₂ i₃-ba-e-ne* | אוגבבתו, נדיתו או קדשה תהא, כיורש היא, את הבית יחלוקו | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ` (במדבר כז:ח) | [divergence] | Daughters inherit: in the Torah only without sons; in LI the priestess-daughter shares "as an heir" with her brothers. |
| UN b008–b011 | *lu₂ ba-uš₂ dumu-nita₂ nu-un-tuku dumu-munus dam nu-un-tuku-a ibila-a-ni ḫe₂-a* | אם איש מת, בן זכר אין לו, בת אשר לא נישאה לבעל יורשתו תהיה | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ וְהַעֲבַרְתֶּם אֶת נַחֲלָתוֹ לְבִתּוֹ` (במדבר כז:ח) | [equivalent] | **The daughters of Zelophehad's law, in the same order of clauses** ("a man died / no son / the daughter inherits"), c. 1,000 years earlier; single witness (UM 55-21-071). |
| UN e025 | *dam-PI-ni ibila 1-gin₇ e₂-a ḫe₂-dim₂* | אשתו הבחירה כיורש אחד בבית תיעשה | `אִישׁ כִּי יָמוּת וּבֵן אֵין לוֹ` (במדבר כז:ח) | [absent] | The widow inherits like one heir; the Torah's order of succession (Num 27:8–11) has no widow. |
| MAL §26, o iii 101–102 | *šumma mārē mutiša laššu šītma talaqqe* | אם בני בעלה אין, היא תקח | `וְאִם אֵין לוֹ בַּת וּנְתַתֶּם אֶת נַחֲלָתוֹ לְאֶחָיו` (במדבר כז:ט) | [divergence] | The widow takes her husband's gifts when there are no sons; in the Torah the wife never inherits. |
| UN prol. 29 | *sa₂-du₁₁* | קורבן קבוע | `כְּבָשִׂים בְּנֵי שָׁנָה תְמִימִם שְׁנַיִם לַיּוֹם עֹלָה תָמִיד` (במדבר כח:ג) | [equivalent] | *sattukku* "the regular (offering)" ~ `תָּמִיד`; here for the king's statue. |
| UN prol. 25–29 | *nidba iti-da … sa₂-du₁₁-še₃* | מנחה? לירח … לקורבן קבוע | `זֹאת עֹלַת חֹדֶשׁ בְּחָדְשׁוֹ לְחָדְשֵׁי הַשָּׁנָה` (במדבר כח:יד) | [equivalent] | Monthly and regular (*sattukku*) offerings: barley, sheep, butter; `תמיד` kept for Num 28:3. |
| EST 287 | same | same | `אוֹ הִשָּׁבַע שְׁבֻעָה` (במדבר ל:ג) | [equivalent] | Internal object. |
| EST 376 | *ina sīqikunu tarakkasāni* | בחיקכם תצררו | `לֶאְסֹר אִסָּר עַל נַפְשׁוֹ לֹא יַחֵל דְּבָרוֹ` (במדבר ל:ג) | [divergence] | "Binding" vocabulary of the oath: there the swearer binds himself, here a counter-binding rite. Weak; our proposal. |
| LH §178, 2240' | *šumma ugbabtum nadītum* | אם אוגבבתו, נדיתו | `וְאִשָּׁה כִּי תִדֹּר נֶדֶר לַיהוָה וְאָסְרָה אִסָּר בְּבֵית אָבִיהָ בִּנְעֻרֶיהָ` (במדבר ל:ד) | [divergence] | בתורה האשה המקודשת בנדר נשארת תחת אביה, ואביו יכול להפר; כאן נשים שהוקדשו (לרוב בידי האב) למעמד קבוע, עם רכוש משלהן |
| MAL §33, o iv 69 | *almattu šīt* | אלמנה היא | `וְנֵדֶר אַלְמָנָה וּגְרוּשָׁה כֹּל אֲשֶׁר אָסְרָה עַל נַפְשָׁהּ יָקוּם עָלֶיהָ` (במדבר ל:י) | [equivalent] | The widow as an independent legal person. |
| EST 376, 378 | *māmīt pašāru* | התרת אלה; אלה תתירו | `וְאִם הָפֵר יָפֵר אֹתָם אִישָׁהּ … אִישָׁהּ הֲפֵרָם וַיהוָה יִסְלַח לָהּ` (במדבר ל:יג) | [divergence] | The Torah knows a lawful annulment of vows and of the `אִסָּר` "bond" (30:3); the treaty forbids any release. Our proposal. |
| LH §33, 731 | *ṣāb nisḫātim* | `צבא נְסוּחִים?` | `הֵחָלְצוּ מֵאִתְּכֶם אֲנָשִׁים לַצָּבָא` (במדבר לא:ג) | [cognate] | *ṣābu* הוא בן־השורש של `צָבָא` (אנשי צבא). מן הזיכרון (האטימולוגיה מקובלת). |
| LH §26, 619 | *šumma lu rēdûm* | `אם בין חייל` | `וַיִּמָּסְרוּ מֵאַלְפֵי יִשְׂרָאֵל אֶלֶף לַמַּטֶּה … חֲלוּצֵי צָבָא` (במדבר לא:ה) | [equivalent] | גיוס לפי מכסה |
| LH §34, 748 | *ana dannim ištarak* | `לֶחָזָק מסר,` | `וַיִּמָּסְרוּ מֵאַלְפֵי יִשְׂרָאֵל` (במדבר לא:ה) | [equivalent] | אותו פועל עברי במובן אחר ("הופרשו"). מן הזיכרון. |
| LH §129, 1469' | *zikarim* | זכר | `וְכָל אִשָּׁה יֹדַעַת אִישׁ לְמִשְׁכַּב זָכָר` (במדבר לא:יז) | [cognate] | *zikaru* = `זָכָר`, the male as sexual partner. |
| LI §33, 404′ | *ĝeš₃ i₃-zu* | זכר ידעה | `יֹדַעַת אִישׁ לְמִשְׁכַּב זָכָר` (במדבר לא:יז) | [equivalent] | "Knowing a male" (*ĝeš₃ zu* = *zikaram idû*, LH §130 1482′–1483′ `אשר זכר לא יָדְעָה`). |
| LH §130, 1483' | *ša zikaram lā idû* | אשר זכר לא ידעה | `וְכֹל הַטַּף בַּנָּשִׁים אֲשֶׁר לֹא יָדְעוּ מִשְׁכַּב זָכָר` (במדבר לא:יח) | [cognate] | Both roots shared (*idû* = ידע, *zikaru* = זכר). Our proposal (the pair). |
| UN prol. 3, 24 | *alan ur-{d}namma* | צלם אור־נמה | `וְאֵת כָּל צַלְמֵי מַסֵּכֹתָם תְּאַבֵּדוּ` (במדבר לג:נב) | [cognate] / [divergence] | *alan* = *ṣalmu* = `צֶלֶם`; the royal statue in the god's temple receives monthly offerings (24–30); in the Torah `צלם` is an idol to be destroyed. Restored (ex01 broken). |
| UN §1, 182 | *saĝ ĝeš ra* | ראש בעץ מחץ | `אוֹ בִּכְלִי עֵץ יָד אֲשֶׁר יָמוּת בּוֹ הִכָּהוּ וַיָּמֹת רֹצֵחַ הוּא` (במדבר לה:יח) | [equivalent] | The Sumerian idiom for homicide is "strike the head with wood"; Numbers' list of murder weapons has `כְלִי עֵץ`. |
| UN 320–324 | *niĝ₂ {ĝeš}tukul-a-gin₇ 1/3 ma-na* | בדבר כנשק – שליש מנה | `אוֹ בִּכְלִי עֵץ יָד אֲשֶׁר יָמוּת בּוֹ הִכָּהוּ` (במדבר לה:יח) | [equivalent] | The instrument (as a weapon / bare-handed) decides the penalty, as in Numbers. |
| EST 577 | *bēl dāmē* | בעלי דמים | `גֹּאֵל הַדָּם הוּא יָמִית אֶת הָרֹצֵחַ` (במדבר לה:יט) | [equivalent] | Our proposal. |
| MALB §2, o ii 16–17 | *napšāte igmur ana bēl napšāte iddunūš* | `נפשות כילה, לבעל הנפשות יתנוהו` | `גֹּאֵל הַדָּם הוּא יָמִית אֶת הָרֹצֵחַ` (במדבר לה:יט) | [equivalent] | "The owner of the life(s)" = the avenger; the Akkadian word is not "redeemer". |
| LH §206, 2565'–2566' | *ina idû lā amḫaṣu* | "בדעת לא מחצתי" | `וְאִם בְּפֶתַע בְּלֹא אֵיבָה הֲדָפוֹ` (במדבר לה:כב) | [equivalent] |  |
| LH §1, 306 | *nērtam* | רצח | `כָּל מַכֵּה נֶפֶשׁ לְפִי עֵדִים יִרְצַח אֶת הָרֹצֵחַ` (במדבר לה:ל) | [equivalent] | A murder charge needs witnesses in both. |
| LH §3, 343 | *dīn napištim* | דין נפשות | `וְעֵד אֶחָד לֹא יַעֲנֶה בְנֶפֶשׁ לָמוּת` (במדבר לה:ל) | [cognate] | *napištu* = `נפש`; = Mishnaic `דיני נפשות` (Sanh. 4). |
| LH §24, 599 | *napištum* | נפש | `וְלֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ` (במדבר לה:לא) | [divergence] | LH: the city pays a mina for the life; the Torah: no money for a life. |
| LH §207, 2573' | *mišil mana kaspam* | חצי מנה כסף | `וְלֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ` (במדבר לה:לא) | [divergence] | Money for a life. |
| LE §47a, 150–151 | *uštamit … išaqqal* | המית … ישקול | `וְלֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ אֲשֶׁר הוּא רָשָׁע לָמוּת` (במדבר לה:לא) | [divergence] | LE ransoms an unintended killing with silver (the same sum as the goring ox, §54); the Torah sends the unintentional killer to a city of refuge (Exod 21:13) and forbids ransom for the murderer. |
| MAL §10, o i 101–104 | *pānūšuma idūakšunu pānūšuma immangar mimmûšunu ilaqqe* | (אם) פניו (לכך), [יהרגם]; … יתרצה, [את רכושם] יקח | `וְלֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ אֲשֶׁר הוּא רָשָׁע לָמוּת` (במדבר לה:לא) | [divergence] | The householder chooses death or a settlement; the Torah forbids ransom for a murderer. Partly restored. |
| MALB §2, o ii 18–21 | *pānūšuma … idūakšu u pānūšuma immangar u zittišu ilaqqe* | `(אם) פניו (לכך) … יהרגהו, ו(אם) פניו (לכך) יתרצה, ואת חלקו יקח` | `וְלֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ אֲשֶׁר הוּא רָשָׁע לָמוּת` (במדבר לה:לא) | [divergence] | The avenger chooses between death and composition (the killer's share); the Torah forbids ransom. Same choice as MAL A §10 (o i 100–104). |
| HL HL1 §1, 3 | *Ù 4 SAG.DU pāi LÚ-n=aku MUNUS-n=aku* | וארבעה ראשים ייתן, בין איש בין אשה, | `לֹא תִקְחוּ כֹפֶר לְנֶפֶשׁ רֹצֵחַ` (במדבר לה:לא) | [absent] | אוסר במפורש פדיון של רוצח |
| EST 257 | same | same | `כִּי אִם בְּדַם שֹׁפְכוֹ` (במדבר לה:לג) | [equivalent] |  |
| LH §172, 2126' | *mut libbiša* | ובעל לבה | `לַטּוֹב בְּעֵינֵיהֶם תִּהְיֶינָה לְנָשִׁים` (במדבר לו:ו) | [equivalent] | האשה נישאת למי שהיא בוחרת |
| LH §178, 2250' | *ēma eliša* | לאשר עליה | `לַטּוֹב בְּעֵינֵיהֶם תִּהְיֶינָה לְנָשִׁים אַךְ לְמִשְׁפַּחַת מַטֵּה אֲבִיהֶם תִּהְיֶינָה לְנָשִׁים` (במדבר לו:ו) | [equivalent] | בנות צלפחד היורשות רשאיות לבחור "לטוב בעיניהן", אבל רק בתוך משפחת אביהן, כדי שהנחלה לא תצא; כאן הבת המוקדשת רשאית לתת את נחלתה "לאשר טוב עליה" רק אם אביה כתב לה זאת – ואם לא, הנחלה חוזרת לאחיה. אותו חשש (הנחלה יוצאת מבית האב) ואותו ניב. הצעה שלנו |
| LH §179, 2313' | *ul ipaqqaruši* | לא יערערו עליה. | `אַךְ לְמִשְׁפַּחַת מַטֵּה אֲבִיהֶם תִּהְיֶינָה לְנָשִׁים` (במדבר לו:ו) | [divergence] | שם אין לבת חופש להוציא את הנחלה מן המשפחה; כאן האב יכול להעניק לה חופש כזה בכתב, והאחים אינם יכולים לערער |
| UN b010 | *dumu-munus dam nu-un-tuku-a* | בת אשר לא נישאה לבעל | `לַטּוֹב בְּעֵינֵיהֶם תִּהְיֶינָה לְנָשִׁים:  אַךְ לְמִשְׁפַּחַת מַטֵּה אֲבִיהֶם תִּהְיֶינָה לְנָשִׁים` (במדבר לו:ו) | [divergence] | The Torah regulates the heiress's marriage; UN requires her to be unmarried. |
| LH §173, 2137' | *izuzzu* | יחלוקו. | `וְלֹא תִסֹּב נַחֲלָה לִבְנֵי יִשְׂרָאֵל מִמַּטֶּה אֶל מַטֶּה` (במדבר לו:ז) | [divergence] | בתורה רכוש האשה אינו עובר ממשפחה למשפחה; כאן שלוחי האם מתחלקים בין בני שני הבעלים, משתי משפחות |
| LH §28, 662 | *illak* | `ילך.` | `וְכָל בַּת יֹרֶשֶׁת נַחֲלָה … לְמַעַן יִירְשׁוּ בְּנֵי יִשְׂרָאֵל אִישׁ נַחֲלַת אֲבֹתָיו` (במדבר לו:ח) | [equivalent] | הנחלה עוברת בתוך המשפחה |
| LH §38, 788 | *ūl išaṭṭar* | `לא יכתוב,` | `וְכָל בַּת יֹרֶשֶׁת נַחֲלָה מִמַּטּוֹת בְּנֵי יִשְׂרָאֵל לְאֶחָד מִמִּשְׁפַּחַת מַטֵּה אָבִיהָ תִּהְיֶה לְאִשָּׁה` (במדבר לו:ח) | [divergence] | בתורה הבת יורשת, אבל הנחלה אסורה לעבור למטה אחר; ב־LH אסור לכתוב לבת את נחלת השירות כלל. הצעה שלנו. |
| LH §178, 2290' | *ša aḫḫīšama* | של אחיה הם. | `וְלֹא תִסֹּב נַחֲלָה מִמַּטֶּה לְמַטֶּה אַחֵר` (במדבר לו:ט) | [equivalent] | הנחלה של בת אינה יוצאת מבית אביה; כאן ירושת הבת המוקדשת חוזרת לאחיה |

### Deuteronomy 1

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §5, 376 | *itti dayyānī ina dīnim ul uššab* | עם הדיינים בדין לא ישב | `לֹא תַכִּירוּ פָנִים בַּמִּשְׁפָּט כַּקָּטֹן כַּגָּדֹל תִּשְׁמָעוּן לֹא תָגוּרוּ מִפְּנֵי אִישׁ כִּי הַמִּשְׁפָּט לֵאלֹהִים הוּא` (דברים א:יז) | [divergence] | The Torah instructs the judge; the removal from office, the 12-fold fine and the assembly are [absent] in the Torah. From memory. |
| LE §58, 186 | *napištum ṣimdat šarrim* | נפשות – תקנת המלך | `וְהַדָּבָר אֲשֶׁר יִקְשֶׁה מִכֶּם תַּקְרִבוּן אֵלַי וּשְׁמַעְתִּיו` (דברים א:יז) | [equivalent] | A capital case left to the king's decree (cf. §48). |
| LE §48, 154 | *awat napištim ana šarrimma* | ודבר נפשות – למלך הוא | `וְהַדָּבָר אֲשֶׁר יִקְשֶׁה מִכֶּם תַּקְרִבוּן אֵלַי וּשְׁמַעְתִּיו` (דברים א:יז) | [equivalent] |  |
| LH prol. 27 | *inūmīšu* | בימים ההם | `וָאֲצַוֶּה אֶתְכֶם בָּעֵת הַהִוא אֵת כָּל הַדְּבָרִים אֲשֶׁר תַּעֲשׂוּן` (דברים א:יח) | [equivalent] | The law-giving frame "at that time"; also 303. Our proposal. |
| LH epil. 3258'–3259' | *bēlum ša kīma abim wālidim ana nišī* | האדון אשר כאב יולד לאנשים | `כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ` (דברים א:לא) | [equivalent] |  |
| LI prol. 72–73 | *ad-da dumu-ne-ne-er ḫu-mu-ne-en-il₂* | את האב לבניו השאתי | `כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ בְּכָל הַדֶּרֶךְ` (דברים א:לא) | [equivalent] | *il₂* = *našû* = `נשא`: the father "carries" his son. |

### Deuteronomy 2

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 356 | *lā tagarrišunūni* | לא תתגרו בם | `אַל תִּתְגָּרוּ בָם` (דברים ב:ה) | [cognate?] / [divergence] | Same phrase; Deut forbids provoking the peoples, the treaty obliges to confront the disloyal. *gerû* ~ `גרה` (creation corpus). Our proposal. |

### Deuteronomy 3

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 559 | *eršu* | ערש | `הִנֵּה עַרְשׂוֹ עֶרֶשׂ בַּרְזֶל` (דברים ג:יא) | [cognate] | Lexical only. |
| LH prol. 85 | *muštēmiqum* | המתחנן | `וָאֶתְחַנַּן אֶל יְהוָה בָּעֵת הַהִוא לֵאמֹר` (דברים ג:כג) | [equivalent] | Our proposal. |

### Deuteronomy 4

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 58 | same | same | `לֹא תֹסִפוּ עַל הַדָּבָר` (דברים ד:ב) | [divergence] |  |
| EST 397–398 | same | same | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | [divergence] |  |
| LH epil. 3234'–3235' | *uṣurātūa mušassikam ay iršia* | צורותי מסלק אל יהיה להן | `לֹא תֹסִפוּ עַל הַדָּבָר … וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | [divergence] | Preservation formula: remove the stele vs. add/subtract. From memory (Levinson). |
| LH epil. 3305'–3311' | idem | idem | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | [divergence] |  |
| LI epil. 449′–453′ | *lu₂ a₂ niĝ₂ ḫul-dim₂-ma nu-ub-ši-aĝ₂-ge₂₆-a … mu-ni li-bi₂-ib₂-sar-re-a* | איש אשר צו עשיית רעה עליה לא יצווה … את שמו לא יכתוב | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | [equivalent] | The integrity of the written text: LI protects the object and its inscription, Deuteronomy the words. Cross-collection: LH 3344′–3352′. |
| LH epil. 3342' | *ana emqim* | לחכם | `כִּי הִוא חָכְמַתְכֶם וּבִינַתְכֶם לְעֵינֵי הָעַמִּים אֲשֶׁר יִשְׁמְעוּן אֵת כָּל הַחֻקִּים הָאֵלֶּה וְאָמְרוּ רַק עַם חָכָם וְנָבוֹן הַגּוֹי הַגָּדוֹל הַזֶּה` (דברים ד:ו) | [equivalent] | The laws as wisdom, praised by the wise. From memory (Weinfeld). |
| LH epil. 3144'–3145' | idem | idem | `וּמִי גּוֹי גָּדוֹל אֲשֶׁר לוֹ חֻקִּים וּמִשְׁפָּטִים צַדִּיקִם` (דברים ד:ח) | [equivalent] | The just laws as a nation's pride; see 3342'. |
| EST 9 | *marʾēkunu mār marʾēkunu* | בניכם, בני בניכם | `וְהוֹדַעְתָּם לְבָנֶיךָ וְלִבְנֵי בָנֶיךָ` (דברים ד:ט) | [equivalent] | Tayinat: "their men" instead. |
| EST **288** | ***ana marʾēkunu mār marʾēkunu*** | **לבניכם, בני בניכם** | `וְהוֹדַעְתָּם לְבָנֶיךָ וְלִבְנֵי בָנֶיךָ` (דברים ד:ט) | [equivalent] | The same verse opens `הִשָּׁמֶר לְךָ וּשְׁמֹר נַפְשְׁךָ` (↔ 292–293, 335). |
| EST **335** | same | same | `רַק הִשָּׁמֶר לְךָ וּשְׁמֹר נַפְשְׁךָ מְאֹד` (דברים ד:ט) | [equivalent] | Deut's `שמר נפש` = the treaty's *napišta naṣāru* with the other verb; the same verse continues with sons and grandsons (↔ 288). |
| EST 388, 396 | teaching the sons; fear | לא תלמדו … ייראו | `אֲשֶׁר יִלְמְדוּן לְיִרְאָה אֹתִי כָּל הַיָּמִים … וְאֶת בְּנֵיהֶם יְלַמֵּדוּן` (דברים ד:י) | [cognate] / [equivalent] | `למד` + `ירא` + sons, as 388 + 396. Our proposal. |
| EST 507–508 | same | same | `כָּל הַיָּמִים אֲשֶׁר הֵם חַיִּים עַל הָאֲדָמָה וְאֶת בְּנֵיהֶם יְלַמֵּדוּן` (דברים ד:י) | [equivalent] | Also 12:1. |
| EST 293 | *nupšātkunu* (pl.) | נפשכם | `וְנִשְׁמַרְתֶּם מְאֹד לְנַפְשֹׁתֵיכֶם` (דברים ד:טו) | [cognate] | The plural `נַפְשֹׁתֵיכֶם` = *nupšātkunu*; with `שמר` (≠ *naṣāru*). |
| EST 335 | same | same | `וְנִשְׁמַרְתֶּם מְאֹד לְנַפְשֹׁתֵיכֶם` (דברים ד:טו) | [equivalent] | Plural, as *nupšātkunu*. |
| EST 13–15 | the planets as witnesses | לפני סגמגר, דלבת… | `וְרָאִיתָ אֶת הַשֶּׁמֶשׁ וְאֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים כֹּל צְבָא הַשָּׁמַיִם` (דברים ד:יט) | [divergence] | Witnesses here; forbidden worship there (also 17:3). |
| EST 292 | same | same | `הִשָּׁמְרוּ לָכֶם פֶּן תִּשְׁכְּחוּ אֶת בְּרִית יְהוָה אֱלֹהֵיכֶם` (דברים ד:כג) | [equivalent] |  |
| EST 265 | *tušaznâni* | תרגיזו | `לְהַכְעִיסוֹ` (דברים ד:כה) | [equivalent] | Deut: the people anger God; here sorcery angers the gods against the heir. `הכעיס` kept out. |
| EST 21 | *ilāni āšibūti šamê u kaqqiri* | האלים יושבי השמים והארץ | `הַעִידֹתִי בָכֶם הַיּוֹם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים ד:כו) | [divergence] | Gods of heaven and earth as witnesses vs heaven and earth themselves (also 30:19). Standard comparison. |
| EST **293** | ***nupšātkunu lā tuḫallaqa*** | **את נפשכם לא תאבדו** | `כִּי אָבֹד תֹּאבֵדוּן מַהֵר מֵעַל הָאָרֶץ` (דברים ד:כו) | [equivalent] | Perishing (*ḫulluqu* = `אבד`) as the result of breaking the covenant, followed by exile (294–295). |
| EST 415–416 | *arak ūm šēbūti … ay iqīškunu* | אורך ימי שיבה … אל יעניק לכם | `לֹא תַאֲרִיכֻן יָמִים עָלֶיהָ` (דברים ד:כו) | [cognate] | The curse in the same root; also 30:18. Our proposal (the exact pair). |
| LH epil. 3296'–3297' | *ana warkiāt ūmī* | לאחרית הימים | `בְּאַחֲרִית הַיָּמִים וְשַׁבְתָּ עַד יְהוָה אֱלֹהֶיךָ` (דברים ד:ל) | [equivalent] | Exact semantic match, other root; here simply "the future". |
| EST 634 | same | same | `לֹא יַרְפְּךָ וְלֹא יַשְׁחִיתֶךָ` (דברים ד:לא) | [equivalent] |  |

### Deuteronomy 5

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 297 | same | same | `וּלְמַעַן יִיטַב לָךְ` (דברים ה:טו) | [equivalent] | Also 6:18; see 335. |
| EST **335** | ***ša aḫikunu kabbidā*** | **את אחיכם כבדו** | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ כַּאֲשֶׁר צִוְּךָ יְהוָה אֱלֹהֶיךָ לְמַעַן יַאֲרִיכֻן יָמֶיךָ וּלְמַעַן יִיטַב לָךְ` (דברים ה:טו) | [cognate] | = Deut 5:16 in the common numbering. *kabātu* D = `כִּבֵּד`, followed by life (*nupšātkunu uṣrā* ↔ "prolong your days"). Our proposal. |
| EST 275–278 | the brothers' property: fields, houses, people, ox, donkey | שדות, בתים … אנשים … חמורים, שוורים | `וְלֹא תִתְאַוֶּה בֵּית רֵעֶךָ שָׂדֵהוּ וְעַבְדּוֹ וַאֲמָתוֹ שׁוֹרוֹ וַחֲמֹרוֹ וְכֹל אֲשֶׁר לְרֵעֶךָ` (דברים ה:יז) | [equivalent] | = Deut 5:21 in the common numbering: nearly the same list and order (house, field, slaves, ox, donkey). Our proposal. |
| EST 505 | *nišammûni* | נשמע | `וְשָׁמַעְנוּ וְעָשִׂינוּ` (דברים ה:כג) | [cognate] | *šemû* = `שמע`; the people's promise at Horeb (repository numbering = standard 5:24). |
| EST 634 | *ana imitti u šumēli tallakāni* | לימין ולשמאל תלכו | `לֹא תָסֻרוּ יָמִין וּשְׂמֹאל` (דברים ה:כח) | [equivalent] | *šumēlu* = `שמאל` [cognate]; Deuteronomy's verb `סור` (deviation from the law) vs EST's *alāku* (leaving the king). Repository numbering (= 5:29). From memory (Weinfeld; Levinson). |

### Deuteronomy 6

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 288 | same | same | `אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] |  |
| EST 395–396 | *marʾēkunu mār marʾēkunu ana šāšu lipluḫū* | בניכם, בני בניכם אותו ייראו | `לְמַעַן תִּירָא אֶת יְהוָה אֱלֹהֶיךָ … אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] | Son and grandson + fear. Our proposal. |
| EST 415 | same | same | `וּלְמַעַן יַאֲרִכֻן יָמֶיךָ` (דברים ו:ב) | [cognate] | Also 4:40; 5:29 (repository numbering = standard 5:30). |
| EST 508 | *mār marʾēni* | בני בנינו | `אַתָּה וּבִנְךָ וּבֶן בִּנְךָ` (דברים ו:ב) | [equivalent] | Renderings §1 in the 1st person. |
| EST 53 | *ša gammurti libbikunu* | שבשלמות לבכם | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | `בְּכָל לְבַבְכֶם` kept out (Decision 7). |
| EST 207 | same | same | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | Moran's thesis. |
| EST **266–268** | ***kî napšātekunu lā taraʾʾamāni*** | **כנפשכם לא תאהבו** | `וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ וּבְכָל נַפְשְׁךָ וּבְכָל מְאֹדֶךָ` (דברים ו:ה) | [equivalent] | Moran 1963 (from memory): treaty "love" = loyalty; the oath "if you do not love" = "you shall love". Rests on the Nimrud copies (Tayinat T iv 11 restored). |
| EST 310 | *ina gammurti libbikunu* | בשלמות לבכם | `בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | See 53. |
| LH epil. 3282'–3283' | *ina libbišu gamrim* | בלבו השלם | `בְּכָל לְבָבְךָ` (דברים ו:ה) | [equivalent] | Not Deut's `כל`; cf. corpus *gummurtu* = `שלמות`. |
| EST 387 | same | same | `וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל לְבָבֶךָ` (דברים ו:ו) | [equivalent] | Heart, then sons (6:7) – the sequence of 387–388. `בכל לבבכם` kept out (Decision 7). |
| EST 180–183 | the swearer's situations | בין ב[…], בין ביום פנוי… | `וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ` (דברים ו:ז) | [divergence] | An all-situations list. Our proposal. |
| EST 290 | *lā taqabbāni* (to the sons) | לא תאמרו | `וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם` (דברים ו:ז) | [equivalent] | Speak to your sons (see also §34, 387–388). |
| EST 387–388 | same | same | `וְשִׁנַּנְתָּם לְבָנֶיךָ` (דברים ו:ז) | [equivalent] | From memory (Weinfeld). |
| EST 25 | *Aššur … titammā* | באשור … הישבעו | `וּבִשְׁמוֹ תִּשָּׁבֵעַ` (דברים ו:יג) | [equivalent] | Oath by the god (also 10:20); cf. Josh 23:7. |
| EST 354 | (T) *lā palḫuš lā kanšuš* | לא ביראה, לא בהכנעה | `אֶת יְהוָה אֱלֹהֶיךָ תִּירָא וְאֹתוֹ תַעֲבֹד` (דברים ו:יג) | [equivalent] | Reverence toward the crown prince and his brothers. Tayinat only (Nimrud has traces of *kanšuš*). Our proposal. |
| EST 544 | *ultu muhhi pānī ša kaqqari lihliq* | [מ]על פני הקרקע יאבד | `וְהִשְׁמִידְךָ מֵעַל פְּנֵי הָאֲדָמָה` (דברים ו:טו) | [equivalent] | *pānī kaqqari* ↔ `פְּנֵי הָאֲדָמָה`; `אדמה` kept out. |
| LH prol. 47–48 | *ana šīr nišī ṭubbim* | את בשר האנשים להיטיב | `לְטוֹב לָנוּ כָּל הַיָּמִים לְחַיֹּתֵנוּ` (דברים ו:כד) | [cognate] | *ṭiābu* D = `היטיב`; in Deut the purpose of the laws, here of the king. Also 302. Our proposal. |
| LH prol. 302 | *šīr nišī uṭīb* | את בשר האנשים היטבתי | `לְטוֹב לָנוּ כָּל הַיָּמִים` (דברים ו:כד) | [cognate] | Fulfilment of 47–48. |
| LH epil. 3176'–3177' | *šīr mātim uṭīb* | את בשר הארץ היטבתי | `לְטוֹב לָנוּ כָּל הַיָּמִים לְחַיֹּתֵנוּ` (דברים ו:כד) | [cognate] | *ṭiābu* = `טוב` (T1). |
| LH epil. 3330'–3331' | *šīr nišīšu liṭīb* | את בשר אנשיו ייטיב | `לְטוֹב לָנוּ כָּל הַיָּמִים` (דברים ו:כד) | [cognate] |  |

### Deuteronomy 7

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 141, 161 | *šumšunu … ina māti lā tuḫallaqāni* | את שמם … מן הארץ לא תאבדו | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫulluqu* = `אִבֵּד` (corpus renderings). |
| EST 315 | *šumšu zāršu … lā tuḫallaqāni* | את שמו, את זרעו … לא תאבדו | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | See 141. |
| EST 435–436 | *šumkunu ina māti luḫalliq* | את שמכם מן הארץ תאבד | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫulluqu* + *šumu* = `האביד שם`. Tayinat adds "your seed" (Nimrud intact without it). |
| EST 538–539 | *šumkunu zērkunu … ultu māti lihliq* | שמכם, זרעכם … מן הארץ יאבד | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | *ḫalāqu* / `אבד`; Deut of the enemy kings. |
| EST 583–584 | *ina qāt bēl dāmēkunu liškanūkunu* | ביד בעלי דמיכם ישימו אתכם | `וְנָתַן מַלְכֵיהֶם בְּיָדֶךָ` (דברים ז:כד) | [equivalent] | "Put into the hand"; *šakānu* = `שׂם`. Tayinat: "your enemy". |
| EST 661 | same | same | `וְהַאֲבַדְתָּ אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ז:כד) | [equivalent] | Corpus §2. |
| LH prol. 208 | *lā maḫārim* | שאין לעמוד מולו | `לֹא יִתְיַצֵּב אִישׁ בְּפָנֶיךָ` (דברים ז:כד) | [equivalent] | Our proposal. |
| EST 608 | *ṣalmu … iššarrapūni* | צלם … נשרף | `פְּסִילֵי אֱלֹהֵיהֶם תִּשְׂרְפוּן בָּאֵשׁ` (דברים ז:כה) | [divergence] | Burning images: of gods (Deut) vs of the oath-breaker (EST). *šarāpu* = `שרף` [cognate]. |

### Deuteronomy 8

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LI epil. 433′ | *ka-ta e₃-a {d}en-lil₂-ta* | במוצא הפה של אנליל | `כִּי עַל כָּל מוֹצָא פִי יְהוָה יִחְיֶה הָאָדָם` (דברים ח:ג) | [equivalent] | "What comes out of the mouth" of the god. |
| EST 565 | *īnīkunu* "your springs" | עינותיכם | `אֶרֶץ נַחֲלֵי מָיִם עֲיָנֹת וּתְהֹמֹת` (דברים ח:ז) | [cognate] / [divergence] | The blessing of springs reversed. Translated by the transliteration (*-kunu*; the normalization has *-šunu*). |
| EST 220 | *mār muškēnūti* | בני המסכנות | `אֶרֶץ אֲשֶׁר לֹא בְמִסְכֵּנֻת תֹּאכַל בָּהּ לֶחֶם` (דברים ח:ט) | [cognate] | Loan from *muškēnūtu*. |
| EST 653 | *ina kaqqar ṣumāmīt laplaptu* | בקרקע צמאון וצחיחות | `וְצִמָּאוֹן אֲשֶׁר אֵין מָיִם` (דברים ח:טו) | [cognate] | *ṣumāmītu* (from *ṣamû*) = `צִמָּאוֹן`; the thirsty land of the desert, where the god gave water. Our proposal. |
| LH prol. 47–48 | idem | idem | `לְהֵיטִבְךָ בְּאַחֲרִיתֶךָ` (דברים ח:טז) | [cognate] |  |

### Deuteronomy 9

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 400 | *ṭuppi adê annî* | לוח האמנה הזה | `לוּחֹת הַבְּרִית` (דברים ט:ט) | [equivalent] | `בְּרִית` kept out (Decision 1); also `לֻחֹת הָעֵדֻת` (שמות לא:יח) [cognate?]. |
| EST 141 | same | same | `וְאֶמְחֶה אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ט:יד) | [equivalent] |  |
| EST 661 | same | same | `וְאֶמְחֶה אֶת שְׁמָם מִתַּחַת הַשָּׁמָיִם` (דברים ט:יד) | [equivalent] |  |
| EST 410–412 | same | same | `וָאֶשְׂרֹף אֹתוֹ בָּאֵשׁ וָאֶכֹּת אֹתוֹ טָחוֹן הֵיטֵב עַד אֲשֶׁר דַּק לְעָפָר; וָאַשְׁלִךְ אֶת עֲפָרוֹ אֶל הַנַּחַל` (דברים ט:כא) | [equivalent] | Fire, dust (*eperu* = `עָפָר` [cognate]), water, after the broken tablets (9:17). Our proposal. |

### Deuteronomy 10

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 408 | same | same | `וָאָשִׂם אֶת הַלֻּחֹת בָּאָרוֹן אֲשֶׁר עָשִׂיתִי` (דברים י:ה) | [equivalent] | Also `וְשַׂמְתָּם בָּאָרוֹן` (10:2); `וְנָתַתָּ אֶל הָאָרֹן אֵת הָעֵדֻת` (שמות כה:טז). |
| EST 281 | *ina pānīšu … izzazzūni* | לפניו … יעמדו | `לַעֲמֹד לִפְנֵי יְהוָה לְשָׁרְתוֹ` (דברים י:ח) | [equivalent] | "Stand before" = serve. |
| LI prol. 88 | *ḫe₂-gub* | העמדתי | `לַעֲמֹד לִפְנֵי יְהוָה לְשָׁרְתוֹ` (דברים י:ח) | [equivalent] | *gub* "stand" = to serve, in both languages. |
| LH §169, 2031' | *pānīšu ubbalū* | את פניו ישאו; | `אֲשֶׁר לֹא יִשָּׂא פָנִים וְלֹא יִקַּח שֹׁחַד` (דברים י:יז) | [divergence] | בתורה "נשיאת פנים" בדין היא פגם (משוא פנים), כאן היא מצווה בפעם הראשונה |
| LH prol. 37–39 | idem | idem | `עֹשֶׂה מִשְׁפַּט יָתוֹם וְאַלְמָנָה` (דברים י:יח) | [equivalent] | God, not the king, in Deut. |
| LH epil. 3204'–3205' | idem | idem | `עֹשֶׂה מִשְׁפַּט יָתוֹם וְאַלְמָנָה` (דברים י:יח) | [equivalent] | God's task in Deut. |
| UN prol. 162–165 | (the same) | (as above) | `עֹשֶׂה מִשְׁפַּט יָתוֹם וְאַלְמָנָה; וְאֹהֵב גֵּר לָתֶת לוֹ לֶחֶם וְשִׂמְלָה` (דברים י:יח) | [equivalent] | God as protector of orphan, widow and stranger (cf. 122). |

### Deuteronomy 11

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §48, 907 | idem | idem | `אֲשֶׁר תִּזְרַע אֶת זַרְעֲךָ וְהִשְׁקִיתָ בְרַגְלְךָ כְּגַן הַיָּרָק` (דברים יא:י) | [divergence] | An irrigation country, where "no water" is a failure of irrigation. Our proposal. |
| MALB §13, r v 21 | *lū urqē lū eṣē urabbi* | `בין ירק, בין עצים גידל` | `וְהִשְׁקִיתָ בְרַגְלְךָ כְּגַן הַיָּרָק` (דברים יא:י) | [cognate] | *urqu* = `יָרָק`. |
| MALB §17, r vi 9 | *eqlišu išaqqi* | `את שדהו ישקה` | `וְהִשְׁקִיתָ בְרַגְלְךָ כְּגַן הַיָּרָק` (דברים יא:י) | [cognate] | *šaqû* = `השקה`: the law of an irrigation country (Egypt in Deut 11:10, Assyria here). |
| MALB §18, r vi 21 | *šumma mû ša Adad* | `אם מי אֲדַד` | `לִמְטַר הַשָּׁמַיִם תִּשְׁתֶּה מָּיִם` (דברים יא:יא) | [divergence] | Rain water ("water of Adad", the storm god) regulated like irrigation water; in Deut rain is the alternative to irrigation. |
| EST 440 | (T) *zunni šamūte ina mātikunu liprus* | {תיינת: גשם ורביבים} מארצכם יכרות | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת יְבוּלָהּ` (דברים יא:יז) | [equivalent] | **Tayinat only**: P&W 1988 restored *mīla* "high water" (river flood); Tayinat reads rain. |
| LH epil. 3452'–3454' | idem | idem | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר` (דברים יא:יז) | [equivalent] | River water in Babylonia, rain in Canaan. |
| LH epil. 3477' | *arḫiš* | מהרה | `וַאֲבַדְתֶּם מְהֵרָה מֵעַל הָאָרֶץ הַטֹּבָה` (דברים יא:יז) | [equivalent] | Also Deut 28:20 `מַהֵר`. |
| LH epil. 3513'–3520' | *zunnī ina šamê mīlam ina nagbim līṭeršu māssu ina ḫušaḫḫim u bubūtim liḫalliq* | גשמים מן השמים, גאות מן המעמקים ישלול ממנו, את ארצו בכפן וברעב יאבד | `וְעָצַר אֶת הַשָּׁמַיִם וְלֹא יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת יְבוּלָהּ וַאֲבַדְתֶּם מְהֵרָה` (דברים יא:יז) | [equivalent] | Rain withheld → land → "perish" (*ḫulluqu* = אבד). From memory (the rain curse); the sequence is our proposal. |
| EST 387–388 | *ana marʾēkunu … lā tušalmadāni* | לבניכם … לא תלמדו | `וְלִמַּדְתֶּם אֹתָם אֶת בְּנֵיכֶם` (דברים יא:יט) | [cognate] | *lamādu* Š = `לִמֵּד`; preceded by `וְשַׂמְתֶּם אֶת דְּבָרַי אֵלֶּה עַל לְבַבְכֶם` (11:18): heart + teaching the sons, as 387–388. Our proposal (the cognate). |
| EST 357 | (T) *puluḫtu namurrāti ina libbišunu* | אימה והוד בלבם | `פַּחְדְּכֶם וּמוֹרַאֲכֶם יִתֵּן יְהוָה אֱלֹהֵיכֶם עַל פְּנֵי כָל הָאָרֶץ` (דברים יא:כה) | [equivalent] | Instilling fear in the opponent. Tayinat only. Our proposal. |

### Deuteronomy 12

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 402–404 | *lū ṣalam …* | בין צלם אסרחדון … | `וּפְסִילֵי אֱלֹהֵיהֶם תְּגַדֵּעוּן; וְאִבַּדְתֶּם אֶת שְׁמָם` (דברים יב:ג) | [divergence] | Destroying images and the name is commanded there, forbidden (for the king's images) here. Our proposal. |
| EST 413 | *tuḫallaqāni* | תאבדו | `וְאִבַּדְתֶּם אֶת שְׁמָם מִן הַמָּקוֹם הַהוּא` (דברים יב:ג) | [equivalent] | With burning (`תִּשְׂרְפוּן בָּאֵשׁ`) in the same verse. |
| LH epil. 3236'–3237' | idem | idem | `אֶל הַמָּקוֹם אֲשֶׁר יִבְחַר יְהוָה אֱלֹהֵיכֶם … לָשׂוּם אֶת שְׁמוֹ שָׁם` (דברים יב:ה) | [divergence] | The king's name in the temple vs. God's. Our proposal. |

### Deuteronomy 13

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST ii | *ša lā šunnê* | אשר אין לשנותו | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | "Not alter" vs "not add, not subtract"; see 58. |
| EST 58 | *tennâni tušannâni* | תמירו, תשנו | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Alter vs add/subtract (Levinson; cited from memory). |
| EST 397–398 | *ennû eggû iḫaṭṭû ipassasu* | ימיר, יזניח, יחטא, יבטל | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Change / neglect / annul vs add / subtract (Levinson; from memory). |
| LH epil. 3305'–3311' | *dīn mātim … ay unakkir, uṣurātiya ay ušassik* | את דין הארץ … אל יסיר, את צורותי אל יסלק | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Preservation: do not alter/remove vs. add/subtract. From memory (Levinson; Weinfeld). |
| LH epil. 3348'–3352' | *dīnī lā ušassik, awâtiya lā uštepīl, uṣurātiya lā unakkir* | את דיני לא סילק, את דברי לא הפך, את צורותי לא הסיר | `לֹא תֹסֵף עָלָיו וְלֹא תִגְרַע מִמֶּנּוּ` (דברים יג:א) | [divergence] | Preservation of the text: LH "reject, overturn, remove", Deut "add, subtract". From memory (Levinson); cf. EST 57–58. |
| EST 116 | *raggimu* | נביא | `כִּי יָקוּם בְּקִרְבְּךָ נָבִיא אוֹ חֹלֵם חֲלוֹם` (דברים יג:ב) | [equivalent] | The core comparison; *raggimu* "caller" is the NA term for prophet (Decision 6 of the project). |
| EST 117 | *mār šāʾili amat ili* | שואל דבר אל | `אוֹ חֹלֵם חֲלוֹם` (דברים יג:ב) | [equivalent] | Weinfeld equates the *šāʾilu* (dream interpreter) with the dreamer (from memory); not rendered so. |
| EST 71 | *šarru šanumma bēlu šanumma* | מלך אחר, אדון אחר | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Another king → other gods (also 13:7, 14). Known in the literature. |
| EST 108 | *abutu lā ṭābtu* | דבר לא טוב | `וּבָא הָאוֹת וְהַמּוֹפֵת אֲשֶׁר דִּבֶּר אֵלֶיךָ לֵאמֹר` (דברים יג:ג) | [equivalent] | The offence is a spoken word in both. |
| EST 129, 196 | *šarru (ana šarri) šanumma bēlu šanumma* | מלך אחר, אדון אחר | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Known (see 71). |
| EST 301 | same | same | `נֵלְכָה אַחֲרֵי אֱלֹהִים אֲחֵרִים` (דברים יג:ג) | [equivalent] / [divergence] | Known (see 71). |
| EST 53 | same | same | `הֲיִשְׁכֶם אֹהֲבִים אֶת יְהוָה אֱלֹהֵיכֶם בְּכָל לְבַבְכֶם` (דברים יג:ד) | [equivalent] |  |
| EST 119 | *tašammâni* | תשמעו | `לֹא תִשְׁמַע אֶל דִּבְרֵי הַנָּבִיא הַהוּא` (דברים יג:ד) | [divergence] | Same verb: here "hear (and report)", there "listen to, obey". |
| EST 201 | same | same | `לֹא תִשְׁמַע אֶל דִּבְרֵי הַנָּבִיא הַהוּא` (דברים יג:ד) | [cognate] |  |
| EST 207 | same | same | `הֲיִשְׁכֶם אֹהֲבִים אֶת יְהוָה אֱלֹהֵיכֶם בְּכָל לְבַבְכֶם` (דברים יג:ד) | [equivalent] | In Deut 13 love is what the inciting prophet tests. |
| EST 195 | *tašammâni* (obey) | תשמעו | `וּבְקֹלוֹ תִשְׁמָעוּ` (דברים יג:ה) | [cognate] |  |
| EST 396 | *ana šāšu lipluḫū* | אותו ייראו | `אַחֲרֵי יְהוָה אֱלֹהֵיכֶם תֵּלֵכוּ וְאֹתוֹ תִירָאוּ` (דברים יג:ה) | [equivalent] | Same fronted emphatic pronoun before "fear" in both, in the chapter parallel to §10, §12. Tayinat: "his sons". Our proposal. |
| EST 133–134 | *sīḫu bārtu … iqbakkanūni* | מרד וקשר … אליכם אמר | `כִּי דִבֶּר סָרָה עַל יְהוָה אֱלֹהֵיכֶם` (דברים יג:ו) | [equivalent] | "Speak revolt" (from memory: Levinson, Weinfeld). `סָרָה` has no cognate here and is kept out; the verb is *qabû* (= `אמר`), not *dabābu*. |
| EST 141 | *ina māti* | מן הארץ | `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` (דברים יג:ו) | [equivalent] | Removal from the community. |
| LH epil. 3328'–3329' | idem | idem | `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` (דברים יג:ו) | [equivalent] | Deuteronomy's purge formula. |
| EST 76–77 | the heir's kin as source of the evil word | בין מפי אחיו, אחי אבותיו… | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ אוֹ בִנְךָ אוֹ בִתְּךָ` (דברים יג:ז) | [divergence] | Here the crown prince's kin, in Deut the hearer's (the swearers' kin: §10). |
| EST 80 | (Hebrew root only) | תסתירו | `בַּסֵּתֶר` (דברים יג:ז) | — | The rendering shares the root `סתר` with 13:7, the Akkadian does not: a translation echo, recorded so it is not taken for evidence. |
| EST 94 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | Also 103; here the objects of loyalty. |
| EST 112 | same | same | `אוֹ רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ` (דברים יג:ז) | [equivalent] | The intimate who is not kin; our proposal for the pair. |
| EST 115–116 | *ahhēkunu marʾēkunu marʾātikunu* | אחיכם, בניכם, בנותיכם | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ אוֹ בִנְךָ אוֹ בִתְּךָ` (דברים יג:ז) | [equivalent] | The swearers' own brother, son, daughter, in the same order (from memory: Weinfeld, Steymans, Levinson). [divergence]: `בֶן אִמֶּךָ` here only of the heir's brothers (171); `אֵשֶׁת חֵיקֶךָ` [absent]. |
| EST 171 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | The heir's brothers, objects of loyalty (see 94). |
| EST 203–204 | *mā* | לאמר | `בַּסֵּתֶר לֵאמֹר נֵלְכָה וְנַעַבְדָה אֱלֹהִים אֲחֵרִים` (דברים יג:ז) | [equivalent] | The quoted words of the inciter. |
| EST 268 | *kî napšātekunu* | כנפשכם | `אוֹ רֵעֲךָ אֲשֶׁר כְּנַפְשְׁךָ` (דברים יג:ז) | [cognate] | *kî napšāti* = `כְּנַפְשְׁךָ` exactly, in the inciter chapter. |
| EST **318–325** | an inciter from the heir's kin "saying" | אם אתם – (איש) מקרב אחיו … ישדל אתכם לזמום, יאמר לכם, לאמר | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ … בַּסֵּתֶר לֵאמֹר` (דברים יג:ז) | [equivalent] | Inciter from the family + `לֵאמֹר` + quoted words (*mā*). `הסית` kept out. Known for §10 (from memory); for §27 and §29 our proposal. |
| EST 363 | *aḫḫēšu mār ummīšu* | אחיו, בני אמו | `אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | Here the brothers are protected, not inciters. |
| EST 500 | *mušamhiṣūtu mušadbibūtu lihšu* | סכסוך, התססה, לחישה | `כִּי יְסִיתְךָ … בַּסֵּתֶר לֵאמֹר` (דברים יג:ז) | [equivalent] | Incitement in secret; `הסית` kept out (part 3, Decision 5). |
| EST 496, 504 | *ahhēšu mār ummīšu* | אחיו, בני אמו | `כִּי יְסִיתְךָ אָחִיךָ בֶן אִמֶּךָ` (דברים יג:ז) | [cognate] | The crown prince's brothers as objects of loyalty (also 515). |
| EST 216–218 | *qurbūti … patiūti* | הקרובים … הרחוקים | `הַקְּרֹבִים אֵלֶיךָ אוֹ הָרְחֹקִים מִמֶּךָּ מִקְצֵה הָאָרֶץ וְעַד קְצֵה הָאָרֶץ` (דברים יג:ח) | [cognate] (*qurbu* = `קרוב`) / [equivalent] | "Near and far" in a list of possible sources of sedition (in Deut: the nations' gods; here: palace groups; 216 "in Assyria or another land" ~ "from one end of the earth to the other"). Our proposal. |
| EST 80 | *tupazzarāni* | תסתירו | `וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Known in the literature. `כִּסָּה` kept out. |
| EST 119 | *tupazzarāni* | תסתירו | `וְלֹא תַחְמֹל וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Known; `כִּסָּה` kept out. The root `סתר` of the rendering = `בַּסֵּתֶר` (13:7): translation echo only. |
| EST 201, 205 | *lā tašmeāšu*, *lā tašammeāšu* | לא תשמעו לו | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [cognate] | Here a direct prohibition (no *-ni*): "do not listen" = do not comply, as in Deut. The link for §18 is our proposal. |
| EST 307–308 | *ana šarrūtīšu tamaggurāni* | (אם) למלכותו תסכימו | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [equivalent] | *magāru* = `אבה` "consent"; kept out of the translation. Our proposal. |
| EST 344 | *attunu tašammâni* (obey the inciter) | (אם) אתם תשמעו (לו) | `לֹא תֹאבֶה לוֹ וְלֹא תִשְׁמַע אֵלָיו` (דברים יג:ט) | [cognate] | *šemû* = `שמע` "obey"; Tayinat T v 1. |
| EST 347–348 | *qābiānu … turammâšūni* | את האומר … תרפו ממנו | `וְלֹא תָחוֹס עֵינְךָ עָלָיו וְלֹא תַחְמֹל וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | Do not let the inciter go. Tayinat T v 3–5 (plural "speakers"). |
| EST 505 | *nupazzarūni* | נסתיר | `וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | `כִּסָּה` kept out (Decision 7). |
| MAL §40, r v 77–79 | *ētamarma ūtaššir ana pî ēkalle lā ublašši* | ראה ושחרר, אל פי ההיכל לא הובילה | `וְלֹא תְכַסֶּה עָלָיו` (דברים יג:ט) | [equivalent] | The duty to report and not to conceal, enforced on the bystander. |
| EST 133 | *duākīšu šamuttīšu* | [להרגו], להמיתו | `כִּי הָרֹג תַּהַרְגֶנּוּ יָדְךָ תִּהְיֶה בּוֹ בָרִאשׁוֹנָה לַהֲמִיתוֹ` (דברים יג:י) | [equivalent] + [cognate] (*mâtu* Š = `הֵמִית`) / [divergence] | Same verb pair; in the treaty the conspirators' aim, in Deut the punishment of the inciter. *duāku* partly restored. |
| EST 139–140, 146, 160 | *lā tadūkāšanūni* etc. | לא תהרגו (אותם) | `כִּי הָרֹג תַּהַרְגֶנּוּ` (דברים יג:י) | [equivalent] | Here the swearers kill the inciters, as in Deut. |
| EST 144–145 | *issīšu lā tazzazāni* | עמו לא תעמדו | `וְיַד כָּל הָעָם בָּאַחֲרֹנָה` (דברים יג:י) | [equivalent] | If unable alone, act with others (here: with the crown prince). Our proposal. |
| EST 246 | *lā tadūkaššūni* | לא תהרגו אותו | `כִּי הָרֹג תַּהַרְגֶנּוּ` (דברים יג:י) | [equivalent] | The swearers kill the murderer, as Israel the inciter. |
| EST 80 | *tašammâni* | תשמעו | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ` (דברים יג:יג) | [cognate] |  |
| EST 135 | *ina pî memmēni tašammāni* | מפי איש תשמעו | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ … לֵאמֹר` (דברים יג:יג) | [cognate] | Both procedures start with a report heard. |
| EST 505 | *nišammûni nupazzarūni* | נשמע, נסתיר | `כִּי תִשְׁמַע בְּאַחַת עָרֶיךָ` (דברים יג:יג) | [cognate] | As 80, 119 (parts 1–2), now in the swearers' mouth. |
| EST 111 | *nakrīšu* | אויבו | `יָצְאוּ אֲנָשִׁים בְּנֵי בְלִיַּעַל מִקִּרְבֶּךָ` (דברים יג:יד) | [absent] | The treaty includes the enemy; Deut's inciters are all "from among you". |
| EST 147 | *ēpišānūte ša bārte lū ēṣūte lū maʾdūte* | עושי הקשר, בין מעטים, בין רבים | `וַיַּדִּיחוּ אֶת יֹשְׁבֵי עִירָם` (דברים יג:יד) | [equivalent] | A group of inciters. |
| EST 159 | *ṣābāni bēl ḫiṭṭi* | האנשים בעלי החטא | `אֲנָשִׁים בְּנֵי בְלִיַּעַל` (דברים יג:יד) | [equivalent] | *ḫīṭu* = `חֵטְא` [cognate]. |
| EST 135 | same | same | `וְדָרַשְׁתָּ וְחָקַרְתָּ וְשָׁאַלְתָּ הֵיטֵב` (דברים יג:טו) | [absent] | No investigation in the treaty. |
| EST 333 | *ša … iqbûni takūn* | אשר … אמרו – נכון? | `וְהִנֵּה אֱמֶת נָכוֹן הַדָּבָר` (דברים יג:טו) | [cognate] | *kânu* = `כון`: "the word is established". |
| LH §3, 341 | *kunnu* | כונן | `וְהִנֵּה אֱמֶת נָכוֹן הַדָּבָר` (דברים יג:טו) | [cognate] | F20. From memory. |
| LH §127, 1455' | *lā uktīn* | ולא כונן, | `אֱמֶת נָכוֹן הַדָּבָר` (דברים יג:טו) | [cognate] | *kânu* = `כון` |
| EST 170 | same | same | `הַכֵּה תַכֶּה אֶת יֹשְׁבֵי הָעִיר הַהִוא` (דברים יג:טז) | [equivalent] | Killing the rebel group. |
| LH epil. 3524' | *māssu ana til abūbim litēr* | ואת ארצו לתל מבול ישיב | `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | [cognate] | *tīlu* = תל. |
| LI epil. 492′–493′ | *iri{ki}-bi du₆-du₆-ra ḫe₂-en-šid* | את עריו לתלים ימנה | `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | [cognate] | *du₆* = Akk. *tīlu* ~ `תֵּל`: the city made a ruin-mound. Cross-collection: LH 3524′ `לתל מבול ישיב`. |
| EST 459 | *rēmu* | רחמים | `וְנָתַן לְךָ רַחֲמִים וְרִחַמְךָ` (דברים יג:יח) | [cognate] |  |
| LH epil. 3567' | *rēmam* | רחמים | `וְנָתַן לְךָ רַחֲמִים וְרִחַמְךָ` (דברים יג:יח) | [cognate] | *rēmu* = רחמים, reversed. |

### Deuteronomy 14

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 489 | *mimma ṭābu lū ikkibkunu* | כל טוב יהי איסורכם | `לֹא תֹאכַל כָּל תּוֹעֵבָה` (דברים יד:ג) | [equivalent] | *ikkibu* (food taboo) ↔ `תועבה`; kept out (open decision 4). Our proposal. |
| EST 523 | *ikkibu* | איסור | `לֹא תֹאכַל כָּל תּוֹעֵבָה` (דברים יד:ג) | [equivalent] | `תועבה` kept out (part 5, open decision 4). |

### Deuteronomy 15

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §48, 913–914 | *ṭuppašu uraṭṭab* | את לוחו ירטב | `שָׁמוֹט כָּל בַּעַל מַשֵּׁה יָדוֹ אֲשֶׁר יַשֶּׁה בְּרֵעֵהוּ` (דברים טו:ב) | [divergence] | Debt deferred (and that year's interest waived) after a natural disaster vs released in a fixed year. From memory. |
| EST 185 | *abutu lā ṭābtu … ina libbikunu tašakkanāni* | דבר לא טוב … בלבכם תשימו | `הִשָּׁמֶר לְךָ פֶּן יִהְיֶה דָבָר עִם לְבָבְךָ בְלִיַּעַל` (דברים טו:ט) | [equivalent] | A forbidden thought in the heart. Our proposal. |
| LH §117, 1328' | *ana kaspim nadānu* | נתן בכסף | `כִּי יִמָּכֵר לְךָ אָחִיךָ הָעִבְרִי אוֹ הָעִבְרִיָּה` (דברים טו:יב) | [equivalent] | "Give for silver" = sell (F5). |
| LH §117, 1331' | idem | idem | `וַעֲבָדְךָ שֵׁשׁ שָׁנִים וּבַשָּׁנָה הַשְּׁבִיעִת תְּשַׁלְּחֶנּוּ חָפְשִׁי מֵעִמָּךְ` (דברים טו:יב) | [divergence] |  |
| LH §191, 2452' | *ṣeḫrum šū rēqūssu* | הצעיר ההוא ריקם | `וְכִי תְשַׁלְּחֶנּוּ חָפְשִׁי מֵעִמָּךְ לֹא תְשַׁלְּחֶנּוּ רֵיקָם` (דברים טו:יג) | [cognate] | אותו שורש (*rēqu* = `רֵיק`, `רֵיקָם`) ואותו עיקרון: מי שעזב את בית אדונו/אביו לא יצא ריקם, אלא עם מתנה |
| MAL §37, r v 16–19 | *libbušuma mimma iddanašše … rāqutteša tuṣṣa* | (אם) לבו (לכך) – מאומה יתן לה … רֵיקָם תצא | `לֹא תְשַׁלְּחֶנּוּ רֵיקָם` (דברים טו:יג) | [cognate] | *rīqu* = ריק, *waṣû* = יצא; Deut forbids sending the released slave away empty, MAL lets the husband send his wife away empty. |
| LH §264, 2991' | *libbašu ṭāb* | ולבו טוב | `כִּי טוֹב לוֹ עִמָּךְ` (דברים טו:טז) | [cognate] | *ṭābu* = `טוב`; LH's receipt formula. |
| LH §282, 3139' | *ul bēlī atta* | "לא אדוני אתה" | `כִּי יֹאמַר אֵלֶיךָ לֹא אֵצֵא מֵעִמָּךְ כִּי אֲהֵבְךָ וְאֶת בֵּיתֶךָ` (דברים טו:טז) | [divergence] |  |
| LH §282, 3143' | *uzunšu* | את אזנו | `וְלָקַחְתָּ אֶת הַמַּרְצֵעַ וְנָתַתָּה בְאָזְנוֹ וּבַדֶּלֶת וְהָיָה לְךָ עֶבֶד עוֹלָם` (דברים טו:יז) | [divergence] |  |
| LH §226, 2689' | *abbutti wardim lā šêm* | `את תספורת העבדות של עבד לא שלו?` | `וְלָקַחְתָּ אֶת הַמַּרְצֵעַ וְנָתַתָּה בְאָזְנוֹ וּבַדֶּלֶת` (דברים טו:יז) | [equivalent] | אות גופני של עבדות; מן הזיכרון |
| LH §120, 1369' | *šanû* | יכפיל | `כִּי מִשְׁנֶה שְׂכַר שָׂכִיר עֲבָדְךָ` (דברים טו:יח) | [cognate] | *šanû* "two, double" ~ `שנים`, `משנה` (note only; `שינה` is *šunnû*). |

### Deuteronomy 16

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3213' | idem | idem | `וְשָׁפְטוּ אֶת הָעָם מִשְׁפַּט צֶדֶק` (דברים טז:יח) | [equivalent] |  |
| LH §5, 352 | *dayyānum* | דיין | `שֹׁפְטִים וְשֹׁטְרִים תִּתֶּן לְךָ בְּכָל שְׁעָרֶיךָ` (דברים טז:יח) | [equivalent] | The Torah's judge is `שֹׁפֵט` (cognate of *šapāṭu*). |
| LH §5, 359 | *dīnšu iteni* | את דינו המיר | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים וְלֹא תִקַּח שֹׁחַד` (דברים טז:יט) | [divergence] | The Torah forbids perverting judgment (bribery, partiality); LH punishes *altering* a sealed verdict, no motive named. From memory. |
| IN IN §9, 9.14 | *nu-uš-ma-aš DINGIR{MEŠ}-aš ZI-ni ḫa-ap-pár le-e *da*-at-te-ni* | ואַל תיקחו מסחר על נפש הָאֵלִים! | `וְלֹא תִקַּח שֹׁחַד כִּי הַשֹּׁחַד יְעַוֵּר עֵינֵי חֲכָמִים` (דברים טז:יט) | [equivalent] | הקבלה טיפולוגית |
| LH §5, 376 | idem | idem | `צֶדֶק צֶדֶק תִּרְדֹּף` (דברים טז:כ) | [divergence] |  |

### Deuteronomy 17

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 120–122 | *lā tallakāninni … lā taqabbâni* | לא תבואו … ולא תאמרו (לו) | `וְהֻגַּד לְךָ וְשָׁמָעְתָּ` (דברים יז:ד) | [equivalent] | The report to the authority. |
| EST 349–350 | *lā tallakāninni … lā taqabbāni* | לא תבואו … ולא תאמרו (לו) | `וְהֻגַּד לְךָ וְשָׁמָעְתָּ` (דברים יז:ד) | [equivalent] | See 120–122. |
| MAL §40, r v 98–99 | *ubtaʾʾerūš uktaʾʾinūš* | בררו עליו, כוננו עליו | `וְהִנֵּה אֱמֶת נָכוֹן הַדָּבָר` (דברים יז:ד) | [cognate] | *kânu* = כון. |
| MAL §47, r vii 12–13 | *šāmeʾānu illaka ana šarre iqabbi* | השומע ילך (ו)אל המלך יאמר | `וְהֻגַּד לְךָ וְשָׁמָעְתָּ; וְדָרַשְׁתָּ הֵיטֵב` (דברים יז:ד) | [equivalent] | The informer and the investigation. |
| LH §122, 1387' | *šībī ukallam* | לעדים יראה | `עַל פִּי שְׁנַיִם עֵדִים אוֹ שְׁלֹשָׁה עֵדִים` (דברים יז:ו) | [equivalent] | Witnesses and a contract at the deposit; Exod 22:6–12 has none [absent]. |
| MAL §12, o ii 22 | *šēbūtu ubtaʾʾerūš* | עדים בררו עליו | `עַל פִּי שְׁנַיִם עֵדִים אוֹ שְׁלֹשָׁה עֵדִים יוּמַת הַמֵּת` (דברים יז:ו) | [equivalent] | Proof by witnesses (number not stated in MAL). |
| MAL §40, r v 70 | *šēbūte išakkan* | עדים ישים | `עַל פִּי שְׁנַיִם עֵדִים` (דברים יז:ו) | [equivalent] |  |
| EST 145 | same | same | `יַד הָעֵדִים תִּהְיֶה בּוֹ בָרִאשֹׁנָה לַהֲמִיתוֹ` (דברים יז:ז) | [equivalent] |  |
| LE §48, 154 | *awat napištim* | דבר נפשות | `כִּי יִפָּלֵא מִמְּךָ דָבָר לַמִּשְׁפָּט בֵּין דָּם לְדָם` (דברים יז:ח) | [equivalent] | "Between blood and blood" = capital cases, sent up to the central court; in LE to the king. |
| LH epil. 3252'–3253' | *narî awatam likallimšu* | מצבתי את הדבר תראה לו | `וְדָרַשְׁתָּ וְהִגִּידוּ לְךָ אֵת דְּבַר הַמִּשְׁפָּט` (דברים יז:ט) | [equivalent] | Priests and judge "tell the matter"; here the stele shows it. Our proposal. |
| EST 195 | *kî pîšu* | כפיו | `וְעָשִׂיתָ עַל פִּי הַדָּבָר אֲשֶׁר יַגִּידוּ לְךָ` (דברים יז:י) | [equivalent] |  |
| EST 634 | same | same | `לֹא תָסוּר מִן הַדָּבָר אֲשֶׁר יַגִּידוּ לְךָ יָמִין וּשְׂמֹאל` (דברים יז:יא) | [equivalent] |  |
| LH epil. 3252'–3253' | idem | idem | `לֹא תָסוּר מִן הַדָּבָר אֲשֶׁר יַגִּידוּ לְךָ יָמִין וּשְׂמֹאל` (דברים יז:יא) | [equivalent] |  |
| EST 55 | *issu libbi ahhēšu* | מקרב אחיו | `מִקֶּרֶב אַחֶיךָ תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] | Our proposal; the treaty forbids a king from among the heir's brothers. |
| EST 71 | *ina muhhikunu tašakkanāni* | עליכם תשימו | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] | "Set a king over you" and the ban on another. Our proposal. |
| EST 191 | *šû lā šarkanūni* | הוא לא מלך לכם | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [equivalent] |  |
| EST 197 | *šarru šanumma … ina muhhīšu tubaʾʾāni* | מלך אחר … עליו תבקשו | `לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] |  |
| EST 214 | *issu libbi ahhēšu* | מקרב אחיו | `מִקֶּרֶב אַחֶיךָ תָּשִׂים עָלֶיךָ מֶלֶךְ` (דברים יז:טו) | [divergence] | A condition for the king in Deut, the source of danger here (see 55). |
| EST 301 | *šarru šanumma … lā tašakkana* | מלך אחר … לא תשימו | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ … לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] | See 71. |
| EST 509–510 | *šumma šarru šanumma … ina muhhīni … nišakkanūni* | אם מלך אחר, בן־מלך אחר / עלינו … נשים | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ … לֹא תוּכַל לָתֵת עָלֶיךָ אִישׁ נָכְרִי` (דברים יז:טו) | [equivalent] | *šakānu* = `שׂם`, "set a king over"; the ban on "another". As 71 (part 1). |
| LI prol. 40–47 | *sipa sun₅-na nibru{ki} engar zi uri₂{ki}-ma …* | הרועה הצנוע של ניפור, האכר הנאמן של אור … | `שׂוֹם תָּשִׂים עָלֶיךָ מֶלֶךְ אֲשֶׁר יִבְחַר יְהוָה אֱלֹהֶיךָ בּוֹ` (דברים יז:טו) | [divergence] | The Mesopotamian king's titles by city and god; Deuteronomy's king has no titles, only limits (יז:טז–כ). *engar* = `אִכָּר` [cognate loan]. |
| EST 48 | same | same | `וְהָיָה כְשִׁבְתּוֹ עַל כִּסֵּא מַמְלַכְתּוֹ` (דברים יז:יח) | [equivalent] |  |
| LH prol. 297 | *uwa''eranni* | ציווני | `וְכָתַב לוֹ אֶת מִשְׁנֵה הַתּוֹרָה הַזֹּאת עַל סֵפֶר` (דברים יז:יח) | [divergence] | In Deut the king receives the law; here he gives it at the god's command. |
| LH epil. 3299'–3300' | *šarrum ša ina mātim ibbaššû* | המלך אשר בארץ יהיה | `וְהָיָה כְשִׁבְתּוֹ עַל כִּסֵּא מַמְלַכְתּוֹ וְכָתַב לוֹ אֶת מִשְׁנֵה הַתּוֹרָה הַזֹּאת` (דברים יז:יח) | [equivalent] | The future king and the written law. From memory. |
| LI epil. 463′–464′ | *mu-sar-ra-ba šu bi₂-ib₂-ur₃-ru-a mu-ni bi₂-ib₂-sar-re-a* | את כתובתה ימחה, את שמו יכתוב | `וְכָתַב לוֹ אֶת מִשְׁנֵה הַתּוֹרָה הַזֹּאת עַל סֵפֶר` (דברים יז:יח) | [divergence] | The later king who writes his own name on the law (cursed) vs the king who writes a copy of the law for himself (commanded). Cross-collection: LH 3375′–3377′ `את שמי הכתוב מחה ואת שמו כתב`. |
| EST 396 | same | same | `לְמַעַן יִלְמַד לְיִרְאָה אֶת יְהוָה אֱלֹהָיו` (דברים יז:יט) | [equivalent] | The king reading the written law (cf. §35). |
| LH epil. 3248' | idem | idem | `וְקָרָא בוֹ כָּל יְמֵי חַיָּיו` (דברים יז:יט) | [equivalent] | The king reads his copy of the law. |
| LH epil. 3301'–3304' | *awât mīšarim ša ina narîya ašṭuru liṣṣur* | את דברי המישרים אשר במצבתי כתבתי ינצור | `לִשְׁמֹר אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת וְאֶת הַחֻקִּים הָאֵלֶּה לַעֲשֹׂתָם` (דברים יז:יט) | [equivalent] | *naṣāru* = `נצר`, not `שמר`. From memory. |
| EST 192 | same | same | `לְבִלְתִּי רוּם לְבָבוֹ מֵאֶחָיו` (דברים יז:כ) | [divergence] | The king's law limits the king; the treaty secures his power. |
| EST 634 | same | same | `וּלְבִלְתִּי סוּר מִן הַמִּצְוָה יָמִין וּשְׂמֹאול` (דברים יז:כ) | [equivalent] | Said of the king. |
| LH epil. 3357' | *ḫaṭṭašu lirrik* | שרביטו יאריך | `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ הוּא וּבָנָיו בְּקֶרֶב יִשְׂרָאֵל` (דברים יז:כ) | [cognate] | *arāku* = ארך; the reward of the king who keeps the written law (17:18–19). From memory (Weinfeld). |
| LI epil. 454′–455′ | *nam-ti zi-u₄-su₃ ĝal₂ saĝ-e-eš ḫe₂-rig₇-ga* | חיים, נפש בעלת ימים ארוכים, יימסרו (לו) | `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ הוּא וּבָנָיו` (דברים יז:כ) | [equivalent] | **Long life as the reward for keeping the written law** – for the later king in both (LI: one who does not damage the stone; Deut: the king who reads the Torah). |

### Deuteronomy 18

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| IN IN §8, 8.4 | *an-da NU.GÁL ku-it ku-it DINGIR-LIM-ni-ma-at e-eš-zi-pát* | בתוכו – אין (לכם); כל מה שיש – לָאֵל הוא, ממש. | `לֹא יִהְיֶה לַכֹּהֲנִים הַלְוִיִּם כָּל שֵׁבֶט לֵוִי חֵלֶק וְנַחֲלָה עִם יִשְׂרָאֵל; אִשֵּׁי יְהוָה וְנַחֲלָתוֹ יֹאכֵלוּן` (דברים יח:א) | [equivalent] | הכוהן אינו בעל רכוש; הוא חי ממה שהוא של האל. ההקבלה טיפולוגית |
| LH §165, 1962' | *mitḫāriš* | שווה בשווה | `חֵלֶק כְּחֵלֶק יֹאכֵלוּ לְבַד מִמְכָּרָיו עַל הָאָבוֹת` (דברים יח:ח) | [equivalent] | חלק שווה, "מלבד" נכס פרטי; כמו *elēnumma … mitḫāriš*. הצעה שלנו |
| EST 264 | same | same | `מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | [cognate] |  |
| LH epil. 3471' | idem | idem | `לֹא יִמָּצֵא בְךָ … קֹסֵם קְסָמִים` (דברים יח:י) | [divergence] | Forbidden in Deut, the king's normal means here. |
| LH §2, 312 | *kišpī* | כשפים | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | [cognate] |  |
| MAL §47, r vii 2 | *kišpē uppišū* | כשפים עשו | `וּמְכַשֵּׁף` (דברים יח:י) | [cognate] |  |
| HL HL2 §111, 111.1 | *… al-wa-an-za-tar DI-IN LUGAL* | [אם] מישהו [יתפוס] חומר [לפסלון – כשפים (הם), דין המלך]. | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י) | [equivalent] | הכישוף ברשימת העיסוקים האסורים |
| EST 117 | *šāʾilu* | שואל | `וְשֹׁאֵל אוֹב וְיִדְּעֹנִי` (דברים יח:יא) | [cognate] |  |
| LI epil. 439′ | *niĝ₂-gig* | לאיסור | `כִּי תוֹעֲבַת יְהוָה כָּל עֹשֵׂה אֵלֶּה` (דברים יח:יב) | [equivalent] | *niĝ₂-gig* (Akk. *ikkibu*) "taboo, abomination (to a god)" ~ `תּוֹעֵבָה` (reserved, kept out); here the king makes weeping and complaint "taboo". |
| LH epil. 3153' | *šarrum gitmālum* | המלך התמים | `תָּמִים תִּהְיֶה עִם יְהוָה אֱלֹהֶיךָ` (דברים יח:יג) | [equivalent] | Our proposal. |
| EST 195 | same | same | `אֵלָיו תִּשְׁמָעוּן` (דברים יח:טו) | [cognate] | Obedience to the successor-prophet. |
| EST 512 | *lubaʾʾiʾū* | יבקשו | `אָנֹכִי אֶדְרֹשׁ מֵעִמּוֹ` (דברים יח:יט) | [equivalent] | The god demands obedience from the hearer. |

### Deuteronomy 19

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §206, 2565'–2566' | *ina idû lā amḫaṣu* | "בדעת לא מחצתי" | `אֲשֶׁר יַכֶּה אֶת רֵעֵהוּ בִּבְלִי דַעַת` (דברים יט:ד) | [equivalent] | F26; *idû* = ידע [cognate] of `דַעַת`. |
| LH §227, 2703' | *lā ugallibu* | `לא גילחתי"` | `אֲשֶׁר יַכֶּה אֶת רֵעֵהוּ בִּבְלִי דַעַת` (דברים יט:ד) | [equivalent] | הפטור של מי שפעל בלי ידיעה |
| HL HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – | `וְנִדְּחָה יָדוֹ בַגַּרְזֶן` (דברים יט:ה) | [equivalent] | `אֲשֶׁר יַכֶּה אֶת רֵעֵהוּ בִּבְלִי דַעַת` (דברים יט:ד) |
| HL HL2 §157, 157.1 | *[ták-ku a-t]e-eš ZABAR …* | [אם גרזן] אָרָד של שלוש מנים משקל – לח[ודש] אחד שקל אחד כסף שְׂכָרוֹ; | `וְנִדְּחָה יָדוֹ בַגַּרְזֶן לִכְרֹת הָעֵץ` (דברים יט:ה) | [equivalent] | הגרזן ככלי עבודה |
| EST 577–578 | *bēl dāmēkunu lukaššidū lidūkūkunu* | בעלי דמיכם ירדפו, יהרגו אתכם | `פֶּן יִרְדֹּף גֹּאֵל הַדָּם אַחֲרֵי הָרֹצֵחַ … וְהִשִּׂיגוֹ` (דברים יט:ו) | [equivalent] | The "lord of blood" pursues, overtakes and kills. **Not in Tayinat** (no *bēl dāmē*). Our proposal. |
| HL HL1 §37, 187 | *takku MUNUS-an ku[išk]i pittenuzzi* | אם [מישהו] יבריח אשה, | `פֶּן יִרְדֹּף גֹּאֵל הַדָּם אַחֲרֵי הָרֹצֵחַ כִּי יֵחַם לְבָבוֹ וְהִשִּׂיגוֹ` (דברים יט:ו) | [equivalent] | הרדיפה אחרי בורח בחמת לב |
| EST 259 | same | same | `וְנָתְנוּ אֹתוֹ בְּיַד גֹּאֵל הַדָּם וָמֵת` (דברים יט:יב) | [equivalent] | The blood avenger. |
| MAL §10, o i 100–101 | *ana bēl bēt dāʾikānūte iddunū* | [לבעל הבית] את ההורגים [יתנו] | `וְנָתְנוּ אֹתוֹ בְּיַד גֹּאֵל הַדָּם וָמֵת` (דברים יט:יב) | [equivalent] | The killer handed over to the victim's side. *bēl bēte* is the editor's restoration. |
| MALB §2, o ii 17 | *ana bēl napšāte iddunūš* | `לבעל הנפשות יתנוהו` | `וְנָתְנוּ אֹתוֹ בְּיַד גֹּאֵל הַדָּם וָמֵת` (דברים יט:יב) | [equivalent] | Handing over to the avenger. |
| MALB §8, o iv 11–12 | *šumma aʾīlu tahūma rabiu ša tappāʾišu usammeh* | `אם איש תחום גדול / של עמיתו עירב` | `לֹא תַסִּיג גְּבוּל רֵעֲךָ אֲשֶׁר גָּבְלוּ רִאשֹׁנִים` (דברים יט:יד) | [equivalent] | The standard comparison (from memory). *taḫūmu* = `תחום` (the Mishnaic/Aramaic loan of this word), `גבול` kept out; *samāḫu* D "mix, confuse (borders), incorporate" is **not** `הסיג` ("move back"); *tappû* `עמית` vs `רֵעֲךָ`. |
| MALB §9, o iv 20–21 | *šumma aʾīlu tahūma ṣehra ša pūrāni usbalkit* | `אם איש תחום קטן / של הַפּוּרִים הזיז` | `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) | [equivalent] | *šubalkutu* "make cross over, shift" is the closest Akkadian verb to `הִסִּיג`, but not its equivalent; "the small boundary of the lots" = between allotted plots. |
| MALB §20, r vii 21 | *[kudur]ra ukaddir* | `[ציון] ציין` | `לֹא תַסִּיג גְּבוּל רֵעֲךָ אֲשֶׁר גָּבְלוּ רִאשֹׁנִים` (דברים יט:יד) | [equivalent] | *kadāru* D "delimit" ~ `גָּבְלוּ`; here the offence is setting up a new boundary on another's field, not moving an old one. *kudurru* partly restored. |
| HL HL2 §168, 168.1 | *ták-[ku A.ŠÀ-aš ar-ḫa-an ku-iš-ki pár-ši-i]a …* | אם [מישהו יפרוץ את גבול השדה] – יישא תלם אחד; בעל השדה | `לֹא תַסִּיג גְּבוּל רֵעֲךָ אֲשֶׁר גָּבְלוּ רִאשֹׁנִים` (דברים יט:יד) | [divergence] | הגבול מקודש בשני המקומות; בתורה עבירה, כאן פיצוי בקרקע וטקס קידוש |
| LH §3, 341 | *awāt iqbû lā uktīn* | ואת הדבר אשר אמר לא כונן | `עַל פִּי שְׁנֵי עֵדִים אוֹ עַל פִּי שְׁלֹשָׁה עֵדִים יָקוּם דָּבָר` (דברים יט:טו) | [equivalent] | "Establish the word" ≈ `יָקוּם דָּבָר`. Our proposal. |
| MAL §47, r vii 14–22 | *āmerānu … itteker … šarru … iltanaʾʾalšu* | אם הרואה … התנכר … המלך … ישאלנו פעם אחר פעם | `לֹא יָקוּם עֵד אֶחָד בְּאִישׁ` (דברים יט:טו) | [divergence] | A hearsay witness starts the king's inquiry; the eyewitness who denies is interrogated. |
| LH §3, 338 | *sarrātim* | שקרים | `כִּי יָקוּם עֵד חָמָס בְּאִישׁ לַעֲנוֹת בּוֹ סָרָה` (דברים יט:טז) | [equivalent] | The proposed cognate *sarrātu* ~ `סָרָה` is in the note only (F15, open decision). |
| LH §3, 345 | *awīlum šū iddâk* | האיש ההוא יהרג | `וְדָרְשׁוּ הַשֹּׁפְטִים הֵיטֵב וְהִנֵּה עֵד שֶׁקֶר הָעֵד שֶׁקֶר עָנָה בְאָחִיו וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יח–יט) | [equivalent] | The false witness in a capital case dies, as the accused would have; LH has no inquiry clause and no talion list (Deut 19:21). From memory. |
| LH §18, 546 | *warkassu ipparras* | עניינו ייפסק | `וְדָרְשׁוּ הַשֹּׁפְטִים הֵיטֵב` (דברים יט:יח) | [equivalent] | Investigation of the case. |
| LH §9, 443 | *dayyānū* | `הדיינים` | `וְדָרְשׁוּ הַשֹּׁפְטִים הֵיטֵב` (דברים יט:יח) | [equivalent] | השופטים חוקרים את העדות |
| LH §168, 2017' | *iparrasuma* | יפסקו, | `וְדָרְשׁוּ הַשֹּׁפְטִים הֵיטֵב` (דברים יט:יח) | [equivalent] | חקירת השופטים לפני הפסק |
| UN §27, 403–409 | *lu₂ lu₂ ki-inim-ma-še₃ ib₂-ta-e₃, lu₂ ni₂-zuḫ ba-an-ku₄, 15 gin₂* | איש על איש לעדות יצא, ואיש גנב נעשה, חמישה עשר שקל כסף ישקול | `וְהִנֵּה עֵד שֶׁקֶר הָעֵד שֶׁקֶר עָנָה בְאָחִיו` (דברים יט:יח) | [equivalent] / [divergence] | The false witness – called a "thief" in Sumerian; a fixed fine, not `כַּאֲשֶׁר זָמַם` (דברים יט:יט; LH §3–§4). |
| EST 322, 336 | *kapādu* | (לזמום) | `כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | Plotting against a brother. |
| LH §1, 310 | *iddâk* | יהרג | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | The unproven accuser of murder dies: the "as he schemed" principle (§1–§4). From memory. |
| LH §2, 330 | *iddâk* | יהרג | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | The accuser cleared by the River dies. From memory. |
| LH §4, 351 | *ittanašši* | ישא | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | The false witness pays what was at stake in the case. |
| LH §11, 484 | *iddak* | `יהרג.` | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | מידה כנגד מידה: מי שהאשים את המחזיק בגניבה (שעונשה מוות) ולא הוכיח – נהרג. מן הזיכרון (השוו §1–§3) |
| MAL §20, o ii 96 | *inikkūš* | יבואו עליו | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | The mirror principle. Our proposal. |
| LI §17, 213′–220′ | *lu₂ lu₂-u₃ … in-da-la₂ … nu-un-ge-en … nam i-ni-tag-ba ib₂-il₂-e* | איש את איש … האשים … לא כונן … את עונו ישא | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [equivalent] | The accuser who fails to prove bears the penalty of the charge (the talion of the false accusation). Torah: the false witness, after the judges' inquiry (יט:יח); LI: the accuser himself. Cross-collection: LH §1–§4 (304–351): the accuser `יהרג`; §4 (349–351) `את עון … ישא`. |
| UN §13, 263 | *3 gin₂ … i₃-la₂-e* | שלושה שקלי כסף ישקול | `וַעֲשִׂיתֶם לוֹ כַּאֲשֶׁר זָמַם לַעֲשׂוֹת לְאָחִיו` (דברים יט:יט) | [divergence] | The false accuser: a fixed fine, not the penalty he intended. |
| LH §196, 2511' | *uḫappadū* | ינקרו | `נֶפֶשׁ בְּנֶפֶשׁ עַיִן בְּעַיִן שֵׁן בְּשֵׁן` (דברים יט:כא) | [equivalent] |  |

### Deuteronomy 20

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §27, 642 | *ana šanîm* | `לאחר` | `פֶּן יָמוּת בַּמִּלְחָמָה וְאִישׁ אַחֵר יַחְנְכֶנּוּ` (דברים כ:ה) | [divergence] | בתורה החשש ש"איש אחר" ייקח את הבית או את הכרם של מי שמת במלחמה הוא נימוק לפטור מן הצבא; ב־LH "אחר" מחזיק בשדה של השבוי, וממלא את השירות עד שישוב. הצעה שלנו. |
| LH §33, 730 | *u lu laputtûm* | `ובין מְמוּנֶּה` | `וְדִבְּרוּ הַשֹּׁטְרִים אֶל הָעָם לֵאמֹר מִי הָאִישׁ אֲשֶׁר בָּנָה בַיִת חָדָשׁ` (דברים כ:ה) | [equivalent] | השוטרים הם הממונים שמשחררים אנשים מן הצבא; ב־LH הממונה שמשחרר חייל תמורת שכיר – דינו מוות. מן הזיכרון (את השוטרים); הצעה שלנו (את הניגוד). |
| LH §27, 642 | *ana šanîm* | `לאחר` | `וְאִישׁ אַחֵר יְחַלְּלֶנּוּ` (דברים כ:ו) | [divergence] | בתורה החשש ש"איש אחר" ייקח את הבית או את הכרם של מי שמת במלחמה הוא נימוק לפטור מן הצבא; ב־LH "אחר" מחזיק בשדה של השבוי, וממלא את השירות עד שישוב. הצעה שלנו. |
| LH §60, 1055 | idem | idem | `וּמִי הָאִישׁ אֲשֶׁר נָטַע כֶּרֶם וְלֹא חִלְּלוֹ` (דברים כ:ו) | [equivalent] | The planter and the first enjoyment of the fruit. Our proposal. |
| LI §8, 147′–151′ | *kislaḫ ba-ra-ab-tak₄-a … in-na-ab-šum₂-mu* | את השטח הזנוח אשר נעזב … יתנו לו | `וּמִי הָאִישׁ אֲשֶׁר נָטַע כֶּרֶם וְלֹא חִלְּלוֹ` (דברים כ:ו) | [absent] | No Torah law on planting for another. Cross-collection: = LH §61 (1071′–1077′) `לא גמר, ושטח זנוח עזב, את השטח הזנוח בתוך חלקו יָשִׂימוּ לו` – nearly the same law. |
| MALB §12, r v 14 | *kirê iddi* | `גן ייסד` | `מִי הָאִישׁ אֲשֶׁר נָטַע כֶּרֶם וְלֹא חִלְּלוֹ` (דברים כ:ו) | [equivalent] | *nadû* "lay out", not LH's *zaqāpu* (`נטע`); `נטע` kept out (also Gen 2:8). |
| IN IN §9, 9.8 | *pé-ra-an na-aš-šu ku-ša-a-ta na-aš-šu KASKAL-aš na-aš-ma ta-ma-i* | לפניי, או מֹהַר, או דרך, או אחר – | `וּמִי הָאִישׁ אֲשֶׁר נָטַע כֶּרֶם וְלֹא חִלְּלוֹ` (דברים כ:ו) | [equivalent] | `וּמִי הָאִישׁ אֲשֶׁר אֵרַשׂ אִשָּׁה וְלֹא לְקָחָהּ` (דברים כ:ז) – אותם תירוצים (קציר, נישואים) הם בתורה סיבות מוצדקות לפטור מן המלחמה; כאן הם תירוצים פסולים לדחיית החג |
| LH §159, 1872' | *ul aḫḫaz iqtabi* | לא אשא" אמר, | `וּמִי הָאִישׁ אֲשֶׁר אֵרַשׂ אִשָּׁה וְלֹא לְקָחָהּ` (דברים כ:ז) | [equivalent] | מצב האירוסין: שולמו הכסף והמתנות, והנישואים טרם נעשו |
| LH §26, 624 | *lā illik* | `לא הלך,` | `מִי הָאִישׁ הַיָּרֵא וְרַךְ הַלֵּבָב יֵלֵךְ וְיָשֹׁב לְבֵיתוֹ` (דברים כ:ח) | [equivalent] | בתורה מי שאינו הולך למלחמה שב לביתו בהיתר; ב־LH מי שלא הלך נהרג. מן הזיכרון |
| LH §33, 729 | *šumma lu ša-ḫaṭṭātim* | `אם בין קָצִין` | `וּפָקְדוּ שָׂרֵי צְבָאוֹת בְּרֹאשׁ הָעָם` (דברים כ:ט) | [equivalent] | המפקדים של צבא המלך. מן הזיכרון. |
| LH §36, 767 | *ša nāši biltim* | `ונושא מַס` | `יִהְיוּ לְךָ לָמַס וַעֲבָדוּךָ` (דברים כ:יא) | [equivalent] | מן הזיכרון (דברים כ:יא); האטימולוגיה מן המילונים (Sefaria: BDB, Jastrow). |
| LH §59, 1051 | *iṣam ikkis* | עץ קצץ | `וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [equivalent] | Cutting a (fruit) tree: a private tort with a fine (LH) vs a law of siege warfare (Deut); *nakāsu* `קצץ`, not `כרת`. From memory. |
| LI §7, 138′ | *zu₂-lum-bi in-da-gu₇-e* | את תמריהם יאכל | `כִּי מִמֶּנּוּ תֹאכֵל וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [equivalent] | Eating from the trees as a right (the gardener's tenth); cf. LH §64 (the gardener's third). |
| LI §10, 158′–160′ | *ĝeš in-saĝ₃ 1/2 ma-na ku₃-babbar i₃-la₂-e* | עץ גָּדַע, חצי מנה כסף ישקול | `לֹא תַשְׁחִית אֶת עֵצָהּ לִנְדֹּחַ עָלָיו גַּרְזֶן … וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [equivalent] | The fruit tree protected; Torah: the enemy's trees in a siege, no penalty; LI: another's orchard, a fine. Cross-collection: = LH §59 (1048′–1053′) `בגן איש עץ קצץ, חצי מנה כסף ישקול` – the same fine. |
| HL HL2 §104, 104.1 | *[ták-ku {GI]Š}ḪAŠḪUR.KUR.RA na-aš-ma {GIŠ}ŠENNUR ku-iš-ki kar-aš-[zi]* | [אם] מישהו יחתוך תפוח־הרים או עוזרר, | `לֹא תַשְׁחִית אֶת עֵצָהּ לִנְדֹּחַ עָלָיו גַּרְזֶן כִּי מִמֶּנּוּ תֹאכֵל וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [divergence] | בתורה הגנה עקרונית על עץ המאכל במלחמה; בחוק החתי – נזק לרכוש, ומחירו בכסף |
| LH §59, 1051 | idem | idem | `אֹתוֹ תַשְׁחִית וְכָרָתָּ` (דברים כ:כ) | [equivalent] | The cutting verb of the Torah (`כרת`); non-fruit trees may be cut. |
| LI §10, 158′ | *ĝeš in-saĝ₃* | עץ גָּדַע | `רַק עֵץ אֲשֶׁר תֵּדַע כִּי לֹא עֵץ מַאֲכָל הוּא אֹתוֹ תַשְׁחִית וְכָרָתָּ` (דברים כ:כ) | [divergence] | The Torah permits felling non-fruit trees; LI makes no distinction (any tree in an orchard). |

### Deuteronomy 21

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §23, 598 | *iriabbūšum* | יחליפו לו | `כִּי יִמָּצֵא חָלָל בָּאֲדָמָה … לֹא נוֹדַע מִי הִכָּהוּ` (דברים כא:א) | [divergence] | Unknown offender → the city: LH compensates the victim; Deut 21 expiates by the heifer and the elders' declaration. From memory. |
| UN c012–c014 | *da-gi₄-a ib₂-su-su* | הרובע יחליף | `כִּי יִמָּצֵא חָלָל בָּאֲדָמָה … לֹא נוֹדַע מִי הִכָּהוּ` (דברים כא:א) | [equivalent] | Collective responsibility of the locality (cf. LH §23). |
| HL HL1 §6, 29 | *takku LÚ.U₁₉.LU-aš LÚ-aš našma MUNUS-za takiya URU-ri* | אם אדם – איש או אשה – ימות בעיר אחרת, | `כִּי יִמָּצֵא חָלָל בָּאֲדָמָה … נֹפֵל בַּשָּׂדֶה: לֹא נוֹדַע מִי הִכָּהוּ` (דברים כא:א) | [divergence] | `וְיָצְאוּ זְקֵנֶיךָ וְשֹׁפְטֶיךָ; וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (דברים כא:ב) – בתורה חלל שהורג אינו ידוע, והעיר הקרובה מכפרת בטקס (עגלה ערופה, הצהרת ניקיון); בחוק החתי אדם שפשוט "מת" בעיר זרה, ובעל הקרקע שבגבולו מת מוותר לבית המת על חלקת אדמה. אין כאן טקס, אין אשמת דם, ואין … |
| HL PT § IV, 22 | *dammel pēdan duwan 3 DANNA duwann=a 3* | מקום לא מעובד – לכאן שלוש פרסאות ולכאן שלוש פרסאות, | `נֹפֵל בַּשָּׂדֶה` (דברים כא:א) | [equivalent] | המקום: שטח פתוח, לא עיר. שני החוקים פותרים את אותה בעיה – אחריות למת שנמצא מחוץ לתחום של מישהו – באותו כלי |
| LH §23, 592–593 | *ša ina erṣetišunu u paṭṭišunu* | אשר בארצם ובגבולם | `וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (דברים כא:ב) | [equivalent] | Responsibility by territory. |
| HL PT § IV, 22 | *dammel pēdan duwan 3 DANNA duwann=a 3* | מקום לא מעובד – לכאן שלוש פרסאות ולכאן שלוש פרסאות, | `וּמָדְדוּ אֶל הֶעָרִים אֲשֶׁר סְבִיבֹת הֶחָלָל` (דברים כא:ב) | [equivalent] | אותה פעולה בדיוק: כשהמת נמצא בשטח פתוח ואין לו בעל, מודדים ממנו אל הערים שסביבו |
| HL PT § IV, 26 | *n=aš=kan šamenzi* | והוא יפסיד. | `וּמָדְדוּ אֶל הֶעָרִים` (דברים כא:ב) | [divergence] | מניח שתמיד תימצא עיר קרובה, כי אשמת הדם חייבת להיות מכופרת. בחוק החתי, כשאין עיר – אין חייב, והתביעה אובדת: עניין של ממון, לא של דם |
| LH §23, 590–591 | *ālum u rabiānum* | והעיר וראש העיר | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא עֶגְלַת בָּקָר` (דברים כא:ג) | [equivalent] | The city and its leaders answer for what happened in their territory. From memory. |
| MAL §45, r vi 62 | *dayyānū ḫaziāna rabiūte ša āle išaʾʾulū* | הדיינים את החַזָּן (ו)את גדולי העיר ישאלו | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא` (דברים כא:ג) | [equivalent] | The town's notables as a legal body. |
| HL HL1 §71, 409 | *n=an {LÚ.MEŠ}ŠU.GI-aš ḫinkanzi* | ואותו לזקנים יציגו, | `זִקְנֵי הָעִיר הַהִוא` (דברים כא:ג) | [equivalent] | הזקנים כרשות המקומית |
| HL PT § IV, 23 | *nu=kan kuiš kuiš URU-aš anda SI×SÁ-ri* | וכל עיר ועיר אשר תיקבע בתוכו, | `וְהָיָה הָעִיר הַקְּרֹבָה אֶל הֶחָלָל` (דברים כא:ג) | [divergence] | בתורה המדידה מכריעה על עיר אחת, הקרובה; בנוסח החתי כל עיר שבתוך רדיוס קבוע |
| HL PT § IV, 24 | *nu apūš=pat dāi* | ואותם עצמם ייקח. | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא עֶגְלַת בָּקָר` (דברים כא:ג) | [divergence] | בתורה אנשי העיר הקרובה "לוקחים" עגלה ועורפים אותה, רוחצים ידיים ואומרים `יָדֵינוּ לֹא שָׁפְכֻה (שָׁפְכוּ) אֶת הַדָּם הַזֶּה` (דברים כא:ז); בנוסח החתי בית המת "לוקח" את העיר עצמה – כלומר את הפיצוי ממנה. אותה מדידה, ושתי תוצאות הפוכות: בתורה העיר מתנקה בטקס מאשמת דם (`וְנִכַּפֵּר לָהֶם הַדָּם`, … |
| LH §27, 639 | *turru* | `שָׁבוּי,` | `וְשָׁבִיתָ שִׁבְיוֹ` (דברים כא:י) | [equivalent] | `נִשְׁבָּה` של התורה (על בהמה) |
| HL HL2 §200a, 200a.4 | *kat-ta še-eš-ke-ez-zi an-na-aš-ša-an n[e]-k[a-aš-ša-an-na ú-en-zi]* | שוכב, ועל אִמָּהּ ועל [אחותה יבוא] – | `וְרָאִיתָ בַּשִּׁבְיָה אֵשֶׁת יְפַת תֹּאַר` (דברים כא:יא) | [divergence] | התורה מסדירה את המשכב עם השבויה כנישואים; כאן השבויה, אמה ואחותה – "אין עברה", כמו באמהות (194.1) |
| LH §146, 1723' | *abbuttam* | תספורת עבדות | `וְגִלְּחָה אֶת רֹאשָׁהּ` (דברים כא:יב) | [divergence] | Hair as a mark of passage (there into marriage). |
| LH §226, 2689' | *abbutti wardim lā šêm* | `את תספורת העבדות של עבד לא שלו?` | `וְגִלְּחָה אֶת רֹאשָׁהּ` (דברים כא:יב) | [divergence] | גילוח כמעבר ממעמד למעמד. מן הזיכרון (אות העבד של LH ↔ רציעת האוזן) |
| LH §226, 2690' | *ugallib* | `גילח,` | `וְגִלְּחָה אֶת רֹאשָׁהּ` (דברים כא:יב) | [equivalent] |  |
| LH epil. 3497' | *warḫī* | ירחים | `וּבָכְתָה אֶת אָבִיהָ וְאֶת אִמָּהּ יֶרַח יָמִים` (דברים כא:יג) | [cognate] | *warḫu* = ירח. |
| MAL §18, o ii 79 | *urah ūmāte* | יֶרַח ימים | `וּבָכְתָה אֶת אָבִיהָ וְאֶת אִמָּהּ יֶרַח יָמִים` (דברים כא:יג) | [cognate] | The same idiom (*warḫu* = ירח, *ūmu* = יום). Forced labour for the king as a penalty is [absent] in the Torah. |
| MAL §40, r v 87 | *urah ūmāte šipar šarre eppaš* | ירח ימים את מלאכת המלך יעשה | `וּבָכְתָה אֶת אָבִיהָ וְאֶת אִמָּהּ יֶרַח יָמִים` (דברים כא:יג) | [cognate] | `יֶרַח יָמִים`; forced labour as penalty [absent] in the Torah. Also r v 106. |
| LH §146, 1722' | *ana kaspim ul inaddišši* | בכסף לא תתננה | `וּמָכֹר לֹא תִמְכְּרֶנָּה בַּכָּסֶף` (דברים כא:יד) | [equivalent] | A woman taken into the man's life is not sold "for silver". Our proposal (with the next row). |
| MAL §33, o iv 70 | *ašar ḫadiatūni tallak* | אל אשר חפצה – תלך | `וְשִׁלַּחְתָּהּ לְנַפְשָׁהּ` (דברים כא:יד) | [equivalent] | Free to go where she wishes. |
| LH §165, 1946' | *šumma awīlum* | אם איש | `כִּי תִהְיֶיןָ לְאִישׁ שְׁתֵּי נָשִׁים הָאַחַת אֲהוּבָה וְהָאַחַת שְׂנוּאָה` (דברים כא:טו) | [equivalent] | דיני הירושה של התורה פותחים גם הם ב"איש"; §165–§176 הם הגוש הבבלי המקביל לדברים כא:טו–כא (הבכור, הבן הסורר) ולסיפורי הירושה של בראשית |
| LH §167, 1996' | *ītahazma* | נשא, | `כִּי תִהְיֶיןָ לְאִישׁ שְׁתֵּי נָשִׁים` (דברים כא:טו) | [equivalent] | שתי נשים ובנים משתיהן; כאן בזו אחר זו, בתורה בבת אחת |
| LH §170, 2038' | *ḫīrtašu* | בחירתו | `הָאַחַת אֲהוּבָה וְהָאַחַת שְׂנוּאָה` (דברים כא:טו) | [equivalent] | הבחנה בין שתי נשים |
| LI §24, 291′–295′ | *dumu dam gidlam u₃ dumu dam egir-ra … teš₂-a se₃-ga-bi i₃-ba-e-ne* | בני האשה הבחירה ובני האשה האחרונה … שווה בשווה יחלוקו | `כִּי תִהְיֶיןָ לְאִישׁ שְׁתֵּי נָשִׁים הָאַחַת אֲהוּבָה וְהָאַחַת שְׂנוּאָה` (דברים כא:טו) | [equivalent] | Inheritance of the sons of two wives. |
| LH §150, 1768' | *warkassa* | את נחלתה | `וְהָיָה בְּיוֹם הַנְחִילוֹ אֶת בָּנָיו` (דברים כא:טז) | [equivalent] |  |
| LH §150, 1770' | *ana māriša ša irammu* | לבנה אשר תאהב | `לֹא יוּכַל לְבַכֵּר אֶת בֶּן הָאֲהוּבָה עַל פְּנֵי בֶן הַשְּׂנוּאָה הַבְּכֹר` (דברים כא:טז) | [divergence] | The Torah forbids favouring by love; LH lets the mother give to the son she loves. Our proposal. |
| LH §165, 1948' | *ša īnšu maḫru* | אשר עינו מקבלת אותו, | `לֹא יוּכַל לְבַכֵּר אֶת בֶּן הָאֲהוּבָה עַל פְּנֵי בֶן הַשְּׂנוּאָה הַבְּכֹר` (דברים כא:טז) | [divergence] | התורה אוסרת להעדיף בירושה את בן האהובה; LH מתיר לאב לתת לבן ש"עינו מקבלת אותו" מענק בחייו, בתעודה חתומה. מן הזיכרון (ההשוואה של §165 לדברים כא:טו–יז מקובלת) |
| LH §165, 1956' | *izuzzū* | יחלוקו, | `וְהָיָה בְּיוֹם הַנְחִילוֹ אֶת בָּנָיו אֵת אֲשֶׁר יִהְיֶה לוֹ` (דברים כא:טז) | [equivalent] | רגע חלוקת הנחלה; בתורה האב מנחיל, כאן האחים חולקים אחרי מותו |
| LH §171, 2091' | *warkassa* | נחלתה | `וְהָיָה בְּיוֹם הַנְחִילוֹ אֶת בָּנָיו` (דברים כא:טז) | [equivalent] | הנחלה כעניין הבנים |
| LH §181, 2341' | *šalušti aplūtiša* | שליש ירושתה | `וְהָיָה בְּיוֹם הַנְחִילוֹ אֶת בָּנָיו אֵת אֲשֶׁר יִהְיֶה לוֹ` (דברים כא:טז) | [divergence] | בתורה חלוקה בין בנים בלבד, ו"פי שניים" לבכור; כאן שבר (שליש) לבת המוקדשת. הצעה שלנו |
| MAL §28, o iv 9–10 | *ina bēt ālidānišu zittu kī qātišu ilaqqe* | בבית יולדו חלק כידו יקח | `לֹא יוּכַל לְבַכֵּר אֶת בֶּן הָאֲהוּבָה` (דברים כא:טז) | [equivalent] | The son's share in his father's estate fixed by law. |
| LI §31, 379′ | *dumu igi-na sa₆-ga* | לבן הנאה בעיניו | `לֹא יוּכַל לְבַכֵּר אֶת בֶּן הָאֲהוּבָה עַל פְּנֵי בֶן הַשְּׂנוּאָה הַבְּכֹר` (דברים כא:טז) | [divergence] | LI upholds the favoured son's sealed gift; Deuteronomy forbids preferring the beloved wife's son in the inheritance. |
| MALB §1, o ii 1 | *[šumma ahhū bēt abišunu izūzū]* | `[אם אחים את בית אביהם יחלוקו]` | `וְהָיָה בְּיוֹם הַנְחִילוֹ אֶת בָּנָיו` (דברים כא:טז) | [divergence] | In Deut the father apportions in his lifetime; here the brothers divide after his death (cf. LH §165–§167). Restored by the editor. |
| LH prol. 9 | *mārim rēštîm* | הבן הראשון | `כִּי הוּא רֵאשִׁית אֹנוֹ לוֹ מִשְׁפַּט הַבְּכֹרָה` (דברים כא:יז) | [cognate] | *rēštû* < *rēšu*; the firstborn as "first". Our proposal. |
| LH §165, 1962' | *mitḫāriš* | שווה בשווה | `לָתֶת לוֹ פִּי שְׁנַיִם בְּכֹל אֲשֶׁר יִמָּצֵא לוֹ` (דברים כא:יז) | [divergence] | בתורה לבכור פי שניים; ב־LH האחים חולקים בשווה, והיתרון היחיד הוא המענק שנכתב בחיי האב (וב־§170 – זכות הבחירה) |
| LH §167, 2008' | *izuzzū* | יחלוקו. | `כִּי אֶת הַבְּכֹר בֶּן הַשְּׂנוּאָה יַכִּיר` (דברים כא:יז) | [equivalent] | גם התורה קובעת שהירושה נקבעת לפי האב ולא לפי אהבתו לאמהות |
| LH §170, 2056' | *aplum mār ḫīrtim* | היורש, בן הבחירה, | `לָתֶת לוֹ פִּי שְׁנַיִם` (דברים כא:יז) | [divergence] | יתרון הבכור בתורה הוא חלק כפול; יתרון "היורש בן הבחירה" כאן הוא הבחירה הראשונה בחלק |
| LI §24, 294′–295′ | *teš₂-a se₃-ga-bi i₃-ba-e-ne* | שווה בשווה יחלוקו | `לָתֶת לוֹ פִּי שְׁנַיִם בְּכֹל אֲשֶׁר יִמָּצֵא לוֹ` (דברים כא:יז) | [divergence] | Equal shares in LI; the Torah's firstborn takes a double share. |
| LI epil. 472′ | *dumu-saĝ {d}en-lil₂-la₂-ke₄* | הבן הראשון של אנליל | `כִּי הוּא רֵאשִׁית אֹנוֹ לוֹ מִשְׁפַּט הַבְּכֹרָה` (דברים כא:יז) | [equivalent] | *dumu-saĝ* = *mārum rēštûm* `הבן הראשון` (LH 9, 3528′); `בכור` kept for Deut 21. |
| UN c002–c005 | *ad-da ba-uš₂ … e₂-gar₈ e₂-a šeš-gal-kam* | אם האב מת … קיר הבית – של האח הגדול הוא | `לָתֶת לוֹ פִּי שְׁנַיִם בְּכֹל אֲשֶׁר יִמָּצֵא לוֹ` (דברים כא:יז) | [divergence] | The elder brother's privilege: the house itself, not a double share; `בכור` kept for Deuteronomy. |
| MALB §1, o ii 3–14 | *mār rabiu 2 qāta … inassaq ilaqqe … ša šanīte qātišu ištu ahhēšu puršu iṣalli* | `הבן הגדול שתי יָדוֹת … יבחר, יקח … ושל ידו השנייה עם אחיו את הפּוּר שלו יפיל` | `לָתֶת לוֹ פִּי שְׁנַיִם בְּכֹל אֲשֶׁר יִמָּצֵא לוֹ` (דברים כא:יז) | [equivalent] | The eldest's double share (from memory: the standard comparison) – but he chooses only one share; the second is cast by lot with his brothers. *mār rabiu* "the big son", not *bukru* `בכור`. o ii 3 partly restored; o ii 11–14 preserved. |
| LH §169, 2031' | *pānīšu ubbalū* | את פניו ישאו; | `וְיִסְּרוּ אֹתוֹ וְלֹא יִשְׁמַע אֲלֵיהֶם` (דברים כא:יח) | [divergence] | גם בתורה הבן מקבל הזדמנות (מוסר) לפני שמביאים אותו לזקנים; אבל שם העונש הוא מוות (כא:כא), כאן נישול. מן הזיכרון (ההשוואה של §168–§169 לדברים כא:יח–כא מקובלת) |
| LH §193, 2480' | *izērma* | שנא, | `כִּי יִהְיֶה לְאִישׁ בֵּן סוֹרֵר וּמוֹרֶה אֵינֶנּוּ שֹׁמֵעַ בְּקוֹל אָבִיו וּבְקוֹל אִמּוֹ` (דברים כא:יח) | [divergence] | הבן המורד בהוריו, ושם הסקילה; כאן הבן המאומץ שדוחה את מגדליו |
| HL HL2 §171, 171.1 | *ták-ku an-na-aš TÚG-SÚ! DUMU.NITA-ši e-di! na-a-i …* | אם הָאֵם תטה את בגדה הצידה מבנה, את בניה החוצה | `כִּי יִהְיֶה לְאִישׁ בֵּן סוֹרֵר וּמוֹרֶה אֵינֶנּוּ שֹׁמֵעַ בְּקוֹל אָבִיו וּבְקוֹל אִמּוֹ` (דברים כא:יח) | [divergence] | האם מנשלת בטקס ומחזירה בטקס; בתורה – דין, בלי דרך חזרה |
| EST 136–138 | *ṣabātu … ina muhhi X wabālu* | תתפשו … אל … תביאו | `וְתָפְשׂוּ בוֹ אָבִיו וְאִמּוֹ וְהוֹצִיאוּ אֹתוֹ` (דברים כא:יט) | [equivalent] | Seize and bring before the authority. |
| LH §168, 2013' | *ana dayyānī* | לדיינים | `וְהוֹצִיאוּ אֹתוֹ אֶל זִקְנֵי עִירוֹ וְאֶל שַׁעַר מְקֹמוֹ` (דברים כא:יט) | [equivalent] | גם בתורה האב מביא את בנו לפני סמכות שיפוטית (הזקנים), ואינו פוסק לבדו |
| LH §108, 1209' | *šumma sābītum* | `אם מוֹכֶרֶת הַשֵּׁכָר` | `זוֹלֵל וְסֹבֵא` (דברים כא:כ) | [cognate?] | העברית `סֹבֶא` ("משקה משכר") ו`סָבָא` ("שתה לשכרה") הם כנראה בני־השורש של *sābû* / *sību* "שכר". מן הזיכרון (האטימולוגיה מקובלת; לא נבדקה כאן מול מילון). |
| LH §168, 2014' | *mārī anassaḫ iqtabi* | "את בני אנסח" אמר, | `וְאָמְרוּ אֶל זִקְנֵי עִירוֹ בְּנֵנוּ זֶה סוֹרֵר וּמֹרֶה` (דברים כא:כ) | [equivalent] | ההכרזה של ההורים לפני הסמכות |
| LH §169, 2036' | *inassaḫ* | ינסח. | `וּרְגָמֻהוּ כָּל אַנְשֵׁי עִירוֹ בָאֲבָנִים וָמֵת` (דברים כא:כא) | [divergence] | הבן הסורר מומת; כאן הבן החוזר בעוונו מנושל מן הירושה, ותו לא. מן הזיכרון |
| LH §21, 574 | *iḫallalūšu* | ויתלוהו? | `וְכִי יִהְיֶה בְאִישׁ חֵטְא מִשְׁפַּט מָוֶת וְהוּמָת וְתָלִיתָ אֹתוֹ עַל עֵץ` (דברים כא:כב) | [equivalent] | Kill, then hang: the same sequence – **only if** the crux is read "hang" (CDLI, CDA *alālu*); "wall in" (Harper) has no such parallel. Our proposal. |
| LH §153, 1813'–1814' | *ina gašīšim išakkanūši* | על מוט ישימוה | `וְהוּמָת וְתָלִיתָ אֹתוֹ עַל עֵץ` (דברים כא:כב) | [divergence] | Impalement as the execution vs. hanging of the executed body. |
| LH §227, 2701' | *iḫallalūšu* | `יִתְלוּהוּ?` | `וְהוּמָת וְתָלִיתָ אֹתוֹ עַל עֵץ` (דברים כא:כב) | [equivalent] | אותו רצף: הריגה ואחריה תלייה (אם הקריאה "תלה" נכונה). מן הזיכרון |
| MAL §3, o i 39 | *ḫīṭu* | חטא | `וְכִי יִהְיֶה בְאִישׁ חֵטְא מִשְׁפַּט מָוֶת` (דברים כא:כב) | [cognate] | *ḫīṭu* = `חֵטְא` in the sense "the penalty due for an offence". |
| MAL §53, r vii 96 | *ina eṣē izaqqupūši* | על עצים יזקפוה | `וְתָלִיתָ אֹתוֹ עַל עֵץ` (דברים כא:כב) | [equivalent] | Exposure on wood; *iṣu* = `עֵץ` [cognate]. |
| LE §60, 194–195 | *idukkū balum qabrišu ina pāni pilšim iqqabbir* | יהרגו, בלי קבר לו, לפני המפלש ייקבר | `לֹא תָלִין נִבְלָתוֹ עַל הָעֵץ כִּי קָבוֹר תִּקְבְּרֶנּוּ בַּיּוֹם הַהוּא` (דברים כא:כג) | [divergence] | LE: **the negligent guard** (not the burglar, as in LH §21) is killed and buried at the breach "without a grave"; Deut requires burial of the executed. The killing verb partly restored (194 `[...] i-du-uk-ku`). |
| MAL §53, r vii 97 | *lā iqabbirūši* | לא יקברוה | `לֹא תָלִין נִבְלָתוֹ עַל הָעֵץ כִּי קָבוֹר תִּקְבְּרֶנּוּ בַּיּוֹם הַהוּא` (דברים כא:כג) | [divergence] | **Sharp:** the Torah requires burial the same day; MAL's penalty is non-burial. |

### Deuteronomy 22

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LE §50, 158 | *wardam ḫalqam … alpam ḫalqam imēram ḫalqam* | עבד נמלט … שור אבוד, חמור אבוד | `לֹא תִרְאֶה אֶת שׁוֹר אָחִיךָ אוֹ אֶת שֵׂיוֹ נִדָּחִים` (דברים כב:א) | [equivalent] | The stray ox and ass. |
| HL PT § XXXV, 147 | *takku Ú-NU-TE{MEŠ} kuiški našma GU₄ UDU ANŠE.KUR.RA* | אם מישהו ימצא חפצים או שור, שה, סוס, חמור, | `לֹא תִרְאֶה אֶת שׁוֹר אָחִיךָ אוֹ אֶת שֵׂיוֹ נִדָּחִים` (דברים כב:א) | [equivalent] | `וְכֵן תַּעֲשֶׂה לַחֲמֹרוֹ וְכֵן תַּעֲשֶׂה לְשִׂמְלָתוֹ וְכֵן תַּעֲשֶׂה לְכָל אֲבֵדַת אָחִיךָ` (דברים כב:ג) – גם בתורה חוק אחד לבהמות ולחפצים ("שִׂמְלָתוֹ", "כָל אֲבֵדַת"), כמו באיחוד שעשה הנוסח המאוחר; ואותה רשימה – שור, שה, חמור |
| HL PT § XXXV, 148 | *n=an EGIR-pa EN-i=šši pennai* | ואותו בחזרה לאדוניו יסיע, | `הָשֵׁב תְּשִׁיבֵם לְאָחִיךָ` (דברים כב:א) | [equivalent] | `הָשֵׁב תְּשִׁיבֶנּוּ לוֹ` (שמות כג:ד) |
| LH §13, 496 | *šībūšu lā qerbū* | `עדיו לא קרובים,` | `וְאִם לֹא קָרוֹב אָחִיךָ אֵלֶיךָ וְלֹא יְדַעְתּוֹ` (דברים כב:ב) | [cognate] | אותו צירוף ("לא קרוב") באותו נושא בדיוק, האבדה: בדברים הבעלים רחוק, כאן העדים. הצעה שלנו |
| LH §13, 498 | *ana šeššet arḫī* | `לשישה ירחים` | `וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ` (דברים כב:ב) | [divergence] | בתורה אין מועד קצוב |
| LE §50, 160 | *ina bītišuma iktala ūmī eli warḫim ištēn* | ובביתו כלא – ימים מעל ירח אחד | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ` (דברים כב:ב) | [divergence] | Keeping a stray at home: a duty in Deut, theft after a month in LE. |
| HL HL1 §66, 376 | *takku GU₄.APIN.LÁ* | אם שור חרישה, | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ וַהֲשֵׁבֹתוֹ לוֹ` (דברים כב:ב) | [equivalent] | בהמה תועה שנאספה אל בית אחר חוזרת לבעליה, בלי עונש |
| HL PT § XXXV, 150 | *mān EN-šin=ma Ú-UL wemiyazi* | ואם את אדוניו לא ימצא, | `וְאִם לֹא קָרוֹב אָחִיךָ אֵלֶיךָ וְלֹא יְדַעְתּוֹ` (דברים כב:ב) | [equivalent] | אותו מקרה: הבעלים אינו ידוע |
| HL PT § XXXV, 151 | *nu=za kūtruwāezzi* | ויעיד לעצמו עדים, | `וַאֲסַפְתּוֹ אֶל תּוֹךְ בֵּיתֶךָ וְהָיָה עִמְּךָ עַד דְּרֹשׁ אָחִיךָ אֹתוֹ` (דברים כב:ב) | [divergence] | בתורה המוצא שומר את האבדה בביתו בלי עדים ובלי מוסד; החוק החתי, בשני נוסחיו, דורש פומביות – כדי שהמוצא לא ייחשד בגנבה |
| LH §9, 458 | *ileqqe* | `יקח,` | `וְכֵן תַּעֲשֶׂה לְכָל אֲבֵדַת אָחִיךָ` (דברים כב:ג) | [equivalent] |  |
| HL HL1 §45, 251 | *[takku] Ú-NU-TE{MEŠ} [ku]iški wemiyazzi* | [אם מישהו] ימצא חפצים, | `וְכֵן תַּעֲשֶׂה לְכָל אֲבֵדַת אָחִיךָ אֲשֶׁר תֹּאבַד מִמֶּנּוּ וּמְצָאתָהּ: לֹא תוּכַל לְהִתְעַלֵּם` (דברים כב:ג) | [equivalent] | `אוֹ מָצָא אֲבֵדָה וְכִחֶשׁ בָּהּ` (ויקרא ה:כב) – החובה להשיב אבדה, והכחשת אבדה כעבירה |
| MAL §40, r v 42–106 | the veiling law as a whole | – | `לֹא יִהְיֶה כְלִי גֶבֶר עַל אִשָּׁה וְלֹא יִלְבַּשׁ גֶּבֶר שִׂמְלַת אִשָּׁה` (דברים כב:ה) | [absent] | The Torah's only dress law for women concerns gender, not status; MAL's status-by-veil law has no Torah counterpart. |
| LI prol. 31–32 | *ki-en-gi ki-uri su-ba du₁₀-ge-de₃* | שומר ואכד, את בשרם להיטיב | `לְמַעַן יִיטַב לָךְ וְהַאֲרַכְתָּ יָמִים` (דברים כב:ז) | [equivalent] | *du₁₀* = *ṭābu* = `טוב` [cognate of the Akkadian]: the king "makes good" the people's flesh. Cross-collection: LH 47–48, 302 `את בשר האנשים (להיטיב / היטבתי)`. |
| LI epil. 441′ | *su ki-en-gi ki-uri ḫu-mu-du₁₀* | את בשר שומר ואכד היטבתי | `לְמַעַן יִיטַב לָךְ וְהַאֲרַכְתָּ יָמִים` (דברים כב:ז) | [equivalent] | = prol. 31–32; LH 302, 3176′–3177′. |
| LI epil. 454′ | *nam-ti zi-u₄-su₃* | חיים, נפש בעלת ימים ארוכים | `לְמַעַן יִיטַב לָךְ וְהַאֲרַכְתָּ יָמִים` (דברים כב:ז) | [equivalent] | The formula of the long-life reward. *zi-u₄-su₃* = the name of the Sumerian flood hero Ziusudra. |
| LH §229, 2716' | *bītam īpuš* | בית עשה | `כִּי תִבְנֶה בַּיִת חָדָשׁ וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | [equivalent] | In Deut the owner builds for himself and is liable for one who falls from it; in LH the builder builds for another and is liable for the house that falls. From memory. |
| LH §229, 2720' | *imqut* | נפל | `וְלֹא תָשִׂים דָּמִים בְּבֵיתֶךָ כִּי יִפֹּל הַנֹּפֵל מִמֶּנּוּ` (דברים כב:ח) | [equivalent] | There a person falls from the roof; here the house itself falls. |
| LH §228, 2708' | *īpušma* | `עשה,` | `כִּי תִבְנֶה בַּיִת חָדָשׁ וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | [equivalent] | גם שם `עשה`; ראו T6, 2716' |
| LH §229, 2716' | *bītam īpušma* | `בית עשה,` | `כִּי תִבְנֶה בַּיִת חָדָשׁ וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | [equivalent] | גם שם בית שנבנה, וגם שם הפועל; מן הזיכרון |
| LH §229, 2720' | *imqutma* | `נפל,` | `וְלֹא תָשִׂים דָּמִים בְּבֵיתֶךָ כִּי יִפֹּל הַנֹּפֵל מִמֶּנּוּ` (דברים כב:ח) | [equivalent] | שם נופל האדם מן הגג, כאן נופל הבית עצמו. הצעה שלנו לניסוח (ההשוואה עצמה מן הזיכרון) |
| LH §229, 2722' | *itinnum šū iddâk* | `הבנאי ההוא יֵהָרֵג.` | `וְלֹא תָשִׂים דָּמִים בְּבֵיתֶךָ` (דברים כב:ח) | [divergence] | בתורה "דמים" על בעל הבית, בלי עונש קצוב |
| LH §232, 2739' | *imqutu* | `ונפל,` | `וְלֹא תָשִׂים דָּמִים בְּבֵיתֶךָ כִּי יִפֹּל הַנֹּפֵל מִמֶּנּוּ` (דברים כב:ח) | [equivalent] | גם שם `נפל`; אבל שם האדם נופל מן הבית, וכאן הבית עצמו נופל. מן הזיכרון |
| LE §58, 183 | *šumma igārum iqāmma bābtum … ušēdima* | אם קיר נוטה, והרובע … הודיע | `כִּי תִבְנֶה בַּיִת חָדָשׁ וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | [equivalent] | The owner's liability for a deadly structure; [divergence] Deut imposes a duty in advance (the parapet), LE liability after a warning by the ward. Cross-collection: LH §229–230 (the builder whose house falls, 2714'–2726'), LH §233 (the wall that buckles, `וקיר נָטָה`, 2747'). |
| LE §58, 185 | *igārum imqutma mār awīlim uštamit* | והקיר נפל והמית בן איש | `וְלֹא תָשִׂים דָּמִים בְּבֵיתֶךָ כִּי יִפֹּל הַנֹּפֵל מִמֶּנּוּ` (דברים כב:ח) | [equivalent] | There the person falls from the roof, here the wall falls on the person; the thing as subject of `המית`, like the ox. |
| LH §64, 1105 | *ana rukkubim* | להרכיב | `לֹא תִזְרַע כַּרְמְךָ כִּלְאָיִם` (דברים כב:ט) | [divergence] | Mishnaic `הרכבה` (grafting) is a kilayim term; LH's *rukkubu* is the gardener's duty of pollinating the date palm. Our proposal. |
| HL HL2 §166, 166.1 | *… NUMUN-an …* | אם מישהו יזרע זרע על זרע, | `לֹא תִזְרַע כַּרְמְךָ כִּלְאָיִם` (דברים כב:ט) | [divergence] | כנ"ל |
| HL HL2 §167, 167.5 | *3 {DUG}KA.G[AG] pa-a-i ta a-ap-*pa šu-up-pí-ia-aḫ-ḫi** | שלושה כדי קָגָג ייתן, ובחזרה יקדש; | `פֶּן תִּקְדַּשׁ הַמְלֵאָה הַזֶּרַע אֲשֶׁר תִּזְרָע` (דברים כב:ט) | [divergence] | בתורה הזריעה הכפולה "מקדשת" (אוסרת) את היבול; כאן היא מחללת את השדה, והאשם מקדש אותו בחזרה |
| LH §127, 1451' | *šumma awīlum* | אם איש | `כִּי יִקַּח אִישׁ אִשָּׁה; וּבָא אֵלֶיהָ וּשְׂנֵאָהּ` (דברים כב:יג) | [equivalent] | גם דין מוציא שם רע בתורה פותח ב"איש"; ראו 1454' |
| LH §142, 1654' | *šumma sinništum mussa izērma* | אם אשה את בעלה שנאה, | `וּבָא אֵלֶיהָ וּשְׂנֵאָהּ` (דברים כב:יג) | [equivalent] | שם הבעל שונא, כאן האשה |
| LH §11, 483 | *tušāmma iddi* | `דִּבָּה הטיל,` | `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד) | [equivalent] |  |
| LH §127, 1454' | *ubānam ušatriṣma* | אצבע הושיט, | `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד) | [equivalent] | האשמה במיניות של אשה שאינה מוכחת |
| MAL §17, o ii 68 | *aššatka ittinikkū* | "על אשתך באים" | `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד) | [equivalent] | Slander of a wife's chastity: by the husband in Deut, by another man here. "Everyone" is not in the tablet. |
| MAL §19, o ii 83 | *ina muḫḫi tappāʾišu abāta iškun* | על עמיתו דבר שָׂם | `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים` (דברים כב:יד) | [equivalent] | **The same phrase** in both roots: *šakānu* = `שׂם`, *awātu* = `דבר`. Our proposal (the phrase). |
| LI §33, 403′–405′ | *dumu-munus lu₂ e₂ nu-un-gi₄-a ĝeš₃ i₃-zu lu₂ ba-ab-du₁₁* | בת איש אשר לא נישאה: "זכר ידעה," איש אמר | `וְשָׂם לָהּ עֲלִילֹת דְּבָרִים וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד) | [equivalent] | The slander of a girl's chastity; [divergence] Torah: the husband about his new wife (`וְלֹא מָצָאתִי לָהּ בְּתוּלִים`); LI: any man about an unmarried daughter. |
| LH §142, 1658' | *ina bābtiša* | ברובעה | `וְלָקַח אֲבִי הַנַּעֲרָ וְאִמָּהּ וְהוֹצִיאוּ אֶת בְּתוּלֵי הַנַּעֲרָ אֶל זִקְנֵי הָעִיר הַשָּׁעְרָה` (דברים כב:טו) | [equivalent] | הבירור נעשה לפני הקהילה המקומית. מן הזיכרון |
| LI §33, 406′–407′ | *ĝeš₃ nu-un-zu-a un-ge-en* | כי זכר לא ידעה כונן | `וְלָקַח אֲבִי הַנַּעֲרָ וְאִמָּהּ; וְהוֹצִיאוּ אֶת בְּתוּלֵי הַנַּעֲרָ אֶל זִקְנֵי הָעִיר הַשָּׁעְרָה` (דברים כב:טו) | [divergence] | How it is proved: the parents' evidence before the elders (Torah); "it was established" (LI, unspecified). |
| LH §127, 1456' | *awīlam šuāti* | את האיש ההוא | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא אֶת הָאִישׁ; וְיִסְּרוּ אֹתוֹ` (דברים כב:יח) | [equivalent] | F2; המאשים נלקח לעונש |
| LH §127, 1458' | *inaṭṭûšu* | ילקוהו, | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא אֶת הָאִישׁ; וְיִסְּרוּ אֹתוֹ` (דברים כב:יח) | [equivalent] | עונש גופני למאשים שהאשמתו לא הוכחה |
| MAL §18, o ii 78–81 | 40 blows, a month's work, *gadāmu*, a talent of tin | ארבעים במקלות … וכיכר בדיל יתן | `וְיִסְּרוּ אֹתוֹ וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף` (דברים כב:יח) | [equivalent] | The slanderer of a wife punished in body and fined: Deut 100 silver to her father; MAL a talent of tin. |
| MAL §59, r viii 60–62 | *aʾīle aššassu inaṭṭu ibaqqan uznēša uḫappa ulappat* | איש את אשתו [יַלְקֶה], ימרוט, את אוז[ניה] ינפץ, [יְנַגַּע] | `וְלָקְחוּ זִקְנֵי הָעִיר הַהִוא אֶת הָאִישׁ; וְיִסְּרוּ אֹתוֹ` (דברים כב:יח) | [divergence] | The husband punishes his wife himself; in Deut the elders chastise the husband. The Torah has no license to beat a wife. Restored *inaṭṭu*. |
| LH §127, 1458' | *inaṭṭûšu* | ילקוהו, | `וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף וְנָתְנוּ לַאֲבִי הַנַּעֲרָה` (דברים כב:יט) | [divergence] | בתורה גם קנס לאבי הנערה; כאן הלקאה וגילוח מחצית |
| LH §172, 2110' | *immidu* | יעמיסו; | `וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף` (דברים כב:יט) | [equivalent] | בית הדין מעניש את מי שפגע באשה |
| LI §33, 408′ | *1(u) gin₂ ku₃-babbar i₃-la₂-e* | עשרה שקלי כסף ישקול | `וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף וְנָתְנוּ לַאֲבִי הַנַּעֲרָה` (דברים כב:יט) | [divergence] | **10 shekels in LI, 100 in Deuteronomy** (paid to the father; plus `לֹא יוּכַל לְשַׁלְּחָהּ כָּל יָמָיו`). LI does not say to whom. |
| UN §14, 272–273 | *1/3 ma-na ku₃ i₃-la₂-e* | שליש [מנה כסף] [ישקול] | `וְעָנְשׁוּ אֹתוֹ מֵאָה כֶסֶף וְנָתְנוּ לַאֲבִי הַנַּעֲרָה כִּי הוֹצִיא שֵׁם רָע` (דברים כב:יט) | [equivalent] | The slanderer of a young wife pays silver: 20 shekels here, 100 in Deuteronomy. "Mina, silver, weigh" restored (broken in ex03). |
| LH §127, 1455' | *lā uktīn* | ולא כונן, | `וְאִם אֱמֶת הָיָה הַדָּבָר הַזֶּה לֹא נִמְצְאוּ בְתוּלִים לַנַּעֲרָ` (דברים כב:כ) | [equivalent] | ההוכחה מכריעה בשני הדינים |
| LH §133, 1533' | *ukannūšima* | יכוננו עליה, | `וְאִם אֱמֶת הָיָה הַדָּבָר הַזֶּה לֹא נִמְצְאוּ בְתוּלִים לַנַּעֲרָ` (דברים כב:כ) | [equivalent] |  |
| LH §130, 1484' | *ina bīt abiša wašbat* | ובבית אביה יושבת | `לִזְנוֹת בֵּית אָבִיהָ` (דברים כב:כא) | [equivalent] | The girl in her father's house. |
| LH §227, 2700' | *ina bābišu* | `וּבְפִתְחוֹ` | `וְהוֹצִיאוּ אֶת הַנַּעֲרָ אֶל פֶּתַח בֵּית אָבִיהָ וּסְקָלוּהָ` (דברים כב:כא) | [divergence] | ההוצאה להורג "בפתח" הבית |
| LH §133, 1535' | *inaddûši* | ישליכוה. | `וּסְקָלוּהָ אַנְשֵׁי עִירָהּ בָּאֲבָנִים וָמֵתָה` (דברים כב:כא) | [divergence] | מות האשה שנמצאה אשמה; כאן במים |
| LH §143, 1679' | *inaddûši* | ישליכוה. | `וְהוֹצִיאוּ אֶת הַנַּעֲרָ אֶל פֶּתַח בֵּית אָבִיהָ וּסְקָלוּהָ אַנְשֵׁי עִירָהּ בָּאֲבָנִים וָמֵתָה` (דברים כב:כא) | [equivalent] | האשה שהבירור מצא אותה אשמה ממיתים אותה |
| MAL §40, r v 68–71 | *ša ḫarimta paṣṣunta ētamrūni iṣṣabassi šēbūte išakkan ana pî ēkalle ubbalašši* | מי שזונה רעולה ראה – יתפשנה, עדים ישים, אל פי ההיכל יובילנה | `וְהוֹצִיאוּ אֶת הַנַּעֲרָ אֶל פֶּתַח בֵּית אָבִיהָ` (דברים כב:כא) | [equivalent] | The offending woman brought to an entrance for punishment (the palace / the father's house). Our proposal. |
| MAL §56, r viii 48–49 | *abu mārassu kī ḫadiūni eppaš* | האב את בת[ו] כאשר חָפֵץ יעשה | `וּסְקָלוּהָ אַנְשֵׁי עִירָהּ בָּאֲבָנִים וָמֵתָה` (דברים כב:כא) | [divergence] | The father's discretion over the daughter who gave herself vs the community's stoning of the bride found not a virgin. From memory. |
| LH §129, 1471' | *ina itūlim* | בשכיבה | `כִּי יִמָּצֵא אִישׁ שֹׁכֵב עִם אִשָּׁה בְעֻלַת בַּעַל` (דברים כב:כב) | [equivalent] | Caught in the act. |
| LH §129, 1475' | *ana mê inaddûšunūti* | ולמים ישליכום | `וּמֵתוּ גַּם שְׁנֵיהֶם הָאִישׁ הַשֹּׁכֵב עִם הָאִשָּׁה וְהָאִשָּׁה` (דברים כב:כב) | [equivalent] / [divergence] | Both die; drowning vs. (Deut 22:24) stoning. |
| LE §28, 96–97 | *ūm ina sūn awīlim iṣṣabbatu imât ul iballuṭ* | ביום אשר בחיק איש תיתפש – תמות, לא תחיה | `כִּי יִמָּצֵא אִישׁ שֹׁכֵב עִם אִשָּׁה בְעֻלַת בַּעַל וּמֵתוּ גַּם שְׁנֵיהֶם` (דברים כב:כב) | [divergence] | The wife caught with another man dies; **only the woman is named** (Deut: both). Cross-collection: LH §129 (both bound and thrown into the water; the husband may pardon). |
| MAL §9, o i 93–96 | *šapassu šaplīta … inakkisū* | את שפתו התחתונה … יקצצו | `כִּי יִמָּצֵא אִישׁ שֹׁכֵב עִם אִשָּׁה בְעֻלַת בַּעַל` (דברים כב:כב) | [absent] | The Torah punishes intercourse only; it has no law on touching or kissing another's wife, nor mutilation of the lip. |
| MAL §12, o ii 20 | *ina muḫḫi aššat aʾīle ikšudūš* | על אשת איש השיגוהו | `כִּי יִמָּצֵא אִישׁ שֹׁכֵב עִם אִשָּׁה בְעֻלַת בַּעַל` (דברים כב:כב) | [equivalent] | Caught in the act ("on top of the woman"). |
| MAL §13, o ii 28–29 | *kī aššat aʾīlenni īde aʾīla u sinniltumma idukkū* | כי אשת איש היא ידע – את האיש ואף את האשה יהרגו | `וּמֵתוּ גַּם שְׁנֵיהֶם הָאִישׁ הַשֹּׁכֵב עִם הָאִשָּׁה וְהָאִשָּׁה` (דברים כב:כב) | [equivalent] | Both die; the *-ma* on "the woman" ~ `גַּם`. Condition in MAL: she went to him, he knew she was married. |
| MAL §15, o ii 41 | *ištu aššitišu aʾīle iṣṣabat* | עם אשתו איש תפש | `כִּי יִמָּצֵא אִישׁ שֹׁכֵב עִם אִשָּׁה בְעֻלַת בַּעַל` (דברים כב:כב) | [equivalent] | The husband himself catches the man; Deut's passive `יִמָּצֵא`. |
| MAL §15, o ii 44–46 | *kilallēšunuma idukkūšunu aranšu laššu* | את שניהם יהרגום; עון אין לו | `וּמֵתוּ גַּם שְׁנֵיהֶם` (דברים כב:כב) | [equivalent] | Both killed on the spot; the killer has no guilt. |
| MAL §23, o iii 21 | *mummerta ēpušū* | לסרסורית יעשו | `וּמֵתוּ גַּם שְׁנֵיהֶם` (דברים כב:כב) | [absent] | A third party (the procuress) punished; the Torah has no law on procuring. |
| MAL §23, o iii 22–26 | *u šumma mut sinnilta aššassu nīkta mimma lā eppaš … uššurūšunu* | ואם בעל האשה – לאשתו שבאו עליה מאומה לא יעשה … ישחררום | `וּבִעַרְתָּ הָרָע מִיִּשְׂרָאֵל` (דברים כב:כב) | [divergence] | The husband's pardon frees all; in the Torah the community must act. |
| MAL §24, o iii 81 | *emittu mimma laššu* | הטלה – מאומה אין | `וּבִעַרְתָּ הָרָע מִיִּשְׂרָאֵל` (דברים כב:כב) | [divergence] | If the husband does not punish his wife, no one is punished: the others' penalty depends on his (also §4, §14–§15, §23). |
| UN §7, 210–219 | *ni₂-te-a-ni-ta lu₂ ba-an-us₂ … munus-bi … i₃-gaz-e, nita₂-bi ama-ar-gi₄-ni i₃-ĝa₂-ĝa₂* | מעצמה אחרי איש הלכה … האשה ההיא תיהרג, והגבר ההוא – דרורו יושם | `וּמֵתוּ גַּם שְׁנֵיהֶם הָאִישׁ הַשֹּׁכֵב עִם הָאִשָּׁה וְהָאִשָּׁה` (דברים כב:כב) | [divergence] | The betrothed who goes of her own will: she dies, the man goes free – the Torah kills both (22:22, 22:24). |
| HL HL2 §198, 198.4 | *wa-aš-ši-e-ez-zi ták-ku [t]e-ez-zi 2-pát ak-kán-du* | יכסה. ואם יאמר: "שניהם ימותו!", | `וּמֵתוּ גַּם שְׁנֵיהֶם` (דברים כב:כב) | [equivalent] | *2-pat akkandu* מילולי, כדי שההקבלה תיראה; כאן זו רק אחת משתי האפשרויות של הבעל, וההכרעה בידי המלך |
| LE §26, 87–89 | *ana mārat awīlim terḫatam ubilma šanû balum šâl abiša u ummiša imšu'šima ittaqabši … imât* | לבת איש מהר הוביל, ואחר, בלי שאלת אביה ואמה, חטפה ונקבה – … ימות | `כִּי יִהְיֶה נַעֲרָ בְתוּלָה מְאֹרָשָׂה לְאִישׁ וּמְצָאָהּ אִישׁ בָּעִיר וְשָׁכַב עִמָּהּ` (דברים כב:כג) | [equivalent] | The betrothed (bride-price paid) girl violated by another: death for the man. [divergence] Deut asks whether she cried out; LE: "without the consent of her father and mother". `מאורשה` kept out. |
| MAL §12, o ii 14 | *ina rebēti* | ברחוב | `וּמְצָאָהּ אִישׁ בָּעִיר וְשָׁכַב עִמָּהּ` (דברים כב:כג) | [divergence] | The public place in town: in Deut it presumes consent (she could have cried out); in MAL the street does not. *rebītu* = `רְחוֹב` [cognate]. |
| MAL §55, r viii 15 | *lū ina libbi āle* | בין בתוך העיר | `וּמְצָאָהּ אִישׁ בָּעִיר וְשָׁכַב עִמָּהּ` (דברים כב:כג) | [equivalent] | City vs field decides in Deut 22:23–27 (for the betrothed girl); in MAL all places are listed together and the law is the same. |
| UN §6, 206 | *dam ĝuruš-a a nu-gi₄-a* | אשת בחור אשר לא הובאה | `כִּי יִהְיֶה נַעֲרָ בְתוּלָה מְאֹרָשָׂה לְאִישׁ` (דברים כב:כג) | [equivalent] | The "wife of a young man not yet brought (home)" is the Torah's betrothed (`מְאֹרָשָׂה`, reserved). Reading of *a … gi₄* uncertain. |
| UN §7, 214 | *ur₂-ra-na ba-an-nu₂* | ובחיקה שכב | `וּמְצָאָהּ אִישׁ בָּעִיר וְשָׁכַב עִמָּהּ` (דברים כב:כג) | [equivalent] | The fixed formula `בחיקה שכב` (LH *ina sūniša itūl*). |
| LH §130, 1481' | *aššat awīlim* (betrothed) | אשת איש | `וְאֶת הָאִישׁ עַל דְּבַר אֲשֶׁר עִנָּה אֶת אֵשֶׁת רֵעֵהוּ` (דברים כב:כד) | [equivalent] | Both call the betrothed girl "a man's wife". From memory. |
| MAL §12, o ii 17 | *lā tamaggur* | לא תרצה | `עַל דְּבַר אֲשֶׁר לֹא צָעֲקָה בָעִיר` (דברים כב:כד) | [divergence] | In the city Deut condemns the girl who did not cry; MAL frees the wife in the street who did not consent. |
| HL HL2 §197, 197.2 | *ták-ku É-ri-ma e-ep-zi MUNUS-na-aš wa-aš-ta-iš MUNUS-za* | ואם בבית יתפוס – חטא האשה: האשה | `אֶת הַנַּעֲרָ עַל דְּבַר אֲשֶׁר לֹא צָעֲקָה בָעִיר` (דברים כב:כד) | [equivalent] | בבית (בעיר) גם היא מתה |
| LH §130, 1486' | *ukabbilši* | כיבלה | `וְהֶחֱזִיק בָּהּ הָאִישׁ וְשָׁכַב עִמָּהּ` (דברים כב:כה) | [equivalent] | Force; Deut distinguishes city/field, LH the force itself. |
| LH §130, 1491' | *awīlum šū iddâk* | האיש ההוא יהרג | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | Only the man dies. |
| LE §26, 89 | *dīn napištimma imât* | דין נפשות הוא – ימות | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | Only the man dies (the girl is not punished), as in Deut 22:25–26. |
| MAL §12, o ii 18–19 | *emūqamma iṣṣabassi ittīakši* | בכוח תְּפָשָׂהּ, בא עליה | `וְהֶחֱזִיק בָּהּ הָאִישׁ וְשָׁכַב עִמָּהּ` (דברים כב:כה) | [equivalent] | Force; Deut's verbs (`החזיק`, `שכב`) are not the Akkadian ones (*ṣabātu*, *niāku*). |
| MAL §12, o ii 23 | *aʾīle idukkū* | את האיש יהרגו | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | Only the man dies. |
| MAL §16, o ii 63–66 | *emūqamma ittīakši … ḫīṭašu kī ša aššat aʾīlemma* | אם בכוח בא עליה … חטאו כשל אשת איש | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | The rapist bears (the death?) penalty; meaning of "like that of a man's wife" debated. |
| MAL §23, o iii 34–36 | *sinnilta uššurū zakkuʾat nāʾikāna u mummerta idukkū* | את האשה ישחררו, זכאית היא; את הבא עליה ואת הסרסורית יהרגו | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | The deceived woman is clear, the man dies (here with the procuress). |
| MAL §55, r viii 16 | *lū ina ṣēre* | בין בשדה | `וְאִם בַּשָּׂדֶה יִמְצָא הָאִישׁ אֶת הַנַּעֲרָ הַמְאֹרָשָׂה` (דברים כב:כה) | [equivalent] | As above (*ṣēru* = `שדה`). |
| MAL §55, r viii 20 | *kī daʾāne* | בזרוע | `וְהֶחֱזִיק בָּהּ הָאִישׁ` (דברים כב:כה) | [equivalent] | Force. |
| UN §6, 209 | *nita₂-bi i₃-gaz-e* | הגבר ההוא יהרג | `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | Only the man dies; the woman deceived is not guilty (`וְלַנַּעֲרָ לֹא תַעֲשֶׂה דָבָר`). UN distinguishes deceit / consent, Deuteronomy field / city. |
| HL HL2 §197, 197.1 | *ták-ku *LÚ-aš* MUNUS-an ḪUR.SAG-i e-ep-zi LÚ-na-aš wa-aš-túl na-aš a-ki* | אם איש יתפוס אשה בהר – חטא האיש, וימות; | `וְאִם בַּשָּׂדֶה יִמְצָא הָאִישׁ אֶת הַנַּעֲרָ הַמְאֹרָשָׂה וְהֶחֱזִיק בָּהּ הָאִישׁ` … `וּמֵת הָאִישׁ אֲשֶׁר שָׁכַב עִמָּהּ לְבַדּוֹ` (דברים כב:כה) | [equivalent] | ההר כמו השדה: רק האיש מת; התורה נותנת את הנימוק (הצעקה, כב:כז), החוק החתי רק את המקום |
| LH §130, 1493' | *ūtaššar* | תשוחרר | `וְלַנַּעֲרָ לֹא תַעֲשֶׂה דָבָר אֵין לַנַּעֲרָ חֵטְא מָוֶת` (דברים כב:כו) | [equivalent] | The woman is released. |
| LH §134, 1545' | *arnam ul išu* | עון אין לה. | `וְלַנַּעֲרָ לֹא תַעֲשֶׂה דָבָר אֵין לַנַּעֲרָ חֵטְא מָוֶת` (דברים כב:כו) | [equivalent] | "אין לה עוון/חטא": היא פטורה |
| LH §142, 1668' | *arnam ul išu* | עון אין לה. | `וְלַנַּעֲרָ לֹא תַעֲשֶׂה דָבָר` (דברים כב:כו) | [equivalent] |  |
| MAL §12, o ii 24 | *ša sinnilte ḫīṭu laššu* | לאשה חטא אין | `וְלַנַּעֲרָ לֹא תַעֲשֶׂה דָבָר אֵין לַנַּעֲרָ חֵטְא מָוֶת` (דברים כב:כו) | [cognate] | **The same formula**: preposition (*ša* / `ל־`), *ḫīṭu* = `חֵטְא` (penalty), *laššu* = `אֵין`. The strongest verbal parallel of the file. |
| MAL §16, o ii 59–60 | *pîša ittīakši ḫīṭu ša aʾīle laššu* | על פיה [בא עליה], חטא לאיש אין | `אֵין לַנַּעֲרָ חֵטְא מָוֶת` (דברים כב:כו) | [cognate] | The same *ḫīṭu laššu* formula, here exempting the man (she invited him). Partly restored. |
| MAL §59, r viii 63 | *aranšu laššu* | עון אין לו | `אֵין לַנַּעֲרָ חֵטְא מָוֶת` (דברים כב:כו) | [equivalent] | The exemption formula "X has no (guilt/penalty)"; the tablet has *arnu* (`עון`), not *ḫīṭu* (`חטא`): here for the husband who beats, in Deut for the raped girl. |
| LH §17, 533 | *ina ṣērim* | בערבה | `כִּי בַשָּׂדֶה מְצָאָהּ` (דברים כב:כז) | [equivalent] | "In the open country", outside the city. |
| MAL §12, o ii 17 | *lā tamaggur tattanaṣṣar* | לא תרצה, תנצור (את עצמה) | `צָעֲקָה הַנַּעֲרָ הַמְאֹרָשָׂה וְאֵין מוֹשִׁיעַ לָהּ` (דברים כב:כז) | [divergence] | The test of innocence: consent and self-defence (MAL), crying out (Deut); no *šasû* here. |
| MAL §23, o iii 32–33 | *ištu bēte ina uṣāʾiša kī nīkutūni taqtibi* | מן הבית בצאתה כי באו עליה – אמרה | `צָעֲקָה הַנַּעֲרָ הַמְאֹרָשָׂה וְאֵין מוֹשִׁיעַ לָהּ` (דברים כב:כז) | [equivalent] | The woman's prompt declaration proves her innocence; in Deut her cry. |
| MAL §12, o ii 18 | *iṣṣabassi* | תְּפָשָׂהּ | `וּתְפָשָׂהּ וְשָׁכַב עִמָּהּ` (דברים כב:כח) | [equivalent] | `תפש` = *ṣabātu* (corpus); Deut 22:28 uses the same Hebrew verb for the unbetrothed virgin. |
| MAL §55, r viii 6 | *mārat aʾīle batulta* | [בת] איש, בתולה | `כִּי יִמְצָא אִישׁ נַעֲרָ בְתוּלָה אֲשֶׁר לֹא אֹרָשָׂה` (דברים כב:כח) | [cognate] | *batultu* = `בְּתוּלָה`. Restored *mārat*. |
| MAL §55, r viii 9 | *[…]-ša lā ūtarriššunu* (*erēšu*) | […]ה לא ביקשו | `אֲשֶׁר לֹא אֹרָשָׂה` (דברים כב:כח) | [cognate?] | Klein derives `ארשׂ` from Akk. *erēšu* "desire, request"; the line may be MAL's "not asked for (in marriage)" in the etymon of `ארש`. Broken, form doubtful. Our proposal. |
| MAL §55, r viii 20–22 | *kī daʾāne batulta iṣbatma umanzeʾši* | בזרוע את הבתולה תָּפַשׂ, ומִיעֲכָהּ | `וּתְפָשָׂהּ וְשָׁכַב עִמָּהּ` (דברים כב:כח) | [equivalent] | The same act; *ṣabātu* = `תפש` (LH) meets Deut's `תפשׂ`; *mazāʾu* "press" ≠ `שכב`. |
| MAL §55, r viii 6–41 | (cross-collection) | הבתולה שנתפשה בזרוע | `וּתְפָשָׂהּ וְשָׁכַב עִמָּהּ` (דברים כב:כח) | [divergence] | Cf. LE §26 (the betrothed girl seized: the man dies) and LH §130 (the betrothed girl in her father's house: he dies, she goes free); MAL §55 covers the *unbetrothed* girl. From memory. |
| LH §156, 1839' | *1/2 mana kaspam* | חצי מנה כסף | `וְנָתַן הָאִישׁ הַשֹּׁכֵב עִמָּהּ לַאֲבִי הַנַּעֲרָ חֲמִשִּׁים כָּסֶף` (דברים כב:כט) | [equivalent] | From memory. |
| MAL §55, r viii 26 | *ana mazāʾe* | למיעוך | `וְנָתַן הָאִישׁ הַשֹּׁכֵב עִמָּהּ לַאֲבִי הַנַּעֲרָ חֲמִשִּׁים כָּסֶף` (דברים כב:כט) | [divergence] | Deut: payment and marriage only; MAL first punishes the rapist's wife. |
| MAL §55, r viii 30–32 | *abu mārta ša nīkta ana nāʾikāniša kī aḫuzzete iddanši* | האב את הבת שבאו עליה לַבָּא עליה לנישואין יתננה | `וְלוֹ תִהְיֶה לְאִשָּׁה` (דברים כב:כט) | [equivalent] | The raped girl given in marriage to the rapist – in both. |
| MAL §55, r viii 34 | (the same) | פי שלושה כסף | `חֲמִשִּׁים כָּסֶף` (דברים כב:כט) | [divergence] | A fixed sum in Deut; triple the virgin's price in MAL. |
| MAL §55, r viii 35 | *nāʾikānu ana abiša iddan* | הבא עליה לאביה יתן | `וְנָתַן הָאִישׁ הַשֹּׁכֵב עִמָּהּ לַאֲבִי הַנַּעֲרָ` (דברים כב:כט) | [equivalent] | Nearly word for word (*nāʾikānu* ~ `הַשֹּׁכֵב עִמָּהּ`, *nadānu* = `נתן`). |
| MAL §55, r viii 36–37 | *nāʾikānša eḫḫassi lā isammakši* | הבא עליה ישאנה, לא יִדְחֶנָּה | `לֹא יוּכַל שַׁלְּחָהּ כָּל יָמָיו` (דברים כב:כט) | [equivalent] | The rapist must marry her and may not reject her – in both. |
| UN §11, 239–245 | *nu-ma-su dub ka-keš₂ nu-me-a lu₂ ur₂-ra-na ba-an-nu₂ ku₃ nu-la₂-e* | אלמנה – לוח התקשרות אין (לה), איש בחיקה שכב, כסף לא ישקול | `וְנָתַן הָאִישׁ הַשֹּׁכֵב עִמָּהּ לַאֲבִי הַנַּעֲרָ חֲמִשִּׁים כָּסֶף` (דברים כב:כט) | [divergence] | The man who lies with an unbetrothed virgin pays (Deut, Exod 22:15–16); with a widow without contract nothing is due. |

### Deuteronomy 23

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| MAL §46, r vi 109–111 | *ina mārē mutišama ša ēḫuzūši* | ואם בבני בעלה (אחד) אשר נְשָׂאָהּ [יש] | `לֹא יִקַּח אִישׁ אֶת אֵשֶׁת אָבִיו` (דברים כג:א) | [divergence] | A son marrying his father's (later) widow is a normal case in MAL, forbidden in the Torah (Lev 18:8). From memory. |
| MAL §8, o i 79 | *ḫepû* (testicle) | ניפצה | `לֹא יָבֹא פְצוּעַ דַּכָּא וּכְרוּת שָׁפְכָה בִּקְהַל יְהוָה` (דברים כג:ב) | [equivalent] | The injury itself; cf. `וּמָעוּךְ וְכָתוּת` (Lev 22:24). |
| EST 417 | *amat pîšu lilammin* | את דבר פיו תרע | `וַיַּהֲפֹךְ יְהוָה אֱלֹהֶיךָ לְּךָ אֶת הַקְּלָלָה לִבְרָכָה` (דברים כג:ו) | [divergence] | Mullissu turns her husband's word to evil; YHWH turns the curse to blessing. Tayinat "your words". Our proposal. |
| LH epil. 3549'–3551' | *damqātišu ana lemnētim litēr* | את הנאות שלו לרעות תשיב | `וַיַּהֲפֹךְ יְהוָה אֱלֹהֶיךָ לְּךָ אֶת הַקְּלָלָה לִבְרָכָה` (דברים כג:ו) | [divergence] | The reverse turning. |
| LH §15, 512 | *warad ekallim* | עבד ההיכל | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | LH protects the owner (palace, *muškēnum*); the Torah the runaway. |
| LH §15, 516 | *abullam uštēṣi … iddâk* | דרך השער הוציא, יהרג | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו. עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ` (דברים כג:טז–יז) | [divergence] | The direct opposite: death for helping a slave escape (§15–16, 19), a reward for returning him (§17) vs. "do not hand him over". From memory (standard). |
| LH §17, 539 | *šinā šiqil kaspam … inaddiššum* | שני שקלי כסף … יתן לו | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו` (דברים כג:טז) | [absent] | A reward for returning a runaway: absent (and forbidden) in the Torah. |
| LH §18, 548 | *ana bēlišu utarrūšu* | ולאדוניו ישיבוהו | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו` (דברים כג:טז) | [divergence] | The palace itself returns the slave. |
| LH §280, 3128' | *iššakkan* | יושם | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [equivalent] | A slave coming in from abroad is not handed back; in Deut every fugitive, in LH natives only. From memory. |
| LE §50, 158 | *wardam ḫalqam* | עבד נמלט | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | LE: the fugitive slave must be brought to Eshnunna, keeping him > 1 month is theft; Deut: do not hand him over. Cross-collection: LH §15–20. |
| LI §12, 177′–178′ | *geme₂ arad₂ lu₂-u₃ ša₃ iri-ka ba-zah₂* | אמה (או) עבד של איש בתוך העיר נמלט | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | The fugitive slave: the Torah forbids handing him back; LI makes the harbourer compensate the master. Cross-collection: LH §16, §19 (518–529, 549–557) – the harbourer `יהרג`; LH §17 (530–539) reward for returning him. |
| UN §17, 287a–294 | *geme₂ ARAD₂ ba-zaḫ₃ ki-sur-ra iri-na-ka ib₂-te-bala lu₂ im-mi-gur … 2 gin₂ i₃-na-la₂-e* | אמה (או) עבד נמלט, ואת גבול עירו חצה, ואיש השיבו … שני שקלי כסף ישקול לו | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | UN (and LH §17, the same 2 shekels) reward the man who returns a fugitive slave; Deuteronomy forbids returning him. |
| HL HL1 §20, 92 | *takku ARAD LÚ {URU}ḪA-AT-TI IŠ-TU KUR {URU}luwiyaz* | אם [מישהו], איש חַתִּי, יגנוב עבד של איש חַתִּי מארץ לוּוִיָּה, | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | בתורה אסור להחזיר עבד לאדוניו; בחוק החתי מי שמחזיר עבד גנוב מחו"ל מקבל שכר, והאדון לוקח את עבדו בחזרה |
| HL HL1 §22, 102 | *takku ARAD-aš ḫūwai* | אם עבד יברח, | `לֹא תַסְגִּיר עֶבֶד אֶל אֲדֹנָיו אֲשֶׁר יִנָּצֵל אֵלֶיךָ מֵעִם אֲדֹנָיו` (דברים כג:טז) | [divergence] | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ בַּמָּקוֹם אֲשֶׁר יִבְחַר … לֹא תּוֹנֶנּוּ` (דברים כג:יז) – ההפך הגמור: בתורה המסגיר עובר על הדין; בחוק החתי המחזיר מקבל שכר, והמסתיר משלם (§24) |
| LI §12, 181′ | *i₃-tuš-a* | ישב | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ בַּמָּקוֹם אֲשֶׁר יִבְחַר` (דברים כג:יז) | [equivalent] | The fugitive "dwells" with another: a duty in the Torah, an offence (after a month) in LI. *tuš* = *wašābu* = `ישב`. |
| LI §16, 210′–211′ | *ki ša₃-ga-na-še₃ ḫa-ba-du* | אל מקום לבו ילך | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ בַּמָּקוֹם אֲשֶׁר יִבְחַר בְּאַחַד שְׁעָרֶיךָ בַּטּוֹב לוֹ` (דברים כג:יז) | [equivalent] | The same freedom of residence for one who left his master: Deut – the fugitive slave; LI – the *miqtum* (a royal dependant) who left of his own accord. |
| HL HL1 §24, 118 | *takku ARAD-iš našma GÉME-aš [ḫūwai]* | אם עבד או אָמָה [יברח], | `עִמְּךָ יֵשֵׁב בְּקִרְבְּךָ … לֹא תּוֹנֶנּוּ` (דברים כג:יז) | [divergence] | בתורה מי שהעבד בורח אליו מצווה להושיבו עמו; בחוק החתי הוא משלם לאדון שכר עבודה |
| LH §181, 2332' | *nadītam qadištam* | נדיתו, קדשה | `לֹא תִהְיֶה קְדֵשָׁה מִבְּנוֹת יִשְׂרָאֵל` (דברים כג:יח) | [cognate] | אותה מילה (*qadištu* = `קְדֵשָׁה`, מן *qadāšu* = קד"ש) |
| MAL §40, r v 61 | *qadiltu* | קדשה | `לֹא תִהְיֶה קְדֵשָׁה מִבְּנוֹת יִשְׂרָאֵל` (דברים כג:יח) | [cognate] | A legal category in both. |
| LI §22, 265′ | *nu-gig* | קְדֵשָׁה | `לֹא תִהְיֶה קְדֵשָׁה מִבְּנוֹת יִשְׂרָאֵל` (דברים כג:יח) | [cognate] | Via the Akkadian (*nu-gig* = *qadištu* = `קְדֵשָׁה`): here a woman dedicated to a god who inherits; the Torah bans the class. |
| LH §102, 1139' | *kaspam ana tadmiqtim* | `כסף לחסד` | `לֹא תַשִּׁיךְ לְאָחִיךָ נֶשֶׁךְ כֶּסֶף` (דברים כג:כ) | [equivalent] | כנ"ל; הצעה שלנו |
| LE §18a, 62 | *ṣibtam* | תוספת | `לֹא תַשִּׁיךְ לְאָחִיךָ נֶשֶׁךְ כֶּסֶף נֶשֶׁךְ אֹכֶל` (דברים כג:כ) | [divergence] | Silver and food (barley) interest both: LE §18a has exactly the two kinds. |
| UN d036–d041 | *ur₅-ra-še₃ … maš₂-bi 1(barig) 4(ban₂) še … maš₂-bi 2 gin₂* | בחוב נתן … התוספת שלו פרסיכתו אחת וארבע סאים שעורים … שני שקלים | `לֹא תַשִּׁיךְ לְאָחִיךָ נֶשֶׁךְ כֶּסֶף נֶשֶׁךְ אֹכֶל` (דברים כג:כ) | [divergence] | UN fixes the interest on grain (⅓) and silver (⅕) loans; the Torah forbids interest on silver and on food – the same two categories. Rates partly restored. |
| LH §102, 1139' | *kaspam ana tadmiqtim* | `כסף לחסד` | `לַנָּכְרִי תַשִּׁיךְ` (דברים כג:כא) | [divergence] | הצעה שלנו (השוו את "גמילות חסדים" של חז"ל: הלוואה בלי ריבית כמעשה חסד). |
| EST 512 | same | same | `כִּי דָּרֹשׁ יִדְרְשֶׁנּוּ יְהוָה אֱלֹהֶיךָ מֵעִמָּךְ וְהָיָה בְךָ חֵטְא` (דברים כג:כב) | [equivalent] | The vow demanded by the god; the unpaid vow is `חֵטְא` (cf. *ḫaṭû*). Our proposal. |
| LI §9, 153′–155′ | *ĝeškiri₆ lu₂-ka i₃-in-e₁₁ nam-ni₂-zuḫ-še₃ ba-dab₅* | לגן איש ירד ולגנבה נתפש, עשרה שקלי כסף ישקול | `כִּי תָבֹא בְּכֶרֶם רֵעֶךָ וְאָכַלְתָּ עֲנָבִים כְּנַפְשְׁךָ שָׂבְעֶךָ; וְאֶל כֶּלְיְךָ לֹא תִתֵּן` (דברים כג:כה) | [divergence] | Entering another's orchard: the Torah permits eating and forbids carrying away; LI fines the one caught "for theft". |
| HL HL2 §101, 101.7 | *pa]-a-i ták-ku ARAD-ša 3 GÍN.GÍN KÙ.BABBAR pa-a-i* | [… ייתן], ואם עבד – שלושה שקלים כסף ייתן. | `כִּי תָבֹא בְּכֶרֶם רֵעֶךָ וְאָכַלְתָּ עֲנָבִים כְּנַפְשְׁךָ שָׂבְעֶךָ; וְאֶל כֶּלְיְךָ לֹא תִתֵּן` (דברים כג:כה) | [divergence] | התורה מתירה לאכול בכרם הרע; החוק החתי דן בגניבת הצמח עצמו |

### Deuteronomy 24

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §148, 1745' | *ul izzibši* | לא יעזבנה | `וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [equivalent] | *ezēbu* = `עזב` [cognate] (Gen 2:24); the Torah's divorce verb is `שִׁלַּח`. |
| LH §128, 1463' | *īḫuzma* | נשא, | `כִּי יִקַּח אִישׁ אִשָּׁה וּבְעָלָהּ` (דברים כד:א) | [equivalent] |  |
| LH §128, 1464' | *riksātiša* | ואת תנאיה | `סֵפֶר כְּרִיתֻת` (דברים כד:א) | [absent] | מן הזיכרון |
| LH §137, 1587' | *ezēbim* | לעזוב | `וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [equivalent] | פועל הגירושין של התורה הוא `שִׁלַּח` |
| LH §138, 1618' | *izzibši* | יעזבנה. | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [equivalent] |  |
| LH §171, 2084' | *išṭurušim* | כתב לה, | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת` (דברים כד:א) | [equivalent] | הבעל "כותב לה" מסמך; שם מסמך של פירוד, כאן מסמך של מתנה לאחר מותו. הצעה שלנו |
| LE §27, 90–93 | *balum šâl abiša u ummiša iḫussima … ul aššat* | בלי שאלת אביה ואמה נשא … לא אשה היא | `כִּי יִקַּח אִישׁ אִשָּׁה וּבְעָלָהּ` (דברים כד:א) | [divergence] | Marriage = contract and ceremony with the parents (LE); taking and consummation (Deut). A year in his house does not make her a wife. |
| LE §59, 187–189 | *māri wulludma aššassu izīmma šanītam itaḫaz … innassaḫ* | בנים הוליד, ואת אשתו עזב, ואחרת נשא … יִנָּסַח | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [divergence] | The husband who divorces the mother of his children loses house and property (LE); Deut regulates divorce without penalty. |
| MAL §37, r v 15 | *šumma aʾīlu aššassu ezzib* | אם איש את אשתו יעזוב | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [divergence] | Divorce by the husband's word (*ezēbu*), no document, no ground stated. |
| MAL §45, r vi 71 | *ṭuppaša kī almattemma išaṭṭurū* | את לוחה כאלמנה יכתבו | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת` (דברים כד:א) | [equivalent] | A written document frees the woman for another husband – here a widow's tablet, not a divorce. From memory. |
| LI §30, 374′ | *ba-an-tak₄* | עזב | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [equivalent] | Divorce: *tak₄* = *ezēbu* `עזב` with "divorce silver" (375′); Torah: `שלח` with a writ. |
| UN §9, 229–233 | *dam nitadam-a-ni i₃-tak₄-tak₄, 1 ma-na* | את אשתו הבחירה יעזוב, מנה כסף ישקול | `וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [divergence] | Divorce costs the husband a mina (widow ½ mina, §10); the Torah requires a bill, not money. |
| HL HL1 §26b, 131 | *[takku …]… A.ŠÀ=y[a … …]* | [אם …] … וגם שדה […], | `וְהָיָה אִם לֹא תִמְצָא חֵן בְּעֵינָיו … וְכָתַב לָהּ סֵפֶר כְּרִיתֻת וְנָתַן בְּיָדָהּ וְשִׁלְּחָהּ מִבֵּיתוֹ` (דברים כד:א) | [divergence] | בתורה רק האיש משלח; בחוק החתי (26a, בנוסחים האחרים) גם האשה יכולה "למאן" באיש |
| LH §149, 1757' | *ittallak* | ותלך | `וְיָצְאָה מִבֵּיתוֹ; וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [cognate] | *alāku* = `הלך`. |
| LH §133, 1525' | *ana bīt šanîm* | לביתו של אחר | `וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [equivalent] | "בית אחר" = נישואים לאחר |
| LH §137, 1606' | *mutu libbiša* | ובעל לבה | `וְיָצְאָה מִבֵּיתוֹ; וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [equivalent] | המגורשת רשאית להינשא לאחר |
| LH §141, 1630' | *ana waṣêm* | לצאת | `וְיָצְאָה מִבֵּיתוֹ` (דברים כד:ב) | [cognate] | *waṣû* = `יצא`, ביציאה מבית הבעל |
| LH §172, 2115' | *ana waṣêm* | לצאת | `וְיָצְאָה מִבֵּיתוֹ` (דברים כד:ב) | [cognate] | *waṣû* = `יצא`, יציאת האשה מבית הבעל |
| LE §29, 101 | *aššassu šanûmma itaḫaz* | את אשתו אחר נשא | `וְיָצְאָה מִבֵּיתוֹ וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [equivalent] |  |
| MAL §36, o iv 100 | *ana mut libbiša tuššab* | לבעל לבה תשב | `וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [equivalent] | Remarriage after the first bond ended. |
| UN b026–b029 | *dam-ni in-tak₄, iti 6 u₃-na-tuš-am₃, munus dam ša₃-ga-na-ke₄ ḫa-ba-an-du₁₂-du₁₂* | את אשתו עזב, שישה ירחים משישבה לו, את האשה – בעל לבה ישא | `וְיָצְאָה מִבֵּיתוֹ; וְהָלְכָה וְהָיְתָה לְאִישׁ אַחֵר` (דברים כד:ב) | [equivalent] | The abandoned wife free to remarry after six months (cf. LH §135–§136); the Torah has no such rule (Deut 24:5 is only thematically near). |
| LH §136, 1578' | *izēruma* | שנא | `וּשְׂנֵאָהּ הָאִישׁ הָאַחֲרוֹן` (דברים כד:ג) | [equivalent] | אותו פועל משמש באכדית ובעברית לדחייה המביאה לפירוד (ראו §142) |
| LH §173, 2131' | *warkîm* | האחרון | `אוֹ כִי יָמוּת הָאִישׁ הָאַחֲרוֹן אֲשֶׁר לְקָחָהּ לוֹ לְאִשָּׁה` (דברים כד:ג) | [equivalent] | "האיש האחרון" של אשה שנישאה פעמיים, מול "בעלה הראשון" (דברים כד:ד); אותו זוג מונחים כמו *ḫāwiru* (2142') / *mutu warkû*. מן הזיכרון |
| LE §30, 103–105 | *ālšu u bēlšu izērma ittaḫbit … ana aššatišu ul iraggam* | את עירו ואת אדוניו שנא, וברח … את אשתו לא יתבע | `וּשְׂנֵאָהּ הָאִישׁ הָאַחֲרוֹן` (דברים כד:ג) | [equivalent] | *zêru* = `שנא` (= LH); there toward a wife. Cross-collection: LH §136. |
| MAL §36, o iv 102 | *ana mutiša urkie zakkuʾat* | לבעלה האחרון זכאית היא | `וּשְׂנֵאָהּ הָאִישׁ הָאַחֲרוֹן` (דברים כד:ג) | [equivalent] | "The last husband" in both laws. |
| LH §135, 1561' | *ana ḫāwiriša* | לבעלה (הראשון) | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ לִהְיוֹת לוֹ לְאִשָּׁה` (דברים כד:ד) | [equivalent] | אותו מושג, "בעלה הראשון" (`הראשון` בסוגריים בשורה); [divergence] בתורה אסור לו להחזירה, כאן היא חייבת לשוב. מן הזיכרון (ווסטברוק) |
| LH §136, 1582' | *ul itâr* | לא תשוב. | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [equivalent] | גם בתורה אין שיבה אל הבעל הראשון |
| LH §174, 2142' | *mārū ḫāwirišama* | בני בעלה (הראשון) הם | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ` (דברים כד:ד) | [equivalent] | "בעלה הראשון" מול "האיש האחרון" (כד:ג); `הראשון` בשורה בסוגריים. מן הזיכרון (ווסטברוק) |
| LH §177, 2216' | *panîm* | הקודם | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [equivalent] | הבעל הראשון והאחרון (כאן 2216'/2221') כמו בדברים כד:ג–ד; שם הבעל השני "אחרון", כמו *warkû* כאן |
| LE §29, 98–102 | *ittašlal … aššassu šanûmma itaḫaz … inūma ittūram aššassu itabbal* | נשבה … את אשתו אחר נשא … כאשר שב – את אשתו יטול | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [divergence] | The captive who returns takes back his wife although she married another and bore a son; Deut forbids the first husband to take back a divorced wife who married another (another case: divorce, not captivity). Cross-collection: LH §133–135. |
| MAL §36, o iv 101 | *mussa ina alāke lā iqarribašše* | בעלה, בהגיעו, לא יקרב אליה | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [equivalent] | The first husband cannot reclaim her; Deut after divorce, MAL after absence. |
| MAL §36, r v 3 | *aššassu ilaqqe* | ואת אשתו יקח | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [divergence] | MAL lets the first husband take her back (no divorce occurred). |
| MAL §45, r vi 74–75 | *aššassu ša ana kīde aḫzutūni ilaqqeašši* | את אשתו, אשר בחוץ נישאה – יקחנה | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן אֲשֶׁר שִׁלְּחָהּ לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [divergence] | The returning captive takes back his wife who married another; Deut forbids the first husband to retake her (after divorce). As LH §135, LE §29. |
| MAL §55, r viii 28 | *ana mutiša lā utârši* | לבעלה לא ישיבנה | `לֹא יוּכַל בַּעְלָהּ הָרִאשׁוֹן … לָשׁוּב לְקַחְתָּהּ` (דברים כד:ד) | [equivalent] | A woman who may not return to her husband (here as the husband's punishment). |
| LH §26, 619 | *šumma lu rēdûm* | `אם בין חייל` | `לֹא יֵצֵא בַּצָּבָא וְלֹא יַעֲבֹר עָלָיו לְכָל דָּבָר` (דברים כד:ה) | [equivalent] | גיוס לפי מכסה |
| LH §31, 696 | *ištiatma* | `אחת בלבד` | `לֹא יֵצֵא בַּצָּבָא … נָקִי יִהְיֶה לְבֵיתוֹ שָׁנָה אֶחָת` (דברים כד:ה) | [divergence] | שנה אחת שבה הקשר בין האיש לביתו קודם לחובת הצבא; ב־LH שנה אחת של היעדרות אינה מפקיעה את הנחלה. הצעה שלנו. |
| MAL §36, o iv 85 | *mussa ana eqle ittalak* | ובעלה אל השדה הלך | `כִּי יִקַּח אִישׁ אִשָּׁה חֲדָשָׁה לֹא יֵצֵא בַּצָּבָא` (דברים כד:ה) | [equivalent] | The husband away on (royal) service. |
| HL HL2 §112, 112.2 | *… I-NA MU 4{KAM}-ma ša-a[ḫ-ḫa-an]* | [… את השַׁחְחַן] לא יעשה, ובשנה הרביעית את השַׁחְחַן | `נָקִי יִהְיֶה לְבֵיתוֹ שָׁנָה אֶחָת` (דברים כד:ה) | [equivalent] | פטור זמני מחובה ציבורית למי שמתחיל משק חדש |
| LH §241, 2830' | *alpam ana nipûtim* | שור למשכון | `לֹא יַחֲבֹל רֵחַיִם וָרָכֶב כִּי נֶפֶשׁ הוּא חֹבֵל` (דברים כד:ו) | [equivalent] | The working ox as the debtor's livelihood. |
| LH §114, 1291' | *nipûssu ittepe* | `ואת מַשְׁכּוֹנוֹ מִשְׁכֵּן,` | `לֹא יַחֲבֹל רֵחַיִם וָרָכֶב כִּי נֶפֶשׁ הוּא חֹבֵל` (דברים כד:ו) | [equivalent] | בתורה המשכון הוא חפץ, וההגבלות הן על חפצי חיים; ב־LH המשכון הוא אדם |
| LE §24, 82 | *dīn napištim* | דין נפשות | `לֹא יַחֲבֹל רֵחַיִם וָרָכֶב כִּי נֶפֶשׁ הוּא חֹבֵל` (דברים כד:ו) | [equivalent] | Distraint and "life": death of a distrained free person = capital case (LE); taking the millstone = "taking life" (Deut). |
| HL HL2 §121, 121.2 | *{GIŠ}ap-pa-la-aš-ša-a[š …]* | על האַפַּלַּשָּׁה למעלה יעמיד, ו[בשוורים …] | `לֹא יַחֲבֹל רֵחַיִם וָרָכֶב כִּי נֶפֶשׁ הוּא חֹבֵל` (דברים כד:ו) | [divergence] | כלי המחיה: בתורה מוגן מפני המלווה, בחוק החתי הישן – מפני הגנב, באכזריות |
| LH §14, 509 | idem | idem | `כִּי יִמָּצֵא אִישׁ גֹּנֵב נֶפֶשׁ מֵאֶחָיו מִבְּנֵי יִשְׂרָאֵל וְהִתְעַמֶּר בּוֹ וּמְכָרוֹ וּמֵת הַגַּנָּב הַהוּא` (דברים כד:ז) | [divergence] | Deut adds the sale and limits to "his brothers". |
| HL HL1 §19a, 83 | *takku LÚ.U₁₉.LU-an LÚ-an=aku MUNUS-n=aku {URU}ḫattušaz kuiš[ki] LÚ* | אם מישהו, איש לוּוִיָּה, יגנוב מֵחַתּוּשָׁה אדם, בין איש בין אשה, | `מֵאֶחָיו מִבְּנֵי יִשְׂרָאֵל` (דברים כד:ז) | [equivalent] | בשני החוקים חשוב מי גונב את מי: בן העם הנגנב והזר הגונב |
| HL HL1 §19b, 87 | *takku {URU}ḫat[tuši=pat] LÚ {URU}ḪA-AT-TI LÚ {URU}luwiyan kuiški* | אם [בחַתּוּשָׁה עצמה] מישהו, איש חַתִּי, יגנוב איש לוּוִיָּה, | `גֹּנֵב נֶפֶשׁ מֵאֶחָיו` (דברים כד:ז) | [divergence] | התורה אוסרת לגנוב "מאחיו", כלומר מבני עמו; החוק החתי מגן גם על איש לוּוִיָּה שנגנב בבירה, אם כי בפחות (ראשים, לא בית) |
| HL HL2 §149, 149.4 | *2 SAG.DU pa-a-i pár-na-aš-še-ia šu-⸢wa-a-ez⸣-z[i]* | שני ראשים ייתן, ואל ביתו יביט. | `כִּי יִמָּצֵא אִישׁ גֹּנֵב נֶפֶשׁ מֵאֶחָיו … וּמְכָרוֹ וּמֵת הַגַּנָּב הַהוּא` (דברים כד:ז) | [divergence] | אותו מקרה עקרוני (סחר באדם שאינו שלך); בתורה מיתה, כאן פיצוי בבני אדם |
| LH §241, 2831' | *ittepe* | משכן | `לֹא תָבֹא אֶל בֵּיתוֹ לַעֲבֹט עֲבֹטוֹ` (דברים כד:י) | [equivalent] |  |
| LH §114, 1291' | *nipûssu ittepe* | `ואת מַשְׁכּוֹנוֹ מִשְׁכֵּן,` | `לֹא תָבֹא אֶל בֵּיתוֹ לַעֲבֹט עֲבֹטוֹ` (דברים כד:י) | [equivalent] | התורה אוסרת להיכנס לבית החייב ולקחת עבוט |
| LE §22, 74 | *amat awīlim ittepe* | ואמת איש משכן | `כִּי תַשֶּׁה בְרֵעֲךָ מַשַּׁאת מְאוּמָה לֹא תָבֹא אֶל בֵּיתוֹ לַעֲבֹט עֲבֹטוֹ` (דברים כד:י) | [divergence] | Distraint of a **person** (LE) – lawful if there is a debt; Deut limits distraint of objects. |
| HL HL2 §164, 164.1 | *ták-ku *a-ap-pa-at-ri-wa-an*-zi ku-iš-k[i p]a-iz-zi* | אם מישהו לעקל ילך, | `לֹא תָבֹא אֶל בֵּיתוֹ לַעֲבֹט עֲבֹטוֹ` (דברים כד:י) | [equivalent] | הנושה הבא לבית החייב; בחוק החתי – פגיעה בכלי הקודש של הבית מחייבת קידוש מחדש |
| LE §23, 78 | *nipûtam ina bītišu iklāma* | את המשכון בביתו כלא | `וְהָאִישׁ אֲשֶׁר אַתָּה נֹשֶׁה בוֹ יוֹצִיא אֵלֶיךָ אֶת הַעֲבוֹט הַחוּצָה` (דברים כד:יא) | [divergence] | The distrained person detained in the creditor's house; in Deut the pledge stays with the debtor until he brings it out. |
| LH §273, 3050' | *agram īgur* | שכיר שכר | `לֹא תַעֲשֹׁק שָׂכִיר עָנִי וְאֶבְיוֹן` (דברים כד:יד) | [equivalent] |  |
| HL HL2 §158b, 158b.1 | *[ták-ku MUNUS-TU]M? BURU₁₄-i ku-uš-ša-ni ti-i-e-ez-zi ŠA ITU 3{KAM} 12 PA ŠE ku-uš-ša-aš-še-et* | [אם אשה] בקציר לְשָׂכָר תיכנס – של שלושה חודשים שנים עשר פָּרִיס שעורים שְׂכָרָהּ. | `לֹא תַעֲשֹׁק שָׂכִיר עָנִי וְאֶבְיוֹן` (דברים כד:יד) | [equivalent] | השכירים העונתיים; האשה – שליש מן האיש; בנוסח המאוחר (KBo 6.26) – שני חודשים |
| LH epil. 3284' | idem | idem | `וְלֹא יִקְרָא עָלֶיךָ אֶל יְהוָה וְהָיָה בְךָ חֵטְא` (דברים כד:טו) | [divergence] | The wronged poor may cry to God against the oppressor; here the man who saw his case blesses the king. Our proposal. |
| LH §273, 3060' | *ina ūmim ištēn inaddin* | ליום אחד יתן | `בְּיוֹמוֹ תִתֵּן שְׂכָרוֹ` (דברים כד:טו) | [equivalent] | Daily wage: the Torah fixes the day of payment, LH the rate. |
| HL HL2 §150, 150.1 | *ták-ku LÚ-eš ku-uš-ša-ni ti-i-e-[ez-zi A-NA I]TU 1{KAM} 1 GÍN.GÍN K[Ù.BABBAR pa-a-i]* | אם איש לְשָׂכָר ייכ[נס – לחודש] אחד שקל אחד כ[סף ייתן]; | `בְּיוֹמוֹ תִתֵּן שְׂכָרוֹ` (דברים כד:טו) | [equivalent] | שכר השכיר; בתורה יום יום ובלי תעריף, כאן מחירון לחודש |
| EST 255 | same | same | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | Same. |
| LH §210, 2588'–2589' | *mārassu idukkū* | את בתו יהרגו | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת` (דברים כד:טז) | [divergence] |  |
| LH §230, 2725' | *mār itinnim šuāti* | את בן הבנאי ההוא | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת` (דברים כד:טז) | [divergence] | Vicarious punishment, which Deut forbids in so many words; = §210 (בת תחת בת). |
| LH §230, 2725' | *mār itinnim šuāti* | `את בן הבנאי ההוא` | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | הכלל המקראי אוסר בדיוק את מה ש־LH מצווה כאן; מן הזיכרון |
| LH §230, 2726' | *idukkū* | `יהרגו.` | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת` (דברים כד:טז) | [divergence] |  |
| LH §116, 1316' | *šumma mār awīlim* | `אם בן איש,` | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת` (דברים כד:טז) | [divergence] | העונש הנגזר על בן הנושה (1317') הוא בדיוק מה שהתורה אוסרת. מן הזיכרון (ההקבלה מקובלת; השוו §210, §230). |
| LH §116, 1317' | *mārašu idukkū* | `את בנו יהרגו;` | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | מן הזיכרון (פאול 1970, פינקלשטיין 1981). |
| MAL §2, o i 21–22 | *ana mutiša mārēša mārāteša lā iqarribū* | אל בעלה, בניה, בנותיה לא יקרבו | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים … אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [equivalent] | Personal, not vicarious, liability. From memory. |
| MAL §10, o ii 3 | *lū mār lū mārat* | בין בן, בין [בת] | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | If the killers have nothing, a son or a daughter (handed over?): vicarious liability; the continuation is broken. Our proposal. |
| MAL §32, o iv 53–55 | *arna u ḫīṭa ša mutiša tanašši* | את העון ואת החטא של בעלה תשא | `אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | Vicarious liability of the wife. |
| MAL §50, r vii 65–68 | (ORACC norm *eppušūši*) | [אשת האיש …] … יע[שו לו] | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים … אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | On the reading "they shall do to her" (the striker's wife), a vicarious miscarriage (Driver–Miles, Cardascia: from memory). The ATF restores "him". **Rests on restoration.** |
| MAL §55, r viii 23–27 | *abu ša batulte aššat nāʾikāna … ilaqqe ana mazāʾe iddanši* | אבי הבתולה את אשת הבא על הבתולה יקח, למיעוך יתננה | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים … אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | **Vicarious punishment:** the rapist's innocent wife is handed over to be raped. The sharpest difference from Deut 22:28–29. |
| MAL §56, r viii 44–45 | *aʾīle itamma ana aššitišu lā iqarribū* | האיש יישבע; לאשתו לא יקרבו | `אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | In the consensual case the man's wife is not touched – the vicarious penalty of §55 depends on force. |
| IN IN §2, 2.20 | *ma-a-na-aš a-ki-ia ku-wa-pí na-aš UL 1-aš a-ki MÁŠ-⸢ŠU-ma⸣-aš-⸢ši⸣ te-et-ti-⸢an-pát⸣* | ואם הוא אי־פעם ימות – לא לבדו ימות; משפחתו כלולה עמו ממש. | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים וּבָנִים לֹא יוּמְתוּ עַל אָבוֹת: אִישׁ בְּחֶטְאוֹ יוּמָתוּ` (דברים כד:טז) | [divergence] | התורה אוסרת על בית דין להעניש משפחה על חטא של יחיד; המשל החתי מניח את ההפך כמובן מאליו |
| IN IN §8, 8.26 | *SAG.DU-aš *ÚŠ*-tar 2-uš-pát-at ak-kán-du DINGIR-LIM-na-ša-at NU.*GÁL* [l]e-⸢e(?)⸣* | מות־ראש! שניהם ימותו! ושל הָאֵל – אין, [אַל?] | `לֹא יוּמְתוּ אָבוֹת עַל בָּנִים` (דברים כד:טז) | [divergence] | אינו נוגע כאן: שניהם חטאו. *2-pat akkandu* `שניהם ימותו` כבחוקים (HL2 198.4) |
| LH epil. 3203'–3204' | *ḫabālim … almattam* | יחבול … אלמנה | `לֹא תַטֶּה מִשְׁפַּט גֵּר יָתוֹם וְלֹא תַחֲבֹל בֶּגֶד אַלְמָנָה` (דברים כד:יז) | [cognate] | `חבל` and `אלמנה` together; Heb. `חבל` here "take in pledge" (another sense). |
| LH §172, 2105' | *usaḫḫamuši* | ידחקו בה, | `וְלֹא תַחֲבֹל בֶּגֶד אַלְמָנָה` (דברים כד:יז) | [equivalent] | הגנת האלמנה; כאן העושקים הם בניה |
| UN prol. 162–165 | (the same) | (as above) | `לֹא תַטֶּה מִשְׁפַּט גֵּר יָתוֹם; וְלֹא תַחֲבֹל בֶּגֶד אַלְמָנָה` (דברים כד:יז) | [equivalent] |  |
| LH §57, 1021 | *bēl eqlim eqelšu iṣṣid* | בעל השדה את שדהו יקצור | `כִּי תִקְצֹר קְצִירְךָ בְשָׂדֶךָ` (דברים כד:יט) | [equivalent] |  |

### Deuteronomy 25

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3432' | *awassu lilemmin* | את דברו תרשיע | `וְהִצְדִּיקוּ אֶת הַצַּדִּיק וְהִרְשִׁיעוּ אֶת הָרָשָׁע` (דברים כה:א) | [equivalent] | Divine court. Our proposal. |
| LH §202, 2541' | *ina puḫrim* | באספה | `וְהִפִּילוֹ הַשֹּׁפֵט וְהִכָּהוּ לְפָנָיו` (דברים כה:ב) | [equivalent] | Public flogging. |
| LH §127, 1457' | *maḫar dayyānī* | לפני הדיינים | `וְהִפִּילוֹ הַשֹּׁפֵט וְהִכָּהוּ לְפָנָיו כְּדֵי רִשְׁעָתוֹ בְּמִסְפָּר` (דברים כה:ב) | [equivalent] | ההלקאה נעשית לפני השופט |
| LH §127, 1458' | *inaṭṭûšu* | ילקוהו, | `וְהִפִּילוֹ הַשֹּׁפֵט וְהִכָּהוּ לְפָנָיו` (דברים כה:ב) | [equivalent] | ההלקאה לפני השופט; המצבה אולי *inaddûšu* "יפילוהו" (`וְהִפִּילוֹ`) – קריאה שלנו |
| LH §202, 2543' | *ištēn šūši immaḫḫaṣ* | שישים (פעם) ימחץ | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [divergence] | 60 lashes for an insult to rank vs. a cap of 40 "lest your brother be degraded". |
| MAL §7, o i 77 | *20 ina ḫaṭṭāte imaḫḫuṣūši* | עשרים במקלות ימחצוה | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [equivalent] | The number of blows fixed by law; here for a woman. |
| MAL §18, o ii 78 | *40 ina ḫaṭṭāte imaḫḫuṣūš* | ארבעים במקלות ימחצוהו | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [equivalent] | Forty blows; in Deut the maximum for "the guilty", here the fixed penalty of the slanderer (§19: fifty). |
| MAL §19, o ii 90 | *50 ina ḫaṭṭāte* | חמישים במקלות | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [divergence] | Fifty: more than the Torah's maximum. |
| MAL §40, r v 75 | *50 ina ḫaṭṭāte imaḫṣūši* | חמישים במקלות ימחצוה | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [divergence] | Fifty blows, above Deut's maximum. |
| UN 320–328 | *ĝešbu₂-ta ugu₂ lu₂ lu₂ i₃-ḫa-aš … 3(geš₂) usan₃ i₃-ra-ra* | בקטטה את גולגולת איש איש שבר … מאה ושמונים בשוט יִמָּחֵץ | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [divergence] | 180 lashes (3 × 60, cf. LH §202 60) against the Torah's limit of 40. MS 2064 only. |
| MALB §8, o iv 18 | *1 meʾate ina haṭṭāte imahhuṣūš* | `מאה במקלות ימחצוהו` | `אַרְבָּעִים יַכֶּנּוּ לֹא יֹסִיף` (דברים כה:ג) | [divergence] | 100 blows, two and a half times the Torah's maximum. |
| LH §268, 3031' | *ana diāšim* | לדיש | `לֹא תַחְסֹם שׁוֹר בְּדִישׁוֹ` (דברים כה:ד) | [cognate] | *diāšu* = `דוש`, the ox threshing. Our proposal for the link. |
| IN IN §17, 17.1 | *an-da-ma ŠA KI[SLAḪ] GU₄.APIN.LÁ{ḪI.A} ku-i-e-eš [ḫar-t]e-ni nu ma-a-an GU₄.A[PIN.L]Á* | ונוסף על כך: את שוורי־החרישה של הגורן אשר (אתם) [מחזיקים] – אם שור חרישה | `לֹא תַחְסֹם שׁוֹר בְּדִישׁוֹ` (דברים כה:ד) | [divergence] | שם דאגה לשור הדש, כאן רק לרכוש האל; ההונאה בשוורי האל מקבילה ל־מלאכי א:יג (ראו 7.1) |
| LH §150, 1772' | *ana aḫîm* | לזר | `לֹא תִהְיֶה אֵשֶׁת הַמֵּת הַחוּצָה לְאִישׁ זָר` (דברים כה:ה) | [equivalent] | Property (or the widow) stays in the family. |
| LH §172, 2126' | *mut libbiša* | ובעל לבה | `לֹא תִהְיֶה אֵשֶׁת הַמֵּת הַחוּצָה לְאִישׁ זָר` (דברים כה:ה) | [divergence] | בתורה אלמנה בלי בן אינה רשאית להינשא מחוץ למשפחה (הייבום); כאן האלמנה, שיש לה בנים, נישאת ל"בעל לבה" |
| MAL §25, o iii 84 | *aḫḫū mutiša lā zēzū* | אחי בעלה לא חלקו | `כִּי יֵשְׁבוּ אַחִים יַחְדָּו` (דברים כה:ה) | [equivalent] | The undivided brothers – the setting of the levirate in Deut (the usual reading); in MAL they inherit the jewellery, not the widow. From memory (Driver–Miles, Westbrook). |
| MAL §25, o iii 85 | *u merāša laššu* | ובן אין לה | `וּבֵן אֵין לוֹ` (דברים כה:ה) | [equivalent] | Almost the same words; Deut: the dead man has no son; MAL: the woman. |
| MAL §29, o iv 17 | *mārē emeša lā iqarribū* | בני חמיה לא יקרבו | `כִּי יֵשְׁבוּ אַחִים יַחְדָּו` (דברים כה:ה) | [divergence] | The husband's brothers (the levirs of Deut) are excluded from her dowry. |
| MAL §30, o iv 25 | *aššat merāšu mētte* | את אשת בנו המת | `לֹא תִהְיֶה אֵשֶׁת הַמֵּת הַחוּצָה לְאִישׁ זָר` (דברים כה:ה) | [equivalent] | `אֵשֶׁת הַמֵּת`. |
| MAL §30, o iv 26–28 | *ana merāšu šanāʾiye … ana aḫuzzete iddanši* | לבנו השני … לנישואין יתננה | `יְבָמָהּ יָבֹא עָלֶיהָ וּלְקָחָהּ לוֹ לְאִשָּׁה וְיִבְּמָהּ` (דברים כה:ה) | [divergence] | **The father gives his dead son's widow to another son; in Deut the brother takes her.** No *yābimu* term: [absent] the levirate vocabulary; the purpose is the bride-gift already paid, not "to raise a name". |
| MAL §33, o iv 60–61 | *šumma merāša laššu emuša ana māre ša libbišu iddanši* | [אם בן] אין לה, [חמיה לבן] בט[נו יתננה] | `יְבָמָהּ יָבֹא עָלֶיהָ` (דברים כה:ה) | [divergence] | The father-in-law gives her to another son of his (the dead man's brother): the subject is the father. **Restored** almost entirely. |
| MAL §43, r vi 26 | (no levir term) | לאשר חָפֵץ יתן | `יְבָמָהּ יָבֹא עָלֶיהָ וּלְקָחָהּ לוֹ לְאִשָּׁה וְיִבְּמָהּ` (דברים כה:ה) | [absent] | No *yābimu*; the father chooses and gives; the son may have fled, not died; no "name". Cf. MAL §30, §33 (T3). |
| UN e026–e027 | *dam šeš-gal-na … i₃-gaz* | את אשת אחיו הגדול נשא – יהרג | `כִּי יֵשְׁבוּ אַחִים יַחְדָּו וּמֵת אַחַד מֵהֶם וּבֵן אֵין לוֹ … יְבָמָהּ יָבֹא עָלֶיהָ` (דברים כה:ה) | [divergence] | The levirate makes the dead brother's wife a duty; UN has no levirate here (`יבם` reserved). |
| MALB §2, o ii 15 | *šumma aʾīlu ina ahhū lā zēzūtu* | `אם איש מן האחים שלא חלקו` | `כִּי יֵשְׁבוּ אַחִים יַחְדָּו` (דברים כה:ה) | [equivalent] | The brothers living together with the estate undivided (from memory: the usual explanation of `יחדו`); cf. MAL A §25 (o iii 84). |
| HL HL2 §193, 193.1 | *ták-ku LÚ-aš MUNUS-an ḫar-zi ta LÚ-eš a-ki DAM-SÚ [ŠEŠ-ŠU da-a-i ta-an A-BU-ŠU]* | אם איש יחזיק אשה, והאיש ימות – את אשתו [אחיו ייקח; ושנית אביו] | `יְבָמָהּ יָבֹא עָלֶיהָ וּלְקָחָהּ לוֹ לְאִשָּׁה` (דברים כה:ה) | [absent] | אותו מנהג (האח לוקח את אשת אחיו המת), בלי מונח מיוחד (`יבם` שמור) ובלי "הבן שיקום על שם אחיו" |
| LH epil. 3595' | *šumam* | ושם | `יָקוּם עַל שֵׁם אָחִיו הַמֵּת; וְלֹא יִמָּחֶה שְׁמוֹ מִיִּשְׂרָאֵל` (דברים כה:ו) | [cognate] | *šumu* "name" = the son. Our proposal. |
| MAL §28, o iv 3 | *merāša ḫurda ilteša naṣṣat* | ובנה – *שנולד אחרי מות (אביו)* – עמה נשאה | `וְהָיָה הַבְּכוֹר אֲשֶׁר תֵּלֵד יָקוּם עַל שֵׁם אָחִיו הַמֵּת` (דברים כה:ו) | [divergence] | The posthumous son: in MAL he stays his begetter's heir and does not pass to his mother's new husband; in Deut the levir's son is counted to the dead. |
| MAL §43, r vi 29 | *mār marʾe mētte* | בן הבן המת | `יָקוּם עַל שֵׁם אָחִיו הַמֵּת` (דברים כה:ו) | [divergence] | The dead son's son (the grandson), not a brother, marries her. |
| LI epil. 477′ | *ibila-a-ni nam-me* | [יורש] אל יהיה לו | `וְלֹא יִמָּחֶה שְׁמוֹ מִיִּשְׂרָאֵל` (דברים כה:ו) | [equivalent] | The heir keeps the name alive (the levirate's purpose); the curse removes him. Restored. |
| HL HL2 §193, 193.3 | *DUMU ŠEŠ-ŠU [da-a-i]* | בן אחיו [ייקח]. | `וְהָיָה הַבְּכוֹר אֲשֶׁר תֵּלֵד יָקוּם עַל שֵׁם אָחִיו הַמֵּת` (דברים כה:ו) | [divergence] | תכלית הייבום בתורה – שם המת; כאן רק סדר: אח, אב, בן אח |
| MAL §30, o iv 28 | *aḫuzzatu* | לנישואין | `לְהָקִים לְאָחִיו שֵׁם בְּיִשְׂרָאֵל` (דברים כה:ז) | [absent] | No "name of the dead" in MAL. |
| MAL §30, o iv 33–35 | *ḫadīma abu … kallāssu ilaqqea ana merāšu iddan* | (אם) חָפֵץ – האב … את כלתו יקח, לבנו יתן | `וְאִם לֹא יַחְפֹּץ הָאִישׁ לָקַחַת אֶת יְבִמְתּוֹ` (דברים כה:ז) | [divergence] | "Wishing" decides in both: the father's will in MAL, the brother's in Deut. |
| LH epil. 3598'–3599' | *zēr awīlūtim … ay ibni* | זרע אדם … אל תבנה | `כָּכָה יֵעָשֶׂה לָאִישׁ אֲשֶׁר לֹא יִבְנֶה אֶת בֵּית אָחִיו` (דברים כה:ט) | [cognate] | *banû* = בנה of begetting. Our proposal. |
| MAL §7, o i 74 | *qāta ana aʾīle tattabal* | יד אל איש הובילה | `וְשָׁלְחָה יָדָהּ וְהֶחֱזִיקָה בִּמְבֻשָׁיו` (דברים כה:יא) | [equivalent] | A woman who lays a hand on a man; the verb is *wabālu* "bring (a hand)", not "send". |
| MAL §8, o i 78 | *ina ṣālte* | בְּמָדוֹן | `כִּי יִנָּצוּ אֲנָשִׁים יַחְדָּו אִישׁ וְאָחִיו` (דברים כה:יא) | [divergence] | Deut: two men fight and the wife intervenes; MAL: the woman herself is in the fight with the man. |
| MAL §8, o i 78–79 | *iška ša aʾīle taḫtepi* | אשך של איש ניפצה | `וְהֶחֱזִיקָה בִּמְבֻשָׁיו` (דברים כה:יא) | [divergence] | Deut punishes the seizing itself (no injury); MAL the crushing (an injury), graded by its result. |
| EST 627 | same | same | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] | The only cutting off of the palm (*kappu* = `כף`) in Deuteronomy. Our proposal. |
| LH §195, 2506' | *rittašu inakkisū* | את כפו יקצצו | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] | The Torah's only mutilation; `כף` + `קצץ`. |
| LH §218, 2638' | *rittašu inakkisū* | `את כפו יקצצו.` | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] | העונש היחיד בתורה של קטיעת איבר, ובאותן מילים (`כף`, `קצץ`); מן הזיכרון |
| LH §226, 2692' | *inakkisū* | `יקצצו.` | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] |  |
| LH §192, 2471' | *inakkisū* | יקצצו. | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] | העונש הגופני היחיד בתורה, באותו פועל (*nakāsu* = `קצץ`, T5) |
| MAL §8, o i 80 | *1 ubānša inakkisū* | אצבע אחת שלה יקצצו | `וְקַצֹּתָה אֶת כַּפָּהּ` (דברים כה:יב) | [equivalent] / [divergence] | **The root `קצץ` comes from LH's Hebrew for *nakāsu*, not from a cognate.** Finger vs hand: the hand in Deut for the seizing; one finger here, and a worse mutilation if the second testicle is damaged. |
| MALB §8, o iv 17 | *1 ubānšu inakkisū* | `אצבע אחת שלו יקצצו` | `וְקַצֹּתָה אֶת כַּפָּהּ לֹא תָחוֹס עֵינֶךָ` (דברים כה:יב) | [divergence] | Mutilation as a penalty; `קצץ` is LH's rendering of *nakāsu*, not a cognate (as MAL A §8, o i 80). |
| HL HL1 §95, 527 | *[t]ak[k]u ARAD-iš É-er tāyezzi* | [אם] עבד יגנוב בית, | `וְקַצֹּתָה אֶת כַּפָּהּ: לֹא תָחוֹס עֵינֶךָ` (דברים כה:יב) | [divergence] | העונש הגופני היחיד של קטיעה בתורה (`קצץ` הוא גם מילת חוקי חמורבי ל־*nakāsu*); בחוק החתי – קטיעת אף ואוזניים לעבד בלבד, ובן החורין משלם |
| LH §108, 1212' | *ina abnim rabītim* | `באבן גדולה` | `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן גְּדוֹלָה וּקְטַנָּה` (דברים כה:יג) | [cognate] | אבן המשקל "הגדולה" היא אותה מילה (*abnu* = `אֶבֶן`) ואותו תואר בשתי השפות |
| UN prol. 147–148 | *1 gin₂ ku₃ na₄ za₃ 1 ma-na-e* | אבן של שקל כסף אחד עד מנה אחת | `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן גְּדוֹלָה וּקְטַנָּה` (דברים כה:יג) | [equivalent] | The weight is a "stone" in both languages. |
| UN prol. 147–149 | (the weights) | (as above) | `אֶבֶן שְׁלֵמָה וָצֶדֶק יִהְיֶה לָּךְ אֵיפָה שְׁלֵמָה וָצֶדֶק` (דברים כה:טו) | [equivalent] | Weights and capacity measures together, as here. |
| LH §108, 1219' | *inaddûši* | `ישליכוה.` | `כִּי תוֹעֲבַת יְהוָה` (דברים כה:טז) | [absent] | ומושא לנבואה (עמוס ח:ה–ז; מיכה ו:יא). מן הזיכרון. |
| EST 661 | same | same | `תִּמְחֶה אֶת זֵכֶר עֲמָלֵק מִתַּחַת הַשָּׁמָיִם` (דברים כה:יט) | [equivalent] |  |
| LH epil. 3418'–3420' | idem | idem | `תִּמְחֶה אֶת זֵכֶר עֲמָלֵק` (דברים כה:יט) | [equivalent] |  |

### Deuteronomy 26

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 178 | *lā taḫalliqāni* | לא תימלטו | `אֲרַמִּי אֹבֵד אָבִי` (דברים כו:ה) | [divergence] | *ḫalāqu* "be a fugitive" is cited in the debate on `אֹבֵד` (from memory); not rendered `אבד` here (Decision 4). |
| EST 452 | *eṭemmakunu pāqidu nāq mê ay irši* | אטכם פוקד, נוסך מים אל ימצא | `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד) | [divergence] | Offerings to the dead: forbidden in Deut, their absence a curse here. Our proposal. |
| EST 393 | same | same | `אֶת יְהוָה הֶאֱמַרְתָּ הַיּוֹם לִהְיוֹת לְךָ לֵאלֹהִים` (דברים כו:יז) | [equivalent] |  |

### Deuteronomy 27

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3218' | *ina narîya ašṭur* | במצבתי כתבתי | `וַהֲקֵמֹתָ לְךָ אֲבָנִים גְּדֹלוֹת וְשַׂדְתָּ אֹתָם בַּשִּׂיד` (דברים כז:ב) | [equivalent] | Law written on set-up stones. From memory. |
| LI epil. 446′–448′ | *u₄ niĝ₂-si-sa₂ … i-ni-in-ĝar-ra-a na₄-bi ki ḫe₂-em-ma-ni-tag* | כאשר מישרים בשומר ואכד שמתי, את האבן ההיא לקרקע הגעתי | `וַהֲקֵמֹתָ לְךָ אֲבָנִים גְּדֹלוֹת וְשַׂדְתָּ אֹתָם בַּשִּׂיד` (דברים כז:ב) | [equivalent] | **The law written on a set-up stone**; LI says "stone" (*na₄*), as Deut 27 says `אֲבָנִים`. Cross-collection: LH 3218′ `במצבתי כתבתי` (*narû*). |
| LH epil. 3218' | idem | idem | `וְכָתַבְתָּ עֲלֵיהֶן אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת` (דברים כז:ג) | [equivalent] |  |
| LH epil. 3218' | idem | idem | `וְכָתַבְתָּ עַל הָאֲבָנִים אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת בַּאֵר הֵיטֵב` (דברים כז:ח) | [equivalent] | Written clearly, to be read. |
| LI epil. 448′ | *na₄-bi* | את האבן ההיא | `וְכָתַבְתָּ עַל הָאֲבָנִים אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת בַּאֵר הֵיטֵב` (דברים כז:ח) | [equivalent] | The stone bears the laws. |
| UN epil. g009 | *mu-sar-ra* | כתובתה | `וְכָתַבְתָּ עַל הָאֲבָנִים אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת בַּאֵר הֵיטֵב` (דברים כז:ח) | [equivalent] | The law written on stone, followed by curses (27:15–26). |
| LH epil. 3316' | *liqūl* | יקשיב | `הַסְכֵּת וּשְׁמַע יִשְׂרָאֵל` (דברים כז:ט) | [equivalent] | *qâlu* "be silent / heed" ~ `הסכת` "be silent and listen". Our proposal. |
| LH epil. 3639' | *līruršuma* | יאור אותו | `אָרוּר הָאִישׁ אֲשֶׁר יַעֲשֶׂה פֶסֶל וּמַסֵּכָה` (דברים כז:טו) | [cognate] | *arāru* = ארר; Deut 27's `אָרוּר` series. |
| LH §192, 2471' | *inakkisū* | יקצצו. | `אָרוּר מַקְלֶה אָבִיו וְאִמּוֹ` (דברים כז:טז) | [equivalent] | מן הזיכרון (שמות כא:יז, דברים כה:יב); השאר הצעה שלנו |
| LI epil. 462′ | *ki-gub-ba-bi ib₂-kur₂-ru-a* | את מקום עמידתה ישנה | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ` (דברים כז:יז) | [equivalent] | Moving a stone from its place as a cursed act (boundary stone there, law stone here). |
| MALB §8, o iv 11–19 | *tahūma … usammeh … šaššāte iddan, 1 ubānšu inakkisū, 1 meʾate … imahhuṣūš, 1 urah ūmāte šipar šarre eppaš* | `תחום … עירב … פי שלושה יתן, אצבע אחת שלו יקצצו, מאה במקלות ימחצוהו, יֶרַח ימים את מלאכת המלך יעשה` | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ וְאָמַר כָּל הָעָם אָמֵן` (דברים כז:יז) | [divergence] | The Torah has a curse and a prohibition, no human penalty; MAL B four penalties (threefold land, a finger, 100 blows, a month's corvée). |
| MALB §20, r vii 21 | *[kudur]ra ukaddir* | `[ציון] ציין` | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ` (דברים כז:יז) | [equivalent] | *kudurru* is the name of the Babylonian boundary stones that carry curses against whoever moves them (from memory) – the curse of Deut 27:17 belongs to that world; MAL B itself has penalties, not curses. |
| HL HL2 §169, 169.4 | *nu te-ez-zi {D}UTU-uš {D}10-aš Ú-UL šu-ul-la-tar* | ויאמר: "אֵל השמש, אֵל הַסְּעָרָה – לא מחלוקת". | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ; וְאָמַר כָּל הָעָם אָמֵן` (דברים כז:יז) | [divergence] | הצהרה לפני האל על הגבול: בתורה קללה על המסיג, כאן הצהרת תום לב של הקונה |
| LH epil. 3204'–3205' | idem | idem | `אָרוּר מַטֶּה מִשְׁפַּט גֵּר יָתוֹם וְאַלְמָנָה` (דברים כז:יט) | [equivalent] | Deut adds the stranger; LH has no `גר`. |
| UN prol. 162–165 | (the same) | (as above) | `אָרוּר מַטֶּה מִשְׁפַּט גֵּר יָתוֹם וְאַלְמָנָה; וְאָמַר כָּל הָעָם אָמֵן` (דברים כז:יט) | [equivalent] | The same protection under a curse. |
| LH §158, 1862' | *innassaḫ* | ינסח | `אָרוּר שֹׁכֵב עִם אֵשֶׁת אָבִיו` (דברים כז:כ) | [divergence] | Curse/death (Lev 20:11; Deut 23:1) vs. disinheritance. |
| HL HL2 §199, 199.1 | *ták-ku ŠAḪ-〈aš〉 UR.GI₇-aš kat-ta ku-iš-ki wa-aš-ta-i a-ki-aš* | אם מישהו יחטא עם חזיר (או) כלב – ימות. | `אָרוּר שֹׁכֵב עִם כָּל בְּהֵמָה` (דברים כז:כא) | [equivalent] | מוות על המשכב עם בהמה (חזיר, כלב) |
| MAL §18, o ii 73 | *lū ina puzre lū ina ṣālte* | בין בסתר, בין בְּמָדוֹן | `אָרוּר מַכֵּה רֵעֵהוּ בַּסָּתֶר` (דברים כז:כד) | [equivalent] | `בַּסֵּתֶר` of an offence against a fellow. |

### Deuteronomy 28

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3312' | *šumma awīlum šū* | אם האיש ההוא | `וְהָיָה אִם שָׁמוֹעַ תִּשְׁמַע בְּקוֹל יְהוָה אֱלֹהֶיךָ` (דברים כח:א) | [equivalent] | The conditional frame of blessing (and curse, 3344'–). |
| LH epil. 3344'–3359' | *šumma awīlum šū … iqūlma … Šamaš ḫaṭṭašu lirrik* | אם האיש ההוא … הקשיב … שמש שרביטו יאריך | `וְהָיָה אִם שָׁמוֹעַ תִּשְׁמַע בְּקוֹל יְהוָה אֱלֹהֶיךָ` (דברים כח:א) | [equivalent] | Blessing, then curse (3360') as Deut 28:1 / 28:15, Lev 26:3 / 26:14. From memory (Paul). Here addressed to one future king. |
| EST 49 | *ina eqli ina birti āli* | בשדה ובתוך העיר | `בָּרוּךְ אַתָּה בָּעִיר וּבָרוּךְ אַתָּה בַּשָּׂדֶה` (דברים כח:ג) | [equivalent] | The merism "everywhere"; also 99. |
| EST 277 | *alpu* | שוורים | `שְׁגַר אֲלָפֶיךָ` (דברים כח:ד) | [cognate] | *alpu* = `אֶלֶף` "cattle" (note only). |
| HL HL1 §96, 541 | *takku LÚ-aš ḫalkiyaš ÉSAG-an tāyezzi* | אם איש יגנוב אסם של תבואה, | `יְצַו יְהוָה אִתְּךָ אֶת הַבְּרָכָה בַּאֲסָמֶיךָ` (דברים כח:ח) | [equivalent] | האסם כמאגר התבואה של הבית |
| LH epil. 3173'–3174' | *eliš … šapliš* | למעלה … למטה | `וְהָיִיתָ רַק לְמַעְלָה וְלֹא תִהְיֶה לְמָטָּה` (דברים כח:יג) | [equivalent] | Our proposal. |
| LI epil. 456′ | *e₂-kur-ra gu₂ an-še₃ ḫe₂-ni-in-zi* | באכור את צווארו לשמים ירים | `וְהָיִיתָ רַק לְמַעְלָה וְלֹא תִהְיֶה לְמָטָּה` (דברים כח:יג) | [equivalent] | The blessing as being raised high. |
| EST 634 | same | same | `וְלֹא תָסוּר מִכָּל הַדְּבָרִים אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם יָמִין וּשְׂמֹאול` (דברים כח:יד) | [equivalent] | The verse just before Deuteronomy's curses (28:15–68). |
| LH epil. 3476'–3478' | *awatum maruštum ša Šamaš arḫiš likšussu* | הדבר הנמרץ של שמש מהרה ישיגהו | `וּבָאוּ עָלֶיךָ כָּל הַקְּלָלוֹת הָאֵלֶּה וְהִשִּׂיגוּךָ` (דברים כח:טו) | [equivalent] | The curse "overtakes"; also 3640'–3641'. From memory. |
| LI epil. 466′–467′ | *lu₂-bi lugal ḫe₂-a en ḫe₂-a ensi₂ ḫe₂-a* | האיש ההוא, בין מלך, בין אדון, בין מושל | `וְהָיָה אִם לֹא תִשְׁמַע בְּקוֹל יְהוָה אֱלֹהֶיךָ` (דברים כח:טו) | [divergence] | The curse falls on any future ruler who damages the stone; in Deut 28 on the people that does not obey. Cross-collection: LH 3381′–3384′ (identical). |
| UN epil. g011 | *lu₂-bi lugal ḫe₂-a en ḫe₂-a ensi₂ ḫe₂-a* | האיש ההוא, בין מלך, בין אדון, בין מושל | `וְהָיָה אִם לֹא תִשְׁמַע בְּקוֹל יְהוָה אֱלֹהֶיךָ` (דברים כח:טו) | [divergence] | The curse targets a future ruler who tampers with the monument; Deut's curses target the people that does not obey. Cross-collection: LI 466′–467′, LH 3381′–3384′ (letter for letter). |
| EST 49 | same | same | `אָרוּר אַתָּה בָּעִיר וְאָרוּר אַתָּה בַּשָּׂדֶה` (דברים כח:טז) | [equivalent] |  |
| EST 475 | *arāru* | יאורו | `אָרוּר אַתָּה בָּעִיר` (דברים כח:טז) | [cognate] | Also 27:15–26. |
| LH epil. 3394' | *šīmātišu līrur* | את גורלותיו יאור | `אָרוּר אַתָּה בָּעִיר וְאָרוּר אַתָּה בַּשָּׂדֶה` (דברים כח:טז) | [cognate] | *arāru* = ארר. |
| EST 447 | *aṣūdātikunu lēšu* | קערותיכם … הבצק | `אָרוּר טַנְאֲךָ וּמִשְׁאַרְתֶּךָ` (דברים כח:יז) | [equivalent] | The kneading-bowl. Our proposal. |
| EST 437 | *tālittu ina mātikunu liprus* | לידה מארצכם תכרות | `אָרוּר פְּרִי בִטְנְךָ וּפְרִי אַדְמָתֶךָ שְׁגַר אֲלָפֶיךָ וְעַשְׁתְּרֹת צֹאנֶךָ` (דברים כח:יח) | [equivalent] | *tālittu* includes animal young, like 28:18. From memory. |
| EST 537–539 | *kî ša zēri ša kūdini laššūni* | כאשר זרע לפרד אין | `אָרוּר פְּרִי בִטְנְךָ` (דברים כח:יח) | [equivalent] | Barrenness as a curse; `לפרד` from Tayinat. |
| EST 414 | *šīmat lemutti … lišīmkunu* | גורל רעה … יגזור לכם | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה אֶת הַמְּהוּמָה וְאֶת הַמִּגְעֶרֶת` (דברים כח:כ) | [equivalent] | The first, general curse of the head god, before the specific ones. From memory (Steymans). |
| EST 432 | *liḫalliqa napšatkun* | יאבד את נפשכם | `עַד הִשָּׁמֶדְךָ וְעַד אֲבָדְךָ מַהֵר` (דברים כח:כ) | [equivalent] |  |
| EST 475 | *arratu … līrurūkunu* | מארה … יאורו אתכם | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה` (דברים כח:כ) | [cognate] | From memory. |
| EST 479 | *akalī u mê līzibūkunu* | לחם ומים יעזבו אתכם | `מִפְּנֵי רֹעַ מַעֲלָלֶיךָ אֲשֶׁר עֲזַבְתָּנִי` (דברים כח:כ) | [cognate] (*ezēbu*) / [divergence] | Israel forsakes YHWH; here bread and water forsake the perjurer. |
| LH epil. 3365' | *errētiya* | את מארותי | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה אֶת הַמְּהוּמָה וְאֶת הַמִּגְעֶרֶת` (דברים כח:כ) | [cognate] | *erretu* = מארה; with *tēšû* (3401') LH has the pair מארה + מהומה (the latter kept out of the Hebrew). |
| LI epil. 465′ | *aš₂-bala* | המארה | `יְשַׁלַּח יְהוָה בְּךָ אֶת הַמְּאֵרָה אֶת הַמְּהוּמָה וְאֶת הַמִּגְעֶרֶת` (דברים כח:כ) | [equivalent] | *aš₂* = Akk. *arratu*, the cognate of `מְאֵרָה` (corpus §0). |
| EST 456 | *mūtānu* | מגפה | `יַדְבֵּק יְהוָה בְּךָ אֶת הַדָּבֶר` (דברים כח:כא) | [equivalent] |  |
| EST 480–481 | *… mūtānu … ay ippiṭir* | … מגפה מלפניכם אל ייפטרו | `יַדְבֵּק יְהוָה בְּךָ אֶת הַדָּבֶר עַד כַּלֹּתוֹ אֹתְךָ` (דברים כח:כא) | [equivalent] | "Not depart" = "cleave" (also 28:60 `וְדָבְקוּ בָּךְ`). |
| EST 418A | same | same | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת וּבַדַּלֶּקֶת` (דברים כח:כב) | [equivalent] |  |
| EST 455 | *ina patrīšu lā gāmili* | בחרבו שאינה חומלת | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת וּבַדַּלֶּקֶת וּבַחַרְחֻר וּבַחֶרֶב` (דברים כח:כב) | [equivalent] |  |
| EST 466 (T vi 44) | *mê arqūti limallikunu* | (apparatus) מים ירוקים ימלא אתכם | `וּבַשִּׁדָּפוֹן וּבַיֵּרָקוֹן` (דברים כח:כב) | [cognate] (*arqu* = `ירק`) | **Tayinat only**, in the apparatus (Nimrud differs). Our proposal. |
| EST 528 | *kaqqarkunu kî parzilli lēpušū* | את קרקעכם כברזל יעשו | `וְהָאָרֶץ אֲשֶׁר תַּחְתֶּיךָ בַּרְזֶל` (דברים כח:כג) | [cognate] | *parzillu* = `בַּרְזֶל`; the same metal for the earth as Deut. **EST: earth (528) before sky (530); Deut: sky before earth.** Known in the literature (from memory). |
| EST 530 | *ultu libbi šamê ša siparri zunnu lā izannunūni* | מתוך שמים של אָרָד גשם אינו יורד | `וְהָיוּ שָׁמֶיךָ אֲשֶׁר עַל רֹאשְׁךָ נְחֹשֶׁת` (דברים כח:כג) | [equivalent] | Same metal for the sky as Deut (bronze: biblical `נְחֹשֶׁת`, our `אָרָד` since 2026-10-30 – the same thing in other words); see the footnote at 530 for the order facts. From memory (Weinfeld; Steymans). |
| LH epil. 3513' | idem | idem | `וְהָיוּ שָׁמֶיךָ אֲשֶׁר עַל רֹאשְׁךָ נְחֹשֶׁת; וְהָאָרֶץ אֲשֶׁר תַּחְתֶּיךָ בַּרְזֶל` (דברים כח:כג) | [equivalent] | `מטר` kept out (*zunnu* = גשם). |
| UN epil. g018–g019 | *diĝir iri-na-ke₄ {d}en-ki {d}iškur {d}ašnan* | אלי עירו – אנקי, אישכור, דגן | `וְהָיוּ שָׁמֶיךָ אֲשֶׁר עַל רֹאשְׁךָ נְחֹשֶׁת` (דברים כח:כג) | [equivalent] | The gods of water, rain and grain against the city: drought and famine (the verb is broken). "Gods" restored. |
| EST 418A–C | *… eli naphar bītātikunu lišaznin* | … על כל בתיכם יגשים | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) | [divergence] | The sky god "rains" diseases; Deut's rain turns to dust. `מטר` kept out. |
| EST 440 | same | same | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) | [equivalent] | Tayinat only; the bronze sky and iron earth are §63–§64 (part 6). |
| EST 530–533 | *zunnu … kūm zunnu peʾenāti … liznun* | גשם … תחת הגשם / גחלים … יגשים | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר מִן הַשָּׁמַיִם יֵרֵד עָלֶיךָ` (דברים כח:כד) | [equivalent] / [divergence] | The rain replaced by something else falling from the sky: coals (EST) / dust (Deut). `מטר` kept out. From memory. |
| LH epil. 3513' | idem | idem | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) | [equivalent] |  |
| EST 454 | *ina šapal nakrikunu lišēšibkunu* | תחת אויבכם תושיב אתכם | `יִתֶּנְךָ יְהוָה נִגָּף לִפְנֵי אֹיְבֶיךָ` (דברים כח:כה) | [equivalent] | From memory. |
| EST 535 | same | same | `יִתֶּנְךָ יְהוָה נִגָּף לִפְנֵי אֹיְבֶיךָ` (דברים כח:כה) | [equivalent] |  |
| LH epil. 3535'–3536' | idem | idem | `יִתֶּנְךָ יְהוָה נִגָּף לִפְנֵי אֹיְבֶיךָ` (דברים כח:כה) | [equivalent] |  |
| EST 419–430 | **the order** Sîn (419–421) → Šamaš (422–424) → Ninurta (425–427) → Dilbat/Venus (428–430) | צרעת → בלי משפט, מראה עיניים, חשכה → בשר לנשר ולעיט → רעיות, בית, רכוש | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) → `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) → `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן` (דברים כח:כח) → `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר` (דברים כח:ל) | [divergence] (order) | Deut 28:26–33 has the four curses in EST's order except Ninurta's, which comes one place earlier (28:26 before 28:27). In EST each curse belongs to its god (moon–skin disease, sun–justice and light, warrior–corpses, Venus–love); in Deut, where YHWH alone curses, the sequence has no motivation – the classic argument for dependence (Weinfeld 1972; Steymans 1995; from memory). **423–430 rest on Nimrud alone** (Tayinat broken). |
| EST 426–427 | *šīrkunu arû zību lišākil* | את בשרכם לנשר ולעיט יאכיל | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם וּלְבֶהֱמַת הָאָרֶץ` (דברים כח:כו) | [cognate] (*akālu*) / [equivalent] | Ninurta's curse; in Deut the verse **before** the skin disease. Rendered with the verb `יאכיל` (Akk. Š verb), not `למאכל`. From memory. |
| EST 483–484 | same | same | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם וּלְבֶהֱמַת הָאָרֶץ` (דברים כח:כו) | [equivalent] | No burial. From memory. |
| EST 490 | *mākālu* | מאכל | `לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) | [cognate] (root *akālu*) | A noun of *akālu*, so `מאכל` here (contrast 427 `יאכיל`). |
| EST 519–520 | *šīrkunu arû zību lišākil* | את בשרכם לנשר ולעיט יאכיל | `וְהָיְתָה נִבְלָתְךָ לְמַאֲכָל לְכָל עוֹף הַשָּׁמַיִם` (דברים כח:כו) | [equivalent] | The same curse as Ninurta's (426–427, part 5), here by Palil. |
| LH epil. 3181' | *mugallitam* | מחריד | `וְאֵין מַחֲרִיד` (דברים כח:כו) | [equivalent] | The same phrase in a curse. |
| EST 419 | *ina saḫaršubbû liḫallipkunu* | בצרעת יעטה אתכם | `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) | [equivalent] / [divergence] | Skin disease; Deut lists other terms (`וּבַגָּרָב וּבֶחָרֶס`). `שחין` kept out. From memory. |
| EST 462 | *simmu lazzu* | פצע מתמיד | `וּבַגָּרָב וּבֶחָרֶס אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:כז) | [equivalent] | Also 28:35. P&W "unhealing". |
| EST 474 | *limḫaṣūkunu* | יכו אתכם | `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם` (דברים כח:כז) | [equivalent] | *maḫāṣu* = the verb of Deut's diseases (28:22, 27, 28, 35). |
| EST 645 | same | same | `אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:כז) | [equivalent] | The wound without remedy. |
| LH epil. 3607'–3608' | *simmam marṣam ša lā ipaššeḫu* | פצע נמרץ אשר לא יירגע | `יַכְּכָה יְהוָה בִּשְׁחִין מִצְרַיִם וּבַעְּפֹלִים (וּבַטְּחֹרִים) וּבַגָּרָב וּבֶחָרֶס אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:כז) | [equivalent] | Skin disease without cure; `שחין` kept out (*simmu* is not its cognate). From memory (the incurable-disease curse). |
| EST 423 | *niṭil īnīkunu liššī* | את מראה עיניכם ישא | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן וּבְתִמְהוֹן לֵבָב` (דברים כח:כח) | [equivalent] | Blindness. Nimrud only. Normalization *īnīšunu* vs transliteration *-ku-nu*. |
| EST 628 | same | same | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן` (דברים כח:כח) | [equivalent] | Same caveat. |
| LH epil. 3447'–3451' | idem | idem | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן; וּבְתִמְהוֹן לֵבָב` (דברים כח:כח) | [equivalent] | Our proposal. |
| UN epil. g016 | *nam-ĝuruš iri-na igi-nu-du₈ ḫe₂-me-eš* | בחורי עירו *עיוורים* יהיו | `יַכְּכָה יְהוָה בְּשִׁגָּעוֹן וּבְעִוָּרוֹן; וּבְתִמְהוֹן לֵבָב` (דברים כח:כח) | [equivalent] | Blindness in the curses; *igi-nu-du₈* is also a class of (blinded?) bonded workers. |
| EST 422–423 | *dīn ketti mīšari ay idīnkunu* | דין אמת ומישרים אל ידין אתכם | `וְהָיִיתָ אַךְ עָשׁוּק וְגָזוּל כָּל הַיָּמִים וְאֵין מוֹשִׁיעַ` (דברים כח:כט) | [equivalent] | Šamaš the judge denies justice; Deut: oppressed with no saviour, right after the blindness. *dīnu*, *mīšaru* [cognate]. From memory. |
| EST 424 | *ina eklēti ittallakā* | בחשכה התהלכו | `וְהָיִיתָ מְמַשֵּׁשׁ בַּצָּהֳרַיִם כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | [equivalent] | The sun god's curse: darkness "at noon". `אפלה` kept out. From memory. |
| EST 485 | same | same | `כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | [equivalent] |  |
| LH epil. 3406'–3412' | *palê tānēḫim … eklet lā nawārim* | שלטון אנחה … חשכת ללא הארה | `וְהָיִיתָ מְמַשֵּׁשׁ בַּצָּהֳרַיִם כַּאֲשֶׁר יְמַשֵּׁשׁ הָעִוֵּר בָּאֲפֵלָה` (דברים כח:כט) | [equivalent] | Darkness curse; = EST 485–486. |
| LH epil. 3468' | idem | idem | `וְלֹא תַצְלִיחַ אֶת דְּרָכֶיךָ` (דברים כח:כט) | [equivalent] |  |
| EST 428–429 | *ḫīrātekunu ina sūni nakrikunu lišanīl* | את רעיותיכם בחיק אויבכם תשכיב | `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר` (דברים כח:ל) | [equivalent] | The qere `יִשְׁכָּבֶנָּה` = *nâlu* Š "make lie". Nimrud only. From memory. |
| EST 429–430 | *mārīkunu ay ibellū bītkun* | בניכם אל ימשלו בביתכם | `בַּיִת תִּבְנֶה וְלֹא תֵשֵׁב בּוֹ` (דברים כח:ל) | [equivalent] | From memory. |
| EST 558 | same | same | `אִשָּׁה תְאָרֵשׂ וְאִישׁ אַחֵר יִשְׁגָּלֶנָּה` (דברים כח:ל) | [divergence] | The marriage destroyed by an enemy (Deut) vs by mutual hatred (EST). |
| EST 581 | same | same | `בַּיִת תִּבְנֶה וְלֹא תֵשֵׁב בּוֹ` (דברים כח:ל) | [equivalent] |  |
| EST 277 | *imārī alpāni immerē* | חמורים, שוורים, צאן | `שׁוֹרְךָ טָבוּחַ לְעֵינֶיךָ … חֲמֹרְךָ גָּזוּל מִלְּפָנֶיךָ … צֹאנְךָ נְתֻנוֹת לְאֹיְבֶיךָ` (דברים כח:לא) | [equivalent] | The same three animals as property taken away (curse) / not to be taken (oath). Our proposal. |
| EST 428 | *ina niṭil īnikunu* | למראה עיניכם | `שׁוֹרְךָ טָבוּחַ לְעֵינֶיךָ` (דברים כח:לא) | [equivalent] | Also 482; 28:32 `וְעֵינֶיךָ רֹאוֹת`. |
| EST 295 | *ana šallali … taddanā* | לשלל … תתנו | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר` (דברים כח:לב) | [equivalent] |  |
| EST 429–430 | same | same | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר וְעֵינֶיךָ רֹאוֹת` (דברים כח:לב) | [equivalent] |  |
| EST 536 | *mārīkunu mārātikunu ina qātikunu lā taṣabbatā* | את בניכם, את בנותיכם בידיכם לא תתפשו | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר … וְאֵין לְאֵל יָדֶךָ` (דברים כח:לב) | [equivalent] | Parents powerless to hold their children. Our proposal. |
| EST 581 | *issātikunu mārīkunu mārātikunu* | נשותיכם, בניכם, בנותיכם | `בָּנֶיךָ וּבְנֹתֶיךָ נְתֻנִים לְעַם אַחֵר` (דברים כח:לב) | [equivalent] | Separation from the family. |
| EST 430 | *nakru aḫû lizaʾʾiza mimmûkun* | אויב זר יחלק את כל אשר לכם | `פְּרִי אַדְמָתְךָ וְכָל יְגִיעֲךָ יֹאכַל עַם אֲשֶׁר לֹא יָדָעְתָּ` (דברים כח:לג) | [equivalent] | The foreign enemy. From memory. |
| EST 428 | same | same | `וְהָיִיתָ מְשֻׁגָּע מִמַּרְאֵה עֵינֶיךָ אֲשֶׁר תִּרְאֶה` (דברים כח:לד) | [equivalent] | Same noun phrase; the identity of `מראה עינים` is the corpus rendering's (recorded as a translation-level match). |
| EST 419 | same | same | `יַכְּכָה יְהוָה בִּשְׁחִין רָע עַל הַבִּרְכַּיִם וְעַל הַשֹּׁקַיִם אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא` (דברים כח:לה) | [equivalent] |  |
| LH epil. 3607'–3614' | idem | idem | `יַכְּכָה יְהוָה בִּשְׁחִין רָע עַל הַבִּרְכַּיִם וְעַל הַשֹּׁקַיִם אֲשֶׁר לֹא תוּכַל לְהֵרָפֵא מִכַּף רַגְלְךָ וְעַד קָדְקֳדֶךָ` (דברים כח:לה) | [equivalent] | "Evil" + "cannot be healed" + on the limbs. |
| LH epil. 3572'–3573' | *ana māt nukurtišu kamîš līrūšu* | ולארץ איבתו כפות תנהג אותו | `יוֹלֵךְ יְהוָה אֹתְךָ וְאֶת מַלְכְּךָ אֲשֶׁר תָּקִים עָלֶיךָ אֶל גּוֹי אֲשֶׁר לֹא יָדַעְתָּ` (דברים כח:לו) | [equivalent] | The king himself led into exile. Our proposal. |
| LI epil. 495′ | *lugal-bi nam-me* | מלך אל יהיה לה | `יוֹלֵךְ יְהוָה אֹתְךָ וְאֶת מַלְכְּךָ אֲשֶׁר תָּקִים עָלֶיךָ אֶל גּוֹי` (דברים כח:לו) | [divergence] | Deut 28: the king goes into exile with the people; LI: the land has no king. |
| LH epil. 3573' | *līrūšu* | תנהג אותו | `וְהָיִיתָ לְשַׁמָּה לְמָשָׁל וְלִשְׁנִינָה בְּכֹל הָעַמִּים אֲשֶׁר יְנַהֶגְךָ יְהוָה שָׁמָּה` (דברים כח:לז) | [equivalent] | *warû* = נהג. Our proposal. |
| EST 442 | *erbû* | ארבה | `זֶרַע רַב תּוֹצִיא הַשָּׂדֶה וּמְעַט תֶּאֱסֹף כִּי יַחְסְלֶנּוּ הָאַרְבֶּה` (דברים כח:לח) | [cognate] | *muṣaḫḫir māti* "diminisher of the land" ↔ `וּמְעַט` [equivalent] (`המקטין`, not `המעיט`). From memory. |
| EST 599–600 | *erbû … ākilū ālānikunu … lušākilu* | לארבה … לאוכלים את עריכם … יאכילו | `זֶרַע רַב תּוֹצִיא הַשָּׂדֶה וּמְעַט תֶּאֱסֹף כִּי יַחְסְלֶנּוּ הָאַרְבֶּה` (דברים כח:לח) | [cognate] | *erbû* = `אַרְבֶּה`. The pests of Deut 28:38–42 (locust, worm – see 570 –, cricket). Known in the literature (from memory). |
| EST 447–448 | (T) *qūqānu … lēkul* | {תיינת: הרימה (?)} … יאכל | `כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [equivalent] | **Tayinat only**; *qūqānu* uncertain. Our proposal. |
| EST T vi 47 | *ultu libbikunu lišaḫḫiḫa tûltu* | מתוככם תשיר תולעת | `כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [cognate] (*tûltu* = `תּוֹלַעַת`) | Tayinat only. Our proposal. |
| EST 570–572 | *tûltu tākulūni … tuʾissu lū tākul* | תולעת … אוכלת … התולעת תאכל | `כְּרָמִים תִּטַּע וְעָבָדְתָּ וְיַיִן לֹא תִשְׁתֶּה וְלֹא תֶאֱגֹר כִּי תֹאכְלֶנּוּ הַתֹּלָעַת` (דברים כח:לט) | [cognate] | Same subject and verb (*tûltu* / `תּוֹלַעַת`, *akālu* / `אָכַל`); in Deut the vineyard, in EST the provisions and then the living flesh. From memory (Steymans). |
| EST 263 | *pašāšu* | תסוכו | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | Anointing the body (not royal anointing). |
| EST 375 | *tapaššašāni* | תסוכו | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | The substance as the object of "anoint" in both. |
| EST 491 | *napṭu lū piššatkunu* | נפט יהי סיכתכם | `וְשֶׁמֶן לֹא תָסוּךְ` (דברים כח:מ) | [equivalent] | Our proposal. |
| EST 523 | *mê šamnī ana ikkibikunu liškunū* | מים ושמן לאיסורכם ישימו | `וְשֶׁמֶן לֹא תָסוּךְ כִּי יִשַּׁל זֵיתֶךָ` (דברים כח:מ) | [divergence] | Oil lacking (Deut) vs oil and water forbidden (EST). `לאיסורכם` from Tayinat. |
| EST 295 | same | same | `כִּי יֵלְכוּ בַּשֶּׁבִי` (דברים כח:מא) | [equivalent] |  |
| UN epil. g016 | *nam-ĝuruš … igi-nu-du₈* | בחורי עירו *עיוורים* | `בָּנִים וּבָנוֹת תּוֹלִיד; וְלֹא יִהְיוּ לָךְ כִּי יֵלְכוּ בַּשֶּׁבִי` (דברים כח:מא) | [equivalent] | The young of the city lost to servitude. |
| EST 443 | *ebūrkunu lēkul* | את קצירכם יאכל | `כָּל עֵצְךָ וּפְרִי אַדְמָתֶךָ יְיָרֵשׁ הַצְּלָצַל` (דברים כח:מב) | [equivalent] |  |
| EST 599 | *zēr barmu kalmutu mūnu* | זרע מנומר (?), כינים, זחלים | `כָּל עֵצְךָ וּפְרִי אַדְמָתֶךָ יְיָרֵשׁ הַצְּלָצַל` (דברים כח:מב) | [equivalent] | A list of pests. |
| EST 454 | same | same | `הַגֵּר אֲשֶׁר בְּקִרְבְּךָ יַעֲלֶה עָלֶיךָ מַעְלָה מָּעְלָה וְאַתָּה תֵרֵד מַטָּה מָּטָּה` (דברים כח:מג) | [equivalent] |  |
| EST 573–574 | *ina šapal nakrikunu lušēšibūkunu* | תחת אויבכם יושיבו אתכם | `וְאַתָּה תֵרֵד מַטָּה מָּטָּה` (דברים כח:מג) | [equivalent] | Subjection. As 454 (part 5). |
| EST 477–478 | *ṣillu u ṣētu liktaššidūkunu* | צל וחום ישיגו אתכם תמיד | `וּבָאוּ עָלֶיךָ כָּל הַקְּלָלוֹת הָאֵלֶּה וּרְדָפוּךָ וְהִשִּׂיגוּךָ` (דברים כח:מה) | [equivalent] | *kašādu* = `השיג`; also 28:15. Our proposal. |
| EST 578 | *lukaššidū* | ירדפו | `וּרְדָפוּךָ וְהִשִּׂיגוּךָ עַד הִשָּׁמְדָךְ` (דברים כח:מה) | [equivalent] | *kašādu* G `השיג`, D `רדף`: both verbs of 28:45. |
| LH epil. 3635', 3641' | *errētim anniātim … likšudāšu* | במארות האלה … ישיגוהו | `וּבָאוּ עָלֶיךָ כָּל הַקְּלָלוֹת הָאֵלֶּה וּרְדָפוּךָ וְהִשִּׂיגוּךָ עַד הִשָּׁמְדָךְ` (דברים כח:מה) | [equivalent] | "These curses … overtake": the stele's last word is Deut 28:15/45's verb (in meaning). From memory. |
| LI epil. 500′ | *u₄ da-ri₂-iš* | לימי נצח | `וְהָיוּ בְךָ לְאוֹת וּלְמוֹפֵת וּבְזַרְעֲךָ עַד עוֹלָם` (דברים כח:מו) | [equivalent] | The curse "forever"; `עוֹלָם` kept out (corpus). |
| EST 449–450 | *ina bubūti ḫušaḫḫu* | ברעב, בכפן | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [equivalent] | Also 479–480; `חֹסֶר` kept out (*ḫušaḫḫu* = `כפן`). |
| EST 477 | *eṭemmakunu mê liṣammû* | את אטכם למים יצמיאו | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [cognate] (*ṣamû* = `צמא`) | Tayinat *lizammû* "deprive". |
| EST 492 | *elapûʾa … lū taktīmkunu* | ירוקת הנהר תהי שמיכתכם | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [equivalent] | Nakedness. Our proposal. |
| EST 655 | *ina ṣūm mê mūtā* | [ב]צמא מים מותו! | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [cognate] | *ṣūmu* = `צמא`. From memory. |
| LH epil. 3518'–3519' | *ina ḫušaḫḫim u bubūtim* | בכפן וברעב | `בְּרָעָב וּבְצָמָא וּבְעֵירֹם וּבְחֹסֶר כֹּל` (דברים כח:מח) | [equivalent] | = EST 480. |
| LI prol. 65–66 | *gu₂-bi-a šudul?* | על צווארם עול | `וְנָתַן עֹל בַּרְזֶל עַל צַוָּארֶךָ עַד הִשְׁמִידוֹ אֹתָךְ` (דברים כח:מח) | [equivalent] | The yoke on the neck as the image of servitude (a curse in Deut 28). "Neck" restored. |
| EST 459–460 | same | same | `גּוֹי עַז פָּנִים אֲשֶׁר לֹא יִשָּׂא פָנִים לְזָקֵן וְנַעַר לֹא יָחֹן` (דברים כח:נ) | [equivalent] | The merciless one. From memory. |
| EST 465 | *ezzu* | עז | `גּוֹי עַז פָּנִים` (דברים כח:נ) | [cognate] | *kakkīšunu ezzūti*; the formula recurs in part 6 (Aššur). |
| LH epil. 3567'–3568' | *ummānšuma rēmam ay ušarši* | ולחילו רחמים אל תמציא | `גּוֹי עַז פָּנִים אֲשֶׁר לֹא יִשָּׂא פָנִים לְזָקֵן וְנַעַר לֹא יָחֹן` (דברים כח:נ) | [equivalent] | No mercy. |
| LH epil. 3456'–3458' | *Ašnan napišti nišī ay ušabši* | דגן, חיי האנשים, אל יביא לכלל הוויה | `אֲשֶׁר לֹא יַשְׁאִיר לְךָ דָּגָן תִּירוֹשׁ וְיִצְהָר` (דברים כח:נא) | [equivalent] | *ašnan* = דָּגָן by the creation-corpus rule; not cognate. |
| LI epil. 478′–480′ | *{d}ašnan {d}šakkan₂ en ḫe₂-ĝal₂-la-ke₄-ne an-ki-a ba-an-da-an-kar-re-eš* | דגן ושכן, אדוני השפע, בשמים ובארץ ממנו ייקחו | `אֲשֶׁר לֹא יַשְׁאִיר לְךָ דָּגָן תִּירוֹשׁ וְיִצְהָר שְׁגַר אֲלָפֶיךָ וְעַשְׁתְּרֹת צֹאנֶךָ` (דברים כח:נא) | [equivalent] | **Grain and cattle taken from the cursed** – in LI by their gods (Ašnan, grain; Šakkan, the herds), in Deut by the enemy. The verb restored (480′). |
| EST 527 | same | same | `וְהֵצַר לְךָ בְּכָל שְׁעָרֶיךָ` (דברים כח:נב) | [equivalent] | "Make narrow" with another root. |
| EST 449 | *ina būrikunu šīrī mārīkunu aklā* | ברעבונכם את בשר בניכם אכלו | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [cognate] (*akālu*) / [equivalent] (*šīru*) | From memory. |
| EST 449 | *ina būri … ina bubūti* | ברעבונכם … ברעב | `בְּמָצוֹר וּבְמָצוֹק` (דברים כח:נג) | [divergence] | Famine of drought (Adad) vs famine of siege. |
| EST 527 | *ammar libittu kaqquru lusiqqūnikkunu* | כמידת לבנה את הקרקע יציקו לכם | `בְּמָצוֹר וּבְמָצוֹק אֲשֶׁר יָצִיק לְךָ אֹיְבֶךָ` (דברים כח:נג) | [cognate?] | *siāqu* "be narrow" ~ `צוק` (Arabic *ḍāqa*; Akkadian *s* for *ṣ* by Geers' law): the same root in both curse lists – the narrowed ground (EST), the siege that "straitens" (Deut; also 28:55, 57). Etymology not certain. Our proposal. |
| EST 547–550 | *agurrutu … šīra ša mārīša ina pîša šakinūni kî hannīe šīra ša ahhēkunu mārīkunu mārātikunu … lušākilūkunu* | הרחל … ובשר בנה בפיה מושׂם – ככה את בשר אחיכם, בניכם, בנותיכם ברעבונכם יאכילו אתכם | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [equivalent] | The rite enacts Adad's curse (449, part 5). **Tayinat lacks "your brothers"**: sons and daughters only, as Deut 28:53. Known in the literature (from memory). |
| EST 568–569 | same | same | `וְאָכַלְתָּ פְרִי בִטְנְךָ בְּשַׂר בָּנֶיךָ וּבְנֹתֶיךָ` (דברים כח:נג) | [equivalent] | The second cannibalism simile (with §69). From memory. |
| EST 549 | *šīra ša ahhēkunu* | את בשר אחיכם | `תֵּרַע עֵינוֹ בְאָחִיו` (דברים כח:נד) | [equivalent] | The brother in the famine scene; Nimrud only. |
| EST 647–648 | *attunu issātikunu mārīkunu mārātikunu ina muhhi ahēʾiš lū marrākunu* | אתם, נשותיכם, בניכם, בנותיכם זה על זה מרים תהיו | `תֵּרַע עֵינוֹ בְאָחִיו וּבְאֵשֶׁת חֵיקוֹ וּבְיֶתֶר בָּנָיו אֲשֶׁר יוֹתִיר` (דברים כח:נד) | [equivalent] | Family members turned against each other in the curse. Our proposal. |
| EST 429 | *sūnu* | חיק | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ וּבִבְנָהּ וּבְבִתָּהּ` (דברים כח:נו) | [equivalent] | "Lap" of marriage. Our proposal. |
| EST 448 | *ummu eli mārtīša bābša lēdil* | אם בפני בתה את דלתה תנעל | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ וּבִבְנָהּ וּבְבִתָּהּ` (דברים כח:נו) | [equivalent] | The mother against her daughter for food. *bābša lēdil* restored in Nimrud, preserved in Tayinat. From memory (Weinfeld). |
| EST 558–559 | *attunu issātikunu … lā terrabā … lā tattâlā* | אתם ונשותיכם … לא תבואו … לא תשכבו | `תֵּרַע עֵינָהּ בְּאִישׁ חֵיקָהּ` (דברים כח:נו) | [equivalent] | Enmity between husband and wife. |
| EST 462 | *lazzu* | מתמיד | `וָחֳלָיִם רָעִים וְנֶאֱמָנִים` (דברים כח:נט) | [equivalent] | `נֶאֱמָנִים` "lasting" = *lazzu*; root `אמנ` reserved, so `מתמיד`. Our proposal. |
| LH epil. 3605'–3606' | *murṣam kabtam asakkam lemnam* | מחלה כבדה, אסכו רע | `מַכּוֹת גְּדֹלֹת וְנֶאֱמָנוֹת וָחֳלָיִם רָעִים וְנֶאֱמָנִים` (דברים כח:נט) | [equivalent] | "Evil sicknesses". Our proposal. |
| LH epil. 3494'–3495' | *ša ina zumrišu lā iḫalliqu* | אשר מגופו לא יאבד | `וְהֵשִׁיב בְּךָ אֵת כָּל מַדְוֵה מִצְרַיִם אֲשֶׁר יָגֹרְתָּ מִפְּנֵיהֶם וְדָבְקוּ בָּךְ` (דברים כח:ס) | [equivalent] | The sickness that clings. |
| EST 476 | *lissaḫūkunu* | יסחו אתכם | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה אֲשֶׁר אַתָּה בָא שָׁמָּה לְרִשְׁתָּהּ` (דברים כח:סג) | [cognate] | From memory. |
| EST 544 | same | same | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [equivalent] |  |
| EST 530–611 | same | same | `וְהָיָה כַּאֲשֶׁר שָׂשׂ יְהוָה עֲלֵיכֶם … כֵּן יָשִׂישׂ יְהוָה עֲלֵיכֶם` (דברים כח:סג) | [equivalent] | The "as … so" form in Deut 28, without a rite (corpus renderings §3). |
| LH epil. 3173'–3174' | *nakrī eliš u šapliš assuḫ* | את האויבים למעלה ולמטה נסחתי | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [cognate] | *nasāḫu* = `נסח`. |
| LH epil. 3473'–3474' | *nasāḫ išdī šarrūtišu* | נסיחת יסודות מלכותו | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [cognate] | *nasāḫu* = נסח. |
| LH §168, 2011' | *nasāḫim* | לנסוח | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [cognate] | *nasāḫu* = `נָסַח` |
| LE §59, 189 | *innassaḫ* | יִנָּסַח | `וְנִסַּחְתֶּם מֵעַל הָאֲדָמָה` (דברים כח:סג) | [cognate] | *nasāḫu* = `נסח`. |
| LH epil. 3416' | *naspuḫ nišīšu* | הפצת אנשיו | `וֶהֱפִיצְךָ יְהוָה בְּכָל הָעַמִּים` (דברים כח:סד) | [equivalent] | Dispersion. |
| EST 478–479 | *ina puzri šaḫāti lā tannimmedā* | בסתר הפינה לא תישענו | `וּבַגּוֹיִם הָהֵם לֹא תַרְגִּיעַ וְלֹא יִהְיֶה מָנוֹחַ לְכַף רַגְלֶךָ` (דברים כח:סה) | [equivalent] | No rest. `נוח` kept for *nâḫu* (Decision 4). From memory. |
| EST 639 | *lā tanūhā lā taṣallalā* | לא תנוחו, לא תישנו | `וּבַגּוֹיִם הָהֵם לֹא תַרְגִּיעַ וְלֹא יִהְיֶה מָנוֹחַ לְכַף רַגְלֶךָ` (דברים כח:סה) | [cognate] | *nâhu* = `נוח`. From memory (Weinfeld). |
| LH epil. 3412' | *mūt niṭil īnim* | מות מראה העין | `וְכִלְיוֹן עֵינַיִם וְדַאֲבוֹן נָפֶשׁ` (דברים כח:סה) | [equivalent] | If read "death of sight". |
| LH epil. 3608' | *ša lā ipaššeḫu* | אשר לא יירגע | `וּבַגּוֹיִם הָהֵם לֹא תַרְגִּיעַ` (דברים כח:סה) | [equivalent] | *pašāḫu* = נרגע (creation corpus); another root (רגע). |
| EST 487 | *diliptu* | נדודי שינה | `וּפָחַדְתָּ לַיְלָה וְיוֹמָם וְלֹא תַאֲמִין בְּחַיֶּיךָ` (דברים כח:סו) | [equivalent] | Also 28:65 `וְדַאֲבוֹן נָפֶשׁ`. |
| LH epil. 3504'–3506' | *balāṭam ša itti mūtim šitannu* | חיים אשר עם המות מתחרים | `וְהָיוּ חַיֶּיךָ תְּלֻאִים לְךָ מִנֶּגֶד; וּפָחַדְתָּ לַיְלָה וְיוֹמָם וְלֹא תַאֲמִין בְּחַיֶּיךָ` (דברים כח:סו) | [equivalent] | Life no better than death. Our proposal. |

### Deuteronomy 29

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 656–657 | *kî ša mašennu šalqatūni … mašennīkunu* | כאשר הנעל בקועה … נעליכם | `וְנַעַלְךָ לֹא בָלְתָה מֵעַל רַגְלֶךָ` (דברים כט:ד) | [divergence] | The reverse, in the oath chapter: in the desert the sandal did not wear out. Our proposal. |
| EST **291–292** | same | same | `וּשְׁמַרְתֶּם אֶת דִּבְרֵי הַבְּרִית הַזֹּאת וַעֲשִׂיתֶם אֹתָם` (דברים כט:ח) | [equivalent] | "This treaty – guard!" ↔ "keep the words of this covenant". Our proposal for the exact match. |
| EST 5, T i 4–12 | the swearers, all ranks | אנשי ידו כולם… | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [equivalent] | The ranked list of officials is in Tayinat only (T i 4–11). |
| EST 382 | *ultu ūme annīe* | מן היום הזה | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [equivalent] | The "today" of the oath ceremony (29:9–14). |
| EST 494–512 | §57, the swearers' vow in the 1st person plural | אם אנחנו … נעשה … נשמע, נסתיר … לא נאמר | `אַתֶּם נִצָּבִים הַיּוֹם כֻּלְּכֶם לִפְנֵי יְהוָה אֱלֹהֵיכֶם` (דברים כט:ט) | [divergence] | Deut 29 has Moses address the assembled people; EST lets the swearers speak. From memory (standard comparison of the ceremony). |
| EST 72 | same | same | `לְעָבְרְךָ בִּבְרִית יְהוָה אֱלֹהֶיךָ וּבְאָלָתוֹ` (דברים כט:יא) | [equivalent] |  |
| EST 390–392 | same | same | `לְעָבְרְךָ בִּבְרִית יְהוָה אֱלֹהֶיךָ וּבְאָלָתוֹ` (דברים כט:יא) | [equivalent] | "Pass into" instead of "enter". |
| EST 393 | *Aššur ilkunu* | אשור – אלכם | `לְמַעַן הָקִים אֹתְךָ הַיּוֹם לוֹ לְעָם וְהוּא יִהְיֶה לְּךָ לֵאלֹהִים` (דברים כט:יב) | [equivalent] | The covenant formula in the same "today / the unborn" ceremony. Our proposal (for the link to 29:12). |
| EST 1 | *adê* | האמנה | `אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | `בְּרִית` kept out of the translation (Decision 1). |
| EST 10 | *ša urki adê ana ūmē ṣâti ibbaššûni* | אשר יהיו אחרי האמנה לימי עד | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת` (דברים כט:יג) | [equivalent] | The oath binds future generations (known in the literature). |
| EST 283–290 | the treaty passed on to the descendants | האמנה הזאת … לבניכם … לזרע זרעכם, אשר אחרי האמנה לימי עד יהיו | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | Known in the literature (from memory). |
| EST 380–384 | *tamītu annītu … attunu marʾēkunu ša ana ūmē ṣâti ibbaššûni taʾākunu* | השבועה הזאת … אתם ובניכם, אשר לימי עד יהיו – מושבעים | `וְלֹא אִתְּכֶם לְבַדְּכֶם אָנֹכִי כֹּרֵת אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | The oath binds the unborn. From memory (standard for 1–10 and 383–396). |
| EST 612A–612B | *šumma attunu ina libbi adê annūti … tahaṭṭāni* | אם אתם באמנה הזאת … תחטאו | `אֶת הַבְּרִית הַזֹּאת וְאֶת הָאָלָה הַזֹּאת` (דברים כט:יג) | [equivalent] | Renderings §1; the protasis restored in Nimrud, absent from Tayinat. |
| EST 5 | *mala bāšû* | כל אשר ישנם | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ` (דברים כט:יד) | [equivalent] | *bašû* "exist" = `יֵשׁ`; with 10 (*ibbaššûni*) ↔ `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה`. Our proposal. |
| EST 10 | same | same | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] |  |
| EST 289–290 | *ša urki adê ana ūmē ṣâti ibbaššûni* | אשר אחרי האמנה לימי עד / יהיו | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | = 10. |
| EST 340 | *mala bāšû* | כל אשר ישנם | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ` (דברים כט:יד) | [equivalent] | See 5. |
| EST 380–384 | same | same | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] |  |
| EST 385–386 | *kî ina kaqqar tamīti annītu tazzazāni* | כאשר על קרקע השבועה הזאת תעמדו | `כִּי אֶת אֲשֶׁר יֶשְׁנוֹ פֹּה עִמָּנוּ עֹמֵד הַיּוֹם לִפְנֵי יְהוָה אֱלֹהֵינוּ` (דברים כט:יד) | [equivalent] | Standing at the oath ceremony; *izuzzu* = `עמד`. |
| EST 512 | *zarʾīni zarʾ-zarʾīni* | מזרענו, מזרע זרענו | `וְאֵת אֲשֶׁר אֵינֶנּוּ פֹּה עִמָּנוּ הַיּוֹם` (דברים כט:יד) | [equivalent] | The vow binds the descendants (cf. 10, part 1). From memory. |
| EST 262 | same | same | `פֶּן יֵשׁ בָּכֶם שֹׁרֶשׁ פֹּרֶה רֹאשׁ וְלַעֲנָה` (דברים כט:יז) | [divergence] | The poisonous plant of the covenant oath, there a metaphor for the apostate. Our proposal. |
| EST 646–648 | *kî ša martu marratūni … ina muhhi ahēʾiš lū marrākunu* | כאשר הַמָּרָה מָרָה … זה על זה מרים תהיו | `פֶּן יֵשׁ בָּכֶם שֹׁרֶשׁ פֹּרֶה רֹאשׁ וְלַעֲנָה` (דברים כט:יז) | [equivalent] | Gall and wormwood for the man who breaks the oath, in the oath chapter, two verses before `וְרָבְצָה בּוֹ כָּל הָאָלָה` (29:19). Our proposal. |
| LH epil. 3382'–3386' | *lu šarrum lu bēlum lu iššiakkum u lū awīlūtum* | בין מלך, בין אדון, בין מושל, ובין אדם | `פֶּן יֵשׁ בָּכֶם אִישׁ אוֹ אִשָּׁה אוֹ מִשְׁפָּחָה אוֹ שֵׁבֶט` (דברים כט:יז) | [equivalent] | The curse covers any person whatsoever. Our proposal. |
| EST 373–376 | *ša māmīt pašāri teppašāni* | (מעשה) של התרת אלה תעשו | `וְהָיָה בְּשָׁמְעוֹ אֶת דִּבְרֵי הָאָלָה הַזֹּאת וְהִתְבָּרֵךְ בִּלְבָבוֹ לֵאמֹר שָׁלוֹם יִהְיֶה לִּי` (דברים כט:יח) | [equivalent] | A private device of the swearer to escape the oath-curse: a smearing/binding rite here, a blessing in the heart there; no escape in either (29:19). Our proposal. |
| EST 653 | same | same | `לְמַעַן סְפוֹת הָרָוָה אֶת הַצְּמֵאָה` (דברים כט:יח) | [equivalent] | Thirst in the oath chapter (in another sense). |
| LI epil. 465′ | *aš₂-bala-ke₄-eš lu₂-kur₂ šu ba-an-zi-zi-a* | בגלל המארה את יד איש אחר ירים | `וְהָיָה בְּשָׁמְעוֹ אֶת דִּבְרֵי הָאָלָה הַזֹּאת וְהִתְבָּרֵךְ בִּלְבָבוֹ` (דברים כט:יח) | [equivalent] | The one who knows the curse and tries to escape it (LI: by sending another; Deut: by blessing himself). *aš₂* = *arratu* = `מארה`. Cross-collection: LH 3378′–3380′ `בגלל המארות ההן אחר האחיז`. |
| EST 141 | same | same | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | The oath-breaker's fate; the treaty's own curse (Nabû, 660–661) uses the same formula against the swearers. |
| EST 397 | *māmīt ṭuppi annî* | אלת הלוח הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse of this written document. From memory. |
| EST 433 | *māmīt lā pašāri* | אלה שאין להתירה | `לֹא יֹאבֶה יְהוָה סְלֹחַ לוֹ … וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse that cannot be undone (cf. §32–§33). From memory. |
| EST 435–436 | same | same | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | Also 9:14; 25:19. *pašāṭu* = `מחה` is not in this part. |
| EST 472–473 | *ilāni … mala ina ṭuppi annīe šumšunu zakrū* | האלים … כל אשר נזכר שמם בלוח הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | Gods named in this tablet ↔ the curse written in this book (also 29:20). From memory. |
| EST 493 | same | same | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [cognate] | The oath-curse "lies in wait" like the demon. Our proposal. |
| EST 526 | *ilāni mala ina ṭuppi adê annīe šumšunu zakrū* | האלים, כל אשר נזכר שמם בלוח האמנה הזה | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | Renderings §1; also 573. |
| EST 623 | *tamītu annītu ina libbi šīrīkunu* | את השבועה הזאת אל תוך בשרכם | `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה` (דברים כט:יט) | [equivalent] | The oath-curse settling inside the perjurer, in the oath chapter. |
| EST 661 | *šumkunu lipšīṭi* | את שמכם יִמְחֶה | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | *pašāṭu* = `מחה` (corpus §2; first use in EST); in the oath chapter, right after `וְרָבְצָה בּוֹ כָּל הָאָלָה הַכְּתוּבָה בַּסֵּפֶר הַזֶּה`. From memory (Weinfeld 1972). |
| LH epil. 3375'–3377' | *šumī šaṭram ipšiṭma šumšu ištaṭar* | את שמי הכתוב מחה, ואת שמו כתב | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [divergence] | *pašāṭu* = מחה; in Deut God erases the sinner's name, here the sinner erases the king's. |
| LI epil. 452′ | *mu-sar-ra-ba šu li-bi₂-ib₂-ur₃-a* | את כתובתה ⟨לא⟩ ימחה | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | *šu ur₃* = *pašāṭu* = `מחה` (corpus). In LI the vandal erases the king's text; in Deuteronomy God erases the name of the one who breaks the oath. |
| UN epil. g009–g010a | *lu₂ mu-sar-ra-ba šu bi₂-ib₂-ur₃-ru-a mu-ni bi₂-ib₂-sar-re-a* | איש אשר את כתובתה ימחה, את שמו יכתוב | `וּמָחָה יְהוָה אֶת שְׁמוֹ מִתַּחַת הַשָּׁמָיִם` (דברים כט:יט) | [equivalent] | Erasing an inscription and a name: here the offence, in Deut the punishment. Cross-collection: LI 463′–464′; LH 3375′–3377′ (the same formula). |
| EST 397 | same | same | `כְּכֹל אָלוֹת הַבְּרִית הַכְּתוּבָה בְּסֵפֶר הַתּוֹרָה הַזֶּה` (דברים כט:כ) | [equivalent] |  |
| EST 289–290 | same | same | `וְאָמַר הַדּוֹר הָאַחֲרוֹן בְּנֵיכֶם אֲשֶׁר יָקוּמוּ מֵאַחֲרֵיכֶם` (דברים כט:כא) | [equivalent] | "Your sons who will rise after you". Our proposal. |
| EST 529 | *memmēni ina libbi lū lā iparruʾa* | מאומה בתוכה אל יצמח | `לֹא תִזָּרַע וְלֹא תַצְמִחַ וְלֹא יַעֲלֶה בָהּ כָּל עֵשֶׂב` (דברים כט:כב) | [equivalent] | The cursed land that sprouts nothing, in Deut's description of the broken covenant. Our proposal. |
| EST 546 | *lušabalkit* | יהפוך | `כְּמַהְפֵּכַת סְדֹם וַעֲמֹרָה … אֲשֶׁר הָפַךְ יְהוָה בְּאַפּוֹ` (דברים כט:כב) | [equivalent] | Overturned cities as the covenant curse; `הפך` is the translation's rendering of *nabalkutu* Š. |
| EST 294–295 | *mātkunu ana ḫapê nišēkunu ana šallali lā taddanā* | את ארצכם לחורבן, את עמכם לשלל לא תתנו | `וַיִּתְּשֵׁם יְהוָה מֵעַל אַדְמָתָם … וַיַּשְׁלִכֵם אֶל אֶרֶץ אַחֶרֶת` (דברים כט:כז) | [equivalent] | Land destroyed, people deported. |
| EST 651 | *liddikunu* | ישליך אתכם | `וַיַּשְׁלִכֵם אֶל אֶרֶץ אַחֶרֶת` (דברים כט:כז) | [equivalent] | Translation echo only (`השליך` = *nadû*); recorded so that it is not taken for evidence. |

### Deuteronomy 30

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH prol. 115–116 | idem | idem | `וְשָׁב וְקִבֶּצְךָ מִכָּל הָעַמִּים אֲשֶׁר הֱפִיצְךָ` (דברים ל:ג) | [equivalent] |  |
| EST 387 | same | same | `כִּי קָרוֹב אֵלֶיךָ הַדָּבָר מְאֹד: בְּפִיךָ וּבִלְבָבְךָ לַעֲשֹׂתוֹ` (דברים ל:יד) | [divergence] | Mouth and heart together vs the treaty's opposition of lips and heart. |
| EST 293 | same | same | `כִּי אָבֹד תֹּאבֵדוּן` (דברים ל:יח) | [equivalent] |  |
| EST 288, 293 | *zarʾekunu*; *nupšātkunu lā tuḫallaqa* | לזרעכם; את נפשכם לא תאבדו | `וּבָחַרְתָּ בַּחַיִּים לְמַעַן תִּחְיֶה אַתָּה וְזַרְעֶךָ` (דברים ל:יט) | [equivalent] | Life for you and your seed vs "do not destroy your lives". |
| EST 415 | *arak ūm(ī)* | אורך ימי | `כִּי הוּא חַיֶּיךָ וְאֹרֶךְ יָמֶיךָ` (דברים ל:כ) | [cognate] | *arāku* = `ארך`: the Deuteronomic blessing denied. |

### Deuteronomy 31

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 205 | *lā turammâšu* (*ramû* D) | לא תרפו ממנו | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | Not *râmu* "love". |
| EST 348 | same | same | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | Corpus renderings §2. |
| EST 632–634 | *šumma attunu Aššur-ahu-iddina … turammâni* | אם אתם את אסרחדון … תרפו | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | *ramû* D = `הִרְפָּה` (not *râmu* "love"); in Deuteronomy the god does not let Israel go, in EST the swearers may not let the king go. From memory. |
| EST 634 | same | same | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ח) | [equivalent] |  |
| EST 358–359 | (T) *abūkunu ina libbi adê issaṭar issakan utammannāši* | (apparatus) אביכם באמנה כתב, שׂם, השביע אותנו | `וַיִּכְתֹּב מֹשֶׁה אֶת הַתּוֹרָה הַזֹּאת` (דברים לא:ט) | [equivalent] | *issaṭar* "wrote" is in **Tayinat only** (both copies of §30); Nimrud: "set (it) in the treaty, made us swear". |
| LH epil. 3248' | *lištassi* | יקרא | `תִּקְרָא אֶת הַתּוֹרָה הַזֹּאת נֶגֶד כָּל יִשְׂרָאֵל בְּאָזְנֵיהֶם` (דברים לא:יא) | [equivalent] | The public reading. In LH the wronged man reads (or has it read). |
| LH epil. 3251' | *lišmē* | ישמע | `לְמַעַן יִשְׁמְעוּ וּלְמַעַן יִלְמְדוּ` (דברים לא:יב) | [cognate] | *šemû* = `שמע`; Deut: to learn and fear; LH: to calm the heart. |
| EST 290 | same | same | `וּבְנֵיהֶם אֲשֶׁר לֹא יָדְעוּ יִשְׁמְעוּ וְלָמְדוּ` (דברים לא:יג) | [equivalent] |  |
| EST 388, 396 | same | same | `וּבְנֵיהֶם אֲשֶׁר לֹא יָדְעוּ יִשְׁמְעוּ וְלָמְדוּ לְיִרְאָה אֶת יְהוָה אֱלֹהֵיכֶם` (דברים לא:יג) | [cognate] / [equivalent] | The next generation learns fear from the reading of the written text (31:9–12; cf. §35). Our proposal. |
| EST 507–508 | *ūmu ammar anīnu marʾīni mār marʾēni balṭānīni* | כל הימים אשר אנחנו, בנינו, בני בנינו חיים | `כָּל הַיָּמִים אֲשֶׁר אַתֶּם חַיִּים עַל הָאֲדָמָה` (דברים לא:יג) | [equivalent] | A duty for the whole lifetime, with the sons (31:13). The Hebrew idiom is the translation's (*ūmu ammar* "the day, as much as"). Our proposal. |
| LH prol. 298–301 | *kittam u mīšaram ina pī mātim aškun* | אמת ומישרים בפי הארץ שׂמתי | `וְלַמְּדָהּ אֶת בְּנֵי יִשְׂרָאֵל שִׂימָהּ בְּפִיהֶם` (דברים לא:יט) | [equivalent] | *šakānu* = `שׂם` + "in the mouth". Our proposal. |
| EST 406 | (T) *ina libbi šaṭirūni* | כתובה בו | `וַיְהִי כְּכַלּוֹת מֹשֶׁה לִכְתֹּב אֶת דִּבְרֵי הַתּוֹרָה הַזֹּאת עַל סֵפֶר: עַד תֻּמָּם` (דברים לא:כד) | [equivalent] | Tayinat only (SAAo "406?"). |
| EST 408 | *ina pānikunu šakinūni* | לפניכם מושׂם | `לָקֹחַ אֵת סֵפֶר הַתּוֹרָה הַזֶּה וְשַׂמְתֶּם אֹתוֹ מִצַּד אֲרוֹן בְּרִית יְהוָה אֱלֹהֵיכֶם` (דברים לא:כו) | [equivalent] | The written document set in the sanctuary. `שׂם` = *šakānu* by the fixed rule (not cognates). From memory (Steymans 2013; Levinson & Stackert; the Tayinat tablet found in the temple). |
| EST 21 | same | same | `וְאָעִידָה בָּם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים לא:כח) | [divergence] |  |

### Deuteronomy 32

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH prol. 236 | *bānîšu* | בונהו | `הֲלוֹא הוּא אָבִיךָ קָּנֶךָ הוּא עָשְׂךָ וַיְכֹנְנֶךָ` (דברים לב:ו) | [equivalent] | Our proposal. |
| LH prol. 13 | *illilūt kiššat nišī išīmušum* | את שררת אנליל על כל האנשים גזרו לו | `בְּהַנְחֵל עֶלְיוֹן גּוֹיִם בְּהַפְרִידוֹ בְּנֵי אָדָם` (דברים לב:ח) | [equivalent] | The high god apportions rule. Our proposal. |
| LH epil. 3155' | *ša Enlil išrukam* | אשר אנליל מסר לי | `בְּהַנְחֵל עֶלְיוֹן גּוֹיִם` (דברים לב:ח) | [equivalent] | The high god hands peoples to a ruler; `הנחיל` avoided. Our proposal. |
| UN prol. 28 | *i₃-nun* | חמאה | `חֶמְאַת בָּקָר וַחֲלֵב צֹאן` (דברים לב:יד) | [cognate via the Akk.] | *i₃-nun* = Akk. *ḫimētu* ~ `חֶמְאָה`. |
| EST 265 | same | same | `בְּתוֹעֵבֹת יַכְעִיסֻהוּ` (דברים לב:טז) | [equivalent] |  |
| UN epil. g016–g017 | *nam-ĝuruš … nam-ki-sikil* | בחורי … צעירות | `גַּם בָּחוּר גַּם בְּתוּלָה יוֹנֵק עִם אִישׁ שֵׂיבָה` (דברים לב:כה) | [equivalent] | The pair "young men / young women" of the city in a curse. |
| EST 646 | same | same | `עֲנָבֵמוֹ עִנְּבֵי רוֹשׁ אַשְׁכְּלֹת מְרֹרֹת לָמוֹ` (דברים לב:לב) | [cognate] | *marāru* = `מרר`. |
| EST 332 | same | same | `וְאָמַר אֵי אֱלֹהֵימוֹ` (דברים לב:לז) | [equivalent] |  |
| LH §195, 2504' | *imtaḫaṣ* | מחץ | `מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט) | [cognate] | F29; `הכה` kept out of the law lines. |
| LH §249, 2877' | *ilum imḫassuma* | ואל מחצו | `אֲנִי אָמִית וַאֲחַיֶּה מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט) | [cognate] | *maḫāṣu* = `מָחַץ` with the god as subject in both. |
| LH §215, 2614' | *awīlam ubtalliṭ* | `ואת האיש חִיָּה,` | `אֲנִי אָמִית וַאֲחַיֶּה מָחַצְתִּי וַאֲנִי אֶרְפָּא` (דברים לב:לט) | [equivalent] | בפסוק אחד ארבעת הפעלים של חוקי החבלה והרופא ב־LH: *mâtu* Š `המית`; הצעה שלנו |
| LH §218, 2633' | *awīlam uštamīt* | `ואת האיש הֵמִית,` | `אֲנִי אָמִית וַאֲחַיֶּה` (דברים לב:לט) | [cognate] |  |
| EST 259 | same | same | `אָשִׁיב נָקָם לְצָרָי` (דברים לב:מא) | [equivalent] |  |
| EST 425–427 | *šiltāḫu … dāmē … šīru* | חץ … דמים … בשר | `אַשְׁכִּיר חִצַּי מִדָּם וְחַרְבִּי תֹּאכַל בָּשָׂר` (דברים לב:מב) | [equivalent] | Arrow, blood, flesh. Our proposal. |
| EST 613 | *ina dāmē rahṣatūni* | בדמים שטופה | `אַשְׁכִּיר חִצַּי מִדָּם` (דברים לב:מב) | [equivalent] | Weapons "drunk" with blood. |
| EST 635–636 | *ša ana imitti illakūni patrī lēkulāšu* | אשר לימין הולך – חרבות תאכלנה אותו | `וְחַרְבִּי תֹּאכַל בָּשָׂר` (דברים לב:מב) | [cognate] | *akālu* = `אכל`; *patru* = `חרב` [equivalent]. P&W's "iron" is not in the text. |
| EST 256–259 | blood + requital | דמים … גמול … לא תשיבו | `כִּי דַם עֲבָדָיו יִקּוֹם וְנָקָם יָשִׁיב לְצָרָיו` (דברים לב:מג) | [equivalent] | Blood avenged by "returning vengeance". |
| EST 290–292 | *ṭēmu … šakānu … adê uṣrā* | צו … תשימו … את האמנה הזאת נצרו | `אֲשֶׁר תְּצַוֻּם אֶת בְּנֵיכֶם לִשְׁמֹר לַעֲשׂוֹת` (דברים לב:מו) | [equivalent] | Command your sons to keep. Our proposal. |
| LH epil. 3340'–3341' | *ela ana lā ḫassim rēqa* | רק לשאינו משכיל ריקים הם | `כִּי לֹא דָבָר רֵק הוּא מִכֶּם כִּי הוּא חַיֵּיכֶם וּבַדָּבָר הַזֶּה תַּאֲרִיכוּ יָמִים עַל הָאֲדָמָה` (דברים לב:מז) | [cognate] | *rēqu* = `רק` of the law's words; long days follow in both (3344'–: the long sceptre). Our proposal. |

### Deuteronomy 33

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH epil. 3230'–3231' | *mīšarī ina mātim lištēpi* | המישרים שלי בארץ יופיעו | `הוֹפִיעַ מֵהַר פָּארָן` (דברים לג:ב) | [equivalent] | Intransitive `הופיע` at the giving of the law. Our proposal. |
| EST 50 | *lā tanaṣṣaršūni* | (אם) לא תנצרו אותו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | Also 65, 100. |
| EST 168 | *lā tanaṣṣarāšūni* | לא תנצרו אותו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] |  |
| EST **291–292** | ***adê annûte uṣrā*** | **את האמנה הזאת נצרו** | `כִּי שָׁמְרוּ אִמְרָתֶךָ וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | *naṣāru* + treaty = `נצר` + `ברית`; `שמר` beside `נצר` in the same verse. |
| EST 355 | (T) *maṣṣartušu lā inaṣṣuru* | נצירתו לא ינצרו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | Verb in Tayinat only; *maṣṣartu* in Nimrud. |
| EST 409 | *kî ilikunu lā tanaṣṣarāni* | כאלכם לא תנצרו | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] |  |
| LH epil. 3304' | *liṣṣur* | ינצור | `כִּי שָׁמְרוּ אִמְרָתֶךָ וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | *naṣāru* = `נצר`. |
| LH §177, 2226' | *bītam inaṣṣarū* | את הבית ינצרו, | `וּבְרִיתְךָ יִנְצֹרוּ` (דברים לג:ט) | [cognate] | *naṣāru* = |
| LH §192, 2468' | *ul abī atta* | "לא אבי אתה, | `הָאֹמֵר לְאָבִיו וּלְאִמּוֹ לֹא רְאִיתִיו וְאֶת אֶחָיו לֹא הִכִּיר` (דברים לג:ט) | [equivalent] | לוי, שאומר לאביו ולאמו "לא ראיתיו" ואת אחיו "לא הכיר" – כאן לשבח; אותו מבנה של הכחשת הורים (ראו גם 2475' *wuddû* `הכיר`) |
| LH §193, 2475' | *uweddīma* | הכיר, | `וְאֶת אֶחָיו לֹא הִכִּיר וְאֶת בָּנָו לֹא יָדָע` (דברים לג:ט) | [equivalent] | לוי ש"לא הכיר" את אחיו ו"לא ידע" את בניו; כאן הבן ש"הכיר" את בית אביו הביולוגי |
| LH prol. 143 | *rīmum* | הראם | `וְקַרְנֵי רְאֵם קַרְנָיו בָּהֶם עַמִּים יְנַגַּח` (דברים לג:יז) | [cognate] | *rīmu* = `רְאֵם`; goring peoples ↔ 145. |
| EST 531 | *nalšu* | טל | `אַף שָׁמָיו יַעַרְפוּ טָל` (דברים לג:כח) | [equivalent] | The blessing reversed. |

### The rest of the Bible

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| EST 634 | same | same | `לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ` (יהושע א:ה) | [equivalent] |  |
| EST 634 | same | same | `אַל תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול` (יהושע א:ז) | [equivalent] |  |
| EST 194–195 | *ammar iqabbûni lā tašammâni kî pîšu* | כל אשר יאמר לא תשמעו, כפיו | `כָּל אִישׁ אֲשֶׁר יַמְרֶה אֶת פִּיךָ וְלֹא יִשְׁמַע אֶת דְּבָרֶיךָ לְכֹל אֲשֶׁר תְּצַוֶּנּוּ יוּמָת` (יהושע א:יח) | [cognate] (*šemû*) / [equivalent] | The people's loyalty oath to Moses' successor: "your mouth", "hear", "all that" (Josh 1:16–18 as a loyalty oath: from memory; the word match is our proposal). |
| LH §109, 1221' | *sarrūtum* | `אנשי שקר` | `וַיֵּלְכוּ וַיָּבֹאוּ בֵּית אִשָּׁה זוֹנָה וּשְׁמָהּ רָחָב וַיִּשְׁכְּבוּ שָׁמָּה` (יהושע ב:א) | [equivalent] | זרים מסוכנים (המרגלים) מתכנסים בבית האשה שהתרגום הארמי מכנה פֻּנְדְּקִיתָא (מן הזיכרון). מן הזיכרון (ההשוואה מצויה בספרות). |
| MAL §14, o ii 31 | *ina altamme* | בפונדק | `וַיָּבֹאוּ בֵּית אִשָּׁה זוֹנָה וּשְׁמָהּ רָחָב וַיִּשְׁכְּבוּ שָׁמָּה` (יהושע ב:א) | [equivalent] | The inn/tavern as a place of illicit sex; the Targum calls Rahab "innkeeper" (from memory). |
| LH §109, 1226' | *ana ekallim* | `ולהיכל` | `וַיִּשְׁלַח מֶלֶךְ יְרִיחוֹ אֶל רָחָב לֵאמֹר הוֹצִיאִי הָאֲנָשִׁים הַבָּאִים אֵלַיִךְ אֲשֶׁר בָּאוּ לְבֵיתֵךְ` (יהושע ב:ג) | [equivalent] | דרישת המלך שבעלת הבית תמסור את הזרים שבביתה |
| LH §6, 380 | *išriq* | `גנב,` | `וְגַם לָקְחוּ מִן הַחֵרֶם וְגַם גָּנְבוּ` (יהושע ז:יא) | [equivalent] | גניבה מן הקודש, שעונשה מוות (עכן); הצעה שלנו |
| IN IN §16, 16.4 | *A-NA {LÚ}SANGA-ma-at pé-ra-an te-pu me-ma-at-te-ni na-aš-ma A.ŠÀ DINGIR-LIM* | ואילו לפני הכוהן תאמרו עליו "מעט"; או שדה הָאֵל | `וְגַם גָּנְבוּ וְגַם כִּחֲשׁוּ וְגַם שָׂמוּ בִכְלֵיהֶם` (יהושע ז:יא) | [equivalent] | גנבה מרכוש האל והכחשה. ההקבלה טיפולוגית |
| EST 535 | same | same | `לֹא תוּכַל לָקוּם לִפְנֵי אֹיְבֶיךָ` (יהושע ז:יג) | [equivalent] | After the breach of the ban: `חָטָא יִשְׂרָאֵל וְגַם עָבְרוּ אֶת בְּרִיתִי` (יהושע ז:יא). |
| LH §25, 618 | idem | idem | `הַנִּלְכָּד בַּחֵרֶם יִשָּׂרֵף בָּאֵשׁ אֹתוֹ וְאֶת כָּל אֲשֶׁר לוֹ` (יהושע ז:טו) | [equivalent] | The taker of forbidden goods burnt. Our proposal. |
| IN IN §8, 8.25 | *na-an LUGAL-an a-aš-ka UL ú-wa-te-ez-zi nu-uš-〈ma〉-ša-at 2-aš-pát* | ולא יביא אותו אל שער המלך – וזה להם – לשניהם | `וְהִנָּם טְמוּנִים בָּאָרֶץ בְּתוֹךְ הָאָהֳלִי` (יהושע ז:כא) | [equivalent] | עכן מסתיר את מה שלקח מן החרם; כאן העונש חל גם על המסתיר. הקבלה טיפולוגית |
| IN IN §3, 3.3 | *UL-at-kán A-*NA* DAM-ŠÚ D[UMU{MEŠ}-ŠU N]UMUN-ŠU MÁŠ-ŠU ⸢ARAD⸣{MEŠ}-Š[U GÉM]E{MEŠ}-ŠU ⸢GU₄{ḪI.A}-ŠÚ⸣* | הלא אותו – באשתו, [בבניו], בזרעו, במשפחתו, בעבדיו, [באֲמָהוֹתָיו], בשווריו, | `וְאֶת בָּנָיו וְאֶת בְּנֹתָיו וְאֶת שׁוֹרוֹ וְאֶת חֲמֹרוֹ וְאֶת צֹאנוֹ וְאֶת אָהֳלוֹ וְאֶת כָּל אֲשֶׁר לוֹ` (יהושע ז:כד) | [equivalent] | עונשו של עכן, שלקח מן החרם (רכוש האל!): בניו, בנותיו, שורו, חמורו, צאנו – אותה רשימה כמעט, ואותו חטא – גזל ממה שהוקדש לאל |
| IN IN §6, 6.7 | *[ki-ia-aḫ-ḫu-ut] nu-wa-za-kán a-pé-e-el ⸢É⸣-er GAM-an ša-ra-a e-ep-du* | [לֵךְ]! ואת ביתו – למטה, למעלה – יתפוס!" | `וַיִּקַּח יְהוֹשֻׁעַ אֶת עָכָן בֶּן זֶרַח … וְאֶת כָּל אֲשֶׁר לוֹ` (יהושע ז:כד) | [equivalent] | הגונב ממה שהוקדש לאל נענש עם ביתו; כאן הנשבע עצמו מבקש את העונש הזה. הקבלה טיפולוגית |
| LH epil. 3524' | idem | idem | `וַיְשִׂימֶהָ תֵּל עוֹלָם שְׁמָמָה` (יהושע ח:כח) | [cognate] |  |
| LI epil. 492′ | *iri{ki}-bi du₆-du₆-ra* | את עריו לתלים | `וַיִּשְׂרֹף יְהוֹשֻׁעַ אֶת הָעָי וַיְשִׂימֶהָ תֵּל עוֹלָם שְׁמָמָה` (יהושע ח:כח) | [cognate] | The same image. |
| LH epil. 3218' | idem | idem | `וַיִּכְתָּב שָׁם עַל הָאֲבָנִים אֵת מִשְׁנֵה תּוֹרַת מֹשֶׁה` (יהושע ח:לב) | [equivalent] |  |
| LH epil. 3247' | *šaṭram* | הכתובה | `כְּכָל הַכָּתוּב בְּסֵפֶר הַתּוֹרָה` (יהושע ח:לד) | [equivalent] | Reading of blessing and curse follows (Josh 8:34), as here (3344'–). |
| EST 652 | *kî ša nādu šalqatūni* | כאשר הנאד בקוע | `וְנֹאדוֹת יַיִן בָּלִים וּמְבֻקָּעִים וּמְצֹרָרִים` (יהושע ט:ד) | [cognate] | *nādu* = `נֹאד`; split skins and worn sandals (656) in the Gibeonites' treaty story. Our proposal. |
| EST 656 | same | same | `וּנְעָלוֹת בָּלוֹת וּמְטֻלָּאוֹת בְּרַגְלֵיהֶם` (יהושע ט:ה) | [equivalent] | The Gibeonites (also 9:13). |
| EST 652, 654 | same | same | `וְאֵלֶּה נֹאדוֹת הַיַּיִן אֲשֶׁר מִלֵּאנוּ חֲדָשִׁים וְהִנֵּה הִתְבַּקָּעוּ` (יהושע ט:יג) | [cognate] |  |
| EST 378 | same | same | `וְלֹא יִהְיֶה עָלֵינוּ קֶצֶף עַל הַשְּׁבוּעָה אֲשֶׁר נִשְׁבַּעְנוּ לָהֶם` (יהושע ט:כ) | [equivalent] | An oath, even one obtained by fraud, cannot be released (9:19). From memory (standard). |
| LH epil. 3159' | *aḫī ul addi* | את זרועי לא השלכתי | `אַל תֶּרֶף יָדֶיךָ מֵעֲבָדֶיךָ` (יהושע י:ו) | [equivalent] | Same idiom (drop the arm = neglect), other verb. Our proposal. |
| LH §21, 574 | idem | idem | `וַיְמִיתֵם וַיִּתְלֵם עַל חֲמִשָּׁה עֵצִים` (יהושע י:כו) | [equivalent] | Same condition. |
| LH §162, 1919' | *ša mārīšama* | של בניה הם. | `וַתֹּאמֶר תְּנָה לִּי בְרָכָה כִּי אֶרֶץ הַנֶּגֶב נְתַתָּנִי וְנָתַתָּה לִי גֻּלֹּת מָיִם` (יהושע טו:יט) | [equivalent] | מתנת האב לבתו בנישואיה (עכסה), שעוברת עמה לבית בעלה. הצעה שלנו |
| LH §178, 2243' | *šeriktam* | שלוחים | `כִּי אֶרֶץ הַנֶּגֶב נְתַתָּנִי וְנָתַתָּה לִי גֻּלֹּת מָיִם` (יהושע טו:יט) | [equivalent] | כלב נותן לבתו עכסה שדה ומים בנישואיה: מתנת אב לבת, שדה ומקור מים, כמו *šeriktu* שיש בה שדה וגן (2258') |
| EST 494–512 | same | same | `וַיֹּאמְרוּ עֵדִים` (יהושע כד:כב) | [equivalent] | The people answer and become witnesses against themselves (cf. 24:27, the stone). |
| EST 494–512 | same | same | `אֶת יְהוָה אֱלֹהֵינוּ נַעֲבֹד וּבְקוֹלוֹ נִשְׁמָע` (יהושע כד:כד) | [equivalent] | The people's 1st-person-plural answer. |
| EST 290–291 | *ṭēma šakānu* | צו … תשימו | `וַיָּשֶׂם לוֹ חֹק וּמִשְׁפָּט בִּשְׁכֶם` (יהושע כד:כה) | [equivalent] | "Set a statute" after a covenant. |
| EST 409 | same | same | `וַיִּקַּח אֶבֶן גְּדוֹלָה וַיְקִימֶהָ שָּׁם תַּחַת הָאַלָּה אֲשֶׁר בְּמִקְדַּשׁ יְהוָה` (יהושע כד:כו) | [equivalent] | Covenant written in a book + a stone in the sanctuary. Our proposal. |
| LH §215, 2615' | *u lū nakkapti awīlim* | `או את רַקַּת(?) איש` | `וַתִּתְקַע אֶת הַיָּתֵד בְּרַקָּתוֹ` (שופטים ד:כא) | [equivalent] |  |
| LH prol. 40–42 | *kīma Šamaš … waṣêmma* | כשמש … לצאת | `וְאֹהֲבָיו כְּצֵאת הַשֶּׁמֶשׁ בִּגְבֻרָתוֹ` (שופטים ה:לא) | [cognate] | *waṣû* = `יצא` of the sun. Our proposal (the verbal match). |
| EST 296 | same | same | `הַמְשַׂמֵּחַ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:יג) | [equivalent] |  |
| LH epil. 3189' | idem | idem | `בֹּאוּ חֲסוּ בְצִלִּי` (שופטים ט:טו) | [divergence] | Jotham's fable: the "shade" of the bramble-king. |
| LH §170, 2040' | *u amassu* | ואמתו | `וַתַּמְלִיכוּ אֶת אֲבִימֶלֶךְ בֶּן אֲמָתוֹ` (שופטים ט:יח) | [cognate] | *amtu* = `אָמָה`, ובן האמה של האב |
| LI §27, 325′–327′ | *kar-ke₄-da tilla₂-a dumu in-ši-in-tu-u₄* | וזונה של הרחוב בן ילדה לו | `וְהוּא בֶּן אִשָּׁה זוֹנָה; וַיּוֹלֶד גִּלְעָד אֶת יִפְתָּח` (שופטים יא:א) | [equivalent] | The son of a prostitute (*kar-kid* = *ḫarimtu* = `זונה`). |
| LH §167, 2001' | *mārū ana ummātim* | הבנים לפי האמהות | `וַתֵּלֶד אֵשֶׁת גִּלְעָד לוֹ בָּנִים; וַיִּגְדְּלוּ בְנֵי הָאִשָּׁה וַיְגָרְשׁוּ אֶת יִפְתָּח` (שופטים יא:ב) | [equivalent] | הבנים של אשה אחת דוחים את בן האחרת מן הנחלה, מה שהחוק כאן מונע |
| LH §171, 2070' | *ul izuzzu* | לא יחלוקו; | `לֹא תִנְחַל בְּבֵית אָבִינוּ כִּי בֶּן אִשָּׁה אַחֶרֶת אָתָּה` (שופטים יא:ב) | [equivalent] | בן שאינו מן האשה הראשית אינו חולק ב"בית האב" |
| LI §27, 332′–334′ | *dumu kar-ke₄-de₃ in-ši-in-tu-u₄-da ibila-ni i₃-me-en* | הבן אשר הזונה ילדה לו יורשו הוא | `וַיְגָרְשׁוּ אֶת יִפְתָּח וַיֹּאמְרוּ לוֹ לֹא תִנְחַל בְּבֵית אָבִינוּ כִּי בֶּן אִשָּׁה אַחֶרֶת אָתָּה` (שופטים יא:ב) | [divergence] | **LI makes the prostitute's son the heir (when the wife has no son); Jephthah's brothers drive him out of the inheritance** (they are sons of the wife). |
| LH §181, 2334' | *ana ilim iššīma* | לאל הרים, | `וַיַּעַשׂ לָהּ אֶת נִדְרוֹ אֲשֶׁר נָדָר וְהִיא לֹא יָדְעָה אִישׁ` (שופטים יא:לט) | [divergence] | בת שאביה נדר אותה, ו"לא ידעה איש" (המפרשים המאוחרים: הוקדשה לפרישות, כמו הנדיתו שאינה יולדת) |
| HL HL1 §91, 501 | *[takku NI]M.LÀL{ḪI.A}-an kammari kuiški tāyezi* | [אם] מישהו יגנוב [דבורים] בענן, | `וְהִנֵּה עֲדַת דְּבוֹרִים בִּגְוִיַּת הָאַרְיֵה וּדְבָשׁ` (שופטים יד:ח) | [equivalent] | הנחיל כ"עדה" |
| LH §161, 1895' | *ibiršu* | וחברו | `וַתְּהִי אֵשֶׁת שִׁמְשׁוֹן לְמֵרֵעֵהוּ אֲשֶׁר רֵעָה לוֹ` (שופטים יד:כ) | [equivalent] | חבר החתן שקיבל את הכלה; ראו 1907' |
| LH §161, 1907' | *ul iḫḫaz* | לא ישא. | `וַתְּהִי אֵשֶׁת שִׁמְשׁוֹן לְמֵרֵעֵהוּ אֲשֶׁר רֵעָה לוֹ` (שופטים יד:כ) | [divergence] | מה שהחוק אוסר הוא בדיוק מה שעשה חותנו של שמשון: הכלה ניתנה לחבר החתן |
| LI §29, 353′–363′ | *mussa-tur e₂ ušbar-ra-na-ka i₃-in-ku₄ … im-ta-an-e₃-eš dam-a-ni ku-li-ni-ir ba-na-an-šum₂-mu-uš … in-na-ab-tab-e-ne* | חתן לבית חמיו נכנס … הוציאוהו, ואת אשתו לחברו נתנו, … יכפילו לו | `וַתְּהִי אֵשֶׁת שִׁמְשׁוֹן לְמֵרֵעֵהוּ אֲשֶׁר רֵעָה לוֹ` (שופטים יד:כ) | [equivalent] | **The bride given to the groom's companion** – the situation of Samson's marriage. Cross-collection: LH §161 (1890′–1907′) `שי הוביל … וחברו … יכפיל … ואת אשתו חברו לא ישא` – the same law. |
| LH §142, 1654' | *šumma sinništum mussa izērma* | אם אשה את בעלה שנאה, | `אָמֹר אָמַרְתִּי כִּי שָׂנֹא שְׂנֵאתָהּ וָאֶתְּנֶנָּה לְמֵרֵעֶךָ` (שופטים טו:ב) | [equivalent] | "שנא" כעילת הפירוד. מן הזיכרון ("שנאתי" בשטרי יב) |
| LH §161, 1899' | *mārtī ul taḫḫaz* | "את בתי לא תשא" | `אָמֹר אָמַרְתִּי כִּי שָׂנֹא שְׂנֵאתָהּ וָאֶתְּנֶנָּה לְמֵרֵעֶךָ` (שופטים טו:ב) | [equivalent] | החותן שחזר בו ונתן את הכלה לחבר |
| LI §29, 359′–360′ | *dam-a-ni ku-li-ni-ir ba-na-an-šum₂-mu-uš* | ואת אשתו לחברו נתנו | `וָאֶתְּנֶנָּה לְמֵרֵעֶךָ` (שופטים טו:ב) | [equivalent] | The father-in-law's own words in Judges. |
| UN §15, 274–284 | *mussa-tur e₂ u₂-ur₃-ra-na-ka i₃-in-ku₄ … lu₂ […] ba-an-na-šum₂, niĝ₂-mussa a-ra₂ 2-am₃ i₃-na-šum₂* | חתן לבית חמיו נכנס … לאיש […] נְתָנָהּ, את השי פעמיים יתן לו | `וַיֹּאמֶר אָבִיהָ אָמֹר אָמַרְתִּי כִּי שָׂנֹא שְׂנֵאתָהּ וָאֶתְּנֶנָּה לְמֵרֵעֶךָ` (שופטים טו:ב) | [equivalent] | The father-in-law gives the son-in-law's wife to another (Samson); UN: the gifts returned twofold (= LI §29, LH §161). Mostly restored (ex03 broken). |
| HL HL2 §105, 105.2 | *[{GIŠ}KIRI₆.GEŠTIN e-ep-zi tá]k-ku GEŠTIN-iš …* | [כרם תתפוס – אם] גפן, [תפוח] או תפוח־הרים [או] | `וַיַּבְעֵר מִגָּדִישׁ וְעַד קָמָה וְעַד כֶּרֶם זָיִת` (שופטים טו:ה) | [equivalent] | האש העוברת משדה לכרם ולמטע |
| LI §29, 353′ | *mussa-tur* | חָתָן | `שִׁמְשׁוֹן חֲתַן הַתִּמְנִי כִּי לָקַח אֶת אִשְׁתּוֹ וַיִּתְּנָהּ לְמֵרֵעֵהוּ` (שופטים טו:ו) | [equivalent] | *mussa-tur* = Akk. *ḫatanu*, cognate of `חָתָן`. |
| LI §29, 363′–365′ | *in-na-ab-tab-e-ne … dam-bi ku-li-ne₂ nu-un-tuku-tuku* | יכפילו לו; ואת האשה ההיא חברו לא ישא | `וַיַּעֲלוּ פְלִשְׁתִּים וַיִּשְׂרְפוּ אוֹתָהּ וְאֶת אָבִיהָ בָּאֵשׁ` (שופטים טו:ו) | [divergence] | The law: double restitution and the friend may not marry her; the story: the friend married her, and vengeance followed. |
| EST 607 | *ina pitilti* | בפתיל | `כַּאֲשֶׁר יִנָּתֵק פְּתִיל הַנְּעֹרֶת` (שופטים טז:ט) | [cognate] | *pitiltu* = `פְּתִיל`; lexical. |
| LH §193, 2484' | *inassaḫū* | ינסחו. | `וַיְנַקְּרוּ אֶת עֵינָיו` (שופטים טז:כא) | [equivalent] |  |
| MAL §24, o iii 41–42 | *ina pāni mutiša ramānša taltadad* | מפני בעלה את עצמה משכה | `וַתִּזְנֶה עָלָיו פִּילַגְשׁוֹ וַתֵּלֶךְ מֵאִתּוֹ אֶל בֵּית אָבִיהָ` (שופטים יט:ב) | [equivalent] | A wife who leaves her husband. Our proposal. |
| LH §178, 2266' | *uṭabbū* | ייטיבו; | `וְיִיטַב לִבֶּךָ` (שופטים יט:ו) | [cognate] |  |
| LH §178, 2266' | *uṭabbū* | ייטיבו; | `הֵמָּה מֵיטִיבִים אֶת לִבָּם` (שופטים יט:כב) | [cognate] | אותו ניב בדיוק (*libbam ṭubbu* = `הֵיטִיב אֶת לֵב`), באותו פועל (שורש טו"ב) ובאותו מבנה (פועל גורם + "את לבו") |
| LE §26, 88 | *imšu'šima* | חטפה | `וַחֲטַפְתֶּם לָכֶם אִישׁ אִשְׁתּוֹ מִבְּנוֹת שִׁילוֹ` (שופטים כא:כא) | [equivalent] | Abduction of a bride. |
| MAL §55, r viii 19 | *lū ina isinni āli* | בין בחג העיר | `וַחֲטַפְתֶּם לָכֶם אִישׁ אִשְׁתּוֹ מִבְּנוֹת שִׁילוֹ` (שופטים כא:כא) | [equivalent] | Girls seized at a festival (Judg 21:19 `חַג יְהוָה בְּשִׁלוֹ`). Our proposal. |
| LH §145, 1709' | *ul uštamaḫḫar* | לא תשתווה | `וְכִעֲסַתָּה צָרָתָהּ גַּם כַּעַס` (שמואל א א:ו) | [equivalent] | The rival wife with children. |
| LH §138, 1610' | *ša mārī lā uldušum* | אשר בנים לא ילדה לו | `הֲלוֹא אָנֹכִי טוֹב לָךְ מֵעֲשָׂרָה בָּנִים` (שמואל א א:ח) | [divergence] | אלקנה אינו עוזב את חנה העקרה. הצעה שלנו |
| LH §181, 2334' | *ana ilim iššīma* | לאל הרים, | `וּנְתַתִּיו לַיהוָה כָּל יְמֵי חַיָּיו` (שמואל א א:יא) | [equivalent] | חנה נודרת לתת את בנה לה' |
| IN IN §12, 12.3 | *{É}⸢ka-ri-im-me ku-iš-ki⸣ ni-ik-zi na-aš-kán ma-a-an ŠÀ É DINGIR-LIM* | בבית־הַקָּרִימִּי – מישהו ישתכר; והוא, אם בתוך בית הָאֵל | `עַד מָתַי תִּשְׁתַּכָּרִין; הָסִירִי אֶת יֵינֵךְ מֵעָלָיִךְ` (שמואל א א:יד) | [equivalent] | עלי חושב שחנה שיכורה בבית ה' בשילה: שכרות במקדש היא עלבון |
| UN e004 | *mu 3(diš)-a* | לשלוש שנים | `עַד יִגָּמֵל הַנַּעַר` (שמואל א א:כב) | [equivalent] | Three years of nursing until weaning. |
| LH §181, 2334' | *ana ilim iššīma* | לאל הרים, | `וְגַם אָנֹכִי הִשְׁאִלְתִּהוּ לַיהוָה כָּל הַיָּמִים אֲשֶׁר הָיָה` (שמואל א א:כח) | [equivalent] |  |
| EST 193–194 | *ša duāki … ša balluṭi* | את אשר להרוג … את אשר להחיות | `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל א ב:ו) | [equivalent] |  |
| EST 192 | *dannu lā ušappalūni šaplu lā imattahūni* | את החזק לא ישפיל, את השפל לא ירים | `מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | [cognate] | *šapālu* = `שפל`. |
| IN IN §7, 7.1 | *[ ] UDU ku-iš DINGIR-LIM-ni a-da-an-na u-un-na-an-za* | […] שה, אשר נִנְהָג אֶל הָאֵל לאכול, | `גַּם בְּטֶרֶם יַקְטִרוּן אֶת הַחֵלֶב וּבָא נַעַר הַכֹּהֵן` (שמואל א ב:טו) | [equivalent] | כוהני שילה הלוקחים את בשר האל לפני שהוקרב. ההקבלות טיפולוגיות |
| IN IN §7, 7.10 | *[a-pé-e-el ZI-aš Ḫ]A.⸢LA⸣ KA×U-it pa-ra-a ḫu-u-it-ti-at-te-ni* | [את חלק נפשו] – מן הפה החוצה תמשכו, | `וְלֹא יִקַּח מִמְּךָ בָּשָׂר מְבֻשָּׁל כִּי אִם חָי` (שמואל א ב:טו) | [equivalent] | `וְאִם לֹא לָקַחְתִּי בְחָזְקָה` (שמואל א ב:טז) – נערי בני עלי לוקחים את מנת האל לפני שהגיעה אליו. הקבלה טיפולוגית, וקרובה מאוד |
| EST 296 | same | same | `וָטוֹב גַּם עִם יְהוָה וְגַם עִם אֲנָשִׁים` (שמואל א ב:כו) | [equivalent] |  |
| EST 416 | *kišid littūti ay iqīš* | השגת ישישות אל יעניק | `וְלֹא יִהְיֶה זָקֵן בְּבֵיתְךָ כָּל הַיָּמִים` (שמואל א ב:לב) | [equivalent] | No old age as a curse (Eli's house). Our proposal. |
| IN IN §6, 6.12 | *[ KAŠ GEŠTIN-ma-ká]n DINGIR{MEŠ}-a[š {GI]Š}kat-ta-lu-uz-zi le-e-pát [ ]* | [ואילו שכר, יין] – את מפתן הָאֵלִים אַל כלל […] | `עַל כֵּן לֹא יִדְרְכוּ כֹהֲנֵי דָגוֹן וְכָל הַבָּאִים בֵּית דָּגוֹן עַל מִפְתַּן דָּגוֹן בְּאַשְׁדּוֹד` (שמואל א ה:ה) | [equivalent] | `וּפָקַדְתִּי עַל כָּל הַדּוֹלֵג עַל הַמִּפְתָּן` (צפניה א:ט) – גם במקרא מפתן בית האל הוא גבול בעל משמעות פולחנית. ההקבלה טיפולוגית: מפתן המקדש מקודש בתרבויות רבות |
| LH §249, 2877' | *ilum imḫassuma* | ואל מחצו | `כִּי לֹא יָדוֹ נָגְעָה בָּנוּ מִקְרֶה הוּא הָיָה לָנוּ` (שמואל א ו:ט) | [equivalent] | For the Philistines a "chance" is the opposite of the god's hand; for LH the god's blow is the accident. Our proposal. |
| LH §33, 729 | *šumma lu ša-ḫaṭṭātim* | `אם בין קָצִין` | `וְלָשׂוּם לוֹ שָׂרֵי אֲלָפִים וְשָׂרֵי חֲמִשִּׁים` (שמואל א ח:יב) | [equivalent] | המפקדים של צבא המלך. מן הזיכרון. |
| EST 275 | *eqlāti* | שדות | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח` (שמואל א ח:יד) | [divergence] | The king who takes fields; here taking is forbidden. |
| LH §34, 743 | *numāt rēdîm ilteqe* | `כלי חייל לקח,` | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [equivalent] | "משפט המלך" שלוקח מן העם |
| HL HL1 §40, 203 | *takku LÚ˽{GIŠ}[TUKUL ḫa]rakzi* | אם איש־[הכלי יאבד], | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח; וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [absent] |  |
| HL HL1 §47a, 265 | *takku [A.ŠÀ{ḪI]}.A NÍG.BA LUGAL kuiški ḫarzi* | אם מישהו יחזיק [בשדות] מַתַּת המלך, | `וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [equivalent] | המלך מעניק שדות לנאמניו |
| HL HL1 §52, 289 | *ARAD É.NA₄ ARAD DUMU.LUGAL BE-EL ŠU-UP-PA-TI kuiēš* | עבד בית־האבן, עבד בן־המלך, בעל *שֻׁפַּתִּי* – אשר בין אנשי־הכלי שדה מחזיקים – | `וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד) | [equivalent] |  |
| LI prol. 33–37 | *an-ne₂ {d}en-lil₂-le … mu-un-pa₃-de₃-eš-a-ba* | אן ואנליל את ליפית־אישתר לנסיכות הארץ – כאשר קראו | `וַיֹּאמֶר יְהוָה אֶל שְׁמוּאֵל שְׁמַע בְּקוֹלָם וְהִמְלַכְתָּ לָהֶם מֶלֶךְ` (שמואל א ח:כב) | [divergence] | The king called by the gods (LH 49 `בשמי קראו`); in Samuel the people ask and the prophet anoints. |
| HL HL1 §7, 35 | *karū 1 MA.NA KÙ.BABBAR pešker* | לפנים היו נותנים מנה כסף, | `לְפָנִים בְּיִשְׂרָאֵל כֹּה אָמַר הָאִישׁ` (שמואל א ט:ט) | [equivalent] | הערת הכותב על מנהג שהשתנה |
| HL HL1 §51, 283 | *karū kuiš {URU}arinna {LÚ}UŠ.BAR kī[šat]* | לפנים – מי שבאֲרִינָּה לאורג [נעשה], | `לְפָנִים בְּיִשְׂרָאֵל` (שמואל א ט:ט) | [equivalent] | נוסחת השינוי |
| HL HL2 §121, 121.3 | *ka-ru-ú kiš-an e-eš-šer ki-nu-na 6 GÍN.GÍN [KÙ.BABBAR pa-a-i]* | לפנים כך היו עושים, ועתה שישה שקלים [כסף ייתן], | `לְפָנִים בְּיִשְׂרָאֵל כֹּה אָמַר הָאִישׁ` (שמואל א ט:ט) | [equivalent] | הכותב המעיד על מנהג "של לפנים" שבטל |
| MAL §42, r vi 15 | (the same) | שמן על ראש … יצק | `וַיִּקַּח שְׁמוּאֵל אֶת פַּךְ הַשֶּׁמֶן וַיִּצֹק עַל רֹאשׁוֹ` (שמואל א י:א) | [equivalent] | As above. |
| EST 358–359 | same | same | `וַיִּכְתֹּב בַּסֵּפֶר וַיַּנַּח לִפְנֵי יְהוָה` (שמואל א י:כה) | [equivalent] | The royal law written and deposited "before YHWH" (cf. 408). Our proposal. |
| EST 408 | same | same | `וַיִּכְתֹּב בַּסֵּפֶר וַיַּנַּח לִפְנֵי יְהוָה` (שמואל א י:כה) | [equivalent] | The law of the kingship, written and deposited "before YHWH". Our proposal. |
| HL HL2 §159, 159.1 | *[ták-ku ṢÍ-I]M-DÌ GU₄{ḪI.A} UD 1{KAM} ku-iš-ki tu-u-ri-ez-zi ½ PA ŠE ku-uš-ša-aš-še-et* | [אם] מישהו ירתום [צמד] שוורים יום אחד – חצי פָּרִיס שעורים שְׂכָרוֹ. | `וַיִּקַּח צֶמֶד בָּקָר וַיְנַתְּחֵהוּ` (שמואל א יא:ז) | [cognate] | *ṢIMDU* – האכדית *ṣimdu* "צמד", קרובת `צֶמֶד`; דרך האכדוגרמה |
| EST 51, 53 | *ina ketti ša libbi*; *ša gammurti libbi* | באמת לבכם; שבשלמות לבכם | `וַעֲבַדְתֶּם אֹתוֹ בֶּאֱמֶת בְּכָל לְבַבְכֶם` (שמואל א יב:כד) | [equivalent] | Both treaty phrases in one verse. Our proposal. |
| MAL §14, o ii 40 | *kī libbišu eppassi* | כְּלִבּוֹ יעשה לה | `בִּקֵּשׁ יְהוָה לוֹ אִישׁ כִּלְבָבוֹ` (שמואל א יג:יד) | [equivalent] | *kī libbišu* = `כִּלְבָבוֹ` "as he wishes". |
| LH §259, 2951' | *epinnam* | מחרשה | `לִלְטוֹשׁ אִישׁ אֶת מַחֲרַשְׁתּוֹ` (שמואל א יג:כ) | [equivalent] |  |
| HL HL2 §157, 157.1 | *[ták-ku a-t]e-eš ZABAR ŠA 3 MA.NA KI.LÁ A-[NA IT]U 1{KAM} 1 GÍN KÙ.BABBAR ku-uš-ša-aš-še-et* | [אם גרזן] אָרָד של שלוש מנים משקל – לח[ודש] אחד שקל אחד כסף שְׂכָרוֹ; | `וְהָיְתָה הַפְּצִירָה פִים לַמַּחֲרֵשֹׁת וְלָאֵתִים וְלִשְׁלֹשׁ קִלְּשׁוֹן וּלְהַקַּרְדֻּמִּים` (שמואל א יג:כא) | [equivalent] | מחירון רשמי לכלי מתכת |
| HL HL2 §160a, 160a.1 | *[ták-ku {LÚ}SIMU]G …* | [אם נַפָּ]ח יעבד גיגית נחושת של מאה מנים – מאה פָּרִיס שעורים שְׂכָ[רוֹ]. | `וְהָיְתָה הַפְּצִירָה פִים לַמַּחֲרֵשֹׁת` (שמואל א יג:כא) | [equivalent] | שכר הנפח לפי מחירון; SIMUG נקרא באכדית *nappāḫu* (`נַפָּח`) |
| EST 594 | *kamānu ša dišpi* | חלת הדבש | `וַיִּטְבֹּל אוֹתָהּ בְּיַעְרַת הַדְּבָשׁ` (שמואל א יד:כז) | [equivalent] | In an oath story (14:24–28). |
| LH epil. 3256' | idem | idem | `וְרָוַח לְשָׁאוּל וְטוֹב לוֹ` (שמואל א טז:כג) | [equivalent] | Relief of the heart. |
| LH §27, 644 | *ilikšu* | `את הֲלָכוֹ` | `וְאֵת בֵּית אָבִיו יַעֲשֶׂה חָפְשִׁי בְּיִשְׂרָאֵל` (שמואל א יז:כה) | [equivalent] | פטור משפחה מחובות למלך. מן הזיכרון (שמואל א יז:כה); הקשר האטימולוגי מן המילונים (Sefaria: Klein, BDB). |
| HL PT § XXXVI, 161 | *mān=an=kan LUGAL-uš=ma arauwaḫḫi* | ואם המלך יפטור אותו, | `וְאֵת בֵּית אָבִיו יַעֲשֶׂה חָפְשִׁי בְּיִשְׂרָאֵל` (שמואל א יז:כה) | [equivalent] | המלך פוטר בית מחובות כגמול אישי |
| LH §244, 2843' | *nēšum* | אריה | `וּבָא הָאֲרִי וְאֶת הַדּוֹב וְנָשָׂא שֶׂה מֵהָעֵדֶר` (שמואל א יז:לד) | [equivalent] |  |
| EST 426–427 | same | same | `וְאֶתְּנָה אֶת בְּשָׂרְךָ לְעוֹף הַשָּׁמַיִם` (שמואל א יז:מד) | [equivalent] | "Your flesh" to the birds. Our proposal. |
| EST 207 | same | same | `וַיֶּאֱהָבֵהוּ יְהוֹנָתָן כְּנַפְשׁוֹ` (שמואל א יח:א) | [equivalent] | Love and covenant (18:3). |
| EST 268 | same | same | `יְהוֹנָתָן כְּנַפְשׁוֹ` (שמואל א יח:א) | [cognate] | (The verb of 18:1 is a kethiv/qere; quoted without it.) |
| EST 268 | *kî napšātekunu … taraʾʾamāni* | כנפשכם … תאהבו | `וַיִּכְרֹת יְהוֹנָתָן וְדָוִד בְּרִית בְּאַהֲבָתוֹ אֹתוֹ כְּנַפְשׁוֹ` (שמואל א יח:ג) | [cognate] + [equivalent] | Love "as his soul" + covenant in one verse. |
| LH §160, 1884' | *mārtī ul anaddikkum* | "את בתי לא אתן לך" | `וַיְהִי בְּעֵת תֵּת אֶת מֵרַב בַּת שָׁאוּל לְדָוִד; וְהִיא נִתְּנָה לְעַדְרִיאֵל הַמְּחֹלָתִי לְאִשָּׁה` (שמואל א יח:יט) | [equivalent] | האב שהבטיח את בתו ונתן אותה לאחר; ב־LH האב הזה משלם כפל. הצעה שלנו |
| LI §29, 359′ | *dam-a-ni ku-li-ni-ir* | ואת אשתו לחברו | `וְהִיא נִתְּנָה לְעַדְרִיאֵל הַמְּחֹלָתִי לְאִשָּׁה` (שמואל א יח:יט) | [equivalent] | A promised bride given to another (Merab). |
| LH epil. 3265' | *irnitti Marduk* | תשועת מרדוך | `וַיַּעַשׂ יְהוָה תְּשׁוּעָה גְדוֹלָה` (שמואל א יט:ה) | [equivalent] | `תשועה` = victory; `נצחון` avoided (*dāru* = `נצח`). |
| LH §136, 1568' | *ittābit* | וברח, | `וַיֵּלֶךְ וַיִּבְרַח וַיִּמָּלֵט` (שמואל א יט:יב) | [equivalent] | דוד בורח, ומיכל אשתו ניתנת לפלטי (שמואל א כה:מד); ראו 1576', 1582'. מן הזיכרון |
| EST 389 | same | same | `וַתֹּאמֶר חֹלֶה הוּא` (שמואל א יט:יד) | [equivalent] | A pretended illness to evade the king. Our proposal. |
| EST 511–512 | same | same | `וַיִּכְרֹת יְהוֹנָתָן עִם בֵּית דָּוִד וּבִקֵּשׁ יְהוָה מִיַּד אֹיְבֵי דָוִד` (שמואל א כ:טז) | [equivalent] | `בִּקֵּשׁ מִיַּד` as the sanction clause of a covenant, invoking the god. Our proposal. |
| EST 268 | same | same | `וַיּוֹסֶף יְהוֹנָתָן לְהַשְׁבִּיעַ אֶת דָּוִד בְּאַהֲבָתוֹ אֹתוֹ כִּי אַהֲבַת נַפְשׁוֹ אֲהֵבוֹ` (שמואל א כ:יז) | [cognate] + [equivalent] | Oath, love and *nefesh* between the king's son and the future king. Our proposal for the triad. |
| EST 389 | *murṣu lā paṭru* (T *lā ellu*) … *ina muḫḫi ramanīkunu tašakkanāni* | מחלה שלא נפטרו ממנה (?) על עצמכם תשימו | `כִּי אָמַר מִקְרֶה הוּא בִּלְתִּי טָהוֹר הוּא כִּי לֹא טָהוֹר` (שמואל א כ:כו) | [equivalent] | **Tayinat's "unclean illness"**: impurity as the explanation of an absence from a royal rite. Our proposal. |
| EST 193 | *ša duāki* | את אשר להרוג | `כִּי בֶן מָוֶת הוּא` (שמואל א כ:לא) | [equivalent] |  |
| LH §133, 1524' | *inaṣṣar* | תנצור, | `אִם נִשְׁמְרוּ הַנְּעָרִים אַךְ מֵאִשָּׁה` (שמואל א כא:ה) | [equivalent] | ה"שמירה" מן המגע המיני. הצעה שלנו |
| IN IN §10, 10.20 | *ŠÀ É-ŠU-ma-za-⸢*kán⸣ IT-TI DAM-ŠU* le-e ku-iš-ki še-eš-zi* | ואילו בתוך ביתו אף אחד אַל ישכב עם אשתו! | `כִּי אִם לֶחֶם קֹדֶשׁ יֵשׁ אִם נִשְׁמְרוּ הַנְּעָרִים אַךְ מֵאִשָּׁה` (שמואל א כא:ה) | [equivalent] | ההתנזרות מאשה כתנאי לקדושה. הקבלה טיפולוגית |
| EST 144 | same | same | `כִּי קְשַׁרְתֶּם כֻּלְּכֶם עָלַי וְאֵין גֹּלֶה אֶת אָזְנִי` (שמואל א כב:ח) | [equivalent] | Saul accuses his servants of conspiracy for not informing him: `קשר` (*bārtu*), `גָּלָה אֹזֶן` (*uznā puttû*) and `חֹלֶה עַל` (*marṣu ina muhhi*, 208) in one verse. The combination is our proposal. |
| EST 208 | *ina muhhi bēt bēlīšu marṣašūni* | ועל בית אדוניו חולה | `וְאֵין חֹלֶה מִכֶּם עָלַי וְגֹלֶה אֶת אָזְנִי` (שמואל א כב:ח) | [equivalent] | `חֹלֶה עַל` = concerned for the king; see 144. Our proposal. |
| EST 144 | same | same | `וְלֹא גָלוּ אֶת אָזְנִו` (שמואל א כב:יז) | [equivalent] | The priests killed for not informing the king. |
| EST 66–67 | same | same | `אִם אֶעֱשֶׂה אֶת הַדָּבָר הַזֶּה לַאדֹנִי לִמְשִׁיחַ יְהוָה לִשְׁלֹחַ יָדִי בּוֹ` (שמואל א כד:ו) | [equivalent] | David's oath against raising his hand, in the `אִם` form. |
| EST 140 | *šumšunu zarʾušunu* | את שמם, את זרעם | `אִם תַּכְרִית אֶת זַרְעִי אַחֲרָי וְאִם תַּשְׁמִיד אֶת שְׁמִי מִבֵּית אָבִי` (שמואל א כד:כא) | [cognate] | Seed and name in an oath in the `אִם` form. Our proposal. |
| LH §169, 2031' | *pānīšu ubbalū* | את פניו ישאו; | `רְאִי שָׁמַעְתִּי בְקוֹלֵךְ וָאֶשָּׂא פָּנָיִךְ` (שמואל א כה:לה) | [equivalent] | דוד נענה לאביגיל: "נשיאת פנים" כהיענות |
| LH §136, 1568' | *ittābit* | וברח, | `וְשָׁאוּל נָתַן אֶת מִיכַל בִּתּוֹ אֵשֶׁת דָּוִד:  לְפַלְטִי בֶן לַיִשׁ אֲשֶׁר מִגַּלִּים` (שמואל א כה:מד) | [equivalent] | אשת הבורח ניתנת לאחר. מן הזיכרון |
| MAL §36, r v 2–3 | *sinnilta ša kī aššitišu iddan u aššassu ilaqqe* | אשה אשר כאשתו יתן, ואת אשתו יקח | `וְשָׁאוּל נָתַן אֶת מִיכַל בִּתּוֹ אֵשֶׁת דָּוִד לְפַלְטִי בֶן לַיִשׁ` (שמואל א כה:מד) | [divergence] | The absent husband's wife given to another and taken back (2 Sam 3:15 `וַיִּקָּחֶהָ מֵעִם אִישׁ`); MAL compensates the second husband. Our proposal. |
| UN §15, 281 | *ba-an-na-šum₂* | נְתָנָהּ | `וְשָׁאוּל נָתַן אֶת מִיכַל בִּתּוֹ אֵשֶׁת דָּוִד:  לְפַלְטִי בֶן לַיִשׁ` (שמואל א כה:מד) | [equivalent] | The same act (restored verb). |
| EST 66–67 | *qātkunu ana lemutti ina libbīšu tubbalāni* | את ידכם לרעה / תשלחו בו | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | Also 105–106. |
| EST 271–272 | same | same | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | The formula (see 66–67). |
| EST 365 | *qātka ina lemutti ina libbišunu ubbil* | את ידך לרעה שלח בהם | `כִּי מִי שָׁלַח יָדוֹ בִּמְשִׁיחַ יְהוָה וְנִקָּה` (שמואל א כו:ט) | [equivalent] | The formula, in the inciter's imperative to the new king. |
| LH §133, 1517' | *iššalilma* | נשבה, | `וַיִּשְׁבּוּ אֶת הַנָּשִׁים אֲשֶׁר בָּהּ` (שמואל א ל:ב) | [equivalent] | שבי במלחמה, שבו נלקחות גם הנשים (נשי דוד, ל:ה). הצעה שלנו |
| LH §32, 724 | *ekallum ipaṭṭaršu* | `ההיכל יִפְטְרֶנּוּ.` | `וּמִי יִשְׁמַע לָכֶם לַדָּבָר הַזֶּה כִּי כְּחֵלֶק הַיֹּרֵד בַּמִּלְחָמָה וּכְחֵלֶק הַיֹּשֵׁב עַל הַכֵּלִים יַחְדָּו יַחֲלֹקוּ` (שמואל א ל:כד) | [equivalent] | דין מלכותי שמגן על אנשי הצבא. הצעה שלנו (רחוקה). |
| EST T i 8 | *bēl pēthallāti* | בעלי הפרשים | `וְהִנֵּה הָרֶכֶב וּבַעֲלֵי הַפָּרָשִׁים` (שמואל ב א:ו) | [equivalent] | Tayinat only; nearly word for word. Our proposal. |
| EST 531–532 | *zunnu nalšu ina libbi eqlātikunu tamerātikunu lū lā illak* | גשם וטל בתוך שדותיכם, נאותיכם אל יבוא | `הָרֵי בַגִּלְבֹּעַ אַל טַל וְאַל מָטָר עֲלֵיכֶם וּשְׂדֵי תְרוּמֹת` (שמואל ב א:כא) | [equivalent] | A curse of no dew and no rain on fields, with `אַל`. Our proposal. |
| EST 635–636 | same | same | `הֲלָנֶצַח תֹּאכַל חֶרֶב` (שמואל ב ב:כו) | [equivalent] | In the same story `נְטֵה לְךָ עַל יְמִינְךָ אוֹ עַל שְׂמֹאלֶךָ` (2:21) and `וְלֹא נָטָה לָלֶכֶת עַל הַיָּמִין וְעַל הַשְּׂמֹאול` (2:19): right and left and the devouring sword together. Our proposal. |
| EST 648 | same | same | `הֲלוֹא יָדַעְתָּה כִּי מָרָה תִהְיֶה בָּאַחֲרוֹנָה` (שמואל ב ב:כו) | [equivalent] | Brothers made bitter to each other, in the verse of the devouring sword (635). Our proposal. |
| LH §136, 1576' | *iṣṣabat* | תפש, | `תְּנָה אֶת אִשְׁתִּי אֶת מִיכַל אֲשֶׁר אֵרַשְׂתִּי לִי בְּמֵאָה עָרְלוֹת פְּלִשְׁתִּים` (שמואל ב ג:יד) | [equivalent] | הבעל ששב (דוד, שברח) תובע את אשתו שניתנה לאחר |
| LH §136, 1582' | *ul itâr* | לא תשוב. | `וַיִּקָּחֶהָ מֵעִם אִישׁ מֵעִם פַּלְטִיאֵל בֶּן לָוִשׁ (לָיִשׁ)` (שמואל ב ג:טו) | [divergence] | דוד, שברח, מחזיר את מיכל. מן הזיכרון |
| LH §161, 1907' | *ul iḫḫaz* | לא ישא. | `וַיִּשְׁלַח אִישׁ בֹּשֶׁת וַיִּקָּחֶהָ מֵעִם אִישׁ מֵעִם פַּלְטִיאֵל בֶּן לָוִשׁ (לָיִשׁ)` (שמואל ב ג:טו) | [equivalent] | מיכל נלקחת מבעלה השני ומוחזרת לדוד; LH אוסר על החבר לשאת את הכלה. הצעה שלנו |
| EST 256 | same | same | `וַיָּמָת בְּדַם עֲשָׂהאֵל אָחִיו` (שמואל ב ג:כז) | [equivalent] | Blood vengeance (Joab–Abner). |
| EST 470 | *rimṭu* … (T) *dāmēkunu* | זיבה (?) … {תיינת: דמיכם} | `וְאַל יִכָּרֵת מִבֵּית יוֹאָב זָב וּמְצֹרָע וּמַחֲזִיק בַּפֶּלֶךְ וְנֹפֵל בַּחֶרֶב וַחֲסַר לָחֶם` (שמואל ב ג:כט) | [equivalent] | A biblical curse list with discharge, leprosy, sword and hunger (cf. 470, 419, 455, 449). Depends on *rimṭu* = discharge. Our proposal. |
| EST 616 | *kî pilaqqi lušaṣbirūkunu* | כפלך יסחררו אתכם | `וְאַל יִכָּרֵת מִבֵּית יוֹאָב זָב וּמְצֹרָע וּמַחֲזִיק בַּפֶּלֶךְ וְנֹפֵל בַּחֶרֶב וַחֲסַר לָחֶם` (שמואל ב ג:כט) | [cognate] | *pilaqqu* = `פֶּלֶךְ`; a curse list where "holding the spindle" (effeminacy) stands beside leprosy, sword and lack of bread, as in EST. From memory (the spindle curse; Hillers 1964). |
| EST 256 | same | same | `הֲלוֹא אֲבַקֵּשׁ אֶת דָּמוֹ מִיֶּדְכֶם וּבִעַרְתִּי אֶתְכֶם מִן הָאָרֶץ` (שמואל ב ד:יא) | [equivalent] | David avenges the heir of Saul's house on his murderers: "blood" and "from the land" (*ina māti*). Our proposal. |
| EST 627 | same | same | `וַיְקַצְּצוּ אֶת יְדֵיהֶם וְאֶת רַגְלֵיהֶם` (שמואל ב ד:יב) | [equivalent] | Hands and feet cut off (also Judg 1:6). `קצץ` kept out. |
| LH §21, 574 | idem | idem | `וַיַּהַרְגוּם וַיְקַצְּצוּ אֶת יְדֵיהֶם וְאֶת רַגְלֵיהֶם וַיִּתְלוּ עַל הַבְּרֵכָה בְּחֶבְרוֹן` (שמואל ב ד:יב) | [equivalent] | Same condition; the killed are exposed at a public place. |
| LH prol. 51 | *rē'ûm* | הרועה | `אַתָּה תִרְעֶה אֶת עַמִּי אֶת יִשְׂרָאֵל` (שמואל ב ה:ב) | [cognate] | Shepherd-king; also 253. |
| LI prol. 22 | *sipa ĝeš-tuku* | הרועה השומע | `אַתָּה תִרְעֶה אֶת עַמִּי אֶת יִשְׂרָאֵל` (שמואל ב ה:ב) | [equivalent] | The king as shepherd (*sipa* = *rēʾû*, LH 51 `הרועה`). |
| LH prol. 279 | idem | idem | `וַהֲקִימֹתִי אֶת זַרְעֲךָ אַחֲרֶיךָ` (שמואל ב ז:יב) | [equivalent] |  |
| LH prol. 26 | *ukinnušum* | כוננו לו | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | [cognate] | *kânu* D = `כונן`. From memory (royal-inscription language). |
| LH epil. 3225'–3226' | *lē'ûtī šāninam ul išu* | יכולתי מתחרה אין לה | `אֵין כָּמוֹךָ וְאֵין אֱלֹהִים זוּלָתֶךָ` (שמואל ב ז:כב) | [divergence] | Incomparability said of God in the Bible. Our proposal. |
| HL PT § X, 52 | *n=aš mān karmalaššai* | והוא, אם יהיה נָכֶה, | `עוֹד בֵּן לִיהוֹנָתָן נְכֵה רַגְלָיִם` (שמואל ב ט:ג) | [equivalent] | הנכות הקבועה של הרגל |
| LH §27, 649 | *utarrūšumma* | `ישיבו לו,` | `וַהֲשִׁבֹתִי לְךָ אֶת כָּל שְׂדֵה שָׁאוּל אָבִיךָ` (שמואל ב ט:ז) | [equivalent] | המלך משיב את השדה. הצעה שלנו. |
| HL HL1 §47a, 268 | *n=an=ši pāi* | ואותו לו ייתן. | `וַהֲשִׁבֹתִי לְךָ אֶת כָּל שְׂדֵה שָׁאוּל אָבִיךָ; וְאַתָּה תֹּאכַל לֶחֶם עַל שֻׁלְחָנִי תָּמִיד` (שמואל ב ט:ז) | [equivalent] | אותו צירוף בדיוק: מלך המעניק שדות, ולחם משולחנו כסימן לחסות; `כִּי עַל שֻׁלְחַן הַמֶּלֶךְ תָּמִיד הוּא אֹכֵל` (שמואל ב ט:יג) |
| LH §176, 2169' | *bīšam iršû* | מטלטלים היו להם, | `וּלְצִיבָא חֲמִשָּׁה עָשָׂר בָּנִים וְעֶשְׂרִים עֲבָדִים` (שמואל ב ט:י) | [equivalent] | עבד (ציבא, "עבד", שמואל ב ט:ב) שיש לו בית, בנים ורכוש. הצעה שלנו |
| LH §127, 1459' | *u muttassu* | ואת מחציתו | `וַיְגַלַּח אֶת חֲצִי זְקָנָם` (שמואל ב י:ד) | [equivalent] | גילוח חצי (שיער) כהשפלה פומבית. הצעה שלנו |
| LH §127, 1460' | *ugallabū* | יגלחו. | `וַיְגַלַּח אֶת חֲצִי זְקָנָם` (שמואל ב י:ד) | [equivalent] | *gullubu* ו`גִּלַּח` – אותו בניין ואותו מעשה, שורש אחר |
| MAL §18, o ii 80 | *igaddimūš* | יגדמוהו | `וַיְגַלַּח אֶת חֲצִי זְקָנָם` (שמואל ב י:ד) | [equivalent] | Hair cut as humiliation (if *gadāmu* is the hair). |
| UN 335–338 | *ARAD₂-de₃ dumu-gi₇-ra i₃-ni-ra, {ki}kiši₄-ni u₃-ta-ak, iri im-nigin₂-nigin₂* | אם עבד את בן החורין מחץ, את חציו משיעשו, את העיר יסובבוהו | `וַיְגַלַּח אֶת חֲצִי זְקָנָם` (שמואל ב י:ד) | [equivalent] | The slave who strikes a free man is half-shaved(?) and paraded – the humiliation of David's envoys; cf. LH §205 (ear cut off). "Shaved" is CDLI's interpretation of *ak* "do". |
| UN prol. 169–171 | *lu₂ 1 udu-ra lu₂ 1 gu₄-e ba-ra-na-an-ĝar* | את איש הכבש האחד לאיש השור האחד לא שמתי | `וְלָרָשׁ אֵין כֹּל כִּי אִם כִּבְשָׂה אַחַת קְטַנָּה אֲשֶׁר קָנָה וַיְחַיֶּהָ` (שמואל ב יב:ג) | [equivalent] | Nathan's parable: the man of flocks and herds takes the poor man's one lamb – exactly what the king says he prevented. Single witness (ex02), cases inverted (Decision 3). |
| LH §8, 409 | *adi šalāšâšu* | `עד פי שלושים` | `וְאֶת הַכִּבְשָׂה יְשַׁלֵּם אַרְבַּעְתָּיִם` (שמואל ב יב:ו) | [equivalent] | מן הזיכרון |
| HL HL1 §59, 341 | *takku UDU.A.LUM kuiški tāyezzi* | אם מישהו יגנוב אַיִל, | `וְאֶת הַכִּבְשָׂה יְשַׁלֵּם אַרְבַּעְתָּיִם` (שמואל ב יב:ו) | [equivalent] | דוד פוסק לפי התעריף של התורה |
| LH §153, 1812' | *mussa ušdīk* | את בעלה (בידי אחר) הרגה | `וְאֹתוֹ הָרַגְתָּ בְּחֶרֶב בְּנֵי עַמּוֹן` (שמואל ב יב:ט) | [equivalent] | Killing through another, for a woman. Our proposal. |
| EST 428–429 | same | same | `וְלָקַחְתִּי אֶת נָשֶׁיךָ לְעֵינֶיךָ וְנָתַתִּי לְרֵעֶיךָ וְשָׁכַב עִם נָשֶׁיךָ` (שמואל ב יב:יא) | [equivalent] | Wives to another "before your eyes". Our proposal. |
| MAL §12, o ii 15–16 | *aʾīle iṣṣabassu lanīkkime iqtibiašše* | איש תְּפָשָׂהּ, "אבוא עלייך!" – אמר לה | `וַיַּחֲזֶק בָּהּ וַיֹּאמֶר לָהּ בּוֹאִי שִׁכְבִי עִמִּי אֲחוֹתִי` (שמואל ב יג:יא) | [equivalent] | Seizing and direct speech (Amnon and Tamar). Our proposal. |
| EST 255 | same | same | `וְנַשְׁמִידָה גַּם אֶת הַיּוֹרֵשׁ` (שמואל ב יד:ז) | [equivalent] | Blood vengeance for a brother that wipes out name and remnant. |
| LH epil. 3616'–3617' | *adi napištašu ibellû* | ועד אשר נפשו תכבה | `וְכִבּוּ אֶת גַּחַלְתִּי אֲשֶׁר נִשְׁאָרָה` (שמואל ב יד:ז) | [equivalent] | Extinguished life / name. Our proposal. |
| MAL §10, o i 100 | *dāʾikānūte* | את ההורגים | `תְּנִי אֶת מַכֵּה אָחִיו וּנְמִתֵהוּ בְּנֶפֶשׁ אָחִיו` (שמואל ב יד:ז) | [equivalent] | The family demands the killer. |
| MALB §2, o ii 16–21 | *napšāte igmur … zittišu ilaqqe* | `נפשות כילה … ואת חלקו יקח` | `תְּנִי אֶת מַכֵּה אָחִיו וּנְמִתֵהוּ בְּנֶפֶשׁ אָחִיו אֲשֶׁר הָרָג וְנַשְׁמִידָה גַּם אֶת הַיּוֹרֵשׁ` (שמואל ב יד:ז) | [divergence] | Fratricide within the undivided family; in the Tekoite's parable the family wants both the killer's life and the inheritance, here the avenger takes one or the other (from memory: the comparison is known). |
| LH §129, 1479' | *u šarrum warassu uballaṭ* | והמלך את עבדו יחיה | `וַיֹּאמֶר חַי יְהוָה אִם יִפֹּל מִשַּׂעֲרַת בְּנֵךְ אָרְצָה` (שמואל ב יד:יא) | [equivalent] | Royal pardon in narrative only; no king in the Torah's laws. Our proposal. |
| LH epil. 3435'–3436' | *tabāk napištišu kīma mê* | הגרת נפשו כמים | `כִּי מוֹת נָמוּת וְכַמַּיִם הַנִּגָּרִים אַרְצָה` (שמואל ב יד:יד) | [equivalent] | Our proposal. |
| UN prol. 140 | *{uruda}ba-an si-sa₂ lugal-la* | סאת נחושת ישרה של המלך | `וְשָׁקַל אֶת שְׂעַר רֹאשׁוֹ מָאתַיִם שְׁקָלִים בְּאֶבֶן הַמֶּלֶךְ` (שמואל ב יד:כו) | [equivalent] | The king's measure is the standard; *si-sa₂* "straight" (`ישרה`, the root of `מישרים`) vs Torah's `צֶדֶק`. |
| HL HL2 §105, 105.1 | *[ták-ku A.ŠÀ-an? ku-i]š-ki lu-uk-[ki-iz-zi …]* | [אם מישהו] יצית [שדה?], [ו]בתוכו – מניב, | `וַיַּצִּתוּ עַבְדֵי אַבְשָׁלוֹם אֶת הַחֶלְקָה בָּאֵשׁ` (שמואל ב יד:ל) | [equivalent] | הצתת שדה; *lukk-* = `הצית`, ו־`בער` של שמות כב נשאר של התורה |
| EST 213 | same | same | `וַיְהִי הַקֶּשֶׁר אַמִּץ וְהָעָם הוֹלֵךְ וָרָב אֶת אַבְשָׁלוֹם` (שמואל ב טו:יב) | [equivalent] |  |
| EST 50–51 | *ina muhhīšu lā tamaqqutāni lā tamuttāni* | בעדו לא תיפלו, לא תמותו | `אִם לְמָוֶת אִם לְחַיִּים כִּי שָׁם יִהְיֶה עַבְדֶּךָ` (שמואל ב טו:כא) | [equivalent] | Ittai's loyalty oath to David, also in the `אִם` form. Our proposal. |
| EST 229–231 | *ina muhhi X lā tamaqqutāni lā tamuttāni* | בעד … לא תיפלו, לא תמותו | `אִם לְמָוֶת אִם לְחַיִּים כִּי שָׁם יִהְיֶה עַבְדֶּךָ` (שמואל ב טו:כא) | [equivalent] | = 50–51. |
| EST 234 | *milku lā damqu* | עצה לא נאה | `סַכֶּל נָא אֶת עֲצַת אֲחִיתֹפֶל יְהוָה` (שמואל ב טו:לא) | [equivalent] | The king's counsellor turned conspirator. |
| MALB §3, o ii 25–26 | *zittišu šarre kī libbišu* | `וחלקו – המלך כְּלִבּוֹ` | `הִנֵּה לְךָ כֹּל אֲשֶׁר לִמְפִיבֹשֶׁת` (שמואל ב טז:ד) | [equivalent] | The king disposes of the property of one suspected of disloyalty (הצעה שלנו). |
| EST 604–605 | same | same | `כִּי נִבְאַשְׁתָּ אֶת אָבִיךָ` (שמואל ב טז:כא) | [cognate] | Our proposal. |
| EST 607 | *lihnaqūkunu* | יחנקו | `וַיְצַו אֶל בֵּיתוֹ וַיֵּחָנַק` (שמואל ב יז:כג) | [cognate] | *hanāqu* = `חנק`; lexical. |
| LH epil. 3595' | idem | idem | `אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל ב יח:יח) | [cognate] | Absalom's stele instead of a son. |
| UN prol. 174 | *su-a-su-a-mu-ne* | בני בשרי | `אַחַי אַתֶּם עַצְמִי וּבְשָׂרִי אַתֶּם` (שמואל ב יט:יג) | [equivalent] | Kin as "flesh" (*su* "flesh, body"). |
| EST 331 | *ina muḫḫi abīšu ušanzirūni* | אשר אצל אביו [השניאו] | `וַיְרַגֵּל בְּעַבְדְּךָ אֶל אֲדֹנִי הַמֶּלֶךְ` (שמואל ב יט:כח) | [equivalent] | Slander to the king. Verb partly restored. |
| LH §176, 2183' | *izuzzūma* | יחלוקו, | `אַתָּה וְצִיבָא תַּחְלְקוּ אֶת הַשָּׂדֶה` (שמואל ב יט:ל) | [equivalent] | דוד מחלק את נכסי שאול בין מפיבושת ובין ציבא העבד; כאן מחלקים בין בעל העבד ובין בת האיש. הצעה שלנו |
| MAL §40, r v 58 | *esirtu* | פילגש | `וַתִּהְיֶינָה צְרֻרוֹת עַד יוֹם מֻתָן` (שמואל ב כ:ג) | [equivalent] | *esirtu* "the confined one" ~ the "shut-up" concubines. Our proposal. |
| MAL §41, r vi 1 | *esirtu* "the confined one" | פילגש | `וַתִּהְיֶינָה צְרֻרוֹת עַד יוֹם מֻתָן` (שמואל ב כ:ג) | [equivalent] | "The shut-up" concubines; close in sense to *esirtu*. Our proposal. |
| EST 552–554 | *errēšunu ultu šēpēšunu karkūni … likkarkū* | ומעיהם מעל רגליהם כרוכים … ייכרכו | `וַיִּשְׁפֹּךְ מֵעָיו אַרְצָה` (שמואל ב כ:י) | [equivalent] | Spilled entrails. Tayinat (553): the sons' and daughters' entrails only. |
| MAL §10, o ii 3 | *lū mār lū mārat* | בין בן, בין [בת] | `יוּתַּן לָנוּ שִׁבְעָה אֲנָשִׁים מִבָּנָיו` (שמואל ב כא:ו) | [equivalent] | Sons handed over for blood guilt. Our proposal; broken context. |
| LH prol. 31 | idem | idem | `מוֹשֵׁל בָּאָדָם צַדִּיק מוֹשֵׁל יִרְאַת אֱלֹהִים` (שמואל ב כג:ג) | [equivalent] | Followed (23:4) by the sun image, as 40–44 follow here. |
| LH prol. 40–44 | idem | idem | `וּכְאוֹר בֹּקֶר יִזְרַח שָׁמֶשׁ` (שמואל ב כג:ד) | [equivalent] | The just ruler as the sun. From memory. |
| EST 12 | *adê … iškunūni* | שׂם אתכם אמנה | `כִּי בְרִית עוֹלָם שָׂם לִי` (שמואל ב כג:ה) | [equivalent] | *adê šakānu* ~ `שׂים בְּרִית` of David's dynastic covenant; ⟨ ⟩ in Nimrud, Tayinat T i 19. Our proposal. |
| HL HL2 §178, 178.1 | *ŠA GU₄.APIN.LÁ ⸢12⸣ GÍN KÙ.BABBAR ŠI-IM-ŠU …* | של שור חרישה – שנים עשר שקל כסף מחירו; של פַּר אחד – עשרה שקלים כסף מחירו; | `וַיִּקֶן דָּוִד אֶת הַגֹּרֶן וְאֶת הַבָּקָר בְּכֶסֶף שְׁקָלִים חֲמִשִּׁים` (שמואל ב כד:כד) | [equivalent] | מחיר בקר בשקלי כסף; [absent] לתורה אין מחירון |
| EST 55–57 | a brother on the throne | … על כסא אשור תושיבו | `וַאֲדֹנִיָּה בֶן חַגִּית מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [equivalent] | The scenario the clause forbids. |
| EST 214, 224 | a pretender from the heir's brothers | מקרב אחיו … את כסא אשור תתפישו | `וַאֲדֹנִיָּה בֶן חַגִּית מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [equivalent] |  |
| EST 241 | same | same | `מִתְנַשֵּׂא לֵאמֹר אֲנִי אֶמְלֹךְ` (מלכים א א:ה) | [cognate] | The usurper "lifts himself" to kingship. Our proposal. |
| EST 212 | same | same | `וַיִּקְרָא אֶת כָּל אֶחָיו בְּנֵי הַמֶּלֶךְ` (מלכים א א:ט) | [equivalent] | Adonijah's gathering of the heir's brothers. |
| EST 351–352 | *abūka adê … issakan uttammannāši* | אביך אמנה על⟨יך⟩ אתנו שׂם, השביע אותנו | `אַתָּה נִשְׁבַּעְתָּ בַּיהוָה אֱלֹהֶיךָ לַאֲמָתֶךָ כִּי שְׁלֹמֹה בְנֵךְ יִמְלֹךְ אַחֲרָי` (מלכים א א:יז) | [equivalent] | The father's oath for the heir, invoked in the brothers' rivalry. Our proposal. Tayinat T v 7–8. |
| EST 60 | *hannumma lā tadaggalāni* | אל זה עצמו לא תביטו | `עֵינֵי כָל יִשְׂרָאֵל עָלֶיךָ` (מלכים א א:כ) | [equivalent] | *dagālu* "look to" = serve. Our proposal. |
| EST 154 | *rikis paššūri šatê kāsi* | בעריכת שולחן, בשתיית כוס | `וְהִנָּם אֹכְלִים וְשֹׁתִים לְפָנָיו וַיֹּאמְרוּ יְחִי הַמֶּלֶךְ אֲדֹנִיָּהוּ` (מלכים א א:כה) | [equivalent] | Adonijah's feast, the pretender's banquet with the king's sons. Our proposal. |
| EST 47–48 | *ina kussie šarrūti tušeššabba* | על כסא / המלכות תושיבו | `וְהוּא יֵשֵׁב עַל כִּסְאִי תַּחְתָּי` (מלכים א א:ל) | [equivalent] | Succession fixed by oath in the father's lifetime; *ina kūmuššu* (56) = `תַּחְתָּי`. Our proposal for the verbal match. |
| EST 333 | the gods' word on the heir | אשר אשור, שמש ו[אדד] עליו אמרו | `כִּי כַּאֲשֶׁר נִשְׁבַּעְתִּי לָךְ … כִּי שְׁלֹמֹה בְנֵךְ יִמְלֹךְ אַחֲרַי` (מלכים א א:ל) | [equivalent] | The word pronounced in advance on the heir. Adad restored. |
| EST 305 | same | same | `וְהָעָם מְחַלְּלִים בַּחֲלִלִים וּשְׂמֵחִים שִׂמְחָה גְדוֹלָה` (מלכים א א:מ) | [equivalent] |  |
| EST 300 | *ana šarrūti lū nabi šumšu* | למלכות ייקרא שמו | `אֶת שֵׁם שְׁלֹמֹה מִשְּׁמֶךָ וִיגַדֵּל אֶת כִּסְאוֹ מִכִּסְאֶךָ` (מלכים א א:מז) | [equivalent] | Courtiers' wish for the successor's name at his accession. Our proposal. |
| EST 46 | *ana šīmti ittalak* | ילך לגורלו | `אָנֹכִי הֹלֵךְ בְּדֶרֶךְ כָּל הָאָרֶץ` (מלכים א ב:ב) | [equivalent] | David before handing the kingdom to Solomon. |
| EST 659 | *Enlil bēl kussî kussâkunu lušabalkit* | אנליל, אדון הכסא, את כסאכם יהפוך | `לֹא יִכָּרֵת לְךָ אִישׁ מֵעַל כִּסֵּא יִשְׂרָאֵל` (מלכים א ב:ד) | [divergence] | The conditional promise about the throne (`אִם יִשְׁמְרוּ`), the reverse of the curse. Our proposal. |
| EST 475 | *arratu maruštu* | מארה נמרצת | `וְהוּא קִלְלַנִי קְלָלָה נִמְרֶצֶת` (מלכים א ב:ח) | [cognate] (*marṣu* = `נִמְרָץ`) | "A grievous curse". Our proposal. |
| LH epil. 3633' | *maruštam* | נמרצת | `וְהוּא קִלְלַנִי קְלָלָה נִמְרֶצֶת` (מלכים א ב:ח) | [equivalent] | *marṣu* = נמרץ (EST); Hebrew "grievous curse". |
| EST 317 | *kussie abīšu* | כסא אביו | `וּשְׁלֹמֹה יָשַׁב עַל כִּסֵּא דָּוִד אָבִיו` (מלכים א ב:יב) | [equivalent] |  |
| EST 362 | *ina kussie šarrūte ittūšib* | על כסא המלכות ישב | `וּשְׁלֹמֹה יָשַׁב עַל כִּסֵּא דָּוִד אָבִיו; וַתִּכֹּן מַלְכֻתוֹ מְאֹד` (מלכים א ב:יב) | [equivalent] | Accession followed at once by the brother problem (Adonijah, 2:13–25), as §31 follows. Our proposal. |
| EST 346 | a brother separated from the heir | מלפני אחיו תפרידו אותו | `וַתִּסֹּב הַמְּלוּכָה וַתְּהִי לְאָחִי` (מלכים א ב:טו) | [equivalent] | Adonijah's rivalry with Solomon. |
| EST 259 | same | same | `וְהֵשִׁיב יְהוָה אֶת דָּמוֹ עַל רֹאשׁוֹ` (מלכים א ב:לב) | [equivalent] | Solomon's succession purge: `השיב` + blood. Our proposal. |
| LH §16, 520 | *ḫalqam* | נמלט | `וַיִּבְרְחוּ שְׁנֵי עֲבָדִים לְשִׁמְעִי אֶל אָכִישׁ בֶּן מַעֲכָה מֶלֶךְ גַּת` (מלכים א ב:לט) | [equivalent] | And 2:40: Shimei fetches them back – the ANE extradition practice that Deut 23:16 forbids. Our proposal. |
| LI §12, 178′ | *ba-zah₂* | נמלט | `וַיִּבְרְחוּ שְׁנֵי עֲבָדִים לְשִׁמְעִי אֶל אָכִישׁ` (מלכים א ב:לט) | [equivalent] | Slaves who fled to another city and were fetched back (ב:מ): the practice LI regulates. |
| EST 352 | *uttammannāši* | השביע אותנו | `הֲלוֹא הִשְׁבַּעְתִּיךָ בַיהוָה` (מלכים א ב:מב) | [equivalent] | Solomon reminds Shimei of the oath. |
| EST 333 | same | same | `וְהַמַּמְלָכָה נָכוֹנָה בְּיַד שְׁלֹמֹה` (מלכים א ב:מו) | [cognate] | The heir's kingdom "established" after the elimination of his brother. Our proposal. |
| LH prol. 88–89 | *šar tašīmtim šēmû Šamaš* | מלך ההבחנה, השומע לשמש | `וְנָתַתָּ לְעַבְדְּךָ לֵב שֹׁמֵעַ לִשְׁפֹּט אֶת עַמְּךָ לְהָבִין בֵּין טוֹב לְרָע` (מלכים א ג:ט) | [equivalent] | Discernment + "hearing" (*šemû* = שמע [cognate]). Our proposal. |
| LH epil. 3313' | *tašīmtam išû* | הבחנה יש לו | `וְנָתַתָּ לְעַבְדְּךָ לֵב שֹׁמֵעַ לִשְׁפֹּט אֶת עַמְּךָ לְהָבִין בֵּין טוֹב לְרָע` (מלכים א ג:ט) | [equivalent] | Discernment for judging. |
| LH epil. 3223' | *šarrum ša in šarrī šūturu* | המלך אשר בין המלכים מרומם | `אֲשֶׁר כָּמוֹךָ לֹא הָיָה לְפָנֶיךָ וְאַחֲרֶיךָ לֹא יָקוּם כָּמוֹךָ` (מלכים א ג:יב) | [equivalent] | The incomparable king. Our proposal. |
| LH §194, 2495' | *irtakas* | התנתה, | `וַתָּקָם בְּתוֹךְ הַלַּיְלָה וַתִּקַּח אֶת בְּנִי מֵאֶצְלִי וַאֲמָתְךָ יְשֵׁנָה וַתַּשְׁכִּיבֵהוּ בְּחֵיקָהּ וְאֶת בְּנָהּ הַמֵּת הִשְׁכִּיבָה בְחֵיקִי` (מלכים א ג:כ) | [divergence] | החלפת ילד מת בילד חי, ומשפט המלך שמגלה זאת; כאן המינקת שהמירה את הילד המת (או מסרה את מקומו לילד אחר), והדיינים שמכוננים עליה. הצעה שלנו |
| LH §176, 2182' | *ana šinīšu* | לשניים | `גִּזְרוּ אֶת הַיֶּלֶד הַחַי לִשְׁנָיִם; וּתְנוּ אֶת הַחֲצִי לְאַחַת וְאֶת הַחֲצִי לְאֶחָת` (מלכים א ג:כה) | [equivalent] | חלוקה "לשניים", "את החצי … ואת החצי": אותו מבנה כמו 2182'–2188'. הצעה שלנו |
| LH epil. 3170' | *igigallu … ša Ea išīmam* | בתבונה אשר אאה גזר לי | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה וּתְבוּנָה הַרְבֵּה מְאֹד` (מלכים א ה:ט) | [equivalent] | The king's wisdom from the god. From memory. |
| LH epil. 3334'–3335' | *ša Šamaš kīnātim išrukušum* | אשר שמש נכונות מסר לו | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה` (מלכים א ה:ט) | [equivalent] |  |
| EST 207 | *ša bēlīšu iraʾʾamūni* | אשר את אדונו אוהב | `כִּי אֹהֵב הָיָה חִירָם לְדָוִד כָּל הַיָּמִים` (מלכים א ה:טו) | [equivalent] | First *râmu*: love = loyalty (Moran 1963, from memory). |
| HL HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, | `וַיַּעַל הַמֶּלֶךְ שְׁלֹמֹה מַס מִכָּל יִשְׂרָאֵל` (מלכים א ה:כז) | [equivalent] | עבודת הכפייה של המלך |
| EST 664 | *Ayaru* | אִיָּר | `בְּחֹדֶשׁ זִו הוּא הַחֹדֶשׁ הַשֵּׁנִי` (מלכים א ו:א) | [cognate] | `אִיָּר` (post-biblical) is the Babylonian month name; the Bible's second month is `זִו`. |
| MAL colophon, r viii 64 | *iti Ša-sarrāte ūmu 2* | ירח שַׁ־סַרָּאתֵה, יום שני | `בְּיֶרַח זִו` (מלכים א ו:לז) | [cognate] | *warḫu* = `יֶרַח` in a date. |
| HL HL1 §56, 317 | *ŠA {LÚ}TIBIRA Ú-UL kuiški arauwaš* | מחרשי־הנחושת אף אחד אינו פטור, | `וְאָבִיו אִישׁ צֹרִי חֹרֵשׁ נְחֹשֶׁת` (מלכים א ז:יד) | [equivalent] | "חרש נחושת", בעל המלאכה של המלך; שם הוא "בא אל המלך" לעבודתו |
| EST 409 | same | same | `אֵין בָּאָרוֹן רַק שְׁנֵי לֻחוֹת הָאֲבָנִים` (מלכים א ח:ט) | [divergence] | The tablets in the holy of holies, but not revered "as god". |
| LH prol. 97 | *ša kî šubat šamā'ī* | אשר כמושב השמים | `וְאַתָּה תִּשְׁמַע הַשָּׁמַיִם מְכוֹן שִׁבְתֶּךָ` (מלכים א ח:לט) | [equivalent] | Our proposal. |
| EST 152 | *libbakunu issīšu lā gammurūni* | לבכם עמו אינו שלם | `וְהָיָה לְבַבְכֶם שָׁלֵם עִם יְהוָה אֱלֹהֵינוּ` (מלכים א ח:סא) | [equivalent] | Heart + "with" + "whole", word for word. The exact match is our proposal. |
| LH epil. 3282'–3283' | idem | idem | `וְהָיָה לְבַבְכֶם שָׁלֵם עִם יְהוָה אֱלֹהֵינוּ` (מלכים א ח:סא) | [equivalent] |  |
| LH epil. 3284' | *likrubam* | יברך אותי | `וַיְבָרְכוּ אֶת הַמֶּלֶךְ` (מלכים א ח:סו) | [cognate?] | *karābu* ~ `ברך` (metathesis; debated). From memory. |
| LH §149, 1753' | *šeriktaša* | את שלוחיה | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ אֵשֶׁת שְׁלֹמֹה` (מלכים א ט:טז) | [equivalent] | The father's gift to his daughter. |
| LH §137, 1591' | *šeriktaša* | את שלוחיה | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ אֵשֶׁת שְׁלֹמֹה` (מלכים א ט:טז) | [equivalent] | מתנת האב לבתו, בדיוק *šeriktu* |
| LH §162, 1915' | *ana šeriktiša* | את שלוחיה | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ אֵשֶׁת שְׁלֹמֹה` (מלכים א ט:טז) | [equivalent] |  |
| LH §167, 2005' | *ileqqûma* | יקחו, | `שִׁלֻּחִים` (מלכים א ט:טז) | [equivalent] | השלוחים של כל אם עוברים לבניה בלבד (השוו §162, 1919' `של בניה הם`) |
| LH §173, 2134' | *šeriktaša* | את שלוחיה | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ אֵשֶׁת שְׁלֹמֹה` (מלכים א ט:טז) | [equivalent] | מתנת האב לבתו בנישואיה, בדיוק *šeriktu* |
| MAL §29, o iv 12 | *širku* | שלוחים | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ` (מלכים א ט:טז) | [equivalent] | The father's gift to his daughter (LH *šeriktu*). |
| LI §24, 287′–289′ | *saĝ-rig₇ e₂ ad-da-na-ta mu-un-tum₂-ma* | השלוחים אשר מבית אביה הובילה | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ` (מלכים א ט:טז) | [equivalent] | The father's gift to his daughter (*saĝ-rig₇* = *šeriktu*); = LH 1616′. |
| UN b030–b035 | *dam-ni ba-uš₂ … saĝ-rig₇ dam-na ḫe₂-na-de₆ … saĝ-rig₇ e₂ lu₂-na-ka ḫe₂-eb-gi₄* | ואשתו מתה … שלוחי אשתו יובלו לו … השלוחים אל בית אנשיה יושבו | `וַיִּתְּנָהּ שִׁלֻּחִים לְבִתּוֹ` (מלכים א ט:טז) | [equivalent] | The dowry (*šeriktu*, `שלוחים`) returns to the wife's family when the widower remarries (cf. LH §162–§163). |
| EST 281 | same | same | `הָעֹמְדִים לְפָנֶיךָ תָּמִיד` (מלכים א י:ח) | [equivalent] |  |
| LI prol. 53–55 | *niĝ₂-si-sa₂ ki-en-gi ki-uri i₃-ni-in-ĝar-ra-aš* | מישרים בשומר ואכד שמתי | `וַיְשִׂימְךָ לְמֶלֶךְ לַעֲשׂוֹת מִשְׁפָּט וּצְדָקָה` (מלכים א י:ט) | [equivalent] | *mīšaram šakānu*: the royal act of justice (debt and slave release) at the start of a reign – what follows in 56–70. |
| UN prol. 16, 80 | *ma₂ ma₂-gan{ki}* | ספינת מגן | `כִּי אֳנִי תַרְשִׁישׁ לַמֶּלֶךְ בַּיָּם עִם אֳנִי חִירָם` (מלכים א י:כב) | [equivalent] | The king's long-distance sea trade (Magan = Oman; cf. Solomon's Ophir fleet, מלכים א ט:כו). |
| HL HL2 §178, 178.6 | *1 ANŠE.KUR.RA.MUNUS.AL.[L]Á …* | סוסה אחת, של חמור זכר אחד, אתון אחת – מחירם כך ממש. | `וְסוּס בַּחֲמִשִּׁים וּמֵאָה; וְכֵן לְכָל מַלְכֵי הַחִתִּים` (מלכים א י:כט) | [divergence] | המקרא זוכר את "מלכי החתים" כקוני סוסים במאה וחמישים שקל; במחירון החתי סוס רתמה – עשרים |
| EST 152 | same | same | `וְלֹא הָיָה לְבָבוֹ שָׁלֵם עִם יְהוָה אֱלֹהָיו` (מלכים א יא:ד) | [equivalent] |  |
| EST 217 | *innabtūni* | ברחו | `וַיִּבְרַח מִצְרַיִם אֶל שִׁישַׁק מֶלֶךְ מִצְרַיִם` (מלכים א יא:מ) | [equivalent] | A royal rival who fled abroad and returned to rule. |
| HL HL1 §55, 304 | *mān DUMU{MEŠ} {URU}ḪA-AT-TI LÚ{MEŠ} IL-KI uēr* | כאשר בני חַתִּי, אנשי־הַהֲלָךְ, באו, | `אָבִיךָ הִקְשָׁה אֶת עֻלֵּנוּ; וְאַתָּה עַתָּה הָקֵל מֵעֲבֹדַת אָבִיךָ הַקָּשָׁה` (מלכים א יב:ד) | [equivalent] | נתינים באים אל המלך להתלונן על עבודת הכפייה |
| LH §202, 2542' | *qinnaz alpim* | שוט שור | `אָבִי יִסַּר אֶתְכֶם בַּשּׁוֹטִים` (מלכים א יב:יא) | [equivalent] |  |
| EST 212–213 | *puḫru … ana issēn ina libbikunu šarrūtu taddanāni* | אספה … לאחד מכם את המלכות תתנו | `וַיִּקְרְאוּ אֹתוֹ אֶל הָעֵדָה וַיַּמְלִיכוּ אֹתוֹ עַל כָּל יִשְׂרָאֵל` (מלכים א יב:כ) | [equivalent] | An assembly makes one of its own king. |
| EST 468 | same | same | `וַיִּמְצָאֵהוּ אַרְיֵה בַּדֶּרֶךְ וַיְמִיתֵהוּ` (מלכים א יג:כד) | [equivalent] | The man of God who broke the word given at Bethel. Our proposal. |
| EST 630–631 | *kî appāri ina mê lunnišūkunu kî qanê ina riksi nakarkunu lušallipkunu* | כאגמון במים יחלישו אתכם; כקנים מן האגודה אויבכם ישלוף אתכם | `וְהִכָּה יְהוָה אֶת יִשְׂרָאֵל כַּאֲשֶׁר יָנוּד הַקָּנֶה בַּמַּיִם וְנָתַשׁ אֶת יִשְׂרָאֵל מֵעַל הָאֲדָמָה הַטּוֹבָה הַזֹּאת` (מלכים א יד:טו) | [equivalent] | The reed in water, then the uprooting, in the same order; `יָנוּד` matches only P&W's reading "sway" (SAAo: "weaken"; open decision 2). *qanû* = `קָנֶה` [cognate]. Our proposal. |
| HL HL2 §126, 126.2 | *6 GÍN.GÍN KÙ.BABBAR pa-a-i ták-ku I-NA KÁ É.GAL {GIŠ}ŠUKUR ZABAR* | שישה שקלים כסף ייתן. אם בשער ההיכל חנית אָרָד | `וְהִפְקִיד עַל יַד שָׂרֵי הָרָצִים הַשֹּׁמְרִים פֶּתַח בֵּית הַמֶּלֶךְ` (מלכים א יד:כז) | [equivalent] | נשק משמר המלך בפתח בית המלך |
| EST 198 | *ina ēkalli bārtu* | בהיכל קשר | `וַיִּקְשֹׁר עָלָיו עַבְדּוֹ זִמְרִי שַׂר מַחֲצִית הָרָכֶב` (מלכים א טז:ט) | [equivalent] | Palace conspiracy. |
| EST 303 | *sīḫu bārtu ētapaš ina kussie … ittūšib* | מרד וקשר עשה, על כסא מלכותו ישב | `וַיְהִי בְמָלְכוֹ כְּשִׁבְתּוֹ עַל כִּסְאוֹ` (מלכים א טז:יא) | [equivalent] | Zimri, the conspirator who sat on the throne; the people make Omri king against him (16:16–18). |
| EST 531 | same | same | `אִם יִהְיֶה הַשָּׁנִים הָאֵלֶּה טַל וּמָטָר` (מלכים א יז:א) | [equivalent] | Dew and rain withheld by a divine oath (`חַי יְהוָה … אִם`). |
| LH §36, 765 | *eqlum kirûm u bîtum* | `השדה, הגן והבית` | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | נבות מסרב למכור למלך |
| LH §41, 813 | *upīḫ* | `הֵמִיר` | `וַיֹּאמֶר נָבוֹת אֶל אַחְאָב חָלִילָה לִּי` (מלכים א כא:ג) | [equivalent] | אחאב מציע לנבות `כֶּרֶם טוֹב מִמֶּנּוּ` בתמורה (מלכים א כא:ב). מן הזיכרון. |
| LH §171, 2090' | *ul inaddin* | לא תתן; | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | "לתת" נחלה = למכור אותה, ואיסור על העברתה מחוץ למשפחה |
| LH §178, 2288' | *ul uppal* | לא תפרע; | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | נחלת האבות שאינה עוברת לזר בכסף. הצעה שלנו |
| HL HL1 §46, 256 | *[takku URU-r]i A.Š[À{ḪI.A}-an ša]ḫḫan=a iwaru kuiški ḫarzi* | [אם] מישהו יחזיק [בעיר בשדה ובשַׁחְחַן] כְּמַתָּן, | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | הקרקע כנחלת אבות |
| EST 8 | *šarrūtu bēlūtu … uppašūni* | …את המלכות ואת האדנות / עושה עליהם | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | Same idiom "do kingship over"; also 49, 61. |
| EST 228 | *šarrūtu bēlūtu … ina muhhikunu uppašūni* | יעשה עליכם את המלכות ואת האדנות של אשור | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | = 61. |
| MALB §3, o ii 23–26 | *lū šillata iqbi … u zittišu šarre kī libbišu* | `בין חוצפה [אמר] … וחלקו – המלך כְּלִבּוֹ (יעשה בו)` | `בֵּרַךְ נָבוֹת אֱלֹהִים וָמֶלֶךְ` (מלכים א כא:יג) | [equivalent] | Speech against the king; Naboth's vineyard passes to the king (1 Kgs 21:15–16) – הצעה שלנו. *iqbi* half broken. |
| LH §202, 2538' | *lētam maḫāṣu* | מחץ את לחי | `וַיַּכֶּה אֶת מִיכָיְהוּ עַל הַלֶּחִי` (מלכים א כב:כד) | [cognate] |  |
| EST 612–615 | *kî ša mugirru annītu adi sassīša ina dāmē rahṣatūni* | כאשר המרכבה הזאת עד רצפתה בדמים שטופה | `וַיִּצֶק דַּם הַמַּכָּה אֶל חֵיק הָרָכֶב` (מלכים א כב:לה) | [equivalent] | The king's blood fills the floor of the chariot (`חֵיק הָרָכֶב` ≈ *sassu*). Our proposal. |
| EST 613, 615 | *rahṣu*, *lirrahṣā* | שטופה, ישטפו | `וַיִּשְׁטֹף אֶת הָרֶכֶב עַל בְּרֵכַת שֹׁמְרוֹן` (מלכים א כב:לח) | [equivalent] | The chariot washed of Ahab's blood; `שטף` is the corpus verb for *rahāṣu* (part 5), so the verbal identity is the translation's. Our proposal. |
| EST 175, 186 | *ibbalkatūni*, *tabbalkatāni* | יפשע, תפשעו | `וַיִּפְשַׁע מוֹאָב בְּיִשְׂרָאֵל אַחֲרֵי מוֹת אַחְאָב` (מלכים ב א:א) | [equivalent] | Source of the rendering (Decision 3). |
| EST T vi 47 | *Šarrat-Amqarruna* | שרת־אמקרונה | `בְּבַעַל זְבוּב אֱלֹהֵי עֶקְרוֹן` (מלכים ב א:ב) | [equivalent] | The goddess of Ekron; Ahaziah consults Ekron's god about his illness. Tayinat only. |
| LH §261, 2962' | *nāqidam* | נוקד | `וּמֵישַׁע מֶלֶךְ מוֹאָב הָיָה נֹקֵד` (מלכים ב ג:ד) | [cognate] |  |
| LH §264, 2999' | *biltam* | תנובה | `וְהֵשִׁיב לְמֶלֶךְ יִשְׂרָאֵל מֵאָה אֶלֶף כָּרִים וּמֵאָה אֶלֶף אֵילִים צָמֶר` (מלכים ב ג:ד) | [equivalent] | The yield of a *nōqēd*. |
| LH §117, 1326' | *e'iltum iṣbassu* | חובה תפשתו | `וְהַנֹּשֶׁה בָּא לָקַחַת אֶת שְׁנֵי יְלָדַי לוֹ לַעֲבָדִים` (מלכים ב ד:א) | [equivalent] | Debt leads to the children's servitude. |
| LH §151, 1799' | *mussa ul iṣabbatū* | את בעלה לא יתפשו | `וְהַנֹּשֶׁה בָּא לָקַחַת אֶת שְׁנֵי יְלָדַי לוֹ לַעֲבָדִים` (מלכים ב ד:א) | [equivalent] | The creditor seizes the debtor's family; [absent] in the Torah: no separation of spouses' debts. |
| LH §114, 1291' | *nipûssu ittepe* | `ואת מַשְׁכּוֹנוֹ מִשְׁכֵּן,` | `וְהַנֹּשֶׁה בָּא לָקַחַת אֶת שְׁנֵי יְלָדַי לוֹ לַעֲבָדִים` (מלכים ב ד:א) | [equivalent] | הנושה לוקח את ילדי החייב |
| MAL §39, r v 26–33 | *lā mārassu … ummiānu pāniu ittalka* | את שאינה בתו … הנושה הקודם הגיע | `וְהַנֹּשֶׁה בָּא לָקַחַת אֶת שְׁנֵי יְלָדַי לוֹ לַעֲבָדִים` (מלכים ב ד:א) | [equivalent] | The creditor "comes" for the debtor's child. |
| MAL §44, r vi 42 | (the same) | אשר כעֵרָבוֹן | `וְהַנֹּשֶׁה בָּא לָקַחַת אֶת שְׁנֵי יְלָדַי לוֹ לַעֲבָדִים` (מלכים ב ד:א) | [equivalent] | The creditor takes the debtor's children. |
| EST 262 | *šammu ša muātīšu* | סם מותו | `מָוֶת בַּסִּיר אִישׁ הָאֱלֹהִים` (מלכים ב ד:מ) | [equivalent] | A deadly plant in food. Our proposal. |
| LH §215, 2614' | *awīlam ubtalliṭ* | `ואת האיש חִיָּה,` | `לְהָמִית וּלְהַחֲיוֹת` (מלכים ב ה:ז) | [equivalent] | הצעה שלנו |
| EST 567 | same | same | `עַד הֱיוֹת רֹאשׁ חֲמוֹר בִּשְׁמֹנִים כֶּסֶף` (מלכים ב ו:כה) | [equivalent] | Famine prices in the siege of Samaria (followed by the cannibalism, 6:28–29). |
| LH §121, 1376' | *kur*, *qa* | כור, קבים | `וְרֹבַע הַקַּב` (מלכים ב ו:כה) | [cognate] | Measures borrowed from Akkadian (*kurru* = `כור`, Ezek 45:14). |
| EST 449 | same | same | `תְּנִי אֶת בְּנֵךְ וְנֹאכְלֶנּוּ הַיּוֹם` (מלכים ב ו:כח) | [equivalent] | The curse as event (Samaria besieged). |
| EST 448 | same | same | `וַתַּחְבִּא אֶת בְּנָהּ` (מלכים ב ו:כט) | [equivalent] | Our proposal. |
| LH §268, 3032' | *šina sūt ûm* | סאתיים שעורים | `וְסָאתַיִם שְׂעֹרִים בְּשֶׁקֶל` (מלכים ב ז:א) | [cognate] | *sūtu* = `סְאָה` (loanword); barley in both. |
| LH §111, 1243' | *ḫamšat sūt še’am ileqqe* | `חמש סְאִים שעורים תקח.` | `וְסָאתַיִם שְׂעֹרִים בְּשֶׁקֶל` (מלכים ב ז:א) | [cognate] | *sūtu* = `סְאָה`. מן הזיכרון (T6). |
| LE §1, 8 | *1 kurrum ûm ana 1 šiqil kaspim* | כור שעורים בשקל כסף | `סְאָה סֹלֶת בְּשֶׁקֶל וְסָאתַיִם שְׂעֹרִים בְּשֶׁקֶל` (מלכים ב ז:א) | [equivalent] | The price-list formula "X measure for a shekel". |
| LH §27, 647 | *alšu iktašdam* | `ואל עירו הגיע,` | `וַתָּשָׁב הָאִשָּׁה מֵאֶרֶץ פְּלִשְׁתִּים וַתֵּצֵא לִצְעֹק אֶל הַמֶּלֶךְ אֶל בֵּיתָהּ וְאֶל שָׂדָהּ` (מלכים ב ח:ג) | [equivalent] | מי ששב אחרי היעדרות ותובע את ביתו ואת שדהו מן המלך |
| LI §18, 221′–233′ | *gu₂-un e₂-a in-šub-bu-uš … mu 3-kam-ma-ka nu-ub-ta-e₃-e … e₂-bi ba-an-tum₃* | את מס הבית הזניחו … (עד) השנה השלישית לא יוציאנו … את הבית ההוא יטול | `וַיְהִי מִקְצֵה שֶׁבַע שָׁנִים וַתָּשָׁב הָאִשָּׁה … וַתֵּצֵא לִצְעֹק אֶל הַמֶּלֶךְ אֶל בֵּיתָהּ וְאֶל שָׂדָהּ` (מלכים ב ח:ג) | [divergence] | Property left behind: in LI the one who paid its taxes for three years takes it; the Shunammite gets hers back after seven years (ח:ו `הָשֵׁיב אֶת כָּל אֲשֶׁר לָהּ`). |
| LH §27, 647 | *alšu iktašdam* | `ואל עירו הגיע,` | `הָשֵׁיב אֶת כָּל אֲשֶׁר לָהּ וְאֵת כָּל תְּבוּאֹת הַשָּׂדֶה` (מלכים ב ח:ו) | [equivalent] | מי ששב אחרי היעדרות ותובע את ביתו ואת שדהו מן המלך |
| EST 175 | *issi X nabalkutu* | מעם … יפשע | `בְּיָמָיו פָּשַׁע אֱדוֹם מִתַּחַת יַד יְהוּדָה` (מלכים ב ח:כ) | [equivalent] | "Rebel from under" = "cross over from". |
| EST 117 | *maḫḫû* | משוגע | `מַדּוּעַ בָּא הַמְשֻׁגָּע הַזֶּה אֵלֶיךָ` (מלכים ב ט:יא) | [equivalent] | The prophet's disciple who anoints Jehu, followed by `וַיִּתְקַשֵּׁר` (מלכים ב ט:יד): the ecstatic as the trigger of a conspiracy. Our proposal. |
| EST 264 | *kišpī* | כשפים | `עַד זְנוּנֵי אִיזֶבֶל אִמְּךָ וּכְשָׁפֶיהָ הָרַבִּים` (מלכים ב ט:כב) | [cognate] | Sorcery in a coup narrative. Our proposal. |
| EST 451 | *šīrīkunu kalbū … lēkulū* | את בשרכם כלבים … יאכלו | `בְּחֵלֶק יִזְרְעֶאל יֹאכְלוּ הַכְּלָבִים אֶת בְּשַׂר אִיזָבֶל` (מלכים ב ט:לו) | [cognate] | Word for word (*kalbu*, *akālu*). Our proposal. |
| EST 194 | *ammar iqabbûni* | כל אשר יאמר | `כֹל אֲשֶׁר תֹּאמַר אֵלֵינוּ נַעֲשֶׂה` (מלכים ב י:ה) | [equivalent] | Samaria's officials submitting to Jehu. |
| LH §177, 2223' | *ipaqqidūma* | יפקידו, | `וַיִּשְׁלַח … וְהַזְּקֵנִים וְהָאֹמְנִים אֶל יֵהוּא` (מלכים ב י:ה) | [equivalent] | "האומנים" שגידלו את בני אחאב בשמרון: אפוטרופסים של בני מלך. הצעה שלנו |
| EST 134 | *ḫulluqīšu* | לאבדו | `וַתָּקָם וַתְּאַבֵּד אֵת כָּל זֶרַע הַמַּמְלָכָה` (מלכים ב יא:א) | [equivalent] | Athaliah destroying the royal seed: the crime the treaty forbids, with the treaty's verb and noun (*ḫulluqu zēra*, 141). Our proposal. |
| LH prol. 79 | *zēr šarrūtim* | זרע המלכות | `וַתְּאַבֵּד אֵת כָּל זֶרַע הַמַּמְלָכָה` (מלכים ב יא:א) | [cognate] |  |
| EST 172 | same | same | `וַיַּסְתִּרוּ אֹתוֹ מִפְּנֵי עֲתַלְיָהוּ וְלֹא הוּמָת` (מלכים ב יא:ב) | [equivalent] | Rescue of the heir from a usurper. |
| LH §194, 2486' | *mārašu ana mušēniqtim* | את בנו למינקת | `אֹתוֹ וְאֶת מֵינִקְתּוֹ בַּחֲדַר הַמִּטּוֹת` (מלכים ב יא:ב) | [cognate] | יהושבע מסתירה את בן המלך עם מינקתו |
| EST 249–253 | posthumous / infant heir raised and enthroned | כאשר ייוולד, לא תגדלו … את כסא אשור לא תתפישו | `וַיְהִי אִתָּהּ בֵּית יְהוָה מִתְחַבֵּא שֵׁשׁ שָׁנִים` (מלכים ב יא:ג) | [equivalent] | Joash, the surviving infant of a murdered royal seed, raised in hiding. Our proposal. |
| EST 60 | *ukallimkanūni* | הראה לכם | `וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] | Oath + "showing" the crown prince; also 63, 93. |
| EST T i 9 | *kallābāni* | הרצים | `לַכָּרִי וְלָרָצִים` (מלכים ב יא:ד) | [equivalent] | Tayinat only; depends on the sense of *kallābu*. Our proposal. |
| EST 153–156 | *adê ina pān ilāni … ahēʾiš tutammâni* | אמנה לפני האלים … זה את זה תשביעו | `וַיִּכְרֹת לָהֶם בְּרִית וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה` (מלכים ב יא:ד) | [equivalent] / [divergence] | A group oath before the god: for the heir there, against him here. |
| EST 213 | *tutammâni* | תשביעו | `וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] / [divergence] | Assembly, oath and enthronement: legitimate there, forbidden here. |
| EST 287 | *tamītu utammûkanūni* | שבועה השביע אתכם | `וַיַּשְׁבַּע אֹתָם בְּבֵית יְהוָה וַיַּרְא אֹתָם אֶת בֶּן הַמֶּלֶךְ` (מלכים ב יא:ד) | [equivalent] | Also 352. |
| EST 50 | same | same | `וְשָׁמְרוּ אֶת מִשְׁמֶרֶת בֵּית יְהוָה אֶל הַמֶּלֶךְ` (מלכים ב יא:ז) | [equivalent] | The sworn guard around the crown prince (11:4–8). |
| EST 206 | *maṣṣartušu* | [נצירתו] | `וְשָׁמְרוּ אֶת מִשְׁמֶרֶת בֵּית יְהוָה אֶל הַמֶּלֶךְ` (מלכים ב יא:ז) | [equivalent] | *maṣṣartu* = `מִשְׁמֶרֶת`; `שמר` kept out. Restored. |
| EST 205–206 | the guard on the prince | לא ילך; את נצירתו תחזקו | `וִהְיוּ אֶת הַמֶּלֶךְ בְּצֵאתוֹ וּבְבֹאוֹ` (מלכים ב יא:ח) | [equivalent] | The sworn guard around the boy-king Joash. |
| HL HL2 §126, 126.2 | *… {GIŠ}ŠUKUR ZABAR* | שישה שקלים כסף ייתן. אם בשער ההיכל חנית אָרָד | `אֶת הַחֲנִית וְאֶת הַשְּׁלָטִים אֲשֶׁר לַמֶּלֶךְ דָּוִד` (מלכים ב יא:י) | [equivalent] | כלי הנשק כרכוש מלכותי |
| EST 1 | *adê* | האמנה | `וַיִּתֵּן עָלָיו אֶת הַנֵּזֶר וְאֶת הָעֵדוּת` (מלכים ב יא:יב) | [cognate?] | `עֵדוּת` given to the crown prince at his enthronement, after the guards' oath (11:4). |
| EST 253 | same | same | `וַיּוֹצִא אֶת בֶּן הַמֶּלֶךְ וַיִּתֵּן עָלָיו אֶת הַנֵּזֶר וְאֶת הָעֵדוּת וַיַּמְלִכוּ אֹתוֹ` (מלכים ב יא:יב) | [equivalent] | His enthronement (with `הָעֵדוּת`; see part 1, l. 1). |
| EST 67 | *bārtu* | קשר | `וַתִּקְרָא קֶשֶׁר קָשֶׁר` (מלכים ב יא:יד) | [equivalent] | Also 107. |
| EST 393–394 | *Aššur ilkunu … Aššur-bāni-apli … bēlkunu* | אשור – אלכם, אשור־בני־אפלי … – אדונכם | `וַיִּכְרֹת יְהוֹיָדָע אֶת הַבְּרִית בֵּין יְהוָה וּבֵין הַמֶּלֶךְ וּבֵין הָעָם` (מלכים ב יא:יז) | [equivalent] / [divergence] | God and king bound in one ceremony at a crown prince's enthronement (11:4, 12). In Deut YHWH alone. |
| EST 304–306 | rejoicing at the usurper's kingship | למלכותו תשמחו, לא תתפשו אותו, לא תהרגו אותו | `וַיִּשְׂמַח כָּל עַם הָאָרֶץ וְהָעִיר שָׁקָטָה` (מלכים ב יא:כ) | [divergence] | The people rejoice at the legitimate heir's enthronement, and the usurper Athaliah is killed: the inverse of the forbidden scenario. Our proposal. |
| LH §232, 2738' | *lā udanninuma* | `לא חיזק,` | `וְהֵם יְחַזְּקוּ אֶת בֶּדֶק הַבַּיִת` (מלכים ב יב:ו) | [equivalent] | `חיזק` את הבית: התיקון של מבנה פגום. הצעה שלנו |
| LH §233, 2751' | *udannan* | `יחזק.` | `וְהֵם יְחַזְּקוּ אֶת בֶּדֶק הַבַּיִת` (מלכים ב יב:ו) | [equivalent] |  |
| EST 594–598 | *kamāni ša dišpi hurrāti pallušāni … hurrāti lupallišū* | חלת הדבש חורים נקובים … חורים ינקבו | `וַיִּקֹּב חֹר בְּדַלְתּוֹ` (מלכים ב יב:י) | [equivalent] | "Bore a hole" (*hurratu* / `חֹר` [cognate]). Lexical. |
| LH §144, 1689'–1690' | *panīšu ištakan* | פניו שׂם | `וַיָּשֶׂם חֲזָאֵל פָּנָיו לַעֲלוֹת עַל יְרוּשָׁלִָם` (מלכים ב יב:יח) | [cognate] | The idiom *pānam šakānu* = `שָׂם פָּנָיו ל־`. |
| LH §137, 1589' | *ištakan* | שם, | `וַיָּשֶׂם חֲזָאֵל פָּנָיו לַעֲלוֹת עַל יְרוּשָׁלִָם` (מלכים ב יב:יח) | [cognate] | הניב *pānam šakānu* = `שָׂם פָּנָיו ל־` |
| LH §168, 2012' | *panam ištakan* | פניו שם, | `וַיָּשֶׂם חֲזָאֵל פָּנָיו לַעֲלוֹת עַל יְרוּשָׁלִָם` (מלכים ב יב:יח) | [cognate] | הניב *pānam šakānu* = `שָׂם פָּנָיו ל־` |
| LH §177, 2207' | *ištakan* | שמה, | `וַיָּשֶׂם חֲזָאֵל פָּנָיו לַעֲלוֹת עַל יְרוּשָׁלִָם` (מלכים ב יב:יח) | [cognate] | אותו ניב בדיוק (T5) |
| EST 221 | *urdāni* | בעבדים | `וַיָּקֻמוּ עֲבָדָיו וַיִּקְשְׁרוּ קָשֶׁר` (מלכים ב יב:כא) | [equivalent] |  |
| EST 254 | *ēpišānūti ša bārti* | את עושי הקשר | `וַיַּךְ אֶת עֲבָדָיו הַמַּכִּים אֶת הַמֶּלֶךְ אָבִיו` (מלכים ב יד:ה) | [equivalent] | The new king kills his father's murderers. |
| EST 255 | *šumšunu zarʾušunu … lā tuḫallaqāni* | את שמם, את זרעם … לא תאבדו | `וְאֶת בְּנֵי הַמַּכִּים לֹא הֵמִית` (מלכים ב יד:ו) | [divergence] | The treaty demands the murderers' seed; Amaziah spares the sons, citing Deut 24:16. Our proposal. |
| LH §210, 2588'–2589' | *mārassu idukkū* | את בתו יהרגו | `וְאֶת בְּנֵי הַמַּכִּים לֹא הֵמִית` (מלכים ב יד:ו) | [divergence] |  |
| LH §230, 2725' | *mār itinnim šuāti* | את בן הבנאי ההוא | `וְאֶת בְּנֵי הַמַּכִּים לֹא הֵמִית` (מלכים ב יד:ו) | [divergence] | The rule applied. |
| LH §230, 2725' | *mār itinnim šuāti* | `את בן הבנאי ההוא` | `וְאֶת בְּנֵי הַמַּכִּים לֹא הֵמִית כַּכָּתוּב בְּסֵפֶר תּוֹרַת מֹשֶׁה` (מלכים ב יד:ו) | [divergence] | הכלל מופעל; מן הזיכרון |
| EST 166 | same | same | `וַיִּקְשְׁרוּ עָלָיו קֶשֶׁר בִּירוּשָׁלִַם וַיָּנָס לָכִישָׁה` (מלכים ב יד:יט) | [equivalent] |  |
| EST 11 | *mār šarri* | בן־המלך | `וְיוֹתָם בֶּן הַמֶּלֶךְ עַל הַבַּיִת` (מלכים ב טו:ה) | [equivalent] | The title of the heir acting for his father. Line 11 is ⟨ ⟩ in Nimrud, attested in Tayinat. |
| EST 166 | *sīḫu bārtu ina muhhīšu ētapšu* | מרד וקשר עליו עשו | `וַיִּקְשֹׁר עָלָיו שַׁלֻּם בֶּן יָבֵשׁ וַיַּכֵּהוּ קָבָל עָם וַיְמִיתֵהוּ` (מלכים ב טו:י) | [equivalent] | `קשר על`. |
| EST 303 | same | same | `וַיִּקְשֹׁר עָלָיו שַׁלֻּם בֶּן יָבֵשׁ וַיַּכֵּהוּ קָבָל עָם וַיְמִיתֵהוּ` (מלכים ב טו:י) | [equivalent] |  |
| EST 166 | same | same | `וַיִּקְשֹׁר עָלָיו פֶּקַח בֶּן רְמַלְיָהוּ שָׁלִישׁוֹ וַיַּכֵּהוּ בְשֹׁמְרוֹן בְּאַרְמוֹן` (מלכים ב טו:כה) | [equivalent] | A courtier's conspiracy inside the palace. |
| LH prol. 91 | *sippar* | סיפר | `וּסְפַרְוַיִם` (מלכים ב יז:כד) | [divergence] | Debated identification; note only. |
| EST 467–468 | Bethel + *ina qāt nēši ākili limnûkunu* | ביד אריה אוכל ימנו אתכם | `וַיְשַׁלַּח יְהוָה בָּהֶם אֶת הָאֲרָיוֹת` (מלכים ב יז:כה) | [equivalent] | Lions among the settlers of Samaria; the priest settles in Bethel (17:28). From memory. |
| LH prol. 139 | *kutî* | כותה | `וְאַנְשֵׁי כוּת עָשׂוּ אֶת נֵרְגַל` (מלכים ב יז:ל) | [equivalent] | Same city, same god (Erra = Nergal, 135). |
| EST 243–244 | same | same | `וַיִּמְרֹד בְּמֶלֶךְ אַשּׁוּר וְלֹא עֲבָדוֹ` (מלכים ב יח:ז) | [divergence] | Hezekiah's revolt against Assyria; here revolt is *required* against the murderer. |
| EST 66 | *ina libbīšu tahaṭṭâni* | תחטאו בו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | A vassal's sin against the Assyrian king (Hezekiah to Sennacherib); also 105. |
| EST 292 | *ina libbi adêkunu lā taḫaṭṭia* | באמנתכם לא תחטאו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | *ḫaṭû* = `חטא` against the overlord (see 66). |
| EST 513–517 | *šumma attunu ina libbi adê annūte … tahaṭṭâni* | אם אתם באמנה הזאת … תחטאו | `חָטָאתִי שׁוּב מֵעָלַי` (מלכים ב יח:יד) | [cognate] | *ḫaṭû* = `חטא` of a vassal against Assyria; also 555A–B. |
| EST 386 | *tamītu ša dabābti šapti* | שבועה של דיבור שפתיים | `אָמַרְתָּ אַךְ דְּבַר שְׂפָתַיִם עֵצָה וּגְבוּרָה לַמִּלְחָמָה` (מלכים ב יח:כ) | [equivalent] | "Lip-talk" = empty words, in the mouth of the Rabshakeh, Sennacherib's envoy (also ישעיהו לו:ה). *šaptu* = `שָׂפָה` [cognate]. Our proposal. |
| EST 491 | *šīnāt imēri lū mašqītkunu* | שתן חמור יהי משקכם | `מֵימֵי רַגְלֵיהֶם` (מלכים ב יח:כז) | [cognate] (the kethiv `שיניהם` = *šīnātu*) | The Rabshakeh's threat: drinking urine, in an Assyrian's mouth. From memory. |
| EST 332 | *aleʾ* | איה | `אַיֵּה אֱלֹהֵי חֲמָת וְאַרְפָּד` (מלכים ב יח:לד) | [equivalent] | The rhetorical "where are …?" in an Assyrian speech. Our proposal. |
| EST 413 | same | same | `וְנָתְנוּ אֶת אֱלֹהֵיהֶם בָּאֵשׁ … וַיְאַבְּדוּם` (מלכים ב יט:יח) | [equivalent] | The Assyrian kings burn and destroy the gods of the nations. Our proposal. |
| EST 198 | background | — | `וְאַדְרַמֶּלֶךְ וְשַׂרְאֶצֶר` … `הִכֻּהוּ בַחֶרֶב` (מלכים ב יט:לז) | — | Sennacherib's murder by his sons (681): the event behind §18. |
| EST 666–670 | *adê ša Aššur-ahu-iddina … ša ina muhhi Aššur-bani-apli … u ina muhhi Šamaš-šumu-ukin … šaknūni* | האמנה של אסרחדון … אשר על אשור־בני־אפלי … ועל שמש־שום־אוכין … מושׂמת | `וַיִּמְלֹךְ אֵסַר חַדֹּן בְּנוֹ תַּחְתָּיו` (מלכים ב יט:לז) | [equivalent] | Esarhaddon's own succession after Sennacherib's murder: the background of a treaty that fixes the succession in advance. |
| LE §12, 46 | *imât ul iballuṭ* | ימות, לא יחיה | `כִּי מֵת אַתָּה וְלֹא תִחְיֶה` (מלכים ב כ:א) | [equivalent] | The same doublet "die / not live" (our suggestion); not `מוֹת יוּמָת`. |
| EST 96 | *kettu šalimtu* | אמת שלמה | `בֶּאֱמֶת וּבְלֵבָב שָׁלֵם` (מלכים ב כ:ג) | [cognate] | *šalmu* = `שָׁלֵם`. |
| EST 198 | *ēkallu* | היכל | `וְהָיוּ סָרִיסִים בְּהֵיכַל מֶלֶךְ בָּבֶל` (מלכים ב כ:יח) | [cognate] | Loan (Sum. *e₂-gal*). |
| MAL §15, o ii 54 | *ana ša-rēšēn utâr* | לסריס ישיב | `וְהָיוּ סָרִיסִים בְּהֵיכַל מֶלֶךְ בָּבֶל` (מלכים ב כ:יח) | [cognate] | *ša rēši* > `סָרִיס` (loan). Castration as punishment: [absent] in the Torah (Deut 23:2 excludes the castrated). |
| EST 13–15 | same | same | `וַיִּשְׁתַּחוּ לְכָל צְבָא הַשָּׁמַיִם` (מלכים ב כא:ג) | [equivalent] | Manasseh, Esarhaddon's vassal. |
| EST 295 | same | same | `וּנְתַתִּים בְּיַד אֹיְבֵיהֶם וְהָיוּ לְבַז וְלִמְשִׁסָּה` (מלכים ב כא:יד) | [equivalent] | "Give" to plunder, in the oracle against Manasseh. |
| EST 426 | *dāmēkunu limalli ṣēra* | בדמיכם ימלא את הערבה | `וְגַם דָּם נָקִי שָׁפַךְ מְנַשֶּׁה הַרְבֵּה מְאֹד עַד אֲשֶׁר מִלֵּא` (מלכים ב כא:טז) | [equivalent] | *malû* D with two objects = `מִלֵּא … דָּם`. Our proposal. |
| EST 198 | same | same | `וַיִּקְשְׁרוּ עַבְדֵי אָמוֹן עָלָיו וַיָּמִיתוּ אֶת הַמֶּלֶךְ בְּבֵיתוֹ` (מלכים ב כא:כג) | [equivalent] |  |
| EST 169–170 | *ṣābāni ša bārti … lā tadūkāni* | את האנשים אשר קשר עשו לו … לא תהרגו | `וַיַּךְ עַם הָאָרֶץ אֵת כָּל הַקֹּשְׁרִים עַל הַמֶּלֶךְ אָמוֹן` (מלכים ב כא:כד) | [equivalent] | The people kill the palace conspirators and enthrone the king's son – the scenario of 162–172 (Amon, son of Esarhaddon's vassal Manasseh). Our proposal. |
| EST 237–248 | heir murdered, murderers killed, his son enthroned | … לא תתפשו אותו, לא תהרגו אותו, ואת בן אשור־בני־אפלי … את כסא אשור לא תתפישו | `וַיַּךְ עַם הָאָרֶץ אֵת כָּל הַקֹּשְׁרִים עַל הַמֶּלֶךְ אָמוֹן וַיַּמְלִיכוּ עַם הָאָרֶץ אֶת יֹאשִׁיָּהוּ בְנוֹ תַּחְתָּיו` (מלכים ב כא:כד) | [equivalent] | The scenario of §22 in Judah (Amon, son of Esarhaddon's vassal Manasseh). Our proposal. |
| EST 5 | *ṣehru u rabiu* | קטן וגדול | `וְכָל הָעָם לְמִקָּטֹן וְעַד גָּדוֹל` (מלכים ב כג:ב) | [equivalent] | All ranks at a covenant ceremony. Our proposal. |
| LH epil. 3248' | idem | idem | `וַיִּקְרָא בְאָזְנֵיהֶם אֶת כָּל דִּבְרֵי סֵפֶר הַבְּרִית` (מלכים ב כג:ב) | [equivalent] |  |
| EST 385–387 | standing + whole heart | … תעמדו … בשלמות לבכם … תישבעו | `וַיַּעֲמֹד כָּל הָעָם בַּבְּרִית` (מלכים ב כג:ג) | [equivalent] | Josiah's covenant: standing, `בְּכָל לֵב וּבְכָל נֶפֶשׁ`, the words "written in this book". Our proposal. |
| EST 406 | same | same | `לְהָקִים אֶת דִּבְרֵי הַבְּרִית הַזֹּאת הַכְּתֻבִים עַל הַסֵּפֶר הַזֶּה` (מלכים ב כג:ג) | [equivalent] |  |
| EST 410–412 | same | same | `וַיִּשְׂרֹף אֹתָהּ בְּנַחַל קִדְרוֹן וַיָּדֶק לְעָפָר` (מלכים ב כג:ו) | [equivalent] | Josiah's destruction of cult objects. Our proposal. |
| EST 243–244 | *ana urdānūtīšu taturrāni lā tabbalkatāni* | לעבדותו תשובו, לא תפשעו | `וַיְהִי לוֹ יְהוֹיָקִים עֶבֶד שָׁלֹשׁ שָׁנִים וַיָּשָׁב וַיִּמְרָד בּוֹ` (מלכים ב כד:א) | [equivalent] | Servitude to a king, "turn", rebellion. Our proposal. |
| EST 628 | *īnīšunu ugallilūni* | ואת עיניהם גִּלְגֵּל (?) | `וְאֶת עֵינֵי צִדְקִיָּהוּ עִוֵּר` (מלכים ב כה:ז) | [equivalent] | Only on the sense "blind" (P&W, lemma); the punishment of the vassal who broke his oath. `עִוֵּר` kept out (open decision 1). |
| EST 204 | same | same | `נָשָׂא אֱוִיל מְרֹדַךְ מֶלֶךְ בָּבֶל … אֶת רֹאשׁ יְהוֹיָכִין` (מלכים ב כה:כז) | [cognate] |  |
| EST 252 | same | same | `בָּנִים גִּדַּלְתִּי וְרוֹמַמְתִּי וְהֵם פָּשְׁעוּ בִי` (ישעיהו א:ב) | [equivalent] | Raising sons + `פשע` (*nabalkutu*, 244) in one verse. Our proposal. |
| EST 644–645 | same | same | `פֶּצַע וְחַבּוּרָה וּמַכָּה טְרִיָּה לֹא זֹרוּ וְלֹא חֻבָּשׁוּ וְלֹא רֻכְּכָה בַּשָּׁמֶן` (ישעיהו א:ו) | [equivalent] | The wound not softened with oil (*šamnu* = `שמן` [cognate]). |
| LH epil. 3607'–3612' | *simmam … ina ṣimdi lā unaḫḫušu* | פצע … בחבישה לא יניחנו | `פֶּצַע וְחַבּוּרָה וּמַכָּה טְרִיָּה; לֹא זֹרוּ וְלֹא חֻבָּשׁוּ וְלֹא רֻכְּכָה בַּשָּׁמֶן` (ישעיהו א:ו) | [equivalent] | *simmu* = פצע (EST); the wound neither bandaged nor soothed. Our proposal. |
| LH epil. 3204'–3205' | idem | idem | `אַשְּׁרוּ חָמוֹץ שִׁפְטוּ יָתוֹם רִיבוּ אַלְמָנָה` (ישעיהו א:יז) | [equivalent] | `אשרו` ~ "set right" beside orphan and widow. |
| UN prol. 162–165 | (the same) | (as above) | `שִׁפְטוּ יָתוֹם רִיבוּ אַלְמָנָה` (ישעיהו א:יז) | [equivalent] | The prophetic demand on rulers. |
| EST 635 | same | same | `וְאִם תְּמָאֲנוּ וּמְרִיתֶם חֶרֶב תְּאֻכְּלוּ` (ישעיהו א:כ) | [equivalent] | A condition followed by the devouring sword. |
| LH §108, 1209' | *šumma sābītum* | `אם מוֹכֶרֶת הַשֵּׁכָר` | `סָבְאֵךְ מָהוּל בַּמָּיִם` (ישעיהו א:כב) | [cognate?] | העברית `סֹבֶא` ("משקה משכר") ו`סָבָא` ("שתה לשכרה") הם כנראה בני־השורש של *sābû* / *sību* "שכר". מן הזיכרון (האטימולוגיה מקובלת; לא נבדקה כאן מול מילון). |
| LH §172, 2107' | *warkassa* | את עניינה | `יָתוֹם לֹא יִשְׁפֹּטוּ וְרִיב אַלְמָנָה לֹא יָבוֹא אֲלֵיהֶם` (ישעיהו א:כג) | [equivalent] | הדיינים חייבים לשמוע את עניינה של האלמנה |
| UN prol. 162–165 | (the same) | (as above) | `יָתוֹם לֹא יִשְׁפֹּטוּ וְרִיב אַלְמָנָה לֹא יָבוֹא אֲלֵיהֶם` (ישעיהו א:כג) | [divergence] | The rulers who fail where Ur-Namma claims success. |
| LH epil. 3211'–3212' | *bītim ša kīma šamê u erṣetim išdāšu kīnā* | הבית אשר כשמים והארץ יסודותיו נכונים | `נָכוֹן יִהְיֶה הַר בֵּית יְהוָה בְּרֹאשׁ הֶהָרִים` (ישעיהו ב:ב) | [cognate] | *kânu* = `נכון` of the temple, with "head" (3208'). Our proposal. |
| LH epil. 3296'–3297' | idem | idem | `וְהָיָה בְּאַחֲרִית הַיָּמִים נָכוֹן יִהְיֶה הַר בֵּית יְהוָה` (ישעיהו ב:ב) | [equivalent] |  |
| EST 479 | same | same | `כֹּל מִשְׁעַן לֶחֶם וְכֹל מִשְׁעַן מָיִם` (ישעיהו ג:א) | [equivalent] | Our proposal (the shared `שען` is the translation's only). |
| MAL §40, r v 49 | *puṣṣunu* | רעולה | `הַנְּטִפוֹת וְהַשֵּׁירוֹת וְהָרְעָלוֹת` (ישעיהו ג:יט) | [equivalent] | `רְעָלָה`: the veil among the ornaments of Zion's daughters (our Hebrew word). |
| LH §44, 855 | *imarrar* | יעזק | `וַיְעַזְּקֵהוּ וַיְסַקְּלֵהוּ וַיִּטָּעֵהוּ שֹׂרֵק` (ישעיהו ה:ב) | [equivalent] | Preparing the ground. Our proposal. |
| HL HL2 §108, 108.1 | *ták-ku tág-ga-li-an-da-za {GIŠ}⸢KIRI₆⸣.GEŠTIN {GIŠ}ma-aḫ-la-an ku-iš-ki* | אם מישהו מכרם מגודר זמורות | `הָסֵר מְשׂוּכָּתוֹ וְהָיָה לְבָעֵר פָּרֹץ גְּדֵרוֹ וְהָיָה לְמִרְמָס` (ישעיהו ה:ה) | [equivalent] | הגדר מגינה על הכרם; בחוק החתי היא מכפילה את הקנס |
| MALB §8, o iv 15 | *eqle ammar usammehūni* | `את השדה, כל אשר עירב` | `הוֹי מַגִּיעֵי בַיִת בְּבַיִת שָׂדֶה בְשָׂדֶה יַקְרִיבוּ` (ישעיהו ה:ח) | [equivalent] | Joining a neighbour's land to one's own (הצעה שלנו). |
| EST 601 | *kî zumbi* | כזבוב | `יִשְׁרֹק יְהוָה לַזְּבוּב אֲשֶׁר בִּקְצֵה יְאֹרֵי מִצְרָיִם` (ישעיהו ז:יח) | [cognate] | Lexical. |
| HL HL2 §185a, 185a.1 | *ŠA 1 IKU {GIŠ}KIRI₆.{GIŠ}GEŠTIN 1 MA.NA KÙ.BABBAR ŠI-IM-ŠU* | של אִיקוּ אחד כרם – מנה כסף מחירו; | `אֲשֶׁר יִהְיֶה שָּׁם אֶלֶף גֶּפֶן בְּאֶלֶף כָּסֶף` (ישעיהו ז:כג) | [equivalent] | הכרם הנמדד במחירו |
| EST 405 | *kunuk rubê rabê* (T *kunuk … annīe ša adê … šaṭirūni*) | חותם השליט הגדול … (אשר אמנת … כתובה בו) | `צוֹר תְּעוּדָה; חֲתוֹם תּוֹרָה בְּלִמֻּדָי` (ישעיהו ח:טז) | [equivalent] | A sealed, bound document entrusted to "the taught" (*lamādu*, 388). "Written in it" in Tayinat only. Our proposal. |
| LH epil. 3164' | *nūram ušēṣišināšim* | אור הוצאתי להם | `הָעָם הַהֹלְכִים בַּחֹשֶׁךְ רָאוּ אוֹר גָּדוֹל` (ישעיהו ט:א) | [equivalent] | The royal oracle. Our proposal. |
| HL HL2 §128, 128.3 | *ták-ku ša-ma-na-az NA₄[{ḪI.A}-u]š? ku-iš-ki ⸢ta⸣-i-e-[e]z-zi* | אם מישהו יגנוב אבנים מן היסוד, | `לְבֵנִים נָפָלוּ וְגָזִית נִבְנֶה` (ישעיהו ט:ט) | [divergence] | לבנים ואבנים כשתי דרגות בנייה |
| LH §133, 1517' | *iššalilma* | נשבה, | `לִהְיוֹת אַלְמָנוֹת שְׁלָלָם` (ישעיהו י:ב) | [cognate] | *šalālu* = `שָׁלַל`, גם בבני אדם; בשורה `נשבה`, לפי המשמעות. הצעה שלנו |
| EST 295 | *šalālu* | שלל | `לִשְׁלֹל שָׁלָל וְלָבֹז בַּז` (ישעיהו י:ו) | [cognate] | Assyria as plunderer. |
| LH prol. 161 | idem | idem | `וְיָצָא חֹטֶר מִגֵּזַע יִשָׁי` (ישעיהו יא:א) | [cognate] | *ḫaṭṭu* ~ `חֹטֶר` (from memory); meaning differs. |
| LH prol. 275 | *liplippim* | צאצא | `וְנֵצֶר מִשָּׁרָשָׁיו יִפְרֶה` (ישעיהו יא:א) | [equivalent] | The just king as dynastic offspring. |
| LH prol. 32 | *mīšaram* | מישרים | `וְהוֹכִיחַ בְּמִישׁוֹר לְעַנְוֵי אָרֶץ` (ישעיהו יא:ד) | [cognate] | ישר; the just king and the poor. |
| EST 555–556 | *ṣerru u šikkû ina libbi ištēt hurriti lā errabūni lā irabbiṣūni* | נחש ונמייה אל תוך חור אחד אינם באים, אינם רובצים | `וְגָר זְאֵב עִם כֶּבֶשׂ וְנָמֵר עִם גְּדִי יִרְבָּץ` (ישעיהו יא:ו) | [divergence] | Isaiah's peace is the exact inverse: enemies "lie down" (*rabāṣu* / `רבץ` [cognate]) together. Our proposal. |
| EST 555 | *hurratu* | חור | `וְשִׁעֲשַׁע יוֹנֵק עַל חֻר פָּתֶן` (ישעיהו יא:ח) | [cognate] / [divergence] | The snake's hole, in the same vision. Our proposal. |
| LH prol. 289–290 | *kibrāt arba'im* | קצות הארץ הארבע | `וּנְפֻצוֹת יְהוּדָה יְקַבֵּץ מֵאַרְבַּע כַּנְפוֹת הָאָרֶץ` (ישעיהו יא:יב) | [equivalent] | Also 69–70. |
| LH prol. 288 | *muštešmi* | המביא למשמעת | `וּבְנֵי עַמּוֹן מִשְׁמַעְתָּם` (ישעיהו יא:יד) | [cognate] | *šemû* = שמע. Our proposal. |
| EST 493 | *šēdu utukku rābiṣu … bītātikunu liḫīrū* | … רובץ רע את בתיכם יבחרו | `וְרָבְצוּ שָׁם צִיִּים וּמָלְאוּ בָתֵּיהֶם אֹחִים` (ישעיהו יג:כא) | [equivalent] | Demons "lie" in the houses (`רָבְצוּ`). Our proposal. |
| LH epil. 3392'–3393' | *ḫaṭṭašu lišbir* | את שרביטו ישבור | `שָׁבַר יְהוָה מַטֵּה רְשָׁעִים שֵׁבֶט מֹשְׁלִים` (ישעיהו יד:ה) | [cognate] | *šebēru* = שבר; said of the king of Babylon. Our proposal. |
| EST 140–141 | same | same | `וְהִכְרַתִּי לְבָבֶל שֵׁם וּשְׁאָר וְנִין וָנֶכֶד` (ישעיהו יד:כב) | [equivalent] |  |
| LH epil. 3594'–3596' | *aplam līṭeršuma šumam ay ušaršīšu* | יורש תשלול ממנו, ושם אל תמציא לו | `וְהִכְרַתִּי לְבָבֶל שֵׁם וּשְׁאָר וְנִין וָנֶכֶד` (ישעיהו יד:כב) | [equivalent] | No heir, no name – said of Babylon. Our proposal. |
| EST 326, 342 | *tušamḫaṣāni*, *šamḫiṣā* | תסכסכו, סכסכו | `וְסִכְסַכְתִּי מִצְרַיִם בְּמִצְרַיִם וְנִלְחֲמוּ אִישׁ בְּאָחִיו` (ישעיהו יט:ב) | [equivalent] | Brother set to fight brother. Our proposal. |
| LH epil. 3484'–3485' | *eṭemmašu mê lišaṣmi* | את אטו למים יצמיא | `וְדָרְשׁוּ אֶל הָאֱלִילִים וְאֶל הָאִטִּים` (ישעיהו יט:ג) | [cognate?] | *eṭemmu* = אִט; no Torah curse reaches beyond death [absent]. = EST 477. |
| EST 617 | same | same | `בַּיּוֹם הַהוּא יִהְיֶה מִצְרַיִם כַּנָּשִׁים` (ישעיהו יט:טז) | [equivalent] |  |
| LH epil. 3401' | *tēšî lā šubbîm* | מבוכה שאין להשקיטה | `כִּי יוֹם מְהוּמָה וּמְבוּסָה וּמְבוּכָה` (ישעיהו כב:ה) | [equivalent] | Our rendering's source; Deut 28:20 `הַמְּהוּמָה` is the equivalent (open decision 2). |
| EST 369, 372 | *mazzāsu … issu libbi mazzāsušunu unakkaršunūni* | המעמד … (ש)יסיר אותם ממעמדם | `וַהֲדַפְתִּיךָ מִמַּצָּבֶךָ; וּמִמַּעֲמָדְךָ יֶהֶרְסֶךָ` (ישעיהו כב:יט) | [equivalent] | Removal of an official from his post. "From their position" in Tayinat only. Our proposal. |
| MALB §19, r vii 14 | *tibna ana kurdišše utâr* | `[ואת התבן] אל הַמַּתְבֵּן ישיב` | `כְּהִדּוּשׁ מַתְבֵּן` (ישעיהו כה:י) | [equivalent] | *kurdiššu* "straw store" = `מַתְבֵּן`; *tibnu* `תבן` [cognate] restored. |
| LH prol. 294 | *ana šutēšur nišī* | ליישר את האנשים | `אֹרַח לַצַּדִּיק מֵישָׁרִים יָשָׁר מַעְגַּל צַדִּיק תְּפַלֵּס` (ישעיהו כו:ז) | [cognate] | `ישר`, `מישרים`, `אורח` together, as in 294–299. Our proposal. |
| LH §45, 870 | *bibbulum … itbal* | זרם … נטל | `כְּזֶרֶם מַיִם כַּבִּירִים שֹׁטְפִים` (ישעיהו כח:ב) | [equivalent] | `זרם` + `שטף` as in 869–870. |
| LH §253, 2915' | *ana eqlim erēšim* | לחרוש את השדה | `הֲכֹל הַיּוֹם יַחֲרֹשׁ הַחֹרֵשׁ לִזְרֹעַ` (ישעיהו כח:כד) | [cognate] | *erēšu* = `חרש`. |
| LH §43, 833 | *eqlam lā irīš* | את השדה לא חרש | `הֲכֹל הַיּוֹם יַחֲרֹשׁ הַחֹרֵשׁ לִזְרֹעַ` (ישעיהו כח:כד) | [cognate] | *erēšu* = `חרש`; *errēšu* > `אריס` (loan). |
| LH §44, 847 | *ana teptītim*; *išakkak* (841, 856) | לפתיחה; ישדד | `יְפַתַּח וִישַׂדֵּד אַדְמָתוֹ` (ישעיהו כח:כד) | [cognate] | *petû* = `פתח` [cognate]; *šakāku* `שידד` [equivalent]: the same sequence of field operations (open, plough, harrow). Our proposal. |
| EST 641–642 | *libbu ša huppi rāqūni … libbikunu lirīqū* | לב הגומה ריק … לבכם יתרוקן | `וְהֵקִיץ וְרֵיקָה נַפְשׁוֹ` (ישעיהו כט:ח) | [equivalent] | *rīqu* = `ריק` [cognate]. |
| EST 386–387 | lips vs whole heart | דיבור שפתיים … בשלמות לבכם | `בְּפִיו וּבִשְׂפָתָיו כִּבְּדוּנִי וְלִבּוֹ רִחַק מִמֶּנִּי` (ישעיהו כט:יג) | [equivalent] | From memory. |
| MAL §52, r vii 89 | *meḫṣu* | מַחַץ | `וּמַחַץ מַכָּתוֹ יִרְפָּא` (ישעיהו ל:כו) | [cognate] | *meḫṣu* = `מַחַץ`. |
| LH epil. 3220' | *šar mīšarim* | מלך המישרים | `הֵן לְצֶדֶק יִמְלָךְ מֶלֶךְ` (ישעיהו לב:א) | [equivalent] | Also 3244', 3333'. |
| LH epil. 3560'–3561' | *damīšunu erṣetam lišqi* | את דמם את הארץ תשקה | `וְרִוְּתָה אַרְצָם מִדָּם` (ישעיהו לד:ז) | [equivalent] | *dāmu* = דם, *šaqû* = השקה. |
| EST 490–493 | pitch for food … demons in the houses | זפת וכפר יהי מאכלכם … את בתיכם יבחרו | `וְנֶהֶפְכוּ נְחָלֶיהָ לְזֶפֶת וַעֲפָרָהּ לְגָפְרִית וְהָיְתָה אַרְצָהּ לְזֶפֶת בֹּעֵרָה` (ישעיהו לד:ט) | [equivalent] | Isa 34:9–14: the land turned to pitch, then demons settle in it. Our proposal. |
| EST 586 | *qīru* | זפת | `וְנֶהֶפְכוּ נְחָלֶיהָ לְזֶפֶת` (ישעיהו לד:ט) | [equivalent] |  |
| EST 493 | same | same | `אַךְ שָׁם הִרְגִּיעָה לִּילִית וּמָצְאָה לָהּ מָנוֹחַ` (ישעיהו לד:יד) | [equivalent] | The demon finds rest where the cursed find none (479). Our proposal. |
| EST 51 | *ina ketti ša libbikunu* | באמת לבכם | `בֶּאֱמֶת וּבְלֵב שָׁלֵם` (ישעיהו לח:ג) | [equivalent] | Also 98. |
| LH epil. 3192' | idem | idem | `בִּזְרֹעוֹ יְקַבֵּץ טְלָאִים וּבְחֵיקוֹ יִשָּׂא` (ישעיהו מ:יא) | [equivalent] | The shepherd's bosom. |
| EST 609 | *ša ṭiṭṭi ina mê immahhahūni* | ושל טיט במים נמס | `וּכְמוֹ יוֹצֵר יִרְמָס טִיט` (ישעיהו מא:כה) | [cognate] | *ṭiṭṭu* = `טִיט`; lexical. |
| EST 299 | same | same | `וְאֶצָּרְךָ וְאֶתֶּנְךָ לִבְרִית עָם` (ישעיהו מב:ו) | [cognate] | `נצר` + `עם`. Our proposal. |
| HL PT § XL, 196 | *{LÚ}A-SI-RUM-za ḫappar lē kuiški iyazi* | עם האסיר מסחר אף אחד אל יעשה, | `לְהוֹצִיא מִמַּסְגֵּר אַסִּיר` (ישעיהו מב:ז) | [cognate] | *ASĪRU* הוא המילה האכדית *asīru* "שבוי, אסיר" (מן *esēru* "לסגור, לכלוא"), קרובת העברית `אָסִיר` (שורש אס"ר); הקשר הוא דרך האכדוגרמה, לא דרך החתית |
| LH §226, 2689' | *abbutti wardim lā šêm* | `את תספורת העבדות של עבד לא שלו?` | `וְזֶה יִכְתֹּב יָדוֹ לַיהוָה` (ישעיהו מד:ה) | [equivalent] | סימון היד כאות שייכות; מן הזיכרון |
| LH prol. 51–53 | *rē'ûm nibīt Enlil* | הרועה, קרוא אנליל | `הָאֹמֵר לְכוֹרֶשׁ רֹעִי וְכָל חֶפְצִי יַשְׁלִם` (ישעיהו מד:כח) | [cognate] | Shepherd + called (45:3); a Babylonian royal frame. |
| LH prol. 137 | *nizmassu* | את חפצו | `וְכָל חֶפְצִי יַשְׁלִם` (ישעיהו מד:כח) | [equivalent] | Our proposal. |
| LH epil. 3186' | *rē'ûm mušallimum* | הרועה המשלים | `הָאֹמֵר לְכוֹרֶשׁ רֹעִי וְכָל חֶפְצִי יַשְׁלִם` (ישעיהו מד:כח) | [cognate] | Shepherd + *šalāmu* D / `השלים`, of a king of Babylon. Our proposal (the verb pair). |
| EST 662–663 | *dalta ina īnīkunu lušarhiṣū dalātekunu lū lā ippattiā* (Tayinat) | דלת לעיניכם ישטפו; דלתותיכם אל ייפתחו | `לִפְתֹּחַ לְפָנָיו דְּלָתַיִם וּשְׁעָרִים לֹא יִסָּגֵרוּ` (ישעיהו מה:א) | [divergence] | Cyrus's blessing, the exact reverse (doors opened, never shut). *daltu* = `דֶּלֶת`, *petû* = `פתח` [cognate]. Tayinat only for the verbs. Our proposal. |
| LH prol. 49 | *šumī ibbû* | בשמי קראו | `לְמַעַן תֵּדַע כִּי אֲנִי יְהוָה הַקּוֹרֵא בְשִׁמְךָ` (ישעיהו מה:ג) | [equivalent] | To Cyrus, king of Babylon; *nabû* ≠ קרא etymologically. From memory. |
| EST 431 | *erab Bēl ina Esaggil ay ukallimkunu* | את בוא בל באסגיל אל יראה לכם | `כָּרַע בֵּל קֹרֵס נְבוֹ` (ישעיהו מו:א) | [equivalent] | The procession of Bēl's image; `בֵּל` = the biblical form. Our proposal. |
| UN epil. g012 | *{ĝeš}gu-za gub-ba saḫar-ra ḫe₂-eb₂-ta-an-tuš* | מן הכסא אשר הועמד – בעפר ישב | `רְדִי וּשְׁבִי עַל עָפָר בְּתוּלַת בַּת בָּבֶל שְׁבִי לָאָרֶץ אֵין כִּסֵּא` (ישעיהו מז:א) | [equivalent] | From the throne to the dust. "Sit" restored. |
| EST 459–460 | *rēmu gimlu lū lā išakkan elīkun* | רחמים וחמלה אל תשים עליכם | `לֹא שַׂמְתְּ לָהֶם רַחֲמִים` (ישעיהו מז:ו) | [cognate] (*rēmu*) / [equivalent] (*šakānu* = `שׂם`) | The same idiom, addressed to Babylon. Our proposal. |
| EST 568–569 | *kî ša dišpu matiqūni dāmē ša issātikunu mārīkunu mārātikunu ina pîkunu limtiq* | כאשר דבש מתוק – דמי נשותיכם, בניכם, בנותיכם בפיכם ימתק | `וְהַאֲכַלְתִּי אֶת מוֹנַיִךְ אֶת בְּשָׂרָם וְכֶעָסִיס דָּמָם יִשְׁכָּרוּן` (ישעיהו מט:כו) | [equivalent] | Eating flesh and drinking blood "like sweet wine". Our proposal. |
| EST 655 | same | same | `תִּבְאַשׁ דְּגָתָם מֵאֵין מַיִם וְתָמֹת בַּצָּמָא` (ישעיהו נ:ב) | [cognate] | "Die of thirst" (also Judg 15:18). |
| EST 143–144 | *uznē … lā tupattâni* | את אזני … לא תפתחו | `אֲדֹנָי יְהוִה פָּתַח לִי אֹזֶן` (ישעיהו נ:ה) | [cognate] | Corpus renderings. |
| EST 588 | *haerušhi umāmu ina kippi* | החארושחו (?), החיה, במלכודת | `בָּנַיִךְ עֻלְּפוּ שָׁכְבוּ בְּרֹאשׁ כָּל חוּצוֹת כְּתוֹא מִכְמָר` (ישעיהו נא:כ) | [equivalent] | The sons like a wild animal in a net. Our proposal. |
| LH §170, 2047' | *imtanūšunūti* | מנאם, | `וְאֶת פֹּשְׁעִים נִמְנָה` (ישעיהו נג:יב) | [cognate] | *manû itti* "למנות עם" = `נִמְנָה אֶת`, אותו שורש ואותו מבנה. הצעה שלנו |
| LH §190, 2438' | *lā imtanūšu* | לא מנאו, | `וְאֶת פֹּשְׁעִים נִמְנָה` (ישעיהו נג:יב) | [cognate] | *manû* = |
| LH §274, 3074' | *nappāḫim* | נפח | `הִנֵּה אָנֹכִי בָּרָאתִי חָרָשׁ נֹפֵחַ בְּאֵשׁ פֶּחָם` (ישעיהו נד:טז) | [cognate] | *napāḫu* = `נפח`; Mishnaic `נַפָּח` in the same pattern. |
| IN IN §2, 2.8 | *UN-aš DINGIR{MEŠ}-aš-ša ZI-an-za ta-ma-a-iš ku-iš-ki UL ⸢ki⸣-i-pát ku-it UL* | נפש האדם ושל הָאֵלִים – אחרת היא במשהו? לא! זה עצמו – מה? לא! | `כִּי לֹא מַחְשְׁבוֹתַי מַחְשְׁבוֹתֵיכֶם וְלֹא דַרְכֵיכֶם דְּרָכָי נְאֻם יְהוָה` (ישעיהו נה:ח) | [divergence] | הנביא מעמיד את מחשבת האל מעל מחשבת האדם; החיבור החתי טוען את ההפך הגמור: נפש האל ונפש האדם הן אחת |
| LH §187, 2417' | *mār girseqîm* | בן גירסקו | `וְאַל יֹאמַר הַסָּרִיס הֵן אֲנִי עֵץ יָבֵשׁ` (ישעיהו נו:ג) | [divergence] | הסריס שאין לו בנים, ו־ה' נותן לו |
| LH §187, 2417' | *mār girseqîm* | בן גירסקו | `יָד וָשֵׁם טוֹב מִבָּנִים וּמִבָּנוֹת` (ישעיהו נו:ה) | [divergence] | כאן איש החצר שאין לו בנים מבטיח לעצמו בן באימוץ. הצעה שלנו |
| LH prol. 267 | *nābiḫī* | הנובחים? | `כְּלָבִים אִלְּמִים לֹא יוּכְלוּ לִנְבֹּחַ` (ישעיהו נו:י) | [cognate] | Depends on the reading (crux). |
| EST 630 | *kî appāri* | כאגמון | `הֲלָכֹף כְּאַגְמֹן רֹאשׁוֹ` (ישעיהו נח:ה) | [equivalent] | The rush as the bent and weak. |
| LH §132, 1508' | *ubānum eliša ittariṣ* | אצבע עליה הושטה | `שְׁלַח אֶצְבַּע וְדַבֶּר אָוֶן` (ישעיהו נח:ט) | [equivalent] | The pointed finger as accusation; the verb kept apart (`הושיט`). |
| LH §127, 1454' | *ubānam ušatriṣma* | אצבע הושיט, | `שְׁלַח אֶצְבַּע וְדַבֶּר אָוֶן` (ישעיהו נח:ט) | [equivalent] | הושטת האצבע כהאשמה (ראו 1508') |
| LH prol. 298–301 | idem | idem | `וּדְבָרַי אֲשֶׁר שַׂמְתִּי בְּפִיךָ` (ישעיהו נט:כא) | [equivalent] | Our proposal. |
| LH §117, 1336' | idem | idem | `לִקְרֹא לִשְׁבוּיִם דְּרוֹר` (ישעיהו סא:א) | [cognate] |  |
| UN prol. 133 | *ama-ar-gi₄* | דרור | `לִקְרֹא לִשְׁבוּיִם דְּרוֹר` (ישעיהו סא:א) | [equivalent] | Release of captives. |
| LH §257, 2941' | *ikkaram* | אכר | `וּבְנֵי נֵכָר אִכָּרֵיכֶם וְכֹרְמֵיכֶם` (ישעיהו סא:ה) | [cognate] | Loanword (F41). |
| EST 468 | *manû* | ימנו | `וּמָנִיתִי אֶתְכֶם לַחֶרֶב וְכֻלְּכֶם לַטֶּבַח תִּכְרָעוּ` (ישעיהו סה:יב) | [cognate] | "Count/assign into the hand of". Our proposal. |
| LI epil. 438′–439′ | *er₂ a-nir i-{d}utu di-bi niĝ₂-gig-ga ḫe₂-ni-ku₄* | בכי, אנחה, "הוי אותו!" ודינו לאיסור הכנסתי | `וְלֹא יִשָּׁמַע בָּהּ עוֹד קוֹל בְּכִי וְקוֹל זְעָקָה` (ישעיהו סה:יט) | [equivalent] | The end of weeping and of the cry as the mark of a just order. |
| IN IN §2, 2.7 | *e-eš-du nam-ma-kán pár-šu-u-ra-aš pé-di ŠAḪ-aš UR.GI₇-a[š] KÁ-aš le-e ti-ia-zi* | יהיה; ועוד: אל שער מקום התבשילים – חזיר, כלב – אַל ייכנס! | `עֹרֵף כֶּלֶב … דַּם חֲזִיר` (ישעיהו סו:ג) | [equivalent] | הכלב והחזיר הם גם אצל ישעיהו סמל הטומאה ההפוכה לעבודת האל. ההקבלה טיפולוגית: החזיר והכלב היו בעולם העתיק כולו בעלי החיים של האשפה והטומאה |
| EST 572 | *tuʾissu lū tākul* | התולעת תאכל | `כִּי תוֹלַעְתָּם לֹא תָמוּת` (ישעיהו סו:כד) | [equivalent] |  |
| UN prol. 39 | *emedu₂* | יליד הבית | `הַעֶבֶד יִשְׂרָאֵל אִם יְלִיד בַּיִת הוּא` (ירמיהו ב:יד) | [equivalent] | The same term as a metaphor of belonging. |
| LE §1, 15 | *uḫūlum* | בורית | `כִּי אִם תְּכַבְּסִי בַּנֶּתֶר וְתַרְבִּי לָךְ בֹּרִית` (ירמיהו ב:כב) | [equivalent] | The vegetable alkali used for washing. |
| LH §192, 2468' | *ul abī atta* | "לא אבי אתה, | `אֹמְרִים לָעֵץ אָבִי אַתָּה` (ירמיהו ב:כז) | [equivalent] | הקשר בין נוסחאות האימוץ והניתוק ב־LH ובתהלים ב – מן הזיכרון (פאול, "Adoption Formulae", Maarav 1979–80) |
| LH §135, 1561' | *ana ḫāwiriša* | לבעלה (הראשון) | `הֵן יְשַׁלַּח אִישׁ אֶת אִשְׁתּוֹ וְהָלְכָה מֵאִתּוֹ וְהָיְתָה לְאִישׁ אַחֵר הֲיָשׁוּב אֵלֶיהָ עוֹד` (ירמיהו ג:א) | [divergence] | השיבה אל הבעל הראשון אחרי שהיתה לאחר: בירמיהו שאלה רטורית ("אסור"), כאן חובה. מן הזיכרון (ווסטברוק) |
| LE §29, 102 | *aššassu itabbal* | את אשתו יטול | `הֵן יְשַׁלַּח אִישׁ אֶת אִשְׁתּוֹ וְהָלְכָה מֵאִתּוֹ וְהָיְתָה לְאִישׁ אַחֵר הֲיָשׁוּב אֵלֶיהָ עוֹד` (ירמיהו ג:א) | [equivalent] |  |
| MAL §40, r v 66 | *ḫarimtu* | זונה | `וּמֵצַח אִשָּׁה זוֹנָה הָיָה לָךְ` (ירמיהו ג:ג) | [equivalent] | The prostitute's bare brow. |
| LH §44, 845 | *kankallum* | ניר | `נִירוּ לָכֶם נִיר; וְאַל תִּזְרְעוּ אֶל קֹצִים` (ירמיהו ד:ג) | [equivalent] | Breaking up virgin land. Our proposal. |
| MAL §9, o i 89 | *kī būre ēpussi* | *כעגל* עשה לה | `סוּסִים מְיֻזָּנִים מַשְׁכִּים הָיוּ אִישׁ אֶל אֵשֶׁת רֵעֵהוּ יִצְהָלוּ` (ירמיהו ה:ח) | [equivalent] | An animal image for a man who assaults another's wife; crux. Our proposal. |
| LH epil. 3213' | idem | idem | `דִּין לֹא דָנוּ דִּין יָתוֹם` (ירמיהו ה:כח) | [cognate] | The same phrase with the orphan. |
| LH §5, 353 | *dīnam idīn* | דין דן | `דִּין לֹא דָנוּ דִּין יָתוֹם` (ירמיהו ה:כח) | [cognate] |  |
| EST 619 | same | same | `וַיִּהְיוּ לְאָחוֹר וְלֹא לְפָנִים` (ירמיהו ז:כד) | [equivalent] | Of those who did not listen. Our proposal. |
| EST 643–645 | *dišpu šamnī zinzaruʾu dām-erēni ana šakān pithikunu lihliq* | דבש, שמן, זנגביל, שרף ארז לָשׂוּם (על) דקירתכם יאבד | `הַצֳרִי אֵין בְּגִלְעָד אִם רֹפֵא אֵין שָׁם` (ירמיהו ח:כב) | [equivalent] | The healing resin that is not there (also 46:11; 51:8). From memory. |
| LH §215, 2610' | *šumma asûm* | `אם רופא` | `אִם רֹפֵא אֵין שָׁם` (ירמיהו ח:כב) | [equivalent] | `רוֹפֵא` כבעל מקצוע; מן הזיכרון |
| EST 437–439 | *liprus … ikkil šerri … ina sūqi rebīt* | תכרות … קול העולל … בשוק וברחוב | `לְהַכְרִית עוֹלָל מִחוּץ בַּחוּרִים מֵרְחֹבוֹת` (ירמיהו ט:כ) | [equivalent] | Cut off, infant, squares: all three elements. Our proposal. |
| EST 636C | P&W's restoration "[slaughter]" | — | `וַאֲנִי כְּכֶבֶשׂ אַלּוּף יוּבַל לִטְבוֹחַ` (ירמיהו יא:יט) | [equivalent] | Only on P&W's 1988 restoration (Tayinat has "roast"). Also Isa 53:7. |
| LH §136, 1567' | *ālšu iddīma* | את עירו נטש, | `עָזַבְתִּי אֶת בֵּיתִי נָטַשְׁתִּי אֶת נַחֲלָתִי` (ירמיהו יב:ז) | [equivalent] |  |
| EST 482–483 | *kalbu ḫuzīrū … lindaššarū* | כלבים, חזירים … יסחבו | `וְאֶת הַכְּלָבִים לִסְחֹב` (ירמיהו טו:ג) | [equivalent] | Dogs dragging the dead. Our proposal. |
| EST 483–484 | *pagrīkunu kaqqiru ay imḫur* | את פגריכם הקרקע אל תקבל | `לֹא יִסָּפְדוּ וְלֹא יִקָּבֵרוּ לְדֹמֶן עַל פְּנֵי הָאֲדָמָה יִהְיוּ` (ירמיהו טז:ד) | [equivalent] |  |
| LH §265, 3007' | *šimtam uttakkir* | ואת הסימן ניכר | `וַיְנַכְּרוּ אֶת הַמָּקוֹם הַזֶּה` (ירמיהו יט:ד) | [cognate] | *nakāru* D = `נִכֵּר` "alter, estrange". |
| EST 449 | same | same | `וְהַאֲכַלְתִּים אֶת בְּשַׂר בְּנֵיהֶם וְאֵת בְּשַׂר בְּנֹתֵיהֶם` (ירמיהו יט:ט) | [equivalent] |  |
| EST 450 | *amēlu šīr amēli lēkul* | אדם בשר אדם יאכל | `וְאִישׁ בְּשַׂר רֵעֵהוּ יֹאכֵלוּ` (ירמיהו יט:ט) | [equivalent] |  |
| EST 550 | *lušākilūkunu* (Š) | יאכילו אתכם | `וְהַאֲכַלְתִּים אֶת בְּשַׂר בְּנֵיהֶם וְאֵת בְּשַׂר בְּנֹתֵיהֶם` (ירמיהו יט:ט) | [cognate] | The same causative stem ("make them eat"), with sons, daughters and `אִישׁ בְּשַׂר רֵעֵהוּ`. Our proposal (the stem match). |
| EST 530–611 | *kî ša … kî hannīe* (the simile curses) | כאשר … ככה | `כָּכָה אֶשְׁבֹּר אֶת הָעָם הַזֶּה … כַּאֲשֶׁר יִשְׁבֹּר אֶת כְּלִי הַיּוֹצֵר` (ירמיהו יט:יא) | [equivalent] | A rite performed before witnesses (19:10 `לְעֵינֵי הָאֲנָשִׁים`) and interpreted with `כָּכָה … כַּאֲשֶׁר`. Our proposal. |
| LH prol. 37–39 | idem | idem | `וְהַצִּילוּ גָזוּל מִיַּד עָשׁוֹק` (ירמיהו כב:ג) | [equivalent] |  |
| LH epil. 3216' | *ḫablim šutēšurim* | את החבול ליישר | `וְהַצִּילוּ גָזוּל מִיַּד עָשׁוֹק` (ירמיהו כב:ג) | [equivalent] | From memory. |
| HL HL2 §145, 145.1 | *[ták-ku É GU₄ ku-iš-k]i ú-e-te-ez-zi 6 GÍN KÙ.BABBAR pa-a-i* | [אם מישהו] יבנה [בית שוורים] – שישה שקלים כסף ייתן. | `בְּרֵעֵהוּ יַעֲבֹד חִנָּם וּפֹעֲלוֹ לֹא יִתֶּן לוֹ` (ירמיהו כב:יג) | [equivalent] | הבנאי ושכרו |
| LH prol. 48 | *ṭubbu* | להיטיב | `וְעָשָׂה מִשְׁפָּט וּצְדָקָה אָז טוֹב לוֹ` (ירמיהו כב:טו) | [cognate] | The just king and "good". |
| LH epil. 3213' | *dīn mātim ana diānim* | את דין הארץ לדון | `דָּן דִּין עָנִי וְאֶבְיוֹן אָז טוֹב` (ירמיהו כב:טז) | [cognate] | *dīnam diānu* = `דן דין`, of the just king. |
| LH epil. 3156' | *rē'ûssina* | את רועותם | `הוֹי רֹעִים מְאַבְּדִים וּמְפִצִים אֶת צֹאן מַרְעִיתִי` (ירמיהו כג:א) | [equivalent] | Shepherdship of the people. |
| LI prol. 25–26 | *niĝ₂-si-sa₂ kalam-ma ĝa₂-ĝa₂-de₃* | מישרים בארץ לשום | `וְעָשָׂה מִשְׁפָּט וּצְדָקָה בָּאָרֶץ` (ירמיהו כג:ה) | [equivalent] | The king's task: justice "in the land". |
| EST 443–444 | *ikkil arî u tinūri … ay ibašši* | קול רחיים ותנור … אל יהי | `קוֹל רֵחַיִם וְאוֹר נֵר` (ירמיהו כה:י) | [equivalent] | The silenced mill. From memory (Hillers). |
| EST 126 | *taṣabbatāšūni* | תתפשו אותו | `וַיִּתְפְּשׂוּ אֹתוֹ הַכֹּהֲנִים וְהַנְּבִיאִים וְכָל הָעָם לֵאמֹר מוֹת תָּמוּת` (ירמיהו כו:ח) | [equivalent] | *ṣabātu* = `תָּפַשׂ`. |
| EST 545–546 | same | same | `צִיּוֹן שָׂדֶה תֵחָרֵשׁ` (ירמיהו כו:יח) | [equivalent] | Quoting Micah. |
| EST 525 | *šumkunu zērkunu liqmu* | את שמכם, את זרעכם ילהט | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [equivalent] | `קלה` by fire as a curse formula (`יְשִׂמְךָ יְהוָה כְּ…`); also 610. Our proposal. |
| EST 610 | *lānkunu ina Girra liqmû* | את תוארכם בגירה ילהטו | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [equivalent] | As 525. |
| EST 636C | *kî hurāpi gadê liqilūkunu* (Tayinat) | כטלה וגדי יִקְלוּ אתכם | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [cognate] | *qalû* = `קלה`; a king of Babylon roasting rebels, whose name becomes a curse (`וְלֻקַּח מֵהֶם קְלָלָה`). Tayinat only. Our proposal. |
| LH §157, 1853' | *qalû* | יקלום | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [cognate] | F28. |
| LH §110, 1238' | *iqallûši* | `יקלוה.` | `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ` (ירמיהו כט:כב) | [cognate] | *qalû* = `קלה` (F28): התורה אומרת `שרף`, LH את בן־השורש של `קלה`. מן הזיכרון |
| EST 117 | *maḫḫû* | משוגע | `לְכָל אִישׁ מְשֻׁגָּע וּמִתְנַבֵּא` (ירמיהו כט:כו) | [equivalent] | Source of the rendering. |
| LH epil. 3466'–3467' | *dīnšu ay idīn* | את דינו אל ידון | `אֵין דָּן דִּינֵךְ לְמָזוֹר; רְפֻאוֹת תְּעָלָה אֵין לָךְ` (ירמיהו ל:יג) | [cognate] | *dīnam diānu* = דן דין; with no healing (cf. 3609'–3612'). = EST 423 (Šamaš). |
| LH §264, 2993' | *uṣṣaḫḫir* | מיעט | `וְהִרְבִּתִים וְלֹא יִמְעָטוּ וְהִכְבַּדְתִּים וְלֹא יִצְעָרוּ` (ירמיהו ל:יט) | [cognate] | *ṣeḫēru* = `צער` "be few"; rendered by its parallel `מעט`. |
| MALB §20, r vii 21 | *kudurra* | `ציון` | `הַצִּיבִי לָךְ צִיֻּנִים` (ירמיהו לא:כ) | [equivalent] | `צִיּוּן` "marker". |
| LH epil. 3598' | *zēr awīlūtim* | זרע אדם | `זֶרַע אָדָם וְזֶרַע בְּהֵמָה` (ירמיהו לא:כו) | [cognate] | Same phrase (this Bible's numbering; usually 31:27). |
| MALB §6, o iii 13–15 | *ša laqāšunu u dabābšunu ibaššiūni* | `(מי) אשר לקיחתם והדיבור (עליהם) ישנם (לו)` | `קְנֵה לְךָ אֶת שָׂדִי אֲשֶׁר בַּעֲנָתוֹת כִּי לְךָ מִשְׁפַּט הַגְּאֻלָּה לִקְנוֹת` (ירמיהו לב:ז) | [equivalent] | The right "to take them" = a right of pre-emption, like `מִשְׁפַּט הַגְּאֻלָּה לִקְנוֹת` (from memory); but any claimant, not the kinsman. |
| LH §7, 396 | *balum šībī* | `בלי עדים` | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים` (ירמיהו לב:י) | [equivalent] | הצעה שלנו |
| LH §9, 462 | *kasap išqulu* | `את הכסף אשר שקל` | `וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | [cognate] | שקילת הכסף בקנייה |
| LH §104, 1164' | *šamallûm kanīk kaspim* | `השוליה תעודה חתומה של הכסף` | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | [equivalent] | תעודה חתומה על תשלום כסף. מן הזיכרון. |
| MALB §6, o iii 16–17, 37–38 | *ṭuppātešunu lušēlianimma ana pāni qēpūte liškunū … ṭuppātešunu išaṭṭurū iddunū* | `יציגו את לוחותיהם, לפני הפקידים יָשִׂימוּ … את לוחותיהם יכתבו, יתנו` | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | [equivalent] | The written deeds of a field purchase. |
| HL PT § XXXV, 151 | *nu=za kūtruwāezzi* | ויעיד לעצמו עדים, | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים` (ירמיהו לב:י) | [equivalent] | "העיד עדים" כהליך פרטי של רישום עסקה |
| IN IN §8, 8.10 | *ka-a-aš-wa-ra-at-ši LUGAL-uš pa-iš KI.LÁ.BI-ŠU-⸢ia-at⸣ ma-ši-wa-an* | "המלך הזה נתן אותו לו", וגם משקלו – כמה הוא; | `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם וָאָעֵד עֵדִים; וָאֶשְׁקֹל הַכֶּסֶף בְּמֹאזְנָיִם` (ירמיהו לב:י) | [equivalent] | שטר הקנייה של ירמיהו: כתיבה, חתימה, עדים ומשקל הכסף – אותם רכיבים כבשורות 8.9–8.18. ההקבלה טיפולוגית: מנהג רישום משותף למזרח הקדום |
| MALB §6, o iii 48 | *3 ṭuppāte ša sassu nāgire* | `שלושה לוחות של הכרזת הכרוז` | `וָאֶקַּח אֶת סֵפֶר הַמִּקְנָה אֶת הֶחָתוּם … וְאֶת הַגָּלוּי` (ירמיהו לב:יא) | [divergence] | Three tablets vs. the sealed and the open copy (הצעה שלנו). |
| MALB §6, o iii 30–31, 38 | *ṭupšar āle … iddunū* | `סופר העיר … יתנו` | `וָאֶתֵּן אֶת הַסֵּפֶר הַמִּקְנָה אֶל בָּרוּךְ בֶּן נֵרִיָּה` (ירמיהו לב:יב) | [equivalent] | The scribe and the delivery of the deed. |
| LH §37, 776 | *iḫḫeppe* | `יְנוּפַּץ,` | `וּנְתַתָּם בִּכְלִי חָרֶשׂ לְמַעַן יַעַמְדוּ יָמִים רַבִּים` (ירמיהו לב:יד) | [equivalent] | שטר הקנייה של חנמאל נשמר ליום הגאולה; כאן שטר הקנייה האסורה נשבר. מן הזיכרון. |
| MALB §6, o iii 2–12 | *ana ṣarpe … ilaqqe … ana ṣarpe alaqqe* | `בכסף [יקח] … בכסף אקח` | `שָׂדוֹת בַּכֶּסֶף יִקְנוּ וְכָתוֹב בַּסֵּפֶר וְחָתוֹם וְהָעֵד עֵדִים` (ירמיהו לב:מד) | [equivalent] | "Take for silver" = buy; `קנה` kept out of the lines. |
| EST 320 | *zār šarri pāniūti* | זרע המלכים הראשונים | `הַמְּלָכִים הָרִאשֹׁנִים אֲשֶׁר הָיוּ לְפָנֶיךָ` (ירמיהו לד:ה) | [equivalent] |  |
| LH §117, 1336' | idem | idem | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) | [cognate] | Zedekiah's release of debt slaves – the closest biblical use. |
| LH §280, 3127' | *andurāršunu* | דרורם | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) | [cognate] | The release of slaves. |
| LH §171, 2071' | *andurār* | דרור | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) | [equivalent] | `דרור` לעבדים; ראו הפסוק הבא |
| LI prol. 68–69 | *ama-ar-gi₄-bi ḫu-mu-ĝar* | את דרורם שמתי | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) | [equivalent] | **A king's release of enslaved citizens** (Zedekiah's covenant); [divergence] there done under the Torah's law (לד:יד) and revoked (לד:יא). |
| UN prol. 133–134 | *ama-ar-gi₄-bi ḫu-mu-ĝar* | את דרורם שמתי | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) | [equivalent] | A king proclaims release (Zedekiah). |
| LH §171, 2071' | *andurār* | דרור | `לְשַׁלַּח אִישׁ אֶת עַבְדּוֹ וְאִישׁ אֶת שִׁפְחָתוֹ` (ירמיהו לד:ט) | [equivalent] | הדרור כולל את השפחה (*amtu*) |
| EST 392 | same | same | `אֲשֶׁר בָּאוּ בַבְּרִית` (ירמיהו לד:י) | [equivalent] | Also `וָאָבוֹא בִבְרִית אֹתָךְ` (יחזקאל טז:ח). |
| LH §171, 2076' | *ana wardūtim* | לעבדות | `וַיִּכְבְּשׁוּם לַעֲבָדִים וְלִשְׁפָחוֹת` (ירמיהו לד:יא) | [equivalent] | השיעבוד מחדש של מי שיצא לדרור, מה שהחוק כאן אוסר. הצעה שלנו |
| UN prol. 130b–134 | *nam-ARAD₂ … ama-ar-gi₄* | עבדות … דרור | `וַיָּשׁוּבוּ אַחֲרֵי כֵן וַיָּשִׁבוּ אֶת הָעֲבָדִים וְאֶת הַשְּׁפָחוֹת אֲשֶׁר שִׁלְּחוּ חָפְשִׁים` (ירמיהו לד:יא) | [divergence] | In Jeremiah servitude returns after the release; here release ends servitude. |
| LH §117, 1331' | idem | idem | `מִקֵּץ שֶׁבַע שָׁנִים תְּשַׁלְּחוּ אִישׁ אֶת אָחִיו הָעִבְרִי אֲשֶׁר יִמָּכֵר לְךָ` (ירמיהו לד:יד) | [divergence] |  |
| EST 426–427 | same | same | `וְהָיְתָה נִבְלָתָם לְמַאֲכָל לְעוֹף הַשָּׁמַיִם` (ירמיהו לד:כ) | [equivalent] | Said of covenant breakers (34:18). |
| EST 410–411 | *ana Girra tapaqqidāni* | לגירה תפקידו | `עַד תֹּם כָּל הַמְּגִלָּה עַל הָאֵשׁ אֲשֶׁר עַל הָאָח` (ירמיהו לו:כג) | [equivalent] | The king burns the written scroll (`אַתָּה שָׂרַפְתָּ אֶת הַמְּגִלָּה הַזֹּאת`, ירמיהו לו:כט). Coordinator's list; literature not checked. |
| EST 467 | *Baiti-ili* | בית־אל | `כַּאֲשֶׁר בֹּשׁוּ בֵּית יִשְׂרָאֵל מִבֵּית אֵל מִבְטֶחָם` (ירמיהו מח:יג) | [cognate] | Bethel as a god (Elephantine: Anat-Bethel). Name restored in Nimrud, preserved in Tayinat. Known. |
| EST 573 | same | same | `הִנְנִי שֹׁבֵר אֶת קֶשֶׁת עֵילָם` (ירמיהו מט:לה) | [cognate] |  |
| EST 617 | same | same | `וְהָיוּ לְנָשִׁים` (ירמיהו נ:לז) | [equivalent] | Babylon's warriors. |
| EST 3 | (T) *pāḫat Kunalia* | (apparatus) פחת כונליה | `פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Tayinat only; *šaknu* = `סגן` in T i 7. Loans. |
| EST 77 | *pāhāti* | הפחות | `פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Loan. |
| EST 665 | *šakin māt Dur-Šarrukku* | סְגַן ארץ דור־שרוכו | `וְנִפַּצְתִּי בְךָ פַּחוֹת וּסְגָנִים` (ירמיהו נא:כג) | [cognate] | Hebrew `סָגָן` is a loan from *šaknu*; Assyrian and Babylonian officials (also Ezek 23:6; Jer 51:28). |
| EST 617 | same | same | `נָשְׁתָה גְבוּרָתָם הָיוּ לְנָשִׁים` (ירמיהו נא:ל) | [equivalent] |  |
| LH epil. 3581'–3584' | *kīma išātim ezzetim ša apim nišīšu liqmi* | כאש עזה של אגם את אנשיו ילהט | `וְהַמַּעְבָּרוֹת נִתְפָּשׂוּ וְאֶת הָאֲגַמִּים שָׂרְפוּ בָאֵשׁ` (ירמיהו נא:לב) | [equivalent] | Burning reed-marshes (of Babylon). Our proposal. |
| EST 484 | *karšu* | כרס | `מִלָּא כְרֵשׂוֹ מֵעֲדָנָי` (ירמיהו נא:לד) | [cognate] |  |
| EST 411 | *ina mê tanaddāni* | למים תשליכו | `תִּקְשֹׁר עָלָיו אֶבֶן וְהִשְׁלַכְתּוֹ אֶל תּוֹךְ פְּרָת` (ירמיהו נא:סג) | [equivalent] | A written book thrown into the Euphrates. Coordinator's list. |
| EST 608–611 | *kî ša … kî hannīe … ina mê luṭabbû* | כאשר … ככה … במים יטביעו | `וְאָמַרְתָּ כָּכָה תִּשְׁקַע בָּבֶל וְלֹא תָקוּם` (ירמיהו נא:סד) | [equivalent] | A symbolic act of sinking followed by `כָּכָה` (the scroll thrown into the Euphrates, 51:63): the form of the simile curse. Our proposal. |
| EST 568 | *dišpu … matāqu … ina pî* | דבש מתוק … בפיכם | `וַתְּהִי בְּפִי כִּדְבַשׁ לְמָתוֹק` (יחזקאל ג:ג) | [cognate] | Same three words (`בפי`, `דבש`, `מתוק`), for the eaten scroll. |
| EST 511–512 | *ilāni … ina qātīni zarʾīni zarʾ-zarʾīni lubaʾʾiʾū* | האלים … מידנו, מזרענו, מזרע זרענו יבקשו | `וְדָמוֹ מִיָּדְךָ אֲבַקֵּשׁ` (יחזקאל ג:יח) | [equivalent] | *buʾʾû ina qāti* = `בִּקֵּשׁ מִיַּד`, word for word: the god demands the guilt from the responsible party (also 3:20; 33:8). **Not in Tayinat** (509–512 lost there). Our proposal. |
| EST 567 | same | same | `וְאָכְלוּ לֶחֶם בְּמִשְׁקָל וּבִדְאָגָה` (יחזקאל ד:טז) | [equivalent] |  |
| LH §226, 2687' | *šumma gallābum* | `אם גַּלָּב` | `תַּעַר הַגַּלָּבִים` (יחזקאל ה:א) | [cognate loan] | המילה העברית (פעם אחת במקרא) שאולה מן האכדית *gallābu* |
| HL HL2 §144, 144.1 | *{LÚ}ŠU.I* | [אם גַּלָּב] ייתן [זִינַלִּי (של) נחושת לחבר]ו, | `תַּעַר הַגַּלָּבִים` (יחזקאל ה:א) | [cognate] | ŠU.I נקרא באכדית *gallābu*, קרובת `גַּלָּב`; דרך הקריאה האכדית של השומרוגרמה, לא דרך החתית |
| EST 637 | *kî ša killu ša suʾʾī annūte ihallulūni* | כאשר קול היונים האלה הומה | `כְּיוֹנֵי הַגֵּאָיוֹת כֻּלָּם הֹמוֹת` (יחזקאל ז:טז) | [equivalent] | The dove's moan as mourning (also Isa 38:14; 59:11; Nah 2:8). Our proposal. |
| EST 649–650 | same | same | `וּפָרַשְׂתִּי אֶת רִשְׁתִּי עָלָיו וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יב:יג) | [equivalent] | Zedekiah. |
| LH §233, 2747' | *igārum iqtūp* | `וקיר נָטָה,` | `וְהִנֵּה נָפַל הַקִּיר הֲלוֹא יֵאָמֵר אֲלֵיכֶם אַיֵּה הַטִּיחַ` (יחזקאל יג:יב) | [equivalent] | הקיר שנבנה שלא כראוי ונפל. הצעה שלנו |
| LH §185, 2400' | *ina mêšu* | במימיו | `וּבְמַיִם לֹא רֻחַצְתְּ לְמִשְׁעִי` (יחזקאל טז:ד) | [equivalent] | התינוקת המושלכת שלא נרחצה במים, ש־ה' "מאמץ" אותה ("בדמיך חיי", טז:ו); מלול 1990 קרא את יחזקאל טז:א–ז כאימוץ של תינוק מושלך, בהשוואה למונח הבבלי "במימיו (ובדמו)". מן הזיכרון |
| LH §128, 1464' | *riksātiša* | ואת תנאיה | `וָאֶשָּׁבַע לָךְ וָאָבוֹא בִבְרִית אֹתָךְ נְאֻם אֲדֹנָי יְהוִה וַתִּהְיִי לִי` (יחזקאל טז:ח) | [equivalent] |  |
| LH §171, 2080' | *u nudunnâm* | ואת המתן | `וְאַתְּ נָתַתְּ אֶת נְדָנַיִךְ לְכָל מְאַהֲבַיִךְ` (יחזקאל טז:לג) | [cognate] | `נְדָנַיִךְ` "מתנותייך" נחשב לשאילה מן *nudunnû*; ביחזקאל האשה היא הנותנת, כהיפוך המוסד. מן הזיכרון |
| MAL §40, r v 72–74 | *šukuttaša lā ilaqqeū lubultaša ṣābitāšša ilaqqe* | את עדייה לא יקחו; את לבושה – התופש אותה – יקח | `וְהִפְשִׁיטוּ אוֹתָךְ בְּגָדַיִךְ וְלָקְחוּ כְּלֵי תִפְאַרְתֵּךְ` (יחזקאל טז:לט) | [divergence] | Stripping the harlot: Ezekiel takes clothes and jewellery, MAL the clothes only. |
| EST 627 | *kappī ša ahīšunu šēpēšunu ubattiqūni* | ואת כפות זרועותיהם, את רגליהם בִּתֵּק | `וּבִתְּקוּךְ בְּחַרְבוֹתָם` (יחזקאל טז:מ) | [cognate] | *batāqu* = `בתק` (an Ezekiel hapax), in the punishment of the covenant-breaker. Our proposal. |
| EST 72 | *māmīt tatammâni* | תישבעו אלה | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | The vassal oath to the king of Babylon. |
| EST 129 | *māmīt tatammâni* | [תישבעו] אלה | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | The verb is restored. |
| EST 308–309 | *tamītu ša urdānūti tatammâniššūni* | שבועת עבדות תישבעו לו | `וַיִּכְרֹת אִתּוֹ בְּרִית וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג) | [equivalent] | A vassal's oath of servitude. |
| EST 378 | *māmīt tapaššarāni* | אלה תתירו | `הֲיִצְלָח הֲיִמָּלֵט הָעֹשֵׂה אֵלֶּה וְהֵפֵר בְּרִית וְנִמְלָט` (יחזקאל יז:טו) | [equivalent] | No escape from a vassal oath. |
| EST 399 | *eggûma iparraṣu māmīssun* | יזניח ויפרוץ את אלתם | `אֲשֶׁר בָּזָה אֶת אָלָתוֹ וַאֲשֶׁר הֵפֵר אֶת בְּרִיתוֹ` (יחזקאל יז:טז) | [equivalent] | Zedekiah's vassal oath: despising the oath-curse and breaking it (also 17:18–19). *parāṣu* ~ `פרץ` [cognate] in the rendering. From memory (Ezek 17 and vassal oaths). |
| MAL §47, r vii 26–28 | *māmīta ša ana šarre u mārišu tamʾātani lā ipaššarakkunu* | את האלה אשר למלך ולבנו נשבעת, לא יפשור לכם | `אִם לֹא אָלָתִי אֲשֶׁר בָּזָה` (יחזקאל יז:יט) | [equivalent] | The oath to the king; cf. EST (the oath "to the king and his son", `../1-אמנת-הירושה-של-אסרחדון/`). |
| EST 582, 590 | *ṣabātu* (trap) | תופשים / תיתפשו | `וּפָרַשְׂתִּי עָלָיו רִשְׁתִּי וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יז:כ) | [equivalent] | The vassal king who broke his oath to Babylon (17:13–19) "caught" in the god's net. Our proposal. |
| EST 649–650 | *Šamaš huhāru ša siparri ina muhhikunu … lishūpu ina gišparri* | שַׁמַשׁ רשת של ארד עליכם … יפרוש; בפח | `וּפָרַשְׂתִּי עָלָיו רִשְׁתִּי וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יז:כ) | [equivalent] | The god's net over **the vassal who broke his oath** (`אָלָתִי אֲשֶׁר בָּזָה`, 17:19). `רשת`, `פרש` are the natural Hebrew and were kept knowingly (Decision 7); *gišparru* is `פח` since the 2026-10-23 harmonization (Ezekiel's `מצודה`: [equivalent]). From memory (Tsevat 1959). |
| LH §230, 2725' | *mār itinnim šuāti* | `את בן הבנאי ההוא` | `אָבוֹת יֹאכְלוּ בֹסֶר וְשִׁנֵּי הַבָּנִים תִקְהֶינָה` (יחזקאל יח:ב) | [divergence] | מן הזיכרון |
| LH §210, 2588'–2589' | *mārassu idukkū* | את בתו יהרגו | `בֵּן לֹא יִשָּׂא בַּעֲוֹן הָאָב` (יחזקאל יח:כ) | [divergence] |  |
| LH §230, 2726' | *idukkū* | יהרגו | `בֵּן לֹא יִשָּׂא בַּעֲוֹן הָאָב` (יחזקאל יח:כ) | [divergence] |  |
| LH §230, 2725' | *mār itinnim šuāti* | `את בן הבנאי ההוא` | `בֵּן לֹא יִשָּׂא בַּעֲוֹן הָאָב` (יחזקאל יח:כ) | [divergence] | מן הזיכרון |
| LH epil. 3471'–3475' | *ina bīrišu šīram lemnam* | בבדיקתו בשר רע | `קִלְקַל בַּחִצִּים שָׁאַל בַּתְּרָפִים רָאָה בַּכָּבֵד` (יחזקאל כא:כו) | [equivalent] | Babylonian royal extispicy. |
| EST 192 | same | same | `הַשָּׁפָלָה הַגְבֵּהַּ וְהַגָּבֹהַּ הַשְׁפִּיל` (יחזקאל כא:לא) | [cognate] |  |
| EST 534 | *kî ša annaki ina pān išāti lā izzazūni* | כאשר הבדיל לפני האש אינו עומד | `וּבְדִיל אֶל תּוֹךְ כּוּר לָפַחַת עָלָיו אֵשׁ לְהַנְתִּיךְ` (יחזקאל כב:כ) | [equivalent] | Metals melting in fire as an image of judgment (22:18–22). |
| EST 563 | *tanappahāni* | נופחים | `וְנָפַחְתִּי עֲלֵיכֶם בְּאֵשׁ עֶבְרָתִי` (יחזקאל כב:כא) | [cognate] | *napāhu* = `נפח`; lexical. |
| MAL §55, r viii 22 | *mazāʾu* | ומִיעֲכָהּ | `שָׁמָּה מֹעֲכוּ שְׁדֵיהֶן` (יחזקאל כג:ג) | [equivalent] | "Press" in a sexual sense. |
| MAL §4, o i 49–50 | *appēšunu uznēšunu unakkusū* | את אפיהם, את אזניהם יקצצו | `אַפֵּךְ וְאָזְנַיִךְ יָסִירוּ` (יחזקאל כג:כה) | [equivalent] | Nose and ears cut off: in Ezekiel the punishment of the adulterous wife (Oholibah); MAL §4, §5, §15, §24. From memory. |
| MAL §15, o ii 53 | *appa ša aššitišu inakkis* | את אף אשתו יקצוץ | `אַפֵּךְ וְאָזְנַיִךְ יָסִירוּ` (יחזקאל כג:כה) | [equivalent] | The adulteress's nose. From memory. |
| MAL §24, o iii 55–57 | *aššassu unakkušma … uznēša unakkusū* | את אשתו [יקצצנה] … את אזניה יקצצו | `אַפֵּךְ וְאָזְנַיִךְ יָסִירוּ` (יחזקאל כג:כה) | [equivalent] | Mutilation (ears) of the wife and of the householder's wife. From memory. |
| MAL §40, r v 92 | *uznēša unakkusū* | את אזניה יקצצו | `אַפֵּךְ וְאָזְנַיִךְ יָסִירוּ` (יחזקאל כג:כה) | [equivalent] | The ears cut off (the slave-woman who veiled). From memory. |
| LH §194, 2501' | *tulāša* | את שדה | `וְשָׁדַיִךְ תְּנַתֵּקִי` (יחזקאל כג:לד) | [equivalent] | עונש של קריעת השדיים (לאשה החוטאת, במשל) |
| LH §266, 3016' | *tarbaṣim* | מרבץ | `וְאֶת בְּנֵי עַמּוֹן לְמִרְבַּץ צֹאן` (יחזקאל כה:ה) | [cognate] | Same root and pattern. |
| LH §234, 2752' | *šumma malāḫum* | `אם מַלָּח` | `כָּל אֳנִיּוֹת הַיָּם וּמַלָּחֵיהֶם הָיוּ בָךְ` (יחזקאל כז:ט) | [cognate loan] |  |
| LH §234, 2754' | *ana awīlim ipḫe* | `לאיש סָתַם,` | `מַחֲזִיקֵי בִּדְקֵךְ` (יחזקאל כז:ט) | [equivalent] | מתקני הסדקים של אוניות צור. הצעה שלנו |
| LH §237, 2796' | *u ša libbiša* | `ואת אשר בתוכה` | `הוֹנֵךְ וְעִזְבוֹנַיִךְ מַעֲרָבֵךְ מַלָּחַיִךְ וְחֹבְלָיִךְ` (יחזקאל כז:כז) | [equivalent] | הספינה, מטענה ומלחיה שטבעו |
| EST 645 | *ana šakān pithikunu* | לָשׂוּם (על) דקירתכם | `וְהִנֵּה לֹא חֻבְּשָׁה לָתֵת רְפֻאוֹת לָשׂוּם חִתּוּל לְחָבְשָׁהּ` (יחזקאל ל:כא) | [equivalent] | `לָשׂוּם` on the wound in both (*šakānu* = `שׂם`); the broken arm will not hold the sword. Our proposal. |
| LH epil. 3611' | *ina ṣimdi* | בחבישה | `וְהִנֵּה לֹא חֻבְּשָׁה לָתֵת רְפֻאוֹת לָשׂוּם חִתּוּל לְחָבְשָׁהּ` (יחזקאל ל:כא) | [equivalent] |  |
| LH §267, 3022' | *rē'ûm īgūma* | הרועה התעצל | `אֶת הַנַּחְלוֹת לֹא חִזַּקְתֶּם וְאֶת הַחוֹלָה לֹא רִפֵּאתֶם` (יחזקאל לד:ד) | [equivalent] | The negligent shepherd and the sick flock. |
| LH §221, 2652' | *šebirtam* | `שבורה` | `וְאֶת הַחוֹלָה לֹא רִפֵּאתֶם וְלַנִּשְׁבֶּרֶת לֹא חֲבַשְׁתֶּם` (יחזקאל לד:ד) | [equivalent] | הצמד "שבור" ו"חולה" כמו כאן (2652', 2655'), במעשה הרועה. הצעה שלנו |
| LH prol. 115–116 | *mupaḫḫir nišī sapḫātim* | המקבץ את האנשים הנפוצים | `וַתְּפוּצֶינָה מִבְּלִי רֹעֶה` (יחזקאל לד:ה) | [equivalent] | The shepherd gathers the scattered. Our proposal. |
| LH prol. 175 | *mirītim* | מרעה | `בְּמִרְעֶה טּוֹב אֶרְעֶה אֹתָם` (יחזקאל לד:יד) | [cognate] |  |
| LH epil. 3179'–3180' | idem | idem | `שָׁם תִּרְבַּצְנָה בְּנָוֶה טּוֹב` (יחזקאל לד:יד) | [cognate] | `נווה` + `רבץ`. |
| LH epil. 3180' | *ušarbiṣ* | הרבצתי | `אֲנִי אֶרְעֶה צֹאנִי וַאֲנִי אַרְבִּיצֵם` (יחזקאל לד:טו) | [cognate] | The shepherd god. |
| LH prol. 51 | idem | idem | `וַהֲקִמֹתִי עֲלֵיהֶם רֹעֶה אֶחָד` (יחזקאל לד:כג) | [cognate] |  |
| EST 640 | *eṣmātekunu ana ahēʾiš lū lā iqarribā* | עצמותיכם זו אל זו אל יקרבו | `וַתִּקְרְבוּ עֲצָמוֹת עֶצֶם אֶל עַצְמוֹ` (יחזקאל לז:ז) | [divergence] | Bones + *qerēbu* (`קרב`) + "to one another": the same phrase, reversed (Ezekiel's bones come together to life; EST's never). Our proposal. |
| LH §273, 3051' | *rēš šattim* | ראש השנה | `בְּרֹאשׁ הַשָּׁנָה בֶּעָשׂוֹר לַחֹדֶשׁ` (יחזקאל מ:א) | [cognate] | The only biblical `ראש השנה`, "beginning of the year". |
| LE §36, 120 | *sippu la ḫališ* | הסף לא מגורד | `בְּתִתָּם סִפָּם אֶת סִפִּי` (יחזקאל מג:ח) | [cognate] | *sippu* = `סַף`; the signs of a break-in (cf. `בַּמַּחְתֶּרֶת`, Exod 22:1). |
| LH prol. 167 | *uṣurātim* | את הצורות | `צוּרַת הַבַּיִת וּתְכוּנָתוֹ` (יחזקאל מג:יא) | [equivalent] | Temple plans. Our proposal. |
| IN IN §2, 2.2 | *wa-ar-[pa]-an-ti-ša-at kar-ta-an-te-eš a-ša-an-du iš-ḫi-⸢i⸣-ni-uš-ma-aš-kán* | ורחוצים, גזוזים יהיו; ואילו שערם – | `וְרֹאשָׁם לֹא יְגַלֵּחוּ וּפֶרַע לֹא יְשַׁלֵּחוּ; כָּסוֹם יִכְסְמוּ אֶת רָאשֵׁיהֶם` (יחזקאל מד:כ) | [divergence] | לכהני יחזקאל אסור לגלח את הראש ולגדל פרע, והם קוצצים (כוסמים) את שערם: כמו אופי האל החתי, שערם קצר וגזוז |
| UN prol. 177–181 | *niĝ₂-erim₂ niĝ₂-a₂-zi … u₂-gu ḫe₂-ni-de₂ niĝ₂-si-sa₂ kalam-ma ḫu-mu-ni-ĝar* | רשע, חבלה … איבדתי, מישרים בארץ שמתי | `חָמָס וָשֹׁד הָסִירוּ וּמִשְׁפָּט וּצְדָקָה עֲשׂוּ` (יחזקאל מה:ט) | [equivalent] | Remove violence, establish justice – and then (Ezek 45:10–12) the measures, as UN 135–149. `חמס` kept out of the Hebrew. |
| UN prol. 135–149 | (the measures) | (as above) | `וְהַשֶּׁקֶל עֶשְׂרִים גֵּרָה; עֶשְׂרִים שְׁקָלִים חֲמִשָּׁה וְעֶשְׂרִים שְׁקָלִים עֲשָׂרָה וַחֲמִשָּׁה שֶׁקֶל הַמָּנֶה יִהְיֶה לָכֶם` (יחזקאל מה:יב) | [equivalent] | The closest biblical counterpart: the prince fixes the ephah, bath and homer (45:10–11) and the shekel up to the mina, right after "remove violence, do justice" (45:9) – the order of UN 135–149 / 177–181. |
| LH §165, 1957' | *qīšti abum* | את המענק אשר האב | `כִּי יִתֵּן הַנָּשִׂיא מַתָּנָה לְאִישׁ מִבָּנָיו נַחֲלָתוֹ הִיא לְבָנָיו תִּהְיֶה` (יחזקאל מו:טז) | [equivalent] | מתנת האב לאחד מבניו בחייו נשארת שלו ושל בניו, כמו המענק כאן. הצעה שלנו |
| LH §117, 1336' | idem | idem | `עַד שְׁנַת הַדְּרוֹר` (יחזקאל מו:יז) | [cognate] | A fixed release year. |
| LH §34, 749 | *qīšti šarrum* | `מענק אשר המלך` | `וְכִי יִתֵּן מַתָּנָה מִנַּחֲלָתוֹ לְאַחַד מֵעֲבָדָיו וְהָיְתָה לּוֹ עַד שְׁנַת הַדְּרוֹר וְשָׁבַת לַנָּשִׂיא` (יחזקאל מו:יז) | [equivalent] | מתנת השליט לעבדו |
| LH §171, 2071' | *andurār* | דרור | `וְהָיְתָה לּוֹ עַד שְׁנַת הַדְּרוֹר וְשָׁבַת לַנָּשִׂיא` (יחזקאל מו:יז) | [cognate] | `דרור` בהקשר של ירושה ועבדים, בפסוק הסמוך למתנת האב לבנו (מו:טז) |
| LH §34, 749 | *qīšti šarrum* | `מענק אשר המלך` | `וְלֹא יִקַּח הַנָּשִׂיא מִנַּחֲלַת הָעָם` (יחזקאל מו:יח) | [equivalent] | מתנת השליט לעבדו |
| EST 453 | *qaštakunu lišbir* | את קשתכם תשבור | `וְשָׁבַרְתִּי אֶת קֶשֶׁת יִשְׂרָאֵל` (הושע א:ה) | [cognate] | From memory. |
| EST 573 | *qaštukunu lišbirū* | את קשתכם ישברו | `וְשָׁבַרְתִּי אֶת קֶשֶׁת יִשְׂרָאֵל` (הושע א:ה) | [cognate] | As 453 (part 5). |
| LH §128, 1467' | *ul aššat* | לא אשה היא. | `כִּי הִיא לֹא אִשְׁתִּי וְאָנֹכִי לֹא אִישָׁהּ` (הושע ב:ד) | [equivalent] | אותו משפט שמני, בשלילה, כנוסח של התרת הנישואים. מן הזיכרון (גורדון; ההשוואה של הושע ב:ד לנוסחאות הגירושין מקובלת) |
| LH §142, 1655' | *ul taḫḫazanni* | "לא תשאני" | `כִּי הִיא לֹא אִשְׁתִּי וְאָנֹכִי לֹא אִישָׁהּ` (הושע ב:ד) | [equivalent] | נוסח התרת הנישואים; [divergence] הטקסט כאן *ul taḫḫazanni* "לא תשאני", לא נוסח החוזים *ul mutī atta* "לא בעלי אתה" (השוו §282 `לא אדוני אתה`, T6). מן הזיכרון (גורדון) |
| LH §192, 2468' | *ul abī atta* | "לא אבי אתה, | `כִּי הִיא לֹא אִשְׁתִּי וְאָנֹכִי לֹא אִישָׁהּ` (הושע ב:ד) | [equivalent] | נוסחת הפרת קשר משפחתי ("לא X אתה") |
| MAL §41, r vi 1–5 | *esirtušu upaṣṣan … aššitī šīt … aššassu šīt* | את פילגשו ירעיל … "אשתי היא" … אשתו היא | `כִּי הִיא לֹא אִשְׁתִּי וְאָנֹכִי לֹא אִישָׁהּ` (הושע ב:ד) | [equivalent] | A declaration formula of marital status (in Hosea negative). From memory. |
| MAL §40, r v 73 | *lubultaša … ilaqqe* | את לבושה … יקח | `פֶּן אַפְשִׁיטֶנָּה עֲרֻמָּה` (הושע ב:ה) | [equivalent] | Stripping as the punishment of the unfaithful woman. |
| HL HL2 §171, 171.1 | *… TÚG-SÚ! …* | אם הָאֵם תטה את בגדה הצידה מבנה, את בניה החוצה | `פֶּן אַפְשִׁיטֶנָּה עֲרֻמָּה` (הושע ב:ה) | [equivalent] | הסרת הבגד כסמל לניתוק קשר משפחתי |
| LH §178, 2263' | *ipram piššatam u lubūšam* | מזונות, משחה ולבוש | `נֹתְנֵי לַחְמִי וּמֵימַי צַמְרִי וּפִשְׁתִּי שַׁמְנִי וְשִׁקּוּיָי` (הושע ב:ז) | [equivalent] | הלחם, הצמר והשמן שהאשה מקבלת מ"מאהביה" |
| MAL §36, o iv 86–87 | *lā šamaššammū lā šīpāte lā lubulta lā ukullâ* | לא שמן, לא צמר, לא לבוש, לא מחיה | `נֹתְנֵי לַחְמִי וּמֵימַי צַמְרִי וּפִשְׁתִּי שַׁמְנִי וְשִׁקּוּיָי` (הושע ב:ז) | [equivalent] | The same list of a wife's maintenance. |
| UN e004–e006 | *še-ni, siki-ni, i₃-ni* | שעוריה, צמרה, שמנה | `נֹתְנֵי לַחְמִי וּמֵימַי צַמְרִי וּפִשְׁתִּי שַׁמְנִי וְשִׁקּוּיָי` (הושע ב:ז) | [equivalent] | The triad of maintenance (barley, wool, oil), as LI's rations and Exod 21:10. |
| LH §135, 1561' | *ana ḫāwiriša* | לבעלה (הראשון) | `וְאָמְרָה אֵלְכָה וְאָשׁוּבָה אֶל אִישִׁי הָרִאשׁוֹן כִּי טוֹב לִי אָז מֵעָתָּה` (הושע ב:ט) | [equivalent] | השיבה (*târu* = `שוב`) אל הבעל הראשון. הצעה שלנו |
| MAL §36, o iv 91–92 | *pāni mutiša tadaggal ana mute lā tuššab* | את פני בעלה תצפה; לבעל לא תשב | `יָמִים רַבִּים תֵּשְׁבִי לִי לֹא תִזְנִי וְלֹא תִהְיִי לְאִישׁ` (הושע ג:ג) | [equivalent] | The waiting wife "dwells" without a husband (*wašābu* = ישב). |
| LI epil. 495′ | *lugal-bi nam-me* | מלך אל יהיה לה | `כִּי יָמִים רַבִּים יֵשְׁבוּ בְּנֵי יִשְׂרָאֵל אֵין מֶלֶךְ וְאֵין שָׂר` (הושע ג:ד) | [equivalent] | A land without a king. |
| EST 256 | *dāmē* | דמים | `וְדָמִים בְּדָמִים נָגָעוּ` (הושע ד:ב) | [cognate] | Plural "bloods" = shed blood in both. |
| LH §181, 2332' | *nadītam qadištam* | נדיתו, קדשה | `וְעִם הַקְּדֵשׁוֹת יְזַבֵּחוּ` (הושע ד:יד) | [cognate] | בתורה אסור שתהיה "קדשה" בישראל; כאן אב מקדיש את בתו קדשה לאל, והחוק דואג לרכושה. מן הזיכרון (ההשוואה המקובלת) |
| MALB §9, o iv 20–21 | *tahūma ṣehra … usbalkit* | `תחום קטן … הזיז` | `הָיוּ שָׂרֵי יְהוּדָה כְּמַסִּיגֵי גְּבוּל` (הושע ה:י) | [equivalent] |  |
| EST 649 | *huhāru* (bird-snare) | רשת | `אֶפְרוֹשׂ עֲלֵיהֶם רִשְׁתִּי כְּעוֹף הַשָּׁמַיִם אוֹרִידֵם` (הושע ז:יב) | [equivalent] | A bird-net over people, as *huhāru*. |
| EST 437 | *tālittu* (*walādu*) | לידה | `מִלֵּדָה וּמִבֶּטֶן וּמֵהֵרָיוֹן` (הושע ט:יא) | [cognate] | Our proposal. |
| LH §194, 2501' | *tulāša* | את שדה | `תֵּן לָהֶם רֶחֶם מַשְׁכִּיל וְשָׁדַיִם צֹמְקִים` (הושע ט:יד) | [equivalent] | הצעה שלנו |
| LH §44, 845 | *kankallum* | ניר | `נִירוּ לָכֶם נִיר` (הושע י:יב) | [equivalent] |  |
| EST 155 | *šamnu* | בשמן | `וּבְרִית עִם אַשּׁוּר יִכְרֹתוּ וְשֶׁמֶן לְמִצְרַיִם יוּבָל` (הושע יב:ב) | [cognate] | Oil in treaty-making (from memory). |
| EST 599 | same | same | `יֶתֶר הַגָּזָם אָכַל הָאַרְבֶּה וְיֶתֶר הָאַרְבֶּה אָכַל הַיָּלֶק` (יואל א:ד) | [equivalent] | Four pests "eating" one after another; also 2:25. |
| LH §120, 1356' | *qarītum* | ממגורה | `נָשַׁמּוּ אֹצָרוֹת נֶהֶרְסוּ מַמְּגֻרוֹת` (יואל א:יז) | [equivalent] |  |
| LH §261, 2962' | *nāqidam* | נוקד | `אֲשֶׁר הָיָה בַנֹּקְדִים מִתְּקוֹעַ` (עמוס א:א) | [cognate] | Loanword (F41). |
| EST 377 | same | same | `עַל שְׁלֹשָׁה פִּשְׁעֵי דַמֶּשֶׂק וְעַל אַרְבָּעָה לֹא אֲשִׁיבֶנּוּ` (עמוס א:ג) | [equivalent] | `לֹא אֲשִׁיבֶנּוּ` "I will not revoke it". |
| HL HL1 §22, 105 | *nu=šši {KUŠ}E.SIR-uš pāi* | ולו נעליים ייתן, | `עַל מִכְרָם בַּכֶּסֶף צַדִּיק וְאֶבְיוֹן בַּעֲבוּר נַעֲלָיִם` (עמוס ב:ו) | [equivalent] | זוג נעליים כמחיר זעום של אדם |
| HL HL2 §194, 194.3 | *Ú-UL ḫa-ra-a-tar ták-ku GÉME-aš na-aš-ma {MUNUS}KAR.[KID-aš kat-ta ad-da-aš]* | אין עברה. אם עם אָמָה או [זונה אב] | `וְאִישׁ וְאָבִיו יֵלְכוּ אֶל הַנַּעֲרָה לְמַעַן חַלֵּל אֶת שֵׁם קָדְשִׁי` (עמוס ב:ז) | [divergence] | מה שעמוס מוקיע כחילול השם, החוק החתי מתיר במפורש (באמה או בזונה) |
| EST 650 | *lā naparšudi* | שאין ממנה מנוס | `וְאָבַד מָנוֹס מִקָּל` (עמוס ב:יד) | [equivalent] | `מנוס` is the translation's noun. |
| EST 582 | *kî ša iṣṣūru ina tubāqi iṣabbatūni* | כאשר ציפור במצודה תופשים | `הֲתִפֹּל צִפּוֹר עַל פַּח הָאָרֶץ וּמוֹקֵשׁ אֵין לָהּ` (עמוס ג:ה) | [cognate] / [equivalent] | *iṣṣūru* = `צִפּוֹר`; *tubāqu* ↔ `פַּח` (our `מְצוֹדָה` since the 2026-10-23 harmonization). |
| EST 589 | *issappakūni* | נלכדת | `הֲיַעֲלֶה פַּח מִן הָאֲדָמָה וְלָכוֹד לֹא יִלְכּוֹד` (עמוס ג:ה) | [equivalent] |  |
| LH §244, 2843' | *nēšum* | אריה | `כַּאֲשֶׁר יַצִּיל הָרֹעֶה מִפִּי הָאֲרִי שְׁתֵּי כְרָעַיִם אוֹ בְדַל אֹזֶן` (עמוס ג:יב) | [equivalent] | The remnants as the evidence (`עֵד`) of Exod 22:12. From memory. |
| HL HL1 §80, 458 | *[tak]ku UDU-un A-NA UR.BAR.RA kuiški peššiezzi* | [אם] מישהו ישליך שה אל הזאב, | `כַּאֲשֶׁר יַצִּיל הָרֹעֶה מִפִּי הָאֲרִי שְׁתֵּי כְרָעַיִם אוֹ בְדַל אֹזֶן` (עמוס ג:יב) | [equivalent] | השרידים שהרועה מציל מפי הטורף |
| EST 605 | *nipiškunu libʾiš* | נשימתכם תבאש | `וָאַעֲלֶה בְּאֹשׁ מַחֲנֵיכֶם וּבְאַפְּכֶם` (עמוס ד:י) | [cognate] | Stench "in your nostrils" among Amos's covenant-curse plagues (4:6–11). Our proposal. |
| LH epil. 3533'–3534' | *ūmam ana mūšim litēršumma* | את היום ללילה ישיב לו | `וְיוֹם לַיְלָה הֶחְשִׁיךְ` (עמוס ה:ח) | [equivalent] |  |
| EST 485–486 | *ūmēkunu lū eṭû … eklētu lā namāri* | ימיכם יהיו אפלים … חשכה ללא הארה | `הֲלֹא חֹשֶׁךְ יוֹם יְהוָה וְלֹא אוֹר וְאָפֵל וְלֹא נֹגַהּ לוֹ` (עמוס ה:כ) | [equivalent] | Dark, and no brightness. Our proposal. |
| EST 14 | *Kayyamānu* | כימנו | `וְאֵת כִּיּוּן צַלְמֵיכֶם כּוֹכַב אֱלֹהֵיכֶם` (עמוס ה:כו) | [cognate] | Saturn (standard identification). |
| EST 466 (T vi 44) | *bēl āli Qarne* | (apparatus) אדון העיר קרנים | `הֲלוֹא בְחָזְקֵנוּ לָקַחְנוּ לָנוּ קַרְנָיִם` (עמוס ו:יג) | [equivalent] (place) | Tayinat only; Qarnaim in Bashan (Assyrian *Qarnīna*). |
| EST 534 | *annaku* | בדיל | `וּבְיָדוֹ אֲנָךְ` (עמוס ז:ז) | [cognate] | `אֲנָךְ` is a loan from *annaku* (apparatus only). |
| EST 116 | *raggimu* + *bārtu* | נביא; קשר | `קָשַׁר עָלֶיךָ עָמוֹס בְּקֶרֶב בֵּית יִשְׂרָאֵל` (עמוס ז:י) | [equivalent] | A priest reports a prophet's words to the king as `קֶשֶׁר`. Our proposal. |
| LH §108, 1212' | *ina abnim rabītim* | `באבן גדולה` | `לְהַקְטִין אֵיפָה וּלְהַגְדִּיל שֶׁקֶל וּלְעַוֵּת מֹאזְנֵי מִרְמָה` (עמוס ח:ה) | [equivalent] | בדיוק המרמה של §108: הכסף נשקל באבן גדולה (שקל מוגדל) והשכר נמדד בשער מוקטן |
| EST 112 | same | same | `יָכְלוּ לְךָ אַנְשֵׁי שְׁלֹמֶךָ` (עובדיה א:ז) | [cognate] | Parallel to `אַנְשֵׁי בְרִיתֶךָ`: political allies. |
| EST 257–259 | same | same | `גְּמֻלְךָ יָשׁוּב בְּרֹאשֶׁךָ` (עובדיה א:טו) | [cognate] |  |
| LI §5, 113′ | *ma₂ in-hun* | ספינה שָׂכַר | `וַיִּמְצָא אֳנִיָּה בָּאָה תַרְשִׁישׁ וַיִּתֵּן שְׂכָרָהּ` (יונה א:ג) | [equivalent] | Hiring a ship; no Torah law on boats. Cross-collection: LH §236–§238 (2753′–2781′), the hired boat sunk: `ספינה … יחליף`. |
| LH §235, 2765' | *iṣṣabar* | `התעקמה?` | `וְהָאֳנִיָּה חִשְּׁבָה לְהִשָּׁבֵר` (יונה א:ד) | [equivalent] | הספינה העומדת להישבר |
| LH §234, 2752' | *šumma malāḫum* | `אם מַלָּח` | `וַיִּירְאוּ הַמַּלָּחִים` (יונה א:ה) | [cognate loan] | העברית `מַלָּח` שאולה (דרך האכדית) מן השומרית *má-laḫ₄* |
| LH §237, 2796' | *u ša libbiša* | `ואת אשר בתוכה` | `וַיָּטִלוּ אֶת הַכֵּלִים אֲשֶׁר בָּאֳנִיָּה אֶל הַיָּם` (יונה א:ה) | [equivalent] | המטען שבתוך הספינה |
| UN prol. 91, 118 | *ma₂-laḫ₅-gal* | רב המלחים | `וַיִּירְאוּ הַמַּלָּחִים` (יונה א:ה) | [cognate] | Sum. *ma₂-laḫ₅* > Akk. *malāḫu* > `מַלָּח`. |
| UN prol. 91, 118 | *ma₂-laḫ₅-gal* | רב המלחים | `וַיִּקְרַב אֵלָיו רַב הַחֹבֵל` (יונה א:ו) | [equivalent] | The chief of the sailors. |
| EST 534 | *ina pān išāti* | לפני האש | `כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | [equivalent] | "Before the fire" = melting. |
| EST 608 | same | same | `כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | [equivalent] | Also Ps 97:5. |
| EST 445–446 | *kūm kurummāti eṣmātikunu … liṭīnū* | תחת השעורים את עצמותיכם … יטחנו | `וַאֲשֶׁר אָכְלוּ שְׁאֵר עַמִּי וְעוֹרָם מֵעֲלֵיהֶם הִפְשִׁיטוּ וְאֶת עַצְמֹתֵיהֶם פִּצֵּחוּ` (מיכה ג:ג) | [equivalent] | Flesh, skin, bones (445–451). Our proposal. |
| EST 545–546 | *Šamaš ina epinni ša parzilli ālkunu nagîkunu lušabalkit* | שמש, במחרשה של ברזל, את עירכם, את מחוזכם יהפוך | `לָכֵן בִּגְלַלְכֶם צִיּוֹן שָׂדֶה תֵחָרֵשׁ` (מיכה ג:יב) | [equivalent] | The ploughed city. From memory. |
| LH §202, 2538' | *lēt awīlim* | את לחי איש | `בַּשֵּׁבֶט יַכּוּ עַל הַלְּחִי אֵת שֹׁפֵט יִשְׂרָאֵל` (מיכה ד:יד) | [cognate] | *lētu* = `לְחִי`; the blow on the cheek as humiliation. |
| LE §42, 139 | *meḫeṣ lētim* | מחיצת לחי | `בַּשֵּׁבֶט יַכּוּ עַל הַלְּחִי אֵת שֹׁפֵט יִשְׂרָאֵל` (מיכה ד:יד) | [cognate] | *maḫāṣu* = `מחץ`, *lētu* = `לְחִי`; the blow on the cheek as insult (10 shekels; LH §203: 60 shekels). |
| EST 647 | same | same | `אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ` (מיכה ז:ו) | [equivalent] |  |
| LH epil. 3356'–3359' | *ḫaṭṭašu … nišīšu ina mīšarim lirē* | שרביטו … את אנשיו במישרים ירעה | `רְעֵה עַמְּךָ בְשִׁבְטֶךָ` (מיכה ז:יד) | [equivalent] | Sceptre and shepherding together. Our proposal. |
| IN IN §7, 7.16 | *DINGIR{MEŠ}-aš-ma Z[I-an-za da-aš-šu]-uš nu e-ep-pu-u-wa-⸢an⸣-zi UL nu-un-tar-nu-⸢zi⸣* | ואילו נפש הָאֵלִים – חזקה היא; ולתפוס – לא תמהר, | `יְהוָה אֶרֶךְ אַפַּיִם … וְנַקֵּה לֹא יְנַקֶּה` (נחום א:ג) | [equivalent] | איטי לכעוס, אך אינו מנקה. ההקבלות טיפולוגיות; התפיסה – שהאל אינו ממהר להעניש, ולכן החוטא טועה לחשוב שלא יעשה מאומה – משותפת לחתים ולמקרא |
| EST 488–489 | *abūbu … našpantakunu liškun* | מבול … את מפלתכם ישים | `וּבְשֶׁטֶף עֹבֵר כָּלָה יַעֲשֶׂה מְקוֹמָהּ` (נחום א:ח) | [equivalent] | Against Nineveh. Our proposal. |
| LH epil. 3562'–3566' | idem | idem | `וְרֹב חָלָל וְכֹבֶד פָּגֶר; וְאֵין קֵצֶה לַגְּוִיָּה` (נחום ג:ג) | [equivalent] | *šalamtu* = גוויה. |
| EST 617 | *kî issi ina pān nakrikunu lēpašūkunu* | כאשה לפני אויבכם יעשו אתכם | `הִנֵּה עַמֵּךְ נָשִׁים בְּקִרְבֵּךְ לְאֹיְבַיִךְ` (נחום ג:יג) | [equivalent] | Said of Nineveh itself; "to your enemies" ≈ *ina pān nakrikunu*. From memory (Hillers 1964). |
| EST 663 | same | same | `פָּתוֹחַ נִפְתְּחוּ שַׁעֲרֵי אַרְצֵךְ` (נחום ג:יג) | [divergence] | Nineveh's gates open to the enemy. Our proposal. |
| UN epil. g015 | *abul iri-na-ke₄ ĝal₂ ḫe₂-eb₂-tak₄-tak₄* | שער עירו ייפתח | `לְאֹיְבַיִךְ פָּתוֹחַ נִפְתְּחוּ שַׁעֲרֵי אַרְצֵךְ` (נחום ג:יג) | [equivalent] | The city gate left open to the enemy; both with an intensive form. |
| LH epil. 3247'–3248' | *narî šaṭram lištassi* | מצבתי הכתובה יקרא | `כְּתֹב חָזוֹן וּבָאֵר עַל הַלֻּחוֹת לְמַעַן יָרוּץ קוֹרֵא בוֹ` (חבקוק ב:ב) | [equivalent] | Writing on tablets so that a reader can read. |
| EST 77 | *qinnīšu* | קנו | `לָשׂוּם בַּמָּרוֹם קִנּוֹ` (חבקוק ב:ט) | [cognate] | "Nest" = house, family. |
| EST 337 | *qinnīšu* | קנו | `לָשׂוּם בַּמָּרוֹם קִנּוֹ` (חבקוק ב:ט) | [cognate] | See 77. |
| UN epil. g021–g022 | *e₂-tur₃-ra nam-ba-an-du₃ … amaš-a nam-…* | מרבץ אל יבנה … במכלאה אל … | `גָּזַר מִמִּכְלָה צֹאן וְאֵין בָּקָר בָּרְפָתִים` (חבקוק ג:יז) | [equivalent] | Empty pens and folds. |
| IN IN §7, 7.12 | *nu ki-iš-[ša-an an-da pé-e-da-at-te-ni] DINGIR-LIM-wa-ra-aš ku-it ⸢nu⸣-wa UL* | וכך [פנימה תישאו]: "(משום) שאֵל הוא – הרי לא | `הָאֹמְרִים בִּלְבָבָם לֹא יֵיטִיב יְהוָה וְלֹא יָרֵעַ` (צפניה א:יב) | [equivalent] | `וַיֹּאמְרוּ לֹא יִרְאֶה יָּהּ` (תהלים צד:ז) – אותו טיעון של המזלזל: האל אינו רואה ואינו עושה דבר. ההקבלה טיפולוגית, אך מפתיעה בקרבתה: משרת המקדש החתי ו"הקופאים על שמריהם" של צפניה אומרים כמעט אותן מילים |
| LH epil. 3180'–3181' | idem | idem | `כִּי הֵמָּה יִרְעוּ וְרָבְצוּ וְאֵין מַחֲרִיד` (צפניה ג:יג) | [equivalent] | `רבץ` + `אין מחריד` together. Our proposal. |
| EST 575 | *mugirrīkunu ana qinniš lušadīlū* | את מרכבותיכם לאחור יריצו | `וְהָפַכְתִּי מֶרְכָּבָה וְרֹכְבֶיהָ` (חגי ב:כב) | [equivalent] | Overturned chariots. Our proposal. |
| EST 614, 659 | *mugirrīkunu*; *kussâkunu lušabalkit* | מרכבותיכם; את כסאכם יהפוך | `וְהָפַכְתִּי כִּסֵּא מַמְלָכוֹת … וְהָפַכְתִּי מֶרְכָּבָה וְרֹכְבֶיהָ` (חגי ב:כב) | [equivalent] | Throne and chariot overturned in one verse; §90 and §104 of EST. `הפך` is part 6's verb for *nabalkutu* Š. Our proposal. |
| LH epil. 3417' | *šarrūssu šupēlam* | את מלכותו להפוך | `וְהָפַכְתִּי כִּסֵּא מַמְלָכוֹת` (חגי ב:כב) | [equivalent] | *šupêlu* = הפך (T2's proposal). Our proposal. |
| LI epil. 432′ | *di gi-na ḫe₂-bi₂-dab₅* | דין אמת התפשתי | `מִשְׁפַּט אֱמֶת שְׁפֹטוּ` (זכריה ז:ט) | [equivalent] | "True judgment" (*di gi-na*); `משפט` reserved for *šipṭu*. Cross-collection: LH 3149′–3151′ `ואת הארץ אורח נכון … הִתְפִּישׂ` (the same verb). |
| EST 450 | same | same | `תֹּאכַלְנָה אִשָּׁה אֶת בְּשַׂר רְעוּתָהּ` (זכריה יא:ט) | [equivalent] |  |
| EST 643 | *kî nakarkunu upattahūkanūni* | כאשר אויבכם ידקור אתכם | `אֵת אֲשֶׁר דָּקָרוּ` (זכריה יב:י) | [equivalent] |  |
| EST 311 | *qarābu* | קרב | `כְּיוֹם הִלָּחֲמוֹ בְּיוֹם קְרָב` (זכריה יד:ג) | [cognate] |  |
| EST 571, 598 | *ina balṭūtekunu* | בחייכם | `הָמֵק בְּשָׂרוֹ וְהוּא עֹמֵד עַל רַגְלָיו` (זכריה יד:יב) | [equivalent] | The flesh rotting while alive. Our proposal. |
| IN IN §2, 2.9 | *ZI-an-za-ma 1-aš-pát ARAD-ŠU ⸢ku⸣-wa-pí A-NA EN-ŠU pé-ra-⸢an⸣ ša-ra-a-ar-ta-ri* | ואילו הנפש – אחת היא ממש. כאשר עבדו עומד לפני אדוניו, | `הַקְרִיבֵהוּ נָא לְפֶחָתֶךָ הֲיִרְצְךָ אוֹ הֲיִשָּׂא פָנֶיךָ` (מלאכי א:ח) | [equivalent] | גם מלאכי משווה את עבודת האל לשירות אדון בשר ודם: מה שלא יגישו לפחה, לא יגישו לאל. ההקבלה טיפולוגית, וקרובה מאוד בהיגיון |
| IN IN §7, 7.1 | *[ ] UDU ku-iš DINGIR-LIM-ni a-da-an-na u-un-na-an-za* | […] שה, אשר נִנְהָג אֶל הָאֵל לאכול, | `וַהֲבֵאתֶם גָּזוּל וְאֶת הַפִּסֵּחַ וְאֶת הַחוֹלֶה וַהֲבֵאתֶם אֶת הַמִּנְחָה; הַאֶרְצֶה אוֹתָהּ מִיֶּדְכֶם` (מלאכי א:יג) | [equivalent] | `וְאָרוּר נוֹכֵל וְיֵשׁ בְּעֶדְרוֹ זָכָר וְנֹדֵר וְזֹבֵחַ מָשְׁחָת` (מלאכי א:יד) – אותה הונאה: להביא לאל בהמה פגומה במקום בהמה טובה |
| EST 475 | *arratu … līrurū* | מארה … יאורו | `וְשִׁלַּחְתִּי בָכֶם אֶת הַמְּאֵרָה וְאָרוֹתִי אֶת בִּרְכוֹתֵיכֶם` (מלאכי ב:ב) | [cognate] | Noun and verb together, as in the Akkadian. Our proposal. |
| LH epil. 3365', 3632'–3633' | *erretu … līrurū* | מארה … יאורו | `וְשִׁלַּחְתִּי בָכֶם אֶת הַמְּאֵרָה וְאָרוֹתִי אֶת בִּרְכוֹתֵיכֶם` (מלאכי ב:ב) | [cognate] | Noun and verb of one root, as in LH. |
| LH epil. 3548' | *šarrūssu līrur* | את מלכותו תאור | `וְאָרוֹתִי אֶת בִּרְכוֹתֵיכֶם` (מלאכי ב:ב) | [cognate] |  |
| IN IN §14, 14.13 | *a-da-an-na ⸢pa-a⸣-i a-pé-e-⸢da⸣-ni-ma DINGIR{MEŠ}-eš za-ak-kar 𒑱du-ú-úr* | ייתן לאכול – ואילו לאותו (אחד) הָאֵלִים צואה ושתן | `וְזֵרִיתִי פֶרֶשׁ עַל פְּנֵיכֶם פֶּרֶשׁ חַגֵּיכֶם` (מלאכי ב:ג) | [equivalent] | לכוהנים המבזים את שולחן האל עונה האל בצואה. ההקבלה טיפולוגית, ומפתיעה בחריפותה: עונש מידה כנגד מידה – מי שהאכיל את האלים מכלי טמא יאכל צואה |
| LH §128, 1464' | *riksātiša* | ואת תנאיה | `וְהִיא חֲבֶרְתְּךָ וְאֵשֶׁת בְּרִיתֶךָ` (מלאכי ב:יד) | [equivalent] | הנישואים כהסכם מחייב |
| LH §138, 1609' | *ḫīrtašu* | את בחירתו | `וְהִיא חֲבֶרְתְּךָ וְאֵשֶׁת בְּרִיתֶךָ` (מלאכי ב:יד) | [equivalent] | האשה הראשית, "אשת נעורים", שבגידה בה היא חטא. מן הזיכרון (ההשוואה של מלאכי ב:יד–טז לדיני הגירושין מקובלת) |
| LH §142, 1654' | *šumma sinništum mussa izērma* | אם אשה את בעלה שנאה, | `כִּי שָׂנֵא שַׁלַּח` (מלאכי ב:טז) | [equivalent] | "שנאה" כמונח של גירושין |
| IN IN §4, 4.11 | *ḫa-ap-pár da-aš-ket₉-te-ni DINGIR{MEŠ}-*aš*-ma-*at-kán* ZI-ni wa-ak-ši-ia-nu-ut-te-ni* | לוקחים מסחר – ואילו לנפש הָאֵלִים תחסירו אותם – | `הֲיִקְבַּע אָדָם אֱלֹהִים כִּי אַתֶּם קֹבְעִים אֹתִי וַאֲמַרְתֶּם בַּמֶּה קְבַעֲנוּךָ: הַמַּעֲשֵׂר וְהַתְּרוּמָה` (מלאכי ג:ח) | [equivalent] | גזל האל במנות המגיעות לו; כאן לא העם גוזל, אלא משרתי בית האל עצמם, הלוקחים כסף במקום המנחה. הקבלה טיפולוגית |
| IN IN §16, 16.11 | **DINGIR-LIM-ni(?) 〈〈TAR?〉〉* ta-ia-at-te-ni nu-uš-ma-ša-at wa-aš-túl šu-me-el-ma-aš-kán* | מן הָאֵל(?) תגנבו אותו! וזה לכם חטא! ואילו את שלכם – | `הֲיִקְבַּע אָדָם אֱלֹהִים כִּי אַתֶּם קֹבְעִים אֹתִי` (מלאכי ג:ח) | [equivalent] | גזל האל עצמו. הקבלה טיפולוגית |
| EST 475 | same | same | `בַּמְּאֵרָה אַתֶּם נֵאָרִים` (מלאכי ג:ט) | [cognate] | The figura etymologica. Our proposal. |
| LH epil. 3632'–3633' | *erretam maruštam līrurū* | מארה נמרצת יאורו | `בַּמְּאֵרָה אַתֶּם נֵאָרִים` (מלאכי ג:ט) | [cognate] | Internal object: "curse with a curse". = EST 475. |
| LH prol. 35–42 | *raggam u ṣēnam … kīma Šamaš … waṣêmma* | רשע וזד לאבד … כשמש … לצאת | `וְהָיוּ כָל זֵדִים וְכָל עֹשֵׂה רִשְׁעָה קַשׁ` (מלאכי ג:יט) | [equivalent] | Sequence: wicked destroyed, then the sun (3:20). Our proposal; the Hebrew `זד` is our choice for *ṣēnu* (open decision 1). |
| LH prol. 40–44 | idem | idem | `וְזָרְחָה לָכֶם יִרְאֵי שְׁמִי שֶׁמֶשׁ צְדָקָה` (מלאכי ג:כ) | [equivalent] | Šamaš is the god of justice. From memory. |
| LI prol. 72–79 | *ad-da dumu-ne-ne-er ḫu-mu-ne-en-il₂ dumu ad-da-bi-ir ḫu-mu-ne-en-il₂ …* | את האב לבניו השאתי, את הבן לאביו השאתי, את האב עם בניו העמדתי, את הבן עם אביו העמדתי | `וְהֵשִׁיב לֵב אָבוֹת עַל בָּנִים וְלֵב בָּנִים עַל אֲבוֹתָם` (מלאכי ג:כד) | [divergence] | **The same reciprocity (fathers ↔ sons, both directions), other verbs**: LI "made carry (support)" and "made stand with" – a legal duty of support; Malachi "turn the heart" – reconciliation. Not "turn the heart" in the Sumerian. |
| LH §170, 2045' | *mārūa iqtabi* | "בני" אמר, | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | [equivalent] | נוסח ההכרה בבן. מן הזיכרון (נוסחת האימוץ) |
| LH §192, 2468' | *ul abī atta* | "לא אבי אתה, | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | [equivalent] | נוסחת האימוץ בפי האב |
| LH epil. 3588' | *kīma ṣalam ṭiddim* | כצלם טיט | `כִּכְלִי יוֹצֵר תְּנַפְּצֵם` (תהלים ב:ט) | [equivalent] |  |
| EST 593 | *liggamrū* | ייגמר | `יִגְמָר נָא רַע רְשָׁעִים` (תהלים ז:י) | [cognate] | *gamāru* = `גמר` "come to an end". |
| EST 629 | *ligmarūkunu* | יגמרו אתכם | `יִגְמָר נָא רַע רְשָׁעִים` (תהלים ז:י) | [cognate] | *gamāru* = `גמר`. |
| IN IN §2, 2.8 | *UN-aš DINGIR{MEŠ}-aš-ša ZI-an-za ta-ma-a-iš ku-iš-ki UL ⸢ki⸣-i-pát ku-it UL* | נפש האדם ושל הָאֵלִים – אחרת היא במשהו? לא! זה עצמו – מה? לא! | `מָה אֱנוֹשׁ כִּי תִזְכְּרֶנּוּ` (תהלים ח:ה) | [divergence] | אף שם השאלה מדגישה את המרחק, וכאן את הדמיון. ההשוואה טיפולוגית בלבד |
| LI epil. 494′ | *ma-da-na suḫuš-bi na-an-ge-ne* | את יסוד ארצו אל יכונן | `כִּי הַשָּׁתוֹת יֵהָרֵסוּן צַדִּיק מַה פָּעָל` (תהלים יא:ג) | [equivalent] | Foundations not established. |
| EST 533 | same | same | `יַמְטֵר עַל רְשָׁעִים פַּחִים אֵשׁ וְגָפְרִית` (תהלים יא:ו) | [equivalent] | "Raining" fire; also Gen 19:24. |
| EST 649 | same | same | `יַמְטֵר עַל רְשָׁעִים פַּחִים` (תהלים יא:ו) | [equivalent] | Snares from the god over the wicked. |
| EST 397 | *ennû* | ימיר | `נִשְׁבַּע לְהָרַע וְלֹא יָמִר` (תהלים טו:ד) | [equivalent] | Not "changing" one's oath; *enû* = `המיר` (corpus). Our proposal. |
| EST 207 | *râmu* (etymology) | אוהב | `אֶרְחָמְךָ יְהוָה חִזְקִי` (תהלים יח:ב) | [cognate?] | *râmu* is sometimes compared with W. Semitic *rḥm* "love": uncertain; `רחם` not used. |
| LH prol. 232 | *mukanniš* | המכריע | `תַּכְרִיעַ קָמַי תַּחְתָּי` (תהלים יח:מ) | [equivalent] |  |
| LH epil. 3217' | *awâtiya šūqurātim* | את דברי היקרים | `הַנֶּחֱמָדִים מִזָּהָב וּמִפַּז רָב` (תהלים יט:יא) | [equivalent] | The precious words of the law. Our proposal. |
| LH §30, 689 | *irriš* | `יְבַקֵּשׁ,` | `וַאֲרֶשֶׁת שְׂפָתָיו בַּל מָנַעְתָּ` (תהלים כא:ג) | [cognate] | `אֲרֶשֶׁת` "בקשה" היא בת־השורש של *erēšu* "לבקש". מן הזיכרון. |
| EST 141 | *zarʾušunu ina māti … tuḫallaqāni* | זרעם מן הארץ … תאבדו | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | A royal psalm on the king's enemies: destroy + from the land + their seed. Our proposal. |
| EST 525 | same | same | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | Name/fruit and seed destroyed; also 538–539. |
| EST 661 | *zērkunu ina māti luhalliq* | את זרעכם מן הארץ יְאַבֵּד | `פִּרְיָמוֹ מֵאֶרֶץ תְּאַבֵּד וְזַרְעָם מִבְּנֵי אָדָם` (תהלים כא:יא) | [equivalent] | Seed + from the land + `אבד` (*halāqu* D), the whole phrase. Our proposal. |
| LH prol. 175–176 | *mirītim u mašqītim* | מרעה ומשקה | `בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל-מֵי מְנֻחוֹת יְנַהֲלֵנִי` (תהלים כג:ב) | [equivalent] | Our proposal. |
| LH epil. 3179'–3180' | *aburrī ušarbiṣ* | בנווה הרבצתי | `בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי` (תהלים כג:ב) | [cognate] | *rabāṣu* Š = `הרביץ`; *aburru* ↔ `נאות` [equivalent]. From memory (royal shepherd). |
| LH epil. 3199' | *ina šulmim attabbalšināti* | בשלום הובלתי אותם | `עַל-מֵי מְנֻחוֹת יְנַהֲלֵנִי` (תהלים כג:ב) | [equivalent] | Our proposal. |
| LH prol. 24–26 | *išdu* + *kunnu* | יסודותיה … כוננו | `כִּי-הוּא עַל-יַמִּים יְסָדָהּ וְעַל-נְהָרוֹת יְכוֹנְנֶהָ` (תהלים כד:ב) | [cognate] | `יסד` + `כונן` pair; also 90–91. |
| EST 651 | *ay ušēṣi napšatkun* | את נפשכם אל יוציא | `כִּי הוּא יוֹצִיא מֵרֶשֶׁת רַגְלָי` (תהלים כה:טו) | [divergence] | The reverse: the god brings the foot out of the net (also Ps 31:5; 142:8). Our proposal. |
| LH prol. 219–221 | *mušpazzir … ina karašîm* | המסתיר … בכיליון | `יַסְתִּרֵנִי בְּסֵתֶר אָהֳלוֹ` (תהלים כז:ה) | [equivalent] | Our proposal. |
| LH epil. 3201' | *uštapziršināti* | הסתרתי אותם | `יַסְתִּרֵנִי בְּסֵתֶר אָהֳלוֹ` (תהלים כז:ה) | [equivalent] |  |
| LH prol. 295–296 | *mātim ūsim šūḫuzim* | את הארץ באורח להאחיז | `וּנְחֵנִי בְּאֹרַח מִישׁוֹר` (תהלים כז:יא) | [equivalent] | Our proposal. |
| LH §45, 869 | *Adad irtaḫiṣ* | אדד שטף | `יְהוָה לַמַּבּוּל יָשָׁב` (תהלים כט:י) | [equivalent] | The storm god and the flood (with 870 *bibbulum*). Our proposal. |
| LH epil. 3570'–3571' | idem | idem | `וְלֹא הִסְגַּרְתַּנִי בְּיַד-אוֹיֵב` (תהלים לא:ט) | [equivalent] | Our Hebrew idiom (Decision 8). |
| EST 487 | *ina tānēḫi … napištakunu liqti* | באנחה … נפשכם תכלה | `כִּי כָלוּ בְיָגוֹן חַיַּי וּשְׁנוֹתַי בַּאֲנָחָה` (תהלים לא:יא) | [cognate] (*anāḫu* = `אנח`) | Our proposal. |
| LH epil. 3497'–3501' | *ūmī warḫī šanāt palēšu ina tānēḫim u dimmatim lišaqti* | ימים, ירחים, שנות שלטונו באנחה ובנהי יכלה | `כִּי כָלוּ בְיָגוֹן חַיַּי וּשְׁנוֹתַי בַּאֲנָחָה` (תהלים לא:יא) | [cognate] | *tānēḫu* = אנחה; years + sighing + ending. Our proposal. |
| LH epil. 3418'–3420' | idem | idem | `לְהַכְרִית מֵאֶרֶץ זִכְרָם` (תהלים לד:יז) | [cognate] |  |
| EST 619–620 | *kî allutti ana qinniš lušadīlūkunu* | כסרטן לאחור יריצו אתכם | `יִסֹּגוּ אָחוֹר וְיַחְפְּרוּ חֹשְׁבֵי רָעָתִי` (תהלים לה:ד) | [equivalent] | "Backwards" as a curse on enemies (also Ps 40:15). Tayinat only for *kî allutti ana qinniš*. Our proposal. |
| LH §161, 1896' | *uktarrissu* | השמיצו, | `שֹׂנְאַי חִנָּם יִקְרְצוּ-עָיִן` (תהלים לה:יט) | [cognate?] | `קרץ עין` של המלשין; הקשר לאכדית *karāṣu* ול־`אכלו קרציהון` (דניאל ג:ח) – מן הזיכרון |
| LH §168, 2018' | *šumma mārum arnam kabtam* | אם הבן עון כבד | `כְּמַשָּׂא כָבֵד יִכְבְּדוּ מִמֶּנִּי` (תהלים לח:ה) | [equivalent] | העוון כמשא כבד, כמו *arnam kabtam … babālu* "לשאת עוון כבד" |
| EST 91 | *issēn lā takallā* | אחת לא תכלאו | `לֹא תִכְלָא רַחֲמֶיךָ מִמֶּנִּי` (תהלים מ:יב) | [cognate] | *kalû* = `כלא` "withhold". |
| EST 112 | *salmēšu* | איש שלומו | `גַּם אִישׁ שְׁלוֹמִי אֲשֶׁר בָּטַחְתִּי בוֹ אוֹכֵל לַחְמִי` (תהלים מא:י) | [cognate] | *salmu* "ally" = `אִישׁ שָׁלוֹם` (the trusted friend who betrays). |
| LH prol. 152 | *ilū šarrī* | אל המלכים | `כִּסְאֲךָ אֱלֹהִים עוֹלָם וָעֶד` (תהלים מה:ז) | [divergence] | The king called "god". |
| LH prol. 161 | idem | idem | `שֵׁבֶט מִישֹׁר שֵׁבֶט מַלְכוּתֶךָ` (תהלים מה:ז) | [equivalent] | For the epilogue's *ḫaṭṭašu išarat*. |
| LH epil. 3187'–3188' | *ḫaṭṭašu išarat* | שרביטו ישר | `שֵׁבֶט מִישֹׁר שֵׁבֶט מַלְכוּתֶךָ` (תהלים מה:ז) | [cognate] | *išaru* = `ישר`. From memory. |
| LH epil. 3175' | *qablātim ubelli* | קרבות כיביתי | `מַשְׁבִּית מִלְחָמוֹת עַד קְצֵה הָאָרֶץ` (תהלים מו:י) | [equivalent] | Our proposal. |
| LH §14, 507 | *mār awīlim* | בן איש | `גַּם בְּנֵי אָדָם גַּם בְּנֵי אִישׁ` (תהלים מט:ג) | [equivalent] | The class term (F16). |
| LH §196, 2508' | *mār awīlim* | בן איש | `גַּם בְּנֵי אָדָם גַּם בְּנֵי אִישׁ` (תהלים מט:ג) | [equivalent] | The high-born class (F16). |
| LH §7, 394 | *ina qāt mār awīlim* | `מיד בן איש` | `גַּם בְּנֵי אָדָם גַּם בְּנֵי אִישׁ` (תהלים מט:ג) | [equivalent] | `בְּנֵי אִישׁ` הם בני המעמד הגבוה (F16) |
| LH §150, 1764' | *īzibšim* | עזב לה | `וְעָזְבוּ לַאֲחֵרִים חֵילָם` (תהלים מט:יא) | [cognate] | `עָזַב ל־` "leave (property) to". |
| LH §172, 2122' | *izzib* | תעזוב; | `וְעָזְבוּ לַאֲחֵרִים חֵילָם` (תהלים מט:יא) | [cognate] | *ezēbu* = `עזב` במובן "להשאיר (רכוש) ל־", כמו T5 (1764' `עזב לה`) |
| EST 6 | *issu napāh šamši adi raba šamši* | ממזרח השמש עד מבוא השמש | `מִמִּזְרַח שֶׁמֶשׁ עַד מְבֹאוֹ` (תהלים נ:א) | [equivalent] | Tayinat *erēb šamši* "entry of the sun" = `מְבוֹא` exactly (`מְבוֹא הַשֶּׁמֶשׁ`, דברים יא:ל); *erēbu* ~ `ערב` [cognate]. |
| EST 148, 176 | *issi X šakānu* | עמם תשימו (חלקכם) | `וְעִם מְנָאֲפִים חֶלְקֶךָ` (תהלים נ:יח) | [equivalent] | Source of the supplement `(חלקכם)`. |
| EST 476 | (T) *eliš ina balṭūti lissaḫūkunu* | למעלה, מן החיים יסחו אתכם | `וְיִסָּחֲךָ מֵאֹהֶל וְשֵׁרֶשְׁךָ מֵאֶרֶץ חַיִּים` (תהלים נב:ז) | [cognate] | "Uproot from the land of the living"; closest in Tayinat's wording (*ina balṭūti*). Our proposal. |
| LH epil. 3479'–3481' | *eliš ina balṭūtim lissuḫšu* | למעלה, מן החיים יסח אותו | `יִסָּחֲךָ מֵאֹהֶל וְשֵׁרֶשְׁךָ מֵאֶרֶץ חַיִּים` (תהלים נב:ז) | [cognate] | *nasāḫu* = נסח; = EST 476. From memory. |
| MAL §21, o ii 99 | *ultaṣleš* | הפיל | `נֵפֶל אֵשֶׁת בַּל חָזוּ שָׁמֶשׁ` (תהלים נח:ט) | [equivalent] | `נֵפֶל` = miscarriage, the noun of our verb. |
| EST 462–463 | (T) *dāmū šarku kīma mê runkā* | {תיינת: בדמים ובמוגלה} כבמים התרחצו | `פְּעָמָיו יִרְחַץ בְּדַם הָרָשָׁע` (תהלים נח:יא) | [equivalent] | Blood and pus restored in Nimrud, preserved in Tayinat. |
| LH §233, 2747' | *igārum iqtūp* | `וקיר נָטָה,` | `כְּקִיר נָטוּי גָּדֵר הַדְּחוּיָה` (תהלים סב:ד) | [equivalent] | הקיר הנוטה ליפול; הצעה שלנו |
| EST 608 | *ṣalmu ša iškuri ina išāti iššarrapūni* | צלם של שעווה באש נשרף | `כְּהִמֵּס דּוֹנַג מִפְּנֵי אֵשׁ יֹאבְדוּ רְשָׁעִים` (תהלים סח:ג) | [equivalent] | Wax before fire as an image of perishing; `דונג` kept out of the translation (Decision 6). |
| LH epil. 3228' | *dayyānum* | הדיין | `אֲבִי יְתוֹמִים וְדַיַּן אַלְמָנוֹת אֱלֹהִים בִּמְעוֹן קָדְשׁוֹ` (תהלים סח:ו) | [cognate] | *dayyānu* = `דיין`, after orphan and widow (3204'). |
| LH §5, 352 | *dayyānum* | דיין | `אֲבִי יְתוֹמִים וְדַיַּן אַלְמָנוֹת` (תהלים סח:ו) | [cognate] |  |
| LH §9, 443 | *dayyānū* | `הדיינים` | `וְדַיַּן אַלְמָנוֹת` (תהלים סח:ו) | [cognate] |  |
| LH §127, 1457' | *maḫar dayyānī* | לפני הדיינים | `וְדַיַּן אַלְמָנוֹת` (תהלים סח:ו) | [cognate] | *dayyānu* = `דַּיָּן` |
| LH §168, 2013' | *ana dayyānī* | לדיינים | `וְדַיַּן אַלְמָנוֹת` (תהלים סח:ו) | [cognate] | *dayyānu* = `דַּיָּן` |
| LH §172, 2107' | *warkassa* | את עניינה | `אֲבִי יְתוֹמִים וְדַיַּן אַלְמָנוֹת` (תהלים סח:ו) | [cognate] | *dayyānu* = `דַּיָּן`, ו"דיין האלמנות" הוא בדיוק התפקיד כאן |
| LH §122, 1381' | *ḫurāṣam* | זהב | `וְאֶבְרוֹתֶיהָ בִּירַקְרַק חָרוּץ` (תהלים סח:יד) | [cognate] | *ḫurāṣu* = `חרוץ` (note only). |
| UN §1, 182 | *saĝ … ra* | ראש … מחץ | `יִמְחַץ רֹאשׁ אֹיְבָיו` (תהלים סח:כב) | [equivalent] | "Smite the head" is a Hebrew idiom for killing too; *ra* = `מחץ` (corpus). |
| LH §149, 1755' | *ublam* | הובילה | `יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | [cognate] | *wabālu* = `הוביל`, also of gifts. |
| LH §159, 1865' | *biblam* | שי | `יוֹבִילוּ מְלָכִים שָׁי` (תהלים סח:ל) | [equivalent] | `שַׁי` עם `הוביל`, כמו *biblam ušābil*. הצעה שלנו (תהלים) |
| LH prol. 37–39 | *dannum enšam ana lā ḫabālim* | שהחזק בחלש לא יחבול | `יִשְׁפֹּט עֲנִיֵּי-עָם יוֹשִׁיעַ לִבְנֵי אֶבְיוֹן וִידַכֵּא עוֹשֵׁק` (תהלים עב:ד) | [equivalent] | The just king protects the weak. From memory (Paul; Weinfeld). |
| LH epil. 3202'–3203' | *dannum enšam ana lā ḫabālim* | שהחזק בחלש לא יחבול | `יִשְׁפֹּט עֲנִיֵּי-עָם יוֹשִׁיעַ לִבְנֵי אֶבְיוֹן וִידַכֵּא עוֹשֵׁק` (תהלים עב:ד) | [equivalent] | From memory (Paul; Weinfeld). Also prol. 37–39. |
| LH epil. 3202'–3203' | idem | idem | `כִּי-יַצִּיל אֶבְיוֹן מְשַׁוֵּעַ וְעָנִי וְאֵין-עֹזֵר לוֹ` (תהלים עב:יב) | [equivalent] |  |
| LH prol. 282 | idem | idem | `לִפְנֵי-שֶׁמֶשׁ יִנֹּין (יִנּוֹן) שְׁמוֹ` (תהלים עב:יז) | [cognate] | The royal psalm. |
| EST 192 | same | same | `זֶה יַשְׁפִּיל וְזֶה יָרִים` (תהלים עה:ח) | [cognate] |  |
| MAL §30, o iv 20–21 | *abu … bibla ittabal* | אב … שי הוביל | `יֹבִילוּ שַׁי לַמּוֹרָא` (תהלים עו:יב) | [equivalent] | *biblu* `שַׁי` + *wabālu* `הוביל` (LH's pair). |
| LH epil. 3343' | *ana tanādātim šūṣâ* | לתהילות מוצאים | `מְסַפְּרִים תְּהִלּוֹת יְהוָה` (תהלים עח:ד) | [divergence] | Praises of God vs. of the king's words. Our proposal. |
| LH epil. 3497'–3501' | idem | idem | `וַיְכַל-בַּהֶבֶל יְמֵיהֶם; וּשְׁנוֹתָם בַּבֶּהָלָה` (תהלים עח:לג) | [equivalent] | Days and years "ended in" X. Our proposal. |
| EST 386–387 | same | same | `וְלִבָּם לֹא-נָכוֹן עִמּוֹ; וְלֹא נֶאֶמְנוּ בִּבְרִיתוֹ` (תהלים עח:לז) | [equivalent] | After `וַיְפַתּוּהוּ בְּפִיהֶם` (78:36): mouth vs heart, disloyalty to the covenant. Our proposal. |
| EST 574 | *qalta ina qātīkunu lušabalkitū* | את הקשת בידיכם יהפכו | `נֶהְפְּכוּ כְּקֶשֶׁת רְמִיָּה` (תהלים עח:נז) | [equivalent] | The "turned" bow as an image of disloyalty. Our proposal. |
| LH prol. 22–25 | *ša kīma šamê u erṣetim išdāša šuršudā* | אשר כשמים והארץ יסודותיה מושתתים | `וַיִּבֶן כְּמוֹ-רָמִים מִקְדָּשׁוֹ כְּאֶרֶץ יְסָדָהּ לְעוֹלָם` (תהלים עח:סט) | [equivalent] | Founded like heaven and earth. |
| LH epil. 3211'–3212' | idem | idem | `וַיִּבֶן כְּמוֹ-רָמִים מִקְדָּשׁוֹ כְּאֶרֶץ יְסָדָהּ לְעוֹלָם` (תהלים עח:סט) | [equivalent] | From memory. |
| LH prol. 51 | idem | idem | `לִרְעוֹת בְּיַעֲקֹב עַמּוֹ` (תהלים עח:עא) | [cognate] |  |
| EST 422–424 | no just judgment + walking in darkness | … בחשכה התהלכו | `בַּחֲשֵׁכָה יִתְהַלָּכוּ` (תהלים פב:ה) | [equivalent] | The identical phrase (Hitpael = Gtn), said of judges who judge unjustly (82:2 `עַד מָתַי תִּשְׁפְּטוּ עָוֶל`) – Šamaš's two curses in one psalm. Our proposal. |
| LH prol. 282 | *šamšu bābilim* | שמש בבל | `כִּי שֶׁמֶשׁ וּמָגֵן יְהוָה אֱלֹהִים` (תהלים פד:יב) | [cognate] | Of God in Ps; of the king here. |
| LI epil. 440′ | *niĝ₂-zi niĝ₂-gi-na pa-e₃ ḫe₂-mi-ak* | נאמנות ואמת הופעתי | `חֶסֶד וֶאֱמֶת נִפְגָּשׁוּ צֶדֶק וְשָׁלוֹם נָשָׁקוּ` (תהלים פה:יא) | [equivalent] | A pair of virtues made to "shine forth" (*pa-e₃ ak* = *šūpû*, LH F38 `להופיע מישרים`). CDLI "righteousness" not followed. |
| EST 54 | *hūlu damqu ina šēpīšu … tašakkanāni* | דרך נאה לרגליו … תשימו | `וְיָשֵׂם לְדֶרֶךְ פְּעָמָיו` (תהלים פה:יד) | [equivalent] | "Set a way for the feet". Our proposal. |
| LH prol. 279 | *zērum dārium* | זרע נצח | `עַד-עוֹלָם אָכִין זַרְעֶךָ` (תהלים פט:ה) | [equivalent] |  |
| LH §192, 2468' | *ul abī atta* | "לא אבי אתה, | `הוּא יִקְרָאֵנִי אָבִי אָתָּה` (תהלים פט:כז) | [equivalent] | הנוסחה החיובית |
| LH prol. 22–25 | idem | idem | `וְשַׂמְתִּי לָעַד זַרְעוֹ וְכִסְאוֹ כִּימֵי שָׁמָיִם` (תהלים פט:ל) | [equivalent] | Dynasty lasting as the heavens. |
| LH prol. 246–247 | *šāṭip … in pušqim* | המחלץ … בצרה | `עִמּוֹ-אָנֹכִי בְצָרָה אֲחַלְּצֵהוּ` (תהלים צא:טו) | [equivalent] | `מָצוֹק` kept out. Our proposal. |
| EST 257–259 | *gimlu … lā tutarrāninni* | גמול … לא תשיבו | `הָשֵׁב גְּמוּל עַל גֵּאִים` (תהלים צד:ב) | [cognate] | *gimilla turru* = `השיב גמול` word for word (*gimillu* = `גמול`). Our proposal. |
| LH prol. 32–34 | *mīšaram ina mātim ana šūpîm* | מישרים בארץ להופיע | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ` (תהלים צט:ד) | [cognate] | *mīšaru* = `מֵישָׁרִים`. |
| LH prol. 299 | *mīšaram* | מישרים | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | [cognate] | The noun is cognate; the verb differs (*kunnu* there, *šakānu* here). |
| LH epil. 3145', 3148' | *mīšarim … ukinnu* | מישרים … כונן | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ` (תהלים צט:ד) | [cognate] | Same noun and same verb (*kunnu* = `כונן`), of God; of the king here. |
| LI prol. 25–26 | *niĝ₂-si-sa₂ kalam-ma ĝa₂-ĝa₂-de₃* | מישרים בארץ לשום | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ` (תהלים צט:ד) | [cognate] | Via the Akkadian *mīšaru* (= `מֵישָׁרִים`). Cross-collection: LH 32–34 `מישרים בארץ להופיע`; LH 298–301 `אמת ומישרים בפי הארץ שַׂמְתִּי`. |
| UN prol. 112–113, 180–181 | *niĝ₂-si-sa₂ kalam-ma ḫu-mu-ni-ĝar* | מישרים בארץ שמתי | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים; מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ` (תהלים צט:ד) | [cognate via the Akk.] | *mīšaru* = `מֵישָׁרִים`. Cross-collection: LI 25–26, 446′–447′; LH 298–301 `אמת ומישרים בפי הארץ שמתי`. 113 "in the land" restored. |
| LH §26, 632 | *munaggiršu* | `מַלְשִׁינוֹ` | `מְלָשְׁנִי בַסֵּתֶר רֵעֵהוּ אוֹתוֹ אַצְמִית` (תהלים קא:ה) | [equivalent] | רק המילה |
| LH prol. 35–36 | *raggam u ṣēnam ana ḫulluqim* | רשע וזד לאבד | `לַבְּקָרִים אַצְמִית כָּל-רִשְׁעֵי-אָרֶץ` (תהלים קא:ח) | [equivalent] | The king who destroys the wicked. |
| LH epil. 3258' | idem | idem | `כְּרַחֵם אָב עַל-בָּנִים רִחַם יְהוָה עַל-יְרֵאָיו` (תהלים קג:יג) | [equivalent] |  |
| LH §130, 1486' | *kabālu* | כיבל | `עִנּוּ בַכֶּבֶל` (תהלים קה:יח) | [cognate?] | Probable cognate of `כֶּבֶל`. Our proposal. |
| LH epil. 3584' | *liqmi* | ילהט | `לֶהָבָה תְּלַהֵט רְשָׁעִים` (תהלים קו:יח) | [equivalent] | = EST 525. |
| LH §235, 2761' | *šipiršu* | `ואת מלאכתו` | `יוֹרְדֵי הַיָּם בָּאֳנִיּוֹת עֹשֵׂי מְלָאכָה בְּמַיִם רַבִּים` (תהלים קז:כג) | [equivalent] | "מלאכה" של יורדי הים. הצעה שלנו |
| LH epil. 3407' | *ūmī īṣūtim* | ימים מעטים | `יִהְיוּ-יָמָיו מְעַטִּים; פְּקֻדָּתוֹ יִקַּח אַחֵר` (תהלים קט:ח) | [equivalent] | The curse psalm also has the rival (3502') and the blotted name (109:13). Our proposal. |
| UN epil. g013 | *ug₃-ni … ḫe₂-eb-ta-dag-dag-ge* | אנשיו מבקתות קנים? ינדדו | `וְנוֹעַ יָנוּעוּ בָנָיו וְשִׁאֵלוּ; וְדָרְשׁוּ מֵחָרְבוֹתֵיהֶם` (תהלים קט:י) | [equivalent] | Wandering as a curse, "from" their dwellings. |
| EST 661 | same | same | `בְּדוֹר אַחֵר יִמַּח שְׁמָם` (תהלים קט:יג) | [equivalent] | In the psalm of the oil-like curse (109:18 ↔ 622–625). Our proposal (the link of the two lines). |
| LI epil. 473′–477′ | *numun … ibila-a-ni nam-me* | זרע … [יורש] אל יהיה לו | `יְהִי אַחֲרִיתוֹ לְהַכְרִית בְּדוֹר אַחֵר יִמַּח שְׁמָם` (תהלים קט:יג) | [equivalent] | No seed, no heir. "Heir" restored. Cross-collection: LH 3594′ `יורש תשלול ממנו`. |
| EST 622–625 | same | same | `וַיֶּאֱהַב קְלָלָה וַתְּבוֹאֵהוּ` (תהלים קט:יז) | [equivalent] | The curse "came into him". |
| EST 561 | same | same | `וַיִּלְבַּשׁ קְלָלָה כְּמַדּוֹ וַתָּבֹא כַמַּיִם בְּקִרְבּוֹ וְכַשֶּׁמֶן בְּעַצְמוֹתָיו` (תהלים קט:יח) | [equivalent] | The curse "entering" the body like water. From memory. |
| EST 622–625 | *kî ša šamnī ina libbi šīrīkunu errabūni kî hannīe tamītu annītu … lušēribū* | כאשר שמן אל תוך בשרכם בא, ככה את השבועה הזאת אל תוך בשרכם … יביאו | `וַיִּלְבַּשׁ קְלָלָה כְּמַדּוֹ וַתָּבֹא כַמַּיִם בְּקִרְבּוֹ וְכַשֶּׁמֶן בְּעַצְמוֹתָיו` (תהלים קט:יח) | [equivalent] | The curse "comes" (*erēbu* = `בוא`) into the body **like oil**: the same simile and the same verb. From memory (Weinfeld 1972). |
| EST 419–420 | *liḫallipkunu* (clothe) | יעטה אתכם | `תְּהִי לוֹ כְּבֶגֶד יַעְטֶה` (תהלים קט:יט) | [equivalent] | The curse as a garment (109:18 `וַיִּלְבַּשׁ קְלָלָה`). |
| IN IN §7, 7.3 | *[šu-ma-aš-ma-az ku-in] ma-ak-la-an-da-an mar-kán ḫar-te-ni na-an-kán an-d[a]* | [ואת זה] הכחוש, [אשר] *פירקתם* [לעצמכם] – אותו פנימה | `וּבְשָׂרִי כָּחַשׁ מִשָּׁמֶן` (תהלים קט:כד) | [equivalent] | "כחוש" הוא בשר שאין בו שומן |
| EST 565–566 | *nārīkunu … mêšina ana qinniš lusahhirū* | נהרותיכם … את מימיהם לאחור יחזירו | `הַיָּם רָאָה וַיָּנֹס הַיַּרְדֵּן יִסֹּב לְאָחוֹר` (תהלים קיד:ג) | [equivalent] | The river turned back (a sign there, a curse here). |
| IN IN §10, 10.16 | *ú-e-ḫe-eš-kán-du nu-uš-ma-*aš Ù*-aš le-e e-eš-zi* | יהיו סובבים, ושינה אַל תהיה להם! | `הִנֵּה לֹא יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | [equivalent] | אצל המשורר האל הוא השומר שאינו ישן; כאן משרתיו של האל הם שאסור להם לישון, כדי לשמור עליו. ההיפוך הוא הממצא; ההקבלה טיפולוגית |
| LH §5, 370 | *ina kussîm dayyānūtišu* | מכסא דיינותו | `כִּי שָׁמָּה יָשְׁבוּ כִסְאוֹת לְמִשְׁפָּט` (תהלים קכב:ה) | [cognate] | *kussû* = `כסא`. |
| EST 582 | same | same | `נַפְשֵׁנוּ כְּצִפּוֹר נִמְלְטָה מִפַּח יוֹקְשִׁים` (תהלים קכד:ז) | [divergence] | The escape. |
| EST 1 | *adê* | האמנה | `בְּרִיתִי וְעֵדֹתִי זוֹ אֲלַמְּדֵם` (תהלים קלב:יב) | [cognate?] | A dynastic succession oath (sons on the throne) with `עֵדֹת`; the link to *adê* of a succession treaty is our proposal. |
| EST 10 | *ana ūmē ṣâti* | לימי עד | `גַּם בְּנֵיהֶם עֲדֵי עַד יֵשְׁבוּ לְכִסֵּא לָךְ` (תהלים קלב:יב) | [equivalent] | Succession "for ever" in a dynastic oath. Our proposal. |
| LH §280, 3115' | *māt nukurtim* | ארץ נכר | `עַל אַדְמַת נֵכָר` (תהלים קלז:ד) | [cognate] | *nakāru* = `נכר`. |
| EST 533 | *peʾenāti … liznun* | גחלים … יגשים | `יִמּוֹטוּ עֲלֵיהֶם גֶּחָלִים` (תהלים קמ:יא) | [equivalent] | Coals falling on the wicked (qere). |
| LH prol. 192 | *nīš qātišu* | נשיאת ידו | `מַשְׂאַת כַּפַּי מִנְחַת-עָרֶב` (תהלים קמא:ב) | [cognate] | Prayer as "lifting of the hand". |
| EST 311 | same | same | `הַמְלַמֵּד יָדַי לַקְרָב` (תהלים קמד:א) | [cognate] |  |
| LH prol. 21 | *šarrūtam dārītam* | מלכות נצח | `מַלְכוּתְךָ מַלְכוּת כָּל-עֹלָמִים` (תהלים קמה:יג) | [equivalent] | *dārû* = `נצח`, never `עולם`. |
| LH epil. 3468' | *uruḫšu līši* | את נתיבו ישבש | `וְדֶרֶךְ רְשָׁעִים יְעַוֵּת` (תהלים קמו:ט) | [equivalent] |  |
| LH epil. 3328'–3329' | *ina mātišu raggam u ṣēnam lissuḫ* | מארצו רשע וזד ינסח | `וּרְשָׁעִים מֵאֶרֶץ יִכָּרֵתוּ וּבוֹגְדִים יִסְּחוּ מִמֶּנָּה` (משלי ב:כב) | [cognate] | *nasāḫu* = `נסח`, wicked, "from the land". Our proposal. |
| EST 296 | *ina pān ilāni amēlūte maḫratūni* | לפני האלים ובני האדם רצוי | `וּמְצָא חֵן וְשֵׂכֶל טוֹב בְּעֵינֵי אֱלֹהִים וְאָדָם` (משלי ג:ד) | [equivalent] | The pair "gods and men". |
| LH prol. 262 | *mušūšer ammi* | המיישר את העם | `וְהוּא יְיַשֵּׁר אֹרְחֹתֶיךָ` (משלי ג:ו) | [cognate] | *ešēru* = ישר; *ammu* = `עַם`. |
| MAL §14, o ii 35 | *nāʾikāna* | לַבָּא עליה | `כֵּן הַבָּא אֶל אֵשֶׁת רֵעֵהוּ לֹא יִנָּקֶה כָּל הַנֹּגֵעַ בָּהּ` (משלי ו:כט) | [equivalent] | `הַבָּא אֶל אֵשֶׁת` – the Hebrew of our *nāʾikānu*. |
| LH §8, 409 | *adi šalāšâšu* | `עד פי שלושים` | `וְנִמְצָא יְשַׁלֵּם שִׁבְעָתָיִם` (משלי ו:לא) | [equivalent] | מן הזיכרון |
| HL HL2 §197, 197.4 | *tu-uš ku-en-zi *ḫa-ra-a-tar*-še-et NU.GÁL* | ואותם יהרוג – אין לו עברה. | `כִּי קִנְאָה חֲמַת-גָּבֶר` (משלי ו:לד) | [absent] | החכמה מכירה את חמת הבעל; בתורה אין לבעל זכות להרוג בעצמו |
| LH §129, 1477' | *aššassu uballaṭ* | את אשתו יחיה | `לֹא-יִשָּׂא פְּנֵי כָל-כֹּפֶר` (משלי ו:לה) | [divergence] | Proverbs presupposes the husband's power to accept ransom and warns he will not. From memory (Westbrook; MAL A 14–16). |
| MAL §15, o ii 56–57 | *aššassu uššar aʾīla uššurū* | ואם את אשתו [ישחרר], את האיש [ישחררו] | `לֹא יִשָּׂא פְּנֵי כָל כֹּפֶר וְלֹא יֹאבֶה כִּי תַרְבֶּה שֹׁחַד` (משלי ו:לה) | [divergence] | Proverbs presupposes the husband's power to accept ransom and warns that he will not. From memory (Westbrook). Partly restored. |
| LH §250, 2883' | *sūqam* | בשוק | `עֹבֵר בַּשּׁוּק אֵצֶל פִּנָּהּ` (משלי ז:ח) | [cognate] | *sūqu* = `שׁוּק` "street" (biblical sense). |
| LH §133, 1524' | *inaṣṣar* | תנצור, | `וּנְצֻרַת לֵב` (משלי ז:י) | [cognate] | *naṣāru* = `נצר`, דווקא על האשה הנואפת ("נצורת לב", שומרת את לבה); ראו §142–§143 (*naṣrat* `נצורה`) |
| LH §142, 1660' | *šumma naṣratma* | אם נצורה היא | `וּנְצֻרַת לֵב` (משלי ז:י) | [cognate] | אותו פועל בבינוני סביל על אשה, דווקא על הנואפת; ראו §143. מן הזיכרון (הזוג *naṣrat* / *waṣiat* והאשה של משלי ז נדונו בספרות; לא בדקנו) |
| LH §143, 1673' | *šumma lā naṣratma* | אם לא נצורה היא, | `שִׁית זוֹנָה וּנְצֻרַת לֵב` (משלי ז:י) | [cognate] |  |
| MAL §40, r v 66 | *ḫarimtu lā tuptaṣṣan* | זונה לא תתרעל | `שִׁית זוֹנָה וּנְצֻרַת לֵב` (משלי ז:י) | [equivalent] | A prostitute recognized by her dress. |
| LH §143, 1674' | *waṣiat* | ויוצאת היא, | `הֹמִיָּה הִיא וְסֹרָרֶת; בְּבֵיתָהּ לֹא-יִשְׁכְּנוּ רַגְלֶיהָ` (משלי ז:יא) | [equivalent] | האשה שאינה נשארת בבית |
| LH §142, 1664' | *waṣīma* | יוצא הוא, | `פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת; וְאֵצֶל כָּל-פִּנָּה תֶאֱרֹב` (משלי ז:יב) | [equivalent] | מי שאינו נשאר בבית; שם האשה, כאן הבעל |
| LH §143, 1674' | *waṣiat* | ויוצאת היא, | `פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת` (משלי ז:יב) | [equivalent] | הצעה שלנו (אולי נידונה בספרות) |
| LI §27, 326′ | *tilla₂-a* | של הרחוב | `פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת` (משלי ז:יב) | [equivalent] | The prostitute of the street. |
| MAL §9, o i 93 | *ittišiqši* | נשק לה | `וְהֶחֱזִיקָה בּוֹ וְנָשְׁקָה לּוֹ` (משלי ז:יג) | [cognate] | *našāqu* = נשק; Proverbs reverses the roles. Our proposal. |
| LH epil. 3302' | *mīšarim* | המישרים | `וּמִפְתַּח שְׂפָתַי מֵישָׁרִים` (משלי ח:ו) | [cognate] |  |
| LH epil. 3224' | *awâtūa nasqā* | דברי נבחרים | `וְדַעַת מֵחָרוּץ נִבְחָר` (משלי ח:י) | [equivalent] | Also 3336'. Our proposal. |
| LH epil. 3237'–3239' | *šumī ina damiqtim ana dār lizzakir* | שמי בנאה לנצח ייזכר | `זֵכֶר צַדִּיק לִבְרָכָה וְשֵׁם רְשָׁעִים יִרְקָב` (משלי י:ז) | [equivalent] | Our proposal. |
| LH §192, 2471' | *inakkisū* | יקצצו. | `וּלְשׁוֹן תַּהְפֻּכוֹת תִּכָּרֵת` (משלי י:לא) | [equivalent] | עונש לאיבר שחטא |
| LH §141, 1636' | *mussa ušamṭa* | את בעלה תבזה, | `אֵשֶׁת-חַיִל עֲטֶרֶת בַּעְלָהּ; וּכְרָקָב בְּעַצְמוֹתָיו מְבִישָׁה` (משלי יב:ד) | [divergence] | האשה המבישה את בעלה, היפוך אשת החיל. הצעה שלנו |
| EST 335 | same | same | `נֹצֵר פִּיו שֹׁמֵר נַפְשׁוֹ` (משלי יג:ג) | [cognate] |  |
| LH §141, 1635' | *bīssa usappaḫ* | את ביתה תפזר, | `חַכְמוֹת נָשִׁים בָּנְתָה בֵיתָהּ; וְאִוֶּלֶת בְּיָדֶיהָ תֶהֶרְסֶנּוּ` (משלי יד:א) | [equivalent] | האשה ההורסת את ביתה |
| LI epil. 483′–484′ | *niĝ₂ ba-a e₂-kur-ra il₂-la-na inim ḫe₂-em-mi-ib-gi₄-gi₄* | את המענק אשר לאכור נשא ידחה | `זֶבַח רְשָׁעִים תּוֹעֲבַת יְהוָה` (משלי טו:ח) | [equivalent] | The god rejects the offerings of the cursed one. |
| LH §168, 2011' | *nasāḫim* | לנסוח | `בֵּית גֵּאִים יִסַּח יְהוָה` (משלי טו:כה) | [cognate] | `נסח` בקל, כמו כאן, על "בית" |
| EST 335 | same | same | `שֹׁמֵר נַפְשׁוֹ נֹצֵר דַּרְכּוֹ` (משלי טז:יז) | [cognate] | `שמר נפש` and `נצר` in one line. |
| EST 343, 346 | *parāsu* (separate brothers) | הפרידו, תפרידו | `וְנִרְגָּן מַפְרִיד אַלּוּף` (משלי טז:כח) | [equivalent] | Slander that separates intimates. Our proposal. |
| LH §170, 2053' | *u mārū amtim* | ובני האמה | `עֶבֶד-מַשְׂכִּיל יִמְשֹׁל בְּבֵן מֵבִישׁ; וּבְתוֹךְ אַחִים יַחֲלֹק נַחֲלָה` (משלי יז:ב) | [equivalent] | מי שאינו בן הבחירה חולק "בתוך אחים". הצעה שלנו |
| EST 343 | same | same | `וְשֹׁנֶה בְדָבָר מַפְרִיד אַלּוּף` (משלי יז:ט) | [equivalent] |  |
| LH §119, 1351' | *paṭāru* | פטר | `פּוֹטֵר מַיִם רֵאשִׁית מָדוֹן` (משלי יז:יד) | [cognate] | "Release, let loose". |
| LH §44, 849 | *aḫšu iddi* | את זרועו השליך | `גַּם מִתְרַפֶּה בִמְלַאכְתּוֹ` (משלי יח:ט) | [equivalent] | Negligence in work; also 976, 1000. Our proposal. |
| LH §3, 338 | *sarrātim* | שקרים | `עֵד שְׁקָרִים לֹא יִנָּקֶה` (משלי יט:ה) | [equivalent] | The same plural phrase. Our proposal. |
| LH §169, 2028' | *ana abišu* | כלפי אביו | `מְשַׁדֶּד-אָב יַבְרִיחַ אֵם בֵּן מֵבִישׁ וּמַחְפִּיר` (משלי יט:כו) | [equivalent] | הבן שחוטא כלפי אביו. הצעה שלנו |
| LH §172, 2104' | *aššum ina bītim šūṣîm* | כדי להוציא (אותה) מן הבית | `מְשַׁדֶּד-אָב יַבְרִיחַ אֵם בֵּן מֵבִישׁ וּמַחְפִּיר` (משלי יט:כו) | [equivalent] | הבן ה"מבריח" את אמו; הצעה שלנו |
| LH §193, 2480' | *izērma* | שנא, | `מְשַׁדֶּד-אָב יַבְרִיחַ אֵם בֵּן מֵבִישׁ וּמַחְפִּיר` (משלי יט:כו) | [equivalent] | הבן הפוגע באב ובאם |
| LH §108, 1212' | *ina abnim rabītim* | `באבן גדולה` | `אֶבֶן וָאֶבֶן אֵיפָה וְאֵיפָה תּוֹעֲבַת יְהוָה גַּם-שְׁנֵיהֶם` (משלי כ:י) | [equivalent] | מן הזיכרון (דברים כה:יג–טז); הצעה שלנו (עמוס ח:ה). |
| LH prol. 35–36 | idem | idem | `מְזָרֶה רְשָׁעִים מֶלֶךְ חָכָם` (משלי כ:כו) | [equivalent] |  |
| EST 299 | *lū naṣir* (the heir) | יהי נצור | `חֶסֶד וֶאֱמֶת יִצְּרוּ מֶלֶךְ` (משלי כ:כח) | [cognate] | *naṣāru* of a king. Our proposal. |
| MALB §8, o iv 11–12 | *tahūma … usammeh* | `תחום … עירב` | `אַל תַּסֵּג גְּבוּל עוֹלָם אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח) | [equivalent] | As Deut 19:14. |
| LH §177, 2234' | *mārī almattim* | בני האלמנה | `אַל תַּסֵּג גְּבוּל עוֹלָם; וּבִשְׂדֵי יְתוֹמִים אַל תָּבֹא` (משלי כג:י) | [equivalent] | רכוש היתומים מוגן מפני מי שבא לקחתו. הצעה שלנו |
| MALB §9, o iv 20–21 | *tahūma ṣehra … usbalkit* | `תחום קטן … הזיז` | `אַל תַּסֵּג גְּבוּל עוֹלָם וּבִשְׂדֵי יְתוֹמִים אַל תָּבֹא` (משלי כג:י) | [equivalent] |  |
| EST **335** | ***nupšātkunu uṣrā*** | **את נפשכם נצרו** | `וְנֹצֵר נַפְשְׁךָ הוּא יֵדָע` (משלי כד:יב) | [cognate] | *napišta naṣāru* = `נצר נפש`. |
| EST 58 | *šunnû* | תשנו | `עִם שׁוֹנִים אַל תִּתְעָרָב` (משלי כד:כא) | [cognate] | `שׁוֹנִים` beside "fear God and king": those who "change" (their loyalty)? Our proposal; the sense of `שׁוֹנִים` is debated. |
| UN §31, 431–440 | *a-ša₃ apin-la₂-še₃ … nu-un-uru₄ ša₃-su-ga i₃-ĝar* | שדה לאריסות נתן, ולא חרש, ולשטח ריק שָׂם | `עַל שְׂדֵה אִישׁ עָצֵל עָבַרְתִּי` (משלי כד:ל) | [equivalent] | The tenant who leaves the field uncultivated (= LH §42–§43). |
| EST 328 | same | same | `וּמִי יַעֲמֹד לִפְנֵי קִנְאָה` (משלי כז:ד) | [cognate] |  |
| LH prol. 298–299 | *kittam u mīšaram* | אמת ומישרים | `מֶלֶךְ שׁוֹפֵט בֶּאֱמֶת דַּלִּים כִּסְאוֹ לָעַד יִכּוֹן` (משלי כט:יד) | [equivalent] | Truth, the poor, the throne established forever. Our proposal. |
| LH epil. 3359' | *ina mīšarim lirē* | במישרים ירעה | `מֶלֶךְ שׁוֹפֵט בֶּאֱמֶת דַּלִּים כִּסְאוֹ לָעַד יִכּוֹן` (משלי כט:יד) | [equivalent] | Just rule → long reign. |
| LH §193, 2484' | *inassaḫū* | ינסחו. | `עַיִן תִּלְעַג לְאָב וְתָבֻז לִיקְּהַת-אֵם יִקְּרוּהָ עֹרְבֵי-נַחַל` (משלי ל:יז) | [equivalent] | העין שבזה לאב ולאם תנוקר; אותו קשר בין חטא כלפי ההורים לבין העין (מן הזיכרון); הפועל העברי |
| UN e028 | *ARAD₂-de₃ nin-a-ni ba-an-du₁₂-du₁₂ i₃-gaz* | אם עבד את גבירתו נשא – יהרג | `תַּחַת-עֶבֶד כִּי יִמְלוֹךְ` (משלי ל:כב) | [equivalent] | The slave who marries his mistress – the world turned upside down; cf. Potiphar's wife (Gen 39:7). |
| LH §145, 1709' | *itti nadītim ul uštamaḫḫar* | עם הנדיתו לא תשתווה | `וְשִׁפְחָה כִּי תִירַשׁ גְּבִרְתָּהּ` (משלי ל:כג) | [equivalent] |  |
| UN §25, 360 | *nin-a-ni-gin₇* | כגבירתה | `וְשִׁפְחָה כִּי תִירַשׁ גְּבִרְתָּהּ` (משלי ל:כג) | [equivalent] | The inversion of rank; *nin* = *bēltu* = `גבירה`. |
| EST 616 | same | same | `וְכַפֶּיהָ תָּמְכוּ פָלֶךְ` (משלי לא:יט) | [cognate] | The spindle as the woman's tool. |
| LH §141, 1635' | *bīssa usappaḫ* | את ביתה תפזר, | `צוֹפִיָּה הֲילִכוֹת (הֲלִיכוֹת) בֵּיתָהּ; וְלֶחֶם עַצְלוּת לֹא תֹאכֵל` (משלי לא:כז) | [divergence] | אשת החיל, היפוכה. הצעה שלנו |
| EST 626 | *arrārī* | האוררים | `יִקְּבֻהוּ אֹרְרֵי יוֹם` (איוב ג:ח) | [cognate] | *arrāru* "curser" from *arāru*; professional cursers in a mythic frame. Our proposal. |
| EST 579–581 | *lā tasahharūni … ana bītātikunu lā tasahhurā* | אינו חוזר … אל בתיכם לא תחזרו | `לֹא יָשׁוּב עוֹד לְבֵיתוֹ וְלֹא יַכִּירֶנּוּ עוֹד מְקֹמוֹ` (איוב ז:י) | [equivalent] | No return home. |
| LH epil. 3447'–3451' | *uznam u nēmeqam līṭeršuma ina mīšītim littarrūšu* | בינה וחכמה ישלול ממנו, ובמבוכה ינהג אותו | `מֵסִיר לֵב רָאשֵׁי עַם-הָאָרֶץ; וַיַּתְעֵם בְּתֹהוּ לֹא-דָרֶךְ` (איוב יב:כד) | [equivalent] | Our proposal. |
| LH §164, 1942' | *iḫarraṣma* | ינכה, | `אִם חֲרוּצִים יָמָיו מִסְפַּר-חֳדָשָׁיו אִתָּךְ` (איוב יד:ה) | [cognate] | *ḫarāṣu* = `חָרַץ` ("לחתוך, לקבוע"); בעברית אין לו המובן "לנכות", ולכן `ינכה` בשורה. הצעה שלנו |
| LH §202, 2538' | *lētam maḫāṣu* | מחץ את לחי | `בְּחֶרְפָּה הִכּוּ לְחָיָי` (איוב טז:י) | [cognate] |  |
| EST 646 | *martu* | הַמָּרָה | `יִשְׁפֹּךְ לָאָרֶץ מְרֵרָתִי` (איוב טז:יג) | [cognate] | *martu* "gall" = biblical `מְרֵרָה`, modern `מָרָה`. |
| EST 649–651 | same | same | `כִּי שֻׁלַּח בְּרֶשֶׁת בְּרַגְלָיו` (איוב יח:ח) | [equivalent] | The wicked caught in net and snare (18:8–10). |
| LH epil. 3418'–3420' | *šumšu u zikiršu ina mātim lā šubšâm* | את שמו ואת זכרו בארץ לבלי הביא לכלל הוויה | `זִכְרוֹ-אָבַד מִנִּי-אָרֶץ; וְלֹא-שֵׁם לוֹ עַל-פְּנֵי-חוּץ` (איוב יח:יז) | [cognate] | *zikru* = זכר; name + memory + land. Our proposal. |
| MAL §29, o iv 19 | *ana mārē ša libbišu* | לבני בטנו | `וְחַנֹּתִי לִבְנֵי בִטְנִי` (איוב יט:יז) | [equivalent] | "The sons of his body" = his own sons. |
| LH §266, 3017' | *lipit ilim* | נגיעת אל | `כִּי יַד אֱלוֹהַּ נָגְעָה בִּי` (איוב יט:כא) | [equivalent] | The god's "touch" as disease. Our proposal for the wording (*lapātu* ~ `לפת`, not `נגע`). |
| EST 569 | *ina pîkunu limtiq* | בפיכם ימתק | `אִם תַּמְתִּיק בְּפִיו רָעָה` (איוב כ:יב) | [cognate] | Evil sweet in the mouth. Our proposal. |
| LH §25, 606 | *išātum innapiḫ* | אש נופחה | `תְּאָכְלֵהוּ אֵשׁ לֹא נֻפָּח` (איוב כ:כו) | [cognate] | *napāḫu* = `נפח`. |
| MALB §9, o iv 20–21 | *tahūma ṣehra … usbalkit* | `תחום קטן … הזיז` | `גְּבֻלוֹת יַשִּׂיגוּ עֵדֶר גָּזְלוּ וַיִּרְעוּ` (איוב כד:ב) | [equivalent] |  |
| LH §241, 2830' | *alpam ana nipûtim* | שור למשכון | `יַחְבְּלוּ שׁוֹר אַלְמָנָה` (איוב כד:ג) | [equivalent] | An ox taken in distraint. From memory. |
| LH §114, 1291' | *nipûssu ittepe* | `ואת מַשְׁכּוֹנוֹ מִשְׁכֵּן,` | `וְעַל-עָנִי יַחְבֹּלוּ` (איוב כד:ט) | [equivalent] | הנושה לוקח את ילדי החייב |
| LH §21, 569 | idem | idem | `חָתַר בַּחֹשֶׁךְ בָּתִּים` (איוב כד:טז) | [equivalent] | The housebreaker digs through a mud-brick wall. |
| UN prol. 179 | *i-{d}utu* | "הוי אותו!" | `כִּי אֲמַלֵּט עָנִי מְשַׁוֵּעַ; וְיָתוֹם וְלֹא עֹזֵר לוֹ` (איוב כט:יב) | [equivalent] | The ruler who answers the cry. |
| LH epil. 3258' | idem | idem | `אָב אָנֹכִי לָאֶבְיוֹנִים` (איוב כט:טז) | [equivalent] | Job as just judge (29:12–16). From memory. |
| EST 446 | same | same | `תִּטְחַן לְאַחֵר אִשְׁתִּי` (איוב לא:י) | [cognate] | Grinding and the wife to another (cf. 428–429) in one imprecation. Our proposal. |
| LH §62, 1081 | *šer'um* | תלם | `וְיַחַד תְּלָמֶיהָ יִבְכָּיוּן` (איוב לא:לח) | [equivalent] |  |
| LH prol. 39 | *ḫabālu* | יחבול | `נָשָׂאתִי לֹא אֶחְבֹּל` (איוב לד:לא) | [cognate] | `חבל` "act wrongly"; not `חבל` "take a pledge" (*ḫubullu*). |
| LH prol. 34 | *šūpû* | להופיע | `וְהֹפִיעַ אוֹר עֲנָנוֹ` (איוב לז:טו) | [equivalent] | Transitive `הופיע` "make shine". Our proposal. |
| EST 421 | *kî sirrime ṣabīti ina ṣēri rupdā* | כפרא וכצביה בערבה שוטטו | `אֲשֶׁר שַׂמְתִּי עֲרָבָה בֵיתוֹ` (איוב לט:ו) | [equivalent] / [cognate] (*ṣabītu* = `צְבִיָּה`) | The wild ass's home is the steppe. |
| EST 357 | same | same | `הוֹד נַחְרוֹ אֵימָה` (איוב לט:כ) | [equivalent] | The pair אימה + הוד. |
| EST 412 | (T) *ina epri takattamāni* | בעפר תטמנו | `טָמְנֵם בֶּעָפָר יָחַד` (איוב מ:יג) | [equivalent] | The verb is Tayinat's (*katāmu* "cover"; `כסה` reserved). |
| LH prol. 261 | *kīnātim* | נכונות | `כִּי לֹא דִבַּרְתֶּם אֵלַי נְכוֹנָה` (איוב מב:ז) | [cognate] | *kīnu* < *kânu*. Our proposal. |
| LH §172, 2101' | *kīma aplim ištēn* | כיורש אחד | `וַיִּתֵּן לָהֶם אֲבִיהֶם נַחֲלָה בְּתוֹךְ אֲחֵיהֶם` (איוב מב:טו) | [equivalent] | אשה המקבלת חלק בנחלה כאחד הבנים |
| LH §178, 2249' | *warkassa* | את נחלתה | `וַיִּתֵּן לָהֶם אֲבִיהֶם נַחֲלָה בְּתוֹךְ אֲחֵיהֶם` (איוב מב:טו) | [equivalent] | אב שנותן לבנותיו נחלה בין אחיהן; כאן הנחלה של הבת המוקדשת שבה לאחיה, אלא אם כתב לה האב אחרת |
| LH §180, 2325' | *aplim ištēn* | יורש אחד | `וַיִּתֵּן לָהֶם אֲבִיהֶם נַחֲלָה בְּתוֹךְ אֲחֵיהֶם` (איוב מב:טו) | [equivalent] | הבת מקבלת חלק בין אחיה |
| EST 439 | *ina sūqi rebīt* | בשוק וברחוב | `בַּשְּׁוָקִים וּבָרְחֹבוֹת` (שיר השירים ג:ב) | [cognate] (*sūqu* = `שׁוּק`) | The same pair. Our proposal. |
| IN IN §10, 10.12 | *nam-ma-kán GE₆-az {LÚ.MEŠ}ú-e-〈ḫe〉-eš-⸢kat⸣-tal-li-iš da-an-te-eš a-ša-an-*du** | ועוד: בלילה יהיו לקוחים סובבים, | `מְצָאוּנִי הַשֹּׁמְרִים הַסֹּבְבִים בָּעִיר` (שיר השירים ג:ג) | [equivalent] | "הסובבים" של העיר בלילה. הקבלה טיפולוגית |
| EST 348 | *ramû* D | תרפו | `אֲחַזְתִּיו וְלֹא אַרְפֶּנּוּ` (שיר השירים ג:ד) | [equivalent] | "Hold and not let go". Not *râmu* "love". |
| LH §215, 2615' | *u lū nakkapti awīlim* | `או את רַקַּת(?) איש` | `כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ` (שיר השירים ד:ג) | [equivalent] |  |
| MAL §40, r v 56–57 | *ina ūmi ina rebīte ēdiš illakāni uptaṣṣanā* | ביום (אשר) ברחוב [לבדן] הולכות – תתרעל[נה] | `נָשְׂאוּ אֶת רְדִידִי מֵעָלַי שֹׁמְרֵי הַחֹמוֹת` (שיר השירים ה:ז) | [equivalent] | A woman alone in the street, her shawl taken by the watchmen. Our proposal. Partly restored. |
| LH §274, 3062' | *mār ummânim* | בן אומן | `מַעֲשֵׂה יְדֵי אָמָּן` (שיר השירים ז:ב) | [cognate] | Loanword. From memory. |
| LH §188, 2421' | *šumma mār ummânim* | אם בן אומן | `חַמּוּקֵי יְרֵכַיִךְ כְּמוֹ חֲלָאִים מַעֲשֵׂה יְדֵי אָמָּן` (שיר השירים ז:ב) | [cognate] | העברית `אָמָּן` שאולה מן *ummânu*, וכאן גם הצירוף "מעשה ידי אמן" ≈ *šipir qātišu* (2424') |
| LH §188, 2424' | *šipir qātišu* | ואת מלאכת ידו | `מַעֲשֵׂה יְדֵי אָמָּן` (שיר השירים ז:ב) | [equivalent] |  |
| HL HL2 §176b, 176b.1 | *ták-ku DUMU UM-MI-A-AN* | אם בן־אֻמָּן | `מַעֲשֵׂה יְדֵי אָמָּן` (שיר השירים ז:ב) | [cognate] | *UMMIĀNU* – האכדית *ummânu*, קרובת `אָמָּן`; דרך האכדוגרמה |
| LH §58, 1042 | *inaṣṣar* | ינצור | `נָתַן אֶת הַכֶּרֶם לַנֹּטְרִים` (שיר השירים ח:יא) | [cognate] | `נטר` is the Aramaic form of the root of *naṣāru* (נצר). Our proposal. |
| LH §46, 884 | *izuzzu* | יחלוקו | `כַּרְמִי שֶׁלִּי לְפָנָי; הָאֶלֶף לְךָ שְׁלֹמֹה וּמָאתַיִם לְנֹטְרִים אֶת פִּרְיוֹ` (שיר השירים ח:יב) | [divergence] | Division of the yield; see §64. Our proposal. |
| LH §64, 1110–1114 | *šittīn … šaluštam šū ileqqe* | שני שלישים … שליש הוא יקח | `הָאֶלֶף לְךָ שְׁלֹמֹה וּמָאתַיִם לְנֹטְרִים אֶת פִּרְיוֹ` (שיר השירים ח:יב) | [equivalent] | An orchard given to keepers (`נָתַן אֶת הַכֶּרֶם לַנֹּטְרִים`, 8:11), the yield divided between owner and keepers. Our proposal. |
| LH §133, 1520' | *ibašši* | יש, | `וַיְהִי רָעָב בָּאָרֶץ; וַיֵּלֶךְ אִישׁ מִבֵּית לֶחֶם יְהוּדָה` (רות א:א) | [divergence] | ראו §134: שם האיש יוצא בגלל הרעב, כאן האשה. הצעה שלנו |
| LH §134, 1540' | *lā ibašši* | אין, | `וַיְהִי רָעָב בָּאָרֶץ; וַיֵּלֶךְ אִישׁ מִבֵּית לֶחֶם יְהוּדָה לָגוּר בִּשְׂדֵי מוֹאָב הוּא וְאִשְׁתּוֹ וּשְׁנֵי בָנָיו` (רות א:א) | [equivalent] | מחסור במזון כסיבה מוצדקת לעזוב את הבית. הצעה שלנו |
| MAL §33, o iv 70 | *ašar ḫadiatūni tallak* | אל אשר חפצה – תלך | `לֵכְנָה שֹּׁבְנָה אִשָּׁה לְבֵית אִמָּהּ` (רות א:ח) | [equivalent] | Naomi releases her widowed daughters-in-law. |
| LH §171, 2087' | *mutiša uššab* | בעלה תשב; | `וּמְצֶאןָ מְנוּחָה אִשָּׁה בֵּית אִישָׁהּ` (רות א:ט) | [equivalent] | "בית האיש" כמקום מושבה של האשה |
| LH §172, 2126' | *mut libbiša* | ובעל לבה | `יִתֵּן יְהוָה לָכֶם וּמְצֶאןָ מְנוּחָה אִשָּׁה בֵּית אִישָׁהּ` (רות א:ט) | [equivalent] | נעמי משחררת את כלותיה האלמנות להינשא לאחרים |
| MAL §36, o iv 92 | *ana mute lā tuššab* | לבעל לא תשב | `הֲלָהֵן תֵּעָגֵנָה לְבִלְתִּי הֱיוֹת לְאִישׁ` (רות א:יג) | [equivalent] | The `עגונה` motif; MAL limits it to five years. |
| MAL §45, r vi 49 | *šittā šanātu pāni mutiša tadaggal* | שתי שנים את פני בעלה תצפה | `הֲלָהֵן תֵּעָגֵנָה לְבִלְתִּי הֱיוֹת לְאִישׁ` (רות א:יג) | [equivalent] | The waiting wife; cf. MAL §36 (five years), LE §29, LH §133–135. |
| MAL §37, r v 19 | *rāqutteša* | רֵיקָם | `וְרֵיקָם הֱשִׁיבַנִי יְהוָה` (רות א:כא) | [cognate] | The widow who returns empty. |
| LE §41, 135 | *mudû* | מוֹדָע | `וּלְנָעֳמִי מֹידָע (מוֹדָע) לְאִישָׁהּ` (רות ב:א) | [cognate] | Same root and pattern ("an acquaintance"). |
| LE §8, 32 | *idi zārî* | דמי זורה | `הִנֵּה הוּא זֹרֶה אֶת גֹּרֶן הַשְּׂעֹרִים הַלָּיְלָה` (רות ג:ב) | [cognate] | *zarû* = `זָרָה`. |
| LH prol. 73–74 | *muṭīb libbi* | המטיב את לב | `וַיִּיטַב לִבּוֹ` (רות ג:ז) | [cognate] | Shared idiom. |
| LH epil. 3269'–3270' | *libbi Marduk bēlišu uṭīb* | את לב מרדוך אדוניו היטיב | `וַיִּיטַב לִבּוֹ` (רות ג:ז) | [cognate] |  |
| LH §255, 2935' | *imaddad* | ימוד | `וַיָּמָד שֵׁשׁ שְׂעֹרִים` (רות ג:טו) | [cognate] | *madādu* = `מדד`, barley in both. |
| LH §44, 861 | *imaddad* | ימוד | `וַיָּמָד שֵׁשׁ שְׂעֹרִים וַיָּשֶׁת עָלֶיהָ` (רות ג:טו) | [cognate] | *madādu* = `מדד` (T6). |
| MALB §6, o iii 5–8 | *urah ūmāte nāgira šalāšēšu ina libbi Aššur usassa* | `יֶרַח ימים (על ידי) הַכָּרוֹז שלוש פעמים / בתוך אַשּׁוּר יכריז` | `וּבֹעַז עָלָה הַשַּׁעַר וַיֵּשֶׁב שָׁם וְהִנֵּה הַגֹּאֵל עֹבֵר` (רות ד:א) | [divergence] | A public procedure before a field changes hands (from memory: the comparison with Ruth 4 and Jer 32 is usual) – but Ruth calls one known redeemer at the gate, MAL B a herald three times in a month to any claimant. No Bible text has a herald for land sales [absent]. |
| MALB §6, o iii 9–12 | *mā eqle u bēt ša annanna mār annanna … ana ṣarpe alaqqe* | `"השדה והבית של פלוני בן פלוני … בכסף אקח` | `סוּרָה שְׁבָה פֹּה פְּלֹנִי אַלְמֹנִי` (רות ד:א) | [equivalent] | The "so-and-so" of a legal formula about a field (הצעה שלנו). |
| MALB §6, o iii 35 | *haziānu 3 rabiūtu ša āle izzazzū* | `החַזָּן, שלושה גדולי העיר יעמדו (שם)` | `וַיִּקַּח עֲשָׂרָה אֲנָשִׁים מִזִּקְנֵי הָעִיר` (רות ד:ב) | [equivalent] | The city's notables as witnesses: three "great ones" and the mayor vs. ten elders (הצעה שלנו). |
| LH §171, 2090' | *ul inaddin* | לא תתן; | `חֶלְקַת הַשָּׂדֶה אֲשֶׁר לְאָחִינוּ לֶאֱלִימֶלֶךְ מָכְרָה נָעֳמִי` (רות ד:ג) | [divergence] | נעמי האלמנה מוכרת (או מעבירה) את שדה בעלה המת; LH אוסר על האלמנה למכור את מתנת בעלה. הצעה שלנו (מעמדה של נעמי בשדה נדון בספרות; לא בדקנו) |
| MALB §6, o iii 32 | *u qēpūtu ša šarre izzazzū* | `ופקידי המלך יעמדו (שם)` | `קְנֵה נֶגֶד הַיֹּשְׁבִים וְנֶגֶד זִקְנֵי עַמִּי` (רות ד:ד) | [equivalent] | Those present at the transaction: the king's officials vs. the elders. |
| LH §171, 2091' | *warkassa* | נחלתה | `לְהָקִים שֵׁם הַמֵּת עַל נַחֲלָתוֹ` (רות ד:ה) | [equivalent] | נחלת המת נשמרת לזרעו |
| MAL §30, o iv 25 | *aššat merāšu mētte* | את אשת בנו המת | `אֵשֶׁת הַמֵּת קָנִיתָי` (רות ד:ה) | [equivalent] |  |
| EST 631 | *lušallipkunu* | ישלוף אתכם | `שָׁלַף אִישׁ נַעֲלוֹ` (רות ד:ז) | [cognate] | *šalāpu* = `שלף`. |
| LH §7, 396 | *balum šībī* | `בלי עדים` | `עֵדִים אַתֶּם הַיּוֹם כִּי קָנִיתִי` (רות ד:ט) | [equivalent] | הקנייה בפני עדים ובכתב. הצעה שלנו (כקבלה לנוהג, לא לחוק) |
| EST 300 | *nabi šumšu* | ייקרא שמו | `וְיִקָּרֵא שְׁמוֹ בְּיִשְׂרָאֵל` (רות ד:יד) | [equivalent] |  |
| LH §178, 2279' | *ittanaššīši* | יפרנסנה; | `וְהָיָה לָךְ לְמֵשִׁיב נֶפֶשׁ וּלְכַלְכֵּל אֶת שֵׂיבָתֵךְ` (רות ד:טו) | [equivalent] | מי שמפרנס אשה ערירית מן הקרקע (הגואל); כאן האריס שבחרה |
| MAL §46, r vi 97 | *kī kallete ša iraʾʾumūšini* | כְּכַלָּה אשר יאהבוה | `כִּי כַלָּתֵךְ אֲשֶׁר אֲהֵבַתֶךְ` (רות ד:טו) | [equivalent] | The same pair (daughter-in-law, love) around the support of a widow, reversed. Our proposal. |
| LH §158, 1857' | *rabītišu* | רבתו | `רַבָּתִי בַגּוֹיִם` (איכה א:א) | [cognate] | *rabû* = רב. |
| EST 639 | same | same | `הִיא יָשְׁבָה בַגּוֹיִם לֹא מָצְאָה מָנוֹחַ` (איכה א:ג) | [cognate] |  |
| EST 576 | *ayālu kaššudūni dēkūni* | איל נרדף ונהרג | `הָיוּ שָׂרֶיהָ כְּאַיָּלִים לֹא מָצְאוּ מִרְעֶה וַיֵּלְכוּ בְלֹא כֹחַ לִפְנֵי רוֹדֵף` (איכה א:ו) | [cognate] | *ayyalu* = `אַיָּל`, the hunted stag. |
| EST 567 | same | same | `כָּל עַמָּהּ נֶאֱנָחִים מְבַקְּשִׁים לֶחֶם` (איכה א:יא) | [equivalent] | Treasures given for food. |
| EST 621 | *kî išāti … lušalbūkunu* | כאש … יקיפו אתכם | `וַיִּבְעַר בְּיַעֲקֹב כְּאֵשׁ לֶהָבָה אָכְלָה סָבִיב` (איכה ב:ג) | [equivalent] | Evil surrounding like fire. Our proposal. |
| EST 438–439 | same | same | `בֵּעָטֵף עוֹלֵל וְיוֹנֵק בִּרְחֹבוֹת קִרְיָה` (איכה ב:יא) | [equivalent] | Our proposal. |
| EST 252 | *turabbâni* | תגדלו | `אֲשֶׁר טִפַּחְתִּי וְרִבִּיתִי` (איכה ב:כב) | [cognate] | *rabû* D = `רִבָּה` "rear"; rendered `גידל`. |
| LH §202, 2538' | *lētam maḫāṣu* | מחץ את לחי | `יִתֵּן לְמַכֵּהוּ לֶחִי יִשְׂבַּע בְּחֶרְפָּה` (איכה ג:ל) | [cognate] |  |
| EST 586–587 | *kî qīru kupri napṭi luṣallimū* | כזפת, כפר ונפט ישחירו | `חָשַׁךְ מִשְּׁחוֹר תָּאֳרָם` (איכה ד:ח) | [equivalent] | Blackened skin in the famine of the siege. |
| EST 449 | same | same | `יְדֵי נָשִׁים רַחֲמָנִיּוֹת בִּשְּׁלוּ יַלְדֵיהֶן` (איכה ד:י) | [equivalent] |  |
| LH prol. 114 | *ṣulūl mātim* | קורת הארץ | `אֲשֶׁר אָמַרְנוּ בְּצִלּוֹ נִחְיֶה בַגּוֹיִם` (איכה ד:כ) | [equivalent] | The king as shelter. From memory. |
| LH epil. 3189'–3191' | *ṣillī ṭābum ana āliya tariṣ* | צלי הטוב על עירי פרוש | `אֲשֶׁר אָמַרְנוּ בְּצִלּוֹ נִחְיֶה בַגּוֹיִם` (איכה ד:כ) | [cognate] | *ṣillu* = `צל`, the king's shade. From memory. |
| EST 446 | *ṭênu* | טחן | `בַּחוּרִים טְחוֹן נָשָׂאוּ` (איכה ה:יג) | [cognate] |  |
| UN prol. 158–159 | *{ĝeš}kiri₆ ḫe₂-em-mi-gub* | גנים נטעתי שם | `עָשִׂיתִי לִי גַּנּוֹת וּפַרְדֵּסִים; וְנָטַעְתִּי בָהֶם עֵץ כָּל פֶּרִי` (קהלת ב:ה) | [equivalent] | Planting orchards as a royal deed. |
| LH §141, 1633' | *sikiltam* | וסגולה | `כָּנַסְתִּי לִי גַּם כֶּסֶף וְזָהָב וּסְגֻלַּת מְלָכִים` (קהלת ב:ח) | [cognate] | הסגולה כאוצר שנאסף. מן הזיכרון (גרינברג 1951) |
| LH epil. 3429' | *ašar šipṭim* | במקום המשפט | `מְקוֹם הַמִּשְׁפָּט שָׁמָּה הָרֶשַׁע` (קהלת ג:טז) | [cognate] | *šipṭu* = משפט; the only *šipṭu* in LH (open decision 1). |
| EST 220 | *muškēnu* | (המסכנות) | `טוֹב יֶלֶד מִסְכֵּן וְחָכָם מִמֶּלֶךְ זָקֵן וּכְסִיל` (קהלת ד:יג) | [cognate] |  |
| LH §15, 514 | *muškēnim* | מסכן | `טוֹב יֶלֶד מִסְכֵּן וְחָכָם` (קהלת ד:יג) | [cognate loan] | A status ("commoner"), not "poor": note. |
| LH §8, 411 | *šumma ša muškēnim* | `אם של מִסְכֵּן` | `יֶלֶד מִסְכֵּן וְחָכָם` (קהלת ד:יג) | [cognate loan] | המילה העברית שאולה מן האכדית *muškēnu* |
| LH §175, 2146' | *muškēnim* | מסכן | `יֶלֶד מִסְכֵּן וְחָכָם` (קהלת ד:יג) | [cognate loan] | המילה העברית שאולה מן *muškēnu* |
| HL HL2 §170, 170.1 | *… ŠU[M-an]* | אם איש בן חורין יהרוג נָחָשׁ, ושם של אחר | `טוֹב שֵׁם מִשֶּׁמֶן טוֹב` (קהלת ז:א) | [cognate] | ŠUM היא האכדית *šumu*, קרובת `שֵׁם`; דרך האכדוגרמה |
| EST 202 | *ina lā simenīšu* | [ב]לא זמנו | `לָמָּה תָמוּת בְּלֹא עִתֶּךָ` (קהלת ז:יז) | [equivalent] | *simānu* = `זְמָן` [cognate]. |
| IN IN §7, 7.16 | *DINGIR{MEŠ}-aš-ma Z[I-an-za da-aš-šu]-uš nu e-ep-pu-u-wa-⸢an⸣-zi UL nu-un-tar-nu-⸢zi⸣* | ואילו נפש הָאֵלִים – חזקה היא; ולתפוס – לא תמהר, | `אֲשֶׁר אֵין נַעֲשָׂה פִתְגָם מַעֲשֵׂה הָרָעָה מְהֵרָה; עַל כֵּן מָלֵא לֵב בְּנֵי הָאָדָם בָּהֶם לַעֲשׂוֹת רָע` (קהלת ח:יא) | [equivalent] | הדחייה בעונש היא שמעודדת את החוטא |
| LH §178, 2263' | *ipram piššatam u lubūšam* | מזונות, משחה ולבוש | `בְּכָל עֵת יִהְיוּ בְגָדֶיךָ לְבָנִים וְשֶׁמֶן עַל רֹאשְׁךָ אַל יֶחְסָר` (קהלת ט:ח) | [equivalent] | לחם (ט:ז), בגדים ושמן, ועמם "לב טוב" (ט:ז `וּשְׁתֵה בְלֶב טוֹב יֵינֶךָ`) – כמו "ייטיבו את לבה" (2265'–2266'). הצעה שלנו |
| EST 582 | same | same | `כַּדָּגִים שֶׁנֶּאֱחָזִים בִּמְצוֹדָה רָעָה וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב) | [equivalent] | Both trap words, `מְצוֹדָה` (*tubāqu*, 582) and `פַּח` (*gišparru*, 650). |
| EST 650 | *ina gišparri ša lā naparšudi* | בפח שאין ממנו מנוס | `כַּדָּגִים שֶׁנֶּאֱחָזִים בִּמְצוֹדָה רָעָה וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב) | [equivalent] |  |
| LH §15, 514 | idem | idem | `וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם` (קהלת ט:טו) | [cognate loan] |  |
| LH §198, 2516' | *muškēnim* | מסכן | `וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם` (קהלת ט:טו) | [cognate loan] | A status, not "poor". |
| LH §140, 1624' | *šumma muškēnum* | אם מסכן | `וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם` (קהלת ט:טו) | [cognate loan] | מעמד, לא "עני" |
| LH §175, 2146' | *muškēnim* | מסכן | `וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם` (קהלת ט:טו) | [equivalent] | מעמד, לא "עני" |
| LE §12, 43 | *ina eqel muškēnim* | בשדה מִסְכֵּן | `וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם` (קהלת ט:טו) | [cognate] | The Hebrew loanword from *muškēnum*; the law protects only the *muškēnum*'s field and house (§12–13). |
| LH §236, 2780' | *malāḫum īgīma* | `והמלח התעצל,` | `בַּעֲצַלְתַּיִם יִמַּךְ הַמְּקָרֶה וּבְשִׁפְלוּת יָדַיִם יִדְלֹף הַבָּיִת` (קהלת י:יח) | [equivalent] | העצלות כגורם לנזק. הצעה שלנו |
| EST 439–448 | street, mill, door | בשוק … קול רחיים … את דלתה תנעל | `וְסֻגְּרוּ דְלָתַיִם בַּשּׁוּק בִּשְׁפַל קוֹל הַטַּחֲנָה` (קהלת יב:ד) | [equivalent] | Our proposal. |
| LH epil. 3301'–3302' | *awât mīšarim* | דברי המישרים | `וְכָתוּב יֹשֶׁר דִּבְרֵי אֱמֶת` (קהלת יב:י) | [equivalent] | Our proposal. |
| LH §141, 1636' | *mussa ušamṭa* | את בעלה תבזה, | `כִּי יֵצֵא דְבַר הַמַּלְכָּה עַל כָּל הַנָּשִׁים לְהַבְזוֹת בַּעְלֵיהֶן בְּעֵינֵיהֶן` (אסתר א:יז) | [equivalent] | אותו מעשה ואותו פועל עברי (Hiphil של `בזה`), בדין המלכה המבזה את בעלה |
| EST 297 | *ina muḫḫikunu lū ṭābat* | עליכם יהי טוב | `אִם עַל הַמֶּלֶךְ טוֹב` (אסתר א:יט) | [cognate] | *ṭābu ina muḫḫi* = `טוֹב עַל`, the same idiom. |
| LH §141, 1636' | *mussa ušamṭa* | את בעלה תבזה, | `וּמַלְכוּתָהּ יִתֵּן הַמֶּלֶךְ לִרְעוּתָהּ הַטּוֹבָה מִמֶּנָּה` (אסתר א:יט) | [equivalent] | המבזה את בעלה מוחלפת באחרת (§141: הבעל ישא אחרת והיא תשב כאמה). הצעה שלנו |
| LH §141, 1648' | *mussa sinništam šanītam* | בעלה אשה אחרת | `וּמַלְכוּתָהּ יִתֵּן הַמֶּלֶךְ לִרְעוּתָהּ הַטּוֹבָה מִמֶּנָּה` (אסתר א:יט) | [equivalent] | הצעה שלנו (אסתר) |
| LH §178, 2250' | *ēma eliša* | לאשר עליה | `אִם עַל הַמֶּלֶךְ טוֹב` (אסתר א:יט) | [cognate] | אותו ניב בדיוק (*eli … ṭābu* = `עַל … טוֹב`) |
| LH §177, 2228' | *urabbû* | יגדלו; | `וַיְהִי אֹמֵן אֶת הֲדַסָּה הִיא אֶסְתֵּר בַּת דֹּדוֹ כִּי אֵין לָהּ אָב וָאֵם` (אסתר ב:ז) | [equivalent] | אומן שמגדל יתומה; כאן אב חורג ואם שמגדלים יתומי אב |
| LH §185, 2401' | *ana mārūtim* | לבנות | `וּבְמוֹת אָבִיהָ וְאִמָּהּ לְקָחָהּ מָרְדֳּכַי לוֹ לְבַת` (אסתר ב:ז) | [equivalent] | אותו מבנה (*ana mārūtim leqû* = `לָקַח … לְבַת`), באותו פועל (*leqû* = `לקח` |
| LI §20b, 244′ | *dumu a₂-e₃-a* | הילד המגודל | `וַיְהִי אֹמֵן אֶת הֲדַסָּה` (אסתר ב:ז) | [equivalent] | Raising another's child. |
| EST 78 | *ša-rēšāni* | הסריסים | `שְׁנֵי סָרִיסֵי הַמֶּלֶךְ` (אסתר ב:כא) | [cognate] | Loan; a eunuchs' plot reported to the king (2:21–22). |
| EST 81–82 | *lā tallakāninni … lā taqabbâni* | לא תבואו אל … ולא תאמרו (לו) | `וַיִּוָּדַע הַדָּבָר לְמָרְדֳּכַי וַיַּגֵּד לְאֶסְתֵּר הַמַּלְכָּה` (אסתר ב:כב) | [equivalent] | Reporting a palace plot. |
| MALB §1, o ii 14 | *ištu ahhēšu puršu iṣalli* | `עם אחיו את הפּוּר שלו יפיל` | `הִפִּיל פּוּר הוּא הַגּוֹרָל` (אסתר ג:ז) | [cognate] | *pūru* is the source of Hebrew `פּוּר`; *pūra ṣalāʾu* = `הִפִּיל פּוּר` (the collocation: הצעה שלנו). |
| IN IN §4, 4.6 | *EZEN₄{MEŠ} {LÚ.MEŠ}ú-pa-ti-ia-aš EZEN₄{MEŠ} pu-u-⸢la⸣-aš EZEN₄{MEŠ} ḫa-aḫ-ra-an-na-aš* | חגי אנשי הָאוּפַּטִי, חגי הַפּוּלָה(?), חגי העידור(?) – | `הִפִּיל פּוּר הוּא הַגּוֹרָל לִפְנֵי הָמָן` (אסתר ג:ז) | [equivalent] | גם חג הפורים נקרא על שם "הגורל" (*pūru* האכדי). ההקבלה טיפולוגית ומקרית בצליל: *pul-* החתי ו־*pūru* האכדי אינם בהכרח מילה אחת. `גורל` שמור בקורפוס זה לגורלות של ויקרא טז, ולכן *pul-* מתועתק |
| LH prol. 255 | *eli Ištar ṭābā* | על אשתר טובים | `אִם עַל הַמֶּלֶךְ טוֹב` (אסתר ג:ט) | [cognate] | Same idiom "good upon". |
| EST i | *kunuk Aššur* | חותם אשור | `וְנַחְתּוֹם בְּטַבַּעַת הַמֶּלֶךְ אֵין לְהָשִׁיב` (אסתר ח:ח) | [equivalent] | The seal makes the document irrevocable; here the god's seal. Our proposal. |
| EST 377 | *tūrtu tutarrāni* | השבה תשיבו | `וְנַחְתּוֹם בְּטַבַּעַת הַמֶּלֶךְ אֵין לְהָשִׁיב` (אסתר ח:ח) | [equivalent] | Hebrew `הֵשִׁיב` = revoke, of a sealed royal document (cf. 407). Our proposal. |
| EST 407 | *ina kunukki ša Aššur … kanikūni* | בחותם של אשור … חתום | `וְחִתְמוּ בְּטַבַּעַת הַמֶּלֶךְ` (אסתר ח:ח) | [equivalent] | The sealed document that cannot be revoked (cf. 377); also `וָאֶכְתֹּב בַּסֵּפֶר וָאֶחְתֹּם` (ירמיהו לב:י). |
| EST 313 | *ḫubtu … ḫabātu* | ביזתו … תבוזו | `וּבַבִּזָּה לֹא שָׁלְחוּ אֶת יָדָם` (אסתר ט:טו) | [equivalent] |  |
| LH §187, 2418' | *muzzaz ekallim* | העומד בהיכל | `וַאֲשֶׁר כֹּחַ בָּהֶם לַעֲמֹד בְּהֵיכַל הַמֶּלֶךְ` (דניאל א:ד) | [equivalent] | אותו צירוף (*muzzaz ekallim* = `לַעֲמֹד בְּהֵיכַל`), ובאותו הקשר: נערים שמגדל `שַׂר הַסָּרִיסִים` לשירות החצר. הצעה שלנו |
| IN IN §6, 6.4 | *ḫu-u-ma-an-pát DINGIR-LIM-ni 〈〈EGIR-pa〉〉 ma-ni-ia-aḫ-tén nam-ma-aš-ma-aš PA-NI DINGIR-LIM me-mi-an* | מַנּוּ לָאֵל את הכול ממש! ועוד – לכם, לפני הָאֵל, דבר | `וַיְמַן לָהֶם הַמֶּלֶךְ דְּבַר יוֹם בְּיוֹמוֹ מִפַּת בַּג הַמֶּלֶךְ` (דניאל א:ה) | [equivalent] | "מינה" מנה מזון קבועה, כמו מנתו היומית של האל |
| MAL §47, r vii 23 | *āšipu* | האַשָּׁף | `עַל כָּל הַחַרְטֻמִּים הָאַשָּׁפִים` (דניאל א:כ) | [cognate] | The Akkadian word behind Hebrew/Aramaic `אַשָּׁף`. |
| HL HL2 §173a, 173a.2 | *É-SÚ pu-p[u-u]l-li ki-i-ša* | ביתו לחורבה ייעשה. אם לדין של נכבד | `וּבָתֵּיכוֹן נְוָלִי יִתְּשָׂמוּן` (דניאל ב:ה) | [equivalent] | כנ"ל, בחצר נבוכדנאצר |
| LH epil. 3587'–3589' | *biniātišu kīma ṣalam ṭiddim liḫbuš* | ואת איבריו כצלם טיט ירסק | `וּמְחָת לְצַלְמָא עַל רַגְלוֹהִי דִּי פַרְזְלָא וְחַסְפָּא; וְהַדֵּקֶת הִמּוֹן` (דניאל ב:לד) | [cognate] | *ṣalmu* = צלם (Aram. צלמא); a clay-footed image crushed. Our proposal. |
| LH prol. 152 | idem | idem | `אֱלָהּ אֱלָהִין וּמָרֵא מַלְכִין` (דניאל ב:מז) | [equivalent] | Said of Daniel's god. |
| LH §16, 526 | *nāgirim* | הכרוז | `וְכָרוֹזָא קָרֵא בְחָיִל` (דניאל ג:ד) | [equivalent] |  |
| EST 270, 323–324, 341–342 | *karṣī akālu* | את קרציהם … תאכלו | `וַאֲכַלוּ קַרְצֵיהוֹן דִּי יְהוּדָיֵא` (דניאל ג:ח) | [cognate] | The Akkadian idiom "eat the pieces" = slander, in Biblical Aramaic. |
| LH §161, 1896' | *uktarrissu* | השמיצו, | `וַאֲכַלוּ קַרְצֵיהוֹן דִּי יְהוּדָיֵא` (דניאל ג:ח) | [cognate] | האכדית *karṣī akālu* "לאכול קרצים" = להלשין, באותו שורש |
| EST 172 | *lā tušezzabāninni* | לא תצילו | `אֱלָהַנָא דִּי אֲנַחְנָא פָלְחִין יָכִל לְשֵׁיזָבוּתַנָא` (דניאל ג:יז) | [cognate] | Aramaic `שֵׁיזִב`, a loan from *šūzubu*. |
| EST 192–194 | the four royal powers | ישפיל, ירים, יהרוג, יחיה | `דִּי הֲוָא צָבֵא הֲוָה קָטֵל וְדִי הֲוָה צָבֵא הֲוָה מַחֵא וְדִי הֲוָה צָבֵא הֲוָה מָרִים וְדִי הֲוָא צָבֵא הֲוָא מַשְׁפִּל` (דניאל ה:יט) | [equivalent] | Nebuchadnezzar's power: kill, keep alive, raise, lower – the same four. Our proposal. |
| EST 343 | *parāsu* | הפרידו | `פְּרִיסַת מַלְכוּתָךְ` (דניאל ה:כח) | [cognate] | `פרס` "divide", note only. |
| EST ii | *ša lā šunnê* | אשר אין לשנותו | `דִּי לָא לְהַשְׁנָיָה כְּדָת מָדַי וּפָרַס` (דניאל ו:ט) | [cognate] | Aramaic `שנה` of a written, sealed royal decree (6:18 the sealing). Our proposal. |
| EST 270 | same | same | `דִּי אֲכַלוּ קַרְצוֹהִי דִּי דָנִיֵּאל` (דניאל ו:כה) | [cognate] |  |
| EST 471 | *natāku* | יתכו | `וַתִּתַּךְ עָלֵינוּ הָאָלָה וְהַשְּׁבֻעָה` (דניאל ט:יא) | [cognate] | The oath-curse "poured out". Our proposal. |
| LH §178, 2261' | *kīma emūq* | ככוח | `כְּכֹחָם נָתְנוּ לְאוֹצַר הַמְּלָאכָה` (עזרא ב:סט) | [equivalent] | "ככוח" = לפי היכולת, אותה דרך דיבור (כוח = שיעור הנתינה) |
| EST 666 | same | same | `מִימֵי אֵסַר חַדֹּן מֶלֶךְ אַשּׁוּר` (עזרא ד:ב) | [equivalent] | The biblical form of the name. |
| LH §27, 644 | *ilikšu* | `את הֲלָכוֹ` | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא יִנְתְּנוּן` (עזרא ד:יג) | [cognate] | הארמית המקראית `הֲלָךְ` שאולה מ־*ilku* (Klein: "BAram., from Akka. ulku, alku … feudal duty"), ו־`בְּלוֹ` מ־*biltu* (BDB; ראו 767). |
| LH §36, 767 | *ša nāši biltim* | `ונושא מַס` | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא יִנְתְּנוּן` (עזרא ד:יג) | [cognate] | הארמית `בְּלוֹ` "מס" שאולה מ־*biltu* (BDB: "loan-word from Assyrian biltu … according to most mod.") |
| LH §182, 2362' | *ilkam* | ואת ההלך | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא יִנְתְּנוּן` (עזרא ד:יג) | [cognate] |  |
| LH §153, 1813'–1814' | *ina gašīšim išakkanūši* | על מוט ישימוה | `וּזְקִיף יִתְמְחֵא עֲלֹהִי` (עזרא ו:יא) | [equivalent] | Impalement on a beam in the Persian decree. From memory. |
| LH §158, 1861'–1862' | *ina bīt abim innassaḫ* | מבית האב ינסח | `יִתְנְסַח אָע מִן בַּיְתֵהּ` (עזרא ו:יא) | [cognate] | The same verb with "from his house". Our proposal. |
| MAL §53, r vii 96 | *zaqāpu* | יזקפוה | `וּזְקִיף יִתְמְחֵא עֲלֹהִי` (עזרא ו:יא) | [cognate] | Aramaic `זקף` "impale". |
| HL HL2 §173a, 173a.2 | *É-SÚ pu-p[u-u]l-li ki-i-ša …* | ביתו לחורבה ייעשה. אם לדין של נכבד | `וּבַיְתֵהּ נְוָלוּ יִתְעֲבֵד עַל דְּנָה` (עזרא ו:יא) | [equivalent] | אותו עונש למתנגד לדין המלך: ביתו נעשה לחורבה / לאשפה |
| LH §27, 644 | *ilikšu* | `את הֲלָכוֹ` | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [cognate] | הארמית המקראית `הֲלָךְ` שאולה מ־*ilku* (Klein: "BAram., from Akka. ulku, alku … feudal duty"), ו־`בְּלוֹ` מ־*biltu* (BDB; ראו 767). |
| LH §40, 799 | *nadītum tamkārum* | `נָדִיתוּ, תַּגָּר` | `כָל כָּהֲנַיָּא וְלֵוָיֵא זַמָּרַיָּא תָרָעַיָּא נְתִינַיָּא … מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [equivalent] | אנשי המקדש פטורים מ"בְּלוֹ וַהֲלָךְ"; ב־LH הנדיתו והתגר רשאים למכור, והחובה עוברת לקונה. הצעה שלנו. |
| LH §182, 2362' | *ilkam* | ואת ההלך | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [cognate] | אותה מילה (*ilku* > ארמית `הֲלָךְ`), ואותו פטור: כהני המקדש ומשרתיו פטורים מן ההלך, כמו הנדיתו של מרדוך |
| HL HL1 §40, 204 | *LÚ IL-KI tittianza* | איש־הַהֲלָךְ מוצב (במקומו), | `מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [cognate loan] | אחד ממסי המלך, שממנו פטורים משרתי בית האל; המילה הארמית שאולה מן האכדית *ilku* |
| HL HL1 §50, 281 | *kuel=a {GIŠ}eya āški=šši š[akuwān?]* | ואילו מי שעץ־אֵיָה בשערו [*ניצב*?] … | `וּפָלְחֵי בֵּית אֱלָהָא דְנָה מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד) | [equivalent] | פטור ממסים ומ"הֲלָךְ" למשרתי בית האל; כך גם כאן: אנשי הפולחן בערים הקדושות פטורים, ומשפחתם הרחבה ("אנשי חלקם") נושאת בלוּצִּי |
| LH §166, 1966' | *aššātim īḫuz* | נשים נשא, | `כִּי נָשְׂאוּ מִבְּנֹתֵיהֶם לָהֶם וְלִבְנֵיהֶם` (עזרא ט:ב) | [equivalent] | אותו פועל עברי, `נשא` ל־, על אב הלוקח אשה לבנו |
| LH §188, 2421' | *šumma mār ummânim* | אם בן אומן | `וְעַל יָדוֹ הֶחֱזִיק חֲנַנְיָה בֶּן הָרַקָּחִים` (נחמיה ג:ח) | [equivalent] | "בן" + שם בעל המלאכה = חבר בגילדה, כמו *mār ummânim* |
| LH §38, 789 | *u ana e’iltišu* | `ובעד חוֹבָתוֹ` | `שְׂדֹתֵינוּ וּכְרָמֵינוּ וּבָתֵּינוּ אֲנַחְנוּ עֹרְבִים וְנִקְחָה דָגָן בָּרָעָב` (נחמיה ה:ג) | [equivalent] | שדה, כרם ובית שמושכנו בעד חוב: אותה שלישייה. הצעה שלנו. |
| LH §49, 923 | *eqlam … ana tamkārim iddin* | (שדה) לתגר נתן | `לָוִינוּ כֶסֶף לְמִדַּת הַמֶּלֶךְ שְׂדֹתֵינוּ וּכְרָמֵינוּ` (נחמיה ה:ד) | [equivalent] | Silver borrowed against fields. From memory. |
| LH §117, 1326' | idem | idem | `וְהִנֵּה אֲנַחְנוּ כֹבְשִׁים אֶת בָּנֵינוּ וְאֶת בְּנֹתֵינוּ לַעֲבָדִים` (נחמיה ה:ה) | [equivalent] |  |
| MAL §39, r v 28–29 | *abuša ḫabbul kī šaparte šēšubat* | אביה חייב, כערבון הושבה | `וְהִנֵּה אֲנַחְנוּ כֹבְשִׁים אֶת בָּנֵינוּ וְאֶת בְּנֹתֵינוּ לַעֲבָדִים` (נחמיה ה:ה) | [equivalent] | Daughters given for debt. |
| MAL §44, r vi 42 | *ša kī šaparte … ina bēt aʾīle usbūni* | אשר כעֵרָבוֹן … בבית איש יושב | `וְהִנֵּה אֲנַחְנוּ כֹבְשִׁים אֶת בָּנֵינוּ וְאֶת בְּנֹתֵינוּ לַעֲבָדִים` (נחמיה ה:ה) | [equivalent] | Free persons held for debt. |
| LH §280, 3127' | *andurāršunu* | דרורם | `אֲנַחְנוּ קָנִינוּ אֶת אַחֵינוּ הַיְּהוּדִים הַנִּמְכָּרִים לַגּוֹיִם` (נחמיה ה:ח) | [equivalent] | Natives sold abroad bought back. Our proposal. |
| EST 116 | same | same | `וְגַם נְבִיאִים הֶעֱמַדְתָּ לִקְרֹא עָלֶיךָ בִירוּשָׁלִַם לֵאמֹר מֶלֶךְ בִּיהוּדָה` (נחמיה ו:ז) | [equivalent] | Prophets proclaiming a rival king. Our proposal. |
| LH epil. 3144'–3145' | idem | idem | `וַתִּתֵּן לָהֶם מִשְׁפָּטִים יְשָׁרִים וְתוֹרוֹת אֱמֶת` (נחמיה ט:יג) | [equivalent] | "Upright judgments" ≈ *dīnāt mīšarim*. SEAL reads *kīnāt* ("truths") – then cf. *kittum u mīšarum*. |
| EST 1 | *adê* | האמנה | `אֲנַחְנוּ כֹּרְתִים אֲמָנָה וְכֹתְבִים` (נחמיה י:א) | [equivalent] | Source of the rendering: a written, sealed agreement. |
| EST 494–512 | same | same | `וּבָאִים בְּאָלָה וּבִשְׁבוּעָה` (נחמיה י:ל) | [equivalent] | A 1st-person-plural oath of the people with `אָלָה` and `שְׁבוּעָה` (*māmītu*, *tamītu*), in the chapter that has `אֲמָנָה` (10:1). Our proposal. |
| EST 494–512 | same | same | `וַאֲשֶׁר לֹא נִתֵּן בְּנֹתֵינוּ לְעַמֵּי הָאָרֶץ` (נחמיה י:לא) | [equivalent] | Negative vows in the 1st person plural, as §57's oath clauses. Our proposal. |
| MAL §44, r vi 44 | *inaṭṭu ibaqqan* | יַלְקֶה, ימרוט | `וָאַכֶּה מֵהֶם אֲנָשִׁים וָאֶמְרְטֵם` (נחמיה יג:כה) | [equivalent] | Beating and plucking the hair as punishment, in the same order (also §59). Our proposal. |
| LH §175, 2147' | *mārat awīlim* | בת איש | `וַיִּתֵּן שֵׁשָׁן אֶת בִּתּוֹ לְיַרְחָע עַבְדּוֹ לְאִשָּׁה` (דברי הימים א ב:לה) | [equivalent] | בת בן חורין נישאת לעבד; שם האב עצמו נותן אותה לעבדו (שאין לו בנים, ב:לד). מן הזיכרון |
| LH §175, 2155' | *ul iraggum* | לא יתבע. | `וַיִּתֵּן שֵׁשָׁן אֶת בִּתּוֹ לְיַרְחָע עַבְדּוֹ לְאִשָּׁה; וַתֵּלֶד לוֹ אֶת עַתָּי` (דברי הימים א ב:לה) | [equivalent] | בן העבד ובת החורין נמנה בייחוס משפחת האם. מן הזיכרון |
| LH §158, 1862' | *innassaḫ* | ינסח | `וּבְחַלְּלוֹ יְצוּעֵי אָבִיו נִתְּנָה בְּכֹרָתוֹ לִבְנֵי יוֹסֵף` (דברי הימים א ה:א) | [equivalent] | Reuben loses the birthright: disinheritance for lying with the father's woman. From memory. |
| LH §168, 2024' | *ul inassaḫ* | לא ינסח. | `וּבְחַלְּלוֹ יְצוּעֵי אָבִיו נִתְּנָה בְּכֹרָתוֹ לִבְנֵי יוֹסֵף` (דברי הימים א ה:א) | [divergence] | ראובן מאבד את בכורתו בגלל "עוון כבד" כלפי אביו (בראשית לה:כב; מט:ד), בלי דיינים ובלי מחילה ראשונה. מן הזיכרון |
| LH §169, 2036' | *inassaḫ* | ינסח. | `וְלֹא לְהִתְיַחֵשׂ לַבְּכֹרָה` (דברי הימים א ה:א) | [equivalent] | ראובן אינו נמנה עוד כבכור |
| LH §170, 2056' | *aplum mār ḫīrtim* | היורש, בן הבחירה, | `וְהַבְּכֹרָה לְיוֹסֵף` (דברי הימים א ה:ב) | [equivalent] | זכות הבכורה כמעמד שאפשר להעביר |
| IN IN §10, 10.7 | *[n]a-aš I-NA É DINGIR-LIM še-e-šu-u-an-zi ⸢ḫu-u⸣-[da-a-ak š]a-ra-a ú-ed-du* | והוא – מיד יעלה לבית הָאֵל לשכב (שם)! | `וּסְבִיבוֹת בֵּית הָאֱלֹהִים יָלִינוּ: כִּי עֲלֵיהֶם מִשְׁמֶרֶת` (דברי הימים א ט:כז) | [equivalent] | `וּשְׁמוּאֵל שֹׁכֵב בְּהֵיכַל יְהוָה` (שמואל א ג:ג) – משרתי הקודש לנים בבית האל. הקבלה טיפולוגית |
| IN IN §10, 10.19 | *nu-za ku-iš ⸢ŠA⸣ KÁ É DINGIR-LIM e-eš-du nu-za É DINGIR-LIM pa-aḫ-ša-ru* | וזה אשר של שער בית הָאֵל יהיה – וישמור את בית הָאֵל! | `וְהֵם עַל הַמַּפְתֵּחַ וְלַבֹּקֶר לַבֹּקֶר` (דברי הימים א ט:כז) | [equivalent] | שוערי בית האלוהים |
| IN IN §10, 10.23 | *le-e ⸢e⸣-eš-zi nam-ma-aš-ma-aš ḫa-a-li ar-ḫa šar-ra-an e-eš-du* | אַל תהיה! ועוד: המשמרת תהיה מחולקת ביניכם; | `כִּי עֲלֵיהֶם מִשְׁמֶרֶת` (דברי הימים א ט:כז) | [equivalent] | משמרות מחולקות בין הלויים. הקבלה טיפולוגית |
| LH §141, 1633' | *sikiltam* | וסגולה | `וְעוֹד בִּרְצוֹתִי בְּבֵית אֱלֹהַי יֶשׁ לִי סְגֻלָּה זָהָב וָכָסֶף` (דברי הימים א כט:ג) | [cognate] | הסגולה כאוצר פרטי, כמו כאן |
| LH §165, 1948' | *ša īnšu maḫru* | אשר עינו מקבלת אותו, | `וַיֶּאֱהַב רְחַבְעָם אֶת מַעֲכָה בַת אַבְשָׁלוֹם מִכָּל נָשָׁיו וּפִילַגְשָׁיו` (דברי הימים ב יא:כא) | [equivalent] | בן האשה האהובה (מעכה) מועדף; ראו הפסוק הבא. הצעה שלנו |
| LH §165, 1948' | *ša īnšu maḫru* | אשר עינו מקבלת אותו, | `וַיַּעֲמֵד לָרֹאשׁ רְחַבְעָם אֶת אֲבִיָּה בֶן מַעֲכָה לְנָגִיד בְּאֶחָיו` (דברי הימים ב יא:כב) | [equivalent] | רחבעם מעמיד את בן האשה האהובה לראש אחיו. הצעה שלנו |
| EST 390–392 | *ina libbi adê … lā terrabāni* | באמנה … לא תבואו | `וַיָּבֹאוּ בַבְּרִית לִדְרוֹשׁ אֶת יְהוָה אֱלֹהֵי אֲבוֹתֵיהֶם` (דברי הימים ב טו:יב) | [equivalent] | "Enter the covenant", with `בְּכָל לְבָבָם` and the oath (15:12–15). Our proposal for the combination. |
| EST 387 | *ina gummurti libbikunu … tatammāni* | בשלמות לבכם … תישבעו | `וַיִּשְׂמְחוּ כָל יְהוּדָה עַל הַשְּׁבוּעָה כִּי בְכָל לְבָבָם נִשְׁבָּעוּ` (דברי הימים ב טו:טו) | [equivalent] | Swearing "with all the heart" after entering the covenant (15:12, cf. 392). Our proposal. |
| LH §215, 2610' | *šumma asûm* | `אם רופא` | `כִּי בָּרֹפְאִים` (דברי הימים ב טז:יב) | [equivalent] | מן הזיכרון |
| LH §5, 376 | idem | idem | `כִּי לֹא לְאָדָם תִּשְׁפְּטוּ כִּי לַיהוָה` (דברי הימים ב יט:ו) | [equivalent] | Royally appointed judges, as in LH. Our proposal. |
| EST 89–91 | *tidintu … iddinaššūni … ubbal* | המתנה … נתן לו … יוביל | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [equivalent] | The father's gifts to the heir's brothers, the kingdom to the heir. *tidintu* ~ `מַתָּנָה` [cognate]. Our proposal. |
| EST 273 | *tidintu … abūšunu iddinaššanūni* | המתנה אשר … אביהם נתן להם | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [cognate] | *tidintu* ~ `מַתָּנָה`; see 89–90. |
| EST 370 | *mazzāsu ša … abūšunu ukallimūšunūni* | המעמד אשר … אביהם הראה להם | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת` (דברי הימים ב כא:ג) | [equivalent] | The father's provision for the heir's brothers (cf. 89–91). Our proposal. |
| LH §165, 1949' | *eqlam kirâm u bītam* | שדה, גן ובית | `וַיִּתֵּן לָהֶם אֲבִיהֶם מַתָּנוֹת רַבּוֹת לְכֶסֶף וּלְזָהָב וּלְמִגְדָּנוֹת עִם עָרֵי מְצֻרוֹת בִּיהוּדָה` (דברי הימים ב כא:ג) | [equivalent] | האב נותן לבנים מתנות בחייו, לצד הנחלה. הצעה שלנו |
| LH epil. 3605'–3608' | *murṣam … ša lā ipaššeḫu* | מחלה … אשר לא יירגע | `נְגָפוֹ יְהוָה בְּמֵעָיו לָחֳלִי לְאֵין מַרְפֵּא` (דברי הימים ב כא:יח) | [equivalent] | A king's incurable disease. |
| MALB §10, o iv 29–30 | *būrta ihri dunna epuš* | `בְּאֵר חפר, מגדל עשה` | `וַיִּבֶן מִגְדָּלִים בַּמִּדְבָּר וַיַּחְצֹב בֹּרוֹת רַבִּים` (דברי הימים ב כו:י) | [equivalent] | The pair "fortified farmstead / tower + cistern" (הצעה שלנו). |
| EST 420 | *ina pān ilāni u šarri erabkunu ay iqbi* | לפני האלים והמלך את בואכם אל יאמר | `מְצֹרָע כִּי נִגְזַר מִבֵּית יְהוָה` (דברי הימים ב כו:כא) | [equivalent] | The leper king excluded from the temple, his son over the palace: "before the gods and the king". Our proposal. |

### No specific verse

| Text, line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| LH §224, 2675' | *bēl alpim u lū imērim* | `בעל השור או החמור` | `בַּעַל הַשּׁוֹר` (F17) | [cognate] |  |
| LH §228, 2709' | *ušaklilšum* | `וְשִׁכְלֵל לו,` | `שִׁכְלֵל` (הנחיות §6.7; T1: `המשכלל`) | [cognate] |  |
| LH §177, 2226' | *bītam inaṣṣarū* | את הבית ינצרו, | `נצר` (רנדרינג הקורפוס) | [cognate] |  |
| LH §190, 2438' | *lā imtanūšu* | לא מנאו, | `מנה` (T11) | [cognate] |  |
| LH §193, 2484' | *inassaḫū* | ינסחו. | `נקר` (= *ḫuppudu*, F30) | [equivalent] | לא *nasāḫu* |
| HL HL1 §3, 11 | *keššar=šiš [wašt]ai* | ידו [חוטאת] – |  | [absent] | התורה נותנת להורג בשגגה עיר מקלט (`וְשַׂמְתִּי לְךָ מָקוֹם אֲשֶׁר יָנוּס שָׁמָּה`, שמות כא:יג); החוק החתי – תשלום מופחת. |
| HL HL1 §5, 21 | *[takk]u {LÚ}DAM.GÀR {URU}ḪA-AT-TI kuiški kuenzi* | [אם] מישהו יהרוג תַּגָּר חַתִּי, |  | [absent] | לתורה אין דין מיוחד להריגת סוחר. `תַּגָּר` |
| HL HL1 §5, 21 | *[takk]u {LÚ}DAM.GÀR {URU}ḪA-AT-TI kuiški kuenzi* | [אם] מישהו יהרוג תַּגָּר חַתִּי, |  | [cognate loan] | דרך האכדית: הסומרוגרמה DAM.GÀR נקראת באכדית *tamkāru*, שממנה העברית המשנאית `תַּגָּר` (כמו בחוקי חמורבי, F41). |
| HL HL1 §6, 29 | *takku LÚ.U₁₉.LU-aš LÚ-aš našma MUNUS-za takiya URU-ri* | אם אדם – איש או אשה – ימות בעיר אחרת, |  | [equivalent] | העיקרון המשותף: המקום שבו נמצא המת אחראי לו. |
| HL HL1 §7, 35 | *karū 1 MA.NA KÙ.BABBAR pešker* | לפנים היו נותנים מנה כסף, |  | [absent] | התורה אינה מצטטת "חוק קודם" ותיקונו. |
| HL HL1 §9, 45 | *A-NA É.GAL-LIM 3 GÍN KÙ.BABBAR dašker* | להיכל שלושה שקלים כסף היו לוקחים, |  | [absent] | בתורה אין לשלטון חלק בפיצוי על חבלה; כל הכסף לנפגע (`רַק שִׁבְתּוֹ יִתֵּן וְרַפֹּא יְרַפֵּא`, שמות כא:יט). |
| HL HL1 §13, 63 | *takku LÚ.U₁₉.LU-an EL-LAM KIR₁₄=šet kuiški wāki* | אם מישהו ינשוך את אפו של אדם בן חורין, |  | [absent] | התורה אינה מזכירה את האף ברשימת החבלות (שמות כא:כד–כה). אבל בחוקי אשנונה §42 – `אם איש את אף איש נשך וקצץ` – ושם גם התעריף: מנה כסף; אותו פועל ("נשך") ואותו מחיר באשנונה ובחַתִּי. |
| HL HL1 §17, 74 | *[takk]u MUNUS-aš EL-LI šarḫuwanduš=šuš kuiški p[e]š[šiy]azi* | [אם] מישהו [ישליך] את בטנה של אשה בת חורין, |  | [equivalent] | "יצאו ילדיה" – "בטנה הושלכה": שני החוקים מתארים את היציאה של העובר, לא את מותו. |
| HL HL1 §18, 80 | *takku GÉME-aš šarḫuwand[u]š=šuš kuiški peš[šiy]azi* | אם מישהו [ישליך] את בטנה של אָמָה, |  | [absent] | התורה אינה מבחינה במעמד האשה ההרה (שמות כא:כב). |
| HL HL1 §21, 101 | *šarnikzil [NU.GÁL]* | פיצוי [אין]. |  | [absent] | אין לבעל הלוּוִי פיצוי – בניגוד לבעל החתי ב־§20. |
| HL HL1 §28, 146 | *takku DUMU.MUNUS LÚ-ni taranza* | אם בת אמורה לאיש, |  | [divergence] | אין כאן שכיבה, ואין "מָהֹר יִמְהָרֶנָּה": השאלה היא רק מי מפצה את מי. |
| HL HL1 §30, 164 | *n=aš=kan šamenzi* | והוא יפסיד (אותו). |  | [equivalent] | חוקי חמורבי §159: החתן "שהביט באשה אחרת" – מפסיד את אשר הובל. |
| HL HL1 §31, 171 | *nu=z(a) É-er takšan šarranzi* | ואת הבית לשניים יחלקו, |  | [absent] | אין בתורה דין חלוקת רכוש בגירושין. |
| HL HL1 §34, 180 | *n=an=kan parā Ú-UL kuiški tarnai* | ואותה אף אחד לא ישלח החוצה. |  | [divergence] | שם השילוח הוא שחרור לחירות, וכאן איסור: איש לא "ישלח אותה החוצה" – כלומר מעמדה לא ישתנה (היא לא תשוחרר מן הבית שאליו נכנסה? או: לא תשועבד?). |
| HL HL1 §37, 187 | *takku MUNUS-an ku[išk]i pittenuzzi* | אם [מישהו] יבריח אשה, |  | [divergence] | שם התורה מגינה על הנרדף (עיר מקלט), וכאן החוק מתיר להרוג אותו ואת מלוויו. |
| HL HL1 §39, 198 | *takku [LÚ.U₁₉.LU-aš dam]ēl A.ŠÀ{ḪI.A} ḫarzi* | אם [אדם] יחזיק בשדות של [אחר], |  | [absent] | בתורה אין חובת שירות למלך הקשורה בקרקע; |
| HL HL1 §43, 237 | *takku LÚ-aš GU₄-ŠU ÍD-an zinuškezzi* | אם איש מעביר את שורו בנהר, |  | [absent] | אין בתורה דין דומה. |
| HL HL1 §43, 237 | *takku LÚ-aš GU₄-ŠU ÍD-an zinuškezzi* | אם איש מעביר את שורו בנהר, |  | [equivalent] | `שׁוֹר אוֹ שֶׂה` – השור כרכוש העיקרי של איש. |
| HL HL1 §44b, 246 | *takku antuḫša[n k]uiški parkunuzzi* | אם [מישהו] יטהר אדם, |  | [divergence] | בתורה מוות, בחוק החתי – דין המלך (שעשוי גם הוא להיות מוות). |
| HL HL1 §44b, 249 | *alwanzatar* | כשפים (הם), |  | [equivalent] | ). |
| HL HL1 §45, 251 | *[takku] Ú-NU-TE{MEŠ} [ku]iški wemiyazzi* | [אם מישהו] ימצא חפצים, |  | [divergence] | בתורה ההשבה היא מצוה כלפי "אחיך", בלי גמול; בחוק החתי הבעלים גומל למוצא – ומי שלא השיב נחשב לגנב. |
| HL HL1 §46, 256 | *[takku URU-r]i A.Š[À{ḪI.A}-an ša]ḫḫan=a iwaru kuiški ḫarzi* | [אם] מישהו יחזיק [בעיר בשדה ובשַׁחְחַן] כְּמַתָּן, |  | [divergence] | במקרא הנחלה אינה נושאת שירות למלך; כאן הירושה והחובה הולכות יחד. |
| HL HL1 §48, 276 | *[{LÚ}ḫippar]aš [lu]zzi [ka]rpiez[zi …]* | [החִפָּרָה את הלוּצִּי ירים] […], |  | [divergence] | בתורה האיסור מגן על הנחלה של המשפחה, כאן – על מה שהחִפָּרָה מחזיק מטעם המלך. |
| HL HL1 §51, 283 | *karū kuiš {URU}arinna {LÚ}UŠ.BAR kī[šat]* | לפנים – מי שבאֲרִינָּה לאורג [נעשה], |  | [equivalent] | עזרא ז:כד – פטור לבעלי מלאכה של בית האל. |
| HL HL1 §52, 289 | *ARAD É.NA₄ ARAD DUMU.LUGAL BE-EL ŠU-UP-PA-TI kuiēš* | עבד בית־האבן, עבד בן־המלך, בעל *שֻׁפַּתִּי* – אשר בין אנשי־הכלי שדה מחזיקים – |  | [absent] | בתורה אין "בית אבן" מלכותי; |
| HL HL1 §53, 291 | *takku LÚ˽{GIŠ}TUKUL Ù {LÚ}ḪA.LA-ŠU takšan ašanzi* | אם איש־הכלי ואיש־חלקו יחד יהיו, |  | [absent] | אין בתורה שותפות קרקע בין בעל חובה ושותפו. |
| HL HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, |  | [cognate] | (דרך האכדוגרמה) ÉRIN = *ṣābu* = `צָבָא` (§6.7). |
| HL HL1 §54, 302 | *karū ÉRIN{MEŠ} MA-AN-DA ÉRIN{MEŠ} ŠA-A-LA ÉRIN{MEŠ} {URU}tamalki* | לפנים – אנשי צבא המַנְדָּה, אנשי צבא השָׁלָה, אנשי צבא תַּמַלְקִי, אנשי צבא חַתְרָה, אנשי צבא זַלְפָּה, אנשי צבא תַּשְׁחִינִיָּה, אנשי צבא חֶמוּוָה, הקשתים, נגרי העץ, אנשי המרכבה ואנשי הקָרוּחָלִי שלהם – את הלוּצִּי לא הרימו, |  | [divergence] | כאן הקודקס זוכר קבוצות שהיו פטורות ממנה. |
| HL HL1 §55, 304 | *mān DUMU{MEŠ} {URU}ḪA-AT-TI LÚ{MEŠ} IL-KI uēr* | כאשר בני חַתִּי, אנשי־הַהֲלָךְ, באו, |  | [divergence] | כאן התשובה המלכותית היא "עשו כמו חבריכם", ובמקרא – הפילוג. |
| HL HL1 §58, 330 | *takku ANŠE.KUR.RA.MAḪ kuiški dayēzzi* | אם מישהו יגנוב סוס־הרבעה, |  | [absent] | התורה אינה מזכירה סוס בדיני גנבה (`מִשּׁוֹר עַד חֲמוֹר עַד שֶׂה`, שמות כב:ג); הסוס בחַתִּי – בהמת המרכבה, נכס צבאי. |
| HL HL1 §65, 371 | *takku MÁŠ.GAL enandan* | אם תיש מבוית, |  | [absent] | אין בתורה דין לחיות בר מבויתות. |
| HL HL1 §66, 376 | *takku GU₄.APIN.LÁ* | אם שור חרישה, |  | [divergence] | בתורה זו מצוה המוטלת על המוצא, כאן – הגנה על בעל הדיר מפני האשמת גנבה. |
| HL HL1 §70, 398 | *takku GU₄* | אם שור, |  | [divergence] | בחוק החתי הבעלים לוקח את בהמתו *ונוסף* על כך מקבל כפל. |
| HL HL1 §71, 406 | *takku GU₄-un ANŠE.KUR.RA ANŠE.GÌR.NUN.NA-an kuiški wemiyazi* | אם מישהו ימצא שור, סוס, פרד, |  | [divergence] | כאן יש מוסד ציבורי – שער המלך בעיר, הזקנים בכפר – שבו מכריזים על המציאה, והמוצא רשאי לעבוד בבהמה בינתיים. |
| HL HL1 §74, 421 | *takku SI GU₄ našma GÌR GU₄ kuiški* | אם מישהו ישבור קרן שור או רגל שור, |  | [divergence] | בחוק החתי לבעלים יש ברירה (424–427). |
| HL HL1 §77a, 440 | *takku {GU₄}ÁB armawandan kuiški walaḫzi* | אם מישהו ימחץ פרה הרה, |  | [absent] | בתורה אין דין לבהמה הרה שנמחצה. |
| HL HL1 §78, 449 | *[takku GU₄-un kuišk]i kušaniezzi* | [אם מישהו] ישכור [שור], |  | [absent] | אין בתורה דין של שימוש החורג מן השכירות. |
| HL HL1 §90, 496 | *takku UR.GI₇-aš Ì.ŠAḪ karāpi* | אם כלב יטרוף שומן־חזיר, |  | [absent] | אין בתורה דין זה; |
| HL HL1 §91, 501 | *[takku NI]M.LÀL{ḪI.A}-an kammari kuiški tāyezi* | [אם] מישהו יגנוב [דבורים] בענן, |  | [absent] | אין בתורה דין דבורים; |
| HL HL1 §93, 512 | *takku LÚ-an EL-LAM tapešni appan[zi]* | אם איש בן חורין יתפסו *בטַפֶּשְׁנִי*, |  | [divergence] | בתורה מותו בשעת המחתרת פטור; בחוק החתי הוא משלם קנס על הניסיון – גם לפני שנכנס. |
| HL HL1 §94, 518 | *takku LÚ-LUM EL-LUM É-er tāyezzi* | אם איש בן חורין יגנוב בית, |  | [divergence] | בתורה הגנב משלם כפל; כאן משיב את הגנוב, ועוד קנס קבוע וחיוב "לפי ערך" (522–525). |
| HL HL1 §95, 527 | *[t]ak[k]u ARAD-iš É-er tāyezzi* | [אם] עבד יגנוב בית, |  | [absent] | בתורה גנב שאין לו לשלם נמכר (`וְנִמְכַּר בִּגְנֵבָתוֹ`, שמות כב:ב), ואינו מושחת. |
| HL HL1 §96, 541 | *takku LÚ-aš ḫalkiyaš ÉSAG-an tāyezzi* | אם איש יגנוב אסם של תבואה, |  | [absent] | אין בתורה דין גנבת אסם. |
| HL HL2 §190, 190.1 | *ták-ku-uš-ša-an ak-kán-ti-it ti-an-zi LÚ-M[A? MUNUS-TUM Ú-UL ḫa-ra-a-tar]* | אם עם מת ייכנסו(?) – איש [(או) אשה – אין עברה]. | – | [absent] | אין בתורה דין על משכב עם מת |
| HL HL2 §200b, 200b.5 | *nu-uš-ši 1 SAG.DU pa-a-i* | ולו ראש אחד ייתן. | – | [absent] | אין בתורה דין של שכר לימוד מלאכה |

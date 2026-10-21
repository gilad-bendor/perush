# Project 1: the Descent of Ištar (Akkadian)

## Scope
The whole poem in eBL `L/1/8`: the Standard Babylonian chapter (148 entries: 1–138 with 11a, 12a, 18a, 23a, 97a, 103a, 118a–c, 137a) and the Neo-Assyrian chapter (AššNA1 = VAT 13833, 11 lines, labelled `NA1`–`NA11`) = **159 entries**. Translated complete.

## Base text and versions
- eBL, ed. A. Setälä, rev. Z. J. Földi, A. Hätinen, E. Jiménez, G. Rozzi; translation B. R. Foster (`../../sources/eBL/Descent-of-Ishtar-SB/`, `…-NA/`, git-ignored; `tools/ebl_fetch.py L 1 8 "Standard Babylonian" -` and `… "Neo-Assyrian" -`). The reconstruction rests on Lapinkivi 2010 (SAACT 6) with Meinhold 2012's collations.
- Manuscripts: NinNA1 (K 162, the main tablet), NinNA2 (K 7600), AššNA1a (VAT 9729, KAR 1), AššNA1b (VAT 11269); the Assur tablets are early NA or late MA (Frahm 2003). The NA chapter: the *nargallu*'s tablet from Assur.
- eBL's parallel-line links: Gilgameš VII 184–191 (= 4–11), VII 102–119 (≈ 103–108), "Nergal and Ereškigal" (L I.6), and an incantation BM 41291 (70–74); an "MA" chapter that eBL links to but does not publish (`L I.8 MA "-"` 1–11; probably the NA chapter's earlier numbering).

## Line numbering
eBL's (= Lapinkivi's). The NA chapter's own numbers with the prefix `NA`.

## Decisions (beyond `../renderings.md`)
1. Words that only some manuscripts have (eBL's round brackets in the normalization) are translated without any mark; the **פירוק** bullet names them. The Hebrew round brackets stay "added for sense" (guidelines §6.8).
2. **No "naked" word** (`../renderings.md` §6): line 60's *ṣubāt bālti* is rendered by eBL's lemma (*bāštu* = `הָדָר`, Gilgameš), Foster's "loincloth" (and the reading of *bāltu* as "private parts") are noted. The stripping is described as the text describes it: "removed, took away".
3. **The verbs of the gates** (`../renderings.md` §2, §4): *ušēribši* `הֱבִיאָהּ`, *umtaṣṣi* `הֵסִיר`, *ittabal* `נָטַל`; on the way out *ušēṣīši* `הוֹצִיאָהּ`, *uttērši* `הֵשִׁיב לָהּ`. The fourteen gate lines and the seven exits are letter-for-letter copies of one string each (checked by `netherworld_tools.py verify IS`).
4. **Lines copied from the Gilgameš corpus:** 5–11a (VII 185–192), 19 (VI 99), 106 and 108 (VII 117, 119); 4, 9, 20, 103, 103a, 107 changed exactly as much as the Akkadian (`../renderings.md` §3).
5. *ellânni* (136–137) and *līlûnim-ma* (138) = *elû* "come up" (eBL's lemma), against Foster's "Hurrah!": the end of the poem is the annual coming up of Dumuzi and the dead.
6. *ḫalziqqu* (98–99) = `נֹאד` "waterskin" (Foster), against eBL's lemma *ḫazīqatu* "headcloth" (the determinative KUŠ "leather" decides).
7. *terrašši* (118b, 126) by eBL's lemma *erēšu* = `תִּשְׁאַל אוֹתָהּ` ("you shall demand her"), with Foster's *târu* reading ("bring her back") in the note; 118b's *lā* is in the tablet (Foster's "if she does pay" drops it).
8. The precative *lubki* (34–36) as a cohortative statement (`אבכה`), not Foster's question.
9. *uzna šakānu* / *petû* = "set / open the ear" (`אֹזֶן`), as the Sumerian *ĝeštug₂ … gub*.
10. The prohibitive *lā* + present = `לא` + future (Gilgameš corpus), also in Belili's plea (135).

## Open decisions (for the user)
1. **60 *ṣubāt bālti*:** `שמלת ההדר` (eBL lemma *bāštu*) – or a word for the last undergarment (Foster "loincloth"), which would make Ištar enter naked. The text does not say "naked".
2. **65 *ušbi*:** `*ישבה*` (Ištar sits above her sister, as in the Sumerian 165–166) – or "(Ereškigal) rushed at her" (*šubêʾu*, Talon).
3. **81 *guddud appašu*:** `*גָּדוּד* אפו` (Gabbay: *gadādu* D "lacerate", the cognate of `התגודד`) – or eBL's "downcast". If Gabbay is right, the Akkadian has the very mourning rite that Deut 14:1 forbids, in its own root.
4. **118b / 126 *terrašši*:** "demand her" (*erēšu*) or "bring her back" (*târu*).
5. **136–137 *ellânni*:** "comes up to me" (eBL lemma) or Foster's "Hurrah!" (a cry of joy).
6. **24 *zikirki* = `זִכְרֵךְ`** (the cognate, "your name") against the Gilgameš corpus's *zikru* = `מַאֲמָר` (kept in 91).
7. **Cross-corpus:** *šukkallu* `וְזִיר` (here, creation, temple) vs `שַׂר` (Gilgameš VIII); *kabattu* `כָּבֵד` (here, wisdom) vs `רוּחַ` (Gilgameš); *uznu* "ear" `אֹזֶן` (here) vs `בִּינָה` (Gilgameš default); *sippu* `מְזוּזָה` (Gilgameš VI 15, here) vs `סַף` (Eshnunna).
8. **NA2 / NA4 {d}15:** Ištar (eBL lemma) or "the goddess" (Foster in NA2).

## Key findings
**For the Bible**
- **Job 7:9** `כֵּן יוֹרֵד שְׁאוֹל לֹא יַעֲלֶה` ↔ 85 *ištar ana erṣeti urid ul īlâ* "Ištar went down to the land – she did not come up": the same pair of verbs and the same negation, with *erṣetu* (`אֶרֶץ`, cognate) where Job has `שְׁאוֹל`. The poem's whole plot is the exception to Job's rule.
- **Job 16:22** `וְאֹרַח לֹא-אָשׁוּב אֶהֱלֹךְ` ↔ 6 *ḫarrānu ša alaktaša lā tayyārat* (= Gilg. VII 186) "the road whose going does not return"; **Job 15:32** `בְּלֹא-יוֹמוֹ` and **Eccl 7:17** `בְּלֹא עִתֶּךָ` ↔ 36 *ina lā ūmīšu* "not in his day", word for word.
- **Gen 3:14, 3:19** ↔ 8 (dust their food, clay their bread) and 33 (Ereškigal eats clay for bread): the queen of the dead shares the food of the dead.
- **Ezek 8:14** (the women weeping for Tammuz) ↔ 137 *bakkāʾū u bakkâtu* (the professional wailers, men and women, cognate *bakû* ~ `בכה`, in the intensive pattern of `מְבַכּוֹת`) – and the whole ending (127–138) is the ritual Ezekiel saw: washing, anointing, the red garment, the flute, the wailers, the dead coming up. **Zech 12:10–11** (`כְּמִסְפֵּד עַל הַיָּחִיד`, the mourning of Hadad-rimmon) and **Jer 6:26, Amos 8:10** (`אֵבֶל יָחִיד`) ↔ 135 Belili's *aḫī ēdu* "my only brother".
- **1 Sam 28:13** `אֱלֹהִים רָאִיתִי עֹלִים מִן הָאָרֶץ` ↔ 19 and 138 (*elû* of the dead): the poem opens with the raising of the dead as Ištar's threat ("they will eat the living", = Gilg. VI 99) and closes with it as a blessing (they come up to smell the incense) – what **Deut 18:11** (`וְדֹרֵשׁ אֶל הַמֵּתִים`) and **Deut 26:14** (`וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת`) forbid is the last line of a Mesopotamian cult poem.
- **Ps 49:8–9** (`אָח לֹא פָדֹה יִפְדֶּה אִישׁ … וְיֵקַר פִּדְיוֹן נַפְשָׁם`) and **Hos 13:14** ↔ 118b, 126 *ipṭiru* / *napṭiru* "ransom": the psalm says there is no ransom from death; the poem says there is – another person, Dumuzi.
- **2 Kgs 2:10** `הִקְשִׁיתָ לִשְׁאוֹל` ↔ 102 *erišta ša lā erēši* "a request that may not be requested" – the same phrase as the Sumerian *me al nu-di-da* (Inana 193): one Hebrew for both (`../renderings.md` §2).
- **Jer 31:18** `סָפַקְתִּי עַל יָרֵךְ`, **Ezek 21:17** ↔ 101 *tamḫaṣ pēnša* (and Inana 114).
- **Num 19:18–19, Lev 14:7** (sprinkling on one touched by death, on the leper) ↔ 114, 118 *mê balāṭi salāḫu*: here the water of life revives the dead goddess herself.
- **Isa 14:9–15**: the netherworld stirs at the coming of the great (41, 64, 113), the one who would sit above (65) is brought down – and the "morning star" of Isa 14:12 (`הֵילֵל בֶּן שָׁחַר`) is Ištar's own star.
- **Deut 14:1, Jer 16:6, 48:37** (`גְּדֻדֹת`) ↔ 81 *guddud appašu* (if *gadādu* D "lacerate", the cognate of `גדד`).
- **2 Kgs 17:30** (`וְאַנְשֵׁי כוּת עָשׂוּ אֶת נֵרְגַל`) ↔ 40 Kutha, the city of the netherworld god.
- **[divergence]** The stripping (42–62) ↔ Exod 33:5, Isa 3:18–24, Ezek 16:39, Hos 2:5: in the Bible the stripping of the woman is a punishment and ends in "naked"; here it is the law of the place, and the text never says "naked".
- **[absent]** Deut 23:18: the *assinnu* is not called `קָדֵשׁ` by the text, and the translation does not call him so.

**The ancient mind**
- The netherworld is a house with a gate, a gatekeeper, a vizier and a queen, and above all with **rules** (*parṣū*) that bind a goddess as they bind the dead; it is not a place of judgment for sins but of no return. Leaving it needs a substitute.
- **Ereškigal grieves**: the queen of the dead weeps for the bridegrooms, the brides and the infants who came to her before their day (34–36) – death has a mother.
- **Sexuality is a divine power**: when the goddess of love is below, the bull, the ass and the young man stop (77–80, 87–90).
- **Ea's cunning** works through a being outside the order of the sexes (the *assinnu*), and the poem gives that marginal cult figure both an honourable origin and a curse that fixes his place at the threshold, in the shadow of the wall (103–108; the same curse-forms as Enkidu's curse of Šamḫat).
- The poem ends as a **cult text**: the annual mourning for Dumuzi, when the dead visit the living.

## Sources consulted
eBL (rank 1, with Foster's translation, rank 3); the Gilgameš, wisdom, creation, law and flood corpora's renderings and Hebrew; the Sumerian base text of project 2. Not available: Lapinkivi 2010, Dalley 1989, Foster 2005, Sladek 1974, Talon 1988, Gabbay 2019 (cited through eBL's notes only).

## Progress
- 2026-10-21: drafted complete (159 entries) by the corpus coordinator (no sub-agent tool in this cloud session: the coordinator acted as the translator, one text at a time).
- Review pass (a) fidelity: every content word against the normalization; corrected 114 (imperative *liqâšši* `וקח`, not jussive), 132 (*malâ* fem. pl. `מלאות`), the manuscript-only words (round brackets dropped, decision 1), NA8 (`⟨ב⟩`).
- Review pass (b) consistency: the gate and exit formulas, 28 = 100, 63 = 86, 66–67 = 109–110, 77–80 = 87–90, 111–114 → 115–118, the Gilgameš copies (§3) – verified by `netherworld_tools.py verify IS`; 135 aligned to the prohibitive rule `לא`.
- Review pass (c) Hebrew: read aloud; `שִׂים` vocalized (93, 98); 6's restoration plain (`ש[בה]`) as the Gilgameš copy.
- `netherworld_tools.py verify IS --strict`: OK; `check_bible_quotes.py`: 0 problems; `translation.rtl.md` generated (19 footnotes).

## Parallels index
Generated from the annotated file's **הקבלה** bullets by `../build_parallels_index.py` into `../parallels-index.md` (section "The Descent of Ištar"; by biblical book).

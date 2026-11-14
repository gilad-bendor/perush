# The Hittite Gilgameš (CTH 341.III)

Project of `../` (the Hurro-Hittite and Old Anatolian myths), created 2026-11-14 by Round 8 run 5. Tool:
`tools/hittite_tools.py` key GI (read `../corpus.md`, `../renderings.md` M4, `../translator-brief--myths.md`,
`../translator-brief--round8-run5.md`). Pointed to from `../../אפוס-גילגמש/corpus.md` (project 4 there is this one).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| GI | The Hittite Gilgameš: a Hittite retelling (not a translation) of the epic, c. 1400–1300 BCE, in three tablets and fragments (KBo 10.47c, KBo 6.1+ …) | HPM CTH 341.III.1–19 (Rieken et al., CC BY-SA 4.0): `sources/HPM/MYTH--CTH-341.III.<n>/` | 611 |

Labels `<edition>:<clause>` (`GI 7:20` = CTH 341.III.7 kolon 20). The Hurrian and Akkadian Boğazköy fragments (CTH 341.I–II)
are out of scope (the plan: a separate question for the Mesopotamian survey). Rank 3: HPM's German (`tr GI`).

## Open decisions
(none yet)

## Proposals

### Round 8 run 5, translator 3, GI part 1
Drafted GI 1:1–1:221 and 2:1–2:35 (CTH 341.III.1–2, 256 clauses) in `annotated-GI.rtl.md`, plus
`translation--intro-GI.rtl.md` (intro to the whole text; its last sentence names the later episodes from the brief only).
`verify GI`: 0 problems (the undrafted 3:1–19:7 as notes); `check_bible_quotes.py`: 0 problems on both files. HPM's German
read after each section; every correction recorded in **תרגומים** (1:21, 1:122, 1:189, 1:184–187, 2:2, 2:5, 2:7).

**Fixed strings (copy byte for byte)**
- The anger formula *nu=šši kartimmiyaz kišat* (1:78, 1:157, 1:169): `וזַעַם בא עליו` (with `[ ]` per copy: `[ו]זַ[עַם] בא עליו.`, `[ו]זַעַם בא עליו:`, `[וזַעַם בא] עליו,`).
- The Sun-god of heaven {d}UTU ŠAMÊ: `אֵל הַשֶּׁמֶשׁ של השמים` (as AS 96, UL 2:13).
- Speech formulas as F30/F31: `X החל להשיב אל Y:` (1:53, 1:91, 1:95, 1:99); present *EGIR-pa memiškezzi* `X משיב/משיבה אל Y:`; *memiškezzi* `אומר`.
- The journey: DANNA `בֵּרוּ` (*bēru*, the Gilgameš corpus); the Euphrates {ÍD}Mala `נהר מָלָה`.
- The threat/non-fulfilment pair (1:174–181): `ואתכם מעלה אל השמים אשא` / `אך מעלה [אל השמים] לא הגיע אותם`; `ואתכם [מטה] אל האדמה האפלה אַגִּיעַ!` / `[ו]אל האדמה האפלה לא הגיע אותם.` (*arnu-* `הגיע`, the Laws' precedent; F37).
- 1:203–204: `ולא עולה בידו לצאת קדימה, / ולא עולה בידו לצעוד לאחור.`
- The eight winds (1:200), Akkadograms with the Gilgameš corpus's Hebrew of SB V 160–162: IMILTĀNU `רוח צפון`, ZIQZIQQU `נשיבה־סוערת`, ŠURUPPÛ `קרה`, AŠAMŠŪTU `עלעול`, ANḪULLU (= *imḫullu*) `סער`; IM.GAL `הרוח הגדולה`.
- Ḫuwawa's surrender (1:207–209): `"הַרְפֵּה ממני, גִּלְגָּמֶשׁ! / ואתה – היה לי אדון, / ואני – אהיה לך עבד!`

**New renderings (lemma → Hebrew, lines)**
- GURUŠ "young man" `עלם` (pl. `עלמים`; the Gilgameš corpus's *eṭlu*): 1:13, 1:26, 1:38, 1:45, 1:74.
- {LÚ}ṢĀʾIDU `צייד` [cognate through the Akkadogram, Gen 10:9]: 1:53. {MUNUS}KAR.KID (= *ḫarimtu*) `זונה`: 1:54, 1:57.
- DINGIR.MAḪ (in GI, for Aruru) `אֵלַת־הָאֵם` (M1): 1:14, 1:16, 1:28. LÍL / *gimra-* `בָּר` (the Hittite table; SB *ṣēru* `שדה` in the notes): 1:30, 1:31, 1:47. MÁŠ.ANŠE (= *būlu*) `בהמות`: 1:32–1:38.
- :akkušša "pits" `בורות`, :aggati- "traps" `מלכודות` (the SB Hebrew), *šaḫ-* "fill up" `מילא`, SAḪAR "earth" `עפר` (1:40, 1:49) / "dust" `אבק` (1:186: sense split).
- *weḫ-* "roam" `סובב` (IN precedent): 1:10, 1:93. *ara-* "friend" `רֵעַ` (the Gilgameš *ibru*; the Laws have `חבר`): 1:89 – a split for the lead.
- *šummittant-* "axe" `קרדום`, ḪAṢṢINNU `גרזן` (*ḫaṣṣinnu*'s Hebrew): 1:151, 1:154. *karš-* "cut (a tree)" `כרת` (as SI 2:76 and SB *nakāsu* `כרת`): 1:155, 1:160, 1:211, 2:5, 2:9.
- *arḫa dali-* "let go, give up" `הרפה`: 1:205, 1:207, 1:217. *arkuwar* "plea" `טענה` (not `תפילה`): 1:198. *wiya-* "cry out" `צעק`: 1:189. *išḫaḫru-* `דמעות`; PA₅ `פלג` (1:191).
- *ḫalentu-* "palace" `ארמון` (`היכל` is gated to É.GAL; as SR 13.1.2): 1:212, 2:20. *kattaluzzi-* `מפתן`; ZA.GÌN `ספיר`; {NA4}*kirinnazi-* transliterated `קִירִינַּזִי` (2:22, 2:27).
- NÍG.LÁM `בגדי פאר` (1:68, 2:14); *parku-* (verb) `טיהר` (2:15, gate licensed); *dušk-* `שמח` (2:12, as UL 2:24); ARAD `עבד`, EN `אדון` (1:208–209); LÚMUTU `איש` (2:30: `בעל` is §H3).
- *taršama-* (Luwian) `*קדקד*` (1:175, 1:179); *galpariwala-*, *pulpuli-*, *mītar* transliterated with `*…*`.
- {LÚ}NAR `זמרים`, *ḫazzik-* `ניגן` (1:132); *urki-* `עקבות` (1:133); *taḫara-* `רעש` (1:156); *tetana-* `שערות?` (1:183); ZŪTU `זיעה` (1:184).

**Pre-set rows changed / applied, and why**
- M4 *šamnai-* `עיצב` and ALAM `תואר` applied (1:2, 1:3, 1:6, 1:7, 1:21, 1:22, 1:30). **Split for the lead:** HE 23:2, UL 3.1:179, UL 3.1:207 render *šamnai-* `הציב` (lexmap); GI follows M4.
- M2 *iya-* mid. `הִתְקַדֵּם` kept even for the animals going to graze and drink (1:34–1:39, 1:45, 1:170), though "הולך" would be the natural word.
- M2 *išḫuwai-* `זרה` kept for throwing traps into the river (1:42, 1:52); the IN precedent is `ערם` (lexmap): a split already in the corpus.
- M3 *tarna-* `השאיר` (the EL 2.2:22 split) used for laying pits and traps (1:38, 1:41, 1:48, 1:50).
- M2 *epp-* `תפס` kept against the SB's *ṣabātu* `אחז`, also in the calqued idiom KASKAL-an *epp-* = *ḫarrāna ṣabātu* `תפסתי את הדרך` (1:196; SB `אחז דרך`): if the lead prefers the Akkadian idiom's Hebrew here, change 1:196 only.
- *šakuwai-* `צופה` (KU, UL, AP precedent) kept against SB V 2's `מסתכלים ומסתכלים` (*palāsu*): 1:118, 1:119.
- *kiš-* "become": `נעשה` elsewhere; here by idiom `בא` (anger "came upon him", 1:78, 1:157, 1:169) and `עולה (בידו)` (1:203–204: "it is possible") – sense splits for the lead.
- Gilgameš is written vocalized `גִּלְגָּמֶשׁ` in every line (see the name bug below).

**Gate and name bugs (escaped and reported)**
- **Name check, Gilgameš:** the §H2 row's Hebrew `גִּלְגָּמֶשׁ` strips to the defective `גלגמש`, so the corpus's plain form `גילגמש` (guidelines §6.5; the Gilgameš corpus) fails `verify`. Worked around by vocalizing every occurrence; the row should accept `גילגמש`.
- **Gate `גבור`** (§H4) catches the infinitive `לגבור` "to prevail" (*tarḫ-*, M3 `גבר על`): 1:13 `[היתר שער: לגבור …]`. The regex should exclude `לגבור` / `לגבר` (or license by *tarḫ-*).
- **Gate `שכב`**: 1:55 *šešdu* has no lemma in the tool's data for this line, so the *šeš-* licence is not seen: `[היתר שער: תשכב …]`.
- **Gate `ארז`**: 1:118 `{G]}IŠERIN` – the half-bracketed sign is not read as GIŠ.ERIN: `[היתר שער: ובארז …]` (the known bracket gap).

**Cruxes**
- 1:2: the broken name after UR.SAG (`{d}k[u?-`): Kumarbi? (HPM: "Der Held K[u- …]").
- 1:28 *mītar*: HPM "Gedeihen?" (the mother goddess takes away prosperity) or the material of Enkidu's making (cf. SB I 99–100) – transliterated.
- 1:42: HPM's "(scil. Gilgameš)" as the subject who throws the traps into the river is surely Enkidu (1:39–40, 1:51–52).
- 1:92–93: 2nd or 3rd person (HPM 3rd); 1:178/181: *=šmaš* "you" (HPM, ms K "I") or "them" (ours).
- 1:185–186: who raises the dust – the horses (HPM) or the dust itself (ours).
- 2:19–27: Gilgameš speaks first and promises Ištar a palace with a lapis threshold, then Ištar answers with the same words (2:27): the reverse of SB VI 6–21, where Ištar opens and promises.

**Parallels for the index**
- Gen 1:26–27, 2:7 [divergence]: the gods fashion Gilgameš's figure (*šamnai-*, ALAM; 1:2–1:6) and the mother goddess fashions Enkidu in the steppe (1:30); SB I 49 `צלם` [cognate] in the Akkadian.
- 1 Sam 17:4 [equivalent]: the giant measured in cubits (1:7, eleven cubits = SB I 52).
- Gen 10:10 [cognate]: Uruk = `אֶרֶךְ` (1:11). Gen 2:14 [equivalent]: Mala = the Euphrates (1:112).
- Gen 10:9 [cognate through the Akkadogram]: ṢĀʾIDU `צייד` (1:53). Gen 38:15 [equivalent]: KAR.KID `זונה` (1:54).
- Gen 3:21 [divergence]: Enkidu's fine garments, the passage into the human world (1:68).
- Gen 15:1 [equivalent]: the god's "do not fear" (1:163; = SB V 97 `אַל תפחד`).
- Gen 44:9 [equivalent]: the surrender formula "I will be your servant" (1:209).
- Isa 55:12 [equivalent]: the mountains / forest that make music (1:132; = SB V 24–26).
- Lam 3:48 [equivalent]: tears like canals (1:191).
- Where the Hittite adapter kept, changed or dropped the Babylonian epic (all in the notes): kept – the gods' gifts, 11 cubits, the young men of Uruk, Enkidu made in the steppe and living with the animals, the hunter's pits and traps, "bring a harlot", the ius primae noctis (OB II 156–161), the wrestling, 20/30 leagues, the singing forest, Šamaš's voice from heaven, the weeping before the Sun, the great winds, Ḫuwawa's offer of service and Enkidu's "do not listen", the cedar for Enlil's temple door (SB V 316–318), the cleansing and Ištar's "come, be my husband"; changed – Gilgameš roams all lands before reaching Uruk, the mother goddess (not Anu) is angered, the hunter is named Šangašu and goes straight to Gilgameš (his father dropped), 9 (not 4) spans, the 16th day (not the 3rd), eight (not thirteen) winds, Gilgameš (not Ḫuwawa) weeps and cries out, horses at the battle, Ištar answered first by Gilgameš; dropped – the prologue and the walls of Uruk, the complaints of Uruk's women, the dreams on the road, Ninsun.

### Round 8 run 5, translator 3, GI part 2
Drafted GI 3:1–19:7 (CTH 341.III.3–19, 355 clauses; the placeholder removed): all 611 clauses of GI are now in
`annotated-GI.rtl.md`. `verify GI --strict`: 0 problems (2 "identical source, different Hebrew" notices, both on broken
lines of one or two letters: GI 11:5 ~ UL 2:6, GI 6:33 ~ UL 2:168 / LA 1:159 – no real repetition). `check_bible_quotes.py`:
0 on both files (one remembered verse, Qoh 9:7, caught and corrected). The last sentence of `translation--intro-GI.rtl.md`
now summarizes tablet 3 and the fragments as they are. HPM's German read after each section; corrections in **תרגומים**
(3:1, 3:5, 3:8–3:10, 3:20, 3:30, 3:88–3:90, 3:102–3:105, 3:111, 3:113, 6:39, 8:5, 8:8–10, 9:8, 10:3, 18:1).

**Fixed strings**
- The council's sentence (3:14–3:15): `'אנקידו – ימות! / וגִּלְגָּמֶשׁ – אַל ימות!'` (*lē aki* = `אַל` + future).
- Enkidu's lament (3:23–3:28): `"אחי, / אחי היקר! / … / ובין הָאִטִּים אשב, / ואת מפתן הָאִ[טִּים אחצה], / ואת אחי היקר בעיניי לא [אראה] עוד."`
- Tears like canals, now three times: 1:191 `ודמעותיו זורמות [כפלגים].`, 3:22 `ודמעותיו זורמות הלאה [כ]פלגים.` (+ *parā*), 3:33 (past) `ו[דמעותיו] כ[פלגים] זר[מו] הלאה.`
- *UMMA* PN `כֹּה X:` (3:91, 3:93); *lukk-* "it dawned" `האיר` (3:2, 3:82).
- The axe command / execution (3:106 → 3:109): `תפוס את הגרזן בידך,` → `תפ[ס] את הגרזן בידו,`; poles `מוטות של … אמות` (3:107, 3:110).
- Ullu's blessing: TI-*aš ēšdu* `יהי חי!`, TI-*za ēš* `היה חי`, TI-*tar* `חיים` (6:28–6:54).

**New renderings**
- ŠEŠ "brother" `אח` (Enkidu calls Gilgameš "my brother", where the Akkadian has *ibrī* `רֵעִי`); *nakki-* "dear" `יקר` (3:24, 3:28, 6:31).
- GIDIM (= *eṭemmu*) `אִט` (always vocalized, as the Gilgameš corpus): 3:26–3:27. *šarra-* "cross (a threshold)" `חצה` (M3's verb): 3:27.
- {GU4}ALÛ `השור` (the Hittite writes no "of heaven"; note at 3:8): 3:8, 3:17, 5:9, 8:11. *:niwalla-* "innocent" `החף` (`צדיק`, `נקי` avoided): 3:18.
- {LÚ}TAPPĪ (= *tappû*) `חבר` (the Gilgameš corpus): 3:20. *kartimmiya-* (verb) `זָעַם` (3:19), as *šāi-* (14:10).
- UR.MAḪ (= *nēšu*) `אריה`; {GU4}AM (= *rīmu*) `רְאֵם`: 3:54, 3:56, 3:78. MUNUS.KÚRUN.NA (= *sābītu*) `בעלת־המסבאה` (SB X 1): 3:85, 12:3. NAMSĪTU `גיגית`.
- ALAM `תואר` (M4) also for the statues: `שני תו[ארים]` of the lions (3:79), `שני תוארי האבן` = SB's *šūt abnī* `אנשי האבן` (3:92). `פסל` avoided (Sumerian *alan*'s).
- *aggannaš wetenaš* `מי המוות` (SB X 84, 86): 3:104. :*winala-* `מוטות`; *gipeššar* `אמה` (as AMMATU; a Hittite measure of about a cubit – a merger for the lead): 3:107, 3:110. {GIŠ}MÁ `ספינה`; *:pintant-* `*מוט־ההיגוי*`.
- *ḫurzai-* "curse" `קילל` (`ארר` is the Akkadian's): 3:71. *ḫink-* `הרכין (ראש)` (KU 12): 3:65. *laḫḫiyai-* `נודד` (not `נד`): 3:49. *zai-* "cross" `עבר`, *zainu-* `העביר` (3:51, 3:88–3:92).
- *ezzan* "chaff" `מוץ` (as *pû*): 3:44. *ḫaluka-* `בשורה`; *ḫuitar* `חיות`; *irman-* `חולי`; *kalutti-* `שורה`; *ambašši-* `עולה?` (the burnt offering; not reserved in Hittite lines – check); *zandanatar* transliterated `*הזַּנְדַּנָתַר*`; MÁŠ-*tar* `משפחה` (HPM "Familie"); GISKIM `אות`; *ḫali-* `משמרת`; *laknu-* `הפיל`; SÌR `שירה` (`שירת גִּלְגָּמֶשׁ`, as UL 1:252), NU.TIL `לא נשלם` (KU 286).
- Names (first occurrence vocalized): Itiḫa- `אִיתִיחַ[…]` (3:38), Naḫmizuli `נַחְמִיזוּלִי` (5:4, 9:23), Šušḫaruwa `שׁוּשְׁחַרוּוָה` (6:40), Itla `אִיתְלָה`, Impaluri `אִמְפַּלּוּרִי` (9:15), Ḫebat `חֶבַּ[ת?]` (19:1).

**Pre-set rows / decisions applied**
- The coordinator's decisions applied: *šamnai-* `עיצב`, 1:196 `תפס` unchanged. Gilgameš left vocalized in every line (harmless; the name check is fixed).
- *šakuwai-*, *iya-* mid., *epp-* as in part 1. *ḫark-* "perish" `אבד` (M3): 9:8 `האבוד`.

**Gate / name bugs**
- None new. (The part 1 escapes at 1:13 `לגבור` and 1:55 `תשכב` are still in place; 1:13 may now lose its escape.)

**Cruxes**
- 3:1: HPM's 1st plural "while we slept" – Enkidu narrating?
- 3:8–3:10: *kuit* "why?" (HPM; ours now) or "because"; who "cleared the mountains of cedar" (Ḫuwawa or Gilgameš).
- 3:67–3:71: Gilgameš's greeting to the Sea and the cursing (of Gilgameš? of the fate goddesses?) – no Babylonian parallel.
- 3:88–3:90: who says "you cross it" to whom (Šiduri to Ur-šanabi?).
- 3:105: *GIM-an iyaši* "if you do (it)" (HPM) or "how will you do?" (SB X 86).
- 6:22 KUN₅ "doors? ladders?"; 6:45, 6:55 *zandanatar*; 6:47 who raises the hand to Ullu.
- 14:5–14:6: the speaker who knows "the day on which they bore me" from an omen (Gilgameš? Ullu?).

**Parallels for the index**
- Gen 2:17 [equivalent]: the god's death sentence (3:14–3:15).
- Gen 18:23 [equivalent]: a god protests the death of the innocent (3:18).
- Deut 18:11 [equivalent]: GIDIM / *eṭemmu* `אִט` (3:26).
- Qoh 9:7 [equivalent]: "eat, drink" offered to the hero (6:18).
- To the Babylonian epic (in the notes): the council of the gods fills SB VII 2–26; kept – Šiduri "who sits" (SB X 1), the Stone Ones as stone figures, the waters of death, the axe and the poles (SB X 159–167), "a month and a half" read as one month and fifteen days (SB X 171), the lions and the prayer to the Moon (SB IX 8–18), the Sun crossing the sea (SB X 81–82); changed – "brother" for "friend", the Moon orders lion statues for his temple, 40 or 50 ells for SB's five rods (and no number of poles), Gilgameš bows to the Sea, Ullu (Hurrian) for Ūta-napišti, the blessings of "life" for Ullu and Gilgameš (vs. the plant of SB XI); dropped (or lost) – the Bull of Heaven episode itself (only mentioned), Enkidu's curse of the door and of Šamḫat, the funeral, the scorpion people, the flood story.

## Progress
- 2026-11-14: base secured (19 HPM editions), key GI added, renderings M4 fixed, brief written (the coordinator).
- 2026-11-14: GI 1:1–1:221 and 2:1–2:35 drafted (256 clauses; CTH 341.III.1–2), `translation--intro-GI.rtl.md` written; verify 0 problems, check_bible_quotes 0 (Round 8 run 5, translator 3, part 1 of 2). Next: 3:1–19:7.
- 2026-11-14: GI 3:1–19:7 drafted (355 clauses; CTH 341.III.3–19): all 611 clauses drafted; intro updated; verify --strict 0 problems, check_bible_quotes 0 (Round 8 run 5, translator 3, part 2 of 2). Next: review.
- 2026-11-14: independent review (Round 8 run 5, reviewer C) – 192 lines changed (1:2–1:220, 2:1–2:31, 3:1–3:145, 4:7–19:3): ≈150 brackets to the partial-restoration rule (no bracket splitting a Hebrew word: a restored ending unbracketed, a restored stem bracketed whole; also restored verbs that were left unbracketed, 1:158, 1:179, 1:215, 2:19, 3:3, 3:22, 3:71, 5:5, and preserved ones that were bracketed, 1:45, 1:169, 2:31); meaning – 1:2 the subject is "the hero K[u…]" (nom.), not Gilgameš; 1:17 *kartimmiya-* `זָעֲמָה` (as 3:19); 1:18, 1:127 *parranda* `מעבר`; 1:21 *unin* `את ההוא`; 1:26 *tarḫ-* `גבר על` (as 1:13); 1:159 one relative; 1:211 *daššu-* of trees `החזקים` (`העזים` read "the goats"); 3:25 *parkiyanu-* `יקימו` (not `ירוממו`); 3:67 "be far"; 4:7 *ḫāši* `יולדת?` (HPM); 6:17 *uwanzi* "they come"; 6:19 *nik* `[רווה]` (not "do not withhold"); 6:22 KUN₅ `המדרגות?`; 6:25 dat. `ולאוּלּוּ`; 14:10 "my god" is the subject; 3:145 the verb added; consistency – *dā-* `לקח` (1:28), *peḫute-* `הוליך` (1:54, 1:73, 3:80, 3:81, as HL1 / IL / EL and SB I 160 `הוֹבֵל`), *arra-* `שטף` (1:185, 6:10), *šuppariya-* `יָשַׁנּוּ` (3:1), *tetana-* `שיער` (1:183), *kuitman … nāwi* `בעוד ש… עדיין לא` (1:165, 1:167), *šarā epp-* `הרים` (6:57 as 6:47); vocalized traps `נָבוֹאָה` (2:2, "prophecy"), `נִשָּׂא` (2:4), `בַּשּׁוּרָה` (6:25, beside `בשורה` "news"), `הֱיֵה`, `אֶל` beside `הָאֵלִים` (1:18); notes softened (1:2 the prologue claim and the misquoted SB I 1, 1:10, 2:19 the speaker is restored, 3:71 who curses), `מדבר` removed from two notes; the intro: `מקדשו` → `בית האל שלו`, Ullu as the voyage's goal and "all Babylonian gods renamed" softened, the restored "[be?] my [husband?]" marked. The translator's fixed strings changed by the brackets: 1:78 `[וזַעַם] בא עליו.`, 1:169 `[וזַעַם] בא [עליו],`, 3:22 `ודמעותיו [זורמות?] הלאה כפלגים.`, 3:33 `ו[דמעותיו] [כפלגים] זרמו הלאה.`, 3:109 `ותפס את הגרזן בידו,`. For the lead: GURUŠ `עלם` (GI) vs `בחור` (HE, AP), DANNA `בֵּרוּ` (GI) vs `פרסאות` (HLPT, HE), and the translator's own splits (*ara-*, *karš-*, *išḫuwai-*, *šamnai-*). `verify GI --strict` 0 problems; `check_bible_quotes.py` 0 on both files.

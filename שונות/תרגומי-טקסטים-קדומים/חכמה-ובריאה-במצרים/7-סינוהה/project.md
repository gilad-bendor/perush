# Project 7: the Story of Sinuhe (`סיפור סינוהה`)

## Scope
The whole story, KEY `SI`: R 1–23 (pBerlin P 10499, the opening, lost in B) + B 1–311 (pBerlin P 3022, Middle Kingdom,
c. 1800 BCE) = 334 lines. Labels `R1`–`R23`, `B1`–`B311`; R 24 = B 1. Witnesses: B's Amherst fragments (its lost start),
the Ashmolean ostracon AOS (Ramesside, nearly the whole text): `egypt_tools.py data SI … --wit` shows AOS.

The story: the courtier Sinuhe overhears the news of Amenemhat I's death, flees in panic across the Delta and the
Isthmus to the Asiatics; Ammunenshi, ruler of Upper Retjenu, takes him in, gives him his eldest daughter and the land of
Yaa; Sinuhe defeats the strong man of Retjenu in a duel; old, he longs for Egypt; Senwosret I's letter calls him home;
he returns, is received by the king and the royal children, and is given a house and a tomb.

## Base text
AED-TEI `QZCOZWR7YVAGNLPTMZIMHL6TYQ` (R) and `JIPPXMXOTNCQDIKJIQVYWMKOWU` (B), TLA 2018, CC BY-SA 4.0. Rank 3: the TLA's
German (`tr SI`), after drafting; Lichtheim, Parkinson, Simpson, Koch's edition only from memory.

## What to look for
- **Deut 8:7–9** (Yaa: "figs and grapes, more wine than water, honey, olives, every fruit, barley and emmer", B 81–84;
  the seven species gated, renderings §11.3–§11.4); **Ex 3:8** (`זָבַת חָלָב וּדְבָשׁ` never).
- **Gen 37–50**: an Egyptian among Asiatics (Joseph reversed); marriage to the ruler's daughter (Gen 41:45 [divergence]);
  burial in the homeland (Gen 47:29–30, 50:5, 24–25); the embalming, the coffin (Gen 50:2–3, 26).
- **1 Sam 17** (the duel with the strong man of Retjenu, B 109–147); **Gen 25:6, 29:1** (`קֶדֶם`, B 29 `Q~d~nw~m` Qedem; Byblos `Kp⟨ny⟩` B 29). (Line ranges here other than B 29–30, B 81–83 are from the literature: check them on the base.)
- The flight and its "god's plan" (B 41–43, 156–157: Gen 45:5–8 [divergence]); the hymn to Senwosret (B 47–73).

## SI R1–R23, B1–B311 (Round 5 run 6, translator 3)

### Scope
All 334 lines of the Story of Sinuhe: R1–R23 (pBerlin P 10499, the opening lost in B) and B1–B311 (pBerlin P 3022), in 16 scenes: the titles (R1–R4), the king's death (R5–R10), the Libyan campaign and the news (R11–R23), the panic (B1–B7), the flight to Qedem (B8–B29), Ammunenshi's court (B30–B46), the hymn to Senwosret (B47–B75), Yaa (B76–B92), Sinuhe as commander (B93–B108), the strong man of Retjenu (B109–B147), the exile's prayer (B148–B172), the king's letter (B173–B199), Sinuhe's reply (B200–B238), the return (B239–B255), the audience (B256–B281), the house and the tomb (B282–B311). Well preserved; restorations only in R10, B14–B15, B40–B41; a few scribal omissions supplied by the editor from AOS (B36, B43, B81, B238, B247, B269, B276), translated without marks and named in the פירוק.

### Sources consulted
AED-TEI (TLA 2018) for R and B, with AOS (`data SI --wit`); the TLA German (`tr SI`), read after each scene was drafted; Lichtheim (AEL I), Parkinson 1997, Simpson, Allen 2015 from memory only, never quoted. Every Bible verse printed with `check_bible_quotes.py --show` (four remembered verses were caught by the printout or the checker and corrected: 1 Kgs 18:42 ketiv, Isa 2:7, Isa 13:7, 1 Sam 20:1, Gen 50:19, Jer 1:5 ketiv/qere).

### Decisions
- **Names:** `סִינוּהֶה`, `סֶנוּסֶרֶת`, `אַמֶנֶמְחַת`, `סְחֶתֶפִּיבְּרַא` (Sḥtp-jb-Rꜥ), `חֶפֶּרְכָּארַא` (Ḫpr-kꜣ-Rꜥ), `עַמּוּנֶנְשִׁי`, `רֶצֶ׳נוּ` (Rṯnw-ḥr.t `רצנו העליונה`), `יָאָא`, `קֶדֶם` ★, `כֶּפֶּנִי`; `הָעַאמוּ` (ꜥꜣm); new: Stt.jw / Stj.w `הַסֶּטְיוּ`, Nmj.w-šꜥ `חוצי־החול` (keeps the pun of B294 "I gave the sand to those who cross it"), Tmḥ.w `הַתְּמֶחוּ`, Ṯḥnw `הַצְּ׳חֶנוּ`, Fnḫ.w `הַפֶנְחוּ`, Km.t `כֵּמֶת` (as renderings §3.2), Tꜣ-mrj `תָּא־מֶרִי`, Tꜣ-ztj `תָּא־סֶטִי`, Ꜣbw `אַבּוּ`, Jtj-tꜣ.wj `אִתְ־תָּאוִי`, Jnb.w-ḥqꜣ `חומות־השליט`, wꜣ.wt-Ḥrw `דרכי־חורוס`, Km-wr `כֵּם־וֶר`, Nh.t `השקמה`, Mntw `מוֹנְתוּ`, Sbk `סוֹבֶּךְ`, Spdw `סוֹפְּדוּ`, Tꜣy.t `תָּאיִת`.
- **ḫꜣs.t** = `ארץ־נכר` (as TB 11,5; pl. `ארצות־הנכר`); `מדבר` only where the sense is the desert (B89 the wild game, B292 "the desert").
- **The court:** ḥm=f `הוד מלכותו`; nswt-bjtj `מלך־הדרום־והצפון` (WE); smr `רע`, smr-wꜥ.tj `הרע היחיד` (1 Kgs 4:5 in the apparatus); jrj-pꜥ.t `נסיך` (TB), ḥꜣ.tj-ꜥ `נגיד`, šms.w `מלווה` (both = SS, §11.12.1); bꜣk-jm `העבד הזה`; ẖnw `הבירה`; ꜥḥ `ארמון`; stp-zꜣ `חדרי־המלך`; ꜥ-ẖnwtj `החדר הפנימי`; rwtj-wrtj `השער־הכפול הגדול`; šny.t `החצר`; wḏ.w `צו`.
- **Fear and the heart:** snḏ `יראה` / `ירא` (HC 11), ḥr.yt `אימה` (AM 8.10); jb `לב`, ḥꜣ.tj `לבב`; ꜣd `רפה`; thj `התעה` (Gen 20:13 [equivalent]); tnm therefore `האובד`.
- **Verbs of motion, one Hebrew each:** šmj `הלך`, wꜥr `ברח`, bhꜣ `נס`, zꜣꜣ `התגנב`, btꜣ `רץ`, nmj `חצה`, ḏꜣj `עבר`, swꜣ `חלף`, wḏj `פנה (לדרך)`, wḏꜣ `נסע` (TB 19,7: death as `נסיעה`, B36, B171, B282), fḫ `ניתק`, ḥzj `שב`, rwj `סר` / `הסיר`, zbj `הוביל` (WE 7,22; `העביר` for "spend eternity", B172), ḫdj `הפליג צפונה`, ḫntj `העפיל דרומה`, pḥ `השיג` (licensed), spr `הגיע`, sꜣḥ `קרב`, dmj `נגע`, ẖꜥm `ניגש`, stꜣ `גרר` (the god "drags" him away, B230, and the courtiers drag him in, B249–B264: kept), mnj `עגן` (the marriage B78 and "the day of mooring" B310, TB 19,7).
- **The war words:** nḫt `חזק` (also "the strong man"; Goliath's `גִּבּוֹר` left to the apparatus), pr.y `אלוף` (champion and fighting bull, both senses; `אִישׁ הַבֵּנַיִם` only in the apparatus), ḫpš `כתף` (as AM 25.10; ꜥ keeps `זרוע`), pḏ.t `קשת`, rʾ-pḏ.t `אנשי־הקשת`, pḏ.wt `עמי־הקשת`, pḏ.tj `ברברי`, ꜥḥꜣ.w `חצים`, šsr `שֶׁלַח`, ꜥb `קרן`, jkm `מגן`, mjnb `גרזן`, nsyw.t `כידונים`, jšnn `תרועה`, mṯꜣ `התגרה`.
- **ḥtp:** verb `נוח ל־` (the root of `נָח`, §4.4), noun `נחת` (B148–B165), m-ḥtp `בנחת` (WE 7,23).
- **Yaa:** `ארץ טובה היא` (§11.3); dꜣb `תאנים`, jꜣrr.t `ענבים`, jrp `יין`, bj.t `דבש`, jt `שעורה`, bd.t `כוסמת`; **bꜣq `עצי־השמן`, not `זית`** (the TLA: moringa; whether the Syrian bꜣq is the olive is open – see below).
- **Burial:** qrs `קבר` / `קבורה`, js `קבר` (noun), ẖꜣ.t / ḫꜣ.t `גוויה`, ꜥb.t-ẖꜣ.t `חבירת גוויה`, zmꜣ-tꜣ `חבירה־לארץ` (WE), wj `מעטפת` (`ארון` kept for wt), ḏrj `גל` (Gen 31:46, Josh 7:26), ḥm-kꜣ `משרתי־הכָּא`, twt "statue" `דמות` (renderings §4.4, licensed), šms-wḏꜣ `לוויית־הנסיעה`.
- **Loanwords used for their own words, tagged [cognate]:** ḫtm `חותם` / `חתום` (R1, R9, B287), jtrw `יאור` (B233), šsr `שֵׁשׁ` (B288, Gen 41:42), ḫsbḏ `ספיר` (B193).
- **Fixed strings copied:** B227–B228 = B41–B42 (`לא שמעתי גידוף, לא נשמע שמי | בפי הכרוז`); B255 = B39 (`לבבי – לא היה בבטני`); B229 = B156 (`אשר קבע את הבריחה הזאת`); B263 = B236 (`יעשה הוד מלכותך כחפצו`); B290 = B247 (`וכל משקה על מלאכתו`); B182 echoes B28–B29 (`ארץ־נכר … לארץ־נכר`); the dawn `האירה הארץ` (TB); B311 = SS 186–187 (the coordinator's note), with pḥ.wj `קץ` as in SS.
- **Splits by sense, recorded at the lines:** rḏj `נתן` / `שם` / `גרם` / `מסר`; nḥm `הציל` / `חטף`; mr.wt `אהבה` / `חפץ`; jḫ.t `רכוש` / `עניין` (`דבר` is md.t's); ꜥḥꜥ.w `נכסים` (B147) / `מעמד` (B283); ḫsf `הדף` / ḫsf.w `קבלת־פנים`; ḫpr `נהיה` / `יקרה` (B160); pḥ.wj `אחרית` / `קץ` (B311 formula); nfr `טוב` / `יפה`; ḥpt `חיבוק` (one word for "armful" B135 and "embrace" B143, kept); zb.t `הבלוי` (B291).
- **Rejected:** `גר` (reserved), `שוכני־החול`, `איש הבינים` in the line, `נמלך` (Akkadian malāku's cognate), `בער` (gate: mꜣẖ `יוקד`), `גזר` (gate: šꜣ `קבע`), `עור` for "blind"-gate reasons only by licence note (B198, see Problems), `שמחה` in B70 (gate misreading).

### Open decisions for the user
1. **Q~d~nw~m** (B29, B182, B219): `קֶדֶם` per renderings §11.2; the TLA identifies it with **Qatna** (Syria). If Qatna, the Gen 25:6 / 29:1 contact disappears.
2. **bꜣq** (B83): `עצי־השמן` (neutral) vs `זיתיה` (the olive, Deut 8:8 [equivalent]) vs "moringa" (TLA).
3. **ṯꜣi̯.kw** (B291): the TLA "dressed" (`הולבשתי`) vs the usual "I was shaved" (Gen 41:14 `וַיְגַלַּח` would then be [equivalent]).
4. **ḥwj tꜣ / ḥwj ḫꜣs.wt** (B164, B198, B257): kept literal `הכה (את) הארץ`; the TLA "Landesverrat" (betrayal), the usual reading "roam".
5. **jty.du** (R1): the TLA marks a dual ("the two sovereigns": a coregency?); translated singular `הריבון`, as the TLA's own German and AOS.

### Progress log
- Drafted scene by scene, each filled, verified and quote-checked on saving; the TLA German read after each draft (differences recorded in each **תרגומים**: B29 "from Byblos", B62–B63 "none draws his bow" – corrected my draft, B149–B155 the four contrasts, B259–B262).
- Pass (a) fidelity: brackets checked line by line against the base (R10, B14–B15, B40–B41, B74 the editor's gap); every ⟨ ⟩ supply named in the פירוק; B121 `ברברי`, R7 sḥrj `התרחק` (to match the imperative B272).
- Pass (b) consistency: lemma collisions removed (smwn `בלי ספק` vs nḥm.n `ודאי`; tnm / thj; nny `הנלאים` vs wrd `עייף`; ḫꜣwy `לילה` throughout; mn `קבוע` with smn `קבע`); the coordinator's SS renderings applied (zꜣṯ.w `רצפה` B200, B302; šms.w, ḥꜣ.tj-ꜥ, jqr already matched); B311 aligned with SS 186–187.
- Pass (c) Hebrew: the clean text read through; B82 `ועמהן`; no vav-consecutive (checked by script).
- `build SI`, `verify SI --strict`: no problems, 0 repeated-line differences; `check_bible_quotes.py` on the three files: 0 problems.

### The text on its own terms
- The body flees before the mind decides: the heart "split", arms "spread", trembling "fell" on the limbs (B2–B4); the heart "not in my belly" brought him to flight (B39); the same words recur at the audience (B255).
- Three explanations of the flight, never reconciled: "like a god's plan" (B43), "the counsel of your own heart" (the king, B182–B185), "the fear of you" (the princesses, B277); Sinuhe ends with "the arm of the god" (B262).
- The god of the exile is anonymous: "any god who decreed this flight" (B156); he "led astray" and "transplanted" Sinuhe (B148, B162) – and the god's grace and the king's are one (B165).
- Egypt as the only place to be buried: "what is greater than the union of my corpse with the land where I was born?" (B159); burial abroad is a ram's skin and a heap of stones (B197–B198), the Egyptian burial a full liturgy (B191–B196).
- The Egyptian's view of Asia: generous hosts (B27–B28, B77), yet "no bowman joins a Delta-man", "who can fix papyrus to the mountain?" (B121–B122); the crowd "lows" like cattle (B141).
- The exile becomes the ideal Egyptian abroad: water to the thirsty, the lost set on the road (B96–B97) – and a raider of wells (B102–B104).
- The king as the elements: the sun rises, the water is drunk, the breath is breathed at his wish (B233–B236).
- Old age as an attack that "descends" (B168–B170), answered literally by the return: "the years were made to pass from my body" (B290).
- Identity by dress and smell: wool and tree-oil returned to the desert, linen and first oil received (B291–B295); "a bowman born in Ta-meri", "son of the north wind" – a pun on his name (B276).
- Hathor frames the life: "son of the sycamore", the Lady of the Sycamore at the start of the flight (B8), the menat-song of the princesses at the end (B268–B279).

### Key parallels
- Ex 2:15–21 [equivalent]: a man flees the king of Egypt to the nomads and marries the chief's daughter (B78–B79); Gen 41:45 [divergence] reversed.
- Deut 8:7–9 [equivalent / divergence]: `אֶרֶץ טוֹבָה` = *tꜣ pw nfr* (B81); four species shared, wheat and pomegranate absent, emmer and cattle added; no "milk and honey" (B82).
- 1 Sam 17 [equivalent / divergence]: the champion (*pr.y* ~ `אִישׁ הַבֵּנַיִם`), javelins, one shot, fall on the face, death by his own weapon, the war cry (B109–B141).
- Gen 47:30, 50:5, 50:25 [divergence]: burial in the homeland – reversed (Egypt is the homeland) (B159); Gen 50:2–3, 26 [equivalent]: embalming and coffin promised (B191–B193).
- Gen 20:13 [equivalent]: "the god led me astray" (*thj* `הִתְעָה`) (B148); Gen 45:8 / 50:20 [divergence] (B43).
- Job 8:11 [equivalent]: papyrus cannot grow on the mountain (B122).
- Lam 4:20 [equivalent]: the king as the breath of life "among the nations" (B234–B236).
- Gen 41:42 [cognate]: `בִגְדֵי שֵׁשׁ` < *šs / šsr* (B288); Gen 45:9, 18 [equivalent]: the ruler's summons to Egypt (B188).
- 2 Kgs 25:29–30 [equivalent]: meals from the king's table as the sign of restored favour (B298).

### Lines shared with other texts
SS 186–187 (the colophon) copied in B311 except dwꜣ.w "in the morning" (not in B) and the scribe's name (SS 188–189). TB's strings used: the dawn `האירה הארץ`, `נסע` for wḏꜣ, `יום העגינה`; WE's `מלך־הדרום־והצפון`, `אמיתי־הקול`, `חבירה־לארץ`, `חלקת־האל`, `בנחת`, `שאל לשלום`. Inside SI see Decisions (fixed strings).

### Proposals for the shared renderings
1. Names: Stt.jw / Stj.w `הַסֶּטְיוּ`; Nmj.w-šꜥ `חוצי־החול`; Tmḥ.w `תְּמֶחוּ`; Ṯḥnw `צְ׳חֶנוּ`; Fnḫ.w `פֶנְחוּ`; Ꜣbw `אַבּוּ` (יֵב); Tꜣ-ztj `תָּא־סֶטִי`; Jtj-tꜣ.wj `אִתְ־תָּאוִי`; Sḥtp-jb-Rꜥ `סְחֶתֶפִּיבְּרַא`, Ḫpr-kꜣ-Rꜥ `חֶפֶּרְכָּארַא`; Mntw `מוֹנְתוּ`; Sbk `סוֹבֶּךְ`; Psḏ.t `התשיעייה`.
2. ḫꜣs.t sg. in the tales `ארץ־נכר` (TB, SI), `מדבר` by sense: amend §11.3's row.
3. wḏꜣ "go, die" `נסע` (TB, SI); mnj `עגן`; zbj `הוביל`; fḫ `ניתק`; pr.y `אלוף`; kꜣ "bull" `שור`; snḏ `יראה`; thj `התעה`; ḥtp "be gracious" `נוח ל־` / `נחת`.
4. bꜣq: replace §11.3's "`שֶׁמֶן־זַיִת`?" by `עצי־השמן` (or let the user decide, open decision 2), and drop bꜣq from the `זית` licence if adopted.
5. Collisions for the lead: jdr (SI) and TB's jꜣw.t both `עדר`; dmj `עיירה` (SI) vs TB `עיר` (= njw.t / nʾ.t); ḏrḏr (SI) = AM's ḏrjḏrj `נכרי`; SS's zb.t `משלוח` vs SI B291 `הבלוי` (homonyms?).

### Lessons for the guidelines
- A gate's prefix class reads a common word as prefix + reserved root: `שמחה` (joy) = ש + `מחה` (Gen 6:7) – write the prefix classes so that they do not split a frequent noun; and a gate written for one word (`עִוֵּר`) blocks its homograph (`עוֹר` "skin"): license by the homograph's source word too (here *jnm*).
- In a narrative with a letter and a reply that answer each other, draft the first text's key strings with the later copy in view (B39 / B255, B41 / B227, B156 / B229, B236 / B263): the copies then show the tale's design.

## Parallels index

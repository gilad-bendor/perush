# Project 5: the Tales of pWestcar (`סיפורי פפירוס וסטקר`)

## Scope
pWestcar (pBerlin P 3033) in full, KEY `WE`: 305 lines (`1,1-11` … `12,25`; the papyrus breaks off). The frame: King
Khufu sits with his sons, and each tells him a "wonder" (bjꜣ.yt) from the days of a former king: (1) the end of a tale of
Djoser's time (1,1–1,16; only the decree survives); (2) Webaoner's wax crocodile, in Nebka's time (1,17–4,17); (3)
Djadjaemankh and the parted lake, in Snefru's time (4,17–6,22); (4) Djedi, a living magician of 110 years who rejoins a
severed head (6,22–9,21); (5) the birth of the three first kings of the Fifth Dynasty to Ruddjedet, wife of a priest of
Re, with Isis, Nephthys, Meskhenet, Heqet and Khnum as midwives (9,21–12,25). Middle Egyptian; the papyrus of the
Hyksos period (c. 1600 BCE), the composition of the Middle Kingdom.

**2,21–4,7** (27 lines) are the fifth-day dossier's excerpt WC (`../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-WC.rtl.md`):
their `>` lines are copied from the dossier byte for byte and kept identical by `egypt_tools.py verify WE`; the dossier is
not edited from here (a revision → `[סטייה מן התיק: <reason>]` in the WE entry, for the lead).

## Base text
AED-TEI `J4EXGHLCL5DR7JHSPDWTVEKMDY` (TLA 2018), CC BY-SA 4.0. Rank 3: the TLA's German (`tr WE`), after drafting;
Lichtheim AEL I, Simpson, Parkinson 1997 only from memory. The mid-line `[…]` of 2,10, 2,21–2,25, 3,16, 3,18 … are
losses (the papyrus's damaged first pages).

## What to look for
- **Ex 7:8–12** (the lector priest = `חַרְטֹם` [cognate: loanword]; the wax crocodile becomes a live one; the dossier's
  finding) and **Ex 14:21–22** (Djadjaemankh puts one half of the lake's water on the other, 6,8–6,13: the words of
  Ex 14 – `בקע`, `חומה`, `יבשה`, `חרבה`, `נד` – are gated, renderings §11.4).
- **Gen 50:22, 26** (Djedi's 110 years, 7,1–7,2: the Egyptian ideal life span, Joseph's).
- **Gen 18, 21; Ex 1:15–21** (an annunciation of royal sons; the midwives; the names given by pun at birth).
- **1 Kgs 17:17–24; 2 Kgs 4** (life restored by a holy man); a king who wants to test the magic on a prisoner, and the
  magician's refusal "not on a human being, the noble flock (of the god)" (8,16–8,17: Gen 9:6 [divergence]?).

## WE 1,1-11–4,17 (part 1; Round 5 run 6, translator 1)

### Scope
Labels `1,1-11`–`4,17` (85 entries): the lost end of the Djoser tale (only the royal decree 1,12–1,17 survives), Khafre's
tale of Webaoner's wife and the commoner (1,17–2,20), the wax crocodile (2,21–4,7 = the dossier's WC, copied), the
wife's burning and the second decree (4,8–4,17). Heavily damaged to 3,25 (many restorations). `4,18`–`12,25` remain
(placeholder `<!-- טרם תורגם: 4,18–12,25 -->`).

### Sources consulted
The AED-TEI base through `egypt_tools.py data`; the TLA's German (`tr WE`) after each section; the dossier's
`annotated-WC.rtl.md` (its `>` lines and apparatus copied by script; its header's fixed words); TB's annotated file
(narrative strings); Lichtheim AEL I / Simpson / Parkinson only from memory, in a few words.

### Decisions
- **The royal decree** (§11.5.3), fixed at 1,12–1,17 and copied at 4,12–4,17 (only the names and brackets change):
  `אז אמר הוד מלכות מלך־הדרום־והצפון ח׳וּפוּ | אמיתי־הקול: תן שיתנו | תקרובת: לחם אלף, שֵׁכָר – כדים מאה, שור אחד, |
  קטורת – כדורים שניים, למלך־הדרום־והצפון X אמיתי־הקול; וכן לגרום שיתנו | עוגה אחת, שֵׁכָר – קנקן אחד, בשר – נתח גדול,
  קטורת – כדור אחד | לכוהן־הקורא החרטום Y, ראיתי את מעשהו | של דעת. אז עשו כמצוות הוד מלכותו, כולן.` The line breaks
  of the Egyptian differ between the two copies (1,13–1,17 vs 4,13–4,17); the words are the same. jmi̯ + sḏm=f = `תן ש…`
  (the dossier's 3,24 `[תן] [לך]`); mꜣꜥ "offering" = `תקרובת` (Ugaritic Kirta uses it for *nzl*; a different corpus,
  noted; `קורבן` is MT's ḥtp.t, `מנחה` TB's ꜥbt); sntr `קטורת`; ḥnq.t `שֵׁכָר` (AM); sp n rḫ "his deed of knowledge"
  `מעשהו של דעת` (rḫ = `דעת`); the numbers after the noun, as a list.
- **The frame:** bjꜣ.yt `פלא` (§11.3); ḏi̯=j sḏm "I shall cause to hear" = `אשמיע` (two words, one causative verb);
  ḫpr.t m rk jt=k `אשר נהיה בימי אביך` (jt "forefather" = `אב`); m=k bjꜣ.yt `ראה, פלא`; ꜥḥꜥ pw jri̯.n X `קם X`; ḏd=f
  `אומר הוא` (§3a).
- **Narrative "X pw jri̯.n Y"** = a plain past verb (`בא`, `קם`, `נסע`, `שָׁט` – the dossier's 3,4 `שָׁט` for šꜣs pw, and its
  `שָׁטָה` / `שָׁטוּ` vocalized: unvocalized `שטה` = the gated `שִׁטָּה`). ḫr-m-ḫt = `ואחרי` (TB's `ואחרי כן` is ḫr-jr-m-ḫt);
  the dawn (2,15) `ואחרי – האירה הארץ, ויום שני נהיה –` (TB's string without `כן`). jst (r=f) `והרי`; jn X sḏm (cleft)
  `X הוא ה…`.
- **The household (dossier words kept):** šzp.t `ביתן` (Kirta uses it: different corpus, a pavilion there too), wbꜣ.yt
  `משרתת`, pds "box" `ארגז` (`תֵּבָה` gated to ḏbꜣ.t), ḥbs `בגדים`, bw-nb-nfr `כל דבר טוב`, hrw nfr `יום טוב` (§11.7.3),
  wršj `בילה את היום` (TB), ꜣ.t `שעה` (TB 3,7 `נעשה לנו שעה`: the seduction formula), m-sꜣ "in charge of" `אשר על`.
- **Cult and court:** ḥw.t-nṯr `בית־האל` (AM); wn.t (the shrine) `הַדְּבִיר` (vocalized); ḥn.t `מלאכה`; nb-ꜥnḫ-tꜣ.wj
  `אדון־עַנְח־תָּאוִי`; bjtj alone `מלך־הצפון`; ẖnw "residence" `הבירה` (AM 19.7); šdw `מגרש`; jtrw `היאור` (§4.2,
  [cognate: loanword]); qmꜣ.w "what is thrown into the water" `מושלך` (from qmꜣm `השליך`); ḫ.t `אש`.
- **Splits by sense (recorded at the lines):** jṯj `תפס` (dossier; 4,8 `שתיתפס`) / `לקח` (2,1, "be taken to him");
  rḏj `נתן` (dossier) / `גרם` (the causative rḏj + sḏm=f, 2,1, 4,8) / `שם` (fire, 4,9) / `העמיד את עצמו` (rḏj sw, 2,19,
  3,18); ꜥḥꜥ `קם` (1,17) / `חיכה` (ꜥḥꜥ n, 2,13); wꜥb `טהור` (§11.3) / `רחץ` (the verb, 2,25).
- **Names** vocalized everywhere (as in the dossier's copied lines): `ח׳וּפוּ`, `גֶ׳וֹסֶר`, `נֶבְּקָה`, `וֶבָּאוֹנֶר`, `חַעֶפְרַא`,
  `בָּאוּפְרַא`, `פְּתָח`.
- **3,8** r ḥmsi̯.t jm=s "to sit in it": `לשבת` trips the שבת gate (the infinitive of ישב), so `כדי שאשב בו` (the speaker
  is the wife, 3,7) – natural Hebrew, recorded at the line; see Proposals.
- **2,18** the TLA restores "[Ehe]bruch" in the gap: not put into the line (the word is lost; the note gives it).

### Open decisions for the user
- 2,19 / 3,18 rḏj sw: `העמיד את עצמו` (literal) vs the TLA's "begab sich" (`פנה אל`). 2,15 `יום שני` vs the TLA's
  "zwei Tage". 1,20 wn.t `הַדְּבִיר` (a temple word of 1 Kgs 6) vs a neutral `היכל פנימי`.

### Progress log
- 2026-10-31: drafted 1,1-11–2,20 and 2,24–2,25, 3,6–3,10, 3,17–3,20, 4,8–4,17; the 27 WC lines copied by script
  from the dossier (`>` lines byte for byte, apparatus copied; "לא תורגם כאן" → "להלן"); `fill` (58 lines); `verify WE`:
  one gate hit (3,8 `לשבת`, fixed), then 0 problems, 27 dossier lines identical, 0 repeated-line differences. TLA
  compared after drafting (10 `תרגומים` bullets added; 3,19 `לספר` → `סופר`). Pass (a) on the clean text: the bracket
  of 2,5 aligned with the prefix convention. Quotes: `check_bible_quotes.py` 0 problems. No dossier revision
  (`[סטייה מן התיק]`) needed.

### The text on its own terms
- Magic is knowledge: the king rewards the magician for "his deed of knowledge" (sp n rḫ, 1,16; 4,16–4,17), and the
  dead king of the tale gets the larger offering – the wonder honours the reign it happened in (1,13–1,15).
- The frame of "wonders" (bjꜣ.yt): each prince "makes the king hear" a wonder of a forefather's time (1,18; 4,10–4,11);
  inside the tale the magician invites Nebka to "see the wonder that happened in your majesty's time" (3,20).
- The king as priest: Nebka "himself" goes to Ptah's shrine and performs its rites (1,20–1,21: the cleft *jn ḥm=f*).
- Class and the household: the wife loves "a commoner" (nḏs), gives him clothes "of the king's treasures" (1,23–2,2);
  the steward is both the informer and the hand of the magic (2,7–2,18; 3,1–3,12).
- Two preparations set side by side: the wife has the pavilion furnished "with every good thing", the husband makes the
  wax crocodile (2,8–2,9 / 3,6–3,9 vs 2,21–3,5).
- The punishment denies burial: the man is taken to the lake's depth, the woman burnt and her ashes thrown into the
  Nile (4,7–4,10) – no tomb, no afterlife.
- Washing and purity: the commoner goes down "to wash" (wꜥb, the priests' purity verb) in the lake (2,25).

### Key parallels
- [cognate] Ex 7:11 `חַרְטֻמֵּי מִצְרַיִם` – ḥry-tp, the lector priest's title (1,15-16; the dossier's lines).
- [divergence] Gen 38:24 `הוֹצִיאוּהָ וְתִשָּׂרֵף` – the adulterous wife burnt (4,9–4,10).
- [divergence] Lev 20:10 – both adulterers die, but by the magician's and the king's hand (1,23).
- [equivalent] Prov 7:18 – the wife's invitation in her husband's absence (2,6).
- [equivalent] Ex 15:11 `עֹשֵׂה פֶלֶא` – bjꜣ.yt (1,18).
- [cognate] `יְאֹר` – jtrw (4,10).

### Lines shared with other texts
- 2,21–4,7 = the dossier's WC (27 entries): `>` lines byte for byte; apparatus copied (only "לא תורגם כאן" → "להלן");
  my lines between (2,24–2,25, 3,6–3,10, 3,17–3,20) follow its words (`איש פשוט`, `סוכן הבית`, `ביתן`, `אגם`, `שָׁט`,
  `הדבר הזה`, `שונה`/`לִשְׁנוֹת`). The decree 1,12–1,17 = 4,12–4,17 (and the later decrees). 2,7–2,9 ≈ 3,5–3,9.
  The seduction formula `נעשה … שעה` = TB 3,7; the dawn = TB's string (without `כן`).

### Proposals for the shared renderings
- The decree's words (above) as the §11.5.3 fixed string for 6,22ff. and the later wonders.
- mꜣꜥ (offering) `תקרובת`; sntr `קטורת`; šzp.t `ביתן`; wbꜣ.yt `משרתת`; pds `ארגז`; wn.t `דביר`; jt "forefather" `אב`;
  sp n rḫ `מעשה של דעת`.
- **Gate:** the שבת gate catches `לשבת` "to sit" (ישב); a licence for ḥmsj (or the infinitive form) would avoid
  bending the Hebrew in the tales, where "sit" is frequent.

### Lessons for the guidelines
- Copying a dossier excerpt by script (label → `>` + bullets) keeps it byte-identical and leaves time for the
  in-between lines; the dossier's notes that say "not translated here" need a one-word adaptation.

## WE 4,18–7,26 (part 2; Round 5 run 6, translator 1)

### Scope
Labels `4,18`–`7,26` (89 entries): Baufre's wonder (Snefru's boredom, the rowing girls, the lost fish-pendant,
Djadjaemankh folds half the lake on the other half, the third decree 6,17–6,22), Hordjedef's critique of past wonders
and the introduction of Djedi (6,23–7,8), Hordjedef's journey to Djedi (7,9–7,16), the exchange of greetings (7,17–7,26). Placeholder now
`<!-- טרם תורגם: 8,1–12,25 -->` (since removed: part 3 below). Review passes: see part 3.

### Decisions
- **The third decree** (6,17–6,22) copies §11.8.1; the Egyptian's own changes kept: `להוד מלכות` before the king (6,19),
  no `בשר – נתח גדול` and no number after `כדור` (6,20), the magician's two titles (6,20-21–6,21).
- **The parted lake (6,8–6,12):** rḏj rmn n mw ḥr wꜥ=sn `שם חצי מי האגם על האחד מהם`; wdb `נהפך`; the 12 → 24 cubits
  kept as numbers; ḏd.t.n=f m ḥkꜣ.w `את אשר אמר בקסמים`. No word of Ex 14 in the lines; the הקבלה quotes Ex 14:21–22
  [divergence] (motif, not dependence). ḏr.jn=f "finally it was" `ובאחרונה` (`ולבסוף` trips the סוף gate).
- **Words:** s.t-qb.t `מקום־רענון`, qbb `התרענן`; dbn `סבב`; ꜥ.t `חדר`; pr-nswt `בית־המלכות` (`בית־המלך` is stp-sꜣ);
  pr-ꜥꜣ `פַּרְעֹה` by §4.2 (5,2 "the lake of the Great House": the palace sense in a note); ḥwj-ꜣ `הלוואי`; bꜣw `סירה`;
  ꜥḥꜥ.w (ship) `אניות`; nfr.t (maiden) `נערה`; ẖnj / ẖn.t `חתר` / `חתירה`; m-ḫd m-ḫnt `במורד ובמעלה`; zš `סבך`;
  ḫfꜣꜣ.t `גדה`; wsr `מָשׁוֹט` (collision: AM's `משוט` is ḥmw – flagged); nḫꜣw `תליון־הדג`, mfkꜣ.t `טורקיז`; gr `שתק`;
  štjw `משוט־הקצב`, štj.t `ראש־החותרות`, rmn "row" `שורה` / rmn "half" `חצי` (two TLA lemmas); sn.tj `כמוהו`, ḏbꜣ(w)
  `תמורה`/`המיר`; ḥnw.t `בעלת`; fqꜣ (verb) `גמל`; zẖꜣw-mḏꜣ.t `סופר־המגילה`; mꜣꜥ.t / grg `אמת` / `כזב`; Ḏd-Snfrw
  `גֶ׳דֶד־סְנֶפְרוּ`; mꜣj `אריה`; jp.t `החדרים הנעולים`; ꜣḫ.t (the pyramid) `אופק`; Thoth `תְּחוּת`; qnjw `כיסא־משא`;
  ḥrtj `בדרך הארץ` (`יבשה` gated); šꜣs `שָׁט` throughout (also over land, Job 1:7's `מִשּׁוּט`).
- **nfr** by sense: `טוב` (5,14 "the heart was good"; bw-nb-nfr, hrw nfr) / `יפה` (5,5–5,6, 5,10: landscape and bodies).

### Open decisions for the user
- wsr "oar" `מָשׁוֹט` collides with AM's `משוט` (ḥmw): keep (never in one line) or `משוט־חתירה`? ꜥḥꜥ.w `אניות` vs
  the reserved ship words (§10.10.3). 7,10 ḫnt(j)-ẖty.t: month name (TLA) or "upstream"?

### Progress log
- 2026-10-31 (part 2): drafted 4,18–7,26 in six sections, `fill` + `verify WE` after each; gate hit 6,11 `ולבסוף`
  (fixed); TLA compared (5,15 `הסתבכה` → `העבירה (יד)`; the rest agrees). build: 164 lines, 0 problems;
  `check_bible_quotes.py` 0 problems.

### The text on its own terms (part 2)
- The bored king and the cure of beauty (4,22–5,14): the magician prescribes a boat of girls in nets.
- The girl who wants her own pendant, not the king's copy (5,22–5,24; 6,7): property and will, even before the king.
- Magic as speech and as measure: "he said what he said in magic" (6,8, 6,12), and 12 + 12 = 24 cubits (6,11).
- Hordjedef's critique: past wonders cannot be tested for truth (mꜣꜥ.t) or lie (6,23–6,25); a living one can.
- Djedi, a commoner of 110 years who eats like the dead kings' offering (7,1–7,3); Khufu seeks Thoth's secret chambers
  for his "horizon" (7,5–7,8).
- Death as mooring, burial and "joining the earth", the dead "lying until daylight"; the greeting blesses the ka and
  the ba for the netherworld (7,18, 7,25–7,26).

### Key parallels (part 2)
- [divergence] Ex 14:21–22 – the lake's waters "put" one half upon the other (6,9).
- [equivalent] Gen 50:26 `בֶּן מֵאָה וָעֶשֶׂר שָׁנִים` – Djedi's 110 years (7,2).
- [equivalent] Gen 15:15 `תָּבוֹא אֶל אֲבֹתֶיךָ` – "lead you to your fathers" in a good old age (7,22).
- [equivalent] Esth 1:10 `כְּטוֹב לֵב הַמֶּלֶךְ` – the king's heart made good (5,14).

## WE 8,1–12,25 (part 3) and the review passes over the whole WE (Round 5 run 6, range B, translator 1)

### Scope
Labels `8,1`–`12,25` (131 entries): Djedi at court (the goose, the duck, the ox; the refusal "not to people"), Thoth's
chambers and the prophecy of Ruddjedet's three sons (8,15–9,21), the goddesses as musicians at the birth (9,22–11,4),
the barley and the three crowns (11,5–11,17), the maid's betrayal and the crocodile (11,18–12,25, where the papyrus
breaks off). WE is now complete: 305 entries, no placeholder. No decree follows Djedi's wonder (the tale moves straight
into the prophecy); 9,20's rations echo the decree's list (noted).

### Decisions
- **Court forms:** j (j)ty ꜥnḫ-wḏꜣ-snb nb=j = `הו הריבון, חיים, שלום, בריאות, אדוני` (jty `ריבון`; `שליט` is ḥqꜣ); njs.w pw
  jy.y `הנקרא – הוא הבא`; rmṯ `בני האדם`, ꜥw.t `צאן` (MK E130's `בְּנֵי הָאָדָם, צֹאן הָאֵל`), šps `נכבד`.
- **Words:** smn `אווז`, wꜣḫj `אולם־העמודים`, gbꜣ `צד`, ḫnrj / ḫnr.t `אסיר` / `בית־הכלא` (`סֹהַר` gated), nkn `עונש`;
  qꜣqꜣw `ספינת־נהר`, wsḫ `ספינת־המשא`, jz.t `צוות`; ẖrd `ילד` throughout WE (8,3 included; AM 25.9's `נער` – a split by
  sense: infants and unborn here); zẖꜣ.w `כתבים`; ꜥfd.t `ארגז` (pds also `ארגז` – two box words, never in one line);
  wꜥb (title) `טהור` (9,9), the verb `נטהר` / noun `טהרה` (11,18; 2,25's `רחץ` kept, a split); wr-mꜣw `גדול־הרואים`;
  jꜣ.t `משרה`, mnḫ `מעולה`; Jwnw `אוֹן`; ṯs.w `שרטונות`, ꜥꜣḏ.wj `תעלת־שני־הדגים`; ḥtp.w-nṯr `קורבנות־האל`; rʾ-pr `היכל`,
  ḫꜣw.t `מזבח`, wḏḥw `שולחן־הקורבן`; the goddesses `אִיסִיס`, `נֶפְתִּיס`, `מֶסְחֶנֶת`, `חֶקֶת`, `חְנוּם`; Rꜥ-wsr `רַאוֹסֶר`,
  Sꜣḫbw `סָחְבּוּ`; mnj.t `קולר־מֶנַת`, sḫm `מְנַעַנְעִים` (2 Sam 6:5); ḏb.t `לבנה` (Ex 1:16's `הָאָבְנָיִם` in the note);
  ẖpꜣ `טבור`, jꜥj `שטף`, šꜥd `נחתך`, swḏꜣ `השלים` (the wḏꜣ of `שלום`), ḫsbd `ספיר` (TB, HC); jt "barley" `שעורה` (AM);
  ḫꜥw `כתר`; ḏꜥ / ḥwy.t `סערה` / `גשם`; ḫtm verb `נעל` / ḫtm "seal" `חוֹתָם` [loanword] / ḫtm "lockable box" `מכל־נעול`;
  hnw `קיתון`; ẖꜣr `שק`; dḥr `עור` (12,5 `בְּעוֹר` with `[היתר שער]`: the עִוֵּר gate reads it as "blind").
- **The three births (10,7–11,3)** are one repeated block: fixed at 10,7–10,14, copied at 10,14–10,22 and 10,22–11,3,
  changing only the name, the pun verb and the Egyptian's own variants (⟨m nbw⟩ 10,18; `גופו` / `איבריו`; 11,2's order).
  The puns: wsr `תתחזק` ~ Wsr-r=f `וֹסֶר־רֶף` (the tale's spelling of `וֹסֶרְכָּאֶף`), sꜣḥ `תבעט` ~ `סָאחוּרַא`, kkw `תחשיך`
  ~ Kkw `כָּאכָּאי` – the sound is lost in Hebrew, the notes give it.
- **msj** stays `ילד`/`הוליד` even for the crowns (11,13 `הולידו הן שלושה כתרים`): `יָצַר` is qmꜣ's (§5.2), and the verb of the
  births binds crowns and kings.
- wꜥr (the children "rush out") `מיהר` (TB's `ברח` – a split by sense); wḏꜣ imperative to women `לְכְנָה` (10,6).
- **n sḏm.t=f** at 5,11 corrected to `טרם` (pass a).

### Progress log (part 3 and the passes)
- Drafting 8,1–12,25 in seven sections, `fill` + `verify WE` after each; gate hits fixed: 9,2 `ייטב` (טוב gate; → `משובח
  אתה`), 9,27 / 11,4 / 11,10 `האלה` "these" read as "goddess" (→ `הָאֵלֶּה`), 12,5 `בעור` (→ `[היתר שער]`). TLA compared
  after each section (8,1 / 7,20 "of a king's son / of a revered one", 8,15 purpose `ויוטל`, 11,17 `מן הנגינה`, 12,11 the
  maid's question – corrected).
- **Pass (a) fidelity, whole WE:** brackets at 1,22 (`[הכוהן־הקורא] החרטום`), 2,19 (`באגמך`), 4,20, 4,25, 5,22, 5,24
  (`(את)`), 6,25, 6,26; tense / negation: 5,11 `טרם`, 5,19 `אינכן חותרות`, 5,20 and 6,5 `אינך חותרת – מדוע?` (not a
  prohibitive: tm=t sḏm is the subject of "why").
- **Pass (b) consistency:** the three decrees compared word by word (1,12–1,17 = 4,12–4,17 = 6,17–6,22 with the
  Egyptian's own changes); a lemma scan (šꜣs, wḏꜣ, nḏs, ḥrj-pr, šzp.t, msḥ, bjꜣ.yt, ḥkꜣ.w, jṯj, gmj, ḏd.jn / ꜥḥꜥ.n ḏd.n …):
  only 5,5–5,6 changed (the verb mꜣꜣ now in its own line, `ואתה רואה`). `verify WE --strict`: 0 problems.
- **Pass (c) Hebrew:** the clean text read through; 9,12 `בגלל זה`, 10,3 `ואז היו הן מגישות`, 12,21 the emphatic "why".
- Final: `build WE` 305 lines, 6 footnotes; `check_bible_quotes.py` on the three files: 0 problems; dossier lines
  identical (27), no `[סטייה מן התיק]`.

### The text on its own terms (part 3)
- The magician refuses to test death on a man: people are "the noble flock" of the god (8,16–8,17; Merikare E130), and
  the king accepts – animals are used instead (8,18–8,26).
- Severed and rejoined: body in the west, head in the east of the hall, reunited by speech (8,18–8,22).
- Knowledge has limits: Djedi knows where Thoth's secret is, not its number, and that it is not he who will bring it
  (9,3–9,7) – the future belongs to the unborn kings.
- Divine kingship told as folk tale: Re fathers three kings on a priest's wife; the goddesses deliver them, name them by
  pun, fix their fate (Meskhenet) and make their bodies whole (Khnum); the children have bodies of gold and lapis
  (10,9–11,3).
- The goddesses must leave a "wonder" behind (11,11): the crowns sing in the barley sack (12,1) – the frame's word enters
  the tale.
- Household loyalty: the beaten maid tries to betray, her own brother punishes her, and a crocodile takes her (12,9–12,25)
  – the second crocodile closes the circle with Webaoner's.

### Key parallels (part 3)
- [divergence] Gen 9:6 – man's special worth, here to spare a condemned man a test (8,16).
- [equivalent] Ps 100:3 `וְצֹאן מַרְעִיתוֹ` – mankind as the god's flock (8,17).
- [divergence] Ex 1:15–16 – a king and midwives; here a god sends midwife goddesses to deliver the future kings
  (9,23; 10,12 `הָאָבְנָיִם`).
- [equivalent] Gen 35:16–17 – a hard birth and the midwife's good news (9,22; 11,5).
- [equivalent] Gen 29:32 – the name given at birth by a pun (10,9).
- [equivalent] Lev 12:4 – the days of the mother's purification (11,18).
- [equivalent] 1 Kgs 18:42 – the head between the knees (12,20).

### Lines shared with other texts
- None outside the dossier lines; inside WE: the birth block ×3, the court address ×5, "he said what he said in magic"
  (6,8, 6,12, 8,20, 8,25), the ox "behind him, its leash on the ground" (7,5 ≈ 8,26).

### Proposals for the shared renderings
- The court address `הו הריבון, חיים, שלום, בריאות, אדוני` and jty `ריבון` (Sinuhe will need it).
- ẖrd `ילד` in the tales (AM's `נער` kept for AM); msj `ילד` / `הוליד` also for "create" (crowns), never `יצר`.
- ḫtm: verb `נעל`, noun "seal" `חוֹתָם` [loanword], "lockable box" `מכל־נעול`.
- **Gates:** (1) the עִוֵּר gate catches `בעור` "in leather"; (2) the goddess trap catches the demonstrative `האלה`
  "these" in a line with nṯr (vocalize `הָאֵלֶּה`, or teach the trap the demonstrative); (3) the טוב gate catches `ייטב`.

### Lessons for the guidelines
- A repeated block (three births) is safest fixed at its first copy and then copied by eye against the source line by
  line; the variants of the Egyptian (an omitted ⟨m nbw⟩, a changed order) are where the copies must differ.

## Independent fidelity review (2026-11-01)

Pass "a" by a fresh reader over all 305 lines: every `>` line against the transliteration and the per-word data (`data WE`), the base XML's `<gap/>`s, the TLA's German (`tr`) read afterwards. **43 lines changed** (some for more than one reason):

- **Damage marks (25 lines):** `⸢ ⸣` is not carried into the Hebrew (brief §3, §9; no other Egyptian file carries it); removed from every non-dossier line that had it. The dossier lines (2,21–4,7) keep them (the dossier's own convention; byte-identity). The legend of `annotated-WE.rtl.md` now says so.
- **Other brackets (5):** 2,15, 2,19, 4,24, 4,25, 5,23.
- **Voice / verb form (5):** 4,21, 5,2, 5,12, 6,10, 12,16.
- **Omitted words (4):** 7,25 (*ḫ,t*), 9,13 (*jri̯.tw*), 12,15 (*jri̯*); and 12,21 / 9,13 a written word put in `( )`.
- **Editor's ⟨ ⟩ rendered as `( )` (4):** 9,5, 9,15, 10,18, 12,5.
- **Preposition / object (2):** 10,7 (*ḥnꜥ*), 11,9 (*sw*).
- **Article (2):** 5,17, 8,15. **Uncertainty marks (3):** 5,22, 9,16, 9,18. **Hebrew agreement (1):** 11,14.
- No negation or person errors found; the gaps of the XML are all represented (`[…]`); the decrees (1,12–1,17, 4,12–4,17, 6,17–6,22) were not touched; the births block (10,7–11,3) changed only at 10,7 (outside the copied part, the locked room) and 10,18 (now identical with the other copies).
- **The dossier lines (2,21–4,7):** no `>` line edited. One pending dossier revision, written in the WE entry as `- **לתיק:**`: **2,22** – `⸢ו⸣זהב־לבן; *אוליד*? … [שלח] שליח […]. [ואז] [תפס] [תמסח]` (sub-word brackets against the corpus's rule: a restored suffix `[א]וליד`, half-restored `[ש]לח`, a written stem `שלי[ח]`, a mostly restored `[תמ]סח`). For the lead: the dossier's `⸢ ⸣` in its 9 WE lines (its own convention) differ from the Egyptian corpus's rule.
- **Left as they are (recorded):** 5,2 / 8,10 *pr-ꜥꜣ* `פַּרְעֹה` for the palace (the §4.2 rule, explained in the notes); 7,12 `והונח לו` for *snḏm.n=f* "he sat at ease" (an idiom; `ישב` is ḥmsj's); 9,14 *ḏd.n=j* read as a main verb (TLA: relative form); 12,11 *r? … zp-2?* (uncertainty explained in the parse, not marked in the line); the bracketed restored article `[ה]` (2,2, 2,4, 2,12; the dossier's practice).

**Every changed line** (label: old → new – reason):

- 1,19: `נֶבְּקָה אמיתי־הקול: נוסע היה אל ⸢בית־האל⸣ של [פְּתָח]` → `נֶבְּקָה אמיתי־הקול: נוסע היה אל בית־האל של [פְּתָח]` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 1,21: `[של] [פְּתָח] […] […], הוד מלכותו הוא העושה ⸢את מלאכת⸣ [הַדְּבִיר] [של] [פְּתָח]` → `[של] [פְּתָח] […] […], הוד מלכותו הוא העושה את מלאכת [הַדְּבִיר] [של] [פְּתָח]` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 2,3: `[ואחרי] ימים [שעברו] ⸢על⸣ [זה] – [והרי] היה ביתן` → `[ואחרי] ימים [שעברו] על [זה] – [והרי] היה ביתן` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 2,6: `[באגם]. ואז [אמרה] [האשה]: ⸢ראו⸣, נעשה שעה בו` → `[באגם]. ואז [אמרה] [האשה]: ראו, נעשה שעה בו` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 2,9: `[בכל] [דבר] [טוב]. [שָׁטָה] ⸢היא⸣ (לשם), בילתה שם את היום בשתייה` → `[בכל] [דבר] [טוב]. [שָׁטָה] היא (לשם), בילתה שם את היום בשתייה` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 2,15: `[ואחרי] – האירה הארץ, ויום שני [נהיה] – [שָׁט]` → `[ואחרי] – האירה הארץ, ו[יום] שני [נהיה] – [שָׁט]` – *h[rw]* is mostly restored: `[יום]` (brackets).
- 2,19: `באגמך. [ואז] העמיד הוא את עצמו לאדונו [וֶבָּאוֹנֶר] [ב־]` → `באגמך. [ואז] העמיד הוא את עצמו ל[אדונו] [וֶבָּאוֹנֶר] [ב־]` – *nb* "lord" wholly restored: `ל[אדונו]` (brackets).
- 4,10: `אש בה, [ואז] [היתה] ל⸢מושלך⸣ של היאור. ראה, פלא` → `אש בה, [ואז] [היתה] למושלך של היאור. ראה, פלא` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 4,17: `של דעת. אז עשו כמצוות הוד מלכותו, כולן. קם בָּאוּפְ⸢רַא⸣` → `של דעת. אז עשו כמצוות הוד מלכותו, כולן. קם בָּאוּפְרַא` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 4,19: `בימי אביך סְנֶפְרוּ ⸢אמיתי־הקול⸣, ⸢כמעשה⸣` → `בימי אביך סְנֶפְרוּ אמיתי־הקול, כמעשה` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 4,21: `[זיכרון] ⸢שבח⸣ […] יום; אלה של … לא ⸢עשה⸣? ⸢גרם⸣ שיהיה` → `[זיכרון] משובח […] יום; אלה אשר לא נעשו? (ולא) נגרם שיהיו` – *ḥsi̯* and *tm* are passive participles (TLA): "praised", "(things) not done"; the Hebrew had a noun and an active 3 m. sg. (`שבח … לא עשה? גרם`); the stray `…` (for the particle *jw*) and `של` (*nꜣ n* "these") dropped (form/voice); ⸢ ⸣ dropped.
- 4,23: `[מקום־רענון]?, [ולא] [מצא] [אותו]. [אז] [אמר] [הוד מלכותו]: לך, הבא לי את ⸢הכוהן־הקורא⸣ החרטום` → `[מקום־רענון]?, [ולא] [מצא] [אותו]. [אז] [אמר] [הוד מלכותו]: לך, הבא לי את הכוהן־הקורא החרטום` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 4,24: `סופר־[המגילה] [גָ׳אגָ׳אאֶמְ]⸢עַנְח⸣! אז הביאו אותו [אליו] מיד. אז אמר לו` → `סופר־[המגילה] [גָ׳אגָ׳אאֶמְעַנְח]! אז הביאו אותו [אליו] [מיד]. אז אמר לו` – the name is mostly restored: bracket the Hebrew word whole; *ḥr-[ꜥ.w]j* mostly restored: `[מיד]` (brackets); ⸢ ⸣ dropped.
- 4,25: `⸢הוד⸣ מלכותו: [סבבתי] [את] [כל] [חדרי] ⸢בית־המלכות⸣, [חיים, שלום, בריאות], לבקש לי מקום־רענון,` → `הוד מלכותו: [סבבתי] [את] [כל] [חדרי] בית־המלכות, [חיים], שלום, בריאות, לבקש לי מקום־רענון,` – of the written signs of the abbreviation *ꜥnḫ-(w)ḏꜣ-s(nb)* only *ꜥnḫ* is restored: `[חיים], שלום, בריאות` (brackets); ⸢ ⸣ dropped.
- 5,2: `ייסע הוד מלכותך אל אגם פַּרְעֹה, חיים, שלום, בריאות! צייד לך סירה` → `ייסע הוד מלכותך אל אגם פַּרְעֹה, חיים, שלום, בריאות! תצויד לך סירה` – *ꜥpr* is a passive *sḏm=f* (TLA: passive, "ausgestattet worden ist"), not an imperative (voice).
- 5,12: `עשרים, וכן לתת את הרשתות האלה לנשים האלה, ויניחו את בגדיהן.` → `עשרים, וכן לתת את הרשתות האלה לנשים האלה, ויונחו בגדיהן.` – *wꜣḥ* is a passive *sḏm=f* (TLA) – the clothes "laid aside", not "they will lay aside" (voice).
- 5,13: `ואז נעשה כמצוות הוד מלכותו, כולן. ⸢ואז⸣ היו ⸢הן⸣ חותרות` → `ואז נעשה כמצוות הוד מלכותו, כולן. ואז היו הן חותרות` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 5,16: `[…] בצמתה, ואז תליון־הדג ⸢של⸣ טורקיז` → `[…] בצמתה, ואז תליון־הדג של טורקיז` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 5,17: `החדש נפל אל המים. ואז שתקה היא, בלי לחתור,` → `חדש נפל אל המים. ואז שתקה היא, בלי לחתור,` – no article in the Egyptian (*mfkꜣ.t mꜣw.t*), as at 6,3 and 6,6 (article).
- 5,21: `[מדוע]? ואז אמרה היא: ⸢תליון־הדג⸣ [של] [טורקיז] חדש` → `[מדוע]? ואז אמרה היא: תליון־הדג [של] [טורקיז] חדש` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 5,22: `⸢נפל⸣ אל המים. ⸢ואז⸣ [שם] הוא [אותה] [אל] [משוט־הקצב]. [אז] [אמר] [הוד מלכותו] לה: רוצה אני` → `נפל אל המים. ואז [שם] הוא [אותה] [אל] [משוט־הקצב]. [אז] [אמר] [הוד מלכותו] לה: רוצה? אני` – *mri̯?* is marked uncertain in the base: `רוצה?` (uncertainty); ⸢ ⸣ dropped.
- 5,23: `[לתת] [לך] [כמוהו] כ[תמורה]. ואז [אמרה] [היא]: [רוצה] אני בחפץ שלי` → `[לתת] [לך] [כמוהו] כתמורה. ואז [אמרה] [היא]: [רוצה] אני בחפץ שלי` – *ḏb[ꜣ,w]*: the stem is written, only the last sign and the ending restored – no bracket (brackets).
- 6,10: `מונח על חרס […] חרס. ואז הביא הוא אותו, ונתן (אותו) לבעלתו. והרי, הנה` → `מונח על חרס […] חרס. ואז הביא הוא אותו, וניתן לבעלתו. והרי, הנה` – *rḏi̯* is a passive *sḏm=f* (TLA: "es wurde seiner Herrin gegeben"); the Hebrew had "and he gave (it)" (voice).
- 6,23: `לדבר, אומר הוא: [דבר] של ⸢מעשה⸣ [הוא] [של] [פלא] [שעבר], כידיעת אלה אשר עברו; ⸢לא⸣` → `לדבר, אומר הוא: [דבר] של מעשה [הוא] [של] [פלא] [שעבר], כידיעת אלה אשר עברו; לא` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 6,24: `יודעים אמת [מן] ⸢כזב⸣. [יש] [תחת] הוד מלכותך, בזמנך שלך,` → `יודעים אמת [מן] כזב. [יש] [תחת] הוד מלכותך, בזמנך שלך,` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 7,25: `⸢מעמדך⸣ בין הישישים! ייאבק הכָּא שלך נגד האויב, ידע הבָּא שלך` → `מעמדך בין הישישים! ייאבק הכָּא שלך (על) דבר נגד האויב, ידע הבָּא שלך` – *ḫ,t* "matter" was not rendered: `(על) דבר`, as at 12,9 (omitted word); ⸢ ⸣ dropped.
- 8,15: `אז אמר הוד מלכותו: תן שיביאו לי את האסיר אשר בבית־הכלא, ויוטל` → `אז אמר הוד מלכותו: תן שיביאו לי אסיר אשר בבית־הכלא, ויוטל` – *ḫnrj* has no article: "a prisoner" (article).
- 9,2: `את מספר החדרים הנעולים של ⸢דביר⸣ [תְּחוּת]? אז אמר גֶ׳דִי: משובח אתה –` → `את מספר החדרים הנעולים של דביר [תְּחוּת]? אז אמר גֶ׳דִי: משובח אתה –` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 9,5: `של צור, בחדר ששמו "הביקורת", באוֹן; (ראה), הוא בארגז. אז אמר גֶ׳דִי:` → `של צור, בחדר ששמו "הביקורת", באוֹן; ראה, הוא בארגז. אז אמר גֶ׳דִי:` – ⟨m⟩=⟨k⟩: the editor's supplement is rendered without marks (brief §3; the corpus's practice, e.g. AM) – not `( )` = "added for sense" (marks).
- 9,13: `גֶ׳דִי: מה זה הלב (הזה), הו הריבון, חיים, שלום, בריאות, אדוני? האם בגלל` → `גֶ׳דִי: מה זה הלב הזה, הו הריבון, חיים, שלום, בריאות, אדוני? האם נעשה (זה) בגלל` – *jri̯.tw* "is it done" was not rendered: `האם נעשה (זה) בגלל`; *pꜣ* "this" (TLA "dieser") is in the Egyptian: `הלב הזה` without `( )` (omitted word).
- 9,15: `תלד היא – מתי, רוּדְגֶ׳דֶת? (אז אמר גֶ׳דִי): תלד היא בחודש הראשון של פֶּרֶת, ביום החמישה־עשר. אז אמר` → `תלד היא – מתי, רוּדְגֶ׳דֶת? אז אמר גֶ׳דִי: תלד היא בחודש הראשון של פֶּרֶת, ביום החמישה־עשר. אז אמר` – ⟨ḏd.jn⟩ ⟨Ḏdj⟩: the editor's supplement without marks, as 9,5 (marks).
- 9,16: `הוד מלכותו: והרי שרטונות תעלת־שני־הדגים כרותים! *אדרוך*? אני עליהם בעצמי, ואז` → `הוד מלכותו: והרי שרטונות תעלת־שני־הדגים? כרותים! *אדרוך*? אני עליהם בעצמי, ואז` – *ꜥꜣḏ.du?* is marked uncertain in the base (uncertainty).
- 9,18: `שיהיו מים של ארבע אמות על שרטונות תעלת־שני־הדגים. נסע הוד מלכותו אל ארמונו.` → `שיהיו מים של ארבע אמות על שרטונות תעלת־שני־הדגים?. נסע הוד מלכותו אל ארמונו.` – as 9,16 (uncertainty).
- 10,7: `ואז נעלו הן את החדר אחריה ואחריהן […] העלייה שלה עמה. ואז העמידה אִיסִיס את עצמה לפניה,` → `ואז נעלו הן את החדר אחריה ועמהן […] העלייה שלה עמה. ואז העמידה אִיסִיס את עצמה לפניה,` – *ḥnꜥ=s⟨n⟩* is "with them", not "behind them" (preposition).
- 10,18: `כילד של אמה אחת, עצמותיו מוצקות, עיטור איבריו (מזהב), כיסוי־ראשו מספיר` → `כילד של אמה אחת, עצמותיו מוצקות, עיטור איבריו מזהב, כיסוי־ראשו מספיר` – ⟨m⟩ ⟨nbw⟩ without marks (as 9,5); the births block is now identical with 10,10 and 10,25 here (marks).
- 11,9: `אותה חְנוּם, את השעורה. נסעו הן אל המ⸢קום⸣` → `חְנוּם (על) עצמו את השעורה. נסעו הן אל המקום` – *jwh sw m* "loaded himself with" (TLA "belud sich"): *sw* is Khnum, not the barley (object); ⸢ ⸣ dropped.
- 11,14: `שעורה. ואז גרמו הן שיבוא השמים בסערה ובגשם.` → `שעורה. ואז גרמו הן שיבואו השמים בסערה ובגשם.` – Hebrew agreement: `שמים` is plural (grammar).
- 11,18: `ואז נטהרה רוּדְגֶ׳דֶת ב⸢טהרה⸣ של ימים` → `ואז נטהרה רוּדְגֶ׳דֶת בטהרה של ימים` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).
- 12,5: `(אותו) בארגז, אשר הונח בתוך מכל־נעול אחר, כרוך בְּעוֹר; ושמה היא אותו` → `אותו בארגז, אשר הונח בתוך מכל־נעול אחר, כרוך בְּעוֹר; ושמה היא אותו` – ⟨sw⟩ without marks, as 9,5 (marks).
- 12,15: `ואז היתה היא שונה לו את הדבר ⸢הזה⸣. ואז אמר לה אחיה: האם אכן` → `ואז היתה היא שונה לו את הדבר הזה. ואז אמר לה אחיה: האם ייעשה אכן` – *jri̯ (js)* "shall (it) be done" was not rendered (TLA "Sollte denn wirklich gemacht werden") (omitted word); ⸢ ⸣ dropped.
- 12,16: `(זה) אשר תעשי: לבוא אלי, ואני אתחבר ל[הלשנה]? ואז נטל הוא` → `אשר תעשי: לבוא אלי, ואני מתחבר ל[הלשנה]? ואז נטל הוא` – `(זה)` no longer needed after 12,15; *jw=j ḥr snsn* is the progressive (ḥr + infinitive → participle, §3a), not a future (form).
- 12,21: `לבה רע מכל דבר. ואז ⸢אמר⸣ הוא לה: גבירתי, (את) עושה את הלב` → `לבה רע מכל דבר. ואז אמר הוא לה: גבירתי, את עושה את הלב` – *jrr=t*: the pronoun *=t* is written – `את` without `( )` (marks); ⸢ ⸣ dropped.
- 12,23: `היא הלכה, לאמור: אלך ואלשין! ואז הוריד הוא את ⸢ראשו⸣` → `היא הלכה, לאמור: אלך ואלשין! ואז הוריד הוא את ראשו` – `⸢ ⸣` dropped (damage marks are not carried into the Hebrew).

## 2026-11-02 harmonization (the lead's finalization of Round 5)
- **One notation with the dossier:** `⸢ ⸣` is no longer carried into any Hebrew line of WE or of the dossier's WC (2,21–4,7 included), and the partial-restoration rule was applied to those lines in both files (the `לתיק` proposal of 2,22 applied); the list: `../renderings.md` §11.14.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (WE)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1,13 | [mꜣꜥ] [tʾ] [1000] ḥ(n)q,t ds 100 jwꜣ [1] [sntr] | [תקרובת]: [לחם] [אלף], שֵׁכָר – כדים מאה, שור [אחד], [קטורת] – | `וְהִקְטִיר עָלָיו אַהֲרֹן קְטֹרֶת סַמִּים` (שמות ל:ז) | equivalent | הקטורת ככבוד לאל; כאן – למלך המת, בפולחן המתים. |
| 1,15-16 | [ẖr(,j]-ḥb-ḥr,j-tp) | [הכוהן־הקורא החרטום] | `וַיִּקְרָא גַּם פַּרְעֹה לַחֲכָמִים וְלַמְכַשְּׁפִים וַיַּעֲשׂוּ גַם הֵם חַרְטֻמֵּי מִצְרַיִם בְּלַהֲטֵיהֶם כֵּן` (שמות ז:יא) | cognate | `חַרְטֹם` היא מלה שאולה מן התואר המצרי *ḥry-tp* (דרך *ḥr(y)-tp*): בשמות – כמו כאן – החרטום הוא איש החצר שעושה נפלאות לפני המלך. |
| 1,18 | [ḏi̯] =[j] [sḏm] [ḥm] =k [b]j(ꜣ),yt ḫpr.t m rk jt =[k] | [אשמיע] [להוד מלכותך] פלא אשר נהיה בימי אביך | `נוֹרָא תְהִלֹּת עֹשֵׂה פֶלֶא` (שמות טו:יא) | equivalent | `פֶּלֶא` הוא מעשה שמעבר לסדר הרגיל; בשמות – מעשה האל, כאן – מעשה החכם, ש"נהיה בימי" מלך. |
| 1,20 | [nb]-ꜥnḫ-tꜣ.du jst r =f jn ḥm =f šm r wn[,t] | [אדון]־עַנְח־תָּאוִי. והרי, הוד מלכותו הוא ההולך אל הַדְּבִיר | `וּדְבִיר בְּתוֹךְ הַבַּיִת מִפְּנִימָה הֵכִין` (מלכים א ו:יט) | equivalent | `דְּבִיר` הוא החדר הפנימי של המקדש, כמו *wn.t* המצרי. |
| 1,23 | [jst] [r] =[f] [mri̯.n]? ḥm,t Wbꜣ-jnr n[ḏs] | [והרי], [אהבה]? אשת וֶבָּאוֹנֶר [איש פשוט] | `וְאִישׁ אֲשֶׁר יִנְאַף אֶת אֵשֶׁת אִישׁ אֲשֶׁר יִנְאַף אֶת אֵשֶׁת רֵעֵהוּ מוֹת יוּמַת הַנֹּאֵף וְהַנֹּאָפֶת` (ויקרא כ:י) | divergence | גם כאן שני הנואפים מתים (3,22 ו־4,8–4,10), אבל לא בידי דין אלא בידי החרטום והמלך; המצרית אינה משתמשת כאן במלה ל"ניאוף", אלא "אהבה". |
| 2,6 | [m] [pꜣ] [š] ꜥḥꜥ.n [ḏd.n] [tꜣ] [ḥm,t] ⸢m⸣ =tn jri̯ =n ꜣ[,t] jm =s | [באגם]. ואז [אמרה] [האשה]: ראו, נעשה שעה בו | `לְכָה נִרְוֶה דֹדִים עַד-הַבֹּקֶר; נִתְעַלְּסָה בָּאֳהָבִים` (משלי ז:יח) | equivalent | הזמנת האשה הנואפת לבילוי של אהבה בהעדר הבעל (משלי ז:יט `כִּי אֵין הָאִישׁ בְּבֵיתוֹ`). |
| 2,21 | ꜥḥꜥ.n [ḏd.n] [Wbꜣ-jnr] jni̯ n =j ꜥ.[w]j […] n? hbnj | ואז [אמר] [וֶבָּאוֹנֶר]: הבא לי את ה*צמד*? […] של? הָבְנִים | `קַרְנוֹת שֵׁן וְהָובְנִים (וְהָבְנִים) הֵשִׁיבוּ אֶשְׁכָּרֵךְ` (יחזקאל כז:טו) | cognate | המלה המצרית *hbnj* היא מקורה של העברית `הָבְנִים` (ושל היוונית ἔβενος): מלה שאולה, ועמה סחורה – העץ השחור והקשה מנוביה. |
| 2,22 | ⸢ḥr⸣ ḏꜥmw msi̯ =[j] _b_ [h]ꜣb wp[w,tj] […] [ꜥḥꜥ.n] [jṯi̯].n =f [ms]ḥ | וזהב־לבן; *אוליד*? … [שלח] שליח […]. [ואז] [תפס] [תמסח] | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | גם כאן "נוצר" יצור מים, אבל בידי אדם, כחפץ קסם, וכבובה קטנה: הפועל *msj* "ללדת, ליצור" הוא פועל הלידה הרגיל (ולכן `אוליד`), לא פועל של בריאה ייחודית לאל. |
| 2,23 | n(,j) […] mḥ? 7 [wn.jn] =f [ḥr] šdi̯[.t] | של […], שבע *אמות*?. [ואז היה] קורא | `וַיַּעֲשׂוּ גַם הֵם חַרְטֻמֵּי מִצְרַיִם בְּלַהֲטֵיהֶם כֵּן` (שמות ז:יא) | divergence | החרטום פועל במלה מדוקלמת על חפץ: זה בדיוק מה שהמקרא מייחס ל"חרטומי מצרים". |
| 3,1 | ⸢m⸣ […] […] ꜥḥꜥ.n rḏi̯.n =f sw n pꜣ [ḥr,j-pr] ḏd.n =f n =f | ב[…] […]. ואז נתן אותו ל[סוכן הבית], ואמר לו: | `לֶךְ בֹּא אֶל הַסֹּכֵן הַזֶּה עַל שֶׁבְנָא אֲשֶׁר עַל הַבָּיִת` (ישעיהו כב:טו); `וַיֹּאמֶר לַאֲשֶׁר עַל בֵּיתוֹ` (בראשית מג:טז) | equivalent | `סֹכֵן` ו"אשר על הבית": תואר הממונה על משק הבית; כך גם , סוכן ביתו של יוסף במצרים. |
| 3,2 | j[r] [m]-ḫt hꜣi̯.w nḏs r p[ꜣ] š m[j] n,t-ꜥ.pl =f | הנה, אחרי שירד האיש הפשוט אל האגם כמנהגו | `עַל נַהֲרֹתָם עַל יְאֹרֵיהֶם וְעַל אַגְמֵיהֶם` (שמות ז:יט) | equivalent | ה"אגמים" של מצרים במכת הדם. |
| 3,3 | n.t rꜥ nb kꜣ =k ḫꜣꜥ =k [pꜣ] [m]sḥ | של כל יום – אז תטיל אתה [את ה]תמסח | `קַח אֶת מַטְּךָ וְהַשְׁלֵךְ לִפְנֵי פַרְעֹה יְהִי לְתַנִּין` (שמות ז:ט) | divergence | אותו מבנה: "הטל – ויהיה"; כאן מוטל חפץ מעשה ידי אדם ונהיה לתמסח, שם מוטל מטה ונהיה לתנין. (`הִשְׁלִיךְ` אינו בשורה: בקורפוס המצרי הוא שמור ל־*qmꜣm*; *ḫꜣꜥ* "להטיל" = `הֵטִיל`.) |
| 3,4 | [n] [mnḥ] r-sꜣ =f šꜣs pw jri̯.n pꜣ [ḥr,j-pr] jṯi̯.n =f | [של] [שעווה] אחריו. שָׁט [סוכן הבית], תפס | `וַיַּשְׁלֵךְ אַהֲרֹן אֶת מַטֵּהוּ לִפְנֵי פַרְעֹה וְלִפְנֵי עֲבָדָיו וַיְהִי לְתַנִּין` (שמות ז:י) | cognate | שם המטה נהיה לתנין לפני פרעה; כאן תמסח של **שעווה** – חומר שנמס באש ובחום, החומר הרגיל של בובות הקסם המצריות. |
| 3,13 | n(,j) mnḥ r-sꜣ =f r mw ꜥḥꜥ.n [ḫpr.n] =⸢f⸣ ⸢m⸣ msḥ n(,j) mḥ 7 | של שעווה אחריו אל המים – ואז [נהיה] לתמסח של שבע אמות | `וַיַּשְׁלֵךְ אַהֲרֹן אֶת מַטֵּהוּ לִפְנֵי פַרְעֹה וְלִפְנֵי עֲבָדָיו וַיְהִי לְתַנִּין` (שמות ז:י); `וַיַּשְׁלִיכוּ אִישׁ מַטֵּהוּ וַיִּהְיוּ לְתַנִּינִם` (שמות ז:יב) | equivalent | "הטיל … ונהיה ל־": *ḫpr m* = `וַיְהִי לְ־`, באותו תחביר; וגם  – החרטומים עושים כמוהו. זו ההקבלה החזקה ביותר של הקטע: הפלא של חרטום מצרי – חפץ מוטל שנהיה ליצור מים גדול – הוא אותו פלא ששמות ז מספר על אהרן ועל חרטומי מצרים, והמלה העברית `תַּנִּין` עומדת שם במקום שבו המצרית אומרת *msḥ* |
| 3,13 | n(,j) mnḥ r-sꜣ =f r mw ꜥḥꜥ.n [ḫpr.n] =⸢f⸣ ⸢m⸣ msḥ n(,j) mḥ 7 | של שעווה אחריו אל המים – ואז [נהיה] לתמסח של שבע אמות | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | התנין "הגדול" של בראשית נברא בדבר האל, לא נעשה מבובה בידי קוסם. |
| 3,23-24 | ẖr(,j)-ḥ[b-ḥr,j-tp] | הכוהן־[הקורא] [החרטום] | `וַיִּשְׁלַח וַיִּקְרָא אֶת כָּל חַרְטֻמֵּי מִצְרַיִם וְאֶת כָּל חֲכָמֶיהָ` (בראשית מא:ח); `וַיַּעֲשׂוּ גַם הֵם חַרְטֻמֵּי מִצְרַיִם בְּלַהֲטֵיהֶם כֵּן` (שמות ז:יא) | cognate | העברית `חַרְטֹם` שאולה מן המצרית *(ẖry-ḥb) ḥry-tp*, תואר הכוהן הקורא הראשי, דוגמת וֶבָּאוֹנֶר; וגם  – החרטומים שהפכו את מטותיהם לתנינים. |
| 4,1 | Nb-kꜣ mꜣꜥ-ḫrw smwn msḥ p⟨w⟩ nḥꜣ ksi̯.t | נֶבְּקָה אמיתי־הקול: אכן, תמסח מסוכן הוא! התכופף | `תִּמְשֹׁךְ לִוְיָתָן בְּחַכָּה; וּבְחֶבֶל תַּשְׁקִיעַ לְשֹׁנוֹ` (איוב מ:כה) | equivalent | אימת המלך מפני יצור המים, ומולה מי ששולט בו ביד; באיוב רק האל יכול, כאן – החרטום. |
| 4,3 | m ḏr,t =f msḥ n(,j) mnḥ wn.jn ẖr(,j)-ḥb-ḥr,j-tp Wbꜣ-jnr | בידו תמסח של שעווה. ואז היה הכוהן־הקורא החרטום וֶבָּאוֹנֶר | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג) | divergence | שם האל שובר את ראשי התנינים, כאן אדם מחזיר את התמסח לבובה ביד אחת |
| 4,3 | m ḏr,t =f msḥ n(,j) mnḥ wn.jn ẖr(,j)-ḥb-ḥr,j-tp Wbꜣ-jnr | בידו תמסח של שעווה. ואז היה הכוהן־הקורא החרטום וֶבָּאוֹנֶר | `וַיִּבְלַע מַטֵּה אַהֲרֹן אֶת מַטֹּתָם` (שמות ז:יב) | divergence | גם שם הסיפור נגמר כשהיצורים חוזרים להיות מטות. |
| 4,6 | msḥ jni̯ n =k pꜣy =k hꜣi̯.t pw jri̯.n pꜣ msḥ | תמסח: הבא לך את שלך! ירד התמסח | `וַיְבָרֶךְ אֹתָם אֱלֹהִים לֵאמֹר פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים` (בראשית א:כב) | divergence | גם כאן מלך פונה בדיבור ישיר אל יצור המים, אבל לא כדי לברכו: הוא מוסר לו את טרפו. בבראשית הדיבור אל התנינים הוא ברכה, ואין בה טרף. |
| 4,7 | r [ḏꜣ],t n.t pꜣ š n rḫ.tw bw šm.n =f jm ẖr =f | אל [עומק] האגם, ולא נודע המקום אשר הלך שם אתו. | `תְּהֹמֹת יְכַסְיֻמוּ; יָרְדוּ בִמְצוֹלֹת כְּמוֹ אָבֶן` (שמות טו:ה) | equivalent | הירידה אל עומק המים שאין חוזרים ממנו (ושם – המצרים עצמם) |
| 4,7 | r [ḏꜣ],t n.t pꜣ š n rḫ.tw bw šm.n =f jm ẖr =f | אל [עומק] האגם, ולא נודע המקום אשר הלך שם אתו. | `וַיְהִי יוֹנָה בִּמְעֵי הַדָּג שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת` (יונה ב:א) | divergence | יצור המים שבולע אדם, אבל שם מחזיר אותו. |
| 4,10 | ḫ,t jm =s [wn.jn] =[s] [m] ⸢qmꜣ.w⸣ n(,j) jtr,w m =k bj(ꜣ),yt | אש בה, [ואז] [היתה] למושלך של היאור. ראה, פלא | `וַיֹּאמֶר יְהוּדָה הוֹצִיאוּהָ וְתִשָּׂרֵף` (בראשית לח:כד) | divergence | גם שם האשה החשודה בזנות נידונה לשריפה, אבל בדבר ראש המשפחה, ובסוף היא מצילה את עצמה; כאן העונש מתבצע, והאפר – "מה שהושלך" – נזרק ליאור. |
| 4,10 | ḫ,t jm =s [wn.jn] =[s] [m] ⸢qmꜣ.w⸣ n(,j) jtr,w m =k bj(ꜣ),yt | אש בה, [ואז] [היתה] למושלך של היאור. ראה, פלא | — | cognate | `יְאֹר` – המלה המצרית *jtrw* (*jrw*) "נהר", דרך הצורה המאוחרת *jꜣr*: מלה שאולה. |
| 5,2 | wḏꜣ ḥm =k r š n(,j) pr-ꜥꜣ ꜥnḫ-(w)ḏꜣ-s(nb) ꜥpr n =k bꜣw | ייסע הוד מלכותך אל אגם פַּרְעֹה, חיים, שלום, בריאות! תצויד לך סירה | — | cognate | `פַּרְעֹה` – *pr-ꜥꜣ* "הבית הגדול": בממלכה התיכונה זה שם הארמון; רק מן הממלכה החדשה ואילך הוא שם המלך עצמו, כמו במקרא. |
| 5,14 | m-ḫd m-ḫnt wn.jn jb n(,j) ḥm =f nf[r] n | במורד ובמעלה, ואז היה לב הוד מלכותו טוב בגלל | `כְּטוֹב לֵב הַמֶּלֶךְ בַּיָּיִן` (אסתר א:י) | equivalent | "טוב לב המלך": אותו צירוף לשמחת המלך במשתה; בשני הסיפורים מלך בחצרו, נשים יפות, ומשאלתו מתמלאת. |
| 6,9 | rmn n(,j) mw n(,j) pꜣ š ḥr wꜥ =sn gmi̯.n =f pꜣ nḫꜣ,w | חצי מי האגם על האחד מהם, ומצא הוא את תליון־הדג | `וַיָּשֶׂם אֶת הַיָּם לֶחָרָבָה; וַיִּבָּקְעוּ הַמָּיִם` (שמות יד:כא); `וְהַמַּיִם לָהֶם חוֹמָה מִימִינָם וּמִשְּׂמֹאלָם` (שמות יד:כב) | divergence | גם כאן מים "מושמים" (*rḏj*, `שם` כמו `וַיָּשֶׂם`) והקרקעית נחשפת; אבל המים אינם "נבקעים" ואינם עומדים כ"חומה" משני צדדים: חצי מונח על החצי השני, כמו בגד מקופל. והמטרה – תליון של נערה, לא הצלת עם. מלות שמות יד (`בקע`, `חומה`, `יבשה`, `חרבה`) אינן בשורה (§11.4). |
| 7,2 | nḏs n(,j) rnp,t 110 jw =f ḥr wnm tʾ 500 rmn n(,j) jwꜣ m | איש פשוט בן מאה ועשר שנה; והוא אוכל לחם חמש מאות, חצי שור | `וַיָּמָת יוֹסֵף בֶּן מֵאָה וָעֶשֶׂר שָׁנִים` (בראשית נ:כו) | equivalent | מאה ועשר שנים הן אורך החיים האידאלי במצרים; כך חי יוסף, איש מצרים של המקרא. |
| 7,22 | n(,j) jm,j.w.pl-šms,w =f zbi̯ =f tw m ꜥḥꜥ,w nfr n jt.w.pl =k | של אלה אשר בפמלייתו; ויוביל אותך בחיים טובים אל אבותיך | `וְאַתָּה תָּבוֹא אֶל אֲבֹתֶיךָ בְּשָׁלוֹם תִּקָּבֵר בְּשֵׂיבָה טוֹבָה` (בראשית טו:טו) | equivalent | הזקנה הטובה וההליכה "אל האבות" כסוף המבורך של חיים ארוכים. |
| 8,10 | pr-ꜥꜣ ꜥnḫ-(w)ḏꜣ-s(nb) sṯꜣ.jn.tw n =f Ḏdj ḏd.jn ḥm =f ptj st Ḏdj | פַּרְעֹה, חיים, שלום, בריאות. אז הובל אליו גֶ׳דִי. אז אמר הוד מלכותו: מה זה, גֶ׳דִי, | — | cognate | `פַּרְעֹה` – *pr-ꜥꜣ*: כאן עוד שם הארמון ("אולם־העמודים של פַּרְעֹה"), לא שם המלך. |
| 8,16 | nkn =f ḏd.jn Ḏdj n-js n r(m)t.pl j (j)ty ꜥnḫ-(w)ḏꜣ-s(nb) nb =⸢j⸣ | עונשו! אז אמר גֶ׳דִי: לא לבני האדם, הו הריבון, חיים, שלום, בריאות, אדוני! | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ: כִּי בְּצֶלֶם אֱלֹהִים עָשָׂה אֶת הָאָדָם` (בראשית ט:ו) | divergence | בשני הטקסטים יש לאדם מעמד מיוחד בגלל קרבתו לאל; אבל בבראשית הנימוק בא כדי לחייב מיתת הרוצח, וכאן כדי לפטור את הנידון למוות מניסוי. |
| 8,17 | m =k n wḏ.tw jri̯.t mn,t jr,j n tꜣ ꜥw,t šps.t ꜥḥꜥ.n | ראה, לא צֻוָּה לעשות כדבר הזה לצאן הנכבד! ואז | `עַמּוֹ וְצֹאן מַרְעִיתוֹ` (תהלים ק:ג) | equivalent | בני האדם כ"צאן" האל; כך גם מריכרע E130 `בְּנֵי הָאָדָם, צֹאן הָאֵל`. |
| 9,5 | n.t ds m ꜥ,t sjp.tj rn =s m Jwn,w ⟨m⟩ =⟨k⟩ ⟨st⟩ m tꜣ ꜥfd,t ḏd.jn Ḏdj | של צור, בחדר ששמו "הביקורת", באוֹן; ראה, הוא בארגז. אז אמר גֶ׳דִי: | — | equivalent | `אוֹן` – *Jwnw*, עיר רא (הליופוליס); במקרא עיר הכוהנים של פוטיפרע (בראשית מא:מה), וכאן מקום סוד תחות. |
| 9,10 | jwr.tj m ẖrd.w.pl 3 n(,j) Rꜥ nb-Sꜣẖb,w j[w] ḏd.n =f r =s jw =sn | הרה בשלושה ילדים של רַא אדון־סָחְבּוּ. הוא אמר עליה: יהיו הם | `וּשְׁנֵי לְאֻמִּים מִמֵּעַיִךְ יִפָּרֵדוּ` (בראשית כה:כג) | divergence | נבואת אל על ילדים שבבטן אשה ועל גורלם; אבל כאן האל הוא גם האב. |
| 9,18 | ḫpr mw n.w mḥ 4 ḥr ṯs.w.pl n.w ꜥꜣḏ.du? wḏꜣ pw jri̯.n ḥm =f r ꜥḥ =f | שיהיו מים של ארבע אמות על שרטונות תעלת־שני־הדגים?. נסע הוד מלכותו אל ארמונו. | `וַיָּשֶׂם אֶת הַיָּם לֶחָרָבָה` (שמות יד:כא) | divergence | כאן ההפך: הקוסם מבטיח להעלות מים על הקרקע היבשה, כדי שהמלך יוכל לשוט. |
| 9,22 | R(w)d-ḏd,t ḥr šni̯.t =s qsn mss =s ḏd.jn ḥm n(,j) Rꜥ nb-Sꜣẖbw | רוּדְגֶ׳דֶת סובלת – קשה לידתה. אז אמר הוד מלכות רַא אדון־סָחְבּוּ | `וַתֵּלֶד רָחֵל וַתְּקַשׁ בְּלִדְתָּהּ` (בראשית לה:טז) | equivalent | לידה קשה, ולידה המיילדת (בראשית לה:יז). |
| 9,23 | n ꜣs,t Nb,t-ḥw,t Msḫn,t Ḥq,t H̱nm,w ḥwj ꜣ šꜣs =tn smsi̯.y =tn | לאִיסִיס, לנֶפְתִּיס, למֶסְחֶנֶת, לחֶקֶת ולחְנוּם: הלוואי תָּשׁוּטוּ, תיילדו | `וַיֹּאמֶר מֶלֶךְ מִצְרַיִם לַמְיַלְּדֹת הָעִבְרִיֹּת` (שמות א:טו) | divergence | גם שם מלך מדבר אל מיילדות; אבל שם כדי להמית את הבנים, וכאן אל שולח אלות כדי לילד את המלכים העתידים. |
| 10,3 | wn.jn =sn ḥr mz n =f mnj,t⟨.pl⟩ =sn sḫm.pl ꜥḥꜥ.n ḏd.n =f n =sn | ואז היו הן מגישות לו את קולרי־המֶנַת שלהן ואת מְנַעַנְעֵיהֶן. ואז אמר הוא להן: | `וּבְתֻפִּים וּבִמְנַעַנְעִים וּבְצֶלְצֱלִים` (שמואל ב ו:ה) | equivalent | `מְנַעַנְעִים`, כלי ניעור של מקדש, כמו הסיסטרום המצרי. |
| 10,9 | jmi̯ =k wsr m ẖ,t =s m rn =k pwy n(,j) Wsr-r≡f wꜥr.jn | אל תתחזק בבטנה בשמך זה, וֹסֶר־רֶף! אז מיהר | `וַתִּקְרָא שְׁמוֹ רְאוּבֵן: כִּי אָמְרָה כִּי רָאָה יְהוָה בְּעָנְיִי` (בראשית כט:לב) | equivalent | שם הניתן בלידה במשחק מלים על דברי האם; כאן על דברי המיילדת־האלה. |
| 10,12 | ẖpꜣ =f rḏi̯ ḥr jfdj m ḏb,t ꜥḥꜥ.n mz.n | טבורו, והונח על מטלית־פשתן על הלבנה. ואז ניגשה | `וּרְאִיתֶן עַל הָאָבְנָיִם` (שמות א:טז) | equivalent | `הָאָבְנָיִם`, אבני הלידה, הן "לבני הלידה" המצריות (*ḏb.t*) שעליהן ישבה היולדת. |
| 11,5 | ꜥḥꜥ.n ḏd.n =sn nḏm jb =k Rꜥ-wsr m =k msi̯ n =k | ואז אמרו הן: יִנְעַם לבך, רַאוֹסֶר! ראה, נולדו לך | `אַל תִּירְאִי כִּי גַם זֶה לָךְ בֵּן` (בראשית לה:יז) | equivalent | בשורת המיילדת בסוף לידה קשה. |
| 11,14 | jt ꜥḥꜥ.n rḏi̯.n =sn jwi̯,t p,t m ḏꜥ ḥr ḥw,yt | שעורה. ואז גרמו הן שיבואו השמים בסערה ובגשם. | `וְהַשָּׁמַיִם הִתְקַדְּרוּ עָבִים וְרוּחַ וַיְהִי גֶּשֶׁם גָּדוֹל` (מלכים א יח:מה) | equivalent | סערה וגשם כאות; כאן אות קטן, כדי לתרץ את החזרה לבית. |
| 11,18 | ꜥḥꜥ.n R(w)d-ḏd,t wꜥb.n =s m ⸢wꜥb⸣ n(,j) hrw | ואז נטהרה רוּדְגֶ׳דֶת בטהרה של ימים | `תֵּשֵׁב בִּדְמֵי טָהֳרָה` (ויקרא יב:ד) | equivalent | ימי טהרה קצובים ליולדת; כאן ארבעה־עשר ימים, בתורה שלושים ושלושה (ושבעה של טומאה, ויקרא יב:ב). |
| 11,24 | ḫn,yt.pl jw =f m ꜥ,t ḥr ḫtm =sn ꜥḥꜥ.n ḏd.n R(w)d-ḏd,t | המנגנות האלה, והיא בחדר, בחוֹתָמן. ואז אמרה רוּדְגֶ׳דֶת: | — | cognate | `חוֹתָם` – *ḫtm* "חותם": מלה שאולה מן המצרית. |
| 12,19 | sj msḥ šꜣs pw jri̯[.y] [r] ḏd st n R(w)d-ḏd,t jn | אותה תמסח. שָׁטוּ לומר זאת לרוּדְגֶ׳דֶת – בידי | `וַיַּשְׁלֵךְ אַהֲרֹן אֶת מַטֵּהוּ … וַיְהִי לְתַנִּין` (שמות ז:י) | divergence | התמסח של הפלא הראשון (3,13) חוזר כאן בלי קוסם: יצור המים הוא שליח הצדק. (`תַּנִּין` אינו בשורה, §5.1.) |
| 12,20 | pꜣy =s ⸢sn⸣ gmi̯.n =f R(w)d-ḏd,t ḥmsi̯.tj tp =s ḥr mꜣs,t =s | אחיה. מצא הוא את רוּדְגֶ׳דֶת יושבת, ראשה על ברכיה, | `וַיָּשֶׂם פָּנָיו בֵּין בִּרְכָּו` (מלכים א יח:מב) | equivalent | תנוחת האבל או התפילה העמוקה. |

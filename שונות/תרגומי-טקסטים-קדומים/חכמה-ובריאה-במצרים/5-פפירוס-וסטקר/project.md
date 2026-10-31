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
`<!-- טרם תורגם: 8,1–12,25 -->`. Review passes not yet done (next session).

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

## Parallels index

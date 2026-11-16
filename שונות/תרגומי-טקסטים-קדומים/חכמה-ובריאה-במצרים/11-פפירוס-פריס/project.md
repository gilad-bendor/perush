# Project 11: papyrus Prisse – the end of Kagemni, the Instruction of Ptahhotep (`פפירוס פריס`)

## Scope (Round 9 run 4, 2026-11-16)
The whole literary text of papyrus Prisse (Paris BN 183–194; 12th dynasty, c. 1900 BCE – the oldest literary papyrus
with a complete instruction): KEY `KG`, the end of the Instruction for Kagemni (cols. 1–2, 21 lines; its beginning was
lost before the roll was reused), and KEY `PH`, the Instruction of Ptahhotep in version P (cols. 4–19, 195 lines: the
prologue, 37 maxims, the epilogue on hearing, the colophon). Column 3 is blank in the papyrus. Labels: `renderings.md` §14.1.

## Base text
AED-TEI (TLA 2018, CC BY-SA 4.0): `../../sources/AED-TEI/Kagemni--pPrisse/` (KI7QRD7K55C6PJRUN5AFW6OFLI) and
`Ptahhotep--pPrisse/` (DKAFDVSXYFADJDS3Z3AOISAP4U); witnesses L1, L2, C (`egypt_tools.py data PH --wit`). Rank 3: the
TLA's German (`tr KG`, `tr PH`) after drafting; Lichtheim, Parkinson, Žába, Junge 2003 (OBO 193, open access) only
from memory or checked, never copied; Shupak's Hebrew (©) not consulted before drafting.

## What to look for (a brief says "look for", never "translate as")
- Ptahhotep's prologue on old age (PH 4,2–5,x): the body failing – Qoh 12:1–7 (the closing allegory of old age).
- "No limit is set to skill, no craftsman's skill is perfect" (PH 5,8–5,10); good speech hidden like greenstone, found
  with the maids at the grindstones.
- Maat "great and lasting" (PH maxim 5); the greedy man's end; the table of the great man (maxim 7 and KG 1,3–2,2) –
  Prov 23:1–3 `כִּי תֵשֵׁב לִלְחוֹם אֶת מוֹשֵׁל`.
- Love your wife, fill her belly, clothe her back (maxim 21) – Prov 5:18–19, Qoh 9:9.
- The son who hears and the son who does not (the epilogue, PH 15–19): hearing as the root of every good – Prov 1:8,
  4:1, 12:15, Deut 21:18 (the stubborn son).
- Kagemni: "the silent man is welcome"; the colophon's command that the children read it as written (KG 2,x).

## KG 1,1–2,9 and PH 4,1–8,14 (Round 9 run 4, translator 1)

### Scope
- **KG** (all 21 lines, `1,1`–`2,9`): the surviving end of the Instruction for Kagemni – the silent man, table manners
  with the crowd, the glutton and the drunkard, a last warning against pride in strength; then the narrative frame (the
  vizier hands the roll to his children, they read it; Huni dies, Snefru reigns, Kagemni becomes vizier) and the first
  words of the colophon (`jwi̯ =f pw`), after which the papyrus is lost. Well preserved; only 2,9's end is lost.
- **PH** `4,1`–`8,14` (56 lines incl. the TLA's `5,6-7`): the title, Ptahhotep's complaint of old age, the king's answer,
  the heading of the maxims, and maxims 1–14 (the three disputants, the leader and Maat, the great man's table, the
  messenger, the ploughman, the childless, the poor man who rose, "follow your heart", the son, the gate hall, the
  trusted man, the report to the lord), ending inside 8,14 (the next maxim begins). `9,1`–`19,9` remain undrafted
  (placeholder in the file).

### Sources consulted
The AED-TEI base through `egypt_tools.py data`; the TLA's German (`tr KG`, `tr PH 4,1 8,14`) after drafting each
section, quoted only from the tool output. The common readings (Lichtheim, Parkinson) only where sure and unquoted;
Shupak's Hebrew not consulted. Precedents through `lexmap`, `lex`, `freq`, `grep --all`.

### Decisions
**Fixed for the genre (proposed to bind AH, KH, NH, AD, AN, NF, KP and the rest of PH; see Proposals):**
- sbꜣ.yt (tla131390) `מוסר`; the title without ḥꜣ.t-ꜥ (PH 4,1 `sbꜣy,t n.t X`) = `מוסר X`; ḥꜣ.t-ꜥ m ṯz.w n md.t nfr.t
  (PH 5,6) = `ראשית אמרות הדבר הטוב`; sbꜣ (tla131210) `לימד` (`למד אותו`, `בלמדו`).
- sḏm (tla150560) `שמע` in every form (`שִׁמְעוּ`, `לאשר ישמע`, `השמיעה`, `השומע לבטנו`); sḏm.yw (tla150700, the
  hearers / judges) `השומעים`. The TLA's "gehorchen" is never rendered `ציית`: Hebrew `שמע` holds both.
- rḫ verb (tla95620) `ידע`; rḫ "knowledge" (tla95640) `דעת`; rḫ "knower" (tla95630) `היודע`; ḫm "the ignorant"
  (tla116920) `בור` (as `renderings.md` §14.3; AM 27.10–11 has `בַּעַר` – proposal below); ḫm verb "not know"
  (tla116910) `לא ידע` / `אינו־יודע` (`ḫm ḫ.t` = `אינו־יודע־דבר`, the opposite of rḫ-ḫ.t).
- ꜥꜣi̯ jb "great of heart = arrogant" (tla34750 + jb) = `יגדל לב` (`אל יגדל לבך`, KG 2,1; PH 5,8; 7,7): the Egyptian
  image kept, `גבה לב` only in the apparatus (Ps 131:1 [equivalent]). wr jb (PH 8,10, positive) `גדול הלב`; ṯꜣ jb
  (PH 5,11, presumptuous) `יזוח לב`.
- gr.w "the silent" (tla167800) `השותק`; gr verb (tla167750) `שתק`; gr "silence" (tla167760) `שתיקה` (AM precedent).
- The greed words, one Hebrew each: ꜥwn-jb (tla851288) `בצע־לב` (BD 23 precedent; the person `בעל בצע־הלב`); ꜣfꜥ
  "gluttony" (tla121) `גרגרנות`, ꜣfꜥ "glutton" (tla122) `גרגרן`; skn "greedy eater" (tla650002) `רעבתן`; ḥnti̯
  (tla107400) `להוט` (MR E39); ꜣḫf (tla256) `בולמוס`; tḫ.w "drunkard" `שיכור`. Rejected: `חמדן` (root חמד, gated),
  `זולל` (BD's ꜣẖb.w "swallowers" and NU9 144.14 already use it; it would also pre-empt Prov 23:20–21, kept for the
  apparatus), `תאוותן` (AM's snk.tj is `התאווה`).
- mꜣꜥ.t `אמת` (corpus); wꜣḥ "endure" `התמיד` (`מתמיד תוקפה`, `מתמידה`); spd.t `תוקף`; hp (tla98260) `חוק` (MR E42).
- The great man and his table: wr (tla47280) `הגדול`; ṯ.t `שולחן`; ḥmsi̯.w (tla851289) `היושבים` (root of ḥmsi̯ `ישב`);
  kꜣ `כָּא`, bw.t kꜣ `תועבת הכָּא`; fnḏ `אף`; m-bꜣḥ=k `לפניך` (AM 23.17 precedent `הבט אל … שלפניך`).
- The colophon: `jwi̯ =f pw` = `בא הוא` (KG 2,9), the Sinuhe B311 Hebrew (`בא הוא, מתחילתו עד קצו, כפי שנמצא בכתב.`)
  for the full formula (PH 19,9 and the later texts).
- Speech and court: ḏꜣjs.w "disputant" `מתווכח`; wfꜣ `דיון`; smj "report" `דיווח`; wpw.tj `שליח`, wpw.t `שליחות`; jꜣš
  "summon, call" `הזמין` (njs keeps `קרא` – HC precedent – and šdi̯ "read" also `קרא`: natural Hebrew polysemy, noted);
  qnb.t `מועצת־השופטים` (AM); sḥ `מועצה`; rwy.t `אולם־השער`; kfꜣ-jb `נאמן־לב`; ꜥm-jb `הסתרה`.
- Titles: ṯꜣ.tj `וזיר`; (j)m(,j)-rʾ-nʾ.t `הממונה על העיר`; jty `הריבון` (WE); (j)r(,j)-pꜥ.t `הנסיך`; ḥꜣ.tj-ꜥ `הרוזן`;
  jt-nṯr `אבי־האל` (AM); mri̯-nṯr `אהוב־האל`; zꜣ-nsw.t-smsw-n-ẖ.t=f `בן־המלך הבכור מבטנו`; bꜣk-jm `העבד הזה` (SI).
- Other recurring words fixed here: ḫsf `ייסר` (punish) / `הדף` (repel) by sense (the MR split); ḏbꜥ verb "point the
  finger" `הורה באצבע`; jdn `מילא את מקום`; dꜣjr-jb `כיבוש הלב`; ꜣt / ꜣd jb (tla342) `התפרץ` (KG 1,9 and PH 6,1:
  the same lemma); zni̯/sni̯ (tla854546) `חרג` (`עבר על` stays thi̯'s, §11); swꜣ `חלף`; rmni̯ `איזן` / rmnw.t `דרגה`;
  jꜥi̯ jb "wash the heart" `רחץ לב` (kept as an image; 6,2 and 7,4); ḥr "scheme" (tla109010) `מזימה`; sḫr (tla142800)
  `עצה` everywhere (AM; KG 2,3 too, "the counsel/ways of men"); sšm.y `מנהיג`, sšm "conduct" `הנהגה`, sšm "lead"
  `הנהיג`; jqr adj./verb `מוכשר`, jqr noun `מעלה`; nḏs `פשוט`; ẖz / ẖzi̯ / ẖs `עלוב`; ḥwr.w `חלש`; snḏ.w / snḏ `ירא`;
  mtj `דייק`, mty.t-jb `דיוק־לב`; hrw `שליו`, hr.t `שלווה`; ẖrd and ms.w both `ילד` (WE / AM precedents); mzḥ `תמסח`;
  wꜣḏ `האבן־הירוקה` (UN8); tp-ḥsb `התקן` (not `אמת־המידה`: `אמת` is mꜣꜥ.t's); ḫꜣy `חבל־המדידה`; ṯtf `שפע`; stj
  "shoot; ejaculate" `ירה` (PH 6,11 and 7,11: the pun kept); mnj "moor; die" `עגן` (KG 2,8; PH 6,6 `העגינה`).
- Verifier-driven choices (no bending of sense): `לבסוף` → `באחרונה` (KG 2,4, the `סוף` loan gate), `מעולם לא` →
  `מימיה לא` (PH 6,6, 6,9: `עולם` never), `הופרעה` → `נתערערה` (PH 6,5: the `פרעה` gate fires inside the word).

### Open decisions for the user
- KG 2,6 `st`: the book ("they put it on their bellies" = took it to heart; chosen, with `?`) or "themselves"
  (prostration; the TLA).
- PH 6,7 `ḏd w z`: the TLA's negation ("a man will not say: it is my father's land"; followed) or "a man says".
- PH 5,4–5,5 `ẖr-ḥꜣ.t`: "teach him first" (TLA) or "the speech of the past" (the usual reading; chosen, `מקדם`).
- ꜥꜣ jb: `יגדל לב` (chosen, the Egyptian image) or `גבה לב` (the Hebrew idiom; would be [equivalent] Ps 131:1, Prov 16:5).

### Progress log
- 2026-11-16: KG drafted (21), `fill`, `verify KG`; TLA compared; PH 4,1–8,14 drafted (56), `fill`, `verify PH`; TLA
  compared line by line.
- Pass (a) fidelity: the TLA comparison changed PH 5,6 (`ḏd n=f` stative: `נאמר לו`), 5,11–5,12 (rmni̯ "balance":
  `יאזן` / `איזן`; `ḫm ḫ.t pw` as the quoted label), 6,2–6,3 (ḥwr.w jb "the weak-minded" is one phrase; jꜥi̯ jb n X
  "wash X's heart" = satisfy him), 6,5–6,6 (swꜣ.t … m ḥr n "what passes before the face of"), 6,7 (negation), 7,4
  (wḥm "report", not after venting), 7,5 (ḥry.t "respect"), 7,6 (twꜣ, "many a father"), 7,10 (smꜣm: "a son – may the
  god favour him"), 7,12 (wdi̯ r=k "who sets himself against you"), 8,2/8,4 (rwy.t `אולם־השער`), 8,7–8,8 (the lord's
  question); KG 1,9 (`ולבו נח`), 1,3 (`*אלא בעת עניינו*` without `?`). Every תרגומים bullet quotes the tool's German.
- Pass (b) consistency: zni̯ `חרג` (KG 2,5 aligned with PH 7,4), sḫr `עצה` (KG 2,3 aligned), the disputant formula
  `אם תמצא מתווכח ברגעו` ×4 identical, `רחב (ה)מקום` KG 1,2 / PH 8,4, `צועד חופשי` KG 1,7 / PH 8,14, `אל יגדל לבך`
  ×3; every new Hebrew string grepped (`grep`, `lexmap`).
- Pass (c) Hebrew: read the built `translation-KG.rtl.md` / `translation-PH.rtl.md`; fixed `שתיהיה` (PH 5,13), the
  stray `>` of PH 5,9.
- `verify KG --strict`: 0 problems; `verify PH`: 0 problems (139 lines placeholdered); `check_bible_quotes.py` on the
  annotated, intro and built files: 0 problems (eight quotations corrected against the text: maqaf, ketiv/qere,
  Jer 9:22 `יִתְהַלֵּל`).

### The text on its own terms
- **Silence as a career** (KG 1,1; 2,1; PH 5,13–5,14; 7,5; 8,8): "the tent is open to the silent", "be silent with
  your mouth – and you will be called"; the silent man defeats his equal, earns "awe", has a good name without speaking.
- **Self-control is a conquest of the heart** (`dꜣjr-jb`, KG 1,4 and PH 5,12): "a short moment" of restraint against a
  life-long reproach; the heart can also "burst out" (ꜣt / ꜣd jb) at meat or at a weak opponent – the same verb.
- **The body as a social being**: the belly that "strides free" (KG 1,7), the man who "hears his belly" (PH 8,9–8,11:
  a pun on sḏm, the key word of the whole genre), the children who "put the book on their bellies" (KG 2,6).
- **Old age, organ by organ** (PH 4,2–5,2): eyes, ears, heart, bones, taste, nose – "the good has become bad"; the old
  vizier asks for a "staff of old age", i.e. a son.
- **Knowledge is learned, and found low** (PH 5,6–5,10): "no one is born wise", "the limit of skill is not reached",
  good speech is hidden like greenstone yet found with the maids at the grindstones.
- **Maat outlasts greed** (PH 6,5–6,10): "great is Maat, lasting its effect, undisturbed since Osiris"; wrong never
  brings its venture to harbour; the robber ends up giving to a stranger; "what god commands is what happens".
- **The Nile as the image of fate** (KG 2,8 "Huni moored" = died; PH 6,6; 8,1–8,2 "whom they leave boatless finds no
  crossing"): life is a voyage.
- **The ka at the table** (PH 6,11–7,3): the host's ka stretches out his arms to give; staring "is the abomination of the
  ka"; the son is what "your ka shot" (7,11).
- **Fate before the womb** (PH 7,12–8,1): the bad son "had harm commanded for him in the belly"; education and destiny
  side by side.
- **The book as an object** (KG 2,4–2,7): a written roll, read aloud, lived "standing and sitting"; the colophon "it has
  come".

### Key parallels
- PH 6,10 ↔ Prov 19:21 `רַבּוֹת מַחֲשָׁבוֹת בְּלֶב אִישׁ וַעֲצַת יְהוָה הִיא תָקוּם` (and Prov 16:9): human schemes vs the
  god's command [equivalent] – the closest contact in the range.
- PH 6,11 / KG 1,3–1,9 ↔ Prov 23:1–3, 20–21: the great man's table; the glutton and the drunkard, meat and wine
  [equivalent]; AM 23.13–18 is the intermediate link.
- PH 4,3–5,2 ↔ Qoh 12:3 and 2 Sam 19:36 (Barzillai): old age counted by the failing senses [equivalent].
- PH 7,9 ↔ Qoh 11:9 `וְהַלֵּךְ בְּדַרְכֵי לִבְּךָ` (and 9:7): "follow your heart" [equivalent].
- PH 7,12–8,1 ↔ Deut 21:18 (the stubborn son) [divergence]; Ps 58:4 `תָּעוּ מִבֶּטֶן` [equivalent].
- PH 5,8 ↔ Jer 9:22, Prov 3:7: pride in one's knowledge [equivalent].
- PH 6,7 ↔ 1 Kgs 21:3 (`נַחֲלַת אֲבֹתַי`) [divergence].
- KG 2,5 ↔ Deut 4:2 (do not add or take away) [equivalent].

### Lines shared with other texts
- The disputant formula `jr gmi̯ =k ḏꜣjs,w m ꜣ,t =f` (PH 5,10; 5,13; 6,1) = `אם תמצא מתווכח ברגעו` identically.
- KG 2,9 `jwi̯ =f pw` copies SI B311's first words (`בא הוא`); PH 19,9 should copy SI B311 whole.
- PH 6,11 `gmḥ=k r n,tt m-bꜣḥ=k` – AM 23.17's `הבט אל … שלפניך` wording kept ([מקבילה: AM 23.17] in the entry).
- `wsḫ s,t` KG 1,2 / PH 8,4 `רחב (ה)מקום`.

### Proposals for the shared renderings
1. sḏm (tla150560) = `שמע` in every form and person; sḏm.yw (tla150700) = `השומעים`; sḏm.tj=fj = `אשר ישמע`.
2. rḫ (tla95620) `ידע`; rḫ (tla95640) `דעת`; rḫ (tla95630) `היודע`; ḫm (tla116920) `בור`; ḫm (tla116910) `לא ידע` /
   `אינו־יודע`; `ḫm ḫ.t` = `אינו־יודע־דבר`. **Harmonize AM 27.10–11 `הבער` → `הבור`** (one lemma, one Hebrew; `בַּעַר`
   is Proverbs' word and "brutish", ḫm is "unschooled").
3. ꜥꜣi̯ jb (tla34750 + jb) = `יגדל לב` (`אל יגדל לבך`); wr jb = `גדול הלב`; ṯꜣ jb = `יזוח לב`.
4. gr.w (tla167800) `השותק`, gr (tla167750) `שתק`, gr (tla167760) `שתיקה` (the corpus, confirmed).
5. ꜥwn-jb (tla851288) `בצע־לב`, the person `בעל בצע־(ה)לב` (BD 23; AM ꜥwn.tj `בצען`); ꜣfꜥ (tla121) `גרגרנות`, ꜣfꜥ
   (tla122) `גרגרן`; skn (tla650002) `רעבתן` (note: AM 8.2 used `רעבתן` once for ḥnwtj – harmonize there if needed);
   ḥnti̯ (tla107400) `להוט`; ꜣḫf (tla256) `בולמוס`; tḫ.w `שיכור`.
6. mꜣꜥ.t `אמת` (confirmed); wꜣḥ (tla43010) "endure" `התמיד`; hp (tla98260) `חוק`; nḏy.t `שפלות`; ḏꜣy.t `קלקלה`.
7. wr (tla47280) "the great man" `הגדול`; ṯ.t `שולחן`; ḥmsi̯.w (tla851289) `היושבים`; bw.t kꜣ `תועבת הכָּא`.
8. Titles: ṯꜣ.tj (tla174090) `וזיר`; (j)m(,j)-rʾ-nʾ.t (tla400045) `הממונה על העיר`; (j)r(,j)-pꜥ.t (tla94060) `הנסיך`;
   ḥꜣ.tj-ꜥ (tla100520) `הרוזן`; mri̯-nṯr (tla550334) `אהוב־האל`; zꜣ-nsw.t-smsw-n-ẖ.t=f (tla851286) `בן־המלך הבכור
   מבטנו`; bꜣk-jm `העבד הזה`; jty `הריבון`.
9. The title formula without ḥꜣ.t-ꜥ: `sbꜣy.t n.t X` = `מוסר X`; ḥꜣ.t-ꜥ m ṯz.w n md.t nfr.t = `ראשית אמרות הדבר הטוב`;
   md.t nfr.t `הדבר הטוב`; sbꜣ (tla131210) `לימד`.
10. **The colophon** (§14.4): `jw(i̯)=f pw ḥꜣ.t=f r pḥ.wj=f mj gmi̯.yt m zẖꜣ` = SI B311 byte for byte: `בא הוא, מתחילתו עד
    קצו, כפי שנמצא בכתב.` (KG 2,9 has only `בא הוא`). Suggest adding it to §14.4 as a fixed string.
11. ḏꜣjs.w (tla550443) `מתווכח`; smj verb (tla134820) `דיווח`; wpw.tj `שליח`; jꜣš (tla40890) `הזמין`; kfꜣ-jb (tla851296)
    `נאמן־לב`; zni̯ (tla854546) `חרג` (so that `עבר על` stays thi̯'s); sḫr (tla142800) `עצה` everywhere; sšm.y `מנהיג`,
    sšm (tla144990) `הנהגה`; jqr (tla400076/tla32240) `מוכשר`, jqr (tla32290) `מעלה`.
12. tp-ḥsb (tla171270) `התקן` (`אמת־המידה` avoided: `אמת` is mꜣꜥ.t's); ḫꜣy `חבל־המדידה`.

### Lessons for the guidelines
- The TLA German must be quoted from `tr`'s output after drafting, never anticipated: a first pass of KG's תרגומים
  bullets written from memory had to be redone line by line (caught before hand-off).
- The loan-word gates fire inside ordinary words (`לבסוף` ⊃ `סוף`, `הופרעה` ⊃ `פרעה`, `מעולם` ⊃ `עולם`): translators of
  the Instructions should expect these in narrative frames and choose `באחרונה`, `נתערערה`, `מימיו לא`.

## PH 9,1–14,13 (Round 9 run 4, translator 1, part 2)

### Scope
76 entries (`9,1`–`14,13`, with the TLA's `9,12-13`; there is no `13,7`), the middle maxims: the leader's lasting deed,
the petitioner, the women of another man's house, greed (ꜥwn-jb) as an incurable illness, the wife, the confidants,
rumour and the "hot-bellied", silence and speech in council, the high heart and the hot heart, the great man's ka and
food, the judge and the balance, the newly rich, the superior, the neighbour, the forbidden intercourse, testing a friend,
the bread that goes out of the storehouse. Well preserved; 10,12, 11,7–11,8 and 12,5 are obscure (marked `?` / *italics*).
`<!-- טרם תורגם: 15,1–19,9 -->` stays at the end.

### Sources consulted
As for part 1: `data`, `lexmap`, `lex`, `grep`; `tr PH 9,1 14,13` after drafting each third, quoted only from the output.

### Decisions
- Kept from part 1 and §14.5.1: sḏm `שמע` (9,3; 9,7; 12,6 "who hears his heart"; 12,13; 14,2 `עד שתישמע`), gr `שתק`
  / `שתיקה`, ꜥwn-jb `בצע־לב` and the verb ꜥwn `בצע` (10,1–10,8), ḥnti̯ `להוט`, skn (verb tla146840) `תאווה` (9,13),
  ḏꜣjs `התווכח` (14,8), sḫr `עצה` (but 9,13 "matter": see Proposals), ḫsf `הדף` (12,6, aligned with 5,12) / `ייסר`.
- New recurring words: ḫnms "friend" `רֵעַ` (★, §14.3), ḫnms "friendship" (tla118250) `רֵעוּת`, ḫnms verb (tla118240)
  `התרועע` (AM); ꜥq (tla41190) "confidant" `מקורב`; spr.w `המבקש`, spr.t `בקשה`, spr verb `ביקש`; gnf `דחה`; ẖr-jw `העשוק`;
  ḥm.t `אשה`; mrḥ.t `משחה` (HC, NU9); ꜣḥ.t `שדה`; tꜣ-ẖ.t (tla851302) `רותח־הבטן` and tꜣ jb `רותח־הלב` (BD's tꜣ `רותח`;
  `חם` is gated to šmm); qb ẖ.t `קר־הבטן`; qꜣi̯ jb `ירום לב` (distinct from ꜥꜣi̯ jb `יגדל לב`); mskj `שמועה`; sḥ `מועצה`;
  wḏꜥ `דן`, wḏꜥ.t `הכרעה`, wḏꜥ (noun) `דין` (`משפט` never); qnb.t `מועצת־השופטים` (AM); zꜣ-z `בן־איש`; jtn.w `יריב`
  (jtn verb `התנגד`); šnt `רב`; sꜣḥ.w `שכנים`; jm(,j)t-pr `צוואה` (NU1 has `שטר־הבית`: proposal below); mẖr `מחסן` (AM);
  psš.t `חלוקה`; kꜣ.w "food" `מזון` (the kꜣ / kꜣ.w pun noted); sꜣꜣ "wisdom" `חכמה` (12,10, the gated licence); nk `שכב
  עם` (§11); wjn `מאס` (see Problems).
- Verifier-driven: `סרב` → `מאס` (also KG 1,10), `מאזניים` (13,2 mꜣd.w) → `זרועות־המוט`, `צדקתו` → `ישרותו` (ꜥqꜣ),
  `סכלות` → `שטות` (jmj), `השחית` → `הזיק` (ḥḏj, as 6,3 / 7,9), `גזר` → `קבע` (šꜣj). Using the 2026-11-16 exemptions:
  `לבסוף` restored in KG 2,4, `מעולם לא` in PH 6,6, 6,9, 14,11 (n pꜣu̯, one Hebrew).

### Open decisions for the user
- 9,13 `whh m skn`: "he who fails through lust" (chosen) or the TLA's "he who lacks lust – does not every matter succeed?".
- 14,4 `nk ḥm.t ẖrd`: "a woman (or) a child" with the TLA's reading of consent ("resistance to the semen on the
  forehead"), against "a woman who is a child" or a ban on intercourse with a boy.
- 12,6 `r ḥn ꜣ` "will come to want" (dictionary) or the TLA's "will say: if only!".

### Progress log
- 2026-11-16: drafted in three blocks (9,1–10,8; 10,9–12,13; 13,1–14,13); after each block `tr` was read and the lines
  corrected; `fill`, `verify PH`, `build KG PH`, quotes.
- Pass (a) fidelity, from the TLA comparison: 9,3 sfꜣ.t "neglect" (not "hatred"); 9,12 "one escapes its doing while
  the heart refuses"; 10,2 passive ssjb; 10,7 prr "betray"; 10,12 šnn "questioned"; 11,2 ꜥꜣb "self-satisfied ka" (the
  first draft had the opposite, "generous"); 11,6–11,7 `דע את המעלה`; 12,3 the gentle man's way "paved"; 12,7 the ka
  "detaches from" its lover; 12,10 "his wisdom" (=f); 12,11–12,12 the subject of "lives"; 13,3 the litigant as speaker;
  13,11 "an adversary as superior"; 14,4–14,6 the consent reading; 14,7 "do not ask the one near him"; 14,10 rʾ-pw "or";
  14,13 the jn-cleft continues into 15,1.
- Pass (b) consistency: whh `נכשל` (9,13; 11,1), ḫsf `הדף` (12,6 = 5,12), jtn / jtn.w / šnt separated, ḥḏj `הזיק`,
  `כל עת היותך` ×3, `אסוף את לבך` / `אסוף את עצמך` (sꜣq), `מעולם לא` for n pꜣu̯ throughout PH.
- Pass (c) Hebrew: the built text read through; 14,12 `(קרה ש)לא באה עתו` (the double negative made readable).
- `verify PH`: 0 problems (63 lines placeholdered); `verify KG --strict`: 0; quotes: 0 (six quotations corrected:
  Ex 20:13 numbering, Prov 15:27 word order, maqaf in Proverbs).

### The text on its own terms
- **Being heard is half the remedy** (9,3–9,7): "the oppressed loves the washing of his heart more than the doing of
  what he came for"; "a good hearing smooths the heart".
- **Greed as a disease with no treatment** (10,1–10,5): the medical formula ("one does not approach it") and the
  family it splits; the greedy man has no tomb – the worst Egyptian fate.
- **The wife as a fertile field** (10,9–10,10): food, clothes and ointment; the pun ꜣḥ.t "field" / ꜣḫ.t "useful".
- **The two "hot" men** (11,5; 12,2–12,3): the hot-bellied spreads rumours, the hot-hearted burns like a flame; the
  cool-bellied (10,8) is the ideal.
- **Speech harder than any craft** (11,10–11,11): only the craftsman of words speaks in council.
- **The ka as food and generosity** (11,2; 12,7–12,13): kꜣ / kꜣ.w; "food makes love grow"; "who loves to hear is a ka".
- **Consent** (14,4–14,6, on the TLA's reading): intercourse is forbidden when the other shows resistance.
- **The balance of judgement** (13,2): the judge "rescues the arms" of the scales.

### Key parallels
- 9,3–9,7 ↔ Prov 18:13, 15:1 (hearing, the soft answer) [equivalent].
- 10,1–10,6 ↔ Prov 15:27 (`עֹכֵר בֵּיתוֹ בּוֹצֵעַ בָּצַע`) and Ex 20:13 (coveting) [equivalent].
- 10,9 ↔ Qoh 9:9, Prov 5:18 [equivalent]; Ex 21:10 [divergence].
- 13,2 ↔ Deut 16:19 [equivalent]; 13,5 ↔ Prov 19:11 [equivalent].
- 14,13 ↔ Qoh 11:1 (bread sent out) [equivalent].

### Lines shared with other texts
None repeated verbatim. Echoes inside PH: 12,6 ≈ 5,12 (`להדוף … ברגעו`); 11,9 / 14,10 sꜣq; KG 1,4 `רגע קטן` ≈ 9,11.

### Proposals for the shared renderings
1. ḫnms (tla118260) `רֵעַ`, (tla118250) `רֵעוּת`, verb (tla118240) `התרועע`; ꜥq (tla41190) `מקורב`.
2. tꜣ-ẖ.t (tla851302) `רותח־הבטן`, tꜣ jb `רותח־הלב`, qb ẖ.t `קר־הבטן` – the hot/cool family beside šmm `הַחַם`.
3. qꜣi̯ jb (tla159110 + jb) `ירום לב` (Deut 8:14 [equivalent] in the apparatus); keep ꜥꜣi̯ jb `יגדל לב`.
4. wjn (tla44120) `מאס` (the TALES gate bars `סרב`); gnf `דחה`.
5. jm(,j)t-pr (tla854489) `צוואה` (PH 10,5) vs NU1 17.63 `שטר־הבית`: harmonize (PH's context is inheritance).
6. ꜥḥꜥ (tla40280) `ערמה` where it is a heap (5,13; 6,6), `עושר` in 13,8 – one lemma, two senses; review.
7. sḫr (tla142800): `עצה` kept, but 9,13 `עניין` (with mꜥr "succeed"); review whether "matter" senses should take
   `עניין` throughout (and sp then keep `עניין` / `מעשה`).
8. qꜥḥ (tla159830): `מרפק` (8,6), `כתף` (12,12), `זרוע` (13,12) by context – one lemma, three Hebrew words; propose `כתף`
   everywhere if the later texts allow.
9. msd.t (tla76220) `תועבה` in 11,7 collides with bw.t `תועבה`; propose msd.t `שנאוי` / `דבר שנוא` at harmonization.
10. dꜣjr (tla177740): `כבש` (the heart, KG 1,4; 5,12) and `גזל` (things, 14,1) – one lemma; propose `כבש` for both
    (`אל תכבוש רכוש של קרוב`), if read naturally.

### Lessons for the guidelines
- The gate for `סרב` misses the 2nd-person prefix `ת` (`תסרב` passed in KG 1,10): the prefix class `[ובלמהכש]` lacks
  the imperfect prefixes `אתינ`. Reported to the coordinator, not edited.

## PH 15,1–19,9 (Round 9 run 4, translator 1, part 3: the end of Ptahhotep)

### Scope
63 entries (`15,1`–`19,9`): the end of the bread maxim, kindness to friends, punishment and teaching, the cheerful wife,
then the **epilogue on hearing** (15,8–17,13), the son as example and speech before the officials (17,13–19,6), the
vizier's 110 years and the colophon (19,6–19,9). PH is now complete (195 entries, no placeholder). Obscure: 15,7–15,8
(`hp.wj`, `ꜥqꜣꜣ`), 15,13 (`mꜥn?`), 18,5 (an omitted word).

### Sources consulted
As before; `tr PH 15,1 19,9` read after drafting, quoted from the output.

### Decisions
- **Coordinator's ruling applied first:** msd.t `שנואה` (PH 11,7 changed from `תועבה`); msdj `השנוא` (16,7 "the one hated
  by god").
- **The colophon (19,9)** = renderings §14.5.1 byte for byte: `בא הוא, מתחילתו עד קצו, כפי שנמצא בכתב.` (+ `[…]`).
- **The epilogue on hearing:** every form of sḏm `שמע` (16,3–16,9 repeat it some twenty times: `השמיעה`, `השומע`,
  `שומע`, `לשמוע`); sḏm.j (tla150680) `השומע`; sḏm.yw `השומעים` (18,10); sḏm.tj=sn `השומעים` (18,4; 19,1; 19,3). The
  repetition is kept word for word – it is the form of the passage.
- wḫꜣ "fool" (tla49150) `שוטה` (the INSTR gate bars `כסיל` / `אויל`); rḫ-ḫ.t `יודע־הדבר` (§14.3); jmꜣḫ `כבוד`,
  jmꜣḫ.y `נכבד` (AM); bꜣ `בָּא` ★; nḥḥ `נצח`, ḏ.t `עד` (15,12); jsf.t `עָוֶל` (18,3); grg "lie" `כזב` (§11); sbꜣ.w
  (tla131330) `מוסר` (as sbꜣ.yt); šms.w-Ḥr `מלווה־חוֹרוּס`; ḏfꜣ/ꜥq.w "food, bread" `לחם` (17,7); smꜣwj `חידש` (pairs with
  4,3 `מתחדשת`); jṯj `לקח` (6,6; 18,7; 19,7); ḫsf `ייסר` (15,5); ꜣḫ with no comparison marked `[סטייה מן הנוסחה]`
  (15,4; 16,3). Verifier: `מאת` (19,5) → `בידי` (the Maat trap).

### Open decisions for the user
- 15,9 `rwj sḫꜣ=sn m rʾ n rmṯ`: "their memory wanders from mouth to mouth" (with the TLA: they are quoted) or "does not
  depart from the mouth" (the older reading, which needs a negation the text lacks).
- 15,13 `mꜥn?` "joins (?) heart and tongue" (TLA "verwebt") – the reading is marked doubtful by the edition.
- 18,7 a consistency rule (TLA) or the preservation of a text (Deut 4:2) – tagged [divergence].

### Progress log
- 2026-11-16: 11,7 msd.t revised; 15,1–17,13 drafted, `tr` read, corrected; 18,1–19,9 drafted, `tr` read, corrected;
  placeholder removed; `fill`, `build KG PH`, `verify KG PH --strict` 0 problems; quotes 0 (Ex 20:11 numbering, Deut 4:40
  wording fixed).
- Pass (a): from the TLA – 15,1 (ḥntj passive "what one craves", sꜣhh "the abased"); 15,2 "do not make him one near
  you"; 15,3 (wnn ḫ.t=k as a result clause); 15,8 (sjp / ꜥqꜣꜣ left as `…?`); 15,9 (no negation); 15,11; 15,13–16,1
  ("joins heart and tongue; exact are his lips"); 16,10–16,11 ("a pleasant son is a master of hearing"); 17,4 (mḏd);
  18,5 (`הוא גם` closes 18,4); 18,7 ("do not take a word away and bring it back"); 18,12 hrp "submerge"; 18,14–19,1 the
  two sayings; 19,3 `עליך`; 17,13 "be an example" as a new command, not a quotation.
- Pass (b): `השמיעה` / `השומע` uniform through 16,3–17,10; `מופת` (bjꜣ) 5,5 / 15,5 / 17,13; `צעדיו` (nmt.t) 10,4 /
  17,2 / 19,6; `נעלה` (tnj) 9,1 / 17,2 / 19,2; `עושה האמת` 16,2 / 19,5; `עלי אדמות` (tp tꜣ) ×4.
- Pass (c): the built `translation-PH.rtl.md` read through; quotation marks of 16,10–16,11, 18,14–19,1, 19,3–19,5
  balanced.

### The text on its own terms (Ptahhotep as a whole)
- **Old age frames the book** (4,2–5,2; 16,6; 19,7): it opens with the body failing ("the good has become bad") and ends
  with 110 years as the reward of Maat – the same old age seen from inside and from its end.
- **Hearing is the whole of education** (5,3–5,5; 15,8–17,13): a chain of hearers from the gods to the ancestors, to the
  vizier, to his son and his son's children; the epilogue repeats sḏm like an incantation; "it is the heart that makes
  its owner a hearer or a non-hearer" (16,7–16,8).
- **Silence as power** (5,13–5,14; 7,5; 11,9–11,10; 12,1): the silent man defeats his equal, wins "awe"; yet "do not be
  silent" when speech is due – speech is "harder than any craft" (11,11).
- **Maat is great and lasting** (6,5–6,10; 10,4; 16,2; 19,5–19,8): undisturbed since Osiris, outlasting greed; "what god
  commands is what happens".
- **Greed as an illness** (10,1–10,6): it splits fathers, mothers, brothers, wife and husband; the greedy man has no tomb.
- **The table, the ka and food** (6,11–7,3; 12,7–12,9): the host's ka gives; "food makes love grow"; the kꜣ / kꜣ.w pun.
- **The household** (10,8–10,12; 15,6–15,8): the wife as a "useful field" (ꜣḥ.t / ꜣḫ.t), fed, clothed, anointed – and
  kept from power; the cheerful, plump wife not to be sent away.
- **The Nile as the image of fate** (6,6; 8,1–8,2; 11,4; 18,8): the venture that never lands, the boatless man, the
  harbour of peace, "the rope in you".
- **Fate and freedom** (7,12–8,1; 16,7): harm "commanded in the womb" beside the heart that "makes its owner".
- **Writing as immortality** (15,9–15,12; 16,12; 19,9): the sayings will "not perish in this land for ever", memory "in
  the mouth of the living"; the knower "provisions his ba".
- **Consent** (14,4–14,6, on the TLA's reading) – a rare ancient statement that the other's resistance forbids the act.

### Key parallels (Ptahhotep as a whole)
- 19,7 `rnp.t 110` ↔ Gen 50:26 `בֶּן מֵאָה וָעֶשֶׂר שָׁנִים` (Joseph; also Josh 24:29): the Egyptian ideal life span given
  to the Bible's Egyptian vizier [equivalent] – the most concrete Egyptian contact in the text.
- 6,10 ↔ Prov 19:21, 16:9: human schemes against the god's plan [equivalent].
- 16,3–16,9 ↔ Prov 1:8, 15:31; Ex 24:7: hearing as obeying and doing [equivalent].
- 16,6 ↔ Ex 20:11: the son's reward is long life (here "old age", no divine command) [equivalent].
- 6,11 ↔ Prov 23:1 (the ruler's table), with KG 1,3–1,9 ↔ Prov 23:20–21 [equivalent].
- 4,3–5,2 ↔ Qoh 12:3; 2 Sam 19:36 (old age by the senses) [equivalent].
- 7,9 ↔ Qoh 11:9 ("follow your heart") [equivalent]; 10,9 ↔ Qoh 9:9 [equivalent].
- 7,12–8,1 ↔ Deut 21:18 [divergence]; Ps 58:4 [equivalent].
- 10,1–10,6 ↔ Prov 15:27; Ex 20:13 [equivalent].

### Lines shared with other texts
- 19,9 = SI B311 (the colophon, byte for byte; §14.5.1); KG 2,9 has its first words.
- 12,6 ≈ 5,12; 17,2 / 19,6 ≈ 10,4 (`צעדיו`).

### Proposals for the shared renderings
1. wḫꜣ (tla49150) `שוטה` in every Instruction (the INSTR gate bars Proverbs' fools; `renderings.md` §5.2 still licenses
   `כסיל` for wḫꜣ in the older texts – a contradiction for the finalization).
2. jmꜣḫ (tla25060) `כבוד`, jmꜣḫ.y (tla25090) `נכבד`; s.t jmꜣḫ `מקום הכבוד` (the tomb).
3. sḏm.j (tla150680) and sḏm.w both `השומע` (the noun / the participle).
4. The colophon string: also for KH, NH, AN (§14.4).
5. šms.w-Ḥr (tla851311) `מלווה־חוֹרוּס`.

### Lessons for the guidelines
- A passage built on one word (the epilogue's sḏm) is the strongest case for "one lemma, one Hebrew": any variation
  (`ציית`, `האזין`) would have broken the incantation the Egyptian builds.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KG)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1,1 | wḏꜣ snḏ,w ḥzi̯ mt(j) wn ẖn n gr,w | שלם הַיָּרֵא, משובח המדייק; פתוח האוהל לשותק, | `אַשְׁרֵי אָדָם מְפַחֵד תָּמִיד` (משלי כח:יד) | equivalent | אותו טיפוס, האדם הזהיר והמכבד, בלי קשר מילולי; *snḏ* הוא פחד־של־כבוד כלפי הגדול ממנו, לא "יראת אלוהים". |
| 1,4 | msdi̯ tʾ mrr =k ꜣ,t pw kt.t dꜣjr-jb ḫw pw ꜣfꜥ | שְׂנָא את הלחם אשר אתה אוהב: רגע קטן הוא כיבוש הלב; חטא היא הגרגרנות, | `וְשַׂמְתָּ שַׂכִּין בְּלֹעֶךָ אִם בַּעַל נֶפֶשׁ אָתָּה` (משלי כג:ב) | equivalent | הקבלה של מוטיב, בלי קשר מילולי: התאפקות ליד שולחן זר. במשלי – ליד שולחן המושל, כאן – ליד "המון" וגרגרן. |
| 1,6 | smn =f jb jw nfr,t jdn bw-nfr jw nh(j) n ktt jdn wr ẖz | מחזק הוא את הלב; דבר טוב ממלא את מקום הטוב, מעט מן המעט ממלא את מקום הרב. עלוב | `טוֹב פַּת חֲרֵבָה וְשַׁלְוָה בָהּ מִבַּיִת מָלֵא זִבְחֵי רִיב` (משלי יז:א) | equivalent | מוטיב משותף (המעט הספק), בלי השוואה ("מוטב") במצרית: כאן המעט "ממלא את מקום" הרב. |
| 1,8 | ḥmsi̯ =k ḥnꜥ ꜣfꜥ wnm =k ꜣḫf =f swꜣ jr zw{r}j =k ḥnꜥ | תשב עם גרגרן – תאכל כשבולמוסו חלף; אם תשתה עם | `אַל-תְּהִי בְסֹבְאֵי-יָיִן בְּזֹלְלֵי בָשָׂר לָמוֹ` (משלי כג:כ) | equivalent | אותו זוג (הגרגרן והשיכור, הבשר והיין), עם עצה שונה: משלי אוסר לשבת עמם; קגמני מלמד איך לשבת עמם – לחכות שיגמרו. |
| 1,9 | tḫ,w šzp =k jw jb =f ḥtp.w m ꜣt.w r jwf r-gs skn | שיכור – תקבל, ולבו נח. אל תתפרץ אל הבשר ליד רעבתן; | `כִּי סֹבֵא וְזוֹלֵל יִוָּרֵשׁ וּקְרָעִים תַּלְבִּישׁ נוּמָה` (משלי כג:כא) | equivalent | השיכור והזולל שוב יחד; משלי מאיים בעוני, קגמני מלמד נימוס. |
| 2,1 | jw gr =k m rʾ =k njs.t(w) =k m ꜥꜣi̯ jb =k ḥr ḫpš | כשאתה שותק בפיך, ויקראו לך. אל יגדל לבך בשל כוח | `לֹא גָבַהּ לִבִּי` (תהלים קלא:א) | equivalent | "גודל הלב" המצרי הוא "גובה הלב" העברי: שני ניבים שונים לאותה גאווה. כאן נשמר הניב המצרי (*ꜥꜣ* "גדול"). |
| 2,2 | m-ḥr(,j)-jb ḏꜣm =k zꜣw jtn =k n rḫ.n =tw ḫpr.t jrr.t nṯr ḫft ḫsf =f | בתוך בני גילך; היזהר פן תתנגד: אין יודעים את הנהיה, את אשר יעשה האל כאשר ייסר. | `אַל תִּתְהַלֵּל בְּיוֹם מָחָר כִּי לֹא תֵדַע מַה יֵּלֶד יוֹם` (משלי כז:א) | equivalent | אותו מוטיב (האדם אינו יודע את הנהיה); במצרית "הנהיה" קשור במעשה האל המעניש. |
| 2,5 | pꜣ šfd,w sḏm st mj ḏd =j st m zni̯ ḥꜣw-ḥr šꜣꜣ.t wn.jn =sn | המגילה הזאת – שִׁמְעוּ אותו כאשר אמרתיו; אל תחרגו מעבר למה שנקבע." ואז | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | equivalent | "אל תחרגו מעבר למה שנקבע" מזכיר את נוסחת השמירה על נוסח כתוב; במצרית הכוונה כנראה למעשה (לא לחרוג מן ההוראות), לא לנוסח. |
| 2,9 | Kꜣ=(j)-gmi̯.n=j r (j)m(,j)-rʾ-nʾ,t ṯꜣ,t(j) jwi̯ =f pw […] […] […] | קָגֶמְנִי לממונה על העיר ולווזיר. בא הוא […] […] […] | `תַּמּוּ דִּבְרֵי אִיּוֹב` (איוב לא:מ); `כָּלּוּ תְפִלּוֹת דָּוִד בֶּן יִשָׁי` (תהלים עב:כ) | absent | הקולופון המצרי "בא הוא (מתחילתו עד קצו)" – אין לו מקבילה בתנ"ך; קרוב לו  ו, נוסחאות סיום של ספרים. |

### Parallels index (PH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4,2 | (j)m(,j)-rʾ-nʾ,t ṯꜣ,tj Ptḥ-ḥtp ḏd =f jty nb =(j) tnj ḫpr jꜣw hꜣi̯.w | הממונה על העיר, הווזיר פְּתָח־חֹתֶפּ, אומר: "הריבון, אדוני! השיבה נהייתה, הזקנה ירדה; | `זִקְנָה וְשֵׂיבָה` (תהלים עא:יח) | equivalent | הזוג זקנה ושיבה, שתי מלים לאותו דבר, כמו *tnj* ו־*jꜣw* כאן; מוטיב משותף, בלי קשר ספרותי. |
| 4,3 | wgg jwi̯ jḥw ḥr mꜣwi̯ sḏr n =f ẖdr rꜥ-nb jr,t.du nḏs.w | רפיון בא, התשישות מתחדשת; שוכב בעטייה, כילד, בכל יום; העיניים חלשות, | `וְחָשְׁכוּ הָרֹאוֹת בָּאֲרֻבּוֹת` (קהלת יב:ג) | equivalent | תיאור הזקנה איבר אחר איבר: העיניים, האוזניים, השיניים; בקהלת – במשל (הבית ושומריו), כאן – כפשוטו. מוטיב משותף, בלי קשר ספרותי ידוע. |
| 5,1 | jb tm.w n sḫꜣ.n =f sf qs mn{n} =f n ꜣww bw-nfr ḫpr m bw-bjn dp,t nb.t šm.t(j) | הלב תם – אינו זוכר את אתמול; העצם כואבת בשל האורך; הטוב נהיה לרע; כל טעם הלך. | `יִטְעַם עַבְדְּךָ אֶת אֲשֶׁר אֹכַל וְאֶת אֲשֶׁר אֶשְׁתֶּה` (שמואל ב יט:לו) | equivalent | ברזילי בן השמונים מונה את סימני זקנתו (הטעם, השמיעה) כדי לסרב לחצר המלך; פתח־חותפ מונה אותם כדי לבקש מן המלך יורש. |
| 5,6 | ḏd n =f nn msi̯.y sꜣw ḥꜣ(,t)-ꜥ-m ṯz.w.pl n md,t nfr.t ḏd.t.n (j)r(,j)-pꜥ,t ḥꜣ(,tj)-ꜥ jt-nṯr mri̯.y-nṯr | נאמר לו. אין נולד חכם." ראשית אמרות הדבר הטוב, אשר אמר הנסיך, הרוזן, אבי־האל, אהוב־האל, | `דִּבְרֵי חֲכָמִים` (משלי כב:יז) | equivalent | כותרת לאוסף אמרות; כאן "ראשית אמרות הדבר הטוב". מוטיב של סוגה, לא קשר ישיר. |
| 5,7 | (j)m(,j)-rʾ-nʾ,t ṯꜣ,tj Ptḥ-ḥtp m sbꜣ ḫm.w.pl r rḫ r tp-ḥsb n md,t nfr.t m ꜣḫ,t n | הממונה על העיר, הווזיר פְּתָח־חֹתֶפּ, בלמדו את הבורים דעת, לפי התקן של הדבר הטוב, כמועיל | `לָדַעַת חָכְמָה וּמוּסָר … לָתֵת לִפְתָאיִם עָרְמָה` (משלי א:ב–ד) | equivalent | מטרת המוסר בכותרתו: ללמד את מי שאינו יודע; שם "פתאים", כאן "בורים". מוטיב סוגה משותף. |
| 5,8 | sḏm.tj =f m ⟨w⟩gg,t n ntj r thi̯.t st ḏd.jn =f ḫr zꜣ =f m ꜥꜣi̯ jb =k ḥr rḫ =k nḏnḏ r =k | לאשר ישמע, וכפגע לאשר יעבור עליו. אז אמר אל בנו: "אל יגדל לבך בשל דעתך; התייעץ | `אַל יִתְהַלֵּל חָכָם בְּחָכְמָתוֹ` (ירמיהו ט:כב); `אַל תְּהִי חָכָם בְּעֵינֶיךָ` (משלי ג:ז) | equivalent | אותה אזהרה מפני גאוות הדעת; ובמשלי . הניב המצרי "גודל הלב" נשמר. |
| 5,8 | sḏm.tj =f m ⟨w⟩gg,t n ntj r thi̯.t st ḏd.jn =f ḫr zꜣ =f m ꜥꜣi̯ jb =k ḥr rḫ =k nḏnḏ r =k | לאשר ישמע, וכפגע לאשר יעבור עליו. אז אמר אל בנו: "אל יגדל לבך בשל דעתך; התייעץ | `בֵּן חָכָם מוּסַר אָב` (משלי יג:א) | equivalent | הבן ששומע; המצרית "אשר ישמע" (*sḏm.tj=fj*) היא מלת המפתח של המוסר. |
| 5,9 | ḥnꜥ ḫm mj rḫ n jni̯.tw ḏr,w ḥmw,t nn ḥmw,w ꜥpr ꜣḫ,w =f | עם הבור כעם היודע: אין מביאים את קצה האומנות, אין אומן המצויד במלוא יכולתו. | `לְכָל תִּכְלָה רָאִיתִי קֵץ רְחָבָה מִצְוָתְךָ מְאֹד` (תהלים קיט:צו) | equivalent | החכמה (שם – המצווה) אין לה קצה; מוטיב משותף. |
| 5,10 | dgw md,t nfr.t r wꜣḏ jw gmi̯.t(w) =s m-ꜥ ḥm,t.pl ḥr bnw,t.pl jr gmi̯ =k ḏꜣjs,w m ꜣ,t =f | נסתר הדבר הטוב יותר מן האבן־הירוקה, ונמצא הוא אצל השפחות שעל אבני־הריחיים. אם תמצא מתווכח ברגעו, | `יְקָרָה הִיא` (משלי ג:טו) | equivalent | החכמה יקרה ונסתרת יותר מאבן יקרה; אך במצרית ההפתעה היא שהיא נמצאת דווקא אצל השפחות הטוחנות: היפוך שאין בפסוק. |
| 5,14 | m gr jw =f ḥr md(w)i̯.t bjn,t wr wfꜣ jn sḏm,yw.pl rn =k nfr m rḫ n sr.w.pl | בשתיקה, כשהוא מדבר רעה; גדול הדיון אצל השומעים, ושמך טוב בדעת השרים. | `טוֹב שֵׁם מִשֶּׁמֶן טוֹב` (קהלת ז:א) | equivalent | "השם הטוב" כערך העליון; במצרית *rn nfr* הוא גם "השם הטוב" של קברו של אדם, שבו הוא חי לעד. |
| 6,1 | jr gmi̯ =k ḏꜣjs,w m ꜣ,t =f m ḥwr,w n js mj,tw =k m ꜣd jb =k r =f ḫtf ẖss =f | אם תמצא מתווכח ברגעו, חלש, אשר אינו שווה לך – אל יתפרץ לבך עליו כשהוא עלוב. | `וּבִכָּשְׁלוֹ אַל-יָגֵל לִבֶּךָ` (משלי כד:יז) | equivalent | אל תשמח בכישלון יריבך; מוטיב משותף. |
| 6,5 | jm =f wr mꜣꜥ,t wꜣḥ spd,t n ẖnn.t(w) =s ḏr rk Wsjr jw ḫsf =tw n swꜣ ḥr hp.w.pl swꜣ.t | בה. גדולה האמת, מתמיד תוקפה; לא נתערערה מימי אוֹסִירִיס. מייסרים את החולף על פני החוקים; (זה) החולף | `אֱמֶת יְהוָה לְעוֹלָם` (תהלים קיז:ב) | equivalent | האמת המתמידה לנצח; במצרית *mꜣꜥ.t* היא הסדר שהאלים כוננו "מימי אוסיריס", לא נאמנות של אל. |
| 6,6 | pw m ḥr n ꜥwn-jb jn nḏy,t jtt ꜥḥꜥ n pꜣu̯ ḏꜣy,t mnj sp =s jw =f ḏd =f | הוא על פני בעל בצע־הלב. השפלות היא הלוקחת ערמה; מעולם לא העגינה הקלקלה את עניינה. והוא אומר: | `כֵּן אָרְחוֹת כָּל בֹּצֵעַ בָּצַע אֶת נֶפֶשׁ בְּעָלָיו יִקָּח` (משלי א:יט) | equivalent | הבצע שאינו מביא לבעליו טוב; המלה העברית `בצע` מתרגמת כאן את *ꜥwn* (ראו `project.md`, ההצעות). |
| 6,7 | sḫt =j r =j ḏs =j n ḏd.n =f sḫt =j ḥr ḥn,t =j wn pḥwj mꜣꜥ,t wꜣḥ =s ḏd w z w jt =(j) pw | "אצוד לי לעצמי"; אין הוא אומר: "אצוד בשל תפקידי". יש קץ – והאמת מתמידה היא; לא יאמר אדם: "חלקת אבי היא." | `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | divergence | "חלקת האבות" כטענת קניין שאינה ניתנת לגזל; אצל פתח־חותפ – ההפך: הרכוש שנצוד בחמדנות לא יעבור בירושה, ואיש לא יוכל לומר עליו "חלקת אבי". |
| 6,9 | wsr =(j) jw =f ḏd =f sḫt =j r =j sjꜣ.t =j jw z ḏd =f ḥwt⟨f⟩ ={f} =(j) ky jw =f pḥ =f rḏi̯.t =f n ḫm.n =f n pꜣu̯ | "חסין אהיה"; אומר הוא: "אצוד לי את אשר אכיר." אומר אדם: "אבזוז אחר" – מגיע הוא לתת (אותו) למי שלא ידע. מעולם לא | `וְעָזְבוּ לַאֲחֵרִים חֵילָם` (תהלים מט:יא); `לְאָדָם שֶׁלֹּא עָמַל בּוֹ יִתְּנֶנּוּ חֶלְקוֹ` (קהלת ב:כא) | equivalent | העושר שנאסף עובר לזר; ובקהלת . מוטיב משותף. |
| 6,10 | ḥr n r(m)t.pl ḫpr wḏ.t nṯr pw ḫpr.t kꜣi̯ ꜥnḫ m-ẖnw hr,t jyi̯.y ḏḏ.t =sn ḏs j⟨r.j⟩ | נהייתה מזימת בני האדם; צו האל – הוא הנהיה. חשוב לחיות בשלווה: יבוא מעצמו אשר יתנו הם. | `רַבּוֹת מַחֲשָׁבוֹת בְּלֶב אִישׁ וַעֲצַת יְהוָה הִיא תָקוּם` (משלי יט:כא); `לֵב אָדָם יְחַשֵּׁב דַּרְכּוֹ וַיהוָה יָכִין צַעֲדוֹ` (משלי טז:ט) | equivalent | אותו מבנה: מחשבות האדם מול עצת האל, שהיא לבדה מתקיימת; גם . ההקבלה הקרובה ביותר בפרק זה; אין צורך בהשפעה ישירה – הרעיון משותף לחכמת המזרח הקדום. |
| 6,11 | jr wnn =k m z n ḥmsi̯.pl r s,t ṯ,t wr r =k šzp ḏi̯.t =f ḏi̯.w r fn⟨ḏ⟩ =k gmḥ =k r n,tt m-bꜣḥ =k m sti̯.w sw | אם תהיה איש מן היושבים אל שולחן של גדול ממך – קַבֵּל את אשר יתן, כפי שהונח לפני אפך; הבט אל אשר לפניך; אל תירה בו | `כִּי תֵשֵׁב לִלְחוֹם אֶת מוֹשֵׁל בִּין תָּבִין אֶת אֲשֶׁר לְפָנֶיךָ` (משלי כג:א) | equivalent | אותו מצב ואותה עצה ("את אשר לפניך"); משלי כג:א–ג נשען כנראה על המסורת המצרית (ראו אמנמופה 23.13–18). |
| 7,1 | m gmḥ ꜥšꜣ bw,t kꜣ pw wdi̯.t jm =f m mdwi̯ n =f r jꜣš.t =f n rḫ.n =tw bjn,t ḥr jb mdwi̯ =k ḫft wšd =f tw jw ḏd.t =k r nfr ḥr jb | במבטים רבים – תועבת הכָּא היא להטיל בו (מבט). אל תדבר אליו עד שיזמין (אותך): אין יודעים מה רע ללב. דַּבֵּר כאשר יפנה אליך – אשר תאמר יהיה טוב ללב. | `תּוֹעֲבַת יְהוָה` (משלי יא:א) | equivalent | נוסחת "התועבה" המשותפת לחכמה המצרית ולמשלי; כאן "תועבת הכָּא", של כוח החיים של הגדול, לא של אל. |
| 7,3 | sḫr nṯr jn ḫm ꜥnꜥy =f ḥr =s jr wnn =k m z n ꜥq hꜣb.w wr n wr mt(j) ḥr-qd hꜣb =f tw jri̯ n =f wpw,t mj ḏd =f | עצת האל; הבור הוא המתלונן עליה. אם תהיה איש־כניסה אשר שולח גדול אל גדול, היה מדייק לגמרי כאשר ישלח אותך; עשה לו את השליחות כפי שיאמר. | `כְּצִנַּת שֶׁלֶג בְּיוֹם קָצִיר צִיר נֶאֱמָן לְשֹׁלְחָיו` (משלי כה:יג) | equivalent | השליח הנאמן; מוטיב משותף של חכמת החצר. |
| 7,5 | bw,t kꜣ pw jr skꜣ =k {d}r⟨d⟩ m sḫ,t ḏi̯ st nṯr wr m-ꜥ =k m sꜣi̯ rʾ =k r-gs hꜣw =k wr jri̯.t ḥry,t n.t gr jr nb qd m nb ḫ,t | תועבת הכָּא היא. אם תחרוש, ותהיה צמיחה בשדה, ויתן אותה האל, גדולה, בידך – אל תשביע את פיך ליד סביבך. גדול הוא העושה אימה לשותק. הנה, בעל־האופי – כבעל־רכוש | `לֵךְ וָשׁוּב וּמָחָר אֶתֵּן` (משלי ג:כח) | equivalent | החובה לחלוק את השפע עם הסובבים; מוטיב משותף, לא ניסוח משותף. |
| 7,6 | jtt =f mj mzḥ m qnb,t m twꜣ n jw,tw ms.w.pl =f m ḥwrw m ꜥbꜥ jm jw wn wr jt m ꜣhw mw,t msi̯.t ḥtp k.t r =s jn wꜥ | יתפוס הוא כתמסח במועצת־השופטים. אל תתנשא על מי שאין לו ילדים, אל תלעיז, אל תתהדר בזה: רב הוא האב שבכאב, ואם יולדת – נחה אחרת ממנה. האחד הוא | `בֵּן חָכָם יְשַׂמַּח אָב וּבֵן כְּסִיל תּוּגַת אִמּוֹ` (משלי י:א) | equivalent | הבנים כמקור צער להוריהם; מוטיב משותף, והמצרית אינה מזכירה סכלות אלא רק את הצער. |
| 7,8 | jb =k r =f ḥr rḫ.t.n =k jm =f ḫntw snḏ n =f ḫtf ḫpr.t n =f n jyi̯.y js ḫ,t ḏs hp =sn pw n mrr.w =sn jr ṯtf jw sꜣq.n =f ḏs jn nṯr jri̯ jqr =f | לבך עליו בשל אשר ידעת עליו לפנים; יְרָא ממנו כפי שנהיה לו – לא בא הרכוש מעצמו; חוקם הוא למי שהם אוהבים. הנה השפע – אסף אותו הוא בעצמו; האל הוא העושה את מעלתו, | `בִּרְכַּת יְהוָה הִיא תַעֲשִׁיר וְלֹא יוֹסִף עֶצֶב עִמָּהּ` (משלי י:כב) | equivalent | העושר מתנת האל, לא הישג עצמי בלבד; מוטיב משותף. |
| 7,9 | ḫsf =f ḥr =f jw =f sḏr šms jb =k tr n wnn =k m jri̯ ḥꜣw-ḥr mdd.wt m ḫbi̯ tr n šms jb bw,t kꜣ pw ḥḏi̯.t ꜣ,t =f m ngb sp | והוא הודף (רעה) מעליו כשהוא ישן. לך אחר לבך כל עת היותך; אל תעשה יותר מן המדובר, אל תקצר את עת ההליכה אחר הלב – תועבת הכָּא היא להזיק לרגעו. אל תסיט עניין | `וְהַלֵּךְ בְּדַרְכֵי לִבְּךָ` (קהלת יא:ט); `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ` (קהלת ט:ז) | equivalent | "לך אחר לבך" המצרי ו"הלך בדרכי לבך" של קהלת; גם . מוטיב משותף (ליהנות מן הזמן הקצוב); בקהלת – עם תזכורת המשפט, כאן – עם "תועבת הכא". |
| 7,11 | nṯr jr mt(y) =f pẖr{f} =⟨f⟩ n qd =k nwi̯ =f ḫ,t =k r s,t jr,j jri̯ n =f bw nb nfr zꜣ =k pw n(.j) sw sti̯ kꜣ =k jmi̯ =k jwd jb =k r =f jw mtw,t | האל. אם ידייק הוא, ויסוב אל אופייך, וידאג לרכושך כראוי לו – עשה לו כל דבר טוב: בנך הוא, שלך הוא, אשר ירה הכָּא שלך. אל תפריד את לבך ממנו; הזרע | `כִּי אֶת אֲשֶׁר יֶאֱהַב יְהוָה יוֹכִיחַ וּכְאָב אֶת בֵּן יִרְצֶה` (משלי ג:יב) | equivalent | יחס האב לבן הטוב; מוטיב משותף. |
| 7,12 | jri̯ =s šnty jr nnm =f thi̯ =f sḫr =k btn.n =f ḏd.t nb.t šm rʾ =f m md,t ẖs.t ⟨bꜣk⟩ =k sw r rʾ =f mj-qd =f wdi̯ r =k m ḫbd.n =sn | עושה איבה. אם יתעה, יעבור על עצתך, יתנגד לכל הנאמר, ופיו הולך בדבר עלוב – העבד אותו כפי פיו כולו. המטיל (עצמו) נגדך – הוא אשר שנאו הם; | `כִּי יִהְיֶה לְאִישׁ בֵּן סוֹרֵר וּמוֹרֶה אֵינֶנּוּ שֹׁמֵעַ בְּקוֹל אָבִיו` (דברים כא:יח) | divergence | הבן הסורר שאינו שומע; בתורה – הבאה לזקני העיר וסקילה, אצל פתח־חותפ – העבדה והרחקה, "כמי ששנאו האלים". |
| 8,1 | wdd sdb n =f pw m ẖ,t n nnm.n sšm =sn n gmi̯.n | מצוּוה לו נזק הוא, בבטן. לא יתעה המונהג בידם; לא ימצא | `זֹרוּ רְשָׁעִים מֵרָחֶם תָּעוּ מִבֶּטֶן` (תהלים נח:ד) | equivalent | הרשע התועה "מבטן"; ההקבלה מילולית כמעט (בטן / תעייה), אך בתהלים קללה, וכאן הסבר לכישלון הבן. |
| 8,3 | r nmt.pl =k wdd n =k hrw tp(.j) m swꜣ ḫpr šnꜥ.t(w) =k | כפי צעדיך, אשר צוו לך ביום הראשון. אל תחלוף – יהיה שידחו אותך. | `אַל תִּתְהַדַּר לִפְנֵי מֶלֶךְ … כִּי טוֹב אֲמָר לְךָ עֲלֵה הֵנָּה מֵהַשְׁפִּילְךָ לִפְנֵי נָדִיב` (משלי כה:ו–ז) | equivalent | אל תתפוס מקום שאינו שלך בחצר; מוטיב משותף. |
| 8,5 | r tp-ḥsb sḫr nb ḫft ḫꜣy jn nṯr sḫnt s,t n ⟨jri̯⟩ =⟨tw⟩ | כפי התקן; כל עצה – לפי חבל־המדידה. האל הוא המקדם במעמד; לא יעשו | `כִּי לֹא מִמּוֹצָא וּמִמַּעֲרָב … כִּי אֱלֹהִים שֹׁפֵט זֶה יַשְׁפִּיל וְזֶה יָרִים` (תהלים עה:ז–ח) | equivalent | האל הוא המרים במעמד, לא מאמץ האדם; מוטיב משותף. |
| 8,7 | jw,tw pẖr =f ḏd m ẖ,t =f ḫpr =f m ṯsw ḏs =f nb ḫ,t ḏi̯ =j | אשר אינו מסובב דבר (שנאמר) בבטנו – נהיה הוא בעצמו למפקד, בעל־רכוש: "אשים – | `הוֹלֵךְ רָכִיל מְגַלֶּה סּוֹד וְנֶאֱמַן רוּחַ מְכַסֶּה דָבָר` (משלי יא:יג) | equivalent | "נאמן־הלב" המצרי (*kfꜣ-jb*, "מכוסה־לב") ו"מכסה דבר" של משלי – אותה תמונה של כיסוי; מוטיב משותף. |
| 9,3 | bss kꜣp,w ḫpr sfꜣ,t jr wnn =k m sšm,y hru̯ sḏm =k | מגיח התמסח – ונהיית ההזנחה. אם תהיה מנהיג, היה נעים כשאתה שומע | `מֵשִׁיב דָּבָר בְּטֶרֶם יִשְׁמָע אִוֶּלֶת הִיא לוֹ וּכְלִמָּה` (משלי יח:יג) | equivalent | השמיעה לפני התשובה; כאן – השמיעה לפונה, בלי לדחות אותו. |
| 9,7 | spr.t.n =f nb.t ḥr =s m ḫpr.t(j) =sn snꜥꜥ jb pw sḏm nfr jr mri̯ =k | כל אשר ביקש עליה – נהיית; ריכוך הלב הוא – שמיעה טובה. אם תרצה | `מַעֲנֶה רַּךְ יָשִׁיב חֵמָה` (משלי טו:א) | equivalent | הדיבור (כאן: השמיעה) הרך כמרגיע את הלב; מוטיב משותף. |
| 9,9 | m ḫnms rʾ-pw r bw nb ꜥq =k jm ꜥḥꜣ.t(j) m tkn m ḥm,t.pl | או כרֵעַ, לכל מקום אשר תיכנס שם – היזהר מלהתקרב אל הנשים. | `הַרְחֵק מֵעָלֶיהָ דַרְכֶּךָ וְאַל תִּקְרַב אֶל פֶּתַח בֵּיתָהּ` (משלי ה:ח) | equivalent | האזהרה מפני האשה; במשלי – "הזרה", כאן – נשות הבית שאדם בא בו כאורח. בלי `זרה` בתרגום (§14.4). |
| 9,11 | z ḫꜣ r ꜣḫ,t n =f ꜣ,t kt.t mj,tt rsw,t jw pḥ.tw mt | אלף איש מן המועיל להם: רגע קטן, כמו חלום – ומגיעים אל המוות | `הוֹלֵךְ אַחֲרֶיהָ פִּתְאֹם … וְלֹא יָדַע כִּי בְנַפְשׁוֹ הוּא` (משלי ז:כב–כג); `כִּי רַבִּים חֲלָלִים הִפִּילָה` (משלי ז:כו) | equivalent | הרגע הקצר והמוות שבסופו; וגם  מול "אלף איש". |
| 10,4 | nb.t ꜥrf pw n ḫbd,t nb.t wꜣḥ z ꜥqꜣ =f mꜣꜥ,t šmi̯ r nmt,t =f | שק היא של כל דבר נתעב. מתמיד אדם אשר דרכו האמת, ההולך לפי צעדיו – | `הוֹלֵךְ בַּתֹּם יֵלֶךְ בֶּטַח` (משלי י:ט) | equivalent | ההולך בדרך הנכונה יתמיד; מוטיב משותף. |
| 10,5 | jw =f jri̯ =f jm(,j)t-pr jm nn-wn j{j}⟨s⟩ ꜥwn-jb m ꜥwn jb =k ḥr psš,t | עושה הוא צוואה בזאת; אין קבר לבעל בצע־הלב. אל יבצע לבך על החלוקה; | `עֹכֵר בֵּיתוֹ בּוֹצֵעַ בָּצַע` (משלי טו:כז) | equivalent | הבוצע בצע מביא חורבן על ביתו; כאן – אין לו קבר. אותו שורש עברי מתרגם כאן את *ꜥwn*. |
| 10,6 | m ḥnt n-js r ẖr,t =k m ꜥwn jb =k r hꜣw =k wr twꜣ n | אל תהיה להוט, אלא לחלקך; אל יבצע לבך על קרוביך. גדולה תביעתו של | `לֹא תַחְמֹד בֵּית רֵעֶךָ` (שמות כ:יג) | equivalent | הדיבר העשירי, איסור החמדה; במצרית *ꜥwn jb* "בצע־לב" הוא תכונה ומחלה, לא חוק – ואת השורש חמד אין לכתוב בשורה (TALES). |
| 10,9 | mri̯ =k ḥm,t =k m-ẖn(w) ḥsb mḥ ẖ,t =s ḥbs sꜣ =s pẖr,t pw n.t ḥꜥ.pl =s mrḥ,t | אהוב את אשתך בבית כראוי: מלא את בטנה, הלבש את גבה; תרופה היא לגופה – המשחה. | `רְאֵה חַיִּים עִם אִשָּׁה אֲשֶׁר אָהַבְתָּ` (קהלת ט:ט); `וּשְׂמַח מֵאֵשֶׁת נְעוּרֶךָ` (משלי ה:יח) | equivalent | "אהוב את אשתך"; וגם . מוטיב משותף, בלי קשר ספרותי. |
| 10,9 | mri̯ =k ḥm,t =k m-ẖn(w) ḥsb mḥ ẖ,t =s ḥbs sꜣ =s pẖr,t pw n.t ḥꜥ.pl =s mrḥ,t | אהוב את אשתך בבית כראוי: מלא את בטנה, הלבש את גבה; תרופה היא לגופה – המשחה. | `שְׁאֵרָהּ כְּסוּתָהּ וְעֹנָתָהּ לֹא יִגְרָע` (שמות כא:י) | divergence | חובות הבעל לאשתו (מזון, כסות) כחוק; אצל פתח־חותפ – כעצה, ובתוספת המשחה. |
| 11,2 | ꜥq =f jw ḏd =tw kꜣ pw ꜥꜣb n rḫ.n =tw ḫpr.t sjꜣ =f dwꜣ | מקורביו – אומרים: "כָּא *שבע־רצון* הוא!" אין יודעים את הנהיה, (אשר) יכיר מחר. | `אַל תִּתְהַלֵּל בְּיוֹם מָחָר כִּי לֹא תֵדַע מַה יֵּלֶד יוֹם` (משלי כז:א) | equivalent | אין יודעים את המחר; מוטיב משותף (גם קגמני 2,2). |
| 11,4 | jy.wj n jni̯.tw ḥtp,t r dmj jw jni̯.tw ꜥq wn ꜣq | "ברוך בואך!" אם לא יובא שלום אל הנמל – יובאו המקורבים כשיש אסון. | `בְּכָל-עֵת אֹהֵב הָרֵעַ וְאָח לְצָרָה יִוָּלֵד` (משלי יז:יז) | equivalent | הקרובים בעת צרה; מוטיב משותף. |
| 11,5 | jmi̯ =k wḥm mskj n md,t n sḏm =k sw pri̯.w pw n tꜣ-ẖ,t | אל תחזור על שמועה של דבר שלא שמעת: הפורץ הוא של רותח־הבטן. | `הוֹלֵךְ רָכִיל מְגַלֶּה סּוֹד` (משלי יא:יג) | equivalent | ההולך רכיל; מוטיב משותף. |
| 11,10 | ꜣḫ st r tftf md(w)y =k rḫ n =k wḥꜥ =k jn ḥmw,w | מועילה יותר מן הטֶפְטֶף. דַּבֵּר (רק) כשאתה יודע שתפתור: האומן הוא | `גַּם אֱוִיל מַחֲרִישׁ חָכָם יֵחָשֵׁב` (משלי יז:כח) | equivalent | השתיקה במקום הדיבור; מוטיב משותף. |
| 11,12 | jr wsr =k ḏḏ =k snḏ =k m rḫ m hru̯.t ḏd m wḏ tp | אם חזק אתה, תשים את היראה ממך בדעת, בנעימות הדיבור. אל תצווה, אלא | `בְּאֹרֶךְ אַפַּיִם יְפֻתֶּה קָצִין וְלָשׁוֹן רַכָּה תִּשְׁבָּר גָּרֶם` (משלי כה:טו) | equivalent | כוח בדיבור הרך; מוטיב משותף. |
| 12,1 | m qꜣi̯ jb =k tm =f dḥj m gr zꜣw ḫn⟨d⟩ =k | אל ירום לבך, פן יושפל; אל תשתוק; היזהר פן תכשיל, | `וְרָם לְבָבֶךָ` (דברים ח:יד); `גְּבַהּ־לֵב` (משלי טז:ה) | equivalent | ובפסוק ; כאן הניב המצרי *qꜣ jb* "לב גבוה" קרוב מאוד לעברי, ו`רום לב` הוא המלה הטבעית לו |
| 12,1 | m qꜣi̯ jb =k tm =f dḥj m gr zꜣw ḫn⟨d⟩ =k | אל ירום לבך, פן יושפל; אל תשתוק; היזהר פן תכשיל, | `וְרָם לְבָבֶךָ` (דברים ח:יד); `גְּבַהּ־לֵב` (משלי טז:ה) | equivalent | ניב משותף לשתי הלשונות, בלי קשר ספרותי. |
| 12,2 | wšb =k md,t m {n}nsr sḥri̯ ⟨ḥr⟩ =k ḥn tw jw nsw,t | תענה דבר באש. הרחק (את פניך), שלוט בעצמך: הלהבה | `וּדְבַר-עֶצֶב יַעֲלֶה-אָף` (משלי טו:א) | equivalent | התשובה "באש" מבעירה; מוטיב משותף. |
| 12,4 | mnš ⟨jb⟩ n hrw r-ꜣw =f nn jri̯.n =f ꜣ,t nfr.t wnf jb n hrw r-ꜣw =f nn | העגום כל היום – לא יעשה רגע טוב; השמח כל היום – לא | `עֵת לִבְכּוֹת וְעֵת לִשְׂחוֹק` (קהלת ג:ד); `לֵב שָׂמֵחַ יֵיטִיב גֵּהָה` (משלי יז:כב) | equivalent | לכל דבר עתו; מוטיב משותף. גם . |
| 13,2 | šd mꜣd.w n.w ⟨wḏ⟩ꜥ md(w)y =k m rḏi̯ ḥr gs zꜣw | הצל את זרועות־המוט של הדין; דבר בלי להטות אל צד. היזהר | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים` (דברים טז:יט) | equivalent | איסור הטיית הדין; במצרית התמונה היא של מאזניים, ש"זרועותיהם" צריכות להישאר מאוזנות (ו`משפט` אינו נכתב בשורה, `../renderings.md` §5.1). |
| 13,5 | ḥr ꜥqꜣ =f swꜣ ḥr =f m sḫꜣ.w sw ḏr gr =f n =k | בשל ישרותו – חלוף על פניו; אל תזכיר לו, מאחר ששתק לך | `שֵׂכֶל אָדָם הֶאֱרִיךְ אַפּוֹ וְתִפְאַרְתּוֹ עֲבֹר עַל-פָּשַׁע` (משלי יט:יא) | equivalent | "לעבור על פשע", הסליחה כמעלה; במצרית "לחלוף על פניו" (*swꜣ ḥr*). |
| 14,1 | pr sꜣḥ.w m dꜣjr ḫ,t tkn jm =k | בית שכנים, אל תגזול רכוש של קרוב בך, | `לֹא תַחְמֹד בֵּית רֵעֶךָ` (שמות כ:יג) | equivalent | בית השכן ורכוש הקרוב; במצרית האיסור הוא לגזול, לא לחמוד (ו`חמד` אינו נכתב בשורה, TALES). |
| 14,4 | tkn.t(j) jmi̯ =k nk ḥm,t ẖrd rḫ.n =k ḫsf.t | הקרוב. אל תשכב עם אשה (או) ילד, (אם) ידעת התנגדות | `וְלֹא אָבָה לִשְׁמֹעַ בְּקוֹלָהּ` (שמואל ב יג:יד) | absent | אין בתנ"ך איסור המנוסח כהסכמת הצד השני; התורה אוסרת לפי קרבה וזהות (ויקרא יח), ומספרת על כפייה כנבלה (). הקריאה המצרית עצמה במחלוקת. |
| 14,7 | qd n ḫnms m šnn r =k tkn jm =f jri̯ sp ḥnꜥ =f wꜥ.w | אופיו של רֵעַ – אל תשאל את הקרוב אליו; עשה את העניין עמו לבד, | `רִיבְךָ רִיב אֶת רֵעֶךָ וְסוֹד אַחֵר אַל תְּגָל` (משלי כה:ט) | equivalent | הבירור עם הרע ביחידות; מוטיב משותף. |
| 14,13 | jr pri̯ m mẖr n ꜥq.n jn tʾ n psš.t | אשר יוצא מן המחסן – לא ייכנס (בחזרה); לחם החלוקה הוא – | `שַׁלַּח לַחְמְךָ עַל פְּנֵי הַמָּיִם` (קהלת יא:א) | equivalent | הלחם שיוצא ואינו חוזר; בקהלת – בתקווה שישוב, כאן – מנת לחם שנועדה לחלוקה. |
| 15,5 | r sḫꜣ,w ḫsf ḥr-tp sbꜣ ḥr-qd jw nḏri̯.t ḫw(w) r mn,t bj(ꜣ) | יהיה לזיכרון. ייסר כראוי, למד ביסודיות: אחיזת חטאים תהיה לסוג של מופת; | `חוֹשֵׂךְ שִׁבְטוֹ שׂוֹנֵא בְנוֹ` (משלי יג:כד) | equivalent | הייסור כחלק מן החינוך; מוטיב משותף. |
| 16,3 | ꜣḫ sḏm n zꜣ sḏm.w ꜥq sḏm m sḏm.w ḫpr sḏm.w | מועילה השמיעה לבן השומע. נכנסת השמיעה בשומע – נהיה השומע | `שְׁמַע בְּנִי מוּסַר אָבִיךָ` (משלי א:ח); `אֹזֶן שֹׁמַעַת תּוֹכַחַת חַיִּים` (משלי טו:לא) | equivalent | השמיעה כראש החינוך; גם . ההקבלה הקרובה ביותר בין המוסר הזה למשלי – אך הניסוח המצרי, השמיעה ששבה ונכנסת אל השומע, אין לו מקבילה מילולית. |
| 16,6 | šzp zꜣ ḏd jt =f ḫpr n =f jꜣw,t ẖr =s mrr.w | שיקבל בן את דבר אביו! נהיית לו זקנה בשל זה. האהוב | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ לְמַעַן יַאֲרִכוּן יָמֶיךָ` (שמות כ:יא) | equivalent | השכר על קבלת דברי האב: אריכות ימים; במצרית – "זקנה", בלי ציווי אלוהי. |
| 16,7 | nṯr pw sḏm n sḏm.n msdd.w nṯr jn jb sḫpr | לאל הוא השומע; לא ישמע השנוא לאל. הלב הוא המהווה | `שֹׁמֵר מִצְוָה שֹׁמֵר נַפְשׁוֹ` (משלי יט:טז) | equivalent | השמיעה ושכרה; במצרית השמיעה עצמה היא סימן האהבה האלוהית. |
| 16,9 | sḏm ḏd mrr sḏm pw jrr ḏd.t nfr.wj sḏm zꜣ n | השומע את הדבר; האוהב לשמוע הוא העושה את הנאמר. כמה טוב, כששומע בן | `נַעֲשֶׂה וְנִשְׁמָע` (שמות כד:ז) | equivalent | השמיעה והעשייה צמודות; בעברית המקראית `שָׁמַע` הוא גם "ציית" – כמו *sḏm*. |
| 16,10 | jt =f rš.wj ḏdd.j n =f nn zꜣ ꜥni̯ =f m nb | לאביו! כמה שמח מי שנאמר לו זה: "בן – נאה הוא, אדון | `בֵּן חָכָם יְשַׂמַּח אָב` (משלי י:א) | equivalent | שמחת האב בבן; מוטיב משותף. |
| 16,12 | jt =f jw sḫꜣ =f m rʾ n ꜥnḫ.w.pl n,tjw tp tꜣ | אביו, וזכרו בפי החיים אשר עלי אדמות, | `זֵכֶר צַדִּיק לִבְרָכָה` (משלי י:ז) | equivalent | הזיכרון בפי החיים |
| 16,12 | jt =f jw sḫꜣ =f m rʾ n ꜥnḫ.w.pl n,tjw tp tꜣ | אביו, וזכרו בפי החיים אשר עלי אדמות, | `זֵכֶר צַדִּיק לִבְרָכָה` (משלי י:ז) | divergence | במצרית בלי "צדיק": הזיכרון הוא של הבן השומע. |
| 17,5 | nn jri̯.n =f ḫ,t-nb.t mꜣ =f rḫ m ḫm ꜣḫ,t | לא יעשה דבר; רואה הוא את הדעת כאי־ידיעה, את המועיל | `דֶּרֶךְ אֱוִיל יָשָׁר בְּעֵינָיו` (משלי יב:טו) | equivalent | השוטה ההופך את סדרי הערכים; מוטיב משותף. |
| 17,8 | bj(ꜣ),t =f jm m-rḫ n sr.w.pl ḥr mt ꜥnḫ rꜥ-nb | אופיו בזה – בידיעת השרים, אומרים: "מת חי בכל יום." | — | absent | הצירוף "מת חי" אין לו מקבילה בתנ"ך; מנוגד לו הזיכרון "בפי החיים" (16,12). |
| 17,11 | pḥ =f jmꜣḫ sḏd =f m-mj,tt n ẖrd.pl =f m smꜣwi̯ | מגיע הוא לכבוד; מספר הוא כמו כן לילדיו, בחדשו | `וְשִׁנַּנְתָּם לְבָנֶיךָ` (דברים ו:ז) | equivalent | מסירת ההוראה לבנים; במצרית – מסירת "מוסר האב", לא תורה אלוהית. |
| 18,2 | ꜥnḫ ms.w.pl =k jr tp,j? jyi̯.y ẖr | יחיו ילדיך. הנה הראשון? הבא עם | `אֲשֶׁר יִיטַב לְךָ וּלְבָנֶיךָ אַחֲרֶיךָ` (דברים ד:מ) | equivalent | שכר השמירה על הדרך הנכונה עובר לבנים; מוטיב משותף. |
| 18,7 | m jṯi̯ md,t m jni̯ s(j) m rḏi̯ k.t m s,t | אל תיקח דבר (ממקומו), אל תביא אותו (בחזרה), אל תשים דבר אחד במקום | `לֹא תֹסִפוּ עַל הַדָּבָר אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם וְלֹא תִגְרְעוּ מִמֶּנּוּ` (דברים ד:ב) | divergence | לשון דומה (לקחת / להביא, לגרוע / להוסיף), אך במצרית לפי ה־TLA זו עקביות הדיבור ("לא פעם כך ופעם כך"), לא שמירת נוסח של צו. |
| 18,12 | sḫr =k nb r s,t =f hrp jb =k ḥn rʾ =k | כל עצתך במקומה. הַשְׁקֵעַ את לבך, שלוט בפיך, | `שֹׁמֵר פִּיו וּלְשׁוֹנוֹ שֹׁמֵר מִצָּרוֹת נַפְשׁוֹ` (משלי כא:כג) | equivalent | שליטה בפה; מוטיב משותף. |
| 19,5 | r ḏdd.t n =f m =k zꜣ nfr n ḏḏ nṯr rḏi̯ ḥꜣw-ḥr ḏdd.t n =f ḫr nb =f jri̯ =f mꜣꜥ,t | יותר ממה שנאמר לו!" ראה, בן טוב, שהאל נותן, העושה יותר ממה שנאמר לו בידי אדונו – עושה הוא אמת; | `בֵּן חָכָם יְשַׂמַּח אָב` (משלי טו:כ); `הִנֵּה נַחֲלַת יְהוָה בָּנִים` (תהלים קכז:ג) | equivalent | הבן הטוב כמתנה ושמחה; מוטיב משותף. "שהאל נותן" – הבן כמתנת האל, כמו |
| 19,5 | r ḏdd.t n =f m =k zꜣ nfr n ḏḏ nṯr rḏi̯ ḥꜣw-ḥr ḏdd.t n =f ḫr nb =f jri̯ =f mꜣꜥ,t | יותר ממה שנאמר לו!" ראה, בן טוב, שהאל נותן, העושה יותר ממה שנאמר לו בידי אדונו – עושה הוא אמת; | `בֵּן חָכָם יְשַׂמַּח אָב` (משלי טו:כ); `הִנֵּה נַחֲלַת יְהוָה בָּנִים` (תהלים קכז:ג) | equivalent |  |
| 19,7 | jṯi̯ =k rnp,t.pl m ꜥnḫ nn šri̯ jri̯.t.n =j tp tꜣ jṯi̯.n =j rnp,t 110 m ꜥnḫ n ḏḏ n =⸢j⸣ | תיקח שנים בחיים. לא מעט הוא אשר עשיתי עלי אדמות: לקחתי מאה ועשר שנים בחיים, אשר נתן לי | `וַיָּמָת יוֹסֵף בֶּן מֵאָה וָעֶשֶׂר שָׁנִים` (בראשית נ:כו) | equivalent | מאה ועשר שנים, אורך החיים האידאלי במצרים, הוא גם גיל מות יוסף במצרים (וגם יהושע, יהושע כד:כט). ההקבלה ידועה: הסיפור המקראי מעניק ליוסף את גיל החיים המושלם של המסורת המצרית. |

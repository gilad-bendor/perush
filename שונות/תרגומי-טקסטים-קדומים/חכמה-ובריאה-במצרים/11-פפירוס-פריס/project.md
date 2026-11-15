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

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)

# Project 8: the Shipwrecked Sailor (`סיפור המלח הנטרף`)

## Scope
The whole tale on pPetersburg 1115 (Middle Kingdom, c. 1900 BCE), KEY `SS`: 191 lines (`1`–`189`, with `30-31`, `40-41`),
complete with its colophon. The frame: a "follower" (šms.w) consoles his master, returning from a failed expedition, with
his own story: a storm off the mines' route, a ship of 120 sailors lost, he alone thrown on an island; a great serpent
of 30 cubits, with a beard and gold-covered body, takes him in its mouth to its home, tells him of the fallen star that
burned its family, and foretells his rescue; a ship comes, the serpent sends him home with gifts, and the island sinks
into the waves. The master's bitter answer closes it.

## Base text
AED-TEI `QUFWZTEPLRE4NHKCPAJXGSAOSQ` (TLA 2018), CC BY-SA 4.0. Rank 3: the TLA's German (`tr SS`), after drafting;
Lichtheim AEL I, Simpson, Parkinson only from memory.

## What to look for
- **Jonah 1–2** (the storm, a lone survivor, a great creature, the return), **Gen 3:1** (a speaking serpent – here a
  benevolent god; `נָחָשׁ` for ḥfꜣw, renderings §11.2), **Isa 14:12** (a star that fell, around 129 `sbꜣ`), **Ps 107:23–30**; the serpent of 30 cubits (61–64).
- "If you are brave, master your heart: you will embrace your children, kiss your wife, see your house" (around 132–134; check on the base).

## SS 1–189 (the whole text; Round 5 run 6, translator)

### Scope
All 191 lines (`1`–`189`, with the interlinear `30-31` and `40-41`), the whole tale with the colophon; the papyrus is
complete (only `182`, `185`, `188`, `189` have restorations, all small). Ten scene headings. The text: a follower
consoles his master, back from a failed expedition, with the story of his shipwreck and of the serpent-god of the
island of the ka, who consoles him in turn with his own story of loss; the master's bitter answer and the colophon.
Files: `annotated-SS.rtl.md`, `translation--intro-SS.rtl.md`, the generated `translation-SS.rtl.md` / `translation.rtl.md`.

### Sources consulted
- AED-TEI / TLA 2018 (`egypt_tools.py data SS`), lemma ids and morphology on every word; the TLA's German (`tr SS`)
  read after each section was drafted and quoted from the tool's output only.
- Lichtheim (AEL I), Simpson, Parkinson: from memory, by name only for a reading (129 "through prayer"; 189 "Ameny's
  son Amen-aa"), never quoted.
- The corpus's drafted texts (AM, MK, HC, TB, WE; SI and BD in progress) through `lex`, `grep`, and a scratch
  lemma → Hebrew survey of every SS lemma (scratchpad, not committed).
- Bible: every verse printed with `check_bible_quotes.py --show` before quoting.

### Decisions
- **Frame words:** šms.w `מלווה` (as SI); jqr `מצוין` (as SI B48; `מעולה` is mnḫ's in AM, WE, SI), so 1 "the excellent
  follower", 183 "do not play the excellent one" and 188 "the scribe excellent of fingers" share one word (the
  master throws the title back); ḥꜣ.tj-ꜥ `הנגיד` (as SI R1); jtj `הריבון` (WE); ẖnw `הבירה`.
- **The sea and the storm:** wꜣḏ-wr `הירוק־הגדול` (literal: `ים` is the Semitic loan y~mꜥ, TB); ḏꜥ `סערה`; nšnj
  `רוגז` (rejected `זעם` = TB's qnd.t; `זעף` would pre-empt Jonah 1:15, which the apparatus shows); nwy.t `גל`, wꜣw
  `נחשול`; ṯꜣw `רוח` (licensed); fꜣi̯ `נישא` (HC); wḥmy.t `הישנות` (literal, with the TLA's own "lit."); dp.t `אונייה`;
  ḥꜥ.w `אניות־משא` (kept apart from dp.t and WE's ꜥḥꜥ.w); sqd `מלח`; mḥ `אמה`; ḫt `עץ` in all lines (the mast of
  36/105 too).
- **Verbs of the story:** hꜣi̯ `ירד` everywhere (the sailor's descent to the sea 24, 89, 169 and the star's 130: no
  "fell"); sr `הכריז` (as BD 50; rejected `צפה`, which SI B19 has for wrš "watch"); sḏd `סיפר`; mꜣꜣ `חזה`; rḏj "put"
  `שם` (39 and 177 `הוּשַׂמְתִּי`: the wave put him on the island, the king put him in office), "give" `נתן`, "cause"
  `גרם`; pḥ and spr both `הגיע` (two lemmas, never in one line; the alternative `השיג` for pḥ reads oddly of a place);
  sꜣḥ "approach" `קרב` (SI B12) vs sꜣḥ "endow" `מוענק` (178); dp "taste" `טעם` (124, 181); mwt `מת` also of the ship
  (38, 106) and of the grieving god (131), literal; sbṯ `לעג` (AM 24.9 has the same TLA lemma tla132270; the TALES gate
  would allow `צחק`, but lemma consistency wins: Gen 18:12 in the apparatus).
- **Splits by sense, recorded at the lines:** ḥꜣw `הפרזה` (13; AM/HC `שפע`); šdj `שלף` (54; AM `חילץ`, `קרא`); sḫpr ḫ.t
  `הצית` (55; the root בער is gated in the tales); jb "think" `סבר` (57; TB `רצה`); wpj rʾ `פתח את פיו` (67, 81; AM
  `פסק`, TB `גילה`).
- **The serpent and the god:** ḥfꜣw `נחש` (61, 127; the dossier rule); ḫbs.wt `זְקָנוֹ` vocalized (not jꜣw `זקן`);
  ḫsbḏ `ספיר`, mꜣꜥ `אמיתי` (WE 10,11); nṯr `האל`, nṯr.w `לָאֵלִים`; kꜣ `הַכָּא` (114); bꜣw `עצמה`; snḏ `חשש` (111: not
  `אל תירא`, which the apparatus quotes); nḏs `צעיר` (AM 2.14); zb.t `משלוח` (WE has `מטען` for qnj); zꜣtw `רצפה` (BD
  111; `קרקע` is jwdn's); gs.w-pr `בתי־הפולחן` (`מקדש`, `בית־האל`, `היכל` are taken); mnmn `מתנודדת` (`רועד` taken
  twice); ꜥd `ללא פגע`; zbj-n-sḏ.t `שילוח־לשלהבת` (literal; not `עולה`, Gen 8:20 in the apparatus); qnj (verb)
  `חיבק`, qnj (noun) `חיק` (AM 26.2), ḥpt `גיפף`; qni̯ `אמיץ`, rwḏ `איתן` (PT600), mꜥkꜣ `נועז`, nḫt `חזק`.
- **Two lemmas, one Hebrew (kept, never in one line):** mw / nwy `מים` (14, 184 / 85, 154); ẖrd `ילד` (tales) and
  ms.w `ילודים` (128: the root ילד kept for ms "give birth"; `יְלָדִים` of §4.4 would collide with ẖrd in adjacent
  lines).
- **The products of Punt** transliterated (jbj `אִיבִּי`, ḥknw `שמן־חֶקֶנוּ`, jwdnb, ẖsꜣy.t, tjšps, šꜣꜥsḫ, ky `קופי־כִּי`);
  the TLA's Ladanum / Balsam identification of jbj / ẖsꜣy.t (`לוט`, `צרי`, Gen 37:25) is in the apparatus only;
  ꜥntjw `מור`, msdm.t `כחל`, mꜥmꜥ `ג׳ירפה`, nḏḥy.t n.t ꜣbw `שיני פיל` (not `שנהבים`, 1 Kgs 10:22 in the apparatus);
  **gwf `קופים` [cognate: loanword]** with `[היתר שער]` (see the tool problems).
- **Repeated passages:** 26–41 and 89–110 (the ship and the storm), 67–71 and 81–85 (the serpent's question), 51–52 =
  115, 133 = 168, 21–22 = 125, 140–141 → 162–163 (the promised and the given perfumes, in the same order and words),
  143–144 → 176 (the promised and the actual thanksgiving), 5 → 171 (the praise at both landings): the later copy
  copies the first copy's Hebrew; each difference follows a difference in the Egyptian and is noted
  `[מקבילה: SS …]` at the line. `verify` lists no identical-source difference.
- **Speaker changes without introduction** (73, 138) marked only by a dash; `ḏd=f` `אומר הוא` (§3a) even in narrative.
- **Colophon order:** 189 `בנו של אַמֶנִי, אַמֶן־עָא` (the TLA and Lichtheim: the scribe is Amen-aa, son of Ameny;
  the Egyptian order reversed for Hebrew grammar, noted).

### Open decisions for the user
- 36 / 105 (`העץ הוא שהכה? אותו בשבילי`): the mast "struck" the wave (TLA) or the sailor clung to a piece of wood?
- 129 `בתבונה?` (the base's lemma sšꜣ "wise foresight (?)") vs the usual "through prayer".
- 124 `טעם` / 181 `טעמתי` for dp "taste, experience": literal, as Ps 34:9; an alternative would be `חווה` (a modern word).
- pḥ / spr both `הגיע`: acceptable, or should pḥ take `השיג` (MK, HC) in the tales too?
- nšnj `רוגז` vs `זעף` (the natural sea word, Jonah 1:15): chosen to avoid pre-empting Jonah.

### Progress log
- Drafted in ten scenes (1–22, 23–41, 42–60, 61–80, 81–110, 111–124, 125–138, 139–160, 161–176, 177–189), each
  saved, filled and verified at once; the TLA's German read after each group of scenes: changes from it were 44
  (`של עץ`, singular), 113 (`הגעת אליי` as the ground of the reassurance), 132 (the condition includes "your heart
  is firm"), 138 (the sailor addresses the serpent directly), 167 (`להודות לאל בעבורו`, aligned with 143 / 176),
  189 (the scribe's filiation).
- Pass (a), fidelity: every line against the base; 53 `(הרבה)` added (the unwritten object), the `?` of 124 removed
  (only the ending is uncertain) and added at 169 `עד?` (the editor's doubtful supplement); brackets checked (182
  `ל[פי]`, prefixes from restored prepositions unbracketed in 185, 188; 189 one sign); every negation checked (n
  sḏm.t=f `טרם` at 31, 32, 98; n sḏm=f `לא` 38, 107; nn `אין` / `אינני` 7, 17, 51–52, 74, 79–80, 100, 115, 130–131;
  nn sḏm=f `לא אזכיר` 128; n rḫ `אינם יודעים` 148; n wr `לא רב` 150; n-sp `אף לא פעם` 153; m + inf. `אל` 111–112, 183).
- Pass (b), consistency: a lemma → Hebrew survey of every SS lemma against the corpus, and `grep` of every new Hebrew
  word: changed jqr `מעולה` → `מצוין`, zꜣtw `קרקע` → `רצפה`, gs.w-pr `היכלות` → `בתי־הפולחן`, zb.t `מטען` → `משלוח`,
  mnmn `רועדת` → `מתנודדת`, nšnj `זעם` → `רוגז`, sr `צופים` → `מכריזים`, jbj `משחת־אִיבִּי` → `אִיבִּי` (`משחה` is
  HC's mrḥ.t; this also removed a false hit of the שחת gate), šdj `נטלתי` → `שלפתי`; `זְקָנוֹ` vocalized.
- Pass (c), Hebrew: the generated `translation-SS.rtl.md` read through; one anachronistic phrase in a note removed;
  eight footnotes (25, 36, 61, 114, 124, 130, 149, 186).
- `check_bible_quotes.py` on the annotated, intro and generated files: 0 problems (42 הקבלה bullets).
  `verify SS --strict`: 0 problems, 0 repeated-line differences. `build SS` run; `build_parallels_index.py` not run
  (the coordinator's).

### The text on its own terms
- **Consolation by storytelling** is the theme and the form: the follower tells a "similar thing" (21–22), the serpent
  tells a "similar thing" (125) in the same words, and the serpent states the moral: "How glad is the one who tells
  what he has tasted, when the painful thing has passed" (124; echoed by the sailor, 181). A tale within a tale
  within a tale.
- **The master's refusal** (183–186): the consolation fails; the man about to face the king is a bird watered at dawn
  for the morning's slaughter. The oldest Egyptian tale ends on an unanswered, bitter question.
- **The heart:** the master is to speak "with his heart in his hand" (16); the castaway's only companion is his heart
  (42); the serpent's teaching is "if you are brave and your heart is firm" (132); the terror of the god's presence
  is "I do not know myself" (76).
- **A god who grieves:** the serpent lost seventy-five kin, his little daughter among them, to a star that came down;
  he "died" for them (131) and was saved only by not being there. From his own loss he consoles a man.
- **The island of the ka** (114): a place of abundance (47–52, 115–116), a perfect Egypt in the sea, which sinks into
  the water once the visitor leaves (153–154): not to be revisited, and the vowed offerings can never be delivered.
- **Gifts and a good name:** the sailor vows incense, bulls, birds and ships (139–148); the god laughs – he is the ruler
  of Punt, the land of incense (149–152) – and asks only for "my good name in your town: that is my due" (159). The
  tale itself is the payment.
- **Dying at home** is the blessing: "you will die in your town" (123), "you will become young in the Residence until
  you are buried" (168–169); exile and death abroad are the fear.
- **The ship that "died"** (38, 106) and the god who "died" of grief (131): the same verb for the thing and the god, a
  world in which ships and gods share the language of living beings.
- **Prostration and court etiquette:** on the belly before the god (68, 82, 137, 161), arms bent (87, 161), kissing the
  floor; the same gestures as before the king (174).
- **Professional pride:** the sailors are the "choice of Egypt", reading sky and land, braver than lions, with "no fool
  among them" (28–30, 94–101) – yet the storm takes them all; the scribe signs as "excellent of fingers" (188).

### Key parallels
- **Jonah 1–2:** a storm at sea, a lone survivor, three days (41 ↔ Jonah 2:1), a giant creature that takes the man in
  its mouth – but carries him unharmed to its home instead of swallowing him (77) – and deliverance to land; the
  ship as a living being (38 "died" ↔ Jonah 1:4 `חִשְּׁבָה לְהִשָּׁבֵר`); a sacrifice after the rescue (56 ↔ Jonah 1:16).
  [divergence / equivalent; a shared motif, no dependence].
- **Gen 3:1, 3:14:** a speaking serpent – here a god, benevolent; and the man, not the serpent, lies "on his belly"
  (68) [divergence].
- **Job 1:16:** fire from heaven burns the children and the household, "and I alone escaped" – the serpent's story
  (129–132) and the sailor's "not one remained except me" (107–108) [equivalent].
- **Isa 14:12:** the star that comes down (129–130) – but with `ירד`, not `נפל`, and no guilt [divergence].
- **Ps 107:23–31:** "those who go down to the sea in ships" (25 `ירדתי אל הירוק־הגדול באונייה`), the storm wind and
  the waves, and the thanksgiving on arrival (5 `הודו לאל` ↔ 107:31 `יוֹדוּ לַיהוָה`) [equivalent].
- **Gen 6:15:** the formula of a vessel's dimensions, "X cubits its length, Y cubits its breadth" (26, 92) [divergence:
  120 × 40, not 300 × 50].
- **1 Kgs 10:22:** ships from a far land with ivory and monkeys (151, 164–165); gwf is the source of `קוֹף` [cognate:
  loanword].
- **Num 11:5:** the fish and cucumbers of Egypt (50) [equivalent]; **Amos 7:14** `בוֹלֵס שִׁקְמִים`: the notched sycomore
  figs (49) [equivalent].
- **2 Sam 19:38** (Barzillai: "let me die in my town", 123) and **Gen 47:30** (burial at home, 169) [equivalent].

### Lines shared with other texts
- None copied from another text. The colophon formula (186–187 `בא הוא, מתחילתו / עד קצו, כפי שנמצא בכתב`) follows
  AM 27.18 `בא הוא`; SI B311 has the same Egyptian formula (`jwi̯ =f pw ḥꜣ,t =f r pḥ(,wj) =fj mj gmi̯.yt m zẖꜣ,w`) and
  should be aligned to it (the SI translator works in parallel). 185 `האירה הארץ` = the dawn of TB / AM 9.4.

### Proposals for the shared renderings
1. jqr `מצוין` (with SI B48), jqr (noun) `המצוין`; mnḫ keeps `מעולה`.
2. wꜣḏ-wr `הירוק־הגדול` (the sea; `ים` stays for y~mꜥ).
3. sr "foretell, announce" `הכריז` (as BD 50), ḏꜥ `סערה`, nšnj `רוגז`, nwy.t `גל`, wꜣw `נחשול`, wḥmy.t `הישנות`.
4. hꜣi̯ `ירד` in every text (the tales' descent to the sea, the river, the shore).
5. zbj-n-sḏ.t `שילוח־לשלהבת` (literal; `עולה` only in the apparatus); wšn (birds) `מלק` [equivalent Lev 1:15].
6. kꜣp `מחסה`; šwy.t `צל`; ḫt `עץ` (also "mast"); nḏs (address) `צעיר`; šms.w `מלווה`; ḥꜣ.tj-ꜥ `נגיד`.
7. sꜣḥ "approach" `קרב`, sꜣḥ "endow" `הוענק`; zꜣtw `רצפה`; zb.t `משלוח`; gs.w-pr `בתי־הפולחן`.
8. gwf = gf `קוֹף` [cognate: loanword]: the gate's licence should include `gwf` (see below).

### Lessons for the guidelines
- **A gate's licence must list the plene spellings of a loanword's source** (gwf beside gf): the `קוף` gate missed
  the very line (SS 165) that is the word's best Egyptian attestation in the corpus.
- **A gated root can sit inside a construct form of another root** (`משחת` "ointment of", root משח, tripped the שחת
  gate): the gate's alternative list should exclude the construct `משחת`, or the translator writes the noun another
  way; here the collision vanished when the word was found to be HC's mrḥ.t anyway.
- **Parallel translators collide in the common words** (jqr, sr, zꜣtw, nšnj, mnmn here): a lemma → Hebrew survey of
  the whole new text against every drafted line, before drafting, saves a pass.

## Independent fidelity review (2026-11-01)
Pass (a) by a fresh reader: all 191 lines compared with the transliteration and the per-word data (`data SS`), then with the TLA's German (`tr SS`). The base has no `<gap/>`; its restorations (182 `[n] [rʾ]`, 185 `[n]`, 188 `[m]`, 189 `J[m]n,y`) are marked as the tales' convention has it (a restored preposition rendered by a Hebrew prefix unbracketed, as TB / WE; a restored sign none). The repeated passages (26–41 = 89–110, 67–71 = 81–85) and the promise / fulfilment pairs checked against each other: identical where the Egyptian is, different only where it differs (37 `s(j)?` `אותו?` / 106 `s(j)` `אותו`; 39 `rḏi̯.kw` / 109 `jni̯.kwj`).

**1 line changed** (tense 1; brackets 0):
- **170** (tense): `ואז קורא אני אל הצבא` → `ואז קראתי אל הצבא` – *ꜥḥꜥ.n=j ḥr jꜣš* is the narrative "then I called" (§3a, as *wn.jn=f ḥr sḏm*; TLA "Da rief ich"), not a present participle.

Undecided (left): 145 `wšn.n=j` (*sḏm.n=f*) rendered as a future `אמלוק` within the sailor's list of promises; the TLA's "nachdem ich … geopfert habe" (a prior circumstantial) is the alternative – the parse records it.

`build SS`, `verify SS --strict` (0 problems), `check_bible_quotes.py` on the annotated and translation-SS files (0 problems).

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (SS)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5 | ḥr tꜣ rḏi̯ ḥkn,w dwꜣ nṯr | על הארץ; ניתן שבח, הודו לאל; | `יוֹדוּ לַיהוָה חַסְדּוֹ` (תהלים קז:לא) | equivalent | יורדי הים של תהלים קז, שהגיעו "אֶל־מְחוֹז חֶפְצָם" (קז:ל), מודים לאל; כאן המלחים שהגיעו בשלום "מודים לאל" בהגיעם לחוף. מוטיב משותף לשתי תרבויות ימאיות, לא תלות: המצרי *dwꜣ nṯr* הוא הביטוי הרגיל ל"תודה" (מילולית "להלל את האל"). |
| 18 | nḥm =f sw jw mdw =f | מציל אותו, ודברו | `וּפִי יְשָׁרִים יַצִּילֵם` (משלי יב:ו) | equivalent | "הפה מציל" גם במשלי; ההקשר שונה (הרשעים והישרים), אך המשפט עצמו קרוב. |
| 19 | ḏi̯ =f ṯꜣm n =f ḥr | גורם שיכסו לו פנים. | `הִנֵּה הוּא לָךְ כְּסוּת עֵינַיִם לְכֹל אֲשֶׁר אִתָּךְ` (בראשית כ:טז) | equivalent | "כסות עיניים", כיסוי המבט כדי לא לראות את החטא: אותו דימוי של סליחה או פיוס כ"כיסוי" של המבט או הפנים. |
| 25 | r wꜣḏ-wr m dp,t | אל הירוק־הגדול באונייה | `יוֹרְדֵי הַיָּם בָּאֳנִיּוֹת` (תהלים קז:כג) | equivalent | אותו צירוף: "ירד" אל הים "באונייה" (*hꜣj r wꜣḏ-wr m dp.t*). מוטיב משותף של לשון ימאים, לא תלות. |
| 26 | n.t mḥ 120 m ꜣw =s mḥ 40 m sḫw =s | של מאה ועשרים אמה אורכה, ארבעים אמה רוחבה; | `שְׁלֹשׁ מֵאוֹת אַמָּה אֹרֶךְ הַתֵּבָה חֲמִשִּׁים אַמָּה רָחְבָּהּ` (בראשית ו:טו) | divergence | אותה נוסחת מידות של כלי שיט ("X אמה אורכה, Y אמה רוחבה"); אצל נח 300 על 50, כאן 120 על 40 (כ־60 על 20 מטר: אונייה גדולה מאוד אך אפשרית, ולא מידה של מיתוס). |
| 31 | ḏꜥ n jj.t nšnj | סערה טרם באה, רוגז | `וַיַּעֲמֹד הַיָּם מִזַּעְפּוֹ` (יונה א:טו) | equivalent | *nšnj* הוא "זעם" (גם זעמו של אל, של סֵת) ו"סופה" כאחד, כמו `זַעַף` של הים ביונה; תורגם `רוגז` כדי לא להקדים את מלת יונה. |
| 32 | n ḫpr.t =f ḏꜥ pri̯ | טרם נהיה. סערה יצאה | `וַיְהִי סַעַר גָּדוֹל בַּיָּם` (יונה א:ד) | equivalent | הסערה בלב ים; ביונה האל "הטיל" אותה, כאן היא "יוצאת" בלי שנאמר מי שלח אותה. |
| 34 | sꜣḥ =n tꜣ fꜣi̯.t ṯꜣw | שקרבנו אל הארץ; נִישָּׂא רוח, | `וַיַּעֲמֵד רוּחַ סְעָרָה וַתְּרוֹמֵם גַּלָּיו` (תהלים קז:כה); `וַיהוָה הֵטִיל רוּחַ גְּדוֹלָה אֶל הַיָּם` (יונה א:ד) | equivalent | רוח שקמה וגלים שהתרוממו; וכן . בשני המקראות האל מעמיד את הרוח; כאן הרוח "נישא" מעצמו. |
| 38 | m(w)t(.tj) ntj.w jm =s n spi̯ | מתה; אלה אשר בה – לא נותר | `וְהָאֳנִיָּה חִשְּׁבָה לְהִשָּׁבֵר` (יונה א:ד) | equivalent | בשני הסיפורים האונייה כבעלת חיים: ביונה היא "חושבת", כאן היא "מתה". |
| 39 | wꜥ jm ꜥḥꜥ.n =j rḏi̯.kw | אחד מהם. ואז הוּשַׂמְתִּי | `וַיָּקֵא אֶת יוֹנָה אֶל הַיַּבָּשָׁה` (יונה ב:יא) | divergence | גם יונה מושלך אל היבשה אחרי הסערה; שם בידי הדג (בפקודת האל), כאן בידי נחשול; והיצור הגדול יבוא אחר כך, ולא יבלע את האיש (76–77). |
| 41 | jri̯.n =j hrw 3 wꜥi̯.kw | עשיתי שלושה ימים לבדי; | `וַיְהִי יוֹנָה בִּמְעֵי הַדָּג שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת` (יונה ב:א) | divergence | שלושה ימים של בדידות אחרי הסערה, שם במעי הדג, כאן על אי. שלושה ימים הם בשתי הספרויות זמן המעבר בין מוות לחיים. |
| 44 | n(,j) ḫt qnj.n =j šwy,t | של עץ; חיבקתי את הצל. | `וַיַּעַשׂ לוֹ שָׁם סֻכָּה וַיֵּשֶׁב תַּחְתֶּיהָ בַּצֵּל` (יונה ד:ה) | equivalent | גם יונה הבודד יושב במחסה ובצל; *kꜣp* תורגם `מחסה`, לא `סוכה`, כדי לא לייבא את מלת יונה. מוטיב משותף (הנמלט בצל), לא תלות. |
| 47 | gmi̯.n =j dꜣb.pl jꜣrr,t.pl | מצאתי תאנים וענבים | `אֶרֶץ חִטָּה וּשְׂעֹרָה וְגֶפֶן וּתְאֵנָה וְרִמּוֹן` (דברים ח:ח) | equivalent | התאנה והענבים, פירות הארץ הטובה; כאן פירות אי בלב ים. *dꜣb* = `תְּאֵנָה` ו־*jꜣrr.t* = `עֲנָבִים` הם המלים הקבועות של ארץ יָאָא בסינוהה (§11.3). |
| 49 | kꜣ.w.pl jm ḥnꜥ nq,wt.pl | פירות־שקמה שם, עם בלוסים; | `כִּי בוֹקֵר אָנֹכִי וּבוֹלֵס שִׁקְמִים` (עמוס ז:יד) | equivalent | "בולס שקמים" הוא מי שחורץ את פרי השקמה כדי שיבשיל; המצרי מבחין בין פרי השקמה הרגיל (*kꜣ.w*) לבין הפרי החרוץ (*nq.wt*), כלומר שתי מלים לאותו מנהג חקלאי שעמוס מתאר. `בלוסים` – המונח של לשון חכמים לפרי השקמה החרוץ. |
| 50 | sšp,t.pl mj jri̯.t(w) =s rm.w.pl | קישואים כמו שעושים אותם; דגים | `זָכַרְנוּ אֶת הַדָּגָה אֲשֶׁר נֹאכַל בְּמִצְרַיִם חִנָּם אֵת הַקִּשֻּׁאִים` (במדבר יא:ה) | equivalent | הדגה והקישואים של מצרים, שבני ישראל זוכרים במדבר: אותם מאכלים בשתי הרשימות, כמאכלי השפע המצרי. |
| 56 | zbi̯-n-sḏ,t n nṯr.pl ꜥḥꜥ.n sḏm.n =j | שילוח־לשלהבת לָאֵלִים. ואז שמעתי | `וַיִּבֶן נֹחַ מִזְבֵּחַ לַיהוָה וַיִּקַּח מִכֹּל הַבְּהֵמָה הַטְּהֹרָה וּמִכֹּל הָעוֹף הַטָּהוֹר וַיַּעַל עֹלֹת בַּמִּזְבֵּחַ` (בראשית ח:כ); `וַיִּזְבְּחוּ זֶבַח לַיהוָה` (יונה א:טז) | equivalent | הניצול מן המים מעלה קורבן שרפה; וגם המלחים של יונה, כשהים נח: . *zbj-n-sḏ.t* תורגם מלולית ולא `עולה`, כדי שהמלה המקראית תופיע במנגנון בלבד. |
| 59 | n(,j) wꜣḏ-wr ḫt.pl ḥr gmgm | של הירוק־הגדול. העצים מתנפצים, | `קוֹל יְהוָה שֹׁבֵר אֲרָזִים` (תהלים כט:ה) | equivalent | קול (*ḫrw*), רעם, עצים נשברים וארץ מתנודדת: אלה סימני ההופעה של האל בשתי הספרויות; כאן הם מבשרים את בוא הנחש־האל. |
| 61 | ḥr =j gmi̯.n =j ḥfꜣ,w | את פניי, ומצאתי: נחש | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | נחש מדבר, שיחה בין אדם לנחש; אבל זה של בראשית הוא "חיית השדה", מפתה ומקולל, וזה של האי הוא אל (113: "האל"), אדון האי (171), מציל ומנחם. המוטיב משותף – הנחש המדבר – וההערכה הפוכה. `נחש` הוא המלה הקבועה לנחשי כל התרבויות (כלל התיק), ולכן ההקבלה נראית בתרגום עצמו. |
| 67 | jw wpi̯.n =f rʾ =f r =j jw =j | פתח הוא את פיו אליי, ואני | `וַיִּפְתַּח יְהוָה אֶת פִּי הָאָתוֹן` (במדבר כב:כח) | equivalent | בעל חיים פותח את פיו ומדבר אל אדם; אצל בלעם האל פותח את פי האתון, כאן הנחש, שהוא עצמו אל, פותח את פיו. |
| 68 | ḥr ẖ,t =j m-bꜣḥ =f | על בטני לפניו. | `עַל גְּחֹנְךָ תֵלֵךְ וְעָפָר תֹּאכַל` (בראשית ג:יד) | divergence | בבראשית הנחש מקולל ללכת על גחונו; כאן האדם מוטל "על בטנו" לפני הנחש – תנוחת ההשתחוויה המצרית לפני אל ומלך. התנוחה עוברת מן הנחש אל האדם. |
| 72 | rḏi̯ =j rḫ =k tw jw =k m ss⟨f⟩ | אגרום שתדע את עצמך כשאתה אפר, | `וָאוֹצִא אֵשׁ מִתּוֹכְךָ הִיא אֲכָלַתְךָ וָאֶתֶּנְךָ לְאֵפֶר עַל הָאָרֶץ` (יחזקאל כח:יח) | equivalent | האיום להפוך לאפר באש; ובסיפור הנחש האש של הכוכב באמת הפכה את משפחתו לגופות (129–132). |
| 77 | m rʾ =f jṯi̯ =f wj r s,t =f | בפיו, לקח הוא אותי אל מקום | `וַיְמַן יְהוָה דָּג גָּדוֹל לִבְלֹעַ אֶת יוֹנָה` (יונה ב:א) | divergence | גם כאן יצור עצום לוקח את הניצול "בפיו"; אבל הוא לא בולע אותו, אלא נושא אותו אל ביתו ומניח אותו שלם. |
| 108 | ḥr ḫ.pl =j m =k wj r-gs =k | מלבדי. הנה אני לצדך. | `וָאִמָּלְטָה רַק אֲנִי לְבַדִּי לְהַגִּיד לָךְ` (איוב א:טז) | equivalent | הניצול היחיד מכל החבורה, שבא לספר; וכאן "לא נותר אחד מהם מלבדי". באיוב הניצול הוא השליח של האסון; כאן הוא עצמו גיבור הסיפור. |
| 111 | ḏd.jn =f n =j m snḏ(.w) m(j)? zp-2 | אז אמר הוא לי: אל תחשוש נא?, אל תחשוש נא?, | `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א) | equivalent | "אל תירא" של האל אל האדם, נוסחת ההרגעה של ההתגלות; הנחש מדבר כאן בלשון של אל המופיע. *snḏ* תורגם `חשש`, המלה הקבועה שלו, ולא `ירא`. |
| 112 | nḏs m ꜣ(j)t.w ḥr =k | צעיר, אל יחוורו פניך! | `וְלֹא עַתָּה פָּנָיו יֶחֱוָרוּ` (ישעיהו כט:כב) | equivalent | הפנים המחווירות מפחד, בשתי הלשונות. |
| 114 | ꜥnḫ =k jni̯ =f tw r jw pn n(,j) kꜣ | שתחיה; הביא הוא אותך אל האי הזה של הַכָּא. | `וַיְמַן יְהוָה דָּג גָּדוֹל` (יונה ב:א) | divergence | ביונה האל שולח את היצור כדי להחזיר את הנביא אל שליחותו; כאן "האל" מביא את המלח אל אי הכָּא כדי שיחיה – בלי עונש ובלי שליחות. |
| 116 | jw =f mḥ ẖr nfr,t nb.t | מלא הוא בכל טוב. | `וּבָתִּים מְלֵאִים כָּל טוּב אֲשֶׁר לֹא מִלֵּאתָ` (דברים ו:יא) | equivalent | "מלא כל טוב" שלא עמלת בו: מתנה של האל. |
| 123 | m(w)t =k m nʾ,t =k | תמות בעירך. | `יָשָׁב נָא עַבְדְּךָ וְאָמֻת בְּעִירִי עִם קֶבֶר אָבִי וְאִמִּי` (שמואל ב יט:לח) | equivalent | ברזילי מבקש למות בעירו, ליד קבר הוריו: אותה משאלה של זקן, למות בבית ולא בנכר. |
| 124 | rš.wj sḏd dp.t.n =f zni̯⟨.n⟩? (j)ḫ,t m(ḥ)r | מה שמח המספר את אשר טעם, כשעבר הדבר המכאיב! | `טַעֲמוּ וּרְאוּ כִּי-טוֹב יְהוָה` (תהלים לד:ט) | equivalent | "לטעום" במובן "לחוות" בשתי הלשונות (*dp*); וכן המלח בסוף (181): "אחרי שחזיתי את אשר טעמתי". |
| 130 | hꜣi̯.w pri̯.n nꜣ m ḫ,t m-ꜥ =f ḫpr.n r =s nn wj ḥnꜥ | ירד, ויצאו אלה באש בגללו. נהיה זה – ואינני עמם; | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | divergence | כוכב שנופל מן השמים: אצל ישעיהו הכוכב הוא המלך הגאה שהושפל, כאן הכוכב היורד הוא האסון שבא על הנחש ומשפחתו, ואין בו אשמה ועונש. גם הפועל שונה: *hꜣj* "ירד" (הפועל של ירידת המלח אל הים, 24), לא "נפל". |
| 130 | hꜣi̯.w pri̯.n nꜣ m ḫ,t m-ꜥ =f ḫpr.n r =s nn wj ḥnꜥ | ירד, ויצאו אלה באש בגללו. נהיה זה – ואינני עמם; | `אֵשׁ אֱלֹהִים נָפְלָה מִן הַשָּׁמַיִם וַתִּבְעַר בַּצֹּאן וּבַנְּעָרִים וַתֹּאכְלֵם` (איוב א:טז) | equivalent | אש מן השמים ששורפת את הילדים ואת המשפחה, וניצול יחיד: הדמיון הקרוב ביותר בסיפור, ובשניהם אין הסבר לאסון. |
| 132 | st m ẖꜣy,t.pl wꜥ.t jr qni̯{.n} =k rwḏ jb =k | אותם כערמת־פגרים אחת. אם אמיץ אתה ואיתן לבך, | `חֲזַק וְיַאֲמֵץ לִבֶּךָ` (תהלים כז:יד) | equivalent | אומץ ולב חזק בשעת צרה: אותו צמד, "אמיץ" ו"לב איתן". תורגם *qnj* `אמיץ` (המלה הטבעית) ו*rwḏ* `איתן`, ולא `חזק`, כדי לא להשלים את הצמד המקראי. |
| 141 | jwdnb.pl ẖsꜣy,t.pl sntr.pl n gs.pl-pr.pl | אִיוּדֶנֶב, חֶסָאיִת, קטורת של בתי־הפולחן, | `וּגְמַלֵּיהֶם נֹשְׂאִים נְכֹאת וּצְרִי וָלֹט הוֹלְכִים לְהוֹרִיד מִצְרָיְמָה` (בראשית לז:כה) | equivalent | אותם שרפים (לפי זיהוי ה־TLA: הלוט והצרי) הם סחורת הבשמים שמובאת אל מצרים; כאן המלח מבטיח להביא אותם ממצרים אל האל של הארץ הרחוקה. |
| 145 | n =k kꜣ.pl m zbi̯-n-sḏ,t wšn.n =j n =k | לך שוורים כשילוח־לשלהבת, אמלוק לך | `וְהִקְרִיבוֹ הַכֹּהֵן אֶל הַמִּזְבֵּחַ וּמָלַק אֶת רֹאשׁוֹ` (ויקרא א:טו) | equivalent | מליקת העוף בקורבן: *wšn* הוא המעשה המקביל בפולחן המצרי (סיבוב הצוואר של עופות הקורבן). |
| 149 | ꜥḥꜥ.n sbt.n =f jm =j m nn ḏd.n =j m nf m jb =f | ואז לעג הוא לי, לאלה שאמרתי, כשטות? בלבו. | `וַתִּצְחַק שָׂרָה בְּקִרְבָּהּ` (בראשית יח:יב) | equivalent | צחוק "בקרבו", צחוק פנימי על הבטחה שנראית מגוחכת; כאן האל הוא הצוחק על הבטחת האדם, ושם האדם צוחק על הבטחת האל. |
| 151 | jnk js ḥqꜣ Pwn,t ꜥntjw.pl n =j jm,(j) sw | ואכן, אני – שליט פּוּנְט; המור – שלי הוא. | `כִּי אֳנִי תַרְשִׁישׁ לַמֶּלֶךְ בַּיָּם עִם אֳנִי חִירָם אַחַת לְשָׁלֹשׁ שָׁנִים תָּבוֹא אֳנִי תַרְשִׁישׁ נֹשְׂאֵת זָהָב וָכֶסֶף שֶׁנְהַבִּים וְקֹפִים וְתֻכִּיִּים` (מלכים א י:כב) | equivalent | אוניות שבאות פעם בשנים מארץ רחוקה עם זהב, שן ("שנהבים") וקופים: אותו סחר ימי בארץ־פלאים (אופיר / תרשיש לשלמה, פּוּנְט למצרים), ואותה רשימה (ראו 164–165). |
| 159 | ẖrd.pl =k jmi̯ rn =j nfr m nʾ,t =k m =k ẖr,t.pl =j | בילדיך! תן את שמי הטוב בעירך; הנה, חלקי | `טוֹב שֵׁם מִשֶּׁמֶן טוֹב` (קהלת ז:א) | equivalent | "השם הטוב" שאדם משאיר אחריו: גם במצרים השם (*rn*) הוא חלק מן האדם, וזכירתו היא המשך חייו. |
| 163 | ẖsꜣj,t.pl tjšps.pl šꜣꜥsḫ msdm,t.pl sd.w.pl | חֶסָאיִת, תִּישֶׁפֶס, שָׁאעַסֶח, כחל, זנבות | `כָּחַלְתְּ עֵינַיִךְ` (יחזקאל כג:מ) | equivalent | הכחל לעיניים, איפור של יוקרה בשתי התרבויות. |
| 164 | n.w mꜥmꜥ(j) mrry,t.pl ꜥꜣ.t n.t sntr.pl nḏḥy.t.pl | של ג׳ירפה, גושי קטורת גדולים, שיני | `שֶׁנְהַבִּים וְקֹפִים וְתֻכִּיִּים` (מלכים א י:כב) | equivalent | שן־פיל וקופים, מתנות הארץ הרחוקה. `שיני פיל` – המלה המצרית מלולית, ולא `שנהבים` המקראית. |
| 165 | n.t ꜣbw ṯzm.w.pl gwf.pl ky.w.pl špss.pl nb nfr | פיל, כלבי־ציד, קופים, קופי־כִּי, וכל יקרות טובות. | `וְקֹפִים` (מלכים א י:כב) | cognate | `קוֹף` העברית שאולה מן המצרית *gf* / *gwf* (§4.2): הקוף הוא אחת המתנות של הארץ הרחוקה גם באוניות שלמה. [היתר שער: קופים – *gwf.pl* הוא *gf* בכתיב מלא (TLA 166670); רישיון השער `קוף` (`\bgf\b·gjf·gfn`) אינו כולל את הכתיב *gwf*, ודווח לרכז.] |
| 168 | n ꜣbd 2 mḥ =k qnj =k m ẖrd.w.pl =k rnpi̯.y =k | בחודשיים; תמלא את חיקך בילדיך, תתחדש | `תִּתְחַדֵּשׁ כַּנֶּשֶׁר נְעוּרָיְכִי` (תהלים קג:ה) | equivalent | חידוש הנעורים כברכה; *rnpj* קשור ל־*rnp.t* "שנה": להתחדש כשנה חדשה. |
| 169 | m ẖnw ⟨r⟩? qrs.t =k ꜥḥꜥ.n hꜣi̯.kw r mry,t | בבירה, עד? שתיקבר. ואז ירדתי אל הגדה | `וְשָׁכַבְתִּי עִם אֲבֹתַי וּנְשָׂאתַנִי מִמִּצְרַיִם וּקְבַרְתַּנִי בִּקְבֻרָתָם` (בראשית מז:ל) | equivalent | הקבורה בבית כשיא הברכה: יעקב מבקש לא להיקבר במצרים; המצרי מבוקש להיקבר בבירה, ולא באי. |

# 1-מזמורי-הראשית – RV 10.129, 10.121, 10.72, 10.190, 10.90

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
RV 10.129, 10.121, 10.72, 10.190, 10.90. Base texts and line units: `../renderings.md` §1. Line data: `python3 -I -B ../vedic_tools.py data <KEY>`.

## Coordinator's notes
- Fixed before drafting (2026-10-30): the renderings §1–§10; the gates in `vedic_tools.py`.

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV10.129 1a–7d, RV10.121 1a–10d, RV10.72 1a–9d, RV10.190 1a–3d (translator 1, Round 5 run 1)

### Scope
The four Rigveda creation hymns, all 116 pādas: RV 10.129 (28), 10.121 (40), 10.72 (36), 10.190 (12). Files:
`annotated-RV10.129.rtl.md`, `annotated-RV10.121.rtl.md`, `annotated-RV10.72.rtl.md`, `annotated-RV10.190.rtl.md`, their
`translation--intro-<KEY>.rtl.md`, and the generated `translation-<KEY>.rtl.md` / `translation.rtl.md`. RV 10.90 is not
part of this section.

### Sources consulted
- Base: VedaWeb, the Zurich text and morphology (`vedic_tools.py data`); every form carrying a tense, a gate or a parallel
  checked against the morphology and, where needed, Grassmann (`gra`) and Monier-Williams (`mw`).
- After drafting: `vedic_tools.py tr` (Griffith, Grassmann, Geldner, Elizarenkova; Macdonell for 10.129); Jamison's
  commentary (`../../sources/Jamison--Rigveda-commentary/X.61–191-9-25-26.txt`, on X.72, X.121, X.129, X.190), with
  Brereton's readings as Jamison reports them. Every quoted rank-3 wording was checked against `tr` or Jamison (several
  remembered wordings were corrected at review). Jamison–Brereton 2014 and Doniger 1981 are cited only through Jamison's
  commentary or as paraphrase.
- Comparison corpora: Enūma eliš I 1–20 (`../../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/translation-I.rtl.md`), Hesiod,
  Theogony 116–129 (`../../הסיודוס/1-תולדות-האלים/`), the fifth-day dossier's RV 1.32 (for 10.129.3c).
- Bible: every verse printed with `check_bible_quotes.py --show` before quoting.

### Decisions
- **Echo control at the key words of 10.129.** *támas* `חושך` (3a, the natural word: a real echo of Gen 1:2, tagged);
  *ágre* `בתחילה` (never `ראשית`); *salilá* `נחשול`, *ámbhas* `מים`, *gáhana* `שאין להם חקר`, *gabhīrá* `עמוק` (no
  `תהום`); *rájas* `מרחב`, *vyòman* `מרום` (no `רקיע`); *visŕ̥ṣṭi* `השלחה`, and *visárjana* (another noun of ví √sr̥j)
  `שילוח`, keeping the root שלח (no ברא).
- **2c *avātám* "windless" = `בלי רוח`** with `[היתר שער: רוח …]`: *a-vātá* is "without *vā́ta*", and *vā́ta* = `רוּחַ`;
  "בלי משב / בלי אוויר" would hide that the source names the wind (hidden echo with Gen 1:2's `וְרוּחַ`). Griffith's
  "breathless" hides it too; Geldner "ohne Windzug", Grassmann "windlos" agree with us. √*an* `נשם`.
- ***praketá* = `סימן`** (2b), *apraketá* `חסר־סימן` (3b): not `אות`, which would echo Gen 1:14 `לְאֹתֹת` beyond the
  Sanskrit.
- ***ásat / sát* = `אַיִן` / `יֵשׁ`** (renderings), vocalized; the apparatus says the pair is medieval Hebrew philosophy,
  not biblical. *sát* participle also in *satáḥ* (4c) and 10.72.2d/3b `היֵשׁ`.
- ***mr̥tyú* `מָוֶת` / *amŕ̥ta* `אלמוות`** (10.129.2a, 10.121.2c, 10.72.5d): `אלמוות` plene and unvocalized, as in the
  Hesiod corpus (`בני־האלמוות`); `מָוֶת` vocalized (renderings §7.3).
- **3c *ābhú* = `הַנִּהְיֶה`** ("what comes into being", with *ābabhū́va* 6d/7a `נהיה` / `נהיתה`), not "void" (Grassmann,
  Renou, Griffith); Jamison's double reading in the apparatus. *tuchyá* `ריקות`. *ápihitaṃ yád ā́sīt* = `אשר היה סגור`,
  identical with the dossier's RV 1.32.11c.
- **4b *mánaso rétaḥ*** = `זרע המחשבה` (the usual genitive reading); Brereton's ablative ("from thought", with *ádhi*)
  in the apparatus.
- **4c *bándhu* = `קרבה` / `קרוב`** (10.129.4c `קרבת היֵשׁ בָּאַיִן`; 10.72.5d *amŕ̥tabandhu* `קרובי האלמוות`) – first
  drafted `קשר`, changed so that one Hebrew serves both lines (kinship is the image of both).
- **5a *raśmí* = `מיתר`** ("cord"; MW also "measuring cord"); not `קו`, which would make Job 38:5's `נָטָה עָלֶיהָ קָּו` a
  translation echo (the apparatus compares it). *mahimán* `גדולה` (pl. `גדולות`), *mahitvá* `גודל`.
- **7b *dadhé* passive** `הועמדה` (Brereton, Jamison); Geldner/Macdonell's active in the apparatus. √*dhā* `העמיד` / `שׂם`
  by sense; *ádhyakṣa* `המשגיח`; *aṅgá* `אכן`; *addhā́* `בוודאות`; 7d ends with `?` to keep the open
  "or if he does not know".
- **sám √vr̥t = `התהווה`** (10.129.4a, 10.121.1a, 7c: one Hebrew for the formula *sám avartata ágre*); ā́ √vr̥t intensive
  (10.129.1c) `התנועע` (a split by preverb and stem, recorded).
- **10.121:** *hiraṇyagarbhá* `עֻבַּר הַזָּהָב`; the refrain F1 `לְאֵיזֶה אֵל נכבד במנחה?` nine times; *páti* `אדון`;
  *bhūtá* `הנהיה`; √dhr̥ `החזיק`, √stambh `תמך` / `נתמך`, √dr̥h `מוצק` (three "support" verbs kept apart); *dhárman*
  `יסוד` (*satyádharman* `שיסודותיו אמת`, Jamison); *ātmán* `נפש`, *bála* `כוח` (beside *svadhā́* `כוח עצמי`);
  *nā́ka* `הכיפה` (no `רקיע`); *krándasī* `שתי המערכות` (Geldner, Jamison); *ásu* `חִיּוּת` (vocalized: `חיות` "animals");
  *br̥hánt* `רם`; *dákṣa* as a common noun `כשרון` (8b), as a name `דַּקְשָׁה` (10.72); 4a *himávantaḥ* is an adjective
  ("the snowy (mountains)"), so `[היתר שם: Himavat …]` instead of the name `הִימָוַנְט`.
- **10.72:** *yugá* `עידן`; *ā́śā* `פאות`; *uttānápad* `פשוקת־הרגליים` (the birthing posture; Geldner "die Kauernde");
  *bhū́* `אדמה` (licensed by the gate; [equivalent]); **2b sám √dham "smelted together (with bellows)" = `נפח` / *karmā́ra*
  `נַפָּח`**: the natural Hebrew for a smith's blowing, and it is the verb of Gen 2:7 `וַיִּפַּח` – a real overlap of image
  (blowing as making), tagged, not avoided; *reṇú* `אבק`, not `עָפָר` (allowed by the gate): dust raised by dancers is
  `אבק` (Nah 1:3), `עפר` is soil; *tīvrá* `חריף`; √pinv `הגדיש`; *bhúvana* `עולמות`; *yáti* transcribed `יַתִּים`
  (vocalized: "orphans"); 9c *prajā́yai mr̥tyáve tvat* `פעם לצאצאים, פעם למָוֶת` (Jamison: quasi-infinitives).
- **10.190 (deviations from the renderings, with Proposals):** (1) ***dhātár* = `הַמַּעֲמִיד`, not the pre-set
  `הַמְּסַדֵּר`**: `סֵדֶר` is *r̥tá* in the same hymn (1a), so "המסדר" would invent a Hebrew link between *dhātár* and *r̥tá*;
  and √*dhā* = `העמיד` keeps the root (10.129.7b `הועמדה`). (2) ***yathāpūrvám* = `זה אחר זה (?)`, not "as before"**:
  MW gives "in succession, one after another" for the RV and the Brāhmaṇas, "as before" only for the epic and Purāṇic
  literature; Grassmann "nach der Reihe"; Griffith, Geldner, Grassmann all translate "in order". The cyclic reading ("as
  in former creations": the later Indian reading of the hymn, said daily in the Sandhyā) is given in the apparatus and a
  footnote. The coordinator's "as before" is therefore the later reading, not the dictionary's: recorded as a finding.
  √kl̥p caus. `ערך`; *vaśín* `מושל`; *ví √dhā* `חילק`; *ahorātrá* `ימים ולילות`; *arṇavá* `גועש`; *svàr* `האור` (as
  10.121.5b).

### Open decisions for the user
- 10.190.3b *yathāpūrvám*: "one after another" (the RV dictionaries; adopted, with `?`) or "as before" (the later
  tradition; cyclic creation)? The difference decides whether the hymn already has cyclic time.
- *rájas* `מרחב` (pre-set) collides with *loká* `מרחב` in the same renderings table (§5.1), and the Hesiod corpus has
  `מרחב` for πέλαγος (cross-language, so allowed). No *loká* in these four hymns; the coordinator should split before
  10.90 / the funeral hymns (proposal: *loká* `מֶרְחָב` stays for the "free space" of the dead, *rájas* → `חֲלַל־הָעוֹלָם`?,
  or keep both with a note).

### Progress log
- 2026-10-30: drafted RV10.129 (stanzas 1–2, 3–5, 6–7, each saved, filled and verified), then RV10.121, RV10.72,
  RV10.190; `tr` read after each hymn's draft and every quoted wording corrected against it.
- Pass (a) fidelity: 10.121.2ab re-split (the shared *praśíṣam* moved to 2b, with "(מחכים לה)"); 10.121.3a "כל" removed
  (not in the source); 10.190.2cd made feminine (agreeing with `שנה`).
- Pass (b) consistency: `lexmap` checked (remaining multi-Hebrew lemmas are inflection, preverbs or function words);
  *bándhu* unified (`קרבה`); `אלמוות` unified with Hesiod; the F1 refrain identical ×9; 10.72.2d = 3b identical;
  10.129.3c = the dossier's 1.32.11c half-line.
- Pass (c) Hebrew: the generated `translation-<KEY>.rtl.md` read through; register kept plain-literary.
- `check_bible_quotes.py` on the annotated, intro and generated files: 0 problems. `verify <KEY> --strict`: 0 problems.

### The text on its own terms
- 10.129 is built of negations and questions: even *ásat* "non-being" is denied (1a), because "non-being" already
  presupposes a distinction (1a, 2a–b).
- The undifferentiated state: no death/deathlessness, no "sign" of night and day, darkness hidden by darkness, a signless
  surge (2a–3b); creation is distinction – the "sign", the cord that divides above and below (5a–b; Jamison).
- "That One" breathes windless by its own power (2c): a neuter One, not a named god – the root of the Upaniṣadic One.
- Heat (*tápas*) gives birth (3d; 10.190.1): the image of brooding, later the ascetic's inner heat.
- Desire is the first seed of thought (4a–b); the poets find the kinship of being in non-being by searching their heart
  (4c–d): the Vedic poet as knower – and 6a asks who really knows.
- The gods are later than the world (10.129.6c; 10.72.5c): they cannot witness the beginning.
- The ring 1b / 7c (the highest heaven that was not / where the overseer sits) and the open ending 7d (Brereton's
  "edifying puzzlement": the riddle as ritual teaching, the *brahmodya*).
- 10.121: a riddle hymn – nine stanzas describe a god without a name and ask "to which god?"; stanza 10 (Prajāpati) is a
  later answer that breaks the refrain; the Brāhmaṇas made "Who?" (*Ka*) a god's name.
- The waters as mothers: they "place an embryo" and give birth to Agni, fire from water (10.121.7–8).
- The sacrifice as exchange (10.121.10c, "give to me and I give to you"), and the ordinary close "may we be lords of
  riches" after the greatest question.
- 10.72 stacks incompatible versions (smith, being from non-being, the birthing mother, Aditi and Dakṣa born of each
  other) without choosing: cause and effect turn round.
- The gods dance in the primeval surge and raise "dust" (10.72.6); the sun is fetched from the sea (7).
- Mārtāṇḍa, "from the dead egg", cast away and brought back "to procreate and to die": mortality built into the ancestor
  of men from his birth (10.72.8–9; ŚB 3.1.3.3–4).
- 10.190: a chain of births – Order and Truth, night, sea, year – and the "Placer" who arranges sun and moon; said daily
  in the Sandhyā as the "sin-effacing" hymn.

### Key parallels
- [divergence] 10.129.2c ↔ `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב): the One breathes "without
  wind" – the same elements (breath, wind, pre-cosmic waters) in another arrangement.
- [equivalent] 10.129.3a ↔ `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב): darkness before order; but darkness hidden by
  darkness, with no God dividing light from darkness; Hesiod Th. 123 too.
- [absent] 10.129.7d ↔ `הֲנֹטַע אֹזֶן הֲלֹא יִשְׁמָע` (תהילים צד:ט); `אֱלֹהִים הֵבִין דַּרְכָּהּ` (איוב כח:כג): "perhaps
  he does not know" has no counterpart in the Bible, where the maker knows.
- [absent] 10.129.6c, 10.72.5c ↔ `בְּרֵאשִׁית בָּרָא אֱלֹהִים` (בראשית א:א): the gods are born after the world (as in
  Enūma eliš I 7–9 and Hesiod); in Genesis God precedes the world.
- [divergence] 10.129.6b *vísr̥ṣṭi* "emission" ↔ `בָּרָא`: the Vedic word for creation is "letting go, pouring out", with
  no known subject.
- [divergence] 10.121.1d ↔ `בַּמָּה אֲקַדֵּם יְהוָה` (מיכה ו:ו): Micah knows the god and asks what to offer; the Vedic
  poet knows the offering and asks which god.
- [equivalent] 10.121.4ab ↔ `וְתוֹעֲפֹת הָרִים לוֹ. אֲשֶׁר-לוֹ הַיָּם` (תהילים צה:ד–ה): the same sequence, mountains and
  sea "his".
- [equivalent] 10.72.2b ↔ `וַיִּפַּח בְּאַפָּיו` (בראשית ב:ז), `חָרָשׁ נֹפֵחַ בְּאֵשׁ פֶּחָם` (ישעיהו נד:טז): the god as
  smith, the verb of blowing.
- [equivalent] 10.72.6 ↔ `וַיָּרִיעוּ כָּל-בְּנֵי אֱלֹהִים` (איוב לח:ז), `מְשַׂחֶקֶת לְפָנָיו` (משלי ח:ל): joy and play at
  creation – but in the Veda the dance itself makes.
- [divergence] 10.190.3b ↔ `מַה שֶּׁהָיָה הוּא שֶׁיִּהְיֶה` (קוהלת א:ט) and Gen 1:1: on the later reading ("as before")
  creation repeats a cycle; in Genesis there is a first time.

### Proposals for the shared renderings
- *ásat / sát*, *támas*, *ágre*, *salilá*, *ámbhas*, *gáhana / gabhīrá*, *rájas*, *vyòman*, *ékam*, *tápas*, *kā́ma*,
  *mánas*, *rétas*, *svadhā́*, *visŕ̥ṣṭi*, √*jan*, *gárbha*, *r̥tá*, *satyá*, *devá*, *havís*, √*vidh*: used as pre-set
  (confirmed in real lines).
- *a-vātá* "windless" = `בלי רוח` with a gate permit (or: add *avata* to the `רוח` licence; the tool's licence ` vat`
  needs a preceding space and misses the privative).
- *praketá* `סימן`, *apraketá* `חסר־סימן` (not `אות`: Gen 1:14).
- *amŕ̥ta* `אלמוות` (plene, as Hesiod); *mr̥tyú* `מָוֶת`.
- *bándhu* `קרבה` / `קרוב`.
- sám √vr̥t `התהווה`; ā́ √bhū, √bhū (perfect) `נהיה`; *ābhú*, *bhūtá* `הנהיה`; *jātá* (pl.) `הנולדים`.
- *visárjana* `שילוח` (keeps שלח beside *visŕ̥ṣṭi* `השלחה`).
- *raśmí* `מיתר`; *mahimán* `גדולה`, *mahitvá* `גודל`; *tuchyá* `ריקות`; √*guh* (ptcp.) `חבוי`; ápi √dhā `סגור`.
- *addhā́* `בוודאות`, *aṅgá* `אכן`, *ádhyakṣa* `המשגיח`, *kaví* `משורר` (as pre-set), *manīṣā́* `תבונה`, *hr̥d* `לב`.
- *tadā́nīm* `אז`, *tárhi* `באותה עת`; *parás* `מעבר`; *avástāt / parástāt* `מלמטה / מלמעלה`; *adhás / upári*
  `מתחת / מעל`.
- *páti* `אדון`; *rā́jan* `מלך`; *jágat* `העולם הנע`; √*īś* `שלט`; *vaśín* `מושל`; *dvipád / cátuṣpad*
  `בעל שתי הרגליים / בעל ארבע הרגליים`.
- √dhr̥ `החזיק`; √stambh `תמך`; √dr̥h `מוצק`; *dhárman* `יסוד`; *nā́ka* `כיפה`; *svàr* `האור`; *antárikṣa*
  `חלל האוויר` (as pre-set).
- *ātmán* `נפש` (as pre-set); *bála* `כוח`; *ásu* `חִיּוּת` (always vocalized); *br̥hánt* `רם`; *candrá* (adj.) `בהיר`.
- *dákṣa* common noun `כשרון`, name **Dakṣa `דַּקְשָׁה`** (new name, §3.1: folded regex ` daks`).
- **New names:** Rasā `רַסָה` (` rasa`; careful: *rása* "sap" is a common noun), Mārtāṇḍa `מָארְטָאנְדָּה`
  (` martand`), the Yatis `יַתִּים` (always vocalized: "orphans").
- *yugá* `עידן`; *ā́śā* `פאות`; *pradíś* `כיוונים`; *uttānápad* `פשוקת־הרגליים`; *bhū́* `אדמה`.
- **sám √dham `נפח`, *karmā́ra* `נַפָּח`** (and propose: never avoid `נפח` for √dham; tag Gen 2:7 [equivalent]).
- *reṇú* **`אבק`** and *pāṃsú* `עפר` (split the `עפר` gate's licence: *reṇú* is fine dust).
- *tīvrá* `חריף`; √pinv `הגדיש`; *bhúvana* `עולם` (pl. `העולמות`); *súsaṃrabdha* `אחוזים היטב זה בזה`; √nr̥t `רקד`.
- **dhātár `הַמַּעֲמִיד` (replacing `הַמְּסַדֵּר`)**: see Decisions; *yathāpūrvám* `זה אחר זה (?)`; √kl̥p caus. `ערך`;
  *ví √dhā* `חילק`; *saṃvatsará* `שנה`; *ahorātrá* `ימים ולילות`; *arṇavá* `גועש`; *rā́trī* `לילה`.
- Formula: *sám avartata ágre* `התהווה … בתחילה` (10.129.4a, 10.121.1a); the closing line *vayáṃ syāma pátayo rayīṇā́m*
  `נהיה נא אדוני עושר` (recurs in the RV: 4.50.6, 8.48.13 …).
- Tool: `renderings` §3.1 Himavat ` himav` also matches the adjective *himávant* "snowy" (10.121.4a): restrict it to MBh,
  or accept `[היתר שם]` there.

### Lessons for the guidelines
- A brief's gloss of a key word can be the later tradition's reading, not the text's: *yathāpūrvám* "as before" is
  Purāṇic; the Vedic dictionaries give "in succession" (★ "read the transliteration before believing any brief").
- A privative compound (*a-vātá*) carries the gated word: the licence regex should match the stem inside a compound.
- Remembered rank-3 wordings are as unreliable as remembered verses: quote only after `tr`.

## RV10.90 1a–16d (translator 1, Round 5 run 1, part 2)

### Scope
RV 10.90, the Puruṣa hymn, all 64 pādas: `annotated-RV10.90.rtl.md`, `translation--intro-RV10.90.rtl.md`, generated
`translation-RV10.90.rtl.md`. Also one change in part 1's RV10.72.7b (below).

### Sources consulted
VedaWeb Zurich text and morphology; `tr` (Griffith, Geldner, Grassmann, Elizarenkova) after drafting; Jamison's commentary
on X.90 (`X.61–191-9-25-26.txt`); Enūma eliš IV 137–140, V 53–62 (`../../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`);
Grímnismál 40–41 (Ymir), cited only from knowledge, in a few words. Every Bible verse was printed before it was quoted.

### Decisions
- ***púruṣa* / *pū́ruṣa* = `אָדָם`** (gated, licensed). The cosmic Man and the name Puruṣa are explained in the apparatus and
  in a footnote; tagged [equivalent] to Gen 1:27 at 1a, with the warning that the link runs through the Hebrew word.
- The bahuvrīhis are rendered with `בעל …` (*sahásraśīrṣan* `בעל אלף הראשים` and so on); *tripā́d* `שלושת רבעיו` /
  `בשלושת רבעיו` (Jamison: a bahuvrīhi in both verses); *pā́da* `רבע` (its sense "foot" is noted).
- *áti* (1d, 2d, 5c) `מעל` (Jamison: the Man's "beyondness"); *ánna* `מזון`; *amr̥tatvá* `אלמוות` (as *amŕ̥ta*); √*īś*
  `שלט`; *bhūtá* `נהיה`; *bhávya* `שעתיד להיות`.
- Virāj `וִירָאג'` (new name, feminine in the Hebrew, although Zurich tags it masculine).
- **√*tan* + *yajñá* = `פרש (זבח)`** (6b, 15c), split from 10.129.5a *ví √tan* `נמתח` (an idiom: the sacrifice is spread
  like a weave).
- *havís* `מנחה` (6a, 6d; Jamison notes the doubling); *ā́jya* `חמאה מזוקקת`; *pr̥ṣadājyá* `חמאה מזוקקת מנומרת`; *idhmá*
  `העצים`; *samídh* `זרדים`; *paridhí* `מקלות־הגדר`; *barhís* `מצע העשב`; prá √ukṣ `הזה`; *sarvahút* `נוסך הכל`
  (Jamison: "offering everything", not "fully offered").
- *vasantá* `אביב`, *grīṣmá* `קיץ`, *śarád* `סתיו`.
- *paśú* `בהמה`; *vāyavyà* `של הרוח` (*vāyú* = `רוּחַ`); *āraṇyá* `של הבר`; ***grāmyá* `של היישוב`**: `כפר` is blocked by the
  כפר gate (the "village" is not the root of atonement, but the gate rightly cannot tell them apart).
- *ŕ̥c* `פסוקי־ההלל`; *sā́man* `נעימות`; *chándas* `משקלים`; *yájus* `אמרת־הזבח` (`נוסח` is *bráhman*'s).
- *ajāví* `התיישים והכבשים` (renderings §5.4).
- The four classes: *brāhmaṇá* `בְּרַהְמִין` (renderings), *rājanyà* `רָאגַ'נְיָה`, *vaíśya* `וַאישְׁיָה`, *śūdrá*
  `שׁוּדְרָה` (new transliterations, with a note).
- *candrámas* `ירח`; *cákṣus* `עין`; *múkha* `פה`; ***prāṇá* `נשימה`, *vāyú* `רוח`** (Gen 2:7 in the apparatus;
  `נְשָׁמָה` never); *nā́bhi* `טבור`; *śíras* `ראש`; *díś* `כיוון`; *śrótra* `אוזן`; ***loká* `עולם`** (the coordinator's
  ruling).
- √*bandh* `כפת` (15d; Gen 22:9 in the apparatus); *yajñéna yajñám ayajanta* `בזבח זבחו … את הזבח` (one root, זבח).
- *dhárman* `יסוד`; √*sac* `הגיע`; *pū́rva* `קדמון`; the Sādhyas `הַסָּאדְהְיָה` (new name).
- 8a = 9a are identical lines, with identical Hebrew.
- **Part 1 change: RV10.72.7b *bhúvana* `העולמות` → `ההוויות`**, because `עוֹלָם` is now *loká*'s (§11.1).

### Open decisions for the user
- *púruṣa* = `אדם` is binding, but 10.90 is the place where a reader most needs the name. The footnote at 1a gives it.
  Should the clean translation instead print `האדם (פּוּרוּשָׁה)` at its first occurrence?

### Progress log
- 2026-10-30: drafted 1–8 (saved, filled, verified: the כפר gate caught `הכפר` in 8d, fixed to `היישוב`), then 9–16; read
  `tr` and corrected the Griffith/Geldner quotations; passes (a) to (c): `אֵלֶּה` vocalized (16b); quotation spellings
  fixed; built; `verify --strict` and `check_bible_quotes` clean for the project.

### The text on its own terms
- The Man exceeds the world he covers (1cd, 2d, 5c *áti*); only a quarter of him is "all that came to be" (3–4).
- Virāj is born of him, and he of her (5ab): a loop of births, as with Aditi and Dakṣa (10.72.4–5).
- Creation is a sacrifice: the gods offer the Man, and the seasons are its butter, wood and oblation (6). Every later
  sacrifice repeats this first one, and so keeps the world going (16).
- From the sacrifice come the animals, sorted as the priests sorted them (air, wild, village; teeth in both jaws or not;
  horse, cow, goat and sheep), and the Vedas themselves (8–10): the sacred word is not a human invention.
- The four classes come from his mouth, arms, thighs and feet (12). This is the only place in the Rigveda that names all
  four, and it is the religious charter of caste.
- The body is the world: mind → moon, eye → sun, breath → wind, head → sky, feet → earth (13–14). This is the root of the
  Brāhmaṇic "connections" (*bándhu*).
- "With the sacrifice the gods sacrificed the sacrifice" (16a): the sacrifice is instrument, victim and act at once.

### Key parallels
- [equivalent] 1a ↔ `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ` (בראשית א:כז): a primordial "man". In the Veda the world is
  made from him; in Genesis he comes last.
- [divergence] 5a ↔ `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב): a female born
  from the Man; but here he is reborn from her.
- [divergence] 6a (Enūma eliš IV–V, Ymir) ↔ Genesis: a world made from a body (an enemy's body in Babylon and the North, a
  sacrificed body in India) against a world made by speech.
- [divergence] 13a ↔ `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז): moon and sun are born from the
  Man's mind and eye, not made and hung in the sky.
- [divergence] 13d ↔ `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז): the world's wind comes out of the Man's breath;
  the reverse direction.
- [absent] 12a ↔ `הֲלוֹא אָב אֶחָד לְכֻלָּנוּ` (מלאכי ב:י): one origin of all humans. In the Bible (and in m. Sanh. 4:5)
  it means equality; in the Veda it grounds the hierarchy.
- [divergence] 15d ↔ `וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ` (בראשית כב:ט): a man bound as a sacrificial animal. In the Veda he is
  killed, and the world is made from him.

### Proposals for the shared renderings
- *amr̥tatvá* `אלמוות`; *ánna* `מזון`; *áti* (preverb) `מעל`; *pā́da* (quarter) `רבע`; *tripā́d* `שלושת רבעיו`.
- Virāj `וִירָאג'` (` viraj`), the Sādhyas `הַסָּאדְהְיָה` (` sadhy`), *rājanyà* `רָאגַ'נְיָה`, *vaíśya* `וַאישְׁיָה`,
  *śūdrá* `שׁוּדְרָה` (new names and transliterations for §3.1).
- √*tan* + *yajñá* `פרש`; *havís* `מנחה` (confirmed); *ā́jya* `חמאה מזוקקת`; *idhmá* `עצים`; *samídh* `זרד`; *paridhí*
  `מקל־גדר`; *barhís* `מצע העשב`.
- *ŕ̥c* `פסוק־הלל`, *sā́man* `נעימה`, *chándas* `משקל`, *yájus* `אמרת־זבח`.
- *grāmyá* `של היישוב` (*grā́ma* `יישוב`: `כפר` is blocked by the כפר gate); *āraṇyá* `של הבר`.
- *prāṇá* `נשימה` (confirmed); *cákṣus* `עין`; *nā́bhi* `טבור`; *díś* `כיוון` (with *pradíś*).
- *bhúvana* `הוויה` (`עולם` is *loká*'s).

### Lessons for the guidelines
- A root gate catches homographs from prefix + word: `כפרה` "like a cow" (RV 1.32.9d) and `הכפר` "the village" both read as
  the root כפר. The translator rephrases (`כמו פרה`, `היישוב`); the tool could check a `כ` + noun reading.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (RV10.129)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | nā́sad āsīn nó sád āsīt tadā́nīṃ | לא היה אַיִן, ולא היה יֵשׁ אז; | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | בראשית פותח באל ובמעשה; הוודה פותח בשלילה כפולה, בלי אל ובלי מעשה: לפני ההבחנה בין יש לאין. |
| 1a | nā́sad āsīn nó sád āsīt tadā́nīṃ | לא היה אַיִן, ולא היה יֵשׁ אז; | `וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ` (בראשית א:ב); `טֶרֶם יִהְיֶה בָאָרֶץ` (בראשית ב:ה) | equivalent | שני הטקסטים מתחילים בתיאור מצב שלפני הסדר, אבל בבראשית המצב הוא "תהו ובהו" של הארץ, וכאן אין אפילו "אין". השוו את פתיחת *אנומה אליש* ("כאשר ממעל לא נקראו (בשם) השמים", `../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`, I 1–2) ואת : הפתיחה בשלילה ("כשעוד לא היה…") משותפת לבבל, לישראל ולהודו – מוטיב משותף לתרבויות שלא נפגשו (הוודה וישראל), ולא מקור. |
| 1b | nā́sīd rájo nó vyòmā paró yát | לא היה המרחב, ולא המרום אשר מעבר (לו). | `יְהִי רָקִיעַ בְּתוֹךְ הַמָּיִם` (בראשית א:ו) | absent | הקוסמוס הוודי מחולק לארץ, "מרחב" ושמים עליונים; כאן אף אחד מהם לא היה. בבראשית השמים הם מעשה של היום השני; כאן הם רק נשללים. |
| 1c | kím ā́varīvaḥ kúha kásya śármann | מה התנועע? היכן? במחסה של מי? | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | גם בבראשית יש תנועה אחת לפני הסדר (`מְרַחֶפֶת`); כאן התנועה היא שאלה, בלי נושא: "מה התנועע?". |
| 1d | ámbhaḥ kím āsīd gáhanaṃ gabhīrám | האם היו מים, שאין להם חקר, עמוקים? | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם; וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | המים העמוקים שלפני הסדר: המוטיב שהוודה, בבל (אַפְּסוּ ותיאמת, *אנומה אליש* I 3–5) וישראל חולקים, בלי מגע בין הוודה לישראל. |
| 1d | ámbhaḥ kím āsīd gáhanaṃ gabhīrám | האם היו מים, שאין להם חקר, עמוקים? | `בְּאֵין תְּהֹמוֹת חוֹלָלְתִּי` (משלי ח:כד) | divergence | בבראשית המים ישנם, ו`תְהוֹם` הוא שם עצם; כאן הם רק שאלה, ו"שאין להם חקר, עמוקים" הם תארים, לא שם. `תְּהוֹם` שמור בקורפוס ולא נכתב. השוו  – גם החכמה שבמשלי מדברת על "כשעוד לא היו תהומות". |
| 2a | ná mr̥tyúr āsīd amŕ̥taṃ ná tárhi | לא היה מָוֶת, ולא אלמוות באותה עת; | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | divergence | גם בבראשית ההבדל בין בן־תמותה לבין מי שחי לעולם הוא הגבול בין האדם לאלוהי; כאן הצמד עוד לא נפרד, ואין עדיין מי שיעמוד משני צדיו. השוו הסיודוס, *תולדות האלים* 118, 120 (`../הסיודוס/1-תולדות-האלים/`): "בני־האלמוות" הם האלים – האלמוות הוא מה שמבדיל אל מאדם, ובוודה *amŕ̥ta* הוא תכונת האלים ומשקה הסומה. |
| 2b | ná rā́tryā áhna āsīt praketáḥ | לא היה סימן ללילה, ליום. | `וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ. וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה` (בראשית א:ד–ה) | equivalent | בשני הטקסטים העולם שלפני הסדר הוא עולם שבו יום ולילה אינם מובחנים |
| 2b | ná rā́tryā áhna āsīt praketáḥ | לא היה סימן ללילה, ליום. | `וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים` (בראשית א:יד) | divergence | בבראשית ה"אותות" הם המאורות של היום הרביעי, ובוודה ה"סימן" חסר עוד לפני כל דבר. בחרנו `סימן` ולא `אות`, כדי לא ליצור הד ללשון בראשית א:יד שאין בסנסקריט. |
| 2c | ā́nīd avātáṃ svadháyā tád ékaṃ | נשם בלי רוח, בכוחו העצמי, האחד ההוא; | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | בבראשית יש לפני הסדר רוח על המים; בוודה יש "אחד" שנושם "בלי רוח": אותם רכיבים – נשימה, רוח, ההוויה שלפני העולם – אבל מסודרים אחרת: אין רוח, ובכל זאת יש נשימה. |
| 2c | ā́nīd avātáṃ svadháyā tád ékaṃ | נשם בלי רוח, בכוחו העצמי, האחד ההוא; | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | הנשימה כסימן החיים הראשון. |
| 2c | ā́nīd avātáṃ svadháyā tád ékaṃ | נשם בלי רוח, בכוחו העצמי, האחד ההוא; | `שְׁמַע יִשְׂרָאֵל: יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד` (דברים ו:ד) | divergence | "האחד" של הוודה הוא נייטר, "הדבר ההוא", לא אל ולא שם; הקשר לדברים ו:ד הוא דרך המלה העברית בלבד. מוטיב משותף (הנשימה והרוח לפני העולם), בלי מגע בין התרבויות. |
| 2d | tásmād dhānyán ná paráḥ kíṃ canā́sa | מלבדו לא היה דבר אחר כלשהו מעבר (לו). | `אֲנִי יְהוָה וְאֵין עוֹד` (ישעיהו מה:ו) | equivalent | "אין זולתו" |
| 2d | tásmād dhānyán ná paráḥ kíṃ canā́sa | מלבדו לא היה דבר אחר כלשהו מעבר (לו). | `אֲנִי יְהוָה וְאֵין עוֹד` (ישעיהו מה:ו) | divergence | בישעיהו אין עוד אל מלבד יהוה; כאן אין עוד דבר מלבד "האחד" הנייטרי, שאיננו אל. |
| 3a | táma āsīt támasā gūḷhám ágre | חושך היה, בחושך חבוי, בתחילה; | `וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב) | equivalent | החושך שלפני הסדר: המלה הסנסקריטית *támas* היא המלה הרגילה ל"חושך", ולכן `חושך` כאן הוא התרגום הטבעי, לא שאילה מבראשית (הד אמיתי שאין להסתירו). |
| 3a | táma āsīt támasā gūḷhám ágre | חושך היה, בחושך חבוי, בתחילה; | `בְּרֵאשִׁית` (בראשית א:א) | equivalent | *ágre* "בתחילה" ↔  – גם *ágra* וגם `רֵאשִׁית` נגזרו מ"ראש, חזית"; `רֵאשִׁית` שמור בקורפוס ולא נכתב. |
| 3a | táma āsīt támasā gūḷhám ágre | חושך היה, בחושך חבוי, בתחילה; | `בְּרֵאשִׁית` (בראשית א:א) | divergence | בבראשית החושך הוא "על פני" התהום, ואחר כך האל מבדיל בינו לבין האור; כאן החושך מכוסה בחושך – אין עדיין שני דברים. השוו הסיודוס, *תולדות האלים* 123 (`../הסיודוס/1-תולדות-האלים/`): "ומן הפער נהיו אֶרֶבוֹס ולילה השחורה" – גם ביוון החושך הוא מן הראשונים. מוטיב משותף לשלוש תרבויות, בלי מגע בין הוודה לישראל. |
| 3b | -apraketáṃ saliláṃ sárvam ā idám | נחשול חסר־סימן היה כל זה. | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | העולם כולו מים לפני הסדר |
| 3b | -apraketáṃ saliláṃ sárvam ā idám | נחשול חסר־סימן היה כל זה. | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | בבראשית המים והחושך הם שני דברים שונים, וה"ארץ" "תהו ובהו"; כאן "כל זה" (העולם שאנו רואים, *idám*) היה נחשול שאי־אפשר להבחין בו. השוו *אנומה אליש* I 5 (`../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`): "מימיהם יחד היו נמזגים" – המים המעורבבים שלפני ההבחנה. מוטיב משותף. |
| 3c | tuchyénābhv ápihitaṃ yád ā́sīt | הַנִּהְיֶה, אשר היה סגור בריקות – | `תֹּלֶה אֶרֶץ עַל בְּלִימָה` (איוב כו:ז) | divergence | גם באיוב יש "בלי־מה", אפס שמתחת לעולם |
| 3c | tuchyénābhv ápihitaṃ yád ā́sīt | הַנִּהְיֶה, אשר היה סגור בריקות – | `תֹּלֶה אֶרֶץ עַל בְּלִימָה` (איוב כו:ז) | divergence | באיוב העולם תלוי על האפס; כאן האפס הוא עטיפה שבתוכה ההוויה מבשילה. |
| 3d | tápasas tán mahinā́jāyataíkam | בגדולת הלהט נולד האחד ההוא. | — | divergence | `בְּטֶרֶם הָרִים יֻלָּדוּ וַתְּחוֹלֵל אֶרֶץ וְתֵבֵל` (תהילים צ:ב) – גם המקרא מדבר על "לידת" ההרים, וגם בראשית ב:ד מכנה את הבריאה `תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ`; אבל בתהלים הלידה היא דימוי, ואילו בוודה העולם נולד ממש – והיולד הוא להט, לא אל. השוו *אנומה אליש* I 9: "נבנו האלים בקרבם" – גם בבבל הראשונים נולדים בתוך המים. |
| 4a | kā́mas tád ágre sám avartatā́dhi | חשק התהווה עליו בתחילה, | — | equivalent | הסיודוס, *תולדות האלים* 120 (`../הסיודוס/1-תולדות-האלים/`): "וְאֶרוֹס, אשר הוא היפה בָּאֵלִים בני־האלמוות" – גם אצל הסיודוס החשק (אֶרוֹס) הוא מן הראשונים, מיד אחרי הפער והארץ. |
| 4a | kā́mas tád ágre sám avartatā́dhi | חשק התהווה עליו בתחילה, | — | absent | בבראשית א אין חשק בין מעשי הבריאה; התשוקה (`תְּשׁוּקָה`, שמורה בקורפוס) מופיעה רק בעונש האשה (בראשית ג:טז). שלושה עולמות: בהודו וביוון התשוקה היא כוח קוסמי ראשוני, בבראשית הבריאה היא דיבור. |
| 4b | mánaso rétaḥ prathamáṃ yád ā́sīt | אשר היה זרע המחשבה הראשון. | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר` (בראשית א:ג) | divergence | בשני הטקסטים התחלת העולם קשורה בדעת: בבראשית – דבר מפורש של אל, בוודה – "זרע" של מחשבה, דימוי של הולדה. `זרע` כאן הוא תרגום *rétas* (זרע הזכר), המלה הטבעית, ולא שאילה מבראשית א:יא–יב. |
| 4c | sató bándhum ásati nír avindan | את קרבת היֵשׁ בָּאַיִן מצאו | `יְהוָה בְּחָכְמָה יָסַד אָרֶץ` (משלי ג:יט) | divergence | גם במקרא החכמה קשורה לבריאה, אבל שם היא חכמת האל; כאן המשוררים, בני אדם, מגלים את הקשר בחיפוש בלבם. |
| 5a | tiraścī́no vítato raśmír eṣām | לרוחב נמתח מיתרם: | `מִי שָׂם מְמַדֶּיהָ כִּי תֵדָע; אוֹ מִי נָטָה עָלֶיהָ קָּו` (איוב לח:ה) | equivalent | גם באיוב מישהו "נוטה קו" על העולם, והשאלה היא מי |
| 5a | tiraścī́no vítato raśmír eṣām | לרוחב נמתח מיתרם: | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | divergence | בבראשית ההבדלה בין מעלה ומטה היא רקיע; כאן מיתר מתוח, ומי שמתח אותו הם המשוררים (או: לא ידוע מי). מוטיב משותף (מדידת העולם וחלוקתו בקו), בלי מגע. |
| 5b | adháḥ svid āsī́3d upári svid āsī3t | האם היה מתחת? האם היה מעל? | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | equivalent | אותו זוג, מתחת ומעל, כתוצאה של ההבדלה הראשונה. |
| 5b | adháḥ svid āsī́3d upári svid āsī3t | האם היה מתחת? האם היה מעל? | `וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ` (בראשית א:ז) | divergence | בבראשית הם עובדה ("ויהי כן"), כאן – שאלה. |
| 5c | retodhā́ āsan mahimā́na āsan | שָׂמֵי־זרע היו, גדולות היו; | — | absent | בבראשית א הבריאה אינה מינית; הכוח להוליד ניתן לבעלי החיים ולאדם כברכה (`פְּרוּ וּרְבוּ`, בראשית א:כב, כח), אבל העולם עצמו אינו נולד מזרע. בוודה, כמו אצל הסיודוס (שמים וארץ מולידים), הבריאה עצמה היא הולדה. |
| 6a | kó addhā́ veda ká ihá prá vocad | מי יודע בוודאות? מי יכריז כאן: | `אֵיפֹה הָיִיתָ בְּיָסְדִי-אָרֶץ; הַגֵּד אִם-יָדַעְתָּ בִינָה` (איוב לח:ד) | divergence | גם באיוב השאלה "מי יודע" עומדת מול הבריאה |
| 6a | kó addhā́ veda ká ihá prá vocad | מי יודע בוודאות? מי יכריז כאן: | `אֵיפֹה הָיִיתָ בְּיָסְדִי-אָרֶץ; הַגֵּד אִם-יָדַעְתָּ בִינָה` (איוב לח:ד) | divergence | באיוב השאלה רטורית ומופנית אל האדם, שאינו יודע, והאל יודע; כאן השאלה פתוחה, ובסוף המזמור היא מגיעה גם אל העליון שבמרום (7d). מוטיב משותף, בלי מגע. |
| 6b | kúta ā́jātā kúta iyáṃ vísr̥ṣṭiḥ | מאין נולדה, מאין – ההשלחה הזאת? | `בְּרֵאשִׁית בָּרָא אֱלֹהִים` (בראשית א:א) | divergence | בבראשית לבריאה יש פועל משלה, `בָּרָא`, ונושא, אלוהים; בוודה המלה היא "שילוח" – דבר שיוצא, משתחרר, נשפך – ואין לה נושא ידוע. ההבדל בין שני הפעלים הוא אולי ההבדל העיקרי בין שתי הקוסמוגוניות. |
| 6c | arvā́g devā́ asyá visárjanena- | הָאֵלִים – לאחר שילוחו של זה; | — | absent | בבראשית אין "אלים" מאוחרים לעולם: האל קודם לו (`בְּרֵאשִׁית בָּרָא אֱלֹהִים`, בראשית א:א). |
| 6c | arvā́g devā́ asyá visárjanena- | הָאֵלִים – לאחר שילוחו של זה; | — | equivalent | *אנומה אליש* I 7–9 (`../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`): "כאשר האלים לא הופעו – אף לא אחד … נבנו האלים בקרבם" – גם בבבל האלים נולדים בתוך העולם הקדמון, אחרי המים; והסיודוס (*תולדות האלים* 116–128) מוליד את האלים מן הפער ומן הארץ. בבבל, ביוון ובהודו האלים הם צאצאי העולם; בבראשית העולם הוא מעשה האל. מוטיב משותף לשלוש התרבויות, שישראל נבדל ממנו. |
| 7b | yádi vā dadhé yádi vā ná | אם הועמדה ואם לא – | `וַיַּרְא אֱלֹהִים אֶת כָּל אֲשֶׁר עָשָׂה וְהִנֵּה טוֹב מְאֹד` (בראשית א:לא) | absent | בבראשית הבריאה היא עובדה ודאית, והאל רואה אותה ומאשר; כאן היא בספק כפול: מאין, ואם בכלל. |
| 7c | yó asyā́dhyakṣaḥ paramé vyòman | מי שהוא המשגיח על זה בַּמָּרוֹם הָעֶלְיוֹן – | — | equivalent | `יְהוָה בַּשָּׁמַיִם הֵכִין כִּסְאוֹ` (תהילים קג:יט) – העליון שבשמים, ש"עיניו" על העולם |
| 7c | yó asyā́dhyakṣaḥ paramé vyòman | מי שהוא המשגיח על זה בַּמָּרוֹם הָעֶלְיוֹן – | — | divergence | במקרא הוא בורא העולם ושליטו; כאן הוא רק "משגיח", ובשורה הבאה גם ידיעתו בספק. |
| 7d | só aṅgá veda yádi vā ná véda | הוא אכן יודע – ואם אינו יודע? | — | absent | `הֲנֹטַע אֹזֶן הֲלֹא יִשְׁמָע; אִם-יֹצֵר עַיִן הֲלֹא יַבִּיט` (תהילים צד:ט) – במקרא מי שעשה יודע, וזו טענה; "אולי אינו יודע" אין לו מקבילה במקרא. |
| 7d | só aṅgá veda yádi vā ná véda | הוא אכן יודע – ואם אינו יודע? | `אֱלֹהִים הֵבִין דַּרְכָּהּ; וְהוּא יָדַע אֶת-מְקוֹמָהּ` (איוב כח:כג); `הַנִּסְתָּרֹת לַיהוָה אֱלֹהֵינוּ` (דברים כט:כח) | divergence | באיוב, אחרי שאלת "והחכמה מאין תמצא", התשובה היא שהאל יודע; כאן התשובה עצמה מוטלת בספק. וגם : הנסתר שייך לאל; בוודה אולי אינו שייך לאיש. הספקנות של קהלת (`מִבְּלִי אֲשֶׁר לֹא יִמְצָא הָאָדָם אֶת הַמַּעֲשֶׂה אֲשֶׁר עָשָׂה הָאֱלֹהִים מֵרֹאשׁ וְעַד סוֹף`, קוהלת ג:יא) נוגעת בידיעת האדם, לא בידיעת האל. |

### Parallels index (RV10.121)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | hiraṇyagarbháḥ sám avartatā́gre | עֻבַּר הַזָּהָב התהווה בתחילה; | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | equivalent | *ágre* "בתחילה" כמו `בְּרֵאשִׁית`, ושתי המלים נגזרו מ"ראש"; `רֵאשִׁית` שמור בקורפוס ולא נכתב. |
| 1a | hiraṇyagarbháḥ sám avartatā́gre | עֻבַּר הַזָּהָב התהווה בתחילה; | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | בבראשית בתחילה יש אל שבורא; כאן בתחילה "מתהווה" עובר: הראשון אינו עושה, הוא נולד. מוטיב משותף (מה שהיה "בתחילה"), בלי מגע בין התרבויות. |
| 1b | bhūtásya jātáḥ pátir éka āsīt | משנולד, היה האדון האחד של הנהיה. | — | divergence | `בְּטֶרֶם הָרִים יֻלָּדוּ וַתְּחוֹלֵל אֶרֶץ וְתֵבֵל; וּמֵעוֹלָם עַד-עוֹלָם אַתָּה אֵל` (תהילים צ:ב) – במקרא העולם "נולד" והאל קודם לו מעולם; כאן האדון של העולם עצמו נולד, ואדנותו מתחילה בהולדתו. |
| 1c | sá dādhāra pr̥thivī́ṃ dyā́m utémā́ṃ | הוא החזיק את הארץ ואת השמים האלה. | — | equivalent | `אָנֹכִי תִכַּנְתִּי עַמּוּדֶיהָ סֶּלָה` (תהילים עה:ד) – האל מחזיק את הארץ שלא תתמוטט |
| 1c | sá dādhāra pr̥thivī́ṃ dyā́m utémā́ṃ | הוא החזיק את הארץ ואת השמים האלה. | `תֹּלֶה אֶרֶץ עַל-בְּלִימָה` (איוב כו:ז) | equivalent | מוטיב משותף (האל כנושא העולם), בלי מגע. |
| 1d | kásmai devā́ya havíṣā vidhema | לְאֵיזֶה אֵל נכבד במנחה? | `בַּמָּה אֲקַדֵּם יְהוָה אִכַּף לֵאלֹהֵי מָרוֹם` (מיכה ו:ו) | divergence | מיכה יודע את האל ושואל במה לבוא לפניו; המשורר הוודי יודע את המנחה ושואל לאיזה אל. |
| 1d | kásmai devā́ya havíṣā vidhema | לְאֵיזֶה אֵל נכבד במנחה? | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | divergence | גם במקרא "מי" פותח שאלה על אל בין האלים, אבל היא רטורית, והתשובה נאמרת בה. מוטיב משותף (השאלה "מי" בשבח האל), בלי מגע. |
| 2a | yá ātmadā́ baladā́ yásya víśve- | אשר נותן נפש, נותן כוח, אשר כולם | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים; וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה` (בראשית ב:ז) | equivalent | האל נותן את הנפש; מוטיב משותף, בלי מגע. |
| 2b | upā́sate praśíṣaṃ yásya devā́ḥ | מחכים לפקודתו – אשר האֵלִים (מחכים לה); | — | equivalent | `וּמֶלֶךְ גָּדוֹל עַל-כָּל-אֱלֹהִים` (תהילים צה:ג) – האל שהאלים האחרים כפופים לו. |
| 2b | upā́sate praśíṣaṃ yásya devā́ḥ | מחכים לפקודתו – אשר האֵלִים (מחכים לה); | — | divergence | במזמור הוודי האלים נמצאים, והאל הגדול נעלם בשמו; בתהלים ההפך: שמו ידוע, והאלים האחרים הם כלום – `כִּי כָּל-אֱלֹהֵי הָעַמִּים אֱלִילִים` (תהילים צו:ה). |
| 2c | yásya chāyā́mŕ̥taṃ yásya mr̥tyúḥ | אשר צלו – אלמוות, אשר (צלו) – מָוֶת: | `אֲנִי אָמִית וַאֲחַיֶּה` (דברים לב:לט); `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל-א ב:ו) | equivalent | האל שבידו המוות והחיים. |
| 2c | yásya chāyā́mŕ̥taṃ yásya mr̥tyúḥ | אשר צלו – אלמוות, אשר (צלו) – מָוֶת: | `אֲנִי אָמִית וַאֲחַיֶּה` (דברים לב:לט); `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל-א ב:ו) | divergence | בשירת האזינו האל "ממית ומחיה"; כאן האלמוות והמוות הם "צלו": מה שנופל ממנו בלי מעשה. |
| 3b | -éka íd rā́jā jágato babhū́va | האחד – הוא נהיה למלך העולם הנע; | — | equivalent | `כִּי מֶלֶךְ כָּל-הָאָרֶץ אֱלֹהִים` (תהילים מז:ח) – האל כמלך העולם; מוטיב משותף. |
| 3c | yá ī́śe asyá dvipádaś cátuṣpadaḥ | אשר שולט בזה, בבעל שתי הרגליים ובבעל ארבע הרגליים – | — | equivalent | `תַּמְשִׁילֵהוּ בְּמַעֲשֵׂי יָדֶיךָ; כֹּל שַׁתָּה תַחַת-רַגְלָיו. צֹנֶה וַאֲלָפִים כֻּלָּם` (תהילים ח:ז–ח) – אדם ובהמה כשני חלקי העולם החי |
| 3c | yá ī́śe asyá dvipádaś cátuṣpadaḥ | אשר שולט בזה, בבעל שתי הרגליים ובבעל ארבע הרגליים – | `וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ; וְיִרְדּוּ בִדְגַת הַיָּם … וּבַבְּהֵמָה` (בראשית א:כו) | divergence | בבראשית האדם מושל בבהמה; בוודה האל מושל בשניהם יחד, בלי מדרג ביניהם. |
| 4a | yásyemé himávanto mahitvā́ | אשר שלו, בגודלו, (ההרים) המושלגים האלה, | — | equivalent | `אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי-אָרֶץ; וְתוֹעֲפֹת הָרִים לוֹ. אֲשֶׁר-לוֹ הַיָּם וְהוּא עָשָׂהוּ` (תהילים צה:ד–ה) – אותו רצף בדיוק: ההרים "לו", הים "לו". |
| 4a | yásyemé himávanto mahitvā́ | אשר שלו, בגודלו, (ההרים) המושלגים האלה, | — | divergence | בתהלים הסיבה נאמרת ("והוא עשהו"); בוודה ההרים שלו "בגודלו", ושמו לא נאמר. מוטיב משותף, בלי מגע. |
| 4b | yásya samudráṃ rasáyā sahā́húḥ | אשר שלו, אומרים, הים עם רַסָה; | — | equivalent | `אֲשֶׁר-לוֹ הַיָּם וְהוּא עָשָׂהוּ` (תהילים צה:ה) – ראו 4a. |
| 5a | yéna dyaúr ugrā́ pr̥thivī́ ca dr̥ḷhā́ | אשר על ידו השמים העזים והארץ – מוצקים, | `בְּאַמְּצוֹ שְׁחָקִים מִמָּעַל` (משלי ח:כח) | equivalent | האל מחזק את השמים; מוטיב משותף. |
| 5b | yéna svà stabhitáṃ yéna nā́kaḥ | אשר על ידו האור נתמך, אשר על ידו – הכיפה; | `יְהִי רָקִיעַ בְּתוֹךְ הַמָּיִם` (בראשית א:ו) | divergence | גם בוודה יש "כיפה" מעל העולם; אבל בבראשית היא "נעשית" ומבדילה בין מים למים, וכאן היא "נתמכת", כבניין שעומד על עמוד. |
| 5b | yéna svà stabhitáṃ yéna nā́kaḥ | אשר על ידו האור נתמך, אשר על ידו – הכיפה; | `עַמּוּדֵי שָׁמַיִם יְרוֹפָפוּ` (איוב כו:יא) | equivalent | השמים כבניין על עמודים. מוטיב משותף. |
| 5c | yó antárikṣe rájaso vimā́naḥ | אשר בחלל האוויר הוא מודד המרחב – | `מִי מָדַד בְּשָׁעֳלוֹ מַיִם וְשָׁמַיִם בַּזֶּרֶת תִּכֵּן` (ישעיהו מ:יב) | equivalent | האל כמודד העולם, וגם שם בשאלת "מי" |
| 5c | yó antárikṣe rájaso vimā́naḥ | אשר בחלל האוויר הוא מודד המרחב – | `מִי מָדַד בְּשָׁעֳלוֹ מַיִם וְשָׁמַיִם בַּזֶּרֶת תִּכֵּן` (ישעיהו מ:יב) | divergence | בישעיהו השאלה רטורית (התשובה: יהוה); כאן היא אמיתית. מוטיב משותף, בלי מגע. |
| 6b | abhy aíkṣetām mánasā réjamāne | הביטו (אליו) במחשבתן, רועדות – | — | equivalent | `הַמַּבִּיט לָאָרֶץ וַתִּרְעָד` (תהילים קד:לב) – הרעד מול האל |
| 6b | abhy aíkṣetām mánasā réjamāne | הביטו (אליו) במחשבתן, רועדות – | — | divergence | בתהלים האל מביט והארץ רועדת; כאן המערכות מביטות אל האל ורועדות. |
| 6c | yátrā́dhi sū́ra údito vibhā́ti | כאשר עליהן מאירה השמש שעלתה: | — | equivalent | `וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ; יָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח` (תהילים יט:ו) – השמש העולה כגיבור; מוטיב משותף. |
| 7a | ā́po ha yád br̥hatī́r víśvam ā́yan | כאשר המים הרמים באו אל הכל, | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | המים שקדמו לכל |
| 7a | ā́po ha yád br̥hatī́r víśvam ā́yan | כאשר המים הרמים באו אל הכל, | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | בבראשית המים מחכים לדבר האל; כאן הם עצמם "באים אל הכל" ונושאים את העובר. השוו *אנומה אליש* I 3–5 (`../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`): אַפְּסוּ "הוֹרָם" ותיאמת "המולידה את כולם" – המים כהורים. מוטיב משותף לשלוש תרבויות, בלי מגע בין הוודה לישראל. |
| 7b | gárbhaṃ dádhānā janáyantīr agním | שָׂמִים עֻבָּר (בקרבם), מולידים את אַגְנִי, | `יִשְׁרְצוּ הַמַּיִם שֶׁרֶץ נֶפֶשׁ חַיָּה` (בראשית א:כ) | equivalent | המים מוציאים חיים |
| 7b | gárbhaṃ dádhānā janáyantīr agním | שָׂמִים עֻבָּר (בקרבם), מולידים את אַגְנִי, | `יִשְׁרְצוּ הַמַּיִם שֶׁרֶץ נֶפֶשׁ חַיָּה` (בראשית א:כ) | divergence | בבראשית בדבר האל, ביום החמישי; כאן המים הרים ויולדים את האש – הדבר הראשון שנולד מהם הוא אל. |
| 8a | yáś cid ā́po mahinā́ paryápaśyad | אשר אף על המים השקיף בגדולתו, | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | מישהו מעל המים הקדמונים |
| 8a | yáś cid ā́po mahinā́ paryápaśyad | אשר אף על המים השקיף בגדולתו, | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | בבראשית הרוח "מרחפת", בוודה האל "משקיף" – ואין שם רוח. מוטיב משותף, בלי מגע. |
| 8b | dákṣaṃ dádhānā janáyantīr yajñám | שָׂמִים כִּשְׁרוֹן (בקרבם), מולידים את הזבח – | — | absent | בבראשית אין זבח בסיפור הבריאה; בוודה הזבח הוא חלק מן הבריאה עצמה, נולד מן המים כמו האש. |
| 8c | yó devéṣv ádhi devá éka ā́sīt | אשר היה האֵל האחד על האֵלִים – | — | equivalent | `כִּי אֵל גָּדוֹל יְהוָה; וּמֶלֶךְ גָּדוֹל עַל-כָּל-אֱלֹהִים` (תהילים צה:ג) – האל שמעל האלים |
| 8c | yó devéṣv ádhi devá éka ā́sīt | אשר היה האֵל האחד על האֵלִים – | — | divergence | בתהלים הוא נקרא בשמו, כאן אין לו שם, והשאלה בשורה הבאה היא בדיוק מיהו. |
| 9a | mā́ no hiṃsīj janitā́ yáḥ pr̥thivyā́ḥ- | אַל יפגע בנו (הוא), אשר הוא מוליד הארץ, | — | divergence | `עֹשֶׂה שָׁמַיִם וָאָרֶץ` (תהילים קמו:ו) – גם בתהלים האל הוא עושה השמים והארץ; בוודה הוא "מוליד" אותם, והמתפלל מבקש שלא יפגע בו. הפחד מן האל הגדול, הזר, שאין יודעים את שמו. |
| 9b | yó vā dívaṃ satyádharmā jajā́na | או אשר את השמים הוליד, שיסודותיו אמת, | — | equivalent | `עֹשֶׂה שָׁמַיִם וָאָרֶץ אֶת-הַיָּם וְאֶת-כָּל-אֲשֶׁר-בָּם; הַשֹּׁמֵר אֱמֶת לְעוֹלָם` (תהילים קמו:ו) – יוצר השמים, שאמת היא תכונתו; מוטיב משותף, בלי מגע. |
| 10a | prájāpate ná tvád etā́ny anyó | פְּרַגָ'אפַּתִי, לא אחר מלבדך את אלה, | `כִּי אֵין כָּמוֹךָ וְאֵין אֱלֹהִים זוּלָתֶךָ` (שמואל-ב ז:כב); `אֲנִי יְהוָה וְאֵין עוֹד זוּלָתִי אֵין אֱלֹהִים` (ישעיהו מה:ה) | equivalent | "אין אחר מלבדך" |
| 10a | prájāpate ná tvád etā́ny anyó | פְּרַגָ'אפַּתִי, לא אחר מלבדך את אלה, | `כִּי אֵין כָּמוֹךָ וְאֵין אֱלֹהִים זוּלָתֶךָ` (שמואל-ב ז:כב); `אֲנִי יְהוָה וְאֵין עוֹד זוּלָתִי אֵין אֱלֹהִים` (ישעיהו מה:ה) | divergence | במקרא הנוסחה שוללת אלים אחרים; כאן היא אומרת שרק פרג'אפתי "הקיף" את כל הנולדים. מוטיב משותף, בלי מגע. |
| 10c | yátkāmās te juhumás tán no astu | מה שבחשק אליו אנו נוסכים לך – יהי לנו; | `בַּמָּה אֲקַדֵּם יְהוָה` (מיכה ו:ו) | divergence | גם מיכה שואל על הזבח |
| 10c | yátkāmās te juhumás tán no astu | מה שבחשק אליו אנו נוסכים לך – יהי לנו; | `בַּמָּה אֲקַדֵּם יְהוָה` (מיכה ו:ו) | divergence | הוודה מבקש בגלוי את התמורה ("מה שבחשק אליו – יהי לנו"); מיכה מבטל את הזבח לטובת "עֲשׂוֹת מִשְׁפָּט". |

### Parallels index (RV10.72)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | devā́nāṃ nú vayáṃ jā́nā | את לידות האֵלִים – עתה אנחנו | `אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ בְּהִבָּרְאָם` (בראשית ב:ד) | divergence | גם בבראשית סיפור הבריאה נקרא "תולדות"; אבל שם אלה תולדות השמים והארץ, וכאן תולדות האלים. השוו *אנומה אליש* I 9–20 (`../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`) והסיודוס, *תולדות האלים* (`../הסיודוס/1-תולדות-האלים/`): בבבל, ביוון ובהודו סיפור הראשית הוא קודם כול סיפור הולדת האלים – תיאוגוניה. בבראשית אין לאל הולדה. מוטיב משותף לשלוש התרבויות, שבראשית חסר אותו. |
| 1d | yáḥ páśyād úttare yugé | (למען) מי שיראה (אותן) בעידן מאוחר. | — | equivalent | `לְמַעַן יֵדְעוּ דּוֹר אַחֲרוֹן בָּנִים יִוָּלֵדוּ; יָקֻמוּ וִיסַפְּרוּ לִבְנֵיהֶם` (תהילים עח:ו) – הסיפור על הראשית נאמר כדי שדור מאוחר ידע |
| 1d | yáḥ páśyād úttare yugé | (למען) מי שיראה (אותן) בעידן מאוחר. | — | equivalent | `תִּכָּתֶב זֹאת לְדוֹר אַחֲרוֹן` (תהילים קב:יט). מוטיב משותף (השיר כזיכרון לדורות), בלי מגע. |
| 2b | sáṃ karmā́ra ivādhamat | נפח יחד כְּנַפָּח. | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | equivalent | גם בבראשית ב האל "נופח", והפועל העברי `נפח` הוא הטבעי לנשיפה של נפח |
| 2b | sáṃ karmā́ra ivādhamat | נפח יחד כְּנַפָּח. | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | בבראשית נשיפת חיים לתוך אדם עשוי עפר; כאן נשיפת מפוח שמתיכה את הנולדים יחד, כמו מתכת. |
| 2b | sáṃ karmā́ra ivādhamat | נפח יחד כְּנַפָּח. | `חָרָשׁ נֹפֵחַ בְּאֵשׁ פֶּחָם` (ישעיהו נד:טז); `וְנָפַחְתִּי עֲלֵיכֶם בְּאֵשׁ עֶבְרָתִי` (יחזקאל כב:כא) | equivalent | ו־ – האל כנפח, ואותו פועל. מוטיב משותף (האל כאומן, הבריאה כמלאכת מתכת), בלי מגע. |
| 2d | -ásataḥ sád ajāyata | מן האַיִן נולד היֵשׁ. | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | absent | בראשית אינו אומר ממה נברא העולם; "יש מאין" הוא ניסוח של הפרשנות היהודית בימי הביניים (וכבר מקבים ב ז:כח, ביוונית). הוודה אומר זאת במפורש – אבל כלידה, ולא כמעשה של אל: היש "נולד" מן האין, כמו ילד מאם. |
| 2d | -ásataḥ sád ajāyata | מן האַיִן נולד היֵשׁ. | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | 10.129.1a: "לא היה אַיִן, ולא היה יֵשׁ" – המזמור המאוחר יותר (או החכם יותר) מערער גם על המשפט הזה. השוו הסיודוס, *תולדות האלים* 116 (`../הסיודוס/1-תולדות-האלים/`): "ראשונה נהיה פער" – גם אצל הסיודוס הראשון "נהיה", לא נעשה. |
| 3d | tád uttānápadas pári | הוא – מפשוקת־הרגליים. | `וַיָּסֶךְ בִּדְלָתַיִם יָם; בְּגִיחוֹ מֵרֶחֶם יֵצֵא` (איוב לח:ח) | divergence | גם באיוב יש לידה קוסמית (הים יוצא מרחם); אבל באיוב היולדת אינה נזכרת, והאל "סוכך" על הנולד; כאן היולדת היא תמונה גופנית מפורשת. מוטיב משותף, בלי מגע. |
| 4a | bhū́r jajña uttānápado | האדמה נולדה מפשוקת־הרגליים; | `תּוֹצֵא הָאָרֶץ נֶפֶשׁ חַיָּה לְמִינָהּ` (בראשית א:כד) | divergence | בבראשית הארץ מולידה; כאן היא עצמה נולדת. |
| 4d | dákṣād v áditiḥ pári | ומדַּקְשָׁה – אַדִיטִי. | — | absent | בבראשית אין דבר כזה: ההורה קודם לנולד. כאן כל אחד מן השניים הוא הורו של השני. השוו *אנומה אליש* I 15–16: "ואנו – את תבניתו הוליד" – גם שם השושלת ליניארית, אב ובן. |
| 5c | tā́ṃ devā́ ánv ajāyanta | אחריה נולדו האֵלִים, | — | equivalent | 10.129.6c: "האֵלִים – לאחר שילוחו של זה" – גם כאן האלים מאוחרים. |
| 5d | bhadrā́ amŕ̥tabandhavaḥ | הטובים, קרובי האלמוות. | `וַיַּרְא אֱלֹהִים אֶת הָאוֹר כִּי טוֹב` (בראשית א:ד) | divergence | `טוב` הוא כאן תרגום *bhadrá* (המלה הטבעית; `renderings` §7.2); בבראשית "טוב" הוא מה שהאל רואה בעולם, וכאן – תואר האלים עצמם, הנולדים. |
| 6a | yád devā adáḥ salilé | כאשר, הו אֵלִים, שם בנחשול | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | המים שלפני העולם |
| 6a | yád devā adáḥ salilé | כאשר, הו אֵלִים, שם בנחשול | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | divergence | בבראשית רוח האל מעל המים; כאן האלים עצמם בתוך הנחשול. |
| 6c | átrā vo nŕ̥tyatām iva | שם, כמו מכם כשאתם רוקדים, | `בְּרָן-יַחַד כּוֹכְבֵי בֹקֶר; וַיָּרִיעוּ כָּל-בְּנֵי אֱלֹהִים` (איוב לח:ז); `מְשַׂחֶקֶת לְפָנָיו בְּכָל-עֵת. מְשַׂחֶקֶת בְּתֵבֵל אַרְצוֹ` (משלי ח:ל–לא) | equivalent | בני האלים שמחים בשעת ייסוד הארץ;  – החכמה "משחקת" בשעת הבריאה. |
| 6c | átrā vo nŕ̥tyatām iva | שם, כמו מכם כשאתם רוקדים, | `בְּרָן-יַחַד כּוֹכְבֵי בֹקֶר; וַיָּרִיעוּ כָּל-בְּנֵי אֱלֹהִים` (איוב לח:ז); `מְשַׂחֶקֶת לְפָנָיו בְּכָל-עֵת. מְשַׂחֶקֶת בְּתֵבֵל אַרְצוֹ` (משלי ח:ל–לא) | divergence | באיוב ובמשלי השמחה והמשחק הם לצד הבריאה; בוודה הריקוד עצמו יוצר: האבק שעולה ממנו הוא העולם (6d). מוטיב משותף (הבריאה כמחול ושמחה), בלי מגע. |
| 6d | tīvró reṇúr ápāyata | יצא אבק חריף. | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | divergence | בבראשית העפר הוא החומר שממנו נוצר האדם; כאן האבק העולה מריקוד האלים הוא (אולי) תחילת העולם החומרי. הקשר רופף: מוטיב כללי של חומר דק בראשית. |
| 7b | bhúvanāny ápinvata | את ההוויות הגדשתם, | `פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים` (בראשית א:כב) | equivalent | מילוי העולם בשפע |
| 7b | bhúvanāny ápinvata | את ההוויות הגדשתם, | `פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים` (בראשית א:כב) | divergence | בבראשית זו ברכה לבעלי החיים, כאן מעשה של האלים בעולם. |
| 7d | ā́ sū́ryam ajabhartana | – את השמש – הבאתם. | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | בבראשית השמש נעשית ביום הרביעי; כאן היא קיימת ו"חבויה" בים, והאלים מוציאים אותה. |
| 7d | ā́ sū́ryam ajabhartana | – את השמש – הבאתם. | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | equivalent | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ וּתְקוּפָתוֹ עַל-קְצוֹתָם; וְאֵין נִסְתָּר מֵחַמָּתוֹ` (תהילים יט:ז) – השמש ש"יוצאת"; מוטיב משותף (השמש העולה מן המים), בלי מגע. |
| 9c | prajā́yai mr̥tyáve tvat | פעם לצאצאים, פעם למָוֶת, | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | equivalent | גם בבראשית בני האדם נועדו להוליד (`בְּעֶצֶב תֵּלְדִי בָנִים`, בראשית ג:טז) ולמות |
| 9c | prajā́yai mr̥tyáve tvat | פעם לצאצאים, פעם למָוֶת, | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | divergence | בבראשית המוות הוא עונש על חטא; כאן הוא מוכנס לאנושות כבר בהולדת אביה, ה"נפל" מן הביצה המתה. מוטיב משותף (הלידה והמוות כגורל האדם מראשיתו), בלי מגע. |

### Parallels index (RV10.190)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | r̥táṃ ca satyáṃ cābhī̀ddhāt | הסדר והאמת – מן הלוהט, | `יְהוָה קָנָנִי רֵאשִׁית דַּרְכּוֹ: קֶדֶם מִפְעָלָיו מֵאָז` (משלי ח:כב) | divergence | גם במשלי מושג מופשט (החכמה) קודם לעולם |
| 1a | r̥táṃ ca satyáṃ cābhī̀ddhāt | הסדר והאמת – מן הלוהט, | `יְהוָה קָנָנִי רֵאשִׁית דַּרְכּוֹ: קֶדֶם מִפְעָלָיו מֵאָז` (משלי ח:כב) | divergence | במשלי החכמה "נקנית" בידי האל; כאן הסדר והאמת "נולדים" מן הלהט, בלי אל. |
| 1a | r̥táṃ ca satyáṃ cābhī̀ddhāt | הסדר והאמת – מן הלוהט, | `יְהוָה קָנָנִי רֵאשִׁית דַּרְכּוֹ: קֶדֶם מִפְעָלָיו מֵאָז` (משלי ח:כב) | equivalent | `רֹאשׁ-דְּבָרְךָ אֱמֶת` (תהילים קיט:קס) – האמת בראש. מוטיב משותף (סדר ואמת כיסוד העולם), בלי מגע. |
| 1c | táto rā́try ajāyata | משם נולד הלילה, | `וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד` (בראשית א:ה) | equivalent | גם בבראשית הלילה (הערב) בא לפני היום |
| 1c | táto rā́try ajāyata | משם נולד הלילה, | `וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד` (בראשית א:ה) | divergence | בבראשית החושך קודם והאור נברא לתוכו; כאן הלילה "נולד" – הוא הדבר הראשון שנולד אחרי הסדר והאמת. השוו הסיודוס, *תולדות האלים* 123–124 (`../הסיודוס/1-תולדות-האלים/`): "ומן הפער נהיו אֶרֶבוֹס ולילה השחורה; / ומלילה, שוב, נולדו אֶתֶר ויום" – גם ביוון הלילה קודם ליום. מוטיב משותף לשלוש התרבויות, בלי מגע בין הוודה לישראל. |
| 1d | tátaḥ samudró arṇaváḥ | משם – הים הגועש. | `וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים` (בראשית א:י) | divergence | בבראשית הים הוא מקווה המים, שנקבצו ביום השלישי; כאן הים נולד מן הלילה, והוא אחד הראשונים. |
| 2b | saṃvatsaró ajāyata | נולדה השנה, | `וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים וּלְיָמִים וְשָׁנִים` (בראשית א:יד) | equivalent | הזמן הנמדד (ימים ושנים) כחלק מן הבריאה |
| 2b | saṃvatsaró ajāyata | נולדה השנה, | `וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים וּלְיָמִים וְשָׁנִים` (בראשית א:יד) | divergence | בבראשית השנים נקבעות על ידי המאורות, ביום הרביעי; כאן השנה נולדת מן הים, ורק אחריה (3ab) נערכים השמש והירח. |
| 2c | ahorātrā́ṇi vidádhad | מחלקת ימים ולילות, | `לְהַבְדִּיל בֵּין הַיּוֹם וּבֵין הַלָּיְלָה` (בראשית א:יד) | equivalent | ההבחנה בין יום ללילה כתפקיד |
| 2c | ahorātrā́ṇi vidádhad | מחלקת ימים ולילות, | `לְהַבְדִּיל בֵּין הַיּוֹם וּבֵין הַלָּיְלָה` (בראשית א:יד) | divergence | בבראשית זה תפקיד המאורות; כאן – של השנה. |
| 2c | ahorātrā́ṇi vidádhad | מחלקת ימים ולילות, | `וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | equivalent |  |
| 2d | víśvasya miṣató vaśī́ | מושלת כל המעפעף. | — | equivalent | `אֶת-הַשֶּׁמֶשׁ לְמֶמְשֶׁלֶת בַּיּוֹם` (תהילים קלו:ח) – ממשלה על הזמן |
| 2d | víśvasya miṣató vaśī́ | מושלת כל המעפעף. | — | divergence | בבראשית ובתהלים המאורות מושלים ביום ובלילה; כאן השנה מושלת בכל החי. |
| 3a | sūryācandramásau dhātā́ | את השמש ואת הירח – הַמַּעֲמִיד | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | גם בבראשית האל עושה את השמש והירח |
| 3a | sūryācandramásau dhātā́ | את השמש ואת הירח – הַמַּעֲמִיד | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | בבראשית הם `מְאֹרֹת`, בלי שם (הפולמוס עם פולחן השמש והירח), ואילו בוודה הם קרויים בשמם, ו"השמש" (*sū́rya*) היא גם אל. `מָאוֹר` שמור בקורפוס ולא נכתב. |
| 3a | sūryācandramásau dhātā́ | את השמש ואת הירח – הַמַּעֲמִיד | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | equivalent | `עָשָׂה יָרֵחַ לְמוֹעֲדִים; שֶׁמֶשׁ יָדַע מְבוֹאוֹ` (תהילים קד:יט); `אַתָּה הֲכִינוֹתָ מָאוֹר וָשָׁמֶשׁ` (תהילים עד:טז). מוטיב משותף, בלי מגע. |
| 3b | yathāpūrvám akalpayat | ערך זה אחר זה (?); | `בְּרֵאשִׁית בָּרָא אֱלֹהִים` (בראשית א:א) | divergence | בבראשית יש פעם ראשונה; בקריאה המאוחרת של המזמור ("כמו קודם") הבריאה היא חזרה של מחזור, בלי ראשית מוחלטת. |
| 3b | yathāpūrvám akalpayat | ערך זה אחר זה (?); | `בְּרֵאשִׁית בָּרָא אֱלֹהִים` (בראשית א:א) | equivalent | `מַה שֶּׁהָיָה הוּא שֶׁיִּהְיֶה וּמַה שֶּׁנַּעֲשָׂה הוּא שֶׁיֵּעָשֶׂה; וְאֵין כָּל חָדָשׁ תַּחַת הַשָּׁמֶשׁ` (קוהלת א:ט) – קהלת קרוב למחשבה המחזורית, אבל על דרך העולם, לא על הבריאה. בקריאה המילונית ("זה אחר זה") המזמור מתאר סדר של מעשים, כמו ימי בראשית. מוטיב משותף, בלי מגע. |
| 3c | dívaṃ ca pr̥thivī́ṃ ca- | ואת השמים ואת הארץ, | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | אותו צמד |
| 3c | dívaṃ ca pr̥thivī́ṃ ca- | ואת השמים ואת הארץ, | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | בבראשית השמים והארץ ראשונים, והשמש והירח ביום הרביעי; כאן הסדר הפוך: השמש והירח, ואחריהם השמים והארץ. |
| 3d | -antárikṣam átho svàḥ | ואת חלל האוויר, וגם את האור. | `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר` (בראשית א:ג) | divergence | בבראשית האור ראשון; כאן הוא האחרון ברשימה. |

### Parallels index (RV10.90)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | sahásraśīrṣā púruṣaḥ | בעל אלף הראשים – האדם, | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ` (בראשית א:כז) | equivalent | `אָדָם` הוא כאן תרגום *púruṣa*, המלה הרגילה ל"אדם, איש", והחיבור לבראשית הוא דרך המלה העברית |
| 1a | sahásraśīrṣā púruṣaḥ | בעל אלף הראשים – האדם, | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ` (בראשית א:כז) | divergence | בבראשית האדם נברא אחרון, בתוך עולם מוכן; כאן האדם קודם לעולם, והעולם נעשה ממנו. מוטיב משותף (אדם קדמון בראשית העולם), בלי מגע בין התרבויות. |
| 1c | sá bhū́miṃ viśváto vr̥tvā́- | הוא, אחרי שכיסה את האדמה מכל עבר, | `הֲלוֹא אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ אֲנִי מָלֵא` (ירמיהו כג:כד) | equivalent | הנוכחות הממלאת את הכל |
| 1c | sá bhū́miṃ viśváto vr̥tvā́- | הוא, אחרי שכיסה את האדמה מכל עבר, | `הֲלוֹא אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ אֲנִי מָלֵא` (ירמיהו כג:כד) | divergence | בירמיהו האל ממלא את העולם, כאן האדם עוטף אותו מבחוץ ועולה עליו. |
| 2a | púruṣa evédáṃ sárvaṃ | האדם – הוא כל זה, | `מְלֹא כָל הָאָרֶץ כְּבוֹדוֹ` (ישעיהו ו:ג) | divergence | גם בישעיהו האל ממלא את העולם, אבל "כבודו" ממלא אותו, והוא עצמו נבדל ממנו; כאן האדם "הוא כל זה". |
| 2b | yád bhūtáṃ yác ca bhávyam | מה שנהיה ומה שעתיד להיות; | — | equivalent | `מַה שֶּׁהָיָה כְּבָר הוּא וַאֲשֶׁר לִהְיוֹת כְּבָר הָיָה` (קוהלת ג:טו) – העבר והעתיד יחד |
| 2b | yád bhūtáṃ yác ca bhávyam | מה שנהיה ומה שעתיד להיות; | — | divergence | אצל קהלת הם אחד מפני שהכל חוזר; כאן מפני שהאדם מכיל את שניהם. מוטיב משותף, בלי מגע. |
| 2c | utā́mr̥tatvásyéśāno | וגם באלמוות הוא שולט, | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | equivalent | האלמוות ככוח ששייך לאל, ושהמזון קשור בו (2d: "במזון") |
| 2c | utā́mr̥tatvásyéśāno | וגם באלמוות הוא שולט, | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | divergence | בבראשית האדם מורחק מן האלמוות; כאן האדם שולט בו. |
| 5a | tásmād virā́ḷ ajāyata | ממנו נולדה וִירָאג', | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב) | divergence | גם בבראשית ב נשי נבנה מן האדם |
| 5a | tásmād virā́ḷ ajāyata | ממנו נולדה וִירָאג', | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | divergence | בבראשית האשה נבנית מן האדם והאדם אינו נולד ממנה; כאן היא נולדת ממנו, והוא ממנה (5b): לולאה, כמו אַדִיטִי ודַּקְשָׁה (10.72.4cd). השוו . מוטיב משותף, בלי מגע. |
| 6a | yát púruṣeṇa havíṣā | כאשר, באדם כמנחה, | `וּלְבָנוֹן אֵין דֵּי בָּעֵר; וְחַיָּתוֹ אֵין דֵּי עוֹלָה` (ישעיהו מ:טז) | divergence | זבח בממדים קוסמיים |
| 6a | yát púruṣeṇa havíṣā | כאשר, באדם כמנחה, | `וּלְבָנוֹן אֵין דֵּי בָּעֵר; וְחַיָּתוֹ אֵין דֵּי עוֹלָה` (ישעיהו מ:טז) | divergence | בישעיהו אין זבח שיספיק לאל; בוודה האלים זובחים זבח קוסמי, והקורבן הוא האדם הקדמון. השוו *אנומה אליש* IV 137–140 ו־V 53–62 (`../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`): מרדוך ביקע את גוויית תיאמת לשניים, "את מחציתה שם, וקֵרָה (בה) את השמים", ו"פתח בעיניה את פְּרָת, את חִדֶּקֶל"; וב־VI העולם האנושי נעשה מדם קִינְגּוּ. ובמיתוס הנורדי (*גְּרִימְנִיסְמָאל* 40–41) העולם נעשה מגופו של הענק יְמִיר: מבשרו הארץ, מדמו הים, מגולגלתו השמים. שלוש תרבויות – בבל, הודו והצפון הגרמני – בונות את העולם מגוף; בבבל ובצפון זה גוף של אויב שנהרג בקרב, בהודו – גוף של זבח. בבראשית העולם נעשה בדיבור, בלי גוף. מוטיב משותף (העולם מגוף קדמון), בלי מגע. |
| 6c | vasantó asyāsīd ā́jyaṃ | האביב היה חמאתו המזוקקת, | `עֹד כָּל יְמֵי הָאָרֶץ: זֶרַע וְקָצִיר וְקֹר וָחֹם וְקַיִץ וָחֹרֶף` (בראשית ח:כב) | equivalent | עונות השנה כחלק מסדר העולם |
| 6c | vasantó asyāsīd ā́jyaṃ | האביב היה חמאתו המזוקקת, | `עֹד כָּל יְמֵי הָאָרֶץ: זֶרַע וְקָצִיר וְקֹר וָחֹם וְקַיִץ וָחֹרֶף` (בראשית ח:כב) | divergence | בבראשית העונות מובטחות אחרי המבול; כאן הן חומרי הזבח הראשון. |
| 6d | grīṣmá idhmáḥ śarád dhavíḥ | הקיץ – העצים, הסתיו – המנחה. | `וַיַּעֲרֹךְ אֶת הָעֵצִים` (בראשית כב:ט) | divergence | העצים לזבח |
| 6d | grīṣmá idhmáḥ śarád dhavíḥ | הקיץ – העצים, הסתיו – המנחה. | `וַיַּעֲרֹךְ אֶת הָעֵצִים` (בראשית כב:ט) | divergence | בעקדה העצים ממשיים, כאן הם הקיץ. |
| 7b | púruṣaṃ jātám agratáḥ | את האדם, שנולד בתחילה. | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם` (בראשית א:כז) | divergence | בבראשית האדם אחרון, כאן "נולד בתחילה". `רֵאשִׁית` שמור ולא נכתב. |
| 8a | tásmād yajñā́t sarvahútaḥ | מן הזבח ההוא, נוסך הכל, | `וְהִקְטִיר הַכֹּהֵן אֶת הַכֹּל הַמִּזְבֵּחָה עֹלָה` (ויקרא א:ט) | absent | `עֹלָה` –  – הקורבן הנשרף "כולו" של התורה; `עֹלָה` שמור בקורפוס, ו־*sarvahút* אינו "עולה" אלא "נוסך הכל". |
| 8c | paśū́n tā́ṃś cakre vāyavyā̀n | את הבהמות ההן עשה, אלה של הרוח, | `וַיַּעַשׂ אֱלֹהִים אֶת חַיַּת הָאָרֶץ לְמִינָהּ וְאֶת הַבְּהֵמָה לְמִינָהּ` (בראשית א:כה); `כָּל חַיַּת הַשָּׂדֶה וְאֵת כָּל עוֹף הַשָּׁמַיִם` (בראשית ב:יט) | equivalent | בעלי החיים לסוגיהם, ובחלוקה דומה: עוף, חיית בר, בהמה. |
| 8c | paśū́n tā́ṃś cakre vāyavyā̀n | את הבהמות ההן עשה, אלה של הרוח, | `וַיַּעַשׂ אֱלֹהִים אֶת חַיַּת הָאָרֶץ לְמִינָהּ וְאֶת הַבְּהֵמָה לְמִינָהּ` (בראשית א:כה); `כָּל חַיַּת הַשָּׂדֶה וְאֵת כָּל עוֹף הַשָּׁמַיִם` (בראשית ב:יט) | divergence | בבראשית מן האדמה; כאן מן החמאה של הזבח. |
| 10d | tásmāj jātā́ ajāváyaḥ | ממנו נולדו התיישים והכבשים. | `וַיַּעַשׂ אֱלֹהִים אֶת חַיַּת הָאָרֶץ לְמִינָהּ וְאֶת הַבְּהֵמָה לְמִינָהּ` (בראשית א:כה) | equivalent | בעלי החיים לסוגיהם |
| 10d | tásmāj jātā́ ajāváyaḥ | ממנו נולדו התיישים והכבשים. | `וַיַּעַשׂ אֱלֹהִים אֶת חַיַּת הָאָרֶץ לְמִינָהּ וְאֶת הַבְּהֵמָה לְמִינָהּ` (בראשית א:כה) | divergence | בבראשית לפני האדם; כאן מתוכו, ובמדרג של בהמות הזבח: סוס, פרה, עזים וכבשים (סדר בהמות הזבח של הברהמנות, כשהאדם בראשן). |
| 12a | brāhmaṇò 'sya múkham āsīd | הַבְּרַהְמִין היה פיו, | `הֲלוֹא אָב אֶחָד לְכֻלָּנוּ הֲלוֹא אֵל אֶחָד בְּרָאָנוּ` (מלאכי ב:י); `עָשִׁיר וָרָשׁ נִפְגָּשׁוּ; עֹשֵׂה כֻלָּם יְהוָה` (משלי כב:ב); `הֲלֹא-בַבֶּטֶן עֹשֵׂנִי עָשָׂהוּ; וַיְכֻנֶנּוּ בָּרֶחֶם אֶחָד` (איוב לא:טו) | absent | גם במקרא כל בני האדם באים ממקור אחד, אבל המסקנה הפוכה: מקור אחד – שוויון (וכך המשנה, סנהדרין ד:ה: האדם נברא יחידי "שלא יאמר אדם לחבירו: אבא גדול מאביך"). בוודה כל המעמדות באים מגוף אחד, ודווקא זה מצדיק את המדרג: הפה מעל הרגליים. בבראשית אין מעמדות בבריאת האדם. מוטיב משותף (כל בני האדם מאדם אחד), בלי מגע. |
| 13a | candrámā mánaso jātáś | הירח נולד ממחשבתו, | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | בבראשית השמש והירח הם "מאורות" שהאל עושה ותולה ברקיע; כאן הם נולדים מאברי האדם – הירח מן המחשבה, השמש מן העין – ולכן קשורים אליהם: במוות, עין האדם הולכת אל השמש ומחשבתו אל הירח (10.16.3). |
| 13a | candrámā mánaso jātáś | הירח נולד ממחשבתו, | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים` (בראשית א:טז) | divergence | *אנומה אליש* V 55: "פתח בעיניה את פְּרָת, את חִדֶּקֶל" – בבבל מעיני הגוויה יוצאים הנהרות, בהודו – השמש. |
| 13d | prāṇā́d vāyúr ajāyata | מנשימתו נולדה הרוח. | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | בבראשית הנשימה עוברת מן האל אל האדם; כאן הרוח של העולם יוצאת מנשימת האדם. אותו קשר בין הנשימה לרוח, בכיוון ההפוך. |
| 13d | prāṇā́d vāyúr ajāyata | מנשימתו נולדה הרוח. | `וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם` (בראשית א:ב) | equivalent | רוח ונשימה כמלים קרובות בשתי השפות. מוטיב משותף, בלי מגע. |
| 14b | śīrṣṇó dyaúḥ sám avartata | מראשו התהוו השמים, | `הַשָּׁמַיִם כִּסְאִי וְהָאָרֶץ הֲדֹם רַגְלָי` (ישעיהו סו:א) | equivalent | השמים למעלה כראש, הארץ למטה כרגליים |
| 14b | śīrṣṇó dyaúḥ sám avartata | מראשו התהוו השמים, | `הַשָּׁמַיִם כִּסְאִי וְהָאָרֶץ הֲדֹם רַגְלָי` (ישעיהו סו:א) | divergence | בישעיהו הם כיסא והדום לאל, לא איבריו. *אנומה אליש* V 53, 61: מראש תיאמת ומירכיה נעשו חלקי העולם. |
| 15d | ábadhnan púruṣam paśúm | כפתו את האדם, (את) הבהמה. | `וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ וַיָּשֶׂם אֹתוֹ עַל הַמִּזְבֵּחַ מִמַּעַל לָעֵצִים` (בראשית כב:ט) | divergence | אדם כפות על העצים כבהמת זבח |
| 15d | ábadhnan púruṣam paśúm | כפתו את האדם, (את) הבהמה. | `וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ וַיָּשֶׂם אֹתוֹ עַל הַמִּזְבֵּחַ מִמַּעַל לָעֵצִים` (בראשית כב:ט) | divergence | בעקדה הזבח נעצר והאיל בא במקום האדם; כאן האדם, בהמת הזבח הראשונה, נזבח ממש – ומזבחו נעשה העולם. בשתי המסורות היחס בין אדם לבהמת הזבח הוא שאלה מרכזית (השוו שתפתה ברהמנה 1.2.3.6–9, בפרויקט `4-העקדה/`: עצם הזבח עובר מן האדם אל הבהמות). מוטיב משותף, בלי מגע. |
| 16a | yajñéna yajñám ayajanta devā́s | בזבח זבחו האֵלִים את הזבח; | `וַיִּזְבְּחוּ זְבָחִים שְׁלָמִים לַיהוָה פָּרִים` (שמות כד:ה) | equivalent | אותה לשון כפולה בעברית (זבחו זבחים) |
| 16a | yajñéna yajñám ayajanta devā́s | בזבח זבחו האֵלִים את הזבח; | `וַיִּזְבְּחוּ זְבָחִים שְׁלָמִים לַיהוָה פָּרִים` (שמות כד:ה) | divergence | בשמות בני אדם זובחים בהמות לאל; כאן האלים זובחים את הזבח עצמו – בזבח. הזבח הוא גם הכלי, גם הקורבן וגם המעשה. |

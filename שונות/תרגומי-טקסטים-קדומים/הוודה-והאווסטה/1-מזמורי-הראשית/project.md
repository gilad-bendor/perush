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

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)

# 4-העקדה – AB 7.13–18, ŚB 1.2.3.6–9, KU 1 (vallīs 1–3)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
**Since Round 7 run 3 (2026-11-09) the Kaṭha Upaniṣad lives whole in `../8-קטהה-אופנישד/`** (its annotated and translation files moved there); this project's `translation.rtl.md` embeds its first adhyāya (`PROJECT_EMBEDS` in `../vedic_tools.py`), so the two stay identical. The KU notes below are this project's history; the current decisions are in `../8-קטהה-אופנישד/project.md`.

AB 7.13–18, ŚB 1.2.3.6–9, KU 1 (vallīs 1–3). Base texts and line units: `../renderings.md` §1. Line data: `python3 -I -B ../vedic_tools.py data <KEY>`.

## Coordinator's notes
- Fixed before drafting (2026-10-30): the renderings §1–§10; the gates in `vedic_tools.py`.

<!-- The translators insert their sections here, above "## Parallels index". -->

## SB1.2.3 6a–9b, AB7 13.1a–18.17a, KU1 1.1a–3.17c (translator 3, Round 5 run 1)

### Scope
The "binding" texts, drafted in the order SB1.2.3 → AB7 → KU1: ŚB 1.2.3.6–9 complete (8 TITUS sentences, Weber's
accented text without word division; the two `...` of 6b expanded in `( )`); AB 7.13–18 complete (250 TITUS lines,
prose and gāthās; TITUS has no 16.3 and no 18.15); KU adhyāya 1 complete: vallī 1 (1.1a–1.29b, 59 half-verses) in part 1, vallīs 2–3 (2.1a–3.17c, 84
half-verses; the base has no 2.15) in part 2, at the coordinator's request after the merge (renderings §11.4). Files: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated
`translation-<KEY>.rtl.md` and `translation.rtl.md`.

### Sources consulted
- Bases: `vedic_tools.py data` for the three KEYs; Monier-Williams (`mw`) for every word in doubt (*kimpuruṣa*, *gaura*,
  *gavaya*, *śarabha*, *uṣṭra*, *pāṅkta*, *saṃtata*, *dāruṇa*, *sampad*, *saṃyu*).
- Rank 3, after drafting each text: Eggeling, SBE 12 (ŚB 1.2.3, with his notes quoting Max Müller, Haug and the
  Petersburg dictionary); Keith, HOS 25 (AB = his xxxiii.1–6, with his notes on Śāṅkhāyana Śrauta Sūtra's version,
  Sāyaṇa, Böhtlingk, Weber, Max Müller); Hume 1921 (KU, with his notes on Böhtlingk and Whitney). **Every English
  quotation was checked against the OCR file** (my first drafts quoted Keith and Hume from memory; all were replaced
  by their actual wording – see Lessons). Modern translations not in the folder were not quoted.
- Comparison: the Hittite elimination rituals (`../../טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים/`, Puliša 21–28: "an
  adorned man as a substitute", then a bull), the flood corpus of this folder (ŚB 1.8.1, MBh 3.185) for shared words.
  Every Bible verse printed with `check_bible_quotes.py --show` before quoting.

### Decisions
- **§5.4 confirmed in real lines:** *yū́pa* (only in RV 5.2.7's context, not in our lines); *ni-√yuj* / *niyoktár*
  `כָּפַת` / `כופת` (AB 16.1c–f, 16.2a, 16.6b) and RV 5.2.7's *ni-√dā* "bound" `כפות` (17.1k); *así* `חֶרֶב` (16.2e);
  *vi-√śas*, *viśasitár* `נִתַּח`, `מנתח` (16.2a–f, 17.5c desiderative `בחפצו לנתח`); *ā́ √labh* `תָּפַס` (ŚB 6b, 7b,
  9a; AB 15.8f); *médha* `לְשַׁד הַזֶּבַח`; *áśva* `סוּס`, *gó* `שׁוֹר` / `פָּרָה` (cows as price), *ávi* `כֶּבֶשׂ`,
  *ajá* `תַּיִשׁ`; *vrīhí* / *yáva* `אֹרֶז` / `שְׂעוֹרָה`; *paśú* `בְּהֵמָה`; √*yaj* `זָבַח`; *vára* (KU) `מַשְׁאָלָה`.
  *śamitár* does not occur in these lines (it is mentioned in a note to AB 16.2a).
- **√yaj with the instrumental kept:** *tena tvā yajai* `ובו אזבח לך`, *yajasva mā anena* `זבח לי בו!`, *tvayā imaṃ
  yajai* `בך אזבח לזה` – the Vedic construction (the god in the accusative, the victim in the instrumental) stays
  visible; rejected: `ואותו אזבח לך` (smoother, hides that the son is the *means*).
- **niṣ-√krī `פָּדָה`** (AB 15.7e, 15.8b "with this one I will redeem myself") – the natural Hebrew for "buy oneself
  out", tagged [equivalent] with Ex 13:13, 34:20 (a hidden echo the source justifies).
- **śā́sa "knife" `סַכִּין`** (17.3h, 17.5c) – a second blade word, distinct from *así* `חֶרֶב`; the renderings' "not
  `סַכִּין`" is about *así*: a recorded split by source word.
- **Kinship and rank words:** *jyéṣṭha* `הַגָּדוֹל` (eldest, 15.7f; Devarāta 17.6f), *kániṣṭha* `הַקָּטָן`,
  *madhyamá* `הָאֶמְצָעִי` (also KU 1.5a), *jyā́yas* / *kánīyas* `גדול מ־` / `קטן מ־` (also the belly "smaller",
  16.13b); *jyaiṣṭhya* `בְּכוֹרָה` (17.7g; the natural word for the status, tagged with Deut 21:17); *aputra* `חסר בן`;
  *jāyā́* `אִשָּׁה` (the pun *jāyā́* / *jāyate* in 13.10a given in brackets); *sákhi* `חָבֵר` (because *mitrá* is
  `רֵעַ`, §3.2); *tāta* / *tata* `יַקִּירִי` (father↔son, both directions; KU 1.4a too); *dā́ya* `יְרֻשָּׁה`, *ríktha*
  `עִזָּבוֹן`; *putratā́* `(להיות) לבן` (the biblical adoption idiom, Ex 2:10).
- **The sacrifice and its people:** the four priests in one system – *hótar* `כוהן־הקריאה`, *adhvaryú*
  `כוהן־המעשה`, *brahmán* `כוהן־הנוסח` (§5.1), *udgātár* `כוהן־הזמרה`; *ŕ̥tvij* `כוהנים`; *brāhmaṇá* `בְּרַהְמִין`;
  *kṣatríya* `קְשַׁטְרִיָּה`; *śūdrá* `שׁוּדְרָה` (§11.2); *ŕ̥c* `פסוק`, *tr̥cá* `שלישייה`, *sūktá* `מזמור`, *gā́thā*
  `גאתה`; *ākhyā́na* `סיפור`; *dákṣiṇā* `שכר` (KU); *abhí-√sic* `יצק על` (the consecration "pouring"; *abhiṣecanīya*
  `יום היציקה`), not `משח` (oil anointing, 1 Sam 10:1 in the apparatus); *āhavanīya* `אש הנסכים`; *avabhr̥thá*
  `טבילת הסיום`; *añjaḥsava* `הסחיטה הישירה`; *rājasūya* `הרָאגַ'סוּיָה`; *om* `אוֹם` (not `אמן`: Deut 27:15 in the
  apparatus), *tathā́* `כן` (the human response).
- **Verbs:** *úpa-√dhāv* `רץ אל` (the king to Varuṇa 14.1b, the boy to the gods 16.2f – the same verb kept); *úpa-√sr̥*
  `ניגש אל`; *ud-√sr̥j* `שילח` ("we will release you", the root of √*sr̥j*, §5.1); *vi-√muc* `הותר`, *pra-√muc*
  `שחרר`; √*stu* `הילל`; √*car* `נדד` (the whole of 15: *carā evá* `נדוד!`; ŚB 1.8.1's `הלך` is a recorded split by
  sense); √*grah* `אחז` (Varuṇa "seized" the king, 15.1a); √*jan* `נולד` for the son, the teeth *and* the dropsy
  ("a belly was born to him", 15.1a – the pun kept); √*labh* `השיג` (13.1b ↔ 18.17a, the ring of the story; "found"
  `מצאו` in 17.3h, KU 1.22b: a split by sense); ā́-√i / úpa-√i `בא (אל)`; *pári-√i* `פגש`; √*tap* `לוהט` (17.4b, the
  root of *tápas* `להט`).
- **Other nouns:** *udára* `כרס` (dropsy, a note); *śrī́* `הצלחה`; *bhága* `מזל`; *śráma* / *śrānta* `יגיעה` / `יגע`;
  *pāpá* `רע`, *pāpmán* `חטא`, *énas* `עוון`; *téjas* `זוהר` (as MBh 3.185); *grā́ma* `יישוב` (not `כפר`: the root is
  reserved); *áraṇya* `יער`; *saṃnāhá* `שריון`; *bhū́yas* `עדיף` (13.5b, 15.8d); *aṅká* `חיק` (17.2a, [equivalent]
  Ruth 4:16); *udára* `כרס`; the dice throws Kali / Dvāpara / Tretā / Kr̥ta transcribed with Hebrew glosses in `( )`.
- **ŚB 1.2.3:** *ápa-√kram* `הסתלק` (the essence "departed"; *ápakrāntamedha* `שלשד הזבח הסתלק מהן`); *prá-√viś*
  `נכנס אל`; *ánu-√iṣ* `חיפש`, *ánu-√vid* `מצא`; *vīryavant* `רב־עצמה`; *sampád* `הַהַתְאָמָה`; *pā́ṅkta* `מחומש`
  ("the animal is fivefold" `הבהמה מחומשת`); *kimpúruṣa* `מֵעֵין־אָדָם` (rejected `מָה אָדָם`: Ps 144:3 echo);
  *gaurá* `גָּאוּר`, *gavayá* `גַּוַיָה` (transcribed animal names), *úṣṭra* `גמל` (MW's Vedic "buffalo" in the note),
  *śarabhá* `שַׁרַבְּהָה`; *ā́-√nī* (water) `הביא`, *abhi-√ghāraya* `זילף`; *tárhi* `באותה עת` (§11.2).
- **KU 1:** *mr̥tyú* `מָוֶת` always (also the common noun in *janmamr̥tyū* `את הלידה ואת הַמָּוֶת`, 1.17a);
  *maraṇa* `מיתה`; *antaka* `מְכַלֶּה`; *śraddhā́* `אמונה` (tagged with Gen 15:6); *svargá loká* `עולם האור`;
  *śā́nti* `שקט` (1.7b, 1.17b – the root of *śamitár*); *kā́ma* `חשק` (§5.1); *vitta* `הון`; *vicikitsā́* `ספק`;
  *mr̥tyupāśa* `חבלי מָוֶת` (the exact Hebrew of Ps 18:5, 116:3: [equivalent], noted as a hidden echo the source
  justifies). Agni here is the fire `אש` (`[היתר שם]` on five lines).
- **Names (new, transcribed by §2.3; each vocalized at its first occurrence):** Vaidhasa `בֶּן וֵידְהַס`, Aikṣvāka
  `בן אִיקְשְׁוָאקוּ`, Parvata `פַּרְוַתָה`, Śunaḥpuccha `שׁוּנַהְפּוּצְ'ה`, Śunolāṅgūla `שׁוּנוֹלָאנְגּוּלָה`,
  Sauyavasi `סָאוּיַוַסִי`, Jamadagni `גַ'מַדַגְנִי`, Ayāsya `אַיָאסְיָה`, Devarāta `דֵּוַרָאטָה` ("given by the gods",
  a note), Vaiśvāmitra `בן וִישְׁוָמִיטְרָה`, Kāpileya / Bābhrava `קָאפִּילֵיָה` / `בָּאבְּרַוָה`, Āṅgirasa `בן
  אַנְגִּירַס`, Ājīgarti `בן אַגִ'יגַרְטָה`, Madhuchandas `מַדְהוּצְ'נְדַס`, Ṛṣabha `רִשַׁבְּהָה`, Reṇu `רֵנוּ`, Aṣṭaka
  `אַשְׁטַקָה`, Gāthin(a) `בני גָּאתִין`, Kuśika `בני קוּשִׁיקָה`, Jahnu `בני גַ'הְנוּ`, Andhra / Puṇḍra / Śabara /
  Pulinda / Mūtiba `אַנְדְּהְרָה` / `פּוּנְדְּרָה` / `שַׁבַרָה` / `פּוּלִינְדָּה` / `מוּטִיבָּה`, *dasyu* `דַּסְיוּ`, the
  Aśvins `שני האַשְׁוִינִים`, the Viśve Devāḥ `כָּל־הָאֵלִים`, Uṣas `שַׁחַר` (a name without the article, §3.2),
  Jātavedas `יוֹדֵעַ־הַנּוֹלָדִים` (translated epithet), Bharata `בני בְּהָרַטָה` (as MBh: *bharatarṣabha* `שור בני
  בְּהָרַטָה`); KU: Gautama `גָּאוּטַמָה`, Auddālaki Āruṇi `אָאוּדָּאלַקִי אָרוּנִי`, Vaiśvānara `וַישְׁוָאנַרָה`, Vaivasvata
  (Yama) `בן־וִיוַסְוַנְט`.
- **Particles and speech:** *ha* / *vai* untranslated; *iti* closes speech; the lines that hold only *iti* are rendered
  `(עד כאן דבריו.)` (and 15.7c `(אֵלֶּה שמותיהם.)`); F5 *sa hovāca* `אמר`; RV verses cited by their first words are given
  in quotation marks as titles, followed by `…`. `אֶל`, `אַל`, `אֵלֶּה`, `אֵלַי` vocalized throughout (the deva trap).

### Decisions (part 2: KU vallīs 2–3)
- **The pair śréyas / préyas = `הַטּוֹב` / `הַנָּעִים`** (2.1–2.2). The `טוֹב` gate's licence list (§7.2: *bhadrá,
  vásu, vāmá, sādhú, su-* …; the regex has *sres*, *sri*, *jyes*) does **not** cover *śréyas* (folded *sreyas*): the
  three lines carry `[היתר שער: הטוב – śréyas]`. Proposal: add *srey* to the licence. Rejected: `המועיל` (too
  utilitarian), `המיטב` (gated too), `הטוב יותר` (heavy for a refrain). *préyas* `נעים`, not `אהוב`, though it is the
  comparative of *priyá* (`אהוב`, kept in 2.3a): a recorded split, for the opposition's sake. *sādhú* in the same
  line (2.1b) `ייטב לו`.
- **The self and its ladder:** *ātmán* `נפש` throughout (also "the great self" `הנפש הגדולה`); *buddhí* `שכל`;
  *mánas* `מחשבה`; *indriyá* `חוש` (`[היתר שם]` on the two lines where the Indra regex fires on *indriya*);
  *vijñāna* `הבנה`; *ártha* `יעד` (2.1b "falls from the goal", 3.10a "the objects"); *avyakta* `הבלתי־גלוי`;
  *púruṣa* `אָדָם` (3.11, the Person of RV 10.90); *pára* by sense (`מעל` in the ladder, `אחר`, `החוף`); *kā́ṣṭhā*
  `קצה`; *bráhman* (n.) stays `נֹסַח` (2.16a, 2.25a, 3.2a; *brahmaloka* `עולם הנוסח`, *brahmavid* `יודעי הנוסח`) –
  a deliberate choice so the reader sees the formulation become the absolute (noted at 2.16a); *akṣára*
  `הבלתי־כלה` ("syllable" = *om* in the note).
- **The chariot (3.3–3.9):** *rátha* `מרכבה`, *rathín* `בעל המרכבה`, *sā́rathi* `עגלון`, *pragraha* `מושכות`,
  *háya* `סוס` (as *áśva*), *gocara* `מרעה`, *bhoktár* `הנהנה`; √*yuj* / *yukta* `רתם` / `רתום` (§11.6), and
  *yoga* in 2.12b `רתימה` (the literal sense, noted); *saṃsāra* `הסבב`; *padá* `מדרך` (SB 1.8.1's word),
  "Viṣṇu's highest step" `המדרך העליון של וִישְׁנוּ`.
- **Other words:** *vidyā́* / *avidyā́* `ידיעה` / `אי־ידיעה`; *dhī́ra* and *vipaścít* `חכם`; *manda* `כסיל`;
  *paṇḍita* `בקיא`; *medhā́* `דעת` (as *alpamedhas* `קטן־הדעת`; not *médha*); *prajñāna* `בינה`; *manīṣín*
  `נבון` (*manīṣā́* `תבונה`, §11.2); *prā́jña* `נבון`; *nitya* / *a-nitya* `קבוע` / `לא קבוע`; *dhruvá*
  `יציב`; *śāśvatá* `תמידי`; *sanātana* `הנצחי` (as MBh); *purāṇá* `קדמון`; *dhárma* `משפט` (2.14a; 1.21a's "matter"
  `הדבר` is a split by sense); *krátu* `רצון`; *śúci* `טהור` (RV 10.17's `צח` split by sense); *kṣura* `תער`;
  *gahvara* `מעמקים` (not `תהום`); *kṣatrá* `שלטון`; *odaná* / *upasecana* `דייסה` / `תבלין`; *vā́c* `דיבור`
  (SB 1.8.1's `קול` by sense); √*yam* `ריסן`; *śrāddha* `מנחת האבות`; √*vad* `דיבר` kept (3.1b, 3.14b `כך מדברים`).
  Name: Viṣṇu `וִישְׁנוּ`.

### Open decisions for the user
- *śréyas* = `הַטּוֹב` with gate permits, pending a licence change (above).
- KU 2.20b *dhātuprasādāt*: Hume's "through the grace of the Creator" (followed, `בחסד המעמיד`) or Śaṅkara's
  "through the calm of the senses". KU 2.8b *ananyaprokte* (Hume followed). KU 3.14a *várān*: "the boons" (followed)
  or Śaṅkara's "the excellent (teachers)".
- 13.1a *rājāputra*: read *rājā aputraḥ* "a king without a son" (TITUS's long ā; the next sentence explains it); Keith
  reads *rājaputra* "the son of a king".
- 15.1d *nānā śrāntāya*: Keith's "manifold is the prosperity of the weary" (followed) or Sāyaṇa's alternative *nā
  'nāśrāntāya* "there is no prosperity for one who is not weary" (the common modern reading).
- 13.10b *ābhūtir eṣā bhūtiḥ* is obscure (Keith: "uncertain and obscure"); our "she is the coming-to-be, she the being".
- *jyaiṣṭhya* `בְּכוֹרָה` (a biblical status word for a Vedic one) vs a neutral `מעמד הגדול`; and *niṣ-√krī* `פָּדָה`.
- KU 1.11a *matprasr̥ṣṭaḥ* (who is "dismissed by me": the father, or – emended – the boy); KU 1.27a statement or question.
- *uṣṭra* "camel" (Eggeling) vs MW's Vedic "buffalo".

### Progress log
- 2026-10-30: drafted SB1.2.3 (one pass), then Eggeling; AB7 khaṇḍa by khaṇḍa (13, 14, 15, 16, 17, 18), each saved and
  `fill` + `verify AB7` run; Keith checked after 13–16 and after 17–18; KU1 vallī 1, then Hume.
- Gates met while drafting: `שערות` (*lóman*) tripped the `עֶרְוָה` gate (the ש read as a prefix: `[היתר שער]`);
  `הכפר` "village" tripped the כפר root (→ `היישוב`); `ראשית העולם` (KU 1.15a → `תחילת העולם`); `(מזבח)` added for
  sense (KU 1.18a → `(אש)`); `בני האדם` for *jána* (→ `האנשים`); the *agni* name check on the fire (`[היתר שם]`).
- Review (a) fidelity: the Keith and Hume quotations replaced by their real wording; 13.1a, 13.7b, 13.10b, 13.11a
  apparatus revised to Keith's actual readings; 16.2g's added "first" removed (`ראשון לאֵלִים`, as ambiguous as the
  source); 17.1d's object `(את הסוֹמָה)` added; KU 1.11a `משולח ממני` (the text, not an emendation).
- Review (b) consistency (`lexmap` over the three files and the corpus): *tárhi* `באותה עת` (ŚB 8b, §11.2);
  *bharatarṣabha* aligned with MBh 3.185; √*vad* `דיבר` (AB 17.6b); *sákhi* `חָבֵר` vs *mitrá* `רֵעַ`; *bhū́yas*
  `עדיף` in both lines; *aputra* one Hebrew; ŚB's *ā-√nī* / *abhi-ghāraya* separated (`הביא` / `זילף`).
- Review (c) Hebrew (the generated files read through): quotation marks of the gāthās and of KU's speeches completed;
  15.1d `רבת־פנים`; KU 1.25b `היפות` (not the ambiguous `הנאות`).
- Part 2 (KU 2.1a–3.17c): read renderings §11.4–§11.6 and the `lexmap` first; drafted vallī 2 and vallī 3, each
  saved, filled and verified; Hume after each. Gates met: *śréyas* `הטוב` (three permits); `בשבתו` "when he sits"
  hit the שבת root (→ `כשהוא יושב`); the Indra regex on *indriya* (two `[היתר שם]`). Pass (a): Hume's readings
  checked against the OCR before quoting. Pass (b): √*vad* aligned (`כך מדברים`), *sanātana* aligned with MBh,
  *śā́nti* / *śānta* `שקט`. Pass (c): the speeches' quotation marks (2.13b closes Death's first speech, 3.1b's inner
  quote single). `verify KU1 --strict`: no problems.
- `check_bible_quotes.py` on all annotated, intro and generated files: 0 problems (one ketiv fixed, Gen 27:29). `verify
  SB1.2.3 AB7 --strict`: no problems; `verify KU1`: no problems (the placeholder noted). `build` run for the three KEYs.

### The text on its own terms
- **The sacrifice is a chain of substitutions** (ŚB 6b–7b): the *médha* migrates man → horse → ox → sheep → goat →
  earth → rice and barley; the rice cake, built in five steps, *is* an animal (8a–b) – not a symbol: "this is the
  correspondence of which they say: the animal is fivefold".
- **What is left of the victims** (ŚB 9b): the first victims did not die; emptied of *médha*, they became wild doubles
  (a "what-man", gaur, gayal, camel, śarabha) – and therefore inedible: edible meat is meat fit for the gods.
- **Knowing is doing**: "for him who knows thus" (ŚB 7b; KU 1.18a) – the meaning makes the rite work.
- **The son as the father reborn** (AB 13.4–13.13): a debt paid, a ship across the darkness of death, "the self born
  from the self", the wife as mother of her husband (the pun *jāyā́* / *jāyate*), the daughter "a misery", the beasts
  that commit incest because they "know" there is no world for the sonless.
- **A vow is a contract**: the king offers Varuṇa the one thing he lacks; then he uses the rules of the animal
  sacrifice (ten days, teeth, armour) as a lawyer would (14.3c–14.7e); Varuṇa, god of the order, accepts every rule.
- **The ascetic and the householder** (13.7a "what is the dirt, the antelope skin?") against the wanderer's songs of
  15 (*carā evá*): two rival ideals already inside the Brāhmaṇa.
- **No one will bind, no one will cut** (16.1c, 16.2a): four great seers stand by the post, but the only hands the
  story finds are the father's, for a hundred cows each time.
- **Words loosen bonds** (16.13): every Ṛgvedic verse unties one fetter of Varuṇa and shrinks the king's belly – the
  two bodies, victim and king, are tied together.
- **The victim becomes the priest** (17.1): the freed boy completes the very sacrifice he was to die in.
- **Lineage is chosen and contested**: the father's claim ("do not leave your grandfathers' thread") against the son's
  verdict ("they saw you with the knife in your hand … what you did cannot be mended"); adoption on the lap; the elder
  half of Viśvāmitra's sons cursed to the borders – the origin of non-Aryan peoples.
- **The story is itself a rite** (18.10–18.17): told to the newly consecrated king, it frees him from guilt and gives
  sons to those who want them; the teller earns a thousand – the story of a son sold for three hundred.
- **KU 1**: a boy confronts a father who gives worthless cows; he goes to Death, is a guest who must be "quieted"
  with water, and refuses sons, cattle, gold, long life and lovely women for one question: does a man exist after death?
- **KU 2–3, Death's answer**: the good and the pleasant both "bind" (2.1); the self is smaller than the small and
  greater than the great, unborn and undying – "if the slayer thinks he slays … neither understands" (2.18–19), the
  last word of a dossier that began with a father sharpening a knife; it is not won by teaching or learning, it
  *chooses* (√*vr̥*, the verb of the boy's three boons) whom it will (2.23); the self rides the body as a chariot,
  the senses are horses, the mind the reins (3.3–9); the way is "the sharpened edge of a razor" (3.14, the same verb
  *ni-√śā* as Ajīgarta's whetting); the knower is "freed from the mouth of Death" (3.15b = the boy's first boon,
  1.11b); and Death himself is only the sauce on the rice of the priests and kings (2.25).

### Key parallels
- [divergence] Gen 22:9 `וַיַּעֲקֹד` ↔ AB 16.1c–f: the father binds his son – for a hundred cows, when no priest will.
- [divergence] Gen 22:10 `וַיִּקַּח אֶת הַמַּאֲכֶלֶת לִשְׁחֹט אֶת בְּנוֹ` ↔ AB 16.2e, 17.3h: the father with the blade; in
  Genesis a supreme act of devotion, here "what was not found even among Śūdras".
- [divergence] Gen 22:11–13 (the voice from heaven, the ram) ↔ AB 16.13: no voice stops the knife; the boy frees
  himself by prayer, fetter by fetter.
- [divergence] Gen 22:13 `תַּחַת בְּנוֹ` ↔ ŚB 1.2.3.6–9: substitution as a theory of the sacrificial essence; and AB
  15.8d: the substitute is accepted because he is *higher* ("a Brahmin is better than a Kṣatriya").
- [equivalent] Ex 13:13, 34:20 (the redemption of the firstborn) ↔ AB 15.7e *niṣ-√krī* "redeem oneself"; and Ex
  22:28–29 / Lev 22:27 (the eighth day) ↔ AB 14.3c (an animal is fit after ten days).
- [divergence] Judg 11:30–31, 35 ↔ AB 14.1c (a vow whose victim is a son), KU 1.4c (a word that cannot be taken back).
- [divergence] Gen 22:2 `אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ` ↔ AB 15.7g: father keeps the eldest, mother the youngest, and the
  unloved middle son is sold.
- [equivalent] Deut 14:7 / Lev 11:4 (the camel not eaten) ↔ ŚB 9b; [divergence] Deut 14:5 permits the wild relatives
  that the Brāhmaṇa forbids.
- [equivalent] Gen 9:25, 16:12, 21:13 ↔ AB 18.2b–d: rejected sons as ancestors of peoples on the margins.
- [equivalent] Qoh 3:21 `מִי יוֹדֵעַ רוּחַ בְּנֵי הָאָדָם` ↔ KU 1.20a; 1 Kgs 3:11–13 ↔ KU 1.23–1.27 (long life and
  riches refused – here offered by Death to buy silence).
- [equivalent] Deut 30:15, 19 (life and good, death and evil … choose life) ↔ KU 2.1–2.2: two ways and a choice –
  but between the good and the pleasant, not good and evil.
- [equivalent] Job 28:12, 23 (where is wisdom found … God understands its way) ↔ KU 2.9a, 2.23: knowledge not won by
  search; in Job God knows its place, in the Kaṭha the self chooses whom it will.
- [divergence] Qoh 12:7 (the spirit returns to God who gave it) ↔ KU 2.18: the self was never born and returns nowhere.
- [divergence] Ps 32:9 (horse and mule, bit and bridle) ↔ KU 3.3–3.6, the chariot; Prov 4:18–19 ↔ 3.14b (the path).

### Proposals for the shared renderings
- §5.4 additions: *ni-√dā* "bind" `כפת` (RV 5.2.7's *nidita*); *śā́sa* "knife" `סַכִּין` (distinct from *así*
  `חֶרֶב`); *viśasitár* `מנתח`; *niyoktár* `כופת`; *niṣ-√krī* `פָּדָה` [equivalent Ex 13:13]; *upākr̥ta* `הובא (אל
  העמוד)`; *āprī* `פסוקי האָפְּרִי`; *paryagnikr̥ta* `הוקף באש`; *ud-√sr̥j* `שילח`; *pā́śa* of Varuṇa / Death `חבל`
  (*mr̥tyupāśa* `חבלי מָוֶת`).
- The four priests: *hótar* `כוהן־הקריאה`, *adhvaryú* `כוהן־המעשה`, *udgātár* `כוהן־הזמרה` (with §5.1's
  *brahmán* `כוהן־הנוסח`); *ŕ̥tvij* `כוהן`; *dákṣiṇā* `שכר`; *abhí-√sic* `יצק על` (not `משח`).
- *kṣatríya* `קְשַׁטְרִיָּה`; *dásyu* `דַּסְיוּ`; *ŕ̥c* `פסוק`, *tr̥cá* `שלישייה`, *sūktá* `מזמור`, *gā́thā* `גאתה`;
  *om* `אוֹם`, *tathā́* (response) `כן`.
- *sákhi* `חָבֵר` (beside *mitrá* `רֵעַ`); *tāta* `יַקִּירִי`; *jyéṣṭha* / *kániṣṭha* / *madhyamá* `הגדול` / `הקטן` /
  `האמצעי`; *jyaiṣṭhya* `בְּכוֹרָה`; *dā́ya* `ירושה`, *ríktha* `עיזבון`; *putratā́* `(להיות) לבן`.
- *médha* stays `לְשַׁד הַזֶּבַח`; *médhya* `ראוי לזבח` (AB 14.3c…) rather than the root קדש that §7.2 licenses for it –
  a proposal: keep קדש for *yajñíya* only, so that *médhya* stays visibly "full of *médha*".
- *mr̥tyú* as a common noun (*janmamr̥tyū*) `מָוֶת` too, vocalized, as the name.
- Part 2: add *srey* to the `טוֹב` licence (the pair *śréyas* / *préyas* `הַטּוֹב` / `הַנָּעִים`, fixed); *buddhí*
  `שכל`, *indriyá* `חוש`, *vijñāna* `הבנה`, *vidyā́* `ידיעה`, *saṃsāra* `סבב`, *akṣára* `הבלתי־כלה`, *nitya* `קבוע`,
  *rátha* / *sā́rathi* `מרכבה` / `עגלון`, *padá* `מדרך`; *bráhman* (n.) `נֹסַח` also in its Upaniṣadic sense;
  the Indra regex should skip *indriya* (as the Himavat regex skips *himávant*).
- Names: those listed under Decisions (Devarāta `דֵּוַרָאטָה`, Jamadagni `גַ'מַדַגְנִי`, Ayāsya `אַיָאסְיָה`, Gautama
  `גָּאוּטַמָה`, Madhuchandas `מַדְהוּצְ'נְדַס` …) into §3.1; Uṣas `שַׁחַר` and the Viśve Devāḥ `כָּל־הָאֵלִים` as names.

### Lessons for the guidelines
- **Never quote a rank-3 translation from memory, even "in passing"**: my first AB and KU drafts carried 40+ English
  "quotations" of Keith and Hume written from memory; most were close, several were wrong (Keith reads *rājaputra*
  "son of a king" in 13.1a, takes 13.10b's two *ābhūti* as father and mother, reads 13.7b *vadāvada* without the
  negation). Grep the OCR first, then quote – the same rule as for Bible verses.
- **The name check splits words on punctuation but not on `…`**: `אִינְדְּרָה…` failed the Indra check; write ` …`
  with a space (a tool limitation, reported).
- **A Hebrew gate catches a prefixed homograph**: `שערות` "hairs" = ש + `ערות`; and `הכפר` "the village" hits the כפר
  root. Check the commonest words of a new genre (rural life: village, hair, field) against the gates before drafting.
- **Lines that hold only *iti*** (TITUS's AB) need a fixed Hebrew placeholder: `(עד כאן דבריו.)`.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (AB7)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 13.1a | Hariścandro ha Vaidhasa Aikṣvāko rājāputra āsa. | הַרִישְׁצַנְדְּרָה בֶּן וֵידְהַס, בן אִיקְשְׁוָאקוּ, היה מלך חסר בן. | `וַיֹּאמֶר אַבְרָם אֲדֹנָי יְהוִה מַה תִּתֶּן לִי וְאָנֹכִי הוֹלֵךְ עֲרִירִי` (בראשית טו:ב) | equivalent | הסיפור נפתח, כמו סיפורי האבות, באיש גדול שאין לו בן. הודו הקדומה לא באה במגע עם ישראל: מוטיב משותף (העקרות כפתיחה לסיפור על בן מובטח), לא מקור. |
| 13.1b | tasya ha śataṃ jāyā babhūvus, tāsu putraṃ na lebhe. | היו לו מאה נשים, ובהן לא השיג בן. | `וְלוֹ שְׁתֵּי נָשִׁים שֵׁם אַחַת חַנָּה וְשֵׁם הַשֵּׁנִית פְּנִנָּה` (שמואל-א א:ב) | equivalent | גם שם ריבוי הנשים אינו פותר את העקרות. כאן מאה נשים ואף בן: ההגזמה עושה את החסר לחסר של מלכות. מוטיב משותף, לא מקור. |
| 13.2b | kiṃ svit putreṇa vindate tan ma ācakṣva Nāradeti | מה משיגים בבן? אמור לי זאת, נָארַדָה!" | `הָבָה לִּי בָנִים וְאִם אַיִן מֵתָה אָנֹכִי` (בראשית ל:א) | divergence | במקרא הצעקה לבן היא צעקה של אשה (רחל, חנה); כאן השאלה היא של מלך, והיא שאלה של חשבון: "מה משיגים בבן?". מוטיב משותף, לא מקור. |
| 13.4a | r̥nam asmin saṃnayaty amr̥tatvaṃ ca gachati \ | "חוב הוא פורע בו, וְאֶל האלמוות הוא הולך – | `וְהָיָה הַבְּכוֹר אֲשֶׁר תֵּלֵד יָקוּם עַל שֵׁם אָחִיו הַמֵּת; וְלֹא יִמָּחֶה שְׁמוֹ מִיִּשְׂרָאֵל` (דברים כה:ו) | absent | אין במקרא רעיון של "חוב" שהאדם נולד בו ושבן פורע אותו. הקרוב ביותר הוא הייבום:  – הבן מקיים את *שם* המת. כאן הבן מקיים את המת עצמו. מוטיב משותף (הבן כהמשך של האב אחרי מותו), לא מקור. |
| 13.5b | yāvanto apsu prāṇinām bhūyān putre pitus tataḥ \\ | כמה שיש במים לבעלי הנשימה – עדיפה מזה (הנאת) האב בבן. | — | equivalent | `הִנֵּה נַחֲלַת יְהוָה בָּנִים; שָׂכָר פְּרִי הַבָּטֶן` (תהילים קכז:ג) – הבנים כשכר הגדול מכל. מוטיב משותף, לא מקור. |
| 13.6b | ātmā hi jajña ātmanaḥ sa irāvaty atitāriṇī \\ | כי הנפש נולדה מן הנפש; הוא (ספינה) עמוסת מזון, מעבירה מעבר. | `וְהִנֵּה דְבַר יְהוָה אֵלָיו לֵאמֹר לֹא יִירָשְׁךָ זֶה:  כִּי אִם אֲשֶׁר יֵצֵא מִמֵּעֶיךָ הוּא יִירָשֶׁךָ` (בראשית טו:ד) | divergence | במקרא הבן "יוצא מן המעיים" ויורש; כאן הבן *הוא* האב, "הנפש נולדה מן הנפש". מוטיב משותף, לא מקור. |
| 13.8c | sakhā ha jāyā kr̥paṇaṃ ha duhitā | האשה – חברה; הבת – מצוקה; | `הָבָה לִּי בָנִים וְאִם אַיִן מֵתָה אָנֹכִי` (בראשית ל:א) | absent | גם במקרא הבנים הם המבוקש, אבל אין במקרא אמירה שהבת היא "מצוקה". מוטיב משותף (העדפת הבן), לא מקור. |
| 13.8d | jyotir ha putraḥ parame vyoman \\ | הבן – אור במרום העליון. | `וְלֹא תְכַבֶּה אֶת נֵר יִשְׂרָאֵל` (שמואל-ב כא:יז); `לְמַעַן הֱיוֹת נִיר לְדָוִיד עַבְדִּי כָּל הַיָּמִים לְפָנַי` (מלכים-א יא:לו); `וְכִבּוּ אֶת גַּחַלְתִּי אֲשֶׁר נִשְׁאָרָה` (שמואל-ב יד:ז) | equivalent | ו־ – גם במקרא הצאצא הוא "נר" שאסור שיכבה, ואשת תקוע אומרת על בנה האחרון . אבל במקרא האור הוא המשך השם על הארץ; כאן האור הוא "במרום העליון", בשמים – הבן מאיר את דרכו של האב בעולם המתים. מוטיב משותף, לא מקור. |
| 13.12a | nāputrasya loko 'stīti tat sarve paśavo viduḥ \ | "אין עולם לחסר הבן" – זאת יודעות כל הבהמות; | `כִּי אָמַר אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל-ב יח:יח) | equivalent | גם במקרא חוסר הבן הוא אובדן של המשך (אבשלום מציב מצבה במקום בן). כאן חוסר הבן הוא אובדן של "עולם" אחרי המוות. מוטיב משותף, לא מקור. |
| 13.12b | tasmāt tu putro mātaraṃ svasāraṃ cādhirohati \\ | לכן הבן (בבהמות) עולה על אמו ועל אחותו. | `עֶרְוַת אָבִיךָ וְעֶרְוַת אִמְּךָ לֹא תְגַלֵּה` (ויקרא יח:ז); `עֶרְוַת אֲחוֹתְךָ בַת אָבִיךָ אוֹ בַת אִמֶּךָ` (ויקרא יח:ט); `לְכָה נַשְׁקֶה אֶת אָבִינוּ יַיִן וְנִשְׁכְּבָה עִמּוֹ; וּנְחַיֶּה מֵאָבִינוּ זָרַע` (בראשית יט:לב) | divergence | ו־ – התורה אוסרת על האדם בדיוק את מה שהגאתה מתארת אצל הבהמות; הגאתה אינה מתירה זאת לאדם, אבל רואה בזה ראיה לכוחו של הרצון בבן – כל כך חזק, שהבהמות אינן נמנעות מכלום כדי להשיגו. השוו  – בנות לוט עושות מעשה אסור "לחיות זרע". מוטיב משותף (גילוי עריות למען המשכיות), לא מקור. |
| 14.1c | putro me jāyatāṃ, tena tvā yajā iti | 'ייוולד לי בן, ובו אזבח לך'." | `וְהָיָה הַיּוֹצֵא אֲשֶׁר יֵצֵא מִדַּלְתֵי בֵיתִי לִקְרָאתִי בְּשׁוּבִי בְשָׁלוֹם מִבְּנֵי עַמּוֹן וְהָיָה לַיהוָה וְהַעֲלִיתִיהוּ עֹלָה` (שופטים יא:לא) | divergence | נדר שקורבנו אדם. אבל יפתח נודר מעצמו ואינו יודע מי ייצא; כאן הנדר מוצע לאב בעצת החכם, ומושאו ידוע מראש – הבן שעוד לא נולד. |
| 14.1c | putro me jāyatāṃ, tena tvā yajā iti | 'ייוולד לי בן, ובו אזבח לך'." | `וּנְתַתִּיו לַיהוָה כָּל יְמֵי חַיָּיו` (שמואל-א א:יא) | divergence | חנה מבקשת בן ונודרת לתת אותו לאל – לשירות, לא לזבח. |
| 14.1c | putro me jāyatāṃ, tena tvā yajā iti | 'ייוולד לי בן, ובו אזבח לך'." | `בְּכוֹר בָּנֶיךָ תִּתֶּן לִי` (שמות כב:כח); `וְכֹל בְּכוֹר אָדָם בְּבָנֶיךָ תִּפְדֶּה` (שמות יג:יג) | equivalent | התורה דורשת את הבכור לאל (ומיד מוסיפה ). הודו לא באה במגע עם ישראל: מוטיב משותף (הבן המבוקש מן האל שייך לאל), לא מקור. ההבדל: כאן האל אינו דורש מעצמו – הנדר הוא עסקה שהאדם מציע, והאל מקבל. |
| 14.2c | tasya ha putro jajñe Rohito nāma | נולד לו בן, רוֹהִיטָה שמו. | `וַתַּהַר חַנָּה וַתֵּלֶד בֵּן; וַתִּקְרָא אֶת שְׁמוֹ שְׁמוּאֵל כִּי מֵיְהוָה שְׁאִלְתִּיו` (שמואל-א א:כ) | equivalent | הבן המבוקש נולד מיד אחרי הנדר. מוטיב משותף, לא מקור. |
| 14.3c | yadā vai paśur nirdaśo bhavaty, atha sa medhyo bhavati. | "כשבהמה נהיית בת יותר מעשרה (ימים), אז היא נהיית ראויה לזבח. | `שִׁבְעַת יָמִים יִהְיֶה עִם אִמּוֹ בַּיּוֹם הַשְּׁמִינִי תִּתְּנוֹ לִי` (שמות כב:כט); `בְּכוֹר בָּנֶיךָ תִּתֶּן לִי` (שמות כב:כח); `וּמִיּוֹם הַשְּׁמִינִי וָהָלְאָה יֵרָצֶה לְקָרְבַּן אִשֶּׁה לַיהוָה` (ויקרא כב:כז) | equivalent | באותו מקום בתורה, מיד אחרי , נקבע שהבכור של הבהמה ניתן ביום השמיני (). שתי התרבויות יודעות שולד צעיר מדי אינו ראוי לזבח, וקובעות לו מניין ימים (שמונה; עשרה). המלך ההודי מנצל את הכלל הזה כדי לדחות. מוטיב משותף (גיל מינימום של קורבן), לא מקור. |
| 14.7d | yadā vai kṣatriyaḥ ՚1 saṃnāhuko bhavaty, atha sa medhyo bhavati. | "כשקְשַׁטְרִיָּה נהיה ראוי לשריון, אז הוא נהיה ראוי לזבח. | `וַיְהִי אֱלֹהִים אֶת הַנַּעַר וַיִּגְדָּל; וַיֵּשֶׁב בַּמִּדְבָּר וַיְהִי רֹבֶה קַשָּׁת` (בראשית כא:כ) | divergence | הנער שגדל ונעשה לוחם; השוו 14.9a. מוטיב משותף, לא מקור. |
| 14.8d | tatāyaṃ vai mahyaṃ tvām adadād, dhanta tvayāham imaṃ yajā iti | "יקירי, הזה נתן אותך לי; הבה, בך אזבח לזה." | `וַיֹּאמֶר אַבְרָהָם אֱלֹהִים יִרְאֶה לּוֹ הַשֶּׂה לְעֹלָה בְּנִי` (בראשית כב:ח) | divergence | אברהם אינו אומר לבנו שהוא הקורבן; הַרִישְׁצַנְדְּרָה אומר זאת בפירוש, ובנימוק משפטי: "הוא נתן אותך לי" – הבן הוא מתנה שהוחזרה. והבן, בניגוד ליצחק, מסרב (14.9a). מוטיב משותף (אב שאומר לבנו מה ייעשה בו), לא מקור. |
| 14.9a | sa ha nety uktvā dhanur ādāyāraṇyam apātasthau, | לאחר שאמר "לא", לקח את הקשת ויצא אֶל היער; | `וַיֵּלְכוּ שְׁנֵיהֶם יַחְדָּו` (בראשית כב:ו) | divergence | יצחק הולך עם אביו ואינו מסרב; רוֹהִיטָה אומר "לא" ובורח עם קשת. |
| 14.9a | sa ha nety uktvā dhanur ādāyāraṇyam apātasthau, | לאחר שאמר "לא", לקח את הקשת ויצא אֶל היער; | `וַיֵּשֶׁב בַּמִּדְבָּר וַיְהִי רֹבֶה קַשָּׁת` (בראשית כא:כ) | equivalent | הנער שנשלח (או בורח) מבית אביו חי עם קשתו בארץ הבר. מוטיב משותף, לא מקור. |
| 15.1a | atha haikṣvākaṃ Varuṇo jagrāha, tasya hodaraṃ jajñe. | אז אחז וַרוּנָה בבן אִיקְשְׁוָאקוּ, ונולדה לו כרס. | `וְאָנֹכִי פָּצִיתִי פִי אֶל יְהוָה וְלֹא אוּכַל לָשׁוּב` (שופטים יא:לה) | divergence | יפתח מקיים את נדרו כי אינו יכול לחזור בו; כאן המלך מתחמק, והאל "אוחז" בו במחלה. מוטיב משותף (עונש על נדר שלא קוים), לא מקור. |
| 15.1c | tam Indraḥ puruṣarūpeṇa paryetyovāca: | אִינְדְּרָה, בצורת אדם, פגש אותו ואמר: | `וַיִּקְרָא אֵלָיו מַלְאַךְ יְהוָה מִן הַשָּׁמַיִם` (בראשית כב:יא) | equivalent | בבראשית האל קורא מן השמים ועוצר את היד; כאן האל בא "בצורת אדם" ומעכב את הבן ביער – כלומר דוחה את הזבח, אבל אינו מבטל אותו. מוטיב משותף (התערבות אלוהית שמעכבת), לא מקור. |
| 15.5d | caran vai madhu vindati caran svādum udumbaram \ | "הנודד מוצא דבש; הנודד – את תאנת־האוּדוּמְבַּרָה המתוקה; | — | equivalent | `אֶרֶץ זָבַת חָלָב וּדְבָשׁ` היא ארץ שמגיעים אליה בנדודים; אבל כאן אין ארץ מובטחת – הדבש נמצא בדרך עצמה. (אין צורך בפסוק: מוטיב כללי.) |
| 15.7e | r̥ṣe 'haṃ te śataṃ dadāmy, aham eṣām ekenātmānaṃ niṣkrīṇā iti. | "חוזה, אני נותן לך מאה; באחד מֵאֵלֶּה אפדה את עצמי." | `וְכֹל בְּכוֹר אָדָם בְּבָנֶיךָ תִּפְדֶּה` (שמות יג:יג); `וּפֶטֶר חֲמוֹר תִּפְדֶּה בְשֶׂה` (שמות לד:כ) | equivalent | *níṣ-√krī*, "לקנות (את עצמו) החוצה", הוא בדיוק "פדה": לשחרר אדם המיועד לאל בתשלום או בתחליף. אבל בתורה הבכור נפדה בכסף או בבהמה (); כאן הבן פודה את עצמו – באדם אחר, שנקנה בכסף. מוטיב משותף (פדיון של בן המיועד לאל), לא מקור. |
| 15.7g | na nv imam iti, no evemam iti kaniṣṭham mātā. | "לא את זה." "וגם לא את זה," (אמרה) האם על הקטן. | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ` (בראשית כב:ב); `וְיֶלֶד זְקֻנִים קָטָן; וְאָחִיו מֵת וַיִּוָּתֵר הוּא לְבַדּוֹ לְאִמּוֹ וְאָבִיו אֲהֵבוֹ` (בראשית מד:כ) | divergence | בבראשית הבן הנבחר הוא האהוב; כאן כל הורה מחזיק באהוב שלו – האב בגדול, האם בקטן – והאמצעי, שאיש אינו אוהב במיוחד, נמכר. השוו את הבן הקטן שהאב שומר עליו: . מוטיב משותף (העדפת הבכור והצעיר), לא מקור. |
| 15.7i | tasya ha śataṃ dattvā sa tam ādāya so 'raṇyād grāmam eyāya | לאחר שנתן בעדו מאה, לקח אותו, ובא מן היער אֶל היישוב. | `וַיִּמְכְּרוּ אֶת יוֹסֵף לַיִּשְׁמְעֵאלִים בְּעֶשְׂרִים כָּסֶף` (בראשית לז:כח) | equivalent | בן (אח) שנמכר בכסף; שם בידי האחים, כאן בידי האב והאם. מוטיב משותף, לא מקור. |
| 15.8d | tatheti, bhūyan vai brāhmaṇaḥ kṣatriyād iti Varuṇa uvāca. | "כן," אמר וַרוּנָה, "כי ברהמין עדיף על קְשַׁטְרִיָּה." | `וַיִּקַּח אֶת הָאַיִל וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | divergence | בבראשית התחליף הוא בהמה, נחות מן האדם; כאן התחליף הוא אדם, והאל מקבל אותו כי הוא *עדיף* – בן כוהנים במקום בן מלכים. התחליף אינו פחות, אלא יותר. מוטיב משותף (קורבן חלופי), לא מקור. |
| 15.8f | tam etam abhiṣecanīye puruṣam paśum ālebhe | וביום היציקה תפס (המלך) את האדם הזה כבהמה. | `וַיִּקַּח אֶת הָאַיִל וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | divergence | בבראשית הבהמה באה במקום האדם; כאן "האדם" (*púruṣa*) נתפס "כבהמה" (*paśú*): אותו צירוף מלים של שתפתה ברהמנה 1.2.3.6 (`annotated-SB1.2.3.rtl.md`), "את האדם תפסו האלים בתחילה כבהמה". הסיפור חוזר אל הזבח הראשון, שלפני כל תחליף. מוטיב משותף, לא מקור. |
| 16.1c | tasmā upākr̥tāya niyoktāraṃ na vividuḥ. | כשהובא (אֶל העמוד), לא מצאו מי שיכפות אותו. | `וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ וַיָּשֶׂם אֹתוֹ עַל הַמִּזְבֵּחַ מִמַּעַל לָעֵצִים` (בראשית כב:ט) | divergence | בבראשית האב כופת את הבן בעצמו, בשתיקה; כאן ארבעה מגדולי הכוהנים עומדים סביב הזבח, ואיש מהם אינו מוכן לכפות. הכפיתה נעשית ענין של שכר (16.1e). הודו לא באה במגע עם ישראל: מוטיב משותף (כפיתת הבן לקורבן), לא מקור. העברית אינה משתמשת בשורש עקד (`../renderings.md` §7.1), כדי שההקבלה תהיה בהערה ולא בתרגום. |
| 16.1e | mahyam aparaṃ śataṃ dattāham enaṃ niyokṣyāmīti. | "תנו לי מאה נוספת, ואני אכפות אותו." | `וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ` (בראשית כב:ט) | divergence | אברהם כופת את בנו מתוך ציות לאל; אגיגרטה כופת את בנו תמורת מאה פרות. מוטיב משותף (האב הכופת), והסטייה היא התגלית: כאן אין ניסיון של אמונה, אלא מקח. |
| 16.2a | tasmā upākr̥tāya niyuktāyāprītāyā paryagnikr̥tāya viśasitāraṃ na vividuḥ. | כשהובא, נכפת, נאמרו עליו פסוקי האָפְּרִי והוקף באש – לא מצאו מי שינתח אותו. | `וַיִּשְׁלַח אַבְרָהָם אֶת יָדוֹ וַיִּקַּח אֶת הַמַּאֲכֶלֶת לִשְׁחֹט אֶת בְּנוֹ` (בראשית כב:י) | divergence | הרגע של החרב. בבראשית האב לוקח את המאכלת בעצמו; כאן אין מי שיחתוך – עד שהאב מציע את עצמו בשכר. מוטיב משותף, לא מקור. |
| 16.2e | so 'siṃ ՚1 niḥśyāna eyāyā+tha ha Śunaḥśepa īkṣāṃ cakre: | והוא בא, משחיז את החרב. אז הרהר שׁוּנַהְשֵׁפָּה: | `וַיִּקַּח בְּיָדוֹ אֶת הָאֵשׁ וְאֶת הַמַּאֲכֶלֶת; וַיֵּלְכוּ שְׁנֵיהֶם יַחְדָּו` (בראשית כב:ו) | divergence | אברהם נושא את המאכלת בשתיקה ליד בנו; אגיגרטה "בא משחיז את החרב" – הוא מכין את הכלי לעיני הבן הכפות. מוטיב משותף (האב והסכין), לא מקור. |
| 16.2f | 'mānuṣam iva vai mā viśasiṣyanti, hantāhaṃ devatā ՚1 upadhāvānīti. | "כְּמוֹ לֹא־אֱנוֹשִׁי ינתחו אותי! הבה, ארוץ אֶל האֵלִים." | — | equivalent | `וְאָנֹכִי תוֹלַעַת וְלֹא-אִישׁ; חֶרְפַּת אָדָם וּבְזוּי עָם` (תהילים כב:ז) – הנרדף שנעשה "לא איש" בעיני רודפיו פונה מעצמו אל האל; גם המזמור עובר מן הבזיון אל התפילה. |
| 16.2f | 'mānuṣam iva vai mā viśasiṣyanti, hantāhaṃ devatā ՚1 upadhāvānīti. | "כְּמוֹ לֹא־אֱנוֹשִׁי ינתחו אותי! הבה, ארוץ אֶל האֵלִים." | `כַּשֶּׂה לַטֶּבַח יוּבָל ... וְלֹא יִפְתַּח פִּיו` (ישעיהו נג:ז); `וְאַיֵּה הַשֶּׂה לְעֹלָה` (בראשית כב:ז) | divergence | העבד הסובל שותק כבהמה; שונהשפה, שמטפלים בו "כמו בבהמה", פותח את פיו – ותפילתו מצילה אותו. ויצחק שותק לגמרי מרגע השאלה . מוטיב משותף, לא מקור. |
| 16.6c | sa Varuṇaṃ rājānam upasasārāta uttarābhir ekatriṃśatā | הוא ניגש אֶל וַרוּנָה המלך בשלושים ואחד הפסוקים שמכאן והלאה. | `קָרָאתִי מִצָּרָה לִי אֶל יְהוָה וַיַּעֲנֵנִי` (יונה ב:ג) | equivalent | תפילת הכלוא הנענית. מוטיב משותף, לא מקור. |
| 16.7b | taṃ nu stuhy atha tvotsrakṣyāma iti. | הלל אותו עתה, ואז נשלח אותך." | — | equivalent | `פִּתַּחְתָּ לְמוֹסֵרָי` (תהילים קטז:טז) – שחרור הכפות כתשובה לתפילה. מוטיב משותף, לא מקור. |
| 16.13a | tasya ha smarcy-r̥cy uktāyāṃ vi pāśo mumuce, | וכל פעם שנאמר פסוק, פסוק, הותר חבל, | `וַתִּהְיֶינָה הָעֲבֹתִים אֲשֶׁר עַל זְרוֹעוֹתָיו כַּפִּשְׁתִּים אֲשֶׁר בָּעֲרוּ בָאֵשׁ וַיִּמַּסּוּ אֱסוּרָיו מֵעַל יָדָיו` (שופטים טו:יד) | divergence | גם שם החבלים נמסים מעצמם; אבל שמשון כוח האל עליו, ושונהשפה מתיר אותם בדיבור, פסוק אחר פסוק. |
| 16.13a | tasya ha smarcy-r̥cy uktāyāṃ vi pāśo mumuce, | וכל פעם שנאמר פסוק, פסוק, הותר חבל, | `וַיִּקְרָא אֵלָיו מַלְאַךְ יְהוָה מִן הַשָּׁמַיִם` (בראשית כב:יא) | absent | בבראשית קול מן השמים עוצר את היד; כאן אין קול: הבן מציל את עצמו בתפילה. מוטיב משותף (הצלת הכפות), לא מקור. |
| 17.1b | tvam eva no 'syāhnaḥ saṃsthām adhigachety. | "אתה, דווקא אתה, קח עלינו את השלמת היום הזה." | `וַיָּשָׁב אַבְרָהָם אֶל נְעָרָיו וַיָּקֻמוּ וַיֵּלְכוּ יַחְדָּו אֶל בְּאֵר שָׁבַע` (בראשית כב:יט) | absent | בבראשית יצחק נעלם מן הסיפור אחרי העקדה; כאן הנער שהותר מן העמוד נעשה מיד לכוהן הראשי של אותו זבח. מוטיב משותף (הקורבן שניצל), לא מקור. |
| 17.1k | śunaś cic chepaṃ niditaṃ sahasrād ity | בפסוק "את שׁוּנַהְשֵׁפָּה הכפות מן האלף …" | — | equivalent | `פִּתַּחְתָּ לְמוֹסֵרָי` (תהילים קטז:טז) – הכפות ששוחרר מודה לאל לפני המזבח. מוטיב משותף, לא מקור. |
| 17.2a | atha ha Śunaḥśepo Viśvāmitrasyāṅkam āsasāda. | אז ישב שׁוּנַהְשֵׁפָּה בחיקו של וִישְׁוָמִיטְרָה. | `וַתִּקַּח נָעֳמִי אֶת הַיֶּלֶד וַתְּשִׁתֵהוּ בְחֵיקָהּ וַתְּהִי לוֹ לְאֹמֶנֶת` (רות ד:טז); `וְתֵלֵד עַל בִּרְכַּי וְאִבָּנֶה גַם אָנֹכִי מִמֶּנָּה` (בראשית ל:ג) | equivalent | ו־ – גם במקרא ההושבה בחיק או על הברכיים היא מעשה של אימוץ. כאן הנער מתיישב בעצמו בחיקו של מי שבחר בו. מוטיב משותף (החיק כטקס אימוץ), לא מקור. |
| 17.2d | devā vā imam mahyam arāsateti. | "האֵלִים נתנו אותו לי." | `וַיִּתֵּן יְהוָה לִי אֶת שְׁאֵלָתִי אֲשֶׁר שָׁאַלְתִּי מֵעִמּוֹ` (שמואל-א א:כז) | equivalent | הבן כמתנת האל. כאן המתנה ניתנת לא לאב הביולוגי אלא לאב החדש. מוטיב משותף, לא מקור. |
| 17.2e | sa ha Devarāto Vaiśvāmitra āsa. | והוא נעשה דֵּוַרָאטָה בן וִישְׁוָמִיטְרָה. | `וְהָיָה שִׁמְךָ אַבְרָהָם כִּי אַב הֲמוֹן גּוֹיִם נְתַתִּיךָ` (בראשית יז:ה) | equivalent | שם חדש לחיים חדשים. ו"דֵּוַרָאטָה", "שהאלים נתנו", הוא שם מאותו סוג של שמות עבריים כמו נְתַנְאֵל ויְהוֹנָתָן. מוטיב משותף, לא מקור. |
| 17.3h | 'darśus tvā śāsahastaṃ na yac chūdreṣv alapsata \ | "ראו אותך והסכין בידך – מה שלא מצאו (אפילו) בשׁוּדְרָה; | `וַיִּשְׁלַח אַבְרָהָם אֶת יָדוֹ וַיִּקַּח אֶת הַמַּאֲכֶלֶת לִשְׁחֹט אֶת בְּנוֹ` (בראשית כב:י); `וְלֹא חָשַׂכְתָּ אֶת בִּנְךָ אֶת יְחִידְךָ מִמֶּנִּי` (בראשית כב:יב) | divergence | אותה תמונה, האב והסכין ביד מול הבן; אבל בבראשית התמונה היא שיא של מסירות, וכאן היא עדות להרשעה: הבן מזכיר לאב את מה ש"ראו" כולם. ובבראשית האל אומר לאב  כשבח; כאן אותו מעשה הוא חרפה. מוטיב משותף (האב שהרים סכין על בנו), והשיפוט הפוך. |
| 17.3i | gavāṃ trīṇi śatāni tvam avr̥ṇīthā mad Aṅgira | שלוש מאות פרות בחרת על פני, בן אַנְגִּירַס!" | `וַיִּמְכְּרוּ אֶת יוֹסֵף לַיִּשְׁמְעֵאלִים בְּעֶשְׂרִים כָּסֶף` (בראשית לז:כח) | equivalent | מחיר של אדם. מוטיב משותף, לא מקור. |
| 17.4g | nāpāgāḥ śaudrān nyāyād asaṃdheyaṃ tvayā kr̥tam \\ | לא סרת מדרך השׁוּדְרָה; מה שעשית אין לו תקנה." | `אָרוּר כְּנָעַן:  עֶבֶד עֲבָדִים יִהְיֶה לְאֶחָיו` (בראשית ט:כה) | divergence | גם שם בן שופט את אביו (או אב את בנו) במונחים של מעמד: מי שעשה מעשה שפל יורד אל מעמד העבדים. כאן הבן מוריד את אביו הברהמין ל"דרך השודרה". מוטיב משותף (חטא שמוריד במעמד), לא מקור. |
| 17.5d | asthān, maitasya putro bhūr mamaivopehi putratām \\ | הוא עמד (שם). אַל תהיה בנו – בוא והיה לי לבן!" | `וַיְהִי לָהּ לְבֵן; וַתִּקְרָא שְׁמוֹ מֹשֶׁה` (שמות ב:י) | equivalent | "היה לו לבן" היא לשון האימוץ המקראית, והיא מתרגמת כאן את *úpa √i putratā́m*, "לבוא אל הבנוּת". מוטיב משותף (אימוץ של ילד שניצל ממוות), לא מקור. |
| 17.6f | jyeṣṭho me tvam putrāṇāṃ syās tava śreṣṭhā prajā syāt \ | "אתה תהיה הגדול בבני; צאצאיך יהיו המעולים; | `אֶפְרַיִם וּמְנַשֶּׁה כִּרְאוּבֵן וְשִׁמְעוֹן יִהְיוּ לִי` (בראשית מח:ה) | equivalent | יעקב מאמץ את בני יוסף ומשווה אותם לבכורים; כאן הבן המאומץ נעשה "הגדול" (*jyéṣṭha*), מעל מאה בנים טבעיים. מוטיב משותף (המאומץ שנעשה בכור), לא מקור. |
| 17.7g | ye keca bhrātaraḥ sthanāsmai jyaiṣṭhyāya kalpadhvam \\ | וכל האחים שאתם – הסכימו לבכורה שלו!" | `כִּי הוּא רֵאשִׁית אֹנוֹ לוֹ מִשְׁפַּט הַבְּכֹרָה` (דברים כא:יז) | equivalent | הבכורה כמעמד משפטי שיש לו זכויות. אבל בתורה האב אינו רשאי להעביר את הבכורה מן הבכור (דברים כא:טז); כאן האב מעביר אותה בגלוי, וזקוק להסכמת הבנים. מוטיב משותף, לא מקור. |
| 18.2b | tān anuvyājahārāntān vaḥ prajā bhakṣīṣṭeti. | עליהם גזר: "צאצאיכם יקבלו לחלקם את הקצוות." | `אָרוּר כְּנָעַן:  עֶבֶד עֲבָדִים יִהְיֶה לְאֶחָיו` (בראשית ט:כה) | equivalent | אב גוזר על חלק מבניו (או מצאצאיו) גורל של שוליים, ומסביר בכך את מוצאם של עמים. |
| 18.2b | tān anuvyājahārāntān vaḥ prajā bhakṣīṣṭeti. | עליהם גזר: "צאצאיכם יקבלו לחלקם את הקצוות." | `וְהוּא יִהְיֶה פֶּרֶא אָדָם יָדוֹ בַכֹּל וְיַד כֹּל בּוֹ; וְעַל פְּנֵי כָל אֶחָיו יִשְׁכֹּן` (בראשית טז:יב) | equivalent | בן שנדחה הוא אבי עם שחי בשולי העולם המיושב. מוטיב משותף (סיפור מוצא של עמים "פראים" כבנים שנדחו), לא מקור. |
| 18.2d | udantyā bahavo bhavanti Vaiśvāmitrā dasyūnām bhūyiṣṭhāḥ | רבים יושבים מעבר לגבולות; בני וִישְׁוָמִיטְרָה הם רוב הדַּסְיוּ. | `וְגַם אֶת בֶּן הָאָמָה לְגוֹי אֲשִׂימֶנּוּ:  כִּי זַרְעֲךָ הוּא` (בראשית כא:יג) | divergence | גם בבראשית הבן שנדחה נעשה אבי עם; אבל ישמעאל זוכה להבטחה, ובני וישוומיטרה הגדולים לקללה. מוטיב משותף, לא מקור. |
| 18.5a | te vai putrāḥ paśumanto vīravanto bhaviṣyatha \ | "אתם, הבנים, תהיו בעלי בהמות, בעלי גיבורים, | `יַעַבְדוּךָ עַמִּים וְיִשְׁתַּחֲוֻ (וְיִשְׁתַּחֲווּ) לְךָ לְאֻמִּים הֱוֵה גְבִיר לְאַחֶיךָ` (בראשית כז:כט) | equivalent | ברכת האב לבן הנבחר, ובצידה קללה. מוטיב משותף, לא מקור. |
| 18.9a | adhīyata Devarāto rikthayor ubhayor r̥ṣih \ | לדֵּוַרָאטָה, החוזה, ניתנו שני העיזבונות: | `כִּי אֶת הַבְּכֹר בֶּן הַשְּׂנוּאָה יַכִּיר לָתֶת לוֹ פִּי שְׁנַיִם בְּכֹל אֲשֶׁר יִמָּצֵא לוֹ` (דברים כא:יז) | equivalent | הבכור מקבל כפליים. כאן ה"גדול" החדש מקבל שתי ירושות. מוטיב משותף, לא מקור. |
| 18.11a | tad dhotā rājñe 'bhiṣiktāyācaṣṭe | אותו מספר כוהן־הקריאה למלך שיצקו עליו. | `וַיִּקַּח שְׁמוּאֵל אֶת פַּךְ הַשֶּׁמֶן וַיִּצֹק עַל רֹאשׁוֹ` (שמואל-א י:א) | divergence | גם בישראל המלך מוקדש ביציקה; אבל שם יוצקים שמן על הראש, וכאן מים ונוזלים מעורבים על כל הגוף. מוטיב משותף (יציקה כטקס המלכה), לא מקור. |
| 18.13a | om ity r̥caḥ pratigara, evaṃ tatheti gāthāyā. | "אוֹם" – התשובה לפסוק; וכך "כן" – לגאתה. | `וְעָנוּ כָל הָעָם וְאָמְרוּ אָמֵן` (דברים כז:טו) | equivalent | הסכמה טקסית קבועה לדברים שנאמרו. "אוֹם" אינה מתורגמת כ"אמן", כי היא הברה קדושה שאין לה משמעות מילונית; ה"כן" (*tathā́*) הוא ה"אמן" האנושי. מוטיב משותף, לא מקור. |
| 18.16a | sahasram ākhyātre dadyāc chatam pratigaritra ete caivāsane, | אלף יתן למספר, מאה לעונה, וגם את המושבים הָאֵלֶּה; | `וַיִּמְכְּרוּ אֶת יוֹסֵף לַיִּשְׁמְעֵאלִים בְּעֶשְׂרִים כָּסֶף` (בראשית לז:כח) | divergence | הסיפור על בן שנמכר בעד מאה ובעד מאתיים נגמר בשכר: אלף למספר, מאה לעונה. מוטיב משותף (מחיר), והאירוניה היא של הברהמנה עצמה. |
| 18.17a | putrakāmā hāpy ākhyāpayeram̐l, labhante ha putrām̐l labhante ha putrān | גם המשתוקקים לבנים יניחו לספר אותו; הם משיגים בנים, הם משיגים בנים. | `אֶל הַנַּעַר הַזֶּה הִתְפַּלָּלְתִּי; וַיִּתֵּן יְהוָה לִי אֶת שְׁאֵלָתִי` (שמואל-א א:כז) | equivalent | הבן שניתן בזכות תפילה. מוטיב משותף, לא מקור. |

### Parallels index (SB1.2.3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 6a | púruṣaṃ ha vaí devāḥ | את האָדָם – האֵלִים | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ אֶת יִצְחָק` (בראשית כב:ב) | divergence | בבראשית אלוהים מבקש קרבן אדם ועוצר אותו; כאן האֵלִים עצמם הם הזובחים הראשונים, והקורבן הראשון הוא "האדם" סתם – לא בן מסוים, לא אהוב. הודו הקדומה לא באה במגע עם ישראל: מוטיב משותף (קרבן האדם שקדם לקרבן הבהמה), לא מקור. |
| 6b | ágre paśumā́lebhire tasyā́labdhasya medhó 'pacakrāma só 'śva práviveśa té 'śvamā́labhanta tasyā́labdhasya medhó 'pacakrāma sa gām práviveśa te gāmā́ ... só 'vim praviveśa té 'vimā́ ... ma sò 'jam práviveśa tè 'jamālabhanta tasyā́labdhasya medhó 'pacakrāma | תפסו בתחילה כבהמה; וכשנתפס, הסתלק ממנו לשד הזבח; הוא נכנס אֶל הסוס; הם תפסו את הסוס; וכשנתפס, הסתלק ממנו לשד הזבח; הוא נכנס אֶל השור; הם תפסו את השור (; וכשנתפס, הסתלק ממנו לשד הזבח); הוא נכנס אֶל הכבש; הם תפסו את הכבש (; וכשנתפס, הסתלק ממנו לשד הזבח); הוא נכנס אֶל התיש; הם תפסו את התיש; וכשנתפס, הסתלק ממנו לשד הזבח. | `וְהִנֵּה אַיִל אַחַר נֶאֱחַז בַּסְּבַךְ בְּקַרְנָיו; וַיֵּלֶךְ אַבְרָהָם וַיִּקַּח אֶת הָאַיִל וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | divergence | גם כאן בהמה באה במקום אדם, אבל לא באמצעות אַיִל אחד שנמצא בסבך ולא בדבר אלוהים: זו תאוריה של שרשרת. שום בהמה אינה "תחת" האדם; "לשד הזבח" נודד מגוף לגוף, וכל גוף שנזבח מתרוקן ממנו. |
| 6b | ágre paśumā́lebhire tasyā́labdhasya medhó 'pacakrāma só 'śva práviveśa té 'śvamā́labhanta tasyā́labdhasya medhó 'pacakrāma sa gām práviveśa te gāmā́ ... só 'vim praviveśa té 'vimā́ ... ma sò 'jam práviveśa tè 'jamālabhanta tasyā́labdhasya medhó 'pacakrāma | תפסו בתחילה כבהמה; וכשנתפס, הסתלק ממנו לשד הזבח; הוא נכנס אֶל הסוס; הם תפסו את הסוס; וכשנתפס, הסתלק ממנו לשד הזבח; הוא נכנס אֶל השור; הם תפסו את השור (; וכשנתפס, הסתלק ממנו לשד הזבח); הוא נכנס אֶל הכבש; הם תפסו את הכבש (; וכשנתפס, הסתלק ממנו לשד הזבח); הוא נכנס אֶל התיש; הם תפסו את התיש; וכשנתפס, הסתלק ממנו לשד הזבח. | `קַדֶּשׁ לִי כָל בְּכוֹר פֶּטֶר כָּל רֶחֶם בִּבְנֵי יִשְׂרָאֵל בָּאָדָם וּבַבְּהֵמָה` (שמות יג:ב); `וְכֹל בְּכוֹר אָדָם בְּבָנֶיךָ תִּפְדֶּה` (שמות יג:יג) | divergence | גם בתורה האדם והבהמה עומדים יחד בחוק הזבח, והאדם נפדה (); כאן אין פדיון של אדם בפני עצמו, אלא היסטוריה של הזבח: מן האדם אל הבהמה. הודו לא באה במגע עם ישראל: מוטיב משותף (בהמה כתחליף לאדם), לא מקור. השוו בקורפוס החתי את טקס פּוּלִישָׁה, שבו "איש מקושט" ניתן לאֵל כ"תחליף" (*PŪḪU*), ואחריו פר (`../../טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים/annotated-PU.rtl.md`, 21–28): שם התחליף הוא לאדם (המלך); כאן הבהמה היא תחליף לזבח האדם עצמו. |
| 7b | taṃ khánantaivā́nvīṣustamánvavindaṃstā́vimaú vrīhiyavau tásmādápyetāvetárhi khánanta ivaivā́nuvindanti sa yā́vadvīryavaddha vā́ asyaite sárve paśáva ā́labdhāḥ syustā́vadvīryavaddhāsya havírevá bhavati yá evámetadvedā́tro sā́ sampadyádāhuḥ pā́ṅktaḥ paśuríti | אחריו חיפשו, כמו חופרים, ומצאו אותו: השניים הָאֵלֶּה, האורז והשעורה; לכן גם עכשיו מוצאים אותם כמו בחפירה. וכמה שהיו כל הבהמות הָאֵלֶּה רבות־עצמה בשבילו אילו נתפסו, רבת־עצמה כמותן נהיית המנחה שלו – של מי שיודע זאת כך. וכאן ההתאמה ההיא שעליה אומרים: "הבהמה מחומשת". | `וַיָּבֵא קַיִן מִפְּרִי הָאֲדָמָה מִנְחָה לַיהוָה` (בראשית ד:ג); `וְהֶבֶל הֵבִיא גַם הוּא מִבְּכֹרוֹת צֹאנוֹ וּמֵחֶלְבֵהֶן` (בראשית ד:ד) | divergence | ו־ – בבראשית מנחת הדגן ומנחת הבהמה עומדות זו מול זו, והבהמה נבחרת; כאן הדגן *הוא* הבהמה, באותה עוצמה. |
| 7b | taṃ khánantaivā́nvīṣustamánvavindaṃstā́vimaú vrīhiyavau tásmādápyetāvetárhi khánanta ivaivā́nuvindanti sa yā́vadvīryavaddha vā́ asyaite sárve paśáva ā́labdhāḥ syustā́vadvīryavaddhāsya havírevá bhavati yá evámetadvedā́tro sā́ sampadyádāhuḥ pā́ṅktaḥ paśuríti | אחריו חיפשו, כמו חופרים, ומצאו אותו: השניים הָאֵלֶּה, האורז והשעורה; לכן גם עכשיו מוצאים אותם כמו בחפירה. וכמה שהיו כל הבהמות הָאֵלֶּה רבות־עצמה בשבילו אילו נתפסו, רבת־עצמה כמותן נהיית המנחה שלו – של מי שיודע זאת כך. וכאן ההתאמה ההיא שעליה אומרים: "הבהמה מחומשת". | `וְאִם לֹא תַשִּׂיג יָדוֹ לִשְׁתֵּי תֹרִים אוֹ לִשְׁנֵי בְנֵי יוֹנָה וְהֵבִיא אֶת קָרְבָּנוֹ אֲשֶׁר חָטָא עֲשִׂירִת הָאֵפָה סֹלֶת לְחַטָּאת` (ויקרא ה:יא) | equivalent | גם בתורה הסולת יכולה לבוא במקום הבהמה; אבל שם זה ויתור לעני, וכאן זו תורה על טבע הזבח: מי "שיודע זאת כך" מקבל מן העוגה את כל עוצמת הבהמות. מוטיב משותף לתרבויות שלא נפגשו, לא מקור. |
| 8b | yádāpá ānayatyátha tvágbhavati yadā́ saṃyautyátha māṃsám bhavati sáṃtata iva hi sa tárhi bhávati sáṃtatamiva hí māṃsáṃ yadā́ śr̥to 'thāsthi bhavati dārúṇa iva hi sa tárhi bhávati dārúṇamityasthyátha yadudvāsayiṣyánnabhighārayati tám majjā́naṃ dadhātyeṣò sā́ sampadyádāhuḥ pāṅktaḥ paśuríti | כשהוא מביא (אליהם) מים – אז הוא נהיה עור; כשהוא לש – אז הוא נהיה בשר, כי באותה עת הוא נהיה כמו מגובש, וכמו מגובש הוא הבשר; כשהוא אפוי – אז הוא נהיה עצם, כי באותה עת הוא נהיה כמו קשה, ו"קשה" – זו העצם; וכשהוא עומד להוריד אותו (מן האש) ומזלף עליו (חמאה), הוא שם בו את המח. זוהי ההתאמה ההיא שעליה אומרים: "הבהמה מחומשת". | `כִּי נֶפֶשׁ הַבָּשָׂר בַּדָּם הִוא וַאֲנִי נְתַתִּיו לָכֶם עַל הַמִּזְבֵּחַ לְכַפֵּר עַל נַפְשֹׁתֵיכֶם` (ויקרא יז:יא) | absent | בתורה כוחו של קרבן הבהמה הוא הדם, שהוא הנפש, והדם הוא מה שאין לו תחליף. כאן אין דם בכלל: חמשת חלקי הבהמה הם שער, עור, בשר, עצם ומח, וכולם ניתנים לבנייה מבצק. ההבדל הוא בשאלה מהו "הלב" של הזבח – נוזל החיים (בתורה) או מבנה בן חמישה חלקים (בברהמנה). מוטיב משותף (מנחת דגן כקרבן שלם), לא מקור. |
| 9b | sá kimpúruṣo 'bhavadyāváśvaṃ ca gā́ṃ ca taú gauráśca gavayáścābhavatāṃ yamávimā́labhanta sa úṣṭro 'bhavadyámajamā́labhanta sá śarabhò 'bhavattásmādetéṣām paśūnāṃ nā̀śitávyamápakrāntamedhā haite paśávaḥ | הוא נהיה מֵעֵין־אָדָם; הסוס והשור – הם נהיו הגָּאוּר והגַּוַיָה; הכבש שתפסו – הוא נהיה הגמל; התיש שתפסו – הוא נהיה השַׁרַבְּהָה. לכן אין לאכול מן הבהמות הָאֵלֶּה, כי לשד הזבח הסתלק מן הבהמות הָאֵלֶּה. | `אֶת הַגָּמָל וְאֶת הָאַרְנֶבֶת וְאֶת הַשָּׁפָן` (דברים יד:ז); `אֶת הַגָּמָל כִּי מַעֲלֵה גֵרָה הוּא וּפַרְסָה אֵינֶנּוּ מַפְרִיס טָמֵא הוּא לָכֶם` (ויקרא יא:ד) | equivalent | הגמל אסור באכילה גם בתורה (). |
| 9b | sá kimpúruṣo 'bhavadyāváśvaṃ ca gā́ṃ ca taú gauráśca gavayáścābhavatāṃ yamávimā́labhanta sa úṣṭro 'bhavadyámajamā́labhanta sá śarabhò 'bhavattásmādetéṣām paśūnāṃ nā̀śitávyamápakrāntamedhā haite paśávaḥ | הוא נהיה מֵעֵין־אָדָם; הסוס והשור – הם נהיו הגָּאוּר והגַּוַיָה; הכבש שתפסו – הוא נהיה הגמל; התיש שתפסו – הוא נהיה השַׁרַבְּהָה. לכן אין לאכול מן הבהמות הָאֵלֶּה, כי לשד הזבח הסתלק מן הבהמות הָאֵלֶּה. | `אַיָּל וּצְבִי וְיַחְמוּר; וְאַקּוֹ וְדִישֹׁן וּתְאוֹ וָזָמֶר` (דברים יד:ה) | divergence | התורה מתירה דווקא את "בני הבר" של בהמות הבית; הברהמנה אוסרת את בני הבר של הסוס והשור (הגאור והגויה) ואת השרבהה. והנימוק הפוך: בתורה – סימני גוף (גרה ופרסה); כאן – היסטוריה: החיות האלה הן שאריות של נזבחים שהלשד יצא מהם, "קליפות" של זבח. הודו לא באה במגע עם ישראל: מוטיב משותף (רשימת חיות שאינן נאכלות, ובתוכה הגמל), לא מקור. |

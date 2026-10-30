# 4-העקדה – AB 7.13–18, ŚB 1.2.3.6–9, KU 1 (vallīs 1–3)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
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
(generated from the הקבלה bullets by `../build_parallels_index.py`)

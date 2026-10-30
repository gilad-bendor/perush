# 3-המבול – ŚB 1.8.1.1–10, MBh 3.185, Vd 2

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
ŚB 1.8.1.1–10, MBh 3.185, Vd 2. Base texts and line units: `../renderings.md` §1. Line data: `python3 -I -B ../vedic_tools.py data <KEY>`.

## Coordinator's notes
- Fixed before drafting (2026-10-30): the renderings §1–§10; the gates in `vedic_tools.py`.

<!-- The translators insert their sections here, above "## Parallels index". -->

## SB1.8.1 1a–10b, VD2 1–43, MBH3.185 1–54c (translator 2, Round 5 run 1)

### Scope
The Indo-Iranian flood, drafted in the order SB1.8.1 → VD2 → MBH3.185, all complete: ŚB 1.8.1.1–10 (20 TITUS
sentences; Weber's accented text without word division, divided in the פירוק), Vīdēvdād 2 (43 stanzas, CAB), and
Mahābhārata 3.185 (116 half-ślokas and speaker lines, BORI via GRETIL). Files: `annotated-<KEY>.rtl.md`,
`translation--intro-<KEY>.rtl.md`, the generated `translation-<KEY>.rtl.md` and `translation.rtl.md`.

### Sources consulted
- Bases: `vedic_tools.py data` for the three KEYs. Dictionaries: Monier-Williams (`mw`) for ŚB and MBh; for VD2 the CAB
  analyses (`ave`; the tool truncates its JSON at 1500 characters, so the lemma field was cut off for most forms: I
  queried the same CAB endpoint from a scratch script) and the Bartholomae lemmas.
- Rank 3, after drafting: Eggeling, SBE 12 (ŚB 1.8.1, with his notes on Weber, Max Müller, Muir and Sāyaṇa); Ganguli,
  Vana Parva CLXXXVII (MBh; he translates the vulgate, not the critical text); Darmesteter, SBE 4, Fargard II (Vd 2,
  with his notes on the Pahlavi commentary). Modern translations not in the folder were not quoted.
- Comparison: the Mesopotamian flood corpus (`../../סיפורי-המבול-המסופוטמיים/`: `corpus.md`, `parallels-index.md`,
  Atra-ḫasīs I and III, Gilgameš XI, Berossus), through `vedic_tools.py grep --all` and its annotated files. Every
  Bible verse printed with `check_bible_quotes.py --show` before quoting.

### Decisions
- **The flood words, as pre-set (§5.3), confirmed in real lines:** *ógha* `שֶׁטֶף` (also MBh *bhayaugha* "a flood of
  fear" `שטף הפחד`, 9a); *náu* `סְפִינָה`; *mátsya* / *jhaṣa* `דָּג` (ŚB 4a *jhaṣa* "large fish" `לדג (גדול)`:
  "large" in brackets); MBh *matsyaka* (diminutive) `דגיג`; *śŕ̥ṅga* `קֶרֶן` / of Himavat `פִּסְגָּה`; *pā́śa* `חֶבֶל`;
  *girí* `הַר` ("this northern mountain" `ההר הצפוני הזה`); *pāraya-* `הֶעֱבִיר` (2b, 4b, 6b `העברתי`); *prajā́*
  `צֶאֱצָאִים`; *prajā́kāma* `משתוקק לצאצאים`; *prajā́ti* `הוֹלָדָה` (10b `הוליד את ההולדה`); *yóṣit* `אִשָּׁה`;
  *duhitár* `בַּת`; *bī́ja* / Av. *taoxman* `זֶרַע`; *√hu* / *ā́huti* `נסך` / `נסך`; Av. *vara* `מִתְחָם`, *zima*
  `חֹרֶף`, *xšaϑra* `מַלְכוּת`, *daēnā* `דָּת`, *gaēϑā* `בעלי החיים`, *astuuant* `בעל העצמות`, *maṣ̌iia* `אָדָם`,
  *pasu* / *staora* `צאן` / `בהמה גסה`, *mainiiu* `רוח`, *dātar* `עושה`.
- **F4 (Vd 2.1) fixed:** `אֲהוּרָה מַזְדָּה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר!` – its second
  half alone opens Zaraθuštra's questions in 39, 42, 43: `עושה בעלי החיים בעלי העצמות, נאמן הסדר!`. *spə̄ništa*
  (superlative of *spəṇta*) = `הנדיבה ביותר` ("bounteous", Gershevitch, Boyce), **not** the root קדש (licensed for
  *spəṇta* in §7.2): `הרוח הקדושה` would sound as `רוּחַ קָדְשְׁךָ` (Ps 51:13), a false echo; and the licence regex
  `spent` would not even match *spəništa*. *aṣ̌auuan* `נאמן הסדר` (*aṣ̌a* = `סֵדֶר`, the cognate of *r̥tá*).
- **F3** `שָׁאַל זָרָתוּשְׁטְרָה אֶת…` – in 1 written `שָׁאַל זָרָתוּשְׁטְרָה את אֲהוּרָה מַזְדָּה:`.
- **Avestan speech verbs:** *mrū-* `אמר`, *aog-* `דיבר`, *paiti-aog-* `השיב`; *pərəs-* `שאל` (F3) but in the middle
  ("consult with", 1–2) `נועץ` – a split by voice.
- **Names:** Manu Vaivasvata = `מָנוּ בן וִיוַסְוַנְט` (the patronymic translated, so that Yama, also *Vaivasvata*, and
  Yima *Vīuuaŋhana* stay visibly brothers); Av. Vīuuaŋhuuant `וִיוַנְגְהְוַנְט` ("Yima the beautiful, son of
  Vīuuaŋhuuant" = `יִימָה היפה, בן וִיוַנְגְהְוַנְט`); Brahmā `בְּרַהְמָה` (MBh 48c); Vaiśaṃpāyana `וַאישַׁמְפָּאיַנָה`;
  Pāṇḍava `בן פָּאנְדּוּ`; Kuntī `קוּנְטִי`, Pṛthā `פְּרִתָּה`, Kuru `קוּרוּ`, Bharata `בְּהָרַטָה`; the river Vīriṇī
  `וִירִינִי`, Gaṅgā `גַּנְגָּה`, Badarī `בַּדַרִי`; *yojana* `יוֹגַ'נָה`; Av. Arəduuī `אַרֶדְוִי` (?), Dāitiiā
  `דָּאִיטְיָא`, Karšiptar `קַרְשִׁיפְּטָר`, Spitama `סְפִּיטָמָה`, Uruuatat̰.nara `אוּרְוַתַּת־נַרָה`, *suβrā*
  `סוּבְרָה` (transliterated: meaning unknown), *hāϑra* `הָאתְרָה` (a measure).
- **Verbs and nouns (new):** √*bhr̥* `גידל` (ŚB, the rearing; *bhŕ̥ti* `גידול`); nír-√*vah* `סחף`; abhí-áva-√*hr̥* `הוריד`;
  upa-√*ās* `המתין` (Eggeling's "attend to"; Müller's "worship" in the note); upa-√*kl̥p* caus. `הכין` vs ava-√*kl̥p*
  caus. `ערך` (§11.1) – split by preverb; ā́-√*pad* `בא אל` (the ship, [equivalent] Gen 6:18; as Gilg. XI 94 `באתי אל
  תוך הספינה`); ánu-áva-√*sr̥p* `ירד אחרי`, *avasárpaṇa* `מוֹרָד` (`מורד מָנוּ`); pári-√*śiṣ* `נשאר` (Gen 7:23
  [equivalent]); √*arc* `זימר`, √*śram* `התייגע` (the pair `מזמר ומתייגע`); *pākayajña* `זבח פשוט`; *ghr̥tá* `חמאה
  מזוקקת` (shared with *ā́jya*: one substance), *dádhi* `חלב חמוץ`, *mástu* `מי־גבינה`, *āmíkṣā* `גבינה`; *āśís*
  `ברכה`, ā́-√*śās* `ביקש`, sám-√*r̥dh* `התקיים`; *prayāja* / *anuyāja* `זבחי־הפתיחה` / `זבחי־הסיום`; *nāṣṭrā́*
  `סכנה`; *kumbhī́* `כד`, *karṣū́* `חריץ`; MBh *aliñjara* `קנקן`, *vāpī* `בריכה`; *pralaya* `כיליון`;
  *saṃprakṣālana* `השטיפה הגמורה`; √*tap* (middle) `התלהט` + *tapas* `להט` (`התלהט להט`), *tāpasa* `בעל הלהט`;
  *animiṣa* `שאינו ממצמץ`; √*sr̥j*, *sarga* `שילח`, `שילוח` (Manu "sends forth" the creatures, 49–52: the root ברא never);
  *sraṣṭukāma* `משתוקק לשלח`; *muni* `חכם`; *bhagavant* `נכבד`; *saptarṣi* `שבעת החוזים` (§5.1). Av.: *vīs-* `היכון` /
  `מוכן`; *frād-* caus. `הצמיח`, *vard-* caus. `הגדיל` (= Skt √*vr̥dh* `גדל`), deliberately not `פרה` / `רבה` (Gen 9:1
  in the apparatus); *ϑrātar / harətar / aiβiiāxštar* `מגן / שומר / מפקח`; *ham-gam* `התאסף`, *haṇjamana* `אספה`,
  *haṇgata* `התאספות` (one root kept); *vi-šu* `התרחב` / caus. `הרחיב` (10, 11, 31); *fra-šu* `יצא`; *yazata* `ראויי
  הזבח` and *māzdaiiasni* `של זובחי מזדה` (*yaz-* = Skt *yaj* = `זבח`); *aŋra mainiiu* `הרוח המזיקה`; *daxšta* `תו`;
  *frakauua* `גיבן־מלפנים` (Lev 21:20 `גִבֵּן` [equivalent]); *raōcah* `אור` (never `מאור`), *raōcana* `חלון`,
  *xᵛāraōxšna* `מאיר מעצמו`; *miϑβara* `זוגות־זוגות`; *sarəδa* `מין`; *marəγa* `ציפור` vs *vi* `עוף`; *daŋhu* `מחוז`;
  *gav* `בקר`; *ahu* 1 `קיום`, *ahu* 2 `אדון`, *ratu* `שופט`.
- **Recorded splits (by context):** *éka* `לבדו` (ŚB 6b, with *evá*; RV `אחד`); √*car* `הלך` (ŚB 7a, 10a) / `נהג` (MBh 4c,
  with *tapas*); *vaśín* `שולט ביצריו` (MBh 19a; RV `מושל`); *salila* `מים` in the epic (22a, 43c; RV `נחשול`); √*bandh*
  `קשר` for tying a boat (MBh 45c, 46a, ŚB 6b *práti-badh-*; the binding of a victim keeps `כפת`, §5.4); *nar* `גבר`,
  but dual "two persons" `אנשים` (VD2 41); Av. *zam* `ארץ`, but "moist soil" `אדמה` (VD2 31–32); Av. *fra-bar*
  `הגיש` (6) / `כינס` (20); *diś* `צדדים` beside *pradíś* `כיוונים` (§11.2).
- **Rejected:** `התהלך` for √*car* (Gen 6:9 `אֶת הָאֱלֹהִים הִתְהַלֶּךְ נֹחַ`); `בדמות דג` for *matsyarūpeṇa* (`דְּמוּת`
  reserved: `בצורת דג`); `מראשיתם` for *āditaḥ* (`מתחילתם`); `הפרה והרבה` for *frād- / vard-*; `קדוש` for *spəṇta*
  (above); `ark` (Ganguli's word, a false echo of the old translation) – *nau* is `ספינה`.
- **Gate escapes (real reasons):** MBH 18c `טוב` for the vocative *sādho* (the licence knows *sadhu*); MBH 40a `ברוחות`
  for *mahāvātaiḥ* (the licence ` vat` needs a word start); VD2 41 `חיים` for Av. *gaiia* (the licence has *gaya/gay*,
  not CAB's *gaiia*); MBH 4a `[היתר שם: Nārada]` (the name regex ` narad` matches *narādhipaḥ* "lord of men").

### Open decisions for the user
- *spəṇta* `נדיב` (bounteous) vs `קדוש` (the traditional "holy", licensed in §7.2) – I chose `נדיב` to avoid `רוח
  הקודש`; if the user prefers the tradition, F4 becomes `הרוח הקדושה ביותר` and Vd 2.10 `ארמאיטי הקדושה`.
- ŚB 4a: TITUS reads `kaṣá`; Weber, Eggeling and MW read *jhaṣá* "large fish" – translated as *jhaṣa*. A check of
  Weber's page image would settle whether TITUS has a typo.
- Vd 2.23 *ϑrižat̰ … apa.jasat̰*: "a third of the cattle will escape" or (Darmesteter) "all three kinds will perish" –
  opposite readings; `ושליש (?) … יסתלק (?)` keeps both.
- Vd 2.30/38 *marəza* "seal (?)" and the elliptic *aiβica tē varəfšuua suβriia* – Darmesteter "Doubtful"; marked `?`.

### Progress log
- Drafted SB1.8.1 (3 sections, 20 entries), then VD2 (7 sections, 43), then MBH3.185 (6 sections, 116), each saved,
  `fill`ed and `verify`-ed at once. Repeated blocks of VD2 (8/12/16, 9/13/17, 10/14/18, 11/15/19; 25–30 → 33–38)
  were copied from the first copy and changed only where the Avestan changes (300/600/900; one, two, three thirds;
  *viṇdəṇti* `מוצאים` vs *viṇdən* `מצאו`; imperative → injunctive `עֲשֵׂה` / `עשה`, `הָבֵא` / `הביא`; *mā* `אַל` →
  *nōit̰* `לא`; *tē* "you" → *hō* "he").
- Rank 3 read after each draft; changes: ŚB 4a (TITUS `kaṣá` noted), 5b (subject left open, as Eggeling's note), 6b
  (*antáś chaitsīt* as "cut off, strand", the St Petersburg Dictionary); MBh 11a (*udakānta* "water's edge"), 30a (the
  BORI text against Ganguli's vulgate), 40c (Ganguli's "harlot" too strong); VD2 6 (*aštrā* goad, not "poniard"),
  23, 30 (`?` where Darmesteter has "Doubtful").
- Pass (a) fidelity: every content word accounted for in the פירוק; added words in `( )`; negations (*nōit̰*/*mā*,
  *ná*), the subjunctives of instruction (ŚB 3b *bibharāsi* `תגדל`) and the periphrastic futures checked.
- Pass (b) consistency: `lexmap` reviewed: one collision fixed (ŚB 3b *tárhi* `אז` → `באותה עת`, §11.2); the remaining
  multi-Hebrew lemmas are inflection or the recorded splits above. Formulas F3, F4, F5 pass; `verify` lists no
  repeated-line difference.
- Pass (c) Hebrew: the generated translations read aloud; the `אל`/`האלה` of the lines with *bhaga-* / *ahura* were
  vocalized `אֶל` / `הָאֵלֶּה` (the trap regex), `אַל` (negation) in ŚB 6b and Vd 2.29.
- `check_bible_quotes.py` on all my files: 0 problems (three fixed: a Mishnah line written as a quotation, a reference
  after a bare word, `דְּמוּת`). `build` of the three KEYs; `verify <KEY> --strict`: no problems.

### The text on its own terms
- **The flood as a by-product of ritual explanation (ŚB 1–10):** the story exists to explain the *iḍā* portion of the
  new- and full-moon sacrifice; the fish, the ship and the mountain are the prelude to "I am the Blessing" (9b).
- **The law of the fishes (ŚB 3b; MBh 7–8):** the first formulation of *mātsya-nyāya*, "the big swallow the small"; the
  weak fish asks man for protection, and the protected becomes the saviour – a contract between two weak creatures.
- **The ladder of vessels:** jar → trench → sea (ŚB 3b); jar → pond → Ganges → sea (MBh 11–22): the growing fish is
  itself the clock of the flood (ŚB 4b "for it grows the largest").
- **Sacrifice as birth (ŚB 7b–10b):** Manu pours milk and butter into the waters, and a woman rises "with ghee in her
  footprint": the oblation begets; the sacrificer is the father ("I am his who begot me", 8b).
- **Manu repeats the creator (ŚB 7a; MBh 50–52):** "singing and toiling, desiring offspring" is Prajāpati's formula;
  in the epic Manu "sends forth" all beings by *tapas* – the survivor becomes a creator.
- **Ascetic heat (MBh 3–5, 50–52):** *tapas* is the power that makes Manu "equal in splendour to Prajāpati" and, at
  the end, clears his confusion.
- **The god in the fish (MBh 23, 24, 35, 48):** sweet smell, a smile, mind-reading, the horn, the "unblinking" eyes:
  the fish reveals itself as Brahmā Prajāpati.
- **Pralaya (MBh 26–27, 41):** the flood is a cosmic "dissolution" and "washing", returning the world to the waters,
  one of a cycle of ages.
- **Yima the king, not the prophet (Vd 2.1–7):** he refuses the religion and accepts kingship over the living; his
  reign has no cold, no heat, no illness, no death.
- **Overpopulation answered by space (Vd 2.8–19):** three times the earth fills with cattle, men, dogs, birds and
  fires, and three times Yima pushes the earth wider with golden tools, addressing her as Ārmaiti.
- **Fire as a living being (Vd 2.8, 25):** "red burning fires" are counted with the creatures and saved in the vara.
- **The vara as a selective golden-age garden (Vd 2.25–30, 39–41):** water, birds, unfailing food, the best seeds, no
  deformed (the marks of the Evil Spirit), self-made lights, a year like a day, a couple born every forty years.
- **Winter, not water (Vd 2.22–24):** the disaster is the cold, the evil creation of Aŋra Mainiiu; the water is
  melting snow.
- **Liturgical framing:** the MBh ends with the merit of hearing (*phalaśruti*, 54); Vd 2 ends with the Aṣ̌əm Vohū
  prayer (43).

### Key parallels
- [equivalent] Gen 7:23 `וַיִּשָּׁאֶר אַךְ נֹחַ` ↔ ŚB 6b "and then Manu alone remained here" (*evá ékaḥ páriśiśiṣe*): the
  same verb and the restrictive particle, but Manu is alone (no family, no animals).
- [equivalent] Gen 7:3 `לְחַיּוֹת זֶרַע` ↔ MBh 30a "all the seeds" ↔ Vd 2.25–28 *taoxman* ↔ Gilg. XI 27, 84 *zēr
  napšāti*: the "seed" carried into the saving structure is common to all four traditions.
- [divergence] Gen 8:20–9:1 (sacrifice, then `פְּרוּ וּרְבוּ`) ↔ ŚB 7b–10b: the post-flood offering does not feed or
  appease gods; it produces a woman, "the Blessing", through whom mankind is born.
- [divergence] Gen 8:4 `עַל הָרֵי אֲרָרָט` ↔ ŚB 5b "this northern mountain", "Manu's Descent" (6b) ↔ MBh 47a
  Naubandhana "Ship-Binding" ↔ Gilg. XI 142 Mount Nimuš ↔ Berossus (Armenia): a real northern mountain in every
  tradition; only in India is the boat towed there by a horned fish.
- [equivalent] Gen 6:1 `כִּי הֵחֵל הָאָדָם לָרֹב` and Gen 26:22 `הִרְחִיב יְהוָה לָנוּ` ↔ Vd 2.8–19 ↔ Atr. I 352–353:
  a round number of years, then the earth is full; Atra-ḫasīs answers with plague and flood, Yima with enlargement.
- [equivalent] Gen 6:16 `צֹהַר … וּפֶתַח הַתֵּבָה בְּצִדָּהּ` and the three decks ↔ Vd 2.30 the door, the self-shining window
  and the three sections: light planned from the start (against Atr. III i 30 "let the sun not see inside").
- [equivalent] Lev 21:17–20 `גִבֵּן` ↔ Vd 2.29 the deformed excluded from the vara (a ritual purity of place).
- [equivalent] Gen 8:22 `וְקֹר וָחֹם וְקַיִץ וָחֹרֶף` ↔ Vd 2.5 "neither cold wind nor hot" and 2.22 the evil winters: the
  biblical promise that winter will continue is the Iranian catastrophe.
- [absent] the fish-god: Genesis's saviour has no form; the Indian one is a fish man reared in his hand (cf. Ea and
  Oannes the fish-man in Berossus B1.3.2).
- Every one of these: India and Iran had no contact with Israel; a Mesopotamian origin of the Indian fish-flood is
  debated (Mesopotamian contact vs an independent fish-avatar myth); Yima's *vara* as a "Noah" is debated (a winter,
  not a flood; a late written form; Darmesteter's note that the Pahlavi commentary's *Malkōsān* may be Hebrew
  `מַלְקוֹשׁ`, Deut 11:14 – i.e. the identification with the biblical flood may be the late Iranian tradition's own).

### Proposals for the shared renderings
- **F4** (Vd 2.1): `אֲהוּרָה מַזְדָּה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר!` – regex on the
  unvocalized line: `אהורה מזדה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר`; its short form for
  `dātarə gaēϑanąm astuuaitinąm aṣ̌āum` (Vd 2.39, 42, 43; and every Vd question): `עושה בעלי החיים בעלי העצמות, נאמן הסדר`.
- Av. *spəṇta* `נָדִיב` (*spəništa* `הנדיב ביותר`; Spəṇta Ārmaiti `אָרְמַאִיטִי הנדיבה`); *aṣ̌auuan* `נאמן הסדר`.
- Av. *mrū-* `אמר`, *aog-* `דיבר`, *paiti-aog-* `השיב`; *pərəs-* middle `נועץ`; *yazata* `ראויי הזבח`; *aŋra mainiiu*
  `הרוח המזיקה`; *ahu* `קיום` / `אדון`; *gav* `בקר`; *zima* `חורף` confirmed.
- Names for §3.1: Brahmā `בְּרַהְמָה` (regex ` brahma\b| brahma `, distinct from *bráhman* `נֹסַח` and *brāhmaṇa*
  `בְּרַהְמִין`); Vīuuaŋhuuant `וִיוַנְגְהְוַנְט` (regex ` viuuanghv| viuuanghan`); the patronymics *Vaivasvata* `בן
  וִיוַסְוַנְט` and Av. *Vīuuaŋhana* `בן וִיוַנְגְהְוַנְט` (translated); Vaiśaṃpāyana `וַאישַׁמְפָּאיַנָה`; Gaṅgā `גַּנְגָּה`.
- Recorded splits to add to §11: *salila* (epic) `מים` vs RV `נחשול`; √*bandh* of a boat `קשר` vs of a victim `כפת`;
  *éka* with *evá* `לבדו`; √*kl̥p*: *upa-* `הכין`, *ava-* `ערך`.
- Tool: the name regex for Nārada (` narad`) matches *narādhipa*; the licence of `טוב` misses *sādho*, of `רוח` misses
  *vāta* inside compounds (*mahāvāta*), of `חי` misses CAB's *gaiia*; `ave` truncates CAB's JSON at 1500 characters
  (the lemma comes last and is cut).

### Lessons for the guidelines
- A command / execution chain in a text with an imperative / injunctive pair: vocalize the imperative (`עֲשֵׂה`, `הָבֵא`)
  where Hebrew writes it like the past (`עשה`, `הביא`), so that the pair stays visible in the clean translation.
- The famous-parallel pull works through old translations too: Ganguli renders *nau* "ark" and Darmesteter calls the
  *vara* "a sort of Noah's ark"; and a Pahlavi commentator (by Darmesteter's reading) already identified Yima's winter
  with the biblical flood – read the reception history before building a parallel on it.
- A trap regex keyed to a word in the line (here *bhagavan*, *ahura*) also fires on the preposition `אל` in ordinary
  narrative lines: vocalize `אֶל` throughout such a text from the first draft.

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)

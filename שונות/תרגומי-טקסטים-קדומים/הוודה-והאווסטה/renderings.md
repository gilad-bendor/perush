# Renderings – the Vedic and Avestan corpus (`הוודה-והאווסטה/`)

Binding for every text of the corpus (guidelines §6.6). Fixed by the coordinator of Round 5 run 1 (2026-10-30) before the
first line; the translators propose additions and changes in their `project.md` sections ("Proposals"), and the
coordinator merges them here (§11). The verifier (`vedic_tools.py verify`) reads §3.1 (names) and §8 (formulas) from this
file; the reserved words and traps (§5, §7) are in the tool (`vedic_tools.py gates` prints them).

## 1. The texts and the bases
| KEY | Text | Base (our line data: `vedic_tools.py data KEY`) | Line unit |
|---|---|---|---|
| RV… | the Rigveda hymns | VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0; committed TSVs) | the pāda (`1a`) |
| SB1.8.1, SB1.2.3 | Śatapatha Brāhmaṇa (Mādhyandina) 1.8.1.1–10; 1.2.3.6–9 | TITUS (Weber 1855, accented; TITUS forbids republication: local TSV) | kaṇḍikā + TITUS sentence (`1a`, `1b`) |
| MBH3.185 | Mahābhārata 3.185 (Matsya) | GRETIL (the BORI critical text; local TSV) | the half-śloka (`1a`, `1c`, `17e`); a bare number = the speaker line |
| VD2 | Vīdēvdād 2 (Yima) | CAB, the basis edition's linguistic corpus (= Geldner's numbering; local TSV) | the stanza (`1`…`43`) |
| AB7 | Aitareya Brāhmaṇa 7.13–18 (Śunaḥśepa) | TITUS (Aufrecht 1879; local TSV) | the TITUS line inside a sentence (`13.1a`) – prose lines and the gāthās' half-verses |
| KU1 | Kaṭha Upaniṣad, adhyāya 1 (vallīs 1–3) | GRETIL TEI (CC BY-NC-SA; committed TSV) | the half-verse (`1.1a` = vallī 1, verse 1, first half) |

- The **TITUS texts are written without word division** where Weber and Aufrecht print Devanāgarī-style sandhi
  (`avanégyamudakamā́jahruryáthedám`): the `פירוק` divides the words. The edition's abbreviation dots (`...`, ŚB 1.2.3.6)
  stand for repeated phrases: the Hebrew expands them in `( )`.
- **The CAB text** separates words by dots (`yimō. srīrō.`), marks emendations with `+`, and keeps the long repeated
  blocks of Vd 2 in full (unlike its "without repetitions" label).
- RV 1.32 is **aligned with the fifth-day dossier** (`../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-RV.rtl.md`,
  stanzas 1, 2, 4, 5, 8, 11): `verify` requires the same Hebrew in both files for those pādas; a revision is made in both
  files at once (§9).

## 2. Hebrew conventions
### 2.1 The line
- **One pāda = one Hebrew line** (RV, MBh's half-ślokas, the Kaṭha's half-verses, the gāthās of AB); the sentence runs
  over the line ends as in the source. The prose units (ŚB, AB, Vd) are one Hebrew line each, however long.
- **Speech:** the Brāhmaṇas and the Avesta mark speech by `iti` at its end; the Hebrew opens it with a colon and closes it
  with a quotation mark only where needed for sense (`אמר: "…"`), and never translates `iti` as a word.
- Sanskrit particles: `ha`, `vai`, `vā́ u` (narrative emphasis in the Brāhmaṇas) are not translated (the פירוק says
  so); `íti` closes speech; `iva` / `ná` (after a noun) = `כְּ־` / `כְּמוֹ`; `kíla` = `בֶּאֱמֶת`; `nú` = `עַתָּה`.

### 2.2 Sanskrit and Avestan in the Hebrew apparatus
In the apparatus, Sanskrit and Avestan words are written in Latin transliteration in italics or backticks (`*rétas*`,
`` `vr̥trám` ``), never in Hebrew letters (the names excepted).

### 2.3 Transcription of names into Hebrew (for names not in §3)
- Consonants: k `ק`, kh `ק` (with a note), g `ג`, gh `ג`, c `צ׳`, ch `צ׳`, j `ג׳`, jh `ג׳`, ṭ / t `ט`, ṭh / th `ת`,
  ḍ / d `ד`, ḍh / dh `ד`, ṇ / n `נ`, p `פ`, ph `פ`, b `ב`, bh `ב`, m `מ`, y `י`, r `ר`, l `ל`, v `ו` (`וו` inside a
  word where it could be read as a vowel), ś / ṣ `ש`, s `ס`, h `ה`, ṃ / ṁ `מ`, ḥ `ה` (or dropped at the word end).
  Avestan: ϑ `ת`, δ `ד`, γ `ג`, x `ח`, xᵛ `חוו`, š / ṣ̌ `ש`, ž `ז`, ŋ `נ`, β `ב`, f `פ`, z `ז`.
- Vowels: final -a `־ָה` (`אִינְדְּרָה`, `וַרוּנָה`), medial ā `א` where it helps (`נָארַדָה`), i / ī `י`, u / ū `ו`,
  e `ֵ`, o `וֹ`, ai `ַי`, au `ָאוּ`, ṛ `רִ` (`וְרִטְרָה`).
- **Vocalize every name at its first occurrence in each file** (the verifier checks the names of §3.1), and the names of
  §7 at every occurrence.

## 3. Names (binding; checked by script: where the source regex matches the folded line, the Hebrew must be in it)
Rows marked **(RV 7)** or **(RV 2)** apply to the whole-book projects only – Book 7 (Round 7 run 1) and Book 2 (Round 8 run 3) – both kinds to both books. The regex is matched on the **folded** source (`vedic_tools.py` `fold`: lower case, no accents or diacritics, ś/ṣ/š =
s, ṛ = r, ϑ = th, ə = e, spaces around words). A name used as a common noun in another text (Agni = fire, Mitra =
friend, Vṛtra = obstacle) is written here only for the texts where it is a name (§3.2 says how the common noun is
rendered).

### 3.1 The table
| Source name | folded regex | Hebrew | ★ | Note |
|---|---|---|---|---|
| Indra | ` indr(?!iy)` | `אִינְדְּרָה` |  | the storm and warrior god; Av. Indra a demon (Vd 10.9) |
| Vṛtra (RV 1.32) | ` vrtr` | `וְרִטְרָה` |  | "the Obstruction" (√*vr̥* "cover, block"); the dossier's form |
| Tvaṣṭṛ | ` tvast` | `תְּוַשְׁטָר` |  | the divine craftsman (the dossier's form) |
| Dānu (1.32.9) | ` danu` | `דָּאנוּ` |  | Vṛtra's mother |
| Varuṇa | ` varun` | `וַרוּנָה` |  | lord of the truth-order and its fetters (AB: the god who demands the son) |
| Mitra–Varuṇa (ŚB 1.8.1.7) | ` mitravarun` | `מִיטְרָה וְוַרוּנָה` | ★ |  |
| Soma | ` som(?!a )` | `סוֹמָה` | ★ | the pressed drink and its god (`סומה` "blind") |
| Yama | ` yam(?:a\|ah\|am\|asya\|aya\|ena\|e\|o\|au\|ad\|an)\b` | `יָמָה` | ★ | "Twin"; the first mortal, king of the dead (`ימה` "to the sea") |
| Yamī | ` yami\b\| yamy\b\| yamyah\b\| yamyam\b` | `יָמִי` | ★ | his twin sister (`ימי` "days of") |
| Vivasvant | ` vivasv` | `וִיוַסְוַנְט` |  | father of Yama and Manu (Av. Vīuuaŋhvant, the cognate) |
| Saraṇyū | ` saranyu` | `סַרַנְיוּ` |  | Tvaṣṭṛ's daughter, Yama's mother (10.17) |
| Pūṣan | ` pus(?:a\|an\|anam\|nah\|ne\|nas\|na)\b` | `פּוּשָׁן` |  | guardian of roads and of the dead's way |
| Savitṛ | ` savit` | `סַוִיטָר` |  | the Impeller |
| Sarasvatī | ` sarasvat(?:i\|y)` | `סַרַסְוַתִי` |  | river and goddess |
| Aditi | ` aditi\b\| aditer\b\| aditeh\b` | `אַדִיטִי` | ★ | "Boundlessness", mother of the Ādityas (10.72) |
| Bṛhaspati | ` brhaspat` | `בְּרִהַסְפַּתִי` |  | Lord of the Formulation |
| Brahmaṇaspati | ` brahmanaspat` | `בְּרַהְמַנַסְפַּתִי` |  | the same god (10.72.2) |
| Prajāpati | ` prajapat` | `פְּרַגָ'אפַּתִי` |  | "Lord of creatures / offspring" (10.121.10; AB 7) |
| Hiraṇyagarbha | ` hiranyagarbh` | `עֻבַּר הַזָּהָב` |  | translated (an epithet): "the golden embryo" |
| Viśvakarman | ` visvakarm` | `וִישְׁוַקַרְמַן` |  | "All-Maker" |
| Mātariśvan | ` matarisv` | `מָאטַרִישְׁוַן` |  |  |
| Rudra | ` rudr` | `רוּדְרָה` |  |  |
| Parjanya | ` parjany` | `פַּרְגַ'נְיָה` |  | the rain god (7.103) |
| Aṅgiras(es) | ` angir` | `אַנְגִּירַס` |  | the ancestral priest-seers (10.14) |
| Agni (RV) | ` agn` | `אַגְנִי` |  | **RV only**: the fire is the god; elsewhere *agní* "fire" = `אֵשׁ` (§3.2) |
| Manu | ` man(?:u\|uh\|ur\|um\|una\|ave\|oh\|or)\b` | `מָנוּ` | ★ | the first sacrificer, father of mankind; the flood's survivor (`מנו` "they counted") |
| Hariścandra | ` hariscandr` | `הַרִישְׁצַנְדְּרָה` |  | the king (AB 7.13) |
| Rohita (AB) | ` rohit` | `רוֹהִיטָה` |  | his son |
| Nārada | ` narad(?!h)` | `נָארַדָה` |  | the sage |
| Śunaḥśepa | ` sunahsep` | `שׁוּנַהְשֵׁפָּה` |  | "Dog's Tail" (a note) |
| Ajīgarta | ` ajigart` | `אַגִ'יגַרְטָה` |  | his father; Sauyavasi `סָאוּיַוַסִי` |
| Viśvāmitra | ` visvamitr` | `וִישְׁוָמִיטְרָה` |  |  |
| Vasiṣṭha | ` vasisth` | `וַסִישְׁטְהָה` |  |  |
| Naciketas | ` naciket` | `נַצִ'יקֵטַס` |  | (KU) |
| Vājaśravas(a) | ` vajasrav` | `וָאגַ'שְׁרַוַס` |  | his father (KU) |
| Mṛtyu (Death) | ` mrtyu` | `מָוֶת` |  | translated, a name without the article (KU; RV 10.18): always vocalized (§7) |
| Mārkaṇḍeya | ` markandey` | `מַרְקַנְדֵּיָה` |  | the narrator (MBh) |
| Himavat (Himālaya) | ` himavat(?:ah\|as)\b` | `הִימָוַנְט` |  | the snow-mountain (MBh 3.185) |
| Naubandhana | ` naubandhan` | `נָאוּבַּנְדְהַנָה` |  | "Ship-Binding", the peak (a note) |
| Ahura Mazdā | ` ahur\w* mazd` | `אֲהוּרָה מַזְדָּה` |  | (Vd) "the Wise Lord" |
| Zaraθuštra | ` zarathustr` | `זָרָתוּשְׁטְרָה` |  | (Vd) |
| Yima | ` yim(?:a\|o\|ai\|ahe\|em\|om\|e)\b` | `יִימָה` | ★ | (Vd) = Vedic Yama (a cognate pair: the note) |
| Virāj | ` viraj(?!o )` | `וִירָאג'` |  | (10.90.5) the female principle born from the Man |
| the Sādhyas | ` sadhy` | `הַסָּאדְהְיָה` |  | (10.90) a class of ancient gods |
| Mārtāṇḍa | ` martand` | `מָארְטָאנְדָּה` |  | (10.72.8–9) "from the dead egg" |
| Ārmaiti | ` a?ra?mait` | `אָרְמַאִיטִי` |  | (Vd 2.10) the earth's goddess, "Right-mindedness" |
| Airyana Vaējah | ` airii?ene vaejah` | `אַירְיָנֶם וַאֵגָ'ה` |  | (Vd 2.20) "the Aryan Expanse" |
| Aryaman (RV 7) | ` aryam` | `אַרְיַמַן` |  | the Āditya of hospitality and of the bride's escort (Round 7 run 1) |
| Bhaga (RV 7) | ` bhag(?:a\|ah\|o\|am\|asya\|aya\|ena\|e)\b` | `בְּהַגָה` |  | the Āditya "Portion, Fortune" (7.41); the common noun *bhága* "portion" takes `[היתר שם: …]` |
| the Ādityas (RV 7) | ` aditya` | `אָדִיטְיָה` |  | Aditi's sons (Mitra, Varuṇa, Aryaman, Bhaga …); `הָאָדִיטְיָה` |
| the Maruts (RV 7) | ` marut` | `מַרוּטִים` | ★ | the storm troop, Rudra's sons (`מרוטים` "plucked": always vocalized) |
| the Aśvins (RV 7) | ` asvin` | `אַשְׁוִינִים` |  | the twin horsemen (precedent `האשוינים`, AB, RV 10.17) |
| Nāsatya (RV 7) | ` nasaty` | `נָאסַטְיָה` |  | the Aśvins' name ("the Nāsatyas") |
| Viṣṇu (RV 7) | ` visnu` | `וִישְׁנוּ` |  | the god of the three strides (precedent KU 3.9b) |
| Sudās (RV 7) | ` sudas(?!am\b)` | `סוּדָאס` |  | the Tṛtsu-Bharata king, Vasiṣṭha's patron (7.18, 7.33, 7.83) |
| the Tṛtsus (RV 7) | ` trts` | `טְרִטְסוּ` |  | Sudās's clan |
| the Bharatas (RV 7) | ` bharat(?:ah\|asya\|aya\|anam\|am\|ebhyah\|aih\|an\|as)\b` | `בְּהַרַטָה` |  | Sudās's people (Agni Bhārata) |
| Divodāsa (RV 7) | ` divodas` | `דִּיווֹדָאסָה` |  | Sudās's ancestor |
| Paijavana (RV 7) | ` paijavan` | `פַּיְגַ'וַנָה` |  | Sudās's patronymic |
| Agastya (RV 7) | ` agasty` | `אַגַסְטְיָה` |  | the seer (7.33) |
| Urvaśī (RV 7) | ` urvas` | `אוּרְוַשִׁי` |  | the apsaras, Vasiṣṭha's mother (7.33) |
| Kutsa (RV 7) | ` kuts` | `קוּטְסָה` |  | Indra's charioteer-companion |
| Śambara (RV 7) | ` sambar` | `שַׁמְבַּרָה` |  | the Dāsa chief of the ninety-nine forts |
| Paruṣṇī (RV 7) | ` parusn` | `פַּרוּשְׁנִי` |  | the river of the battle of the ten kings (7.18) |
| Yamunā (RV 7) | ` yamun` | `יַמוּנָה` |  | the river (7.18.19) |
| Dadhikrā(van) (RV 7) | ` dadhikr` | `דַּדְהִיקְרָא` |  | the divine racehorse (7.44) |
| Vāstoṣpati (RV 7) | ` vastospat` | `וָאסְטוֹשְׁפַּתִי` |  | "Lord of the dwelling" (7.54–55) |
| the Ṛbhus (RV 7) | ` rbhu` | `רִבְּהוּ` |  | the three craftsmen-gods (7.48) |
| Sarasvant (RV 7) | ` sarasvan` | `סַרַסְוַנְט` |  | Sarasvatī's male counterpart (7.96) |
| Vaiśvānara (RV 7) | ` vaisvanar` | `וַאישְׁוָנָרָה` |  | "belonging to all men", Agni's epithet, transliterated |
| Jātavedas (RV 7) | ` jatavedas` | `יודע־הנולדים` |  | Agni's epithet, translated (precedent RV 10.16) |
| Apāṃ Napāt (RV 7) | ` apam napat` | `נכד המים` |  | the fire in the waters, translated (7.34–35, 47) |
| Mitra (RV 7) | ` mitr(?:a\|ah\|o\|am\|asya\|aya\|ena\|e\|au\|as\|ayoh)\b` | `מִיטְרָה` | ★ | alone (the god); the common noun *mitrá* "ally" takes `[היתר שם: …]` (part 1) |
| Bhāratī (RV 7) | ` bharati` | `בְּהָארַטִי` |  | the goddess of the Āprī hymns (7.2.8) |
| Nahus (RV 7) | ` nahus` | `נַהוּשׁ` |  | an ancestral people / king (7.6.5) |
| Jarūtha (RV 7) | ` jaruth` | `גָ'רוּתָה` |  | a demon slain by Agni (7.1.7, 7.9.6) |
| Gṛtsamada (RV 2) | ` grtsamad` | `גְּרִטְסַמַדָה` |  | the poet family of Book 2 (pl. "the Gṛtsamadas" `בני גְּרִטְסַמַדָה`, as *vásiṣṭhāḥ*; Round 8 run 3) |
| Śuṣṇa (RV 2) | ` susn` | `שׁוּשְׁנָה` |  | the demon "Hisser" slain by Indra (2.14, 2.19) |
| Dabhīti (RV 2) | ` dabhit` | `דַּבְּהִיטִי` |  | Indra's protégé (2.13, 2.15) |
| Sinīvālī (RV 2) | ` siniva` | `סִינִיוָאלִי` |  | the goddess of the new moon and of offspring (2.32) |
| Rākā (RV 2) | ` rak(?:a\|am\|e)\b` | `רָאקָא` |  | the goddess of the full moon (2.32) |

### 3.2 Common nouns that are names elsewhere
- *agní* outside the RV (ŚB, AB, KU, MBh): `אֵשׁ` (the fire), and `אַגְנִי` only where the text speaks of the god.
- *sū́rya* `שֶׁמֶשׁ` (the RV's Sun is both; one Hebrew), *uṣás* `שַׁחַר` (the dossier), *dyú / dyáus* `שָׁמַיִם`
  (Father Sky in 10.10 and 1.32: `שָׁמַיִם`, a name without the article where personified), *pr̥thivī́* `אֶרֶץ`,
  *dyā́vāpr̥thivī́* `שָׁמַיִם וָאָרֶץ`, *vā́ta / vāyú* `רוּחַ` (§5.2).
- *mitrá* as a common noun "ally, friend" (10.34) = `רֵעַ` (vocalized).
- *Ka* "Who?" (10.121's refrain, read as a god's name in the Brāhmaṇas): the question `לְאֵיזֶה אֵל`; the god Ka only in
  the apparatus.

## 4. Grammar mapping (Vedic Sanskrit → Hebrew)
- **Imperfect, aorist and perfect of narrative → Hebrew past** (no vav-consecutive). The **injunctive** (the augmentless
  form: `vocam`, 1.32.1a) has no tense of its own: past or present by context, with a note. The **perfect** of a state
  (`véda` "knows") → present. The **present** → present or habitual.
- **Subjunctive, optative, imperative → future, wish (`יְהִי`, `נָא`), command.** The Brāhmaṇas' optative of rule
  (`juhuyāt` "he should offer") → `יַקְרִיב`-type future with the sense of a rule.
- **Participles** → Hebrew participles; the **absolutive** (-tvā, -ya: "having done") → a subordinate clause (`אחרי
  ש…`, `ב…`) or a coordinated past; **infinitives** → the Hebrew infinitive.
- **Middle voice** → reflexive only where it is reflexive; the **passive** (-ya-, the past participle in -ta) → נפעל /
  פֻּעַל.
- **Causatives** (-aya-) → הפעיל / פיעל by function (*janáya-* `הוֹלִיד`, *pāraya-* `הֶעֱבִיר`).
- **The dual** → `שְׁנֵי` / the Hebrew dual where natural (the twins, Heaven-and-Earth).
- **Cases:** instrumental `בְּ־` / `עַל יְדֵי`; dative `לְ־`; ablative `מִ־`; locative `בְּ־` / `עַל`; genitive `שֶׁל` or
  the construct.
- **Compounds:** a bahuvrīhi ("having X") → `בַּעַל X` / `שֶׁ־X לוֹ`, a tatpuruṣa → the construct; with a note on the
  compound in the פירוק.
- **Avestan** (Young Avestan of the Vīdēvdād) by the same rules; its *āat̰* "then" `אָז`, the question formula
  `pərəsat̰ … ahurəm mazdąm` (§8), and its dual / ablative as in Sanskrit.

## 5. Key terms (one source lemma = one Hebrew word; tags in the apparatus)
### 5.0 Echo control in a corpus that never met Israel
The Vedic and Avestan texts had **no contact with Israel** (Iran's contact with Judah came centuries after these texts
took shape, and the Vīdēvdād's written form is late: the note says so where it matters). Every parallel is a shared
motif, not a source: the apparatus says so in words (guidelines §1, §6.4). The cross-language principles of guidelines
§6.7 (2026-10-30) apply: the Akkadian corpora's cognate reservations (`עָבַר` *ebēru*, `לָקַח` *leqû*, `נָשָׂא`, `קָרָא`,
`שָׂם` …) **do not apply** here; the natural Hebrew by sense, [equivalent]. What is reserved here is the vocabulary of
the Bible passages the corpus is compared with (Gen 1–3, 6–9, 22; Lev 18): **§5.1–§5.2 and the tool's RESERVED list**.

### 5.1 The beginning (RV 10.129, 10.121, 10.72, 10.190, 10.90)
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *ásat* / *sát* | `אַיִן` / `יֵשׁ` | `תֹּהוּ` | "non-existent / existent"; the philosophical Hebrew pair (with a note that it is ours) |
| *ágre* | `בַּתְּחִלָּה` | `בְּרֵאשִׁית` (reserved) | "at the front, in the beginning": Gen 1:1 in the apparatus [equivalent] |
| *prathamá* | `רִאשׁוֹן` |  |  |
| *támas* | `חֹשֶׁךְ` [equivalent] (gated: only *támas*) |  | 10.129.3 "darkness hidden by darkness" ↔ Gen 1:2 |
| *salilá* | `נַחְשׁוֹל` | `תְּהוֹם`, `מַיִם` | "flood, surge" (Grassmann "wogendes Wasser"): a word that is not Gen 1:2's |
| *ámbhas* | `מַיִם` | `תְּהוֹם` | 10.129.1d; *ā́pas* also `מַיִם` (a shared word, noted at their lines) |
| *gáhana* / *gabhīrá* | `אֵין לוֹ חֵקֶר` / `עָמֹק` | `תְּהוֹם` | "impenetrable" / "deep" (10.129.1d) |
| *rájas* | `מֶרְחָב` | `רָקִיעַ` | "the airy space, the middle realm" |
| *vyòman* | `מָרוֹם` | `רָקִיעַ` | *paramé vyòman* = `בַּמָּרוֹם הָעֶלְיוֹן` |
| *antárikṣa* | `חֲלַל הָאֲוִיר` | `רָקִיעַ` | the intermediate space |
| *ékam* | `אֶחָד` (*tád ékam* `הָאֶחָד הַהוּא`) |  | Deut 6:4 only in the apparatus (a link through the Hebrew) |
| *tápas* | `לַהַט` |  | "heat, (ascetic) ardour" |
| *kā́ma* | `חֵשֶׁק` | `תְּשׁוּקָה` (reserved: Gen 3:16) | the Hesiod corpus's ἔρος |
| *mánas* | `מַחְשָׁבָה` |  | "mind, thought" (the dossier's note at 1.32.8b "דעת" is a gloss) |
| *rétas* | `זֶרַע` [equivalent] (gated) |  | "seed, semen" (10.129.4–5); *bī́ja* (MBh) and Av. *taoxman* also `זֶרַע` (one Hebrew, three source words: noted) |
| *svadhā́* | `כֹּחַ עַצְמִי` (10.129) / `סְוַדְהָא` + note (the funeral hymns, the call to the Fathers) |  | a split by sense, recorded |
| *√sr̥j*, *visŕ̥ṣṭi* | `שִׁלַּח`, `הַשְׁלָחָה` | the root ברא (never) | "let go, emit"; the noun keeps the verb's root |
| *√bhū*, *ā́ √bhū* | `נִהְיָה` / `הָיָה` | the root ברא | "become, come into being" |
| *√as* | `הָיָה` |  | "be" |
| *√jan*, caus. *janáya-* | `נוֹלַד`, `הוֹלִיד` (dossier: `בהולידך`) |  |  |
| *gárbha* | `עֻבָּר` |  | 10.121.1, 7 |
| *√kr̥* | `עָשָׂה` |  |  |
| *√takṣ* | `חִשֵּׁל` throughout (the dossier) |  | "fashion, carve, forge" |
| *√dhā* | `הֶעֱמִיד` (and `שָׂם` by sense); *dhātár* = `הַמַּעֲמִיד` (§11.1) | `הַמְּסַדֵּר` (`סֵדֶר` = *r̥tá*) |  |
| *r̥tá* | `סֵדֶר` | `צֶדֶק`, `חֹק` | "the cosmic truth-order"; Av. *aša* (its cognate) also `סֵדֶר` [cognate across Indo-Iranian] |
| *satyá* | `אֱמֶת` |  |  |
| *púruṣa* | `אָדָם` [equivalent] (gated) | `אִישׁ` | 10.90 the cosmic Man (the name Puruṣa in the apparatus); ŚB 1.2.3 a human victim |
| *nár / nŕ̥* | `גֶּבֶר` |  |  |
| *mártya* | `בֶּן תְּמוּתָה` |  | "mortal" |
| *mánuṣa / mā́nuṣa / manuṣyà* | `אֱנוֹשׁ` / `אֱנוֹשִׁי` |  | "human (Manu's kin)"; the name Manu `מָנוּ` |
| *jána* | `עַם` / `אֲנָשִׁים` by sense |  |  |
| *rūpá* | `צוּרָה` | `צֶלֶם`, `דְּמוּת` (never) | Gen 1:26 in the apparatus |
| *devá* | `אֵל`, pl. `אֵלִים` (always vocalized) | `אֱלֹהִים` (never) | the hymns' gods; *devī́* `אֵלָה` |
| *ásura* | `אַסוּרָה` + note ("lord", the Av. *ahura*) |  |  |
| *yajñá*, *√yaj* | `זֶבַח`, `זָבַח` | `קָרְבָּן` | the same root in both (10.90.16 *yajñéna yajñám ayajanta*) |
| *havís* | `מִנְחָה` |  | "oblation" (10.121's refrain) |
| *√hu*, *āhuti* | `נָסַךְ`, `נֶסֶךְ` | `עֹלָה` (never) | pouring into the fire (ŚB 1.8.1.7, 9) |
| *√vidh* | `כִּבֵּד` |  | the refrain of 10.121 (§8) |
| *paśú* | `בְּהֵמָה` |  | "domestic / sacrificial animal" |
| *bráhman* (n.) | `נֹסַח` |  | "sacred formulation"; *brāhmaṇá* (a priest) `בְּרַהְמִין`; *brahmán* (m., a priest) `כֹּהֵן־הַנֹּסַח` |
| *r̥ṣi* | `חוֹזֶה` |  | "seer"; *saptarṣi* `שִׁבְעַת הַחוֹזִים` |
| *kaví* | `מְשׁוֹרֵר` |  | "poet-sage" |
| *hŕ̥d* | `לֵב` |  |  |
| *loká* | `עוֹלָם` (*pitr̥loká* `עוֹלַם הָאָבוֹת`, *svargá loká* `עוֹלַם הָאוֹר`) | `מֶרְחָב` (= *rájas*) | "free space, world": settled 2026-10-30 (§11.1) to keep *rájas* `מֶרְחָב` alone |

### 5.2 The serpent and the waters (RV 1.32; the dossier's renderings, §9)
| Source | Hebrew | Note |
|---|---|---|
| *áhi* | `נָחָשׁ` (gated) | the dossier's comparison word; Av. *aži* also `נָחָשׁ` |
| *ā́pas* | `מַיִם` |  |
| *samudrá* | `יָם` |  |
| *vájra* | `וַגְ'רָה` (the dossier: `הַוַּגְ'רָה`) | Indra's weapon |
| *párvata* | `הַר` | ; *girí* also `הַר` (shared, noted) |
| *√han* | `הָרַג` |  |
| *dhenú* / *gó* | `פָּרָה` |  |
| *māyā́* | `תַּחְבּוּלָה` | not `כְּשָׁפִים` (Maqlû's) |

### 5.3 The flood (ŚB 1.8.1, MBh 3.185, Vd 2)
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *ógha* | `שֶׁטֶף` | `מַבּוּל` (never) | "torrent, flood"; Gen 6–9 and the Mesopotamian corpus's *abūbu* = `מַבּוּל` in the apparatus |
| *saṃplava* / *jalaplava* (MBh) | `הֲצָפָה` | `מַבּוּל` |  |
| *náu* | `סְפִינָה` | `תֵּבָה` (never) | as *elippu* in the flood corpus |
| *mátsya* / *jhaṣa* | `דָּג` / `דַּג` (one Hebrew; noted) |  |  |
| *śŕ̥ṅga* | `קֶרֶן` |  | the fish's horn; MBh's *śr̥ṅga* of Himavat "peak" = `פִּסְגָּה` |
| *pā́śa* | `חֶבֶל` |  |  |
| *girí* | `הַר` |  | ŚB's "this northern mountain" `הָהָר הַצְּפוֹנִי הַזֶּה` |
| *pāraya-* (√*pr̥*) | `הֶעֱבִיר` | `הִצִּיל` | "carry across (the flood)", "save": the Hebrew keeps the image (a note) |
| *prajā́* | `צֶאֱצָאִים` | `בְּרִיּוֹת` (the root ברא) | "offspring, creatures" |
| *prajā́ti* | `הוֹלָדָה` |  |  |
| *prajā́kāma* | `מִשְׁתּוֹקֵק לְצֶאֱצָאִים` |  |  |
| *duhitár* | `בַּת` |  |  |
| *yóṣit* | `אִשָּׁה` (vocalized where `אִשֶּׁה` could be read) |  |  |
| *bī́ja* | `זֶרַע` (gated) |  | MBh 3.185.30's "all the seeds" ↔ Gen 7:3 `לְחַיּוֹת זֶרַע` |
| Av. *vara* | `מִתְחָם` |  | Yima's enclosure (the name *vara* in the note) |
| Av. *taoxman* | `זֶרַע` (gated) |  | Vd 2.25–28 |
| Av. *zima* | `חֹרֶף` |  | ↔ Gen 8:22 `וְקַיִץ וָחֹרֶף` |
| Av. *xšaϑra* | `מַלְכוּת` |  |  |
| Av. *daēnā* | `הַשְׁקָפָה` | `דָּת` (*dāta*'s) | as the Gāthās (`../האווסטה/renderings.md` §5.2); in Young Avestan "religion" (Vd 2.1's note). Was `דָּת` until the 2026-11-13 harmonization (§11.22): `דָּת` belongs to *dāta*, the source of the Hebrew loan |
| Av. *gaēϑā* | `בַּעֲלֵי הַחַיִּים` | the root יצר | "the living beings, the living world"; *astuuant* "bony, material" = `בַּעַל עֲצָמוֹת` |
| Av. *maṣ̌iia* | `אָדָם` |  | "man, mortal" |
| Av. *pasu* / *staora* | `צֹאן` / `בְּהֵמָה גַּסָּה` |  | small / large cattle |

### 5.4 The binding (AB 7.13–18, ŚB 1.2.3.6–9, KU 1)
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *yū́pa* | `עַמּוּד הַזֶּבַח` | `מִזְבֵּחַ` | the sacrificial post |
| *√bandh*, *niyojana* | `כָּפַת`, `כְּפִיתָה` | the root עקד (never) | Gen 22:9 `וַיַּעֲקֹד` in the apparatus |
| *así* | `חֶרֶב` | `מַאֲכֶלֶת` (never), `סַכִּין` | the sacrificer's blade |
| *√śas*, *viśasana* | `נִתַּח`, `נִתּוּחַ` |  | cutting up the victim |
| *śamitár* | `הַמַּשְׁקִיט` + note | `הַשּׁוֹחֵט` | "the quietener" (the euphemism kept) |
| *ā́ √labh* | `תָּפַס` |  | seizing the victim |
| *médha* | `לְשַׁד הַזֶּבַח` | `עֶצֶם` (= *ásthi* "bone") | "the sacrificial essence" (Eggeling) |
| *áśva* / *gó* / *ávi* / *ajá* | `סוּס` / `שׁוֹר` (`פָּרָה` for the cow) / `כֶּבֶשׂ` / `תַּיִשׁ` | `אַיִל`, `שֶׂה` | ŚB 1.2.3.6 |
| *vrīhí* / *yáva* | `אֹרֶז` / `שְׂעוֹרָה` |  |  |
| *putrá* | `בֵּן` |  |  |
| *√yaj* (with the son as victim) | `זָבַח` | `הֶעֱלָה לְעֹלָה` | AB's *tena yajasva* "sacrifice with him" |
| *várа* (KU, a boon) | `מַשְׁאָלָה` |  | Naciketas's three boons |

### 5.5 The Rigveda, Book 7 (Round 7 run 1; pre-set by the coordinator before the first line, from the book's commonest lemmas: `vedic_tools.py freq RV7`)
The book is a **hymnal of one priestly family** (the Vasiṣṭhas): most of its words are the words of praise, gift and
help that every hymn uses. One Hebrew per lemma, from the first line to the last (★); the precedents of RV 10 / 1.32 /
the Brāhmaṇas hold where they exist (`freq` prints them). Pre-set here (translator 1 may revise a row, with a reason, in
its Proposals; later translators follow the merged table):
| Source | Hebrew | Why / note |
|---|---|---|
| *svastí* | `שָׁלוֹם` | precedent (KU 1.9b, RV 10.14.11d, *svastidā́* `נותן השלום`); the book's refrain F6 |
| √*pā* "protect" | `שָׁמַר` (`שמר על`) | precedent RV 10.17.4; √*pā* "drink" `שָׁתָה` (another root) |
| *sádā* | `תָּמִיד` |  |
| *śám* | `אֹשֶׁר` (*śáṃ naḥ* … *bhavatu* `לאושר יהיה לנו …`) | 7.35's refrain; not `שלום` (= *svastí*) nor `טוב` (gated) |
| *vásu* | `טוּב` (n., goods) / `טוֹב` (adj.) | licensed by the gate; the gods *vásavaḥ* `הַוַּסוּ` (a name, transliterated) |
| *rayí* | `עֹשֶׁר` | precedent |
| *rā́dhas* | `מַתָּת` | "bounty, the patron's gift" |
| *rátna* | `אוֹצָר` | precedent *suratna* `רבות־האוצרות` |
| *vā́ja* | `פְּרָס` | "prize, the stake of the contest"; *vājín* `זוכה־הפרס` (the horse: `סוס זוכה־הפרס`); not `שלל` (Akk. *šallatu*'s cognate) |
| *maghávan* | `בַּעַל־הַשֶּׁפַע` | precedent; of the patrons too (pl. `בעלי־השפע`) |
| *sūrí* | `נַדְבָן` | "patron (of the sacrifice)"; not `נדיב` (= *suvidátra*, Av. *spəṇta*) |
| √*av*, *ávas* | `עָזַר`, `עֶזְרָה` | precedent `יעזרו` (RV 10.15.1d); *ūtí* `סִיּוּעַ` |
| *śárman* | `מַחְסֶה` | "shelter, refuge" |
| *áṃhas* | `מְצוּקָה` | "narrowness, distress" |
| √*pr̥* caus. (*piprtam*), √*tr̥̄* | `הֶעֱבִיר` | precedent *pāraya-*; "carry across (troubles)" |
| √*mr̥ḍ* | `רִחֵם` | precedent RV 10.34.14a; F7 |
| *sumatí* | `רָצוֹן טוֹב` | precedent RV 10.14.6c |
| *bráhman* (n.) | `נֹסַח` | precedent; *brahmakŕ̥ti* `עשיית הנוסח` |
| *dhī́* | `הֲגוּת` | precedent RV 10.10.1d; *dhītí* `הגייה` |
| *gír* | `שִׁיר` |  |
| *stóma*, √*stu*, *stotár* | `שֶׁבַח`, `שִׁבֵּחַ`, `מְשַׁבֵּחַ` | one root for the family |
| √*gr̥̄* "sing, praise", *jaritár* | `הִלֵּל`, `מְהַלֵּל` | precedent `הללו` (RV 10.15.6b) |
| √*juṣ* | `הִתְעַנֵּג` (`התענג על`) | precedent RV 10.15 |
| √*mad*, *máda* | `הִתְבַּסֵּם`, `הִתְבַּסְּמוּת` | soma's exhilaration (precedent RV 10.14.4d); not `שכרון` (Ugaritic *škrn*'s cognate) |
| *námas* | `קִדָּה` | "homage, the bow" (precedent AB 7.16.8d) |
| *havyá* | `תִּקְרֹבֶת` | "the offering"; *havís* keeps `מִנְחָה` |
| *adhvará* | `טֶקֶס` | "the (sacrificial) ceremony" |
| *hótar* | `כֹּהֵן־הַקְּרִיאָה` | precedent (AB) |
| *dūtá* | `שָׁלִיחַ` | Agni the messenger |
| *ródasī* | `שְׁתֵּי הַמַּחֲצוֹת` | "the two world-halves" (heaven and earth as a pair); *dyā́vāpr̥thivī́* keeps `שמים וארץ` |
| *sáhas*, *sūnúḥ sáhasaḥ* | `עֹז`, `בֶּן הָעֹז` | Agni "son of strength" |
| *śávas* | `עָצְמָה` | *bála* keeps `כוח` |
| *ŕ̥tāvan* | `נֶאֱמַן הַסֵּדֶר` | the cousin-cognate of Av. *aṣ̌auuan* (§11.3; guidelines §6.7) |
| *amŕ̥ta* (a god, adj.) | `בֶּן־אַלְמָוֶת` | the noun *amŕ̥ta* / *amr̥tatvá* keeps `אלמוות` (plene) |
| *jyótis* | `אוֹר` | *svàr* keeps `האור` (the sun-world: noted where both meet) |
| *ā́rya* | `אָרְיָה` ★ | transliterated with a note ("the Ārya", the poets' own people; never "Aryan" in its modern sense); `אריה` "lion": always vocalized |
| *dā́sa* / *dásyu* | `דָּאסָה` / `דַּסְיוּ` | transliterated with a note (the poets' enemies, human and demonic) |
| *rakṣás*, *yātudhā́na* | `רַקְשָׁס`, `קוֹסֵם` | 7.104: the demons and the sorcerers; not the root כשף (Akk. *kaššāpu*'s cognate, Maqlû) |
| *vr̥trá* (not the name), *vr̥trahán* | `מַחְסוֹם`, `הוֹרֵג־וְרִטְרָה` | the name Vṛtra keeps §3.1 where the text means the serpent |

### 5.6 The Rigveda, Book 2 (Round 8 run 3; pre-set by the coordinator before the first line, from `vedic_tools.py freq RV2`)
Book 2 is a hymnal of one family too (the Gṛtsamadas); **Book 7's Hebrew binds every lemma it fixed** (§5.5, §11.10–§11.20,
§11.22, and its files: `freq` and `lexmap` print them) – one Hebrew per lemma across the two books. Pre-set here, for the
words Book 2 uses much more than Book 7 or that Book 7 left open (translator 1 may revise a row, with a reason, in its
Proposals; later translators follow the merged table):
| Source | Hebrew | Why / note |
|---|---|---|
| *bṛhád vadema vidáthe suvī́rāḥ* | `נדבר נא (בקול) רם במועצה, רבי־גיבורים` | the family refrain (F9, 22 hymns): √*vad* `דיבר`, *bṛhánt* `רם` (Book 7), *vidátha* `מועצה` (Book 7; Jamison "ritual distribution" in the note), *suvī́ra* `רב־גיבורים` (Book 7); `(בקול)` for the adverbial neuter |
| *vidátha* | `מוֹעֵצָה` | Book 7's word (the ritual assembly where the gifts are shared out); *vidathya* `של המועצה` |
| √*vad* | `דִּבֵּר` | √*vac* keeps `אמר`, √*brū* `אמר` (Book 7) |
| *ukthyà* | `רָאוּי־לָאֲמִירָה` | 14× in Book 2, absent from Book 7; from *ukthá* `אמירה` (the 2026-11-13 pair) |
| *dákṣiṇā* | `שְׂכַר־הַכּוֹהֲנִים` | "the priestly gift" (in the Indra closing stanza personified as a cow, *maghónī*); RV 10.18.10c and KU 1.2a precedents; *mīḍhá* keeps the bare `שָׂכָר` (the Avestan cognate rule); *dákṣiṇa* "right / south" `ימין` / `דרום` |
| *maghónī* | `בַּעֲלַת־הַשֶּׁפַע` | the feminine of *maghávan* `בעל־השפע` |
| *r̥tú* | `עוֹנָה` | the ritual season (2.36–37 the season-cups; precedent RV 10.18.5b, 7.103.9b); *r̥túbhiḥ* `עם העונות` |
| *r̥ṇá*, *r̥ṇayā́* | `חוֹב`, `גּוֹבֵה־הַחוֹב` | precedent AB 7.13.4a (2.23.17, 2.27.4, 2.28.9) |
| *duṣvápnya* | `חֲלוֹם רַע` | 2.28.10 |
| *bheṣajá*, *jálāṣa* | `תְּרוּפָה`, `מַרְפֵּא` | Rudra 2.33 (precedents 7.46.3c, 7.35.6c) |
| *ā́gas*, *énas*, √*muc*, √*mr̥ḍ*, √*hr̥̄*, *héḷas*, *pā́śa* | `אשמה`, `עוון`, `שחרר`, `רחם`, `זעף`, `רוגז`, `חבל` | the Varuṇa vocabulary of Book 7 (§11.18); 2.27–29, 2.33; **never** the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` (§7.4) |
| *bráhmaṇas páti* | `בְּרַהְמַנַסְפַּתִי` | §3.1 (the name); *bŕ̥haspáti* `בְּרִהַסְפַּתִי` – the same god, two names, kept apart as the hymns keep them |
| *apā́ṃ nápāt* | `נכד המים` | §3.1 (RV 7) |

## 6. (reserved for the LXX layer – not applicable: no Greek)

## 7. Reserved and gated words, and traps (checked by `vedic_tools.py verify`; `gates` prints the regexes)
### 7.1 Never in a line
`אֱלֹהִים`; the root ברא (also `בְּרִיּוֹת`, `בְּרִיאָה`); `תְּהוֹם`; `תֹּהוּ` / `בֹּהוּ`; `רָקִיעַ`; `רֵאשִׁית` /
`בְּרֵאשִׁית`; `מַבּוּל`; `תֵּבָה`; `תַּנִּין` / `לִוְיָתָן` / `רַהַב`; `שְׁאוֹל`; `עֵדֶן`; `צֵלָע`; `עֵזֶר כְּנֶגְדּוֹ`;
`צֶלֶם` / `דְּמוּת`; the root עקד; `מַאֲכֶלֶת`; `שֶׂה`; `עֹלָה`; `נִיחוֹחַ`; `נְשָׁמָה`; `עֶרְוָה`; `מָאוֹר`; the root כפר;
the root שבת; `נָח` (the string of Noah: write `שָׁכַב`, `שָׁקַע`, `נִרְגַּע`).

### 7.2 Only for their source counterpart
`נָחָשׁ` (*áhi*, Av. *aži*; *sarpá* "snake", RV 10.16.6b, as the tool licenses: §11.8), `חֹשֶׁךְ` (*támas*), `רוּחַ` (*vā́ta / vāyú* – the wind; *ātmán* `נֶפֶשׁ`, *prāṇá* `נְשִׁימָה`,
*ásu* `חִיּוּת`), `זֶרַע` (*rétas*, *bī́ja*, Av. *taoxman*), `קֶשֶׁת` (*dhánus*), `אַיִל` (*meṣá*), `עָפָר` (*pāṃsú*),
`אֲדָמָה` (*bhū́mi*), `אָדָם` (*púruṣa*; Av. *maṣ̌iia*), `טוֹב` (*bhadrá*, *vásu*, *vāmá*, *sādhú*, *su-*, Av. *vohu*),
the root ברך (*āśís*, *svastí*), the root ארר (*√śap*), the root קדש (*médhya*, *yajñíya*, Av. *spəṇta*), `מִזְבֵּחַ`
(*védi*), `חַי` / `חַיִּים` / `חַיָּה` (*jīvá*, *ásu*, *ā́yus*, *mr̥gá*, Av. *gaiia*).

### 7.4 Never in a Rigveda line (the 2026-11-13 harmonization, table A row 8)
The root חטא (every form: `חֵטְא`, `חַטָּאת`, `חוֹטֵא`, `חָטָא`, `הֶחֱטִיא`, `חִטֵּא` …), `פֶּשַׁע` (and the verb), `סְלִיחָה` / `סָלַח`,
`וִדּוּי` / `הִתְוַדָּה`, `חֲרוֹן` (אַף) – never in a `>` line of the Rigveda keys (kind `rv`: projects 1, 2, 5, 6, 7). The Varuṇa
hymns ask for loosening and mercy, never for forgiveness or confession, and the Bible's vocabulary of sin would make
Psalms of them: *ā́gas* `אַשְׁמָה`, *énas* `עָוֹן`, √*muc* `שִׁחְרֵר`, √*mr̥ḍ* `רִחֵם`, √*hr̥̄* `זָעַף`, *héḷas* `רֹגֶז`. The prose texts
(AB 7, MBh 3.185, also ŚB, KU, Vd 2) are not gated: they keep `חטא` for *pāpá* / *pāpmán* (a later, nearer notion).
Checked by `vedic_tools.py verify` (`RV_RESERVED`, anchored at a word start; the verbal prefixes are a separate group
after the W prefixes; exempt: `מִפְשָׂעָה`, `תּוֹדָה` / `תּוֹדוֹת`, Asalluḫi `אסלוחי`); tested on every `>` line of the
folder (no false hit) and on bracketed forms (`ח[טא]`); selftest §10.

### 7.3 Always vocalized (traps)
`אֵל` / `אֵלִים` / `אֵלָה` / `אֵלוֹת` (gods: "to", "these"), `יָמָה` (Yama), `יִימָה` (Yima), `יָמִי` (Yamī), `מָנוּ`
(Manu), `סוֹמָה` (Soma), `מִיטְרָה` (Mitra), `אַדִיטִי` (Aditi), `מָוֶת` (and every `מות`), `אֲהוּרָה`, `אִשָּׁה` / `אִשֶּׁה`
where the fire-offering is near.

## 8. Formulas (fixed; checked by script: | F | folded-source regex | Hebrew regex | lines |)
| F | Source (folded regex) | Hebrew (regex on the unvocalized line) | Lines |
|---|---|---|---|
| F1 | `kasmai devaya havisa vidhema` | `לאיזה אל נכבד במנחה` | RV 10.121.1–9 (the refrain: "To which god shall we do honour with an oblation?") |
| F2 | `ahann ahim` | `הרג את הנחש` | RV 1.32.1c, 2a (the dossier) |
| F3 | `peresat zarathustro ahurem mazdam` | `שאל זרתושטרה את אהורה מזדה` | Vd 2.1 (the question formula) |
| F4 | `ahura mazda mainiio spenista datare gaethanam astuuaitinam asaum` | `אהורה מזדה, הרוח הנדיבה ביותר, מעמיד בעלי החיים בעלי העצמות, נאמן הסדר` | Vd 2.1 (fixed by the VD translator, §11.3; *dātar* `מעמיד` since 2026-11-02, §11.9) |
| F4b | `datare gaethanam astuuaitinam asaum` | `מעמיד בעלי החיים בעלי העצמות, נאמן הסדר` | Vd 2.39, 42, 43 (the short address) |
| F5 | `sa hovaca` | `אמר` | ŚB, AB: "he said" |
| F6 | `yuyam pata svastibhih sada nah` | `אתם, שמרו עלינו בשלום תמיד` | RV 7, the Vasiṣṭha refrain closing 76 hymns ("Do you protect us always with well-being"; Round 7 run 1) |
| F7 | `mrla suksatra mrlaya` | `רחם, טוב־השלטון, רחם` | RV 7.89.1–4c (the refrain to Varuṇa) |
| F8 | `ta apo devir iha mam avantu` | `המים האלה, האלות, יעזרו לי כאן` | RV 7.49.1–4d |
| F9 | `brhad vadema vidathe suvirah` | `נדבר נא \(בקול\) רם במועצה רבי־גיבורים` | RV 2, the Gṛtsamada refrain closing 22 hymns ("May we speak loftily at the ritual distribution, rich in heroes"; Round 8 run 3) |
| F10 | `somasya ta mada indras cakara` | `בהתבסמות הסומה את אלה עשה אינדרה` | RV 2.15.2–9d ("These things Indra did in the exhilaration of soma") |
| F11 | `sa janasa indrah` | `הוא אנשים אינדרה` | RV 2.12.1–14d ("He, o peoples, is Indra"; written `הוא – אנשים! – אינדרה`) |


## 9. Repeated lines and the dossier
- Identical folded source lines get identical Hebrew (`verify` lists every difference: justify or fix). Vd 2's three
  enlargements of the earth (2.8–11, 12–15, 16–19) and its command / execution pairs (2.25 ↔ 2.33 …) are the corpus's
  great repetitions: the later copy copies the first copy's Hebrew and changes exactly what the Avestan changes.
- **RV 1.32 and the fifth-day dossier:** `data RV1.32` shows the dossier's Hebrew for its 24 pādas. Copy it; revise only
  with a reason, and record the revision in your section of the project (the coordinator applies it to the dossier, so
  the two stay identical).

## 10. Self-test lines (`vedic_tools.py selftest`: | KEY label | expect | Hebrew |)
| Line | Expect | Hebrew |
|---|---|---|
| RV10.129 1a | ok | `לא היה אז אַיִן, ולא היה יֵשׁ;` |
| RV10.129 1a | err | `לא היה אז תהו, ולא היה יש;` |
| RV10.129 3a | ok | `חושך היה, בחושך מכוסה, בתחילה;` |
| RV10.129 1d | err | `מה היו המים, חושך עמוק?` |
| RV1.32 1c | ok | `הרג את הנחש, פילח (מעבר) למים,` |
| RV1.32 1c | err | `הרג את התנין, פילח (מעבר) למים,` |
| RV10.121 1d | ok | `לְאֵיזֶה אֵל נכבד במנחה?` |
| RV10.121 1d | err | `לאיזה אל נעבוד בקרבן?` |
| RV10.10 7a | err | `חשק ימה בא עלי, ימי,` |
| SB1.8.1 1b | err | `אל מנו הביאו מים בבוקר, והנה דג בתבה` |
| SB1.8.1 4b | err | `בשנה פלונית יבוא המבול` |
| SB1.8.1 4b | ok | `בשנה פלונית יבוא השטף` |
| RV7.86 4a | ok | `מה הייתה האשמה, וַרוּנָה, הגדולה,` |
| RV7.86 4a | err | `מה היה החטא, וַרוּנָה, הגדול,` |
| RV7.86 4d | err | `מטה אליך אלך נא – בלי ח[טא], בקידה, נמרץ.` |
| RV7.86 3d | err | `"וַרוּנָה הזה, בחרון אפו, זועף עליך."` |
| RV7.88 6c | err | `סלח לנו, (אנו) בעלי־העוון, כלפיך, בעל־התעתועים (?) –` |
| RV7.86 3c | ok | `אותו הדבר אכן אומרים לי המשוררים האחרונים:` |
| RV2.1 16d | ok | `נדבר נא (בקול) רם במועצה, רבי־גיבורים.` |
| RV2.1 16d | err | `נדבר נא גדולות במועצה, רבי־גיבורים.` |
| RV2.12 1d | ok | `הוא – אנשים! – אינדרה.` |
| RV2.28 5a | err | `התר ממני את החטא כמו חבל;` |
| AB7 15.2e | ok | `שוכבים כל חטאיו, הרוגים ביגיעה שבדרך.` |

## 11. Merged from the translators (numbered by part; the coordinator)
### 11.1 RV 10.129, 10.121, 10.72, 10.190 (translator 1; merged 2026-10-30)
- Confirmed in real lines: every pre-set row of §5.1 it met. New (binding from now on): *a-vātá* `בלי רוח` (the wind
  stays visible; `vedic_tools` now licenses `רוח` by *avāta*); *praketá* `סימן` (`אות` reserved by sense: Gen 1:14),
  *apraketá* `חסר־סימן`; *amŕ̥ta* `אלמוות` (plene, as Hesiod); *ābhú* `הַנִּהְיֶה`; *bándhu* `קרבה` / `קרוב`;
  *raśmí* `מיתר`; *sám √vr̥t* `התהווה` (the formula *sám avartata ágre* `התהווה בתחילה`); √*an* `נשם`; *visárjana*
  `שילוח`; *páti* `אדון`; √*dhr̥* `החזיק`; √*stambh* `תמך`; √*dr̥h* `מוצק`; *dhárman* `יסוד`; *nā́ka* `הכיפה`; *ásu*
  `חִיּוּת`; *dákṣa* (common noun) `כשרון`; *yugá* `עידן`; *ā́śā* `פאות`; *uttānápad* `פשוקת־הרגליים`; *bhū́* `אדמה`;
  *sám √dham* `נפח`, *karmā́ra* `נַפָּח` (the natural smith's verb, tagged against Gen 2:7); *reṇú* `אבק`; √*kl̥p* caus.
  `ערך`; *vaśín* `מושל`; *ví √dhā* `חילק`; *ahorātrá* `ימים ולילות`; *arṇavá* `גועש`; *svàr* `האור`. Names: Dakṣa
  `דַּקְשָׁה`, Rasā `רַסָה`, Mārtāṇḍa `מָארְטָאנְדָּה`, the Yatis `יַתִּים` (always vocalized: "orphans").
- **Rulings:** *dhātár* = `הַמַּעֲמִיד` (accepted: `סֵדֶר` is *r̥tá*'s, and √*dhā* = `העמיד` keeps the root);
  *yathāpūrvám* (10.190.3b) = `זה אחר זה (?)` by the RV dictionaries (accepted; "as before", the later cyclic reading, in
  the apparatus; an open question for the user); *loká* = `עוֹלָם`, so that *rájas* keeps `מֶרְחָב` alone.
- Tool fixes (2026-10-30): the Himavat regex no longer matches the adjective *himávant* "snowy"; the `עולה` gate blocks
  only the cult forms (`העולה`, `עולות`, `לעולה`), not the participle "rising".

### 11.2 RV 10.90, RV 1.32 (translator 1, part 2; merged 2026-10-30)
- Also from part 1: *mahimán* `גדולה`, *mahitvá* `גודל`; *tuchyá* `ריקות`; √*guh* `חבוי`; ápi √*dhā* `סגור`; *addhā́*
  `בוודאות`; *aṅgá* `אכן`; *ádhyakṣa* `המשגיח`; *manīṣā́* `תבונה`; *tadā́nīm* `אז`, *tárhi* `באותה עת`; *rā́jan* `מלך`;
  *jágat* `העולם הנע`; √*īś* `שלט`; *dvipád / cátuṣpad* `בעל שתי הרגליים / בעל ארבע הרגליים`; *bála* `כוח`; *br̥hánt*
  `רם`; *pradíś* `כיוונים`; *tīvrá* `חריף`; √*nr̥t* `רקד`; *bhúvana* `ההוויות` (not `עולם`, which is *loká*'s: 10.72.7b
  changed); *saṃvatsará* `שנה`; *rā́trī* `לילה`; the closing formula *vayáṃ syāma pátayo rayīṇā́m* `נהיה נא אדוני עושר`.
- 10.90: *púruṣa* `אדם` (the name Puruṣa in a note and footnote); √*tan* + *yajñá* `פרש (זבח)`; *yajñéna yajñám
  ayajanta* `בזבח זבחו האֵלִים את הזבח`; *sarvahút* `נוסך הכל`; *amr̥tatvá* `אלמוות`; *ánna* `מזון`; *pā́da* (quarter)
  `רבע`; *ā́jya* `חמאה מזוקקת`; *idhmá* `עצים`; *samídh* `זרד`; *paridhí* `מקל־גדר`; *barhís* `מצע העשב`; the classes
  `בְּרַהְמִין`, `רָאגַ'נְיָה`, `וַאישְׁיָה`, `שׁוּדְרָה`; names Virāj `וִירָאג'`, the Sādhyas `הַסָּאדְהְיָה` (added to §3.1).
- 1.32: *vŕ̥ṣan* `פר`; *maghávan* `בעל־השפע`; *sā́yaka* `חץ`; *suta* `סחוט`; *tríkadruka* `שלושת הגביעים`; √*han* `הרג`,
  but `הנחית` where the object is the weapon (7b); √*pr̥tany* `ערך קרב`; √*yudh* `נלחם`; √*ji* `ניצח`; *vyàṃsa*
  `פרוש־הכתפיים`; *vadhá* `נשק הקטל`; *vatsá* `עגל`; *vidyút* `ברק`, *tanyatú* `רעם`, *míh* `ערפל`, *hrādúni* `ברד`;
  *śyená* `נץ`; *carṣaṇí* `עמים`. The dossier's 1.32 revised in 5a and 5d (both files identical: `verify RV1.32`).
- Tool fixes: the `עפר` licence no longer includes *reṇú* (`אבק`); the כפר gate allows the simile "like a bull / cow"
  where the source has *iva* / *ná* with a cattle word.

### 11.3 The flood: ŚB 1.8.1, MBh 3.185, Vd 2 (translator 2; merged 2026-10-30)
- F4 fixed: `אֲהוּרָה מַזְדָּה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר!` (*dātar* `עושה` → `מעמיד`, 2026-11-02, §11.9); F4b the short address
  (2.39, 42, 43). Av. *spəṇta* `נדיב` (not the root קדש: `הרוח הקדושה` would echo Ps 51:13 – open for the user);
  *aṣ̌auuan* `נאמן הסדר`; *mrū-* `אמר`, *aog-* `דיבר`, *paiti-aog-* `השיב`, *pərəs-* mid. `נועץ`; *yazata* `ראויי
  הזבח`, *māzdaiiasni* `זובחי מזדה` (Av. *yaz-* = Skt *yaj* = `זבח`); *frād-* / *vard-* `הצמיח` / `הגדיל` (not
  `פרה` / `רבה`); *vi-šu* `התרחב` / `הרחיב`; *ham-gam* / *haṇjamana* `התאסף` / `אספה`; *aŋra mainiiu* `הרוח
  המזיקה`; *raōcana* `חלון`; *miϑβara* `זוגות־זוגות`; *frakauua* `גיבן`.
- Names: Vaivasvata `מָנוּ בן וִיוַסְוַנְט`; Av. *vīuuaŋhana* `בן וִיוַנְגְהְוַנְט` (Yama, Manu and Yima visibly
  brothers); Brahmā `בְּרַהְמָה`; Vaiśaṃpāyana, Gaṅgā, Karšiptar, Uruuatat̰.nara as in the files.
- Sanskrit: √*bhr̥* `גידל`; *pralaya* `כיליון`; √*sr̥j* / *sarga* `שילח` / `שילוח` (the RV's root kept); *tapas* +
  √*tap* `התלהט להט`; *animiṣa* `שאינו ממצמץ`; *āśís* `ברכה`. Recorded splits: *éka* + *evá* `לבדו`; epic *salila*
  `מים` (the RV's *salilá* keeps `נחשול`); √*bandh* of a boat `קשר` (a victim `כפת`); *upa-* √*kl̥p* `הכין`, *ava-*
  `ערך`.
- Tool fixes: the `רוח`, `טוב`, `חי` licences widened (*vāta* in compounds, the vocative *sādho*, CAB's *gaiia*); the
  deva trap no longer fires on `אל` "to" because of an unrelated *dev*-string; `ave` prints the whole CAB record; the
  Nārada regex skips *narādhipa*.

### 11.4 The binding: ŚB 1.2.3.6–9, AB 7.13–18, KU vallī 1 (translator 3; merged 2026-10-30)
- √*yaj* with the instrumental kept (`ובו אזבח לך`, `זבח לי בו!`); *niṣ-√krī* `פָּדָה` [equivalent, Ex 13:13, 34:20 –
  open for the user]; *ni-√yuj*, *ni-√dā* `כפת`; *śā́sa* `סַכִּין` (a split from *así* `חֶרֶב`: two source words);
  *vi-√śas* `נִתַּח`; the four priests `כוהן־הקריאה` / `כוהן־המעשה` / `כוהן־הנוסח` / `כוהן־הזמרה`; *abhí-√sic* `יצק על`
  (not `משח`); *om* `אוֹם` (not `אמן`); *tathā́* `כן`; *jyéṣṭha* / *kániṣṭha* / *madhyamá* `הגדול` / `הקטן` /
  `האמצעי`; *jyaiṣṭhya* `בכורה` (open); *tāta* `יקירי`; *sákhi* `חבר` (*mitrá* is `רֵעַ`); √*car* `נדד`, the refrain
  *carā evá* `"נדוד!"`; √*jan* `נולד` throughout (the son, the teeth, the dropsy); √*labh* `השיג`; *médhya* `ראוי
  לזבח` (instead of the root קדש: the RESERVED licence stays, the rendering changes); *kimpúruṣa* `מֵעֵין־אָדָם` (not
  `מה אדם`: Ps 144:3); *pā́ṅkta* `מחומש`; *mr̥tyupāśa* `חבלי מָוֶת` [equivalent, Ps 18:5, 116:3]; *uṣṭra* `גמל` (open:
  MW "buffalo"). Names: Devarāta `דֵּוַרָאטָה`, Jamadagni `גַ'מַדַגְנִי`, Ayāsya `אַיָאסְיָה`, Madhuchandas
  `מַדְהוּצְ'נְדַס`, Gautama `גָּאוּטַמָה`; Uṣas `שַׁחַר`, the Viśve Devāḥ `כָּל־הָאֵלִים`.
- Tool fixes: the name check splits on `…`; the Agni name rule applies in the RV only; the `עֶרְוָה` gate no longer reads
  `שערות` "hairs" as ש + ערות.

### 11.5 Yama and the dead: RV 10.10, 10.14–10.18 (translator 4; merged 2026-10-30)
- *svadhā́* in the funeral hymns `סְוַדְהָא` (pl. `קריאות־הסְוַדְהָא`), *svā́hā* `סְוָאהָא` (the split from 10.129's
  `כֹּחַ עַצְמִי` recorded); 10.10: *sahaśéyya* `משכב־יחד`, *ni √gam* `בא על`, *jāmí* `אחווה` (`בני־אחווה`), *ájāmi*
  `לא־אחווה`, *pāpá* `רע` (no Lev 18 word in a line); *parā́ √i* `הלך למרחוק`; *sám √gam* `התאחד`, *saṃgámana*
  `מאחד`; *jīvaloká* `עולם החיים`; *ásunīti* `הנהגת־החִיּוּת`; *kṣám* `תבל`; √*dah* `שרף`, √*śuc* `בער`, √*tap* `להט`,
  √*hi* `שגר`; *kravyā́d* `אוכל־הבשר`, *jātávedas* `יודע־הנולדים` (translated epithets); *yóni* `רחם` (`מיטה` in
  10.18.7d: a split by sense). Names: Gandharva, Mātalī, the Kavyas, Vairūpas, Navagvas, Atharvan, Bhṛgu, Saramā, Viṣṇu,
  the Aśvins, the Vasiṣṭhas, as in the files.
- **Rulings:** *śárīra* = `גְּוִיָּה` everywhere, *tanū́* = `גוף` (RV 1.32.10b changed from `הגוף`); *svadhā́* stays
  transliterated in the funeral hymns; 10.10.14d `הסכמה טובה מאוד` kept, with its note that the echo of Gen 1:31 exists
  only in Hebrew.
- Tool fixes: `בֶּרֶךְ` "knee" licensed by *jā́nu*; the `טוב` licence covers *vásiṣṭha*.

### 11.6 The gambler and the frogs: RV 10.34, 7.103 (translator 4, part 2; merged 2026-10-30)
- *akṣá* `קובייה` (feminine), *kitavá* `מהמר`, √*dīv* `הימר`, √*krīḍ* `שיחק`, *íriṇa* `גומת ההימור`, *sabhā́*
  `בית־הוועד`, *babhrú* `החומות`, *vrā́ta* / *gaṇá* `להקה`; *maṇḍū́ka* `צְפַרְדֵּעַ` (feminine verbs, as Exod 8:2);
  *ugrá* `עז`, *dhr̥ṣṇú* `נועז` (RV 10.16.7c changed); *manyú* `כעס`; *mitrá* (friendship) `רעות`; *kr̥ṣí* / √*kr̥ṣ*
  `חריש` / `חרש`; *vā́cam akrata* `השמיעו קול`. Names: Mūjavant `מוּגַ'וַנְט`; *vibhī́daka* `וִיבְּהִידַקָה`.
- **Rulings:** *vratá* splits by sense – a god's ordinance `תקנה`, a person's observance `נדר` (*vratacārín*
  `מקיימי־נדר`); RV 10.34.11d keeps `אַגְנִי` (in the RV the fire is the god: renderings §3.2).

### 11.7 The Kaṭha Upaniṣad, vallīs 2–3 (translator 3, part 2; merged 2026-10-30)
- *śréyas* / *préyas* `הַטּוֹב` / `הַנָּעִים` (`נעים` split from *priyá* `אהוב`); *buddhí* `שכל`, *indriyá* `חוש`,
  *vijñāna* `הבנה`, *avyakta* `הבלתי־גלוי`; *bráhman* `נֹסַח` also in the Upaniṣad (*brahmaloka* `עולם הנוסח`);
  *akṣára* `הבלתי־כלה` (noted: also "syllable"); *rátha* `מרכבה`, *sā́rathi* `עגלון`, *pragraha* `מושכות`, *háya*
  `סוס`, *gocara* `מרעה`, √*yuj* `רתם`, *yoga* `רתימה`; *saṃsāra* `הסבב`; *padá* `מדרך`; *nitya* `קבוע`, *dhruvá*
  `יציב`, *dhárma* `משפט`; *kṣura* `תער`; *medhā́* `דעת`. The base (GRETIL) lacks KU 2.15 (noted at 2.14b).
- Tool fixes: the `טוב` licence covers *śreyas*; the Indra name rule skips *indriya* "sense".

### 11.8 Cross-text consistency review (merged 2026-10-30)
Pass (b) across the 20 texts, after the four translators: `lexmap` (every "more than one Hebrew" lemma judged; most are
inflection, preverbs, particles, or homographs merged by the folding: *hu* "pour" / *hū* "call", *kr̥* / *kr̥̄*, *śū́ra* /
*sū́ra*, √*āp* / *áp*), `lemma`, `grep`, and a reverse lookup of the key Hebrew words. The key words agree across the
Sanskrit texts: *devá* `אֵל`, *ātmán* `נפש`, *prāṇá* `נשימה`, *ásu* `חִיּוּת`, *tanū́* `גוף`, *śárīra* `גְּוִיָּה`, *mánas*
`מחשבה`, *pr̥thivī́* `ארץ`, *bhū́mi* `אדמה`, *dyú* `שמים`, *ā́pas* `מים`, *samudrá* `ים`, *párvata* / *girí* `הר`, *yajñá* /
√*yaj* `זבח` (Av. *yaz-* too), *havís* `מנחה`, √*hu* / *ā́huti* `נסך`, *médha* `לשד הזבח`, *paśú* `בהמה`, √*han* `הרג`,
√*bandh* / *ni-√yuj* `כפת`, *así* `חרב`, *putrá* `בן`, *pitŕ̥* `אב` / `האבות`, *mr̥tyú* `מָוֶת`, *amŕ̥ta(tva)* `אלמוות`,
*r̥tá* `סדר` (Av. *aša* too), *satyá* `אמת`, √*sr̥j* `שלח` / `שילוח`, √*jan* `נולד` / `הוליד`, √*bhū* `נהיה` / `היה`, √*kr̥*
`עשה`, *loká* `עולם`, *rájas* `מרחב`, *prajā́* `צאצאים`, and the names (Manu, Yama, Yima, Agni – `אש` outside the RV
except where the god speaks or is invoked, AB 7.16–17 –, Indra, Varuṇa, Prajāpati, Vivasvant).

**Changes (13 `>` lines, 11 rows; the פירוק and the generated files follow):**
| Lemma | Old Hebrew | New Hebrew | Lines | Reason |
|---|---|---|---|---|
| *nár / nara* | `איש` | `גבר` | KU1 2.8a, 3.9a | §5.1 *nár* `גֶּבֶר`, as MBh 3.185.54c (*naraḥ* `הגבר`) and the RV |
| *vadhá* (pl.) | `כלי־הקטל` | `נשקי הקטל` | RV1.32 6c | §11.2 *vadhá* `נשק הקטל` (5b); `כלי־ההרג` stays *vádhar*'s (9b) – no dossier pāda touched |
| √*bhū* | `נעשה` | `נהיה` | MBH3.185 13a | §5.1 √*bhū* `נִהְיָה`; `נעשה` is √*kr̥*'s passive |
| *súkr̥ta* | `המתוקן` | `העשוי היטב` | RV10.34 11b | as RV 10.15.13d and KU 3.1a |
| *iṣṭāpūrtá* | `הזבחים והנדבות` | `הזבחים ומעשי הנדיבות` | RV10.14 8b (and its note) | the earlier precedent, KU 1.8a `זבחים ומעשי נדיבות` |
| *purú* | `מרחבי (הגועש)` | `(הגועש) הרב` | RV10.10 1b | `מרחב` is *rájas*'s alone (§5.1, §11.1) |
| *uruvyácas* | `רחבת־המרחב` | `רחבת־ההיקף` | RV10.18 10b | the same: *vyácas* "extent" is not *rájas* |
| *yazata* | `ראויי־הזבח` | `ראויי הזבח` | VD2 20, 21 | §11.3's form, as RV *yajñíya* (10.14.5a, 6c; 10.18.2d) |
| *mártya* | `לבן־התמותה` | `לבן התמותה` | RV10.15 7b | §5.1 `בֶּן תְּמוּתָה`, as everywhere else |
| *vaivasvata* | `בן־ויוסונט` | `בן ויוסונט` | KU1 1.7b | as RV 10.14.1c and MBh 3.185 (1c, 10c, 11a, 51c) |
| *gharmá* | `החלבים` | `החֲלָבִים` (vocalized) | RV7.103 9d | "milks", not *médas* `חֵלֶב` "fat" (RV 10.16) |

**Splits checked and kept** (each has a line in its apparatus; the five marked + got it in this review):
- *nár* `אנשים` in VD2 41 (a pair of man and woman); *zam* `ארץ` (and `אדמה` as material, VD2 31) against RV *kṣám*
  `תבל` (+ VD2 8); Av. *dā-* `עושה` (by sense; *dātar* = `מעמיד` since 2026-11-02, §11.9) beside Skt *dhātár* `הַמַּעֲמִיד`, Av. *maṣ̌iia* `אדם` (§5.3) against
  *mártya*, Av. *mainiiu* `רוח` against *manyú* `כעס` (+ VD2 1); Av. *ahu-* "existence" `הקיום` against *ásu* (+ VD2 22);
  Av. *pasu* `צאן` against *paśú* `בהמה` (§5.3).
- *páyas* `לשד` (RV 10.17.14) beside *médha* `לשד הזבח` (+ RV10.17 14a); *suvidátra* `נדיב` (RV 10.14–10.17) beside Av.
  *spəṇta* `נדיב` (+ RV10.14 10c).
- *dhárma* `הדבר` (KU 1.21a) / `משפט`; *rūpá* `יופי` (AB 7.13.8b, the gāthā) / `צורה`; *yóni* `רחם` / `מיטה` / `קן`
  (RV 10.34.11b); *vā́c* `קול` / `מלה` / `דיבור` by sense; *dyú* "day" `הימים` (RV 10.17.11a); √*as* `נעשה` in AB 7.17.2e
  (the change of name, noted); √*bandh* of a boat `קשר`; *śā́sa* `סכין` / *así* `חרב`; *svadhā́*; *vratá*; *salilá*; the
  recorded *éka* + *evá* `לבדו`; *zam* `אדמה` in VD2 31 (Gen 2:7 tagged [divergence]).
- One Hebrew for several near-synonyms (kept, not reserved words): `מים` (*ā́pas*, *ámbhas*, *udaka*, *jala*, epic
  *salila*), `ים` (*samudrá*, *sāgara*), `גיבור` (*vīrá*, *śū́ra*), `אישה` (*strī́*, *nā́rī*, *yóṣit*, *jāyā́*), `טוב־לב`
  (*sumánas*, MBh's vocative *sādho*, *suhŕ̥daya-*).
- `נָחָשׁ` for *sarpá* (RV 10.16.6b): the tool licenses it and the entry says so; §7.2 now names it.

**Bible-comparison lines** (the key parallels of the six projects, ~55 lines): every tag fits the Hebrew of its line; no
false echo found (`חרב` / `סכין`, `כפת`, `ספינה`, `שטף`, `זבח`, `נסך` keep Gen 6–9 and 22's words out of the lines), and
the real hidden echoes are written and tagged (`חושך`, `רוח`, `זרע`, `אדמה` RV 10.18.10a, `אדם` RV 10.90, `גיבן` Vd 2.29,
`חורף` Vd 2.22). No line of the RV 1.32 dossier excerpt changed.

**Open (for the user):**
- Av. *dā-* / *dātar* against Skt *dhā* / *dhātár*: the cognate rule (*aša* = *r̥tá*) would give `מעמיד`, but F4's
  `עושה` follows the Avestan sense "create"; kept, open. **Settled 2026-11-02** (§11.9): *dātar* = `מעמיד`.
- `עושה` was then both Av. *dātar* and √*kr̥* / Av. *kar-* (`עשה`; settled 2026-11-02: *dātar* `מעמיד`); `נדיב` both *spəṇta* and *suvidátra*; `לשד` both
  *páyas* and *médha*'s head word – each recorded, none a reserved word.
- RV 10.10.13d / 14b (the one repeated-line difference `verify` lists: `תחבק` / `יחבק`) is justified by the change of
  subject.

### 11.9 2026-11-02 harmonization (the Round 5 finalization; the lead's decision)
**2026-11-02 harmonization** (the Round 5 finalization): Av. *dātar* (Ahura Mazdā's epithet) = `מַעֲמִיד` – the Hebrew of
its Sanskrit cognate *dhātár* `הַמַּעֲמִיד` (RV 10.190.3; RV 10.18), by the cousin-cognate principle (*aša* = *r̥tá* `סדר`;
guidelines §6.7, 2026-10-30, principle 3), and because `עושה` also renders Av. *kar-* / √*kr̥* in the same text
(`שעשה יִימָה`), which hid that the Avestan uses two verbs. Meaning: "establisher, creator". The verb *dā-* itself stays
by sense (*daδuuā̊* `העושה`, Vd 2.20–21; *dātō* "I was made"). Changed: F4 → `אֲהוּרָה מַזְדָּה, הרוח הנדיבה ביותר,
מעמיד בעלי החיים בעלי העצמות, נאמן הסדר`, F4b → `מעמיד בעלי החיים בעלי העצמות, נאמן הסדר` (§8); Vd 2.1, 2.39, 2.42,
2.43 (`עושה בעלי החיים` → `מעמיד בעלי החיים`, with their glosses and the note of 2.1). The open item of §11.8 is settled.

### 11.10 RV 7.1–7.9 (Book 7, translator 1 = part 1; merged 2026-11-09)
- **Binding for Book 7:** every row of the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 1). §5.5 confirmed in real lines, with **one refinement:** √*tr̥̄* simplex "cross, overcome" `עבר` (precedent 1.32.14d); `העביר` only for the causative / *prá* (as √*pr̥* caus.).
- New (selection): √*śaṃs* `קילס` (*praśastá* `מקולס`, *nárāśáṃsa* `קילוס־הגברים`) kept apart from √*stu* `שיבח` and √*gr̥̄* `הילל`; √*īḍ* `התפלל אל`, *īḷénya* `ראוי־לתפילה`; √*idh* `הצית`; *samídh* `זרד`; *ghr̥tá* `חמאה מזוקקת`; *suvr̥ktí* `שזירה טובה`, √*vr̥j* `שזר`; *arká* `זמר`, √*arc* `זימר`; *mántra* `מימרה`; *matí* `רעיון`; *vácas* `דיבור`; √*vand* `הוקיר`; *íṣ* `רענון`; *śrávas* `תהילה`; *rātí* `מתנה`; *dráviṇa* `נכסים`; √*dāś* `הגיש`; *dyumná* `הדר`; *ketú* `משואה`; *bhānú* `זיו`; *bhā́s* `נהרה`; *pā́jas* `נגה`; √*dī* `האיר`; √*śuc* `בער`, *śocís* `בערה`; √*bhā* `זרח`; √*ruc* `נצץ`; *ánīka* `פנים`; *prátīka* `חזות`; *pāvaká* `מטהר`; *śukrá* `בוהק`; *mandrá* `משמח`; *vípra* `נלהב`; *krátu* `רצון`; *cétas* `קשב`; *gr̥hápati* `אדון־הבית`; *viśpáti* `אדון־השבט`; *yáviṣṭha* `הצעיר ביותר`; *átithi* `אורח`; *sahasāvan* / *sáhasvant* `בעל־העוז`; *suvī́ra* `רב־גיבורים`; *śéṣas* `נצר`; *tánaya* `תולדה`; *ápatya* `ולד`; *púr* `מבצר`; *paṇí* `הַפַּנִי` (always vocalized); *arí* `אָרִי`; √*uruṣy* `הרחיב (ל־)`; √*hū* `קרא`; the plural *agnáyaḥ* `אַגְנִים` (the fire is the god).
- For the later parts (not met in 7.1–9; confirm in real lines): *ukthá* `אמירה`; *purohita* `המועמד־בראש`; *ŕ̥tvij* `כוהן־העונה`; *yúvan* `צעיר`; *stóma* `שבח`; *manīṣā́* `תבונה`; *ūtí* `סיוע`.
- **Recorded split** (for the round's harmonization): *havyá* `תקרובת` in Book 7 (§5.5) against `מנחה` in RV 10.14–16 (where it shares *havís*'s word).
- Names added to §3.1 (RV 7): Mitra alone, Bhāratī, Nahus, Jarūtha; Pūru `פּוּרוּ`, Iḷā `אִילָה`, Puraṃdhi `פּוּרַמְדְהִי`, Āyu `אָיוּ` are kept in the files only (their regexes would catch *purú* "much", *íḷā* "refreshment", *puraṃdhí* "plenitude", *āyú* "living").
- **Ruling (the coordinator, after the part 1 review):** *śū́ra* keeps `גיבור`, shared with *vīrá* – the precedent of RV 1.32.12c (the dossier, aligned by script) and the near-synonyms kept in §11.8; *nár* `גבר` stays apart. Review of part 1: 9 lines fixed (one Hebrew for two lemmas ×4, mood / meaning ×3, vocalization ×2).
- Tool fixes (2026-11-09): a name in -י now matches its plural -ים (`אגני` → `אגנים`); the forms of בִּקֵּשׁ (`מבקשת` …) are exempt from the `קשת` gate (`EXEMPT_WORDS`).

### 11.11 RV 7.10–7.19 (Book 7, translator 2 = part 2; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 2), with its ~35 names (7.18's tribes and kings, 7.19's adversaries and protégés) as written in its files (`אַנוּ` the Anus always vocalized: "we"). Confirmed from part 1: *yúvan* `צעיר`, *stóma* `שבח`, *r̥tvíj* `כוהן־העונה`, *ukthá* `אמירה`, *ūtí* `סיוע`.
- New (selection): √*rakṣ* `גונן על` (√*pā* keeps `שמר`; RV 10.14's `שומרים` a recorded split); √*vī* `רדף אחר` (part 1's 7.1.18c `ביקש` open for the harmonization); *havyavā́h* `מוביל־התקרובות`; *uśíj* `החפצים`; *mánman* `הרהור`; *ū́rj* `שובע`; *yáśas* `כבוד`; *śrī́* `תפארת`; *sudína* `ימים בהירים`; *amítra* `שאינם בני־רעות` (*śátru* `אויב`); *śaraṇá* `מקלט` (*śárman* `מחסה`); *vádhrivāc* `מסורסי־הדיבור`.
- **Rulings after the part 2 review** (7 lines fixed): *āśú* `מהיר`, *ajirá* `זריז` (7.11.2a changed); 7.18.4b keeps the 3rd person (*sasr̥je*). Left for the harmonization: "distribute" (√*day*, *ví* √*dhā*, *ví* √*bhaj* `חילק`).
- Tool fixes (2026-11-09): every form of בִּקֵּשׁ is exempt from the `קשת` gate (`EXEMPT_RX`); the `טוב` licence takes *su-* before a vowel (*svadhvará*); `tr`/`data` accept a bare stanza number.

### 11.12 RV 7.20–7.31 (Book 7, translator 3 = part 3; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 3). Indra's epithets: *śatákratu* `בעל־מאה־הרצונות`, *śakrá* `יכול` (√*śak* `יכל`), *ádrivant* `בעל־האבן`, *suśiprá* `יפה־השפתיים`, *svadhā́vant* `בעל־הכוח־העצמי`, *vr̥trahán* `הורג־וְרִטְרָה`; *ójas* `חוסן`, *táviṣī* `תוקף`; *samád* `התגוששות`, *yúdh* `מלחמה`, *pŕ̥tanā* `קרב`, *samaryá* `מערכה`; √*su* `סחט`, *sávana* `סחיטה`, *ándhas* `עסיס`, *índu* `טיפה`; *turá* `נמרץ` (7.2.11b changed); *árvan* `סוס דוהר` (*átya* `סוס־מרוץ`); *manīṣín* `בעל־התבונה` (*vedhás* `נבון`); √*daśasy* `חנן`; √*han* `הרג`, but `ריסק` with forts or a weapon as object.
- For the harmonization: √*san* / √*van* both `זכה`; *yúdh* `בקרב` in 7.18.7d; √*daśasy* `העניק` in 7.5.7d; *tū́ya* `מהר` beside *āśú* `מהיר`.
- Tool fix: the Bharata regex no longer matches the verb *bharate*.
- Review of part 3 (15 lines fixed). **For Book 7's final consistency pass:** *turá* `נמרץ` vs part 1's *yahvá* `נמרץ`; *vrajá* `מכלאה` vs part 1's *pā́thas* `המכלאה` (move *pā́thas*); *sudā́nu* / *sudátra* `טוב־המתנות`; *abhí √bhū* `היה עליון` vs *paramá* `עליון`; across the book *vŕ̥ṣan* / *vr̥ṣabhá* `פר`, *bhū́ri* / *purú* `רב`, *jána* / *carṣaṇí* `עמים`; with RV 10: √*kr̥p* / √*nāth*, *sūktá* / *mántra*, *jaraṇā́* / *jarás*.
- **The Old Avestan cognates (Round 7 run 2, `../האווסטה/renderings.md` §12; the cousin-language rule, guidelines §6.7: one Hebrew per cognate pair).** Follow in Book 7 from part 5 on, where Book 7 has not fixed another word: *druh* `שֶׁקֶר`; *arámati* `מְסִירוּת`; *sarvátāt* `שְׁלֵמוּת`; *mīḍhá* `שָׂכָר`; *miyédha* `סעודת הזבח`; *gnā́* `אִשָּׁה`; *íḍā* (common noun) `רוויה`; *yajatá* `הראוי לזבח`; *amr̥tatvá* `אלמוות`, *amŕ̥ta* `בן־אלמוות`, *námas* `קידה`, *ŕ̥ṣi* `חוזה`, *śraddhā́* `אמונה` (already one). **Kept as Book 7 fixed them** (splits for the lead: the report's "Cross-corpus splits"): *krátu* `רצון` (Av. `תבונה`, which is Vedic *manīṣā́*'s), *mántra* `מימרה` (Av. `מנתרה`), *hótar* `כוהן־הקריאה` (Av. `מנסך`; the Vedic precedent of AB), *ukthá* `אמירה` (Av. `מלה`), *vīrá* `גיבור` (Av. `אנשי חיל`), *gír* `שיר` (Av. `שירה`), *kaví* `משורר` (Av. `קוי`), *uśíj* `החפצים`, *vr̥trahán* `הורג־וְרִטְרָה` (Av. `הורג החוסם`).

### 11.13 RV 7.32–7.37 (Book 7, translator 4 = part 4; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 4; ~150 new words). **7.35's *śám* frame:** `לאושר יהיה לנו X` (the copula after `לאושר`, then `לנו`); no verb: `לאושר לנו X`; a second *śám*: `ולאושר`; another verb: `לאושר תנשב עלינו …`; *śambhú* `מביא־האושר`; *śáṃ yóḥ* `לאושר ולרווחה`. *vásiṣṭhāḥ* `בני וַסִישְׁטְהָה`; *apsarás* `אַפְּסַרַס`; Māna `מָאנָה` (always vocalized); *gnā́* `אִשָּׁה` (the Avestan cognate rule); *pā́thas* `נווה` (7.4.9c, 7.5.7b changed by the coordinator: *vrajá* keeps `מכלאה`); *máyas* `הנאה`; *nírr̥ti* `אֲבַדּוֹן` (the RV 10.10.11b precedent; tagged Job 28:22; open for the user).
- For the final consistency pass: √*nud* / √*cud*; √*rāj* / √*kṣā* (`מלך`); *dyukṣá* (`שמימית` 7.31.2b / `שוכן־השמים`); *suvitá* / *yós* (`רווחה`); *puraetár* (AB `מנהיג`) / *yantár*; *gábhasti* / *hásta* (`יד`); *nadī́* / *síndhu* (`נהר`); *sūnŕ̥tā* (KU `נועם דיבור` / `נדיבות`).
- Tool fix: the `טוב` licence covers *vásyas*.
- Review of part 4 (9 lines; the helper-script grammar checked pair by pair, all correct). *jánman* `לידה` (KU, AB; 7.33.10c changed). For the final pass: 7.10.2c *jánman* `התולדות`; *perú* / *pā́rya* `המעביר`; *dūrá* `מרחוק` / *āré* `רחוק`; *arbhaká* `הקטנטנים` (AB `קטנים` = *kánīyas*); √*ās* / √*sad* `ישב`.

### 11.14 RV 7.38–7.55 (Book 7, translator 5 = part 5; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 5; ~150 new words). √*sū* "impel" `האיץ`, *savá* `האצה` (√*jū* `המריץ`, √*cyu* `הניע`); *amáti* "form" `מראה` (*amáti* "poverty" `דלות`); *bhága* (common noun) `חלק`, √*bhaj* `חילק`, *bhágavant* `בעל־חלק`; √*yā* 2 "beg" `התחנן` (7.39.2b `ממהרים (?)` a recorded split); *didyút* `רומח`, *r̥ṣṭí* `כידון`; √*car* `נדד`; √*brū* `אמר`; the 7.50 refrain `אַל ימצא אותי הזוחל בפגע של הרגל`; 7.55 `הֵרָדֵם היטב!`; *anamīvá* `חסר־מחלה` (*ámīvā* `מחלה`).
- For the final pass: √*sū* / √*jū*; √*ās* / √*sad* `ישב`; √*sru* / √*kṣar* `זרם`; *jñātí* / *bándhu* `קרוב`; *śáṃtama* `המאושר ביותר` (RV 10 `נעים`).
- Tool fixes: the Bharata regex skips the imperative *bharata*; the name Rohita applies to AB only ("(AB)" rows).
- Review of part 5 (12 lines). **Tool fix (Book 7 only):** a licence of 1–3 letters must start a word (the *vam* of *tvám*, the *nr* of *satyānr̥té* no longer license), and the Avestan *gaiia* licences no longer apply to Vedic *gáya* "household"; the stricter check found 7.3.1b (*yájiṣṭha* `הזובח ביותר`, as 7.15), and added licences for *viśvā́yu*, *bhójana* (`מחיה`, the book's word) and *svapivāta*. For the final pass: *rohít* `אדום` / RV 10.15 *aruṇá* `האדומות`; pári √*vr̥j* `עקף` / *paryetár* `עוקף`; *jániman* `תולדות` / *tánaya* `תולדה`.

### 11.15 RV 7.56–7.63 (Book 7, translator 6 = part 6; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 6; ~170 words – the Maruts' ornaments and noise, the Ādityas' watching). E.g. *márya* `בחור`, *añjí* `קישוט`, *śúbh* `נוי`, *khādí* `צמיד`, √*cit* `הבחין` (*cetár* `מבחין`), *sumná* `חסד`, *dvéṣas* `שנאה`, *ánāgas* `חסר־אשמה`, *r̥jú* / *vr̥jiná* `ישר` / `עקום`, *spáś* `מרגל`, *tryàmbaka* `טְרְיַמְבַּקָה`, *drúh* `שקר` (the Avestan cognate rule). The part was finished on disk when the 5-hour limit stopped it (2026-11-09 03:10 UTC); its section was complete.
- Review of part 6 (9 lines; 7 intros aligned with their lines): √*nī* `הנהיג` (part 3; √*vah* `הוביל`) – the part's Proposals row "√*nī* `הוביל`" is superseded. For the final pass also: *árṇas* / *ūrmí* `גל`; √*r̥* / √*cyu* `הניע`; *janúṣ* / *jánman* `לידה`; *śubhrá* / √*dyut* `מבריק`.
- For the final pass: *drúh* `שקר` vs 7.16.8c `התרמית`; *sarvátāti* `שלמות` vs 7.18.19b `כליל`; *sámr̥ti* `התנגשות` (1.32.6c) / `הסתערות`; *cárman* / *tvác* `עור`; *śatín* / *śatasvín*; √*muc* `שחרר` / *práti* √*muc* `עטה`.

### 11.16 RV 7.64–7.74 (Book 7, translator 7 = part 7; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 7). The Aśvins: *mā́dhvī* `בעל־הדבש`, *dasrá* `עושה־הפלאות`, *vartís* `סבב`, *vartaní* `מסלול`, *omán* `סעד`, *chardís* `סכך`, *usrá* `ורוד`, *vadhū́* `כַּלָּה`; their protégés Atri `אַטְרִי`, Cyavāna `צְ'יַוָאנָה`, Bhujyu `בְּהוּגְ'יוּ`, Pedu `פֵּדוּ`, Jāhuṣa `גָ'אהוּשָׁה`, Sūryā `סוּרְיָא`, Śayu `שַׁיְיוּ` (the double yod: `שיו` is the `שֶׂה` gate). *nirṇíj* `מלבוש`, *gárta* `כס`, *sétu* `סכר`, *íḷā* `רוויה` (Avestan cognate); √*gr̥* "wake" intr. `ניעור`, tr. `העיר` (*járatam* 7.67.10c = 7.69.8c `העירו` after Oldenberg and Jamison, against Zurich's √*jr̥̄*: open); *śíras* `ראש`, *mūrdhán* `פסגה`; *ghraṃsá* `חום` (*tápas* `להט`); *śáru* `שֶׁלַח`; *ánirā* `כפן`; *vásiṣṭha* 7.70.6c, 7.73.3d the name (open).
- Review of part 7 (12 lines; 3 intros, 6 headers aligned). For the final pass: *vára* `מבחר` / `משאלה` (7.54.3c, 7.59.2d, KU); 7.1.23b `בן־תמותה` (hyphen); *sámbhr̥ta* `מצוידים` / MBh *yuj*.
- Tool fix (by the translator, accepted): `_find_word` takes the -י → -ים plural, as `_heb_has` does.

### 11.17 Consistency pass, RV 7.1–7.74 (merged 2026-11-09; table in `7-ריגוודה-ספר-ז/project.md`)
52 lines in 34 hymns aligned. **Binding from now on:** *drúh* `שקר`, *sarvátāti* `שלמות`, *íḷā* (common noun) `רוויה` (the Avestan cognate rule); *yahvá* / *yahvī́* `תוסס` (*turá* `נמרץ`); *sudā́nu* `טוב־המתן` (*sudátra* `טוב־המתנות`); *jániman* `דורות` (*tánaya* `תולדה`, *jánman* `לידה`); √*cud* `דרבן` (√*nud* `דחף`); √*kṣar* `ניגר` (√*sru* `זרם`); *árṇas* `משבר` (*ūrmí* `גל`); *śubhrá* `נאה` (√*dyut* `הבריק`); *suvitá* `הליכה טובה` (*yós* `רווחה`); *abhí* √*bhū* / √*as* `התעלה על` (*paramá* `עליון`); *vára* `מבחר`; *ártha* `יעד`; *yáti* / *yantár* `מרסן`; *sahasrín* `בעל־אלף`; √*cyu* `הסיע` from part 8 on (RV 10.17.3a; √*r̥* `הניע`). **Kept** (every free Hebrew collides): *janúṣ* / *jánman* `לידה`; √*ās* / √*sad* `ישב`; √*san* / √*van* `זכה`; √*bhaj* / √*day* / *ví* √*dhā* `חילק`; *vŕ̥ṣan* / *vr̥ṣabhá* `פר`; *bhū́ri* / *purú* `רב`; *gábhasti* / *hásta* `יד`; *nadī́* / *síndhu* `נהר`; √*rāj* / √*kṣā* `מלך`; *jána* `עם` / `אנשים` by sense (§5.1). Cross-corpus splits for the lead: the report.

### 11.18 RV 7.75–7.88 (Book 7, translator 8 = part 8; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 8). Uṣas the goddess `שַׁחַר` without the article, feminine verbs (pl. "dawns" `השחרים`). **The Varuṇa vocabulary (7.86–88; for 7.89 on):** *ā́gas* `אשמה`, *ánāgas* `חסר־אשמה`; *énas* `עוון`, *anenás* `חף־מעוון`; √*muc* `שחרר`; √*mr̥ḍ* `רחם`, *mr̥ḷīká* `רחמים`; √*hr̥̄* "be angry" `זעף`, *héḷas* `רוגז`; *dāsá* "slave" `עבד` (open); *súrā* `שֵׁכָר` (always vocalized; `שָׂכָר` is *mīḍhá*'s); *drugdhá* `שקר`. No word of the root חטא, nor `פשע`, `סליחה`, `וידוי`, `חרון` in Book 7's lines (the translator's proposal to reserve them is for the lead: MBh 3.185 and AB 7 use `חטא` for *pāpá* / *pāpmán*).
- For the final pass: √*bhuj* `ניזון` / `נשלם`; *úpara* `מאוחר` / `תחתון`; *bhū́man* `אזור` / 7.34.7b `אדמה`; *ūrvá* / *vrajá* `מכלאה`.
- Tool fixes: `לשאול` "to ask" is exempt from the `שאול` gate; the `טוב` licence covers *saúbhaga*, *svápas*, *ántivāma*.

### 11.19 RV 7.89–7.97 (Book 7, translator 9 = part 9; merged 2026-11-09)
- **Binding for Book 7:** the part's Decisions and Proposals (`7-ריגוודה-ספר-ז/project.md`, part 9). 7.89: *mr̥nmáya gr̥há* `בית החומר` (Job 4:19 tagged; open), F7 first copies, *dīnátā* `חולשה`, *tŕ̥ṣṇā* `צמא`, *abhidrohá* `שקר` (the √*druh* family; open); *vāyú* `רוּחַ` without the article (masc.), *indra-vāyú* `אִינְדְּרָה ורוח`, *niyút* `צמד`, *śucipā́* `שותה־הצח`; *indrāgní* `אִינְדְּרָה ואַגְנִי`; *prámati* `השגחה`; √*śrath* `התיר`; *stána* `שַׁד`; *yóni* `קן` in 7.97; names Dhiṣaṇā `דְּהִישַׁנָה`, Jamadagni `גַ'מַדַגְנִי`, *nā́huṣa* `בן־נַהוּשׁ`. First copies for part 10: 7.97.10 = 7.98.7.
- Review of part 9 (18 lines; 7.89.5b √*car* + object `נהג ב־`, not "walk in" – Jer 23:14). For the last consistency pass: *prámati* `השגחה` / 7.29.4d `דאגתנו`; 7.48.3d `בתחרות ()` (empty brackets); *saparyú* `משרתים` (7.2.4a) / `המכבדים` (7.94.10c).
- Tool fix: the Sarasvatī regex no longer matches *sárasvataḥ* (Sarasvant's genitive).

### 11.20 Consistency pass 2, RV 7.75–7.97 (merged 2026-11-09; table in `7-ריגוודה-ספר-ז/project.md`)
23 lines in 15 hymns aligned. **Binding from now on:** *prámati* `דאגה` (*ádhyakṣa* `המשגיח`); *mithatí* `מצה` (*spŕ̥dh* `תחרות`); *saparyú* `משרת` (√*sap* `שירת`; √*vidh* `כיבד`); *purā́* `לפנים`; *sadhástha* `משכן`; √*kṣi* `שכן`; *áriṣṭa* `שלא ניזוק`; √*prath* tr. `הפיץ`; √*tan* `פרש`; √*han* `הרג`; √*īr* `הניע`; *sumedhás* `טוב־הדעת`; *ā́deva* `דבק־האֵלִים`. Kept: √*sr̥* / √*sru* `זרם` (1.32.12d); √*yā* 2 `התחנן` / `ביקש` (for the lead). Open for part 10: *kīrí* (7.97.10 = 7.98.7), *dakṣā́yya*.

### 11.21 The Kaṭha Upaniṣad, adhyāya 2 = KU2, vallīs 4–6 (Round 7 run 3, translator 1; merged 2026-11-09)
- **Kept from KU1 (one Hebrew inside one text):** *ātmán* `נפש`, *bráhman* `נֹסַח` (*brahmaloka* `עולם הנוסח`), *mr̥tyú* `מָוֶת` (a name; *vimr̥tyu* `נטול־מָוֶת`), *dhīra* `חכם`, *amr̥tatva* `אלמוות`, *dhruva* `יציב`, *guhā* `הסתר`, *puruṣa* `אָדָם`, *manas* `מחשבה`, *buddhi* `שכל`, *indriya* `חוש`, *avyakta* `הבלתי־גלוי`, *yoga* `רתימה`, *vidyā* `ידיעה` (also *jñāna*, as KU1), *śarīra* `גוויה`, *agni* `האש`, but `אַגְנִי` where the text speaks of the god (4.8b, a quotation of RV 3.29.2; 6.3a, in a list of gods: §3); 6.7–6.8 = KU1 3.10–3.11 word for word; 4.4b = KU1 2.22b.
- **The refrain** *etad vai tat* `זהו, באמת, הדבר ההוא.` (identical in every occurrence).
- **New:** *svayaṃbhū* `הקיים־מעצמו`; *kha* `פתח`; *parāñc* / *pratyañc* `החוצה` / `פנימה`; *antarātman* `הנפש־שבפנים`; *pāśa* `חבל` (`חבל מָוֶת`); *araṇi* `מקל האש`; *aṅguṣṭhamātra* `בגודל אגודל`; *muni* `המתבודד` (open); *pur* `עיר`, *dvār* `שער`; *haṃsa* `ברבור`; *vyoman* `מרום` (`רקיע` reserved); *apāna* `הנשימה־הנכנסת`; *sukha* `נחת` (`אושר` stays *śám*'s); *śānti* `שקט`; harmonized with KU1 in the revision: *sanātana* `הנצחי`, *duḥkha* `סבל`, *vaśin* `המושל`, *jantu* `היצור`, pra-√*vr̥h* `הפריד`, *pūrvam* `קודם`, √*iṣ* `רצה`, pra-√*arth* `ביקש`; KU1 3.14a *ni-√budh* `למד` (as 1.14a); *aśvattha* `עץ האַשְׁוַתְּהָה` (transcribed: not `תאנה`, Gen 3:7); *sarga* `שנוצרו` (ברא is reserved); *nāḍī* `עורק`; *granthi* `קשר`; *virajas* `נקי מאבק` (the Virāj name regex of §3.1 now excludes *virajo*); the full list in `8-קטהה-אופנישד/annotated-KU2.rtl.md`.
- **Open for the review:** √*śri* `נשען` (5.8c, 6.1c) / `שוכן` (6.14a); *amr̥ta* adj. `בן־אלמוות` written plene unvocalized (the table has it vocalized); the cruxes 4.6a, 5.1b, 5.2b, 6.4, 6.5b, 6.13a (noted in the file).

### 11.22 2026-11-13 harmonization (the Round 7 finalization; the lead's table A, `../harmonization--2026-11-13.md`)
The cousin-language rule of 2026-11-02 (one Hebrew per Sanskrit / Avestan cognate pair) and one Hebrew per source word
inside the corpus; the generated files rebuilt. **Settled pairs** (also `../האווסטה/renderings.md` §12):
- *mántra* = Av. *mąϑra* `מַנְתְּרָה` (was `מימרה` in Book 7, `המזמורים` in RV 10.14.4c): RV7.7 6b, RV7.32 13a (and its
  section heading), RV7.76 4d (*satyámantra* `שמַּנְתְּרָתָם אמת`), RV10.14 4c; the intros of 7.7 and 7.76. The verbs
  *ā́-mantraya-* / *upa-mantraya-* (AB 7) are another word ("address, invite") and keep `קרא` / `מזמין`.
- *ukthá* = Av. *uxδa* `אֲמִירָה`: RV10.72 1c (was `שירי־השבח`; the same sense, the hotar's recitation); the Gāthās and
  YH followed (20 lines, there). Note: Book 7's *ucátha* (7.18.5c) also has `אמירה` – a split inside Book 7, for the lead.
- *gír* = Av. *garah* `שִׁיר`: the Gāthās and YH followed (6 lines and F7 `בית השיר`, there); no Vedic line changed.
- Av. *daēnā* `הַשְׁקָפָה` (§5.3): VD2 1, 2, 3, 4, 42 (was `דָּת`), the section heading, the notes (2.1 now says that in
  Young Avestan the word means "religion", and that `דָּת` is kept for *dāta*, the source of the Hebrew loan), the intro.
- *purā́* `לְפָנִים`: KU1 1.21a (was `מקדם`). *purājā́* (Book 7 `הנולדים מקדם`) is another lemma and keeps it (`הנולדים
  לפנים` is *pūrvajá*'s).
- Not applied: *vīrá* = Av. *vīra* `גִּבּוֹר` – in the Gāthās `גיבור` is already *taxma*'s (Y 43.4a); left for the lead.

**Inside the corpus: the earlier projects against Book 7** (table A row 7; the same lemma in the same sense takes Book 7's
Hebrew):
- *havyá* `תִּקְרֹבֶת` (*havís* keeps `מנחה`): RV10.14 15b, RV10.15 4b, 12b, RV10.16 9d, 11c (was `מנחה`).
- √*tr̥̄* "overcome" `עבר (על)` and *sámr̥ti* `הסתערות`: RV1.32 6c (was `גבר על התנגשות`; not a dossier pāda); the notes
  of 7.21.9c, 7.56.22a, 7.60.10a (`התנגש` is *sám* √*r̥*'s, 7.25.1b).
- *rakṣitár* (√*rakṣ* `גונן`) `מגונן`: RV10.14 11a (was `השומרים`; `שמר` is √*pā*'s).
- *puraetár* `ההולך־בראש`: AB7 18.6a (was `מנהיג`, which is √*nī*'s: *netrī́* `מנהיגה`).
- *śáṃtama* `המאושר ביותר`: RV10.15 4c (was `הנעים ביותר`; `נעים` is the Kaṭha's *préyas*).
- *anamīvá* `חסר־מחלה`: RV10.14 11d (a noun: `חוסר־מחלה`), RV10.17 8d, RV10.18 7c (was `בלי־חולי`).
- Kept (another lemma or sense, or already one Hebrew): √*sr̥* / √*sru* `זרם` (1.32.12d, 14c as Book 7); *arbhaká*
  `הקטנטנים` / AB *kánīyas* `קטנים` (two lemmas); *rohít* / *aruṇá* `אדום` in both books; *sujániman* `בעל הלידות
  הטובות` (RV 10.18.6c = 7.62.4b) / *jániman* `דורות`; *jaraṇā́* / *jarás* `זקנה` in both books; √*kr̥p* / √*nāth*
  `התחנן` in both books; *sūktá* `מזמור` (AB 7.16.9e as Book 7) – *mántra* is now `מנתרה`; *sámbhr̥ta* `מצוידים` (7.73.4b)
  / RV 10.90.8b `נאספה` (another sense: "gathered") / MBh *yukta* `מצויד` (another lemma – a collision for the lead).
- **The Rigveda reserves** the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` (§7.4; the gate `RV_RESERVED`, selftest §10).

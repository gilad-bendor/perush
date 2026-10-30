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
The regex is matched on the **folded** source (`vedic_tools.py` `fold`: lower case, no accents or diacritics, ś/ṣ/š =
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
| Sarasvatī | ` sarasvat` | `סַרַסְוַתִי` |  | river and goddess |
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
| Rohita | ` rohit` | `רוֹהִיטָה` |  | his son |
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
| Virāj | ` viraj` | `וִירָאג'` |  | (10.90.5) the female principle born from the Man |
| the Sādhyas | ` sadhy` | `הַסָּאדְהְיָה` |  | (10.90) a class of ancient gods |
| Mārtāṇḍa | ` martand` | `מָארְטָאנְדָּה` |  | (10.72.8–9) "from the dead egg" |
| Ārmaiti | ` a?ra?mait` | `אָרְמַאִיטִי` |  | (Vd 2.10) the earth's goddess, "Right-mindedness" |
| Airyana Vaējah | ` airii?ene vaejah` | `אַירְיָנֶם וַאֵגָ'ה` |  | (Vd 2.20) "the Aryan Expanse" |

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
| Av. *daēnā* | `דָּת` (vocalized `דָּת`/`דַּת`) |  |  |
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

## 6. (reserved for the LXX layer – not applicable: no Greek)

## 7. Reserved and gated words, and traps (checked by `vedic_tools.py verify`; `gates` prints the regexes)
### 7.1 Never in a line
`אֱלֹהִים`; the root ברא (also `בְּרִיּוֹת`, `בְּרִיאָה`); `תְּהוֹם`; `תֹּהוּ` / `בֹּהוּ`; `רָקִיעַ`; `רֵאשִׁית` /
`בְּרֵאשִׁית`; `מַבּוּל`; `תֵּבָה`; `תַּנִּין` / `לִוְיָתָן` / `רַהַב`; `שְׁאוֹל`; `עֵדֶן`; `צֵלָע`; `עֵזֶר כְּנֶגְדּוֹ`;
`צֶלֶם` / `דְּמוּת`; the root עקד; `מַאֲכֶלֶת`; `שֶׂה`; `עֹלָה`; `נִיחוֹחַ`; `נְשָׁמָה`; `עֶרְוָה`; `מָאוֹר`; the root כפר;
the root שבת; `נָח` (the string of Noah: write `שָׁכַב`, `שָׁקַע`, `נִרְגַּע`).

### 7.2 Only for their source counterpart
`נָחָשׁ` (*áhi*, Av. *aži*), `חֹשֶׁךְ` (*támas*), `רוּחַ` (*vā́ta / vāyú* – the wind; *ātmán* `נֶפֶשׁ`, *prāṇá* `נְשִׁימָה`,
*ásu* `חִיּוּת`), `זֶרַע` (*rétas*, *bī́ja*, Av. *taoxman*), `קֶשֶׁת` (*dhánus*), `אַיִל` (*meṣá*), `עָפָר` (*pāṃsú*),
`אֲדָמָה` (*bhū́mi*), `אָדָם` (*púruṣa*; Av. *maṣ̌iia*), `טוֹב` (*bhadrá*, *vásu*, *vāmá*, *sādhú*, *su-*, Av. *vohu*),
the root ברך (*āśís*, *svastí*), the root ארר (*√śap*), the root קדש (*médhya*, *yajñíya*, Av. *spəṇta*), `מִזְבֵּחַ`
(*védi*), `חַי` / `חַיִּים` / `חַיָּה` (*jīvá*, *ásu*, *ā́yus*, *mr̥gá*, Av. *gaiia*).

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
| F4 | `ahura mazda mainiio spenista datare gaethanam astuuaitinam asaum` | `אהורה מזדה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר` | Vd 2.1 (fixed by the VD translator, §11.3) |
| F4b | `datare gaethanam astuuaitinam asaum` | `עושה בעלי החיים בעלי העצמות, נאמן הסדר` | Vd 2.39, 42, 43 (the short address) |
| F5 | `sa hovaca` | `אמר` | ŚB, AB: "he said" |


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
- F4 fixed: `אֲהוּרָה מַזְדָּה, הרוח הנדיבה ביותר, עושה בעלי החיים בעלי העצמות, נאמן הסדר!`; F4b the short address
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

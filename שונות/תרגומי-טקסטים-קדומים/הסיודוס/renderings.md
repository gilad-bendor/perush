# Hesiod – the corpus renderings (binding)

The shared reference of the Hesiod corpus (`הסיודוס/`): the folder's **first Archaic Greek corpus**, Round 4 run 4.
Fixed by the coordinator before the first line (2026-10-24), from the Greek of the base text and the Septuagint, not
from the literature's paraphrase. Translators propose changes in their `project.md` section; the coordinator merges them
(§11). The tool `hesiod_tools.py` reads §3 (names), §8 (formulas) and §10 (self-test lines) from this file; the reserved
words and the traps (§7) are in the tool, and `hesiod_tools.py gates` prints them.

Greece before the Hellenistic age had **no contact with Israel**: a Hesiod line and a Bible verse can share a motif, an
inherited Near Eastern tradition (the succession myth: Kumarbi, Enūma eliš), or – through the Septuagint – a Greek word,
never a source. Every note says which (guidelines §6.4: no special tag; the note says it in words).

## 1. The texts and the base

| KEY | Text | Project folder | Lines (base) | Base |
|---|---|---|---|---|
| TH | *Theogony* (Θεογονία), `תּוֹלְדוֹת הָאֵלִים` | `1-תולדות-האלים/` | 1,042 (1–1022 + 929a–t) | Perseus `tlg0020.tlg001.perseus-grc2` |
| WD | *Works and Days* (Ἔργα καὶ Ἡμέραι), `מַעֲשִׂים וְיָמִים` | `2-מעשים-וימים/` | 831 (1–828 + 169a–d; WD 310 is not in the base) | Perseus `tlg0020.tlg002.perseus-grc2` |

- **Base text:** H. G. Evelyn-White, *Hesiod, the Homeric Hymns and Homerica* (Loeb, 1914; public domain), as encoded by
  the Perseus Digital Library (`canonical-greekLit`; markup CC BY-SA 4.0), in `../sources/Perseus--Hesiod/`.
- **Lemma and morphology:** the Perseus Ancient Greek Dependency Treebank 2.1 (`treebank_data`; CC BY-SA 3.0), in
  `../sources/Perseus-Treebank--Hesiod/`; every word aligned to its line by `../tools/perseus2md.py` (0 unaligned words
  in either poem; Th. 576–577 have no treebank words: the treebank skips those bracketed lines). **The treebank is an
  annotator's analysis**: check every parse that carries a parallel, a gate or a tense (guidelines §5.2, "A machine
  parse is a draft").
- **The line order is the base's**: Perseus prints Th. 212, 214, 213; 425, 427, 426; 429, 434, 430–433; WD 168, 170–173,
  169, 169a–d, 174; 360, 363, 361–362; 767, 769, 768 – Evelyn-White's transpositions. The Hebrew keeps that order and
  the labels.
- **The base's marks, and their Hebrew** (at the start of the `>` line, guidelines §6.8):
  - a whole line in `<del>` = a line Evelyn-White prints in square brackets (suspected as an interpolation: Th. 111,
    118, 196, 323–324, 496, 576–577, 591, 774, 929s, 1014; WD 76, 79, 93, 99, 124–125): translated in full, the `>` line
    opens with **`{חשודה}`**;
  - Th. 929a–t, in `<add>`: the variant account of Athena's birth that Galen quotes from Chrysippus (fr. 343 M-W),
    printed by Evelyn-White after 929: the `>` line opens with **`{גלנוס}`** (929s is both: `{גלנוס} {חשודה}`);
  - WD 169a–d: the Geneva papyrus lines with Evelyn-White's restorations: the `>` line opens with **`{פפירוס}`**, and
    the restored words (the base's `[ ]`) are in `[ ]` in the Hebrew.
- The source line under each `###` is the Greek exactly as the base has it (`@` + `fill`), with `[ ]` only in WD 169a–d.

## 2. Hebrew conventions

### 2.1 The hexameter line
- **One Greek line = one Hebrew line**, with the base's label. No metre, no rhyme. Hesiod's sentences run over lines
  (enjambment): keep each word in the line where it stands as far as Hebrew allows; a relative clause or an apposition
  that starts in the next line starts there in Hebrew too.
- **Epithets are fixed once** (§5, §8) and repeated exactly, also where they seem idle: the "idle" epithet is what an
  oral poem sounds like. A compound adjective becomes a construct phrase with a maqaf (`רְחַב־הֶחָזֶה`, `יְפַת־הַלְּחָיַיִם`).
- **Catalogues** (the children of Night, the Nereids, the Oceanids, the rivers, the Muses): every name in its line; the
  meaning of a speaking name goes into the note, not into the line (§3.2).
- Register: dignified literary Hebrew with a biblical-poetic texture, grammatically contemporary; no vav-consecutive;
  biblical vocabulary only where it is the natural word (guidelines §6.2) – and then the apparatus says so.

### 2.2 Greek in the Hebrew apparatus
- Greek words are quoted **in polytonic Greek, in backticks**, as the base or the treebank has them: `` `ἀρχῆς` `` –
  ἀρχή "ראשית" (the lemma unbackticked after the dash, then the Hebrew gloss in quotation marks). No Latin
  transliteration in the apparatus (the reader of the commentary reads Greek letters better than a transliteration).
- The Septuagint is quoted from Rahlfs (`python3 -I -B ../tools/lxx_verses.py show genesis 1:21`), in backticks,
  with "השבעים" and the verse: `` `τὰ κήτη τὰ μεγάλα` (השבעים, בראשית א:כא) ``. **Never put a Hebrew reference in
  parentheses after a Greek quotation**: `check_bible_quotes.py` would read it as a Hebrew quotation. Write "(השבעים,
  בראשית א:כא)" – the word השבעים first – or put the reference before the Greek.

### 2.3 Transcription of Greek names (for names not in §3)
- **The familiar Hebrew form** (the Hebrew Encyclopedia, Hebrew Wikipedia) for the gods and figures every reader knows
  (`זֵאוּס`, `הֵרָה`, `אַתֵנָה`, `אַפְרוֹדִיטָה`, `פְּרוֹמֵתֵאוּס`, `הֵרַקְלֵס` …: §3); otherwise this table, applied to
  Hesiod's own (Ionic) form:

| Greek | Hebrew | Greek | Hebrew |
|---|---|---|---|
| β γ δ ζ | ב ג ד ז | θ | ת |
| κ | ק | λ μ ν | ל מ נ |
| ξ | קס | π | פּ |
| ρ (ῥ) | ר | σ ς | ס |
| τ | ט | φ | פ (no dagesh) |
| χ | כ | ψ | פּס |
| γγ γκ γχ | נג נק נכ | initial rough breathing | ה |
| α | ַ (final ־ָה) | ε | ֶ |
| η | ֵ (final ־ָה, as the familiar Hebrew forms) | ι | ִי (before a vowel י) |
| ο, ω | וֹ | υ | ִי |
| ου | וּ | αι / ει / οι | ַי / ֵי / וֹי (between vowels with א) |
| αυ / ευ | ַאוּ / ֶאוּ | -ος -ως | ־וֹס |
| -ης / -ευς | ־ֵס / ־ֵאוּס | -ων / -ας / -ις / -υς | ־וֹן / ־ָס / ־ִיס / ־ִיס |
| -ίη -ία -εια (fem.) | ־ִיָּה / ־ֵיאָה | -ώ (fem.) | ־וֹ |

  Double consonants are written once (except γγ). A group (the Cyclopes, the Nereids) takes the Hebrew plural: `־ִים`
  masculine, `־וֹת` feminine. **Vocalize every name at its first occurrence in the file**, and always the names of §7.3.
- A biblical people or place takes its biblical name, with the Greek in the note (guidelines §6.4 rule 6): Αἰθίοπες =
  `כּוּשׁ`; Κρήτη = `כְּרֵתִים` (LXX Zeph 2:5 Κρητῶν = `כְּרֵתִים`; Crete is probably Caphtor, a note). The Nile is
  `נִילוּס` (Νεῖλος), never `יְאֹר` (an Egyptian loanword, reserved for jtrw). **Gods and Titans are never assimilated to
  biblical names**: Ἰαπετός is `יָאפֶּטוֹס`, never `יֶפֶת` (the Iapetos–Japheth equation, Gen 10:1–5, is a note).

## 3. Names (binding; checked by script: where the treebank lemma is in the line, its Hebrew must be there)

### 3.1 The table
Columns: the treebank lemma(s) (` / ` between variants) | the Hebrew (vocalized; the tool strips the niqqud and allows
the prefixes ו ה ב ל מ כ ש) | ★ = always vocalized (§7.3) | note. **A "translated" name** (T in the note) is a speaking
name rendered by the Hebrew noun of the same Greek word, without the article (§3.2); the check applies to it only where
the Greek word is capitalized in the base.

| Lemma | Hebrew | ★ | Note |
|---|---|---|---|
| Ζεύς | זֵאוּס |  | Διός, Ζηνός, Δία … all Ζεύς; the dossier's form |
| Κρόνος | קְרוֹנוֹס |  |  |
| Κρονίδης / Κρονίων | בֶּן־קְרוֹנוֹס |  | patronymic of Zeus (§5) |
| Ῥέα / Ῥείη | רֵאָה | ★ | unvocalized `ריאה` "lung", `ראה` "saw" |
| Ἥρα / Ἥρη | הֵרָה | ★ | unvocalized `הרה` "pregnant" |
| Ἀθήνη / Ἀθηναίη | אַתֵנָה | ★ | unvocalized `אתנה` "I will give" (the Etana trap) |
| Παλλάς | פַּלַּס |  | Athena's name ("Pallas Athena" = `פַּלַּס אַתֵנָה`) |
| Τριτογένεια | טְרִיטוֹגֶנֵיאָה |  | Athena's epithet |
| Ἀτρυτώνη | אַטְרִיטוֹנָה |  | "the Unwearied" (a note) |
| Ἀφροδίτη | אַפְרוֹדִיטָה |  | the familiar form (the dossier's `אַפְרוֹדִיטֵה` revised to it, §12) |
| Κυθέρεια | קִיתֵרֵיאָה |  |  |
| Κυπρογενής | בַּת־קַפְרִיסִין |  | "Cyprus-born" |
| Ποσειδῶν / Ποσειδεών | פּוֹסֵידוֹן |  |  |
| Ἐννοσίγαιος / Ἐνοσίχθων | מַרְעִישׁ־הָאֲדָמָה |  | Poseidon's epithets, "the Earth-Shaker" |
| Δημήτηρ | דֶּמֶטֶר |  |  |
| Ἑστία | הֶסְטִיָה |  |  |
| Ἀίδης / Ἅδης | הָאדֵס |  | (the treebank has both lemmas) |
| Ἀιδωνεύς | אַיְדוֹנֵאוּס |  | the long form of Hades' name (Th. 913) |
| Περσεφόνη / Περσεφόνεια | פֶּרְסֶפוֹנָה |  |  |
| Ἀπόλλων | אַפּוֹלוֹן |  |  |
| Φοῖβος | פוֹיבּוֹס |  | "the Bright", Apollo's name (Th. 14) |
| Ἄρτεμις | אַרְטֶמִיס |  |  |
| Ἄρης | אָרֵס | ★ | unvocalized `ארס` "poison" |
| Ἥφαιστος | הֵפַיְסְטוֹס |  |  |
| Ἀμφιγυήεις / ἀμφιγύεις | צוֹלֵעַ־הָרַגְלַיִים |  | Hephaistos' epithet, "lame in both feet" (the usual reading; a note) |
| Ἑρμῆς | הֶרְמֵס |  |  |
| Ἀργειφόντης | קוֹטֵל־אַרְגּוֹס |  | Hermes' epithet ("Argos-slayer", the usual reading; a note) |
| Διόνυσος | דִּיּוֹנִיסוֹס |  |  |
| Λητώ | לֵטוֹ |  |  |
| Μαῖα | מָאיָה |  |  |
| Σεμέλη | סֶמֶלָה |  |  |
| Ἥβη | הֵבָּה | ★ | unvocalized `הבה` "come, let us" (Gen 11:3–4!) |
| Εἰλείθυια | אֵילֵיתִיָּה |  |  |
| Ἡρακλέης / Ἡρακλής / Ἡράκλειος | הֵרַקְלֵס |  | Ἡράκλειος (adj. "of Heracles", βίη Ἡρακληείη "the might of Heracles") = `הֵרַקְלֵס` + `כֹּחַ` |
| Ἀλκμήνη | אַלְקְמֵנָה |  |  |
| Προμηθεύς | פְּרוֹמֵתֵאוּס |  | "Forethought" (a note) |
| Ἐπιμηθεύς | אֶפִּימֵתֵאוּס |  | "Afterthought" |
| Ἰαπετός / Ἰάπετος / Ἰαπέτος | יָאפֶּטוֹס |  | never `יֶפֶת` (§2.3, §7) |
| Ἰαπετιονίδης / Ἰαπετονίδης | בֶּן־יָאפֶּטוֹס |  | patronymic (Prometheus) |
| Ἄτλας | אַטְלָס |  |  |
| Μενοίτιος | מֵנוֹיטִיּוֹס |  |  |
| Τάρταρος | טַרְטָרוֹס |  | the dossier's form; a place and a god (Th. 119, 822) |
| Ἔρεβος | אֶרֶבוֹס |  | the darkness under the earth (West keeps the name) |
| Ἔρος | אֶרוֹס | ★ | the noun ἔρος "desire" = `חֵשֶׁק`; unvocalized `ארוס` "betrothed" |
| Ὠκεανός | אוֹקֵאָנוֹס |  | never `אוקיינוס` (the modern "ocean": a note); the world-river |
| Ὠκεανίνη | בַּת־אוֹקֵאָנוֹס |  | "daughter of Ocean", pl. `בְּנוֹת אוֹקֵאָנוֹס` |
| Τηθύς | טֵתִיס |  | ≠ Θέτις |
| Θέτις | תֶּטִיס |  | ≠ Τηθύς |
| Ὑπερίων | הִיפֶּרִיּוֹן |  |  |
| Θεία | תֵּאָה |  |  |
| Κοῖος | קוֹיוֹס |  |  |
| Κρεῖος / Κρῖος / Κρίος | קְרִיּוֹס |  |  |
| Θέμις | תֶּמִיס |  | the Titaness; the noun θέμις = `דִּין` (§5) |
| Μνημοσύνη | מְנֵמוֹסִינָה |  | "Memory" (a note; a Titaness, kept as a name as in West) |
| Φοίβη | פוֹיבָּה |  |  |
| Τιτάν | הַטִּיטָנִים |  | the dossier's form; sg. `טִיטָן` |
| Οὐρανίωνες / Οὐρανίων | בְּנֵי־שָׁמַיִם |  | "the Uranians" (the gods as Sky's descendants) |
| Οὐρανίδης | בֶּן־שָׁמַיִם |  | "son of Sky" (Kronos) |
| Κύκλωψ | הַקִּיקְלוֹפִּים |  | sg. `קִיקְלוֹפּ` |
| Βρόντης | בְּרוֹנְטֵס |  | "Thunderer" (a note; the noun βροντή = `רַעַם`) |
| Στερόπης | סְטֶרוֹפֵּס |  | "Lightener" (στεροπή = `בָּרָק`) |
| Ἄργης | אַרְגֵּס |  | "Bright" |
| Κόττος | קוֹטוֹס |  | the Hundred-Handers: Kottos, Briareos, Gyes |
| Βριάρεως / Ὀβριάρεως | בְּרִיאָרֵאוֹס |  |  |
| Γύης / Γύγης | גִּיֵּס |  |  |
| Γίγας | הַגִּיגַנְטִים |  | **never `נְפִלִים` / `גִּבֹּרִים`** in the line: the LXX's γίγαντες (Gen 6:4) in the note (§6) |
| Ἐρινύς | הָאֶרִינִיּוֹת |  | sg. `אֶרִינִיָּה` |
| Μελίαι (νύμφαι) | נִימְפוֹת הַמֵּילָה |  | the ash-tree nymphs (μελίη "ash" = `מֵילָה`; not `אֵלָה`, the terebinth and "goddess": §11.2) |
| Μοῦσα | הַמּוּזוֹת |  | sg. `מוּזָה` |
| Ὀλυμπιάς | הָאוֹלִימְפִּיּוֹת |  | of the Muses |
| Ἑλικωνιάς / Ἑλικωνιάδες | הַהֶלִיקוֹנִיּוֹת |  | of the Muses (the treebank's lemma is the plural) |
| Πιερίς / Πιερία | פִּיֶּרִיָּה |  |  |
| Κλειώ / Εὐτέρπη / Θάλεια / Μελπομένη / Τερψιχόρη / Ἐρατώ / Πολύμνια / Οὐρανία / Καλλιόπη | קְלֵיאוֹ / אֶוּטֶרְפָּה / תָּלֵיאָה / מֶלְפּוֹמֵנָה / טֶרְפְּסִיכוֹרָה / אֶרָטוֹ / פּוֹלִימְנִיָּה / אוּרַנְיָה / קַלִּיּוֹפָּה |  | the nine Muses (Th. 77–79); one row per name in the tool |
| Χάρις (pl. Χάριτες) | הֶחָרִיטוֹת |  | the Graces; the noun χάρις = `חֵן` |
| Ὥρα (pl. Ὧραι) | הַהוֹרוֹת | ★ | the Seasons: unvocalized `הורות` "parenthood" |
| Μοῖρα (pl. Μοῖραι) | הַמּוֹירוֹת |  | the Fates; the noun μοῖρα = `חֵלֶק` (§5) |
| Κλωθώ / Λάχεσις / Ἄτροπος | קְלוֹתוֹ / לָכֵסִיס / אַטְרוֹפּוֹס |  |  |
| Κήρ (pl. Κῆρες) | קֵר |  | the death-spirits (pl. `הַקֵּרוֹת`); the noun κήρ "doom" = `כְּלָיָה` |
| Ἑσπερίς (pl. Ἑσπερίδες) | הַהֶסְפֶּרִידוֹת |  | "the Daughters of Evening" (a note) |
| Νηρεύς | נֵרֵאוּס |  | the dossier's form |
| Νηρηΐς | הַנֵּרֵאִידוֹת |  | the Nereids (their 50 names by §2.3) |
| Δωρίς | דּוֹרִיס |  |  |
| Ἀμφιτρίτη | אַמְפִיטְרִיטָה |  |  |
| Θαύμας | תָאוּמָס |  | the dossier's form |
| Φόρκυς | פוֹרְקִיס |  | the dossier's form |
| Κητώ | קֵטוֹ |  | the dossier's form: from κῆτος (§6) |
| Εὐρυβία / Εὐρυβίη | אֶוּרִיבִיָּה |  | the dossier's form |
| Ἶρις | אִירִיס |  | the rainbow goddess (Gen 9:13 in the note: ἶρις is also the Greek for "rainbow"; the LXX has τόξον) |
| Ἅρπυιαι | הַהַרְפִּיּוֹת |  |  |
| Γραῖα (pl. Γραῖαι) | הַגְּרַאִיּוֹת |  | the dossier's form |
| Γοργώ (pl. Γοργόνες) | הַגּוֹרְגוֹנוֹת |  |  |
| Μέδουσα | מֵדוּסָה |  |  |
| Πήγασος | פֵּגָסוֹס |  |  |
| Χρυσάωρ | כְרִיסָאוֹר |  | "Golden Sword" |
| Γηρυόνης / Γηρυονεύς | גֵּרִיּוֹנֵס |  |  |
| Ἔχιδνα | אֶכִידְנָה |  | the dossier's form; the noun ἔχιδνα "viper" = `אֶפְעֶה` |
| Ὄρθος | אוֹרְתוֹס |  | Geryon's dog |
| Κέρβερος | קֶרְבֵּרוֹס |  |  |
| Ὕδρη | הַהִידְרָה |  |  |
| Χίμαιρα | כִימַיְרָה |  | the noun χίμαιρα "she-goat" = `עֵז` (Th. 321 plays on both) |
| Φίξ | פִיקְס |  | the Sphinx (Boeotian Φίξ; a note) |
| Λάδων | לָדוֹן |  | also a river (Th. 344): one Hebrew |
| Τυφωεύς / Τυφῶν / Τυφάων | טִיפוֹאֶוּס |  | the dossier's form; every TH form (Τυφάονα 306, Τυφωέος 869 …) is `טִיפוֹאֶוּס` (no TH line has Τυφῶν; corrected after review a) |
| Ἄριμοι / Ἀρίμος | הָאֲרִימִים |  | the dossier's form |
| Στύξ | סְטִיקְס |  | the river of the oath |
| Ἑκάτη | הֶקָטָה |  |  |
| Νίκη / Κράτος / Βίη / Ζῆλος | (T) `נִיצָּחוֹן` / `עוֹז` / `כֹּחַ` / `קִנְאָה` |  | the children of Styx (Th. 383–385): translated names (§3.2) |
| Μῆτις | מֵטִיס |  | the goddess; the noun μῆτις = `תְּבוּנָה` (§5) |
| Εὐρυνόμη | אֶוּרִינוֹמָה |  |  |
| Διώνη | דִּיּוֹנָה |  |  |
| Ἠλέκτρη | אֵלֶקְטְרָה |  |  |
| Καλλιρόη | קַלִּירוֹאָה |  |  |
| Κλυμένη | קְלִימֵנָה |  |  |
| Περσηίς | פֶּרְסֵאִיס |  |  |
| Αἰήτης | אַיֵּיטֵס |  |  |
| Κίρκη | קִירְקָה |  |  |
| Μήδεια | מֵדֵיאָה |  |  |
| Ἰήσων | יָאסוֹן |  |  |
| Αἰσονίδης / Αἰονίδης | בֶּן־אַיְסוֹן |  | "son of Aison" (Jason) |
| Κάδμος / Καδμεῖος / Καδμηίς | קַדְמוֹס |  | Καδμεῖος "Kadmean" = `שֶׁל קַדְמוֹס` |
| Ὀδυσσεύς | אוֹדִיסֵאוּס |  |  |
| Ἀχιλλεύς | אָכִילֵאוּס |  |  |
| Πέρσης | פֶּרְסֵס |  | Hesiod's brother (WD) |
| Ἡσίοδος | הֶסִיּוֹדוֹס |  | the dossier's form (Th. 22) |
| Πανδώρη | פַּנְדּוֹרָה |  | "All-Gift" (WD 81: the name explained in the line itself – a note) |
| Οἰδιπόδης | אֶדִיפּוּס |  | the familiar form (WD 163) |
| Ἑλένη | הֶלֶנָה |  | (WD 165) |
| Ὄλυμπος | הָאוֹלִימְפּוֹס |  |  |
| Ὀλύμπιος | אוֹלִימְפִּי |  | the adjective (the Muses "Olympian": `הָאוֹלִימְפִּיּוֹת`; the gods "Olympians": `הָאוֹלִימְפִּיִּים`); the tool accepts the inflected forms |
| Ἑλικών | הַהֶלִיקוֹן |  |  |
| Κρήτη | כְּרֵתִים |  | §2.3 |
| Κύπρος | קַפְרִיסִין |  |  |
| Κύθηρα | קִיתֵרָה |  |  |
| Τροία | טְרוֹיָה |  |  |
| Θήβη | תֵּבַּאי |  | Boeotian Thebes |
| Αἰθίοψ | כּוּשׁ |  | biblical name (§2.3): the land / people `כּוּשׁ` (`מֶלֶךְ כּוּשׁ`, `בְּנֵי כּוּשׁ`); not the plural `כּוּשִׁים`, a slur in Modern Hebrew (§11.7) |
| Νεῖλος | נִילוּס |  | never `יְאֹר` |
| Ἄσκρη | אַסְקְרָה |  | Hesiod's village (WD 640) |
| Κύμη | קִימָה | ★ | the Aeolian city of Hesiod's father (WD 636); unvocalized it is `כימה`, the Pleiades |
| Πληιάδες / Πλειάδες / πλψιάς | כִּימָה |  | (πλψιάς: the treebank's slip at WD 383) the Pleiades: `כִּימָה` [equivalent], the LXX's Πλειάς for `כִּימָה` (Job 9:9, 38:31) |
| Ὠρίων / Ὠαρίων | כְּסִיל | ★ | Orion: `כְּסִיל` [equivalent], the LXX's Ὠρίων for `כְּסִיל` (Job 38:31); unvocalized "fool" |
| Ὑάδες | הַהִיאָדוֹת |  | the Hyades (no biblical name) |
| Ἀρκτοῦρος | אַרְקְטוּרוֹס |  | the LXX's Ἀρκτοῦρος renders `עָשׁ` (Job 9:9) – a doubtful equation, a note only |
| Σείριος | סִירִיּוּס |  |  |
| Βορέας | בּוֹרֵאָס |  | the north wind (god and wind) |
| Ζέφυρος / Νότος | זֶפִירוֹס / נוֹטוֹס |  | the west wind, the south wind |
| Ἑωσφόρος | (T) `מֵבִיא־הַשַּׁחַר` |  | the morning star (Isa 14:12 `הֵילֵל בֶּן שָׁחַר`: LXX ὁ ἑωσφόρος – a note) |

### 3.2 Speaking names translated (T)
**Rule (decided 2026-10-24, §12):** where a god's name **is** an ordinary Greek noun of Hesiod's language – the cosmic
beings of the first generations and the personified abstractions – the Hebrew renders it by the Hebrew noun of that
Greek word, **as a name: without the article**, and the note gives the Greek name. Hesiod's hearers heard "Earth",
"Night", "Strife", not opaque names; the poem plays on the identity (the two Erides, WD 11–26; γαῖα and Γαῖα). This
follows West's and Most's translations (Chasm, Earth, Sky, Night, Day, Strife). The Titans, the Olympians, the monsters
and the nymphs keep their names (West too), with their meanings in the notes.

| Greek | Hebrew (name) | The common noun | Note |
|---|---|---|---|
| Χάος | `פַּעַר` | χάος (Th. 700, 814) `פַּעַר` | "the Gap, the Chasm" (χαίνω "gape"); **not** modern "chaos"; the LXX's χάος renders `גַּיְא` (Mic 1:6, Zech 14:4), never `תֹּהוּ` (Gen 1:2 LXX: ἀόρατος καὶ ἀκατασκεύαστος) |
| Γαῖα / Γῆ | `אֶרֶץ` | γαῖα, γῆ `אֶרֶץ` | the dossier's `גַּאיָה` revised (§12) |
| Οὐρανός | `שָׁמַיִם` | οὐρανός `שָׁמַיִם` | grammatically a masculine name: singular verbs and adjectives where Greek has them ("שָׁמַיִם הָרָחָב") |
| Πόντος | `יָם` | πόντος, θάλασσα `יָם` | the Sea god: as Ugarit's Yam (`יָם`, a name without the article): a cross-cultural [equivalent] |
| Ὄρος (Οὔρεα) | `הָרִים` | ὄρος `הַר` | Th. 129 (the treebank's lemma: ὄρος) |
| Νύξ | `לַיְלָה` | νύξ `לַיְלָה` | "Night bore Aither and Day" (Th. 124 ↔ Gen 1:5) |
| Ἡμέρη / Ἡμέρα | `יוֹם` | ἡμέρη, ἦμαρ `יוֹם` |  |
| Ποταμός (pl. Ποταμοί) | `נְהָרוֹת` | ποταμός `נָהָר` | the Rivers, Tethys' sons (Th. 337) |
| Πειθώ | `שִׁכְנוּעַ` | πειθώ | Persuasion (Th. 349, WD 73) |
| Αἰθήρ | `אֶתֶר` ★ | αἰθήρ `אֶתֶר` | the bright upper air (always vocalized: `אתר` "site") |
| Ἠώς | `שַׁחַר` | ἠώς `שַׁחַר` | Dawn (as Ugarit's Šaḥar, a note) |
| Ἠέλιος / Ἥλιος | `שֶׁמֶשׁ` | ἠέλιος `שֶׁמֶשׁ` |  |
| Σελήνη | `יָרֵחַ` | σελήνη `יָרֵחַ` | (the moon is feminine in Greek: feminine verbs) |
| Ἔρις | `מָדוֹן` | ἔρις `מָדוֹן` | Strife (both Erides, WD 11–26) |
| Θάνατος / Ὕπνος / Ὄνειρος | `מָוֶת` / `שֵׁנָה` / `חֲלוֹמוֹת` | the same | Death is masculine: `מָוֶת` (Ugarit's Mot: a note) |
| Πόνος / Λήθη / Λιμός / Ἄλγος | `עָמָל` / `שִׁכְחָה` / `רָעָב` / `מַכְאוֹבִים` | the same | Strife's children (Th. 226–232); the rest by the translator, recorded |
| Ὅρκος | `שְׁבוּעָה` | ὅρκος `שְׁבוּעָה` | Oath; the Styx is "the great oath of the gods" |
| Δίκη | `מִשְׁפָּט` | δίκη `מִשְׁפָּט` | Justice, the maiden daughter of Zeus (WD 256) |
| Αἰδώς / Νέμεσις | `בּוּשָׁה` / `חֵמָה` | the same | WD 200 (Nemesis: "righteous indignation" – the translator may refine, recorded) |
| Ἐλπίς | `תִּקְוָה` | ἐλπίς `תִּקְוָה` | Hope in the jar (WD 96) – lower case in the base: the noun, `תִּקְוָה` |
| Ὕβρις | `זָדוֹן` | ὕβρις `זָדוֹן` | Hubris against Dike (WD 213–218; §11.9) |
| Φιλότης / Ἀπάτη / Γῆρας | `אַהֲבָה` / `מִרְמָה` / `זִקְנָה` | the same | Th. 224–225 |
| Νίκη / Κράτος / Βίη / Ζῆλος | `נִיצָּחוֹן` / `עוֹז` / `כֹּחַ` / `קִנְאָה` | the same | Th. 383–385 |
| Εὐνομίη / Εἰρήνη | `סֵדֶר־טוֹב` / `שָׁלוֹם` | the same | the Horai (Th. 902) |

Kept as names (West keeps them): Ἔρος `אֶרוֹס` ★ (the noun ἔρος "desire" = `חֵשֶׁק`), Ἔρεβος `אֶרֶבוֹס`, Τάρταρος
`טַרְטָרוֹס`, Ὠκεανός, Στύξ, Θέμις, Μνημοσύνη, Μῆτις, the Moirai, Keres, Hesperides, Charites, Horai (as a group).

## 4. Grammar mapping (Archaic Greek → Hebrew)

- **Aorist indicative** (narrative past) → Hebrew past (`יָלְדָה`, `הוֹלִיד`). No vav-consecutive. **Gnomic aorist** (a
  timeless truth, frequent in WD's maxims) → present (participle), with "(אאוריסט גנומי)" in the פירוק.
- **Imperfect** → past; where it means a state or a repeated action, `הָיָה` + participle (`הָיוּ חַיִּים`). The
  iterative forms in -σκ- (ζώεσκον) → `הָיוּ …` + participle, always (the Greek marks the habit).
- **Perfect** → a present state (the result): Hebrew participle or adjective (`עוֹמֵד`, `יוֹדֵעַ` for οἶδα); **pluperfect**
  → past.
- **Present** → participle (present); the general present of the maxims → participle; **future** → future (yiqtol).
- **Subjunctive**: purpose (ἵνα, ὄφρα, ὡς) → `כְּדֵי שֶׁ־` / `לְמַעַן` + future; general relative (ὅς κε + subj.) → `מִי
  שֶׁ־` + future; prohibition (μή + aor. subj.) → `אַל` + future; hortative → `נָא` + cohortative / `הָבָה` (never `הבה`
  unvocalized: Hebe).
- **Optative**: a wish → `מִי יִתֵּן` / jussive (`יְהִי`); potential (with κε / ἄν) → `הָיָה` + participle or `אוּלַי` +
  future, by sense; in a past condition → `הָיָה … לוּ`; the oblique optative → the tense of direct speech. Name the
  mood in the פירוק.
- **Imperative** → imperative. **The infinitive for an imperative** (WD's farmer's precepts: γυμνὸν σπείρειν "sow
  naked") → **Hebrew infinitive absolute** (`זָרוֹעַ עָרֹם`), the biblical command form (`זָכוֹר`, Exod 20:8),
  vocalized; the פירוק says "infinitive as imperative".
- **Middle voice**: reflexive → התפעל / נפעל; "for oneself" → `לְעַצְמוֹ` / `לָהּ` only where the middle carries it
  (ἐποιήσατο ἄκοιτιν "made her his wife" = `לָקַח לוֹ לְאִשָּׁה`?); a middle with active sense (deponent: γείνομαι,
  ἔρχομαι) → active. **Passive** → נפעל / פֻּעַל / הָפְעַל.
- **Participles** → Hebrew participle, or a relative clause (`אֲשֶׁר …`) where Hebrew needs it.
- **Dual** → plural; `שְׁנֵי` / `שְׁתֵּי` only where the number matters.
- **Particles**: μέν … δέ → `… וְ…` / `… וְאִלּוּ …` (never "מצד אחד"); γάρ → `כִּי`; ἄρα / ῥα → `אָז` or nothing (a note
  where it marks inference); δή → `אָכֵן`; τε … καί, τε … τε → `וְ … וְ`; αὐτάρ, ἀτάρ → `אַךְ` / `וְאוּלָם`; ἀλλά → `אֲבָל`;
  ἤτοι → `אָכֵן`; οὐ / μή → `לֹא` / `אַל` (`שֶׁלֹּא`, `לְבַל`); κε / ἄν → the mood, no word; ὦ + vocative → `הוֹ` (WD 27
  `הוֹ פֶּרְסֵס`); αὖτις, αὖ, αὖτε → `שׁוּב` (adverb, "again").
- **Epic forms** (augmentless aorists, -οιο genitives, tmesis, -φι endings) change nothing in the Hebrew; tmesis is one
  compound verb.
- **Word order**: the image order within the line where Hebrew allows; the clause boundaries across lines exactly.

## 5. Key terms (one Greek lemma = one Hebrew word; tags and the LXX in §6)

| Greek | Hebrew | Note |
|---|---|---|
| θεός / θεοί / θεά | `אֵל` / `אֵלִים` / `אֵלָה` (pl. `אֵלוֹת`) ★ | `אֱלֹהִים` never (θεός is the LXX's word for `אֱלֹהִים`: a note at TH 2); always vocalized |
| ἀθάνατος | `בֶּן־אַלְמָוֶת` (pl. `בְּנֵי־אַלְמָוֶת`) | the dossier's; substantive "the immortals" `בְּנֵי־הָאַלְמָוֶת` |
| θνητός | `בֶּן־תְּמוּתָה` | the dossier's |
| βροτός | `אֱנוֹשׁ` (pl. `בְּנֵי אֱנוֹשׁ`) | "mortal (man)" (Ps 103:15) |
| ἄνθρωπος | `אָדָם` (pl. `בְּנֵי אָדָם`) | [equivalent] the LXX's ἄνθρωπος = `אָדָם` (Gen 1:26) |
| ἀνήρ | `אִישׁ` (pl. `אֲנָשִׁים`) | the LXX's ἀνήρ = `אִישׁ` |
| γυνή | `אִשָּׁה` | the LXX's γυνή = `אִשָּׁה` (Gen 2:22–23) |
| μάκαρ (of gods) / ὄλβιος / εὐδαίμων | `מְאֻשָּׁר` / `שְׂבַע־טוֹבָה` / `בַּר־מַזָּל` | `μάκαρες θεοί` = `הָאֵלִים הַמְּאֻשָּׁרִים`; `מְבֹרָךְ`, `בֵּרַךְ` never (no εὐλογέω); WD 826 `εὐδαίμων τε καὶ ὄλβιος`: the translator may refine the last two, recorded |
| γαῖα / γῆ | `אֶרֶץ` | the material "earth, clay" (WD 61, Th. 571): `אֲדָמָה` (a sense split, noted) |
| χθών | `אֲדָמָה` | ἐπὶ χθονί `עַל פְּנֵי הָאֲדָמָה`; χθόνιος `שֶׁבְּתוֹךְ הָאֲדָמָה` |
| οὐρανός | `שָׁמַיִם` |  |
| θάλασσα, πόντος | `יָם` | one Hebrew for both (Hebrew has one word); the Greek in the פירוק |
| ὕδωρ | `מַיִם` |  |
| ποταμός | `נָהָר` |  |
| ὄρος | `הַר` |  |
| νύξ / ἦμαρ, ἡμέρη | `לַיְלָה` / `יוֹם` |  |
| φάος, φῶς | `אוֹר` | the LXX's φῶς = `אוֹר` (Gen 1:3); φώς (WD 193, 792) "man" ≠ φῶς |
| ζόφος | `אֹפֶל` | `חֹשֶׁךְ` reserved for σκότος (absent) |
| ἀρχή | `רֵאשִׁית` | ἐξ ἀρχῆς `מֵרֵאשִׁית` (Th. 45, 115 …) [equivalent] the LXX's ἐν ἀρχῇ = `בְּרֵאשִׁית` (Gen 1:1) |
| πρῶτος, πρώτιστα | `רִאשׁוֹן`, `רִאשׁוֹנָה` |  |
| γίγνομαι | `נִהְיָה` | "came into being" (Th. 116 `נִהְיָה`); the LXX's ἐγένετο = `וַיְהִי` (Gen 1:3): a note; εἰμί = `הָיָה` |
| ἐκγίγνομαι | `נוֹלַד מִן` |  |
| τίκτω | `יָלַד` (m. and f.) | `יָלַד` of a father too (Gen 4:18); the LXX's τίκτω = `יָלַד` |
| γείνομαι (aor. mid. "beget, bear") | `הוֹלִיד` (m.) / `הוֹלִידָה` (f.) | the dossier's 334 `ילדה` revised (§12) |
| γένος | `גֶּזַע` | "race, stock, kin": the gold race `גֶּזַע זָהוֹב` (χρύσεος `זָהוֹב`, §11.6.3); the LXX's γένος = `מִין` (Gen 1:21, 24–25): a note (the dossier's 336 `דור` revised, §12) |
| γενεή | `דּוֹר` | WD 160 `הַדּוֹר הַקּוֹדֵם`; the LXX's γενεά = `דּוֹר` (Gen 6:9) |
| φῦλον | `שֵׁבֶט` | "tribe" (φῦλα γυναικῶν "the tribes of women", Th. 591) |
| παῖς / υἱός / τέκνον | `יֶלֶד` / `בֵּן` / `צֶאֱצָא` | τέκνα "offspring"; παῖς split by sense (§11.6) |
| θυγάτηρ / κούρη / παρθένος / νύμφη | `בַּת` / `עַלְמָה` / `בְּתוּלָה` / `נִימְפָה` | the LXX's παρθένος = `בְּתוּלָה` (Gen 24:16) and `עַלְמָה` (Isa 7:14): a note; νύμφη = `נִימְפָה` (the dossier's); `כַּלָּה` never (the everyday-voices reservation) |
| ἄκοιτις / παράκοιτις | `רַעְיָה` | "bedfellow, wife"; θαλερὴν ποιήσατʼ ἄκοιτιν `עָשָׂה לוֹ רַעְיָה פּוֹרִיָּה` (§8) |
| φιλότης | `אַהֲבָה` | φιλότητι μιγῆναι `הִתְיַחֵד בְּאַהֲבָה` (§8) |
| μίγνυμι, μίσγω | `הִתְיַחֵד` | the dossier's |
| ἔρος / ἵμερος / πόθος | `חֵשֶׁק` / `כִּסּוּף` / `גַּעְגּוּעִים` | `תְּשׁוּקָה` never (Gen 3:16, a Hebrew-only link: the LXX has ἀποστροφή) |
| ἐρατός / ἱμερόεις | `עָרֵב` / `מְעוֹרֵר־כִּסּוּף` | `נֶחְמָד` never (Gen 2:9, 3:6; the LXX's ὡραῖος) |
| καλός | `יָפֶה` | the LXX's καλός = `טוֹב` (Gen 1:4 …): a note where it matters (Th. 585 `καλὸν κακόν`); `טוֹב` never for καλός |
| ἀγαθός, ἐσθλός, ἐύς (ἐάων) | `טוֹב` | one Hebrew for the three (synonyms); ἀγαθόν τε κακόν τε `טוֹב וָרָע` (Th. 219, 906 ↔ Gen 2:9, 17: the LXX has καλὸν καὶ πονηρόν – a link only through the Hebrew, noted) |
| κακός | `רַע` | κακόν (n.) `רָעָה` |
| ἔργον | `מְלָאכָה` (work, task, field-work) / `מַעֲשֶׂה` (deed) | by sense, the Greek in the פירוק; [equivalent] the LXX's ἔργα = `מְלַאכְתּוֹ` (Gen 2:2–3) and `מַעֲשֵׂנוּ` (Gen 5:29) |
| ἐργάζομαι | `עָבַד` | [equivalent] the LXX's ἐργάζεσθαι τὴν γῆν = `לַעֲבֹד אֶת הָאֲדָמָה` (Gen 2:5, 3:23); WD 397 `עֲבֹד, פֶּרְסֵס הַפֶּתִי` |
| ἀεργίη / ἀεργός | `בַּטָּלָה` / `בַּטְלָן` |  |
| πόνος | `עָמָל` |  |
| ἄλγος | `מַכְאוֹב` |  |
| πῆμα | `פֶּגַע` |  |
| ἱδρώς | `זֵעָה` | WD 289 [equivalent] Gen 3:19 (the LXX's ἱδρῶτι) |
| βίος / βίοτος | `מִחְיָה` | WD 42 "the gods keep livelihood hidden"; `לֶחֶם` only for ἄρτος |
| σῖτος / ἄρτος | `דָּגָן` / `לֶחֶם` |  |
| καρπός | `פְּרִי` |  |
| δίκη / δίκαιος / θέμις (θέμιστες) | `מִשְׁפָּט` / `צַדִּיק` / `דִּין` (`דִּינִים`) | δίκαιος [equivalent] the LXX's δίκαιος = `צַדִּיק` (Gen 6:9); θέμις ἐστί "it is right" `כַּדִּין` |
| ὕβρις | `זָדוֹן` | the LXX's ὕβρις = `זָדוֹן` (Prov 11:2, 13:10) |
| αἰδώς | `בּוּשָׁה` |  |
| ὅρκος / ὀμνύω | `שְׁבוּעָה` / `נִשְׁבַּע` |  |
| δῶρον / δωροφάγος | `מַתָּנָה` / `אוֹכֵל־מַתָּנוֹת` | the LXX's δῶρα = `שֹׁחַד` (Deut 16:19, Exod 23:8): a note at WD 39, 221, 264; `שֹׁחַד` never in the line |
| βασιλεύς / ἄναξ / ἀνάσσω | `מֶלֶךְ` / `אָדוֹן` / `מָלַךְ` |  |
| βουλή / μῆτις / μῆδος (μήδεα) / δόλος | `עֵצָה` / `תְּבוּנָה` / `תַּחְבּוּלָה` / `עָרְמָה` | the LXX's δόλος = `עָרְמָה` (Exod 21:14); the LXX's βουλή = `עֵצָה` (Prov 19:21) |
| νόος / θυμός / φρήν (φρένες) / ἦτορ, κῆρ, κραδίη | `שֵׂכֶל` / `לֵב` / `לֵבָב` / `קֶרֶב` | the dossier's 239 `בחזה` for φρεσί revised to `בִּלְבָבָהּ` (§12) |
| ψυχή | `נֶפֶשׁ` | the LXX's ψυχή = `נֶפֶשׁ` (Gen 2:7); WD 686 |
| ἄνεμος / πνοιή | `רוּחַ` / `מַשָּׁב` | `נְשָׁמָה` only for πνοή (the LXX's πνοή = `נְשָׁמָה`, Gen 2:7) – but πνοιαὶ ἀνέμων are "blasts": `מַשָּׁבִים` |
| ἐμπνέω | `הִשְׁרָה` | Th. 31 `וְהִשְׁרוּ בִּי קוֹל`; `נָפַח` never (Gen 2:7; the LXX's ἐμφυσάω is another verb) |
| αὐδή / φωνή / ὄσσα / ὄψ | `נִיב` ★ / `קוֹל` / `צְלִיל` / `נְעִימָה` | split by TH part 1 (§11.1): φωνή keeps `קוֹל` (the LXX's φωνή = `קוֹל`); `נִיב` always vocalized |
| πλάσσω, συμπλάσσω | `יָצַר` | [equivalent] the LXX's ἔπλασεν = `וַיִּיצֶר` (Gen 2:7): Th. 571, WD 70 |
| ποιέω | `עָשָׂה` | the LXX's ποιέω renders both `עָשָׂה` and `בָּרָא` (Gen 1:1, 21, 27): a note; `בָּרָא` never |
| τεύχω | `הִתְקִין` |  |
| φυλάσσω | `שָׁמַר` | [equivalent] the LXX's φυλάσσειν = `לְשָׁמְרָהּ` / `לִשְׁמֹר` (Gen 2:15, 3:24); the dossier's 335 `שומר` |
| ὄφις / δράκων / ἔχιδνα (n.) | `נָחָשׁ` / `דְּרָקוֹן` / `אֶפְעֶה` | the dossier's; the LXX's ὄφις = `נָחָשׁ` (Gen 3:1), δράκων = `תַּנִּין` / `לִוְיָתָן` (Exod 7:9–12, Isa 27:1, Ps 74:13–14 …): notes |
| πέλωρ, πέλωρον / πέλωρος | `מִפְלֶצֶת` / `מִפְלַצְתִּי` | the dossier's |
| μέγας | `גָּדוֹל` | the dossier's (the LXX's τὰ κήτη τὰ μεγάλα = `הַתַּנִּינִם הַגְּדֹלִים`) |
| δεινός | `אָיֹם` |  |
| βωμός | `מִזְבֵּחַ` | the LXX keeps βωμός for pagan altars and θυσιαστήριον for Israel's (Gen 8:20): a "deliberate avoidance", note it (guidelines §6.4 rule 5) |
| ἱερός / ζάθεος / ἁγνός | `קָדוֹשׁ` / `מְקֻדָּשׁ` / `טָהוֹר` | ἱερόν ἦμαρ `יוֹם קָדוֹשׁ` (WD 770 ↔ Gen 2:3: the LXX has ἡγίασεν, ἅγιος, never ἱερός – note it); the dossier's 300 `הקדושה` for ζαθέης revised to `הַמְּקֻדֶּשֶׁת` (§12) |
| ἱερά (n. pl., "sacrifices") / ἔρδω | `קָרְבָּנוֹת` / `פָּעַל` | ἔρδειν ἱερά "to offer sacrifices" = `לְהַקְרִיב קָרְבָּנוֹת` (by sense, the פירוק says ἔρδω); `עָשָׂה` stays ποιέω's |
| κνίση | `רֵיחַ־חֵלֶב` | `נִיחוֹחַ` never (Gen 8:21) |
| ὀστέα / δημός | `עֲצָמוֹת` / `חֵלֶב` | Mekone (Th. 538–557): the LXX's στέαρ = `חֵלֶב` (Gen 4:4) – note |
| ἑβδόμη | `שְׁבִיעִי` | the root שבת never |
| ἀοιδή / ἀοιδός / ἀείδω / ὑμνέω | `שִׁירָה` / `מְשׁוֹרֵר` / `שָׁר` / `רִנֵּן` | `הִלֵּל` is the cognate of *alālu* (the cross-corpus rule): not for ὑμνέω |
| μοῖρα / αἶσα | `חֵלֶק` / `מָנָה` | κατὰ μοῖραν "rightly, duly" `כָּרָאוּי` |
| τιμή / τιμάω | `כָּבוֹד` (the distributed τιμαί: `זְכֻיּוֹת`) / `כִּבֵּד` | "honour, prerogative" (the gods' τιμαί, Th. 74, 885): the Sumerian / Akkadian reservations of `כָּבוֹד` do not bind Greek (no loanword); fixed at TH 74, 112 (§11.1); so αἰδοῖος = `נַעֲרָץ` (not `מְכֻבָּד`) |
| κῦδος / κλέος / ὄνομα | `תִּפְאֶרֶת` / `תְּהִלָּה` / `שֵׁם` | revised §11.2: ὄνομα keeps `שֵׁם` (the LXX's ὀνομαστοί = `אַנְשֵׁי הַשֵּׁם`, Gen 6:4); κλέος ἐσθλόν `תְּהִלָּה טוֹבָה` |
| ἥρως / ἡμίθεος | `הֵרוֹאִים` (sg. `הֵרוֹאִי`) / `חֲצִי־אֵלִים` | WD 159–160 ↔ Gen 6:4 **in the note only**: `גִּבֹּרִים` would make the echo through the Hebrew (the LXX has γίγαντες) |
| πίθος | `כַּד` | Pandora's "jar" (not a box: a note) |
| ἐλπίς | `תִּקְוָה` |  |
| νοῦσος | `מַחֲלָה` |  |
| γῆρας | `זִקְנָה` |  |
| ὕπνος / θάνατος | `שֵׁנָה` / `מָוֶת` |  |
| κεραυνός / βροντή / στεροπή | `חֲזִיז` / `רַעַם` / `בָּרָק` | `רַעַם וּבָרָק וַחֲזִיז לוֹהֵט` (Th. 707, 854: §8) |
| γυμνός | `עָרֹם` | [equivalent] the LXX's γυμνοί = `עֲרוּמִּים` (Gen 2:25) – WD 391 |
| σπέρμα / σπείρω / ἀμάω / ἄροτος / ἀρόω / ἄροτρον | `זֶרַע` / `זָרַע` / `קָצַר` / `חָרִישׁ` / `חָרַשׁ` / `מַחֲרֵשָׁה` | Gen 8:22 (the LXX: σπέρμα καὶ θερισμός, θέρος): the words of the farmer's year – [equivalent] notes |
| θέρος / χειμών / ἔαρ | `קַיִץ` / `חֹרֶף` / `אָבִיב` | (the LXX's θέρος καὶ ἔαρ = `וְקַיִץ וָחֹרֶף` in Gen 8:22: note it) |
| οἶκος / δῶμα / δόμος | `בַּיִת` / `אַרְמוֹן` / `מָעוֹן` | `הֵיכָל` never (a Sumerian loanword through Akkadian, the temple corpus's cognate); `מִשְׁכָּן` never |
| δμώς | `עֶבֶד` |  |
| γείτων / ἔτης, κασίγνητος | `שָׁכֵן` / `אָח` | WD 342–346 ↔ Prov 27:10 |

## 6. The LXX layer (guidelines §6.4 rule 5)

**Three kinds of contact, recorded separately:** (a) **lexical identity with the LXX** – Hesiod's Greek word is the word
the Septuagint uses for the Hebrew word of the verse; (b) **a link only through the Hebrew** – our Hebrew would echo a
verse whose Greek is another word: avoid it in the line, or note it as such; (c) **a deliberate LXX avoidance**. The
Hebrew Bible words of the comparisons are **gated to their real Greek counterparts** (§7): where the counterpart does not
occur in Hesiod, the Bible word never appears in a line.

| Bible word (verse) | The LXX's Greek | In Hesiod | Our Hebrew for Hesiod's word | Kind |
|---|---|---|---|---|
| `הַתַּנִּינִם` (Gen 1:21) | τὰ κήτη | only the name Κητώ (Th. 238, 270, 333, 336) | `קֵטוֹ` | (a) through the name; `תַּנִּין` never in a line (κῆτος does not occur) |
| `לִוְיָתָן` (Job 3:8), `רַהַב` (Job 9:13, 26:12), `דָּג גָּדוֹל` (Jonah 2:1) | κῆτος | – | – | the range of κῆτος in the LXX: a note at Th. 238 |
| `תַּנִּין`, `לִוְיָתָן` (Exod 7:9–12; Isa 27:1; Ps 74:13–14, 104:26, 148:7; Job 7:12, 40:25) | δράκων | Th. 322, 825 | `דְּרָקוֹן` | (a): the note; `תַּנִּין` / `לִוְיָתָן` never in a line |
| `נָחָשׁ` (Gen 3:1) | ὄφις | Th. 299, 322, 334, 825 | `נָחָשׁ` | (a) |
| `תֹּהוּ וָבֹהוּ` (Gen 1:2) | ἀόρατος καὶ ἀκατασκεύαστος | – | – | **χάος is not the LXX's word for `תֹּהוּ`**: the LXX's χάος renders `גַּיְא` (Mic 1:6, Zech 14:4); Χάος = `פַּעַר`; `תֹּהוּ`, `בֹּהוּ` never |
| `תְּהוֹם` (Gen 1:2, 7:11, 8:2) | ἄβυσσος | – | – | `תְּהוֹם` never (ἄβυσσος does not occur; Tartaros is `טַרְטָרוֹס`: the LXX's τάρταρος only in Job 40:20, 41:24, its own additions) |
| `חֹשֶׁךְ` (Gen 1:2–5) | σκότος | – (ζόφος Th. 653, 658, 729) | ζόφος `אֹפֶל` | `חֹשֶׁךְ` never |
| `רָקִיעַ` (Gen 1:6–8) | στερέωμα | – | – | `רָקִיעַ` never (Hesiod's sky is "bronze", Th. 722: a note) |
| `בְּרֵאשִׁית` (Gen 1:1) | ἐν ἀρχῇ | ἐξ ἀρχῆς (Th. 45, 115, 156, 203, 408, 425, 452, 512) | `מֵרֵאשִׁית` | (a) |
| `שָׁמַיִם`, `אֶרֶץ` (Gen 1:1) | οὐρανός, γῆ | οὐρανός, γαῖα / γῆ | `שָׁמַיִם`, `אֶרֶץ` | (a) |
| `יַמִּים` (Gen 1:10, 22) | θάλασσαι | θάλασσα, πόντος | `יָם` | (a) for θάλασσα |
| `וַיְהִי עֶרֶב וַיְהִי בֹקֶר` (Gen 1:5) | ἑσπέρα, πρωί | Night bears Day (Th. 123–124) | `לַיְלָה`, `יוֹם` | a motif (night before day); the words differ |
| `וַיְהִי` (Gen 1:3) | ἐγένετο | γίγνομαι (Th. 116 Χάος γένετʼ) | `נִהְיָה` | (a) – the note says it; the Hebrew `נִהְיָה` keeps εἰμί's `הָיָה` apart |
| `בָּרָא` (Gen 1:1, 21, 27) | ποιέω | ποιέω (WD 110, 128, 144, 158) | `עָשָׂה` | (a): "the immortals *made* a golden race" (WD 110) = the LXX's ἐποίησεν of Gen 1:27; `בָּרָא` never |
| `וַיִּיצֶר` (Gen 2:7) | ἔπλασεν | πλάσσω (WD 70), συμπλάσσω (Th. 571) | `יָצַר` | (a) |
| `עָפָר מִן הָאֲדָמָה` (Gen 2:7) | χοῦν ἀπὸ τῆς γῆς | γαῖα (WD 61, Th. 571) | `אֲדָמָה` (the material) | (a) for γῆ; `עָפָר` only for κόνις |
| `נִשְׁמַת חַיִּים` (Gen 2:7) | πνοὴν ζωῆς | πνοιαί (Th. 253, 268: of winds) | `מַשָּׁבִים` | (a) in form, not in sense: a note |
| `לַעֲבֹד אֶת הָאֲדָמָה` (Gen 2:5, 3:23) | ἐργάζεσθαι τὴν γῆν | ἐργάζομαι | `עָבַד` | (a) |
| `מְלַאכְתּוֹ` (Gen 2:2–3); `מַעֲשֵׂנוּ` (Gen 5:29) | τὰ ἔργα | ἔργον | `מְלָאכָה` / `מַעֲשֶׂה` | (a) |
| `לְשָׁמְרָהּ` (Gen 2:15), `לִשְׁמֹר` (Gen 3:24) | φυλάσσειν | φυλάσσω | `שָׁמַר` | (a) |
| `בְּזֵעַת אַפֶּיךָ` (Gen 3:19) | ἐν ἱδρῶτι | ἱδρώς (WD 289) | `זֵעָה` | (a) |
| `לֶחֶם` (Gen 3:19) | ἄρτος | ἄρτος (WD 442) | `לֶחֶם` | (a); βίος (WD 42) is `מִחְיָה` |
| `עֲרוּמִּים` (Gen 2:25) | γυμνοί | γυμνός (WD 391) | `עָרֹם` | (a) |
| `אִשָּׁה` (Gen 2:22–23) | γυνή | γυνή | `אִשָּׁה` | (a) |
| `טוֹב וָרָע` (Gen 2:9, 17; 3:5, 22) | καλὸν καὶ πονηρόν | ἀγαθόν τε κακόν τε (Th. 219, 906) | `טוֹב וָרָע` | (b): the Hebrew says it, the Greek words differ – noted |
| `כִּי טוֹב` (Gen 1:4 …) | ὅτι καλόν | καλός | `יָפֶה` | (b) avoided: `טוֹב` never for καλός |
| `תְּשׁוּקָתֵךְ` (Gen 3:16) | ἡ ἀποστροφή σου | ἔρος, ἵμερος | `חֵשֶׁק`, `כִּסּוּף` | (b) avoided |
| `הַנְּפִלִים`, `הַגִּבֹּרִים` (Gen 6:4) | οἱ γίγαντες | Γίγαντες (Th. 50, 185) | `הַגִּיגַנְטִים` | (a) – the note; `נְפִלִים`, `גִּבֹּרִים` never in a line (gated to γίγας, which is rendered by its name) |
| `אַנְשֵׁי הַשֵּׁם` (Gen 6:4) | οἱ ἄνθρωποι οἱ ὀνομαστοί | ἀνδρῶν ἡρώων θεῖον γένος, οἳ καλέονται ἡμίθεοι (WD 159–160) | `הֵרוֹאִים`, `חֲצִי־אֵלִים` | a motif (Hendel 1987); no shared Greek word |
| `מֵעוֹלָם` (Gen 6:4) | ἀπʼ αἰῶνος | αἰών (Th. 609: "lifetime") | `יְמֵי חַיִּים` (by sense) | (a) in form, not in sense: `עוֹלָם` gated to αἰών, and not used there |
| `צַדִּיק` (Gen 6:9) | δίκαιος | δίκαιος | `צַדִּיק` | (a) |
| `בְּדֹרֹתָיו` (Gen 6:9) | ἐν τῇ γενεᾷ αὐτοῦ | γενεή (WD 160) | `דּוֹר` | (a) |
| `מִזְבֵּחַ` (Gen 8:20) | θυσιαστήριον | βωμός (Th. 4, 557; WD 136) | `מִזְבֵּחַ` | (c): the LXX avoids βωμός for an altar of God |
| `רֵיחַ הַנִּיחֹחַ` (Gen 8:21) | ὀσμὴν εὐωδίας | κνίση (Th. 556?) | `רֵיחַ־חֵלֶב` | `נִיחוֹחַ` never |
| `וַיְקַדֵּשׁ` (Gen 2:3); `קֹדֶשׁ` | ἡγίασεν; ἅγιος | ἱερός (WD 770 ἑβδόμη ἱερὸν ἦμαρ) | `קָדוֹשׁ` | (c): the LXX uses ἅγιος, not ἱερός, for the holiness of Israel's God – noted |
| `כִּימָה`, `כְּסִיל` (Job 9:9, 38:31) | Πλειάς, Ὠρίων | Πληιάδες, Ὠαρίων (WD 383, 572, 598, 609, 615, 619) | `כִּימָה`, `כְּסִיל` | (a) |
| `שֹׁחַד` (Deut 16:19; Exod 23:8) | δῶρα | δῶρον, δωροφάγος (WD 39, 221, 264) | `מַתָּנָה` | (a) in form: the note, not the line |
| `עָרְמָה` (Exod 21:14) | δόλος | δόλος | `עָרְמָה` | (a) |
| `זָדוֹן` (Prov 11:2, 13:10) | ὕβρις | ὕβρις | `זָדוֹן` | (a) |
| `בְּתוּלָה` (Gen 24:16), `עַלְמָה` (Isa 7:14) | παρθένος | παρθένος | `בְּתוּלָה` | (a) |
| `הֵילֵל בֶּן שָׁחַר` (Isa 14:12) | ὁ ἑωσφόρος | Ἑωσφόρος (Th. 381) | `מֵבִיא־הַשַּׁחַר` | (a) – the note |

## 7. Reserved and gated words (checked by `hesiod_tools.py verify`; `gates` prints the regexes)

### 7.1 Never in a line (no Greek counterpart in Hesiod)
`אֱלֹהִים` (and its forms) · the root ברא · `תַּנִּין` · `לִוְיָתָן` · `רַהַב` · `תְּהוֹם` · `תֹּהוּ` / `בֹּהוּ` · `רָקִיעַ` ·
`חֹשֶׁךְ` · `שְׁאוֹל` (Hades is `הָאדֵס`, Tartaros `טַרְטָרוֹס`, Erebos `אֶרֶבוֹס`) · `מַבּוּל` · the root שבת · `נִיחוֹחַ` ·
`תְּשׁוּקָה` · `נֶחְמָד` · `עֵדֶן` · `צֵלָע` · `עֵזֶר כְּנֶגְדּוֹ` · the root עצב (`עֶצֶב`, `עִצָּבוֹן`) · `קוֹץ וְדַרְדַּר` ·
`אָרוּר` / the root ארר · `בֵּרַךְ` / `בְּרָכָה` · `בְּרִית` · `נָפַח` · `יֶפֶת` · `יְאֹר` · `הֵיכָל` · `מִשְׁכָּן` · `כַּלָּה` ·
`שֹׁחַד` · `נְפִלִים` / `גִּבֹּרִים` (except as licensed below: in practice never, since γίγας is `הַגִּיגַנְטִים`).

### 7.2 Only for their Greek counterpart
| Hebrew | Licensed by | Why |
|---|---|---|
| `רֵאשִׁית` | ἀρχή | Gen 1:1 (a) |
| `נִהְיָה` | γίγνομαι (and its compounds) | Gen 1:3 LXX (a) |
| `יָצַר` (the root) | πλάσσω, συμπλάσσω | Gen 2:7 (a) |
| `עָבַד` / `עֶבֶד` (the root עבד) | ἐργάζομαι; δμώς | Gen 2:5, 15, 3:23 (a) |
| `מְלָאכָה` | ἔργον | Gen 2:2–3 (a) |
| `שָׁמַר` (the root) | φυλάσσω, φύλαξ | Gen 2:15, 3:24 (a) |
| `זֵעָה` | ἱδρώς | Gen 3:19 (a) |
| `לֶחֶם` | ἄρτος | Gen 3:19 (a) |
| `עָרֹם` / `עֵירֹם` | γυμνός | Gen 2:25, 3:7 (a) |
| `נָחָשׁ` | ὄφις | Gen 3:1 (a) |
| `אֲדָמָה` | χθών, χθόνιος; γαῖα in the material sense | §5 |
| `עָפָר` | κόνις | Gen 2:7, 3:19 |
| `נֶפֶשׁ` | ψυχή | Gen 2:7 (a) |
| `נְשָׁמָה` | πνοή / πνοιή | Gen 2:7 (a) |
| `רוּחַ` | ἄνεμος, πνοιή, ἀήτης, ἄελλα, θύελλα, πνέω | Gen 1:2, 8:1 (the winds) |
| `טוֹב` | ἀγαθός, ἐσθλός, ἐύς | Gen 1:4 … (b) |
| `צַדִּיק` / `צֶדֶק` | δίκαιος, δίκη | Gen 6:9 (a) |
| `מִשְׁפָּט` | δίκη | §5 |
| `עוֹלָם` | αἰών | Gen 6:4 LXX (a) in form |
| `דּוֹר` | γενεή, γενεά | Gen 6:9 (a) |
| `מִין` | never – γένος is `גֶּזַע`; `מִין` would echo Gen 1:21 through the Hebrew only (b) | – |
| `מִזְבֵּחַ` | βωμός | Gen 8:20 (c) |
| `קָדוֹשׁ` / the root קדש | ἱερός, ζάθεος | Gen 2:3 (c) |
| `שְׁבִיעִי` | ἕβδομος | Gen 2:2–3 |
| `כִּימָה` / `כְּסִיל` | Πληιάς / Ὠρίων | Job 9:9, 38:31 (a) |
| `דְּרָקוֹן` | δράκων | the dossier |
| `גֶּזַע` | γένος | §5 |
| `זֶרַע` / `קָצִיר`, `קָצַר` / `קַיִץ` / `חֹרֶף` | σπέρμα, σπείρω / ἀμάω, ἄμητος / θέρος / χειμών | Gen 8:22 |
| `שְׁבוּעָה` / `נִשְׁבַּע` | ὅρκος / ὀμνύω, ἐπορκέω | – |
| `תִּקְוָה` | ἐλπίς | – |
| `עָרְמָה` / `עָרוּם` | δόλος, δόλιος, δολόμητις | Exod 21:14 (a); Gen 3:1 `עָרוּם` |

### 7.3 Always vocalized (traps)
`אֵל`, `אֵלִים`, `אֵלָה`, `אֵלוֹת` (θεός, θεά: "to", "these") · `הֵרָה` (Hera: "pregnant") · `אַתֵנָה` (Athena: "I will
give") · `רֵאָה` (Rhea: "saw", "lung") · `אָרֵס` (Ares: "poison") · `אֶרוֹס` (Eros: "betrothed") · `אֶתֶר` (Aither:
"site") · `הֵבָּה` (Hebe: "let us", Gen 11:3–4) · `הַהוֹרוֹת` (the Horai: "parenthood") · `כְּסִיל` (Orion: "fool"). (`מָוֶת`, `יָם`, `אֶרֶץ`, `לַיְלָה` as names need no niqqud: the noun and the name are one.)

## 8. Formulas and epithets (fixed; checked by script)

Columns: id | the Greek, as a regex on the diacritic-free lower-case line (σ for ς; `\s` between words) | the Hebrew the
bracket-free unvocalized `>` line must contain (a regex: allows ו/ה prefixes where marked) | lines (from the base). A
deliberate departure: `[סטייה מן הנוסחה: <reason>]` in the entry.

| Id | Greek (regex) | Hebrew (regex) | Lines |
|---|---|---|---|
| F1 | `πατηρ ανδρων τε θεων τε` | `אבי האנשים והאלים` | TH 542, 643, 838, 929l; WD 59, 169a |
| F2 | `θεων πατερ ηδε και ανδρων` | `אבי האלים וגם האנשים` | TH 47, 457, 468 |
| F3 | `μουσαι ολυμπιαδεσ κουραι διοσ αιγιοχοιο` | `המוזות האולימפיות, עלמות זאוס נושא־האגיס` | TH 25, 52, 966, 1022 |
| F4 | `δωτηρεσ εαων` | `נותני הטובות` | TH 46, 111, 633, 664 |
| F5 | `αιγιοχ` | `נושא־האגיס` | (every αἰγίοχος) |
| F6 | `νεφεληγερετ` | `מקבץ־העננים` | TH 558; WD 53, 99 |
| F7 | `γαιησ τε και ουρανου` | `ארץ ושמים` | TH 147, 154, 421, 463, 644 |
| F8 | `ουρανου αστεροεντοσ\|ουρανον αστεροεντα\|ουρανοσ αστεροεισ` | `שמים זרועי־הכוכבים` | TH 106, 127, 463, 470, 737, 808, 891 … |
| F9 | `ευρεα νωτα θαλασσησ` | `גבי הים הרחבים` | TH 762, 781, 790, 972 |
| F10 | `ποντου τ ατρυγετοιο\|ποντοσ ατρυγετοσ\|ποντον ατρυγετον` | `ים עקר` | TH 696?, 728, 737, 808 … |
| F11 | `δια χρυσεην αφροδιτην` | `בזכות אפרודיטה הזהובה` | TH 822, 962, 1005, 1014 |
| F12 | `βροντην τε στεροπην τε\|βροντησ τε στεροπησ τε` | `(רעם וברק\|ברונטס\|הרעם ומן הברק)` | TH 140 (the names Brontes … Steropes), 286, 707, 854 |
| F13 | `νυκτασ τε και ηματα` | `לילות וימים` | TH 722, 724; WD 385, 562 |
| F14 | `μιχθεισ εν φιλοτητι\|φιλοτητι μιγεισ\|μιγεισ ερατη φιλοτητι` | `בהתייחד[הו]? באהבה` | TH 923, 941, 944, 980, 333, 1009, 1018, 970 … |
| F15 | `θαλερην ποιησατ ακοιτιν` | `עשה לו רעיה פוריה` | TH 921, 946, 948, 999 |
| F16 | `ολυμπια δωματ εχο` | `שוכנ(י\|ות) הארמונות האולימפיים` | TH 75, 114, 783, 804, 963; WD 81, 110, 128 (revised §11.1) |
| F17 | `ανδρων τε θεων τε` | `האנשים והאלים` | (the rest of F1's lines) |
| F18 | `γενοσ αιεν εοντων` | `הקיימים תמיד` | TH 21, 33, 105 |
| F19 | `αφθιτα μηδεα ειδωσ` | `יודע תחבולות נצח` | TH 545, 550, 561 |
| F20 | `περι μηδεα ειδωσ` | `היודע תחבולות יותר מכולם` | TH 559 = WD 54 |
| F21 | `αγαθον τε κακον τε` | `טוב ורע` | TH 219, 900?, 906 |
| F22 | `κρονοσ αγκυλομητησ` | `קרונוס עקום־התחבולות` | TH 168, 473, 495 |
| F23 | `επι χθονι πουλυβοτειρη\|επι χθονα πουλυβοτειραν` | `על פני האדמה רבת־המזון` | WD 157, 169d, 252 |
| F24 | `υπο χθονοσ ευρυοδειησ` | `מתחת לאדמה רחבת־הדרכים` | TH 620, 717, 787 |
| F25 | `δημητεροσ ιερον ακτην` | `גרעיני דמטר הקדושים` | WD 466, 597, 805 |
| F26 | `κρονιδη\|κρονιων\|κρονιωνοσ\|κρονιωνα` | `בן־קרונוס` | every patronymic of Zeus |
| F27 | `ιαπετιονιδ\|ιαπετονιδ` | `בן־יאפטוס` | TH 528, 543, 559, 614, 746?; WD 54 |
| F28 | `γλαυκωπισ αθηνη` | `אתנה בהירת־העיניים` | TH 13, 573, 888; WD 72 |
| F29 | `τιτηνεσ τε θεοι` | `הטיטנים, האלים,` | TH 630, 648, 668 (the line is fixed by its first copy) |
| F31 | `αινη δηιοτητ` | `קטל המחריד` | TH 662, 852 (§11.4) |
| F32 | `ουρεοσ εν βησσησ` | `בערוצי ההר` | TH 860, 865 (§11.4) |
| F33 | `θεοισ επιεικελ` | `דמויי?־אלים` | TH 968, 987, 1020 (§11.5) |
| F34 | `δια θεαων` | `הנהדרת באלות` | TH 376, 976, 992, 1017 … (§11.5) |
| F30 | `αγκυλομητ` | `עקום־התחבולות` | every ἀγκυλομήτης (Kronos: F22; Prometheus TH 546, WD 48; §11.3) |

(The Hebrew of every formula is the coordinator's first fixing: the Theogony translator may revise one, with its reason,
at its first occurrence – then the coordinator updates this table and the regex before the second poem.)

## 9. Repeated lines (identical Greek: the later copy copies the first copy's Hebrew)

TH 25 = 52 = 966 = 1022; 46 = 111; 118 = 794; 150 = 671; 152 = 673 = WD 149; 154 = 421; 519 = 747; 559 = WD 54; 572 =
WD 71; 573 = WD 72; 630 = 668; 707 = 854; 736–739 = 807–810; 768 = 774; 968 = 1020; WD 124–125 = 254–255. `verify`
lists every pair whose Hebrew differs; the Works and Days translator copies the Theogony's Hebrew for the three shared
lines, character for character, and changes exactly what the Greek changes in near-repeats (`data` shows "similar"
lines with their Hebrew).

## 10. Self-test lines (`hesiod_tools.py selftest`: | KEY label | expect | Hebrew |)

| Line | Expect | Hebrew |
|---|---|---|
| TH 116 | ok | אָכֵן רִאשׁוֹנָה נִהְיָה פַּעַר, וְאַחֲרָיו |
| TH 116 | err | אכן ראשונה היה תהו, ואחריו |
| TH 116 | err | אכן בראשית נהיה פער, ואחריו |
| TH 45 | ok | מֵרֵאשִׁית, אֲשֶׁר אֶרֶץ וְשָׁמַיִם הָרָחָב יָלְדוּ, |
| TH 45 | err | מראשית, אשר ארץ ושמים הרחבים הולידו, |
| TH 238 | ok | בְּהִתְיַחֲדוֹ עִם אֶרֶץ, וְאֶת קֵטוֹ יְפַת־הַלְּחָיַיִם |
| TH 238 | err | בהתייחדו עם ארץ, ואת התנין יפת־הלחיים |
| TH 238 | err | בהתייחדו עם גאיה, ואת קטו יפת־הלחיים |
| TH 299 | ok | וְחֶצְיָהּ שׁוּב – מִפְלֶצֶת, נָחָשׁ אָיֹם וְגָדוֹל, |
| TH 297 | ok | בִּמְעָרָה חֲלוּלָה – אֶת אֶכִידְנָה הָאֱלוֹהִית, קְשַׁת־הַלֵּב, |
| TH 297 | err | במערה חלולה – את אכידנה, נחש קשת־הלב, |
| TH 185 | ok | הוֹלִידָה אֶת הָאֶרִינִיּוֹת הָעַזּוֹת וְאֶת הַגִּיגַנְטִים הַגְּדוֹלִים, |
| TH 185 | err | הולידה את הארינייות העזות ואת הנפילים הגדולים, |
| TH 25 | ok | הַמּוּזוֹת הָאוֹלִימְפִּיּוֹת, עַלְמוֹת זֵאוּס נוֹשֵׂא־הָאֶגִיס: |
| TH 25 | err | המוזות האולימפיות, בנות זאוס נושא־האגיס: |
| TH 921 | ok | וְאַחֲרוֹנָה – אֶת הֵרָה עָשָׂה לוֹ רַעְיָה פּוֹרִיָּה; |
| TH 921 | err | ואחרונה – את הרה עשה לו רעיה פוריה; |
| TH 921 | err | ואחרונה – את הֵרָה לקח לאשה פוריה; |
| TH 16 | ok | וְאֶת תֶּמִיס הַנַּעֲרֶצֶת וְאֶת אַפְרוֹדִיטָה מְעֻגֶּלֶת־הָעַפְעַפַּיִם, |
| TH 16 | err | וְאֶת תֶּמִיס הַנַּעֲרֶצֶת וְאֶת מְעֻגֶּלֶת־הָעַפְעַפַּיִם, |
| WD 289 | err | אך לפני המעלה שמו האלים זעה; |
| WD 289 | ok | אַךְ לִפְנֵי הַמַּעֲלָה שָׂמוּ הָאֵלִים זֵעָה; |
| WD 289 | err | אך לפני המעלה שמו האֵלים יזע; |
| WD 42 | ok | כִּי הָאֵלִים הִסְתִּירוּ וּמַחְזִיקִים אֶת הַמִּחְיָה מִבְּנֵי אָדָם: |
| WD 42 | err | כי האֵלים הסתירו ושומרים את הלחם מבני אדם: |
| WD 397 | ok | וְלֹא אוֹסִיף לְךָ מִדָּה; עֲבֹד, פֶּרְסֵס הַפֶּתִי, |
| WD 397 | err | ולא אוסיף לך מידה; עמול, פרסס הפתי, |
| WD 770 | ok | רִאשׁוֹן – רֹאשׁ הַחֹדֶשׁ, הָרְבִיעִי וְהַשְּׁבִיעִי – יוֹם קָדוֹשׁ: |
| WD 770 | err | ראשון – ראש החודש, הרביעי והשביעי – שבת קודש: |

## 11. Merged from the translators (numbered by run; the coordinator)

### 11.1 TH 1–115 (translator 1, part 1; merged 2026-10-24)
The full list with first lines and reasons: `1-תולדות-האלים/project.md`, "TH 1–115", Proposals. Binding from here on:
1. **Formulas:** F18 revised to `הקיימים תמיד` (ἐόντων agrees with the genitive before γένος, so the epithet follows
   that noun: `הגזע הקדוש של בני־האלמוות, הקיימים תמיד`; ἀεί = `תָּמִיד` everywhere); F16 revised to `שוכני / שוכנות
   הארמונות האולימפיים` (Ὀλύμπια is an adjective). F2, F3, F4, F5 (`נוֹשֵׂא־הָאֶגִיס`), F8, F22, F28 confirmed.
   **Tool:** a `|` inside a table cell is written `\|` (the formula rows F8, F10, F12, F14, F16, F26, F27 had split
   the table: `_table()` fixed); the `טוב` gate licenses ὄλβιος (`שְׂבַע־טוֹבָה`).
2. **Epithets:** πότνια `גְּבִירָה`; χρύσεος `זָהוֹב`; ἰοχέαιρα `יוֹרַת־הַחִצִּים`; ἑκηβόλος `פּוֹגֵעַ־מֵרָחוֹק`; γαιήοχος
   `אוֹחֵז־הָאֲדָמָה`; αἰδοῖος `נַעֲרָץ`; ἑλικοβλέφαρος `מְעֻגֶּלֶת־הָעַפְעַפַּיִם`; χρυσοστέφανος `עֲטוּרַת־הַזָּהָב`;
   ἐρίγδουπος `הַמַּרְעִים` (βαρύκτυπος `כְּבַד־הָרַעַם`); μητίετα `רַב־הַתְּבוּנָה`; διοτρεφής `חֲנִיכֵי־זֵאוּס`; ἐχέφρων
   `שְׁקוּל־דַּעַת`; ἀρτιεπής `מְדֻיֶּקֶת־הַמִּלִּים`; ὁμόφρων `תְּמִימוֹת־דֵּעִים`; ἄγραυλος `לָן־בַּשָּׂדֶה`; ἐρισθενής
   `רַב־הָעָצְמָה`; λαμπρός `זוֹהֵר`; μέλας `שָׁחֹר`; δνοφερός `קוֹדֵר`; νιφόεις `מֻשְׁלָג`; λιπαρός `מַבְהִיק`;
   πολύπτυχος `רַב־הַנְּקִיקִים`; ἀπείριτος `אֵינְסוֹפִי`; ἁλμυρός `מָלוּחַ`; ἰοειδής `סְגֹל־הַמַּרְאֶה`; περικαλλής
   `יְפֵהפֶה`; ἐπήρατος `מַקְסִים`; ἄμβροτος `אַלְמוֹתִי`; ἀμβρόσιος `אַמְבְּרוֹסִי`; λειριόεις `דְּמוּי־שׁוֹשָׁן`; αἰθαλόεις
   `לוֹהֵט`; ἀκάματος `בְּלִי לֵאוּת`; θέσπις `שֶׁל אֵלִים` (the `אלוהי` string is gated with `אֱלֹהִים`); εὐρύς `רָחָב`
   (Sky as a name in the singular: `וְשָׁמַיִם הָרָחָב`); φέρτατος `נַעֲלֶה`; προφερής `מֻבְחָר`; κρατερός `עַז`;
   κράτος / κάρτος `עֹז`; ὄλβιος `שְׂבַע־טוֹבָה`.
3. **Song and speech:** ἀείδω `שָׁר`, ὑμνέω `רִנֵּן`, ἀοιδή `שִׁירָה`, ἀοιδός `מְשׁוֹרֵר`, μέλπομαι `זִמֵּר`, μολπή
   `זִמְרָה`, κλείω `שִׁבַּח`, τέρπω `עִנֵּג`, χορός `מָחוֹל`, ἄρχω (begin) `הִתְחִיל`; φωνή `קוֹל`, αὐδή `נִיב` ★, ὄσσα
   `צְלִיל` (ὄσσαν ἱεῖσαι `מְשַׁלְּחוֹת צְלִיל`), ὄψ `נְעִימָה`; ἐμπνέω `הִשְׁרָה`; εἶπον / φημί `אָמַר`, ἐννέπω `סִפֵּר`,
   λέγω `דִּבֵּר`, γηρύω `הִכְרִיז`; ἔτυμος `נָכוֹן`, ἀληθής `אֱמֶת`, ψεῦδος `שֶׁקֶר`.
4. **Honour and kingship:** τιμή `כָּבוֹד`, τιμαί `זְכֻיּוֹת`, τιμάω `כִּבֵּד`; διατάσσω `סִדֵּר`; δατέομαι `חָלַק`,
   διαιρέω `הִקְצָה`; θέμιστες `דִּינִים`, δίκαι `מִשְׁפָּטִים`; ἱλάσκομαι `רִצָּה` (not `כִּפֵּר`); θεράπων `מְשָׁרֵת`;
   χαίρετε `שָׁלוֹם לָכֶן`; νόμος `חֹק`, ἦθος `מִנְהָג`; δόσις `מַתַּת`, δῶρον `מַתָּנָה`; κλέος `שֵׁם`; ἐμβασιλεύω
   `מָלַךְ`.
5. **Forgetting:** the λαθ- family is the root שכח: λησμοσύνη `שִׁכְחָה` (= the name Λήθη, 227), ἐπιλήθομαι `שָׁכַח`.
6. **Other words:** ἀήρ `עֲרָפֶל`; ὥρα (season) `עוֹנָה`; ἐνιαυτός `שָׁנָה`; μείς `חֹדֶשׁ`; φθίνω `דָּעַךְ`; τελέω `הִשְׁלִים`;
   θαλία `חֲגִיגָה`; λέχος `מִשְׁכָּב`; κορυφή `פִּסְגָּה`; στῆθος `חָזֶה`; σκῆπτρον `שַׁרְבִיט`; δάφνη `דַּפְנָה`; ποιμαίνω
   `רָעָה`, ποιμήν `רוֹעֶה`, ἀρήν `טָלֶה`; γαστήρ `בֶּטֶן`; κρήνη `מַעְיָן`; ῥέω `זָרַם`; χέω `יָצַק`; ἔρση `טַל`; γελάω
   `צָחַק`; νικάω `נִצֵּחַ`; εἶμι `הָלַךְ`, ἔρχομαι `בָּא`; ὁράω / εἶδον `הִבִּיט`; κέλομαι `צִוָּה`; ἐθέλω `רָצָה`; φιλέω
   `אָהַב`; τρέφω `גִּדֵּל`.
7. **Names** (§2.3): Περμησσός `פֶּרְמֵסוֹס`, Ὀλμειός `אוֹלְמֵיאוֹס`, Ἐλευθήρ `אֶלֶאוּתֵר`, Ἵππου κρήνη `מַעְיַן הַסּוּס`;
   Ἵμερος personified `כִּסּוּף` (T); the vocative Μοῦσαι `מוּזוֹת` (no article).
8. **Open for the user** (in the report): αἰδώς `בּוּשָׁה` reads "shame" in Modern Hebrew (at TH 92 it is reverence);
   `זְכֻיּוֹת` has the Modern sense "rights".

### 11.2 TH 116–336 (translator 1, part 2; merged 2026-10-24)
Full list (with first lines, the ~70 transcribed names, and the reasons): `1-תולדות-האלים/project.md`, "TH 116–336".
1. **Translated names (§3.2), new:** Μόρος `גּוֹרָל`, Μῶμος `גְּנַאי`, Ὀιζύς `מְצוּקָה`, Ὑσμῖναι `קְרָבוֹת`, Μάχαι
   `מִלְחָמוֹת`, Φόνοι `רְצִיחוֹת`, Ἀνδροκτασίαι `הֲרִיגוֹת`, Νείκεα `רִיבִים`, Ψευδεῖς Λόγοι `אֲמָרִים כּוֹזְבִים`,
   Ἀμφιλλογίαι `מַחְלוֹקוֹת`, Δυσνομίη `סֵדֶר־רַע` (against Εὐνομίη `סֵדֶר־טוֹב`), Ἄτη `אֵיד` ★. Θάνατος / Ὕπνος are written
   vocalized `מָוֶת` / `שֵׁנָה` (the table's form; `שנה` also "year").
2. **Names table changed:** Κήρ = `קֵר` (pl. `הַקֵּרוֹת`); the Meliai = `נִימְפוֹת הַמֵּילָה` (μελία "ash" = `מֵילָה`;
   `אֵלָה` is the terebinth and reads "goddess").
3. **Coordinator's rulings:** (a) **θεῖος, θεσπέσιος = `אֱלוֹהִי` / `אֱלוֹהִית`, always vocalized** (a gate of its own,
   licensed by θεῖος / θεσπέσιος, and a trap: unvocalized it reads "the God of"); θέσπις stays `שֶׁל אֵלִים` (part 1), δῖος
   `נֶהְדָּר`. (b) **κλέος = `תְּהִלָּה`** (revised from `שֵׁם`, TH 100 changed): ὄνομα keeps `שֵׁם`, because the LXX's
   bridge to `אַנְשֵׁי הַשֵּׁם` (Gen 6:4) is ὀνομαστοί (and TH 148's οὐκ ὀνομαστοί); κλέος ἐσθλόν `תְּהִלָּה טוֹבָה`.
   (c) F12's Hebrew is `(רעם וברק\|ברונטס)`: a formula regex cannot contain `.` (the tool strips punctuation).
   (d) Two REQUIRED rows added to the tool: ἄμωμος `תָּמִים` (LXX Exod 29:1), ἁμαρτάνω `חָטָא` (LXX Gen 4:7).
4. **Words chosen to pass a gate without bending it** (binding): ναίω `גָּר` (not `דָּר`: the `דור` gate; 130, 274, 285,
   303, 329), οἰκέω `חָנָה` (not `יָשַׁב` in forms like `בשבתו`: the `שבת` gate), ἀγήνωρ `אַמִּיץ` (the dossier's
   `עז־הרוח` hits the `רוח` gate); `משלחם` → `משלח אותם` (the `לחם` gate).
5. **Recurring words:** πέλωρος / πέλωρον `מִפְלַצְתִּי` / `מִפְלֶצֶת`; μηχανή `תּוּשִׁיָּה`, ἀμήχανος `שֶׁאֵין כְּנֶגְדּוֹ
   תּוּשִׁיָּה`; ἀδάμας `שָׁמִיר`; ἅρπη `חֶרְמֵשׁ`, δρέπανον `מַגָּל`; μήδεα (genitals) `מְבוּשִׁים`; τίνω / τίσις the root
   נקם; κευθμών / κεῦθος `מַחֲבוֹא`; ὁπλότατος `הַצָּעִיר`; τοκεύς `מוֹלִיד`; ὑπερήφανος `גֵּאֶה`; ὑβριστής `זֵד`; λυγρός
   `מַר`; ἀγήραος `שֶׁאֵינוֹ מַזְקִין`; κλυτός `מְהֻלָּל`; χρώς `עוֹר`; οἶδμα `נַחְשׁוֹל` (TH 109, 131 changed), κῦμα `גַּל`;
   πνοιαὶ ἀνέμων `מַשְׁבֵי הָרוּחוֹת`; ἄπλαστος `בִּלְתִּי־יְצוּרוֹת`.
6. **Epithets:** κρατερόφρων `קְשֵׁה־הַלֵּב`; ἑλικῶπις `מְעֻגֶּלֶת־הָעֵינַיִם`; λευκώλενος `צְחוֹרַת־הַזְּרוֹעוֹת`; βίη
   Ἡρακληείη `כֹּחַ הֵרַקְלֵס`.
7. **First copies fixed** (§9): 118 (= 794), 150 (= 671), 152 (= 673 = WD 149), 154 (= 421).

### 11.3 TH 337–616 (translator 2, part 3; merged 2026-10-24)
Full lists (the 23 rivers and 41 Oceanids transcribed, every word with its first line and reason, the recorded splits):
`1-תולדות-האלים/project.md`, "TH 337–616". Binding from here on:
1. **Formulas:** none revised; F30 added (`αγκυλομητ` → `עקום־התחבולות`, Kronos and Prometheus alike); F23 also in the
   accusative (531); F6 first at TH 558. 413 is not F7 (earth and sea).
2. **Coordinator's rulings:** ἠγάθεος = `מְקֻדָּשׁ` (the same formation as ζάθεος; `קָדוֹשׁ` stays ἱερός's: TH 499
   changed); the gates widened, never the Hebrew: `ערם` licensed by δόλος (`הֶעֱרִים`, 494), the root קדש by ἠγάθεος;
   names table: Κράτος `עוֹז` (plene), Ἀμφιγυήεις also under the treebank's lemma ἀμφιγύεις and written
   `צוֹלֵעַ־הָרַגְלַיִים` (plene with niqqud, so that the plene draft passes); the plurals `בְּנוֹת אוֹקֵאָנוֹס` (364) and
   `בְּנֵי־שָׁמַיִם` (502) carry a `[היתר שם]`.
3. **Key words:** γέρας `מַשְׂאֵת` ★ (kept apart from τιμή `כָּבוֹד`); ὀπάζω `זִכָּה`; πόρω `הֶעֱנִיק`, πέπρωται `נִגְזַר`;
   μείρομαι `נָחַל`; εὐχή / εὔχομαι `תְּפִלָּה` / `הִתְפַּלֵּל`; καταπίνω `בָּלַע` (the LXX's word); νηδύς `מֵעַיִם`; ἀντί
   `תַּחַת`; σῆμα `אוֹת`; στηρίζω `קָבַע` (not `הִצִּיב`: no `מַצֵּבָה` manufactured); δεσμός `כֶּבֶל`, δέω `אָסַר`, λύω
   `הִתִּיר`; ἀετός `נֶשֶׁר`; χώομαι `חָרָה`, χόλος `זַעַם`, χολόω `הִזְעִים`; ἐρίζω `הִתְגָּרָה`; ἀνάγκη `הֶכְרֵחַ`; θαῦμα
   `פֶּלֶא`; Ἠριγένεια `בַּת־הַבֹּקֶר` (T).
4. **Mekone and the woman** (binding for the Works and Days, §13): βοῦς sg. `שׁוֹר` / pl. `בָּקָר`; ὀστέα `עֲצָמוֹת`;
   δημός `חֵלֶב`; ἄλειφαρ `שֻׁמָּן`; καίω `שָׂרַף`; θυήεις `רֵיחָנִי`; πῦρ `אֵשׁ`; κλέπτω `גָּנַב`; νάρθηξ `גִּבְעוֹל כַּלְכָּל`;
   καλὸν κακόν `הָרָעָה הַיָּפָה`; θῆλυς `נְקֵבָה`; πλαστός `יְצוּרָה`; στεφάνη `עֲטָרָה`, στέφανος `זֵר`; καλύπτρα `צָעִיף`;
   δαιδάλεος `מַעֲשֵׂה־אָמָּן`; κηφήν `רַחְפָן`, μέλισσα `דְּבוֹרָה`, σμῆνος / σίμβλος `כַּוֶּרֶת`; κάματος `יְגִיעַ`; γάμος
   `נִשּׂוּאִים`; γηροκόμος `מְכַלְכֵּל שֵׂיבָה`; χηρωσταί `יוֹרְשִׁים רְחוֹקִים`.
5. **Epithets:** καλλίσφυρος `נְאוַת־הַקַּרְסֻלַּיִם` (εὔσφυρος keeps `יְפַת־`); ὑπερμενής `עֲצוּם־הַכֹּחַ` (ἐρισθενής keeps
   `רַב־הָעָצְמָה`); κουροτρόφος `מְגַדֶּלֶת־הַנְּעָרִים`; ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם`; ἐρίκτυπος `רַב־הָרַעַם`; ἄλκιμος
   `בַּעַל־הַחַיִל`; φαίδιμος `הָדוּר`; ἀγλαός `מַזְהִיר`.
6. **First copies fixed:** 519 (= 747); 559, 572, 573 (= WD 54, 71, 72).

### 11.4 TH 617–885 (translator 2, part 4; merged 2026-10-24)
Full lists: `1-תולדות-האלים/project.md`, "TH 617–885". Binding from here on:
1. **Formulas:** F31 `αινη δηιοτητ` → `(ה)קטל המחריד` (662, 852; αἰνός `מַחְרִיד`, ἐπαινή `נוֹרָאָה`); F32 `ουρεοσ εν
   βησσησ` → `בערוצי ההר` (860, 865); F12 also in the genitive (845 `מן הרעם ומן הברק`). First copies fixed: 630 (= 668),
   707 (= 854), 736–739 (= 807–810), 768 (= 774).
2. **"Never":** οὐδέ ποτε / οὔ ποτε = `אַף פַּעַם` (not `לְעוֹלָם`: `עוֹלָם` is gated to αἰών); "kind" = `סוּג` (`מִין` never).
3. **Typhoeus and the underworld:** Tartarus `טַרְטָרוֹס` (never `שְׁאוֹל`, `תְּהוֹם`); χάσμα `בֶּקַע`; ὄφις `נָחָשׁ`, δράκων `דְּרָקוֹן`; θεσπέσιος `אֱלוֹהִי` ★ (§11.2); ὄψ `נְעִימָה` kept (even of the monster:
   open, 830); ἀτμή `אֵד`, τήκω `נָמֵס`, κασσίτερος `בְּדִיל`, χόανος `מַצְרֵף`; βασιλεύω `הָיָה לְמֶלֶךְ`, ἀνάσσω `מָלַךְ`.
4. **Collisions resolved by new words:** ὀξύς `חַד` / ταχύς (another word); ταῦρος `פַּר` / βοῦς `שׁוֹר`; παιπαλόεις
   `מְסֻלָּע` / καταστυφελός `טְרָשִׁי`; ἄελλα `סוּפָה` / θύελλα `סְעָרָה`; σέλας `זִיו` / φαέθω `בּוֹהֵק`.
5. **Names:** Γύης `גִּיֵּס` is written vocalized at every occurrence (the table's string strips to the defective `גיס`).

### 11.5 TH 886–1022, 929a–t (translator 2, part 5; merged 2026-10-24)
Full lists: `1-תולדות-האלים/project.md`, "TH 886–1022". Binding from here on:
1. **Formulas:** F33 `θεοισ επιεικελ` → `דמויי־אלים` (θεοῖς ἐπιείκελα τέκνα `צאצאים דְּמוּיֵי־אֵלִים`); F34 `δια θεαων`
   → `הנהדרת באלות`. First copy fixed: 968 (= 1020). F21 at 900 and 906.
2. **Names:** Metis `מֵטִיס` / μῆτις `תְּבוּנָה` (the pun in the note); translated: Φόβος `בֶּהָלָה`, Δεῖμος `אֵימָה`,
   Πλοῦτος `עֹשֶׁר`; kept: the Charites `אַגְלָאִיָּה`, `אֶוּפְרוֹסִינָה`, `תָּלִיָּה`, Harmonia; δαίμων `דַּיְמוֹן`
   (transcribed: recommended for the WD's δαίμονες, §13). The treebank's lemmas Αἰονίδης (993) and Εὐνουμίη (902) are
   slips (Αἰονίδης added to the table; Εὐνομίη checked by hand).
3. **Words:** ἄλοχος `בַּת־זוּג`, παρακοίτης `בֶּן־זוּג`; ἥρως `הֵרוֹאִי`; πόλεμος `מִלְחָמָה`, μάχη `מַאֲבָק` (ὑσμίνη
   keeps `קְרָב`); καλλίκομος `נְאַת־הַשֵּׂעָר`; καίνυμαι `עָלָה עַל`; φαίδιμος `הָדוּר` (the `דור` gate now licenses it:
   929b, 940, 986).

### 11.6 Review pass (b), consistency (merged 2026-10-24)
Full list: `1-תולדות-האלים/project.md`, "Review pass (b)". Binding from here on:
1. μάχη `מַאֲבָק` everywhere, the translated name Μάχαι `מַאֲבָקִים` (228; replaces §11.2's `מִלְחָמוֹת`); πόλεμος `מִלְחָמָה`;
   μάρναμαι `נֶאֱבַק`.
2. χαίρετε (the hymnic greeting and farewell, 104, 963) `שָׁלוֹם לָכֶן` / `שָׁלוֹם לָכֶם` (the LXX's χαίρειν for `שָׁלוֹם`);
   χαίρω "rejoice" `שָׂמַח` (438).
3. χρύσεος `זָהוֹב` of objects too (never the construct `זהב`).
4. φθείρω `אִבֵּד` (876, 879; ὀλοός keeps `מַשְׁחִית`, 224); the WD's ὄλλυμι needs its own word (§13).
5. `תָּמִים` only for ἄμωμος; "a full year" `שָׁנָה שְׁלֵמָה` (τελεσφόρος / τετελεσμένος ἐνιαυτός), πλέως `מָלֵא`.
6. πλατύς `מִשְׂתָּרֵעַ`; καρπάλιμος `חִישׁ`; ἀέξω tr. `הִגְדִּיל` / intr. `גָּדַל`; γίγνομαι of a place `נִמְצָא` (a sense split);
   διὰ βουλάς `בַּעֲצוֹת`; δεινός (adj. and adv.) `אָיֹם`; ἱκνέομαι `הִגִּיעַ` in every form; παῖς split by sense: `יֶלֶד`
   (child) / `בֵּן` (a son named with a parent) / `נַעַר` (989) / `בַּת` (952).
7. The tool's `שבת` gate now also lists `שבתם` (652's `ושבתם` had slipped through before the line was changed).

### 11.7 Review pass (c), Hebrew, and the coordinator's rulings on its open points (2026-10-24)
Full list: `1-תולדות-האלים/project.md`, "Review pass (c)". 52 lines changed (vocalized ambiguous words, plene spelling,
agreement, one unintended prophetic formula at 836). Rulings (the user's standing rule for minor decisions):
1. οὐλόμενος = `מַמְאִיר` (fem. `מַמְאֶרֶת`; Lev 13:51, Ezek 28:24), vocalized: the draft's `מְבַלֶּה` reads "having a good time"
   in Modern Hebrew; `אָרוּר` is gated (§7.1), `כִּלָּה` reserved (TH 225, 593).
2. Αἰθίοψ = `כּוּשׁ` (`מֶלֶךְ כּוּשׁ`, TH 985): the biblical name kept (§2.3), but not the plural `כּוּשִׁים`, a slur in Modern
   Hebrew.
3. Νίκη: the table's string is plene (`נִיצָּחוֹן`), so that the plene draft passes.
4. Translated names keep the gender of the Greek name (`לַיְלָה הַשְּׁחוֹרָה`, `מָדוֹן הַמְּתֹעֶבֶת`, `שְׁבוּעָה … מַזִּיק`):
   stated in the intro.
5. `אשה` (not `אישה`) as in every corpus of the folder (161 lines against 24): a folder-wide spelling question for the user.

### 11.8 WD 1–105 (WD translator 1, part 1; merged 2026-10-24 by the WD coordinator)
Full list with first lines and reasons: `2-מעשים-וימים/project.md`, "WD 1–105", Proposals. Binding from here on:
1. **Shared lines:** WD 54, 71 copied from TH 559, 572; WD 72 = TH 573 except the final `;` (the Greek ends the sentence
   with a raised point). Near-repeats aligned: 50, 52, 53, 57, 70; also 83 ≈ TH 589, 105 ≈ TH 613, 18 ≈ TH 929j, 99 ≈ TH 730;
   inside WD 49 = 95 in Hebrew.
2. **Grammar (§4), first fixings:** the gnomic present and the augmentless gnomic imperfect → participle (20, 23, 25–26);
   the potential optative → `הָיָה` + participle; the wish optative with μή → `אַל` + future; hortative `הָבָה`. The gnomic
   aorist proper and the infinitive-for-imperative are still untested (first occurrence: the next part fixes them).
3. **Strife and envy:** Ἔρις `מָדוֹן` (both Strifes, feminine), pl. Ἐρίδων `מְדָנִים` (`[היתר שם]`; Prov 6:14, 19);
   ζηλόω `קִנֵּא`, κοτέω `כָּעַס`, φθονέω `צָרָה עֵינוֹ בְּ־`; νεῖκος `רִיב`; δῆρις `קְטָטָה`; σχέτλιος `אַכְזָרִי` (a sense
   split from TH 488 `אֻמְלָל`); κακόχαρτος `שְׂמֵחַת־הָרָעָה`.
4. **The lawsuit and justice:** δωροφάγος `אוֹכְלֵי־מַתָּנוֹת` (`שֹׁחַד` only in the note); δικάζω `שָׁפַט` (δίκην δικάσσαι
   `לשפוט את המשפט`); κλῆρος `אֲחֻזָּה` (`נַחֲלָה` would share μείρομαι's root, TH 414); κτῆμα `נֶכֶס`; ἀγορά `אֲסֵפָה`;
   ἰθύς `יָשָׁר`, ἰθύνω `יִשֵּׁר`, σκολιός `עָקֹם` (for the straight and crooked judgements of 219–264); νήπιος `פֶּתִי`.
5. **Work:** κεραμεύς `קַדָּר` (the root יצר stays πλάσσω's; κεραμεύς = the LXX's `יוֹצֵר`, a note); τέκτων `חָרָשׁ`
   (vocalized: `חָרַשׁ` is ἀρόω); πτωχός `קַבְּצָן`; φυτεύω `נָטַע`; πλούσιος and ἀφνειός both `עָשִׁיר` (a pair).
6. **ὄλλυμι / ἀπόλλυμι = `נִסְפָּה` / `סָפָה`** for the whole poem (LXX Gen 18:23) – the §13.5 open point settled.
7. **The jar:** πίθος `כַּד`, πῶμα `מִכְסֶה`, ἐλπίς `תִּקְוָה` (Ἐλπίς capitalized at 96: the names string strips to the
   defective `תקוה`, so the name is vocalized at every occurrence); νοῦσος `מַחֲלָה`; αὐτόματος `מֵעַצְמוֹ`.
8. **Collisions with the Theogony settled by new words:** μυθέομαι `הִשְׁמִיעַ` (πιφαύσκω keeps `הִגִּיד`), σθένος `חוֹסֶן`
   (ἴς keeps `אוֹן`), ἐπιλαμβάνω `בָּלַם` (ἴσχω keeps `עָצַר`); ταχύς adv. `מַהֵר`, πρόσθεν `לִפְנֵי כֵן`, αἶψα `מִיָּד` as in TH.
   Sense splits recorded: ἐπαινέω `הוֹקִיר` (TH 664 `הִסְכִּים`), μίμνω `נִשְׁאַר` (TH 754 `חִכָּה`).

### 11.9 WD 106–285 (WD translator 1, part 2; merged 2026-10-24)
Full list (about 150 words, with first lines and reasons): `2-מעשים-וימים/project.md`, "WD 106–285", Proposals. Binding:
1. **Shared lines and formulas:** WD 124–125 fixed and copied at 254–255; WD 149 = TH 152; F16 (110, 128), F23 (157,
   169d, 252), F1 (169a). 169a–d `{פפירוס}` with the restorations in `[ ]`, in the base's order.
2. **The races:** ποιέω `עָשָׂה`; γένος `גֶּזַע`, χρύσεος γένος `גֶּזַע זָהוֹב` (χρύσεος `זָהוֹב`, never the construct
   `זהב`: §11.6.3 – §5's example corrected); γενεή `דּוֹר`; ἥρως `הֵרוֹאִי`, ἡμίθεος `חֲצִי־אֵלִים`; δαίμων `דַּיְמוֹן`; μέροψ
   `*בַּעֲלֵי־הַדִּבּוּר*` (uncertain; recurring).
3. **Justice:** ὕβρις / Ὕβρις `זָדוֹן` (a translated name, §3.2), Δίκη `מִשְׁפָּט` (feminine), Ὅρκος `שְׁבוּעָה`
   (masculine), εὔορκος `נֶאֱמַן־הַשְּׁבוּעָה`, ἐπίορκος (by sense, see project.md); εἰρήνη `שָׁלוֹם`; λοιμός `דֶּבֶר`
   (vocalized); αἶνος `מָשָׁל`; ἱέραξ `נֵץ` (LXX Job 39:26), ἀηδών `זָמִיר`; ἀρείων `מְעֻלֶּה` (`טוֹב` is ἀγαθός's).
4. **Grammar:** the gnomic aorist → participle (first true occurrence 218 ἔγνω `מַכִּיר`; 224, 242, 246); the gnomic
   imperfect likewise (240); the unfulfilled wish ὤφελλον `מִי יִתֵּן וְ־` (174). The infinitive-for-imperative is still
   untested (part 3 fixes it at its first occurrence).
5. **Names table:** Οἰδιπόδης `אֶדִיפּוּס`, Ἑλένη `הֶלֶנָה` added.
6. **Collisions:** θάλλω `מְשַׂגְשֵׂג` (ἀνθέω keeps `פּוֹרֵחַ`); ἑταῖρος `רֵעַ` vocalized (`הרע` = κακός); the other
   pairs recorded in project.md (θεῖος / θεσπέσιος `אֱלוֹהִי`, ἐμβασιλεύω / ἀνάσσω `מָלַךְ`, ἔτος / ἐνιαυτός `שָׁנָה`,
   τρέφω / ἀέξω `גִּדֵּל` …) are synonyms in one Hebrew word, kept. Gate homographs met: `בשבתה` (ישב: `[היתר שער]`, 259),
   `הדור` (γενεή / φαίδιμος).

### 11.10 WD 286–413 (WD translator 2, part 3; merged 2026-10-24)
Full list with first lines and reasons: `2-מעשים-וימים/project.md`, "WD 286–413", Proposals. Binding:
1. **The infinitive used as an imperative** (first at 336): the vocalized Hebrew infinitive absolute, "שם הפועל כציווי"
   in the פירוק (`הַקְרֵב קָרְבָּנוֹת`, `שָׂרוֹף`, `מָדוֹד לְךָ`, `שַׁלֵּם`, `עָבוֹד`, `עָרֹם זָרוֹעַ`, `קָצוֹר` …); with μή
   `אַל` + infinitive absolute (352 `אַל בָּצוֹעַ`, 410 `וְאַל דָּחֹה`). The gnomic aorist → participle (334, 345, 355 …).
2. **Words:** ἀρετή `מַעֲלָה` (vocalized); ὄνειδος `חֶרְפָּה` (LXX Gen 30:23) and therefore αἶσχος `כְּלִמָּה` (WD 211
   changed; `קָלוֹן` is the Ugaritic corpus's cognate of *qlt*); the κτα- family the root קנה (κτητός `קְנוּיָה`, LXX
   Lev 25:44; κτέανον `קִנְיָן`; κτῆμα `נֶכֶס` stays), ὠνέομαι `רָכַשׁ`; λυπέω `הֶעֱצִיב` (the עצב gate is λυπ-'s: λύπη is the
   LXX's `עִצָּבוֹן`, Gen 3:16–17 – a real lexical identity, noted).
3. **Collision settled (the coordinator):** παλαίω (413) is the LXX's verb for `וַיֵּאָבֵק` (Gen 32:25), but `נֶאֱבַק` is
   μάρναμαι's (TH 629, 647, 663; WD 163; μάχομαι is `נִלְחַם`, TH 392): μάρναμαι keeps it, παλαίω = `הִתְגּוֹשֵׁשׁ`
   ("wrestle", its literal sense), with the LXX identity in the note. ἐγγύθι `קָרוֹב` / τάχα `בְּקָרוֹב` and βοωτέω / ἐλαύνω
   (the root נהג) recorded.
4. **Names:** the treebank's lemma at WD 383 is the slip πλψιάς: added to the Πληιάδες row so that the check fires.
5. Line 310 is not in the base (309 → 311): described in words at 309 and 311, never supplied.

### 11.11 WD 414–617 (WD translator 2, part 4; merged 2026-10-24)
Full list with first lines and reasons: `2-מעשים-וימים/project.md`, "WD 414–617", Proposals. Binding:
1. **Formulas:** F25 `גרעיני דמטר הקדושים` (466, 597; confirmed on the Greek); F13 (562); the Gen 8:22 set as §5.
2. **Grammar:** the infinitive-for-imperative as §11.10; an infinitive that depends on a verb of commanding (κέλομαι)
   stays a plain infinitive (602 `לַעֲשׂוֹת`, 603 `לָתוּר`); at 574 the imperative `וּבְרַח` (the infinitive `בָּרוֹחַ` trips
   the `רוח` gate). Time clauses: ἦμος / τῆμος / εὖτε `בְּשָׁעָה שֶׁ־` / `בְּאוֹתָהּ שָׁעָה`; ἐπήν + aorist `אַחֲרֵי שֶׁ־`.
3. **Farm words on LXX identities:** περιτέμνω (vines) `זָמַר` (Lev 25:3), σκάφος `עִדּוּר` (Isa 5:6), λέσχη `בֵּית־הַשִּׂיחָה`,
   χελιδών `סִיס`, ὑετός `מָטָר`, ἄτεκνος `עֲרִירִי`, χόρτος `מִסְפּוֹא`, ἀναψύχω `הֵשִׁיב נֶפֶשׁ` (Exod 23:12); the plough's
   parts in Mishnaic terms (γύης `בּוּרֶךְ`, ἱστοβοεύς `יָצוּל`).
4. **Collision settled (the coordinator):** ἔλυμα "the plough-stock" `קוֹרָה` (430, 436), not `סַדָּן`, which is ἄκμων
   "anvil" (TH 722, 724). ὑλοφάγος (591) vocalized `חֹרֶשׁ` against ἀροτήρ `חוֹרֵשׁ`. Pairs recorded: κέλομαι / κελεύω /
   ἄνωγα `צִוָּה`; ἀρύω / ἀφύσσω `שָׁאַב`; ἐνιαυτός / πλειών `שָׁנָה`.
5. **Names (§2.3):** Ζέφυρος `זֶפִירוֹס` (594), Ληναιών `לֵנַיאוֹן` (504), Θρῄκη `תְּרַקְיָה`, Πανδίων `פַּנְדִּיּוֹן`, Πανέλληνες `כָּל־הַהֶלֶנִים` – as in
   project.md; Ὠρίων `כְּסִיל` vocalized at every occurrence.

### 11.12 WD 618–828 (WD translator 2, part 5; merged 2026-10-24) – the poem drafted
Full list with first lines and reasons: `2-מעשים-וימים/project.md`, "WD 618–828", Proposals. Binding:
1. **The Days:** 770 is the self-test line (ἔνη = the old-and-new day, the new moon `רֹאשׁ הַחֹדֶשׁ`); ἑβδόμη `שְׁבִיעִי`
   (the root שבת never); F25 at 805; εὐδαίμων / ὄλβιος `בַּר־מַזָּל` / `שְׂבַע־טוֹבָה` (826, kept as §5: "מזל" suits a
   calendar of lucky days). 767, 769, 768 in the base's order.
2. **Grammar:** the infinitive-for-imperative throughout (μή → `אַל` + infinitive absolute); dependent infinitives
   stay plain (688, 749, 753, 767, 798, 815). 793 γείνασθαι `הוֹלֵד` (the coordinator: the tool's REQUIRED row for
   γείνομαι now accepts the infinitive absolute `הולד`; the draft's future `תוֹלִיד` changed).
3. **Purity and the household, on LXX identities:** νίζω and λούω both `רָחַץ` (Exod 30:19, Lev 15:16 – a pair);
   σπερμαίνω `הִזְרִיעַ` (Lev 12:2); γονή `שִׁכְבַת זֶרַע` (733, `[היתר שער]`: Lev 15:16); τέμνω "castrate" `כָּרַת`
   (Lev 22:24); κρατήρ `אַגָּן` (Exod 24:6 κρατῆρας = `בָּאַגָּנֹת`); φειδωλός `חַסְכָנִי`; ὑπερβασία `עֲבֵרָה`; ὀνειδίζω
   `חֵרֵף` (718, `[היתר שער]`).
4. **Names (§2.3):** Κύμη `קִימָה` (always vocalized: ≠ `כִּימָה`, the Pleiades), Αἰολίς `אַיּוֹלִית`, Εὔβοια
   `אֶאוּבוֹיָה`, Αὐλίς `אַאוּלִיס`, Ἀχαιοί `הָאַכָאִים`, Ἑλλάς `הֶלָס`, Ἀμφιδάμας `אַמְפִידָמָס`, Χαλκίς `כַלְקִיס`;
   Ἄσκρη `אַסְקְרָה` (640).
5. **Collisions fixed by the translator:** ἄφενος `מָמוֹן` at 637 only (beside πλοῦτος `עֹשֶׁר`; εὐοχθέω keeps `רְוָחָה`);
   φώς `גֶּבֶר` (792, as 193); ἀραιός `דַּק` (κοῦφος keeps `קַל`); 629 `העשוי` (the עבד gate).

## 12. Decisions and revisions (coordinator, 2026-10-24)

1. **Speaking cosmic names and personified abstractions translated** (§3.2), as West 1988 and Most 2006 do: the
   alternative – transcribing every name, as most Hebrew translations do – hides the poem's identity of god and thing
   and the Gen 1 comparisons (Night bears Day). For the user (report): a method choice, reversible by script (the names
   table drives the check).
2. **The fifth-day dossier's Hesiod lines** (`../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-TH.rtl.md`) are revised
   to this corpus's Hebrew after the Theogony is drafted (Gaia `אֶרֶץ`; `אַפְרוֹדִיטָה`; γείνομαι `הוֹלִיד`; γένος `גֶּזַע`;
   ζάθεος `מְקֻדָּשׁ`; φρένες `לֵבָב`), each with its reason in the dossier's `project.md`.
3. `θάλασσα` and `πόντος` share `יָם` (a recorded split: Hebrew has one natural word; the god Πόντος is `יָם`).
4. The Septuagint quoted from Rahlfs 1935 through Greek Wikisource (`../sources/LXX-Rahlfs-1935--el-wikisource/`, git-ignored: licence
   unclear); `../tools/lxx_verses.py` reads it.

## 13. For the Works and Days (the Theogony coordinator, 2026-10-24; binding for the WD translators)

The Theogony is drafted, reviewed in three passes and verified (`verify TH --strict`: 0 problems). Everything in §3–§11
binds the Works and Days exactly as it bound the Theogony; this section gathers what the WD will meet first. The
translators' own lists, with first lines and reasons, are in `1-תולדות-האלים/project.md` under "For the Works and Days"
(in "TH 337–616", "TH 617–885", "TH 886–1022") and the review sections; `lemma` / `lexmap` / `grep` show every Theogony
rendering.

### 13.1 The shared lines (copy character for character; renderings §9)
| WD | = TH | Hebrew |
|---|---|---|
| 149 | 152 | `צמחו מן הכתפיים על איברים איתנים;` |
| 54 | 559 | `בן־יאפטוס, היודע תחבולות יותר מכולם,` |
| 71 | 572 | `דמוי בתולה נערצת, בעצות בן־קרונוס.` |
| 72 | 573 | `וחגרה אותה וקישטה הָאֵלָה, אַתֵנָה בהירת־העיניים,` |

Near-repeats (change exactly what the Greek changes): WD 53 ≈ TH 558 `ובכעס גדול אמר אליו זאוס מקבץ־העננים:` (WD's
χολωσάμενος: χολόω `הִזְעִים`, χόλος `זַעַם`); WD 70 ≈ TH 571 `כי מן האדמה יצר צוֹלֵעַ־הָרַגְלַיִים המהולל מאוד`
(WD κλυτός `מְהֻלָּל`, TH περικλυτός `המהולל מאוד`); WD 50 ≈ TH 565 `בנו הטוב של יאפטוס`; WD 52 ≈ TH 567 `בגבעול
כַּלְכָּל נבוב`; WD 57 ≈ TH 570 `תחת האש`; the Muses' line F3 (WD 1–2 if it occurs); WD 124–125 = 254–255 (fix the
first copy in WD).

### 13.2 Formulas (§8, as now fixed)
F1 `אבי האנשים והאלים` (WD 59, 169a); F5 `נושא־האגיס`; F6 `מקבץ־העננים` (WD 53, 99); F8 `שמים זרועי־הכוכבים`;
F10 `ים עקר`; F13 `לילות וימים` (WD 385, 562); F16 `שוכני / שוכנות הארמונות האולימפיים` (WD 81, 110, 128); F18
`הקיימים תמיד`; F20 `היודע תחבולות יותר מכולם` (WD 54); F23 `על פני האדמה רבת־המזון` (WD 157, 169d, 252); F25
`גרעיני דמטר הקדושים` (WD 466, 597, 805: not yet tested – check against the Greek at its first occurrence); F26
`בן־קרונוס`; F27 `בן־יאפטוס`; F28 `אתנה בהירת־העיניים` (WD 72); F30 `עקום־התחבולות` (WD 48); F33 `דמויי־אלים`.

### 13.3 The Prometheus and Pandora vocabulary (TH 507–616, binding for WD 42–105)
Προμηθεύς `פְּרוֹמֵתֵאוּס`; ἐξαπατάω `רִמָּה`; κλέπτω `גָּנַב`; πῦρ `אֵשׁ`; νάρθηξ `גִּבְעוֹל כַּלְכָּל`; κρύπτω `הִסְתִּיר`;
χόλος / χολόω / χώομαι `זַעַם` / `הִזְעִים` / `חָרָה`; δόλος `עָרְמָה`, δόλιος `עַרְמוּמִי`; τέχνη `אֻמָּנוּת`; ἀντί `תַּחַת`;
κακόν `רָעָה`; πῆμα `פֶּגַע`; τεύχω `הִתְקִין`; πλάσσω `יָצַר` (REQUIRED), γαῖα as material `אֲדָמָה`; παρθένος `בְּתוּלָה`;
αἰδοῖος `נַעֲרָץ`; ἴκελος `דְּמוּי`; ζώννυμι `חָגַר`; κοσμέω / κόσμος `קִשֵּׁט` / `קִשּׁוּט`; ἐσθής `בֶּגֶד`; καλύπτρα `צָעִיף`;
στέφανος `זֵר`, στεφάνη `עֲטָרָה`; ἄνθος `פֶּרַח`; χρύσεος `זָהוֹב`; χάρις `חֵן`; δαιδάλεος `מַעֲשֵׂה־אָמָּן`; θαῦμα `פֶּלֶא`;
καλὸν κακόν `הָרָעָה הַיָּפָה`; καλός `יָפֶה` (never `טוֹב`); φωνή `קוֹל`, αὐδή `נִיב` ★; δῶρον `מַתָּנָה` (Pandora "All-Gift":
the note); γένος γυναικῶν `גֶּזַע הַנָּשִׁים`, θῆλυς `נְקֵבָה`, φῦλα γυναικῶν `שִׁבְטֵי הַנָּשִׁים`; ἀμήχανος `שֶׁאֵין כְּנֶגְדּוֹ
תּוּשִׁיָּה`. Pandora's dressers: the Charites `הֶחָרִיטוֹת`, Πειθώ `שִׁכְנוּעַ`, the Horai `הַהוֹרוֹת` ★, καλλίκομος
`נְאַת־הַשֵּׂעָר`. The drones and the household: μέλισσα `דְּבוֹרָה`, κηφήν `רַחְפָן`, σμῆνος / σίμβλος `כַּוֶּרֶת`, κάματος
`יְגִיעַ`, πόνος `עָמָל`, ἀεργός `בַּטְלָן`, γάμος `נִשּׂוּאִים`, γαμέω `נָשָׂא אִשָּׁה`, ἄκοιτις `רַעְיָה`, ἄλοχος `בַּת־זוּג`,
γῆρας `זִקְנָה`, γηροκόμος `מְכַלְכֵּל שֵׂיבָה`, χηρωσταί `יוֹרְשִׁים רְחוֹקִים`, βίοτος `מִחְיָה`. The sacrifice: βωμός
`מִזְבֵּחַ`, ἔρδειν ἱερά `לְהַקְרִיב קָרְבָּנוֹת`, κνίση `רֵיחַ־חֵלֶב`, δημός `חֵלֶב`, ὀστέα `עֲצָמוֹת`, καίω `שָׂרַף`,
βοῦς `שׁוֹר` / `בָּקָר`, ἱλάσκομαι `רִצָּה`.

### 13.4 Names and translated names the WD meets
Ἔρις `מָדוֹן` (both Erides, WD 11–26: one Hebrew for both, as the poem's play requires); Νύξ `לַיְלָה`; Ὅρκος `שְׁבוּעָה`;
Δίκη `מִשְׁפָּט` (the name and the noun), δίκαιος `צַדִּיק`; Εἰρήνη `שָׁלוֹם`, Εὐνομίη `סֵדֶר־טוֹב`; Αἰδώς / Νέμεσις
`בּוּשָׁה` / `חֵמָה` (open for the user: `בּוּשָׁה` reads "shame"); Θάνατος / Ὕπνος `מָוֶת` / `שֵׁנָה` (vocalized); Λιμός
`רָעָב`; Πλοῦτος `עֹשֶׁר`; translated names keep the gender of the Greek name (§11.7). δαίμων `דַּיְמוֹן` (TH 991;
recommended for the WD's δαίμονες, WD 122–126, 141); ἥρως `הֵרוֹאִי` / ἡμίθεος `חֲצִי־אֵלִים` (Gen 6:4 in the note only);
θεοῖς ἐπιείκελος `דְּמוּי־אֵלִים`. Zeus: ὑψίζυγος `רַם־הַכֵּס`, ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם`, εὐρύοπα `רְחַב־הַמַּבָּט`,
μητίετα `רַב־הַתְּבוּנָה`, ἐρίγδουπος `הַמַּרְעִים`; βασιλεύς `מֶלֶךְ`, ἀνάσσω `מָלַךְ`, βασιλεύω `הָיָה לְמֶלֶךְ`.
Hephaistos `הֵפַיְסְטוֹס`; Αἰθήρ `אֶתֶר` ★; the winds Βορέας / Νότος / Ζέφυρος `בּוֹרֵאָס` / `נוֹטוֹס` / `זֶפִירוֹס`.

### 13.5 Rulings to keep in mind
- **"Never"** = `אַף פַּעַם` (`לְעוֹלָם` is gated to αἰών); "kind" `סוּג` (`מִין` never).
- κλέος `תְּהִלָּה` (κλέος ἐσθλόν `תְּהִלָּה טוֹבָה`), ὄνομα `שֵׁם` (§11.2); κῦδος `תִּפְאֶרֶת`.
- φθείρω `אִבֵּד`, ὀλοός / ὀλώιος `מַשְׁחִית`, οὐλόμενος `מַמְאִיר` ★: the WD's ὄλλυμι needs its own word (grep first).
- χαίρω `שָׂמַח`, χαίρετε (greeting) `שָׁלוֹם לָכֶם / לָכֶן`; μάχη `מַאֲבָק`, πόλεμος `מִלְחָמָה`, ὑσμίνη `קְרָב`.
- θεῖος / θεσπέσιος `אֱלוֹהִי` ★; θέσπις `שֶׁל אֵלִים`; δῖος `נֶהְדָּר`; ἱερός `קָדוֹשׁ`, ζάθεος / ἠγάθεος `מְקֻדָּשׁ`.
- ναίω `גָּר` (the `דור` gate), οἰκέω `חָנָה` (the `שבת` gate); ἀγήνωρ `אַמִּיץ` (the `רוח` gate is the winds');
  φαίδιμος `הָדוּר` (licensed in the `דור` gate). Gate homographs to know before drafting: `הדור`, `מקדש`, `לחם`
  (in `משלחם`), `ערם` (`הערים`), `שבתם`, `כלה`.
- The names table strips the niqqud of its own string: where a plene draft differs (`גיס` / `גייס`), vocalize the name
  at every occurrence, or ask the coordinator for a plene table string (`נִיצָּחוֹן`, `צוֹלֵעַ־הָרַגְלַיִים`, `עוֹז`).
- Αἰθίοψ `כּוּשׁ` (`מֶלֶךְ כּוּשׁ`), never the plural `כּוּשִׁים` (§11.7).
- `אשה` (not `אישה`), as in every corpus of the folder (open for the user).
- Gnomic aorists and the infinitive-for-imperative (§4) did not occur in the Theogony's narrative: the WD's first
  translator fixes their Hebrew at the first occurrence and records it.
- The LXX tool (`../tools/lxx_verses.py`) has only Genesis, Exodus, Isaiah and 4 Kingdoms: describe the LXX of other
  books (Job, Proverbs, Psalms, Judges) in words, never quote it from memory.

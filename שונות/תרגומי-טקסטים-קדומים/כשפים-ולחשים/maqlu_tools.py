"""Tools of the witchcraft-and-incantations corpus (Maqlû I–VIII + the Ritual Tablet). Run with python3 -I -B.

    python3 -I -B maqlu_tools.py fill FILE              replace every `@` transliteration placeholder in an annotated
                                                       file by the exact eBL normalization of its entry (★ rule).
    python3 -I -B maqlu_tools.py pars KEY               before drafting: every line of KEY that repeats (identically
                                                       or nearly, ratio >= 0.8) a line elsewhere in Maqlû, or that is
                                                       in the fixed-lines table (renderings.md §9), with the Hebrew
                                                       already given; and eBL's own "Parallels:".
    python3 -I -B maqlu_tools.py verify [KEY…] [--strict]
    python3 -I -B maqlu_tools.py build                  generate translation-<KEY>.rtl.md for every drafted file and
                                                       the combined 1-מקלו/translation.rtl.md, then verify.
    python3 -I -B maqlu_tools.py grep '<regex>' [--all] the unvocalized `>` lines of Maqlû (--all: of every corpus),
                                                       with the normalization.
    python3 -I -B maqlu_tools.py norm '<regex>'         every Maqlû line whose eBL normalization matches, with its
                                                       Hebrew: how a word was rendered so far (eBL has lemmas only
                                                       for Tablet I, so this replaces a lemma search).
    python3 -I -B maqlu_tools.py incipits               the first line of every incantation (N starts with EN₂),
                                                       with its Hebrew: for the Ritual Tablet and Tablet VIII.
    python3 -I -B maqlu_tools.py lines KEY FROM TO      N, T and notes of a range (from eBL's reading-edition.md).
    python3 -I -B maqlu_tools.py lem KEY FROM [TO]      each word of the normalization with its lemma candidates from
                                                       ORACC cmawro's Akkadian glossary (CC0; a lookup by normalized
                                                       form, not a parse: eBL lemmatized only Tablet I). The index is
                                                       built once into ../sources/ORACC/_bulk/cmawro--norm-index.json.

KEY = I II III IV V VI VII VIII RT (1-מקלו/annotated-<KEY>.rtl.md). The base text is eBL Mag 1.1
(../sources/eBL/Maqlu-<KEY>/reading-edition.md: Abusch's edition, Schwemer's revision).

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow eBL's line list (none missing, duplicated or
     out of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals eBL's N (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings (renderings §8) in the unvocalized `>` line: an error unless the line's normalization
     (or Tablet I's eBL lemmas) matches the licensing regex;
  5. TRAPS: unvocalized strings that read as another Hebrew word;
  6. FORMULAS: where the normalization has a fixed formula, the Hebrew must have its fixed rendering;
  7. FIXED lines (renderings §9): the `>` line must equal the fixed Hebrew (brackets, marks and niqqud ignored);
     a deliberate deviation is allowed when the entry's apparatus says `[סטייה מן הקבוע: …]` with the reason;
  8. repeated lines (identical normalizations) with different Hebrew are listed (justify in the apparatus or fix).
Exit code 1 on any error of 1–7.
"""
import difflib
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
EBL = os.path.join(ROOT, "sources", "eBL")
PROJ = "1-מקלו"
KEYS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "RT"]
TITLES = {k: f"מַקְלוּ, לוח {k}" for k in KEYS}
TITLES["RT"] = "מַקְלוּ, לוח הטקס"

NIQ = "֑-ֽֿ-ׇ"


def strip_marks(s):
    """Hebrew without brackets, editorial marks, footnote refs, quotation marks and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״{}]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def norm_key(n):
    """A normalization reduced for comparison: no language shifts, brackets, marks, ellipses, metre bars."""
    n = re.sub(r"%\w+ ?", "", n or "")
    n = re.sub(r"[\[\]⸢⸣?!<>()|#*]", "", n)
    n = re.sub(r"\.\.\.|…", " ", n)
    return re.sub(r"\s+", " ", n).strip()


# ---------------------------------------------------------------- eBL
_EBL = {}


def ebl(key):
    """{'order': [labels], 'N': {}, 'T': {}, 'L': {label: [lemmas]}, 'notes': {}, 'par': {}, 'atf': {}}"""
    if key in _EBL:
        return _EBL[key]
    d = {"order": [], "N": {}, "T": {}, "L": {}, "notes": {}, "par": {}, "atf": {}}
    p = os.path.join(EBL, f"Maqlu-{key}", "reading-edition.md")
    cur, inatf = None, False
    if os.path.exists(p):
        for l in open(p, encoding="utf-8"):
            m = re.match(r"^### (\S+)\s*$", l)
            if m:
                cur = m.group(1)
                d["order"].append(cur)
                continue
            if cur is None:
                continue
            if l.startswith("```"):
                inatf = not inatf
                continue
            if inatf:
                d["atf"].setdefault(cur, []).append(l.rstrip("\n"))
            elif l.startswith("- **N:**") and cur not in d["N"]:
                d["N"][cur] = l[8:].strip()
            elif l.startswith("- **T:**") and cur not in d["T"]:
                d["T"][cur] = l[8:].strip()
            elif l.startswith("- **L:**") and cur not in d["L"]:
                d["L"][cur] = [x.strip() for x in re.findall(r"← ([^“;]+?)(?: “|;|$)", l[8:])]
            elif l.startswith("- **Note:**"):
                d["notes"].setdefault(cur, []).append(l[11:].strip())
            elif l.startswith("- **Parallels:**"):
                d["par"].setdefault(cur, []).extend(x.strip() for x in l[16:].split(";") if x.strip())
    _EBL[key] = d
    return d


def license_text(key, lab):
    d = ebl(key)
    return (d["N"].get(lab, "") + " " + " ".join(d["L"].get(lab, []))).lower()


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, PROJ, f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, PROJ, f"translation-{key}.rtl.md")


def read_annotated(key):
    """({label: hebrew}, label sequence, {label: source line}, {label: entry text}, problems) or None."""
    p = annotated_path(key)
    if not os.path.exists(p):
        return None
    heb, seq, src, body, probs = {}, [], {}, {}, []
    cur = None
    for l in open(p, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in heb:
                probs.append(f"duplicate entry {cur}")
            heb[cur] = []
            seq.append(cur)
            body[cur] = []
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is None:
            continue
        body[cur].append(l)
        if l.startswith("> "):
            heb[cur].append(l[2:].strip())
        elif l.startswith("`") and cur not in src and not heb[cur]:
            src[cur] = l.strip()
    for k, v in heb.items():
        if len(v) != 1:
            probs.append(f"entry {k}: {len(v)} '>' lines")
    return ({k: (v[0] if v else "") for k, v in heb.items()}, seq, src,
            {k: "\n".join(v) for k, v in body.items()}, probs)


def present_keys():
    return [k for k in KEYS if os.path.exists(annotated_path(k))]


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(k)
        out[k] = a[0] if a else {}
    return out


# ---------------------------------------------------------------- renderings: fixed lines (§9)
def fixed_lines():
    """{(key, label): (normalization, hebrew)} from the table(s) under '## 9.' in renderings.md."""
    p = os.path.join(HERE, "renderings.md")
    out = {}
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 9.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or "Lines" in l[:12]:
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        heb = cells[2].strip("`").strip()
        for lab in re.split(r"[;,]\s*", cells[0]):
            m = re.match(r"^(I|II|III|IV|V|VI|VII|VIII|RT) (\S+)$", lab.strip())
            if m:
                out[(m.group(1), m.group(2))] = (cells[1].strip("`"), heb)
    return out


# ---------------------------------------------------------------- checks
W = r"(?<![א-ת])[ובלמהכש]{0,3}"
E = r"(?![א-ת])"
# (regex on the unvocalized, bracket-free line, licensing regex on the bracket-free normalization (+ Tablet I's eBL
# lemmas) or None = never, why). Renderings §8.
RESERVED = [
    (W + r"(?:אלוהים|אלהים|אלוה|אלוהיי?|אלהי)" + E, None, "ilu = אֵל / אֵלִי / הָאֵלִים, never אֱלֹהִים"),
    (W + r"(?:שטן|השטן|מלאך|מלאכי|מלאכים|עולם|לעולם|עולמים)" + E, None, "no satan, no malʾak, no ʿolam in the Akkadian"),
    (W + r"(?:שאול|שאולה)" + E, None, "the netherworld = הָאָרֶץ (erṣetu); never שְׁאוֹל"),
    (W + r"(?:אוב|אובות|ידעוני|ידעונים|מעונן|מעוננים|תרפים|עזאזל|שעיר|השעיר|שעירים|סוטה|המאררים)" + E, None,
     "Deut 18:10–11, 1 Sam 28, Lev 16 and Num 5 words with no Akkadian counterpart here: apparatus only"),
    (W + r"(?:דמות|דמותה|דמותו|דמותי|דמותך|דמותם)" + E, None, "דְּמוּת never: ṣalmu = צֶלֶם, tamšīlu = תַּבְנִית (the Gen 1:26 pair)"),
    (W + r"(?:נחש|נחשים|ניחש|מנחש|נחשה)" + E, r"ṣerr|bašm|ṣīr|mušḫuš|mušhuš|šibb",
     "נחש (both 'snake' and 'divine') only for a snake word"),
    (W + r"(?:חבר|חברי|חברה|חברים|חבריה|חבריי|חברך)" + E, r"tapp|ibr", "the root חבר only for tappû (Deut 18:11 `חֹבֵר חָבֶר` in the apparatus)"),
    (W + r"(?:כשף|כשפים|כשפיה|כשפיו|כשפיהם|כשפיהן|כשפיך|כשפייך|כשפיכם|כשפיכן|כשפי|כשפיי|מכשף|מכשפה|מכשפת|מכשפתי|מכשפים|מכשפות|מכשפותיי|מכשפיי|מכשפי|מכשפיה|כישף|כישפה|כישפו|כשפה|כישוף|כישופים|מכושף|מכושפים|מכושפת|מכושפות|כשפו|כשפת|כשפתם)" + E,
     r"kašš|kišp|kašāp|kašap|kušāp|kišip|ukaššip|ikšip|takšip|kušp|uš₁₁\.zu", "the root כשף only for its cognate (kašāpu, kaššāpu, kaššāptu, kišpū) ★"),
    (W + r"(?:קסם|קסמים|קסמי|קסמו|קסמה|קסמך|קסמם|קסמכם|קסמיה|קוסם|קוסמת|קוסמים|הקסם|קסמיהם|קסמייך|קסמך|קסמת)" + E,
     r"šipt|šipat|šipāt|šipass|šipatk|en₂|šiptu", "קֶסֶם only for šiptu / ÉN (Deut 18:10 in the apparatus)"),
    (W + r"(?:לחש|לחשים|לחשו|לחשה|לחשי|לחשך|מלחש|מלחשת|מלחשים|ללחוש|לוחש|לוחשת)" + E, r"tu₆|\btû\b|\btê\b|\btâ\b|têšu|mašmaš|\bte\b",
     "לַחַשׁ only for tû / TU₆; מְלַחֵשׁ only for mašmaššu"),
    (W + r"(?:אשף|אשפים|אשפות|אשפית|אשפיות|אשפותי)" + E, r"āšip|ašip", "אַשָּׁף only for āšipu / āšipūtu / āšiptu [cognate]"),
    (W + r"(?:שבועה|שבועת|שבועות|שבועתו|שבועתכם|השביע|נשבע|נשבעה|השבעתי|השבעתיכם|הושבעתם|הושבע|מושבע|מושבעים)" + E,
     r"māmīt|mamīt|tamû|tamâ|tamāt|tamât|nīš|tummu|tumm", "שְׁבוּעָה / השביע only for māmītu, nīšu, tamû"),
    (W + r"(?:שרף|שורף|שורפת|שורפים|שרפה|שרפו|שרפתי|ישרוף|תשרוף|תשרף|ישרף|נשרף|נשרפה|אשרוף|שרוף|שריפה|שרפת|ישרפו|תשרפו|ישרפוה|שרפי|שרפום|שרפתם)" + E,
     r"šarāp|šarap|šurp|ašarrap|išrup|tašarrap|tašarrapu|šarāpi|ašrup|ašarrapšu", "שׂרף only for šarāpu / šurpu [cognate]; qamû = בִּעֵר, qalû = קָלָה"),
    (W + r"(?:טוב|טובה|טובים|טובות|היטיב|ייטב|יטב|טובו|טובי|טובתו|טובתי)" + E, r"ṭāb|ṭīb|ṭūb|ṭub|ṭiāb|ṭâb|ṭab|dug₃", "טוֹב only for ṭābu"),
    (W + r"(?:עפר|העפר|עפרה|עפרות)" + E, r"eper|epr|ep-ri", "עָפָר only for eperu (Gen 3:19)"),
    (W + r"(?:טיט|הטיט|טיטה|טיטו|טיטך|טיטי|טיטייך)" + E, r"ṭīd|ṭiṭṭ|ṭīṭ|ṭidd|ṭid|ṭēd|dēd", "טִיט only for ṭīdu / ṭiṭṭu"),
    (W + r"(?:גפרית|הגפרית)" + E, r"kibrīt|kibrit", "גָּפְרִית only for kibrītu [cognate] (Gen 19:24)"),
    (W + r"(?:צלם|צלמה|צלמו|צלמי|צלמים|צלמיהם|צלמיהן|צלמיה|צלמך|צלמייך|צלמיכם|צלמיכן|צלמיו|צלמן|צלמם|צלמיי|צלמיהם)" + E, r"ṣalm|ṣalam|ṣalmū|ṣalmī|nigsagil",
     "צֶלֶם only for ṣalmu [cognate] (Gen 1:26–27)"),
    (W + r"(?:כפר|כיפר|כפרה|יכפר|תכפר|מכפר|כופר|כפרו|כפרת|כופרה)" + E, r"kupp|kupr|kapār|kipp|takpirt|kuppur", "כפר only for kuppuru / kapāru / kupru"),
    (W + r"(?:תמורה|תמורת|תמורתי|תמורתו|תמורתה|התמורה)" + E, r"pūḫ|pūh|nigsagil", "תְּמוּרָה only for nigsagilû / pūḫu (Lev 27:10)"),
    (W + r"(?:מרים|המרים)" + E, None, "Num 5's `מֵי הַמָּרִים` stays in the apparatus"),
    (W + r"(?:ארור|ארורה|ארורים|אררו|ארר|מארה|מארת|מארות|יאור|תאור|לארור|ארורי)" + E, r"arār|arr|erret|arrat|līrur", "ארר only for arāru / arratu"),
    (W + r"(?:שד|שדים|השד|השדים|שדי|שדיה)" + E, r"tul|tulê|šēd(?!u)", "שֵׁד never for a demon (they are transliterated); `שדי` 'breasts' needs tulû"),
    (W + r"(?:שדה|שדות|השדה|בשדה)" + E, r"ṣēr|ṣer|eqel|eql|ugār|edin|kīd|namê", "שָׂדֶה only for ṣēru / eqlu (`שד` gate)"),
    (W + r"(?:מצודה|מצודת|כמצודה)" + E, r"huhār|ḫuḫār", "מְצוֹדָה only for ḫuḫāru (wisdom)"),
    (W + r"(?:פח|כפח|הפח|בפח)" + E, r"gišparr", "פַּח only for gišparru (Etana, wisdom)"),
    (W + r"(?:רשת|כרשת|הרשת|ברשת|רשתה|רשתו)" + E, r"šēt|šētu|šēti|šēta|šēssa|šētam", "רֶשֶׁת only for šētu (Etana, wisdom)"),
    (W + r"(?:תועבה|תועבת)" + E, r"ikkib|anzill", "תּוֹעֵבָה only for ikkibu"),
    (W + r"(?:קרא|קראו|קראתי|קראה|יקרא|תקרא|אקרא|נקרא|קורא|קוראת|קוראים|לקרוא|קרוא|קראת)" + E, r"\bnab[ûiâê]|\bnabi\b|\bnabû\b|ibbi|ibbû|imbû|tabbi",
     "קָרָא only for nabû 'name' (Gilgameš; ★); šasû = צָעַק"),
    (W + r"(?:לילית|הלילית)" + E, None, "לִילִית never (Isa 34:14 in the apparatus): lilītu = לִילִיתוּ"),
    (W + r"(?:פשר|פושר|פשרה|פתר|פותר)" + E, None, "pašāru = הִתִּיר (by sense; renderings §2.4): no פשר / פתר"),
    (W + r"(?:משפט|משפטי|משפטה|משפטו|משפטך|משפטם)" + E, r"šipṭ", "מִשְׁפָּט only for šipṭu (law corpus); dīnu = דִּין"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line, licensing regex on the bracket-free normalization: if it matches, the unvocalized string is
# an error; None = always), why. Renderings §8 "Always vocalized".
TRAPS = [
    (RW + r"אלי" + RE_, r"\bilī\b|ilīya|ilū|\bilī-|ilīka|ilīki|ilāni|ilīšu|ilšu", "'my god' / 'the gods of' must be vocalized אֵלִי / אֵלֵי (unvocalized: 'to me')"),
    (RW + r"אלתי" + RE_, r"ištarī", "'my goddess' must be vocalized אֵלָתִי"),
    (RW + r"(?:אלה|אלת|אלתו|אלתה)" + RE_, r"ištar|iltu|ilat|ištarāt", "'goddess' must be vocalized אֵלָה / אֵלַת (unvocalized: 'these' / 'oath')"),
    (RW + r"אלו" + RE_, r"\balû\b|\balê\b", "the alû demon must be vocalized אַלּוּ"),
    (RW + r"(?:גלו|גלוי)" + RE_, r"gallû|gallê|gallâ", "the gallû demon must be vocalized גַּלּוּ ('they exiled')"),
    (RW + r"גירה" + RE_, r"girr|gibil|gira", "Girra must be vocalized גִּירָה (unvocalized: 'cud')"),
    (RW + r"אנו" + RE_, r"\bani\b|\banu\b|\bāni\b|\banim\b|\bānu\b", "Anu must be vocalized אָנוּ ('we')"),
    (RW + r"סין" + RE_, r"\bsîn\b|\bsin\b", "Sîn must be vocalized סִין"),
    (RW + r"שמש" + RE_, r"šamaš|šamš|utu", "Šamaš / the sun must be vocalized שַׁמַשׁ / שֶׁמֶשׁ (both occur)"),
    (RW + r"אור" + RE_, r"\buri\b|\bur\b|urim", "Ur must be vocalized אוּר"),
    (RW + r"גולה" + RE_, r"\bgula\b", "Gula must be vocalized גּוּלָה ('exile')"),
    (RW + r"(?:אט|אטים|אטו|אטה|אטי|אטך|אטם)" + RE_, r"eṭem", "eṭemmu must be vocalized אִט (unvocalized: 'slowly')"),
    (RW + r"(?:חלב|חלבה)" + RE_, r"lip[îâ]|lipû|lipê", "tallow must be vocalized חֵלֶב ('milk')"),
    (RW + r"(?:מעבר|מעברי|מעברת|מעברתי|מעבריי|מעברתה)" + RE_, r"rāh|rahh|reh|rehû|urehh|irhû|arahh|turehh|turahh|irhe|lirhe", "the inseminator must be vocalized מְעַבֵּר / מְעַבֶּרֶת ('crossing')"),
    (RW + r"(?:מעשה|מעשת|מעשתי|מעשי|מעשתה|מעשים|מעשות)" + RE_, r"muštēpiš|muštepiš|muštēpišt|uštēpiš", "muštēpištu must be vocalized מְעַשָּׂה (unvocalized: 'deed'); ipšu's `מַעֲשֶׂה` too, in such a line"),
    (RW + r"(?:עשית|עשיתם|עשיתן|עשה|עשתה|עשו)" + RE_, r"tušēpiš|uštēpiš|ušēpiš|tuštēpiš|šēpiš", "the Š 'had (it) done' must be vocalized עִשִּׂית / עִשָּׂה in a line that also has the G"),
    (RW + r"(?:שרה|השרה)" + RE_, r"rubāt", "the princess must be vocalized הַשָּׂרָה ('Sarah')"),
    (RW + r"(?:אירש|אירשו|אירשה|אירשת|אירשתם|אורשה|אורשו)" + RE_, r"\bh[iī]r|\bt?ah[iī]r|ihīr|tahīr|ḫâru|ihīrū", "ḫâru 'betroth' must be vocalized אֵרַשׂ ('inherited')"),
    (RW + r"(?:רע|רעי|רעה)" + RE_, r"\bibr|tappû|tappê|rūʾ", "'friend' must be vocalized רֵעַ / רֵעִי / רֵעָה"),
    (RW + r"שכן" + RE_, r"šakkan", "Šakkan must be vocalized שַׁכַּן"),
    (RW + r"נבו" + RE_, r"nabû|nabium", "Nabû must be vocalized נָבוּ"),
]

# (regex on the bracket-free normalization, regex the bracket-free unvocalized Hebrew must match, what, keys exempted)
FORMULAS = [
    (r"^\(?EN₂\b", r"^\(?קסם(?![א-ת])", "an incantation's opening ÉN = `קֶסֶם.` (the first word of the line)", ("RT",)),
    (r"TU₆ EN₂\s*(\(E₂\.NU\.RU\))?\s*$", r"לחש קסם\s*$", "the closing TU₆ ÉN = `– לַחַשׁ, קֶסֶם.` (the last words)", ("RT",)),
    (r"(?<!TU₆ )(?<!TU₆)(?<!\bte )EN₂\s*$|\(te\) EN₂\s*$", r"קסם\s*$", "a closing ÉN = `– קֶסֶם.`", ("RT",)),
    (r"KA\.INIM\.MA", r"נוסח", "the rubric KA.INIM.MA = `נֻסַּח` (+ `לְהַתָּרַת רִיר`)", ()),
    (r"KA\.INIM\.MA UŠ₁₁\.BUR₂", r"נוסח להתרת ריר", "KA.INIM.MA UŠ₁₁.BUR₂(.RU.DA) = `נֻסַּח לְהַתָּרַת רִיר`", ()),
    (r"\bkaššāpt|kaššāpat", r"מכשפ", "kaššāptu = `מְכַשֵּׁפָה` [cognate] ★", ()),
    (r"\bkišp", r"כשפ", "kišpū = `כְּשָׁפִים` [cognate] ★", ()),
    (r"muštēpišt", r"מעש", "muštēpištu = `מְעַשָּׂה` (vocalized)", ()),
    (r"\bṣalam\b|\bṣalmū\b|\bṣalmī|\bṣalma\b|ṣalamš|ṣalamk", r"צלמ|צלם", "ṣalmu = `צֶלֶם` ★", ()),
    (r"kibrīt", r"גפרית", "kibrītu = `גָּפְרִית` [cognate] ★", ()),
    (r"\bqum[iuīū]|\bqumī|aqmū", r"בער|מבער", "qamû = `בִּעֵר`", ()),
    (r"\bqul[iī]\b|qulīš|aqallu|aqallī|\bqālî|\bqālû|qāl[iī]\b", r"קל[הו]|קולה|קלי|קלית", "qalû = `קָלָה` [cognate]", ()),
    (r"hūlā zūbā", r"המסו זובו והנתכו", "the refrain `הִמַּסּוּ, זוּבוּ וְהִנָּתְכוּ`", ()),
    (r"quturkunu lītelli šamê", r"קיטורכם יעלה השמימה", "the refrain `קִיטוֹרְכֶם יַעֲלֶה הַשָּׁמַיְמָה`", ()),
    (r"limūt-ma anāku lubluṭ|limūtū-ma anāku lubluṭ|lidūkū-ma anāku lubluṭ", r"ואני אחיה", "`… וַאֲנִי אֶחְיֶה` (↔ Ex 22:17)", ()),
]


def nclean(n):
    """The normalization without brackets and editorial marks (for formulas and licences)."""
    n = re.sub(r"[\[\]⸢⸣?!<>#*]", "", n or "")
    return re.sub(r"\s+", " ", n).strip()


def nopunct(h):
    """Hebrew without punctuation (for formulas and fixed lines: punctuation follows the context)."""
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


def lic(rx, key, lab):
    return rx is None or re.search(rx, nclean(license_text(key, lab)), re.I) is not None


def translation_lines(key):
    p = translation_path(key)
    if not os.path.exists(p):
        return None
    out, seq = {}, []
    for l in open(p, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            out[m.group(1)] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            seq.append(m.group(1))
    return out, seq


def verify(keys, strict=False):
    pk = present_keys()
    keys = keys or pk
    fixed = fixed_lines()
    bad = 0
    for key in keys:
        a = read_annotated(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, body, probs = a
        d = ebl(key)
        order = d["order"]
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in order if x not in heb]
        extra = [x for x in seq if x not in order]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in eBL: {extra}")
            bad += 1
        if [x for x in seq if x in order] != [x for x in order if x in heb]:
            print(f"{key}: entries out of eBL order")
            bad += 1
        for k in seq:
            if not heb[k].strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            s = src.get(k)
            if s is None:
                print(f"{key} {k}: no backticked source line")
                bad += 1
            elif s == "`@`":
                print(f"{key} {k}: `@` not filled (run fill)")
                bad += 1
            elif k in d["N"] and s.strip("`") != d["N"][k]:
                print(f"{key} {k}: source line differs from eBL N\n    A: {s}\n    N: `{d['N'][k]}`")
                bad += 1
        tr = translation_lines(key)
        if tr is not None:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != heb[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {heb[k]}")
                    bad += 1
        for k in seq:
            plain = strip_marks(heb[k])
            n = d["N"].get(k, "")
            for rx, allow, why in RESERVED:
                if re.search(rx, plain) and not (allow and lic(allow, key, k)):
                    print(f"RESERVED {key} {k}: {why}\n    {heb[k]}\n    N: {n}")
                    bad += 1
            for rx, cond, why in TRAPS:
                if re.search(rx, heb[k]) and lic(cond, key, k):
                    print(f"UNVOCALIZED {key} {k}: {why}\n    {heb[k]}")
                    bad += 1
            nc = nclean(n)
            for nrx, hrx, what, exempt in FORMULAS:
                if key not in exempt and re.search(nrx, nc) and not re.search(hrx, nopunct(plain)):
                    print(f"FORMULA {key} {k}: {what}\n    {heb[k]}\n    N: {n}")
                    bad += 1
            if (key, k) in fixed:
                fh = fixed[(key, k)][1]
                if nopunct(strip_marks(fh)) != nopunct(plain) and "[סטייה מן הקבוע" not in body.get(k, ""):
                    print(f"FIXED {key} {k}: differs from renderings §9\n    fixed: {fh}\n    here:  {heb[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (eBL {len(order)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    # repeated lines
    allh = all_hebrew()
    groups = {}
    for k2 in KEYS:
        d = ebl(k2)
        for lab in d["order"]:
            nk = norm_key(d["N"].get(lab))
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, lab))
    nd = 0
    print("\nRepeated lines (identical normalizations) with different Hebrew (justify in the apparatus or fix):")
    for nk, lst in groups.items():
        hs = [(k2, lab, allh.get(k2, {}).get(lab)) for k2, lab in lst]
        hs = [h for h in hs if h[2]]
        if len(hs) < 2 or (keys and not any(h[0] in keys for h in hs)):
            continue
        if len({strip_marks(h[2]) for h in hs}) > 1:
            nd += 1
            print(f"- {nk}")
            for k2, lab, h in hs:
                print(f"    {k2} {lab}: {h}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


# ---------------------------------------------------------------- fill, pars, norm, incipits, lines
def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-(\w+)\.rtl\.md$", path)
    if not m or m.group(1) not in KEYS:
        sys.exit("not an annotated-<KEY>.rtl.md file")
    d = ebl(m.group(1))
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
            continue
        if ln.strip() == "`@`" and cur:
            if cur in d["N"]:
                text[i] = "`" + d["N"][cur] + "`"
                n += 1
            else:
                print(f"no eBL line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} normalizations filled")


def cmd_pars(key):
    allh = all_hebrew()
    fixed = fixed_lines()
    corpus = [(k2, lab, norm_key(ebl(k2)["N"].get(lab))) for k2 in KEYS for lab in ebl(k2)["order"]]
    d = ebl(key)
    print(f"# Repeated / parallel lines of {key} ({TITLES[key]})\n")
    print("Hebrew from: an annotated file if drafted, else the fixed-lines table (renderings §9).\n")
    for lab in d["order"]:
        nk = norm_key(d["N"].get(lab))
        out = []
        if (key, lab) in fixed:
            out.append(f"  - FIXED (renderings §9): {fixed[(key, lab)][1]}")
        if nk and len(nk.split()) >= 2:
            for k2, l2, n2 in corpus:
                if (k2, l2) == (key, lab) or not n2:
                    continue
                if n2 == nk:
                    r = 1.0
                elif len(nk.split()) >= 3 and abs(len(n2) - len(nk)) < 0.4 * len(nk):
                    r = difflib.SequenceMatcher(None, nk, n2).ratio()
                    if r < 0.8:
                        continue
                else:
                    continue
                h = allh.get(k2, {}).get(l2) or (fixed.get((k2, l2)) or (None, None))[1] or "(not yet drafted)"
                out.append(f"  - {'identical' if r == 1.0 else f'similar {r:.2f}'}: {k2} {l2} `{ebl(k2)['N'].get(l2)}`\n      Hebrew: {h}")
        for p in d["par"].get(lab, []):
            out.append(f"  - eBL Parallels: {p}")
        if out:
            print(f"- **{lab}** `{d['N'].get(lab)}`")
            print("\n".join(out))


def cmd_norm(pat):
    rx = re.compile(pat, re.I)
    allh = all_hebrew()
    fixed = fixed_lines()
    for k in KEYS:
        d = ebl(k)
        for lab in d["order"]:
            if rx.search(d["N"].get(lab, "")) or any(rx.search(x) for x in d["L"].get(lab, [])):
                h = allh.get(k, {}).get(lab) or (fixed.get((k, lab)) or (None, None))[1]
                print(f"{k} {lab}: `{d['N'].get(lab)}`\n    {h or '(not yet drafted)'}")


def cmd_incipits():
    allh = all_hebrew()
    fixed = fixed_lines()
    for k in KEYS:
        d = ebl(k)
        for lab in d["order"]:
            n = d["N"].get(lab, "")
            if re.match(r"^(%sb )?EN₂", n):
                h = allh.get(k, {}).get(lab) or (fixed.get((k, lab)) or (None, None))[1]
                print(f"{k} {lab}: `{n}`\n    T: {d['T'].get(lab, '')}\n    {h or '(not yet drafted)'}")


CMAWRO_ZIP = os.path.join(ROOT, "sources", "ORACC", "_bulk", "cmawro.zip")
CMAWRO_IDX = os.path.join(ROOT, "sources", "ORACC", "_bulk", "cmawro--norm-index.json")


def cmawro_index():
    """{normalized form: ["cf[gw] POS 'sense' ×count", …]} from ORACC cmawro's Akkadian glossary (CC0), cached."""
    import json
    if os.path.exists(CMAWRO_IDX):
        return json.load(open(CMAWRO_IDX, encoding="utf-8"))
    if not os.path.exists(CMAWRO_ZIP):
        sys.exit(f"missing {CMAWRO_ZIP}: python3 -I ../tools/sources_sync.py fetch --only cmawro (or see ../sources/ORACC/README.md)")
    import zipfile
    g = json.loads(zipfile.ZipFile(CMAWRO_ZIP).read("cmawro/gloss-akk.json"))
    idx = {}
    for e in g["entries"]:
        mngs = "; ".join(sorted({s.get("mng", "") for s in e.get("senses", []) if s.get("mng")}))
        lab = f"{e['cf']}[{e['gw']}] {e.get('pos', '')}" + (f" '{mngs}'" if mngs and mngs != e["gw"] else "")
        for n in e.get("norms", []):
            idx.setdefault(n["n"], {})
            idx[n["n"]][lab] = idx[n["n"]].get(lab, 0) + int(n.get("icount", 0) or 0)
    out = {k: [f"{l} ×{c}" for l, c in sorted(v.items(), key=lambda x: -x[1])] for k, v in idx.items()}
    json.dump(out, open(CMAWRO_IDX, "w", encoding="utf-8"), ensure_ascii=False)
    return out


def _plain(s):
    import unicodedata
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def cmd_lem(key, a, b=None):
    """Each word of the normalization of KEY a..b with its cmawro lemma candidates (a lookup by form, not a parse)."""
    idx = cmawro_index()
    loose = {}
    for k in idx:
        loose.setdefault(_plain(k), []).append(k)
    d = ebl(key)
    on = False
    for lab in d["order"]:
        if lab == a:
            on = True
        if not on:
            continue
        n = d["N"].get(lab, "")
        print(f"### {key} {lab}  `{n}`")
        if d["L"].get(lab):
            print(f"  eBL lemmas: {', '.join(d['L'][lab])}")
        n = re.sub(r"%sb .*?(?=%n|$)", " ", n)
        n = re.sub(r"%\w+ ?", " ", n)
        for w in n.split():
            c = re.sub(r"[\[\]⸢⸣?!<>()|#*]", "", w)
            if not re.search(r"[a-zāēīūâêîû]", c):
                continue
            tries = [c]
            if c.endswith("-ma"):
                tries.append(c[:-3])
            hits = []
            for t in tries:
                hits += idx.get(t, [])
                if not hits:
                    for k in loose.get(_plain(t), []):
                        hits += idx[k]
            print(f"  {w}: {' | '.join(hits[:4]) if hits else '— (not in cmawro: parse it yourself)'}")
        if b is None or lab == b:
            break


def cmd_lines(key, a, b):
    d = ebl(key)
    on = False
    for lab in d["order"]:
        if lab == a:
            on = True
        if on:
            print(f"### {lab}\n  N: {d['N'].get(lab)}\n  T: {d['T'].get(lab, '')}")
            for n in d["notes"].get(lab, []):
                print(f"  Note: {n}")
        if lab == b:
            break


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if rx.search(strip_marks(heb[lab])):
                    print(f"{k} {lab}: {heb[lab]}   ‹{ebl(k)['N'].get(lab, '')}›")
        return
    for f in sorted(glob.glob(os.path.join(ROOT, "*", "**", "annotated*.rtl.md"), recursive=True)):
        src = None
        for ln in open(f, encoding="utf-8"):
            if ln.startswith("### "):
                src, lab = None, ln[4:].strip()
            elif ln.startswith("`") and src is None:
                src = ln.strip()
            elif ln.startswith("> ") and rx.search(strip_marks(ln[2:])):
                print(f"{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()[:140]}   ‹{(src or '')[:100]}›")


# ---------------------------------------------------------------- build
def sections(key):
    out, cur = [], None
    for l in open(annotated_path(key), encoding="utf-8"):
        l = l.rstrip("\n")
        if l.startswith("## "):
            out.append(("h", l[3:].strip()))
            cur = None
        elif l.startswith("# "):
            cur = None
        elif re.match(r"^### (\S+)\s*$", l):
            cur = l[4:].strip()
            out.append(["l", cur, "", ""])
        elif cur and l.startswith("> "):
            out[-1][2] = l[2:].strip()
        elif cur and l.startswith("- **הערת שוליים:**"):
            out[-1][3] = l[len("- **הערת שוליים:**"):].strip()
    return out


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../maqlu_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../maqlu_tools.py build\n-->\n\n")


def build_one(key):
    ip = os.path.join(HERE, PROJ, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {TITLES[key]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n## {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{n}]"
                notes.append(f"[^{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    text = head + intro + "\n" + "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(translation_path(key), "w", encoding="utf-8").write(text)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build_project(keys):
    pdir = os.path.join(HERE, PROJ)
    hp = os.path.join(pdir, "translation--head.rtl.md")
    head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else "# מַקְלוּ"
    parts = [GENERATED.format(src="translation--head.rtl.md and translation-<KEY>.rtl.md") + head]
    for k in keys:
        src = open(translation_path(k), encoding="utf-8").read().split("\n")
        src = [l for l in src if not (l.startswith("<!--") or l.startswith("GENERATED") or l.startswith("Built by")
                                       or l.startswith("To change") or l == "-->")]
        fix = lambda s, k=k: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", s)
        body = []
        for l in src:
            if l.strip() == "---":
                continue
            body.append("#" + fix(l) if (l.startswith("# ") or l.startswith("## ")) else fix(l))
        while body and not body[0].strip():
            body.pop(0)
        parts.append("\n\n" + "\n".join(body).rstrip("\n"))
    open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write("".join(parts) + "\n")
    print(f"{PROJ}/translation.rtl.md: {', '.join(keys)}")


def build():
    pk = present_keys()
    for k in pk:
        build_one(k)
    if pk:
        build_project(pk)
    bad = 0
    p = os.path.join(HERE, PROJ, "translation.rtl.md")
    if os.path.exists(p):
        comb = [l for l in open(p, encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        srcl = []
        for k in pk:
            srcl += [re.sub(r"\[\^([^\]]+)\]", lambda m, k=k: f"[^{k}-{m.group(1)}]", l)
                     for l in open(translation_path(k), encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        if comb != srcl:
            print("combined numbered lines differ from the per-file translations")
            bad += 1
        txt = open(p, encoding="utf-8").read()
        refs = re.findall(r"\[\^([^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^([^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(f"footnote mismatch ({len(refs)} refs, {len(defs)} defs)")
            bad += 1
    ok = verify(pk)
    return ok and bad == 0


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "fill" and rest:
        return cmd_fill(rest[0])
    if cmd == "pars" and rest:
        return cmd_pars(rest[0])
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build() else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "norm" and rest:
        return cmd_norm(rest[0])
    if cmd == "incipits":
        return cmd_incipits()
    if cmd == "lines" and len(rest) == 3:
        return cmd_lines(*rest)
    if cmd == "lem" and len(rest) in (2, 3):
        return cmd_lem(*rest)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

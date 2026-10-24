"""Tools of the Hesiod corpus (`הסיודוס/`: the Theogony, the Works and Days). Run with python3 -I -B from any folder.

    python3 -I -B hesiod_tools.py units                    the texts (KEYs), their project folder and line counts
    python3 -I -B hesiod_tools.py data KEY [FROM [TO]]     a translator's line data: each base line (Evelyn-White's Greek,
                                                          with its mark: {חשודה} / {גלנוס} / {פפירוס}), every word with its
                                                          treebank lemma and parse, the names of the line with their fixed
                                                          Hebrew (renderings §3), the formulas and required renderings that
                                                          apply, and the lines of the corpus that repeat it, with their Hebrew
    python3 -I -B hesiod_tools.py fill FILE…               replace every `@` under a `### <label>` by the exact base line
    python3 -I -B hesiod_tools.py lemma '<regex>'          every corpus line with a treebank lemma matching the regex (on the
                                                          diacritic-free lower-case lemma), with its Hebrew: how a word was
                                                          rendered so far, in both poems
    python3 -I -B hesiod_tools.py lexmap ['<regex>']        Hebrew ↔ lemma, from the פירוק bullets of every drafted file:
                                                          each lemma with the Hebrew words chosen for it (collisions show)
    python3 -I -B hesiod_tools.py lsj LEMMA                LSJ (and the other Logeion dictionaries) for one lemma, per word
                                                          (anastrophe.uchicago.edu; never bulk-extract)
    python3 -I -B hesiod_tools.py lxx '<regex>' [BOOK…]    the Septuagint verses matching (../tools/lxx_verses.py grep)
    python3 -I -B hesiod_tools.py verify [KEY…] [--strict]
    python3 -I -B hesiod_tools.py build [KEY…]             translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B hesiod_tools.py grep '<regex>' [--all]   the unvocalized `>` lines of this corpus (--all: of every corpus)
    python3 -I -B hesiod_tools.py gates                    print the reserved / gated words, the required renderings, the
                                                          traps, the formulas and the names
    python3 -I -B hesiod_tools.py selftest                 run the checks on the test lines of renderings.md §10

KEYs: TH (the Theogony, 1-תולדות-האלים/), WD (the Works and Days, 2-מעשים-וימים/); labels are the base's line numbers
("116", "929a", "169b"). Annotated file: <project>/annotated-<KEY>.rtl.md.

Base (../sources/): Perseus--Hesiod/ (Evelyn-White 1914, PD; Perseus markup CC BY-SA) and Perseus-Treebank--Hesiod/ (AGDT
2.1, CC BY-SA 3.0), read through ../tools/perseus2md.py.

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow the base's line list (none missing, duplicated
     or out of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals the base line exactly (use `@` + fill);
  3. the base's mark: a {חשודה} line (<del>), a {גלנוס} line (<add>), a {פפירוס} line (WD 169a–d) opens with its tag;
  4. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  5. RESERVED Hebrew strings in the bracket-free unvocalized `>` line: an error unless the line's licence text (its
     diacritic-free Greek + the treebank lemmas, and the edge words of the neighbouring lines) matches the licence;
  6. REQUIRED renderings: a lemma whose fixed Hebrew must appear (the LXX identities, renderings §6–§7);
  7. NAMES (renderings §3): a lemma of the table in the line → its Hebrew in the line (a translated name: only where the
     Greek word is capitalized); the first occurrence of each name in the file is vocalized;
  8. TRAPS: unvocalized strings that read as another Hebrew word (renderings §7.3);
  9. FORMULAS (renderings §8): where the Greek has a formula, the Hebrew has its fixed rendering;
 10. repeated lines (identical Greek, 3+ words) with different Hebrew are listed (justify or fix).
Escapes, written in the entry: `[סטייה מן הנוסחה: <reason>]` (6, 9), `[היתר שם: <name>]` (7), `[היתר שער: <word>]` (5).
Exit code 1 on any error of 1–9.
"""
import difflib
import glob
import html
import json
import os
import re
import subprocess
import sys
import unicodedata
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import perseus2md as P  # noqa: E402

SRC = os.path.join(ROOT, "sources")
P1 = "1-תולדות-האלים"
P2 = "2-מעשים-וימים"
UNITS = {
    "TH": (P1, "הסיודוס, תולדות האלים (Θεογονία)", "Perseus--Hesiod/tlg0020.tlg001.perseus-grc2.xml",
           "Perseus-Treebank--Hesiod/tlg0020.tlg001.perseus-grc1.tb.xml"),
    "WD": (P2, "הסיודוס, מעשים וימים (Ἔργα καὶ Ἡμέραι)", "Perseus--Hesiod/tlg0020.tlg002.perseus-grc2.xml",
           "Perseus-Treebank--Hesiod/tlg0020.tlg002.perseus-grc1.tb.xml"),
}
PROJECT_TITLES = {P1: "הסיודוס, תולדות האלים", P2: "הסיודוס, מעשים וימים"}
MARK_TAG = {"del": "{חשודה}", "add": "{גלנוס}", "part": "{פפירוס}"}
NIQ = "֑-ֽֿ-ׇ"
fl = P.norm  # diacritic-free, lower case, σ for ς, letters only


def flat(s):
    """Greek text → diacritic-free lower case with spaces kept (for the formula and licence regexes)."""
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower().replace("ς", "σ")
    s = re.sub(r"[ʼʹʽ'’]", " ", s)
    s = re.sub(r"[^\w\s]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


# ---------------------------------------------------------------- base texts
_DATA = {}


def rows(key):
    if key in _DATA:
        return _DATA[key]
    proj, title, tei, tb = UNITS[key]
    lines = P.parse_tei(os.path.join(SRC, tei))
    words = P.parse_tb(os.path.join(SRC, tb))
    P.align(lines, words)
    _DATA[key] = lines
    return lines


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def license_text(key, lab):
    r = row(key, lab)
    if not r:
        return ""
    rs = rows(key)
    i = rs.index(r)
    t = flat(r["text"])
    lems = " ".join(sorted({fl(w["lemma"]) for w in r["words"] if w.get("lemma")}))
    extra = ""
    if i > 0 and flat(rs[i - 1]["text"]).split():
        extra += " " + flat(rs[i - 1]["text"]).split()[-1]
    if i + 1 < len(rs) and flat(rs[i + 1]["text"]).split():
        extra += " " + flat(rs[i + 1]["text"]).split()[0]
    return f"{t} | {lems} |{extra}"


def caps_of(r):
    """{flattened lemma: True} for the words whose token in the base line (Evelyn-White's text) is capitalized."""
    capt = {fl(t) for t in P.tokens(r["text"]) if t.lstrip("[")[:1].isupper()}
    return {fl(w["lemma"]): (fl(w["form"]) in capt) for w in r["words"] if w.get("lemma")}


def lemmas_of(key, lab):
    r = row(key, lab)
    return [fl(w["lemma"]) for w in (r or {}).get("words", []) if w.get("lemma")]


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, UNITS[key][0], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, UNITS[key][0], f"translation-{key}.rtl.md")


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
            heb[cur], body[cur] = [], []
            seq.append(cur)
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
    return [k for k in UNITS if os.path.exists(annotated_path(k))]


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(k)
        out[k] = a[0] if a else {}
    return out


def strip_marks(s):
    """Hebrew without the line tags, brackets, editorial marks, footnote refs, quotes and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"\{[^}]*\}", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״]", "", s)
    s = re.sub(rf"[{NIQ}]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- gates (renderings §7)
W = r"(?<![א-ת])[ובלמהכש]{0,3}"     # optional prefixes at a word start
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licence regex on the licence text or None = never, why)
RESERVED = [
    # --- never (§7.1) ---
    (W + alt("אלוהים", "אלהים", "אלהי", "אלוהיו", "אלוהינו", "אלוהיך", "אלוהות") + E, None, "θεός = אֵל, θεοί = אֵלִים: אֱלֹהִים never (§5)"),
    (W + alt("אלוהי", "אלוהית", "אלוהיים", "אלוהיות") + E, r"\bθει(?:οσ|ου|ω|ον|οι|ων|οισ|η|ην|ησ|αι|α)\b|θεσπεσ", "אֱלוֹהִי / אֱלוֹהִית only for θεῖος, θεσπέσιος (§11.2), always vocalized"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "יברא", "בראם", "בוראו", "בוראם", "בריאתו") + E, None, "the root ברא never: ποιέω = עָשָׂה (the LXX's ποιέω for בָּרָא is a note)"),
    (W + alt("תנין", "תנינים", "התנין", "התנינים") + E, r"\bκητ(?:οσ|ουσ|ει|η|εα|εων|εσι)\b", "תַּנִּין only for κῆτος, which Hesiod does not have (Κητώ = קֵטוֹ; δράκων = דְּרָקוֹן)"),
    (W + alt("לויתן", "לוויתן", "רהב") + E, None, "לִוְיָתָן, רַהַב never"),
    (W + alt("תהום", "תהומות", "התהום", "תהומה") + E, r"αβυσσ", "תְּהוֹם only for ἄβυσσος (absent): Tartaros = טַרְטָרוֹס"),
    (W + alt("תהו", "ותהו", "בהו", "ובהו") + E, None, "תֹּהוּ / בֹּהוּ never: Χάος = פַּעַר (the LXX's χάος = גַּיְא)"),
    (W + alt("רקיע", "הרקיע", "רקיעים") + E, r"στερεωμ", "רָקִיעַ never (στερέωμα absent)"),
    (W + alt("חושך", "חשך", "החושך", "החשך", "חשכה", "חשיכה") + E, r"σκοτ", "חֹשֶׁךְ only for σκότος (absent): ζόφος = אֹפֶל"),
    (W + alt("שאול", "שאולה", "לשאול") + E, None, "שְׁאוֹל never: Hades = הָאדֵס, Erebos = אֶרֶבוֹס, Tartaros = טַרְטָרוֹס"),
    (W + alt("מבול", "המבול") + E, r"κατακλυσ", "מַבּוּל only for κατακλυσμός (absent)"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "שבתה", "שבתון", "וישבות", "שבות") + E, None, "the root שבת never: ἑβδόμη = שְׁבִיעִי, παύω = חָדַל"),
    (W + alt("ניחוח", "ניחח", "הניחוח") + E, None, "נִיחוֹחַ never (Gen 8:21): κνίση = רֵיחַ־חֵלֶב"),
    (W + alt("תשוקה", "תשוקת", "תשוקתה", "תשוקתו", "תשוקתך") + E, None, "תְּשׁוּקָה never (Gen 3:16 – a link only through the Hebrew): ἔρος = חֵשֶׁק, ἵμερος = כִּסּוּף"),
    (W + alt("נחמד", "נחמדה", "נחמדים", "נחמדות", "נחמדת") + E, None, "נֶחְמָד never (Gen 2:9, 3:6): ἐρατός = עָרֵב"),
    (W + alt("עדן", "בעדן") + E, None, "עֵדֶן never"),
    (W + alt("צלע", "הצלע", "צלעו", "צלעות", "מצלעותיו") + E, r"πλευρ", "צֵלָע only for πλευρά (absent)"),
    (r"עזר כנגד", None, "עֵזֶר כְּנֶגְדּוֹ never"),
    (W + alt("עצב", "עצבון", "עיצבון", "עצבונך", "בעצב", "התעצב") + E, r"λυπ", "the root עצב only for λύπη (absent): ἄλγος = מַכְאוֹב, ἄχος = יָגוֹן"),
    (W + alt("קוץ", "קוצים", "דרדר", "דרדרים") + E, r"ακανθ|τριβολ", "קוֹץ / דַּרְדַּר only for ἄκανθα / τρίβολος (absent)"),
    (W + alt("ארור", "ארורה", "ארר", "אורר", "אררה", "מארה", "לארור", "יאר", "יאור") + E, r"καταρ|επαρ|αραο|αρησ", "the root ארר only for a curse word (καταράομαι …)"),
    (W + alt("ברך", "בירך", "ברכה", "ברכת", "מבורך", "מבורכת", "יברך", "ברוך", "ברוכה", "ברכו", "ברכם") + E, r"ευλογ", "the root ברך only for εὐλογέω (absent): ὄλβιος = שְׂבַע־טוֹבָה"),
    (W + alt("ברית", "הברית", "בריתי", "בריתו") + E, r"διαθηκ", "בְּרִית only for διαθήκη (absent)"),
    (W + alt("נפח", "ויפח", "נופח", "נפחה", "נפחו") + E, r"εμφυσ|φυσαω", "נָפַח only for ἐμφυσάω (absent): ἐμπνέω = הִשְׁרָה"),
    (W + alt("יפת") + r"(?![א-ת־])", None, "יֶפֶת never: Ἰαπετός = יָאפֶּטוֹס (`יְפַת־` 'fair of' with a maqaf is free)"),
    (W + alt("יאור", "היאור", "יאורים") + E, None, "יְאֹר never (an Egyptian loanword): the Nile = נִילוּס"),
    (W + alt("היכל", "היכלו", "היכלות", "ההיכל", "היכלי") + E, None, "הֵיכָל never (the cuneiform loanword): δῶμα = אַרְמוֹן"),
    (W + alt("משכן", "משכנו", "המשכן", "משכנות", "משכנותיו") + E, None, "מִשְׁכָּן never"),
    (W + alt("כלה", "הכלה", "כלתו", "כלות") + E, r"νυοσ|νυμφη(?![ιαισ])", "כַּלָּה never in practice (νύμφη = נִימְפָה); `כלה` 'finished' must then be written כָּלָה, vocalized"),
    (W + alt("שוחד", "שחד", "השוחד", "השחד") + E, None, "שֹׁחַד never: δῶρον = מַתָּנָה (the LXX's δῶρα = שֹׁחַד, a note)"),
    (W + alt("נפלים", "נפילים", "הנפלים", "הנפילים") + E, r"γιγαντ|γιγασ", "נְפִלִים only for γίγας – and γίγας is הַגִּיגַנְטִים (the LXX's γίγαντες, Gen 6:4, a note)"),
    (W + alt("גבור", "גיבור", "גבורים", "גיבורים", "הגבורים", "הגיבורים", "גבורי", "גיבורי") + E, r"γιγαντ|γιγασ", "גִּבּוֹר only for γίγας (Gen 6:4 LXX): ἥρως = הֵרוֹאִי"),
    (W + alt("מין", "למינהו", "למינהם", "למינה", "מינים") + E, None, "מִין never (Gen 1:21 through the Hebrew): γένος = גֶּזַע"),
    # --- only for the Greek counterpart (§7.2) ---
    (W + alt("ראשית", "בראשית", "מראשית", "ראשיתו", "ראשיתם") + E, r"αρχη|αρχησ|αρχην|αρχηθεν|\bαρχ", "רֵאשִׁית only for ἀρχή (Gen 1:1 LXX ἐν ἀρχῇ)"),
    (W + alt("נהיה", "נהיתה", "נהיו", "ייהיה", "תיהיה", "ייהיו", "להיהיות", "נהייתה") + E, r"γιγν|γιν|γεν|γεγα|γεγον|εγεν|γειν", "נִהְיָה only for γίγνομαι (Gen 1:3 LXX ἐγένετο)"),
    (W + alt("יצר", "יצרו", "יצרה", "ייצר", "יוצר", "יוצרו", "וייצר", "יצרם", "יצור", "יצורה", "יציר", "יצירה", "נוצר", "נוצרה") + E, r"πλασσ|πλασ|πλαστ", "the root יצר only for πλάσσω / συμπλάσσω (Gen 2:7 LXX ἔπλασεν)"),
    (W + alt("עבד", "עובד", "עובדים", "עבדו", "עבדה", "עבדי", "עבדים", "עבודה", "עבודת", "לעבוד", "לעבד", "יעבד", "יעבוד", "תעבוד", "תעבד", "עבוד", "עבודתו", "עבדיו", "העבדים", "העבד", "עבדה", "נעבד", "עבדות", "עובדת", "עובדי") + E,
     r"εργαζ|ειργαζ|εργασ|δμω|δμωσ|δμωε|δμωι|δμωα|δοαλ|δουλ", "the root עבד only for ἐργάζομαι and δμώς (Gen 2:5, 15, 3:23 LXX ἐργάζεσθαι)"),
    (W + alt("מלאכה", "מלאכת", "מלאכתו", "מלאכות", "מלאכתך", "מלאכתם", "המלאכה", "המלאכות", "מלאכתה", "מלאכותיו", "מלאכותיהם") + E, r"εργ", "מְלָאכָה only for ἔργον (Gen 2:2–3 LXX τὰ ἔργα)"),
    (W + alt("שמר", "שומר", "שומרת", "שומרים", "שומרות", "שמרו", "שמרה", "ישמור", "ישמר", "תשמור", "לשמור", "לשמר", "שמור", "נשמר", "השמר", "שמירה", "משמר", "שומרי", "שמרי") + E,
     r"φυλα|φυλασσ|φυλακ|φυλαξ|ρυομ|ρυσ", "the root שמר only for φυλάσσω (Gen 2:15, 3:24 LXX φυλάσσειν)"),
    (W + alt("זעה", "זיעה", "הזיעה", "הזעה", "בזעת", "זעת", "בזיעת", "זיעת") + E, r"ιδρω|ιδρωσ|ιδρωτ", "זֵעָה only for ἱδρώς (Gen 3:19)"),
    (W + alt("לחם", "הלחם", "לחמו", "לחמם", "לחמך") + E, r"αρτοσ|αρτον|αρτου", "לֶחֶם only for ἄρτος (Gen 3:19): βίος = מִחְיָה, σῖτος = דָּגָן"),
    (W + alt("ערום", "ערם", "עירום", "עירם", "ערומים", "ערומה", "עירומה", "ערומות") + E, r"γυμν|δολ", "עָרֹם / עֵירֹם only for γυμνός (Gen 2:25)"),
    (W + alt("עפר", "העפר", "עפרה") + E, r"κονι", "עָפָר only for κόνις (Gen 2:7, 3:19)"),
    (W + alt("נחש", "הנחש", "נחשים", "הנחשים", "נחשי", "נחשה") + E, r"οφι|οφεω|οφιο|οφισ", "נָחָשׁ only for ὄφις (Gen 3:1 LXX ὁ ὄφις)"),
    (W + alt("נפש", "נפשו", "נפשי", "נפשה", "נפשות", "הנפש", "נפשם", "נפשך") + E, r"ψυχ", "נֶפֶשׁ only for ψυχή (Gen 2:7 LXX ψυχήν)"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות") + E, r"πνοι|πνοη", "נְשָׁמָה only for πνοή (Gen 2:7 LXX πνοήν)"),
    (W + alt("רוח", "רוחות", "הרוח", "הרוחות", "רוחו", "ברוח", "רוחי") + E, r"ανεμ|πνοι|πνοη|αητ|αελλ|θυελλ|πνει|πνεω|πνευ|βορε|ζεφυρ|νοτοσ|νοτου|αυρη", "רוּחַ only for the winds (ἄνεμος, πνοιή, ἀήτης, ἄελλα, θύελλα, πνέω, the named winds)"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "הטוב", "הטובה", "הטובים", "הטובות", "טובו", "טובת", "מיטב", "היטיב", "ייטב", "טובתו", "וטוב") + E,
     r"αγαθ|εσθλ|εαων|ολβι|\bευ\b|\bευσ\b|\bηυσ\b|αμειν|αριστ|βελτ|λωιον|εηοσ|εηυσ|ευνομ", "טוֹב only for ἀγαθός, ἐσθλός, ἐύς (ἐάων), ἀμείνων / ἄριστος, Εὐνομίη: καλός = יָפֶה"),
    (W + alt("צדיק", "צדיקים", "הצדיק", "צדק", "הצדק", "צדקה", "בצדק", "צדיקה", "צדקות") + E, r"δικαι|δικη|δικησ|δικην|δικασ|δικη|ιθυδικ|δικαζ", "צַדִּיק / צֶדֶק only for δίκαιος / δίκη (Gen 6:9 LXX δίκαιος)"),
    (W + alt("משפט", "המשפט", "משפטים", "משפטי", "משפטו", "משפטיו", "המשפטים", "במשפט", "משפטה") + E, r"δικ", "מִשְׁפָּט only for δίκη"),
    (W + alt("עולם", "לעולם", "העולם", "עולמים", "מעולם", "לעולמים") + E, r"αιων", "עוֹלָם only for αἰών (Gen 6:4 LXX ἀπʼ αἰῶνος) – and there by sense: 'lifetime'"),
    (W + alt("דור", "דורות", "הדור", "דורו", "בדורו", "דורם", "הדורות", "לדור", "דורי") + E, r"γενε|γενεη|γενεα", "דּוֹר only for γενεή (Gen 6:9 LXX γενεᾷ): γένος = גֶּזַע"),
    (W + alt("מזבח", "המזבח", "מזבחות", "מזבחו", "מזבחות") + E, r"βωμ", "מִזְבֵּחַ only for βωμός"),
    (W + alt("קדוש", "קדושה", "קדושים", "קדושות", "הקדוש", "הקדושה", "הקדושים", "הקדושות", "מקודש", "מקודשת", "המקודש", "המקודשת", "קודש", "הקודש", "קדש", "קידש", "מקדש", "המקדש", "מקודשים", "מקודשות") + E,
     r"ιερ|ζαθε|ηγαθε|αγνο|αγνη|αγνω", "the root קדש only for ἱερός, ζάθεος (Gen 2:3: the LXX has ἁγιάζω, never ἱερός – a note)"),
    (W + alt("שביעי", "השביעי", "שביעית", "השביעית", "בשביעי") + E, r"εβδομ", "שְׁבִיעִי only for ἕβδομος"),
    (W + alt("כימה") + E, r"πληια|πλειαδ|πληιαδ", "כִּימָה only for the Pleiades (Job 9:9, 38:31 LXX Πλειάς)"),
    (W + alt("כסיל", "כסילים") + E, r"ωαριων|ωριων", "כְּסִיל only for Orion (Job 38:31 LXX Ὠρίων); the fool is אֱוִיל / פֶּתִי"),
    (W + alt("דרקון", "הדרקון", "דרקונים") + E, r"δρακ", "דְּרָקוֹן only for δράκων"),
    (W + alt("גזע", "הגזע", "גזעים", "בגזע", "לגזע") + E, r"γενοσ|γενεα|γενει|γενεσσι|γενη|γενευ", "גֶּזַע only for γένος"),
    (W + alt("זרע", "הזרע", "זורע", "זרעו", "לזרוע", "זרוע", "זרעה", "יזרע", "זרעים") + E, r"σπερμ|σπειρ|σπορ|σπαρ", "זֶרַע / זָרַע only for σπέρμα / σπείρω (Gen 8:22) – `זרוע` 'arm' is vocalized זְרוֹעַ"),
    (W + alt("קציר", "הקציר", "קצר", "קוצר", "לקצור", "קצרו", "יקצר", "קצירה") + E, r"αμα|αμη|αμητ|αμω|θερισ", "קָצִיר / קָצַר only for ἀμάω, ἄμητος (Gen 8:22)"),
    (W + alt("קיץ", "הקיץ", "בקיץ") + E, r"θερ", "קַיִץ only for θέρος (Gen 8:22)"),
    (W + alt("חורף", "החורף", "בחורף", "חרף") + E, r"χειμ", "חֹרֶף only for χειμών (Gen 8:22)"),
    (W + alt("שבועה", "השבועה", "שבועת", "נשבע", "נשבעו", "נשבעת", "ישבע", "שבועות") + E, r"ορκ|ομνυ|ομοσ|ωμοσ|επιορκ", "שְׁבוּעָה / נִשְׁבַּע only for ὅρκος / ὀμνύω"),
    (W + alt("תקוה", "תקווה", "התקוה", "התקווה", "תקותו", "תקוות") + E, r"ελπ", "תִּקְוָה only for ἐλπίς"),
    (W + alt("ערמה", "ערמות", "בערמה", "ערום", "ערמומי") + E, r"δολ|γυμν", "עָרְמָה only for δόλος (and `ערום` for γυμνός)"),
    (W + alt("אוקיינוס", "אוקיאנוס", "האוקיינוס") + E, None, "the modern 'ocean': Ὠκεανός = אוֹקֵאָנוֹס"),
    (W + alt("כאוס", "הכאוס") + E, None, "Χάος = פַּעַר (modern 'chaos' = disorder: a false reading)"),
]

# (lemma regex on the flattened lemmas of the line, Hebrew regex the bracket-free unvocalized line must match, what)
REQUIRED = [
    (r"^αρχη$", r"ראשית", "ἀρχή = רֵאשִׁית (§5)"),
    (r"^(?:εργαζομαι)$", r"(?<![א-ת])[ובלמהכשת]{0,3}(?:ע[ו]?ב[ו]?ד|יעב|תעב|נעב|אעב)", "ἐργάζομαι = עָבַד (§5, LXX Gen 2:5)"),
    (r"^φυλασσω$", r"שמר|שומר|ישמר|שמור", "φυλάσσω = שָׁמַר (§5, LXX Gen 2:15)"),
    (r"^αμωμοσ$", r"תמים|תמימ", "ἄμωμος = תָּמִים (§11.2, LXX Exod 29:1)"),
    (r"^αμαρτανω$", r"(?<![א-ת])[ובלמהכשת]{0,3}(?:ח[ו]?ט[א]|יחט|תחט|נחט|אחט)", "ἁμαρτάνω = חָטָא (§11.2, LXX Gen 4:7)"),
    (r"^ιδρωσ$", r"זע[י]?[הת]", "ἱδρώς = זֵעָה (§5, LXX Gen 3:19)"),
    (r"^(?:πλασσω|συμπλασσω)$", r"יצר|ייצר|יוצר|יצור", "πλάσσω = יָצַר (§5, LXX Gen 2:7)"),
    (r"^γυμνοσ$", r"ערום|ערם|עירום|עירם", "γυμνός = עָרֹם (§5, LXX Gen 2:25)"),
    (r"^οφισ$", r"נחש", "ὄφις = נָחָשׁ (§5, LXX Gen 3:1)"),
    (r"^δρακων$", r"דרקון", "δράκων = דְּרָקוֹן (§5)"),
    (r"^τικτω$", r"ילד|יולד|תלד|ילדה|ילדו|ללדת|יולדת|ילוד|נולד", "τίκτω = יָלַד (§5)"),
    (r"^γεινομαι$", r"הוליד|הולידה|הולידו|מוליד|יוליד|תוליד|להוליד|נולד|נולדו|נולדה", "γείνομαι = הוֹלִיד (§5; passive senses נוֹלַד)"),
    (r"^δικαιοσ$", r"צדיק|צדק", "δίκαιος = צַדִּיק (§5, LXX Gen 6:9)"),
    (r"^υβρισ$", r"זדון|זד(?![א-ת])|זדים", "ὕβρις = זָדוֹן (§5, LXX Prov 11:2)"),
    (r"^(?:βωμοσ)$", r"מזבח", "βωμός = מִזְבֵּחַ (§5)"),
    (r"^ιεροσ$", r"קדוש|קודש|קדש|מקודש", "ἱερός = קָדוֹשׁ (§5)"),
    (r"^ψυχη$", r"נפש", "ψυχή = נֶפֶשׁ (§5)"),
    (r"^αρτοσ$", r"לחם", "ἄρτος = לֶחֶם (§5)"),
    (r"^γενοσ$", r"גזע", "γένος = גֶּזַע (§5)"),
    (r"^γενεη$|^γενεα$", r"דור", "γενεή = דּוֹר (§5)"),
    (r"^ελπισ$", r"תקו", "ἐλπίς = תִּקְוָה (§5)"),
    (r"^ορκοσ$", r"שבוע", "ὅρκος = שְׁבוּעָה (§5)"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line, condition regex on the licence text: if it matches, the unvocalized string is an error; why)
TRAPS = [
    (RW + r"(?:אל|אלים|אלה|אלות|אלי|אלת)" + RE_, r"\bθε(?:οσ|ου|ω|ον|οι|ων|οισ|οισι|οισιν|ουσ|α|η|ην|ησ|αι|ασ|αων|αισ|ε)\b|\bθεα\b|\bθεοσ\b|θεοι|θεων|θεαι",
     "θεός / θεά: אֵל / אֵלִים / אֵלָה / אֵלוֹת always vocalized ('to', 'these')"),
    (RW + r"(?:הרה)" + RE_, r"ηρη|ηρα\b|ηρην|ηρησ", "Hera must be vocalized הֵרָה ('pregnant')"),
    (RW + r"(?:אתנה)" + RE_, r"αθην", "Athena must be vocalized אַתֵנָה ('I will give')"),
    (RW + r"(?:ראה|ריאה)" + RE_, r"ρεη|ρειη|ρεα\b|ρειην|ρεην", "Rhea must be vocalized רֵאָה ('saw', 'lung')"),
    (RW + r"(?:ארס)" + RE_, r"αρη[σιαϊ]|αρεα|αρεοσ|αρει", "Ares must be vocalized אָרֵס ('poison')"),
    (RW + r"(?:ארוס)" + RE_, r"\bερ[οω]σ\b|ερον|εροσ", "Eros must be vocalized אֶרוֹס ('betrothed')"),
    (RW + r"(?:אתר)" + RE_, r"αιθηρ|αιθερ", "Aither must be vocalized אֶתֶר ('site')"),
    (RW + r"(?:הבה)" + RE_, r"ηβη|ηβην|ηβησ", "Hebe must be vocalized הֵבָּה ('come, let us')"),
    (RW + r"(?:הורות)" + RE_, r"ωραι|ωρασ|ωρων", "the Horai must be vocalized הַהוֹרוֹת ('parenthood')"),
    (RW + r"(?:אלוהי|אלוהית|אלוהיים|אלוהיות)" + RE_, r".", "θεῖος: אֱלוֹהִי / אֱלוֹהִית always vocalized ('God of')"),
    (RW + r"(?:כסיל)" + RE_, r"ωαριων|ωριων", "Orion must be vocalized כְּסִיל ('fool')"),
    (RW + r"(?:כימה)" + RE_, r"πληια|πλειαδ", "the Pleiades: vocalize כִּימָה"),
]


# ---------------------------------------------------------------- renderings tables
def _table(section_prefix):
    p = os.path.join(HERE, "renderings.md")
    out = []
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## ") or l.startswith("### "):
            insec = l.lstrip("#").strip().startswith(section_prefix)
            continue
        if insec and l.startswith("|") and not l.startswith("|---"):
            cells = [c.strip().replace("\\|", "|") for c in re.split(r"(?<!\\)\|", l.strip().strip("|"))]  # `\|` = a pipe inside a cell
            out.append(cells)
    return out


def names():
    """[(lemma_flat, hebrew_vocalized, hebrew_plain, star, translated)] from renderings §3.1 and the T rows of §3.2."""
    out = []
    for cells in _table("3.1"):
        if len(cells) < 4 or cells[0] in ("Lemma",):
            continue
        lems = [x.strip() for x in cells[0].split(" / ")]
        heb = cells[1]
        transl = heb.startswith("(T)")
        hebs = [h.strip().strip("`") for h in re.sub(r"^\(T\)\s*", "", heb).split(" / ")]
        if len(hebs) == len(lems):
            pairs = list(zip(lems, hebs))
        else:
            pairs = [(lm, hebs[0]) for lm in lems[:1]]  # variants of one name: check the first lemma only
            pairs += [(lm, hebs[0]) for lm in lems[1:]]
        for lm, h in pairs:
            lm = re.sub(r"\s*\(.*?\)", "", lm)
            if not lm:
                continue
            out.append((fl(lm), h, strip_marks(h), cells[2] == "★", transl))
    for cells in _table("3.2"):
        if len(cells) < 3 or cells[0].startswith("Greek"):
            continue
        lems = [x.strip() for x in cells[0].split(" / ")]
        hebs = [h.strip().strip("`").replace(" ★", "").strip("`") for h in cells[1].split(" / ")]
        if len(hebs) == 1:
            hebs = hebs * len(lems)
        if len(hebs) != len(lems):
            continue
        for lm, h in zip(lems, hebs):
            out.append((fl(lm), h, strip_marks(h), "★" in cells[1], True))
    return out


def formulas():
    out = []
    for cells in _table("8."):
        if len(cells) < 4 or not re.match(r"^F\d+$", cells[0]):
            continue
        out.append((cells[0], cells[1].strip("`"), cells[2].strip("`"), cells[3]))
    return out


# ---------------------------------------------------------------- the checks of one line
def lic(rx, key, lab):
    return rx is not None and re.search(rx, license_text(key, lab)) is not None


def _heb_has(plain, h):
    """Does the bracket-free unvocalized line contain the name h? Prefixes (ו ה ב ל מ כ ש), maqaf compounds and the
    inflectional suffixes of an adjective (־ים ־ות ־ית ־יות ־יים ־ה ־י) are allowed; an initial article of the name is
    optional."""
    h = strip_marks(h)
    words = re.split(r"[\s,.;:!?–—()\[\]]+", plain)
    cands = {h}
    if len(h) > 3 and h.startswith("ה"):
        cands.add(h[1:])
    for c in cands:
        if " " in c or "־" in c:
            if re.search(r"(?<![א-ת])[ובלמהכש]{0,3}" + re.escape(c) + r"(?![א-ת])", plain) or \
                    re.search(r"(?<![א-ת])[ובלמהכש]{0,3}" + re.escape(c.replace("־", " ")) + r"(?![א-ת])", plain.replace("־", " ")):
                return True
            continue
        for w in words:
            for part in w.split("־"):
                m = re.match(r"^[ובלמהכש]{0,3}(.*)$", part)
                for k in range(0, 4):
                    stem = part[k:] if k <= len(part) else ""
                    if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                        if re.fullmatch(r"[ובלמהכש]{0,3}", part[:k]):
                            return True
    return False


def check_line(key, lab, heb, body, out, first_seen=None):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    r = row(key, lab) or {"text": "", "mark": "", "words": []}
    src = r["text"]
    srcf = flat(src)
    # 3. the mark
    tag = MARK_TAG.get(r.get("mark", ""))
    if tag and not heb.lstrip().startswith(tag) and not (r["mark"] == "del" and lab == "929s" and "{חשודה}" in heb):
        out.append(f"MARK {key} {lab}: the base marks this line ({r['mark']}): the Hebrew opens with {tag}\n    {heb}")
        bad += 1
    if not tag and re.match(r"^\{(?:חשודה|גלנוס|פפירוס)\}", heb.strip()):
        out.append(f"MARK {key} {lab}: a tag on a line the base does not mark\n    {heb}")
        bad += 1
    # 5. reserved
    for rx, allow, why in RESERVED:
        m = re.search(rx, plain)
        if m and not lic(allow, key, lab):
            if re.search(r"\[היתר שער: [^\]]*" + re.escape(m.group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: «{m.group(0).strip()}» – {why}\n    {heb}\n    src: {src}")
            bad += 1
    # 6. required
    lems = lemmas_of(key, lab)
    for lrx, hrx, what in REQUIRED:
        if any(re.search(lrx, x) for x in lems) and not re.search(hrx, plain) and "[סטייה מן הנוסחה" not in body:
            out.append(f"REQUIRED {key} {lab}: {what}\n    {heb}\n    src: {src}")
            bad += 1
    # 7. names
    caps = caps_of(r) if r.get("words") else {}
    for lm, hv, hp, star, transl in names():
        if lm not in lems or not caps.get(lm, False):
            continue
        if not _heb_has(plain, hp) and f"[היתר שם: " not in body:
            out.append(f"NAME {key} {lab}: {lm} → {hv} (renderings §3) is not in the line\n    {heb}")
            bad += 1
        elif first_seen is not None and hp not in first_seen and _heb_has(plain, hp):
            first_seen.add(hp)
            if not transl and not re.search(rf"[{NIQ}]", _find_word(heb, hp)):
                out.append(f"VOCALIZE {key} {lab}: the first occurrence of {hv} in the file must be vocalized\n    {heb}")
                bad += 1
    # 8. traps
    for rx, cond, why in TRAPS:
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    # 9. formulas
    for fid, grx, hrx, _ in formulas():
        if re.search(grx, srcf) and not re.search(nopunct(hrx), nopunct(plain)) and "[סטייה מן הנוסחה" not in body:
            out.append(f"FORMULA {key} {lab}: {fid} `{grx}` → `{hrx}` (renderings §8)\n    {heb}\n    src: {src}")
            bad += 1
    return bad


def _find_word(heb, hp):
    """The raw (vocalized) word of the line that strips to the name hp (its first word), prefixes and suffixes allowed."""
    first = hp.split()[0].split("־")[0]
    cands = {first} | ({first[1:]} if len(first) > 3 and first.startswith("ה") else set())
    for w in re.split(r"[\s־,.;:!?–—()\[\]]+", heb):
        p = strip_marks(w)
        for c in cands:
            for k in range(0, 4):
                if not re.fullmatch(r"[ובלמהכש]{0,3}", p[:k]):
                    continue
                stem = p[k:]
                if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                    return w
    return ""


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
    keys = keys or present_keys()
    bad = 0
    for key in keys:
        if key not in UNITS:
            print(f"unknown KEY {key}")
            bad += 1
            continue
        a = read_annotated(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, body, probs = a
        ordr = order(key)
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in ordr if x not in heb]
        extra = [x for x in seq if x not in ordr]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing[:30]}{' …' if len(missing) > 30 else ''}")
                bad += 1
        if extra:
            print(f"{key}: entries not in the base: {extra}")
            bad += 1
        if [x for x in seq if x in ordr] != [x for x in ordr if x in heb]:
            print(f"{key}: entries out of the base's order")
            bad += 1
        msgs, first_seen = [], set()
        for k in seq:
            if not heb[k].strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            s = src.get(k)
            r = row(key, k)
            if s is None:
                print(f"{key} {k}: no backticked source line")
                bad += 1
            elif s == "`@`":
                print(f"{key} {k}: `@` not filled (run fill)")
                bad += 1
            elif r and s.strip("`") != r["text"]:
                print(f"{key} {k}: source line differs from the base\n    A: {s}\n    B: `{r['text']}`")
                bad += 1
            bad += check_line(key, k, heb[k], body.get(k, ""), msgs, first_seen)
        for m in msgs:
            print(m)
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
        print(f"{key}: {len(seq)} annotated entries (base {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = flat(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical Greek) with different Hebrew (justify in the apparatus or fix):")
    for nk, lst in groups.items():
        hs = [(k2, lab, allh.get(k2, {}).get(lab)) for k2, lab in lst]
        hs = [h for h in hs if h[2]]
        if len(hs) < 2 or (keys and not any(h[0] in keys for h in hs)):
            continue
        if len({nopunct(strip_marks(h[2])) for h in hs}) > 1:
            nd += 1
            print(f"- {nk}")
            for k2, lab, h in hs:
                print(f"    {k2} {lab}: {h}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


# ---------------------------------------------------------------- data, fill, lemma, lexmap, lsj, lxx, grep
def _corpus():
    return [(k2, r["label"], flat(r["text"])) for k2 in UNITS for r in rows(k2)]


def _similar(key, lab, nk, corpus, allh, thr=0.8):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            rr = 1.0
        elif len(nk.split()) >= 4 and abs(len(n2) - len(nk)) < 0.4 * len(nk):
            rr = difflib.SequenceMatcher(None, nk, n2).ratio()
            if rr < thr:
                continue
        else:
            continue
        out.append((rr, k2, l2, n2, allh.get(k2, {}).get(l2) or "(not yet drafted)"))
    out.sort(key=lambda x: -x[0])
    return out


def cmd_units():
    for k, u in UNITS.items():
        print(f"{k}\t{u[0]}\t{len(rows(k))} lines\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def _span(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    return rs[i:j + 1]


def cmd_data(key, a=None, b=None):
    corpus = _corpus()
    allh = all_hebrew()
    nm = names()
    fs = formulas()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    print("Words: form – treebank lemma (the parse decoded; the relation) – a machine-checked annotation, not a reading: "
          "check every form that carries a tense, a parallel or a gate (LSJ: `lsj <lemma>`).\n")
    for r in sp:
        mk = f"   [base mark: {r['mark']} → the Hebrew opens with {MARK_TAG[r['mark']]}]" if r["mark"] else ""
        print(f"### {r['label']}{mk}")
        print(f"`{r['text']}`")
        for w in r["words"]:
            note = f" [{w['note']}]" if w.get("note") else ""
            print(f"- `{w['form']}` – {w['lemma']} ({w['parse']}; {w['rel']}){note}")
        lems = [fl(w["lemma"]) for w in r["words"]]
        caps = caps_of(r)
        nn = [(lm, hv, t) for lm, hv, hp, st, t in nm if lm in lems and caps.get(lm)]
        if nn:
            print("- NAMES (renderings §3): " + "; ".join(f"{lm} = {hv}{' (translated name)' if t else ''}" for lm, hv, t in nn))
        for lrx, hrx, what in REQUIRED:
            if any(re.search(lrx, x) for x in lems):
                print(f"- REQUIRED: {what}")
        srcf = flat(r["text"])
        for fid, grx, hrx, _ in fs:
            if re.search(grx, srcf):
                print(f"- FORMULA {fid}: `{hrx}`")
        nk = srcf
        if nk and len(nk.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh)[:5]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} → {h}")
        print()


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z]+)\.rtl\.md$", path)
    if not m or m.group(1) not in UNITS:
        sys.exit("not an annotated-<KEY>.rtl.md file")
    key = m.group(1)
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
            continue
        if ln.strip() == "`@`" and cur:
            r = row(key, cur)
            if r:
                text[i] = "`" + r["text"] + "`"
                n += 1
            else:
                print(f"no base line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


def cmd_lemma(pat):
    rx = re.compile(fl(pat) if not re.search(r"[\\^$|()\[\]]", pat) else pat)
    allh = all_hebrew()
    n = 0
    for k in UNITS:
        for r in rows(k):
            hit = [w for w in r["words"] if rx.search(fl(w["lemma"]))]
            if hit:
                n += 1
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: {', '.join(w['form'] for w in hit)}  `{r['text']}`\n    {h or '(not yet drafted)'}")
    print(f"{n} line(s)")


_PIRUK = re.compile(r"`([^`]+)`\s*–\s*([^\s(\"„“,;]+)[^;]*?\(\"([^\"]+)\"\)")


def cmd_lexmap(pat=None):
    """Hebrew ↔ lemma from the פירוק bullets: `form` – lemma … ("Hebrew")."""
    m = {}
    for k in present_keys():
        heb, seq, src, body, _ = read_annotated(k)
        for lab in seq:
            for l in body[lab].split("\n"):
                if not l.startswith("- **פירוק:**"):
                    continue
                for seg in re.split(r";\s+(?=`)", l[len("- **פירוק:**"):]):
                    mm = _PIRUK.search(seg)
                    if mm:
                        lem = fl(mm.group(2))
                        hb = strip_marks(mm.group(3))
                        if lem:
                            m.setdefault(lem, {}).setdefault(hb, []).append(f"{k}{lab}")
    rx = re.compile(pat) if pat else None
    for lem in sorted(m):
        if rx and not (rx.search(lem) or any(rx.search(h) for h in m[lem])):
            continue
        hs = m[lem]
        flag = "  ← more than one Hebrew" if len(hs) > 1 else ""
        print(f"{lem}: " + "; ".join(f"{h} ({len(v)}: {', '.join(v[:4])}{'…' if len(v) > 4 else ''})" for h, v in hs.items()) + flag)
    # the other direction: one Hebrew for several lemmas
    inv = {}
    for lem, hs in m.items():
        for h in hs:
            inv.setdefault(h, set()).add(lem)
    coll = {h: ls for h, ls in inv.items() if len(ls) > 1}
    if coll and not pat:
        print("\nOne Hebrew word for several lemmas (check each):")
        for h, ls in sorted(coll.items()):
            print(f"  {h}: {', '.join(sorted(ls))}")


def cmd_lsj(lemma):
    url = "https://anastrophe.uchicago.edu/logeion-api/detail?type=normal&w=" + urllib.parse.quote(lemma)
    try:
        with urllib.request.urlopen(url, timeout=30) as f:
            d = json.load(f)
    except Exception as e:  # noqa: BLE001
        sys.exit(f"Logeion: {e}")
    for dic in d.get("detail", {}).get("dicos", []):
        for e in dic.get("es", [])[:2]:
            t = html.unescape(re.sub(r"<[^>]+>", " ", e))
            t = re.sub(r"\s+", " ", t).strip()
            print(f"## {dic.get('dname')}\n{t[:2500]}{' …' if len(t) > 2500 else ''}\n")


def cmd_lxx(args):
    subprocess.run([sys.executable, "-I", "-B", os.path.join(ROOT, "tools", "lxx_verses.py"), "grep"] + args, check=False)


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if rx.search(strip_marks(heb[lab])):
                    print(f"{k} {lab}: {heb[lab]}   ‹{(row(k, lab) or {}).get('text', '')}›")
        return
    for f in sorted(glob.glob(os.path.join(ROOT, "*", "**", "annotated*.rtl.md"), recursive=True)):
        srcl, lab = None, None
        for ln in open(f, encoding="utf-8"):
            if ln.startswith("### "):
                srcl, lab = None, ln[4:].strip()
            elif ln.startswith("`") and srcl is None:
                srcl = ln.strip()
            elif ln.startswith("> ") and rx.search(strip_marks(ln[2:])):
                print(f"{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()[:140]}   ‹{(srcl or '')[:100]}›")


def cmd_gates():
    print("RESERVED (Hebrew regex | licensed by | why):")
    for rx, allow, why in RESERVED:
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why})")
    print("\nREQUIRED (lemma → Hebrew):")
    for l, h, w in REQUIRED:
        print(f"  {l} → {h}  ({w})")
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for fid, g, h, lines in formulas():
        print(f"  {fid}: {g}  →  {h}   ({lines})")
    print("\nNAMES:")
    for lm, hv, hp, st, t in names():
        print(f"  {lm} = {hv}{' ★' if st else ''}{' (T)' if t else ''}")


def cmd_selftest():
    n, fails = 0, 0
    for cells in _table("10."):
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z]+) (\S+)$", cells[0])
        if not m:
            continue
        key, lab = m.groups()
        heb = cells[2].strip("`")
        msgs = []
        b = check_line(key, lab, heb, "", msgs, None)
        got = "err" if b else "ok"
        n += 1
        if got != cells[1]:
            fails += 1
            print(f"SELFTEST FAIL {key} {lab}: expected {cells[1]}, got {got}\n    {heb}\n    src: {(row(key, lab) or {}).get('text')}")
            for x in msgs:
                print("   ", x.replace("\n", "\n    "))
    print(f"selftest: {n} lines, {fails} failure(s)")
    return fails == 0


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


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../hesiod_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../hesiod_tools.py build\n-->\n\n")


def build_one(key):
    pdir = os.path.join(HERE, UNITS[key][0])
    ip = os.path.join(pdir, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {UNITS[key][1]}"
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
    open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write(text.replace("Built by ../hesiod_tools.py build from ", "Built by ../hesiod_tools.py build (a copy of translation-" + key + ".rtl.md) from "))
    print(f"translation-{key}.rtl.md (+ translation.rtl.md): {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build(keys=None):
    for k in [k for k in present_keys() if not keys or k in keys]:
        build_one(k)
    return verify(present_keys())


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "units":
        return cmd_units()
    if cmd == "data" and rest:
        return cmd_data(*rest[:3])
    if cmd == "fill" and rest:
        for p in rest:
            cmd_fill(p)
        return
    if cmd == "lemma" and rest:
        return cmd_lemma(rest[0])
    if cmd == "lexmap":
        return cmd_lexmap(rest[0] if rest else None)
    if cmd == "lsj" and rest:
        return cmd_lsj(rest[0])
    if cmd == "lxx" and rest:
        return cmd_lxx(rest)
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build(rest) else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "gates":
        return cmd_gates()
    if cmd == "selftest":
        sys.exit(0 if cmd_selftest() else 1)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

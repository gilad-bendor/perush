"""Tools of the Ugaritic corpus (`מיתוסים-אוגריתיים/`: the Baal Cycle and the short myths and charms). Run with
python3 -I -B from any folder.

    python3 -I -B ugarit_tools.py units                    the tablets (KEYs), their project folder and line counts
    python3 -I -B ugarit_tools.py data KEY [FROM [TO]]     a translator's line data: each KTU line (CUC, with the
                                                          bracket marks), CUC's word parses (merged per lemma; the
                                                          human-reviewed parse where CUC has one), and the lines of
                                                          the whole corpus that repeat it (identically or nearly),
                                                          with the Hebrew already given
    python3 -I -B ugarit_tools.py fill FILE…               replace every `@` placeholder under a `### <label>` heading
                                                          by the exact CUC line (★ rule: never retype it)
    python3 -I -B ugarit_tools.py pars KEY                 before drafting: every line of KEY that repeats a line
                                                          elsewhere in the corpus (ratio >= 0.75) or a fixed line of
                                                          renderings.md §7, with the Hebrew already given
    python3 -I -B ugarit_tools.py lex '<regex>'            every corpus line whose CUC text or DULAT lemma matches,
                                                          with its Hebrew: how a word was rendered so far
    python3 -I -B ugarit_tools.py verify [KEY…] [--strict]
    python3 -I -B ugarit_tools.py build [KEY…]             translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B ugarit_tools.py grep '<regex>' [--all]   the unvocalized `>` lines of this corpus (--all: of every
                                                          corpus in the folder), with the source line
    python3 -I -B ugarit_tools.py dulat '<regex>'          CUC's DULAT-based lexicon (lexeme, DULAT page, POS, gloss):
                                                          the dictionary's headwords and short senses, per word
    python3 -I -B ugarit_tools.py gates                    print the reserved / gated words, traps and formulas
    python3 -I -B ugarit_tools.py selftest                 run the gates on the test lines of renderings.md §9

KEY = a KTU tablet number (1.1 … 1.6, 1.23, 1.24, 1.114, 1.100, 1.107, 1.108, 1.82, 1.83); its annotated file is
<project>/annotated-<KEY>.rtl.md. Labels are CUC's (= KTU's): "III:38" (column:line) or "62" (one-column tablets).

The base text is the Copenhagen Ugaritic Corpus (../sources/CUC/, git-ignored; restore with
`python3 -I ../tools/sources_sync.py fetch --only '^CUC/'`), read through ../tools/cuc2md.py.

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow CUC's line list (none missing, duplicated or
     out of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals CUC's line exactly (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings in the bracket-free unvocalized `>` line: an error unless the line's licence text (its
     CUC words + DULAT lemmas, normalized) matches the licensing regex (renderings.md §5);
  5. TRAPS: unvocalized strings that read as another Hebrew word (renderings.md §5.3);
  6. FORMULAS: where the source line has a fixed formula, the Hebrew must have its fixed rendering (§6);
  7. FIXED lines (§7): the `>` line equals the fixed Hebrew (brackets, marks, punctuation and niqqud ignored), or the
     entry says `[סטייה מן הקבוע: <reason>]`;
  8. repeated lines (identical bracket-free source) with different Hebrew are listed (justify or fix).
Exit code 1 on any error of 1–7.
"""
import difflib
import glob
import json
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import cuc2md  # noqa: E402

CUC_DIR = os.path.join(ROOT, "sources", "CUC", "cuc-v0.2.8-unzipped", "DT-UCPH-cuc-0408967")
CACHE = os.path.join(ROOT, "sources", "CUC", "text", "_lines.json")   # git-ignored (sources/CUC/*)

P1 = "1-מחזור-בעל"
P2 = "2-מיתוסים-ולחשים"
UNITS = {
    "1.1": (P1, "מחזור בעל, לוח א (KTU 1.1)"),
    "1.2": (P1, "מחזור בעל, לוח ב (KTU 1.2)"),
    "1.3": (P1, "מחזור בעל, לוח ג (KTU 1.3)"),
    "1.4": (P1, "מחזור בעל, לוח ד (KTU 1.4)"),
    "1.5": (P1, "מחזור בעל, לוח ה (KTU 1.5)"),
    "1.6": (P1, "מחזור בעל, לוח ו (KTU 1.6)"),
    "1.23": (P2, "שַׁחַר וְשָׁלֵם (KTU 1.23)"),
    "1.24": (P2, "נִכַּל וְיָרִחַ (KTU 1.24)"),
    "1.114": (P2, "המשתה של אֵל (KTU 1.114)"),
    "1.100": (P2, "לחש נגד הנחש: הסוסה ושַׁפְּשׁ (KTU 1.100)"),
    "1.107": (P2, "לחש נגד הנחש (KTU 1.107)"),
    "1.108": (P2, "רָפִא, מלך עולם (KTU 1.108)"),
    "1.82": (P2, "לחש נגד הנחש והתנין (KTU 1.82)"),
    "1.83": (P2, "התנין הכבול (KTU 1.83)"),
}
PROJECT_TITLES = {P1: "מחזור בעל (KTU 1.1–1.6)", P2: "מיתוסים ולחשים קצרים מאוגרית"}
NIQ = "֑-ֽֿ-ׇ"


# ---------------------------------------------------------------- base text
_DATA = None


def data():
    """{KEY: [row]} with row = {label, text, words, parse, reviewed, side, cont}; cached in sources/CUC/text/."""
    global _DATA
    if _DATA is not None:
        return _DATA
    src_mtime = os.path.getmtime(os.path.join(ROOT, "tools", "cuc2md.py"))
    if os.path.exists(CACHE) and os.path.getmtime(CACHE) > src_mtime:
        _DATA = json.load(open(CACHE, encoding="utf-8"))
        if set(_DATA) >= set(UNITS):
            return _DATA
    if not os.path.isdir(CUC_DIR):
        sys.exit(f"missing {CUC_DIR}: run  python3 -I ../tools/sources_sync.py fetch --only '^CUC/'")
    cuc = cuc2md.CUC(CUC_DIR)
    _DATA = {k: cuc2md.tablet_data(cuc, "KTU " + k) for k in UNITS}
    os.makedirs(os.path.dirname(CACHE), exist_ok=True)
    json.dump(_DATA, open(CACHE, "w", encoding="utf-8"), ensure_ascii=False)
    return _DATA


def rows(key):
    return data()[key]


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def plain_src(t):
    """A CUC line without bracket marks, deletions, dividers: for comparisons and licences."""
    t = re.sub(r"\{[^}]*\}", " ", t or "")
    t = re.sub(r"[\[\]⸢⸣⟨⟩]", "", t)
    t = re.sub(r"(?<=\w)/\w", "", t)          # alternative readings b/d: keep the first
    t = t.replace(" . ", " ").replace(".", " ").replace("…", " ")
    return re.sub(r"\s+", " ", t).strip()


def _norm_lemma(l):
    l = unicodedata.normalize("NFC", l or "")
    l = l.replace("ả", "a").replace("ỉ", "i").replace("ủ", "u")      # DULAT's alephs (a hook above)
    l = unicodedata.normalize("NFD", l).replace("\u0309", "")
    l = unicodedata.normalize("NFC", l)
    l = l.replace("ʕ", "ʿ").replace("ˤ", "ʿ").replace("ʔ", "ʾ")
    l = re.sub(r"\(([IVX]+)\)", "", l)
    m = re.match(r"^/([^/]+)/", l.strip())
    if m:
        l = m.group(1).replace("-", "").replace("(", "").replace(")", "")
    return l.strip()


def license_text(key, lab):
    """The words of the line (bracket-free) + its DULAT lemmas (normalized: ʿ for ayin, roots without dashes)."""
    r = row(key, lab)
    if not r:
        return ""
    words = plain_src(r["text"]).replace("ˤ", "ʿ")
    lems = []
    for p in (r.get("parse") or []) + (r.get("reviewed") or []):
        for part in (p[2] or "").split(";"):
            if part.strip() and part.strip() != "?":
                lems.append(_norm_lemma(part))
    return (words + " | " + " ".join(sorted(set(lems)))).lower()


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
    """Hebrew without brackets, editorial marks, footnote refs, quotation marks and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״{}]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- gates (renderings.md §5–§6)
W = r"(?<![א-ת])[ובלמהכש]{0,3}"     # optional prefixes at a word start
WN = r"(?<![א-ת])[ובלהכש]{0,3}"     # the same without מ (for words where מ+X is another word: מגן)
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licensing regex on the licence text or None = never, why)
RESERVED = [
    (W + alt("אלוהים", "אלהים", "אלוה", "אלוהיי?", "אלהי", "אלוהיו", "אלוהיה", "אלוהינו") + E, None,
     "il / ilm = אֵל / אֵלִים, never אֱלֹהִים"),
    (W + alt("שאול", "שאולה") + E, None, "the netherworld = הָאָרֶץ (arṣ); never שְׁאוֹל"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "ויברא", "יברא", "בראם") + E, None,
     "the root ברא never: Ugaritic has no brʾ 'create'; El's bny bnwt = בּוֹנֵה הַבְּנוּיִים (Gen 1:21's `וַיִּבְרָא` in the apparatus)"),
    (W + alt("תנין", "תנינים", "התנין", "התנינים", "תנינם", "תנן") + E, r"\btnn\b", "תַּנִּין only for tnn [cognate] (Gen 1:21) ★"),
    (W + alt("לויתן", "לוויתן", "ליויתן") + E, None, "ltn = לִיתָן (the Ugaritic name); `לִוְיָתָן` (Isa 27:1) only in the apparatus"),
    (W + alt("פתן", "פתנים", "הפתן", "פתני") + E, r"bṯn", "פֶּתֶן only for bṯn [cognate] (Deut 32:33, Ps 91:13)"),
    (W + alt("נחש", "נחשים", "הנחש", "הנחשים", "נחשי", "נחשה", "ניחש", "מנחש") + E, r"nḥš", "נָחָשׁ only for nḥš [cognate] (bṯn = פֶּתֶן: Isa 27:1's `נָחָשׁ` is the Bible's own word)"),
    (W + alt("תהום", "תהומות", "התהום", "התהומות", "תהומה", "תהומים") + E, r"thm", "תְּהוֹם only for thm / thmt [cognate] (Gen 1:2)"),
    (W + alt("רקיע", "הרקיע", "רקיעים") + E, None, "no raqīaʿ in Ugaritic: רָקִיעַ never"),
    (W + alt("תהו", "בהו", "ובהו") + E, None, "תֹּהוּ / בֹּהוּ never (Gen 1:2: no Ugaritic cognate in these texts)"),
    (W + alt("ארובה", "ארובות", "ארבה", "ארבת", "ארובת", "ארובתו", "ארבות") + E, r"urbt|irby|\barbh", "אֲרֻבָּה only for urbt [cognate] (Gen 7:11); `אַרְבֶּה` (locust) only for irby"),
    (W + alt("חלון", "חלונות", "החלון", "החלונות", "חלונו", "חלונים") + E, r"ḥln", "חַלּוֹן only for ḥln [cognate]"),
    (W + alt("ערפל", "הערפל", "ערפלים", "ערפילים") + E, r"ġrpl", "עֲרָפֶל only for ġrpl [cognate]; ʿrpt = עֲנָנִים"),
    (W + alt("ענן", "עננים", "הענן", "העננים", "ענני", "עננו", "ענניו", "ענניה") + E, r"ʿrpt|ʿnn|ʿnt|ʿny|ʿn\b",
     "עָנָן only for ʿrpt 'clouds' (ʿnn 'attendant' is a false friend: מְשָׁרֵת); licensed also by the verb ʿny (ענה forms)"),
    (W + alt("בדק", "הבדק", "בדקי") + E, r"bdq", "בֶּדֶק only for bdqt [cognate] (a rift in the clouds)"),
    (WN + alt("גן", "הגן", "גנה", "גנים", "גני", "גנו") + E, r"\bgn\b", "גַּן only for gn [cognate] (Gen 2:8)"),
    (W + alt("מרזח", "מרזחים", "המרזח") + E, r"mrzḥ", "מַרְזֵחַ only for mrzḥ [cognate] (Jer 16:5, Amos 6:7)"),
    (W + alt("עולם", "עולמים", "לעולם", "עולמו", "עולמך", "העולם", "עלם", "עלמים") + E, r"ʿlm|ġlm", "עוֹלָם only for ʿlm [cognate]"),
    (W + alt("מלאך", "מלאכים", "מלאכי", "מלאכיו", "המלאך", "המלאכים", "מלאכיה", "מלאכה", "מלאכת") + E, r"mlak|lʾk|laak|ylak|tlak",
     "מַלְאָךְ only for mlak [cognate] (and the verb lʾk); מְלָאכָה (Gen 2:2) never here"),
    (W + alt("קדש", "קודש", "קדוש", "קדושה", "קדושים", "מקדש", "מקדשו", "הקדוש", "קדשו", "קדשי", "קדשך", "הקודש", "קודשו", "קודשי") + E,
     r"qdš", "the root קדש only for qdš [cognate]"),
    (W + alt("נחלה", "נחלת", "נחלתי", "נחלתו", "נחלתך", "נחלתה", "נחלתם") + E, r"nḥlt|nḥl", "נַחֲלָה only for nḥlt [cognate] (Ex 15:17)"),
    (W + alt("נפש", "נפשו", "נפשה", "נפשי", "נפשך", "נפשות", "נפשם", "הנפש", "נפשכם") + E, r"npš", "נֶפֶשׁ only for npš [cognate] (Gen 1:20–21)"),
    (W + alt("רפאים", "הרפאים", "רפאי", "רפא") + E, r"rpu|rpi|rpum|rpim|rapiu|\brpủ", "רְפָאִים / רָפִא only for rpu [cognate]"),
    (W + alt("עפר", "העפר", "עפרה", "עפרות", "עפרו") + E, r"ʿpr", "עָפָר only for ʿpr [cognate] (Gen 2:7, 3:19)"),
    (W + alt("צלם", "צלמו", "צלמים", "דמות", "דמותו", "בדמות", "כדמות") + E, r"ṣlm|\bdmt", "צֶלֶם / דְּמוּת never without ṣlm / dmt (Gen 1:26)"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "היטיב", "ייטב", "יטב", "טובו", "טובי", "טובתו", "טובתי", "מיטב") + E, r"ṭb|ṭyb|ṭāb",
     "טוֹב only for ṭb [cognate] (Gen 1); nʿm = נָעִים"),
    (W + alt("גדול", "גדולה", "גדולים", "גדולות", "הגדול", "הגדולים", "גדל", "גדלה") + E, r"gdl", "גָּדוֹל never without gdl: rb = רַב (Gen 1:21's `הַגְּדֹלִים` in the apparatus)"),
    (W + alt("יצר", "ייצר", "יוצר", "יצרו", "וייצר", "יצרה", "יצרתי") + E, r"yṣr", "the root יצר never without yṣr (Gen 2:7)"),
    (W + alt("עשה", "עשו", "עשתה", "עשיתי", "עשית", "יעשה", "תעשה", "אעשה", "נעשה", "עושה", "עושים", "עשות", "לעשות", "עשוי", "עשויה", "מעשה", "מעשי") + E, r"ʿšy|ʿśy",
     "the root עשה never without ʿšy (Gen 1:7, 16, 25, 26, 31): render pʿl, škn, bny by their own sense"),
    (W + alt("קנה", "קונה", "קונת", "קנית", "קניתי", "קנתה", "קנו", "קניה", "קונתו", "קניו", "קנהו", "קונהו", "קונתנו") + E, r"qny|\bqn\b|qnyt|aqny",
     "the root קנה only for qny [cognate] (Gen 14:19, 4:1) and qn 'reed, windpipe'"),
    (W + alt("ברך", "ברכה", "ברכו", "ברכת", "ברכיו", "ברכיה", "בירך", "בירכה", "ברכים", "מבורך", "ברוך", "יברך", "יברכו", "תברך", "ברכי", "ברכיי") + E, r"brk",
     "the root ברך only for brk (bless; knee) [cognate] (Gen 1:22, 28)"),
    (W + alt("קרא", "קראו", "קראה", "קראתי", "קראת", "יקרא", "תקרא", "אקרא", "נקרא", "קורא", "קוראת", "קוראים", "קרוא", "קריאה", "לקראת", "קראתם", "קראי", "קראנו") + E,
     r"qrʾ|qra|qru|qri|qry|qrit|qrʿ|qr\b", "קָרָא only for qrʾ [cognate] (and לִקְרַאת for qry): ṣḥ = צָוַח"),
    (W + alt("ערב", "ערבה", "ערבו", "בערב", "הערב", "ערבים", "ערבית", "מערב", "יערב", "תערב") + E, r"ʿrb|ʿrab|ʿrby",
     "the root ערב only for ʿrb [cognate] (Gen 1:5's `עֶרֶב`): ʿrb 'enter' = נִכְנַס, `עֲרֹב שַׁפְּשׁ` noted"),
    (W + alt("עוף", "העוף", "עופות", "עופף", "יעופף") + E, r"ʿp\b|ʿwp|ʿpp|\btʿpn|\bʿp", "עוֹף only for ʿp [cognate] (Gen 1:20); ʿṣr = צִפּוֹר"),
    (W + alt("צפור", "ציפור", "הצפור", "הציפור", "צפורים", "ציפורים", "הציפורים", "צפרים", "ציפורי", "צפורי") + E, r"ʿṣr|ṣpr", "צִפּוֹר only for ʿṣr [equivalent] (Gen 1:20 `עוֹף`)"),
    (W + alt("דג", "דגים", "הדג", "הדגים", "דגי", "דגת", "דגה") + E, r"\bdg\b|dgm", "דָּג only for dg [cognate] (Gen 1:26 `בִּדְגַת הַיָּם`)"),
    (W + alt("שמש", "השמש", "בשמש") + E, None, "špš = שַׁפְּשׁ (the sun is the goddess): שֶׁמֶשׁ never (the note says 'the sun')"),
    (W + alt("אשרה", "האשרה", "אשרת", "אשרים", "אשרות") + E, None, "Athirat = אֲתִירַת; `אֲשֵׁרָה` only in the apparatus (deities are never assimilated)"),
    (W + alt("עשתרת", "עשתורת", "עשתרתי") + E, None, "ʿṯtrt (the goddess) = עַתְּתַרְת; the town (1.108) = `עַשְׁתָּרוֹת`"),
    (W + alt("עשתרות", "עשתרת־קרנים") + E, r"ʿṯtrt", "the town `עַשְׁתָּרוֹת` only for ʿṯtrt (KTU 1.108)"),
    (W + alt("דגון", "הדגון") + E, None, "Dagan = דָּגָן; `דָּגוֹן` (Judg 16:23) only in the apparatus"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות") + E, None, "nšm 'people' is a false friend of נְשָׁמָה (= אֲנָשִׁים); נשמה never"),
    (W + alt("אדם", "האדם", "לאדם", "אדמה", "האדמה") + E, r"\badm\b|adm\b|adm|udm|admt", "אָדָם only for adm [cognate] (Gen 1:26): nšm = אֲנָשִׁים"),
    (W + alt("רוח", "רוחות", "הרוח", "רוחו", "רוחי", "רוחה") + E, r"\brḥ|rḥ\b|rwḥ", "רוּחַ only for rḥ [cognate] (Gen 1:2)"),
    (W + alt("רחף", "מרחפת", "ריחף", "ריחפה", "מרחף", "מרחפים", "תרחף") + E, r"rḥp", "רחף only for rḥp (Gen 1:2; not in these texts)"),
    (W + alt("השתחוה", "השתחוו", "השתחוותה", "ישתחוה", "תשתחוה", "השתחווה", "משתחוה", "משתחווה", "השתחוי", "השתחוו", "ישתחוו", "תשתחווה") + E,
     r"ḥwy|šḥwy|tštḥwy|yštḥwy|tštḥwyn|ištḥwy", "הִשְׁתַּחֲוָה only for (š)ḥwy [cognate]"),
    (W + alt("הדום", "הדם", "הדומו") + E, r"hdm", "הֲדֹם only for hdm [cognate] (Ps 110:1)"),
    (W + alt("כסא", "כיסא", "כסאו", "כיסאו", "כסאה", "כסאי", "כסאך", "כסאות") + E, r"ksu|ksi|ksa|ks/śủ|ks\b|ksả", "כִּסֵּא only for ksu [cognate]; kḥṯ = כֵּס"),
    (W + alt("בעל", "הבעל", "בעלו", "בעלי", "בעלה", "בעלים", "בעלת", "הבעלים") + E, r"bʿl|bʿlt", "בַּעַל only for bʿl (the god, and 'lord, owner') [cognate]"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "שבתון", "וישבות", "שבתה") + E, r"šbt|ṯbt|šbṯ", "the root שבת never (Gen 2:2–3): ṯbt 'seat' = מוֹשָׁב"),
    (W + alt("מבול", "המבול") + E, None, "מַבּוּל never (no Ugaritic flood)"),
    (W + alt("שלט", "שליט", "השליט", "שלטון", "שלטונו", "שולט", "שלטו") + E, r"šlyṭ|šlṭ", "the root שלט only for šlyṭ [cognate] (Gen 42:6): drkt = שְׂרָרָה"),
    (W + alt("ממשלה", "ממשלת", "ממשל", "משל", "ימשול", "משלה", "ממשלתו", "המושל", "מושל") + E, r"mšl", "the root משל never without mšl (Gen 1:16, 18; 3:16)"),
    (W + alt("שרט", "שרטת", "קרחה", "יתגודדו", "התגודד", "גדוד") + E, r"qrḥ|gdd|šrṭ", "the mourning words of Lev 19:28, 21:5, Deut 14:1 only for their cognates"),
    (W + alt("ידיד", "ידידי", "ידידו", "ידידות", "ידידת") + E, r"ydd|\byd\b|ddym", "יְדִיד only for ydd [cognate] (Deut 33:12): mdd = חֲבִיב"),
    (W + alt("גד", "גדי", "הגדי", "גדיים", "גדיה") + E, r"\bgd\b|gdy|gdm", "גַּד (coriander) only for gd [cognate] (Ex 16:31): the 'kid' reading of KTU 1.23:14 is rejected"),
    (W + alt("אור", "האור", "אורו", "אורה", "אורות", "מאור", "מאורות", "המאור") + E, r"\bar\b|\bir\b|ảr|\bủr\b|ỉr|ảr|nyr|\bnr\b", "אוֹר only for ar 'light' [cognate] (Gen 1:3): nrt = נֵר; מָאוֹר never (Gen 1:14–16)"),
    (W + alt("חושך", "חשך", "החושך", "חשכה", "חשיכה", "חשכת") + E, r"ḥšk|ẓlm|ġlm", "חֹשֶׁךְ only for ḥšk / ẓlm (Gen 1:2)"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line; licensing regex on the licence text: if it matches, the unvocalized string is an error;
# None = always), why. Renderings §5.3 "Always vocalized".
TRAPS = [
    (RW + r"מות" + RE_, r"\bmt\b|mt\b", "Mot must be vocalized מוֹת (unvocalized: 'death / die'); the noun 'death' מָוֶת"),
    (RW + r"(?:אלים|אלי|אלה|אלת|אלתו|אלתי)" + RE_, None, "'gods' / 'god of' / 'goddess' must be vocalized אֵלִים / אֵלֵי / אֵלָה / אֵלַת (unvocalized: 'violent', 'to me', 'these', 'oath')"),
    (RW + r"(?:ירח)" + RE_, r"yrḫ", "Yarikh / the moon must be vocalized יָרִחַ (the god) / יָרֵחַ (the moon) / יֶרַח (month)"),
    (RW + r"(?:ניכל|נכל)" + RE_, r"nkl", "Nikkal must be vocalized נִכַּל ('deceit')"),
    (RW + r"(?:שלם)" + RE_, r"šlm", "Šalim must be vocalized שָׁלֵם (unvocalized: 'whole', 'paid'); peace = שָׁלוֹם"),
    (RW + r"(?:טלי|טליי)" + RE_, r"ṭly", "Tallay must be vocalized טַלַּי ('my dew', 'lamb')"),
    (RW + r"(?:ארצי)" + RE_, r"arṣy", "Arṣay must be vocalized אַרְצַי ('my land')"),
    (RW + r"(?:פדרי)" + RE_, r"pdry", "Pidray must be vocalized פִּדְרַי"),
    (RW + r"(?:דגן)" + RE_, r"dgn", "Dagan / grain must be vocalized דָּגָן"),
    (RW + r"(?:כלה|כלת|כלתו)" + RE_, r"kly|klt|kl\b|kll", "כַּלָּה 'bride' / כִּלָּה 'finished' / כָּלָה 'perished' must be vocalized"),
    (RW + r"(?:מתים|מתי)" + RE_, r"mt|mtm", "men / the dead must be vocalized מְתִים / מֵתִים"),
    (RW + r"(?:ארבה)" + RE_, r"urbt|irby", "the window / the locust must be vocalized אֲרֻבָּה / אַרְבֶּה"),
    (RW + r"(?:חסיס)" + RE_, r"ḫss", "Khasis must be vocalized חַסִּיס"),
    (RW + r"(?:כותר|כותרת|כותרות|הכותרות)" + RE_, r"kṯr", "Kothar / the Kotharot must be vocalized כּוֹתַר / הַכּוֹתָרוֹת ('heading')"),
    (RW + r"(?:רשף)" + RE_, r"ršp", "Resheph must be vocalized רֶשֶׁף ('spark', 'flame')"),
    (RW + r"(?:חורן|חורון)" + RE_, r"ḥrn", "Horon must be vocalized חוֹרָן"),
    (RW + r"(?:ענת)" + RE_, r"ʿnt", "Anat is vocalized עֲנָת at least at its first occurrence in the file (unvocalized: 'she answered'); this check fires only in lines where it is the first"),
    (RW + r"(?:צפון)" + RE_, r"ṣpn", "Mount Ṣapon must be vocalized צָפוֹן (a name, not 'north')"),
    (RW + r"(?:רע|רעי|רעה|רעו)" + RE_, r"ary|ri\b|rʿ|rʿy", "'friend, fellow' must be vocalized רֵעַ / רֵעִי / רֵעֵהוּ ('evil')"),
    (RW + r"(?:אל)" + RE_, r"\bil\b|\bilm\b|\bil\b", None),   # handled by check_el (warning unless no vocalized אֵל)
]

# (regex on the bracket-free source line, regex the bracket-free unvocalized Hebrew must match, what)
FORMULAS = [
    (r"\byšu gh w yṣḥ\b", r"נשא (?:את )?קולו וצוח", "yšu gh w yṣḥ = `נָשָׂא אֶת קוֹלוֹ וְצָוַח:` (§6.1)"),
    (r"\btšu gh w tṣḥ\b", r"נשאה (?:את )?קולה וצוחה", "tšu gh w tṣḥ = `נָשְׂאָה אֶת קוֹלָהּ וְצָוְחָה:` (§6.1)"),
    (r"\btšu ghm w tṣḥ\b", r"נשאו (?:את )?קולם וצוחו", "tšu ghm w tṣḥ(n) = `נָשְׂאוּ אֶת קוֹלָם וְצָוְחוּ:` (§6.1)"),
    (r"\bidk l [ty]tn pnm\b", r"(?:^|\s)אז (?:ל[אה] )?נתנ?[ווה]? ?(?:את )?פני", "idk l ytn/ttn pnm = `אָז נָתַן / נָתְנָה / נָתְנוּ אֶת פְּנֵיהֶם` (§6.2)"),
    (r"\bhbr w ql\b|\byhbr w yql\b|\bthbr w tql\b", r"(?:קד|קדה|קדו|יקוד|תקוד|קודו|קוד|תקודו)(?: |ו)", "hbr w ql = `קָד וְנָפַל` (§6.3)"),
    (r"\b[ty]štḥwy\b|\btštḥwyn\b", r"השתחו", "tštḥwy = `הִשְׁתַּחֲוָה` (§6.3)"),
    (r"\btḥm\b.*\bhwt\b", r"דבר.*אמרת", "tḥm X hwt Y = `דְּבַר X, אִמְרַת Y` (§6.4)"),
    (r"\bw [yt]ʿn\b(?! (?:w )?(?:tph|yph|tphn))", r"וענ[התו]|וענו|ועונ", "w yʿn / w tʿn = `וְעָנָה / וְעָנְתָה` (§6.5; not where *ʿn* is 'look': mark `[סטייה מן הנוסחה]`)"),
    (r"\brkb ʿrpt\b", r"רוכב העננים", "rkb ʿrpt = `רוֹכֵב הָעֲנָנִים` (§6.6)"),
    (r"\baliyn bʿl\b", r"בעל האדיר", "aliyn bʿl = `בַּעַל הָאַדִּיר` (§6.6)"),
    (r"\baliy qrdm\b", r"אדיר הלוחמים", "aliy qrdm = `אַדִּיר הַלּוֹחֲמִים` (§6.6)"),
    (r"\bbtlt ʿnt\b", r"הבתולה ענת", "btlt ʿnt = `הַבְּתוּלָה עֲנָת` (§6.6)"),
    (r"\bybmt limm\b", r"יבמת (?:ה)?לאומים", "ybmt limm = `יְבֶמֶת הַלְּאֻמִּים` (§6.6)"),
    (r"\brbt aṯrt ym\b", r"הגבירה אתירת[ \-־]ים", "rbt aṯrt ym = `הַגְּבִירָה אֲתִירַת־יָם` (§6.6)"),
    (r"\bqnyt ilm\b", r"קונת האלים", "qnyt ilm = `קוֹנַת הָאֵלִים` (§6.6)"),
    (r"\bṯr il ab", r"השור אל[, ]+אבי", "ṯr il abh = `הַשּׁוֹר אֵל, אָבִיו` (§6.6)"),
    (r"\blṭpn il d pid\b", r"האדיב[, ]+אל רחב[ \-־]הלב", "lṭpn il d pid = `הָאָדִיב, אֵל רְחַב־הַלֵּב` (§6.6)"),
    (r"\bzbl ym\b", r"הנסיך ים", "zbl ym = `הַנָּסִיךְ יָם` (§6.6)"),
    (r"\bṯpṭ nhr\b", r"שופט נהר", "ṯpṭ nhr = `שׁוֹפֵט נָהָר` (§6.6)"),
    (r"\bzbl bʿl arṣ\b", r"הנסיך[, ]+בעל הארץ", "zbl bʿl arṣ = `הַנָּסִיךְ, בַּעַל הָאָרֶץ` (§6.6)"),
    (r"\bnrt ilm špš\b", r"נר האלים[, ]+שפש", "nrt ilm špš = `נֵר הָאֵלִים, שַׁפְּשׁ` (§6.6)"),
    (r"\bbn ilm mt\b", r"בן אלים[, ]+מות", "bn ilm mt = `בֶּן אֵלִים, מוֹת` (§6.6)"),
    (r"\bydd il ġzr\b", r"ידיד אל[, ]+הגבור", "ydd il ġzr = `יְדִיד אֵל, הַגִּבּוֹר` (§6.6)"),
    (r"\bmdd il\b", r"חביב אל", "mdd il = `חֲבִיב אֵל` (§6.6)"),
    (r"\bkṯr w ḫss\b", r"כותר[ \-־]וחסיס", "kṯr w ḫss = `כּוֹתַר־וְחַסִּיס` (§6.6)"),
    (r"\bmlak\b|\bmlakm\b", r"מלאכ", "mlak = `מַלְאָךְ` [cognate] (§4.2)"),
    (r"\bmbk nhrm\b", r"נבכי שני הנהרות", "mbk nhrm = `נִבְכֵי שְׁנֵי הַנְּהָרוֹת` (§6.7)"),
    (r"\bapq thmtm\b", r"אפיקי שתי התהומות", "apq thmtm = `אֲפִיקֵי שְׁתֵּי הַתְּהוֹמוֹת` (§6.7)"),
    (r"\bbṯn brḥ\b", r"(?:ה)?פתן (?:ה)?ברח", "bṯn brḥ = `פֶּתֶן בָּרִחַ` (§6.8)"),
    (r"\bbṯn ʿqltn\b", r"(?:ה)?פתן (?:ה)?עקלתון", "bṯn ʿqltn = `פֶּתֶן עֲקַלָּתוֹן` (§6.8)"),
    (r"\bšlyṭ d šbʿt rašm\b", r"(?:ה)?שליט אשר לו שבעה ראשים", "šlyṭ d šbʿt rašm = `הַשַּׁלִּיט אֲשֶׁר לוֹ שִׁבְעָה רָאשִׁים` (§6.8)"),
    (r"\bḥln\b.*\bbhtm\b", r"חלון (?:ב)?בית", "ḥln b bhtm = `חַלּוֹן בַּבַּיִת` (§6.9)"),
    (r"\burbt b qrb hkl", r"ארו?בה בקרב (?:ה)?היכל", "urbt b qrb hklm = `אֲרֻבָּה בְּקֶרֶב הַהֵיכָל` (§6.9)"),
    (r"\bbdqt ʿrpt\b", r"בדק (?:ב)?ענני?ם?|בדק בעננים", "bdqt ʿrpt = `בֶּדֶק בָּעֲנָנִים` (§6.9)"),
]

# fixed lines are read from renderings.md §7 (table: | KEY label(s) | source | Hebrew |)


def fixed_lines():
    p = os.path.join(HERE, "renderings.md")
    out = {}
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 7.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Lines"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        heb = cells[2].strip("`").strip()
        for lab in re.split(r";\s*", cells[0]):
            m = re.match(r"^(1\.\d+) (\S+)$", lab.strip())
            if m:
                out[(m.group(1), m.group(2))] = (cells[1].strip("`"), heb)
    return out


def lic(rx, key, lab):
    return rx is None or re.search(rx, license_text(key, lab), re.I) is not None


def check_line(key, lab, heb, body, fixed, first_names, out):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    src = plain_src((row(key, lab) or {}).get("text", ""))
    for rx, allow, why in RESERVED:
        if re.search(rx, plain) and not (allow and lic(allow, key, lab)):
            out.append(f"RESERVED {key} {lab}: {why}\n    {heb}\n    src: {src}")
            bad += 1
    for rx, cond, why in TRAPS:
        if why is None:
            continue
        if "first occurrence" in why:
            if lab != first_names.get("ʿnt"):
                continue
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    # El: a line whose source has il / ilm must show a vocalized אֵל form somewhere
    if re.search(r"\bil\b|\bilm\b|\bilh\b|\bilhm\b", src) and not re.search(r"אֵ", heb) and re.search(r"(?<![א-ת])[ובלהכש]?אל(?:ים|י)?(?![א-ת֑-ׇ])", heb):
        out.append(f"UNVOCALIZED {key} {lab}: El / the gods: the source has il(m), the Hebrew no vocalized אֵל / אֵלִים\n    {heb}")
        bad += 1
    for srx, hrx, what in FORMULAS:
        if re.search(srx, src) and not re.search(hrx, nopunct(plain)):
            if "[סטייה מן הנוסחה" in body:
                continue
            out.append(f"FORMULA {key} {lab}: {what}\n    {heb}\n    src: {src}")
            bad += 1
    if (key, lab) in fixed:
        fh = fixed[(key, lab)][1]
        if nopunct(strip_marks(fh)) != nopunct(plain) and "[סטייה מן הקבוע" not in body:
            out.append(f"FIXED {key} {lab}: differs from renderings §7\n    fixed: {fh}\n    here:  {heb}")
            bad += 1
    return bad


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
    fixed = fixed_lines()
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
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in CUC: {extra}")
            bad += 1
        if [x for x in seq if x in ordr] != [x for x in ordr if x in heb]:
            print(f"{key}: entries out of CUC order")
            bad += 1
        first_names = {}
        for k in seq:
            if "ʿnt" not in first_names and re.search(r"\bʿnt\b", plain_src((row(key, k) or {}).get("text", ""))):
                first_names["ʿnt"] = k
        msgs = []
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
                print(f"{key} {k}: source line differs from CUC\n    A: {s}\n    C: `{r['text']}`")
                bad += 1
            bad += check_line(key, k, heb[k], body.get(k, ""), fixed, first_names, msgs)
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
        print(f"{key}: {len(seq)} annotated entries (CUC {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    # repeated lines across the corpus
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = plain_src(r["text"])
            if nk and len(nk.split()) >= 3 and "x" not in nk.split():
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical bracket-free source) with different Hebrew (justify in the apparatus or fix):")
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


# ---------------------------------------------------------------- data, fill, pars, lex, grep
def _similar(key, lab, nk, corpus, allh, fixed, thr=0.75):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            r = 1.0
        elif len(nk.split()) >= 3 and abs(len(n2) - len(nk)) < 0.5 * len(nk):
            r = difflib.SequenceMatcher(None, nk, n2).ratio()
            if r < thr:
                continue
        else:
            continue
        h = allh.get(k2, {}).get(l2) or (fixed.get((k2, l2)) or (None, None))[1] or "(not yet drafted)"
        out.append((r, k2, l2, n2, h))
    out.sort(key=lambda x: -x[0])
    return out


def _corpus():
    return [(k2, r["label"], plain_src(r["text"])) for k2 in UNITS for r in rows(k2)]


def cmd_units():
    for k, (p, t) in UNITS.items():
        print(f"{k}\t{p}\t{len(rows(k))} lines\t{t}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def cmd_data(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    corpus = _corpus()
    allh = all_hebrew()
    fixed = fixed_lines()
    print(f"# KTU {key}: line data ({labs[i]}–{labs[j]}), from CUC v{cuc2md.TF_VERSION} (machine parses: check every one)\n")
    for r in rs[i:j + 1]:
        print(f"### {r['label']}" + (f"   ({r['side']})" if r.get("side") else ""))
        print(f"`{r['text']}`" + ("   (the sentence runs on into the next line)" if r.get("cont") else ""))
        for p in cuc2md._merge(r["parse"]):
            print(f"- {cuc2md._fmt_parse(p)}")
        if r.get("reviewed"):
            print("- reviewed (CUC):")
            for p in cuc2md._merge(r["reviewed"]):
                print(f"  - {cuc2md._fmt_parse(p)}")
        if (key, r["label"]) in fixed:
            print(f"- FIXED (renderings §7): {fixed[(key, r['label'])][1]}")
        nk = plain_src(r["text"])
        if nk and len(nk.split()) >= 2:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh, fixed)[:6]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} `{n2}` → {h}")
        print()


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-(1\.\d+)\.rtl\.md$", path)
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
                print(f"no CUC line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


def cmd_pars(key):
    allh = all_hebrew()
    fixed = fixed_lines()
    corpus = _corpus()
    print(f"# Repeated / parallel lines of KTU {key}\n\nHebrew from an annotated file if drafted, else renderings §7.\n")
    for r in rows(key):
        nk = plain_src(r["text"])
        out = []
        if (key, r["label"]) in fixed:
            out.append(f"  - FIXED (renderings §7): {fixed[(key, r['label'])][1]}")
        if nk and len(nk.split()) >= 2:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh, fixed):
                out.append(f"  - {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} `{n2}`\n      Hebrew: {h}")
        if out:
            print(f"- **{r['label']}** `{r['text']}`")
            print("\n".join(out))


def cmd_lex(pat):
    rx = re.compile(pat, re.I)
    allh = all_hebrew()
    for k in UNITS:
        for r in rows(k):
            lt = license_text(k, r["label"])
            if rx.search(r["text"]) or rx.search(lt):
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: `{r['text']}`\n    {h or '(not yet drafted)'}")


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


def cmd_dulat(pat):
    p = os.path.join(CUC_DIR, "lexicon_and_grammar", "ugaritic_lexicon.txt")
    rx = re.compile(pat)
    for l in open(p, encoding="utf-8"):
        if l.startswith("#"):
            continue
        c = (l.rstrip("\n").split("\t") + [""] * 7)[:7]
        if rx.search(c[0]) or rx.search(c[1]) or rx.search(c[5]):
            print(f"{c[1]}\tDULAT p. {c[2]}\t{c[3]} {c[4]}\t{c[5]}")


def cmd_gates():
    print("RESERVED (Hebrew regex | licensed by | why):")
    for rx, allow, why in RESERVED:
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why})")
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for s, h, w in FORMULAS:
        print(f"  {s}  →  {h}   ({w})")


def cmd_selftest():
    """Run the gates on the test lines of renderings.md §9: | KEY label | expect (ok/err) | Hebrew |."""
    p = os.path.join(HERE, "renderings.md")
    insec, n, fails = False, 0, 0
    fixed = fixed_lines()
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 9.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Line"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        m = re.match(r"^(1\.\d+) (\S+)$", cells[0])
        if not m:
            continue
        key, lab = m.groups()
        heb = cells[2].strip("`")
        msgs = []
        b = check_line(key, lab, heb, "", fixed, {"ʿnt": lab}, msgs)
        got = "err" if b else "ok"
        n += 1
        if got != cells[1]:
            fails += 1
            print(f"SELFTEST FAIL {key} {lab}: expected {cells[1]}, got {got}\n    {heb}")
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


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../ugarit_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../ugarit_tools.py build\n-->\n\n")


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
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build_project(proj, keys):
    pdir = os.path.join(HERE, proj)
    hp = os.path.join(pdir, "translation--head.rtl.md")
    head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {PROJECT_TITLES[proj]}"
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
    print(f"{proj}/translation.rtl.md: {', '.join(keys)}")


def build(keys=None):
    pk = [k for k in present_keys() if not keys or k in keys]
    for k in pk:
        build_one(k)
    bad = 0
    for proj in (P1, P2):
        ks = [k for k in present_keys() if UNITS[k][0] == proj]
        if not ks:
            continue
        build_project(proj, ks)
        p = os.path.join(HERE, proj, "translation.rtl.md")
        comb = [l for l in open(p, encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        srcl = []
        for k in ks:
            srcl += [re.sub(r"\[\^([^\]]+)\]", lambda m, k=k: f"[^{k}-{m.group(1)}]", l)
                     for l in open(translation_path(k), encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        if comb != srcl:
            print(f"{proj}: combined numbered lines differ from the per-file translations")
            bad += 1
        txt = open(p, encoding="utf-8").read()
        refs = re.findall(r"\[\^([^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^([^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(f"{proj}: footnote mismatch ({len(refs)} refs, {len(defs)} defs)")
            bad += 1
    ok = verify(present_keys())
    return ok and bad == 0


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
    if cmd == "pars" and rest:
        return cmd_pars(rest[0])
    if cmd == "lex" and rest:
        return cmd_lex(rest[0])
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build(rest) else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "dulat" and rest:
        return cmd_dulat(rest[0])
    if cmd == "gates":
        return cmd_gates()
    if cmd == "selftest":
        sys.exit(0 if cmd_selftest() else 1)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

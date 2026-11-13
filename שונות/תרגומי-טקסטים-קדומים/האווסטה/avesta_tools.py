"""Tools of the Avestan corpus (`האווסטה/`). Run with python3 -I -B from any folder.

    python3 -I -B avesta_tools.py convert                 (re)build the line data from the raw sources (the CAB XML;
                                                          TITUS for Y 27.13–15) into ../sources/CAB/old_avestan.tsv
    python3 -I -B avesta_tools.py units                   the texts (KEYs), their project folder and line counts
    python3 -I -B avesta_tools.py skeleton KEY            write <project>/annotated-<KEY>.rtl.md as an empty skeleton
                                                          (`### <label>`, `@`, `> ` – only if the file does not exist)
    python3 -I -B avesta_tools.py data KEY [FROM [TO]]    a translator's line data: each base line, the names of the
                                                          line with their fixed Hebrew (renderings §3), the key terms
                                                          and formulas that apply (§5, §8), and the corpus lines that
                                                          repeat it, with their Hebrew
    python3 -I -B avesta_tools.py pd KEY STANZA           the public-domain translations of a stanza (Mills 1887;
                                                          Moulton 1913 for the Gāthās) – AFTER drafting, rank 5
    python3 -I -B avesta_tools.py fill FILE…              replace every `@` under a `### <label>` by the exact base line
    python3 -I -B avesta_tools.py ave FORM                the CAB Avestan dictionary: a form's analyses (online)
    python3 -I -B avesta_tools.py avelemma LEMMA          the CAB glossary + Bartholomae's lemma for a lemma (online)
    python3 -I -B avesta_tools.py aiw WORD                Bartholomae's Altiranisches Wörterbuch (1904, local OCR):
                                                          the entries whose headword starts with WORD
    python3 -I -B avesta_tools.py lexmap ['<regex>']      Hebrew ↔ lemma, from the פירוק bullets of every drafted file
    python3 -I -B avesta_tools.py verify [KEY…] [--strict]
    python3 -I -B avesta_tools.py build [KEY…]            translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B avesta_tools.py grep '<regex>' [--all]  the unvocalized `>` lines of this corpus (--all: every corpus)
    python3 -I -B avesta_tools.py gates                   the reserved words, traps, formulas and names
    python3 -I -B avesta_tools.py selftest                run the checks on the test lines of renderings.md §10

KEYs: Y28 … Y34, Y43 … Y51, Y53 (the Gāthās, one per Yasna chapter; project 1), YH (the Yasna Haptaŋhāiti, Y 35.2–41.6;
project 2), PR (the four prayers: Y 27.13–15, 54.1; project 3). Labels: Geldner's chapter.stanza + the line letter in
the base ("28.1a", "35.2c", "27.13b"). Annotated file: <project>/annotated-<KEY>.rtl.md.

Base (../sources/): CAB/old_avestan.tsv (local; the CAB XML's verse lines, the liturgical repetitions and the Middle
Persian headings and rubrics dropped: see ../sources/CAB/README.md), made by `convert` from CAB/cab_corpus.xml and
TITUS/avest028.htm (Y 27.13–15, Geldner's text in TITUS's Humbach line division).

The cousin corpus: `../הוודה-והאווסטה/` (its renderings bind this corpus for every Vedic cognate, guidelines §6.7);
read its Hebrew with `python3 -I -B ../הוודה-והאווסטה/vedic_tools.py lexmap '<lemma>'` / `grep '<hebrew>'` (read only).

verify checks, per file: (1) every entry `### <label>` has exactly one `> ` line, in the base's order (a placeholder
`<!-- טרם תורגם: … -->` makes missing lines a note unless --strict); (2) the backticked line equals the base line;
(3) translation-<KEY>.rtl.md equals the `>` lines; (4) RESERVED Hebrew strings need a licence in the folded source;
(5) NAMES (renderings §3) and the first occurrence vocalized; (6) TRAPS; (7) FORMULAS (renderings §8); (8) repeated
lines with different Hebrew are listed. Escapes: `[סטייה מן הנוסחה: <reason>]`, `[היתר שם: <name>]`, `[היתר שער: <word>]`.
"""
import difflib
import glob
import json
import os
import re
import sys
import unicodedata
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
SRC = os.path.join(ROOT, "sources")
NIQ = "֑-ֽֿ-ׇ"
BASE = os.path.join(SRC, "CAB", "old_avestan.tsv")

P1 = "1-הגאתות"
P2 = "2-יסנה-הפטנגהאיתי"
P3 = "3-ארבע-התפילות"
PROJECT_TITLES = {P1: "הגָאתוֹת של זָרָתוּשְׁטְרָה", P2: "יַסְנָה הַפְּטַנְגְהָאִיתִי – הפולחן בשבעה פרקים",
                  P3: "ארבע התפילות הקדושות"}

GATHA_LAST = {28: 11, 29: 11, 30: 11, 31: 22, 32: 16, 33: 14, 34: 15, 43: 16, 44: 20, 45: 11, 46: 19, 47: 6, 48: 12,
              49: 12, 50: 11, 51: 22, 53: 9}
GATHA_NAME = {28: "אַהוּנַוַויתִי", 43: "אוּשְׁטַוַויתִי", 47: "סְפֶּנְטָא־מַיְנְיוּ", 51: "ווֹהוּ־חְשַׁתְרָא",
              53: "וַהִישְׁטוֹאִישְׁטִי"}
UNITS = {}
for _c in GATHA_LAST:
    UNITS[f"Y{_c}"] = (P1, f"יסנה {_c}", "gatha", (_c,))
UNITS["YH"] = (P2, "יסנה 35–41: הפולחן בשבעה פרקים", "yh", (35, 41))
UNITS["PR"] = (P3, "ארבע התפילות: אַהוּנָה וַאִירְיָה, אַשֶׁם ווֹהוּ, יֶנְגְהֵה הָאתָם, אַאִירְיֶמָה אִישְׁיוֹ", "pr", ())


# ---------------------------------------------------------------- folding (licences, repeated lines)
FOLD = {"ə": "e", "ϑ": "th", "β": "b", "γ": "g", "δ": "d", "ŋ": "ng", "ɱ": "m", "ᵛ": "v", "x": "x", "ʰ": "h",
        "ś": "s", "ṣ": "s", "š": "s", "ž": "z", "č": "c", "ṇ": "n", "ñ": "n", "ṅ": "n", "ń": "n", "ṃ": "m", "ṁ": "m",
        "ḥ": "h", "ṭ": "t", "ḍ": "d", "ḷ": "l", "ṛ": "r", "ṝ": "r", "ą": "a", "ē": "e", "ō": "o", "ī": "i",
        "ū": "u", "ā": "a", "ẏ": "y", "t̰": "t", "ḿ": "m", "ý": "y", "x́": "x"}


def fold(s):
    """Transliteration → lower-case ASCII letters with single spaces (diacritics, the CAB word dots, ⁺ † and
    punctuation dropped; ϑ = th, ə = e, ŋ = ng, š = s …). The licence and repeated-line text."""
    s = unicodedata.normalize("NFC", s.lower())
    s = s.replace("r̥", "r").replace("l̥", "l").replace("̰", "")
    s = "".join(FOLD.get(c, c) for c in s)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-z\s]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def fold_lemma(s):
    return fold(re.sub(r"[√\-\d]", "", s or ""))


# ---------------------------------------------------------------- converter (CAB XML + TITUS → TSV)
XID = "{http://www.w3.org/XML/1998/namespace}id"


def _text(el):
    """The text of an element without its <note> children (the liturgical rubrics), whitespace collapsed."""
    parts = [el.text or ""]
    for ch in el:
        if not ch.tag.endswith("note"):
            parts.append(_text(ch))
        parts.append(ch.tail or "")
    return " ".join("".join(parts).split())


def _stanza_lines(div):
    out = []
    for ab in div:
        if not ab.tag.endswith("ab") or (ab.get(XID) or "").startswith("Head"):
            continue
        ls = [l for l in ab.iter() if l.tag.endswith("}l") or l.tag == "l"]
        if ls:
            out += [_text(l) for l in ls]
        else:
            out.append(_text(ab))
    return [x for x in out if x]


def _dedupe(lines):
    """Drop the liturgical repetitions inside a stanza: a line equal to an earlier line, or equal to a run of
    earlier lines written out as one."""
    kept = []
    for l in lines:
        f = fold(l)
        if any(fold(k) == f for k in kept):
            continue
        runs = set()
        for i in range(len(kept)):
            for j in range(i + 2, len(kept) + 1):
                runs.add(fold(" ".join(kept[i:j])))
        if f in runs:
            continue
        kept.append(l)
    return kept


def _in_scope(c, g):
    if c in GATHA_LAST:
        return 1 <= g <= GATHA_LAST[c], f"Y{c}"
    if 35 <= c <= 41:
        return (c, g) >= (35, 2) and (c, g) <= (41, 6), "YH"
    if c == 54:
        return g == 1, "PR"
    return False, None


def convert_titus_prayers():
    """Y 27.13–15 from TITUS (Geldner's text, Humbach's line division): the main lines of each paragraph (27.15: the
    prayer's lines c–e only; its a–b are the Young Avestan formula before it). TITUS's letters are kept."""
    import html as _h
    t = open(os.path.join(SRC, "TITUS", "avest028.htm"), encoding="utf-8", errors="replace").read()
    s = _h.unescape(re.sub(r"<[^>]+>", " ", t))
    rows_ = []
    for para in (13, 14, 15):
        i = s.find(f"Paragraph: {para} ")
        j = s.find("Paragraph:", i + 12)
        seg = s[i:j if j > 0 else len(s)]
        for m in re.finditer(r"Verse: ([a-e])\s+(.*?)(?=\n)", seg):
            if para == 15 and m.group(1) in "ab":
                continue                                     # Young Avestan: "we worship the Ahuna Vairya …"
            line = m.group(2)
            line = re.sub(r"\([^)]*\)", " ", line)          # rubrics (čihār bār …)
            line = line.replace("::", " ")
            line = re.sub(r"(?<!\S)\d+(?!\S)", " ", line)    # TITUS's footnote numbers
            line = " ".join(line.split())
            line = re.sub(r" \. ?", ". ", line).strip()
            line = re.sub(r" ?̊ ?", "̊", line)
            if not line.endswith("."):
                line += "."
            rows_.append(("PR", f"27.{para}{m.group(1)}", line, "TITUS"))
    return rows_


def cmd_convert():
    root = ET.parse(os.path.join(SRC, "CAB", "cab_corpus.xml")).getroot()
    out = convert_titus_prayers()
    seen = set()
    for div in root.iter():
        if not div.tag.endswith("div"):
            continue
        m = re.match(r"^Y(\d+)\.\d+$", div.get(XID) or "")
        g = re.match(r"^#GY(\d+)\.(\d+)$", div.get("corresp") or "")
        if not m or not g:
            continue
        c, n = int(g.group(1)), int(g.group(2))
        ok, key = _in_scope(c, n)
        if not ok or (c, n) in seen:
            continue
        seen.add((c, n))
        lines = _dedupe(_stanza_lines(div))
        for i, l in enumerate(lines):
            out.append((key, f"{c}.{n}{'abcdefghij'[i]}", l, "CAB"))
    order_ = {k: i for i, k in enumerate(UNITS)}
    out.sort(key=lambda r: (order_[r[0]],) + tuple(int(x) for x in re.findall(r"\d+", r[1])) + (r[1][-1],))
    with open(BASE, "w", encoding="utf-8") as fh:
        fh.write("# The Old Avestan corpus: key, label (Geldner's chapter.stanza + line letter), the base line, source.\n"
                 "# Made by האווסטה/avesta_tools.py convert from CAB/cab_corpus.xml (CAB's verse lines; the liturgical\n"
                 "# repetitions, the Middle Persian headings and the rubrics dropped) and TITUS/avest028.htm (Y 27.13-15).\n"
                 "# Local only (CAB: licence 'CC' without a version; TITUS forbids republication).\n")
        for r in out:
            fh.write("\t".join(r) + "\n")
    cnt = {}
    for r in out:
        cnt[r[0]] = cnt.get(r[0], 0) + 1
    for k in UNITS:
        print(f"{k}: {cnt.get(k, 0)} lines")
    print(f"total: {len(out)} lines")


# ---------------------------------------------------------------- base texts
_DATA = {}


def _all_rows():
    if "_all" not in _DATA:
        rs = []
        if os.path.exists(BASE):
            for ln in open(BASE, encoding="utf-8"):
                if ln.startswith("#") or not ln.strip():
                    continue
                c = ln.rstrip("\n").split("\t")
                rs.append({"key": c[0], "label": c[1], "text": c[2], "src": c[3] if len(c) > 3 else "", "words": []})
        _DATA["_all"] = rs
    return _DATA["_all"]


def rows(key):
    if key not in _DATA:
        _DATA[key] = [r for r in _all_rows() if r["key"] == key]
    return _DATA[key]


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
    t = fold(r["text"])
    extra = ""
    if i > 0 and fold(rs[i - 1]["text"]).split():
        extra += " " + fold(rs[i - 1]["text"]).split()[-1]
    if i + 1 < len(rs) and fold(rs[i + 1]["text"]).split():
        extra += " " + fold(rs[i + 1]["text"]).split()[0]
    return f" {t} |{extra} "


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, UNITS[key][0], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, UNITS[key][0], f"translation-{key}.rtl.md")


def read_annotated(key, path=None):
    """({label: hebrew}, label sequence, {label: source line}, {label: entry text}, problems) or None."""
    p = path or annotated_path(key)
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
W = r"(?<![א-ת])ו?(?:ש|כש)?[בלהמכ]?"     # optional prefixes at a word start (never a class that swallows the root)
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licence regex on the folded licence text or None = never, why)
RESERVED = [
    # --- never (renderings §7.1): the Hebrew Bible's words that no Old Avestan word licenses ---
    (W + alt("אלוהים", "אלהים", "אלהי", "אלוהיו", "אלוהינו", "אלוהיך") + E, None, "daēuua = אֵל, the daēuuas = אֵלִים (the cousin corpus): אֱלֹהִים never"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראת", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "יברא", "בראם", "בוראו", "בריאתו", "הבריאה", "בריות", "בריה", "הבריות") + E, None, "the root ברא never (dā- = שָׂם / נָתַן, dātar = מַעֲמִיד; taš- = חִשֵּׁל; Isa 45:7 in the apparatus)"),
    (W + alt("יצר", "יוצר", "ייצר", "יצרו", "יצרני", "יצרת", "יצירה", "יצירת", "היוצר", "ויצר") + E, None, "the root יצר never (Gen 2:7; tašan = מְחַשֵּׁל, the cognate of Vedic √takṣ)"),
    (W + alt("תהום", "תהומות", "התהום", "תהו", "ותהו", "בהו", "ובהו", "רקיע", "הרקיע") + E, None, "תְּהוֹם / תֹּהוּ / בֹּהוּ / רָקִיעַ never"),
    (W + alt("ראשית", "בראשית", "מראשית", "ראשיתו", "ראשיתם") + E, None, "רֵאשִׁית never: paōuruiia = רִאשׁוֹן, the first existence = הַקִּיּוּם הָרִאשׁוֹן"),
    (W + alt("מבול", "תבה", "תיבה", "תנין", "לויתן", "רהב") + E, None, "the flood and the sea-monster words never"),
    (W + alt("שאול", "שאולה", "לשאול", "גיהנום", "גהנום", "גיהנם", "עדן", "פרדס") + E, None, "שְׁאוֹל / גֵּיהִנֹּם / עֵדֶן / פַּרְדֵּס never: the drūjō dəmāna = בֵּית הַשֶּׁקֶר, the garō dəmāna = בֵּית הַשֶּׁבַח (in the source's own words)"),
    (W + alt("משיח", "המשיח", "משיחו", "מושיע", "המושיע", "מושיעים", "גואל", "הגואל", "גאולה") + E, None, "מָשִׁיחַ / מוֹשִׁיעַ / גּוֹאֵל never: saōšiiaṇt = הָעָתִיד לְהוֹעִיל (the hope of a saviour is a finding of the apparatus)"),
    (W + alt("תחיה", "תחיית", "תחית") + E, None, "תְּחִיָּה never (the resurrection of the dead is Young Avestan; Dan 12:2 in the apparatus)"),
    (W + alt("שטן", "השטן", "שטנו") + E, None, "שָׂטָן never: aŋra mainiiu = הָרוּחַ הַמַּזִּיקָה (the cousin corpus)"),
    (W + alt("מלאך", "המלאך", "מלאכים", "המלאכים", "מלאכי", "מלאכיו") + E, None, "מַלְאָךְ never: dūta = שָׁלִיחַ"),
    (W + alt("קדוש", "קדושה", "קדושים", "הקדוש", "הקדושה", "קודש", "הקודש", "קדש", "קידש", "מקדש", "המקדש", "קדשו", "קדושת") + E, None, "the root קדש never: spəṇta = נָדִיב (the cousin corpus), yesńiia = רָאוּי לַזֶּבַח (Ps 51:13's רוּחַ קָדְשְׁךָ in the apparatus)"),
    (W + alt("צדק", "צדיק", "צדיקים", "הצדיק", "הצדיקים", "צדקה", "הצדק", "צדקת", "צדקו") + E, None, "the root צדק never: aša = סֵדֶר, aṣ̌auuan = נֶאֱמַן הַסֵּדֶר (the cousin corpus)"),
    (W + alt("רשע", "רשעים", "הרשע", "הרשעים", "רשעה", "ברשע") + E, None, "the root רשע never: drəguuant = בַּעַל הַשֶּׁקֶר"),
    (W + alt("כבוד", "הכבוד", "כבודו", "כבודך") + E, None, "כָּבוֹד never"),
    (W + alt("קץ", "הקץ", "קיצו", "לקץ") + E, None, "קֵץ never: urvaēsa = מִפְנֶה (Dan 12 in the apparatus)"),
    (W + alt("עולה", "העולה", "עולות", "קרבן", "קורבן", "הקרבן", "מזבח", "המזבח", "ניחוח") + E, None, "the Temple's offering words never: yasna = זֶבַח (the cousin corpus), zaōθra = נֶסֶךְ"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות", "הנשמה", "נשמתי") + E, None, "נְשָׁמָה never: uruuan = נֶפֶשׁ"),
    (W + alt("תורה", "התורה", "תורת", "תורתו", "תורתי") + E, None, "תּוֹרָה never: dāta = דָּת, sə̄ṇgha = הוֹרָאָה, mąθra = מַנְתְּרָה"),
    (W + alt("צלם", "בצלם", "צלמו", "בצלמו", "דמות", "בדמות", "כדמות", "דמותו") + E, None, "צֶלֶם / דְּמוּת never: kəhrp = צוּרָה, tanū = גּוּף"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "וישבות") + E, None, "the root שבת never"),
    (r"(?<![א-ת])ו?(?:נח|נוח|ינוח|לנוח)(?![א-ת])", None, "נָח never (the string of Noah)"),
    (W + alt("משכן", "המשכן", "משכנות", "משכנו", "משכנותיו", "במשכן", "במשכנות", "למשכן") + E, None, "מִשְׁכָּן never (the Tabernacle): a dwelling = מָעוֹן"),
    (W + alt("חסד", "החסד", "חסדו", "חסדך", "בחסד", "חסדים", "בחסדו", "חסדיך") + E, None, "חֶסֶד never (no Old Avestan counterpart: yāna = חֶסֶד? → טוֹבָה / חֵן by sense)"),
    (W + alt("אשרי", "אשריו", "אשרינו", "אשריך", "אשריהם") + E, None, "אַשְׁרֵי never: uštā = רָצוֹן / כִּרְצוֹן (Ps 1:1 in the apparatus)"),
    # --- only for their source counterpart (renderings §7.2) ---
    (W + alt("רוח", "רוחות", "הרוח", "הרוחות", "רוחו", "ברוח", "רוחי", "לרוח", "שהרוח", "רוחך") + E, r"mainii|mainy|maini|manii|maniu|vat|vaii|vay", "רוּחַ only for mainiiu (and vāta / vaiiu, the wind)"),
    (W + alt("חושך", "חשך", "החושך", "החשך", "חשכה", "חשיכה", "בחושך", "בחשך", "מחושך") + E, r"tem|tqm|tam", "חֹשֶׁךְ only for təmah (Vedic támas: the cousin corpus)"),
    (W + alt("אור", "האור", "אורות", "האורות", "באור", "לאור", "מאור", "אורו", "אורם") + E, r"raoc|raok|rao|ruc|bami|bama|xvar|huuar|hvar|suc|aoc", "אוֹר only for raōcah / its kin (Gen 1:3–5, Isa 45:7 in the apparatus)"),
    (W + alt("זרע", "הזרע", "זרעו", "זרעים", "זרעה", "זרעם", "לזרע", "מזרע") + E, r"taox|tauxm|ciϑr|cithr|ciθr", "זֶרַע only for taoxman (the cousin corpus) / ciϑra 'seed, lineage'"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "הטוב", "הטובה", "הטובים", "הטובות", "טובו", "טובת", "מיטב", "היטיב", "וטוב", "בטוב", "שטוב", "כטוב", "בטובה") + E,
     r"vohu|vanh|vaŋh|vahis|vahi|vohv|vahy|vax|vang|\bhu|srir|sraes|srest|vah|hv", "טוֹב only for vohu / vaŋhu / vahiiah / vahišta / hu- (the cousin corpus)"),
    (W + alt("ברך", "בירך", "ברכה", "ברכת", "מבורך", "יברך", "ברוך", "ברכו", "ברכם", "ברכות", "ברכתי") + E, r"(?!)", "the root ברך never (no Old Avestan counterpart: āfrī- / āšī- by sense); `בֶּרֶךְ` 'knee' needs a [היתר שער]"),
    (W + alt("ארור", "ארורה", "ארר", "אורר", "מארה", "ארורים") + E, None, "the root ארר never"),
    (W + alt("אמת", "האמת", "אמתו", "אמיתי", "באמת", "אמיתית") + E, r"haith|haiϑ|hai|arez|erez|ered|arsh|ars", "אֱמֶת only for haiϑiia (Vedic satyá: the cousin corpus) and ərəš 'truly'"),
    (W + alt("שקר", "השקר", "שקרים", "השקרים", "בשקר", "לשקר", "שקרו", "משקר", "המשקר") + E, r"druj|druz|druxs|drug|draog|drao|dreg|drig|druu", "שֶׁקֶר only for druj / draōga (Vedic druh: the cousin corpus)"),
    (W + alt("סדר", "הסדר", "בסדר", "לסדר", "סדרו", "מסדר", "וסדר", "שבסדר") + E, r"as|ara|ere|erer", "סֵדֶר only for aša (and its compounds; Vedic r̥tá: the cousin corpus)"),
    (W + alt("נדיב", "הנדיב", "הנדיבה", "נדיבה", "נדיבים", "הנדיבים", "נדיבות", "הנדיבות") + E, r"spen|span|spe", "נָדִיב only for spəṇta / spə̄ništa (the cousin corpus)"),
    (W + alt("גשר", "הגשר", "בגשר", "לגשר", "גשרו") + E, r"peret|perat|pere", "גֶּשֶׁר only for pərətu"),
    (W + alt("דת", "הדת", "דתו", "דתי", "דתות", "בדת", "כדת", "דתם") + E, r"dat|dad", "דָּת only for dāta 'law' (the Hebrew loanword from Old Persian dāta: [cognate]; daēnā = הַשְׁקָפָה)"),
    (W + alt("זבח", "זובח", "זובחים", "זבחו", "לזבוח", "זבחנו", "הזבח", "בזבח", "זבחים", "ובזבח", "בזבחים", "זבחי", "נזבח", "זבחה", "זבחך", "זבחיכם") + E, r"yas|yaz|yez|ies|yes|ijy|iiaz|ijii", "the root זבח only for yaz- / yasna / yesńiia (Vedic √yaj / yajñá: the cousin corpus)"),
    (W + alt("נפש", "הנפש", "נפשו", "נפשי", "נפשות", "נפשם", "נפשך", "בנפש", "לנפש", "ונפש") + E, r"uruu|urva|urun|uruua|uruuan|uruuq", "נֶפֶשׁ only for uruuan"),
    (W + alt("אש", "האש", "באש", "לאש", "אשך", "ואש", "אשו", "מאש") + E, r"ata|atr|ater|aϑr|athr|athro", "אֵשׁ only for ātar"),
    (W + alt("שכר", "השכר", "שכרו", "שכרם", "שכרך", "בשכר", "לשכר") + E, r"mizd|mizh|mizda|mizdem|mizdai", "שָׂכָר only for mīžda (Vedic mīḍhá)"),
    (W + alt("פרה", "הפרה", "פרות", "הפרות", "לפרה", "בפרה", "הבקר", "בקר", "לבקר") + E, r"gav|geu|gao|gau|go|gam|gai|ga|azi|vastr|pasu|staor", "פָּרָה / בָּקָר only for gav (and the cattle words by sense)"),
    (W + alt("חי", "חיה", "חיים", "החיים", "חית", "חיות", "חייו", "חייה") + E, r"daitik|jiia|jiu|jva|gaiia|gaii|gaya|gaeth|gaet|ji|juu|jy|uštan|ustan|ust|gay|gae|ahu", "חַי / חַיִּים only for jīuua / gaiia / uštāna / gaēϑā"),
    (W + alt("מות", "מותו", "ימות", "מתים") + E, r"mer|mar|mere|mere|merat|mareθ|mareϑ|meres|ameret|amere", "the root מות only for mar- / mərəϑiiu / amərətāt (the 'deathlessness')"),
    (W + alt("עולם", "העולם", "לעולם", "עולמים", "לעולמים", "עולמו") + E, r"(?!)", "עוֹלָם never (ahu = הַקִּיּוּם; yauua = עַד, vīspāi yauuē = לְכָל הָעִדָּן)"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line, condition regex on the licence text: if it matches, the unvocalized string is an error; why)
TRAPS = [
    (RW + r"(?:אשך|אשכם)" + RE_, r"ath|atar|atr", "ātar + 'your': אִשְּׁךָ always vocalized (unvocalized 'testicle')"),
    (RW + r"(?:רע|רעים|רעי|לרע|כרע|הרע)" + RE_, r"friia|friio|friiai|friiaiia|friiaa|frii", "friia 'friend': רֵעַ always vocalized (unvocalized it reads 'bad', aka's word)"),
    (RW + r"(?:אל|אלים|אלה|אלות|אלי|אלת)" + RE_, r" daeu| daev| dev", "daēuua: אֵל / אֵלִים always vocalized ('to', 'these')"),
    (RW + r"(?:ימה)" + RE_, r"yim", "Yima: always vocalized יִימָה ('to the sea')"),
    (RW + r"(?:דת)" + RE_, r"dat", "דָּת (dāta): always vocalized ('religion' in modern Hebrew)"),
    (RW + r"(?:עד)" + RE_, r"yauu|yau|yav", "yauua 'duration': עַד vocalized where it could be read as the preposition"),
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
            cells = [c.strip().replace("\\|", "|") for c in re.split(r"(?<!\\)\|", l.strip().strip("|"))]
            out.append(cells)
    return out


def names():
    """[(source regex on the folded text, hebrew_vocalized, hebrew_plain, star, what)] from renderings §3.1:
    | Source name | folded-source regex | Hebrew | ★ | note |."""
    out = []
    for cells in _table("3.1"):
        if len(cells) < 4 or cells[0].lower().startswith("source"):
            continue
        rx = cells[1].strip("`")
        heb = cells[2].strip("`")
        if not rx or not heb:
            continue
        out.append((rx, heb, strip_marks(heb), cells[3] == "★", cells[0]))
    return out


def formulas():
    """renderings §8: | F<n> | folded-source regex | Hebrew regex | lines |"""
    out = []
    for cells in _table("8."):
        if len(cells) < 4 or not re.match(r"^F\d+[a-z]?$", cells[0]):
            continue
        out.append((cells[0], cells[1].strip("`"), cells[2].strip("`"), cells[3]))
    return out


def terms():
    """renderings §5 tables: | Source | Hebrew | Not | Why | – shown by `data` where the source word occurs.
    The first cell's italic or backticked words are matched (folded, as a word start) on the line."""
    out = []
    for sec in ("5.",):
        for cells in _table(sec):
            if len(cells) < 2 or cells[0].lower().startswith("source"):
                continue
            ws = re.findall(r"\*([^*]+)\*|`([^`]+)`", cells[0])
            keys = [fold(a or b) for a, b in ws if fold(a or b)]
            if keys:
                out.append((keys, cells[0], cells[1]))
    return out


# ---------------------------------------------------------------- the checks of one line
def lic(rx, key, lab):
    return rx is not None and re.search(rx, license_text(key, lab)) is not None


def _heb_has(plain, h):
    h = strip_marks(h)
    words = re.split(r"[\s,.;:!?–—…()\[\]]+", plain)
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
                for k in range(0, 4):
                    stem = part[k:] if k <= len(part) else ""
                    if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                        if re.fullmatch(r"[ובלמהכש]{0,3}", part[:k]):
                            return True
    return False


def _find_word(heb, hp):
    first = hp.split()[0].split("־")[0]
    cands = {first} | ({first[1:]} if len(first) > 3 and first.startswith("ה") else set())
    for w in re.split(r"[\s־,.;:!?–—…()\[\]]+", heb):
        p = strip_marks(w)
        for c in cands:
            for k in range(0, 4):
                if not re.fullmatch(r"[ובלמהכש]{0,3}", p[:k]):
                    continue
                stem = p[k:]
                if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                    return w
    return ""


def check_line(key, lab, heb, body, out, first_seen=None):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    r = row(key, lab) or {"text": "", "words": []}
    src = r["text"]
    srcf = " " + fold(src) + " "
    for rx, allow, why in RESERVED:
        for m in re.finditer(rx, plain):
            if lic(allow, key, lab):
                break
            if re.search(r"\[היתר שער: [^\]]*" + re.escape(m.group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: «{m.group(0).strip()}» – {why}\n    {heb}\n    src: {src}")
            bad += 1
            break
    for rx, hv, hp, star, what in names():
        if not re.search(rx, srcf):
            continue
        if not _heb_has(plain, hp):
            if "[היתר שם: " in body:
                continue
            out.append(f"NAME {key} {lab}: {what} → {hv} (renderings §3) is not in the line\n    {heb}")
            bad += 1
        elif first_seen is not None and hp not in first_seen:
            first_seen.add(hp)
            if not re.search(rf"[{NIQ}]", _find_word(heb, hp)):
                out.append(f"VOCALIZE {key} {lab}: the first occurrence of {hv} in the file must be vocalized\n    {heb}")
                bad += 1
    for rx, cond, why in TRAPS:
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    for fid, grx, hrx, _ in formulas():
        if re.search(grx, srcf) and not re.search(hrx, re.sub(r"[()]", "", nopunct(plain))) and "[סטייה מן הנוסחה" not in body:
            out.append(f"FORMULA {key} {lab}: {fid} `{grx}` → `{hrx}` (renderings §8)\n    {heb}\n    src: {src}")
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
        drafted = [k for k in seq if heb.get(k, "").strip()]
        missing = [x for x in ordr if x not in heb or not heb[x].strip()]
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
                continue
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
            if tseq != drafted:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(drafted)})")
                bad += 1
            for k in drafted:
                if k in tl and tl[k] != heb[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {heb[k]}")
                    bad += 1
        print(f"{key}: {len(drafted)} drafted entries (base {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = fold(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical folded source) with different Hebrew (justify in the apparatus or fix):")
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


# ---------------------------------------------------------------- data, pd, fill, dictionaries, lexmap, grep
def _corpus():
    return [(k2, r["label"], fold(r["text"])) for k2 in UNITS for r in rows(k2)]


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
    tot = 0
    for k, u in UNITS.items():
        n = len(rows(k))
        tot += n
        print(f"{k}\t{u[0]}\t{n} lines\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")
    print(f"total: {tot} lines")


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
    ts = terms()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    print("Parse every form yourself (`ave <form>`, `avelemma <lemma>`, `aiw <word>`): the TERMS lines below are the "
          "renderings to follow when the form is that lemma – a string match, not a parse.\n")
    for r in sp:
        print(f"### {r['label']}")
        print(f"`{r['text']}`")
        srcf = " " + fold(r["text"]) + " "
        nn = [(what, hv) for rx, hv, hp, st, what in nm if re.search(rx, srcf)]
        if nn:
            print("- NAMES (renderings §3): " + "; ".join(f"{w} = {hv}" for w, hv in nn))
        hits = []
        for keys, what, heb in ts:
            if any(re.search(r"(?<![a-z])" + re.escape(k), srcf) for k in keys if len(k) >= 3):
                hits.append(f"{what} = {heb}")
        if hits:
            print("- TERMS (renderings §5): " + "; ".join(hits[:8]))
        for fid, grx, hrx, _ in fs:
            if re.search(grx, srcf):
                print(f"- FORMULA {fid}: `{hrx}`")
        nk = fold(r["text"])
        if nk and len(nk.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh)[:5]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} → {h}")
        print()


_ROMAN = {28: "XXVIII", 29: "XXIX", 30: "XXX", 31: "XXXI", 32: "XXXII", 33: "XXXIII", 34: "XXXIV", 35: "XXXV",
          36: "XXXVI", 37: "XXXVII", 38: "XXXVIII", 39: "XXXIX", 40: "XL", 41: "XLI", 43: "XLIII", 44: "XLIV",
          45: "XLV", 46: "XLVI", 47: "XLVII", 48: "XLVIII", 49: "XLIX", 50: "L", 51: "LI", 53: "LIII", 54: "LIV",
          27: "XXVII"}


def cmd_pd(key, stanza):
    """Print the passages of the PD translations around a Yasna chapter + stanza (OCR text; rank 5, after drafting).
    Mills numbers Y 28's stanzas one higher (his 28.1 is the Young Avestan preface): ask for 28.(n+1) there."""
    c, s = stanza.split(".") if "." in stanza else (re.sub(r"\D", "", key) or "35", stanza)
    c, s = int(c), int(s)
    rom = _ROMAN.get(c, "")
    for fname, label in (("Mills-1887--SBE-31_djvu.txt", "Mills 1887 (SBE 31)"),
                         ("Moulton-1913--Early-Zoroastrianism_djvu.txt", "Moulton 1913")):
        p = os.path.join(SRC, "Archive-org--PD-translations", fname)
        if not os.path.exists(p):
            print(f"{label}: not on disk")
            continue
        t = open(p, encoding="utf-8", errors="replace").read()
        heads = [m.start() for m in re.finditer(rf"(?:YASNA|Yasna|Ys\.?)\s+(?:{rom}|{c})\b(?![-–])", t)]
        shown = 0
        for h in heads:
            seg = t[h:h + 60000]
            m = re.search(rf"(?m)^\s*{s}\.\s+\S", seg)
            if not m:
                continue
            print(f"===== {label}: Yasna {rom} (offset {h}), stanza {s} =====")
            print(re.sub(r"\n{3,}", "\n\n", seg[m.start():m.start() + 1600]))
            shown += 1
            if shown >= 2:
                break
        if not shown:
            print(f"{label}: no '{s}.' found after a 'Yasna {rom}' heading (search the OCR by hand)")


def cmd_skeleton(key):
    p = annotated_path(key)
    if os.path.exists(p):
        sys.exit(f"{p} exists")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    out = [f"# {UNITS[key][1]} – תרגום מוער", "", f"<!-- טרם תורגם: {key} -->", ""]
    for r in rows(key):
        out += [f"### {r['label']}", "`@`", "> ", ""]
    open(p, "w", encoding="utf-8").write("\n".join(out))
    cmd_fill(p)


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z0-9.]+)\.rtl\.md$", path)
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


def _cab(params):
    url = "https://cab.geschkult.fu-berlin.de/exist/apps/cab/dictionary/dictionary-data.xql?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as f:
        return json.load(f)


def cmd_ave(form):
    d = _cab({"op": "word", "form": form})
    for r in d.get("results", []) if isinstance(d.get("results"), list) else [d]:
        print(json.dumps(r, ensure_ascii=False)[:8000])
    if not d.get("results"):
        d = _cab({"op": "search", "query": form, "mode": "contains", "limit": 15})
        for r in d.get("results", []):
            print(f"{r.get('cabLemma')}  (AIW {r.get('aiwLemma')} {r.get('aiwId')}): {r.get('meaning')}")


def cmd_avelemma(lemma):
    d = _cab({"op": "glossary", "lemma": lemma})
    print(json.dumps(d, ensure_ascii=False, indent=1)[:4000])
    d = _cab({"op": "lemma-words", "lemma": lemma})
    for r in d.get("results", []):
        print(f"- {r.get('word')}: " + "; ".join(m.get("text", "") for m in r.get("morphologies", [])))


def cmd_aiw(word):
    """Bartholomae 1904 (OCR): print the entries whose first line starts with WORD (OCR errors are common)."""
    p = os.path.join(SRC, "Archive-org--PD-translations", "Bartholomae-1904_djvu.txt")
    t = open(p, encoding="utf-8", errors="replace").read().split("\n")
    w = word.strip()
    n = 0
    for i, ln in enumerate(t):
        if ln.startswith(w) or ln.startswith(" " + w):
            print(f"--- line {i}")
            print("\n".join(t[i:i + 25]))
            n += 1
            if n >= 4:
                break
    if not n:
        print(f"no line starts with {w!r} (the OCR may spell it otherwise: try a shorter prefix)")


_PIRUK = re.compile(r"`([^`]+)`\s*–\s*\*?([^\s(\"„“,;*]+)\*?[^;]*?\(\"([^\"]+)\"\)")


def cmd_lexmap(pat=None):
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
                        lem = fold_lemma(mm.group(2))
                        hb = strip_marks(mm.group(3))
                        if lem:
                            m.setdefault(lem, {}).setdefault(hb, []).append(f"{k}:{lab}")
    rx = re.compile(pat) if pat else None
    for lem in sorted(m):
        if rx and not (rx.search(lem) or any(rx.search(h) for h in m[lem])):
            continue
        hs = m[lem]
        flag = "  ← more than one Hebrew" if len(hs) > 1 else ""
        print(f"{lem}: " + "; ".join(f"{h} ({len(v)}: {', '.join(v[:4])}{'…' if len(v) > 4 else ''})" for h, v in hs.items()) + flag)
    inv = {}
    for lem, hs in m.items():
        for h in hs:
            inv.setdefault(h, set()).add(lem)
    coll = {h: ls for h, ls in inv.items() if len(ls) > 1}
    if coll and not pat:
        print("\nOne Hebrew word for several lemmas (check each):")
        for h, ls in sorted(coll.items()):
            print(f"  {h}: {', '.join(sorted(ls))}")


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if heb[lab] and rx.search(strip_marks(heb[lab])):
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
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for fid, g, h, lines in formulas():
        print(f"  {fid}: {g}  →  {h}   ({lines})")
    print("\nNAMES:")
    for rx, hv, hp, st, what in names():
        print(f"  {what} [{rx}] = {hv}{' ★' if st else ''}")


def cmd_selftest():
    n, fails = 0, 0
    for cells in _table("10."):
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z0-9.]+) (\S+)$", cells[0])
        if not m or m.group(1) not in UNITS:
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
    return [s for s in out if s[0] == "h" or s[2]]


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../avesta_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../avesta_tools.py build\n-->\n\n")


def build_one(key):
    pdir = os.path.join(HERE, UNITS[key][0])
    ip = os.path.join(pdir, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"## {UNITS[key][1]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n### {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{key}-{n}]"
                notes.append(f"[^{key}-{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    body = intro + "\n" + "\n".join(out) + "\n" + ("\n" + "\n\n".join(notes) + "\n" if notes else "")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    open(translation_path(key), "w", encoding="utf-8").write(head + body)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")
    return body


def build(keys=None):
    for k in [k for k in present_keys() if not keys or k in keys]:
        build_one(k)
    for proj in PROJECT_TITLES:
        ks = [k for k in UNITS if UNITS[k][0] == proj and os.path.exists(translation_path(k))]
        if not ks:
            continue
        pdir = os.path.join(HERE, proj)
        hp = os.path.join(pdir, "translation--head.rtl.md")
        head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {PROJECT_TITLES[proj]}"
        parts = []
        for k in ks:
            t = open(translation_path(k), encoding="utf-8").read()
            t = re.sub(r"^<!--.*?-->\n\n", "", t, flags=re.S)
            parts.append(t.rstrip("\n"))
        src = ", ".join(f"translation-{k}.rtl.md" for k in ks)
        text = GENERATED.format(src=f"translation--head.rtl.md and {src}") + head + "\n\n" + "\n\n---\n\n".join(parts) + "\n"
        open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write(text)
        print(f"{proj}/translation.rtl.md: {len(ks)} text(s)")
    return verify(present_keys())


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "convert":
        return cmd_convert()
    if cmd == "units":
        return cmd_units()
    if cmd == "skeleton" and rest:
        for k in rest:
            cmd_skeleton(k)
        return
    if cmd == "data" and rest:
        return cmd_data(*rest[:3])
    if cmd == "pd" and len(rest) >= 2:
        return cmd_pd(rest[0], rest[1])
    if cmd == "fill" and rest:
        for p in rest:
            cmd_fill(p)
        return
    if cmd == "ave" and rest:
        return cmd_ave(rest[0])
    if cmd == "avelemma" and rest:
        return cmd_avelemma(rest[0])
    if cmd == "aiw" and rest:
        return cmd_aiw(rest[0])
    if cmd == "lexmap":
        return cmd_lexmap(rest[0] if rest else None)
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

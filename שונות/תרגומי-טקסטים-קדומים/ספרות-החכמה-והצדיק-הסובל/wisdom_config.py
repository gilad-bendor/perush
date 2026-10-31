"""Shared configuration of the wisdom corpus tools (wisdom_tools.py, build_parallels_index.py).

Not run directly. Every annotated file of the corpus is one entry of TEXTS:
    key        the file key: annotated-<key>.rtl.md / translation-<key>.rtl.md in the project folder
    project    the project folder (relative to this folder)
    ebl        the eBL source folder under ../sources/eBL/
    text, ch   how eBL's "Parallels:" field names the chapter: L <cat>.<text> SB "<ch>" <line> (cat = CAT[key], default II;
               the Great Prayer to Šamaš is L III.4)
    first,last the eBL line labels of the chapter that belong to this file (None = from the start / to the end)
    title      the short Hebrew name used in headings
A file whose source is an ETCSL composite (Sumerian: the Instructions of Šuruppag) has an ETCSL entry: its "eBL folder"
is then the folder under ../sources/ETCSL/, and ebl_lines() returns the ETCSL line list, the transliteration (as "N"),
ETCSL's own lemmas (`lemma[label]`), and ETCSL's English translation at the first line of each paragraph.
The other corpora's Hebrew is read read-only for cross-corpus parallels (eBL "L I.4" = Gilgameš, via ../אפוס-גילגמש/gilg_config.py).
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
EBL = os.path.join(ROOT, "sources", "eBL")
LUD = "1-לודלול"
THE = "2-התאודיציה-הבבלית"
SHA = "3-התפילה-הגדולה-לשמש"
COU = "4-עצות-חכמה"
DIA = "5-דו-שיח-הפסימיות"
SHU = "6-הוראות-שורופך"
PMN = "7-העני-מניפור"
FAB = "8-משלי-המחלוקת"
ETCSL = os.path.join(ROOT, "sources", "ETCSL")

TEXTS = [
    # key, project, eBL folder, eBL text no., eBL chapter name, first, last, Hebrew title
    ("I", LUD, "Ludlul-SB-I", "2", "I", None, None, "לודלול, לוח I"),
    ("II", LUD, "Ludlul-SB-II", "2", "II", None, None, "לודלול, לוח II"),
    ("III", LUD, "Ludlul-SB-III", "2", "III", None, None, "לודלול, לוח III"),
    ("IV", LUD, "Ludlul-SB-IV", "2", "IV", None, None, "לודלול, לוח IV"),
    ("V", LUD, "Ludlul-SB-V", "2", "V", None, None, "לודלול, לוח V"),
    ("Th1", THE, "Theodicy-SB", "1", "-", None, "143", "התאודיציה הבבלית, בתים I–XIII"),
    ("Th2", THE, "Theodicy-SB", "1", "-", "144", None, "התאודיציה הבבלית, בתים XIV–XXVII"),
    # Round 3, run 4 (2026-10-21)
    ("SH", SHA, "Shamash-Hymn-SB", "4", "-", None, None, "התפילה הגדולה לשַׁמַשׁ"),
    ("CW", COU, "Counsels-of-Wisdom-SB", "3", "-", None, None, "עצות חכמה"),
    ("DP", DIA, "Dialogue-of-Pessimism-SB", "4", "-", None, None, "דו־שיח הפסימיות"),
    ("SU", SHU, "5.6.1--Instructions-of-Shuruppag", "5.6.1", "-", None, None, "הוראות שׁוּרוּפַּךְ"),
    # Round 5, run 5 (2026-10-31): the Poor Man of Nippur (eBL L/1/11) and the fables (contest literature, L/2/8–13)
    ("PM", PMN, "Poor-Man-of-Nippur", "11", "-", None, None, "העני מִנִּיפּוּר"),
    ("PV", FAB, "Fable-Palm-and-Vine", "12", "-", None, None, "הדקל והגפן"),
    ("PO", FAB, "Fable-Poplar", "8", "-", None, None, "סדרת הצפצפה"),
    ("OH", FAB, "Fable-Ox-and-Horse", "9", "-", None, None, "סדרת השור והסוס"),
    ("SP", FAB, "Fable-Spider", "11", "-", None, None, "סדרת העכביש"),
    ("WR", FAB, "Fable-Wren", "13", "-", None, None, "מעשה בגִּדְרוֹן העני והעזוב"),
]
CAT = {"SH": "III", "PM": "I"}                 # eBL category (L II = wisdom, L III = hymns and prayers); default "II"
ETCSL_KEYS = {"SU"}                 # files whose base text is an ETCSL composite (Sumerian)
# Files whose backticked source line must equal the base text exactly (written as `@` and filled by
# `wisdom_tools.py fill KEY`; ★ rule, guidelines §5.2). The files of runs 1–6 copied eBL's N by hand and are not checked.
FILLED = {"SH", "CW", "DP", "SU", "PM", "PV", "PO", "OH", "SP", "WR"}
# Lines another corpus translated first: (key, labels, path of that annotated file, the `## ` heading that starts its
# section). The Hebrew must be identical (verify checks it).
COPIES = [
    ("SU", [str(i) for i in range(1, 14)],
     os.path.join(ROOT, "סיפורי-המבול-המסופוטמיים", "6-אזכורי-המבול", "annotated.rtl.md"), "## 2. "),
]
BY_KEY = {t[0]: t for t in TEXTS}

PAR_RE = re.compile(r'^\s*(cf\.\s*)?L I+\.(\d+) (\w+) "([^"]+)" (\S+)\s*$')
PAR_L_RE = re.compile(r'^\s*(cf\.\s*)?L (I+)\.(\d+) (\w+) "([^"]+)" (\S+)\s*$')


def ebl_path(key):
    if key in ETCSL_KEYS:
        return os.path.join(ETCSL, BY_KEY[key][2], "transliteration.md")
    return os.path.join(EBL, BY_KEY[key][2], "reading-edition.md")


def cat_of(key):
    return CAT.get(key, "II")


def etcsl_clean(t):
    """An ETCSL transliteration line without the catalogue notes (`*Cited in OB catalogue …*`)."""
    t = re.sub(r"\s*\*Cited in[^*]*\*", "", t)
    return re.sub(r"\s+", " ", t).strip()


def etcsl_lines(key):
    """The same tuple as ebl_lines() for an ETCSL composite: (order, translit, ETCSL translation at the first line of
    each paragraph, ETCSL lemmas `lemma[label]`, {}, {})."""
    folder = os.path.join(ETCSL, BY_KEY[key][2])
    order, norm, trans, lem = [], {}, {}, {}
    md = os.path.join(folder, "transliteration.md")
    if not os.path.exists(md):
        return order, norm, trans, lem, {}, {}
    seg = ""
    for l in open(md, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^## Segment (\w+)", l)
        if m:
            seg = m.group(1)
            continue
        m = re.match(r"^(\d+[A-Za-z]*)\. (.*?)\s*$", l)
        if m:
            lab = seg + m.group(1)
            order.append(lab)
            norm[lab] = etcsl_clean(m.group(2))
    num = BY_KEY[key][3]
    xml = os.path.join(folder, f"c.{num}.xml")
    if os.path.exists(xml):
        raw = open(xml, encoding="utf-8", errors="replace").read()
        for m in re.finditer(r'<l n="([^"]+)"[^>]*>(.*?)</l>', raw, re.S):
            ws = re.findall(r'<w [^>]*?lemma="([^"]*)"[^>]*?label="([^"]*)"', m.group(2))
            ws += [(a, "") for a in re.findall(r'<w [^>]*?lemma="([^"]*)"(?![^>]*label=)[^>]*>', m.group(2))]
            lem.setdefault(m.group(1), [f"{a}[{b}]" for a, b in ws])
    tmd = os.path.join(folder, "translation.md")
    if os.path.exists(tmd):
        for l in open(tmd, encoding="utf-8"):
            m = re.match(r"^\*\*([0-9A-Za-z]+)(?:-[0-9A-Za-z]+)?\.\*\* (.*)$", l.rstrip("\n"))
            if m and m.group(1) in norm:
                trans[m.group(1)] = m.group(2)
    return order, norm, trans, lem, {}, {}


def ebl_lines(key):
    """(order, norm, trans, lemmas, parallels, atf) for one file, from its reading-edition.md.
    parallels[label] = list of raw parallel strings (split at ';'). Lines outside first..last are dropped."""
    if key in ETCSL_KEYS:
        return etcsl_lines(key)
    _, _, folder, _, _, first, last, _ = BY_KEY[key]
    path = os.path.join(EBL, folder, "reading-edition.md")
    order, norm, trans, lem, par, atf = [], {}, {}, {}, {}, {}
    if not os.path.exists(path):
        return order, norm, trans, lem, par, atf
    cur = None
    started = first is None
    ended = False
    inatf = False
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            lab = m.group(1)
            if not started and lab == first:
                started = True
            if started and not ended:
                cur = lab
                order.append(cur)
            else:
                cur = None
            if last is not None and lab == last:
                ended = True
            continue
        if cur is None:
            continue
        if l.startswith("```"):
            inatf = not inatf
            continue
        if inatf:
            atf.setdefault(cur, []).append(l.rstrip("\n"))
        elif l.startswith("- **N:**") and cur not in norm:
            norm[cur] = l[8:].strip()
        elif l.startswith("- **T:**") and cur not in trans:
            trans[cur] = l[8:].strip()
        elif l.startswith("- **L:**") and cur not in lem:
            lem[cur] = [x.strip() for x in re.findall(r"← ([^“;]+?)(?: “|;|$)", l[8:])]
        elif l.startswith("- **Parallels:**"):
            # eBL writes a parallel in a chapter-less text as "L II.4 10": make it "L II.4 SB "-" 10"
            ps = [re.sub(r'^(cf\.\s*)?L (I+)\.(\d+) (\S+)$', r'\1L \2.\3 SB "-" \4', p.strip())
                  for p in l[16:].split(";") if p.strip()]
            par.setdefault(cur, []).extend(ps)
    return order, norm, trans, lem, par, atf


def read_annotated(path):
    """({label: hebrew}, label sequence, problems) of an annotated file, or None if it does not exist."""
    entries, seq, problems = {}, [], []
    if not os.path.exists(path):
        return None
    cur = None
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in entries:
                problems.append(f"duplicate entry {cur}")
            entries[cur] = []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is not None and l.startswith("> "):
            entries[cur].append(l[2:].strip())
    for k, v in entries.items():
        if len(v) != 1:
            problems.append(f"entry {k}: {len(v)} '>' lines")
    return {k: (v[0] if v else "") for k, v in entries.items()}, seq, problems


def annotated_path(key):
    return os.path.join(HERE, BY_KEY[key][1], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, BY_KEY[key][1], f"translation-{key}.rtl.md")


def key_for(textno, ch, line, cat="II"):
    """The file key that holds eBL line (L <cat>.<textno> SB "<ch>" <line>), or None."""
    for t in TEXTS:
        if t[0] in ETCSL_KEYS:
            continue
        if t[3] == textno and t[4] == ch and cat_of(t[0]) == cat:
            order = ebl_lines(t[0])[0]
            if line in order:
                return t[0]
    return None


def sources_of(path):
    """{label: the backticked source line of the entry} of an annotated file (the first line after `### label`)."""
    out, cur = {}, None
    if not os.path.exists(path):
        return out
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur and cur not in out and l.startswith("`") and l.endswith("`") and len(l) >= 3:
            out[cur] = l[1:-1]
        elif cur and l.startswith("> "):
            out.setdefault(cur, None)
    return out


def section_hebrew(path, heading):
    """{label: hebrew} of the entries in one `## ` section of an annotated file (another corpus's file)."""
    out, on, cur = {}, False, None
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        if l.startswith("## "):
            on = l.startswith(heading)
            cur = None
            continue
        if not on:
            continue
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
        elif cur and l.startswith("> ") and cur not in out:
            out[cur] = l[2:].strip()
    return out


def gilgamesh_hebrew(ch, line):
    """The Gilgameš corpus's Hebrew of SB <ch> <line> (eBL L I.4), or None."""
    g = os.path.join(ROOT, "אפוס-גילגמש")
    if g not in sys.path:
        sys.path.insert(0, g)
    try:
        import gilg_config
    except Exception:
        return None
    try:
        a = gilg_config.read_annotated(gilg_config.annotated_path(ch))
    except Exception:
        return None
    return a[0].get(line) if a else None


def strip_marks(s):
    """Hebrew without brackets, editorial marks, footnote refs, quotation marks and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()

"""Shared configuration of the Gilgameš corpus tools (verify.py, parallels_for.py, build_translation.py).

Not run directly. Every text of the corpus is one entry of TEXTS:
    key        the file key: annotated-<key>.rtl.md / translation-<key>.rtl.md
    project    the project folder (relative to this folder)
    ebl        the eBL source folder under ../sources/eBL/
    stage, ch  how eBL's "Parallels:" field names the chapter (L I.4 <stage> "<ch>" <line>)
    first      the first eBL line label of the chapter that belongs to this file (XI: 209; the flood corpus has 1–208)
Extra Hebrew (read-only, for the repeated-lines checks):
    XI 1–208   ../סיפורי-המבול-המסופוטמיים/2-גילגמש-XI--סיפור-המבול/annotated.rtl.md
    I 1–28     ../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md, section "## 6."
"""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
EBL = os.path.join(ROOT, "sources", "eBL")
SB = "1-הנוסח-הבבלי-התקני"
OB = "2-הנוסח-הבבלי-הקדום"
FLOOD_XI = os.path.join(ROOT, "סיפורי-המבול-המסופוטמיים", "2-גילגמש-XI--סיפור-המבול", "annotated.rtl.md")
FLOOD_REFS = os.path.join(ROOT, "סיפורי-המבול-המסופוטמיים", "6-אזכורי-המבול", "annotated.rtl.md")

TEXTS = [
    # key, project, eBL folder, stage, chapter, first label
    ("I", SB, "Gilgamesh-SB-I", "SB", "I", None),
    ("II", SB, "Gilgamesh-SB-II", "SB", "II", None),
    ("III", SB, "Gilgamesh-SB-III", "SB", "III", None),
    ("IV", SB, "Gilgamesh-SB-IV", "SB", "IV", None),
    ("V", SB, "Gilgamesh-SB-V", "SB", "V", None),
    ("VI", SB, "Gilgamesh-SB-VI", "SB", "VI", None),
    ("VII", SB, "Gilgamesh-SB-VII", "SB", "VII", None),
    ("VIII", SB, "Gilgamesh-SB-VIII", "SB", "VIII", None),
    ("IX", SB, "Gilgamesh-SB-IX", "SB", "IX", None),
    ("X", SB, "Gilgamesh-SB-X", "SB", "X", None),
    ("XI", SB, "Gilgamesh-SB-XI", "SB", "XI", "209"),
    ("XII", SB, "Gilgamesh-SB-XII", "SB", "XII", None),
    ("OB-II", OB, "Gilgamesh-OB-II", "OB", "II", None),
    ("OB-III", OB, "Gilgamesh-OB-III", "OB", "III", None),
    ("OB-VA+BM", OB, "Gilgamesh-OB-VA-BM", "OB", "VA+BM", None),
    ("OB-Schoyen2", OB, "Gilgamesh-OB-Schoeyen2", "OB", "Schøyen₂", None),
    ("OB-Nippur", OB, "Gilgamesh-OB-Nippur", "OB", "Nippur", None),
    ("OB-Harmal1", OB, "Gilgamesh-OB-Harmal1", "OB", "Harmal₁", None),
    ("OB-Ishchali", OB, "Gilgamesh-OB-Ishchali", "OB", "Ishchali", None),
    ("OB-Harmal2", OB, "Gilgamesh-OB-Harmal2", "OB", "Harmal₂", None),
    ("OB-IM", OB, "Gilgamesh-OB-IM", "OB", "IM", None),
]
BY_KEY = {t[0]: t for t in TEXTS}
BY_EBL = {(t[3], t[4]): t[0] for t in TEXTS}

PAR_RE = re.compile(r'^\s*(cf\.\s*)?L I\.(\d+) (\w+) "([^"]+)" (\S+)\s*$')


def ebl_lines(key):
    """(order, norm, trans, lemmas, parallels) for one text, from its reading-edition.md.
    parallels[label] = list of (is_cf, text_no, stage, chapter, line). Lines before `first` are dropped."""
    _, _, folder, _, _, first = BY_KEY[key]
    path = os.path.join(EBL, folder, "reading-edition.md")
    order, norm, trans, lem, par = [], {}, {}, {}, {}
    if not os.path.exists(path):
        return order, norm, trans, lem, par
    cur = None
    started = first is None
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if not started and cur == first:
                started = True
            if started:
                order.append(cur)
            else:
                cur = None
            continue
        if cur is None:
            continue
        if l.startswith("- **N:**") and cur not in norm:
            norm[cur] = l[8:].strip()
        elif l.startswith("- **T:**") and cur not in trans:
            trans[cur] = l[8:].strip()
        elif l.startswith("- **L:**") and cur not in lem:
            lem[cur] = re.findall(r"← ([^“;]+?)(?: “|;|$)", l[8:])
        elif l.startswith("- **Parallels:**"):
            for p in l[16:].split(";"):
                m2 = PAR_RE.match(p)
                if m2:
                    par.setdefault(cur, []).append((bool(m2.group(1)), m2.group(2), m2.group(3), m2.group(4), m2.group(5)))
    return order, norm, trans, lem, par


def read_annotated(path, section=None):
    """{label: hebrew} and the label sequence of an annotated file; problems list.
    section: only read entries under the `## ` heading that starts with this string (the flood refs file)."""
    entries, seq, problems = {}, [], []
    if not os.path.exists(path):
        return None
    cur = None
    insec = section is None
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        if section is not None and l.startswith("## "):
            insec = l.startswith(section)
            cur = None
            continue
        if not insec:
            continue
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


def all_hebrew():
    """{key: {label: hebrew}} for every text that has an annotated file, plus XI 1–208 from the flood corpus
    (merged under XI) and the flood-refs copy of I 1–28 under the key 'I@refs'."""
    heb = {}
    for t in TEXTS:
        a = read_annotated(annotated_path(t[0]))
        if a:
            heb[t[0]] = dict(a[0])
    fx = read_annotated(FLOOD_XI)
    if fx:
        heb.setdefault("XI", {})
        for k, v in fx[0].items():
            heb["XI"].setdefault(k, v)
    fr = read_annotated(FLOOD_REFS, section="## 6.")
    if fr:
        heb["I@refs"] = fr[0]
    return heb


def strip_marks(s):
    """Hebrew without brackets, editorial marks, footnote refs and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()

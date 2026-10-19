"""Shared configuration of the wisdom corpus tools (wisdom_tools.py, build_parallels_index.py).

Not run directly. Every annotated file of the corpus is one entry of TEXTS:
    key        the file key: annotated-<key>.rtl.md / translation-<key>.rtl.md in the project folder
    project    the project folder (relative to this folder)
    ebl        the eBL source folder under ../sources/eBL/
    text, ch   how eBL's "Parallels:" field names the chapter: L II.<text> SB "<ch>" <line>
    first,last the eBL line labels of the chapter that belong to this file (None = from the start / to the end)
    title      the short Hebrew name used in headings
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

TEXTS = [
    # key, project, eBL folder, eBL text no., eBL chapter name, first, last, Hebrew title
    ("I", LUD, "Ludlul-SB-I", "2", "I", None, None, "לודלול, לוח I"),
    ("II", LUD, "Ludlul-SB-II", "2", "II", None, None, "לודלול, לוח II"),
    ("III", LUD, "Ludlul-SB-III", "2", "III", None, None, "לודלול, לוח III"),
    ("IV", LUD, "Ludlul-SB-IV", "2", "IV", None, None, "לודלול, לוח IV"),
    ("V", LUD, "Ludlul-SB-V", "2", "V", None, None, "לודלול, לוח V"),
    ("Th1", THE, "Theodicy-SB", "1", "-", None, "143", "התאודיציה הבבלית, בתים I–XIII"),
    ("Th2", THE, "Theodicy-SB", "1", "-", "144", None, "התאודיציה הבבלית, בתים XIV–XXVII"),
]
BY_KEY = {t[0]: t for t in TEXTS}

PAR_RE = re.compile(r'^\s*(cf\.\s*)?L I+\.(\d+) (\w+) "([^"]+)" (\S+)\s*$')
PAR_L_RE = re.compile(r'^\s*(cf\.\s*)?L (I+)\.(\d+) (\w+) "([^"]+)" (\S+)\s*$')


def ebl_path(key):
    return os.path.join(EBL, BY_KEY[key][2], "reading-edition.md")


def ebl_lines(key):
    """(order, norm, trans, lemmas, parallels, atf) for one file, from its reading-edition.md.
    parallels[label] = list of raw parallel strings (split at ';'). Lines outside first..last are dropped."""
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
            par.setdefault(cur, []).extend(p.strip() for p in l[16:].split(";") if p.strip())
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


def key_for(textno, ch, line):
    """The file key that holds eBL line (L II.<textno> SB "<ch>" <line>), or None."""
    for t in TEXTS:
        if t[3] == textno and t[4] == ch:
            order = ebl_lines(t[0])[0]
            if line in order:
                return t[0]
    return None


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

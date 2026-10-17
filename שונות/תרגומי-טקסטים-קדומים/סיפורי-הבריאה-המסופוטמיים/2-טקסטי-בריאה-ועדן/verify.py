"""Verify the translation files of project 2 (the creation and Eden companions).

Usage (from any directory):  python3 -I verify.py [N ...]      (default: every text that has files)

Checks, per text N (see TEXTS):
  1. annotated-<N>-<Name>.rtl.md: every entry `### <label>` has exactly one `> ` Hebrew line; no label is duplicated.
  2. Coverage: the entries follow the base edition's line list (eBL reading-edition.md for Adapa, with the prefixes
     "MB " / "SB "; ETCSL transliteration.md for the Sumerian texts), with no line missing, extra or out of order.
     Texts 6–7 (bilinguals) have no machine-readable line list: only order and duplicates are checked.
     A line the translator deliberately leaves out must still have an entry (its `>` line may be `[…]`).
  3. translation-<N>-<Name>.rtl.md: its numbered lines (`**<label>** …`) equal the annotated `>` lines, one to one and
     in the same order (footnote references [^…] and trailing spaces are ignored).
Exit code 1 if any check fails.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, "..", "..", "sources"))
TEXTS = {
    "1": ("Adapa", [("MB ", "eBL/Adapa-MB/reading-edition.md", "ebl"), ("SB ", "eBL/Adapa-SB/reading-edition.md", "ebl")]),
    "2": ("Enki-Ninhursag", [("", "ETCSL/1.1.1--Enki-and-Ninhursaga/transliteration.md", "etcsl")]),
    "3": ("Enki-Ninmah", [("", "ETCSL/1.1.2--Enki-and-Ninmah/transliteration.md", "etcsl")]),
    "4": ("Hoe", [("", "ETCSL/5.5.4--Song-of-the-Hoe/transliteration.md", "etcsl")]),
    "5": ("Grain-Sheep", [("", "ETCSL/5.3.2--Debate-Grain-and-Sheep/transliteration.md", "etcsl")]),
    "6": ("Founding-of-Eridu", []),
    "7": ("KAR-4", []),
}
FN = re.compile(r"\[\^[^\]]+\]")


def source_labels(n):
    out = []
    for prefix, rel, kind in TEXTS[n][1]:
        for l in open(os.path.join(SRC, rel), encoding="utf-8"):
            if kind == "ebl":
                m = re.match(r"^### (\S+)\s*$", l)
            else:
                m = re.match(r"^(\d+[A-Za-z]*)\. ", l)
            if m:
                out.append(prefix + m.group(1))
    return out


def annotated(path, problems):
    entries, order, cur = {}, [], None
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (.+?)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in entries:
                problems.append(f"duplicate entry {cur}")
            entries[cur] = []
            order.append(cur)
        elif l.startswith("## ") or l.startswith("# "):
            cur = None
        elif cur and l.startswith("> "):
            entries[cur].append(l[2:].rstrip())
    for k in order:
        if len(entries[k]) != 1:
            problems.append(f"entry {k}: {len(entries[k])} '>' lines")
    return order, entries


def translation(path):
    out = []
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            out.append((m.group(1), FN.sub("", m.group(2)).rstrip()))
    return out


def check(n):
    name = TEXTS[n][0]
    a = os.path.join(HERE, f"annotated-{n}-{name}.rtl.md")
    t = os.path.join(HERE, f"translation-{n}-{name}.rtl.md")
    if not os.path.exists(a):
        return None
    problems = []
    order, entries = annotated(a, problems)
    src = source_labels(n)
    if src:
        if order != src:
            missing = [x for x in src if x not in entries]
            extra = [x for x in order if x not in src]
            problems.append(f"coverage: {len(order)} entries vs {len(src)} edition lines; missing {missing[:15]}; extra {extra[:15]}")
            if not missing and not extra:
                problems.append("coverage: same labels, different order")
    if os.path.exists(t):
        tr = translation(t)
        al = [(k, FN.sub("", entries[k][0]).rstrip()) for k in order if entries[k]]
        if len(tr) != len(al):
            problems.append(f"translation has {len(tr)} numbered lines, annotated {len(al)}")
        for (k1, h1), (k2, h2) in zip(al, tr):
            if k1 != k2 or h1 != h2:
                problems.append(f"translation mismatch at {k1}/{k2}:\n    A: {h1}\n    T: {h2}")
                if len(problems) > 30:
                    break
    else:
        problems.append("no translation file")
    print(f"text {n} ({name}): {len(order)} entries; " + ("OK" if not problems else f"{len(problems)} problem(s)"))
    for p in problems:
        print("  - " + p)
    return not problems


def main():
    ns = sys.argv[1:] or list(TEXTS)
    res = [check(n) for n in ns]
    sys.exit(1 if any(r is False for r in res) else 0)


if __name__ == "__main__":
    main()

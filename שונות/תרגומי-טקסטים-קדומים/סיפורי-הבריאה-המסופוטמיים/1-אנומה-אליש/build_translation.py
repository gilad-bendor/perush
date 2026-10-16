"""Build translation.rtl.md (the whole poem) from translation-I … translation-VII.rtl.md, then verify it.

Usage (from any directory):  python3 -I build_translation.py
Adapted from the Atra-ḫasīs project's build_translation.py (flood corpus).
The header (title, general introduction, legend, plot, names) is HEAD below; each tablet gets a `## לוח N: …` heading and
the short introduction in INTRO. Everything else is copied verbatim from the tablet files: section headings (demoted
## -> ###), numbered lines, unnumbered lines (gap notes) and footnotes (labels prefixed by tablet: [^1] -> [^II-1]).
Each tablet file's own title and introduction (everything before its first ## heading) are dropped.
Verification: every numbered line equals its source line (modulo the footnote label), footnote references and
definitions match one to one, and no label is duplicated. Exit code 1 on any problem.
"""
import os
import re
import sys

A = os.path.dirname(os.path.abspath(__file__))
TABLETS = ["I", "II", "III", "IV", "V", "VI", "VII"]
HEAD = open(os.path.join(A, "build_translation--head.rtl.md"), encoding="utf-8").read().rstrip("\n")
INTRO = {}
cur = None
for l in open(os.path.join(A, "build_translation--intros.rtl.md"), encoding="utf-8"):
    l = l.rstrip("\n")
    m = re.match(r"^## לוח (\S+):", l)
    if m:
        cur = m.group(1)
        INTRO[cur] = [l, []]
    elif cur and l.strip():
        INTRO[cur][1].append(l)
LINE = re.compile(r"^\*\*([^*]+)\*\* ")


def body(t):
    src = open(os.path.join(A, f"translation-{t}.rtl.md"), encoding="utf-8").read().split("\n")
    first = next(i for i, l in enumerate(src) if l.startswith("## "))
    text, notes = [], []
    for l in src[first:]:
        if l.startswith("[^"):
            notes.append(l)
        elif l.strip() == "---":
            continue
        else:
            text.append(l)
    fix = lambda s: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{t}-{m.group(1)}]", s)
    out = ["#" + fix(l) if l.startswith("## ") else fix(l) for l in text]
    while out and not out[-1].strip():
        out.pop()
    return out, [fix(n) for n in notes], src[first:]


def main():
    parts = [HEAD]
    srcs = {}
    present = [t for t in TABLETS if os.path.exists(os.path.join(A, f"translation-{t}.rtl.md"))]
    for t in present:
        out, notes, src = body(t)
        srcs[t] = src
        h, p = INTRO.get(t, [f"## לוח {t}", []])
        parts.append(f"\n\n{h}\n\n" + ("\n\n".join(p) + "\n\n" if p else "") + "\n".join(out) + ("\n\n" + "\n\n".join(notes) if notes else ""))
    res = "".join(parts) + "\n"
    open(os.path.join(A, "translation.rtl.md"), "w", encoding="utf-8").write(res)

    bad = 0
    comb = res.split("\n")
    heads = {t: next(i for i, l in enumerate(comb) if l == INTRO.get(t, [f"## לוח {t}"])[0]) for t in present}
    order = present + [None]
    for i, t in enumerate(present):
        a = heads[t]
        b = heads[order[i + 1]] if order[i + 1] else len(comb)
        cl = [l for l in comb[a:b] if LINE.match(l)]
        sl = [l for l in srcs[t] if LINE.match(l)]
        sl2 = [re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{t}-{m.group(1)}]", l) for l in sl]
        if len(cl) != len(sl2):
            print(t, "count mismatch", len(cl), len(sl2))
            bad += 1
        for x, y in zip(cl, sl2):
            if x != y:
                print(t, "DIFF\n  ", x, "\n  ", y)
                bad += 1
        refs = re.findall(r"\[\^(" + t + r"-[^\]]+)\](?!:)", "\n".join(comb[a:b]))
        defs = re.findall(r"^\[\^(" + t + r"-[^\]]+)\]:", "\n".join(comb[a:b]), re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(t, "footnote mismatch", len(refs), len(defs))
            bad += 1
        print(f"Tablet {t}: {len(cl)} numbered lines, {len(defs)} footnotes")
    labels = re.findall(r"^\[\^([^\]]+)\]:", res, re.M)
    if len(labels) != len(set(labels)):
        print("duplicate footnote labels")
        bad += 1
    print("problems:", bad)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())

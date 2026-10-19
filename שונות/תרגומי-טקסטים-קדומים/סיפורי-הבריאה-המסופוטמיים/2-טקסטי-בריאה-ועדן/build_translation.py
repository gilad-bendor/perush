"""Build translation.rtl.md (all seven texts) from translation-<N>-<Name>.rtl.md, then verify it.

Usage (from any directory):  python3 -I build_translation.py
Adapted from ../1-אנומה-אליש/build_translation.py.
The header (title, general introduction) is build_translation--head.rtl.md. Each text gets a `## <N>. <its own # title>`
heading followed by its own introduction (everything between its `#` title and its first `##` heading); the rest is
copied verbatim: section headings (demoted ## -> ###), numbered lines, unnumbered lines and footnotes (labels prefixed by
the text number: [^1] -> [^2-1]).
Verification: every numbered line equals its source line (modulo the footnote label), footnote references and
definitions match one to one, and no label is duplicated. Exit code 1 on any problem.
"""
import os
import re
import sys

A = os.path.dirname(os.path.abspath(__file__))
TEXTS = ["1-Adapa", "2-Enki-Ninhursag", "3-Enki-Ninmah", "4-Hoe", "5-Grain-Sheep", "6-Founding-of-Eridu", "7-KAR-4"]
HEAD = open(os.path.join(A, "build_translation--head.rtl.md"), encoding="utf-8").read().rstrip("\n")
LINE = re.compile(r"^\*\*([^*]+)\*\* ")


def body(key):
    n = key.split("-")[0]
    src = open(os.path.join(A, f"translation-{key}.rtl.md"), encoding="utf-8").read().split("\n")
    title = next(l[2:].strip() for l in src if l.startswith("# "))
    ti = next(i for i, l in enumerate(src) if l.startswith("# "))
    first = next(i for i, l in enumerate(src) if l.startswith("## "))
    intro = [l for l in src[ti + 1:first]]
    text, notes = [], []
    for l in src[first:]:
        if l.startswith("[^"):
            notes.append(l)
        elif l.strip() == "---":
            continue
        else:
            text.append(l)
    fix = lambda s: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{n}-{m.group(1)}]", s)
    out = ["#" + fix(l) if l.startswith("## ") else fix(l) for l in text]
    while out and not out[-1].strip():
        out.pop()
    intro = [fix(l) for l in intro]
    while intro and not intro[0].strip():
        intro.pop(0)
    while intro and not intro[-1].strip():
        intro.pop()
    return n, title, intro, out, [fix(x) for x in notes], src


def main():
    parts = [HEAD]
    present = [k for k in TEXTS if os.path.exists(os.path.join(A, f"translation-{k}.rtl.md"))]
    srcs = {}
    for k in present:
        n, title, intro, out, notes, src = body(k)
        srcs[k] = src
        parts.append(f"\n\n## {n}. {title}\n\n" + ("\n".join(intro) + "\n\n" if intro else "") + "\n".join(out)
                     + ("\n\n" + "\n\n".join(notes) if notes else ""))
    res = "".join(parts) + "\n"
    open(os.path.join(A, "translation.rtl.md"), "w", encoding="utf-8").write(res)
    # verify
    problems = []
    body_only = res[len(HEAD):]  # the header's own bold lines and comment are not checked
    got = [l for l in body_only.split("\n") if LINE.match(l)]
    exp = []
    for k in present:
        n = k.split("-")[0]
        for l in srcs[k]:
            if LINE.match(l):
                exp.append(re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{n}-{m.group(1)}]", l))
    if got != exp:
        problems.append(f"numbered lines differ: {len(got)} vs {len(exp)}")
    refs = re.findall(r"\[\^([^\]]+)\](?!:)", body_only)
    defs = re.findall(r"^\[\^([^\]]+)\]:", body_only, re.M)
    if sorted(set(refs)) != sorted(defs):
        problems.append(f"footnotes: refs without defs {sorted(set(refs) - set(defs))}; defs without refs {sorted(set(defs) - set(refs))}")
    if len(defs) != len(set(defs)):
        problems.append("duplicate footnote labels")
    print(f"translation.rtl.md: {len(present)} texts, {len(got)} numbered lines, {len(defs)} footnotes; " + ("OK" if not problems else "PROBLEMS"))
    for p in problems:
        print("  - " + p)
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()

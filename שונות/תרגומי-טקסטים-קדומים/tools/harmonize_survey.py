#!/usr/bin/env python3
"""Cross-corpus survey for a harmonization pass: which Hebrew does each corpus use for a source word?

Reads every annotated*.rtl.md under the folder (one entry = a `### label` heading, the transliteration line in
backticks, the `>` Hebrew line, and the bullets; the **פירוק:** bullet names each lemma in *italics*).

Usage (from the folder, with python3 -I):
  tools/harmonize_survey.py src  '<regex>' [--heb '<regex>'] [--show N]
      entries whose transliteration or פירוק matches <regex> (the source word), counted per project; with --heb,
      split into those whose `>` line matches the Hebrew regex and those that don't; --show N prints N `>` lines
      per project.
  tools/harmonize_survey.py heb  '<regex>' [--src '<regex>'] [--show N]
      entries whose `>` line matches the Hebrew regex (niqqud stripped, maqaf kept), per project; with --src, the
      ones whose source does NOT match (collisions: one Hebrew word for another source word).
  tools/harmonize_survey.py parse '<regex>' [--show N]
      word by word: every segment of a **פירוק:** bullet (split at ';') that names the source word, with the Hebrew the
      translator gave it there (the last ("…") of the segment), counted per project: the most precise survey.
  tools/harmonize_survey.py words '<regex>'
      the Hebrew words (niqqud stripped) that occur in the `>` lines of the entries whose source matches <regex>,
      with counts: the quick way to see what a source word was rendered as.

Regexes are Python regexes, case-sensitive; the source side is matched against the transliteration line and the
פירוק bullet together (so a lemma like '\\*šasû\\*' or a form like 'al-si' both work).
"""
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NIQQUD = re.compile(r"[֑-ֽֿ-ׇ]")  # keeps the maqaf (U+05BE)
HEB_WORD = re.compile(r"[א-ת־֑-ׇ\"״׳']+")


def strip(s):
    return NIQQUD.sub("", s)


def entries():
    for f in sorted(ROOT.glob("*/**/annotated*.rtl.md")):
        if "sources" in f.parts:
            continue
        proj = str(f.parent.relative_to(ROOT))
        label, src, heb = None, [], []
        for line in f.read_text(encoding="utf-8").splitlines() + ["### END"]:
            if line.startswith("### "):
                if label is not None and heb:
                    yield proj, f.name, label, " ".join(src), " ".join(heb)
                label, src, heb = line[4:].strip(), [], []
            elif label is None:
                continue
            elif line.startswith(">"):
                heb.append(strip(line[1:].strip()))
            elif line.startswith("`") or line.startswith("- **פירוק:**"):
                src.append(line)


QUOTE = re.compile(r'\("([^"]+)"\)|\(״([^״]+)״\)')


def parse_mode(rx, show):
    per = defaultdict(Counter)
    ex = defaultdict(list)
    for f in sorted(ROOT.glob("*/**/annotated*.rtl.md")):
        if "sources" in f.parts:
            continue
        proj = str(f.parent.relative_to(ROOT))
        label = ""
        for line in f.read_text(encoding="utf-8").splitlines():
            if line.startswith("### "):
                label = line[4:].strip()
            if not line.startswith("- **פירוק:**"):
                continue
            for seg in line.split(";"):
                if not rx.search(seg):
                    continue
                qs = [a or b for a, b in QUOTE.findall(seg)]
                heb = strip(qs[-1]) if qs else "(no Hebrew given)"
                per[proj][heb] += 1
                if len(ex[proj]) < show:
                    ex[proj].append(f"  {f.name} {label}: {seg.strip()[:160]}")
    for proj in sorted(per):
        print(f"{proj}: " + ", ".join(f"{h}×{n}" for h, n in per[proj].most_common()))
        for e in ex[proj]:
            print(e)


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    mode, rx = argv[0], re.compile(argv[1])
    opt = {argv[i]: argv[i + 1] for i in range(2, len(argv) - 1, 2)}
    show = int(opt.get("--show", 0))
    if mode == "parse":
        parse_mode(rx, show)
        return 0
    other = opt.get("--heb") if mode == "src" else opt.get("--src")
    other = re.compile(other) if other else None
    per = defaultdict(lambda: [0, 0, []])
    words = Counter()
    for proj, fname, label, src, heb in entries():
        if mode in ("src", "words"):
            if not rx.search(src):
                continue
            if mode == "words":
                for w in HEB_WORD.findall(heb):
                    words[(proj, w)] += 1
                continue
            hit = bool(other.search(heb)) if other else True
        elif mode == "heb":
            if not rx.search(strip(heb)):
                continue
            hit = bool(other.search(src)) if other else True
        else:
            print(__doc__)
            return 2
        p = per[proj]
        p[0 if hit else 1] += 1
        if len(p[2]) < show:
            p[2].append(f"  {fname} {label}: {heb}")
    if mode == "words":
        byproj = defaultdict(list)
        for (proj, w), n in words.most_common():
            byproj[proj].append(f"{w}×{n}")
        for proj in sorted(byproj):
            print(f"{proj}: {' '.join(byproj[proj][:25])}")
        return 0
    for proj in sorted(per):
        a, b, ex = per[proj]
        if other:
            print(f"{proj}: match {a}, no match {b}")
        else:
            print(f"{proj}: {a}")
        for e in ex:
            print(e)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

#!/usr/bin/env python3
"""composite-SR--made-by.py – the one-off generator of composite-SR.tsv (Round 5 run 2, 2026-10-30), kept for the record.

The Song of Release (CTH 789) is a Hurro-Hittite bilingual: each tablet alternates a Hurrian line ("a", lg="Hur") and its
Hittite translation ("b", lg="Hit"). Our text is the Hittite side only (the Hurrian is out of scope). Each row is one
Hittite line of TLHdig 0.3, in the order of the tablets below (the narrative order of the main tablets, after Neu 1996:
Allani's banquet, the parables with their explanations, the assembly of Ebla; then two small fragments). Labels are
"<tablet>.<n>" (KBo 32.14 → "14.1" …); a section ("§") ends wherever the tablet has a paragraph divider on the Hittite
line or on its Hurrian partner of the same number. Run: python3 -I -B composite-SR--made-by.py > composite-SR.tsv
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import tlh2md  # noqa: E402

TABLETS = [("13", "KBo 32.13+"), ("14", "KBo 32.14"), ("15", "KBo 32.15"), ("16", "KBo 32.16"), ("19", "KBo 32.19"),
           ("10", "KBo 32.10"), ("17", "KBo 32.17")]


def full_label(ln):
    return f"{{{ln['frag']}}} {ln['label']}" if ln.get("frag") else ln["label"]


print("label\tsec\tms\tms_lines\ttext\twitnesses\tnote")
for short, ms in TABLETS:
    L = tlh2md.parse(os.path.join(ROOT, "sources", "TLHdig", "CTH-789", ms + ".xml"))
    pars = set()
    for x in L:  # a divider on either line of a pair closes the section
        if x["par"]:
            pars.add(re.sub(r"[ab]′?$|[ab](?=′)", "", x["label"]).replace("′", ""))
    sec, n = 1, 0
    labs = [full_label(x) for x in L]
    for x in L:
        if x["lg"] != "Hit" or not x["text"].strip():
            if x["lg"] == "Hit" and x["par"]:
                sec, n = sec + 1, 0
            continue
        n += 1
        lab = full_label(x)
        if labs.count(lab) > 1:
            lab += "#%d" % (labs[:L.index(x) + 1].count(lab))
        print(f"{short}.{sec}.{n}\t{short} §{sec}\t{ms}\t{lab}\t{x['text']}\t\t")
        base = re.sub(r"[ab]′?$|[ab](?=′)", "", x["label"]).replace("′", "")
        if base in pars:
            sec, n = sec + 1, 0

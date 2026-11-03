"""Merge the region--*.md candidate tables into one TSV (python3 -I merge.py <program-dir> <out.tsv>)."""
import sys, glob, re, os
COLS = ["id","text","culture","content_formed","fixed","earliest","transmission","size","condition","base","readable","C1","C2","C3","C4","C5","large","parts","hosts","completes"]
rows = []
for f in sorted(glob.glob(os.path.join(sys.argv[1], "region--*.md"))):
    region = os.path.basename(f)[8:-3]
    s = open(f, encoding="utf-8").read()
    m = re.search(r"^## Candidates\s*$(.*?)(?=^## )", s, re.S | re.M)
    if not m: print("NO TABLE:", f); continue
    for line in m.group(1).splitlines():
        line = line.strip()
        if not line.startswith("|") or re.match(r"^\|\s*-", line) or line.lower().startswith("| id"): continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) != len(COLS): print(f"BAD ROW ({len(cells)} cells) in {region}: {line[:80]}"); continue
        d = dict(zip(COLS, cells)); d["region"] = region
        def num(x):
            m = re.match(r"\s*(\d)", x); return int(m.group(1)) if m else 0
        c = [num(d[k]) for k in ("C1","C2","C3","C4","C5")]
        d["exc"] = "EXC" if "EXC" in d["C1"] else ""
        d["score"] = 5*c[0] + 4*c[1] + 3*c[2] + 3*c[3] + 2*c[4]
        rows.append(d)
rows.sort(key=lambda d: -d["score"])
with open(sys.argv[2], "w", encoding="utf-8") as o:
    keys = ["score","region","exc"] + COLS
    o.write("\t".join(keys) + "\n")
    for d in rows: o.write("\t".join(str(d[k]).replace("\t"," ") for k in keys) + "\n")
print(len(rows), "candidates")

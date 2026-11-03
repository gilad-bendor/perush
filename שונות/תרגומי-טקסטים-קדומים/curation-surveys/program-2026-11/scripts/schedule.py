"""Schedule the runs into rounds (python3 -I schedule.py <merged.tsv> <out-dir>)."""
import sys, csv, os, re, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from runs import R, DECLINED
FIRST, MAXR, PER_TRACK, PER_NEW = 8, 6, 1, 2
# The user, 2026-11-03: the biggest translations (a whole text in two or more runs) go to the later rounds, the biggest
# last: such a run's priority drops by 40 + 3 per run of its text (they then fill the rounds after the normal-size texts).
for r in R:
    m = re.search(r"part \d+ of (\d+)", r["title"])
    r["big"] = int(m.group(1)) if m else 0
    r["eff"] = r["prio"] - (40 + 3 * r["big"] if r["big"] else 0)
runs = sorted([r for r in R if not r["last"]], key=lambda r: -r["eff"])
# The user, 2026-11-03: the runs that need the Persée PDFs (a person must save them) are a dedicated last round.
LAST = [r for r in R if r["last"]]
ids = {r["rid"] for r in runs}
for r in runs:
    for a in r["after"]: assert a in ids, (r["rid"], a)
placed, rounds, rn = {}, [], FIRST
left = list(runs)
while left:
    cur, tracks, new = [], collections.Counter(), 0
    for cap in (PER_TRACK, PER_TRACK + 1):
     for r in list(left):
         if len(cur) >= MAXR: break
         if tracks[r["track"]] >= cap: continue
         if r["newlang"] and new >= PER_NEW: continue
         ok = True
         for a in r["after"]:
             if a in placed and placed[a] < rn: continue
             if any(c["rid"] == a for c in cur) and next(c for c in cur if c["rid"] == a)["track"] == r["track"]: continue
             ok = False; break
         if not ok: continue
         cur.append(r); tracks[r["track"]] += 1; new += bool(r["newlang"]); left.remove(r)
    for r in cur: placed[r["rid"]] = rn
    assert cur, "deadlock"
    rounds.append((rn, cur)); rn += 1
# the tail: rounds that hold one track only (the parts of one big text, which run one after another anyway) become one round
while len(rounds) > 1 and len({r["track"] for r in rounds[-1][1]}) == 1 and {r["track"] for r in rounds[-2][1]} == {r["track"] for r in rounds[-1][1]}:
    lr, lc = rounds.pop()
    for r in lc: placed[r['rid']] = rounds[-1][0]
    rounds[-1][1].extend(lc)
if len(rounds) > 1 and len(rounds[-1][1]) == 1:
    lr, lc = rounds.pop()
    for r in lc: placed[r['rid']] = rounds[-1][0]
    rounds[-1][1].extend(lc)
if LAST:
    for r in LAST: placed[r['rid']] = rounds[-1][0] + 1
    rounds.append((rounds[-1][0] + 1, LAST))
# render
merged = list(csv.DictReader(open(sys.argv[1], encoding="utf-8"), delimiter="\t"))
byid = {m["id"]: m for m in merged}
used = set()
for r in R:
    for i in re.split(r",\s*", r["items"]): assert i in byid, (r["rid"], i); used.add(i)
out = []
for rn, cur in rounds:
    out.append(f"\n### Round {rn}\n")
    out.append("| Run | Content (whole texts) | Corpus / folder | Base text | Size | New language | Completes | May run beside (range B) | Candidates |")
    out.append("|---|---|---|---|---|---|---|---|---|")
    for k, r in enumerate(cur, 1):
        beside = [str(j) for j, o in enumerate(cur, 1) if o["track"] != r["track"] and j != k]
        out.append(f"| {k} ({r['rid']}) | {r['title']} | {r['corpus']} | {r['base']} | {r['size']} | {r['newlang']} | {r['completes']} | {', '.join(beside) or '–'} | {r['items']} |")
open(os.path.join(sys.argv[2], "rounds.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
# reserve
res = []
for m in merged:
    if m["id"] in used: continue
    rd = m["readable"].lower()
    if m["id"] in DECLINED: why = DECLINED[m["id"]]
    elif rd.startswith("low") and "medium" not in rd: why = "not readable with control (readable: low)"
    elif "NOT verified" in m["base"] or "NOT verified" in m["size"]: why = "the base is not verified (see its region file)"
    elif m["large"]: why = "LARGE: kept in reserve"
    else: why = f"below the program's cut (score {m['score']})"
    res.append((m["region"], m["id"], m["text"].replace("**", "").replace("|", "/")[:150], m["score"], why))
with open(os.path.join(sys.argv[2], "reserve.md"), "w", encoding="utf-8") as f:
    f.write("| Candidate | Text | Score | Why not in the program |\n|---|---|---|---|\n")
    for reg, i, t, sc, why in sorted(res, key=lambda x: (x[0], -int(x[3]))):
        f.write(f"| {i} | {t} | {sc} | {why} |\n")
large = [(r["rid"], placed[r["rid"]], r["large"]) for r in R if r["large"]]
with open(os.path.join(sys.argv[2], "large.md"), "w", encoding="utf-8") as f:
    for rid, rnd, l in sorted(large, key=lambda x: x[1]): f.write(f"- **{rid}** (from Round {rnd}): {l}.\n")
hosts = collections.Counter()
for i in used:
    for h in re.findall(r"[a-z0-9][a-z0-9.-]+\.(?:org|net|com|de|it|fr|edu|uk|jp|ru|cn|mx|br|no|fi|ie|lv|nz|za|ch|be|ac\.uk|eu|info|se)\b", byid[i]["hosts"]): hosts[h] += 1
open(os.path.join(sys.argv[2], "hosts.txt"), "w").write("\n".join(sorted(hosts)) + "\n")
tot = sum(len(c) for _, c in rounds)
print(f"{len(rounds)} rounds ({FIRST}–{rounds[-1][0]}), {tot} runs, {len(used)} candidates used, {len(res)} in reserve, {len(large)} LARGE decisions, {len(hosts)} hosts")
for rn, cur in rounds: print(rn, [r["rid"] for r in cur], len({r['track'] for r in cur}), 'tracks', sum(bool(r['newlang']) for r in cur), 'new')

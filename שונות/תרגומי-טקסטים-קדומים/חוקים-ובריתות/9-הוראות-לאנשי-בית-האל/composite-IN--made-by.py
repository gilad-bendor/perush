"""composite-IN--made-by.py – the one-off generator of composite-IN.tsv (Round 4 run 6 Sub3, 2026-10-25), kept for the
record of the decisions (the § map, the leads, the restorations). THE TSV IS NOW THE SOURCE: do not re-run this over an
edited TSV. Run from the corpus root (שונות/תרגומי-טקסטים-קדומים/) with python3 -I, if ever:
    python3 -I "חוקים-ובריתות/9-הוראות-לאנשי-בית-האל/composite-IN--made-by.py" [--measure]
--measure prints, per lead row, the preserved signs of the lead and of its best aligned duplicate (the lead rule).

M: § -> (lead segments [(ms, first, last)], duplicates [(ms, first, last)]), in 1-based line indices of `tlh2md.py lines`.
§ numbers: Sturtevant & Bechtel 1935 (§§1–19 + colophon) = KUB 13.4's 18 dividers + the one lost in its col. ii gap
(KBo 50.283+ ii 16)."""
import sys, re
sys.path.insert(0, "tools"); import tlh2md
D = "sources/TLHdig/CTH-264/"
A, B, C, DD, E, F, H = "KUB 13.4", "KBo 50.276b+", "KBo 50.283+", "KUB 26.31+", "KBo 50.279+", "KUB 31.94+", "KUB 40.63"
M = [
("1",  [(A, 1, 13)],  [(B, 2, 11)]),
("2",  [(A, 14, 33)], [(B, 13, 13), (B, 15, 20), (C, 1, 3), ("KBo 69.82", 1, 3), ("KBo 50.278", 1, 1)]),
("3",  [(A, 34, 38)], [(B, 21, 24), (C, 4, 7), ("KBo 50.278", 2, 6)]),
("4",  [(A, 39, 49)], [(B, 25, 34), (C, 8, 15), ("KBo 54.214", 1, 7), ("KBo 50.278", 7, 7)]),
("5",  [(A, 50, 59)], [(B, 35, 43), (C, 16, 24), (H, 1, 7), ("KBo 50.274", 1, 6)]),
# §6: KUB 13.4 i 60′–66′, then its lost col. ii top from KBo 50.283+ ii 6–16 (A ii 1′–4′ are traces)
("6",  [(A, 60, 66), (C, 30, 40)], [(C, 25, 29), (H, 8, 19), (A, 67, 70), ("KBo 61.323", 1, 4)]),
# §7: KBo 50.283+ ii 17–26 where KUB 13.4 ii 5′–16′ is broken, then KUB 13.4 ii 17′–24′
("7",  [(C, 41, 50), (A, 83, 90)], [(A, 71, 82), (C, 51, 57), (B, 44, 59), (E, 1, 2), ("KBo 52.261", 1, 7)]),
("8",  [(A, 91, 117)], [(B, 60, 85), (C, 58, 70), (E, 3, 10), (E, 12, 20), ("KBo 69.82", 4, 8)]),
("9",  [(A, 118, 138)], [(B, 86, 86), (E, 21, 35), (F, 1, 9)]),
("10", [(A, 139, 163)], [(F, 10, 14), (DD, 1, 17), (DD, 19, 20), ("KBo 61.323", 5, 11), ("KBo 57.11", 1, 1)]),
("11", [(A, 164, 177)], [(DD, 21, 31), ("KBo 57.11", 2, 6), ("KBo 68.71", 1, 5), (C, 71, 75), (E, 36, 41)]),
("12", [(A, 178, 186)], [(C, 76, 84), (E, 42, 50)]),
("13", [(A, 187, 197)], [(C, 85, 95), (B, 87, 92), ("KBo 68.18", 1, 5)]),
("14", [(A, 198, 226)], [(C, 96, 120), (B, 93, 118), ("KBo 68.18", 6, 10), ("KBo 57.232", 1, 7)]),
# §15: KUB 13.4 iv 1 keeps no sign: the § opening from KBo 50.276b+ iii 9′
("15", [(B, 119, 119), (A, 228, 237)], [(A, 227, 227), (B, 120, 125), (H, 20, 24)]),
("16", [(A, 238, 250)], [(H, 25, 33)]),
("17", [(A, 251, 259)], []),
("18", [(A, 260, 281)], [(B, 126, 141), ("Dispersa 17", 1, 7)]),
("19", [(A, 282, 303)], [(B, 142, 159)]),
("colophon", [(A, 304, 307)], []),
]
REST = {  # (ms, idx) -> (new text, note)
 (C, 30): ("NINDA KAŠ GEŠTIN-ia-m]a ma-a-an a-pé-e-da-ni UD-ti a-*da*-an-na a-ku-wa-[an-na]",
           "KUB 13.4's col. ii top is lost: from KBo 50.283+ ii 6; its opening [e-ep-du], TLHdig's restoration that "
           "repeats the last word of KUB 13.4 i 66′, is left out ([ before NINDA kept)"),
}
NOTES = {
 (C, 30): None,
 (B, 119): "KUB 13.4 iv 1 keeps no sign ([ ]x x[): the § opening from KBo 50.276b+ iii 9′ (a gap of unknown length follows)",
}
for i in range(31, 41):
    NOTES[(C, i)] = "KUB 13.4's col. ii top is lost: from KBo 50.283+ ii %d (KUB 40.63 i 13′–19′ is the other copy)" % (i - 24)
for i in range(41, 51):
    NOTES[(C, i)] = "KUB 13.4 ii 5′–16′ is broken: from KBo 50.283+ ii %d (KBo 50.276b+ ii 1′–9′ the other copy)" % (i - 24)
NOTES[(A, 1)] = "traces; KBo 50.276b+ has a paragraph ruling before its i 1′ (= this § at KUB 13.4 i 3′): the opening of the text is lost"
NOTES[(A, 83)] = "KUB 13.4 leads again from ii 17′ (KBo 50.283+ ii 26–27 lacks this clause or keeps it only in its restoration; KBo 50.276b+ ii 9′–10′ has it)"
cache = {}
def L(st):
    if st not in cache: cache[st] = tlh2md.parse(D + st + ".xml")
    return cache[st]
def FL(ms, ln):
    lab = (("{" + ln["frag"] + "} ") if ln["frag"] else "") + ln["label"]
    same = [x for x in L(ms) if ((("{" + x["frag"] + "} ") if x["frag"] else "") + x["label"]) == lab]
    if len(same) > 1:
        lab += "#%d" % (1 + [id(x) for x in same].index(id(ln)))
    return lab
def toks(t):
    t = re.sub(r"[\[\]⸢⸣〈〉*!?]", "", t)
    return set(w for w in t.split() if len(w) > 2)
def signs(t):
    """preserved signs: the syllables / logogram parts outside [ ] (half-brackets count)"""
    inside = t.find("]") != -1 and (t.find("[") == -1 or t.find("]") < t.find("["))
    keep = []
    for ch in t:
        if ch == "[":
            inside = True; keep.append(" ")
        elif ch == "]":
            inside = False; keep.append(" ")
        elif not inside:
            keep.append(ch)
    t = "".join(keep)
    return len([s for s in re.split(r"[-\s.=˽]+", re.sub(r"[⸢⸣〈〉*!?{}()]", "", t)) if s and s != "x"])
def empty(ln):
    return not ln["text"].strip() or ln["text"].strip() in ("[", "]", "[ ]")
rows = []
measure = "--measure" in sys.argv
for sec, leads, mss in M:
    leadrows = []
    for lms, la, lb in leads:
        for i in range(la, lb + 1):
            ln = L(lms)[i - 1]
            txt, note = ln["text"], NOTES.get((lms, i)) or ""
            if (lms, i) in REST:
                txt, note = REST[(lms, i)]
            leadrows.append({"ms": lms, "lab": FL(lms, ln), "text": txt, "note": note, "wit": [], "best": 0})
    for ms, a, b in mss:
        W = [L(ms)[i - 1] for i in range(a, b + 1) if not empty(L(ms)[i - 1])]
        if not W:
            continue
        n, m = len(leadrows), len(W)
        sc = [[len(toks(w["text"]) & toks(r["text"])) - 1.5 * abs((i + .5) / m - (j + .5) / n) for j, r in enumerate(leadrows)] for i, w in enumerate(W)]
        dp = [[0.0] * n for _ in range(m)]; bk = [[0] * n for _ in range(m)]
        for j in range(n):
            dp[0][j] = sc[0][j]
        for i in range(1, m):
            best, bj = -1e9, 0
            for j in range(n):
                if dp[i - 1][j] > best:
                    best, bj = dp[i - 1][j], j
                dp[i][j] = sc[i][j] + best; bk[i][j] = bj
        j = max(range(n), key=lambda k: dp[m - 1][k]); path = [0] * m
        for i in range(m - 1, -1, -1):
            path[i] = j; j = bk[i][j]
        per = {}
        for ln, j in zip(W, path):
            w = f"{ms}:" + FL(ms, ln)
            if w not in leadrows[j]["wit"]:
                leadrows[j]["wit"].append(w)
            per[j] = per.get(j, 0) + signs(ln["text"])
        for j, s in per.items():
            leadrows[j]["best"] = max(leadrows[j]["best"], s)
    for n, r in enumerate(leadrows, 1):
        lab = f"col{n}" if sec == "colophon" else f"{sec}.{n}"
        if measure:
            ls = signs(r["text"])
            flag = "  <-- a duplicate keeps more than 1.5x" if r["best"] > 1.5 * max(ls, 1) and r["best"] >= 4 else ""
            print(f"{lab}\t{r['ms']} {r['lab']}\tlead {ls}\tbest dup {r['best']}{flag}")
        rows.append((lab, sec, r["ms"], r["lab"], r["text"], "; ".join(r["wit"]), r["note"]))
if not measure:
    out = ["label\tsec\tms\tms_lines\ttext\twitnesses\tnote"] + ["\t".join(x) for x in rows]
    p = "חוקים-ובריתות/9-הוראות-לאנשי-בית-האל/composite-IN.tsv"
    open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")
    print(len(rows), "rows")

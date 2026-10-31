"""composite-HL2--made-by.py – the one-off generator of composite-HL2.tsv (Round 4 run 6 Sub2, 2026-10-25), kept
for the record of the decisions (the § map, the leads, the splits, the restorations). THE TSV IS NOW THE SOURCE: do not
re-run this over an edited TSV. Run from the corpus root (שונות/תרגומי-טקסטים-קדומים/) with python3 -I, if ever.
The § map M: § -> [(manuscript, first, last)] in 1-based line indices of `tlh2md.py lines`; the first entry is the lead
unless LEADSEL says otherwise."""
# order of the tablet; "split" handled later
M = [
("101", [("KBo 6.12",1,7), ("KUB 29.23+",1,2)]),
("102", [("KBo 6.12",8,10), ("KUB 29.23+",3,5)]),
("103", [("KBo 6.12",11,14), ("KUB 29.23+",6,9)]),
("104", [("KBo 6.12",15,16), ("KUB 29.23+",10,11), ("KBo 19.6",2,2)]),
("105", [("KBo 6.12",17,21), ("KUB 29.23+",12,16), ("KBo 19.6",3,6), ("KBo 6.10+",3,7), ("KBo 6.11",2,3)]),
("106", [("KBo 6.11",4,7), ("KBo 6.12",22,25), ("KUB 29.23+",17,20), ("KUB 29.24+",1,5), ("KBo 6.10+",8,10), ("KBo 25.85+",1,3), ("KBo 19.9",2,4)]),
("107", [("KBo 6.11",8,11), ("KBo 6.12",26,28), ("KUB 29.23+",21,23), ("KUB 29.24+",6,9), ("KBo 6.10+",12,14), ("KBo 25.85+",4,6), ("KBo 19.9",5,8)]),
("108", [("KBo 6.11",12,15), ("KBo 6.12",29,30), ("KUB 29.23+",24,27), ("KUB 29.24+",10,14), ("KBo 6.10+",15,18), ("KBo 19.9",9,12), ("KBo 25.85+",7,7)]),
("109", [("KBo 6.11",16,17), ("KUB 29.23+",28,28), ("KBo 6.10+",19,20), ("KBo 6.16",2,3)]),
("110", [("KBo 6.11",18,19), ("KUB 29.23+",29,30), ("KBo 6.10+",21,22), ("KBo 6.16",4,6)]),
("111", [("KUB 29.23+",31,31), ("KBo 6.11",20,20), ("KBo 6.10+",23,23), ("KBo 6.16",7,7)]),
("112", [("KBo 6.11",21,23), ("KBo 6.10+",24,26), ("KUB 29.24+",16,17)]),
("113", [("KBo 6.11",24,27), ("KBo 6.10+",27,30), ("KUB 29.24+",18,23), ("FHL 90",1,4)]),
("118", [("KBo 25.85+",8,13), ("KBo 31.66+",1,5), ("KBo 31.63",1,2)]),
("119", [("KBo 25.85+",14,16), ("KBo 31.66+",6,8), ("KBo 31.63",3,5)]),
("120", [("KBo 31.66+",9,10), ("KBo 25.85+",17,18), ("KBo 31.63",6,7)]),
("121", [("KBo 31.66+",11,14), ("KBo 25.85+",19,22), ("KBo 6.12",31,36), ("KBo 31.63",8,9)]),
("122", [("KBo 31.66+",15,16), ("KBo 6.12",37,39), ("KBo 25.85+",23,24), ("KBo 14.66+",1,3)]),
("123", [("KBo 6.12",40,42), ("KBo 6.10+",32,33), ("KUB 29.26+",1,2), ("KBo 19.7+",1,2)]),
("124", [("KBo 6.10+",34,38), ("KBo 19.7+",3,7), ("KUB 29.26+",3,6), ("KBo 31.66+",17,20), ("KBo 6.12",43,48)]),
("125", [("KBo 6.10+",39,41), ("KUB 29.26+",7,8), ("KBo 19.7+",7,8), ("KBo 31.66+",21,23), ("KBo 25.85+",25,26), ("KBo 6.12",49,50)]),
("126", [("KBo 6.10+",42,47), ("KUB 29.26+",9,12), ("KBo 31.66+",24,29), ("KBo 25.85+",27,30), ("Bo 8202",1,7), ("KBo 6.12",51,53)]),
("127", [("KBo 6.10+",48,50), ("KBo 25.85+",31,32), ("KUB 29.26+",13,13), ("Bo 8202",8,8)]),
("128", [("KBo 6.10+",51,56), ("KBo 25.85+",33,36)]),
("129", [("KBo 6.10+",57,60)]),
("130", [("KBo 6.10+",61,63)]),
("131", [("KBo 6.10+",64,65)]),
("132", [("KBo 6.10+",66,68)]),
("133", [("KBo 6.10+",69,71)]),
("142", [("KBo 6.10+",72,75)]),
("143", [("KBo 6.10+",76,79), ("KBo 31.64",1,5), ("KBo 25.85+",44,44)]),
("144", [("KBo 25.85+",45,48), ("KBo 6.10+",80,84)]),
("145", [("KBo 25.85+",49,50), ("KBo 6.10+",85,87), ("HFAC 5",1,4)]),
("146a", [("KBo 25.85+",51,54), ("KBo 6.10+",88,92), ("KBo 14.67",1,2)]),
("146b", [("KBo 25.85+",55,57)]),
("147", [("KBo 25.85+",58,59), ("KBo 6.10+",93,95), ("KBo 14.67",3,4)]),
("148", [("KBo 25.85+",60,61), ("KBo 6.10+",96,98), ("KBo 14.67",5,6)]),
("149", [("KBo 6.10+",99,102), ("KBo 25.85+",62,64), ("KBo 14.66+",4,5), ("KBo 14.67",7,9)]),
("150", [("KBo 14.66+",6,7), ("KBo 25.85+",65,66), ("KBo 6.10+",103,104), ("KBo 14.67",10,11)]),
("151", [("KBo 25.85+",67,68), ("KBo 14.66+",8,9), ("KBo 6.10+",105,107), ("KBo 14.67",12,13)]),
("152", [("KBo 25.85+",69,70), ("KBo 14.66+",10,11), ("KBo 6.10+",108,109), ("KBo 14.67",14,14)]),
("157", [("KBo 25.85+",71,73), ("KBo 6.26",1,5), ("KBo 14.66+",12,12), ("KBo 19.7+",10,11), ("KUB 29.24+",25,28)]),
("158a", [("KBo 25.85+",74,76), ("KBo 6.26",6,9), ("KBo 19.7+",12,14)]),
("158b", [("KBo 25.85+",77,77), ("KBo 6.26",9,10), ("KUB 29.31",1,1)]),
("159", [("KBo 25.85+",78,78), ("KBo 6.26",11,12), ("KUB 29.31",2,3)]),
("160a", [("KBo 25.85+",79,79), ("KBo 6.26",13,14), ("KUB 29.31",4,4), ("KBo 65.169",1,2)]),
("160b", [("KBo 25.85+",80,80), ("KBo 6.26",14,15), ("KUB 29.31",5,7), ("KBo 6.15",2,4)]),
("161", [("KBo 25.85+",81,81), ("KBo 6.26",16,17), ("KUB 29.31",8,9), ("KBo 6.15",5,6), ("KBo 65.169",3,4)]),
("162", [("KBo 6.26",18,21), ("KBo 6.15",7,9), ("KUB 29.31",10,12), ("KBo 31.65",2,3), ("KBo 65.169",5,6)]),
("162b", [("KBo 6.15",10,13), ("KBo 6.10+",112,115)]),
("163", [("KBo 6.26",22,27), ("KBo 31.66+",33,38), ("KBo 6.15",14,17), ("KBo 6.10+",116,118), ("HFAC 4",1,5), ("KBo 67.269",1,6), ("KBo 25.85+",82,82)]),
("164", [("KBo 6.26",28,30), ("KBo 25.85+",83,84), ("KBo 31.66+",39,41), ("HFAC 4",6,7)]),
("165", [("KBo 6.26",31,33), ("KBo 25.85+",84,86), ("KBo 31.66+",42,44)]),
("166", [("KBo 6.26",34,38), ("KBo 25.85+",87,90)]),
("167", [("KBo 6.26",39,45), ("KBo 25.85+",91,95), ("KBo 66.239",1,4)]),
("168", [("KBo 25.85+",96,98), ("KBo 6.26",46,49), ("KBo 6.13+",1,5), ("KBo 6.11",29,32), ("VSNF 12.127",1,5), ("KBo 66.239",5,6)]),
("169", [("KBo 6.26",50,53), ("KBo 6.13+",6,9), ("KBo 25.85+",99,101), ("VSNF 12.127",6,9)]),
("170", [("KBo 6.26",54,55), ("KBo 6.13+",10,12), ("VSNF 12.127",10,11), ("KBo 25.85+",102,103)]),
("171", [("KBo 6.26",56,61), ("KBo 6.13+",13,18), ("VSNF 12.127",12,13), ("KBo 25.85+",104,104)]),
("172", [("KBo 6.26",62,63), ("KBo 6.13+",19,21), ("KBo 25.85+",105,106)]),
("173a", [("KBo 6.26",64,67), ("KBo 25.85+",107,108)]),
("173b", [("KBo 6.26",67,68), ("KBo 25.85+",109,109)]),
("174", [("KBo 6.26",69,69), ("KBo 25.85+",110,110)]),
("175", [("KBo 6.26",70,73), ("KBo 25.85+",111,113)]),
("176a", [("KBo 6.26",74,76), ("KBo 25.85+",114,115), ("KUB 29.23+",32,33)]),
("176b", [("KBo 6.26",76,79), ("KBo 25.85+",116,117), ("KUB 29.23+",34,35)]),
("177", [("KBo 6.26",80,82), ("KBo 25.85+",118,119), ("KUB 29.23+",36,37)]),
("178", [("KBo 6.26",83,88), ("KUB 29.23+",38,43), ("KBo 25.85+",120,123)]),
("179", [("KBo 6.26",89,90), ("KUB 29.23+",44,45), ("KUB 29.33+",4,5)]),
("180", [("KBo 6.26",91,94), ("KUB 29.33+",5,8), ("KUB 29.23+",46,49)]),
("181", [("KBo 6.26",95,100), ("KUB 29.33+",9,16)]),
("182", [("KBo 6.26",101,108), ("KUB 29.33+",17,20), ("KBo 31.65",7,7)]),
("183", [("KBo 6.26",109,113)]),
("184", [("KBo 6.26",114,114)]),
("185a", [("KBo 6.26",115,121)]),
("185b", [("KBo 6.26",121,121)]),
("186", [("KBo 6.26",122,125), ("KUB 29.34+",1,1)]),
("187", [("KBo 6.26",126,128), ("KUB 29.33+",21,22), ("KUB 29.34+",2,4)]),
("188", [("KBo 6.26",129,131), ("KUB 29.33+",23,28), ("KUB 29.34+",5,7)]),
("189", [("KBo 6.26",132,134), ("KUB 29.33+",29,33), ("KUB 29.34+",8,10)]),
("190", [("KBo 6.26",135,137), ("KUB 29.33+",34,36), ("KUB 29.34+",11,13)]),
("191", [("KUB 29.34+",14,17), ("KBo 6.26",138,141)]),
("192", [("KUB 29.34+",17,18), ("KBo 6.26",143,143)]),
("193", [("KUB 29.34+",19,21), ("KBo 6.26",146,149), ("KBo 25.85+",125,127)]),
("194", [("KBo 25.85+",128,131), ("KBo 6.26",150,154), ("KUB 29.34+",22,25), ("KBo 6.13+",36,37)]),
("195a", [("KBo 6.26",155,156), ("KUB 29.34+",26,27), ("KBo 25.85+",132,132), ("KUB 29.33+",37,38), ("KBo 6.13+",38,39)]),
("195b", [("KBo 6.26",156,158), ("KUB 29.34+",27,28), ("KBo 25.85+",133,133), ("KUB 29.33+",39,40), ("KBo 6.13+",40,41)]),
("195c", [("KBo 6.26",158,159), ("KUB 29.34+",28,29), ("KBo 25.85+",134,135), ("KUB 29.33+",41,42), ("KBo 6.13+",42,43)]),
("196", [("KBo 6.26",160,164), ("KUB 29.34+",30,33), ("KBo 25.85+",136,138), ("KBo 6.13+",44,45)]),
("197", [("KBo 6.26",165,168), ("KUB 29.34+",34,36)]),
("198", [("KBo 6.26",169,174), ("KUB 29.34+",37,40)]),
("199", [("KBo 6.26",175,181), ("KBo 63.10",1,5)]),
("200a", [("KBo 6.26",182,186), ("KUB 29.33+",43,45)]),
("200b", [("KBo 6.26",186,190), ("KUB 29.33+",46,50)]),
("colophon", [("KBo 6.13+",47,47)]),
]
import sys, re, os
sys.path.insert(0, "tools"); import tlh2md
D = "sources/TLHdig/CTH-292/"
cache = {}
def L(st):
    if st not in cache: cache[st] = tlh2md.parse(D + st + ".xml")
    return cache[st]
OS = "KBo 25.85+"
# lead manuscript and index range per § (index = tlh2md `lines` number); default: first entry of secmap
LEADSEL = {  # § -> (ms, a, b)
 "104": ("KUB 29.23+", 10, 11), "105": ("KUB 29.23+", 12, 16), "106": ("KUB 29.23+", 17, 20),
 "111": ("KUB 29.23+", 31, 31), "113": ("KUB 29.24+", 18, 23), "124": ("KUB 29.26+", 3, 6),
 "169": ("KBo 6.13+", 6, 9),
 "188": ("KUB 29.34+", 5, 7), "189": ("KUB 29.34+", 8, 10), "190": ("KUB 29.34+", 11, 13),
 "191": ("KUB 29.34+", 14, 17), "192": ("KUB 29.34+", 17, 18), "193": ("KUB 29.34+", 19, 21),
 "194": ("KUB 29.34+", 22, 25),
}
# split lines: (ms, idx) -> list of (§, text)
SPLIT = {
 ("KBo 6.26", 67): [("173a", "I-NA-AK-KI-SÚ"), ("173b", "ták-ku ARAD-aš iš-ḫi-iš-ši a-ra-〈u〉-ez-zi")],
 ("KBo 6.26", 76): [("176a", "UDU.NÍTA MÁŠ.GAL I-NA MU 3{KAM} ḫa-a-ši"), ("176b", "ták-ku DUMU UM-MI-A-AN")],
 ("KBo 6.26", 121): [("185a", "1 GÍN KÙ.BABBAR"), ("185b", "2 GU₄.GAL UZU-ŠU-NU ku-iš wa-a-ši 1 UDU pa-a-i")],
 ("KBo 6.26", 156): [("195a", "ḫu-u-iš-wa-an-za ḫu-u-ur-ki-il"), ("195b", "ták-ku LÚ-aš")],
 ("KBo 6.26", 158): [("195b", "ḫu-u-ur-ki-il"), ("195c", "ták-ku DUMU.MUNUS-SÀ ḫar-zi ta *an-ni-iš-ši*")],
 ("KBo 6.26", 186): [("200a", "Ú-UL *ḫa-ra-tar*"), ("200b", "ták-ku DUMU-an an-[na-nu-ma]-⸢an-zi⸣")],
 ("KUB 29.34+", 17): [("191", "ḫu-ur-ki-il"), ("192", "ták-ku LÚ-aš DAM-SÚ a-ki A-ḪA-[SÀ DAM-an-ni da-a-i]")],
}
SPLITNOTE = "the manuscript line holds the end of one § and the start of the next: split at the § boundary"
# extra lead rows appended to a § (continuations from another manuscript, later-only lines)
EXTRA = {
 "122": [("KBo 6.12", 39, None, "continuation from KBo 6.12 ii 9 (KBo 31.66+ breaks off after i 16′)")],
 "192": [("KBo 6.26", 143, None, "later version only: KBo 6.26 iii 37 (written over an erasure) has another law at this place – translate as a later-only line, tagged {נוסח מאוחר}")],
}
# restorations in a lead row: (ms, idx) -> (new text, note)
REST = {
 ("KBo 6.12", 42): ("3 G[ÍN.GÍN KÙ.BABBAR", "restored from KBo 6.10+ ii 2′ (3 GÍN.GÍN KÙ.B[ABBAR)"),
}
NOTES = {  # (ms, idx) -> note (no text change)
 ("KUB 29.23+", 31): "lead: the only copy that keeps the opening (še-e]-ni 'image', the older version); the rest is TLHdig's restoration from KBo 6.11 i 20′ (e-pa-a-ri …)",
}
def FL(ms, ln):
    lab = (("{"+ln["frag"]+"} ") if ln["frag"] else "") + ln["label"]
    same = [x for x in L(ms) if ((("{"+x["frag"]+"} ") if x["frag"] else "") + x["label"]) == lab]
    if len(same) > 1:
        lab += "#%d" % (1 + [id(x) for x in same].index(id(ln)))
    return lab
def toks(t):
    t = re.sub(r"[\[\]⸢⸣〈〉*!?]", "", t)
    return set(w for w in t.split() if len(w) > 2 and w not in ("ták-ku", "ku-iš-ki", "pa-a-i", "KÙ.BABBAR", "GÍN.GÍN", "GÍN"))
rows = []
for sec, mss in M:
    lead = LEADSEL.get(sec, mss[0])
    lms, la, lb = lead
    leadrows = []
    for i in range(la, lb + 1):
        ln = L(lms)[i - 1]
        if not ln["text"].strip() or ln["text"].strip() in ("[", "]"):
            continue
        txt, note = ln["text"], NOTES.get((lms, i), "")
        if (lms, i) in SPLIT:
            parts = [p for s, p in SPLIT[(lms, i)] if s == sec]
            if not parts:
                continue
            txt, note = parts[0], SPLITNOTE
        if (lms, i) in REST:
            txt, note = REST[(lms, i)]
        leadrows.append({"ms": lms, "lab": FL(lms, ln), "text": txt, "note": note, "wit": []})
    for ms, i, txt, note in EXTRA.get(sec, []):
        ln = L(ms)[i - 1]
        leadrows.append({"ms": ms, "lab": FL(ms, ln), "text": txt or ln["text"], "note": note, "wit": []})
    # witnesses: per manuscript, an order-preserving alignment of its lines to the lead rows (max word overlap)
    for ms, a, b in mss:
        W = []
        for i in range(a, b + 1):
            if ms == lms and la <= i <= lb:
                continue
            ln = L(ms)[i - 1]
            if not ln["text"].strip() or ln["text"].strip() in ("[", "]"):
                continue
            if any(r["ms"] == ms and r["lab"] == FL(ms, ln) for r in leadrows):
                continue
            W.append(ln)
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
        for ln, j in zip(W, path):
            w = f"{ms}:" + FL(ms, ln)
            if w not in leadrows[j]["wit"]:
                leadrows[j]["wit"].append(w)
    for n, r in enumerate(leadrows, 1):
        lab = f"col{n}" if sec == "colophon" else f"{sec}.{n}"
        rows.append((lab, sec, r["ms"], r["lab"], r["text"], "; ".join(r["wit"]), r["note"]))
out = ["label\tsec\tms\tms_lines\ttext\twitnesses\tnote"] + ["\t".join(x) for x in rows]
p = "חוקים-ובריתות/8-החוקים-החתיים/composite-HL2.tsv"
open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(rows), "rows")

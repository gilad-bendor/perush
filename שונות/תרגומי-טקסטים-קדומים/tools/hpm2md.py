#!/usr/bin/env python3
"""hpm2md.py – the Hethitologie-Portal Mainz (HPM, hethport.net) critical editions → line data.

HPM's editions (CC BY-SA 4.0) are clause-numbered ("kola") scores: for each clause a composite ("--", the editor's
master text) and every manuscript's line with its tablet label, plus the editor's translation per clause.
Two kinds are read:
  - CHIL   : the Corpus of Hittite Laws (Torri, Carnevale, Warbinek), txhet_chil, one partitur page with word
             glosses (German, from TLHdig) and an Italian translation inside; § titles "(HL n)".
  - BESRIT : the "Beschwörungsrituale" editions (txhet_besrit), one partitur page per §, a separate translatio
             page (German or English).

Usage (run with python3 -I):
  hpm2md.py fetch CHIL "CTH 291.1" OUTDIR            # raw HTML into OUTDIR/raw/
  hpm2md.py fetch BESRIT "CTH 394" OUTDIR [ED] [LG]   # ED = the editor string of the HPM index, LG = DE/EN/FR
  hpm2md.py parse OUTDIR                              # OUTDIR/edition.json + reading-edition.md + translation-rank3.md

edition.json: {"kind", "cth", "citation", "sections": [{"id","title","hl"}], "clauses": [{"n","sec","master",
"words":[[form, gloss]], "mss":[[siglum, label, text]], "tr"}], "notes": {...}}

Bracket marks are kept as HPM prints them: [ ] lost/restored, ⸢ ⸣ (HPM ⌈ ⌉) damaged, determinatives as {m}, {URU}.
Downloads are untrusted: this script only reads them (no execution); keep it out of the download folder.
"""
import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

BASE = "https://hethport.net/"
UA = {"User-Agent": "Mozilla/5.0 (perush ancient-translations; per-text fetch)"}


def get(url, path):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return open(path, encoding="utf-8").read()
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=UA)
            t = urllib.request.urlopen(req, timeout=120).read().decode("utf-8", "replace")
            os.makedirs(os.path.dirname(path), exist_ok=True)
            open(path, "w", encoding="utf-8").write(t)
            time.sleep(1.0)
            return t
        except Exception as e:  # noqa
            print("retry", url, e, file=sys.stderr)
            time.sleep(2 ** (attempt + 1))
    raise SystemExit("failed: " + url)


def q(s):
    return urllib.parse.quote(s, safe="=&?/:.")


def fetch(kind, cth, out, ed="", lg="DE"):
    raw = os.path.join(out, "raw")
    meta = {"kind": kind, "cth": cth, "ed": ed, "lg": lg}
    if kind == "CHIL":
        x = urllib.parse.quote(cth)
        get(f"{BASE}txhet_chil/partitur.php?xst={x}&lang=EN&praep=1", os.path.join(raw, "partitur.html"))
        get(f"{BASE}txhet_chil/intro.php?xst={urllib.parse.quote(cth.rsplit('.', 1)[0])}&lang=EN&praep=1",
            os.path.join(raw, "intro.html"))
    else:
        e = urllib.parse.quote(ed)
        x = urllib.parse.quote(cth)
        intro = get(f"{BASE}txhet_besrit/intro.php?xst={x}&prgr=&lg={lg}&ed={e}", os.path.join(raw, "intro.html"))
        p0 = get(f"{BASE}txhet_besrit/partitur.php?xst={x}&prgr=&lg={lg}&ed={e}", os.path.join(raw, "partitur-index.html"))
        prgs = []
        for m in re.finditer(r'partitur\.php\?xst=[^&]*&prgr=(.+?)&lg=', p0):
            p = html.unescape(m.group(1))
            if p and p not in prgs:
                prgs.append(p)
        meta["paragraphs"] = prgs
        for i, p in enumerate(prgs):
            get(f"{BASE}txhet_besrit/partitur.php?xst={x}&prgr={urllib.parse.quote(p)}&lg={lg}&ed={e}",
                os.path.join(raw, f"partitur-{i:03d}.html"))
        get(f"{BASE}txhet_besrit/translatio.php?xst={x}&expl=&lg={lg}&ed={e}", os.path.join(raw, "translatio.html"))
    json.dump(meta, open(os.path.join(out, "fetch-meta.json"), "w"), ensure_ascii=False, indent=1)
    print("fetched", cth, "into", out)


# ---------------------------------------------------------------- text cleaning
def clean_frag(s, kind):
    """HPM inline HTML of one word or line → our transliteration string."""
    s = re.sub(r'href="q\.php\?[^"]*"', "", s)
    s = re.sub(r"<span style='alpha.*?</span>;color:white;'>[␣\s]*</span>", "", s, flags=re.S)
    s = s.replace("␣", "")
    s = re.sub(r"<span class=['\"](?:ttp3text|ttp3grau)['\"]>.*?</span>", "", s, flags=re.S)
    s = re.sub(r"<A NAME=[^>]*>.*?</A>", "", s, flags=re.S | re.I)  # footnote anchors
    s = re.sub(r"<span class=['\"](?:AO-LineNrExpl|AOLineNrExpl)['\"][^>]*>.*?</span>", "", s, flags=re.S)
    s = re.sub(r"<span class=['\"](?:det|AODeterm)['\"]>(.*?)</span>", r"{\1}", s, flags=re.S)
    s = re.sub(r"<span class=['\"]AO--index['\"]>(.*?)</span>", r"\1", s, flags=re.S)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    s = s.replace("⌈", "⸢").replace("⌉", "⸣").replace("˹", "⸢").replace("˺", "⸣").replace("‑", "-")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_chil(out):
    t = open(os.path.join(out, "raw", "partitur.html"), encoding="utf-8").read()
    cit = re.search(r"Citatio:</span>(.*?)</", t, re.S)
    body = t[t.find("<!-- Inhalt-Zelle -->"):]
    sections, clauses = [], []
    cur = None
    # walk the table rows in order
    for m in re.finditer(r"<tr>(.*?)</tr>", body, re.S):
        pg = re.search(r"<p class='AOParagrNr[^']*'>(.*?)</p>", m.group(1), re.S)
        if pg:
            tx = html.unescape(re.sub(r"<span class='ttp3grau'>(.*?)</span>", r" [\1]", pg.group(1)))
            tx = re.sub(r"<[^>]+>", "", tx).strip()
            idm = re.search(r"\[ID=(\d+)\]", tx)
            hl = re.search(r"\(HL ([^)]+)\)", tx)
            title = re.sub(r"\s*\[ID=\d+\]", "", tx)
            cur = {"id": idm.group(1) if idm else "", "title": title, "hl": hl.group(1) if hl else ""}
            sections.append(cur)
            continue
        row = m.group(1)
        cm = re.search(r"<span class='clnr( master)? ttp3'><a name='clid([A-Za-z0-9]*)'[^>]*>([^<]+)</a>", row)
        if not cm:
            continue
        master = bool(cm.group(1))
        n = cm.group(3).strip()
        em = re.search(r"<span class='expl[^']*'>\s*<a[^>]*>([^<]*)</a>(.*?)</span>", row, re.S)
        sig = (em.group(1) + clean_frag(em.group(2), "CHIL")).strip() if em else ""
        pm = re.search(r"<p class='AOTextline-Hit[^']*'>(.*?)</p>", row, re.S)
        line = pm.group(1) if pm else ""
        lab = re.search(r"<span class='AOLineNrExpl'[^>]*>(.*?)</span>", line, re.S)
        label = clean_frag(lab.group(1), "CHIL") if lab else ""
        words = []
        for w in re.finditer(r"<a([^>]*)>(.*?)</a>", re.sub(r"<span class='AOLineNrExpl'[^>]*>.*?</span>", "", line, flags=re.S), re.S):
            g = re.search(r"<span class='ttp3text'>(.*?)</span>", w.group(2), re.S)
            qm = re.search(r"[?&]q=([^&\"')]*)", html.unescape(w.group(1)))
            lem = ""
            if qm:
                qq = urllib.parse.unquote(qm.group(1))
                lem = re.sub(r"^[①-⑳\s]+", "", qq.split("@")[0]).strip()
            words.append([clean_frag(w.group(2), "CHIL"), html.unescape(re.sub("<[^>]+>", "", g.group(1))) if g else "", lem])
        text = clean_frag(re.sub(r"<span class='sep'>.*?</span>", "", line), "CHIL")
        trm = re.search(r"<p class='AOTranslat-(\w+)'>(.*?)</p>", row, re.S)
        if master:
            clauses.append({"n": n, "sec": cur["id"] if cur else "", "hl": cur["hl"] if cur else "",
                            "master": text, "words": [w for w in words if w[0]], "mss": [],
                            "tr": clean_frag(trm.group(2), "CHIL") if trm else "", "trlang": trm.group(1) if trm else ""})
        elif clauses:
            clauses[-1]["mss"].append([sig, label, text])
    notes = {}
    for f in re.finditer(r"<div class='fnz'>.*?<span class='FnSym(T?)'>(\d+)</span>.*?<div class='fnbod'>(.*?)</div>\s*</div>", t, re.S):
        notes[("T" if f.group(1) else "") + f.group(2)] = clean_frag(f.group(3), "CHIL")
    return {"kind": "CHIL", "citation": clean_frag(cit.group(1), "") if cit else "", "sections": sections,
            "clauses": clauses, "notes": notes}


def parse_besrit(out):
    meta = json.load(open(os.path.join(out, "fetch-meta.json")))
    sections, clauses, notes = [], [], {}
    cit = ""
    raw = os.path.join(out, "raw")
    files = sorted(f for f in os.listdir(raw) if re.fullmatch(r"partitur-\d+\.html", f))
    for i, f in enumerate(files):
        t = open(os.path.join(raw, f), encoding="utf-8").read()
        if not cit:
            c = re.search(r"Citatio:</span>(.*?)</span>", t, re.S)
            cit = clean_frag(c.group(1), "") if c else ""
        prg = meta["paragraphs"][i]
        sections.append({"id": prg, "title": prg, "hl": ""})
        body = t[t.find("<!-- Textteil-Zelle -->"):]
        for row in re.findall(r"<tr>(.*?)</tr>", body, re.S):
            kn = re.search(r'<div\s+class="AOKolonNr">\s*([^<]*?)\s*</div>', row)
            ex = re.search(r'<div\s+class="AOExemplar">(.*?)</div>', row, re.S)
            tl = re.search(r'<div\s+(?:id=\'master\'\s+)?class="AOTextline-Hit">(.*?)</div>', row, re.S)
            if not ex or not tl:
                continue
            sig = clean_frag(ex.group(1), "B")
            lab = re.search(r'<span class="AO-LineNrExpl">(.*?)</span>', tl.group(1), re.S)
            text = clean_frag(tl.group(1), "B")
            if kn and kn.group(1).strip() and not (clauses and clauses[-1]["n"] == kn.group(1).strip()
                                                   and clauses[-1]["sec"] == prg):
                clauses.append({"n": kn.group(1).strip(), "sec": prg, "hl": "", "master": text if sig == "--" else "",
                                "words": [], "mss": [], "tr": "", "trlang": meta.get("lg", "")})
                if sig != "--":
                    clauses[-1]["mss"].append([sig, clean_frag(lab.group(1), "B") if lab else "", text])
            elif clauses:
                clauses[-1]["mss"].append([sig, clean_frag(lab.group(1), "B") if lab else "", text])
        for fn in re.finditer(r"<span class='FnSym(T?)'>(\d+)</span>.*?<div class=\"FNO\">(.*?)</div>", t, re.S):
            notes[f"{prg}:{fn.group(1)}{fn.group(2)}"] = clean_frag(fn.group(3), "B")
    tp = os.path.join(raw, "translatio.html")
    if os.path.exists(tp):
        t = open(tp, encoding="utf-8").read()
        trs = {}
        for m in re.finditer(r'<span class="AOKolonNr">\s*([^<]*?)\s*</span>.*?<span class="AOTranslat-(\w+)">(.*?)</span>\s*</div>', t, re.S):
            trs[m.group(1).strip()] = (clean_frag(m.group(3), "B"), m.group(2))
        for c in clauses:
            if c["n"] in trs:
                c["tr"], c["trlang"] = trs[c["n"]]
        for fn in re.finditer(r"<span class='FnSymT'>(\d+)</span>.*?<div class=\"FNO\">(.*?)</div>", t, re.S):
            notes["T" + fn.group(1)] = clean_frag(fn.group(2), "B")
    return {"kind": "BESRIT", "cth": meta["cth"], "citation": cit, "sections": sections, "clauses": clauses, "notes": notes}


def parse(out):
    meta = json.load(open(os.path.join(out, "fetch-meta.json")))
    d = parse_chil(out) if meta["kind"] == "CHIL" else parse_besrit(out)
    d["cth"] = meta["cth"]
    json.dump(d, open(os.path.join(out, "edition.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    secname = {s["id"]: s for s in d["sections"]}
    L = [f"# {d['cth']} – HPM edition (reading edition, generated by tools/hpm2md.py)", "",
         f"Citation: {d['citation']}", "Licence: CC BY-SA 4.0 (Hethitologie-Portal Mainz).", "",
         "Per clause: the editor's composite (`--`), then every manuscript (siglum, tablet line). The translation is in "
         "`translation-rank3.md` (rank 3: read it only after drafting).", ""]
    last = None
    for c in d["clauses"]:
        if c["sec"] != last:
            s = secname.get(c["sec"], {"title": c["sec"]})
            L += ["", f"## {s['title']}", ""]
            last = c["sec"]
        L.append(f"**{c['n']}** `{c['master']}`")
        if c["words"]:
            L.append("  - glosses: " + " · ".join(f"`{w[0]}` {w[2]} \"{w[1]}\"" for w in c["words"]))
        for sig, lab, tx in c["mss"]:
            L.append(f"  - {sig} {lab}: `{tx}`")
    open(os.path.join(out, "reading-edition.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")
    T = [f"# {d['cth']} – the HPM editor's translation (rank 3; consult after drafting)", "",
         f"Citation: {d['citation']}", "Licence: CC BY-SA 4.0.", ""]
    last = None
    for c in d["clauses"]:
        if c["sec"] != last:
            T += ["", f"## {secname.get(c['sec'], {'title': c['sec']})['title']}", ""]
            last = c["sec"]
        T.append(f"**{c['n']}** {c['tr']}")
    if d["notes"]:
        T += ["", "## Notes", ""] + [f"- {k}: {v}" for k, v in d["notes"].items()]
    open(os.path.join(out, "translation-rank3.md"), "w", encoding="utf-8").write("\n".join(T) + "\n")
    print(d["cth"], len(d["sections"]), "sections,", len(d["clauses"]), "clauses,",
          sum(1 for c in d["clauses"] if not c["master"]), "without a composite,",
          sum(1 for c in d["clauses"] if not c["tr"]), "without a translation")


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__)
    elif a[0] == "fetch":
        fetch(a[1], a[2], a[3], *(a[4:6]))
    elif a[0] == "parse":
        parse(a[1])
    else:
        print(__doc__)

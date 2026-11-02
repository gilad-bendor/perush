#!/usr/bin/env python3
"""EUPT (Edition des ugaritischen poetischen Textkorpus, Göttingen; CC BY-SA 4.0) -> per-line JSON and Markdown.

EUPT serves its edition through a TextAPI (https://eupt.uni-goettingen.de/api/eupt/collection.json): per tablet a
manifest and two HTML views, `KTU_<t>_facsimile.html` (the transliteration line by line, with the epigraphic notes) and
`KTU_<t>_philology.html` (per poetic unit ≈ line: the vocalization with a morphological tag per word, the German and
English translations, and the philological notes). On 2026-10-31 it had KTU 1.14, 1.15, 1.16 (Kirta).

Usage (python3 -I):
  python3 -I tools/eupt2md.py fetch 1.14 1.15 1.16          # the raw files into sources/EUPT/raw/ (git-ignored)
  python3 -I tools/eupt2md.py convert 1.14 1.15 1.16        # sources/EUPT/text/KTU-<t>.json and .md (committed)

Line labels are converted to CUC's ("i 1" -> "I:1"); EUPT's line numbers are KTU³'s.
The JSON: {"lines": {label: {"translit": str, "epi": [notes]}}, "units": [{"id", "lines": [labels], "voc", "morph",
"de", "en", "notes": [[type, label, text]]}]}.
"""
import html
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
RAW = os.path.join(ROOT, "sources", "EUPT", "raw")
TEXT = os.path.join(ROOT, "sources", "EUPT", "text")
BASE = "https://eupt.uni-goettingen.de/api/eupt"
ROMAN = {"i": "I", "ii": "II", "iii": "III", "iv": "IV", "v": "V", "vi": "VI", "vii": "VII", "viii": "VIII"}


def label(s):
    s = s.strip()
    m = re.match(r"^([ivx]+)\s+(\d+)'?$", s)
    if m:
        return f"{ROMAN.get(m.group(1), m.group(1).upper())}:{m.group(2)}"
    return s


def lineid_label(lid):
    # line_1_14_I_6_2 -> I:6
    m = re.match(r"^line_\d+_\d+_([IVX]+)_(\d+)_\d+$", lid)
    if m:
        return f"{m.group(1)}:{m.group(2)}"
    m = re.match(r"^line_\d+_\d+_(\d+)_\d+$", lid)
    return m.group(1) if m else lid


def text_of(frag):
    frag = re.sub(r"<input[^>]*>", "", frag)
    frag = re.sub(r"<br\s*/?>", " ", frag)
    frag = re.sub(r"<[^>]+>", "", frag)
    return re.sub(r"\s+", " ", html.unescape(frag)).strip()


def notes_of(chunk):
    out = []
    for m in re.finditer(r'<li class="note-item"[^>]*>(.*?)</li>', chunk, re.S):
        body = m.group(1)
        t = re.search(r'<span class="noteType">([^<]*)</span>', body)
        head = re.search(r"</span>([^<:]*):", body)
        rest = body.split("</button>", 1)[-1]
        out.append([t.group(1) if t else "", (head.group(1).strip() if head else ""), text_of(rest)])
    return out


def fetch(t):
    os.makedirs(RAW, exist_ok=True)
    for kind in ("philology", "facsimile"):
        url = f"{BASE}/html/KTU_{t}_{kind}.html"
        data = urllib.request.urlopen(url, timeout=120).read()
        open(os.path.join(RAW, f"KTU_{t}_{kind}.html"), "wb").write(data)
    data = urllib.request.urlopen(f"{BASE}/KTU__{t}/manifest.json", timeout=60).read()
    open(os.path.join(RAW, f"KTU_{t}_manifest.json"), "wb").write(data)
    print("fetched", t)


def convert(t):
    fx = open(os.path.join(RAW, f"KTU_{t}_facsimile.html"), encoding="utf-8").read()
    ph = open(os.path.join(RAW, f"KTU_{t}_philology.html"), encoding="utf-8").read()
    lines = {}
    parts = re.split(r'(?=<div class="line-container">)', fx)
    for p in parts[1:]:
        m = re.search(r'<span class="line-nr[^"]*">([^<]+)</span><span class="line-body">(.*?)</div>', p, re.S)
        if not m:
            continue
        lab = label(m.group(1))
        body = re.sub(r'<span><label[^>]*class="notes-icon".*$', "", m.group(2), flags=re.S)
        lines[lab] = {"translit": text_of(body), "epi": notes_of(p)}
    units = []
    chunks = re.split(r'(?=<div class="unit" id=)', ph)
    for c in chunks[1:]:
        m = re.match(r'<div class="unit" id="([^"]+)" data-corresp="([^"]+)"', c)
        voc = re.search(r'<div class="vocalisation-text"[^>]*>(.*?)</div>', c, re.S)
        v = voc.group(1) if voc else ""
        morph = [text_of(x) for x in re.findall(r'<span class="morph">(.*?)</span>', v, re.S)]
        v = re.sub(r'<span class="ling_information">.*?</span></span>', " ", v, flags=re.S)
        v = re.sub(r'<span class="lb item">[^<]*</span>', " ", v)
        tr = {}
        for lang in ("de", "en"):
            x = re.search(rf'<div class="translation section-tab" data-lang="{lang}">(.*?)</div>', c, re.S)
            tr[lang] = text_of(x.group(1)) if x else ""
        labs = []
        for lid in m.group(2).split():
            lb = lineid_label(lid)
            if lb not in labs:
                labs.append(lb)
        units.append({"id": m.group(1), "lines": labs, "voc": text_of(v), "morph": morph,
                      "de": tr["de"], "en": tr["en"], "notes": notes_of(c)})
    os.makedirs(TEXT, exist_ok=True)
    json.dump({"tablet": f"KTU {t}", "source": f"{BASE}/KTU__{t}/manifest.json", "licence": "CC BY-SA 4.0",
               "lines": lines, "units": units},
              open(os.path.join(TEXT, f"KTU-{t}.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    md = [f"# KTU {t} – EUPT (Edition des ugaritischen poetischen Textkorpus), CC BY-SA 4.0", "",
          f"Converted by `tools/eupt2md.py` from {BASE}/KTU__{t}/manifest.json (raw HTML in `../raw/`, git-ignored).", ""]
    for u in units:
        md.append(f"## {', '.join(u['lines'])}")
        for lb in u["lines"]:
            if lb in lines:
                md.append(f"- translit {lb}: `{lines[lb]['translit']}`")
        md.append(f"- voc: {u['voc']}")
        md.append(f"- de: {u['de']}")
        md.append(f"- en: {u['en']}")
        md.append("")
    open(os.path.join(TEXT, f"KTU-{t}.md"), "w", encoding="utf-8").write("\n".join(md) + "\n")
    print(f"KTU {t}: {len(lines)} lines, {len(units)} units, "
          f"{sum(len(u['notes']) for u in units)} philological notes, {sum(len(l['epi']) for l in lines.values())} epigraphic")


def main(a):
    if len(a) < 2 or a[0] not in ("fetch", "convert"):
        sys.exit(__doc__)
    for t in a[1:]:
        (fetch if a[0] == "fetch" else convert)(t)


if __name__ == "__main__":
    main(sys.argv[1:])

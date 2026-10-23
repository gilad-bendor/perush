"""AED-TEI (the TLA's 2018 Egyptian corpus as TEI, CC BY-SA 4.0) -> line data for the corpus tools.
Run with python3 -I -B.

    python3 -I -B tools/aed2md.py lines FILE.xml [FROM [TO]]   print the lines (label + transliteration) of one text
    python3 -I -B tools/aed2md.py md FILE.xml OUT.md           a reading edition: every line, then each word with its
                                                              TLA lemma id, morphology and the TLA's German gloss in
                                                              context (from FILE_wt.xml); NO sentence translation
    python3 -I -B tools/aed2md.py tr FILE.xml [FROM [TO]]      the TLA's German sentence translations of the sentences
                                                              that touch the lines (from FILE_st.xml): rank 3 – read
                                                              only AFTER drafting (guidelines §3)

As a library (corpus tools import it):  aed2md.parse(path) -> [line], line = {"label", "text", "words": [word],
"sents": [sentence ids]}, word = {"id", "surf", "lemma", "feats", "gloss"}; aed2md.translations(path) -> {sentence id:
German}.

The AED files (github.com/simondschweitzer/aed-tei, files/<ID>.xml, <ID>_wt.xml, <ID>_st.xml) mark up a TLA text as
<s> sentences of <w lemmaRef="tla:…"><fs feats="…"/>surface</w>, with <lb n="[label]"/> for the manuscript's line
breaks (anywhere inside a sentence). A "line" here is the stretch between two <lb>s (the first line starts at the first
<lb>). The editorial markup is rendered in the surface as (Leiden / TLA conventions; see the corpus renderings §2):
    <supplied reason="lost">x</supplied>       [x]     lost, restored by the editor
    <supplied reason="defective">x</supplied>  (x)     not written (defective writing), supplied by the editor
    <supplied reason="omitted">x</supplied>    ⟨x⟩     omitted by the scribe, supplied by the editor
    <surplus>x</surplus>                       {x}     written by the scribe, superfluous
    <damage>x</damage>                         ⸢x⸣     damaged but legible
    <unclear>x</unclear>                       x?      reading uncertain (a "?" after the word)
    <add place="…">x</add>                     x       an ancient insertion (kept, unmarked)
    <gap/>                                     […]     lost, not restored
Never execute anything from a download; this script only reads the XML as text.
"""
import html
import os
import re
import sys

TOK = re.compile(r'<lb n="([^"]*)"\s*/>|<s xml:id="([^"]+)"[^>]*>|<w xml:id="([^"]+)" lemmaRef="([^"]*)"[^>]*>(.*?)</w>'
                 r'|<gap\b[^>]*/>|<gap\b[^>]*>\s*</gap>', re.S)


def _surface(inner):
    feats = (re.search(r'feats="([^"]*)"', inner) or [None, ""])[1]
    s = re.sub(r"<fs[^>]*/>", "", inner)
    s = re.sub(r"<unclear>(.*?)</unclear>", r"\1⁣", s, flags=re.S)        # marker, turned into '?' at the end
    for _ in range(3):
        s = re.sub(r'<supplied reason="lost">(.*?)</supplied>', r"[\1]", s, flags=re.S)
        s = re.sub(r'<supplied reason="defective">(.*?)</supplied>', r"(\1)", s, flags=re.S)
        s = re.sub(r'<supplied reason="omitted">(.*?)</supplied>', r"⟨\1⟩", s, flags=re.S)
        s = re.sub(r'<supplied[^>]*>(.*?)</supplied>', r"[\1]", s, flags=re.S)
        s = re.sub(r"<surplus>(.*?)</surplus>", r"{\1}", s, flags=re.S)
        s = re.sub(r"<damage>(.*?)</damage>", r"⸢\1⸣", s, flags=re.S)
        s = re.sub(r"<add[^>]*>(.*?)</add>", r"\1", s, flags=re.S)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s).strip()
    if "⁣" in s:
        s = s.replace("⁣", "") + "?"
    s = s.replace("][", "").replace("⸣⸢", "").replace(")(", "").replace("⟩⟨", "").replace("}{", "")
    return s, feats


def _glosses(path):
    wt = path[:-4] + "_wt.xml"
    if not os.path.exists(wt):
        return {}
    t = open(wt, encoding="utf-8").read()
    return {m.group(1): html.unescape(re.sub(r"\s+", " ", m.group(2)).strip())
            for m in re.finditer(r'<w xml:lang="de" corresp="src:([^"]+)">(.*?)</w>', t, re.S)}


def parse(path):
    t = open(path, encoding="utf-8").read()
    body = t[t.index("<body>"):]
    gl = _glosses(path)
    lines, cur_s = [], None
    for m in TOK.finditer(body):
        lb, sid, wid, lem, inner = m.groups()
        if lb is not None:
            lab = lb.strip("[]").strip()
            lines.append({"label": lab, "words": [], "sents": [cur_s] if cur_s else []})
            continue
        if sid:
            cur_s = sid
            if lines and sid not in lines[-1]["sents"]:
                lines[-1]["sents"].append(sid)
            continue
        if not lines:
            lines.append({"label": "?", "words": [], "sents": [cur_s] if cur_s else []})
        if wid is None:
            lines[-1]["words"].append({"id": "", "surf": "[…]", "lemma": "", "feats": "gap", "gloss": ""})
            continue
        surf, feats = _surface(inner)
        lines[-1]["words"].append({"id": wid, "surf": surf, "lemma": lem.replace("tla:", ""), "feats": feats,
                                   "gloss": gl.get(wid, "")})
        if cur_s and cur_s not in lines[-1]["sents"]:
            lines[-1]["sents"].append(cur_s)
    for ln in lines:
        ln["text"] = " ".join(w["surf"] for w in ln["words"])
    return lines


def translations(path):
    st = path[:-4] + "_st.xml"
    if not os.path.exists(st):
        return {}
    t = open(st, encoding="utf-8").read()
    return {m.group(1): html.unescape(re.sub(r"\s+", " ", m.group(2)).strip())
            for m in re.finditer(r'<s xml:lang="de" corresp="src:([^"]+)">(.*?)</s>', t, re.S)}


def title(path):
    t = open(path, encoding="utf-8").read(20000)
    m = re.search(r"<title>(.*?)</title>", t, re.S)
    return html.unescape(m.group(1)).strip() if m else os.path.basename(path)


def _range(lines, a=None, b=None):
    labs = [l["label"] for l in lines]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(lines) - 1)
    return lines[i:j + 1]


def fmt_word(w):
    if w["feats"] == "gap":
        return "`[…]` – lost"
    g = f' "{w["gloss"]}"' if w["gloss"] else ""
    return f"`{w['surf']}` – {w['lemma']} ({w['feats']}){g}"


def main():
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    cmd, path = a[0], a[1]
    lines = parse(path)
    if cmd == "lines":
        for l in _range(lines, *a[2:4]):
            print(f"{l['label']}\t{l['text']}")
    elif cmd == "md" and len(a) >= 3:
        out = [f"# {title(path)} – reading edition from AED-TEI ({os.path.basename(path)})", "",
               "Generated by tools/aed2md.py md. Lines = the <lb> of the base; words: surface – TLA lemma id (morphology) "
               "\"the TLA's German gloss in context\". CC BY-SA 4.0 (AED-TEI / TLA 2018).", ""]
        for l in lines:
            out.append(f"### {l['label']}")
            out.append(f"`{l['text']}`")
            out += [f"- {fmt_word(w)}" for w in l["words"]]
            out.append("")
        open(a[2], "w", encoding="utf-8").write("\n".join(out))
        print(f"{a[2]}: {len(lines)} lines")
    elif cmd == "tr":
        trs = translations(path)
        seen = []
        for l in _range(lines, *a[2:4]):
            for s in l["sents"]:
                if s not in seen:
                    seen.append(s)
                    print(f"[{l['label']}] {trs.get(s, '(no translation)')}")
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()

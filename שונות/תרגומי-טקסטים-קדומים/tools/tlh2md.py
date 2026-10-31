#!/usr/bin/env python3
"""tlh2md.py – TLHdig 0.3 (Thesaurus Linguarum Hethaeorum digitalis, Zenodo 10.5281/zenodo.20328284, CC BY 4.0)
XML → per-manuscript line data for the Hittite corpus.

TLHdig is per manuscript (one XML per tablet or join), with:
  <lb lnr="{€4+5} Vs. I 7′" .../>   a line (the label: obverse/reverse, column, line; {€n} = which joined fragment)
  <w trans="kuenzi" mrp0sel=" 1 " mrp1="lemma@German gloss@morphology@stem class@">ku-e-en-zi</w>
                                    a word; mrp0sel names the selected analysis (often blank: then all are candidates)
  <parsep/> / <parsep_dbl/>         a paragraph divider after the line (the tablet's ruling: in the Laws, a § end)
  <del_in/> … <del_fin/> = [ ]      <laes_in/> … <laes_fin/> = ⸢ ⸣      <d>URU</d> = determinative {URU}
  <sGr> Sumerogram, <aGr> Akkadogram (kept as written, upper case), <corr c="!"/> etc.

Usage (python3 -I):
  tlh2md.py summary DIR                         # each manuscript: lines, first/last label, paragraph dividers
  tlh2md.py lines FILE.xml [FROM [TO]]          # labelled lines (1-based index range), with ¶ after a divider
  tlh2md.py words FILE.xml LABEL                # one line's words with every analysis
  tlh2md.py md DIR OUT.md                       # a reading edition of every manuscript in DIR (+ glosses)
As a library: parse(path) → [{"label","frag","text","words":[{"form","trans","sel","an":[(lemma,gloss,morph)]}],"par"}].
Downloads are untrusted: this only reads XML text with regular expressions (no XML entity expansion, no execution).
"""
import html
import os
import re
import sys


def _clean(inner):
    s = re.sub(r"<note[^>]*/>", "", inner)
    s = s.replace("<del_in/>", "[").replace("<del_fin/>", "]").replace("<laes_in/>", "⸢").replace("<laes_fin/>", "⸣")
    s = s.replace("<ras_in/>", "*").replace("<ras_fin/>", "*")
    s = re.sub(r'<corr c="([^"]*)"\s*/>', r"\1", s)
    s = re.sub(r"<d>(.*?)</d>", r"{\1}", s)
    s = re.sub(r'<gap c="([^"]*)"[^>]*/>', r"\1", s)
    s = re.sub(r"<space[^>]*/>", "", s)
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).strip()


def parse(path):
    t = open(path, encoding="utf-8").read()
    body = t[t.find("<body"):] if "<body" in t else t
    parts = re.split(r"(<lb [^>]*/>)", body)
    out = []
    for i in range(1, len(parts), 2):
        m = re.search(r'lnr="([^"]*)"', parts[i])
        raw = (m.group(1) if m else "").strip()
        fm = re.match(r"\{€([^}]*)\}\s*", raw)
        frag = fm.group(1) if fm else ""
        label = raw[fm.end():] if fm else raw
        lg = (re.search(r'lg="([^"]*)"', parts[i]) or [None, ""])[1]
        seg = parts[i + 1]
        words = []
        for attrs, inner in re.findall(r"<w([^>]*)>(.*?)</w>", seg, re.S):
            form = _clean(inner)
            if not form:
                continue
            trans = html.unescape((re.search(r'trans="([^"]*)"', attrs) or [None, ""])[1])
            sel = (re.search(r'mrp0sel="([^"]*)"', attrs) or [None, ""])[1].strip()
            an = []
            for k, v in re.findall(r'mrp(\d+)="([^"]*)"', attrs):
                f = html.unescape(v).split("@")
                an.append((k, f[0].strip(), f[1].strip() if len(f) > 1 else "", f[2].strip() if len(f) > 2 else ""))
            words.append({"form": form, "trans": trans, "sel": sel, "an": an})
        par = "<parsep" in seg
        out.append({"label": label, "frag": frag, "lg": lg, "text": " ".join(w["form"] for w in words),
                    "words": words, "par": par})
    return out


def gloss(w, maxn=3):
    """The selected analysis, else up to maxn candidates, as 'lemma "gloss" morph'."""
    sel = w["sel"].split()[0] if w["sel"] else ""
    cands = [a for a in w["an"] if a[0] == sel] if sel and sel[0].isdigit() else []
    if cands:
        k, lem, gl, mo = cands[0]
        rest = w["sel"][len(sel):].strip()
        return f'{lem} "{gl}" {mo}{(" " + rest) if rest else ""}'
    if w["an"]:
        return " | ".join(f'{a[1]} "{a[2]}"' for a in w["an"][:maxn]) + (" (unselected)" if len(w["an"]) > 1 else "")
    return ""


def summary(d):
    for f in sorted(os.listdir(d)):
        if not f.endswith(".xml"):
            continue
        L = parse(os.path.join(d, f))
        if not L:
            print(f"{f[:-4]:22} 0 lines")
            continue
        print(f"{f[:-4]:22} {len(L):4} lines  {L[0]['label']:>16} … {L[-1]['label']:<16}  ¶ {sum(x['par'] for x in L)}")


def lines(path, a=None, b=None):
    L = parse(path)
    a = int(a) if a else 1
    b = int(b) if b else len(L)
    for i, x in enumerate(L[a - 1:b], a):
        print(f"{i:4} {('{' + x['frag'] + '} ') if x['frag'] else ''}{x['label']}: {x['text']}{'  ¶' if x['par'] else ''}")


def words(path, label):
    for x in parse(path):
        if x["label"] == label or x["label"].replace("′", "'") == label:
            for w in x["words"]:
                print(f"  {w['form']:28} trans={w['trans']:18} sel={w['sel']!r}")
                for a in w["an"]:
                    print(f"      {a[0]}: {a[1]} \"{a[2]}\" {a[3]}")


def md(d, out):
    L = [f"# TLHdig 0.3 – {os.path.basename(os.path.normpath(d))} (generated by tools/tlh2md.py)", "",
         "Source: TLHdig Beta 0.3 (Zenodo 10.5281/zenodo.20328284), CC BY 4.0. Per manuscript; `¶` = a paragraph divider "
         "after the line. Glosses are TLHdig's (German); 'unselected' = TLHdig chose no analysis.", ""]
    for f in sorted(os.listdir(d)):
        if not f.endswith(".xml"):
            continue
        L += ["", f"## {f[:-4]}", ""]
        for x in parse(os.path.join(d, f)):
            L.append(f"**{x['label']}**{(' {' + x['frag'] + '}') if x['frag'] else ''} `{x['text']}`{'  ¶' if x['par'] else ''}")
            g = [f"`{w['form']}` {gloss(w)}" for w in x["words"] if gloss(w)]
            if g:
                L.append("  - " + " · ".join(g))
    open(out, "w", encoding="utf-8").write("\n".join(L) + "\n")
    print("wrote", out)


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__)
    elif a[0] == "summary":
        summary(a[1])
    elif a[0] == "lines":
        lines(*a[1:4])
    elif a[0] == "words":
        words(a[1], a[2])
    elif a[0] == "md":
        md(a[1], a[2])
    else:
        print(__doc__)

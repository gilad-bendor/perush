#!/usr/bin/env python3
"""hittite_tools.py – the tool of the Hittite texts (Round 4 run 6), shared by two corpus folders:
`חוקים-ובריתות/` (the Laws, projects 8; the Instructions for Temple Personnel, project 9) and `טקסי-שילוח-וטיהור/`
(the elimination rituals, project 1). Run with python3 -I -B from any folder.

  hittite_tools.py units                      the texts (KEYs), their folder, base and line counts
  hittite_tools.py data KEY [FROM [TO]]       a translator's line data: each base line (the composite), its words with
                                              lemma and German gloss (CHiL; else TLHdig, by manuscript line or by form),
                                              every manuscript's line, the names / formulas / gates that apply, the
                                              Old Hittite or variant version of the same § (HL1), and the lines of the
                                              Hittite texts that repeat it, with their Hebrew
  hittite_tools.py tr KEY [FROM [TO]]         the HPM editor's translation (rank 3: only after drafting)
  hittite_tools.py fill FILE…                 replace every `@` under a `### <label>` by the exact base line
  hittite_tools.py lemma '<regex>'            every line of the Hittite texts with a word (form, lemma or gloss) matching,
                                              with its Hebrew: how a word was rendered so far
  hittite_tools.py lexmap ['<regex>']         Hebrew ↔ lemma from the פירוק bullets (`form` – lemma … ("Hebrew"))
  hittite_tools.py chd WORD                   the Chicago Hittite Dictionary's free volumes, per word (a pointer only)
  hittite_tools.py comp-init KEY MS FROM TO SEC   starter rows of a composite (composite-<KEY>.tsv) from one TLHdig
                                              manuscript's lines FROM..TO (1-based), § numbers from SEC at each divider
  hittite_tools.py comp-check KEY             the composite's rows against TLHdig (every manuscript line exists; a row
                                              whose text differs from its manuscript line must say why in its note)
  hittite_tools.py verify [KEY…] [--strict]
  hittite_tools.py build [KEY…]               translation-<KEY>.rtl.md + each project's translation.rtl.md
  hittite_tools.py grep '<regex>' [--all]     the unvocalized `>` lines of the Hittite texts (--all: every corpus)
  hittite_tools.py gates                      print the reserved / gated words, traps, formulas and names
  hittite_tools.py selftest                   the checks on the test lines of the renderings files (§ "Selftest")

KEYs and bases:
  HL1  the Laws, first tablet, the standard text (CHiL CTH 291.2; labels = CHiL's clause numbers; § = HL n)
  HLPT the Laws, the late parallel text KBo 6.4 (CHiL CTH 291.PT; § I–XLI)
  HL2  the Laws, second tablet (CTH 292, HL 101–200): our composite, `8-…/composite-HL2.tsv` (labels "<§>.<n>")
  IN   the Instructions for Temple Personnel (CTH 264): our composite, `9-…/composite-IN.tsv` (labels "<§>.<n>")
  AS   Ašḫella (HPM CTH 394)  UH Uḫḫamuwa (CTH 410)  PU Puliša (CTH 407)  AM Ambazzi (CTH 391.1)  AM2 (CTH 391.2)
Annotated file: <project>/annotated-<KEY>.rtl.md. The machine-read tables (names H2, reserved H3, gated H4, formulas H5,
traps H6, selftest H9) are read from BOTH corpus renderings files (`חוקים-ובריתות/renderings.md` §H…,
`טקסי-שילוח-וטיהור/renderings.md` §H…) and apply to every Hittite text.

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow the base's line list (a placeholder
     `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals the base line exactly (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings in the bracket-free unvocalized line: an error unless the licence text (the composite,
     lower case, brackets removed + the words' lemmas and glosses) matches the row's licence regex;
  5. NAMES (renderings §H2): a source name in the line → its Hebrew in the line; first occurrence vocalized;
  6. TRAPS: unvocalized strings that read as another Hebrew word;
  7. FORMULAS (renderings §H5): where the composite has a formula, the Hebrew has its fixed rendering;
  8. repeated lines (identical composite, 3+ words) with different Hebrew are listed (justify or fix).
Escapes, written in the entry: `[סטייה מן הנוסחה: <reason>]` (7), `[היתר שם: <name>]` (5), `[היתר שער: <word>]` (4).
"""
import csv
import difflib
import glob
import json
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
sys.path.insert(0, HERE)
import tlh2md  # noqa: E402

SRC = os.path.join(ROOT, "sources")
LAWS = "חוקים-ובריתות"
RIT = "טקסי-שילוח-וטיהור"
P_HL = os.path.join(LAWS, "8-החוקים-החתיים")
P_IN = os.path.join(LAWS, "9-הוראות-לאנשי-בית-האל")
P_RIT = os.path.join(RIT, "1-טקסי-השילוח-החתיים")
# key: (project dir, title, kind, base, TLHdig CTH folder for glosses)
UNITS = {
    "HL1": (P_HL, "החוקים החתיים, הלוח הראשון: \"אם איש\" (CTH 291, נוסח התקן)", "chil", "HPM/CHiL--CTH-291.2", ""),
    "HLPT": (P_HL, "החוקים החתיים, הנוסח המקביל המאוחר (CTH 291.PT, KBo 6.4)", "chil", "HPM/CHiL--CTH-291.PT", ""),
    "HL2": (P_HL, "החוקים החתיים, הלוח השני: \"אם גפן\" (CTH 292)", "comp", "composite-HL2.tsv", "CTH-292"),
    "IN": (P_IN, "הוראות לאנשי בית האל (CTH 264)", "comp", "composite-IN.tsv", "CTH-264"),
    "AS": (P_RIT, "טקס אשחלה נגד מגפה במחנה (CTH 394)", "besrit", "HPM/BESRIT--CTH-394", "CTH-394"),
    "UH": (P_RIT, "טקס אוחמווה (CTH 410)", "besrit", "HPM/BESRIT--CTH-410", "CTH-410"),
    "PU": (P_RIT, "טקס פולישה נגד מגפה שהובאה מארץ האויב (CTH 407)", "besrit", "HPM/BESRIT--CTH-407", "CTH-407"),
    "AM": (P_RIT, "טקס אמבזי (CTH 391.1)", "besrit", "HPM/BESRIT--CTH-391.1", "CTH-391"),
    "AM2": (P_RIT, "טקס אמבזי, נוסח שני (CTH 391.2)", "besrit", "HPM/BESRIT--CTH-391.2", "CTH-391"),
}
PROJECT_ORDER = {P_HL: ["HL1", "HL2", "HLPT"], P_IN: ["IN"], P_RIT: ["AS", "UH", "PU", "AM", "AM2"]}
WITNESSES_HL1 = {"291.1": "HPM/CHiL--CTH-291.1", "291.3": "HPM/CHiL--CTH-291.3", "291.4": "HPM/CHiL--CTH-291.4",
                 "291.5": "HPM/CHiL--CTH-291.5"}
NIQ = "֑-ֽֿ-ׇ"
RITUAL_GLOSS_FOLDERS = ["CTH-394", "CTH-410", "CTH-407", "CTH-391", "CTH-757"]
REND = [os.path.join(ROOT, LAWS, "renderings.md"), os.path.join(ROOT, RIT, "renderings.md")]


def pdir(key):
    return os.path.join(ROOT, UNITS[key][0])


def flat(s):
    """A composite / form → lower case, brackets, half-brackets and marks removed (for the licence and formula regexes)."""
    s = unicodedata.normalize("NFC", s)
    s = re.sub(r"[\[\]⸢⸣⟨⟩〈〉«»?!*()<>]", "", s)
    s = s.replace("…", " ").replace("‑", "-")
    return re.sub(r"\s+", " ", s).strip().lower()


# ---------------------------------------------------------------- base texts
_DATA = {}
_TLH = {}


def tlh_ms(cth, stem):
    k = (cth, stem)
    if k not in _TLH:
        p = os.path.join(SRC, "TLHdig", cth, stem + ".xml")
        _TLH[k] = tlh2md.parse(p) if os.path.exists(p) else []
    return _TLH[k]


_FORMIDX = {}


def form_index(cth):
    """{plain hyphenated form: [(lemma, gloss, morph)]} over every TLHdig manuscript of the CTH folder."""
    if cth in _FORMIDX:
        return _FORMIDX[cth]
    idx = {}
    folders = RITUAL_GLOSS_FOLDERS if cth in RITUAL_GLOSS_FOLDERS else [cth]
    for f in [x for c in folders for x in glob.glob(os.path.join(SRC, "TLHdig", c, "*.xml"))]:
        for ln in tlh2md.parse(f):
            for w in ln["words"]:
                g = tlh2md.gloss(w)
                if g:
                    idx.setdefault(_plainform(w["form"]), [])
                    if g not in idx[_plainform(w["form"])]:
                        idx[_plainform(w["form"])].append(g)
    _FORMIDX[cth] = idx
    return idx


def _plainform(f):
    return re.sub(r"[\[\]⸢⸣?!*〈〉⟨⟩]", "", f).strip()


def read_comp(key):
    p = os.path.join(pdir(key), UNITS[key][3])
    out = []
    if not os.path.exists(p):
        return out
    with open(p, encoding="utf-8") as f:
        for r in csv.reader(f, delimiter="\t"):
            if not r or r[0].startswith("#") or r[0] == "label":
                continue
            r += [""] * (7 - len(r))
            out.append({"label": r[0].strip(), "sec": r[1].strip(), "ms": r[2].strip(), "mslines": r[3].strip(),
                        "text": r[4].strip(), "wit": r[5].strip(), "note": r[6].strip()})
    return out


def rows(key):
    """[{label, sec, hl, text, words:[(form, lemma, gloss)], mss:[(sig, label, text)], tr}]"""
    if key in _DATA:
        return _DATA[key]
    proj, title, kind, base, cth = UNITS[key]
    out = []
    if kind in ("chil", "besrit"):
        d = json.load(open(os.path.join(SRC, base, "edition.json"), encoding="utf-8"))
        secs = {s["id"]: s for s in d["sections"]}
        idx = form_index(cth) if cth else {}
        for c in d["clauses"]:
            words = []
            if c["words"]:
                words = [(w[0], w[2] if len(w) > 2 else "", w[1]) for w in c["words"] if w[0] not in ("…", "[…]", "[…", "…]")]
            elif idx:
                seen = set()
                for sig, lab, tx in c["mss"]:
                    for fm in tx.split():
                        pf = _plainform(fm)
                        if pf in idx and pf not in seen:
                            seen.add(pf)
                            words.append((fm, "", " | ".join(idx[pf][:3])))
            s = secs.get(c["sec"], {})
            sec = c["sec"]
            hl = c.get("hl") or s.get("hl", "")
            if kind == "chil" and not sec and key == "HL1":
                hl = "1"  # CHiL has no heading before HL 1
            out.append({"label": c["n"], "sec": sec, "hl": hl, "sectitle": s.get("title", sec), "text": c["master"],
                        "words": words, "mss": c["mss"], "tr": c["tr"], "trlang": c.get("trlang", "")})
    else:
        for r in read_comp(key):
            words = []
            mss = []
            for part in r["mslines"].split(" + "):
                for ln in tlh_ms(cth, r["ms"]):
                    if ln["label"] == part.strip():
                        words += [(w["form"], "", tlh2md.gloss(w)) for w in ln["words"]]
                        mss.append((r["ms"], ln["label"], ln["text"]))
            for wtn in [x.strip() for x in r["wit"].split(";") if x.strip()]:
                if ":" in wtn:
                    st, lab = wtn.split(":", 1)
                    for ln in tlh_ms(cth, st.strip()):
                        if ln["label"] == lab.strip():
                            mss.append((st.strip(), ln["label"], ln["text"]))
            out.append({"label": r["label"], "sec": r["sec"], "hl": r["sec"], "sectitle": r["sec"], "text": r["text"],
                        "words": words, "mss": mss, "tr": "", "trlang": "", "note": r["note"]})
    _DATA[key] = out
    return out


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def license_text(key, lab):
    r = row(key, lab)
    if not r:
        return ""
    lems = " ".join(f"{flat(w[1])} {w[2].lower()}" for w in r["words"])
    return f"{flat(r['text'])} | {lems}"


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(pdir(key), f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(pdir(key), f"translation-{key}.rtl.md")


def read_annotated(key):
    p = annotated_path(key)
    if not os.path.exists(p):
        return None
    heb, seq, src, body, probs = {}, [], {}, {}, []
    cur = None
    for l in open(p, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in heb:
                probs.append(f"duplicate entry {cur}")
            heb[cur], body[cur] = [], []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is None:
            continue
        body[cur].append(l)
        if l.startswith("> "):
            heb[cur].append(l[2:].strip())
        elif l.startswith("`") and cur not in src and not heb[cur]:
            src[cur] = l.strip()
    for k, v in heb.items():
        if len(v) != 1:
            probs.append(f"entry {k}: {len(v)} '>' lines")
    return ({k: (v[0] if v else "") for k, v in heb.items()}, seq, src,
            {k: "\n".join(v) for k, v in body.items()}, probs)


def present_keys():
    return [k for k in UNITS if os.path.exists(annotated_path(k))]


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(k)
        out[k] = a[0] if a else {}
    return out


def strip_marks(s):
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"\{[^}]*\}", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״]", "", s)
    s = re.sub(rf"[{NIQ}]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- renderings tables (hittite-renderings.md)
def _table(section_prefix, paths=None):
    out = []
    for path in (paths or REND):
        if os.path.exists(path):
            out += _table1(section_prefix, path)
    return out


def _table1(section_prefix, path):
    out = []
    insec = False
    for l in open(path, encoding="utf-8"):
        if l.startswith("## ") or l.startswith("### "):
            insec = l.lstrip("#").strip().startswith(section_prefix)
            continue
        if insec and l.startswith("|") and not l.startswith("|---"):
            cells = [c.strip().replace("\\|", "|") for c in re.split(r"(?<!\\)\|", l.strip().strip("|"))]
            out.append(cells)
    return out


def _bt(c):
    """A table cell `regex` → regex (the backticks stripped)."""
    c = c.strip()
    m = re.fullmatch(r"`(.*)`", c)
    return m.group(1) if m else c


def names():
    """[(source regex on flat composite, Hebrew vocalized, Hebrew plain, ★)] from renderings §H2."""
    out = []
    for cells in _table("H2."):
        if len(cells) < 3 or cells[0].lower().startswith("source") or not cells[1].strip("` "):
            continue
        heb = cells[1].strip().strip("`").replace(" ★", "")
        out.append((_bt(cells[0]), heb, strip_marks(heb), "★" in cells[2] or "★" in cells[1]))
    return out


def reserved():
    """[(Hebrew regex, licence regex or None, why)] from §3 (reserved: licence 'NEVER') and §4 (gated)."""
    out = []
    for sec in ("H3.", "H4."):
        for cells in _table(sec):
            if len(cells) < 3 or cells[0].lower().startswith("hebrew"):
                continue
            hx = _bt(cells[0])
            lx = _bt(cells[1])
            if not hx:
                continue
            out.append((hx, None if lx.upper() == "NEVER" else lx, cells[2]))
    return out


def traps():
    out = []
    for cells in _table("H6."):
        if len(cells) < 3 or cells[0].lower().startswith("unvocalized"):
            continue
        out.append((_bt(cells[0]), _bt(cells[1]), cells[2]))
    return out


def formulas():
    out = []
    for cells in _table("H5."):
        if len(cells) < 4 or not re.match(r"^F\d+$", cells[0]):
            continue
        out.append((cells[0], _bt(cells[1]), _bt(cells[2]), cells[3]))
    return out


W = r"(?<![א-ת])"
E = r"(?![א-ת])"


def lic(rx, key, lab):
    return rx is not None and re.search(rx, license_text(key, lab)) is not None


def _heb_has(plain, h):
    h = strip_marks(h)
    for c in {h, h.replace("־", " ")}:
        if re.search(r"(?<![א-ת])[ובלמהכש]{0,3}" + re.escape(c) + r"(?![א-ת])", plain.replace("־", " ") if " " in c else plain):
            return True
    words = re.split(r"[\s,.;:!?–—()\[\]־]+", plain)
    for w in words:
        for k in range(0, 4):
            if re.fullmatch(r"[ובלמהכש]{0,3}", w[:k]) and w[k:] == h:
                return True
    return False


def _find_word(heb, hp):
    first = hp.split()[0].split("־")[0]
    for w in re.split(r"[\s־,.;:!?–—()\[\]]+", heb):
        p = strip_marks(w)
        for k in range(0, 4):
            if re.fullmatch(r"[ובלמהכש]{0,3}", p[:k]) and p[k:] == first:
                return w
    return ""


def check_line(key, lab, heb, body, out, first_seen=None):
    bad = 0
    plain = strip_marks(heb)
    r = row(key, lab) or {"text": "", "words": []}
    srcf = flat(r["text"])
    for rx, allow, why in reserved():
        try:
            m = re.search(rx, plain)
        except re.error as e:
            out.append(f"BAD REGEX {rx}: {e}")
            bad += 1
            continue
        if m and not lic(allow, key, lab):
            if re.search(r"\[היתר שער: [^\]]*" + re.escape(m.group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: «{m.group(0).strip()}» – {why}\n    {heb}\n    src: {r['text']}")
            bad += 1
    for srx, hv, hp, star in names():
        if not re.search(srx, srcf):
            continue
        if not _heb_has(plain, hp) and "[היתר שם: " not in body:
            out.append(f"NAME {key} {lab}: `{srx}` → {hv} (renderings §H2) is not in the line\n    {heb}")
            bad += 1
        elif first_seen is not None and hp not in first_seen and _heb_has(plain, hp):
            first_seen.add(hp)
            if not re.search(rf"[{NIQ}]", _find_word(heb, hp)):
                out.append(f"VOCALIZE {key} {lab}: the first occurrence of {hv} in the file must be vocalized\n    {heb}")
                bad += 1
    for rx, cond, why in traps():
        if re.search(rx, heb) and (not cond or cond == "." or re.search(cond, license_text(key, lab))):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    for fid, grx, hrx, _ in formulas():
        if re.search(grx, srcf) and not re.search(hrx, nopunct(plain)) and "[סטייה מן הנוסחה" not in body:
            out.append(f"FORMULA {key} {lab}: {fid} `{grx}` → `{hrx}` (renderings §H5)\n    {heb}\n    src: {r['text']}")
            bad += 1
    return bad


def translation_lines(key):
    p = translation_path(key)
    if not os.path.exists(p):
        return None
    out, seq = {}, []
    for l in open(p, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            out[m.group(1)] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            seq.append(m.group(1))
    return out, seq


def verify(keys, strict=False):
    keys = keys or present_keys()
    bad = 0
    for key in keys:
        if key not in UNITS:
            print(f"unknown KEY {key}")
            bad += 1
            continue
        a = read_annotated(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, body, probs = a
        ordr = order(key)
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in ordr if x not in heb]
        extra = [x for x in seq if x not in ordr]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing[:30]}{' …' if len(missing) > 30 else ''}")
                bad += 1
        if extra:
            print(f"{key}: entries not in the base: {extra}")
            bad += 1
        if [x for x in seq if x in ordr] != [x for x in ordr if x in heb]:
            print(f"{key}: entries out of the base's order")
            bad += 1
        msgs, first_seen = [], set()
        for k in seq:
            if not heb[k].strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            s = src.get(k)
            r = row(key, k)
            if s is None:
                print(f"{key} {k}: no backticked source line")
                bad += 1
            elif s == "`@`":
                print(f"{key} {k}: `@` not filled (run fill)")
                bad += 1
            elif r and s.strip("`") != r["text"]:
                print(f"{key} {k}: source line differs from the base\n    A: {s}\n    B: `{r['text']}`")
                bad += 1
            bad += check_line(key, k, heb[k], body.get(k, ""), msgs, first_seen)
        for m in msgs:
            print(m)
        tr = translation_lines(key)
        if tr is not None:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != heb[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {heb[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (base {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = flat(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical composite) with different Hebrew (justify in the apparatus or fix):")
    for nk, lst in groups.items():
        hs = [(k2, lab, allh.get(k2, {}).get(lab)) for k2, lab in lst]
        hs = [h for h in hs if h[2]]
        if len(hs) < 2 or (keys and not any(h[0] in keys for h in hs)):
            continue
        if len({nopunct(strip_marks(h[2])) for h in hs}) > 1:
            nd += 1
            print(f"- {nk}")
            for k2, lab, h in hs:
                print(f"    {k2} {lab}: {h}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


# ---------------------------------------------------------------- data, tr, fill, lemma, lexmap, grep
def _corpus():
    return [(k2, r["label"], flat(r["text"])) for k2 in UNITS for r in rows(k2)]


def _similar(key, lab, nk, corpus, allh, thr=0.82):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            rr = 1.0
        elif len(nk.split()) >= 4 and abs(len(n2) - len(nk)) < 0.35 * len(nk):
            rr = difflib.SequenceMatcher(None, nk, n2).ratio()
            if rr < thr:
                continue
        else:
            continue
        out.append((rr, k2, l2, n2, allh.get(k2, {}).get(l2) or "(not yet drafted)"))
    out.sort(key=lambda x: -x[0])
    return out


def _span(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    return rs[i:j + 1]


_WIT = {}


def witnesses_by_hl(hl):
    if not _WIT:
        for v, b in WITNESSES_HL1.items():
            p = os.path.join(SRC, b, "edition.json")
            if not os.path.exists(p):
                continue
            d = json.load(open(p, encoding="utf-8"))
            secs = {s["id"]: s for s in d["sections"]}
            for c in d["clauses"]:
                h = secs.get(c["sec"], {}).get("hl", "") or ("1" if v == "291.1" and not c["sec"] else "")
                for one in re.split(r"\s+e\s+|,\s*", h):
                    _WIT.setdefault(one.strip(), []).append((v, c["n"], c["master"]))
    return _WIT.get(hl, [])


def cmd_units():
    for k, u in UNITS.items():
        n = len(rows(k))
        print(f"{k}\t{u[0]}\t{n} lines\t{u[2]}:{u[3]}\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def cmd_data(key, a=None, b=None):
    corpus = _corpus()
    allh = all_hebrew()
    nm, fs, rs_ = names(), formulas(), reserved()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    print("Words: form – lemma \"German gloss\" morphology (CHiL / TLHdig: a machine-assisted annotation, often "
          "unselected: check every form that carries a tense, a parallel or a gate; CHD per word: `chd <word>`).\n")
    lastsec = None
    for r in sp:
        if r["sec"] != lastsec:
            lastsec = r["sec"]
            print(f"## § {r['sectitle'] or r['sec']}" + (f"  [HL {r['hl']}]" if r.get("hl") else ""))
            if key == "HL1" and r.get("hl"):
                for one in re.split(r"\s+e\s+", r["hl"]):
                    w = witnesses_by_hl(one.strip())
                    if w:
                        print(f"- other versions of HL {one} (CHiL; for the apparatus: note every difference):")
                        for v, n, t in w:
                            print(f"    {v} {n}: `{t}`")
            print()
        print(f"### {r['label']}")
        print(f"`{r['text']}`")
        if r.get("note"):
            print(f"- composite note: {r['note']}")
        for w in r["words"]:
            print(f"- `{w[0]}` – {w[1]} \"{w[2]}\"" if w[1] else f"- `{w[0]}` – {w[2]}")
        for sig, lab, tx in r["mss"]:
            print(f"- ms {sig} {lab}: `{tx}`")
        srcf = flat(r["text"])
        nn = [(h, st) for srx, h, hp, st in nm if re.search(srx, srcf)]
        if nn:
            print("- NAMES (renderings §H2): " + "; ".join(h for h, st in nn))
        for fid, grx, hrx, note in fs:
            if re.search(grx, srcf):
                print(f"- FORMULA {fid}: `{hrx}` ({note})")
        lt = license_text(key, r["label"])
        gated = [why for hx, lx, why in rs_ if lx and re.search(lx, lt)]
        if gated:
            print("- GATES licensed here: " + "; ".join(gated))
        if srcf and len(srcf.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], srcf, corpus, allh)[:5]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} → {h}")
        print()


def cmd_tr(key, a=None, b=None):
    for r in _span(key, a, b):
        print(f"**{r['label']}** {r['tr'] or '(no rank-3 translation in the base)'}")


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z0-9]+)\.rtl\.md$", path)
    if not m or m.group(1) not in UNITS:
        sys.exit("not an annotated-<KEY>.rtl.md file")
    key = m.group(1)
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
            continue
        if ln.strip() == "`@`" and cur:
            r = row(key, cur)
            if r:
                text[i] = "`" + r["text"] + "`"
                n += 1
            else:
                print(f"no base line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


def cmd_lemma(pat):
    rx = re.compile(pat, re.I)
    allh = all_hebrew()
    n = 0
    for k in UNITS:
        for r in rows(k):
            hit = [w for w in r["words"] if rx.search(w[0]) or rx.search(w[1]) or rx.search(w[2])] or \
                  ([("(composite)", "", "")] if rx.search(r["text"]) else [])
            if hit:
                n += 1
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: {', '.join(w[0] for w in hit)}  `{r['text']}`\n    {h or '(not yet drafted)'}")
    print(f"{n} line(s)")


_PIRUK = re.compile(r"`([^`]+)`\s*–\s*([^\s(\"„“,;]+)[^;]*?\(\"([^\"]+)\"\)")


def cmd_lexmap(pat=None):
    m = {}
    for k in present_keys():
        heb, seq, src, body, _ = read_annotated(k)
        for lab in seq:
            for l in body[lab].split("\n"):
                if not l.startswith("- **פירוק:**"):
                    continue
                for seg in re.split(r";\s+(?=`)", l[len("- **פירוק:**"):]):
                    mm = _PIRUK.search(seg)
                    if mm:
                        lem = mm.group(2).strip().lower()
                        hb = strip_marks(mm.group(3))
                        if lem:
                            m.setdefault(lem, {}).setdefault(hb, []).append(f"{k} {lab}")
    rx = re.compile(pat) if pat else None
    for lem in sorted(m):
        if rx and not (rx.search(lem) or any(rx.search(h) for h in m[lem])):
            continue
        hs = m[lem]
        flag = "  ← more than one Hebrew" if len(hs) > 1 else ""
        print(f"{lem}: " + "; ".join(f"{h} ({len(v)}: {', '.join(v[:4])}{'…' if len(v) > 4 else ''})" for h, v in hs.items()) + flag)
    inv = {}
    for lem, hs in m.items():
        for h in hs:
            inv.setdefault(h, set()).add(lem)
    coll = {h: ls for h, ls in inv.items() if len(ls) > 1}
    if coll and not pat:
        print("\nOne Hebrew word for several lemmas (check each):")
        for h, ls in sorted(coll.items()):
            print(f"  {h}: {', '.join(sorted(ls))}")


def cmd_chd(word):
    print("The Chicago Hittite Dictionary (CHD) – free volumes L–N, P, Š (ISAC, isac.uchicago.edu/research/publications/chd):\n"
          "consult it per word (its terms: no bulk extraction, no datasets), e.g. the eCHD search at\n"
          f"  https://isac.uchicago.edu/research/projects/chicago-hittite-dictionary  (word: {word})\n"
          "For words outside L–Š: HW² (©), Kloekhorst 2008 (©), Tischler (©) are records only; TLHdig's German glosses "
          "(`lemma`) and the HPM editions' translations are the open evidence.")


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if rx.search(strip_marks(heb[lab])):
                    print(f"{k} {lab}: {heb[lab]}   ‹{(row(k, lab) or {}).get('text', '')}›")
        return
    for f in sorted(glob.glob(os.path.join(ROOT, "*", "**", "annotated*.rtl.md"), recursive=True)):
        srcl, lab = None, None
        for ln in open(f, encoding="utf-8"):
            if ln.startswith("### "):
                srcl, lab = None, ln[4:].strip()
            elif ln.startswith("`") and srcl is None:
                srcl = ln.strip()
            elif ln.startswith("> ") and rx.search(strip_marks(ln[2:])):
                print(f"{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()[:140]}   ‹{(srcl or '')[:100]}›")


def cmd_gates():
    print("RESERVED / GATED (Hebrew regex ← licence | why):")
    for rx, allow, why in reserved():
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why})")
    print("\nTRAPS:")
    for rx, cond, why in traps():
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for fid, g, h, note in formulas():
        print(f"  {fid}: {g}  →  {h}   ({note})")
    print("\nNAMES:")
    for srx, hv, hp, st in names():
        print(f"  {srx} = {hv}{' ★' if st else ''}")


def cmd_selftest():
    n, fails = 0, 0
    for cells in _table("H9."):
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z0-9]+) (\S+)$", cells[0])
        if not m:
            continue
        key, lab = m.groups()
        heb = cells[2].strip("`")
        msgs = []
        b = check_line(key, lab, heb, "", msgs, None)
        got = "err" if b else "ok"
        n += 1
        if got != cells[1]:
            fails += 1
            print(f"SELFTEST FAIL {key} {lab}: expected {cells[1]}, got {got}\n    {heb}\n    src: {(row(key, lab) or {}).get('text')}")
            for x in msgs:
                print("   ", x.replace("\n", "\n    "))
    print(f"selftest: {n} lines, {fails} failure(s)")
    return fails == 0


# ---------------------------------------------------------------- composites
def cmd_comp_init(key, ms, a, b, sec):
    cth = UNITS[key][4]
    L = tlh_ms(cth, ms)
    if not L:
        sys.exit(f"no TLHdig manuscript {ms} in {cth}")
    s, n = int(sec), 0
    print("label\tsec\tms\tms_lines\ttext\twitnesses\tnote")
    for x in L[int(a) - 1:int(b)]:
        n += 1
        print(f"{s}.{n}\t{s}\t{ms}\t{x['label']}\t{x['text']}\t\t")
        if x["par"]:
            s, n = s + 1, 0


def cmd_comp_check(key):
    cth = UNITS[key][4]
    bad = 0
    labs = set()
    for r in read_comp(key):
        if r["label"] in labs:
            print(f"duplicate label {r['label']}")
            bad += 1
        labs.add(r["label"])
        parts = [p.strip() for p in r["mslines"].split(" + ") if p.strip()]
        found = []
        for p in parts:
            hit = [ln for ln in tlh_ms(cth, r["ms"]) if ln["label"] == p]
            if not hit:
                print(f"{r['label']}: no line `{p}` in {r['ms']}")
                bad += 1
            else:
                found.append(hit[0]["text"])
        if found and " ".join(found) != r["text"] and not r["note"]:
            print(f"{r['label']}: text differs from {r['ms']} {r['mslines']} without a note\n    C: {r['text']}\n    T: {' '.join(found)}")
            bad += 1
        for wtn in [x.strip() for x in r["wit"].split(";") if x.strip()]:
            st, _, lab = wtn.partition(":")
            if not any(ln["label"] == lab.strip() for ln in tlh_ms(cth, st.strip())):
                print(f"{r['label']}: witness `{wtn}` not found")
                bad += 1
    print(f"{key}: {len(labs)} composite rows, {bad} problem(s)")
    return bad == 0


# ---------------------------------------------------------------- build
def sections(key):
    out, cur = [], None
    for l in open(annotated_path(key), encoding="utf-8"):
        l = l.rstrip("\n")
        if l.startswith("## "):
            out.append(("h", l[3:].strip()))
            cur = None
        elif l.startswith("# "):
            cur = None
        elif re.match(r"^### (\S+)\s*$", l):
            cur = l[4:].strip()
            out.append(["l", cur, "", ""])
        elif cur and l.startswith("> "):
            out[-1][2] = l[2:].strip()
        elif cur and l.startswith("- **הערת שוליים:**"):
            out[-1][3] = l[len("- **הערת שוליים:**"):].strip()
    return out


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by tools/hittite_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B tools/hittite_tools.py build\n-->\n\n")


def build_one(key):
    pd = pdir(key)
    ip = os.path.join(pd, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {UNITS[key][1]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n## {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{key}{n}]"
                notes.append(f"[^{key}{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    text = head + intro + "\n" + "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(translation_path(key), "w", encoding="utf-8").write(text)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build_project(proj):
    keys = [k for k in PROJECT_ORDER[proj] if os.path.exists(translation_path(k))]
    if not keys:
        return
    pd = os.path.join(ROOT, proj)
    ip = os.path.join(pd, "translation--intro.rtl.md")
    parts = []
    for k in keys:
        t = open(translation_path(k), encoding="utf-8").read()
        t = re.sub(r"^<!--.*?-->\n\n", "", t, flags=re.S)
        if len(keys) > 1:  # one project, several texts: each text's title becomes a ## heading
            t = re.sub(r"^## ", "### ", t, flags=re.M)
            t = re.sub(r"^# ", "## ", t, count=1, flags=re.M)
        parts.append(t.rstrip("\n"))
    intro = open(ip, encoding="utf-8").read().rstrip("\n") + "\n\n" if os.path.exists(ip) and len(keys) > 1 else ""
    head = GENERATED.format(src="translation-<KEY>.rtl.md of " + ", ".join(keys) + (" and translation--intro.rtl.md" if intro else ""))
    open(os.path.join(pd, "translation.rtl.md"), "w", encoding="utf-8").write(head + intro + "\n\n".join(parts) + "\n")
    print(f"{proj}/translation.rtl.md: {', '.join(keys)}")


def build(keys=None):
    for k in [k for k in present_keys() if not keys or k in keys]:
        build_one(k)
    for proj in PROJECT_ORDER:
        build_project(proj)
    return verify(present_keys())


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "units":
        return cmd_units()
    if cmd == "data" and rest:
        return cmd_data(*rest[:3])
    if cmd == "tr" and rest:
        return cmd_tr(*rest[:3])
    if cmd == "fill" and rest:
        for p in rest:
            cmd_fill(p)
        return
    if cmd == "lemma" and rest:
        return cmd_lemma(rest[0])
    if cmd == "lexmap":
        return cmd_lexmap(rest[0] if rest else None)
    if cmd == "chd" and rest:
        return cmd_chd(rest[0])
    if cmd == "comp-init" and len(rest) >= 5:
        return cmd_comp_init(*rest[:5])
    if cmd == "comp-check" and rest:
        sys.exit(0 if cmd_comp_check(rest[0]) else 1)
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build(rest) else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "gates":
        return cmd_gates()
    if cmd == "selftest":
        sys.exit(0 if cmd_selftest() else 1)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

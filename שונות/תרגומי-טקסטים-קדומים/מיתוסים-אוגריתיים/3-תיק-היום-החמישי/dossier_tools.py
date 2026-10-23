"""Tools of the fifth-day dossier (Gen 1:20–23): short excerpts from other cultures, each from its own language.
Run with python3 -I -B.

    python3 -I -B dossier_tools.py units                 the excerpts (KEY, language, source, lines)
    python3 -I -B dossier_tools.py data KEY              each base line with what the source gives per word (lemma,
                                                        morphology, gloss); the source's own translation (if any) is
                                                        printed only with --tr (read it AFTER drafting: guidelines §3)
    python3 -I -B dossier_tools.py fill FILE             replace every `@` under a `### <label>` by the exact base line
    python3 -I -B dossier_tools.py verify [KEY…] [--strict]
    python3 -I -B dossier_tools.py build                 translation.rtl.md from translation--head.rtl.md and, per
                                                        excerpt, translation--intro-<KEY>.rtl.md + the annotated
                                                        `## ` headings, `>` lines and `הערת שוליים` bullets

KEYs and base texts (all under ../../sources/):
  MK  Egyptian (Middle Egyptian): the Instruction for Merikare E 130–136, pPetersburg 1116A verso
      (AED-TEI = TLA 2018, CC BY-SA 4.0: AED-TEI/Merikare--pPetersburg-1116A/)
  TH  Greek: Hesiod, Theogony 237–239, 270, 295–300, 333–336, 820–828 (Perseus, Evelyn-White 1914, PD text,
      CC BY-SA markup: Perseus--Hesiod/)
  IL  Hittite: the Illuyanka myth (CTH 321), version 1, KBo 3.7 i 9–20 (TLHdig 0.3, CC BY 4.0: TLHdig/CTH-321/)
  RV  Vedic Sanskrit: Rigveda 1.32.1, 2, 4, 5, 8, 11 (VedaWeb, the Zurich text and morphology, CC BY 4.0: VedaWeb/)
  HY  Old Norse: Hymiskviða 22–24 (Bugge 1867, PD: Bugge-1867--Saemundar-Edda/)
  KJ  Old Japanese / Classical Chinese (kanbun): Kojiki, Book 1, the Yamata-no-Orochi episode (zh.wikisource,
      Shinpukuji tradition, PD text: Wikisource-zh--Kojiki/)

verify checks: one `>` line per entry; entries = the base line list in order; the backticked line = the base line;
translation.rtl.md = the `>` lines; the dossier's reserved words (renderings.md §11): `תנין`, `לויתן`, `אלוהים`,
`ברא`, `שאול` never in a `>` line (they are the Bible's words: the apparatus compares them).
"""
import html
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
SRC = os.path.join(ROOT, "sources")

UNITS = {
    "MK": ("מֶרִיכָּרֶע: האל ובני האדם, עדרו (מצרית)", "Middle Egyptian"),
    "TH": ("הֶסִיּוֹדוֹס, תולדות האלים: קֵטוֹ וצאצאיה, טִיפוֹאֶוּס (יוונית)", "Greek"),
    "IL": ("אִילוּיַנְקָה: הנחש ואל הסערה (חתית)", "Hittite"),
    "RV": ("רִיגְוֵדָה א 32: אִינְדְּרָה והנחש (סנסקריט ודית)", "Vedic Sanskrit"),
    "HY": ("הִימִיסְקְוִידָה 22–24: תּוֹר והנחש (נורדית עתיקה)", "Old Norse"),
    "KJ": ("קוֹגִ'יקִי: הנחש שמונה־הראשים (יפנית עתיקה בכתב סיני)", "Old Japanese (kanbun)"),
}

NIQ = "֑-ֽֿ-ׇ"


def strip_marks(s):
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״{}]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


# ---------------------------------------------------------------- base texts
def base_MK():
    """[(label, text, info)] for Merikare E 130–136 (Helck's E lines = the n-th line of pPetersburg 1116A verso)."""
    d = os.path.join(SRC, "AED-TEI", "Merikare--pPetersburg-1116A")
    t = open(os.path.join(d, "YZSISQLOINELTMJDPXQ45O5IUU.xml"), encoding="utf-8").read()
    wt = open(os.path.join(d, "YZSISQLOINELTMJDPXQ45O5IUU_wt.xml"), encoding="utf-8").read()
    gloss = {m.group(1): m.group(2).strip() for m in re.finditer(r'<w xml:lang="de" corresp="src:([^"]+)">(.*?)</w>', wt, re.S)}
    body = t[t.index("<body>"):]
    toks = re.findall(r'<lb n="([^"]+)"/>|<w xml:id="([^"]+)" lemmaRef="([^"]+)"[^>]*>(.*?)</w>|<gap reason="([^"]+)"', body, re.S)
    lines = []
    for lb, wid, lem, w, gap in toks:
        if lb:
            lines.append([lb, [], []])
            continue
        if not lines:
            lines.append(["?", [], []])
        if gap:
            lines[-1][1].append("[…]")
            continue
        feats = (re.search(r'feats="([^"]*)"', w) or [None, ""])[1]
        surf = re.sub(r"<fs[^>]*/>", "", w)
        surf = re.sub(r"<supplied[^>]*>(.*?)</supplied>", r"[\1]", surf)
        surf = re.sub(r"<damage>(.*?)</damage>", r"⸢\1⸣", surf)
        surf = re.sub(r"<[^>]+>", "", surf)
        lines[-1][1].append(surf)
        lines[-1][2].append(f"`{surf}` – {lem} ({feats})" + (f' "{gloss[wid]}"' if wid in gloss else ""))
    out = []
    for i, (lb, ws, info) in enumerate(lines):
        if 130 <= i + 1 <= 136:
            out.append((f"E{i + 1}", " ".join(ws), [f"pPetersburg 1116A vs. {lb}"] + info))
    return out


def tr_MK():
    """AED's German sentence translations of the sentences that touch E 130–136 (read only after drafting)."""
    d = os.path.join(SRC, "AED-TEI", "Merikare--pPetersburg-1116A")
    t = open(os.path.join(d, "YZSISQLOINELTMJDPXQ45O5IUU.xml"), encoding="utf-8").read()
    st = open(os.path.join(d, "YZSISQLOINELTMJDPXQ45O5IUU_st.xml"), encoding="utf-8").read()
    body = t[t.index("<body>"):]
    ids, n = [], 0
    for m in re.finditer(r'<s xml:id="([^"]+)">|<lb n="[^"]+"/>', body):
        if m.group(0).startswith("<lb"):
            n += 1
        elif 129 <= n <= 136:
            ids.append(m.group(1))
    trs = dict(re.findall(r'<s xml:lang="de" corresp="src:([^"]+)">(.*?)</s>', st, re.S))
    return [re.sub(r"\s+", " ", trs.get(i, "")) for i in ids]


TH_LINES = [237, 238, 239, 270, 295, 296, 297, 298, 299, 300, 333, 334, 335, 336, 820, 821, 822, 823, 824, 825, 826, 827, 828]


def base_TH():
    t = open(os.path.join(SRC, "Perseus--Hesiod", "tlg0020.tlg001.perseus-grc2.xml"), encoding="utf-8").read()
    d = {int(n): re.sub(r"<[^>]+>", "", x).strip() for n, x in re.findall(r'<l [^>]*?n="(\d+)"[^>]*>(.*?)</l>', t, re.S)}
    return [(str(n), d[n], []) for n in TH_LINES]


IL_LINES = [f"Vs. I {n}" for n in range(9, 21)]


def _tlh_lines(path):
    t = open(path, encoding="utf-8").read()
    parts = re.split(r"(<lb [^>]*/>)", t)
    out = []
    for i in range(1, len(parts), 2):
        lnr = re.search(r'lnr="([^"]+)"', parts[i]).group(1)
        ws = re.findall(r"<w([^>]*)>(.*?)</w>", parts[i + 1], re.S)
        toks, gl = [], []
        for attrs, inner in ws:
            s = re.sub(r"<note[^>]*/>", "", inner)
            s = s.replace("<del_in/>", "[").replace("<del_fin/>", "]").replace("<laes_in/>", "⸢").replace("<laes_fin/>", "⸣")
            s = re.sub(r"<d>(.*?)</d>", r"{\1}", s)
            s = re.sub(r"<(?:sGr|aGr|num)>(.*?)</(?:sGr|aGr|num)>", r"\1", s)
            s = html.unescape(re.sub(r"<[^>]+>", "", s)).strip()
            if not s:
                continue
            toks.append(s)
            sel = (re.search(r'mrp0sel="([^"]*)"', attrs) or [None, ""])[1].strip()
            ms = dict(re.findall(r'mrp(\d+)="([^"]*)"', attrs))
            g = ""
            if sel and sel[0].isdigit() and sel.split()[0] in ms:
                f = ms[sel.split()[0]].split("@")
                g = f'{f[0]} "{f[1]}" {sel[len(sel.split()[0]):].strip()} ({f[2][:80] if len(f) > 2 else ""})'
            elif ms:
                g = " | ".join("/".join(v.split("@")[:2]) for v in list(ms.values())[:3]) + " (unselected)"
            gl.append(f"`{s}` – {g}")
        out.append((lnr, " ".join(toks), gl))
    return out


def base_IL():
    rows = {l: (t, g) for l, t, g in _tlh_lines(os.path.join(SRC, "TLHdig", "CTH-321", "KBo 3.7.xml"))}
    return [(l.replace("Vs. I ", "i"), rows[l][0], rows[l][1]) for l in IL_LINES]


RV_STANZAS = [1, 2, 4, 5, 8, 11]


def base_RV():
    p = os.path.join(SRC, "VedaWeb", "rv_1.032--zurich.tsv")
    out = []
    for l in open(p, encoding="utf-8"):
        if l.startswith("#") or not l.strip():
            continue
        lab, text, morph = (l.rstrip("\n").split("\t") + ["", ""])[:3]
        if int(re.match(r"\d+", lab).group(0)) in RV_STANZAS:
            out.append((lab, text, [x for x in morph.split(" ‖ ") if x]))
    return out


def base_HY():
    t = open(os.path.join(SRC, "Bugge-1867--Saemundar-Edda", "hymis.html"), encoding="utf-8").read()
    t = re.sub(r"<br\s*/?>", "\n", t)
    t = html.unescape(re.sub(r"<[^>]+>", "", t))
    out = []
    for st in (22, 23, 24):
        m = re.search(rf"\n\s*{st}\s*\n(.*?)\n\s*{st + 1}\s*\n", t, re.S)
        hl = [x.strip() for x in m.group(1).split("\n") if x.strip() and not re.fullmatch(r"\d+", x.strip())]
        for i, x in enumerate(hl, 1):
            out.append((f"{st}.{i}", x, []))
    return out


KJ_SEGMENTS = [
    "我之女者，自本在八稚女，",
    "是高志之八俣遠吕智一作「知」〈此三字以音〉，每年來喫，今其可來時，故泣。」",
    "尒問：「其形如何？」",
    "答白：「彼目如赤加賀智而身一有八頭八尾，",
    "亦其身生蘿及檜、榅，",
    "其長度谿八谷、峽八尾而見其腹者，悉常血爛也。",
    "〈此謂赤加賀知者，今酸醤者也〉」",
    "故隨告而如此設備待之時，其八俣遠吕智，信如言來，",
    "乃每船垂入己頭，飮其酒。",
    "於是飮醉，留伏寢。",
    "尒速須佐之男命，拔其所御佩之十拳釼，切散其虵者，",
    "肥河變血而流。",
]


def base_KJ():
    t = open(os.path.join(SRC, "Wikisource-zh--Kojiki", "kojiki-jokan.html"), encoding="utf-8").read()
    t = html.unescape(re.sub(r"<[^>]+>", "", t))
    out = []
    for i, seg in enumerate(KJ_SEGMENTS, 1):
        if seg not in t:
            out.append((str(i), seg, ["NOT FOUND in the saved page: check the segmentation"]))
        else:
            out.append((str(i), seg, []))
    return out


def make_rv_tsv(tei, out):
    """From VedaWeb's TEI (rv_book_01.tei, or its extract of hymn 1.32): one row per pāda – label, the Zurich text
    (CC BY 4.0), and each token's lemma and morphology. Only the Zurich layer is kept (the translation layers include
    copyrighted ones: Geldner 1951, Renou, Elizarenkova)."""
    t = open(tei, encoding="utf-8").read()
    rows = []
    for st in range(1, 16):
        sid = f"b01_h032_{st:02d}"
        for p in "abcd":
            m = re.search(rf'<l xml:id="{sid}_zur_{p}">(.*?)</l>', t)
            if not m:
                continue
            tok = re.search(rf'<l xml:id="{sid}_zur_{p}_tokens">(.*?)</l>', t, re.S)
            morph = []
            for fs in re.findall(r'<fs type="zurich_info"[^>]*>(.*?)</fs>\s*(?=<fs type="zurich_info"|$)', tok.group(1) if tok else "", re.S):
                surf = (re.search(r'name="surface">\s*<string>(.*?)</string>', fs) or [None, ""])[1]
                lem = (re.search(r'name="gra_lemma">\s*<string[^>]*>(.*?)</string>', fs) or [None, ""])[1]
                feats = re.findall(r'<f name="([^"]+)">\s*<symbol value="([^"]+)"/>', fs)
                fx = ".".join(v for k, v in feats if k not in ("gra_gramm",))
                gram = (re.search(r'name="gra_gramm">\s*<symbol value="([^"]+)"', fs) or [None, ""])[1]
                morph.append(f"`{surf}` – {lem} ({gram}{'; ' + fx if fx else ''})")
            rows.append((f"{st}{p}", m.group(1), " ‖ ".join(morph)))
    with open(out, "w", encoding="utf-8") as fh:
        fh.write("# Rigveda 1.32 – the Zurich text and morphology of VedaWeb (CC BY 4.0), one pāda per row:\n"
                 "# label<TAB>pāda<TAB>tokens (surface – lemma (grammar; features), joined by ' ‖ ').\n"
                 "# Made by dossier_tools.py rvtsv from ../VedaWeb/rv_1.032--extract.tei (rv_book_01.tei, 2026-10-23).\n")
        for r in rows:
            fh.write("\t".join(r) + "\n")
    print(out, len(rows))


BASE = {"MK": base_MK, "TH": base_TH, "IL": base_IL, "RV": base_RV, "HY": base_HY, "KJ": base_KJ}
_CACHE = {}


def base(key):
    if key not in _CACHE:
        _CACHE[key] = BASE[key]()
    return _CACHE[key]


# ---------------------------------------------------------------- annotated
def annotated_path(key):
    return os.path.join(HERE, f"annotated-{key}.rtl.md")


def read_annotated(key):
    p = annotated_path(key)
    if not os.path.exists(p):
        return None
    heb, seq, src, probs, cur = {}, [], {}, [], None
    for l in open(p, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in heb:
                probs.append(f"duplicate entry {cur}")
            heb[cur] = []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is None:
            continue
        if l.startswith("> "):
            heb[cur].append(l[2:].strip())
        elif l.startswith("`") and cur not in src and not heb[cur]:
            src[cur] = l.strip()
    for k, v in heb.items():
        if len(v) != 1:
            probs.append(f"entry {k}: {len(v)} '>' lines")
    return {k: (v[0] if v else "") for k, v in heb.items()}, seq, src, probs


W = r"(?<![א-ת])[ובלמהכש]{0,3}"
E = r"(?![א-ת])"
RESERVED = [
    (W + r"(?:תנין|תנינים|התנין|התנינים)" + E, "תַּנִּין is the Bible's word (Gen 1:21): the apparatus compares, the line never uses it"),
    (W + r"(?:לויתן|לוויתן)" + E, "לִוְיָתָן is the Bible's word: never in a line"),
    (W + r"(?:אלוהים|אלהים)" + E, "never אֱלֹהִים"),
    (W + r"(?:ברא|בורא|בראו|בראה|נברא|ויברא|בריאה)" + E, "the root ברא never (Gen 1:21's verb: the apparatus compares)"),
    (W + r"(?:שאול)" + E, "never שְׁאוֹל"),
]


def verify(keys=None, strict=False):
    keys = keys or [k for k in UNITS if os.path.exists(annotated_path(k))]
    bad = 0
    for key in keys:
        a = read_annotated(key)
        b = base(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, probs = a
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        order = [x[0] for x in b]
        if seq != order:
            missing = [x for x in order if x not in heb]
            extra = [x for x in seq if x not in order]
            print(f"{key}: entries differ from the base list (missing {missing}, extra {extra})")
            bad += 1
        bl = {x[0]: x[1] for x in b}
        for k in seq:
            s = src.get(k)
            if s is None or s == "`@`":
                print(f"{key} {k}: source line missing or not filled")
                bad += 1
            elif k in bl and s.strip("`") != bl[k]:
                print(f"{key} {k}: source line differs from the base\n    A: {s}\n    B: `{bl[k]}`")
                bad += 1
            if not heb.get(k, "").strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            for rx, why in RESERVED:
                if re.search(rx, strip_marks(heb.get(k, ""))):
                    print(f"RESERVED {key} {k}: {why}\n    {heb[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} entries (base {len(order)})")
    tp = os.path.join(HERE, "translation.rtl.md")
    if os.path.exists(tp):
        tl = {}
        cur = None
        for l in open(tp, encoding="utf-8"):
            m = re.match(r"^<!-- KEY (\w+) -->", l)
            if m:
                cur = m.group(1)
            m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
            if m and cur:
                tl[(cur, m.group(1))] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
        for key in keys:
            a = read_annotated(key)
            if not a:
                continue
            for k in a[1]:
                if tl.get((key, k)) != a[0][k]:
                    print(f"{key} {k}: translation != annotated (run build)")
                    bad += 1
    print(f"problems: {bad}")
    return bad == 0


def cmd_units():
    for k, (t, lang) in UNITS.items():
        print(f"{k}\t{lang}\t{len(base(k))} lines\t{t}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def cmd_data(key, tr=False):
    for lab, text, info in base(key):
        print(f"### {lab}\n`{text}`")
        for x in info:
            print(f"- {x}")
        print()
    if tr and key == "MK":
        print("## AED's German sentence translations (after drafting only)")
        for x in tr_MK():
            print("-", x)


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-(\w+)\.rtl\.md$", path)
    key = m.group(1)
    bl = {x[0]: x[1] for x in base(key)}
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
        elif ln.strip() == "`@`" and cur in bl:
            text[i] = "`" + bl[cur] + "`"
            n += 1
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by dossier_tools.py build from translation--head.rtl.md, "
             "translation--intro-<KEY>.rtl.md and annotated-<KEY>.rtl.md.\n"
             "To change the text, edit those files and run: python3 -I -B dossier_tools.py build\n-->\n\n")


def build():
    hp = os.path.join(HERE, "translation--head.rtl.md")
    out = [GENERATED + (open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else "# תיק היום החמישי")]
    notes, n = [], 0
    for key in UNITS:
        p = annotated_path(key)
        if not os.path.exists(p):
            continue
        ip = os.path.join(HERE, f"translation--intro-{key}.rtl.md")
        intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"## {UNITS[key][0]}"
        out.append(f"\n<!-- KEY {key} -->\n" + intro + "\n")
        cur = None
        for l in open(p, encoding="utf-8"):
            l = l.rstrip("\n")
            if l.startswith("## "):
                out.append(f"\n###{l[2:]}\n")
            elif re.match(r"^### (\S+)\s*$", l):
                cur = l[4:].strip()
            elif cur and l.startswith("> "):
                out.append(f"**{cur}** {l[2:].strip()}" + "{NOTE}" + "  ")
            elif cur and l.startswith("- **הערת שוליים:**"):
                n += 1
                notes.append(f"[^{n}]: {l[len('- **הערת שוליים:**'):].strip()}")
                out[-1] = out[-1].replace("{NOTE}", f"[^{n}]")
        out = [x.replace("{NOTE}", "") for x in out]
    text = "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(os.path.join(HERE, "translation.rtl.md"), "w", encoding="utf-8").write(text)
    print(f"translation.rtl.md: {n} footnotes")
    return verify()


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "units":
        return cmd_units()
    if cmd == "data" and rest:
        return cmd_data(rest[0], "--tr" in a)
    if cmd == "fill" and rest:
        return cmd_fill(rest[0])
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build() else 1)
    if cmd == "rvtsv" and len(rest) == 2:
        return make_rv_tsv(*rest)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

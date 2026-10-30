"""Tools of the Vedic and Avestan corpus (`הוודה-והאווסטה/`). Run with python3 -I -B from any folder.

    python3 -I -B vedic_tools.py convert                  (re)build the line data of every unit from the raw sources
                                                          (VedaWeb TEI, TITUS, GRETIL, CAB) into ../sources/*/ TSVs
    python3 -I -B vedic_tools.py units                    the texts (KEYs), their project folder and line counts
    python3 -I -B vedic_tools.py data KEY [FROM [TO]]     a translator's line data: each base line, the Rigveda's Zurich
                                                          lemma + morphology per word, the names of the line with their
                                                          fixed Hebrew (renderings §3), the formulas that apply, and the
                                                          corpus lines that repeat it, with their Hebrew
    python3 -I -B vedic_tools.py tr KEY [FROM [TO]]       the rank-3 translations of the lines (AFTER drafting): the
                                                          Rigveda's Griffith / Geldner / Grassmann / Elizarenkova layers
    python3 -I -B vedic_tools.py fill FILE…               replace every `@` under a `### <label>` by the exact base line
    python3 -I -B vedic_tools.py mw WORD                  Monier-Williams (local csl-orig), headword in IAST or SLP1
    python3 -I -B vedic_tools.py gra WORD                 Grassmann's Wörterbuch zum Rig-Veda (local csl-orig)
    python3 -I -B vedic_tools.py ave FORM                 the CAB Avestan dictionary: a form's analyses (online, per word)
    python3 -I -B vedic_tools.py avelemma LEMMA           the CAB glossary + Bartholomae's lemma for an Avestan lemma
    python3 -I -B vedic_tools.py lemma '<regex>'          every Rigveda line with a Zurich lemma matching the regex
    python3 -I -B vedic_tools.py lexmap ['<regex>']       Hebrew ↔ lemma, from the פירוק bullets of every drafted file
    python3 -I -B vedic_tools.py verify [KEY…] [--strict]
    python3 -I -B vedic_tools.py build [KEY…]             translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B vedic_tools.py grep '<regex>' [--all]   the unvocalized `>` lines of this corpus (--all: every corpus)
    python3 -I -B vedic_tools.py gates                    the reserved words, traps, formulas and names
    python3 -I -B vedic_tools.py selftest                 run the checks on the test lines of renderings.md §10

KEYs (see UNITS): RV1.32, RV10.129, … (Rigveda hymns; labels = stanza + pāda: "1a"), SB1.8.1 and SB1.2.3 (Śatapatha
Brāhmaṇa; labels = kaṇḍikā + TITUS sentence: "1a", "1b"), MBH3.185 (labels = the BORI śloka + half: "1" (a speaker
line), "1a", "1c", "17e"), VD2 (Vīdēvdād 2; labels = the CAB stanza: "1"…"43"), AB7 (Aitareya Brāhmaṇa 7.13–18;
labels = khaṇḍa.sentence + line letter: "13.1a"), KU1 (Kaṭha Upaniṣad, vallīs 1–3; labels "1.1a" = vallī 1, verse 1,
first half). Annotated file: <project>/annotated-<KEY>.rtl.md.

Bases (../sources/; the converter and its normalizations are described in ../sources/*/README.md):
  VedaWeb/rv_<B>.<HHH>--zurich.tsv   (committed; the Zurich text and morphology, CC BY 4.0), from rv_book_NN.tei
  TITUS/sb_1.8.1.tsv, sb_1.2.3.tsv, ab_7.13-18.tsv   (local; TITUS forbids republication) – Weber's ŚB, Aufrecht's AB,
                                    accented / unaccented as TITUS has them, aspirate ʰ written h
  GRETIL/mbh_3.185.tsv (local; the BORI critical text), GRETIL/katha_1-3.tsv (CC BY-NC-SA: committed)
  CAB/vd_2.tsv                      (local; the CAB basis edition, licence "CC" without a version)

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow the base's line list (a placeholder
     `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals the base line exactly (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings in the bracket-free unvocalized `>` line: an error unless the line's licence text (its
     folded transliteration + the Zurich lemmas + the neighbouring lines' edge words) matches the licence;
  5. NAMES (renderings §3): a name of the table in the line's source → its Hebrew in the line; the first occurrence of
     each name in the file is vocalized;
  6. TRAPS: unvocalized strings that read as another Hebrew word;
  7. FORMULAS (renderings §8): where the source has a formula, the Hebrew has its fixed rendering;
  8. RV 1.32: the lines of the fifth-day dossier's excerpt (../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-RV.rtl.md)
     have the same Hebrew here (the full hymn and the excerpt are aligned by script);
  9. repeated lines (identical folded source, 3+ words) with different Hebrew are listed (justify or fix).
Escapes, written in the entry: `[סטייה מן הנוסחה: <reason>]` (7), `[היתר שם: <name>]` (5), `[היתר שער: <word>]` (4).
Exit code 1 on any error of 1–8.
"""
import difflib
import glob
import html
import json
import os
import re
import sys
import unicodedata
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
SRC = os.path.join(ROOT, "sources")
NIQ = "֑-ֽֿ-ׇ"
DOSSIER_RV = os.path.join(ROOT, "מיתוסים-אוגריתיים", "3-תיק-היום-החמישי", "annotated-RV.rtl.md")

P1 = "1-מזמורי-הראשית"
P2 = "2-אינדרה-והנחש"
P3 = "3-המבול"
P4 = "4-העקדה"
P5 = "5-יאמה-והמתים"
P6 = "6-המהמר-והצפרדעים"
PROJECT_TITLES = {P1: "מזמורי הראשית של הריגוודה", P2: "אינדרה והנחש (ריגוודה א 32)", P3: "המבול ההודו־איראני",
                  P4: "העקדה: שונהשפה, הקרבן המחליף, נצ'יקטס", P5: "יאמה והמתים", P6: "המהמר והצפרדעים"}

# KEY: (project, Hebrew title, kind, source spec)
UNITS = {
    "RV10.129": (P1, "ריגוודה י 129: \"לא היה אז אין, ולא היה יש\"", "rv", (10, 129)),
    "RV10.121": (P1, "ריגוודה י 121: עֻבַּר הזהב", "rv", (10, 121)),
    "RV10.72": (P1, "ריגוודה י 72: הולדת האלים", "rv", (10, 72)),
    "RV10.190": (P1, "ריגוודה י 190: הסדר והאמת מן הלהט", "rv", (10, 190)),
    "RV10.90": (P1, "ריגוודה י 90: האדם (פּוּרוּשָׁה)", "rv", (10, 90)),
    "RV1.32": (P2, "ריגוודה א 32: אינדרה והנחש", "rv", (1, 32)),
    "SB1.8.1": (P3, "שתפתה ברהמנה א 8 1: מָנוּ והדג", "titus_sb", (8, 1, 1, 10)),
    "MBH3.185": (P3, "מהבהארטה ג 185: סיפור הדג", "mbh", (3, 185)),
    "VD2": (P3, "וידבדאד 2: יִימָה והמתחם", "vd", (2,)),
    "AB7": (P4, "איתרייה ברהמנה ז 13–18: שׁוּנַהְשֵׁפָּה", "titus_ab", (236, 241)),
    "SB1.2.3": (P4, "שתפתה ברהמנה א 2 3 6–9: עצם הזבח עובר מן האדם לבהמות", "titus_sb", (2, 3, 6, 9)),
    "KU1": (P4, "קטהה אופנישד, פרק ראשון: נצ'יקטס אצל המוות", "katha", (1, 3)),
    "RV10.10": (P5, "ריגוודה י 10: יָמִי ויָמָה", "rv", (10, 10)),
    "RV10.14": (P5, "ריגוודה י 14: יָמָה, דרך האבות", "rv", (10, 14)),
    "RV10.15": (P5, "ריגוודה י 15: האבות", "rv", (10, 15)),
    "RV10.16": (P5, "ריגוודה י 16: אש השריפה", "rv", (10, 16)),
    "RV10.17": (P5, "ריגוודה י 17: סַרַנְיוּ, פּוּשָׁן, המים", "rv", (10, 17)),
    "RV10.18": (P5, "ריגוודה י 18: אל אמא האדמה", "rv", (10, 18)),
    "RV10.34": (P6, "ריגוודה י 34: המהמר", "rv", (10, 34)),
    "RV7.103": (P6, "ריגוודה ז 103: הצפרדעים", "rv", (7, 103)),
}


# ---------------------------------------------------------------- folding (licences, repeated lines)
FOLD = {"ə": "e", "ϑ": "th", "β": "b", "γ": "g", "δ": "d", "ŋ": "ng", "ɱ": "m", "ᵛ": "v", "x": "x", "ʰ": "h",
        "ś": "s", "ṣ": "s", "š": "s", "ž": "z", "č": "c", "ṇ": "n", "ñ": "n", "ṅ": "n", "ń": "n", "ṃ": "m", "ṁ": "m",
        "ḥ": "h", "ṭ": "t", "ḍ": "d", "ḷ": "l", "ṛ": "r", "ṝ": "r", "ą": "a", "ē": "e", "ō": "o", "ī": "i",
        "ū": "u", "ā": "a", "ẏ": "y", "t̰": "t"}


def fold(s):
    """Transliteration → lower-case ASCII letters with single spaces (accents, diacritics, the CAB word dots and
    punctuation dropped; r̥ = ṛ; Avestan ϑ = th, ə = e …). The licence and repeated-line text."""
    s = unicodedata.normalize("NFC", s.lower())
    s = s.replace("r̥", "r").replace("l̥", "l").replace("̰", "")
    s = "".join(FOLD.get(c, c) for c in s)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-z\s]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def fold_lemma(s):
    return fold(re.sub(r"[√\-\d]", "", s or ""))


# ---------------------------------------------------------------- converters (raw sources → TSV line data)
def _rv_tsv_path(b, h):
    return os.path.join(SRC, "VedaWeb", f"rv_{b}.{h:03d}--zurich.tsv")


def _rv_tr_path(b, h):
    return os.path.join(SRC, "VedaWeb", f"rv_{b}.{h:03d}--translations.tsv")


def convert_rv(b, h):
    tei = os.path.join(SRC, "VedaWeb", f"rv_book_{b:02d}.tei")
    t = open(tei, encoding="utf-8").read()
    m = re.search(rf'<div xml:id="b{b:02d}_h{h:03d}"[^>]*type="hymn">(.*?)(?=<div xml:id="b{b:02d}_h{h + 1:03d}"|</body>)', t, re.S)
    if not m:
        sys.exit(f"hymn {b}.{h} not found in {tei}")
    hy = m.group(1)
    rows, trs = [], []
    for st in range(1, 60):
        sid = f"b{b:02d}_h{h:03d}_{st:02d}"
        if f'xml:id="{sid}"' not in hy:
            break
        for p in "abcdefg":
            mm = re.search(rf'<l xml:id="{sid}_zur_{p}">(.*?)</l>', hy)
            if not mm:
                continue
            tok = re.search(rf'<l xml:id="{sid}_zur_{p}_tokens">(.*?)</l>', hy, re.S)
            morph = []
            for fs in re.findall(r'<fs type="zurich_info"[^>]*>(.*?)</fs>\s*(?=<fs type="zurich_info"|$)', tok.group(1) if tok else "", re.S):
                surf = (re.search(r'name="surface">\s*<string>(.*?)</string>', fs) or [None, ""])[1]
                lem = (re.search(r'name="gra_lemma">\s*<string[^>]*>(.*?)</string>', fs) or [None, ""])[1]
                feats = re.findall(r'<f name="([^"]+)">\s*<symbol value="([^"]+)"/>', fs)
                fx = ".".join(v for k, v in feats if k not in ("gra_gramm",))
                gram = (re.search(r'name="gra_gramm">\s*<symbol value="([^"]+)"', fs) or [None, ""])[1]
                morph.append(f"`{surf}` – {lem} ({gram}{'; ' + fx if fx else ''})")
            rows.append((f"{st}{p}", html.unescape(mm.group(1)), " ‖ ".join(morph)))
        for src in ("griffith", "geldner", "grassmann", "elizarenkova", "macdonell", "renou"):
            lg = re.search(rf'<lg xml:id="{sid}_{src}"[^>]*>(.*?)</lg>', hy, re.S)
            if lg:
                txt = " / ".join(html.unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in re.findall(r"<l[^>]*>(.*?)</l>", lg.group(1), re.S))
                trs.append((str(st), src, txt))
    with open(_rv_tsv_path(b, h), "w", encoding="utf-8") as fh:
        fh.write(f"# Rigveda {b}.{h} – the Zurich text and morphology of VedaWeb (CC BY 4.0), one pāda per row:\n"
                 "# label<TAB>pāda<TAB>tokens (surface – lemma (grammar; features), joined by ' ‖ ').\n"
                 f"# Made by הוודה-והאווסטה/vedic_tools.py convert from ../VedaWeb/rv_book_{b:02d}.tei.\n")
        for r in rows:
            fh.write("\t".join(r) + "\n")
    with open(_rv_tr_path(b, h), "w", encoding="utf-8") as fh:
        fh.write(f"# Rigveda {b}.{h} – VedaWeb's translation layers (git-ignored: Geldner 1951, Elizarenkova and Renou are ©;\n"
                 "# Griffith 1889–92 and Grassmann 1876–77 are public domain). stanza<TAB>source<TAB>text\n")
        for r in trs:
            fh.write("\t".join(r) + "\n")
    return len(rows)


def _titus_text(frag):
    s = re.sub(r"<BR>", "\n", frag, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s).replace("\xa0", " ").replace("ʰ", "h")
    out = []
    for x in s.split("\n"):
        x = re.sub(r"\s+", " ", x).strip()
        if x.startswith("This text is part of the TITUS"):
            break  # the page footer
        if x:
            out.append(x)
    return out


def convert_sb(part, br, k1, k2, name):
    t = open(os.path.join(SRC, "TITUS", f"sbm{part:03d}.htm"), encoding="utf-8", errors="replace").read()
    rows = []
    for k in range(k1, k2 + 1):
        for s in "abcdefgh":
            anc = f'NAME="YVW_SBM_1_{part}_{br}_{k}_{s}"'
            i = t.find(anc)
            if i < 0:
                continue
            j = t.find("<span id=h", i + len(anc))
            frag = t[i + len(anc):j if j > 0 else len(t)]
            frag = frag.split("</sPAN>", 1)[1] if "</sPAN>" in frag else frag
            frag = re.split(r"This text is part of the TITUS edition", frag)[0]  # the page footer
            lines = _titus_text(frag)
            rows.append((f"{k}{s}", " ".join(lines)))
    _write_tsv(os.path.join(SRC, "TITUS", name), rows,
               f"Śatapatha Brāhmaṇa (Mādhyandina) 1.{part}.{br}.{k1}–{k2}, TITUS (Weber 1855; local only: TITUS forbids republication). label = kaṇḍikā + TITUS sentence; ʰ written h.")
    return len(rows)


def convert_ab(p1, p2):
    rows = []
    for part in range(p1, p2 + 1):
        t = open(os.path.join(SRC, "TITUS", f"ab{part:03d}.htm"), encoding="utf-8", errors="replace").read()
        kh = part - 223  # pañcikā 7 begins after 223 khaṇḍas
        for m in re.finditer(r'NAME="RV_AB_7_(\d+)_(\d+)">', t):
            kk, sn = m.group(1), m.group(2)
            j = t.find("<span id=h5>", m.end())
            frag = t[m.end():j if j > 0 else len(t)]
            frag = frag.split("</sPAN>", 1)[1] if "</sPAN>" in frag else frag
            frag = re.split(r"This text is part of the TITUS edition", frag)[0]  # the page footer
            kind = "verse" if "iovml" in frag else "prose"
            for n, ln in enumerate(_titus_text(frag)):
                if re.fullmatch(r"\{.*\}", ln):
                    continue
                rows.append((f"{kk}.{sn}{'abcdefghijklmnop'[n]}", ln, kind))
        assert kh >= 13
    _write_tsv(os.path.join(SRC, "TITUS", "ab_7.13-18.tsv"), rows,
               "Aitareya Brāhmaṇa 7.13–18 (= adhyāya 33), TITUS (Aufrecht 1879; local only: TITUS forbids republication). label = khaṇḍa.sentence + line letter; kind = prose / verse (the gāthās); ʰ written h.")
    return len(rows)


def convert_mbh():
    t = open(os.path.join(SRC, "GRETIL", "mbh_03_u.htm"), encoding="utf-8").read()
    t = html.unescape(re.sub(r"<[^>]+>", "", t))
    rows = []
    for ln in t.split("\n"):
        m = re.match(r"^03,185\.(\d{3})([a-z]?)\t(.*)$", ln.rstrip())
        if m:
            rows.append((f"{int(m.group(1))}{m.group(2)}", m.group(3).strip()))
    _write_tsv(os.path.join(SRC, "GRETIL", "mbh_3.185.tsv"), rows,
               "Mahābhārata 3.185 (the BORI critical text, GRETIL e-text; local only: 'for reference purposes only'). label = śloka + half (a / c / e; no letter = a speaker line).")
    return len(rows)


def convert_katha():
    t = open(os.path.join(SRC, "GRETIL", "sa_kathopaniSad.xml"), encoding="utf-8").read()
    rows = []
    for lg in re.findall(r"<lg>(.*?)</lg>", t, re.S):
        ls = [html.unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in re.findall(r"<l>(.*?)</l>", lg, re.S)]
        m = re.search(r"KaU_(\d+)\.(\d+)", " ".join(ls))
        if not m or int(m.group(1)) > 3:
            continue
        v, n = m.group(1), m.group(2)
        for i, l in enumerate(ls):
            l = re.sub(r"\s*//\s*KaU_[\d.]+\s*//\s*$", "", l)
            l = re.sub(r"\s*/\s*$", "", l).strip()
            rows.append((f"{v}.{n}{'abcdef'[i]}", l))
    _write_tsv(os.path.join(SRC, "GRETIL", "katha_1-3.tsv"), rows,
               "Kaṭha Upaniṣad, vallīs 1–3 (= adhyāya 1), GRETIL TEI (the Vienna University Student Team; CC BY-NC-SA 4.0). label = vallī.verse + half; the daṇḍas and verse numbers dropped.")
    return len(rows)


def convert_vd():
    t = open(os.path.join(SRC, "CAB", "cab_corpus_plain.txt"), encoding="utf-8").read()
    rows = []
    for m in re.finditer(r"^VS2\.(\d+) \(#GV2\.\d+\)\s*\n(.*?)\n", t, re.M):
        rows.append((m.group(1), m.group(2).strip()))
    _write_tsv(os.path.join(SRC, "CAB", "vd_2.tsv"), rows,
               "Vīdēvdād 2 (the Vīdēvdād Sāde chapter 2 of the CAB linguistic corpus = Geldner's numbering; local only: licence 'CC' without a version). label = the stanza.")
    return len(rows)


def _write_tsv(path, rows, head):
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(f"# {head}\n# Made by הוודה-והאווסטה/vedic_tools.py convert.\n")
        for r in rows:
            fh.write("\t".join(r) + "\n")


def cmd_convert():
    for key, (proj, title, kind, spec) in UNITS.items():
        if kind == "rv":
            n = convert_rv(*spec)
        elif kind == "titus_sb":
            n = convert_sb(spec[0], spec[1], spec[2], spec[3], f"sb_1.{spec[0]}.{spec[1]}.tsv")
        elif kind == "titus_ab":
            n = convert_ab(*spec)
        elif kind == "mbh":
            n = convert_mbh()
        elif kind == "katha":
            n = convert_katha()
        elif kind == "vd":
            n = convert_vd()
        print(f"{key}: {n} lines")


# ---------------------------------------------------------------- base texts
_DATA = {}


def _read_tsv(path):
    out = []
    for ln in open(path, encoding="utf-8"):
        if ln.startswith("#") or not ln.strip():
            continue
        out.append(ln.rstrip("\n").split("\t"))
    return out


def _parse_tokens(s):
    out = []
    for seg in (s or "").split(" ‖ "):
        m = re.match(r"^`([^`]*)` – (.*?) \(([^;)]*)(?:; ([^)]*))?\)$", seg.strip())
        if m:
            out.append({"form": m.group(1), "lemma": m.group(2), "gram": m.group(3), "feats": m.group(4) or ""})
    return out


def rows(key):
    if key in _DATA:
        return _DATA[key]
    proj, title, kind, spec = UNITS[key]
    if kind == "rv":
        rs = [{"label": c[0], "text": c[1], "words": _parse_tokens(c[2] if len(c) > 2 else "")} for c in _read_tsv(_rv_tsv_path(*spec))]
    elif kind == "titus_sb":
        rs = [{"label": c[0], "text": c[1], "words": []} for c in _read_tsv(os.path.join(SRC, "TITUS", f"sb_1.{spec[0]}.{spec[1]}.tsv"))]
    elif kind == "titus_ab":
        rs = [{"label": c[0], "text": c[1], "kind": c[2], "words": []} for c in _read_tsv(os.path.join(SRC, "TITUS", "ab_7.13-18.tsv"))]
    elif kind == "mbh":
        rs = [{"label": c[0], "text": c[1], "words": []} for c in _read_tsv(os.path.join(SRC, "GRETIL", "mbh_3.185.tsv"))]
    elif kind == "katha":
        rs = [{"label": c[0], "text": c[1], "words": []} for c in _read_tsv(os.path.join(SRC, "GRETIL", "katha_1-3.tsv"))]
    elif kind == "vd":
        rs = [{"label": c[0], "text": c[1], "words": []} for c in _read_tsv(os.path.join(SRC, "CAB", "vd_2.tsv"))]
    _DATA[key] = rs
    return rs


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def lemmas_of(key, lab):
    r = row(key, lab)
    return [fold_lemma(w["lemma"]) for w in (r or {}).get("words", []) if w.get("lemma")]


def license_text(key, lab):
    r = row(key, lab)
    if not r:
        return ""
    rs = rows(key)
    i = rs.index(r)
    t = fold(r["text"])
    lems = " ".join(sorted(set(lemmas_of(key, lab))))
    extra = ""
    if i > 0 and fold(rs[i - 1]["text"]).split():
        extra += " " + fold(rs[i - 1]["text"]).split()[-1]
    if i + 1 < len(rs) and fold(rs[i + 1]["text"]).split():
        extra += " " + fold(rs[i + 1]["text"]).split()[0]
    return f" {t} | {lems} |{extra} "


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, UNITS[key][0], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, UNITS[key][0], f"translation-{key}.rtl.md")


def read_annotated(key, path=None):
    """({label: hebrew}, label sequence, {label: source line}, {label: entry text}, problems) or None."""
    p = path or annotated_path(key)
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
    """Hebrew without the line tags, brackets, editorial marks, footnote refs, quotes and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"\{[^}]*\}", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״]", "", s)
    s = re.sub(rf"[{NIQ}]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- gates (renderings §5)
W = r"(?<![א-ת])ו?(?:ש|כש)?[בלהמכ]?"     # optional prefixes at a word start (never a class that swallows the root: §5.2)
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licence regex on the licence text or None = never, why)
RESERVED = [
    # --- never (renderings §5.1): the words of Gen 1–3, 6–9 and 22 that no Indo-Iranian word licenses ---
    (W + alt("אלוהים", "אלהים", "אלהי", "אלוהיו", "אלוהינו", "אלוהיך") + E, None, "deva = אֵל, devāḥ = אֵלִים: אֱלֹהִים never"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "יברא", "בראם", "בוראו", "בריאתו", "הבריאה", "בריות", "בריה", "הבריות") + E, None, "the root ברא never (√sr̥j = שִׁלַּח, visŕ̥ṣṭi = הַשְׁלָחָה; √jan = הוֹלִיד; √kr̥ = עָשָׂה; √takṣ = חִשֵּׁל)"),
    (W + alt("תהום", "תהומות", "התהום", "תהומה") + E, None, "תְּהוֹם never (salilá = נַחְשׁוֹל; gambhīra = עָמֹק)"),
    (W + alt("תהו", "ותהו", "בהו", "ובהו") + E, None, "תֹּהוּ / בֹּהוּ never"),
    (W + alt("רקיע", "הרקיע", "רקיעים") + E, None, "רָקִיעַ never (antárikṣa = חֲלַל־הָאֲוִיר; dyú = שָׁמַיִם)"),
    (W + alt("ראשית", "בראשית", "מראשית", "ראשיתו", "ראשיתם") + E, None, "רֵאשִׁית never: ágre = בַּתְּחִלָּה, prathamá = רִאשׁוֹן (Gen 1:1 in the apparatus)"),
    (W + alt("מבול", "המבול", "למבול", "במבול", "מבולו") + E, None, "מַבּוּל never: ógha = שֶׁטֶף, saṃplava = הֲצָפָה (Gen 6–9 in the apparatus)"),
    (W + alt("תבה", "תיבה", "התבה", "התיבה", "בתיבה", "בתבה", "לתיבה") + E, None, "תֵּבָה never (an Egyptian loanword): nau = סְפִינָה"),
    (W + alt("תנין", "תנינים", "התנין", "התנינים", "לויתן", "לוויתן", "רהב") + E, None, "תַּנִּין / לִוְיָתָן / רַהַב never (áhi = נָחָשׁ, the dossier's comparison word)"),
    (W + alt("שאול", "שאולה", "לשאול") + E, None, "שְׁאוֹל never (Yama's realm in the source's own words)"),
    (W + alt("עדן", "בעדן") + E, None, "עֵדֶן never"),
    (W + alt("צלע", "הצלע", "צלעו", "צלעות", "מצלעותיו") + E, None, "צֵלָע never"),
    (r"עזר כנגד", None, "עֵזֶר כְּנֶגְדּוֹ never"),
    (W + alt("צלם", "בצלם", "צלמו", "בצלמו", "צלמנו", "דמות", "בדמות", "כדמות", "דמותו", "כדמותנו", "בדמותו") + E, None, "צֶלֶם / דְּמוּת never (rūpá = צוּרָה; Gen 1:26 in the apparatus)"),
    (W + alt("עקד", "ויעקד", "עקדה", "העקדה", "עקדו", "עקוד", "נעקד", "לעקוד", "עקידה", "העקידה") + E, None, "the root עקד never (√bandh = כָּפַת; Gen 22:9 in the apparatus)"),
    (W + alt("מאכלת", "המאכלת") + E, None, "מַאֲכֶלֶת never (así = חֶרֶב; Gen 22:6, 10 in the apparatus)"),
    (W + alt("שה", "השה", "שיו") + E, None, "שֶׂה never (Gen 22:7–8)"),
    (W + alt("העולה", "עולות", "העולות", "לעולה") + E, r"(?!)", "עֹלָה never (āhuti = נֶסֶךְ; yajñá = זֶבַח); the bare string עולה 'rising' is not gated – vocalize it עוֹלֶה"),
    (W + alt("ניחוח", "ניחח", "הניחוח") + E, None, "נִיחוֹחַ never (Gen 8:21)"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות", "הנשמה") + E, None, "נְשָׁמָה never: prāṇá = נְשִׁימָה, √an = נָשַׁם, ātmán = נֶפֶשׁ (Gen 2:7 in the apparatus)"),
    (W + alt("ערוה", "ערות", "ערוות", "ערותה", "ערותו") + E, None, "עֶרְוָה never (Lev 18 in the apparatus)"),
    (W + alt("מאור", "מאורות", "המאורות", "המאור", "מאורים") + E, None, "מָאוֹר never (sū́rya = שֶׁמֶשׁ, candrámas = יָרֵחַ)"),
    (W + alt("כפר", "כפרה", "כופר", "יכפר", "הכפורים", "כפורים") + E, r"(?:iva| na |nna ).*(?:gav| go| ga| dhen|vrs|vats|usr)|(?:gav| go| ga| dhen|vrs|vats|usr).*(?:iva| na )", "the root כפר never – except the simile כְּ־ + פַּר / פָּרָה 'like a bull / cow' where the source has iva / ná with a cattle word (write it vocalized)"),
    # --- only for the source's own counterpart (renderings §5.2) ---
    (W + alt("נחש", "הנחש", "נחשים", "הנחשים", "נחשי", "נחשה") + E, r" ahi| ahe| azh| azi| sarp| ahin", "נָחָשׁ only for áhi / Av. aži / sarpá"),
    (W + alt("חושך", "חשך", "החושך", "החשך", "חשכה", "חשיכה", "בחושך", "בחשך", "מחושך") + E, r"tama|tamis|tamas|andha|temah|tqma|tqm", "חֹשֶׁךְ only for támas / andhá (Av. təmah)"),
    (W + alt("רוח", "רוחות", "הרוח", "הרוחות", "רוחו", "ברוח", "רוחי", "לרוח") + E, r"vat|vay|vaat|vayu|mainii|mainy|manyu", "רוּחַ only for vā́ta / vāyú (Av. vāta) – the wind – and Av. mainiiu 'spirit'; ātmán = נֶפֶשׁ, prāṇá = נְשִׁימָה"),
    (W + alt("זרע", "הזרע", "זרעו", "זרעים", "זרעה", "זרעם", "לזרע", "מזרע") + E, r"ret|bij|taoxm|tauxm|taox|garbh|vap", "זֶרַע only for rétas / bī́ja / Av. taoxman (and √vap 'sow')"),
    (W + alt("קשת", "הקשת", "קשתו", "בקשת", "קשתי") + E, r"dhanu|dhanv|thanva|indradhan", "קֶשֶׁת only for dhánus (Gen 9:13 in the apparatus)"),
    (W + alt("איל", "האיל", "אילים", "האילים") + E, r"mes|vrsn|aja |ura", "אַיִל only for meṣá (ram)"),
    (W + alt("עפר", "העפר", "עפרה", "לעפר") + E, r"pams|panc", "עָפָר only for pāṃsú (reṇú = אָבָק, §11.1)"),
    (W + alt("אדמה", "האדמה", "באדמה", "לאדמה", "אדמתו", "מאדמה", "מהאדמה") + E, r"bhum|bhu|zam|zem|kse|ksa|ksm", "אֲדָמָה only for bhū́mi (and Av. zam 'ground' where by sense)"),
    (W + alt("אדם", "האדם", "לאדם", "באדם", "מאדם", "כאדם") + E, r"purus|purs|puru|nar|nr|mas|masy|purusa", "אָדָם only for púruṣa (Av. maṣ̌iia 'man')"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "הטוב", "הטובה", "הטובים", "הטובות", "טובו", "טובת", "מיטב", "היטיב", "וטוב") + E,
     r"bhadr|vasu|vasv|vam|sadh|siva|\bsu|vohu|vanh|vahis|srir|sri|hu|sev|sobh|kalya|bhavya|jyes|sres", "טוֹב only for bhadrá / vásu / vāmá / sādhú / su- (Av. vohu, vahišta)"),
    (W + alt("ברך", "בירך", "ברכה", "ברכת", "מבורך", "יברך", "ברוך", "ברכו", "ברכם", "ברכות") + E, r"asis|asir|svast|vand|bhadr", "the root ברך only for āśís ('blessing, wish') / svastí"),
    (W + alt("ארור", "ארורה", "ארר", "אורר", "מארה") + E, r"sap|abhisap|nirrt", "the root ארר only for √śap"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "שבתה", "וישבות", "שבות") + E, None, "the root שבת never"),
    (W + alt("קדוש", "קדושה", "קדושים", "הקדוש", "קודש", "הקודש", "קדש", "קידש", "מקדש", "המקדש") + E, r"medhy|yajniy|pavitr|puny|suc|yasniy|yazat|spent", "the root קדש only for médhya / yajñíya / Av. spəṇta / yazata"),
    (W + alt("מזבח", "המזבח", "מזבחות", "מזבחו") + E, r"vedi|uttaraved|yup", "מִזְבֵּחַ only for védi (the altar-ground) – yū́pa = עַמּוּד־הַזֶּבַח"),
    (r"(?<![א-ת])ו?(?:נח|נוח|ינוח|לנוח)(?![א-ת])", r"(?!)", "נָח never (the string of Noah): √śī = שָׁכַב, √viś = שָׁקַע"),
    (W + alt("חי", "חיה", "חיים", "החיים", "חית", "חיות") + E, r"jiv|jiva|asu|ayu|ayus|prana|jav|gaya|gay|gai|gaeth|pasu|svap|mrg|bhu|jan|vaj|ji|vita|stao|pasv|vay|tiryag", "חַי / חַיָּה / חַיִּים only for jīvá / ásu / ā́yus / mr̥gá (animal) / Av. gaiia"),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line, condition regex on the licence text: if it matches, the unvocalized string is an error; why)
TRAPS = [
    (RW + r"(?:אל|אלים|אלה|אלות|אלי|אלת)" + RE_, r" dev| daev| sura| yazat", "deva: אֵל / אֵלִים / אֵלָה / אֵלוֹת always vocalized ('to', 'these')"),
    (RW + r"(?:ימה)" + RE_, r"yama|yima", "Yama / Yima: always vocalized יָמָה / יִימָה ('to the sea')"),
    (RW + r"(?:ימי)" + RE_, r"yami", "Yamī: always vocalized יָמִי ('days of')"),
    (RW + r"(?:מנו)" + RE_, r"manu|manav|manor|manos|mano", "Manu: always vocalized מָנוּ ('they counted', 'from us')"),
    (RW + r"(?:סומה)" + RE_, r"som", "Soma: always vocalized סוֹמָה ('blind')"),
    (RW + r"(?:מיטרה)" + RE_, r"mitr|mithr", "Mitra: always vocalized מִיטְרָה ('mitre')"),
    (RW + r"(?:אגני)" + RE_, r"agn", "Agni: vocalized אַגְנִי at its first occurrence in each file"),
    (RW + r"(?:אשה|אישה)" + RE_, r"agn|svah|svaha", "אִשֶּׁה ('fire-offering') / אִשָּׁה ('woman'): vocalize where both are possible"),
    (RW + r"(?:מות)" + RE_, r"mrtyu|mrty|mrt|mar", "מָוֶת / מוֹת / מוּת: vocalize the unvocalized מות"),
    (RW + r"(?:אדיטי|אדיתי)" + RE_, r"aditi", "Aditi: always vocalized אַדִיטִי"),
    (RW + r"(?:אורה|אורא)" + RE_, r"ahur|ahura", "Ahura: write אֲהוּרָה, vocalized"),
]


# ---------------------------------------------------------------- renderings tables
def _table(section_prefix):
    p = os.path.join(HERE, "renderings.md")
    out = []
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## ") or l.startswith("### "):
            insec = l.lstrip("#").strip().startswith(section_prefix)
            continue
        if insec and l.startswith("|") and not l.startswith("|---"):
            cells = [c.strip().replace("\\|", "|") for c in re.split(r"(?<!\\)\|", l.strip().strip("|"))]
            out.append(cells)
    return out


def names():
    """[(source regex on the folded text, hebrew_vocalized, hebrew_plain, star, what)] from renderings §3.1:
    | Source name | folded-source regex | Hebrew | ★ | note |."""
    out = []
    for cells in _table("3.1"):
        if len(cells) < 4 or cells[0].lower().startswith("source"):
            continue
        rx = cells[1].strip("`")
        heb = cells[2].strip("`")
        if not rx or not heb:
            continue
        out.append((rx, heb, strip_marks(heb), cells[3] == "★", cells[0]))
    return out


def formulas():
    """renderings §8: | F<n> | folded-source regex | Hebrew regex | lines |"""
    out = []
    for cells in _table("8."):
        if len(cells) < 4 or not re.match(r"^F\d+$", cells[0]):
            continue
        out.append((cells[0], cells[1].strip("`"), cells[2].strip("`"), cells[3]))
    return out


# ---------------------------------------------------------------- the checks of one line
def lic(rx, key, lab):
    return rx is not None and re.search(rx, license_text(key, lab)) is not None


def _heb_has(plain, h):
    h = strip_marks(h)
    words = re.split(r"[\s,.;:!?–—()\[\]]+", plain)
    cands = {h}
    if len(h) > 3 and h.startswith("ה"):
        cands.add(h[1:])
    for c in cands:
        if " " in c or "־" in c:
            if re.search(r"(?<![א-ת])[ובלמהכש]{0,3}" + re.escape(c) + r"(?![א-ת])", plain) or \
                    re.search(r"(?<![א-ת])[ובלמהכש]{0,3}" + re.escape(c.replace("־", " ")) + r"(?![א-ת])", plain.replace("־", " ")):
                return True
            continue
        for w in words:
            for part in w.split("־"):
                for k in range(0, 4):
                    stem = part[k:] if k <= len(part) else ""
                    if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                        if re.fullmatch(r"[ובלמהכש]{0,3}", part[:k]):
                            return True
    return False


def _find_word(heb, hp):
    first = hp.split()[0].split("־")[0]
    cands = {first} | ({first[1:]} if len(first) > 3 and first.startswith("ה") else set())
    for w in re.split(r"[\s־,.;:!?–—()\[\]]+", heb):
        p = strip_marks(w)
        for c in cands:
            for k in range(0, 4):
                if not re.fullmatch(r"[ובלמהכש]{0,3}", p[:k]):
                    continue
                stem = p[k:]
                if stem == c or (stem.startswith(c) and stem[len(c):] in ("ים", "ות", "ית", "יות", "יים", "ה", "י", "ן")):
                    return w
    return ""


def check_line(key, lab, heb, body, out, first_seen=None):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    r = row(key, lab) or {"text": "", "words": []}
    src = r["text"]
    srcf = " " + fold(src) + " "
    for rx, allow, why in RESERVED:
        m = re.search(rx, plain)
        if m and not lic(allow, key, lab):
            if re.search(r"\[היתר שער: [^\]]*" + re.escape(m.group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: «{m.group(0).strip()}» – {why}\n    {heb}\n    src: {src}")
            bad += 1
    for rx, hv, hp, star, what in names():
        if not re.search(rx, srcf):
            continue
        if not _heb_has(plain, hp):
            if f"[היתר שם: " in body:
                continue
            out.append(f"NAME {key} {lab}: {what} → {hv} (renderings §3) is not in the line\n    {heb}")
            bad += 1
        elif first_seen is not None and hp not in first_seen:
            first_seen.add(hp)
            if not re.search(rf"[{NIQ}]", _find_word(heb, hp)):
                out.append(f"VOCALIZE {key} {lab}: the first occurrence of {hv} in the file must be vocalized\n    {heb}")
                bad += 1
    for rx, cond, why in TRAPS:
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    for fid, grx, hrx, _ in formulas():
        if re.search(grx, srcf) and not re.search(nopunct(hrx), nopunct(plain)) and "[סטייה מן הנוסחה" not in body:
            out.append(f"FORMULA {key} {lab}: {fid} `{grx}` → `{hrx}` (renderings §8)\n    {heb}\n    src: {src}")
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


def check_dossier():
    """RV 1.32: the dossier's excerpt and the full hymn must carry the same Hebrew line by line."""
    a = read_annotated("RV1.32")
    d = read_annotated("RV1.32", DOSSIER_RV)
    if a is None or d is None:
        return 0
    bad = 0
    for lab in d[1]:
        if lab in a[0] and a[0][lab] != d[0][lab]:
            print(f"DOSSIER RV1.32 {lab}: the full hymn and the fifth-day dossier differ\n   here:    {a[0][lab]}\n   dossier: {d[0][lab]}")
            bad += 1
        if lab in a[2] and lab in d[2] and a[2][lab] != d[2][lab]:
            print(f"DOSSIER RV1.32 {lab}: source lines differ\n   {a[2][lab]}\n   {d[2][lab]}")
            bad += 1
    return bad


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
    if "RV1.32" in keys:
        bad += check_dossier()
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = fold(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical folded source) with different Hebrew (justify in the apparatus or fix):")
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


# ---------------------------------------------------------------- data, tr, fill, dictionaries, lemma, lexmap, grep
def _corpus():
    return [(k2, r["label"], fold(r["text"])) for k2 in UNITS for r in rows(k2)]


def _similar(key, lab, nk, corpus, allh, thr=0.8):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            rr = 1.0
        elif len(nk.split()) >= 4 and abs(len(n2) - len(nk)) < 0.4 * len(nk):
            rr = difflib.SequenceMatcher(None, nk, n2).ratio()
            if rr < thr:
                continue
        else:
            continue
        out.append((rr, k2, l2, n2, allh.get(k2, {}).get(l2) or "(not yet drafted)"))
    out.sort(key=lambda x: -x[0])
    return out


def cmd_units():
    for k, u in UNITS.items():
        print(f"{k}\t{u[0]}\t{len(rows(k))} lines\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def _span(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    return rs[i:j + 1]


def cmd_data(key, a=None, b=None):
    corpus = _corpus()
    allh = all_hebrew()
    nm = names()
    fs = formulas()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    if UNITS[key][2] == "rv":
        print("Words: form – Zurich lemma (grammar; features) – a human-made annotation, but check every form that carries "
              "a tense, a parallel or a gate (`gra <lemma>`, `mw <lemma>`).\n")
    for r in sp:
        kind = f"   [{r['kind']}]" if r.get("kind") == "verse" else ""
        print(f"### {r['label']}{kind}")
        print(f"`{r['text']}`")
        for w in r["words"]:
            print(f"- `{w['form']}` – {w['lemma']} ({w['gram']}{'; ' + w['feats'] if w['feats'] else ''})")
        srcf = " " + fold(r["text"]) + " "
        nn = [(what, hv) for rx, hv, hp, st, what in nm if re.search(rx, srcf)]
        if nn:
            print("- NAMES (renderings §3): " + "; ".join(f"{w} = {hv}" for w, hv in nn))
        for fid, grx, hrx, _ in fs:
            if re.search(grx, srcf):
                print(f"- FORMULA {fid}: `{hrx}`")
        nk = fold(r["text"])
        if nk and len(nk.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh)[:5]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} → {h}")
        if key == "RV1.32":
            d = read_annotated("RV1.32", DOSSIER_RV)
            if d and r["label"] in d[0]:
                print(f"- THE DOSSIER'S HEBREW (copy, revise only with a reason, and then revise the dossier too): {d[0][r['label']]}")
        print()


def cmd_tr(key, a=None, b=None):
    proj, title, kind, spec = UNITS[key]
    if kind != "rv":
        print("No aligned rank-3 translation for this text: read the PD translation in ../sources/Archive-org--PD-translations/ "
              "(see the translator brief, §5), after drafting.")
        return
    sp = _span(key, a, b)
    sts = []
    for r in sp:
        st = re.match(r"\d+", r["label"]).group(0)
        if st not in sts:
            sts.append(st)
    trs = _read_tsv(_rv_tr_path(*spec))
    for st in sts:
        print(f"## {key} stanza {st}")
        for c in trs:
            if c[0] == st:
                print(f"- {c[1]}: {c[2]}")
        print()


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z0-9.]+)\.rtl\.md$", path)
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


# IAST / ISO → SLP1 (for the csl-orig keys)
_SLP = [("r̥̄", "F"), ("r̥", "f"), ("l̥", "x"), ("ṝ", "F"), ("ṛ", "f"), ("ḷ", "x"), ("ai", "E"), ("au", "O"),
        ("kh", "K"), ("gh", "G"), ("ch", "C"), ("jh", "J"), ("ṭh", "W"), ("ḍh", "Q"), ("th", "T"), ("dh", "D"),
        ("ph", "P"), ("bh", "B"), ("ā", "A"), ("ī", "I"), ("ū", "U"), ("ṅ", "N"), ("ñ", "Y"), ("ṭ", "w"), ("ḍ", "q"),
        ("ṇ", "R"), ("ś", "S"), ("ṣ", "z"), ("ṃ", "M"), ("ṁ", "M"), ("ḥ", "H"), ("ē", "e"), ("ō", "o")]


def to_slp1(w):
    w = unicodedata.normalize("NFC", w.strip().lower())
    w = re.sub(r"[√\-\d\s]", "", w)
    w = unicodedata.normalize("NFD", w)
    w = "".join(c for c in w if c not in "́̀")  # accents
    w = unicodedata.normalize("NFC", w)
    for a, b in _SLP:
        w = w.replace(unicodedata.normalize("NFC", a), b)
    return w


def _csl(fname, word, limit=6):
    k = word if re.fullmatch(r"[A-Za-z]+", word) and re.search(r"[A-Z]", word) else to_slp1(word)
    p = os.path.join(SRC, "Sanskrit-lexicon--csl-orig", fname)
    out, cur, keep = [], [], False
    for ln in open(p, encoding="utf-8"):
        if ln.startswith("<L>"):
            keep = re.search(r"<k1>([^<]+)<", ln) is not None and re.search(r"<k1>([^<]+)<", ln).group(1) == k
            cur = [ln.rstrip()] if keep else []
            continue
        if ln.startswith("<LEND>"):
            if keep and cur:
                out.append("\n".join(cur))
                if len(out) >= limit:
                    break
            keep = False
            continue
        if keep:
            cur.append(ln.rstrip())
    if not out:
        print(f"{fname}: no entry for {word} (SLP1 {k})")
    for e in out:
        print(e[:3000] + ("…" if len(e) > 3000 else "") + "\n")


def _cab(params):
    url = "https://cab.geschkult.fu-berlin.de/exist/apps/cab/dictionary/dictionary-data.xql?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as f:
        return json.load(f)


def cmd_ave(form):
    d = _cab({"op": "word", "form": form})
    for r in d.get("results", []) if isinstance(d.get("results"), list) else [d]:
        print(json.dumps(r, ensure_ascii=False)[:8000])
    if not d.get("results"):
        d = _cab({"op": "search", "query": form, "mode": "contains", "limit": 15})
        for r in d.get("results", []):
            print(f"{r.get('cabLemma')}  (AIW {r.get('aiwLemma')} {r.get('aiwId')}): {r.get('meaning')}")


def cmd_avelemma(lemma):
    d = _cab({"op": "glossary", "lemma": lemma})
    print(json.dumps(d, ensure_ascii=False, indent=1)[:4000])
    d = _cab({"op": "lemma-words", "lemma": lemma})
    for r in d.get("results", []):
        print(f"- {r.get('word')}: " + "; ".join(m.get("text", "") for m in r.get("morphologies", [])))


def cmd_lemma(pat):
    rx = re.compile(pat)
    allh = all_hebrew()
    n = 0
    for k in UNITS:
        if UNITS[k][2] != "rv":
            continue
        for r in rows(k):
            hit = [w for w in r["words"] if rx.search(w["lemma"]) or rx.search(fold_lemma(w["lemma"]))]
            if hit:
                n += 1
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: {', '.join(w['form'] for w in hit)}  `{r['text']}`\n    {h or '(not yet drafted)'}")
    print(f"{n} line(s)")


_PIRUK = re.compile(r"`([^`]+)`\s*–\s*\*?([^\s(\"„“,;*]+)\*?[^;]*?\(\"([^\"]+)\"\)")


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
                        lem = fold_lemma(mm.group(2))
                        hb = strip_marks(mm.group(3))
                        if lem:
                            m.setdefault(lem, {}).setdefault(hb, []).append(f"{k}:{lab}")
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
    print("RESERVED (Hebrew regex | licensed by | why):")
    for rx, allow, why in RESERVED:
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why})")
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for fid, g, h, lines in formulas():
        print(f"  {fid}: {g}  →  {h}   ({lines})")
    print("\nNAMES:")
    for rx, hv, hp, st, what in names():
        print(f"  {what} [{rx}] = {hv}{' ★' if st else ''}")


def cmd_selftest():
    n, fails = 0, 0
    for cells in _table("10."):
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z0-9.]+) (\S+)$", cells[0])
        if not m or m.group(1) not in UNITS:
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


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../vedic_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../vedic_tools.py build\n-->\n\n")


def build_one(key):
    pdir = os.path.join(HERE, UNITS[key][0])
    ip = os.path.join(pdir, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"## {UNITS[key][1]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n### {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{key}-{n}]"
                notes.append(f"[^{key}-{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    body = intro + "\n" + "\n".join(out) + "\n" + ("\n" + "\n\n".join(notes) + "\n" if notes else "")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    open(translation_path(key), "w", encoding="utf-8").write(head + body)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")
    return body


def build(keys=None):
    done = {}
    for k in [k for k in present_keys() if not keys or k in keys]:
        done[k] = build_one(k)
    # each project's translation.rtl.md: its head + its texts, in the UNITS order
    for proj in PROJECT_TITLES:
        ks = [k for k in UNITS if UNITS[k][0] == proj and os.path.exists(translation_path(k))]
        if not ks:
            continue
        pdir = os.path.join(HERE, proj)
        hp = os.path.join(pdir, "translation--head.rtl.md")
        head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {PROJECT_TITLES[proj]}"
        parts = []
        for k in ks:
            t = open(translation_path(k), encoding="utf-8").read()
            t = re.sub(r"^<!--.*?-->\n\n", "", t, flags=re.S)
            parts.append(t.rstrip("\n"))
        src = ", ".join(f"translation-{k}.rtl.md" for k in ks)
        text = GENERATED.format(src=f"translation--head.rtl.md and {src}") + head + "\n\n" + "\n\n---\n\n".join(parts) + "\n"
        open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write(text)
        print(f"{proj}/translation.rtl.md: {len(ks)} text(s)")
    return verify(present_keys())


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "convert":
        return cmd_convert()
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
    if cmd == "mw" and rest:
        return _csl("mw.txt", rest[0])
    if cmd == "gra" and rest:
        return _csl("gra.txt", rest[0])
    if cmd == "ave" and rest:
        return cmd_ave(rest[0])
    if cmd == "avelemma" and rest:
        return cmd_avelemma(rest[0])
    if cmd == "lemma" and rest:
        return cmd_lemma(rest[0])
    if cmd == "lexmap":
        return cmd_lexmap(rest[0] if rest else None)
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

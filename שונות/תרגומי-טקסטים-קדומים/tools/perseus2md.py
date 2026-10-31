"""Perseus TEI (canonical-greekLit) + the Perseus Ancient Greek Dependency Treebank (AGDT 2.1) -> line data.

    python3 -I -B tools/perseus2md.py lines TEI.xml                 the verse lines: label, marks, text
    python3 -I -B tools/perseus2md.py align TEI.xml TB.xml [FROM [TO]]
                                                                   every line with its treebank words (lemma, postag,
                                                                   the postag decoded) and the alignment report
    python3 -I -B tools/perseus2md.py check TEI.xml TB.xml          alignment statistics only (unmatched words, lines
                                                                   without treebank words, cite mismatches)

Library use (the corpus tool imports it): parse_tei(path) -> [line]; parse_tb(path) -> [word]; align(lines, words).

A line = {"label": "116", "text": "ἦ τοι μὲν πρώτιστα Χάος γένετʼ, …", "mark": "" | "del" | "add" | "part",
          "words": [word]}.
  - mark "del": the whole line is in <del> = Evelyn-White's square brackets (a line he suspected; it is translated
    and tagged in the Hebrew, see the corpus's renderings.md);
  - mark "add": the whole line is in <add> (Th. 929a–t, the lines quoted by Galen: Evelyn-White prints them apart);
  - mark "part": <del> inside a line (WD 169a–d, a papyrus with restorations): the restored parts are printed in [ ].
A word = {"form", "lemma", "postag", "rel", "cite", "parse"} (artificial elliptic nodes and punctuation dropped).

The treebank has no line numbers (WD) or a `cite` per word (Theogony, "…:1.<line>"); words are aligned to the lines
by their letters (diacritics, elision marks and case ignored) with difflib, and the `cite` is checked where it exists.
Works on untrusted downloads: parses with re only, never executes anything.
"""
import difflib
import re
import sys
import unicodedata

POS = {"n": "noun", "v": "verb", "a": "adj", "d": "adv", "l": "article", "g": "particle", "c": "conj", "r": "prep",
       "p": "pron", "m": "numeral", "i": "interj", "e": "exclam", "u": "punct", "x": "?"}
PERSON = {"1": "1", "2": "2", "3": "3"}
NUMBER = {"s": "sg", "p": "pl", "d": "du"}
TENSE = {"p": "pres", "i": "impf", "r": "perf", "l": "plpf", "t": "futpf", "f": "fut", "a": "aor"}
MOOD = {"i": "ind", "s": "subj", "o": "opt", "n": "inf", "m": "imp", "p": "ptcp", "g": "gerundive"}
VOICE = {"a": "act", "p": "pass", "m": "mid", "e": "mp"}
GENDER = {"m": "m", "f": "f", "n": "n", "c": "c"}
CASE = {"n": "nom", "g": "gen", "d": "dat", "a": "acc", "v": "voc", "l": "loc"}
DEGREE = {"c": "comp", "s": "superl"}


def decode(tag):
    """'v3saia---' -> 'verb 3 sg aor ind act'."""
    if not tag or len(tag) < 9:
        return tag or ""
    t = tag
    out = [POS.get(t[0], t[0])]
    for i, table in ((1, PERSON), (2, NUMBER), (3, TENSE), (4, MOOD), (5, VOICE), (6, GENDER), (7, CASE), (8, DEGREE)):
        if t[i] != "-":
            out.append(table.get(t[i], t[i]))
    return " ".join(out)


def norm(s):
    """Letters only, no diacritics, lower case, final sigma folded."""
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower().replace("ς", "σ")
    return "".join(c for c in s if c.isalpha() and c not in "ʼʹʽ")


def _clean(t):
    t = re.sub(r"<[^>]+>", "", t)
    return re.sub(r"\s+", " ", unicodedata.normalize("NFC", t)).strip()


def parse_tei(path):
    s = open(path, encoding="utf-8").read()
    body = s[s.find("<body"):]
    out = []
    for m in re.finditer(r"<l\b([^>]*)>(.*?)</l>", body, re.S):
        attrs, inner = m.group(1), m.group(2)
        n = re.search(r'\bn="([^"]+)"', attrs).group(1)
        core = inner.strip()
        mark = ""
        if re.fullmatch(r"<del>.*</del>", core, re.S) and core.count("<del>") == 1:
            mark = "del"
            text = _clean(core)
        elif re.fullmatch(r"<add>.*</add>", core, re.S) and core.count("<add>") == 1:
            mark = "add"
            text = _clean(core)
        elif "<del>" in core:
            mark = "part"
            text = _clean(core.replace("<del>", "[").replace("</del>", "]"))
            text = re.sub(r"\]\s*\[", " ", text)
        else:
            text = _clean(core)
        out.append({"label": n, "text": text, "mark": mark, "words": []})
    return out


def parse_tb(path):
    s = open(path, encoding="utf-8").read()
    out = []
    for m in re.finditer(r"<word ([^>]*)/>", s):
        a = dict(re.findall(r'(\w+)="([^"]*)"', m.group(1)))
        if a.get("artificial") or a.get("postag", "").startswith("u") or not norm(a.get("form", "")):
            continue
        out.append({"form": unicodedata.normalize("NFC", a.get("form", "")), "lemma": unicodedata.normalize("NFC", a.get("lemma", "")),
                    "postag": a.get("postag", ""), "rel": a.get("relation", ""), "cite": a.get("cite", ""),
                    "parse": decode(a.get("postag", ""))})
    return out


def tokens(text):
    return [t for t in re.split(r"[\s,.;·:!?()“”\"'·—–]+", text) if norm(t)]


def align(lines, words):
    """Attach each treebank word to a line; returns a report dict."""
    seq = []  # (line index, token)
    for i, ln in enumerate(lines):
        for t in tokens(ln["text"]):
            seq.append((i, t))
    a = [norm(t) for _, t in seq]
    b = [norm(w["form"]) for w in words]
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    unmatched_tb, unmatched_text = [], []
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            for k in range(i2 - i1):
                lines[seq[i1 + k][0]]["words"].append(words[j1 + k])
        else:
            # walk the block: equal letters, a text word split in the treebank (οὐδέ = οὐ + δέ), or a spelling
            # difference with the same word count; whatever is left is reported
            i, j = i1, j1
            while i < i2 and j < j2:
                if a[i] == b[j]:
                    lines[seq[i][0]]["words"].append(words[j]); i += 1; j += 1; continue
                k, acc = j, ""
                while k < j2 and len(acc) < len(a[i]) and a[i].startswith(acc + b[k]):
                    acc += b[k]; k += 1
                if acc == a[i] and k - j > 1:
                    for x in range(j, k):
                        w = dict(words[x]); w["note"] = f"part of {seq[i][1]}"
                        lines[seq[i][0]]["words"].append(w)
                    i, j = i + 1, k; continue
                if (i2 - i) == (j2 - j):
                    w = dict(words[j]); w["note"] = f"text {seq[i][1]}"
                    lines[seq[i][0]]["words"].append(w); i += 1; j += 1; continue
                break
            for k in range(j, j2):
                li = seq[min(i, i2 - 1, len(seq) - 1)][0]
                w = dict(words[k]); w["note"] = "unaligned"
                lines[li]["words"].append(w)
                unmatched_tb.append((lines[li]["label"], words[k]["form"]))
            for k in range(i, i2):
                unmatched_text.append((lines[seq[k][0]]["label"], seq[k][1]))
    cite_bad = []
    for ln in lines:
        for w in ln["words"]:
            c = w.get("cite", "")
            m = re.search(r":\d+\.(\S+)$", c)
            lab = re.sub(r"^(\d+)\.(\d+)$", lambda x: x.group(1) + "abcdefghijklmnopqrst"[int(x.group(2)) - 1], m.group(1)) if m else ""
            if m and lab != ln["label"]:
                cite_bad.append((ln["label"], w["form"], m.group(1)))
    empty = [ln["label"] for ln in lines if not ln["words"]]
    return {"unmatched_tb": unmatched_tb, "unmatched_text": unmatched_text, "cite_bad": cite_bad, "empty": empty}


def _main(argv):
    if len(argv) < 2:
        sys.exit(__doc__)
    cmd = argv[0]
    lines = parse_tei(argv[1])
    if cmd == "lines":
        for ln in lines:
            print(f"{ln['label']}\t{ln['mark']}\t{ln['text']}")
        return
    words = parse_tb(argv[2])
    rep = align(lines, words)
    if cmd == "check":
        print(f"lines {len(lines)}, treebank words {len(words)}")
        for k, v in rep.items():
            print(f"{k}: {len(v)}")
            for x in v[:40]:
                print("   ", x)
        return
    if cmd == "align":
        lo = argv[3] if len(argv) > 3 else None
        hi = argv[4] if len(argv) > 4 else lo
        on = lo is None
        for ln in lines:
            if lo is not None and ln["label"] == lo:
                on = True
            if on:
                print(f"### {ln['label']} {ln['mark']}\n{ln['text']}")
                for w in ln["words"]:
                    print(f"   {w['form']}\t{w['lemma']}\t{w['parse']}\t{w['rel']}\t{w.get('note', '')}")
            if hi is not None and ln["label"] == hi:
                break


if __name__ == "__main__":
    _main(sys.argv[1:])

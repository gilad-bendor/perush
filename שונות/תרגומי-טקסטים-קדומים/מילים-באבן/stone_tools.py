#!/usr/bin/env python3
"""stone_tools.py – the corpus tool of `מילים-באבן/` ("Words in stone": Northwest Semitic inscriptions).

Usage (from the folder `שונות/תרגומי-טקסטים-קדומים/`):
    python3 -I -B מילים-באבן/stone_tools.py fill   [KEY ...]   # write the base lines (square + Latin) into the entries
    python3 -I -B מילים-באבן/stone_tools.py verify [KEY ...] [--strict]
    python3 -I -B מילים-באבן/stone_tools.py build  [KEY ...]   # translation.rtl.md + parallels-index.md
    python3 -I -B מילים-באבן/stone_tools.py translit KEY        # print the Latin transliteration of the base
    python3 -I -B מילים-באבן/stone_tools.py selftest

Two products (guidelines §6.7, 2026-10-22):
  * mode "reading" (Hebrew, Moabite): the `>` line is a cautious vocalized reading of the inscription's own words.
    `verify` checks that it has exactly the base's letters, in order, with the same letters inside [ ] – no letter
    added, dropped or moved in or out of a restoration (niqqud, maqaf, spaces, punctuation, final forms ignored).
  * mode "translation" (Phoenician / Punic, Aramaic): the `>` line is a Hebrew translation; `verify` runs the
    reserved-word gates (a Hebrew word allowed only where its licensing source word is in the line) and the traps
    (words that must be vocalized), and checks that every numeral of the base is in the translation.

Entry format in annotated*.rtl.md:
    ### <label>
    `<square-script base line>`
    `<Latin transliteration>`
    > <reading or translation>
    - **פירוק:** …   - **הקבלה:** …   - **הערות:** …
A `## …` line between entries is a section heading (copied to the clean file). Write `@` as the two base lines of a
new entry (`fill` replaces them). Lines of entries not yet drafted are `> …` (a note; an error only with --strict).
"""
import re
import sys
import unicodedata
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
SRC = ROOT / "sources"

# key: (base file, annotated file, translation file, mode, title)
TEXTS = {
    "MS": ("Compston-1919--Mesha-Stele/mesha.tsv", "1-מצבת-מישע/annotated.rtl.md", "1-מצבת-מישע/translation.rtl.md",
           "reading", "מצבת מישע"),
    "AJ": ("Merlo-1994--Kuntillet-Ajrud/ajrud.tsv", "2-ברכות-באבן-ובכסף/annotated-ajrud.rtl.md",
           "2-ברכות-באבן-ובכסף/translation-ajrud.rtl.md", "reading", "כונתילת עג׳רוד: ברכות הפיטסים"),
    "KH": ("Wikipedia--Hebrew-inscriptions/ketef-hinnom-2.tsv", "2-ברכות-באבן-ובכסף/annotated-ketef-hinnom.rtl.md",
           "2-ברכות-באבן-ובכסף/translation-ketef-hinnom.rtl.md", "reading", "כתף הינום: הקמיע השני"),
    "MH": ("Wikipedia--Hebrew-inscriptions/mesad-hashavyahu.tsv", "3-קול-הקוצר-ולוח-השנה/annotated-mesad-hashavyahu.rtl.md",
           "3-קול-הקוצר-ולוח-השנה/translation-mesad-hashavyahu.rtl.md", "reading", "חרס מצד חשביהו"),
    "GZ": ("Wikipedia--Hebrew-inscriptions/gezer-calendar.tsv", "3-קול-הקוצר-ולוח-השנה/annotated-gezer.rtl.md",
           "3-קול-הקוצר-ולוח-השנה/translation-gezer.rtl.md", "reading", "לוח גזר"),
    "MT": ("Cooke-1903--North-Semitic-Inscriptions/marseille-tariff.tsv", "4-תעריף-הקורבנות/annotated.rtl.md",
           "4-תעריף-הקורבנות/translation.rtl.md", "translation", "תעריף הקורבנות ממרסיי"),
}
# The combined clean files of the projects with several texts (built from the per-text files, in this order).
COMBINED = {
    "2-ברכות-באבן-ובכסף/translation.rtl.md": ["AJ", "KH"],
    "3-קול-הקוצר-ולוח-השנה/translation.rtl.md": ["MH", "GZ"],
}

NIQQUD = re.compile(r"[֑-ֽֿ-ׇ]")  # keeps the maqaf (U+05BE)
FINALS = str.maketrans("ךםןףץ", "כמנפצ")
LATIN = dict(zip("אבגדהוזחטיכלמנסעפצקרשת",
                 ["ʾ", "b", "g", "d", "h", "w", "z", "ḥ", "ṭ", "y", "k", "l", "m", "n", "s", "ʿ", "p", "ṣ", "q", "r", "š", "t"]))

# ---------------------------------------------------------------------------------------------------------------------
# Reserved words of the translation mode (Punic). Each row: (Hebrew regex on the plain Hebrew word, licensing regex on
# the base line, note). Anchored on whole words; the Hebrew prefix class is tested in selftest.
PFX = r"(?:^|(?<=[\s\[(⟨:;,.\"״'׳־]))ו?(?:ש|כש)?[בלהמכ]?ה?"
END = r"(?=$|[\s\]),.:;!?\"״'׳־⟩…])"


def W(stem):
    return re.compile(PFX + "(?:" + stem + ")" + END)


RESERVED_PUN = [
    # the sacrificial vocabulary of Lev 1-7: a Hebrew word only for its Punic cognate
    (W(r"כליל|כלילה"), r"כלל", "כליל only for kll (Lev 6:15-16, Deut 33:10)"),
    (W(r"שלם|שלמים|שלמיו"), r"שלמ", "שלם / שלמים only for šlm"),
    (W(r"כוהנ(?:ים|י)|כהנ(?:ים|י)|כוהן|כהן"), r"כהנ", "כהן only for khn"),
    (W(r"זבח|זבחים|יזבח|לזבוח|לזבח|הזבח"), r"זבח", "זבח only for zbḥ"),
    (W(r"מנחה|מנחת"), r"מנח", "מנחה only for mnḥt"),
    (W(r"עור|העור"), r"ערת", "עור only for ʿrt (Lev 7:8)"),
    (W(r"צפור|ציפור|צפורים|ציפורים"), r"צפר", "צפור only for ṣpr"),
    (W(r"דל"), r"דל", "דל only for dl (Lev 14:21)"),
    (W(r"מקנה"), r"מקנא", "מקנה only for mqnʾ"),
    (W(r"קדושה|קדוש|קודש|קדש"), r"קדש", "the root קדש only for qdš"),
    (W(r"שאר|שארה"), r"שאר", "שְׁאֵר (flesh) only for šʾr"),
    (W(r"משאת|משאות"), r"משא", "מַשְׂאֵת only for mšʾt"),
    (W(r"אגורות|אגורה|אגורת"), r"אגרת", "אֲגוֹרָה only for ʾgrt (1 Sam 2:36)"),
    (W(r"שופט|שופטים|השופט"), r"שפט", "שׁוֹפֵט only for špṭ (the suffete)"),
    (W(r"בליל"), r"בלל", "בְּלִיל only for bll"),
    (W(r"מרזח"), r"מרזח", "מַרְזֵחַ only for mrzḥ"),
    (W(r"פעמים|פעמי"), r"פעמ", "פְּעָמִים (feet) only for pʿm"),
    (W(r"עגל"), r"עגל", "עֵגֶל only for ʿgl"),
    (W(r"יובל"), r"יבל", "יוֹבֵל (ram) only for ybl (Josh 6:4)"),
    (W(r"איל|אייל|איילים"), r"איל", "אַיָּל only for ʾyl"),
    (W(r"אימר|אמר"), r"אמר", "אִמַּר (lamb) only for ʾmr"),
    (W(r"גדי"), r"גדא", "גְּדִי only for gdʾ"),
    (W(r"עז"), r"עז", "עֵז only for ʿz"),
    (W(r"חלב"), r"חלב", "חָלָב / חֵלֶב only for ḥlb"),
    (W(r"שמן"), r"שמנ", "שֶׁמֶן only for šmn"),
    (W(r"משפחה|משפחת"), r"שפח", "מִשְׁפָּחָה only for špḥ"),
    (W(r"ייענש|ייענשו|נענש"), r"ענש", "ענש only for nʿnš"),
    (W(r"חבריהם|חברים|חבר"), r"חבר", "חבר only for ḥbr"),
    # Leviticus words the tariff does NOT have: never in a line (the absences are findings for the apparatus)
    (W(r"עולה|עולת|העולה"), r"(?!)", "עוֹלָה never: the tariff has kll (and עלת = 'over, besides')"),
    (W(r"חטאת|אשם|אשמה"), r"(?!)", "חַטָּאת / אָשָׁם never (absent from the tariff)"),
    (W(r"תנופה|תרומה|חזה|שוק"), r"(?!)", "the priest's breast and thigh never (absent; Lev 7:31-34)"),
    (W(r"קרבן|קורבן|אשה|ניחוח|כפר|כיפר"), r"(?!)", "Leviticus's קָרְבָּן / אִשֶּׁה / נִיחוֹחַ / כִּפֶּר never"),
    (W(r"ביכורים|בכורים|ראשית"), r"(?!)", "ביכורים / ראשית never (qdmt is not bkr)"),
    (W(r"מולך|מלך"), r"(?!)", "מֹלֶךְ never in the tariff (no mlk)"),
]
# Words that must be vocalized in a translation line (they read as another word unvocalized).
TRAPS_PUN = [
    (re.compile(PFX + r"(?:זר)" + END), "זָר (a coin) reads 'stranger': vocalize"),
    (re.compile(PFX + r"(?:שאר)" + END), "שְׁאֵר (flesh) reads 'remainder': vocalize"),
    (re.compile(PFX + r"(?:חלב)" + END), "חָלָב / חֵלֶב (milk / fat): vocalize"),
    (re.compile(PFX + r"(?:מזרח)" + END), "מִזְרַח (a guild) reads 'east': vocalize"),
    (re.compile(PFX + r"(?:אמר|אימר)" + END), "אִמַּר (lamb) reads 'said': vocalize"),
    (re.compile(PFX + r"(?:איל|אייל)" + END), "אַיָּל / אַיִל: vocalize"),
    (re.compile(PFX + r"(?:פעמים)" + END), "פְּעָמִים (feet) reads 'times': vocalize"),
    (re.compile(PFX + r"(?:יובל)" + END), "יוֹבֵל (ram) reads 'jubilee': vocalize"),
]


def strip_niqqud(s):
    return NIQQUD.sub("", unicodedata.normalize("NFC", s))


def plain_word_text(s):
    """Hebrew without niqqud, maqaf to space, for the gates."""
    return strip_niqqud(s).replace("־", " ")


# ---------------------------------------------------------------------------------------------------------------------
def read_base(key):
    rows = []
    path = SRC / TEXTS[key][0]
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip() or line.startswith("#"):
            continue
        label, text = line.split("\t", 1)
        rows.append((label.strip(), text.strip()))
    return rows


def translit(square):
    out = []
    for ch in square:
        if ch in LATIN:
            out.append(LATIN[ch])
        elif ch == "ׄ":
            out.append("̊")  # uncertain letter: a ring above, as epigraphic editions do
        else:
            out.append(ch)
    return unicodedata.normalize("NFC", "".join(out))


def letters_with_brackets(s, state=False):
    """[(letter, inside_brackets)], ignoring everything but the consonants; returns (list, state at the end)."""
    s = strip_niqqud(s).translate(FINALS)
    seq = []
    for ch in s:
        if ch == "[":
            state = True
        elif ch == "]":
            state = False
        elif "א" <= ch <= "ת":
            seq.append((ch, state))
    return seq, state


def parse_annotated(key):
    path = HERE / TEXTS[key][1]
    if not path.exists():
        return None, []
    lines = path.read_text(encoding="utf-8").splitlines()
    entries = []  # dict(label, idx, base=[...], tr=..., heading_before)
    cur = None
    pending_heading = []
    for i, line in enumerate(lines):
        if line.startswith("### "):
            cur = {"label": line[4:].strip(), "idx": i, "base": [], "tr": None, "headings": pending_heading, "body": []}
            pending_heading = []
            entries.append(cur)
            continue
        if line.startswith("## "):
            pending_heading.append(line[3:].strip())
            cur = None
            continue
        if cur is None:
            continue
        if cur["tr"] is None and line.startswith("`") and line.endswith("`"):
            cur["base"].append(line.strip("`"))
        elif cur["tr"] is None and line.startswith(">"):
            cur["tr"] = line[1:].strip()
        else:
            cur["body"].append(line)
    return lines, entries


# ---------------------------------------------------------------------------------------------------------------------
def cmd_fill(keys):
    for key in keys:
        base = dict(read_base(key))
        path = HERE / TEXTS[key][1]
        lines = path.read_text(encoding="utf-8").splitlines()
        out, label, i = [], None, 0
        while i < len(lines):
            line = lines[i]
            if line.startswith("### "):
                label = line[4:].strip()
                out.append(line)
                i += 1
                # drop the old base lines (or the `@` placeholder) and write fresh ones
                while i < len(lines) and lines[i].startswith("`") and lines[i].endswith("`"):
                    i += 1
                if label in base:
                    out.append("`" + base[label] + "`")
                    out.append("`" + translit(base[label]) + "`")
                continue
            out.append(line)
            i += 1
        path.write_text("\n".join(out) + "\n", encoding="utf-8")
        print(f"{key}: filled {path.relative_to(ROOT)}")


def check_reading(key, base_rows, entries, problems):
    state_b = state_r = False
    by_label = {e["label"]: e for e in entries}
    for label, text in base_rows:
        e = by_label.get(label)
        if not e or not e["tr"] or e["tr"].startswith("…"):
            continue
        b, state_b = letters_with_brackets(text, state_b)
        r, state_r = letters_with_brackets(e["tr"], state_r)
        if b != r:
            bl = "".join(c if not br else c + "̲" for c, br in b)
            rl = "".join(c if not br else c + "̲" for c, br in r)
            # find the first difference
            k = next((n for n, (x, y) in enumerate(zip(b, r)) if x != y), min(len(b), len(r)))
            problems.append(f"{key} {label}: the reading's letters differ from the base at letter {k + 1} "
                            f"(base {len(b)} letters, reading {len(r)}; underlined = in [ ]):\n      base:    {bl}\n"
                            f"      reading: {rl}")


def check_translation(key, base_rows, entries, problems):
    by_label = {e["label"]: e for e in entries}
    for label, text in base_rows:
        e = by_label.get(label)
        if not e or not e["tr"] or e["tr"].startswith("…"):
            continue
        heb = plain_word_text(e["tr"]).replace("[", " ").replace("]", " ")
        lic = text.replace("[", "").replace("]", "")
        for rx, licence, note in RESERVED_PUN:
            for m in rx.finditer(heb):
                if not re.search(licence, lic):
                    problems.append(f"{key} {label}: reserved word `{m.group(0).strip()}` without its source word – {note}")
        raw = unicodedata.normalize("NFC", e["tr"]).replace("־", " ")
        for tok in re.findall(r"[א-ת֑-ׇ]+", raw):
            if NIQQUD.search(tok):
                continue
            for rx, note in TRAPS_PUN:
                if rx.fullmatch(tok) or rx.search(" " + tok + " "):
                    problems.append(f"{key} {label}: trap `{tok}` – {note}")
        for num in re.findall(r"\{(\d+)\}", text):
            if num not in re.findall(r"\d+", e["tr"]):
                problems.append(f"{key} {label}: the numeral {num} of the base is not in the translation")


def build_clean(key, entries):
    title = TEXTS[key][4]
    intro_path = HERE / Path(TEXTS[key][2]).parent / ("translation--intro-" + key + ".rtl.md")
    out = [f"# {title}", ""]
    if intro_path.exists():
        out += intro_path.read_text(encoding="utf-8").rstrip().splitlines() + [""]
    for e in entries:
        for h in e["headings"]:
            out += [f"## {h}", ""]
        if not e["tr"]:
            continue
        sq = e["base"][0] if e["base"] else ""
        out.append(f"**{e['label']}** {e['tr']}  ")
        out.append(f"<span dir=\"rtl\" style=\"color:#777\">{sq}</span>")
        out.append("")
    return "\n".join(out).rstrip() + "\n"


def cmd_verify(keys, strict):
    total = 0
    for key in keys:
        problems, notes = [], []
        base_rows = read_base(key)
        lines, entries = parse_annotated(key)
        if lines is None:
            print(f"{key}: no annotated file yet")
            if strict:
                total += 1
            continue
        labels_b = [l for l, _ in base_rows]
        labels_a = [e["label"] for e in entries]
        if labels_a != labels_b:
            problems.append(f"{key}: entries ≠ base labels\n      base: {labels_b}\n      file: {labels_a}")
        base = dict(base_rows)
        for e in entries:
            if e["label"] in base:
                want = [base[e["label"]], translit(base[e["label"]])]
                if e["base"] != want:
                    problems.append(f"{key} {e['label']}: the base lines differ from the source (run fill)")
            if not e["tr"]:
                problems.append(f"{key} {e['label']}: no `>` line")
            elif e["tr"].startswith("…"):
                (problems if strict else notes).append(f"{key} {e['label']}: not drafted yet")
            if e["tr"] and e["tr"].count("[") != e["tr"].count("]") and TEXTS[key][3] == "translation":
                notes.append(f"{key} {e['label']}: unbalanced brackets in the translation (a restoration across lines?)")
        if TEXTS[key][3] == "reading":
            check_reading(key, base_rows, entries, problems)
        else:
            check_translation(key, base_rows, entries, problems)
        # the clean file
        tpath = HERE / TEXTS[key][2]
        if not tpath.exists() or tpath.read_text(encoding="utf-8") != build_clean(key, entries):
            problems.append(f"{key}: {TEXTS[key][2]} is not the build of the annotated file (run build)")
        for n in notes:
            print("  note:", n)
        for p in problems:
            print("  PROBLEM:", p)
        print(f"{key}: {len(entries)} entries, {len(problems)} problems")
        total += len(problems)
    for comb, ks in COMBINED.items():
        if set(ks) <= set(keys):
            want = combined_text(ks)
            p = HERE / comb
            if not p.exists() or p.read_text(encoding="utf-8") != want:
                print(f"  PROBLEM: {comb} is not the build of its texts (run build)")
                total += 1
    print(f"TOTAL: {total} problems")
    return 1 if total else 0


def combined_text(ks):
    parts = []
    for k in ks:
        parts.append((HERE / TEXTS[k][2]).read_text(encoding="utf-8").rstrip())
    return "\n\n".join(parts) + "\n"


TAG = re.compile(r"\[(cognate|equivalent|divergence|absent)\]")


def build_parallels():
    rows = []
    for key, t in TEXTS.items():
        _, entries = parse_annotated(key)
        for e in entries:
            for line in e["body"]:
                if line.startswith("- **הקבלה:**") and TAG.search(line):
                    rows.append((t[4], e["label"], line[len("- **הקבלה:**"):].strip()))
    out = ["# Parallels index – מילים באבן", "",
           "Generated by `stone_tools.py build` from the **הקבלה** bullets of every annotated file (do not edit by hand;",
           "the key findings are in `corpus.md`).", "",
           "| Text | Line | Parallel |", "|---|---|---|"]
    for t, l, p in rows:
        out.append(f"| {t} | {l} | {p.replace('|', '¦')} |")
    (HERE / "parallels-index.md").write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"parallels-index.md: {len(rows)} rows")


def cmd_build(keys):
    for key in keys:
        _, entries = parse_annotated(key)
        if entries is None or not entries:
            continue
        p = HERE / TEXTS[key][2]
        p.write_text(build_clean(key, entries), encoding="utf-8")
        print(f"{key}: wrote {p.relative_to(HERE)}")
    for comb, ks in COMBINED.items():
        if all((HERE / TEXTS[k][2]).exists() for k in ks):
            (HERE / comb).write_text(combined_text(ks), encoding="utf-8")
            print(f"wrote {comb}")
    build_parallels()


def cmd_selftest():
    fails = 0

    def expect(cond, what):
        nonlocal fails
        if not cond:
            fails += 1
            print("FAIL:", what)

    # 1. the consonant identity of a reading, with brackets and finals
    b, _ = letters_with_brackets("אנכ · משע · בנ · כמש[..] · מלכ")
    r, _ = letters_with_brackets("אָנֹכִי מֵשַׁע")
    expect(b != r, "a reading that adds a yod must fail")
    r, _ = letters_with_brackets("אָנֹךְ מֵשַׁע בֶּן־כְּמֹשׁ[…] מֶלֶךְ")
    expect(b == r, "finals, maqaf and niqqud are ignored")
    b, _ = letters_with_brackets("ב[מת · י]")
    r, _ = letters_with_brackets("בָּמ[ַת יֵ]")
    expect(b != r, "a letter moved out of a restoration must fail")
    r, _ = letters_with_brackets("בְּ[מַת יֵ]")
    expect(b == r, "brackets around niqqud are fine")
    # 2. gates
    def hits(heb, base):
        p = []
        check_translation("T", [("1", base)], [{"label": "1", "tr": heb, "base": []}], p)
        return p
    expect(hits("לַכֹּהֲנִים כֶּסֶף", "לכהנמ כספ") == [], "כהנים licensed by כהנמ")
    expect(hits("הָעוֹלָה", "עלת פנ") != [], "עולה is never allowed")
    expect(hits("וְהָעוֹר", "וכנ הערת") == [], "עור licensed by ערת")
    expect(hits("וְהָעוֹר", "וכנ הקצרת") != [], "עור without ערת fails")
    expect(hits("מִזְרַח", "כל מזרח") == [], "vocalized מזרח passes")
    expect(hits("מזרח", "כל מזרח") != [], "unvocalized מזרח is a trap")
    expect(hits("כֶּסֶף 10", "כספ {10}") == [], "numeral present")
    expect(hits("כֶּסֶף", "כספ {10}") != [], "numeral missing")
    expect(hits("בְּשֻׁלְחָנוֹ", "שלמ") == [], "a word containing שלם letters is not a hit")
    expect(hits("וּלְזֶבַח", "זבח") == [], "prefixes ול")
    expect(hits("שֶׁבַּמִּזְבֵּחַ", "") == [], "מזבח is not זבח")
    print(f"selftest: {fails} failures")
    return 1 if fails else 0


def main(argv):
    if not argv:
        print(__doc__)
        return 0
    cmd, rest = argv[0], argv[1:]
    strict = "--strict" in rest
    keys = [a for a in rest if not a.startswith("--")] or list(TEXTS)
    if cmd == "fill":
        cmd_fill(keys)
    elif cmd == "verify":
        return cmd_verify(keys, strict)
    elif cmd == "build":
        cmd_build(keys)
    elif cmd == "translit":
        for l, t in read_base(keys[0]):
            print(l, translit(t))
    elif cmd == "selftest":
        return cmd_selftest()
    else:
        print(__doc__)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

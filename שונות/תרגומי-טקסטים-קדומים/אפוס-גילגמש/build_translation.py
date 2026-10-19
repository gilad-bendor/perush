"""Build the combined reading translations of the Gilgameš corpus, then verify them.

Usage (from any directory):  python3 -I build_translation.py

Writes
  1-הנוסח-הבבלי-התקני/translation.rtl.md   the SB epic in order I … XII, from translation-I.rtl.md … translation-XII.rtl.md;
                                           at the head of Tablet XI it EMBEDS the flood corpus's translation of XI 1–208
                                           with a <כלול-בהדפסה> directive (guidelines §7.4), then XI 209–328 follow.
  2-הנוסח-הבבלי-הקדום/translation.rtl.md   the OB tablets, from translation-OB-*.rtl.md (in gilg_config order).
Each project has a header file build_translation--head.rtl.md (title, general introduction, legend) that is copied first.
Per text: the file's title line `# …` becomes `## …`; its introduction (the lines before its first `## ` heading) is kept;
section headings are demoted (## -> ###); numbered lines and unnumbered lines are copied verbatim; footnote labels are
prefixed by the text key ([^1] in Tablet II becomes [^II-1]) so that they stay unique (the embedded flood file keeps its
own plain labels [^1] … [^17], which no prefixed label can collide with).
Texts without a translation file are skipped (and listed). Verification: every numbered line of the output equals its
source line (modulo the footnote prefix); footnote references and definitions match one to one; no duplicate labels.
Exit code 1 on any problem.
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gilg_config import HERE, TEXTS, SB, OB, translation_path

FLOOD_XI_TR = "../../סיפורי-המבול-המסופוטמיים/2-גילגמש-XI--סיפור-המבול/translation.rtl.md"
FLOOD_XI_FIRST_HEADING = "1–7: גלגמש פונה אל אותנפישתי"
LINE = re.compile(r"^\*\*([^*]+)\*\* ")
GENERATED = """<!--
GENERATED FILE. Do not edit by hand.
Built by ../build_translation.py from the per-tablet files translation-<KEY>.rtl.md and build_translation--head.rtl.md.
To change the text, edit those files and run: python3 -I ../build_translation.py
-->
"""


def body(key):
    src = open(translation_path(key), encoding="utf-8").read().split("\n")
    title = next((l for l in src if l.startswith("# ")), f"# {key}")
    first = next((i for i, l in enumerate(src) if l.startswith("## ")), len(src))
    ti = src.index(title) if title in src else -1
    intro = [l for l in src[ti + 1:first]]
    fix = lambda s: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{key}-{m.group(1)}]", s)
    text, notes = [], []
    for l in src[first:]:
        if l.startswith("[^"):
            notes.append(fix(l))
        elif l.strip() == "---":
            continue
        else:
            text.append("#" + fix(l) if l.startswith("## ") else fix(l))
    while text and not text[-1].strip():
        text.pop()
    intro = [fix(l) for l in intro]
    while intro and not intro[0].strip():
        intro.pop(0)
    while intro and not intro[-1].strip():
        intro.pop()
    return "#" + title, intro, text, notes, [l for l in src if LINE.match(l)]


def build(project, keys):
    pdir = os.path.join(HERE, project)
    head_path = os.path.join(pdir, "build_translation--head.rtl.md")
    head = open(head_path, encoding="utf-8").read().rstrip("\n") if os.path.exists(head_path) else f"# {project}"
    present = [k for k in keys if os.path.exists(translation_path(k))]
    missing = [k for k in keys if k not in present]
    parts = [GENERATED + "\n" + head]
    srcs, titles = {}, {}
    for k in present:
        t, intro, text, notes, sl = body(k)
        srcs[k] = sl
        titles[k] = t
        chunk = [t, ""] + (intro + [""] if intro else [])
        if k == "XI":
            chunk += [
                "### 1–208: סיפור המבול (משובץ מקורפוס המבול)",
                "",
                f"שורות 1–208 של הלוח מתורגמות ומוערות בקורפוס סיפורי המבול (`{FLOOD_XI_TR}`), והן משובצות כאן מתוך אותו קובץ. "
                "בתצוגה שאינה מבצעת את השיבוץ, ראו את הקובץ עצמו.",
                "",
                f'<כלול-בהדפסה מקור="{FLOOD_XI_TR}" מ="{FLOOD_XI_FIRST_HEADING}" כותרות="+1">',
                "",
            ]
        chunk += text + ([""] + notes if notes else [])
        parts.append("\n\n" + "\n".join(chunk))
    res = "".join(parts).rstrip("\n") + "\n"
    out = os.path.join(pdir, "translation.rtl.md")
    open(out, "w", encoding="utf-8").write(res)
    # verify
    bad = 0
    comb = res.split("\n")
    heads = {k: comb.index(titles[k]) for k in present}
    order = present + [None]
    for i, k in enumerate(present):
        a = heads[k]
        b = heads[order[i + 1]] if order[i + 1] else len(comb)
        seg = comb[a:b]
        cl = [l for l in seg if LINE.match(l)]
        sl = [re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", l) for l in srcs[k]]
        if cl != sl:
            print(k, "numbered lines differ from the source", len(cl), len(sl))
            for x, y in zip(cl, sl):
                if x != y:
                    print("  ", x, "\n  ", y)
                    break
            bad += 1
        txt = "\n".join(seg)
        refs = re.findall(r"\[\^(" + re.escape(k) + r"-[^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^(" + re.escape(k) + r"-[^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(k, "footnote mismatch", len(refs), len(defs))
            bad += 1
        print(f"{project} {k}: {len(cl)} numbered lines, {len(defs)} footnotes")
    labels = re.findall(r"^\[\^([^\]]+)\]:", res, re.M)
    if len(labels) != len(set(labels)):
        print("duplicate footnote labels")
        bad += 1
    if missing:
        print(f"{project}: no translation file yet for {', '.join(missing)}")
    return bad


def main():
    sb = [t[0] for t in TEXTS if t[1] == SB]
    ob = [t[0] for t in TEXTS if t[1] == OB]
    bad = build(SB, sb)
    if any(os.path.exists(translation_path(k)) for k in ob):
        bad += build(OB, ob)
    print("problems:", bad)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())

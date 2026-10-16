"""Verify the Enūma eliš translation files.

Usage (from any directory):  python3 -I verify.py [I II ...]      (default: every tablet that has files)

Checks, per tablet:
  1. annotated-<T>.rtl.md: every entry `### <n>` has exactly one `> ` Hebrew line; entries follow eBL's line list
     (sources/eBL/Enuma-elish-SB-<T>/reading-edition.md), with no line missing or duplicated.
  2. translation-<T>.rtl.md: its numbered lines (`**<n>** …`) equal the annotated `>` lines, one to one
     (footnote references [^…] and trailing spaces are ignored).
  3. Repeated lines: for every pair of lines that eBL marks as parallel (the `Parallels:` field, exact parallels only,
     not "cf."), the Hebrew must be identical. Differences are listed with both normalizations, so that each one can be
     justified by a difference in the Akkadian (guidelines §6.1).
  4. The fixed passage of renderings.md §2 (Tiāmat's army): every copy in I, II and III equals the table's Hebrew
     (a copy may add [ ] where its own manuscripts are broken; such lines are listed but not counted as errors).
Exit code 1 if check 1, 2 or 4 fails; check 3 only reports (some differences are justified).
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
EBL = os.path.normpath(os.path.join(HERE, "..", "..", "sources", "eBL"))
TABLETS = ["I", "II", "III", "IV", "V", "VI", "VII"]


def ebl_lines(t):
    """eBL line labels, normalizations and exact parallels for tablet t."""
    path = os.path.join(EBL, f"Enuma-elish-SB-{t}", "reading-edition.md")
    order, norm, par = [], {}, {}
    cur = None
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^### (\S+)", l)
        if m:
            cur = m.group(1)
            order.append(cur)
            continue
        if cur and l.startswith("- **N:**"):
            norm[cur] = l[8:].strip()
        if cur and l.startswith("- **Parallels:**"):
            for p in l[16:].split(";"):
                m2 = re.match(r'^\s*L I\.2 SB "(\w+)" (\S+)\s*$', p)
                if m2:
                    par.setdefault(cur, []).append((m2.group(1), m2.group(2)))
    return order, norm, par


def annotated(t):
    path = os.path.join(HERE, f"annotated-{t}.rtl.md")
    if not os.path.exists(path):
        return None
    entries, cur, problems = {}, None, []
    seq = []
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in entries:
                problems.append(f"duplicate entry {cur}")
            entries[cur] = []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is not None and l.startswith("> "):
            entries[cur].append(l[2:].strip())
    for k, v in entries.items():
        if len(v) != 1:
            problems.append(f"entry {k}: {len(v)} '>' lines")
    return {k: (v[0] if v else "") for k, v in entries.items()}, seq, problems


def translation(t):
    path = os.path.join(HERE, f"translation-{t}.rtl.md")
    if not os.path.exists(path):
        return None
    out, seq = {}, []
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            k = m.group(1)
            txt = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            out[k] = txt
            seq.append(k)
    return out, seq


def main(argv):
    tabs = argv[1:] or TABLETS
    bad = 0
    heb = {}
    norms = {}
    pars = {}
    for t in TABLETS:
        order, norm, par = ebl_lines(t)
        norms[t], pars[t] = norm, par
        a = annotated(t)
        if a is None:
            continue
        ent, seq, probs = a
        heb[t] = ent
        if t not in tabs:
            continue
        for p in probs:
            print(f"{t}: {p}")
            bad += 1
        missing = [x for x in order if x not in ent]
        extra = [x for x in seq if x not in order]
        if missing:
            print(f"{t}: missing in annotated: {missing}")
            bad += 1
        if extra:
            print(f"{t}: entries not in eBL: {extra}")
            bad += 1
        if [x for x in seq if x in order] != [x for x in order if x in ent]:
            print(f"{t}: entries out of eBL order")
            bad += 1
        tr = translation(t)
        if tr is None:
            print(f"{t}: no translation file yet")
        else:
            tl, tseq = tr
            if tseq != seq:
                print(f"{t}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != ent[k]:
                    print(f"{t} {k}: translation != annotated\n   T: {tl[k]}\n   A: {ent[k]}")
                    bad += 1
        print(f"Tablet {t}: {len(seq)} annotated entries (eBL {len(order)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    # repeated lines
    print("\nRepeated lines (eBL parallels) with different Hebrew:")
    seen = set()
    ndiff = 0
    for t in TABLETS:
        for k, lst in pars[t].items():
            for (t2, k2) in lst:
                key = tuple(sorted([(t, k), (t2, k2)]))
                if key in seen:
                    continue
                seen.add(key)
                if t in heb and t2 in heb and k in heb[t] and k2 in heb[t2]:
                    if heb[t][k] != heb[t2][k2] and (t in tabs or t2 in tabs):
                        if re.sub(r"[\[\]]", "", heb[t][k]) == re.sub(r"[\[\]]", "", heb[t2][k2]):
                            print(f"- (brackets only) {t} {k} / {t2} {k2}")
                            continue
                        ndiff += 1
                        print(f"- {t} {k} ≠ {t2} {k2}\n    {norms[t].get(k)}\n    {norms[t2].get(k2)}\n    {heb[t][k]}\n    {heb[t2][k2]}")
    # fixed passage
    rows = []
    for l in open(os.path.join(HERE, "renderings.md"), encoding="utf-8"):
        m = re.match(r"^\| (\d+) \| (\d+) \| (\d+) \| (\d+) \| [^|]+ \| (.+) \|\s*$", l)
        if m:
            rows.append(m.groups())
    nfix = 0
    for r in rows:
        for t, k in (("I", r[0]), ("II", r[1]), ("III", r[2]), ("III", r[3])):
            if t in heb and k in heb[t] and heb[t][k] != r[4].strip():
                unbr = lambda x: re.sub(r"[\[\]]", "", x)
                if unbr(heb[t][k]) == unbr(r[4].strip()):
                    print(f"fixed passage, brackets only (allowed: the copy is broken here): {t} {k}: {heb[t][k]}")
                else:
                    print(f"FIXED PASSAGE: {t} {k}: {heb[t][k]}  !=  {r[4].strip()}")
                    nfix += 1
    bad += nfix
    print(f"fixed passage: {len(rows)} rows checked, {nfix} mismatch(es)")
    print(f"{ndiff} difference(s) in repeated lines; problems: {bad}")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

"""List, for one text of the Gilgameš corpus, every line that repeats (or nearly repeats) another line, with the
Hebrew already given to the other copy. Run it BEFORE drafting a tablet, and again before finishing it.

Usage (from any directory):  python3 -I parallels_for.py KEY [--all]
    KEY = I … XII, OB-II, OB-III, OB-VA+BM, …
    --all  also list lines whose parallels are not yet translated

Sources of the list:
  * eBL's "Parallels:" field (exact = must be identical Hebrew where the Akkadian is identical; "cf." = similar),
    within the epic (L I.4) and to other texts (e.g. L I.1 = Atra-ḫasīs, shown without Hebrew);
  * identical normalizations anywhere in the corpus (brackets, metrical marks and (…) ignored), which eBL's field
    sometimes misses.
Hebrew of XI 1–208 comes from the flood corpus (read-only).
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gilg_config import TEXTS, BY_EBL, ebl_lines, all_hebrew


def key_norm(n):
    n = re.sub(r"\([^)]*\)", "", n or "")
    n = re.sub(r"[\[\]|⸢⸣<>?!]", "", n)
    n = n.replace("...", "")
    return re.sub(r"\s+", " ", n).strip()


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 1
    key = argv[1]
    show_all = "--all" in argv
    data = {t[0]: ebl_lines(t[0]) for t in TEXTS}
    heb = all_hebrew()
    # XI 1–208 normalizations (not in data, which starts at 209)
    from gilg_config import BY_KEY
    import gilg_config
    saved = BY_KEY["XI"]
    BY_KEY["XI"] = saved[:5] + (None,)
    xi_full = ebl_lines("XI")
    BY_KEY["XI"] = saved
    norms = {k: dict(v[1]) for k, v in data.items()}
    norms["XI"] = xi_full[1]
    pars = {k: dict(v[4]) for k, v in data.items()}
    pars["XI"] = xi_full[4]
    idx = {}
    for k, nd in norms.items():
        for lab, n in nd.items():
            kn = key_norm(n)
            if len(kn) > 8:
                idx.setdefault(kn, []).append((k, lab))
    order, norm, trans, lem, par = data[key]
    # reverse parallels: lines elsewhere that point to this text
    rev = {}
    for k2, pd in pars.items():
        for lab2, lst in pd.items():
            for (cf, tno, stage, ch, lab) in lst:
                if tno == "4" and BY_EBL.get((stage, ch)) == key:
                    rev.setdefault(lab, []).append((cf, k2, lab2))
    nlines = 0
    for lab in order:
        items = []
        for (cf, tno, stage, ch, lab2) in par.get(lab, []):
            k2 = BY_EBL.get((stage, ch)) if tno == "4" else None
            items.append(("cf." if cf else "=", k2 or f'L I.{tno} {stage} "{ch}"', lab2))
        for (cf, k2, lab2) in rev.get(lab, []):
            items.append(("cf." if cf else "=", k2, lab2))
        for (k2, lab2) in idx.get(key_norm(norm.get(lab)), []):
            if (k2, lab2) != (key, lab):
                items.append(("same-N", k2, lab2))
        seen, out = set(), []
        for it in items:
            if (it[1], it[2]) in seen:
                continue
            seen.add((it[1], it[2]))
            h = heb.get(it[1], {}).get(it[2])
            if h is None and not show_all:
                continue
            out.append((it, h))
        if not out:
            continue
        nlines += 1
        print(f"### {key} {lab}\n  N: {norm.get(lab)}")
        mine = heb.get(key, {}).get(lab)
        if mine:
            print(f"  HE (this file): {mine}")
        for (kind, k2, lab2), h in out:
            n2 = norms.get(k2, {}).get(lab2, "")
            print(f"  {kind} {k2} {lab2}: {n2}")
            if h:
                print(f"      HE: {h}")
    print(f"\n{nlines} line(s) of {key} with parallels" + ("" if show_all else " already translated elsewhere (use --all for every parallel)"))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

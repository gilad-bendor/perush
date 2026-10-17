"""Verify the Gilgameš corpus files.

Usage (from any directory):  python3 -I verify.py [KEY ...] [--strict]
    KEY = I … XII, OB-II, OB-III, OB-VA+BM, OB-Schoyen2 … (default: every text that has an annotated file)

Checks, per text (see gilg_config.TEXTS):
  1. annotated-<KEY>.rtl.md: every entry `### <label>` has exactly one `> ` Hebrew line; the entries follow eBL's line
     list (sources/eBL/<folder>/reading-edition.md; XI from 209), none missing, duplicated or out of order.
     A file may hold a placeholder `<!-- טרם תורגם: … -->` for lines not yet drafted: missing lines are then counted and
     reported, and fail only with --strict.
  2. translation-<KEY>.rtl.md: its numbered lines (`**<label>** …`) equal the annotated `>` lines one to one
     (footnote references [^…] and trailing spaces ignored).
  3. Repeated lines: every pair of lines that eBL marks as exact parallels (not "cf.") inside the Gilgameš corpus
     (L I.4), including XI 1–208 of the flood corpus, must have identical Hebrew. Differences are listed with both
     normalizations (bracket-only differences separately), so that each can be justified by the Akkadian.
  4. I 1–28 must equal the flood corpus's copy (6-אזכורי-המבול, §6) exactly.
  5. Reserved strings (RESERVED below) in the `>` lines: each hit is listed with the line's eBL lemmas; a hit whose
     line lacks the allowed lemma is an error.
Exit code 1 if check 1 (with --strict), 2, 4 or 5 fails; check 3 only reports.
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gilg_config import (TEXTS, BY_KEY, BY_EBL, ebl_lines, read_annotated, annotated_path, translation_path,
                         all_hebrew, strip_marks)

# Reserved Hebrew strings (searched in the unvocalized `>` line, as whole words with prefixes allowed):
# (regex, allowed eBL lemma prefixes or None = never allowed, why)
RESERVED = [
    (r"אלוהים|אלהים", None, "ilu is always אֵל / אֵלִים (never אֱלֹהִים)"),
    (r"(?<![א-ת])[ובלמהכש]?(?:תבה|תיבה)(?![א-ת])", None, "elippu is never תֵּבָה; tupšennu = תיבת־הלוחות only as a compound"),
    (r"(?<![א-ת])[ובלמהכש]?(?:כרוב|כרובים)(?![א-ת])", None, "no cherubim in the Akkadian"),
    (r"(?<![א-ת])[ובלמהכש]?עדן(?![א-ת])", None, "no Eden in the Akkadian"),
    (r"(?<![א-ת])[ובלמהכש]?רקיע", None, "Akkadian has no raqīʿu"),
    (r"(?<![א-ת])[ובלמהכש]?(?:לעולם|עולם)(?![א-ת])", None, "dārû / ṣâtu = נֶצַח / עַד, never עוֹלָם"),
    (r"(?<![א-ת])[ובלמהכש]?טרם(?![א-ת])", None, "טֶרֶם only for a real 'not yet' construction (add the lemma when one occurs)"),
    (r"(?<![א-ת])[ובלמהכש]?(?:נחש|הנחש|נחשים)(?![א-ת])", ["ṣerru", "bašmu", "ṣīru"], "נָחָשׁ only for the snake word"),
    (r"(?<![א-ת])[ובלמהכש]?(?:עפר|העפר)(?![א-ת])", ["eperu", "epru"], "עָפָר reserved for eperu (Gen 3:19)"),
    (r"(?<![א-ת])[ובלמהכש]?(?:טיט|הטיט)(?![א-ת])", ["ṭiṭṭu", "ṭīdu", "ṭidu"], "טִיט reserved for ṭiṭṭu"),
    (r"(?<![א-ת])[ובלמהכש]?(?:ארור|אאור|ארר|מארה|המארה|מארת|מארתך|ארורה|מארות|מארותיך|מארותייך)(?![א-ת])", ["arāru", "arratu", "erretu", "Aruru"], "ארר reserved for arāru / arratu"),
    (r"(?<![א-ת])[ובלמהכש]?(?:ערום|ערומה|עירום|עירומה|ערומים)(?![א-ת])", ["erû", "ūru", "mērênu"], "עָרוֹם / עֵירֹם only for the Akkadian nakedness words (Gen 2:25; 3:7)"),
    (r"(?<![א-ת])[ובלמהכש]?(?:פתר|פותר|פתרון|פתרונו)(?![א-ת])", None, "pašāru = פָּשַׁר (פתר only in notes, Gen 40–41)"),
]


# Raw strings (with niqqud as written) that must never stand unvocalized in a `>` line: names that read as Hebrew words.
RAW_FORBIDDEN = [
    (r"(?<![\u0591-\u05C7א-ת])[ובלמהכש]?שמחת(?![\u0591-\u05C7א-ת])", "Šamḫat must be vocalized שַׁמְחַת (unvocalized it reads 'joy of')"),
    (r"(?<![\u0591-\u05C7א-ת])[ובלמהכש]?ארורו(?![\u0591-\u05C7א-ת])", "Aruru must be vocalized אֲרוּרוּ (false friend of אָרוּר)"),
]


def lemma_ok(lemmas, allowed):
    return any(any(x.startswith(a) for a in allowed) for x in lemmas)


def translation(key):
    path = translation_path(key)
    if not os.path.exists(path):
        return None
    out, seq = {}, []
    for l in open(path, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            k = m.group(1)
            out[k] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            seq.append(k)
    return out, seq


def main(argv):
    strict = "--strict" in argv
    keys = [a for a in argv[1:] if not a.startswith("--")]
    present = [t[0] for t in TEXTS if os.path.exists(annotated_path(t[0]))]
    keys = keys or present
    bad = 0
    data = {}
    for t in TEXTS:
        data[t[0]] = ebl_lines(t[0])
    heb = all_hebrew()
    nmissing_total = 0
    for key in keys:
        if key not in present:
            print(f"{key}: no annotated file")
            continue
        order, norm, trans, lem, par = data[key]
        ent, seq, probs = read_annotated(annotated_path(key))
        txt = open(annotated_path(key), encoding="utf-8").read()
        placeholder = "טרם תורגם" in txt
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in order if x not in ent]
        extra = [x for x in seq if x not in order]
        if missing:
            nmissing_total += len(missing)
            if placeholder and not strict:
                print(f"{key}: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in eBL: {extra}")
            bad += 1
        if [x for x in seq if x in order] != [x for x in order if x in ent]:
            print(f"{key}: entries out of eBL order")
            bad += 1
        empty = [k for k in seq if not ent[k].strip()]
        if empty:
            print(f"{key}: empty '>' lines: {empty}")
            bad += 1
        tr = translation(key)
        if tr is None:
            print(f"{key}: no translation file yet")
        else:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != ent[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {ent[k]}")
                    bad += 1
        # reserved strings
        for k in seq:
            plain = strip_marks(ent[k])
            for rx, allowed, why in RESERVED:
                if re.search(rx, plain):
                    if allowed and lemma_ok(lem.get(k, []), allowed):
                        continue
                    print(f"RESERVED {key} {k}: /{rx}/ – {why}\n    {ent[k]}\n    lemmas: {', '.join(lem.get(k, []))}")
                    bad += 1
        for k in seq:
            for rx, why in RAW_FORBIDDEN:
                if re.search(rx, ent[k]):
                    print(f"UNVOCALIZED {key} {k}: {why}\n    {ent[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (eBL {len(order)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    # check 4: I 1–28
    if "I" in heb and "I@refs" in heb and "I" in keys:
        n4 = 0
        for k, v in heb["I@refs"].items():
            if k in heb["I"] and heb["I"][k] != v:
                print(f"I {k} differs from the flood corpus copy (6-אזכורי-המבול §6):\n    {heb['I'][k]}\n    {v}")
                n4 += 1
        bad += n4
        print(f"I 1–28 vs the flood corpus: {n4} difference(s)")
    # check 3: repeated lines
    print("\nRepeated lines (eBL exact parallels) with different Hebrew:")
    seen, ndiff, nbr = set(), 0, 0
    for t in TEXTS:
        key = t[0]
        order, norm, trans, lem, par = data[key]
        for k, lst in par.items():
            for (cf, textno, stage, ch, k2) in lst:
                if cf or textno != "4":
                    continue
                key2 = BY_EBL.get((stage, ch))
                if key2 is None:
                    continue
                pair = tuple(sorted([(key, k), (key2, k2)]))
                if pair in seen:
                    continue
                seen.add(pair)
                if keys and key not in keys and key2 not in keys:
                    continue
                h1 = heb.get(key, {}).get(k)
                h2 = heb.get(key2, {}).get(k2)
                if h1 is None or h2 is None or h1 == h2:
                    continue
                n2 = data[key2][1].get(k2)
                if strip_marks(h1) == strip_marks(h2):
                    nbr += 1
                    print(f"- (marks only) {key} {k} / {key2} {k2}:  {h1}  |  {h2}")
                    continue
                ndiff += 1
                print(f"- {key} {k} ≠ {key2} {k2}\n    {norm.get(k)}\n    {n2}\n    {h1}\n    {h2}")
    print(f"\n{ndiff} difference(s) in repeated lines, {nbr} in brackets/marks only; "
          f"{nmissing_total} line(s) not yet drafted; problems: {bad}")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

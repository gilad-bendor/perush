#!/usr/bin/env python3
"""Check that every Bible quotation in a translation file matches the vocalized Bible in the repository.

A quotation is a backticked Hebrew span followed (within a few characters) by a reference such as
`בראשית ח:כא`, `ח:כא` (Genesis assumed by default) or `שמואל ב כה:לג`. A quotation may contain `…` for elisions.
Matching ignores punctuation and maqaf; niqqud must match (normalized to NFD). A fragment may be a word without its
prefixes (`כֹּפֶר` matches `בַּכֹּפֶר`), and a quotation may run into the next verses (a reference to its first verse is enough).

Usage:
    python3 -I check_bible_quotes.py <file.rtl.md> [more files…] [--default-book בראשית]
    python3 -I check_bible_quotes.py --show בראשית "ח כא" ["ו יד" …]     # print verses

Exit code 1 if any quotation does not match. References whose book can't be resolved are listed as UNRESOLVED.
"""
import glob
import os
import re
import sys
import unicodedata

BIBLE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "תנך-מנוקד")


def norm(s):
    s = unicodedata.normalize("NFD", s)
    s = re.sub(r"[;:.,!?־\-()׀\[\]{}\"'“”]", " ", s)
    return " " + re.sub(r"\s+", " ", s).strip() + " "


def key(book):
    """Loose book key: letters only, no matres (י/ו), so תהלים = תהילים, שמואל ב = שמואל-ב."""
    b = re.sub(r"[^א-ת]", "", book)
    return b[:1] + b[1:].replace("י", "").replace("ו", "")  # keep the first letter: יהושע ≠ הושע (fixed 2026-10-17)


order = []  # verse keys in file order, to look ahead into the following verses


def load():
    verses, books = {}, {}
    for f in glob.glob(os.path.join(BIBLE, "*", "*.rtl.md")):
        book = os.path.basename(f).replace(".rtl.md", "")
        books[key(book)] = book
        books["=" + re.sub(r"[^א-ת]", "", book)] = book  # exact key first (key() makes יהושע = הושע)
        for line in open(f, encoding="utf-8"):
            if line.startswith("> "):
                i = line.find(": ")
                ref = line[2:i].split(" ")
                verses[(book, ref[-2], ref[-1])] = line[i + 2:].rstrip("\n")
                order.append((book, ref[-2], ref[-1]))
    return verses, books


REF = r"((?:[א-ת\"]+(?:[ -]הימים)?(?:[ -][אב])?(?: [א-ת]+)? )?[א-ת]{1,3}:[א-ת]{1,3})"  # "דברי הימים ב" fixed 2026-10-17


def check(path, verses, books, default_book):
    src = open(path, encoding="utf-8").read()
    bad = 0
    for m in re.finditer(r"`([^`a-zA-Z]+)`[ ,]*[(–\-]*\s*" + REF, src):
        quote, ref = m.group(1), m.group(2).strip()
        rm = re.match(r"(?:(.+?) )?([א-ת]{1,3}):([א-ת]{1,3})$", ref)
        if not rm or not re.search(r"[֑-ׇ]", quote):
            continue  # not a vocalized quotation
        book = (books.get("=" + re.sub(r"[^א-ת]", "", rm.group(1))) or books.get(key(rm.group(1)))) if rm.group(1) else default_book
        if rm.group(1) and not book:
            # the "book" may be a Hebrew word preceding a bare reference; retry as default book
            book = default_book
        text = verses.get((book, rm.group(2), rm.group(3)))
        line_no = src.count("\n", 0, m.start()) + 1
        if text is None:
            print(f"{path}:{line_no}: UNRESOLVED {ref}  `{quote}`")
            bad += 1
            continue
        idx = order.index((book, rm.group(2), rm.group(3)))
        span = " ".join(verses[k] for k in order[idx:idx + 4] if k[0] == book)
        frags = [norm(x).strip() for x in re.split(r"…|\.\.\.", quote) if x.strip()]
        if not all(f in norm(span) for f in frags):
            print(f"{path}:{line_no}: MISMATCH {book} {rm.group(2)}:{rm.group(3)}  `{quote}`\n    verse: {text}")
            bad += 1
    return bad


def main(argv):
    verses, books = load()
    if argv[1:2] == ["--show"]:
        book = books.get("=" + re.sub(r"[^א-ת]", "", argv[2])) or books.get(key(argv[2]), argv[2])
        for r in argv[3:]:
            c, v = r.split()
            print(f"{book} {c}:{v}: {verses.get((book, c, v), 'NOT FOUND')}")
        return 0
    default_book = "בראשית"
    if "--default-book" in argv:
        i = argv.index("--default-book")
        default_book = argv[i + 1]
        argv = argv[:i] + argv[i + 2:]
    bad = sum(check(p, verses, books, default_book) for p in argv[1:])
    print(f"{bad} problem(s)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

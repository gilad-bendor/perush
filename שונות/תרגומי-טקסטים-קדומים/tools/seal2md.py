#!/usr/bin/env python3
"""Convert a saved SEAL text page (https://seal.huji.ac.il/node/<N>) into a clean Markdown working file.

    python3 -I seal2md.py <node-N.html> <out.md> <url>

Download the page first with a browser User-Agent (SEAL returns an error page to curl's default UA):
    curl -s -L -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36' \
         -o node-1600.html https://seal.huji.ac.il/node/1600

Output: title; the catalogue fields (label: value); the text table, one line per tablet line, with the line label
exactly as on the site (e.g. "12 A"; an empty label = a continuation line, e.g. the Akkadian line of a bilingual),
<em> (Akkadian, italic on the site) rendered as _…_, <sup> as {…}, <sub> digits as Unicode subscripts; under each
line that has lemmatized words, a "lemmas:" line (form = lemma "meaning"); then the translation and the notes.
Written 2026-10-16 (KAR 4, SEAL 1600). Treat the output as © SEAL (gitignored, guidelines §8).
"""
import html, re, sys

SUB = str.maketrans('0123456789x', '₀₁₂₃₄₅₆₇₈₉ₓ')


def inline(frag):
    frag = re.sub(r'<sub>(.*?)</sub>', lambda m: re.sub(r'<[^>]+>', '', m.group(1)).translate(SUB), frag, flags=re.S)
    frag = re.sub(r'<sup>(.*?)</sup>', lambda m: '{' + re.sub(r'<[^>]+>', '', m.group(1)) + '}', frag, flags=re.S)
    frag = re.sub(r'<em>(.*?)</em>', lambda m: '_' + m.group(1) + '_', frag, flags=re.S)
    frag = re.sub(r'<br\s*/?>', ' ', frag)
    frag = re.sub(r'<[^>]+>', '', frag)
    frag = html.unescape(frag).replace('\xa0', ' ')
    frag = frag.replace('__', '')
    return re.sub(r'[ \t]+', ' ', frag).strip()


def block_text(frag):
    frag = re.sub(r'</p>|<br\s*/?>|</li>|</tr>|</h\d>', '\n', frag)
    frag = re.sub(r'</td>', ' | ', frag)
    lines = [inline(l) for l in frag.split('\n')]
    return '\n'.join(l for l in lines if l)


def field(s, name):
    m = re.search(r'<div class="field field--name-field-%s[^"]*">(.*?)</div>\s*</div>\s*(?=<div class="field|</div>|\s*<div class="flex)' % name, s, re.S)
    return m.group(1) if m else ''


def main(src, out, url):
    s = open(src, encoding='utf-8').read()
    title = inline(re.search(r'<title>(.*?)</title>', s, re.S).group(1))
    o = [f'# {title}', '', f'Source: {url} (SEAL – Sources of Early Akkadian Literature, ed. M. P. Streck & N. Wasserman). '
         f'Clean extraction of `{src.split("/")[-1]}` by `tools/seal2md.py`. Conventions: `_…_` = italic on the site (Akkadian words); '
         '`{…}` = superscript (determinatives); a line with an empty label continues the previous one (e.g. the Akkadian of a bilingual line); '
         '`lemmas:` = SEAL\'s lemmatization (form = lemma "meaning").', '']
    # catalogue fields
    o.append('## Catalogue')
    for m in re.finditer(r'<div class="field--label">\s*(.*?)\s*</div>(.*?)(?=<div class="field field--|<div id="tabs-2"|<table class="_ts_tb")', s, re.S):
        label = inline(m.group(1))
        if label in ('Text', 'Translation'):
            continue
        val = '; '.join(x for x in (inline(v) for v in re.findall(r'<span class="summary-content">(.*?)</span>', m.group(2), re.S)) if x) \
            or inline(m.group(2))
        if val:
            o.append(f'- **{label}:** {val[:1500]}')
    o.append('')
    # text table
    o.append('## Text')
    tb = re.search(r'<table class="_ts_tb".*?</table>', s, re.S)
    if tb:
        for row in re.findall(r'<tr>(.*?)</tr>', tb.group(0), re.S):
            cells = re.findall(r'<td([^>]*)>(.*?)</td>', row, re.S)
            if len(cells) == 1:
                t = inline(cells[0][1])
                o.append(f'- {t}' if t else '')
                continue
            if len(cells) < 2:
                continue
            label = inline(cells[0][1])
            body = cells[1][1]
            words = re.findall(r'<span class="_ts_wd"([^>]*)>(.*?)</span>', body, re.S)
            text = inline(body)
            o.append(f'**{label}** {text}' if label else f'  ↳ {text}')
            lem = []
            for attrs, form in words:
                a = dict(re.findall(r'(\w+)="([^"]*)"', attrs))
                lem.append(f'{inline(form)} = {html.unescape(a.get("lm", ""))} "{html.unescape(a.get("me", ""))}"')
            if lem:
                o.append('  lemmas: ' + '; '.join(lem))
    o.append('')
    tr = re.search(r'field--name-field-translation[^>]*>(.*?)(?=<div class="field field--name-field-(?!translation)|<div id="tabs-3"|</article>)', s, re.S)
    if tr:
        o.append('## Translation')
        o.append(block_text(re.sub(r'<div class="field--label">.*?</div>', '', tr.group(1), count=1, flags=re.S)))
        o.append('')
    nb = re.search(r'field--name-body[^>]*>(.*?)</div>\s*</div>', s, re.S)
    if nb:
        o.append('## Notes (site)')
        o.append(block_text(re.sub(r'<div class="field--label">.*?</div>', '', nb.group(1), count=1, flags=re.S)))
    open(out, 'w', encoding='utf-8').write('\n'.join(o).rstrip() + '\n')
    print('wrote', out)


if __name__ == '__main__':
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(*sys.argv[1:])

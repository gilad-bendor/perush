# usage: python3 -I dfhg2md.py <in.json> <out.md> <title> <api-url> [fragnums-comma or 'all']
import json, sys, re, unicodedata
src, out, title, url = sys.argv[1:5]
sel = sys.argv[5] if len(sys.argv) > 5 else 'all'
d = json.load(open(src, encoding='utf-8'))
def clean(s):
    # OCR artifact in DFHG: elision written as space + U+0313 (combining comma above); normalise to U+2019
    s = s.replace(' ̓', '’')
    return unicodedata.normalize('NFC', s).strip()
L = [f'# {title}', '', f'Source: Digital Fragmenta Historicorum Graecorum (DFHG, Univ. Leipzig, M. Berti & G. Cumani), digitising C. Müller, *FHG* (Paris: Didot). API: {url}',
     'Licence: DFHG content CC BY-SA 4.0; underlying Müller text (1848/1851) public domain. Retrieved 2026-10-16.', '',
     'Text conventions: Greek and Latin exactly as in DFHG (polytonic Unicode), NFC-normalised; the only change is DFHG\'s OCR elision artefact (space + U+0313) → ’ (U+2019).',
     'Parenthesised remarks inside the Greek (e.g. "(Σιππάροις Scaliger)", "(quindecim, Eus.)") are Müller\'s own critical notes. "Translatio" = Müller\'s Latin translation (for Armenian-Eusebius fragments it is the Latin of Mai/Zohrab, from the Armenian).', '']
for e in d:
    fn = e['fragment_number'] + (e['fragment_letter'] or '')
    if sel != 'all' and e['fragment_number'] not in sel.split(','):
        continue
    if not (e['text'] or e['translation']):
        continue
    L.append(f"## Fr. {fn} — {e['book'] or e['section']} — witness: {e['witness']} (FHG vol. {e['volume']}, p. {e['page']})")
    L.append(f"`{e['urn']}`")
    L.append('')
    if e['text']:
        L += ['**Text:**', '', clean(e['text']), '']
    if e['translation']:
        L += ['**Translatio (Müller):**', '', clean(e['translation']), '']
    if e.get('note'):
        L += ['**Notae (Müller):**', '', clean(e['note']), '']
    if e.get('commentary'):
        L += ['**Commentary:**', '', clean(e['commentary']), '']
open(out, 'w', encoding='utf-8').write('\n'.join(L) + '\n')

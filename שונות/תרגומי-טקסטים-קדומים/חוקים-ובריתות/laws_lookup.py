# Look up how the law corpus has already rendered a word or formula: prints (project, line, normalization, Hebrew)
# for every annotated line whose normalization (the `N:` line) matches a regex, or (with --heb) whose Hebrew does.
# Reads the annotated files of the Laws of Hammurabi (2-חוקי-חמורבי/) and of projects 3-6 (laws_config.PROJECTS).
# usage: python3 -I laws_lookup.py '<regex>' [--heb] [--proj LH,LE,MAL,LI,UN] [--max N]
#   e.g. python3 -I laws_lookup.py '\bizuzz'        -> LH's `יחלוקו`
#        python3 -I laws_lookup.py 'נגף' --heb       -> every line with נגף
# Written 2026-10-18.
import sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import laws_config as C

args = [a for a in sys.argv[1:] if not a.startswith('--')]
pat = re.compile(args[0])
heb = '--heb' in sys.argv
proj = ('LH', 'LE', 'MAL', 'LI', 'UN')
mx = 200
for i, a in enumerate(sys.argv):
    if a == '--proj':
        proj = tuple(sys.argv[i + 1].split(','))
    if a == '--max':
        mx = int(sys.argv[i + 1])
n = 0
for k, lab, norm, h in C.all_pairs(proj):
    hay = C.strip_niqqud(h) if heb else norm
    if pat.search(hay):
        print(f'{k}\t{lab}\t{norm}\t{h}')
        n += 1
        if n >= mx:
            print('…'); break

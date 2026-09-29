# 09 · Aaron D. Rubin's open-access grammars with *Supplements* to Johnstone's lexica

## Identity

| Work | Series | Identifiers | Supplement inside |
|---|---|---|---|
| *Omani Mehri: A New Grammar with Texts* | Brill, Studies in Semitic Languages and Linguistics 93, 2018 | ISBN 978-90-04-36247-5; DOI 10.1163/9789004362475 | **Appendix C: Supplement to Johnstone's Mehri Lexicon**, pp. 822–834 (DOI 10.1163/9789004362475_018) |
| *The Jibbali (Shaḥri) Language of Oman: Grammar and Texts* | Brill, SSLL 72, 2014 | ISBN 978-90-04-26285-0; DOI 10.1163/9789004262850 | **Supplement to Johnstone's Jibbāli Lexicon** (also posted on ResearchGate 367960024) |

Both are marked Open Access on the Brill/De Gruyter Brill site and were uploaded by the author to Academia.edu (99087537, 96106574). *Omani Mehri* is in OAPEN (handle 20.500.12657/76320) and mirrored on archive.org as `oapen-20.500.12657-76320`.

## Licence

Brill open access (CC BY-NC-ND 4.0 for at least one of the two; the exact licence is printed in each PDF's front matter).

## Access class and what the tool does

`rubin-omani-mehri-2018`, `rubin-jibbali-2014` → **open**. `cli fetch --all-open`:
- OAPEN DSpace REST: `/rest/handle/20.500.12657/76320` → item uuid → `/rest/items/<uuid>/bitstreams` → PDF `retrieve` link → `data/rubin-omani-mehri-2018/dspace/…pdf`; fallback: archive.org mirror.
- For the Jibbali grammar the OAPEN handle was not identified; the fetcher searches OAPEN by title and otherwise you download from the Brill page (open) with `cli fetch-url rubin-jibbali-2014 <pdf-url>`.

## Why it matters

The supplements are the authoritative corrections/additions to ML and JL by the scholar who re-edited Johnstone's field materials; together with the >100 (Mehri) and 70 (Jibbali) glossed texts they are the best open MSA lexical material in English. `pdf-split` with the `johnstone-mehri` profile works reasonably on the supplement pages after `--sample` tuning.

## Open questions / not verified

- OAPEN handle for the Jibbali grammar; exact CC licence of each.

## Sources consulted

brill.com/view/book/9789004362475/BP000019.xml (Appendix C page); library.oapen.org handle 76320; archive.org `oapen-20.500.12657-76320`; degruyterbrill.com/document/isbn/9789004262850; academia.edu 99087537, 96106574; ResearchGate 367960024; catalog.sqcc.org record 4292.

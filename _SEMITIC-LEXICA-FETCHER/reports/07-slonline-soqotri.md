# 07 · Soqotri Lexicon Online (SLOnline)

## Identity

- `http://soqotri-lexicon.ru` — "Soqotri Lexicon Online". Editors: Vitaly Naumkin, Leonid Kogan, Maria Bulakh, Dmitry Cherkashin, Ekaterina Vizirova, Sergey Arkhipov and others, with native speakers ʿĪsā Gumʿān ad-Daʿrhī, Aḥmad ʿĪsā ad-Daʿrhī and Maysūn Muḥammad ad-Daʿrhī. Institutions: Institute for Oriental and Classical Studies (HSE University) and Institute of Oriental Studies (Russian Academy of Sciences). Funded by the Russian Science Foundation, project 16-18-10343 "Dictionary of Soqotri". Launched spring 2022; announced on AWOL, January 2023.
- Aim: a comprehensive Soqotri–English–Arabic lexicon, "a prolegomenon for an eventual book-format reference dictionary".

## Content and size

- ≈220 complete public entries; ≈1,800 entries in preparation (collaborators only).
- Sections: **Words**, **Roots**, **References** (sources list; e.g. `/sources/49`); regular-expression search (`.` as wildcard); interface in English/Arabic (`?locale=ar`), pages `/pages/aboutus`, `/pages/moreabout`.
- Entries cite Leslau 1938 (*LS* + page) and the Vienna texts, so the site is a partial index into the Lexique.

## Licence / terms

Not stated on the pages seen. Academic project; reuse of individual entries with citation is customary; bulk republication should be cleared with the editors.

## Access class and what the tool does

`slonline-soqotri` → **terms-check**. `cli crawl slonline-soqotri --accept-terms [--max=N]`: fetches the home page, discovers listing sections (`/words`, `/roots`, `/sources`, `/references`, `/entries`, `/lexemes`), follows `?page=N` pagination, then saves every entry page as raw HTML + text and a minimal JSON (`headword` = first `<h1>`). Because the site's HTML was not visible from the sandbox, `isListing()` / `isEntry()` in `src/fetchers/slonline.ts` are guesses to be corrected after the first run (`--max=5`).

## Value for the perush project

The only modern, philologically rigorous Soqotri lexicon with etymological commentary in English; each entry links to Leslau and to the corpus attestations.

## Open questions / not verified

- URL patterns of listing and entry pages; whether the site is a Rails/Django app with predictable pagination; robots.txt.
- Whether an export exists for collaborators (ask the editors: the project welcomes contributors).

## Sources consulted

soqotri-lexicon.ru home, /pages/moreabout, /pages/aboutus, /sources/49 (search snippets); AWOL post "Soqotri Lexicon online" (2023-01); HSE publications pages on the Soqotri Lexical Archive (2010, 2013 seasons); aiys.org "Socotra Language Online".

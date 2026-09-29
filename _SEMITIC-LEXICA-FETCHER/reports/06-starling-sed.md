# 06 · StarLing "Semitic etymology" database (Tower of Babel) and SED online

## Identity

- **StarLing / The Tower of Babel** — starlingdb.org (mirror: starling.rinet.ru). Etymological database project founded by Sergei Starostin (© 1998–2005 S. Starostin, 2006–2013 G. Starostin). The **Semitic etymology** database (`/data/semham/semet`) is the work of Alexander Militarev and Leonid Kogan and underlies their *Semitic Etymological Dictionary* (SED I *Anatomy of Man and Animals*, AOAT 278/1, 2000; SED II *Animal Names*, AOAT 278/2, 2005; Ugarit-Verlag).
- **SED online** — sed-online.ru: the Semitic Etymological Dictionary in web form (references page at `/pages/referencesAM`). Not probed from the sandbox; recorded as a URL.

## Why it matters here

Each StarLing record is a Proto-Semitic root with its reflexes per language and a *source reference with page number* for every form: Ugaritic (*DUL* …), Mehri (*JM* …), Jibbāli (*JJ* …), Ḥarsūsi (*JH* …), Soqoṭri (*LS* …, plus Naumkin/Kogan field data). It is therefore the largest open, structured extract of exactly the five works this project is after — filtered to the roots with Semitic etymologies (a few thousand records), which is the subset a Biblical-Hebrew commentary uses.

## Where / how

| URL | What |
|---|---|
| `https://starlingdb.org/downl.php?lan=en` | downloads page: StarLing software and several databases as DBF/VAR files (Altaic, IE, North-Caucasian confirmed; Semitic *unverified*) |
| `https://starlingdb.org/cgi-bin/response.cgi?root=config&basename=/data/semham/semet&first=N` | query result pages (offset `first`, 20-ish records per page); results seen up to `first=2481` in search engines, so ≥2,500 records |
| `https://starlingdb.org/cgi-bin/etymology.cgi?single=1&basename=/data/semham/semet&text_number=N&root=config` | one record |
| `https://starlingdb.org/Texts/ToB_FAQ.pdf`, `/program.php` | FAQ and DBF format description; GitHub `rhaver/Starling-cs` documents the DBF/VAR encoding |

## Licence / terms

None stated beyond the copyright line. The FAQ invites scholarly use with citation. Treat as: personal research use and citation fine; redistribution of a bulk copy not fine without asking (contact via the site).

## Access class and what the tool does

`starling-semitic` → **terms-check**. `cli crawl starling-semitic --accept-terms [--max=N]`:
1. fetches the downloads page and saves any Semitic/Afrasian database file it links (one file beats a crawl);
2. otherwise pages through `response.cgi` with `first=` offsets discovered from the page's own links, ≥2 s apart, saving raw HTML under `data/starling-semitic/starling/raw/` and parsed records to `starling/semitic-records.json`.
`parseRecords()` turns the "Field: value" lines into JSON; it is tested on a synthetic fixture only — inspect the first raw page and adjust the field regex if StarLing's markup differs.

## Structure of a record (as rendered)

`Proto-Semitic: *ʔab-` · `Meaning: father` · `Akkadian: …` · `Ugaritic: ảb [DUL 5]` · `Hebrew: …` · `Mehri: ḥayb [JM 3]` · `Jibbali: …` · `Harsusi: …` · `Soqotri: ʔe [LS 49]` · `Notes: …` · `References: …`. Field names vary by record; the parser keeps whatever it finds.

## Value for the perush project

Direct: a root-by-root comparative table with the Hebrew reflex in the same row as Ugaritic and MSA — the comparative block that DULAT/Johnstone/Leslau entries would otherwise supply.

## Open questions / not verified

- Presence of the Semitic database on the downloads page.
- Exact markup of result pages (parser may need one adjustment).
- SED online structure and terms.

## Sources consulted

starlingdb.org descrip.php, downl.php, program.php, ToB_FAQ.pdf, Texts/semroot.pdf (search snippets); starlingdb.org query URLs with `first=1741`, `first=2481`; github.com/rhaver/Starling-cs; sed-online.ru references page; SED I–II bibliographic records (WorldCat, NLI, Google Books).

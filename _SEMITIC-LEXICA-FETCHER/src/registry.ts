/**
 * The source registry: everything we know about each work, how it can be
 * obtained, and which automated fetcher (if any) may pull it.
 *
 * Facts here were collected on 2026-09-29 from publisher pages, library
 * catalogues and search results. Entries marked "unverified" could not be
 * opened from the sandbox where this file was written (egress blocked) and
 * should be confirmed by running `status`.
 */
import type { SourceSpec } from './types.js';

export const SOURCES: SourceSpec[] = [
  // ───────────────────────────── 1. DULAT ─────────────────────────────
  {
    id: 'dulat3',
    title: 'A Dictionary of the Ugaritic Language in the Alphabetic Tradition (DULAT), 3rd rev. ed., 2 vols (HdO I/112)',
    authors: 'G. del Olmo Lete & J. Sanmartín; transl./ed. W.G.E. Watson',
    year: '2015',
    languages: ['Ugaritic'],
    role: 'primary',
    access: 'purchase',
    fetcher: 'google-books',
    ids: {
      isbn: ['9789004288645 (hardback)', '9789004288652 (e-book)'],
      doi: '10.1163/9789004288652',
      googleBooksIds: ['bh6oBgAAQBAJ'],
      urls: [
        'https://brill.com/display/title/26466',
        'https://www.degruyterbrill.com/document/isbn/9789004288652/html',
        'https://play.google.com/store/books/details?id=bh6oBgAAQBAJ',
      ],
    },
    licence: 'All rights reserved (Brill). Brill e-books are sold DRM-free as PDF; whole book and per-chapter download.',
    notes: [
      'BUY: Brill sells the e-book (ISBN 978-90-04-28865-2) DRM-free as PDF; hardback ~US$330 / €245 (2-vol set). Also on Google Play Books (DRM, in-app only) — prefer Brill for a parseable PDF.',
      'After purchase: run `pdf-split dulat <file.pdf>` to turn the PDF into per-entry JSON.',
      'Institutional access: many university libraries license the Brill "Handbook of Oriental Studies" e-book collection; an alumni/reader card may be enough.',
      '2nd ed. (2003/2004) is on archive.org as dictionaryofugar0000olmo — access-restricted (Controlled Digital Lending): browse after "Borrow", no download, do not crawl.',
      'Unauthorised uploads of the PDF circulate on Scribd/Academia/ResearchGate; this tool deliberately does not fetch them.',
    ],
  },
  {
    id: 'dulat2-archive-cdl',
    title: 'DULAT 2nd ed. (2003) — Internet Archive lending copy',
    authors: 'del Olmo Lete & Sanmartín',
    year: '2004',
    languages: ['Ugaritic'],
    role: 'primary',
    access: 'browse-only',
    fetcher: 'archive.org',
    ids: { archiveOrgItems: ['dictionaryofugar0000olmo'] },
    notes: ['Controlled Digital Lending item: readable one hour at a time with a free archive.org account. `status` only confirms the restriction; nothing is downloaded.'],
  },

  // ───────────────────────── 2. Johnstone lexicons ─────────────────────────
  {
    id: 'johnstone-mehri-1987',
    title: 'Mehri Lexicon and English–Mehri Word-List, with Index of the English Definitions in the Jibbāli Lexicon (comp. G. Rex Smith)',
    authors: 'T.M. Johnstone',
    year: '1987 (SOAS); Routledge e-book 2000',
    languages: ['Mehri', 'Jibbali'],
    role: 'primary',
    access: 'purchase',
    fetcher: 'archive.org',
    ids: {
      isbn: ['9780728601376 (print)', '9780203045947 (e-book)'],
      doi: '10.4324/9780203045947',
      googleBooksIds: ['h8M5BW-ccEAC', '79JK4_t5F9sC'],
      hathiOclc: ['15196384', '819635692'],
      archiveOrgItems: ['rosettaproject_gdq_phon-2', 'rosettaproject_gdq_morsyn-2'],
      urls: ['https://www.taylorfrancis.com/books/mono/10.4324/9780203045947/mehri-lexicon-johnstone'],
    },
    licence: 'All rights reserved (Taylor & Francis). Most T&F e-books are DRM-free PDF/EPUB after purchase.',
    notes: [
      'BUY: the Routledge/Taylor & Francis e-book (DOI 10.4324/9780203045947) is the only official digital edition; buy on taylorfrancis.com, download the PDF, then `pdf-split johnstone-mehri <file.pdf>`.',
      'Bonus: the same volume contains the English index to the Jibbāli Lexicon, i.e. a reverse index into the 1981 work.',
      'Open excerpts: the Rosetta Project put a few introductory pages (phonology; morphology/syntax) on archive.org — fetched automatically, but they are not the lexicon proper.',
      'Supplement (open): Rubin 2018, Omani Mehri, Appendix C "Supplement to Johnstone\'s Mehri Lexicon", pp. 822–834 — see rubin-omani-mehri-2018.',
      'Print: second-hand copies list at roughly US$200–700.',
    ],
  },
  {
    id: 'johnstone-jibbali-1981',
    title: 'Jibbāli Lexicon',
    authors: 'T.M. Johnstone',
    year: '1981 (OUP for SOAS)',
    languages: ['Jibbali'],
    role: 'primary',
    access: 'offline',
    fetcher: 'archive.org',
    ids: {
      isbn: ['0197136028', '9780197136027'],
      googleBooksIds: ['iskrAAAAMAAJ'],
      hathiRecord: ['000571379'],
      archiveOrgQueries: ['title:(jibbali lexicon) OR title:(jibbāli lexicon)'],
    },
    licence: 'All rights reserved (OUP). No e-book edition exists.',
    notes: [
      'No official digital edition. Google Books: no preview. HathiTrust record 000571379 is expected to be search-only (in copyright).',
      'Obtain: second-hand copy (AbeBooks/Amazon marketplace, typically US$150–400) or inter-library loan; a library may scan up to the legal "fair dealing" portion on request.',
      'Open substitutes: (a) English→Jibbāli index inside the Mehri Lexicon e-book; (b) Rubin 2014, The Jibbali (Shaḥri) Language of Oman — open access at Brill — with "Supplement to Johnstone\'s Jibbāli Lexicon"; (c) StarLing/SED entries quote Johnstone\'s Jibbāli forms with page refs.',
      '`status` runs an archive.org search in case a lending copy has appeared (unverified).',
    ],
  },
  {
    id: 'johnstone-harsusi-1977',
    title: 'Ḥarsūsi Lexicon and English–Ḥarsūsi Word-List',
    authors: 'T.M. Johnstone',
    year: '1977 (OUP for SOAS)',
    languages: ['Harsusi'],
    role: 'primary',
    access: 'browse-only',
    fetcher: 'archive.org',
    ids: {
      isbn: ['0197135803'],
      archiveOrgItems: ['harsusilexiconen00john'],
    },
    licence: 'All rights reserved (OUP). No e-book edition exists.',
    notes: [
      'archive.org item harsusilexiconen00john is access-restricted (Controlled Digital Lending): readable in the browser after "Borrow" with a free account; not downloadable, not crawlable.',
      'Print: second-hand copies are cheaper than the Mehri/Jibbāli volumes.',
      'Open substitutes: StarLing/SED quote Ḥarsūsi forms; Watson–Morris–Eades 2019 Comparative Cultural Glossary (OUP, paid) covers 345 head terms in all six MSA languages.',
    ],
  },

  // ───────────────────────────── 3. Leslau ─────────────────────────────
  {
    id: 'leslau-soqotri-1938',
    title: 'Lexique soqoṭri (sudarabique moderne) avec comparaisons et explications étymologiques (Collection linguistique 41)',
    authors: 'W. Leslau',
    year: '1938 (Paris: Klincksieck)',
    languages: ['Soqotri', 'Comparative'],
    role: 'primary',
    access: 'offline',
    fetcher: 'hathitrust',
    ids: {
      archiveOrgQueries: ['title:(lexique soqotri) OR title:(lexique soqoṭri) OR (creator:(leslau) AND title:(soqotri))'],
      googleBooksQuery: 'intitle:"lexique soqotri"',
      urls: [
        'https://catalog.hathitrust.org/Search/Home?lookfor=%22Lexique+soqotri%22&type=title',
        'https://babel.hathitrust.org/cgi/ls?q1=soqotri;anyall1=phrase;lmt=all',
      ],
    },
    licence: 'In copyright: Leslau d. 2006 → protected until 2077 in the EU/Israel (life+70); in the US until end of 2033 (95 years from publication, URAA-restored).',
    notes: [
      'No lawful digital copy exists anywhere we could find: not on archive.org, not on Gallica, not full-view on HathiTrust or Google Books. Persée only has the 1938–39 reviews.',
      'Obtain: (1) second-hand copy — rare; watch viaLibri/AbeBooks/ZVAB alerts for "Lexique soqotri"; (2) library scan-on-demand / document delivery (National Library of Israel, BnF reproduction service, Subito) — legal for a research portion; (3) inter-library loan of the physical volume.',
      'HathiTrust full-text search works on search-only volumes: it tells you on which pages a word occurs, without showing the page. Useful to decide what to order from a library.',
      'Open substitutes: soqotri-lexicon.ru (SLOnline, ~220 finished entries citing Leslau by page), Webonary "Soqotri Dictionary" (SIL 2022), Wiktionary Soqotri, and the public-domain Vienna corpus (Müller 1902–1907) on which Leslau based the Lexique.',
    ],
  },

  // ─────────────────────── Derivatives / supplements (open) ───────────────────────
  {
    id: 'rubin-omani-mehri-2018',
    title: 'Omani Mehri: A New Grammar with Texts (SSLL 93) — incl. Appendix C, Supplement to Johnstone\'s Mehri Lexicon',
    authors: 'A.D. Rubin',
    year: '2018 (Brill, open access)',
    languages: ['Mehri'],
    role: 'derivative',
    access: 'open',
    fetcher: 'dspace',
    ids: {
      oapenHandle: '20.500.12657/76320',
      dspace: { base: 'https://library.oapen.org', handle: '20.500.12657/76320' },
      archiveOrgItems: ['oapen-20.500.12657-76320'],
      isbn: ['9789004362475'],
      doi: '10.1163/9789004362475',
    },
    licence: 'CC BY-NC-ND 4.0 (Brill open access; check the PDF front matter).',
    notes: ['Full PDF from OAPEN; mirror on archive.org. Pages 822–834 add to and correct Johnstone 1987.'],
  },
  {
    id: 'rubin-jibbali-2014',
    title: 'The Jibbali (Shaḥri) Language of Oman: Grammar and Texts (SSLL 72) — incl. Supplement to Johnstone\'s Jibbāli Lexicon',
    authors: 'A.D. Rubin',
    year: '2014 (Brill, open access)',
    languages: ['Jibbali'],
    role: 'derivative',
    access: 'open',
    fetcher: 'dspace',
    ids: {
      dspace: { base: 'https://library.oapen.org', handle: '' },
      isbn: ['9789004262850'],
      doi: '10.1163/9789004262850',
      urls: ['https://www.degruyterbrill.com/document/isbn/9789004262850/html'],
    },
    licence: 'Open access at Brill (licence stated in the PDF).',
    notes: ['OAPEN handle unknown at time of writing: the fetcher searches OAPEN by title; fall back to the Brill page (open access) if not found.'],
  },
  {
    id: 'huehnergard-uvst-2008-additions',
    title: 'Ugaritic Vocabulary in Syllabic Transcription — Additions and Corrections (2008 appendix)',
    authors: 'J. Huehnergard',
    year: '2008',
    languages: ['Ugaritic'],
    role: 'derivative',
    access: 'browse-only',
    fetcher: 'none',
    ids: { urls: ['https://www.academia.edu/234596/'] },
    notes: ['Author-posted PDF on Academia.edu (login wall; manual download). The 1987/2008 book itself is HSS 32 (Eisenbrauns), paid.'],
  },
  {
    id: 'halayqa-supplement-tropper',
    title: 'A Supplementary Ugaritic Word List for J. Tropper\'s Kleines Wörterbuch des Ugaritischen (UF 41)',
    authors: 'I.K.H. Halayqa',
    year: '2009',
    languages: ['Ugaritic'],
    role: 'derivative',
    access: 'open',
    fetcher: 'none',
    ids: { urls: ['https://fada.birzeit.edu/bitstream/20.500.11889/3604/3/Halayqa-%20UF%2041%20Supplementray.pdf'] },
    notes: ['Institutional repository PDF (Birzeit FADA). Download manually or with `fetch-url`.'],
  },

  // ───────────────────────── Alternatives (open databases) ─────────────────────────
  {
    id: 'starling-semitic',
    title: 'StarLing "Semitic etymology" database (Tower of Babel; A. Militarev & L. Kogan) — quotes Ugr., Mhr., Jib., Hrs., Soq. forms with Johnstone/Leslau/DUL references',
    authors: 'A. Militarev, L. Kogan (S. Starostin\'s StarLing)',
    year: 'continuously updated',
    languages: ['Proto-Semitic', 'Ugaritic', 'Mehri', 'Jibbali', 'Harsusi', 'Soqotri', 'Comparative'],
    role: 'alternative',
    access: 'terms-check',
    fetcher: 'starling',
    ids: {
      urls: [
        'https://starlingdb.org/downl.php?lan=en',
        'https://starlingdb.org/cgi-bin/response.cgi?root=config&basename=/data/semham/semet&first=1',
      ],
    },
    licence: 'No explicit licence on the site (© S. Starostin / G. Starostin). Cite as a database; ask before redistributing.',
    notes: [
      'Best single open "back door" to the three works: each Proto-Semitic record lists the reflexes with source page numbers (e.g. JM = Johnstone Mehri, JJ = Jibbāli, JH = Ḥarsūsi, LS = Leslau Soqotri, DUL).',
      'The downloads page offers some databases as StarLing DBF files; if the Semitic one is there, one file beats crawling. Otherwise the fetcher pages through the query CGI slowly.',
      'Companion site: sed-online.ru (Semitic Etymological Dictionary online) — structure not probed; recorded as a URL only.',
    ],
  },
  {
    id: 'slonline-soqotri',
    title: 'Soqotri Lexicon Online (SLOnline; Naumkin, Kogan, Bulakh et al., HSE/RAS)',
    authors: 'V. Naumkin, L. Kogan, M. Bulakh et al.',
    year: '2022–',
    languages: ['Soqotri'],
    role: 'alternative',
    access: 'terms-check',
    fetcher: 'slonline',
    ids: { urls: ['http://soqotri-lexicon.ru/', 'http://soqotri-lexicon.ru/pages/moreabout'] },
    licence: 'Not stated on the pages we could see; academic project (RSF 16-18-10343). Ask the editors before bulk reuse.',
    notes: [
      'About 220 complete entries public (≈1,800 in preparation, collaborators only). Sections: Words, Roots, References; regex search.',
      'Entries cite Leslau 1938 with page numbers, so SLOnline doubles as a partial index into the Lexique.',
    ],
  },
  {
    id: 'webonary-soqotri',
    title: 'Soqotri Dictionary (Webonary, SIL International)',
    authors: 'SIL International (compilers per site copyright page)',
    year: '2022',
    languages: ['Soqotri'],
    role: 'alternative',
    access: 'terms-check',
    fetcher: 'webonary',
    ids: { urls: ['https://www.webonary.org/soqotra/en/', 'https://www.webonary.org/soqotra/en/browse/'] },
    licence: '© 2022 SIL International; check the dictionary\'s Copyright page for the CC licence, and Webonary\'s Terms of Service.',
    notes: [
      'Entry count reported inconsistently (836 vs 3,672) — `status` counts the browse pages.',
      'Webonary is WordPress-based: entries live at /soqotra/en/g<uuid>/ and are listed by letter under /browse/.',
    ],
  },
  {
    id: 'wiktionary-semitic',
    title: 'English Wiktionary lemmas for Ugaritic, Mehri, Soqotri, Harsusi, Shehri (Jibbali)',
    authors: 'Wiktionary contributors',
    year: 'live',
    languages: ['Ugaritic', 'Mehri', 'Soqotri', 'Harsusi', 'Jibbali'],
    role: 'alternative',
    access: 'open',
    fetcher: 'wiktionary',
    ids: {
      wiktionaryCategories: ['Ugaritic lemmas', 'Mehri lemmas', 'Soqotri lemmas', 'Harsusi lemmas', 'Shehri lemmas'],
    },
    licence: 'CC BY-SA 4.0',
    notes: ['Ugaritic ≈ 761 lemmas (entries usually cite DUL); MSA languages only a few dozen each.'],
  },
  {
    id: 'living-dictionaries-mehri',
    title: 'Mehri Living Dictionary (livingdictionaries.app)',
    authors: 'community',
    year: 'live',
    languages: ['Mehri'],
    role: 'alternative',
    access: 'browse-only',
    fetcher: 'none',
    ids: { urls: ['https://livingdictionaries.app/mehri'] },
    notes: ['Only ~18 entries at time of writing; single-page app, not worth crawling. Export is for dictionary managers.'],
  },
  {
    id: 'mcsr-mehri-dictionary',
    title: 'Mehri Language Center for Studies and Research — online dictionary (Al-Mahrah University, Yemen)',
    authors: 'MCSR',
    year: 'live',
    languages: ['Mehri'],
    role: 'alternative',
    access: 'terms-check',
    fetcher: 'none',
    ids: { urls: ['https://mcsr.mhru.edu.ye/en/dictionary/'] },
    notes: ['Structure not probed (host blocked from the sandbox). Manual look first.'],
  },

  // ─────────────────────── Public-domain corpora behind the lexica ───────────────────────
  {
    id: 'vienna-expedition-pd',
    title: 'Südarabische Expedition (Vienna) — Müller, Die Mehri- und Soqoṭri-Sprache I–III (1902–1907); Jahn, Die Mehri-Sprache in Südarabien: Texte und Wörterbuch (1902); Bittner, Studien … (1909–1918)',
    authors: 'D.H. Müller, A. Jahn, M. Bittner',
    year: '1902–1918',
    languages: ['Mehri', 'Soqotri', 'Jibbali'],
    role: 'corpus',
    access: 'open',
    fetcher: 'archive.org',
    ids: {
      archiveOrgItems: ['bub_gb_lhYUAAAAYAAJ', 'bub_gb_pxM7AQAAMAAJ'],
      archiveOrgQueries: [
        'creator:(Müller, David Heinrich) AND (title:(soqotri) OR title:(soqoṭri) OR title:(mehri))',
        'title:(Mehri-Sprache) AND (creator:(Jahn) OR creator:(Bittner))',
        'title:(Soqotri-Sprache) OR title:(Soqoṭri-Sprache) OR title:(Šḫauri)',
      ],
      googleBooksIds: ['lhYUAAAAYAAJ', 'pxM7AQAAMAAJ'],
      dspace: { base: 'https://opendata.uni-halle.de', handle: '1981185920/39161' },
      hathiRecord: ['008887175'],
    },
    licence: 'Public domain (authors d. 1912/1918/1937 → PD worldwide; Halle copy carries Public Domain Mark 1.0).',
    notes: [
      'Leslau 1938 is a lexicon OF these texts; Jahn 1902 includes a Mehri–German Wörterbuch. Together they cover a large part of what the three modern lexica index.',
      'Jahn 1902 is a clean library digitisation at ULB Sachsen-Anhalt (Share_it, DSpace) — fetched via the DSpace REST API.',
    ],
  },
];

export function findSource(id: string): SourceSpec | undefined {
  return SOURCES.find((s) => s.id === id);
}

/**
 * Entry-splitting profiles for PDFs you have bought or scanned yourself.
 * Each profile says how a new dictionary entry starts in the plain-text
 * rendering of the book. They are heuristics: run `pdf-split --sample` first,
 * look at the output, and adjust the regexes to the real text layout.
 */
export interface SplitProfile {
  id: string;
  description: string;
  /** A line that starts a new entry. Group 1 = headword. */
  headword: RegExp;
  /** Optional: a line that starts a new root/section block (Johnstone's lexica are root-ordered). */
  section?: RegExp;
  /** Lines matching these are dropped (running heads, page numbers). */
  noise: RegExp[];
  /** First page index (0-based) where the lexicon proper starts; pages before are skipped. */
  firstPage?: number;
}

const PAGE_NUMBER = /^\s*\d{1,4}\s*$/;

// Transliteration alphabet used by all three works (Latin + diacritics + Semitic special letters).
// Latin letters, Latin-1/Extended-A/B (āēīōū ǧ …), IPA & modifier letters (ə ɛ ɔ ʔ ʕ ʾ ʿ),
// combining marks, and Latin Extended Additional (ḥ ḫ ṣ ṭ ś š ả ủ ỉ …).
const TR = 'A-Za-z\u00C0-\u024F\u0250-\u02FF\u0300-\u036F\u1E00-\u1EFF';

export const PROFILES: Record<string, SplitProfile> = {
  dulat: {
    id: 'dulat',
    description: 'DULAT (del Olmo Lete & Sanmartín 2015). Entries: bold headword in Latin transliteration, then part of speech / gloss. E.g. "adm (I) n. m. "man" …", "ảb (II) n. m. "father"".',
    headword: new RegExp(`^([${TR}\\-]{1,20}(?:\\s*\\([IVX]+\\))?)\\s+(?:\\(?[IVX]+\\)?\\s+)?(?:n\\.|vb\\.|adj\\.|adv\\.|prep\\.|conj\\.|pron\\.|num\\.|PN|TN|DN|GN|interj\\.|part\\.|encl\\.|MN|RN)(?=\\s|$)`),
    noise: [PAGE_NUMBER, /^A DICTIONARY OF THE UGARITIC LANGUAGE/i, /^DULAT/i],
  },
  'johnstone-mehri': {
    id: 'johnstone-mehri',
    description: 'Johnstone, Mehri Lexicon (1987). Root headers in capitals (e.g. "ʔBD", "BKR", "ŚXF"); lemma lines begin with a lower-case transliterated form followed by a gloss or grammatical tag.',
    section: new RegExp(`^([ʔʕA-ZḤḪḎṮṢṬẒŚŠḌĠǦŽḲ\\-]{2,5})\\s*$`),
    headword: new RegExp(`^([${TR}\\-]{2,25})\\s+(?:\\(|v\\.|n\\.|adj\\.|adv\\.|prep\\.|pl\\.|f\\.|m\\.|to\\b|[a-z]{2,})`),
    noise: [PAGE_NUMBER, /^MEHRI LEXICON/i, /^ENGLISH-MEHRI/i],
  },
  'johnstone-jibbali': {
    id: 'johnstone-jibbali',
    description: 'Johnstone, Jibbāli Lexicon (1981) — same layout family as the Mehri Lexicon (root headers, lemma lines).',
    section: new RegExp(`^([ʔʕA-ZḤḪḎṮṢṬẒŚŠḌĠǦŽḲ\\-]{2,5})\\s*$`),
    headword: new RegExp(`^([${TR}\\-]{2,25})\\s+(?:\\(|v\\.|n\\.|adj\\.|adv\\.|prep\\.|pl\\.|f\\.|m\\.|to\\b|[a-z]{2,})`),
    noise: [PAGE_NUMBER, /^JIBB[AĀ]LI LEXICON/i],
  },
  leslau: {
    id: 'leslau',
    description: 'Leslau, Lexique soqoṭri (1938) — for your own OCR of a scan. Headword in transliteration followed by a French gloss, comparisons introduced by language abbreviations (mh., šh., ar., hb.).',
    headword: new RegExp(`^([${TR}\\-]{2,25})\\s*[:—–-]?\\s+(?:«|"|[a-zéèêàâçîôûù]{2,})`),
    noise: [PAGE_NUMBER, /^LEXIQUE SOQO/i],
  },
  generic: {
    id: 'generic',
    description: 'Fallback: any line beginning with a word in the transliteration alphabet and followed by a gloss-like tail.',
    headword: new RegExp(`^([${TR}\\-]{2,30})\\s+\\S`),
    noise: [PAGE_NUMBER],
  },
};

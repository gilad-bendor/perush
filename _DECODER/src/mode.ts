
/**
 * 'א' --> 1
 * 'ב' --> 2
 * ...
 * 'ת' --> 22
 */
export const hebrewLetterToNumeric: Map<string, number> = new Map([...'אבגדהוזחטיכלמנסעפצקרשת'].map((hebrewLetter, index)=>[hebrewLetter, index + 1]));

export enum SpacingMode {
    SPACES_EVEN_WHEN_HYPHEN,
    SPACES_EXCEPT_WHEN_HYPHEN,
    NO_SPACING_NOR_HYPHENS,
}

export enum ShinSinMode {
    SHIN_SIN_ON,
    SHIN_SIN_OFF,  // Both "שׂ" and "שׁ" are converted to "ש"
}

export enum VavMode {
    KEEP_VAV,
    SKIP_VAV, // treat "וּ" and "וֹ" as Nikud
}
export enum YudMode {
    KEEP_YUD,
    SKIP_YUD, // treat "י" (without any Nikud) as Nikud
}

export type Mode = {
    readonly spacingMode: SpacingMode;
    readonly shinSinMode: ShinSinMode
    readonly vavMode: VavMode;
    readonly yudMode: YudMode;
}

/**
 * Return a description of the Mode - so that same modes yield the same description
 */
export function modeToString(mode: Mode): string {
    return `Mode{spacing:${mode.spacingMode},shinSin:${mode.shinSinMode}}`;
}

export function normalizeHebrewChar(hebrewChar: string, mode: Mode): string | undefined {
    switch (hebrewChar) {
        case ' ':
        case '׃':
            return mode.spacingMode !== SpacingMode.NO_SPACING_NOR_HYPHENS ? ' ' : undefined;
        case '־':
            return mode.spacingMode === SpacingMode.SPACES_EVEN_WHEN_HYPHEN ? ' ' : undefined;
        case 'שׁ':
        case 'שׂ':
            return mode.shinSinMode === ShinSinMode.SHIN_SIN_ON ? hebrewChar : 'ש';
        default:
            return toHebrewLetter.get(hebrewChar) ?? undefined;
    }
}

const toHebrewLetter: Map<string, string | null> = new Map(Object.entries({
    // Letters
    'א': 'א',
    'ב': 'ב',
    'ג': 'ג',
    'ד': 'ד',
    'ה': 'ה',
    'ו': 'ו',
    'ז': 'ז',
    'ח': 'ח',
    'ט': 'ט',
    'י': 'י',
    'ך': 'כ',
    'כ': 'כ',
    'ל': 'ל',
    'ם': 'מ',
    'מ': 'מ',
    'ן': 'נ',
    'נ': 'נ',
    'ס': 'ס',
    'ע': 'ע',
    'ף': 'פ',
    'פ': 'פ',
    'ץ': 'צ',
    'צ': 'צ',
    'ק': 'ק',
    'ר': 'ר',
    // 'שׁ': 'ש', - managed manually in normalizeHebrewChar()
    // 'שׂ': 'ש', - managed manually in normalizeHebrewChar()
    'ת': 'ת',

    // Separators - managed manually in normalizeHebrewChar()
    // '־': '',
    // '׃': '',

    // Nikud
    'ְ': null,
    'ֱ': null,
    'ֲ': null,
    'ֳ': null,
    'ִ': null,
    'ֵ': null,
    'ֶ': null,
    'ַ': null,
    'ָ': null,
    'ֹ': null,
    'ֺ': null,
    'ֻ': null,
    'ּ': null,
    'ֿ': null,
    'ׄ': null,
    'ׅ': null,
    '‍': null,
} satisfies Record<string, string | null>));

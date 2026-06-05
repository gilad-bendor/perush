
// noinspection JSUnusedGlobalSymbols

import {enumValues} from "./utils.ts";

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

export enum HeyMode {
    KEEP_HEY,
    SKIP_HEY, // treat "ה" (without any Nikud - at end of word) as Nikud
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
    readonly heyMode: HeyMode;
    readonly vavMode: VavMode;
    readonly yudMode: YudMode;
}

/**
 * Return a description of the Mode - so that same modes yield the same description
 */
export function modeToString(mode: Mode, padEnd = false): string {
    const modeString = [
        'Mode{',
        SpacingMode[mode.spacingMode], ',',
        ShinSinMode[mode.shinSinMode], ',',
        HeyMode[mode.heyMode], ',',
        VavMode[mode.vavMode], ',',
        YudMode[mode.yudMode],
        '}',
    ].join('');
    if (padEnd) {
        if (_maxModeStringLength === undefined) {
            _maxModeStringLength = [...getModeIterator()].reduce((current, mode) => Math.max(current, modeToString(mode).length), 0);
        }
        return modeString.padEnd(_maxModeStringLength);
    } else {
        return modeString;
    }
}
let _maxModeStringLength: number | undefined = undefined;

/** Iterate every combination of Mode */
export function* getModeIterator(): Generator<Mode> {
    for (const spacingMode of _valuesOfSpacingMode) {
        for (const shinSinMode of _valuesOfShinSinMode) {
            for (const heyMode of _valuesOfHeyMode) {
                for (const vavMode of _valuesOfVavMode) {
                    for (const yudMode of _valuesOfYudMode) {
                        yield {
                            spacingMode,
                            shinSinMode,
                            heyMode,
                            vavMode,
                            yudMode,
                        };
                    }
                }
            }
        }
    }
}
const _valuesOfSpacingMode = enumValues(SpacingMode);
const _valuesOfShinSinMode = enumValues(ShinSinMode);
const _valuesOfHeyMode = enumValues(HeyMode);
const _valuesOfVavMode = enumValues(VavMode);
const _valuesOfYudMode = enumValues(YudMode);

/**
 * Given a Hebrew character (a letter, hyphen, end-of-verse-sign, space) and a Mode - return one of:
 * 1. A letter: א to ת (ShinSinMode.SHIN_SIN_ON: return 'שׁ' or 'שׂ'. ShinSinMode.SHIN_SIN_OFF: return 'ש')
 * 2. Space ' ' - that means "a non-letter that still takes up space in the bible letters sequence
 * 3. undefined - this character should not appear in the bible letters sequence
 */
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

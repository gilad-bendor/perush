// noinspection JSUnusedGlobalSymbols

import {enumValues} from "./utils.ts";
import {BibleLetterInfoByMode} from "./bible-text.ts";
import {hebrewLetterToNumeric} from "./mode.ts";

/**
 * Suppose letter1 is ג and letter2 is ח - this is obviously "up".
 * However - we use a warped-scale, so if letter1 is ש and letter2 is ב - this is also "up": ש - ת -(warp)- א - ב
 * We split the range of 22 letters into 1 (same), 7 (up), 7 (down), 7 (far - e.g. none of these).
 *
 * Example A: if letter1 is י then:
 *   - י        -->  '=' (same - 1 letter)
 *   - טחזוהדג  -->  'v' (down - 7 letters)
 *   - כלמנסעפ  -->  '^' (up   - 7 letters)
 *   - צקרשתאב  -->  '~' (far  - 7 letters)
 *
 * Example B: if letter1 is ר then:
 *   - ר        -->  '=' (same - 1 letter)
 *   - קצפעסנמ  -->  'v' (down - 7 letters)
 *   - שתאבגדה  -->  '^' (up   - 7 letters - notice the warp-down from ת to א)
 *   - וזחטיכל  -->  '~' (far  - 7 letters)
 *
 * Example C: if letter1 is ד then:
 *   - ד        -->  '=' (same - 1 letter)
 *   - גבאתשרק  -->  'v' (down - 7 letters - notice the warp-up from א to ת)
 *   - הוזחטיכ  -->  '^' (up   - 7 letters)
 *   - למנסעפצ  -->  '~' (far  - 7 letters)
 */
export enum Trend {
    '^' = +1, // going up   (warped)
    '=' =  0, // same
    'v' = -1, // going down (warped)
    '~' =  8, // too far to be considered either up or down
    'x' =  9, // space/hyphen/end-of-verse: no trend
}
export const trendValues = enumValues(Trend);

/** Total number of letters in the (warped) cyclic scale. */
export const HEBREW_LETTER_COUNT = hebrewLetterToNumeric.size;
/** How many letters above letter1 are in the "up" range (warped - see comment on enum Trend) */
export const TREND_UP_RANGE = 7;
/** How many letters below letter1 are in the "down" range (warped - see comment on enum Trend) */
export const TREND_DOWN_RANGE = 7;


/**
 * Return the Trend formed by two letters.
 *
 * The scale is warped (cyclic): the forward distance from letter1 to letter2 (modulo the alphabet
 * size) decides the trend - 0 is "same", the next {@link TREND_UP_RANGE} letters are "up", the
 * preceding {@link TREND_DOWN_RANGE} letters are "down", and anything else is "far".
 * See the comment on {@link Trend} for worked examples.
 */
export function getTrendOfLetters(letterInfo1: BibleLetterInfoByMode, letterInfo2: BibleLetterInfoByMode): Trend {
    const numeric1 = letterInfo1.numeric;
    const numeric2 = letterInfo2.numeric;
    if (numeric1 === undefined || numeric2 === undefined) {
        return Trend['x'];
    }
    // Forward (cyclic) distance from letter1 to letter2, in [0, HEBREW_LETTER_COUNT).
    const forward = (numeric2 - numeric1 + HEBREW_LETTER_COUNT) % HEBREW_LETTER_COUNT;
    if (forward === 0) return Trend['='];
    if (forward <= TREND_UP_RANGE) return Trend['^'];
    if (forward >= HEBREW_LETTER_COUNT - TREND_DOWN_RANGE) return Trend['v'];
    return Trend['~'];
}

/** Get an iterator over all the possible Trend[] of length "depth" */
export function* getTrendCombinations(depth: number): Generator<Trend[]> {
    if (depth === 0) {
        yield [];
        return;
    }
    for (const trend of trendValues) {
        for (const rest of getTrendCombinations(depth - 1)) {
            yield [trend, ...rest];
        }
    }
}

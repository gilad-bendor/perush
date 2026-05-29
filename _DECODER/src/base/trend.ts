// noinspection JSUnusedGlobalSymbols

import {enumValues} from "./utils.ts";
import {BibleLetterInfoByMode} from "./bible-text.ts";

export enum Trend {
    '🔼' = +1,
    '==' =  0,
    '🔽' = -1,
    '❌' = 9,
}
export const trendValues = enumValues(Trend);

/**
 * Return a description of the Mode - so that same modes yield the same description
 */
export const trendToString: Record<Trend, string> = {
    [Trend['🔼']]: '🔼',
    [Trend['==']]: '==',
    [Trend['🔽']]: '🔽',
    [Trend['❌']]: '❌',
}

/**
 * Return true if the two letters match the trend.
 */
export function lettersMatchTrend(trend: Trend, letterInfo1: BibleLetterInfoByMode, letterInfo2: BibleLetterInfoByMode): boolean {
    const numeric1 = letterInfo1.numeric;
    const numeric2 = letterInfo2.numeric;
    if (numeric1 === undefined || numeric2 === undefined) {
        return trend === Trend['❌'];
    }
    switch (trend) {
        case Trend['🔼']: return numeric1 <  numeric2;
        case Trend['==']: return numeric1 == numeric2;
        case Trend['🔽']: return numeric1 >  numeric2;
        default: throw new Error(`Unexpected Trend: ${trend}`);
    }
}

/**
 * Return the Trend formed by two letters - the reverse of {@link lettersMatchTrend}.
 */
export function getTrendOfLetters(letterInfo1: BibleLetterInfoByMode, letterInfo2: BibleLetterInfoByMode): Trend {
    const numeric1 = letterInfo1.numeric;
    const numeric2 = letterInfo2.numeric;
    if (numeric1 === undefined || numeric2 === undefined) {
        return Trend['❌'];
    }
    if (numeric1 < numeric2) return Trend['🔼'];
    if (numeric1 > numeric2) return Trend['🔽'];
    return Trend['=='];
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

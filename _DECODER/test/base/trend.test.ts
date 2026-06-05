import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
    getPhaseGapOfLetters,
    getTrendCombinations,
    getTrendOfLetters,
    HEBREW_LETTER_COUNT,
    Trend,
    trendValues,
} from '../../src/base/trend.ts';
import type {BibleLetterInfoByMode} from '../../src/base/bible-text.ts';

const ALPHABET = 'אבגדהוזחטיכלמנסעפצקרשת';

/** Build a minimal letter-info stub - getTrendOfLetters only reads `.numeric`. */
function li(numeric: number | undefined): BibleLetterInfoByMode {
    return {numeric} as unknown as BibleLetterInfoByMode;
}

/** numeric (1-based) of a single Hebrew letter, matching hebrewLetterToNumeric. */
function num(letter: string): number {
    return ALPHABET.indexOf(letter) + 1;
}

/** Assert that, starting from `from`, each group of letters yields the given trend. */
function assertExample(from: string, groups: Record<string, Trend>): void {
    for (const [letters, expected] of Object.entries(groups)) {
        for (const to of letters) {
            const actual = getTrendOfLetters(li(num(from)), li(num(to)));
            assert.equal(
                actual,
                expected,
                `${from} -> ${to}: expected ${Trend[expected]}, got ${Trend[actual]}`,
            );
        }
    }
}

test('alphabet size is 22', () => {
    assert.equal(HEBREW_LETTER_COUNT, 22);
    assert.equal(ALPHABET.length, 22);
});

test('Example A: letter1 = י (no warp)', () => {
    assertExample('י', {
        'י': Trend['='],
        'טחזוהדג': Trend['v'],
        'כלמנסעפ': Trend['^'],
        'צקרשתאב': Trend['~'],
    });
});

test('Example B: letter1 = ר (warp up ת->א)', () => {
    assertExample('ר', {
        'ר': Trend['='],
        'קצפעסנמ': Trend['v'],
        'שתאבגדה': Trend['^'],
        'וזחטיכל': Trend['~'],
    });
});

test('Example C: letter1 = ד (warp down א->ת)', () => {
    assertExample('ד', {
        'ד': Trend['='],
        'גבאתשרק': Trend['v'],
        'הוזחטיכ': Trend['^'],
        'למנסעפצ': Trend['~'],
    });
});

test('every letter partitions the alphabet into 1/7/7/7', () => {
    for (let n1 = 1; n1 <= HEBREW_LETTER_COUNT; n1++) {
        const counts: Record<number, number> = {
            [Trend['=']]: 0,
            [Trend['^']]: 0,
            [Trend['v']]: 0,
            [Trend['~']]: 0,
        };
        for (let n2 = 1; n2 <= HEBREW_LETTER_COUNT; n2++) {
            counts[getTrendOfLetters(li(n1), li(n2))]++;
        }
        assert.deepEqual(counts, {
            [Trend['=']]: 1,
            [Trend['^']]: 7,
            [Trend['v']]: 7,
            [Trend['~']]: 7,
        }, `partition for numeric ${n1}`);
    }
});

test('undefined numeric yields the "x" trend', () => {
    assert.equal(getTrendOfLetters(li(undefined), li(5)), Trend['x']);
    assert.equal(getTrendOfLetters(li(5), li(undefined)), Trend['x']);
    assert.equal(getTrendOfLetters(li(undefined), li(undefined)), Trend['x']);
});

test('getTrendCombinations yields trendValues.length ** depth combinations', () => {
    const depth0 = [...getTrendCombinations(0)];
    assert.deepEqual(depth0, [[]]);

    const depth1 = [...getTrendCombinations(1)];
    assert.equal(depth1.length, trendValues.length);

    const depth2 = [...getTrendCombinations(2)];
    assert.equal(depth2.length, trendValues.length ** 2);
    for (const combo of depth2) {
        assert.equal(combo.length, 2);
    }
});

test('getPhaseGapOfLetters: documented examples', () => {
    assert.equal(getPhaseGapOfLetters(li(num('ה')), li(num('ח'))), 3 / HEBREW_LETTER_COUNT);
    assert.equal(getPhaseGapOfLetters(li(num('ב')), li(num('ש'))), -3 / HEBREW_LETTER_COUNT);
    assert.equal(getPhaseGapOfLetters(li(num('א')), li(num('ל'))), 11 / HEBREW_LETTER_COUNT);
});

test('getPhaseGapOfLetters: a letter with itself is 0', () => {
    for (let n = 1; n <= HEBREW_LETTER_COUNT; n++) {
        assert.equal(getPhaseGapOfLetters(li(n), li(n)), 0);
    }
});

test('getPhaseGapOfLetters: every gap is a multiple of 1/22 within [-10/22, +11/22]', () => {
    for (let n1 = 1; n1 <= HEBREW_LETTER_COUNT; n1++) {
        for (let n2 = 1; n2 <= HEBREW_LETTER_COUNT; n2++) {
            const gap = getPhaseGapOfLetters(li(n1), li(n2))!;
            const steps = gap * HEBREW_LETTER_COUNT;
            assert.ok(Math.abs(steps - Math.round(steps)) < 1e-9, `${n1}->${n2}: gap ${gap} is not a multiple of 1/22`);
            const rounded = Math.round(steps);
            assert.ok(rounded >= -10 && rounded <= 11, `${n1}->${n2}: ${rounded}/22 is outside [-10/22, +11/22]`);
        }
    }
});

test('getPhaseGapOfLetters: antisymmetric, except antipodes which are always +11/22', () => {
    for (let n1 = 1; n1 <= HEBREW_LETTER_COUNT; n1++) {
        for (let n2 = 1; n2 <= HEBREW_LETTER_COUNT; n2++) {
            const forward = (n2 - n1 + HEBREW_LETTER_COUNT) % HEBREW_LETTER_COUNT;
            const ab = getPhaseGapOfLetters(li(n1), li(n2))!;
            const ba = getPhaseGapOfLetters(li(n2), li(n1))!;
            if (forward === HEBREW_LETTER_COUNT / 2) {
                // Opposite letters: +0.5 is included but -0.5 is not, so both directions yield +11/22.
                assert.equal(ab, 11 / HEBREW_LETTER_COUNT);
                assert.equal(ba, 11 / HEBREW_LETTER_COUNT);
            } else {
                // `===` (not assert.equal) so that +0 and -0 compare equal at the n1===n2 case.
                assert.ok(ab === -ba, `${n1}->${n2} (${ab}) is not the negation of ${n2}->${n1} (${ba})`);
            }
        }
    }
});

test('getPhaseGapOfLetters: sign agrees with the up/down trend', () => {
    for (let n1 = 1; n1 <= HEBREW_LETTER_COUNT; n1++) {
        for (let n2 = 1; n2 <= HEBREW_LETTER_COUNT; n2++) {
            const trend = getTrendOfLetters(li(n1), li(n2));
            const gap = getPhaseGapOfLetters(li(n1), li(n2))!;
            if (trend === Trend['=']) assert.equal(gap, 0, `${n1}->${n2}: same letter should have gap 0`);
            if (trend === Trend['^']) assert.ok(gap > 0, `${n1}->${n2}: 'up' should have positive gap, got ${gap}`);
            if (trend === Trend['v']) assert.ok(gap < 0, `${n1}->${n2}: 'down' should have negative gap, got ${gap}`);
        }
    }
});

test('getPhaseGapOfLetters: undefined numeric yields undefined', () => {
    assert.equal(getPhaseGapOfLetters(li(undefined), li(5)), undefined);
    assert.equal(getPhaseGapOfLetters(li(5), li(undefined)), undefined);
    assert.equal(getPhaseGapOfLetters(li(undefined), li(undefined)), undefined);
});

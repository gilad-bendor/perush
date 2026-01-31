#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_morphology.js
 *
 * Run with: ./bible_morphology.test.js
 */

import {
    parseArgs,
    parseRange,
    isAramaicVerse,
    detectPrefix,
    detectSuffix,
    detectForm,
    detectBinyan,
    findOccurrences,
    analyzeMorphology,
    getConsonants,
} from '../bible_morphology.js';

// ============================================================================
// Test Utilities
// ============================================================================

let testCount = 0;
let passCount = 0;
let failCount = 0;

function test(name, fn) {
    testCount++;
    try {
        fn();
        passCount++;
        console.log(`  ✓ ${name}`);
    } catch (error) {
        failCount++;
        console.log(`  ✗ ${name}`);
        console.log(`    Error: ${error.message}`);
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`${message}\n    Expected: ${JSON.stringify(expected)}\n    Actual: ${JSON.stringify(actual)}`);
    }
}

function assertTrue(value, message = '') {
    if (!value) {
        throw new Error(message || 'Expected true but got false');
    }
}

function assertThrows(fn, expectedMessage) {
    try {
        fn();
        throw new Error(`Expected function to throw, but it didn't`);
    } catch (error) {
        if (expectedMessage && !error.message.includes(expectedMessage)) {
            throw new Error(`Expected error message to contain "${expectedMessage}", got: "${error.message}"`);
        }
    }
}

// ============================================================================
// Tests
// ============================================================================

console.log('\n=== bible_morphology.js Tests ===\n');

// ------------------------------------------
console.log('parseArgs:');
// ------------------------------------------

test('parses Strong\'s number argument', () => {
    const opts = parseArgs(['8104']);
    assertEqual(opts.query, '8104');
    assertEqual(opts.groupBy, 'form');
    assertEqual(opts.format, 'text');
});

test('parses root argument', () => {
    const opts = parseArgs(['<שמר>']);
    assertEqual(opts.query, '<שמר>');
});

test('parses --group-by=prefix option', () => {
    const opts = parseArgs(['8104', '--group-by=prefix']);
    assertEqual(opts.groupBy, 'prefix');
});

test('parses --group-by=suffix option', () => {
    const opts = parseArgs(['8104', '--group-by=suffix']);
    assertEqual(opts.groupBy, 'suffix');
});

test('parses --group-by=binyan option', () => {
    const opts = parseArgs(['8104', '--group-by=binyan']);
    assertEqual(opts.groupBy, 'binyan');
});

test('parses --show-examples option', () => {
    const opts = parseArgs(['8104', '--show-examples=5']);
    assertEqual(opts.showExamples, 5);
});

test('parses --range option', () => {
    const opts = parseArgs(['8104', '--range=בראשית']);
    assertEqual(opts.range, 'בראשית');
});

test('parses --include-aramaic option', () => {
    const opts = parseArgs(['8104', '--include-aramaic']);
    assertTrue(opts.includeAramaic);
});

test('parses --no-points option', () => {
    const opts = parseArgs(['8104', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --format=json option', () => {
    const opts = parseArgs(['8104', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['8104', '--format=invalid']), 'Invalid format');
});

test('throws on invalid group-by', () => {
    assertThrows(() => parseArgs(['8104', '--group-by=invalid']), 'Invalid group-by');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['8104', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\nparseRange:');
// ------------------------------------------

test('returns null for empty range', () => {
    assertEqual(parseRange(null), null);
});

test('parses section name', () => {
    const result = parseRange('תורה');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 5);
});

test('parses single book', () => {
    const result = parseRange('בראשית');
    assertTrue(result.books.has('בראשית'));
    assertEqual(result.books.size, 1);
});

test('throws on unknown range', () => {
    assertThrows(() => parseRange('unknown'), 'Unknown range');
});

// ------------------------------------------
console.log('\nisAramaicVerse:');
// ------------------------------------------

test('identifies Genesis 31:47 as Aramaic', () => {
    assertTrue(isAramaicVerse('בראשית', 30, 46));
});

test('identifies non-Aramaic verse', () => {
    assertTrue(!isAramaicVerse('בראשית', 0, 0));
});

// ------------------------------------------
console.log('\ngetConsonants:');
// ------------------------------------------

test('removes nikud and shin/sin dots from word', () => {
    const result = getConsonants('שָׁמַר');
    // Shin dot (ׁ) is also removed to get pure consonants
    assertEqual(result, 'שמר');
});

test('removes teamim from word', () => {
    const result = getConsonants('וַיִּשְׁמֹ֛ר');
    assertTrue(!result.includes('֛'));
});

// ------------------------------------------
console.log('\ndetectPrefix:');
// ------------------------------------------

test('detects vav prefix', () => {
    const result = detectPrefix('וְשָׁמְרוּ');
    assertEqual(result.prefix, 'ו');
});

test('detects lamed prefix (infinitive)', () => {
    const result = detectPrefix('לִשְׁמֹר');
    assertEqual(result.prefix, 'ל');
    assertTrue(result.isInfinitive);
});

test('detects imperfect prefix (yod)', () => {
    const result = detectPrefix('יִשְׁמֹר');
    assertEqual(result.prefix, 'י');
    assertTrue(result.isImperfect);
});

test('detects imperfect prefix (tav)', () => {
    const result = detectPrefix('תִשְׁמֹר');
    assertEqual(result.prefix, 'ת');
    assertTrue(result.isImperfect);
});

test('detects vav + imperfect', () => {
    const result = detectPrefix('וַיִּשְׁמֹר');
    assertEqual(result.prefix, 'ו+י');
    assertTrue(result.isImperfect);
});

test('detects vav + lamed', () => {
    const result = detectPrefix('וּלְשָׁמְרָהּ');
    assertEqual(result.prefix, 'ו+ל');
    assertTrue(result.isInfinitive);
});

test('detects he prefix', () => {
    const result = detectPrefix('הַשֹּׁמֵר');
    assertEqual(result.prefix, 'ה');
});

test('detects mem prefix', () => {
    const result = detectPrefix('מִשְׁמָר');
    assertEqual(result.prefix, 'מ');
});

test('returns no prefix for basic form', () => {
    const result = detectPrefix('שָׁמַר');
    assertEqual(result.prefix, 'none');
});

// ------------------------------------------
console.log('\ndetectSuffix:');
// ------------------------------------------

test('detects masculine plural', () => {
    const result = detectSuffix('שֹׁמְרִים');
    assertEqual(result.suffix, 'ים');
    assertTrue(result.isPlural);
});

test('detects feminine plural', () => {
    const result = detectSuffix('מִשְׁמָרוֹת');
    assertEqual(result.suffix, 'ות');
    assertTrue(result.isPlural);
});

test('detects 3ms possessive (his)', () => {
    const result = detectSuffix('בְּרִיתוֹ');
    assertEqual(result.suffix, 'וֹ');
    assertTrue(result.isPossessive);
});

test('detects 3fs possessive (her)', () => {
    const result = detectSuffix('וּלְשָׁמְרָהּ');
    assertEqual(result.suffix, 'הּ');
    assertTrue(result.isPossessive);
});

test('detects 3p perfect (they)', () => {
    const result = detectSuffix('שָׁמְרוּ');
    assertEqual(result.suffix, 'וּ');
    assertTrue(result.isVerbal);
});

test('returns no suffix for basic form', () => {
    const result = detectSuffix('שָׁמַר');
    assertEqual(result.suffix, 'none');
});

// ------------------------------------------
console.log('\ndetectForm:');
// ------------------------------------------

test('detects infinitive form', () => {
    const result = detectForm('לִשְׁמֹר', { typeEnglish: 'Verb' });
    assertEqual(result.form, 'infinitive');
});

test('detects imperfect form', () => {
    const result = detectForm('יִשְׁמֹר', { typeEnglish: 'Verb' });
    assertEqual(result.form, 'imperfect');
});

test('detects plural form', () => {
    const result = detectForm('שֹׁמְרִים', { typeEnglish: 'Noun' });
    assertEqual(result.form, 'plural');
});

test('detects possessive form', () => {
    const result = detectForm('בְּרִיתוֹ', { typeEnglish: 'Noun' });
    assertEqual(result.form, 'possessive');
});

// ------------------------------------------
console.log('\ndetectBinyan:');
// ------------------------------------------

test('detects Qal by default', () => {
    const result = detectBinyan({ word: 'שָׁמַר' });
    assertEqual(result, 'qal');
});

test('detects Niphal from nun prefix', () => {
    const result = detectBinyan({ word: 'נִשְׁמַר' });
    assertEqual(result, 'niphal');
});

test('detects Hitpael from het-tav prefix', () => {
    const result = detectBinyan({ word: 'הִשְׁתַּמֵּר' });
    assertEqual(result, 'hitpael');
});

// ------------------------------------------
console.log('\nfindOccurrences (integration):');
// ------------------------------------------

test('finds occurrences of Strong\'s number', () => {
    const result = findOccurrences(8104, { includeAramaic: false });
    assertTrue(result.length > 0, 'Expected at least one occurrence');
    assertTrue(result[0].word !== undefined, 'Expected word property');
    assertTrue(result[0].location !== undefined, 'Expected location property');
});

test('respects range filter', () => {
    const fullResult = findOccurrences(8104, { includeAramaic: false });
    const rangeResult = findOccurrences(8104, { includeAramaic: false, range: 'בראשית' });
    assertTrue(rangeResult.length < fullResult.length, 'Range filter should reduce results');
    for (const occ of rangeResult) {
        assertEqual(occ.book, 'בראשית');
    }
});

// ------------------------------------------
console.log('\nanalyzeMorphology (integration):');
// ------------------------------------------

test('analyzes by Strong\'s number', () => {
    const result = analyzeMorphology('8104', { groupBy: 'form', showExamples: 2, includeAramaic: false });
    assertEqual(result.query, '8104');
    assertTrue(result.totalOccurrences > 0);
    assertTrue(result.groups.length > 0);
    assertTrue(result.baseWord !== undefined);
    assertTrue(result.wordType !== undefined);
});

test('groups by form', () => {
    const result = analyzeMorphology('8104', { groupBy: 'form', showExamples: 2, includeAramaic: false });
    assertEqual(result.groupBy, 'form');
    // Should have common form categories
    const formKeys = result.groups.map(g => g.key);
    assertTrue(formKeys.length > 0);
});

test('groups by prefix', () => {
    const result = analyzeMorphology('8104', { groupBy: 'prefix', showExamples: 2, includeAramaic: false });
    assertEqual(result.groupBy, 'prefix');
    // Should have prefix categories
    const prefixKeys = result.groups.map(g => g.key);
    assertTrue(prefixKeys.length > 0);
});

test('groups by suffix', () => {
    const result = analyzeMorphology('8104', { groupBy: 'suffix', showExamples: 2, includeAramaic: false });
    assertEqual(result.groupBy, 'suffix');
});

test('groups by binyan', () => {
    const result = analyzeMorphology('8104', { groupBy: 'binyan', showExamples: 2, includeAramaic: false });
    assertEqual(result.groupBy, 'binyan');
    // Verbs should show binyan categories
    const binyanKeys = result.groups.map(g => g.key);
    assertTrue(binyanKeys.includes('qal'), 'Expected qal binyan');
});

test('includes examples in groups', () => {
    const result = analyzeMorphology('8104', { groupBy: 'form', showExamples: 3, includeAramaic: false });
    for (const group of result.groups) {
        assertTrue(group.examples.length <= 3, 'Should respect showExamples limit');
        if (group.count > 0) {
            assertTrue(group.examples.length > 0, 'Groups with count > 0 should have examples');
        }
    }
});

test('calculates percentages', () => {
    const result = analyzeMorphology('8104', { groupBy: 'form', showExamples: 2, includeAramaic: false });
    let totalPercent = 0;
    for (const group of result.groups) {
        assertTrue(group.percentage !== undefined, 'Should have percentage');
        totalPercent += parseFloat(group.percentage);
    }
    // Total should be approximately 100 (allowing for rounding)
    assertTrue(totalPercent > 99 && totalPercent < 101, `Total percentage should be ~100, got ${totalPercent}`);
});

test('sorts groups by count descending', () => {
    const result = analyzeMorphology('8104', { groupBy: 'form', showExamples: 2, includeAramaic: false });
    for (let i = 1; i < result.groups.length; i++) {
        assertTrue(result.groups[i - 1].count >= result.groups[i].count,
            'Groups should be sorted by count descending');
    }
});

test('throws on invalid query', () => {
    assertThrows(() => analyzeMorphology('invalid', { groupBy: 'form', showExamples: 2, includeAramaic: false }), 'Invalid query');
});

test('throws on unknown Strong\'s number', () => {
    assertThrows(() => analyzeMorphology('999999', { groupBy: 'form', showExamples: 2, includeAramaic: false }), 'not found');
});

// ============================================================================
// Summary
// ============================================================================

console.log('\n=== Test Summary ===');
console.log(`Total: ${testCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);

if (failCount > 0) {
    process.exit(1);
}

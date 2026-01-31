#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_get_verses.js
 *
 * Run with: node bible_get_verses.test.js
 */

import {
    hebrewToNumber,
    parseNumber,
    parseBookName,
    parseLocation,
    parseReference,
    parseArgs,
    getVerses,
    findVerseIndex,
    getLastVerseOfChapter,
} from '../bible_get_verses.js';

import * as bible from '../bible-utils.js';

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

console.log('\n=== bible_get_verses.js Tests ===\n');

// ------------------------------------------
console.log('hebrewToNumber:');
// ------------------------------------------

test('converts single Hebrew letters', () => {
    assertEqual(hebrewToNumber('א'), 1);
    assertEqual(hebrewToNumber('ב'), 2);
    assertEqual(hebrewToNumber('י'), 10);
    assertEqual(hebrewToNumber('כ'), 20);
    assertEqual(hebrewToNumber('ק'), 100);
});

test('converts compound Hebrew numbers', () => {
    assertEqual(hebrewToNumber('יא'), 11);
    assertEqual(hebrewToNumber('טו'), 15);
    assertEqual(hebrewToNumber('טז'), 16);
    assertEqual(hebrewToNumber('כג'), 23);
    assertEqual(hebrewToNumber('נ'), 50);
    assertEqual(hebrewToNumber('קנ'), 150);
});

test('handles final letters', () => {
    assertEqual(hebrewToNumber('ך'), 20);
    assertEqual(hebrewToNumber('ם'), 40);
    assertEqual(hebrewToNumber('ן'), 50);
    assertEqual(hebrewToNumber('ף'), 80);
    assertEqual(hebrewToNumber('ץ'), 90);
});

test('strips non-Hebrew characters', () => {
    assertEqual(hebrewToNumber('א\''), 1);
    assertEqual(hebrewToNumber('"יא'), 11);
});

test('throws on empty string', () => {
    assertThrows(() => hebrewToNumber(''), 'Empty Hebrew number');
    assertThrows(() => hebrewToNumber('   '), 'Empty Hebrew number');
});

// ------------------------------------------
console.log('\nparseNumber:');
// ------------------------------------------

test('parses Arabic numbers', () => {
    assertEqual(parseNumber('1'), 1);
    assertEqual(parseNumber('23'), 23);
    assertEqual(parseNumber('150'), 150);
});

test('parses Hebrew numbers', () => {
    assertEqual(parseNumber('א'), 1);
    assertEqual(parseNumber('יא'), 11);
    assertEqual(parseNumber('נ'), 50);
});

test('handles whitespace', () => {
    assertEqual(parseNumber(' 5 '), 5);
    assertEqual(parseNumber(' ה '), 5);
});

// ------------------------------------------
console.log('\nparseBookName:');
// ------------------------------------------

test('accepts valid book names', () => {
    assertEqual(parseBookName('בראשית'), 'בראשית');
    assertEqual(parseBookName('שמות'), 'שמות');
    assertEqual(parseBookName('שמואל-א'), 'שמואל-א');
});

test('throws on unknown book', () => {
    assertThrows(() => parseBookName('unknown'), 'Unknown book name');
    assertThrows(() => parseBookName('xyz'), 'Unknown book name');
});

// ------------------------------------------
console.log('\nparseLocation:');
// ------------------------------------------

test('parses verse with Arabic numbers', () => {
    const loc = parseLocation('בראשית 1:1');
    assertEqual(loc.book, 'בראשית');
    assertEqual(loc.chapter, 0); // 0-indexed
    assertEqual(loc.verse, 0);   // 0-indexed
});

test('parses verse with Hebrew numbers', () => {
    const loc = parseLocation('בראשית א:א');
    assertEqual(loc.book, 'בראשית');
    assertEqual(loc.chapter, 0);
    assertEqual(loc.verse, 0);
});

test('parses larger chapter/verse numbers', () => {
    const loc = parseLocation('בראשית 50:26');
    assertEqual(loc.book, 'בראשית');
    assertEqual(loc.chapter, 49);
    assertEqual(loc.verse, 25);
});

test('parses whole chapter (no verse)', () => {
    const loc = parseLocation('בראשית 1');
    assertEqual(loc.book, 'בראשית');
    assertEqual(loc.chapter, 0);
    assertEqual(loc.verse, -1); // -1 indicates whole chapter
});

test('parses book with hyphen', () => {
    const loc = parseLocation('שמואל-א 1:1');
    assertEqual(loc.book, 'שמואל-א');
    assertEqual(loc.chapter, 0);
    assertEqual(loc.verse, 0);
});

test('throws on invalid format', () => {
    assertThrows(() => parseLocation('invalid'), 'Invalid reference format');
    assertThrows(() => parseLocation('בראשית'), 'Invalid reference format');
});

// ------------------------------------------
console.log('\nparseReference:');
// ------------------------------------------

test('parses single verse', () => {
    const ref = parseReference('בראשית 1:1');
    assertEqual(ref.start.book, 'בראשית');
    assertEqual(ref.start.chapter, 0);
    assertEqual(ref.start.verse, 0);
    assertEqual(ref.end.book, 'בראשית');
    assertEqual(ref.end.chapter, 0);
    assertEqual(ref.end.verse, 0);
    assertEqual(ref.isWholeChapter, false);
});

test('parses same-chapter range', () => {
    const ref = parseReference('בראשית 1:1-5');
    assertEqual(ref.start.chapter, 0);
    assertEqual(ref.start.verse, 0);
    assertEqual(ref.end.chapter, 0);
    assertEqual(ref.end.verse, 4);
    assertEqual(ref.isWholeChapter, false);
});

test('parses cross-chapter range', () => {
    const ref = parseReference('בראשית 1:26-2:3');
    assertEqual(ref.start.chapter, 0);
    assertEqual(ref.start.verse, 25);
    assertEqual(ref.end.chapter, 1);
    assertEqual(ref.end.verse, 2);
    assertEqual(ref.isWholeChapter, false);
});

test('parses whole chapter', () => {
    const ref = parseReference('בראשית 1');
    assertEqual(ref.start.chapter, 0);
    assertEqual(ref.start.verse, 0);
    assertEqual(ref.end.chapter, 0);
    assertEqual(ref.end.verse, -1); // -1 means end of chapter
    assertEqual(ref.isWholeChapter, true);
});

test('parses with Hebrew numbers', () => {
    const ref = parseReference('בראשית א:א-ה');
    assertEqual(ref.start.verse, 0);
    assertEqual(ref.end.verse, 4);
});

test('parses cross-chapter with Hebrew numbers', () => {
    const ref = parseReference('בראשית א:כו-ב:ג');
    assertEqual(ref.start.chapter, 0);
    assertEqual(ref.start.verse, 25);
    assertEqual(ref.end.chapter, 1);
    assertEqual(ref.end.verse, 2);
});

// ------------------------------------------
console.log('\nparseArgs:');
// ------------------------------------------

test('parses reference argument', () => {
    const opts = parseArgs(['בראשית 1:1']);
    assertEqual(opts.reference, 'בראשית 1:1');
    assertEqual(opts.context, 0);
    assertEqual(opts.format, 'text');
});

test('parses --context option', () => {
    const opts = parseArgs(['בראשית 1:1', '--context=3']);
    assertEqual(opts.context, 3);
});

test('parses -c option', () => {
    const opts = parseArgs(['בראשית 1:1', '-c', '5']);
    assertEqual(opts.context, 5);
});

test('parses --no-points option', () => {
    const opts = parseArgs(['בראשית 1:1', '--no-points']);
    assertTrue(opts.noPoints);
});

test('parses --include-strongs option', () => {
    const opts = parseArgs(['בראשית 1:1', '--include-strongs']);
    assertTrue(opts.includeStrongs);
});

test('parses --format option', () => {
    const opts = parseArgs(['בראשית 1:1', '--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['בראשית 1:1', '--format=invalid']), 'Invalid format');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['בראשית 1:1', '--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\ngetVerses (integration):');
// ------------------------------------------

test('retrieves single verse', () => {
    const ref = parseReference('בראשית 1:1');
    const result = getVerses(ref, 0);
    assertEqual(result.verses.length, 1);
    assertEqual(result.verses[0].book, 'בראשית');
    assertEqual(result.verses[0].chapterIndex, 0);
    assertEqual(result.verses[0].verseIndex, 0);
});

test('retrieves verse range', () => {
    const ref = parseReference('בראשית 1:1-5');
    const result = getVerses(ref, 0);
    assertEqual(result.verses.length, 5);
    assertEqual(result.verses[0].verseIndex, 0);
    assertEqual(result.verses[4].verseIndex, 4);
});

test('retrieves whole chapter', () => {
    const ref = parseReference('בראשית 1');
    const result = getVerses(ref, 0);
    assertEqual(result.verses.length, 31); // Genesis 1 has 31 verses
    assertEqual(result.verses[0].verseIndex, 0);
    assertEqual(result.verses[30].verseIndex, 30);
});

test('retrieves cross-chapter range', () => {
    const ref = parseReference('בראשית 1:31-2:3');
    const result = getVerses(ref, 0);
    assertEqual(result.verses.length, 4); // 1:31, 2:1, 2:2, 2:3
    assertEqual(result.verses[0].chapterIndex, 0);
    assertEqual(result.verses[0].verseIndex, 30);
    assertEqual(result.verses[3].chapterIndex, 1);
    assertEqual(result.verses[3].verseIndex, 2);
});

test('adds context before and after', () => {
    const ref = parseReference('בראשית 1:3');
    const result = getVerses(ref, 2);
    assertEqual(result.verses.length, 5); // 1:1, 1:2, 1:3, 1:4, 1:5
    assertEqual(result.contextBefore, 2);
    assertEqual(result.contextAfter, 2);
    assertEqual(result.mainStartIdx, 2);
    assertEqual(result.mainEndIdx, 2);
});

test('context respects beginning of Bible', () => {
    const ref = parseReference('בראשית 1:1');
    const result = getVerses(ref, 5);
    assertEqual(result.contextBefore, 0); // Can't go before first verse
    assertEqual(result.verses[0].verseIndex, 0);
});

test('throws on invalid verse', () => {
    const ref = parseReference('בראשית 1:100');
    assertThrows(() => getVerses(ref, 0), 'Verse not found');
});

// ------------------------------------------
console.log('\nfindVerseIndex:');
// ------------------------------------------

test('finds verse index', () => {
    const allVerses = bible.getAllVerses();
    const idx = findVerseIndex(allVerses, 'בראשית', 0, 0);
    assertTrue(idx >= 0);
    assertEqual(allVerses[idx].book, 'בראשית');
    assertEqual(allVerses[idx].chapterIndex, 0);
    assertEqual(allVerses[idx].verseIndex, 0);
});

test('returns -1 for non-existent verse', () => {
    const allVerses = bible.getAllVerses();
    const idx = findVerseIndex(allVerses, 'בראשית', 0, 999);
    assertEqual(idx, -1);
});

// ------------------------------------------
console.log('\ngetLastVerseOfChapter:');
// ------------------------------------------

test('finds last verse of chapter', () => {
    const allVerses = bible.getAllVerses();
    const last = getLastVerseOfChapter(allVerses, 'בראשית', 0); // Genesis 1
    assertEqual(last, 30); // 0-indexed, so 30 = verse 31
});

test('returns -1 for non-existent chapter', () => {
    const allVerses = bible.getAllVerses();
    const last = getLastVerseOfChapter(allVerses, 'בראשית', 999);
    assertEqual(last, -1);
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

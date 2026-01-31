#!/usr/bin/env node
'use strict';

/**
 * Tests for bible_get_structure.js
 *
 * Run with: node bible_get_structure.test.js
 */

import {
    getStructure,
    parseArgs,
    parseHebrewNumber,
    SECTIONS,
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    KETUVIM,
    ARAMAIC_SECTIONS,
} from '../bible_get_structure.js';

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

console.log('\n=== bible_get_structure.js Tests ===\n');

// ------------------------------------------
console.log('Constants:');
// ------------------------------------------

test('TORAH contains 5 books', () => {
    assertEqual(TORAH.length, 5);
    assertEqual(TORAH[0], 'בראשית');
    assertEqual(TORAH[4], 'דברים');
});

test('NEVIIM_RISHONIM contains former prophets', () => {
    assertEqual(NEVIIM_RISHONIM.length, 6);
    assertTrue(NEVIIM_RISHONIM.includes('יהושע'));
    assertTrue(NEVIIM_RISHONIM.includes('מלכים-ב'));
});

test('NEVIIM_ACHARONIM contains latter prophets', () => {
    assertTrue(NEVIIM_ACHARONIM.includes('ישעיהו'));
    assertTrue(NEVIIM_ACHARONIM.includes('מלאכי'));
});

test('KETUVIM contains writings', () => {
    assertTrue(KETUVIM.includes('תהילים'));
    assertTrue(KETUVIM.includes('דניאל'));
    assertTrue(KETUVIM.includes('עזרא'));
});

test('SECTIONS has 4 sections', () => {
    assertEqual(SECTIONS.length, 4);
    assertEqual(SECTIONS[0].name, 'תורה');
    assertEqual(SECTIONS[1].name, 'נביאים ראשונים');
    assertEqual(SECTIONS[2].name, 'נביאים אחרונים');
    assertEqual(SECTIONS[3].name, 'כתובים');
});

test('ARAMAIC_SECTIONS defined correctly', () => {
    assertTrue('דניאל' in ARAMAIC_SECTIONS);
    assertTrue('עזרא' in ARAMAIC_SECTIONS);
    assertTrue('ירמיהו' in ARAMAIC_SECTIONS);
    assertTrue('בראשית' in ARAMAIC_SECTIONS);

    assertEqual(ARAMAIC_SECTIONS['דניאל'][0].start, '2:4');
    assertEqual(ARAMAIC_SECTIONS['ירמיהו'][0].start, '10:11');
});

// ------------------------------------------
console.log('\nparseHebrewNumber:');
// ------------------------------------------

test('parses single letters', () => {
    assertEqual(parseHebrewNumber('א'), 1);
    assertEqual(parseHebrewNumber('י'), 10);
    assertEqual(parseHebrewNumber('ק'), 100);
});

test('parses compound numbers', () => {
    assertEqual(parseHebrewNumber('יא'), 11);
    assertEqual(parseHebrewNumber('נ'), 50);
    assertEqual(parseHebrewNumber('קנ'), 150);
});

// ------------------------------------------
console.log('\nparseArgs:');
// ------------------------------------------

test('parses empty args (overview mode)', () => {
    const opts = parseArgs([]);
    assertEqual(opts.book, null);
    assertEqual(opts.chapter, null);
    assertEqual(opts.format, 'text');
});

test('parses book argument', () => {
    const opts = parseArgs(['בראשית']);
    assertEqual(opts.book, 'בראשית');
    assertEqual(opts.chapter, null);
});

test('parses book and chapter (Arabic)', () => {
    const opts = parseArgs(['בראשית', '5']);
    assertEqual(opts.book, 'בראשית');
    assertEqual(opts.chapter, 5);
});

test('parses book and chapter (Hebrew)', () => {
    const opts = parseArgs(['בראשית', 'ה']);
    assertEqual(opts.book, 'בראשית');
    assertEqual(opts.chapter, 5);
});

test('parses --format option', () => {
    const opts = parseArgs(['--format=json']);
    assertEqual(opts.format, 'json');
});

test('parses --include-aramaic option', () => {
    const opts = parseArgs(['--include-aramaic']);
    assertTrue(opts.includeAramaic);
});

test('parses --help option', () => {
    const opts = parseArgs(['--help']);
    assertTrue(opts.help);
});

test('parses combined arguments', () => {
    const opts = parseArgs(['בראשית', '10', '--format=json', '--include-aramaic']);
    assertEqual(opts.book, 'בראשית');
    assertEqual(opts.chapter, 10);
    assertEqual(opts.format, 'json');
    assertTrue(opts.includeAramaic);
});

test('throws on invalid format', () => {
    assertThrows(() => parseArgs(['--format=invalid']), 'Invalid format');
});

test('throws on unknown option', () => {
    assertThrows(() => parseArgs(['--unknown']), 'Unknown option');
});

// ------------------------------------------
console.log('\ngetStructure:');
// ------------------------------------------

test('returns structure with all books', () => {
    const structure = getStructure();
    assertTrue(structure instanceof Map);
    assertTrue(structure.has('בראשית'));
    assertTrue(structure.has('שמות'));
    assertTrue(structure.has('תהילים'));
});

test('Genesis has correct structure', () => {
    const structure = getStructure();
    const genesis = structure.get('בראשית');
    assertEqual(genesis.name, 'בראשית');
    assertEqual(genesis.section, 'תורה');
    assertEqual(genesis.chapterCount, 50);
    assertEqual(genesis.versesPerChapter[0], 31); // Chapter 1 has 31 verses
    assertTrue(genesis.totalVerses > 1500);
});

test('book has aramaic info when applicable', () => {
    const structure = getStructure();
    const daniel = structure.get('דניאל');
    assertTrue(daniel.aramaicSections !== null);
    assertEqual(daniel.aramaicSections[0].start, '2:4');
});

test('book without aramaic has null aramaicSections', () => {
    const structure = getStructure();
    const exodus = structure.get('שמות');
    assertEqual(exodus.aramaicSections, null);
});

test('all books have correct section assignment', () => {
    const structure = getStructure();

    for (const book of TORAH) {
        assertEqual(structure.get(book).section, 'תורה');
    }

    for (const book of NEVIIM_RISHONIM) {
        assertEqual(structure.get(book).section, 'נביאים ראשונים');
    }

    for (const book of KETUVIM) {
        assertEqual(structure.get(book).section, 'כתובים');
    }
});

test('verse counts are positive', () => {
    const structure = getStructure();

    for (const book of structure.values()) {
        assertTrue(book.totalVerses > 0, `${book.name} should have verses`);
        for (const verseCount of book.versesPerChapter) {
            assertTrue(verseCount > 0, `All chapters should have verses`);
        }
    }
});

test('total Bible verses is approximately 23000', () => {
    const structure = getStructure();
    let total = 0;
    for (const book of structure.values()) {
        total += book.totalVerses;
    }
    // Hebrew Bible has approximately 23,145 verses
    assertTrue(total > 23000 && total < 24000, `Total verses should be ~23000, got ${total}`);
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

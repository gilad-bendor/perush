#!/usr/local/bin/node

// This will reset the naming of the files  ./פירוש/[sequence]-[book-name]-[from-location]-[to-location]-[free-text].rtl.md
//                                                      |           |            |               |            |
//                                                   updated     verified     updated         updated     unchanged


/**************************************************************************************

The folder './פירוש' has this structure:

  ./
    פירוש/
      [base-sequence]-[book-name]/
        [sequence]-[book-name]-[from-location]-[to-location]-[free-text].rtl.md

Sequences (both [base-sequence] and [sequence]) are 4-digits numbers.
[book-name] is one of בראשית, שמות, ויקרא, במדבר, דברים.
[location] has this syntax: `[perek]_[pasuk]`

A sample path may be:     ./פירוש/1-בראשית/1060-בראשית-ח_א-ט_יט-קריסת המבול.rtl.md
This means that the file contains the biblical verses of בראשית - from perek ח pasuk א, to perek ט pasuk יט.

Each of these *.rtl.md files contains many text-lines, but we are only interested in "verse lines".
A "verse line" has this syntax:

   > [book-name] [perek] [pasuk]: ...some text...

=== TASK 1 ===

Read these files in order (these immutable files contains ALL the verses in the books - in order):
   ./תנך/תורה/בראשית.rtl.md
   ./תנך/תורה/שמות.rtl.md
   ./תנך/תורה/ויקרא.rtl.md
   ./תנך/תורה/במדבר.rtl.md
   ./תנך/תורה/דברים.rtl.md
In each file - for each "verse line" - remember the string "[book-name] [perek] [pasuk]" in order.
1. Store these strings in the Array `orderedVersesArray` (will never change)
2. Store these strings in the Map `orphanVersesMap` (key is the string, and value is the index into `orderedVersesArray`): verses that are found under './פירוש' are removed from this Map. This Set is expected to be empty at the end.

=== TASK 2 ===

Build the Array `filesArray` whose elements matches this TypeScript schema:

type FileInfo = {
    folder: string; // Example: './פירוש/1-בראשית'
    fileName: string; // Example: '1060-בראשית-ח_א-ט_יט-קריסת המבול.rtl.md'
    bookName: string; // Derived from the folder. Example: 'בראשית'
    locations: string[]; // An array of all the location strings (syntax as before: "[book-name] [perek] [pasuk]") from the file's contents - Example item: "בראשית כד ז"
    locationIndexes: number[]; // Identical to `locations` - but instead of a location-string - an index into `orderedVersesArray`
};

Algorithm:
Per every *.rtl.md file under './פירוש' - build a `FileInfo` object like this:
  1. Read the contents
  2. Per "verse line" in the file:
     a. Extract the "location" string
     b. Find the location-index (using `orphanVersesMap`). If not found - throw (invalid verse location).
     c. Add to the FileInfo's `locations` and `locationIndexes`
  3. Remove this verse from `orphanVersesMap`

After all files are read, and if `orphanVersesMap` is not empty - log all verses in `orphanVersesMap` and throw (verse is not found under './פירוש').

=== TASK 3 ===

Sort `filesArray` by locationIndexes[0].
Then, go over `filesArray` - and potentially rename it:
The file-name's syntax is:     [sequence]-[book-name]-[from-location]-[to-location]-[free-text].rtl.md
- [sequence] should be set according to the folder's [base-sequence]: suppose the base-sequence is 2000, then the file-name's sequences should be 2000, 2010, 2020, 2030, ...
- [book-name] should not be changed
- [from-location] is the FIRST element in the FileInfo's `locations` - but converted from "[book-name] [perek] [pasuk]" to "[perek]_[pasuk]"
- [to-location] is the same - but for the LAST element in the FileInfo's `locations`.
- [free-text] should not be changed

If the file's name should be change - rename and log.

**************************************************************************************/

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Book names in Hebrew
const BOOK_NAMES = ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים'];
const TORA_BASE_DIR = './תנך/תורה';

const torahFiles = BOOK_NAMES.map(bookName => `${TORA_BASE_DIR}/${bookName}.rtl.md`);

// Global data structures
let orderedVersesArray = [];
let usedVersesToFilePathMap = new Map();
let allVersesMap = new Map();
let orphanVersesMap = new Map();
let filesArray = [];

(async () => {
    try {
        await task1();
        await task2();
        await task3();
        console.log(`Processing completed successfully (${filesArray.length} files)`);
    } catch (error) {
        console.error('Fatal error:', error.message);
        process.exit(1);
    }
})();

/**
 * Extract verse lines from file content
 * @param {string} filePath
 * @param {string} content - File content
 * @returns {string[]} Array of verse location strings
 */
function extractVerseLines(filePath, content) {
    const lines = content.split('\n');
    const verseLines = [];

    for (const line of lines) {
        if (line.startsWith('> ')) {
            // Extract the verse reference: "> [book-name] [perek] [pasuk]: ...some text..."
            const match = line.match(/^> (בראשית|שמות|ויקרא|במדבר|דברים) ([א-ת]{1,2}) ([א-ת]{1,2}): /);
            if (!match) {
                throw new Error(`Invalid verse line in file ${JSON.stringify(filePath)}:    ${line}`);
            }
            const bookName = match[1];
            const perek = match[2];
            const pasuk = match[3];
            verseLines.push(`${bookName} ${perek} ${pasuk}`);
        }
    }

    return verseLines;
}

/**
 * Convert location string to file format
 * Example: "בראשית כד ז" -> "כד_ז"
 * @param {string} locationString
 * @returns {string}
 */
function locationToFileFormat(locationString) {
    const parts = locationString.split(' ');
    if (parts.length >= 3) {
        return `${parts[1]}_${parts[2]}`;
    }
    throw new Error(`Invalid location format: ${JSON.stringify(locationString)}`);
}

/**
 * Extract book name from folder path
 * Example: './פירוש/1-בראשית' -> { folderName: '1-בראשית', baseSequence: 1000, bookName: 'בראשית' }
 * @param {string} folderPath
 * @returns {{ folderName: string, baseSequence: number, bookName: string }}
 */
function parseFolderName(folderPath) {
    const match = /(?:^|\/)(\d)-(בראשית|שמות|ויקרא|במדבר|דברים)(?:\/|$)/.exec(folderPath);
    if (!match) {
        throw new Error(`Invalid folder name ${JSON.stringify(folderPath)}`);
    }
    return {
        baseSequence: parseInt(match[1]) * 1000, // for example - the folder '4-במדבר' should have baseSequence 4000
        bookName: match[2],
        folderName: `${match[1]}-${match[2]}`
    };
}

/**
 * TASK 1: Read Torah files and build ordered verses
 */
async function task1() {
    console.log('TASK 1: Reading Torah files...');

    for (const filePath of torahFiles) {
        try {
            const content = await fs.readFile(filePath, 'utf8');
            const verseLines = extractVerseLines(filePath, content);

            for (const verse of verseLines) {
                allVersesMap.set(verse, orderedVersesArray.length);
                orphanVersesMap.set(verse, orderedVersesArray.length);
                orderedVersesArray.push(verse);
            }

            console.log(`  Read ${verseLines.length} verses from ${path.basename(filePath)}`);
        } catch (error) {
            console.error(`Error reading ${filePath}:`, error.message);
            throw error;
        }
    }

    console.log(`Total verses loaded: ${orderedVersesArray.length}`);
}

/**
 * Get all RTL markdown files recursively
 * @param {string} dirPath
 * @returns {Promise<Array<{ folder: string, fileName: string, fullPath: string }>>}
 */
async function getAllRtlFiles(dirPath) {
    const files = [];

    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                const subFiles = await getAllRtlFiles(fullPath);
                files.push(...subFiles);
            } else if (entry.name.endsWith('.rtl.md')) {
                files.push({
                    folder: path.dirname(fullPath),
                    fileName: entry.name,
                    fullPath: fullPath
                });
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
    }

    return files;
}

/**
 * TASK 2: Build filesArray
 */
async function task2() {
    console.log('TASK 2: Processing commentary files...');

    const rtlFiles = await getAllRtlFiles('./פירוש');
    console.log(`Found ${rtlFiles.length} RTL files`);

    for (const file of rtlFiles) {
        try {
            const content = await fs.readFile(file.fullPath, 'utf8');
            const verseLines = extractVerseLines(file.fullPath, content);

            const fileInfo = {
                folder: file.folder,
                fileName: file.fileName,
                bookName: parseFolderName(file.folder).bookName,
                locations: [],
                locationIndexes: []
            };

            for (const verse of verseLines) {
                if (!allVersesMap.has(verse)) {
                    throw new Error(`Verse location ${JSON.stringify(verse)} in file ${JSON.stringify(file.fullPath)} not found anywhere under ${JSON.stringify(TORA_BASE_DIR)}`);
                }
                if (!orphanVersesMap.has(verse)) {
                    throw new Error(`Verse location ${JSON.stringify(verse)} already exists another file:    ${JSON.stringify(usedVersesToFilePathMap.get(verse))}`);
                }
                usedVersesToFilePathMap.set(verse, file.fullPath);

                const index = orphanVersesMap.get(verse);
                fileInfo.locations.push(verse);
                fileInfo.locationIndexes.push(index);

                // Remove from orphan verses
                orphanVersesMap.delete(verse);
            }

            if (fileInfo.locations.length === 0) {
                throw new Error(`No verses found`);
            }
            filesArray.push(fileInfo);
            console.log(`  Processed ${file.fileName}: ${fileInfo.locations.length} verses`);
        } catch (error) {
            console.error(`Error processing ${file.fullPath}:`, error.message);
            throw error;
        }
    }

    // Check for remaining orphan verses
    if (orphanVersesMap.size > 0) {
        console.log('Orphan verses (not found in commentary files):');
        for (const verse of orphanVersesMap.keys()) {
            console.log(`  > ${verse}`);
        }
        throw new Error(`${orphanVersesMap.size} verses not found under './פירוש'`);
    }

    console.log('All verses found in commentary files!');
}

/**
 * TASK 3: Sort and rename files
 */
async function task3() {
    console.log('TASK 3: Sorting and renaming files...');

    // Sort by first location index
    filesArray.sort((a, b) => a.locationIndexes[0] - b.locationIndexes[0]);

    // Group by folder to handle sequences
    const folderGroups = new Map();
    for (const fileInfo of filesArray) {
        const groupName = parseFolderName(fileInfo.folder).folderName;
        if (!folderGroups.has(groupName)) {
            folderGroups.set(groupName, []);
        }
        folderGroups.get(groupName).push(fileInfo);
    }

    for (const [groupName, files] of folderGroups) {
        const baseSequence = parseFolderName(groupName).baseSequence;

        for (let i = 0; i < files.length; i++) {
            const fileInfo = files[i];
            const currentSequence = baseSequence + ((i + 1) * 10);

            // Parse current filename
            const fileNameMatch = fileInfo.fileName.match(/^(\d{4})-(בראשית|שמות|ויקרא|במדבר|דברים)-([א-ת]{1,2})_([א-ת]{1,2})-([א-ת]{1,2})_([א-ת]{1,2})-(.+)\.rtl\.md$/);
            if (!fileNameMatch) {
                throw new Error(`Invalid file name format ${JSON.stringify(fileInfo.fileName)}`);
            }
            const [_whole, _sequence, _bookName, _fromPerek, _fromPasuk, _toPerek, _toPasuk, freeText] = fileNameMatch;
            if (_bookName !== fileInfo.bookName) {
                throw new Error(`Book name mismatch the folder in file name ${JSON.stringify(`${fileInfo.folder}/${fileInfo.fileName}`)}`);
            }

            // Build new filename components
            const newSequence = currentSequence.toString().padStart(4, '0');
            const bookName = fileInfo.bookName;
            const fromLocation = locationToFileFormat(fileInfo.locations[0]);
            const toLocation = locationToFileFormat(fileInfo.locations[fileInfo.locations.length - 1]);

            const normalizedFreeText = freeText
                .replace(/[\u05b0-\u05c7\u0591-\u05af\u05ef-\u05f4]/g, '') // Remove Hebrew diacritics and cantillation marks
                .replace(/\P{L}/gu, '_') // convert non-letter characters to underscores
                .replace(/_+/g, '_') // collapse and trim underscores
                .replace(/^_/, '')
                .replace(/_$/, '')

            const newFileName = `${newSequence}-${bookName}-${fromLocation}-${toLocation}-${normalizedFreeText}.rtl.md`;

            if (newFileName !== fileInfo.fileName) {
                const oldPath = path.join(fileInfo.folder, fileInfo.fileName);
                const newPath = path.join(fileInfo.folder, newFileName);

                try {
                    // We want to do this:
                    //     await fs.rename(oldPath, newPath);
                    // But with Git, so we execute the command:
                    //     git mv "${oldPath}" "${newPath}"`
                    const gitCommand = `git mv "${oldPath}" "${newPath}"`;
                    console.log(`git command:    ${newPath}`);
                    execSync(gitCommand, { stdio: 'inherit' });
                } catch (error) {
                    throw new Error(`Error renaming ${JSON.stringify(oldPath)} to ${JSON.stringify(newPath)}:    ${error.message}`);
                }
            }
        }
    }
}


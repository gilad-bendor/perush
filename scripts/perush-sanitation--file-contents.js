#!/usr/local/bin/node

// This script will read all the files `./פירוש/**/*.trl.md` and potentially fix them.

const fs = require('fs');
const path = require('path');

// Ensure we're running from the repo's base directory
process.chdir(path.join(__dirname, '..'));

const BASE_DIR_PERUSH = './פירוש';
const BASE_DIR_LINGUAL = './ניתוחים-לשוניים';
const BASE_DIR_APPENDIX = './נספחים-לפירוש';

/** @typedef {'PERUSH' | 'LINGUAL' | 'APPENDIX'} FileType */
/** @type {FileType} */ const FILE_TYPE_PERUSH = 'PERUSH';
/** @type {FileType} */ const FILE_TYPE_LINGUAL = 'LINGUAL';
/** @type {FileType} */ const FILE_TYPE_APPENDIX = 'APPENDIX';

/**
 * @typedef {{
 *      fileType: FileType;
 *      filePath: string;
 *      originalContent: string;
 *      effectiveContent: string;
 *      errors: any[];
 * }} FileInfo
 */

// A map from file-paths to their info.
/** @type {Map<string, FileInfo>} */ filesInfo = new Map();

try {
    // Read all files (no manipulations).
    readDirectory(BASE_DIR_PERUSH, FILE_TYPE_PERUSH);
    readDirectory(BASE_DIR_LINGUAL, FILE_TYPE_LINGUAL);
    readDirectory(BASE_DIR_APPENDIX, FILE_TYPE_APPENDIX);
    console.log('');

    // Sanitize all files.
    for (const fileInfo of filesInfo.values()) {
        sanitizeFile(fileInfo);
    }
    console.log('');

    // If errors are found - log all and don't commit anything.
    exitOnErrors();

    // For every filesInfo[*] with originalContent!=effectiveContent - write the fixed content back to the file.
    commitChanges();
} catch (error) {
    console.error(error);
}

/**
 * Read all files under the given directory (recursively) into filesInfo
 * @param {string} dir
 * @param {FileType} fileType
 */
function readDirectory(dir, fileType) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const filePath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            readDirectory(filePath, fileType);
        } else if (entry.isFile() && entry.name.endsWith('.rtl.md')) {
            console.log(`Reading file:    ${filePath}`);
            const originalContent = fs.readFileSync(filePath, 'utf8');
            filesInfo.set(filePath, { fileType, filePath, originalContent, effectiveContent: originalContent, errors: [] });
        }
    }
}

/** If errors are found - log all and don't commit anything. */
function exitOnErrors() {
    let errorsCount = 0;
    for (const fileInfo of filesInfo.values()) {
        for (const error of fileInfo.errors) {
            console.error(`Error sanitizing ${JSON.stringify(fileInfo.filePath)}:    `, error);
            errorsCount++;
        }
    }
    if (errorsCount > 0) {
        console.error(`\n${errorsCount} sanitation errors found - so no fixes were applied.`);
        process.exit(1);
    }
}

/**
 * For every filesInfo[*] with a originalContent!=effectiveContent - write the fixed content back to the file.
 */
function commitChanges() {
    let fixesCount = 0;
    for (const fileInfo of filesInfo.values()) {
        if (fileInfo.effectiveContent !== fileInfo.originalContent) {
            fs.writeFileSync(fileInfo.filePath, fileInfo.effectiveContent, 'utf8');
            console.log(`Fixed and saved:    ${fileInfo.filePath}`);
            fixesCount++;
        }
    }
    if (fixesCount === 0) {
        console.log('\nNo fixes were needed.');
    } else {
        console.log(`\n${fixesCount} fixes made.`);
    }
}

/**
 * Sanitize a single file, potentially changing its FileInfo.effectiveContent
 * @param {FileInfo} fileInfo
 */
function sanitizeFile(fileInfo) {
    try {
        replaceNbsp(fileInfo);
        fixHtmlQuotes(fileInfo);
        verifyMarkdownLinks(fileInfo);
    } catch (error) {
        fileInfo.errors.push(error);
    }
}


/**
 * Replace all NBSP (non-breaking spaces) with normal spaces.
 * @param {FileInfo} fileInfo
 */
function replaceNbsp(fileInfo) {
    fileInfo.effectiveContent = fileInfo.effectiveContent.replace(/\u00A0/g, ' ');
}

/**
 * Given a Markdown file with:
 *     <ניתוח-לשוני ביטוי="...">
 *  make sure the quotes are simple double-quotes.
 * @param {FileInfo} fileInfo
 */
function fixHtmlQuotes(fileInfo) {
    fileInfo.effectiveContent = fileInfo.effectiveContent.replace(
        /(<ניתוח-לשוני[^>]+ביטוי=)["'״](.*?)["'״]([^>]*>)/g,
        '$1"$2"$3'
    );
}

/**
 * Verify all [Markdown Links](relative-path or absolute-url)
 * @param {FileInfo} fileInfo
 */
function verifyMarkdownLinks(fileInfo) {
    fileInfo.effectiveContent.replace(
        /\[([^\]\n]+)]\(([^)\n]+)\)/g,
        (wholeLink, label, relativePathOrUrl) => {
            if (relativePathOrUrl.startsWith('https://')) {
                // A URL: No sanitation needed.
                return wholeLink;
            }

            // A relative path: make sure the file exists in filesInfo
            const referencedPath = path.relative(process.cwd(), path.join(path.dirname(fileInfo.filePath), relativePathOrUrl));
            if (!filesInfo.has(referencedPath)) {
                fileInfo.errors.push(`Markdown reference not found.    Raw reference: ${JSON.stringify(relativePathOrUrl)}    Relative to base-dir: ${JSON.stringify(referencedPath)}`);
            }
        }
    )
}


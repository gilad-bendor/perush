#!/usr/local/bin/node

const fs = require('fs');

const googleDriveMdFilePath = process.argv[2];
if (!googleDriveMdFilePath) {
    console.error('Please provide the path to the Google Drive markdown file as an argument.');
    process.exit(1);
}
const googleDriveMdFileContent = fs.readFileSync(googleDriveMdFilePath, 'utf8');

const convertedFilePath = googleDriveMdFilePath.replace(/((\.doc)?\.md)?$/, '.rtl.md');

// א  x  \u05d0
// ת  x  \u05ea
// ט  x  \u05d8
// נ  x  \u05e0
const convertedFileContent = googleDriveMdFileContent
    // Main index
    .replace(/(^\[.+]\(.+\)\n+){5,}/m, "<!-- INDEX START -->\n<!-- INDEX END -->\n\n")
    // Non-breaking spaces
    .replace(/\xa0{2,}/g, '\xa0')
    .replace(/ *\xa0 */g, ' ')
    .replace(/\x0b/g, ' ')
    // Trim trailing spaces
    .replace(/[ ]+$/gm, '')
    // Fix backslashes
    .replace(/\\\\/g, '/')
    .replace(/\\([^\u05d0-\u05ea])/g, '$1')
    .replace(/\\/g, '/')
    // Tabs to spaces
    .replace(/\t/g, '    ')
    // Pasukim
    .replace(/^## \*\*([\u05d0-\u05ea]+) ([\u05d0-\u05ea]+)\*\*  (.*)/gm, "> $1 $2: $3  \n")
    .replace(/^## ([\u05d0-\u05e0][\u05d0-\u05d8]?) ([\u05d0-\u05e0][\u05d0-\u05d8]?)  (.*)/gm, "> $1 $2: $3  \n")
    .replace(/^## \*\*([\u05d0-\u05e0][\u05d0-\u05d8]?) ([\u05d0-\u05e0][\u05d0-\u05d8]?)\*\*  ?(.*)/gm, "> $1 $2: $3  \n")
    // Collapse multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    // Collapse empty lines between psukim
    .replace(/(^> .*)\n{2,}(> .*)/gm, '$1\n$2')
    .replace(/(^> .*)\n{2,}(> .*)/gm, '$1\n$2')
    .replace(/(^> .*)\n{2,}(> .*)/gm, '$1\n$2')
    // Change list-items from "*" to "-"
    .replace(/^(\s*)\* /gm, '$1- ')

// [\x00-\x09\x0b-\x1f\\]


fs.writeFileSync(convertedFilePath, convertedFileContent, 'utf8');

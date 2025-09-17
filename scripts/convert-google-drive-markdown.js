#!/usr/local/bin/node

// After downloading a Google-Doc as a Markdown file, run this script to convert it to a more suitable format for right-to-left text.
// The created file's name will end with ".rtl.md"

const fs = require('fs');

const googleDriveMdFilePath = process.argv[2];
if (!googleDriveMdFilePath) {
    console.error('Please provide the path to the Google Drive markdown file as an argument.');
    process.exit(1);
}
const googleDriveMdFileContent = fs.readFileSync(googleDriveMdFilePath, 'utf8');

const convertedFilePath = googleDriveMdFilePath.replace(/((\.doc)?\.md)?$/, '.rtl.md');

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
    .replace(/\\([^א-ת])/g, '$1')
    .replace(/\\/g, '/')
    // Tabs to spaces
    .replace(/\t/g, '    ')
    // Pasukim
    .replace(/^## \*\*([א-ת]+) ([א-ת]+)\*\*  (.*)/gm, "> $1 $2: $3  \n")
    .replace(/^## ([א-ס][א-ט]?) ([א-ס][א-ט]?)  (.*)/gm, "> $1 $2: $3  \n")
    .replace(/^## \*\*([א-ס][א-ט]?) ([א-ס][א-ט]?)\*\*  ?(.*)/gm, "> $1 $2: $3  \n")
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

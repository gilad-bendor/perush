#!/usr/local/bin/node

// Perform full sanitation by calling all `perush-sanitation--*.js` one after the other.

const path = require('path');
const { execSync } = require('child_process');

// Execute sanitation scripts in order
executeNodeFile(path.join(__dirname, 'perush-sanitation--file-contents.js'));
executeNodeFile(path.join(__dirname, 'perush-sanitation--reset-numbering.js'));

console.log('\n\n' + '='.repeat(80));
console.log('All sanitation scripts completed successfully!');
console.log('='.repeat(80));

/**
 * Execute a Node.js file
 * @param {string} filePath - Path to the Node.js file to execute
 */
function executeNodeFile(filePath) {
    console.log('\n' + '='.repeat(80));
    console.log(`Executing: ${path.basename(filePath)}`);
    console.log('='.repeat(80) + '\n');

    try {
        execSync(`"${filePath}"`, {
            stdio: 'inherit',
            cwd: process.cwd()
        });
    } catch (error) {
        console.error(`✗ Failed: ${path.basename(filePath)}`);
        process.exit(1);
    }
}

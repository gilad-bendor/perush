import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {spawnSync} from "child_process";
import {fileURLToPath} from "node:url";
import {biblicalAnnotatedText, type BiblicalAnnotatedText} from "./bible-text.ts";

const savedHtmlDir = fileURLToPath(new URL('../saved-htmls', import.meta.url));
mkdirSync(savedHtmlDir, {recursive: true});

export const browserTemplateCss: BiblicalAnnotatedText = readFileSync(fileURLToPath(new URL('../../browser-templates/browser-template.css', import.meta.url)), 'utf-8');
export const browserTemplateJs: BiblicalAnnotatedText = readFileSync(fileURLToPath(new URL('../../browser-templates/browser-template.css', import.meta.url)), 'utf-8');
export const browserTemplateHtml: BiblicalAnnotatedText = readFileSync(fileURLToPath(new URL('../../browser-templates/browser-template.html', import.meta.url)), 'utf-8')
    .replace("/* INCLUDE browser-template.css */", browserTemplateCss.replace(/\n/g, '\n\t\t'))
    .replace("<!-- INCLUDE browser-template.js -->", browserTemplateJs.replace(/\n/g, '\n\t'))
    .replace("\"ANNOTATED TEXT INJECTED DYNAMICALLY\"", JSON.stringify(biblicalAnnotatedText));

export function openHtmlInBrowser(contentHtml: string) {
    const finalHtml = browserTemplateHtml.replace("<!-- INCLUDE LETTER COLUMNS -->", contentHtml);

    // Save the HTML to a file.
    const saveFileName = `${savedHtmlDir}/${timeAsString()}.html`;
    writeFileSync(saveFileName, finalHtml, 'utf-8');

    // Execute `open ${saveFileName}`
    const result = spawnSync('open', [saveFileName], {stdio: 'inherit'});
    if (result.error) {
        throw result.error;
    }
    if (result.status !== 0) {
        throw new Error(`"open ${saveFileName}" returned status ${result.status}`);
    }
}

export function timeAsString(date = new Date()): string {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}` +
        `--${String(date.getHours()).padStart(2,'0')}-${String(date.getMinutes()).padStart(2,'0')}-${String(date.getSeconds()).padStart(2,'0')}` +
        `.${String(date.getMilliseconds()).padStart(3,'0')}`;
}

/** Get an array of all the values of a numeric "enum" object. */
export function enumValues<E extends Record<string, string | number>>(enumObject: E): E[keyof E][] {
    return Object.values(enumObject).filter((value): value is E[keyof E] => typeof value === 'number');
}

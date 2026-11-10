// Brings the whole HTML mirror - and the PDF mirror printed from it - up to date once, without
// starting the server:  npm run rebuild-whole-html-folder
// The server does the same at startup and keeps it up to date while it runs - see html-mirror.ts.
// --html-only: the pages and the indexes (docs/index.html among them), no PDFs - which takes a second
// (scripts/commit-auto-docs.sh runs it, for docs/index.html to list bible-viewer.html).

import { snapshotOfTree } from "./fs-changes.ts";
import { HtmlMirror } from "./html/html-mirror.ts";
import { PdfMirror } from "./html/pdf-mirror.ts";
import { getMarkdownFiles, MARKDOWN_DIR } from "./markdown-tree.ts";

const htmlOnly = process.argv.includes("--html-only");
const started = performance.now();
const mirror = await HtmlMirror.create(MARKDOWN_DIR);
const pdfMirror = htmlOnly ? null : await PdfMirror.create(MARKDOWN_DIR);
if (pdfMirror) mirror.companion = pdfMirror;
const { rendered, removed, indexes } = await mirror.syncTree(snapshotOfTree(await getMarkdownFiles(MARKDOWN_DIR)));
console.log(`HTML mirror: ${rendered} page(s) rendered, ${removed} removed, ${indexes} folder index(es) updated,`
    + ` in ${Math.round(performance.now() - started)} ms`);
if (pdfMirror) {
    await pdfMirror.idle();
    await pdfMirror.close();
    console.log(`PDF mirror: up to date, in ${Math.round(performance.now() - started)} ms`);
}

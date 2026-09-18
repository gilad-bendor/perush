// Brings the whole HTML mirror up to date once, without starting the server:  bun run build-html
// The server does the same at startup and keeps it up to date while it runs - see html-mirror.ts.

import { snapshotOfTree } from "./fs-changes";
import { HtmlMirror } from "./html-mirror";
import { getMarkdownFiles, MARKDOWN_DIR } from "./markdown-tree";

const started = performance.now();
const mirror = await HtmlMirror.create(MARKDOWN_DIR);
const { rendered, removed, indexes } = await mirror.syncTree(snapshotOfTree(await getMarkdownFiles(MARKDOWN_DIR)));
console.log(`HTML mirror: ${rendered} page(s) rendered, ${removed} removed, ${indexes} folder index(es) updated,`
    + ` in ${Math.round(performance.now() - started)} ms`);

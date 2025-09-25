import * as path from "path";
import {fileURLToPath} from "url";
import {Server} from "@modelcontextprotocol/sdk/server/index.js";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";
import {CallToolRequestSchema, ErrorCode, ListToolsRequestSchema, McpError,} from "@modelcontextprotocol/sdk/types.js";
import {listFilesInRange, parseLocation} from "../scripts/list-files-range.js";
import {searchCommentaryRegexp, searchCommentaryText} from "../scripts/search-files.js";

// Change working directory to the project root.
const baseDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
process.chdir(baseDir);

class BiblicalCommentaryServer {
    constructor() {
        this.server = new Server(
            {
                name: "biblical-commentary-server",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        this.setupToolHandlers();
    }

    setupToolHandlers() {
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: "list_commentary_files_range",
                        description: [
                            "List biblical commentary files' paths by the specified location-range.",
                            "This is the primary tool for locating files to read commentary from.",
                            "Example usage:",
                            '  list_commentary_files_range {"start_range": "שמות_מב_ז", "end_range": "שמות_מב_יז"}',
                            '  list_commentary_files_range {"start_range": "בראשית_יא_*"}',
                            '  list_commentary_files_range {"start_range": "במדבר_*_*"}',
                        ].join('\n'),
                        inputSchema: {
                            type: "object",
                            properties: {
                                start_range: {
                                    type: "string",
                                    description: [
                                        "Starting range in format: book_chapter_verse (e.g., 'שמות_מב_ז', 'בראשית_יא_*', 'במדבר_*_*').",
                                        "Use * for wildcards.",
                                    ].join('\n'),
                                },
                                end_range: {
                                    type: "string",
                                    description: "Optional ending range in same format. If not provided, returns single file containing start_range.",
                                },
                            },
                            required: ["start_range"],
                        },
                    },
                    {
                        name: "search_commentary_files_by_text",
                        description: [
                                'Like the `grep -F` command - for searching commentary files.',
                                'Every matched line is output like this:  full-path: line-text' +
                                'The search ignores Hebrew points/accents, and treats final letters as standard letters (\'ךםןףץ\' is the same as \'כמנפצ\').' +
                                'Example usage:',
                                '  search_commentary_files_by_text {"search_term": "מים"}',
                                'IMPORTANT: This tool should only be used if the exact search term is known. Normally - the tool "list_commentary_files_range" is preferred.'
                            ].join('\n'),
                        inputSchema: {
                            type: "object",
                            properties: {
                                search_term: {
                                    type: "string",
                                    description: "Hebrew or English term to search for in commentary files",
                                },
                            },
                            required: ["search_term"],
                        },
                    },
                    {
                        name: "search_commentary_files_by_regexp",
                        description: [
                                'Like the `grep` command - for searching commentary files, using JavaScript-flavor regular expressions.' +
                                'Every matched line is output like this:  full-path: line-text' +
                                'The search ignores Hebrew points/accents, and treats final letters as standard letters (\'ךםןףץ\' is the same as \'כמנפצ\').' +
                                'Example usages:',
                                '  search_commentary_files_by_regexp {"search_pattern": "מים.*ארץ"}',
                                'Search for Biblical verse:',
                                '  search_commentary_files_by_regexp {"search_pattern": "^> [^:]*: ארץ"}',
                                'IMPORTANT: This tool should only be used if the exact search pattern is known. Normally - the tool "list_commentary_files_range" is preferred.'
                            ].join('\n'),
                        inputSchema: {
                            type: "object",
                            properties: {
                                search_pattern: {
                                    type: "string",
                                    description: "Regular expression (JavaScript flavor) to search for in commentary files",
                                },
                            },
                            required: ["search_pattern"],
                        },
                    },
                ],
            };
        });

        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const {name, arguments: args} = request.params;

            try {
                switch (name) {
                    case "list_commentary_files_range":
                        return this.listFilesRange(args);
                    case "search_commentary_files_by_text":
                        return this.searchCommentaryText(args);
                    case "search_commentary_files_by_regexp":
                        return this.searchCommentaryRegexp(args);
                    default:
                        throw new McpError(
                            ErrorCode.MethodNotFound,
                            `Unknown tool: ${name}`
                        );
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                throw new McpError(
                    ErrorCode.InternalError,
                    `Tool execution failed: ${errorMessage}`
                );
            }
        });
    }

    /**
     * List biblical commentary files' paths by the specified location-range.
     * @param {{start_range: string, end_range?: string}} args
     * @returns {{content: [{type: string, text: string}]}}
     */
    listFilesRange(args) {
        const {start_range, end_range} = args;
        try {
            const files = listFilesInRange(
                parseLocation(start_range, 'from'),
                end_range
                    ? parseLocation(end_range, 'to')
                    : undefined,
            );
            return {
                content: [
                    {
                        type: "text",
                        text: files.map((file) => path.join(baseDir, file)).join('\n')
                    }
                ]
            };
        } catch (error) {
            throw new Error(`Failed to execute list-files-range.js: ${error.stack || error.message}`);
        }
    }

    /**
     * Search commentary files for the specified text term.
     * @param {{ search_term: string }} args
     * @returns {{content: [{type: string, text: string}]}}
     */
    searchCommentaryText(args) {
        try {
            const { matches, limitIsHit } = searchCommentaryText(args?.search_term);
            return this.innerSearchCommentary(matches, limitIsHit);
        } catch (error) {
            throw new Error(`Failed to search commentary text: ${error.stack || error.message}`);
        }
    }

    /**
     * Search commentary files for the specified regular expression pattern.
     * @param {{ search_pattern: string }} args
     * @returns {{content: [{type: string, text: string}]}}
     */
    searchCommentaryRegexp(args) {
        try {
            const { matches, limitIsHit } = searchCommentaryRegexp(args?.search_pattern);
            return this.innerSearchCommentary(matches, limitIsHit);
        } catch (error) {
            throw new Error(`Failed to search commentary text: ${error.stack || error.message}`);
        }
    }

    /**
     * Convert commentary files matches to MCP response format.
     * @param {{filePath: string, lineText: string}[]} matches
     * @param {number|undefined} limitIsHit
     * @returns {{content: [{type: string, text: string}]}}
     */
    innerSearchCommentary(matches, limitIsHit) {
        const resultLines = [];
        if (matches.length === 0) {
            resultLines.push('No matches found.');
        } else {
            resultLines.push(...matches.map(match => `${JSON.stringify(path.join(baseDir, match.filePath))}: ${match.lineText}`));
            if (limitIsHit) {
                resultLines.push(`(Results limited to ${limitIsHit} matches)`);
            }
        }
        return {
            content: [
                {
                    type: "text",
                    text: resultLines.join('\n')
                }
            ]
        };
    }

    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error("Biblical Commentary MCP server running on stdio");
    }
}


const server = new BiblicalCommentaryServer();
server.run().catch(console.error);
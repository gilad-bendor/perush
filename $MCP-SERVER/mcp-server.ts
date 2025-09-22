import {readFileSync, existsSync} from "fs";
import * as path from "path";
import {execSync} from "child_process";
import {Server} from "@modelcontextprotocol/sdk/server/index.js";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ErrorCode,
    ListToolsRequestSchema,
    McpError,
} from "@modelcontextprotocol/sdk/types.js";
import {readdirSync} from "node:fs";

const perushDir = '../פירוש';
const maxSearchResults = 50;

// Hebrew points/accents ranges (these characters are ignored when searching):
const hebrewExtrasRegExp = /[\u05b0-\u05c7\u0591-\u05af\u05ef-\u05f4]/g;

class BiblicalCommentaryServer {
    private server: Server;

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

    private setupToolHandlers() {
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: "list_files_range",
                        description: "Find biblical commentary files by verse range using the custom CLI tool",
                        inputSchema: {
                            type: "object",
                            properties: {
                                start_range: {
                                    type: "string",
                                    description: "Starting range in format: book_chapter_verse (e.g., 'בראשית_יא_*', 'שמות_מב_ז'). Use * for wildcards.",
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
                        name: "read_commentary_file",
                        description: "Read the content of a specific commentary file",
                        inputSchema: {
                            type: "object",
                            properties: {
                                filename: {
                                    type: "string",
                                    description: "The filename to read (usually from list_files_range results)",
                                },
                            },
                            required: ["filename"],
                        },
                    },
                    {
                        name: "search_commentary",
                        description: "Search for specific terms or concepts within commentary files",
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
                        name: "search_commentary_regexp",
                        description: "Search for patterns using regular expressions within commentary files",
                        inputSchema: {
                            type: "object",
                            properties: {
                                search_pattern: {
                                    type: "string",
                                    description: "Regular expression pattern to search for in commentary files",
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
                    case "list_files_range":
                        return await this.listFilesRange(args as any);
                    case "read_commentary_file":
                        return await this.readCommentaryFile(args as any);
                    case "search_commentary":
                        return this.searchCommentaryText(args as any);
                    case "search_commentary_regexp":
                        return this.searchCommentaryRegexp(args as any);
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

    private async listFilesRange(args: { start_range: string; end_range?: string }) {
        const {start_range, end_range} = args;

        try {
            const command = end_range
                ? `./list-files-range.js ${start_range} ${end_range}`
                : `./list-files-range.js ${start_range}`;

            const result = execSync(command, {
                encoding: 'utf-8',
                cwd: process.cwd(),
                timeout: 10000 // 10 second timeout
            });

            const files = result.trim().split('\n').filter(line => line.length > 0);

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            command_executed: command,
                            files_found: files.length,
                            files: files,
                            range_queried: end_range ? `${start_range} to ${end_range}` : start_range
                        }, null, 2)
                    }
                ]
            };
        } catch (error) {
            throw new Error(`Failed to execute list-files-range.js: ${error}`);
        }
    }

    private readCommentaryFile(args: { filename: string }) {
        const {filename} = args;

        try {
            // Look for the file in the פירוש directory structure
            const possiblePaths = [
                filename,
                path.join('פירוש', filename),
                path.join('פירוש', '1-בראשית', filename),
                path.join('פירוש', '2-שמות', filename),
                path.join('פירוש', '3-ויקרא', filename),
                path.join('פירוש', '4-במדבר', filename),
                path.join('פירוש', '5-דברים', filename),
            ];

            let content = '';
            let foundPath = '';

            for (const filePath of possiblePaths) {
                if (existsSync(filePath)) {
                    content = readFileSync(filePath, 'utf-8');
                    foundPath = filePath;
                    break;
                }
            }

            if (!content) {
                throw new Error(`File not found: ${filename}`);
            }

            return {
                content: [
                    {
                        type: "text",
                        text: `# File: ${foundPath}\n\n${content}`
                    }
                ]
            };
        } catch (error) {
            throw new Error(`Failed to read file ${filename}: ${error}`);
        }
    }

    private searchCommentaryText(args: { search_term: string }) {
        const {search_term} = args;
        return this.innerSearchCommentary((line: string) =>
            line.includes(search_term) ||
            line.replace(hebrewExtrasRegExp, '').includes(search_term)
        );
    }

    private searchCommentaryRegexp(args: { search_pattern: string }) {
        const {search_pattern} = args;
        const searchRegExp = new RegExp(search_pattern);
        return this.innerSearchCommentary((line: string) =>
            searchRegExp.test(line) ||
            searchRegExp.test(line.replace(hebrewExtrasRegExp, ''))
        );
    }

    // Recursively scan the current directory for *.rtl.md files, and search each line with lineMatcher.
    // Return up to `maxSearchResults` matching lines with their filenames. Example output line:
    //   1050-בראשית-ד_יז-ד_כו-שושלת_קין.rtl.md: עִירָד = עיר + רְדִיַיה: אותם מסדרים - שנולדו מתוך יצירתיות וחידוש
    private innerSearchCommentary(lineMatcher: (line: string) => boolean) {
        const matches: string[] = [];

        // Scan all *.rtl.md files under the perushDir directory, and recurse into subdirectories.
        const fullDir = path.join(perushDir, perushDir);
        const entries = readdirSync(fullDir, { encoding: 'utf-8', withFileTypes: true, recursive: true });
        for (const entry of entries) {
            if (entry.isFile() && entry.name.endsWith('.rtl.md')) {
                const filePath = path.join(fullDir, entry.name);
                const lines = readFileSync(filePath, 'utf-8').split('\n');
                for (const line of lines) {
                    if (lineMatcher(line)) {
                        matches.push(`${entry.name}: ${line}`);
                    }
                }
            }
        }

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify({
                        matches_found: matches.length,
                        matches: matches.slice(0, maxSearchResults)
                    }, null, 2)
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

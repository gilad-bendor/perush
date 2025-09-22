# Biblical Commentary MCP Server

A Model Context Protocol (MCP) server that provides access to biblical commentary files organized by verse ranges. This server enables searching, reading, and analyzing Hebrew biblical commentary through a structured API.

## Features

- **File Range Lookup**: Find commentary files by biblical verse ranges
- **Commentary Reading**: Read specific commentary files with automatic path resolution
- **Text Search**: Search for terms within commentary files (Hebrew and English)
- **RegExp Search**: Advanced pattern matching using regular expressions

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server runs on stdio and provides four main tools:

### 1. list_files_range

Find biblical commentary files by verse range using the custom CLI tool.

**Parameters:**
- `start_range` (required): Starting range in format `book_chapter_verse` (e.g., `בראשית_יא_טו`)
- `end_range` (optional): Ending range in same format

```bash
# Test verses range
./mcp-server.ts list_files_range '{
  "start_range": "בראשית_יא_טו",
  "end_range": "בראשית_יב_ג"
}'
```

### 2. read_commentary_file

Read the content of a specific commentary file.

**Parameters:**
- `filename` (required): The filename to read (usually from `list_files_range` results)

```bash
./mcp-server.ts read_commentary_file '{
  "filename": "1040-בראשית-ד_א-ד_טז-הבל_וקין.rtl.md"
}'
```

### 3. search_commentary

Search for specific terms or concepts within commentary files.

**Parameters:**
- `search_term` (required): Hebrew or English term to search for

```bash
# Search for Hebrew term
./mcp-server.ts search_commentary '{
  "search_term": "ציביליזציה"
}'
```

### 4. search_commentary_regexp

Search for patterns using regular expressions within commentary files.

**Parameters:**
- `search_pattern` (required): Regular expression pattern to search for

```bash
# Search for Hebrew words starting with specific letters
./mcp-server.ts search_commentary_regexp '{
  "search_pattern": "ציביליזציה|תרבות"
}'
```

## Testing Tools List

```bash
# List all available tools
./mcp-server.ts tools/list
```

This will return the schema for all four tools with their parameter definitions and descriptions.

## Directory Structure

The base directory for all the perush files is `./פירוש/`
All the tools only use the filenames - without any preceding path.

Each directory contains `*.rtl.md` files with biblical commentary following the naming convention:
`NNNN-book-from-to-title.rtl.md`

## Features

- **Hebrew Text Support**: Full support for Hebrew text with diacritics
- **Automatic Path Resolution**: Searches multiple possible paths for commentary files
- **Error Handling**: Comprehensive error handling with meaningful messages
- **Search Optimization**: Ignores Hebrew diacritics during search for better matching
- **Result Limiting**: Limits search results to prevent overwhelming responses

## Development

The server is built using the Model Context Protocol SDK and includes:

- TypeScript support with ts-node
- Recursive directory scanning
- Unicode text processing
- Regular expression search capabilities
- JSON-formatted responses

## Error Handling

All tools include comprehensive error handling:
- File not found errors
- Command execution timeouts (10 seconds)
- Invalid parameters
- File system access issues


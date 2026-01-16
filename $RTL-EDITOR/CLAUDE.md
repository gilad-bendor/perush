# Hebrew Markdown RTL Editor

A TypeScript Bun web-server project for editing Hebrew Markdown files with browser-based interface.

## Features

- File tree browser in left panel
- Tabbed Markdown editor in right panel  
- RTL layout support for `*.rtl.md` files, or `*.md` files whose first relevant line (line with a letter) contains Hebrew but not English
- Real-time file editing and saving
- Full server/client sync: every change in the client (UI) is soon saved to the server,
   and the client periodically polls changes from the server.

## Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Project Structure

- `src/server.ts` - Main Bun web server
- `public/` - Static frontend assets
- `public/index.html` - Main interface
- `public/app.js` - Frontend JavaScript
- `public/style.css` - Styling with RTL support

## API Endpoints

- `GET /api/files` - List all .md files in configured directory
- `GET /api/file/:path` - Read file content
- `POST /api/file/:path` - Save file content

## Configuration

Set `MARKDOWN_DIR` environment variable to specify the directory containing Markdown files (defaults to `./markdown`).
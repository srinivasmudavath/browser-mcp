# Playwright MCP - About & Tools Reference

## Overview

**Playwright MCP** is a Model Context Protocol (MCP) server that provides comprehensive browser automation capabilities using [Playwright](https://playwright.dev). This server enables AI agents and LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models.

### Key Features
- **Fast and lightweight** - Uses Playwright's accessibility tree, not pixel-based input
- **LLM-friendly** - No vision models needed, operates purely on structured data  
- **Deterministic tool application** - Avoids ambiguity common with screenshot-based approaches
- **Two interaction modes** - Snapshot mode (default) and Vision mode for coordinate-based interactions

## Interaction Modes

### 1. Snapshot Mode (Default)
- Uses **accessibility tree snapshots** for element targeting
- More reliable and faster than visual approaches
- Elements are referenced by accessibility properties
- Preferred for most automation tasks

### 2. Vision Mode
- Uses **screenshots and coordinates** for interactions
- Suitable for vision-capable AI models
- Direct pixel-based targeting
- Enable with `--vision` flag

## Complete Tools Reference

| # | Tool Name | Category | Description | Mode | Read-Only |
|---|-----------|----------|-------------|------|-----------|
| 1 | `browser_snapshot` | Core Interactions | Capture accessibility snapshot of the current page (better than screenshot) | Snapshot | ✅ |
| 2 | `browser_click` | Core Interactions | Perform click on a web page using element reference | Snapshot | ❌ |
| 3 | `browser_type` | Core Interactions | Type text into editable element with options for slow typing and submission | Both | ❌ |
| 4 | `browser_decrypt_type` | Core Interactions | Decrypt and type encrypted text (secure version for password fields) | Snapshot | ❌ |
| 5 | `browser_hover` | Core Interactions | Hover over element on page | Snapshot | ✅ |
| 6 | `browser_drag` | Core Interactions | Perform drag and drop between two elements | Snapshot | ❌ |
| 7 | `browser_select_option` | Core Interactions | Select an option in a dropdown | Snapshot | ❌ |
| 8 | `browser_press_key` | Core Interactions | Press a key on the keyboard | Both | ❌ |
| 9 | `browser_wait_for` | Core Interactions | Wait for text to appear/disappear or a specified time to pass | Both | ✅ |
| 10 | `browser_file_upload` | File Handling | Upload one or multiple files | Both | ❌ |
| 11 | `browser_handle_dialog` | File Handling | Handle browser dialogs (alerts, confirms, prompts) | Both | ❌ |
| 12 | `browser_navigate` | Navigation | Navigate to a URL | Both | ❌ |
| 13 | `browser_navigate_back` | Navigation | Go back to the previous page | Both | ✅ |
| 14 | `browser_navigate_forward` | Navigation | Go forward to the next page | Both | ✅ |
| 15 | `browser_tab_list` | Tab Management | List browser tabs | Both | ✅ |
| 16 | `browser_tab_new` | Tab Management | Open a new tab with optional URL | Both | ✅ |
| 17 | `browser_tab_select` | Tab Management | Select a tab by index | Both | ✅ |
| 18 | `browser_tab_close` | Tab Management | Close a tab by index or current tab | Both | ❌ |
| 19 | `browser_take_screenshot` | Resources | Take a screenshot of the current page or specific element | Snapshot | ✅ |
| 20 | `browser_pdf_save` | Resources | Save page as PDF | Both | ✅ |
| 21 | `browser_network_requests` | Resources | Returns all network requests since loading the page | Both | ✅ |
| 22 | `browser_console_messages` | Resources | Returns all console messages | Both | ✅ |
| 23 | `browser_install` | Utilities | Install the browser specified in the config | Both | ❌ |
| 24 | `browser_close` | Utilities | Close the browser/page | Both | ✅ |
| 25 | `browser_resize` | Utilities | Resize the browser window | Both | ✅ |
| 26 | `browser_generate_playwright_test` | Testing | Generate a Playwright test for given scenario | Both | ✅ |
| 27 | `browser_screen_capture` | Vision Mode | Take a screenshot for vision-based models | Vision | ✅ |
| 28 | `browser_screen_move_mouse` | Vision Mode | Move mouse to specific coordinates | Vision | ✅ |
| 29 | `browser_screen_click` | Vision Mode | Click left mouse button at coordinates | Vision | ❌ |
| 30 | `browser_screen_drag` | Vision Mode | Drag left mouse button between coordinates | Vision | ❌ |
| 31 | `browser_screen_type` | Vision Mode | Type text without element targeting | Vision | ❌ |

## Mode Legend
- **Snapshot**: Uses accessibility tree (default mode, faster and more reliable)
- **Vision**: Uses screenshots and coordinates (for vision models)  
- **Both**: Available in both modes

## Tool Categories

### 🎯 Core Interactions (9 tools)
Essential web interaction capabilities including clicking, typing, secure encrypted typing, hovering, dragging, and waiting.

### 🧭 Navigation (3 tools)
Page navigation and browser history management.

### 📑 Tab Management (4 tools)
Complete tab lifecycle management for multi-page workflows.

### 📋 Resources & Data (4 tools)
Data extraction, screenshots, PDF generation, and network monitoring.

### 📁 File Handling (2 tools)
File upload and dialog interaction capabilities.

### 🛠️ Utilities (3 tools)
Browser management and configuration tools.

### 🧪 Testing (1 tool)
Playwright test generation from scenarios.

### 👁️ Vision Mode (5 tools)
Coordinate-based interactions for vision-capable models.

## Key Parameters Reference

### Element Targeting (Snapshot Mode)
- `element`: Human-readable element description
- `ref`: Exact element reference from accessibility snapshot

### Coordinate Targeting (Vision Mode)
- `x`, `y`: Specific pixel coordinates
- `startX`, `startY`, `endX`, `endY`: Drag coordinates

### Common Parameters
- `url`: Target URL for navigation
- `text`: Text content for typing or waiting
- `paths`: File paths for uploads
- `index`: Tab index for tab operations

## Configuration Capabilities

### Browser Support
- **Chromium** (Chrome, Edge)
- **Firefox**
- **WebKit** (Safari)

### Session Management
- **Persistent profiles** - Maintain login states
- **Isolated sessions** - Clean state per session
- **Storage state** - Export/import session data

### Network Controls
- **Origin filtering** - Allow/block specific domains
- **Proxy support** - HTTP/SOCKS proxy configuration
- **Request monitoring** - Track all network activity

### Device Emulation
- **Mobile devices** - iPhone, Android emulation
- **Custom viewports** - Specific screen sizes
- **User agent** - Custom browser identification

## Perfect for AI Agents

This toolkit is specifically designed for AI-driven browser automation, providing:

1. **Structured interactions** without requiring vision models
2. **Reliable element targeting** through accessibility properties
3. **Comprehensive web capabilities** for complex workflows
4. **Session persistence** for multi-step processes
5. **Network monitoring** for tracking application states
6. **Multi-tab support** for parallel operations

## Installation & Usage

```bash
# Install globally
npm install -g @playwright/mcp

# Use with MCP client
npx @playwright/mcp@latest

# Enable vision mode
npx @playwright/mcp@latest --vision
```

For complete installation and configuration instructions, see the main [README.md](./README.md). 
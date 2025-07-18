<div align="center">
  <h1>tny.dev MCP Server</h1>
  <p><strong>The API-first link shortener built for AI agents</strong></p>
  <p>First-party MCP server for Claude, Cursor, and other AI assistants</p>
  
  [![npm version](https://img.shields.io/npm/v/@specstory/tnydev-mcp.svg)](https://www.npmjs.com/package/@specstory/tnydev-mcp)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Version](https://img.shields.io/node/v/@specstory/tnydev-mcp)](https://nodejs.org)
  [![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/specstoryai/tnydev-mcp/pulls)
  
  [![Claude Desktop](https://img.shields.io/badge/Claude-Desktop-orange)](https://claude.ai/desktop)
  [![Claude Code](https://img.shields.io/badge/Claude-Code-orange)](https://claude.ai/code)
  [![Cursor](https://img.shields.io/badge/Cursor-Compatible-green)](https://cursor.sh)
  [![Windsurf](https://img.shields.io/badge/Windsurf-Compatible-green)](https://codeium.com/windsurf)
  [![Zed](https://img.shields.io/badge/Zed-Compatible-green)](https://zed.dev)
  [![VS Code](https://img.shields.io/badge/VS%20Code-Compatible-green)](https://code.visualstudio.com)
</div>

---

## 🚀 Why tny.dev for AI Agents?

### Optimized for bursty AI traffic. Right when your agents need them.

Built for the unpredictable demands of AI workflows – handle spikes when agents process batches, then scale down during quiet periods.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <h3>🤖 Agent-First Design</h3>
        <p>Official MCP server for Claude, Cursor, and other AI assistants. Natural language API that just works.</p>
      </td>
      <td align="center">
        <h3>💰 200x More Economical</h3>
        <p>500 requests/hour for just $9/month. Perfect for AI workflows that process links in bursts.</p>
      </td>
      <td align="center">
        <h3>⏱️ Generous Rate Limits</h3>
        <p>500 requests per hour means you can scale naturally with your automation needs without hitting quotas.</p>
      </td>
    </tr>
  </table>
</div>

## 🎯 How AI Agents Compare

<div align="center">

| Feature | tny.dev | Bitly | Rebrandly | Short.io | TinyURL |
|---------|---------|-------|-----------|----------|---------|
| **First-party MCP Server** | ✅ Native | ⚠️ Third-party | ✅ Native | ❌ None | ⚠️ Third-party |
| **AI Assistant Ready** | ✅ Built-in | ⚠️ Via third-party | ✅ Built-in | ❌ No | ⚠️ Via third-party |
| **Monthly Cost** | ✅ **$9** | ❌ $199 | ⚠️ $29-35 | ⚠️ $19 | ✅ $9.99 |
| **Hourly Rate Limit** | ✅ **500/hour** | ⚠️ ~69/hour* | ⚠️ ~35/hour* | ❌ ~1.4/hour* | ⚠️ ~14/hour* |
| **Bulk Operations** | ✅ 100/request | ❌ Not supported | ✅ 25/request | ✅ 1,000/request | ❌ Not documented |

<sub>* Effective hourly rate calculated from monthly quotas divided by 720 hours</sub>

</div>

## 🎨 Features

- **🚀 First-Party MCP Server**: Native integration with Claude, Cursor, and other AI assistants
- **💨 Bursty Traffic Optimized**: 500 requests/hour handles AI workflow spikes naturally
- **🔗 Custom Domains**: Use your own domain for branded short URLs (Developer tier)
- **✨ Custom Slugs**: Create memorable short URLs with custom slugs (Developer tier)
- **📱 QR Codes**: Automatic QR code generation for all shortened URLs
- **📊 Analytics**: Get detailed click analytics for your shortened links
- **📋 Link Management**: List all your shortened links with pagination
- **🎯 Rate Limit Awareness**: Real-time quota tracking in every response
- **🤖 Natural Language API**: Built for how AI agents actually work

## 🚀 Quick Start

### Option 1: Claude Desktop Extension (Easiest)

<div align="center">
  <a href="https://github.com/specstoryai/tnydev-mcp/releases/latest/download/tnydev-mcp.dxt">
    <img src="https://img.shields.io/badge/Download%20Desktop%20Extension-→-purple?style=for-the-badge" alt="Download Extension">
  </a>
</div>

#### Installation Steps:

1. **Download the Extension**
   - Click the button above, or
   - Go to [Releases](https://github.com/specstoryai/tnydev-mcp/releases) and download `tnydev-mcp.dxt`

2. **Install in Claude Desktop**
   - **Method 1**: Drag and drop the `.dxt` file into Claude Desktop
   - **Method 2**: In Claude Desktop, go to Settings → Extensions → Install Extension → Select the `.dxt` file

3. **Configure Your API Key**
   - After installation, click on the extension settings
   - Enter your tny.dev API key (get one at [tny.dev/account](https://www.tny.dev/account))
   - Optionally add your domain ID for custom domains

4. **Start Using**
   - The tools are now available in your conversation
   - Try: "Shorten this URL for me: https://example.com"

### Option 2: npm Package (For Developers)

```bash
# In your MCP client configuration, use:
npx -y @specstory/tnydev-mcp
```

### Option 3: Local Installation

1. Get a tny.dev API key from your [account settings](https://www.tny.dev/account)
2. Clone this repository and navigate to `mcp-server`
3. Run: `npm install && npm run build`
4. Set your API key: `echo "TNY_DEV_API_KEY=your_key_here" > .env`
5. Configure your MCP client (see [Installation](#installation) below)
6. Start using the tools in your AI assistant!

## 📋 Prerequisites

### For Desktop Extension
- Claude Desktop v0.7.0 or higher
- A tny.dev account with API access

### For npm/Manual Installation
- Node.js 18 or higher
- A tny.dev account with API access (developer tier recommended)
- An MCP-compatible client (Claude Desktop, Claude Code, Cursor, or VS Code)

## 🔑 Getting Started with tny.dev

### 1. Get Your API Key (30 seconds)
Visit [tny.dev](https://www.tny.dev) → Sign up → [Account Settings](https://www.tny.dev/account) → Create API Key

### 2. Choose Your Plan

| Plan | Price | Rate Limit | Best For |
|------|-------|------------|----------|
| **Free** | $0 | 50/hour | Testing & personal projects |
| **Developer** | $9/mo | 500/hour | AI agents & automation |

### 3. Developer Plan Benefits
- ✅ **10x more requests** - Handle bursty AI traffic
- ✅ **Custom domains** - Use your own branded URLs  
- ✅ **Custom slugs** - Create memorable short links
- ✅ **Bulk operations** - Process up to 100 URLs at once
- ✅ **Webhooks** - Real-time event notifications
- ✅ **Multiple API keys** - Separate keys for different environments

## 🌐 Custom Domains (Developer Tier)

To use custom domains with the MCP server:

1. **Add a Custom Domain**: In your tny.dev account, navigate to the Domains section and add your custom domain
2. **Verify Domain**: Complete the DNS verification process
3. **Get Domain ID**: Once verified, copy your domain ID (format: `dom_xxxxx`)
4. **Configure MCP Server**: Either:
   - Set `TNY_DEV_DEFAULT_DOMAIN_ID` environment variable for global default
   - Pass `domainId` parameter when creating short URLs
   - Tool parameter takes precedence over environment variable

## 📦 Installation

### Local Setup

1. Clone or download this repository
2. Navigate to the `mcp-server` directory:
   ```bash
   cd mcp-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the TypeScript code:
   ```bash
   npm run build
   ```
5. Create your environment file:
   ```bash
   cp .env.example .env
   ```
6. Edit `.env` and add your tny.dev API key:
   ```
   TNY_DEV_API_KEY=your_api_key_here
   
   # Optional: For custom domain support (Developer tier)
   TNY_DEV_DEFAULT_DOMAIN_ID=your_domain_id_here
   ```

## 🔧 Installation Methods

### 🖥️ Claude Desktop Extension (Recommended)

The easiest way to use tny.dev in Claude Desktop:

1. Download the latest `tnydev-mcp.dxt` from [Releases](https://github.com/specstoryai/tnydev-mcp/releases)
2. Open Claude Desktop
3. Drag and drop the `.dxt` file into Claude Desktop
4. Configure your API key in the extension settings
5. Done! No terminal or JSON editing required

**Benefits:**
- ✅ One-click installation
- ✅ Automatic updates
- ✅ Secure API key storage
- ✅ User-friendly configuration UI

### 🛠️ Manual MCP Configuration

For advanced users who prefer manual configuration:

<details>
<summary><b>📱 Claude Desktop (Manual)</b></summary>

#### Using npx (Recommended - once published)

Edit your Claude Desktop configuration:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

**Alternative**: Use .env file instead of hardcoding the API key:
```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["dist/index.js"],
      "cwd": "/absolute/path/to/tinylink/mcp-server"
    }
  }
}
```

Restart Claude Desktop for changes to take effect.
</details>

<details>
<summary><b>🎯 Cursor</b></summary>

#### Using npx (Recommended - once published)

Cursor supports multiple configuration methods:

**Method 1: Project-specific configuration**

Create `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

**Method 2: VS Code settings**

Add to your `.vscode/settings.json` or User Settings:

```json
{
  "cursor.mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

**Note:** Restart Cursor after making configuration changes.
</details>

<details>
<summary><b>🌊 Windsurf</b></summary>

#### Using npx (Recommended - once published)

Add to your Windsurf settings:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>🤖 Cline (VS Code Extension)</b></summary>

#### Using npx (Recommended - once published)

Add to your VSCode settings (`.vscode/settings.json` or User Settings):

```json
{
  "cline.mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### Local installation

```json
{
  "cline.mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

For Cursor specifically, you can also create `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>💻 VS Code (with Continue, Codeqwen, or other AI extensions)</b></summary>

#### Using npx (Recommended - once published)

Add to your VS Code settings (`settings.json`):

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

**Note:** The exact configuration key may vary by extension:
- Continue: `continue.mcpServers`
- Codeqwen: `codeqwen.mcpServers`
- Check your extension's documentation for the correct key

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>⚡ Zed</b></summary>

#### Using npx (Recommended - once published)

Add to your Zed settings:

```json
{
  "language_models": {
    "mcp": {
      "servers": {
        "tny-dev": {
          "command": "npx",
          "args": ["-y", "@specstory/tnydev-mcp"],
          "env": {
            "TNY_DEV_API_KEY": "your_api_key_here"
          }
        }
      }
    }
  }
}
```

#### Local installation

```json
{
  "language_models": {
    "mcp": {
      "servers": {
        "tny-dev": {
          "command": "node",
          "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
          "env": {
            "TNY_DEV_API_KEY": "your_api_key_here"
          }
        }
      }
    }
  }
}
```
</details>

<details>
<summary><b>🚀 Claude Code</b></summary>

#### Using npx (Recommended - once published)

Add as a locally-scoped server using the CLI:

```bash
claude mcp add tny-dev -s local -e TNY_DEV_API_KEY=your_api_key_here -- npx -y @specstory/tnydev-mcp
```

Or create a `.mcp.json` file in your project root:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### Local installation

```bash
claude mcp add tny-dev -s local -e TNY_DEV_API_KEY=your_api_key_here -- node /absolute/path/to/tinylink/mcp-server/dist/index.js
```
</details>

<details>
<summary><b>🤖 Roo Coder</b></summary>

#### Using npx (Recommended - once published)

Add to your Roo Coder settings:

```json
{
  "roo.mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

#### Local installation

```json
{
  "roo.mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>🎨 Void</b></summary>

#### Using npx (Recommended - once published)

Add to your Void configuration:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "your_domain_id_here"  // Optional
      }
    }
  }
}
```

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>🛠️ Other MCP Clients</b></summary>

#### Using npx (Recommended - once published)

Most MCP clients support a similar configuration format:

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### Local installation

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["/absolute/path/to/tinylink/mcp-server/dist/index.js"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

Check your client's documentation for the specific configuration file location and format.
</details>

### 🔒 Security Best Practices

**Important**: Never commit configuration files containing API keys to version control.

**Recommended approaches:**

1. **Environment Variables** (Most Secure)
   ```bash
   export TNY_DEV_API_KEY="your_api_key_here"
   export TNY_DEV_DEFAULT_DOMAIN_ID="your_domain_id_here"
   ```

2. **Secure Key Storage**
   - Use a password manager for API keys
   - Use system keychain/credential manager
   - Use environment-specific `.env` files (never commit)

3. **Git Security**
   ```bash
   # Add to .gitignore
   .env
   .env.local
   **/claude_desktop_config.json
   **/.cursor/mcp.json
   .vscode/settings.json
   ```

4. **Key Rotation**
   - Regularly rotate API keys
   - Use different keys for different environments
   - Monitor key usage in your tny.dev dashboard

## 💡 AI Agent Use Cases

See how AI assistants naturally use tny.dev in real conversations – no code required:

### Traditional API Approach vs. MCP Server

<table>
<tr>
<td width="50%">

**❌ Traditional API Approach**

```python
# Step 1: Write code to call API
import requests

def shorten_url(url):
    response = requests.post(
        'https://www.tny.dev/api/v1/shorten',
        headers={
            'X-API-Key': 'tnyl_your_api_key_here',
            'Content-Type': 'application/json'
        },
        json={'url': url}
    )
    return response.json()

# Step 2: Process each link manually
links = [...] # Your list of links
shortened = [shorten_url(link) for link in links]

# Step 3: Format and organize results
# More code needed...
```

</td>
<td width="50%">

**✅ With tny.dev MCP Server**

💬 **You**: "I'm writing a blog post about React hooks. Please shorten these documentation links and organize them by hook type."

🤖 **Claude**: "I'll shorten those React documentation links and organize them by hook type for you..."

*[Automatically processes all links using MCP]*

</td>
</tr>
</table>

### Common AI Agent Workflows

#### 📊 Campaign Analytics
> "Show me which links from yesterday's campaign got the most clicks"

#### ⚡ Bulk Processing
> "Shorten all the URLs in this documentation and create a table of contents"

#### 🛡️ Link Management
> "Update all campaign links to use our new landing page"

#### 🎯 Smart Organization
> "Group these product links by category and create trackable short URLs for each"

## 🛠️ Available Tools

For detailed API documentation, visit the [tny.dev API Docs](https://www.tny.dev/api-docs).

### 1. shorten_url
Create a shortened URL with support for custom domains and slugs (Developer tier feature).

**Parameters:**
- `url` (required): The URL to shorten
- `customSlug` (optional): Custom slug for the short URL (3-50 chars, alphanumeric + hyphens/underscores) - requires domainId
- `domainId` (optional): Domain ID for custom domain usage - required when using customSlug

**Examples:**
```
# Basic usage
Use the shorten_url tool to create a short link for https://example.com/very/long/url

# With custom domain and slug
Use the shorten_url tool to create a short link for https://example.com with customSlug "my-link" and domainId "dom_123"

# With custom domain only (random slug)
Use the shorten_url tool to create a short link for https://example.com with domainId "dom_123"
```

**Note:** Custom domains and slugs require a Developer tier subscription. You can configure a default domain ID using the `TNY_DEV_DEFAULT_DOMAIN_ID` environment variable.

### 2. get_link_analytics
Get click analytics for a shortened link.

**Parameters:**
- `slug` (required): The slug of the shortened URL

**Example:**
```
Get analytics for the link with slug "abc123"
```

### 3. list_links
List all shortened links created with your API key.

**Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Number of links per page (1-100, default: 20)

**Example:**
```
Show me all my shortened links
```

## ⚡ Rate Limits & Pricing

### Simple, Transparent Pricing

| | Free | Developer |
|---|---|---|
| **Monthly Cost** | $0 | $9 |
| **Hourly Rate Limit** | 50/hour | 500/hour |
| **Effective Cost** | - | $0.018/request |
| **Compared to Bitly** | - | **95% cheaper** |

> 💡 **Pro Tip**: The server displays remaining quota in each response to help you track usage in real-time.

## ⚙️ Configuration Examples

<details>
<summary><b>Basic Configuration</b></summary>

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
</details>

<details>
<summary><b>With Custom Domain (Developer Tier)</b></summary>

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "your_api_key_here",
        "TNY_DEV_DEFAULT_DOMAIN_ID": "dom_xxxxx"
      }
    }
  }
}
```
</details>

<details>
<summary><b>Development/Testing Configuration</b></summary>

```json
{
  "mcpServers": {
    "tny-dev": {
      "command": "node",
      "args": ["dist/index.js"],
      "cwd": "/path/to/tinylink/mcp-server",
      "env": {
        "DEBUG": "true",
        "TNY_DEV_BASE_URL": "https://staging.tny.dev/api/v1"  // Optional staging URL
      }
    }
  }
}
```
</details>

<details>
<summary><b>Multiple Environments</b></summary>

```json
{
  "mcpServers": {
    "tny-dev-prod": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "prod_key_here"
      }
    },
    "tny-dev-test": {
      "command": "npx",
      "args": ["-y", "@specstory/tnydev-mcp"],
      "env": {
        "TNY_DEV_API_KEY": "test_key_here",
        "TNY_DEV_BASE_URL": "https://staging.tny.dev/api/v1"
      }
    }
  }
}
```
</details>

## 🔨 Development

### Prerequisites for Development
- Node.js 18+
- npm or yarn
- TypeScript knowledge

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/tinylink.git
cd tinylink/mcp-server

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your API key to .env
echo "TNY_DEV_API_KEY=your_key_here" >> .env

# Build the project
npm run build
```

### Development Commands

```bash
# Run in development mode with auto-reload
npm run dev

# Build the project
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Start the built server
npm start
```

### Testing the Server

```bash
# Test manually with debug output
DEBUG=true TNY_DEV_API_KEY=your_key node dist/index.js

# Test with a custom base URL
TNY_DEV_BASE_URL=https://staging.tny.dev/api/v1 npm start
```

### Project Structure

```
mcp-server/
├── src/
│   ├── index.ts          # Main server entry point
│   ├── client.ts         # API client implementation
│   ├── types.ts          # TypeScript type definitions
│   └── handlers/         # Tool handlers
│       ├── shorten.ts    # URL shortening handler
│       ├── analytics.ts  # Analytics handler
│       └── links.ts      # Links listing handler
├── dist/                 # Compiled JavaScript (generated)
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── .env.example          # Environment template
└── README.md            # This file
```

## 🐛 Troubleshooting

<details>
<summary><b>Common Issues for All Clients</b></summary>

### Server Not Appearing in Client
- ✅ Ensure the configuration file is valid JSON (check for trailing commas)
- ✅ Verify the absolute path to the server is correct
- ✅ Check that Node.js is installed and in your system PATH
- ✅ Restart your client application after configuration changes
- ✅ Enable debug mode: `DEBUG=true` in environment

### API Key Issues
- ✅ Verify your API key is correctly set in the configuration or `.env` file
- ✅ Check that your API key is active in your [Account](https://www.tny.dev/account) settings
- ✅ Ensure there are no extra spaces or quotes around the API key
- ✅ Test the server manually: `TNY_DEV_API_KEY=your_key node dist/index.js`

### Connection Errors
- ✅ Run `npm run build` to ensure the server is compiled
- ✅ Check for error messages in the client's developer console
- ✅ Try running the server standalone to see error output
- ✅ Verify Node.js version is 18 or higher: `node --version`

### Rate Limit Errors
- ℹ️ The server displays remaining quota in each response
- ℹ️ Free tier: 50 requests/hour, Developer tier: 500 requests/hour
- ℹ️ Rate limits reset every hour from first request
- ℹ️ Consider upgrading at [tny.dev Plans](https://www.tny.dev/plans)
</details>

<details>
<summary><b>Claude Desktop Specific</b></summary>

### Configuration File Location
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Common Issues
- **Server not loading**: Check Claude Desktop logs in Console.app (macOS) or Event Viewer (Windows)
- **Permission denied**: Ensure Claude Desktop has permission to execute Node.js
- **Path issues**: Use absolute paths, avoid `~` or environment variables in paths
</details>

<details>
<summary><b>Cursor Specific</b></summary>

### Configuration Priority
1. `.cursor/mcp.json` (project-specific)
2. VS Code User Settings
3. VS Code Workspace Settings

### Common Issues
- **Multiple configs**: Check all possible config locations
- **Extension conflicts**: Disable other MCP extensions temporarily
- **Reload required**: Use Command Palette > "Developer: Reload Window"
</details>

<details>
<summary><b>VS Code Extensions Specific</b></summary>

### Finding the Right Config Key
- Continue: `continue.mcpServers`
- Codeqwen: `codeqwen.mcpServers`
- Cline: `cline.mcpServers`
- Check extension docs for exact key

### Common Issues
- **Settings sync**: Disable settings sync temporarily if having issues
- **Extension updates**: Ensure extensions are up to date
- **Workspace trust**: Ensure workspace is trusted
</details>

<details>
<summary><b>Platform-Specific Issues</b></summary>

### macOS/Linux
- ✅ Ensure execute permissions: `chmod +x dist/index.js`
- ✅ Check `.env` file permissions: `chmod 600 .env`
- ✅ Use full paths, not `~/` in configurations

### Windows
- ✅ Use forward slashes or double backslashes: `C:/path/to/server` or `C:\\path\\to\\server`
- ✅ Run as Administrator if permission issues persist
- ✅ Ensure Node.js is in system PATH, not just user PATH
- ✅ If using WSL, use Windows paths in config, not WSL paths

### Docker/Dev Containers
- ✅ Mount the MCP server directory as a volume
- ✅ Ensure Node.js is installed in the container
- ✅ Use container paths in configuration
</details>

## 📄 License

MIT

## 📦 Downloads & Releases

### Desktop Extension (.dxt)
- **Latest Release**: [Download tnydev-mcp.dxt](https://github.com/specstoryai/tnydev-mcp/releases/latest/download/tnydev-mcp.dxt)
- **All Releases**: [GitHub Releases](https://github.com/specstoryai/tnydev-mcp/releases)
- **Auto-Updates**: Extensions update automatically in Claude Desktop

### npm Package
- **Package**: [@specstory/tnydev-mcp](https://www.npmjs.com/package/@specstory/tnydev-mcp)
- **Install**: `npm install -g @specstory/tnydev-mcp`
- **Direct Use**: `npx @specstory/tnydev-mcp`

## 📚 Resources

### Documentation
- 📖 [tny.dev API Documentation](https://www.tny.dev/api-docs)
- 📖 [MCP Protocol Specification](https://modelcontextprotocol.io)
- 📖 [tny.dev Developer Portal](https://www.tny.dev/developers)

### Community
- 💬 [GitHub Discussions](https://github.com/specstoryai/tnydev-mcp/discussions)
- 🐛 [Report Issues](https://github.com/specstoryai/tnydev-mcp/issues)
- 🌟 [Feature Requests](https://github.com/specstoryai/tnydev-mcp/issues/new?labels=enhancement)

### Related Projects
- [tny.dev Web App](https://www.tny.dev)
- [tny.dev API Client Libraries](https://www.tny.dev/developers/libraries)
- [MCP Servers Directory](https://github.com/modelcontextprotocol/servers)

## 💬 Support

### Getting Help

| Issue Type | Where to Get Help |
|------------|-------------------|
| 🐛 MCP Server Issues | [GitHub Issues](https://github.com/specstoryai/tnydev-mcp/issues) |
| 🔑 API/Account Issues | [tny.dev Support](https://www.tny.dev/support) |
| 📱 Claude Desktop | [Claude Help Center](https://claude.ai/help) |
| 💻 Client-Specific | Check client's documentation |

### Quick Links
- **Status Page**: [status.tny.dev](https://status.tny.dev)
- **API Status**: Check the [tny.dev Status Page](https://status.tny.dev)
- **Account Dashboard**: [tny.dev/account](https://www.tny.dev/account)

## 🚀 Ready for Agent-First Development?

<div align="center">
  <h3>Get native AI integration with our first-party MCP server</h3>
  <p>Just $9/month for 500 requests/hour - <strong>95% cheaper than Bitly</strong></p>
  
  <a href="https://www.tny.dev/developers">
    <img src="https://img.shields.io/badge/Get%20Your%20API%20Key-→-purple?style=for-the-badge" alt="Get Your API Key">
  </a>
</div>

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [Model Context Protocol SDK](https://github.com/modelcontextprotocol/sdk)
- Powered by [tny.dev](https://www.tny.dev) - The API-first link shortener built for AI agents
- Compatible with [Claude](https://claude.ai) and other MCP clients
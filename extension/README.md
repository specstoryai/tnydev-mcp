# tny.dev Desktop Extension

The official Claude Desktop Extension for tny.dev URL shortener.

## Installation

1. **Download the Extension**
   - Get the latest `tnydev-mcp.dxt` from [Releases](https://github.com/specstoryai/tnydev-mcp/releases)
   - Or build it yourself with `npm run extension:build`

2. **Install in Claude Desktop**
   - Open Claude Desktop
   - Drag and drop the `.dxt` file into Claude Desktop
   - Or use File → Install Extension and select the `.dxt` file

3. **Configure Your API Key**
   - Click on the extension settings
   - Enter your tny.dev API key (get one at https://www.tny.dev/account)
   - Optionally configure custom domain ID and API base URL

## Features

### Available Tools

- **shorten_url** - Create shortened URLs with optional custom domains and slugs
- **get_link_analytics** - View detailed analytics for your links
- **list_links** - Browse all your shortened links

### Pre-configured Prompts

The extension includes helpful prompts to get you started:

- **Bulk Shorten** - "I have a list of URLs that I need to shorten..."
- **Campaign Links** - "I need to create shortened links for a marketing campaign..."
- **Link Report** - "Please generate a report of my most clicked links..."

## Configuration Options

### API Key (Required)
Your tny.dev API key. Get one from your [account settings](https://www.tny.dev/account).

### Default Domain ID (Optional)
If you have custom domains on the Developer plan, you can set a default domain ID here. Find your domain IDs in your [domains dashboard](https://www.tny.dev/domains).

### API Base URL (Optional)
Advanced users can override the API endpoint. Default is `https://www.tny.dev/api/v1`.

## Differences from npm Package

| Feature | Desktop Extension | npm Package |
|---------|------------------|-------------|
| Installation | One-click in Claude Desktop | Command line setup |
| Configuration | GUI settings | Environment variables |
| Updates | Automatic | Manual |
| API Key Storage | Secure, built-in | .env file |
| Target Users | Non-technical users | Developers |

## Building from Source

If you want to build the extension yourself:

```bash
# Clone the repository
git clone https://github.com/specstoryai/tnydev-mcp.git
cd tnydev-mcp

# Install dependencies
npm install

# Build the extension
npm run extension:build

# Output: tnydev-mcp.dxt
```

## Troubleshooting

### Extension Not Working
- Ensure you've entered a valid API key
- Check that you have an active internet connection
- Try reinstalling the extension

### API Key Issues
- Verify your API key at https://www.tny.dev/account
- Ensure your account is active
- Check rate limits (50/hour for free, 500/hour for Developer)

### Custom Domains Not Working
- Custom domains require the Developer plan
- Ensure your domain is verified
- Use the correct domain ID format: `dom_xxxxx`

## Support

- **Extension Issues**: [GitHub Issues](https://github.com/specstoryai/tnydev-mcp/issues)
- **API/Account Issues**: [tny.dev Support](https://www.tny.dev/support)
- **Claude Desktop Help**: [Claude Help Center](https://claude.ai/help)
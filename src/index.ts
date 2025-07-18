#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import * as dotenv from 'dotenv';
import { TnyDevClient } from './client.js';
import { handleShortenUrl, shortenUrlTool } from './handlers/shorten.js';
import { handleGetAnalytics, getAnalyticsTool } from './handlers/analytics.js';
import { handleListLinks, listLinksTool } from './handlers/links.js';

// Load environment variables only if not in Desktop Extension mode
if (process.env.TNY_DEV_DESKTOP_EXTENSION !== 'true') {
  dotenv.config();
}

// Debug logging
if (process.env.DEBUG || process.env.TNY_DEV_DESKTOP_EXTENSION) {
  console.error('[DEBUG] Starting tny.dev MCP server...');
  console.error('[DEBUG] Node version:', process.version);
  console.error('[DEBUG] Working directory:', process.cwd());
  console.error('[DEBUG] Script location:', import.meta.url);
  console.error('[DEBUG] Environment check:');
  console.error('  - TNY_DEV_API_KEY:', process.env.TNY_DEV_API_KEY ? 'Set (hidden)' : 'Not set');
  console.error('  - TNY_DEV_DESKTOP_EXTENSION:', process.env.TNY_DEV_DESKTOP_EXTENSION);
  console.error('  - TNY_DEV_DEFAULT_DOMAIN_ID:', process.env.TNY_DEV_DEFAULT_DOMAIN_ID || 'Not set');
  console.error('  - TNY_DEV_BASE_URL:', process.env.TNY_DEV_BASE_URL || 'Not set');
}

// Validate API key
const apiKey = process.env.TNY_DEV_API_KEY;
const isDesktopExtension = process.env.TNY_DEV_DESKTOP_EXTENSION === 'true';

if (!apiKey) {
  if (isDesktopExtension) {
    // In Desktop Extension, this error will be shown in Claude Desktop
    console.error('Error: API key not provided. Please configure your tny.dev API key in the extension settings.');
    console.error('Get your API key at: https://www.tny.dev/account');
  } else {
    // For CLI/npm usage, maintain existing behavior
    console.error('Error: TNY_DEV_API_KEY environment variable is required');
    console.error('Please set it in your .env file or environment');
    process.exit(1);
  }
}

if (apiKey && process.env.DEBUG) {
  console.error('[DEBUG] API key loaded successfully');
}

// Optional default domain ID
const defaultDomainId = process.env.TNY_DEV_DEFAULT_DOMAIN_ID;
if (defaultDomainId && process.env.DEBUG) {
  console.error('[DEBUG] Default domain ID loaded:', defaultDomainId);
}

// Optional base URL override
const baseUrl = process.env.TNY_DEV_BASE_URL;

// Create API client only if we have an API key
const client = apiKey ? new TnyDevClient({ apiKey, baseUrl }) : null;

// Create MCP server
const server = new Server(
  {
    name: 'tny-dev-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register handlers
server.setRequestHandler(ListToolsRequestSchema, () => {
  if (process.env.DEBUG) {
    console.error('[DEBUG] Received tools/list request');
  }
  return {
    tools: [
      shortenUrlTool,
      getAnalyticsTool,
      listLinksTool,
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    // Check if client is available
    if (!client) {
      throw new McpError(
        ErrorCode.InvalidRequest,
        'API key not configured. Please set your tny.dev API key in the extension settings.'
      );
    }

    switch (name) {
      case 'shorten_url':
        return await handleShortenUrl(args, client);
      
      case 'get_link_analytics':
        return await handleGetAnalytics(args, client);
      
      case 'list_links':
        return await handleListLinks(args, client);
      
      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
    }
  } catch (error) {
    if (error instanceof McpError) {
      throw error;
    }
    
    throw new McpError(
      ErrorCode.InternalError,
      error instanceof Error ? error.message : 'Unknown error occurred'
    );
  }
});

// Start the server
async function main(): Promise<void> {
  if (process.env.DEBUG) {
    console.error('[DEBUG] Initializing stdio transport...');
  }
  
  const transport = new StdioServerTransport();
  
  if (process.env.DEBUG) {
    console.error('[DEBUG] Connecting server to transport...');
  }
  
  await server.connect(transport);
  console.error('tny.dev MCP server running on stdio');
  
  if (process.env.DEBUG) {
    console.error('[DEBUG] Server ready and listening for requests');
  }
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
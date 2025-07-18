#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Testing tny.dev MCP Server...\n');

// Start the MCP server
const serverPath = join(__dirname, 'dist', 'index.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env }
});

// Handle server errors
server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString());
});

// Test 1: List tools
console.log('📋 Test 1: Listing available tools...');
const listToolsRequest = {
  jsonrpc: '2.0',
  method: 'tools/list',
  id: 1,
  params: {}
};

server.stdin.write(JSON.stringify(listToolsRequest) + '\n');

// Read response
server.stdout.once('data', (data) => {
  const lines = data.toString().split('\n');
  for (const line of lines) {
    if (line.trim() && line.includes('jsonrpc')) {
      console.log('Response:', JSON.stringify(JSON.parse(line), null, 2));
      
      // Test 2: Call shorten_url tool
      console.log('\n🔗 Test 2: Testing URL shortening...');
      const shortenRequest = {
        jsonrpc: '2.0',
        method: 'tools/call',
        id: 2,
        params: {
          name: 'shorten_url',
          arguments: {
            url: 'https://github.com/specstoryai/tinylink'
          }
        }
      };
      
      server.stdin.write(JSON.stringify(shortenRequest) + '\n');
      
      server.stdout.once('data', (data2) => {
        const lines2 = data2.toString().split('\n');
        for (const line2 of lines2) {
          if (line2.trim() && line2.includes('jsonrpc')) {
            console.log('Response:', JSON.stringify(JSON.parse(line2), null, 2));
            
            // Clean exit
            console.log('\n✅ Tests completed!');
            server.kill();
            process.exit(0);
          }
        }
      });
    }
  }
});

// Timeout handler
setTimeout(() => {
  console.error('\n❌ Test timed out');
  server.kill();
  process.exit(1);
}, 10000);
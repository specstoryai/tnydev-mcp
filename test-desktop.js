#!/usr/bin/env node

// Test script to simulate Desktop Extension environment
process.env.TNY_DEV_API_KEY = process.argv[2] || 'test_key';
process.env.TNY_DEV_DESKTOP_EXTENSION = 'true';
process.env.DEBUG = 'true';

console.log('Testing Desktop Extension mode...');
console.log('API Key:', process.env.TNY_DEV_API_KEY ? 'Set' : 'Not set');

// Import and run the server
import('./dist/index.js').then(() => {
  console.log('Server imported successfully');
}).catch((error) => {
  console.error('Failed to import server:', error);
});
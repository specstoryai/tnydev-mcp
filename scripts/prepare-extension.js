#!/usr/bin/env node

/**
 * Prepare script for Desktop Extension development
 * Validates the extension manifest and checks requirements
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function validateExtension() {
  console.log('🔍 Validating Desktop Extension configuration...\n');

  const errors = [];
  const warnings = [];

  try {
    // Check manifest exists
    const manifestPath = path.join(rootDir, 'extension', 'manifest.json');
    const manifestContent = await fs.readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestContent);

    console.log(`📋 Extension: ${manifest.display_name || manifest.name}`);
    console.log(`📌 Version: ${manifest.version}`);
    console.log(`👤 Author: ${manifest.author}\n`);

    // Validate required fields
    const requiredFields = ['dxt_version', 'name', 'version', 'author', 'server'];
    for (const field of requiredFields) {
      if (!manifest[field]) {
        errors.push(`Missing required field: ${field}`);
      }
    }

    // Check icon
    const iconPath = path.join(rootDir, 'extension', 'icon.png');
    try {
      const stats = await fs.stat(iconPath);
      console.log(`🎨 Icon found (${(stats.size / 1024).toFixed(1)} KB)`);
      
      // Note: Can't easily check dimensions without image library
      warnings.push('Ensure icon.png is 512x512 pixels');
    } catch {
      errors.push('Missing icon.png - please add a 512x512 PNG icon');
    }

    // Check dist folder
    const distPath = path.join(rootDir, 'dist');
    try {
      await fs.access(distPath);
      const files = await fs.readdir(distPath);
      console.log(`📦 Built files: ${files.length} files in dist/`);
    } catch {
      errors.push('Missing dist/ folder - run "npm run build" first');
    }

    // Validate tools
    if (manifest.tools && manifest.tools.length > 0) {
      console.log(`🛠️  Tools: ${manifest.tools.length} tools defined`);
    }

    // Validate user config
    if (manifest.user_config) {
      const configs = Object.keys(manifest.user_config);
      console.log(`⚙️  User configs: ${configs.join(', ')}`);
      
      // Check for required configs
      for (const [key, config] of Object.entries(manifest.user_config)) {
        if (config.required && !config.default) {
          console.log(`  - ${key}: Required (no default)`);
        }
      }
    }

    // Report results
    console.log('\n' + '='.repeat(50));
    
    if (errors.length > 0) {
      console.log('\n❌ Errors:');
      errors.forEach(err => console.log(`  - ${err}`));
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warn => console.log(`  - ${warn}`));
    }
    
    if (errors.length === 0) {
      console.log('\n✅ Extension is ready to build!');
      console.log('   Run: npm run build:extension');
    } else {
      console.log('\n❌ Please fix errors before building.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
}

// Run validation
validateExtension().catch(console.error);
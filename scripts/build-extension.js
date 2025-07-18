#!/usr/bin/env node

/**
 * Build script for creating tny.dev Desktop Extension (.dxt)
 * This script packages the MCP server as a Claude Desktop Extension
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createWriteStream } from 'fs';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function buildExtension() {
  console.log('🚀 Building tny.dev Desktop Extension...\n');

  try {
    // 1. Clean previous builds
    const extensionBuildDir = path.join(rootDir, 'extension-build');
    await fs.rm(extensionBuildDir, { recursive: true, force: true });
    await fs.mkdir(extensionBuildDir, { recursive: true });

    // 2. Build TypeScript
    console.log('📦 Building TypeScript...');
    execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

    // 3. Copy necessary files
    console.log('\n📋 Copying files...');
    
    // Copy manifest
    await fs.copyFile(
      path.join(rootDir, 'extension', 'manifest.json'),
      path.join(extensionBuildDir, 'manifest.json')
    );
    console.log('  ✓ manifest.json');

    // Copy icon (if exists)
    const iconPath = path.join(rootDir, 'extension', 'icon.png');
    try {
      await fs.access(iconPath);
      await fs.copyFile(iconPath, path.join(extensionBuildDir, 'icon.png'));
      console.log('  ✓ icon.png');
    } catch {
      console.log('  ⚠️  icon.png not found - please add a 512x512 PNG icon');
    }

    // Copy dist folder
    await fs.cp(
      path.join(rootDir, 'dist'),
      path.join(extensionBuildDir, 'dist'),
      { recursive: true }
    );
    console.log('  ✓ dist/');

    // 4. Install production dependencies
    console.log('\n📚 Installing production dependencies...');
    
    // Create a temporary package.json with only production deps
    const packageJson = JSON.parse(
      await fs.readFile(path.join(rootDir, 'package.json'), 'utf-8')
    );
    
    const prodPackageJson = {
      name: packageJson.name,
      version: packageJson.version,
      type: packageJson.type,
      dependencies: packageJson.dependencies
    };
    
    await fs.writeFile(
      path.join(extensionBuildDir, 'package.json'),
      JSON.stringify(prodPackageJson, null, 2)
    );
    
    execSync('npm install --production', { 
      cwd: extensionBuildDir, 
      stdio: 'inherit' 
    });

    // 5. Create .dxt archive
    console.log('\n📦 Creating .dxt archive...');
    const outputPath = path.join(rootDir, 'tnydev-mcp.dxt');
    
    await createZipArchive(extensionBuildDir, outputPath);
    
    // 6. Clean up
    await fs.rm(extensionBuildDir, { recursive: true, force: true });

    // 7. Report success
    const stats = await fs.stat(outputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log('\n✅ Extension built successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📏 Size: ${sizeMB} MB`);
    console.log('\n🎉 Ready to install in Claude Desktop!');

  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

function createZipArchive(sourceDir, outputPath) {
  return new Promise((resolve, reject) => {
    const output = createWriteStream(outputPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => resolve());
    archive.on('error', (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

// Run the build
buildExtension().catch(console.error);
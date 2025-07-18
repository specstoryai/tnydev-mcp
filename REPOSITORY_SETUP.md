# 🚀 Repository Setup Guide for tnydev-mcp

This guide will walk you through creating a new repository for the tny.dev MCP server and publishing it to npm.

## 📋 Prerequisites

- GitHub account with access to `specstoryai` organization
- npm account (create at https://www.npmjs.com/signup)
- Access to `@specstory` npm organization
- Node.js 18+ installed locally
- Git configured with your GitHub credentials

## 🗂️ Step 1: Create the New Repository

### 1.1 Create Repository on GitHub

1. Go to https://github.com/organizations/specstoryai/repositories/new
2. Repository settings:
   - **Repository name**: `tnydev-mcp`
   - **Description**: "Official MCP server for tny.dev - The API-first link shortener built for AI agents"
   - **Public** repository
   - **Add a README file**: No (we'll push our own)
   - **Add .gitignore**: No (we have one)
   - **Choose a license**: MIT License

3. Click "Create repository"

### 1.2 Prepare Local Repository

```bash
# Navigate to the mcp-server directory
cd /Users/gdc/tinylink/mcp-server

# Remove existing git history (if you want a clean history)
rm -rf .git

# Initialize new repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: tny.dev MCP server

- First-party MCP server for tny.dev URL shortening service
- Support for custom domains and slugs
- Compatible with Claude, Cursor, and other MCP clients
- Comprehensive documentation and examples"

# Add remote origin
git remote add origin https://github.com/specstoryai/tnydev-mcp.git

# Push to main branch
git branch -M main
git push -u origin main
```

## 📦 Step 2: Prepare for npm Publishing

### 2.1 Update package.json

Update the following fields in `package.json`:

```json
{
  "name": "@specstory/tnydev-mcp",
  "version": "1.0.0",
  "description": "Official MCP server for tny.dev - The API-first link shortener built for AI agents",
  "author": "SpecStory AI <support@tny.dev>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/specstoryai/tnydev-mcp.git"
  },
  "homepage": "https://github.com/specstoryai/tnydev-mcp#readme",
  "bugs": {
    "url": "https://github.com/specstoryai/tnydev-mcp/issues"
  },
  "keywords": [
    "mcp",
    "model-context-protocol",
    "url-shortener",
    "tny.dev",
    "ai-agents",
    "claude",
    "cursor",
    "link-management",
    "api"
  ],
  "files": [
    "dist",
    "README.md",
    "LICENSE",
    "package.json"
  ],
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

### 2.2 Create .npmignore

Create `.npmignore` to exclude unnecessary files from the npm package:

```
# Source files (only ship compiled)
src/
tsconfig.json

# Development files
.env
.env.example
*.log
node_modules/
.git/
.gitignore

# Documentation files
REPOSITORY_SETUP.md
CONTRIBUTING.md
.github/

# Test files
*.test.ts
*.spec.ts
coverage/
.nyc_output/

# IDE files
.vscode/
.idea/
*.swp
*.swo
.DS_Store

# Build artifacts
*.tsbuildinfo
```

### 2.3 Set up npm Authentication

```bash
# Login to npm
npm login

# When prompted, enter:
# Username: your-npm-username
# Password: your-npm-password
# Email: your-email@example.com
# OTP: (if 2FA is enabled)
```

### 2.4 Configure npm Organization Access

1. Go to https://www.npmjs.com/settings/specstory/packages
2. If the @specstory organization doesn't exist:
   - Create it at https://www.npmjs.com/org/create
   - Organization name: `specstory`
   - Invite team members as needed
3. Ensure you have publish permissions for the @specstory scope

## 🔄 Step 3: Set up GitHub Actions for Automated Publishing

### How the Workflow Works

The GitHub Actions workflow will automatically publish to npm when:
1. **You push a tag** starting with `v` (e.g., `v1.0.0`, `v1.0.1`)
2. **You manually trigger** the workflow from the Actions tab

**Note**: Regular commits and pushes will NOT trigger publishing. This prevents accidental releases.

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to publish (e.g., 1.0.1)'
        required: true

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test --if-present
      
      - name: Build
        run: npm run build
      
      - name: Update version (if manual)
        if: github.event_name == 'workflow_dispatch'
        run: |
          npm version ${{ github.event.inputs.version }} --no-git-tag-version
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add package.json package-lock.json
          git commit -m "chore: bump version to ${{ github.event.inputs.version }}"
          git tag v${{ github.event.inputs.version }}
          git push origin main --tags
      
      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 3.1 Set up npm Token

1. Go to https://www.npmjs.com/settings/your-username/tokens
2. Click "Generate New Token"
3. Select "Automation" token type
4. Copy the token

### 3.2 Add Token to GitHub Secrets

1. Go to https://github.com/specstoryai/tnydev-mcp/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Paste your npm token
5. Click "Add secret"

## 📝 Step 4: Create Supporting Files

### 4.1 Create LICENSE file

```
MIT License

Copyright (c) 2024 SpecStory AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 4.2 Create CONTRIBUTING.md

```markdown
# Contributing to tnydev-mcp

We love your input! We want to make contributing to tnydev-mcp as easy and transparent as possible.

## Development Process

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Code Style

- Use TypeScript
- Follow existing code style
- Run `npm run lint` before committing

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
```

## 🚀 Step 5: First npm Publish

### 5.1 Manual First Publish

```bash
# Ensure you're in the mcp-server directory
cd /Users/gdc/tinylink/mcp-server

# Clean install
rm -rf node_modules package-lock.json
npm install

# Build the project
npm run build

# Run a test publish (dry run)
npm publish --dry-run

# If everything looks good, publish for real
npm publish --access public
```

### 5.2 Verify Publication

1. Check package at https://www.npmjs.com/package/@specstory/tnydev-mcp
2. Test installation: `npx @specstory/tnydev-mcp`

## 📋 Step 6: Post-Setup Tasks

### 6.1 Update GitHub Repository Settings

1. Go to Settings → General
2. Features:
   - ✅ Issues
   - ✅ Discussions (optional)
   - ❌ Wiki (use README instead)
   - ❌ Projects (unless needed)
3. Pull Requests:
   - ✅ Allow merge commits
   - ✅ Allow squash merging
   - ✅ Allow rebase merging
   - ✅ Automatically delete head branches

### 6.2 Create Initial GitHub Release

#### Understanding Git Tags

Tags are used to trigger the automated npm publishing workflow. Here's how to create and push tags:

```bash
# Create a tag for version 1.0.0
git tag v1.0.0

# Push the tag to GitHub (this triggers the publish workflow)
git push origin v1.0.0

# Alternative: Push all tags at once
git push origin --tags

# To see all existing tags
git tag -l

# To delete a tag locally (if you made a mistake)
git tag -d v1.0.0

# To delete a tag from GitHub (if you need to redo)
git push origin --delete v1.0.0
```

**Important**: Only push tags when you're ready to publish to npm, as this will trigger the automated workflow!

Then on GitHub:
1. Go to https://github.com/specstoryai/tnydev-mcp/releases/new
2. Choose tag: v1.0.0
3. Release title: "v1.0.0 - Initial Release"
4. Description: Include key features and installation instructions
5. Click "Publish release"

### 6.3 Update Original Repository

In the original tinylink repository, update references:

1. Update any documentation pointing to the MCP server
2. Consider adding a note that the MCP server has moved
3. Update CI/CD if it references the MCP server

## 🎉 Complete!

Your MCP server is now:
- ✅ In its own repository at https://github.com/specstoryai/tnydev-mcp
- ✅ Published to npm as @specstory/tnydev-mcp
- ✅ Available as Claude Desktop Extension (.dxt)
- ✅ Set up with automated publishing via GitHub Actions
- ✅ Ready for community contributions

### Distribution Channels

1. **npm Package**: `@specstory/tnydev-mcp`
2. **Desktop Extension**: `tnydev-mcp.dxt` in GitHub Releases
3. **Direct Clone**: For development and customization

## 📚 Maintenance

### Version Updates

```bash
# Patch release (1.0.0 → 1.0.1)
npm version patch
git push origin main --tags

# Minor release (1.0.1 → 1.1.0)
npm version minor
git push origin main --tags

# Major release (1.1.0 → 2.0.0)
npm version major
git push origin main --tags
```

GitHub Actions will automatically publish to npm when tags are pushed.

### Manual Publishing

If needed, you can manually publish using the GitHub Actions workflow:
1. Go to Actions → Publish to npm
2. Click "Run workflow"
3. Enter the version number
4. Click "Run workflow"
# Contributing to tnydev-mcp

We love your input! We want to make contributing to tnydev-mcp as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issues](https://github.com/specstoryai/tnydev-mcp/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/specstoryai/tnydev-mcp/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Development Process

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- TypeScript knowledge

### Setup

```bash
# Clone the repository
git clone https://github.com/specstoryai/tnydev-mcp.git
cd tnydev-mcp

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your API key to .env
# Get one at https://www.tny.dev/account

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

# Fix linting issues
npm run lint:fix

# Run type checking
npm run typecheck

# Run tests (if available)
npm test
```

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

We follow conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

Example: `feat: add support for custom domains`

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Test manually with different MCP clients when possible

### Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable
2. Update the package.json version following [SemVer](http://semver.org/)
3. The PR will be merged once you have the sign-off of at least one maintainer

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions?

Feel free to open an issue with your question or reach out to the maintainers directly.
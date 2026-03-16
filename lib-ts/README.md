# {{ tmplr.project_name }}

# Table of Contents
Because there is so much to document, it has been broken up into multiple files. The following is a list of the documentation files for this library:
- [type-reference](./docs/type-reference.md) - A reference for all public types used in the library.

## Peer Dependencies

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump

## Testing Guide

This library uses [Jest](https://jestjs.io/) with [ts-jest](https://kulshekhar.github.io/ts-jest/) for testing TypeScript code.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

Test files are located in `./test` and any `__tests__` directories within the `./src` directory. Generally, test files should be named with a `.test.ts` suffix.
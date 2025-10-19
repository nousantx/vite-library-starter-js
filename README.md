# Vite Library Mode Starter

This repository contains a simple starter template for building a library using [Vite](https://vitejs.dev).

## Features

- ⚡️ [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- 🦾 [TypeScript](https://www.typescriptlang.org) - Strong typing for applications of any size
- 🧪 [Vitest](https://vitest.dev) - A Vite-native unit test framework
- 📦 ESM, CJS, and IIFE builds

## Installation

1. Clone this repository:

```bash
git clone https://github.com/nousantx/vite-lib-starter my-lib
```

2. Navigate to the project directory:

```bash
cd my-lib
```

3. Install dependencies:

```bash
pnpm install
```

> **Note:** The scripts in `package.json` use `pnpm`. You can use your preferred package manager, but you may need to update the scripts accordingly.

## Usage

This template produces three builds in the `dist` directory:

- `index.es.js`: An ES module build, suitable for use with modern bundlers like Vite, Rollup, or Webpack.
- `index.cjs.js`: A CommonJS build, suitable for use in Node.js environments.
- `index.iife.js`: An IIFE build, suitable for direct use in the browser via a `<script>` tag.

### With a bundler

```javascript
// ES module
import { yourExport } from 'my-cool-pkg'

// CommonJS
const { yourExport } = require('my-cool-pkg')
```

### In the browser

```html
<script src="https://unpkg.com/my-cool-pkg"></script>
<script>
  // The IIFE build exposes the library on the global `Module` object.
  Module.yourExport()
</script>
```

## Development

The following scripts are available for development:

- `pnpm dev`: Starts Vite in watch mode, rebuilding the library on file changes.
- `pnpm build`: Creates a development build of the library.
- `pnpm build:prod`: Creates a production build of the library, including type checking, minification, and type declarations.
- `pnpm test`: Runs the test suite once.
- `pnpm test:watch`: Runs the test suite in watch mode.

## Configuration

The library's name and output file names can be configured in `vite.config.ts`:

```typescript
// vite.config.ts
const name = 'Module' // The name of the global variable for the IIFE build
const fileName = 'index' // The base name for the output files
```

## Publishing

1. Update the package information in `package.json` (name, version, description, etc.).
2. Build the library for production:

```bash
pnpm build:prod
```

3. Publish to npm:

```bash
npm publish
```

## Testing

This template uses [Vitest](https://vitest.dev) for unit testing. Test files are located in the `tests` directory.

- To run the tests once, use:

```bash
pnpm test
```

- To run the tests in watch mode, use:

```bash
pnpm test:watch
```

And, Done! ✨

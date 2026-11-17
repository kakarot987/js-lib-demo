# js-lib-demo

A minimal Node.js application demonstrating consumption of [@mdevrani/my-js-lib](https://www.npmjs.com/package/@mdevrani/my-js-lib).

## Release prerequisite

**This branch requires the library's proposed version 1.0.1.** The library fixes are in [jsMathLibrary PR #1](https://github.com/kakarot987/jsMathLibrary/pull/1). Do not merge this demo PR until the release has been published and the demo lockfile updated.

After 1.0.1 is published:

```sh
npm install @mdevrani/my-js-lib@^1.0.1
npm ci
npm start
npm test
```

Commit the refreshed package metadata and lockfile before merging. The current lockfile still points to published version 1.0.0; no registry integrity hash for an unpublished version has been invented.

## Example

```js
import { add, subtract } from '@mdevrani/my-js-lib';

console.log(add(5, 3));
console.log(subtract(9, 4));
```

Expected console output:

```text
8
5
```

`npm test` verifies package-root arithmetic imports and division-by-zero behavior using Node.js built-in assertions.

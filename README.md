# jive

[![npm version](https://img.shields.io/npm/v/jive.svg)](https://www.npmjs.com/package/jive)

Jive is a lightweight utility library inspired by Lodash, implemented in TypeScript. It provides a collection of essential functions to simplify your JavaScript and TypeScript code.

# Installation

Install jive via npm:

```bash
    npm install jive
```

or with yarn:

```bash
    yarn install jive
```

### Usage

Jive functions can be imported individually or as a whole:

#### ES6 Imports:

```js
import { chunk, compact } from "jive";

const array = [1, 2, 3, 4, 5, 6];
const chunks = chunk(array, 2);
// [[1, 2], [3, 4], [5, 6]]

const compacted = compact([0, 1, false, 2, "", 3]);
// [1, 2, 3]
```

#### CommonJS Imports:

```js
const { debounce, throttle } = require("jive");

const debouncedFunc = debounce(() => {
  console.log("Debounced function call");
}, 200);

const throttledFunc = throttle(() => {
  console.log("Throttled function call");
}, 200);
```

## Available Functions

### Array Functions:

- `chunk(array, size)`: Splits an array into groups of the specified size.
- `compact(array)`: Removes falsey values from an array.
- `concat(array, ...values)`: Merges arrays and/or values into a new array.
- `difference(array, ...values)`: Returns the values from the first array not present in any of the other arrays.
- `differenceBy(array, ...values, iteratee)`: Same as difference, but accepts an iteratee to apply to each element for comparison.

### Collection Functions:

- `countBy(collection, iteratee)`: Groups elements of a collection based on the result of running each element through the iteratee, returning an object with counts.

### Function Utilities:

- `debounce(func, wait)`: Creates a debounced function that delays invoking func until after wait milliseconds have passed since the last invocation.
- `throttle(func, wait)`: Creates a throttled function that only invokes func at most once per every wait milliseconds.

### Lang Functions:

- `cloneDeep(value)`: Creates a deep copy of value, recursively copying all nested properties.
  npm install animex

**[`Back to top ⬆️`](#jive)**

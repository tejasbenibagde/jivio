# jivio

[![npm version](https://img.shields.io/npm/v/jivio.svg)](https://www.npmjs.com/package/jivio)

jivio is a lightweight utility library inspired by Lodash, implemented in TypeScript. It provides a collection of essential functions to simplify your JavaScript and TypeScript code.

# Installation

Install jivio via npm:

```bash
    npm install jivio
```

or with yarn:

```bash
    yarn install jivio
```

### Usage

jivio functions can be imported individually or as a whole:

#### ES6 Imports:

```js
import { chunk, compact } from "jivio";

const array = [1, 2, 3, 4, 5, 6];
const chunks = chunk(array, 2);
// [[1, 2], [3, 4], [5, 6]]

const compacted = compact([0, 1, false, 2, "", 3]);
// [1, 2, 3]
```

#### CommonJS Imports:

```js
const { debounce, throttle } = require("jivio");

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
- `flatten(array, depth)`: Flattens a nested array to a specified depth.
- `uniq(array)`: Removes duplicate values from an array.
- `zip(...arrays)`: Combines arrays into a single array of grouped elements.
- `unzip(array)`: Splits an array of grouped elements into separate arrays.

### Object Functions:

- `get(obj, path, defaultValue)`: Safely gets a nested property in an object.
- `set(obj, path, value)`: Safely sets a nested property in an object.
- `has(obj, path)`: Checks if a nested property exists within an object.
- `pick(obj, keys)`: Creates an object composed of selected properties.
- `omit(obj, keys)`: Creates an object composed of omitted properties.

### Collection Functions:

- `countBy(collection, iteratee)`: Groups elements of a collection based on the result of running each element through the iteratee, returning an object with counts.

### Function Utilities:

- `debounce(func, wait)`: Creates a debounced function that delays invoking func until after wait milliseconds have passed since the last invocation.
- `throttle(func, wait)`: Creates a throttled function that only invokes func at most once per every wait milliseconds.

### Number Utilities:

- `numberToWords(number)`: Converts a number into its word representation.

### Lang Functions:

- `cloneDeep(value)`: Creates a deep copy of value, recursively copying all nested properties.
  npm install animex

# LICENSE
- MIT License

**[`Back to top ⬆️`](#jivio)**

/**
 * Flattens a nested array into a single-level array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to flatten. This can be a deeply nested array of any depth.
 * @returns {T[]} A new array with all nested elements flattened into a single level.
 *
 * @example
 * const nestedArray = [1, [2, [3, [4]], 5]];
 * const flatArray = flatten(nestedArray);
 * console.log(flatArray); // Output: [1, 2, 3, 4, 5]
 *
 * @example
 * const emptyArray: any[] = [];
 * const flatArray = flatten(emptyArray);
 * console.log(flatArray); // Output: []
 */
function flatten<T>(array: T[]): T[] {
  // Initialize an empty array to hold the flattened result.
  const result: T[] = [];

  // Iterate over each item in the input array.
  array.forEach((item) => {
    // Check if the current item is an array.
    if (Array.isArray(item)) {
      // Recursively flatten the item and spread its elements into the result array.
      result.push(...flatten(item));
    } else {
      // If the item is not an array, push it directly into the result array.
      result.push(item);
    }
  });

  // Return the flattened array.
  return result;
}

// Export the flatten function so it can be used in other parts of the application.
export { flatten };

/**
 * Creates an array of values that are in the first array but not in any of the other provided arrays.
 *
 * @param array - The primary array from which to find differences.
 * @param values - One or more arrays to compare against the primary array.
 * @returns An array containing the values that are only present in the primary array and not in any of the provided arrays.
 *
 * @example
 * ```typescript
 * const result = difference([1, 2, 3, 4, 5], [4, 5], [1]);
 * console.log(result); // Output: [2, 3]
 * ```
 */
function difference<T>(array: T[], ...values: T[][]): T[] {
  // Flatten the arrays of values into a single array.
  // This allows us to easily check for the presence of any item from the primary array in any of the provided arrays.
  const valuesFlattened = values.flat();

  // Create a Set from the flattened array of values.
  // Using a Set allows for faster lookups to check if an item is included in the exclusion lists.
  const valuesSet = new Set(valuesFlattened);

  // Filter the primary array to include only items that are not in the Set.
  // This effectively removes any item from the primary array that appears in any of the exclusion arrays.
  return array.filter((item) => !valuesSet.has(item));
}

export { difference };

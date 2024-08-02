/**
 * Creates an array of values that are in the first array but not in any of the other provided arrays.
 * The comparison is done using a custom iteratee function.
 *
 * @param array - The primary array from which to find differences.
 * @param iteratee - A function to compute the value for comparison. It is called for each element in the array.
 * @param values - One or more arrays to compare against the primary array.
 * @returns An array containing the values that are only present in the primary array and not in any of the provided arrays, based on the iteratee function.
 *
 * @example
 * ```typescript
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }];
 * const result = differenceBy(array, item => item.x, [{ 'x': 2 }]);
 * console.log(result); // Output: [{ 'x': 1 }, { 'x': 3 }]
 * ```
 */
function differenceBy<T, K>(
  array: T[],
  iteratee: (item: T) => K,
  ...values: T[][]
): T[] {
  // Flatten the arrays of values into a single array.
  const valuesFlattened = values.flat();

  // Create a Set from the iteratee results of the flattened array.
  const valuesSet = new Set(valuesFlattened.map((item) => iteratee(item)));

  // Filter the primary array to include only items that are not in the Set.
  return array.filter((item) => !valuesSet.has(iteratee(item)));
}

export { differenceBy };

/**
 * Removes duplicate values from an array, returning a new array with only unique values.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array from which to remove duplicate values.
 * @returns {T[]} A new array containing only unique values from the original array.
 *
 * @example
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueNumbers = uniq(numbers);
 * console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
 *
 * @example
 * const words = ['apple', 'banana', 'apple', 'orange', 'banana'];
 * const uniqueWords = uniq(words);
 * console.log(uniqueWords); // Output: ['apple', 'banana', 'orange']
 */
function uniq<T>(array: T[]): T[] {
  // Use a Set to automatically handle uniqueness, then spread the Set into a new array.
  return [...new Set(array)];
}

// Export the uniq function so it can be used in other parts of the application.
export { uniq };

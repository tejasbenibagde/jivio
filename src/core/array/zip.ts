/**
 * Combines multiple arrays into a single array of grouped elements.
 *
 * @param arrays - An array of arrays to be zipped together.
 * @returns An array where each element is an array containing the corresponding elements from the input arrays.
 *
 * @example
 * ```
 * zip([1, 2], ['a', 'b'], [true, false]);
 * // => [[1, 'a', true], [2, 'b', false]]
 * ```
 */
function zip<T>(...arrays: T[][]): T[][] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result: T[][] = [];

  for (let i = 0; i < maxLength; i++) {
    const group: T[] = arrays.map((array) => array[i]);
    result.push(group);
  }

  return result;
}

/**
 * Splits an array of grouped elements into separate arrays.
 *
 * @param array - An array of grouped elements.
 * @returns An array of arrays, where each element contains the elements from the original groups.
 *
 * @example
 * ```
 * unzip([[1, 'a', true], [2, 'b', false]]);
 * // => [[1, 2], ['a', 'b'], [true, false]]
 * ```
 */
function unzip<T>(array: T[][]): T[][] {
  const result: T[][] = [];
  const maxLength = array.length > 0 ? array[0].length : 0;

  for (let i = 0; i < maxLength; i++) {
    const group: T[] = array.map((item) => item[i]);
    result.push(group);
  }

  return result;
}

export { zip, unzip };

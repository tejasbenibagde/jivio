/**
 * Counts the occurrences of items in an array based on the result of applying
 * an iteratee function to each item.
 *
 * This function iterates over each element of the provided array, applies the
 * iteratee function to obtain a key, and then counts how many times each key
 * appears in the array. The result is an object where keys are the results from
 * the iteratee function and values are the counts of each key.
 *
 * @template T - The type of elements in the input array.
 * @template K - The type of keys returned by the iteratee function. Must be
 *   a type that can be used as an object key, i.e., `string | number | symbol`.
 *
 * @param {T[]} array - The array of elements to count occurrences for.
 * @param {(value: T) => K} iteratee - A function that takes an element of type T
 *   and returns a key of type K. This key is used to count occurrences.
 *
 * @returns {Record<K, number>} - An object where the keys are the results of the
 *   iteratee function and the values are the counts of how many times each key
 *   appeared in the array.
 *
 * @example
 * // Example usage:
 * const numbers = [1, 2, 2, 3, 3, 3];
 * const counts = countBy(numbers, (num) => num);
 * console.log(counts); // Output: { '1': 1, '2': 2, '3': 3 }
 *
 * @example
 * // Example with strings and lengths:
 * const strings = ["apple", "banana", "cherry", "date"];
 * const lengthCounts = countBy(strings, (str) => str.length);
 * console.log(lengthCounts); // Output: { '4': 1, '5': 1, '6': 2 }
 */
function countBy<T, K extends string | number | symbol>(
  array: T[],
  iteratee: (value: T) => K,
): Record<K, number> {
  return array.reduce(
    (result, item) => {
      const key = iteratee(item);
      if (result[key]) {
        result[key]++;
      } else {
        result[key] = 1;
      }
      return result;
    },
    {} as Record<K, number>,
  );
}

export { countBy };

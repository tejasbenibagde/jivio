// src/core/concat.ts

/**
 * Concatenates multiple arrays or values into a single array.
 *
 * @param {...(T[] | T)[]} args The arrays or values to concatenate.
 * @returns {T[]} Returns the new array with all values concatenated.
 */
export function concat<T>(...args: (T[] | T)[]): T[] {
  return args.reduce<T[]>((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(val);
    } else {
      return acc.concat([val]);
    }
  }, []);
}

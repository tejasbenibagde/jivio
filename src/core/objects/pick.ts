/**
 * Creates an object composed of the picked object properties.
 *
 * @param obj - The source object.
 * @param keys - The keys to pick from the source object.
 * @returns A new object with the picked properties.
 *
 * @example
 * ```
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = pick(obj, ["a", "c"]);
 * // => { a: 1, c: 3 }
 * ```
 */
function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

export { pick };

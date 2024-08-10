/**
 * Creates an object composed of the omitted object properties.
 *
 * @param obj - The source object.
 * @param keys - The keys to omit from the source object.
 * @returns A new object without the omitted properties.
 *
 * @example
 * ```
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = omit(obj, ["b"]);
 * // => { a: 1, c: 3 }
 * ```
 */
function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    if (key in result) {
      delete result[key];
    }
  });
  return result;
}

export { omit };

/**
 * Safely sets a nested property in an object based on the provided path.
 *
 * This function allows setting a value at a nested path within an object. If the path does not exist,
 * it will create the necessary nested objects. This function is useful for working with deeply nested
 * data structures where the structure may not be known ahead of time.
 *
 * @param obj - The object to be modified.
 * @param path - The path to the property where the value should be set. Can be a dot-separated string or an array of strings.
 * @param value - The value to set at the specified path.
 * @returns The modified object with the value set at the specified path.
 *
 * @example
 * ```typescript
 * const obj = { a: { b: { c: 1 } } };
 * set(obj, 'a.b.c', 2);
 * console.log(obj.a.b.c); // Output: 2
 *
 * const obj2 = { a: { b: {} } };
 * set(obj2, 'a.b.c.d', 3);
 * console.log(obj2.a.b.c.d); // Output: 3
 * ```
 */
export function set<T extends object>(
  obj: T,
  path: string | string[],
  value: unknown,
): T {
  // Check if the path is provided
  if (!path) return obj;

  // Convert path to an array if it's a string
  const pathArray = Array.isArray(path) ? path : path.split(".");

  // Initialize a mutable reference to the object
  let current: any = obj;

  // Iterate through the path segments
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    // If it's the last segment, set the value
    if (i === pathArray.length - 1) {
      (current as Record<string, unknown>)[key] = value;
    } else {
      // If the current segment is not an object or does not exist, create it
      if (!current[key] || typeof current[key] !== "object") {
        (current as Record<string, unknown>)[key] = {};
      }
      // Move to the next level
      current = (current as Record<string, unknown>)[key];
    }
  }

  // Return the modified object
  return obj;
}

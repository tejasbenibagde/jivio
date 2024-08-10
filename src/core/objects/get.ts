/**
 * Safely retrieves a nested property from an object based on the provided path.
 *
 * This function allows getting a value from a nested path within an object. If the path does not exist,
 * it returns a default value. This function is useful for accessing deeply nested properties where the
 * structure of the object may not be known in advance.
 *
 * @param obj - The object from which to retrieve the property.
 * @param path - The path to the property to retrieve. Can be a dot-separated string or an array of strings.
 * @param defaultValue - The value to return if the path does not exist in the object. If not provided, `undefined` will be returned.
 * @returns The value at the specified path or the default value if the path does not exist.
 *
 * @example
 * ```typescript
 * const obj = { a: { b: { c: 1 } } };
 * const value = get(obj, 'a.b.c');
 * console.log(value); // Output: 1
 *
 * const obj2 = { a: { b: {} } };
 * const value2 = get(obj2, 'a.b.c', 'default');
 * console.log(value2); // Output: 'default'
 * ```
 */
export function get<T, K extends keyof T>(
  obj: T,
  path: string | string[],
  defaultValue?: unknown,
): T[K] | undefined {
  // Check if the path is provided
  if (!path) return defaultValue as T[K] | undefined;

  // Convert path to an array if it's a string
  const pathArray = Array.isArray(path) ? path : path.split(".");

  // Initialize a mutable reference to the object
  let result: any = obj;

  // Iterate through the path segments
  for (const key of pathArray) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return defaultValue as T[K] | undefined;
    }
  }

  // Return the retrieved value or default value if the path does not exist
  return result as T[K] | undefined;
}

/**
 * Checks if a nested property exists within an object based on the provided path.
 *
 * This function allows you to verify if a specific property exists at a nested path within an object.
 * If the path exists, it returns `true`; otherwise, it returns `false`.
 *
 * @param obj - The object to check for the nested property.
 * @param path - The path to the property to check. Can be a dot-separated string or an array of strings.
 * @returns `true` if the property exists at the specified path, `false` otherwise.
 *
 * @example
 * ```typescript
 * const obj = { a: { b: { c: 1 } } };
 * const exists = has(obj, 'a.b.c');
 * console.log(exists); // Output: true
 *
 * const exists2 = has(obj, 'a.b.d');
 * console.log(exists2); // Output: false
 * ```
 */
export function has<T>(obj: T, path: string | string[]): boolean {
  // Convert path to an array if it's a string
  const pathArray = Array.isArray(path) ? path : path.split(".");

  // Initialize a mutable reference to the object
  let current: any = obj;

  // Iterate through the path segments
  for (const key of pathArray) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }

  return true;
}

/**
 * Recursively clones a value, creating a deep copy.
 * This function handles primitive types, Date, Map, Set, arrays, and plain objects.
 *
 * @param value - The value to deep clone.
 * @returns A deep clone of the input value.
 */

function cloneDeep<T>(value: T): T {
  // If the value is null or not an object, return it as is.
  // This handles primitive types and null.

  if (value === null || typeof value !== "object") {
    return value;
  }

  // If the value is a Date object, create a new Date with the same time.
  // This ensures that Date objects are cloned correctly.
  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }
  // If the value is a Map, create a new Map and recursively clone its keys and values.
  // This ensures that Map objects are cloned correctly.
  if (value instanceof Map) {
    const mapClone = new Map();
    value.forEach((val, key) => {
      mapClone.set(cloneDeep(key), cloneDeep(val));
    });
    return mapClone as T;
  }
  // If the value is a Set, create a new Set and recursively clone its values.
  // This ensures that Set objects are cloned correctly.
  if (value instanceof Set) {
    const setClone = new Set();
    value.forEach((val) => {
      setClone.add(cloneDeep(val));
    });
    return setClone as T;
  }

  // If the value is an array, recursively clone each item and return a new array.
  // This ensures that arrays are deeply cloned.
  if (Array.isArray(value)) {
    return value.map(cloneDeep) as unknown as T;
  }

  // If the value is a plain object, create a new object with the same prototype.
  // Then recursively clone each property of the original object.
  // This ensures that plain objects are deeply cloned while preserving their prototype chain.
  const result: { [key: string]: object } = {};

  for (const key of Object.keys(value)) {
    result[key] = cloneDeep((value as { [key: string]: object })[key]);
  }

  return result as T;
}

export { cloneDeep };

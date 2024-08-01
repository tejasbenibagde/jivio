// src/core/compact.ts

/**
 * Creates an array with all falsy values removed.
 *
 * @param {T[]} array The array to process.
 * @returns {T[]} Returns the new array of filtered values.
 */
function compact<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
        throw new TypeError('Expected an array');
    }

    return array.filter(Boolean) as T[];
}

export { compact }
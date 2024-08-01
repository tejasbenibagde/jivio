// src/core/array.ts

/**
 * Splits an array into chunks of a specified size.
 *
 * @param {T[]} array The array to process.
 * @param {number} size The size of each chunk.
 * @returns {T[][]} Returns the new array of chunks.
 */
export function chunk<T>(array: T[], size: number): T[][] {
    if (!Array.isArray(array) || size < 1) {
        throw new TypeError('Invalid input');
    }

    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

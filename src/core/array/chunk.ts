// src/core/array.ts

/**
 * Splits an array into chunks of a specified size.
 *
 * @param {T[]} array The array to process.
 * @param {number} size The size of each chunk.
 * @returns {T[][]} Returns the new array of chunks.
 */
function chunk<T>(array: T[], size: number): T[][] {
    // Throw error if the first parameter is not a array or have a size smaller than 1

    if (!Array.isArray(array) || size < 1) {
        throw new TypeError('Invalid input');
    }

    const result: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}

export { chunk }
// src/tests/core/chunk.test.ts

import { chunk } from "../../core/array";

describe('chunk', () => {
    it('should split array into chunks of specified size', () => {
        expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
        expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    it('should return empty array when input array is empty', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    it('should handle chunk size of 1', () => {
        expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });

    it('should throw an error for invalid chunk size', () => {
        expect(() => chunk([1, 2, 3], 0)).toThrow('Invalid input');
        expect(() => chunk([1, 2, 3], -1)).toThrow('Invalid input');
    });

    it('should throw an error for non-array input', () => {
        // expect(() => chunk({}, 2)).toThrow('Invalid input');
        expect(() => chunk(null as any, 2)).toThrow('Invalid input');
        expect(() => chunk(undefined as any, 2)).toThrow('Invalid input');
    });
});

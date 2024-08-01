// src/tests/core/compact.test.ts

import { compact } from "../../core/array";

describe('compact', () => {
    it('should remove all falsy values from the array', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
        expect(compact([null, 'foo', NaN, 'bar', undefined])).toEqual(['foo', 'bar']);
    });

    it('should return an empty array if all values are falsy', () => {
        expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
    });

    it('should return the same array if no falsy values are present', () => {
        expect(compact([1, 'a', true])).toEqual([1, 'a', true]);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => compact(null as any)).toThrow('Expected an array');
        expect(() => compact({} as any)).toThrow('Expected an array');
        expect(() => compact(undefined as any)).toThrow('Expected an array');
    });
});

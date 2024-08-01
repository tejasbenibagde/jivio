import { countBy } from "../../core";

describe("countBy", () => {

    it("should count occurrences based on iteratee function", () => {
        const data = [6.1, 4.2, 6.3];
        const result = countBy(data, Math.floor);
        expect(result).toEqual({ '4': 1, '6': 2 });
    });

    it("should count occurrences of string lengths", () => {
        const strings = ["apple", "banana", "cherry", "date"];
        const lengthCounts = countBy(strings, (str) => str.length);
        expect(lengthCounts).toEqual({ '4': 1, '5': 1, '6': 2 });
    });


    it("should handle empty array", () => {
        const emptyArray: number[] = [];
        const result = countBy(emptyArray, (num) => num % 2 === 0 ? 'even' : 'odd');
        expect(result).toEqual({});
    });

    it("should count occurrences of boolean values", () => {
        const bools = [true, false, true, false, true];
        const result = countBy(bools, (bool) => bool ? 'true' : 'false');
        expect(result).toEqual({ 'true': 3, 'false': 2 });
    });

    it("should handle arrays with mixed types", () => {
        const mixed = [1, '1', 2, '2', 1];
        const result = countBy(mixed, (item) => typeof item);
        expect(result).toEqual({ 'number': 3, 'string': 2 });
    });

});

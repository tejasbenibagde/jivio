// difference.test.ts
import { difference } from "../../core/array"; // Adjust the import path as necessary

describe("difference", () => {
  it("should return elements that are in the first array but not in the other arrays", () => {
    const result = difference([1, 2, 3, 4, 5], [4, 5], [1]);
    expect(result).toEqual([2, 3]);
  });

  it("should return the entire array if other arrays are empty", () => {
    const result = difference([1, 2, 3, 4], []);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return an empty array if all elements are present in other arrays", () => {
    const result = difference([1, 2, 3], [1], [2, 3]);
    expect(result).toEqual([]);
  });

  it("should handle multiple arrays to be excluded", () => {
    const result = difference([1, 2, 3, 4, 5], [2], [3], [4, 5]);
    expect(result).toEqual([1]);
  });

  it("should handle cases where the first array is empty", () => {
    const result = difference([], [1, 2]);
    expect(result).toEqual([]);
  });

  it("should handle cases where all arrays are empty", () => {
    const result = difference([], [], []);
    expect(result).toEqual([]);
  });
});

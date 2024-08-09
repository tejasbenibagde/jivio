import { flatMap } from "../../";

describe("flatMap", () => {
  it("should correctly map and flatten arrays", () => {
    const numbers = [1, 2, 3];
    const result = flatMap(numbers, (n) => [n, n * 2]);
    expect(result).toEqual([1, 2, 2, 4, 3, 6]);
  });

  it("should return an empty array when input array is empty", () => {
    const numbers: number[] = [];
    const result = flatMap(numbers, (n) => [n, n * 2]);
    expect(result).toEqual([]);
  });

  it("should handle empty arrays returned by the iteratee", () => {
    const numbers = [1, 2, 3];
    const result = flatMap(numbers, (n) => []);
    expect(result).toEqual([]);
  });

  it("should handle iteratee that returns non-array values", () => {
    const numbers = [1, 2, 3];
    const result = flatMap(numbers, (n) => [n, n * 2, n * 3]);
    expect(result).toEqual([1, 2, 3, 2, 4, 6, 3, 6, 9]);
  });

  it("should handle complex objects", () => {
    const data = [{ a: 1 }, { a: 2 }];
    const result = flatMap(data, (item) => [item.a, item.a * 2]);
    expect(result).toEqual([1, 2, 2, 4]);
  });
});

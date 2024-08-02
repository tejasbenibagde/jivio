import { differenceBy } from "../../core/array";

describe("differenceBy", () => {
  it("should return elements that are in the first array but not in the other arrays based on the iteratee function", () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const result = differenceBy(array, (item) => item.x, [{ x: 2 }]);
    expect(result).toEqual([{ x: 1 }, { x: 3 }]);
  });

  it("should return the entire array if other arrays are empty", () => {
    const array = [{ x: 1 }, { x: 2 }];
    const result = differenceBy(array, (item) => item.x, []);
    expect(result).toEqual([{ x: 1 }, { x: 2 }]);
  });

  it("should return an empty array if all elements are present in other arrays based on the iteratee function", () => {
    const array = [{ x: 1 }, { x: 2 }];
    const result = differenceBy(
      array,
      (item) => item.x,
      [{ x: 1 }],
      [{ x: 2 }],
    );
    expect(result).toEqual([]);
  });

  it("should handle multiple arrays to be excluded", () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const result = differenceBy(
      array,
      (item) => item.x,
      [{ x: 2 }],
      [{ x: 3 }, { x: 4 }],
    );
    expect(result).toEqual([{ x: 1 }]);
  });

  it("should handle cases where the first array is empty", () => {
    const array: { x: number }[] = [];
    const result = differenceBy(array, (item) => item.x, [{ x: 1 }]);
    expect(result).toEqual([]);
  });

  it("should handle cases where all arrays are empty", () => {
    const array = [{ x: 1 }];
    const result = differenceBy(array, (item) => item.x, [], []);
    expect(result).toEqual([{ x: 1 }]);
  });

  it("should handle numeric arrays with Math.floor iteratee", () => {
    const result = differenceBy([2.1, 1.2], Math.floor, [2.3, 3.4]);
    expect(result).toEqual([1.2]);
  });

  it("should handle cases with complex iteratee functions", () => {
    const array = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
    ];
    const result = differenceBy(array, (item) => item.y, [{ x: 2, y: 3 }]);
    expect(result).toEqual([
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ]);
  });
});

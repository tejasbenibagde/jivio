import { zip, unzip } from "../../"; // Adjust the import path as necessary

// Test suite for the zip and unzip functions
describe("zip", () => {
  it("should zip multiple arrays into one array of grouped elements", () => {
    const array1 = [1, 2];
    const array2: any = ["a", "b"];
    const array3: any = [true, false];

    const result = zip(array1, array2, array3);
    expect(result).toEqual([
      [1, "a", true],
      [2, "b", false],
    ]);
  });

  it("should handle arrays of different lengths by filling undefined for missing elements", () => {
    const array1 = [1, 2, 3];
    const array2: any = ["a", "b"];

    const result = zip(array1, array2);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, undefined],
    ]);
  });

  it("should return an empty array when no arrays are provided", () => {
    const result = zip();
    expect(result).toEqual([]);
  });
});

describe("unzip", () => {
  it("should unzip a single array of grouped elements into individual arrays", () => {
    const array = [
      [1, "a", true],
      [2, "b", false],
    ];

    const result = unzip(array);
    expect(result).toEqual([
      [1, 2],
      ["a", "b"],
      [true, false],
    ]);
  });

  it("should handle an empty array of grouped elements", () => {
    const result = unzip([]);
    expect(result).toEqual([]);
  });

  it("should handle arrays with undefined elements correctly", () => {
    const array = [
      [1, "a"],
      [2, "b"],
      [undefined, "c"],
    ];

    const result = unzip(array);
    expect(result).toEqual([
      [1, 2, undefined],
      ["a", "b", "c"],
    ]);
  });
});

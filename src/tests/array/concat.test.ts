// src/tests/core/concat.test.ts

import { concat } from "../../core/array";

describe("concat", () => {
  it("should concatenate multiple arrays into a single array", () => {
    expect(concat([1, 2], [3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
    expect(concat(["a"], ["b", "c"], ["d"])).toEqual(["a", "b", "c", "d"]);
  });

  it("should handle arrays and single values", () => {
    expect(concat([1, 2], 3, [4, 5], 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(concat(["x"], "y", ["z"])).toEqual(["x", "y", "z"]);
  });

  it("should handle an empty input", () => {
    expect(concat()).toEqual([]);
    expect(concat([])).toEqual([]);
    expect(concat([], [])).toEqual([]);
  });

  it("should handle single values without arrays", () => {
    expect(concat(1, 2, 3)).toEqual([1, 2, 3]);
    expect(concat("a", "b", "c")).toEqual(["a", "b", "c"]);
  });

  it("should handle mixed types and empty arrays", () => {
    expect(concat([], 1, [], [2, 3], [])).toEqual([1, 2, 3]);
    expect(concat([], "a", [], "b", [])).toEqual(["a", "b"]);
  });
});

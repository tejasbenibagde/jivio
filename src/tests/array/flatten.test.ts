import { flatten } from "../../";

describe("flatten", () => {
  it("should flatten a nested array", () => {
    const input = [1, [2, [3, [4]], 5]];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(flatten(input)).toEqual(expectedOutput);
  });

  it("should return an empty array when given an empty array", () => {
    const input: any[] = [];
    const expectedOutput: any[] = [];
    expect(flatten(input)).toEqual(expectedOutput);
  });

  it("should handle arrays with no nesting", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(flatten(input)).toEqual(expectedOutput);
  });

  it("should handle deeply nested arrays", () => {
    const input = [[[[[1]]]]];
    const expectedOutput = [1];
    expect(flatten(input)).toEqual(expectedOutput);
  });
});

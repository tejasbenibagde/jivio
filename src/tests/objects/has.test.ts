import { has } from "../../";

describe("has", () => {
  // Test case for existing nested property
  it("should return true if the nested property exists", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(has(obj, "a.b.c")).toBe(true);
    expect(has(obj, ["a", "b", "c"])).toBe(true);
  });

  // Test case for non-existing nested property
  it("should return false if the nested property does not exist", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(has(obj, "a.b.d")).toBe(false);
    expect(has(obj, ["a", "b", "d"])).toBe(false);
  });

  // Test case for empty object
  it("should return false for any path in an empty object", () => {
    const obj = {};
    expect(has(obj, "a")).toBe(false);
    expect(has(obj, "a.b.c")).toBe(false);
  });

  // Test case for path with empty segments
  it("should return false if path has empty segments", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(has(obj, "a..b.c")).toBe(false);
    expect(has(obj, "a.b..c")).toBe(false);
  });

  // Test case for edge case with null and undefined
  it("should return false if object is null or undefined", () => {
    expect(has(null as any, "a.b.c")).toBe(false);
    expect(has(undefined as any, "a.b.c")).toBe(false);
  });
});

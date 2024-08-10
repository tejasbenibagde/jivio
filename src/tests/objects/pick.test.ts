import { pick } from "../..";

describe("pick", () => {
  it("should pick the specified properties from the object", () => {
    const obj: Record<string, number> = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ["a", "c"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("should return an empty object if no keys are provided", () => {
    const obj: Record<string, number> = { a: 1, b: 2, c: 3 };
    const result = pick(obj, []);
    expect(result).toEqual({});
  });

  it("should ignore keys that do not exist in the object", () => {
    const obj: Record<string, number> = { a: 1, b: 2 };
    const result = pick(obj, ["a", "c"]);
    expect(result).toEqual({ a: 1 });
  });
});

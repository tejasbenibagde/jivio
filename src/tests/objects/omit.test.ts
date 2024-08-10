import { omit } from "../../core";

describe("omit", () => {
  it("should omit the specified properties from the object", () => {
    const obj: Record<string, number> = { a: 1, b: 2, c: 3 };
    const result = omit(obj, ["b"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("should return the original object if no keys are provided", () => {
    const obj: Record<string, number> = { a: 1, b: 2, c: 3 };
    const result = omit(obj, []);
    expect(result).toEqual(obj);
  });

  it("should ignore keys that do not exist in the object", () => {
    const obj: Record<string, number> = { a: 1, b: 2 };
    const result = omit(obj, ["c"]);
    expect(result).toEqual(obj);
  });
});

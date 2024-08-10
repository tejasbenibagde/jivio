import { get } from "../../";

describe("get function", () => {
  const obj = {
    a: {
      b: {
        c: 3,
        d: null,
      },
      e: undefined,
    },
  };

  it("should return the value at the specified path", () => {
    expect(get(obj, "a.b.c")).toBe(3);
  });

  it("should return undefined for an undefined path", () => {
    expect(get(obj, "a.b.x")).toBeUndefined();
  });

  it("should return the default value if the path is undefined", () => {
    expect(get(obj, "a.b.x", "default")).toBe("default");
  });

  it("should return the value at the specified path when the path is an array", () => {
    expect(get(obj, ["a", "b", "c"])).toBe(3);
  });

  it("should return the default value if the path does not exist", () => {
    expect(get(obj, "a.x.y", "default")).toBe("default");
  });

  it("should return undefined if the path leads to undefined", () => {
    expect(get(obj, "a.e")).toBeUndefined();
  });

  it("should return null if the value at the path is null", () => {
    expect(get(obj, "a.b.d")).toBeNull();
  });
});

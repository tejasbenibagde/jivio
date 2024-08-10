import { set } from "../../";

describe("set function", () => {
  let obj: any;

  beforeEach(() => {
    obj = {
      a: {
        b: {
          c: 3,
        },
      },
    };
  });

  it("should set the value at the specified path", () => {
    set(obj, "a.b.c", 4);
    expect(obj.a.b.c).toBe(4);
  });

  it("should create the path if it does not exist", () => {
    set(obj, "a.b.d", 5);
    expect(obj.a.b.d).toBe(5);
  });

  it("should handle nested paths that do not exist", () => {
    set(obj, "a.x.y.z", 6);
    expect(obj.a.x.y.z).toBe(6);
  });

  it("should replace non-object values with objects as needed", () => {
    obj = { a: 1 };
    set(obj, "a.b.c", 7);
    expect(obj.a.b.c).toBe(7);
  });

  it("should work with path as an array", () => {
    set(obj, ["a", "b", "d"], 8);
    expect(obj.a.b.d).toBe(8);
  });

  it("should return the original object", () => {
    const result = set(obj, "a.b.e", 9);
    expect(result).toBe(obj);
  });
});

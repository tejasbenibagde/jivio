import { cloneDeep } from "../../"; // Adjust the import path

describe("cloneDeep", () => {
  test("should clone primitive values correctly", () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep("string")).toBe("string");
    expect(cloneDeep(null)).toBeNull();
    expect(cloneDeep(undefined)).toBeUndefined();
    expect(cloneDeep(true)).toBe(true);
  });

  test("should clone arrays correctly", () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = cloneDeep(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).toEqual(arr[2]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test("should clone objects correctly", () => {
    const obj = { a: 1, b: { c: 2 }, d: [3, 4] };
    const clonedObj = cloneDeep(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).toEqual(obj.b);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.d).toEqual(obj.d);
    expect(clonedObj.d).not.toBe(obj.d);
  });

  test("should handle nested objects and arrays", () => {
    const obj = { a: { b: { c: [1, 2, { d: 3 }] } } };
    const clonedObj = cloneDeep(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a.b.c).toEqual(obj.a.b.c);
    expect(clonedObj.a.b.c).not.toBe(obj.a.b.c);
    expect(clonedObj.a.b.c[2]).toEqual(obj.a.b.c[2]);
    expect(clonedObj.a.b.c[2]).not.toBe(obj.a.b.c[2]);
  });

  test("should handle empty objects and arrays", () => {
    expect(cloneDeep({})).toEqual({});
    expect(cloneDeep([])).toEqual([]);
  });

  test("should handle edge cases", () => {
    const circularObj: any = { a: 1 };
    circularObj.self = circularObj;
    expect(() => cloneDeep(circularObj)).toThrow();
  });

  test("should handle dates correctly", () => {
    const date = new Date();
    const clonedDate = cloneDeep(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test("should handle Map and Set correctly", () => {
    const map = new Map([
      [1, "one"],
      [2, "two"],
    ]);
    const clonedMap = cloneDeep(map);
    expect(clonedMap).toEqual(map);
    expect(clonedMap).not.toBe(map);

    const set = new Set([1, 2, 3]);
    const clonedSet = cloneDeep(set);
    expect(clonedSet).toEqual(set);
    expect(clonedSet).not.toBe(set);
  });
});

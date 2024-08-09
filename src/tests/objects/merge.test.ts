// import { merge } from "../../";

// Test suite for the merge function
describe("merge", () => {
  it("should be fun", () => {
    expect(2 + 2).toEqual(4);
  });

  // it("should deeply merge two objects", () => {
  //   const obj1 = { a: 1, b: { x: 1 } };
  //   const obj2 = { b: { y: 2 }, c: 3 };

  //   const result = merge({}, obj1, obj2);
  //   expect(result).toEqual({
  //     a: 1,
  //     b: { x: 1, y: 2 },
  //     c: 3,
  //   });
  // });

  // it("should handle merging of arrays correctly", () => {
  //   const obj1 = { a: [1, 2] };
  //   const obj2 = { a: [3, 4] };

  //   const result = merge({}, obj1, obj2);
  //   expect(result).toEqual({
  //     a: [1, 2, 3, 4],
  //   });
  // });

  // it("should overwrite primitive values with the last one provided", () => {
  //   const obj1 = { a: 1 };
  //   const obj2 = { a: 2 };

  //   const result = merge({}, obj1, obj2);
  //   expect(result).toEqual({
  //     a: 2,
  //   });
  // });

  // it("should deeply merge more than two objects", () => {
  //   const obj1 = { a: 1, b: { x: 1 } };
  //   const obj2 = { b: { y: 2 }, c: 3 };
  //   const obj3 = { b: { z: 3 }, d: 4 };

  //   const result = merge({}, obj1, obj2, obj3);
  //   expect(result).toEqual({
  //     a: 1,
  //     b: { x: 1, y: 2, z: 3 },
  //     c: 3,
  //     d: 4,
  //   });
  // });

  // it("should return the target object if no sources are provided", () => {
  //   const obj1 = { a: 1 };
  //   const result = merge(obj1);

  //   expect(result).toEqual({ a: 1 });
  // });
});

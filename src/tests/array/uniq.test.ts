import { uniq } from "../../"; // Adjust the import path as necessary

// Test suite for the uniq function
describe("uniq", () => {
  // Test with an array of numbers
  it("should remove duplicate numbers from an array", () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = uniq(numbers);
    expect(uniqueNumbers).toEqual([1, 2, 3, 4, 5]);
  });

  // Test with an array of strings
  it("should remove duplicate strings from an array", () => {
    const words = ["apple", "banana", "apple", "orange", "banana"];
    const uniqueWords = uniq(words);
    expect(uniqueWords).toEqual(["apple", "banana", "orange"]);
  });

  // Test with an empty array
  it("should return an empty array when given an empty array", () => {
    const emptyArray: number[] = [];
    const uniqueEmptyArray = uniq(emptyArray);
    expect(uniqueEmptyArray).toEqual([]);
  });

  // Test with an array containing one element
  it("should return the same array if it contains only one element", () => {
    const singleElementArray = [42];
    const uniqueSingleElementArray = uniq(singleElementArray);
    expect(uniqueSingleElementArray).toEqual([42]);
  });

  // Test with an array of objects (by reference)
  it("should treat objects with different references as unique", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const objArray = [obj1, obj2];
    const uniqueObjArray = uniq(objArray);
    expect(uniqueObjArray).toEqual([obj1, obj2]); // Both objects are unique by reference
  });

  // Test with an array of identical strings
  it("should return a single element array if all elements are the same", () => {
    const identicalArray = ["hello", "hello", "hello"];
    const uniqueIdenticalArray = uniq(identicalArray);
    expect(uniqueIdenticalArray).toEqual(["hello"]);
  });

  // Test with mixed types (if applicable)
  it("should handle arrays with mixed types correctly", () => {
    const mixedArray = [1, "1", 2, "2", 1, 2];
    const uniqueMixedArray = uniq(mixedArray);
    expect(uniqueMixedArray).toEqual([1, "1", 2, "2"]);
  });
});

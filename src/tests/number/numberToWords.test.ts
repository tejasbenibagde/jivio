import { numberToWords } from "../../";

describe("numberToWords", () => {
  it("should convert single digits to words", () => {
    expect(numberToWords(0)).toBe("Zero");
    expect(numberToWords(1)).toBe("One");
    expect(numberToWords(5)).toBe("Five");
    expect(numberToWords(9)).toBe("Nine");
  });

  it("should convert tens to words", () => {
    expect(numberToWords(10)).toBe("Ten");
    expect(numberToWords(15)).toBe("Fifteen");
    expect(numberToWords(23)).toBe("Twenty Three");
    expect(numberToWords(99)).toBe("Ninety Nine");
  });

  it("should convert hundreds to words", () => {
    expect(numberToWords(100)).toBe("One Hundred");
    expect(numberToWords(305)).toBe("Three Hundred Five");
    expect(numberToWords(999)).toBe("Nine Hundred Ninety Nine");
  });

  it("should convert thousands to words", () => {
    expect(numberToWords(1000)).toBe("One Thousand");
    expect(numberToWords(1234)).toBe("One Thousand Two Hundred Thirty Four");
    expect(numberToWords(9999)).toBe("Nine Thousand Nine Hundred Ninety Nine");
  });

  it("should convert millions to words", () => {
    expect(numberToWords(1000000)).toBe("One Million");
    expect(numberToWords(1234567)).toBe(
      "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven",
    );
    expect(numberToWords(9999999)).toBe(
      "Nine Million Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine",
    );
  });

  it("should handle edge cases", () => {
    expect(numberToWords(11)).toBe("Eleven");
    expect(numberToWords(19)).toBe("Nineteen");
    expect(numberToWords(20)).toBe("Twenty");
    expect(numberToWords(1001)).toBe("One Thousand One");
  });
});

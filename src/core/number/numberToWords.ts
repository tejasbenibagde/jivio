const units: string[] = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const teens: string[] = [
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens: string[] = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const thousands: string[] = ["", "Thousand", "Million"];

function numberToWords(num: number): string {
  if (num === 0) return "Zero";

  let words = "";

  let chunkCount = 0;

  while (num > 0) {
    const chunk = num % 1000;

    if (chunk > 0) {
      const chunkWords = chunkToWords(chunk);
      words =
        chunkWords +
        (thousands[chunkCount] ? ` ${thousands[chunkCount]}` : "") +
        (words ? ` ${words}` : "");
    }

    num = Math.floor(num / 1000);
    chunkCount++;
  }

  return words.trim();
}

function chunkToWords(num: number): string {
  let chunkWords = "";

  if (num >= 100) {
    chunkWords += units[Math.floor(num / 100)] + " Hundred";
    num %= 100;
  }

  if (num >= 11 && num <= 19) {
    chunkWords += (chunkWords ? " " : "") + teens[num - 11];
  } else {
    if (num >= 10 || num === 10) {
      chunkWords += (chunkWords ? " " : "") + tens[Math.floor(num / 10)];
      num %= 10;
    }

    if (num > 0 && num <= 9) {
      chunkWords += (chunkWords ? " " : "") + units[num];
    }
  }

  return chunkWords;
}

export { numberToWords };

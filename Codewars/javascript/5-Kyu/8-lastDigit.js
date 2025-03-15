// Codewars 8
// Title :  Last digit of a large number
// Instructions :   Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!
// Challange Url :  https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
// Level : 5kyu

// Method : 1
export function lastDigit(a, b) {
  if (b === 0n) return 1n;

  const lastDigitA = a % 10n;
  const cycle = [
    [0n],
    [1n],
    [2n, 4n, 8n, 6n],
    [3n, 9n, 7n, 1n],
    [4n, 6n],
    [5n],
    [6n],
    [7n, 9n, 3n, 1n],
    [8n, 4n, 2n, 6n],
    [9n, 1n],
  ];

  const pattern = cycle[Number(lastDigitA)];
  const index = Number((b - 1n) % BigInt(pattern.length));
  return pattern[index];
}

// Method 2

// Other Users Method
// export const lastDigit = (n, m) => {
//   let base = n % 10n;
//   let rem = m % 4n;
//   let exp = rem === 0n && m !== 0n ? 4n : rem;
//   return base ** exp % 10n;
// };

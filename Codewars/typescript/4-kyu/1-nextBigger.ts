// Codewars 1
// Title :  Next bigger number with the same digits
// Question :   Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
// Challange Url :  https://www.codewars.com/kata/55983863da40caa2c900004e/train/typescript
// Level : 4kyu

// Method : 1
export function nextBigger(n: number): number {
  const digits = n.toString().split("");
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }
  [digits[i], digits[j]] = [digits[j], digits[i]];
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).reverse();

  const result = parseInt([...left, ...right].join(""), 10);
  return result;
}

// Method : 2

// Other Users Method
// export function nextBigger(n: number): number {
//   let str = ("" + n).split("");

//   for (let i = str.length - 1; i >= 0; i--) {
//     for (let j = str.length - 1; j > i; j--) {
//       if (str[i] < str[j]) {
//         const temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//         str = str.slice(0, i + 1).concat(str.slice(i + 1).sort());
//         return +str.join("");
//       }
//     }
//   }
//   return -1;
// }

// Codewars 10
// Title :  Smallest possible sum
// Question :   Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:
// Challange Url :  https://www.codewars.com/kata/52f677797c461daaf7000740/train/typescript
// Level : 4kyu

// Method : 1
// export const solution = (numbers: number[]): number => {
//   let result: number[] = [...numbers];
//   while (new Set(result).size != 1) {
//     result.sort((a, b) => b - a);
//     const max = result[0];
//     const secondMax = result.find((v) => v < max);
//     if (secondMax === undefined) break;
//     result[0] = max - secondMax;
//   }
//   return result[0] * numbers.length;
// };

// Method : 2
export const solution = (numbers: number[]): number => {
  let commonGcd = numbers[0];
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  for (let i = 0; i < numbers.length; i++) {
    commonGcd = gcd(commonGcd, numbers[i]);
  }
  return commonGcd * numbers.length;
};

// Other Users Method
// export const solution = (X: number[]): number => {
//   const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

//   const result = X.reduce((acc, curr) => gcd(acc, curr));

//   return X.length * result;
// };

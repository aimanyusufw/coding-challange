// Codewars 13
// Title :  Getting along with Integer Partision
// Question :   In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers.
// Challange Url :  https://www.codewars.com/kata/55cf3b567fc0e02b0b00000b/train/typescript
// Level : 4kyu

// Method : 1
export const part = (n: number): string => {
  let partition: number[] = [];

  function backtrack(current: number[] = [], start = 1, total = 0) {
    if (total === n) {
      partition.push(current.reduce((a, b) => a * b, 1));
      return;
    }

    for (let digit = start; digit <= n; digit++) {
      if (total + digit > n) break;
      current.push(digit);
      backtrack(current, digit, total + digit);
      current.pop();
    }
  }

  backtrack();

  partition = Array.from(new Set(partition)).sort((a, b) => a - b);

  if (partition.length === 0) return "";

  const range: number = partition[partition.length - 1] - partition[0];
  const average: number =
    partition.reduce((a, b) => a + b, 0) / partition.length;

  let median: number;
  const len = partition.length;
  if (len % 2 === 0) {
    median = (partition[len / 2 - 1] + partition[len / 2]) / 2;
  } else {
    median = partition[Math.floor(len / 2)];
  }

  return `Range: ${range} Average: ${average.toFixed(
    2
  )} Median: ${median.toFixed(2)}`;
};

// Method : 2

// Other user method
// export const part = (n: number): string => {
//   function generatePartitions(n: number, max: number = n): number[][] {
//     if (n === 0) return [[]];
//     const result: number[][] = [];

//     for (let i = Math.min(max, n); i >= 1; i--) {
//       const subPartitions = generatePartitions(n - i, i);
//       for (const sub of subPartitions) {
//         result.push([i, ...sub]);
//       }
//     }
//     return result;
//   }

//   const partitions = generatePartitions(n);

//   const products = [
//     ...new Set(
//       partitions.map((partition) => partition.reduce((a, b) => a * b, 1))
//     ),
//   ].sort((a, b) => a - b);

//   const range = products[products.length - 1] - products[0];
//   const average = products.reduce((sum, val) => sum + val, 0) / products.length;
//   const median =
//     products.length % 2 === 0
//       ? (products[products.length / 2 - 1] + products[products.length / 2]) / 2
//       : products[Math.floor(products.length / 2)];

//   return `Range: ${range} Average: ${average.toFixed(
//     2
//   )} Median: ${median.toFixed(2)}`;
// };

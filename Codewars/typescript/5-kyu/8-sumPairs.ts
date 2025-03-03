// Codewars 8
// Title : Sum of Pairs
// Question :   Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// Challange Url :  https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript
// Level : 5kyu

// Method : 1
export function sumPairs(ints: number[], s: number): [number, number] | void {
  const seen = new Set<number>();
  for (const num of ints) {
    const diff = s - num;
    if (seen.has(diff)) {
      return [diff, num];
    }
    seen.add(num);
  }
  return undefined;
}

// Method : 2

// Other Users Method
// export function sumPairs(ints: number[], s: number): [number, number] | void {
//   const seen = new Set();
//   for (const n of ints) {
//     if (seen.has(s - n)) return [s - n, n];
//     seen.add(n);
//   }
// }

// Codewars 13
// Title :  Best travel
// Question :   Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
// Challange Url :  https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/typescript
// Level : 5kyu

// Method : 1
export function chooseBestSum(
  t: number,
  k: number,
  ls: number[]
): number | null {
  if (ls.length < k) return null;

  function getCombinations<T>(arr: T[], k: number): T[][] {
    if (k === 0) return [[]];
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    const withFirst = getCombinations(rest, k - 1).map((comb) => [
      first,
      ...comb,
    ]);
    const withoutFirst = getCombinations(rest, k);
    return [...withFirst, ...withoutFirst];
  }

  const allCombinations = getCombinations(ls, k);

  let bestSum: number | null = null;

  for (const comb of allCombinations) {
    const sum = comb.reduce((acc, val) => acc + val, 0);
    if (sum <= t && (bestSum === null || sum > bestSum)) {
      bestSum = sum;
    }
  }

  return bestSum;
}

// Method : 2

// Other Users Method
// export function chooseBestSum(
//   t: number,
//   k: number,
//   ls: number[]
// ): number | null {
//   const combos = getCombinations(k, ls);
//   const distances = combos.map((x) => x.reduce((p, c) => p + c, 0));
//   const eligible = distances.filter((x) => x <= t);
//   return eligible.length > 0 ? Math.max(...eligible) : null;
// }

// function getCombinations(k: number, ls: number[]): number[][] {
//   const result: number[][] = [];
//   function helper(start: number, current: number[]) {
//     if (current.length === k) {
//       result.push(current.slice());
//       return;
//     }
//     for (let i = start; i < ls.length; i++) {
//       current.push(ls[i]);
//       helper(i + 1, current);
//       current.pop();
//     }
//   }
//   helper(0, []);
// }

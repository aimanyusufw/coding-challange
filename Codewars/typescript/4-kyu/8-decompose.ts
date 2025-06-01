// Codewars 8
// Title :  Square into Squares, protect trees!
// Question :   Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².
// Challange Url :  https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/typescript
// Level : 4kyu

// Method : 1
export const decompose = (n: number): number[] | null => {
  const decomposeHelper = (n: number, remainder: number): number[] | null => {
    for (let i = n - 1; i > 0; i--) {
      const square = i * i;
      if (square > remainder) continue;
      if (square === remainder) return [i];

      const next = decomposeHelper(i, remainder - square);
      if (next) return [...next, i];
    }

    return null;
  };

  return decomposeHelper(n, n * n);
};

// Method : 2

// Other Users Method

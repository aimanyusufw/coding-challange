// Codewars 5
// Title :  Matrik Determinant
// Question :   Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
// Challange Url :  https://www.codewars.com/kata/52a382ee44408cea2500074c/train/typescript
// Level : 4kyu

// Method : 1
export const determinant = (m: number[][]) => {
  const n = m.length;

  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  let det = 0;

  for (let col = 0; col < n; col++) {
    const minor = m.slice(1).map((row) => row.filter((_, idx) => idx !== col));

    det += (col % 2 === 0 ? 1 : -1) * m[0][col] * determinant(minor);
  }

  return det;
};

// Method : 2

// Other Users Method
// export function determinant(m: number[][]): number {
//   if (m.length > 2) {
//     return m[0].reduce(function (
//       sum: number,
//       val: number,
//       idx: number
//     ): number {
//       let add = (idx & 1) == 0 ? 1 : -1;
//       let sub = m.slice(1).map((elem) => elem.filter((_, i) => i != idx));
//       return sum + add * val * determinant(sub);
//     },
//     0);
//   } else if (m.length == 2) {
//     return m[0][0] * m[1][1] - m[0][1] * m[1][0];
//   } else {
//     return m[0][0];
//   }
// }

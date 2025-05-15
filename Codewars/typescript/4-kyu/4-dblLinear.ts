// Codewars 4
// Title :  Twice linear
// Question :   Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
// Challange Url :   https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript
// Level : 4kyu

// Method : 1
export const dblLinear = (n: number): number => {
  const u: number[] = [1];

  let i: number = 0;

  const seen: Set<number> = new Set([1]);

  const yQueue: number[] = [];
  const zQueue: number[] = [];

  while (u.length <= n) {
    const y: number = 2 * u[i] + 1;
    const z: number = 3 * u[i] + 1;

    if (!seen.has(y)) {
      yQueue.push(y);
      seen.add(y);
    }

    if (!seen.has(z)) {
      zQueue.push(z);
      seen.add(z);
    }

    const nextVal: number = Math.min(
      yQueue.length ? yQueue[0] : Infinity,
      zQueue.length ? zQueue[0] : Infinity
    );

    u.push(nextVal);

    if (yQueue.length && nextVal === yQueue[0]) {
      yQueue.shift();
    }
    if (zQueue.length && nextVal === zQueue[0]) {
      zQueue.shift();
    }

    i++;
  }

  return u[n];
};

// Method : 2

// Other Users Method
// export function dblLinear(n: number): number {
//   let array = [1];
//   let x = 0;
//   let y = 0;

//   for (let i = 0; i < n; i++) {
//     let nextX = 2 * array[x] + 1;
//     let nextY = 3 * array[y] + 1;

//     if (nextX <= nextY) {
//       array.push(nextX);
//       x++;

//       if (nextX === nextY) y++;
//     } else {
//       array.push(nextY);
//       y++;
//     }
//   }

//   return array[n];
// }

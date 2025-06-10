// Codewars 12
// Title :  Magnet particulars in box
// Question :   To help Professor Chambouliard can we calculate the function doubles that will take as parameter maxk and maxn
// Challange Url :  https://www.codewars.com/kata/56c04261c3fcf33f2d000534/typescript
// Level : 4kyu

// Method : 1
// export function doubles(maxk: number, maxn: number): number {
//   let total = 0;

//   for (let k = 1; k <= maxk; k++) {
//     for (let n = 1; n <= maxn; n++) {
//       total += 1 / (k * Math.pow(n + 1, 2 * k));
//     }
//   }

//   return total;
// }

// Method : 2
export function doubles(maxk: number, maxn: number): number {
  let total = 0;
  const threshold = 1e12;

  for (let k = 1; k <= maxk; k++) {
    const exponent = 2 * k;
    const maxSignificantN = Math.floor(
      Math.pow(threshold / k, 1 / exponent) - 1
    );
    const effectiveMaxN = Math.min(maxn, maxSignificantN);
    if (effectiveMaxN < 1) {
      break;
    }

    let innerSum = 0;
    for (let n = 1; n <= effectiveMaxN; n++) {
      const nPlusOne = n + 1;
      const powerValue = Math.pow(nPlusOne, exponent);
      innerSum += 1 / (k * powerValue);
    }

    total += innerSum;
  }

  return total;
}

// Other user method
// export function doubles(maxk: number, maxn: number): number {
//   let t: number = 0;
//   for (let i: number = 1; i <= maxn; i++) {
//     let temp: number = 1,
//       b: number = i + 1;
//     for (let j: number = 1; j <= maxk; j++) {
//       temp *= b * b;
//       t += 1 / (temp * j);
//     }
//   }
//   return t;
// }

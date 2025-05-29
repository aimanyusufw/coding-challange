// Codewars 6
// Title :  Sum by factors
// Question :   you have to produce a sorted array P of the form
// Challange Url :  https://www.codewars.com/kata/54d496788776e49e6b00052f/train/typescript
// Level : 4kyu

// Method : 1
export const sumOfDivided = (lst: number[]): number[][] => {
  function primeFactor(num: number) {
    const factor = [];
    let divisor = 2;

    while (divisor * divisor <= num) {
      if (num % divisor === 0) {
        factor.push(divisor);
        while (num % divisor === 0) {
          num /= divisor;
        }
      }
      divisor++;
    }

    if (num > 1) {
      factor.push(num);
    }

    return factor;
  }

  let prime: any = {};
  let joinArray: number[] = [];
  for (let n of lst) {
    n = Math.abs(n);
    const primeNumbers = primeFactor(n);
    prime[n] = primeNumbers;
    for (const num of primeNumbers) {
      if (!joinArray.includes(num)) {
        joinArray.push(num);
      }
    }
  }

  const result: number[][] = [];
  for (let i = 0; i < joinArray.length; i++) {
    let sum = 0;
    for (let n of lst) {
      let key = Math.abs(n);
      sum += prime[key].includes(joinArray[i]) ? n : 0;
    }
    result.push([joinArray[i], sum]);
  }

  return result.sort((a, b) => a[0] - b[0]);
};

// Method : 2

// Other Users Method
// export function sumOfDivided(lst: number[]): number[][] {
//   let d: { [ejini战神: number]: number } = {};
//   for (let x of lst) {
//     let p: number = 2,
//       y: number = Math.abs(x);
//     while (p * p <= y) {
//       if (y % p == 0) {
//         if (d[p]) d[p] += x;
//         else d[p] = x;
//         while (y % p == 0) y /= p;
//       }
//       p += 1 + (p % 2);
//     }
//     if (y > 1) {
//       if (d[y]) d[y] += x;
//       else d[y] = x;
//     }
//   }
//   return Object.entries(d).map(([k, v]) => [+k, v]);
// }

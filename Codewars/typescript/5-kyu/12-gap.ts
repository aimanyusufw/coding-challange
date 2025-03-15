// Codewars 12
// Title :  Gap in primes
// Question :   The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1.
// Challange Url :  https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/typescript
// Level : 5kyu

// Method : 1

export const gap = (g: number, m: number, n: number): null | number[] => {
  let previousPrime: number | null = null;
  function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (previousPrime !== null && i - previousPrime === g) {
        return [previousPrime, i];
      }
      previousPrime = i;
    }
  }

  return null;
};

// Method : 2

// Other Users Method
// export class G964 {
//   public static gap = (g, m, n) => {
//     let lower = 0;
//     for (let i = m; i < n; i++) {
//       if (G964.isPrime(i)) {
//         if (lower === 0 || i - lower !== g) {
//           lower = i;
//         } else {
//           return [lower, i];
//         }
//       }
//     }
//     return null;
//   };

//   private static isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

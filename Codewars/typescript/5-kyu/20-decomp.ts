// Codewars 20
// Title :  Factorial Decompotion
// Question :   The aim of the kata is to decompose n! (factorial n) into its prime factors.
// Challange Url :  https://www.codewars.com/kata/5a045fee46d843effa000070/train/typescript
// Level : 5 kyu

// Method : 1
export function decomp(n: number): string {
  function isPrime(x: number): boolean {
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return x > 1;
  }

  const primes: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  const result: string[] = [];

  for (const p of primes) {
    let count = 0;
    let k = p;

    while (k <= n) {
      count += Math.floor(n / k);
      k *= p;
    }

    if (count === 1) {
      result.push(`${p}`);
    } else {
      result.push(`${p}^${count}`);
    }
  }

  return result.join(" * ");
}

// Method : 2

// Other Users Method
// export function decomp(n: number): string {
//   const factors: { [key: string]: number } = {};
//   new Array(n).fill(1).forEach((_, i) => {
//     let divisor = 2;
//     let factorial = i + 1;
//     while (factorial > 1) {
//       if (factorial % divisor === 0) {
//         factorial /= divisor;
//         factors[divisor] = factors[divisor] + 1 || 1;
//       } else {
//         divisor++;
//       }
//     }
//   });

//   return Object.entries(factors)
//     .map(([key, value]) => {
//       if (value > 1) {
//         return `${key}^${value}`;
//       }
//       return `${key}`;
//     })
//     .join(" * ");
// }

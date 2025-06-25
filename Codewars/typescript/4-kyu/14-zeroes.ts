// Codewars 14
// Title :  Factorial tail
// Question :   How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.
// Challange Url :  https://www.codewars.com/kata/55c4eb777e07c13528000021/train/typescript
// Level : 4kyu

// Method : 1
export const zeroes = (base: number, number: number): number => {
  const primeFactors = (n: number): Map<number, number> => {
    const factors = new Map<number, number>();
    let d = 2;
    while (d * d <= n) {
      while (n % d === 0) {
        factors.set(d, (factors.get(d) || 0) + 1);
        n /= d;
      }
      d++;
    }
    if (n > 1) {
      factors.set(n, (factors.get(n) || 0) + 1);
    }
    return factors;
  };

  const countFactorInFactorial = (n: number, p: number): number => {
    let count = 0;
    let div = p;
    while (div <= n) {
      count += Math.floor(n / div);
      div *= p;
    }
    return count;
  };

  const baseFactors = primeFactors(base);

  const zeroesPerPrime = Array.from(baseFactors.entries()).map(
    ([prime, exponent]) => {
      const primeCount = countFactorInFactorial(number, prime);
      return Math.floor(primeCount / exponent);
    }
  );

  return Math.min(...zeroesPerPrime);
};

// Method : 2

// Other user method
// export const zeroes = (base: number, num: number) => {
//   const primeCount = getPrimeFactorsCount(base)
//   if (!primeCount.length) return 0

//   // get every base'factor count from 2 to num
//   const resultCount = primeCount.map(item => item[0]).reduce((acc, cur) => {
//     acc.push([cur, getFactorCount(num, cur)])
//     return acc
//   }, [] as Array<number[]>)
//   //  factor count ratios: divide num's factors count by base factors count
//   const ratios = resultCount.map((cur, idx) => {
//     return Math.floor(cur[1] / primeCount[idx][1])
//   }, [] as number[])
//   // the min ratio is the anwser
//   return Math.min(...ratios)
// };

// // get factor count from 2 to num
// function getFactorCount(num: number, factor: number): number {
//   let result = 0
//   while (num !== 0) {
//     num = Math.floor(num / factor)
//     result += num
//   }
//   return result
// }

// function getPrimeFactorsCount(num: number): Array<number[]> {
//   const result: Array<number[]> = []
//   if (num < 2) return result

//   let maxRange = 0
//   let rest = num
//   let i = 2
//   do {
//     maxRange = Math.floor(Math.sqrt(num))
//     // i is a factor
//     if (rest % i === 0) {
//       const part = [i]

//       // count how many factor i in num
//       let count = 0
//       while (rest % i === 0) {
//         rest /= i
//         ++count
//       }
//       part.push(count)
//       result.push(part)
//     }
//     // if i is 2 then add 1, or 2. aka ignore all even digit except 2
//     i += i % 2 ? 2 : 1
//   } while (i <= maxRange && rest !== 1)
//   // rest is a factor
//   if (rest !== 1) {
//     result.push([rest, 1])
//   }
//   return result
// }

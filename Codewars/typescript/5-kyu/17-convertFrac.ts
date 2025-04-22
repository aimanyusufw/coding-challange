// Codewars 17
// Title : Common Denominators
// Question :   You will have a list of rationals in the form
// Challange Url :  https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/typescript
// Level : 5 kyu

// Method : 1
export const convertFrac = (lst: [number, number][]): string => {
  if (lst.length === 0) return "";
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

  const simplified = lst.map(([num, den]) => {
    const factor = gcd(num, den);
    return [num / factor, den / factor] as [number, number];
  });

  const denominators = simplified.map((f) => f[1]);
  const commonDenominator = denominators.reduce((acc, d) => lcm(acc, d));

  return lst
    .map(([numerator, denominator]) => {
      const factor = commonDenominator / denominator;
      return `(${numerator * factor},${commonDenominator})`;
    })
    .join("");
};

// Method : 2

// Other Users Method
// export const convertFrac = (lst: [number, number][]): string => {
//   const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
//   const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
//   const cd = lst.reduce((a, [_, d]) => lcm(d, a), 1);
//   const lcd = lst.reduce((d, [a, c]) => gcd(d, (a * cd) / c), cd);
//   return lst.map(([n, d]) => `(${(n * cd) / d / lcd},${cd / lcd})`).join("");
// };

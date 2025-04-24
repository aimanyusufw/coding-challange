// Codewars 18
// Title : Josephus Survivor
// Question :   Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements
// Challange Url :  https://www.codewars.com/kata/555624b601231dc7a400017a/train/typescript
// Level : 5 kyu

// Method : 1
// export const josephusSurvivor = (n: number, k: number): number => {
//   const people: number[] = Array.from({ length: n }, (_, i) => i + 1);
//   let index = 0;
//   while (people.length > 1) {
//     index = (index + k - 1) % people.length;
//     people.splice(index, 1);
//   }
//   return people[0];
// };

// Method : 2
export const josephusSurvivor = (n: number, k: number): number => {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + k) % i;
  }
  return result + 1;
};

// Other Users Method
// export function josephusSurvivor(n: number, k: number): number {
//   return n === 1 ? 1 : ((josephusSurvivor(n - 1, k) + k - 1) % n) + 1;
// }

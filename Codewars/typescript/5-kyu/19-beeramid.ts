// Codewars 19
// Title :  Beermind
// Question :   Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make
// Challange Url :  https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript
// Level : 5 kyu

// Method : 1
// export const beeramid = (bonus: number, price: number): number => {
//   let beer = Math.floor(bonus / price);
//   let level = 0;
//   while ((level + 1) ** 2 <= beer) {
//     level++;
//     beer -= level ** 2;
//   }
//   return level;
// };

// Method : 2
export const beeramid = (bonus: number, price: number): number => {
  let beers = Math.floor(bonus / price);
  let level = 0;
  for (let needed = 1; beers >= needed * needed; level++, needed++) {
    beers -= needed * needed;
  }
  return level;
};

// Other Users Method
// export function beeramid(bonus: number, price: number): number {
//   let level: number = 0;
//   let n: number = 1;
//   let i: number = 1;
//   while (n <= Math.floor(bonus / price)) {
//     i++;
//     n += i ** 2;
//     level++;
//   }
//   return level;
// }

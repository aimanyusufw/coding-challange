// Codewars 15
// Title :  Josephus Permutation
// Question :   This problem takes its name by arguably the most important event in the life of the ancient historian Josephus:
// Challange Url :  https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/typescript
// Level : 5kyu

// Method : 1
export function josephus<T>(items: T[], k: number): T[] {
  const result: T[] = [];
  let index = 0;
  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    result.push(items.splice(index, 1)[0]);
  }
  return result;
}

// Method : 2

// Other Users Method
// export const josephus = (items: any[], k: number): any[] => {
//   let lst: any[] = [];
//   let i: number = (k - 1) % items.length;
//   while (items.length) {
//     lst.push(items[i]);
//     items.splice(i, 1);
//     i = (i + k - 1) % items.length;
//   }
//   return lst;
// };

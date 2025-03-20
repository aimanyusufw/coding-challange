// Codewars 14
// Title :  Is my friend cheating?
// Question :   The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
// Challange Url :  https://www.codewars.com/kata/5547cc7dcad755e480000004/train/typescript
// Level : 5kyu

// Method : 1
export function removeNb(n: number): number[][] {
  const sum = (n * (n + 1)) / 2;
  const result: number[][] = [];
  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      result.push([a, b]);
    }
  }
  return result;
}

// Method : 2

// Other Users Method
// export class G964 {
//   public static removeNb(n: number) {
//     var sum = (n * (n + 1)) / 2;
//     var result = [];
//     for (let a = 1; a < n; a++) {
//       if ((sum - a) % (a + 1) === 0) {
//         var b = (sum - a) / (a + 1);
//         if (b < n) result.push([a, b]);
//       }
//     }
//     return result;
//   }
// }

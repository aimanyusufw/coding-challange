// Codewars 11
// Title :  Count IP Addresses
// Question :   Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
// Challange Url :  https://www.codewars.com/kata/526989a41034285187000de4/train/typescript
// Level : 5kyu

// Method : 1
// export function ipsBetween(start: string, end: string): number {
//   let startResult: number = 0;
//   let endResult: number = 0;
//   const startArray: number[] = start.split(".").map(Number);
//   const endArray: number[] = end.split(".").map(Number);
//   for (let i = 0; i < 4; i++) {
//     startResult += startArray[i] * 256 ** (3 - i);
//     endResult += endArray[i] * 256 ** (3 - i);
//   }
//   return endResult - startResult;
// }

// Method : 2
export const ipsBetween = (start: string, end: string): number => {
  const ipToNumber = (ip: string): number =>
    ip
      .split(".")
      .map(Number)
      .reduce((acc, cur, i) => acc + cur * 256 ** (3 - i), 0);
  return ipToNumber(end) - ipToNumber(start);
};

// Other Users Method
// export function ipsBetween(start: string, end: string): number {
//   function ipToNumber(ip: string) {
//     const [first, second, third, fourth] = ip.split(".").map(Number);
//     return fourth + 256 * (third + 256 * (second + 256 * first));
//   }

//   return ipToNumber(end) - ipToNumber(start);
// }

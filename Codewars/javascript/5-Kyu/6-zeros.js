// Codewars 6
// Title :  Number of trailing zeros of N!
// Instructions :    Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// Challange Url :  https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
// Level : 5kyu

// Method : 1
export function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

// Method 2

// Other Users Method
// function zeros(n) {
//   var zs = 0;
//   while (n > 0) {
//     n = Math.floor(n / 5);
//     zs += n;
//   }
//   return zs;
// }

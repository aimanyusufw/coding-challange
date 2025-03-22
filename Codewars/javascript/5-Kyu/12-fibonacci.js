// Codewars 12
// Title :  Memoized Fibonacci
// Instructions :   The Fibonacci sequence is traditionally used to explain tree recursion.
// Challange Url :  https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript
// Level : 5kyu

// Method : 1
export function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0n,
    b = 1n;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return Number(b);
}

// Method 2

// Other Users Method
// var cache = [];
// var fibonacci = function (n) {
//   if (n == 0 || n == 1) return n;
//   if (cache[n]) return cache[n];
//   return (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
// };

// Codewars 13
// Title :  Factorial
// Instructions : Your task is to write function factorial.
// Challange Url :  https://www.codewars.com/kata/57a049e253ba33ac5e000212/dart
// Level : 7 kyu

// Method : 1
int factorial(n) => n <= 1 ? 1 : n * factorial(n - 1);

// Method 2

// Other Users Method
// int factorial(int n) {
//   return List.generate(n, (i) => i + 1).fold(1, (int a, b) => a * b);
// }

// Codewars 14
// Title :  Strong Number (Special Numbers Series #2)
// Instructions : Given a positive number, find if it is strong or not, and return
// Challange Url :  https://www.codewars.com/kata/5a4d303f880385399b000001/dart
// Level : 7 kyu

// Method : 1
String strong(int n) {
  List<int> arrayN = n.toString().split("").map((n) => int.parse(n)).toList();
  int factorial(n) => n <= 1 ? 1 : n * factorial(n - 1);
  int result = 0;
  for (var n in arrayN) {
    result += factorial(n);
  }
  return result == n ? "STRONG!!!!" : "Not Strong !!";
}

// Method 2

// Other Users Method
// String strong(n) {
//   final sum = n
//       .toString()
//       .split('')
//       .map((num) => factorial(int.parse(num)))
//       .fold(0, (a, b) => a + b);
//   return n == sum ? "STRONG!!!!" : "Not Strong !!";
// }

// int factorial(int n) => n == 0 ? 1 : n * factorial(n - 1);

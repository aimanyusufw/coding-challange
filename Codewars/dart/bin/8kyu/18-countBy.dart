// Codewars 18
// Title : Count by X
// Instructions :  Create a function with two arguments that will return an array of the first n multiples of x.
// Challange Url :  https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/dart
// Level : 8kyu

// Method : 1
List<int> countBy(int x, int n) {
  List<int> result = [];
  for (var i = 1; i <= n; i++) {
    result.add(i * x);
  }
  return result;
}

// Method : 2

// Other Users Method
// List<int> countBy(int c, int x) => List.generate(x, (i) => (i + 1) * c);

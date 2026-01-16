// Codewars 6
// Title :   Sum of numbers from 0 to n
// Instructions :  We want to generate a function that computes the series starting from 0 and ending until the given number.
// Challange Url :  https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/dart
// Level : 7 kyu

// Method : 1
class SequenceSum {
  static String showSequence(int n) {
    if (n > 0) {
      return "${List.generate(n + 1, (index) => index).join("+")} = ${(n * (n + 1) / 2).toInt()}";
    }
    return n == 0 ? "0=0" : "$n<0";
  }
}

// Method 2

// Other Users Method
// class SequenceSum {
//   static String showSequence(num n) {
//     if (n == 0) return "0=0";
//     if (n < 0) return "${n}<0";
//     List<int> list = new List<int>.generate(n + 1, (i) => i);
//     return '${list.join("+")} = ${list.reduce((c, n) => c + n)}';
//   }
// }

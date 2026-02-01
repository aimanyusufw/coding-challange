// Codewars 18
// Title :  Simple striong characthers
// Instructions : return a list of ints detailing the count of uppercase letters, lowercase,
// Challange Url :  https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/dart
// Level : 7 kyu

// Method : 1
// List<int> solve(String s) {
//   List<int> res = [0, 0, 0, 0];
//   for (var i = 0; i < s.length; i++) {
//     if (s[i].contains(RegExp(r'[A-Z]'))) {
//       res[0] += 1;
//     } else if (s[i].contains(RegExp(r'[a-z]'))) {
//       res[1] += 1;
//     } else if (s[i].contains(RegExp(r'[0-9]'))) {
//       res[2] += 1;
//     } else {
//       res[3] += 1;
//     }
//   }
//   return res;
// }

// Method 2

// Other Users Method
List<int> solve(String s) => [
  "[A-Z]",
  "[a-z]",
  "\\d",
  "[^A-Za-z\\d]",
].map((r) => RegExp(r).allMatches(s).length).toList();

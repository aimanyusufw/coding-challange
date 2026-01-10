// Codewars 1
// Title :  Get the middle character
// Instructions :   Your job is to return the middle character(s) of the string.
// Challange Url :  https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/dart
// Level : 7 kyu

// Method : 1
// String getMiddle(String s) {
//   int stringLenght = s.length;
//   return stringLenght % 2 == 0
//       ? s[(stringLenght / 2).toInt() - 1] + s[(stringLenght / 2).toInt()]
//       : s[(stringLenght / 2).toInt()];
// }

// Method 2
String getMiddle(String s) {
  int median = (s.length / 2).toInt();
  return s.length % 2 == 0 ? s[median - 1] + s[median] : s[median];
}

// Other Users Method
// String getMiddle(String s) => (s.length.isOdd) ? s[s.length~/2] : s[s.length~/2-1] + s[s.length~/2];

// Codewars 7
// Title :   Tidy Number (Special Numbers Series #9)
// Instructions :  Given a number, determine if it is tidy or not.
// Challange Url :  https://www.codewars.com/kata/5a87449ab1710171300000fd/train/dart
// Level : 7 kyu

// Method : 1
bool tidyNumber(n) {
  List<int> digits = n.toString().split('').map(int.parse).toList();
  for (var i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) return false;
  }
  return true;
}

// Method 2

// Other Users Method
// bool tidyNumber(n) {
//   var result = n.toString().split('');
//   result.sort();
//   return result.join() == n.toString();
// }

// Codewars 4
// Title :  Hex to Decimal
// Instructions :   Complete the function which converts hex number (given as a string) to a decimal number.
// Challange Url :  https://www.codewars.com/kata/57a4d500e298a7952100035d/train/dart
// Level : 8kyu

// Method : 1
// int hexToDec(String s) {
//   return int.parse(s, radix: 16);
// }

// Method 2
int hexToDec(String s) => int.parse(s, radix: 16);

// Other Users Method
// int hexToDec(String hexString) => hexString.contains('-')
//       ? int.parse('-' + '0x$hexString'.replaceAll('-', ''))
//       : int.parse('0x$hexString');

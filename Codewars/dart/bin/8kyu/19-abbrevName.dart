// Codewars 19
// Title : Abbreviate a two word name
// Instructions :  Write a function to convert a name into initials.
// Challange Url :  https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/dart
// Level : 8kyu

// Method : 1
String abbrevName(String name) =>
    name.split(' ').map((s) => s[0].toUpperCase()).join(".");

// Method : 2

// Other Users Method
// String abbrevName(String name) {
//   return "${name[0]}.${name[name.indexOf(" ") + 1]}".toUpperCase();
// }

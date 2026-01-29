// Codewars 15
// Title :  V A P O R C O D E
// Instructions : Write a function that converts any sentence into a V A P O R W A V E sentence.
// Challange Url :  https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/dart
// Level : 7 kyu

// Method : 1
// String vaporCode(String s) {
//   return s.toUpperCase().replaceAll(" ", "").split("").join("  ");
// }

// Method 2
String vaporCode(String s) =>
    s.toUpperCase().replaceAll(" ", "").split("").join("  ");

// Other Users Method
// String vaporCode(String s) => s.replaceAll(' ', '').split('').map( (c)=> c.toUpperCase() ).join('  ');

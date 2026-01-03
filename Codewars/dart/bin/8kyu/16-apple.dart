// Codewars 16
// Title : Alan Partridge II - Apple Turnover
// Instructions :   Your job is simple, if x squared is more than 1000,
// Challange Url :  https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/dart
// Level : 8kyu

// Method : 1
String apple(dynamic a) {
  var x = int.parse(a.toString());
  return x * x > 1000
      ? "It's hotter than the sun!!"
      : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// Method : 2

// Other Users Method
// String apple(dynamic a) {
//   return (a = int.parse(a.toString())) * a > 1000 ?
//     "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
// }

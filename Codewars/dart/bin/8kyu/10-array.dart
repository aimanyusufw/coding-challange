// Codewars 10
// Title : Remove First and Last Character part two
// Instructions : Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// Challange Url :  https://www.codewars.com/kata/570597e258b58f6edc00230d/train/dart
// Level : 8kyu

// Method : 1
dynamic array(string) {
  List<String> splitedString = string.split(",");
  return splitedString.length <= 2
      ? Null
      : splitedString.sublist(1, splitedString.length - 1).join(" ");
}

// Method : 2

// Other Users Method
// dynamic array(string) {
//   List<String> res = string.split(",");
//   return res.length > 2 ? res.sublist(1, res.length - 1).join(" ") : Null;
// }

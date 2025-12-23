// Codewars 11
// Title :  Reverse List Order
// Instructions :   In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Challange Url :  https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/dart
// Level : 8kyu

// Method : 1
// List<int> reverseList(List<int> list) {
//   List<int> reversed = [];
//   for (var i = list.length - 1; i >= 0; i--) {
//     reversed.add(list[i]);
//   }
//   return reversed;
// }

// Method : 2
List<int> reverseList(List<int> list) {
  return list.reversed.toList();
}

// Other Users Method

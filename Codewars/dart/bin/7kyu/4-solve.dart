// Codewars 4
// Title :   Simple remove duplicates
// Instructions :  Remove the duplicates from a list of integers,
// Challange Url :  https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/dart
// Level : 7 kyu

// Method : 1
// List<int> solve(List<int> arr) {
//   List<int> res = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (!res.contains(arr[i])) {
//       res.add(arr[i]);
//     }
//   }
//   return res.reversed.toList();
// }

// Method 2
List<int> solve(List<int> arr) =>
    arr.reversed.toSet().toList().reversed.toList();

// Other Users Method

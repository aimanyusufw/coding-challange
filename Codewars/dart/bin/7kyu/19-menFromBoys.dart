// Codewars 19
// Title :  Sort Out of the men from boys
// Instructions : Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
// Challange Url :  https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/dart
// Level : 7 kyu

// Method : 1
List<int> menFromBoys(arr) {
  var distinct = arr.toSet();
  List<int> even = distinct.where((x) => x % 2 == 0).toList();
  List<int> odd = distinct.where((x) => x % 2 != 0).toList();
  even.sort();
  odd.sort((a, b) => b.compareTo(a));
  return [...even, ...odd];
}

// Method 2

// Other Users Method
// List<int> menFromBoys(arr) {
//   List<int> even = arr.where((item) => item % 2 == 0).toList();
//   List<int> odd = arr.where((item) => item % 2 != 0).toList();
//   even.sort((a, b) => a - b);
//   odd.sort((a, b) => b - a);
//   List<int> newarr = new List.from(even)..addAll(odd);
//   return newarr.toSet().toList();
// }

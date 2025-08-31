// Codewars 9
// Title :  My head is at the wrong end!
// Instructions :   you have to change the element positions with the same exact logics
// Challange Url :  https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/dart
// Level : 8kyu

// Method : 1
List<String> fixTheMeerkat(List<String> arr) {
  String temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

// Method : 2

// Other Users Method
// List<String> fixTheMeerkat(List<String> arr) => arr.reversed.toList();

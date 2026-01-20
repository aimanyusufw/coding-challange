// Codewars 10
// Title :   Nth Smallest Element (Array Series #4)
// Instructions :  Given an array/list of integers, find the Nth smallest element in the array.
// Challange Url :  https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/dart
// Level : 7 kyu

// Method : 1
int nthSmallest(arr, pos) {
  List<int> sorted = List.from(arr);
  sorted.sort();
  return sorted[pos - 1];
}

// Method 2

// Other Users Method
// int nthSmallest(arr, pos) => (arr..sort())[pos-1];

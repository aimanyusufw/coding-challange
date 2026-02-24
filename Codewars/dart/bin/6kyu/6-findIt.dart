// Codewars 6
// Title :  Find the odd int
// Instructions :   Given an array of integers, find the one that appears an odd number of times.
// Challange Url :  https://www.codewars.com/kata/54da5a58ea159efa38000836/train/dart
// Level : 6 kyu

// Method : 1
int findIt(List<int> seq) {
  Map<int, int> counts = {};
  for (var item in seq) {
    counts[item] = (counts[item] ?? 0) + 1;
  }
  for (var entry in counts.entries) {
    if (entry.value % 2 != 0) {
      return entry.key;
    }
  }
  return 0;
}

// Method 2

// Other Users Method

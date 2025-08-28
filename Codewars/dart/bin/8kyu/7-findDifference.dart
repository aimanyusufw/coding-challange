// Codewars 7
// Title :  Diffrence of Volumes of Cuboids
// Instructions :   You must find the difference of the cuboids' volumes regardless of which is bigger.
// Challange Url :  https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/dart
// Level : 8kyu

// Method : 1
import 'dart:math';

int findDifference(List<int> a, List<int> b) {
  int volumeA = a[0] * a[1] * a[2];
  int volumeB = b[0] * b[1] * b[2];
  return max(volumeA, volumeB) - min(volumeA, volumeB);
}

// Method 2

// Other Users Method
// int findDifference(List<int> a, List<int> b) =>
    // (a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y)).abs();
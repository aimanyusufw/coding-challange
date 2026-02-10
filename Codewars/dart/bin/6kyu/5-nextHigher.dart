// Codewars 5
// Title :  Basics 08: Find next higher number with same Bits (1's)
// Instructions :   Your task is to find the next higher number (int) with the same number of '1'- Bits.
// Challange Url :  https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/dart
// Level : 6 kyu

// Method : 1
int nextHigher(int n) {
  int i = n & -n;
  int j = n + i;
  return j | (((n ^ j) >> 2) ~/ i);
}

// Method 2

// Other Users Method
// int nextHigher(int n) {
//   int o = n & -n, v = n + o, p = (n ^ v) ~/ o >> 2;
//   return n == 0 ? 0 : v | p;
// }

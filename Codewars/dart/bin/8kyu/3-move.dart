// Codewars 3
// Title :  Grasshopper - Terminal game move function
// Instructions :   In this game the hero move from left to right.
// Challange Url :  https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/dart
// Level : 8kyu

// Method : 1
// int move(int pos, int roll) {
//   int rollPos = roll * 2;
//   return pos + rollPos;
// }

// Method 2
int move(int pos, int roll) {
  return pos + roll * 2;
}

// Other Users Method
// int move(int pos, int roll) => pos + roll * 2;

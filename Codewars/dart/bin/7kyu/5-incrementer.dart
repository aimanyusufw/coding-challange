// Codewars 5
// Title :   Increment
// Instructions :  Given an input of an array of digits
// Challange Url :  https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/dart
// Level : 7 kyu

// Method : 1
List<int> incrementer(List<int> arr) {
  for (var i = 0; i < arr.length; i++) {
    int inc = arr[i] + i + 1;
    arr[i] = inc > 9 ? inc % 10 : inc;
  }
  return arr;
}

// Method 2

// Other Users Method
// List<int> incrementer(List<int> nums) {
//   return nums.asMap().entries.map((e) => (e.value + e.key + 1) % 10).toList();
// }

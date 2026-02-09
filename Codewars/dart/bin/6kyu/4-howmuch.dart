// Codewars 4
// Title :  How much?
// Instructions :   Could you tell me in each possible case
// Challange Url :  https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/dart
// Level : 6 kyu

// Method : 1
List<List<String>> howmuch(int m, int n) {
  List<List<String>> result = [];
  int start = m < n ? m : n;
  int end = m < n ? n : m;
  for (var i = start; i <= end; i++) {
    if ((i - 1) % 9 == 0 && (i - 2) % 7 == 0) {
      int c = (i - 1) ~/ 9;
      int b = (i - 2) ~/ 7;
      result.add(["M: $i", "B: $b", "C: $c"]);
    }
  }
  return result;
}

// Method 2

// Other Users Method
// List<List<String>> howmuch(int m, int n) {
//   int min = Math.min(m, n);
//   int max = Math.max(m, n);

//   List<List<String>> result = [];

//   for (int zloty = min; zloty <= max; zloty++) {
//     if (zloty % 9 == 1 && zloty % 7 == 2) {
//       result.add(['M: $zloty', 'B: ${zloty ~/ 7}', 'C: ${zloty ~/ 9}']);
//     }
//   }

//   return result;
// }

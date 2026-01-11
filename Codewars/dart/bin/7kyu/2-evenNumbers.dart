// Codewars 2
// Title :  Even number in array
// Instructions :  Return a new array of length number containing
// Challange Url :  https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/dart
// Level : 7 kyu

// Method : 1
// List<int> evenNumbers(List<int> numbers, int n) {
//   List<int> res = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       res.add(numbers[i]);
//     }
//   }
//   return res.sublist(res.length - n);
// }

// Method 2
List<int> evenNumbers(List<int> l, int n) {
  List<int> res = l.where((n) => n % 2 == 0).toList();
  return res.sublist(res.length - n);
}

// Other Users Method
// List<int> evenNumbers(List<int> inputList, int n) {
//   var evenNumbersList = inputList.where((num) => num.isEven).toList();
//   return evenNumbersList.sublist(evenNumbersList.length - n);
// }

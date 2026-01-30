// Codewars 16
// Title :  Alphabetical Addition
// Instructions : Your task is to add up letters to one letter.
// Challange Url :  https://www.codewars.com/kata/5d50e3914861a500121e1958/train/dart
// Level : 7 kyu

// Method : 1
String addLetters(List<String> letters) {
  if (letters.isEmpty) return 'z';
  int res =
      letters.fold(0, (prev, element) => prev + (element.codeUnitAt(0) - 96)) %
      26;
  return String.fromCharCode(res == 0 ? 122 : res + 96);
}

// Method 2

// Other Users Method
// String alphabet = 'abcdefghijklmnopqrstuvwxyz';
// String addLetters(List<String> letters) =>
//     alphabet[letters.fold(25, (acc, x) => acc + (alphabet.indexOf(x) + 1)) %
//         26];

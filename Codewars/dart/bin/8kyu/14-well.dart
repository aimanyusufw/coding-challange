// Codewars 14
// Title :  Well of ideas - easy version
// Instructions :   For every good kata idea there seem to be quite a few bad ones!
// Challange Url :  https://www.codewars.com/kata/57f222ce69e09c3630000212/train/dart
// Level : 8kyu

// Method : 1
String well(List<String> x) {
  int goodIdea = 0;
  for (var idea in x) {
    if (idea == "good") {
      goodIdea++;
    }
    if (goodIdea > 2) {
      return "I smell a series!";
    }
  }
  return goodIdea < 1 ? "Fail!" : "Publish!";
}

// Method : 2

// Other Users Method
// String well(List<String> x) {
//   var n = x.where((x) => x == 'good').length;
//   return n > 2
//       ? 'I smell a series!'
//       : n > 0
//       ? 'Publish!'
//       : 'Fail!';
// }

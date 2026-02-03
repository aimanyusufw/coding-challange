// Codewars 20
// Title :  Indexed capitalizion
// Instructions : Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices.
// Challange Url :  https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/dart
// Level : 7 kyu

// Method : 1
String capitalize(String s, List<int> ind) {
  List<String> res = s.split('');
  for (var i = 0; i < ind.length; i++) {
    if (ind[i] < s.length) {
      res[ind[i]] = res[ind[i]].toUpperCase();
    }
  }
  return res.join("");
}

// Method 2

// Other Users Method
// String capitalize(String s, List<int> ind) {
// return List.generate(s.length, (i) => 
//                      ind.contains(i) ? s[i].toUpperCase() : s[i]).join('');
// }
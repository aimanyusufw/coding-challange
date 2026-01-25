// Codewars 12
// Title :  Automorphic Number (Special Numbers Series #6)
// Instructions : Given a positive number, determine if it is Automorphic or not
// Challange Url :  https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/dart
// Level : 7 kyu

// Method : 1
String automorphic(int n) {
  String stringN = n.toString();
  String stringSquare = (n * n).toString();
  return stringSquare.substring(
            stringSquare.length - stringN.length,
            stringSquare.length,
          ) ==
          stringN
      ? "Automorphic"
      : "Not!!";
}

// Method 2

// Other Users Method
// String automorphic(n) => (n * n).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';

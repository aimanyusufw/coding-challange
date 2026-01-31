// Codewars 17
// Title :  The office 1 - Outed
// Instructions : Your colleagues have been looking over your shoulder.
// Challange Url :  https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/dart
// Level : 7 kyu

// Method : 1
String outed(Map<String, int> meet, String boss) {
  int total = 0;
  meet.forEach((key, value) => total += key == boss ? value * 2 : value);
  return (total / meet.length).ceil() <= 5
      ? "Get Out Now!"
      : "Nice Work Champ!";
}

// Method 2

// Other Users Method

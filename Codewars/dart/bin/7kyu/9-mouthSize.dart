// Codewars 9
// Title :   The Wide-Mouthed frog!
// Instructions :  Your goal in this kata is to create complete the mouth_size
// Challange Url :  https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/dart
// Level : 7 kyu

// Method : 1
// String mouthSize(String animal) {
//   return animal.toLowerCase() == "alligator" ? "small" : "wide";
// }

// Method 2
String mouthSize(String animal) =>
    animal.toLowerCase() == "alligator" ? "small" : "wide";

// Other Users Method
// String mouthSize(String animal){
//   return animal.trim().toLowerCase() == "alligator" ? "small" : "wide";
// }

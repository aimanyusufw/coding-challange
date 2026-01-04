// Codewars 17
// Title : Price of mangos
// Instructions :  For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Challange Url :  https://www.codewars.com/kata/57a77726bb9944d000000b06/train/dart
// Level : 8kyu

// Method : 1
// int mango(int qty, int price) {
//   return (qty - (qty / 3).toInt()) * price;
// }

// Method : 2
int mango(int qty, int price) => (qty - (qty / 3).toInt()) * price;

// Other Users Method
// int mango(int quantity, int price) {
//   return (quantity - quantity ~/ 3) * price;
// }

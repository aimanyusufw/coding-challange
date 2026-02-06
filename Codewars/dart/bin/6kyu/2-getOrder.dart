// Codewars 2
// Title :  New Cashier Does Not Know About Space or Shift
// Instructions :   Some new cashiers started to work at your restaurant.
// Challange Url :  https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/dart
// Level : 6 kyu

// Method : 1
String getOrder(String order) {
  List<String> menus = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  List<String> res = [];
  for (var menu in menus) {
    int count = RegExp(menu, caseSensitive: false).allMatches(order).length;
    for (var i = 0; i < count; i++) {
      res.add(menu);
    }
  }
  return res.join(" ");
}

// Method 2

// Other Users Method
// String getOrder(String input) {
//   // your code here
//   var answer = [];
//   List<String> menu = ['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke'];
//   for(var i = 0; i < menu.length; i++){
//     new RegExp(menu[i].toLowerCase()).allMatches(input).forEach((x) => answer.add(menu[i]));
//   }
//   return answer.join(' ');
// }

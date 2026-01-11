// Codewars 3
// Title :   Speed Control
// Instructions :  We can calculate John's average hourly speed on every section
// Challange Url :  https://www.codewars.com/kata/56484848ba95170a8000004d/train/dart
// Level : 7 kyu

// Method : 1
int gps(int s, List<double> x) {
  if (x.length <= 1) return 0;
  List<double> speeds = [];
  for (var i = 0; i < x.length - 1; i++) {
    double deltaDistance = (x[i + 1] - x[i]).abs();
    speeds.add((3600 * deltaDistance.abs()) / s);
  }
  return speeds.reduce((cur, next) => cur > next ? cur : next).floor();
}

// Method 2

// Other Users Method
// int gps(int s, List<double> x) {
//   var maxSpeed = 0;
//   for (int i = 1; i <= x.length - 1; i++) {
//     maxSpeed = [
//       maxSpeed,
//       (3600 * (x[i] - (x[i - 1])) / s),
//     ].reduce((c, n) => c > n ? c : n).toInt();
//   }
//   return maxSpeed;
// }

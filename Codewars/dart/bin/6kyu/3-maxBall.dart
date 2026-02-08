// Codewars 3
// Title :  Ball upwards
// Instructions :   You throw a ball vertically upwards with an initial speed v0 (in km per hour).
// Challange Url :  https://www.codewars.com/kata/566be96bb3174e155300001b/train/dart
// Level : 6 kyu

// Method : 1
int maxBall(int v0KmH) {
  double v0 = v0KmH / 3.6;
  double g = 9.81;

  double maxHeight = -1.0;
  int bestTenth = 0;
  for (int i = 0; ; i++) {
    double t = i / 10.0;

    double h = (v0 * t) - (0.5 * g * t * t);

    if (h < 0 && i > 0) break;

    if (h >= maxHeight) {
      maxHeight = h;
      bestTenth = i;
    } else {
      break;
    }
  }

  return bestTenth;
}

// Method 2

// Other Users Method
// int maxBall(int v0) {
//   return (v0 / 3.5316).round();
// }

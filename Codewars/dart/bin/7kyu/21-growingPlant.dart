// Codewars 21
// Title :  Simple Fun #74: Growing Plant
// Instructions : Each day a plant is growing by upSpeed meters.
// Challange Url :  https://www.codewars.com/kata/58941fec8afa3618c9000184/train/dart
// Level : 7 kyu

// Method : 1
int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
  int days = 0;
  int height = 0;
  while (true) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) return days;
    height -= downSpeed;
  }
}

// Method 2

// Other Users Method
// int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
//   if (desiredHeight - upSpeed <= 0) return 1;
//   return growingPlant(upSpeed, downSpeed, desiredHeight + downSpeed - upSpeed) + 1;
// }

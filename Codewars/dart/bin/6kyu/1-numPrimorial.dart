// Codewars 2
// Title :  Primorial Of a Number
// Instructions :   Given a number N , calculate its primorial.
// Challange Url :  www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/dart
// Level : 6 kyu

// Method : 1
int numPrimorial(int n) {
  List<int> primes = [];
  outerLoop:
  for (int i = 2; primes.length < n; i++) {
    for (int x = 2; x < i; x++) {
      if (i % x == 0) {
        continue outerLoop;
      }
    }
    primes.add(i);
  }
  return primes.fold(1, (a, b) => a * b);
}

// Method 2

// Other Users Method
// int numPrimorial(int n) {
//   bool isPrime(int n) => List.generate(n ~/ 2, (i) => i+2).every((i) => n%i != 0) || n == 2;
//   int i = 0; int sum = 1; int numb = 0;
//   while (i <= n) {
//     if (isPrime(++numb)){
//       i++;
//       sum *= numb;
//     }
//   }
//   return sum;
// }

// Codewars 8
// Title :   Balanced Number (Special Numbers Series #1 )
// Instructions :  Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced"
// Challange Url :  https://www.codewars.com/kata/5a4e3782880385ba68000018/train/dart
// Level : 7 kyu

// Method : 1
// String balancedNum(int numb) {
//   // 1. Ubah angka menjadi string agar mudah diakses indeksnya
//   String s = numb.toString();
//   int len = s.length;

//   // 2. Jika panjang angka kurang dari 3 (1 atau 2 digit),
//   // maka tidak ada angka di kiri/kanan untuk dibandingkan.
//   // Secara otomatis dianggap "Balanced".
//   if (len <= 2) return "Balanced";

//   // 3. Tentukan indeks batas untuk sisi kiri dan kanan
//   // Menggunakan pembagian bulat (truncating division)
//   int leftEnd = (len - 1) ~/ 2;
//   int rightStart = (len / 2).floor() + 1;

//   int leftSum = 0;
//   int rightSum = 0;

//   // 4. Hitung jumlah digit di sisi kiri
//   for (int i = 0; i < leftEnd; i++) {
//     leftSum += int.parse(s[i]);
//   }

//   // 5. Hitung jumlah digit di sisi kanan
//   for (int i = rightStart; i < len; i++) {
//     rightSum += int.parse(s[i]);
//   }

//   // 6. Bandingkan hasilnya
//   return leftSum == rightSum ? "Balanced" : "Not Balanced";
// }

// Method 2
String balancedNum(int numb) {
  String s = numb.toString();
  int len = s.length;
  if (len <= 2) return "Balanced";
  int leftEnd = (len - 1) ~/ 2;
  int rightStart = (len / 2).floor() + 1;
  int leftSum = 0;
  int rightSum = 0;
  for (int i = 0; i < leftEnd; i++) {
    leftSum += int.parse(s[i]);
  }
  for (int i = rightStart; i < len; i++) {
    rightSum += int.parse(s[i]);
  }
  return leftSum == rightSum ? "Balanced" : "Not Balanced";
}

// Other Users Method
// String balancedNum(numb) {
//   List<int> s = numb
//       .toString()
//       .split("")
//       .map((c) => c.codeUnitAt(0) - "0".codeUnitAt(0))
//       .toList();
//   int len = (s.length / 2).floor() - (s.length % 2 == 1 ? 0 : 1);
//   return s.sublist(0, len).fold(0, (acc, item) => acc + item) ==
//           s.sublist(s.length - len).fold(0, (acc, item) => acc + item)
//       ? "Balanced"
//       : "Not Balanced";
// }

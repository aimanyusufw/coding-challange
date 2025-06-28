// Codewars 17
// Title :  Romans Numeral Helpers
// Question :  Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.
// Challange Url :  https://www.codewars.com/kata/5647c3858d4acbbe550000ad/train/typescript
// Level : 4kyu

// Method : 1
export class RomanNumerals {
  static toRoman(num) {
    const roman = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let result = "";
    for (const [sym, val] of roman) {
      while (num >= val) {
        result += sym;
        num = num - val;
      }
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    let index = 0;
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    while (index < str.length) {
      if (str.slice(index, index + 2) in roman) {
        result += roman[str.slice(index, index + 2)];
        index += 2;
      } else {
        result += roman[str[index]];
        index += 1;
      }
    }
    return result;
  }
}

// Method : 2

// Other user method
// var numerals = [
//   ["M", 1000],
//   ["CM", 900],
//   ["D", 500],
//   ["CD", 400],
//   ["C", 100],
//   ["XC", 90],
//   ["L", 50],
//   ["XL", 40],
//   ["X", 10],
//   ["IX", 9],
//   ["V", 5],
//   ["IV", 4],
//   ["I", 1],
// ];

// RomanNumerals = {
//   toRoman: function (v) {
//     var s = "";
//     numerals.forEach(function (n) {
//       while (v >= n[1]) {
//         s += n[0];
//         v -= n[1];
//       }
//     });
//     return s;
//   },
//   fromRoman: function (s) {
//     var v = 0;
//     numerals.forEach(function (n) {
//       while (s.substr(0, n[0].length) == n[0]) {
//         s = s.substr(n[0].length);
//         v += n[1];
//       }
//     });
//     return v;
//   },
// };

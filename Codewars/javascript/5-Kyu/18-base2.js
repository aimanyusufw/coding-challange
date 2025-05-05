// Codewars 18
// Title :  Base -2
// Instructions :   In this Kata you must convert integers numbers from and to a negative-base binary system.
// Challange Url :  https://www.codewars.com/kata/54c14c1b86b33df1ff000026/train/javascript
// Level : 5kyu

// Method : 1
export function intToNegabinary(n) {
  if (n === 0) return "0";
  let result = "";
  while (n !== 0) {
    let remainder = n % -2;
    n = Math.trunc(n / -2);
    if (remainder < 0) {
      remainder += 2;
      n += 1;
    }
    result = remainder + result;
  }
  return result;
}

export function negabinaryToInt(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const digit = parseInt(s[s.length - 1 - i]);
    res += digit * Math.pow(-2, i);
  }
  return res;
}

// Method 2

// Other Users Method
function intToNegabinary(number) {
  var Schroeppel4 = 0xaaaaaaaa;
  return ((number + Schroeppel4) ^ Schroeppel4).toString(2);
}
function negabinaryToInt(s) {
  return [...s].reduce((i, d) => +d - i * 2, 0);
}

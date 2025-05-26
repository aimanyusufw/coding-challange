// Codewars 9
// Title :  Adding Big Numbers
// Instructions :   Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Challange Url :  https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
// Level : 4kyu

// Method : 1
export const add = (a, b) => {
  a = a.replace(/^0+/, "") || "0";
  b = b.replace(/^0+/, "") || "0";

  let carry = 0;
  let result = "";

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const digitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

    const sum = digitA + digitB + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result.replace(/^0+/, "") || "0";
};

// Method 2

// Other Users Method
function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

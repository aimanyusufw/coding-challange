// Codewars 7
// Title :  Sum String as Number
// Instructions :   Given the string representations of two integers, return the string representation of the sum of those integers.
// Challange Url :  https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
// Level : 4kyu

// Method : 1
export const sumStrings = (a, b) => {
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
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

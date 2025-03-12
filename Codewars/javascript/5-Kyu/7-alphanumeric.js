// Codewars 7
// Title :  Nor very secure
// Instructions :   In this example you have to validate if a user input string is alphanumeric.
// Challange Url :  https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
// Level : 5kyu

// Method : 1
export function alphanumeric(string) {
  return /^[a-zA-Z0-9]+$/.test(string);
}

// Method 2

// Other Users Method
// let alphanumeric = s => /^[a-z\d]+$/i.test(s);

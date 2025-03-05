// Codewars 10
// Title :  Regex Password Validation
// Question :  You need to write regex that will validate a password to make sure it meets the following criteria:
// Challange Url :  https://www.codewars.com/kata/52e1476c8147a7547a000811/train/typescript
// Level : 5kyu

// Method : 1
export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Method : 2

// Other Users Method
// export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

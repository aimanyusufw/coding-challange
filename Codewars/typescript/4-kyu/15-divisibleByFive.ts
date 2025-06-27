// Codewars 15
// Title :  Reegular Expression for binary numbers is devisible by 5
// Question :  Define a regular expression which tests if a given string representing a binary number is divisible by 5.
// Challange Url :  https://www.codewars.com/kata/5647c3858d4acbbe550000ad/train/typescript
// Level : 4kyu

// Method : 1
export const divisibleByFive = /^(0|1(10)*(0|11)(01*0(01)*(00|1))*1)+$/;
// Method : 2

// Other user method
// const a = "1(10)*(0|11)";
// const b = "0(01)*(1|00)";
// export const divisibleByFive = new RegExp(`^(0|${a}(01*${b})*1)+$`);

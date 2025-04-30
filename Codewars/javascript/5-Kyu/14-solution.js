// Codewars 14
// Title :  Mean Square Error
// Instructions :   Complete the function that
// Challange Url :  https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
// Level : 5kyu

// Method : 1
export const solution = (firstArray, secondArray) => {
  const results = [];
  for (let i = 0; i < firstArray.length; i++) {
    let compare = Math.abs(firstArray[i] - secondArray[i]);
    results.push(compare ** 2);
  }
  return results.reduce((a, b) => a + b) / firstArray.length;
};

// Method 2

// Other Users Method
// function solution(a, b) {
//   return (
//     a.reduce(function (s, n, i) {
//       return s + Math.pow(n - b[i], 2);
//     }, 0) / a.length
//   );
// }

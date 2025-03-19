// Codewars 10
// Title :  ROT13
// Instructions :   For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
// Challange Url :  https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
// Level : 5kyu

// Method : 1
export function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.toUpperCase() != char.toLowerCase()) {
      const start = char <= "Z" ? 65 : 97;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - start + 13) % 26) + start
      );
    } else {
      result += char;
    }
  }
  return result;
}

// Method 2

// Other Users Method
// export function rot13(str) {
//   return str.replace(/[a-z]/gi, function (x) {
//     return String.fromCharCode(
//       x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13)
//     );
//   });
// }

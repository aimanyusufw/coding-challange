// Codewars 19
// Title :  Convert PascalCase string into snake_case
// Instructions :   Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
// Challange Url :  https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
// Level : 5kyu

// Method : 1
export const toUnderscore = (s) => {
  s = String(s);
  const splited = [];
  let temp = s[0] + "";
  for (let i = 1; i < s.length; i++) {
    if (isNaN(s[i]) && s[i] == s[i].toUpperCase()) {
      splited.push(temp);
      temp = "";
    }
    temp += s[i];
  }
  if (temp !== "") {
    splited.push(temp);
  }
  return splited.map((s) => s.toLowerCase()).join("_");
};

// Method 2

// Other Users Method
const toUnderscore = (string) =>
  `${string}`.replace(/.(?=[A-Z])/g, `$&_`).toLowerCase();

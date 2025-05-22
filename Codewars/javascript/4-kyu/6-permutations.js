// Codewars 6
// Title :  So Mant Permutation
// Instructions :   In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
// Challange Url :  https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
// Level : 4kyu

// Method : 1
export const permutations = (string) => {
  const result = new Set();

  function generate(current, remaining) {
    if (remaining.length === 0) {
      result.add(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];
      const before = remaining.slice(0, i);
      const after = remaining.slice(i + 1);
      const next = before + after;

      generate(current + char, next);
    }
  }

  generate("", string);
  return Array.from(result);
};

// Method 2

// Other Users Method
function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}

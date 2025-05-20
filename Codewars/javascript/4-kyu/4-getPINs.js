// Codewars 4
// Title :  The Observed PIN
// Instructions :   Alright, detective, one of our colleagues successfully observed our target person, Robby the robber
// Challange Url :  https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
// Level : 4kyu

// Method : 1
export function getPINs(observed) {
  const posibleMap = {
    1: ["1", "2", "4"],
    2: ["2", "1", "3", "5"],
    3: ["3", "2", "6"],
    4: ["4", "1", "5", "7"],
    5: ["5", "2", "4", "6", "8"],
    6: ["6", "3", "5", "9"],
    7: ["7", "4", "8"],
    8: ["8", "5", "7", "9", "0"],
    9: ["9", "6", "8"],
    0: ["0", "8"],
  };
  const stringPins = observed
    .toString()
    .split("")
    .map((n) => posibleMap[n]);
  return stringPins.reduce(
    (accumulator, currentArray) => {
      const result = [];
      for (const prefix of accumulator) {
        for (const item of currentArray) {
          result.push(prefix + item);
        }
      }
      return result;
    },
    [""]
  );
}

// Method 2

// Other Users Method
function getPINs(observed) {
  return observed
    .split("")
    .map(
      (t) =>
        ({
          0: ["0", "8"],
          1: ["1", "2", "4"],
          2: ["1", "2", "3", "5"],
          3: ["2", "3", "6"],
          4: ["1", "4", "5", "7"],
          5: ["2", "4", "5", "6", "8"],
          6: ["3", "5", "6", "9"],
          7: ["4", "7", "8"],
          8: ["5", "7", "8", "9", "0"],
          9: ["6", "8", "9"],
        }[t])
    )
    .reduce((pre, cur) =>
      [].concat.apply(
        [],
        pre.map((t) => cur.map((g) => t + g))
      )
    );
}

// Codewars 21
// Title :  Simple Fun #196: Counterfeit Dollar
// Instructions :   Your task is to find the counterfeit coin and judge whether the counterfeit coin is light or heavy
// Challange Url :  https://www.codewars.com/kata/58c61a1e8a452631c5000003/train/javascript
// Level : 5kyu

// Method : 1
export function counterfeitDollar(results) {
  const coins = "ABCDEFGHIJKL".split("");
  const possibilities = [];

  for (let coin of coins) {
    for (let weight of ["light", "heavy"]) {
      let valid = true;

      for (let result of results) {
        const [leftStr, rightStr, outcome] = result.trim().split(" ");
        const left = leftStr.split("");
        const right = rightStr.split("");

        let leftWeight = 0,
          rightWeight = 0;

        for (let c of left) {
          if (c === coin) {
            leftWeight += weight === "heavy" ? 1 : -1;
          }
        }

        for (let c of right) {
          if (c === coin) {
            rightWeight += weight === "heavy" ? 1 : -1;
          }
        }

        if (outcome === "even" && leftWeight !== rightWeight) {
          valid = false;
          break;
        }

        if (outcome === "up" && leftWeight <= rightWeight) {
          valid = false;
          break;
        }

        if (outcome === "down" && leftWeight >= rightWeight) {
          valid = false;
          break;
        }
      }

      if (valid) {
        possibilities.push(
          `${coin} is the counterfeit coin and it is ${weight}.`
        );
      }
    }
  }

  return possibilities.length === 1 ? possibilities[0] : "???";
}

// Method 2

// Other Users Method
const counterfeitDollar = (a) =>
  (a = [..."ABCDEFGHIJKL"].flatMap((c, t) =>
    (t = ["heavy", "light"].find((w, i) =>
      a.every(
        (s) =>
          ((t = s.split` `),
          s.includes(c) ? ["down", "up"][t[0].includes(c) ^ i] : "even") == t[2]
      )
    ))
      ? [c, t]
      : []
  )).length ^ 2
    ? "???"
    : `${a[0]} is the counterfeit coin and it is ${a[1]}.`;

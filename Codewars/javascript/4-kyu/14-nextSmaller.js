// Codewars 14
// Title :  Next smaller number with the same digits
// Instructions :   Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
// Challange Url :  https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript
// Level : 4kyu

// Method : 1
export const nextSmaller = (n) => {
  const digits = n.toString().split("");

  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] > digits[i + 1]) {
      const right = digits.slice(i + 1);

      let maxSmaller = -1;
      let maxSmallerIndex = -1;

      for (let j = 0; j < right.length; j++) {
        if (right[j] < digits[i] && parseInt(right[j]) > maxSmaller) {
          maxSmaller = parseInt(right[j]);
          maxSmallerIndex = j;
        }
      }

      if (maxSmallerIndex === -1) continue;

      const temp = digits[i];
      digits[i] = right[maxSmallerIndex];
      right[maxSmallerIndex] = temp;

      const result = [
        ...digits.slice(0, i + 1),
        ...right.sort((a, b) => parseInt(b) - parseInt(a)),
      ].join("");

      if (result[0] === "0") return -1;

      return parseInt(result);
    }
  }

  return -1;
};

// Method 2

// Other Users Method
const nextSmaller = (n) => {
  let num = Array.from(String(n), Number);
  let pivot = num.reduce((max, _, i) => (num[i - 1] > num[i] ? i : max), 0);
  let swap = num.reduce((max, _, i) => (num[i] < num[pivot - 1] ? i : max), 0);
  [num[swap], num[pivot - 1]] = [num[pivot - 1], num[swap]];
  return pivot && num[0]
    ? Number(num.concat(num.splice(pivot).reverse()).join(""))
    : -1;
};

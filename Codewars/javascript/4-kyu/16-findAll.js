// Codewars 16
// Title :  How many numbers III
// Instructions :   Implement a function which receives two arguments
// Challange Url :  https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript
// Level : 4kyu

// Method : 1
export const findAll = (sum, count) => {
  const results = [];

  function backtrack(current = [], start = 1, total = 0) {
    if (current.length === count) {
      if (total === sum) results.push([...current]);
      return;
    }

    for (let digit = start; digit <= 9; digit++) {
      if (total + digit > sum) break;
      current.push(digit);
      backtrack(current, digit, total + digit);
      current.pop();
    }
  }

  backtrack();

  if (results.length == 0) return [];

  let numbers = results.map((n) => n.join(""));
  let lowest = numbers[0];
  let greatest = numbers[numbers.length - 1];
  return [results.length, lowest, greatest];
};

// Method 2

// Other Users Method
const findAll = (sum, count) => {
  const numbers = [];

  const buildNums = (num = "") => {
    const [_sum, _count] = [
      sum - [...num].reduce((acc, dgt) => acc + +dgt, 0),
      count - num.length,
    ];

    if (_sum > 9 * _count) return;
    if (!_count) return numbers.push(num);

    for (let i = num % 10 || 1; i * _count <= _sum; i++) {
      buildNums(num + i);
    }
  };

  buildNums();

  return !numbers.length
    ? []
    : [numbers.length, numbers[0], numbers[numbers.length - 1]];
};

// Codewars 1
// Title :  Snail
// Instructions :   Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// Challange Url :  https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// Level : 4kyu

// Method : 1
export const snail = (array) => {
  if (array.length === 0) {
    return [];
  }

  const result = [];

  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top += 1;

    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }

  return result;
};

// Method 2

// Other Users Method
// snail = function (array) {
//   var result;
//   while (array.length) {
//     // Steal the first row.
//     result = result ? result.concat(array.shift()) : array.shift();
//     // Steal the right items.
//     for (var i = 0; i < array.length; i++) result.push(array[i].pop());
//     // Steal the bottom row.
//     result = result.concat((array.pop() || []).reverse());
//     // Steal the left items.
//     for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
//   }
//   return result;
// };

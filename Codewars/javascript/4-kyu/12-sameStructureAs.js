// Codewars 12
// Title :  Nesting Structure Comparison
// Instructions :   Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
// Challange Url :  https://www.codewars.com/kata/520446778469526ec0000001/javascript
// Level : 4kyu

// Method : 1
Array.prototype.sameStructureAs = function (compare) {
  const array = this;
  if (!Array.isArray(compare)) return false;
  if (array.length !== compare.length) return false;
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    const element2 = compare[i];
    if (Array.isArray(element1) && Array.isArray(element2)) {
      if (!element1.sameStructureAs(element2)) {
        return false;
      }
    } else if (Array.isArray(element1) !== Array.isArray(element2)) {
      return false;
    }
  }
  return true;
};

// Method 2

// Other Users Method
// Array.prototype.sameStructureAs = function (other) {
//   return (
//     Array.isArray(other) &&
//     this.length == other.length &&
//     this.every(function (a, i) {
//       var b = other[i];
//       return Array.isArray(a)
//         ? a.sameStructureAs(b)
//         : Array.isArray(a) == Array.isArray(b);
//     })
//   );
// };

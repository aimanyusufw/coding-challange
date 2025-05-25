// Codewars 8
// Title :  Pyramid Slide down
// Instructions :   Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'.
// Challange Url :  https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript
// Level : 4kyu

// Method : 1
export const longestSlideDown = (pyramid) => {
  let lastArr = pyramid[pyramid.length - 1];
  for (let i = pyramid.length - 2; i >= 0; i--) {
    const arr = pyramid[i];
    const tempArray = [];
    for (let j = 0; j < arr.length; j++) {
      const n = arr[j];
      const max = Math.max(lastArr[j], lastArr[j + 1]) + n;
      tempArray.push(max);
    }
    lastArr = [...tempArray];
  }
  return lastArr[0];
};

// Method 2

// Other Users Method
function longestSlideDown(pyramid) {
  return pyramid.reduceRight((last, current) =>
    current.map((v, i) => v + Math.max(last[i], last[i + 1]))
  )[0];
}

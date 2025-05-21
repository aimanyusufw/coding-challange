// Codewars 5
// Title :  Strip Comments
// Instructions :   Complete the solution so that it strips all text that follows any of a set of comment markers passed in
// Challange Url :  https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
// Level : 4kyu

// Method : 1
// export function solution(text, markers) {
//   const result = [];
//   const lineText = text.split("\n");
//   for (const str of lineText) {
//     let temp = str;
//     for (const marker of markers) {
//       let index = str.indexOf(marker);
//       if (index !== -1) {
//         temp = temp.slice(0, index);
//       }
//     }
//     result.push(temp.trimEnd());
//   }
//   return result.join("\n");
// }

// Method 2
export const solution = (l, mark) => {
  return l
    .split("\n")
    .map((str) => {
      let minIndex = str.length;
      for (const m of mark) {
        const index = str.indexOf(m);
        if (index !== -1 && index < minIndex) {
          minIndex = index;
        }
      }
      return str.slice(0, minIndex).trimEnd();
    })
    .join("\n");
};

// Other Users Method
// function solution(input, markers) {
//   return input
//     .split("\n")
//     .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
//     .join("\n");
// }

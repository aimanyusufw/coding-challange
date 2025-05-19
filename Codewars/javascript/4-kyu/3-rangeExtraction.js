// Codewars 3
// Title :  Range Extraction
// Instructions :   Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// Challange Url :  https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
// Level : 4kyu

// Method : 1
export const solution = (list) => {
  const group = [];
  let temp = [list[0]];
  for (let i = 1; i < list.length; i++) {
    const n = list[i];
    if (n - temp[temp.length - 1] > 1) {
      group.push(temp);
      temp = [];
    }
    temp.push(n);
  }
  if (temp.length >= 1) {
    group.push(temp);
  }
  let result = [];
  for (const n of group) {
    if (n.length > 2) {
      const ex = [n.at(0), n.at(-1)];
      result.push(ex.join("-"));
      continue;
    }
    result.push(n.join(","));
  }
  return result.join(",");
};

// Method 2

// Other Users Method
function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + "-" + list[j]);
  }
  return list.join();
}

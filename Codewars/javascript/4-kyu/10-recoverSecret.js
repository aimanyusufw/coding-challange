// Codewars 10
// Title :  Recover a secret string from random triplets
// Instructions :   There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
// Challange Url :  https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript
// Level : 4kyu

// Method : 1
export const recoverSecret = (triplets) => {
  const graph = {};
  const inDegree = {};

  for (const triplet of triplets) {
    for (const char of triplet) {
      if (!graph[char]) graph[char] = new Set();
      if (!(char in inDegree)) inDegree[char] = 0;
    }

    for (let i = 0; i < 2; i++) {
      const from = triplet[i];
      const to = triplet[i + 1];
      if (!graph[from].has(to)) {
        graph[from].add(to);
        inDegree[to] = (inDegree[to] || 0) + 1;
      }
    }
  }

  const queue = [];
  for (const char in inDegree) {
    if (inDegree[char] === 0) {
      queue.push(char);
    }
  }

  let result = "";

  while (queue.length > 0) {
    const char = queue.shift();
    result += char;

    for (const neighbor of graph[char]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
};

// Method 2

// Other Users Method
var recoverSecret = function (triplets) {
  for (var [first] of triplets) {
    if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
      triplets
        .filter(([item]) => item == first)
        .forEach((tuple) => tuple.shift());
      return (
        first + recoverSecret(triplets.filter((tuple) => tuple.length > 0))
      );
    }
  }
  return "";
};

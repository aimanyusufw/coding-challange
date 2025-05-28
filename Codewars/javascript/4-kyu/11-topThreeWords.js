// Codewars 11
// Title :  Most frequently user words in a text
// Instructions :   Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Challange Url :  https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
// Level : 4kyu

// Method : 1
export const topThreeWords = (s) => {
  const arrayString = s.toLowerCase().split(/\s+/);
  const words = {};

  for (let i = 0; i < arrayString.length; i++) {
    const cleanWord = arrayString[i].replace(/[^a-z']/g, "");
    if (cleanWord && /[a-z]/.test(cleanWord)) {
      words[cleanWord] = (words[cleanWord] || 0) + 1;
    }
  }

  return Object.entries(words)
    .sort(([, a], [, b]) => b - a)
    .filter(([key, _]) => key !== "")
    .map(([key]) => key)
    .slice(0, 3);
};

// Method 2

// Other Users Method
let topThreeWords = (text) => {
  let dict = new Map();
  text.replace(/[A-z']+(?=[ ]+|$)/g, (match) => {
    let word = match.toLowerCase();
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  dict.delete("'");
  return [...dict]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
};

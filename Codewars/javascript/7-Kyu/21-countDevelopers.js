// Codewars 21
// Title : Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// Instructions : You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Challange Url : https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
// Level : 7kyu

// Method : 1
export function countDevelopers(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent == "Europe" && list[i].language == "JavaScript") {
      count++;
    }
  }
  return count;
}

// Method : 2

// Other Users Method
// function countDevelopers(list) {
//   return list.filter(
//     (x) => x.continent == "Europe" && x.language == "JavaScript",
//   ).length;
// }

// Result or debug

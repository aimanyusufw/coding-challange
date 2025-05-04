// Codewars 17
// Title :  Molecule to atoms
// Instructions :   For a given chemical formula represented by a string
// Challange Url :  https://www.codewars.com/kata/52f831fa9d332c6591000511/train/javascript
// Level : 5kyu

// Method : 1
export const parseMolecule = (formula) => {
  const stack = [{}];
  const regex = /([A-Z][a-z]?|\d+|[\[\]\(\)\{\}])/g;
  const tokens = formula.match(regex);

  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];

  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];

    if (openBrackets.includes(token)) {
      stack.push({});
      i++;
    } else if (closeBrackets.includes(token)) {
      const popped = stack.pop();
      i++;
      let multiplier = 1;
      if (i < tokens.length && /^\d+$/.test(tokens[i])) {
        multiplier = parseInt(tokens[i]);
        i++;
      }
      for (let atom in popped) {
        popped[atom] *= multiplier;
        if (!stack[stack.length - 1][atom]) {
          stack[stack.length - 1][atom] = 0;
        }
        stack[stack.length - 1][atom] += popped[atom];
      }
    } else if (/^[A-Z][a-z]?$/.test(token)) {
      let atom = token;
      i++;
      let count = 1;
      if (i < tokens.length && /^\d+$/.test(tokens[i])) {
        count = parseInt(tokens[i]);
        i++;
      }
      if (!stack[stack.length - 1][atom]) {
        stack[stack.length - 1][atom] = 0;
      }
      stack[stack.length - 1][atom] += count;
    } else {
      // Should not reach here.
      i++;
    }
  }

  return stack[0];
};

// Method 2

// Other Users Method
function parseMolecule(formula) {
  var group,
    tokens,
    tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g,
    stack = [[]];
  while ((tokens = tokenExp.exec(formula))) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group));
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}

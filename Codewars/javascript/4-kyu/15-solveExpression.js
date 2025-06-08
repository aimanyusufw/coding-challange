// Codewars 15
// Title :  Find the unknown digits
// Instructions :   Complete the method to solve the expression to find the value of the unknown rune.
// Challange Url :  https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript
// Level : 4kyu

// Method : 1
export const solveExpression = (exp) => {
  for (let digit = 0; digit <= 9; digit++) {
    const digitStr = digit.toString();
    if (exp.includes(digitStr)) continue;

    const replaced = exp.replace(/\?/g, digitStr);
    const [leftSide, rightSide] = replaced.split("=");
    const match = leftSide.match(/^(-?\d+)([\+\-\*])(-?\d+)$/);

    if (!match) continue;

    const [, a, operator, b] = match;
    const c = rightSide;

    const hasLeadingZero = (s) =>
      (s.length > 1 && s[0] === "0") ||
      (s.length > 2 && s[0] === "-" && s[1] === "0");

    if ([a, b, c].some(hasLeadingZero)) continue;

    const numA = parseInt(a);
    const numB = parseInt(b);
    const numC = parseInt(c);

    let calculated = 0;
    if (operator === "+") calculated = numA + numB;
    else if (operator === "-") calculated = numA - numB;
    else if (operator === "*") calculated = numA * numB;

    if (calculated === numC) return digit;
  }

  return -1;
};

// Method 2

// Other Users Method
function solveExpression(exp) {
  exp = exp.replace(/--/g, "+").replace(/=/g, "==");
  for (let i = 0; i <= 9; i++) {
    if (exp.match(/^\?[\d\?]|[*+\-=]\?[\d\?]/g) && i == 0) i++;
    if (exp.indexOf(i) < 0 && eval(exp.replace(/\?/g, i))) return i;
  }
  return -1;
}

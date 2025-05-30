// Codewars 7
// Title :  Catching car mileage number
// Question :   Write the function that parses the mileage number input
// Challange Url :  https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/typescript
// Level : 4kyu

// Method : 1
export const isInteresting = (n: number, awesomePharse: number[]): number => {
  const isPalindrom = (n: number): boolean => {
    return n.toString().split("").reverse().join("") === n.toString();
  };

  const isSameDigit = (n: number): boolean => {
    const stringN = n.toString().split("");
    for (const digit of stringN) {
      if (digit !== stringN[0]) {
        return false;
      }
    }
    return true;
  };

  const isSquenceInc = (n: number): boolean => {
    const s = n.toString();
    const seq = "1234567890";
    for (let i = 0; i <= seq.length - s.length; i++) {
      if (seq.slice(i, i + s.length) === s) return true;
    }
    return false;
  };

  const isSquenceDesc = (n: number): boolean => {
    const s = n.toString();
    const seq = "9876543210";
    for (let i = 0; i <= seq.length - s.length; i++) {
      if (seq.slice(i, i + s.length) === s) return true;
    }
    return false;
  };

  const folowedByZero = (n: number): boolean => {
    const s = n.toString();
    return s[0] !== "0" && /^([1-9])0+$/.test(s);
  };

  for (let i = 0; i <= 2; i++) {
    const current = n + i;
    if (current < 100) continue;

    if (
      awesomePharse.includes(current) ||
      isSameDigit(current) ||
      isPalindrom(current) ||
      isSquenceInc(current) ||
      folowedByZero(current) ||
      isSquenceDesc(current)
    ) {
      return i === 0 ? 2 : 1;
    }
  }

  return 0;
};

// Method : 2

// Other Users Method
// export function isInteresting(n: number, awesomePhrases: number[]): number {
//   const bigNum = /^\d0+$/;
//   const sameDig = /^(\d)\1+$/;
//   const incSeq = /(^|1)(^|2)(^|3)(^|4|$)(^|5|$)(^|6|$)(^|7|$)(8|$)(9|$)(0|$)/;
//   const decSeq = /(^|9)(^|8)(^|7)(^|6|$)(^|5|$)(^|4|$)(^|3|$)(2|$)(1|$)(0|$)/;
//   const palindrome = /^(\d)(\d?)(\d?)(\d?)\d?\4\3\2\1$/;
//   const res = [bigNum, palindrome, incSeq, decSeq, sameDig];
//   if (
//     (n >= 100 && res.some((re) => re.test(n + ""))) ||
//     awesomePhrases.some((phrase) => n === phrase)
//   )
//     return 2;
//   if (
//     (n >= 98 && res.some((re) => re.test(n + 2 + "") || re.test(n + 1 + ""))) ||
//     awesomePhrases.some((phrase) => n < phrase && n + 2 >= phrase)
//   )
//     return 1;
//   return 0;
// }

// Codewars 3
// Title :  String Mix
// Question :   Given two strings s1 and s2, we want to visualize how different the two strings are.
// Challange Url :  https://www.codewars.com/kata/5629db57620258aa9d000014/train/typescript
// Level : 4kyu

// Method : 1
export const mix = (s1: string, s2: string): string => {
  const countCharacters = (s: string) => {
    const result: { [char: string]: number } = {};
    const letters = s.match(/[a-z]/g) || [];
    for (const char of letters) {
      result[char] = (result[char] || 0) + 1;
    }
    return result;
  };

  const s1Count = countCharacters(s1);
  const s2Count = countCharacters(s2);

  const allCharacters = new Set([
    ...Object.keys(s1Count),
    ...Object.keys(s2Count),
  ]);

  const result: string[] = [];
  for (const char of allCharacters) {
    const count1 = s1Count[char] || 0;
    const count2 = s2Count[char] || 0;
    if (Math.max(count1, count2) < 2) continue;

    if (count1 > count2) {
      result.push("1:" + char.repeat(count1));
    } else if (count2 > count1) {
      result.push("2:" + char.repeat(count2));
    } else {
      result.push("=:" + char.repeat(count1));
    }
  }

  result.sort((a, b) => {
    const lenA = a.length - 2;
    const lenB = b.length - 2;

    if (lenA !== lenB) {
      return lenB - lenA;
    }

    const prefixA = a.substring(0, 1);
    const prefixB = b.substring(0, 1);

    if (prefixA !== prefixB) {
      if (prefixA === "=") return 1;
      if (prefixB === "=") return -1;
      return prefixA.localeCompare(prefixB);
    }

    return a.substring(2, 3).localeCompare(b.substring(2, 3));
  });

  return result.join("/");
};

// Method : 2

// Other Users Method
// export const mix = (s1:string, s2:string): string =>{
//   return [...new Set([...s1, ...s2] // List lowercase characters
//      .filter(char => /^[a-z]$/.test(char))
//   )]
//   // Count character occurrences on each string
//   .map(char => [char, [...s1].filter(c => c===char).length, [...s2].filter(c => c===char).length] as const)
//   // Filter characters that appear more than once
//   .filter(([,c1,c2]) => c1 > 1 || c2 > 1)
//   // Map back to string in the requested format
//   .map(([char, c1, c2]) => `${c1 === c2 ? '=' : c1 > c2 ? '1' : '2'}:${char.repeat(Math.max(c1,c2))}`)
//   // Sort by repetitions (desc) and char code (asc)
//   .sort((a, b) =>
//         a.length === b.length ?
//           (a.charCodeAt(0) - b.charCodeAt(0)) || (a.charCodeAt(2) - b.charCodeAt(2)) :
//           b.length - a.length)
//   .join('/');
// }

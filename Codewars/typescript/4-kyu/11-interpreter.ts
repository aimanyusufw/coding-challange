// Codewars 10
// Title :  Esolang Interpreters #3 - Custom Paintf**k Interpreter
// Question :   Your task is to implement a custom Paintfuck interpreter interpreter()/Interpret which accepts the following arguments in the specified order
// Challange Url :  www.codewars.com/kata/5868a68ba44cfc763e00008d/train/typescript
// Level : 4kyu

// Method : 1
export const interpreter = (
  code: string,
  iteration: number,
  width: number,
  height: number
): string => {
  const grid: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(0)
  );

  let x = 0,
    y = 0;
  let i = 0;
  let executed = 0;

  const bracketMap: Record<number, number> = {};
  const stack: number[] = [];

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "[") stack.push(idx);
    else if (code[idx] === "]") {
      const open = stack.pop();
      if (open !== undefined) {
        bracketMap[open] = idx;
        bracketMap[idx] = open;
      }
    }
  }

  while (i < code.length && executed < iteration) {
    const cur = code[i];

    switch (cur) {
      case "*":
        grid[y][x] ^= 1;
        executed++;
        break;

      case "e":
        x = (x + 1) % width;
        executed++;
        break;

      case "w":
        x = (x - 1 + width) % width;
        executed++;
        break;

      case "s":
        y = (y + 1) % height;
        executed++;
        break;

      case "n":
        y = (y - 1 + height) % height;
        executed++;
        break;

      case "[":
        if (grid[y][x] === 0) {
          i = bracketMap[i];
        }
        executed++;
        break;

      case "]":
        if (grid[y][x] !== 0) {
          i = bracketMap[i];
        }
        executed++;
        break;

      default:
        break;
    }

    i++;
  }

  return grid.map((row) => row.join("")).join("\r\n");
};

// Method : 2

// Other Users Method
// export function interpreter(
//   code: any,
//   iterations: any,
//   width: any,
//   height: any
// ): any {
//   code = code.replace(/[^nesw*\[\]]/g, "");
//   const n = code.length;
//   const jumps: any = {};
//   for (let i = 0, j = 0, opens: any[] = []; i < n; ++i) {
//     switch (code[i]) {
//       case "[":
//         opens.push(i);
//         break;
//       case "]":
//         (j = opens.pop()), (jumps[i] = j), (jumps[j] = i);
//         break;
//     }
//   }
//   const grid: any = [...Array(height)].map((_) => [...Array(width)].fill(0));
//   for (let i = 0, j = 0, y = 0, x = 0; i < n && j < iterations; ++i, ++j)
//     switch (code[i]) {
//       case "n":
//         y = (y - 1 + height) % height;
//         break;
//       case "w":
//         x = (x - 1 + width) % width;
//         break;
//       case "s":
//         y = (y + 1) % height;
//         break;
//       case "e":
//         x = (x + 1) % width;
//         break;
//       case "*":
//         grid[y][x] ^= 1;
//         break;
//       case "[":
//         if (grid[y][x] == 0) i = jumps[i];
//         break;
//       case "]":
//         if (grid[y][x] != 0) i = jumps[i];
//         break;
//     }
//   return grid.map((r: any) => r.join("")).join("\r\n");
// }

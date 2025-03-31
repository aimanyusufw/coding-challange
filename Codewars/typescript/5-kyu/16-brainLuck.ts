// Codewars 16
// Title :  My smallest code interpreter (aka Brainf**k)
// Question :   Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:
// Challange Url :  https://www.codewars.com/kata/526156943dfe7ce06200063e/train/typescript
// Level : 5kyu

// Method : 1
export function brainLuck(code: string, input: string): string {
  const memory = new Uint8Array(30000); // Gunakan TypedArray untuk efisiensi
  let dataPointer = 0;
  let inputPointer = 0;
  let output = "";
  let codePointer = 0;
  const loopStack: number[] = [];
  const jumpTable = new Map<number, number>();

  // Precompute jump table for [ and ]
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "[") {
      loopStack.push(i);
    } else if (code[i] === "]") {
      const start = loopStack.pop();
      if (start !== undefined) {
        jumpTable.set(start, i);
        jumpTable.set(i, start);
      }
    }
  }

  // Brainfuck Interpreter Execution
  while (codePointer < code.length) {
    const command = code[codePointer];

    switch (command) {
      case ">":
        dataPointer = (dataPointer + 1) % memory.length;
        break;
      case "<":
        dataPointer = (dataPointer - 1 + memory.length) % memory.length;
        break;
      case "+":
        memory[dataPointer] = (memory[dataPointer] + 1) & 255; // Modulo 256
        break;
      case "-":
        memory[dataPointer] = (memory[dataPointer] - 1 + 256) & 255;
        break;
      case ".":
        output += String.fromCharCode(memory[dataPointer]);
        break;
      case ",":
        memory[dataPointer] =
          inputPointer < input.length ? input.charCodeAt(inputPointer++) : 0;
        break;
      case "[":
        if (memory[dataPointer] === 0) {
          codePointer = jumpTable.get(codePointer) ?? codePointer;
        }
        break;
      case "]":
        if (memory[dataPointer] !== 0) {
          codePointer = jumpTable.get(codePointer) ?? codePointer;
        }
        break;
    }

    codePointer++;
  }

  return output;
}

// Method : 2

// Other Users Method
// export function brainLuck(code: string, input: string) {
//   var arr = Array.apply(null, Array(16)).map(() => 0),
//     ptr = 0,
//     pos = 0,
//     loc = 0,
//     output = "",
//     matchOpen = {},
//     matchClose = {};
//   for (var i = 0, bracks = []; i < code.length; i++) {
//     if (code[i] === "[") bracks.push(i);
//     else if (code[i] === "]") {
//       var open = bracks.pop();
//       matchOpen[i] = open;
//       matchClose[open] = i;
//     }
//   }
//   for (; loc < code.length; loc++)
//     switch (code[loc]) {
//       case ">":
//         ptr++;
//         break;
//       case "<":
//         ptr--;
//         break;
//       case "+":
//         arr[ptr] = (arr[ptr] + 1) % 256;
//         break;
//       case "-":
//         arr[ptr] = (arr[ptr] + 255) % 256;
//         break;
//       case ".":
//         output += String.fromCharCode(arr[ptr]);
//         break;
//       case ",":
//         arr[ptr] = input.charCodeAt(pos++);
//         break;
//       case "[":
//         if (arr[ptr] === 0) loc = matchClose[loc];
//         break;
//       case "]":
//         if (arr[ptr] > 0) loc = matchOpen[loc];
//         break;
//     }
//   return output;
// }

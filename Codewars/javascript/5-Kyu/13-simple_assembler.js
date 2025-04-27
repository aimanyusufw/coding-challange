// Codewars 13
// Title :  Simple assembler interpreter
// Instructions :   Register names are alphabetical (letters only). Constants are always integers (positive or negative).
// Challange Url :  https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
// Level : 5kyu

// Method : 1
export function simple_assembler(program) {
  const registers = {};
  let i = 0;
  while (i < program.length) {
    const [intruction, x, y] = program[i].split(" ");
    switch (intruction) {
      case "mov":
        if (isNaN(Number(y))) {
          registers[x] = registers[y];
        } else {
          registers[x] = Number(y);
        }
        break;
      case "inc":
        registers[x] += 1;
        break;
      case "dec":
        registers[x] -= 1;
        break;
      case "jnz":
        const valX = isNaN(Number(x)) ? registers[x] : Number(x);
        const valY = isNaN(Number(y)) ? registers[y] : Number(y);
        if (valX !== 0) {
          i += valY;
          continue;
        }
        break;
    }
    i++;
  }
  return registers;
}

// Method 2

// Other Users Method
// function simple_assembler(program) {
//   var reg = {};

//   var regOrValue = (n) => (n.match(/[a-z]/) ? reg[n] : +n);

//   var ops = {
//     mov: (a, b) => {
//       reg[a] = regOrValue(b);
//       return 1;
//     },
//     inc: (a, b) => {
//       reg[a]++;
//       return 1;
//     },
//     dec: (a, b) => {
//       reg[a]--;
//       return 1;
//     },
//     jnz: (a, b) => {
//       return regOrValue(a) != 0 ? +b : 1;
//     },
//   };

//   var ip = 0;
//   while (ip < program.length) {
//     var [op, a, b] = program[ip].split(" ");
//     ip += ops[op](a, b);
//   }

//   return reg;
// }

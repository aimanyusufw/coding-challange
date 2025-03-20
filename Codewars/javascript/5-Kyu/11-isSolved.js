// Codewars 11
// Title :  Tic-Tac-Toe Checker
// Instructions :   You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
// Challange Url :  https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
// Level : 5kyu

// Method : 1
export function isSolved(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== 0 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
    if (
      board[0][i] !== 0 &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }

  if (
    board[0][0] !== 0 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] !== 0 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  if (board.some((row) => row.includes(0))) {
    return -1;
  }

  return 0;
}

// Method 2

// Other Users Method
// function isSolved(board) {
//   board = board.join("-").replace(/,/g, "");
//   if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//   if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//   if (/0/.test(board)) return -1;
//   return 0;
// }

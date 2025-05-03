// Codewars 16
// Title :  Snakes and Leaders
// Instructions :   Your task is to make a simple class called SnakesLadders.
// Challange Url :  https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript
// Level : 5kyu

export class SnakesLadders {
  constructor() {
    this.playerPositions = [0, 0];
    this.currentPlayer = 0;
    this.gameOver = false;

    this.ladders = {
      2: 38,
      8: 31,
      7: 14,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94,
    };

    this.snakes = {
      99: 80,
      95: 75,
      92: 88,
      89: 68,
      74: 53,
      64: 60,
      62: 19,
      49: 11,
      46: 25,
      16: 6,
    };

    // this[0] = 0;
    // this[1] = 0;
    // this.turn = 0;
    // this.road = {
    //     2: 38,
    //     7: 14,
    //     8: 31,
    //     15: 26,
    //     16: 6,
    //     21: 42,
    //     28: 84,
    //     36: 44,
    //     46: 25,
    //     49: 11,
    //     51: 67,
    //     62: 19,
    //     64: 60,
    //     71: 91,
    //     74: 53,
    //     78: 98,
    //     87: 94,
    //     89: 68,
    //     92: 88,
    //     95: 75,
    //     99: 80
    // };
  }

  // Method : 1
  play(die1, die2) {
    if (this.gameOver) {
      return "Game over!";
    }

    let player = this.currentPlayer;
    let move = die1 + die2;
    let newPos = this.playerPositions[player] + move;

    if (newPos > 100) {
      newPos = 100 - (newPos - 100);
    }

    if (this.ladders[newPos]) {
      newPos = this.ladders[newPos];
    }
    if (this.snakes[newPos]) {
      newPos = this.snakes[newPos];
    }

    this.playerPositions[player] = newPos;

    if (newPos === 100) {
      this.gameOver = true;
      return `Player ${player + 1} Wins!`;
    }

    let result = `Player ${player + 1} is on square ${newPos}`;
    if (die1 !== die2) {
      this.currentPlayer = 1 - this.currentPlayer;
    }

    return result;
  }

  // Method 2

  // Other Users Method
  //   play(d1, d2) {
  //     if (this.go) return "Game over!";
  //     this[this.turn] += d1 + d2;
  //     this[this.turn] -= Math.max(2 * this[this.turn] - 200, 0);
  //     this[this.turn] = this.road[this[this.turn]] || this[this.turn];
  //     let s = `Player ${this.turn + 1} is on square ${this[this.turn]}`;
  //     if (this[this.turn] > 99) {
  //       this.go = true;
  //       s = `Player ${this.turn + 1} Wins!`;
  //     }
  //     if (d1 !== d2) this.turn = ++this.turn % 2;
  //     return s;
  //   }
}

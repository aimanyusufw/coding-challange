// Codewars 18
// Title :  Path Finder #1: can you reach the exit?
// Question :  You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West).
// Challange Url :  https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript
// Level : 4kyu

// Method : 1
export function pathFinder(maze) {
  const grid = maze.split("\n").map((row) => row.split(""));
  const n = grid.length;

  if (n === 1) return true;

  const queue = [[0, 0]];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  grid[0][0] = "W";

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        if (nr === n - 1 && nc === n - 1) {
          return true;
        }

        if (grid[nr][nc] === ".") {
          grid[nr][nc] = "W";
          queue.push([nr, nc]);
        }
      }
    }
  }

  return false;
}

// Method : 2

// Other user method
function pathFinder(maze) {
  const rows = maze.split(`\n`).map((l) => l.split(``));
  const n = rows.length - 1;
  const moveTo = (x, y) => {
    if (x < 0 || y < 0 || x > n || y > n || rows[y][x] !== ".") {
      return false;
    }

    if (x === n && y === n) {
      return true;
    }

    rows[y][x] = `x`;

    return (
      moveTo(x - 1, y) ||
      moveTo(x + 1, y) ||
      moveTo(x, y - 1) ||
      moveTo(x, y + 1)
    );
  };

  return moveTo(0, 0);
}

import { pathFinder } from "../../4-kyu/18-pathFinder";

function testMaze(expected, maze) {
  let actual = pathFinder(maze);
  expect(actual).toStrictEqual(expected);
}

describe("Peth Finder Tests", function () {
  it("Basic tests", () => {
    testMaze(
      true,
      `.W.
.W.
...`,
    );

    testMaze(
      false,
      `.W.
.W.
W..`,
    );

    testMaze(
      true,
      `......
......
......
......
......
......`,
    );

    testMaze(
      false,
      `......
......
......
......
.....W
....W.`,
    );
  });
});

import { treeByLevels } from "../../4-kyu/13-treeByLevels";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function doTest(tree, expected) {
  const actual = treeByLevels(tree);
  expect(actual).toStrictEqual(expected);
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest(null, []);

    const treeOne = new Node(
      2,
      new Node(8, new Node(1), new Node(3)),
      new Node(9, new Node(4), new Node(5))
    );

    doTest(treeOne, [2, 8, 9, 1, 3, 4, 5]);

    const treeTwo = new Node(
      1,
      new Node(8, null, new Node(3)),
      new Node(4, null, new Node(5, null, new Node(7)))
    );

    doTest(treeTwo, [1, 8, 4, 3, 5, 7]);
  });
});

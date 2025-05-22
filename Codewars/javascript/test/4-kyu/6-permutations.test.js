import { permutations } from "../../4-kyu/6-permutations";

function doTest(string, expected) {
  const actual = permutations(string);
  expect(actual.sort()).toStrictEqual(expected.sort());
}

describe("permutations", function () {
  it("sample tests", function () {
    doTest("a", ["a"]);
    doTest("ab", ["ab", "ba"]);

    doTest("aabb", ["aabb", "abab", "abba", "baab", "baba", "bbaa"]);
  });
});

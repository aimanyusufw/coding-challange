import { josephus } from "../../5-kyu/15-josephus";

describe("Sample test cases", function () {
  it("tests", function () {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toStrictEqual([
      2, 4, 6, 8, 10, 3, 7, 1, 9, 5,
    ]);
    expect(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)).toStrictEqual(
      ["e", "s", "W", "o", "C", "d", "r", "a"]
    );
    expect(josephus([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
      3, 6, 2, 7, 5, 1, 4,
    ]);
    expect(josephus([], 3)).toStrictEqual([]);
  });
});

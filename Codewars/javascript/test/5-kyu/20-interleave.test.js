import { interleave } from "../../5-Kyu/20-interleave";

describe("Sample tests", function () {
  it("Tests", function () {
    expect(interleave([1, 2, 3], ["c", "d", "e"])).toStrictEqual([
      1,
      "c",
      2,
      "d",
      3,
      "e",
    ]);
    expect(interleave([1, 2, 3], [4, 5])).toStrictEqual([1, 4, 2, 5, 3, null]);
    expect(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9])).toStrictEqual([
      1, 4, 7, 2, 5, 8, 3, 6, 9,
    ]);
    expect(interleave([])).toStrictEqual([]);
  });
});

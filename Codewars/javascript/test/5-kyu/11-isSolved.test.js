import { isSolved } from "../../5-Kyu/11-isSolved";

describe("Tests", () => {
  it("test", () => {
    expect(
      isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0],
      ])
    ).toStrictEqual(-1);
  });
});

import { solution } from "../../5-Kyu/14-solution";

describe("Tests", () => {
  it("test", () => {
    expect(solution([1, 2, 3], [4, 5, 6])).toStrictEqual(9);
    expect(solution([10, 20, 10, 2], [10, 25, 5, -2])).toStrictEqual(16.5);
    expect(solution([0, -1], [-1, 0])).toStrictEqual(1);
  });
});

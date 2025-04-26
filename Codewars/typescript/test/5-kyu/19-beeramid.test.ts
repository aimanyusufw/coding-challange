import { beeramid } from "../../5-kyu/19-beeramid";

describe("Beeramid", () => {
  it("Fixed tests", () => {
    expect(beeramid(9, 2)).toStrictEqual(1);
    expect(beeramid(10, 2)).toStrictEqual(2);
    expect(beeramid(11, 2)).toStrictEqual(2);
    expect(beeramid(21, 1.5)).toStrictEqual(3);
    expect(beeramid(454, 5)).toStrictEqual(5);
    expect(beeramid(455, 5)).toStrictEqual(6);
    expect(beeramid(4, 4)).toStrictEqual(1);
    expect(beeramid(3, 4)).toStrictEqual(0);
    expect(beeramid(0, 4)).toStrictEqual(0);
    expect(beeramid(-1, 4)).toStrictEqual(0);
  });
});

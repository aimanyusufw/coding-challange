import { sumOfIntervals } from "../../4-kyu/2-sumOfIntervals";

describe("Sum of intervals", function () {
  it("basic tests", function () {
    expect(sumOfIntervals([[1, 5]])).toStrictEqual(4);
    expect(
      sumOfIntervals([
        [1, 5],
        [6, 10],
      ])
    ).toStrictEqual(8);
    expect(
      sumOfIntervals([
        [1, 5],
        [1, 5],
      ])
    ).toStrictEqual(4);
    expect(
      sumOfIntervals([
        [1, 4],
        [7, 10],
        [3, 5],
      ])
    ).toStrictEqual(7);
  });

  it("large numbers", function () {
    expect(sumOfIntervals([[-1e9, 1e9]])).toStrictEqual(2e9);
    expect(
      sumOfIntervals([
        [0, 20],
        [-1e8, 10],
        [30, 40],
      ])
    ).toStrictEqual(1e8 + 30);
  });
});

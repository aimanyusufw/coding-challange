import { sumPairs } from "../../5-kyu/8-sumPairs";

const l1: number[] = [1, 4, 8, 7, 3, 15],
  l2: number[] = [1, -2, 3, 0, -6, 1],
  l3: number[] = [20, -13, 40],
  l4: number[] = [1, 2, 3, 4, 1, 0],
  l5: number[] = [10, 5, 2, 3, 7, 5],
  l6: number[] = [4, -2, 3, 3, 4],
  l7: number[] = [0, 2, 0],
  l8: number[] = [5, 9, 13, -3];

describe("example", function () {
  it("test", () => {
    expect(sumPairs(l1, 8)).toEqual([1, 7]);
  });
  it("test", () => {
    expect(sumPairs(l2, -6)).toEqual([0, -6]);
  });
  it("test", () => {
    expect(sumPairs(l3, -7)).toEqual(undefined);
  });
  it("test", () => {
    expect(sumPairs(l4, 2)).toEqual([1, 1]);
  });
  it("test", () => {
    expect(sumPairs(l5, 10)).toEqual([3, 7]);
    ("] should return [3, 7] for sum = 10 ");
  });
  it("test", () => {
    expect(sumPairs(l6, 8)).toEqual([4, 4]);
  });
  it("test", () => {
    expect(sumPairs(l7, 0)).toEqual([0, 0]);
  });
  it("test", () => {
    expect(sumPairs(l8, 10)).toEqual([13, -3]);
  });
});

import { sumOfDivided } from "../../4-kyu/6-sumOfDivided";

function testing(lst: number[], expected: number[][]) {
  expect(sumOfDivided(lst)).toStrictEqual(expected);
}

describe("Fixed Tests thirt", function () {
  it("Basic tests", function () {
    testing(
      [12, 15],
      [
        [2, 12],
        [3, 27],
        [5, 15],
      ]
    );
    testing(
      [15, 21, 24, 30, 45],
      [
        [2, 54],
        [3, 135],
        [5, 90],
        [7, 21],
      ]
    );
  });
});

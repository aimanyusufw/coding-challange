import { removeNb } from "../../5-kyu/14-removeNb";

function testIt(n: number, expected: number[][]) {
  expect(removeNb(n)).toStrictEqual(expected);
}

describe("Fixed Tests removeNb", function () {
  it("Basic tests", function () {
    testIt(26, [
      [15, 21],
      [21, 15],
    ]);
    testIt(101, [
      [55, 91],
      [91, 55],
    ]);
    testIt(102, [
      [70, 73],
      [73, 70],
    ]);
    testIt(110, [
      [70, 85],
      [85, 70],
    ]);
  });
});

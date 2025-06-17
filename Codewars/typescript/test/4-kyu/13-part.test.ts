import { part } from "../../4-kyu/13-part";

function doTest(n: number, expected: string) {
  expect(part(n)).toStrictEqual(expected);
}

function doBatch(title: string, data: [number, string][]) {
  it(title, function () {
    for (let [n, exp] of data) doTest(n, exp);
  });
}

describe("Testing...", function () {
  doBatch("Small numbers", [
    [1, "Range: 0 Average: 1.00 Median: 1.00"],
    [2, "Range: 1 Average: 1.50 Median: 1.50"],
    [3, "Range: 2 Average: 2.00 Median: 2.00"],
    [4, "Range: 3 Average: 2.50 Median: 2.50"],
    [5, "Range: 5 Average: 3.50 Median: 3.50"],
    [6, "Range: 8 Average: 4.75 Median: 4.50"],
    [7, "Range: 11 Average: 6.09 Median: 6.00"],
    [8, "Range: 17 Average: 8.29 Median: 7.50"],
    [9, "Range: 26 Average: 11.17 Median: 9.50"],
    [10, "Range: 35 Average: 15.00 Median: 14.00"],
  ]);
});

import { gap } from "../../5-kyu/12-gap";

function testing(g: number, m: number, n: number, expected: null | number[]) {
  expect(gap(g, m, n)).toStrictEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests gap", function () {
    testing(2, 100, 110, [101, 103]);
    testing(4, 100, 110, [103, 107]);
    testing(6, 100, 110, null);
    testing(8, 300, 400, [359, 367]);
    testing(10, 300, 400, [337, 347]);
  });
});

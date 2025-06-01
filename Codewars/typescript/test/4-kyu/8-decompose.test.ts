import { decompose } from "../../4-kyu/8-decompose";

function testing(n: number, expected: number[]) {
  expect(decompose(n)).toStrictEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests decompose", function () {
    testing(50, [1, 3, 5, 8, 49]);
    testing(44, [2, 3, 5, 7, 43]);
  });
});

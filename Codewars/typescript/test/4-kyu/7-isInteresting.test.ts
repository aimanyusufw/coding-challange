import { isInteresting } from "../../4-kyu/7-isInteresting";

function test(n: number, awesome: number[], expected: number) {
  expect(isInteresting(n, awesome)).toStrictEqual(expected);
}

describe("solution", function () {
  it("should work, dangit!", function () {
    test(3, [1337, 256], 0);
    test(1336, [1337, 256], 1);
    test(1337, [1337, 256], 2);
    test(11208, [1337, 256], 0);
    test(11209, [1337, 256], 1);
    test(11211, [1337, 256], 2);
  });
});

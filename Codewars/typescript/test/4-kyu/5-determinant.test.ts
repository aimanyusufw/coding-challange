import { determinant } from "../../4-kyu/5-determinant";

describe("determinant", function () {
  const m1 = [
    [1, 3],
    [2, 5],
  ];
  const m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ];

  it("of a 1 x 1 matrix should yield the value of the one element", () => {
    expect(determinant([[1]])).toStrictEqual(1);
  });

  it("should work correctly for 2 x 2 matrix", () => {
    expect(determinant(m1)).toStrictEqual(-1);
  });

  it("should work correctly for 3 x 3 matrix", () => {
    expect(determinant(m2)).toStrictEqual(-20);
  });
});

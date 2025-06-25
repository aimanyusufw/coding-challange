import { zeroes } from "../../4-kyu/14-zeroes";

describe("zeroes", () => {
  it("should return 2 when input is (10,10)", () => {
    const expected = 2;
    const actual = zeroes(10, 10);

    expect(actual).toStrictEqual(expected);
  });

  it("should return 3 when input is (16,16)", () => {
    const expected = 3;
    const actual = zeroes(16, 16);

    expect(actual).toStrictEqual(expected);
  });
});

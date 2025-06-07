import { nextSmaller } from "../../4-kyu/14-nextSmaller";

describe("Example tests", function () {
  it("Smaller numbers", function () {
    expect(nextSmaller(21)).toStrictEqual(12);
    expect(nextSmaller(907)).toStrictEqual(790);
    expect(nextSmaller(531)).toStrictEqual(513);
    expect(nextSmaller(135)).toStrictEqual(-1);
    expect(nextSmaller(2071)).toStrictEqual(2017);
    expect(nextSmaller(1027)).toStrictEqual(-1);
    expect(nextSmaller(414)).toStrictEqual(144);
  });

  it("Bigger numbers", function () {
    expect(nextSmaller(123456798)).toStrictEqual(123456789);
    expect(nextSmaller(123456789)).toStrictEqual(-1);
    expect(nextSmaller(1234567908)).toStrictEqual(1234567890);
  });
});

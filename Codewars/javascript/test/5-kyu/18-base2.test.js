import { intToNegabinary, negabinaryToInt } from "../../5-Kyu/18-base2";

describe("Negabinary test", function () {
  it("should test for correct convertion from int to negabinary", function () {
    expect(intToNegabinary(6)).toStrictEqual("11010");
    expect(intToNegabinary(-6)).toStrictEqual("1110");
  });

  it("should test for correct convertion from negabinary to int", function () {
    expect(negabinaryToInt("11010")).toStrictEqual(6);
    expect(negabinaryToInt("1110")).toStrictEqual(-6);
  });
});

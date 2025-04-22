import { convertFrac } from "../../5-kyu/17-convertFrac";

describe("Fixed Tests", function () {
  it("Basic tests convertFrac", function () {
    expect(
      convertFrac([
        [1, 2],
        [1, 3],
        [1, 4],
      ])
    ).toStrictEqual("(6,12)(4,12)(3,12)");
    expect(
      convertFrac([
        [69, 130],
        [87, 1310],
        [3, 4],
      ])
    ).toStrictEqual("(18078,34060)(2262,34060)(25545,34060)");
    expect(
      convertFrac([
        [1, 2],
        [4, 5],
        [3, 4],
        [6, 9],
        [7, 10],
      ])
    ).toStrictEqual("(30,60)(48,60)(45,60)(40,60)(42,60)");
  });
});

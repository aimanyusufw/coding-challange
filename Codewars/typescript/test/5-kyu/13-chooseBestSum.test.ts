import { chooseBestSum } from "../../5-kyu/13-chooseBestSum";

describe("Fixed Tests", function () {
  it("chooseBestSum", function () {
    expect(chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toStrictEqual(163);

    expect(chooseBestSum(163, 3, [50])).toStrictEqual(null);

    expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toStrictEqual(
      228
    );
  });
});

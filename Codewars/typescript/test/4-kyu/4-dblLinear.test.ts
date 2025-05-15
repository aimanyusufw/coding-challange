import { dblLinear } from "../../4-kyu/4-dblLinear";

describe("Fixed Tests", function () {
  it("Basic tests maxRot", function () {
    expect(dblLinear(10)).toStrictEqual(22);
    expect(dblLinear(20)).toStrictEqual(57);
    expect(dblLinear(30)).toStrictEqual(91);
  });
});

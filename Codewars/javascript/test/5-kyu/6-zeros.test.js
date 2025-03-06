import { zeros } from "../../5-Kyu/6-zeros";

describe("Sample Tests", function () {
  it("Should pass sample tests", function () {
    expect(zeros(0)).toStrictEqual(0);
    expect(zeros(5)).toStrictEqual(1);
    expect(zeros(6)).toStrictEqual(1);
    expect(zeros(30)).toStrictEqual(7);
  });
});

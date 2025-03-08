import { ipsBetween } from "../../5-kyu/11-ipsBetween";

describe("example", function () {
  it("test", function () {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toStrictEqual(50);
    expect(ipsBetween("20.0.0.10", "20.0.1.0")).toStrictEqual(246);
  });
});

import { decomp } from "../../5-kyu/20-decomp";

describe("decomp", function () {
  it("Basic tests", function () {
    expect(decomp(17)).toStrictEqual("2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17");
    expect(decomp(5)).toStrictEqual("2^3 * 3 * 5");
    expect(decomp(22)).toStrictEqual(
      "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
    );
    expect(decomp(14)).toStrictEqual("2^11 * 3^5 * 5^2 * 7^2 * 11 * 13");
    expect(decomp(25)).toStrictEqual(
      "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
    );
  });
});

import { nextBigger } from "../../4-kyu/1-nextBigger";

describe("Basic tests", () => {
  it("Small numbers", () => {
    expect(nextBigger(12)).toStrictEqual(21);
    expect(nextBigger(513)).toStrictEqual(531);
    expect(nextBigger(2017)).toStrictEqual(2071);
    expect(nextBigger(414)).toStrictEqual(441);
    expect(nextBigger(144)).toStrictEqual(414);
  });
  it("Bigger numbers", () => {
    expect(nextBigger(123456789)).toStrictEqual(123456798);
    expect(nextBigger(1234567890)).toStrictEqual(1234567908);
    expect(nextBigger(9876543210)).toStrictEqual(-1);
    expect(nextBigger(9999999999)).toStrictEqual(-1);
    expect(nextBigger(59884848459853)).toStrictEqual(59884848483559);
  });
});

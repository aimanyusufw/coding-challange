import { josephusSurvivor } from "../../5-kyu/18-josephusSurvivor";

describe("Basic tests", function () {
  it("josephusSurvivor(7, 3)", () =>
    expect(josephusSurvivor(7, 3)).toStrictEqual(4));
  it("josephusSurvivor(11, 19)", () =>
    expect(josephusSurvivor(11, 19)).toStrictEqual(10));
  it("josephusSurvivor(40, 3)", () =>
    expect(josephusSurvivor(40, 3)).toStrictEqual(28));
  it("josephusSurvivor(14, 2)", () =>
    expect(josephusSurvivor(14, 2)).toStrictEqual(13));
  it("josephusSurvivor(100, 1)", () =>
    expect(josephusSurvivor(100, 1)).toStrictEqual(100));
  it("josephusSurvivor(1, 300)", () =>
    expect(josephusSurvivor(1, 300)).toStrictEqual(1));
  it("josephusSurvivor(2, 300)", () =>
    expect(josephusSurvivor(2, 300)).toStrictEqual(1));
  it("josephusSurvivor(5, 300)", () =>
    expect(josephusSurvivor(5, 300)).toStrictEqual(1));
  it("josephusSurvivor(7, 300)", () =>
    expect(josephusSurvivor(7, 300)).toStrictEqual(7));
  it("josephusSurvivor(300, 300)", () =>
    expect(josephusSurvivor(300, 300)).toStrictEqual(265));
});

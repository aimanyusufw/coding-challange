import { RomanNumerals } from "../../4-kyu/17-RomanNumerals";

describe("sample tests", () => {
  it("to", () => {
    expect(RomanNumerals.toRoman(1000)).toStrictEqual("M");
    expect(RomanNumerals.toRoman(4)).toStrictEqual("IV");
    expect(RomanNumerals.toRoman(1)).toStrictEqual("I");
    expect(RomanNumerals.toRoman(1990)).toStrictEqual("MCMXC");
    expect(RomanNumerals.toRoman(2008)).toStrictEqual("MMVIII");
  });

  it("from", () => {
    expect(RomanNumerals.fromRoman("XXI")).toStrictEqual(21);
    expect(RomanNumerals.fromRoman("I")).toStrictEqual(1);
    expect(RomanNumerals.fromRoman("IV")).toStrictEqual(4);
    expect(RomanNumerals.fromRoman("MMVIII")).toStrictEqual(2008);
    expect(RomanNumerals.fromRoman("MDCLXVI")).toStrictEqual(1666);
  });
});

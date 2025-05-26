import { add } from "../../4-kyu/9-add";

describe("Add two numbers", function () {
  it("should pass basic tests", function () {
    expect(add("1", "1")).toStrictEqual("2");
    expect(add("123", "456")).toStrictEqual("579");
    expect(add("888", "222")).toStrictEqual("1110");
    expect(add("1372", "69")).toStrictEqual("1441");
    expect(add("12", "456")).toStrictEqual("468");
    expect(add("101", "100")).toStrictEqual("201");
    expect(
      add("63829983432984289347293874", "90938498237058927340892374089")
    ).toStrictEqual("91002328220491911630239667963");
  });
});

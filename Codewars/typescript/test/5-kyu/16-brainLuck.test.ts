import { brainLuck } from "../../5-kyu/16-brainLuck";

describe("brainLuck", () => {
  it("Echo until byte(255) encountred", () => {
    expect(
      brainLuck(",+[-.,+]", "Codewars" + String.fromCharCode(255))
    ).toStrictEqual("Codewars");
  });

  it("Echo until byte(0) encountred", () => {
    expect(
      brainLuck(",[.[-],]", "Codewars" + String.fromCharCode(0))
    ).toStrictEqual("Codewars");
  });

  it("Two numbers multiplier", () => {
    expect(
      brainLuck(",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.", String.fromCharCode(8, 9))
    ).toStrictEqual(String.fromCharCode(72));
  });
});

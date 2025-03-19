import { rot13 } from "../../5-Kyu/10-rot13";

describe("Simple tests", () => {
  it("should work for 'EBG13 rknzcyr.'", () =>
    expect(rot13("EBG13 rknzcyr.")).toStrictEqual("ROT13 example."));
  it("should work for 'This is my first ROT13 excercise!'", () =>
    expect(rot13("This is my first ROT13 excercise!")).toStrictEqual(
      "Guvf vf zl svefg EBG13 rkprepvfr!"
    ));
});

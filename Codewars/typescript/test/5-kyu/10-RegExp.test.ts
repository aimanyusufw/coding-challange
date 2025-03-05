import { REGEXP } from "../../5-kyu/10-RegExp";

describe("Tests suite", () => {
  function doTest(string: string, expected: boolean) {
    const actual = REGEXP.test(string);
    const log = `"${string}" is${expected ? "" : " not"} a valid password\n`;
    expect(actual).toStrictEqual(expected);
  }

  it("sample tests", () => {
    doTest("fjd3IR9", true);
    doTest("ghdfj32", false);
    doTest("DSJKHD23", false);
    doTest("dsF43", false);
    doTest("4fdg5Fj3", true);
    doTest("DHSJdhjsU", false);
    doTest("fjd3IR9.;", false);
    doTest("fjd3  IR9", false);
    doTest("djI38D55", true);
    doTest("djI3_8D55", false);
    doTest("djI38D55@@", false);
  });
});

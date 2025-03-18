import { int32ToIp } from "../../5-Kyu/9-int32ToIp";

function doTest(int32, expected) {
  const actual = int32ToIp(int32);
  expect(actual).toStrictEqual(expected);
}

describe("Tests", () => {
  it("sample tests", () => {
    doTest(2154959208, "128.114.17.104");
    doTest(0, "0.0.0.0");
    doTest(2149583361, "128.32.10.1");
    doTest(2 ** 32 - 1, "255.255.255.255");
  });
});

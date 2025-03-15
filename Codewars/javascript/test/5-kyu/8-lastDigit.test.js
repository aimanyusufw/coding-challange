import { lastDigit } from "../../5-Kyu/8-lastDigit";
import { random } from "lodash";

describe("Testing lastDigit", () => {
  function doTest(n, m, expected) {
    const actual = lastDigit(n, m);
    expect(actual).toStrictEqual(expected);
  }

  it("Fixed tests", () => {
    doTest(4n, 1n, 4n);
    doTest(4n, 2n, 6n);
    doTest(9n, 7n, 9n);
    doTest(10n, 10000000000n, 0n);
    doTest(
      1606938044258990275541962092341162602522202993782792835301376n,
      2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n,
      6n
    );
    doTest(
      3715290469715693021198967285016729344580685479654510946723n,
      68819615221552997273737174557165657483427362207517952651n,
      7n
    );
  });

  describe("Random tests", () => {
    function makeRandomNum(minDigits = 1, maxDigits = 100) {
      let s = String(random(1, 9));
      for (let i = random(minDigits, maxDigits) - 1; i > 0; i--) {
        s += random(0, 9);
      }
      return BigInt(s);
    }
    it("m = 0", () => {
      for (let i = 0; i < 100; i++) {
        doTest(makeRandomNum(), 0n, 1n);
      }
    });
  });
});

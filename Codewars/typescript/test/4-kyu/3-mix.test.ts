import { mix } from "../../4-kyu/3-mix";

function testing(s1: string, s2: string, expected: string) {
  expect(mix(s1, s2)).toStrictEqual(expected);
}

describe("Fixed Tests", function () {
  it("mix", function () {
    testing("Are they here", "yes, they are here", "2:eeeee/2:yy/=:hh/=:rr");
    testing(
      "looping is fun but dangerous",
      "less dangerous than coding",
      "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
    );
    testing(
      " In many languages",
      " there's a pair of functions",
      "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
    );
  });
});

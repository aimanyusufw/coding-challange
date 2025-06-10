import { doubles } from "../../4-kyu/12-doubles";

function testing(maxk: number, maxn: number, expected: number) {
  const actual = doubles(maxk, maxn);
  expect(actual).toBeCloseTo(expected);
}

describe("Fixed Tests magnets", function () {
  it("Basic tests", function () {
    testing(1, 10, 0.5580321939764581);
    testing(10, 1000, 0.6921486500921933);
    testing(100, 10000, 0.693047195557606);
  });
});

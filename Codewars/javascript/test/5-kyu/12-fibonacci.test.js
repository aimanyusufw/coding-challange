import { fibonacci } from "../../5-Kyu/12-fibonacci";

const test = (input, expected) => {
  expect(fibonacci(input)).toStrictEqual(expected);
};

describe("Tests", () => {
  describe("Basic Tests", () => {
    it("Small Numbers", () => {
      test(0, 0);
      test(1, 1);
      test(5, 5);
      test(10, 55);
      test(15, 610);
      test(20, 6765);
    });

    it("Large Numbers", () => {
      test(50, 12586269025);
      test(60, 1548008755920);
      test(70, 190392490709135);
    });
  });
});

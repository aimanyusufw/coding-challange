import { rectangleRotation } from "../../4-kyu/9-rectangleRotation";

describe("Rectangle Rotation", () => {
  it("Basic tests", () => {
    expect(rectangleRotation(6, 4)).toStrictEqual(23);
    expect(rectangleRotation(30, 2)).toStrictEqual(65);
    expect(rectangleRotation(8, 6)).toStrictEqual(49);
    expect(rectangleRotation(16, 20)).toStrictEqual(333);
  });
});

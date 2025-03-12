import { alphanumeric } from "../../5-Kyu/7-alphanumeric";

describe("Tests", () => {
  it("test", () => {
    expect(alphanumeric("Mazinkaiser")).toStrictEqual(true);
    expect(alphanumeric("hello world_")).toStrictEqual(false);
    expect(alphanumeric("PassW0rd")).toStrictEqual(true);
    expect(alphanumeric("     ")).toStrictEqual(false);
  });
});

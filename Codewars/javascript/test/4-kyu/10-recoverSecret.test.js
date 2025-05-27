import { recoverSecret } from "../../4-kyu/10-recoverSecret";

describe("Tests", () => {
  it("test", () => {
    const secret1 = "whatisup";
    const triplets1 = [
      ["t", "u", "p"],
      ["w", "h", "i"],
      ["t", "s", "u"],
      ["a", "t", "s"],
      ["h", "a", "p"],
      ["t", "i", "s"],
      ["w", "h", "s"],
    ];

    expect(recoverSecret(triplets1)).toStrictEqual(secret1);
  });
});

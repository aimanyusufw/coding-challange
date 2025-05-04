import { parseMolecule } from "../../5-Kyu/17-parseMolecule";

describe("Tests", () => {
  it("test", () => {
    expect(parseMolecule("H2O")).toStrictEqual({ H: 2, O: 1 });
    expect(parseMolecule("Mg(OH)2")).toStrictEqual({ Mg: 1, O: 2, H: 2 });
    expect(parseMolecule("K4[ON(SO3)2]2")).toStrictEqual({
      K: 4,
      O: 14,
      N: 2,
      S: 4,
    });
  });
});

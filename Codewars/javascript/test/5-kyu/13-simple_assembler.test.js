import { simple_assembler } from "../../5-Kyu/13-simple_assembler";

describe("Tests", () => {
  it("test", () => {
    expect(
      simple_assembler([
        "mov a 5",
        "inc a",
        "dec a",
        "dec a",
        "jnz a -1",
        "inc a",
      ])
    ).toStrictEqual({ a: 1 });

    expect(
      simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
    ).toStrictEqual({ a: 0, b: -20 });
  });
});

import { SnakesLadders } from "../../5-Kyu/16-SnakesLadders";

describe("Tests", () => {
  it("test", () => {
    var game = new SnakesLadders();
    expect(game.play(1, 1)).toStrictEqual("Player 1 is on square 38");
    expect(game.play(1, 5)).toStrictEqual("Player 1 is on square 44");
    expect(game.play(6, 2)).toStrictEqual("Player 2 is on square 31");
    expect(game.play(1, 1)).toStrictEqual("Player 1 is on square 25");
  });
});

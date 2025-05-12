import { counterfeitDollar } from "../../5-Kyu/21-counterfeitDollar";

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    expect(
      counterfeitDollar(["ABCD EFGH even", "ABCI EFJK up", "ABIJ EFGH even"])
    ).toStrictEqual("K is the counterfeit coin and it is light.");

    expect(
      counterfeitDollar(["ABCD EFGH even", "ABCI EFJK down", "ABIJ EFGH even"])
    ).toStrictEqual("K is the counterfeit coin and it is heavy.");

    expect(
      counterfeitDollar(["ABCD EFGH even", "EFJK ABCI up", "ABIJ EFGH even"])
    ).toStrictEqual("K is the counterfeit coin and it is heavy.");
  });
});

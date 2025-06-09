import { interpreter } from "../../4-kyu/11-interpreter";

describe("Your Interpreter", function () {
  // Prints representation of datagrid - 0's are black and 1's are white
  // Note: prettyPrint() only works properly if your interpreter returns a representation of the datagrid in the correct format
  function prettyPrint(datagrid: string) {
    var consoleOutput = "<pre>",
      copy = datagrid.split("\r\n");
    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy[i].length; j++) {
        consoleOutput += `<span style="color:${
          copy[i][j] === "0" ? "black" : "white"
        };background-color:${
          copy[i][j] === "0" ? "black" : "white"
        }">xx</span>`;
      }
      consoleOutput += "<br />";
    }
    consoleOutput += "</pre>";
    console.log(consoleOutput);
    return datagrid;
  }
  // Displays the grid your interpreter returns
  function displayActual(actual: string) {
    console.log("You returned:");
    return prettyPrint(actual);
  }
  // Displays the expected final state of datagrid
  function displayExpected(expected: string) {
    console.log("Expected final state of data grid:");
    return prettyPrint(expected);
  }
  it("should work for some example test cases", function () {
    expect(
      displayActual(
        interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9)
      )
    ).toStrictEqual(
      displayExpected(
        "000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"
      )
    );
    expect(
      displayActual(
        interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9)
      )
    ).toStrictEqual(
      displayExpected(
        "111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"
      )
    );
    expect(
      displayActual(
        interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9)
      )
    ).toStrictEqual(
      displayExpected(
        "111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000"
      )
    );
    expect(
      displayActual(
        interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9)
      )
    ).toStrictEqual(
      displayExpected(
        "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"
      )
    );
    expect(
      displayActual(
        interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9)
      )
    ).toStrictEqual(
      displayExpected(
        "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"
      )
    );
  });
});

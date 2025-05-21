import { solution } from "../../4-kyu/5-stripComment";

describe("Sample Tests", function () {
  function runTest(text, markers, expected) {
    let title = `text = ${JSON.stringify(text)}, markers = ${JSON.stringify(
      markers
    )}`;
    let actual = solution(text, markers);
    it(title, function () {
      expect(actual).toStrictEqual(expected);
    });
  }

  const tests = [
    ["aa bb cc", [], "aa bb cc"],
    ["aa bb cc  ", [], "aa bb cc"],
    ["  aa bb cc", [], "  aa bb cc"],
    ["  aa # bb # cc  ", [], "  aa # bb # cc"],

    ["aa bb cc", ["#"], "aa bb cc"],
    ["aa bb # cc", ["#"], "aa bb"],
    ["aa# bb cc", ["#"], "aa"],
    ["aa #bb cc", ["#"], "aa"],
    ["aa # bb # cc", ["#"], "aa"],
    ["#aa bb cc", ["#"], ""],

    ["#aa bb\ncc dd", ["#"], "\ncc dd"],
    ["aa # bb\ncc dd", ["#"], "aa\ncc dd"],
    ["aa bb\n#cc dd", ["#"], "aa bb\n"],
    ["aa bb\ncc # dd", ["#"], "aa bb\ncc"],
    ["aa bb\ncc dd#", ["#"], "aa bb\ncc dd"],

    ["aa bb\ncc dd", ["#", "!"], "aa bb\ncc dd"],
    ["aa # bb\ncc dd", ["#", "!"], "aa\ncc dd"],
    ["aa bb\ncc ! dd", ["#", "!"], "aa bb\ncc"],
    ["#aa bb\n!cc dd", ["#", "!"], "\n"],
    ["aa ! bb\ncc # dd", ["#", "!"], "aa\ncc"],
    ["aa bb#\ncc dd!", ["#", "!"], "aa bb\ncc dd"],

    ["aa + bb\ncc - dd\nee * ff", ["+", "-", "*"], "aa\ncc\nee"],
    ["aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"], "aa\ncc\nee"],
  ];

  tests.forEach(([text, markers, expected]) =>
    runTest(text, markers, expected)
  );
});

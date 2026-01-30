import "package:test/test.dart";
import "../../bin/7kyu/16-addLetters.dart";

void main() {
  group("Fixed tests", () {
    List tests = [
      [
        ['a', 'b', 'c'],
        'f',
      ],
      [
        ['z'],
        'z',
      ],
      [
        ['a', 'b'],
        'c',
      ],
      [
        ['c'],
        'c',
      ],
      [
        ['z', 'a'],
        'a',
      ],
      [
        ['y', 'c', 'b'],
        'd',
      ],
      [<String>[], 'z'],
    ];
    tests.forEach((t) {
      test(
        "Testing for [${t[0].map((x) => "\"$x\"").join(', ')}]",
        () => expect(addLetters(t[0]), equals(t[1])),
      );
    });
  });
}

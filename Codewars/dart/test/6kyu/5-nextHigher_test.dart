import "package:test/test.dart";
import "../../bin/6kyu/5-nextHigher.dart";

void main() {
  group("Testing nextHigher", () {
    group("Basic tests", () {
      test("n = 128", () => expect(nextHigher(128), equals(256)));
      test("n = 1", () => expect(nextHigher(1), equals(2)));
      test("n = 1022", () => expect(nextHigher(1022), equals(1279)));
      test("n = 127", () => expect(nextHigher(127), equals(191)));
      test("n = 1253343", () => expect(nextHigher(1253343), equals(1253359)));
      test(
        "n = 201326592",
        () => expect(nextHigher(201326592), equals(268435457)),
      );
      test(
        "n = 805306367",
        () => expect(nextHigher(805306367), equals(939524095)),
      );
    });
  });
}

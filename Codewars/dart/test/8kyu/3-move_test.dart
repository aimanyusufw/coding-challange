import "package:test/test.dart";
import "../../bin/8kyu/3-move.dart";

void main() {
  group("Fixed tests", () {
    test("move(0, 4)", () => expect(move(0, 4), equals(8)));
    test("move(3, 6)", () => expect(move(3, 6), equals(15)));
    test("move(2, 5)", () => expect(move(2, 5), equals(12)));
  });
}

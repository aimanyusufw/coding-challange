import "package:test/test.dart";
import "../../bin/8kyu/13-goals.dart";

void main() {
  group("Fixed tests", () {
    test("goals(0, 0, 0)", () => expect(goals(0, 0, 0), equals(0)));
    test("goals(43, 10, 5)", () => expect(goals(43, 10, 5), equals(58)));
  });
}

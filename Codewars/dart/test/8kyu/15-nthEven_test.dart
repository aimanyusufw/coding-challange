import "package:test/test.dart";
import "../../bin/8kyu/15-nthEven.dart";

void main() {
  group('Fixed tests', () {
    test("Testing for 1", () => expect(nthEven(1), equals(0)));
    test("Testing for 2", () => expect(nthEven(2), equals(2)));
    test("Testing for 3", () => expect(nthEven(3), equals(4)));
    test("Testing for 100", () => expect(nthEven(100), equals(198)));
    test(
      "Testing for 1298734",
      () => expect(nthEven(1298734), equals(2597466)),
    );
  });
}

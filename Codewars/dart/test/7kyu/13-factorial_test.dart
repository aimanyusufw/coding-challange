import "package:test/test.dart";

import "../../bin/7kyu/13-factorial.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for 0", () => expect(factorial(0), equals(1)));
    test("Testing for 1", () => expect(factorial(1), equals(1)));
    test("Testing for 4", () => expect(factorial(4), equals(24)));
    test("Testing for 7", () => expect(factorial(7), equals(5040)));
    test(
      "Testing for 17",
      () => expect(factorial(17), equals(355687428096000)),
    );
  });
}

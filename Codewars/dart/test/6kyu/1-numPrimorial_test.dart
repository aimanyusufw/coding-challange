import "package:test/test.dart";
import "../../bin/6kyu/1-numPrimorial.dart";

void main() {
  group("Basic tests", () {
    test("Testing for 3", () => expect(numPrimorial(3), equals(30)));
    test("Testing for 4", () => expect(numPrimorial(4), equals(210)));
    test("Testing for 5", () => expect(numPrimorial(5), equals(2310)));
    test("Testing for 8", () => expect(numPrimorial(8), equals(9699690)));
    test("Testing for 9", () => expect(numPrimorial(9), equals(223092870)));
  });
}

// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";
import "../../bin/8kyu/17-mango.dart";

void main() {
  group("Fixed Tests", () {
    test("Basic Test Cases", () {
      expect(mango(3, 3), equals(6));
    });
    test("Basic Test Cases", () {
      expect(mango(9, 5), equals(30));
    });
  });
}

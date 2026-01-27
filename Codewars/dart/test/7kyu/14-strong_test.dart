import "package:test/test.dart";
import "../../bin/7kyu/14-strong.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for 1", () {
      expect(strong(1), equals("STRONG!!!!"));
    });
    test("Testing for 2", () {
      expect(strong(2), equals("STRONG!!!!"));
    });
    test("Testing for 145", () {
      expect(strong(145), equals("STRONG!!!!"));
    });
    test("Testing for 7", () {
      expect(strong(7), equals("Not Strong !!"));
    });
    test("Testing for 93", () {
      expect(strong(93), equals("Not Strong !!"));
    });
    test("Testing for 185", () {
      expect(strong(185), equals("Not Strong !!"));
    });
  });
}

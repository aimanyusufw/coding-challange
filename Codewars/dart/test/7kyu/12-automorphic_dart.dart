import "package:test/test.dart";
import "../../bin/7kyu/12-automorphic.dart";

void main() {
  group('Fixed tests', () {
    test("Testing for 1", () {
      expect(automorphic(1), equals("Automorphic"));
    });
    test("Testing for 3", () {
      expect(automorphic(3), equals("Not!!"));
    });
    test("Testing for 6", () {
      expect(automorphic(6), equals("Automorphic"));
    });
    test("Testing for 9", () {
      expect(automorphic(9), equals("Not!!"));
    });
    test("Testing for 25", () {
      expect(automorphic(25), equals("Automorphic"));
    });
    test("Testing for 53", () {
      expect(automorphic(53), equals("Not!!"));
    });
    test("Testing for 76", () {
      expect(automorphic(76), equals("Automorphic"));
    });
    test("Testing for 95", () {
      expect(automorphic(95), equals("Not!!"));
    });
    test("Testing for 625", () {
      expect(automorphic(625), equals("Automorphic"));
    });
    test("Testing for 225", () {
      expect(automorphic(225), equals("Not!!"));
    });
    test("Testing for 100", () {
      expect(automorphic(100), equals("Not!!"));
    });
  });
}

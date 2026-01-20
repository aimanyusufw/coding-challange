import "package:test/test.dart";
import "../../bin/7kyu/10-nthSmallest.dart";

void main() {
  group('Fixed tests', () {
    test("nthSmallest([3, 1, 2], 2)", () {
      expect(nthSmallest([3, 1, 2], 2), equals(2));
    });
    test("nthSmallest([15, 20, 7, 10, 4, 3], 3)", () {
      expect(nthSmallest([15, 20, 7, 10, 4, 3], 3), equals(7));
    });
    test("nthSmallest([-5, -1, -6, -18], 4)", () {
      expect(nthSmallest([-5, -1, -6, -18], 4), equals(-1));
    });
    test("nthSmallest([-102, -16, -1, -2, -367, -9], 5)", () {
      expect(nthSmallest([-102, -16, -1, -2, -367, -9], 5), equals(-2));
    });
    test("nthSmallest([2, 169, 13, -5, 0, -1], 4)", () {
      expect(nthSmallest([2, 169, 13, -5, 0, -1], 4), equals(2));
    });
  });
}

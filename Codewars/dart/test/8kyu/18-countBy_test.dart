import "package:test/test.dart";

import "../../bin/8kyu/18-countBy.dart";

void main() {
  group("Fixed tests", () {
    test("countBy(1, 10)", () {
      expect(countBy(1, 10), equals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    });
    test("countBy(2, 5)", () {
      expect(countBy(2, 5), equals([2, 4, 6, 8, 10]));
    });
    test("countBy(3, 7)", () {
      expect(countBy(3, 7), equals([3, 6, 9, 12, 15, 18, 21]));
    });
    test("countBy(50, 5)", () {
      expect(countBy(50, 5), equals([50, 100, 150, 200, 250]));
    });
    test("countBy(100, 6)", () {
      expect(countBy(100, 6), equals([100, 200, 300, 400, 500, 600]));
    });
  });
}

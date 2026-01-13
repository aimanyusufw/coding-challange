import "package:test/test.dart";
import "../../bin/7kyu/4-solve.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for [3, 4, 4, 3, 6, 3]", () {
      expect(solve([3, 4, 4, 3, 6, 3]), equals([4, 6, 3]));
    });
    test("Testing for [1, 2, 1, 2, 1, 2, 3]", () {
      expect(solve([1, 2, 1, 2, 1, 2, 3]), equals([1, 2, 3]));
    });
    test("Testing for [1, 2, 3, 4]", () {
      expect(solve([1, 2, 3, 4]), equals([1, 2, 3, 4]));
    });
    test("Testing for [1, 1, 4, 5, 1, 2, 1]", () {
      expect(solve([1, 1, 4, 5, 1, 2, 1]), equals([4, 5, 2, 1]));
    });
    test("Testing for [1, 2, 1, 2, 1, 1, 3]", () {
      expect(solve([1, 2, 1, 2, 1, 1, 3]), equals([2, 1, 3]));
    });
  });
}

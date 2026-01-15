import "package:test/test.dart";
import "../../bin/7kyu/5-incrementer.dart";

void main() {
  group('Fixed tests', () {
    test("Testing for []", () {
      expect(incrementer([]), equals([]));
    });
    test("Testing for [1, 2, 3]", () {
      expect(incrementer([1, 2, 3]), equals([2, 4, 6]));
    });
    test("Testing for [4, 6, 7, 1, 3]", () {
      expect(incrementer([4, 6, 7, 1, 3]), equals([5, 8, 0, 5, 8]));
    });
    test("Testing for [3, 6, 9, 8, 9]", () {
      expect(incrementer([3, 6, 9, 8, 9]), equals([4, 8, 2, 2, 4]));
    });
    test("Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]", () {
      expect(
        incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]),
        equals([2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]),
      );
    });
  });
}

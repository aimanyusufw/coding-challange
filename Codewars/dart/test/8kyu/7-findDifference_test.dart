import "package:test/test.dart";
import "../../bin/8kyu/7-findDifference.dart";

void main() {
  group('basic tests', () {
    test(
      "findDifference([3, 2, 5], [1, 4, 4])",
      () => expect(findDifference([3, 2, 5], [1, 4, 4]), equals(14)),
    );
    test(
      "findDifference([9, 7, 2], [5, 2, 2])",
      () => expect(findDifference([9, 7, 2], [5, 2, 2]), equals(106)),
    );
    test(
      "findDifference([11, 2, 5], [1, 10, 8])",
      () => expect(findDifference([11, 2, 5], [1, 10, 8]), equals(30)),
    );
    test(
      "findDifference([4, 4, 7], [3, 9, 3])",
      () => expect(findDifference([4, 4, 7], [3, 9, 3]), equals(31)),
    );
    test(
      "findDifference([15, 20, 25], [10, 30, 25])",
      () => expect(findDifference([15, 20, 25], [10, 30, 25]), equals(0)),
    );
  });
}

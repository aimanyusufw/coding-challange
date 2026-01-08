// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";
import "../../bin/8kyu/20-maxMin.dart";

void doTest(List<int> list, int equals, [isMin = true]) {
  final actual = isMin
      ? min(List.unmodifiable(list))
      : max(List.unmodifiable(list));
  final funcName = isMin ? 'min' : 'max';
  test('$funcName($list) should returns $equals', () => expect(actual, equals));
}

void main() {
  //min
  doTest([-52, 56, 30, 29, -54, 0, -110], -110);
  doTest([42, 54, 65, 87, 0], 0);
  doTest([1, 2, 3, 4, 5, 10], 1);
  doTest([-1, -2, -3, -4, -5, -10], -10);

  // max
  doTest([-52, 56, 30, 29, -54, 0, -110], 56, false);
  doTest([4, 6, 2, 1, 9, 63, -134, 566], 566, false);
  doTest([5], 5, false);
  doTest([534, 43, 2, 1, 3, 4, 5, 5, 443, 443, 555, 555], 555, false);
}

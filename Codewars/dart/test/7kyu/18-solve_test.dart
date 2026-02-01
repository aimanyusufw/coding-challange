// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";
import "../../bin/7kyu/18-solve.dart";

void main() {
  group('Basic tests', () {
    final tests = [
      ("Codewars@codewars123.com", [1, 18, 3, 2]),
      (r"P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H", [9, 9, 6, 9]),
      (r"RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD", [15, 8, 6, 9]),
      (r"$Cnl)Sr<7bBW-&qLHI!mY41ODe", [10, 7, 3, 6]),
      (r"@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft", [7, 13, 4, 10]),
    ];
    for (final (s, expected) in tests) {
      test('Testing for "$s"', () {
        expect(solve(s), equals(expected));
      });
    }
  });
}

// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";
import "../../bin/8kyu/19-abbrevName.dart";

void main() {
  void doTest(String name, String expected) {
    test(
      'abbrevName("$name")',
      () => expect(abbrevName(name), equals(expected)),
    );
  }

  group("should pass fixed tests", () {
    doTest("Sam Harris", "S.H");
    doTest("Patrick Feenan", "P.F");
    doTest("Evan Cole", "E.C");
    doTest("P Favuzzi", "P.F");
    doTest("David Mendieta", "D.M");
    doTest("patrick feeney", "P.F");
  });
}

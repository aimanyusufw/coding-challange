import "package:test/test.dart";
import "../../bin/7kyu/15-vaporCode.dart";

void main() {
  void doTest(String s, String expected) {
    test("$s : $expected", () {
      expect(vaporCode(s), equals(expected));
    });
  }

  group("Some Examples", () {
    doTest(
      "Lets go to the movies",
      "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S",
    );
    doTest(
      "Why isn't my code working?",
      "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?",
    );
  });
}

import "package:test/test.dart";
import "../../bin/6kyu/3-maxBall.dart";

void main() {
  testequal(int v0, int exp) =>
      test("Testing for $v0", () => expect(maxBall(v0), equals(exp)));
  group("fixed tests", () {
    testequal(37, 10);
    testequal(45, 13);
    testequal(99, 28);
  });
}

import "package:test/test.dart";
import "../../bin/7kyu/21-growingPlant.dart";

void main() {
  group('basic tests', () {
    test(
      "growingPlant(100, 10, 910)",
      () => expect(growingPlant(100, 10, 910), equals(10)),
    );
    test(
      "growingPlant(10, 9, 4)",
      () => expect(growingPlant(10, 9, 4), equals(1)),
    );
    test(
      "growingPlant(5, 2, 5)",
      () => expect(growingPlant(5, 2, 5), equals(1)),
    );
    test(
      "growingPlant(5, 2, 6)",
      () => expect(growingPlant(5, 2, 6), equals(2)),
    );
  });
}

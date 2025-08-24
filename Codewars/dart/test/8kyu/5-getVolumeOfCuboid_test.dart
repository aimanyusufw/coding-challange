import "package:test/test.dart";

import "../../bin/8kyu/5-getVolumeOfCuboid.dart";

void main() {
  group("Sample Test Cases", () {
    test(
      "values: 1, 2, 2; expected result: 4",
      () => expect(getVolumeOfCuboid(1, 2, 2), equals(4)),
    );
    test(
      "values: 6.3, 2, 5; expected result: 63",
      () => expect(getVolumeOfCuboid(6.3, 2, 5), equals(63)),
    );
  });
}

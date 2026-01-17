import "package:test/test.dart";
import "../../bin/7kyu/7-tidyNumber.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for 12", () {
      expect(tidyNumber(12), equals(true));
    });
    test("Testing for 102", () {
      expect(tidyNumber(102), equals(false));
    });
    test("Testing for 9672", () {
      expect(tidyNumber(9672), equals(false));
    });
    test("Testing for 2789", () {
      expect(tidyNumber(2789), equals(true));
    });
    test("Testing for 2335", () {
      expect(tidyNumber(2335), equals(true));
    });
  });
}

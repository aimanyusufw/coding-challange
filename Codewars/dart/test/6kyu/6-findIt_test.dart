import "package:test/test.dart";
import "../../bin/6kyu/6-findIt.dart";

void main() {
  group("Fixed Tests", () {
    test("Test [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]", () {
      expect(
        findIt([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
        equals(5),
      );
    });
    test("Test [1,1,2,-2,5,2,4,4,-1,-2,5]", () {
      expect(findIt([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), equals(-1));
    });
    test("Test [20,1,1,2,2,3,3,5,5,4,20,4,5]", () {
      expect(findIt([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), equals(5));
    });
    test("Test [10]", () {
      expect(findIt([10]), equals(10));
    });
    test("Test [10, 10, 10]", () {
      expect(findIt([10, 10, 10]), equals(10));
    });
    test("Test [1,1,1,1,1,1,10,1,1,1,1]", () {
      expect(findIt([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), equals(10));
    });
    test("Test [5,4,3,2,1,5,4,3,2,10,10]", () {
      expect(findIt([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), equals(1));
    });
  });
}

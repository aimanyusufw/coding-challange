import "package:test/test.dart";
import "../../bin/7kyu/8-balancedNum.dart";

void main() {
  group("Check balanced number", () {
    test("Testing for 7", () {
      expect(balancedNum(7), equals("Balanced"));
    });
    test("Testing for 959", () {
      expect(balancedNum(959), equals("Balanced"));
    });
    test("Testing for 13", () {
      expect(balancedNum(13), equals("Balanced"));
    });
    test("Testing for 432", () {
      expect(balancedNum(432), equals("Not Balanced"));
    });
    test("Testing for 424", () {
      expect(balancedNum(424), equals("Balanced"));
    });
  });
  group("Check Larger number", () {
    test("Testing for 1024", () {
      expect(balancedNum(1024), equals("Not Balanced"));
    });
    test("Testing for 66545", () {
      expect(balancedNum(66545), equals("Not Balanced"));
    });
    test("Testing for 295591", () {
      expect(balancedNum(295591), equals("Not Balanced"));
    });
    test("Testing for 1230987", () {
      expect(balancedNum(1230987), equals("Not Balanced"));
    });
    test("Testing for 56239814", () {
      expect(balancedNum(56239814), equals("Balanced"));
    });
  });
}

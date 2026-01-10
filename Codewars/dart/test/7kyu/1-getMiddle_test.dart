import "package:test/test.dart";
import "../../bin/7kyu/1-getMiddle.dart";

void main() {
  test("test", () {
    expect(getMiddle("test"), equals("es"));
  });
  test("testing", () {
    expect(getMiddle("testing"), equals("t"));
  });
  test("middle", () {
    expect(getMiddle("middle"), equals("dd"));
  });
  test("A", () {
    expect(getMiddle("A"), equals("A"));
  });
}

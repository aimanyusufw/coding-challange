import "package:test/test.dart";
import "../../bin/8kyu/16-apple.dart";


void main() {
  test("apple", () {
    expect(apple('50'), equals("It's hotter than the sun!!"));
    expect(apple(2), equals('Help yourself to a honeycomb Yorkie for the glovebox.'));
  });
}

import "package:test/test.dart";
import "../../bin/8kyu/2-multiply.dart";

// Add your own tests here.
// See https://pub.dartlang.org/packages/test
void main() {
  test('Multiply should return the product', () {
    expect(multiply(1, 1), equals(1));
  });
}

import "package:test/test.dart";
import "../../bin/7kyu/6-SequenceSum.dart";

void main() {
  test('Basic tests', () {
    expect(SequenceSum.showSequence(0), equals("0=0"));
    expect(SequenceSum.showSequence(6), equals("0+1+2+3+4+5+6 = 21"));
  });
}

import "package:test/test.dart";
import "../../bin/6kyu/4-howmuch.dart";

void main() {
  group("How Much", () {
    test('Basic Tests', () {
      expect(
        howmuch(1, 100),
        equals([
          ["M: 37", "B: 5", "C: 4"],
          ["M: 100", "B: 14", "C: 11"],
        ]),
      );
      expect(
        howmuch(1000, 1100),
        equals([
          ["M: 1045", "B: 149", "C: 116"],
        ]),
      );
      expect(
        howmuch(10000, 9950),
        equals([
          ["M: 9991", "B: 1427", "C: 1110"],
        ]),
      );
      expect(howmuch(2950, 2950), equals([]));
      expect(
        howmuch(8200, 8000),
        equals([
          ['M: 8038', 'B: 1148', 'C: 893'],
          ['M: 8101', 'B: 1157', 'C: 900'],
          ['M: 8164', 'B: 1166', 'C: 907'],
        ]),
      );
    });
  });
}

import 'package:test/test.dart';
import '../../bin/7kyu/20-capitalize.dart';

void main() {
  void doTest(String s, List<int> ind, String expected) {
    test(
      'capitalize("$s", $ind)',
      () => expect(capitalize(s, List.unmodifiable(ind)), equals(expected)),
    );
  }

  group('Fixed tests', () {
    doTest('abcdef', [1, 3, 5], 'aBcDeF');
    doTest('codewars', [0, 2, 4, 6], 'CoDeWaRs');
    doTest('abracadabra', [2, 6, 9, 10], 'abRacaDabRA');
    doTest('codewarriors', [0, 2, 4, 6, 8], 'CoDeWaRrIors');
    doTest('indexinglessons', [0, 3, 6, 9, 12, 15, 18, 21], 'IndExiNglEssOns');
    doTest('codingisafunactivity', [
      0,
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
    ], 'CoDiNgIsAfUnAcTiViTy');
  });
}

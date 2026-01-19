import "package:test/test.dart";
import "../../bin/7kyu/9-mouthSize.dart";

void main() {
  group("Basic tests", () {
    test("mouthSize('toucan')   -->   'wide'", () {
      expect(mouthSize("toucan"), equals("wide"));
    });
    test("mouthSize('ant bear')   -->   'wide'", () {
      expect(mouthSize("ant bear"), equals("wide"));
    });
    test("mouthSize('alligator')   -->   'small'", () {
      expect(mouthSize("alligator"), equals("small"));
    });
    test("mouthSize('Alligator')   -->   'small'", () {
      expect(mouthSize("Alligator"), equals("small"));
    });
  });
}

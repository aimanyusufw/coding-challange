import "package:test/test.dart";
import "../../bin/8kyu/6-sayHello.dart";

void main() {
  group("Basic Tests", () {
    test("Basic Tests", () {
      expect(
        sayHello("Mr. Spock"),
        equals("Hello, Mr. Spock"),
        reason: "name = 'Mr. Spock'",
      );
      expect(
        sayHello("Captain Kirk"),
        equals("Hello, Captain Kirk"),
        reason: "name = 'Captain Kirk'",
      );
      expect(
        sayHello("Liutenant Uhura"),
        equals("Hello, Liutenant Uhura"),
        reason: "name = 'Liutenant Uhura'",
      );
      expect(
        sayHello("Dr. McCoy"),
        equals("Hello, Dr. McCoy"),
        reason: "name = 'Dr. McCoy'",
      );
      expect(
        sayHello("Mr. Scott"),
        equals("Hello, Mr. Scott"),
        reason: "name = 'Mr. Scott'",
      );
    });
  });
}

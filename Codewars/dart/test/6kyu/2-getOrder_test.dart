import "package:test/test.dart";
import "../../bin/6kyu/2-getOrder.dart";

void main() {
  group("Solution", () {
    test("Fixed Tests", () {
      expect(
        getOrder(
          "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza",
        ),
        equals(
          "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke",
        ),
      );
      expect(
        getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
        equals("Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"),
      );
      expect(
        getOrder("burgerfriesfriesfriesfriesfriespizzasandwichcokefriesburger"),
        equals(
          "Burger Burger Fries Fries Fries Fries Fries Fries Pizza Sandwich Coke",
        ),
      );
    });
  });
}

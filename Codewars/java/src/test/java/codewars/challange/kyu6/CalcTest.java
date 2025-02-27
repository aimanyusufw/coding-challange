package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;


class CalcTest {
    private Calc calc = new Calc();

  @Test
  public void shouldWorkWithEmptyString() {
      assertEquals(0, calc.evaluate(""));
  }
  
  @Test
  public void shouldParseNumbers() {
      assertEquals(3, calc.evaluate("3"));
  }

  @Test
  public void shouldParseFloatNumbers() {
      assertEquals(3.5, calc.evaluate("3.5"));
  }

  @Test
  public void shouldSupportAddition() {
      assertEquals( 4, calc.evaluate("1 3 +"));
  }

  @Test
  public void shouldSupportMultiplication() {
      assertEquals(3, calc.evaluate("1 3 *"));
  }

  @Test
  public void shouldSupportSubstraction() {
      assertEquals(-2, calc.evaluate("1 3 -"));
  }

  @Test
  public void shouldSupportDivision() {
      assertEquals(2, calc.evaluate("4 2 /"));
  }
}
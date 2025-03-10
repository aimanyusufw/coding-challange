package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class KeypadTest {
    @Test
    public void simpleTest() {
      assertEquals(9, Keypad.presses("LOL"));
      assertEquals(13, Keypad.presses("HOW R U"));
    }
}
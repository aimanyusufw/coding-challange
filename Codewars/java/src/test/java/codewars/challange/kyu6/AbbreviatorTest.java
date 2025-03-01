package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class AbbreviatorTest {
    private Abbreviator abbr = new Abbreviator();

	@Test
	public void testInternationalization() {
		assertEquals("i18n", abbr.abbreviate("internationalization"));
	}
}
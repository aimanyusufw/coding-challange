import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import codewars.challange.kyu6.MazeRunner;




class MazeRunnerTest {
    int[][] maze = {
			{ 1, 1, 1, 1, 1, 1, 1 },
			{ 1, 0, 0, 0, 0, 0, 3 },
			{ 1, 0, 1, 0, 1, 0, 1 },
			{ 0, 0, 1, 0, 0, 0, 1 },
			{ 1, 0, 1, 0, 1, 0, 1 },
			{ 1, 0, 0, 0, 0, 0, 1 },
			{ 1, 2, 1, 0, 1, 0, 1 } };
	
    @Test
    void testBasic() {
      assertEquals("Finish", MazeRunner.walk(maze, new String[] { "N", "N", "N", "N", "N", "E", "E", "E", "E", "E" }));
      assertEquals("Finish", MazeRunner.walk(maze, new String[] { "N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E" }));
      assertEquals("Finish", MazeRunner.walk(maze, new String[] { "N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W" }));

      assertEquals("Dead", MazeRunner.walk(maze, new String[] { "N", "N", "N", "W", "W" }));
      assertEquals("Dead", MazeRunner.walk(maze, new String[] { "N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S" }));

      assertEquals("Lost", MazeRunner.walk(maze, new String[] { "N", "E", "E", "E", "E" }));
    }
}

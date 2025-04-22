package codewars.challange.kyu6;

// Codewars 14
// Title :  Maze Runner
// Instructions :   Your aim is to navigate the maze and reach the finish point without touching any walls
// Challange Url : https://www.codewars.com/kata/58663693b359c4a6560001d6/train/java
// Level : 6 kyu

public class MazeRunner {

    // Method 1
    public static String walk(int[][] maze, String[] directions) {
        int x = 0, y = 0;

        for (int i = 0; i < maze.length; i++) {
            for (int j = 0; j < maze[i].length; j++) {
                if (maze[i][j] == 2) {
                    y = i;
                    x = j;
                }
            }
        }

        for (String dir : directions) {
            switch (dir) {
                case "N": y--; break;
                case "S": y++; break;
                case "E": x++; break;
                case "W": x--; break;
            }


            if (y < 0 || y >= maze.length || x < 0 || x >= maze[0].length || maze[y][x] == 1) {
                return "Dead";
            }


            if (maze[y][x] == 3) {
                return "Finish";
            }
        }

        return "Lost";
    }
    // Method 2

    // Other User Method
    // public static String walk(int[][] F, String[] D) { 
    //     int index1=-1; int index2=-2; int n=F.length; 
    //     for (int i=0;i<n;i++){ 
    //       for (int j=0;j<n;j++){
    //          if(F[i][j]==2){   
    //             index1=i; index2=j; break; 
    //          }
    //       }
    //     } 
    //     for (String S : D){  
    //         switch (S){ 
    //             case "N":index1--; break; 
    //             case "E":index2++;break; 
    //             case "W":index2--;break;
    //             default: index1++; 
    //         } 
    //       if(index1==-1||index2==-1||index1==n||index2==n||F[index1][index2]==1)return "Dead";
    //       if(F[index1][index2]==3)return "Finish"; 
    //     } 
    //     return "Lost";
    //     }
}

package codewars.challange.kyu6;

// Codewars 10
// Title :  Matrix Addition
// Instructions :  Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two.
// Challange Url : https://www.codewars.com/kata/526233aefd4764272800036f/train/java
// Level : 6 kyu

public class Matrix {

    // Method 1
    public static int[][] matrixAddition(int[][] a, int[][] b) {
        int[][] result = new int[a.length][a[0].length];
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }

    // Method 2

    // Other User Method
    // public static int[][] matrixAddition(int[][] a, int[][] b) {
    //     int matLen = a.length;
    //     int[][] resultMatrix = new int[matLen][matLen];
    //     for (int i = 0; i < matLen; i++) {
    //         for (int j = 0; j < matLen; j++) {
    //             resultMatrix[i][j] = a[i][j] + b[i][j];
    //         }
    //     }
    //     return resultMatrix;
    // }
}

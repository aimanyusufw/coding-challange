package codewars.challange.kyu6;
import java.util.ArrayList;
import java.util.List;

// Codewars 12
// Title :  Pascal's Triangle
// Instructions :  In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
// Challange Url : https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/java
// Level : 6 kyu

public class PascalsTriangle {
    // Method 1
    public static long[] generate(int levels) {
        List<Long> triangle = new ArrayList<>();

        for (int i = 0; i < levels; i++) {
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    triangle.add(1L);
                } else {
                    int index = triangle.size() - i;
                    long value = triangle.get(index) + triangle.get(index - 1);
                    triangle.add(value);
                }
            }
        }

        return triangle.stream().mapToLong(Long::longValue).toArray();
    }

    // Method 2

    // Other User Method
    // static long[] generate(int level) {
    //     long[] pascal = new long[level * (level + 1) / 2];
    //     for (int i = 0, l = 0; l < level; l++) {
    //     for (long f = 1, k = 0; k <= l; f = f * (l - k) / (k + 1), k++) {
    //         pascal[i++] = f;
    //     }
    //     }
    //     return pascal;
    // }
}
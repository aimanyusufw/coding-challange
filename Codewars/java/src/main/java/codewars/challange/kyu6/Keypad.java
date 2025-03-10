package codewars.challange.kyu6;
import java.util.HashMap;
import java.util.Map;

// Codewars 11
// Title :  Multi-tap Keypad Text Entry on an Old Mobile Phone
// Instructions :  Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
// Challange Url : https://www.codewars.com/kata/54a2e93b22d236498400134b/train/java
// Level : 6 kyu

public class Keypad {

    static String[] keys = {"1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#"};
    // Method 1
    public static int presses (String phrase){
        Map<Character, Integer> keypad = new HashMap<>();
                
        for (String key : keys) {
            for (int i = 0; i < key.length(); i++) {
                keypad.put(key.charAt(i), i + 1);
            }
        }
        int totalPresses = 0;
        for (char c : phrase.toUpperCase().toCharArray()) {
            totalPresses += keypad.getOrDefault(c, 0);
        }
        return totalPresses;
    }

    // Method 2

    // Other User Method
        
    // public static int presses(String phrase) {
    //     int nPresses = 0;
        
    //     for (char c : phrase.toUpperCase().toCharArray())
    //     for (String s : keys)
    //         nPresses += s.indexOf(c) + 1;
    //     return nPresses;
    // }
}

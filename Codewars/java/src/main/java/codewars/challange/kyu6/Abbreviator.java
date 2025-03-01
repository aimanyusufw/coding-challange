package codewars.challange.kyu6;

// Codewars 9
// Title :  Word a10n (abbreviation)
// Instructions :  Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
// Challange Url : https://www.codewars.com/kata/5375f921003bf62192000746/train/java
// Level : 6 kyu

public class Abbreviator {
    
    // Method 1
    public String abbreviate(String string){
        StringBuilder result = new StringBuilder();
        StringBuilder word = new StringBuilder();

        for (var c : string.toCharArray()) {
            if (Character.isLetter(c)) {
                word.append(c);
            }else {
                if (word.length() >= 4) {
                    result.append(word.charAt(0))
                            .append(word.length() - 2)
                            .append(word.charAt(word.length() -1));
                }else {
                    result.append(word);
                }
                result.append(c);
                word.setLength(0);
            }
        }
        
        if (word.length() >= 4) {
            result.append(word.charAt(0))
                    .append(word.length() - 2)
                    .append(word.charAt(word.length() -1));
        }else {
            result.append(word);
        }

        return result.toString();
    }

    // Method 2

    // Other User Method
    // public String abbreviate(String string){
    //     for (var s : string.split("[^a-zA-Z]")) {
    //         string = string.replaceFirst(s,  s.length() > 3 ? "" + s.charAt(0) + (s.length() - 2) + s.charAt(s.length()-1) : s);
    //     }
    //     return string;
    // }
}
package codewars.challange.kyu6;

// Codewars 8
// Title :  Reverse polish notation calculator
// Instructions :  Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
// Challange Url : https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/java
// Level : 6 kyu

import java.util.Stack;

public class Calc {
    // Method 1
    public double evaluate(String exp) {
        if (exp.isEmpty()) return 0; 

        Stack<Double> stack = new Stack<>();
        String[] tokens = exp.split("\\s+"); 

        for (String token : tokens) {
            switch (token) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    double b = stack.pop();
                    double a = stack.pop();
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/":
                    double divisor = stack.pop();
                    double dividend = stack.pop();
                    stack.push(dividend / divisor);
                    break;
                default:
                    stack.push(Double.parseDouble(token)); 
            }
        }
        return stack.pop(); 
    }

    // Method 2
    
    // Other User Method
    // public double evaluate(String expr) {
    //     if (expr.equals("")) {
    //       return 0;
    //     }
      
    //     Stack<Double> stack = new Stack<Double>();
    //     String[] atoms = expr.split(" ");
        
    //     for (String atom: atoms) {
    //       Double a, b;
    //       switch (atom) {
    //         case "+": stack.push(stack.pop() + stack.pop()); break;
    //         case "-": b = stack.pop(); a = stack.pop(); stack.push(a - b); break;
    //         case "*": stack.push(stack.pop() * stack.pop()); break;
    //         case "/": b = stack.pop(); a = stack.pop(); stack.push(a / b); break;
    //         default:
    //           stack.push(Double.parseDouble(atom));
    //       }
    //     }
        
    //     return stack.pop();
    //   }
}
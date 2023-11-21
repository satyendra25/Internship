import java.util.Stack;

import java.util.*;

public class BalancedExpression {

    static boolean isBalanced(String expression) {
        if (expression == null || expression.length() == 0) {
            return true; // Empty expression is considered balanced
        }

        Stack<Character> stack = new Stack<>();
        for (char ch : expression.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else if (ch == ')' || ch == ']' || ch == '}') {
                if (stack.isEmpty()) {
                    return false; // Closing bracket without a corresponding opening bracket
                }

                char top = stack.pop();
                if ((ch == ')' && top != '(') || (ch == ']' && top != '[') || (ch == '}' && top != '{')) {
                    return false; // Mismatched opening and closing brackets
                }
            }
        }

        return stack.isEmpty(); // Expression is balanced if the stack is empty
    }

    public static void main(String[] args) {
        String expression = "{{[[(())])}}";
        boolean isExpressionBalanced = isBalanced(expression);

        if (isExpressionBalanced) {
            System.out.println("The given expression is balanced.");
        } else {
            System.out.println("The given expression is not balanced.");
        }
    }
}
 class BalanceExpression {
    
}

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        // iterate throught th tokens 
        for( String token: tokens){
            if(isOperator(token)){
                // if the token is an operator pop two operands and the stack and perform the operation
                int operand2 = stack.pop();
                int operand1 = stack.pop();
                int result = performOperation(operand1, operand2, token);
                // push the result back to the stack
                stack.push(result);

            } else{
                // if the token is an operand, converted into integer and push to stack
                stack.push(Integer.parseInt(token));
            }
        }
       return stack.pop();
        }
        
    
    // helper method to ckeck if the token is an integer
    private boolean isOperator(String token){
        return token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/");
    }
     // helper method to perform operation bassed on the operator
        private int performOperation (int operand1, int operand2, String operator){
            switch(operator){
                case "+":
                return operand1 + operand2;
                case "-":
                return operand1 - operand2;
                case "*":
                return operand1 * operand2;
                case "/":
                return operand1 / operand2;
                default:
            throw new IllegalArgumentException("invalid operator: " + operator);

            }
        }
}

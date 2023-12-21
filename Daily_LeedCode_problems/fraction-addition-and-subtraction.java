class Solution {
    public String fractionAddition(String expression) {
        String[] fracs = expression.split("/|(?=[+-])");

        int i = 0;
        int A = 0;
        int B = 1;

        while(i<fracs.length){
            int a = Integer.valueOf(fracs[i]);
            int b = Integer.valueOf(fracs[i+1]);

            A = A* b + a * B;
            B*= b;
             int g = gcd(Math.abs(A), Math.abs(B));
             A/= g;
             B /=g;
             i+= 2;
        }
        return A + "/" +B;
    }
    private int gcd(int x, int y){
        return (x% y == 0) ? y : gcd(y, x%y);
    }
}

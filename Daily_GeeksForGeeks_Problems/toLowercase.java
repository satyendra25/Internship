class Solution {
    static String toLower(String S) {
        String lowercase = S.toLowerCase(); // Convert the input string to lowercase
        return lowercase; // Return the lowercase string
    }
    
    public static void main(String[] args) {
        String original = "i AM A DEVELOPER";
        String result = toLower(original);
        System.out.println(result); // Output print
    }
}

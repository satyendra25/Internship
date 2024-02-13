class Solution {
       static String delAlternate(String S) {
        StringBuilder result = new StringBuilder();
        
        // Iterate through the string
        for (int i = 0; i < S.length(); i++) {
            // Append characters at even indices (i.e., indices 0, 2, 4, ...)
            if (i % 2 == 0) {
                result.append(S.charAt(i));
            }
        }
        
        return result.toString();
    }
}

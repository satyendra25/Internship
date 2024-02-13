class Solution {
    String isVowel(char c) {
        // Convert the character to lowercase to handle both uppercase and lowercase characters
        char charLowercase = Character.toLowerCase(c);
        
        // Check if the character is a vowel
        boolean isVowel = charLowercase == 'a' || charLowercase == 'e' || charLowercase == 'i' || 
                          charLowercase == 'o' || charLowercase == 'u';
        
        // Return the result as a string
        if (isVowel) {
            return c + " is a vowel.";
        } else {
            return c + " is not a vowel.";
        }
    }
}

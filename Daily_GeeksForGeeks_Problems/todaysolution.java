class Solution {
    int atoi(String s) {
        if (s == null || s.isEmpty()) {
            return -1; // Conversion not feasible
        }

        int result = 0;
        int sign = 1;
        int startIndex = 0;

        // Skip leading whitespaces
        int i = 0;
        while (i < s.length() && Character.isWhitespace(s.charAt(i))) {
            i++;
        }

        // Check for sign
        if (i < s.length() && (s.charAt(i) == '-' || s.charAt(i) == '+')) {
            if (s.charAt(i) == '-') {
                sign = -1;
            }
            i++;
        }

        for (; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch >= '0' && ch <= '9') {
                int digit = ch - '0';
                if (result > Integer.MAX_VALUE / 10 || (result == Integer.MAX_VALUE / 10 && digit > 7)) {
                    return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
                }
                result = result * 10 + digit;
            } else {
                break; // Stop at the first non-numeric character
            }
        }

        return sign * result;
    }
}

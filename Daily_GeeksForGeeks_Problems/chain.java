
class Solution {
    static int isCircle(int N, String A[]) {
        if (N <= 0 || A == null || A.length == 0) {
            return 0; // Not a circle
        }

        // Create a map to store the outdegree and indegree of each character
        Map<Character, Integer> outdegree = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();

        // Calculate the outdegree and indegree for each character
        for (String str : A) {
            char firstChar = str.charAt(0);
            char lastChar = str.charAt(str.length() - 1);
            outdegree.put(firstChar, outdegree.getOrDefault(firstChar, 0) + 1);
            indegree.put(lastChar, indegree.getOrDefault(lastChar, 0) + 1);
        }

        // Check if all characters have equal outdegree and indegree
        for (char ch : outdegree.keySet()) {
            if (!indegree.containsKey(ch) || !outdegree.get(ch).equals(indegree.get(ch))) {
                return 0; // Not a circle
            }
        }

        return 1; // It's a circle
    }
}

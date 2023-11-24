class Solution {

    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map = new HashMap<>(); // HashMap to store the strings from 'list1' and their indices.
        List<String> result = new ArrayList<>(); // ArrayList to store comon strings with the least index sum.
        int minIndexSum = Integer.MAX_VALUE; // Variable to keep track of the minimum index sum encountered.

        // Store the indices of strings from list1 in the map
        for (int i = 0; i < list1.length; i++) {
            map.put(list1[i], i);
        }
        // Looping through strings in 'list2'
        for (int j = 0; j < list2.length; j++) {
            // If list2 string exists in the map (common string found)
            if (map.containsKey(list2[j])) {
                int indexSum = j + map.get(list2[j]); // Calculate the index sum (indexSum) of the common string
                // Update minimum index sum
                if (indexSum < minIndexSum) { // IF indexSum is smaller than 'minIndexSum' update minIndexSum
                                              // minIndexSum = indexSum;
                    result.clear(); // Clear previous result as new minimum is found
                    result.add(list2[j]); // Add the current common string to result list
                } else if (indexSum == minIndexSum) {
                    // If another string has the same minimum index sum, add it to the result list
                    result.add(list2[j]);
                }
            }
        }

        return result.toArray(new String[result.size()]);
    }

    public static void main(String[] args) {
        Solution sol = new Solution(); // Solution is an instance class created
        // define sample string arrays 'list1' and list2
        String[] list1 = { "Shogun", "Tapioca Express", "Burger King", "KFC" };
        String[] list2 = { "KFC", "Burger King", "Tapioca Express", "Shogun" };

        String[] commonLeastIndexSum = sol.findRestaurant(list1, list2);// call findRestaurant to find common string
                                                                        // with the least index sum.

        for (String restaurant : commonLeastIndexSum) {
            System.out.println(restaurant); // Print the common strings obtained.
        }
    }
}

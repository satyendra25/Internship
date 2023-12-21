

class Solution{

    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map = new HashMap<>();
        List<String> result = new ArrayList<>();
        int minIndexSum = Integer.MAX_VALUE;

        // Store the indices of strings from list1 in the map
        for (int i = 0; i < list1.length; i++) {
            map.put(list1[i], i);
        }

        for (int j = 0; j < list2.length; j++) {
            // If list2 string exists in the map (common string found)
            if (map.containsKey(list2[j])) {
                int indexSum = j + map.get(list2[j]);
                // Update minimum index sum
                if (indexSum < minIndexSum) {
                    minIndexSum = indexSum;
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
        Solution solution = new Solution();

        String[] list1 = {"Shogun", "Tapioca Express", "Burger King", "KFC"};
        String[] list2 = {"KFC", "Burger King", "Tapioca Express", "Shogun"};

        String[] commonLeastIndexSum = solution.findRestaurant(list1, list2);

        for (String restaurant : commonLeastIndexSum) {
            System.out.println(restaurant);
        }
    }
}

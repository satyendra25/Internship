class Solution {
    public int findLHS(int[] nums) {       
        Map<Integer, Integer> map = new HashMap<>();
        int count=0;
        for(int i:nums){
            map.put(i,map.getOrDefault(i,0)+1);
        }
        for(int key:map.keySet()){
            if(map.containsKey(key+1)){
               count = Math.max(count,map.get(key)+map.get(key+1));
            }           
        } 
        return count;
    }
}

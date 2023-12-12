class Solution{

    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        findAll("(", 1, 0, result, n); 
        return result;
    }
    // recursion
    void findAll(String current, int o, int c, List<String> result, int n){
        // n=2 
        if(current.length()==2*n) {
            result.add(current);
            return;
        }
        if(o<n)
        findAll(current+"(", o+1, c, result, n);
        if(c<o)
        findAll(current+")", o, c+1, result, n);
    }
}

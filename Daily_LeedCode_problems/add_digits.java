class Solution {  
    public int addDigits(int num) {
        if(num==0){
            return 0;
        }
        // if num is completely devisible by 9 so return 9 otherwise it should be remainder.
        return(num%9==0)?9:num%9;
        
    }
}

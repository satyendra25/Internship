/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
  List<Integer> result = new ArrayList<>();
   if(root==null){
       return result;
   }    
   Queue<TreeNode> q = new LinkedList<>();
   q.add(root);
   while(q.size()>0){
       int count =q.size();
       while(count -->0){
           TreeNode val = q.remove();
           if(count==0){
               result.add(val.val);
           }
           if(val.left!=null){
               q.add(val.left);
           }
           if(val.right!=null){
               q.add(val.right);
           }
       }
   }
   return result;
   
}
}

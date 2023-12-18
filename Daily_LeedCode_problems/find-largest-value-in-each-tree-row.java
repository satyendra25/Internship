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
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if(root == null) return result;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        q.offer(null);
        int max = Integer.MIN_VALUE;
        while(!q.isEmpty()){
            TreeNode tmp = q.poll();
            if(tmp!=null){
                if(max <tmp.val) max = tmp.val;
                if(tmp.left!=null) q.offer(tmp.left);
                if(tmp.right!=null) q.offer(tmp.right);
        } else {
            result.add(max);
            max = Integer.MIN_VALUE;
            if(!q.isEmpty()) q.offer(null);
        }
    }
    return result;
}
}

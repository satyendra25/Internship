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
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
         Map<String, Integer> subtreeCount = new HashMap<>();
        List<TreeNode> duplicateSubtrees = new ArrayList<>();
        serialize(root, subtreeCount, duplicateSubtrees);
        return duplicateSubtrees;
    }

    private String serialize(TreeNode node, Map<String, Integer> subtreeCount, List<TreeNode> duplicateSubtrees) {
        if (node == null) {
            return "#";
        }

        String subtree = node.val + "," + serialize(node.left, subtreeCount, duplicateSubtrees)
                + "," + serialize(node.right, subtreeCount, duplicateSubtrees);

        subtreeCount.put(subtree, subtreeCount.getOrDefault(subtree, 0) + 1);

        if (subtreeCount.get(subtree) == 2) {
            duplicateSubtrees.add(node);
        }

        return subtree;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.right.left = new TreeNode(2);
        root.right.right = new TreeNode(4);
        root.right.left.left = new TreeNode(4);

        Solution solution = new Solution();
        List<TreeNode> duplicates = solution.findDuplicateSubtrees(root);

        for (TreeNode node : duplicates) {
            // Printing values of duplicate subtree roots
            System.out.println(node.val);
        }
    }
}

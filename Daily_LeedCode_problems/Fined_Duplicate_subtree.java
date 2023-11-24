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
class Solution { //This class is the logic that finding duplicate subtrees.

    public List<TreeNode> findDuplicateSubtrees(TreeNode root) { // Here this method takes the rot of the binbary tree as input and returns a list containing root nodes of any one of the duplicate subtrees found.
        Map<String, Integer> subtreeCount = new HashMap<>(); // The HashMap is created to store the serialization of subtrees as keys and their occurence count as values.
        List<TreeNode> duplicateSubtrees = new ArrayList<>(); // ArrayList to store the root nodes of duplicate subtrees.
        serialize(root, subtreeCount, duplicateSubtrees);   // 'serialize' methode is called th traverse the tree and identify duplicate subtrees.
        return duplicateSubtrees;
    }

    private String serialize(TreeNode node, Map<String, Integer> subtreeCount, List<TreeNode> duplicateSubtrees) {
        if (node == null) {
            return "#";     // if the node is null, returns "#" indicating an empty subtree.
        }

        String subtree = node.val + "," + serialize(node.left, subtreeCount, duplicateSubtrees)
                + "," + serialize(node.right, subtreeCount, duplicateSubtrees);

        subtreeCount.put(subtree, subtreeCount.getOrDefault(subtree, 0) + 1);
        // Checks and updates the 'subtreeCount' map to keep track of the occurence count of each subtree serialization.
        if (subtreeCount.get(subtree) == 2) {    // if a subtree occurs for the second time ('subtreeCount' equals 2), adds its root node to 'duplicateSubtrees'.
            duplicateSubtrees.add(node);
        }

        return subtree;
    }

    public static void main(String[] args) {    // In Main method the code snippet to create a binary tree.
        TreeNode root = new TreeNode(1);
        // Construct the binary tree (Left and right child nodes are assigned accordingly)
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.right.left = new TreeNode(2);
        root.right.right = new TreeNode(4);
        root.right.left.left = new TreeNode(4);

        Solution solution = new Solution();   // Creates an instance of 'DuplicateSubtrees' class.
        List<TreeNode> duplicates = solution.findDuplicateSubtrees(root); // Invokes 'findDuplicateSubtrees' method to identify duplicate subtrees in the tree.

        for (TreeNode node : duplicates) {
            // Printing values of duplicate subtree roots
            System.out.println(node.val);
        }  // Prints the values of the root nodes of the duplcate subtrees found.
    }
}

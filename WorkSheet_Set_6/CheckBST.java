class Node {
    int data;
    Node left, right;

    Node(int value) {
        data = value;
        left = right = null;
    }
}

public class CheckBST {
    Node root;

    CheckBST() {
        root = null;
    }

    boolean isBST(Node node) {
        return isBSTUtil(node, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    boolean isBSTUtil(Node node, int min, int max) {
        if (node == null) {
            return true;
        }

        if (node.data <= min || node.data >= max) {
            return false;
        }

        return (isBSTUtil(node.left, min, node.data) && isBSTUtil(node.right, node.data, max));
    }

    public static void main(String[] args) {
        CheckBST tree = new CheckBST();

        // Create a sample binary tree (not a BST)
        tree.root = new Node(3);
        tree.root.left = new Node(2);
        tree.root.right = new Node(5);
        tree.root.left.left = new Node(1);
        tree.root.left.right = new Node(4);

        if (tree.isBST(tree.root)) {
            System.out.println("The given binary tree is a BST.");
        } else {
            System.out.println("The given binary tree is not a BST.");
        }
    }
}

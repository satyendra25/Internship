



    class Node {
        int data;
        Node next;
    
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    class SortedLinkedList {
        Node head;
    
        SortedLinkedList() {
            this.head = null;
        }
    
        void insert(int data) {
            Node newNode = new Node(data);
            if (head == null || head.data >= newNode.data) {
                newNode.next = head;
                head = newNode;
            } else {
                Node current = head;
                while (current.next != null && current.next.data < newNode.data) {
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    
        void display() {
            Node current = head;
            while (current != null) {
                System.out.print(current.data + " ");
                current = current.next;
            }
            System.out.println();
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            SortedLinkedList sortedList = new SortedLinkedList();
            sortedList.insert(5);
            sortedList.insert(10);
            sortedList.insert(2);
            sortedList.insert(7);
    
            System.out.println("Sorted Linked List:");
            sortedList.display();
        }
    }
    


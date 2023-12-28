

import java.util.*;


public class Main {
    
    public static ArrayList<Integer> removeAndSort(ArrayList<Integer> arrList, int k) {
    Iterator<Integer> iterator = arrList.iterator();
    while(iterator.hasNext()){
        int num = iterator.next();
        if(num < k) {
        iterator.remove();
    }
}Collections. sort(arrList);
return arrList;

    }
public static void main(String[] args) {
    int[] arr = {1,6,9,2,11};
    int k =8;
    ArrayList<Integer> arrayList = new ArrayList<>();
    for(int num : arr){
        arrayList.add(num);
    }
    ArrayList<Integer> result = removeAndSort(arrayList, k);
    System.out.println("Sorted ArrayList after removing elements less than " + k + ": " + result);
}
    }

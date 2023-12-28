
interface in1{
    void display(int p );
}
 class testClass implements in1{

    public void display(int k ) {
        int count = countPrimes(k);
        System.out.println("Total no of prime numbers between 2 and " + k  + " ( inclusive)" + count);
    }
    private int countPrimes(int n) {
        if(n <= 1) {
            return 0;
        }
        boolean[] primes = new boolean[n + 1];
        for (int i =2; i<=n; i++){
            primes[i] = true;
        }
        for(int p=2; p*p<=n; p++){
            if(primes[p]){
                for(int i =p*p; i<=n; i +=p){
                    primes[i] = false;
                }
            }
        }

        int count =0;
        for(int i=2; i<=n; i++){
            if(primes[i]){
                count++;
            }
        }
        return count;
    }
 }
 public class Total_Prime_No{
    public static void main(String[] args){
      in1 obj = new testClass();
      int k = 20;
      obj.display(k);  
    }
 }

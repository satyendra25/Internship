package Rivision;
import java.security.SecureRandom;
import java.util.Random;

public class Password_generator {
	private static final String uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final String lowercase = "abcdefghijklmnopqrstuvwxyx";
	private static final String digits = "0123456789";
	private static final String symbols = "!@#$%^&*()_+-=[]{}\\|;:'\".,<>/";
	
	
	public static String generatePassword (int length) {
		StringBuilder sb = new StringBuilder();
		String characters = uppercase + lowercase + digits +symbols;
		SecureRandom random = new SecureRandom();
		for (int i =0; i<length; i++) {
			int index = random.nextInt(characters.length());
			sb.append(characters.charAt(index));
		}
		return sb.toString();		
	}
	
	public static String categorizePassword(String pswd) {
		int length = pswd.length();
		
		if(length<8) {
			return "Very weak";
		} else if(length<=10) {
			return "Weak";
		} else if(length<=12) {
			return "Medium";
		} else if(length<=14) {
			return "Strong";
		} else {
			return "Very Strong";
		}	
	}
	
	public static void main(String []args) {
		
		int passwordLength = 8 + (int)(Math.random()*9); // Random length between 8 and 16
		String password = generatePassword(passwordLength);
		String category = categorizePassword(password);
		
		System.out.println("password is = " + password);
		System.out.println("password is = " + category);		
	}	
}

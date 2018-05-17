class Test{
	public static void main(String ar[]){

		String s = "NIIT";
		String p ="NIIT";
		String s1 = new String("NIIT");
		String s2 = new String("NIIT");
		
		System.out.println(s==p);
		System.out.println(s.equals(p) );
		System.out.println(s1==s2);
		System.out.println(s1.equals(s2));
	}
}


class Sample{
	public static void main(String ar[]){
		String s="NIIT";
		s.concat(" One World");
		System.out.println(s);
	}
}
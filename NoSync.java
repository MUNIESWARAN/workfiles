class NoSync extends Thread{

	public static int counter = 0;
	
	public static void increment(){
		counter++;
		System.out.println("Counter = "  + counter);
		counter--;
		try{
		Thread.sleep(100);
		}catch(Exception e){}
	}

	public void run(){
		increment();
	}

	public static void main(String ar[]){
		for(int i=0;i<100;i++){
		NoSync obj = new NoSync();
		obj.start();	
		}	
	}
}	
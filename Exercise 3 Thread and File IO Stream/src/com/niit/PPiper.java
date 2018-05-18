package com.niit;

import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.util.Date;

public class PPiper {
    public static void main(String[] args) throws IOException, InterruptedException {

     
    	PipedOutputStream pipedOutputStream = new PipedOutputStream();
        PipedInputStream pipedInputStream = new PipedInputStream(pipedOutputStream);

        Client clientObj = new Client(pipedOutputStream);
        
        FServer fServerObj = new FServer(pipedInputStream);

        Thread clientThread = new Thread(clientObj);
        clientThread.setName("<Client Program ");
        Thread fServerThread = new Thread(fServerObj);
        fServerThread.setName("<Server Program ");

        clientThread.start();
        fServerThread.start();
     
        clientThread.join();
        fServerThread.join();
        pipedOutputStream.close();
        pipedInputStream.close();
    }
}

class Client implements Runnable {

    private final PipedOutputStream pipedOutputStream;

    public Client(PipedOutputStream pipedOutputStream) {
        this.pipedOutputStream = pipedOutputStream;
        System.out.println("Inititating...\nClient....\nClient PipedOutputStream.....\n");
    }

    @Override
    public void run() {

        int index = 0;
        try {
        	System.out.println("Client Program Authenticating \n "+ Thread.currentThread().getName()+"/id>:"+new Date().getTime());
            while (index <= 25) {
                System.out.println("Client thread generating: " + index);
                pipedOutputStream.write(index);
                Thread.sleep(50);
                index++;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        } finally {
            try {
                pipedOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

class FServer implements Runnable {

    private final PipedInputStream pipedInputStream;

    public FServer(PipedInputStream pipedInputStream) {
        this.pipedInputStream = pipedInputStream;
        System.out.println("Inititating...\nfServer....\nFserver PipedInputStream.....\n");
    }

    @Override
    public void run() {
        try {
         	System.out.println("Server Program Authenticating \n "+ Thread.currentThread().getName()+"/id>:"+new Date().getTime());
            System.out.println("Forked Successfully >> Server...");
            while (true) {
                int value = pipedInputStream.read();
                System.out.println("FServer thread consuming: " + value);
                Thread.sleep(50);
                if (value == 25)
                    break;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        } finally {
            try {
                pipedInputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
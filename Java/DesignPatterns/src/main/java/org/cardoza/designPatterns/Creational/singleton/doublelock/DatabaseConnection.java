package org.cardoza.designPatterns.Creational.singleton.doublelock;

import java.util.concurrent.atomic.AtomicInteger;

public class DatabaseConnection {

    private static DatabaseConnection databaseConnection = null;
    private static AtomicInteger counter = new AtomicInteger(0);

    private DatabaseConnection(){
        counter.incrementAndGet();
        System.out.println("Created the databaseConnection object! by: "+ Thread.currentThread().getName());
    }

    public static DatabaseConnection getInstance(){
        // double checking
        // check first time
        if(databaseConnection == null){
            // acquire lock
            synchronized (DatabaseConnection.class){
                // check again
                if(databaseConnection == null){
                    databaseConnection = new DatabaseConnection();
                }
            }

        }
        System.out.println("Instance Count: "+ counter);
        return databaseConnection;
    }

}

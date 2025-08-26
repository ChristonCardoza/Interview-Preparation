package org.cardoza.designPatterns.Creational.singleton.eagerloading;

import java.util.concurrent.atomic.AtomicInteger;

public class DatabaseConnection {

    private static AtomicInteger counter = new AtomicInteger(0);
    private static DatabaseConnection databaseConnection = new DatabaseConnection();


    private DatabaseConnection(){
        counter.incrementAndGet();
        System.out.println("Created the databaseConnection object! by: "+ Thread.currentThread().getName());

        String msg = """
                1. This will work with multithreading environment
                2. Incase we have more Singleton class like this, then app startup will increase.
                3. We can't pass any attribute inside the constructor!!!!
                """;
        System.out.println(msg);
    }

    public static DatabaseConnection getInstance() {
        System.out.println("Instance Count: "+ counter);
        return databaseConnection;
    }

}

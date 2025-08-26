package org.cardoza.designPatterns.Creational.singleton.synchronised;

import java.util.concurrent.atomic.AtomicInteger;

public class DatabaseConnection {

    private static DatabaseConnection databaseConnection = null;
    private static AtomicInteger counter = new AtomicInteger(0);

    private DatabaseConnection(){
        counter.incrementAndGet();

        System.out.println("Created the databaseConnection object by eager loading!");
        String msg = """
                1. This will work with multithreading environment
                2. This will  be slow performing
                """;
        System.out.println(msg);
    }

    public static synchronized DatabaseConnection getInstance() {
        if(databaseConnection == null){
            databaseConnection = new DatabaseConnection();
        }
        System.out.println("Instance Count: "+ counter);
        return databaseConnection;
    }

}

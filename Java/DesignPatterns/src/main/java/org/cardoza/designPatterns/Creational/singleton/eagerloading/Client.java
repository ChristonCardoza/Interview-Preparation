package org.cardoza.designPatterns.Creational.singleton.eagerloading;

import org.cardoza.designPatterns.Creational.singleton.eagerloading.DatabaseConnection;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class Client {
    public static void main(String[] args) {

//        DatabaseConnection databaseConnection = DatabaseConnection.getInstance();

        List<Thread> threads = new ArrayList<>();

        IntStream.range(1,11).forEach(i -> {
                    Runnable task = DatabaseConnection::getInstance;
                    Thread t = new Thread(task);
                    t.setName("Thread - "+ i);
                    threads.add(t);
                }
        );

        threads.forEach(Thread::start);
    }
}

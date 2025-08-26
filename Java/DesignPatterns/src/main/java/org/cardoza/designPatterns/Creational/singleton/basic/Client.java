package org.cardoza.designPatterns.Creational.singleton.basic;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class Client {

    public static void main(String[] args) {

//        DatabaseConnection dc1 = DatabaseConnection.getInstance();
//
//        DatabaseConnection dc2 = DatabaseConnection.getInstance();

        List<Thread> threads = new ArrayList<>();

        IntStream.range(1,11).forEach( i -> {
                    Runnable task = DatabaseConnection::getInstance;
            Thread t = new Thread(task);
            t.setName("Thread - "+ i);
            threads.add(t);
                }
        );

        threads.forEach(Thread::start);

    }
}

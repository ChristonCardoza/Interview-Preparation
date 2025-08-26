package org.cardoza.designPatterns.Creational.builder;

public class Client {

    public static void main(String[] args) {
        Student student = Student.getBuilder()
                .setName("Girbaan")
                .setAge(25)
                .setPsp(90.0)
                .setGradYear(2020)
                .build();

        System.out.println(student);
    }

}

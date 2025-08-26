package org.cardoza.designPatterns.Creational.prototype;

public class Client {

    public static void main(String[] args) {
        System.out.println(
            """
               STEP 1:
                    * Identify the class which we want use prototype
                    * Implement the copy|clone method, all child class must implements these methods

               STEP 2:
                    * Create a registry for store the prototype object

               STEP 3:
                    * Where we want to create a object, create a copy of prototype and just set the attribute which are different
            """
        );

        StudentRegistry registry = new StudentRegistry();
        fillRegistry(registry);

        Student vipul = registry.get("Sept22").clone();
        vipul.setName("vipul");
        vipul.setAge(25);
        vipul.setPsp(99);

        Student biljit = registry.get("Sept22").clone();
        biljit.setName("biljit");
        biljit.setAge(26);
        biljit.setPsp(95);

        Student suhail = registry.get("Sept22Intellijent").clone();
        suhail.setName("suhail");
        suhail.setAge(26);
        suhail.setPsp(90);

        IntellijStudent intellijStudent = (IntellijStudent) registry.get("Sept22Intellijent").clone();
        intellijStudent.setIq(120);

        System.out.println(vipul);
        System.out.println(biljit);
        System.out.println(suhail);

    }

    public static void fillRegistry(StudentRegistry registry){
        Student sept22Prototype = new Student();
        sept22Prototype.setBatchName("Sept22");
        sept22Prototype.setAvgBatchPsp(85.0);

        registry.register("Sept22", sept22Prototype);

        IntellijStudent sept22IntellijStudentPrototype = new IntellijStudent();
        sept22IntellijStudentPrototype.setBatchName("Sept22");
        sept22IntellijStudentPrototype.setAvgBatchPsp(85.0);

        registry.register("Sept22Intellijent", sept22IntellijStudentPrototype);

    }



}

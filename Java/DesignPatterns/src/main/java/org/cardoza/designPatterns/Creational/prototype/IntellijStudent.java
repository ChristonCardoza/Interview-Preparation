package org.cardoza.designPatterns.Creational.prototype;

public class IntellijStudent extends  Student{

    private int iq;

    IntellijStudent() {}

    IntellijStudent(IntellijStudent intellijStudent) {
        super(intellijStudent);
        this.iq = intellijStudent.iq;
    }

    public int getIq() {
        return iq;
    }

    public void setIq(int iq) {
        this.iq = iq;
    }

    public IntellijStudent clone(){
        return new IntellijStudent(this);
    }

    @Override
    public String toString() {
        return super.toString() + " IntellijStudent{" +
                "iq=" + iq +
                '}';
    }
}

package org.cardoza.designPatterns.Structural.decorator;

public class OrangeCone implements IceCream{

    // OrangeCone will only behave like a base

    @Override
    public int getCost() {
        return 10;
    }

    @Override
    public String getDescription() {
        return "Orange Cone";
    }
}

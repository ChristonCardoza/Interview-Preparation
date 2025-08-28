package org.cardoza.designPatterns.Structural.decorator;

public class StrawberryScoop implements IceCream {

    private IceCream iceCream;

    public StrawberryScoop(IceCream iceCream) {
        this.iceCream = iceCream;
    }

    @Override
    public int getCost() {
        return iceCream.getCost() + 30;
    }

    @Override
    public String getDescription() {
        return iceCream.getDescription() + " + StrawberryScoop";
    }
}

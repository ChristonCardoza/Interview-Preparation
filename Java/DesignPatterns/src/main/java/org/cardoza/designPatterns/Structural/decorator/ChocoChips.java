package org.cardoza.designPatterns.Structural.decorator;

public class ChocoChips implements IceCream {

    private  IceCream iceCream;

    public ChocoChips(IceCream iceCream){
        this.iceCream = iceCream;
    }

    @Override
    public int getCost() {
        if(iceCream != null){
            return iceCream.getCost() + 5;
        }

        return 5;
    }

    @Override
    public String getDescription() {
        return iceCream.getDescription() + " + Choco Chips";
    }
}

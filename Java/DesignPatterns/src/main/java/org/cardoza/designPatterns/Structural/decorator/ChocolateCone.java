package org.cardoza.designPatterns.Structural.decorator;

public class ChocolateCone implements IceCream {

    // Chocolate can behave like a base as well ass Addon

    private IceCream iceCream;

    private ChocolateCone() {

    }

    public ChocolateCone(IceCream iceCream){
        this.iceCream = iceCream;
    }

    @Override
    public int getCost() {
        if(iceCream != null){
            return  iceCream.getCost() + 30;
        }

        return 30;
    }

    @Override
    public String getDescription() {
        if(iceCream !=null){
            return iceCream.getDescription() + " + Chocolate Cone";
        }
        return "Chocolate Cone";
    }
}

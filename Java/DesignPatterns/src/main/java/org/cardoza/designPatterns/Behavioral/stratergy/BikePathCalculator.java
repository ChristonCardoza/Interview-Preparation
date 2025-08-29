package org.cardoza.designPatterns.Behavioral.stratergy;

public class BikePathCalculator implements PathCalculatorStrategy{
    @Override
    public void findPath(String fromLocation, String toLocation) {
        System.out.println("Bike path");
    }
}

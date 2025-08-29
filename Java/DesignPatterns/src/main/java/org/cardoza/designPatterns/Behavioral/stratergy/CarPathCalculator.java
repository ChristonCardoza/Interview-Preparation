package org.cardoza.designPatterns.Behavioral.stratergy;

public class CarPathCalculator implements PathCalculatorStrategy{
    @Override
    public void findPath(String fromLocation, String toLocation) {
        System.out.println("Car path");
    }
}
